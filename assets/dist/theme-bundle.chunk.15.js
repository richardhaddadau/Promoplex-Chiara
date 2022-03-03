(window["webpackJsonpWebpackChiara"] = window["webpackJsonpWebpackChiara"] || []).push([[15],{

/***/ "./assets/js/chiara/display-type.js":
/*!******************************************!*\
  !*** ./assets/js/chiara/display-type.js ***!
  \******************************************/
/*! exports provided: DisplayType, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayType", function() { return DisplayType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return displayTypeFactory; });
/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/extend */ "./node_modules/lodash/extend.js");
/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_extend__WEBPACK_IMPORTED_MODULE_0__);

var PLUGIN_KEY = {
  CAMEL: 'displayType',
  SNAKE: 'display-type'
};

function prependHash(id) {
  if (id && id.indexOf('#') === 0) {
    return id;
  }

  return "#" + id;
}

function optionsFromData($element) {
  return {
    inputName: $element.data(PLUGIN_KEY.CAMEL + "InputName"),
    prefixClassName: $element.data(PLUGIN_KEY.CAMEL + "PrefixClassName")
  };
}

var DisplayType = /*#__PURE__*/function () {
  function DisplayType($form, $target, _temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        _ref$inputName = _ref.inputName,
        inputName = _ref$inputName === void 0 ? 'display-type' : _ref$inputName,
        _ref$prefixClassName = _ref.prefixClassName,
        prefixClassName = _ref$prefixClassName === void 0 ? 'display-type-' : _ref$prefixClassName;

    this.inputName = inputName;
    this.prefixClassName = prefixClassName;
    this.$form = $form;
    this.$target = $target;
    this.onInputChange = this.onInputChange.bind(this);
    this.update($("input[name=" + this.inputName + "]:checked", this.$form).val());
    this.bindEvents();
  }

  var _proto = DisplayType.prototype;

  _proto.update = function update(value) {
    var _this = this;

    this.$target.each(function (i, el) {
      for (var j = 0; j < el.classList.length; j++) {
        var className = el.classList.item(j);

        if (className.indexOf(_this.prefixClassName) === 0) {
          _this.$target.removeClass(className);
        }
      }
    });
    this.$target.addClass("" + this.prefixClassName + value);
  };

  _proto.onInputChange = function onInputChange(event) {
    this.update($(event.target).val());
  };

  _proto.bindEvents = function bindEvents() {
    this.$form.on('change', "input[name=" + this.inputName + "]", this.onInputChange);
  };

  _proto.unbindEvents = function unbindEvents() {
    this.$form.off('change', "input[name=" + this.inputName + "]", this.onInputChange);
  };

  return DisplayType;
}();
function displayTypeFactory(selector, overrideOptions) {
  if (selector === void 0) {
    selector = "[data-" + PLUGIN_KEY.SNAKE + "]";
  }

  if (overrideOptions === void 0) {
    overrideOptions = {};
  }

  var $forms = $(selector, overrideOptions.$context);
  return $forms.map(function (index, form) {
    var $form = $(form);
    var instanceKey = PLUGIN_KEY.CAMEL + "Instance";
    var cachedInstance = $form.data(instanceKey);

    if (cachedInstance instanceof DisplayType) {
      return cachedInstance;
    }

    var targetId = prependHash($form.data(PLUGIN_KEY.CAMEL) || $form.data(PLUGIN_KEY.CAMEL + "Target") || $form.attr('href'));

    var options = lodash_extend__WEBPACK_IMPORTED_MODULE_0___default()(optionsFromData($form), overrideOptions);

    var instance = new DisplayType($form, $(targetId), options);
    $form.data(instanceKey, instance);
    return instance;
  }).toArray();
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/brands.js":
/*!***********************************!*\
  !*** ./assets/js/theme/brands.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Brands; });
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _chiara_display_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../chiara/display-type */ "./assets/js/chiara/display-type.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


 // Chiara MOD

var Brands = /*#__PURE__*/function (_PageManager) {
  _inheritsLoose(Brands, _PageManager);

  function Brands() {
    return _PageManager.apply(this, arguments) || this;
  }

  var _proto = Brands.prototype;

  // Chiara MOD
  _proto.onReady = function onReady() {
    Object(_chiara_display_type__WEBPACK_IMPORTED_MODULE_1__["default"])(); // Chiara

    this.initInfiniteScroll();
  } // Chiara
  ;

  _proto.initInfiniteScroll = function initInfiniteScroll() {
    var _this = this;

    if (this.context.themeSettings.brandspage_infiniteScroll) {
      __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ../chiara/infinite-scroll */ "./assets/js/chiara/infinite-scroll.js")).then(function (module) {
        return module.initBrandsPage(_this.context);
      });
    }
  };

  return Brands;
}(_page_manager__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9XZWJwYWNrQ2hpYXJhLy4vYXNzZXRzL2pzL2NoaWFyYS9kaXNwbGF5LXR5cGUuanMiLCJ3ZWJwYWNrOi8vV2VicGFja0NoaWFyYS8uL2Fzc2V0cy9qcy90aGVtZS9icmFuZHMuanMiXSwibmFtZXMiOlsiUExVR0lOX0tFWSIsIkNBTUVMIiwiU05BS0UiLCJwcmVwZW5kSGFzaCIsImlkIiwiaW5kZXhPZiIsIm9wdGlvbnNGcm9tRGF0YSIsIiRlbGVtZW50IiwiaW5wdXROYW1lIiwiZGF0YSIsInByZWZpeENsYXNzTmFtZSIsIkRpc3BsYXlUeXBlIiwiJGZvcm0iLCIkdGFyZ2V0Iiwib25JbnB1dENoYW5nZSIsImJpbmQiLCJ1cGRhdGUiLCIkIiwidmFsIiwiYmluZEV2ZW50cyIsInZhbHVlIiwiZWFjaCIsImkiLCJlbCIsImoiLCJjbGFzc0xpc3QiLCJsZW5ndGgiLCJjbGFzc05hbWUiLCJpdGVtIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsImV2ZW50IiwidGFyZ2V0Iiwib24iLCJ1bmJpbmRFdmVudHMiLCJvZmYiLCJkaXNwbGF5VHlwZUZhY3RvcnkiLCJzZWxlY3RvciIsIm92ZXJyaWRlT3B0aW9ucyIsIiRmb3JtcyIsIiRjb250ZXh0IiwibWFwIiwiaW5kZXgiLCJmb3JtIiwiaW5zdGFuY2VLZXkiLCJjYWNoZWRJbnN0YW5jZSIsInRhcmdldElkIiwiYXR0ciIsIm9wdGlvbnMiLCJpbnN0YW5jZSIsInRvQXJyYXkiLCJCcmFuZHMiLCJvblJlYWR5IiwiaW5pdEluZmluaXRlU2Nyb2xsIiwiY29udGV4dCIsInRoZW1lU2V0dGluZ3MiLCJicmFuZHNwYWdlX2luZmluaXRlU2Nyb2xsIiwidGhlbiIsIm1vZHVsZSIsImluaXRCcmFuZHNQYWdlIiwiUGFnZU1hbmFnZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVLEdBQUc7QUFDZkMsT0FBSyxFQUFFLGFBRFE7QUFFZkMsT0FBSyxFQUFFO0FBRlEsQ0FBbkI7O0FBS0EsU0FBU0MsV0FBVCxDQUFxQkMsRUFBckIsRUFBeUI7QUFDckIsTUFBSUEsRUFBRSxJQUFJQSxFQUFFLENBQUNDLE9BQUgsQ0FBVyxHQUFYLE1BQW9CLENBQTlCLEVBQWlDO0FBQzdCLFdBQU9ELEVBQVA7QUFDSDs7QUFFRCxlQUFXQSxFQUFYO0FBQ0g7O0FBRUQsU0FBU0UsZUFBVCxDQUF5QkMsUUFBekIsRUFBbUM7QUFDL0IsU0FBTztBQUNIQyxhQUFTLEVBQUVELFFBQVEsQ0FBQ0UsSUFBVCxDQUFpQlQsVUFBVSxDQUFDQyxLQUE1QixlQURSO0FBRUhTLG1CQUFlLEVBQUVILFFBQVEsQ0FBQ0UsSUFBVCxDQUFpQlQsVUFBVSxDQUFDQyxLQUE1QjtBQUZkLEdBQVA7QUFJSDs7QUFFTSxJQUFNVSxXQUFiO0FBQ0ksdUJBQVlDLEtBQVosRUFBbUJDLE9BQW5CLFNBR1E7QUFBQSxrQ0FBSixFQUFJO0FBQUEsOEJBRkpMLFNBRUk7QUFBQSxRQUZKQSxTQUVJLCtCQUZRLGNBRVI7QUFBQSxvQ0FESkUsZUFDSTtBQUFBLFFBREpBLGVBQ0kscUNBRGMsZUFDZDs7QUFDSixTQUFLRixTQUFMLEdBQWlCQSxTQUFqQjtBQUNBLFNBQUtFLGVBQUwsR0FBdUJBLGVBQXZCO0FBQ0EsU0FBS0UsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsU0FBS0MsT0FBTCxHQUFlQSxPQUFmO0FBRUEsU0FBS0MsYUFBTCxHQUFxQixLQUFLQSxhQUFMLENBQW1CQyxJQUFuQixDQUF3QixJQUF4QixDQUFyQjtBQUVBLFNBQUtDLE1BQUwsQ0FBWUMsQ0FBQyxpQkFBZSxLQUFLVCxTQUFwQixnQkFBMEMsS0FBS0ksS0FBL0MsQ0FBRCxDQUF1RE0sR0FBdkQsRUFBWjtBQUVBLFNBQUtDLFVBQUw7QUFDSDs7QUFmTDs7QUFBQSxTQWlCSUgsTUFqQkosR0FpQkksZ0JBQU9JLEtBQVAsRUFBYztBQUFBOztBQUNWLFNBQUtQLE9BQUwsQ0FBYVEsSUFBYixDQUFrQixVQUFDQyxDQUFELEVBQUlDLEVBQUosRUFBVztBQUN6QixXQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdELEVBQUUsQ0FBQ0UsU0FBSCxDQUFhQyxNQUFqQyxFQUF5Q0YsQ0FBQyxFQUExQyxFQUE4QztBQUMxQyxZQUFNRyxTQUFTLEdBQUdKLEVBQUUsQ0FBQ0UsU0FBSCxDQUFhRyxJQUFiLENBQWtCSixDQUFsQixDQUFsQjs7QUFDQSxZQUFJRyxTQUFTLENBQUN0QixPQUFWLENBQWtCLEtBQUksQ0FBQ0ssZUFBdkIsTUFBNEMsQ0FBaEQsRUFBbUQ7QUFDL0MsZUFBSSxDQUFDRyxPQUFMLENBQWFnQixXQUFiLENBQXlCRixTQUF6QjtBQUNIO0FBQ0o7QUFDSixLQVBEO0FBUUEsU0FBS2QsT0FBTCxDQUFhaUIsUUFBYixNQUF5QixLQUFLcEIsZUFBOUIsR0FBZ0RVLEtBQWhEO0FBQ0gsR0EzQkw7O0FBQUEsU0E2QklOLGFBN0JKLEdBNkJJLHVCQUFjaUIsS0FBZCxFQUFxQjtBQUNqQixTQUFLZixNQUFMLENBQVlDLENBQUMsQ0FBQ2MsS0FBSyxDQUFDQyxNQUFQLENBQUQsQ0FBZ0JkLEdBQWhCLEVBQVo7QUFDSCxHQS9CTDs7QUFBQSxTQWlDSUMsVUFqQ0osR0FpQ0ksc0JBQWE7QUFDVCxTQUFLUCxLQUFMLENBQVdxQixFQUFYLENBQWMsUUFBZCxrQkFBc0MsS0FBS3pCLFNBQTNDLFFBQXlELEtBQUtNLGFBQTlEO0FBQ0gsR0FuQ0w7O0FBQUEsU0FxQ0lvQixZQXJDSixHQXFDSSx3QkFBZTtBQUNYLFNBQUt0QixLQUFMLENBQVd1QixHQUFYLENBQWUsUUFBZixrQkFBdUMsS0FBSzNCLFNBQTVDLFFBQTBELEtBQUtNLGFBQS9EO0FBQ0gsR0F2Q0w7O0FBQUE7QUFBQTtBQTBDZSxTQUFTc0Isa0JBQVQsQ0FBNEJDLFFBQTVCLEVBQXFFQyxlQUFyRSxFQUEyRjtBQUFBLE1BQS9ERCxRQUErRDtBQUEvREEsWUFBK0QsY0FBM0NyQyxVQUFVLENBQUNFLEtBQWdDO0FBQUE7O0FBQUEsTUFBdEJvQyxlQUFzQjtBQUF0QkEsbUJBQXNCLEdBQUosRUFBSTtBQUFBOztBQUN0RyxNQUFNQyxNQUFNLEdBQUd0QixDQUFDLENBQUNvQixRQUFELEVBQVdDLGVBQWUsQ0FBQ0UsUUFBM0IsQ0FBaEI7QUFFQSxTQUFPRCxNQUFNLENBQUNFLEdBQVAsQ0FBVyxVQUFDQyxLQUFELEVBQVFDLElBQVIsRUFBaUI7QUFDL0IsUUFBTS9CLEtBQUssR0FBR0ssQ0FBQyxDQUFDMEIsSUFBRCxDQUFmO0FBQ0EsUUFBTUMsV0FBVyxHQUFNNUMsVUFBVSxDQUFDQyxLQUFqQixhQUFqQjtBQUNBLFFBQU00QyxjQUFjLEdBQUdqQyxLQUFLLENBQUNILElBQU4sQ0FBV21DLFdBQVgsQ0FBdkI7O0FBRUEsUUFBSUMsY0FBYyxZQUFZbEMsV0FBOUIsRUFBMkM7QUFDdkMsYUFBT2tDLGNBQVA7QUFDSDs7QUFFRCxRQUFNQyxRQUFRLEdBQUczQyxXQUFXLENBQUNTLEtBQUssQ0FBQ0gsSUFBTixDQUFXVCxVQUFVLENBQUNDLEtBQXRCLEtBQ3pCVyxLQUFLLENBQUNILElBQU4sQ0FBY1QsVUFBVSxDQUFDQyxLQUF6QixZQUR5QixJQUV6QlcsS0FBSyxDQUFDbUMsSUFBTixDQUFXLE1BQVgsQ0FGd0IsQ0FBNUI7O0FBR0EsUUFBTUMsT0FBTyxHQUFHLHFEQUFTMUMsZUFBZSxDQUFDTSxLQUFELENBQXhCLEVBQWlDMEIsZUFBakMsQ0FBaEI7O0FBQ0EsUUFBTVcsUUFBUSxHQUFHLElBQUl0QyxXQUFKLENBQWdCQyxLQUFoQixFQUF1QkssQ0FBQyxDQUFDNkIsUUFBRCxDQUF4QixFQUFvQ0UsT0FBcEMsQ0FBakI7QUFFQXBDLFNBQUssQ0FBQ0gsSUFBTixDQUFXbUMsV0FBWCxFQUF3QkssUUFBeEI7QUFFQSxXQUFPQSxRQUFQO0FBQ0gsR0FsQk0sRUFrQkpDLE9BbEJJLEVBQVA7QUFtQkgsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEZEO0NBQ3lEOztJQUVwQ0MsTTs7Ozs7Ozs7O0FBQ2pCO1NBQ0FDLE8sR0FBQSxtQkFBVTtBQUNOaEIsd0VBQWtCLEdBRFosQ0FHTjs7QUFDQSxTQUFLaUIsa0JBQUw7QUFDSCxHLENBRUQ7OztTQUNBQSxrQixHQUFBLDhCQUFxQjtBQUFBOztBQUNqQixRQUFJLEtBQUtDLE9BQUwsQ0FBYUMsYUFBYixDQUEyQkMseUJBQS9CLEVBQTBEO0FBQ3RELDhKQUFvQ0MsSUFBcEMsQ0FBeUMsVUFBQUMsTUFBTTtBQUFBLGVBQUlBLE1BQU0sQ0FBQ0MsY0FBUCxDQUFzQixLQUFJLENBQUNMLE9BQTNCLENBQUo7QUFBQSxPQUEvQztBQUNIO0FBQ0osRzs7O0VBZCtCTSxxRCIsImZpbGUiOiJ0aGVtZS1idW5kbGUuY2h1bmsuMTUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuXG5jb25zdCBQTFVHSU5fS0VZID0ge1xuICAgIENBTUVMOiAnZGlzcGxheVR5cGUnLFxuICAgIFNOQUtFOiAnZGlzcGxheS10eXBlJyxcbn07XG5cbmZ1bmN0aW9uIHByZXBlbmRIYXNoKGlkKSB7XG4gICAgaWYgKGlkICYmIGlkLmluZGV4T2YoJyMnKSA9PT0gMCkge1xuICAgICAgICByZXR1cm4gaWQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGAjJHtpZH1gO1xufVxuXG5mdW5jdGlvbiBvcHRpb25zRnJvbURhdGEoJGVsZW1lbnQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBpbnB1dE5hbWU6ICRlbGVtZW50LmRhdGEoYCR7UExVR0lOX0tFWS5DQU1FTH1JbnB1dE5hbWVgKSxcbiAgICAgICAgcHJlZml4Q2xhc3NOYW1lOiAkZWxlbWVudC5kYXRhKGAke1BMVUdJTl9LRVkuQ0FNRUx9UHJlZml4Q2xhc3NOYW1lYCksXG4gICAgfTtcbn1cblxuZXhwb3J0IGNsYXNzIERpc3BsYXlUeXBlIHtcbiAgICBjb25zdHJ1Y3RvcigkZm9ybSwgJHRhcmdldCwge1xuICAgICAgICBpbnB1dE5hbWUgPSAnZGlzcGxheS10eXBlJyxcbiAgICAgICAgcHJlZml4Q2xhc3NOYW1lID0gJ2Rpc3BsYXktdHlwZS0nLFxuICAgIH0gPSB7fSkge1xuICAgICAgICB0aGlzLmlucHV0TmFtZSA9IGlucHV0TmFtZTtcbiAgICAgICAgdGhpcy5wcmVmaXhDbGFzc05hbWUgPSBwcmVmaXhDbGFzc05hbWU7XG4gICAgICAgIHRoaXMuJGZvcm0gPSAkZm9ybTtcbiAgICAgICAgdGhpcy4kdGFyZ2V0ID0gJHRhcmdldDtcblxuICAgICAgICB0aGlzLm9uSW5wdXRDaGFuZ2UgPSB0aGlzLm9uSW5wdXRDaGFuZ2UuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLnVwZGF0ZSgkKGBpbnB1dFtuYW1lPSR7dGhpcy5pbnB1dE5hbWV9XTpjaGVja2VkYCwgdGhpcy4kZm9ybSkudmFsKCkpO1xuXG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xuICAgIH1cblxuICAgIHVwZGF0ZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLiR0YXJnZXQuZWFjaCgoaSwgZWwpID0+IHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgZWwuY2xhc3NMaXN0Lmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gZWwuY2xhc3NMaXN0Lml0ZW0oaik7XG4gICAgICAgICAgICAgICAgaWYgKGNsYXNzTmFtZS5pbmRleE9mKHRoaXMucHJlZml4Q2xhc3NOYW1lKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiR0YXJnZXQucmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLiR0YXJnZXQuYWRkQ2xhc3MoYCR7dGhpcy5wcmVmaXhDbGFzc05hbWV9JHt2YWx1ZX1gKTtcbiAgICB9XG5cbiAgICBvbklucHV0Q2hhbmdlKGV2ZW50KSB7XG4gICAgICAgIHRoaXMudXBkYXRlKCQoZXZlbnQudGFyZ2V0KS52YWwoKSk7XG4gICAgfVxuXG4gICAgYmluZEV2ZW50cygpIHtcbiAgICAgICAgdGhpcy4kZm9ybS5vbignY2hhbmdlJywgYGlucHV0W25hbWU9JHt0aGlzLmlucHV0TmFtZX1dYCwgdGhpcy5vbklucHV0Q2hhbmdlKTtcbiAgICB9XG5cbiAgICB1bmJpbmRFdmVudHMoKSB7XG4gICAgICAgIHRoaXMuJGZvcm0ub2ZmKCdjaGFuZ2UnLCBgaW5wdXRbbmFtZT0ke3RoaXMuaW5wdXROYW1lfV1gLCB0aGlzLm9uSW5wdXRDaGFuZ2UpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlzcGxheVR5cGVGYWN0b3J5KHNlbGVjdG9yID0gYFtkYXRhLSR7UExVR0lOX0tFWS5TTkFLRX1dYCwgb3ZlcnJpZGVPcHRpb25zID0ge30pIHtcbiAgICBjb25zdCAkZm9ybXMgPSAkKHNlbGVjdG9yLCBvdmVycmlkZU9wdGlvbnMuJGNvbnRleHQpO1xuXG4gICAgcmV0dXJuICRmb3Jtcy5tYXAoKGluZGV4LCBmb3JtKSA9PiB7XG4gICAgICAgIGNvbnN0ICRmb3JtID0gJChmb3JtKTtcbiAgICAgICAgY29uc3QgaW5zdGFuY2VLZXkgPSBgJHtQTFVHSU5fS0VZLkNBTUVMfUluc3RhbmNlYDtcbiAgICAgICAgY29uc3QgY2FjaGVkSW5zdGFuY2UgPSAkZm9ybS5kYXRhKGluc3RhbmNlS2V5KTtcblxuICAgICAgICBpZiAoY2FjaGVkSW5zdGFuY2UgaW5zdGFuY2VvZiBEaXNwbGF5VHlwZSkge1xuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZEluc3RhbmNlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdGFyZ2V0SWQgPSBwcmVwZW5kSGFzaCgkZm9ybS5kYXRhKFBMVUdJTl9LRVkuQ0FNRUwpIHx8XG4gICAgICAgICAgICAkZm9ybS5kYXRhKGAke1BMVUdJTl9LRVkuQ0FNRUx9VGFyZ2V0YCkgfHxcbiAgICAgICAgICAgICRmb3JtLmF0dHIoJ2hyZWYnKSk7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSBfLmV4dGVuZChvcHRpb25zRnJvbURhdGEoJGZvcm0pLCBvdmVycmlkZU9wdGlvbnMpO1xuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBEaXNwbGF5VHlwZSgkZm9ybSwgJCh0YXJnZXRJZCksIG9wdGlvbnMpO1xuXG4gICAgICAgICRmb3JtLmRhdGEoaW5zdGFuY2VLZXksIGluc3RhbmNlKTtcblxuICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfSkudG9BcnJheSgpO1xufVxuIiwiaW1wb3J0IFBhZ2VNYW5hZ2VyIGZyb20gJy4vcGFnZS1tYW5hZ2VyJztcbmltcG9ydCBkaXNwbGF5VHlwZUZhY3RvcnkgZnJvbSAnLi4vY2hpYXJhL2Rpc3BsYXktdHlwZSc7IC8vIENoaWFyYSBNT0RcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnJhbmRzIGV4dGVuZHMgUGFnZU1hbmFnZXIge1xuICAgIC8vIENoaWFyYSBNT0RcbiAgICBvblJlYWR5KCkge1xuICAgICAgICBkaXNwbGF5VHlwZUZhY3RvcnkoKTtcblxuICAgICAgICAvLyBDaGlhcmFcbiAgICAgICAgdGhpcy5pbml0SW5maW5pdGVTY3JvbGwoKTtcbiAgICB9XG5cbiAgICAvLyBDaGlhcmFcbiAgICBpbml0SW5maW5pdGVTY3JvbGwoKSB7XG4gICAgICAgIGlmICh0aGlzLmNvbnRleHQudGhlbWVTZXR0aW5ncy5icmFuZHNwYWdlX2luZmluaXRlU2Nyb2xsKSB7XG4gICAgICAgICAgICBpbXBvcnQoJy4uL2NoaWFyYS9pbmZpbml0ZS1zY3JvbGwnKS50aGVuKG1vZHVsZSA9PiBtb2R1bGUuaW5pdEJyYW5kc1BhZ2UodGhpcy5jb250ZXh0KSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9