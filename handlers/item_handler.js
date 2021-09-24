const data = require ('../item');

const getAllItems = (req,reply)=>{
    reply.send(data)
}

const getUniqueItem  = (req,reply)=>{
    const { id }=req.params
    const item = data.find(item => item._id == id); //buscar en el array de items, por ID

    reply.code(200).send(item);
}

const addItem = (req,reply)=>{
    const { tipo } = req.body;

    const item = {
        _id: Date.now(),
        tipo
    }

    data.push(item);

    reply.code(201).send(item);
}

module.exports = {
    getAllItems,getUniqueItem, addItem
}