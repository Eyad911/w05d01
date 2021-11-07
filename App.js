const { query } = require("express");
const express = require("express")


const app = express();
const port = 5000;

app.use(express.json());

const toDos =[
    {  
         id:1,
        task:"sleep",
        isComple:false
    },
    {  
        id:2,
       task:"code",
       isComple:false
   },
   {  
    id:3,
   task:"play",
   isComple:false
   },
   {  
    id:4,
   task:"study",
   isComple:false
   }
]


app.get("/todos",(req,res)=>{
    res.status(200);
    res.json(toDos);
})


app.post("/creat",(req,res)=>{
const {id,task,isComple}= req.body


toDos.push({id,task,isComple})

res.status(201);
res.json(toDos);
})

app.delete("/del/:id",(req,res)=>{
    const { id } = req.params;

    // const fIndex = toDos.findIndex(p => p.id === id);

    toDos.splice(id-1,1)
    res.status(200);
    res.json(toDos);
})

app.put("/change/:id",(req,res)=>{
    const { id } = req.params;

    // const fIndex = toDos.findIndex(p => p.id === id);

    toDos.splice(id-1,1,{id,task:"update1",isComple:true})
    
    res.status(200);
    res.json(toDos);


})




app.listen(port,()=>{
    console.log(port);
})