//Referencia del Html
const lblOnline   = document.querySelector('#idlOnline');
const lblOffline  = document.querySelector('#idlOffline');

const textMensaje = document.querySelector('#textMensaje');
const btnEnviar   = document.querySelector('#btnEnviar');



//realizamos la conexion
const socket = io();

//Listeners  de socket lado cliente
socket.on('connect',()=>{
    // console.log('conectado');
    lblOnline.style.display =' ';
    lblOffline.style.display ='none';
  
});

socket.on('disconnect',()=>{
    console.log('desconectado del servidor');
    lblOnline.style.display ='none';
    lblOffline.style.display ='';
})


//Escuchar mesanje del servidor que recibien todos lo clientes
socket.on('enviar-mensaje',(payload)=>{//payload es el mensaje del servidor

    console.log(payload);
});

btnEnviar.addEventListener('click',()=>{

    const mensaje = textMensaje.value;
     
    //Enviamos  un objeto con la informacion
    const payload = {
        mensaje,
        id:'1234Abd',
        fecha: new Date().getTime()
    }

    //comunucacion con el servidor con  socket.emit, podemos enviar un tercer argumneto ejm un callback
    socket.emit('enviar-mensaje',payload, (id)=>{
        console.log('Desde el Server', id);

    });
   

})