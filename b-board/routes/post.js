const express = require('express');
require("dotenv").config();
const Post = require('../models/post');
const { verifyToken } = require('./middlewares');
const jwt = require('jsonwebtoken');
const { getNow } = require('../util/dateFormatter');
const router = express.Router();

router.post('/write', verifyToken, (req, res, next) => {
    res.json({});
});

router.post('/create', verifyToken, async (req, res, next) => {
    const { title, contents, category } = req.body;
    await Post.create({ title, contents, date: getNow(), category, userid: req.decoded['id'] })
    res.json({});
})

module.exports = router;
