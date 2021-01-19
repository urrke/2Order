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
        //private static _2OrderDbContext db;
        /*public DataProvider(_2OrderDbContext dataBase)
        {
            db = dataBase;
        }*/

        public static void GetPorudzbina(_2OrderDbContext db, int id)
        {
            //_2OrderDbContext db = new _2OrderDbContext();
            Porudzbina p = db.Porudzbine.Include(x=>x.Korisnik).Where(x => x.Id == id).FirstOrDefault();

        }

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
		
		public static Porudzbina VratiPorudzbinu(_2OrderDbContext db, int idPorudzbine)
        {
            Porudzbina p = db.Porudzbine.Include(x => x.Korisnik).Include(x=>x.StavkaMenija).Where(x => x.Id == idPorudzbine).FirstOrDefault();
            if (p == null)
                throw new Exception("Porudzbina ne postoji!");
            return p;
        }

        public static IList<Porudzbina> VratiSvePorudzbine(_2OrderDbContext db)
        {
            IList<Porudzbina> p = db.Porudzbine.Include(x => x.Korisnik).Include(x => x.StavkaMenija).ToList<Porudzbina>();
            if (p.Count == 0)
                throw new Exception("Ne postoje porudzbine!");
            return p;
        }

        public static void ObrisiPorudzbinu(_2OrderDbContext db, int idPorudzbine)
        {
            Porudzbina p = db.Porudzbine.Where(x => x.Id == idPorudzbine).FirstOrDefault();
            if (p == null)
                throw new Exception("Porudzbina ne postoji!");
            db.Remove(p);
            db.SaveChanges();
        }

        public static IList<Porudzbina> VratiSvePorudzbineKorisnika(_2OrderDbContext db, int idKorisnika)
        {
            Korisnik k = db.Korisnici.Where(x => x.Id == idKorisnika).FirstOrDefault();
            if(k==null)
                throw new Exception("Ne postoji korisnik!");
            IList<Porudzbina> p = db.Porudzbine.Include(x => x.Korisnik).Include(x=>x.StavkaMenija).Where(x => x.KorisnikId == idKorisnika).ToList<Porudzbina>();
            if (p.Count == 0)
                throw new Exception("Ne postoje porudzbine!");
            return p;
        }

        public static void DodajPorudzbinu(_2OrderDbContext db, Porudzbina porudzbina)
        {
            Korisnik k = db.Korisnici.Where(x => x.Id == porudzbina.KorisnikId).FirstOrDefault();
            if (k == null)
                throw new Exception("Ne postoji korisnik!");
            Sto s = db.Stolovi.Where(x => x.Id == porudzbina.StoId).FirstOrDefault();
            if (s == null)
                throw new Exception("Ne postoji sto!");
            db.Porudzbine.Add(porudzbina);
            db.SaveChanges();
        }

        public static Recenzija VratiRecenziju(_2OrderDbContext db, int idRecenzije)
        {
            Recenzija r = db.Recenzije.Include(x=>x.Korisnik).Where(x => x.Id == idRecenzije).FirstOrDefault();
            if (r == null)
                throw new Exception("Recenzija ne postoji!");
            return r;
        }

        public static IList<Recenzija> VratiSveRecenzije(_2OrderDbContext db)
        {
            IList<Recenzija> r = db.Recenzije.Include(x => x.Korisnik).ToList<Recenzija>();
            if (r.Count == 0)
                throw new Exception("Ne postoje recenzije!");
            return r;
        }

        public static void ObrisiRecenziju(_2OrderDbContext db, int idRecenzije)
        {
            Recenzija r = db.Recenzije.Where(x => x.Id == idRecenzije).FirstOrDefault();
            if (r == null)
                throw new Exception("Recenzija ne postoji!");
            db.Remove(r);
            db.SaveChanges();
        }

        public static IList<Recenzija> VratiSveRecenzijeKorisnika(_2OrderDbContext db, int idKorisnika)
        {
            Korisnik k = db.Korisnici.Where(x => x.Id == idKorisnika).FirstOrDefault();
            if (k == null)
                throw new Exception("Ne postoji korisnik!");
            IList<Recenzija> r = db.Recenzije.Where(x => x.KorisnikId == idKorisnika).ToList<Recenzija>();
            if (r.Count == 0)
                throw new Exception("Ne postoje recenzije!");
            return r;
        }

        public static void DodajRecenziju(_2OrderDbContext db, Recenzija recenzija)
        {
            Korisnik k = db.Korisnici.Where(x => x.Id == recenzija.KorisnikId).FirstOrDefault();
            if (k == null)
                throw new Exception("Ne postoji korisnik!");
            db.Recenzije.Add(recenzija);
            db.SaveChanges();
        }

        public static Sto VratiSto(_2OrderDbContext db, int idStola)
        {
            Sto s = db.Stolovi.Include(x => x.Konobar).Where(x => x.Id == idStola).FirstOrDefault();
            if (s == null)
                throw new Exception("Sto ne postoji!");
            return s;
        }

        public static IList<Sto> VratiSveStolove(_2OrderDbContext db)
        {
            IList<Sto> s = db.Stolovi.Include(x => x.Konobar).ToList<Sto>();
            if (s.Count == 0)
                throw new Exception("Ne postoje stolovi!");
            return s;
        }

        public static void ObrisiSto(_2OrderDbContext db, int idStola)
        {
            Sto s = db.Stolovi.Where(x => x.Id == idStola).FirstOrDefault();
            
            IList<Porudzbina> p = db.Porudzbine.Where(x => x.Sto.Id == idStola).ToList<Porudzbina>();
            if (p.Count > 0)
            {
                for (int i = 0; i < p.Count; i++)
                    db.Remove(p);
            }
            if (s == null)
                throw new Exception("Sto ne postoji!");
            db.Remove(s);
            db.SaveChanges();
        }

        public static IList<Sto> VratiSveStoloveKonobara(_2OrderDbContext db, int idKorisnika)
        {
            Korisnik k = db.Korisnici.Where(x => x.Id == idKorisnika).FirstOrDefault();
            if (k == null)
                throw new Exception("Ne postoji korisnik!");
            IList<Sto> s = db.Stolovi.Where(x => x.KonobarId == idKorisnika).ToList<Sto>();
            if (s.Count == 0)
                throw new Exception("Ne postoje stolovi!");
            return s;
        }

        public static IList<Sto> VratiSveZauzeteIliSlobodneStolove(_2OrderDbContext db, bool slobodan)
        {
            IList<Sto> s = db.Stolovi.Include(x => x.Konobar).Where(x => x.Slobodan == slobodan).ToList<Sto>();
            if (s.Count == 0)
                throw new Exception("Ne postoje stolovi!");
            return s;
        }

        public static void DodajSto(_2OrderDbContext db, Sto sto)
        {
            Korisnik k = db.Korisnici.Where(x => x.Id == sto.KonobarId).FirstOrDefault();
            if (k == null)
                throw new Exception("Ne postoji konobar!");
            db.Stolovi.Add(sto);
            db.SaveChanges();
        }

        public static void AzurirajSto(_2OrderDbContext db, Sto sto)
        {
            Sto s = db.Stolovi.Where(x => x.Id == sto.Id).FirstOrDefault();
            s.Oznaka = sto.Oznaka;
            s.Slobodan = sto.Slobodan;
            s.BrojMesta = sto.BrojMesta;
            db.Update(s);
            db.SaveChanges();
        }
    }

    
}
