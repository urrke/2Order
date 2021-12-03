using _2Order.Domain.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _2Order.DataLayer.Services
{
    public class StoService
    {
        private UnitOfWork.UnitOfWork unitOfWork;

        public StoService(_2OrderContext context)
        {
            this.unitOfWork = new UnitOfWork.UnitOfWork(context);
        }

        public async Task<List<Sto>> VratiSveStolove()
        {
            List<Sto> result = await unitOfWork.StoRepository.VratiSveStolove();
            return result;
        }

        public async Task<Sto> VratiSto(int id)
        {
            Sto result = await unitOfWork.StoRepository.VratiSto(id);
            return result;
        }

        public async Task<List<Sto>> VratiStoloveKonobara(int id)
        {
            List<Sto> result = await unitOfWork.StoRepository.VratiStoloveKonobara(id);
            return result;
        }

        public async Task<List<Sto>> VratiSveSlobodneIliZauzeteStolove(bool slobodan)
        {
            List<Sto> result = await unitOfWork.StoRepository.VratiSveSlobodneIliZauzeteStolove(slobodan);
            return result;
        }

        public async Task<Sto> DodajSto(Sto s)
        {
            var sto = unitOfWork.StoRepository.Add(s);
            await unitOfWork.Commit();
            return sto;
        }

        public async Task ObrisiSto(int id)
        {
            Sto s = unitOfWork.StoRepository.Get(id);
            if (s != null)
            {
                unitOfWork.StoRepository.Delete(s);
                await unitOfWork.Commit();
            }
        }

        public async Task ObrisiStolove(List<int> ids)
        {
            List<Sto> stolovi = await unitOfWork.StoRepository.VratiStolove(ids);
            List<Racun> sviRacuni = new List<Racun>();
            List<Porudzbina> svePorudzbine = new List<Porudzbina>();
            foreach(Sto s in stolovi)
            {
                List<Racun> racuni = await unitOfWork.RacunRepository.VratiRacuneSaStolom(s.Id);
                sviRacuni = sviRacuni.Concat(racuni).ToList();
            }
            foreach(Racun r in sviRacuni)
            {
                List<Porudzbina> porudzbine = await unitOfWork.PorudzbinaRepository.VratiPorudzbineRacuna(r.Id);
                svePorudzbine = svePorudzbine.Concat(porudzbine).ToList();
            }
            unitOfWork.PorudzbinaRepository.DeleteRange(svePorudzbine);
            unitOfWork.RacunRepository.DeleteRange(sviRacuni);
            unitOfWork.StoRepository.DeleteRange(stolovi);
            await unitOfWork.Commit();
        }

        public async Task AzurirajSto(Sto s)
        {
            Sto sto = unitOfWork.StoRepository.Get(s.Id);
            if (sto != null)
            {
                unitOfWork.StoRepository.Update(s);
                await unitOfWork.Commit();
            }
        }

        public async Task AzurirajStolove(List<Sto> stolovi)
        {
            if(stolovi.Count > 0)
            {
                List<Sto> result = new List<Sto>();
                foreach(Sto s in stolovi)
                {
                    Sto noviSto = new Sto
                    {
                        Id = s.Id,
                        BrojMesta = s.BrojMesta,
                        Oznaka = s.Oznaka,
                        X = s.X,
                        Y = s.Y,
                        KonobarId = s.KonobarId,
                        Slobodan = s.Slobodan
                    };
                    result.Add(noviSto);
                }
                unitOfWork.StoRepository.UpdateRange(result);
                await unitOfWork.Commit();
            }
        }

        public async Task<Sto> ZauzmiIliOslobodiSto(string sifra, int idStola)
        {
            Sto s = unitOfWork.StoRepository.FindWithIncludes(x => x.Id == idStola, x => x.Konobar).FirstOrDefault();
            if(s != null)
            {
                s.Slobodan = !s.Slobodan;
                if(s.Slobodan == true)
                    s.Sifra = null;
                else
                    s.Sifra = sifra;
                var sto = unitOfWork.StoRepository.Update(s);
                await unitOfWork.Commit();
                sto.Konobar = s.Konobar;
                return sto;
            }
            throw new ArgumentNullException("Not found");
        }
    }
}
