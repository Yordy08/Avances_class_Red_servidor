// mongoose nos permite conectarnos a nuestras bases de datos y hacer CRUD
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// un esquema es la estructura de datos de nuestra colección, definimos los tipos de datos
// y sus relaciones
const ActividadesSchema = new Schema(
  {
       Nombre_actividad: string,
       Categoria: String,
       Asignatura: String,
       Grado_estudiante: String,
       Nivel_dificultad: String,
  // vinculamos la nota a un solo estudiante
  estudiante: {
      type: Schema.Types.ObjectId,
      ref: "Estudiante"
    }  
});


// exportamos el modelo
var Actividades = mongoose.model("Actividades", ActividadesSchema);
module.exports = Actividades;