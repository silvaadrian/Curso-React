using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ProAtividade.Data.Context;
using ProAtividade.Domain.Interfaces.Repositories;

namespace ProAtividade.Data.Repositories
{
    public class GeralRepo : IGeralRepo
    {
        private readonly DataContext _context;

        public GeralRepo(DataContext context)
        {
            _context = context;
        }
    
        public async Task<bool> SalvarMudancasAsync()
        {
            return (await _context.SaveChangesAsync()) > 0;
        }

        void IGeralRepo.Adicionar<T>(T entity)
        {
            _context.Add(entity);
        }

        void IGeralRepo.Atualizar<T>(T entity)
        {
            _context.Update(entity);
        }

        void IGeralRepo.Deletar<T>(T entity)
        {
            _context.Remove(entity);
        }

        void IGeralRepo.DeletarVarias<T>(T[] entity)
        {
            _context.RemoveRange(entity);
        }
    }
}