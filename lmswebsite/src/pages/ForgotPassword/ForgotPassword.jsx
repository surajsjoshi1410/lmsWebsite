import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { Form, Input, Button, Alert } from "antd";
import { auth } from "../../config/firebaseConfig";
import { getUserByAuthId } from "../../api/userApi";
import bgImg from "../../assets/image 32.png";
import { ForgotPasswordPageWrap } from "./ForgotPassword.styles";

const ForgotPassword = () => {
    const [errorMessage, setErrorMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false); // Loading state for button
    const [isResetting, setIsResetting] = useState(false);
    const [mailSent, setMailSent] = useState(false)
    const navigate = useNavigate();

    useEffect(() => {
        setMailSent(false);
        setIsResetting(false);
    }, [])
    const handleResetPassword = async (values) => {
        const { email } = values;
        setIsResetting(true); // Start loading
        try {
            await sendPasswordResetEmail(auth, email);
            setMailSent(true);
            setIsResetting(false);

        } catch (error) {
            console.error("Password reset error:", error);
            setErrorMessage("Incorrect email  Please try again.");
        } finally {
            setIsResetting(false); // Stop loading
        }

    };

    return (
        <ForgotPasswordPageWrap>
            <div className="login-container">
                <div className="login-image">
                    <img src={bgImg} alt="The Topper Academy - Unlock Your Future!" />
                </div>{
                    !mailSent ?
                        <div className="login-page-form-main-container">
                            <h2>Reset Password</h2>
                            <p>Enter your email to reset your password</p>

                            {errorMessage && <Alert type="error" message={errorMessage} showIcon />}

                            <Form
                                name="login-form"
                                onFinish={handleResetPassword}
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


                                <Form.Item>
                                    <Button
                                        type="primary"
                                        htmlType="submit"
                                        className="login-button"
                                        block
                                        loading={isResetting} // Spinner while submitting
                                        disabled={isResetting} // Disable button while loading
                                    >
                                        {isResetting ? "Sending Reset Link..." : "Send Reset Link"}
                                    </Button>
                                </Form.Item>
                            </Form>

                        </div>
                        :
                        <div className="login-page-form-main-container">
                            <h2>Reset Password</h2>
                            <p>Reset password mail sent successfully</p>
                            <p>
                                Login to an Account <a href="/login">Log In</a>
                            </p>
                        </div>
                }
            </div>
        </ForgotPasswordPageWrap>
    );
};

export default ForgotPassword;
