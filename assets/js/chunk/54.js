;(window.webpackJsonp = window.webpackJsonp || []).push([
  [54, 0],
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
        i = t(9),
        a = t.n(i),
        o = t(26),
        u = t.n(o),
        s = t(561),
        l = t(564)
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
                else if (s.a(e))
                  u()(e).call(e, function (e) {
                    traversing(n, e)
                  })
                else if ('object' === c()(e)) {
                  var t
                  u()((t = l.a(e))).call(t, function (t) {
                    e[t] && n.push(t)
                  })
                }
            })(t, e),
            (function join(n, e) {
              return (
                (n = 'van-' + n),
                (e = a()(e).call(e, function (e) {
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
      var i = /\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i,
        a = /\.(mp4|mpg|mpeg|dat|asf|avi|rm|rmvb|mov|wmv|flv|mkv)/i
      function isImageUrl(n) {
        return i.test(n)
      }
      function isVideoUrl(n) {
        return a.test(n)
      }
    },
    527: function (n, e, t) {
      'use strict'
      t.d(e, 'a', function () {
        return style
      })
      var r = t(9),
        c = t.n(r),
        i = t(30),
        a = t.n(i),
        o = (t(0), t(89), t(561)),
        u = t(564)
      function style(n) {
        var e, t, r
        return o.a(n)
          ? c()(
              (e = a()(n).call(n, function (n) {
                return null != n && '' !== n
              })),
            )
              .call(e, function (n) {
                return style(n)
              })
              .join(';')
          : '[object Object]' === toString.call(n)
          ? c()(
              (t = a()((r = u.a(n))).call(r, function (e) {
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
        i = t(520),
        a = t.n(i),
        o = t(30),
        u = t.n(o),
        s = t(519),
        l = t.n(s),
        f = t(26),
        d = t.n(f),
        b = t(169),
        j = t.n(b),
        v = t(109),
        h = t.n(v),
        m = t(52),
        p = t.n(m),
        x = t(522),
        g = t.n(x),
        O = t(523),
        y = t.n(O),
        _ = t(518),
        I = t(521),
        N = t(576),
        k = t(27),
        w = t.n(k),
        S = t(527),
        T = t(528)
      function isImage(n) {
        return -1 !== w()(n).call(n, '/')
      }
      function rootStyle(n) {
        return Object(S.a)([
          { color: n.color, 'font-size': Object(T.a)(n.size) },
        ])
      }
      var A = t(108),
        C = [
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
        if (a.a) {
          var r = a()(n)
          e &&
            (r = u()(r).call(r, function (e) {
              return l()(n, e).enumerable
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
              g()(n, e, r[e])
            })
          else if (j.a) h()(n, j()(r))
          else {
            var c
            d()((c = ownKeys(Object(r)))).call(c, function (e) {
              p()(n, e, l()(r, e))
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
          i = n.name,
          a = n.color,
          o = n.size,
          u = n.dot,
          s = n.info,
          l = n.style,
          f = n.className,
          d = y()(n, C)
        return Object(A.jsxs)(
          _.n,
          _objectSpread(
            _objectSpread(
              {
                className:
                  ((e = { classPrefix: c, name: i }),
                  (t = []),
                  null != e.classPrefix && t.push(e.classPrefix),
                  isImage(e.name)
                    ? t.push('van-icon--image')
                    : null != e.classPrefix &&
                      t.push(e.classPrefix + '-' + e.name),
                  t.join(' ') + ' '.concat(f || '')),
                style: I.c([rootStyle({ color: a, size: o }), l]),
              },
              d,
            ),
            {},
            {
              children: [
                (s || 0 === s || u) &&
                  Object(A.jsx)(N.a, {
                    dot: u,
                    info: s,
                    className: 'van-icon__info',
                  }),
                isImage(i) &&
                  Object(A.jsx)(_.f, {
                    src: i,
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
        return l
      })
      var r = t(37),
        c = t(38),
        i = t(65),
        a = t(64),
        o = t(518),
        u = t(63),
        s = (t(533), t(108)),
        l = (function (n) {
          Object(i.a)(Index, n)
          var e = Object(a.a)(Index)
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
                  return Object(s.jsxs)(o.n, {
                    className:
                      'custom-class demo-block van-clearfix ' +
                      (e ? 'demo-block--padding' : ''),
                    children: [
                      t &&
                        Object(s.jsx)(o.n, {
                          className: 'demo-block__title',
                          children: t,
                        }),
                      r
                        ? Object(s.jsx)(o.n, {
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
        i = t.n(c),
        a = t(22),
        o = t.n(a),
        u = t(15),
        s = t.n(u),
        l = t(5),
        f = t.n(l),
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
          ? i()((t = o()(n))).call(
              t,
              function (t, r) {
                return s()(e).call(e, r) || (t[r] = n[r]), t
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
          i = t(87),
          a = t(577),
          o = t(75),
          u = t(63),
          s = (t(594), t(108))
        function Page(e) {
          var t = e.title,
            l = e.className,
            f = void 0 === l ? '' : l,
            d = e.children,
            b = i.a.useRouter().path
          return (
            Object(u.useEffect)(
              function () {
                'react' === n.env.LIBRARY_ENV
                  ? (document.body.scrollTop =
                      document.documentElement.scrollTop =
                        0)
                  : Object(a.a)({ scrollTop: 0 })
              },
              [b],
            ),
            i.a.useShareAppMessage(function () {
              return { title: 'AntM 组件库演示', path: b }
            }),
            Object(s.jsxs)(c.n, {
              className: 'demo-page '.concat(f),
              children: [
                Object(s.jsxs)(c.n, {
                  className: 'demo-nav',
                  children: [
                    Object(s.jsx)(r.b, {
                      name: 'arrow-left',
                      className: 'demo-nav__back',
                      onClick: function onClick() {
                        return Object(o.d)()
                      },
                    }),
                    Object(s.jsxs)(c.n, {
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
        i = t.n(c),
        a = t(841),
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
              var c = i()(n[r], 10),
                a = i()(e[r], 10)
              if (c > a) return 1
              if (c < a) return -1
            }
            return 0
          })(
            (function getSystemInfoSync() {
              return null == r && (r = Object(a.a)()), r
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
        i = t(140),
        a = t.n(i),
        o = new RegExp('{|}|"', 'g')
      function keys(n) {
        var e
        return c()((e = a()(n).replace(o, '').split(','))).call(
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
        i = t(520),
        a = t.n(i),
        o = t(30),
        u = t.n(o),
        s = t(519),
        l = t.n(s),
        f = t(26),
        d = t.n(f),
        b = t(169),
        j = t.n(b),
        v = t(109),
        h = t.n(v),
        m = t(52),
        p = t.n(m),
        x = t(522),
        g = t.n(x),
        O = t(523),
        y = t.n(O),
        _ = t(518),
        I = t(521),
        N = t(108),
        k = ['dot', 'info', 'style', 'className']
      function ownKeys(n, e) {
        var t = c()(n)
        if (a.a) {
          var r = a()(n)
          e &&
            (r = u()(r).call(r, function (e) {
              return l()(n, e).enumerable
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
              g()(n, e, r[e])
            })
          else if (j.a) h()(n, j()(r))
          else {
            var c
            d()((c = ownKeys(Object(r)))).call(c, function (e) {
              p()(n, e, l()(r, e))
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
          i = n.className,
          a = y()(n, k)
        return Object(N.jsx)(N.Fragment, {
          children:
            (r || 0 === r || e) &&
            Object(N.jsx)(
              _.n,
              _objectSpread(
                _objectSpread(
                  {
                    className: 'van-info ' + I.b('info', { dot: e }) + '  ' + i,
                    style: I.c([c]),
                  },
                  a,
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
    751: function (n, e, t) {},
    752: function (n, e, t) {},
    878: function (n, e, t) {
      'use strict'
      t.r(e),
        t.d(e, 'default', function () {
          return D
        })
      t(579)
      var r = t(529),
        c = (t(525), t(530), t(531), t(751), t(22)),
        i = t.n(c),
        a = t(520),
        o = t.n(a),
        u = t(30),
        s = t.n(u),
        l = t(519),
        f = t.n(l),
        d = t(26),
        b = t.n(d),
        j = t(169),
        v = t.n(j),
        h = t(109),
        m = t.n(h),
        p = t(52),
        x = t.n(p),
        g = t(522),
        O = t.n(g),
        y = t(523),
        _ = t.n(y),
        I = t(524),
        N = t.n(I),
        k = t(63),
        w = t(518),
        S = t(521),
        T = t(540),
        A = t(527)
      var C = t(108),
        R = [
          'fixed',
          'placeholder',
          'border',
          'zIndex',
          'safeAreaInsetTop',
          'leftArrow',
          'leftText',
          'title',
          'rightText',
          'renderTitle',
          'renderLeft',
          'renderRight',
          'onClickLeft',
          'onClickRight',
          'style',
          'className',
        ]
      function ownKeys(n, e) {
        var t = i()(n)
        if (o.a) {
          var r = o()(n)
          e &&
            (r = s()(r).call(r, function (e) {
              return f()(n, e).enumerable
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
            b()((t = ownKeys(Object(r), !0))).call(t, function (e) {
              O()(n, e, r[e])
            })
          else if (v.a) m()(n, v()(r))
          else {
            var c
            b()((c = ownKeys(Object(r)))).call(c, function (e) {
              x()(n, e, f()(r, e))
            })
          }
        }
        return n
      }
      var P = function NavBar(n) {
          var e,
            t,
            c = Object(k.useState)(46),
            i = N()(c, 2),
            a = i[0],
            o = i[1],
            u = Object(k.useState)(22),
            s = N()(u, 2),
            l = s[0],
            f = s[1],
            d = n.fixed,
            b = n.placeholder,
            j = n.border,
            v = void 0 === j || j,
            h = n.zIndex,
            m = n.safeAreaInsetTop,
            p = void 0 === m || m,
            x = n.leftArrow,
            g = n.leftText,
            O = n.title,
            y = n.rightText,
            I = n.renderTitle,
            P = n.renderLeft,
            z = n.renderRight,
            U = n.onClickLeft,
            K = n.onClickRight,
            E = n.style,
            F = n.className,
            L = _()(n, R),
            B = Object(k.useCallback)(
              function () {
                d &&
                  b &&
                  Object(T.c)(null, '.van-nav-bar').then(function (n) {
                    n && 'height' in n && o(n.height || 68)
                  })
              },
              [d, b],
            )
          return (
            Object(k.useEffect)(function () {
              var n = Object(T.d)().statusBarHeight,
                e = void 0 === n ? 22 : n
              isNaN(e) && (e = 22), o(46 + e), f(e)
            }, []),
            Object(k.useEffect)(
              function () {
                B()
              },
              [B],
            ),
            Object(C.jsxs)(w.a, {
              children: [
                d && b && Object(C.jsx)(w.n, { style: 'height: ' + a + 'px;' }),
                Object(C.jsx)(
                  w.n,
                  _objectSpread(
                    _objectSpread(
                      {
                        className:
                          S.b('nav-bar', { fixed: d }) +
                          '  ' +
                          (v ? 'van-hairline--bottom' : '') +
                          ' '.concat(F || ''),
                        style: S.c([
                          ((e = {
                            zIndex: h,
                            statusBarHeight: l,
                            safeAreaInsetTop: p,
                            fromTop: 0,
                            height: a,
                          }),
                          (t = {
                            'padding-top': e.safeAreaInsetTop
                              ? e.statusBarHeight + 'px'
                              : e.fromTop + 'px',
                            height: e.height + 'px',
                          }),
                          e.zIndex && (t['z-index'] = e.zIndex),
                          Object(A.a)(t) + '; ' + E),
                        ]),
                      },
                      L,
                    ),
                    {},
                    {
                      children: Object(C.jsxs)(w.n, {
                        className: 'van-nav-bar__content',
                        children: [
                          Object(C.jsx)(w.n, {
                            className: 'van-nav-bar__left',
                            onClick: U,
                            children:
                              x || g
                                ? Object(C.jsxs)(w.a, {
                                    children: [
                                      x &&
                                        Object(C.jsx)(r.a, {
                                          size: 64,
                                          name: 'arrow-left',
                                          className: 'van-nav-bar__arrow',
                                        }),
                                      g &&
                                        Object(C.jsx)(w.n, {
                                          className: 'van-nav-bar__text',
                                          hoverClass:
                                            'van-nav-bar__text--hover',
                                          hoverStayTime: 70,
                                          children: g,
                                        }),
                                    ],
                                  })
                                : P,
                          }),
                          Object(C.jsx)(w.n, {
                            className:
                              'van-nav-bar__title van-nav-bar__title-h5  title-class van-ellipsis',
                            children: O
                              ? Object(C.jsx)(w.a, { children: O })
                              : I,
                          }),
                          Object(C.jsx)(w.n, {
                            className: 'van-nav-bar__right',
                            onClick: K,
                            children: y
                              ? Object(C.jsx)(w.n, {
                                  className: 'van-nav-bar__text',
                                  hoverClass: 'van-nav-bar__text--hover',
                                  hoverStayTime: 70,
                                  children: y,
                                })
                              : z,
                          }),
                        ],
                      }),
                    },
                  ),
                ),
              ],
            })
          )
        },
        z = t(37),
        U = t(38),
        K = t(171),
        E = t(65),
        F = t(64),
        L = t(88),
        B = t(884),
        M = t(541),
        V = t(532),
        D =
          (t(752),
          (function (n) {
            Object(E.a)(Index, n)
            var e = Object(F.a)(Index)
            function Index() {
              var n
              return (
                Object(z.a)(this, Index),
                (n = e.call(this)),
                Object(L.a)(Object(K.a)(n), 'onClickLeft', function () {
                  Object(B.c)({ title: '点击返回', icon: 'none' })
                }),
                Object(L.a)(Object(K.a)(n), 'onClickRight', function () {
                  Object(B.c)({ title: '点击按钮', icon: 'none' })
                }),
                n
              )
            }
            return (
              Object(U.a)(Index, [
                {
                  key: 'render',
                  value: function render() {
                    return Object(C.jsx)(M.a, {
                      title: 'NavBar 导航栏',
                      children: Object(C.jsxs)(C.Fragment, {
                        children: [
                          Object(C.jsx)(V.a, {
                            title: '基础用法',
                            children: Object(C.jsx)(P, {
                              title: '标题',
                              rightText: '按钮',
                              leftArrow: !0,
                              onClickLeft: this.onClickLeft,
                              onClickRight: this.onClickRight,
                              safeAreaInsetTop: !1,
                            }),
                          }),
                          Object(C.jsx)(V.a, {
                            title: '高级用法',
                            children: Object(C.jsx)(P, {
                              title: '标题',
                              leftText: '返回',
                              leftArrow: !0,
                              renderRight: Object(C.jsx)(C.Fragment, {
                                children: Object(C.jsx)(r.b, {
                                  name: 'search',
                                  className: 'icon',
                                  size: '36',
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
          })(k.Component))
    },
  },
])
