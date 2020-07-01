     // PEOPLE CONTAINER
    $('.team-member').click(function(){
        $('.team-member.team-open').not(this).removeClass('team-open').css('margin-bottom', 0);
        $(this).toggleClass('team-open');
        var bioHeight = $(this).find('.team-text-inner').outerHeight();
        $(this).css('margin-bottom', bioHeight + 'px' );
        console.log(bioHeight);
        $(this).find('.team-text').css('height', bioHeight + 'px' );
     });
     $( window ).resize(function() {
      var resizeHeight = $('.team-member.team-open').find('.team-text-inner').outerHeight();
      $('.team-member.team-open').css('margin-bottom', resizeHeight + 'px' );
      console.log(resizeHeight);
      $('.team-member.team-open').find('.team-text').css('height', resizeHeight + 'px' );
     });
     // END PEOPLE CONTAINER
