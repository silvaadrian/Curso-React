using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ProAtividade.Domain.Entities;
using ProAtividade.Domain.Interfaces.Repositories;

namespace ProAtividade.Data.Repositories
{
    public class AtividadeRepo : GeralRepo, IAtividadeRepo
    {
        public Task<Atividade> PegaPorIdASync(int id)
        {
            throw new NotImplementedException();
        }
        public Task<Atividade> PegaPorTituloASync(string titulo)
        {
            throw new NotImplementedException();
        }
        public Task<Atividade> PegaTodasASync()
        {
            throw new NotImplementedException();
        }
    }
}