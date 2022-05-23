/*! For license information please see 40.js.LICENSE.txt */
;(window.webpackJsonp = window.webpackJsonp || []).push([
  [40, 0],
  {
    521: function (e, n, t) {
      'use strict'
      t.d(n, 'a', function () {
        return b.a
      }),
        t.d(n, 'b', function () {
          return h
        }),
        t.d(n, 'c', function () {
          return j.a
        })
      var r = t(170),
        c = t.n(r),
        a = t(9),
        i = t.n(a),
        o = t(26),
        s = t.n(o),
        l = t(561),
        u = t(564)
      var f = t(140),
        d = t.n(f)
      function call(e, n) {
        return 2 === n.length ? e(n[0], n[1]) : 1 === n.length ? e(n[0]) : e()
      }
      function serializer(e) {
        if (
          1 === e.length &&
          (function isPrimitive(e) {
            var n = c()(e)
            return (
              'boolean' === n ||
              'number' === n ||
              'string' === n ||
              'undefined' === n ||
              null === e
            )
          })(e[0])
        )
          return e[0]
        for (var n = {}, t = 0; t < e.length; t++) n['key' + t] = e[t]
        return d()(n)
      }
      var b = t(528),
        j = t(527),
        h = (function memoize(e) {
          var n = {}
          return function () {
            var t = serializer(arguments)
            return void 0 === n[t] && (n[t] = call(e, arguments)), n[t]
          }
        })(function _bem(e, n) {
          var t = []
          return (
            (function traversing(e, n) {
              if (n)
                if ('string' == typeof n || 'number' == typeof n) e.push(n)
                else if (l.a(n))
                  s()(n).call(n, function (n) {
                    traversing(e, n)
                  })
                else if ('object' === c()(n)) {
                  var t
                  s()((t = u.a(n))).call(t, function (t) {
                    n[t] && e.push(t)
                  })
                }
            })(t, n),
            (function join(e, n) {
              return (
                (e = 'van-' + e),
                (n = i()(n).call(n, function (n) {
                  return e + '--' + n
                })).unshift(e),
                n.join(' ')
              )
            })(e, t)
          )
        })
    },
    525: function (e, n, t) {},
    526: function (e, n, t) {
      'use strict'
      t.d(n, 'e', function () {
        return isPlainObject
      }),
        t.d(n, 'f', function () {
          return isPromise
        }),
        t.d(n, 'b', function () {
          return isDef
        }),
        t.d(n, 'd', function () {
          return isObj
        }),
        t.d(n, 'a', function () {
          return isBoolean
        }),
        t.d(n, 'c', function () {
          return isImageUrl
        }),
        t.d(n, 'g', function () {
          return isVideoUrl
        })
      var r = t(170),
        c = t.n(r)
      function isFunction(e) {
        return 'function' == typeof e
      }
      function isPlainObject(e) {
        return null !== e && 'object' === c()(e) && !Array.isArray(e)
      }
      function isPromise(e) {
        return isPlainObject(e) && isFunction(e.then) && isFunction(e.catch)
      }
      function isDef(e) {
        return null != e
      }
      function isObj(e) {
        var n = c()(e)
        return null !== e && ('object' === n || 'function' === n)
      }
      function isBoolean(e) {
        return 'boolean' == typeof e
      }
      var a = /\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i,
        i = /\.(mp4|mpg|mpeg|dat|asf|avi|rm|rmvb|mov|wmv|flv|mkv)/i
      function isImageUrl(e) {
        return a.test(e)
      }
      function isVideoUrl(e) {
        return i.test(e)
      }
    },
    527: function (e, n, t) {
      'use strict'
      t.d(n, 'a', function () {
        return style
      })
      var r = t(9),
        c = t.n(r),
        a = t(30),
        i = t.n(a),
        o = (t(0), t(89), t(561)),
        s = t(564)
      function style(e) {
        var n, t, r
        return o.a(e)
          ? c()(
              (n = i()(e).call(e, function (e) {
                return null != e && '' !== e
              })),
            )
              .call(n, function (e) {
                return style(e)
              })
              .join(';')
          : '[object Object]' === toString.call(e)
          ? c()(
              (t = i()((r = s.a(e))).call(r, function (n) {
                return null != e[n] && '' !== e[n]
              })),
            )
              .call(t, function (n) {
                return [
                  ((t = n),
                  null ===
                    (r = t.replace(new RegExp('[A-Z]', 'g'), function (e) {
                      return '-' + e
                    })) || void 0 === r
                    ? void 0
                    : r.toLowerCase()),
                  [e[n]],
                ].join(':')
                var t, r
              })
              .join(';')
          : e
      }
    },
    528: function (e, n, t) {
      'use strict'
      t.d(n, 'a', function () {
        return addUnit
      })
      var r = t(87)
      function addUnit(e) {
        if (null != e)
          return /^-?\d+(\.\d+)?$/.test('' + e) ? r.a.pxTransform(e) : e
      }
    },
    529: function (e, n, t) {
      'use strict'
      t.d(n, 'a', function () {
        return Icon
      })
      var r = t(22),
        c = t.n(r),
        a = t(520),
        i = t.n(a),
        o = t(30),
        s = t.n(o),
        l = t(519),
        u = t.n(l),
        f = t(26),
        d = t.n(f),
        b = t(169),
        j = t.n(b),
        h = t(109),
        m = t.n(h),
        v = t(52),
        p = t.n(v),
        g = t(522),
        y = t.n(g),
        x = t(523),
        O = t.n(x),
        _ = t(518),
        S = t(521),
        C = t(576),
        w = t(27),
        I = t.n(w),
        k = t(527),
        N = t(528)
      function isImage(e) {
        return -1 !== I()(e).call(e, '/')
      }
      function rootStyle(e) {
        return Object(k.a)([
          { color: e.color, 'font-size': Object(N.a)(e.size) },
        ])
      }
      var F = t(108),
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
      function ownKeys(e, n) {
        var t = c()(e)
        if (i.a) {
          var r = i()(e)
          n &&
            (r = s()(r).call(r, function (n) {
              return u()(e, n).enumerable
            })),
            t.push.apply(t, r)
        }
        return t
      }
      function _objectSpread(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t,
            r = null != arguments[n] ? arguments[n] : {}
          if (n % 2)
            d()((t = ownKeys(Object(r), !0))).call(t, function (n) {
              y()(e, n, r[n])
            })
          else if (j.a) m()(e, j()(r))
          else {
            var c
            d()((c = ownKeys(Object(r)))).call(c, function (n) {
              p()(e, n, u()(r, n))
            })
          }
        }
        return e
      }
      function Icon(e) {
        var n,
          t,
          r = e.classPrefix,
          c = void 0 === r ? 'van-icon' : r,
          a = e.name,
          i = e.color,
          o = e.size,
          s = e.dot,
          l = e.info,
          u = e.style,
          f = e.className,
          d = O()(e, P)
        return Object(F.jsxs)(
          _.n,
          _objectSpread(
            _objectSpread(
              {
                className:
                  ((n = { classPrefix: c, name: a }),
                  (t = []),
                  null != n.classPrefix && t.push(n.classPrefix),
                  isImage(n.name)
                    ? t.push('van-icon--image')
                    : null != n.classPrefix &&
                      t.push(n.classPrefix + '-' + n.name),
                  t.join(' ') + ' '.concat(f || '')),
                style: S.c([rootStyle({ color: i, size: o }), u]),
              },
              d,
            ),
            {},
            {
              children: [
                (l || 0 === l || s) &&
                  Object(F.jsx)(C.a, {
                    dot: s,
                    info: l,
                    className: 'van-icon__info',
                  }),
                isImage(a) &&
                  Object(F.jsx)(_.f, {
                    src: a,
                    mode: 'aspectFit',
                    className: 'van-icon__image',
                  }),
              ],
            },
          ),
        )
      }
      n.b = Icon
    },
    530: function (e, n, t) {},
    531: function (e, n, t) {},
    532: function (e, n, t) {
      'use strict'
      t.d(n, 'a', function () {
        return u
      })
      var r = t(37),
        c = t(38),
        a = t(65),
        i = t(64),
        o = t(518),
        s = t(63),
        l = (t(533), t(108)),
        u = (function (e) {
          Object(a.a)(Index, e)
          var n = Object(i.a)(Index)
          function Index() {
            return Object(r.a)(this, Index), n.call(this)
          }
          return (
            Object(c.a)(Index, [
              {
                key: 'render',
                value: function render() {
                  var e = this.props,
                    n = e.padding,
                    t = e.title,
                    r = e.card
                  return Object(l.jsxs)(o.n, {
                    className:
                      'custom-class demo-block van-clearfix ' +
                      (n ? 'demo-block--padding' : ''),
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
        })(s.Component)
    },
    533: function (e, n, t) {},
    540: function (e, n, t) {
      'use strict'
      t.d(n, 'g', function () {
        return range
      }),
        t.d(n, 'd', function () {
          return getSystemInfoSync
        }),
        t.d(n, 'a', function () {
          return addUnit
        }),
        t.d(n, 'h', function () {
          return requestAnimationFrame
        }),
        t.d(n, 'f', function () {
          return pickExclude
        }),
        t.d(n, 'c', function () {
          return getRect
        }),
        t.d(n, 'b', function () {
          return getAllRect
        }),
        t.d(n, 'i', function () {
          return toPromise
        })
      var r,
        c = t(139),
        a = t.n(c),
        i = t(22),
        o = t.n(i),
        s = t(15),
        l = t.n(s),
        u = t(5),
        f = t.n(u),
        d = (t(517), t(841)),
        b = (t(844), t(87)),
        j = t(895),
        h = (t(75), t(526))
      t(546)
      function range(e, n, t) {
        return Math.min(Math.max(e, n), t)
      }
      function getSystemInfoSync() {
        return null == r && (r = Object(d.a)()), r
      }
      function addUnit(e) {
        if (Object(h.b)(e))
          return /^-?\d+(\.\d+)?$/.test('' + e) ? b.a.pxTransform(e) : e
      }
      function requestAnimationFrame(e) {
        return 'devtools' === getSystemInfoSync().platform
          ? setTimeout(function () {
              e()
            }, 33.333333333333336)
          : Object(j.a)()
              .selectViewport()
              .boundingClientRect()
              .exec(function () {
                e()
              })
      }
      function pickExclude(e, n) {
        var t
        return Object(h.e)(e)
          ? a()((t = o()(e))).call(
              t,
              function (t, r) {
                return l()(n).call(n, r) || (t[r] = e[r]), t
              },
              {},
            )
          : {}
      }
      function getRect(e, n) {
        return new f.a(function (t) {
          var r = Object(j.a)()
          e && (r = r.in(e)),
            r
              .select(n)
              .boundingClientRect()
              .exec(function () {
                var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : []
                return t(e[0])
              })
        })
      }
      function getAllRect(e, n) {
        return new f.a(function (t) {
          var r = Object(j.a)()
          e && (r = r.in(e)),
            r
              .selectAll(n)
              .boundingClientRect()
              .exec(function () {
                var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : []
                return t(e[0])
              })
        })
      }
      function toPromise(e) {
        return Object(h.f)(e) ? e : f.a.resolve(e)
      }
      t.d(n, 'e', function () {
        return h.b
      })
    },
    541: function (e, n, t) {
      'use strict'
      ;(function (e) {
        t.d(n, 'a', function () {
          return Page
        })
        t(579)
        var r = t(529),
          c = t(518),
          a = t(87),
          i = t(577),
          o = t(75),
          s = t(63),
          l = (t(594), t(108))
        function Page(n) {
          var t = n.title,
            u = n.className,
            f = void 0 === u ? '' : u,
            d = n.children,
            b = a.a.useRouter().path
          return (
            Object(s.useEffect)(
              function () {
                'react' === e.env.LIBRARY_ENV
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
    546: function (e, n, t) {
      'use strict'
      t.d(n, 'a', function () {
        return canIUseModel
      }),
        t.d(n, 'b', function () {
          return canIUseNextTick
        })
      var r,
        c = t(111),
        a = t.n(c),
        i = t(841),
        o = t(842)
      t(843)
      function gte(e) {
        return (
          (function compareVersion(e, n) {
            ;(e = e.split('.')), (n = n.split('.'))
            for (var t = Math.max(e.length, n.length); e.length < t; )
              e.push('0')
            for (; n.length < t; ) n.push('0')
            for (var r = 0; r < t; r++) {
              var c = a()(e[r], 10),
                i = a()(n[r], 10)
              if (c > i) return 1
              if (c < i) return -1
            }
            return 0
          })(
            (function getSystemInfoSync() {
              return null == r && (r = Object(i.a)()), r
            })().SDKVersion,
            e,
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
    561: function (e, n, t) {
      'use strict'
      function isArray(e) {
        return e && '[object Array]' === toString.call(e)
      }
      t.d(n, 'a', function () {
        return isArray
      })
    },
    564: function (e, n, t) {
      'use strict'
      t.d(n, 'a', function () {
        return keys
      })
      var r = t(9),
        c = t.n(r),
        a = t(140),
        i = t.n(a),
        o = new RegExp('{|}|"', 'g')
      function keys(e) {
        var n
        return c()((n = i()(e).replace(o, '').split(','))).call(
          n,
          function (e) {
            return e.split(':')[0]
          },
        )
      }
    },
    576: function (e, n, t) {
      'use strict'
      t.d(n, 'a', function () {
        return Info
      })
      var r = t(22),
        c = t.n(r),
        a = t(520),
        i = t.n(a),
        o = t(30),
        s = t.n(o),
        l = t(519),
        u = t.n(l),
        f = t(26),
        d = t.n(f),
        b = t(169),
        j = t.n(b),
        h = t(109),
        m = t.n(h),
        v = t(52),
        p = t.n(v),
        g = t(522),
        y = t.n(g),
        x = t(523),
        O = t.n(x),
        _ = t(518),
        S = t(521),
        C = t(108),
        w = ['dot', 'info', 'style', 'className']
      function ownKeys(e, n) {
        var t = c()(e)
        if (i.a) {
          var r = i()(e)
          n &&
            (r = s()(r).call(r, function (n) {
              return u()(e, n).enumerable
            })),
            t.push.apply(t, r)
        }
        return t
      }
      function _objectSpread(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t,
            r = null != arguments[n] ? arguments[n] : {}
          if (n % 2)
            d()((t = ownKeys(Object(r), !0))).call(t, function (n) {
              y()(e, n, r[n])
            })
          else if (j.a) m()(e, j()(r))
          else {
            var c
            d()((c = ownKeys(Object(r)))).call(c, function (n) {
              p()(e, n, u()(r, n))
            })
          }
        }
        return e
      }
      function Info(e) {
        var n = e.dot,
          t = e.info,
          r = void 0 === t ? null : t,
          c = e.style,
          a = e.className,
          i = O()(e, w)
        return Object(C.jsx)(C.Fragment, {
          children:
            (r || 0 === r || n) &&
            Object(C.jsx)(
              _.n,
              _objectSpread(
                _objectSpread(
                  {
                    className: 'van-info ' + S.b('info', { dot: n }) + '  ' + a,
                    style: S.c([c]),
                  },
                  i,
                ),
                {},
                { children: n ? '' : r },
              ),
            ),
        })
      }
      n.b = Info
    },
    579: function (e, n, t) {
      'use strict'
      t(525), t(530), t(531)
    },
    580: function (e, n, t) {
      'use strict'
      var r = t(581)
      Object.defineProperty(n, '__esModule', { value: !0 }),
        (n.default = function toArray(e) {
          var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            t = []
          return (
            c.default.Children.forEach(e, function (e) {
              ;(null != e || n.keepEmpty) &&
                (Array.isArray(e)
                  ? (t = t.concat(toArray(e)))
                  : (0, a.isFragment)(e) && e.props
                  ? (t = t.concat(toArray(e.props.children, n)))
                  : t.push(e))
            }),
            t
          )
        })
      var c = r(t(63)),
        a = t(582)
    },
    581: function (e, n) {
      ;(e.exports = function _interopRequireDefault(e) {
        return e && e.__esModule ? e : { default: e }
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports)
    },
    582: function (e, n, t) {
      'use strict'
      e.exports = t(583)
    },
    583: function (e, n, t) {
      'use strict'
      var r = 'function' == typeof Symbol && Symbol.for,
        c = r ? Symbol.for('react.element') : 60103,
        a = r ? Symbol.for('react.portal') : 60106,
        i = r ? Symbol.for('react.fragment') : 60107,
        o = r ? Symbol.for('react.strict_mode') : 60108,
        s = r ? Symbol.for('react.profiler') : 60114,
        l = r ? Symbol.for('react.provider') : 60109,
        u = r ? Symbol.for('react.context') : 60110,
        f = r ? Symbol.for('react.async_mode') : 60111,
        d = r ? Symbol.for('react.concurrent_mode') : 60111,
        b = r ? Symbol.for('react.forward_ref') : 60112,
        j = r ? Symbol.for('react.suspense') : 60113,
        h = r ? Symbol.for('react.suspense_list') : 60120,
        m = r ? Symbol.for('react.memo') : 60115,
        v = r ? Symbol.for('react.lazy') : 60116,
        p = r ? Symbol.for('react.block') : 60121,
        g = r ? Symbol.for('react.fundamental') : 60117,
        y = r ? Symbol.for('react.responder') : 60118,
        x = r ? Symbol.for('react.scope') : 60119
      function z(e) {
        if ('object' == typeof e && null !== e) {
          var n = e.$$typeof
          switch (n) {
            case c:
              switch ((e = e.type)) {
                case f:
                case d:
                case i:
                case s:
                case o:
                case j:
                  return e
                default:
                  switch ((e = e && e.$$typeof)) {
                    case u:
                    case b:
                    case v:
                    case m:
                    case l:
                      return e
                    default:
                      return n
                  }
              }
            case a:
              return n
          }
        }
      }
      function A(e) {
        return z(e) === d
      }
      ;(n.AsyncMode = f),
        (n.ConcurrentMode = d),
        (n.ContextConsumer = u),
        (n.ContextProvider = l),
        (n.Element = c),
        (n.ForwardRef = b),
        (n.Fragment = i),
        (n.Lazy = v),
        (n.Memo = m),
        (n.Portal = a),
        (n.Profiler = s),
        (n.StrictMode = o),
        (n.Suspense = j),
        (n.isAsyncMode = function (e) {
          return A(e) || z(e) === f
        }),
        (n.isConcurrentMode = A),
        (n.isContextConsumer = function (e) {
          return z(e) === u
        }),
        (n.isContextProvider = function (e) {
          return z(e) === l
        }),
        (n.isElement = function (e) {
          return 'object' == typeof e && null !== e && e.$$typeof === c
        }),
        (n.isForwardRef = function (e) {
          return z(e) === b
        }),
        (n.isFragment = function (e) {
          return z(e) === i
        }),
        (n.isLazy = function (e) {
          return z(e) === v
        }),
        (n.isMemo = function (e) {
          return z(e) === m
        }),
        (n.isPortal = function (e) {
          return z(e) === a
        }),
        (n.isProfiler = function (e) {
          return z(e) === s
        }),
        (n.isStrictMode = function (e) {
          return z(e) === o
        }),
        (n.isSuspense = function (e) {
          return z(e) === j
        }),
        (n.isValidElementType = function (e) {
          return (
            'string' == typeof e ||
            'function' == typeof e ||
            e === i ||
            e === d ||
            e === s ||
            e === o ||
            e === j ||
            e === h ||
            ('object' == typeof e &&
              null !== e &&
              (e.$$typeof === v ||
                e.$$typeof === m ||
                e.$$typeof === l ||
                e.$$typeof === u ||
                e.$$typeof === b ||
                e.$$typeof === g ||
                e.$$typeof === y ||
                e.$$typeof === x ||
                e.$$typeof === p))
          )
        }),
        (n.typeOf = z)
    },
    589: function (e, n, t) {
      'use strict'
      t(525), t(530), t(531), t(590)
    },
    590: function (e, n, t) {},
    593: function (e, n, t) {
      'use strict'
      var r = t(22),
        c = t.n(r),
        a = t(520),
        i = t.n(a),
        o = t(30),
        s = t.n(o),
        l = t(519),
        u = t.n(l),
        f = t(26),
        d = t.n(f),
        b = t(169),
        j = t.n(b),
        h = t(109),
        m = t.n(h),
        v = t(52),
        p = t.n(v),
        g = t(522),
        y = t.n(g),
        x = t(524),
        O = t.n(x),
        _ = t(523),
        S = t.n(_),
        C = t(63),
        w = t(518),
        I = t(521),
        k = t(529),
        N = t(528)
      var F = {
        none: 'scaleToFill',
        fill: 'scaleToFill',
        cover: 'aspectFill',
        contain: 'aspectFit',
        widthFix: 'widthFix',
        heightFix: 'heightFix',
        scaleDown: 'aspectFit',
      }
      function mode(e) {
        return F[e]
      }
      var P = t(108),
        $ = [
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
      function ownKeys(e, n) {
        var t = c()(e)
        if (i.a) {
          var r = i()(e)
          n &&
            (r = s()(r).call(r, function (n) {
              return u()(e, n).enumerable
            })),
            t.push.apply(t, r)
        }
        return t
      }
      function _objectSpread(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t,
            r = null != arguments[n] ? arguments[n] : {}
          if (n % 2)
            d()((t = ownKeys(Object(r), !0))).call(t, function (n) {
              y()(e, n, r[n])
            })
          else if (j.a) m()(e, j()(r))
          else {
            var c
            d()((c = ownKeys(Object(r)))).call(c, function (n) {
              p()(e, n, u()(r, n))
            })
          }
        }
        return e
      }
      n.a = function Image(e) {
        var n = e.src,
          t = e.round,
          r = e.width,
          c = e.height,
          a = e.radius,
          i = e.lazyLoad,
          o = e.showMenuByLongpress,
          s = e.fit,
          l = e.showError,
          u = void 0 === l || l,
          f = e.showLoading,
          d = void 0 === f || f,
          b = e.className,
          j = e.style,
          h = e.renderError,
          m = e.renderLoading,
          v = S()(e, $),
          p = Object(C.useState)(),
          g = O()(p, 2),
          y = g[0],
          x = g[1],
          _ = Object(C.useState)(!1),
          F = O()(_, 2),
          T = F[0],
          E = F[1]
        Object(C.useEffect)(
          function () {
            void 0 === y && x(!0), E(!1)
          },
          [y],
        )
        var M,
          K = Object(C.useCallback)(function () {
            x(!1)
          }, []),
          L = Object(C.useCallback)(function () {
            E(!0)
          }, []),
          R = Object(C.useMemo)(
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
        return Object(P.jsxs)(
          w.n,
          _objectSpread(
            _objectSpread(
              {
                style: I.c([
                  ((M = { width: r, height: c, radius: a }),
                  Object(I.c)([
                    {
                      width: Object(N.a)(M.width),
                      height: Object(N.a)(M.height),
                      'border-radius': Object(N.a)(M.radius),
                    },
                    M.radius ? 'overflow: hidden' : null,
                  ])),
                  j,
                ]),
                className: ' ' + I.b('image', { round: t }) + ' ' + b,
                onClick: v.onClick,
              },
              v,
            ),
            {},
            {
              children: [
                !T &&
                  Object(P.jsx)(w.f, {
                    src: n,
                    mode: mode(s || 'none'),
                    lazyLoad: i,
                    className: 'image-class van-image__img',
                    showMenuByLongpress: o,
                    onLoad: K,
                    onError: L,
                    style: R,
                  }),
                y &&
                  d &&
                  Object(P.jsx)(w.n, {
                    className: 'loading-class van-image__loading',
                    children:
                      m ||
                      Object(P.jsx)(k.b, {
                        name: 'photo',
                        className: 'van-image__loading-icon',
                      }),
                  }),
                T &&
                  u &&
                  Object(P.jsx)(w.n, {
                    className: 'error-class van-image__error',
                    children:
                      h ||
                      Object(P.jsx)(k.b, {
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
    594: function (e, n, t) {},
    767: function (e, n, t) {},
    768: function (e, n, t) {},
    769: function (e, n, t) {},
    871: function (e, n, t) {
      'use strict'
      t.r(n),
        t.d(n, 'default', function () {
          return X
        })
      t(589)
      var r = t(593),
        c = (t(525), t(767), t(523)),
        a = t.n(c),
        i = t(524),
        o = t.n(i),
        s = t(522),
        l = t.n(s),
        u = t(30),
        f = t.n(u),
        d = t(9),
        b = t.n(d),
        j = t(22),
        h = t.n(j),
        m = t(520),
        v = t.n(m),
        p = t(519),
        g = t.n(p),
        y = t(26),
        x = t.n(y),
        O = t(169),
        _ = t.n(O),
        S = t(109),
        C = t.n(S),
        w = t(52),
        I = t.n(w),
        k = t(517),
        N = t(63),
        F = t(580),
        P = t.n(F),
        $ = t(518),
        T = t(521),
        E = t(540),
        M = t(108),
        K = [
          'active',
          'activeColor',
          'inactiveColor',
          'border',
          'fixed',
          'safeAreaInsetBottom',
          'zIndex',
          'placeholder',
          'onChange',
          'style',
          'className',
          'children',
        ]
      function ownKeys(e, n) {
        var t = h()(e)
        if (v.a) {
          var r = v()(e)
          n &&
            (r = f()(r).call(r, function (n) {
              return g()(e, n).enumerable
            })),
            t.push.apply(t, r)
        }
        return t
      }
      function _objectSpread(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t,
            r = null != arguments[n] ? arguments[n] : {}
          if (n % 2)
            x()((t = ownKeys(Object(r), !0))).call(t, function (n) {
              l()(e, n, r[n])
            })
          else if (_.a) C()(e, _()(r))
          else {
            var c
            x()((c = ownKeys(Object(r)))).call(c, function (n) {
              I()(e, n, g()(r, n))
            })
          }
        }
        return e
      }
      var L = function Tabbar(e) {
          var n = Object(N.useState)({ height: 50, current: 0 }),
            t = o()(n, 2),
            r = t[0],
            c = t[1],
            i = r.height,
            s = r.current,
            l = e.active,
            u = e.activeColor,
            d = e.inactiveColor,
            j = e.border,
            h = void 0 === j || j,
            m = e.fixed,
            v = void 0 === m || m,
            p = e.safeAreaInsetBottom,
            g = void 0 === p || p,
            y = e.zIndex,
            x = e.placeholder,
            O = e.onChange,
            _ = e.style,
            S = e.className,
            C = e.children,
            w = a()(e, K),
            I = Object(N.useCallback)(
              function (e) {
                c(function (n) {
                  return _objectSpread(_objectSpread({}, n), {}, { current: e })
                }),
                  null == O || O({ detail: e })
              },
              [O],
            ),
            F = (function parseTabList(e) {
              var n, t
              return f()(
                (n = b()((t = P()(e))).call(t, function (e) {
                  return Object(N.isValidElement)(e)
                    ? _objectSpread(
                        _objectSpread(
                          { key: void 0 !== e.key ? String(e.key) : void 0 },
                          e.props,
                        ),
                        {},
                        { node: e },
                      )
                    : null
                })),
              ).call(n, function (e) {
                return e
              })
            })(C),
            L = b()(F).call(F, function (e, n) {
              return Object(N.cloneElement)(e.node, {
                key: n,
                index: n,
                active: s,
                activeColor: u,
                inactiveColor: d,
                onChange: I,
              })
            })
          return (
            Object(N.useEffect)(
              function () {
                c(function (e) {
                  return _objectSpread(_objectSpread({}, e), {}, { current: l })
                })
              },
              [l],
            ),
            Object(N.useEffect)(
              function () {
                v &&
                  x &&
                  Object(k.a)(function () {
                    Object(E.c)(null, '.van-tabbar').then(function (e) {
                      c(function (n) {
                        return _objectSpread(
                          _objectSpread({}, n),
                          {},
                          { height: e.height },
                        )
                      })
                    })
                  })
              },
              [v, x],
            ),
            Object(M.jsxs)($.a, {
              children: [
                Object(M.jsx)(
                  $.n,
                  _objectSpread(
                    _objectSpread(
                      {
                        className:
                          (h ? 'van-hairline--top-bottom' : '') +
                          ' ' +
                          T.b('tabbar', { fixed: v, safe: g }) +
                          ' custom-class' +
                          ' '.concat(S || ''),
                        style: T.c([y ? 'zIndex: ' + y : '', _]),
                      },
                      w,
                    ),
                    {},
                    { children: L },
                  ),
                ),
                v && x && Object(M.jsx)($.n, { style: 'height: ' + i + 'px;' }),
              ],
            })
          )
        },
        R = (t(530), t(531), t(768), t(529)),
        B = t(576),
        U = [
          'icon',
          'name',
          'iconPrefix',
          'dot',
          'info',
          'renderIconActive',
          'renderIcon',
          'index',
          'active',
          'activeColor',
          'inactiveColor',
          'onChange',
          'children',
          'style',
          'className',
          'onClick',
        ]
      function tabbar_item_ownKeys(e, n) {
        var t = h()(e)
        if (v.a) {
          var r = v()(e)
          n &&
            (r = f()(r).call(r, function (n) {
              return g()(e, n).enumerable
            })),
            t.push.apply(t, r)
        }
        return t
      }
      function tabbar_item_objectSpread(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t,
            r = null != arguments[n] ? arguments[n] : {}
          if (n % 2)
            x()((t = tabbar_item_ownKeys(Object(r), !0))).call(t, function (n) {
              l()(e, n, r[n])
            })
          else if (_.a) C()(e, _()(r))
          else {
            var c
            x()((c = tabbar_item_ownKeys(Object(r)))).call(c, function (n) {
              I()(e, n, g()(r, n))
            })
          }
        }
        return e
      }
      var V = function TabbarItem(e) {
          var n = e.icon,
            t = e.name,
            r = e.iconPrefix,
            c = void 0 === r ? 'van-icon' : r,
            i = e.dot,
            o = e.info,
            s = e.renderIconActive,
            l = e.renderIcon,
            u = e.index,
            f = e.active,
            d = e.activeColor,
            b = e.inactiveColor,
            j = e.onChange,
            h = e.children,
            m = e.style,
            v = e.className,
            p = e.onClick,
            g = a()(e, U)
          return j
            ? Object(M.jsxs)(
                $.n,
                tabbar_item_objectSpread(
                  tabbar_item_objectSpread(
                    {
                      className:
                        T.b('tabbar-item', {
                          active: f === (null != t ? t : u),
                        }) +
                        ' custom-class' +
                        ' '.concat(v || ''),
                      style: T.c([
                        { color: f === (null != t ? t : u) ? d : b },
                        m,
                      ]),
                    },
                    g,
                  ),
                  {},
                  {
                    onClick: function _click() {
                      if (j) {
                        var e = null != t ? t : u
                        e !== f && j(e)
                      }
                      null == p || p(null != t ? t : u)
                    },
                    children: [
                      Object(M.jsxs)($.n, {
                        className: 'van-tabbar-item__icon',
                        children: [
                          n
                            ? Object(M.jsx)(R.a, {
                                size: 38,
                                name: n,
                                classPrefix: c,
                                className: 'van-tabbar-item__icon__inner',
                              })
                            : Object(M.jsx)($.a, {
                                children: f === (null != t ? t : u) ? s : l,
                              }),
                          Object(M.jsx)(B.a, {
                            dot: i,
                            info: o,
                            className: 'van-tabbar-item__info',
                          }),
                        ],
                      }),
                      Object(M.jsx)($.n, {
                        className: 'van-tabbar-item__text',
                        children: h,
                      }),
                    ],
                  },
                ),
              )
            : Object(M.jsx)(M.Fragment, {})
        },
        D = t(37),
        q = t(38),
        J = t(171),
        Y = t(65),
        Z = t(64),
        G = t(88),
        H = t(884),
        Q = t(541),
        W = t(532),
        X =
          (t(769),
          (function (e) {
            Object(Y.a)(Index, e)
            var n = Object(Z.a)(Index)
            function Index() {
              var e
              return (
                Object(D.a)(this, Index),
                (e = n.call(this)),
                Object(G.a)(Object(J.a)(e), 'state', {
                  active: 0,
                  active2: 'home',
                  active3: 0,
                  active4: 0,
                  active5: 0,
                  active6: 0,
                  icon: {
                    normal: 'https://img.yzcdn.cn/vant/user-inactive.png',
                    active: 'https://img.yzcdn.cn/vant/user-active.png',
                  },
                }),
                Object(G.a)(Object(J.a)(e), 'onChange', function (n) {
                  var t = n.currentTarget.dataset.key
                  e.setState(Object(G.a)({}, t, n.detail))
                }),
                Object(G.a)(Object(J.a)(e), 'handleChange', function (n) {
                  var t = n.currentTarget.dataset.key
                  e.setState(Object(G.a)({}, t, n.detail)),
                    Object(H.c)({
                      title: '点击标签 '.concat(n.detail + 1),
                      icon: 'none',
                    })
                }),
                e
              )
            }
            return (
              Object(q.a)(Index, [
                {
                  key: 'render',
                  value: function render() {
                    var e = this,
                      n = this.state,
                      t = n.active,
                      c = n.active2,
                      a = n.active3,
                      i = n.active4,
                      o = n.icon,
                      s = n.active5,
                      l = n.active6
                    return Object(M.jsx)(Q.a, {
                      title: 'Tabbar 标签栏',
                      children: Object(M.jsxs)(M.Fragment, {
                        children: [
                          Object(M.jsx)(W.a, {
                            title: '基础用法',
                            children: Object(M.jsxs)(L, {
                              active: t,
                              className: 'tabbar-position',
                              onChange: function onChange(n) {
                                e.onChange({
                                  detail: n.detail,
                                  currentTarget: { dataset: { key: 'active' } },
                                  target: { dataset: { key: 'active' } },
                                })
                              },
                              children: [
                                Object(M.jsx)(V, {
                                  icon: 'home-o',
                                  children: '标签',
                                }),
                                Object(M.jsx)(V, {
                                  icon: 'search',
                                  children: '标签',
                                }),
                                Object(M.jsx)(V, {
                                  icon: 'friends-o',
                                  children: '标签',
                                }),
                                Object(M.jsx)(V, {
                                  icon: 'setting-o',
                                  children: '标签',
                                }),
                              ],
                            }),
                          }),
                          Object(M.jsx)(W.a, {
                            title: '通过名称匹配',
                            children: Object(M.jsxs)(L, {
                              active: c,
                              className: 'tabbar-position',
                              safeAreaInsetBottom: !1,
                              onChange: function onChange(n) {
                                e.onChange({
                                  detail: n.detail,
                                  currentTarget: {
                                    dataset: { key: 'active2' },
                                  },
                                  target: { dataset: { key: 'active2' } },
                                })
                              },
                              children: [
                                Object(M.jsx)(V, {
                                  name: 'home',
                                  icon: 'home-o',
                                  children: '标签',
                                }),
                                Object(M.jsx)(V, {
                                  name: 'search',
                                  icon: 'search',
                                  children: '标签',
                                }),
                                Object(M.jsx)(V, {
                                  name: 'friends',
                                  icon: 'friends-o',
                                  children: '标签',
                                }),
                                Object(M.jsx)(V, {
                                  name: 'setting',
                                  icon: 'setting-o',
                                  children: '标签',
                                }),
                              ],
                            }),
                          }),
                          Object(M.jsx)(W.a, {
                            title: '显示徽标',
                            children: Object(M.jsxs)(L, {
                              active: a,
                              className: 'tabbar-position',
                              safeAreaInsetBottom: !1,
                              onChange: function onChange(n) {
                                e.onChange({
                                  detail: n.detail,
                                  currentTarget: {
                                    dataset: { key: 'active3' },
                                  },
                                  target: { dataset: { key: 'active3' } },
                                })
                              },
                              children: [
                                Object(M.jsx)(V, {
                                  icon: 'home-o',
                                  children: '标签',
                                }),
                                Object(M.jsx)(V, {
                                  icon: 'search',
                                  dot: !0,
                                  children: '标签',
                                }),
                                Object(M.jsx)(V, {
                                  icon: 'friends-o',
                                  info: '5',
                                  children: '标签',
                                }),
                                Object(M.jsx)(V, {
                                  icon: 'setting-o',
                                  info: '20',
                                  children: '标签',
                                }),
                              ],
                            }),
                          }),
                          Object(M.jsx)(W.a, {
                            title: '自定义图标',
                            children: Object(M.jsxs)(L, {
                              active: i,
                              className: 'tabbar-position',
                              safeAreaInsetBottom: !1,
                              onChange: function onChange(n) {
                                e.onChange({
                                  detail: n.detail,
                                  currentTarget: {
                                    dataset: { key: 'active4' },
                                  },
                                  target: { dataset: { key: 'active4' } },
                                })
                              },
                              children: [
                                Object(M.jsx)(V, {
                                  info: '3',
                                  renderIcon: Object(M.jsx)(M.Fragment, {
                                    children: Object(M.jsx)(r.a, {
                                      src: o.normal,
                                      mode: 'aspectFit',
                                      style: 'width: 30px; height: 18px;',
                                    }),
                                  }),
                                  renderIconActive: Object(M.jsx)(M.Fragment, {
                                    children: Object(M.jsx)(r.a, {
                                      src: o.active,
                                      mode: 'aspectFit',
                                      style: 'width: 30px; height: 18px;',
                                    }),
                                  }),
                                  children: '自定义',
                                }),
                                Object(M.jsx)(V, {
                                  icon: 'search',
                                  children: '标签',
                                }),
                                Object(M.jsx)(V, {
                                  icon: 'setting-o',
                                  children: '标签',
                                }),
                              ],
                            }),
                          }),
                          Object(M.jsx)(W.a, {
                            title: '自定义颜色',
                            children: Object(M.jsxs)(L, {
                              active: s,
                              className: 'tabbar-position',
                              activeColor: '#07c160',
                              inactiveColor: '#000',
                              safeAreaInsetBottom: !1,
                              onChange: function onChange(n) {
                                e.onChange({
                                  detail: n.detail,
                                  currentTarget: {
                                    dataset: { key: 'active5' },
                                  },
                                  target: { dataset: { key: 'active5' } },
                                })
                              },
                              children: [
                                Object(M.jsx)(V, {
                                  icon: 'home-o',
                                  children: '标签',
                                }),
                                Object(M.jsx)(V, {
                                  icon: 'search',
                                  children: '标签',
                                }),
                                Object(M.jsx)(V, {
                                  icon: 'friends-o',
                                  children: '标签',
                                }),
                                Object(M.jsx)(V, {
                                  icon: 'setting-o',
                                  children: '标签',
                                }),
                              ],
                            }),
                          }),
                          Object(M.jsx)(W.a, {
                            title: '切换标签事件',
                            children: Object(M.jsxs)(L, {
                              active: l,
                              className: 'tabbar-position',
                              safeAreaInsetBottom: !1,
                              onChange: function onChange(n) {
                                e.handleChange({
                                  detail: n.detail,
                                  currentTarget: {
                                    dataset: { key: 'active6' },
                                  },
                                  target: { dataset: { key: 'active6' } },
                                })
                              },
                              children: [
                                Object(M.jsx)(V, {
                                  icon: 'home-o',
                                  children: '标签1',
                                }),
                                Object(M.jsx)(V, {
                                  icon: 'search',
                                  children: '标签2',
                                }),
                                Object(M.jsx)(V, {
                                  icon: 'friends-o',
                                  children: '标签3',
                                }),
                                Object(M.jsx)(V, {
                                  icon: 'setting-o',
                                  children: '标签4',
                                }),
                              ],
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
          })(N.Component))
    },
  },
])
