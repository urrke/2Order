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
        public async Task<IActionResult> GetSto(int idStola)
        {
            try
            {
                return new JsonResult(await DataProvider.VratiSto(db, idStola));
            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }

        [HttpGet]
        [Route("GetAllSto")]
        public async Task<IActionResult> GetAllSto()
        {
            try
            {
                return new JsonResult(await DataProvider.VratiSveStolove(db));
            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }

        [HttpDelete]
        [Route("DeleteSto/{idStola}")]
        public async Task<IActionResult> DeleteSto(int idStola)
        {
            try
            {
                await DataProvider.ObrisiSto(db, idStola);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }

        [HttpGet]
        [Route("GetAllStoFromKorisnik/{idKorisnika}")]
        public async Task<IActionResult> GetAllStoFromKorisnik(int idKorisnika)
        {
            try
            {
                return new JsonResult(await DataProvider.VratiSveStoloveKonobara(db, idKorisnika));
            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }

        [HttpGet]
        [Route("GetAllFreeOrTakenSto/{slobodan}")]
        public async Task<IActionResult> GetAllFreeOrTakenSto(bool slobodan)
        {
            try
            {
                return new JsonResult(await DataProvider.VratiSveZauzeteIliSlobodneStolove(db, slobodan));
            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }

        [HttpPost]
        [Route("AddSto")]
        public async Task<IActionResult> AddSto([FromBody] Sto s)
        {
            try
            {
                await DataProvider.DodajSto(db, s);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }

        [HttpPut]
        [Route("UpdateSto")]
        public async Task<IActionResult> UpdateSto([FromBody] Sto s)
        {
            try
            {
                await DataProvider.AzurirajSto(db, s);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }
    }
}
