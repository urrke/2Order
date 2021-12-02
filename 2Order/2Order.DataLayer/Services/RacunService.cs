﻿using _2Order.Domain.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _2Order.DataLayer.Services
{
    public class RacunService
    {
        private UnitOfWork.UnitOfWork unitOfWork;

        public RacunService(_2OrderContext context)
        {
            this.unitOfWork = new UnitOfWork.UnitOfWork(context);
        }

        public async Task<List<Racun>> VratiSveRacune()
        {
            List<Racun> result = await unitOfWork.RacunRepository.VratiSveRacune();
            return result;
        }

        public async Task<Racun> VratiRacun(int id)
        {
            Racun result = await unitOfWork.RacunRepository.VratiRacun(id);
            return result;
        }

        public async Task<List<Racun>> VratiRacunePoTipu(string tip)
        {
            List<Racun> result = await unitOfWork.RacunRepository.VratiRacunePoTipu(tip);
            return result;
        }

        public async Task<List<Racun>> VratiRacunePoDatumu(DateTime datum)
        {
            List<Racun> result = await unitOfWork.RacunRepository.VratiRacunePoDatumu(datum);
            return result;
        }

        public async Task<List<Racun>> VratiRacunePreDatuma(DateTime datum)
        {
            List<Racun> result = await unitOfWork.RacunRepository.VratiRacunePreDatuma(datum);
            return result;
        }

        public async Task<List<Racun>> VratiRacuneKorisnika(int korisnikId)
        {
            List<Racun> result = await unitOfWork.RacunRepository.VratiRacuneKorisnika(korisnikId);
            return result;
        }

        public async Task<Racun> DodajRacun(Racun r)
        {
            var racun = unitOfWork.RacunRepository.Add(r);
            await unitOfWork.Commit();
            return racun;
        }

        public async Task ObrisiRacun(int id)
        {
            Racun r = unitOfWork.RacunRepository.Get(id);
            if (r != null)
            {
                unitOfWork.RacunRepository.Delete(r);
                await unitOfWork.Commit();
            }
        }

        public async Task ObrisiRacune(List<int> ids)
        {
            List<Racun> racuni = await unitOfWork.RacunRepository.VratiRacune(ids);
            List<Porudzbina> svePorudzbine = new List<Porudzbina>();
            foreach(Racun r in racuni)
            {
                List<Porudzbina> porudzbine = await unitOfWork.PorudzbinaRepository.VratiPorudzbineRacuna(r.Id);
                svePorudzbine = svePorudzbine.Concat(porudzbine).ToList();
            }
            unitOfWork.PorudzbinaRepository.DeleteRange(svePorudzbine);
            unitOfWork.RacunRepository.DeleteRange(racuni);
            await unitOfWork.Commit();
        }

        public async Task AzurirajRacun(Racun r)
        {
            Racun racun = unitOfWork.RacunRepository.Get(r.Id);
            if (racun != null)
            {
                unitOfWork.RacunRepository.Update(r);
                await unitOfWork.Commit();
            }
        }
    }
}
