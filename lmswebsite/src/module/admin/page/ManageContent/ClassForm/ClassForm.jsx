import React, { useEffect, useState } from 'react';
import { Form, Input, Select, Button, message, Spin, Alert } from 'antd';
import { createClass } from '../../../../../api/classApi'; // Ensure correct path
import { getBoards } from '../../../../../api/boadApi'; // Ensure correct path
 
const { Option } = Select;
 
const ClassForm = () => {
  const [form] = Form.useForm(); // Form instance
  const [boards, setBoards] = useState([]); // Board data
  const [loadingBoard, setLoadingBoard] = useState(false); // Loading state for boards
  const [boardError, setBoardError] = useState(null); // Error state for boards
  const [isSubmitting, setIsSubmitting] = useState(false); // Form submission state
 
  // Fetch boards when component mounts
  useEffect(() => {
    const fetchBoards = async () => {
      setLoadingBoard(true);
      setBoardError(null);
      try {
        const fetchedBoards = await getBoards();
        setBoards(fetchedBoards);
      } catch (error) {
        setBoardError(error.response?.data?.error || 'Failed to fetch Boards.');
      } finally {
        setLoadingBoard(false);
      }
    };
    fetchBoards();
  }, []);
 
  // Handle form submission
  const onFinish = async (values) => {
    setIsSubmitting(true);
    try {
      await createClass(values);
      message.success('Class created successfully!');
      form.resetFields(); // Reset form fields
    } catch (error) {
      let errorMsg = 'Failed to create class. Please try again.';
      if (error.response) {
        if (error.response.status === 403) {
          errorMsg = 'You do not have permission to create a class.';
        } else if (error.response.data?.error) {
          errorMsg = error.response.data.error;
        }
      }
      message.error(errorMsg);
    } finally {
      setIsSubmitting(false);
    }
  };
 
  return (
    <div className="class-form-container" style={{ maxWidth: 600, margin: '0 auto', padding: 24 }}>
      <h2>Create Class</h2>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        initialValues={{
          className: '',
          classLevel: '',
          curriculum: '',
        }}
      >
        {/* Class Name */}
        <Form.Item
          label="Class Name"
          name="className"
          rules={[{ required: true, message: 'Please enter the class name!' }]}
        >
          <Input placeholder="Enter class name" />
        </Form.Item>
 
        {/* Class Level */}
        <Form.Item
          label="Class Level"
          name="classLevel"
          rules={[{ required: true, message: 'Please enter the class level!' }]}
        >
          <Input placeholder="Enter class level (e.g., 5th, 6th, etc.)" />
        </Form.Item>
 
        {/* Board Selection */}
        <Form.Item
          label="Board"
          name="curriculum"
          rules={[{ required: true, message: 'Please select a board!' }]}
        >
          {loadingBoard ? (
            <Spin tip="Loading boards..." />
          ) : boardError ? (
            <Alert message={boardError} type="error" showIcon />
          ) : (
            <Select placeholder="Select Board">
              {boards.map((board) => (
                <Option key={board._id} value={board._id}>
                  {board.name}
                </Option>
              ))}
            </Select>
          )}
        </Form.Item>
 
        {/* Submit Button */}
        <Form.Item>
          <Button style={{ backgroundColor: '#EE1B7A' , display: 'block' , width: 'auto', margin: '0 auto' ,  }} type="primary" htmlType="submit" loading={isSubmitting} block>
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
 
export default ClassForm;