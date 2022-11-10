window.onload = function init() {
    
    
    let mobile = $('body').width();

    if (mobile < 1000) {

        $(document).ready(function () {
          $('.carousel').slick({
            dots: true,
            arrows: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
          });
        });
    }
    else{
        $(document).ready(function(){
            $('.carousel').slick({
                dots: true,
                arrows: true,
                infinite: true,
                speed: 500,
                slidesToShow: 2,
                slidesToScroll: 2,
            });
        });
    }
    var $target = $('.anime'),
        animationClass = 'anime-start',
        offset = $(window).height() * 3/4;

    function animeScroll(){
        var documentTop = $(document).scrollTop();
    
        $target.each(function(){
            var itemTop = $(this).offset().top;
            if (documentTop > itemTop - offset){
                $(this).addClass(animationClass);
            }else{
                $(this).removeClass(animationClass);
            }
        });
    } 
    
    function titulo(){
        $(document).ready(function(){
            $('.topo').addClass(animationClass)
        });
    } 
    titulo();
    function voltarMenu(){
        var documentTop = $(document).scrollTop();
            if (documentTop > 1000){
                $('.voltar-topo').css('opacity',1)
            }else{
                $('.voltar-topo').css('opacity',0)
            }
    }
    $(document).scroll(function(){
        voltarMenu();
        animeScroll()
    });
};
    
function subir(){
    $( 'html:not(:animated),body:not(:animated)' ).animate( { scrollTop: 0}, 600, function() {
        $(document).scrollTop(0)
    });
}
voltarMenu();

function apagarcookie(){
    $(document).ready(function(){
        $( '.cookie').css('visibility', 'hidden')
    })
}

