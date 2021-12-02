using _2Order.Domain.Model;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace _2Order.DataLayer.Services
{
    public class AuthService
    {
        private UnitOfWork.UnitOfWork unitOfWork;

        public AuthService(_2OrderContext context)
        {
            this.unitOfWork = new UnitOfWork.UnitOfWork(context);
        }

        public string GenerateJWT(IConfiguration config, Korisnik user)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(config["Jwt:Key"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);
            List<Claim> claims = new List<Claim>();
            Claim c = new Claim(ClaimTypes.Email, user.Email);
            claims.Add(c);
            var token = new JwtSecurityToken(config["Jwt:Issuer"],
              config["Jwt:Issuer"],
              claims,
              expires: DateTime.Now.AddMinutes(120),
              signingCredentials: credentials);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }

        public async Task<Korisnik> AuthenticateUser(Login data)
        {
            Korisnik result = await unitOfWork.KorisnikRepository.VratiKorisnikaPoEmailu(data.Email);
            if (result != null && result.Sifra == data.Password)
                return result;
            else return null;
        }
    }
}
