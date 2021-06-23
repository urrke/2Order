using System.Text.Json.Serialization;
using System;
using System.Collections.Generic;
using System.Text;

namespace _2OrderLibrary
{
    public class Porudzbina
    {
        public int Id { get; set; }
        public string Opis { get; set; }
        public float Cena { get; set; }
        public string Tip { get; set; }
        public string Grupa { get; set; }
        public int RacunId { get; set; }
        [JsonIgnore]
        public Racun Racun { get; set; }
        public int KorisnikId { get; set; }
        public Korisnik Korisnik { get; set; }

    }
}
