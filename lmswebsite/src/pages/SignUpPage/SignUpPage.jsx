// SignUpPage.jsx

import React, { useEffect, useState } from "react";
import {
  Container,
  ImageSection,
  FormSection,
  RoleSelection,
  ButtonContainer,
  LinkText,
  StudentSelects,
  ScrollableForm, // New styled component
} from "./SignUpPage.style";
import SignUpImage from "../../assets/SignUpImage.png"; // Import image
import { useNavigate } from "react-router-dom";
import { auth } from "../../config/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signupUser } from "../../api/authApi";
import { Select, Form, Input, Upload, Button, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { getClassesByBoardId } from "../../api/classApi";
import { uploadFileToFirebase } from "../../utils/uploadFileToFirebase";
import { getBoards } from "../../api/boardApi";

const { Option } = Select;

const SignUpPage = () => {
  const [role, setRole] = useState("");
  const [classes, setClasses] = useState([]);
  const [board, setBoard] = useState([]);
  const [selectedBoard, setSelectedBoard] = useState("");
  const [studentProfileImage, setStudentProfileImage] = useState("");
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const fetchBoards = async () => {
      try {
        const boardData = await getBoards();
        console.log("boardData", boardData);
        setBoard(boardData);
      } catch (error) {
        console.error("Error fetching boards:", error);
      }
    };
    fetchBoards();
  }, [role]);

  useEffect(() => {
    const fetchClasses = async () => {
      if (selectedBoard) {
        try {
          const classData = await getClassesByBoardId(selectedBoard);
          console.log("classData", classData);
          setClasses(classData || []);
        } catch (error) {
          console.error("Error fetching classes:", error);
        }
      } else {
        setClasses([]);
      }
    };
    fetchClasses();
  }, [selectedBoard]);

  const handleSignUp = () => {
    form.submit();
  };


  const onFinish = async (values) => {
    console.log("Form Values:", values);
    createFireBaseUserWithEmailAndPassword(role, values.email, values.password, values);
  };

  const createFireBaseUserWithEmailAndPassword = async (role, email, password, values) => {
    setIsSubmitting(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log("User created:", userCredential);
      const user = userCredential.user;
      localStorage.setItem("sessionData", JSON.stringify({ accessToken: user.accessToken ,refreshToken: userCredential._tokenResponse.refreshToken}));
      console.log("role", role);

      if (role === "teacher") {
        const data = {
          role: role,
          access_token: user.accessToken,
          refresh_token: userCredential._tokenResponse.refreshToken,
        };
        await signupUser(data);
        localStorage.clear();
        navigate("/login");
      } else if (role === "student") {
        const downloadUrl = await uploadFileToFirebase(
          values.profile_image[0].originFileObj,
          "studentProfile"
        );
        const data = {
          role: role,
          access_token: user.accessToken,
          refresh_token: userCredential._tokenResponse.refreshToken,
          class_id: values.class_id,
          profile_image: downloadUrl,
          phone_number: values.phone_number,
          student_name: values.student_name,
          studentGender: values.studentGender,
          studentDOB: values.studentDOB,
          board_id: values.board_id,
        };
        console.log("Student Data:", data);
        await signupUser(data);
        localStorage.clear();
        navigate("/login");
      }
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Registration error:", errorCode, errorMessage);
      message.error(`Registration failed: ${errorMessage}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Container>
      <ImageSection>
        <img src={SignUpImage} alt="Books with Medal" />
      </ImageSection>
      <FormSection>
        <h2>Sign Up</h2>
        <p>
          Join us and get more benefits. We promise to keep your data safely.
        </p>
        <RoleSelection>
          <div className="line-wrapper">
            <span>Are you?</span>
          </div>
          {/* Wrapping buttons in a container to display them inline */}
          <ButtonContainer>
            <Button
              isSelected={role === "student"}
              onClick={() => setRole(role === "student" ? "" : "student")}
               style={role == "student" ? { background: "#ff0076", color: "#fff" } : { background: "#fff", color: "#ff0076" }}
            >
              Student
            </Button>
            <Button 
              type={role === "teacher" ? "primary" : "default"}
              isSelected={role == "teacher" ? true : false}
              onClick={() => setRole(role === "teacher" ? "" : "teacher")}
              style={role == "teacher" ? { background: "#ff0076", color: "#fff" } : { background: "#fff", color: "#ff0076" }}
            >
              Teacher
            </Button>
          </ButtonContainer>
        </RoleSelection>
        <ScrollableForm>
          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            initialValues={{
              student_email: "",
            }}
            onValuesChange={(changedValues, allValues) => {
              if (changedValues.email) {
                form.setFieldsValue({
                  student_email: changedValues.email,
                });
              }
            }}
          >
            {/* Common Fields */}
            <Form.Item
              name="email"
              label="Email Address"
              rules={[
                { required: true, message: "Please enter your email address" },
                { type: "email", message: "Please enter a valid email address" },
              ]}
            >
              <Input placeholder="Email Address" />
            </Form.Item>
            <Form.Item
              name="password"
              label="Password"
              rules={[
                { required: true, message: "Please enter your password" },
                { min: 6, message: "Password must be at least 6 characters" },
              ]}
              hasFeedback
            >
              <Input.Password placeholder="Password" />
            </Form.Item>

            {/* Student Specific Fields */}
            {role === "student" && (
              <>
                <Form.Item
                  name="profile_image"
                  label="Upload Profile Image"
                  valuePropName="fileList"
                  getValueFromEvent={(e) => {
                    if (Array.isArray(e)) {
                      return e;
                    }
                    return e && e.fileList;
                  }}
                  rules={[
                    { required: true, message: "Please upload your profile image" },
                  ]}
                >
                  <Upload
                    name="profileImage"
                    listType="picture"
                    beforeUpload={() => false} // Prevent automatic upload
                    // onChange={handleFileChange}
                    accept=".jpg,.jpeg,.png"
                    maxCount={1}
                  >
                    <Button icon={<UploadOutlined />}>Click to Upload Profile Image</Button>
                  </Upload>
                </Form.Item>

                <Form.Item
                  name="student_name"
                  label="Student Name"
                  rules={[
                    { required: true, message: "Please enter your name" },
                    { max: 50, message: "Name cannot exceed 50 characters" },
                  ]}
                >
                  <Input placeholder="Student Name" />
                </Form.Item>

                {/* Student Email (Read-Only and Same as Main Email) */}
                <Form.Item
                  name="student_email"
                  label="Student Email"
                  rules={[
                    { required: true, message: "Please enter your student email" },
                    { type: "email", message: "Please enter a valid email address" },
                  ]}
                >
                  <Input placeholder="Student Email" readOnly />
                </Form.Item>

                <Form.Item
                  name="phone_number"
                  label="Student Phone Number"
                  rules={[
                    { required: true, message: "Please enter your phone number" },
                    {
                      pattern: /^\d{10}$/,
                      message: "Phone number must be 10 digits",
                    },
                  ]}
                >
                  <Input placeholder="Student Phone Number" maxLength={10} />
                </Form.Item>

                <Form.Item
                  name="studentDOB"
                  label="Student Date of Birth"
                  rules={[
                    { required: true, message: "Please enter your date of birth" },
                  ]}
                >
                  <Input type="date" placeholder="Student Date of Birth" />
                </Form.Item>

                <StudentSelects>
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
                      {board.map((b) => (
                        <Option key={b._id} value={b._id}>
                          {b.name}
                        </Option>
                      ))}
                    </Select>
                  </Form.Item>
                </StudentSelects>

                <StudentSelects>
                  <Form.Item
                    name="studentGender"
                    label="Select Gender"
                    rules={[
                      { required: true, message: "Please select your gender" },
                    ]}
                  >
                    <Select placeholder="Select Gender" allowClear>
                      <Option value="male">Male</Option>
                      <Option value="female">Female</Option>
                      <Option value="other">Other</Option>
                    </Select>
                  </Form.Item>
                </StudentSelects>

                <StudentSelects>
                  <Form.Item
                    name="class_id"
                    label="Select Class"
                    rules={[
                      { required: true, message: "Please select at least one class" },
                    ]}
                  >
                    <Select
                      placeholder="Select Class"
                      allowClear
                    >
                      {classes.map((cls) => (
                        <Option key={cls._id} value={cls._id}>
                          {cls.classLevel} - {cls.className}
                        </Option>
                      ))}
                    </Select>
                  </Form.Item>
                </StudentSelects>
              </>
            )}



            <Form.Item>
              <Button
                type="primary"
                onClick={handleSignUp}
                // style={{ width: "100%" }}
                htmlType="submit"
                disabled={
                  form.getFieldsError().some(({ errors }) => errors.length) ||
                  !role ||
                  isSubmitting
                }
                style={role !== "default" ? { background: "#ff0076", color: "#fff", width: "100%" } : { background: "#fff", color: "#ff0076", width: "100%" }}
              >
                {isSubmitting ? "Submitting..." : "Create Account"}
              </Button>
            </Form.Item>

            <p>
              Already have an Account? <LinkText href="/login">Log in</LinkText>
            </p>
          </Form>
        </ScrollableForm>
      </FormSection>
    </Container>
  );
};

export default SignUpPage;
