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
    public class RacunController : ControllerBase
    {
        private readonly RacunService racunService;

        public RacunController(RacunService racunService)
        {
            this.racunService = racunService;
        }

        [Authorize(Roles = "Korisnik,Radnik")]
        [HttpGet]
        [Route("vratiSveRacune")]
        public async Task<IActionResult> VratiSveRacune()
        {
            return new JsonResult(await racunService.VratiSveRacune());
        }

        [HttpGet]
        [Route("vratiRacun/{id}")]
        public async Task<IActionResult> VratiRacun(int id)
        {
            return new JsonResult(await racunService.VratiRacun(id));
        }

        [Authorize(Roles = "Korisnik,Radnik")]
        [HttpGet]
        [Route("vratiRacuneKorisnika/{id}")]
        public async Task<IActionResult> VratiRacuneKorisnika(int id)
        {
            return new JsonResult(await racunService.VratiRacuneKorisnika(id));
        }

        [Authorize(Roles = "Korisnik,Radnik")]
        [HttpGet]
        [Route("vratiRacunePoDatumu/{datum}")]
        public async Task<IActionResult> VratiRacunePoDatumu(DateTime datum)
        {
            return new JsonResult(await racunService.VratiRacunePoDatumu(datum));
        }

        [Authorize(Roles = "Korisnik,Radnik")]
        [HttpGet]
        [Route("vratiRacunePreDatuma/{datum}")]
        public async Task<IActionResult> VratiRacunePreDatuma(DateTime datum)
        {
            return new JsonResult(await racunService.VratiRacunePreDatuma(datum));
        }

        [Authorize(Roles = "Korisnik,Radnik")]
        [HttpPost]
        [Route("dodajRacun")]
        public async Task<IActionResult> DodajRacun([FromBody] Racun r)
        {
            return new JsonResult(await racunService.DodajRacun(r));
        }

        [Authorize(Roles = "Korisnik,Radnik")]
        [HttpDelete]
        [Route("obrisiRacun/{id}")]
        public async Task<IActionResult> ObrisiRacun(int id)
        {
            await racunService.ObrisiRacun(id);
            return Ok();
        }

        [Authorize(Roles = "Korisnik,Radnik")]
        [HttpPost]
        [Route("obrisiRacune")]
        public async Task<IActionResult> ObrisiRacune([FromBody] List<int> ids)
        {
            await racunService.ObrisiRacune(ids);
            return Ok();
        }

        [Authorize(Roles = "Korisnik,Radnik")]
        [HttpPut]
        [Route("azurirajRacun")]
        public async Task<IActionResult> AzurirajRacun([FromBody] Racun r)
        {
            await racunService.AzurirajRacun(r);
            return Ok();
        }
    }
}
