using _2Order.Domain.Model;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _2Order.DataLayer.Repository
{
    public class StoRepository : Repository<Sto>, IStoRepository
    {
        public StoRepository(_2OrderContext context) : base(context)
        {

        }

        public async Task<List<Sto>> VratiSveStolove()
        {
            return await GetAllWithIncludes(x => x.Konobar).ToListAsync();
        }

        public async Task<List<Sto>> VratiStolove(List<int> ids)
        {
            return await Find(e => ids.Contains(e.Id)).ToListAsync();
        }

        public async Task<Sto> VratiSto(int id)
        {
            return await FindWithIncludes(x => x.Id == id, x => x.Konobar).FirstOrDefaultAsync();
        }

        public async Task<List<Sto>> VratiStoloveKonobara(int id)
        {
            return await Find(x => x.KonobarId == id).ToListAsync();
        }

        public async Task<List<Sto>> VratiSveSlobodneIliZauzeteStolove(bool slobodan)
        {
            return await FindWithIncludes(x => x.Slobodan == slobodan, x => x.Konobar).ToListAsync();
        }
    }
}
