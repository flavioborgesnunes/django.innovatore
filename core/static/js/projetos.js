window.onload = function init() {
   $('.link-comerciais').click(function(){
        $('.div-industriais').css('display','none')
        $('.link-industriais').css('font-weight','normal')
        $('.div-logisticos').css('display','none')
        $('.link-logisticos').css('font-weight','normal')
        $('.div-comerciais').css('display','flex')
        $('.link-comerciais').css('font-weight','500')
   });
   $('.link-industriais').click(function(){
       $('.div-logisticos').css('display','none')
       $('.link-logisticos').css('font-weight','normal')
       $('.div-comerciais').css('display','none')
       $('.link-comerciais').css('font-weight','normal')
       $('.div-industriais').css('display','flex')
       $('.link-industriais').css('font-weight','500')
   });
   $('.link-logisticos').click(function(){
        $('.div-industriais').css('display','none')
        $('.link-industriais').css('font-weight','normal')
        $('.div-comerciais').css('display','none')
        $('.link-comerciais').css('font-weight','normal')
        $('.div-logisticos').css('display','flex')
        $('.link-logisticos').css('font-weight','500')
   });

   $('.tag-veja-mais').click(function(){

     if ($('.div-industriais').is(':visible')){
          
          if($('.lista-industriais').height() <= 265){
               $('.lista-industriais').animate({height : '1000px'},1000)
          }
          else{
               $('.lista-industriais').animate({height : '265px'},1000)
          }
     }
     if ($('.div-comerciais').is(':visible')){

          if($('.lista-comerciais').height() <= 237){
               $('.lista-comerciais').animate({height : '600px'},1000)
          }
          else{
               $('.lista-comerciais').animate({height : '237px'},1000)
          }
     }
   });
}
