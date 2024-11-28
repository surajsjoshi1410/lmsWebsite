import React, { useState } from "react";
import { FiFileText } from "react-icons/fi";
import { createCircularNotificationApi } from "../../../../api/circularNotificationApi";
import {
  CircularFormContainer,
  FormGroup,
  SubmitButton,
  BackButton,
} from "./CreateCircular.styles";
import { useNavigate } from "react-router-dom";

const CreateCircular = ({closeModal}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [validDate, setValidDate] = useState("");
  const [metaImage, setMetaImage] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const[role,setRole]=useState('all');
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setMetaImage(file);
      setImagePreview(URL.createObjectURL(file));
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
      role:role,
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
            <label>Title:</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter circular title"
            />
          </FormGroup>

          <FormGroup>
            <label>Description:</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter circular description"
              rows="4"
            />
          </FormGroup>

          <FormGroup>
            <label>Valid Till:</label>
            <input
              type="date"
              value={validDate}
              onChange={(e) => setValidDate(e.target.value)}
            />
          </FormGroup>

          <FormGroup>
            <label>Role:</label>
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="all">All</option>
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
            </select> 
          </FormGroup>

          <FormGroup>
            <label>
              {imagePreview ? (
                <img
                  src={imagePreview}
                  alt="Circular Preview"
                  className="image-preview"
                />
              ) : (
                "Upload Image:"
              )}
            </label>
            <input
              type="file"
              accept="image/*"
              className="file-input"
              onChange={handleImageChange}
            />
          </FormGroup>

          <SubmitButton type="submit">Submit</SubmitButton>
        </form>
      </CircularFormContainer>

  );
};

export default CreateCircular;
