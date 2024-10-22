const { eventos } = require("./eventos")

function criarEvento(id,nome,data,localizacao,organizador,maxParticipantes,precoIngressos,status){
    const novoEvento = {
        id,
        nome,
        data,
        localizacao,
        organizador,
        maxParticipantes,
        precoIngressos,
        status,
    }
    try {
        eventos.push(novoEvento)
    } catch (error) {
        console.error("Erro ao criar um novo evento",error.message)
    }
    return novoEvento
}

module.exports = { criarEvento }