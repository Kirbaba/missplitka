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
});