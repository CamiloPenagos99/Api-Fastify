const itemsData = require('../item')

// Item schema
const Item = {
  type: 'object',
  properties: {
    _id: { type: 'string' },
    tipo: { type: 'string' },
    // etc.
    }
  }

//options for get all items
const getItemsOpts = {
  schema: {
    response: {
      200: {
        type: 'array',
        items: { Item }
      }
    }
  },
  //handler: listUsers,
};

const uniqueItemOpt = {
    schema: {
        response:{
            200:Item 
        }
    }
}



function itemRoutes(fastify,options,done){

    //crear ruta principal
fastify.get('/items',getItemsOpts,(req, reply)=>{
    reply.send(itemsData);
})

//ruta para obtener item especifico
fastify.get('/items/:id',uniqueItemOpt,(request, reply)=>{

    const {id}=request.params
    const item = itemsData.find(item => item._id == id); //buscar en el array de items, por ID

    reply.code(200).send(item);
})

done();
}

module.exports = itemRoutes;