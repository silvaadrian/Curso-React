import { useEffect, useState } from 'react';

const atividadeInicial = {
    id: 0,
    titulo: '',
    prioridade: 0,
    descricao: '',
}

export default function AtividadeForm(props) {
    const [atividade, setAtividade] = useState(atividadeAtual());

    useEffect(() => {
        if (props.atividadeSelecionada.id !== 0) {
            setAtividade(props.atividadeSelecionada);
        }
    }, [props.atividadeSelecionada]);

    const inputTextHandler = (e) => {
        const { name, value } = e.target;

        setAtividade({ ...atividade, [name]: value })

    }

    const handleCancelar = (e) => {
        e.preventDefault();

        props.cancelarAtividade();

        setAtividade(atividadeInicial);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (props.atividadeSelecionada.id !== 0) {
            props.atualizarAtividade(atividade);

        }
        else {
            props.addAtividade(atividade);
        }
        setAtividade(atividadeInicial);
    }

    function atividadeAtual() {
        if (props.atividadeSelecionada.id !== 0) {
            return props.atividadeSelecionada;
        } else {
            return atividadeInicial;
        }
    }

    return (
        <>

            <form className='row g-3' onSubmit={handleSubmit}>
                <div className='col-md-6'>
                    <label>Título:</label>
                    <input id='titulo' type='text' placeholder='Título' className='form-control' name='titulo' value={atividade.titulo} onChange={inputTextHandler} />
                </div>
                <div className='col-md-6'>
                    <label>Status:</label>
                    <select id='prioridade' className='form-control'
                        name='prioridade' value={atividade.prioridade} onChange={inputTextHandler}>
                        <option value='Não definido'>Selecione</option>
                        <option value='Baixa'>Baixa</option>
                        <option value='Normal'>Normal</option>
                        <option value='Alta'>Alta</option>
                    </select>
                </div>
                <div className='col-md-12'>
                    <label>Descrição:</label>
                    <textarea id='descricao' type='text' placeholder='Descrição' className='form-control' name='descricao' value={atividade.descricao} onChange={inputTextHandler} />
                </div>
                <hr></hr>
                <div className='col-md-12 mt-3 text-center p-3 d-flex'>
                    {atividade.id === 0 ? (
                        <button className='btn btn-success p-2 me-2' type='submit'>
                            <i className='fas fa-plus me-2'></i> Salvar
                        </button>
                    ) : (
                        <>
                            <button className='btn btn-success m-1' type='submit'>
                                <i className='fas fa-plus me-2'></i> Salvar
                            </button>
                            <button className='btn btn-warning m-1' onClick={handleCancelar}>
                                <i className='fas fa-plus me-2'></i> Cancelar
                            </button>
                        </>
                    )}
                </div>
            </form >
        </>
    )
}
