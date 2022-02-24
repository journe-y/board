const express = require('express')
require("dotenv").config();
const fs = require('fs');
const morgan = require('morgan')
const path = require('path')
const { sequelize } = require('./models');
const authRouter = require('./routes/auth');
const postRouter = require('./routes/post');
const jwt = require('jsonwebtoken')
const app = express();
const { refreshToken } = require('./routes/middlewares');

app.set('port', process.env.PORT || 3001);
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.json());
app.set('view engine', 'vue');

sequelize.sync({ force: false })
    .then(() => {
        console.log('데이터베이스 연결 성공');
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
    res.status(err.status || 500);
    res.json({ msg: 'error' })
});

