
var elms = document.getElementsByClassName( 'splide' );


for ( var i = 0; i < elms.length; i++ ) {
  new Splide( elms[ 0 ], {
        autoplay: 'true',
        type    : 'loop',
        arrows  : false,
        pagination: false,
  } ).mount();
  new Splide( elms[ 1 ], {
        type   : 'loop',
        perPage: 3,
        perMove: 1,
        arrows  : false,
        pagination: false,
        autoplay: 'true',
        focus: "center",
  } ).mount();
  new Splide( elms[ 2 ], {
        autoplay: 'true',
        type    : 'loop',
        arrows  : false,
        pagination: false,
} ).mount();
  new Splide( elms[ 3 ], {
        type   : 'loop',
        autoplay: 'true',
        perPage: 4,
        perMove: 1,
        arrows  : false,
        pagination: false,
        focus: "center",
  } ).mount();
}



$(document).ready(function(){
      //jquery for toggle sub menus
      $('.sub-btn').click(function(){
        $(this).next('.sub-menu').slideToggle();
        $(this).find('.dropdown').toggleClass('rotate');
      });
  
      //jquery for expand and collapse the sidebar
      $('.menu-btn').click(function(){
        $('.side-bar').addClass('active');
        $('.menu-btn').css("visibility", "hidden");
      });
  
      $('.close-btn').click(function(){
        $('.side-bar').removeClass('active');
        $('.menu-btn').css("visibility", "visible");
      });
    });