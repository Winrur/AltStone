var p1Joined = false;
var p2Joined = false;
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
                el.setAttribute("material", "opacity", 0);
                p1JoinText.setAttribute("visible", false);
        }
            if (data.p1joined == false) {
                el.setAttribute("material", "opacity", 1);
                p1JoinText.setAttribute("visible", true);
        }
        })
        el.object3D.addEventListener("triggerenter", function() {
            if (el.getAttribute("id") == "p1-join-box") {
            p1Joined = true;
            fbRef.doc("States").update({
                        p1joined: p1Joined
            })
            
          }

    })
        el.object3D.addEventListener("triggerexit", function() {
            if (el.getAttribute("id") == "p1-join-box") {
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
                el.setAttribute("material", "opacity", 0);
                p2JoinText.setAttribute("visible", false);
        }
            if (data.p2joined == false) {
                el.setAttribute("material", "opacity", 1);
                p2JoinText.setAttribute("visible", true);
        }
        })
        el.object3D.addEventListener("triggerenter", function() {
            if (el.getAttribute("id") == "p2-join-box") {
            p2Joined = true;
            fbRef.doc("States").update({
                        p2joined: p2Joined
            })
            
          }

    })
        el.object3D.addEventListener("triggerexit", function() {
            if (el.getAttribute("id") == "p2-join-box") {
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
        fbRef.doc("States").get().then(function(doc){
            var data = doc.data();
            if (data.p1joined == true && data.p2joined == true) {
                p1JoinBox.setAttribute("visible", false);
                p2JoinBox.setAttribute("visible", false);
            }
        })
    }

});