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
    public class DostavaController : ControllerBase
    {
        private _2OrderDbContext db;

        public DostavaController(_2OrderDbContext db)
        {
            this.db = db;
        }

        [HttpGet]
        [Route("GetAllDeliveries")]
        public async Task<JsonResult> GetDeliveries()
        {
            return new JsonResult(await DataProvider.GetDeliveries(db));
        }

        [HttpGet]
        [Route("GetTodayDeliveries")]
        public async Task<JsonResult> GetTodayDeliveries()
        {
            return new JsonResult(await DataProvider.GetTodayDeliveries(db));
        }

        [HttpGet]
        [Route("GetDelivery/{id}")]
        public async Task<JsonResult> GetDelivery(int id)
        {
            return new JsonResult(await DataProvider.GetDelivery(db,id));
        }

        [HttpGet]
        [Route("GetUserDeliveries/{userId}")]
        public async Task<JsonResult> GetUserDeliveries(int userId)
        {
            return new JsonResult(await DataProvider.GetUserDeliveries(db, userId));
        }

        [HttpGet]
        [Route("GetDeliveriesWithPassword/{password}")]
        public async Task<JsonResult> GetDeliveriesWithPassword(string password)
        {
            return new JsonResult(await DataProvider.GetDeliveriesWithPassword(db, password));
        }

        [HttpPost]
        [Route("AddDelivery")]
        public async Task AddDelivery(Dostava newDelivery)
        {
            await DataProvider.AddDelivery(db, newDelivery);
        }

        [HttpDelete]
        [Route("DeleteDelivery/{id}")]
        public async Task DeleteDelivery(int id)
        {
            await DataProvider.DeleteDelivery(db, id);
        }

        [HttpPut]
        [Route("UpdateDelivery/{id}/{newAddress}")]
        public async Task UpdateDelivery(int id, string newAddress)
        {
            await DataProvider.UpdateDelivery(db, id, newAddress);
        }

    }
}