$(document).ready(function(){
    $(".btn_toogle__js").click(function(){
        $(".bar_toogle__js").addClass("opened");
    });
    $(".close_mob__js").click(function(){
        $(".bar_toogle__js").removeClass("opened");
    });
});