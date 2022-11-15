window.onload = function init() {
     $('.link-industriais').click(function(){
          $('.div-logisticos').css('display','none')
          $('.link-logisticos').css('font-weight','normal')
          $('.div-comerciais').css('display','none')
          $('.link-comerciais').css('font-weight','normal')
          $('.div-industriais').css('display','flex')
          $('.link-industriais').css('font-weight','500')
          $('.cai').css('display','flex')
          $('.cci').css('display','none')
          $('.cac').css('display','none')
          $('.ccc').css('display','flex')
          $('.cal').css('display','none')
          $('.ccl').css('display','flex')
     });

     $('.link-comerciais').click(function(){
          $('.div-industriais').css('display','none')
          $('.link-industriais').css('font-weight','normal')
          $('.div-logisticos').css('display','none')
          $('.link-logisticos').css('font-weight','normal')
          $('.div-comerciais').css('display','flex')
          $('.link-comerciais').css('font-weight','500')
          $('.cac').css('display','flex')
          $('.ccc').css('display','none')
          $('.cal').css('display','none')
          $('.ccl').css('display','flex')
          $('.cai').css('display','none')
          $('.cci').css('display','flex')
     });

   $('.link-logisticos').click(function(){
        $('.div-industriais').css('display','none')
        $('.link-industriais').css('font-weight','normal')
        $('.div-comerciais').css('display','none')
        $('.link-comerciais').css('font-weight','normal')
        $('.div-logisticos').css('display','flex')
        $('.link-logisticos').css('font-weight','500')
        $('.cal').css('display','flex')
        $('.ccl').css('display','none')
        $('.cac').css('display','none')
        $('.ccc').css('display','flex')
        $('.cai').css('display','none')
        $('.cci').css('display','flex')
     });

   $('.tag-veja-mais').click(function(){
     let mobile = $('body').width();

          if (mobile > 1000) {

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
               if ($('.div-logisticos').is(':visible')){

                    if($('.lista-logisticos').height() <= 265){
                         $('.lista-logisticos').animate({height : '300px'},1000)
                    }
                    else{
                         $('.lista-logisticos').animate({height : '237px'},1000)
                    }
               }
          }
          else{
               if ($('.div-industriais').is(':visible')){
                    
                    if($('.lista-industriais').height() <= 265){
                         $('.lista-industriais').animate({height : '2000px'},1000)
                    }
                    else{
                         $('.lista-industriais').animate({height : '265px'},1000)
                    }
               }
               if ($('.div-comerciais').is(':visible')){

                    if($('.lista-comerciais').height() <= 237){
                         $('.lista-comerciais').animate({height : '1000px'},1000)
                    }
                    else{
                         $('.lista-comerciais').animate({height : '237px'},1000)
                    }
               }
               if ($('.div-logisticos').is(':visible')){

                    if($('.lista-logisticos').height() <= 265){
                         $('.lista-logisticos').animate({height : '480px'},1000)
                    }
                    else{
                         $('.lista-logisticos').animate({height : '237px'},1000)
                    }
               }

          }
   });
}
