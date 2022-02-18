import express, { Request, Response, NextFunction } from 'express';
import morgan from "morgan";
import path from 'path';
const { sequelize } = require('./models');
// import indexRouter from './routes';
// import usersRouter from './routes/users';

const app: express.Application = express();

app.set('port', process.env.PORT || 3001);
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

sequelize.sync({ force: false })
    .then(() => {
        console.log('데이터베이스 연결 성공');
    })
    .catch((err: Error) => {
        console.error(err);
    });

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기 중');
});

app.get('/', (req: Request, res: Response) => {
    res.status(201);
    res.send({ name: 'jiwon' })
});

interface ErrorStatus extends Error {
    status?: number;
}

app.use((req: Request, res: Response, next: NextFunction) => {
    const error: ErrorStatus = new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
    error.status = 404;
    next(error);
});

app.use((err: ErrorStatus, req: Request, res: Response, next: NextFunction) => {
    res.locals.message = err.message;
    res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
    res.status(err.status || 500);
    res.render('error');
});

