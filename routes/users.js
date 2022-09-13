// const express = require('express');
import express from 'express'

const router = express.Router();

const users = [
    {
        firstName:"Vikas",
        lastName:"Rai",
        age:22
    },
    {
        firstName:"Sunder",
        lastName:"Pichai",
        age:39
    },
    {
        firstName:"Steve",
        lastName:"Jobs",
        age:56
    }
]
router.get('/',(req,res)=>{
    res.send(users);
})

export default router;