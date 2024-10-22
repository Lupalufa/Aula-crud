const prompt = require("prompt-sync")();

const { eventos } = require("./Eventos/eventos")
const { criarEvento } = require("./Eventos/criarEventos")
const { atualizarEvento } = require("./Eventos/editarEventos")
const { lerEventos } = require("./Eventos/lerEventos")
const { deletarEvento } = require("./Eventos/deletarEventos")

const EventoRN = criarEvento("1","RN","10/10","Parnamirim/Festa do boi","PaulinhoFreire","1999","R$50,00","Ativo")

const EventoRS = atualizarEvento("1","RS","25/10","Santa Maria/UFSM/Estádio","PaulinhoFreire","5000","R$90,00","Ativo")

const removerEvento = deletarEvento("1")

lerEventos()

