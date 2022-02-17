import express, { Request, Response, NextFunction } from 'express';
import morgan from "morgan";
import path from 'path';
// import indexRouter from './routes';
// import usersRouter from './routes/users';
import { sequelize } from './models'
import config from "./config/config";

const app: express.Application = express();

app.set('port', process.env.PORT || 3001);
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

console.log(`==========${config.development.password}===========`);
console.log(`==========${config.development.username}===========`);
console.log(`==========${config.development.database}===========`);
console.log(`==========${JSON.stringify(config.development)}===========`);
//db connect
sequelize.sync({ force: false })
    .then(() => {
        console.log('데이터베이스 연결 성공');
    })
    .catch((err) => {
        console.error(err);
    });

//api error router

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기 중');
});