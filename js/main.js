/* 이은서, 정이원 popup */

let popup = document.querySelector(".popup");
let pCloseBtn = popup.querySelector("#close");
let dayCheck = popup.querySelector("#daycheck");

function setCookie(name, value, day) {
  let date = new Date();
  date.setDate(date.getDate() + day);
  document.cookie = `${name}=${value};expires=${date.toUTCString()}`;
}

function cookieCheck(name) {
  let cookieArr = document.cookie.split(";");
  let visited = false;
  for (let cookie of cookieArr) {
    if (cookie.search(name) > -1) {
      visited = true;
      break;
    }
  }
  if (!visited) {
    popup.setAttribute("open", "");
  } else {
    popup.removeAttribute("open");
  }
}
cookieCheck("team");

pCloseBtn.addEventListener("click", () => {
  popup.removeAttribute("open");
  if (dayCheck.checked) {
    setCookie("team", "ottugi", 1);
  } else {
    setCookie("team", "ottugi", -1);
  }
});


/* 이은서 nav */
let mainMenu = $('.origin .main_menu > li'),
    twodebth = $('.main_menu li ul'),
    formLabel = $('.search_bar label'),
    header = $('header'),
    headerClone = $('.origin').contents().clone(),
    headerCloneContainer = $('<div class="header-clone"></div>'),
    width = $(window).width(),
    close_aside = $('.close_btn'),
    open_aside = $('.aside_btn'),
    title = $('.title > a');

headerClone.appendTo(headerCloneContainer);
$('body').append(headerCloneContainer);

let clone = $('.header-clone'),
    c_mainmenu = clone.find('.main_menu > li'),
    c_twodebth = clone.find('.main_menu li ul');

$(window).scroll(function () {
  width = $(window).width();
  if (width > 768) {
    if ($(this).scrollTop() > 0) {
      $('.origin').hide();
      headerCloneContainer.addClass('visible');
      // $('.header-clone.visible .desktop_menu').show();
    } else {
      headerCloneContainer.removeClass('visible');
      $('.origin').show();
    }
  } else {
    if ($(this).scrollTop() > 0) {
      header.addClass('white');
    } else {
      header.removeClass('white');
    }
  }
})

mainMenu.hover(function () {
  $('.origin').css({
    height: '600px',
    backgroundColor: 'rgba(0,0,0,.7)'
  }),
  twodebth.css({
    display: 'flex'
  }),
    $('.line').css({
    opacity: 1
  })
}, function () {
  $('.origin').css({
    height: '150px',
    backgroundColor: 'transparent'
  }),
  twodebth.css({
    display: 'none'
  }),
  $('.line').css({
    opacity: 0
  })
});
c_mainmenu.hover(function () {
  let width = $(window).width();
  if (width > 768) {
    clone.css({
      paddingBottom: '54px'
    }),
      c_twodebth.css({
        display: 'flex'
      }),
      $('.line').css({
        opacity: 1
      })
  }
}, function () {
  let width = $(window).width();
  if (width > 768) {
    $('.line').css({
      opacity: 0
    }),
    clone.css({
      paddingBottom: '47px'
    }),
    c_twodebth.css({
      display: 'none'
    })
  }
});

$('label').mouseenter(function () {
  if(clone.hasClass('visible')){
    clone.find('.menu .main_menu').css({
      visibility: 'hidden'
    })
  }else{
    $('.menu .main_menu').css({
      visibility: 'hidden'
    })
  }
});
$('form').mouseleave(function () {
  if(clone.hasClass('visible')){
    clone.find('.main_menu').css({
      visibility: 'visible'
  })
  } else {
    $('.main_menu').css({
      visibility: 'visible',
    })
  }
})
$('.lang').mouseenter(function(){
    $('.lang_list').css({
      display: 'block'
      })
});
$('.lang_list').mouseleave(function(){
    $('.lang_list').css({
      display: 'none'
      })
})

/* aside */
title.on('click', function (e) {
  e.preventDefault();
  $(this).parent().siblings('li').find('> ul').slideUp();
  $(this).parent().find('> ul').slideToggle();
  
  $(this).toggleClass('active');
  if ($(this).hasClass('active')) {
    $(this).parent().find('> ul > ul').slideDown();
  }
});

open_aside.click(function(){
  $('.aside_menu_side').css({right: '0'})
})
close_aside.click(function(){
  $('.aside_menu_side').css({right: '-286px'})
  open_aside.show();
  $(this).removeClass('active');
  title.parent().find('> ul').slideUp();
});

/* resize */
$(window).resize(function(){
  width = $(window).width();
  if (width > 768) {
    if ($(window).scrollTop() > 0) {
      headerCloneContainer.addClass('visible')
    } else {
      $('.origin').show();
    }
  } else {
    if (headerCloneContainer.hasClass('visible')) {
      headerCloneContainer.removeClass('visible');
    }
  }
})

/* 한수연 mainslide */
$(function(){
  let m1VideoContainer = $('.m1_fullbg');  
  let m1VideoRatio = 1920/1080;

  $(window).resize(function(){
    let winWidth = $(window).width();
    let winHeight = $(window).height();
    let browserRatio = winWidth/winHeight;
    if(browserRatio < m1VideoRatio){
      m1VideoContainer.css({
        height: '100%', 
        width: winHeight * m1VideoRatio,
        top: 0,
        left: (winWidth - (winHeight * m1VideoRatio))/2
      });
    } else{
      m1VideoContainer.css({
        width: '100%', 
        height: winWidth/m1VideoRatio,
        left: 0,
        top: (winHeight - winWidth / m1VideoRatio)/2
      });
    }
  });

  $(window).trigger('resize');
}); 

const m1Swiper = new Swiper('.m1_video_slide', {
  slidesPerView: 1,

  direction: 'horizontal',
  loop: true,

  scrollbar: {
    el: '.swiper-scrollbar',
  },
});  

$('.m1_prev').click(function(){
  m1Swiper.slidePrev();
});
$('.m1_next').click(function(){
  m1Swiper.slideNext();
}); 

/*정이원*/
$( ".news_box" ).accordion({
  heightStyle: "content"
});

let newstt = $('.news_tt');

newstt.click(function(){
  $(this).toggleClass('active');
  $(this).next().find('.news_content').slideUp();
})



/* 박혜인 nav */
const multipleSwiper = new Swiper(".multiple-slide", {
  slidesPerView: 4,
  loop: true,
  autoplay: {
    delay: 3000,
    pauseOnMouseEnter: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    480: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
  },
});

const bMenuSwiper = new Swiper(".b-menu-slide", {
  slidesPerView: 3,
  slidesToScroll: 1,
  loop: true,
  navigation: {
    nextEl: ".control-next",
    prevEl: ".control-prev",
  },
});

bMenuSwiper.on("realIndexChange", function (a) {
  let idx = (a.realIndex % 3) + 1;
  $(".slidetext-wrapper").hide();
  $("#business-" + idx).show();
});

$('.new_slides').slick({
  // dots: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
      }
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 2000,
        dots:true,
      }
    },
    {
      breakpoint: 481,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 2000,
        dots:true,
      }
    }
  ]
});

/* 정이원 aside */
let goTop = $('#top');

  $(window).on('scroll',function(){
      let tct = $(this).scrollTop();
      if(tct > 500){
          goTop.addClass('active');
      } else {
          goTop.removeClass('active');
      }
  })
  
  goTop.click(function(e){
      e.preventDefault();
      $('html,body').stop().animate({scrollTop:0},'easeInCubic');
  });