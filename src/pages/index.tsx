import Layout from "../components/Layout"
import Cliente from "../core/Cliente"
import Tabela from "../components/Tabela"
import Botao from '../components/Botao'
import Formulario from "../components/Formulario"
import useClientes from "../hooks/useClientes"

export default function Home() {
  const { 
    selecionarCliente, 
    salvarCliente, 
    novoCliente, 
    excluirCliente ,
    cliente, 
    clientes,
    tabelaVisivel,
    exibirTabela } = useClientes()

  return (
    <div className={`
      flex justify-center items-center h-screen 
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
        <Layout titulo="Cadadstro Simples">
          {tabelaVisivel  ? (
            <>
            <div className="flex justify-end">
            <Botao cor="green" className='mb-4' onClick={novoCliente}>Novo Cliente</Botao>
          </div>
            <Tabela 
              clientes={clientes}
              clienteSelecionado={selecionarCliente}
              clienteExcluido={excluirCliente}
              ></Tabela>
            </>
          ) : (
            <Formulario cliente={cliente} cancelado={exibirTabela} clienteMudou={salvarCliente}/>
          )}
          
            
        </Layout>
    </div>
  )
}
