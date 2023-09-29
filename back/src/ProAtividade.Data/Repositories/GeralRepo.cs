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

        void Adicionar<T>(T entity) where T : class
        {
            _context.Add(entity);
        };
        void Atualizar<T>(T entity) where T : class
        {
            _context.Update(entity);
        };
        void Deletar<T>(T entity) where T : class
        {
            _context.Remove(entity);
        };
        void DeletarVarias<T>(T[] entity) where T : class
        {
            _context.RemoveRange(entity);
        };

        public async Task<bool> SalvarMudancasAsync()
        {
            return (await _context.SaveChangesAsync() > 0);
        };
    }
}