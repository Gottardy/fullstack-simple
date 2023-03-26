if(process.env.NODE_ENV!== `production`){
    require('dotenv').config();
    console.log(process.env.NODE_ENV);
}

const express = require('express');
const morgan = require('morgan');
const multer = require('multer');
const path = require('path');


// Initializations
const app = express();
require('./bd');

// settings
app.set('port',process.env.PORT || 3000);


// middlewares
app.use(morgan('dev'));

const storageImagen = multer.diskStorage({
    destination:path.join(__dirname,'public/uploads'),
    filename(req,file,cb){
        cb(null, new Date().getTime() + path.extname(file.originalname))
    }
})
app.use(multer({storageImagen}).single('image'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

// Routes
app.use('/api/books',require('./routes/books'));


// Static Files
app.use(express.static(path.join(__dirname,'public')));


// start server
app.listen(app.get('port'), ()=>{
    console.log('Server On Port', app.get('port'));
})