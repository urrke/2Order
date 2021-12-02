using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using _2Order.Domain.Model;

namespace _2Order.DataLayer
{
    public class _2OrderContext : DbContext
    {
        public _2OrderContext(DbContextOptions options) : base(options)
        {

        }

        public DbSet<Korisnik> Korisnici { get; set; }
        public DbSet<StavkaMenija> StavkeMenija { get; set; }
        public DbSet<Racun> Racuni { get; set; }
        public DbSet<Recenzija> Recenzije { get; set; }
        public DbSet<Sto> Stolovi { get; set; }
        public DbSet<Porudzbina> Porudzbine { get; set; }
    }
}
