import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import axios from "axios";
import "react-big-calendar/lib/css/react-big-calendar.css"; // Default styles for react-big-calendar
// import "./ManageMeeting.css"; // Optional custom styles
import { getStudentAttendance, getStudentByAuthId, getStudentscheduleById, studentClockIn, studentClockOut } from "../../../../api/studentApi";
import { clockIn, clockOut, getTeacherAttendance, getTeacherscheduleById } from "../../../../api/teacherApi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getBatchIdByMeetingId, getTeacherByMeetingId } from "../../../../api/meetingApi";
import {
    Table,
    Spin,
    Alert,
    Button,
    Tooltip,
    Tag,
    Modal,
    Form,
    Input,
    DatePicker,
    message,
    Upload,
} from "antd";
import { createReschedule } from "../../../../api/rescheduleAPI";
import { IoMdArrowRoundBack } from "react-icons/io";

const localizer = momentLocalizer(moment);
const { RangePicker } = DatePicker;

function RescheduleMeeting() {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [attendanceStatus, setAttendanceStatus] = useState({});
    const [loadData, setLoadData] = useState(false);
    const locationData = useLocation();
    const [meeting_id, setMeetingId] = useState("");
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [student_id, setStudentId] = useState("");
    const [batch_id, setBatchId] = useState("");
    const [teacher_id, setTeacherId] = useState("");
    const [form] = Form.useForm();

    const [teacherName, setTeacherName] = useState("");

    useEffect(() => {
        if (locationData.state && locationData.state.meetingId) {
            setMeetingId(locationData.state.meetingId);
        } else {
            setError("Meeting ID not provided in the location state.");
            setLoading(false);
        }
    }, [locationData.state]);

    useEffect(() => {
        const fetchSchedule = async () => {
            console.log("meeting_id", meeting_id);
            if (!meeting_id) return;
            try {

                setLoading(true);
                const authId = JSON.parse(localStorage.getItem("sessionData")).userId;
                const studentData = await getStudentByAuthId(authId);
                console.log("studentData", studentData.student._id);
                // const response = await getStudentscheduleById(studentData.student._id);
                setStudentId(studentData.student._id);
                const batchdata = await getBatchIdByMeetingId(meeting_id);
                console.log("batchdata", batchdata);
                setBatchId(batchdata.batch_id);
                const teacherData = await getTeacherByMeetingId(meeting_id);
                console.log("teacherData", teacherData);
                setTeacherName(teacherData.teachers[0].user_id.name);
                setTeacherId(teacherData.teachers[0]._id);
                const response = await getTeacherscheduleById(teacherData.teachers[0]._id);
                console.log("response", response);
                const attendanceData = await getTeacherAttendance(teacherData.teachers[0]._id);
                console.log("attendanceData", attendanceData);
                const schedule = response.data.schedule;

                let formattedEvents = schedule.map((item, index) => ({
                    id: index,
                    title: item.meeting_title || "No Title", // Use the meeting title from the API response
                    start: new Date(item.date),
                    end: new Date(new Date(item.date).getTime() + 60 * 60 * 1000), // Assume 1-hour meetings
                    meetingId: item.meeting_id, // Use meeting_id to track clocking
                    meeting_url: item.meeting_url || null, // Include meeting URL
                    meeting_reschedule: item.meeting_reschedule,
                    clockIn: false,
                    clockOut: false,
                }));
                attendanceData.attendance.map((item) => {
                    formattedEvents = formattedEvents.map((event) => {
                        if (item?.meeting_id === event.meetingId) {
                            return {
                                ...event,
                                clockIn: item.clock_in_time ? true : false,
                                clockOut: item.clock_out_time ? true : false
                            };
                        } else {
                            return event;
                        }
                    });
                });

                setEvents(formattedEvents);
                setLoading(false);
            } catch (err) {
                setError("Failed to fetch schedule");
                setLoading(false);
            }
        };

        fetchSchedule();
    }, [meeting_id]);

    // Handle event click (meeting link)
    const handleSelectEvent = (event) => {
        if (event.meeting_url) {
            window.open(event.meeting_url, "_blank"); // Open the meeting URL in a new tab
        } else {
            alert("Meeting link is not available.");
        }
    };

    // Handle clock-in action
    const handleClockIn = async (meetingId) => {
        try {
            const authId = JSON.parse(localStorage.getItem("sessionData")).userId;
            const teacherdata = await getTeacherByAuthId(authId);

            // Clock-in API requires teacherId and meetingId
            const response = await clockIn(teacherdata.teacher._id, meetingId); // Make sure you pass teacher._id

            setAttendanceStatus((prevStatus) => ({
                ...prevStatus,
                [meetingId]: "clocked-in", // Update the status to clocked-in

            }));
            if (response) {
                setLoadData(!loadData);
            }
        } catch (error) {
            console.error("Error clocking in:", error);
        }
    };

    // Handle clock-out action
    const handleClockOut = async (meetingId) => {
        try {
            const authId = JSON.parse(localStorage.getItem("sessionData")).userId;
            const teacherdata = await getTeacherByAuthId(authId);
            const response = await clockOut(teacherdata.teacher._id, meetingId); // Pass teacherId and meetingId

            setAttendanceStatus((prevStatus) => ({
                ...prevStatus,
                [meetingId]: "clocked-out", // Update the status to clocked-out
            }));
            if (response) {
                setLoadData(!loadData);
            }
        } catch (error) {
            console.error("Error clocking out:", error);
        }
    };

    const handleModalCancel = () => {
        setIsModalVisible(false);
        form.resetFields();
    };
    const handleCreateMeeting = () => {
        setIsModalVisible(true);
    };

    const handleFormSubmit = async (values) => {
        try {
            const { title, time, description } = values;
            const [startDate, endDate] = time;

            const meetingPayload = {

                student_id: student_id,
                teacher_id: teacher_id,
                start: startDate,
                end: endDate,
                batch_id: batch_id,
                meeting_id: meeting_id,
                meeting_title: title,
                meeting_description: description
            };

            console.log("Creating meeting with payload:", meetingPayload);

            // Call the API to create the meeting
            const response = await createReschedule(meetingPayload);
            message.success("Meeting created successfully!");

            setIsModalVisible(false);
            form.resetFields();
        } catch (err) {
            console.error("Error creating meeting:", err);
            message.error("Failed to create meeting.");
        }
    };

    // Render events for the calendar
    const renderEvent = ({ event }) => {

        return (

            <div style={{border: "1px solid #111111", padding: "5px"}}>
                <strong style={{ color: "#111111" }}>{event.title}</strong>
                <br />
                <span style={{ fontSize: "12px", color: "#111111" }}>
                    {moment(event.start).format("hh:mm A")} -{" "}
                    {moment(event.end).format("hh:mm A")}
                </span>
                <br />
                {event.meeting_reschedule ? (
                    <span style={{ fontSize: "12px", color: "#111111" }}>Meeting Rescheduled</span>
                ):null}
                <br />

            </div>
        );
    };

    return (
        <div className="manage-meeting">
            {loading ? (
                <p>Loading schedule...</p>
            ) : error ? (
                <p>{error}</p>
            ) : (
                <>
                    <div style={{ padding: "20px" }}>
                        <div style={{ display: "flex", alignItems: "center", marginBottom: "20px", justifyContent: "space-between" }}>
                            <Link  style={{ paddingRight: "10px" ,fontSize:"24px"}} to="/student/dashboard/meetings"><IoMdArrowRoundBack/></Link>
                            <h2 style={{ margin: 0 }}>Meeting Schedule of Teacher : {teacherName} </h2>
                            {/* Search Field */}
                            <Button
                                type="primary"
                                style={{ marginLeft: "auto", backgroundColor: "#ee1b7a" }}
                                onClick={handleCreateMeeting}
                            >
                                Reschedule Meeting
                            </Button>
                        </div>

                        <Calendar
                            localizer={localizer}
                            events={events}
                            startAccessor="start"
                            endAccessor="end"
                            style={{ height: "800px", margin: "50px 0" }}
                            eventPropGetter={(event) => ({
                                style: { backgroundColor: "#ffffff" },
                            })}
                            components={{
                                event: renderEvent,
                            }}
                        />
                    </div>
                </>

            )}
            {
                <Modal
                    title="Create Meeting"
                    visible={isModalVisible}
                    onCancel={handleModalCancel}
                    footer={null}
                >
                    <Form form={form} layout="vertical" onFinish={handleFormSubmit}>
                        <Form.Item
                            name="title"
                            label="Meeting Title"
                            rules={[{ required: true, message: "Please enter a title!" }]}
                        >
                            <Input placeholder="Enter meeting title" />
                        </Form.Item>
                        <Form.Item
                            name="description"
                            label="Meeting Description"
                            rules={[{ required: true, message: "Please enter a title!" }]}
                        >
                            <Input placeholder="Enter meeting title" />
                        </Form.Item>
                        <Form.Item
                            name="time"
                            label="Meeting Time"
                            rules={[{ required: true, message: "Please select a time range!" }]}
                        >
                            <RangePicker
                                showTime
                                format="YYYY-MM-DD HH:mm"
                                placeholder={["Start Time", "End Time"]}
                            />
                        </Form.Item>

                        <Form.Item>
                            <Button
                                type="primary"
                                style={{ backgroundColor: "#ee1b7a" }}
                                htmlType="submit" block>
                                Create Meeting
                            </Button>
                        </Form.Item>
                    </Form>
                </Modal>
            }
        </div>
    );
}

export default RescheduleMeeting;