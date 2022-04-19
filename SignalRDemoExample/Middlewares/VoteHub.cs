using Microsoft.AspNetCore.SignalR;
using Microsoft.Graph;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SignalRDemoExample.Middlewares
{
    public class VoteHub : Hub
    {
        public async Task SendMessage(int moanaScore, int lionScore, int frozenScore)
        {
            await Clients.All.SendAsync("ReceiveMessage", moanaScore, lionScore, frozenScore);
        }

        public async Task Send(string userId)
        {
            var message = $"Send message to you with user id {userId}";
            await Clients.Client(userId).SendAsync("ReceiveMessageExample", message);
        }

        public string GetConnectionId()
        {
            return Context.ConnectionId;
        }
    }
}
