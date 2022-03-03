const express = require('express');
require("dotenv").config();
const Post = require('../models/post');
const { verifyToken } = require('./middlewares');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const { getNow } = require('../util/dateFormatter');
const router = express.Router();
const path = require('path');
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

router.post('/write', verifyToken, (req, res, next) => {
    res.json({});
});


router.post('/create', verifyToken, async (req, res, next) => {
    const { title, contents, category, imgpath } = req.body;
    await Post.create({ title, contents, date: getNow(), category, userid: req.decoded['id'], imgpath })
    res.json({});
})

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.KEY,
    api_secret: process.env.SECRET,
});

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'uploads',
        format: async (req, file) => 'png',
        public_id: (req, file) => {
            const ext = path.extname(file.originalname);
            return path.basename(file.originalname, ext) + Date.now() + ext;
        },
    },
});

const upload = multer({ storage: storage });

router.post('/upload', upload.single('img'), (req, res, next) => {
    const url = req.file.path;
    res.json({ url });
})

router.get('/list', async (req, res) => {
    const posts = await Post.findAll({
        attributes: ['id', 'title', 'category', 'date', 'userid', 'imgpath']
    });
    res.json({ posts })
})


router.get('/read/:id', async (req, res) => {
    const post = await Post.findOne({ where: { id: req.params.id } })
    res.json({ post })
})

router.post('/modify/:id', verifyToken, async (req, res, next) => {
    const post = await Post.findOne({ where: { id: req.params.id } })
    if (post.userid !== req.decoded.id) {
        return res.status(401).json({
            code: 401,
            msg: '본인의 글만 수정 가능합니다.',
        });
    }
    if (Object.keys(req.body).includes('contents')) {
        const { contents, title, category, imgpath } = req.body;
        await Post.update({ title, contents, category, imgpath }, { where: { id: req.params.id } });
        return res.status(200).json({
            code: 200,
            msg: '글 수정 완료',
        });
    }
    return res.json({ post });
});

router.post('/delete/:id', verifyToken, async (req, res, next) => {
    const post = await Post.findOne({ where: { id: req.params.id } })
    if (post.userid !== req.decoded.id) {
        return res.status(401).json({
            code: 401,
            msg: '본인의 글만 삭제 가능합니다.',
        });
    }
    await Post.destroy({ where: { id: req.params.id } });
    return res.json({});
})

module.exports = router;
