AFRAME.registerComponent("join-leave-game", {
    schema: {},
    init: function() {
        var el = this.el;
        var playerText = document.getElementById("player-text");
        var player1 = [];
        var player2 = [];
        fbRef.doc("Player 1").delete();
        fbRef.doc("Player 2").delete();
        el.object3D.addEventListener("cursordown", function() {
            var userId;
            var displayName;
            if (el.getAttribute("color") != "red") {
                altspace.getUser().then(function(user) {
                    userId = user.userId;
                    displayName = user.displayName;
                    el.setAttribute("color", "red");
                    console.log(displayName + " joined the game.");
                    if (player1.length == 0 && el.getAttribute("color") == "red") {
                        player1.push(displayName);
                        player1.push(userId);
                        fbRef.doc("Player 1").set({
                            displayName: player1[0],
                            userId: player1[1]
                        });
                    }
                    if (player2.length == 0 && player1[1] != userId) {
                        player2.push(displayName);
                        player2.push(userId);
                        fbRef.doc("Player 2").set({
                            displayName: player2[0],
                            userId: player2[1]
                        });
                    }
                    if (el.getAttribute("color") == "red") {
                        el.object3D.addEventListener("cursordown", function() {
                            if (player1.includes(userId)) {
                                player1 = [];
                                fbRef.doc("Player 1").delete();
                                el.setAttribute("color", "green");
                                console.log(displayName + " left the game.");
                            }
                            if (player2.includes(userId)) {
                                player2 = [];
                                fbRef.doc("Player 2").delete();
                                el.setAttribute("color", "green");
                                console.log(displayName + " left the game.");
                            }

                        });
                    }
                });
            }
        });
    }
});