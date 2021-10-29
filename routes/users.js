const router = require('express').Router()
const User = require('../models/User')
const bcrypt = require('bcrypt');

// all users
// router.get("/", async (req, res) => {
//     const allUsers = await User.find()
//     res.status(200).json(allUsers)
// })

// get user by userId
router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json(error)
    }
})

// get user
router.get("/", async (req, res) => {
    const username = req.query.username
    const userId = req.query.userId
    try {
        const user = userId
            ? await User.findById(userId)
            : await User.findOne({ username: username })
        const { password, ...rest } = user._doc
        res.status(200).json(rest)
    } catch (error) {
        res.status(400).json({ "message": "user could not found" })
    }
})

// update user
router.put('/:id', async (req, res) => {
    if (req.body.userId === req.params.id || req.user.isAdmin) {
        if (req.body.password) {
            try {
                const salt = await bcrypt.genSalt(10)
                req.body.password = await bcrypt.hash(req.body.password, salt)
            } catch (error) {
                res.status(500).json(error)
            }
        }
        try {
            await User.findByIdAndUpdate(req.params.id, { $set: req.body })
            res.status(200).json("Account has been updated")
        } catch (error) {
            res.status(500).json(error)
        }
    }
    else {
        res.status(403).json("you don't have permission to update someone's information")
    }
})

// delete user
router.delete('/:id', async (req, res) => {
    if (req.body.userId === req.params.id || req.user.isAdmin) {
        try {
            const user = await User.findOne({ _id: req.params.id })
            if (user !== null) {
                await User.findByIdAndDelete({ _id: req.params.id })
                res.status(200).json("Account has been deleted")
            } else res.status(404).json("this user never exist")
        } catch (error) {
            res.status(500).json(error)
        }
    }
    else {
        res.status(404).json("you don't have permission to delete someone's information")
    }
})

// follow user
router.put('/:id/follow', async (req, res) => {
    if (req.params.id !== req.body.userId) {
        try {
            const user = await User.findById(req.params.id)
            const currentUser = await User.findById(req.body.userId)
            if (!user.followers.includes(req.body.userId)) {
                await user.updateOne({ $push: { followers: req.body.userId } })
                await currentUser.updateOne({ $push: { followings: req.params.id } })
                res.status(201).json("you have been followed this user")
            } else res.status(403).json("you already follow this user")
        } catch (error) {
            res.status(403).json("you can't follow yourself")
        }
    }
})
// unfollow user
router.put('/:id/unfollow', async (req, res) => {
    if (req.params.id !== req.body.userId) {
        try {
            const user = await User.findById(req.params.id)
            const currentUser = await User.findById(req.body.userId)
            if (user.followers.includes(req.body.userId)) {
                await user.updateOne({ $pull: { followers: req.body.userId } })
                await currentUser.updateOne({ $pull: { followings: req.params.id } })
                res.status(201).json("you have been unfollowed this user")
            } else res.status(403).json("you already don't follow this user")
        } catch (error) {
            res.status(403).json("you can't unfollow yourself")
        }
    }
})

module.exports = router