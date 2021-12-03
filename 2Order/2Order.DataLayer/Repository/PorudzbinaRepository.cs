using _2Order.Domain.Model;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _2Order.DataLayer.Repository
{
    public class PorudzbinaRepository : Repository<Porudzbina>, IPorudzbinaRepository
    {
        public PorudzbinaRepository(_2OrderContext context) : base(context)
        {

        }

        public async Task<List<Porudzbina>> VratiSvePorudzbine()
        {
            return await GetAllWithIncludes(x => x.Korisnik, x => x.StavkaMenija).ToListAsync();
        }

        public async Task<Porudzbina> VratiPorudzbinu(int id)
        {
            return await FindWithIncludes(x => x.Id == id, x => x.StavkaMenija, x => x.Korisnik).FirstOrDefaultAsync();
        }

        public async Task<List<Porudzbina>> VratiPorudzbine(List<int> ids)
        {
            return await Find(x => ids.Contains(x.Id)).ToListAsync();
        }

        public async Task<List<Porudzbina>> VratiPorudzbineKorisnika(int id)
        {
            return await FindWithIncludes(x => x.KorisnikId == id, x => x.StavkaMenija).ToListAsync();
        }

        public async Task<List<Porudzbina>> VratiPorudzbineRacuna(int id)
        {
            return await Find(x => x.RacunId == id).ToListAsync();
        }

        public async Task<List<Porudzbina>> VratiPorudzbineSaStavkomMenija(int id)
        {
            return await Find(x => x.StavkaMenijaId == id).ToListAsync();
        }
    }
}
