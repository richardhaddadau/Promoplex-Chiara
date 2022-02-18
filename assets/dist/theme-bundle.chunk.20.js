(window["webpackJsonpWebpackChiara"] = window["webpackJsonpWebpackChiara"] || []).push([[20],{

/***/ "./assets/js/chiara/products-by-category.js":
/*!**************************************************!*\
  !*** ./assets/js/chiara/products-by-category.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");


var ProductsByCategory = /*#__PURE__*/function () {
  function ProductsByCategory($scope) {
    this.$scope = $scope;
    this.url = this.$scope.data('url');
    this.type = this.$scope.data('type');
    this.$content = this.$scope.is('[data-content]') ? this.$scope : this.$scope.find('[data-content]');
    this.loadProducts();
  }

  var _proto = ProductsByCategory.prototype;

  _proto.loadProducts = function loadProducts() {
    var _this = this;

    var template = "chiara/products-by-category/" + (this.type == 'carousel' ? 'carousel' : 'grid');
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__["default"].api.getPage(this.url, {
      template: template
    }, function (err, resp) {
      _this.$scope.find('[data-loader]').remove();

      _this.$content.append(resp);

      _this.$content.find('[data-slick]').slick();
    });
  };

  return ProductsByCategory;
}();

/* harmony default export */ __webpack_exports__["default"] = (function (selector) {
  if (selector === void 0) {
    selector = '[data-products-by-category]';
  }

  return $(selector).get().map(function (el) {
    return new ProductsByCategory($(el));
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9XZWJwYWNrQ2hpYXJhLy4vYXNzZXRzL2pzL2NoaWFyYS9wcm9kdWN0cy1ieS1jYXRlZ29yeS5qcyJdLCJuYW1lcyI6WyJQcm9kdWN0c0J5Q2F0ZWdvcnkiLCIkc2NvcGUiLCJ1cmwiLCJkYXRhIiwidHlwZSIsIiRjb250ZW50IiwiaXMiLCJmaW5kIiwibG9hZFByb2R1Y3RzIiwidGVtcGxhdGUiLCJ1dGlscyIsImFwaSIsImdldFBhZ2UiLCJlcnIiLCJyZXNwIiwicmVtb3ZlIiwiYXBwZW5kIiwic2xpY2siLCJzZWxlY3RvciIsIiQiLCJnZXQiLCJtYXAiLCJlbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTs7SUFFTUEsa0I7QUFDRiw4QkFBWUMsTUFBWixFQUFvQjtBQUNoQixTQUFLQSxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxTQUFLQyxHQUFMLEdBQVcsS0FBS0QsTUFBTCxDQUFZRSxJQUFaLENBQWlCLEtBQWpCLENBQVg7QUFDQSxTQUFLQyxJQUFMLEdBQVksS0FBS0gsTUFBTCxDQUFZRSxJQUFaLENBQWlCLE1BQWpCLENBQVo7QUFDQSxTQUFLRSxRQUFMLEdBQWdCLEtBQUtKLE1BQUwsQ0FBWUssRUFBWixDQUFlLGdCQUFmLElBQW1DLEtBQUtMLE1BQXhDLEdBQWlELEtBQUtBLE1BQUwsQ0FBWU0sSUFBWixDQUFpQixnQkFBakIsQ0FBakU7QUFFQSxTQUFLQyxZQUFMO0FBQ0g7Ozs7U0FFREEsWSxHQUFBLHdCQUFlO0FBQUE7O0FBQ1gsUUFBTUMsUUFBUSxxQ0FBa0MsS0FBS0wsSUFBTCxJQUFhLFVBQWIsR0FBMEIsVUFBMUIsR0FBdUMsTUFBekUsQ0FBZDtBQUNBTSxzRUFBSyxDQUFDQyxHQUFOLENBQVVDLE9BQVYsQ0FBa0IsS0FBS1YsR0FBdkIsRUFBNEI7QUFBRU8sY0FBUSxFQUFSQTtBQUFGLEtBQTVCLEVBQTBDLFVBQUNJLEdBQUQsRUFBTUMsSUFBTixFQUFlO0FBQ3JELFdBQUksQ0FBQ2IsTUFBTCxDQUFZTSxJQUFaLENBQWlCLGVBQWpCLEVBQWtDUSxNQUFsQzs7QUFDQSxXQUFJLENBQUNWLFFBQUwsQ0FBY1csTUFBZCxDQUFxQkYsSUFBckI7O0FBQ0EsV0FBSSxDQUFDVCxRQUFMLENBQWNFLElBQWQsQ0FBbUIsY0FBbkIsRUFBbUNVLEtBQW5DO0FBQ0gsS0FKRDtBQUtILEc7Ozs7O0FBR1UseUVBQVVDLFFBQVYsRUFBb0Q7QUFBQSxNQUExQ0EsUUFBMEM7QUFBMUNBLFlBQTBDLEdBQS9CLDZCQUErQjtBQUFBOztBQUMvRCxTQUFPQyxDQUFDLENBQUNELFFBQUQsQ0FBRCxDQUFZRSxHQUFaLEdBQWtCQyxHQUFsQixDQUFzQixVQUFBQyxFQUFFO0FBQUEsV0FBSSxJQUFJdEIsa0JBQUosQ0FBdUJtQixDQUFDLENBQUNHLEVBQUQsQ0FBeEIsQ0FBSjtBQUFBLEdBQXhCLENBQVA7QUFDSCxDIiwiZmlsZSI6InRoZW1lLWJ1bmRsZS5jaHVuay4yMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1dGlscyBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XG5cbmNsYXNzIFByb2R1Y3RzQnlDYXRlZ29yeSB7XG4gICAgY29uc3RydWN0b3IoJHNjb3BlKSB7XG4gICAgICAgIHRoaXMuJHNjb3BlID0gJHNjb3BlO1xuICAgICAgICB0aGlzLnVybCA9IHRoaXMuJHNjb3BlLmRhdGEoJ3VybCcpO1xuICAgICAgICB0aGlzLnR5cGUgPSB0aGlzLiRzY29wZS5kYXRhKCd0eXBlJyk7XG4gICAgICAgIHRoaXMuJGNvbnRlbnQgPSB0aGlzLiRzY29wZS5pcygnW2RhdGEtY29udGVudF0nKSA/IHRoaXMuJHNjb3BlIDogdGhpcy4kc2NvcGUuZmluZCgnW2RhdGEtY29udGVudF0nKTtcblxuICAgICAgICB0aGlzLmxvYWRQcm9kdWN0cygpO1xuICAgIH1cblxuICAgIGxvYWRQcm9kdWN0cygpIHtcbiAgICAgICAgY29uc3QgdGVtcGxhdGUgPSBgY2hpYXJhL3Byb2R1Y3RzLWJ5LWNhdGVnb3J5LyR7dGhpcy50eXBlID09ICdjYXJvdXNlbCcgPyAnY2Fyb3VzZWwnIDogJ2dyaWQnfWA7XG4gICAgICAgIHV0aWxzLmFwaS5nZXRQYWdlKHRoaXMudXJsLCB7IHRlbXBsYXRlIH0sIChlcnIsIHJlc3ApID0+IHtcbiAgICAgICAgICAgIHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLWxvYWRlcl0nKS5yZW1vdmUoKTtcbiAgICAgICAgICAgIHRoaXMuJGNvbnRlbnQuYXBwZW5kKHJlc3ApO1xuICAgICAgICAgICAgdGhpcy4kY29udGVudC5maW5kKCdbZGF0YS1zbGlja10nKS5zbGljaygpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChzZWxlY3RvciA9ICdbZGF0YS1wcm9kdWN0cy1ieS1jYXRlZ29yeV0nKSB7XG4gICAgcmV0dXJuICQoc2VsZWN0b3IpLmdldCgpLm1hcChlbCA9PiBuZXcgUHJvZHVjdHNCeUNhdGVnb3J5KCQoZWwpKSk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9