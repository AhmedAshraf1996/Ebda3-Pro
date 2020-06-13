$(document).ready(function(){
  $(".offer .owl-carousel").owlCarousel();
});
$('.offer .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        615:{
            items:2,
            nav:true
        },
        992:{
            items:3,
            nav:true,
            loop:false
        }
    }
})
$(document).ready(function(){
  $(".we-proud .owl-carousel").owlCarousel();
});
$('.we-proud .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        500:{
            items:2,
            nav:true
        },
        768:{
            items:3,
            nav:true
        },
        992:{
            items:4,
            nav:true,
            loop:false
        }
    }
})


