const express = require('express');
const router = express.Router();
const { fetchData } = require('../services/apiService');

//getting all users
router.get('/', async (req, res) => {
    try {
        const users = await fetchData('/users');
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch users", details: error.message });
    }
});

//getting posts from users
router.get('/:userId/posts', async (req, res) => {
    try {
        const { userId } = req.params;
        const queryParams = req.query; 


        const posts = await fetchData(`/users/${userId}/posts`, queryParams);

        res.json(posts);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch user posts", details: error.message });
    }
});

module.exports = router;
