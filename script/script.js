const sideNav = $('.sidenav');
M.Sidenav.init(sideNav, {
    edge : 'right'
});

const tabs = $('.tabs');
M.Tabs.init(tabs);


$('.sidenav li a').on('click', function() {
    $('.sidenav li a').removeClass('active');
    $(this).addClass('active');
    // console.log('ter click');
});

// On Load
$(window).on('load', function() {
    $('#hero-ilustrasi').addClass('show-parallax');
    $('#header-slogan').addClass('show-parallax');
    // $('p.p-des').addClass('show');
});

// Landing Element
$(window).scroll(function() {
    let hScroll = $(this).scrollTop();
    console.log(hScroll);

    if ( $(window).width() <= 326 ){
        var portfolio = 200;
        var brand = 1400;
        var features = 1600;
        var about = 3800;
        var program = 4400;
    } else if ( $(window).width() > 326 && $(window).width() <= 760 ){
        var portfolio = 150;
        var brand = 1400;
        var features = 1700;
        var about = 3900;
        var program = 4400;
    } else if ( $(window).width() > 760 && $(window).width() <= 991) {
        var portfolio = 140;
        var brand = 750;
        var features = 1050;
        var about = 2000;
        var program = 2500;
    }else {
        var portfolio = 400;
        var brand = 1000;
        var features = 1400;
        var about = 2300;
        var program = 2600;
    }

    if( hScroll >= portfolio ) {
        $('.box-card .card').addClass('show-parallax');
    }

    if( hScroll >= brand ) {
        $('.box-brand img').addClass('show-parallax');
    }

    if( hScroll >= features ) {
        $('section.features .card').each(function(i) {
           setTimeout(function() {
                $('section.features .card').eq(i).addClass('show-parallax');
           }, 300 * (i+1) );
        });
    }

    if( hScroll >= about ) {
        $('section.about img').addClass('show-parallax');
        $('section.about h3').addClass('show-parallax');
    }

    if( hScroll >= program ) {
        $('section.program .box-image').addClass('show-parallax');
    }

    // if( hScroll >= $('.web-online-order').offset().top - 300 ) {
    //     $('.brand-order img').addClass('show');
          
    // }

});