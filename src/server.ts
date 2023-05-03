import express , {Request, Response}from 'express';
import db from './config/database.config'
import crypto from 'crypto'
import { v4 as uuidv4 } from 'uuid';
import { UserInstance } from './model';

db.sync().then(() =>{
    console.log('Successly connect to DB')
});

const app = express();
const port = 8080;

app.use(express.json());

// POST creating User
app.post('/create', async (req, res) =>{
    // givin the id through UUID
    const id = crypto.randomUUID;
    //err catch:
    try{
        
    const record = UserInstance.create({ ...req.body, id});
    return res.json({record, msg: "successfully create user"})
    }catch (e) {
        return res.json({msg: 'fail'})
    }
  

})

// app.get("/get", (req, res) =>{
//     console.log(req.body)
//     return res.send(' ')
// })

app.listen(port, ()=>{
    console.log('hello from ' + port)
})