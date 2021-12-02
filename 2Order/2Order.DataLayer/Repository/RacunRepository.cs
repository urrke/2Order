using _2Order.Domain.Model;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _2Order.DataLayer.Repository
{
    public class RacunRepository : Repository<Racun>, IRacunRepository
    {
        public RacunRepository(_2OrderContext context) : base(context)
        {

        }

        public async Task<List<Racun>> VratiSveRacune()
        {
            return await context.Set<Racun>()
                   .Include(r => r.ListaPorudzbina).ThenInclude(p => p.StavkaMenija)
                   .Include(r => r.ListaPorudzbina).ThenInclude(p => p.Korisnik).ToListAsync();
        }

        public async Task<Racun> VratiRacun(int id)
        {
            return await context.Set<Racun>().Where(x => x.Id == id)
                   .Include(r => r.ListaPorudzbina).ThenInclude(p => p.StavkaMenija)
                   .Include(r => r.ListaPorudzbina).ThenInclude(p => p.Korisnik).FirstOrDefaultAsync();
        }

        public async Task<List<Racun>> VratiRacune(List<int> ids)
        {
            return await Find(x => ids.Contains(x.Id)).ToListAsync();
        }

        public async Task<List<Racun>> VratiRacunePoTipu(string tip)
        {
            return await context.Set<Racun>().Where(x => x.Tip == tip)
                   .Include(r => r.ListaPorudzbina).ThenInclude(p => p.StavkaMenija)
                   .Include(r => r.ListaPorudzbina).ThenInclude(p => p.Korisnik).ToListAsync();
        }

        public async Task<List<Racun>> VratiRacuneKorisnika(int korisnikId)
        {
            var sviRacuni = await VratiSveRacune();
            List<Racun> racuni = new List<Racun>();
            foreach (Racun r in sviRacuni)
            {
                foreach (Porudzbina p in r.ListaPorudzbina)
                {
                    if (p.KorisnikId == korisnikId)
                        racuni.Add(r);
                }
            }
            return racuni;
        }

        public async Task<List<Racun>> VratiRacuneSaStolom(int id)
        {
            return await Find(x => x.StoId == id).ToListAsync();
        }

        public async Task<List<Racun>> VratiRacunePoDatumu(DateTime datum)
        {
            return await FindWithIncludes(x => x.Vreme.Year == datum.Year && x.Vreme.Month == datum.Month && x.Vreme.Day == datum.Day, x => x.ListaPorudzbina).ToListAsync();
        }

        public async Task<List<Racun>> VratiRacunePreDatuma(DateTime datum)
        {
            return await FindWithIncludes(x => x.Vreme.Year < datum.Year && x.Vreme.Month < datum.Month && x.Vreme.Day < datum.Day, x => x.ListaPorudzbina).ToListAsync();
        }
    }
}
