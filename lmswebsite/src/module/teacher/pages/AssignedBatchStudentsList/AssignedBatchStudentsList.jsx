// src/module/teacher/pages/BecomeTeacherApplicationForm/TaskBoard/AssignedBatchStudentsList.jsx

import React, { useState, useEffect } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import { getBatchById } from "../../../../api/batchApi";
import { Table, Spin, Alert, Button } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
// import "./AssignedBatchStudentsList.style"; // Ensure the correct file extension
import { IoMdArrowRoundBack } from "react-icons/io";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { BsCameraVideo } from "react-icons/bs";
import { BsPerson } from "react-icons/bs";
import { TiDelete } from "react-icons/ti";
import { BiMerge } from "react-icons/bi";
import {
  TeacherStudentsListContainer, Header,  MeetingDetails,
  MeetingHeader,
  JoinButton,
  MemberList,
  MemberInfo,
} from "./AssignedBatchStudentsList.style"; // Import the styled component
import { red } from "@mui/material/colors";

const AssignedBatchStudentsList = () => {
  const { batchId } = useParams();
  const location = useLocation();
  const { batchName } = location.state || { batchName: "Batch" };

  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBatchDetails = async () => {
      try {
        if (!batchId) {
          throw new Error("No batch ID provided.");
        }

        const response = await getBatchById(batchId);
        const { batch } = response;

        if (!batch) {
          throw new Error("Batch not found.");
        }

        if (!batch.students || batch.students.length === 0) {
          setStudents([]);
        } else {
          // Extract class level once since it's common for all students
          const classLevel = batch.class_id?.classLevel || "N/A";

          // Extract batch-level subjects if available
          const batchSubjects = Array.isArray(batch.subject_id)
            ? batch.subject_id.map((subject) => subject.subject_name)
            : batch.subject_id?.subject_name
            ? [batch.subject_id.subject_name]
            : [];

          // Map through students to extract required details
          const studentDetails = batch.students.map((student) => {
            // Extract student-level subjects if available
            const studentSubjects = Array.isArray(student.subject_id)
              ? student.subject_id.map((subject) => subject.subject_name)
              : [];

            // Combine student-level subjects with batch-level subjects
            const combinedSubjects = [
              ...batchSubjects,
              ...studentSubjects,
            ].filter(
              (subject, index, self) =>
                subject && self.indexOf(subject) === index
            ); // Remove duplicates and undefined

            return {
              key: student._id, // Ensure each student has a unique _id
              name: student.user_id?.name || "N/A",
              email: student.user_id?.email || "N/A",
              classLevel: classLevel,
              subjects:
                combinedSubjects.length > 0
                  ? combinedSubjects.join(", ")
                  : "N/A",
              // Add other fields as necessary
            };
          });
          setStudents(studentDetails);
        }
        setLoading(false);
      } catch (err) {
        console.error("Error fetching batch details:", err);
        setError(err.message || "Failed to fetch batch details.");
        setLoading(false);
      }
    };

    fetchBatchDetails();
  }, [batchId]);

  // Define columns for Ant Design Table
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      // sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      // sorter: (a, b) => a.email.localeCompare(b.email),
    },
    {
      title: "Class Level",
      dataIndex: "classLevel",
      key: "classLevel",
      // sorter: (a, b) => a.classLevel - b.classLevel,
    },
    {
      title: "Subject",
      dataIndex: "subjects",
      key: "subjects",
      // sorter: (a, b) => a.subjects.localeCompare(b.subjects),
      render: (subjects) => <span>{subjects}</span>, // Display subjects as plain text
    },
    // Add more columns if needed
  ];

  // Handle Edit
  const handleEdit = (student) => {
    console.log("Editing student:", student);
    // You can implement your edit form logic here
  };

  // Handle Delete
  const handleDelete = (studentEmail) => {
    const updatedStudents = students.filter(
      (student) => student.email !== studentEmail
    );
    setStudents(updatedStudents); // Update state with the filtered students
  };

  const [meetingMembers, setMeetingMembers] = useState([
    { email: "Jayanth@gmail.com", role: "Developer" },
    { email: "Pooja@gmail.com", role: "Designer" },
    { email: "Aryan@gmail.com", role: "Project Manager" },
  ]);


  return (
    <>
    <TeacherStudentsListContainer>
      <Header>
        <div style={{ display: "flex", alignItems: "center",  }}>
        <Link to="/teacher/dashboard/batches">
          <IoMdArrowRoundBack size={24} style={{ marginRight: "10px" }}/>
        </Link>
          <h1>Students List</h1>
        </div>
        <div style={{ textAlign: "right" }}>
          <button>Add Meeting</button>
        </div>
      </Header>

      {loading ? (
        <div className="spinner">
          <Spin size="large" />
        </div>
      ) : error ? (
        <Alert
          message="Error"
          description={error}
          type="error"
          showIcon
          style={{ marginTop: "20px" }}
        />
      ) : students.length > 0 ? (
        <div className="students-table">
          <Table
            columns={columns}
            dataSource={students}
            pagination={{ pageSize: 10 }}
            bordered
          />
        </div>
      ) : (
        <Alert
          message="No Students"
          description="There are no students in this batch."
          type="info"
          showIcon
          style={{ marginTop: "20px" }}
        />
      )}
    </TeacherStudentsListContainer>
     <MeetingDetails>
     <MeetingHeader>
       <div className="icon-container">
         <FiEdit
           style={{ cursor: "pointer", marginRight: "15px" }}
           onClick={() => handleEdit()} // Trigger edit
         />
         <FiTrash2
           style={{ cursor: "pointer", marginRight: "15px" }}
           onClick={() => handleDelete()} // Trigger delete
         />
         <TiDelete style={{ cursor: "pointer", fontSize: "24px" }} />
       </div>
     </MeetingHeader>
     <div className="Meet">
       <div className="MeetingTitle"></div>
       <h2>Meeting details</h2>
     </div>
     <p className="MeetingDay">Thursday, January 14 · 3:30 – 4:30pm</p>

     <BsCameraVideo style={{ marginRight: "10px" }} />
     <JoinButton>Join Meeting</JoinButton>
     <BiMerge style={{ marginLeft: "10px" }} />
     <MemberList>
       <div className="Member">
         <BsPerson style={{ marginRight: "10px" }} />
         <h3>{students.length} Members</h3>
       </div>
       <div className="MeetingMember">
         {meetingMembers.map((member, index) => (
           <div key={index}>
             <div className="MembericonMember">
               <BsPerson style={{ marginRight: "10px" }} />
               <MemberInfo bold>
                 <span>{member.email}</span>
                 <span>{member.role}</span>
               </MemberInfo>
             </div>
           </div>
         ))}
       </div>
     </MemberList>
   </MeetingDetails>
   </>
  );
};

export default AssignedBatchStudentsList;
