var x=1;
$(document).ready(function() {

    $("#hide").hover(function(){
       $(".target").toggleClass('hide1');
    });

    $(".banner").hover(function(){
        $(this).toggleClass('hide2');
        $(".testname").slideDown("slow");
      });
      
      $(".a").click(function(){
        if(x%2==1){
          $(".show").slideDown("slow");
          x++;
        }else{
            $(".show").slideUp("slow");
            x++;
        }
        $("showdep").click(function(){

        });
      });
      $("#dep").click(function(){
          $(".h2").text("Depression");
          $("#showdep").removeClass("showdep")
          $("#showfear").addClass("showfear")
          $("#showanger").addClass("showanger");
          $("#showphone").addClass("showphone");
      });
      $("#fear").click(function(){
        $(".h2").text("Fear");
        $("#showfear").removeClass("showfear")
        $("#showdep").addClass("showdep")
        $("#showanger").addClass("showanger");
        $("#showphone").addClass("showphone");
      });
      $("#anger").click(function(){
        $(".h2").text("Anger");
        $("#showanger").removeClass("showanger")
        $("#showdep").addClass("showdep")
        $("#showfear").addClass("showfear");
        $("#showphone").addClass("showphone");
      });
      $("#phone").click(function(){
        $(".h2").text("Phone Addiction");
        $("#showanger").addClass("showanger")
        $("#showdep").addClass("showdep")
        $("#showfear").addClass("showfear");
        $("#showphone").removeClass("showphone");
      });

});

