const { eventos } = require("./eventos")

function lerEventos(){
    try {
        console.table(eventos)
    } catch (error) {
        console.error("Error! Não foi possível ler os eventos",error.message )
    }
}

module.exports = { lerEventos }