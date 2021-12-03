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
    public class PorudzbinaController : ControllerBase
    {
        private readonly PorudzbinaService porudzbinaService;

        public PorudzbinaController(PorudzbinaService porudzbinaService)
        {
            this.porudzbinaService = porudzbinaService;
        }

        [Authorize(Roles = "Korisnik,Radnik")]
        [HttpGet]
        [Route("vratiSvePorudzbine")]
        public async Task<IActionResult> VratiSvePorudzbine()
        {
            return new JsonResult(await porudzbinaService.VratiSvePorudzbine());
        }

        [HttpGet]
        [Route("vratiPorudzbinu/{id}")]
        public async Task<IActionResult> VratiPorudzbinu(int id)
        {
            return new JsonResult(await porudzbinaService.VratiPorudzbinu(id));
        }

        [Authorize(Roles = "Korisnik,Radnik")]
        [HttpGet]
        [Route("vratiPorudzbineKorisnika/{id}")]
        public async Task<IActionResult> VratiPorudzbineKorisnika(int id)
        {
            return new JsonResult(await porudzbinaService.VratiPorudzbineKorisnika(id));
        }

        [Authorize(Roles = "Korisnik,Radnik")]
        [HttpPost]
        [Route("dodajPorudzbinu")]
        public async Task<IActionResult> DodajPorudzbinu([FromBody] Porudzbina p)
        {
            return new JsonResult(await porudzbinaService.DodajPorudzbinu(p));
        }

        [Authorize(Roles = "Korisnik,Radnik")]
        [HttpDelete]
        [Route("obrisiPorudzbinu/{id}")]
        public async Task<IActionResult> ObrisiPorudzbinu(int id)
        {
            await porudzbinaService.ObrisiPorudzbinu(id);
            return Ok();
        }

        [Authorize(Roles = "Korisnik,Radnik")]
        [HttpPost]
        [Route("obrisiPorudzbine")]
        public async Task<IActionResult> ObrisiPorudzbine([FromBody] List<int> ids)
        {
            await porudzbinaService.ObrisiPorudzbine(ids);
            return Ok();
        }

        [Authorize(Roles = "Korisnik,Radnik")]
        [HttpPut]
        [Route("azurirajPorudzbinu")]
        public async Task<IActionResult> AzurirajPorudzbinu([FromBody] Porudzbina p)
        {
            await porudzbinaService.AzurirajPorudzbinu(p);
            return Ok();
        }
    }
}
