(window["webpackJsonpWebpackChiara"] = window["webpackJsonpWebpackChiara"] || []).push([[16],{

/***/ "./assets/js/chiara/youtube-carousel.js":
/*!**********************************************!*\
  !*** ./assets/js/chiara/youtube-carousel.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return youtubeCarouselFactory; });
/* harmony import */ var _theme_common_media_query_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../theme/common/media-query-list */ "./assets/js/theme/common/media-query-list.js");

var mediumMediaQuery;
var uid = 1;

var YoutubeSlick = /*#__PURE__*/function () {
  function YoutubeSlick(slick) {
    this.$slick = $(slick);
    this.$videos = this.$slick.find('[data-youtube]');
    this.onSlickInit = this.onSlickInit.bind(this);
    this.onSlickBeforeChange = this.onSlickBeforeChange.bind(this);
    this.onSlickAfterChange = this.onSlickAfterChange.bind(this);
    this.onPlayerReady = this.onPlayerReady.bind(this);
    this.onPlayerStateChange = this.onPlayerStateChange.bind(this);
    this.bindEvents();
  }

  var _proto = YoutubeSlick.prototype;

  _proto.bindEvents = function bindEvents() {
    if (this.$slick.hasClass('slick-initialized')) {
      this.onSlickInit();
    }

    this.$slick.on('init', this.onSlickInit);
    this.$slick.on('beforeChange', this.onSlickBeforeChange);
    this.$slick.on('afterChange', this.onSlickAfterChange);
  };

  _proto.onPlayerReady = function onPlayerReady(event) {
    var _this = this;

    // store player object for use later
    $(event.target.getIframe()).closest('.slick-slide').data('youtube-player', event.target); // On desktop: Play video if first slide is video

    if (mediumMediaQuery.matches) {
      setTimeout(function () {
        if ($(event.target.getIframe()).closest('.slick-slide').hasClass('slick-active')) {
          _this.$slick.slick('slickPause');

          if (typeof _this.$slick.data('youtubeMute') !== 'undefined') {
            event.target.mute();
          }

          event.target.playVideo();
        }
      }, 200);
    }
  };

  _proto.onPlayerStateChange = function onPlayerStateChange(event) {
    // Stop slick autoplay when video start playing
    if (event.data === YT.PlayerState.PLAYING) {
      // eslint-disable-line
      this.$slick.addClass('slick-video-playing');
      this.$slick.slick('slickPause');
    }

    if (event.data === YT.PlayerState.PAUSED) {
      // eslint-disable-line
      this.$slick.removeClass('slick-video-playing');
    } // go to next slide and enable autoplay back when video ended


    if (event.data === YT.PlayerState.ENDED) {
      // eslint-disable-line
      this.$slick.removeClass('slick-video-playing');
      this.$slick.slick('slickPlay');
      this.$slick.slick('slickNext');
    }
  };

  _proto.onSlickInit = function onSlickInit() {
    var _this2 = this;

    this.$videos.each(function (j, vid) {
      var $vid = $(vid);
      var id = "youtube_player_" + uid++;
      $vid.attr('id', id); // init player

      var player = new YT.Player(id, {
        // eslint-disable-line
        // host: 'http://www.youtube.com',
        videoId: $vid.data('youtube'),
        wmode: 'transparent',
        playerVars: {
          controls: 0,
          disablekb: 1,
          enablejsapi: 1,
          fs: 0,
          rel: 0,
          showinfo: 0,
          iv_load_policy: 3,
          modestbranding: 1,
          wmode: 'transparent'
        },
        events: {
          onReady: _this2.onPlayerReady,
          onStateChange: _this2.onPlayerStateChange
        }
      });
    });
  };

  _proto.onSlickBeforeChange = function onSlickBeforeChange() {
    var player = this.$slick.find('.slick-slide.slick-active').data('youtube-player');

    if (player) {
      player.stopVideo();
    }
  };

  _proto.onSlickAfterChange = function onSlickAfterChange() {
    // Enable auto slide
    this.$slick.slick('slickPlay'); // On desktop:
    // - Auto play video when open next slide
    // - Stop auto slide

    if (mediumMediaQuery.matches) {
      var player = this.$slick.find('.slick-slide.slick-active').data('youtube-player');

      if (player) {
        this.$slick.slick('slickPause');

        if (typeof this.$slick.data('youtubeMute') !== 'undefined') {
          player.mute();
        }

        player.playVideo();
      }
    }
  };

  return YoutubeSlick;
}();

function initCarousel($carousel) {
  $carousel.each(function (i, slick) {
    var $slick = $(slick);

    if ($slick.find('[data-youtube]').length > 0) {
      $slick.addClass('slick-slider--video');
      new YoutubeSlick(slick); // eslint-disable-line
    }
  });
}

function youtubeCarouselFactory($carousel) {
  if ($carousel.find('[data-youtube]').length > 0) {
    mediumMediaQuery = Object(_theme_common_media_query_list__WEBPACK_IMPORTED_MODULE_0__["default"])('medium');

    if (typeof window.onYouTubeIframeAPIReady === 'undefined') {
      window.onYouTubeIframeAPIReady = initCarousel.bind(window, $carousel); // Load the IFrame Player API code asynchronously.

      var tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/player_api';
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag); // $('body').append('<script src="https://www.youtube.com/iframe_api"></script>');
    } else {
      initCarousel($carousel);
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/home.js":
/*!*********************************!*\
  !*** ./assets/js/theme/home.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _chiara_youtube_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../chiara/youtube-carousel */ "./assets/js/chiara/youtube-carousel.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Home = /*#__PURE__*/function (_PageManager) {
  _inheritsLoose(Home, _PageManager);

  function Home() {
    return _PageManager.apply(this, arguments) || this;
  }

  var _proto = Home.prototype;

  _proto.onReady = function onReady() {
    if (this.context.hasCarouselVideo) {
      Object(_chiara_youtube_carousel__WEBPACK_IMPORTED_MODULE_1__["default"])($('[data-slick]'));
    }
  };

  return Home;
}(_page_manager__WEBPACK_IMPORTED_MODULE_0__["default"]);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9XZWJwYWNrQ2hpYXJhLy4vYXNzZXRzL2pzL2NoaWFyYS95b3V0dWJlLWNhcm91c2VsLmpzIiwid2VicGFjazovL1dlYnBhY2tDaGlhcmEvLi9hc3NldHMvanMvdGhlbWUvaG9tZS5qcyJdLCJuYW1lcyI6WyJtZWRpdW1NZWRpYVF1ZXJ5IiwidWlkIiwiWW91dHViZVNsaWNrIiwic2xpY2siLCIkc2xpY2siLCIkIiwiJHZpZGVvcyIsImZpbmQiLCJvblNsaWNrSW5pdCIsImJpbmQiLCJvblNsaWNrQmVmb3JlQ2hhbmdlIiwib25TbGlja0FmdGVyQ2hhbmdlIiwib25QbGF5ZXJSZWFkeSIsIm9uUGxheWVyU3RhdGVDaGFuZ2UiLCJiaW5kRXZlbnRzIiwiaGFzQ2xhc3MiLCJvbiIsImV2ZW50IiwidGFyZ2V0IiwiZ2V0SWZyYW1lIiwiY2xvc2VzdCIsImRhdGEiLCJtYXRjaGVzIiwic2V0VGltZW91dCIsIm11dGUiLCJwbGF5VmlkZW8iLCJZVCIsIlBsYXllclN0YXRlIiwiUExBWUlORyIsImFkZENsYXNzIiwiUEFVU0VEIiwicmVtb3ZlQ2xhc3MiLCJFTkRFRCIsImVhY2giLCJqIiwidmlkIiwiJHZpZCIsImlkIiwiYXR0ciIsInBsYXllciIsIlBsYXllciIsInZpZGVvSWQiLCJ3bW9kZSIsInBsYXllclZhcnMiLCJjb250cm9scyIsImRpc2FibGVrYiIsImVuYWJsZWpzYXBpIiwiZnMiLCJyZWwiLCJzaG93aW5mbyIsIml2X2xvYWRfcG9saWN5IiwibW9kZXN0YnJhbmRpbmciLCJldmVudHMiLCJvblJlYWR5Iiwib25TdGF0ZUNoYW5nZSIsInN0b3BWaWRlbyIsImluaXRDYXJvdXNlbCIsIiRjYXJvdXNlbCIsImkiLCJsZW5ndGgiLCJ5b3V0dWJlQ2Fyb3VzZWxGYWN0b3J5IiwibWVkaWFRdWVyeUxpc3RGYWN0b3J5Iiwid2luZG93Iiwib25Zb3VUdWJlSWZyYW1lQVBJUmVhZHkiLCJ0YWciLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzcmMiLCJmaXJzdFNjcmlwdFRhZyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwicGFyZW50Tm9kZSIsImluc2VydEJlZm9yZSIsIkhvbWUiLCJjb250ZXh0IiwiaGFzQ2Fyb3VzZWxWaWRlbyIsIlBhZ2VNYW5hZ2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQSxJQUFJQSxnQkFBSjtBQUNBLElBQUlDLEdBQUcsR0FBRyxDQUFWOztJQUVNQyxZO0FBQ0Ysd0JBQVlDLEtBQVosRUFBbUI7QUFDZixTQUFLQyxNQUFMLEdBQWNDLENBQUMsQ0FBQ0YsS0FBRCxDQUFmO0FBQ0EsU0FBS0csT0FBTCxHQUFlLEtBQUtGLE1BQUwsQ0FBWUcsSUFBWixDQUFpQixnQkFBakIsQ0FBZjtBQUNBLFNBQUtDLFdBQUwsR0FBbUIsS0FBS0EsV0FBTCxDQUFpQkMsSUFBakIsQ0FBc0IsSUFBdEIsQ0FBbkI7QUFDQSxTQUFLQyxtQkFBTCxHQUEyQixLQUFLQSxtQkFBTCxDQUF5QkQsSUFBekIsQ0FBOEIsSUFBOUIsQ0FBM0I7QUFDQSxTQUFLRSxrQkFBTCxHQUEwQixLQUFLQSxrQkFBTCxDQUF3QkYsSUFBeEIsQ0FBNkIsSUFBN0IsQ0FBMUI7QUFDQSxTQUFLRyxhQUFMLEdBQXFCLEtBQUtBLGFBQUwsQ0FBbUJILElBQW5CLENBQXdCLElBQXhCLENBQXJCO0FBQ0EsU0FBS0ksbUJBQUwsR0FBMkIsS0FBS0EsbUJBQUwsQ0FBeUJKLElBQXpCLENBQThCLElBQTlCLENBQTNCO0FBQ0EsU0FBS0ssVUFBTDtBQUNIOzs7O1NBRURBLFUsR0FBQSxzQkFBYTtBQUNULFFBQUksS0FBS1YsTUFBTCxDQUFZVyxRQUFaLENBQXFCLG1CQUFyQixDQUFKLEVBQStDO0FBQzNDLFdBQUtQLFdBQUw7QUFDSDs7QUFFRCxTQUFLSixNQUFMLENBQVlZLEVBQVosQ0FBZSxNQUFmLEVBQXVCLEtBQUtSLFdBQTVCO0FBQ0EsU0FBS0osTUFBTCxDQUFZWSxFQUFaLENBQWUsY0FBZixFQUErQixLQUFLTixt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QUNKLEc7OztFQUw2QnNFLHFEIiwiZmlsZSI6InRoZW1lLWJ1bmRsZS5jaHVuay4xNi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtZWRpYVF1ZXJ5TGlzdEZhY3RvcnkgZnJvbSAnLi4vdGhlbWUvY29tbW9uL21lZGlhLXF1ZXJ5LWxpc3QnO1xuXG5sZXQgbWVkaXVtTWVkaWFRdWVyeTtcbmxldCB1aWQgPSAxO1xuXG5jbGFzcyBZb3V0dWJlU2xpY2sge1xuICAgIGNvbnN0cnVjdG9yKHNsaWNrKSB7XG4gICAgICAgIHRoaXMuJHNsaWNrID0gJChzbGljayk7XG4gICAgICAgIHRoaXMuJHZpZGVvcyA9IHRoaXMuJHNsaWNrLmZpbmQoJ1tkYXRhLXlvdXR1YmVdJyk7XG4gICAgICAgIHRoaXMub25TbGlja0luaXQgPSB0aGlzLm9uU2xpY2tJbml0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25TbGlja0JlZm9yZUNoYW5nZSA9IHRoaXMub25TbGlja0JlZm9yZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uU2xpY2tBZnRlckNoYW5nZSA9IHRoaXMub25TbGlja0FmdGVyQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25QbGF5ZXJSZWFkeSA9IHRoaXMub25QbGF5ZXJSZWFkeS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uUGxheWVyU3RhdGVDaGFuZ2UgPSB0aGlzLm9uUGxheWVyU3RhdGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgYmluZEV2ZW50cygpIHtcbiAgICAgICAgaWYgKHRoaXMuJHNsaWNrLmhhc0NsYXNzKCdzbGljay1pbml0aWFsaXplZCcpKSB7XG4gICAgICAgICAgICB0aGlzLm9uU2xpY2tJbml0KCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiRzbGljay5vbignaW5pdCcsIHRoaXMub25TbGlja0luaXQpO1xuICAgICAgICB0aGlzLiRzbGljay5vbignYmVmb3JlQ2hhbmdlJywgdGhpcy5vblNsaWNrQmVmb3JlQ2hhbmdlKTtcbiAgICAgICAgdGhpcy4kc2xpY2sub24oJ2FmdGVyQ2hhbmdlJywgdGhpcy5vblNsaWNrQWZ0ZXJDaGFuZ2UpO1xuICAgIH1cblxuICAgIG9uUGxheWVyUmVhZHkoZXZlbnQpIHtcbiAgICAgICAgLy8gc3RvcmUgcGxheWVyIG9iamVjdCBmb3IgdXNlIGxhdGVyXG4gICAgICAgICQoZXZlbnQudGFyZ2V0LmdldElmcmFtZSgpKS5jbG9zZXN0KCcuc2xpY2stc2xpZGUnKS5kYXRhKCd5b3V0dWJlLXBsYXllcicsIGV2ZW50LnRhcmdldCk7XG5cbiAgICAgICAgLy8gT24gZGVza3RvcDogUGxheSB2aWRlbyBpZiBmaXJzdCBzbGlkZSBpcyB2aWRlb1xuICAgICAgICBpZiAobWVkaXVtTWVkaWFRdWVyeS5tYXRjaGVzKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoJChldmVudC50YXJnZXQuZ2V0SWZyYW1lKCkpLmNsb3Nlc3QoJy5zbGljay1zbGlkZScpLmhhc0NsYXNzKCdzbGljay1hY3RpdmUnKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRzbGljay5zbGljaygnc2xpY2tQYXVzZScpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMuJHNsaWNrLmRhdGEoJ3lvdXR1YmVNdXRlJykgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudC50YXJnZXQubXV0ZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnRhcmdldC5wbGF5VmlkZW8oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCAyMDApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25QbGF5ZXJTdGF0ZUNoYW5nZShldmVudCkge1xuICAgICAgICAvLyBTdG9wIHNsaWNrIGF1dG9wbGF5IHdoZW4gdmlkZW8gc3RhcnQgcGxheWluZ1xuICAgICAgICBpZiAoZXZlbnQuZGF0YSA9PT0gWVQuUGxheWVyU3RhdGUuUExBWUlORykgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgICAgICAgICB0aGlzLiRzbGljay5hZGRDbGFzcygnc2xpY2stdmlkZW8tcGxheWluZycpO1xuICAgICAgICAgICAgdGhpcy4kc2xpY2suc2xpY2soJ3NsaWNrUGF1c2UnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChldmVudC5kYXRhID09PSBZVC5QbGF5ZXJTdGF0ZS5QQVVTRUQpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgICAgICAgICAgdGhpcy4kc2xpY2sucmVtb3ZlQ2xhc3MoJ3NsaWNrLXZpZGVvLXBsYXlpbmcnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGdvIHRvIG5leHQgc2xpZGUgYW5kIGVuYWJsZSBhdXRvcGxheSBiYWNrIHdoZW4gdmlkZW8gZW5kZWRcbiAgICAgICAgaWYgKGV2ZW50LmRhdGEgPT09IFlULlBsYXllclN0YXRlLkVOREVEKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICAgICAgICAgIHRoaXMuJHNsaWNrLnJlbW92ZUNsYXNzKCdzbGljay12aWRlby1wbGF5aW5nJyk7XG4gICAgICAgICAgICB0aGlzLiRzbGljay5zbGljaygnc2xpY2tQbGF5Jyk7XG4gICAgICAgICAgICB0aGlzLiRzbGljay5zbGljaygnc2xpY2tOZXh0Jyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblNsaWNrSW5pdCgpIHtcbiAgICAgICAgdGhpcy4kdmlkZW9zLmVhY2goKGosIHZpZCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgJHZpZCA9ICQodmlkKTtcbiAgICAgICAgICAgIGNvbnN0IGlkID0gYHlvdXR1YmVfcGxheWVyXyR7dWlkKyt9YDtcblxuICAgICAgICAgICAgJHZpZC5hdHRyKCdpZCcsIGlkKTtcblxuICAgICAgICAgICAgLy8gaW5pdCBwbGF5ZXJcbiAgICAgICAgICAgIGNvbnN0IHBsYXllciA9IG5ldyBZVC5QbGF5ZXIoaWQsIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgICAgICAgICAgICAgIC8vIGhvc3Q6ICdodHRwOi8vd3d3LnlvdXR1YmUuY29tJyxcbiAgICAgICAgICAgICAgICB2aWRlb0lkOiAkdmlkLmRhdGEoJ3lvdXR1YmUnKSxcbiAgICAgICAgICAgICAgICB3bW9kZTogJ3RyYW5zcGFyZW50JyxcbiAgICAgICAgICAgICAgICBwbGF5ZXJWYXJzOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2xzOiAwLFxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxla2I6IDEsXG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZWpzYXBpOiAxLFxuICAgICAgICAgICAgICAgICAgICBmczogMCxcbiAgICAgICAgICAgICAgICAgICAgcmVsOiAwLFxuICAgICAgICAgICAgICAgICAgICBzaG93aW5mbzogMCxcbiAgICAgICAgICAgICAgICAgICAgaXZfbG9hZF9wb2xpY3k6IDMsXG4gICAgICAgICAgICAgICAgICAgIG1vZGVzdGJyYW5kaW5nOiAxLFxuICAgICAgICAgICAgICAgICAgICB3bW9kZTogJ3RyYW5zcGFyZW50JyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGV2ZW50czoge1xuICAgICAgICAgICAgICAgICAgICBvblJlYWR5OiB0aGlzLm9uUGxheWVyUmVhZHksXG4gICAgICAgICAgICAgICAgICAgIG9uU3RhdGVDaGFuZ2U6IHRoaXMub25QbGF5ZXJTdGF0ZUNoYW5nZSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uU2xpY2tCZWZvcmVDaGFuZ2UoKSB7XG4gICAgICAgIGNvbnN0IHBsYXllciA9IHRoaXMuJHNsaWNrLmZpbmQoJy5zbGljay1zbGlkZS5zbGljay1hY3RpdmUnKS5kYXRhKCd5b3V0dWJlLXBsYXllcicpO1xuICAgICAgICBpZiAocGxheWVyKSB7XG4gICAgICAgICAgICBwbGF5ZXIuc3RvcFZpZGVvKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblNsaWNrQWZ0ZXJDaGFuZ2UoKSB7XG4gICAgICAgIC8vIEVuYWJsZSBhdXRvIHNsaWRlXG4gICAgICAgIHRoaXMuJHNsaWNrLnNsaWNrKCdzbGlja1BsYXknKTtcblxuICAgICAgICAvLyBPbiBkZXNrdG9wOlxuICAgICAgICAvLyAtIEF1dG8gcGxheSB2aWRlbyB3aGVuIG9wZW4gbmV4dCBzbGlkZVxuICAgICAgICAvLyAtIFN0b3AgYXV0byBzbGlkZVxuICAgICAgICBpZiAobWVkaXVtTWVkaWFRdWVyeS5tYXRjaGVzKSB7XG4gICAgICAgICAgICBjb25zdCBwbGF5ZXIgPSB0aGlzLiRzbGljay5maW5kKCcuc2xpY2stc2xpZGUuc2xpY2stYWN0aXZlJykuZGF0YSgneW91dHViZS1wbGF5ZXInKTtcbiAgICAgICAgICAgIGlmIChwbGF5ZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRzbGljay5zbGljaygnc2xpY2tQYXVzZScpO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy4kc2xpY2suZGF0YSgneW91dHViZU11dGUnKSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyLm11dGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGxheWVyLnBsYXlWaWRlbygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBpbml0Q2Fyb3VzZWwoJGNhcm91c2VsKSB7XG4gICAgJGNhcm91c2VsLmVhY2goKGksIHNsaWNrKSA9PiB7XG4gICAgICAgIGNvbnN0ICRzbGljayA9ICQoc2xpY2spO1xuICAgICAgICBpZiAoJHNsaWNrLmZpbmQoJ1tkYXRhLXlvdXR1YmVdJykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgJHNsaWNrLmFkZENsYXNzKCdzbGljay1zbGlkZXItLXZpZGVvJyk7XG4gICAgICAgICAgICBuZXcgWW91dHViZVNsaWNrKHNsaWNrKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHlvdXR1YmVDYXJvdXNlbEZhY3RvcnkoJGNhcm91c2VsKSB7XG4gICAgaWYgKCRjYXJvdXNlbC5maW5kKCdbZGF0YS15b3V0dWJlXScpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgbWVkaXVtTWVkaWFRdWVyeSA9IG1lZGlhUXVlcnlMaXN0RmFjdG9yeSgnbWVkaXVtJyk7XG5cbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cub25Zb3VUdWJlSWZyYW1lQVBJUmVhZHkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB3aW5kb3cub25Zb3VUdWJlSWZyYW1lQVBJUmVhZHkgPSBpbml0Q2Fyb3VzZWwuYmluZCh3aW5kb3csICRjYXJvdXNlbCk7XG5cbiAgICAgICAgICAgIC8vIExvYWQgdGhlIElGcmFtZSBQbGF5ZXIgQVBJIGNvZGUgYXN5bmNocm9ub3VzbHkuXG4gICAgICAgICAgICBjb25zdCB0YWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgICAgIHRhZy5zcmMgPSAnaHR0cHM6Ly93d3cueW91dHViZS5jb20vcGxheWVyX2FwaSc7XG4gICAgICAgICAgICBjb25zdCBmaXJzdFNjcmlwdFRhZyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzY3JpcHQnKVswXTtcbiAgICAgICAgICAgIGZpcnN0U2NyaXB0VGFnLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHRhZywgZmlyc3RTY3JpcHRUYWcpO1xuXG4gICAgICAgICAgICAvLyAkKCdib2R5JykuYXBwZW5kKCc8c2NyaXB0IHNyYz1cImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2lmcmFtZV9hcGlcIj48L3NjcmlwdD4nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGluaXRDYXJvdXNlbCgkY2Fyb3VzZWwpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IFBhZ2VNYW5hZ2VyIGZyb20gJy4vcGFnZS1tYW5hZ2VyJztcbmltcG9ydCB5b3V0dWJlQ2Fyb3VzZWxGYWN0b3J5IGZyb20gJy4uL2NoaWFyYS95b3V0dWJlLWNhcm91c2VsJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZSBleHRlbmRzIFBhZ2VNYW5hZ2VyIHtcbiAgICBvblJlYWR5KCkge1xuICAgICAgICBpZiAodGhpcy5jb250ZXh0Lmhhc0Nhcm91c2VsVmlkZW8pIHtcbiAgICAgICAgICAgIHlvdXR1YmVDYXJvdXNlbEZhY3RvcnkoJCgnW2RhdGEtc2xpY2tdJykpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==