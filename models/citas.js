const conexion = require("../config/db")

module.exports = {

    async consultar() {
        const resultado = await conexion.query(`select * from cita_medica`);
        return resultado.rows;
    },

    async consultarPorID(id) {
        const resultados = await conexion.query("select c.fecha, c.duracion, m.nombre as medico, m.especializacion,p.nombre as paciente  from cita_medica c, medico m, paciente p where c.idpaciente = p.identificacion and c.idmedico=m.secuencia and c.idpaciente=$1", [id]);
        return resultados.rows;
    },
}