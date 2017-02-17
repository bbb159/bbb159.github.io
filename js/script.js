$("#pet-home").hover(
    function(){
        $("#saiba-mais-pet").css("color","#00b8e6");
        $("#saiba-mais-pet").animate({
            fontSize: "+=5px"
        },"fast");
    },
    function(){
        $("#saiba-mais-pet").css("color","white");
        $("#saiba-mais-pet").animate({
            fontSize: "-=5px"
        },"fast");
    }
);

$("#startup-home").hover(
    function(){
        $("#saiba-mais-startup").css("color","#b36b00");
        $("#saiba-mais-startup").animate({
            fontSize: "+=5px"
        },"fast");
        
    },
    function(){
        $("#saiba-mais-startup").css("color","white");
        $("#saiba-mais-startup").animate({
            fontSize: "-=5px"
        },"fast");
    }
);

$("#ic-home").hover(
    function(){
        $("#saiba-mais-ic").css("color","#2db300");
        $("#saiba-mais-ic").animate({
            fontSize: "+=5px"
        },"fast");
    },
    function(){
        $("#saiba-mais-ic").css("color","white");
        $("#saiba-mais-ic").animate({
            fontSize: "-=5px"
        },"fast");
    }
);


