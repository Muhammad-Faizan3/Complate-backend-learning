const express = require('express');
const noteModel = require("./models/note.model");
const app = express();
app.use(express.json())

// node = {titte,description} 

app.post('/nodes',async (req,res) => {
    const data = req.body
   await noteModel.create({
        tittle: data.tittle,
        description: data.description
    })

    res.status(201).json({
        message : "node create"
    })

})

app.get('/nodes', async (req,res) => {
    const node = await noteModel.find()

    res.status(200).json({
        message : "nodes facted suessesfully",
        node : node
    })
})
app.delete('/nodes/:id', async (req,res) => {
    const id = req.params.id
    await noteModel.findOneAndDelete({
        _id : id
    })
    res.status(200).json({
        message : "node delete sucessfully"
    })
})

app.patch('/nodes/:id', async (req,res) => {
    const id = req.params.id;
    const description = req.body.description;
    await noteModel.findOneAndUpdate({_id:id},{
        description:description
    })
    res.status(200).json({
        message : 'node updated successfully'
    })
})
module.exports = app