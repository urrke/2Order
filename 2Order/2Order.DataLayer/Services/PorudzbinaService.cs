using _2Order.Domain.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _2Order.DataLayer.Services
{
    public class PorudzbinaService
    {
        private UnitOfWork.UnitOfWork unitOfWork;

        public PorudzbinaService(_2OrderContext context)
        {
            this.unitOfWork = new UnitOfWork.UnitOfWork(context);
        }

        public async Task<List<Porudzbina>> VratiSvePorudzbine()
        {
            List<Porudzbina> result = await unitOfWork.PorudzbinaRepository.VratiSvePorudzbine();
            return result;
        }

        public async Task<Porudzbina> VratiPorudzbinu(int id)
        {
            Porudzbina result = await unitOfWork.PorudzbinaRepository.VratiPorudzbinu(id);
            return result;
        }

        public async Task<List<Porudzbina>> VratiPorudzbineKorisnika(int id)
        {
            List<Porudzbina> result = await unitOfWork.PorudzbinaRepository.VratiPorudzbineKorisnika(id);
            return result;
        }

        public async Task<Porudzbina> DodajPorudzbinu(Porudzbina d)
        {
            var porudzbina = unitOfWork.PorudzbinaRepository.Add(d);
            await unitOfWork.Commit();
            return porudzbina;
        }

        public async Task ObrisiPorudzbinu(int id)
        {
            Porudzbina p = unitOfWork.PorudzbinaRepository.Get(id);
            if (p != null)
            {
                unitOfWork.PorudzbinaRepository.Delete(p);
                await unitOfWork.Commit();
            }
        }

        public async Task ObrisiPorudzbine(List<int> ids)
        {
            List<Porudzbina> porudzbine = await unitOfWork.PorudzbinaRepository.VratiPorudzbine(ids);
            if(porudzbine.Count > 0)
            {
                unitOfWork.PorudzbinaRepository.DeleteRange(porudzbine);
                await unitOfWork.Commit();
            }
        }

        public async Task AzurirajPorudzbinu(Porudzbina p)
        {
            Porudzbina porudzbina = unitOfWork.PorudzbinaRepository.Get(p.Id);
            if (porudzbina != null)
            {
                unitOfWork.PorudzbinaRepository.Update(p);
                await unitOfWork.Commit();
            }
        }
    }
}
