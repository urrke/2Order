using _2Order.Domain.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _2Order.DataLayer.Repository
{
    public interface IRecenzijaRepository : IRepository<Recenzija>
    {
        Task<List<Recenzija>> VratiSveRecenzije();
        Task<Recenzija> VratiRecenziju(int id);
        Task<List<Recenzija>> VratiRecenzije(List<int> ids);
        Task<Recenzija> VratiRecenzijuRacuna(int id);
        Task<List<Recenzija>> VratiRecenzijeRacuna(int id);
        Task<List<Recenzija>> VratiRecenzijeKorisnika(int idKorisnika);
        Task<List<Recenzija>> VratiRecenzijePoDatumu(DateTime datum);
    }
}
