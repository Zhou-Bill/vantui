;(window.webpackJsonp = window.webpackJsonp || []).push([
  [18],
  {
    518: function (e, t, r) {
      'use strict'
      r.d(t, 'n', function () {
        return Z
      }),
        r.d(t, 'i', function () {
          return G
        }),
        r.d(t, 'k', function () {
          return Q
        }),
        r.d(t, 'b', function () {
          return X
        }),
        r.d(t, 'e', function () {
          return ee
        }),
        r.d(t, 'g', function () {
          return te
        }),
        r.d(t, 'l', function () {
          return re
        }),
        r.d(t, 'd', function () {
          return ne
        }),
        r.d(t, 'j', function () {
          return oe
        }),
        r.d(t, 'h', function () {
          return ae
        }),
        r.d(t, 'f', function () {
          return ce
        }),
        r.d(t, 'm', function () {
          return ie
        }),
        r.d(t, 'c', function () {
          return se
        }),
        r.d(t, 'a', function () {
          return le
        })
      var n = r(63),
        o = r.n(n),
        a = r(22),
        c = r.n(a),
        i = r(520),
        s = r.n(i),
        l = r(30),
        u = r.n(l),
        f = r(519),
        d = r.n(f),
        p = r(26),
        v = r.n(p),
        b = r(169),
        h = r.n(b),
        j = r(109),
        x = r.n(j),
        y = r(52),
        m = r.n(y),
        _ = r(172),
        O = r.n(_),
        g = r(534),
        w = r.n(g),
        S = r(27),
        k = r.n(S),
        N = r(6),
        C = r.n(N),
        I = r(24),
        P = r.n(I),
        T = r(115),
        M = r.n(T),
        L = r(35),
        E = r.n(L),
        z = r(67),
        A = r.n(z),
        K = r(68),
        F = r.n(K),
        R = r(552),
        D = r.n(R),
        H = r(554),
        W = r.n(H),
        V = r(556),
        B = r.n(V),
        U = r(44),
        q = r.n(U)
      function ownKeys(e, t) {
        var r = c()(e)
        if (s.a) {
          var n = s()(e)
          t &&
            (n = u()(n).call(n, function (t) {
              return d()(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function _objectSpread(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r,
            n = null != arguments[t] ? arguments[t] : {}
          if (t % 2)
            v()((r = ownKeys(Object(n), !0))).call(r, function (t) {
              P()(e, t, n[t])
            })
          else if (h.a) x()(e, h()(n))
          else {
            var o
            v()((o = ownKeys(Object(n)))).call(o, function (t) {
              m()(e, t, d()(n, t))
            })
          }
        }
        return e
      }
      function _createSuper(e) {
        var t = (function _isNativeReflectConstruct() {
          if ('undefined' == typeof Reflect || !O.a) return !1
          if (O.a.sham) return !1
          if ('function' == typeof Proxy) return !0
          try {
            return (
              Boolean.prototype.valueOf.call(O()(Boolean, [], function () {})),
              !0
            )
          } catch (e) {
            return !1
          }
        })()
        return function _createSuperInternal() {
          var r,
            n = B()(e)
          if (t) {
            var o = B()(this).constructor
            r = O()(n, arguments, o)
          } else r = n.apply(this, arguments)
          return W()(this, r)
        }
      }
      o.a.createElement
      function updateStyle(e, t, r) {
        ;/^--/.test(t) ? e.style.setProperty(t, r) : (e.style[t] = r)
      }
      function updateProp(e, t, r, n, o) {
        var a = e.ref.current,
          c = o[r],
          i = n ? n[r] : void 0
        if ('children' !== r)
          if ('classname' !== r.toLowerCase()) {
            if ('style' !== r) {
              if (
                (/^data-.+/.test(r) && a.setAttribute(r, c),
                'taro-scroll-view-core' === t)
              ) {
                if ('scrollTop' === r) return void (a.mpScrollTop = c)
                if ('scrollLeft' === r) return void (a.mpScrollLeft = c)
                if ('scrollIntoView' === r) return void (a.mpScrollIntoView = c)
              }
              if ('function' == typeof c && r.match(/^on[A-Z]/)) {
                var s = r.substr(2).toLowerCase(),
                  l = c
                return (
                  'taro-scroll-view-core' === t &&
                    'scroll' === s &&
                    (l = function fn(e) {
                      e instanceof CustomEvent && c.apply(null, w()(arguments))
                    }),
                  e.eventHandlers.push([s, l]),
                  a.addEventListener(s, l)
                )
              }
              return 'string' == typeof c || 'number' == typeof c
                ? (a.setAttribute(r, c), void (a[r] = c))
                : 'boolean' == typeof c
                ? c
                  ? ((a[r] = !0), a.setAttribute(r, c))
                  : ((a[r] = !1), a.removeAttribute(r))
                : void (a[r] = c)
            }
            if ('string' == typeof c) return void a.setAttribute(r, c)
            if (!c) return void a.removeAttribute(r)
            if (n)
              if ('string' == typeof i) a.style.cssText = ''
              else for (var f in i) updateStyle(a, f, '')
            for (var d in c) updateStyle(a, d, c[d])
          } else
            a.className = n
              ? (function getClassName(e, t, r) {
                  var n,
                    o = w()(e.classList),
                    a = (t.className || t.class || '').split(' '),
                    c = (r.className || r.class || '').split(' '),
                    i = []
                  return (
                    v()(o).call(o, function (e) {
                      k()(c).call(c, e) > -1
                        ? (i.push(e),
                          (c = u()(c).call(c, function (t) {
                            return t !== e
                          })))
                        : -1 === k()(a).call(a, e) && i.push(e)
                    }),
                    (i = C()((n = [])).call(n, q()(i), q()(c))).join(' ')
                  )
                })(a, n, o)
              : c
      }
      var J = function reactifyWebComponent(e) {
        var t = (function (t) {
          D()(Index, t)
          var r = _createSuper(Index)
          function Index(e) {
            var t
            return (
              A()(this, Index),
              ((t = r.call(this, e)).eventHandlers = []),
              (t.ref = Object(n.createRef)()),
              t
            )
          }
          return (
            F()(Index, [
              {
                key: 'update',
                value: function update(t) {
                  var r,
                    n,
                    o = this
                  this.clearEventHandlers(),
                    this.ref.current &&
                      (v()((r = c()(t || {}))).call(r, function (r) {
                        'children' === r ||
                          'key' === r ||
                          r in o.props ||
                          updateProp(o, e, r, t, o.props)
                      }),
                      v()((n = c()(this.props))).call(n, function (r) {
                        updateProp(o, e, r, t, o.props)
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
                    : e && 'object' === E()(e) && e.hasOwnProperty('current')
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
                  v()((e = this.eventHandlers)).call(e, function (e) {
                    var r = M()(e, 2),
                      n = r[0],
                      o = r[1]
                    t.ref.current && t.ref.current.removeEventListener(n, o)
                  }),
                    (this.eventHandlers = [])
                },
              },
              {
                key: 'render',
                value: function render() {
                  var t = this.props,
                    r = t.children,
                    o = t.dangerouslySetInnerHTML,
                    a = { ref: this.ref }
                  return (
                    o && (a.dangerouslySetInnerHTML = o),
                    Object(n.createElement)(e, a, r)
                  )
                },
              },
            ]),
            Index
          )
        })(o.a.Component)
        return o.a.forwardRef(function (e, r) {
          return o.a.createElement(
            t,
            _objectSpread(_objectSpread({}, e), {}, { forwardRef: r }),
          )
        })
      }
      function input_ownKeys(e, t) {
        var r = c()(e)
        if (s.a) {
          var n = s()(e)
          t &&
            (n = u()(n).call(n, function (t) {
              return d()(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function input_objectSpread(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r,
            n = null != arguments[t] ? arguments[t] : {}
          if (t % 2)
            v()((r = input_ownKeys(Object(n), !0))).call(r, function (t) {
              P()(e, t, n[t])
            })
          else if (h.a) x()(e, h()(n))
          else {
            var o
            v()((o = input_ownKeys(Object(n)))).call(o, function (t) {
              m()(e, t, d()(n, t))
            })
          }
        }
        return e
      }
      var $ = J('taro-input-core'),
        Y =
          (o.a.createElement,
          o.a.forwardRef(function (e, t) {
            var r = input_objectSpread({}, e)
            return (
              r.hasOwnProperty('focus') &&
                ((r.autoFocus = Boolean(r.focus)), delete r.focus),
              o.a.createElement(
                $,
                input_objectSpread(input_objectSpread({}, r), {}, { ref: t }),
              )
            )
          })),
        Z = J('taro-view-core'),
        G =
          (J('taro-icon-core'),
          J('taro-progress-core'),
          J('taro-rich-text-core')),
        Q = J('taro-text-core'),
        X = J('taro-button-core'),
        ee =
          (J('taro-checkbox-core'),
          J('taro-checkbox-group-core'),
          J('taro-editor-core'),
          J('taro-form-core')),
        te = Y,
        re =
          (J('taro-label-core'),
          J('taro-picker-core'),
          J('taro-picker-view-core'),
          J('taro-picker-view-column-core'),
          J('taro-radio-core'),
          J('taro-radio-group-core'),
          J('taro-slider-core'),
          J('taro-switch-core'),
          J('taro-cover-image-core'),
          J('taro-textarea-core')),
        ne = J('taro-cover-view-core'),
        oe =
          (J('taro-movable-area-core'),
          J('taro-movable-view-core'),
          J('taro-scroll-view-core')),
        ae =
          (J('taro-swiper-core'),
          J('taro-swiper-item-core'),
          J('taro-functional-page-navigator-core'),
          J('taro-navigator-core')),
        ce =
          (J('taro-audio-core'), J('taro-camera-core'), J('taro-image-core')),
        ie = (J('taro-live-player-core'), J('taro-video-core')),
        se = (J('taro-map-core'), J('taro-canvas-core')),
        le =
          (J('taro-ad-core'),
          J('taro-official-account-core'),
          J('taro-open-data-core'),
          J('taro-web-view-core'),
          J('taro-navigation-bar-core'),
          n.Fragment)
      J('taro-custom-wrapper-core')
    },
    519: function (e, t, r) {
      e.exports = r(539)
    },
    520: function (e, t, r) {
      e.exports = r(536)
    },
    522: function (e, t, r) {
      var n = r(110)
      ;(e.exports = function _defineProperty(e, t, r) {
        return (
          t in e
            ? n(e, t, {
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
      var n = r(542),
        o = r(535),
        a = r(550)
      ;(e.exports = function _objectWithoutProperties(e, t) {
        if (null == e) return {}
        var r,
          c,
          i = a(e, t)
        if (n) {
          var s = n(e)
          for (c = 0; c < s.length; c++)
            (r = s[c]),
              o(t).call(t, r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (i[r] = e[r]))
        }
        return i
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0)
    },
    524: function (e, t, r) {
      var n = r(565),
        o = r(566),
        a = r(558),
        c = r(567)
      ;(e.exports = function _slicedToArray(e, t) {
        return n(e) || o(e, t) || a(e, t) || c()
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0)
    },
    532: function (e, t, r) {
      'use strict'
      r.d(t, 'a', function () {
        return u
      })
      var n = r(37),
        o = r(38),
        a = r(65),
        c = r(64),
        i = r(518),
        s = r(63),
        l = (r(533), r(108)),
        u = (function (e) {
          Object(a.a)(Index, e)
          var t = Object(c.a)(Index)
          function Index() {
            return Object(n.a)(this, Index), t.call(this)
          }
          return (
            Object(o.a)(Index, [
              {
                key: 'render',
                value: function render() {
                  var e = this.props,
                    t = e.padding,
                    r = e.title,
                    n = e.card
                  return Object(l.jsxs)(i.n, {
                    className:
                      'custom-class demo-block van-clearfix ' +
                      (t ? 'demo-block--padding' : ''),
                    children: [
                      r &&
                        Object(l.jsx)(i.n, {
                          className: 'demo-block__title',
                          children: r,
                        }),
                      n
                        ? Object(l.jsx)(i.n, {
                            className: 'demo-block__card',
                            children: this.props.children,
                          })
                        : this.props.children,
                    ],
                  })
                },
              },
            ]),
            Index
          )
        })(s.Component)
    },
    533: function (e, t, r) {},
    534: function (e, t, r) {
      e.exports = r(227)
    },
    535: function (e, t, r) {
      e.exports = r(549)
    },
    536: function (e, t, r) {
      var n = r(547)
      e.exports = n
    },
    537: function (e, t, r) {},
    538: function (e, t, r) {
      'use strict'
      r.d(t, 'a', function () {
        return Loading
      })
      var n = r(522),
        o = r.n(n),
        a = r(524),
        c = r.n(a),
        i = r(523),
        s = r.n(i),
        l = r(534),
        u = r.n(l),
        f = r(9),
        d = r.n(f),
        p = r(22),
        v = r.n(p),
        b = r(520),
        h = r.n(b),
        j = r(30),
        x = r.n(j),
        y = r(519),
        m = r.n(y),
        _ = r(26),
        O = r.n(_),
        g = r(169),
        w = r.n(g),
        S = r(109),
        k = r.n(S),
        N = r(52),
        C = r.n(N),
        I = r(518),
        P = r(63),
        T = r(521),
        M = r(528)
      function textStyle(e) {
        return Object(T.c)({ 'font-size': Object(M.a)(e.textSize) })
      }
      var L = r(108),
        E = [
          'vertical',
          'type',
          'color',
          'size',
          'textSize',
          'className',
          'children',
          'style',
        ]
      function ownKeys(e, t) {
        var r = v()(e)
        if (h.a) {
          var n = h()(e)
          t &&
            (n = x()(n).call(n, function (t) {
              return m()(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function _objectSpread(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r,
            n = null != arguments[t] ? arguments[t] : {}
          if (t % 2)
            O()((r = ownKeys(Object(n), !0))).call(r, function (t) {
              o()(e, t, n[t])
            })
          else if (w.a) k()(e, w()(n))
          else {
            var a
            O()((a = ownKeys(Object(n)))).call(a, function (t) {
              C()(e, t, m()(n, t))
            })
          }
        }
        return e
      }
      function Loading(e) {
        var t,
          r = e.vertical,
          n = e.type,
          o = void 0 === n ? 'circular' : n,
          a = e.color,
          i = e.size,
          l = e.textSize,
          f = e.className,
          p = e.children,
          v = e.style,
          b = s()(e, E),
          h = Object(P.useState)(u()({ length: 12 })),
          j = c()(h, 1)[0]
        return Object(L.jsxs)(
          I.n,
          _objectSpread(
            _objectSpread(
              {
                className: ' ' + T.b('loading', { vertical: r }) + ' ' + f,
                style: T.c([v]),
              },
              b,
            ),
            {},
            {
              children: [
                Object(L.jsx)(I.n, {
                  className: 'van-loading__spinner van-loading__spinner--' + o,
                  style:
                    ((t = { color: a, size: i }),
                    Object(T.c)({
                      color: t.color,
                      width: Object(M.a)(t.size),
                      height: Object(M.a)(t.size),
                    })),
                  children:
                    'spinner' === o &&
                    Object(L.jsx)(I.a, {
                      children: d()(j).call(j, function (e, t) {
                        return Object(L.jsx)(
                          I.n,
                          { className: 'van-loading__dot' },
                          'van-loading__dot_'.concat(t),
                        )
                      }),
                    }),
                }),
                Object(L.jsx)(I.n, {
                  className: 'van-loading__text',
                  style: textStyle({ textSize: l }),
                  children: p,
                }),
              ],
            },
          ),
        )
      }
      t.b = Loading
    },
    539: function (e, t, r) {
      var n = r(544)
      e.exports = n
    },
    542: function (e, t, r) {
      e.exports = r(548)
    },
    543: function (e, t, r) {
      e.exports = r(551)
    },
    544: function (e, t, r) {
      r(545)
      var n = r(11).Object,
        o = (e.exports = function getOwnPropertyDescriptor(e, t) {
          return n.getOwnPropertyDescriptor(e, t)
        })
      n.getOwnPropertyDescriptor.sham && (o.sham = !0)
    },
    545: function (e, t, r) {
      var n = r(4),
        o = r(10),
        a = r(39),
        c = r(66).f,
        i = r(25),
        s = o(function () {
          c(1)
        })
      n(
        { target: 'Object', stat: !0, forced: !i || s, sham: !i },
        {
          getOwnPropertyDescriptor: function getOwnPropertyDescriptor(e, t) {
            return c(a(e), t)
          },
        },
      )
    },
    547: function (e, t, r) {
      r(228)
      var n = r(11)
      e.exports = n.Object.getOwnPropertySymbols
    },
    548: function (e, t, r) {
      var n = r(536)
      e.exports = n
    },
    549: function (e, t, r) {
      var n = r(229)
      e.exports = n
    },
    550: function (e, t, r) {
      var n = r(543),
        o = r(535)
      ;(e.exports = function _objectWithoutPropertiesLoose(e, t) {
        if (null == e) return {}
        var r,
          a,
          c = {},
          i = n(e)
        for (a = 0; a < i.length; a++)
          (r = i[a]), o(t).call(t, r) >= 0 || (c[r] = e[r])
        return c
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0)
    },
    551: function (e, t, r) {
      var n = r(230)
      e.exports = n
    },
    552: function (e, t, r) {
      var n = r(553)
      ;(e.exports = function _inherits(e, t) {
        if ('function' != typeof t && null !== t)
          throw new TypeError(
            'Super expression must either be null or a function',
          )
        ;(e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(e, 'prototype', { writable: !1 }),
          t && n(e, t)
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
      var n = r(35).default,
        o = r(555)
      ;(e.exports = function _possibleConstructorReturn(e, t) {
        if (t && ('object' === n(t) || 'function' == typeof t)) return t
        if (void 0 !== t)
          throw new TypeError(
            'Derived constructors may only return object or undefined',
          )
        return o(e)
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
      var n = r(173),
        o = r(114),
        a = r(559)
      ;(e.exports = function _unsupportedIterableToArray(e, t) {
        var r
        if (e) {
          if ('string' == typeof e) return a(e, t)
          var c = n((r = Object.prototype.toString.call(e))).call(r, 8, -1)
          return (
            'Object' === c && e.constructor && (c = e.constructor.name),
            'Map' === c || 'Set' === c
              ? o(e)
              : 'Arguments' === c ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)
              ? a(e, t)
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
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r]
        return n
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0)
    },
    565: function (e, t, r) {
      var n = r(112)
      ;(e.exports = function _arrayWithHoles(e) {
        if (n(e)) return e
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0)
    },
    566: function (e, t, r) {
      var n = r(40),
        o = r(113)
      ;(e.exports = function _iterableToArrayLimit(e, t) {
        var r = null == e ? null : (void 0 !== n && o(e)) || e['@@iterator']
        if (null != r) {
          var a,
            c,
            i = [],
            s = !0,
            l = !1
          try {
            for (
              r = r.call(e);
              !(s = (a = r.next()).done) &&
              (i.push(a.value), !t || i.length !== t);
              s = !0
            );
          } catch (e) {
            ;(l = !0), (c = e)
          } finally {
            try {
              s || null == r.return || r.return()
            } finally {
              if (l) throw c
            }
          }
          return i
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
        return l
      })
      var n,
        o = r(5),
        a = r.n(o),
        c = r(3),
        i = r(43),
        s = r(16),
        l = function pageScrollTo(e) {
          var t,
            r = e.scrollTop,
            o = e.selector,
            l = void 0 === o ? '' : o,
            u = e.duration,
            f = void 0 === u ? 300 : u,
            d = e.success,
            p = e.fail,
            v = e.complete,
            b = new i.a({
              name: 'pageScrollTo',
              success: d,
              fail: p,
              complete: v,
            })
          return new a.a(function (e, o) {
            var a, i
            try {
              if (void 0 === r && !l)
                return b.fail(
                  { errMsg: 'scrollTop" 或 "selector" 需要其之一' },
                  o,
                )
              var u =
                  null ===
                    (i =
                      null === (a = c.a.page) || void 0 === a
                        ? void 0
                        : a.path) || void 0 === i
                    ? void 0
                    : i.replace(/([^a-z0-9\u00a0-\uffff_-])/gi, '\\$1'),
                d = u
                  ? document.querySelector('.taro_page#'.concat(u))
                  : document.querySelector('.taro_page') ||
                    document.querySelector('.taro_router')
              t ||
                (t = d
                  ? function scrollFunc(e) {
                      if (void 0 === e) return d.scrollTop
                      d.scrollTop = e
                    }
                  : function scrollFunc(e) {
                      if (void 0 === e) return window.pageYOffset
                      window.scrollTo(0, e)
                    }),
                r &&
                  l &&
                  console.warn(
                    '"scrollTop" 或 "selector" 建议只设一个值，全部设置会忽略selector',
                  )
              var p,
                v = t()
              if ('number' == typeof r) p = r
              else {
                var h = document.querySelector(l)
                p = (null == h ? void 0 : h.offsetTop) || 0
              }
              var j = p - v,
                x = f / 17,
                y = Object(s.d)(s.a, x)
              !(function scroll() {
                var r =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : 0,
                  o = v + j * y(r)
                if ((t(o), !(r < x))) return b.success({}, e)
                n && clearTimeout(n),
                  (n = setTimeout(function () {
                    scroll(r + 1)
                  }, 17))
              })()
            } catch (e) {
              return b.fail({ errMsg: e.message }, o)
            }
          })
        }
    },
    589: function (e, t, r) {
      'use strict'
      r(525), r(530), r(531), r(590)
    },
    590: function (e, t, r) {},
    593: function (e, t, r) {
      'use strict'
      var n = r(22),
        o = r.n(n),
        a = r(520),
        c = r.n(a),
        i = r(30),
        s = r.n(i),
        l = r(519),
        u = r.n(l),
        f = r(26),
        d = r.n(f),
        p = r(169),
        v = r.n(p),
        b = r(109),
        h = r.n(b),
        j = r(52),
        x = r.n(j),
        y = r(522),
        m = r.n(y),
        _ = r(524),
        O = r.n(_),
        g = r(523),
        w = r.n(g),
        S = r(63),
        k = r(518),
        N = r(521),
        C = r(529),
        I = r(528)
      var P = {
        none: 'scaleToFill',
        fill: 'scaleToFill',
        cover: 'aspectFill',
        contain: 'aspectFit',
        widthFix: 'widthFix',
        heightFix: 'heightFix',
        scaleDown: 'aspectFit',
      }
      function mode(e) {
        return P[e]
      }
      var T = r(108),
        M = [
          'src',
          'round',
          'width',
          'height',
          'radius',
          'lazyLoad',
          'showMenuByLongpress',
          'fit',
          'showError',
          'showLoading',
          'className',
          'style',
          'renderError',
          'renderLoading',
        ]
      function ownKeys(e, t) {
        var r = o()(e)
        if (c.a) {
          var n = c()(e)
          t &&
            (n = s()(n).call(n, function (t) {
              return u()(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function _objectSpread(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r,
            n = null != arguments[t] ? arguments[t] : {}
          if (t % 2)
            d()((r = ownKeys(Object(n), !0))).call(r, function (t) {
              m()(e, t, n[t])
            })
          else if (v.a) h()(e, v()(n))
          else {
            var o
            d()((o = ownKeys(Object(n)))).call(o, function (t) {
              x()(e, t, u()(n, t))
            })
          }
        }
        return e
      }
      t.a = function Image(e) {
        var t = e.src,
          r = e.round,
          n = e.width,
          o = e.height,
          a = e.radius,
          c = e.lazyLoad,
          i = e.showMenuByLongpress,
          s = e.fit,
          l = e.showError,
          u = void 0 === l || l,
          f = e.showLoading,
          d = void 0 === f || f,
          p = e.className,
          v = e.style,
          b = e.renderError,
          h = e.renderLoading,
          j = w()(e, M),
          x = Object(S.useState)(),
          y = O()(x, 2),
          m = y[0],
          _ = y[1],
          g = Object(S.useState)(!1),
          P = O()(g, 2),
          L = P[0],
          E = P[1]
        Object(S.useEffect)(
          function () {
            void 0 === m && _(!0), E(!1)
          },
          [m],
        )
        var z,
          A = Object(S.useCallback)(function () {
            _(!1)
          }, []),
          K = Object(S.useCallback)(function () {
            E(!0)
          }, []),
          F = Object(S.useMemo)(
            function () {
              var e = {}
              return (
                ('heightFix' !== s && 'widthFix' !== s) ||
                  (e = {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }),
                e
              )
            },
            [s],
          )
        return Object(T.jsxs)(
          k.n,
          _objectSpread(
            _objectSpread(
              {
                style: N.c([
                  ((z = { width: n, height: o, radius: a }),
                  Object(N.c)([
                    {
                      width: Object(I.a)(z.width),
                      height: Object(I.a)(z.height),
                      'border-radius': Object(I.a)(z.radius),
                    },
                    z.radius ? 'overflow: hidden' : null,
                  ])),
                  v,
                ]),
                className: ' ' + N.b('image', { round: r }) + ' ' + p,
                onClick: j.onClick,
              },
              j,
            ),
            {},
            {
              children: [
                !L &&
                  Object(T.jsx)(k.f, {
                    src: t,
                    mode: mode(s || 'none'),
                    lazyLoad: c,
                    className: 'image-class van-image__img',
                    showMenuByLongpress: i,
                    onLoad: A,
                    onError: K,
                    style: F,
                  }),
                m &&
                  d &&
                  Object(T.jsx)(k.n, {
                    className: 'loading-class van-image__loading',
                    children:
                      h ||
                      Object(T.jsx)(C.b, {
                        name: 'photo',
                        className: 'van-image__loading-icon',
                      }),
                  }),
                L &&
                  u &&
                  Object(T.jsx)(k.n, {
                    className: 'error-class van-image__error',
                    children:
                      b ||
                      Object(T.jsx)(C.b, {
                        name: 'photo-fail',
                        className: 'van-image__error-icon',
                      }),
                  }),
              ],
            },
          ),
        )
      }
    },
    638: function (e, t, r) {
      'use strict'
      r(525), r(537), r(639)
    },
    639: function (e, t, r) {},
    648: function (e, t, r) {
      'use strict'
      var n = r(522),
        o = r.n(n),
        a = r(523),
        c = r.n(a),
        i = r(52),
        s = r.n(i),
        l = r(22),
        u = r.n(l),
        f = r(520),
        d = r.n(f),
        p = r(30),
        v = r.n(p),
        b = r(519),
        h = r.n(b),
        j = r(26),
        x = r.n(j),
        y = r(169),
        m = r.n(y),
        _ = r(109),
        O = r.n(_),
        g = r(63),
        w = r(518),
        S = r(521),
        k = r(538),
        N = r(527),
        C = r(528)
      function loadingColor(e) {
        return e.checked === e.activeValue
          ? e.activeColor || '#1989fa'
          : e.inactiveColor || '#969799'
      }
      var I = r(108),
        P = [
          'checked',
          'loading',
          'disabled',
          'activeColor',
          'inactiveColor',
          'size',
          'activeValue',
          'inactiveValue',
          'onChange',
          'style',
          'className',
        ]
      function ownKeys(e, t) {
        var r = u()(e)
        if (d.a) {
          var n = d()(e)
          t &&
            (n = v()(n).call(n, function (t) {
              return h()(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function _objectSpread(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r,
            n = null != arguments[t] ? arguments[t] : {}
          if (t % 2)
            x()((r = ownKeys(Object(n), !0))).call(r, function (t) {
              o()(e, t, n[t])
            })
          else if (m.a) O()(e, m()(n))
          else {
            var a
            x()((a = ownKeys(Object(n)))).call(a, function (t) {
              s()(e, t, h()(n, t))
            })
          }
        }
        return e
      }
      t.a = function Switch(e) {
        var t,
          r,
          n = e.checked,
          o = void 0 !== n && n,
          a = e.loading,
          i = void 0 !== a && a,
          l = e.disabled,
          u = void 0 !== l && l,
          f = e.activeColor,
          d = void 0 === f ? '#1989fa' : f,
          p = e.inactiveColor,
          v = void 0 === p ? '#ffffff' : p,
          b = e.size,
          h = void 0 === b ? '60' : b,
          j = e.activeValue,
          x = void 0 === j || j,
          y = e.inactiveValue,
          m = void 0 !== y && y,
          _ = e.onChange,
          O = e.style,
          T = e.className,
          M = c()(e, P),
          L = Object(g.useCallback)(
            function (e) {
              if (!u && !i) {
                var t = o === x ? m : x
                s()(e, 'detail', { value: t }), null == _ || _(e)
              }
            },
            [x, o, u, m, i, _],
          )
        return Object(I.jsx)(
          w.n,
          _objectSpread(
            _objectSpread(
              {
                className:
                  S.b('switch', { on: o === x, disabled: u }) + '  '.concat(T),
                style: S.c([
                  ((t = {
                    size: h,
                    checked: o,
                    activeColor: d,
                    inactiveColor: v,
                    activeValue: x,
                  }),
                  (r =
                    t.checked === t.activeValue
                      ? t.activeColor
                      : t.inactiveColor),
                  Object(N.a)({
                    'font-size': Object(C.a)(t.size),
                    'background-color': r,
                  })),
                  O,
                ]),
              },
              M,
            ),
            {},
            {
              onClick: L,
              children: Object(I.jsx)(w.n, {
                className: 'van-switch__node node-class',
                children:
                  i &&
                  Object(I.jsx)(k.b, {
                    color: loadingColor({
                      checked: o,
                      activeColor: d,
                      inactiveColor: v,
                      activeValue: x,
                    }),
                    className: 'van-switch__loading',
                  }),
              }),
            },
          ),
        )
      }
    },
    801: function (e, t, r) {},
    802: function (e, t, r) {},
    891: function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, 'default', function () {
          return q
        })
      r(589)
      var n = r(593),
        o = (r(638), r(648)),
        a = (r(525), r(801), r(22)),
        c = r.n(a),
        i = r(520),
        s = r.n(i),
        l = r(30),
        u = r.n(l),
        f = r(519),
        d = r.n(f),
        p = r(26),
        v = r.n(p),
        b = r(169),
        h = r.n(b),
        j = r(109),
        x = r.n(j),
        y = r(52),
        m = r.n(y),
        _ = r(522),
        O = r.n(_),
        g = r(523),
        w = r.n(g),
        S = r(524),
        k = r.n(S),
        N = r(534),
        C = r.n(N),
        I = r(9),
        P = r.n(I),
        T = r(87),
        M = r(63),
        L = r(518),
        E = r(521),
        z = r(108),
        A = [
          'row',
          'animate',
          'avatar',
          'avatarShape',
          'avatarSize',
          'titleWidth',
          'title',
          'rowWidth',
          'loading',
          'children',
          'style',
          'className',
        ]
      function ownKeys(e, t) {
        var r = c()(e)
        if (s.a) {
          var n = s()(e)
          t &&
            (n = u()(n).call(n, function (t) {
              return d()(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function _objectSpread(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r,
            n = null != arguments[t] ? arguments[t] : {}
          if (t % 2)
            v()((r = ownKeys(Object(n), !0))).call(r, function (t) {
              O()(e, t, n[t])
            })
          else if (h.a) x()(e, h()(n))
          else {
            var o
            v()((o = ownKeys(Object(n)))).call(o, function (t) {
              m()(e, t, d()(n, t))
            })
          }
        }
        return e
      }
      var K = function Skeleton(e) {
          var t = Object(M.useState)({ isArray: !1, rowArray: [] }),
            r = k()(t, 2),
            n = r[0],
            o = r[1],
            a = n.isArray,
            c = n.rowArray,
            i = e.row,
            s = void 0 === i ? 0 : i,
            l = e.animate,
            u = void 0 === l || l,
            f = e.avatar,
            d = e.avatarShape,
            p = void 0 === d ? 'round' : d,
            v = e.avatarSize,
            b = void 0 === v ? T.a.pxTransform(64) : v,
            h = e.titleWidth,
            j = void 0 === h ? '40%' : h,
            x = e.title,
            y = e.rowWidth,
            m = void 0 === y ? '100%' : y,
            _ = e.loading,
            O = void 0 === _ || _,
            g = e.children,
            S = e.style,
            N = e.className,
            I = w()(e, A)
          return (
            Object(M.useEffect)(
              function () {
                o(function (e) {
                  return _objectSpread(
                    _objectSpread({}, e),
                    {},
                    { rowArray: C()({ length: s }) },
                  )
                })
              },
              [s],
            ),
            Object(M.useEffect)(
              function () {
                o(function (e) {
                  return _objectSpread(
                    _objectSpread({}, e),
                    {},
                    { isArray: m instanceof Array },
                  )
                })
              },
              [m],
            ),
            O
              ? Object(z.jsxs)(
                  L.n,
                  _objectSpread(
                    _objectSpread(
                      {
                        className:
                          ' ' +
                          E.b('skeleton', [{ animate: u }]) +
                          ' '.concat(N || ''),
                        style: S,
                      },
                      I,
                    ),
                    {},
                    {
                      children: [
                        f &&
                          Object(z.jsx)(L.n, {
                            className:
                              'avatar-class ' + E.b('skeleton__avatar', [p]),
                            style: 'width:' + b + ';height:' + b,
                          }),
                        Object(z.jsxs)(L.n, {
                          className: E.b('skeleton__content'),
                          children: [
                            x &&
                              Object(z.jsx)(L.n, {
                                className:
                                  'title-class ' + E.b('skeleton__title'),
                                style: 'width:' + j,
                              }),
                            P()(c).call(c, function (e, t) {
                              return Object(z.jsx)(
                                L.n,
                                {
                                  className:
                                    'row-class ' + E.b('skeleton__row'),
                                  style: 'width:' + (a ? m[t] : m),
                                },
                                t,
                              )
                            }),
                          ],
                        }),
                      ],
                    },
                  ),
                )
              : Object(z.jsx)(L.n, {
                  className: E.b('skeleton__content'),
                  children: g,
                })
          )
        },
        F = r(37),
        R = r(38),
        D = r(171),
        H = r(65),
        W = r(64),
        V = r(88),
        B = r(541),
        U = r(532),
        q =
          (r(802),
          (function (e) {
            Object(H.a)(Index, e)
            var t = Object(W.a)(Index)
            function Index() {
              var e
              return (
                Object(F.a)(this, Index),
                (e = t.call(this)),
                Object(V.a)(Object(D.a)(e), 'state', { show: !1 }),
                Object(V.a)(Object(D.a)(e), 'onChange', function (t) {
                  var r = t.detail
                  e.setState({ show: r })
                }),
                e
              )
            }
            return (
              Object(R.a)(Index, [
                {
                  key: 'render',
                  value: function render() {
                    var e = this.state.show
                    return Object(z.jsx)(B.a, {
                      title: 'Skeleton 骨架屏',
                      children: Object(z.jsxs)(z.Fragment, {
                        children: [
                          Object(z.jsx)(U.a, {
                            title: '基础用法',
                            children: Object(z.jsx)(K, {
                              title: !0,
                              row: '3',
                              rowWidth: ['100%', '100%', '80%'],
                            }),
                          }),
                          Object(z.jsx)(U.a, {
                            title: '显示头像',
                            children: Object(z.jsx)(K, {
                              title: !0,
                              avatar: !0,
                              row: '3',
                            }),
                          }),
                          Object(z.jsxs)(U.a, {
                            title: '展示子组件',
                            children: [
                              Object(z.jsx)(o.a, {
                                checked: e,
                                size: '24px',
                                onChange: this.onChange,
                              }),
                              Object(z.jsx)(K, {
                                title: !0,
                                avatar: !0,
                                row: '3',
                                loading: !e,
                                children: Object(z.jsxs)(L.n, {
                                  className: 'demo-preview',
                                  children: [
                                    Object(z.jsx)(n.a, {
                                      className: 'demo-preview-img',
                                      src: 'https://antm-js.gitee.io/resource/antmjs-vantui.jpg',
                                    }),
                                    Object(z.jsxs)(L.n, {
                                      className: 'demo-content',
                                      children: [
                                        Object(z.jsx)(L.n, {
                                          className: 'demo-content-h3',
                                          children: '关于 @antmjs/vantui',
                                        }),
                                        Object(z.jsx)(L.n, {
                                          className: 'domo-content-p',
                                          children:
                                            '一套基于 vant-weapp 开发的在 Taro-React / React 框架中使用的多端 UI 组件库，两者基于相同的视觉规范，提供一致的 API 接口，助力开发者快速搭建小程序应用。',
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    })
                  },
                },
              ]),
              Index
            )
          })(M.Component))
    },
  },
])
