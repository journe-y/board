require('dotenv').config();
import * as dotenv from 'dotenv';
dotenv.config();

const config = {
    development: {
        username: process.env.DBUSERNAME || 'root',
        password: process.env.DBPASSWORD,
        database: process.env.DBDBNAME || 'board',
        host: process.env.DBHOST || '127.0.0.1',
        port: process.env.DBPORT || 3306,
        dialect: "mysql"
    }
}

export default config;