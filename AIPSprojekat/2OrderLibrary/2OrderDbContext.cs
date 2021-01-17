using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace _2OrderLibrary
{
    public class _2OrderDbContext : DbContext
    {
        public _2OrderDbContext(DbContextOptions opts) : base(opts)
        {
        }


        public DbSet<Korisnik> Korisnici { get; set; }
        public DbSet<Dostava> Dostave { get; set; }
        public DbSet<Meni> StavkeMenija { get; set; }
        public DbSet<Porudzbina> Porudzbine { get; set; }
        public DbSet<Recenzija> Recenzije { get; set; }
        public DbSet<Sto> Stolovi { get; set; }

    }
}
