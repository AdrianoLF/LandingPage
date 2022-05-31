$(function () {
    var btn = $("#back-top");

    $(window).scroll(function () {
        $(this).scrollTop() > 150 ? btn.fadeIn() : btn.fadeOut();
    });

    btn.click(function () {
        $("body,html").animate({ scrollTop: 0 }, 400);
        $(".rocket").addClass("fly");
        $(".topo-zumbi").css({ "display": "none" })

        setTimeout(function () {
            $(".topo-zumbi").css({ "display": "block" })
            $(".rocket").removeClass("fly");
        }, 1000);

        return false;
    });
})
