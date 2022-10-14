const express = require('express');
const App = express();
const path = require("path");

App.use(express.static(path.join(__dirname , 'frontend/build')))

const PORT = process.env.PORT | 8000;

App.get('/names', async(req , res) =>{
    res.send("Mohammad ahmadi you are the one");
})

App.listen(PORT , ()=>{
    console.log(`LISTENING ON PORT ${PORT}`)
})