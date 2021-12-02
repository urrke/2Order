using _2Order.Domain.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _2Order.DataLayer.Repository
{
    public interface IKorisnikRepository : IRepository<Korisnik>
    {
        Task<List<Korisnik>> VratiSveKorisnike();
        Task<Korisnik> VratiKorisnika(int id);
        Task<List<Korisnik>> VratiKorisnike(List<int> lista);
        Task<Korisnik> VratiKorisnikaPoEmailu(string email);
        Task<List<Korisnik>> VratiKorisnikePoTipu(string tip);
    }
}
