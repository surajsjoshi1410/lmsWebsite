import React, { useState } from "react";
import { Form, Input, Alert, Spin, message } from "antd"; // Ant Design components
import { FormContainer, StyledButton } from "./FaqForm.style"; // Import styles
import { createFAQ } from "../../../../../api/faq"; // Adjust the path to your API function
 
const FaqForm = () => {
  const [formData, setFormData] = useState({
    question: "",
    answer: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError(null); // Clear any existing errors
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
 
    try {
      if (!formData.question || !formData.answer) {
        setError("Both question and answer are required.");
        setIsSubmitting(false);
        return;
      }
 
      // Call the API function to create the FAQ
      await createFAQ(formData);
      message.success("FAQ created successfully!");
 
      // Clear form after successful submission
      setFormData({
        question: "",
        answer: "",
      });
    } catch (error) {
      setError(
        error.response?.data?.error ||
          "Failed to create FAQ. Please try again later."
      );
      console.error("Error creating FAQ:", error.response?.data || error);
    } finally {
      setIsSubmitting(false);
    }
  };
 
  return (
    <FormContainer>
      <h2>Create FAQ</h2>
      {error && (
        <Alert
          message={error}
          type="error"
          showIcon
          style={{ marginBottom: "1em" }}
        />
      )}
      <Form onSubmitCapture={handleSubmit} layout="vertical">
        <Form.Item label="Question" required>
          <Input
            type="text"
            name="question"
            value={formData.question}
            onChange={handleChange}
            placeholder="Enter the FAQ question"
          />
        </Form.Item>
        <Form.Item label="Answer" required>
          <Input.TextArea
            name="answer"
            value={formData.answer}
            onChange={handleChange}
            placeholder="Enter the FAQ answer"
            rows={4}
          />
        </Form.Item>
        <Form.Item>
          <StyledButton
            type="primary"
            htmlType="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? <Spin /> : "Submit"}
          </StyledButton>
        </Form.Item>
      </Form>
    </FormContainer>
  );
};
 
export default FaqForm;
 