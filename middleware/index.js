

const express = require("express")
const fs = require("fs")

const app = express()
const moviesRouter= express.Router()
const productrouter = express.Router()
app.use(express.json())

app.use((req,res,next)=>{
    if(req.body.id &&
       typeof(req.body.id)==="number"
        && req.body.name && 
        typeof(req.body.name)==="string"
         && req.body.description 
         && typeof(req.body.description)==="string"
        && req.body.cast && Array.isArray(req.body.cast)
     

    
         ){
      next()
    }
    else{
      res.send("404")
    }

})


app.post("/addmovies",(req,res)=>{
    res.send("Added the movies")
    })
app.listen(4503,()=>{
     console.log("server is running")
})
// ID: number
// Name: string
// Rating: number
// Description: string
// Genre: string
// Cast: string[]