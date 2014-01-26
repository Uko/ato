jQuery(document).bind('keyup', function(e) {

  if(e.keyCode==39){
  jQuery('a.carousel-control.right').trigger('click');
  }   

  else if(e.keyCode==37){
  jQuery('a.carousel-control.left').trigger('click');
  }

});