$(document).ready(function(){

$(window).scroll(function(){
    if(document.documentElement.scrollTop>600){
        console.log(document.documentElement.scrollTop);
        var nav_js = document.querySelector("#nav-js");
        console.log(nav_js);
        nav_js.style.position = "fixed";
    }else {
        nav_js.style.position = "block";
    }
});

});

