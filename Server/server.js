import express from 'express';
 

const app=express();
const port=3000;

app.get("/",(req,res)=>{
    res.send("hello raja");
});

app.listen(port,()=>{
    console.log(`listening to the port ${port}`)
 })