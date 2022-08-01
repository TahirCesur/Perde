$(document).ready(function() {
$("#niceselect").niceSelect();


/* owl carousel */
$("#slider .owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    items: 1,
    nav:true,
    navText : ['<i class="fas fa-angle-left" aria-hidden="true"></i>','<i class="fas fa-angle-right" aria-hidden="true"></i>'],
    /* autoplay:true, */
    autoplayTimeout:4000,
    autoplayHoverPause:true,
    dots:false,
    responsive : {
        0 : {
        },
        480 : {
        },
        768 : {
            dots:true,
        }
    }
});

/* product tabs owl carousel */
$('.card-body .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    items:1,
    lazyLoad:false,
});


$(".owl-trigger li").hover(function(e){
    var gonumber=$(this).attr("data-bs-number");
    $($(this).parent().next()).trigger("to.owl.carousel", gonumber);
});

/*downcount*/
$('.countdown').downCount({
    date: '08/27/2023 12:00:00',
    offset: -5
}, function () {
    alert('WOOT WOOT, done!');
});

/*product carousel*/

$(".product-carousel .owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav:false,
    dots:true,
    items: 1,
    responsive : {
        0 : {
            items: 1,
        },
        600 : {
            items: 3,
        },
        1000 : {
            items: 4,
        }
    }
});

$(".product-carousel .next").click(function() {
    owl.trigger('next.owl.carousel');
});
$(".product-carousel .prev").click(function() {
    owl.trigger('prev.owl.carousel');
});

/* latest blog carousel */
var blog= $(".latest-blog .owl-carousel");
blog.owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
});
$(".latest-blog .next").click(function() {
    blog.trigger('next.owl.carousel');
});
$(".latest-blog .prev").click(function() {
    blog.trigger('prev.owl.carousel');
});

// grid page
	
$('#left-content,#left-content2,#left-content3,#left-content4,#left-content5').on('show.bs.collapse', function () {
    $(this).prev().find('i.far').removeClass("fa-minus");
    $(this).prev().find('i.far').addClass("fa-plus");
  });
  $('#left-content,#left-content2,#left-content3,#left-content4,#left-content5').on('hide.bs.collapse', function () {
   $(this).prev().find('i.far').removeClass("fa-plus");
    $(this).prev().find('i.far').addClass("fa-minus");
  });
  
  $(".zoom").zoom();
  
  // Instantiate a slider
  if($("#ex1").length){ 
      var uislider = $("#ex1").slider({});
      var value = uislider.slider('getValue');
      $("span.price-text").text(value + " TL");
      $("#ex1").on("slide", function(ex) {
          $("span.price-text").text(ex.value+" TL");
      });
  }
  
  /* modal show */
  setTimeout(
  function() 
  {
      /* $('#myModal').modal('show') */
  }, 500);
  
  // Scroll to top button
  if ($('.scroll_to_top').length) {
      var scrollTrigger = 100, // px
          backToTop = function () {
                  var scrollTop = $(window).scrollTop();
                  if (scrollTop > scrollTrigger) {
                      $('.scroll_to_top').addClass('show');
                  } else {
                      $('.scroll_to_top').removeClass('show');
                  }
              };
      backToTop();
      $(window).on('scroll', function () {
          backToTop();
      });
      $('.scroll_to_top').on('click', function (e) {
          e.preventDefault();
          $('html,body').animate({
              scrollTop: 0
          }, 700);
      });
  }
  
  // scrol to top bitti
  
  
  
  /* product single start */
  
  $('.product-single .owl-carousel').owlCarousel({
      loop:false,
      margin:10,
      nav:false,
      dots:false,
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
  
  var owl2 = $('.product-single .owl-carousel');
  owl2.owlCarousel();
  // Listen to owl events:
  owl2.on('changed.owl.carousel', function(event) {
      var current = event.item.index;
      var src = $(event.target).find(".item").eq(current).attr("data-number");
      $('.owl-thumb li').removeClass('active');
      $("[data-number="+src+"]").addClass("active");
  });
  $(".owl-thumb li").click(function(){
      let gonumber = $(this).attr('data-number');
      $('.product-single .owl-carousel').trigger("to.owl.carousel",gonumber);
  });
  
  /* product quantitiy */
  
  
  $('.add').click(function () {
      var quan= Number($("[name=quan]").val());
      var topla = quan+1;
      $("[name=quan]").val(topla);
      
  });
  $('.sub').click(function () {
      var quan= Number($("[name=quan]").val());
      if(quan>0){
          var topla = quan-1;
          $("[name=quan]").val(topla);
      }
  });
  
  /* product quantitiy end */
  
  /* product fancybox start */
  $('.searchicon').on('click', function() {
    var number=$(".owl-item.active .item").attr('data-number');
    $.fancybox.open( $('[data-fancybox="gallery"]'), {
          touch: true,
          buttons: [
          "zoom",
          "thumbs",
          "close"
          ],
          loop:true,
          backFocus : false,
          index:number,
    });
  });
  /* product fancybox end */
  if($(".lazy").length){ 
      setTimeout(function() {
        $('.lazy').lazy({
              scrollDirection: 'vertical',
              effect: 'fadeIn',
              visibleOnly: true,
              onError: function(element) {
                  console.log('error loading ' + element.data('src'));
              }
        });
      }, 500);
  }
  

  /* countdown start */
  if($(".countdown").length){ 
      $('.countdown').downCount({
          date: '11/13/2022 12:00:00',
          offset: -5
      }, function () {
          alert('WOOT WOOT, done!');
      });
  }
  
  $('[data-toggle="tooltip"]').tooltip();
  
  
});