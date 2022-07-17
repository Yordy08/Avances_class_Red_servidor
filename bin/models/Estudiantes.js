// mongoose nos permite conectarnos a nuestras bases de datos y hacer CRUD
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// un esquema es la estructura de datos de nuestra colección, definimos los tipos de datos
// y sus relaciones
const EstudianteSchema = new Schema(
  {
      Nombres: String,
      Apellidos: String,
      Edad: String,
      Grado: String,
      Curso: String,

    // vinculamos al estudiante a muchas notas (array)
    Actividades: [
      {
        type: Schema.Types.ObjectId,
        ref: "Actividades"
      } 
    ]
  }
);


// exportamos el modelo
var Estudiante = mongoose.model("Estudiante", EstudianteSchema);
module.exports = Estudiante;