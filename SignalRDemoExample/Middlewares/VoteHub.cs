using Microsoft.AspNetCore.SignalR;
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
    }
}
