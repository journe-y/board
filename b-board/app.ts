import express, { Request, Response, NextFunction } from 'express';
import morgan from "morgan";
// const morgan = require('morgan');
import path from 'path';
import sequelize from 'sequelize';
// import indexRouter from './routes';
// import usersRouter from './routes/users';
// import commentsRouter from './routes/comments';

const app: express.Application = express();

app.set('port', process.env.PORT || 3001);
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

//api error router

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기 중');
});