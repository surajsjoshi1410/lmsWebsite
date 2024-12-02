import React, { useState } from "react";
import { Input,  Form, Alert, Spin, message } from "antd";
import { FormContainer, StyledButton } from "./BenifitsForm.styles"; // Import styles
import { createBenefit } from "../../../../../api/benefitsApi"; // Adjust the path to your API function

const BenefitForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    color:"",
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
      if (!formData.title || !formData.description || !formData.color) {
        setError("All fields are required");
        setIsSubmitting(false);
        return;
      }

      // Call the API function to create the FAQ
      await createBenefit(formData);
      message.success("Benifits  created successfully!");

      // Clear form after successful submission
      setFormData({
        title: "",
        description: "",
        color:""
      });
    } catch (error) {
      setError(error.response?.data?.error || "Failed to create Benefits. Please try again later.");
      console.error("Error creating Benefits:", error.response?.data || error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <FormContainer>
      <h2>Create Benifits</h2>
      {error && <Alert message={error} type="error" showIcon style={{ marginBottom: "1em" }} />}
      <Form onSubmitCapture={handleSubmit}>
        <Form.Item label="Title" required>
          <Input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter the Title"
          />
        </Form.Item>
        <Form.Item label="Description" required>
          <Input.TextArea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter the Description"
            rows={4}
          />
        </Form.Item>

        <Form.Item label="Color" required>
          <Input
            type="color"
            name="color"
            value={formData.color}
            onChange={handleChange}
            placeholder="Enter the Color"
          />
        </Form.Item>

        <Form.Item>
          <StyledButton type="primary" htmlType="submit" disabled={isSubmitting}>
            {isSubmitting ? <Spin /> : "Submit"}
          </StyledButton>
        </Form.Item>
      </Form>
    </FormContainer>
  );
};

export default BenefitForm;
