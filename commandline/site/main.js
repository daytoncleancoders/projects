$(function () {
  Chirp({
    target: 'tweets',
    user:'daytoncleancode',
    max:2,
    templates: {
      base: '<div class="chirp clearfix">{{tweets}}</div>',
      tweet: '<div class="tweet-container"><p>"{{html}}"</p><span class="meta"><time>&#8211;<a href="http://twitter.com/{{user.screen_name}}/statuses/{{id_str}}">{{time_ago}}</a></time> via <a href="http://twitter.com/{{user.screen_name}}" title="{{user.name}} — {{user.description}}">@{{user.screen_name}}</a></span></div>'
    },
    success: function( data ){
      $('.tweets').css('display', 'block');
    }
  })
});

$(window).load(function() {
  var resizer = function () {
    $('#past article h2').css({'min-height': 0});
    var tallest_h2 = 0;
    $('#past article h2').each(function () {
      if ($(this).innerHeight() > tallest_h2 ) {
        tallest_h2 = $(this).innerHeight();
      }
    });
    $('#past article h2').css({'min-height': tallest_h2});
  };

  resizer(); // set initially

  $(window).on('resize', $.throttle( 50, resizer )); // adjust on browser resize
});