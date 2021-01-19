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
        public IActionResult GetPorudzbina(int idPorudzbine)
        {
            try
            {
                return new JsonResult(DataProvider.VratiPorudzbinu(db, idPorudzbine));
            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }

        [HttpGet]
        [Route("GetAllPorudzbina")]
        public IActionResult GetAllPorudzbina()
        {
            try
            {
                return new JsonResult(DataProvider.VratiSvePorudzbine(db));
            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }

        [HttpDelete]
        [Route("DeletePorudzbina/{idPorudzbine}")]
        public IActionResult DeletePorudzbina(int idPorudzbine)
        {
            try
            {
                DataProvider.ObrisiPorudzbinu(db, idPorudzbine);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }

        [HttpGet]
        [Route("GetAllPorudzbinaFromKorisnik/{idKorisnika}")]
        public IActionResult GetAllPorudzbinaFromKorisnik(int idKorisnika)
        {
            try
            {
                return new JsonResult(DataProvider.VratiSvePorudzbineKorisnika(db, idKorisnika));
            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }

        [HttpPost]
        [Route("AddPorudzbina")]
        public IActionResult AddPorudzbina([FromBody]Porudzbina p)
        {
            try
            {
                DataProvider.DodajPorudzbinu(db, p);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }
    }
}
