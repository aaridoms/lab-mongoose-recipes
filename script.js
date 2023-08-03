const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');

const MONGODB_URI = 'mongodb://127.0.0.1:27017/recipe-app';

// Connection to the database "recipe-app"
const databaseConection  = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {

    })
    await Recipe.deleteMany()

    await Recipe.insertMany(data)

    // await Recipe.deleteOne( { title: "Carrot Cake" } )

    console.log("Conectado con la base de datos")
    await mongoose.connection.close()
    console.log("Conexion cerrada")

  } catch(err) {
    console.log("Error al conectar")
  }
}

databaseConection()