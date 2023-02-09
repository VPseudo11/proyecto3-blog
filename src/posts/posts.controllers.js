const Posts = require('../models/posts.models')

const findAllPosts = async () => {
    const response = await Posts.findAll()
    return response
}

const findPostById = async (id) => {
    const response = await Posts.findOne({
        where: {
            id: id
        }
    })
    return response
}

const createPost = async (data) => {
    const newPost = await Posts.create({
        content: data.content,
        userName: data.userName,
        isPublished: data.published
    })
    return newPost
}

const updatePost = async (id, data) => {
    const response = await Posts.update(data, {
        where: {
            id: id
        }
    })
    return response
}

const deletePost = async (id) => {
    const response = await Posts.destroy({
        where: {
            id: id
        }
    })
    return response
}

module.exports = {
    findAllPosts,
    findPostById,
    createPost,
    updatePost,
    deletePost
}
