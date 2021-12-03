using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using _2Order.DataLayer.Services;
using _2Order.Domain.Model;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace _2Order.WebAPI.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class StavkaMenijaController : ControllerBase
    {
        private readonly StavkaMenijaService stavkaMenijaService;

        public StavkaMenijaController(StavkaMenijaService stavkaMenijaService)
        {
            this.stavkaMenijaService = stavkaMenijaService;
        }

        [Authorize(Roles = "Korisnik,Radnik")]
        [HttpGet]
        [Route("vratiCeoMeni")]
        public async Task<IActionResult> VratiCeoMeni()
        {
            return new JsonResult(await stavkaMenijaService.VratiCeoMeni());
        }

        [HttpGet]
        [Route("vratiStavkuMenija/{id}")]
        public async Task<IActionResult> VratiStavkuMenija(int id)
        {
            return new JsonResult(await stavkaMenijaService.VratiStavkuMenija(id));
        }

        [HttpGet]
        [Route("vratiStavkeMenijaPoTipu/{tip}")]
        public async Task<IActionResult> VratiStavkeMenijaPoTipu(string tip)
        {
            return new JsonResult(await stavkaMenijaService.VratiStavkeMenijaPoTipu(tip));
        }

        [HttpGet]
        [Route("vratiStavkeMenijaPoGrupi/{grupa}")]
        public async Task<IActionResult> VratiStavkeMenijaPoGrupi(string grupa)
        {
            return new JsonResult(await stavkaMenijaService.VratiStavkeMenijaPoGrupi(grupa));
        }

        [Authorize(Roles = "Korisnik,Radnik")]
        [HttpPost]
        [Route("dodajStavku")]
        public async Task<IActionResult> DodajStavku([FromBody] StavkaMenija s)
        {
            return new JsonResult(await stavkaMenijaService.DodajStavku(s));
        }

        [Authorize(Roles = "Korisnik,Radnik")]
        [HttpDelete]
        [Route("obrisiStavku/{id}")]
        public async Task<IActionResult> ObrisiStavku(int id)
        {
            await stavkaMenijaService.ObrisiStavku(id);
            return Ok();
        }

        [Authorize(Roles = "Radnik")]
        [HttpPost]
        [Route("obrisiStavke")]
        public async Task<IActionResult> ObrisiStavke([FromBody] List<int> ids)
        {
            await this.stavkaMenijaService.ObrisiStavke(ids);
            return Ok();
        }

        [Authorize(Roles = "Korisnik,Radnik")]
        [HttpPut]
        [Route("azurirajStavku")]
        public async Task<IActionResult> AzurirajStavku([FromBody] StavkaMenija s)
        {
            await stavkaMenijaService.AzurirajStavku(s);
            return Ok();
        }

        [Authorize(Roles = "Korisnik,Radnik")]
        [HttpPut]
        [Route("azurirajStavke")]
        public async Task<IActionResult> AzurirajStavke([FromBody] List<StavkaMenija> stavke)
        {
            await stavkaMenijaService.AzurirajStavke(stavke);
            return Ok();
        }

        [HttpGet]
        [Route("vratiGrupe/{tip}")]
        public async Task<IActionResult> VratiGrupe(string tip)
        {
            return new JsonResult(await stavkaMenijaService.VratiGrupe(tip));
        }
    }
}