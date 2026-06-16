// $(window).on("load", function () {
//     $(".preloader").addClass("complete")
// });

window.addEventListener("load", function () {
    var preloader = document.querySelector(".preloader");
    var loader = document.querySelector(".loader");
    preloader.className += " complete";
    loader.className += " complete";
});