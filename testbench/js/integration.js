$(document).ready(function(){
    var width = 0;
    //gestion des liens des boutons
    $(".bouton").on('click', function(){
        var link = $(this).data('link');
        if(link !== ""){
            $(".page_content.active").removeClass("active");
            setTimeout(function(){
                $(document).find("#content_"+link).addClass("active");
            },100);
        }
    });
    
    //gestion du bouton retour page accueil
    $(".head_logo").on('click', function(){
        $(".page_content.active").removeClass("active")
        setTimeout(function(){
            $(document).find("#content_home").addClass("active");
        },100);
    });
    
    $(".calibration_bt").on('click', function(){
        $(".overlay_choice").removeClass("hidden");
    });
    
    $(".overlay_choice .go_calib").on('click', function(){
        $(".overlay_choice").addClass("hidden");
        $(".page_content.active").removeClass("active");
        setTimeout(function(){
            $(document).find("#content_calibration").addClass("active");
        },100);
    });
    
    $(".overlay_choice .go_download").on('click', function(){
        $(".overlay_choice").addClass("hidden");
        $(".page_content.active").removeClass("active");
        setTimeout(function(){
            $(document).find("#content_download").addClass("active");
        },100);
    });
    
});