import api from "../config/axiosConfig";

export const createQuiz = async (responseData) => {
    try {
      console.log("responseData", responseData);
        // Call the backend API using the Axios instance
        const response = await api.post("/quizzes/create", responseData);
        console.log("Quiz created successfully:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error creating quiz:", error.response?.data || error.message);
    }
};


export const getQuizForSpecificBatcAndClass = async (batch_index, class_level) => {
    try {
        // Call the backend API using the Axios instance
        const response = await api.get(`/quizzes/batch/${batch_index}/class/${class_level}`);
        console.log("Quiz fetched successfully:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error fetching quiz:", error.response?.data || error.message);
    }
    
}


export const getQuizById = async (quiz_id) => {
    try {
        // Call the backend API using the Axios instance
        const response = await api.get(`/quizzes/${quiz_id}`);
        console.log("Quiz fetched successfully:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error fetching quiz:", error.response?.data || error.message);
    }
    
}


/**
 * Fetch quizzes based on optional filters.
 *
 * @param {Object} filters - Optional filters for fetching quizzes.
 * @param {string} [filters.teacher_id] - ID of the teacher.
 * @param {string} [filters.batch_id] - ID of the batch.
 * @param {string} [filters.class_id] - ID of the class.
 * @param {string} [filters.subject_id] - ID of the subject.
 *
 * @returns {Promise<Object>} - Returns a promise that resolves to the quizzes data.
 */
export const getQuizzesByTeacher = async (filters = {}) => {
    try {
      // Destructure filters
      const { teacher_id, batch_id, class_id, subject_id } = filters;
  
      // Initialize URLSearchParams to build query string
      const params = new URLSearchParams();
  
      if (teacher_id) params.append('teacher_id', teacher_id);
      if (batch_id) params.append('batch_id', batch_id);
      if (class_id) params.append('class_id', class_id);
      if (subject_id) params.append('subject_id', subject_id);
  
      // Convert URLSearchParams to string
      const queryString = params.toString();
  
      // Make GET request to /quizzes with query parameters
      const response = await api.get(`/quizzes/Teacher/quizzes${queryString ? `?${queryString}` : ''}`);
  
      // Return response data
      return response.data;
    } catch (error) {
      // Handle errors appropriately
      // You can customize error handling based on your needs
      if (error.response) {
        // Server responded with a status other than 2xx
        throw new Error(error.response.data.message || 'Error fetching quizzes');
      } else if (error.request) {
        // Request was made but no response received
        throw new Error('No response from server');
      } else {
        // Something else happened while setting up the request
        throw new Error(error.message);
      }
    }
  };


  export const getQuizBySubjectId = async (subject_id) => {
    try {

      if (!subject_id) {
        throw new Error('Subject ID is missing');
    }

        // Call the backend API using the Axios instance
        const response = await api.get(`/quizzes/subject/${subject_id}`);
        console.log("Quiz fetched successfully:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error fetching quiz:", error.response?.data || error.message);
    }
    
}