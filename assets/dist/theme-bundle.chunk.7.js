(window["webpackJsonpWebpackChiara"] = window["webpackJsonpWebpackChiara"] || []).push([[7],{

/***/ "./node_modules/array-find/find.js":
/*!*****************************************!*\
  !*** ./node_modules/array-find/find.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function find(array, predicate, context) {
  if (typeof Array.prototype.find === 'function') {
    return array.find(predicate, context);
  }

  context = context || this;
  var length = array.length;
  var i;

  if (typeof predicate !== 'function') {
    throw new TypeError(predicate + ' is not a function');
  }

  for (i = 0; i < length; i++) {
    if (predicate.call(context, array[i], i, array)) {
      return array[i];
    }
  }
}

module.exports = find;


/***/ }),

/***/ "./node_modules/creditcards-types/index.js":
/*!*************************************************!*\
  !*** ./node_modules/creditcards-types/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! ./types */ "./node_modules/creditcards-types/types/index.js")


/***/ }),

/***/ "./node_modules/creditcards-types/type.js":
/*!************************************************!*\
  !*** ./node_modules/creditcards-types/type.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var assign = __webpack_require__(/*! xtend/mutable */ "./node_modules/xtend/mutable.js")

module.exports = CardType

function CardType (data) {
  if (!(this instanceof CardType)) return new CardType(data)
  assign(this, data)
}

CardType.prototype.digits = 16
CardType.prototype.cvcLength = 3
CardType.prototype.luhn = true
CardType.prototype.groupPattern = /(\d{1,4})(\d{1,4})?(\d{1,4})?(\d{1,4})?/

CardType.prototype.group = function (number) {
  return (number.match(this.groupPattern) || [])
    .slice(1)
    .filter(Boolean)
}

CardType.prototype.test = function (number, eager) {
  return this[eager ? 'eagerPattern' : 'pattern'].test(number)
}


/***/ }),

/***/ "./node_modules/creditcards-types/types/american-express.js":
/*!******************************************************************!*\
  !*** ./node_modules/creditcards-types/types/american-express.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Type = __webpack_require__(/*! ../type */ "./node_modules/creditcards-types/type.js")

module.exports = Type({
  name: 'American Express',
  digits: 15,
  pattern: /^3[47]\d{13}$/,
  eagerPattern: /^3[47]/,
  groupPattern: /(\d{1,4})(\d{1,6})?(\d{1,5})?/,
  cvcLength: 4
})


/***/ }),

/***/ "./node_modules/creditcards-types/types/dankort.js":
/*!*********************************************************!*\
  !*** ./node_modules/creditcards-types/types/dankort.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Type = __webpack_require__(/*! ../type */ "./node_modules/creditcards-types/type.js")

module.exports = Type({
  name: 'Dankort',
  pattern: /^5019\d{12}$/,
  eagerPattern: /^5019/
})


/***/ }),

/***/ "./node_modules/creditcards-types/types/diners-club.js":
/*!*************************************************************!*\
  !*** ./node_modules/creditcards-types/types/diners-club.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Type = __webpack_require__(/*! ../type */ "./node_modules/creditcards-types/type.js")

module.exports = Type({
  name: 'Diners Club',
  digits: 14,
  pattern: /^3(0[0-5]|[68]\d)\d{11}$/,
  eagerPattern: /^3(0|[68])/,
  groupPattern: /(\d{1,4})?(\d{1,6})?(\d{1,4})?/
})


/***/ }),

/***/ "./node_modules/creditcards-types/types/discover.js":
/*!**********************************************************!*\
  !*** ./node_modules/creditcards-types/types/discover.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Type = __webpack_require__(/*! ../type */ "./node_modules/creditcards-types/type.js")

module.exports = Type({
  name: 'Discover',
  pattern: /^6(011(0[0-9]|[2-4]\d|74|7[7-9]|8[6-9]|9[0-9])|4[4-9]\d{3}|5\d{4})\d{10}$/,
  eagerPattern: /^6(011(0[0-9]|[2-4]|74|7[7-9]|8[6-9]|9[0-9])|4[4-9]|5)/
})


/***/ }),

/***/ "./node_modules/creditcards-types/types/elo.js":
/*!*****************************************************!*\
  !*** ./node_modules/creditcards-types/types/elo.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Type = __webpack_require__(/*! ../type */ "./node_modules/creditcards-types/type.js")

module.exports = Type({
  name: 'Elo',
  pattern: /^(4[035]|5[0]|6[235])(6[7263]|9[90]|1[2416]|7[736]|8[9]|0[04579]|5[0])([0-9])([0-9])\d{10}$/,
  eagerPattern: /^(4[035]|5[0]|6[235])(6[7263]|9[90]|1[2416]|7[736]|8[9]|0[04579]|5[0])([0-9])([0-9])/,
  groupPattern: /(\d{1,4})(\d{1,4})?(\d{1,4})?(\d{1,4})?(\d{1,3})?/
})


/***/ }),

/***/ "./node_modules/creditcards-types/types/forbrugsforeningen.js":
/*!********************************************************************!*\
  !*** ./node_modules/creditcards-types/types/forbrugsforeningen.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Type = __webpack_require__(/*! ../type */ "./node_modules/creditcards-types/type.js")

module.exports = Type({
  name: 'Forbrugsforeningen',
  pattern: /^600722\d{10}$/,
  eagerPattern: /^600/
})


/***/ }),

/***/ "./node_modules/creditcards-types/types/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/creditcards-types/types/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = [
  __webpack_require__(/*! ./visa */ "./node_modules/creditcards-types/types/visa.js"),
  __webpack_require__(/*! ./maestro */ "./node_modules/creditcards-types/types/maestro.js"),
  __webpack_require__(/*! ./forbrugsforeningen */ "./node_modules/creditcards-types/types/forbrugsforeningen.js"),
  __webpack_require__(/*! ./dankort */ "./node_modules/creditcards-types/types/dankort.js"),
  __webpack_require__(/*! ./mastercard */ "./node_modules/creditcards-types/types/mastercard.js"),
  __webpack_require__(/*! ./american-express */ "./node_modules/creditcards-types/types/american-express.js"),
  __webpack_require__(/*! ./diners-club */ "./node_modules/creditcards-types/types/diners-club.js"),
  __webpack_require__(/*! ./discover */ "./node_modules/creditcards-types/types/discover.js"),
  __webpack_require__(/*! ./jcb */ "./node_modules/creditcards-types/types/jcb.js"),
  __webpack_require__(/*! ./unionpay */ "./node_modules/creditcards-types/types/unionpay.js"),
  __webpack_require__(/*! ./troy */ "./node_modules/creditcards-types/types/troy.js"),
  __webpack_require__(/*! ./elo */ "./node_modules/creditcards-types/types/elo.js"),
  __webpack_require__(/*! ./uatp */ "./node_modules/creditcards-types/types/uatp.js")
]


/***/ }),

/***/ "./node_modules/creditcards-types/types/jcb.js":
/*!*****************************************************!*\
  !*** ./node_modules/creditcards-types/types/jcb.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Type = __webpack_require__(/*! ../type */ "./node_modules/creditcards-types/type.js")

module.exports = Type({
  name: 'JCB',
  pattern: /^35\d{14}$/,
  eagerPattern: /^35/
})


/***/ }),

/***/ "./node_modules/creditcards-types/types/maestro.js":
/*!*********************************************************!*\
  !*** ./node_modules/creditcards-types/types/maestro.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Type = __webpack_require__(/*! ../type */ "./node_modules/creditcards-types/type.js")

module.exports = Type({
  name: 'Maestro',
  digits: [12, 19],
  pattern: /^(?:5[06789]\d\d|(?!6011[0234])(?!60117[4789])(?!60118[6789])(?!60119)(?!64[456789])(?!65)6\d{3})\d{8,15}$/,
  eagerPattern: /^(5(018|0[23]|[68])|6[37]|60111|60115|60117([56]|7[56])|60118[0-5]|64[0-3]|66)/,
  groupPattern: /(\d{1,4})(\d{1,4})?(\d{1,4})?(\d{1,4})?(\d{1,3})?/
})


/***/ }),

/***/ "./node_modules/creditcards-types/types/mastercard.js":
/*!************************************************************!*\
  !*** ./node_modules/creditcards-types/types/mastercard.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Type = __webpack_require__(/*! ../type */ "./node_modules/creditcards-types/type.js")

module.exports = Type({
  name: 'Mastercard',
  pattern: /^(5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)\d{12}$/,
  eagerPattern: /^(2[3-7]|22[2-9]|5[1-5])/
})


/***/ }),

/***/ "./node_modules/creditcards-types/types/troy.js":
/*!******************************************************!*\
  !*** ./node_modules/creditcards-types/types/troy.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Type = __webpack_require__(/*! ../type */ "./node_modules/creditcards-types/type.js")

module.exports = Type({
  name: 'Troy',
  pattern: /^9792\d{12}$/,
  eagerPattern: /^9792/
})


/***/ }),

/***/ "./node_modules/creditcards-types/types/uatp.js":
/*!******************************************************!*\
  !*** ./node_modules/creditcards-types/types/uatp.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Type = __webpack_require__(/*! ../type */ "./node_modules/creditcards-types/type.js")

module.exports = Type({
  name: 'UATP',
  digits: 15,
  pattern: /^1\d{14}$/,
  eagerPattern: /^1/,
  groupPattern: /(\d{1,4})(\d{1,5})?(\d{1,6})?/
})


/***/ }),

/***/ "./node_modules/creditcards-types/types/unionpay.js":
/*!**********************************************************!*\
  !*** ./node_modules/creditcards-types/types/unionpay.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Type = __webpack_require__(/*! ../type */ "./node_modules/creditcards-types/type.js")

module.exports = Type({
  name: 'UnionPay',
  pattern: /^62[0-5]\d{13,16}$/,
  eagerPattern: /^62/,
  groupPattern: /(\d{1,4})(\d{1,4})?(\d{1,4})?(\d{1,4})?(\d{1,3})?/,
  luhn: false
})


/***/ }),

/***/ "./node_modules/creditcards-types/types/visa.js":
/*!******************************************************!*\
  !*** ./node_modules/creditcards-types/types/visa.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Type = __webpack_require__(/*! ../type */ "./node_modules/creditcards-types/type.js")

module.exports = Type({
  name: 'Visa',
  digits: [13, 19],
  pattern: /^4\d{12}(\d{3}|\d{6})?$/,
  eagerPattern: /^4/,
  groupPattern: /(\d{1,4})(\d{1,4})?(\d{1,4})?(\d{1,4})?(\d{1,3})?/
})


/***/ }),

/***/ "./node_modules/creditcards/card.js":
/*!******************************************!*\
  !*** ./node_modules/creditcards/card.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var luhn = __webpack_require__(/*! fast-luhn */ "./node_modules/fast-luhn/index.js")
var Types = __webpack_require__(/*! ./types */ "./node_modules/creditcards/types.js")

module.exports = Card

