const express = require("express")
const mongoose = require("mongoose")
const dotenv=require("dotenv");
const app = express();

const bodyParser = require('body-parser');

// Adjust the limit option according to your requirements
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));

const cors= require("cors");
app.use(cors());

app.use(express.json());

const router=require("./routes/AdminRouter")
dotenv.config()
app.use(router)

mongoose.connect("mongodb://127.0.0.1:27017/ASFASHION",)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error(err))

const PORT = process.env.PORT || 5000;


app.listen (PORT , ()=>{
    console.log(`Server is running in ${PORT}`);
})