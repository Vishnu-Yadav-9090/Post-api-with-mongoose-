require("./config");
const datas = require("./datas")
const mongoose = require('mongoose');
const express = require("express");
const app = express();

app.use(express.json());

app.post("/",(req,resp)=>{
    let save_data = new datas(req.body);
    let result = save_data.save();
    console.log(req.body);
    console.log(save_data);
    resp.send('all okk');
});

app.listen(4500);
