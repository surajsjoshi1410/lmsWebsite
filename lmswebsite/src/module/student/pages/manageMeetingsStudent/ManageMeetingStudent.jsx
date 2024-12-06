import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import axios from "axios";
import "react-big-calendar/lib/css/react-big-calendar.css"; // Default styles for react-big-calendar
import "./ManageMeeting.css"; // Optional custom styles
import { getStudentAttendance, getStudentByAuthId, getStudentscheduleById, studentClockIn, studentClockOut } from "../../../../api/studentApi";
import { clockIn, clockOut } from "../../../../api/teacherApi";
import { useNavigate ,Link} from "react-router-dom";
import { Heading,PageContainer,PrimaryButton } from "../../../../style/PrimaryStyles/PrimaryStyles";

const localizer = momentLocalizer(moment);

function ManageMeetingStudent() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [attendanceStatus, setAttendanceStatus] = useState({});
  const [loadData, setLoadData] = useState(false);
  const [studentMode, setStudentMode] = useState("normal");
  const naviagte = useNavigate();

  // Fetch teacher schedule from API
  useEffect(() => {
    const fetchSchedule = async () => {
      try {
        setLoading(true);
        const authId = JSON.parse(localStorage.getItem("sessionData")).userId;
        const studentData = await getStudentByAuthId(authId);
        setStudentMode(studentData.student.mode);
        console.log("studentData", studentData.student._id);
        const response = await getStudentscheduleById(studentData.student._id);
        const studentAttendanceData = await getStudentAttendance(studentData.student._id);
        // const response = await axios.get(
        //   `http://localhost:5000/students/student/67442e833781bb93207b0dbf/schedule`
        // );
        const schedule = response.data.schedule;
        console.log("schedule", schedule);

        // Map the schedule into events for react-big-calendar
        let formattedEvents = schedule.map((item, index) => ({
          id: index,
          title: item.meeting_title || "No Title", // Use the meeting title from the API response
          start: new Date(item.date),
          end: new Date(new Date(item.date).getTime() + 60 * 60 * 1000), // Assume 1-hour meetings
          meetingId: item.meeting_id, // Use meeting_id to track clocking
          meeting_url: item.meeting_url || null, // Include meeting URL
          meeting_reschedule:item.meeting_reschedule,
          clockIn: false,
          clockOut: false,
        }));
        studentAttendanceData.attendance.map((item) => {

          formattedEvents = formattedEvents.map((event) => {
            if (item.meeting_id === event.meetingId) {
              return {
                ...event,
                clockIn: item.clock_in_time ? true : false,
                clockOut: item.clock_out_time ? true : false,
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
  }, [loadData]);

  // Handle clock-in action
  const handleClockIn = async (meetingId) => {
    try {
      const authId = JSON.parse(localStorage.getItem("sessionData")).userId;
      const studentData = await getStudentByAuthId(authId);

      // Clock-in API requires teacherId and meetingId
      const response = await studentClockIn(studentData.student._id, meetingId); // Make sure you pass teacher._id

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
    console.log("meetingId", meetingId);
    try {
      const authId = JSON.parse(localStorage.getItem("sessionData")).userId;
      const studentData = await getStudentByAuthId(authId);
      const response = await studentClockOut(studentData.student._id, meetingId); // Pass teacherId and meetingId

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

  // Handle when a user clicks on an event
  const handleSelectEvent = (event) => {
    if (event.meeting_url) {
      window.open(event.meeting_url, "_blank"); // Open the meeting URL in a new tab
    } else {
      alert("Meeting link is not available.");
    }
  };

  // Custom event rendering
  const renderEvent = ({ event }) => {

    return (
      <div>
        <strong>{event.title}</strong>
        <br />
        <span style={{ fontSize: "12px", color: "#ffffff" }}>
          {moment(event.start).format("hh:mm A")} -{" "}
          {moment(event.end).format("hh:mm A")}
        </span>
        <br />
     { !(event.meeting_reschedule)?( <> {event.meeting_url ? (
          !event.clockIn ?
            (<>
            <button
              onClick={() => handleSelectEvent(event)}
              style={{
                backgroundColor: "#4CAF50",
                color: "white",
                padding: "5px 10px",
                marginTop: "5px",
              }}
            >
              Join Meeting
            </button>
            <Link state={{ meetingId: event.meetingId }} to={`/student/dashboard/meetings/reschedule`}>
           
           { studentMode==='personal'&&<button
              onClick={() => { naviagte("/student/dashboard/meetings/reschedule")}}
              style={{
                backgroundColor: "#ff6347",
                color: "white",
                padding: "5px 10px",
                marginTop: "5px",
              }}
            >
              Reschedule
            </button>}
            </Link>
            </>
          ) :
            null
        ) : null}
        <br />

        {!event.clockIn && !event.clockOut ? (
          <button
            onClick={() => handleClockIn(event.meetingId)}
            style={{
              backgroundColor: "#4CAF50",
              color: "white",
              padding: "5px 10px",
              marginTop: "5px",
            }}
          >
            Clock In
          </button>
        ) : event.clockIn && !event.clockOut ? (
          <button
            onClick={() => { handleClockOut(event.meetingId) }}
            style={{
              backgroundColor: "#FF6347",
              color: "white",
              padding: "5px 10px",
              marginTop: "5px",
            }}
          >
            Clock Out
          </button>
        ) : (
          <span>Clocked Out</span>
        )}</>):
        <span>Meeting Rescheduled</span>
        }
      </div>
    );
  };


  return (
    <PageContainer  >
      {/* <BaseButton>hello</BaseButton> */}
      <PrimaryButton onClick={()=>{alert("logout")}}>Logout</PrimaryButton>
       <Heading>Manage Meetings</Heading>
      {/* <h1>Manage Meetings</h1> */}
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : (
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 800 }}
          views={["month", "week", "day", "agenda"]} // Available views
          defaultView="month" // Set the default view
          selectable={true} // Allow selecting events
          components={{
            event: renderEvent, // Use custom event rendering
          }}
          popup={true} // Show details in a popup
          eventPropGetter={() => (event) => ({
            style: {
              backgroundColor: event.meeting_url ? "#e3f2fd" : "#f8d7da", // Differentiate events with and without meeting_url
              color: "black",
            },
          })}
        />
      )}
    </PageContainer>
  );
}

export default ManageMeetingStudent;
