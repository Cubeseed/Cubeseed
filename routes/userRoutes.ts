const express = require('express')
const router = express.Router()
import { UserInstance } from '../src/model/User';
import {Request, Response} from 'express'


// POST creating User
router.post('/create', async (req:Request, res:Response) =>{
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