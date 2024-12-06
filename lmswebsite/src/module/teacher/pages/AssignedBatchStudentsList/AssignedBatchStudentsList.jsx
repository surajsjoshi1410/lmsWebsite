import React, { useState, useEffect } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import { getBatchById, createMeeting } from "../../../../api/batchApi";
import { getTeacherByAuthId } from "../../../../api/teacherApi";
import { uploadContent } from "../../../../api/batchContentApi";
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
import { IoMdArrowRoundBack } from "react-icons/io";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import moment from "moment";
import { set } from "lodash";
import { BodyText, Heading, PageContainer, PrimaryButton } from "../../../../style/PrimaryStyles/PrimaryStyles";
import { AssignedBatchStudentsListContainer } from "./AssignedBatchStudentsList.style"

const { RangePicker } = DatePicker;

const AssignedBatchStudentsList = () => {
  const { batchId } = useParams();
  const location = useLocation();
  const { batchName } = location.state || { batchName: "Batch" };

  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModel2visble, setIsModel2visble] = useState(false);
  const [teacherId, setTeacherId] = useState(""); // Store the teacher ID
  const [form] = Form.useForm();
  const [file, setFile] = useState(null); // Store the selected file
  const [description, setDescription] = useState("");

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

        const classLevel = batch.class_id?.classLevel || "N/A";
        const batchSubjects = Array.isArray(batch.subject_id)
          ? batch.subject_id.map((subject) => subject.subject_name)
          : batch.subject_id?.subject_name
            ? [batch.subject_id.subject_name]
            : [];

        const studentDetails = batch.students.map((student) => {
          const studentSubjects = Array.isArray(student.subject_id)
            ? student.subject_id.map((subject) => subject.subject_name)
            : [];
          const combinedSubjects = [
            ...batchSubjects,
            ...studentSubjects,
          ].filter(
            (subject, index, self) => subject && self.indexOf(subject) === index
          );
          return {
            key: student._id,
            id: student._id,
            name: student.user_id?.name || "N/A",
            email: student.user_id?.email || "N/A",
            classLevel: classLevel,
            subjects:
              combinedSubjects.length > 0 ? combinedSubjects.join(", ") : "N/A",
          };
        });
        setStudents(studentDetails);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching batch details:", err);
        setError(err.message || "Failed to fetch batch details.");
        setLoading(false);
      }
    };
    const teacherId = localStorage.getItem("teacherId");
    const fetchTeacherDetails = async () => {
      try {
        const authId = JSON.parse(localStorage.getItem("sessionData")).userId;
        const response = await getTeacherByAuthId(authId);

        setTeacherId(response.teacher._id); // Save the teacher ID
      } catch (err) {
        console.error("Error fetching teacher details:", err);
      }
    };

    fetchBatchDetails();
    fetchTeacherDetails();
  }, [batchId]);

  const handleCreateMeeting = () => {
    setIsModalVisible(true);
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
    form.resetFields();
  };

  const handleFormSubmit = async (values) => {
    try {
      const { title, time } = values;
      const [startDate, endDate] = time;

      const meetingPayload = {
        title,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        teacher_id: teacherId, // Use the fetched teacher ID
        batch_id: batchId,
        students: students.map((student) => student.id), // Pass all student IDs in the batch
      };

      console.log("Creating meeting with payload:", meetingPayload);

      // Call the API to create the meeting
      const response = await createMeeting(meetingPayload);
      message.success("Meeting created successfully!");

      setIsModalVisible(false);
      form.resetFields();
    } catch (err) {
      console.error("Error creating meeting:", err);
      message.error("Failed to create meeting.");
    }
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <BodyText>{text}</BodyText>,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      render: (text) => (
        <a href={`mailto:${text}`} style={{ color: "#1677ff" }}>
          {text}
        </a>
      ),
    },
    {
      title: "Class Level",
      dataIndex: "classLevel",
      key: "classLevel",
      render: (text) => <Tag color="green"><BodyText>{text}</BodyText></Tag>,
    },
    {
      title: "Subjects",
      dataIndex: "subjects",
      key: "subjects",
      render: (subjects) => (
        <Tooltip title={subjects}>
          <BodyText>
            {subjects.length > 20 ? `${subjects.slice(0, 20)}...` : subjects}
          </BodyText>
        </Tooltip>
      ),
    },
  ];



  const handleUploadContent = async () => {
    console.log("Uploading content...", file);
    if (!file) {
      message.error("Please select a file to upload.");
      return;
    }

    try {
      setLoading(true);
      // Call the uploadContent API function
      const response = await uploadContent(batchId, teacherId, file, description);
      console.log("Content uploaded successfully:", response);
      message.success("Content uploaded successfully!");
      setIsModel2visble(false); // Close the modal after success
      form.resetFields(); // Reset the form

    } catch (err) {
      message.error("Failed to upload content.");
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (info) => {
    console.log("Selected file:", info.file);
    // if (info.file.status === "done") {
    setFile(info.file.originFileObj); // Store the selected file
    // }
  };



  const openUploadModal2 = () => {
    setIsModel2visble(true);
  };



  if (loading) {
    return <Spin size="large" />;
  }

  if (error) {
    return <Alert message={error} type="error" showIcon />;
  }

  return (
    <PageContainer>
      <AssignedBatchStudentsListContainer>
        <div
          className="assigned-students-header-row"
        >
          < div className="assigned-students-header-row-heading">
            <Link to="/teacher/dashboard/batches">
              <IoMdArrowRoundBack size={24} style={{ marginRight: "10px" }} />
            </Link>
            <Heading>Students List for {batchName}</Heading>
          </div>

          <div className="assigned-students-actions" >
            <PrimaryButton
              type="primary"

              onClick={handleCreateMeeting}
            >
              Create Meeting
            </PrimaryButton>

            <PrimaryButton
              type="primary"
              onClick={openUploadModal2}>
              Upload Content
            </PrimaryButton>
          </div>
        </div>

        {loading ? (
          <Spin size="large" />
        ) : error ? (
          <Alert message="Error" description={error} type="error" showIcon />
        ) : (
          <Table
            columns={columns}
            dataSource={students}
            pagination={{ pageSize: 8 }}
            bordered
            style={{
              backgroundColor: "#fff",
              borderRadius: "10px",
              overflow: "hidden",
            }}
          />
        )}

        {/* Modal for Creating Meeting */}
        <Modal
          title="Create Meeting"
          open={isModalVisible}
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

        {/* Modal for upploading content */}

        <Modal
          title="Upload Content"
          visible={isModel2visble}

          onCancel={() => { setIsModel2visble(false) }}
          footer={null}
        >
          <Form form={form} layout="vertical" onFinish={handleUploadContent}>
            <Form.Item
              name="description"
              label="Enter Description"
              value={description}

            >
              <input type="text" onChange={(e) => setDescription(e.target.value)} />
            </Form.Item>


            <Upload onChange={handleFileChange}
            >



              <Form.Item
                name="title"
                label="Select File"
                rules={[{ required: true, message: "Click to Select File" }]}

              >
                <Input placeholder="Click to Select File" />
              </Form.Item>
            </Upload>
          </Form>
          <Button
            key="upload"
            type="primary"
            style={{ backgroundColor: "#ee1b7a" }}
            loading={loading}
            onClick={handleUploadContent}
          >
            Upload
          </Button>
        </Modal>
      </AssignedBatchStudentsListContainer>
    </PageContainer>

    // </div>

  );
};

export default AssignedBatchStudentsList;
