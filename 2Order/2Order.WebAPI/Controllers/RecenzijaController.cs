using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using _2Order.DataLayer.Services;
using _2Order.Domain.Model;
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

        [HttpGet]
        [Route("vratiRecenzijuRacuna/{id}")]
        public async Task<IActionResult> VratiRecenzijuRacuna(int id)
        {
            return new JsonResult(await recenzijaService.VratiRecenzijuRacuna(id));
        }

        [HttpGet]
        [Route("vratiRecenzijeKorisnika/{id}")]
        public async Task<IActionResult> VratiRecenzijeKorisnika(int id)
        {
            return new JsonResult(await recenzijaService.VratiRecenzijeKorisnika(id));
        }

        [HttpGet]
        [Route("vratiRecenzijePoDatumu/{datum}")]
        public async Task<IActionResult> VratiRecenzijePoDatumu(DateTime datum)
        {
            return new JsonResult(await recenzijaService.VratiRecenzijePoDatumu(datum));
        }

        [HttpPost]
        [Route("dodajRecenziju")]
        public async Task<IActionResult> DodajRecenziju([FromBody] Recenzija r)
        {
            return new JsonResult(await recenzijaService.DodajRecenziju(r));
        }

        [HttpDelete]
        [Route("obrisiRecenziju/{id}")]
        public async Task<IActionResult> ObrisiRecenziju(int id)
        {
            await recenzijaService.ObrisiRecenziju(id);
            return Ok();
        }

        [HttpPost]
        [Route("obrisiRecenzije")]
        public async Task<IActionResult> ObrisiRecenzije([FromBody] List<int> ids)
        {
            await recenzijaService.ObrisiRecenzije(ids);
            return Ok();
        }

        [HttpPut]
        [Route("azurirajRecenziju")]
        public async Task<IActionResult> AzurirajRecenziju([FromBody] Recenzija r)
        {
            await recenzijaService.AzurirajRecenziju(r);
            return Ok();
        }
    }
}
