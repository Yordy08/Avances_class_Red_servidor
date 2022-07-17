const Estudiante = require("./models/Estudiantes");
module.exports = (app) =>{
  app.get("/", (req, res)=>{
    
    res.send('Página principal')
  })
  
  // Traer todos los estudiantes
  app.get("/estudiantes", (req, res)=>{
    Estudiante.find({}, (err, e)=>{
    res.send(e)
      })
  })
  
  // Crear un estudiante
  app.post("/estudiantes", (req, res)=>{
    let estudiante = req.body
    Estudiante.create(estudiante, (err,e)=>{
      res.send(e)
     })
  })
  
  // Traer estudiantes por su ID
  app.get("/estudiantes/:id",(req, res)=>{
    let id = req.params.id
    Estudiante.find({_id:id}, (err, e)=>{ 
    res.send(e)
    })
  })

  // Modificar un estudiante
  app.put("/estudiantes/:id", (req, res)=>{
    let id = req.params.id;
    let estudiante = req.body
    Estudiante.findByIdAndUpdate({_id:id}, estudiante, (err, e)=>{
      res.send(e)
    }) 
  })

  // Eliminar un estudiante
  app.delete("/estudiantes/:id", (req, res)=>{
    let id = req.params.id
    Estudiante.findByIdAndDelete({_id:id}, (err, e)=>{
      res.send(e)
    })
  })
}