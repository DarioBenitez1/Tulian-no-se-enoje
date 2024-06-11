const carrerasCtrl = {}
const carreras = require('../../data/carreras.json');

//Obtener una carrera en especifico mediante el ID
 carrerasCtrl.getCarreraById = (req,res) => {
    const id = req.params.id
    const carrera = carreras.find(s => s.id == id)
    if(!carrera){
       return res.status(404).json({error : 'carrera no encontrada'});
    }
    res.status(200).json(carrera)
 };


 //crear una carrera con un ID incremental
carrerasCtrl.createCarrera = (req,res)=>{ 
     const carrera=req.body //recupera lo que escribo en el body del postman.
     let id=1; //empieza por defecto con 1 el ID 

     if(carreras.length){ //si lenght es cero entonces devuelve falso
        const ids=carreras.map(s=>s.id) //busca dentro de las carreras los ids
         id=Math.max(...ids)+1  //busca el maximo id y le suma 1, para que se vaya incremantando
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
}

module.exports = carrerasCtrl