import React, { useEffect, useState } from 'react';
import {
    Table,
    Spin,
    Alert,
    Button,
    Input,
    message,
} from "antd";
import { approveReschedule, getRescheduleByTeacherId, rejectReschedule } from '../../../../api/rescheduleAPI';
import { getTeacherByAuthId } from '../../../../api/teacherApi';
import { studentClockIn } from '../../../../api/studentApi';
import { set } from 'lodash';
import { createMeeting } from '../../../../api/batchApi';
import { BodyText, Heading, PageContainer, PrimaryButton } from '../../../../style/PrimaryStyles/PrimaryStyles';
import { RescheduleMeetingTeacherWrap } from './RescheduleMeetingTeacher.styles';

function RescheduleMeetingTeacher() {
    const [rescheduleData, setRescheduleData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [loadData, setLoadData] = useState(false);
    useEffect(() => {
        const apiCaller = async () => {
            setLoading(true);
            const authId = JSON.parse(localStorage.getItem("sessionData")).userId;
            const teacherData = await getTeacherByAuthId(authId);
            console.log(teacherData);
            const response = await getRescheduleByTeacherId(teacherData.teacher._id);

            console.log(response);
            const renderData = response.rescheduleMeetings.map((item) => ({
                _id: item._id,
                student_name: item.student_id.user_id.name,
                student_id: item.student_id._id,
                teacher_id: item.teacher_id,
                batch_name: item.batch_id.batch_name,
                batch_id: item.batch_id._id,
                meeting_id: item.meeting_id,
                meeting_title: item.meeting_title,
                meeting_description: item.meeting_description,
                start_time: item.start,
                end_time: item.end,
            }));
            console.log("renderData", renderData);
            setRescheduleData(renderData);
            setFilteredData(renderData);
            setLoading(false);
        }
        apiCaller();
    }, [loadData])
    // Handle search
    const handleSearch = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        console.log(value);
        if (value === '') {
            setSearchTerm(null);
            setFilteredData(rescheduleData);

        }
        else {

            // Filter the attendance by meeting title based on search term
            const filteredData = rescheduleData.filter((item) =>
                (item?.meeting_title?.toLowerCase()?.includes(value.toLowerCase()))
            );
            setFilteredData(filteredData); // Update filtered data
        }


    };

    const handleRescheduleApprove = async (record) => {

        approveReschedule(record.meeting_id).then((response) => {
            console.log(response);
            if (response) {
                const meetingPayload = {
                    title: record.meeting_title,
                    startDate: record.start_time,
                    endDate: record.end_time,
                    teacher_id: record.teacher_id, // Use the fetched teacher ID
                    batch_id: record.batch_id,
                    students: [record.student_id], // Pass all student IDs in the batch
                };
                console.log("Creating meeting with payload:", meetingPayload);
                createMeeting(meetingPayload).then((response) => {
                    message.success("Meeting created successfully!");
                    setLoadData(!loadData);
                });

                message.success(response.message);
            }
        }).catch((error) => {
            console.log(error);
            message.error(error.message);
        });
    }

    const handleRescheduleReject = async (record) => {
        rejectReschedule(record.meeting_id).then((response) => {
            console.log(response);
            if (response) {
                setLoadData(!loadData);
                message.success(response.message);
            }
        })

    }

    const columns = [
        {
            title: "Sl No.",
            dataIndex: "index",
            key: "index",
            render: (text, record, index) => <BodyText>{index + 1}</BodyText>,
        },
        {
            title: "Student Name",
            dataIndex: "student_name",
            key: "student_name",
            render: (text) => <BodyText>{text}</BodyText>,
        },
        {
            title: "Batch Name",
            dataIndex: "batch_name",
            key: "batch_name",
            render: (text) => <BodyText>{text}</BodyText>,
        },
        {
            title: "Meeting Name",
            dataIndex: "meeting_title",
            key: "meeting_title",
            render: (text) => <BodyText>{text}</BodyText>,
        },
        {
            title: "Meeting Description",
            dataIndex: "meeting_description",
            key: "meeting_description",
            render: (text) => <BodyText>{text}</BodyText>,
        },
        {
            title: "Start Time",
            dataIndex: "start_time",
            key: "start_time",
            render: (text) => {
                if (text == null) {
                    return <BodyText>00:00.00</BodyText>;
                } else {
                    const date = new Date(text);
                    const formattedDate = date.toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                    });
                    const formattedTime = date.toLocaleTimeString("en-US", {
                        hour: "2-digit",
                        minute: "2-digit",
                    });
                    return <BodyText>{formattedDate} {formattedTime}</BodyText>;
                }
            },
        },
        {
            title: "End Time",
            dataIndex: "end_time",
            key: "end_time",
            render: (text) => {
                if (text == null) {
                    return <BodyText>00:00.00</BodyText>;
                } else {
                    const date = new Date(text);
                    const formattedDate = date.toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                    });
                    const formattedTime = date.toLocaleTimeString("en-US", {
                        hour: "2-digit",
                        minute: "2-digit",
                    });
                    return <BodyText>{formattedDate} {formattedTime}</BodyText>;
                }

            },
        },
        {
            title: "Action",
            dataIndex: "index",
            key: "index",

            render: (text, record) =>
            (< div className='table-action-button-container'>
                <PrimaryButton onClick={() => handleRescheduleApprove(record)} >
                    Approve
                </PrimaryButton>
                <PrimaryButton onClick={() => handleRescheduleReject(record)}>
                    Reject
                </PrimaryButton>
            </div>)

        }
    ];


    return (
        <PageContainer>
            <RescheduleMeetingTeacherWrap>
                <div className='rescheduleMeetingTeacher-heading-row'>
                    <Heading>Reschedule Meeting List </Heading>
                    {/* Search Field */}
                    <Input
                        placeholder="Search by meeting name"
                        value={searchTerm}
                        onChange={handleSearch}
                        style={{ width: 300 }}
                    />
                </div>

                {loading ? (
                    <Spin tip="Loading..." />
                ) : (
                    <Table
                        columns={columns}
                        dataSource={filteredData} // Bind the filtered data to the table
                        rowKey="_id"
                        pagination={true} // You can add pagination if needed
                    />
                )}
            </RescheduleMeetingTeacherWrap>

        </PageContainer>
    )
}

export default RescheduleMeetingTeacher
