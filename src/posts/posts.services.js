const postsControlleres = require('./posts.controllers')

const getAllPosts = (req, res) => {
    postsControlleres.findAllPosts()
        .then(data => res.status(200).json(data))
        .catch(err => res.status(400).json({ message: err.message }))
}

const getPostById = (req, res) => {
    const id = req.params.id
    postsControlleres.findPostById(id)
        .then(data => res.status(200).json(data))
        .catch(err => res.status(404).json({ message: err.message }))
}

const postPost = (req, res) => {
    const { content, userName, isPublished } = req.body

    if (content && userName && isPublished) {
        postsControlleres.createPost({ content, userName, isPublished })
            .then(data => res.status(200).json(data))
            .catch(err => res.status(400).json({ message: err.message }))
    } else {
        res.status(400).json({
            message: 'All fields must be completed',
            fields: {
                content: 'text',
                userName: 'string',
                isPublished: 'boolean'
            }
        })
    }
}

const patchPost = (req, res) => {
    const id = req.params.id
    const { content, userName, isPublished } = req.body

    postsControlleres.updatePost(id, { content, userName, isPublished })
        .then(data => {
            if (data[0]) {
                res.status(200).json({ message: `User with id: ${id}, edited succesfull` })
            } else {
                res.status(400).json({ message: 'Invalid ID' })
            }
        })
        .catch(err => res.status(404).json({ message: err.message }))
}

const deletePost = (req, res) => {
    const id = req.params.id

    postsControlleres.deletePost(id)
        .then(data => {
            if (data) {
                res.status(404).json()
            } else {
                res.status(400).json({ message: 'Invalid ID' })
            }
        })
        .catch(err => res.status(400).json({ message: err.message }))
}

module.exports = {
    getAllPosts,
    getPostById,
    postPost,
    patchPost,
    deletePost,
}