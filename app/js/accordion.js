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