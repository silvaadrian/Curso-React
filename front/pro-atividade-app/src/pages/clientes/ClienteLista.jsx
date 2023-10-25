import React, { useState } from 'react'
import TitlePage from '../../components/TitlePage'
import { Button, Form, InputGroup, Table } from 'react-bootstrap'
import { useHistory } from 'react-router-dom';

const clientes = [
    {
        id:1,
        nome: 'Microsoft',
        responsavel: 'Otto',
        contato: '10665544',
        situacao: 'Ativo'
    },
    {
        id:2,
        nome: 'Amazon',
        responsavel: 'Otto',
        contato: '44434343',
        situacao: 'Desativado'
    },
    {
        id:3,
        nome: 'Google',
        responsavel: 'Jack',
        contato: '34343434',
        situacao: 'Em análise'
    },
    {
        id:4,
        nome: 'Facebook',
        responsavel: 'Kevin',
        contato: '75881515',
        situacao: 'Ativo'
    },
    {
        id:5,
        nome: 'Twitter',
        responsavel: 'Jack',
        contato: '00226548',
        situacao: 'Ativo'
    }
]

export default function ClienteLista() {
    const[termoBusca, setTermoBusca] = useState('');
    const history = useHistory();
    const handleInputChange = (e) => {
        setTermoBusca(e.target.value);

    }

    const clientesFiltrados = clientes.filter((cliente) =>{
        return Object.values(cliente).join(' ').toLocaleLowerCase().includes(termoBusca.toLocaleLowerCase());
        
    });

    const novoCliente = () =>{
        history.push('/cliente/detalhe')
    }

  return (
    <>
    <TitlePage title="Cliente Lista">
        <Button variant='outline-secondary' onClick={novoCliente}>
            <i className='fas fa-plus me-2'></i>
            Novo Cliente
        </Button>
    </TitlePage>

    <InputGroup className="mt-3 mb-3">
        <InputGroup.Text>
          Buscar:
        </InputGroup.Text>
        <Form.Control
         placeholder='Buscar cliente'
         onChange={handleInputChange}
        />
      </InputGroup>
    <Table striped bordered hover>
      <thead className='table-dark mt-3'>
        <tr>
          <th>#</th>
          <th>Nome</th>
          <th>Responsavél</th>
          <th>Contato</th>
          <th>Situação</th>
          <th>Opções</th>
        </tr>
      </thead>
      <tbody>
        {clientesFiltrados.map((cliente) => ( 
        <tr key={cliente.id}>
          <td>{cliente.id}</td>
          <td>{cliente.nome}</td>
          <td>{cliente.responsavel}</td>
          <td>{cliente.contato}</td>
          <td>{cliente.situacao}</td>
          <td>
            <div>
                <button className="btn btn-sm btn-outline-primary me-2" onClick={() => history.push(
                    `/cliente/detalhe/${cliente.id}`
                )}>
                    <i className='fas fa-user-edit me-2'></i>
                    Editar
                </button>
                <button className="btn btn-sm btn-outline-danger me-2">
                <i className='fas fa-user-times me-2'></i>
                    Desativar
                </button>
            </div>
          </td>
        </tr>
        ))}       
      </tbody>
    </Table>
    </>
  )
}
