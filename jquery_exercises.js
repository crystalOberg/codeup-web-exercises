$('*').css('border', '1px solid #9A1B1E');

    $(document).ready(function(){
    $("li").hover(function(){
        $(this).css("color", "red");
    }, function(){
        $(this).css("color", "black");
    });
});

