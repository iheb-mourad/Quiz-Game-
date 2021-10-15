
 function cont(){
    var counter = 60;
    var interval = setInterval(function(){
        counter--
        console.log(counter)
        if(counter>=0){
            document.getElementById('count').innerHTML ="" + counter
        }if(counter===0){
            var stopFunction = clearInterval(interval)
            document.getElementById('count').innerHTML ='your time is over'
        }
       
    },1000);
};
var Score=0
function score(){
    Score=Score+10
    console.log(Score)
    if(Score>=0){
        document.getElementById('score001').innerHTML ="" + Score 
    }
};




$("ul").hide()
function toGame(){
    $("ul").show(1000)
    $("h1").hide(1000)
    $("#BOT").hide(1000)

}


$(".img2").hide()
$(".img3").hide()
$(".img4").hide()

/////////////////
$("#USA").hide()
$("#Russia").hide()
$("#canada").hide()
$("#france").hide()
//////////////////////

$("#Maldives").hide()
$(".img3").hide()
$("#Seychelles").hide()
$("#eswatini").hide()
$("#Maurice").hide()
$(".img4").hide()
$("#Philippines").hide()
$("#uruguay").hide()
$("#germany").hide()
$("#argentina").hide()

function truee(){
         $("#palastin").hide(1000)
         $(".img1").hide(1000)
         $("#orden").hide(1000)
         $("#egypt").hide(1000)
    $("#emirates").hide(1000)
    $(".img2").show(1000)
    $("#USA").show(1000)
    $("#france").show(1000)
    $("#canada").show(1000)
    $("#Russia").show(1000)
    };
    function falsee1(){
        $("#palastin").css( "text-decoration", "line-through")
        $( "#palastin" ).css("color", "red")
    }
        function falsee2(){
            $("#egypt").css( "text-decoration", "line-through")
            $( "#egypt" ).css("color", "red")}
            function falsee3(){
                $("#emirates").css( "text-decoration", "line-through","color:red")
                $( "#emirates" ).css("color", "red")};

$(".img3").hide()

    function truee1(){
        $("#france").hide(1000)
        $(".img2").hide(1000)
        $("#canada").hide(1000)
        $("#USA").hide(1000)
        $("#Russia").hide(1000)
        $(".img3").show(1000)
        $("#Maldives").show(1000)
        $("#Seychelles").show(1000)
        $("#Maurice").show(1000)
        $("#eswatini").show(1000)
    };
    function falsee4(){
        $("#france").css( "text-decoration", "line-through")
        $( "#france" ).css("color", "red") }
            function falsee5(){
            $("#canada").css( "text-decoration", "line-through")
            $( "#canada" ).css("color", "red")}
            function falsee6(){
                $("#USA").css( "text-decoration", "line-through","color:red")
                $( "#USA" ).css("color", "red")};
   
    function truee3(){
        $("#Maldives").hide(1000)
        $(".img3").hide(1000)
        $("#Seychelles").hide(1000)
        $("#eswatini").hide(1000)
        $("#Maurice").hide(1000)
        $(".img4").show(1000)
        $("#Philippines").show(1000)
        $("#uruguay").show(1000)
        $("#germany").show(1000)
        $("#argentina").show(1000)
    };
    function falsee9(){
        $("#Maldives").css( "text-decoration", "line-through")
        $( "#Maldives" ).css("color", "red") }
            function falsee8(){
            $("#Seychelles").css( "text-decoration", "line-through")
            $( "#Seychelles" ).css("color", "red")}
            function falsee7(){
                $("#Maurice").css( "text-decoration", "line-through","color:red")
                $( "#Maurice" ).css("color", "red")};

    $(".img5").hide()
 $(".danimarca").hide()
 $(".dominican").hide()
 $(".australia").hide()
 $(".espain").hide()

    function truee4(){
        $(".img4").hide(1000)
        $("#Philippines").hide(1000)
        $("#uruguay").hide(1000)
        $("#germany").hide(1000)
        $("#argentina").hide(1000)
        $(".img5").show(1000)
        $(".danimarca").show(1000)
        $(".dominican").show(1000)
        $(".australia").show(1000)
        $(".espain").show(1000)
    };
    function falsee10(){
        $("#Philippines").css( "text-decoration", "line-through")
        $( "#Philippines" ).css("color", "red") }
            function falsee11(){
            $("#uruguay").css( "text-decoration", "line-through")
            $( "#uruguay" ).css("color", "red")}
            function falsee12(){
                $("#germany").css( "text-decoration", "line-through","color:red")
                $( "#germany" ).css("color", "red")};

                $(".img6").hide()
                $(".poland").hide()
                    $(".hungary").hide()
                    $(".greece").hide()
                    $(".turkey").hide()
                function truee5(){
                    $(".img5").hide(1000)
                    $(".danimarca").hide(1000)
                    $(".dominican").hide(1000)
                    $(".australia").hide(1000)
                    $(".espain").hide(1000)
                    $(".img6").show(1000)
                    $(".poland").show(1000)
                    $(".hungary").show(1000)
                    $(".greece").show(1000)
                    $(".turkey").show(1000)
                };
                    function falsee13(){
                        $(".danimarca").css( "text-decoration", "line-through")
                        $( ".danimarca" ).css("color", "red") }
                            function falsee14(){
                            $(".australia").css( "text-decoration", "line-through")
                            $( ".australia" ).css("color", "red")}
                            function falsee15(){
                                $(".espain").css( "text-decoration", "line-through","color:red")
                                $( ".espain" ).css("color", "red")};


                                function truee6(){
                                    $(".img6").hide(1000)
                                    $(".poland").hide(1000)
                                    $(".greece").hide(1000)
                                    $(".hungary").hide(1000)
                                    $(".turkey").hide(1000)
                                   
                                };

                                    function falsee16(){
                                        $(".poland").css( "text-decoration", "line-through")
                                        $( ".poland" ).css("color", "red") }
                                            function falsee17(){
                                            $(".hungary").css( "text-decoration", "line-through")
                                            $( ".hungary" ).css("color", "red")}
                                            function falsee18(){
                                                $(".turkey").css( "text-decoration", "line-through","color:red")
                                                $( ".turkey" ).css("color", "red")};
                                               
                               
                               
                               
                               
                               
                               