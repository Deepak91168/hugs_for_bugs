$(document).ready(function() {

    $("#hide").hover(function(){
       $(".target").toggleClass('hide1');
    });

    $(".banner").hover(function(){
        $(this).toggleClass('hide2');
        $(".testname").slideDown("slow");
      });

});

