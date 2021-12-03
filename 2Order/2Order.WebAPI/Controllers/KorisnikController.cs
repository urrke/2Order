using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using _2Order.DataLayer.Services;
using _2Order.Domain.Model;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;

namespace _2Order.WebAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class KorisnikController : ControllerBase
    {
        private IConfiguration config;
        private readonly KorisnikService korisnikService;

        public KorisnikController(IConfiguration config, KorisnikService korisnikService)
        {
            this.config = config;
            this.korisnikService = korisnikService;
        }

        [Authorize(Roles="Korisnik,Radnik")]
        [HttpGet]
        [Route("vratiSveKorisnike")]
        public async Task<IActionResult> VratiSveKorisnike()
        {
            return new JsonResult(await this.korisnikService.VratiSveKorisnike());
        }

        [Authorize(Roles = "Korisnik,Radnik")]
        [HttpGet]
        [Route("vratiKorisnika/{id}")]
        public async Task<IActionResult> VratiKorisnika(int id)
        {
            return new JsonResult(await this.korisnikService.VratiKorisnika(id));
        }

        [Authorize(Roles = "Korisnik,Radnik")]
        [HttpGet]
        [Route("vratiKorisnikaPoEmailu/{email}")]
        public async Task<IActionResult> VratiKorisnikaPoEmailu(string email)
        {
            return new JsonResult(await this.korisnikService.VratiKorisnikaPoEmailu(email));
        }

        [Authorize(Roles = "Korisnik,Radnik")]
        [HttpGet]
        [Route("vratiKorisnikePoTipu/{tip}")]
        public async Task<IActionResult> VratiKorisnikePoTipu(string tip)
        {
            return new JsonResult(await this.korisnikService.VratiKorisnikePoTipu(tip));
        }

        [HttpPost]
        [Route("dodajKorisnika")]
        public async Task<IActionResult> DodajKorisnika([FromBody] Korisnik k)
        {
            return new JsonResult(await this.korisnikService.DodajKorisnika(k));
        }

        [Authorize(Roles = "Korisnik,Radnik")]
        [HttpDelete]
        [Route("obrisiKorisnika/{id}")]
        public async Task<IActionResult> ObrisiKorisnika(int id)
        {
            await this.korisnikService.ObrisiKorisnika(id);
            return Ok();
        }

        [Authorize(Roles = "Radnik")]
        [HttpPost]
        [Route("obrisiKorisnike")]
        public async Task<IActionResult> ObrisiKorisnike([FromBody] List<int> ids)
        {
            await this.korisnikService.ObrisiKorisnike(ids);
            return Ok();
        }

        [Authorize(Roles = "Korisnik,Radnik")]
        [HttpPut]
        [Route("azurirajKorisnika")]
        public async Task<IActionResult> AzurirajKorisnika([FromBody] Korisnik k)
        {
            await this.korisnikService.AzurirajKorisnika(k);
            return Ok();
        }

        [Authorize(Roles = "Korisnik,Radnik")]
        [HttpPut]
        [Route("azurirajKorisnike")]
        public async Task<IActionResult> AzurirajKorisnike([FromBody] List<Korisnik> korisnici)
        {
            await this.korisnikService.AzurirajKorisnike(korisnici);
            return Ok();
        }
    }
}
