using System;
using System.Collections.Generic;
using System.Text;

namespace _2OrderLibrary
{
    public class Recenzija
    {
        public int Id { get; set; }
        public int Ocena { get; set; }
        public string Komentar { get; set; }
        public DateTime Datum { get; set; }
        //public int KorisnikId { get; set; }
        public Korisnik Korisnik { get; set; }
        
        public string Tip { get; set; }
        //public int DostavaId { get; set; }
        public Dostava Dostava { get; set; }
        //public int PorudzbinaId { get; set; }
        public Porudzbina Porudzbina { get; set; }
        
    }
}
