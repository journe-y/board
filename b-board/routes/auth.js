const express = require('express');
const User = require('../models/user');

const router = express.Router();

router.post('/register', async (req, res, next) => {
    const { userid, userpw } = req.body;
    const exUser = await User.findOne({ where: { userid } });
    if (exUser) {
        console.log('중복된아이디');
        return;
    }
    await User.create({
        userid: req.body.userid,
        userpw: req.body.userpw
    })
});

router.post('/login', async (req, res, next) => {

});

module.exports = router;