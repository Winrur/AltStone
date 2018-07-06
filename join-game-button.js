var p1Joined = false;
var p2Joined = false;
var gameStarted = false;
AFRAME.registerComponent("join-game-p1", {
    schema: {},
    init: function() {
        var el = this.el;
        var p1JoinText = document.getElementById("join-game-p1-text");
        var userId;
        var displayName;
        fbRef.doc("States").update({
            p1joined: p1Joined
        })
        fbRef.doc("States").onSnapshot(function(doc){
            var data = doc.data();
            if (data.p1joined == true) {
                console.log("P1 joined!");
                el.setAttribute("material", "opacity", 0);
                p1JoinText.setAttribute("visible", false);
        }
            if (data.p1joined == false) {
                console.log("P1 left.");
                el.setAttribute("material", "opacity", 1);
                p1JoinText.setAttribute("visible", true);
        }
        })
        el.object3D.addEventListener("triggerenter", function() {
            if (el.getAttribute("id") == "p1-join-box" && gameStarted == false) {
            p1Joined = true;
            fbRef.doc("States").update({
                        p1joined: p1Joined
            })
            
          }

    })
        el.object3D.addEventListener("triggerexit", function() {
            if (el.getAttribute("id") == "p1-join-box" && gameStarted == false) {
            p1Joined = false;
            fbRef.doc("States").update({
                        p1joined: p1Joined
            })
            
          }

    })
    }

});
AFRAME.registerComponent("join-game-p2", {
    schema: {},
    init: function() {
        var el = this.el;
        var p2JoinText = document.getElementById("join-game-p2-text");
        var userId;
        var displayName;
        fbRef.doc("States").update({
            p2joined: p2Joined
        })
        fbRef.doc("States").onSnapshot(function(doc){
            var data = doc.data();
            if (data.p2joined == true) {
                console.log("P2 joined!");
                el.setAttribute("material", "opacity", 0);
                p2JoinText.setAttribute("visible", false);
        }
            if (data.p2joined == false) {
                console.log("P2 left.");
                el.setAttribute("material", "opacity", 1);
                p2JoinText.setAttribute("visible", true);
        }
        })
        el.object3D.addEventListener("triggerenter", function() {
            if (el.getAttribute("id") == "p2-join-box" && gameStarted == false) {
            p2Joined = true;
            fbRef.doc("States").update({
                        p2joined: p2Joined
            })
            
          }

    })
        el.object3D.addEventListener("triggerexit", function() {
            if (el.getAttribute("id") == "p2-join-box" && gameStarted == false) {
            p2Joined = false;
            fbRef.doc("States").update({
                        p2joined: p2Joined
            })
            
          }

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