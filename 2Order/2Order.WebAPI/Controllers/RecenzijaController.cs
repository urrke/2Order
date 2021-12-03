using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using _2Order.DataLayer.Services;
using _2Order.Domain.Model;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace _2Order.WebAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class RecenzijaController : ControllerBase
    {
        private readonly RecenzijaService recenzijaService;

        public RecenzijaController(RecenzijaService recenzijaService)
        {
            this.recenzijaService = recenzijaService;
        }

        [Authorize(Roles = "Korisnik,Radnik")]
        [HttpGet]
        [Route("vratiSveRecenzije")]
        public async Task<IActionResult> VratiSveRecenzije()
        {
            return new JsonResult(await recenzijaService.VratiSveRecenzije());
        }

        [HttpGet]
        [Route("vratiRecenziju/{id}")]
        public async Task<IActionResult> VratiRecenziju(int id)
        {
            return new JsonResult(await recenzijaService.VratiRecenziju(id));
        }

        [Authorize(Roles = "Korisnik,Radnik")]
        [HttpGet]
        [Route("vratiRecenzijuRacuna/{id}")]
        public async Task<IActionResult> VratiRecenzijuRacuna(int id)
        {
            return new JsonResult(await recenzijaService.VratiRecenzijuRacuna(id));
        }

        [Authorize(Roles = "Korisnik,Radnik")]
        [HttpGet]
        [Route("vratiRecenzijeKorisnika/{id}")]
        public async Task<IActionResult> VratiRecenzijeKorisnika(int id)
        {
            return new JsonResult(await recenzijaService.VratiRecenzijeKorisnika(id));
        }

        [Authorize(Roles = "Korisnik,Radnik")]
        [HttpGet]
        [Route("vratiRecenzijePoDatumu/{datum}")]
        public async Task<IActionResult> VratiRecenzijePoDatumu(DateTime datum)
        {
            return new JsonResult(await recenzijaService.VratiRecenzijePoDatumu(datum));
        }

        [Authorize(Roles = "Korisnik,Radnik")]
        [HttpPost]
        [Route("dodajRecenziju")]
        public async Task<IActionResult> DodajRecenziju([FromBody] Recenzija r)
        {
            return new JsonResult(await recenzijaService.DodajRecenziju(r));
        }

        [Authorize(Roles = "Korisnik,Radnik")]
        [HttpDelete]
        [Route("obrisiRecenziju/{id}")]
        public async Task<IActionResult> ObrisiRecenziju(int id)
        {
            await recenzijaService.ObrisiRecenziju(id);
            return Ok();
        }

        [Authorize(Roles = "Korisnik,Radnik")]
        [HttpPost]
        [Route("obrisiRecenzije")]
        public async Task<IActionResult> ObrisiRecenzije([FromBody] List<int> ids)
        {
            await recenzijaService.ObrisiRecenzije(ids);
            return Ok();
        }

        [Authorize(Roles = "Korisnik,Radnik")]
        [HttpPut]
        [Route("azurirajRecenziju")]
        public async Task<IActionResult> AzurirajRecenziju([FromBody] Recenzija r)
        {
            await recenzijaService.AzurirajRecenziju(r);
            return Ok();
        }
    }
}
