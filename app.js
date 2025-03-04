require('dotenv').config();//para que reconozca las variables de entorno

const Server = require('./models/server');

//creamos la instancia de nuestro server
const server = new Server();

server.listen();