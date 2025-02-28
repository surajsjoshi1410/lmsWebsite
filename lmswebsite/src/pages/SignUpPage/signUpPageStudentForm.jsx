// src/components/SignUpPage/StudentForm.jsx

// combo of student subjects 

import React, { useEffect, useState } from "react";
import {
  Form,
  Input,
  Select,
  Button,
  message,
  Typography,
  Row,
  Col,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { getClassesByBoardId } from "../../api/classApi";
import { uploadFileToFirebase } from "../../utils/uploadFileToFirebase";
import { signupUser } from "../../api/authApi";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../config/firebaseConfig";
import { LinkText, ButtonContainer } from "./SignUpPage.style";
import { use } from "react";
import { getBoards } from "../../api/boardApi";
import { useNavigate } from "react-router-dom";
import "./SignUpPage.css";
import SignUpImage from "../../assets/Logofinal.png";
import { getUserByAuthId } from "../../api/userApi";
import { studentAccountCreated, studentSignedUpAdmin } from "../../api/mailNotificationApi";

const { Option } = Select;
const { Title, Text } = Typography;

const StudentForm = () => {
  const [classes, setClasses] = useState([]);
  const [selectedBoard, setSelectedBoard] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [boards, setBoards] = useState([]);
  const navigate = useNavigate();
  const [form] = Form.useForm();
  useEffect(() => {
    const apiCaller = async () => {
      const response = await getBoards();
      console.log(response);

      setBoards(response);
    };
    apiCaller();
  }, []);

  useEffect(() => {
    const fetchClasses = async () => {
      if (selectedBoard) {
        try {
          const classData = await getClassesByBoardId(selectedBoard);
          console.log("Fetched Classes:", classData);
          setClasses(classData || []);
        } catch (error) {
          console.error("Error fetching classes:", error);
          message.error("Failed to load classes. Please try again later.");
        }
      } else {
        setClasses([]);
      }
    };

    fetchClasses();
  }, [selectedBoard]);

  const handleBoardChange = (value) => {
    setSelectedBoard(value);
    form.setFieldsValue({ class_id: undefined }); // Reset class selection
  };




  const handleSubmit = async (values) => {
    setIsSubmitting(true);
    try {
      // Create user with Firebase
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      const user = userCredential.user;
  
      // Send email verification
      await sendEmailVerification(user);
  
      // Save user session data in local storage
      localStorage.setItem(
        "sessionData",
        JSON.stringify({
          accessToken: user.accessToken,
          refreshToken: userCredential._tokenResponse.refreshToken,
        })
      );
  
      // Upload profile image if present
      let profileImageUrl = "";
      if (values.profile_image && values.profile_image.length > 0) {
        profileImageUrl = await uploadFileToFirebase(
          values.profile_image[0].originFileObj,
          "studentProfile"
        );
      }
  
      // Prepare data to send to the backend
      const data = {
        role: "student",
        access_token: user.accessToken,
        refresh_token: userCredential._tokenResponse.refreshToken,
        class_id: values.class_id,
        profile_image: profileImageUrl,
        phone_number: values.phone_number,
        student_name: values.student_name,
        studentGender: values.studentGender,
        studentDOB: values.studentDOB,
        board_id: values.board_id,
        mode: "personal",
      };
  
      // Submit student data to the API
      await signupUser(data);
      await studentAccountCreated(values.student_name, values.email, values.password);
      await studentSignedUpAdmin(values.student_name, values.email);
  
      // Clear session data after signup
      localStorage.clear();
      message.success("Registration successful! Please verify your email.");
      
      // Sign in the user after registration to automatically log them in
      const signInUser = await signInWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      const { user: signedInUser } = signInUser;
      
      // Save session data after sign-in
      localStorage.setItem(
        "sessionData",
        JSON.stringify({ accessToken: signedInUser.accessToken })
      );
  
      // Fetch user profile data to check selected subjects and payment status
      const profileData = await getUserByAuthId(signedInUser.uid);
      const sessionData = {
        userId: signedInUser.uid,
        accessToken: signedInUser.accessToken,
        refreshToken: profileData.user.refresh_token,
        name: profileData.user.name,
        loggedIn: "true",
        role: profileData.user.role,
      };
      localStorage.setItem("sessionData", JSON.stringify(sessionData));
  
      // Condition to check if the student has selected subjects and paid
      const hasSelectedSubjects = profileData.user.selectedSubjects?.length > 0;
      const hasCompletedPayment = profileData.user.paymentStatus === "completed";
  
      if (hasSelectedSubjects && hasCompletedPayment) {
        // If both conditions are met, navigate to the dashboard
        navigate("/student/dashboard");
      } else {
        // If not, navigate to the student page (to select subjects or complete payment)
        navigate("/student");
      }
      
    } catch (error) {
      console.error("Registration error:", error);
      let errorMessage = "Registration failed. Please try again.";
      if (error.code === "auth/email-already-in-use") {
        errorMessage = "This email is already registered. Please sign in or use a different email.";
      } else if (error.code) {
        errorMessage = error.message || errorMessage;
      }
      message.error(errorMessage);
    } finally {
      setIsSubmitting(false);
      form.resetFields();
    }
  };
  

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        "@media(max-width:768px)": { flexDirection: "column" },
      }}
    >
      {/* Left Section for Logo */}
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#f9f9f9",
          "@media(max-width:768px)": { display: "none!important" },
        }}
      >
        <img src={SignUpImage} alt="Logo" />
      </div>

      {/* Right Section for Form */}
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "40px",
          backgroundColor: "#ffffff",
        }}
      >
        <div style={{ width: "100%", maxWidth: "600px" }}>
          <Title
            level={3}
            style={{ textAlign: "center", marginBottom: "10px" }}
          >
            Sign up
          </Title>
          <Text
            style={{
              display: "block",
              textAlign: "center",
              marginBottom: "20px",
              color: "#888",
            }}
          >
            Sign up to continue
          </Text>
          <Form
            form={form}
            layout="vertical"
            onFinish={handleSubmit}
            initialValues={{ student_email: "" }}
          >
            <Form.Item
             label="Full Name"
             name="student_name"
             rules={[
               { required: true, message: "Please enter the student's name" },
               {
                 pattern: /^[a-zA-Z\s]*$/,
                 message: "Only alphabetic characters are allowed",
               },
             ]}
           >
             <Input
               placeholder="Enter student's full name"
               onKeyPress={(event) => {
                 // Allow only alphabetic characters and space
                 if (!/[a-zA-Z\s]/.test(event.key)) {
                   event.preventDefault();
                 }
               }}
             />
           </Form.Item>

            <Form.Item
              name="email"
              label="Email"
              rules={[
                {
                  required: true,
                  message: "Please enter your email",
                },
                {
                  type: "email",
                  message: "Please enter a valid email",
                },
              ]}
            >
              <Input placeholder="Email" />
            </Form.Item>

            <Form.Item
              name="password"
              label="Password"
              rules={[
                { required: true, message: "Please enter your password" },
                { min: 6, message: "Password must be at least 6 characters" },
              ]}
            >
              <Input.Password placeholder="Password" />
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
              <Input placeholder="Phone Number" maxLength={10}     onKeyPress={(e) => {
      if (!/^\d$/.test(e.key)) {
        e.preventDefault(); // Prevent any non-digit input
      }
    }} />
            </Form.Item>

            <Form.Item
              name="board_id"
              label="Select Board"
              rules={[{ required: true, message: "Please select a board" }]}
            >
              <Select
                placeholder="Select Board"
                onChange={handleBoardChange}
                allowClear
              >
                {boards.map((b) => (
                  <Option key={b._id} value={b._id}>
                    {b.name}
                  </Option>
                ))}
              </Select>
            </Form.Item>

            <Form.Item
              name="class_id"
              label="Select Class"
              rules={[
                { required: true, message: "Please select at least one class" },
              ]}
            >
              <Select placeholder="Select Class" allowClear>
                {classes.map((cls) => (
                  <Option key={cls._id} value={cls._id}>
                    {cls.classLevel}
                  </Option>
                ))}
              </Select>
            </Form.Item>

            <Form.Item
              name="studentGender"
              label="Select Gender"
              rules={[{ required: true, message: "Please select your gender" }]}
            >
              <Select placeholder="Select Gender" allowClear>
                <Option value="male">Male</Option>
                <Option value="female">Female</Option>
                <Option value="other">Other</Option>
              </Select>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                loading={isSubmitting}
                style={{
                  width: "100%",
                  backgroundColor: "purple",
                  borderColor: "purple",
                  color: "#fff",
                  height: "40px",
                }}
                disabled={isSubmitting}
              >
              { isSubmitting? "Signing up...": "Sign up"}
              </Button>
            </Form.Item>
          </Form>

          <Text
            style={{
              display: "block",
              textAlign: "center",
              marginTop: "10px",
              color: "#888",
            }}
          >
            Already have an account?{" "}
            <a
              href="/"
              style={{
                color: "purple",
                "&:hover": { textDecoration: "underline!important" },
              }}
            >
              Sign in
            </a>
          </Text>
        </div>
      </div>
    </div>
  );
};

export default StudentForm;
