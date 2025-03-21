const express = require('express');
const router = express.Router();
const { fetchData } = require('../services/apiService.js');



router.get('/:postId/comments', async (req, res) => {
    try {
        const { postId } = req.params;
        const queryParams = req.query; 


        const comments = await fetchData(`/posts/${postId}/comments`, queryParams);

        res.json(comments);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch post comments", details: error.message });
    }
});

module.exports = router;
