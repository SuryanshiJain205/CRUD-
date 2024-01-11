const express=require('express');
const bodyParser=require('body-parser');
const routes = require('./routes/books');
const cors = require('cors');

var app=express();
const PORT =5000;
app.use(cors());

app.use(bodyParser.json());
app.use(routes);



app.listen(PORT,()=>{
    console.log(`Server is running on port : http://localhost:${PORT}`)
})