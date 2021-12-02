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
    public class StoController : ControllerBase
    {
        private readonly StoService stoService;

        public StoController(StoService stoService)
        {
            this.stoService = stoService;
        }

        [HttpGet]
        [Route("vratiSveStolove")]
        public async Task<IActionResult> VratiSveStolove()
        {
            return new JsonResult(await stoService.VratiSveStolove());
        }

        [HttpGet]
        [Route("vratiSto/{id}")]
        public async Task<IActionResult> NadjiSto(int id)
        {
            return new JsonResult(await stoService.VratiSto(id));
        }

        [HttpGet]
        [Route("vratiStoloveKonobara/{id}")]
        public async Task<IActionResult> VratiStoloveKonobara(int id)
        {
            return new JsonResult(await stoService.VratiStoloveKonobara(id));
        }

        [HttpGet]
        [Route("vratiSveSlobodneIliZauzeteStolove/{slobodan}")]
        public async Task<IActionResult> VratiSveSlobodneIliZauzeteStolove(bool slobodan)
        {
            return new JsonResult(await stoService.VratiSveSlobodneIliZauzeteStolove(slobodan));
        }

        [HttpPost]
        [Route("dodajSto")]
        public async Task<IActionResult> DodajSto([FromBody] Sto s)
        {
            return new JsonResult(await stoService.DodajSto(s));
        }

        [HttpDelete]
        [Route("obrisiSto/{id}")]
        public async Task<IActionResult> ObrisiSto(int id)
        {
            await stoService.ObrisiSto(id);
            return Ok();
        }

        [HttpPost]
        [Route("obrisiStolove")]
        public async Task<IActionResult> ObrisiStolove([FromBody] List<int> ids)
        {
            await this.stoService.ObrisiStolove(ids);
            return Ok();
        }

        [HttpPut]
        [Route("azurirajSto")]
        public async Task<IActionResult> AzurirajSto([FromBody] Sto s)
        {
            await stoService.AzurirajSto(s);
            return Ok();
        }

        [HttpPut]
        [Route("azurirajStolove")]
        public async Task<IActionResult> AzurirajSto([FromBody] List<Sto> s)
        {
            await stoService.AzurirajStolove(s);
            return Ok();
        }

        [HttpPut]
        [Route("zauzmiIliOslobodiSto/{idStola}")]
        public async Task<IActionResult> ZauzmiIliOslobodiSto(int idStola)
        {
            return Ok(await stoService.ZauzmiIliOslobodiSto(idStola));
        }
    }
}
