const materiaCtrl = {};
const materias = require('../../data/materias.json');
const carreras = require('../../data/carreras.json')

materiaCtrl.createMateria = (req, res) => {
    const materia =req.body //recupera lo que escribo en el body del postman.


    const carrera = carreras.find(s => s.id == materia.carreraId);
    if(!carrera){
       return res.status(404).json({mensaje: 'La carrera no fue encontrada'});
    };


    let id=1; //empieza por defecto con 1 el ID 

    if(materias.length){ //si lenght es cero entonces devuelve falso
       const ids=materias.map(s=>s.id) //busca dentro de las carreras los ids
        id=Math.max(...ids)+1  //busca el maximo id y le suma 1, para que se vaya incremantando
    }
   
    //se agrega el nuevo objeto con el id y su valor.
    materias.push(
        {
        id,
        nombre: materia.nombre,
        cuatrimestral: materia.grado,
        anio: materia.anio,
        carreraId : materia.carreraId
    }); 
    
    
    res.status(201).json(materias[materias.length-1]);
};

materiaCtrl.getMaterias = (req, res) => {
    res.status(200).json(materias);
};

materiaCtrl.getMateriaByCarreraId = (req, res) => {
        const carreraId = req.params.id;
        
        const carrera = carreras.find(c => c.id == carreraId)
        
        //agregar a middleware
        if(!carrera){
            return res.status(404).json({error : 'carrera no encontrada'});
        };

        const materiaaCarrera = materias.filter(m => m.carreraId == carreraId);
        res.status(200).json(materiaaCarrera);
     
};

module.exports = materiaCtrl;