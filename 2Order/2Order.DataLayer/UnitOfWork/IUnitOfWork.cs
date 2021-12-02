using _2Order.DataLayer.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _2Order.DataLayer.UnitOfWork
{
    public interface IUnitOfWork
    {
        IKorisnikRepository KorisnikRepository { get; }
        IStavkaMenijaRepository StavkaMenijaRepository { get; }
        IPorudzbinaRepository PorudzbinaRepository { get; }
        IRacunRepository RacunRepository { get; }
        IRecenzijaRepository RecenzijaRepository { get; }
        IStoRepository StoRepository { get; }
        Task Commit();
        Task Rollback();
    }
}
