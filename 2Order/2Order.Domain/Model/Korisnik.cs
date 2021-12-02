using System;
using System.Collections.Generic;
using System.Text;

namespace _2Order.Domain.Model
{
    public class Korisnik
    {
        public int Id { get; set; }
        public string Ime { get; set; }
        public string Prezime { get; set; }
        public string Tip { get; set; }
        public string Email { get; set; }
        public string Sifra { get; set; }
        public string BrojTelefona { get; set; }
        public string Grad { get; set; }
        public string Adresa { get; set; }
    }
}
