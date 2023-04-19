const mongoose = require('mongoose');

const connectToDatabase = async () => {

    await mongoose.connect(
        `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cursonodejs.s3hwkba.mongodb.net/?retryWrites=true&w=majority`,
        (error) => {

            if(error) {

                return console.log('Erro: ', 
                error);

            };

            return console.log('Conexao Segura!');

        });

}

module.exports = connectToDatabase;