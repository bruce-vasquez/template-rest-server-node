const moongose = require('mongoose');


const dbConnection = async() =>{

    try {

        await moongose.connect(process.env.MONGODB_CNN);

        console.log('Base de datos inicializada');
        
    } catch (error) {
        console.log(error);
        throw new Error('Fallo al inicializar la Base de Datos');
    }

}

module.exports = {
    dbConnection
}