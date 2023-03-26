const { Schema, model } = require('mongoose');

const BookScehma = new Schema({
    tittle:{type: String, required: true},
    author:{type: String, required: true},
    isbn:{type: String, required: true},
    state:{type:String, default: true, required: true},
    imagePath:{type: String},
    create_at:{ type: Date, default:Date.now }
});

module.exports = model('Book', BookScehma);