function Card (data) {
  var types = Types(data)

  return {
    types: data,
    parse: parseCard,
    format: formatCard,
    type: cardType,
    luhn: luhn,
    isValid: isCardValid
  }

  function parseCard (number) {
    if (typeof number !== 'string') return ''
    return number.replace(/[^\d]/g, '')
  }

  function formatCard (number, separator) {
    var type = getType(number, true)
    if (!type) return number
    return type.group(number).join(separator || ' ')
  }

  function cardType (number, eager) {
    var type = getType(number, eager)
    return type ? type.name : undefined
  }

  function isCardValid (number, type) {
    if (type) {
      type = types.get(type)
    } else {
      type = getType(number)
    }
    if (!type) return false
    return (!type.luhn || luhn(number)) && type.test(number)
  }

  function getType (number, eager) {
    return types.find(function (type) {
      return type.test(number, eager)
    })
  }
}


/***/ }),

/***/ "./node_modules/creditcards/cvc.js":
/*!*****************************************!*\
  !*** ./node_modules/creditcards/cvc.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Types = __webpack_require__(/*! ./types */ "./node_modules/creditcards/types.js")
var cvcRegex = /^\d{3,4}$/

module.exports = Cvc

function Cvc (data) {
  var types = Types(data)

  return {
    isValid: cvcIsValid
  }

  function cvcIsValid (cvc, type) {
    if (typeof cvc !== 'string') return false
    if (!cvcRegex.test(cvc)) return false

    if (!type) {
      return types.some(function (type) {
        return type.cvcLength === cvc.length
      })
    }

    return types.get(type).cvcLength === cvc.length
  }
}


/***/ }),

/***/ "./node_modules/creditcards/expiration.js":
/*!************************************************!*\
  !*** ./node_modules/creditcards/expiration.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isValidMonth = __webpack_require__(/*! is-valid-month */ "./node_modules/is-valid-month/index.js")
var parseIntStrict = __webpack_require__(/*! parse-int */ "./node_modules/parse-int/index.js")
var parseYear = __webpack_require__(/*! parse-year */ "./node_modules/parse-year/index.js")

module.exports = {
  isPast: isPast,
  month: {
    parse: parseMonth,
    isValid: isValidMonth
  },
  year: {
    parse: parseYear,
    format: formatExpYear,
    isValid: isExpYearValid,
    isPast: isExpYearPast
  }
}

function isPast (month, year) {
  return Date.now() >= new Date(year, month)
}

function parseMonth (month) {
  return parseIntStrict(month)
}

function formatExpYear (year, strip) {
  year = year.toString()
  return strip ? year.substr(2, 4) : year
}

function isExpYearValid (year) {
  if (typeof year !== 'number') return false
  year = parseIntStrict(year)
  return year > 0
}

function isExpYearPast (year) {
  return new Date().getFullYear() > year
}


/***/ }),

/***/ "./node_modules/creditcards/index.js":
/*!*******************************************!*\
  !*** ./node_modules/creditcards/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var types = __webpack_require__(/*! creditcards-types */ "./node_modules/creditcards-types/index.js")
var Card = __webpack_require__(/*! ./card */ "./node_modules/creditcards/card.js")
var Cvc = __webpack_require__(/*! ./cvc */ "./node_modules/creditcards/cvc.js")
var expiration = __webpack_require__(/*! ./expiration */ "./node_modules/creditcards/expiration.js")

module.exports = withTypes(types)
module.exports.withTypes = withTypes

function withTypes (types) {
  return {
    card: Card(types),
    cvc: Cvc(types),
    expiration: expiration
  }
}


/***/ }),

/***/ "./node_modules/creditcards/types.js":
/*!*******************************************!*\
  !*** ./node_modules/creditcards/types.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var find = __webpack_require__(/*! array-find */ "./node_modules/array-find/find.js")
var defaults = __webpack_require__(/*! creditcards-types */ "./node_modules/creditcards-types/index.js")

module.exports = CardTypes
module.exports.defaults = defaults

function CardTypes (types) {
  var map = types.reduce(function (acc, type) {
    acc[type.name] = type
    return acc
  }, {})

  return {
    find: find.bind(null, types),
    some: types.some.bind(types),
    get: get
  }

  function get (name) {
    var type = map[name]

    if (!type) {
      throw new Error('No type found for name: ' + name)
    }

    return type
  }
}


/***/ }),

/***/ "./node_modules/expand-year/index.js":
/*!*******************************************!*\
  !*** ./node_modules/expand-year/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var zeroFill = __webpack_require__(/*! zero-fill */ "./node_modules/zero-fill/index.js")
var parseIntStrict = __webpack_require__(/*! parse-int */ "./node_modules/parse-int/index.js")

var pad = zeroFill(2)

module.exports = function expandYear (year, now) {
  now = now || new Date()
  var base = now.getFullYear().toString().substr(0, 2)
  year = parseIntStrict(year)
  return parseIntStrict(base + pad(year))
}


/***/ }),

/***/ "./node_modules/fast-luhn/index.js":
/*!*****************************************!*\
  !*** ./node_modules/fast-luhn/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = (function (array) {
  return function luhn (number) {
    if (typeof number !== 'string') throw new TypeError('Expected string input')
    if (!number) return false
    var length = number.length
    var bit = 1
    var sum = 0
    var value

    while (length) {
      value = parseInt(number.charAt(--length), 10)
      bit ^= 1
      sum += bit ? array[value] : value
    }

    return sum % 10 === 0
  }
}([0, 2, 4, 6, 8, 1, 3, 5, 7, 9]))


/***/ }),

/***/ "./node_modules/is-finite/index.js":
/*!*****************************************!*\
  !*** ./node_modules/is-finite/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = Number.isFinite || function (value) {
	return !(typeof value !== 'number' || value !== value || value === Infinity || value === -Infinity);
};


/***/ }),

/***/ "./node_modules/is-integer/index.js":
/*!******************************************!*\
  !*** ./node_modules/is-integer/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/paulmillr/es6-shim
// http://people.mozilla.org/~jorendorff/es6-draft.html#sec-number.isinteger
var isFinite = __webpack_require__(/*! is-finite */ "./node_modules/is-finite/index.js");
module.exports = Number.isInteger || function(val) {
  return typeof val === "number" &&
    isFinite(val) &&
    Math.floor(val) === val;
};


/***/ }),

/***/ "./node_modules/is-valid-month/index.js":
/*!**********************************************!*\
  !*** ./node_modules/is-valid-month/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isInteger = __webpack_require__(/*! is-integer */ "./node_modules/is-integer/index.js")

module.exports = function isValidMonth (month) {
  if (typeof month !== 'number' || !isInteger(month)) return false
  return month >= 1 && month <= 12
}


/***/ }),

/***/ "./node_modules/lodash/_baseFindIndex.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_baseFindIndex.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

module.exports = baseFindIndex;


/***/ }),

/***/ "./node_modules/lodash/_baseFor.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseFor.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var createBaseFor = __webpack_require__(/*! ./_createBaseFor */ "./node_modules/lodash/_createBaseFor.js");

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

module.exports = baseFor;


/***/ }),

/***/ "./node_modules/lodash/_baseForOwn.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseForOwn.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseFor = __webpack_require__(/*! ./_baseFor */ "./node_modules/lodash/_baseFor.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

module.exports = baseForOwn;


/***/ }),

/***/ "./node_modules/lodash/_baseIteratee.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseIteratee.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),

/***/ "./node_modules/lodash/_createBaseFor.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_createBaseFor.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

module.exports = createBaseFor;


/***/ }),

/***/ "./node_modules/lodash/_createFind.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_createFind.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIteratee = __webpack_require__(/*! ./_baseIteratee */ "./node_modules/lodash/_baseIteratee.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/**
 * Creates a `_.find` or `_.findLast` function.
 *
 * @private
 * @param {Function} findIndexFunc The function to find the collection index.
 * @returns {Function} Returns the new find function.
 */
function createFind(findIndexFunc) {
  return function(collection, predicate, fromIndex) {
    var iterable = Object(collection);
    if (!isArrayLike(collection)) {
      var iteratee = baseIteratee(predicate, 3);
      collection = keys(collection);
      predicate = function(key) { return iteratee(iterable[key], key, iterable); };
    }
    var index = findIndexFunc(collection, predicate, fromIndex);
    return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined;
  };
}

module.exports = createFind;


/***/ }),

/***/ "./node_modules/lodash/each.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/each.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

module.exports = arrayEach;


/***/ }),

/***/ "./node_modules/lodash/find.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/find.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var createFind = __webpack_require__(/*! ./_createFind */ "./node_modules/lodash/_createFind.js"),
    findIndex = __webpack_require__(/*! ./findIndex */ "./node_modules/lodash/findIndex.js");

/**
 * Iterates over elements of `collection`, returning the first element
 * `predicate` returns truthy for. The predicate is invoked with three
 * arguments: (value, index|key, collection).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {*} Returns the matched element, else `undefined`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'age': 36, 'active': true },
 *   { 'user': 'fred',    'age': 40, 'active': false },
 *   { 'user': 'pebbles', 'age': 1,  'active': true }
 * ];
 *
 * _.find(users, function(o) { return o.age < 40; });
 * // => object for 'barney'
 *
 * // The `_.matches` iteratee shorthand.
 * _.find(users, { 'age': 1, 'active': true });
 * // => object for 'pebbles'
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.find(users, ['active', false]);
 * // => object for 'fred'
 *
 * // The `_.property` iteratee shorthand.
 * _.find(users, 'active');
 * // => object for 'barney'
 */
var find = createFind(findIndex);

module.exports = find;


/***/ }),

/***/ "./node_modules/lodash/findIndex.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/findIndex.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseFindIndex = __webpack_require__(/*! ./_baseFindIndex */ "./node_modules/lodash/_baseFindIndex.js"),
    baseIteratee = __webpack_require__(/*! ./_baseIteratee */ "./node_modules/lodash/_baseIteratee.js"),
    toInteger = __webpack_require__(/*! ./toInteger */ "./node_modules/lodash/toInteger.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * This method is like `_.find` except that it returns the index of the first
 * element `predicate` returns truthy for instead of the element itself.
 *
 * @static
 * @memberOf _
 * @since 1.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {number} Returns the index of the found element, else `-1`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'active': false },
 *   { 'user': 'fred',    'active': false },
 *   { 'user': 'pebbles', 'active': true }
 * ];
 *
 * _.findIndex(users, function(o) { return o.user == 'barney'; });
 * // => 0
 *
 * // The `_.matches` iteratee shorthand.
 * _.findIndex(users, { 'user': 'fred', 'active': false });
 * // => 1
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.findIndex(users, ['active', false]);
 * // => 0
 *
 * // The `_.property` iteratee shorthand.
 * _.findIndex(users, 'active');
 * // => 2
 */
function findIndex(array, predicate, fromIndex) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return -1;
  }
  var index = fromIndex == null ? 0 : toInteger(fromIndex);
  if (index < 0) {
    index = nativeMax(length + index, 0);
  }
  return baseFindIndex(array, baseIteratee(predicate, 3), index);
}

module.exports = findIndex;


/***/ }),

/***/ "./node_modules/lodash/reduce.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/reduce.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array == null ? 0 : array.length;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

module.exports = arrayReduce;


/***/ }),

/***/ "./node_modules/lodash/toInteger.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/toInteger.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),

