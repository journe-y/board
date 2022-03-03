const express = require('express')
require("dotenv").config();
const fs = require('fs');
const cors = require('cors');
const path = require('path')
const { sequelize } = require('./models');
const authRouter = require('./routes/auth');
const postRouter = require('./routes/post');
const jwt = require('jsonwebtoken')
const app = express();
const { refreshToken } = require('./routes/middlewares');

app.set('port', process.env.PORT || 3001);
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.json());
app.use(cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
});
app.set('view engine', 'vue');

sequelize.sync({ force: false })
    .then(() => {
        console.log('데이터베이스 연결 성공-!!');
    })
    .catch((err) => {
        console.error(err);
    });

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기 중');
});

app.use('/auth', authRouter);
app.use('/post', postRouter);

app.post('/refresh', refreshToken, async (req, res, next) => {
    res.status(200).json(req.data);
});

app.use((req, res, next) => {
    const error = new Error(`${req.method} ${req.url}`);
    error.status = 404;
    next(error);
});

app.use((err, req, res, next) => {
    console.log(err)
    res.locals.message = err.message;
    res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
    res.status(err.status || 404);
    res.sendFile(path.join(__dirname, "/client/index.html"));
    //res.json({ msg: 'error' })
});

