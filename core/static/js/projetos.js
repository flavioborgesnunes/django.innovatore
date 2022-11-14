window.onload = function init() {
   $('.link-comerciais').click(function(){
        $('.div-industriais').css('display','none')
        $('.div-logisticos').css('display','none')
        $('.div-comerciais').css('display','flex')
   });
   $('.link-industriais').click(function(){
       $('.div-logisticos').css('display','none')
       $('.div-comerciais').css('display','none')
       $('.div-industriais').css('display','flex')
   });
   $('.link-logisticos').click(function(){
        $('.div-industriais').css('display','none')
        $('.div-comerciais').css('display','none')
        $('.div-logisticos').css('display','flex')
   });
}
