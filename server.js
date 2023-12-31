const app = require("express")();


app.get("/",(req,res)=>{
    res.status(200).send("Hello World!")
})

app.get("/user", (req,res)=>{
    res.status(201).json({
        username : "Aziz",
        role : "Admin"
    })
})


module.exports = app;







