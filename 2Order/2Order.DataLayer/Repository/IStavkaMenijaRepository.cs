using _2Order.Domain.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _2Order.DataLayer.Repository
{
    public interface IStavkaMenijaRepository : IRepository<StavkaMenija>
    {
        Task<List<StavkaMenija>> VratiCeoMeni();
        Task<StavkaMenija> VratiStavkuMenija(int id);
        Task<List<StavkaMenija>> VratiStavkeMenija(List<int> ids);
        Task<List<StavkaMenija>> VratiStavkeMenijaPoTipu(string tip);
        Task<List<StavkaMenija>> VratiStavkeMenijaPoGrupi(string grupa);
        Task<List<string>> VratiGrupe(string tip);
    }
}
