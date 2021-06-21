using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using _2OrderLibrary;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AIPSprojekat.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class MeniController : ControllerBase
    {
        private _2OrderDbContext db;

        public MeniController(_2OrderDbContext db)
        {
            this.db = db;
        }

        [HttpGet]
        [Route("GetMenu")]
        public async Task<JsonResult> GetMenu()
        {
            return new JsonResult(await DataProvider.GetMenu(db));
        }

        [HttpGet]
        [Route("GetMenuItem/{id}")]
        public async Task<JsonResult> GetMenu(int id)
        {
            return new JsonResult(await DataProvider.GetMenuItem(db, id));
        }

        [HttpPost]
        [Route("AddNewMenuItem")]
        public async Task AddItem(Meni newMenuItem)
        {
            await DataProvider.AddMenuItem(db, newMenuItem);
        }

        [HttpPut]
        [Route("UpdatePrice/{id}/{newPrice}")]
        public async Task UpdatePrice(int id, float newPrice)
        {
            await DataProvider.MenuItemPriceChange(db, id, newPrice);
        }

        [HttpDelete]
        [Route("DeleteMenuItem/{id}")]
        public async Task DeleteMenuItem(int id)
        {
            await DataProvider.DeleteMenuItem(db, id);
        }

        [HttpGet]
        [Route("GetMenuByType/{tip}")]
        public async Task<JsonResult> GetMenuByType(string tip)
        {
            return new JsonResult(await DataProvider.GetMenuByType(db, tip));
        }

        [HttpGet]
        [Route("GetMenuByGroup/{grupa}")]
        public async Task<JsonResult> GetMenuByGroup(string grupa)
        {
            return new JsonResult(await DataProvider.GetMenuByGroup(db, grupa));
        }
    }
}