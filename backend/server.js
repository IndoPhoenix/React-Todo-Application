const express = require("express");
const app = express();
const route = require("./routes/userroute");

app.use("/" , route);
const PORT = 3000;
app.listen(PORT, ()=>{`listening at port number ${PORT}`});
