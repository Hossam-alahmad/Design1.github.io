$(document).ready(()=>{
    
    $(document).on("scroll",()=>{
        if($(document).scrollTop() >= 50){
            $("#header").addClass("header-fixed");
        }
        else{
            $("#header").removeClass("header-fixed");
        }
        if($(document).scrollTop() >= 300){
            $("#btn-up").addClass("btn-up-show");
        }
        else{
            $("#btn-up").removeClass("btn-up-show");
        }
    });
    // show dropdown menu
    $("#bar").on("click",()=>{
        if(!$(".header #menu-list").hasClass("show-dropdown")){
            $(".header #menu-list").addClass("show-dropdown");
        }
        else{
            $(".header #menu-list").removeClass("show-dropdown");
        }
    });
    // show dropdown menu
    $(".footer-dropdown").on("click",(e)=>{
        e.preventDefault();
        $(e.currentTarget).find(".footer-dropdown-menu").addClass("show-dropdown-footer").toggle();
    });
    $("#btn-up").on("click",()=>{
        setTimeout(() => {
            $i = $(document).scrollTop();
            $interval = setInterval(() => {
                $i -= 10;
                $(document).scrollTop($i);
                if($i <= 0){
                    clearInterval($interval);
                }
            },1);
        }, 500);
    });

})