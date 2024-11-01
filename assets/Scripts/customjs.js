$(document).ready(function () {
    // Hover
    $("#box").hover(
        function () {
            // over
            $(this).css("background-color", "#32b2dd");
        },
        function () {
            // out
            $(this).css("background-color", "#cdd39c");
        }
    );

    // Use multi Events
    $("#box").on({
        mouseenter: function () { // console.log("موس وارد جعبه شد");
        },

        mouseout: function () { // console.log("موس از جعبه خارج شد"); 
        },

        // Use Our Function
        mousemove: informationMouse

    });

    // Write Function - Js , jquery
    function informationMouse(event) {
        var xAxis = event.pageX;
        var yAxis = event.pageY;
        $("#showInfo").text(`X-axis Mouse is : ${xAxis} & Y-axis Mouse is : ${yAxis}`);
    }

    $("#click_for_fade").click(function () {
        // FadeIn + FadeOut = fadeToggle
        $(".square_1").fadeToggle(1250);
        $(".square_2").fadeToggle(1500);
        $(".square_3").fadeToggle(1750);
        $(".square_4").fadeToggle(2000);
    });

    $("#click_for_opacity").click(function () {
        // FadeTo For Opacity
        $(".square_1").fadeTo("slow", 1);
        $(".square_2").fadeTo("slow", 0.75);
        $(".square_3").fadeTo("slow", 0.5);
        $(".square_4").fadeTo("slow", 0.25);
    });

    $(".btn_panel").click(function () {
        $(".panel").slideToggle("slow");
    });

    $("#accordion-heading").click(function () {
        $("#accordion-content").slideToggle(400);
    });
});
