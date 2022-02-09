import { useState } from 'react'
import Entrada from './Entrada'
import Cliente from '../core/Cliente'
import Botao from '../components/Botao'

interface FormularioProps {
    cliente: Cliente
    clienteMudou?: (cliente: Cliente) => void
    cancelado?: () => void
}

const Formulario = (props: FormularioProps) => {
    const id = props.cliente?.id
    const [nome, setNome] = useState(props.cliente?.nome ?? '')
    const [idade, setIdade] = useState(props.cliente?.idade ?? 0)

    return (
        <div>
            {id ? (
                <Entrada 
                    texto='Código' 
                    tipo="text" 
                    valor={id} 
                    somenteLeitura
                    className='mb-5'></Entrada>
            ): false}

            <Entrada 
                texto='Nome' 
                tipo="text" 
                valor={nome}
                valorMudou={setNome}
                className="mb-5"></Entrada>
            <Entrada 
                texto='Idade' 
                tipo="number" 
                valor={idade}
                valorMudou={setIdade}></Entrada>

            <div className='flex justify-end mt-3'>
                <Botao cor="blue" className='mr-2' onClick={() => props.clienteMudou?.(new Cliente(nome, +idade, id))}>
                    {id ? 'Alterar' : 'Salvar'}
                </Botao>
                <Botao onClick={props.cancelado}>
                    Cancelar
                </Botao>
            </div>
        </div>
    )
}

export default Formulario