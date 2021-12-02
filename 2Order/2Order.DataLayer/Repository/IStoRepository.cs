using _2Order.Domain.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _2Order.DataLayer.Repository
{
    public interface IStoRepository : IRepository<Sto>
    {
        Task<List<Sto>> VratiSveStolove();
        Task<List<Sto>> VratiStolove(List<int> ids);
        Task<Sto> VratiSto(int id);
        Task<List<Sto>> VratiStoloveKonobara(int id);
        Task<List<Sto>> VratiSveSlobodneIliZauzeteStolove(bool slobodan);
    }
}
