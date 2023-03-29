import React from 'react'

export default function Atividade(props) {

    function prioridadeLabel(param) {
        switch (param) {
            case '1':
                return 'Baixa'
            case '2':
                return 'Normal'
            case '3':
                return 'Alta'
            default:
                return 'Não escolhido';
        }
    }

    function prioridadeStyle(param, icon) {
        switch (param) {
            case '1':
                return icon ? 'smile' : 'success';
            case '2':
                return icon ? 'meh' : 'dark';
            case '3':
                return icon ? 'frown' : 'warning';
            default:
                return 'Não definido';
        }
    }
    return (
        <div className={"card col-md-12 text-center mb-2 shadow-sm border-" + prioridadeStyle(props.ativ.prioridade)} /*style={{ width: "18rem" }}*/>
            <div className="card-body">
                <div className='d-flex justify-content-between'>
                    <h5 className="card-title">
                        <span className='badge  bg-secondary me-1'>
                            {props.ativ.id}
                        </span>
                        - {props.ativ.titulo}
                    </h5>
                    <h6 className=''>Prioridade:
                        <span className={'ms-1 text-' + prioridadeStyle(props.ativ.prioridade)}>
                            <i className={'me-2 far fa-' + prioridadeStyle(props.ativ.prioridade, true)}></i>
                            {prioridadeLabel(props.ativ.prioridade)}
                        </span></h6>
                </div>
                <p className="card-text"> {props.ativ.descricao}</p>
                <div className='d-flex justify-content-end border-top pt-2 m-0'>
                    <button className='btn btn-outline-primary me-2 btn-sm'
                        onClick={() => props.editar(props.ativ.id)}
                    >
                        <i className='fas fa-pen me-2'></i>
                        Editar
                    </button>
                    <button className='btn btn-outline-danger btn-sm'
                        onClick={() => props.excluir(props.ativ.id)}
                    >
                        <i className='fas fa-trash me-2'></i>
                        Excluir
                    </button>
                </div>
            </div>
        </div>
    )
}
