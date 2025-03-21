require('dotenv').config();
const axios = require('axios');

const API_BASE_URL = process.env.API_BASE_URL || 'http://localhost:8000';
const BEARER_TOKEN = process.env.BEARER_TOKEN;

const fetchData = async (endpoint, queryParams = {}) => {
    try {
        const url = `${API_BASE_URL}${endpoint}`;

        console.log(`fetching: ${url} with params:`, queryParams);

        const response = await axios.get(url, {
            params: queryParams, 
            headers: {
                Authorization: `Bearer ${BEARER_TOKEN}`,
                'Content-Type': 'application/json'
            }
        });

        return response.data; inside `.data`
    } catch (error) {
        console.error(`error fetching ${endpoint}:`, error.response?.data || error.message);
        throw new Error(`api request failed: ${error.response?.status || 'Unknown error'}`);
    }
};

module.exports = { fetchData };
