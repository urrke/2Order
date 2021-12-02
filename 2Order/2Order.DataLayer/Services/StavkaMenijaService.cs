using _2Order.Domain.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _2Order.DataLayer.Services
{
    public class StavkaMenijaService
    {
        private UnitOfWork.UnitOfWork unitOfWork;

        public StavkaMenijaService(_2OrderContext context)
        {
            this.unitOfWork = new UnitOfWork.UnitOfWork(context);
        }

        public async Task<List<StavkaMenija>> VratiCeoMeni()
        {
            List<StavkaMenija> result = await unitOfWork.StavkaMenijaRepository.VratiCeoMeni();
            return result;
        }

        public async Task<StavkaMenija> VratiStavkuMenija(int id)
        {
            StavkaMenija result = await unitOfWork.StavkaMenijaRepository.VratiStavkuMenija(id);
            return result;
        }

        public async Task<List<StavkaMenija>> VratiStavkeMenijaPoTipu(string tip)
        {
            List<StavkaMenija> result = await unitOfWork.StavkaMenijaRepository.VratiStavkeMenijaPoTipu(tip);
            return result;
        }

        public async Task<List<StavkaMenija>> VratiStavkeMenijaPoGrupi(string grupa)
        {
            List<StavkaMenija> result = await unitOfWork.StavkaMenijaRepository.VratiStavkeMenijaPoGrupi(grupa);
            return result;
        }

        public async Task<StavkaMenija> DodajStavku(StavkaMenija s)
        {
            var stavka = unitOfWork.StavkaMenijaRepository.Add(s);
            await unitOfWork.Commit();
            return stavka;
        }

        public async Task ObrisiStavku(int id)
        {
            StavkaMenija s = unitOfWork.StavkaMenijaRepository.Get(id);
            if (s != null)
            {
                unitOfWork.StavkaMenijaRepository.Delete(s);
                await unitOfWork.Commit();
            }
        }

        public async Task ObrisiStavke(List<int> ids)
        {
            List<StavkaMenija> stavke = await unitOfWork.StavkaMenijaRepository.VratiStavkeMenija(ids);
            List<Porudzbina> svePorudzbine = new List<Porudzbina>();
            foreach (StavkaMenija stavka in stavke)
            {
                List<Porudzbina> porudzbine = await unitOfWork.PorudzbinaRepository.VratiPorudzbineSaStavkomMenija(stavka.Id);
                svePorudzbine = svePorudzbine.Concat(porudzbine).ToList();
            }
            unitOfWork.PorudzbinaRepository.DeleteRange(svePorudzbine);
            unitOfWork.StavkaMenijaRepository.DeleteRange(stavke);
            await unitOfWork.Commit();
        }

        public async Task AzurirajStavku(StavkaMenija s)
        {
            StavkaMenija stavka = unitOfWork.StavkaMenijaRepository.Get(s.Id);
            if (stavka != null)
            {
                unitOfWork.StavkaMenijaRepository.Update(s);
                await unitOfWork.Commit();
            }
        }

        public async Task AzurirajStavke(List<StavkaMenija> stavke)
        {
            if(stavke.Count > 0)
            {
                unitOfWork.StavkaMenijaRepository.UpdateRange(stavke);
                await unitOfWork.Commit();
            }
        }

        public async Task<List<string>> VratiGrupe(string tip)
        {
            List<string> result = await unitOfWork.StavkaMenijaRepository.VratiGrupe(tip);
            return result;
        }
    }
}
