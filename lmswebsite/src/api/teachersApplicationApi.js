import api from '../config/axiosConfig';
import { uploadFileToFirebase } from '../utils/uploadFileToFirebase'; // Utility function for file upload

/**
 * Function to submit a teacher application
 * @param {Object} applicationData - The application data including file and text fields
 * @param {File} applicationData.resume - The resume file to upload
 * @param {string} applicationData.state - The state of the applicant
 * @param {string} applicationData.city - The city of the applicant
 * @param {string} applicationData.pincode - The pincode of the applicant
 * @param {string} applicationData.current_position - The current position of the applicant
 * @param {string} applicationData.language - The language of the applicant
 * @returns {Object} - The response from the server
 */

export const submitTeacherApplication = async (applicationData) => {
    try {
      console.log('Submitting application:', applicationData);
      // Upload resume and profile image to Firebase
      const resumeUrl = await uploadFileToFirebase(applicationData.resume_link, 'resume');
      const profileImageUrl = await uploadFileToFirebase(applicationData.profileImage, 'profileImage');
      // Prepare the request body
      const requestBody = {
        state: applicationData.state,
        city: applicationData.city,
        pincode: applicationData.pincode,
        current_position: applicationData.current_position,
        language: applicationData.language,
        phone_number: applicationData.phone_number,
        experience: applicationData.experience,
        resume_link: resumeUrl, // Add resume URL
        class_id:applicationData.class_id,
        subject_id:applicationData.subject_id,
        profileImage: profileImageUrl, // Add profile image URL
        board_id:applicationData.board_id,
        qualifications:applicationData.qualifications,
        dateOfBirth:applicationData.dateOfBirth
      };
      // Send the request to the backend
      const response = await api.post('/teacher-application/apply', requestBody);
      console.log('Application submitted successfully:', response.data);
      return response.data; // Return the response data
    } catch (error) {
      console.error('Error submitting application:', error.response?.data || error.message);
      throw error; // Throw the error for further handling
    }
  };

/**
 * Function to fetch teacher applications with an optional approval status
 * @param {string} approvalStatus - The approval status to filter applications
 * @returns {Object} - The response from the server containing teacher applications
 */
export const getTeacherApplications = async (approvalStatus) => {
    try {
        const response = await api.get('/teacher-application/', {
            params: {
                approval_status: approvalStatus, // Set the approval status as a query parameter
            },
        });
        console.log('Teacher applications fetched successfully:', response.data);
        return response.data; // Return the response data
    } catch (error) {
        console.error('Error fetching teacher applications:', error.response?.data || error.message);
        throw error; // Throw the error for further handling
    }
};

/**
* Function to approve a teacher application by application ID
* @param {string} applicationId - The ID of the teacher application to approve
* @returns {Object} - The response from the server after approval
*/
export const approveTeacherApplication = async (applicationId) => {
    try {
        const response = await api.put(`/teacher-application/approve/${applicationId}`);
        console.log('Teacher application approved successfully:', response.data);
        return response.data; // Return the response data
    } catch (error) {
        console.error('Error approving teacher application:', error.response?.data || error.message);
        throw error; // Throw the error for further handling
    }
};

/**
 * Fetch a single teacher's application by ID.
 * @param {string} applicationId - The ID of the application to fetch.
 * @returns {Promise<Object>} - The application data or an error message.
 */
export const getSingleTeacherApplication = async (applicationId) => {
    try {
      const response = await api.get(
        `/teacher-application/application/single/${applicationId}`
      );
      console.log('Fetched Application:', response.data); // For debugging
      return response.data; // Return the application data
    } catch (error) {
      console.error('Error fetching application:', error.response?.data || error.message);
      throw error; // Re-throw the error for further handling if needed
    }
  };

export const getTeacherApplicationsByUserId = async (user_id) => {
    try {
        const response = await api.get(`/teacher-application/application/single/teacher/${user_id}`);
        console.log('Teacher applications fetched successfully:', response.data);
        return response.data; // Return the response data
    } catch (error) {
        console.error('Error fetching teacher applications:', error.response?.data || error.message);
        throw error; // Throw the error for further handling
    }
};
