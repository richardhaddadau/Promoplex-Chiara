(window["webpackJsonpWebpackChiara"] = window["webpackJsonpWebpackChiara"] || []).push([[14],{

/***/ "./assets/js/chiara/card-swatches/Card.js":
/*!************************************************!*\
  !*** ./assets/js/chiara/card-swatches/Card.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var mustache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mustache */ "./node_modules/mustache/mustache.js");
/* harmony import */ var mustache__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mustache__WEBPACK_IMPORTED_MODULE_0__);
function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



var Card = /*#__PURE__*/function () {
  function Card(_ref) {
    var $scope = _ref.$scope,
        $attributesContainer = _ref.$attributesContainer,
        productId = _ref.productId,
        productViewFile = _ref.productViewFile,
        attributesTemplate = _ref.attributesTemplate,
        templateCustomTags = _ref.templateCustomTags,
        addToCartFormSelector = _ref.addToCartFormSelector,
        $cardImage = _ref.$cardImage,
        imageSize = _ref.imageSize,
        inputFinderFunc = _ref.inputFinderFunc,
        swatchesLimit = _ref.swatchesLimit,
        imageReplacerFunc = _ref.imageReplacerFunc,
        displayInStockOnly = _ref.displayInStockOnly,
        autoSelectOptionValues = _ref.autoSelectOptionValues,
        _ref$autoInit = _ref.autoInit,
        autoInit = _ref$autoInit === void 0 ? true : _ref$autoInit,
        graphQLNode = _ref.graphQLNode;
    this.$scope = $scope;
    this.productId = productId;
    this.$attributesContainer = $attributesContainer;
    this.productViewFile = productViewFile;
    this.attributesTemplate = attributesTemplate;
    this.templateCustomTags = templateCustomTags;
    this.addToCartFormSelector = addToCartFormSelector;
    this.$cardImage = $cardImage;
    this.imageSize = imageSize;
    this.inputFinderFunc = inputFinderFunc;
    this.swatchesLimit = swatchesLimit;
    this.imageReplacerFunc = imageReplacerFunc;
    this.displayInStockOnly = displayInStockOnly;
    this.autoSelectOptionValues = autoSelectOptionValues;
    this.autoInit = autoInit;
    this.graphQLNode = graphQLNode;

    if (this.autoInit) {
      this.init();
    }
  }

  var _proto = Card.prototype;

  _proto.init = function init() {
    if (this.displayInStockOnly) {
      this.requestInStockAttributes();
    } else {
      if (this.graphQLNode) {
        this.buildProductOptions();
      } else {
        this.requestProductOptions();
      }
    }
  };

  _proto.requestInStockAttributes = function requestInStockAttributes() {
    var _this = this;

    $.ajax({
      url: "/remote/v1/product-attributes/" + this.productId,
      method: 'POST',
      data: {
        action: 'add',
        product_id: this.productId
      },
      headers: {
        'stencil-config': '{}',
        'stencil-options': '{}',
        'x-xsrf-token': window.BCData && window.BCData.csrf_token ? window.BCData.csrf_token : ''
      },
      xhrFields: {
        withCredentials: true
      },
      success: function success(resp) {
        var attributesData = resp.data || {};

        if (typeof attributesData.in_stock_attributes === 'object' || attributesData.instock) {
          if (_this.graphQLNode) {
            _this.buildProductOptions(attributesData);
          } else {
            _this.requestProductOptions(attributesData);
          }
        }
      }
    });
  };

  _proto.requestProductOptions = function requestProductOptions(attributesData) {
    var _this2 = this;

    $.ajax({
      url: "/products.php?productId=" + this.productId,
      method: 'GET',
      headers: {
        'stencil-config': '{}',
        'stencil-options': "{\"render_with\":\"" + this.productViewFile + "\"}",
        'x-xsrf-token': window.BCData && window.BCData.csrf_token ? window.BCData.csrf_token : ''
      },
      xhrFields: {
        withCredentials: true
      },
      success: function success(resp) {
        _this2.buildProductOptions(attributesData, resp);
      }
    });
  };

  _proto.buildProductOptions = function buildProductOptions(attributesData, resp) {
    var _this3 = this;

    if (attributesData === void 0) {
      attributesData = {};
    }

    var data = {
      attributes: []
    };

    if (this.graphQLNode) {
      // load attributes from graphQL
      data.attributes = this.graphQLNode.productOptions.edges.reduce(function (_options, _ref2) {
        var optionNode = _ref2.node;

        if (optionNode.values) {
          var values = optionNode.values.edges.reduce(function (_values, _ref3) {
            var valueNode = _ref3.node;

            if (typeof attributesData.in_stock_attributes !== 'object' || attributesData.in_stock_attributes.indexOf(valueNode.entityId) > -1) {
              if (valueNode.imageUrl || valueNode.hexColors) {
                _values.push({
                  content: valueNode.imageUrl ? "<span class=\"form-option-variant form-option-variant--pattern\" title=\"" + valueNode.label + "\" style=\"background-image: url('" + valueNode.imageUrl + "');\"></span>" : valueNode.hexColors.map(function (color) {
                    return "<span class='form-option-variant form-option-variant--color' title=\"" + valueNode.label + "\" style=\"background-color: " + color + "\"></span>";
                  }).join(''),
                  label: valueNode.label,
                  attributeId: optionNode.entityId,
                  attributeValue: valueNode.entityId
                });
              }
            }

            return _values;
          }, []);

          if (values.length > 0) {
            _options.push(values);
          }
        }

        return _options;
      }, []);
    } else {
      // load attributes from AJAX request
      $(resp).find('[data-product-attribute="swatch"]').each(function (i, el) {
        var $swatches = $(el);
        var swatches = [];
        $swatches.find('[data-product-attribute-value]').each(function (i, labelEl) {
          var $label = $(labelEl);
          var $input = _this3.inputFinderFunc ? _this3.inputFinderFunc($swatches, $label) : $swatches.find("[id=\"" + $label.attr('for') + "\"]");
          var attributeValue = Number($input.attr('value'));
          var attributeId = Number($input.attr('name').replace(/attribute\[([0-9]+)\]/, '$1'));

          if (typeof attributesData.in_stock_attributes !== 'object' || attributesData.in_stock_attributes.indexOf(attributeValue) > -1) {
            swatches.push({
              content: $label.html(),
              label: $input.data('productAttributeLabel'),
              attributeId: attributeId,
              attributeValue: attributeValue
            });
          }
        });

        if (swatches.length > 0) {
          data.attributes.push(swatches);
        }
      });
    }

    if (data.attributes.length === 0) {
      return;
    }

    var html = mustache__WEBPACK_IMPORTED_MODULE_0___default.a.render(this.attributesTemplate, data, null, this.templateCustomTags);
    this.$attributesContainer.append(html);
    var $form;

    if (this.graphQLNode) {
      // build Form from graphQL
      $form = $('<form class="productSwatches-hiddenForm"></form>').hide();
      $form.append("<input type=\"hidden\" name=\"action\" value=\"add\">");
      $form.append("<input type=\"hidden\" name=\"product_id\" value=\"" + this.productId + "\">");
      $form.append("<input type=\"hidden\" name=\"qty[]\" value=\"" + (this.graphQLNode.minPurchaseQuantity || 1) + "\">");
      this.graphQLNode.productOptions.edges.forEach(function (_ref4) {
        var optionNode = _ref4.node;
        var defaultValue = '';

        if (optionNode.values) {
          defaultValue = _this3.autoSelectOptionValues && optionNode.values.edges.length > 0 ? optionNode.values.edges[0].node.entityId : '';
          defaultValue = optionNode.values.edges.reduce(function (_defaultValue, _ref5) {
            var valueNode = _ref5.node;
            return valueNode.isDefault ? valueNode.entityId : _defaultValue;
          }, defaultValue);

          if (!defaultValue && attributesData && attributesData.in_stock_attributes) {
            defaultValue = optionNode.values.edges.reduce(function (_defaultValue, _ref6) {
              var valueNode = _ref6.node;
              return _defaultValue || (attributesData.in_stock_attributes.indexOf(valueNode.entityId) > -1 ? valueNode.entityId : '');
            }, '');
          }
        } else if (optionNode.checkedByDefault) {
          defaultValue = 1;
        }

        $form.append("<input type=\"hidden\" name=\"attribute[" + optionNode.entityId + "]\" value=\"" + defaultValue + "\">");
      });
    } else {
      // build Form from AJAX request
      var _$form = $('<div></div>').append(resp).find(this.addToCartFormSelector).addClass('productSwatches-hiddenForm').hide(); // Remove all 'id' to avoid duplicated label.for in quick-view


      _$form.find('[id]').prop('id', null);
    }

    this.$attributesContainer.append($form);
    this.$attributesContainer.on('click', '[data-attribute-id]', function (event) {
      event.preventDefault();
      var $a = $(event.currentTarget);
      var id = $a.data('attributeId');
      var value = $a.data('attributeValue');

      _this3.$attributesContainer.find("[data-attribute-id=" + id + "]").removeClass('is-active').find('input').prop('checked', false);

      $a.addClass('is-active').find('input').prop('checked', true);
      $form.find("[name=\"attribute[" + id + "]\"]").val([value]);

      _this3.requestAttributesChange($form);
    });

    if (this.swatchesLimit) {
      this.$attributesContainer.find('[data-more]').each(function (i, moreEl) {
        var $more = $(moreEl);
        var $list = $more.closest('[data-swatches]');
        var $less = $list.find('[data-less]');
        var $items = $list.find('[data-attribute-id]');

        if ($items.length > _this3.swatchesLimit) {
          var $hiddenItems = $items.filter(function (j) {
            return j >= _this3.swatchesLimit;
          }).hide();
          $more.on('click', function () {
            $hiddenItems.show();
            $more.hide();
            $less.show();
          });
          $less.on('click', function () {
            $hiddenItems.hide();
            $less.hide();
            $more.show();
          });
        } else {
          $more.hide();
        }

        $less.hide();
      });
    } else {
      this.$attributesContainer.find('[data-more], [data-less]').hide();
    }
  };

  _proto.requestAttributesChange = function requestAttributesChange($form) {
    var _this4 = this;

    if (!window.FormData) {
      return;
    }

    var data = this.filterEmptyFilesFromForm(new FormData($form.get(0)));
    $.ajax({
      url: "/remote/v1/product-attributes/" + this.productId,
      method: 'POST',
      contentType: false,
      processData: false,
      data: data,
      headers: {
        'stencil-config': '{}',
        'stencil-options': '{}',
        'x-xsrf-token': window.BCData && window.BCData.csrf_token ? window.BCData.csrf_token : ''
      },
      xhrFields: {
        withCredentials: true
      },
      success: function success(resp) {
        var _resp$data = resp.data,
            image = _resp$data.image,
            price = _resp$data.price;

        if (_this4.imageReplacerFunc) {
          var img = image ? image.data.replace('{:size}', _this4.imageSize) : null;

          _this4.imageReplacerFunc(_this4.$cardImage, img);
        } else {
          if (image) {
            var _img = image.data.replace('{:size}', _this4.imageSize);

            if (!_this4.$cardImage.data('originalSrc')) {
              _this4.$cardImage.data('originalSrc', _this4.$cardImage.attr('src')).data('originalSrcset', _this4.$cardImage.attr('srcset'));
            }

            _this4.$cardImage.attr('src', _img).attr('srcset', '').attr('data-srcset', '').addClass('productSwatches-image-optionChanged');
          } else if (_this4.$cardImage.data('originalSrc')) {
            _this4.$cardImage.attr('src', _this4.$cardImage.data('originalSrc')).attr('srcset', _this4.$cardImage.data('originalSrcset')).attr('data-srcset', _this4.$cardImage.data('originalSrcset')).data('originalSrc', null).data('originalSrcset', null).removeClass('productSwatches-image-optionChanged');
          }
        }

        if (price) {
          var viewModel = _this4.getViewModel(_this4.$scope);

          _this4.updatePriceView(viewModel, price);
        }
      }
    });
  }
  /**
   * https://stackoverflow.com/questions/49672992/ajax-request-fails-when-sending-formdata-including-empty-file-input-in-safari
   * Safari browser with jquery 3.3.1 has an issue uploading empty file parameters. This function removes any empty files from the form params
   * @param formData: FormData object
   * @returns FormData object
   */
  ;

  _proto.filterEmptyFilesFromForm = function filterEmptyFilesFromForm(formData) {
    try {
      for (var _iterator = _createForOfIteratorHelperLoose(formData), _step; !(_step = _iterator()).done;) {
        var _step$value = _step.value,
            key = _step$value[0],
            val = _step$value[1];

        if (val instanceof File && !val.name && !val.size) {
          formData["delete"](key);
        }
      }
    } catch (e) {
      console.error(e); // eslint-disable-line no-console
    }

    return formData;
  }
  /**
   * Since $productView can be dynamically inserted using render_with,
   * We have to retrieve the respective elements
   *
   * @param $scope
   */
  ;

  _proto.getViewModel = function getViewModel($scope) {
    return {
      $priceWithTax: $('[data-product-price-with-tax]', $scope),
      $priceWithoutTax: $('[data-product-price-without-tax]', $scope),
      rrpWithTax: {
        $div: $('.rrp-price--withTax', $scope),
        $span: $('[data-product-rrp-with-tax]', $scope)
      },
      rrpWithoutTax: {
        $div: $('.rrp-price--withoutTax', $scope),
        $span: $('[data-product-rrp-price-without-tax]', $scope)
      },
      nonSaleWithTax: {
        $div: $('.non-sale-price--withTax', $scope),
        $span: $('[data-product-non-sale-price-with-tax]', $scope)
      },
      nonSaleWithoutTax: {
        $div: $('.non-sale-price--withoutTax', $scope),
        $span: $('[data-product-non-sale-price-without-tax]', $scope)
      },
      priceSaved: {
        $div: $('.price-section--saving', $scope),
        $span: $('[data-product-price-saved]', $scope)
      },
      priceNowLabel: {
        $span: $('.price-now-label', $scope)
      },
      priceLabel: {
        $span: $('.price-label', $scope)
      }
    };
  }
  /**
   * Hide the pricing elements that will show up only when the price exists in API
   * @param viewModel
   */
  ;

  _proto.clearPricingNotFound = function clearPricingNotFound(viewModel) {
    viewModel.rrpWithTax.$div.hide();
    viewModel.rrpWithoutTax.$div.hide();
    viewModel.nonSaleWithTax.$div.hide();
    viewModel.nonSaleWithoutTax.$div.hide();
    viewModel.priceSaved.$div.hide();
    viewModel.priceNowLabel.$span.hide();
    viewModel.priceLabel.$span.hide();
  }
  /**
   * Update the view of price, messages, SKU and stock options when a product option changes
   * @param  {Object} data Product attribute data
   */
  ;

  _proto.updatePriceView = function updatePriceView(viewModel, price) {
    this.clearPricingNotFound(viewModel);

    if (price.with_tax) {
      viewModel.priceLabel.$span.show();
      viewModel.$priceWithTax.html(price.with_tax.formatted);
    }

    if (price.without_tax) {
      viewModel.priceLabel.$span.show();
      viewModel.$priceWithoutTax.html(price.without_tax.formatted);
    }

    if (price.rrp_with_tax) {
      viewModel.rrpWithTax.$div.show();
      viewModel.rrpWithTax.$span.html(price.rrp_with_tax.formatted);
    }

    if (price.rrp_without_tax) {
      viewModel.rrpWithoutTax.$div.show();
      viewModel.rrpWithoutTax.$span.html(price.rrp_without_tax.formatted);
    }

    if (price.saved) {
      viewModel.priceSaved.$div.show();
      viewModel.priceSaved.$span.html(price.saved.formatted);
    }

    if (price.non_sale_price_with_tax) {
      viewModel.priceLabel.$span.hide();
      viewModel.nonSaleWithTax.$div.show();
      viewModel.priceNowLabel.$span.show();
      viewModel.nonSaleWithTax.$span.html(price.non_sale_price_with_tax.formatted);
    }

    if (price.non_sale_price_without_tax) {
      viewModel.priceLabel.$span.hide();
      viewModel.nonSaleWithoutTax.$div.show();
      viewModel.priceNowLabel.$span.show();
      viewModel.nonSaleWithoutTax.$span.html(price.non_sale_price_without_tax.formatted);
    }
  };

  return Card;
}();

/* harmony default export */ __webpack_exports__["default"] = (Card);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/chiara/card-swatches/ProductSwatches.js":
/*!***********************************************************!*\
  !*** ./assets/js/chiara/card-swatches/ProductSwatches.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var in_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! in-view */ "./node_modules/in-view/dist/in-view.min.js");
