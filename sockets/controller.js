const socketController = (socket) =>{//conexion al cliente
    console.log('Cliente conectado', socket.id);

    socket.on('disconnect',()=>{
        console.log('Cliente desconectado',  socket.id);
    })


    //listener para escuchar los mensajes emitidos por el cliente
    socket.on('enviar-mensaje',( payload, callback)=>{//el argumento del payload el mensaje del cliente, el callback es el tercer argumento del cliente
      
        const id = 123456;
        // callback({id, fecha: new Date().getTime()});
        callback(id);

        //Enviar mensaje a todos lo clientes conectados desde el servidor
        // this.io.emit('enviar-mensaje', payload)
        socket.broadcast.emit('enviar-mensaje', payload); //con socket tambien podemos emitir sin necesidad de io

        


    });

   }

module.exports = {
    socketController
}