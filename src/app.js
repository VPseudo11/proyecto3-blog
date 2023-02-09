const express = require('express')
const { port } = require('./config')
const db = require('./utils/database')
const postsRouter = require('./posts/posts.router')

const app = express()
app.use(express.json())

db.authenticate()
    .then(() => console.log('DB autentication successfully'))
    .catch((err) => console.log(err))

db.sync()
    .then(() => console.log('DB synced'))
    .catch((err) => console.log(err))

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'OK',
        endpoint: `localhost:${port}/api/v1/`
    })
})

app.use('/api/v1/posts', postsRouter)

app.listen(port, () => console.log('Succes 😼😼😼 ' + port))

module.exports = app
