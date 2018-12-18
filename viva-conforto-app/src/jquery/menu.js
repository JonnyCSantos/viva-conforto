$( document ).ready(function() {
    /* Show Sub-menus */ 
    $("#baby").hover(function() {
        $("#baby > .sub-menu").show();
    }, function() {
        $("#baby > .sub-menu").hide();
    });

    $("#bed").hover(function() {
        $("#bed > .sub-menu").show();
    }, function() {
        $("#bed > .sub-menu").hide();
    });

    $("#pillow").hover(function() {
        $("#pillow > .sub-menu").show();
    }, function() {
        $("pillow > .sub-menu").hide();
    });

    $("#pillow").hover(function() {
        $("#pillow > .sub-menu").show();
    }, function() {
        $("pillow > .sub-menu").hide();
    });
});