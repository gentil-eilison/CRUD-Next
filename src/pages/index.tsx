import Layout from "../components/Layout"
import Cliente from "../core/Cliente"
import Tabela from "../components/Tabela"
import Botao from '../components/Botao'
import Formulario from "../components/Formulario"
import { useState } from 'react' 

export default function Home() {
  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

  const clientes = [
    new Cliente('Ana', 34, '1'),
    new Cliente('Bia', 45, '2'),
    new Cliente('Carlos', 23, '3'),
    new Cliente('Pedro', 54, '4'),
  ]

  const clienteSelecionado = (cliente: Cliente) => {
      setCliente(cliente)
      setVisivel('form')
  }

  const clienteExcluido = (cliente : Cliente) => {
    console.log(`Excluir... ${cliente.nome}`)
  }

  const salvarCliente = (cliente: Cliente) => {
    console.log(cliente)
    setVisivel('tabela')
  }

  const novoCliente = () => {
    setCliente(Cliente.vazio())
    setVisivel('form')
  }

  return (
    <div className={`
      flex justify-center items-center h-screen 
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
        <Layout titulo="Cadadstro Simples">
          {visivel === "tabela" ? (
            <>
            <div className="flex justify-end">
            <Botao cor="green" className='mb-4' onClick={novoCliente}>Novo Cliente</Botao>
          </div>
            <Tabela 
              clientes={clientes}
              clienteSelecionado={clienteSelecionado}
              clienteExcluido={clienteExcluido}
              ></Tabela>
            </>
          ) : (
            <Formulario cliente={cliente} cancelado={() => setVisivel('tabela')} clienteMudou={salvarCliente}/>
          )}
          
            
        </Layout>
    </div>
  )
}
