;(window.webpackJsonp = window.webpackJsonp || []).push([
  [10],
  {
    518: function (e, t, n) {
      'use strict'
      n.d(t, 'n', function () {
        return Y
      }),
        n.d(t, 'i', function () {
          return Z
        }),
        n.d(t, 'k', function () {
          return Q
        }),
        n.d(t, 'b', function () {
          return X
        }),
        n.d(t, 'e', function () {
          return ee
        }),
        n.d(t, 'g', function () {
          return te
        }),
        n.d(t, 'l', function () {
          return ne
        }),
        n.d(t, 'd', function () {
          return re
        }),
        n.d(t, 'j', function () {
          return ae
        }),
        n.d(t, 'h', function () {
          return oe
        }),
        n.d(t, 'f', function () {
          return ce
        }),
        n.d(t, 'm', function () {
          return ie
        }),
        n.d(t, 'c', function () {
          return le
        }),
        n.d(t, 'a', function () {
          return se
        })
      var r = n(63),
        a = n.n(r),
        o = n(22),
        c = n.n(o),
        i = n(520),
        l = n.n(i),
        s = n(30),
        u = n.n(s),
        d = n(519),
        f = n.n(d),
        b = n(26),
        p = n.n(b),
        h = n(169),
        v = n.n(h),
        j = n(109),
        x = n.n(j),
        m = n(52),
        g = n.n(m),
        y = n(172),
        O = n.n(y),
        _ = n(534),
        k = n.n(_),
        w = n(27),
        C = n.n(w),
        S = n(6),
        N = n.n(S),
        T = n(24),
        I = n.n(T),
        L = n(115),
        P = n.n(L),
        E = n(35),
        D = n.n(E),
        M = n(67),
        z = n.n(M),
        K = n(68),
        F = n.n(K),
        A = n(552),
        R = n.n(A),
        H = n(554),
        W = n.n(H),
        q = n(556),
        U = n.n(q),
        B = n(44),
        G = n.n(B)
      function ownKeys(e, t) {
        var n = c()(e)
        if (l.a) {
          var r = l()(e)
          t &&
            (r = u()(r).call(r, function (t) {
              return f()(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function _objectSpread(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n,
            r = null != arguments[t] ? arguments[t] : {}
          if (t % 2)
            p()((n = ownKeys(Object(r), !0))).call(n, function (t) {
              I()(e, t, r[t])
            })
          else if (v.a) x()(e, v()(r))
          else {
            var a
            p()((a = ownKeys(Object(r)))).call(a, function (t) {
              g()(e, t, f()(r, t))
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
          var n,
            r = U()(e)
          if (t) {
            var a = U()(this).constructor
            n = O()(r, arguments, a)
          } else n = r.apply(this, arguments)
          return W()(this, n)
        }
      }
      a.a.createElement
      function updateStyle(e, t, n) {
        ;/^--/.test(t) ? e.style.setProperty(t, n) : (e.style[t] = n)
      }
      function updateProp(e, t, n, r, a) {
        var o = e.ref.current,
          c = a[n],
          i = r ? r[n] : void 0
        if ('children' !== n)
          if ('classname' !== n.toLowerCase()) {
            if ('style' !== n) {
              if (
                (/^data-.+/.test(n) && o.setAttribute(n, c),
                'taro-scroll-view-core' === t)
              ) {
                if ('scrollTop' === n) return void (o.mpScrollTop = c)
                if ('scrollLeft' === n) return void (o.mpScrollLeft = c)
                if ('scrollIntoView' === n) return void (o.mpScrollIntoView = c)
              }
              if ('function' == typeof c && n.match(/^on[A-Z]/)) {
                var l = n.substr(2).toLowerCase(),
                  s = c
                return (
                  'taro-scroll-view-core' === t &&
                    'scroll' === l &&
                    (s = function fn(e) {
                      e instanceof CustomEvent && c.apply(null, k()(arguments))
                    }),
                  e.eventHandlers.push([l, s]),
                  o.addEventListener(l, s)
                )
              }
              return 'string' == typeof c || 'number' == typeof c
                ? (o.setAttribute(n, c), void (o[n] = c))
                : 'boolean' == typeof c
                ? c
                  ? ((o[n] = !0), o.setAttribute(n, c))
                  : ((o[n] = !1), o.removeAttribute(n))
                : void (o[n] = c)
            }
            if ('string' == typeof c) return void o.setAttribute(n, c)
            if (!c) return void o.removeAttribute(n)
            if (r)
              if ('string' == typeof i) o.style.cssText = ''
              else for (var d in i) updateStyle(o, d, '')
            for (var f in c) updateStyle(o, f, c[f])
          } else
            o.className = r
              ? (function getClassName(e, t, n) {
                  var r,
                    a = k()(e.classList),
                    o = (t.className || t.class || '').split(' '),
                    c = (n.className || n.class || '').split(' '),
                    i = []
                  return (
                    p()(a).call(a, function (e) {
                      C()(c).call(c, e) > -1
                        ? (i.push(e),
                          (c = u()(c).call(c, function (t) {
                            return t !== e
                          })))
                        : -1 === C()(o).call(o, e) && i.push(e)
                    }),
                    (i = N()((r = [])).call(r, G()(i), G()(c))).join(' ')
                  )
                })(o, r, a)
              : c
      }
      var J = function reactifyWebComponent(e) {
        var t = (function (t) {
          R()(Index, t)
          var n = _createSuper(Index)
          function Index(e) {
            var t
            return (
              z()(this, Index),
              ((t = n.call(this, e)).eventHandlers = []),
              (t.ref = Object(r.createRef)()),
              t
            )
          }
          return (
            F()(Index, [
              {
                key: 'update',
                value: function update(t) {
                  var n,
                    r,
                    a = this
                  this.clearEventHandlers(),
                    this.ref.current &&
                      (p()((n = c()(t || {}))).call(n, function (n) {
                        'children' === n ||
                          'key' === n ||
                          n in a.props ||
                          updateProp(a, e, n, t, a.props)
                      }),
                      p()((r = c()(this.props))).call(r, function (n) {
                        updateProp(a, e, n, t, a.props)
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
                    : e && 'object' === D()(e) && e.hasOwnProperty('current')
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
                  p()((e = this.eventHandlers)).call(e, function (e) {
                    var n = P()(e, 2),
                      r = n[0],
                      a = n[1]
                    t.ref.current && t.ref.current.removeEventListener(r, a)
                  }),
                    (this.eventHandlers = [])
                },
              },
              {
                key: 'render',
                value: function render() {
                  var t = this.props,
                    n = t.children,
                    a = t.dangerouslySetInnerHTML,
                    o = { ref: this.ref }
                  return (
                    a && (o.dangerouslySetInnerHTML = a),
                    Object(r.createElement)(e, o, n)
                  )
                },
              },
            ]),
            Index
          )
        })(a.a.Component)
        return a.a.forwardRef(function (e, n) {
          return a.a.createElement(
            t,
            _objectSpread(_objectSpread({}, e), {}, { forwardRef: n }),
          )
        })
      }
      function input_ownKeys(e, t) {
        var n = c()(e)
        if (l.a) {
          var r = l()(e)
          t &&
            (r = u()(r).call(r, function (t) {
              return f()(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function input_objectSpread(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n,
            r = null != arguments[t] ? arguments[t] : {}
          if (t % 2)
            p()((n = input_ownKeys(Object(r), !0))).call(n, function (t) {
              I()(e, t, r[t])
            })
          else if (v.a) x()(e, v()(r))
          else {
            var a
            p()((a = input_ownKeys(Object(r)))).call(a, function (t) {
              g()(e, t, f()(r, t))
            })
          }
        }
        return e
      }
      var V = J('taro-input-core'),
        $ =
          (a.a.createElement,
          a.a.forwardRef(function (e, t) {
            var n = input_objectSpread({}, e)
            return (
              n.hasOwnProperty('focus') &&
                ((n.autoFocus = Boolean(n.focus)), delete n.focus),
              a.a.createElement(
                V,
                input_objectSpread(input_objectSpread({}, n), {}, { ref: t }),
              )
            )
          })),
        Y = J('taro-view-core'),
        Z =
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
        te = $,
        ne =
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
        re = J('taro-cover-view-core'),
        ae =
          (J('taro-movable-area-core'),
          J('taro-movable-view-core'),
          J('taro-scroll-view-core')),
        oe =
          (J('taro-swiper-core'),
          J('taro-swiper-item-core'),
          J('taro-functional-page-navigator-core'),
          J('taro-navigator-core')),
        ce =
          (J('taro-audio-core'), J('taro-camera-core'), J('taro-image-core')),
        ie = (J('taro-live-player-core'), J('taro-video-core')),
        le = (J('taro-map-core'), J('taro-canvas-core')),
        se =
          (J('taro-ad-core'),
          J('taro-official-account-core'),
          J('taro-open-data-core'),
          J('taro-web-view-core'),
          J('taro-navigation-bar-core'),
          r.Fragment)
      J('taro-custom-wrapper-core')
    },
    519: function (e, t, n) {
      e.exports = n(539)
    },
    520: function (e, t, n) {
      e.exports = n(536)
    },
    522: function (e, t, n) {
      var r = n(110)
      ;(e.exports = function _defineProperty(e, t, n) {
        return (
          t in e
            ? r(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        )
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0)
    },
    523: function (e, t, n) {
      var r = n(542),
        a = n(535),
        o = n(550)
      ;(e.exports = function _objectWithoutProperties(e, t) {
        if (null == e) return {}
        var n,
          c,
          i = o(e, t)
        if (r) {
          var l = r(e)
          for (c = 0; c < l.length; c++)
            (n = l[c]),
              a(t).call(t, n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (i[n] = e[n]))
        }
        return i
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0)
    },
    524: function (e, t, n) {
      var r = n(565),
        a = n(566),
        o = n(558),
        c = n(567)
      ;(e.exports = function _slicedToArray(e, t) {
        return r(e) || a(e, t) || o(e, t) || c()
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0)
    },
    532: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return u
      })
      var r = n(37),
        a = n(38),
        o = n(65),
        c = n(64),
        i = n(518),
        l = n(63),
        s = (n(533), n(108)),
        u = (function (e) {
          Object(o.a)(Index, e)
          var t = Object(c.a)(Index)
          function Index() {
            return Object(r.a)(this, Index), t.call(this)
          }
          return (
            Object(a.a)(Index, [
              {
                key: 'render',
                value: function render() {
                  var e = this.props,
                    t = e.padding,
                    n = e.title,
                    r = e.card
                  return Object(s.jsxs)(i.n, {
                    className:
                      'custom-class demo-block van-clearfix ' +
                      (t ? 'demo-block--padding' : ''),
                    children: [
                      n &&
                        Object(s.jsx)(i.n, {
                          className: 'demo-block__title',
                          children: n,
                        }),
                      r
                        ? Object(s.jsx)(i.n, {
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
        })(l.Component)
    },
    533: function (e, t, n) {},
    534: function (e, t, n) {
      e.exports = n(227)
    },
    535: function (e, t, n) {
      e.exports = n(549)
    },
    536: function (e, t, n) {
      var r = n(547)
      e.exports = r
    },
    539: function (e, t, n) {
      var r = n(544)
      e.exports = r
    },
    542: function (e, t, n) {
      e.exports = n(548)
    },
    543: function (e, t, n) {
      e.exports = n(551)
    },
    544: function (e, t, n) {
      n(545)
      var r = n(11).Object,
        a = (e.exports = function getOwnPropertyDescriptor(e, t) {
          return r.getOwnPropertyDescriptor(e, t)
        })
      r.getOwnPropertyDescriptor.sham && (a.sham = !0)
    },
    545: function (e, t, n) {
      var r = n(4),
        a = n(10),
        o = n(39),
        c = n(66).f,
        i = n(25),
        l = a(function () {
          c(1)
        })
      r(
        { target: 'Object', stat: !0, forced: !i || l, sham: !i },
        {
          getOwnPropertyDescriptor: function getOwnPropertyDescriptor(e, t) {
            return c(o(e), t)
          },
        },
      )
    },
    547: function (e, t, n) {
      n(228)
      var r = n(11)
      e.exports = r.Object.getOwnPropertySymbols
    },
    548: function (e, t, n) {
      var r = n(536)
      e.exports = r
    },
    549: function (e, t, n) {
      var r = n(229)
      e.exports = r
    },
    550: function (e, t, n) {
      var r = n(543),
        a = n(535)
      ;(e.exports = function _objectWithoutPropertiesLoose(e, t) {
        if (null == e) return {}
        var n,
          o,
          c = {},
          i = r(e)
        for (o = 0; o < i.length; o++)
          (n = i[o]), a(t).call(t, n) >= 0 || (c[n] = e[n])
        return c
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0)
    },
    551: function (e, t, n) {
      var r = n(230)
      e.exports = r
    },
    552: function (e, t, n) {
      var r = n(553)
      ;(e.exports = function _inherits(e, t) {
        if ('function' != typeof t && null !== t)
          throw new TypeError(
            'Super expression must either be null or a function',
          )
        ;(e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(e, 'prototype', { writable: !1 }),
          t && r(e, t)
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports)
    },
    553: function (e, t) {
      function _setPrototypeOf(t, n) {
        return (
          (e.exports = _setPrototypeOf =
            Object.setPrototypeOf ||
            function _setPrototypeOf(e, t) {
              return (e.__proto__ = t), e
            }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports),
          _setPrototypeOf(t, n)
        )
      }
      ;(e.exports = _setPrototypeOf),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports)
    },
    554: function (e, t, n) {
      var r = n(35).default,
        a = n(555)
      ;(e.exports = function _possibleConstructorReturn(e, t) {
        if (t && ('object' === r(t) || 'function' == typeof t)) return t
        if (void 0 !== t)
          throw new TypeError(
            'Derived constructors may only return object or undefined',
          )
        return a(e)
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
    557: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return jumpLink
      })
      var r = n(75)
      function jumpLink(e, t) {
        var n
        if (((t = null !== (n = t) && void 0 !== n ? n : 'navigateTo'), e))
          if ('navigateTo' === t && Object(r.b)().length > 9)
            Object(r.g)({ url: e })
          else
            switch (t) {
              case 'navigateTo':
                Object(r.e)({ url: e })
                break
              case 'reLaunch':
                Object(r.f)({ url: e })
                break
              case 'redirectTo':
                Object(r.g)({ url: e })
            }
      }
    },
    558: function (e, t, n) {
      var r = n(173),
        a = n(114),
        o = n(559)
      ;(e.exports = function _unsupportedIterableToArray(e, t) {
        var n
        if (e) {
          if ('string' == typeof e) return o(e, t)
          var c = r((n = Object.prototype.toString.call(e))).call(n, 8, -1)
          return (
            'Object' === c && e.constructor && (c = e.constructor.name),
            'Map' === c || 'Set' === c
              ? a(e)
              : 'Arguments' === c ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)
              ? o(e, t)
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
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n]
        return r
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0)
    },
    565: function (e, t, n) {
      var r = n(112)
      ;(e.exports = function _arrayWithHoles(e) {
        if (r(e)) return e
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0)
    },
    566: function (e, t, n) {
      var r = n(40),
        a = n(113)
      ;(e.exports = function _iterableToArrayLimit(e, t) {
        var n = null == e ? null : (void 0 !== r && a(e)) || e['@@iterator']
        if (null != n) {
          var o,
            c,
            i = [],
            l = !0,
            s = !1
          try {
            for (
              n = n.call(e);
              !(l = (o = n.next()).done) &&
              (i.push(o.value), !t || i.length !== t);
              l = !0
            );
          } catch (e) {
            ;(s = !0), (c = e)
          } finally {
            try {
              l || null == n.return || n.return()
            } finally {
              if (s) throw c
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
    570: function (e, t, n) {},
    571: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return Cell
      })
      var r = n(22),
        a = n.n(r),
        o = n(520),
        c = n.n(o),
        i = n(30),
        l = n.n(i),
        s = n(519),
        u = n.n(s),
        d = n(26),
        f = n.n(d),
        b = n(169),
        p = n.n(b),
        h = n(109),
        v = n.n(h),
        j = n(52),
        x = n.n(j),
        m = n(522),
        g = n.n(m),
        y = n(523),
        O = n.n(y),
        _ = n(63),
        k = n(518),
        w = n(521),
        C = n(557),
        S = n(529),
        N = n(527),
        T = n(528)
      var I = n(108),
        L = [
          'url',
          'linkType',
          'size',
          'center',
          'required',
          'border',
          'isLink',
          'clickable',
          'icon',
          'titleWidth',
          'titleStyle',
          'title',
          'label',
          'value',
          'arrowDirection',
          'onClick',
          'renderIcon',
          'renderTitle',
          'renderLabel',
          'renderRightIcon',
          'renderExtra',
          'children',
          'style',
          'className',
        ]
      function ownKeys(e, t) {
        var n = a()(e)
        if (c.a) {
          var r = c()(e)
          t &&
            (r = l()(r).call(r, function (t) {
              return u()(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function _objectSpread(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n,
            r = null != arguments[t] ? arguments[t] : {}
          if (t % 2)
            f()((n = ownKeys(Object(r), !0))).call(n, function (t) {
              g()(e, t, r[t])
            })
          else if (p.a) v()(e, p()(r))
          else {
            var a
            f()((a = ownKeys(Object(r)))).call(a, function (t) {
              x()(e, t, u()(r, t))
            })
          }
        }
        return e
      }
      function Cell(e) {
        var t,
          n = e.url,
          r = e.linkType,
          a = e.size,
          o = e.center,
          c = e.required,
          i = e.border,
          l = void 0 === i || i,
          s = e.isLink,
          u = e.clickable,
          d = e.icon,
          f = e.titleWidth,
          b = e.titleStyle,
          p = e.title,
          h = e.label,
          v = e.value,
          j = e.arrowDirection,
          x = e.onClick,
          m = e.renderIcon,
          g = e.renderTitle,
          y = e.renderLabel,
          P = e.renderRightIcon,
          E = e.renderExtra,
          D = e.children,
          M = e.style,
          z = e.className,
          K = O()(e, L),
          F = Object(_.useCallback)(
            function (e) {
              null == x || x(e), n && Object(C.a)(n, r)
            },
            [r, x, n],
          )
        return Object(I.jsxs)(
          k.n,
          _objectSpread(
            _objectSpread(
              {
                className:
                  ' ' +
                  w.b('cell', [
                    a,
                    {
                      center: o,
                      required: c,
                      borderless: !l,
                      clickable: s || u,
                    },
                  ]) +
                  ' '.concat(z || ''),
                hoverClass: 'van-cell--hover hover-class',
                hoverStayTime: 70,
                style: w.c([M]),
                onClick: F,
              },
              K,
            ),
            {},
            {
              children: [
                d
                  ? Object(I.jsx)(S.a, {
                      name: d,
                      className: 'van-cell__left-icon-wrap van-cell__left-icon',
                    })
                  : m,
                Object(I.jsxs)(k.n, {
                  style:
                    ((t = { titleWidth: f, titleStyle: b }),
                    Object(N.a)([
                      {
                        'max-width': Object(T.a)(t.titleWidth),
                        'min-width': Object(T.a)(t.titleWidth),
                      },
                      t.titleStyle,
                    ])),
                  className: 'van-cell__title title-class',
                  children: [
                    p || 0 === p ? Object(I.jsx)(k.a, { children: p }) : g,
                    (h || y) &&
                      Object(I.jsx)(k.n, {
                        className: 'van-cell__label label-class',
                        children:
                          y || (h && Object(I.jsx)(k.a, { children: h })),
                      }),
                  ],
                }),
                Object(I.jsx)(k.n, {
                  className: 'van-cell__value value-class',
                  children:
                    v || 0 === v ? Object(I.jsx)(k.a, { children: v }) : D,
                }),
                s
                  ? Object(I.jsx)(S.a, {
                      name: j ? 'arrow-' + j : 'arrow',
                      className:
                        'van-cell__right-icon-wrap right-icon-class van-cell__right-icon',
                    })
                  : P,
                E,
              ],
            },
          ),
        )
      }
      t.b = Cell
    },
    575: function (e, t, n) {
      'use strict'
      n(525), n(530), n(531), n(570)
    },
    577: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return s
      })
      var r,
        a = n(5),
        o = n.n(a),
        c = n(3),
        i = n(43),
        l = n(16),
        s = function pageScrollTo(e) {
          var t,
            n = e.scrollTop,
            a = e.selector,
            s = void 0 === a ? '' : a,
            u = e.duration,
            d = void 0 === u ? 300 : u,
            f = e.success,
            b = e.fail,
            p = e.complete,
            h = new i.a({
              name: 'pageScrollTo',
              success: f,
              fail: b,
              complete: p,
            })
          return new o.a(function (e, a) {
            var o, i
            try {
              if (void 0 === n && !s)
                return h.fail(
                  { errMsg: 'scrollTop" 或 "selector" 需要其之一' },
                  a,
                )
              var u =
                  null ===
                    (i =
                      null === (o = c.a.page) || void 0 === o
                        ? void 0
                        : o.path) || void 0 === i
                    ? void 0
                    : i.replace(/([^a-z0-9\u00a0-\uffff_-])/gi, '\\$1'),
                f = u
                  ? document.querySelector('.taro_page#'.concat(u))
                  : document.querySelector('.taro_page') ||
                    document.querySelector('.taro_router')
              t ||
                (t = f
                  ? function scrollFunc(e) {
                      if (void 0 === e) return f.scrollTop
                      f.scrollTop = e
                    }
                  : function scrollFunc(e) {
                      if (void 0 === e) return window.pageYOffset
                      window.scrollTo(0, e)
                    }),
                n &&
                  s &&
                  console.warn(
                    '"scrollTop" 或 "selector" 建议只设一个值，全部设置会忽略selector',
                  )
              var b,
                p = t()
              if ('number' == typeof n) b = n
              else {
                var v = document.querySelector(s)
                b = (null == v ? void 0 : v.offsetTop) || 0
              }
              var j = b - p,
                x = d / 17,
                m = Object(l.d)(l.a, x)
              !(function scroll() {
                var n =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : 0,
                  a = p + j * m(n)
                if ((t(a), !(n < x))) return h.success({}, e)
                r && clearTimeout(r),
                  (r = setTimeout(function () {
                    scroll(n + 1)
                  }, 17))
              })()
            } catch (e) {
              return h.fail({ errMsg: e.message }, a)
            }
          })
        }
    },
    589: function (e, t, n) {
      'use strict'
      n(525), n(530), n(531), n(590)
    },
    590: function (e, t, n) {},
    591: function (e, t, n) {
      'use strict'
      function isString(e) {
        return '[object String]' === toString.call(e)
      }
      function isArray(e) {
        return '[object Array]' === toString.call(e)
      }
      function isUndefined(e) {
        return '[object Undefined]' === toString.call(e)
      }
      function isObject(e) {
        return '[object Object]' === toString.call(e)
      }
      function isEmptyObject(e) {
        if (!isObject(e)) return !1
        for (var t in e) if (!isUndefined(e[t])) return !1
        return !0
      }
      n.d(t, 'd', function () {
        return isString
      }),
        n.d(t, 'a', function () {
          return isArray
        }),
        n.d(t, 'c', function () {
          return isObject
        }),
        n.d(t, 'b', function () {
          return isEmptyObject
        })
    },
    593: function (e, t, n) {
      'use strict'
      var r = n(22),
        a = n.n(r),
        o = n(520),
        c = n.n(o),
        i = n(30),
        l = n.n(i),
        s = n(519),
        u = n.n(s),
        d = n(26),
        f = n.n(d),
        b = n(169),
        p = n.n(b),
        h = n(109),
        v = n.n(h),
        j = n(52),
        x = n.n(j),
        m = n(522),
        g = n.n(m),
        y = n(524),
        O = n.n(y),
        _ = n(523),
        k = n.n(_),
        w = n(63),
        C = n(518),
        S = n(521),
        N = n(529),
        T = n(528)
      var I = {
        none: 'scaleToFill',
        fill: 'scaleToFill',
        cover: 'aspectFill',
        contain: 'aspectFit',
        widthFix: 'widthFix',
        heightFix: 'heightFix',
        scaleDown: 'aspectFit',
      }
      function mode(e) {
        return I[e]
      }
      var L = n(108),
        P = [
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
        var n = a()(e)
        if (c.a) {
          var r = c()(e)
          t &&
            (r = l()(r).call(r, function (t) {
              return u()(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function _objectSpread(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n,
            r = null != arguments[t] ? arguments[t] : {}
          if (t % 2)
            f()((n = ownKeys(Object(r), !0))).call(n, function (t) {
              g()(e, t, r[t])
            })
          else if (p.a) v()(e, p()(r))
          else {
            var a
            f()((a = ownKeys(Object(r)))).call(a, function (t) {
              x()(e, t, u()(r, t))
            })
          }
        }
        return e
      }
      t.a = function Image(e) {
        var t = e.src,
          n = e.round,
          r = e.width,
          a = e.height,
          o = e.radius,
          c = e.lazyLoad,
          i = e.showMenuByLongpress,
          l = e.fit,
          s = e.showError,
          u = void 0 === s || s,
          d = e.showLoading,
          f = void 0 === d || d,
          b = e.className,
          p = e.style,
          h = e.renderError,
          v = e.renderLoading,
          j = k()(e, P),
          x = Object(w.useState)(),
          m = O()(x, 2),
          g = m[0],
          y = m[1],
          _ = Object(w.useState)(!1),
          I = O()(_, 2),
          E = I[0],
          D = I[1]
        Object(w.useEffect)(
          function () {
            void 0 === g && y(!0), D(!1)
          },
          [g],
        )
        var M,
          z = Object(w.useCallback)(function () {
            y(!1)
          }, []),
          K = Object(w.useCallback)(function () {
            D(!0)
          }, []),
          F = Object(w.useMemo)(
            function () {
              var e = {}
              return (
                ('heightFix' !== l && 'widthFix' !== l) ||
                  (e = {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }),
                e
              )
            },
            [l],
          )
        return Object(L.jsxs)(
          C.n,
          _objectSpread(
            _objectSpread(
              {
                style: S.c([
                  ((M = { width: r, height: a, radius: o }),
                  Object(S.c)([
                    {
                      width: Object(T.a)(M.width),
                      height: Object(T.a)(M.height),
                      'border-radius': Object(T.a)(M.radius),
                    },
                    M.radius ? 'overflow: hidden' : null,
                  ])),
                  p,
                ]),
                className: ' ' + S.b('image', { round: n }) + ' ' + b,
                onClick: j.onClick,
              },
              j,
            ),
            {},
            {
              children: [
                !E &&
                  Object(L.jsx)(C.f, {
                    src: t,
                    mode: mode(l || 'none'),
                    lazyLoad: c,
                    className: 'image-class van-image__img',
                    showMenuByLongpress: i,
                    onLoad: z,
                    onError: K,
                    style: F,
                  }),
                g &&
                  f &&
                  Object(L.jsx)(C.n, {
                    className: 'loading-class van-image__loading',
                    children:
                      v ||
                      Object(L.jsx)(N.b, {
                        name: 'photo',
                        className: 'van-image__loading-icon',
                      }),
                  }),
                E &&
                  u &&
                  Object(L.jsx)(C.n, {
                    className: 'error-class van-image__error',
                    children:
                      h ||
                      Object(L.jsx)(N.b, {
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
    611: function (e, t, n) {
      'use strict'
      n(525), n(612)
    },
    612: function (e, t, n) {},
    613: function (e, t, n) {
      'use strict'
      var r = n(22),
        a = n.n(r),
        o = n(520),
        c = n.n(o),
        i = n(30),
        l = n.n(i),
        s = n(519),
        u = n.n(s),
        d = n(26),
        f = n.n(d),
        b = n(169),
        p = n.n(b),
        h = n(109),
        v = n.n(h),
        j = n(52),
        x = n.n(j),
        m = n(522),
        g = n.n(m),
        y = n(523),
        O = n.n(y),
        _ = n(518),
        k = n(521),
        w = n(108),
        C = ['inset', 'title', 'border', 'children', 'style', 'className']
      function ownKeys(e, t) {
        var n = a()(e)
        if (c.a) {
          var r = c()(e)
          t &&
            (r = l()(r).call(r, function (t) {
              return u()(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function _objectSpread(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n,
            r = null != arguments[t] ? arguments[t] : {}
          if (t % 2)
            f()((n = ownKeys(Object(r), !0))).call(n, function (t) {
              g()(e, t, r[t])
            })
          else if (p.a) v()(e, p()(r))
          else {
            var a
            f()((a = ownKeys(Object(r)))).call(a, function (t) {
              x()(e, t, u()(r, t))
            })
          }
        }
        return e
      }
      t.a = function CellGroup(e) {
        var t = e.inset,
          n = e.title,
          r = e.border,
          a = void 0 === r || r,
          o = e.children,
          c = e.style,
          i = e.className,
          l = O()(e, C)
        return Object(w.jsxs)(_.a, {
          children: [
            n &&
              Object(w.jsx)(_.n, {
                className: k.b('cell-group__title', { inset: t }),
                children: n,
              }),
            Object(w.jsx)(
              _.n,
              _objectSpread(
                _objectSpread(
                  {
                    className:
                      ' ' +
                      k.b('cell-group', { inset: t }) +
                      ' ' +
                      (a ? 'van-hairline--top-bottom' : '') +
                      ' '.concat(i || ''),
                    style: c,
                  },
                  l,
                ),
                {},
                { children: o },
              ),
            ),
          ],
        })
      }
    },
    668: function (e, t, n) {},
    669: function (e, t, n) {
      'use strict'
      var r = n(63),
        a = Object(r.createContext)({})
      t.a = a
    },
    702: function (e, t, n) {
      'use strict'
      n(525), n(668)
    },
    703: function (e, t, n) {
      'use strict'
      var r = n(22),
        a = n.n(r),
        o = n(520),
        c = n.n(o),
        i = n(30),
        l = n.n(i),
        s = n(519),
        u = n.n(s),
        d = n(26),
        f = n.n(d),
        b = n(169),
        p = n.n(b),
        h = n(109),
        v = n.n(h),
        j = n(52),
        x = n.n(j),
        m = n(522),
        g = n.n(m),
        y = n(523),
        O = n.n(y),
        _ = n(518),
        k = n(521),
        w = n(669),
        C = n(108),
        S = [
          'max',
          'value',
          'disabled',
          'direction',
          'onChange',
          'style',
          'className',
          'children',
        ]
      function ownKeys(e, t) {
        var n = a()(e)
        if (c.a) {
          var r = c()(e)
          t &&
            (r = l()(r).call(r, function (t) {
              return u()(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function _objectSpread(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n,
            r = null != arguments[t] ? arguments[t] : {}
          if (t % 2)
            f()((n = ownKeys(Object(r), !0))).call(n, function (t) {
              g()(e, t, r[t])
            })
          else if (p.a) v()(e, p()(r))
          else {
            var a
            f()((a = ownKeys(Object(r)))).call(a, function (t) {
              x()(e, t, u()(r, t))
            })
          }
        }
        return e
      }
      t.a = function CheckboxGroup(e) {
        var t = e.max,
          n = e.value,
          r = void 0 === n ? [] : n,
          a = e.disabled,
          o = void 0 !== a && a,
          c = e.direction,
          i = void 0 === c ? 'vertical' : c,
          l = e.onChange,
          s = e.style,
          u = e.className,
          d = e.children,
          f = O()(e, S)
        return Object(C.jsx)(w.a.Provider, {
          value: { value: r, max: t, disabled: o, direction: i, onChange: l },
          children: Object(C.jsx)(
            _.n,
            _objectSpread(
              _objectSpread(
                {
                  className:
                    k.b('checkbox-group', [
                      { horizontal: 'horizontal' === i },
                    ]) + ' '.concat(u || ''),
                  style: s,
                },
                f,
              ),
              {},
              { children: d },
            ),
          ),
        })
      }
    },
    704: function (e, t, n) {
      'use strict'
      n(525), n(530), n(531), n(668), n(705)
    },
    705: function (e, t, n) {},
    714: function (e, t, n) {
      'use strict'
      var r = n(22),
        a = n.n(r),
        o = n(520),
        c = n.n(o),
        i = n(30),
        l = n.n(i),
        s = n(519),
        u = n.n(s),
        d = n(26),
        f = n.n(d),
        b = n(169),
        p = n.n(b),
        h = n(109),
        v = n.n(h),
        j = n(522),
        x = n.n(j),
        m = n(523),
        g = n.n(m),
        y = n(524),
        O = n.n(y),
        _ = n(27),
        k = n.n(_),
        w = n(116),
        C = n.n(w),
        S = n(52),
        N = n.n(S),
        T = n(63),
        I = n(518),
        L = n(521),
        P = n(529),
        E = n(669),
        D = n(591),
        M = n(527),
        z = n(528)
      var K = n(108),
        F = [
          'name',
          'disabled',
          'checkedColor',
          'labelPosition',
          'labelDisabled',
          'shape',
          'iconSize',
          'renderIcon',
          'style',
          'className',
          'children',
        ]
      function ownKeys(e, t) {
        var n = a()(e)
        if (c.a) {
          var r = c()(e)
          t &&
            (r = l()(r).call(r, function (t) {
              return u()(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function _objectSpread(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n,
            r = null != arguments[t] ? arguments[t] : {}
          if (t % 2)
            f()((n = ownKeys(Object(r), !0))).call(n, function (t) {
              x()(e, t, r[t])
            })
          else if (p.a) v()(e, p()(r))
          else {
            var a
            f()((a = ownKeys(Object(r)))).call(a, function (t) {
              N()(e, t, u()(r, t))
            })
          }
        }
        return e
      }
      t.a = function Checkbox(e) {
        var t = Object(T.useState)({
            value: void 0,
            parentDisabled: !1,
            direction: 'vertical',
          }),
          n = O()(t, 2),
          r = n[0],
          a = n[1],
          o = e.name,
          c = e.disabled,
          i = e.checkedColor,
          l = void 0 === i ? '#1989fa' : i,
          s = e.labelPosition,
          u = void 0 === s ? 'right' : s,
          d = e.labelDisabled,
          f = e.shape,
          b = void 0 === f ? 'round' : f,
          p = e.iconSize,
          h = void 0 === p ? '20px' : p,
          v = e.renderIcon,
          j = e.style,
          x = e.className,
          m = e.children,
          y = g()(e, F),
          _ = Object(T.useContext)(E.a),
          w = Object(T.useCallback)(
            function (t) {
              var n
              _.onChange
                ? _.onChange(t)
                : null == e ||
                  null === (n = e.onChange) ||
                  void 0 === n ||
                  n.call(e, t)
            },
            [_.onChange, e.onChange],
          )
        Object(T.useEffect)(
          function () {
            a(function (t) {
              var n = e.value
              return _objectSpread(_objectSpread({}, t), {}, { value: n })
            })
          },
          [e.value],
        ),
          Object(T.useEffect)(
            function () {
              if (!Object(D.b)(_)) {
                var t = _.value,
                  n = _.direction,
                  r = _.disabled,
                  o =
                    (null == t ? void 0 : k()(t).call(t, ''.concat(e.name))) >
                    -1
                a(function (e) {
                  return _objectSpread(
                    _objectSpread({}, e),
                    {},
                    { value: o, direction: n, parentDisabled: r },
                  )
                })
              }
            },
            [e, _],
          )
        var S,
          A,
          R = Object(T.useCallback)(
            function (e, t) {
              var n = t.detail,
                r = e.max,
                a = e.value
              if (n) {
                if (r && a.length >= r) return
                ;-1 === k()(a).call(a, o) &&
                  (a.push(o), (t.detail = a), null == w || w(t))
              } else {
                var c = k()(a).call(a, o)
                ;-1 !== c &&
                  (C()(a).call(a, c, 1), (t.detail = a), null == w || w(t))
              }
            },
            [o, w],
          ),
          H = Object(T.useCallback)(
            function (e) {
              Object(D.b)(_) ? null == w || w(e) : R(_, e)
            },
            [_, w, R],
          ),
          W = Object(T.useCallback)(
            function (e) {
              c ||
                r.parentDisabled ||
                (N()(e, 'detail', { value: !r.value, writable: !0 }), H(e))
            },
            [c, H, r.parentDisabled, r.value],
          ),
          q = Object(T.useCallback)(
            function (e) {
              c ||
                d ||
                r.parentDisabled ||
                (N()(e, 'detail', { value: !r.value, writable: !0 }), H(e))
            },
            [c, H, d, r.parentDisabled, r.value],
          )
        return Object(K.jsxs)(
          I.n,
          _objectSpread(
            _objectSpread(
              {
                className:
                  L.b('checkbox', [
                    { horizontal: 'horizontal' === r.direction },
                  ]) + '  '.concat(x),
                style: j,
              },
              y,
            ),
            {},
            {
              children: [
                'left' === u &&
                  Object(K.jsx)(I.n, {
                    className:
                      'label-class ' +
                      L.b('checkbox__label', [
                        u,
                        { disabled: c || r.parentDisabled },
                      ]),
                    onClick: q,
                    children: m,
                  }),
                Object(K.jsx)(I.n, {
                  className: 'van-checkbox__icon-wrap',
                  onClick: W,
                  children:
                    v ||
                    Object(K.jsx)(P.b, {
                      name: 'success',
                      className:
                        L.b('checkbox__icon', [
                          b,
                          { disabled: c || r.parentDisabled, checked: r.value },
                        ]) + ' icon-class',
                      style:
                        ((S = {
                          checkedColor: l,
                          value: r.value,
                          disabled: c,
                          parentDisabled: r.parentDisabled,
                          iconSize: h,
                        }),
                        (A = { 'font-size': Object(z.a)(S.iconSize) }),
                        S.checkedColor &&
                          S.value &&
                          !S.disabled &&
                          !S.parentDisabled &&
                          ((A['border-color'] = S.checkedColor),
                          (A['background-color'] = S.checkedColor)),
                        Object(M.a)(A) + ';line-height:1.25em;'),
                    }),
                }),
                'right' === u &&
                  Object(K.jsx)(I.n, {
                    className:
                      'label-class ' +
                      L.b('checkbox__label', [
                        u,
                        { disabled: c || r.parentDisabled },
                      ]),
                    onClick: q,
                    children: m,
                  }),
              ],
            },
          ),
        )
      }
    },
    780: function (e, t, n) {},
    859: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'default', function () {
          return g
        })
      n(611)
      var r = n(613),
        a = (n(575), n(571)),
        o = (n(702), n(703)),
        c = (n(589), n(593)),
        i = (n(704), n(714)),
        l = n(37),
        s = n(38),
        u = n(171),
        d = n(65),
        f = n(64),
        b = n(88),
        p = n(9),
        h = n.n(p),
        v = n(63),
        j = n(541),
        x = n(532),
        m = (n(780), n(108)),
        g = (function (e) {
          Object(d.a)(Index, e)
          var t = Object(f.a)(Index)
          function Index() {
            var e
            return (
              Object(l.a)(this, Index),
              (e = t.call(this)),
              Object(b.a)(Object(u.a)(e), 'state', {
                checkbox1: !0,
                checkbox2: !0,
                checkbox3: !0,
                checkboxLabel: !0,
                checkboxSize: !0,
                checkboxShape: !0,
                list: ['a', 'b', 'c'],
                result: ['a', 'b'],
                result2: [],
                result3: [],
                result4: [],
                activeIcon: 'https://img.yzcdn.cn/vant/user-active.png',
                inactiveIcon: 'https://img.yzcdn.cn/vant/user-inactive.png',
              }),
              Object(b.a)(Object(u.a)(e), 'onChange', function (t) {
                var n = t.currentTarget.dataset.key
                e.setState(Object(b.a)({}, n, t.detail))
              }),
              Object(b.a)(Object(u.a)(e), 'toggle', function (t) {
                var n = t.currentTarget.dataset,
                  r = n.index,
                  a = n.name,
                  o = e.state[a]
                ;(o[r] = !o[r]), e.setState(Object(b.a)({}, a, o))
              }),
              Object(b.a)(Object(u.a)(e), 'noop', function () {}),
              e
            )
          }
          return (
            Object(s.a)(Index, [
              {
                key: 'render',
                value: function render() {
                  var e = this,
                    t = this.state,
                    n = t.checkbox1,
                    l = t.checkboxShape,
                    s = t.checkbox2,
                    u = t.checkboxSize,
                    d = t.checkbox3,
                    f = t.activeIcon,
                    b = t.inactiveIcon,
                    p = t.checkboxLabel,
                    v = t.result,
                    g = t.list,
                    y = t.result4,
                    O = t.result2,
                    _ = t.result3
                  return Object(m.jsx)(j.a, {
                    title: 'Checkbox 复选框',
                    children: Object(m.jsxs)(m.Fragment, {
                      children: [
                        Object(m.jsx)(x.a, {
                          title: '基本用法',
                          children: Object(m.jsx)(i.a, {
                            value: n,
                            className: 'demo-checkbox',
                            onChange: function onChange(t) {
                              e.onChange({
                                detail: t.detail,
                                currentTarget: {
                                  dataset: { key: 'checkbox1' },
                                },
                                target: { dataset: { key: 'checkbox1' } },
                              })
                            },
                            children: '复选框',
                          }),
                        }),
                        Object(m.jsxs)(x.a, {
                          title: '禁用状态',
                          children: [
                            Object(m.jsx)(i.a, {
                              disabled: !0,
                              value: !1,
                              className: 'demo-checkbox',
                              children: '复选框',
                            }),
                            Object(m.jsx)(i.a, {
                              disabled: !0,
                              value: !0,
                              className: 'demo-checkbox',
                              children: '复选框',
                            }),
                          ],
                        }),
                        Object(m.jsx)(x.a, {
                          title: '自定义形状',
                          children: Object(m.jsx)(i.a, {
                            value: l,
                            shape: 'square',
                            className: 'demo-checkbox',
                            onChange: function onChange(t) {
                              e.onChange({
                                detail: t.detail,
                                currentTarget: {
                                  dataset: { key: 'checkboxShape' },
                                },
                                target: { dataset: { key: 'checkboxShape' } },
                              })
                            },
                            children: '复选框',
                          }),
                        }),
                        Object(m.jsx)(x.a, {
                          title: '自定义颜色',
                          children: Object(m.jsx)(i.a, {
                            value: s,
                            checkedColor: '#07c160',
                            className: 'demo-checkbox',
                            onChange: function onChange(t) {
                              e.onChange({
                                detail: t.detail,
                                currentTarget: {
                                  dataset: { key: 'checkbox2' },
                                },
                                target: { dataset: { key: 'checkbox2' } },
                              })
                            },
                            children: '复选框',
                          }),
                        }),
                        Object(m.jsx)(x.a, {
                          title: '自定义大小',
                          children: Object(m.jsx)(i.a, {
                            iconSize: '25px',
                            value: u,
                            className: 'demo-checkbox',
                            onChange: function onChange(t) {
                              e.onChange({
                                detail: t.detail,
                                currentTarget: {
                                  dataset: { key: 'checkboxSize' },
                                },
                                target: { dataset: { key: 'checkboxSize' } },
                              })
                            },
                            children: '复选框',
                          }),
                        }),
                        Object(m.jsx)(x.a, {
                          title: '自定义图标',
                          children: Object(m.jsx)(i.a, {
                            value: d,
                            className: 'demo-checkbox',
                            onChange: function onChange(t) {
                              e.onChange({
                                detail: t.detail,
                                currentTarget: {
                                  dataset: { key: 'checkbox3' },
                                },
                                target: { dataset: { key: 'checkbox3' } },
                              })
                            },
                            renderIcon: Object(m.jsx)(m.Fragment, {
                              children: Object(m.jsx)(c.a, {
                                className: 'icon',
                                mode: 'widthFix',
                                src: d ? f : b,
                              }),
                            }),
                            children: '自定义图标',
                          }),
                        }),
                        Object(m.jsx)(x.a, {
                          title: '禁用文本点击',
                          children: Object(m.jsx)(i.a, {
                            labelDisabled: !0,
                            value: p,
                            className: 'demo-checkbox',
                            onChange: function onChange(t) {
                              e.onChange({
                                detail: t.detail,
                                currentTarget: {
                                  dataset: { key: 'checkboxLabel' },
                                },
                                target: { dataset: { key: 'checkboxLabel' } },
                              })
                            },
                            children: '复选框',
                          }),
                        }),
                        Object(m.jsx)(x.a, {
                          title: '复选框组',
                          children: Object(m.jsx)(o.a, {
                            value: v,
                            onChange: function onChange(t) {
                              e.onChange({
                                detail: t.detail,
                                currentTarget: { dataset: { key: 'result' } },
                                target: { dataset: { key: 'result' } },
                              })
                            },
                            children: h()(g).call(g, function (e) {
                              return Object(m.jsx)(
                                i.a,
                                {
                                  name: e,
                                  className: 'demo-checkbox',
                                  children: '复选框 ' + e,
                                },
                                e,
                              )
                            }),
                          }),
                        }),
                        Object(m.jsx)(x.a, {
                          title: '水平排列',
                          children: Object(m.jsx)(o.a, {
                            direction: 'horizontal',
                            value: y,
                            onChange: function onChange(t) {
                              e.onChange({
                                detail: t.detail,
                                currentTarget: { dataset: { key: 'result4' } },
                                target: { dataset: { key: 'result4' } },
                              })
                            },
                            children: h()(g).call(g, function (e) {
                              return Object(m.jsx)(
                                i.a,
                                {
                                  name: e,
                                  className: 'demo-checkbox',
                                  children: '复选框 ' + e,
                                },
                                e,
                              )
                            }),
                          }),
                        }),
                        Object(m.jsx)(x.a, {
                          title: '限制最大可选数',
                          children: Object(m.jsx)(o.a, {
                            value: O,
                            max: '2',
                            onChange: function onChange(t) {
                              e.onChange({
                                detail: t.detail,
                                currentTarget: { dataset: { key: 'result2' } },
                                target: { dataset: { key: 'result2' } },
                              })
                            },
                            children: h()(g).call(g, function (e) {
                              return Object(m.jsx)(
                                i.a,
                                {
                                  name: e,
                                  className: 'demo-checkbox',
                                  children: '复选框 ' + e,
                                },
                                e,
                              )
                            }),
                          }),
                        }),
                        Object(m.jsx)(x.a, {
                          title: '搭配单元格组件使用',
                          children: Object(m.jsx)(o.a, {
                            value: _,
                            children: Object(m.jsx)(r.a, {
                              children: h()(g).call(g, function (t, n) {
                                return Object(m.jsx)(
                                  a.b,
                                  {
                                    title: '复选框 ' + t,
                                    valueClass: 'value-class',
                                    clickable: !0,
                                    'data-index': n,
                                    'data-name': 'result3',
                                    onClick: function onClick(t) {
                                      e.toggle({
                                        detail: t.detail,
                                        currentTarget: {
                                          dataset: { name: 'result3' },
                                        },
                                        target: {
                                          dataset: { name: 'result3' },
                                        },
                                      })
                                    },
                                    children: Object(m.jsx)(i.a, {
                                      className: 'checkboxes-' + n,
                                      name: t,
                                    }),
                                  },
                                  t,
                                )
                              }),
                            }),
                          }),
                        }),
                      ],
                    }),
                  })
                },
              },
            ]),
            Index
          )
        })(v.Component)
    },
  },
])
