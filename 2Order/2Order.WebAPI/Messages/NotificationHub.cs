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
        public async Task PosaljiPoruku(object message)
        {
            Message m = JsonConvert.DeserializeObject<Message>(((JsonElement)message).ToString());
            await Clients.All.SendAsync("sendToUser", m.Naziv, m.Cena);
        }

        public async Task DodajKorisnikaZaSto(int stoId)
        {
            await Groups.AddToGroupAsync(Context.ConnectionId, "Table" + stoId);
        }

        public async Task DodajStavkuUPorudzbinu(StavkaMenija stavka, int stoId)
        {
            //await Clients.Group("Table" + stoId).SendAsync("sendOrderToUser", stavka);
            await Clients.All.SendAsync("addToOrder", stavka);
        }

        public async Task IzbaciStavkuIzPorudzbine(int stavkaId, int stoId)
        {
            //await Clients.Group("Table" + stoId).SendAsync("sendOrderToUser", stavka);
            await Clients.All.SendAsync("deleteFromOrder", stavkaId);
        }
    }
}
