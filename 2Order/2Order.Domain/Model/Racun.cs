using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;
using System.Text.Json.Serialization;

namespace _2Order.Domain.Model
{
    public class Racun
    {
        public Racun()
        {
            this.ListaPorudzbina = new List<Porudzbina>();
        }

        public int Id { get; set; }
        public DateTime Vreme { get; set; }
        public IList<Porudzbina> ListaPorudzbina { get; set; }
        public int? StoId { get; set; }
        public Sto Sto { get; set; }
        public float Iznos { get; set; }
    }
}
