// BecomeTeacherApplicationForm.jsx

import React, { useEffect, useState } from "react";
import { Form, Input, Select, Upload, Button, message, DatePicker } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import Header from "../../components/Header/Header";
import LMS from "../../components/LMS/LMS";
import BecomeTeacherLogo from "../../assets/BecomeTeacherLogo.png";
import {
  getTeacherApplicationsByUserId,
  submitTeacherApplication,
} from "../../../../api/teachersApplicationApi";
import TeachersSection from "../../components/TeacherSection/TeachersSection";
import FooterTeacher from "../../components/Footer/FooterTeacher";
import { getAllClasses, getClassesByBoardId } from "../../../../api/classApi";
import {
  getClasses,
  getSubjects,
  getTeachersBySubjectAndClass,
  getStudentsBySubjectAndClass,
} from "../../../../services/createBatch";
import { updateUserByAuthId } from "../../../../api/userApi";
import api from "../../../../config/axiosConfig";
import { getBoards } from "../../../../api/boardApi";

import {
  ApplicationContainer,
  StyledForm,
  UploadWrapper,
  Processing,
} from "./BecomeTeacherApplicationForm.styles";
import { useNavigate } from "react-router-dom";
import { getUserByAuthId } from "../../../../api/userApi";
import { getAllSubjects } from "../../../../api/subjectApi";
import LoadingPage from "../../../../pages/LoadingPage/LoadingPage";
import{updateAccessToken} from "../../../../api/refreshTokenApi";

const { Option } = Select;

