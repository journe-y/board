const express = require('express');
require("dotenv").config();
const User = require('../models/user');
const { verifyToken, newToken } = require('./middlewares');
const jwt = require('jsonwebtoken');
const router = express.Router();



router.post('/register', async (req, res, next) => {
    const { userid, userpw } = req.body;
    if (!userid && !userpw) {
        return res.status(400).json({ msg: '입력값을 확인 해주세요' });
    }
    const exUser = await User.findOne({ where: { userid } });
    if (exUser) {
        return res.status(400).json({ msg: '중복된 아이디 입니다' });
    }
    await User.create({
        userid: req.body.userid,
        userpw: req.body.userpw
    });
    return res.status(200).json({ userid, userpw, check: true });
});

router.post('/login', async (req, res, next) => {
    const { userid, userpw } = req.body;
    if (!userid && !userpw) {
        return res.status(400).json({ msg: '입력값을 확인 해주세요' });
    }
    const user = await User.findOne({ where: { userid, userpw } });
    if (!user) {
        return res.status(400).json({ msg: '아이디 또는 비밀번호가 일치하지 않습니다' });
    }
    let result = await newToken(userid);
    result.msg = "로그인성공"
    return res.status(200).json(result);
});

module.exports = router;