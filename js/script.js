jQuery(document).ready(function($) {
  var allPanels = $('.accordion > ul').hide();
    
  $('.accordion > h3').click(function() {
      if ($(this).next().is('ul')) {
        console.log('true');
        $('.accordion h3').removeClass('active-title');
        $(this).addClass('active-title');
        $this = $(this);
        $target =  $this.next();

        if(!$target.hasClass('active')){
           allPanels.removeClass('active').slideUp();
           $target.addClass('active').slideDown();
        }

      }
      else {
        location.href();
      }   
   
  });
});
$(document).ready(function() {
 
  $(".banner__carousel").owlCarousel({
 
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,
      navigationText: [
      "<span class='fa fa-chevron-left'></span>",
      "<span class='fa fa-chevron-right'></span>"
      ],
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });
 
});

jQuery(document).ready(function($) {
	$('.navigation__toggle').on("click", function(event){
		event.preventDefault();
		$('.navigation__menu').slideToggle();
		$(this).toggleClass('navigation__toggle_active');
	});

	$('.basket_btn').on("click", function(event) {
		event.preventDefault();
		$('.header__basket_popup').toggle();
	});

	$('.navigation__search_btn').on("click", function(event) {
		event.preventDefault();
		$('.navigation__search_form').toggle();
	});
});

ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map('map', {
        center: [55.778544, 37.664856],
        zoom: 16,
        controls: [],

    })  ;
    myGeoObject = new ymaps.GeoObject({
        // Описание геометрии.
        geometry: {
            type: "Point",
            coordinates: [55.778544 , 37.664856]
        },
        // Свойства.
        properties: {
            // Контент метки.
            preset: 'islands#icon',
            iconColor: '#0095b6'
        }
    });

    myMap.behaviors.disable('scrollZoom');

    myMap.geoObjects
        .add(myGeoObject);
}

