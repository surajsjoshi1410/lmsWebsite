import api from '../config/axiosConfig';

/**
 * Function to create a circular notification
 * @param {Object} notificationData - An object containing the circular notification details
 * @param {string} notificationData.circularName - The name of the circular notification
 * @param {string} notificationData.validDate - The valid date for the circular
 * @param {string} notificationData.content - The content of the circular
 * @param {File} notificationData.imageFile - The image file to upload
 * @returns {Object} - The response data containing the created circular notification
 */
export const createCircularNotificationApi = async (notificationData) => {
    const { circularName, validDate, content, imageFile ,role} = notificationData;

    const formData = new FormData();
    formData.append('circularName', circularName);
    formData.append('validDate', validDate);
    formData.append('content', content);
    formData.append('image', imageFile);
    formData.append('role', role);

    try {
        const response = await api.post('/circularNotifications', formData, {
            headers: {
                'Content-Type': 'multipart/form-data', // Important for file uploads
            },
        });

        console.log('Circular notification created successfully:', response.data);
        return response.data; // Return the response for further use if needed
    } catch (error) {
        console.error('Error creating circular notification:', error.response ? error.response.data : error.message);
        throw error; // Rethrow the error for handling in the calling function if needed
    }
};

/**
 * Function to fetch all circular notifications
 * @returns {Array} - The response data containing all circular notifications
 */
export const getAllCircularNotificationsApi = async (role) => {
    try {
        const response = await api.get(`/circularNotifications/all?role=${role}`);
        console.log('Circular notifications fetched successfully:', response.data);
        return response.data; // Return the response data
    } catch (error) {
        console.error('Error fetching circular notifications:', error.response ? error.response.data : error.message);
        throw error; // Throw the error for further handling
    }
};

/**
 * Function to update a circular notification
 * @param {string} notificationId - The ID of the circular notification to update
 * @param {Object} updateData - The data to update the circular notification
 * @param {string} updateData.circularName - The updated name of the circular notification
 * @param {string} updateData.content - The updated content of the circular notification
 * @returns {Object} - The response data containing the updated circular notification
 */
export const updateCircularNotificationApi = async (notificationId, updateData) => {
    try {
        const response = await api.put(`/circularNotifications/${notificationId}`, updateData);
        console.log('Circular notification updated successfully:', response.data);
        return response.data; // Return the updated circular notification data
    } catch (error) {
        console.error('Error updating circular notification:', error.response ? error.response.data : error.message);
        throw error; // Throw the error for further handling
    }
};

/**
 * Function to delete a circular notification
 * @param {string} notificationId - The ID of the circular notification to delete
 * @returns {Object} - The response data confirming the deletion
 */
export const deleteCircularNotificationApi = async (notificationId) => {
    try {
        const response = await api.delete(`/circularNotifications/${notificationId}`);
        console.log('Circular notification deleted successfully:', response.data);
        return response.data; // Return the response data
    } catch (error) {
        console.error('Error deleting circular notification:', error.response ? error.response.data : error.message);
        throw error; // Throw the error for further handling
    }
};