using System;
using System.Collections.Generic;
using System.Text;

namespace _2OrderLibrary
{
    public class Sto
    {
        public int Id { get; set; }
        public int BrojMesta { get; set; }
        public bool Slobodan { get; set; }
        public string Oznaka { get; set; }

        public int KonobarId { get; set; }
        public Korisnik Konobar { get; set; }
    }
}
