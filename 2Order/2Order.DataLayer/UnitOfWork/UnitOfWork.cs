using _2Order.DataLayer.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _2Order.DataLayer.UnitOfWork
{
    public class UnitOfWork : IUnitOfWork
    {
        private _2OrderContext context;

        public UnitOfWork(_2OrderContext context)
        {
            this.context = context;
        }

        private IKorisnikRepository korisnikRepository;
        public IKorisnikRepository KorisnikRepository
        {
            get
            {
                if (korisnikRepository == null)
                {
                    korisnikRepository = new KorisnikRepository(context);
                }
                return korisnikRepository;
            }
        }

        private IStavkaMenijaRepository meniRepository;
        public IStavkaMenijaRepository StavkaMenijaRepository
        {
            get
            {
                if (meniRepository == null)
                {
                    meniRepository = new StavkaMenijaRepository(context);
                }
                return meniRepository;
            }
        }

        private IPorudzbinaRepository porudzbinaRepository;
        public IPorudzbinaRepository PorudzbinaRepository
        {
            get
            {
                if (porudzbinaRepository == null)
                {
                    porudzbinaRepository = new PorudzbinaRepository(context);
                }
                return porudzbinaRepository;
            }
        }

        private IRacunRepository racunRepository;
        public IRacunRepository RacunRepository
        {
            get
            {
                if (racunRepository == null)
                {
                    racunRepository = new RacunRepository(context);
                }
                return racunRepository;
            }
        }

        private IRecenzijaRepository recenzijaRepository;
        public IRecenzijaRepository RecenzijaRepository
        {
            get
            {
                if (recenzijaRepository == null)
                {
                    recenzijaRepository = new RecenzijaRepository(context);
                }
                return recenzijaRepository;
            }
        }

        private IStoRepository stoRepository;
        public IStoRepository StoRepository
        {
            get
            {
                if (stoRepository == null)
                {
                    stoRepository = new StoRepository(context);
                }
                return stoRepository;
            }
        }

        public async Task Commit()
        {
            await this.context.SaveChangesAsync();
        }

        public async Task Rollback()
        {
            await this.context.DisposeAsync();
        }
    }
}
