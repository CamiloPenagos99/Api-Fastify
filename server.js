const fastify = require ('fastify') ({logger:true});

fastify.register(require('fastify-swagger'),
    {
    exposeRoute: true,
    routePrefix: '/docs',
    swagger: {
        info: 
        {
        title: 'Fastify Api ',
        description: "Apri Crud, Fastify"}
          }
    },
    
 )
;

fastify.register(require('./routes/item_route')) //registrar plugin 
//


//

//abrir server
async function start(){
    await fastify.listen('3000')
}

//iniciar server
start().catch(err=>{
    fastify.log.error(err)
    process.exit(1)
})