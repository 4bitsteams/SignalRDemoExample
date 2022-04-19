"use strict";

var connection = new signalR.HubConnectionBuilder().withUrl("/VoteHub").build();

document.getElementById("moanaRadio").disabled = true;
document.getElementById("lionRadio").disabled = true;
document.getElementById("frozenRadio").disabled = true;

connection.on("ReceiveMessage", function (moanaScore, lionScore, frozenScore) {
    document.getElementById("moanaScore").innerText = moanaScore;
    document.getElementById("lionScore").innerText = lionScore;
    document.getElementById("frozenScore").innerText = frozenScore;
});

connection.start().then(function () {
    document.getElementById("moanaRadio").disabled = false;
    document.getElementById("lionRadio").disabled = false;
    document.getElementById("frozenRadio").disabled = false;
}).catch(function (err) {
    return console.error(err.toString());
});

// Moana Radio Button Click 
document.getElementById("moanaRadio").addEventListener("click", function () {

    var moanaScore = parseInt(document.getElementById("moanaScore").innerText) + 1;
    var lionScore = parseInt(document.getElementById("lionScore").innerText);
    var frozenScore = parseInt(document.getElementById("frozenScore").innerText);

    connection.invoke("SendMessage", moanaScore, lionScore, frozenScore).catch(function (err) {
        return console.error(err.toString());
    });
});

// The Lion king Radio Button  Click 
document.getElementById("lionRadio").addEventListener("click", function () {

    var moanaScore = parseInt(document.getElementById("moanaScore").innerText);
    var lionScore = parseInt(document.getElementById("lionScore").innerText) + 1;
    var frozenScore = parseInt(document.getElementById("frozenScore").innerText);

    connection.invoke("SendMessage", moanaScore, lionScore, frozenScore).catch(function (err) {
        return console.error(err.toString());
    });
});

// Frozen II Radio Button  Click 
document.getElementById("frozenRadio").addEventListener("click", function () {

    var moanaScore = parseInt(document.getElementById("moanaScore").innerText);
    var lionScore = parseInt(document.getElementById("lionScore").innerText);
    var frozenScore = parseInt(document.getElementById("frozenScore").innerText) + 1;

    connection.invoke("SendMessage", moanaScore, lionScore, frozenScore).catch(function (err) {
        return console.error(err.toString());
    });
});