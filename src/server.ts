import express , {Request, Response}from 'express';
import db from './config/database.config'
import crypto from 'crypto'
import prodRouter from '../routes/productRoutes'
import { UserInstance } from './model/User';
import { ProductInstance } from './model/Product';

db.sync().then(() =>{
    console.log('Successly connect to DB')
});

const app = express();
const port = 8080;

app.use(express.json());

// using product routes
app.use('/product', prodRouter)



app.listen(port, ()=>{
    console.log('hello from ' + port)
})