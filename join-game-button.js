var p1join = false;
var p1JoinText = document.getElementById("join-game-p1-text")
var p2join= false;
var p2JoinText = document.getElementById("join-game-p2-text")
AFRAME.registerComponent("join-game-p1", {
    schema: {},
    init: function() {
      fbRef.doc("States").set({
        p1joined: p1join,
        p2joined: p2join
      });
        var el = this.el;
        var player1 = [];;
        var p1AboveText = document.getElementById("p1-above-text");
        var userId;
        var displayName;
        fbRef.doc("Player 1").delete();
        el.object3D.addEventListener("cursordown", function() {
            if (p1join == false && p2join == false) {
                altspace.getUser().then(function(user) {
                    userId = user.userId;
                    displayName = user.displayName;
                    p1join = true;
                    p1AboveText.setAttribute("visible", true);
                    p1AboveText.setAttribute("n-skeleton-parent", {part: "head", userId: userId});
                    el.setAttribute("color", "red");
                    //p1JoinText.setAttribute("n-text", "text", "Waiting for opponent...");
                    console.log(displayName + " joined the game as P1.");
                    player1.push(displayName);
                    player1.push(userId);
                    fbRef.doc("Player 1").set({
                        displayName: player1[0],
                        userId: player1[1],
                    });
                })
            } else if (el.getAttribute("color") == "red") {
              p1AboveText.setAttribute("visible", false);
              p1join = false;
              el.setAttribute("color", "green");
              //p1JoinText.setAttribute("n-text", "text", "Join game! :)");
              console.log(displayName + " left the game.");
              player1 = [];
              fbRef.doc("Player 1").delete();
            }
        })
    }

});

AFRAME.registerComponent("join-game-p2", {
    schema: {},
    init: function() {
        var el = this.el;
        var player2 = [];
        var p2AboveText = document.getElementById("p2-above-text");
        var userId;
        var displayName;
        fbRef.doc("Player 2").delete();
        el.object3D.addEventListener("cursordown", function() {
            if (p2join == false && p1join == false) {
                altspace.getUser().then(function(user) {
                    userId = user.userId;
                    displayName = user.displayName;
                    p2AboveText.setAttribute("visible", true);
                    p2AboveText.setAttribute("n-skeleton-parent", {part: "head", userId: userId});
                    p2join = true;
                    el.setAttribute("color", "red");
                    //p2JoinText.setAttribute("n-text", "text", "Waiting for opponent...");
                    console.log(displayName + " joined the game as P2.");
                    player2.push(displayName);
                    player2.push(userId);
                    fbRef.doc("Player 2").set({
                        displayName: player2[0],
                        userId: player2[1],
                    });
                })
            } else if (el.getAttribute("color") == "red") {
              p2AboveText.setAttribute("visible", false);
              p2join = false;
              el.setAttribute("color", "green");
              //p2JoinText.setAttribute("n-text", "text", "Join game! :)");
              console.log(displayName + " left the game.");
              player2 = [];
              fbRef.doc("Player 2").delete();
            }
        })
    }

});
AFRAME.registerComponent("game-start", {
  schema: {},
  init: function(){
    var p1JoinBox = document.getElementById("p1-join-box");
    var p2JoinBox = document.getElementById("p2-join-box");
    if (p1join == true && p2join == true) {
      function startGame(){
        p1JoinBox.setAttribute("visible", false);
        p2JoinBox.setAttribute("visible", false);
        p1JoinText.setAttribute("visible", false);
        p2JoinText.setAttribute("visible", false);
      }
    }
    startGame();
  }
})