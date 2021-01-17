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
    public class WeatherForecastController : ControllerBase
    {
        private _2OrderDbContext db;

        public WeatherForecastController(_2OrderDbContext db)
        {
            this.db = db;
        }

        [HttpGet]
        [Route("GetPorudzbina")]
        public void Get()
        {
            DataProvider.GetPorudzbina(db,1);

        }
    }
}
