const { getAllItems, getUniqueItem, addItem } = require('../handlers/item_handler');

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
  handler: getAllItems
};

const uniqueItemOpt = {
    schema: {
        response:{
            200:Item 
        }
    },
    handler: getUniqueItem
}

//post options
const postItemOpt = {
  schema: {
    body:{
      type: 'object',
      required: ['tipo'],
      properties:{
        tipo: { type: 'string'}
      }

    },
    response:{
        201:Item 
    }
},
  handler: addItem

};

function itemRoutes(fastify,options,done){

    //crear ruta principal
fastify.get('/items',getItemsOpts)

//ruta para obtener item especifico
fastify.get('/items/:id',uniqueItemOpt)

//endpoint para agregar

fastify.post('/items', postItemOpt)

done();
}

module.exports = itemRoutes;