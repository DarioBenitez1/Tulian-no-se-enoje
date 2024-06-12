const carrerasCtrl = {}
const carreras = require('../../data/carreras.json');

//Obtener todas las carreras
carrerasCtrl.getCarreras = (req,res) => {
   res.status(200).json(carreras)
};

//Obtener una carrera en particular mediante el ID
 carrerasCtrl.getCarreraById = (req,res) => {
   const id = req.params.id
   const carrera = carreras.find(s => s.id == id)
   res.status(200).json(carrera)
};

//crear una carrera con un ID incremental
carrerasCtrl.createCarrera = (req,res)=>{ 
   const carrera=req.body //recupera lo que escribo en el body del postman.
   let id=1; //empieza por defecto con 1 el ID 

   if(carreras.length){ //si lenght es cero entonces devuelve falso
      const ids=carreras.map(s=>s.id) //busca dentro de las carreras los ids
      id=Math.max(...ids)+1  //busca el maximo id y le suma 1, para que se vaya incrementando
   }
    
   //se agrega el nuevo objeto con el id y su valor.
   carreras.push(
      {
      id,
      nombre: carrera.nombre,
      grado: carrera.grado,
      universidad: carrera.universidad 
   }); 
    
   res.status(201).json(carreras[carreras.length-1]);
};

//Borrar una carrera mediante el ID
carrerasCtrl.deleteCarreraById = (req, res) => {
   const id = req.params.id;
   const carrera = carreras.find(s => s.id == id)

   if(!carrera){
      res.status(404).json({error: 'No es posible encontrar la carrera solicitada'})
   }
   //aca hay dos opciones
      //1 - no se puede borrar porque el ID de carrera va a estar en materias.
      //2 - usar 'borrar materia' que tenga id de la carrera especificada. 
   
   const index = carreras.indexOf(carrera);
   if(index > -1){
      carreras.splice(index, 1);
      //res.status(200).json(carreras);
      res.status(200).json({message : 'carrera borrada exitosamente'});
   }
};

module.exports = carrerasCtrl