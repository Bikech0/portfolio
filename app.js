require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

mongoose.set('strictQuery', true);


mongoose.connect("mongodb+srv://" + process.env.DB_USER + ":" + process.env.DB_PWD + "@cluster0.emfgcff.mongodb.net/?retryWrites=true&w=majority");


const formSchema = {
    "Name": String,
    "Email": String,
    "Message": String
}


const Form = mongoose.model("Form", formSchema);


const app = express();
const port = 3000 || process.env.PORT
app.use(express.static(__dirname));
app.set("view engine", "ejs");

app.use(express.json());



app.get("/", (req, res)=>{
    res.render("index")
})


app.post("/contact", (req, res)=>{
    const name = req.body.Name;
    const email = req.body.Email;
    const message = req.body.Message;
    const form = new Form({"Name": name, "Email": email, "Message": message});
    form.save();
    res.render("index");
})


app.listen(port, ()=>{
    console.log("[+] Server running on port " + port);
})
