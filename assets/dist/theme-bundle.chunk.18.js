(window["webpackJsonpWebpackChiara"] = window["webpackJsonpWebpackChiara"] || []).push([[18],{

/***/ "./assets/js/chiara/dropdown-swatches.js":
/*!***********************************************!*\
  !*** ./assets/js/chiara/dropdown-swatches.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var selectize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! selectize */ "./node_modules/selectize/dist/js/standalone/selectize.min.js");
/* harmony import */ var selectize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(selectize__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var selectize_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! selectize-css */ "./node_modules/selectize/dist/css/selectize.css");

 // eslint-disable-line import/no-unresolved

/* harmony default export */ __webpack_exports__["default"] = (function (product, _temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      _ref$swatchFieldSelec = _ref.swatchFieldSelector,
      swatchFieldSelector = _ref$swatchFieldSelec === void 0 ? 'form[data-cart-item-add] [data-product-option-change] [data-product-attribute="swatch"]' : _ref$swatchFieldSelec,
      _ref$getSwatchLabelFr = _ref.getSwatchLabelFromInput,
      getSwatchLabelFromInput = _ref$getSwatchLabelFr === void 0 ? function (inputEl) {
    return $(inputEl).next().children().first().attr('title');
  } : _ref$getSwatchLabelFr,
      _ref$getSwatchImageHT = _ref.getSwatchImageHTMLFromInput,
      getSwatchImageHTMLFromInput = _ref$getSwatchImageHT === void 0 ? function (inputEl) {
    return $(inputEl).next().html();
  } : _ref$getSwatchImageHT,
      _ref$isSwatchHidden = _ref.isSwatchHidden,
      isSwatchHidden = _ref$isSwatchHidden === void 0 ? function (inputEl) {
    return $(inputEl).next().is(':hidden');
  } : _ref$isSwatchHidden,
      _ref$isSwatchUnavaila = _ref.isSwatchUnavailable,
      isSwatchUnavailable = _ref$isSwatchUnavaila === void 0 ? function (inputEl) {
    return $(inputEl).next().hasClass('unavailable');
  } : _ref$isSwatchUnavaila,
      _ref$renderSelect = _ref.renderSelect,
      renderSelect = _ref$renderSelect === void 0 ? function ($formField, $select) {
    return $formField.find('.form-label').first().after($select);
  } : _ref$renderSelect,
      _ref$hideOriginalSwat = _ref.hideOriginalSwatches,
      hideOriginalSwatches = _ref$hideOriginalSwat === void 0 ? false : _ref$hideOriginalSwat,
      _ref$hideOriginalSwat2 = _ref.hideOriginalSwatchesFunc,
      hideOriginalSwatchesFunc = _ref$hideOriginalSwat2 === void 0 ? function ($formField) {
    return $formField.children('.form-option-swatch').css({
      visibility: 'hidden',
      height: 0,
      width: 0,
      overflow: 'hidden',
      margin: 0
    });
  } : _ref$hideOriginalSwat2,
      _ref$disableSearchInp = _ref.disableSearchInput,
      disableSearchInput = _ref$disableSearchInp === void 0 ? false : _ref$disableSearchInp;

  product.$scope.find(swatchFieldSelector).not('._dropdownSwatchesLoaded').addClass('_dropdownSwatchesLoaded').get().map(function (el) {
    return $(el);
  }).forEach(function ($formField) {
    var $inputs = $formField.find('input'); // Hidden select for initializing Selectize

    var $select = $("<select class=\"chiara__dropdownSwatches\"><option value=\"\">" + product.context.txtSelectOne + "</option></select>").hide().on('change', function (event) {
      // Stop the form's change event
      event.preventDefault();
      event.stopPropagation();
    }); // Populate the hidden select options

    $inputs.each(function (i, el) {
      var label = getSwatchLabelFromInput(el);
      $select.append("<option value=\"" + $(el).attr('value') + "\" title=\"" + label + "\" " + (el.checked ? 'selected' : '') + ">" + label + "</option>");
    }); // Insert the hidden select to the form field

    renderSelect($formField, $select); // Hide the original swatches if specified

    if (hideOriginalSwatches) {
      hideOriginalSwatchesFunc($formField);
    } // Initialize 'Selectize' select box


    $select.selectize({
      copyClassesToDropdown: true,
      render: {
        item: function item(_item, escape) {
          var $input = $inputs.filter("[value=\"" + _item.value + "\"]");
          return "\n                            <div class=\"_item " + (isSwatchUnavailable($input) ? 'unavailable' : '') + "\" " + (isSwatchHidden($input) ? 'style="display:none"' : '') + ">\n                                <span class=\"_img\">" + getSwatchImageHTMLFromInput($input) + "</span>\n                                <span class=\"_text\">" + escape(_item.text) + "</span>\n                            </div>\n                        ";
        },
        option: function option(item, escape) {
          var $input = $inputs.filter("[value=\"" + item.value + "\"]");
          return "\n                            <div class=\"_option " + (isSwatchUnavailable($input) ? 'unavailable' : '') + "\" " + (isSwatchHidden($input) ? 'style="display:none"' : '') + ">\n                                <span class=\"_img\">" + getSwatchImageHTMLFromInput($input) + "</span>\n                                <span class=\"_text\">" + escape(item.text) + "</span>\n                            </div>\n                        ";
        }
      },
      onInitialize: function onInitialize() {
        if (disableSearchInput) {
          this.$control_input.attr('readonly', true);
        }
      }
    });
    var selectize = $select[0].selectize; // Select the original swatch when the dropdown swatch selected

    selectize.on('change', function () {
      // console.log('selectize change');
      $inputs.filter("[value=\"" + $select.val() + "\"]").trigger('click');
    }); // Select the dropdown swatch when the original swatch selected

    product.$scope.find('[data-product-option-change]').on('change', function () {
      // console.log('data-product-option-change change');
      var value = $inputs.filter(':checked').val();
      selectize.setValue(value, true);
    }); // Update 'Selectize' options when the availablity of the original swatches changed

    product.$scope.first().on('updateProductAttributes', function () {
      // console.log('updateProductAttributes');
      var value = $inputs.filter(':checked').val();
      selectize.clearCache();
      selectize.clear(true);
      selectize.setValue(value, true);
      selectize.refreshOptions(false);
    });
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9XZWJwYWNrQ2hpYXJhLy4vYXNzZXRzL2pzL2NoaWFyYS9kcm9wZG93bi1zd2F0Y2hlcy5qcyJdLCJuYW1lcyI6WyJwcm9kdWN0Iiwic3dhdGNoRmllbGRTZWxlY3RvciIsImdldFN3YXRjaExhYmVsRnJvbUlucHV0IiwiaW5wdXRFbCIsIiQiLCJuZXh0IiwiY2hpbGRyZW4iLCJmaXJzdCIsImF0dHIiLCJnZXRTd2F0Y2hJbWFnZUhUTUxGcm9tSW5wdXQiLCJodG1sIiwiaXNTd2F0Y2hIaWRkZW4iLCJpcyIsImlzU3dhdGNoVW5hdmFpbGFibGUiLCJoYXNDbGFzcyIsInJlbmRlclNlbGVjdCIsIiRmb3JtRmllbGQiLCIkc2VsZWN0IiwiZmluZCIsImFmdGVyIiwiaGlkZU9yaWdpbmFsU3dhdGNoZXMiLCJoaWRlT3JpZ2luYWxTd2F0Y2hlc0Z1bmMiLCJjc3MiLCJ2aXNpYmlsaXR5IiwiaGVpZ2h0Iiwid2lkdGgiLCJvdmVyZmxvdyIsIm1hcmdpbiIsImRpc2FibGVTZWFyY2hJbnB1dCIsIiRzY29wZSIsIm5vdCIsImFkZENsYXNzIiwiZ2V0IiwibWFwIiwiZWwiLCJmb3JFYWNoIiwiJGlucHV0cyIsImNvbnRleHQiLCJ0eHRTZWxlY3RPbmUiLCJoaWRlIiwib24iLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiZWFjaCIsImkiLCJsYWJlbCIsImFwcGVuZCIsImNoZWNrZWQiLCJzZWxlY3RpemUiLCJjb3B5Q2xhc3Nlc1RvRHJvcGRvd24iLCJyZW5kZXIiLCJpdGVtIiwiZXNjYXBlIiwiJGlucHV0IiwiZmlsdGVyIiwidmFsdWUiLCJ0ZXh0Iiwib3B0aW9uIiwib25Jbml0aWFsaXplIiwiJGNvbnRyb2xfaW5wdXQiLCJ2YWwiLCJ0cmlnZ2VyIiwic2V0VmFsdWUiLCJjbGVhckNhY2hlIiwiY2xlYXIiLCJyZWZyZXNoT3B0aW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Q0FDd0I7O0FBRVQseUVBQVVBLE9BQVYsU0FnQlA7QUFBQSxnQ0FBSixFQUFJO0FBQUEsbUNBZkpDLG1CQWVJO0FBQUEsTUFmSkEsbUJBZUksc0NBZmtCLHlGQWVsQjtBQUFBLG1DQWRKQyx1QkFjSTtBQUFBLE1BZEpBLHVCQWNJLHNDQWRzQixVQUFBQyxPQUFPO0FBQUEsV0FBSUMsQ0FBQyxDQUFDRCxPQUFELENBQUQsQ0FBV0UsSUFBWCxHQUFrQkMsUUFBbEIsR0FBNkJDLEtBQTdCLEdBQXFDQyxJQUFyQyxDQUEwQyxPQUExQyxDQUFKO0FBQUEsR0FjN0I7QUFBQSxtQ0FiSkMsMkJBYUk7QUFBQSxNQWJKQSwyQkFhSSxzQ0FiMEIsVUFBQU4sT0FBTztBQUFBLFdBQUlDLENBQUMsQ0FBQ0QsT0FBRCxDQUFELENBQVdFLElBQVgsR0FBa0JLLElBQWxCLEVBQUo7QUFBQSxHQWFqQztBQUFBLGlDQVpKQyxjQVlJO0FBQUEsTUFaSkEsY0FZSSxvQ0FaYSxVQUFBUixPQUFPO0FBQUEsV0FBSUMsQ0FBQyxDQUFDRCxPQUFELENBQUQsQ0FBV0UsSUFBWCxHQUFrQk8sRUFBbEIsQ0FBcUIsU0FBckIsQ0FBSjtBQUFBLEdBWXBCO0FBQUEsbUNBWEpDLG1CQVdJO0FBQUEsTUFYSkEsbUJBV0ksc0NBWGtCLFVBQUFWLE9BQU87QUFBQSxXQUFJQyxDQUFDLENBQUNELE9BQUQsQ0FBRCxDQUFXRSxJQUFYLEdBQWtCUyxRQUFsQixDQUEyQixhQUEzQixDQUFKO0FBQUEsR0FXekI7QUFBQSwrQkFWSkMsWUFVSTtBQUFBLE1BVkpBLFlBVUksa0NBVlcsVUFBQ0MsVUFBRCxFQUFhQyxPQUFiO0FBQUEsV0FBeUJELFVBQVUsQ0FBQ0UsSUFBWCxDQUFnQixhQUFoQixFQUErQlgsS0FBL0IsR0FBdUNZLEtBQXZDLENBQTZDRixPQUE3QyxDQUF6QjtBQUFBLEdBVVg7QUFBQSxtQ0FUSkcsb0JBU0k7QUFBQSxNQVRKQSxvQkFTSSxzQ0FUbUIsS0FTbkI7QUFBQSxvQ0FSSkMsd0JBUUk7QUFBQSxNQVJKQSx3QkFRSSx1Q0FSdUIsVUFBQUwsVUFBVTtBQUFBLFdBQUlBLFVBQVUsQ0FBQ1YsUUFBWCxDQUFvQixxQkFBcEIsRUFBMkNnQixHQUEzQyxDQUErQztBQUNwRkMsZ0JBQVUsRUFBRSxRQUR3RTtBQUVwRkMsWUFBTSxFQUFFLENBRjRFO0FBR3BGQyxXQUFLLEVBQUUsQ0FINkU7QUFJcEZDLGNBQVEsRUFBRSxRQUowRTtBQUtwRkMsWUFBTSxFQUFFO0FBTDRFLEtBQS9DLENBQUo7QUFBQSxHQVFqQztBQUFBLG1DQURKQyxrQkFDSTtBQUFBLE1BREpBLGtCQUNJLHNDQURpQixLQUNqQjs7QUFDSjVCLFNBQU8sQ0FBQzZCLE1BQVIsQ0FBZVgsSUFBZixDQUFvQmpCLG1CQUFwQixFQUF5QzZCLEdBQXpDLENBQTZDLDBCQUE3QyxFQUNLQyxRQURMLENBQ2MseUJBRGQsRUFFS0MsR0FGTCxHQUdLQyxHQUhMLENBR1MsVUFBQUMsRUFBRTtBQUFBLFdBQUk5QixDQUFDLENBQUM4QixFQUFELENBQUw7QUFBQSxHQUhYLEVBSUtDLE9BSkwsQ0FJYSxVQUFBbkIsVUFBVSxFQUFJO0FBQ25CLFFBQU1vQixPQUFPLEdBQUdwQixVQUFVLENBQUNFLElBQVgsQ0FBZ0IsT0FBaEIsQ0FBaEIsQ0FEbUIsQ0FHbkI7O0FBQ0EsUUFBTUQsT0FBTyxHQUFHYixDQUFDLG9FQUE4REosT0FBTyxDQUFDcUMsT0FBUixDQUFnQkMsWUFBOUUsd0JBQUQsQ0FDWEMsSUFEVyxHQUVYQyxFQUZXLENBRVIsUUFGUSxFQUVFLFVBQUFDLEtBQUssRUFBSTtBQUNuQjtBQUNBQSxXQUFLLENBQUNDLGNBQU47QUFDQUQsV0FBSyxDQUFDRSxlQUFOO0FBQ0gsS0FOVyxDQUFoQixDQUptQixDQVluQjs7QUFDQVAsV0FBTyxDQUFDUSxJQUFSLENBQWEsVUFBQ0MsQ0FBRCxFQUFJWCxFQUFKLEVBQVc7QUFDcEIsVUFBTVksS0FBSyxHQUFHNUMsdUJBQXVCLENBQUNnQyxFQUFELENBQXJDO0FBQ0FqQixhQUFPLENBQUM4QixNQUFSLHNCQUFpQzNDLENBQUMsQ0FBQzhCLEVBQUQsQ0FBRCxDQUFNMUIsSUFBTixDQUFXLE9BQVgsQ0FBakMsbUJBQWdFc0MsS0FBaEUsWUFBMEVaLEVBQUUsQ0FBQ2MsT0FBSCxHQUFhLFVBQWIsR0FBMEIsRUFBcEcsVUFBMEdGLEtBQTFHO0FBQ0gsS0FIRCxFQWJtQixDQWtCbkI7O0FBQ0EvQixnQkFBWSxDQUFDQyxVQUFELEVBQWFDLE9BQWIsQ0FBWixDQW5CbUIsQ0FxQm5COztBQUNBLFFBQUlHLG9CQUFKLEVBQTBCO0FBQ3RCQyw4QkFBd0IsQ0FBQ0wsVUFBRCxDQUF4QjtBQUNILEtBeEJrQixDQTBCbkI7OztBQUNBQyxXQUFPLENBQUNnQyxTQUFSLENBQWtCO0FBQ2RDLDJCQUFxQixFQUFFLElBRFQ7QUFFZEMsWUFBTSxFQUFFO0FBQ0pDLFlBQUksRUFBRSxjQUFDQSxLQUFELEVBQU9DLE1BQVAsRUFBa0I7QUFDcEIsY0FBTUMsTUFBTSxHQUFHbEIsT0FBTyxDQUFDbUIsTUFBUixlQUEwQkgsS0FBSSxDQUFDSSxLQUEvQixTQUFmO0FBQ0Esd0VBQ3dCM0MsbUJBQW1CLENBQUN5QyxNQUFELENBQW5CLEdBQThCLGFBQTlCLEdBQThDLEVBRHRFLGFBQzZFM0MsY0FBYyxDQUFDMkMsTUFBRCxDQUFkLEdBQXlCLHNCQUF6QixHQUFrRCxFQUQvSCxpRUFFNkI3QywyQkFBMkIsQ0FBQzZDLE1BQUQsQ0FGeEQsdUVBRzhCRCxNQUFNLENBQUNELEtBQUksQ0FBQ0ssSUFBTixDQUhwQztBQU1ILFNBVEc7QUFVSkMsY0FBTSxFQUFFLGdCQUFDTixJQUFELEVBQU9DLE1BQVAsRUFBa0I7QUFDdEIsY0FBTUMsTUFBTSxHQUFHbEIsT0FBTyxDQUFDbUIsTUFBUixlQUEwQkgsSUFBSSxDQUFDSSxLQUEvQixTQUFmO0FBQ0EsMEVBQzBCM0MsbUJBQW1CLENBQUN5QyxNQUFELENBQW5CLEdBQThCLGFBQTlCLEdBQThDLEVBRHhFLGFBQytFM0MsY0FBYyxDQUFDMkMsTUFBRCxDQUFkLEdBQXlCLHNCQUF6QixHQUFrRCxFQURqSSxpRUFFNkI3QywyQkFBMkIsQ0FBQzZDLE1BQUQsQ0FGeEQsdUVBRzhCRCxNQUFNLENBQUNELElBQUksQ0FBQ0ssSUFBTixDQUhwQztBQU1IO0FBbEJHLE9BRk07QUFzQmRFLGtCQXRCYywwQkFzQkM7QUFDWCxZQUFJL0Isa0JBQUosRUFBd0I7QUFDcEIsZUFBS2dDLGNBQUwsQ0FBb0JwRCxJQUFwQixDQUF5QixVQUF6QixFQUFxQyxJQUFyQztBQUNIO0FBQ0o7QUExQmEsS0FBbEI7QUE2QkEsUUFBTXlDLFNBQVMsR0FBR2hDLE9BQU8sQ0FBQyxDQUFELENBQVAsQ0FBV2dDLFNBQTdCLENBeERtQixDQTBEbkI7O0FBQ0FBLGFBQVMsQ0FBQ1QsRUFBVixDQUFhLFFBQWIsRUFBdUIsWUFBTTtBQUN6QjtBQUNBSixhQUFPLENBQUNtQixNQUFSLGVBQTBCdEMsT0FBTyxDQUFDNEMsR0FBUixFQUExQixVQUE2Q0MsT0FBN0MsQ0FBcUQsT0FBckQ7QUFDSCxLQUhELEVBM0RtQixDQWdFbkI7O0FBQ0E5RCxXQUFPLENBQUM2QixNQUFSLENBQWVYLElBQWYsQ0FBb0IsOEJBQXBCLEVBQW9Ec0IsRUFBcEQsQ0FBdUQsUUFBdkQsRUFBaUUsWUFBTTtBQUNuRTtBQUNBLFVBQU1nQixLQUFLLEdBQUdwQixPQUFPLENBQUNtQixNQUFSLENBQWUsVUFBZixFQUEyQk0sR0FBM0IsRUFBZDtBQUNBWixlQUFTLENBQUNjLFFBQVYsQ0FBbUJQLEtBQW5CLEVBQTBCLElBQTFCO0FBQ0gsS0FKRCxFQWpFbUIsQ0F1RW5COztBQUNBeEQsV0FBTyxDQUFDNkIsTUFBUixDQUFldEIsS0FBZixHQUF1QmlDLEVBQXZCLENBQTBCLHlCQUExQixFQUFxRCxZQUFNO0FBQ3ZEO0FBQ0EsVUFBTWdCLEtBQUssR0FBR3BCLE9BQU8sQ0FBQ21CLE1BQVIsQ0FBZSxVQUFmLEVBQTJCTSxHQUEzQixFQUFkO0FBQ0FaLGVBQVMsQ0FBQ2UsVUFBVjtBQUNBZixlQUFTLENBQUNnQixLQUFWLENBQWdCLElBQWhCO0FBQ0FoQixlQUFTLENBQUNjLFFBQVYsQ0FBbUJQLEtBQW5CLEVBQTBCLElBQTFCO0FBQ0FQLGVBQVMsQ0FBQ2lCLGNBQVYsQ0FBeUIsS0FBekI7QUFDSCxLQVBEO0FBUUgsR0FwRkw7QUFxRkgsQyIsImZpbGUiOiJ0aGVtZS1idW5kbGUuY2h1bmsuMTguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3NlbGVjdGl6ZSc7XG5pbXBvcnQgJ3NlbGVjdGl6ZS1jc3MnOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGltcG9ydC9uby11bnJlc29sdmVkXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChwcm9kdWN0LCB7XG4gICAgc3dhdGNoRmllbGRTZWxlY3RvciA9ICdmb3JtW2RhdGEtY2FydC1pdGVtLWFkZF0gW2RhdGEtcHJvZHVjdC1vcHRpb24tY2hhbmdlXSBbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZT1cInN3YXRjaFwiXScsXG4gICAgZ2V0U3dhdGNoTGFiZWxGcm9tSW5wdXQgPSBpbnB1dEVsID0+ICQoaW5wdXRFbCkubmV4dCgpLmNoaWxkcmVuKCkuZmlyc3QoKS5hdHRyKCd0aXRsZScpLFxuICAgIGdldFN3YXRjaEltYWdlSFRNTEZyb21JbnB1dCA9IGlucHV0RWwgPT4gJChpbnB1dEVsKS5uZXh0KCkuaHRtbCgpLFxuICAgIGlzU3dhdGNoSGlkZGVuID0gaW5wdXRFbCA9PiAkKGlucHV0RWwpLm5leHQoKS5pcygnOmhpZGRlbicpLFxuICAgIGlzU3dhdGNoVW5hdmFpbGFibGUgPSBpbnB1dEVsID0+ICQoaW5wdXRFbCkubmV4dCgpLmhhc0NsYXNzKCd1bmF2YWlsYWJsZScpLFxuICAgIHJlbmRlclNlbGVjdCA9ICgkZm9ybUZpZWxkLCAkc2VsZWN0KSA9PiAkZm9ybUZpZWxkLmZpbmQoJy5mb3JtLWxhYmVsJykuZmlyc3QoKS5hZnRlcigkc2VsZWN0KSxcbiAgICBoaWRlT3JpZ2luYWxTd2F0Y2hlcyA9IGZhbHNlLFxuICAgIGhpZGVPcmlnaW5hbFN3YXRjaGVzRnVuYyA9ICRmb3JtRmllbGQgPT4gJGZvcm1GaWVsZC5jaGlsZHJlbignLmZvcm0tb3B0aW9uLXN3YXRjaCcpLmNzcyh7XG4gICAgICAgIHZpc2liaWxpdHk6ICdoaWRkZW4nLFxuICAgICAgICBoZWlnaHQ6IDAsXG4gICAgICAgIHdpZHRoOiAwLFxuICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgIG1hcmdpbjogMCxcbiAgICB9KSxcbiAgICBkaXNhYmxlU2VhcmNoSW5wdXQgPSBmYWxzZSxcbn0gPSB7fSkge1xuICAgIHByb2R1Y3QuJHNjb3BlLmZpbmQoc3dhdGNoRmllbGRTZWxlY3Rvcikubm90KCcuX2Ryb3Bkb3duU3dhdGNoZXNMb2FkZWQnKVxuICAgICAgICAuYWRkQ2xhc3MoJ19kcm9wZG93blN3YXRjaGVzTG9hZGVkJylcbiAgICAgICAgLmdldCgpXG4gICAgICAgIC5tYXAoZWwgPT4gJChlbCkpXG4gICAgICAgIC5mb3JFYWNoKCRmb3JtRmllbGQgPT4ge1xuICAgICAgICAgICAgY29uc3QgJGlucHV0cyA9ICRmb3JtRmllbGQuZmluZCgnaW5wdXQnKTtcblxuICAgICAgICAgICAgLy8gSGlkZGVuIHNlbGVjdCBmb3IgaW5pdGlhbGl6aW5nIFNlbGVjdGl6ZVxuICAgICAgICAgICAgY29uc3QgJHNlbGVjdCA9ICQoYDxzZWxlY3QgY2xhc3M9XCJjaGlhcmFfX2Ryb3Bkb3duU3dhdGNoZXNcIj48b3B0aW9uIHZhbHVlPVwiXCI+JHtwcm9kdWN0LmNvbnRleHQudHh0U2VsZWN0T25lfTwvb3B0aW9uPjwvc2VsZWN0PmApXG4gICAgICAgICAgICAgICAgLmhpZGUoKVxuICAgICAgICAgICAgICAgIC5vbignY2hhbmdlJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBTdG9wIHRoZSBmb3JtJ3MgY2hhbmdlIGV2ZW50XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBQb3B1bGF0ZSB0aGUgaGlkZGVuIHNlbGVjdCBvcHRpb25zXG4gICAgICAgICAgICAkaW5wdXRzLmVhY2goKGksIGVsKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBnZXRTd2F0Y2hMYWJlbEZyb21JbnB1dChlbCk7XG4gICAgICAgICAgICAgICAgJHNlbGVjdC5hcHBlbmQoYDxvcHRpb24gdmFsdWU9XCIkeyQoZWwpLmF0dHIoJ3ZhbHVlJyl9XCIgdGl0bGU9XCIke2xhYmVsfVwiICR7ZWwuY2hlY2tlZCA/ICdzZWxlY3RlZCcgOiAnJ30+JHtsYWJlbH08L29wdGlvbj5gKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBJbnNlcnQgdGhlIGhpZGRlbiBzZWxlY3QgdG8gdGhlIGZvcm0gZmllbGRcbiAgICAgICAgICAgIHJlbmRlclNlbGVjdCgkZm9ybUZpZWxkLCAkc2VsZWN0KTtcblxuICAgICAgICAgICAgLy8gSGlkZSB0aGUgb3JpZ2luYWwgc3dhdGNoZXMgaWYgc3BlY2lmaWVkXG4gICAgICAgICAgICBpZiAoaGlkZU9yaWdpbmFsU3dhdGNoZXMpIHtcbiAgICAgICAgICAgICAgICBoaWRlT3JpZ2luYWxTd2F0Y2hlc0Z1bmMoJGZvcm1GaWVsZCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEluaXRpYWxpemUgJ1NlbGVjdGl6ZScgc2VsZWN0IGJveFxuICAgICAgICAgICAgJHNlbGVjdC5zZWxlY3RpemUoe1xuICAgICAgICAgICAgICAgIGNvcHlDbGFzc2VzVG9Ecm9wZG93bjogdHJ1ZSxcbiAgICAgICAgICAgICAgICByZW5kZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbTogKGl0ZW0sIGVzY2FwZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgJGlucHV0ID0gJGlucHV0cy5maWx0ZXIoYFt2YWx1ZT1cIiR7aXRlbS52YWx1ZX1cIl1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIl9pdGVtICR7aXNTd2F0Y2hVbmF2YWlsYWJsZSgkaW5wdXQpID8gJ3VuYXZhaWxhYmxlJyA6ICcnfVwiICR7aXNTd2F0Y2hIaWRkZW4oJGlucHV0KSA/ICdzdHlsZT1cImRpc3BsYXk6bm9uZVwiJyA6ICcnfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJfaW1nXCI+JHtnZXRTd2F0Y2hJbWFnZUhUTUxGcm9tSW5wdXQoJGlucHV0KX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiX3RleHRcIj4ke2VzY2FwZShpdGVtLnRleHQpfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIGA7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbjogKGl0ZW0sIGVzY2FwZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgJGlucHV0ID0gJGlucHV0cy5maWx0ZXIoYFt2YWx1ZT1cIiR7aXRlbS52YWx1ZX1cIl1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIl9vcHRpb24gJHtpc1N3YXRjaFVuYXZhaWxhYmxlKCRpbnB1dCkgPyAndW5hdmFpbGFibGUnIDogJyd9XCIgJHtpc1N3YXRjaEhpZGRlbigkaW5wdXQpID8gJ3N0eWxlPVwiZGlzcGxheTpub25lXCInIDogJyd9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIl9pbWdcIj4ke2dldFN3YXRjaEltYWdlSFRNTEZyb21JbnB1dCgkaW5wdXQpfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJfdGV4dFwiPiR7ZXNjYXBlKGl0ZW0udGV4dCl9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgYDtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uSW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRpc2FibGVTZWFyY2hJbnB1dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kY29udHJvbF9pbnB1dC5hdHRyKCdyZWFkb25seScsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjb25zdCBzZWxlY3RpemUgPSAkc2VsZWN0WzBdLnNlbGVjdGl6ZTtcblxuICAgICAgICAgICAgLy8gU2VsZWN0IHRoZSBvcmlnaW5hbCBzd2F0Y2ggd2hlbiB0aGUgZHJvcGRvd24gc3dhdGNoIHNlbGVjdGVkXG4gICAgICAgICAgICBzZWxlY3RpemUub24oJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnc2VsZWN0aXplIGNoYW5nZScpO1xuICAgICAgICAgICAgICAgICRpbnB1dHMuZmlsdGVyKGBbdmFsdWU9XCIkeyRzZWxlY3QudmFsKCl9XCJdYCkudHJpZ2dlcignY2xpY2snKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBTZWxlY3QgdGhlIGRyb3Bkb3duIHN3YXRjaCB3aGVuIHRoZSBvcmlnaW5hbCBzd2F0Y2ggc2VsZWN0ZWRcbiAgICAgICAgICAgIHByb2R1Y3QuJHNjb3BlLmZpbmQoJ1tkYXRhLXByb2R1Y3Qtb3B0aW9uLWNoYW5nZV0nKS5vbignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdkYXRhLXByb2R1Y3Qtb3B0aW9uLWNoYW5nZSBjaGFuZ2UnKTtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9ICRpbnB1dHMuZmlsdGVyKCc6Y2hlY2tlZCcpLnZhbCgpO1xuICAgICAgICAgICAgICAgIHNlbGVjdGl6ZS5zZXRWYWx1ZSh2YWx1ZSwgdHJ1ZSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gVXBkYXRlICdTZWxlY3RpemUnIG9wdGlvbnMgd2hlbiB0aGUgYXZhaWxhYmxpdHkgb2YgdGhlIG9yaWdpbmFsIHN3YXRjaGVzIGNoYW5nZWRcbiAgICAgICAgICAgIHByb2R1Y3QuJHNjb3BlLmZpcnN0KCkub24oJ3VwZGF0ZVByb2R1Y3RBdHRyaWJ1dGVzJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCd1cGRhdGVQcm9kdWN0QXR0cmlidXRlcycpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gJGlucHV0cy5maWx0ZXIoJzpjaGVja2VkJykudmFsKCk7XG4gICAgICAgICAgICAgICAgc2VsZWN0aXplLmNsZWFyQ2FjaGUoKTtcbiAgICAgICAgICAgICAgICBzZWxlY3RpemUuY2xlYXIodHJ1ZSk7XG4gICAgICAgICAgICAgICAgc2VsZWN0aXplLnNldFZhbHVlKHZhbHVlLCB0cnVlKTtcbiAgICAgICAgICAgICAgICBzZWxlY3RpemUucmVmcmVzaE9wdGlvbnMoZmFsc2UpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==