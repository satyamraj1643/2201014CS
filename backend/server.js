const express = require('express');
const cors = require('cors');
const { PORT } = require('./config/envConfig');

require('dotenv').config();


const usersRoutes = require('./routes/users');
const postsCommentRoutes = require('./routes/postComments');


const app = express();
app.use(cors());
app.use(express.json());

//defining routes
app.use('/users', usersRoutes);
app.use('/posts', postsCommentRoutes);


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
