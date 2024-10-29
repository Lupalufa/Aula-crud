const { eventos } = require("./eventos")

function deletarTodosOsEventos() {
    try {
        eventos.lenght = 0
    } catch (error) {
        console.error("Erro ao excluir todos os eventos")
    }
}

module.exports = { deletarTodosOsEventos }