using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;
using System.Text.Json.Serialization;

namespace _2OrderLibrary
{
    public class Racun
    {
        public Racun()
        {
            this.ListaPorudzbina = new List<Porudzbina>();
        }

        public int Id { get; set; }
        //public int KorisnikId { get; set; }
        //public Korisnik Korisnik { get; set; }

        //public int KonobarId { get; set; }
        //[ForeignKey("KonobarId")]
        //public Korisnik Konobar { get; set; }

        public int? StoId { get; set; }
        [JsonIgnore]
        public Sto Sto { get; set; }

        public DateTime Vreme { get; set; }

        public IList<Porudzbina> ListaPorudzbina { get; set; }

    }
}
