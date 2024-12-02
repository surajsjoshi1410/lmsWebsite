import React, { useState } from "react";
import { Form, Input, Button, message } from "antd"; // Ant Design imports
import { FormContainer } from "./BannerForm.style"; // Import styles
import { createBanner } from "../../../../../api/bannerApi"; // Adjust the path to your API function
import { uploadFileToFirebase } from "../../../../../utils/uploadFileToFirebase";
 
const BannerForm = () => {
  const [formData, setFormData] = useState({
    banner_name: "",
    banner_image: null, // Will hold the file object
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
 
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError(null); // Clear any existing errors
  };
 
  const handleFileChange = (e) => {
    const file = e.target.files[0]; // Get the selected file
    if (file) {
      setFormData((prev) => ({
        ...prev,
        banner_image: file,
      }));
      setError(null);
    } else {
      setFormData((prev) => ({
        ...prev,
        banner_image: null,
      }));
      setError("Please select a valid file.");
    }
  };
 
  const handleSubmit = async () => {
    setIsSubmitting(true);
    setError(null);
    setSuccessMessage("");
 
    try {
      if (!formData.banner_name || !formData.banner_image) {
        setError("Both banner name and image are required.");
        setIsSubmitting(false);
        return;
      }
 
      // Upload file to Firebase and get download URL
      const downloadUrl = await uploadFileToFirebase(formData.banner_image, "bannerImages");
      const submissionData = { banner_name: formData.banner_name, banner_image: downloadUrl };
 
      // Call the API function to create the banner
      const response = await createBanner(submissionData);
 
      setSuccessMessage("Banner created successfully!");
      message.success("Banner created successfully!"); // Show success message
      console.log("Banner response:", response); // Debugging log to verify response
 
      // Reset the form
      setFormData({
        banner_name: "",
        banner_image: null,
      });
    } catch (error) {
      setError(error.response?.data?.error || "Failed to create banner. Please try again later.");
      message.error("Failed to create banner. Please try again later."); // Show error message
      console.error("Error creating banner:", error.response?.data || error);
    } finally {
      setIsSubmitting(false);
    }
  };
 
  return (
    <FormContainer>
      <h2>Create Banner</h2>
      {error && <p className="error-message">{error}</p>}
      {successMessage && <p className="success-message">{successMessage}</p>}
 
      <Form onFinish={handleSubmit}>
        <Form.Item
          label="Banner Name"
          name="banner_name"
          rules={[{ required: true, message: "Please enter the banner name!" }]}
        >
          <Input
            name="banner_name"
            value={formData.banner_name}
            onChange={handleInputChange}
            placeholder="Enter banner name"
          />
        </Form.Item>
 
        <Form.Item
          label="Banner Image"
          name="banner_image"
          rules={[{ required: true, message: "Please upload a banner image!" }]}
        >
          <Input
            type="file"
            name="banner_image"
            accept="image/*"
            onChange={handleFileChange}
          />
        </Form.Item>
 
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            loading={isSubmitting}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        </Form.Item>
      </Form>
    </FormContainer>
  );
};
 
export default BannerForm;