import React, { useState } from "react";
import { FormContainer } from "./ChooseUSForm.styles"; // Import styles
import { createChooseUsFeature } from "../../../../../api/chooseUsApi"; // Adjust the path to your API function
import { uploadFileToFirebase } from "../../../../../utils/uploadFileToFirebase"; // Assuming this function handles file upload

const ChooseUsForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    imageUrl: null, // Will hold the file object
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
        imageUrl: file,
      }));
      setError(null); // Clear error
    } else {
      setFormData((prev) => ({
        ...prev,
        imageUrl: null,
      }));
      setError("Please select a valid file.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setSuccessMessage("");

    try {
      // Validate form data
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
        imageLink:imageUrl, // Upload the image URL from Firebase
      });

      console.log("Feature created successfully:", response);

      setSuccessMessage("Feature created successfully!");
      setFormData({
        name: "",
        description: "",
        imageUrl: null,
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

      <form onSubmit={handleSubmit}>
        {/* Name Field */}
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Description Field */}
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Image Upload Field */}
        <div>
          <label htmlFor="imageUrl">Upload Image</label>
          <input
            type="file"
            id="imageUrl"
            accept="image/*"
            onChange={handleFileChange}
            required
          />
        </div>

        {/* Error message */}
        {error && <p style={{ color: "red" }}>{error}</p>}

        {/* Success message */}
        {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}

        {/* Submit Button */}
        <div>
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </FormContainer>
  );
};

export default ChooseUsForm;
