/*! For license information please see 45.js.LICENSE.txt */
;(window.webpackJsonp = window.webpackJsonp || []).push([
  [45],
  {
    518: function (e, t, r) {
      'use strict'
      r.d(t, 'n', function () {
        return Q
      }),
        r.d(t, 'i', function () {
          return X
        }),
        r.d(t, 'k', function () {
          return ee
        }),
        r.d(t, 'b', function () {
          return te
        }),
        r.d(t, 'e', function () {
          return re
        }),
        r.d(t, 'g', function () {
          return oe
        }),
        r.d(t, 'l', function () {
          return ne
        }),
        r.d(t, 'd', function () {
          return ce
        }),
        r.d(t, 'j', function () {
          return ae
        }),
        r.d(t, 'h', function () {
          return ue
        }),
        r.d(t, 'f', function () {
          return ie
        }),
        r.d(t, 'm', function () {
          return se
        }),
        r.d(t, 'c', function () {
          return le
        }),
        r.d(t, 'a', function () {
          return fe
        })
      var o = r(63),
        n = r.n(o),
        c = r(22),
        a = r.n(c),
        u = r(520),
        i = r.n(u),
        s = r(30),
        l = r.n(s),
        f = r(519),
        p = r.n(f),
        d = r(26),
        y = r.n(d),
        v = r(169),
        m = r.n(v),
        x = r(109),
        b = r.n(x),
        _ = r(52),
        h = r.n(_),
        w = r(172),
        g = r.n(w),
        S = r(534),
        O = r.n(S),
        j = r(27),
        P = r.n(j),
        M = r(6),
        $ = r.n(M),
        T = r(24),
        E = r.n(T),
        k = r(115),
        C = r.n(k),
        I = r(35),
        L = r.n(I),
        R = r(67),
        D = r.n(R),
        H = r(68),
        F = r.n(H),
        K = r(552),
        W = r.n(K),
        q = r(554),
        N = r.n(q),
        U = r(556),
        B = r.n(U),
        V = r(44),
        J = r.n(V)
      function ownKeys(e, t) {
        var r = a()(e)
        if (i.a) {
          var o = i()(e)
          t &&
            (o = l()(o).call(o, function (t) {
              return p()(e, t).enumerable
            })),
            r.push.apply(r, o)
        }
        return r
      }
      function _objectSpread(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r,
            o = null != arguments[t] ? arguments[t] : {}
          if (t % 2)
            y()((r = ownKeys(Object(o), !0))).call(r, function (t) {
              E()(e, t, o[t])
            })
          else if (m.a) b()(e, m()(o))
          else {
            var n
            y()((n = ownKeys(Object(o)))).call(n, function (t) {
              h()(e, t, p()(o, t))
            })
          }
        }
        return e
      }
      function _createSuper(e) {
        var t = (function _isNativeReflectConstruct() {
          if ('undefined' == typeof Reflect || !g.a) return !1
          if (g.a.sham) return !1
          if ('function' == typeof Proxy) return !0
          try {
            return (
              Boolean.prototype.valueOf.call(g()(Boolean, [], function () {})),
              !0
            )
          } catch (e) {
            return !1
          }
        })()
        return function _createSuperInternal() {
          var r,
            o = B()(e)
          if (t) {
            var n = B()(this).constructor
            r = g()(o, arguments, n)
          } else r = o.apply(this, arguments)
          return N()(this, r)
        }
      }
      n.a.createElement
      function updateStyle(e, t, r) {
        ;/^--/.test(t) ? e.style.setProperty(t, r) : (e.style[t] = r)
      }
      function updateProp(e, t, r, o, n) {
        var c = e.ref.current,
          a = n[r],
          u = o ? o[r] : void 0
        if ('children' !== r)
          if ('classname' !== r.toLowerCase()) {
            if ('style' !== r) {
              if (
                (/^data-.+/.test(r) && c.setAttribute(r, a),
                'taro-scroll-view-core' === t)
              ) {
                if ('scrollTop' === r) return void (c.mpScrollTop = a)
                if ('scrollLeft' === r) return void (c.mpScrollLeft = a)
                if ('scrollIntoView' === r) return void (c.mpScrollIntoView = a)
              }
              if ('function' == typeof a && r.match(/^on[A-Z]/)) {
                var i = r.substr(2).toLowerCase(),
                  s = a
                return (
                  'taro-scroll-view-core' === t &&
                    'scroll' === i &&
                    (s = function fn(e) {
                      e instanceof CustomEvent && a.apply(null, O()(arguments))
                    }),
                  e.eventHandlers.push([i, s]),
                  c.addEventListener(i, s)
                )
              }
              return 'string' == typeof a || 'number' == typeof a
                ? (c.setAttribute(r, a), void (c[r] = a))
                : 'boolean' == typeof a
                ? a
                  ? ((c[r] = !0), c.setAttribute(r, a))
                  : ((c[r] = !1), c.removeAttribute(r))
                : void (c[r] = a)
            }
            if ('string' == typeof a) return void c.setAttribute(r, a)
            if (!a) return void c.removeAttribute(r)
            if (o)
              if ('string' == typeof u) c.style.cssText = ''
              else for (var f in u) updateStyle(c, f, '')
            for (var p in a) updateStyle(c, p, a[p])
          } else
            c.className = o
              ? (function getClassName(e, t, r) {
                  var o,
                    n = O()(e.classList),
                    c = (t.className || t.class || '').split(' '),
                    a = (r.className || r.class || '').split(' '),
                    u = []
                  return (
                    y()(n).call(n, function (e) {
                      P()(a).call(a, e) > -1
                        ? (u.push(e),
                          (a = l()(a).call(a, function (t) {
                            return t !== e
                          })))
                        : -1 === P()(c).call(c, e) && u.push(e)
                    }),
                    (u = $()((o = [])).call(o, J()(u), J()(a))).join(' ')
                  )
                })(c, o, n)
              : a
      }
      var Y = function reactifyWebComponent(e) {
        var t = (function (t) {
          W()(Index, t)
          var r = _createSuper(Index)
          function Index(e) {
            var t
            return (
              D()(this, Index),
              ((t = r.call(this, e)).eventHandlers = []),
              (t.ref = Object(o.createRef)()),
              t
            )
          }
          return (
            F()(Index, [
              {
                key: 'update',
                value: function update(t) {
                  var r,
                    o,
                    n = this
                  this.clearEventHandlers(),
                    this.ref.current &&
                      (y()((r = a()(t || {}))).call(r, function (r) {
                        'children' === r ||
                          'key' === r ||
                          r in n.props ||
                          updateProp(n, e, r, t, n.props)
                      }),
                      y()((o = a()(this.props))).call(o, function (r) {
                        updateProp(n, e, r, t, n.props)
                      }))
                },
              },
              {
                key: 'componentDidUpdate',
                value: function componentDidUpdate(e) {
                  this.update(e)
                },
              },
              {
                key: 'componentDidMount',
                value: function componentDidMount() {
                  var e = this.props.forwardRef
                  'function' == typeof e
                    ? e(this.ref.current)
                    : e && 'object' === L()(e) && e.hasOwnProperty('current')
                    ? (e.current = this.ref.current)
                    : 'string' == typeof e &&
                      console.warn('内置组件不支持字符串 ref'),
                    this.update()
                },
              },
              {
                key: 'componentWillUnmount',
                value: function componentWillUnmount() {
                  this.clearEventHandlers()
                },
              },
              {
                key: 'clearEventHandlers',
                value: function clearEventHandlers() {
                  var e,
                    t = this
                  y()((e = this.eventHandlers)).call(e, function (e) {
                    var r = C()(e, 2),
                      o = r[0],
                      n = r[1]
                    t.ref.current && t.ref.current.removeEventListener(o, n)
                  }),
                    (this.eventHandlers = [])
                },
              },
              {
                key: 'render',
                value: function render() {
                  var t = this.props,
                    r = t.children,
                    n = t.dangerouslySetInnerHTML,
                    c = { ref: this.ref }
                  return (
                    n && (c.dangerouslySetInnerHTML = n),
                    Object(o.createElement)(e, c, r)
                  )
                },
              },
            ]),
            Index
          )
        })(n.a.Component)
        return n.a.forwardRef(function (e, r) {
          return n.a.createElement(
            t,
            _objectSpread(_objectSpread({}, e), {}, { forwardRef: r }),
          )
        })
      }
      function input_ownKeys(e, t) {
        var r = a()(e)
        if (i.a) {
          var o = i()(e)
          t &&
            (o = l()(o).call(o, function (t) {
              return p()(e, t).enumerable
            })),
            r.push.apply(r, o)
        }
        return r
      }
      function input_objectSpread(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r,
            o = null != arguments[t] ? arguments[t] : {}
          if (t % 2)
            y()((r = input_ownKeys(Object(o), !0))).call(r, function (t) {
              E()(e, t, o[t])
            })
          else if (m.a) b()(e, m()(o))
          else {
            var n
            y()((n = input_ownKeys(Object(o)))).call(n, function (t) {
              h()(e, t, p()(o, t))
            })
          }
        }
        return e
      }
      var Z = Y('taro-input-core'),
        G =
          (n.a.createElement,
          n.a.forwardRef(function (e, t) {
            var r = input_objectSpread({}, e)
            return (
              r.hasOwnProperty('focus') &&
                ((r.autoFocus = Boolean(r.focus)), delete r.focus),
              n.a.createElement(
                Z,
                input_objectSpread(input_objectSpread({}, r), {}, { ref: t }),
              )
            )
          })),
        Q = Y('taro-view-core'),
        X =
          (Y('taro-icon-core'),
          Y('taro-progress-core'),
          Y('taro-rich-text-core')),
        ee = Y('taro-text-core'),
        te = Y('taro-button-core'),
        re =
          (Y('taro-checkbox-core'),
          Y('taro-checkbox-group-core'),
          Y('taro-editor-core'),
          Y('taro-form-core')),
        oe = G,
        ne =
          (Y('taro-label-core'),
          Y('taro-picker-core'),
          Y('taro-picker-view-core'),
          Y('taro-picker-view-column-core'),
          Y('taro-radio-core'),
          Y('taro-radio-group-core'),
          Y('taro-slider-core'),
          Y('taro-switch-core'),
          Y('taro-cover-image-core'),
          Y('taro-textarea-core')),
        ce = Y('taro-cover-view-core'),
        ae =
          (Y('taro-movable-area-core'),
          Y('taro-movable-view-core'),
          Y('taro-scroll-view-core')),
        ue =
          (Y('taro-swiper-core'),
          Y('taro-swiper-item-core'),
          Y('taro-functional-page-navigator-core'),
          Y('taro-navigator-core')),
        ie =
          (Y('taro-audio-core'), Y('taro-camera-core'), Y('taro-image-core')),
        se = (Y('taro-live-player-core'), Y('taro-video-core')),
        le = (Y('taro-map-core'), Y('taro-canvas-core')),
        fe =
          (Y('taro-ad-core'),
          Y('taro-official-account-core'),
          Y('taro-open-data-core'),
          Y('taro-web-view-core'),
          Y('taro-navigation-bar-core'),
          o.Fragment)
      Y('taro-custom-wrapper-core')
    },
    519: function (e, t, r) {
      e.exports = r(539)
    },
    520: function (e, t, r) {
      e.exports = r(536)
    },
    522: function (e, t, r) {
      var o = r(110)
      ;(e.exports = function _defineProperty(e, t, r) {
        return (
          t in e
            ? o(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        )
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0)
    },
    523: function (e, t, r) {
      var o = r(542),
        n = r(535),
        c = r(550)
      ;(e.exports = function _objectWithoutProperties(e, t) {
        if (null == e) return {}
        var r,
          a,
          u = c(e, t)
        if (o) {
          var i = o(e)
          for (a = 0; a < i.length; a++)
            (r = i[a]),
              n(t).call(t, r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (u[r] = e[r]))
        }
        return u
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0)
    },
    524: function (e, t, r) {
      var o = r(565),
        n = r(566),
        c = r(558),
        a = r(567)
      ;(e.exports = function _slicedToArray(e, t) {
        return o(e) || n(e, t) || c(e, t) || a()
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0)
    },
    534: function (e, t, r) {
      e.exports = r(227)
    },
    535: function (e, t, r) {
      e.exports = r(549)
    },
    536: function (e, t, r) {
      var o = r(547)
      e.exports = o
    },
    539: function (e, t, r) {
      var o = r(544)
      e.exports = o
    },
    542: function (e, t, r) {
      e.exports = r(548)
    },
    543: function (e, t, r) {
      e.exports = r(551)
    },
    544: function (e, t, r) {
      r(545)
      var o = r(11).Object,
        n = (e.exports = function getOwnPropertyDescriptor(e, t) {
          return o.getOwnPropertyDescriptor(e, t)
        })
      o.getOwnPropertyDescriptor.sham && (n.sham = !0)
    },
    545: function (e, t, r) {
      var o = r(4),
        n = r(10),
        c = r(39),
        a = r(66).f,
        u = r(25),
        i = n(function () {
          a(1)
        })
      o(
        { target: 'Object', stat: !0, forced: !u || i, sham: !u },
        {
          getOwnPropertyDescriptor: function getOwnPropertyDescriptor(e, t) {
            return a(c(e), t)
          },
        },
      )
    },
    547: function (e, t, r) {
      r(228)
      var o = r(11)
      e.exports = o.Object.getOwnPropertySymbols
    },
    548: function (e, t, r) {
      var o = r(536)
      e.exports = o
    },
    549: function (e, t, r) {
      var o = r(229)
      e.exports = o
    },
    550: function (e, t, r) {
      var o = r(543),
        n = r(535)
      ;(e.exports = function _objectWithoutPropertiesLoose(e, t) {
        if (null == e) return {}
        var r,
          c,
          a = {},
          u = o(e)
        for (c = 0; c < u.length; c++)
          (r = u[c]), n(t).call(t, r) >= 0 || (a[r] = e[r])
        return a
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0)
    },
    551: function (e, t, r) {
      var o = r(230)
      e.exports = o
    },
    552: function (e, t, r) {
      var o = r(553)
      ;(e.exports = function _inherits(e, t) {
        if ('function' != typeof t && null !== t)
          throw new TypeError(
            'Super expression must either be null or a function',
          )
        ;(e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(e, 'prototype', { writable: !1 }),
          t && o(e, t)
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports)
    },
    553: function (e, t) {
      function _setPrototypeOf(t, r) {
        return (
          (e.exports = _setPrototypeOf =
            Object.setPrototypeOf ||
            function _setPrototypeOf(e, t) {
              return (e.__proto__ = t), e
            }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports),
          _setPrototypeOf(t, r)
        )
      }
      ;(e.exports = _setPrototypeOf),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports)
    },
    554: function (e, t, r) {
      var o = r(35).default,
        n = r(555)
      ;(e.exports = function _possibleConstructorReturn(e, t) {
        if (t && ('object' === o(t) || 'function' == typeof t)) return t
        if (void 0 !== t)
          throw new TypeError(
            'Derived constructors may only return object or undefined',
          )
        return n(e)
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports)
    },
    555: function (e, t) {
      ;(e.exports = function _assertThisInitialized(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          )
        return e
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports)
    },
    556: function (e, t) {
      function _getPrototypeOf(t) {
        return (
          (e.exports = _getPrototypeOf =
            Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function _getPrototypeOf(e) {
                  return e.__proto__ || Object.getPrototypeOf(e)
                }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports),
          _getPrototypeOf(t)
        )
      }
      ;(e.exports = _getPrototypeOf),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports)
    },
    558: function (e, t, r) {
      var o = r(173),
        n = r(114),
        c = r(559)
      ;(e.exports = function _unsupportedIterableToArray(e, t) {
        var r
        if (e) {
          if ('string' == typeof e) return c(e, t)
          var a = o((r = Object.prototype.toString.call(e))).call(r, 8, -1)
          return (
            'Object' === a && e.constructor && (a = e.constructor.name),
            'Map' === a || 'Set' === a
              ? n(e)
              : 'Arguments' === a ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)
              ? c(e, t)
              : void 0
          )
        }
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0)
    },
    559: function (e, t) {
      ;(e.exports = function _arrayLikeToArray(e, t) {
        ;(null == t || t > e.length) && (t = e.length)
        for (var r = 0, o = new Array(t); r < t; r++) o[r] = e[r]
        return o
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0)
    },
    565: function (e, t, r) {
      var o = r(112)
      ;(e.exports = function _arrayWithHoles(e) {
        if (o(e)) return e
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0)
    },
    566: function (e, t, r) {
      var o = r(40),
        n = r(113)
      ;(e.exports = function _iterableToArrayLimit(e, t) {
        var r = null == e ? null : (void 0 !== o && n(e)) || e['@@iterator']
        if (null != r) {
          var c,
            a,
            u = [],
            i = !0,
            s = !1
          try {
            for (
              r = r.call(e);
              !(i = (c = r.next()).done) &&
              (u.push(c.value), !t || u.length !== t);
              i = !0
            );
          } catch (e) {
            ;(s = !0), (a = e)
          } finally {
            try {
              i || null == r.return || r.return()
            } finally {
              if (s) throw a
            }
          }
          return u
        }
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0)
    },
    567: function (e, t) {
      ;(e.exports = function _nonIterableRest() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        )
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0)
    },
    577: function (e, t, r) {
      'use strict'
      r.d(t, 'a', function () {
        return s
      })
      var o,
        n = r(5),
        c = r.n(n),
        a = r(3),
        u = r(43),
        i = r(16),
        s = function pageScrollTo(e) {
          var t,
            r = e.scrollTop,
            n = e.selector,
            s = void 0 === n ? '' : n,
            l = e.duration,
            f = void 0 === l ? 300 : l,
            p = e.success,
            d = e.fail,
            y = e.complete,
            v = new u.a({
              name: 'pageScrollTo',
              success: p,
              fail: d,
              complete: y,
            })
          return new c.a(function (e, n) {
            var c, u
            try {
              if (void 0 === r && !s)
                return v.fail(
                  { errMsg: 'scrollTop" 或 "selector" 需要其之一' },
                  n,
                )
              var l =
                  null ===
                    (u =
                      null === (c = a.a.page) || void 0 === c
                        ? void 0
                        : c.path) || void 0 === u
                    ? void 0
                    : u.replace(/([^a-z0-9\u00a0-\uffff_-])/gi, '\\$1'),
                p = l
                  ? document.querySelector('.taro_page#'.concat(l))
                  : document.querySelector('.taro_page') ||
                    document.querySelector('.taro_router')
              t ||
                (t = p
                  ? function scrollFunc(e) {
                      if (void 0 === e) return p.scrollTop
                      p.scrollTop = e
                    }
                  : function scrollFunc(e) {
                      if (void 0 === e) return window.pageYOffset
                      window.scrollTo(0, e)
                    }),
                r &&
                  s &&
                  console.warn(
                    '"scrollTop" 或 "selector" 建议只设一个值，全部设置会忽略selector',
                  )
              var d,
                y = t()
              if ('number' == typeof r) d = r
              else {
                var m = document.querySelector(s)
                d = (null == m ? void 0 : m.offsetTop) || 0
              }
              var x = d - y,
                b = f / 17,
                _ = Object(i.d)(i.a, b)
              !(function scroll() {
                var r =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : 0,
                  n = y + x * _(r)
                if ((t(n), !(r < b))) return v.success({}, e)
                o && clearTimeout(o),
                  (o = setTimeout(function () {
                    scroll(r + 1)
                  }, 17))
              })()
            } catch (e) {
              return v.fail({ errMsg: e.message }, n)
            }
          })
        }
    },
    580: function (e, t, r) {
      'use strict'
      var o = r(581)
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function toArray(e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            r = []
          return (
            n.default.Children.forEach(e, function (e) {
              ;(null != e || t.keepEmpty) &&
                (Array.isArray(e)
                  ? (r = r.concat(toArray(e)))
                  : (0, c.isFragment)(e) && e.props
                  ? (r = r.concat(toArray(e.props.children, t)))
                  : r.push(e))
            }),
            r
          )
        })
      var n = o(r(63)),
        c = r(582)
    },
    581: function (e, t) {
      ;(e.exports = function _interopRequireDefault(e) {
        return e && e.__esModule ? e : { default: e }
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports)
    },
    582: function (e, t, r) {
      'use strict'
      e.exports = r(583)
    },
    583: function (e, t, r) {
      'use strict'
      var o = 'function' == typeof Symbol && Symbol.for,
        n = o ? Symbol.for('react.element') : 60103,
        c = o ? Symbol.for('react.portal') : 60106,
        a = o ? Symbol.for('react.fragment') : 60107,
        u = o ? Symbol.for('react.strict_mode') : 60108,
        i = o ? Symbol.for('react.profiler') : 60114,
        s = o ? Symbol.for('react.provider') : 60109,
        l = o ? Symbol.for('react.context') : 60110,
        f = o ? Symbol.for('react.async_mode') : 60111,
        p = o ? Symbol.for('react.concurrent_mode') : 60111,
        d = o ? Symbol.for('react.forward_ref') : 60112,
        y = o ? Symbol.for('react.suspense') : 60113,
        v = o ? Symbol.for('react.suspense_list') : 60120,
        m = o ? Symbol.for('react.memo') : 60115,
        x = o ? Symbol.for('react.lazy') : 60116,
        b = o ? Symbol.for('react.block') : 60121,
        _ = o ? Symbol.for('react.fundamental') : 60117,
        h = o ? Symbol.for('react.responder') : 60118,
        w = o ? Symbol.for('react.scope') : 60119
      function z(e) {
        if ('object' == typeof e && null !== e) {
          var t = e.$$typeof
          switch (t) {
            case n:
              switch ((e = e.type)) {
                case f:
                case p:
                case a:
                case i:
                case u:
                case y:
                  return e
                default:
                  switch ((e = e && e.$$typeof)) {
                    case l:
                    case d:
                    case x:
                    case m:
                    case s:
                      return e
                    default:
                      return t
                  }
              }
            case c:
              return t
          }
        }
      }
      function A(e) {
        return z(e) === p
      }
      ;(t.AsyncMode = f),
        (t.ConcurrentMode = p),
        (t.ContextConsumer = l),
        (t.ContextProvider = s),
        (t.Element = n),
        (t.ForwardRef = d),
        (t.Fragment = a),
        (t.Lazy = x),
        (t.Memo = m),
        (t.Portal = c),
        (t.Profiler = i),
        (t.StrictMode = u),
        (t.Suspense = y),
        (t.isAsyncMode = function (e) {
          return A(e) || z(e) === f
        }),
        (t.isConcurrentMode = A),
        (t.isContextConsumer = function (e) {
          return z(e) === l
        }),
        (t.isContextProvider = function (e) {
          return z(e) === s
        }),
        (t.isElement = function (e) {
          return 'object' == typeof e && null !== e && e.$$typeof === n
        }),
        (t.isForwardRef = function (e) {
          return z(e) === d
        }),
        (t.isFragment = function (e) {
          return z(e) === a
        }),
        (t.isLazy = function (e) {
          return z(e) === x
        }),
        (t.isMemo = function (e) {
          return z(e) === m
        }),
        (t.isPortal = function (e) {
          return z(e) === c
        }),
        (t.isProfiler = function (e) {
          return z(e) === i
        }),
        (t.isStrictMode = function (e) {
          return z(e) === u
        }),
        (t.isSuspense = function (e) {
          return z(e) === y
        }),
        (t.isValidElementType = function (e) {
          return (
            'string' == typeof e ||
            'function' == typeof e ||
            e === a ||
            e === p ||
            e === i ||
            e === u ||
            e === y ||
            e === v ||
            ('object' == typeof e &&
              null !== e &&
              (e.$$typeof === x ||
                e.$$typeof === m ||
                e.$$typeof === s ||
                e.$$typeof === l ||
                e.$$typeof === d ||
                e.$$typeof === _ ||
                e.$$typeof === h ||
                e.$$typeof === w ||
                e.$$typeof === b))
          )
        }),
        (t.typeOf = z)
    },
  },
])
