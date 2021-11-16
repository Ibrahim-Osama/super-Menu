$('.owl-carousel').owlCarousel({
    autoplay:true,
    loop:true,
    margin:15,
    nav:true,
    dots:false,
    rtl:true,
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
})



new fullpage('#fullpage', {
	autoScrolling:true,
	scrollHorizontally: true,
    navigation: true,
    navigationTooltips: ['firstSlide', 'secondSlide'],
    showActiveTooltip: true,
    slidesNavigation: true,
    loopHorizontal: true,
    anchors:['firstPage', 'secondPage'],
	slidesNavPosition: 'bottom',




});

//methods
