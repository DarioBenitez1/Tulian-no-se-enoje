const materiaCtrl = {};
const materias = require('../../data/materias.json');
const carreras = require('../../data/carreras.json')

//Crea una materia
materiaCtrl.createMateria = (req, res) => {
    const materia =req.body //recupera lo que escribo en el body del postman.
    const [nada1, nada2 ,carreraid ,nada3] = req.path.split("/");
    const carrera = carreras.find(s => s.id == carreraid);

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
        carreraId : carreraid
    }); 
    
    res.status(201).json(materias[materias.length-1]);
};

materiaCtrl.getMaterias = (req, res) => {
    res.status(200).json(materias);
};

//Obtener una materia mediante el ID de la carrera
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

//Obtener una materia mediante el ID
materiaCtrl.getMateriaById = (req,res) => {
    const id = req.params.id
    const materia = materias.find(s => s.id == id)
    res.status(200).json(materia)
 };

//Borrar una materia mediante el ID
 materiaCtrl.deleteMateriaById = (req, res) => {
    const id = req.params.id;
    const materia = materias.find(s => s.id == id)
 
    if(!materia){
       res.status(404).json({error: 'No es posible encontrar la materia solicitada'})
    }

    const index = materias.indexOf(materia);
    if(index > -1){
       materias.splice(index, 1);
       res.status(200).json({message : 'materia borrada exitosamente'});
    }
 };

module.exports = materiaCtrl;