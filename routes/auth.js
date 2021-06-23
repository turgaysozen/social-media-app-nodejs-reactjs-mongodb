const router = require('express').Router()
const User = require('../models/User')
const bcrypt = require('bcrypt');

// register user
router.post("/register", async (req, res) => {
    try {
        // hashs password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(req.body.password, salt)

        const user = await new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
            isAdmin: req.body.isAdmin
        })

        await user.save()
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json("something went wrong!!")
    }
})

// login user
router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email })
        !user && res.status(404).json("user not found")

        const validPassword = await bcrypt.compare(req.body.password, user.password)
        !validPassword && res.status(400).json("wrong password")

        res.status(200).json(user)
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router