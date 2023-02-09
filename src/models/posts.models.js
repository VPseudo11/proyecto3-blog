const db = require('../utils/database')
const { DataTypes } = require('sequelize')

const Posts = db.define('posts', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    userName: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'user_name',
    },
    isPublished: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    }
})

module.exports = Posts