$(document).ready(function () {
    $(".fadeonload").each(function () {
        setTimeout(() => {
            $(this).animate({ 'opacity': '0.7', 'margin-top': '220px' }, 1200);
        }, 400);
    });
    $(".fadeonfull").each(function () {
        setTimeout(() => {
            $(this).animate({ 'opacity': '0.7', 'margin-top': '-10px' }, 1700);
        }, 400);
    });
    $('.pushpin').pushpin();
    $('.materialboxed').materialbox();
    $(".parallax").parallax();
    $(".modal").modal();
    $(".hiddendiv").remove();
});

var l = window.matchMedia("(max-width: 600px)");
l.addListener(sidenav);
sidenav(l);

function navbar() {
    var s = $(".scene").find($(".plane"));
    var f = $(".scene");
    var g = $(".fill")[0];
    var h = $(".boxinternal")[0];
    var j = $(".scene").find($(".front"));
    var k = $(".scene").find($(".right"));
    for (var d = 0; d < s.length; d++) {
        if (document.documentElement.scrollTop > 480) {
            s[d].style.width = "30px";
            f[d].style.width = "65px";
            f[d].style.height = "65px";
            g.style.height = "65px";
            h.style.height = "65px";
            j[d].style.padding = "15px";
            k[d].style.paddingTop = "15px";
        }
        else {
            s[d].style.width = "50px";
            f[d].style.width = "100px";
            f[d].style.height = "100px";
            g.style.height = "100px";
            h.style.height = "100px";
            j[d].style.padding = "25px";
            k[d].style.paddingTop = "30px";
        }
    }
}

function sidenav(z) {
    if (z.matches) {
        console.log("k")
    }
}

window.onscroll = function () {
    navbar();
}