(window["webpackJsonpWebpackChiara"] = window["webpackJsonpWebpackChiara"] || []).push([[24],{

/***/ "./assets/js/theme/contact-us.js":
/*!***************************************!*\
  !*** ./assets/js/theme/contact-us.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ContactUs; });
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _common_models_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/models/forms */ "./assets/js/theme/common/models/forms.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var ContactUs = /*#__PURE__*/function (_PageManager) {
  _inheritsLoose(ContactUs, _PageManager);

  function ContactUs() {
    return _PageManager.apply(this, arguments) || this;
  }

  var _proto = ContactUs.prototype;

  _proto.onReady = function onReady() {
    this.registerContactFormValidation();
  };

  _proto.registerContactFormValidation = function registerContactFormValidation() {
    var formSelector = 'form[data-contact-form]';
    var contactUsValidator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_1__["default"])({
      submit: formSelector + " input[type=\"submit\"]"
    });
    var $contactForm = $(formSelector);
    contactUsValidator.add([{
      selector: formSelector + " input[name=\"contact_email\"]",
      validate: function validate(cb, val) {
        var result = _common_models_forms__WEBPACK_IMPORTED_MODULE_2__["default"].email(val);
        cb(result);
      },
      errorMessage: this.context.contactEmail
    }, {
      selector: formSelector + " textarea[name=\"contact_question\"]",
      validate: function validate(cb, val) {
        var result = _common_models_forms__WEBPACK_IMPORTED_MODULE_2__["default"].notEmpty(val);
        cb(result);
      },
      errorMessage: this.context.contactQuestion
    }]);
    $contactForm.on('submit', function (event) {
      contactUsValidator.performCheck();

      if (contactUsValidator.areAll('valid')) {
        return;
      }

      event.preventDefault();
    });
  };

  return ContactUs;
}(_page_manager__WEBPACK_IMPORTED_MODULE_0__["default"]);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9XZWJwYWNrQ2hpYXJhLy4vYXNzZXRzL2pzL3RoZW1lL2NvbnRhY3QtdXMuanMiXSwibmFtZXMiOlsiQ29udGFjdFVzIiwib25SZWFkeSIsInJlZ2lzdGVyQ29udGFjdEZvcm1WYWxpZGF0aW9uIiwiZm9ybVNlbGVjdG9yIiwiY29udGFjdFVzVmFsaWRhdG9yIiwibm9kIiwic3VibWl0IiwiJGNvbnRhY3RGb3JtIiwiJCIsImFkZCIsInNlbGVjdG9yIiwidmFsaWRhdGUiLCJjYiIsInZhbCIsInJlc3VsdCIsImZvcm1zIiwiZW1haWwiLCJlcnJvck1lc3NhZ2UiLCJjb250ZXh0IiwiY29udGFjdEVtYWlsIiwibm90RW1wdHkiLCJjb250YWN0UXVlc3Rpb24iLCJvbiIsImV2ZW50IiwicGVyZm9ybUNoZWNrIiwiYXJlQWxsIiwicHJldmVudERlZmF1bHQiLCJQYWdlTWFuYWdlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7SUFFcUJBLFM7Ozs7Ozs7OztTQUNqQkMsTyxHQUFBLG1CQUFVO0FBQ04sU0FBS0MsNkJBQUw7QUFDSCxHOztTQUVEQSw2QixHQUFBLHlDQUFnQztBQUM1QixRQUFNQyxZQUFZLEdBQUcseUJBQXJCO0FBQ0EsUUFBTUMsa0JBQWtCLEdBQUdDLDJEQUFHLENBQUM7QUFDM0JDLFlBQU0sRUFBS0gsWUFBTDtBQURxQixLQUFELENBQTlCO0FBR0EsUUFBTUksWUFBWSxHQUFHQyxDQUFDLENBQUNMLFlBQUQsQ0FBdEI7QUFFQUMsc0JBQWtCLENBQUNLLEdBQW5CLENBQXVCLENBQ25CO0FBQ0lDLGNBQVEsRUFBS1AsWUFBTCxtQ0FEWjtBQUVJUSxjQUFRLEVBQUUsa0JBQUNDLEVBQUQsRUFBS0MsR0FBTCxFQUFhO0FBQ25CLFlBQU1DLE1BQU0sR0FBR0MsNERBQUssQ0FBQ0MsS0FBTixDQUFZSCxHQUFaLENBQWY7QUFFQUQsVUFBRSxDQUFDRSxNQUFELENBQUY7QUFDSCxPQU5MO0FBT0lHLGtCQUFZLEVBQUUsS0FBS0MsT0FBTCxDQUFhQztBQVAvQixLQURtQixFQVVuQjtBQUNJVCxjQUFRLEVBQUtQLFlBQUwseUNBRFo7QUFFSVEsY0FBUSxFQUFFLGtCQUFDQyxFQUFELEVBQUtDLEdBQUwsRUFBYTtBQUNuQixZQUFNQyxNQUFNLEdBQUdDLDREQUFLLENBQUNLLFFBQU4sQ0FBZVAsR0FBZixDQUFmO0FBRUFELFVBQUUsQ0FBQ0UsTUFBRCxDQUFGO0FBQ0gsT0FOTDtBQU9JRyxrQkFBWSxFQUFFLEtBQUtDLE9BQUwsQ0FBYUc7QUFQL0IsS0FWbUIsQ0FBdkI7QUFxQkFkLGdCQUFZLENBQUNlLEVBQWIsQ0FBZ0IsUUFBaEIsRUFBMEIsVUFBQUMsS0FBSyxFQUFJO0FBQy9CbkIsd0JBQWtCLENBQUNvQixZQUFuQjs7QUFFQSxVQUFJcEIsa0JBQWtCLENBQUNxQixNQUFuQixDQUEwQixPQUExQixDQUFKLEVBQXdDO0FBQ3BDO0FBQ0g7O0FBRURGLFdBQUssQ0FBQ0csY0FBTjtBQUNILEtBUkQ7QUFTSCxHOzs7RUExQ2tDQyxxRCIsImZpbGUiOiJ0aGVtZS1idW5kbGUuY2h1bmsuMjQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGFnZU1hbmFnZXIgZnJvbSAnLi9wYWdlLW1hbmFnZXInO1xuaW1wb3J0IG5vZCBmcm9tICcuL2NvbW1vbi9ub2QnO1xuaW1wb3J0IGZvcm1zIGZyb20gJy4vY29tbW9uL21vZGVscy9mb3Jtcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRhY3RVcyBleHRlbmRzIFBhZ2VNYW5hZ2VyIHtcbiAgICBvblJlYWR5KCkge1xuICAgICAgICB0aGlzLnJlZ2lzdGVyQ29udGFjdEZvcm1WYWxpZGF0aW9uKCk7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJDb250YWN0Rm9ybVZhbGlkYXRpb24oKSB7XG4gICAgICAgIGNvbnN0IGZvcm1TZWxlY3RvciA9ICdmb3JtW2RhdGEtY29udGFjdC1mb3JtXSc7XG4gICAgICAgIGNvbnN0IGNvbnRhY3RVc1ZhbGlkYXRvciA9IG5vZCh7XG4gICAgICAgICAgICBzdWJtaXQ6IGAke2Zvcm1TZWxlY3Rvcn0gaW5wdXRbdHlwZT1cInN1Ym1pdFwiXWAsXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCAkY29udGFjdEZvcm0gPSAkKGZvcm1TZWxlY3Rvcik7XG5cbiAgICAgICAgY29udGFjdFVzVmFsaWRhdG9yLmFkZChbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IGAke2Zvcm1TZWxlY3Rvcn0gaW5wdXRbbmFtZT1cImNvbnRhY3RfZW1haWxcIl1gLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBmb3Jtcy5lbWFpbCh2YWwpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuY29udGV4dC5jb250YWN0RW1haWwsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBgJHtmb3JtU2VsZWN0b3J9IHRleHRhcmVhW25hbWU9XCJjb250YWN0X3F1ZXN0aW9uXCJdYCxcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gZm9ybXMubm90RW1wdHkodmFsKTtcblxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiB0aGlzLmNvbnRleHQuY29udGFjdFF1ZXN0aW9uLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSk7XG5cbiAgICAgICAgJGNvbnRhY3RGb3JtLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XG4gICAgICAgICAgICBjb250YWN0VXNWYWxpZGF0b3IucGVyZm9ybUNoZWNrKCk7XG5cbiAgICAgICAgICAgIGlmIChjb250YWN0VXNWYWxpZGF0b3IuYXJlQWxsKCd2YWxpZCcpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9