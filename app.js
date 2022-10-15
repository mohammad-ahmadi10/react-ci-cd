const express = require('express');
const App = express();
const path = require("path");
const cors = require("cors");

App.use(cors())
App.use(express.json())
App.use(express.static(path.join(__dirname , 'frontend/build')))

const PORT = process.env.PORT | 5000;

App.get('/names', async(req , res) =>{
    res.send("Mohammad ahmadi you are the one");
})
App.post("/hello", (req , res) =>{
    const {foreignName} = req.body;
    res.json(`hi ${foreignName}`);

});
App.listen(PORT , ()=>{
    console.log(`LISTENING ON PORT ${PORT}`)
})