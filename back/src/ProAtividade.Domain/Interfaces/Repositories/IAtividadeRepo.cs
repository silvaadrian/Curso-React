using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ProAtividade.Domain.Entities;

namespace ProAtividade.Domain.Interfaces.Repositories
{
    public interface IAtividadeRepo : IGeralRepo
    {
        Task<Atividade[]> PegaTodasASync();
        Task<Atividade[]> PegaPorIdASync(int id);
        Task<Atividade[]> PegaPorTituloASync(string titulo);
    }
}
