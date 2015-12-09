var socket = io.connect();

//socket.on("change-game", function(data) {
//    drawHit()
//});


socket.on("change-player", function(data) {
    console.log(socket);
    var ezApp = document.querySelector("ez-app");
    var stats = ezApp.$.buttonCounter;
    stats.$.getPlayer.generateRequest();
    drawHitAndMiss(data.success, data.pos_x, data.pos_y)
});

socket.on("change-state", function(data) {
    var ezApp = document.querySelector("ez-app");
    ezApp.$.getGame.generateRequest();
});