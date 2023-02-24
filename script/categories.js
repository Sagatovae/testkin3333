var elms = document.getElementsByClassName( 'splide' );


for ( var i = 0; i < elms.length; i++ ) {
  new Splide( elms[ 0 ], {
        autoplay: 'true',
        type    : 'loop',
        arrows  : false,
        pagination: false,
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



  
  const element = document.querySelector('#Categories');
  const btn = document.querySelector('#btn-cat');

btn.onclick = event => {
  console.log(element.value)
  if(element.value == "all")
    window.location.href = 'all.html';
  else if(element.value == "latest")
    window.location.href = 'latest.html';
  else if(element.value == "popular")
    window.location.href = 'popular.html';
  else if(element.value == "recommend")  
    window.location.href = 'recommend.html'
};