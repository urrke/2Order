using _2Order.Domain.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _2Order.DataLayer.Services
{
    public class RecenzijaService
    {
        private UnitOfWork.UnitOfWork unitOfWork;

        public RecenzijaService(_2OrderContext context)
        {
            this.unitOfWork = new UnitOfWork.UnitOfWork(context);
        }

        public async Task<List<Recenzija>> VratiSveRecenzije()
        {
            List<Recenzija> result = await unitOfWork.RecenzijaRepository.VratiSveRecenzije();
            return result;
        }

        public async Task<Recenzija> VratiRecenziju(int id)
        {
            Recenzija result = await unitOfWork.RecenzijaRepository.VratiRecenziju(id);
            return result;
        }

        public async Task<Recenzija> VratiRecenzijuRacuna(int id)
        {
            Recenzija result = await unitOfWork.RecenzijaRepository.VratiRecenzijuRacuna(id);
            return result;
        }

        public async Task<List<Recenzija>> VratiRecenzijeRacuna(int id)
        {
            List<Recenzija> result = await unitOfWork.RecenzijaRepository.VratiRecenzijeRacuna(id);
            return result;
        }

        public async Task<List<Recenzija>> VratiRecenzijeKorisnika(int idKorisnika)
        {
            List<Recenzija> result = await unitOfWork.RecenzijaRepository.VratiRecenzijeKorisnika(idKorisnika);
            return result;
        }

        public async Task<List<Recenzija>> VratiRecenzijePoDatumu(DateTime datum)
        {
            List<Recenzija> result = await unitOfWork.RecenzijaRepository.VratiRecenzijePoDatumu(datum);
            return result;
        }

        public async Task<Recenzija> DodajRecenziju(Recenzija r)
        {
            var recenzija = unitOfWork.RecenzijaRepository.Add(r);
            await unitOfWork.Commit();
            return recenzija;
        }

        public async Task ObrisiRecenziju(int id)
        {
            Recenzija r = unitOfWork.RecenzijaRepository.Get(id);
            if (r != null)
            {
                unitOfWork.RecenzijaRepository.Delete(r);
                await unitOfWork.Commit();
            }
        }

        public async Task ObrisiRecenzije(List<int> ids)
        {
            List<Recenzija> recenzije = await unitOfWork.RecenzijaRepository.VratiRecenzije(ids);
            if (recenzije.Count > 0)
            {
                unitOfWork.RecenzijaRepository.DeleteRange(recenzije);
                await unitOfWork.Commit();
            }
        }

        public async Task AzurirajRecenziju(Recenzija r)
        {
            Recenzija recenzija = unitOfWork.RecenzijaRepository.Get(r.Id);
            if (recenzija != null)
            {
                unitOfWork.RecenzijaRepository.Update(r);
                await unitOfWork.Commit();
            }
        }
    }
}
