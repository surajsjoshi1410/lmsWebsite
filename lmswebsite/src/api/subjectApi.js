import api from '../config/axiosConfig';

/**
 * Function to create a new subject
 * @param {Object} subjectData - The subject details
 * @param {string} subjectData.subject_name - Name of the subject (e.g., "Mathematics")
 * @param {string} subjectData.class_id - ID of the class to which this subject belongs
 * @param {string} subjectData.language - Language of the subject (e.g., "english")
 * @param {boolean} subjectData.is_grammar_subject - Whether it’s a grammar subject
 * @returns {Object} - The created subject response from the server
 */
export const createSubject = async (subjectData) => {
  try {
    const response = await api.post('/subjects', subjectData);
    console.log('Subject created successfully:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error creating subject:', error.response?.data || error.message);
    throw error;
  }
};
