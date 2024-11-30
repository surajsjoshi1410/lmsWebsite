import React, { useEffect, useState } from 'react';
import {
    Table,
    Spin,
    Alert,
    Button,
    Input,
    message,
    Select
} from "antd";
import { getAllTeachers, getTeacherAttendance } from '../../../../api/teacherApi';
import { getTeacherByAuthId } from '../../../../api/teacherApi';
import { getStudentAttendance, getStudentsForAttendance } from '../../../../api/studentApi';
import { set } from 'lodash';

export const ManageAttendance = () => {
    const [attendance, setAttendance] = useState([]);
    const [filteredAttendance, setFilteredAttendance] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState(""); // State to manage search term
    const [selectedRole, setSelectedRole] = useState("teacher"); // State to manage selected role
    const [teacherList, setTeacherList] = useState([]);
    const [studentList, setStudentList] = useState([]);
    const [userList, setUserList] = useState([]);
    const [userIdForTable, setUserIdForTable] = useState({});

    // Handle dropdown selection (Teacher/Student)
    const handleRoleChange = (value) => {
        setSelectedRole(value);
    };
    const handleUserIdChangeForTable = (value) => {
        setUserIdForTable({ userId: value, role: selectedRole }); // Update the userIdForTable state with the selected value (value);
    }
    useEffect(() => {
        if (selectedRole == "teacher") {
            const apiCaller = async () => {
                try {
                    setLoading(true);
                    const teachersData = await getAllTeachers();
                    setTeacherList(teachersData.teachers);
                    setUserList(teachersData.teachers);
                    setUserIdForTable({ userId: teachersData.teachers[0]?._id, role: selectedRole });
                    setLoading(false);
                } catch (error) {
                    // setError(error.message || "Failed to fetch attendance.");
                }
            }
            apiCaller();
        } else {
            const apiCaller = async () => {
                setLoading(true);
                const studentsData = await getStudentsForAttendance();
                setTeacherList(studentsData.students);
                setUserList(studentsData.students);
                setUserIdForTable({ userId: studentsData.students[0]?._id, role: selectedRole });
                setLoading(false);
            }
            apiCaller();


        }

    }, [selectedRole]);
    useEffect(() => {
        const apiCaller = async () => {
            try {
                setLoading(true);
                if (userIdForTable.role == "teacher") {
                    const attendanceData = await getTeacherAttendance(userIdForTable.userId);
                    setAttendance(attendanceData?.attendance || []);
                    setFilteredAttendance(attendanceData?.attendance || []);
                    setLoading(false);
                } else {
                    const attendanceData = await getStudentAttendance(userIdForTable.userId);
                    setAttendance(attendanceData?.attendance || []);
                    setFilteredAttendance(attendanceData?.attendance || []);
                    setLoading(false);
                }

            } catch (error) {
                // setError(error.message || "Failed to fetch attendance.");
            }
        }
        apiCaller();
    }, [userIdForTable])


    // Handle search
    const handleSearch = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        console.log(value);
        if (value === '') {
            setSearchTerm(null);
            setFilteredAttendance(attendance);

        }
        else {

            // Filter the attendance by meeting title based on search term
            const filteredData = attendance.filter((item) =>
                item?.meeting_title?.toLowerCase()?.includes(value.toLowerCase())
            );
            setFilteredAttendance(filteredData); // Update filtered data
        }


    };

    const columns = [
        {
            title: "Sl No.",
            dataIndex: "index",
            key: "index",
            render: (text, record, index) => <strong>{index + 1}</strong>,
        },
        {
            title: "Meeting Name",
            dataIndex: "meeting_title",
            key: "meeting_title",
            render: (text) => <strong>{text}</strong>,
        },
        {
            title: "Clock-In Time",
            dataIndex: "clock_in_time",
            key: "clock_in_time",
            render: (text) => {
                if (text == null) {
                    return <span>00:00.00</span>;
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
                    return <span>{formattedDate} {formattedTime}</span>;
                }
            },
        },
        {
            title: "Clock-Out Time",
            dataIndex: "clock_out_time",
            key: "clock_out_time",
            render: (text) => {
                if (text == null) {
                    return <span>00:00.00</span>;
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
                    return <span>{formattedDate} {formattedTime}</span>;
                }

            },
        },
    ];

    return (
        <div style={{ padding: "20px" }}>
            <div style={{ display: "flex", alignItems: "center", marginBottom: "20px", justifyContent: "space-between" }}>
                <h2 style={{ margin: 0 }}>Attendance List </h2>
                <div style={{ display: "flex", alignItems: "center", marginBottom: "20px", justifyContent: "space-between", gap: "10px" }}>
                    <Select
                        defaultValue="teacher"
                        style={{ width: 200 }}
                        onChange={handleRoleChange}
                        placeholder="Select Role"
                    >
                        <Option value="teacher">Teacher</Option>
                        <Option value="student">Student</Option>
                    </Select>
                    {/* Search Field */}
                    <Input
                        placeholder="Search by meeting name"
                        value={searchTerm}
                        onChange={handleSearch}
                        style={{ width: 300 }}
                    />

                </div>

            </div>
            <div style={{ display: "flex", alignItems: "center", marginBottom: "20px", justifyContent: "flex-end",gap:"10px" }}>
                <Select
                    value={userIdForTable.userId || (userList.length > 0 && userList[0]._id)} // Set initial selected value
                    style={{ width: 200 }}
                    onChange={handleUserIdChangeForTable}
                    placeholder={selectedRole === "teacher" ? "Select Teacher" : "Select Student"}
                >
                    {
                        userList.map((user) => (
                            <Option key={user._id} value={user._id}>
                                {user.user_id.name}
                            </Option>
                        ))
                    }

                </Select>
            </div>

            {loading ? (
                <Spin tip="Loading..." />
            ) : error ? (
                <Alert message={error} type="error" />
            ) : (
                <>


                    <Table
                        columns={columns}
                        dataSource={filteredAttendance} // Bind the filtered data to the table
                        rowKey="_id"
                        pagination={true} // You can add pagination if needed
                    />
                </>

            )}
        </div>
    );
};
