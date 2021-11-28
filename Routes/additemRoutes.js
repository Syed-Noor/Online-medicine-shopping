const express=require('express');
const router=express.Router();
const multer=require('multer')
const itemdata =require('../controllers/additemsController')

// //route for additems
// app.post('/AddItems',itemdata)
router.route('/AddItems',itemdata)

const storage=multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,'../public/images/uploads');
    },
    filename:(req,file,callback)=>{
        callback(null,file.originalimage)
    }
});
const upload=multer({storage:storage})
router.get('/',(req,res)=>{
    itemsdata.find()
    .then((image)=>res.json(image))
    .catch((err)=>res.status(400).json(`Error:${err}`));
})

//Request to add new items
router.post('/add',upload.single('image'),(req,res)=>{
    const newItems= new AddItems({
        Name:req.body.Name,
        image:req.item.originalimage,
        description:req.body.description,
        category:req.body.category,
        price:req.body.price,
    });
    newItems
    .save()
    .then(()=>res.json('New Product Posted!'))
    .catch((err)=>res.status(400).json(`Error:${err}`));

});
//request Item by id
router.get('/:id',(req,res)=>{
    AddItems.findById(req.params.id)
    .then((addItems)=>res.json(addItems))
    .catch((err)=>res.status(400).json(`Error:${err}`))
})

//request find items by id and update
router.put('/update/:id',upload.single('Product Name'),(req,res)=>{
    Additems.findById(req.params.id)
    .then((additems)=>{
        additems.Name=req.body.Name
        additems.description=req.body.description
        additems.price=req.body.price
        additems.category=req.body.category
        additems.image=req.item.originalimage

    })
    items
    .save()
    .then(()=>res.json('Product updated!'))
    .catch((err)=>res.status(400).json(`Error:${err}`));

}
)