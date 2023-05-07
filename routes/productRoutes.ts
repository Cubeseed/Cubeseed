const express = require('express')
const router = express.Router()
import { ProductInstance } from '../src/model/Product';
import {Request, Response} from 'express'

router.post('/new',async (req:Request, res:Response) => {

    try{
        const prodRec = await ProductInstance.create({ ... req.body})
        return res.json({prodRec, msg: "successfully create"})
    }catch (e){
        return res.json({msg: 'fail on creating product'})
    }
    
})


export default router;