const express = require('express');
const cors = require('cors');

const {socketController}= require('../sockets/controller');




class Server {

    constructor() {

        this.app = express(); //directamente instanciamos la variable this.app
        this.port = process.env.PORT; //pasamos el valor nuestra variable port

        //implementacion de socket io con express, le pasamos nuestro servidor de express
        this.server = require('http').createServer(this.app);//sever levantamos
        this.io = require('socket.io')(this.server);//es todo la inforacion de nuestro socket


        //version 2
        this.paths = {
        }
       

        //Middelwares
        this.middleware(); //creamos nuestro middleware

        //Rutas de mi aplicacion
        this.routes(); //creamos las rutas

        //Sockets llamada a nuestro metos
        this.sockets();
    }

 

    //metodos de la clase Server
    middleware() {

        //cors
        this.app.use(cors());

        //directorio publico
        this.app.use(express.static('public'));

    }


    routes() {
        //this.app.use(this.paths.auth, require('../routes/auth'));

    }


    sockets(){
    
    //conexion del socket
   this.io.on('connection',socketController );


    }

    listen() {

     //levantamos el server que es el que hemos configurado para scoket io
        this.server.listen(this.port, () => {
            console.log('Servidor Corriendo en el puerto', this.port);
        });
    }

}

module.exports = Server;