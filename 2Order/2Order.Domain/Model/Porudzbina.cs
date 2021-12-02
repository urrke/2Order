using System.Text.Json.Serialization;
using System;
using System.Collections.Generic;
using System.Text;

namespace _2Order.Domain.Model
{
    public class Porudzbina
    {
        public int Id { get; set; }
        public int KorisnikId { get; set; }
        public Korisnik Korisnik { get; set; }
        public int StavkaMenijaId { get; set; }
        public StavkaMenija StavkaMenija { get; set; }
        public int RacunId { get; set; }
        [JsonIgnore]
        public Racun Racun { get; set; }
        public string Sifra { get; set; }
    }
}
