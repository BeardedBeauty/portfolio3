$(document).ready(function () {
    $(".fadeonload").each(function () {
        setTimeout(() => {
            $(this).animate({ 'opacity': '0.8', 'margin-top': '-10px' }, 1200);
        }, 400);
    });
    $(".parallax").parallax();
    $(".modal").modal();
    $(".hiddendiv").remove();
});

$(document).on("click", ".scene", function() {
    console.log("e")
    var q = $(this).find(".front")
    q.removeAttr("#org");
    q.attr("id", "#ylw");
})

function color() {
    var q = $(this).find(".front")
    console.log("w")
    q.removeAttr("#org");
    q.attr("id", "#ylw");
}

// window.onscroll = function () {
//     var nav = $(".plane")
//     console.log(nav.classList)
//     if (window.pageYOffset > 500) {
//         nav.classList.add(".top");
//     }
//     else {
//         nav.classList.remove(".top")
//     }
// }