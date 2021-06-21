using Microsoft.AspNetCore.SignalR;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;

namespace AIPSprojekat.Messages
{
    public class Msg
    {
        public string Naziv { get; set; }
        public string Cena { get; set; }
    }
    public class NotificationHub : Hub
    {
        public async Task SendMessage(object message)
        {
            Msg m = JsonConvert.DeserializeObject<Msg>(((JsonElement)message).ToString());
            await Clients.All.SendAsync("sendToUser", m.Naziv, m.Cena);
        }

        public async Task AddUserToTable(string table)
        {
            //string t = JsonConvert.DeserializeObject<string>(((JsonElement)table).ToString());
            await Groups.AddToGroupAsync(Context.ConnectionId, "Table" + table);
        }

        public async Task SendMyOrder(string name, string price, string table)
        {
            //var g = Clients.Group("Table" + table);
            await Clients.Group("Table" + table).SendAsync("sendOrderToUser",name);
        }
    }
}
