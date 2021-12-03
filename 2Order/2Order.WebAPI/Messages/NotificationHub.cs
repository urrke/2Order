using _2Order.DataLayer.Services;
using _2Order.Domain.Model;
using Microsoft.AspNetCore.SignalR;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;

namespace _2Order.WebAPI.Messages
{
    public class Message
    {
        public string Naziv { get; set; }
        public string Cena { get; set; }
    }
    public class NotificationHub : Hub
    {
        public async Task DodajKorisnikaZaSto(int stoId, string ime)
        {
            await Groups.AddToGroupAsync(Context.ConnectionId, "Table" + stoId);
            await Clients.GroupExcept("Table" + stoId, Context.ConnectionId).SendAsync("dodajKorisnika", ime);
        }

        public async Task DodajStavkuUPorudzbinu(StavkaMenija stavka, int stoId, string ime, int idKorisnika)
        {
            await Clients.Group("Table" + stoId).SendAsync("addToOrder", stavka, ime, idKorisnika);
        }

        public async Task IzbaciStavkuIzPorudzbine(int stavkaId, int stoId)
        {
            await Clients.Group("Table" + stoId).SendAsync("deleteFromOrder", stavkaId);
        }

        public async Task IzbaciKorisnikaSaStola(int stoId, string ime)
        {
            await Groups.RemoveFromGroupAsync(Context.ConnectionId, "Table" + stoId);
            await Clients.GroupExcept("Table" + stoId, Context.ConnectionId).SendAsync("izbaciKorisnika", ime);
        }
    }
}