/***/ "./node_modules/lodash/transform.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/transform.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayEach = __webpack_require__(/*! ./_arrayEach */ "./node_modules/lodash/_arrayEach.js"),
    baseCreate = __webpack_require__(/*! ./_baseCreate */ "./node_modules/lodash/_baseCreate.js"),
    baseForOwn = __webpack_require__(/*! ./_baseForOwn */ "./node_modules/lodash/_baseForOwn.js"),
    baseIteratee = __webpack_require__(/*! ./_baseIteratee */ "./node_modules/lodash/_baseIteratee.js"),
    getPrototype = __webpack_require__(/*! ./_getPrototype */ "./node_modules/lodash/_getPrototype.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./node_modules/lodash/isTypedArray.js");

/**
 * An alternative to `_.reduce`; this method transforms `object` to a new
 * `accumulator` object which is the result of running each of its own
 * enumerable string keyed properties thru `iteratee`, with each invocation
 * potentially mutating the `accumulator` object. If `accumulator` is not
 * provided, a new object with the same `[[Prototype]]` will be used. The
 * iteratee is invoked with four arguments: (accumulator, value, key, object).
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @static
 * @memberOf _
 * @since 1.3.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @param {*} [accumulator] The custom accumulator value.
 * @returns {*} Returns the accumulated value.
 * @example
 *
 * _.transform([2, 3, 4], function(result, n) {
 *   result.push(n *= n);
 *   return n % 2 == 0;
 * }, []);
 * // => [4, 9]
 *
 * _.transform({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
 *   (result[value] || (result[value] = [])).push(key);
 * }, {});
 * // => { '1': ['a', 'c'], '2': ['b'] }
 */
function transform(object, iteratee, accumulator) {
  var isArr = isArray(object),
      isArrLike = isArr || isBuffer(object) || isTypedArray(object);

  iteratee = baseIteratee(iteratee, 4);
  if (accumulator == null) {
    var Ctor = object && object.constructor;
    if (isArrLike) {
      accumulator = isArr ? new Ctor : [];
    }
    else if (isObject(object)) {
      accumulator = isFunction(Ctor) ? baseCreate(getPrototype(object)) : {};
    }
    else {
      accumulator = {};
    }
  }
  (isArrLike ? arrayEach : baseForOwn)(object, function(value, index, object) {
    return iteratee(accumulator, value, index, object);
  });
  return accumulator;
}

module.exports = transform;


/***/ }),

/***/ "./node_modules/parse-int/index.js":
/*!*****************************************!*\
  !*** ./node_modules/parse-int/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isInteger = __webpack_require__(/*! is-integer */ "./node_modules/is-integer/index.js")
var isIntegerRegex = /^-?\d+$/

module.exports = function parseIntStrict (integer) {
  if (typeof integer === 'number') {
    return isInteger(integer) ? integer : undefined
  }
  if (typeof integer === 'string') {
    return isIntegerRegex.test(integer) ? parseInt(integer, 10) : undefined
  }
}


/***/ }),

/***/ "./node_modules/parse-year/index.js":
/*!******************************************!*\
  !*** ./node_modules/parse-year/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var parseIntStrict = __webpack_require__(/*! parse-int */ "./node_modules/parse-int/index.js")
var expandYear = __webpack_require__(/*! expand-year */ "./node_modules/expand-year/index.js")

module.exports = function parseYear (year, expand, now) {
  year = parseIntStrict(year)
  if (year == null) return
  if (!expand) return year
  return expandYear(year, now)
}


/***/ }),

/***/ "./node_modules/xtend/mutable.js":
/*!***************************************!*\
  !*** ./node_modules/xtend/mutable.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = extend

var hasOwnProperty = Object.prototype.hasOwnProperty;

function extend(target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i]

        for (var key in source) {
            if (hasOwnProperty.call(source, key)) {
                target[key] = source[key]
            }
        }
    }

    return target
}


/***/ }),

/***/ "./node_modules/zero-fill/index.js":
/*!*****************************************!*\
  !*** ./node_modules/zero-fill/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*! zero-fill. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
/**
 * Given a number, return a zero-filled string.
 * From http://stackoverflow.com/questions/1267283/
 * @param  {number} width
 * @param  {number} number
 * @return {string}
 */
