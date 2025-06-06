/**
 * Rolldate 3.4.1
 * Copyright 2018-2025
 * Vantist https://github.com/vantist/rolldate
 * Licensed under MIT
 * Released on: jun 20, 2023
 */

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global = global || self, global.Rolldate = factory());
}(this, (function () { 'use strict';

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function unwrapExports (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var _iterStep = function (done, value) {
	  return { value: value, done: !!done };
	};

	var _iterators = {};

	var toString = {}.toString;

	var _cof = function (it) {
	  return toString.call(it).slice(8, -1);
	};

	// fallback for non-array-like ES3 and non-enumerable old V8 strings

	// eslint-disable-next-line no-prototype-builtins
	var _iobject = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
	  return _cof(it) == 'String' ? it.split('') : Object(it);
	};

	// 7.2.1 RequireObjectCoercible(argument)
	var _defined = function (it) {
	  if (it == undefined) throw TypeError("Can't call method on  " + it);
	  return it;
	};

	// to indexed object, toObject with fallback for non-array-like ES3 strings


	var _toIobject = function (it) {
	  return _iobject(_defined(it));
	};

	var _global = createCommonjsModule(function (module) {
	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self
	  // eslint-disable-next-line no-new-func
	  : Function('return this')();
	if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
	});

	var _core = createCommonjsModule(function (module) {
	var core = module.exports = { version: '2.6.12' };
	if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
	});
	var _core_1 = _core.version;

	var _aFunction = function (it) {
	  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
	  return it;
	};

	// optional / simple context binding

	var _ctx = function (fn, that, length) {
	  _aFunction(fn);
	  if (that === undefined) return fn;
	  switch (length) {
	    case 1: return function (a) {
	      return fn.call(that, a);
	    };
	    case 2: return function (a, b) {
	      return fn.call(that, a, b);
	    };
	    case 3: return function (a, b, c) {
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function (/* ...args */) {
	    return fn.apply(that, arguments);
	  };
	};

	var _isObject = function (it) {
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

	var _anObject = function (it) {
	  if (!_isObject(it)) throw TypeError(it + ' is not an object!');
	  return it;
	};

	var _fails = function (exec) {
	  try {
	    return !!exec();
	  } catch (e) {
	    return true;
	  }
	};

	// Thank's IE8 for his funny defineProperty
	var _descriptors = !_fails(function () {
	  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
	});

	var document$1 = _global.document;
	// typeof document.createElement is 'object' in old IE
	var is = _isObject(document$1) && _isObject(document$1.createElement);
	var _domCreate = function (it) {
	  return is ? document$1.createElement(it) : {};
	};

	var _ie8DomDefine = !_descriptors && !_fails(function () {
	  return Object.defineProperty(_domCreate('div'), 'a', { get: function () { return 7; } }).a != 7;
	});

	// 7.1.1 ToPrimitive(input [, PreferredType])

	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	var _toPrimitive = function (it, S) {
	  if (!_isObject(it)) return it;
	  var fn, val;
	  if (S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
	  if (typeof (fn = it.valueOf) == 'function' && !_isObject(val = fn.call(it))) return val;
	  if (!S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
	  throw TypeError("Can't convert object to primitive value");
	};

	var dP = Object.defineProperty;

	var f = _descriptors ? Object.defineProperty : function defineProperty(O, P, Attributes) {
	  _anObject(O);
	  P = _toPrimitive(P, true);
	  _anObject(Attributes);
	  if (_ie8DomDefine) try {
	    return dP(O, P, Attributes);
	  } catch (e) { /* empty */ }
	  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
	  if ('value' in Attributes) O[P] = Attributes.value;
	  return O;
	};

	var _objectDp = {
		f: f
	};

	var _propertyDesc = function (bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
	};

	var _hide = _descriptors ? function (object, key, value) {
	  return _objectDp.f(object, key, _propertyDesc(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};

	var hasOwnProperty = {}.hasOwnProperty;
	var _has = function (it, key) {
	  return hasOwnProperty.call(it, key);
	};

	var PROTOTYPE = 'prototype';

	var $export = function (type, name, source) {
	  var IS_FORCED = type & $export.F;
	  var IS_GLOBAL = type & $export.G;
	  var IS_STATIC = type & $export.S;
	  var IS_PROTO = type & $export.P;
	  var IS_BIND = type & $export.B;
	  var IS_WRAP = type & $export.W;
	  var exports = IS_GLOBAL ? _core : _core[name] || (_core[name] = {});
	  var expProto = exports[PROTOTYPE];
	  var target = IS_GLOBAL ? _global : IS_STATIC ? _global[name] : (_global[name] || {})[PROTOTYPE];
	  var key, own, out;
	  if (IS_GLOBAL) source = name;
	  for (key in source) {
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if (own && _has(exports, key)) continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? _ctx(out, _global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function (C) {
	      var F = function (a, b, c) {
	        if (this instanceof C) {
	          switch (arguments.length) {
	            case 0: return new C();
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? _ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if (IS_PROTO) {
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if (type & $export.R && expProto && !expProto[key]) _hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library`
	var _export = $export;

	var _redefine = _hide;

	// 7.1.4 ToInteger
	var ceil = Math.ceil;
	var floor = Math.floor;
	var _toInteger = function (it) {
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

	// 7.1.15 ToLength

	var min = Math.min;
	var _toLength = function (it) {
	  return it > 0 ? min(_toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

	var max = Math.max;
	var min$1 = Math.min;
	var _toAbsoluteIndex = function (index, length) {
	  index = _toInteger(index);
	  return index < 0 ? max(index + length, 0) : min$1(index, length);
	};

	// false -> Array#indexOf
	// true  -> Array#includes



	var _arrayIncludes = function (IS_INCLUDES) {
	  return function ($this, el, fromIndex) {
	    var O = _toIobject($this);
	    var length = _toLength(O.length);
	    var index = _toAbsoluteIndex(fromIndex, length);
	    var value;
	    // Array#includes uses SameValueZero equality algorithm
	    // eslint-disable-next-line no-self-compare
	    if (IS_INCLUDES && el != el) while (length > index) {
	      value = O[index++];
	      // eslint-disable-next-line no-self-compare
	      if (value != value) return true;
	    // Array#indexOf ignores holes, Array#includes - not
	    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
	      if (O[index] === el) return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

	var _shared = createCommonjsModule(function (module) {
	var SHARED = '__core-js_shared__';
	var store = _global[SHARED] || (_global[SHARED] = {});

	(module.exports = function (key, value) {
	  return store[key] || (store[key] = value !== undefined ? value : {});
	})('versions', []).push({
	  version: _core.version,
	  mode:  'pure' ,
	  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
	});
	});

	var id = 0;
	var px = Math.random();
	var _uid = function (key) {
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

	var shared = _shared('keys');

	var _sharedKey = function (key) {
	  return shared[key] || (shared[key] = _uid(key));
	};

	var arrayIndexOf = _arrayIncludes(false);
	var IE_PROTO = _sharedKey('IE_PROTO');

	var _objectKeysInternal = function (object, names) {
	  var O = _toIobject(object);
	  var i = 0;
	  var result = [];
	  var key;
	  for (key in O) if (key != IE_PROTO) _has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while (names.length > i) if (_has(O, key = names[i++])) {
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

	// IE 8- don't enum bug keys
	var _enumBugKeys = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)



	var _objectKeys = Object.keys || function keys(O) {
	  return _objectKeysInternal(O, _enumBugKeys);
	};

	var _objectDps = _descriptors ? Object.defineProperties : function defineProperties(O, Properties) {
	  _anObject(O);
	  var keys = _objectKeys(Properties);
	  var length = keys.length;
	  var i = 0;
	  var P;
	  while (length > i) _objectDp.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

	var document$2 = _global.document;
	var _html = document$2 && document$2.documentElement;

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])



	var IE_PROTO$1 = _sharedKey('IE_PROTO');
	var Empty = function () { /* empty */ };
	var PROTOTYPE$1 = 'prototype';

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function () {
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = _domCreate('iframe');
	  var i = _enumBugKeys.length;
	  var lt = '<';
	  var gt = '>';
	  var iframeDocument;
	  iframe.style.display = 'none';
	  _html.appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while (i--) delete createDict[PROTOTYPE$1][_enumBugKeys[i]];
	  return createDict();
	};

	var _objectCreate = Object.create || function create(O, Properties) {
	  var result;
	  if (O !== null) {
	    Empty[PROTOTYPE$1] = _anObject(O);
	    result = new Empty();
	    Empty[PROTOTYPE$1] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO$1] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : _objectDps(result, Properties);
	};

	var _wks = createCommonjsModule(function (module) {
	var store = _shared('wks');

	var Symbol = _global.Symbol;
	var USE_SYMBOL = typeof Symbol == 'function';

	var $exports = module.exports = function (name) {
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : _uid)('Symbol.' + name));
	};

	$exports.store = store;
	});

	var def = _objectDp.f;

	var TAG = _wks('toStringTag');

	var _setToStringTag = function (it, tag, stat) {
	  if (it && !_has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
	};

	var IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	_hide(IteratorPrototype, _wks('iterator'), function () { return this; });

	var _iterCreate = function (Constructor, NAME, next) {
	  Constructor.prototype = _objectCreate(IteratorPrototype, { next: _propertyDesc(1, next) });
	  _setToStringTag(Constructor, NAME + ' Iterator');
	};

	// 7.1.13 ToObject(argument)

	var _toObject = function (it) {
	  return Object(_defined(it));
	};

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)


	var IE_PROTO$2 = _sharedKey('IE_PROTO');
	var ObjectProto = Object.prototype;

	var _objectGpo = Object.getPrototypeOf || function (O) {
	  O = _toObject(O);
	  if (_has(O, IE_PROTO$2)) return O[IE_PROTO$2];
	  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

	var ITERATOR = _wks('iterator');
	var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
	var FF_ITERATOR = '@@iterator';
	var KEYS = 'keys';
	var VALUES = 'values';

	var returnThis = function () { return this; };

	var _iterDefine = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
	  _iterCreate(Constructor, NAME, next);
	  var getMethod = function (kind) {
	    if (!BUGGY && kind in proto) return proto[kind];
	    switch (kind) {
	      case KEYS: return function keys() { return new Constructor(this, kind); };
	      case VALUES: return function values() { return new Constructor(this, kind); };
	    } return function entries() { return new Constructor(this, kind); };
	  };
	  var TAG = NAME + ' Iterator';
	  var DEF_VALUES = DEFAULT == VALUES;
	  var VALUES_BUG = false;
	  var proto = Base.prototype;
	  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
	  var $default = $native || getMethod(DEFAULT);
	  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
	  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
	  var methods, key, IteratorPrototype;
	  // Fix native
	  if ($anyNative) {
	    IteratorPrototype = _objectGpo($anyNative.call(new Base()));
	    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
	      // Set @@toStringTag to native iterators
	      _setToStringTag(IteratorPrototype, TAG, true);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if (DEF_VALUES && $native && $native.name !== VALUES) {
	    VALUES_BUG = true;
	    $default = function values() { return $native.call(this); };
	  }
	  // Define iterator
	  if (( FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
	    _hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  _iterators[NAME] = $default;
	  _iterators[TAG] = returnThis;
	  if (DEFAULT) {
	    methods = {
	      values: DEF_VALUES ? $default : getMethod(VALUES),
	      keys: IS_SET ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if (FORCED) for (key in methods) {
	      if (!(key in proto)) _redefine(proto, key, methods[key]);
	    } else _export(_export.P + _export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	var es6_array_iterator = _iterDefine(Array, 'Array', function (iterated, kind) {
	  this._t = _toIobject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function () {
	  var O = this._t;
	  var kind = this._k;
	  var index = this._i++;
	  if (!O || index >= O.length) {
	    this._t = undefined;
	    return _iterStep(1);
	  }
	  if (kind == 'keys') return _iterStep(0, index);
	  if (kind == 'values') return _iterStep(0, O[index]);
	  return _iterStep(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	_iterators.Arguments = _iterators.Array;

	var TO_STRING_TAG = _wks('toStringTag');

	var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
	  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
	  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
	  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
	  'TextTrackList,TouchList').split(',');

	for (var i = 0; i < DOMIterables.length; i++) {
	  var NAME = DOMIterables[i];
	  var Collection = _global[NAME];
	  var proto = Collection && Collection.prototype;
	  if (proto && !proto[TO_STRING_TAG]) _hide(proto, TO_STRING_TAG, NAME);
	  _iterators[NAME] = _iterators.Array;
	}

	// true  -> String#at
	// false -> String#codePointAt
	var _stringAt = function (TO_STRING) {
	  return function (that, pos) {
	    var s = String(_defined(that));
	    var i = _toInteger(pos);
	    var l = s.length;
	    var a, b;
	    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

	var $at = _stringAt(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	_iterDefine(String, 'String', function (iterated) {
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function () {
	  var O = this._t;
	  var index = this._i;
	  var point;
	  if (index >= O.length) return { value: undefined, done: true };
	  point = $at(O, index);
	  this._i += point.length;
	  return { value: point, done: false };
	});

	// getting tag from 19.1.3.6 Object.prototype.toString()

	var TAG$1 = _wks('toStringTag');
	// ES3 wrong here
	var ARG = _cof(function () { return arguments; }()) == 'Arguments';

	// fallback for IE11 Script Access Denied error
	var tryGet = function (it, key) {
	  try {
	    return it[key];
	  } catch (e) { /* empty */ }
	};

	var _classof = function (it) {
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG$1)) == 'string' ? T
	    // builtinTag case
	    : ARG ? _cof(O)
	    // ES3 arguments fallback
	    : (B = _cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

	var ITERATOR$1 = _wks('iterator');

	var core_isIterable = _core.isIterable = function (it) {
	  var O = Object(it);
	  return O[ITERATOR$1] !== undefined
	    || '@@iterator' in O
	    // eslint-disable-next-line no-prototype-builtins
	    || _iterators.hasOwnProperty(_classof(O));
	};

	var isIterable = core_isIterable;

	var isIterable$1 = createCommonjsModule(function (module) {
	module.exports = { "default": isIterable, __esModule: true };
	});

	unwrapExports(isIterable$1);

	var ITERATOR$2 = _wks('iterator');

	var core_getIteratorMethod = _core.getIteratorMethod = function (it) {
	  if (it != undefined) return it[ITERATOR$2]
	    || it['@@iterator']
	    || _iterators[_classof(it)];
	};

	var core_getIterator = _core.getIterator = function (it) {
	  var iterFn = core_getIteratorMethod(it);
	  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
	  return _anObject(iterFn.call(it));
	};

	var getIterator = core_getIterator;

	var getIterator$1 = createCommonjsModule(function (module) {
	module.exports = { "default": getIterator, __esModule: true };
	});

	unwrapExports(getIterator$1);

	var slicedToArray = createCommonjsModule(function (module, exports) {

	exports.__esModule = true;



	var _isIterable3 = _interopRequireDefault(isIterable$1);



	var _getIterator3 = _interopRequireDefault(getIterator$1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function () {
	  function sliceIterator(arr, i) {
	    var _arr = [];
	    var _n = true;
	    var _d = false;
	    var _e = undefined;

	    try {
	      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
	        _arr.push(_s.value);

	        if (i && _arr.length === i) break;
	      }
	    } catch (err) {
	      _d = true;
	      _e = err;
	    } finally {
	      try {
	        if (!_n && _i["return"]) _i["return"]();
	      } finally {
	        if (_d) throw _e;
	      }
	    }

	    return _arr;
	  }

	  return function (arr, i) {
	    if (Array.isArray(arr)) {
	      return arr;
	    } else if ((0, _isIterable3.default)(Object(arr))) {
	      return sliceIterator(arr, i);
	    } else {
	      throw new TypeError("Invalid attempt to destructure non-iterable instance");
	    }
	  };
	}();
	});

	var _slicedToArray = unwrapExports(slicedToArray);

	var f$1 = {}.propertyIsEnumerable;

	var _objectPie = {
		f: f$1
	};

	var isEnum = _objectPie.f;
	var _objectToArray = function (isEntries) {
	  return function (it) {
	    var O = _toIobject(it);
	    var keys = _objectKeys(O);
	    var length = keys.length;
	    var i = 0;
	    var result = [];
	    var key;
	    while (length > i) {
	      key = keys[i++];
	      if (!_descriptors || isEnum.call(O, key)) {
	        result.push(isEntries ? [key, O[key]] : O[key]);
	      }
	    }
	    return result;
	  };
	};

	// https://github.com/tc39/proposal-object-values-entries

	var $entries = _objectToArray(true);

	_export(_export.S, 'Object', {
	  entries: function entries(it) {
	    return $entries(it);
	  }
	});

	var entries = _core.Object.entries;

	var entries$1 = createCommonjsModule(function (module) {
	module.exports = { "default": entries, __esModule: true };
	});

	var _Object$entries = unwrapExports(entries$1);

	// https://github.com/tc39/proposal-object-values-entries

	var $values = _objectToArray(false);

	_export(_export.S, 'Object', {
	  values: function values(it) {
	    return $values(it);
	  }
	});

	var values = _core.Object.values;

	var values$1 = createCommonjsModule(function (module) {
	module.exports = { "default": values, __esModule: true };
	});

	var _Object$values = unwrapExports(values$1);

	function styleInject(css, ref) {
	  if ( ref === void 0 ) ref = {};
	  var insertAt = ref.insertAt;

	  if (!css || typeof document === 'undefined') { return; }

	  var head = document.head || document.getElementsByTagName('head')[0];
	  var style = document.createElement('style');
	  style.type = 'text/css';

	  if (insertAt === 'top') {
	    if (head.firstChild) {
	      head.insertBefore(style, head.firstChild);
	    } else {
	      head.appendChild(style);
	    }
	  } else {
	    head.appendChild(style);
	  }

	  if (style.styleSheet) {
	    style.styleSheet.cssText = css;
	  } else {
	    style.appendChild(document.createTextNode(css));
	  }
	}

	var css_248z = ".rolldate-container{font-size:20px;color:#333;text-align:center}.rolldate-container ul{margin:0;padding:0}.rolldate-container li{list-style-type:none}.rolldate-container footer,.rolldate-container header{position:relative;line-height:60px;font-size:18px;border-bottom:1px solid #e0e0e0}.rolldate-container .rolldate-mask{position:fixed;width:100%;height:100%;top:0;left:0;z-index:999;background-color:rgba(37,38,45,.4)}.rolldate-container .rolldate-panel{position:fixed;bottom:0;left:0;width:100%;height:333px;z-index:1000;background:#fff;-webkit-transition:all .3s ease-in-out;-o-transition:all .3s ease-in-out;transition:all .3s ease-in-out;-webkit-transform:translate3d(0,273px,0);transform:translate3d(0,273px,0)}.rolldate-container .rolldate-btn{position:absolute;left:0;top:0;height:100%;padding:0 15px;color:#666;font-size:16px;cursor:pointer;-webkit-tap-highlight-color:transparent}.rolldate-container .rolldate-btn.disabled{color:#ccc}.rolldate-container .rolldate-confirm{left:auto;right:0;color:#007bff}.rolldate-container .rolldate-content{position:relative;margin:20px 0}.rolldate-container .rolldate-wrapper{display:-webkit-box;display:-ms-flexbox;display:flex}.rolldate-container .rolldate-wrapper>div{-webkit-box-flex:1;-ms-flex:1;flex:1;height:173px;line-height:36px;overflow:hidden;-ms-flex-preferred-size:-8e;flex-basis:-8e;width:1%;cursor:pointer}.rolldate-container .rolldate-wrapper>#rolldate-ampm{-webkit-box-flex:0;-ms-flex:0 0 75px;flex:0 0 75px}.rolldate-container .rolldate-wrapper ul{margin-top:68px}.rolldate-container .rolldate-wrapper li{height:36px}.rolldate-container .rolldate-dim{position:absolute;left:0;top:0;width:100%;height:68px;background:-o-linear-gradient(bottom,hsla(0,0%,100%,.4),hsla(0,0%,100%,.8));background:-webkit-gradient(linear, left bottom, left top, from(hsla(0, 0%, 100%, 0.4)), to(hsla(0, 0%, 100%, 0.8)));background:-o-linear-gradient(bottom, hsla(0, 0%, 100%, 0.4), hsla(0, 0%, 100%, 0.8));background:linear-gradient(0deg,hsla(0,0%,100%,.4),hsla(0,0%,100%,.8));pointer-events:none;-webkit-transform:translateZ(0);transform:translateZ(0);z-index:10}.rolldate-container .mask-top{border-bottom:1px solid #ebebeb}.rolldate-container .mask-bottom{top:auto;bottom:1px;border-top:1px solid #ebebeb}.rolldate-container .fadeIn{-webkit-transform:translateZ(0);transform:translateZ(0)}.rolldate-container .fadeOut{-webkit-transform:translate3d(0,273px,0);transform:translate3d(0,273px,0)}@media screen and (max-width:414px){.rolldate-container{font-size:18px}}@media screen and (max-width:320px){.rolldate-container{font-size:15px}}";
	styleInject(css_248z);

	/*!
	 * better-scroll / core
	 * (c) 2016-2023 ustbhuangyi
	 * Released under the MIT License.
	 */
	/*! *****************************************************************************
	Copyright (c) Microsoft Corporation.

	Permission to use, copy, modify, and/or distribute this software for any
	purpose with or without fee is hereby granted.

	THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
	REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
	AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
	INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
	LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
	OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
	PERFORMANCE OF THIS SOFTWARE.
	***************************************************************************** */
	/* global Reflect, Promise */

	var extendStatics = function(d, b) {
	    extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
	    return extendStatics(d, b);
	};

	function __extends(d, b) {
	    extendStatics(d, b);
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	}

	var __assign = function() {
	    __assign = Object.assign || function __assign(t) {
	        for (var s, i = 1, n = arguments.length; i < n; i++) {
	            s = arguments[i];
	            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
	        }
	        return t;
	    };
	    return __assign.apply(this, arguments);
	};

	function __spreadArrays() {
	    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
	    for (var r = Array(s), k = 0, i = 0; i < il; i++)
	        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
	            r[k] = a[j];
	    return r;
	}

	var propertiesConfig = [
	    {
	        sourceKey: 'scroller.scrollBehaviorX.currentPos',
	        key: 'x'
	    },
	    {
	        sourceKey: 'scroller.scrollBehaviorY.currentPos',
	        key: 'y'
	    },
	    {
	        sourceKey: 'scroller.scrollBehaviorX.hasScroll',
	        key: 'hasHorizontalScroll'
	    },
	    {
	        sourceKey: 'scroller.scrollBehaviorY.hasScroll',
	        key: 'hasVerticalScroll'
	    },
	    {
	        sourceKey: 'scroller.scrollBehaviorX.contentSize',
	        key: 'scrollerWidth'
	    },
	    {
	        sourceKey: 'scroller.scrollBehaviorY.contentSize',
	        key: 'scrollerHeight'
	    },
	    {
	        sourceKey: 'scroller.scrollBehaviorX.maxScrollPos',
	        key: 'maxScrollX'
	    },
	    {
	        sourceKey: 'scroller.scrollBehaviorY.maxScrollPos',
	        key: 'maxScrollY'
	    },
	    {
	        sourceKey: 'scroller.scrollBehaviorX.minScrollPos',
	        key: 'minScrollX'
	    },
	    {
	        sourceKey: 'scroller.scrollBehaviorY.minScrollPos',
	        key: 'minScrollY'
	    },
	    {
	        sourceKey: 'scroller.scrollBehaviorX.movingDirection',
	        key: 'movingDirectionX'
	    },
	    {
	        sourceKey: 'scroller.scrollBehaviorY.movingDirection',
	        key: 'movingDirectionY'
	    },
	    {
	        sourceKey: 'scroller.scrollBehaviorX.direction',
	        key: 'directionX'
	    },
	    {
	        sourceKey: 'scroller.scrollBehaviorY.direction',
	        key: 'directionY'
	    },
	    {
	        sourceKey: 'scroller.actions.enabled',
	        key: 'enabled'
	    },
	    {
	        sourceKey: 'scroller.animater.pending',
	        key: 'pending'
	    },
	    {
	        sourceKey: 'scroller.animater.stop',
	        key: 'stop'
	    },
	    {
	        sourceKey: 'scroller.scrollTo',
	        key: 'scrollTo'
	    },
	    {
	        sourceKey: 'scroller.scrollBy',
	        key: 'scrollBy'
	    },
	    {
	        sourceKey: 'scroller.scrollToElement',
	        key: 'scrollToElement'
	    },
	    {
	        sourceKey: 'scroller.resetPosition',
	        key: 'resetPosition'
	    }
	];

	function warn(msg) {
	    console.error("[BScroll warn]: " + msg);
	}

	// ssr support
	var inBrowser = typeof window !== 'undefined';
	var ua = inBrowser && navigator.userAgent.toLowerCase();
	var isWeChatDevTools = !!(ua && /wechatdevtools/.test(ua));
	var isAndroid = ua && ua.indexOf('android') > 0;
	/* istanbul ignore next */
	var isIOSBadVersion = (function () {
	    if (typeof ua === 'string') {
	        var regex = /os (\d\d?_\d(_\d)?)/;
	        var matches = regex.exec(ua);
	        if (!matches)
	            return false;
	        var parts = matches[1].split('_').map(function (item) {
	            return parseInt(item, 10);
	        });
	        // ios version >= 13.4 issue 982
	        return !!(parts[0] === 13 && parts[1] >= 4);
	    }
	    return false;
	})();
	/* istanbul ignore next */
	var supportsPassive = false;
	/* istanbul ignore next */
	if (inBrowser) {
	    var EventName = 'test-passive';
	    try {
	        var opts = {};
	        Object.defineProperty(opts, 'passive', {
	            get: function () {
	                supportsPassive = true;
	            },
	        }); // https://github.com/facebook/flow/issues/285
	        window.addEventListener(EventName, function () { }, opts);
	    }
	    catch (e) { }
	}

	function getNow() {
	    return window.performance &&
	        window.performance.now &&
	        window.performance.timing
	        ? window.performance.now() + window.performance.timing.navigationStart
	        : +new Date();
	}
	var extend = function (target, source) {
	    for (var key in source) {
	        target[key] = source[key];
	    }
	    return target;
	};
	function isUndef(v) {
	    return v === undefined || v === null;
	}
	function between(x, min, max) {
	    if (x < min) {
	        return min;
	    }
	    if (x > max) {
	        return max;
	    }
	    return x;
	}

	var elementStyle = (inBrowser &&
	    document.createElement('div').style);
	var vendor = (function () {
	    /* istanbul ignore if  */
	    if (!inBrowser) {
	        return false;
	    }
	    var transformNames = [
	        {
	            key: 'standard',
	            value: 'transform',
	        },
	        {
	            key: 'webkit',
	            value: 'webkitTransform',
	        },
	        {
	            key: 'Moz',
	            value: 'MozTransform',
	        },
	        {
	            key: 'O',
	            value: 'OTransform',
	        },
	        {
	            key: 'ms',
	            value: 'msTransform',
	        },
	    ];
	    for (var _i = 0, transformNames_1 = transformNames; _i < transformNames_1.length; _i++) {
	        var obj = transformNames_1[_i];
	        if (elementStyle[obj.value] !== undefined) {
	            return obj.key;
	        }
	    }
	    /* istanbul ignore next  */
	    return false;
	})();
	/* istanbul ignore next  */
	function prefixStyle(style) {
	    if (vendor === false) {
	        return style;
	    }
	    if (vendor === 'standard') {
	        if (style === 'transitionEnd') {
	            return 'transitionend';
	        }
	        return style;
	    }
	    return vendor + style.charAt(0).toUpperCase() + style.substr(1);
	}
	function getElement(el) {
	    return (typeof el === 'string' ? document.querySelector(el) : el);
	}
	function addEvent(el, type, fn, capture) {
	    var useCapture = supportsPassive
	        ? {
	            passive: false,
	            capture: !!capture,
	        }
	        : !!capture;
	    el.addEventListener(type, fn, useCapture);
	}
	function removeEvent(el, type, fn, capture) {
	    el.removeEventListener(type, fn, {
	        capture: !!capture,
	    });
	}
	function maybePrevent(e) {
	    if (e.cancelable) {
	        e.preventDefault();
	    }
	}
	function offset(el) {
	    var left = 0;
	    var top = 0;
	    while (el) {
	        left -= el.offsetLeft;
	        top -= el.offsetTop;
	        el = el.offsetParent;
	    }
	    return {
	        left: left,
	        top: top,
	    };
	}
	vendor && vendor !== 'standard' ? '-' + vendor.toLowerCase() + '-' : '';
	var transform = prefixStyle('transform');
	var transition = prefixStyle('transition');
	var hasPerspective = inBrowser && prefixStyle('perspective') in elementStyle;
	// fix issue #361
	var hasTouch = inBrowser && ('ontouchstart' in window || isWeChatDevTools);
	var hasTransition = inBrowser && transition in elementStyle;
	var style = {
	    transform: transform,
	    transition: transition,
	    transitionTimingFunction: prefixStyle('transitionTimingFunction'),
	    transitionDuration: prefixStyle('transitionDuration'),
	    transitionDelay: prefixStyle('transitionDelay'),
	    transformOrigin: prefixStyle('transformOrigin'),
	    transitionEnd: prefixStyle('transitionEnd'),
	    transitionProperty: prefixStyle('transitionProperty'),
	};
	var eventTypeMap = {
	    touchstart: 1,
	    touchmove: 1,
	    touchend: 1,
	    touchcancel: 1,
	    mousedown: 2,
	    mousemove: 2,
	    mouseup: 2,
	};
	function getRect(el) {
	    /* istanbul ignore if  */
	    if (el instanceof window.SVGElement) {
	        var rect = el.getBoundingClientRect();
	        return {
	            top: rect.top,
	            left: rect.left,
	            width: rect.width,
	            height: rect.height,
	        };
	    }
	    else {
	        return {
	            top: el.offsetTop,
	            left: el.offsetLeft,
	            width: el.offsetWidth,
	            height: el.offsetHeight,
	        };
	    }
	}
	function preventDefaultExceptionFn(el, exceptions) {
	    for (var i in exceptions) {
	        if (exceptions[i].test(el[i])) {
	            return true;
	        }
	    }
	    return false;
	}
	var tagExceptionFn = preventDefaultExceptionFn;
	function tap(e, eventName) {
	    var ev = document.createEvent('Event');
	    ev.initEvent(eventName, true, true);
	    ev.pageX = e.pageX;
	    ev.pageY = e.pageY;
	    e.target.dispatchEvent(ev);
	}
	function click(e, event) {
	    if (event === void 0) { event = 'click'; }
	    var eventSource;
	    if (e.type === 'mouseup') {
	        eventSource = e;
	    }
	    else if (e.type === 'touchend' || e.type === 'touchcancel') {
	        eventSource = e.changedTouches[0];
	    }
	    var posSrc = {};
	    if (eventSource) {
	        posSrc.screenX = eventSource.screenX || 0;
	        posSrc.screenY = eventSource.screenY || 0;
	        posSrc.clientX = eventSource.clientX || 0;
	        posSrc.clientY = eventSource.clientY || 0;
	    }
	    var ev;
	    var bubbles = true;
	    var cancelable = true;
	    var ctrlKey = e.ctrlKey, shiftKey = e.shiftKey, altKey = e.altKey, metaKey = e.metaKey;
	    var pressedKeysMap = {
	        ctrlKey: ctrlKey,
	        shiftKey: shiftKey,
	        altKey: altKey,
	        metaKey: metaKey,
	    };
	    if (typeof MouseEvent !== 'undefined') {
	        try {
	            ev = new MouseEvent(event, extend(__assign({ bubbles: bubbles,
	                cancelable: cancelable }, pressedKeysMap), posSrc));
	        }
	        catch (e) {
	            /* istanbul ignore next */
	            createEvent();
	        }
	    }
	    else {
	        createEvent();
	    }
	    function createEvent() {
	        ev = document.createEvent('Event');
	        ev.initEvent(event, bubbles, cancelable);
	        extend(ev, posSrc);
	    }
	    // forwardedTouchEvent set to true in case of the conflict with fastclick
	    ev.forwardedTouchEvent = true;
	    ev._constructed = true;
	    e.target.dispatchEvent(ev);
	}
	function dblclick(e) {
	    click(e, 'dblclick');
	}

	var ease = {
	    // easeOutQuint
	    swipe: {
	        style: 'cubic-bezier(0.23, 1, 0.32, 1)',
	        fn: function (t) {
	            return 1 + --t * t * t * t * t;
	        }
	    },
	    // easeOutQuard
	    swipeBounce: {
	        style: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
	        fn: function (t) {
	            return t * (2 - t);
	        }
	    },
	    // easeOutQuart
	    bounce: {
	        style: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
	        fn: function (t) {
	            return 1 - --t * t * t * t;
	        }
	    }
	};

	var DEFAULT_INTERVAL = 1000 / 60;
	var windowCompat = inBrowser && window;
	/* istanbul ignore next */
	function noop$1() { }
	var requestAnimationFrame = (function () {
	    /* istanbul ignore if  */
	    if (!inBrowser) {
	        return noop$1;
	    }
	    return (windowCompat.requestAnimationFrame ||
	        windowCompat.webkitRequestAnimationFrame ||
	        windowCompat.mozRequestAnimationFrame ||
	        windowCompat.oRequestAnimationFrame ||
	        // if all else fails, use setTimeout
	        function (callback) {
	            return window.setTimeout(callback, callback.interval || DEFAULT_INTERVAL); // make interval as precise as possible.
	        });
	})();
	var cancelAnimationFrame = (function () {
	    /* istanbul ignore if  */
	    if (!inBrowser) {
	        return noop$1;
	    }
	    return (windowCompat.cancelAnimationFrame ||
	        windowCompat.webkitCancelAnimationFrame ||
	        windowCompat.mozCancelAnimationFrame ||
	        windowCompat.oCancelAnimationFrame ||
	        function (id) {
	            window.clearTimeout(id);
	        });
	})();

	/* istanbul ignore next */
	var noop = function (val) { };
	var sharedPropertyDefinition = {
	    enumerable: true,
	    configurable: true,
	    get: noop,
	    set: noop,
	};
	var getProperty = function (obj, key) {
	    var keys = key.split('.');
	    for (var i = 0; i < keys.length - 1; i++) {
	        obj = obj[keys[i]];
	        if (typeof obj !== 'object' || !obj)
	            return;
	    }
	    var lastKey = keys.pop();
	    if (typeof obj[lastKey] === 'function') {
	        return function () {
	            return obj[lastKey].apply(obj, arguments);
	        };
	    }
	    else {
	        return obj[lastKey];
	    }
	};
	var setProperty = function (obj, key, value) {
	    var keys = key.split('.');
	    var temp;
	    for (var i = 0; i < keys.length - 1; i++) {
	        temp = keys[i];
	        if (!obj[temp])
	            obj[temp] = {};
	        obj = obj[temp];
	    }
	    obj[keys.pop()] = value;
	};
	function propertiesProxy(target, sourceKey, key) {
	    sharedPropertyDefinition.get = function proxyGetter() {
	        return getProperty(this, sourceKey);
	    };
	    sharedPropertyDefinition.set = function proxySetter(val) {
	        setProperty(this, sourceKey, val);
	    };
	    Object.defineProperty(target, key, sharedPropertyDefinition);
	}

	var EventEmitter = /** @class */ (function () {
	    function EventEmitter(names) {
	        this.events = {};
	        this.eventTypes = {};
	        this.registerType(names);
	    }
	    EventEmitter.prototype.on = function (type, fn, context) {
	        if (context === void 0) { context = this; }
	        this.hasType(type);
	        if (!this.events[type]) {
	            this.events[type] = [];
	        }
	        this.events[type].push([fn, context]);
	        return this;
	    };
	    EventEmitter.prototype.once = function (type, fn, context) {
	        var _this = this;
	        if (context === void 0) { context = this; }
	        this.hasType(type);
	        var magic = function () {
	            var args = [];
	            for (var _i = 0; _i < arguments.length; _i++) {
	                args[_i] = arguments[_i];
	            }
	            _this.off(type, magic);
	            var ret = fn.apply(context, args);
	            if (ret === true) {
	                return ret;
	            }
	        };
	        magic.fn = fn;
	        this.on(type, magic);
	        return this;
	    };
	    EventEmitter.prototype.off = function (type, fn) {
	        if (!type && !fn) {
	            this.events = {};
	            return this;
	        }
	        if (type) {
	            this.hasType(type);
	            if (!fn) {
	                this.events[type] = [];
	                return this;
	            }
	            var events = this.events[type];
	            if (!events) {
	                return this;
	            }
	            var count = events.length;
	            while (count--) {
	                if (events[count][0] === fn ||
	                    (events[count][0] && events[count][0].fn === fn)) {
	                    events.splice(count, 1);
	                }
	            }
	            return this;
	        }
	    };
	    EventEmitter.prototype.trigger = function (type) {
	        var args = [];
	        for (var _i = 1; _i < arguments.length; _i++) {
	            args[_i - 1] = arguments[_i];
	        }
	        this.hasType(type);
	        var events = this.events[type];
	        if (!events) {
	            return;
	        }
	        var len = events.length;
	        var eventsCopy = __spreadArrays(events);
	        var ret;
	        for (var i = 0; i < len; i++) {
	            var event_1 = eventsCopy[i];
	            var fn = event_1[0], context = event_1[1];
	            if (fn) {
	                ret = fn.apply(context, args);
	                if (ret === true) {
	                    return ret;
	                }
	            }
	        }
	    };
	    EventEmitter.prototype.registerType = function (names) {
	        var _this = this;
	        names.forEach(function (type) {
	            _this.eventTypes[type] = type;
	        });
	    };
	    EventEmitter.prototype.destroy = function () {
	        this.events = {};
	        this.eventTypes = {};
	    };
	    EventEmitter.prototype.hasType = function (type) {
	        var types = this.eventTypes;
	        var isType = types[type] === type;
	        if (!isType) {
	            warn("EventEmitter has used unknown event type: \"" + type + "\", should be oneof [" +
	                ("" + Object.keys(types).map(function (_) { return JSON.stringify(_); })) +
	                "]");
	        }
	    };
	    return EventEmitter;
	}());
	var EventRegister = /** @class */ (function () {
	    function EventRegister(wrapper, events) {
	        this.wrapper = wrapper;
	        this.events = events;
	        this.addDOMEvents();
	    }
	    EventRegister.prototype.destroy = function () {
	        this.removeDOMEvents();
	        this.events = [];
	    };
	    EventRegister.prototype.addDOMEvents = function () {
	        this.handleDOMEvents(addEvent);
	    };
	    EventRegister.prototype.removeDOMEvents = function () {
	        this.handleDOMEvents(removeEvent);
	    };
	    EventRegister.prototype.handleDOMEvents = function (eventOperation) {
	        var _this = this;
	        var wrapper = this.wrapper;
	        this.events.forEach(function (event) {
	            eventOperation(wrapper, event.name, _this, !!event.capture);
	        });
	    };
	    EventRegister.prototype.handleEvent = function (e) {
	        var eventType = e.type;
	        this.events.some(function (event) {
	            if (event.name === eventType) {
	                event.handler(e);
	                return true;
	            }
	            return false;
	        });
	    };
	    return EventRegister;
	}());

	var CustomOptions = /** @class */ (function () {
	    function CustomOptions() {
	    }
	    return CustomOptions;
	}());
	var OptionsConstructor = /** @class */ (function (_super) {
	    __extends(OptionsConstructor, _super);
	    function OptionsConstructor() {
	        var _this = _super.call(this) || this;
	        _this.startX = 0;
	        _this.startY = 0;
	        _this.scrollX = false;
	        _this.scrollY = true;
	        _this.freeScroll = false;
	        _this.directionLockThreshold = 0;
	        _this.eventPassthrough = "" /* None */;
	        _this.click = false;
	        _this.dblclick = false;
	        _this.tap = '';
	        _this.bounce = {
	            top: true,
	            bottom: true,
	            left: true,
	            right: true,
	        };
	        _this.bounceTime = 800;
	        _this.momentum = true;
	        _this.momentumLimitTime = 300;
	        _this.momentumLimitDistance = 15;
	        _this.swipeTime = 2500;
	        _this.swipeBounceTime = 500;
	        _this.deceleration = 0.0015;
	        _this.flickLimitTime = 200;
	        _this.flickLimitDistance = 100;
	        _this.resizePolling = 60;
	        _this.probeType = 0 /* Default */;
	        _this.stopPropagation = false;
	        _this.preventDefault = true;
	        _this.preventDefaultException = {
	            tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT|AUDIO)$/,
	        };
	        _this.tagException = {
	            tagName: /^TEXTAREA$/,
	        };
	        _this.HWCompositing = true;
	        _this.useTransition = true;
	        _this.bindToWrapper = false;
	        _this.bindToTarget = false;
	        _this.disableMouse = hasTouch;
	        _this.disableTouch = !hasTouch;
	        _this.autoBlur = true;
	        _this.autoEndDistance = 5;
	        _this.outOfBoundaryDampingFactor = 1 / 3;
	        _this.specifiedIndexAsContent = 0;
	        _this.quadrant = 1 /* First */;
	        return _this;
	    }
	    OptionsConstructor.prototype.merge = function (options) {
	        if (!options)
	            return this;
	        for (var key in options) {
	            if (key === 'bounce') {
	                this.bounce = this.resolveBounce(options[key]);
	                continue;
	            }
	            this[key] = options[key];
	        }
	        return this;
	    };
	    OptionsConstructor.prototype.process = function () {
	        this.translateZ =
	            this.HWCompositing && hasPerspective ? ' translateZ(1px)' : '';
	        this.useTransition = this.useTransition && hasTransition;
	        this.preventDefault = !this.eventPassthrough && this.preventDefault;
	        // If you want eventPassthrough I have to lock one of the axes
	        this.scrollX =
	            this.eventPassthrough === "horizontal" /* Horizontal */
	                ? false
	                : this.scrollX;
	        this.scrollY =
	            this.eventPassthrough === "vertical" /* Vertical */ ? false : this.scrollY;
	        // With eventPassthrough we also need lockDirection mechanism
	        this.freeScroll = this.freeScroll && !this.eventPassthrough;
	        // force true when freeScroll is true
	        this.scrollX = this.freeScroll ? true : this.scrollX;
	        this.scrollY = this.freeScroll ? true : this.scrollY;
	        this.directionLockThreshold = this.eventPassthrough
	            ? 0
	            : this.directionLockThreshold;
	        return this;
	    };
	    OptionsConstructor.prototype.resolveBounce = function (bounceOptions) {
	        var DEFAULT_BOUNCE = {
	            top: true,
	            right: true,
	            bottom: true,
	            left: true,
	        };
	        var NEGATED_BOUNCE = {
	            top: false,
	            right: false,
	            bottom: false,
	            left: false,
	        };
	        var ret;
	        if (typeof bounceOptions === 'object') {
	            ret = extend(DEFAULT_BOUNCE, bounceOptions);
	        }
	        else {
	            ret = bounceOptions ? DEFAULT_BOUNCE : NEGATED_BOUNCE;
	        }
	        return ret;
	    };
	    return OptionsConstructor;
	}(CustomOptions));

	var ActionsHandler = /** @class */ (function () {
	    function ActionsHandler(wrapper, options) {
	        this.wrapper = wrapper;
	        this.options = options;
	        this.hooks = new EventEmitter([
	            'beforeStart',
	            'start',
	            'move',
	            'end',
	            'click',
	        ]);
	        this.handleDOMEvents();
	    }
	    ActionsHandler.prototype.handleDOMEvents = function () {
	        var _a = this.options, bindToWrapper = _a.bindToWrapper, disableMouse = _a.disableMouse, disableTouch = _a.disableTouch, click = _a.click;
	        var wrapper = this.wrapper;
	        var target = bindToWrapper ? wrapper : window;
	        var wrapperEvents = [];
	        var targetEvents = [];
	        var shouldRegisterTouch = !disableTouch;
	        var shouldRegisterMouse = !disableMouse;
	        if (click) {
	            wrapperEvents.push({
	                name: 'click',
	                handler: this.click.bind(this),
	                capture: true,
	            });
	        }
	        if (shouldRegisterTouch) {
	            wrapperEvents.push({
	                name: 'touchstart',
	                handler: this.start.bind(this),
	            });
	            targetEvents.push({
	                name: 'touchmove',
	                handler: this.move.bind(this),
	            }, {
	                name: 'touchend',
	                handler: this.end.bind(this),
	            }, {
	                name: 'touchcancel',
	                handler: this.end.bind(this),
	            });
	        }
	        if (shouldRegisterMouse) {
	            wrapperEvents.push({
	                name: 'mousedown',
	                handler: this.start.bind(this),
	            });
	            targetEvents.push({
	                name: 'mousemove',
	                handler: this.move.bind(this),
	            }, {
	                name: 'mouseup',
	                handler: this.end.bind(this),
	            });
	        }
	        this.wrapperEventRegister = new EventRegister(wrapper, wrapperEvents);
	        this.targetEventRegister = new EventRegister(target, targetEvents);
	    };
	    ActionsHandler.prototype.beforeHandler = function (e, type) {
	        var _a = this.options, preventDefault = _a.preventDefault, stopPropagation = _a.stopPropagation, preventDefaultException = _a.preventDefaultException;
	        var preventDefaultConditions = {
	            start: function () {
	                return (preventDefault &&
	                    !preventDefaultExceptionFn(e.target, preventDefaultException));
	            },
	            end: function () {
	                return (preventDefault &&
	                    !preventDefaultExceptionFn(e.target, preventDefaultException));
	            },
	            move: function () {
	                return preventDefault;
	            },
	        };
	        if (preventDefaultConditions[type]()) {
	            e.preventDefault();
	        }
	        if (stopPropagation) {
	            e.stopPropagation();
	        }
	    };
	    ActionsHandler.prototype.setInitiated = function (type) {
	        if (type === void 0) { type = 0; }
	        this.initiated = type;
	    };
	    ActionsHandler.prototype.start = function (e) {
	        var _eventType = eventTypeMap[e.type];
	        if (this.initiated && this.initiated !== _eventType) {
	            return;
	        }
	        this.setInitiated(_eventType);
	        // if textarea or other html tags in options.tagException is manipulated
	        // do not make bs scroll
	        if (tagExceptionFn(e.target, this.options.tagException)) {
	            this.setInitiated();
	            return;
	        }
	        // only allow mouse left button
	        if (_eventType === 2 /* Mouse */ && e.button !== 0 /* Left */)
	            return;
	        if (this.hooks.trigger(this.hooks.eventTypes.beforeStart, e)) {
	            return;
	        }
	        this.beforeHandler(e, 'start');
	        var point = (e.touches ? e.touches[0] : e);
	        this.pointX = point.pageX;
	        this.pointY = point.pageY;
	        this.hooks.trigger(this.hooks.eventTypes.start, e);
	    };
	    ActionsHandler.prototype.move = function (e) {
	        if (eventTypeMap[e.type] !== this.initiated) {
	            return;
	        }
	        this.beforeHandler(e, 'move');
	        var point = (e.touches ? e.touches[0] : e);
	        var deltaX = point.pageX - this.pointX;
	        var deltaY = point.pageY - this.pointY;
	        this.pointX = point.pageX;
	        this.pointY = point.pageY;
	        if (this.hooks.trigger(this.hooks.eventTypes.move, {
	            deltaX: deltaX,
	            deltaY: deltaY,
	            e: e,
	        })) {
	            return;
	        }
	        // auto end when out of viewport
	        var scrollLeft = document.documentElement.scrollLeft ||
	            window.pageXOffset ||
	            document.body.scrollLeft;
	        var scrollTop = document.documentElement.scrollTop ||
	            window.pageYOffset ||
	            document.body.scrollTop;
	        var pX = this.pointX - scrollLeft;
	        var pY = this.pointY - scrollTop;
	        var autoEndDistance = this.options.autoEndDistance;
	        if (pX > document.documentElement.clientWidth - autoEndDistance ||
	            pY > document.documentElement.clientHeight - autoEndDistance ||
	            pX < autoEndDistance ||
	            pY < autoEndDistance) {
	            this.end(e);
	        }
	    };
	    ActionsHandler.prototype.end = function (e) {
	        if (eventTypeMap[e.type] !== this.initiated) {
	            return;
	        }
	        this.setInitiated();
	        this.beforeHandler(e, 'end');
	        this.hooks.trigger(this.hooks.eventTypes.end, e);
	    };
	    ActionsHandler.prototype.click = function (e) {
	        this.hooks.trigger(this.hooks.eventTypes.click, e);
	    };
	    ActionsHandler.prototype.setContent = function (content) {
	        if (content !== this.wrapper) {
	            this.wrapper = content;
	            this.rebindDOMEvents();
	        }
	    };
	    ActionsHandler.prototype.rebindDOMEvents = function () {
	        this.wrapperEventRegister.destroy();
	        this.targetEventRegister.destroy();
	        this.handleDOMEvents();
	    };
	    ActionsHandler.prototype.destroy = function () {
	        this.wrapperEventRegister.destroy();
	        this.targetEventRegister.destroy();
	        this.hooks.destroy();
	    };
	    return ActionsHandler;
	}());

	var translaterMetaData = {
	    x: ['translateX', 'px'],
	    y: ['translateY', 'px'],
	};
	var Translater = /** @class */ (function () {
	    function Translater(content) {
	        this.setContent(content);
	        this.hooks = new EventEmitter(['beforeTranslate', 'translate']);
	    }
	    Translater.prototype.getComputedPosition = function () {
	        var cssStyle = window.getComputedStyle(this.content, null);
	        var matrix = cssStyle[style.transform].split(')')[0].split(', ');
	        var x = +(matrix[12] || matrix[4]) || 0;
	        var y = +(matrix[13] || matrix[5]) || 0;
	        return {
	            x: x,
	            y: y,
	        };
	    };
	    Translater.prototype.translate = function (point) {
	        var transformStyle = [];
	        Object.keys(point).forEach(function (key) {
	            if (!translaterMetaData[key]) {
	                return;
	            }
	            var transformFnName = translaterMetaData[key][0];
	            if (transformFnName) {
	                var transformFnArgUnit = translaterMetaData[key][1];
	                var transformFnArg = point[key];
	                transformStyle.push(transformFnName + "(" + transformFnArg + transformFnArgUnit + ")");
	            }
	        });
	        this.hooks.trigger(this.hooks.eventTypes.beforeTranslate, transformStyle, point);
	        this.style[style.transform] = transformStyle.join(' ');
	        this.hooks.trigger(this.hooks.eventTypes.translate, point);
	    };
	    Translater.prototype.setContent = function (content) {
	        if (this.content !== content) {
	            this.content = content;
	            this.style = content.style;
	        }
	    };
	    Translater.prototype.destroy = function () {
	        this.hooks.destroy();
	    };
	    return Translater;
	}());

	var Base = /** @class */ (function () {
	    function Base(content, translater, options) {
	        this.translater = translater;
	        this.options = options;
	        this.timer = 0;
	        this.hooks = new EventEmitter([
	            'move',
	            'end',
	            'beforeForceStop',
	            'forceStop',
	            'callStop',
	            'time',
	            'timeFunction',
	        ]);
	        this.setContent(content);
	    }
	    Base.prototype.translate = function (endPoint) {
	        this.translater.translate(endPoint);
	    };
	    Base.prototype.setPending = function (pending) {
	        this.pending = pending;
	    };
	    Base.prototype.setForceStopped = function (forceStopped) {
	        this.forceStopped = forceStopped;
	    };
	    Base.prototype.setCallStop = function (called) {
	        this.callStopWhenPending = called;
	    };
	    Base.prototype.setContent = function (content) {
	        if (this.content !== content) {
	            this.content = content;
	            this.style = content.style;
	            this.stop();
	        }
	    };
	    Base.prototype.clearTimer = function () {
	        if (this.timer) {
	            cancelAnimationFrame(this.timer);
	            this.timer = 0;
	        }
	    };
	    Base.prototype.destroy = function () {
	        this.hooks.destroy();
	        cancelAnimationFrame(this.timer);
	    };
	    return Base;
	}());

	// iOS 13.6 - 14.x, window.getComputedStyle sometimes will get wrong transform value
	// when bs use transition mode
	// eg: translateY -100px -> -200px, when the last frame which is about to scroll to -200px
	// window.getComputedStyle(this.content) will calculate transformY to be -100px(startPoint)
	// it is weird
	// so we should validate position caculated by 'window.getComputedStyle'
	var isValidPostion = function (startPoint, endPoint, currentPos, prePos) {
	    var computeDirection = function (endValue, startValue) {
	        var delta = endValue - startValue;
	        var direction = delta > 0
	            ? -1 /* Negative */
	            : delta < 0
	                ? 1 /* Positive */
	                : 0 /* Default */;
	        return direction;
	    };
	    var directionX = computeDirection(endPoint.x, startPoint.x);
	    var directionY = computeDirection(endPoint.y, startPoint.y);
	    var deltaX = currentPos.x - prePos.x;
	    var deltaY = currentPos.y - prePos.y;
	    return directionX * deltaX <= 0 && directionY * deltaY <= 0;
	};

	var Transition = /** @class */ (function (_super) {
	    __extends(Transition, _super);
	    function Transition() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    Transition.prototype.startProbe = function (startPoint, endPoint) {
	        var _this = this;
	        var prePos = startPoint;
	        var probe = function () {
	            var pos = _this.translater.getComputedPosition();
	            if (isValidPostion(startPoint, endPoint, pos, prePos)) {
	                _this.hooks.trigger(_this.hooks.eventTypes.move, pos);
	            }
	            // call bs.stop() should not dispatch end hook again.
	            // forceStop hook will do this.
	            /* istanbul ignore if  */
	            if (!_this.pending) {
	                if (_this.callStopWhenPending) {
	                    _this.callStopWhenPending = false;
	                }
	                else {
	                    // transition ends should dispatch end hook.
	                    _this.hooks.trigger(_this.hooks.eventTypes.end, pos);
	                }
	            }
	            prePos = pos;
	            if (_this.pending) {
	                _this.timer = requestAnimationFrame(probe);
	            }
	        };
	        // when manually call bs.stop(), then bs.scrollTo()
	        // we should reset callStopWhenPending to dispatch end hook
	        if (this.callStopWhenPending) {
	            this.setCallStop(false);
	        }
	        cancelAnimationFrame(this.timer);
	        probe();
	    };
	    Transition.prototype.transitionTime = function (time) {
	        if (time === void 0) { time = 0; }
	        this.style[style.transitionDuration] = time + 'ms';
	        this.hooks.trigger(this.hooks.eventTypes.time, time);
	    };
	    Transition.prototype.transitionTimingFunction = function (easing) {
	        this.style[style.transitionTimingFunction] = easing;
	        this.hooks.trigger(this.hooks.eventTypes.timeFunction, easing);
	    };
	    Transition.prototype.transitionProperty = function () {
	        this.style[style.transitionProperty] = style.transform;
	    };
	    Transition.prototype.move = function (startPoint, endPoint, time, easingFn) {
	        this.setPending(time > 0);
	        this.transitionTimingFunction(easingFn);
	        this.transitionProperty();
	        this.transitionTime(time);
	        this.translate(endPoint);
	        var isRealtimeProbeType = this.options.probeType === 3 /* Realtime */;
	        if (time && isRealtimeProbeType) {
	            this.startProbe(startPoint, endPoint);
	        }
	        // if we change content's transformY in a tick
	        // such as: 0 -> 50px -> 0
	        // transitionend will not be triggered
	        // so we forceupdate by reflow
	        if (!time) {
	            this._reflow = this.content.offsetHeight;
	            if (isRealtimeProbeType) {
	                this.hooks.trigger(this.hooks.eventTypes.move, endPoint);
	            }
	            this.hooks.trigger(this.hooks.eventTypes.end, endPoint);
	        }
	    };
	    Transition.prototype.doStop = function () {
	        var pending = this.pending;
	        this.setForceStopped(false);
	        this.setCallStop(false);
	        // still in transition
	        if (pending) {
	            this.setPending(false);
	            cancelAnimationFrame(this.timer);
	            var _a = this.translater.getComputedPosition(), x = _a.x, y = _a.y;
	            this.transitionTime();
	            this.translate({ x: x, y: y });
	            this.setForceStopped(true);
	            this.setCallStop(true);
	            this.hooks.trigger(this.hooks.eventTypes.forceStop, { x: x, y: y });
	        }
	        return pending;
	    };
	    Transition.prototype.stop = function () {
	        var stopFromTransition = this.doStop();
	        if (stopFromTransition) {
	            this.hooks.trigger(this.hooks.eventTypes.callStop);
	        }
	    };
	    return Transition;
	}(Base));

	var Animation = /** @class */ (function (_super) {
	    __extends(Animation, _super);
	    function Animation() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    Animation.prototype.move = function (startPoint, endPoint, time, easingFn) {
	        // time is 0
	        if (!time) {
	            this.translate(endPoint);
	            if (this.options.probeType === 3 /* Realtime */) {
	                this.hooks.trigger(this.hooks.eventTypes.move, endPoint);
	            }
	            this.hooks.trigger(this.hooks.eventTypes.end, endPoint);
	            return;
	        }
	        this.animate(startPoint, endPoint, time, easingFn);
	    };
	    Animation.prototype.animate = function (startPoint, endPoint, duration, easingFn) {
	        var _this = this;
	        var startTime = getNow();
	        var destTime = startTime + duration;
	        var isRealtimeProbeType = this.options.probeType === 3 /* Realtime */;
	        var step = function () {
	            var now = getNow();
	            // js animation end
	            if (now >= destTime) {
	                _this.translate(endPoint);
	                if (isRealtimeProbeType) {
	                    _this.hooks.trigger(_this.hooks.eventTypes.move, endPoint);
	                }
	                _this.hooks.trigger(_this.hooks.eventTypes.end, endPoint);
	                return;
	            }
	            now = (now - startTime) / duration;
	            var easing = easingFn(now);
	            var newPoint = {};
	            Object.keys(endPoint).forEach(function (key) {
	                var startValue = startPoint[key];
	                var endValue = endPoint[key];
	                newPoint[key] = (endValue - startValue) * easing + startValue;
	            });
	            _this.translate(newPoint);
	            if (isRealtimeProbeType) {
	                _this.hooks.trigger(_this.hooks.eventTypes.move, newPoint);
	            }
	            if (_this.pending) {
	                _this.timer = requestAnimationFrame(step);
	            }
	            // call bs.stop() should not dispatch end hook again.
	            // forceStop hook will do this.
	            /* istanbul ignore if  */
	            if (!_this.pending) {
	                if (_this.callStopWhenPending) {
	                    _this.callStopWhenPending = false;
	                }
	                else {
	                    // raf ends should dispatch end hook.
	                    _this.hooks.trigger(_this.hooks.eventTypes.end, endPoint);
	                }
	            }
	        };
	        this.setPending(true);
	        // when manually call bs.stop(), then bs.scrollTo()
	        // we should reset callStopWhenPending to dispatch end hook
	        if (this.callStopWhenPending) {
	            this.setCallStop(false);
	        }
	        cancelAnimationFrame(this.timer);
	        step();
	    };
	    Animation.prototype.doStop = function () {
	        var pending = this.pending;
	        this.setForceStopped(false);
	        this.setCallStop(false);
	        // still in requestFrameAnimation
	        if (pending) {
	            this.setPending(false);
	            cancelAnimationFrame(this.timer);
	            var pos = this.translater.getComputedPosition();
	            this.setForceStopped(true);
	            this.setCallStop(true);
	            this.hooks.trigger(this.hooks.eventTypes.forceStop, pos);
	        }
	        return pending;
	    };
	    Animation.prototype.stop = function () {
	        var stopFromAnimation = this.doStop();
	        if (stopFromAnimation) {
	            this.hooks.trigger(this.hooks.eventTypes.callStop);
	        }
	    };
	    return Animation;
	}(Base));

	function createAnimater(element, translater, options) {
	    var useTransition = options.useTransition;
	    var animaterOptions = {};
	    Object.defineProperty(animaterOptions, 'probeType', {
	        enumerable: true,
	        configurable: false,
	        get: function () {
	            return options.probeType;
	        },
	    });
	    if (useTransition) {
	        return new Transition(element, translater, animaterOptions);
	    }
	    else {
	        return new Animation(element, translater, animaterOptions);
	    }
	}

	var Behavior = /** @class */ (function () {
	    function Behavior(wrapper, content, options) {
	        this.wrapper = wrapper;
	        this.options = options;
	        this.hooks = new EventEmitter([
	            'beforeComputeBoundary',
	            'computeBoundary',
	            'momentum',
	            'end',
	            'ignoreHasScroll'
	        ]);
	        this.refresh(content);
	    }
	    Behavior.prototype.start = function () {
	        this.dist = 0;
	        this.setMovingDirection(0 /* Default */);
	        this.setDirection(0 /* Default */);
	    };
	    Behavior.prototype.move = function (delta) {
	        delta = this.hasScroll ? delta : 0;
	        this.setMovingDirection(delta);
	        return this.performDampingAlgorithm(delta, this.options.outOfBoundaryDampingFactor);
	    };
	    Behavior.prototype.setMovingDirection = function (delta) {
	        this.movingDirection =
	            delta > 0
	                ? -1 /* Negative */
	                : delta < 0
	                    ? 1 /* Positive */
	                    : 0 /* Default */;
	    };
	    Behavior.prototype.setDirection = function (delta) {
	        this.direction =
	            delta > 0
	                ? -1 /* Negative */
	                : delta < 0
	                    ? 1 /* Positive */
	                    : 0 /* Default */;
	    };
	    Behavior.prototype.performDampingAlgorithm = function (delta, dampingFactor) {
	        var newPos = this.currentPos + delta;
	        // Slow down or stop if outside of the boundaries
	        if (newPos > this.minScrollPos || newPos < this.maxScrollPos) {
	            if ((newPos > this.minScrollPos && this.options.bounces[0]) ||
	                (newPos < this.maxScrollPos && this.options.bounces[1])) {
	                newPos = this.currentPos + delta * dampingFactor;
	            }
	            else {
	                newPos =
	                    newPos > this.minScrollPos ? this.minScrollPos : this.maxScrollPos;
	            }
	        }
	        return newPos;
	    };
	    Behavior.prototype.end = function (duration) {
	        var momentumInfo = {
	            duration: 0
	        };
	        var absDist = Math.abs(this.currentPos - this.startPos);
	        // start momentum animation if needed
	        if (this.options.momentum &&
	            duration < this.options.momentumLimitTime &&
	            absDist > this.options.momentumLimitDistance) {
	            var wrapperSize = (this.direction === -1 /* Negative */ && this.options.bounces[0]) ||
	                (this.direction === 1 /* Positive */ && this.options.bounces[1])
	                ? this.wrapperSize
	                : 0;
	            momentumInfo = this.hasScroll
	                ? this.momentum(this.currentPos, this.startPos, duration, this.maxScrollPos, this.minScrollPos, wrapperSize, this.options)
	                : { destination: this.currentPos, duration: 0 };
	        }
	        else {
	            this.hooks.trigger(this.hooks.eventTypes.end, momentumInfo);
	        }
	        return momentumInfo;
	    };
	    Behavior.prototype.momentum = function (current, start, time, lowerMargin, upperMargin, wrapperSize, options) {
	        if (options === void 0) { options = this.options; }
	        var distance = current - start;
	        var speed = Math.abs(distance) / time;
	        var deceleration = options.deceleration, swipeBounceTime = options.swipeBounceTime, swipeTime = options.swipeTime;
	        var duration = Math.min(swipeTime, (speed * 2) / deceleration);
	        var momentumData = {
	            destination: current + ((speed * speed) / deceleration) * (distance < 0 ? -1 : 1),
	            duration: duration,
	            rate: 15
	        };
	        this.hooks.trigger(this.hooks.eventTypes.momentum, momentumData, distance);
	        if (momentumData.destination < lowerMargin) {
	            momentumData.destination = wrapperSize
	                ? Math.max(lowerMargin - wrapperSize / 4, lowerMargin - (wrapperSize / momentumData.rate) * speed)
	                : lowerMargin;
	            momentumData.duration = swipeBounceTime;
	        }
	        else if (momentumData.destination > upperMargin) {
	            momentumData.destination = wrapperSize
	                ? Math.min(upperMargin + wrapperSize / 4, upperMargin + (wrapperSize / momentumData.rate) * speed)
	                : upperMargin;
	            momentumData.duration = swipeBounceTime;
	        }
	        momentumData.destination = Math.round(momentumData.destination);
	        return momentumData;
	    };
	    Behavior.prototype.updateDirection = function () {
	        var absDist = this.currentPos - this.absStartPos;
	        this.setDirection(absDist);
	    };
	    Behavior.prototype.refresh = function (content) {
	        var _a = this.options.rect, size = _a.size, position = _a.position;
	        var isWrapperStatic = window.getComputedStyle(this.wrapper, null).position === 'static';
	        // Force reflow
	        var wrapperRect = getRect(this.wrapper);
	        // use client is more fair than offset
	        this.wrapperSize = this.wrapper[size === 'width' ? 'clientWidth' : 'clientHeight'];
	        this.setContent(content);
	        var contentRect = getRect(this.content);
	        this.contentSize = contentRect[size];
	        this.relativeOffset = contentRect[position];
	        /* istanbul ignore if  */
	        if (isWrapperStatic) {
	            this.relativeOffset -= wrapperRect[position];
	        }
	        this.computeBoundary();
	        this.setDirection(0 /* Default */);
	    };
	    Behavior.prototype.setContent = function (content) {
	        if (content !== this.content) {
	            this.content = content;
	            this.resetState();
	        }
	    };
	    Behavior.prototype.resetState = function () {
	        this.currentPos = 0;
	        this.startPos = 0;
	        this.dist = 0;
	        this.setDirection(0 /* Default */);
	        this.setMovingDirection(0 /* Default */);
	        this.resetStartPos();
	    };
	    Behavior.prototype.computeBoundary = function () {
	        this.hooks.trigger(this.hooks.eventTypes.beforeComputeBoundary);
	        var boundary = {
	            minScrollPos: 0,
	            maxScrollPos: this.wrapperSize - this.contentSize
	        };
	        if (boundary.maxScrollPos < 0) {
	            boundary.maxScrollPos -= this.relativeOffset;
	            if (this.options.specifiedIndexAsContent === 0) {
	                boundary.minScrollPos = -this.relativeOffset;
	            }
	        }
	        this.hooks.trigger(this.hooks.eventTypes.computeBoundary, boundary);
	        this.minScrollPos = boundary.minScrollPos;
	        this.maxScrollPos = boundary.maxScrollPos;
	        this.hasScroll =
	            this.options.scrollable && this.maxScrollPos < this.minScrollPos;
	        if (!this.hasScroll && this.minScrollPos < this.maxScrollPos) {
	            this.maxScrollPos = this.minScrollPos;
	            this.contentSize = this.wrapperSize;
	        }
	    };
	    Behavior.prototype.updatePosition = function (pos) {
	        this.currentPos = pos;
	    };
	    Behavior.prototype.getCurrentPos = function () {
	        return this.currentPos;
	    };
	    Behavior.prototype.checkInBoundary = function () {
	        var position = this.adjustPosition(this.currentPos);
	        var inBoundary = position === this.getCurrentPos();
	        return {
	            position: position,
	            inBoundary: inBoundary
	        };
	    };
	    // adjust position when out of boundary
	    Behavior.prototype.adjustPosition = function (pos) {
	        if (!this.hasScroll &&
	            !this.hooks.trigger(this.hooks.eventTypes.ignoreHasScroll)) {
	            pos = this.minScrollPos;
	        }
	        else if (pos > this.minScrollPos) {
	            pos = this.minScrollPos;
	        }
	        else if (pos < this.maxScrollPos) {
	            pos = this.maxScrollPos;
	        }
	        return pos;
	    };
	    Behavior.prototype.updateStartPos = function () {
	        this.startPos = this.currentPos;
	    };
	    Behavior.prototype.updateAbsStartPos = function () {
	        this.absStartPos = this.currentPos;
	    };
	    Behavior.prototype.resetStartPos = function () {
	        this.updateStartPos();
	        this.updateAbsStartPos();
	    };
	    Behavior.prototype.getAbsDist = function (delta) {
	        this.dist += delta;
	        return Math.abs(this.dist);
	    };
	    Behavior.prototype.destroy = function () {
	        this.hooks.destroy();
	    };
	    return Behavior;
	}());

	var _a, _b, _c, _d;
	var PassthroughHandlers = (_a = {},
	    _a["yes" /* Yes */] = function (e) {
	        return true;
	    },
	    _a["no" /* No */] = function (e) {
	        maybePrevent(e);
	        return false;
	    },
	    _a);
	var DirectionMap = (_b = {},
	    _b["horizontal" /* Horizontal */] = (_c = {},
	        _c["yes" /* Yes */] = "horizontal" /* Horizontal */,
	        _c["no" /* No */] = "vertical" /* Vertical */,
	        _c),
	    _b["vertical" /* Vertical */] = (_d = {},
	        _d["yes" /* Yes */] = "vertical" /* Vertical */,
	        _d["no" /* No */] = "horizontal" /* Horizontal */,
	        _d),
	    _b);
	var DirectionLockAction = /** @class */ (function () {
	    function DirectionLockAction(directionLockThreshold, freeScroll, eventPassthrough) {
	        this.directionLockThreshold = directionLockThreshold;
	        this.freeScroll = freeScroll;
	        this.eventPassthrough = eventPassthrough;
	        this.reset();
	    }
	    DirectionLockAction.prototype.reset = function () {
	        this.directionLocked = "" /* Default */;
	    };
	    DirectionLockAction.prototype.checkMovingDirection = function (absDistX, absDistY, e) {
	        this.computeDirectionLock(absDistX, absDistY);
	        return this.handleEventPassthrough(e);
	    };
	    DirectionLockAction.prototype.adjustDelta = function (deltaX, deltaY) {
	        if (this.directionLocked === "horizontal" /* Horizontal */) {
	            deltaY = 0;
	        }
	        else if (this.directionLocked === "vertical" /* Vertical */) {
	            deltaX = 0;
	        }
	        return {
	            deltaX: deltaX,
	            deltaY: deltaY,
	        };
	    };
	    DirectionLockAction.prototype.computeDirectionLock = function (absDistX, absDistY) {
	        // If you are scrolling in one direction, lock it
	        if (this.directionLocked === "" /* Default */ && !this.freeScroll) {
	            if (absDistX > absDistY + this.directionLockThreshold) {
	                this.directionLocked = "horizontal" /* Horizontal */; // lock horizontally
	            }
	            else if (absDistY >= absDistX + this.directionLockThreshold) {
	                this.directionLocked = "vertical" /* Vertical */; // lock vertically
	            }
	            else {
	                this.directionLocked = "none" /* None */; // no lock
	            }
	        }
	    };
	    DirectionLockAction.prototype.handleEventPassthrough = function (e) {
	        var handleMap = DirectionMap[this.directionLocked];
	        if (handleMap) {
	            if (this.eventPassthrough === handleMap["yes" /* Yes */]) {
	                return PassthroughHandlers["yes" /* Yes */](e);
	            }
	            else if (this.eventPassthrough === handleMap["no" /* No */]) {
	                return PassthroughHandlers["no" /* No */](e);
	            }
	        }
	        return false;
	    };
	    return DirectionLockAction;
	}());

	var applyQuadrantTransformation = function (deltaX, deltaY, quadrant) {
	    if (quadrant === 2 /* Second */) {
	        return [deltaY, -deltaX];
	    }
	    else if (quadrant === 3 /* Third */) {
	        return [-deltaX, -deltaY];
	    }
	    else if (quadrant === 4 /* Forth */) {
	        return [-deltaY, deltaX];
	    }
	    else {
	        return [deltaX, deltaY];
	    }
	};
	var ScrollerActions = /** @class */ (function () {
	    function ScrollerActions(scrollBehaviorX, scrollBehaviorY, actionsHandler, animater, options) {
	        this.hooks = new EventEmitter([
	            'start',
	            'beforeMove',
	            'scrollStart',
	            'scroll',
	            'beforeEnd',
	            'end',
	            'scrollEnd',
	            'contentNotMoved',
	            'detectMovingDirection',
	            'coordinateTransformation',
	        ]);
	        this.scrollBehaviorX = scrollBehaviorX;
	        this.scrollBehaviorY = scrollBehaviorY;
	        this.actionsHandler = actionsHandler;
	        this.animater = animater;
	        this.options = options;
	        this.directionLockAction = new DirectionLockAction(options.directionLockThreshold, options.freeScroll, options.eventPassthrough);
	        this.enabled = true;
	        this.bindActionsHandler();
	    }
	    ScrollerActions.prototype.bindActionsHandler = function () {
	        var _this = this;
	        // [mouse|touch]start event
	        this.actionsHandler.hooks.on(this.actionsHandler.hooks.eventTypes.start, function (e) {
	            if (!_this.enabled)
	                return true;
	            return _this.handleStart(e);
	        });
	        // [mouse|touch]move event
	        this.actionsHandler.hooks.on(this.actionsHandler.hooks.eventTypes.move, function (_a) {
	            var deltaX = _a.deltaX, deltaY = _a.deltaY, e = _a.e;
	            if (!_this.enabled)
	                return true;
	            var _b = applyQuadrantTransformation(deltaX, deltaY, _this.options.quadrant), transformateDeltaX = _b[0], transformateDeltaY = _b[1];
	            var transformateDeltaData = {
	                deltaX: transformateDeltaX,
	                deltaY: transformateDeltaY,
	            };
	            _this.hooks.trigger(_this.hooks.eventTypes.coordinateTransformation, transformateDeltaData);
	            return _this.handleMove(transformateDeltaData.deltaX, transformateDeltaData.deltaY, e);
	        });
	        // [mouse|touch]end event
	        this.actionsHandler.hooks.on(this.actionsHandler.hooks.eventTypes.end, function (e) {
	            if (!_this.enabled)
	                return true;
	            return _this.handleEnd(e);
	        });
	        // click
	        this.actionsHandler.hooks.on(this.actionsHandler.hooks.eventTypes.click, function (e) {
	            // handle native click event
	            if (_this.enabled && !e._constructed) {
	                _this.handleClick(e);
	            }
	        });
	    };
	    ScrollerActions.prototype.handleStart = function (e) {
	        var timestamp = getNow();
	        this.fingerMoved = false;
	        this.contentMoved = false;
	        this.startTime = timestamp;
	        this.directionLockAction.reset();
	        this.scrollBehaviorX.start();
	        this.scrollBehaviorY.start();
	        // force stopping last transition or animation
	        this.animater.doStop();
	        this.scrollBehaviorX.resetStartPos();
	        this.scrollBehaviorY.resetStartPos();
	        this.hooks.trigger(this.hooks.eventTypes.start, e);
	    };
	    ScrollerActions.prototype.handleMove = function (deltaX, deltaY, e) {
	        if (this.hooks.trigger(this.hooks.eventTypes.beforeMove, e)) {
	            return;
	        }
	        var absDistX = this.scrollBehaviorX.getAbsDist(deltaX);
	        var absDistY = this.scrollBehaviorY.getAbsDist(deltaY);
	        var timestamp = getNow();
	        // We need to move at least momentumLimitDistance pixels
	        // for the scrolling to initiate
	        if (this.checkMomentum(absDistX, absDistY, timestamp)) {
	            return true;
	        }
	        if (this.directionLockAction.checkMovingDirection(absDistX, absDistY, e)) {
	            this.actionsHandler.setInitiated();
	            return true;
	        }
	        var delta = this.directionLockAction.adjustDelta(deltaX, deltaY);
	        var prevX = this.scrollBehaviorX.getCurrentPos();
	        var newX = this.scrollBehaviorX.move(delta.deltaX);
	        var prevY = this.scrollBehaviorY.getCurrentPos();
	        var newY = this.scrollBehaviorY.move(delta.deltaY);
	        if (this.hooks.trigger(this.hooks.eventTypes.detectMovingDirection)) {
	            return;
	        }
	        if (!this.fingerMoved) {
	            this.fingerMoved = true;
	        }
	        var positionChanged = newX !== prevX || newY !== prevY;
	        if (!this.contentMoved && !positionChanged) {
	            this.hooks.trigger(this.hooks.eventTypes.contentNotMoved);
	        }
	        if (!this.contentMoved && positionChanged) {
	            this.contentMoved = true;
	            this.hooks.trigger(this.hooks.eventTypes.scrollStart);
	        }
	        if (this.contentMoved && positionChanged) {
	            this.animater.translate({
	                x: newX,
	                y: newY,
	            });
	            this.dispatchScroll(timestamp);
	        }
	    };
	    ScrollerActions.prototype.dispatchScroll = function (timestamp) {
	        // dispatch scroll in interval time
	        if (timestamp - this.startTime > this.options.momentumLimitTime) {
	            // refresh time and starting position to initiate a momentum
	            this.startTime = timestamp;
	            this.scrollBehaviorX.updateStartPos();
	            this.scrollBehaviorY.updateStartPos();
	            if (this.options.probeType === 1 /* Throttle */) {
	                this.hooks.trigger(this.hooks.eventTypes.scroll, this.getCurrentPos());
	            }
	        }
	        // dispatch scroll all the time
	        if (this.options.probeType > 1 /* Throttle */) {
	            this.hooks.trigger(this.hooks.eventTypes.scroll, this.getCurrentPos());
	        }
	    };
	    ScrollerActions.prototype.checkMomentum = function (absDistX, absDistY, timestamp) {
	        return (timestamp - this.endTime > this.options.momentumLimitTime &&
	            absDistY < this.options.momentumLimitDistance &&
	            absDistX < this.options.momentumLimitDistance);
	    };
	    ScrollerActions.prototype.handleEnd = function (e) {
	        if (this.hooks.trigger(this.hooks.eventTypes.beforeEnd, e)) {
	            return;
	        }
	        var currentPos = this.getCurrentPos();
	        this.scrollBehaviorX.updateDirection();
	        this.scrollBehaviorY.updateDirection();
	        if (this.hooks.trigger(this.hooks.eventTypes.end, e, currentPos)) {
	            return true;
	        }
	        currentPos = this.ensureIntegerPos(currentPos);
	        this.animater.translate(currentPos);
	        this.endTime = getNow();
	        var duration = this.endTime - this.startTime;
	        this.hooks.trigger(this.hooks.eventTypes.scrollEnd, currentPos, duration);
	    };
	    ScrollerActions.prototype.ensureIntegerPos = function (currentPos) {
	        this.ensuringInteger = true;
	        var x = currentPos.x, y = currentPos.y;
	        var _a = this.scrollBehaviorX, minScrollPosX = _a.minScrollPos, maxScrollPosX = _a.maxScrollPos;
	        var _b = this.scrollBehaviorY, minScrollPosY = _b.minScrollPos, maxScrollPosY = _b.maxScrollPos;
	        x = x > 0 ? Math.ceil(x) : Math.floor(x);
	        y = y > 0 ? Math.ceil(y) : Math.floor(y);
	        x = between(x, maxScrollPosX, minScrollPosX);
	        y = between(y, maxScrollPosY, minScrollPosY);
	        return { x: x, y: y };
	    };
	    ScrollerActions.prototype.handleClick = function (e) {
	        if (!preventDefaultExceptionFn(e.target, this.options.preventDefaultException)) {
	            maybePrevent(e);
	            e.stopPropagation();
	        }
	    };
	    ScrollerActions.prototype.getCurrentPos = function () {
	        return {
	            x: this.scrollBehaviorX.getCurrentPos(),
	            y: this.scrollBehaviorY.getCurrentPos(),
	        };
	    };
	    ScrollerActions.prototype.refresh = function () {
	        this.endTime = 0;
	    };
	    ScrollerActions.prototype.destroy = function () {
	        this.hooks.destroy();
	    };
	    return ScrollerActions;
	}());

	function createActionsHandlerOptions(bsOptions) {
	    var options = [
	        'click',
	        'bindToWrapper',
	        'disableMouse',
	        'disableTouch',
	        'preventDefault',
	        'stopPropagation',
	        'tagException',
	        'preventDefaultException',
	        'autoEndDistance',
	    ].reduce(function (prev, cur) {
	        prev[cur] = bsOptions[cur];
	        return prev;
	    }, {});
	    return options;
	}
	function createBehaviorOptions(bsOptions, extraProp, bounces, rect) {
	    var options = [
	        'momentum',
	        'momentumLimitTime',
	        'momentumLimitDistance',
	        'deceleration',
	        'swipeBounceTime',
	        'swipeTime',
	        'outOfBoundaryDampingFactor',
	        'specifiedIndexAsContent',
	    ].reduce(function (prev, cur) {
	        prev[cur] = bsOptions[cur];
	        return prev;
	    }, {});
	    // add extra property
	    options.scrollable = !!bsOptions[extraProp];
	    options.bounces = bounces;
	    options.rect = rect;
	    return options;
	}

	function bubbling(source, target, events) {
	    events.forEach(function (event) {
	        var sourceEvent;
	        var targetEvent;
	        if (typeof event === 'string') {
	            sourceEvent = targetEvent = event;
	        }
	        else {
	            sourceEvent = event.source;
	            targetEvent = event.target;
	        }
	        source.on(sourceEvent, function () {
	            var args = [];
	            for (var _i = 0; _i < arguments.length; _i++) {
	                args[_i] = arguments[_i];
	            }
	            return target.trigger.apply(target, __spreadArrays([targetEvent], args));
	        });
	    });
	}

	function isSamePoint(startPoint, endPoint) {
	    // keys of startPoint and endPoint should be equal
	    var keys = Object.keys(startPoint);
	    for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
	        var key = keys_1[_i];
	        if (startPoint[key] !== endPoint[key])
	            return false;
	    }
	    return true;
	}

	var MIN_SCROLL_DISTANCE = 1;
	var Scroller = /** @class */ (function () {
	    function Scroller(wrapper, content, options) {
	        this.wrapper = wrapper;
	        this.content = content;
	        this.resizeTimeout = 0;
	        this.hooks = new EventEmitter([
	            'beforeStart',
	            'beforeMove',
	            'beforeScrollStart',
	            'scrollStart',
	            'scroll',
	            'beforeEnd',
	            'scrollEnd',
	            'resize',
	            'touchEnd',
	            'end',
	            'flick',
	            'scrollCancel',
	            'momentum',
	            'scrollTo',
	            'minDistanceScroll',
	            'scrollToElement',
	            'beforeRefresh',
	        ]);
	        this.options = options;
	        var _a = this.options.bounce, left = _a.left, right = _a.right, top = _a.top, bottom = _a.bottom;
	        // direction X
	        this.scrollBehaviorX = new Behavior(wrapper, content, createBehaviorOptions(options, 'scrollX', [left, right], {
	            size: 'width',
	            position: 'left',
	        }));
	        // direction Y
	        this.scrollBehaviorY = new Behavior(wrapper, content, createBehaviorOptions(options, 'scrollY', [top, bottom], {
	            size: 'height',
	            position: 'top',
	        }));
	        this.translater = new Translater(this.content);
	        this.animater = createAnimater(this.content, this.translater, this.options);
	        this.actionsHandler = new ActionsHandler(this.options.bindToTarget ? this.content : wrapper, createActionsHandlerOptions(this.options));
	        this.actions = new ScrollerActions(this.scrollBehaviorX, this.scrollBehaviorY, this.actionsHandler, this.animater, this.options);
	        var resizeHandler = this.resize.bind(this);
	        this.resizeRegister = new EventRegister(window, [
	            {
	                name: 'orientationchange',
	                handler: resizeHandler,
	            },
	            {
	                name: 'resize',
	                handler: resizeHandler,
	            },
	        ]);
	        this.registerTransitionEnd();
	        this.init();
	    }
	    Scroller.prototype.init = function () {
	        var _this = this;
	        this.bindTranslater();
	        this.bindAnimater();
	        this.bindActions();
	        // enable pointer events when scrolling ends
	        this.hooks.on(this.hooks.eventTypes.scrollEnd, function () {
	            _this.togglePointerEvents(true);
	        });
	    };
	    Scroller.prototype.registerTransitionEnd = function () {
	        this.transitionEndRegister = new EventRegister(this.content, [
	            {
	                name: style.transitionEnd,
	                handler: this.transitionEnd.bind(this),
	            },
	        ]);
	    };
	    Scroller.prototype.bindTranslater = function () {
	        var _this = this;
	        var hooks = this.translater.hooks;
	        hooks.on(hooks.eventTypes.beforeTranslate, function (transformStyle) {
	            if (_this.options.translateZ) {
	                transformStyle.push(_this.options.translateZ);
	            }
	        });
	        // disable pointer events when scrolling
	        hooks.on(hooks.eventTypes.translate, function (pos) {
	            var prevPos = _this.getCurrentPos();
	            _this.updatePositions(pos);
	            // scrollEnd will dispatch when scroll is force stopping in touchstart handler
	            // so in touchend handler, don't toggle pointer-events
	            if (_this.actions.ensuringInteger === true) {
	                _this.actions.ensuringInteger = false;
	                return;
	            }
	            // a valid translate
	            if (pos.x !== prevPos.x || pos.y !== prevPos.y) {
	                _this.togglePointerEvents(false);
	            }
	        });
	    };
	    Scroller.prototype.bindAnimater = function () {
	        var _this = this;
	        // reset position
	        this.animater.hooks.on(this.animater.hooks.eventTypes.end, function (pos) {
	            if (!_this.resetPosition(_this.options.bounceTime)) {
	                _this.animater.setPending(false);
	                _this.hooks.trigger(_this.hooks.eventTypes.scrollEnd, pos);
	            }
	        });
	        bubbling(this.animater.hooks, this.hooks, [
	            {
	                source: this.animater.hooks.eventTypes.move,
	                target: this.hooks.eventTypes.scroll,
	            },
	            {
	                source: this.animater.hooks.eventTypes.forceStop,
	                target: this.hooks.eventTypes.scrollEnd,
	            },
	        ]);
	    };
	    Scroller.prototype.bindActions = function () {
	        var _this = this;
	        var actions = this.actions;
	        bubbling(actions.hooks, this.hooks, [
	            {
	                source: actions.hooks.eventTypes.start,
	                target: this.hooks.eventTypes.beforeStart,
	            },
	            {
	                source: actions.hooks.eventTypes.start,
	                target: this.hooks.eventTypes.beforeScrollStart,
	            },
	            {
	                source: actions.hooks.eventTypes.beforeMove,
	                target: this.hooks.eventTypes.beforeMove,
	            },
	            {
	                source: actions.hooks.eventTypes.scrollStart,
	                target: this.hooks.eventTypes.scrollStart,
	            },
	            {
	                source: actions.hooks.eventTypes.scroll,
	                target: this.hooks.eventTypes.scroll,
	            },
	            {
	                source: actions.hooks.eventTypes.beforeEnd,
	                target: this.hooks.eventTypes.beforeEnd,
	            },
	        ]);
	        actions.hooks.on(actions.hooks.eventTypes.end, function (e, pos) {
	            _this.hooks.trigger(_this.hooks.eventTypes.touchEnd, pos);
	            if (_this.hooks.trigger(_this.hooks.eventTypes.end, pos)) {
	                return true;
	            }
	            // check if it is a click operation
	            if (!actions.fingerMoved) {
	                _this.hooks.trigger(_this.hooks.eventTypes.scrollCancel);
	                if (_this.checkClick(e)) {
	                    return true;
	                }
	            }
	            // reset if we are outside of the boundaries
	            if (_this.resetPosition(_this.options.bounceTime, ease.bounce)) {
	                _this.animater.setForceStopped(false);
	                return true;
	            }
	        });
	        actions.hooks.on(actions.hooks.eventTypes.scrollEnd, function (pos, duration) {
	            var deltaX = Math.abs(pos.x - _this.scrollBehaviorX.startPos);
	            var deltaY = Math.abs(pos.y - _this.scrollBehaviorY.startPos);
	            if (_this.checkFlick(duration, deltaX, deltaY)) {
	                _this.animater.setForceStopped(false);
	                _this.hooks.trigger(_this.hooks.eventTypes.flick);
	                return;
	            }
	            if (_this.momentum(pos, duration)) {
	                _this.animater.setForceStopped(false);
	                return;
	            }
	            if (actions.contentMoved) {
	                _this.hooks.trigger(_this.hooks.eventTypes.scrollEnd, pos);
	            }
	            if (_this.animater.forceStopped) {
	                _this.animater.setForceStopped(false);
	            }
	        });
	    };
	    Scroller.prototype.checkFlick = function (duration, deltaX, deltaY) {
	        var flickMinMovingDistance = 1; // distinguish flick from click
	        if (this.hooks.events.flick.length > 1 &&
	            duration < this.options.flickLimitTime &&
	            deltaX < this.options.flickLimitDistance &&
	            deltaY < this.options.flickLimitDistance &&
	            (deltaY > flickMinMovingDistance || deltaX > flickMinMovingDistance)) {
	            return true;
	        }
	    };
	    Scroller.prototype.momentum = function (pos, duration) {
	        var meta = {
	            time: 0,
	            easing: ease.swiper,
	            newX: pos.x,
	            newY: pos.y,
	        };
	        // start momentum animation if needed
	        var momentumX = this.scrollBehaviorX.end(duration);
	        var momentumY = this.scrollBehaviorY.end(duration);
	        meta.newX = isUndef(momentumX.destination)
	            ? meta.newX
	            : momentumX.destination;
	        meta.newY = isUndef(momentumY.destination)
	            ? meta.newY
	            : momentumY.destination;
	        meta.time = Math.max(momentumX.duration, momentumY.duration);
	        this.hooks.trigger(this.hooks.eventTypes.momentum, meta, this);
	        // when x or y changed, do momentum animation now!
	        if (meta.newX !== pos.x || meta.newY !== pos.y) {
	            // change easing function when scroller goes out of the boundaries
	            if (meta.newX > this.scrollBehaviorX.minScrollPos ||
	                meta.newX < this.scrollBehaviorX.maxScrollPos ||
	                meta.newY > this.scrollBehaviorY.minScrollPos ||
	                meta.newY < this.scrollBehaviorY.maxScrollPos) {
	                meta.easing = ease.swipeBounce;
	            }
	            this.scrollTo(meta.newX, meta.newY, meta.time, meta.easing);
	            return true;
	        }
	    };
	    Scroller.prototype.checkClick = function (e) {
	        var cancelable = {
	            preventClick: this.animater.forceStopped,
	        };
	        // we scrolled less than momentumLimitDistance pixels
	        if (this.hooks.trigger(this.hooks.eventTypes.checkClick)) {
	            this.animater.setForceStopped(false);
	            return true;
	        }
	        if (!cancelable.preventClick) {
	            var _dblclick = this.options.dblclick;
	            var dblclickTrigged = false;
	            if (_dblclick && this.lastClickTime) {
	                var _a = _dblclick.delay, delay = _a === void 0 ? 300 : _a;
	                if (getNow() - this.lastClickTime < delay) {
	                    dblclickTrigged = true;
	                    dblclick(e);
	                }
	            }
	            if (this.options.tap) {
	                tap(e, this.options.tap);
	            }
	            if (this.options.click &&
	                !preventDefaultExceptionFn(e.target, this.options.preventDefaultException)) {
	                click(e);
	            }
	            this.lastClickTime = dblclickTrigged ? null : getNow();
	            return true;
	        }
	        return false;
	    };
	    Scroller.prototype.resize = function () {
	        var _this = this;
	        if (!this.actions.enabled) {
	            return;
	        }
	        // fix a scroll problem under Android condition
	        /* istanbul ignore if  */
	        if (isAndroid) {
	            this.wrapper.scrollTop = 0;
	        }
	        clearTimeout(this.resizeTimeout);
	        this.resizeTimeout = window.setTimeout(function () {
	            _this.hooks.trigger(_this.hooks.eventTypes.resize);
	        }, this.options.resizePolling);
	    };
	    /* istanbul ignore next */
	    Scroller.prototype.transitionEnd = function (e) {
	        if (e.target !== this.content || !this.animater.pending) {
	            return;
	        }
	        var animater = this.animater;
	        animater.transitionTime();
	        if (!this.resetPosition(this.options.bounceTime, ease.bounce)) {
	            this.animater.setPending(false);
	            if (this.options.probeType !== 3 /* Realtime */) {
	                this.hooks.trigger(this.hooks.eventTypes.scrollEnd, this.getCurrentPos());
	            }
	        }
	    };
	    Scroller.prototype.togglePointerEvents = function (enabled) {
	        if (enabled === void 0) { enabled = true; }
	        var el = this.content.children.length
	            ? this.content.children
	            : [this.content];
	        var pointerEvents = enabled ? 'auto' : 'none';
	        for (var i = 0; i < el.length; i++) {
	            var node = el[i];
	            // ignore BetterScroll instance's wrapper DOM
	            /* istanbul ignore if  */
	            if (node.isBScrollContainer) {
	                continue;
	            }
	            node.style.pointerEvents = pointerEvents;
	        }
	    };
	    Scroller.prototype.refresh = function (content) {
	        var contentChanged = this.setContent(content);
	        this.hooks.trigger(this.hooks.eventTypes.beforeRefresh);
	        this.scrollBehaviorX.refresh(content);
	        this.scrollBehaviorY.refresh(content);
	        if (contentChanged) {
	            this.translater.setContent(content);
	            this.animater.setContent(content);
	            this.transitionEndRegister.destroy();
	            this.registerTransitionEnd();
	            if (this.options.bindToTarget) {
	                this.actionsHandler.setContent(content);
	            }
	        }
	        this.actions.refresh();
	        this.wrapperOffset = offset(this.wrapper);
	    };
	    Scroller.prototype.setContent = function (content) {
	        var contentChanged = content !== this.content;
	        if (contentChanged) {
	            this.content = content;
	        }
	        return contentChanged;
	    };
	    Scroller.prototype.scrollBy = function (deltaX, deltaY, time, easing) {
	        if (time === void 0) { time = 0; }
	        var _a = this.getCurrentPos(), x = _a.x, y = _a.y;
	        easing = !easing ? ease.bounce : easing;
	        deltaX += x;
	        deltaY += y;
	        this.scrollTo(deltaX, deltaY, time, easing);
	    };
	    Scroller.prototype.scrollTo = function (x, y, time, easing, extraTransform) {
	        if (time === void 0) { time = 0; }
	        if (easing === void 0) { easing = ease.bounce; }
	        if (extraTransform === void 0) { extraTransform = {
	            start: {},
	            end: {},
	        }; }
	        var easingFn = this.options.useTransition ? easing.style : easing.fn;
	        var currentPos = this.getCurrentPos();
	        var startPoint = __assign({ x: currentPos.x, y: currentPos.y }, extraTransform.start);
	        var endPoint = __assign({ x: x,
	            y: y }, extraTransform.end);
	        this.hooks.trigger(this.hooks.eventTypes.scrollTo, endPoint);
	        // it is an useless move
	        if (isSamePoint(startPoint, endPoint))
	            return;
	        var deltaX = Math.abs(endPoint.x - startPoint.x);
	        var deltaY = Math.abs(endPoint.y - startPoint.y);
	        // considering of browser compatibility for decimal transform value
	        // force translating immediately
	        if (deltaX < MIN_SCROLL_DISTANCE && deltaY < MIN_SCROLL_DISTANCE) {
	            time = 0;
	            this.hooks.trigger(this.hooks.eventTypes.minDistanceScroll);
	        }
	        this.animater.move(startPoint, endPoint, time, easingFn);
	    };
	    Scroller.prototype.scrollToElement = function (el, time, offsetX, offsetY, easing) {
	        var targetEle = getElement(el);
	        var pos = offset(targetEle);
	        var getOffset = function (offset, size, wrapperSize) {
	            if (typeof offset === 'number') {
	                return offset;
	            }
	            // if offsetX/Y are true we center the element to the screen
	            return offset ? Math.round(size / 2 - wrapperSize / 2) : 0;
	        };
	        offsetX = getOffset(offsetX, targetEle.offsetWidth, this.wrapper.offsetWidth);
	        offsetY = getOffset(offsetY, targetEle.offsetHeight, this.wrapper.offsetHeight);
	        var getPos = function (pos, wrapperPos, offset, scrollBehavior) {
	            pos -= wrapperPos;
	            pos = scrollBehavior.adjustPosition(pos - offset);
	            return pos;
	        };
	        pos.left = getPos(pos.left, this.wrapperOffset.left, offsetX, this.scrollBehaviorX);
	        pos.top = getPos(pos.top, this.wrapperOffset.top, offsetY, this.scrollBehaviorY);
	        if (this.hooks.trigger(this.hooks.eventTypes.scrollToElement, targetEle, pos)) {
	            return;
	        }
	        this.scrollTo(pos.left, pos.top, time, easing);
	    };
	    Scroller.prototype.resetPosition = function (time, easing) {
	        if (time === void 0) { time = 0; }
	        if (easing === void 0) { easing = ease.bounce; }
	        var _a = this.scrollBehaviorX.checkInBoundary(), x = _a.position, xInBoundary = _a.inBoundary;
	        var _b = this.scrollBehaviorY.checkInBoundary(), y = _b.position, yInBoundary = _b.inBoundary;
	        if (xInBoundary && yInBoundary) {
	            return false;
	        }
	        /* istanbul ignore if  */
	        if (isIOSBadVersion) {
	            // fix ios 13.4 bouncing
	            // see it in issues 982
	            this.reflow();
	        }
	        // out of boundary
	        this.scrollTo(x, y, time, easing);
	        return true;
	    };
	    /* istanbul ignore next */
	    Scroller.prototype.reflow = function () {
	        this._reflow = this.content.offsetHeight;
	    };
	    Scroller.prototype.updatePositions = function (pos) {
	        this.scrollBehaviorX.updatePosition(pos.x);
	        this.scrollBehaviorY.updatePosition(pos.y);
	    };
	    Scroller.prototype.getCurrentPos = function () {
	        return this.actions.getCurrentPos();
	    };
	    Scroller.prototype.enable = function () {
	        this.actions.enabled = true;
	    };
	    Scroller.prototype.disable = function () {
	        cancelAnimationFrame(this.animater.timer);
	        this.actions.enabled = false;
	    };
	    Scroller.prototype.destroy = function () {
	        var _this = this;
	        var keys = [
	            'resizeRegister',
	            'transitionEndRegister',
	            'actionsHandler',
	            'actions',
	            'hooks',
	            'animater',
	            'translater',
	            'scrollBehaviorX',
	            'scrollBehaviorY',
	        ];
	        keys.forEach(function (key) { return _this[key].destroy(); });
	    };
	    return Scroller;
	}());

	var BScrollConstructor = /** @class */ (function (_super) {
	    __extends(BScrollConstructor, _super);
	    function BScrollConstructor(el, options) {
	        var _this = _super.call(this, [
	            'refresh',
	            'contentChanged',
	            'enable',
	            'disable',
	            'beforeScrollStart',
	            'scrollStart',
	            'scroll',
	            'scrollEnd',
	            'scrollCancel',
	            'touchEnd',
	            'flick',
	            'destroy'
	        ]) || this;
	        var wrapper = getElement(el);
	        if (!wrapper) {
	            warn('Can not resolve the wrapper DOM.');
	            return _this;
	        }
	        _this.plugins = {};
	        _this.options = new OptionsConstructor().merge(options).process();
	        if (!_this.setContent(wrapper).valid) {
	            return _this;
	        }
	        _this.hooks = new EventEmitter([
	            'refresh',
	            'enable',
	            'disable',
	            'destroy',
	            'beforeInitialScrollTo',
	            'contentChanged'
	        ]);
	        _this.init(wrapper);
	        return _this;
	    }
	    BScrollConstructor.use = function (ctor) {
	        var name = ctor.pluginName;
	        var installed = BScrollConstructor.plugins.some(function (plugin) { return ctor === plugin.ctor; });
	        if (installed)
	            return BScrollConstructor;
	        if (isUndef(name)) {
	            warn("Plugin Class must specify plugin's name in static property by 'pluginName' field.");
	            return BScrollConstructor;
	        }
	        BScrollConstructor.pluginsMap[name] = true;
	        BScrollConstructor.plugins.push({
	            name: name,
	            applyOrder: ctor.applyOrder,
	            ctor: ctor
	        });
	        return BScrollConstructor;
	    };
	    BScrollConstructor.prototype.setContent = function (wrapper) {
	        var contentChanged = false;
	        var valid = true;
	        var content = wrapper.children[this.options.specifiedIndexAsContent];
	        if (!content) {
	            warn('The wrapper need at least one child element to be content element to scroll.');
	            valid = false;
	        }
	        else {
	            contentChanged = this.content !== content;
	            if (contentChanged) {
	                this.content = content;
	            }
	        }
	        return {
	            valid: valid,
	            contentChanged: contentChanged
	        };
	    };
	    BScrollConstructor.prototype.init = function (wrapper) {
	        var _this = this;
	        this.wrapper = wrapper;
	        // mark wrapper to recognize bs instance by DOM attribute
	        wrapper.isBScrollContainer = true;
	        this.scroller = new Scroller(wrapper, this.content, this.options);
	        this.scroller.hooks.on(this.scroller.hooks.eventTypes.resize, function () {
	            _this.refresh();
	        });
	        this.eventBubbling();
	        this.handleAutoBlur();
	        this.enable();
	        this.proxy(propertiesConfig);
	        this.applyPlugins();
	        // maybe boundary has changed, should refresh
	        this.refreshWithoutReset(this.content);
	        var _a = this.options, startX = _a.startX, startY = _a.startY;
	        var position = {
	            x: startX,
	            y: startY
	        };
	        // maybe plugins want to control scroll position
	        if (this.hooks.trigger(this.hooks.eventTypes.beforeInitialScrollTo, position)) {
	            return;
	        }
	        this.scroller.scrollTo(position.x, position.y);
	    };
	    BScrollConstructor.prototype.applyPlugins = function () {
	        var _this = this;
	        var options = this.options;
	        BScrollConstructor.plugins
	            .sort(function (a, b) {
	            var _a;
	            var applyOrderMap = (_a = {},
	                _a["pre" /* Pre */] = -1,
	                _a["post" /* Post */] = 1,
	                _a);
	            var aOrder = a.applyOrder ? applyOrderMap[a.applyOrder] : 0;
	            var bOrder = b.applyOrder ? applyOrderMap[b.applyOrder] : 0;
	            return aOrder - bOrder;
	        })
	            .forEach(function (item) {
	            var ctor = item.ctor;
	            if (options[item.name] && typeof ctor === 'function') {
	                _this.plugins[item.name] = new ctor(_this);
	            }
	        });
	    };
	    BScrollConstructor.prototype.handleAutoBlur = function () {
	        /* istanbul ignore if  */
	        if (this.options.autoBlur) {
	            this.on(this.eventTypes.beforeScrollStart, function () {
	                var activeElement = document.activeElement;
	                if (activeElement &&
	                    (activeElement.tagName === 'INPUT' ||
	                        activeElement.tagName === 'TEXTAREA')) {
	                    activeElement.blur();
	                }
	            });
	        }
	    };
	    BScrollConstructor.prototype.eventBubbling = function () {
	        bubbling(this.scroller.hooks, this, [
	            this.eventTypes.beforeScrollStart,
	            this.eventTypes.scrollStart,
	            this.eventTypes.scroll,
	            this.eventTypes.scrollEnd,
	            this.eventTypes.scrollCancel,
	            this.eventTypes.touchEnd,
	            this.eventTypes.flick
	        ]);
	    };
	    BScrollConstructor.prototype.refreshWithoutReset = function (content) {
	        this.scroller.refresh(content);
	        this.hooks.trigger(this.hooks.eventTypes.refresh, content);
	        this.trigger(this.eventTypes.refresh, content);
	    };
	    BScrollConstructor.prototype.proxy = function (propertiesConfig) {
	        var _this = this;
	        propertiesConfig.forEach(function (_a) {
	            var key = _a.key, sourceKey = _a.sourceKey;
	            propertiesProxy(_this, sourceKey, key);
	        });
	    };
	    BScrollConstructor.prototype.refresh = function () {
	        var _a = this.setContent(this.wrapper), contentChanged = _a.contentChanged, valid = _a.valid;
	        if (valid) {
	            var content = this.content;
	            this.refreshWithoutReset(content);
	            if (contentChanged) {
	                this.hooks.trigger(this.hooks.eventTypes.contentChanged, content);
	                this.trigger(this.eventTypes.contentChanged, content);
	            }
	            this.scroller.resetPosition();
	        }
	    };
	    BScrollConstructor.prototype.enable = function () {
	        this.scroller.enable();
	        this.hooks.trigger(this.hooks.eventTypes.enable);
	        this.trigger(this.eventTypes.enable);
	    };
	    BScrollConstructor.prototype.disable = function () {
	        this.scroller.disable();
	        this.hooks.trigger(this.hooks.eventTypes.disable);
	        this.trigger(this.eventTypes.disable);
	    };
	    BScrollConstructor.prototype.destroy = function () {
	        this.hooks.trigger(this.hooks.eventTypes.destroy);
	        this.trigger(this.eventTypes.destroy);
	        this.scroller.destroy();
	    };
	    BScrollConstructor.prototype.eventRegister = function (names) {
	        this.registerType(names);
	    };
	    BScrollConstructor.plugins = [];
	    BScrollConstructor.pluginsMap = {};
	    return BScrollConstructor;
	}(EventEmitter));
	function createBScroll(el, options) {
	    var bs = new BScrollConstructor(el, options);
	    return bs;
	}
	createBScroll.use = BScrollConstructor.use;
	createBScroll.plugins = BScrollConstructor.plugins;
	createBScroll.pluginsMap = BScrollConstructor.pluginsMap;
	var BScroll = createBScroll;

	/*!
	 * better-scroll / wheel
	 * (c) 2016-2023 ustbhuangyi
	 * Released under the MIT License.
	 */
	// ssr support
	var inBrowser$1 = typeof window !== 'undefined';
	var ua$1 = inBrowser$1 && navigator.userAgent.toLowerCase();
	!!(ua$1 && /wechatdevtools/.test(ua$1));
	ua$1 && ua$1.indexOf('android') > 0;
	/* istanbul ignore next */
	((function () {
	    if (typeof ua$1 === 'string') {
	        var regex = /os (\d\d?_\d(_\d)?)/;
	        var matches = regex.exec(ua$1);
	        if (!matches)
	            return false;
	        var parts = matches[1].split('_').map(function (item) {
	            return parseInt(item, 10);
	        });
	        // ios version >= 13.4 issue 982
	        return !!(parts[0] === 13 && parts[1] >= 4);
	    }
	    return false;
	}))();
	/* istanbul ignore next */
	var supportsPassive$1 = false;
	/* istanbul ignore next */
	if (inBrowser$1) {
	    var EventName$1 = 'test-passive';
	    try {
	        var opts$1 = {};
	        Object.defineProperty(opts$1, 'passive', {
	            get: function () {
	                supportsPassive$1 = true;
	            },
	        }); // https://github.com/facebook/flow/issues/285
	        window.addEventListener(EventName$1, function () { }, opts$1);
	    }
	    catch (e) { }
	}

	var extend$1 = function (target, source) {
	    for (var key in source) {
	        target[key] = source[key];
	    }
	    return target;
	};

	var elementStyle$1 = (inBrowser$1 &&
	    document.createElement('div').style);
	var vendor$1 = (function () {
	    /* istanbul ignore if  */
	    if (!inBrowser$1) {
	        return false;
	    }
	    var transformNames = [
	        {
	            key: 'standard',
	            value: 'transform',
	        },
	        {
	            key: 'webkit',
	            value: 'webkitTransform',
	        },
	        {
	            key: 'Moz',
	            value: 'MozTransform',
	        },
	        {
	            key: 'O',
	            value: 'OTransform',
	        },
	        {
	            key: 'ms',
	            value: 'msTransform',
	        },
	    ];
	    for (var _i = 0, transformNames_1 = transformNames; _i < transformNames_1.length; _i++) {
	        var obj = transformNames_1[_i];
	        if (elementStyle$1[obj.value] !== undefined) {
	            return obj.key;
	        }
	    }
	    /* istanbul ignore next  */
	    return false;
	})();
	/* istanbul ignore next  */
	function prefixStyle$1(style) {
	    if (vendor$1 === false) {
	        return style;
	    }
	    if (vendor$1 === 'standard') {
	        if (style === 'transitionEnd') {
	            return 'transitionend';
	        }
	        return style;
	    }
	    return vendor$1 + style.charAt(0).toUpperCase() + style.substr(1);
	}
	vendor$1 && vendor$1 !== 'standard' ? '-' + vendor$1.toLowerCase() + '-' : '';
	var transform$1 = prefixStyle$1('transform');
	var transition$1 = prefixStyle$1('transition');
	inBrowser$1 && prefixStyle$1('perspective') in elementStyle$1;
	var style$1 = {
	    transform: transform$1,
	    transition: transition$1,
	    transitionTimingFunction: prefixStyle$1('transitionTimingFunction'),
	    transitionDuration: prefixStyle$1('transitionDuration'),
	    transitionDelay: prefixStyle$1('transitionDelay'),
	    transformOrigin: prefixStyle$1('transformOrigin'),
	    transitionEnd: prefixStyle$1('transitionEnd'),
	    transitionProperty: prefixStyle$1('transitionProperty'),
	};
	function hasClass(el, className) {
	    var reg = new RegExp('(^|\\s)' + className + '(\\s|$)');
	    return reg.test(el.className);
	}
	function HTMLCollectionToArray(el) {
	    return Array.prototype.slice.call(el, 0);
	}

	var ease$1 = {
	    // easeOutQuint
	    swipe: {
	        style: 'cubic-bezier(0.23, 1, 0.32, 1)',
	        fn: function (t) {
	            return 1 + --t * t * t * t * t;
	        }
	    },
	    // easeOutQuard
	    swipeBounce: {
	        style: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
	        fn: function (t) {
	            return t * (2 - t);
	        }
	    },
	    // easeOutQuart
	    bounce: {
	        style: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
	        fn: function (t) {
	            return 1 - --t * t * t * t;
	        }
	    }
	};

	var sourcePrefix = 'plugins.wheel';
	var propertiesMap = [
	    {
	        key: 'wheelTo',
	        name: 'wheelTo',
	    },
	    {
	        key: 'getSelectedIndex',
	        name: 'getSelectedIndex',
	    },
	    {
	        key: 'restorePosition',
	        name: 'restorePosition',
	    },
	];
	var propertiesConfig$1 = propertiesMap.map(function (item) {
	    return {
	        key: item.key,
	        sourceKey: sourcePrefix + "." + item.name,
	    };
	});

	var WHEEL_INDEX_CHANGED_EVENT_NAME = 'wheelIndexChanged';
	var CONSTANTS = {
	    rate: 4
	};
	var Wheel = /** @class */ (function () {
	    function Wheel(scroll) {
	        this.scroll = scroll;
	        this.init();
	    }
	    Wheel.prototype.init = function () {
	        this.handleBScroll();
	        this.handleOptions();
	        this.handleHooks();
	        // init boundary for Wheel
	        this.refreshBoundary();
	        this.setSelectedIndex(this.options.selectedIndex);
	    };
	    Wheel.prototype.handleBScroll = function () {
	        this.scroll.proxy(propertiesConfig$1);
	        this.scroll.registerType([WHEEL_INDEX_CHANGED_EVENT_NAME]);
	    };
	    Wheel.prototype.handleOptions = function () {
	        var userOptions = (this.scroll.options.wheel === true
	            ? {}
	            : this.scroll.options.wheel);
	        var defaultOptions = {
	            wheelWrapperClass: 'wheel-scroll',
	            wheelItemClass: 'wheel-item',
	            rotate: 25,
	            adjustTime: 400,
	            selectedIndex: 0,
	            wheelDisabledItemClass: 'wheel-disabled-item'
	        };
	        this.options = extend$1(defaultOptions, userOptions);
	    };
	    Wheel.prototype.handleHooks = function () {
	        var _this = this;
	        var scroll = this.scroll;
	        var scroller = this.scroll.scroller;
	        var actionsHandler = scroller.actionsHandler, scrollBehaviorX = scroller.scrollBehaviorX, scrollBehaviorY = scroller.scrollBehaviorY, animater = scroller.animater;
	        var prevContent = scroller.content;
	        // BScroll
	        scroll.on(scroll.eventTypes.scrollEnd, function (position) {
	            var index = _this.findNearestValidWheel(position.y).index;
	            if (scroller.animater.forceStopped && !_this.isAdjustingPosition) {
	                _this.target = _this.items[index];
	                // since stopped from an animation.
	                // prevent user's scrollEnd callback triggered twice
	                return true;
	            }
	            else {
	                _this.setSelectedIndex(index);
	                if (_this.isAdjustingPosition) {
	                    _this.isAdjustingPosition = false;
	                }
	            }
	        });
	        // BScroll.hooks
	        this.scroll.hooks.on(this.scroll.hooks.eventTypes.refresh, function (content) {
	            if (content !== prevContent) {
	                prevContent = content;
	                _this.setSelectedIndex(_this.options.selectedIndex, true);
	            }
	            // rotate all wheel-items
	            // because position may not change
	            _this.rotateX(_this.scroll.y);
	            // check we are stop at a disable item or not
	            _this.wheelTo(_this.selectedIndex, 0);
	        });
	        this.scroll.hooks.on(this.scroll.hooks.eventTypes.beforeInitialScrollTo, function (position) {
	            // selectedIndex has higher priority than bs.options.startY
	            position.x = 0;
	            position.y = -(_this.selectedIndex * _this.itemHeight);
	        });
	        // Scroller
	        scroller.hooks.on(scroller.hooks.eventTypes.checkClick, function () {
	            var index = HTMLCollectionToArray(_this.items).indexOf(_this.target);
	            if (index === -1)
	                return true;
	            _this.wheelTo(index, _this.options.adjustTime, ease$1.swipe);
	            return true;
	        });
	        scroller.hooks.on(scroller.hooks.eventTypes.scrollTo, function (endPoint) {
	            endPoint.y = _this.findNearestValidWheel(endPoint.y).y;
	        });
	        // when content is scrolling
	        // click wheel-item DOM repeatedly and crazily will cause scrollEnd not triggered
	        // so reset forceStopped
	        scroller.hooks.on(scroller.hooks.eventTypes.minDistanceScroll, function () {
	            var animater = scroller.animater;
	            if (animater.forceStopped === true) {
	                animater.forceStopped = false;
	            }
	        });
	        scroller.hooks.on(scroller.hooks.eventTypes.scrollToElement, function (el, pos) {
	            if (!hasClass(el, _this.options.wheelItemClass)) {
	                return true;
	            }
	            else {
	                pos.top = _this.findNearestValidWheel(pos.top).y;
	            }
	        });
	        // ActionsHandler
	        actionsHandler.hooks.on(actionsHandler.hooks.eventTypes.beforeStart, function (e) {
	            _this.target = e.target;
	        });
	        // ScrollBehaviorX
	        // Wheel has no x direction now
	        scrollBehaviorX.hooks.on(scrollBehaviorX.hooks.eventTypes.computeBoundary, function (boundary) {
	            boundary.maxScrollPos = 0;
	            boundary.minScrollPos = 0;
	        });
	        // ScrollBehaviorY
	        scrollBehaviorY.hooks.on(scrollBehaviorY.hooks.eventTypes.computeBoundary, function (boundary) {
	            _this.items = _this.scroll.scroller.content.children;
	            _this.checkWheelAllDisabled();
	            _this.itemHeight =
	                _this.items.length > 0
	                    ? scrollBehaviorY.contentSize / _this.items.length
	                    : 0;
	            boundary.maxScrollPos = -_this.itemHeight * (_this.items.length - 1);
	            boundary.minScrollPos = 0;
	        });
	        scrollBehaviorY.hooks.on(scrollBehaviorY.hooks.eventTypes.momentum, function (momentumInfo) {
	            momentumInfo.rate = CONSTANTS.rate;
	            momentumInfo.destination = _this.findNearestValidWheel(momentumInfo.destination).y;
	        });
	        scrollBehaviorY.hooks.on(scrollBehaviorY.hooks.eventTypes.end, function (momentumInfo) {
	            var validWheel = _this.findNearestValidWheel(scrollBehaviorY.currentPos);
	            momentumInfo.destination = validWheel.y;
	            momentumInfo.duration = _this.options.adjustTime;
	        });
	        // Animater
	        animater.hooks.on(animater.hooks.eventTypes.time, function (time) {
	            _this.transitionDuration(time);
	        });
	        animater.hooks.on(animater.hooks.eventTypes.timeFunction, function (easing) {
	            _this.timeFunction(easing);
	        });
	        // bs.stop() to make wheel stop at a correct position when pending
	        animater.hooks.on(animater.hooks.eventTypes.callStop, function () {
	            var index = _this.findNearestValidWheel(_this.scroll.y).index;
	            _this.isAdjustingPosition = true;
	            _this.wheelTo(index, 0);
	        });
	        // Translater
	        animater.translater.hooks.on(animater.translater.hooks.eventTypes.translate, function (endPoint) {
	            _this.rotateX(endPoint.y);
	        });
	    };
	    Wheel.prototype.refreshBoundary = function () {
	        var _a = this.scroll.scroller, scrollBehaviorX = _a.scrollBehaviorX, scrollBehaviorY = _a.scrollBehaviorY, content = _a.content;
	        scrollBehaviorX.refresh(content);
	        scrollBehaviorY.refresh(content);
	    };
	    Wheel.prototype.setSelectedIndex = function (index, contentChanged) {
	        if (contentChanged === void 0) { contentChanged = false; }
	        var prevSelectedIndex = this.selectedIndex;
	        this.selectedIndex = index;
	        // if content DOM changed, should not trigger event
	        if (prevSelectedIndex !== index && !contentChanged) {
	            this.scroll.trigger(WHEEL_INDEX_CHANGED_EVENT_NAME, index);
	        }
	    };
	    Wheel.prototype.getSelectedIndex = function () {
	        return this.selectedIndex;
	    };
	    Wheel.prototype.wheelTo = function (index, time, ease) {
	        if (index === void 0) { index = 0; }
	        if (time === void 0) { time = 0; }
	        var y = -index * this.itemHeight;
	        this.scroll.scrollTo(0, y, time, ease);
	    };
	    Wheel.prototype.restorePosition = function () {
	        // bs is scrolling
	        var isPending = this.scroll.pending;
	        if (isPending) {
	            var selectedIndex = this.getSelectedIndex();
	            this.scroll.scroller.animater.clearTimer();
	            this.wheelTo(selectedIndex, 0);
	        }
	    };
	    Wheel.prototype.transitionDuration = function (time) {
	        for (var i = 0; i < this.items.length; i++) {
	            this.items[i].style[style$1.transitionDuration] =
	                time + 'ms';
	        }
	    };
	    Wheel.prototype.timeFunction = function (easing) {
	        for (var i = 0; i < this.items.length; i++) {
	            this.items[i].style[style$1.transitionTimingFunction] = easing;
	        }
	    };
	    Wheel.prototype.rotateX = function (y) {
	        var _a = this.options.rotate, rotate = _a === void 0 ? 25 : _a;
	        for (var i = 0; i < this.items.length; i++) {
	            var deg = rotate * (y / this.itemHeight + i);
	            // Too small value is invalid in some phones, issue 1026
	            var SafeDeg = deg.toFixed(3);
	            this.items[i].style[style$1.transform] = "rotateX(" + SafeDeg + "deg)";
	        }
	    };
	    Wheel.prototype.findNearestValidWheel = function (y) {
	        y = y > 0 ? 0 : y < this.scroll.maxScrollY ? this.scroll.maxScrollY : y;
	        var currentIndex = Math.abs(Math.round(-y / this.itemHeight));
	        var cacheIndex = currentIndex;
	        var items = this.items;
	        var wheelDisabledItemClassName = this.options
	            .wheelDisabledItemClass;
	        // implement web native select element
	        // first, check whether there is a enable item whose index is smaller than currentIndex
	        // then, check whether there is a enable item whose index is bigger than currentIndex
	        // otherwise, there are all disabled items, just keep currentIndex unchange
	        while (currentIndex >= 0) {
	            if (!hasClass(items[currentIndex], wheelDisabledItemClassName)) {
	                break;
	            }
	            currentIndex--;
	        }
	        if (currentIndex < 0) {
	            currentIndex = cacheIndex;
	            while (currentIndex <= items.length - 1) {
	                if (!hasClass(items[currentIndex], wheelDisabledItemClassName)) {
	                    break;
	                }
	                currentIndex++;
	            }
	        }
	        // keep it unchange when all the items are disabled
	        if (currentIndex === items.length) {
	            currentIndex = cacheIndex;
	        }
	        // when all the items are disabled, selectedIndex should always be -1
	        return {
	            index: this.wheelItemsAllDisabled ? -1 : currentIndex,
	            y: -currentIndex * this.itemHeight
	        };
	    };
	    Wheel.prototype.checkWheelAllDisabled = function () {
	        var wheelDisabledItemClassName = this.options.wheelDisabledItemClass;
	        var items = this.items;
	        this.wheelItemsAllDisabled = true;
	        for (var i = 0; i < items.length; i++) {
	            if (!hasClass(items[i], wheelDisabledItemClassName)) {
	                this.wheelItemsAllDisabled = false;
	                break;
	            }
	        }
	    };
	    Wheel.pluginName = 'wheel';
	    return Wheel;
	}());

	/*!
	 * better-scroll / mouse-wheel
	 * (c) 2016-2023 ustbhuangyi
	 * Released under the MIT License.
	 */
	function warn$1(msg) {
	    console.error("[BScroll warn]: " + msg);
	}

	// ssr support
	var inBrowser$2 = typeof window !== 'undefined';
	var ua$2 = inBrowser$2 && navigator.userAgent.toLowerCase();
	!!(ua$2 && /wechatdevtools/.test(ua$2));
	ua$2 && ua$2.indexOf('android') > 0;
	/* istanbul ignore next */
	((function () {
	    if (typeof ua$2 === 'string') {
	        var regex = /os (\d\d?_\d(_\d)?)/;
	        var matches = regex.exec(ua$2);
	        if (!matches)
	            return false;
	        var parts = matches[1].split('_').map(function (item) {
	            return parseInt(item, 10);
	        });
	        // ios version >= 13.4 issue 982
	        return !!(parts[0] === 13 && parts[1] >= 4);
	    }
	    return false;
	}))();
	/* istanbul ignore next */
	var supportsPassive$2 = false;
	/* istanbul ignore next */
	if (inBrowser$2) {
	    var EventName$2 = 'test-passive';
	    try {
	        var opts$2 = {};
	        Object.defineProperty(opts$2, 'passive', {
	            get: function () {
	                supportsPassive$2 = true;
	            },
	        }); // https://github.com/facebook/flow/issues/285
	        window.addEventListener(EventName$2, function () { }, opts$2);
	    }
	    catch (e) { }
	}

	var extend$2 = function (target, source) {
	    for (var key in source) {
	        target[key] = source[key];
	    }
	    return target;
	};

	var elementStyle$2 = (inBrowser$2 &&
	    document.createElement('div').style);
	var vendor$2 = (function () {
	    /* istanbul ignore if  */
	    if (!inBrowser$2) {
	        return false;
	    }
	    var transformNames = [
	        {
	            key: 'standard',
	            value: 'transform',
	        },
	        {
	            key: 'webkit',
	            value: 'webkitTransform',
	        },
	        {
	            key: 'Moz',
	            value: 'MozTransform',
	        },
	        {
	            key: 'O',
	            value: 'OTransform',
	        },
	        {
	            key: 'ms',
	            value: 'msTransform',
	        },
	    ];
	    for (var _i = 0, transformNames_1 = transformNames; _i < transformNames_1.length; _i++) {
	        var obj = transformNames_1[_i];
	        if (elementStyle$2[obj.value] !== undefined) {
	            return obj.key;
	        }
	    }
	    /* istanbul ignore next  */
	    return false;
	})();
	/* istanbul ignore next  */
	function prefixStyle$2(style) {
	    if (vendor$2 === false) {
	        return style;
	    }
	    if (vendor$2 === 'standard') {
	        if (style === 'transitionEnd') {
	            return 'transitionend';
	        }
	        return style;
	    }
	    return vendor$2 + style.charAt(0).toUpperCase() + style.substr(1);
	}
	function addEvent$1(el, type, fn, capture) {
	    var useCapture = supportsPassive$2
	        ? {
	            passive: false,
	            capture: !!capture,
	        }
	        : !!capture;
	    el.addEventListener(type, fn, useCapture);
	}
	function removeEvent$1(el, type, fn, capture) {
	    el.removeEventListener(type, fn, {
	        capture: !!capture,
	    });
	}
	function maybePrevent$1(e) {
	    if (e.cancelable) {
	        e.preventDefault();
	    }
	}
	vendor$2 && vendor$2 !== 'standard' ? '-' + vendor$2.toLowerCase() + '-' : '';
	var transform$2 = prefixStyle$2('transform');
	var transition$2 = prefixStyle$2('transition');
	inBrowser$2 && prefixStyle$2('perspective') in elementStyle$2;
	({
	    transform: transform$2,
	    transition: transition$2,
	    transitionTimingFunction: prefixStyle$2('transitionTimingFunction'),
	    transitionDuration: prefixStyle$2('transitionDuration'),
	    transitionDelay: prefixStyle$2('transitionDelay'),
	    transformOrigin: prefixStyle$2('transformOrigin'),
	    transitionEnd: prefixStyle$2('transitionEnd'),
	    transitionProperty: prefixStyle$2('transitionProperty'),
	});
	function preventDefaultExceptionFn$1(el, exceptions) {
	    for (var i in exceptions) {
	        if (exceptions[i].test(el[i])) {
	            return true;
	        }
	    }
	    return false;
	}

	var EventRegister$1 = /** @class */ (function () {
	    function EventRegister(wrapper, events) {
	        this.wrapper = wrapper;
	        this.events = events;
	        this.addDOMEvents();
	    }
	    EventRegister.prototype.destroy = function () {
	        this.removeDOMEvents();
	        this.events = [];
	    };
	    EventRegister.prototype.addDOMEvents = function () {
	        this.handleDOMEvents(addEvent$1);
	    };
	    EventRegister.prototype.removeDOMEvents = function () {
	        this.handleDOMEvents(removeEvent$1);
	    };
	    EventRegister.prototype.handleDOMEvents = function (eventOperation) {
	        var _this = this;
	        var wrapper = this.wrapper;
	        this.events.forEach(function (event) {
	            eventOperation(wrapper, event.name, _this, !!event.capture);
	        });
	    };
	    EventRegister.prototype.handleEvent = function (e) {
	        var eventType = e.type;
	        this.events.some(function (event) {
	            if (event.name === eventType) {
	                event.handler(e);
	                return true;
	            }
	            return false;
	        });
	    };
	    return EventRegister;
	}());

	var MouseWheel = /** @class */ (function () {
	    function MouseWheel(scroll) {
	        this.scroll = scroll;
	        this.wheelEndTimer = 0;
	        this.wheelMoveTimer = 0;
	        this.wheelStart = false;
	        this.init();
	    }
	    MouseWheel.prototype.init = function () {
	        this.handleBScroll();
	        this.handleOptions();
	        this.handleHooks();
	        this.registerEvent();
	    };
	    MouseWheel.prototype.handleBScroll = function () {
	        this.scroll.registerType([
	            'alterOptions',
	            'mousewheelStart',
	            'mousewheelMove',
	            'mousewheelEnd',
	        ]);
	    };
	    MouseWheel.prototype.handleOptions = function () {
	        var userOptions = (this.scroll.options.mouseWheel === true
	            ? {}
	            : this.scroll.options.mouseWheel);
	        var defaultOptions = {
	            speed: 20,
	            invert: false,
	            easeTime: 300,
	            discreteTime: 400,
	            throttleTime: 0,
	            dampingFactor: 0.1,
	        };
	        this.mouseWheelOpt = extend$2(defaultOptions, userOptions);
	    };
	    MouseWheel.prototype.handleHooks = function () {
	        this.hooksFn = [];
	        this.registerHooks(this.scroll.hooks, 'destroy', this.destroy);
	    };
	    MouseWheel.prototype.registerEvent = function () {
	        this.eventRegister = new EventRegister$1(this.scroll.scroller.wrapper, [
	            {
	                name: 'wheel',
	                handler: this.wheelHandler.bind(this),
	            },
	            {
	                name: 'mousewheel',
	                handler: this.wheelHandler.bind(this),
	            },
	            {
	                name: 'DOMMouseScroll',
	                handler: this.wheelHandler.bind(this),
	            },
	        ]);
	    };
	    MouseWheel.prototype.registerHooks = function (hooks, name, handler) {
	        hooks.on(name, handler, this);
	        this.hooksFn.push([hooks, name, handler]);
	    };
	    MouseWheel.prototype.wheelHandler = function (e) {
	        if (!this.scroll.enabled) {
	            return;
	        }
	        this.beforeHandler(e);
	        // start
	        if (!this.wheelStart) {
	            this.wheelStartHandler(e);
	            this.wheelStart = true;
	        }
	        // move
	        var delta = this.getWheelDelta(e);
	        this.wheelMoveHandler(delta);
	        // end
	        this.wheelEndDetector(delta);
	    };
	    MouseWheel.prototype.wheelStartHandler = function (e) {
	        this.cleanCache();
	        var _a = this.scroll.scroller, scrollBehaviorX = _a.scrollBehaviorX, scrollBehaviorY = _a.scrollBehaviorY;
	        scrollBehaviorX.setMovingDirection(0 /* Default */);
	        scrollBehaviorY.setMovingDirection(0 /* Default */);
	        scrollBehaviorX.setDirection(0 /* Default */);
	        scrollBehaviorY.setDirection(0 /* Default */);
	        this.scroll.trigger(this.scroll.eventTypes.alterOptions, this.mouseWheelOpt);
	        this.scroll.trigger(this.scroll.eventTypes.mousewheelStart);
	    };
	    MouseWheel.prototype.cleanCache = function () {
	        this.deltaCache = [];
	    };
	    MouseWheel.prototype.wheelMoveHandler = function (delta) {
	        var _this = this;
	        var _a = this.mouseWheelOpt, throttleTime = _a.throttleTime, dampingFactor = _a.dampingFactor;
	        if (throttleTime && this.wheelMoveTimer) {
	            this.deltaCache.push(delta);
	        }
	        else {
	            var cachedDelta = this.deltaCache.reduce(function (prev, current) {
	                return {
	                    x: prev.x + current.x,
	                    y: prev.y + current.y,
	                };
	            }, { x: 0, y: 0 });
	            this.cleanCache();
	            var _b = this.scroll.scroller, scrollBehaviorX = _b.scrollBehaviorX, scrollBehaviorY = _b.scrollBehaviorY;
	            scrollBehaviorX.setMovingDirection(-delta.directionX);
	            scrollBehaviorY.setMovingDirection(-delta.directionY);
	            scrollBehaviorX.setDirection(delta.x);
	            scrollBehaviorY.setDirection(delta.y);
	            // when out of boundary, perform a damping scroll
	            var newX = scrollBehaviorX.performDampingAlgorithm(Math.round(delta.x) + cachedDelta.x, dampingFactor);
	            var newY = scrollBehaviorY.performDampingAlgorithm(Math.round(delta.y) + cachedDelta.x, dampingFactor);
	            if (!this.scroll.trigger(this.scroll.eventTypes.mousewheelMove, {
	                x: newX,
	                y: newY,
	            })) {
	                var easeTime = this.getEaseTime();
	                if (newX !== this.scroll.x || newY !== this.scroll.y) {
	                    this.scroll.scrollTo(newX, newY, easeTime);
	                }
	            }
	            if (throttleTime) {
	                this.wheelMoveTimer = window.setTimeout(function () {
	                    _this.wheelMoveTimer = 0;
	                }, throttleTime);
	            }
	        }
	    };
	    MouseWheel.prototype.wheelEndDetector = function (delta) {
	        var _this = this;
	        window.clearTimeout(this.wheelEndTimer);
	        this.wheelEndTimer = window.setTimeout(function () {
	            _this.wheelStart = false;
	            window.clearTimeout(_this.wheelMoveTimer);
	            _this.wheelMoveTimer = 0;
	            _this.scroll.trigger(_this.scroll.eventTypes.mousewheelEnd, delta);
	        }, this.mouseWheelOpt.discreteTime);
	    };
	    MouseWheel.prototype.getWheelDelta = function (e) {
	        var _a = this.mouseWheelOpt, speed = _a.speed, invert = _a.invert;
	        var wheelDeltaX = 0;
	        var wheelDeltaY = 0;
	        var direction = invert ? -1 /* Negative */ : 1 /* Positive */;
	        switch (true) {
	            case 'deltaX' in e:
	                if (e.deltaMode === 1) {
	                    wheelDeltaX = -e.deltaX * speed;
	                    wheelDeltaY = -e.deltaY * speed;
	                }
	                else {
	                    wheelDeltaX = -e.deltaX;
	                    wheelDeltaY = -e.deltaY;
	                }
	                break;
	            case 'wheelDeltaX' in e:
	                wheelDeltaX = (e.wheelDeltaX / 120) * speed;
	                wheelDeltaY = (e.wheelDeltaY / 120) * speed;
	                break;
	            case 'wheelDelta' in e:
	                wheelDeltaX = wheelDeltaY = (e.wheelDelta / 120) * speed;
	                break;
	            case 'detail' in e:
	                wheelDeltaX = wheelDeltaY = (-e.detail / 3) * speed;
	                break;
	        }
	        wheelDeltaX *= direction;
	        wheelDeltaY *= direction;
	        if (!this.scroll.hasVerticalScroll) {
	            if (Math.abs(wheelDeltaY) > Math.abs(wheelDeltaX)) {
	                wheelDeltaX = wheelDeltaY;
	            }
	            wheelDeltaY = 0;
	        }
	        if (!this.scroll.hasHorizontalScroll) {
	            wheelDeltaX = 0;
	        }
	        var directionX = wheelDeltaX > 0
	            ? -1 /* Negative */
	            : wheelDeltaX < 0
	                ? 1 /* Positive */
	                : 0 /* Default */;
	        var directionY = wheelDeltaY > 0
	            ? -1 /* Negative */
	            : wheelDeltaY < 0
	                ? 1 /* Positive */
	                : 0 /* Default */;
	        return {
	            x: wheelDeltaX,
	            y: wheelDeltaY,
	            directionX: directionX,
	            directionY: directionY,
	        };
	    };
	    MouseWheel.prototype.beforeHandler = function (e) {
	        var _a = this.scroll.options, preventDefault = _a.preventDefault, stopPropagation = _a.stopPropagation, preventDefaultException = _a.preventDefaultException;
	        if (preventDefault &&
	            !preventDefaultExceptionFn$1(e.target, preventDefaultException)) {
	            maybePrevent$1(e);
	        }
	        if (stopPropagation) {
	            e.stopPropagation();
	        }
	    };
	    MouseWheel.prototype.getEaseTime = function () {
	        var SAFE_EASETIME = 100;
	        var easeTime = this.mouseWheelOpt.easeTime;
	        // scrollEnd event will be triggered in every calling of scrollTo when easeTime is too small
	        // easeTime needs to be greater than 100
	        if (easeTime < SAFE_EASETIME) {
	            warn$1("easeTime should be greater than 100." +
	                "If mouseWheel easeTime is too small," +
	                "scrollEnd will be triggered many times.");
	        }
	        return Math.max(easeTime, SAFE_EASETIME);
	    };
	    MouseWheel.prototype.destroy = function () {
	        this.eventRegister.destroy();
	        window.clearTimeout(this.wheelEndTimer);
	        window.clearTimeout(this.wheelMoveTimer);
	        this.hooksFn.forEach(function (item) {
	            var hooks = item[0];
	            var hooksName = item[1];
	            var handlerFn = item[2];
	            hooks.off(hooksName, handlerFn);
	        });
	    };
	    MouseWheel.pluginName = 'mouseWheel';
	    MouseWheel.applyOrder = "pre" /* Pre */;
	    return MouseWheel;
	}());

	var dayjs_min = createCommonjsModule(function (module, exports) {
	!function(t,e){module.exports=e();}(commonjsGlobal,(function(){var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",u="hour",a="day",o="week",c="month",f="quarter",h="year",d="date",l="Invalid Date",$=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return "["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},m=function(t,e,n){var r=String(t);return !r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},v={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return (e<=0?"+":"-")+m(r,2,"0")+":"+m(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return -t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,c),s=n-i<0,u=e.clone().add(r+(s?-1:1),c);return +(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return {M:c,y:h,w:o,d:a,D:d,h:u,m:s,s:i,ms:r,Q:f}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},g="en",D={};D[g]=M;var p="$isDayjsObject",S=function(t){return t instanceof _||!(!t||!t[p])},w=function t(e,n,r){var i;if(!e)return g;if("string"==typeof e){var s=e.toLowerCase();D[s]&&(i=s),n&&(D[s]=n,i=s);var u=e.split("-");if(!i&&u.length>1)return t(u[0])}else {var a=e.name;D[a]=e,i=a;}return !r&&i&&(g=i),i||!r&&g},O=function(t,e){if(S(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},b=v;b.l=w,b.i=S,b.w=function(t,e){return O(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function M(t){this.$L=w(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[p]=!0;}var m=M.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(b.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match($);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.init();},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds();},m.$utils=function(){return b},m.isValid=function(){return !(this.$d.toString()===l)},m.isSame=function(t,e){var n=O(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return O(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<O(t)},m.$g=function(t,e,n){return b.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!b.u(e)||e,f=b.p(t),l=function(t,e){var i=b.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},$=function(t,e){return b.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},y=this.$W,M=this.$M,m=this.$D,v="set"+(this.$u?"UTC":"");switch(f){case h:return r?l(1,0):l(31,11);case c:return r?l(1,M):l(0,M+1);case o:var g=this.$locale().weekStart||0,D=(y<g?y+7:y)-g;return l(r?m-D:m+(6-D),M);case a:case d:return $(v+"Hours",0);case u:return $(v+"Minutes",1);case s:return $(v+"Seconds",2);case i:return $(v+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var n,o=b.p(t),f="set"+(this.$u?"UTC":""),l=(n={},n[a]=f+"Date",n[d]=f+"Date",n[c]=f+"Month",n[h]=f+"FullYear",n[u]=f+"Hours",n[s]=f+"Minutes",n[i]=f+"Seconds",n[r]=f+"Milliseconds",n)[o],$=o===a?this.$D+(e-this.$W):e;if(o===c||o===h){var y=this.clone().set(d,1);y.$d[l]($),y.init(),this.$d=y.set(d,Math.min(this.$D,y.daysInMonth())).$d;}else l&&this.$d[l]($);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[b.p(t)]()},m.add=function(r,f){var d,l=this;r=Number(r);var $=b.p(f),y=function(t){var e=O(l);return b.w(e.date(e.date()+Math.round(t*r)),l)};if($===c)return this.set(c,this.$M+r);if($===h)return this.set(h,this.$y+r);if($===a)return y(1);if($===o)return y(7);var M=(d={},d[s]=e,d[u]=n,d[i]=t,d)[$]||1,m=this.$d.getTime()+r*M;return b.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||l;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=b.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,c=n.months,f=n.meridiem,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].slice(0,s)},d=function(t){return b.s(s%12||12,t,"0")},$=f||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(y,(function(t,r){return r||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return b.s(e.$y,4,"0");case"M":return a+1;case"MM":return b.s(a+1,2,"0");case"MMM":return h(n.monthsShort,a,c,3);case"MMMM":return h(c,a);case"D":return e.$D;case"DD":return b.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return h(n.weekdaysMin,e.$W,o,2);case"ddd":return h(n.weekdaysShort,e.$W,o,3);case"dddd":return o[e.$W];case"H":return String(s);case"HH":return b.s(s,2,"0");case"h":return d(1);case"hh":return d(2);case"a":return $(s,u,!0);case"A":return $(s,u,!1);case"m":return String(u);case"mm":return b.s(u,2,"0");case"s":return String(e.$s);case"ss":return b.s(e.$s,2,"0");case"SSS":return b.s(e.$ms,3,"0");case"Z":return i}return null}(t)||i.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,d,l){var $,y=this,M=b.p(d),m=O(r),v=(m.utcOffset()-this.utcOffset())*e,g=this-m,D=function(){return b.m(y,m)};switch(M){case h:$=D()/12;break;case c:$=D();break;case f:$=D()/3;break;case o:$=(g-v)/6048e5;break;case a:$=(g-v)/864e5;break;case u:$=g/n;break;case s:$=g/e;break;case i:$=g/t;break;default:$=g;}return l?$:b.a($)},m.daysInMonth=function(){return this.endOf(c).$D},m.$locale=function(){return D[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=w(t,e,!0);return r&&(n.$L=r),n},m.clone=function(){return b.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},M}(),k=_.prototype;return O.prototype=k,[["$ms",r],["$s",i],["$m",s],["$H",u],["$W",a],["$M",c],["$y",h],["$D",d]].forEach((function(t){k[t[1]]=function(e){return this.$g(e,t[0],t[1])};})),O.extend=function(t,e){return t.$i||(t(e,_,O),t.$i=!0),O},O.locale=w,O.isDayjs=S,O.unix=function(t){return O(1e3*t)},O.en=D[g],O.Ls=D,O.p={},O}));
	});

	var customParseFormat = createCommonjsModule(function (module, exports) {
	!function(e,t){module.exports=t();}(commonjsGlobal,(function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d\d/,r=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,o={},s=function(e){return (e=+e)+(e>68?1900:2e3)};var a=function(e){return function(t){this[e]=+t;}},f=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),n=60*t[1]+(+t[2]||0);return 0===n?0:"+"===t[0]?-n:n}(e);}],h=function(e){var t=o[e];return t&&(t.indexOf?t:t.s.concat(t.f))},u=function(e,t){var n,r=o.meridiem;if(r){for(var i=1;i<=24;i+=1)if(e.indexOf(r(i,0,t))>-1){n=i>12;break}}else n=e===(t?"pm":"PM");return n},d={A:[i,function(e){this.afternoon=u(e,!1);}],a:[i,function(e){this.afternoon=u(e,!0);}],S:[/\d/,function(e){this.milliseconds=100*+e;}],SS:[n,function(e){this.milliseconds=10*+e;}],SSS:[/\d{3}/,function(e){this.milliseconds=+e;}],s:[r,a("seconds")],ss:[r,a("seconds")],m:[r,a("minutes")],mm:[r,a("minutes")],H:[r,a("hours")],h:[r,a("hours")],HH:[r,a("hours")],hh:[r,a("hours")],D:[r,a("day")],DD:[n,a("day")],Do:[i,function(e){var t=o.ordinal,n=e.match(/\d+/);if(this.day=n[0],t)for(var r=1;r<=31;r+=1)t(r).replace(/\[|\]/g,"")===e&&(this.day=r);}],M:[r,a("month")],MM:[n,a("month")],MMM:[i,function(e){var t=h("months"),n=(h("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(n<1)throw new Error;this.month=n%12||n;}],MMMM:[i,function(e){var t=h("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t;}],Y:[/[+-]?\d+/,a("year")],YY:[n,function(e){this.year=s(e);}],YYYY:[/\d{4}/,a("year")],Z:f,ZZ:f};function c(n){var r,i;r=n,i=o&&o.formats;for(var s=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,n,r){var o=r&&r.toUpperCase();return n||i[r]||e[r]||i[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,n){return t||n.slice(1)}))}))).match(t),a=s.length,f=0;f<a;f+=1){var h=s[f],u=d[h],c=u&&u[0],l=u&&u[1];s[f]=l?{regex:c,parser:l}:h.replace(/^\[|\]$/g,"");}return function(e){for(var t={},n=0,r=0;n<a;n+=1){var i=s[n];if("string"==typeof i)r+=i.length;else {var o=i.regex,f=i.parser,h=e.slice(r),u=o.exec(h)[0];f.call(t,u),e=e.replace(u,"");}}return function(e){var t=e.afternoon;if(void 0!==t){var n=e.hours;t?n<12&&(e.hours+=12):12===n&&(e.hours=0),delete e.afternoon;}}(t),t}}return function(e,t,n){n.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(s=e.parseTwoDigitYear);var r=t.prototype,i=r.parse;r.parse=function(e){var t=e.date,r=e.utc,s=e.args;this.$u=r;var a=s[1];if("string"==typeof a){var f=!0===s[2],h=!0===s[3],u=f||h,d=s[2];h&&(d=s[2]),o=this.$locale(),!f&&d&&(o=n.Ls[d]),this.$d=function(e,t,n){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var r=c(t)(e),i=r.year,o=r.month,s=r.day,a=r.hours,f=r.minutes,h=r.seconds,u=r.milliseconds,d=r.zone,l=new Date,m=s||(i||o?1:l.getDate()),M=i||l.getFullYear(),Y=0;i&&!o||(Y=o>0?o-1:l.getMonth());var p=a||0,v=f||0,D=h||0,g=u||0;return d?new Date(Date.UTC(M,Y,m,p,v,D,g+60*d.offset*1e3)):n?new Date(Date.UTC(M,Y,m,p,v,D,g)):new Date(M,Y,m,p,v,D,g)}catch(e){return new Date("")}}(t,a,r),this.init(),d&&!0!==d&&(this.$L=this.locale(d).$L),u&&t!=this.format(a)&&(this.$d=new Date("")),o={};}else if(a instanceof Array)for(var l=a.length,m=1;m<=l;m+=1){s[1]=a[m-1];var M=n.apply(this,s);if(M.isValid()){this.$d=M.$d,this.$L=M.$L,this.init();break}m===l&&(this.$d=new Date(""));}else i.call(this,e);};}}));
	});

	var version = "3.4.1";

	BScroll.use(Wheel);
	BScroll.use(MouseWheel);
	dayjs_min.extend(customParseFormat);

	var $ = function $(selector, flag) {
	  if (typeof selector != 'string' && selector.nodeType) {
	    return selector;
	  }

	  return flag ? document.querySelectorAll(selector) : document.querySelector(selector);
	};

	function Rolldate() {
	  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	  var _this = this,
	      el = void 0;

	  _this.extend(config);
	  if (config.el) {
	    el = $(config.el);

	    if (!el || el.bindRolldate) {
	      return;
	    }
	    el.bindRolldate = 1;

	    _this.tap(el, function () {
	      _this.show();
	    });
	  }
	  // 设置默认日期
	  if (config.value) {
	    _this.setDefault();
	  }
	}
	Rolldate.prototype = {
	  constructor: Rolldate,
	  domId: {
	    YYYY: 'rolldate-year',
	    MM: 'rolldate-month',
	    DD: 'rolldate-day',
	    HH: 'rolldate-hour',
	    mm: 'rolldate-min',
	    ss: 'rolldate-sec',
	    A: 'rolldate-ampm'
	  },
	  baseConfig: function baseConfig() {
	    return { //插件默认配置
	      el: '',
	      format: 'YYYY-MM-DD',
	      beginYear: 2000,
	      endYear: 2100,
	      value: null,
	      min: null,
	      max: null,
	      init: null,
	      moveEnd: null,
	      confirm: null,
	      reset: null,
	      cancel: null,
	      minStep: 1,
	      showAMPM: false,
	      keepAMPMLeft: false,
	      trigger: 'tap',
	      lang: {
	        title: 'Select Date',
	        cancel: 'Cancel',
	        reset: 'Reset',
	        confirm: 'Confirm',
	        year: 'Year',
	        month: 'Month',
	        day: 'Day',
	        hour: 'Hour',
	        min: 'Min',
	        sec: 'Sec',
	        am: 'AM',
	        pm: 'PM'
	      }
	    };
	  },
	  extend: function extend(config) {
	    var _this = this,
	        opts = _this.baseConfig();

	    for (var key in opts) {
	      if (opts[key] && Object.prototype.toString.call(opts[key]) == '[object Object]') {
	        for (var key2 in config[key]) {
	          opts[key][key2] = config[key][key2] == undefined ? opts[key][key2] : config[key][key2];
	        }
	      } else {
	        opts[key] = config[key] || opts[key];
	      }
	    }
	    _this.config = opts;
	  },
	  createAmPmUI: function createAmPmUI(hour) {
	    var lang = this.config.lang;

	    var amActive = hour < 12 ? 'active' : '';
	    var pmActive = hour >= 12 ? 'active' : '';
	    return '<div id="' + this.domId['A'] + '">\n              <ul class="wheel-scroll">\n                <li class="wheel-item ' + amActive + '" data-index="0" data-value="0">' + lang.am + '</li>\n                <li class="wheel-item ' + pmActive + '" data-index="1" data-value="1">' + lang.pm + '</li>\n              </ul>\n            </div>';
	  },
	  createUI: function createUI() {
	    var config = this.config,
	        domId = this.domId,
	        FormatArr = config.format.split(/-|\/|\s|:/g),
	        len = FormatArr.length,
	        ul = '',
	        date = config.el ? $(config.el).bindDate || new Date() : this.bindDate || new Date(),
	        itemClass = '',
	        lang = config.lang;

	    for (var i = 0; i < len; i++) {
	      var f = FormatArr[i],
	          domMndex = 0;

	      if (f === 'HH' && config.showAMPM && config.keepAMPMLeft) {
	        ul += this.createAmPmUI(date.getHours());
	      }

	      ul += '<div id="' + domId[f] + '"><ul class="wheel-scroll">';

	      if (f == 'YYYY') {
	        for (var j = config.beginYear; j <= config.endYear; j++) {
	          itemClass = j == date.getFullYear() ? 'active' : '';

	          ul += '<li class="wheel-item ' + itemClass + '" data-index="' + domMndex + '" data-value="' + j + '">' + j + lang.year + '</li>';
	          domMndex++;
	        }
	      } else if (f == 'MM') {
	        for (var k = 1; k <= 12; k++) {
	          var value = (k + '').padStart(2, '0');
	          itemClass = k == date.getMonth() + 1 ? 'active' : '';
	          ul += '<li class="wheel-item ' + itemClass + '" data-index="' + domMndex + '" data-value="' + value + '">' + value + lang.month + '</li>';
	          domMndex++;
	        }
	      } else if (f == 'DD') {
	        var day = this.getMonthlyDay(date.getFullYear(), date.getMonth());
	        for (var l = 1; l <= day; l++) {
	          var _value = (l + '').padStart(2, '0');
	          itemClass = l == date.getDate() ? 'active' : '';

	          ul += '<li class="wheel-item ' + itemClass + '" data-index="' + domMndex + '" data-value="' + _value + '">' + _value + lang.day + '</li>';
	          domMndex++;
	        }
	      } else if (f == 'HH') {
	        var maxHour = config.showAMPM ? 11 : 23;
	        for (var m = 0; m <= maxHour; m++) {
	          var _value2 = (m + '').padStart(2, '0');
	          var displayValue = config.showAMPM ? m == 0 ? 12 : _value2 : _value2;
	          itemClass = m == (config.showAMPM ? date.getHours() % 12 : date.getHours()) ? 'active' : '';
	          ul += '<li class="wheel-item ' + itemClass + '" data-index="' + domMndex + '" data-value="' + _value2 + '">' + displayValue + lang.hour + '</li>';
	          domMndex++;
	        }
	      } else if (f == 'mm') {
	        for (var n = 0; n <= 59; n += config.minStep) {
	          var _value3 = (n + '').padStart(2, '0');
	          itemClass = n == date.getMinutes() ? 'active' : '';

	          ul += '<li class="wheel-item ' + itemClass + '" data-index="' + domMndex + '" data-value="' + _value3 + '">' + _value3 + lang.min + '</li>';
	          domMndex++;
	        }
	      } else if (f == 'ss') {
	        for (var o = 0; o <= 59; o++) {
	          var _value4 = (o + '').padStart(2, '0');
	          itemClass = o == date.getSeconds() ? 'active' : '';

	          ul += '<li class="wheel-item ' + itemClass + '" data-index="' + domMndex + '" data-value="' + _value4 + '">' + _value4 + lang.sec + '</li>';
	          domMndex++;
	        }
	      }
	      ul += '</ul></div>';
	    }
	    var $html = '<div class="rolldate-mask"></div>\n            <div class="rolldate-panel">\n                <header>\n                    <span class="rolldate-btn rolldate-cancel">' + lang.cancel + '</span>\n                    ' + lang.title + '\n                    <span class="rolldate-btn rolldate-confirm">' + lang.confirm + '</span>\n                </header>\n                <section class="rolldate-content">\n                    <div class="rolldate-dim mask-top"></div>\n                    <div class="rolldate-dim mask-bottom"></div>\n                    <div class="rolldate-wrapper">\n                        ' + ul + '\n                        ' + (config.showAMPM && !config.keepAMPMLeft ? this.createAmPmUI(date.getHours()) : '') + '\n                    </div>\n                </section>\n                <footer>\n                    <span class="rolldate-btn rolldate-reset">' + lang.reset + '</span>\n                </footer>\n            </div>',
	        box = document.createElement("div");

	    box.className = 'rolldate-container';
	    box.innerHTML = $html;
	    document.body.appendChild(box);

	    this.scroll = {};

	    for (var _i = 0; _i < len; _i++) {
	      this.createBScroll.call(this, FormatArr[_i], date);
	    }

	    if (config.showAMPM) {
	      this.createBScroll.call(this, 'A', date);
	    }
	    this.adjustMinMax(0);
	    $('.rolldate-panel').className = 'rolldate-panel fadeIn';
	  },
	  adjustMonthlyDay: function adjustMonthlyDay(scroll) {
	    var domId = this.domId;
	    var lang = this.config.lang;
	    if ([domId['YYYY'], domId['MM']].indexOf(scroll.wrapper.id) != -1 && this.scroll['YYYY'] && this.scroll['MM'] && this.scroll['DD']) {
	      var day = this.getMonthlyDay(this.getSelected(this.scroll['YYYY']), this.getSelected(this.scroll['MM']) - 1),
	          li = '';

	      if (day != $('#' + domId['DD'] + ' li', 1).length) {

	        for (var l = 1; l <= day; l++) {
	          var value = (l + '').padStart(2, '0');
	          li += '<li class="wheel-item" data-index="' + (l - 1) + '" data-value="' + value + '">' + value + lang.day + '</li>';
	        }
	        $('#' + domId['DD'] + ' ul').innerHTML = li;
	        this.scroll['DD'].refresh();
	      }
	    }
	  },
	  createBScroll: function createBScroll(formatAttr, date) {
	    var _this2 = this;

	    var $id = this.domId[formatAttr];
	    var confirm = $('.rolldate-confirm');
	    var reset = $('.rolldate-reset');
	    var config = this.config;
	    this.scroll[formatAttr] = new BScroll('#' + $id, {
	      disableMouse: false,
	      disableTouch: false,
	      wheel: {
	        selectedIndex: 0
	      },
	      mouseWheel: {
	        speed: 1
	      }
	    });

	    var that = this.scroll[formatAttr],
	        active = $('#' + $id + ' .active'),
	        index = active ? active.getAttribute('data-index') : Math.round(date.getMinutes() / config.minStep);

	    that.wheelTo(index);

	    that.on('scrollStart', function () {
	      reset.classList.add('disabled');
	      confirm.classList.add('disabled');
	    });
	    that.on('mousewheelStart', function () {
	      reset.classList.add('disabled');
	      confirm.classList.add('disabled');
	    });

	    // 滚动结束
	    that.on('scrollEnd', function () {
	      var isScrollEnd = _Object$values(_this2.scroll).reduce(function (prev, curr) {
	        return curr.pending || curr;
	      }, false);
	      if (isScrollEnd) {
	        confirm.classList.remove('disabled');
	        reset.classList.remove('disabled');
	      }

	      if (config.moveEnd) {
	        config.moveEnd.call(_this2, that);
	      }

	      _this2.adjustMinMax.call(_this2);
	      _this2.adjustMonthlyDay.call(_this2, that);
	    });
	  },
	  adjustMinMax: function adjustMinMax() {
	    var animateTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 500;

	    var config = this.config;
	    var date = this.getSelectedDate(),
	        current = dayjs_min(date),
	        min = dayjs_min(config.min, config.format),
	        max = dayjs_min(config.max, config.format);
	    if (current.isBefore(min)) {
	      this.scrollToDateTime(min, animateTime);
	    }
	    if (current.isAfter(max)) {
	      this.scrollToDateTime(max, animateTime);
	    }
	  },
	  scrollToDateTime: function scrollToDateTime(date) {
	    var animateTime = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;

	    if (this.scroll['YYYY']) {
	      this.scroll['YYYY'].wheelTo(date.year() - this.config.beginYear, animateTime);
	    }
	    if (this.scroll['MM']) {
	      this.scroll['MM'].wheelTo(date.month(), animateTime);
	    }
	    if (this.scroll['DD']) {
	      this.scroll['DD'].wheelTo(date.date() - 1, animateTime);
	    }
	    if (this.scroll['HH']) {
	      if (this.config.showAMPM) {
	        this.scroll['A'].wheelTo(Math.floor(date.hour() / 12), animateTime);
	        this.scroll['HH'].wheelTo(date.hour() % 12, animateTime);
	      } else {
	        this.scroll['HH'].wheelTo(date.hour(), animateTime);
	      }
	    }
	    if (this.scroll['mm']) {
	      this.scroll['mm'].wheelTo(Math.round(date.minute() / this.config.minStep), animateTime);
	    }
	    if (this.scroll['ss']) {
	      this.scroll['ss'].wheelTo(date.minute(), animateTime);
	    }
	  },
	  tap: function tap(el, fn) {
	    var _this = this,
	        hasTouch = "ontouchstart" in window;

	    if (hasTouch && _this.config.trigger == 'tap') {
	      var o = {},
	          touchstart = function touchstart(e) {
	        var t = e.touches[0];

	        o.startX = t.pageX;
	        o.startY = t.pageY;
	        o.sTime = +new Date();
	      },
	          touchend = function touchend(e) {
	        var t = e.changedTouches[0];

	        o.endX = t.pageX;
	        o.endY = t.pageY;
	        if (+new Date() - o.sTime < 300) {
	          if (Math.abs(o.endX - o.startX) + Math.abs(o.endY - o.startY) < 20) {
	            e.preventDefault();
	            fn.call(this, e);
	          }
	        }
	        o = {};
	      };

	      if (typeof fn == 'function') {
	        el.addEventListener('touchstart', touchstart);
	        el.addEventListener('touchend', touchend);
	      } else {
	        el.removeEventListener('touchstart', touchstart);
	        el.removeEventListener('touchend', touchend);
	      }
	    } else {
	      var click = function click(e) {
	        fn.call(this, e);
	      };
	      if (typeof fn == 'function') {
	        el.addEventListener('click', click);
	      } else {
	        el.removeEventListener('click', click);
	      }
	    }
	  },
	  show: function show() {
	    var _this = this,
	        config = _this.config,
	        el = void 0;

	    if (config.el) {
	      el = $(config.el);

	      if (!el.bindRolldate) {
	        return;
	      }
	      if (el.nodeName.toLowerCase() == 'input') {
	        el.blur();
	      }
	    }
	    if ($('.rolldate-container')) {
	      return;
	    }
	    if (config.init && config.init.call(_this) === false) {
	      return;
	    }

	    _this.createUI();
	    _this.event();
	  },
	  hide: function hide(flag) {
	    var _this = this,
	        el = $('.rolldate-panel.fadeIn');

	    if (el) {
	      el.className = 'rolldate-panel fadeOut';
	      _this.destroy(flag);
	    }
	  },
	  event: function event() {
	    var _this = this,
	        mask = $('.rolldate-mask'),
	        cancel = $('.rolldate-cancel'),
	        confirm = $('.rolldate-confirm'),
	        reset = $('.rolldate-reset');

	    _this.tap(mask, function () {
	      _this.hide(1);
	    });
	    _this.tap(cancel, function () {
	      _this.hide(1);
	    });
	    _this.tap(confirm, function () {
	      if (confirm.classList.contains('disabled')) return;

	      var config = _this.config;

	      var date = _this.getSelectedDate();
	      console.log(date);
	      var displayValue = dayjs_min(date).format(config.format);

	      if (config.confirm) {
	        var flag = config.confirm.call(_this, displayValue);
	        if (flag === false) {
	          return false;
	        } else if (flag) {
	          displayValue = flag;
	        }
	      }
	      _this.bindDateToEl(date, displayValue);
	      _this.hide();
	    });
	    _this.tap(reset, function () {
	      if (reset.classList.contains('disabled')) return;

	      var config = _this.config,
	          resetValue = void 0,
	          el = config.el ? $(config.el) : null;

	      if (config.reset) {
	        var value = el ? el.value : '';
	        resetValue = config.reset.call(_this, value);
	        _this.setDefault(resetValue);
	      } else {
	        _this.setDefault();
	      }

	      var date = void 0;
	      if (config.value) {
	        date = el ? el.bindDate : _this.bindDate;
	      } else {
	        date = new Date();
	      }

	      _this.scrollToDateTime(dayjs_min(date));
	      _this.adjustMinMax();
	    });
	  },
	  bindDateToEl: function bindDateToEl(date, displayValue) {
	    var config = this.config,
	        el = void 0;

	    if (config.el) {
	      el = $(config.el);
	      if (el.nodeName.toLowerCase() == 'input') {
	        el.value = displayValue;
	      } else {
	        el.innerText = displayValue;
	      }
	      el.bindDate = date;
	    } else {
	      this.bindDate = date;
	    }
	  },
	  getSelectedDate: function getSelectedDate() {
	    var _this3 = this;

	    // 建立映射關係，定義各滾輪值如何應用到日期上
	    var setterMap = {
	      'YYYY': function YYYY(date, value) {
	        return date.setFullYear(value);
	      },
	      'MM': function MM() {}, // 月份稍後處理
	      'DD': function DD() {}, // 日期稍後處理
	      'HH': function HH(date, value, config, ampm) {
	        if (config.showAMPM) {
	          var hour = parseInt(value) + (ampm || 0) * 12;
	          date.setHours(hour);
	        } else {
	          date.setHours(value);
	        }
	      },
	      'mm': function mm(date, value) {
	        return date.setMinutes(value);
	      },
	      'ss': function ss(date, value) {
	        return date.setSeconds(value);
	      }
	    };

	    // 收集所有滾輪的數值
	    var selected = {};
	    var ampmValue = void 0;

	    _Object$entries(this.scroll).forEach(function (_ref) {
	      var _ref2 = _slicedToArray(_ref, 2),
	          key = _ref2[0],
	          scroll = _ref2[1];

	      if (key === 'A') {
	        ampmValue = _this3.getSelected(scroll);
	        return;
	      }
	      selected[key] = parseInt(_this3.getSelected(scroll));
	    });

	    // 創建新的日期物件
	    var date = new Date();

	    // 先處理非日期和月份的設置
	    _Object$entries(selected).forEach(function (_ref3) {
	      var _ref4 = _slicedToArray(_ref3, 2),
	          key = _ref4[0],
	          value = _ref4[1];

	      if (key !== 'MM' && key !== 'DD') {
	        setterMap[key](date, value, _this3.config, ampmValue);
	      }
	    });

	    // 日期和月份特殊處理，避免日期溢出問題
	    if (selected.MM && selected.DD) {
	      date.setDate(1); // 先設為1號，避免月份切換時的溢出問題
	      date.setMonth(selected.MM - 1);

	      // 確保日期不超過當月最大天數
	      var maxDays = this.getMonthlyDay(date.getFullYear(), date.getMonth());
	      date.setDate(Math.min(selected.DD, maxDays));
	    }

	    return date;
	  },
	  getMonthlyDay: function getMonthlyDay(year, month) {
	    return dayjs_min().year(year).month(month).daysInMonth();
	  },
	  destroy: function destroy(flag) {
	    var _this = this,
	        config = _this.config;

	    for (var i in _this.scroll) {
	      _this.scroll[i].destroy();
	    }

	    if (flag && config.cancel) {
	      config.cancel.call(_this);
	    }

	    _this.tap($('.rolldate-mask'), 0);
	    _this.tap($('.rolldate-cancel'), 0);
	    _this.tap($('.rolldate-confirm'), 0);
	    _this.tap($('.rolldate-reset'), 0);
	    setTimeout(function () {
	      var el = $('.rolldate-container');

	      if (el) document.body.removeChild(el);
	      el = null;
	    }, 300);
	  },
	  getSelected: function getSelected(scroll) {
	    return $('#' + scroll.wrapper.id + ' li', 1)[scroll.getSelectedIndex()].dataset.value;
	  },
	  setDefault: function setDefault(defaultValue) {
	    var displayValue = defaultValue || this.config.value || '';
	    var date = dayjs_min(displayValue, this.config.format).toDate();

	    if (!date || date == 'Invalid Date') {
	      this.bindDateToEl(new Date(), displayValue);
	    } else {
	      this.bindDateToEl(date, displayValue);
	    }
	  }
	};
	Rolldate.version = version;

	return Rolldate;

})));
