// console.log("object")
const express = require("express");
const PORT=2020;
const app = express();
// Middleware
app.use(express.json())

// Default
app.get("/",(req,res)=>{
    res.status(200).json({
        message: "Server up and running",
    })
});

//Connect to Database


app.listen(PORT,()=>{
    console.log(`Server on PORT ${PORT} `);
});