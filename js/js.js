$('#mainPageCarousel').owlCarousel({
    loop:true,
    margin:10,
    nav: true,
    dots: false,
    navText: ["<span class=\"fas fa-chevron-circle-left\"></span>","<span class=\"fas fa-chevron-circle-right\"></span>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

