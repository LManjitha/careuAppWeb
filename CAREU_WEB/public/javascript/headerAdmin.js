$(document).ready(function() {
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("navbar").style.top = "0";
        } else {
            document.getElementById("navbar").style.top = "-400px";
        }
        prevScrollpos = currentScrollPos;
    }
    var i = 0;
    var txt = "ADMIN PANEL";
    var speed = 50;
    setInterval(function() {
        if (i < txt.length) {
            document.getElementById("service").innerHTML += txt.charAt(i);
            i++;
        }
    }, 200);

    setInterval(function() {
        if (i == txt.length) {
            document.getElementById("service").innerHTML = "";
            i = 0;
        }
    }, 3099);
});