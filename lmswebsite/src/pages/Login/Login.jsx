import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Form, Input, Button, Alert } from "antd";
import { auth } from "../../config/firebaseConfig";
import { getUserByAuthId } from "../../api/userApi";
import bgImg from "../../assets/image 32.png";
import { LoginPageWrap } from "./Login.styles";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false); // Loading state for button
  const navigate = useNavigate();

  const handleLogin = async (values) => {
    const { email, password } = values;
    setIsSubmitting(true); // Start loading

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const { user } = userCredential;

      localStorage.setItem(
        "sessionData",
        JSON.stringify({ accessToken: user.accessToken })
      );

      const profileData = await getUserByAuthId(user.uid);

      const sessionData = {
        userId: user.uid,
        accessToken: user.accessToken,
        refreshToken: profileData.user.refresh_token,
        name: profileData.user.name,
        loggedIn: "true",
      };
      localStorage.setItem("sessionData", JSON.stringify(sessionData));

      // Navigate to appropriate dashboard
      if (profileData.user.role === "admin") {
        navigate("/admin");
      } else if (profileData.user.role === "student") {
        navigate("/student");
      } else if (profileData.user.role === "teacher") {
        navigate("/teacher");
      }
    } catch (error) {
      console.error("Login error:", error);
      setErrorMessage("Incorrect email or password. Please try again.");
    } finally {
      setIsSubmitting(false); // Stop loading
    }
  };

  return (
    <LoginPageWrap>
      <div className="login-container">
        <div className="login-image">
          <img src={bgImg} alt="The Topper Academy - Unlock Your Future!" />
        </div>
        <div className="login-page-form-main-container">
          <h2>Sign In</h2>
          <p>Enter your email and password to sign in!</p>

          {errorMessage && <Alert type="error" message={errorMessage} showIcon />}

          <Form
            name="login-form"
            onFinish={handleLogin}
            layout="vertical"
            requiredMark="optional"
          >
            <Form.Item
              name="email"
              label="Email"
              rules={[
                { required: true, message: "Please enter your email" },
                { type: "email", message: "Please enter a valid email" },
              ]}
            >
              <Input placeholder="mail@example.com" />
            </Form.Item>

            <Form.Item
              name="password"
              label="Password"
              rules={[
                { required: true, message: "Please enter your password" },
                { min: 8, message: "Password must be at least 8 characters" },
              ]}
            >
              <Input.Password placeholder="Min. 8 characters" />
            </Form.Item>

            <div className="options">
              <a href="/forgot-password">Forget password?</a>
            </div>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-button"
                block
                loading={isSubmitting} // Spinner while submitting
                disabled={isSubmitting} // Disable button while loading
              >
                {isSubmitting ? "Signing In..." : "Sign In"}
              </Button>
            </Form.Item>
          </Form>

          <p>
            Not registered yet? <a href="/signup">Create an Account</a>
          </p>
        </div>
      </div>
    </LoginPageWrap>
  );
};

export default Login;
