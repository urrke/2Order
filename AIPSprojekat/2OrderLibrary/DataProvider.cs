using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Text;

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
    }
}
