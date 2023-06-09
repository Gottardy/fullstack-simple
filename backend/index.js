if(process.env.NODE_ENV!== `production`){
    require('dotenv').config();
    console.log(process.env.NODE_ENV);
}

const express = require('express');
const morgan = require('morgan');
const multer = require('multer');
const { extname, join } = require('path');

const cors = require('cors');


// Initializations
const app = express();

require('./bd');

// settings
app.set('port',process.env.PORT || 3000);


// middlewares
app.use(morgan('dev'));
const storage = multer.diskStorage({
    destination: join(__dirname, "public/uploads"),
    filename(req, file, cb) {
      cb(null, new Date().getTime() + extname(file.originalname));
    },
  });
app.use(multer({ storage }).single("image"));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/books',require('./routes/books'));


// Static Files
app.use(express.static(join(__dirname,'public')));

// uploads
app.use("/uploads", express.static(join(__dirname, "public/uploads")));

// start server
app.listen(app.get('port'), ()=>{
    console.log('Server On Port', app.get('port'));
})