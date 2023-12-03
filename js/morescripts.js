$(document).ready(function(){

  function getYear(){
    var year = new Date().getFullYear();
    if(year === 2017){
      return year;
    }else{
      return '2017 - ' + year;
    }
  }
  $('#copyright').html('This webpage is licenced under the Creative Commons Attribution 4.0 International License. Copyright &copy; ' + getYear() + ' BoxOfDevs. All Rights Reserved. <a href="" scrollToTop>Top <i class="fa fa-chevron-up"></i></a>');


  $('[name=subject]').keypress(function(event){
    if(event.which === 13){
      $('[name=message]').focus();
    }
  });
  $('#submit').hover(function(){
    var $subject = $('[name=subject]').val();
    var $body = $('[name=message]').val();
    var $url = 'mailto:boxofdevs@gmail.com?subject=' + $subject + '&body=' + $body;
    $(this).attr('href', $url);
  });
  $('#submit').click(function(){
    if($(this).attr('href') === '#'){
      event.preventDefault();
    }
  });
  $('#reset').click(function(){
    event.preventDefault();
    $('[name=subject]').val('');
    $('[name=message]').val('');
  });

  $('[scrollToTop]').click(function(){
    event.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, 500);
  });

  $('a').each(function(){
    if($(this).attr('href') === ''){
      $(this).click(function(){
        event.preventDefault();
      });
    }
  });

  $('#menu').slicknav();

  $(".bhide").click(function(){
    $(".hideObj").slideDown();
    $(this).hide();
    return false;
  });

  $(".bhide2").click(function(){
    $(".container.hideObj2").slideDown();
    $(this).hide();
    return false;
  });

  $('.heart').mouseover(function(){
    $(this).find('i').removeClass('fa-heart-o').addClass('fa-heart');
  }).mouseout(function(){
    $(this).find('i').removeClass('fa-heart').addClass('fa-heart-o');
  });

  function sdf_FTS(_number, _decimal, _separator){
    var decimal = (typeof(_decimal) != 'undefined') ? _decimal : 2;
    var separator = (typeof(_separator) != 'undefined') ? _separator : '';
    var r = parseFloat(_number);
    var exp10 = Math.pow(10, decimal);
    r = Math.round(r*exp10)/exp10;
    rr = Number(r).toFixed(decimal).toString().split('.');
    b =rr[0].replace(/(\d{1,3}(?=(\d{3})+(?:\.\d|\b)))/g, "\$1" + separator);
    r = (rr[1] ? b + '.' + rr[1] : b);
    return r;
   }

const ghusername = "BoxOfDevs";
fetch(`https://api.github.com/users/${ghusername}`, {})
   .then(response => response.json())
   .then(data => {
       let numRepos = data.public_repos;
       var numArchived = 28; // Update Me as Necessary, No API available for counting archived repos
       var adjustednumRepos = numRepos - numArchived;
       var adjustednumArchived = numArchived + 23 - 1;
       var curvalRepos = adjustednumRepos-1;
       var curvalArchived = adjustednumArchived-1;
	   
  setTimeout(function(){
    $('#counter').text('0');
    $('#counter1').text('0');
    $('#counter2').text('0');
    setInterval(function(){
      var curval = parseInt($('#counter').text());
      var curval1 = parseInt($('#counter1').text().replace(' ',''));
      var curval2 = parseInt($('#counter2').text());
      if(curval <= curvalRepos){
        $('#counter').text(curval+1);
      }
      if(curval1 <= curvalArchived){
        $('#counter1').text(curval1+1);
      }
      if(curval2 <= 7){
        $('#counter2').text(curval2+1);
      }
    }, 2);
  }, 500);
      })

  var $menu = $("#menuF");
  $(window).scroll(function(){
    if($(this).scrollTop() > 100 && $menu.hasClass("default")){
      $menu.fadeOut('fast', function(){
        $(this).removeClass("default")
        .addClass("fixed transbg")
        .fadeIn('fast');
      });
    }else if($(this).scrollTop() <= 100 && $menu.hasClass("fixed")){
      $menu.fadeOut('fast',function(){
        $(this).removeClass("fixed transbg")
        .addClass("default")
        .fadeIn('fast');
      });
    }
  });

  function calculateScroll(){
    var contentTop = [];
    var contentBottom = [];
    var winTop = $(window).scrollTop();
    var rangeTop = 200;
    var rangeBottom = 500;
    $('.navmenu').find('a').each(function(){
      contentTop.push($($(this).attr('href')).offset().top);
      contentBottom.push($($(this).attr('href')).offset().top + $( $(this).attr('href')).height());
    });
    $.each(contentTop, function(i){
      if(winTop > contentTop[i] - rangeTop && winTop < contentBottom[i] - rangeBottom){
        $('.navmenu li')
        .removeClass('active')
        .eq(i).addClass('active');
      }
    });
  };

  $(document).ready(function(){
    calculateScroll();
    $(window).scroll(function(event){
      calculateScroll();
    });
    $('.navmenu ul li a').click(function() {
      $('html, body').animate({scrollTop: $(this.hash).offset().top - 80}, 800);
      return false;
    });
  });

  $(document).ready(function(){
    $(".pretty a[rel^='prettyPhoto']").prettyPhoto({animation_speed:'normal',theme:'light_square',slideshow:3000, autoplay_slideshow: true, social_tools: ''});
  });

});
