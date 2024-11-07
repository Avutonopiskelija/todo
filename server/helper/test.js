
import fs from 'fs';
import path from 'path';
import { pool } from './db.js';
import { hash } from 'bcrypt';
import pkg from 'jsonwebtoken';
import { fileURLToPath } from 'url';
const { sign } = pkg;

//const __dirname = import.meta.dirname
const __dirname=path.dirname(fileURLToPath(import.meta.url))

const initializeTestDb = () => {
    const sql = fs.readFileSync(path.resolve(__dirname,"../todo.sql"),"utf8")
    pool.query(sql)
}

const insertTestUser =(email, password) => {
    hash(password,10, (error, hashedPassword) => {
        pool.query('insert into account (email,password) values ($1,$2)',
            [email,hashedPassword])
        })
    }

const getToken =(email) => {
    return sign({user: email},process.env.JWT_SECRET_KEY)
}

export { initializeTestDb,insertTestUser,getToken }