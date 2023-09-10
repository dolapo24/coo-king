$(document).ready(function(){
    $("#inputs1").submit(function(e){

        
       let CupInput = $("input#cup").val();
       //console.log(CupInput);
       //formulae for converting cup to ounces

       function cupToOuncesConverter(){
        return CupInput * 8
       }

       $(".result1").text(cupToOuncesConverter());
       $(".result1").show();
       e.preventDefault();
    });
    
    $("#inputs2").submit(function(e){

        
       let CupInput = $("input#tbs").val();

       function CupsToTablespoonConverter(){
        return CupInput * 16
       }

       $(".result2").text(CupsToTablespoonConverter());
       $(".result2").show();
       e.preventDefault();
    });

    $("#inputs3").submit(function(e){

        
        let CupInput = $("input#grm").val();
 
        function CupsToGramsConverter(){
         return CupInput * 236.588
        }
 
        $(".result3").text(CupsToGramsConverter());
        $(".result3").show();
        e.preventDefault();
     });

     $("#inputs4").submit(function(e){

        
        let CupInput = $("input#cup2").val();
 
        function CupsToTeaspoonConverter(){
         return CupInput * 48
        }
 
        $(".result4").text(CupsToTeaspoonConverter());
        $(".result4").show();
        e.preventDefault();
     });

     $("#inputs5").submit(function(e){

        
        let CupInput = $("input#pint").val();
 
        function CupsToPintConverter(){
         return CupInput / 2
        }
 
        $(".result5").text(CupsToPintConverter());
        $(".result5").show();
        e.preventDefault();
     });
});  