/* harmony import */ var in_view__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(in_view__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Card */ "./assets/js/chiara/card-swatches/Card.js");




var ProductSwatches = /*#__PURE__*/function () {
  function ProductSwatches(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        _ref$cardSelector = _ref.cardSelector,
        cardSelector = _ref$cardSelector === void 0 ? '.product .card, .productCarousel-slide .card' : _ref$cardSelector,
        _ref$productIdSelecto = _ref.productIdSelector,
        productIdSelector = _ref$productIdSelecto === void 0 ? '[data-product-id]' : _ref$productIdSelecto,
        _ref$findProductIdByI = _ref.findProductIdByImg,
        findProductIdByImg = _ref$findProductIdByI === void 0 ? false : _ref$findProductIdByI,
        _ref$swatchesContaine = _ref.swatchesContainerSelector,
        swatchesContainerSelector = _ref$swatchesContaine === void 0 ? '.card-text--colorswatches' : _ref$swatchesContaine,
        _ref$cardImageSelecto = _ref.cardImageSelector,
        cardImageSelector = _ref$cardImageSelecto === void 0 ? '.card-image' : _ref$cardImageSelecto,
        _ref$addToCartFormSel = _ref.addToCartFormSelector,
        addToCartFormSelector = _ref$addToCartFormSel === void 0 ? 'form[data-cart-item-add]' : _ref$addToCartFormSel,
        _ref$productViewFile = _ref.productViewFile,
        productViewFile = _ref$productViewFile === void 0 ? 'products/product-view' : _ref$productViewFile,
        _ref$attributesTempla = _ref.attributesTemplate,
        attributesTemplate = _ref$attributesTempla === void 0 ? "\n            <div class=\"productSwatches-attributes\">\n                {{#attributes}}\n                    <div class=\"productSwatches-swatches\" data-swatches>\n                        {{#.}}\n                            <a href=\"#\" class=\"productSwatches-swatches-item\" title=\"{{label}}\"\n                                data-attribute-id=\"{{attributeId}}\"\n                                data-attribute-value=\"{{attributeValue}}\">{{&content}}</a>\n                        {{/.}}\n                        <button type=\"button\" class=\"productSwatches-swatches-more\" data-more>+ More</button>\n                        <button type=\"button\" class=\"productSwatches-swatches-less\" data-less>- Less</button>\n                    </div>\n                {{/attributes}}\n            </div>\n        " : _ref$attributesTempla,
        _ref$templateCustomTa = _ref.templateCustomTags,
        templateCustomTags = _ref$templateCustomTa === void 0 ? null : _ref$templateCustomTa,
        _ref$imageSize = _ref.imageSize,
        imageSize = _ref$imageSize === void 0 ? '590x590' : _ref$imageSize,
        _ref$inputFinderFunc = _ref.inputFinderFunc,
        inputFinderFunc = _ref$inputFinderFunc === void 0 ? null : _ref$inputFinderFunc,
        _ref$swatchesLimit = _ref.swatchesLimit,
        swatchesLimit = _ref$swatchesLimit === void 0 ? 0 : _ref$swatchesLimit,
        _ref$imageReplacerFun = _ref.imageReplacerFunc,
        imageReplacerFunc = _ref$imageReplacerFun === void 0 ? null : _ref$imageReplacerFun,
        _ref$displayInStockOn = _ref.displayInStockOnly,
        displayInStockOnly = _ref$displayInStockOn === void 0 ? false : _ref$displayInStockOn,
        _ref$autoSelectOption = _ref.autoSelectOptionValues,
        autoSelectOptionValues = _ref$autoSelectOption === void 0 ? true : _ref$autoSelectOption,
        _ref$graphQLToken = _ref.graphQLToken,
        graphQLToken = _ref$graphQLToken === void 0 ? '' : _ref$graphQLToken;

    this.config = {
      cardSelector: cardSelector,
      productIdSelector: productIdSelector,
      findProductIdByImg: findProductIdByImg,
      swatchesContainerSelector: swatchesContainerSelector,
      cardImageSelector: cardImageSelector,
      addToCartFormSelector: addToCartFormSelector,
      productViewFile: productViewFile,
      attributesTemplate: attributesTemplate,
      templateCustomTags: templateCustomTags,
      imageSize: imageSize,
      inputFinderFunc: inputFinderFunc,
      swatchesLimit: swatchesLimit,
      imageReplacerFunc: imageReplacerFunc,
      displayInStockOnly: displayInStockOnly,
      autoSelectOptionValues: autoSelectOptionValues,
      graphQLToken: graphQLToken
    };
    this.onWindowScroll = lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()(this.onWindowScroll.bind(this, null), 200);
    this.bindEvents();
  }

  var _proto = ProductSwatches.prototype;

  _proto.bindEvents = function bindEvents() {
    var _this = this;

    $(window).on('scroll resize load', this.onWindowScroll);
    var MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

    if (MutationObserver) {
      this.mutationObserver = new MutationObserver(function (mutations) {
        var $newElements = mutations.reduce(function (accumulate, mutation) {
          return [].concat(accumulate, mutation.addedNodes);
        }, []);

        _this.onWindowScroll($newElements);
      });
      this.mutationObserver.observe(document.documentElement, {
        childList: true,
        subtree: true
      });
    }
  };

  _proto.unbindEvents = function unbindEvents() {
    $(window).off('scroll resize load', this.onWindowScroll);

    if (this.mutationObserver) {
      this.mutationObserver.disconnect();
      this.mutationObserver = null;
    }
  };

  _proto.onWindowScroll = function onWindowScroll($body) {
    var _this2 = this;

    if ($body === void 0) {
      $body = null;
    }

    var cards = [];
    $(this.config.cardSelector, $body).each(function (i, el) {
      var $scope = $(el);

      if ($scope.data('productSwatchesCard') || !in_view__WEBPACK_IMPORTED_MODULE_1___default.a.is(el)) {
        return;
      }

      var productId = $scope.find(_this2.config.productIdSelector).data('productId');

      if (!productId) {
        // try to find product ID by img src
        if (!_this2.config.findProductIdByImg) {
          return;
        }

        productId = $scope.find('img').get().reduce(function (id, img) {
          if (id) {
            return id;
          }

          var m = String(img.src).match(/products\/([0-9]+)\//);
          return m ? Number(m[1]) : id;
        }, null);

        if (!productId) {
          return;
        }
      }

      var $attributesContainer = $scope.find(_this2.config.swatchesContainerSelector);

      if ($attributesContainer.length === 0) {
        return;
      }

      var _this2$config = _this2.config,
          productViewFile = _this2$config.productViewFile,
          attributesTemplate = _this2$config.attributesTemplate,
          templateCustomTags = _this2$config.templateCustomTags,
          addToCartFormSelector = _this2$config.addToCartFormSelector,
          imageSize = _this2$config.imageSize,
          inputFinderFunc = _this2$config.inputFinderFunc,
          swatchesLimit = _this2$config.swatchesLimit,
          imageReplacerFunc = _this2$config.imageReplacerFunc,
          displayInStockOnly = _this2$config.displayInStockOnly,
          autoSelectOptionValues = _this2$config.autoSelectOptionValues,
          graphQLToken = _this2$config.graphQLToken;
      var $cardImage = $scope.find(_this2.config.cardImageSelector).first();
      var card = new _Card__WEBPACK_IMPORTED_MODULE_2__["default"]({
        $scope: $scope,
        $attributesContainer: $attributesContainer,
        productId: productId,
        productViewFile: productViewFile,
        attributesTemplate: attributesTemplate,
        templateCustomTags: templateCustomTags,
        addToCartFormSelector: addToCartFormSelector,
        $cardImage: $cardImage,
        imageSize: imageSize,
        inputFinderFunc: inputFinderFunc,
        swatchesLimit: swatchesLimit,
        imageReplacerFunc: imageReplacerFunc,
        displayInStockOnly: displayInStockOnly,
        autoSelectOptionValues: autoSelectOptionValues,
        autoInit: !graphQLToken
      });
      cards.push(card);
      $scope.data('productSwatchesCard', card);
      $scope.addClass('productSwatchesLoaded');
    });

    if (this.config.graphQLToken && cards.length > 0) {
      var ids = cards.map(function (card) {
        return card.productId;
      });
      $.ajax({
        url: '/graphql',
        method: 'POST',
        data: JSON.stringify({
          query: "\n                        query {\n                            site {\n                                products (entityIds: " + JSON.stringify(ids) + ", first: " + ids.length + ") {\n                                    edges {\n                                        node {\n                                            entityId\n                                            name\n                                            minPurchaseQuantity\n                                            productOptions {\n                                                edges {\n                                                    node {\n                                                        entityId\n                                                        displayName\n                                                        ... on CheckboxOption {\n                                                            checkedByDefault\n                                                        }\n                                                        ... on MultipleChoiceOption {\n                                                            values {\n                                                                edges {\n                                                                    node {\n                                                                        entityId\n                                                                        isDefault\n                                                                        ... on SwatchOptionValue {\n                                                                            label\n                                                                            hexColors\n                                                                            imageUrl(width: 100)\n                                                                        }\n                                                                    }\n                                                                }\n                                                            }\n                                                        }\n                                                    }\n                                                }\n                                            }\n                                        }\n                                    }\n                                }\n                            }\n                        }\n                    "
        }),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + this.config.graphQLToken
        },
        xhrFields: {
          withCredentials: true
        },
        success: function success(resp) {
          resp.data.site.products.edges.forEach(function (edge) {
            cards.filter(function (card) {
              return card.productId == edge.node.entityId;
            }).forEach(function (card) {
              card.graphQLNode = edge.node;
              card.init();
            });
          });
        }
      });
    }
  };

  return ProductSwatches;
}();

