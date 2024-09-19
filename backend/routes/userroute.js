const {Router} = require("express");
const jwt = require("jsonwebtoken");
const JWTPass = "Jatatavigalajwalalpravahpavitasthalegalevalabyalambitambhujangtungmalikam"

Router.post("/signup", (req, res)=>{
    const name = req.headers.name;
    const password = req.headers.password;

    // logic to check if database has any such username or handeling duplicate username error from database

    res.status(200).json({msg : "New user created with name "+ name});
})

Router.post("/signin", (req, res)=>{
    const name = req.headers.name;
    const password = req.headers.password;

    // authenticating name and password from the database;
    // if authenticated proceed furthur;

    const token = jwt.sign(name , JWTPass);
    req.status(200).json({token});
})



module.exports = {Router}