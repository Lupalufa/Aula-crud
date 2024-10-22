const { eventos } = require("./eventos")

function deletarEvento(id){
    try {
        const indice = eventos.findIndex(evento =>
            evento.id === id
        )
        if(indice === -1){
            console.log("Evento não reconhecido")
        }
        else {
            eventos.splice(indice, 1)
            console.log("Evento apagado com sucesso")
        }
    } catch (error) {
        console.error("Error! Não foi possível excluir este evento",error.message)
    }
}

module.exports = { deletarEvento }