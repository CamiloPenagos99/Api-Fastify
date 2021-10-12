var data = require ('../item');

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

    if(tipo == 'contenedor'){
        
        return new Error('error de validación');
        
    }
    const item = {
        _id: Date.now(),
        tipo
    }

    data.push(item);

    reply.code(201).send(item);
}

const deleteItem = (req, reply)=>{
    const { id }=req.params

    var n = data.filter((item) => item._id != parseInt(id));
    data=n
    reply.send ({message: `Se ha eliminado el item ${id}`})
}
const updateItem = (req, reply)=>{
    var { id } = req.params;
    id = parseInt(id);
    const { tipo } = req.body;
    const n = data.map((item)=>(item._id == id ? {'_id':id, tipo} : item))
    console.log(tipo)
    data=n;
    const found = data.find(element => element._id == id);
    reply.send(found);
}
module.exports = {
    getAllItems,getUniqueItem, addItem, deleteItem, updateItem
}