module.exports = function zeroFill (width, number, pad) {
  if (number === undefined) {
    return function (number, pad) {
      return zeroFill(width, number, pad)
    }
  }
  if (pad === undefined) pad = '0'
  width -= number.toString().length
  if (width > 0) return new Array(width + (/\./.test(number) ? 2 : 1)).join(pad) + number
  return number + ''
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9XZWJwYWNrQ2hpYXJhLy4vbm9kZV9tb2R1bGVzL2FycmF5LWZpbmQvZmluZC5qcyIsIndlYnBhY2s6Ly9XZWJwYWNrQ2hpYXJhLy4vbm9kZV9tb2R1bGVzL2NyZWRpdGNhcmRzLXR5cGVzL2luZGV4LmpzIiwid2VicGFjazovL1dlYnBhY2tDaGlhcmEvLi9ub2RlX21vZHVsZXMvY3JlZGl0Y2FyZHMtdHlwZXMvdHlwZS5qcyIsIndlYnBhY2s6Ly9XZWJwYWNrQ2hpYXJhLy4vbm9kZV9tb2R1bGVzL2NyZWRpdGNhcmRzLXR5cGVzL3R5cGVzL2FtZXJpY2FuLWV4cHJlc3MuanMiLCJ3ZWJwYWNrOi8vV2VicGFja0NoaWFyYS8uL25vZGVfbW9kdWxlcy9jcmVkaXRjYXJkcy10eXBlcy90eXBlcy9kYW5rb3J0LmpzIiwid2VicGFjazovL1dlYnBhY2tDaGlhcmEvLi9ub2RlX21vZHVsZXMvY3JlZGl0Y2FyZHMtdHlwZXMvdHlwZXMvZGluZXJzLWNsdWIuanMiLCJ3ZWJwYWNrOi8vV2VicGFja0NoaWFyYS8uL25vZGVfbW9kdWxlcy9jcmVkaXRjYXJkcy10eXBlcy90eXBlcy9kaXNjb3Zlci5qcyIsIndlYnBhY2s6Ly9XZWJwYWNrQ2hpYXJhLy4vbm9kZV9tb2R1bGVzL2NyZWRpdGNhcmRzLXR5cGVzL3R5cGVzL2Vsby5qcyIsIndlYnBhY2s6Ly9XZWJwYWNrQ2hpYXJhLy4vbm9kZV9tb2R1bGVzL2NyZWRpdGNhcmRzLXR5cGVzL3R5cGVzL2ZvcmJydWdzZm9yZW5pbmdlbi5qcyIsIndlYnBhY2s6Ly9XZWJwYWNrQ2hpYXJhLy4vbm9kZV9tb2R1bGVzL2NyZWRpdGNhcmRzLXR5cGVzL3R5cGVzL2luZGV4LmpzIiwid2VicGFjazovL1dlYnBhY2tDaGlhcmEvLi9ub2RlX21vZHVsZXMvY3JlZGl0Y2FyZHMtdHlwZXMvdHlwZXMvamNiLmpzIiwid2VicGFjazovL1dlYnBhY2tDaGlhcmEvLi9ub2RlX21vZHVsZXMvY3JlZGl0Y2FyZHMtdHlwZXMvdHlwZXMvbWFlc3Ryby5qcyIsIndlYnBhY2s6Ly9XZWJwYWNrQ2hpYXJhLy4vbm9kZV9tb2R1bGVzL2NyZWRpdGNhcmRzLXR5cGVzL3R5cGVzL21hc3RlcmNhcmQuanMiLCJ3ZWJwYWNrOi8vV2VicGFja0NoaWFyYS8uL25vZGVfbW9kdWxlcy9jcmVkaXRjYXJkcy10eXBlcy90eXBlcy90cm95LmpzIiwid2VicGFjazovL1dlYnBhY2tDaGlhcmEvLi9ub2RlX21vZHVsZXMvY3JlZGl0Y2FyZHMtdHlwZXMvdHlwZXMvdWF0cC5qcyIsIndlYnBhY2s6Ly9XZWJwYWNrQ2hpYXJhLy4vbm9kZV9tb2R1bGVzL2NyZWRpdGNhcmRzLXR5cGVzL3R5cGVzL3VuaW9ucGF5LmpzIiwid2VicGFjazovL1dlYnBhY2tDaGlhcmEvLi9ub2RlX21vZHVsZXMvY3JlZGl0Y2FyZHMtdHlwZXMvdHlwZXMvdmlzYS5qcyIsIndlYnBhY2s6Ly9XZWJwYWNrQ2hpYXJhLy4vbm9kZV9tb2R1bGVzL2NyZWRpdGNhcmRzL2NhcmQuanMiLCJ3ZWJwYWNrOi8vV2VicGFja0NoaWFyYS8uL25vZGVfbW9kdWxlcy9jcmVkaXRjYXJkcy9jdmMuanMiLCJ3ZWJwYWNrOi8vV2VicGFja0NoaWFyYS8uL25vZGVfbW9kdWxlcy9jcmVkaXRjYXJkcy9leHBpcmF0aW9uLmpzIiwid2VicGFjazovL1dlYnBhY2tDaGlhcmEvLi9ub2RlX21vZHVsZXMvY3JlZGl0Y2FyZHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vV2VicGFja0NoaWFyYS8uL25vZGVfbW9kdWxlcy9jcmVkaXRjYXJkcy90eXBlcy5qcyIsIndlYnBhY2s6Ly9XZWJwYWNrQ2hpYXJhLy4vbm9kZV9tb2R1bGVzL2V4cGFuZC15ZWFyL2luZGV4LmpzIiwid2VicGFjazovL1dlYnBhY2tDaGlhcmEvLi9ub2RlX21vZHVsZXMvZmFzdC1sdWhuL2luZGV4LmpzIiwid2VicGFjazovL1dlYnBhY2tDaGlhcmEvLi9ub2RlX21vZHVsZXMvaXMtZmluaXRlL2luZGV4LmpzIiwid2VicGFjazovL1dlYnBhY2tDaGlhcmEvLi9ub2RlX21vZHVsZXMvaXMtaW50ZWdlci9pbmRleC5qcyIsIndlYnBhY2s6Ly9XZWJwYWNrQ2hpYXJhLy4vbm9kZV9tb2R1bGVzL2lzLXZhbGlkLW1vbnRoL2luZGV4LmpzIiwid2VicGFjazovL1dlYnBhY2tDaGlhcmEvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlRmluZEluZGV4LmpzIiwid2VicGFjazovL1dlYnBhY2tDaGlhcmEvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlRm9yLmpzIiwid2VicGFjazovL1dlYnBhY2tDaGlhcmEvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlRm9yT3duLmpzIiwid2VicGFjazovL1dlYnBhY2tDaGlhcmEvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlSXRlcmF0ZWUuanMiLCJ3ZWJwYWNrOi8vV2VicGFja0NoaWFyYS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2NyZWF0ZUJhc2VGb3IuanMiLCJ3ZWJwYWNrOi8vV2VicGFja0NoaWFyYS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2NyZWF0ZUZpbmQuanMiLCJ3ZWJwYWNrOi8vV2VicGFja0NoaWFyYS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvZWFjaC5qcyIsIndlYnBhY2s6Ly9XZWJwYWNrQ2hpYXJhLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9maW5kLmpzIiwid2VicGFjazovL1dlYnBhY2tDaGlhcmEvLi9ub2RlX21vZHVsZXMvbG9kYXNoL2ZpbmRJbmRleC5qcyIsIndlYnBhY2s6Ly9XZWJwYWNrQ2hpYXJhLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9yZWR1Y2UuanMiLCJ3ZWJwYWNrOi8vV2VicGFja0NoaWFyYS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvdG9JbnRlZ2VyLmpzIiwid2VicGFjazovL1dlYnBhY2tDaGlhcmEvLi9ub2RlX21vZHVsZXMvbG9kYXNoL3RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9XZWJwYWNrQ2hpYXJhLy4vbm9kZV9tb2R1bGVzL3BhcnNlLWludC9pbmRleC5qcyIsIndlYnBhY2s6Ly9XZWJwYWNrQ2hpYXJhLy4vbm9kZV9tb2R1bGVzL3BhcnNlLXllYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vV2VicGFja0NoaWFyYS8uL25vZGVfbW9kdWxlcy94dGVuZC9tdXRhYmxlLmpzIiwid2VicGFjazovL1dlYnBhY2tDaGlhcmEvLi9ub2RlX21vZHVsZXMvemVyby1maWxsL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGFBQWEsWUFBWTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7O0FDdEJZOztBQUVaLGlCQUFpQixtQkFBTyxDQUFDLGdFQUFTOzs7Ozs7Ozs7Ozs7O0FDRnRCOztBQUVaLGFBQWEsbUJBQU8sQ0FBQyxzREFBZTs7QUFFcEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLElBQUksS0FBSyxJQUFJLE1BQU0sSUFBSSxNQUFNLElBQUk7O0FBRXhFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDeEJZOztBQUVaLFdBQVcsbUJBQU8sQ0FBQyx5REFBUzs7QUFFNUI7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLEdBQUc7QUFDeEI7QUFDQSxxQkFBcUIsSUFBSSxLQUFLLElBQUksTUFBTSxJQUFJO0FBQzVDO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ1hXOztBQUVaLFdBQVcsbUJBQU8sQ0FBQyx5REFBUzs7QUFFNUI7QUFDQTtBQUNBLG9CQUFvQixHQUFHO0FBQ3ZCO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ1JXOztBQUVaLFdBQVcsbUJBQU8sQ0FBQyx5REFBUzs7QUFFNUI7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLEdBQUc7QUFDbkM7QUFDQSxxQkFBcUIsSUFBSSxNQUFNLElBQUksTUFB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QUMsb0RBQVc7QUFDeEMsaUJBQWlCLG1CQUFPLENBQUMsd0RBQWE7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDVkE7O0FBRUE7O0FBRUE7QUFDQSxtQkFBbUIsc0JBQXNCO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLE9BQU87QUFDbkIsWUFBWSxPQUFPO0FBQ25CLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLjcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIGZpbmQoYXJyYXksIHByZWRpY2F0ZSwgY29udGV4dCkge1xuICBpZiAodHlwZW9mIEFycmF5LnByb3RvdHlwZS5maW5kID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIGFycmF5LmZpbmQocHJlZGljYXRlLCBjb250ZXh0KTtcbiAgfVxuXG4gIGNvbnRleHQgPSBjb250ZXh0IHx8IHRoaXM7XG4gIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG4gIHZhciBpO1xuXG4gIGlmICh0eXBlb2YgcHJlZGljYXRlICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihwcmVkaWNhdGUgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uJyk7XG4gIH1cblxuICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBpZiAocHJlZGljYXRlLmNhbGwoY29udGV4dCwgYXJyYXlbaV0sIGksIGFycmF5KSkge1xuICAgICAgcmV0dXJuIGFycmF5W2ldO1xuICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZpbmQ7XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL3R5cGVzJylcbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgYXNzaWduID0gcmVxdWlyZSgneHRlbmQvbXV0YWJsZScpXG5cbm1vZHVsZS5leHBvcnRzID0gQ2FyZFR5cGVcblxuZnVuY3Rpb24gQ2FyZFR5cGUgKGRhdGEpIHtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIENhcmRUeXBlKSkgcmV0dXJuIG5ldyBDYXJkVHlwZShkYXRhKVxuICBhc3NpZ24odGhpcywgZGF0YSlcbn1cblxuQ2FyZFR5cGUucHJvdG90eXBlLmRpZ2l0cyA9IDE2XG5DYXJkVHlwZS5wcm90b3R5cGUuY3ZjTGVuZ3RoID0gM1xuQ2FyZFR5cGUucHJvdG90eXBlLmx1aG4gPSB0cnVlXG5DYXJkVHlwZS5wcm90b3R5cGUuZ3JvdXBQYXR0ZXJuID0gLyhcXGR7MSw0fSkoXFxkezEsNH0pPyhcXGR7MSw0fSk/KFxcZHsxLDR9KT8vXG5cbkNhcmRUeXBlLnByb3RvdHlwZS5ncm91cCA9IGZ1bmN0aW9uIChudW1iZXIpIHtcbiAgcmV0dXJuIChudW1iZXIubWF0Y2godGhpcy5ncm91cFBhdHRlcm4pIHx8IFtdKVxuICAgIC5zbGljZSgxKVxuICAgIC5maWx0ZXIoQm9vbGVhbilcbn1cblxuQ2FyZFR5cGUucHJvdG90eXBlLnRlc3QgPSBmdW5jdGlvbiAobnVtYmVyLCBlYWdlcikge1xuICByZXR1cm4gdGhpc1tlYWdlciA/ICdlYWdlclBhdHRlcm4nIDogJ3BhdHRlcm4nXS50ZXN0KG51bWJlcilcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgVHlwZSA9IHJlcXVpcmUoJy4uL3R5cGUnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IFR5cGUoe1xuICBuYW1lOiAnQW1lcmljYW4gRXhwcmVzcycsXG4gIGRpZ2l0czogMTUsXG4gIHBhdHRlcm46IC9eM1s0N11cXGR7MTN9JC8sXG4gIGVhZ2VyUGF0dGVybjogL14zWzQ3XS8sXG4gIGdyb3VwUGF0dGVybjogLyhcXGR7MSw0fSkoXFxkezEsNn0pPyhcXGR7MSw1fSk/LyxcbiAgY3ZjTGVuZ3RoOiA0XG59KVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBUeXBlID0gcmVxdWlyZSgnLi4vdHlwZScpXG5cbm1vZHVsZS5leHBvcnRzID0gVHlwZSh7XG4gIG5hbWU6ICdEYW5rb3J0JyxcbiAgcGF0dGVybjogL141MDE5XFxkezEyfSQvLFxuICBlYWdlclBhdHRlcm46IC9eNTAxOS9cbn0pXG4iLCIndXNlIHN0cmljdCdcblxudmFyIFR5cGUgPSByZXF1aXJlKCcuLi90eXBlJylcblxubW9kdWxlLmV4cG9ydHMgPSBUeXBlKHtcbiAgbmFtZTogJ0RpbmVycyBDbHViJyxcbiAgZGlnaXRzOiAxNCxcbiAgcGF0dGVybjogL14zKDBbMC01XXxbNjhdXFxkKVxcZHsxMX0kLyxcbiAgZWFnZXJQYXR0ZXJuOiAvXjMoMHxbNjhdKS8sXG4gIGdyb3VwUGF0dGVybjogLyhcXGR7MSw0fSk/KFxcZHsxLDZ9KT8oXFxkezEsNH0pPy9cbn0pXG4iLCIndXNlIHN0cmljdCdcblxudmFyIFR5cGUgPSByZXF1aXJlKCcuLi90eXBlJylcblxubW9kdWxlLmV4cG9ydHMgPSBUeXBlKHtcbiAgbmFtZTogJ0Rpc2NvdmVyJyxcbiAgcGF0dGVybjogL142KDAxMSgwWzAtOV18WzItNF1cXGR8NzR8N1s3LTldfDhbNi05XXw5WzAtOV0pfDRbNC05XVxcZHszfXw1XFxkezR9KVxcZHsxMH0kLyxcbiAgZWFnZXJQYXR0ZXJuOiAvXjYoMDExKDBbMC05XXxbMi00XXw3NHw3WzctOV18OFs2LTldfDlbMC05XSl8NFs0LTldfDUpL1xufSlcbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgVHlwZSA9IHJlcXVpcmUoJy4uL3R5cGUnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IFR5cGUoe1xuICBuYW1lOiAnRWxvJyxcbiAgcGF0dGVybjogL14oNFswMzVdfDVbMF18NlsyMzVdKSg2WzcyNjNdfDlbOTBdfDFbMjQxNl18N1s3MzZdfDhbOV18MFswNDU3OV18NVswXSkoWzAtOV0pKFswLTldKVxcZHsxMH0kLyxcbiAgZWFnZXJQYXR0ZXJuOiAvXig0WzAzNV18NVswXXw2WzIzNV0pKDZbNzI2M118OVs5MF18MVsyNDE2XXw3WzczNl18OFs5XXwwWzA0NTc5XXw1WzBdKShbMC05XSkoWzAtOV0pLyxcbiAgZ3JvdXBQYXR0ZXJuOiAvKFxcZHsxLDR9KShcXGR7MSw0fSk/KFxcZHsxLDR9KT8oXFxkezEsNH0pPyhcXGR7MSwzfSk/L1xufSlcbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgVHlwZSA9IHJlcXVpcmUoJy4uL3R5cGUnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IFR5cGUoe1xuICBuYW1lOiAnRm9yYnJ1Z3Nmb3JlbmluZ2VuJyxcbiAgcGF0dGVybjogL142MDA3MjJcXGR7MTB9JC8sXG4gIGVhZ2VyUGF0dGVybjogL142MDAvXG59KVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gW1xuICByZXF1aXJlKCcuL3Zpc2EnKSxcbiAgcmVxdWlyZSgnLi9tYWVzdHJvJyksXG4gIHJlcXVpcmUoJy4vZm9yYnJ1Z3Nmb3JlbmluZ2VuJyksXG4gIHJlcXVpcmUoJy4vZGFua29ydCcpLFxuICByZXF1aXJlKCcuL21hc3RlcmNhcmQnKSxcbiAgcmVxdWlyZSgnLi9hbWVyaWNhbi1leHByZXNzJyksXG4gIHJlcXVpcmUoJy4vZGluZXJzLWNsdWInKSxcbiAgcmVxdWlyZSgnLi9kaXNjb3ZlcicpLFxuICByZXF1aXJlKCcuL2pjYicpLFxuICByZXF1aXJlKCcuL3VuaW9ucGF5JyksXG4gIHJlcXVpcmUoJy4vdHJveScpLFxuICByZXF1aXJlKCcuL2VsbycpLFxuICByZXF1aXJlKCcuL3VhdHAnKVxuXVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBUeXBlID0gcmVxdWlyZSgnLi4vdHlwZScpXG5cbm1vZHVsZS5leHBvcnRzID0gVHlwZSh7XG4gIG5hbWU6ICdKQ0InLFxuICBwYXR0ZXJuOiAvXjM1XFxkezE0fSQvLFxuICBlYWdlclBhdHRlcm46IC9eMzUvXG59KVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBUeXBlID0gcmVxdWlyZSgnLi4vdHlwZScpXG5cbm1vZHVsZS5leHBvcnRzID0gVHlwZSh7XG4gIG5hbWU6ICdNYWVzdHJvJyxcbiAgZGlnaXRzOiBbMTIsIDE5XSxcbiAgcGF0dGVybjogL14oPzo1WzA2Nzg5XVxcZFxcZHwoPyE2MDExWzAyMzRdKSg/ITYwMTE3WzQ3ODldKSg/ITYwMTE4WzY3ODldKSg/ITYwMTE5KSg/ITY0WzQ1Njc4OV0pKD8hNjUpNlxcZHszfSlcXGR7OCwxNX0kLyxcbiAgZWFnZXJQYXR0ZXJuOiAvXig1KDAxOHwwWzIzXXxbNjhdKXw2WzM3XXw2MDExMXw2MDExNXw2MDExNyhbNTZdfDdbNTZdKXw2MDExOFswLTVdfDY0WzAtM118NjYpLyxcbiAgZ3JvdXBQYXR0ZXJuOiAvKFxcZHsxLDR9KShcXGR7MSw0fSk/KFxcZHsxLDR9KT8oXFxkezEsNH0pPyhcXGR7MSwzfSk/L1xufSlcbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgVHlwZSA9IHJlcXVpcmUoJy4uL3R5cGUnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IFR5cGUoe1xuICBuYW1lOiAnTWFzdGVyY2FyZCcsXG4gIHBhdHRlcm46IC9eKDVbMS01XVswLTldezJ9fDIyMlsxLTldfDIyWzMtOV1bMC05XXwyWzMtNl1bMC05XXsyfXwyN1swMV1bMC05XXwyNzIwKVxcZHsxMn0kLyxcbiAgZWFnZXJQYXR0ZXJuOiAvXigyWzMtN118MjJbMi05XXw1WzEtNV0pL1xufSlcbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgVHlwZSA9IHJlcXVpcmUoJy4uL3R5cGUnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IFR5cGUoe1xuICBuYW1lOiAnVHJveScsXG4gIHBhdHRlcm46IC9eOTc5MlxcZHsxMn0kLyxcbiAgZWFnZXJQYXR0ZXJuOiAvXjk3OTIvXG59KVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBUeXBlID0gcmVxdWlyZSgnLi4vdHlwZScpXG5cbm1vZHVsZS5leHBvcnRzID0gVHlwZSh7XG4gIG5hbWU6ICdVQVRQJyxcbiAgZGlnaXRzOiAxNSxcbiAgcGF0dGVybjogL14xXFxkezE0fSQvLFxuICBlYWdlclBhdHRlcm46IC9eMS8sXG4gIGdyb3VwUGF0dGVybjogLyhcXGR7MSw0fSkoXFxkezEsNX0pPyhcXGR7MSw2fSk/L1xufSlcbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgVHlwZSA9IHJlcXVpcmUoJy4uL3R5cGUnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IFR5cGUoe1xuICBuYW1lOiAnVW5pb25QYXknLFxuICBwYXR0ZXJuOiAvXjYyWzAtNV1cXGR7MTMsMTZ9JC8sXG4gIGVhZ2VyUGF0dGVybjogL142Mi8sXG4gIGdyb3VwUGF0dGVybjogLyhcXGR7MSw0fSkoXFxkezEsNH0pPyhcXGR7MSw0fSk/KFxcZHsxLDR9KT8oXFxkezEsM30pPy8sXG4gIGx1aG46IGZhbHNlXG59KVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBUeXBlID0gcmVxdWlyZSgnLi4vdHlwZScpXG5cbm1vZHVsZS5leHBvcnRzID0gVHlwZSh7XG4gIG5hbWU6ICdWaXNhJyxcbiAgZGlnaXRzOiBbMTMsIDE5XSxcbiAgcGF0dGVybjogL140XFxkezEyfShcXGR7M318XFxkezZ9KT8kLyxcbiAgZWFnZXJQYXR0ZXJuOiAvXjQvLFxuICBncm91cFBhdHRlcm46IC8oXFxkezEsNH0pKFxcZHsxLDR9KT8oXFxkezEsNH0pPyhcXGR7MSw0fSk/KFxcZHsxLDN9KT8vXG59KVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBsdWhuID0gcmVxdWlyZSgnZmFzdC1sdWhuJylcbnZhciBUeXBlcyA9IHJlcXVpcmUoJy4vdHlwZXMnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IENhcmRcblxuZnVuY3Rpb24gQ2FyZCAoZGF0YSkge1xuICB2YXIgdHlwZXMgPSBUeXBlcyhkYXRhKVxuXG4gIHJldHVybiB7XG4gICAgdHlwZXM6IGRhdGEsXG4gICAgcGFyc2U6IHBhcnNlQ2FyZCxcbiAgICBmb3JtYXQ6IGZvcm1hdENhcmQsXG4gICAgdHlwZTogY2FyZFR5cGUsXG4gICAgbHVobjogbHVobixcbiAgICBpc1ZhbGlkOiBpc0NhcmRWYWxpZFxuICB9XG5cbiAgZnVuY3Rpb24gcGFyc2VDYXJkIChudW1iZXIpIHtcbiAgICBpZiAodHlwZW9mIG51bWJlciAhPT0gJ3N0cmluZycpIHJldHVybiAnJ1xuICAgIHJldHVybiBudW1iZXIucmVwbGFjZSgvW15cXGRdL2csICcnKVxuICB9XG5cbiAgZnVuY3Rpb24gZm9ybWF0Q2FyZCAobnVtYmVyLCBzZXBhcmF0b3IpIHtcbiAgICB2YXIgdHlwZSA9IGdldFR5cGUobnVtYmVyLCB0cnVlKVxuICAgIGlmICghdHlwZSkgcmV0dXJuIG51bWJlclxuICAgIHJldHVybiB0eXBlLmdyb3VwKG51bWJlcikuam9pbihzZXBhcmF0b3IgfHwgJyAnKVxuICB9XG5cbiAgZnVuY3Rpb24gY2FyZFR5cGUgKG51bWJlciwgZWFnZXIpIHtcbiAgICB2YXIgdHlwZSA9IGdldFR5cGUobnVtYmVyLCBlYWdlcilcbiAgICByZXR1cm4gdHlwZSA/IHR5cGUubmFtZSA6IHVuZGVmaW5lZFxuICB9XG5cbiAgZnVuY3Rpb24gaXNDYXJkVmFsaWQgKG51bWJlciwgdHlwZSkge1xuICAgIGlmICh0eXBlKSB7XG4gICAgICB0eXBlID0gdHlwZXMuZ2V0KHR5cGUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHR5cGUgPSBnZXRUeXBlKG51bWJlcilcbiAgICB9XG4gICAgaWYgKCF0eXBlKSByZXR1cm4gZmFsc2VcbiAgICByZXR1cm4gKCF0eXBlLmx1aG4gfHwgbHVobihudW1iZXIpKSAmJiB0eXBlLnRlc3QobnVtYmVyKVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0VHlwZSAobnVtYmVyLCBlYWdlcikge1xuICAgIHJldHVybiB0eXBlcy5maW5kKGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICByZXR1cm4gdHlwZS50ZXN0KG51bWJlciwgZWFnZXIpXG4gICAgfSlcbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBUeXBlcyA9IHJlcXVpcmUoJy4vdHlwZXMnKVxudmFyIGN2Y1JlZ2V4ID0gL15cXGR7Myw0fSQvXG5cbm1vZHVsZS5leHBvcnRzID0gQ3ZjXG5cbmZ1bmN0aW9uIEN2YyAoZGF0YSkge1xuICB2YXIgdHlwZXMgPSBUeXBlcyhkYXRhKVxuXG4gIHJldHVybiB7XG4gICAgaXNWYWxpZDogY3ZjSXNWYWxpZFxuICB9XG5cbiAgZnVuY3Rpb24gY3ZjSXNWYWxpZCAoY3ZjLCB0eXBlKSB7XG4gICAgaWYgKHR5cGVvZiBjdmMgIT09ICdzdHJpbmcnKSByZXR1cm4gZmFsc2VcbiAgICBpZiAoIWN2Y1JlZ2V4LnRlc3QoY3ZjKSkgcmV0dXJuIGZhbHNlXG5cbiAgICBpZiAoIXR5cGUpIHtcbiAgICAgIHJldHVybiB0eXBlcy5zb21lKGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIHJldHVybiB0eXBlLmN2Y0xlbmd0aCA9PT0gY3ZjLmxlbmd0aFxuICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZXMuZ2V0KHR5cGUpLmN2Y0xlbmd0aCA9PT0gY3ZjLmxlbmd0aFxuICB9XG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIGlzVmFsaWRNb250aCA9IHJlcXVpcmUoJ2lzLXZhbGlkLW1vbnRoJylcbnZhciBwYXJzZUludFN0cmljdCA9IHJlcXVpcmUoJ3BhcnNlLWludCcpXG52YXIgcGFyc2VZZWFyID0gcmVxdWlyZSgncGFyc2UteWVhcicpXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBpc1Bhc3Q6IGlzUGFzdCxcbiAgbW9udGg6IHtcbiAgICBwYXJzZTogcGFyc2VNb250aCxcbiAgICBpc1ZhbGlkOiBpc1ZhbGlkTW9udGhcbiAgfSxcbiAgeWVhcjoge1xuICAgIHBhcnNlOiBwYXJzZVllYXIsXG4gICAgZm9ybWF0OiBmb3JtYXRFeHBZZWFyLFxuICAgIGlzVmFsaWQ6IGlzRXhwWWVhclZhbGlkLFxuICAgIGlzUGFzdDogaXNFeHBZZWFyUGFzdFxuICB9XG59XG5cbmZ1bmN0aW9uIGlzUGFzdCAobW9udGgsIHllYXIpIHtcbiAgcmV0dXJuIERhdGUubm93KCkgPj0gbmV3IERhdGUoeWVhciwgbW9udGgpXG59XG5cbmZ1bmN0aW9uIHBhcnNlTW9udGggKG1vbnRoKSB7XG4gIHJldHVybiBwYXJzZUludFN0cmljdChtb250aClcbn1cblxuZnVuY3Rpb24gZm9ybWF0RXhwWWVhciAoeWVhciwgc3RyaXApIHtcbiAgeWVhciA9IHllYXIudG9TdHJpbmcoKVxuICByZXR1cm4gc3RyaXAgPyB5ZWFyLnN1YnN0cigyLCA0KSA6IHllYXJcbn1cblxuZnVuY3Rpb24gaXNFeHBZZWFyVmFsaWQgKHllYXIpIHtcbiAgaWYgKHR5cGVvZiB5ZWFyICE9PSAnbnVtYmVyJykgcmV0dXJuIGZhbHNlXG4gIHllYXIgPSBwYXJzZUludFN0cmljdCh5ZWFyKVxuICByZXR1cm4geWVhciA+IDBcbn1cblxuZnVuY3Rpb24gaXNFeHBZZWFyUGFzdCAoeWVhcikge1xuICByZXR1cm4gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpID4geWVhclxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciB0eXBlcyA9IHJlcXVpcmUoJ2NyZWRpdGNhcmRzLXR5cGVzJylcbnZhciBDYXJkID0gcmVxdWlyZSgnLi9jYXJkJylcbnZhciBDdmMgPSByZXF1aXJlKCcuL2N2YycpXG52YXIgZXhwaXJhdGlvbiA9IHJlcXVpcmUoJy4vZXhwaXJhdGlvbicpXG5cbm1vZHVsZS5leHBvcnRzID0gd2l0aFR5cGVzKHR5cGVzKVxubW9kdWxlLmV4cG9ydHMud2l0aFR5cGVzID0gd2l0aFR5cGVzXG5cbmZ1bmN0aW9uIHdpdGhUeXBlcyAodHlwZXMpIHtcbiAgcmV0dXJuIHtcbiAgICBjYXJkOiBDYXJkKHR5cGVzKSxcbiAgICBjdmM6IEN2Yyh0eXBlcyksXG4gICAgZXhwaXJhdGlvbjogZXhwaXJhdGlvblxuICB9XG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIGZpbmQgPSByZXF1aXJlKCdhcnJheS1maW5kJylcbnZhciBkZWZhdWx0cyA9IHJlcXVpcmUoJ2NyZWRpdGNhcmRzLXR5cGVzJylcblxubW9kdWxlLmV4cG9ydHMgPSBDYXJkVHlwZXNcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHRzID0gZGVmYXVsdHNcblxuZnVuY3Rpb24gQ2FyZFR5cGVzICh0eXBlcykge1xuICB2YXIgbWFwID0gdHlwZXMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHR5cGUpIHtcbiAgICBhY2NbdHlwZS5uYW1lXSA9IHR5cGVcbiAgICByZXR1cm4gYWNjXG4gIH0sIHt9KVxuXG4gIHJldHVybiB7XG4gICAgZmluZDogZmluZC5iaW5kKG51bGwsIHR5cGVzKSxcbiAgICBzb21lOiB0eXBlcy5zb21lLmJpbmQodHlwZXMpLFxuICAgIGdldDogZ2V0XG4gIH1cblxuICBmdW5jdGlvbiBnZXQgKG5hbWUpIHtcbiAgICB2YXIgdHlwZSA9IG1hcFtuYW1lXVxuXG4gICAgaWYgKCF0eXBlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIHR5cGUgZm91bmQgZm9yIG5hbWU6ICcgKyBuYW1lKVxuICAgIH1cblxuICAgIHJldHVybiB0eXBlXG4gIH1cbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgemVyb0ZpbGwgPSByZXF1aXJlKCd6ZXJvLWZpbGwnKVxudmFyIHBhcnNlSW50U3RyaWN0ID0gcmVxdWlyZSgncGFyc2UtaW50JylcblxudmFyIHBhZCA9IHplcm9GaWxsKDIpXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZXhwYW5kWWVhciAoeWVhciwgbm93KSB7XG4gIG5vdyA9IG5vdyB8fCBuZXcgRGF0ZSgpXG4gIHZhciBiYXNlID0gbm93LmdldEZ1bGxZZWFyKCkudG9TdHJpbmcoKS5zdWJzdHIoMCwgMilcbiAgeWVhciA9IHBhcnNlSW50U3RyaWN0KHllYXIpXG4gIHJldHVybiBwYXJzZUludFN0cmljdChiYXNlICsgcGFkKHllYXIpKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gKGZ1bmN0aW9uIChhcnJheSkge1xuICByZXR1cm4gZnVuY3Rpb24gbHVobiAobnVtYmVyKSB7XG4gICAgaWYgKHR5cGVvZiBudW1iZXIgIT09ICdzdHJpbmcnKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBzdHJpbmcgaW5wdXQnKVxuICAgIGlmICghbnVtYmVyKSByZXR1cm4gZmFsc2VcbiAgICB2YXIgbGVuZ3RoID0gbnVtYmVyLmxlbmd0aFxuICAgIHZhciBiaXQgPSAxXG4gICAgdmFyIHN1bSA9IDBcbiAgICB2YXIgdmFsdWVcblxuICAgIHdoaWxlIChsZW5ndGgpIHtcbiAgICAgIHZhbHVlID0gcGFyc2VJbnQobnVtYmVyLmNoYXJBdCgtLWxlbmd0aCksIDEwKVxuICAgICAgYml0IF49IDFcbiAgICAgIHN1bSArPSBiaXQgPyBhcnJheVt2YWx1ZV0gOiB2YWx1ZVxuICAgIH1cblxuICAgIHJldHVybiBzdW0gJSAxMCA9PT0gMFxuICB9XG59KFswLCAyLCA0LCA2LCA4LCAxLCAzLCA1LCA3LCA5XSkpXG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gTnVtYmVyLmlzRmluaXRlIHx8IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRyZXR1cm4gISh0eXBlb2YgdmFsdWUgIT09ICdudW1iZXInIHx8IHZhbHVlICE9PSB2YWx1ZSB8fCB2YWx1ZSA9PT0gSW5maW5pdHkgfHwgdmFsdWUgPT09IC1JbmZpbml0eSk7XG59O1xuIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3BhdWxtaWxsci9lczYtc2hpbVxuLy8gaHR0cDovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtbnVtYmVyLmlzaW50ZWdlclxudmFyIGlzRmluaXRlID0gcmVxdWlyZShcImlzLWZpbml0ZVwiKTtcbm1vZHVsZS5leHBvcnRzID0gTnVtYmVyLmlzSW50ZWdlciB8fCBmdW5jdGlvbih2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09IFwibnVtYmVyXCIgJiZcbiAgICBpc0Zpbml0ZSh2YWwpICYmXG4gICAgTWF0aC5mbG9vcih2YWwpID09PSB2YWw7XG59O1xuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBpc0ludGVnZXIgPSByZXF1aXJlKCdpcy1pbnRlZ2VyJylcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc1ZhbGlkTW9udGggKG1vbnRoKSB7XG4gIGlmICh0eXBlb2YgbW9udGggIT09ICdudW1iZXInIHx8ICFpc0ludGVnZXIobW9udGgpKSByZXR1cm4gZmFsc2VcbiAgcmV0dXJuIG1vbnRoID49IDEgJiYgbW9udGggPD0gMTJcbn1cbiIsIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uZmluZEluZGV4YCBhbmQgYF8uZmluZExhc3RJbmRleGAgd2l0aG91dFxuICogc3VwcG9ydCBmb3IgaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcmVkaWNhdGUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEBwYXJhbSB7bnVtYmVyfSBmcm9tSW5kZXggVGhlIGluZGV4IHRvIHNlYXJjaCBmcm9tLlxuICogQHBhcmFtIHtib29sZWFufSBbZnJvbVJpZ2h0XSBTcGVjaWZ5IGl0ZXJhdGluZyBmcm9tIHJpZ2h0IHRvIGxlZnQuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbWF0Y2hlZCB2YWx1ZSwgZWxzZSBgLTFgLlxuICovXG5mdW5jdGlvbiBiYXNlRmluZEluZGV4KGFycmF5LCBwcmVkaWNhdGUsIGZyb21JbmRleCwgZnJvbVJpZ2h0KSB7XG4gIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGgsXG4gICAgICBpbmRleCA9IGZyb21JbmRleCArIChmcm9tUmlnaHQgPyAxIDogLTEpO1xuXG4gIHdoaWxlICgoZnJvbVJpZ2h0ID8gaW5kZXgtLSA6ICsraW5kZXggPCBsZW5ndGgpKSB7XG4gICAgaWYgKHByZWRpY2F0ZShhcnJheVtpbmRleF0sIGluZGV4LCBhcnJheSkpIHtcbiAgICAgIHJldHVybiBpbmRleDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VGaW5kSW5kZXg7XG4iLCJ2YXIgY3JlYXRlQmFzZUZvciA9IHJlcXVpcmUoJy4vX2NyZWF0ZUJhc2VGb3InKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgYmFzZUZvck93bmAgd2hpY2ggaXRlcmF0ZXMgb3ZlciBgb2JqZWN0YFxuICogcHJvcGVydGllcyByZXR1cm5lZCBieSBga2V5c0Z1bmNgIGFuZCBpbnZva2VzIGBpdGVyYXRlZWAgZm9yIGVhY2ggcHJvcGVydHkuXG4gKiBJdGVyYXRlZSBmdW5jdGlvbnMgbWF5IGV4aXQgaXRlcmF0aW9uIGVhcmx5IGJ5IGV4cGxpY2l0bHkgcmV0dXJuaW5nIGBmYWxzZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHBhcmFtIHtGdW5jdGlvbn0ga2V5c0Z1bmMgVGhlIGZ1bmN0aW9uIHRvIGdldCB0aGUga2V5cyBvZiBgb2JqZWN0YC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKi9cbnZhciBiYXNlRm9yID0gY3JlYXRlQmFzZUZvcigpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VGb3I7XG4iLCJ2YXIgYmFzZUZvciA9IHJlcXVpcmUoJy4vX2Jhc2VGb3InKSxcbiAgICBrZXlzID0gcmVxdWlyZSgnLi9rZXlzJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uZm9yT3duYCB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqL1xuZnVuY3Rpb24gYmFzZUZvck93bihvYmplY3QsIGl0ZXJhdGVlKSB7XG4gIHJldHVybiBvYmplY3QgJiYgYmFzZUZvcihvYmplY3QsIGl0ZXJhdGVlLCBrZXlzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlRm9yT3duO1xuIiwiLyoqXG4gKiBUaGlzIG1ldGhvZCByZXR1cm5zIHRoZSBmaXJzdCBhcmd1bWVudCBpdCByZWNlaXZlcy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHBhcmFtIHsqfSB2YWx1ZSBBbnkgdmFsdWUuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyBgdmFsdWVgLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IDEgfTtcbiAqXG4gKiBjb25zb2xlLmxvZyhfLmlkZW50aXR5KG9iamVjdCkgPT09IG9iamVjdCk7XG4gKiAvLyA9PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGlkZW50aXR5KHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpZGVudGl0eTtcbiIsIi8qKlxuICogQ3JlYXRlcyBhIGJhc2UgZnVuY3Rpb24gZm9yIG1ldGhvZHMgbGlrZSBgXy5mb3JJbmAgYW5kIGBfLmZvck93bmAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2Zyb21SaWdodF0gU3BlY2lmeSBpdGVyYXRpbmcgZnJvbSByaWdodCB0byBsZWZ0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgYmFzZSBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlQmFzZUZvcihmcm9tUmlnaHQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKG9iamVjdCwgaXRlcmF0ZWUsIGtleXNGdW5jKSB7XG4gICAgdmFyIGluZGV4ID0gLTEsXG4gICAgICAgIGl0ZXJhYmxlID0gT2JqZWN0KG9iamVjdCksXG4gICAgICAgIHByb3BzID0ga2V5c0Z1bmMob2JqZWN0KSxcbiAgICAgICAgbGVuZ3RoID0gcHJvcHMubGVuZ3RoO1xuXG4gICAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgICB2YXIga2V5ID0gcHJvcHNbZnJvbVJpZ2h0ID8gbGVuZ3RoIDogKytpbmRleF07XG4gICAgICBpZiAoaXRlcmF0ZWUoaXRlcmFibGVba2V5XSwga2V5LCBpdGVyYWJsZSkgPT09IGZhbHNlKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb2JqZWN0O1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZUJhc2VGb3I7XG4iLCJ2YXIgYmFzZUl0ZXJhdGVlID0gcmVxdWlyZSgnLi9fYmFzZUl0ZXJhdGVlJyksXG4gICAgaXNBcnJheUxpa2UgPSByZXF1aXJlKCcuL2lzQXJyYXlMaWtlJyksXG4gICAga2V5cyA9IHJlcXVpcmUoJy4va2V5cycpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBgXy5maW5kYCBvciBgXy5maW5kTGFzdGAgZnVuY3Rpb24uXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZpbmRJbmRleEZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGZpbmQgdGhlIGNvbGxlY3Rpb24gaW5kZXguXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmaW5kIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBjcmVhdGVGaW5kKGZpbmRJbmRleEZ1bmMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGNvbGxlY3Rpb24sIHByZWRpY2F0ZSwgZnJvbUluZGV4KSB7XG4gICAgdmFyIGl0ZXJhYmxlID0gT2JqZWN0KGNvbGxlY3Rpb24pO1xuICAgIGlmICghaXNBcnJheUxpa2UoY29sbGVjdGlvbikpIHtcbiAgICAgIHZhciBpdGVyYXRlZSA9IGJhc2VJdGVyYXRlZShwcmVkaWNhdGUsIDMpO1xuICAgICAgY29sbGVjdGlvbiA9IGtleXMoY29sbGVjdGlvbik7XG4gICAgICBwcmVkaWNhdGUgPSBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIGl0ZXJhdGVlKGl0ZXJhYmxlW2tleV0sIGtleSwgaXRlcmFibGUpOyB9O1xuICAgIH1cbiAgICB2YXIgaW5kZXggPSBmaW5kSW5kZXhGdW5jKGNvbGxlY3Rpb24sIHByZWRpY2F0ZSwgZnJvbUluZGV4KTtcbiAgICByZXR1cm4gaW5kZXggPiAtMSA/IGl0ZXJhYmxlW2l0ZXJhdGVlID8gY29sbGVjdGlvbltpbmRleF0gOiBpbmRleF0gOiB1bmRlZmluZWQ7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlRmluZDtcbiIsIi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLmZvckVhY2hgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvclxuICogaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyBgYXJyYXlgLlxuICovXG5mdW5jdGlvbiBhcnJheUVhY2goYXJyYXksIGl0ZXJhdGVlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBpZiAoaXRlcmF0ZWUoYXJyYXlbaW5kZXhdLCBpbmRleCwgYXJyYXkpID09PSBmYWxzZSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiBhcnJheTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheUVhY2g7XG4iLCJ2YXIgY3JlYXRlRmluZCA9IHJlcXVpcmUoJy4vX2NyZWF0ZUZpbmQnKSxcbiAgICBmaW5kSW5kZXggPSByZXF1aXJlKCcuL2ZpbmRJbmRleCcpO1xuXG4vKipcbiAqIEl0ZXJhdGVzIG92ZXIgZWxlbWVudHMgb2YgYGNvbGxlY3Rpb25gLCByZXR1cm5pbmcgdGhlIGZpcnN0IGVsZW1lbnRcbiAqIGBwcmVkaWNhdGVgIHJldHVybnMgdHJ1dGh5IGZvci4gVGhlIHByZWRpY2F0ZSBpcyBpbnZva2VkIHdpdGggdGhyZWVcbiAqIGFyZ3VtZW50czogKHZhbHVlLCBpbmRleHxrZXksIGNvbGxlY3Rpb24pLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBDb2xsZWN0aW9uXG4gKiBAcGFyYW0ge0FycmF5fE9iamVjdH0gY29sbGVjdGlvbiBUaGUgY29sbGVjdGlvbiB0byBpbnNwZWN0LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW3ByZWRpY2F0ZT1fLmlkZW50aXR5XSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHBhcmFtIHtudW1iZXJ9IFtmcm9tSW5kZXg9MF0gVGhlIGluZGV4IHRvIHNlYXJjaCBmcm9tLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIG1hdGNoZWQgZWxlbWVudCwgZWxzZSBgdW5kZWZpbmVkYC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIHVzZXJzID0gW1xuICogICB7ICd1c2VyJzogJ2Jhcm5leScsICAnYWdlJzogMzYsICdhY3RpdmUnOiB0cnVlIH0sXG4gKiAgIHsgJ3VzZXInOiAnZnJlZCcsICAgICdhZ2UnOiA0MCwgJ2FjdGl2ZSc6IGZhbHNlIH0sXG4gKiAgIHsgJ3VzZXInOiAncGViYmxlcycsICdhZ2UnOiAxLCAgJ2FjdGl2ZSc6IHRydWUgfVxuICogXTtcbiAqXG4gKiBfLmZpbmQodXNlcnMsIGZ1bmN0aW9uKG8pIHsgcmV0dXJuIG8uYWdlIDwgNDA7IH0pO1xuICogLy8gPT4gb2JqZWN0IGZvciAnYmFybmV5J1xuICpcbiAqIC8vIFRoZSBgXy5tYXRjaGVzYCBpdGVyYXRlZSBzaG9ydGhhbmQuXG4gKiBfLmZpbmQodXNlcnMsIHsgJ2FnZSc6IDEsICdhY3RpdmUnOiB0cnVlIH0pO1xuICogLy8gPT4gb2JqZWN0IGZvciAncGViYmxlcydcbiAqXG4gKiAvLyBUaGUgYF8ubWF0Y2hlc1Byb3BlcnR5YCBpdGVyYXRlZSBzaG9ydGhhbmQuXG4gKiBfLmZpbmQodXNlcnMsIFsnYWN0aXZlJywgZmFsc2VdKTtcbiAqIC8vID0+IG9iamVjdCBmb3IgJ2ZyZWQnXG4gKlxuICogLy8gVGhlIGBfLnByb3BlcnR5YCBpdGVyYXRlZSBzaG9ydGhhbmQuXG4gKiBfLmZpbmQodXNlcnMsICdhY3RpdmUnKTtcbiAqIC8vID0+IG9iamVjdCBmb3IgJ2Jhcm5leSdcbiAqL1xudmFyIGZpbmQgPSBjcmVhdGVGaW5kKGZpbmRJbmRleCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZmluZDtcbiIsInZhciBiYXNlRmluZEluZGV4ID0gcmVxdWlyZSgnLi9fYmFzZUZpbmRJbmRleCcpLFxuICAgIGJhc2VJdGVyYXRlZSA9IHJlcXVpcmUoJy4vX2Jhc2VJdGVyYXRlZScpLFxuICAgIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vdG9JbnRlZ2VyJyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVNYXggPSBNYXRoLm1heDtcblxuLyoqXG4gKiBUaGlzIG1ldGhvZCBpcyBsaWtlIGBfLmZpbmRgIGV4Y2VwdCB0aGF0IGl0IHJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBmaXJzdFxuICogZWxlbWVudCBgcHJlZGljYXRlYCByZXR1cm5zIHRydXRoeSBmb3IgaW5zdGVhZCBvZiB0aGUgZWxlbWVudCBpdHNlbGYuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAxLjEuMFxuICogQGNhdGVnb3J5IEFycmF5XG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtwcmVkaWNhdGU9Xy5pZGVudGl0eV0gVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbZnJvbUluZGV4PTBdIFRoZSBpbmRleCB0byBzZWFyY2ggZnJvbS5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBmb3VuZCBlbGVtZW50LCBlbHNlIGAtMWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciB1c2VycyA9IFtcbiAqICAgeyAndXNlcic6ICdiYXJuZXknLCAgJ2FjdGl2ZSc6IGZhbHNlIH0sXG4gKiAgIHsgJ3VzZXInOiAnZnJlZCcsICAgICdhY3RpdmUnOiBmYWxzZSB9LFxuICogICB7ICd1c2VyJzogJ3BlYmJsZXMnLCAnYWN0aXZlJzogdHJ1ZSB9XG4gKiBdO1xuICpcbiAqIF8uZmluZEluZGV4KHVzZXJzLCBmdW5jdGlvbihvKSB7IHJldHVybiBvLnVzZXIgPT0gJ2Jhcm5leSc7IH0pO1xuICogLy8gPT4gMFxuICpcbiAqIC8vIFRoZSBgXy5tYXRjaGVzYCBpdGVyYXRlZSBzaG9ydGhhbmQuXG4gKiBfLmZpbmRJbmRleCh1c2VycywgeyAndXNlcic6ICdmcmVkJywgJ2FjdGl2ZSc6IGZhbHNlIH0pO1xuICogLy8gPT4gMVxuICpcbiAqIC8vIFRoZSBgXy5tYXRjaGVzUHJvcGVydHlgIGl0ZXJhdGVlIHNob3J0aGFuZC5cbiAqIF8uZmluZEluZGV4KHVzZXJzLCBbJ2FjdGl2ZScsIGZhbHNlXSk7XG4gKiAvLyA9PiAwXG4gKlxuICogLy8gVGhlIGBfLnByb3BlcnR5YCBpdGVyYXRlZSBzaG9ydGhhbmQuXG4gKiBfLmZpbmRJbmRleCh1c2VycywgJ2FjdGl2ZScpO1xuICogLy8gPT4gMlxuICovXG5mdW5jdGlvbiBmaW5kSW5kZXgoYXJyYXksIHByZWRpY2F0ZSwgZnJvbUluZGV4KSB7XG4gIHZhciBsZW5ndGggPSBhcnJheSA9PSBudWxsID8gMCA6IGFycmF5Lmxlbmd0aDtcbiAgaWYgKCFsZW5ndGgpIHtcbiAgICByZXR1cm4gLTE7XG4gIH1cbiAgdmFyIGluZGV4ID0gZnJvbUluZGV4ID09IG51bGwgPyAwIDogdG9JbnRlZ2VyKGZyb21JbmRleCk7XG4gIGlmIChpbmRleCA8IDApIHtcbiAgICBpbmRleCA9IG5hdGl2ZU1heChsZW5ndGggKyBpbmRleCwgMCk7XG4gIH1cbiAgcmV0dXJuIGJhc2VGaW5kSW5kZXgoYXJyYXksIGJhc2VJdGVyYXRlZShwcmVkaWNhdGUsIDMpLCBpbmRleCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZmluZEluZGV4O1xuIiwiLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8ucmVkdWNlYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3JcbiAqIGl0ZXJhdGVlIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcGFyYW0geyp9IFthY2N1bXVsYXRvcl0gVGhlIGluaXRpYWwgdmFsdWUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpbml0QWNjdW1dIFNwZWNpZnkgdXNpbmcgdGhlIGZpcnN0IGVsZW1lbnQgb2YgYGFycmF5YCBhc1xuICogIHRoZSBpbml0aWFsIHZhbHVlLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGFjY3VtdWxhdGVkIHZhbHVlLlxuICovXG5mdW5jdGlvbiBhcnJheVJlZHVjZShhcnJheSwgaXRlcmF0ZWUsIGFjY3VtdWxhdG9yLCBpbml0QWNjdW0pIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheSA9PSBudWxsID8gMCA6IGFycmF5Lmxlbmd0aDtcblxuICBpZiAoaW5pdEFjY3VtICYmIGxlbmd0aCkge1xuICAgIGFjY3VtdWxhdG9yID0gYXJyYXlbKytpbmRleF07XG4gIH1cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBhY2N1bXVsYXRvciA9IGl0ZXJhdGVlKGFjY3VtdWxhdG9yLCBhcnJheVtpbmRleF0sIGluZGV4LCBhcnJheSk7XG4gIH1cbiAgcmV0dXJuIGFjY3VtdWxhdG9yO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5UmVkdWNlO1xuIiwiLyoqXG4gKiBUaGlzIG1ldGhvZCByZXR1cm5zIHRoZSBmaXJzdCBhcmd1bWVudCBpdCByZWNlaXZlcy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHBhcmFtIHsqfSB2YWx1ZSBBbnkgdmFsdWUuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyBgdmFsdWVgLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IDEgfTtcbiAqXG4gKiBjb25zb2xlLmxvZyhfLmlkZW50aXR5KG9iamVjdCkgPT09IG9iamVjdCk7XG4gKiAvLyA9PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGlkZW50aXR5KHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpZGVudGl0eTtcbiIsInZhciBhcnJheUVhY2ggPSByZXF1aXJlKCcuL19hcnJheUVhY2gnKSxcbiAgICBiYXNlQ3JlYXRlID0gcmVxdWlyZSgnLi9fYmFzZUNyZWF0ZScpLFxuICAgIGJhc2VGb3JPd24gPSByZXF1aXJlKCcuL19iYXNlRm9yT3duJyksXG4gICAgYmFzZUl0ZXJhdGVlID0gcmVxdWlyZSgnLi9fYmFzZUl0ZXJhdGVlJyksXG4gICAgZ2V0UHJvdG90eXBlID0gcmVxdWlyZSgnLi9fZ2V0UHJvdG90eXBlJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIGlzQnVmZmVyID0gcmVxdWlyZSgnLi9pc0J1ZmZlcicpLFxuICAgIGlzRnVuY3Rpb24gPSByZXF1aXJlKCcuL2lzRnVuY3Rpb24nKSxcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKSxcbiAgICBpc1R5cGVkQXJyYXkgPSByZXF1aXJlKCcuL2lzVHlwZWRBcnJheScpO1xuXG4vKipcbiAqIEFuIGFsdGVybmF0aXZlIHRvIGBfLnJlZHVjZWA7IHRoaXMgbWV0aG9kIHRyYW5zZm9ybXMgYG9iamVjdGAgdG8gYSBuZXdcbiAqIGBhY2N1bXVsYXRvcmAgb2JqZWN0IHdoaWNoIGlzIHRoZSByZXN1bHQgb2YgcnVubmluZyBlYWNoIG9mIGl0cyBvd25cbiAqIGVudW1lcmFibGUgc3RyaW5nIGtleWVkIHByb3BlcnRpZXMgdGhydSBgaXRlcmF0ZWVgLCB3aXRoIGVhY2ggaW52b2NhdGlvblxuICogcG90ZW50aWFsbHkgbXV0YXRpbmcgdGhlIGBhY2N1bXVsYXRvcmAgb2JqZWN0LiBJZiBgYWNjdW11bGF0b3JgIGlzIG5vdFxuICogcHJvdmlkZWQsIGEgbmV3IG9iamVjdCB3aXRoIHRoZSBzYW1lIGBbW1Byb3RvdHlwZV1dYCB3aWxsIGJlIHVzZWQuIFRoZVxuICogaXRlcmF0ZWUgaXMgaW52b2tlZCB3aXRoIGZvdXIgYXJndW1lbnRzOiAoYWNjdW11bGF0b3IsIHZhbHVlLCBrZXksIG9iamVjdCkuXG4gKiBJdGVyYXRlZSBmdW5jdGlvbnMgbWF5IGV4aXQgaXRlcmF0aW9uIGVhcmx5IGJ5IGV4cGxpY2l0bHkgcmV0dXJuaW5nIGBmYWxzZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAxLjMuMFxuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtpdGVyYXRlZT1fLmlkZW50aXR5XSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHBhcmFtIHsqfSBbYWNjdW11bGF0b3JdIFRoZSBjdXN0b20gYWNjdW11bGF0b3IgdmFsdWUuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgYWNjdW11bGF0ZWQgdmFsdWUuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udHJhbnNmb3JtKFsyLCAzLCA0XSwgZnVuY3Rpb24ocmVzdWx0LCBuKSB7XG4gKiAgIHJlc3VsdC5wdXNoKG4gKj0gbik7XG4gKiAgIHJldHVybiBuICUgMiA9PSAwO1xuICogfSwgW10pO1xuICogLy8gPT4gWzQsIDldXG4gKlxuICogXy50cmFuc2Zvcm0oeyAnYSc6IDEsICdiJzogMiwgJ2MnOiAxIH0sIGZ1bmN0aW9uKHJlc3VsdCwgdmFsdWUsIGtleSkge1xuICogICAocmVzdWx0W3ZhbHVlXSB8fCAocmVzdWx0W3ZhbHVlXSA9IFtdKSkucHVzaChrZXkpO1xuICogfSwge30pO1xuICogLy8gPT4geyAnMSc6IFsnYScsICdjJ10sICcyJzogWydiJ10gfVxuICovXG5mdW5jdGlvbiB0cmFuc2Zvcm0ob2JqZWN0LCBpdGVyYXRlZSwgYWNjdW11bGF0b3IpIHtcbiAgdmFyIGlzQXJyID0gaXNBcnJheShvYmplY3QpLFxuICAgICAgaXNBcnJMaWtlID0gaXNBcnIgfHwgaXNCdWZmZXIob2JqZWN0KSB8fCBpc1R5cGVkQXJyYXkob2JqZWN0KTtcblxuICBpdGVyYXRlZSA9IGJhc2VJdGVyYXRlZShpdGVyYXRlZSwgNCk7XG4gIGlmIChhY2N1bXVsYXRvciA9PSBudWxsKSB7XG4gICAgdmFyIEN0b3IgPSBvYmplY3QgJiYgb2JqZWN0LmNvbnN0cnVjdG9yO1xuICAgIGlmIChpc0Fyckxpa2UpIHtcbiAgICAgIGFjY3VtdWxhdG9yID0gaXNBcnIgPyBuZXcgQ3RvciA6IFtdO1xuICAgIH1cbiAgICBlbHNlIGlmIChpc09iamVjdChvYmplY3QpKSB7XG4gICAgICBhY2N1bXVsYXRvciA9IGlzRnVuY3Rpb24oQ3RvcikgPyBiYXNlQ3JlYXRlKGdldFByb3RvdHlwZShvYmplY3QpKSA6IHt9O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGFjY3VtdWxhdG9yID0ge307XG4gICAgfVxuICB9XG4gIChpc0Fyckxpa2UgPyBhcnJheUVhY2ggOiBiYXNlRm9yT3duKShvYmplY3QsIGZ1bmN0aW9uKHZhbHVlLCBpbmRleCwgb2JqZWN0KSB7XG4gICAgcmV0dXJuIGl0ZXJhdGVlKGFjY3VtdWxhdG9yLCB2YWx1ZSwgaW5kZXgsIG9iamVjdCk7XG4gIH0pO1xuICByZXR1cm4gYWNjdW11bGF0b3I7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdHJhbnNmb3JtO1xuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBpc0ludGVnZXIgPSByZXF1aXJlKCdpcy1pbnRlZ2VyJylcbnZhciBpc0ludGVnZXJSZWdleCA9IC9eLT9cXGQrJC9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBwYXJzZUludFN0cmljdCAoaW50ZWdlcikge1xuICBpZiAodHlwZW9mIGludGVnZXIgPT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIGlzSW50ZWdlcihpbnRlZ2VyKSA/IGludGVnZXIgOiB1bmRlZmluZWRcbiAgfVxuICBpZiAodHlwZW9mIGludGVnZXIgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGlzSW50ZWdlclJlZ2V4LnRlc3QoaW50ZWdlcikgPyBwYXJzZUludChpbnRlZ2VyLCAxMCkgOiB1bmRlZmluZWRcbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBwYXJzZUludFN0cmljdCA9IHJlcXVpcmUoJ3BhcnNlLWludCcpXG52YXIgZXhwYW5kWWVhciA9IHJlcXVpcmUoJ2V4cGFuZC15ZWFyJylcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBwYXJzZVllYXIgKHllYXIsIGV4cGFuZCwgbm93KSB7XG4gIHllYXIgPSBwYXJzZUludFN0cmljdCh5ZWFyKVxuICBpZiAoeWVhciA9PSBudWxsKSByZXR1cm5cbiAgaWYgKCFleHBhbmQpIHJldHVybiB5ZWFyXG4gIHJldHVybiBleHBhbmRZZWFyKHllYXIsIG5vdylcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gZXh0ZW5kXG5cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbmZ1bmN0aW9uIGV4dGVuZCh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldXG5cbiAgICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldFxufVxuIiwiLyohIHplcm8tZmlsbC4gTUlUIExpY2Vuc2UuIEZlcm9zcyBBYm91a2hhZGlqZWggPGh0dHBzOi8vZmVyb3NzLm9yZy9vcGVuc291cmNlPiAqL1xuLyoqXG4gKiBHaXZlbiBhIG51bWJlciwgcmV0dXJuIGEgemVyby1maWxsZWQgc3RyaW5nLlxuICogRnJvbSBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzEyNjcyODMvXG4gKiBAcGFyYW0gIHtudW1iZXJ9IHdpZHRoXG4gKiBAcGFyYW0gIHtudW1iZXJ9IG51bWJlclxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHplcm9GaWxsICh3aWR0aCwgbnVtYmVyLCBwYWQpIHtcbiAgaWYgKG51bWJlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChudW1iZXIsIHBhZCkge1xuICAgICAgcmV0dXJuIHplcm9GaWxsKHdpZHRoLCBudW1iZXIsIHBhZClcbiAgICB9XG4gIH1cbiAgaWYgKHBhZCA9PT0gdW5kZWZpbmVkKSBwYWQgPSAnMCdcbiAgd2lkdGggLT0gbnVtYmVyLnRvU3RyaW5nKCkubGVuZ3RoXG4gIGlmICh3aWR0aCA+IDApIHJldHVybiBuZXcgQXJyYXkod2lkdGggKyAoL1xcLi8udGVzdChudW1iZXIpID8gMiA6IDEpKS5qb2luKHBhZCkgKyBudW1iZXJcbiAgcmV0dXJuIG51bWJlciArICcnXG59XG4iXSwic291cmNlUm9vdCI6IiJ9