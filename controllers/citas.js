//const comunes = require("../config/comunes")
const modelo = require("../models/citas")
const comunes = require("../config/comunes")

exports.consultar = (req, res) => {
    
    modelo
        .consultar()
        .then(resultados => {
            return res.send(comunes.respuestaConsulta(resultados))        
        })     
        .catch(err => {
            return res.status(comunes.COD_500).send(comunes.respuestaExcepcion(err))
        })
    
}
exports.consultarPorID = (req, res) => {
    const {id} = req.body
    modelo
        .consultarPorID(id)
        .then(resultados => {
            return res.send(comunes.respuestaConsulta(resultados))
        })
        .catch(err => {
            return res.status(comunes.COD_500).send(comunes.respuestaExcepcion(err))
        })
}
