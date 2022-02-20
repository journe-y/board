const express = require('express');
const User = require('../models/user');

const router = express.Router();

router.post('/register', async (req, res, next) => {
    const { userid, userpw } = req.body;
    const exUser = await User.findOne({ where: { userid } });
    if(!userid && !userpw){
        return res.status(400).json({msg:'입력값을 확인 해주세요'});
    }
    if (exUser) {
        console.log('중복된아이디');
        return res.status(400).json({msg:'중복된 아이디 입니다'});
    }
    await User.create({
        userid: req.body.userid,
        userpw: req.body.userpw
    });
    return res.status(200).json({ userid, userpw, check:true });
});

router.post('/login', async (req, res, next) => {

});

module.exports = router;