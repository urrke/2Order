using _2Order.Domain.Model;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _2Order.DataLayer.Repository
{
    public class RecenzijaRepository : Repository<Recenzija>, IRecenzijaRepository
    {
        public RecenzijaRepository(_2OrderContext context) : base(context)
        {

        }

        public async Task<List<Recenzija>> VratiSveRecenzije()
        {
            return await context.Set<Recenzija>()
                .Include(x => x.Racun).ThenInclude(x => x.ListaPorudzbina).ThenInclude(x => x.Korisnik)
                .ToListAsync();
        }

        public async Task<Recenzija> VratiRecenziju(int id)
        {
            return await context.Set<Recenzija>().Where(x => x.Id == id)
                .Include(x => x.Racun).ThenInclude(x => x.ListaPorudzbina).ThenInclude(x => x.Korisnik)
                .FirstOrDefaultAsync();
        }

        public async Task<List<Recenzija>> VratiRecenzije(List<int> ids)
        {
            return await Find(x => ids.Contains(x.Id)).ToListAsync();
        }

        public async Task<Recenzija> VratiRecenzijuRacuna(int id)
        {
            return await FindWithIncludes(x => x.RacunId == id, x => x.Racun).FirstOrDefaultAsync();
        }

        public async Task<List<Recenzija>> VratiRecenzijeRacuna(int id)
        {
            return await FindWithIncludes(x => x.RacunId == id, x => x.Racun).ToListAsync();
        }

        public async Task<List<Recenzija>> VratiRecenzijeKorisnika(int idKorisnika)
        {
            var sveRecenzije = await VratiSveRecenzije();
            List<Recenzija> result = new List<Recenzija>();
            foreach (Recenzija r in sveRecenzije)
            {
                foreach (Porudzbina p in r.Racun.ListaPorudzbina)
                {
                    if (p.KorisnikId == idKorisnika)
                        result.Add(r);
                }
            }
            return result;
        }

        public async Task<List<Recenzija>> VratiRecenzijePoDatumu(DateTime datum)
        {
            return await FindWithIncludes(x => x.Vreme.Year == datum.Year && x.Vreme.Month == datum.Month && x.Vreme.Day == datum.Day, x => x.Racun).ToListAsync();
        }
    }
}
