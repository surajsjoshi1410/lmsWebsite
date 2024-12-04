import React, { useState, useEffect } from "react";
import {
  FormContainer,
  FormItem,
  Input,
  TextArea,
  Button,
  FeatureInputContainer,
} from "./PackageForm.style"; // Adjust the path to your styled-components
import { createPackage } from "../../../../../api/packagesApi"; // API call for creating a package
import { getClassesByBoardId } from "../../../../../api/classApi"; // Fetch classes by board
import { getSubjects } from "../../../../../services/createBatch"; // Fetch subjects by class
import { getBoards } from "../../../../../api/boadApi"; // Fetch boards
import { message, Spin, Alert, Select, Radio } from "antd";

const { Option } = Select;

const PackageForm = () => {
  const [formData, setFormData] = useState({
    package_name: "",
    description: "",
    features: [""],
    class_id: "",
    board_id: "",
    subject_id: [],
    price: "",
    image: null,
    mode: "normal",
  });

  const [classes, setClasses] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [boards, setBoards] = useState([]);
  const [loadingClasses, setLoadingClasses] = useState(false);
  const [loadingSubjects, setLoadingSubjects] = useState(false);
  const [loadingBoards, setLoadingBoards] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const[mode, setMode] = useState('');
  const [subjectError, setSubjectError] = useState(null); // New state for subject selection error

  // Fetch boards on component mount
  useEffect(() => {
    const fetchBoards = async () => {
      setLoadingBoards(true);
      try {
        const response = await getBoards();
        setBoards(response);
      } catch (error) {
        setError("Failed to fetch boards. Please try again later.");
      } finally {
        setLoadingBoards(false);
      }
    };

    fetchBoards();
  }, []);

  // Fetch classes based on selected board
  useEffect(() => {
    if (!formData.board_id) {
      setClasses([]);
      return;
    }

    const fetchClasses = async () => {
      setLoadingClasses(true);
      try {
        const response = await getClassesByBoardId(formData.board_id);
        setClasses(response);
      } catch (error) {
        setError("Failed to fetch classes. Please try again later.");
      } finally {
        setLoadingClasses(false);
      }
    };

    fetchClasses();
  }, [formData.board_id]);

  // Fetch subjects based on selected class
  useEffect(() => {
    if (!formData.class_id) {
      setSubjects([]);
      return;
    }

    const fetchSubjects = async () => {
      setLoadingSubjects(true);
      try {
        const response = await getSubjects(formData.class_id);
        setSubjects(response);
      } catch (error) {
        setError("Failed to fetch subjects. Please try again later.");
      } finally {
        setLoadingSubjects(false);
      }
    };

    fetchSubjects();
  }, [formData.class_id]);

  // Handle input change
  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setError(null);
    if (name === "image") {
      setFormData((prev) => ({
        ...prev,
        image: files[0],
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  // Handle feature changes
  const handleFeatureChange = (index, value) => {
    const updatedFeatures = [...formData.features];
    updatedFeatures[index] = value;
    setFormData((prev) => ({ ...prev, features: updatedFeatures }));
  };

  // Add a new feature field
  const addFeature = () => {
    setFormData((prev) => ({ ...prev, features: [...prev.features, ""] }));
  };

  // Remove a feature field
  const removeFeature = (index) => {
    const updatedFeatures = formData.features.filter((_, i) => i !== index);
    setFormData((prev) => ({ ...prev, features: updatedFeatures }));
  };

  // Handle subject selection change
  const handleSubjectChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      subject_id: value,
    }));

    // Validate the number of selected subjects
    if (![3, 5, 6].includes(value.length)) {
      setSubjectError("Please select exactly 3, 5, or 6 subjects.");
    } else {
      setSubjectError(null);
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    // Validate the number of selected subjects before submission
    if (![3, 5, 6].includes(formData.subject_id.length)) {
      setError("Please select exactly 3, 5, or 6 subjects.");
      setIsSubmitting(false);
      return;
    }

    try {
      if (!formData.image) {
        setError("Please upload an image.");
        setIsSubmitting(false);
        return;
      }
      await createPackage(formData);
      message.success("Package created successfully!");

      // Reset form data
      setFormData({
        package_name: "",
        description: "",
        features: [""],
        class_id: "",
        board_id: "",
        subject_id: [],
        price: "",
        image: null,
      });
    } catch (error) {
      setError(
        error.response?.data?.error ||
          "Failed to create package. Please try again later."
      );
      console.error("Error creating package:", error.response?.data || error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <FormContainer>
      <h2>Create Package</h2>

      {error && (
        <Alert
          message={error}
          type="error"
          showIcon
          style={{ marginBottom: "1em" }}
        />
      )}

      {loadingBoards || loadingClasses || loadingSubjects ? (
        <Spin tip="Loading..." />
      ) : (
        <form onSubmit={handleSubmit}>
          <FormItem>
            <label htmlFor="package_name">Package Name</label>
            <Input
              type="text"
              id="package_name"
              name="package_name"
              value={formData.package_name}
              onChange={handleChange}
              required
            />
          </FormItem>

          <FormItem
          name="mode"
          label="Package Mode"
          rules={[{ required: true, message: "Please select a Package Mode" }]}
          >
            <Radio.Group   name="mode" onChange={handleChange}>
              <Radio value="normal">Normal</Radio>
              <Radio value="personal">Personal</Radio>
            </Radio.Group>
            
          </FormItem>

          <FormItem>
            <label htmlFor="description">Description</label>
            <TextArea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </FormItem>

          <FormItem>
            <label>Features</label>
            {formData.features.map((feature, index) => (
              <FeatureInputContainer key={index}>
                <Input
                  type="text"
                  value={feature}
                  onChange={(e) => handleFeatureChange(index, e.target.value)}
                  required
                />
                <Button
                  type="button"
                  onClick={() => removeFeature(index)}
                  disabled={formData.features.length === 1}
                >
                  -
                </Button>
                <Button type="button" onClick={addFeature}>
            +
            </Button>
              </FeatureInputContainer>
            ))}
           
          </FormItem>

          <FormItem>
            <label htmlFor="board_id">Board</label>
            <Select
              id="board_id"
              name="board_id"
              value={formData.board_id || undefined}
              onChange={(value) =>
                setFormData((prev) => ({
                  ...prev,
                  board_id: value,
                  class_id: "",
                  subject_id: [],
                }))
              }
              placeholder="Select Board"
              required
            >
              {boards.map((board) => (
                <Option key={board._id} value={board._id}>
                  {board.name}
                </Option>
              ))}
            </Select>
          </FormItem>

          <FormItem>
            <label htmlFor="class_id">Class</label>
            <Select
              id="class_id"
              name="class_id"
              value={formData.class_id || undefined}
              onChange={(value) =>
                setFormData((prev) => ({
                  ...prev,
                  class_id: value,
                  subject_id: [],
                }))
              }
              placeholder="Select Class"
              required
              disabled={!formData.board_id || loadingClasses}
            >
              {classes.map((cls) => (
                <Option key={cls._id} value={cls._id}>
                  {cls.classLevel}
                </Option>
              ))}
            </Select>
          </FormItem>

          <FormItem>
            <label htmlFor="subject_id">Subjects</label>
            <Select
              id="subject_id"
              name="subject_id"
              mode="multiple"
              allowClear
              placeholder="Select Subjects"
              value={formData.subject_id}
              onChange={handleSubjectChange}
              required
              disabled={!formData.class_id || loadingSubjects}
              style={{ width: "100%" }}
            >
              {subjects.map((subject) => (
                <Option key={subject._id} value={subject._id}>
                  {subject.subject_name}
                </Option>
              ))}
            </Select>
            {/* Display subject selection error if any */}
            {subjectError && (
              <div style={{ color: "red", marginTop: "0.5em" }}>
                {subjectError}
              </div>
            )}
          </FormItem>

          <FormItem>
            <label htmlFor="price">Price</label>
            <Input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
            />
          </FormItem>

          <FormItem>
            <label htmlFor="image">Image</label>
            <Input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={handleChange}
              required
            />
          </FormItem>

          <FormItem>
            <Button
              type="submit"
              disabled={
                isSubmitting ||
                ![3, 5, 6].includes(formData.subject_id.length)
              }
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </Button>
          </FormItem>
        </form>
      )}
    </FormContainer>
  );
};

export default PackageForm;
