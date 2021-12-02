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
    public class RacunController : ControllerBase
    {
        private readonly RacunService racunService;

        public RacunController(RacunService racunService)
        {
            this.racunService = racunService;
        }

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

        [HttpGet]
        [Route("vratiRacunePoTipu/{tip}")]
        public async Task<IActionResult> VratiRacunePoTipu(string tip)
        {
            return new JsonResult(await racunService.VratiRacunePoTipu(tip));
        }

        [HttpGet]
        [Route("vratiRacuneKorisnika/{id}")]
        public async Task<IActionResult> VratiRacuneKorisnika(int id)
        {
            return new JsonResult(await racunService.VratiRacuneKorisnika(id));
        }

        [HttpGet]
        [Route("vratiRacunePoDatumu/{datum}")]
        public async Task<IActionResult> VratiRacunePoDatumu(DateTime datum)
        {
            return new JsonResult(await racunService.VratiRacunePoDatumu(datum));
        }

        [HttpGet]
        [Route("vratiRacunePreDatuma/{datum}")]
        public async Task<IActionResult> VratiRacunePreDatuma(DateTime datum)
        {
            return new JsonResult(await racunService.VratiRacunePreDatuma(datum));
        }

        [HttpPost]
        [Route("dodajRacun")]
        public async Task<IActionResult> DodajRacun([FromBody] Racun r)
        {
            return new JsonResult(await racunService.DodajRacun(r));
        }

        [HttpDelete]
        [Route("obrisiRacun/{id}")]
        public async Task<IActionResult> ObrisiRacun(int id)
        {
            await racunService.ObrisiRacun(id);
            return Ok();
        }

        [HttpPost]
        [Route("obrisiRacune")]
        public async Task<IActionResult> ObrisiRacune([FromBody] List<int> ids)
        {
            await racunService.ObrisiRacune(ids);
            return Ok();
        }

        [HttpPut]
        [Route("azurirajRacun")]
        public async Task<IActionResult> AzurirajRacun([FromBody] Racun r)
        {
            await racunService.AzurirajRacun(r);
            return Ok();
        }
    }
}
