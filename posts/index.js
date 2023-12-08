const express=require('express');
const {randomBytes} =require('crypto')
const bodyPaser=require('body-parser')

const app=express();
app.use(bodyPaser.json())
const postsList={};
app.get('/posts',(req,res)=>{
// return postsList;
res.send(postsList);
});
app.post('/posts',(req,res)=>{
const id= randomBytes(4).toString('hex');
const {title} = req.body;
postsList[id]={
    id,
    title
};
res.status(201).send(postsList[id]);

});

app.listen(4000,()=>{
    console.log("Listenig to 4000");
})