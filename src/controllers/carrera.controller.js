const carrerasCtrl = {}
const carreras = require('../../data/carreras.json');

//Obtener una carrera en especifico mediante el ID
 carrerasCtrl.getCarreraById = (req,res) => {
    const id = req.params.id
    const carrera = carreras.find(s => s.id == id)
    if(!carrera){
        res.status(404).json({error : 'carrera no encontrada'});
    }
    res.status(200).json(carrera)
 };


 
// seriesCtrl.createSerie = (req,res)=>{ 
//     const serie=req.body //recupera lo que escribo en el body del postman.
//     let id=1;
//     if(series.length){ //si lenght es cero entonces devuelve falso
//         const ids=series.map(s=>s.id)
//         id=Math.max(...ids)+1
//     }
    
//      //genero el id para el nuevo objeto de serie (no usar length porque se puede duplicar el id)
//     //series.push({id,...serie})//agrega el nuevo objeto con el id y su valor.
//     series.push(
//         {id,
//         serie:serie.serie,
//         plataforma:serie.plataforma,
//         disponible:!!serie.disponible //!! es doble negación. Si serie.disponible es undefined es false, al negarlo se transforma en true y al volver a negarlo se transforma en true.
//     }); 
    
//     res.status(201).json(series[series.length-1]);
// }

module.exports = carrerasCtrl