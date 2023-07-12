const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const route = require("./Index.js/index");

const app = express();

const port = 5500;
const hostname = "localhost";
const Atlasdata = "mongodb+srv://todoproj1:GDHhEM00kO9cslAT@cluster0.xgrxgj7.mongodb.net/todoproj2?retryWrites=true&w=majority"

// project name: todoproj
// username: todoproj1
// password: GDHhEM00kO9cslAT
// link: "mongodb+srv://todoproj1:<password>@cluster0.xgrxgj7.mongodb.net/?retryWrites=true&w=majority"
// database name: todoproj2
// collection name: todolist

app.use(bodyParser.json());
app.use(cors())
app.use(express.json())
app.use("/", route);

mongoose.connect(Atlasdata, {useNewUrlParser:true, useUnifiedTopology:true})
.then(response=>{
    app.listen(port, hostname, ()=>{
        console.log(`Server is connected at ${hostname}:${port}`)
    })
})
.catch(err=>console.log(err))


