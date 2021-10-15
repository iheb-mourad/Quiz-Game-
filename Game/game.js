$(".img2").hide()
$(".img3").hide()
$(".img4").hide()


$("#USA").hide()
$("#Russia").hide()
$("#canada").hide()
$("#france").hide()

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

    function truee4(){
        $(".img4").hide(1000)
        $("#Philippines").hide(1000)
        $("#uruguay").hide(1000)
        $("#germany").hide(1000)
        $("#argentina").hide(1000)
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

                function cont(){
                    var counter = 60;
                    var interval = setInterval(function(){
                        counter--
                        console.log(counter)
                        if(counter>=0){
                            document.getElementById('count').innerHTML = counter
                        }if(counter===0){
                            var stopFunction = clearInterval(interval)
                            document.getElementById('count').innerHTML ='your time is over'
                        }
                       
                    },1000);
                }