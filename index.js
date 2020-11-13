const express = require('express')
const app = express();
const mongoose = require('mongoose');

const bodyParser = require('body-parser');
const userRoute = require('./routes/userroutes');
const PORT = process.env.PORT || 3000
const mongo_URL = 'mongodb+srv://bookdatabase:database@cluster0.xxbxq.mongodb.net/bookDatabase?retryWrites=true&w=majority';
mongoose.connect(mongo_URL);

app.use(bodyParser.json());
app.use('/',userRoute);

app.listen(PORT,()=>{
    console.log(`Server is listening in port ${PORT}`);
})