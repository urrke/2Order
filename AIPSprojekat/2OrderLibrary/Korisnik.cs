using Newtonsoft.Json;
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

        /*[JsonIgnore]
        public IList<Dostava> mojeDostave { get; set; }
        [JsonIgnore]
        public IList<Porudzbina> mojePorudzbine { get; set; }
        [JsonIgnore]
        public IList<Recenzija> mojeRecenzije { get; set; }*/
    }
}
