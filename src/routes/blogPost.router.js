const express = require('express');
const { blogPostController } = require('../controllers');
const authorizationUser = require('../middlewares/authorizationUser');
const validatePost = require('../middlewares/validatePost');

const router = express.Router();

router.get('/', authorizationUser, blogPostController.getAllPosts);
router.get('/:id', authorizationUser, blogPostController.getPostByid);
router.post('/', authorizationUser, validatePost, blogPostController.createBlogPost);
router.delete('/:id', authorizationUser, blogPostController.deletePost);
module.exports = router;