using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Threading.Tasks;


namespace _2OrderLibrary
{
    public class DataProvider
    {
        public static async Task<Korisnik> GetUser(_2OrderDbContext db, int id)
        {
            Korisnik k = await db.Korisnici.FindAsync(id);
            return k;
        }

        public static async Task<Korisnik> GetUser(_2OrderDbContext db, string email, string password)
        {
            Korisnik k = await db.Korisnici.Where(x => x.Email == email && x.Sifra == password).FirstOrDefaultAsync();
            return k;
        }

        public static async Task<List<Korisnik>> GetUsers(_2OrderDbContext db, string type)
        {
            List<Korisnik> users = await db.Korisnici.Where(x => x.tipKorisnika == type).ToListAsync();
            return users;
        }

        public static async Task AddNewUser(_2OrderDbContext db, Korisnik user)
        {
            db.Korisnici.Add(user);
            await db.SaveChangesAsync();
        }

        public static async Task DeleteUser(_2OrderDbContext db, int userId)
        {
            Korisnik k = db.Korisnici.Find(userId);
            if (k != null)
            {
                db.Korisnici.Remove(k);
                await db.SaveChangesAsync();
            }
        }

        public static async Task UpdateUser(_2OrderDbContext db, Korisnik user)
        {
            Korisnik existingUser = db.Korisnici.Find(user.Id);
            if(existingUser != null)
            {
                existingUser.Ime = user.Ime;
                existingUser.Prezime = user.Prezime;
                existingUser.Email = user.Email;
                existingUser.Sifra = user.Sifra;

                db.Korisnici.Update(existingUser);
                await db.SaveChangesAsync();
            }
        }

        public static async Task<List<Meni>> GetMenu(_2OrderDbContext db)
        {
            List<Meni> meni = await db.StavkeMenija.ToListAsync();
            return meni;
        }

        public static async Task<List<Meni>> GetMenuByType(_2OrderDbContext db, string tip)
        {
            List<Meni> meni = await db.StavkeMenija.Where(x=>x.Tip==tip).ToListAsync();
            return meni;
        }

        public static async Task<List<Meni>> GetMenuByGroup(_2OrderDbContext db, string grupa)
        {
            List<Meni> meni = await db.StavkeMenija.Where(x => x.Grupa == grupa).ToListAsync();
            return meni;
        }

        public static async Task<Meni> GetMenuItem(_2OrderDbContext db, int id)
        {
            Meni m = await db.StavkeMenija.Where(x => x.Id == id).FirstOrDefaultAsync();
            return m;
        }

        public static async Task AddMenuItem(_2OrderDbContext db, Meni newItem)
        {
            db.StavkeMenija.Add(newItem);
            await db.SaveChangesAsync();
        }

        public static async Task MenuItemPriceChange(_2OrderDbContext db, int id, float newPrice)
        {
            Meni existingItem = await db.StavkeMenija.Where(x => x.Id == id).FirstOrDefaultAsync();
            if(existingItem!=null)
            {
                existingItem.Cena = newPrice;

                db.StavkeMenija.Update(existingItem);
                await db.SaveChangesAsync();
            }
        }

        public static async Task DeleteMenuItem(_2OrderDbContext db, int id)
        {
            Meni menuItem = await db.StavkeMenija.Where(x => x.Id == id).FirstOrDefaultAsync();
            if(menuItem!=null)
            {
                db.StavkeMenija.Remove(menuItem);
                await db.SaveChangesAsync();
            }
        }

        public static async Task<List<Dostava>> GetDeliveries(_2OrderDbContext db)
        {
            List<Dostava> dostave = await db.Dostave.Include(x=>x.StavkaMenija).Include(x=>x.Korisnik).ToListAsync();
            return dostave;
        }

        public static async Task<object> GetTodayDeliveries(_2OrderDbContext db)
        {
            DateTime danas = DateTime.Now;
            List<Dostava> dostave = await db.Dostave.Include(x => x.StavkaMenija)
                                                    .Include(x => x.Korisnik)
                                                    .Where(x=> x.Vreme.Month == DateTime.Now.Month && x.Vreme.Day == DateTime.Now.Day).ToListAsync();
            return dostave;
        }

        public static async Task<Dostava> GetDelivery(_2OrderDbContext db, int id)
        {
            Dostava d = await db.Dostave.Include(x => x.StavkaMenija).Include(x => x.Korisnik).Where(x => x.Id == id).FirstOrDefaultAsync();
            return d;
        }

