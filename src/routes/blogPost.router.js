const express = require('express');
const { blogPostController } = require('../controllers');
const authorizationUser = require('../middlewares/authorizationUser');
const validatePost = require('../middlewares/validatePost');
const validateUpdate = require('../middlewares/validateUpdate');

const router = express.Router();

router.get('/', authorizationUser, blogPostController.getAllPosts);
router.get('/:id', authorizationUser, blogPostController.getPostByid);
router.post('/', authorizationUser, validatePost, blogPostController.createBlogPost);
router.put('/:id', authorizationUser, validateUpdate, blogPostController.updateBlogPost);
router.delete('/:id', authorizationUser, blogPostController.deletePost);
module.exports = router;