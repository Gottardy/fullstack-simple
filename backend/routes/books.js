const { Router } = require('express');
const router = Router();

router.get('/',(req, res)=>{
    res.json({
        text:'Hola mundo'
    })
})



module.exports = router;