import { useEffect, useState } from 'react';
import '../App.css';

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
            <h1 className='text-center py-3'>Atividade {atividade.id !== 0 ? atividade.id : ''}</h1>
            <form className='row g-3' onSubmit={handleSubmit}>
                <div className='col-md-6'>
                    <label>Título:</label>
                    <input id='titulo' type='text' placeholder='Título' className='form-control' name='titulo' value={atividade.titulo} onChange={inputTextHandler} />
                </div>
                <div className='col-md-6'>
                    <label>Status:</label>
                    <select id='prioridade' className='form-select'

                        name='prioridade' value={atividade.prioridade} onChange={inputTextHandler}>
                        <option defaultValue='0' selected>Selecione</option>
                        <option value='1'>Baixa</option>
                        <option value='2'>Normal</option>
                        <option value='3'>Alta</option>
                    </select>
                </div>

                <div className='col-md-12'>
                    <label>Descrição:</label>
                    <textarea id='descricao' type='text' placeholder='Descrição' className='form-control' name='descricao' value={atividade.descricao} onChange={inputTextHandler} />
                </div>
                <hr></hr>
                <div className='col-md-12 mt-2 text-center'>
                    {

                        atividade.id === 0 ? (
                            <button className='btn btn-secondary ml-2' type='submit'><i className='fas fa-plus me-2'></i> Atividade</button>
                        ) : (
                            <>
                                <button className='btn btn-success me-2' type='submit'><i className='fas fa-plus me-2'></i>Salvar</button>
                                <button className='btn btn-warning me-2' onClick={handleCancelar}><i className='fas fa-plus me-2'></i>Cancelar</button>
                            </>
                        )

                    }

                </div>
            </form >
        </>
    )
}
