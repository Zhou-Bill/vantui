;(window.webpackJsonp = window.webpackJsonp || []).push([
  [51, 0],
  {
    521: function (n, e, t) {
      'use strict'
      t.d(e, 'a', function () {
        return b.a
      }),
        t.d(e, 'b', function () {
          return v
        }),
        t.d(e, 'c', function () {
          return j.a
        })
      var r = t(170),
        c = t.n(r),
        a = t(9),
        i = t.n(a),
        o = t(26),
        u = t.n(o),
        l = t(561),
        s = t(564)
      var f = t(140),
        d = t.n(f)
      function call(n, e) {
        return 2 === e.length ? n(e[0], e[1]) : 1 === e.length ? n(e[0]) : n()
      }
      function serializer(n) {
        if (
          1 === n.length &&
          (function isPrimitive(n) {
            var e = c()(n)
            return (
              'boolean' === e ||
              'number' === e ||
              'string' === e ||
              'undefined' === e ||
              null === n
            )
          })(n[0])
        )
          return n[0]
        for (var e = {}, t = 0; t < n.length; t++) e['key' + t] = n[t]
        return d()(e)
      }
      var b = t(528),
        j = t(527),
        v = (function memoize(n) {
          var e = {}
          return function () {
            var t = serializer(arguments)
            return void 0 === e[t] && (e[t] = call(n, arguments)), e[t]
          }
        })(function _bem(n, e) {
          var t = []
          return (
            (function traversing(n, e) {
              if (e)
                if ('string' == typeof e || 'number' == typeof e) n.push(e)
                else if (l.a(e))
                  u()(e).call(e, function (e) {
                    traversing(n, e)
                  })
                else if ('object' === c()(e)) {
                  var t
                  u()((t = s.a(e))).call(t, function (t) {
                    e[t] && n.push(t)
                  })
                }
            })(t, e),
            (function join(n, e) {
              return (
                (n = 'van-' + n),
                (e = i()(e).call(e, function (e) {
                  return n + '--' + e
                })).unshift(n),
                e.join(' ')
              )
            })(n, t)
          )
        })
    },
    525: function (n, e, t) {},
    526: function (n, e, t) {
      'use strict'
      t.d(e, 'e', function () {
        return isPlainObject
      }),
        t.d(e, 'f', function () {
          return isPromise
        }),
        t.d(e, 'b', function () {
          return isDef
        }),
        t.d(e, 'd', function () {
          return isObj
        }),
        t.d(e, 'a', function () {
          return isBoolean
        }),
        t.d(e, 'c', function () {
          return isImageUrl
        }),
        t.d(e, 'g', function () {
          return isVideoUrl
        })
      var r = t(170),
        c = t.n(r)
      function isFunction(n) {
        return 'function' == typeof n
      }
      function isPlainObject(n) {
        return null !== n && 'object' === c()(n) && !Array.isArray(n)
      }
      function isPromise(n) {
        return isPlainObject(n) && isFunction(n.then) && isFunction(n.catch)
      }
      function isDef(n) {
        return null != n
      }
      function isObj(n) {
        var e = c()(n)
        return null !== n && ('object' === e || 'function' === e)
      }
      function isBoolean(n) {
        return 'boolean' == typeof n
      }
      var a = /\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i,
        i = /\.(mp4|mpg|mpeg|dat|asf|avi|rm|rmvb|mov|wmv|flv|mkv)/i
      function isImageUrl(n) {
        return a.test(n)
      }
      function isVideoUrl(n) {
        return i.test(n)
      }
    },
    527: function (n, e, t) {
      'use strict'
      t.d(e, 'a', function () {
        return style
      })
      var r = t(9),
        c = t.n(r),
        a = t(30),
        i = t.n(a),
        o = (t(0), t(89), t(561)),
        u = t(564)
      function style(n) {
        var e, t, r
        return o.a(n)
          ? c()(
              (e = i()(n).call(n, function (n) {
                return null != n && '' !== n
              })),
            )
              .call(e, function (n) {
                return style(n)
              })
              .join(';')
          : '[object Object]' === toString.call(n)
          ? c()(
              (t = i()((r = u.a(n))).call(r, function (e) {
                return null != n[e] && '' !== n[e]
              })),
            )
              .call(t, function (e) {
                return [
                  ((t = e),
                  null ===
                    (r = t.replace(new RegExp('[A-Z]', 'g'), function (n) {
                      return '-' + n
                    })) || void 0 === r
                    ? void 0
                    : r.toLowerCase()),
                  [n[e]],
                ].join(':')
                var t, r
              })
              .join(';')
          : n
      }
    },
    528: function (n, e, t) {
      'use strict'
      t.d(e, 'a', function () {
        return addUnit
      })
      var r = t(87)
      function addUnit(n) {
        if (null != n)
          return /^-?\d+(\.\d+)?$/.test('' + n) ? r.a.pxTransform(n) : n
      }
    },
    529: function (n, e, t) {
      'use strict'
      t.d(e, 'a', function () {
        return Icon
      })
      var r = t(22),
        c = t.n(r),
        a = t(520),
        i = t.n(a),
        o = t(30),
        u = t.n(o),
        l = t(519),
        s = t.n(l),
        f = t(26),
        d = t.n(f),
        b = t(169),
        j = t.n(b),
        v = t(109),
        h = t.n(v),
        m = t(52),
        O = t.n(m),
        g = t(522),
        p = t.n(g),
        x = t(523),
        y = t.n(x),
        S = t(518),
        C = t(521),
        _ = t(576),
        N = t(27),
        k = t.n(N),
        I = t(527),
        w = t(528)
      function isImage(n) {
        return -1 !== k()(n).call(n, '/')
      }
      function rootStyle(n) {
        return Object(I.a)([
          { color: n.color, 'font-size': Object(w.a)(n.size) },
        ])
      }
      var T = t(108),
        P = [
          'classPrefix',
          'name',
          'color',
          'size',
          'dot',
          'info',
          'style',
          'className',
        ]
      function ownKeys(n, e) {
        var t = c()(n)
        if (i.a) {
          var r = i()(n)
          e &&
            (r = u()(r).call(r, function (e) {
              return s()(n, e).enumerable
            })),
            t.push.apply(t, r)
        }
        return t
      }
      function _objectSpread(n) {
        for (var e = 1; e < arguments.length; e++) {
          var t,
            r = null != arguments[e] ? arguments[e] : {}
          if (e % 2)
            d()((t = ownKeys(Object(r), !0))).call(t, function (e) {
              p()(n, e, r[e])
            })
          else if (j.a) h()(n, j()(r))
          else {
            var c
            d()((c = ownKeys(Object(r)))).call(c, function (e) {
              O()(n, e, s()(r, e))
            })
          }
        }
        return n
      }
      function Icon(n) {
        var e,
          t,
          r = n.classPrefix,
          c = void 0 === r ? 'van-icon' : r,
          a = n.name,
          i = n.color,
          o = n.size,
          u = n.dot,
          l = n.info,
          s = n.style,
          f = n.className,
          d = y()(n, P)
        return Object(T.jsxs)(
          S.n,
          _objectSpread(
            _objectSpread(
              {
                className:
                  ((e = { classPrefix: c, name: a }),
                  (t = []),
                  null != e.classPrefix && t.push(e.classPrefix),
                  isImage(e.name)
                    ? t.push('van-icon--image')
                    : null != e.classPrefix &&
                      t.push(e.classPrefix + '-' + e.name),
                  t.join(' ') + ' '.concat(f || '')),
                style: C.c([rootStyle({ color: i, size: o }), s]),
              },
              d,
            ),
            {},
            {
              children: [
                (l || 0 === l || u) &&
                  Object(T.jsx)(_.a, {
                    dot: u,
                    info: l,
                    className: 'van-icon__info',
                  }),
                isImage(a) &&
                  Object(T.jsx)(S.f, {
                    src: a,
                    mode: 'aspectFit',
                    className: 'van-icon__image',
                  }),
              ],
            },
          ),
        )
      }
      e.b = Icon
    },
    530: function (n, e, t) {},
    531: function (n, e, t) {},
    532: function (n, e, t) {
      'use strict'
      t.d(e, 'a', function () {
        return s
      })
      var r = t(37),
        c = t(38),
        a = t(65),
        i = t(64),
        o = t(518),
        u = t(63),
        l = (t(533), t(108)),
        s = (function (n) {
          Object(a.a)(Index, n)
          var e = Object(i.a)(Index)
          function Index() {
            return Object(r.a)(this, Index), e.call(this)
          }
          return (
            Object(c.a)(Index, [
              {
                key: 'render',
                value: function render() {
                  var n = this.props,
                    e = n.padding,
                    t = n.title,
                    r = n.card
                  return Object(l.jsxs)(o.n, {
                    className:
                      'custom-class demo-block van-clearfix ' +
                      (e ? 'demo-block--padding' : ''),
                    children: [
                      t &&
                        Object(l.jsx)(o.n, {
                          className: 'demo-block__title',
                          children: t,
                        }),
                      r
                        ? Object(l.jsx)(o.n, {
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
        })(u.Component)
    },
    533: function (n, e, t) {},
    540: function (n, e, t) {
      'use strict'
      t.d(e, 'g', function () {
        return range
      }),
        t.d(e, 'd', function () {
          return getSystemInfoSync
        }),
        t.d(e, 'a', function () {
          return addUnit
        }),
        t.d(e, 'h', function () {
          return requestAnimationFrame
        }),
        t.d(e, 'f', function () {
          return pickExclude
        }),
        t.d(e, 'c', function () {
          return getRect
        }),
        t.d(e, 'b', function () {
          return getAllRect
        }),
        t.d(e, 'i', function () {
          return toPromise
        })
      var r,
        c = t(139),
        a = t.n(c),
        i = t(22),
        o = t.n(i),
        u = t(15),
        l = t.n(u),
        s = t(5),
        f = t.n(s),
        d = (t(517), t(841)),
        b = (t(844), t(87)),
        j = t(895),
        v = (t(75), t(526))
      t(546)
      function range(n, e, t) {
        return Math.min(Math.max(n, e), t)
      }
      function getSystemInfoSync() {
        return null == r && (r = Object(d.a)()), r
      }
      function addUnit(n) {
        if (Object(v.b)(n))
          return /^-?\d+(\.\d+)?$/.test('' + n) ? b.a.pxTransform(n) : n
      }
      function requestAnimationFrame(n) {
        return 'devtools' === getSystemInfoSync().platform
          ? setTimeout(function () {
              n()
            }, 33.333333333333336)
          : Object(j.a)()
              .selectViewport()
              .boundingClientRect()
              .exec(function () {
                n()
              })
      }
      function pickExclude(n, e) {
        var t
        return Object(v.e)(n)
          ? a()((t = o()(n))).call(
              t,
              function (t, r) {
                return l()(e).call(e, r) || (t[r] = n[r]), t
              },
              {},
            )
          : {}
      }
      function getRect(n, e) {
        return new f.a(function (t) {
          var r = Object(j.a)()
          n && (r = r.in(n)),
            r
              .select(e)
              .boundingClientRect()
              .exec(function () {
                var n =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : []
                return t(n[0])
              })
        })
      }
      function getAllRect(n, e) {
        return new f.a(function (t) {
          var r = Object(j.a)()
          n && (r = r.in(n)),
            r
              .selectAll(e)
              .boundingClientRect()
              .exec(function () {
                var n =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : []
                return t(n[0])
              })
        })
      }
      function toPromise(n) {
        return Object(v.f)(n) ? n : f.a.resolve(n)
      }
      t.d(e, 'e', function () {
        return v.b
      })
    },
    541: function (n, e, t) {
      'use strict'
      ;(function (n) {
        t.d(e, 'a', function () {
          return Page
        })
        t(579)
        var r = t(529),
          c = t(518),
          a = t(87),
          i = t(577),
          o = t(75),
          u = t(63),
          l = (t(594), t(108))
        function Page(e) {
          var t = e.title,
            s = e.className,
            f = void 0 === s ? '' : s,
            d = e.children,
            b = a.a.useRouter().path
          return (
            Object(u.useEffect)(
              function () {
                'react' === n.env.LIBRARY_ENV
                  ? (document.body.scrollTop =
                      document.documentElement.scrollTop =
                        0)
                  : Object(i.a)({ scrollTop: 0 })
              },
              [b],
            ),
            a.a.useShareAppMessage(function () {
              return { title: 'AntM 组件库演示', path: b }
            }),
            Object(l.jsxs)(c.n, {
              className: 'demo-page '.concat(f),
              children: [
                Object(l.jsxs)(c.n, {
                  className: 'demo-nav',
                  children: [
                    Object(l.jsx)(r.b, {
                      name: 'arrow-left',
                      className: 'demo-nav__back',
                      onClick: function onClick() {
                        return Object(o.d)()
                      },
                    }),
                    Object(l.jsxs)(c.n, {
                      className: 'demo-nav__title',
                      children: [t, ' '],
                    }),
                  ],
                }),
                d,
              ],
            })
          )
        }
      }.call(this, t(231)))
    },
    546: function (n, e, t) {
      'use strict'
      t.d(e, 'a', function () {
        return canIUseModel
      }),
        t.d(e, 'b', function () {
          return canIUseNextTick
        })
      var r,
        c = t(111),
        a = t.n(c),
        i = t(841),
        o = t(842)
      t(843)
      function gte(n) {
        return (
          (function compareVersion(n, e) {
            ;(n = n.split('.')), (e = e.split('.'))
            for (var t = Math.max(n.length, e.length); n.length < t; )
              n.push('0')
            for (; e.length < t; ) e.push('0')
            for (var r = 0; r < t; r++) {
              var c = a()(n[r], 10),
                i = a()(e[r], 10)
              if (c > i) return 1
              if (c < i) return -1
            }
            return 0
          })(
            (function getSystemInfoSync() {
              return null == r && (r = Object(i.a)()), r
            })().SDKVersion,
            n,
          ) >= 0
        )
      }
      function canIUseModel() {
        return gte('2.9.3')
      }
      function canIUseNextTick() {
        return Object(o.a)('nextTick')
      }
    },
    561: function (n, e, t) {
      'use strict'
      function isArray(n) {
        return n && '[object Array]' === toString.call(n)
      }
      t.d(e, 'a', function () {
        return isArray
      })
    },
    564: function (n, e, t) {
      'use strict'
      t.d(e, 'a', function () {
        return keys
      })
      var r = t(9),
        c = t.n(r),
        a = t(140),
        i = t.n(a),
        o = new RegExp('{|}|"', 'g')
      function keys(n) {
        var e
        return c()((e = i()(n).replace(o, '').split(','))).call(
          e,
          function (n) {
            return n.split(':')[0]
          },
        )
      }
    },
    576: function (n, e, t) {
      'use strict'
      t.d(e, 'a', function () {
        return Info
      })
      var r = t(22),
        c = t.n(r),
        a = t(520),
        i = t.n(a),
        o = t(30),
        u = t.n(o),
        l = t(519),
        s = t.n(l),
        f = t(26),
        d = t.n(f),
        b = t(169),
        j = t.n(b),
        v = t(109),
        h = t.n(v),
        m = t(52),
        O = t.n(m),
        g = t(522),
        p = t.n(g),
        x = t(523),
        y = t.n(x),
        S = t(518),
        C = t(521),
        _ = t(108),
        N = ['dot', 'info', 'style', 'className']
      function ownKeys(n, e) {
        var t = c()(n)
        if (i.a) {
          var r = i()(n)
          e &&
            (r = u()(r).call(r, function (e) {
              return s()(n, e).enumerable
            })),
            t.push.apply(t, r)
        }
        return t
      }
      function _objectSpread(n) {
        for (var e = 1; e < arguments.length; e++) {
          var t,
            r = null != arguments[e] ? arguments[e] : {}
          if (e % 2)
            d()((t = ownKeys(Object(r), !0))).call(t, function (e) {
              p()(n, e, r[e])
            })
          else if (j.a) h()(n, j()(r))
          else {
            var c
            d()((c = ownKeys(Object(r)))).call(c, function (e) {
              O()(n, e, s()(r, e))
            })
          }
        }
        return n
      }
      function Info(n) {
        var e = n.dot,
          t = n.info,
          r = void 0 === t ? null : t,
          c = n.style,
          a = n.className,
          i = y()(n, N)
        return Object(_.jsx)(_.Fragment, {
          children:
            (r || 0 === r || e) &&
            Object(_.jsx)(
              S.n,
              _objectSpread(
                _objectSpread(
                  {
                    className: 'van-info ' + C.b('info', { dot: e }) + '  ' + a,
                    style: C.c([c]),
                  },
                  i,
                ),
                {},
                { children: e ? '' : r },
              ),
            ),
        })
      }
      e.b = Info
    },
    579: function (n, e, t) {
      'use strict'
      t(525), t(530), t(531)
    },
    594: function (n, e, t) {},
    663: function (n, e, t) {
      'use strict'
      t(525), t(664)
    },
    664: function (n, e, t) {},
    665: function (n, e, t) {
      'use strict'
      var r = t(22),
        c = t.n(r),
        a = t(520),
        i = t.n(a),
        o = t(30),
        u = t.n(o),
        l = t(519),
        s = t.n(l),
        f = t(26),
        d = t.n(f),
        b = t(169),
        j = t.n(b),
        v = t(109),
        h = t.n(v),
        m = t(52),
        O = t.n(m),
        g = t(522),
        p = t.n(g),
        x = t(524),
        y = t.n(x),
        S = t(523),
        C = t.n(S),
        _ = t(174),
        N = t.n(_),
        k = t(21),
        I = t.n(k),
        w = t(9),
        T = t.n(w),
        P = t(63),
        A = t(518),
        M = t(521),
        E = t(527),
        R = t(546),
        D = t(540),
        U = t(108),
        X = [
          'range',
          'disabled',
          'activeColor',
          'inactiveColor',
          'max',
          'min',
          'step',
          'value',
          'barHeight',
          'vertical',
          'onDrag',
          'onChange',
          'onDragStart',
          'onDragEnd',
          'className',
          'renderButton',
          'renderLeftButton',
          'renderRightButton',
        ]
      function ownKeys(n, e) {
        var t = c()(n)
        if (i.a) {
          var r = i()(n)
          e &&
            (r = u()(r).call(r, function (e) {
              return s()(n, e).enumerable
            })),
            t.push.apply(t, r)
        }
        return t
      }
      function _objectSpread(n) {
        for (var e = 1; e < arguments.length; e++) {
          var t,
            r = null != arguments[e] ? arguments[e] : {}
          if (e % 2)
            d()((t = ownKeys(Object(r), !0))).call(t, function (e) {
              p()(n, e, r[e])
            })
          else if (j.a) h()(n, j()(r))
          else {
            var c
            d()((c = ownKeys(Object(r)))).call(c, function (e) {
              O()(n, e, s()(r, e))
            })
          }
        }
        return n
      }
      var B = 0
      e.a = function Slider(n) {
        var e = n.range,
          t = n.disabled,
          r = n.activeColor,
          c = n.inactiveColor,
          a = n.max,
          i = void 0 === a ? 100 : a,
          o = n.min,
          u = void 0 === o ? 0 : o,
          l = n.step,
          s = void 0 === l ? 1 : l,
          f = n.value,
          d = void 0 === f ? 0 : f,
          b = n.barHeight,
          j = n.vertical,
          v = void 0 !== j && j,
          h = n.onDrag,
          m = n.onChange,
          O = n.onDragStart,
          g = n.onDragEnd,
          x = n.className,
          S = void 0 === x ? '' : x,
          _ = n.renderButton,
          k = n.renderLeftButton,
          w = n.renderRightButton,
          Y = C()(n, X),
          K = Object(P.useState)(),
          z = y()(K, 2),
          F = z[0],
          V = z[1],
          L = Object(P.useState)(),
          H = y()(L, 2),
          q = H[0],
          J = H[1],
          $ = Object(P.useState)(),
          Z = y()($, 2),
          G = Z[0],
          Q = Z[1],
          W = Object(P.useState)(),
          nn = y()(W, 2),
          en = nn[0],
          tn = nn[1],
          rn = Object(P.useState)(),
          cn = y()(rn, 2),
          an = cn[0],
          on = cn[1],
          un = Object(P.useState)({}),
          ln = y()(un, 2),
          sn = ln[0],
          fn = ln[1],
          dn = Object(P.useState)({}),
          bn = y()(dn, 2),
          jn = bn[0],
          vn = bn[1],
          hn = Object(P.useState)(),
          mn = y()(hn, 2),
          On = mn[0],
          gn = mn[1],
          pn = Object(P.useState)(),
          xn = y()(pn, 2),
          yn = xn[0],
          Sn = xn[1]
        Object(P.useEffect)(function () {
          Sn(B++)
        }, [])
        var Cn = Object(P.useCallback)(
            function () {
              fn(
                _objectSpread(
                  _objectSpread({}, sn),
                  {},
                  {
                    direction: '',
                    deltaX: 0,
                    deltaY: 0,
                    offsetX: 0,
                    offsetY: 0,
                  },
                ),
              )
            },
            [sn],
          ),
          _n = Object(P.useCallback)(
            function (n) {
              Cn()
              var e = n.touches[0]
              fn(
                _objectSpread(
                  _objectSpread({}, sn),
                  {},
                  { startX: e.clientX, startY: e.startY },
                ),
              )
            },
            [sn, Cn],
          ),
          Nn = Object(P.useCallback)(
            function (n) {
              Cn()
              var e,
                t,
                r = n.touches[0],
                c = _objectSpread(
                  _objectSpread({}, sn),
                  {},
                  {
                    direction:
                      sn.direction ||
                      ((e = sn.offsetX),
                      (t = sn.offsetY),
                      e > t && e > 10
                        ? 'horizontal'
                        : t > e && t > 10
                        ? 'vertical'
                        : ''),
                    deltaX: r.clientX - (sn.startX || 0),
                    deltaY: r.clientY - (sn.startY || 0),
                    offsetX: Math.abs(sn.deltaX),
                    offsetY: Math.abs(sn.deltaY),
                  },
                )
              return fn(c), c
            },
            [sn, Cn],
          ),
          kn = Object(P.useCallback)(
            function (n) {
              return e && Array.isArray(n)
            },
            [e],
          ),
          In = Object(P.useCallback)(function (n, e) {
            return Number(n) - Number(e)
          }, []),
          wn = Object(P.useCallback)(
            function (n) {
              var e = In(i, u)
              return kn(n)
                ? ''.concat((100 * (n[1] - n[0])) / e, '%')
                : ''.concat((100 * (n - Number(u))) / e, '%')
            },
            [In, kn, i, u],
          ),
          Tn = Object(P.useCallback)(
            function (n) {
              var e = In(i, u)
              return kn(n) ? (100 * (n[0] - Number(u))) / e + '%' : '0%'
            },
            [In, kn, i, u],
          ),
          Pn = Object(P.useCallback)(
            function (n) {
              return Math.round(Math.max(u, Math.min(n, i)) / s) * s
            },
            [i, u, s],
          ),
          An = Object(P.useCallback)(function (n) {
            var e
            return n[0] > n[1] ? N()((e = I()(n).call(n, 0))).call(e) : n
          }, []),
          Mn = Object(P.useCallback)(
            function (n, e, t) {
              var r, a
              kn(n)
                ? (n = T()((a = An(n))).call(a, function (n) {
                    return Pn(n)
                  }))
                : (n = Pn(n))
              var i = v ? 'height' : 'width'
              Q(n),
                J(
                  p()(
                    { background: c || '' },
                    v ? 'width' : 'height',
                    Object(D.a)(b) || '',
                  ),
                )
              var o =
                ((r = {}),
                p()(r, i, wn(n)),
                p()(r, 'left', v ? 0 : Tn(n)),
                p()(r, 'top', v ? Tn(n) : 0),
                r)
              t && (o.transition = 'none'),
                V(o),
                t && h && h({ detail: { value: n } }),
                e && m && m({ detail: n }),
                (t || e) && Object(R.a)() && Q(n)
            },
            [wn, Pn, An, kn, m, h, b, Tn, c, v],
          )
        Object(P.useEffect)(
          function () {
            Q(d), Mn(d)
          },
          [d, Mn],
        )
        var En = Object(P.useCallback)(
            function (n, e) {
              t ||
                ('number' == typeof e && on(e || 0),
                _n(n),
                gn(Pn(G)),
                vn(G),
                kn(G)
                  ? gn(
                      T()(G).call(G, function (n) {
                        return Pn(n)
                      }),
                    )
                  : gn(Pn(G)),
                tn('start'))
            },
            [t, Pn, kn, _n, G],
          ),
          Rn = Object(P.useCallback)(
            function () {
              return i - u
            },
            [i, u],
          ),
          Dn = Object(P.useCallback)(
            function (n) {
              if ((n.preventDefault(), !t)) {
                'start' === en && O && O()
                var e = Nn(n)
                tn('draging'),
                  Object(D.c)(null, '.van-slider'.concat(yn)).then(function (
                    n,
                  ) {
                    var t = (e.deltaX / n.width) * Rn()
                    if (kn(On)) (jn[an] = On[an] + t), vn(jn)
                    else {
                      vn((On || 0) + t)
                    }
                    Mn(jn, !1, !0)
                  })
              }
            },
            [an, t, en, Rn, kn, jn, O, On, Nn, Mn, yn],
          ),
          Un = Object(P.useCallback)(
            function () {
              t || ('draging' === en && (Mn(jn, !0), g && g()))
            },
            [t, en, jn, g, Mn],
          ),
          Xn = Object(P.useCallback)(
            function (n) {
              t ||
                Object(D.c)(null, '.van-slider'.concat(yn)).then(function (e) {
                  var t =
                    (((n.target.x || n.clientX) - e.left) / e.width) * Rn() + u
                  if (kn(G)) {
                    var r = y()(G, 2),
                      c = r[0],
                      a = r[1]
                    Mn(t <= (c + a) / 2 ? [t, a] : [c, t], !0)
                  } else Mn(t, !0)
                })
            },
            [t, Rn, kn, u, Mn, G, yn],
          )
        return Object(U.jsx)(
          A.n,
          _objectSpread(
            _objectSpread(
              {
                className:
                  ' ' +
                  M.b('slider', { disabled: t, vertical: v }) +
                  ' van-slider'.concat(yn, ' ') +
                  S,
                style: M.c([q, E.a]),
                onClick: Xn,
              },
              Y,
            ),
            {},
            {
              children: Object(U.jsxs)(A.n, {
                className: M.b('slider__bar'),
                style: Object(E.a)(
                  _objectSpread(
                    _objectSpread({}, F),
                    {},
                    { backgroundColor: r },
                  ),
                ),
                children: [
                  e &&
                    Object(U.jsx)(A.n, {
                      className: M.b('slider__button-wrapper-left'),
                      onTouchStart: function onTouchStart(n) {
                        return En(n, 0)
                      },
                      onTouchMove: Dn,
                      onTouchEnd: Un,
                      onTouchCancel: Un,
                      children: _
                        ? k
                          ? k(G)
                          : ''
                        : Object(U.jsx)(A.n, {
                            className: M.b('slider__button'),
                          }),
                    }),
                  e &&
                    Object(U.jsx)(A.n, {
                      className: M.b('slider__button-wrapper-right'),
                      onTouchStart: function onTouchStart(n) {
                        return En(n, 1)
                      },
                      onTouchMove: Dn,
                      onTouchEnd: Un,
                      onTouchCancel: Un,
                      children: _
                        ? w
                          ? w(G)
                          : ''
                        : Object(U.jsx)(A.n, {
                            className: M.b('slider__button'),
                          }),
                    }),
                  !e &&
                    Object(U.jsx)(A.n, {
                      className: M.b('slider__button-wrapper'),
                      onTouchStart: En,
                      onTouchMove: Dn,
                      onTouchEnd: Un,
                      onTouchCancel: Un,
                      children: _
                        ? null == _
                          ? void 0
                          : _(G)
                        : Object(U.jsx)(A.n, {
                            className: M.b('slider__button'),
                          }),
                    }),
                ],
              }),
            },
          ),
        )
      }
    },
    764: function (n, e, t) {},
    854: function (n, e, t) {
      'use strict'
      t.r(e),
        t.d(e, 'default', function () {
          return h
        })
      t(663)
      var r = t(665),
        c = t(37),
        a = t(38),
        i = t(171),
        o = t(65),
        u = t(64),
        l = t(88),
        s = t(63),
        f = t(884),
        d = t(518),
        b = t(541),
        j = t(532),
        v = (t(764), t(108)),
        h = (function (n) {
          Object(o.a)(Index, n)
          var e = Object(u.a)(Index)
          function Index() {
            var n
            return (
              Object(c.a)(this, Index),
              (n = e.call(this)),
              Object(l.a)(Object(i.a)(n), 'state', { currentValue: 50 }),
              Object(l.a)(Object(i.a)(n), 'onChange', function (n) {
                Object(f.c)({
                  icon: 'none',
                  title: '当前值：'.concat(n.detail),
                })
              }),
              Object(l.a)(Object(i.a)(n), 'onDrag', function (e) {
                n.setState({ currentValue: e.detail.value })
              }),
              n
            )
          }
          return (
            Object(a.a)(Index, [
              {
                key: 'render',
                value: function render() {
                  var n = this.state.currentValue
                  return Object(v.jsx)(b.a, {
                    title: 'Slider 滑块',
                    children: Object(v.jsxs)(v.Fragment, {
                      children: [
                        Object(v.jsx)(j.a, {
                          title: '基础用法',
                          children: Object(v.jsx)(r.a, {
                            value: '50',
                            className: 'slider',
                            onChange: this.onChange,
                          }),
                        }),
                        Object(v.jsx)(j.a, {
                          title: '双滑块',
                          children: Object(v.jsx)(r.a, {
                            range: !0,
                            value: [20, 60],
                            className: 'slider',
                            onChange: this.onChange,
                          }),
                        }),
                        Object(v.jsx)(j.a, {
                          title: '指定选择范围',
                          children: Object(v.jsx)(r.a, {
                            className: 'slider',
                            min: -50,
                            max: 50,
                            onChange: this.onChange,
                          }),
                        }),
                        Object(v.jsx)(j.a, {
                          title: '禁用',
                          children: Object(v.jsx)(r.a, {
                            className: 'slider',
                            value: '50',
                            disabled: !0,
                          }),
                        }),
                        Object(v.jsx)(j.a, {
                          title: '指定步长',
                          children: Object(v.jsx)(r.a, {
                            className: 'slider',
                            value: '50',
                            step: '10',
                            onChange: this.onChange,
                          }),
                        }),
                        Object(v.jsx)(j.a, {
                          title: '自定义样式',
                          children: Object(v.jsx)(r.a, {
                            value: '50',
                            className: 'slider',
                            barHeight: '4px',
                            activeColor: '#ee0a24',
                          }),
                        }),
                        Object(v.jsx)(j.a, {
                          title: '自定义按钮',
                          children: Object(v.jsx)(r.a, {
                            value: n,
                            className: 'slider',
                            activeColor: '#ee0a24',
                            onDrag: this.onDrag,
                            renderButton: function renderButton() {
                              return Object(v.jsx)(v.Fragment, {
                                children: Object(v.jsx)(d.n, {
                                  className: 'custom-button',
                                  children: n,
                                }),
                              })
                            },
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
        })(s.Component)
    },
  },
])
