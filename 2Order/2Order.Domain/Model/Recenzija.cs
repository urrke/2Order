using System;
using System.Collections.Generic;
using System.Text;
using System.Text.Json.Serialization;

namespace _2Order.Domain.Model
{
    public class Recenzija
    {
        public int Id { get; set; }
        public int Ocena { get; set; }
        public string Komentar { get; set; }
        public DateTime Vreme { get; set; }
        public int RacunId { get; set; }
        public Racun Racun { get; set; }      
    }
}
