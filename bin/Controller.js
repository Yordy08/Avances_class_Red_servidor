const Estudiante = require("./models/Estudiantes");
// Crear un estudiante
const postEstudiante = (estudiante, res)=>{
  Estudiante.create(estudiante, (err, e)=>{
    if(err) throw err
    res.send(e);
  })
}
//Obterner todos los estudiantes
const getEstudiantes = (res)=>{
  Estudiante.find({}, (err, e)=>{
    if(err) throw err
    res.send(e)
  })
}
//Obterner un estudiante por su Id
const getEstudiantesPorId = (id, res)=>{
  Estudiante.find({_id:id}, (err, e)=>{
    if(err) throw err
    res.send(e)
  })
}
// actualizar un estuidiante por su id
const updateEstudiantePorId = (id, estudiante, res)=>{
  Estudiante.findByIdAndUpdate({_id:id}, estudiante, (err, e)=>{
    if(err) throw err
    res.send(e)
  })
}
// Eliminar un estuiante por su id
const deleteEstudiantes = (id, res)=>{
  Estudiante.findByIdAndDelete({_id:id}, (err, e)=>{
    if(err) throw err
    res.send(e)
  })
}
// CRUD estudiantes
module.exports = {
  postEstudiante,
  getEstudiantes,
  getEstudiantesPorId,
  updateEstudiantePorId,
  deleteEstudiantes
}