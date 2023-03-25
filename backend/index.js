const express = require('express');

// Initializations
const app = express();

// settings
app.set('port',3000);

// star server
app.listen(app.get('port'), ()=>{
    console.log('Server On Port', app.get('port'));
})