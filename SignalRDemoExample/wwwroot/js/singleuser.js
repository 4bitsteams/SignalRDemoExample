(function () {
    var connection = new signalR.HubConnectionBuilder().withUrl("/VoteHub").build();

    connection.start().then(function () {
        console.log("connected");

        connection.invoke('getConnectionId')
            .then(function (connectionId) {
                sessionStorage.setItem('conectionId', connectionId);
                // Send the connectionId to controller
            }).catch(err => console.error(err.toString()));;


    });

    $("#sendmessage").click(function () {
        var connectionId = sessionStorage.getItem('conectionId');
        connection.invoke("Send", connectionId);
    });

    connection.on("ReceiveMessageExample", function (message) {
        console.log(message);
    });

})();