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
    "cert_url": String,
    "rank": Number
}

const work = {
    "img_src": String,
    "title": String,
    "desc": String,
    "link": String
}

const services = {
    "icon": String,
    "name": String,
    "desc": String
}

const books = {
    "title": String,
    "link": String,
    "type": String
}

const whoami = {
    "intro": String
}

const contact = {
    "mail": String,
    "phone": String,
    "fb": String,
    "li": String,
    "gh": String,
}

const education = {
    "diplome": String,
    "description": String,
    "etab": String
}

const cp_comp = {
    "host": String,
    "rank": String
}

const ds_comp = {
    "host": String,
    "rank": String
}

const ctf_comp = {
    "host": String,
    "rank": String
}

const ps_profiles = {
    "host": String,
    "link": String
}





module.exports = {
    whoami,
    formSchema,
    skills,
    volunWork,
    certs,
    work,
    services,
    books,
    contact,
    education,
    cp_comp,
    ds_comp,
    ctf_comp,
    ps_profiles
}