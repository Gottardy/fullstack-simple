const { Router } = require('express');
const router = Router();
const Books = require('../models/Books');

router.get('/',async (req, res)=>{
    const list_Books = await Books.find();
    res.json({
        list_Books
    })
})



module.exports = router;