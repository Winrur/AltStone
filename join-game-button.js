var p1Joined = false;
var p2Joined = false;
var gameStarted = false;
AFRAME.registerComponent("join-game-p1", {
    schema: {},
    init: function() {
        var el = this.el;
        var p1JoinText = document.getElementById("join-game-p1-text");
        var p1User;
        fbRef.doc("Player 1").delete();
        fbRef.doc("Player 2").delete();
        fbRef.doc("States").update({
            p1joined: p1Joined
        })
        fbRef.doc("States").onSnapshot(function(doc){
            var data = doc.data();
            if (data.p1joined == true) {
                el.setAttribute("material", "opacity", 0);
                p1JoinText.setAttribute("visible", false);
        }
            if (data.p1joined == false) {
                el.setAttribute("material", "opacity", 1);
                p1JoinText.setAttribute("visible", true);
        }
        })
        el.object3D.addEventListener("triggerenter", function() {
            altspace.getUser().then(function(user){
            p1User = user;
            fbRef.doc("Player 1").set({
                userid: p1User.userId,
                displayname: p1User.displayName,
                ismoderator: p1User.isModerator
            })
            if (el.getAttribute("id") == "p1-join-box" && gameStarted == false && p1User.userId == user.userId) {
            p1Joined = true;
            console.log(p1User.displayName + " (P1) joined the game!");
            fbRef.doc("States").update({
                        p1joined: p1Joined
            })
            
          }

        el.object3D.addEventListener("triggerexit", function() {
            if (el.getAttribute("id") == "p1-join-box" && gameStarted == false && p1User.userId == user.userId) {
            p1Joined = false;
            fbRef.doc("Player 1").delete();
            console.log(p1User.displayName + " (P1) left the game.");
            fbRef.doc("States").update({
                        p1joined: p1Joined
            })
            
          }

    })
        });
            })
    }

});
AFRAME.registerComponent("join-game-p2", {
    schema: {},
    init: function() {
        var el = this.el;
        var p2JoinText = document.getElementById("join-game-p2-text");
        var p2User;
        fbRef.doc("States").update({
            p2joined: p2Joined
        })
        fbRef.doc("States").onSnapshot(function(doc){
            var data = doc.data();
            if (data.p2joined == true) {
                el.setAttribute("material", "opacity", 0);
                p2JoinText.setAttribute("visible", false);
        }
            if (data.p2joined == false) {
                el.setAttribute("material", "opacity", 1);
                p2JoinText.setAttribute("visible", true);
        }
        })
        el.object3D.addEventListener("triggerenter", function() {
            altspace.getUser().then(function(user){
            p2User = user;
            fbRef.doc("Player 2").set({
                userid: p2User.userId,
                displayname: p2User.displayName,
                ismoderator: p2User.isModerator
            })
            if (el.getAttribute("id") == "p2-join-box" && gameStarted == false && p2User.userId == user.userId) {
            p2Joined = true;
            console.log(p2User.displayName + " (P2) joined the game!");
            fbRef.doc("States").update({
                        p2joined: p2Joined
            })
            
          }

        el.object3D.addEventListener("triggerexit", function() {
            if (el.getAttribute("id") == "p2-join-box" && gameStarted == false && p2User.userId == user.userId) {
            p2Joined = false;
            fbRef.doc("Player 2").delete();
            console.log(p2User.displayName + " (P2) left the game.");
            fbRef.doc("States").update({
                        p2joined: p2Joined
            })
            
          }

    })
        });
            })
    }

});
AFRAME.registerComponent("start-game", {
    schema: {},
    init: function() {
        var el = this.el;
        var p1JoinBox = document.getElementById("p1-join-box");
        var p2JoinBox = document.getElementById("p2-join-box");
        fbRef.doc("States").update({
            gamestarted: gameStarted
        })
        if(p1Joined == true && p2Joined == true) {
        fbRef.doc("States").get().then(function(doc){
            var data = doc.data();
            if (data.p1joined == true && data.p2joined == true) {
                gameStarted = true;
        fbRef.doc("States").update({
            gamestarted: gameStarted
        })
            }
        })
        }
    }

});