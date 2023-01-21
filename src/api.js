require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const serverless = require("serverless-http")

mongoose.set('strictQuery', true);


mongoose.connect("mongodb+srv://" + process.env.DB_USER + ":" + process.env.DB_PWD + "@cluster0.emfgcff.mongodb.net/?retryWrites=true&w=majority");

const schemas = require("../exports/Schemas.js");

const Form = mongoose.model("Form", schemas.formSchema);
const Skills = mongoose.model("Skills", schemas.skills);
const VolunWork = mongoose.model("VolunWork", schemas.volunWork);
const Certs = mongoose.model("Certs", schemas.certs);
const Work = mongoose.model("Work", schemas.work);
const Services = mongoose.model("Services", schemas.services);


const app = express();
const router = express.Router();

const port = 3000 || process.env.PORT
app.use(express.static(__dirname));
app.set("view engine", "ejs");

app.use(express.json());



router.get("/", (req, res)=>{
    Skills.find().then(d => {
        VolunWork.find().then(vw => {
            Certs.find().then(oc => {
                Work.find().then(wrks => {
                    Services.find().then(services => {
                        res.render("index", {skills: d, volunWork: vw, certs: oc, work: wrks, services: services});
                    })
                })
            })
        })
    });
    
})


router.post("/contact", (req, res)=>{
    const name = req.body.Name;
    const email = req.body.Email;
    const message = req.body.Message;
    const form = new Form({"Name": name, "Email": email, "Message": message});
    form.save();
    res.render("index");
})


app.use("/.netlify/functions/api", router);

module.exports.handler = serverless(app);
