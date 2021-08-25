$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY>20){
            $('.nav-bar').addClass("stick");
        }else{
            $('.nav-bar').removeClass("stick");
        }
    });
    $('.menu-btn').click(function(){
        $('.nav-bar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    })
})