        public static async Task<List<Dostava>> GetUserDeliveries(_2OrderDbContext db, int id)
        {
            List<Dostava> dostave = await db.Dostave.Include(x => x.StavkaMenija).Include(x=>x.Korisnik).Where(x=>x.Korisnik.Id == id).ToListAsync();
            return dostave;
        }

        public static async Task<List<Dostava>> GetDeliveriesWithPassword(_2OrderDbContext db, string password)
        {
            List<Dostava> dostave = await db.Dostave.Include(x => x.StavkaMenija).Include(x => x.Korisnik).Where(x => x.Sifra == password).ToListAsync();
            return dostave;
        }

        public static async Task AddDelivery(_2OrderDbContext db, Dostava newDelivery)
        {
            db.Dostave.Add(newDelivery);
            await db.SaveChangesAsync();
        }

        public static async Task DeleteDelivery(_2OrderDbContext db, int id)
        {
            Dostava d = db.Dostave.Find(id);
            if(d!=null)
            {
                db.Dostave.Remove(d);
                await db.SaveChangesAsync();
            }
        }

        public static async Task UpdateDelivery(_2OrderDbContext db, int id, string newAddress)
        {
            Dostava existingDelivery = await db.Dostave.FindAsync(id);
            if(existingDelivery!=null)
            {
                existingDelivery.Adresa = newAddress;

                db.Dostave.Update(existingDelivery);
                await db.SaveChangesAsync();
            }
        }

        public static async Task<Porudzbina> VratiPorudzbinu(_2OrderDbContext db, int idPorudzbine)
        {
            Porudzbina p = await db.Porudzbine.Include(x => x.Korisnik).Where(x => x.Id == idPorudzbine).FirstOrDefaultAsync();
            if (p == null)
                throw new Exception("Porudzbina ne postoji!");
            return p;
        }

        public static async Task<IList<Porudzbina>> VratiSvePorudzbine(_2OrderDbContext db)
        {
            IList<Porudzbina> p = await db.Porudzbine.Include(x => x.Korisnik).ToListAsync<Porudzbina>();
            if (p.Count == 0)
                throw new Exception("Ne postoje porudzbine!");
            return p;
        }

        public static async Task ObrisiPorudzbinu(_2OrderDbContext db, int idPorudzbine)
        {
            Porudzbina p = await db.Porudzbine.Where(x => x.Id == idPorudzbine).FirstOrDefaultAsync();
            if (p == null)
                throw new Exception("Porudzbina ne postoji!");
            db.Porudzbine.Remove(p);
            await db.SaveChangesAsync();
        }

        public static async Task<IList<Porudzbina>> VratiSvePorudzbineKorisnika(_2OrderDbContext db, int idKorisnika)
        {
            Korisnik k = await db.Korisnici.Where(x => x.Id == idKorisnika).FirstOrDefaultAsync();
            if(k==null)
                throw new Exception("Ne postoji korisnik!");
            IList<Porudzbina> p = await db.Porudzbine.Include(x => x.Korisnik).Where(x => x.KorisnikId == idKorisnika).ToListAsync<Porudzbina>();
            if (p.Count == 0)
                throw new Exception("Ne postoje porudzbine!");
            return p;
        }

        public static async Task DodajPorudzbinu(_2OrderDbContext db, Porudzbina porudzbina)
        {
            Korisnik k = await db.Korisnici.Where(x => x.Id == porudzbina.KorisnikId).FirstOrDefaultAsync();
            if (k == null)
                throw new Exception("Ne postoji korisnik!");

            db.Porudzbine.Add(porudzbina);
            await db.SaveChangesAsync();
        }

        public static async Task<Recenzija> VratiRecenziju(_2OrderDbContext db, int idRecenzije)
        {
            Recenzija r = await db.Recenzije.Include(x=>x.Korisnik).Where(x => x.Id == idRecenzije).FirstOrDefaultAsync();
            if (r == null)
                throw new Exception("Recenzija ne postoji!");
            return r;
        }

        public static async Task<IList<Recenzija>> VratiSveRecenzije(_2OrderDbContext db)
        {
            IList<Recenzija> r = await db.Recenzije.Include(x => x.Korisnik).ToListAsync<Recenzija>();
            if (r.Count == 0)
                throw new Exception("Ne postoje recenzije!");
            return r;
        }

        public static async Task ObrisiRecenziju(_2OrderDbContext db, int idRecenzije)
        {
            Recenzija r = await db.Recenzije.Where(x => x.Id == idRecenzije).FirstOrDefaultAsync();
            if (r == null)
                throw new Exception("Recenzija ne postoji!");
            db.Recenzije.Remove(r);
            await db.SaveChangesAsync();
        }

