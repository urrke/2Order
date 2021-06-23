using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using _2OrderLibrary;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace AIPSprojekat.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class RacunController : ControllerBase
    {
        private _2OrderDbContext db;

        public RacunController(_2OrderDbContext db)
        {
            this.db = db;
        }

        [HttpGet]
        [Route("GetRacun/{idRacuna}")]
        public async Task<IActionResult> GetRacun(int idRacuna)
        {
            try
            {
                return new JsonResult(await DataProvider.VratiRacun(db, idRacuna));
            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }
    }
}
