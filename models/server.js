const express = require('express');
const cors = require('cors');

class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosApiPath = '/api/usuarios';

        //Middlewares
        this.middleware();
        
        //Rutas de la app
        this.routes();
    }

    middleware(){

        //CORS
        this.app.use(cors());

        //Lectura y parseo del body a JSON (pueden ocuparse otros middleware para otros tipos de archivos, XML etc)
        this.app.use(express.json());

        //Middlware que setea el path publico
        this.app.use(express.static('public'));
    }

    routes(){
       
        this.app.use(this.usuariosApiPath,require('../routes/usuarios'));

    }

    listen(){
         
        this.app.listen(this.port, () =>{
            console.log("Aplicación escuchcando en el puerto: ",this.port);
        });
    }


}

module.exports = Server;