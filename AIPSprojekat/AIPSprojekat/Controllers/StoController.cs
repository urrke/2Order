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
    public class StoController : ControllerBase
    {
        private _2OrderDbContext db;

        public StoController(_2OrderDbContext db)
        {
            this.db = db;
        }

        [HttpGet]
        [Route("GetSto/{idStola}")]
        public IActionResult GetSto(int idStola)
        {
            try
            {
                return new JsonResult(DataProvider.VratiSto(db, idStola));
            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }

        [HttpGet]
        [Route("GetAllSto")]
        public IActionResult GetAllSto()
        {
            try
            {
                return new JsonResult(DataProvider.VratiSveStolove(db));
            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }

        [HttpDelete]
        [Route("DeleteSto/{idStola}")]
        public IActionResult DeleteSto(int idStola)
        {
            try
            {
                DataProvider.ObrisiSto(db, idStola);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }

        [HttpGet]
        [Route("GetAllStoFromKorisnik/{idKorisnika}")]
        public IActionResult GetAllStoFromKorisnik(int idKorisnika)
        {
            try
            {
                return new JsonResult(DataProvider.VratiSveStoloveKonobara(db, idKorisnika));
            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }

        [HttpGet]
        [Route("GetAllFreeOrTakenSto/{slobodan}")]
        public IActionResult GetAllFreeOrTakenSto(bool slobodan)
        {
            try
            {
                return new JsonResult(DataProvider.VratiSveZauzeteIliSlobodneStolove(db, slobodan));
            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }

        [HttpPost]
        [Route("AddSto")]
        public IActionResult AddSto([FromBody] Sto s)
        {
            try
            {
                DataProvider.DodajSto(db, s);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }

        [HttpPut]
        [Route("UpdateSto")]
        public IActionResult UpdateSto([FromBody] Sto s)
        {
            try
            {
                DataProvider.AzurirajSto(db, s);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }
    }
}
