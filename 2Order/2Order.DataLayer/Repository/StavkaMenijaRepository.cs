using _2Order.Domain.Model;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _2Order.DataLayer.Repository
{
    public class StavkaMenijaRepository : Repository<StavkaMenija>, IStavkaMenijaRepository
    {
        public StavkaMenijaRepository(_2OrderContext context) : base(context)
        {

        }

        public async Task<List<StavkaMenija>> VratiCeoMeni()
        {
            return await All().ToListAsync();
        }

        public async Task<StavkaMenija> VratiStavkuMenija(int id)
        {
            return await Find(x => x.Id == id).FirstOrDefaultAsync();
        }

        public async Task<List<StavkaMenija>> VratiStavkeMenija(List<int> ids)
        {
            return await Find(e => ids.Contains(e.Id)).ToListAsync();
        }

        public async Task<List<StavkaMenija>> VratiStavkeMenijaPoTipu(string tip)
        {
            return await Find(x => x.Tip == tip).ToListAsync();
        }

        public async Task<List<StavkaMenija>> VratiStavkeMenijaPoGrupi(string grupa)
        {
            return await Find(x => x.Grupa == grupa).ToListAsync();
        }

        public async Task<List<string>> VratiGrupe(string tip)
        {
            List<string> result = await context.StavkeMenija.Where(x => x.Tip == tip).Select(x => x.Grupa).Distinct().ToListAsync();
            return result;
        }
    }
}
