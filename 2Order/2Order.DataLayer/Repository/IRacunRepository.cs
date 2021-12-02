using _2Order.Domain.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _2Order.DataLayer.Repository
{
    public interface IRacunRepository : IRepository<Racun>
    {
        Task<List<Racun>> VratiSveRacune();
        Task<Racun> VratiRacun(int id);
        Task<List<Racun>> VratiRacune(List<int> ids);
        Task<List<Racun>> VratiRacunePoTipu(string tip);
        Task<List<Racun>> VratiRacuneKorisnika(int korisnikId);
        Task<List<Racun>> VratiRacuneSaStolom(int id);
        Task<List<Racun>> VratiRacunePoDatumu(DateTime datum);
        Task<List<Racun>> VratiRacunePreDatuma(DateTime datum);
    }
}
