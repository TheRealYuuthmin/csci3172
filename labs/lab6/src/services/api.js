import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api'; // Adjusted fallback

// Existing function (if needed)
export const getProjects = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/projects`);
    return response.data;
  } catch (error) {
    console.error('Error fetching projects:', error);
    // Re-throw the error so the component can handle it
    throw error;
  }
};

// Existing function (if needed)
export const getWeatherData = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/weather`);
    return response.data;
  } catch (error) {
    console.error('Error fetching weather:', error);
    // Re-throw the error so the component can handle it
    throw error;
  }
};

/**
 * Submits the contact form data to the backend.
 * @param {object} formData - The contact form data (name, email, subject, message).
 * @returns {Promise<object>} - The response data from the server.
 */
export const submitContactForm = async (formData) => {
  try {
    // Assuming your backend expects data at /contact relative to API_BASE_URL
    const response = await axios.post(`${API_BASE_URL}/contact`, formData);
    return response.data; // Return data on success (e.g., { message: 'Success' })
  } catch (error) {
    console.error('Error submitting contact form:', error);
    // Log more detailed error if available
    if (error.response) {
        console.error("Error Response Data:", error.response.data);
        console.error("Error Response Status:", error.response.status);
        console.error("Error Response Headers:", error.response.headers);
    } else if (error.request) {
        // The request was made but no response was received
        console.error("Error Request:", error.request);
    } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Error Message:', error.message);
    }
    // Re-throw the error so the component can display feedback
    throw error;
  }
};

/**
 * Fetches the list of stored messages from the backend.
 * @returns {Promise<Array>} - An array of message objects.
 */
export const getMessages = async () => {
    try {
      // Assuming your backend provides messages at /messages relative to API_BASE_URL
      const response = await axios.get(`${API_BASE_URL}/messages`);
      // Ensure the response data is an array, default to empty array if not
      return Array.isArray(response.data) ? response.data : [];
    } catch (error) {
        console.error('Error fetching messages:', error);
         if (error.response) {
            console.error("Error Response Data:", error.response.data);
            console.error("Error Response Status:", error.response.status);
         } else if (error.request) {
            console.error("Error Request:", error.request);
         } else {
            console.error('Error Message:', error.message);
         }
        // Re-throw the error for the component to handle
        throw error;
    }
};
