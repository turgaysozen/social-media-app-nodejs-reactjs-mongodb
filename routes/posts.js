const router = require('express').Router()
const Post = require('../models/Post')
const User = require('../models/User')

// get all posts
router.get('/', async (req, res) => {
    const posts = await Post.find()
    res.status(200).json(posts)
})

// get single post
router.get('/:id', async (req, res) => {
    const post = await Post.findById(req.params.id)
    res.status(200).json(post)
})

// add a post
router.post('/', async (req, res) => {
    const newPost = new Post(req.body)
    try {
        const savedPost = await newPost.save()
        res.status(201).json(savedPost)
    } catch (error) {
        res.status(500).json(error)
    }
})

// update a post
router.put('/:id', async (req, res) => {
    const post = await Post.findById(req.params.id)
    if (req.body.userId === post.userId) {
        try {
            await post.updateOne({ $set: req.body })
            res.status(201).json('Post updated')
        } catch (error) {
            res.status(500).json(error)
        }
    } else {
        res.status(403).json('you can only update ypur own post')
    }
})

// delete a post
router.delete('/:id', async (req, res) => {
    const post = await Post.findById(req.params.id)
    try {
        post.deleteOne()
        res.status(201).json('post deleted')
    } catch (error) {
        res.status(500).json(error)
    }
})

// like-dislike post
router.put('/:id/like', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        if (!post.likes.includes(req.body.userId)) {
            await post.updateOne({ $push: { likes: req.body.userId } })
            res.status(201).json('You have been liked this post')
        } else {
            await post.updateOne({ $pull: { likes: req.body.userId } })
            res.status(201).json('You have been disliked this post')
        }
    } catch (error) {
        res.status(500).json(error)
    }
})

// timeline posts
router.get('/timeline/:userId', async (req, res) => {
    try {
        const currentUser = await User.findById(req.params.userId)
        const userPosts = await Post.find({ userId: currentUser._id })
        const friendPosts = await Promise.all(
            currentUser.followings.map((friendId) => {
                return Post.find({ userId: friendId })
            })
        )
        res.status(200).json(userPosts.concat(...friendPosts))
    } catch (error) {
        res.status(500).json(error)
    }
})

router.get('/profile/:username', async (req, res) => {
    try {
        const user = await User.findOne({ username: req.params.username })
        const posts = await Post.find({ userId: user._id })
        res.status(200).json(posts)
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router