const mongoose = require("mongoose");




const formSchema = {
    "Name": String,
    "Email": String,
    "Message": String
}


const skills = {
    "span" : String,
    "desc": [String]
}

const volunWork = {
    "span": String,
    "desc": [String]
}

const certs = {
    "cert_name": String,
    "cert_url": String
}

const work = {
    "img_src": String,
    "title": String,
    "desc": String,
    "link": String
}

const services = {
    "name": String,
    "desc": String
}




module.exports = {
    formSchema,
    skills,
    volunWork,
    certs,
    work,
    services
}