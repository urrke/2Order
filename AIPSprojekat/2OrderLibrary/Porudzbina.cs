using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace _2OrderLibrary
{
    public class Porudzbina
    {
        public int Id { get; set; }
        //public int KorisnikId { get; set; }
        //[ForeignKey("KorisnikId")]
        public Korisnik Korisnik { get; set; }

        //public int KonobarId { get; set; }
        //[ForeignKey("KonobarId")]
        //public Korisnik Konobar { get; set; }

        public int StavkaMenijaId { get; set; }
        public Meni StavkaMenija { get; set; }

        public int? StoId { get; set; }
        public Sto Sto { get; set; }

        public string Sifra { get; set; }
        public DateTime Vreme { get; set; }

    }
}