/* harmony default export */ __webpack_exports__["default"] = (ProductSwatches);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9XZWJwYWNrQ2hpYXJhLy4vYXNzZXRzL2pzL2NoaWFyYS9jYXJkLXN3YXRjaGVzL0NhcmQuanMiLCJ3ZWJwYWNrOi8vV2VicGFja0NoaWFyYS8uL2Fzc2V0cy9qcy9jaGlhcmEvY2FyZC1zd2F0Y2hlcy9Qcm9kdWN0U3dhdGNoZXMuanMiXSwibmFtZXMiOlsiQ2FyZCIsIiRzY29wZSIsIiRhdHRyaWJ1dGVzQ29udGFpbmVyIiwicHJvZHVjdElkIiwicHJvZHVjdFZpZXdGaWxlIiwiYXR0cmlidXRlc1RlbXBsYXRlIiwidGVtcGxhdGVDdXN0b21UYWdzIiwiYWRkVG9DYXJ0Rm9ybVNlbGVjdG9yIiwiJGNhcmRJbWFnZSIsImltYWdlU2l6ZSIsImlucHV0RmluZGVyRnVuYyIsInN3YXRjaGVzTGltaXQiLCJpbWFnZVJlcGxhY2VyRnVuYyIsImRpc3BsYXlJblN0b2NrT25seSIsImF1dG9TZWxlY3RPcHRpb25WYWx1ZXMiLCJhdXRvSW5pdCIsImdyYXBoUUxOb2RlIiwiaW5pdCIsInJlcXVlc3RJblN0b2NrQXR0cmlidXRlcyIsImJ1aWxkUHJvZHVjdE9wdGlvbnMiLCJyZXF1ZXN0UHJvZHVjdE9wdGlvbnMiLCIkIiwiYWpheCIsInVybCIsIm1ldGhvZCIsImRhdGEiLCJhY3Rpb24iLCJwcm9kdWN0X2lkIiwiaGVhZGVycyIsIndpbmRvdyIsIkJDRGF0YSIsImNzcmZfdG9rZW4iLCJ4aHJGaWVsZHMiLCJ3aXRoQ3JlZGVudGlhbHMiLCJzdWNjZXNzIiwicmVzcCIsImF0dHJpYnV0ZXNEYXRhIiwiaW5fc3RvY2tfYXR0cmlidXRlcyIsImluc3RvY2siLCJhdHRyaWJ1dGVzIiwicHJvZHVjdE9wdGlvbnMiLCJlZGdlcyIsInJlZHVjZSIsIl9vcHRpb25zIiwib3B0aW9uTm9kZSIsIm5vZGUiLCJ2YWx1ZXMiLCJfdmFsdWVzIiwidmFsdWVOb2RlIiwiaW5kZXhPZiIsImVudGl0eUlkIiwiaW1hZ2VVcmwiLCJoZXhDb2xvcnMiLCJwdXNoIiwiY29udGVudCIsImxhYmVsIiwibWFwIiwiY29sb3IiLCJqb2luIiwiYXR0cmlidXRlSWQiLCJhdHRyaWJ1dGVWYWx1ZSIsImxlbmd0aCIsImZpbmQiLCJlYWNoIiwiaSIsImVsIiwiJHN3YXRjaGVzIiwic3dhdGNoZXMiLCJsYWJlbEVsIiwiJGxhYmVsIiwiJGlucHV0IiwiYXR0ciIsIk51bWJlciIsInJlcGxhY2UiLCJodG1sIiwiTXVzdGFjaGUiLCJyZW5kZXIiLCJhcHBlbmQiLCIkZm9ybSIsImhpZGUiLCJtaW5QdXJjaGFzZVF1YW50aXR5IiwiZm9yRWFjaCIsImRlZmF1bHRWYWx1ZSIsIl9kZWZhdWx0VmFsdWUiLCJpc0RlZmF1bHQiLCJjaGVja2VkQnlEZWZhdWx0IiwiYWRkQ2xhc3MiLCJwcm9wIiwib24iLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiJGEiLCJjdXJyZW50VGFyZ2V0IiwiaWQiLCJ2YWx1ZSIsInJlbW92ZUNsYXNzIiwidmFsIiwicmVxdWVzdEF0dHJpYnV0ZXNDaGFuZ2UiLCJtb3JlRWwiLCIkbW9yZSIsIiRsaXN0IiwiY2xvc2VzdCIsIiRsZXNzIiwiJGl0ZW1zIiwiJGhpZGRlbkl0ZW1zIiwiZmlsdGVyIiwiaiIsInNob3ciLCJGb3JtRGF0YSIsImZpbHRlckVtcHR5RmlsZXNGcm9tRm9ybSIsImdldCIsImNvbnRlbnRUeXBlIiwicHJvY2Vzc0RhdGEiLCJpbWFnZSIsInByaWNlIiwiaW1nIiwidmlld01vZGVsIiwiZ2V0Vmlld01vZGVsIiwidXBkYXRlUHJpY2VWaWV3IiwiZm9ybURhdGEiLCJrZXkiLCJGaWxlIiwibmFtZSIsInNpemUiLCJlIiwiY29uc29sZSIsImVycm9yIiwiJHByaWNlV2l0aFRheCIsIiRwcmljZVdpdGhvdXRUYXgiLCJycnBXaXRoVGF4IiwiJGRpdiIsIiRzcGFuIiwicnJwV2l0aG91dFRheCIsIm5vblNhbGVXaXRoVGF4Iiwibm9uU2FsZVdpdGhvdXRUYXgiLCJwcmljZVNhdmVkIiwicHJpY2VOb3dMYWJlbCIsInByaWNlTGFiZWwiLCJjbGVhclByaWNpbmdOb3RGb3VuZCIsIndpdGhfdGF4IiwiZm9ybWF0dGVkIiwid2l0aG91dF90YXgiLCJycnBfd2l0aF90YXgiLCJycnBfd2l0aG91dF90YXgiLCJzYXZlZCIsIm5vbl9zYWxlX3ByaWNlX3dpdGhfdGF4Iiwibm9uX3NhbGVfcHJpY2Vfd2l0aG91dF90YXgiLCJQcm9kdWN0U3dhdGNoZXMiLCJjYXJkU2VsZWN0b3IiLCJwcm9kdWN0SWRTZWxlY3RvciIsImZpbmRQcm9kdWN0SWRCeUltZyIsInN3YXRjaGVzQ29udGFpbmVyU2VsZWN0b3IiLCJjYXJkSW1hZ2VTZWxlY3RvciIsImdyYXBoUUxUb2tlbiIsImNvbmZpZyIsIm9uV2luZG93U2Nyb2xsIiwiYmluZCIsImJpbmRFdmVudHMiLCJNdXRhdGlvbk9ic2VydmVyIiwiV2ViS2l0TXV0YXRpb25PYnNlcnZlciIsIm11dGF0aW9uT2JzZXJ2ZXIiLCJtdXRhdGlvbnMiLCIkbmV3RWxlbWVudHMiLCJhY2N1bXVsYXRlIiwibXV0YXRpb24iLCJhZGRlZE5vZGVzIiwib2JzZXJ2ZSIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiY2hpbGRMaXN0Iiwic3VidHJlZSIsInVuYmluZEV2ZW50cyIsIm9mZiIsImRpc2Nvbm5lY3QiLCIkYm9keSIsImNhcmRzIiwiaW5WaWV3IiwiaXMiLCJtIiwiU3RyaW5nIiwic3JjIiwibWF0Y2giLCJmaXJzdCIsImNhcmQiLCJpZHMiLCJKU09OIiwic3RyaW5naWZ5IiwicXVlcnkiLCJzaXRlIiwicHJvZHVjdHMiLCJlZGdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0lBRU1BLEk7QUFDRixzQkFpQkc7QUFBQSxRQWhCQ0MsTUFnQkQsUUFoQkNBLE1BZ0JEO0FBQUEsUUFmQ0Msb0JBZUQsUUFmQ0Esb0JBZUQ7QUFBQSxRQWRDQyxTQWNELFFBZENBLFNBY0Q7QUFBQSxRQWJDQyxlQWFELFFBYkNBLGVBYUQ7QUFBQSxRQVpDQyxrQkFZRCxRQVpDQSxrQkFZRDtBQUFBLFFBWENDLGtCQVdE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QTJCLEtBQUs4SCxNQUFMLENBQVlEO0FBRmxDLFNBOUNOO0FBa0RIekgsaUJBQVMsRUFBRTtBQUNQQyx5QkFBZSxFQUFFO0FBRFYsU0FsRFI7QUFxREhDLGVBQU8sRUFBRSxpQkFBQ0MsSUFBRCxFQUFVO0FBQ2ZBLGNBQUksQ0FBQ1YsSUFBTCxDQUFVbUssSUFBVixDQUFlQyxRQUFmLENBQXdCcEosS0FBeEIsQ0FBOEJ3QyxPQUE5QixDQUFzQyxVQUFBNkcsSUFBSSxFQUFJO0FBQzFDZixpQkFBSyxDQUFDdEUsTUFBTixDQUFhLFVBQUE4RSxJQUFJO0FBQUEscUJBQUlBLElBQUksQ0FBQ3BMLFNBQUwsSUFBa0IyTCxJQUFJLENBQUNqSixJQUFMLENBQVVLLFFBQWhDO0FBQUEsYUFBakIsRUFBMkQrQixPQUEzRCxDQUFtRSxVQUFBc0csSUFBSSxFQUFJO0FBQ3ZFQSxrQkFBSSxDQUFDdkssV0FBTCxHQUFtQjhLLElBQUksQ0FBQ2pKLElBQXhCO0FBQ0EwSSxrQkFBSSxDQUFDdEssSUFBTDtBQUNILGFBSEQ7QUFJSCxXQUxEO0FBTUg7QUE1REUsT0FBUDtBQThESDtBQUNKLEc7Ozs7O0FBR1VrSSw4RUFBZixFIiwiZmlsZSI6InRoZW1lLWJ1bmRsZS5jaHVuay4xNC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNdXN0YWNoZSBmcm9tICdtdXN0YWNoZSc7XG5cbmNsYXNzIENhcmQge1xuICAgIGNvbnN0cnVjdG9yKHtcbiAgICAgICAgJHNjb3BlLFxuICAgICAgICAkYXR0cmlidXRlc0NvbnRhaW5lcixcbiAgICAgICAgcHJvZHVjdElkLFxuICAgICAgICBwcm9kdWN0Vmlld0ZpbGUsXG4gICAgICAgIGF0dHJpYnV0ZXNUZW1wbGF0ZSxcbiAgICAgICAgdGVtcGxhdGVDdXN0b21UYWdzLFxuICAgICAgICBhZGRUb0NhcnRGb3JtU2VsZWN0b3IsXG4gICAgICAgICRjYXJkSW1hZ2UsXG4gICAgICAgIGltYWdlU2l6ZSxcbiAgICAgICAgaW5wdXRGaW5kZXJGdW5jLFxuICAgICAgICBzd2F0Y2hlc0xpbWl0LFxuICAgICAgICBpbWFnZVJlcGxhY2VyRnVuYyxcbiAgICAgICAgZGlzcGxheUluU3RvY2tPbmx5LFxuICAgICAgICBhdXRvU2VsZWN0T3B0aW9uVmFsdWVzLFxuICAgICAgICBhdXRvSW5pdCA9IHRydWUsXG4gICAgICAgIGdyYXBoUUxOb2RlLFxuICAgIH0pIHtcbiAgICAgICAgdGhpcy4kc2NvcGUgPSAkc2NvcGU7XG4gICAgICAgIHRoaXMucHJvZHVjdElkID0gcHJvZHVjdElkO1xuICAgICAgICB0aGlzLiRhdHRyaWJ1dGVzQ29udGFpbmVyID0gJGF0dHJpYnV0ZXNDb250YWluZXI7XG4gICAgICAgIHRoaXMucHJvZHVjdFZpZXdGaWxlID0gcHJvZHVjdFZpZXdGaWxlO1xuICAgICAgICB0aGlzLmF0dHJpYnV0ZXNUZW1wbGF0ZSA9IGF0dHJpYnV0ZXNUZW1wbGF0ZTtcbiAgICAgICAgdGhpcy50ZW1wbGF0ZUN1c3RvbVRhZ3MgPSB0ZW1wbGF0ZUN1c3RvbVRhZ3M7XG4gICAgICAgIHRoaXMuYWRkVG9DYXJ0Rm9ybVNlbGVjdG9yID0gYWRkVG9DYXJ0Rm9ybVNlbGVjdG9yO1xuICAgICAgICB0aGlzLiRjYXJkSW1hZ2UgPSAkY2FyZEltYWdlO1xuICAgICAgICB0aGlzLmltYWdlU2l6ZSA9IGltYWdlU2l6ZTtcbiAgICAgICAgdGhpcy5pbnB1dEZpbmRlckZ1bmMgPSBpbnB1dEZpbmRlckZ1bmM7XG4gICAgICAgIHRoaXMuc3dhdGNoZXNMaW1pdCA9IHN3YXRjaGVzTGltaXQ7XG4gICAgICAgIHRoaXMuaW1hZ2VSZXBsYWNlckZ1bmMgPSBpbWFnZVJlcGxhY2VyRnVuYztcbiAgICAgICAgdGhpcy5kaXNwbGF5SW5TdG9ja09ubHkgPSBkaXNwbGF5SW5TdG9ja09ubHk7XG4gICAgICAgIHRoaXMuYXV0b1NlbGVjdE9wdGlvblZhbHVlcyA9IGF1dG9TZWxlY3RPcHRpb25WYWx1ZXM7XG4gICAgICAgIHRoaXMuYXV0b0luaXQgPSBhdXRvSW5pdDtcbiAgICAgICAgdGhpcy5ncmFwaFFMTm9kZSA9IGdyYXBoUUxOb2RlO1xuXG4gICAgICAgIGlmICh0aGlzLmF1dG9Jbml0KSB7XG4gICAgICAgICAgICB0aGlzLmluaXQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIGlmICh0aGlzLmRpc3BsYXlJblN0b2NrT25seSkge1xuICAgICAgICAgICAgdGhpcy5yZXF1ZXN0SW5TdG9ja0F0dHJpYnV0ZXMoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmdyYXBoUUxOb2RlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5idWlsZFByb2R1Y3RPcHRpb25zKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucmVxdWVzdFByb2R1Y3RPcHRpb25zKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXF1ZXN0SW5TdG9ja0F0dHJpYnV0ZXMoKSB7XG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB1cmw6IGAvcmVtb3RlL3YxL3Byb2R1Y3QtYXR0cmlidXRlcy8ke3RoaXMucHJvZHVjdElkfWAsXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICBhY3Rpb246ICdhZGQnLFxuICAgICAgICAgICAgICAgIHByb2R1Y3RfaWQ6IHRoaXMucHJvZHVjdElkLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnc3RlbmNpbC1jb25maWcnOiAne30nLFxuICAgICAgICAgICAgICAgICdzdGVuY2lsLW9wdGlvbnMnOiAne30nLFxuICAgICAgICAgICAgICAgICd4LXhzcmYtdG9rZW4nOiB3aW5kb3cuQkNEYXRhICYmIHdpbmRvdy5CQ0RhdGEuY3NyZl90b2tlbiA/IHdpbmRvdy5CQ0RhdGEuY3NyZl90b2tlbiA6ICcnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHhockZpZWxkczoge1xuICAgICAgICAgICAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdWNjZXNzOiAocmVzcCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGF0dHJpYnV0ZXNEYXRhID0gcmVzcC5kYXRhIHx8IHt9O1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgYXR0cmlidXRlc0RhdGEuaW5fc3RvY2tfYXR0cmlidXRlcyA9PT0gJ29iamVjdCcgfHwgYXR0cmlidXRlc0RhdGEuaW5zdG9jaykge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5ncmFwaFFMTm9kZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5idWlsZFByb2R1Y3RPcHRpb25zKGF0dHJpYnV0ZXNEYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVxdWVzdFByb2R1Y3RPcHRpb25zKGF0dHJpYnV0ZXNEYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlcXVlc3RQcm9kdWN0T3B0aW9ucyhhdHRyaWJ1dGVzRGF0YSkge1xuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdXJsOiBgL3Byb2R1Y3RzLnBocD9wcm9kdWN0SWQ9JHt0aGlzLnByb2R1Y3RJZH1gLFxuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnc3RlbmNpbC1jb25maWcnOiAne30nLFxuICAgICAgICAgICAgICAgICdzdGVuY2lsLW9wdGlvbnMnOiBge1wicmVuZGVyX3dpdGhcIjpcIiR7dGhpcy5wcm9kdWN0Vmlld0ZpbGV9XCJ9YCxcbiAgICAgICAgICAgICAgICAneC14c3JmLXRva2VuJzogd2luZG93LkJDRGF0YSAmJiB3aW5kb3cuQkNEYXRhLmNzcmZfdG9rZW4gPyB3aW5kb3cuQkNEYXRhLmNzcmZfdG9rZW4gOiAnJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB4aHJGaWVsZHM6IHtcbiAgICAgICAgICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3VjY2VzczogKHJlc3ApID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmJ1aWxkUHJvZHVjdE9wdGlvbnMoYXR0cmlidXRlc0RhdGEsIHJlc3ApO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYnVpbGRQcm9kdWN0T3B0aW9ucyhhdHRyaWJ1dGVzRGF0YSA9IHt9LCByZXNwKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgICBhdHRyaWJ1dGVzOiBbXSxcbiAgICAgICAgfTtcblxuXG4gICAgICAgIGlmICh0aGlzLmdyYXBoUUxOb2RlKSB7XG4gICAgICAgICAgICAvLyBsb2FkIGF0dHJpYnV0ZXMgZnJvbSBncmFwaFFMXG4gICAgICAgICAgICBkYXRhLmF0dHJpYnV0ZXMgPSB0aGlzLmdyYXBoUUxOb2RlLnByb2R1Y3RPcHRpb25zLmVkZ2VzLnJlZHVjZSgoX29wdGlvbnMsIHsgbm9kZTogb3B0aW9uTm9kZSB9KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbk5vZGUudmFsdWVzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlcyA9IG9wdGlvbk5vZGUudmFsdWVzLmVkZ2VzLnJlZHVjZSgoX3ZhbHVlcywgeyBub2RlOiB2YWx1ZU5vZGUgfSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzRGF0YS5pbl9zdG9ja19hdHRyaWJ1dGVzICE9PSAnb2JqZWN0JyB8fCBhdHRyaWJ1dGVzRGF0YS5pbl9zdG9ja19hdHRyaWJ1dGVzLmluZGV4T2YodmFsdWVOb2RlLmVudGl0eUlkKSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlTm9kZS5pbWFnZVVybCB8fCB2YWx1ZU5vZGUuaGV4Q29sb3JzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92YWx1ZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiB2YWx1ZU5vZGUuaW1hZ2VVcmwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBgPHNwYW4gY2xhc3M9XCJmb3JtLW9wdGlvbi12YXJpYW50IGZvcm0tb3B0aW9uLXZhcmlhbnQtLXBhdHRlcm5cIiB0aXRsZT1cIiR7dmFsdWVOb2RlLmxhYmVsfVwiIHN0eWxlPVwiYmFja2dyb3VuZC1pbWFnZTogdXJsKCcke3ZhbHVlTm9kZS5pbWFnZVVybH0nKTtcIj48L3NwYW4+YFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdmFsdWVOb2RlLmhleENvbG9ycy5tYXAoY29sb3IgPT4gYDxzcGFuIGNsYXNzPSdmb3JtLW9wdGlvbi12YXJpYW50IGZvcm0tb3B0aW9uLXZhcmlhbnQtLWNvbG9yJyB0aXRsZT1cIiR7dmFsdWVOb2RlLmxhYmVsfVwiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvcn1cIj48L3NwYW4+YCkuam9pbignJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogdmFsdWVOb2RlLmxhYmVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlSWQ6IG9wdGlvbk5vZGUuZW50aXR5SWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVWYWx1ZTogdmFsdWVOb2RlLmVudGl0eUlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZhbHVlcztcbiAgICAgICAgICAgICAgICAgICAgfSwgW10pO1xuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9vcHRpb25zLnB1c2godmFsdWVzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gX29wdGlvbnM7XG4gICAgICAgICAgICB9LCBbXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBsb2FkIGF0dHJpYnV0ZXMgZnJvbSBBSkFYIHJlcXVlc3RcbiAgICAgICAgICAgICQocmVzcCkuZmluZCgnW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGU9XCJzd2F0Y2hcIl0nKS5lYWNoKChpLCBlbCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0ICRzd2F0Y2hlcyA9ICQoZWwpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHN3YXRjaGVzID0gW107XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgJHN3YXRjaGVzLmZpbmQoJ1tkYXRhLXByb2R1Y3QtYXR0cmlidXRlLXZhbHVlXScpLmVhY2goKGksIGxhYmVsRWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgJGxhYmVsID0gJChsYWJlbEVsKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgJGlucHV0ID0gdGhpcy5pbnB1dEZpbmRlckZ1bmMgPyB0aGlzLmlucHV0RmluZGVyRnVuYygkc3dhdGNoZXMsICRsYWJlbCkgOiAkc3dhdGNoZXMuZmluZChgW2lkPVwiJHskbGFiZWwuYXR0cignZm9yJyl9XCJdYCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGF0dHJpYnV0ZVZhbHVlID0gTnVtYmVyKCRpbnB1dC5hdHRyKCd2YWx1ZScpKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYXR0cmlidXRlSWQgPSBOdW1iZXIoJGlucHV0LmF0dHIoJ25hbWUnKS5yZXBsYWNlKC9hdHRyaWJ1dGVcXFsoWzAtOV0rKVxcXS8sICckMScpKTtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgYXR0cmlidXRlc0RhdGEuaW5fc3RvY2tfYXR0cmlidXRlcyAhPT0gJ29iamVjdCcgfHwgYXR0cmlidXRlc0RhdGEuaW5fc3RvY2tfYXR0cmlidXRlcy5pbmRleE9mKGF0dHJpYnV0ZVZhbHVlKSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzd2F0Y2hlcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAkbGFiZWwuaHRtbCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAkaW5wdXQuZGF0YSgncHJvZHVjdEF0dHJpYnV0ZUxhYmVsJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlVmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgaWYgKHN3YXRjaGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5hdHRyaWJ1dGVzLnB1c2goc3dhdGNoZXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRhdGEuYXR0cmlidXRlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGh0bWwgPSBNdXN0YWNoZS5yZW5kZXIodGhpcy5hdHRyaWJ1dGVzVGVtcGxhdGUsIGRhdGEsIG51bGwsIHRoaXMudGVtcGxhdGVDdXN0b21UYWdzKTtcbiAgICAgICAgdGhpcy4kYXR0cmlidXRlc0NvbnRhaW5lci5hcHBlbmQoaHRtbCk7XG5cbiAgICAgICAgbGV0ICRmb3JtO1xuXG4gICAgICAgIGlmICh0aGlzLmdyYXBoUUxOb2RlKSB7XG4gICAgICAgICAgICAvLyBidWlsZCBGb3JtIGZyb20gZ3JhcGhRTFxuICAgICAgICAgICAgJGZvcm0gPSAkKCc8Zm9ybSBjbGFzcz1cInByb2R1Y3RTd2F0Y2hlcy1oaWRkZW5Gb3JtXCI+PC9mb3JtPicpLmhpZGUoKTtcbiAgICAgICAgICAgICRmb3JtLmFwcGVuZChgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiYWN0aW9uXCIgdmFsdWU9XCJhZGRcIj5gKTtcbiAgICAgICAgICAgICRmb3JtLmFwcGVuZChgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwicHJvZHVjdF9pZFwiIHZhbHVlPVwiJHt0aGlzLnByb2R1Y3RJZH1cIj5gKTtcbiAgICAgICAgICAgICRmb3JtLmFwcGVuZChgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwicXR5W11cIiB2YWx1ZT1cIiR7dGhpcy5ncmFwaFFMTm9kZS5taW5QdXJjaGFzZVF1YW50aXR5IHx8IDF9XCI+YCk7XG4gICAgICAgICAgICB0aGlzLmdyYXBoUUxOb2RlLnByb2R1Y3RPcHRpb25zLmVkZ2VzLmZvckVhY2goKHsgbm9kZTogb3B0aW9uTm9kZSB9KSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGRlZmF1bHRWYWx1ZSA9ICcnO1xuICAgICAgICAgICAgICAgIGlmIChvcHRpb25Ob2RlLnZhbHVlcykge1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWUgPSB0aGlzLmF1dG9TZWxlY3RPcHRpb25WYWx1ZXMgJiYgb3B0aW9uTm9kZS52YWx1ZXMuZWRnZXMubGVuZ3RoID4gMCA/IG9wdGlvbk5vZGUudmFsdWVzLmVkZ2VzWzBdLm5vZGUuZW50aXR5SWQgOiAnJztcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlID0gb3B0aW9uTm9kZS52YWx1ZXMuZWRnZXMucmVkdWNlKChfZGVmYXVsdFZhbHVlLCB7IG5vZGU6IHZhbHVlTm9kZSB9KSA9PiB2YWx1ZU5vZGUuaXNEZWZhdWx0ID8gdmFsdWVOb2RlLmVudGl0eUlkIDogX2RlZmF1bHRWYWx1ZSwgZGVmYXVsdFZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFkZWZhdWx0VmFsdWUgJiYgYXR0cmlidXRlc0RhdGEgJiYgYXR0cmlidXRlc0RhdGEuaW5fc3RvY2tfYXR0cmlidXRlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlID0gb3B0aW9uTm9kZS52YWx1ZXMuZWRnZXMucmVkdWNlKChfZGVmYXVsdFZhbHVlLCB7IG5vZGU6IHZhbHVlTm9kZSB9KSA9PiBfZGVmYXVsdFZhbHVlIHx8IChhdHRyaWJ1dGVzRGF0YS5pbl9zdG9ja19hdHRyaWJ1dGVzLmluZGV4T2YodmFsdWVOb2RlLmVudGl0eUlkKSA+IC0xID8gdmFsdWVOb2RlLmVudGl0eUlkIDogJycpLCAnJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG9wdGlvbk5vZGUuY2hlY2tlZEJ5RGVmYXVsdCkge1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWUgPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAkZm9ybS5hcHBlbmQoYDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cImF0dHJpYnV0ZVske29wdGlvbk5vZGUuZW50aXR5SWR9XVwiIHZhbHVlPVwiJHtkZWZhdWx0VmFsdWV9XCI+YCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGJ1aWxkIEZvcm0gZnJvbSBBSkFYIHJlcXVlc3RcbiAgICAgICAgICAgIGNvbnN0ICRmb3JtID0gJCgnPGRpdj48L2Rpdj4nKS5hcHBlbmQocmVzcCkuZmluZCh0aGlzLmFkZFRvQ2FydEZvcm1TZWxlY3RvcilcbiAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3Byb2R1Y3RTd2F0Y2hlcy1oaWRkZW5Gb3JtJylcbiAgICAgICAgICAgICAgICAuaGlkZSgpO1xuXG4gICAgICAgICAgICAvLyBSZW1vdmUgYWxsICdpZCcgdG8gYXZvaWQgZHVwbGljYXRlZCBsYWJlbC5mb3IgaW4gcXVpY2stdmlld1xuICAgICAgICAgICAgJGZvcm0uZmluZCgnW2lkXScpLnByb3AoJ2lkJywgbnVsbCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiRhdHRyaWJ1dGVzQ29udGFpbmVyLmFwcGVuZCgkZm9ybSk7XG5cbiAgICAgICAgdGhpcy4kYXR0cmlidXRlc0NvbnRhaW5lci5vbignY2xpY2snLCAnW2RhdGEtYXR0cmlidXRlLWlkXScsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgY29uc3QgJGEgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICAgICAgY29uc3QgaWQgPSAkYS5kYXRhKCdhdHRyaWJ1dGVJZCcpO1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSAkYS5kYXRhKCdhdHRyaWJ1dGVWYWx1ZScpO1xuXG4gICAgICAgICAgICB0aGlzLiRhdHRyaWJ1dGVzQ29udGFpbmVyXG4gICAgICAgICAgICAgICAgLmZpbmQoYFtkYXRhLWF0dHJpYnV0ZS1pZD0ke2lkfV1gKS5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJylcbiAgICAgICAgICAgICAgICAuZmluZCgnaW5wdXQnKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xuICAgICAgICAgICAgJGEuYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpXG4gICAgICAgICAgICAgICAgLmZpbmQoJ2lucHV0JykucHJvcCgnY2hlY2tlZCcsIHRydWUpO1xuXG4gICAgICAgICAgICAkZm9ybS5maW5kKGBbbmFtZT1cImF0dHJpYnV0ZVske2lkfV1cIl1gKS52YWwoW3ZhbHVlXSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMucmVxdWVzdEF0dHJpYnV0ZXNDaGFuZ2UoJGZvcm0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodGhpcy5zd2F0Y2hlc0xpbWl0KSB7XG4gICAgICAgICAgICB0aGlzLiRhdHRyaWJ1dGVzQ29udGFpbmVyLmZpbmQoJ1tkYXRhLW1vcmVdJykuZWFjaCgoaSwgbW9yZUVsKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgJG1vcmUgPSAkKG1vcmVFbCk7XG4gICAgICAgICAgICAgICAgY29uc3QgJGxpc3QgPSAkbW9yZS5jbG9zZXN0KCdbZGF0YS1zd2F0Y2hlc10nKTtcbiAgICAgICAgICAgICAgICBjb25zdCAkbGVzcyA9ICRsaXN0LmZpbmQoJ1tkYXRhLWxlc3NdJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgJGl0ZW1zID0gJGxpc3QuZmluZCgnW2RhdGEtYXR0cmlidXRlLWlkXScpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCRpdGVtcy5sZW5ndGggPiB0aGlzLnN3YXRjaGVzTGltaXQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgJGhpZGRlbkl0ZW1zID0gJGl0ZW1zLmZpbHRlcihqID0+IGogPj0gdGhpcy5zd2F0Y2hlc0xpbWl0KS5oaWRlKCk7XG4gICAgICAgICAgICAgICAgICAgICRtb3JlLm9uKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRoaWRkZW5JdGVtcy5zaG93KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkbW9yZS5oaWRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkbGVzcy5zaG93KCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAkbGVzcy5vbignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkaGlkZGVuSXRlbXMuaGlkZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJGxlc3MuaGlkZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJG1vcmUuc2hvdygpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICRtb3JlLmhpZGUoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAkbGVzcy5oaWRlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuJGF0dHJpYnV0ZXNDb250YWluZXIuZmluZCgnW2RhdGEtbW9yZV0sIFtkYXRhLWxlc3NdJykuaGlkZSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIHJlcXVlc3RBdHRyaWJ1dGVzQ2hhbmdlKCRmb3JtKSB7XG4gICAgICAgIGlmICghd2luZG93LkZvcm1EYXRhKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5maWx0ZXJFbXB0eUZpbGVzRnJvbUZvcm0obmV3IEZvcm1EYXRhKCRmb3JtLmdldCgwKSkpO1xuXG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB1cmw6IGAvcmVtb3RlL3YxL3Byb2R1Y3QtYXR0cmlidXRlcy8ke3RoaXMucHJvZHVjdElkfWAsXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcbiAgICAgICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcbiAgICAgICAgICAgIGRhdGEsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ3N0ZW5jaWwtY29uZmlnJzogJ3t9JyxcbiAgICAgICAgICAgICAgICAnc3RlbmNpbC1vcHRpb25zJzogJ3t9JyxcbiAgICAgICAgICAgICAgICAneC14c3JmLXRva2VuJzogd2luZG93LkJDRGF0YSAmJiB3aW5kb3cuQkNEYXRhLmNzcmZfdG9rZW4gPyB3aW5kb3cuQkNEYXRhLmNzcmZfdG9rZW4gOiAnJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB4aHJGaWVsZHM6IHtcbiAgICAgICAgICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3VjY2VzczogKHJlc3ApID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IGltYWdlLCBwcmljZSB9ID0gcmVzcC5kYXRhO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaW1hZ2VSZXBsYWNlckZ1bmMpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW1nID0gaW1hZ2UgPyBpbWFnZS5kYXRhLnJlcGxhY2UoJ3s6c2l6ZX0nLCB0aGlzLmltYWdlU2l6ZSkgOiBudWxsO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmltYWdlUmVwbGFjZXJGdW5jKHRoaXMuJGNhcmRJbWFnZSwgaW1nKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW1hZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGltZyA9IGltYWdlLmRhdGEucmVwbGFjZSgnezpzaXplfScsIHRoaXMuaW1hZ2VTaXplKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy4kY2FyZEltYWdlLmRhdGEoJ29yaWdpbmFsU3JjJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRjYXJkSW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmRhdGEoJ29yaWdpbmFsU3JjJywgdGhpcy4kY2FyZEltYWdlLmF0dHIoJ3NyYycpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZGF0YSgnb3JpZ2luYWxTcmNzZXQnLCB0aGlzLiRjYXJkSW1hZ2UuYXR0cignc3Jjc2V0JykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kY2FyZEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3NyYycsIGltZylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignc3Jjc2V0JywgJycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2RhdGEtc3Jjc2V0JywgJycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdwcm9kdWN0U3dhdGNoZXMtaW1hZ2Utb3B0aW9uQ2hhbmdlZCcpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuJGNhcmRJbWFnZS5kYXRhKCdvcmlnaW5hbFNyYycpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRjYXJkSW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignc3JjJywgdGhpcy4kY2FyZEltYWdlLmRhdGEoJ29yaWdpbmFsU3JjJykpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3NyY3NldCcsIHRoaXMuJGNhcmRJbWFnZS5kYXRhKCdvcmlnaW5hbFNyY3NldCcpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdkYXRhLXNyY3NldCcsIHRoaXMuJGNhcmRJbWFnZS5kYXRhKCdvcmlnaW5hbFNyY3NldCcpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5kYXRhKCdvcmlnaW5hbFNyYycsIG51bGwpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmRhdGEoJ29yaWdpbmFsU3Jjc2V0JywgbnVsbClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ3Byb2R1Y3RTd2F0Y2hlcy1pbWFnZS1vcHRpb25DaGFuZ2VkJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAocHJpY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgdmlld01vZGVsID0gdGhpcy5nZXRWaWV3TW9kZWwodGhpcy4kc2NvcGUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVByaWNlVmlldyh2aWV3TW9kZWwsIHByaWNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy80OTY3Mjk5Mi9hamF4LXJlcXVlc3QtZmFpbHMtd2hlbi1zZW5kaW5nLWZvcm1kYXRhLWluY2x1ZGluZy1lbXB0eS1maWxlLWlucHV0LWluLXNhZmFyaVxuICAgICAqIFNhZmFyaSBicm93c2VyIHdpdGgganF1ZXJ5IDMuMy4xIGhhcyBhbiBpc3N1ZSB1cGxvYWRpbmcgZW1wdHkgZmlsZSBwYXJhbWV0ZXJzLiBUaGlzIGZ1bmN0aW9uIHJlbW92ZXMgYW55IGVtcHR5IGZpbGVzIGZyb20gdGhlIGZvcm0gcGFyYW1zXG4gICAgICogQHBhcmFtIGZvcm1EYXRhOiBGb3JtRGF0YSBvYmplY3RcbiAgICAgKiBAcmV0dXJucyBGb3JtRGF0YSBvYmplY3RcbiAgICAgKi9cbiAgICBmaWx0ZXJFbXB0eUZpbGVzRnJvbUZvcm0oZm9ybURhdGEpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsXSBvZiBmb3JtRGF0YSkge1xuICAgICAgICAgICAgICAgIGlmICh2YWwgaW5zdGFuY2VvZiBGaWxlICYmICF2YWwubmFtZSAmJiAhdmFsLnNpemUpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9ybURhdGEuZGVsZXRlKGtleSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZm9ybURhdGE7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2luY2UgJHByb2R1Y3RWaWV3IGNhbiBiZSBkeW5hbWljYWxseSBpbnNlcnRlZCB1c2luZyByZW5kZXJfd2l0aCxcbiAgICAgKiBXZSBoYXZlIHRvIHJldHJpZXZlIHRoZSByZXNwZWN0aXZlIGVsZW1lbnRzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gJHNjb3BlXG4gICAgICovXG4gICAgZ2V0Vmlld01vZGVsKCRzY29wZSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgJHByaWNlV2l0aFRheDogJCgnW2RhdGEtcHJvZHVjdC1wcmljZS13aXRoLXRheF0nLCAkc2NvcGUpLFxuICAgICAgICAgICAgJHByaWNlV2l0aG91dFRheDogJCgnW2RhdGEtcHJvZHVjdC1wcmljZS13aXRob3V0LXRheF0nLCAkc2NvcGUpLFxuICAgICAgICAgICAgcnJwV2l0aFRheDoge1xuICAgICAgICAgICAgICAgICRkaXY6ICQoJy5ycnAtcHJpY2UtLXdpdGhUYXgnLCAkc2NvcGUpLFxuICAgICAgICAgICAgICAgICRzcGFuOiAkKCdbZGF0YS1wcm9kdWN0LXJycC13aXRoLXRheF0nLCAkc2NvcGUpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJycFdpdGhvdXRUYXg6IHtcbiAgICAgICAgICAgICAgICAkZGl2OiAkKCcucnJwLXByaWNlLS13aXRob3V0VGF4JywgJHNjb3BlKSxcbiAgICAgICAgICAgICAgICAkc3BhbjogJCgnW2RhdGEtcHJvZHVjdC1ycnAtcHJpY2Utd2l0aG91dC10YXhdJywgJHNjb3BlKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBub25TYWxlV2l0aFRheDoge1xuICAgICAgICAgICAgICAgICRkaXY6ICQoJy5ub24tc2FsZS1wcmljZS0td2l0aFRheCcsICRzY29wZSksXG4gICAgICAgICAgICAgICAgJHNwYW46ICQoJ1tkYXRhLXByb2R1Y3Qtbm9uLXNhbGUtcHJpY2Utd2l0aC10YXhdJywgJHNjb3BlKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBub25TYWxlV2l0aG91dFRheDoge1xuICAgICAgICAgICAgICAgICRkaXY6ICQoJy5ub24tc2FsZS1wcmljZS0td2l0aG91dFRheCcsICRzY29wZSksXG4gICAgICAgICAgICAgICAgJHNwYW46ICQoJ1tkYXRhLXByb2R1Y3Qtbm9uLXNhbGUtcHJpY2Utd2l0aG91dC10YXhdJywgJHNjb3BlKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwcmljZVNhdmVkOiB7XG4gICAgICAgICAgICAgICAgJGRpdjogJCgnLnByaWNlLXNlY3Rpb24tLXNhdmluZycsICRzY29wZSksXG4gICAgICAgICAgICAgICAgJHNwYW46ICQoJ1tkYXRhLXByb2R1Y3QtcHJpY2Utc2F2ZWRdJywgJHNjb3BlKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwcmljZU5vd0xhYmVsOiB7XG4gICAgICAgICAgICAgICAgJHNwYW46ICQoJy5wcmljZS1ub3ctbGFiZWwnLCAkc2NvcGUpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHByaWNlTGFiZWw6IHtcbiAgICAgICAgICAgICAgICAkc3BhbjogJCgnLnByaWNlLWxhYmVsJywgJHNjb3BlKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGlkZSB0aGUgcHJpY2luZyBlbGVtZW50cyB0aGF0IHdpbGwgc2hvdyB1cCBvbmx5IHdoZW4gdGhlIHByaWNlIGV4aXN0cyBpbiBBUElcbiAgICAgKiBAcGFyYW0gdmlld01vZGVsXG4gICAgICovXG4gICAgY2xlYXJQcmljaW5nTm90Rm91bmQodmlld01vZGVsKSB7XG4gICAgICAgIHZpZXdNb2RlbC5ycnBXaXRoVGF4LiRkaXYuaGlkZSgpO1xuICAgICAgICB2aWV3TW9kZWwucnJwV2l0aG91dFRheC4kZGl2LmhpZGUoKTtcbiAgICAgICAgdmlld01vZGVsLm5vblNhbGVXaXRoVGF4LiRkaXYuaGlkZSgpO1xuICAgICAgICB2aWV3TW9kZWwubm9uU2FsZVdpdGhvdXRUYXguJGRpdi5oaWRlKCk7XG4gICAgICAgIHZpZXdNb2RlbC5wcmljZVNhdmVkLiRkaXYuaGlkZSgpO1xuICAgICAgICB2aWV3TW9kZWwucHJpY2VOb3dMYWJlbC4kc3Bhbi5oaWRlKCk7XG4gICAgICAgIHZpZXdNb2RlbC5wcmljZUxhYmVsLiRzcGFuLmhpZGUoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgdGhlIHZpZXcgb2YgcHJpY2UsIG1lc3NhZ2VzLCBTS1UgYW5kIHN0b2NrIG9wdGlvbnMgd2hlbiBhIHByb2R1Y3Qgb3B0aW9uIGNoYW5nZXNcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IGRhdGEgUHJvZHVjdCBhdHRyaWJ1dGUgZGF0YVxuICAgICAqL1xuICAgIHVwZGF0ZVByaWNlVmlldyh2aWV3TW9kZWwsIHByaWNlKSB7XG4gICAgICAgIHRoaXMuY2xlYXJQcmljaW5nTm90Rm91bmQodmlld01vZGVsKTtcblxuICAgICAgICBpZiAocHJpY2Uud2l0aF90YXgpIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZUxhYmVsLiRzcGFuLnNob3coKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC4kcHJpY2VXaXRoVGF4Lmh0bWwocHJpY2Uud2l0aF90YXguZm9ybWF0dGVkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcmljZS53aXRob3V0X3RheCkge1xuICAgICAgICAgICAgdmlld01vZGVsLnByaWNlTGFiZWwuJHNwYW4uc2hvdygpO1xuICAgICAgICAgICAgdmlld01vZGVsLiRwcmljZVdpdGhvdXRUYXguaHRtbChwcmljZS53aXRob3V0X3RheC5mb3JtYXR0ZWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByaWNlLnJycF93aXRoX3RheCkge1xuICAgICAgICAgICAgdmlld01vZGVsLnJycFdpdGhUYXguJGRpdi5zaG93KCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwucnJwV2l0aFRheC4kc3Bhbi5odG1sKHByaWNlLnJycF93aXRoX3RheC5mb3JtYXR0ZWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByaWNlLnJycF93aXRob3V0X3RheCkge1xuICAgICAgICAgICAgdmlld01vZGVsLnJycFdpdGhvdXRUYXguJGRpdi5zaG93KCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwucnJwV2l0aG91dFRheC4kc3Bhbi5odG1sKHByaWNlLnJycF93aXRob3V0X3RheC5mb3JtYXR0ZWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByaWNlLnNhdmVkKSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VTYXZlZC4kZGl2LnNob3coKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZVNhdmVkLiRzcGFuLmh0bWwocHJpY2Uuc2F2ZWQuZm9ybWF0dGVkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcmljZS5ub25fc2FsZV9wcmljZV93aXRoX3RheCkge1xuICAgICAgICAgICAgdmlld01vZGVsLnByaWNlTGFiZWwuJHNwYW4uaGlkZSgpO1xuICAgICAgICAgICAgdmlld01vZGVsLm5vblNhbGVXaXRoVGF4LiRkaXYuc2hvdygpO1xuICAgICAgICAgICAgdmlld01vZGVsLnByaWNlTm93TGFiZWwuJHNwYW4uc2hvdygpO1xuICAgICAgICAgICAgdmlld01vZGVsLm5vblNhbGVXaXRoVGF4LiRzcGFuLmh0bWwocHJpY2Uubm9uX3NhbGVfcHJpY2Vfd2l0aF90YXguZm9ybWF0dGVkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcmljZS5ub25fc2FsZV9wcmljZV93aXRob3V0X3RheCkge1xuICAgICAgICAgICAgdmlld01vZGVsLnByaWNlTGFiZWwuJHNwYW4uaGlkZSgpO1xuICAgICAgICAgICAgdmlld01vZGVsLm5vblNhbGVXaXRob3V0VGF4LiRkaXYuc2hvdygpO1xuICAgICAgICAgICAgdmlld01vZGVsLnByaWNlTm93TGFiZWwuJHNwYW4uc2hvdygpO1xuICAgICAgICAgICAgdmlld01vZGVsLm5vblNhbGVXaXRob3V0VGF4LiRzcGFuLmh0bWwocHJpY2Uubm9uX3NhbGVfcHJpY2Vfd2l0aG91dF90YXguZm9ybWF0dGVkKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FyZDsiLCJpbXBvcnQgaW5WaWV3IGZyb20gJ2luLXZpZXcnO1xuaW1wb3J0IHsgZGVib3VuY2UgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IENhcmQgZnJvbSAnLi9DYXJkJztcblxuY2xhc3MgUHJvZHVjdFN3YXRjaGVzIHtcbiAgICBjb25zdHJ1Y3Rvcih7XG4gICAgICAgIGNhcmRTZWxlY3RvciA9ICcucHJvZHVjdCAuY2FyZCwgLnByb2R1Y3RDYXJvdXNlbC1zbGlkZSAuY2FyZCcsXG4gICAgICAgIHByb2R1Y3RJZFNlbGVjdG9yID0gJ1tkYXRhLXByb2R1Y3QtaWRdJyxcbiAgICAgICAgZmluZFByb2R1Y3RJZEJ5SW1nID0gZmFsc2UsXG4gICAgICAgIHN3YXRjaGVzQ29udGFpbmVyU2VsZWN0b3IgPSAnLmNhcmQtdGV4dC0tY29sb3Jzd2F0Y2hlcycsXG4gICAgICAgIGNhcmRJbWFnZVNlbGVjdG9yID0gJy5jYXJkLWltYWdlJyxcbiAgICAgICAgYWRkVG9DYXJ0Rm9ybVNlbGVjdG9yID0gJ2Zvcm1bZGF0YS1jYXJ0LWl0ZW0tYWRkXScsXG4gICAgICAgIHByb2R1Y3RWaWV3RmlsZSA9ICdwcm9kdWN0cy9wcm9kdWN0LXZpZXcnLFxuICAgICAgICBhdHRyaWJ1dGVzVGVtcGxhdGUgPSBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZHVjdFN3YXRjaGVzLWF0dHJpYnV0ZXNcIj5cbiAgICAgICAgICAgICAgICB7eyNhdHRyaWJ1dGVzfX1cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2R1Y3RTd2F0Y2hlcy1zd2F0Y2hlc1wiIGRhdGEtc3dhdGNoZXM+XG4gICAgICAgICAgICAgICAgICAgICAgICB7eyMufX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwicHJvZHVjdFN3YXRjaGVzLXN3YXRjaGVzLWl0ZW1cIiB0aXRsZT1cInt7bGFiZWx9fVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYXR0cmlidXRlLWlkPVwie3thdHRyaWJ1dGVJZH19XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1hdHRyaWJ1dGUtdmFsdWU9XCJ7e2F0dHJpYnV0ZVZhbHVlfX1cIj57eyZjb250ZW50fX08L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICB7ey8ufX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwicHJvZHVjdFN3YXRjaGVzLXN3YXRjaGVzLW1vcmVcIiBkYXRhLW1vcmU+KyBNb3JlPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInByb2R1Y3RTd2F0Y2hlcy1zd2F0Y2hlcy1sZXNzXCIgZGF0YS1sZXNzPi0gTGVzczwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB7ey9hdHRyaWJ1dGVzfX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgLFxuICAgICAgICB0ZW1wbGF0ZUN1c3RvbVRhZ3MgPSBudWxsLFxuICAgICAgICBpbWFnZVNpemUgPSAnNTkweDU5MCcsXG4gICAgICAgIGlucHV0RmluZGVyRnVuYyA9IG51bGwsXG4gICAgICAgIHN3YXRjaGVzTGltaXQgPSAwLFxuICAgICAgICBpbWFnZVJlcGxhY2VyRnVuYyA9IG51bGwsXG4gICAgICAgIGRpc3BsYXlJblN0b2NrT25seSA9IGZhbHNlLFxuICAgICAgICBhdXRvU2VsZWN0T3B0aW9uVmFsdWVzID0gdHJ1ZSxcbiAgICAgICAgZ3JhcGhRTFRva2VuID0gJydcbiAgICB9ID0ge30pIHtcbiAgICAgICAgdGhpcy5jb25maWcgPSB7XG4gICAgICAgICAgICBjYXJkU2VsZWN0b3IsXG4gICAgICAgICAgICBwcm9kdWN0SWRTZWxlY3RvcixcbiAgICAgICAgICAgIGZpbmRQcm9kdWN0SWRCeUltZyxcbiAgICAgICAgICAgIHN3YXRjaGVzQ29udGFpbmVyU2VsZWN0b3IsXG4gICAgICAgICAgICBjYXJkSW1hZ2VTZWxlY3RvcixcbiAgICAgICAgICAgIGFkZFRvQ2FydEZvcm1TZWxlY3RvcixcbiAgICAgICAgICAgIHByb2R1Y3RWaWV3RmlsZSxcbiAgICAgICAgICAgIGF0dHJpYnV0ZXNUZW1wbGF0ZSxcbiAgICAgICAgICAgIHRlbXBsYXRlQ3VzdG9tVGFncyxcbiAgICAgICAgICAgIGltYWdlU2l6ZSxcbiAgICAgICAgICAgIGlucHV0RmluZGVyRnVuYyxcbiAgICAgICAgICAgIHN3YXRjaGVzTGltaXQsXG4gICAgICAgICAgICBpbWFnZVJlcGxhY2VyRnVuYyxcbiAgICAgICAgICAgIGRpc3BsYXlJblN0b2NrT25seSxcbiAgICAgICAgICAgIGF1dG9TZWxlY3RPcHRpb25WYWx1ZXMsXG4gICAgICAgICAgICBncmFwaFFMVG9rZW4sXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMub25XaW5kb3dTY3JvbGwgPSBkZWJvdW5jZSh0aGlzLm9uV2luZG93U2Nyb2xsLmJpbmQodGhpcywgbnVsbCksIDIwMCk7XG5cbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgYmluZEV2ZW50cygpIHtcbiAgICAgICAgJCh3aW5kb3cpLm9uKCdzY3JvbGwgcmVzaXplIGxvYWQnLCB0aGlzLm9uV2luZG93U2Nyb2xsKTtcblxuICAgICAgICBjb25zdCBNdXRhdGlvbk9ic2VydmVyID0gd2luZG93Lk11dGF0aW9uT2JzZXJ2ZXIgfHwgd2luZG93LldlYktpdE11dGF0aW9uT2JzZXJ2ZXI7XG4gICAgICAgIGlmIChNdXRhdGlvbk9ic2VydmVyKSB7XG4gICAgICAgICAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihtdXRhdGlvbnMgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0ICRuZXdFbGVtZW50cyA9IG11dGF0aW9ucy5yZWR1Y2UoKGFjY3VtdWxhdGUsIG11dGF0aW9uKSA9PiBbLi4uYWNjdW11bGF0ZSwgLi4ubXV0YXRpb24uYWRkZWROb2Rlc10sIFtdKTtcbiAgICAgICAgICAgICAgICB0aGlzLm9uV2luZG93U2Nyb2xsKCRuZXdFbGVtZW50cyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMubXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCwge1xuICAgICAgICAgICAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBzdWJ0cmVlOiB0cnVlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdW5iaW5kRXZlbnRzKCkge1xuICAgICAgICAkKHdpbmRvdykub2ZmKCdzY3JvbGwgcmVzaXplIGxvYWQnLCB0aGlzLm9uV2luZG93U2Nyb2xsKTtcblxuICAgICAgICBpZiAodGhpcy5tdXRhdGlvbk9ic2VydmVyKSB7XG4gICAgICAgICAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgdGhpcy5tdXRhdGlvbk9ic2VydmVyID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uV2luZG93U2Nyb2xsKCRib2R5ID0gbnVsbCkge1xuICAgICAgICBjb25zdCBjYXJkcyA9IFtdO1xuXG4gICAgICAgICQodGhpcy5jb25maWcuY2FyZFNlbGVjdG9yLCAkYm9keSkuZWFjaCgoaSwgZWwpID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRzY29wZSA9ICQoZWwpO1xuICAgICAgICAgICAgaWYgKCRzY29wZS5kYXRhKCdwcm9kdWN0U3dhdGNoZXNDYXJkJykgfHwgIWluVmlldy5pcyhlbCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBwcm9kdWN0SWQgPSAkc2NvcGUuZmluZCh0aGlzLmNvbmZpZy5wcm9kdWN0SWRTZWxlY3RvcikuZGF0YSgncHJvZHVjdElkJyk7XG4gICAgICAgICAgICBpZiAoIXByb2R1Y3RJZCkge1xuICAgICAgICAgICAgICAgIC8vIHRyeSB0byBmaW5kIHByb2R1Y3QgSUQgYnkgaW1nIHNyY1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5jb25maWcuZmluZFByb2R1Y3RJZEJ5SW1nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcHJvZHVjdElkID0gJHNjb3BlLmZpbmQoJ2ltZycpLmdldCgpLnJlZHVjZSgoaWQsIGltZykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBtID0gU3RyaW5nKGltZy5zcmMpLm1hdGNoKC9wcm9kdWN0c1xcLyhbMC05XSspXFwvLyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtID8gTnVtYmVyKG1bMV0pIDogaWQ7XG4gICAgICAgICAgICAgICAgfSwgbnVsbCk7XG4gICAgICAgICAgICAgICAgaWYgKCFwcm9kdWN0SWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgJGF0dHJpYnV0ZXNDb250YWluZXIgPSAkc2NvcGUuZmluZCh0aGlzLmNvbmZpZy5zd2F0Y2hlc0NvbnRhaW5lclNlbGVjdG9yKTtcbiAgICAgICAgICAgIGlmICgkYXR0cmlidXRlc0NvbnRhaW5lci5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgICAgICBwcm9kdWN0Vmlld0ZpbGUsXG4gICAgICAgICAgICAgICAgYXR0cmlidXRlc1RlbXBsYXRlLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlQ3VzdG9tVGFncyxcbiAgICAgICAgICAgICAgICBhZGRUb0NhcnRGb3JtU2VsZWN0b3IsXG4gICAgICAgICAgICAgICAgaW1hZ2VTaXplLFxuICAgICAgICAgICAgICAgIGlucHV0RmluZGVyRnVuYyxcbiAgICAgICAgICAgICAgICBzd2F0Y2hlc0xpbWl0LFxuICAgICAgICAgICAgICAgIGltYWdlUmVwbGFjZXJGdW5jLFxuICAgICAgICAgICAgICAgIGRpc3BsYXlJblN0b2NrT25seSxcbiAgICAgICAgICAgICAgICBhdXRvU2VsZWN0T3B0aW9uVmFsdWVzLFxuICAgICAgICAgICAgICAgIGdyYXBoUUxUb2tlbixcbiAgICAgICAgICAgIH0gPSB0aGlzLmNvbmZpZztcblxuICAgICAgICAgICAgY29uc3QgJGNhcmRJbWFnZSA9ICRzY29wZS5maW5kKHRoaXMuY29uZmlnLmNhcmRJbWFnZVNlbGVjdG9yKS5maXJzdCgpO1xuXG4gICAgICAgICAgICBjb25zdCBjYXJkID0gbmV3IENhcmQoe1xuICAgICAgICAgICAgICAgICRzY29wZSxcbiAgICAgICAgICAgICAgICAkYXR0cmlidXRlc0NvbnRhaW5lcixcbiAgICAgICAgICAgICAgICBwcm9kdWN0SWQsXG4gICAgICAgICAgICAgICAgcHJvZHVjdFZpZXdGaWxlLFxuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXNUZW1wbGF0ZSxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZUN1c3RvbVRhZ3MsXG4gICAgICAgICAgICAgICAgYWRkVG9DYXJ0Rm9ybVNlbGVjdG9yLFxuICAgICAgICAgICAgICAgICRjYXJkSW1hZ2UsXG4gICAgICAgICAgICAgICAgaW1hZ2VTaXplLFxuICAgICAgICAgICAgICAgIGlucHV0RmluZGVyRnVuYyxcbiAgICAgICAgICAgICAgICBzd2F0Y2hlc0xpbWl0LFxuICAgICAgICAgICAgICAgIGltYWdlUmVwbGFjZXJGdW5jLFxuICAgICAgICAgICAgICAgIGRpc3BsYXlJblN0b2NrT25seSxcbiAgICAgICAgICAgICAgICBhdXRvU2VsZWN0T3B0aW9uVmFsdWVzLFxuICAgICAgICAgICAgICAgIGF1dG9Jbml0OiAhZ3JhcGhRTFRva2VuLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjYXJkcy5wdXNoKGNhcmQpO1xuXG4gICAgICAgICAgICAkc2NvcGUuZGF0YSgncHJvZHVjdFN3YXRjaGVzQ2FyZCcsIGNhcmQpO1xuICAgICAgICAgICAgJHNjb3BlLmFkZENsYXNzKCdwcm9kdWN0U3dhdGNoZXNMb2FkZWQnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLmdyYXBoUUxUb2tlbiAmJiBjYXJkcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBjb25zdCBpZHMgPSBjYXJkcy5tYXAoY2FyZCA9PiBjYXJkLnByb2R1Y3RJZCk7XG4gICAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgICAgIHVybDogJy9ncmFwaHFsJyxcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBgXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l0ZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RzIChlbnRpdHlJZHM6ICR7SlNPTi5zdHJpbmdpZnkoaWRzKX0sIGZpcnN0OiAke2lkcy5sZW5ndGh9KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGdlcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eUlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluUHVyY2hhc2VRdWFudGl0eVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0T3B0aW9ucyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGdlcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eUlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLiBvbiBDaGVja2JveE9wdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkQnlEZWZhdWx0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uIG9uIE11bHRpcGxlQ2hvaWNlT3B0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRnZXMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eUlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0RlZmF1bHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLiBvbiBTd2F0Y2hPcHRpb25WYWx1ZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZXhDb2xvcnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVVybCh3aWR0aDogMTAwKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHt0aGlzLmNvbmZpZy5ncmFwaFFMVG9rZW59YCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHhockZpZWxkczoge1xuICAgICAgICAgICAgICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiAocmVzcCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXNwLmRhdGEuc2l0ZS5wcm9kdWN0cy5lZGdlcy5mb3JFYWNoKGVkZ2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FyZHMuZmlsdGVyKGNhcmQgPT4gY2FyZC5wcm9kdWN0SWQgPT0gZWRnZS5ub2RlLmVudGl0eUlkKS5mb3JFYWNoKGNhcmQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcmQuZ3JhcGhRTE5vZGUgPSBlZGdlLm5vZGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FyZC5pbml0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RTd2F0Y2hlczsiXSwic291cmNlUm9vdCI6IiJ9