jQuery(document);

//Menu opening and closing
$('.opener').click(function(e) {
  var $this = $(this).parent();
  if($this.find('.sub-menu-0').length !== 0){
    e.preventDefault();

    if ($this.hasClass("opened")) {
      $('.sub-menu').slideUp(400);
      $this.removeClass("opened");
    } else {
      $('.opened').removeClass("opened");
      $('.sub-menu-0').slideUp(400);
      $this.children('.sub-menu-0').delay(400).slideDown("slow");
      $this.addClass("opened");
    }
  }
  else{

}
});

//closing sub menu
$('.sub-menu-closer').click(function(e) {
  $('.sub-menu-0').slideUp(400);
  $('.opened').removeClass("opened");
});

$( window ).resize(function() {
  var $width = $(".top-bar-right").width();
  //$(".sub-menu-0").width($width);
});
