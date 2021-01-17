using System;
using System.Collections.Generic;
using System.Text;

namespace _2OrderLibrary
{
    public class Korisnik
    {
        public int Id { get; set; }
        public string tipKorisnika { get; set; }
        public string Ime { get; set; }
        public string Prezime { get; set; }
        public string Email { get; set; }
        public string Sifra { get; set; }
        public IList<Dostava> mojeDostave { get; set; }
        public IList<Porudzbina> mojePorudzbine { get; set; }
        public IList<Recenzija> mojeRecenzije { get; set; }
    }
}
