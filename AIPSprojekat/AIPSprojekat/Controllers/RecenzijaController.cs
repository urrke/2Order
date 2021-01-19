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
    public class RecenzijaController : ControllerBase
    {
        private _2OrderDbContext db;

        public RecenzijaController(_2OrderDbContext db)
        {
            this.db = db;
        }

        [HttpGet]
        [Route("GetRecenzija/{idRecenzije}")]
        public async Task<IActionResult> GetRecenzija(int idRecenzije)
        {
            try
            {
                return new JsonResult(await DataProvider.VratiRecenziju(db, idRecenzije));
            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }

        [HttpGet]
        [Route("GetAllRecenzija")]
        public async Task<IActionResult> GetAllRecenzija()
        {
            try
            {
                return new JsonResult(await DataProvider.VratiSveRecenzije(db));
            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }

        [HttpDelete]
        [Route("DeleteRecenzija/{idRecenzije}")]
        public async Task<IActionResult> DeleteRecenzija(int idRecenzije)
        {
            try
            {
                await DataProvider.ObrisiRecenziju(db, idRecenzije);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }

        [HttpGet]
        [Route("GetAllRecenzijaFromKorisnik/{idKorisnika}")]
        public async Task<IActionResult> GetAllRecenzijaFromKorisnik(int idKorisnika)
        {
            try
            {
                return new JsonResult(await DataProvider.VratiSveRecenzijeKorisnika(db, idKorisnika));
            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }

        [HttpPost]
        [Route("AddRecenzija")]
        public async Task<IActionResult> AddRecenzija([FromBody] Recenzija r)
        {
            try
            {
                await DataProvider.DodajRecenziju(db, r);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }
    }
}
