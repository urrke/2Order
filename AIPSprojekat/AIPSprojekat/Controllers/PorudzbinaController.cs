using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using _2OrderLibrary;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;


namespace AIPSprojekat.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PorudzbinaController : ControllerBase
    {
        private _2OrderDbContext db;

        public PorudzbinaController(_2OrderDbContext db)
        {
            this.db = db;
        }

        [HttpGet]
        [Route("GetPorudzbina/{idPorudzbine}")]
        public async Task<IActionResult> GetPorudzbina(int idPorudzbine)
        {
            try
            {
                return new JsonResult(await DataProvider.VratiPorudzbinu(db, idPorudzbine));
            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }

        [HttpGet]
        [Route("GetAllPorudzbina")]
        public async Task<IActionResult> GetAllPorudzbina()
        {
            try
            {
                return new JsonResult(await DataProvider.VratiSvePorudzbine(db));
            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }

        [HttpDelete]
        [Route("DeletePorudzbina/{idPorudzbine}")]
        public async Task<IActionResult> DeletePorudzbina(int idPorudzbine)
        {
            try
            {
                await DataProvider.ObrisiPorudzbinu(db, idPorudzbine);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }

        [HttpGet]
        [Route("GetAllPorudzbinaFromKorisnik/{idKorisnika}")]
        public async Task<IActionResult> GetAllPorudzbinaFromKorisnik(int idKorisnika)
        {
            try
            {
                return new JsonResult(await DataProvider.VratiSvePorudzbineKorisnika(db, idKorisnika));
            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }

        [HttpPost]
        [Route("AddPorudzbina")]
        public async Task<IActionResult> AddPorudzbina([FromBody]Porudzbina p)
        {
            try
            {
                await DataProvider.DodajPorudzbinu(db, p);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }
    }
}
