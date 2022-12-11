"use strict"

// $(function() {
//     alert($("#codeup").html());
//     alert($("#main").html());
//
//     $('*').css('border', '1px solid #9A1B1E');
//
//     $("li").css("font-size", "20px").css("background-color", "yellow");
//
//     $("h2").css("background-color", "yellow");
//     $("p").css("background-color", "yellow");
//     alert($("h1").html());
//
//     $("h1, p, li").css("background-color", "yellow");
//
// });
$('document').ready(function(){
    $('li').hover(
        function() {
            $(this).css('color', 'red');
        },
        function() {
            $(this).css('color', 'black');
        });

    $("#lights-out").click(function() {
        $("h1").css("background-color", "black");
    })

    $("#size").dblclick(function() {
        $("p").css("font-size", "18px");
    })
});

