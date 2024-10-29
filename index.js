const prompt = require("prompt-sync")();

const { eventos } = require("./Eventos/eventos")
const { criarEvento } = require("./Eventos/criarEventos")
const { atualizarEvento } = require("./Eventos/editarEventos")
const { lerEventos } = require("./Eventos/lerEventos")
const { deletarEvento } = require("./Eventos/deletarEventos")
const { deletarTodosOsEventos } = require("./Eventos/deletarTodosOsEventos")

function exibirMenu() {
    console.log("=====================")
    console.log("1 - Criar Evento")
    console.log("2 - Editar Evento")
    console.log("3 - Excluir Evento")
    console.log("4 - Listar Evento")
    console.log("5 - Apagar todos os Evento")
    console.log("6 - Sair do sistema")
    console.log("======================")
}

let opcao;
do{
    exibirMenu()
    opcao = parseInt(prompt("Digite uma opção:"))
    let id;
    switch (opcao) {
        case 1:
            id = prompt("Digite o ID do Evento:")
            let nome = prompt("Digite o nome do Evento:")
            let data = prompt("Digite a data do Evento:")
            let localizacao = prompt("Digite a localização do evento:")
            let organizador = prompt("Digite quem sera o organizador do evento:")
            let maxParticipantes = prompt("Digite o Maximo de participantes do evento")
            let precoIngressos = prompt("Diga qual será o preço do evento")
            let status = prompt("Esta ativo, pendente ou negativo")

            criarEvento()
            console.log("Novo Evento criado com sucesso!")
            break;
        case 2:
            id = prompt("Digite o ID existente:")
            let novoNome = prompt("Digite o novo nome do evento")
            let novaData = prompt("Digite a nova data do evento:")
            let novaLocalizacao = prompt("Digite a nova localização do evento")
            let novoOrganizador = prompt("Digite o novo organizador do evento")
            let novoMaxParticipantes = prompt("Digite o novo maximo de participantes:")
            let novoPrecoIngressos = prompt("Digite o novo preço do evento")
            let novoStatus = prompt("Esta ativo, pendente ou negativo")
            break;
        case 3:
            id = prompt("Digite o ID:")
            deletarEvento(id)
            break;
        case 4:
            lerEventos()
            break;
        case 5:
            deletarTodosOsEventos()
            console.log("Todos os eventos foram deletados com sucesso!")
            break;
        case 6:
            console.log("Saindo do sistema...")
            break;
        default:
            console.log("Valores inválidos! Digite de 1 a 5")
            break;
        }
}while(opcao !== 6)