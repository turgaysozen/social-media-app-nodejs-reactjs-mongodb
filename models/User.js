const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        min: 3,
        max: 20,
        unique: true
    },
    email: {
        type: String,
        require: true,
        max: 50,
    },
    password: {
        type: String,
        require: true,
        min: 6
    },
    profilePicture: {
        type: String,
        default: ""
    },
    coverPicture: {
        type: String,
        default: ""
    },
    followers: {
        type: Array,
        default: []
    },
    followings: {
        type: Array,
        default: []
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    description: {
        type: String,
        max: 100
    },
    city: {
        type: String
    },
    from: {
        type: String,
        max: 10
    },
    relation: {
        type: Number,
        enum: [1, 2, 3]
    }
}, { timestamps: true })

module.exports = mongoose.model('User', UserSchema)
