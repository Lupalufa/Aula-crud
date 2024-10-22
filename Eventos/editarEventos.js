const { eventos } = require("./eventos")

function atualizarEvento(id, novoNome, novaData, novaLocalizacao, novoOrganizador, novoMaxParticipantes,
novoPrecoIngressos, novoStatus){
    try {
        const evento = eventos.find(evento =>
            evento.id === id
        )
        if (evento){
            evento.nome = novoNome
            evento.data = novaData
            evento.localizacao = novaLocalizacao
            evento.organizador = novoOrganizador
            evento.maxParticipantes = novoMaxParticipantes
            evento.precoIngressos = novoPrecoIngressos
            evento.status = novoStatus
            console.log("O evento foi atualizado com Sucesso")
        }
        else {
            console.log("Evento não reconhecido")
        }
    } catch (error) {
        console.error("Erro ao atualizar o evento indicado",error.message)
    }
}

module.exports = { atualizarEvento }