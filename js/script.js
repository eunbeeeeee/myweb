$(function(){
    $('.slick-slider').slick({
        dots: true,
        infinite:true,
        speed: 500,
        slidesToShow: 3,
        centerMode: true,
        centerPadding:'60px',
        autoplay: true,
        prevArrow: $('.prevArrow'),
        nextArrow: $('.nextArrow'),
        responsive : [
            {
            breakpoint: 768,
            settings:{
                centerMode:true,
                centerPadding:'30px',
                slidesToShow:2
            }
        },
        {
            breakpoint: 576,
            settings:{
                centerMode:true,
                slidesToShow:2,
                centerPadding:'30px'
            }
        }
    ]
    
    });
});