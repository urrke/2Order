using _2Order.Domain.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _2Order.DataLayer.Repository
{
    public interface IPorudzbinaRepository : IRepository<Porudzbina>
    {
        Task<List<Porudzbina>> VratiSvePorudzbine();
        Task<Porudzbina> VratiPorudzbinu(int id);
        Task<List<Porudzbina>> VratiPorudzbine(List<int> ids);
        Task<List<Porudzbina>> VratiPorudzbineKorisnika(int id);
        Task<List<Porudzbina>> VratiPorudzbineRacuna(int id);
        Task<List<Porudzbina>> VratiPorudzbineSaStavkomMenija(int id);
        Task<List<Porudzbina>> VratiPorudzbineSaIstomSifrom(string password);
    }
}
