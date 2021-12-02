using _2Order.DataLayer;
using _2Order.DataLayer.Repository;
using _2Order.DataLayer.Services;
using _2Order.DataLayer.UnitOfWork;
using _2Order.WebAPI.Messages;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace _2Order.WebAPI
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();
            services.AddSignalR(options =>
            {
                options.EnableDetailedErrors = true;
            });
            services.AddDbContext<_2OrderContext>(conf => {
                conf.UseSqlServer(Configuration.GetConnectionString("Konekcija")).UseQueryTrackingBehavior(QueryTrackingBehavior.NoTracking);
            });
            services.AddCors(options =>
            {
                options.AddPolicy("CORS", builder =>
                {
                    builder.AllowAnyHeader().AllowAnyMethod().SetIsOriginAllowed((host) => true).AllowCredentials();
                });
            });
            services.AddMvc().AddJsonOptions(p =>
            {
                p.JsonSerializerOptions.WriteIndented = true;
            });

            SetupJWTServices(services);
            services.AddScoped<IUnitOfWork, UnitOfWork>();
            services.AddScoped<AuthService>();
            services.AddScoped<KorisnikService>();
            services.AddScoped<PorudzbinaService>();
            services.AddScoped<RacunService>();
            services.AddScoped<RecenzijaService>();
            services.AddScoped<StavkaMenijaService>();
            services.AddScoped<StoService>();
            services.AddScoped<IKorisnikRepository, KorisnikRepository>();
            services.AddScoped<IPorudzbinaRepository, PorudzbinaRepository>();
            services.AddScoped<IRacunRepository, RacunRepository>();
            services.AddScoped<IRecenzijaRepository, RecenzijaRepository>();
            services.AddScoped<IStavkaMenijaRepository, StavkaMenijaRepository>();
            services.AddScoped<IStoRepository, StoRepository>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseCors("CORS");

            app.UseAuthentication();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
                endpoints.MapHub<NotificationHub>("/NotificationHub");
            });
        }

        private void SetupJWTServices(IServiceCollection services)
        {
            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
            .AddJwtBearer(options =>
            {
                options.SaveToken = true;
                options.RequireHttpsMetadata = true;
                options.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateIssuer = true,
                    ValidateAudience = true,
                    ValidateIssuerSigningKey = true,
                    ValidIssuer = Configuration["Jwt:Issuer"],
                    ValidAudience = Configuration["Jwt:Issuer"],
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Configuration["Jwt:Key"]))
                };
                options.Events = new JwtBearerEvents
                {
                    OnTokenValidated = async context =>
                    {
                        var authService = context.HttpContext.RequestServices.GetRequiredService<KorisnikService>();
                        var email = context.Principal.Claims.Where(x => x.Type == ClaimTypes.Email).FirstOrDefault().Value;
                        var user = await authService.VratiKorisnikaPoEmailu(email);
                        if (user == null)
                        {
                            context.Fail("Unauthorized");
                        }
                        else
                        {
                            var claims = (ClaimsIdentity)context.Principal.Identity;
                            Claim role = new Claim(ClaimTypes.Role, user.Tip);
                            claims.AddClaim(role);
                            context.Success();
                        }
                    }
                };
            });
        }
    }
}
