// const { Image } = require('antd');
const express = require('express');
const asyncHandler=require('express-async-handler')
const formidable = require('formidable');
const Additem = require('../models/AdditemModel');

const fs =require('fs')

const itemdata=asyncHandler(async(req,res)=>{
    const form=new formidable.IncomingForm();
    form.parse(req,(err,fields,image)=>{
     console.log (fields)
     console.log(image)
    if(fields){
        const{name,description,category,price}=fields
        if(!name || !description || !category || !price){
            return res.status(400).json({
                error:"Fill all the fields"
            })
        }
        const item=new Additem(fields)
    }
    if(file.image){
        if(file.image,size>300000){
            return res.status(400).json({
                error:'Image Size is too Long'
            })
        }
        item.image.data-fs.readFileSync(file.image.path)
        Additem.image.contentType-file.image.type

        item.save((err,item)=>{
            if(err){
                return res.status(400).json({
                    error:'Not Save in Data Base'
                })
            }
            return res.json(item)
        })
    }

  })
})

module.exports={itemdata}