AFRAME.registerComponent("join-game", {
    schema: {},
    init: function(){
      el = this.el;
      var player1 = [];
      var player2 = [];
      el.object3D.addEventListener("cursordown", function(){
        var userId;
        var displayName;
        if(player1.length == 0 || player2.length == 0){
          altspace.getUser().then(function(user){
            userId = user.userId;
            displayName = user.displayName;
            el.setAttribute("visible", false);
            if(player1.includes(userId) || player2.includes(userId)){
              console.log(displayName + " is already in the game.");
            } else if (player1.length == 0){
              player1.push(displayName);
              player1.push(userId);
            } else if (player2.length == 0){
              player2.push(displayName);
              player2.push(userId);
            }
          });
        } else if (player1.length == 2 && player2.length == 2) {
            fbRef.doc("Player 1").set({
              displayName: player1[0],
              userId: player1[1]
            });
            fbRef.doc("Player 2").set({
              displayName: player2[0],
              userId: player2[1]
            });
            fbRef.doc(player1[1]).update({
              displayName: player1[0],
              userId: player1[1]
            });
            fbRef.doc(player2[1]).update({
              displayName: player2[0],
              userId: player2[1]
            });
        }
      })
    }
  });