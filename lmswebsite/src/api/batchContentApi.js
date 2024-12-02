import { Description } from '@mui/icons-material';
import api from '../config/axiosConfig';
import { uploadFileToFirebase } from '../utils/uploadFileToFirebase';

/**
 * Function to upload content
 * @param {string} batchId - The ID of the batch
 * @param {string} teacherId - The ID of the teacher
 * @param {File} file - The file to be uploaded
 * @returns {Object} - The response data containing the uploaded content details
 */
export const uploadContent = async (batchId, teacherId, file, description) => {
    // console.log("Uploading content...hdgfhgjhkjlj",teacherId,batchId, file);
    try {
        const file_link= await uploadFileToFirebase(file, "contentFiles");
        const response = await api.post('/contents/upload', { batchId:batchId, teacherId:teacherId, materialLink:file_link, description:description });

        console.log('Content uploaded successfully:', response.data);
        return response.data; // Return the response data
    } catch (error) {
        console.error('Error uploading content:', error.response?.data || error.message);
        throw error; // Throw the error for further handling
    }
};

/**
 * Function to fetch all batch contents
 * @returns {Array} - The response data containing all batch contents
 */
export const getAllContents = async () => {
    try {
        const response = await api.get('/contents/');
        console.log('All contents fetched successfully:', response.data);
        return response.data; // Return the response data
    } catch (error) {
        console.error('Error fetching contents:', error.response?.data || error.message);
        throw error; // Throw the error for further handling
    }
};

/**
* Function to fetch contents by teacher ID
* @param {string} teacherId - The ID of the teacher to retrieve contents for
* @returns {Array} - The response data containing contents for the specified teacher
*/
export const getContentsByTeacherId = async (teacherId) => {
    try {
        const response = await api.get(`/contents/teacher/${teacherId}`);
        console.log('Contents fetched successfully for teacher:', response.data);
        return response.data; // Return the response data
    } catch (error) {
        console.error('Error fetching contents by teacher ID:', error.response?.data || error.message);
        throw error; // Throw the error for further handling
    }
};

/**
 * Function to fetch contents by batch ID
 * @param {string} batchId - The ID of the batch to retrieve contents for
 * @returns {Array} - The response data containing contents for the specified batch
 */
export const getContentByBatchId = async (batchId) => {
    try {
        console.log("Batch ID: console", batchId);
        const response = await api.get(`/contents/batch/${batchId}`);
        console.log('Contents fetched successfully for batch:', response.data);
        return response.data; // Return the response data
    } catch (error) {
        console.error('Error fetching contents by batch ID:', error.response?.data || error.message);
        throw error; // Throw the error for further handling
    }
};