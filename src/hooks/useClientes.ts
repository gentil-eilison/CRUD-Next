import ClienteRepositorio from "../core/ClienteRepositorio"
import Cliente from "../core/Cliente"
import { useState, useEffect } from 'react'
import ColecaoCliente from "../backend/db/ColecaoCliente"
import useTabelaOuForm from "./useTabelaOuForm"

const useClientes = () => {
  const { formularioVisivel, tabelaVisivel, exibirFormulario, exibirTabela } = useTabelaOuForm()
  const repo: ClienteRepositorio = new ColecaoCliente()
  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
  const [clientes, setClientes] = useState<Cliente[]>([])
  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

  
  const obterTodos = () => {
    repo.obterTodos().then(clientes => {
      setClientes(clientes)
      exibirTabela()
    })
  }
  
  useEffect(obterTodos, [])
  
  const selecionarCliente = (cliente: Cliente) => {
      setCliente(cliente)
      exibirFormulario()
  }

  const excluirCliente = async (cliente : Cliente) => {
    await repo.excluir(cliente)
    obterTodos()
  }

  const salvarCliente = async (cliente: Cliente) => {
    await repo.salvar(cliente)
    obterTodos()
  }

  const novoCliente = () => {
    setCliente(Cliente.vazio())
    exibirFormulario()
  }

  return {
    salvarCliente,
    novoCliente,
    excluirCliente,
    selecionarCliente,
    obterTodos,
    cliente,
    clientes,
    tabelaVisivel,
    exibirTabela
  }
}

export default useClientes