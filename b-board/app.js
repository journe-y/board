const express = require('express')
const morgan = require('morgan')
const path = require('path')
const { sequelize } = require('./models');
// import indexRouter from './routes';
const authRouter = require('./routes/auth');
// const cors = require('cors')
const app = express();

app.set('port', process.env.PORT || 3001);
app.use(morgan('dev'));
// app.use(cors({ origin: "http://192.168.0.202:8080/board/" }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

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

app.use((req, res, next) => {
    const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
    error.status = 404;
    next(error);
});

app.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
    res.status(err.status || 500);
    res.render('error');
});

