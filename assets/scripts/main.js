/*
  Alphahex by TheDragonRing (thedragonring.me)
  Copyright © 2017 TheDragonRing
*/

$(document).ready(function(){
  $('#main').hide();
  $('#main').fadeIn(1000);
  $('#backToTop').click(function(){
    event.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, 750);
  });
});

function getYear(){
  document.write(new Date().getFullYear());
}
