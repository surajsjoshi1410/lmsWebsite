// Import the configured Axios instance
import api from '../config/axiosConfig'; // Make sure the path to the api.js file is correct

export const submitResponse = async (responseData) => {
    try {
        // Call the backend API using the Axios instance
            
        const response = await api.post('/responses/response', responseData);
        
        console.log('Response submitted successfully:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error submitting response:', error.response?.data || error.message);
    }
};


export const getResponsesByQuiz = async (quiz_id) => {
    try {
        // Call the backend API using the Axios instance
        const response = await api.get(`/responses/quiz/${quiz_id}`);
        
        console.log('Responses fetched successfully:', response.data);
        return response.data.responses; // Return the responses array
    } catch (error) {
        console.error('Error fetching responses:', error.response?.data || error.message);
    }
};


export const getscoreforstudent = async (student_id,quizz_id) => {
    try {
        // Call the backend API using the Axios instance
        const response = await api.get(`/responses/score/${student_id}/${quizz_id}`);
        
        console.log('Score Fetched Succefuully', response.data);
        return response.data; // Return the responses array
    } catch (error) {
        console.error('Error fetching responses:', error.response?.data || error.message);
    }
};  