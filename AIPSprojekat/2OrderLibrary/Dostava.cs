using System;
using System.Collections.Generic;
using System.Text;

namespace _2OrderLibrary
{
    public class Dostava
    {
        public int Id { get; set; }
        //public int KorisnikId { get; set; }
        public Korisnik Korisnik { get; set; }

        public int StavkaMenijaId { get; set; }
        public Meni StavkaMenija { get; set; }

        public string Sifra { get; set; }
        public DateTime Vreme { get; set; }
        public string Adresa { get; set; }
    }
}
