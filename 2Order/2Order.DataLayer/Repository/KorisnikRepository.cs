using _2Order.Domain.Model;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _2Order.DataLayer.Repository
{
    public class KorisnikRepository : Repository<Korisnik>, IKorisnikRepository
    {
        public KorisnikRepository(_2OrderContext context) : base(context)
        {
            
        }

        public async Task<List<Korisnik>> VratiSveKorisnike()
        {
            return await All().ToListAsync();
        }

        public async Task<Korisnik> VratiKorisnika(int id)
        {
            return await Find(k => k.Id == id).FirstOrDefaultAsync();
        }

        public async Task<List<Korisnik>> VratiKorisnike(List<int> lista)
        {
            return await Find(e => lista.Contains(e.Id)).ToListAsync();
        }

        public async Task<Korisnik> VratiKorisnikaPoEmailu(string email)
        {
            return await Find(k => k.Email == email).AsNoTracking().FirstOrDefaultAsync();
        }

        public async Task<List<Korisnik>> VratiKorisnikePoTipu(string tip)
        {
            return await Find(k => k.Tip == tip).ToListAsync();
        }
    }
}
