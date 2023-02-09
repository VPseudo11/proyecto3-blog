const router = require('express').Router()
const postServices = require('./posts.services')

router.route('/')
    .get(postServices.getAllPosts)
    .post(postServices.postPost)

router.route('/:id')
    .get(postServices.getPostById)
    .patch(postServices.patchPost)
    .delete(postServices.deletePost)

module.exports = router