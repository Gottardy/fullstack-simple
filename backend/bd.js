const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_DB_ATLAS)
    .then(db => console.log('DataBase Is Connected'))
    .catch( err => console.log(err))