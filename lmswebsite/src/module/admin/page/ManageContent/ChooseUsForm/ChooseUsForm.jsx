import React, { useState } from "react";
import { Form, Input, Button, Upload, message } from "antd"; // Ant Design components
import { FormContainer } from "./ChooseUSForm.styles"; // Import styles
import { createChooseUsFeature } from "../../../../../api/chooseUsApi"; // Adjust the path to your API function
import { uploadFileToFirebase } from "../../../../../utils/uploadFileToFirebase"; // Assuming this function handles file upload
import { UploadOutlined } from "@ant-design/icons"; // Ant Design icons
 
const ChooseUsForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    imageUrl: null, // Will hold the file object
    previewUrl: "", // Holds the file name for the selected image
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
 
  const handleFileChange = (file) => {
    if (file) {
      setFormData((prev) => ({
        ...prev,
        imageUrl: file, // Store the file object
        previewUrl: file.name, // Use the file name for display
      }));
      setError(null); // Clear error
    } else {
      setFormData((prev) => ({
        ...prev,
        imageUrl: null,
        previewUrl: "",
      }));
      setError("Please select a valid file.");
    }
    return false; // Prevent automatic file upload by Ant Design
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setSuccessMessage("");
 
    try {
      if (!formData.name || !formData.description || !formData.imageUrl) {
        setError("Please fill out all fields and upload an image.");
        setIsSubmitting(false);
        return;
      }
 
      // Upload the image to Firebase
      const imageUrl = await uploadFileToFirebase(formData.imageUrl); // Assuming this function returns the uploaded file's URL
      // Create the ChooseUs feature
      const response = await createChooseUsFeature({
        name: formData.name,
        description: formData.description,
        imageLink: imageUrl, // Use the uploaded image URL from Firebase
      });
 
      setSuccessMessage("Feature created successfully!");
      setFormData({
        name: "",
        description: "",
        imageUrl: null,
        previewUrl: "",
      }); // Clear form
    } catch (error) {
      setError("Error creating feature: " + error.message);
    } finally {
      setIsSubmitting(false);
    }
  };
 
  return (
    <FormContainer>
      <h2>Create Choose Us Feature</h2>
 
      <Form onSubmitCapture={handleSubmit} layout="vertical">
        {/* Name Field */}
        <Form.Item label="Name" required>
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </Form.Item>
 
        {/* Description Field */}
        <Form.Item label="Description" required>
          <Input.TextArea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            rows={4}
          />
        </Form.Item>
 
        {/* Image Upload Field */}
        <Form.Item label="Upload Image" required>
          <Upload
            beforeUpload={handleFileChange}
            showUploadList={false}
            accept="image/*"
          >
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
            {/* Display the selected image name */}
          {formData.previewUrl && (
            <div style={{ marginTop: "10px", textAlign: "center" }}>
              <p>{formData.previewUrl}</p>
            </div>
          )}
          </Upload>
         
        </Form.Item>
 
        {/* Error message */}
        {error && <p style={{ color: "red" }}>{error}</p>}
 
        {/* Success message */}
        {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
 
        {/* Submit Button */}
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            loading={isSubmitting}
            style={{ margin: "0 auto", display: "block" }}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        </Form.Item>
      </Form>
    </FormContainer>
  );
};
 
export default ChooseUsForm;