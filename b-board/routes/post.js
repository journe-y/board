const express = require('express');
require("dotenv").config();
const Post = require('../models/post');
const { verifyToken } = require('./middlewares');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const { getNow } = require('../util/dateFormatter');
const router = express.Router();
const path = require('path');



router.post('/write', verifyToken, (req, res, next) => {
    res.json({});
});

router.post('/create', verifyToken, async (req, res, next) => {
    const { title, contents, category } = req.body;
    await Post.create({ title, contents, date: getNow(), category, userid: req.decoded['id'] })
    res.json({});
})

const upload = multer({
    storage: multer.diskStorage({
        destination(req, file, done) {
            done(null, 'public/uploads/');
        },
        filename(req, file, done) {
            const ext = path.extname(file.originalname);
            done(null, path.basename(file.originalname, ext) + Date.now() + ext);
        },
    }),
});

router.post('/upload', upload.single('img'), (req, res, next) => {
    const url = `http://localhost:3001/uploads/${req.file.filename}`;
    res.json({ url });
})

router.get('/list', async (req, res) => {
    const posts = await Post.findAll({
        attributes: ['id', 'title', 'category', 'date', 'imgpath', 'userid']
    });
    res.json({ posts })
})

// router.get('/list:category', (req, res) => {
//     console.log('=====================',category);
//     res.json({})
// })

router.get('/read/:id', async (req, res) => {
    const post = await Post.findOne({ where: { id: req.params.id } })
    res.json({ post })
})

module.exports = router;
