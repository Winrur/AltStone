AFRAME.registerComponent("join-leave-game", {
    schema: {},
    init: function() {
        var el = this.el;
        var playerText = document.getElementById("player-text");
        var player1 = [];
        var player2 = [];
        var player1joined = false;
        var player2joined = false;
        fbRef.doc("States").onSnapshot(function(doc){
          var data = doc.data();
        fbRef.doc("States").set({
          p1joined: player1joined,
          p2joined: player2joined
        })
          console.log(player1joined);
        })
        fbRef.doc("Player 1").delete();
        fbRef.doc("Player 2").delete();
        el.object3D.addEventListener("cursordown", function() {
            var userId;
            var displayName;
            if (player1joined == false || player2joined == false) {
                altspace.getUser().then(function(user) {
                    userId = user.userId;
                    displayName = user.displayName;
                    el.setAttribute("color", "red");
                    player1joined = true;
                    console.log(displayName + " joined the game.");
                    console.log(player1joined);
                    console.log(player2joined);
                    if (player1.length == 0 && el.getAttribute("color") == "red") {
                        player1.push(displayName);
                        player1.push(userId);
                        fbRef.doc("Player 1").set({
                            displayName: player1[0],
                            userId: player1[1],
                        });
                    }
                    if (player1joined == true && player2joined == false) {
                        player2.push(displayName);
                        player2.push(userId);
                        fbRef.doc("Player 2").set({
                            displayName: player2[0],
                            userId: player2[1]
                        });
                        player2joined = true;
                    }
                    if (el.getAttribute("color") == "red") {
                        el.object3D.addEventListener("cursordown", function() {
                            if (player1joined == true) {
                                player1 = [];
                                fbRef.doc("Player 1").delete();
                                el.setAttribute("color", "green");
                                console.log(displayName + " left the game.");
                                console.log(player1joined);
                            }
                            if (player2joined == true) {
                                player2 = [];
                                fbRef.doc("Player 2").delete();
                                el.setAttribute("color", "green");
                                console.log(displayName + " left the game.");
                                console.log(player2joined);
                            }

                        });
                    }
                });
            }
        });
    }
});