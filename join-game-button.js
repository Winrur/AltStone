var p1Joined = false;
console.log(database);
var p2Joined = false;
var gameStarted = false;
AFRAME.registerComponent("join-game-p1", {
    schema: {},
    init: function() {
        var el = this.el;
        var p1JoinText = document.getElementById("join-game-p1-text");
        var p1User;
        database.ref("Player 1").remove()
        database.ref("States").update({
            p1joined: p1Joined
        })
        database.ref("States").on("value", function(snap){
            var data = snap.val();
            if (data.p1joined == true) {
                el.setAttribute("material", "opacity", 1);
                p1JoinText.setAttribute("visible", false);
        }
            if (data.p1joined == false) {
                el.setAttribute("material", "opacity", 0.2);
                p1JoinText.setAttribute("visible", true);
        }
        })
        el.object3D.addEventListener("triggerenter", function() {
            altspace.getUser().then(function(user){
            p1User = user;
            database.ref("Player 1").set({
                userid: p1User.userId,
                displayname: p1User.displayName,
                ismoderator: p1User.isModerator
            })
            if (el.getAttribute("id") == "p1-join-box" && gameStarted == false && p1User.userId == user.userId) {
            p1Joined = true;
            console.log(p1User.displayName + " (P1) joined the game!");
            database.ref("States").update({
                        p1joined: p1Joined
            })
            
          }

        });
        el.object3D.addEventListener("triggerexit", function() {
            if (el.getAttribute("id") == "p1-join-box" && gameStarted == false && p1User.userId == user.userId) {
            p1Joined = false;
            database.ref("Player 1").remove();
            console.log(p1User.displayName + " (P1) left the game.");
            database.ref("States").update({
                        p1joined: p1Joined
            })
            
          }
          })

    })
    }

});
AFRAME.registerComponent("join-game-p2", {
    schema: {},
    init: function() {
        var el = this.el;
        var p2JoinText = document.getElementById("join-game-p2-text");
        var p2User;
        database.ref("Player 2").remove();
        database.ref("States").update({
            p2joined: p2Joined
        })
        database.ref("States").on("value", function(doc){
            var data = doc.val();
            if (data.p2joined == true) {
                el.setAttribute("material", "opacity", 1);
                p2JoinText.setAttribute("visible", false);
        }
            if (data.p2joined == false) {
                el.setAttribute("material", "opacity", 0.2);
                p2JoinText.setAttribute("visible", true);
        }
        })
        el.object3D.addEventListener("triggerenter", function() {
            altspace.getUser().then(function(user){
            p2User = user;
            database.ref("Player 2").set({
                userid: p2User.userId,
                displayname: p2User.displayName,
                ismoderator: p2User.isModerator
            })
            if (el.getAttribute("id") == "p2-join-box" && gameStarted == false && p2User.userId == user.userId) {
            p2Joined = true;
            console.log(p2User.displayName + " (P2) joined the game!");
            database.ref("States").update({
                        p2joined: p2Joined
            })
            
          }
        el.object3D.addEventListener("triggerexit", function() {
            if (el.getAttribute("id") == "p2-join-box" && gameStarted == false && p2User.userId == user.userId) {
            p2Joined = false;
            database.ref("Player 2").remove();
            console.log(p2User.displayName + " (P2) left the game.");
            database.ref("States").update({
                        p2joined: p2Joined
            })
            
          }

    })
                })
    }

});
AFRAME.registerComponent("start-game", {
    schema: {},
    init: function() {
        var el = this.el;
        var p1JoinBox = document.getElementById("p1-join-box");
        var p2JoinBox = document.getElementById("p2-join-box");
        database.ref("States").update({
            gamestarted: gameStarted
        })
        database.ref("States").on("value", function(doc){
            var data = doc.val();
            if (data.p1joined == true && data.p2joined == true) {
                gameStarted = true;
                database.ref("States").update({
                    gamestarted: gameStarted
                })
      database.ref("Player 1").once("value").then(function(doc){
      var data = doc.val();
      p1Id = data.userid;
    })
    database.ref("Player 2").once("value").then(function(doc){
      var data = doc.val();
      p2Id = data.userid;
    })
        }
})
    }

});

database.ref("States").on("value", function(snap){
    var val = snap.val();
    if(val.gamestarted == true){
        gameStartStuff();
    }
})