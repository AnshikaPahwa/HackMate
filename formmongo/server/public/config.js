// API Configuration
// Automatically detects if running locally or in production
const API_BASE_URL = window.location.hostname === 'localhost' 
    ? 'http://localhost:5000' 
    : window.location.origin;

console.log('API Base URL:', API_BASE_URL);
