require('dotenv').config();

module.exports = {
    PORT: process.env.PORT || 3000,
    BASE_URL: process.env.BASE_URL,
    HEADERS: {
        Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
    }
};
