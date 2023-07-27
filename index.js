const express=require('express');
const app=express();
app.get("/",function(req,res)
{
    res.send("hello");
})
app.listen(3001,function(req,res)
{
    console.log("server running at port 3001");
});