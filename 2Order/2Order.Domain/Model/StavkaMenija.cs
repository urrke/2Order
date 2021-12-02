using System;
using System.Collections.Generic;
using System.Text;

namespace _2Order.Domain.Model
{
    public class StavkaMenija
    {
        public int Id { get; set; }
        public string Naziv { get; set; }
        public float Cena { get; set; }
        public string Tip { get; set; } //hrana ili pice
        public string Grupa { get; set; } //sendvic, pica, sok, voda..
    }
}
