const express=require("express");
// const {body}
const {randomBytes}= require("crypto")
const bodyParser=require("body-parser")

const app=express();
app.use(bodyParser.json())
commentList={};
commentsByPostId={}
app.get("/posts/:id/comments",(req,res)=>{  
   
    res.send(commentsByPostId[req.params.id]||[]);
})

app.post("/posts/:id/comments",(req,res)=>{
    const commenntId=randomBytes(4).toString("hex")
    const {content}=req.body
    const comments=commentsByPostId[req.params.id]||[];
    comments.push({id:commenntId,content})
    commentsByPostId[req.params.id]=comments 
    console.log({id:commenntId,content})

    res.status(201).send(commentsByPostId[req.params.id])
    // res.status(201).send("commentsByPostId[id]")
    
})
app.listen(4001,()=>console.log("listening to port 4001")) 