const BecomeTeacherApplicationForm = () => {
  const [formVisibility, setFormVisibility] = useState(true);
  const [formProcessing, setFormProcessing] = useState(false);
  const [formReject, setFormReject] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [classes, setClasses] = useState([]);
  const [selectedClass, setSelectedClass] = useState([]);
  const [boardData, setBoardData] = useState([]);
  const [selectedBoard, setSelectedBoard] = useState("");
  const [userData, setUserData] = useState();
  const navigate = useNavigate();
 

  const [form] = Form.useForm();

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const session = JSON.parse(localStorage.getItem("sessionData"));
    const apicaller = async () => {
      try {
        const board = await getBoards();
        setBoardData(board);
        updateAccessToken();
        const userResponse = await getUserByAuthId(session.userId);
        console.log("response", userResponse);
        setUserData(userResponse);
        const response = await getTeacherApplicationsByUserId(
          userResponse.user._id
        );


        if (response.application.approval_status === "pending") {
          setFormVisibility(false);
          setFormProcessing(true);
        } else if (response.application.approval_status === "rejected") {
          setFormProcessing(false);
          setFormVisibility(false);
          setFormReject(true);
        } else if (response.application.approval_status === "approved") {
          navigate("/teacher/dashboard");
        }
      } catch (err) {
        if (err.response && err.response.status === 404) {
          setFormVisibility(true);
          setFormProcessing(false);
          setFormReject(false);
        }
        console.error("Error fetching teacher applications:", err);
      }
    };
    apicaller();
  }, []);

  useEffect(() => {
    const apicaller = async () => {
      if (selectedBoard) {
        const classData = await getClassesByBoardId(selectedBoard);
        setClasses(classData);
        console.log("classes", classData);
      } else {
        setClasses([]);
      }
    };
    apicaller();
  }, [selectedBoard]);

  useEffect(() => {
    const apicaller = async () => {
      console.log("selectedClass", selectedClass);
      if (selectedClass.length > 0) {
        let fetchedSubjects = [];
        for (const item of selectedClass) {
          const data = await getSubjects(item);
          fetchedSubjects = [...fetchedSubjects, ...data];
        }
        setSubjects(fetchedSubjects);
        console.log("Subjects:", fetchedSubjects);
      } else {
        setSubjects([]);
      }
    };
    apicaller();
  }, [selectedClass]);

  const handleSubmit = async (values) => {
    console.log("Form Values:", values);
    setIsSubmitting(true);
    try {
      const authId = JSON.parse(localStorage.getItem("sessionData")).userId;
      await updateUserByAuthId(authId, {
        name: values.name,
        phone_number: values.phone_number,
      });

      const submissionData = {
        phone_number: values.phone_number,
        class_id: values.class_id,
        subject_id: values.subject_id,
        state: values.state,
        city: values.city,
        pincode: values.pincode,
        current_position: values.current_position,
        experience: values.experience,
        language: values.language,
        resume_link: values.resume[0].originFileObj, // Adjust based on API requirements
        profileImage: values.profileImage[0].originFileObj, // Adjust based on API requirements
        board_id: values.board_id,
        qualifications: values.qualification,
        dateOfBirth: values.dob,
      };
      const response = await submitTeacherApplication(submissionData);

      message.success("Application submitted successfully!");
      window.location.reload();
      navigate("/teacher"); // Redirect to a success page if desired
      console.log("Application Response:", response);
    } catch (error) {
      message.error("Failed to submit the application. Please try again.");
      console.error("Application Submission Error:", error.response?.data || error.message);
    } finally {
      setIsSubmitting(false);
    }
  };
  const handleFileUpload = async (info) => {
    console.log("url", info.file);

  };

  const normFile = (e) => {
    // handleFileUpload(e);
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;

  };

  return (
    <>
      {userData ?
        <>
          <Header />
          {formVisibility && (
            <ApplicationContainer>
              <div className="applicationImage">
                <img
                  src={BecomeTeacherLogo}
                  alt="Teacher Form"
                  className="teacherformImage"
                />
              </div>
              <div className="applicationDetails">
                <h2 className="applicationFormTitle">
                  Love Teaching Students? Join Us
                </h2>
                <p className="applicationFormSubtitle">
                  Become a Teacher and train students all around the world.
                </p>
                <StyledForm>
                  <Form
                    form={form}
                    layout="vertical"
                    onFinish={handleSubmit}
                    initialValues={{
                      language: "",
                      current_position: "",
                    }}
                  >
                    <div className="applicationRowOne">
                      <Form.Item
                        name="name"
                        label="Name"
                        rules={[
                          { required: true, message: "Please enter your name" },
                          { max: 50, message: "Name cannot exceed 50 characters" },
                        ]}
                      >
                        <Input placeholder="Name" />
                      </Form.Item>

                      <Form.Item
                        name="phone_number"
                        label="Phone Number"
                        rules={[
                          { required: true, message: "Please enter your phone number" },
                          {
                            pattern: /^\d{10}$/,
                            message: "Phone number must be 10 digits",
                          },
                        ]}
                      >
                        <Input placeholder="Phone Number" maxLength={10} />
                      </Form.Item>

                      <Form.Item
                        name="state"
                        label="State"
                        rules={[
                          { required: true, message: "Please enter your state" },
                          { max: 50, message: "State cannot exceed 50 characters" },
                        ]}
                      >
                        <Input placeholder="State" />
                      </Form.Item>

                      <Form.Item
                        name="city"
                        label="City"
                        rules={[
                          { required: true, message: "Please enter your city" },
                          { max: 50, message: "City cannot exceed 50 characters" },
                        ]}
                      >
                        <Input placeholder="City" />
                      </Form.Item>
                    </div>

                    <div className="applicationRowTwo">
                      <Form.Item
                        name="pincode"
                        label="Pin Code"
                        rules={[
                          { required: true, message: "Please enter your pin code" },
                          {
                            pattern: /^\d{6}$/,
                            message: "Pin code must be 6 digits",
                          },
                        ]}
                      >
                        <Input placeholder="Enter PinCode" maxLength={6} />
                      </Form.Item>
                      <Form.Item
                        name="qualification"
                        label="Qualification"
                        rules={[
                          { required: true, message: "Please enter your qualification" },
                        ]}
                      >
                        <Input placeholder="Qualification" />
                      </Form.Item>
                      <Form.Item
                        name="experience"
                        label="Experience (Years)"
                        rules={[
                          { required: true, message: "Please enter your experience" },
                          {
                            type: "number",
                            min: 0,
                            max: 100,
                            message: "Experience must be between 0 and 100",
                            transform: (value) => Number(value),
                          },
                        ]}
                      >
                        <Input type="number" placeholder="Enter Experience" min={0} max={100} />
                      </Form.Item>

                      <Form.Item
                        name="current_position"
                        label="Current Position"
                        rules={[
                          { required: true, message: "Please select your position" },
                        ]}
                      >
                        <Select placeholder="Select Position">
                          <Option value="Teacher">Teacher</Option>
                          <Option value="Assistant">Assistant</Option>
                          <Option value="Principal">Principal</Option>
                        </Select>
                      </Form.Item>
                    </div>

                    <div className="applicationRowTwo">
                      <Form.Item
                        name="dob"
                        label="Date of Birth"
                        rules={[
                          { required: true, message: "Please select your date of birth" },
                        ]}
                      >
                        <DatePicker
                          placeholder="Select Date"
                          style={{ width: "100%" }}
                        />
                      </Form.Item>
                      <Form.Item
                        name="language"
                        label="Language"
                        rules={[
                          { required: true, message: "Please select your language" },
                        ]}
                      >
                        <Select placeholder="Select Language">
                          <Option value="English">English</Option>
                          <Option value="Hindi">Hindi</Option>
                          <Option value="Spanish">Spanish</Option>
                          <Option value="French">French</Option>
                        </Select>
                      </Form.Item>


                      <Form.Item
                        name="resume"
                        label="Upload Resume"
                        valuePropName="fileList"
                        getValueFromEvent={normFile}
                        rules={[
                          { required: true, message: "Please upload your resume" },
                        ]}
                      >
                        <Upload
                          name="resume"
                          beforeUpload={() => false} // Prevent automatic upload
                          accept=".pdf,.doc,.docx"
                          maxCount={1}
                        >
                          <Button icon={<UploadOutlined />}>Click to Upload Resume</Button>
                        </Upload>
                      </Form.Item>

                      <Form.Item
                        name="profileImage"
                        label="Upload Profile Image"
                        valuePropName="fileList"
                        getValueFromEvent={normFile}
                        rules={[
                          { required: true, message: "Please upload your profile image" },
                        ]}
                      >
                        <Upload
                          name="profileImage"
                          beforeUpload={() => false} // Prevent automatic upload
                          accept=".jpg,.jpeg,.png"
                          maxCount={1}
                        >
                          <Button icon={<UploadOutlined />}>Click to Upload Profile Image</Button>
                        </Upload>
                      </Form.Item>
                    </div>
                    <div className="applicationRowThree">
                      <Form.Item
                        name="board_id"
                        label="Select Board"
                        rules={[
                          { required: true, message: "Please select a board" },
                        ]}
                      >
                        <Select
                          placeholder="Select Board"
                          onChange={(value) => setSelectedBoard(value)}
                          allowClear
                        >
                          {boardData.map((board) => (
                            <Option key={board._id} value={board._id}>
                              {board.name}
                            </Option>
                          ))}
                        </Select>
                      </Form.Item>
                    </div>

                    <div className="applicationRowThree">
                      {selectedBoard && (
                        <Form.Item
                          name="class_id"
                          label="Select Classes"
                          rules={[
                            { required: true, message: "Please select at least one class" },
                          ]}
                        >
                          <Select
                            mode="multiple"
                            placeholder="Select classes..."
                            onChange={(values) => setSelectedClass(values)}
                            allowClear
                          >
                            {classes.map((classItem) => (
                              <Option key={classItem._id} value={classItem._id}>
                                {classItem.classLevel} - {classItem.className}
                              </Option>
                            ))}
                          </Select>
                        </Form.Item>
                      )}
                    </div>

                    <div className="applicationRowThree">
                      {subjects.length > 0 && (
                        <Form.Item
                          name="subject_id"
                          label="Select Subjects"
                          rules={[
                            { required: true, message: "Please select at least one subject" },
                          ]}
                        >
                          <Select
                            mode="multiple"
                            placeholder="Select subjects..."
                            onChange={(values) => setSelectedSubject(values)}
                            allowClear
                          >
                            {subjects.map((subject) => (
                              <Option key={subject._id} value={subject._id}>
                                {subject.subject_name}
                              </Option>
                            ))}
                          </Select>
                        </Form.Item>
                      )}
                    </div>

                    <Form.Item>
                      <Button type="primary" htmlType="submit"
                        disabled={isSubmitting}
                        style={{ background: "#EE1B7A", borderColor: "#EE1B7A" }}
                      >
                        {isSubmitting ? "Submitting..." : "Submit"}
                      </Button>
                    </Form.Item>
                  </Form>
                </StyledForm>
              </div>
            </ApplicationContainer>
          )}

          <Processing visible={formProcessing || formReject}>
            <div className="applicationUnderProcessing">
              {formProcessing && <p>Application Under Processing....!!!!</p>}
            </div>
            <div>
              {formReject && (
                <p>Application Rejected... Better Luck Next Time</p>
              )}
            </div>
          </Processing>

          <LMS />
          <TeachersSection />
          <FooterTeacher />
        </>
        :
        <>
          <LoadingPage />
        </>
      }
    </>
  );
};

export default BecomeTeacherApplicationForm;
