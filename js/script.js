$(function () {
      var container = $('figure'),
        iframe = $('iframe'),
        $window = $(window),
        coord = container.offset().top + container.outerHeight(),
        player;

    window.onYouTubeIframeAPIReady = function () {
        player = new YT.Player("video1", {
          events: {
            "onStateChange": onPlayerStateChange
          }
        });
      };

      function onPlayerStateChange(event) {
        var isPlay = 1 === event.data;
        var isPause = 2 === event.data;
        var isEnd = 0 === event.data;

        if (isPlay) {
          iframe.removeClass("is-paused");
          iframe.toggleClass("is-playing");
        }

        if (isPause) {
          iframe.removeClass("is-playing");
          iframe.toggleClass("is-paused");
        }

        if (isEnd) {
          iframe.removeClass("is-playing", "is-paused");
        }
      }
  
    

        $window.on('scroll', function () {
          iframe.toggleClass('sticky', $window.scrollTop() > coord && iframe.hasClass('is-playing'));
        })
      })
