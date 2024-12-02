import React, { useState } from "react";
import { FiFileText } from "react-icons/fi";
import { createCircularNotificationApi } from "../../../../api/circularNotificationApi";
import { Input, Select, Button, Upload, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { CircularFormContainer, FormGroup, BackButton } from "./CreateCircular.styles";
import { useNavigate } from "react-router-dom";
 
const { TextArea } = Input;
 
const CreateCircular = ({ closeModal }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [validDate, setValidDate] = useState("");
  const [metaImage, setMetaImage] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [role, setRole] = useState("all");
  const navigate = useNavigate();
 
  const handleImageChange = (info) => {
    if (info.fileList.length > 0) {
      setMetaImage(info.fileList[0].originFileObj);
      setImagePreview(URL.createObjectURL(info.fileList[0].originFileObj));
    }
  };
 
  const handleSubmit = async (event) => {
    event.preventDefault();
    setSuccessMessage("");
    setError("");
    if (!title || !description || !validDate || !metaImage) {
      setError("All fields are required, including an image.");
      return;
    }
 
    const notificationData = {
      circularName: title,
      validDate,
      content: description,
      imageFile: metaImage,
      role: role,
    };
 
    try {
      const response = await createCircularNotificationApi(notificationData);
      console.log("Circular created successfully:", response);
      setSuccessMessage("Circular notification created successfully!");
      setError("");
      setTitle("");
      setDescription("");
      setValidDate("");
      setMetaImage(null);
      setImagePreview("");
      closeModal();
    } catch (error) {
      console.error("Error creating circular:", error);
      setError("Failed to create circular. Please try again.");
    }
  };
 
  return (
    <CircularFormContainer>
      {error && <p className="error_message">{error}</p>}
      {successMessage && <p className="success_message">{successMessage}</p>}
 
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <label className="label">Title:</label>
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter circular title"
          />
        </FormGroup>
 
        <FormGroup>
          <label className="label">Description:</label>
          <TextArea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter circular description"
            rows={4}
          />
        </FormGroup>
 
        <FormGroup>
          <label className="label">Valid Till:</label>
          <Input
            type="date"
            value={validDate}
            onChange={(e) => setValidDate(e.target.value)}
          />
        </FormGroup>
 
        <FormGroup>
          <label className="label">Role:</label>
          <Select value={role} onChange={(value) => setRole(value)} style={{ width: "100%" }}>
            <Select.Option value="all">All</Select.Option>
            <Select.Option value="student">Student</Select.Option>
            <Select.Option value="teacher">Teacher</Select.Option>
          </Select>
        </FormGroup>
 
        <FormGroup>
          <label className="label">
            {imagePreview ? (
              <img
                src={imagePreview}
                alt="Circular Preview"
                className="image-preview"
              />
            ) : (
              "Upload Image:"
            )}
          </label >
          <Upload
            accept="image/*"
            showUploadList={false}
            beforeUpload={() => false}
            onChange={handleImageChange}
          >
            <Button icon={<UploadOutlined />}>Click to upload</Button>
          </Upload>
        </FormGroup>
 
        <Button style={{backgroundColor: "#EE1B7A", color: "white",marginTop:"20px"}} type="primary" htmlType="submit" block>
          Submit
        </Button>
      </form>
    </CircularFormContainer>
  );
};
 
export default CreateCircular;