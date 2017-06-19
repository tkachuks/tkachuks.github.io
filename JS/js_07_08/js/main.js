(function() {
  'use strict';

$(function(){
    var $tabLink = $('.tab_link');
    $tabLink.on('click focus', function(event) {
      event.preventDefault();
      $('.active').removeClass('active');
      $(this).addClass('active');
      var tab = $(this).attr('href');
      $('.content').not(tab).hide();
      $(tab).fadeIn(200);
    });
  });

  $(function () {
    var $input = $('.private');
    $input.hover(function () {
      var $title = $(this).parent().find('.title');
      $title.css({display:'inline'}).fadeIn(1000);
    }, function () {
      var $title = $(this).parent().find('.title');
      $title.fadeOut(2000);
    });

    $( 'p' ).focusin(function() {
      $( this ).find( 'span' ).css( {display: 'inline' }).fadeIn(2000).fadeOut( 2000 );
    });

    $(':button').on('click', function() {
      $input.parent().find( 'span' ).css( {display: 'inline' }).fadeIn(1000);
    });
    });

})();
