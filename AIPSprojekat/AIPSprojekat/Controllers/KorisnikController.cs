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
    public class KorisnikController : ControllerBase
    {
        private _2OrderDbContext db;

        public KorisnikController(_2OrderDbContext db)
        {
            this.db = db;
        }

        [HttpGet]
        [Route("GetUser/{id}")]
        public async Task<JsonResult> GetUser(int id)
        {
            Korisnik k = await DataProvider.GetUser(db, id);
            return new JsonResult(k);
        }

        [HttpGet]
        [Route("GetUser/{email}/{password}")]
        public async Task<JsonResult> GetUser(string email, string password)
        {
            Korisnik k = await DataProvider.GetUser(db, email, password);
            return new JsonResult(k);
        }

        [HttpGet]
        [Route("GetUsers/{type}")]
        public async Task<JsonResult> GetUsers(string type)
        {
            return new JsonResult(await DataProvider.GetUsers(db, type));
        }

        [HttpPost]
        [Route("AddNewUser")]
        public async Task AddUser(Korisnik user)
        {
            await DataProvider.AddNewUser(db, user);
        }

        [HttpDelete]
        [Route("DeleteUser/{userId}")]
        public async Task DeleteUser(int userId)
        {
            await DataProvider.DeleteUser(db, userId);
        }

        [HttpPut]
        [Route("UpdateUser")]
        public async Task UpdateUser(Korisnik user)
        {
            await DataProvider.UpdateUser(db, user);
        }
    }
}
