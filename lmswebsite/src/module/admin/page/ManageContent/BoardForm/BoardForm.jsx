import React, { useState } from 'react';
import { Form, Input, Button, Spin, message, Alert } from 'antd';
import { createBoard } from '../../../../../api/boardApi';
 
const BoardForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
 
  const handleSubmit = async (values) => {
    console.log('Form Values:', values); // Log form values
    setIsSubmitting(true);
    setError(null);
 
    try {
      const response = await createBoard(values);
      console.log('API Response:', response); // Log API response
      message.success('Board created successfully!');
    } catch (err) {
      console.error('Error:', err); // Log error details
      let errorMsg = 'Failed to create board. Please try again.';
      if (err.response && err.response.data && err.response.data.error) {
        errorMsg = err.response.data.error;
      }
      setError(errorMsg);
      message.error(errorMsg);
    } finally {
      setIsSubmitting(false);
    }
  };
 
  return (
    <div style={{ maxWidth: 600, margin: '0 auto', padding: 24 }}>
      <h2>Create Board</h2>
      <Form layout="vertical" onFinish={handleSubmit}>
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: 'Please enter board name' }]}
        >
          <Input placeholder="Enter board name" />
        </Form.Item>
        <Form.Item
          label="Description"
          name="description"
          rules={[{ required: true, message: 'Please enter board description' }]}
        >
          <Input.TextArea
            placeholder="Enter board description"
            rows={3}
            style={{ resize: 'vertical' }}
          />
        </Form.Item>
        {error && (
          <Alert
            message={error}
            type="error"
            showIcon
            style={{ marginBottom: '1rem' }}
          />
        )}
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            loading={isSubmitting}
            block
            style={{ backgroundColor: '#EE1B7A' , display: 'block' , width: 'auto', margin: '0 auto'}}
          >
            {isSubmitting ? <Spin size="small" /> : 'Submit'}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
 
export default BoardForm;