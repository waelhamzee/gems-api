const express = require("express");
const router = new express.Router();
const bcrypt = require("bcryptjs");
const User = require("../models/user");

router.post('/login', async (req,res) => {
    const {username, password} = req.body 
    try {
        const user = await User.findByCredentials(username, password)
        const token = await user.generateAuthToken()
        res.send({ user, token })
    } catch (e) {
        res.send({status : 0})
    }
})

router.post('/createuser', async (req,res) => {
    let user = new User(req.body)
    if (user) {
        await user.save()
        res.status(200).send()
    } else {
        res.status(400).send()
    }
})

module.exports = router;