        public static async Task<IList<Recenzija>> VratiSveRecenzijeKorisnika(_2OrderDbContext db, int idKorisnika)
        {
            Korisnik k = await db.Korisnici.Where(x => x.Id == idKorisnika).FirstOrDefaultAsync();
            if (k == null)
                throw new Exception("Ne postoji korisnik!");
            IList<Recenzija> r = await db.Recenzije.Where(x => x.KorisnikId == idKorisnika).ToListAsync<Recenzija>();
            if (r.Count == 0)
                throw new Exception("Ne postoje recenzije!");
            return r;
        }

        public static async Task DodajRecenziju(_2OrderDbContext db, Recenzija recenzija)
        {
            Korisnik k = await db.Korisnici.Where(x => x.Id == recenzija.KorisnikId).FirstOrDefaultAsync();
            if (k == null)
                throw new Exception("Ne postoji korisnik!");
            db.Recenzije.Add(recenzija);
            await db.SaveChangesAsync();
        }

        public static async Task<Sto> VratiSto(_2OrderDbContext db, int idStola)
        {
            Sto s = await db.Stolovi.Include(x => x.Konobar).Where(x => x.Id == idStola).FirstOrDefaultAsync();
            if (s == null)
                throw new Exception("Sto ne postoji!");
            return s;
        }

        public static async Task<IList<Sto>> VratiSveStolove(_2OrderDbContext db)
        {
            IList<Sto> s = await db.Stolovi.Include(x => x.Konobar).ToListAsync<Sto>();
            if (s.Count == 0)
                throw new Exception("Ne postoje stolovi!");
            return s;
        }

        public static async Task ObrisiSto(_2OrderDbContext db, int idStola)
        {
            Sto s = await db.Stolovi.Where(x => x.Id == idStola).FirstOrDefaultAsync();
            IList<Racun> p = await db.Racuni.Where(x => x.Sto.Id == idStola).ToListAsync<Racun>();
            if (p.Count > 0)
            {
                for (int i = 0; i < p.Count; i++)
                    db.Racuni.Remove(p.ElementAt(i));
            }
            if (s == null)
                throw new Exception("Sto ne postoji!");
            db.Stolovi.Remove(s);
            await db.SaveChangesAsync();
        }

        public static async Task<IList<Sto>> VratiSveStoloveKonobara(_2OrderDbContext db, int idKorisnika)
        {
            Korisnik k = await db.Korisnici.Where(x => x.Id == idKorisnika).FirstOrDefaultAsync();
            if (k == null)
                throw new Exception("Ne postoji korisnik!");
            IList<Sto> s = await db.Stolovi.Where(x => x.KonobarId == idKorisnika).ToListAsync<Sto>();
            if (s.Count == 0)
                throw new Exception("Ne postoje stolovi!");
            return s;
        }

        public static async Task<IList<Sto>> VratiSveZauzeteIliSlobodneStolove(_2OrderDbContext db, bool slobodan)
        {
            IList<Sto> s = await db.Stolovi.Include(x => x.Konobar).Where(x => x.Slobodan == slobodan).ToListAsync<Sto>();
            if (s.Count == 0)
                throw new Exception("Ne postoje stolovi!");
            return s;
        }

        public static async Task DodajSto(_2OrderDbContext db, Sto sto)
        {
            Korisnik k = await db.Korisnici.Where(x => x.Id == sto.KonobarId).FirstOrDefaultAsync();
            if (k == null)
                throw new Exception("Ne postoji konobar!");
            db.Stolovi.Add(sto);
            await db.SaveChangesAsync();
        }

        public static async Task AzurirajSto(_2OrderDbContext db, Sto sto)
        {
            Sto s = await db.Stolovi.Where(x => x.Id == sto.Id).FirstOrDefaultAsync();
            if (s == null)
                throw new Exception("Ne postoji sto!");
            s.Oznaka = sto.Oznaka;
            s.Slobodan = sto.Slobodan;
            s.BrojMesta = sto.BrojMesta;
            db.Stolovi.Update(s);
            await db.SaveChangesAsync();
        }

        public static async Task<Racun> VratiRacun(_2OrderDbContext db, int idRacuna)
        {
            Racun r = await db.Racuni.Include(x => x.ListaPorudzbina).ThenInclude(x => x.Korisnik).Where(x => x.Id == idRacuna).FirstOrDefaultAsync();
            return r;
        }
    }

    
}
