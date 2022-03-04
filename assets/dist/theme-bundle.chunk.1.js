(window["webpackJsonpWebpackChiara"] = window["webpackJsonpWebpackChiara"] || []).push([[1],{

/***/ "./assets/js/chiara/infinite-scroll.js":
/*!*********************************************!*\
  !*** ./assets/js/chiara/infinite-scroll.js ***!
  \*********************************************/
/*! exports provided: default, initBrandPage, initCategoryPage, initBrandsPage, initSearchPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initBrandPage", function() { return initBrandPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initCategoryPage", function() { return initCategoryPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initBrandsPage", function() { return initBrandsPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initSearchPage", function() { return initSearchPage; });
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/extend */ "./node_modules/lodash/extend.js");
/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_extend__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");




var InfiniteScroll = /*#__PURE__*/function () {
  function InfiniteScroll($scope, options, context) {
    var defaultOptions = {
      containerSelector: '.productGrid',
      paginationSelector: '.pagination',
      nextLinkSelector: '.pagination-item--next .pagination-link',
      loadingClass: 'is-loading',
      threshold: 100,
      appendSelector: '.product',
      template: 'chiara/category/ajax-product-listing',
      config: {}
    };
    this.options = lodash_extend__WEBPACK_IMPORTED_MODULE_1___default()({}, defaultOptions, options);
    this.$scope = $scope;
    this.context = context;
    this.isRequesting = false;
    this.onScroll = this.onScroll.bind(this);
    this.bindEvents();
  }

  var _proto = InfiniteScroll.prototype;

  _proto.bindEvents = function bindEvents() {
    $(window).on('scroll', lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()(this.onScroll, 200));
  };

  _proto.onScroll = function onScroll() {
    if (this.isRequesting) {
      return;
    }

    var $pagination = $(this.options.paginationSelector, this.$scope);
    var $nextLink = $(this.options.nextLinkSelector, $pagination);

    if ($nextLink.length === 0) {
      return;
    }

    var top = $nextLink.offset().top - this.options.threshold;
    var y1 = $(window).scrollTop();
    var y2 = y1 + $(window).height();

    if (top >= y1 && top <= y2) {
      var href = $nextLink.attr('href').replace(/&?limit=[0-9]+/, '') + ("&limit=" + this.context.themeSettings.products_per_page);
      this.request(href);
    }
  };

  _proto.request = function request(url) {
    var _this = this;

    var $container = $(this.options.containerSelector, this.$scope);
    var $pagination = $(this.options.paginationSelector, this.$scope);
    this.isRequesting = true;
    $pagination.addClass(this.options.loadingClass);
    $container.addClass(this.options.loadingClass);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_2__["api"].getPage(url, {
      template: this.options.template,
      config: this.options.config
    }, function (err, resp) {
      _this.isRequesting = false;
      $pagination.removeClass(_this.options.loadingClass);
      $container.removeClass(_this.options.loadingClass);

      if (err) {
        return err;
      }

      var $resp = $(resp);
      var $append = $(_this.options.appendSelector, $resp);

      if ($append.length > 0) {
        $container.append($append);
      }

      var $newPagination = $resp.find(_this.options.paginationSelector);
      $pagination.empty().append($newPagination.children());
    });
  };

  return InfiniteScroll;
}();

/* harmony default export */ __webpack_exports__["default"] = (InfiniteScroll);
function initBrandPage(context) {
  $('[data-brand-infinite-scroll]').each(function (i, el) {
    new InfiniteScroll($(el), {
      // eslint-disable-line
      template: 'chiara/brand/ajax-product-listing',
      config: {
        brand: {
          products: {
            limit: parseInt(context.themeSettings.products_per_page, 10)
          }
        }
      }
    }, context);
  });
}
function initCategoryPage(context) {
  $('[data-category-infinite-scroll]').each(function (i, el) {
    new InfiniteScroll($(el), {
      // eslint-disable-line
      config: {
        category: {
          products: {
            limit: parseInt(context.themeSettings.products_per_page, 10)
          }
        }
      }
    }, context);
  });
}
function initBrandsPage(context) {
  $('[data-brands-infinite-scroll]').each(function (i, el) {
    var infScroll = new InfiniteScroll($(el), {
      // eslint-disable-line
      containerSelector: '.brandGrid',
      appendSelector: '.brand',
      template: 'chiara/brand/ajax-brand-listing',
      config: {
        brands: {
          limit: parseInt(context.themeSettings.products_per_page, 10)
        }
      }
    }, context);
  });
}
function initSearchPage(context) {
  $('[data-search-infinite-scroll]').each(function (i, el) {
    var infScroll = new InfiniteScroll($(el), {
      // eslint-disable-line
      template: 'chiara/search/ajax-product-listing',
      config: {
        product_results: {
          limit: parseInt(context.themeSettings.products_per_page, 10)
        }
      }
    }, context);
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9XZWJwYWNrQ2hpYXJhLy4vYXNzZXRzL2pzL2NoaWFyYS9pbmZpbml0ZS1zY3JvbGwuanMiXSwibmFtZXMiOlsiSW5maW5pdGVTY3JvbGwiLCIkc2NvcGUiLCJvcHRpb25zIiwiY29udGV4dCIsImRlZmF1bHRPcHRpb25zIiwiY29udGFpbmVyU2VsZWN0b3IiLCJwYWdpbmF0aW9uU2VsZWN0b3IiLCJuZXh0TGlua1NlbGVjdG9yIiwibG9hZGluZ0NsYXNzIiwidGhyZXNob2xkIiwiYXBwZW5kU2VsZWN0b3IiLCJ0ZW1wbGF0ZSIsImNvbmZpZyIsImlzUmVxdWVzdGluZyIsIm9uU2Nyb2xsIiwiYmluZCIsImJpbmRFdmVudHMiLCIkIiwid2luZG93Iiwib24iLCIkcGFnaW5hdGlvbiIsIiRuZXh0TGluayIsImxlbmd0aCIsInRvcCIsIm9mZnNldCIsInkxIiwic2Nyb2xsVG9wIiwieTIiLCJoZWlnaHQiLCJocmVmIiwiYXR0ciIsInJlcGxhY2UiLCJ0aGVtZVNldHRpbmdzIiwicHJvZHVjdHNfcGVyX3BhZ2UiLCJyZXF1ZXN0IiwidXJsIiwiJGNvbnRhaW5lciIsImFkZENsYXNzIiwiYXBpIiwiZ2V0UGFnZSIsImVyciIsInJlc3AiLCJyZW1vdmVDbGFzcyIsIiRyZXNwIiwiJGFwcGVuZCIsImFwcGVuZCIsIiRuZXdQYWdpbmF0aW9uIiwiZmluZCIsImVtcHR5IiwiY2hpbGRyZW4iLCJpbml0QnJhbmRQYWdlIiwiZWFjaCIsImkiLCJlbCIsImJyYW5kIiwicHJvZHVjdHMiLCJsaW1pdCIsInBhcnNlSW50IiwiaW5pdENhdGVnb3J5UGFnZSIsImNhdGVnb3J5IiwiaW5pdEJyYW5kc1BhZ2UiLCJpbmZTY3JvbGwiLCJicmFuZHMiLCJpbml0U2VhcmNoUGFnZSIsInByb2R1Y3RfcmVzdWx0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOztJQUVNQSxjO0FBQ0YsMEJBQVlDLE1BQVosRUFBb0JDLE9BQXBCLEVBQTZC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QUFDQyxDQUFELEVBQUlDLEVBQUosRUFBVztBQUMvQyxRQUFNUSxTQUFTLEdBQUcsSUFBSTdELGNBQUosQ0FBbUJpQixDQUFDLENBQUNvQyxFQUFELENBQXBCLEVBQTBCO0FBQUU7QUFDMUMxQyxjQUFRLEVBQUUsb0NBRDhCO0FBRXhDQyxZQUFNLEVBQUU7QUFDSm9ELHVCQUFlLEVBQUU7QUFDYlIsZUFBSyxFQUFFQyxRQUFRLENBQUN0RCxPQUFPLENBQUM2QixhQUFSLENBQXNCQyxpQkFBdkIsRUFBMEMsRUFBMUM7QUFERjtBQURiO0FBRmdDLEtBQTFCLEVBT2Y5QixPQVBlLENBQWxCO0FBUUgsR0FURDtBQVVILEMiLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgYXBpIH0gZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xuXG5jbGFzcyBJbmZpbml0ZVNjcm9sbCB7XG4gICAgY29uc3RydWN0b3IoJHNjb3BlLCBvcHRpb25zLCBjb250ZXh0KSB7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xuICAgICAgICAgICAgY29udGFpbmVyU2VsZWN0b3I6ICcucHJvZHVjdEdyaWQnLFxuICAgICAgICAgICAgcGFnaW5hdGlvblNlbGVjdG9yOiAnLnBhZ2luYXRpb24nLFxuICAgICAgICAgICAgbmV4dExpbmtTZWxlY3RvcjogJy5wYWdpbmF0aW9uLWl0ZW0tLW5leHQgLnBhZ2luYXRpb24tbGluaycsXG4gICAgICAgICAgICBsb2FkaW5nQ2xhc3M6ICdpcy1sb2FkaW5nJyxcbiAgICAgICAgICAgIHRocmVzaG9sZDogMTAwLFxuICAgICAgICAgICAgYXBwZW5kU2VsZWN0b3I6ICcucHJvZHVjdCcsXG4gICAgICAgICAgICB0ZW1wbGF0ZTogJ2NoaWFyYS9jYXRlZ29yeS9hamF4LXByb2R1Y3QtbGlzdGluZycsXG4gICAgICAgICAgICBjb25maWc6IHt9LFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBfLmV4dGVuZCh7fSwgZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMpO1xuICAgICAgICB0aGlzLiRzY29wZSA9ICRzY29wZTtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICAgICAgdGhpcy5pc1JlcXVlc3RpbmcgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLm9uU2Nyb2xsID0gdGhpcy5vblNjcm9sbC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcbiAgICB9XG5cbiAgICBiaW5kRXZlbnRzKCkge1xuICAgICAgICAkKHdpbmRvdykub24oJ3Njcm9sbCcsIF8uZGVib3VuY2UodGhpcy5vblNjcm9sbCwgMjAwKSk7XG4gICAgfVxuXG4gICAgb25TY3JvbGwoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzUmVxdWVzdGluZykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgJHBhZ2luYXRpb24gPSAkKHRoaXMub3B0aW9ucy5wYWdpbmF0aW9uU2VsZWN0b3IsIHRoaXMuJHNjb3BlKTtcblxuICAgICAgICBjb25zdCAkbmV4dExpbmsgPSAkKHRoaXMub3B0aW9ucy5uZXh0TGlua1NlbGVjdG9yLCAkcGFnaW5hdGlvbik7XG4gICAgICAgIGlmICgkbmV4dExpbmsubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB0b3AgPSAkbmV4dExpbmsub2Zmc2V0KCkudG9wIC0gdGhpcy5vcHRpb25zLnRocmVzaG9sZDtcbiAgICAgICAgY29uc3QgeTEgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG4gICAgICAgIGNvbnN0IHkyID0geTEgKyAkKHdpbmRvdykuaGVpZ2h0KCk7XG5cbiAgICAgICAgaWYgKHRvcCA+PSB5MSAmJiB0b3AgPD0geTIpIHtcbiAgICAgICAgICAgIGNvbnN0IGhyZWYgPSAkbmV4dExpbmsuYXR0cignaHJlZicpLnJlcGxhY2UoLyY/bGltaXQ9WzAtOV0rLywgJycpICsgYCZsaW1pdD0ke3RoaXMuY29udGV4dC50aGVtZVNldHRpbmdzLnByb2R1Y3RzX3Blcl9wYWdlfWA7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMucmVxdWVzdChocmVmKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlcXVlc3QodXJsKSB7XG4gICAgICAgIGNvbnN0ICRjb250YWluZXIgPSAkKHRoaXMub3B0aW9ucy5jb250YWluZXJTZWxlY3RvciwgdGhpcy4kc2NvcGUpO1xuICAgICAgICBjb25zdCAkcGFnaW5hdGlvbiA9ICQodGhpcy5vcHRpb25zLnBhZ2luYXRpb25TZWxlY3RvciwgdGhpcy4kc2NvcGUpO1xuXG4gICAgICAgIHRoaXMuaXNSZXF1ZXN0aW5nID0gdHJ1ZTtcbiAgICAgICAgJHBhZ2luYXRpb24uYWRkQ2xhc3ModGhpcy5vcHRpb25zLmxvYWRpbmdDbGFzcyk7XG4gICAgICAgICRjb250YWluZXIuYWRkQ2xhc3ModGhpcy5vcHRpb25zLmxvYWRpbmdDbGFzcyk7XG5cbiAgICAgICAgYXBpLmdldFBhZ2UodXJsLCB7XG4gICAgICAgICAgICB0ZW1wbGF0ZTogdGhpcy5vcHRpb25zLnRlbXBsYXRlLFxuICAgICAgICAgICAgY29uZmlnOiB0aGlzLm9wdGlvbnMuY29uZmlnLFxuICAgICAgICB9LCAoZXJyLCByZXNwKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmlzUmVxdWVzdGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgJHBhZ2luYXRpb24ucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLmxvYWRpbmdDbGFzcyk7XG4gICAgICAgICAgICAkY29udGFpbmVyLnJlbW92ZUNsYXNzKHRoaXMub3B0aW9ucy5sb2FkaW5nQ2xhc3MpO1xuXG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVycjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgJHJlc3AgPSAkKHJlc3ApO1xuXG4gICAgICAgICAgICBjb25zdCAkYXBwZW5kID0gJCh0aGlzLm9wdGlvbnMuYXBwZW5kU2VsZWN0b3IsICRyZXNwKTtcbiAgICAgICAgICAgIGlmICgkYXBwZW5kLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAkY29udGFpbmVyLmFwcGVuZCgkYXBwZW5kKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgJG5ld1BhZ2luYXRpb24gPSAkcmVzcC5maW5kKHRoaXMub3B0aW9ucy5wYWdpbmF0aW9uU2VsZWN0b3IpO1xuICAgICAgICAgICAgJHBhZ2luYXRpb25cbiAgICAgICAgICAgICAgICAuZW1wdHkoKVxuICAgICAgICAgICAgICAgIC5hcHBlbmQoJG5ld1BhZ2luYXRpb24uY2hpbGRyZW4oKSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5maW5pdGVTY3JvbGw7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0QnJhbmRQYWdlKGNvbnRleHQpIHtcbiAgICAkKCdbZGF0YS1icmFuZC1pbmZpbml0ZS1zY3JvbGxdJykuZWFjaCgoaSwgZWwpID0+IHtcbiAgICAgICAgbmV3IEluZmluaXRlU2Nyb2xsKCQoZWwpLCB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICAgICAgICAgIHRlbXBsYXRlOiAnY2hpYXJhL2JyYW5kL2FqYXgtcHJvZHVjdC1saXN0aW5nJyxcbiAgICAgICAgICAgIGNvbmZpZzoge1xuICAgICAgICAgICAgICAgIGJyYW5kOiB7XG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW1pdDogcGFyc2VJbnQoY29udGV4dC50aGVtZVNldHRpbmdzLnByb2R1Y3RzX3Blcl9wYWdlLCAxMCksXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sIGNvbnRleHQpO1xuICAgIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdENhdGVnb3J5UGFnZShjb250ZXh0KSB7XG4gICAgJCgnW2RhdGEtY2F0ZWdvcnktaW5maW5pdGUtc2Nyb2xsXScpLmVhY2goKGksIGVsKSA9PiB7XG4gICAgICAgIG5ldyBJbmZpbml0ZVNjcm9sbCgkKGVsKSwgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgICAgICAgICBjb25maWc6IHtcbiAgICAgICAgICAgICAgICBjYXRlZ29yeToge1xuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0czoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGltaXQ6IHBhcnNlSW50KGNvbnRleHQudGhlbWVTZXR0aW5ncy5wcm9kdWN0c19wZXJfcGFnZSwgMTApLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LCBjb250ZXh0KTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRCcmFuZHNQYWdlKGNvbnRleHQpIHtcbiAgICAkKCdbZGF0YS1icmFuZHMtaW5maW5pdGUtc2Nyb2xsXScpLmVhY2goKGksIGVsKSA9PiB7XG4gICAgICAgIGNvbnN0IGluZlNjcm9sbCA9IG5ldyBJbmZpbml0ZVNjcm9sbCgkKGVsKSwgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgICAgICAgICBjb250YWluZXJTZWxlY3RvcjogJy5icmFuZEdyaWQnLFxuICAgICAgICAgICAgYXBwZW5kU2VsZWN0b3I6ICcuYnJhbmQnLFxuICAgICAgICAgICAgdGVtcGxhdGU6ICdjaGlhcmEvYnJhbmQvYWpheC1icmFuZC1saXN0aW5nJyxcbiAgICAgICAgICAgIGNvbmZpZzoge1xuICAgICAgICAgICAgICAgIGJyYW5kczoge1xuICAgICAgICAgICAgICAgICAgICBsaW1pdDogcGFyc2VJbnQoY29udGV4dC50aGVtZVNldHRpbmdzLnByb2R1Y3RzX3Blcl9wYWdlLCAxMCksXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sIGNvbnRleHQpO1xuICAgIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdFNlYXJjaFBhZ2UoY29udGV4dCkge1xuICAgICQoJ1tkYXRhLXNlYXJjaC1pbmZpbml0ZS1zY3JvbGxdJykuZWFjaCgoaSwgZWwpID0+IHtcbiAgICAgICAgY29uc3QgaW5mU2Nyb2xsID0gbmV3IEluZmluaXRlU2Nyb2xsKCQoZWwpLCB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICAgICAgICAgIHRlbXBsYXRlOiAnY2hpYXJhL3NlYXJjaC9hamF4LXByb2R1Y3QtbGlzdGluZycsXG4gICAgICAgICAgICBjb25maWc6IHtcbiAgICAgICAgICAgICAgICBwcm9kdWN0X3Jlc3VsdHM6IHtcbiAgICAgICAgICAgICAgICAgICAgbGltaXQ6IHBhcnNlSW50KGNvbnRleHQudGhlbWVTZXR0aW5ncy5wcm9kdWN0c19wZXJfcGFnZSwgMTApLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LCBjb250ZXh0KTtcbiAgICB9KTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=