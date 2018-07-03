AFRAME.registerComponent("join-leave-game", {
    schema: {},
    init: function(){
      var el = this.el;
      var playerText = document.getElementById("player-text");
      var player1 = [];
      var player2 = [];
      fbRef.doc("Player 1").delete();
      fbRef.doc("Player 2").delete();
      el.object3D.addEventListener("cursordown", function(){
        var userId;
        var displayName;
        console.log(player1.length);
        console.log(player2.length);
        if(el.getAttribute("color") != "red"){
          altspace.getUser().then(function(user){
            userId = user.userId;
            displayName = user.displayName;
            el.setAttribute("color", "red");
            console.log(displayName + " joined the game.");
            if(player1.includes(userId)){
            } else if (player1.length == 0){
              player1.push(displayName);
              player1.push(userId);
               fbRef.doc("Player 1").set({
              displayName: player1[0],
              userId: player1[1]
              });
               fbRef.doc(player1[1]).get().then(function(snapshot){
                if (snapshot.exists){
                  fbRef.doc(player1[1]).update({
                    displayName: player1[0],
                    userId: player1[1],
                  });
                } else {
                  fbRef.doc(player1[1]).set({
                    displayName: player1[0],
                    userId: player1[1],
                    timeswon: 0
                  })
                }
               })
              if (el.getAttribute("color") == "red") {
                el.object3D.addEventListener("cursordown", function(){
                  if(player1.includes(userId)){
                    player1 = [];
                    fbRef.doc("Player 1").delete();
                    el.setAttribute("color", "green");
                    console.log(displayName + " left the game.");
                  }
                  if(player2.includes(userId)){
                    player2 = [];
                    fbRef.doc("Player 2").delete();
                    el.setAttribute("color", "green");
                    console.log(displayName + " left the game.");
                  }
              });
            }
            } if(player2.includes(userId)){  
            } else if (player2.length == 0){
              player2.push(displayName);
              player2.push(userId);
              fbRef.doc("Player 2").set({
              displayName: player2[0],
              userId: player2[1]
            });
            fbRef.doc(player2[1]).update({
              displayName: player2[0],
              userId: player2[1]
            });
            }
          });
        }
      })
    }
  });