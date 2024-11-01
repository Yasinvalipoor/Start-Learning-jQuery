$(document).ready(function () {
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

    $("#box").on({
        mouseenter : function () { 
            console.log("موس وارد جعبه شد");
        },
        
        mouseout : function () { 
            console.log("موس از جعبه خارج شد");
        }
    });

    $().m

    
});
