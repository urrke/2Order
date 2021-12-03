using _2Order.Domain.Model;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _2Order.DataLayer.Services
{
    public class KorisnikService
    {
        private UnitOfWork.UnitOfWork unitOfWork;

        public KorisnikService(_2OrderContext context)
        {
            this.unitOfWork = new UnitOfWork.UnitOfWork(context);
        }

        public async Task<IList<Korisnik>> VratiSveKorisnike()
        {
            IList<Korisnik> result = await unitOfWork.KorisnikRepository.VratiSveKorisnike();
            return result;
        }

        public async Task<Korisnik> VratiKorisnika(int id)
        {
            Korisnik result = await unitOfWork.KorisnikRepository.VratiKorisnika(id);
            return result;
        }

        public async Task<Korisnik> VratiKorisnikaPoEmailu(string email)
        {
            Korisnik result = await unitOfWork.KorisnikRepository.VratiKorisnikaPoEmailu(email);
            return result;
        }

        public async Task<List<Korisnik>> VratiKorisnikePoTipu(string tip)
        {
            List<Korisnik> result = await unitOfWork.KorisnikRepository.VratiKorisnikePoTipu(tip);
            return result;
        }

        public async Task<Korisnik> DodajKorisnika(Korisnik k)
        {
            var korisnik = unitOfWork.KorisnikRepository.Add(k);
            await unitOfWork.Commit();
            return korisnik;
        }

        public async Task ObrisiKorisnika(int id)
        {
            Korisnik k = unitOfWork.KorisnikRepository.Get(id);
            if (k != null)
            {
                unitOfWork.KorisnikRepository.Delete(k);
                await unitOfWork.Commit();
            }
        }

        public async Task ObrisiKorisnike(List<int> ids)
        {
            List<Korisnik> korisnici = await unitOfWork.KorisnikRepository.VratiKorisnike(ids);
            List<Recenzija> sveRecenzije = new List<Recenzija>();
            List<Porudzbina> svePorudzbine = new List<Porudzbina>();
            List<Racun> sviRacuni = new List<Racun>();
            List<Korisnik> sviKorisnici = new List<Korisnik>();
            foreach(Korisnik k in korisnici)
            {
                List<Recenzija> recenzije = await unitOfWork.RecenzijaRepository.VratiRecenzijeKorisnika(k.Id);
                List<Porudzbina> porudzbine = await unitOfWork.PorudzbinaRepository.VratiPorudzbineKorisnika(k.Id);
                List<Racun> racuni = await unitOfWork.RacunRepository.VratiRacuneKorisnika(k.Id);
                sveRecenzije = sveRecenzije.Concat(recenzije).ToList();
                svePorudzbine = svePorudzbine.Concat(porudzbine).ToList();
                sviRacuni = sviRacuni.Concat(racuni).ToList();
                sviKorisnici.Add(k);
            }
            unitOfWork.RecenzijaRepository.DeleteRange(sveRecenzije);
            unitOfWork.PorudzbinaRepository.DeleteRange(svePorudzbine);
            unitOfWork.RacunRepository.DeleteRange(sviRacuni);
            unitOfWork.KorisnikRepository.DeleteRange(sviKorisnici);
            await unitOfWork.Commit();
        }

        public async Task AzurirajKorisnika(Korisnik k)
        {
            Korisnik korisnik = unitOfWork.KorisnikRepository.Get(k.Id);
            if (korisnik != null)
            {
                if (k.Sifra == null)
                    k.Sifra = korisnik.Sifra;
                unitOfWork.KorisnikRepository.Update(k);
                await unitOfWork.Commit();
            }
        }

        public async Task AzurirajKorisnike(List<Korisnik> korisnici)
        {
            if(korisnici.Count > 0)
            {
                unitOfWork.KorisnikRepository.UpdateRange(korisnici);
                await unitOfWork.Commit();
            }
        }
    }
}
