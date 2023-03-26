const { Router } = require('express');
const router = Router();
const Books = require('../models/Books');

router.get('/',async (req, res)=>{
    const list_Books = await Books.find();
    res.status(200).json(
        list_Books
    );
})

router.post('/', async (req, res) =>{
    // console.log('Request: \n',req.body);
    const {tittle, author, isbn } = req.body;
    const newBook = new Books({tittle, author, isbn});
    // console.log('Nuevo Libro: \n',newBook);
    await newBook.save();
    res.status(200).json(
     {
        message:'Received - Book Saved'
     }
    );
})

router.delete('/:id', async (req, res) =>{
    console.log('Request Book ID: \n',req.params.id);
    const idBook = req.params.id;
    await Books.findByIdAndDelete(idBook)
    res.status(200).json(
      {
        message:`Received BookID {${idBook}} - Book Physical Delete`
      }
    );
})


module.exports = router;