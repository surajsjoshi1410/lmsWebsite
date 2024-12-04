import React from "react";
import { Form, Input, Button as AntButton } from "antd"; // Renaming Ant Design Button to AntButton
import { Button as StyledButton } from "./LandingPageContactUs.styles"; // Styled Button

const LandingPageContactUs = ({ onClose }) => {
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    console.log("Submitted values:", values);
    onClose(); // Close modal on submission
  };

  const validateMobileNumber = (_, value) => {
    if (!value || /^\d{10}$/.test(value)) {
      return Promise.resolve();
    }
    return Promise.reject(
      new Error("Mobile number must be exactly 10 digits!")
    );
  };

  return (
    <Form form={form} layout="vertical" onFinish={handleSubmit}>
      <Form.Item
        label="Title"
        name="Title"
        rules={[{ required: true, message: "Please enter your query!" }]}
      >
        <Input placeholder="Enter your Query" />
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        rules={[
          { required: true, message: "Please enter your email!" },
          { type: "email", message: "Please enter a valid email!" },
        ]}
      >
        <Input placeholder="Enter your email" />
      </Form.Item>

      <Form.Item
        label="Mobile Number"
        name="MobileNumber"
        rules={[
          { required: true, message: "Please enter your Mobile number!" },
          { validator: validateMobileNumber }, // Custom validation for 10 digits
        ]}
      >
        <Input
          placeholder="Enter your number"
          maxLength={10} // Prevents entering more than 10 characters
          onKeyPress={(event) => {
            if (!/^\d$/.test(event.key)) {
              event.preventDefault(); // Blocks non-numeric input
            }
          }}
        />
      </Form.Item>
      <Form.Item
        label="Message"
        name="Message"
        rules={[{ required: true, message: "Please enter a Message!" }]}
      >
        <Input.TextArea placeholder="Enter your Query Description" rows={4} />
      </Form.Item>
      {/* Using Styled Button for custom design */}
      <StyledButton htmlType="submit" block>
        Submit
      </StyledButton>
    </Form>
  );
};

export default LandingPageContactUs;
