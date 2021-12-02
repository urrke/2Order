using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using _2Order.DataLayer.Services;
using _2Order.Domain.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;

namespace _2Order.WebAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AuthController : ControllerBase
    {
        private IConfiguration config;
        private readonly AuthService authService;

        public AuthController(IConfiguration config, AuthService authService)
        {
            this.config = config;
            this.authService = authService;
        }

        [HttpPost]
        [Route("authenticate")]
        public async Task<IActionResult> Login([FromBody]Login data)
        {
            IActionResult response = Unauthorized();
            var user = await this.authService.AuthenticateUser(data);
            if (user != null)
            {
                var tokenString = this.authService.GenerateJWT(config, user);
                response = Ok(new { token = tokenString, korisnik = user });
            }
            return response;
        }
    }
}
