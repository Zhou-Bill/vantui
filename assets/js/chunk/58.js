;(window.webpackJsonp = window.webpackJsonp || []).push([
  [58],
  {
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
        a = t.n(r)
      function isFunction(e) {
        return 'function' == typeof e
      }
      function isPlainObject(e) {
        return null !== e && 'object' === a()(e) && !Array.isArray(e)
      }
      function isPromise(e) {
        return isPlainObject(e) && isFunction(e.then) && isFunction(e.catch)
      }
      function isDef(e) {
        return null != e
      }
      function isObj(e) {
        var n = a()(e)
        return null !== e && ('object' === n || 'function' === n)
      }
      function isBoolean(e) {
        return 'boolean' == typeof e
      }
      var c = /\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i,
        o = /\.(mp4|mpg|mpeg|dat|asf|avi|rm|rmvb|mov|wmv|flv|mkv)/i
      function isImageUrl(e) {
        return c.test(e)
      }
      function isVideoUrl(e) {
        return o.test(e)
      }
    },
    532: function (e, n, t) {
      'use strict'
      t.d(n, 'a', function () {
        return u
      })
      var r = t(37),
        a = t(38),
        c = t(65),
        o = t(64),
        i = t(518),
        l = t(63),
        s = (t(533), t(108)),
        u = (function (e) {
          Object(c.a)(Index, e)
          var n = Object(o.a)(Index)
          function Index() {
            return Object(r.a)(this, Index), n.call(this)
          }
          return (
            Object(a.a)(Index, [
              {
                key: 'render',
                value: function render() {
                  var e = this.props,
                    n = e.padding,
                    t = e.title,
                    r = e.card
                  return Object(s.jsxs)(i.n, {
                    className:
                      'custom-class demo-block van-clearfix ' +
                      (n ? 'demo-block--padding' : ''),
                    children: [
                      t &&
                        Object(s.jsx)(i.n, {
                          className: 'demo-block__title',
                          children: t,
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
    533: function (e, n, t) {},
    537: function (e, n, t) {},
    538: function (e, n, t) {
      'use strict'
      t.d(n, 'a', function () {
        return Loading
      })
      var r = t(522),
        a = t.n(r),
        c = t(524),
        o = t.n(c),
        i = t(523),
        l = t.n(i),
        s = t(534),
        u = t.n(s),
        f = t(9),
        d = t.n(f),
        b = t(22),
        v = t.n(b),
        j = t(520),
        p = t.n(j),
        y = t(30),
        m = t.n(y),
        g = t(519),
        h = t.n(g),
        O = t(26),
        x = t.n(O),
        C = t(169),
        w = t.n(C),
        _ = t(109),
        k = t.n(_),
        S = t(52),
        N = t.n(S),
        T = t(518),
        I = t(63),
        A = t(521),
        B = t(528)
      function textStyle(e) {
        return Object(A.c)({ 'font-size': Object(B.a)(e.textSize) })
      }
      var z = t(108),
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
      function ownKeys(e, n) {
        var t = v()(e)
        if (p.a) {
          var r = p()(e)
          n &&
            (r = m()(r).call(r, function (n) {
              return h()(e, n).enumerable
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
              a()(e, n, r[n])
            })
          else if (w.a) k()(e, w()(r))
          else {
            var c
            x()((c = ownKeys(Object(r)))).call(c, function (n) {
              N()(e, n, h()(r, n))
            })
          }
        }
        return e
      }
      function Loading(e) {
        var n,
          t = e.vertical,
          r = e.type,
          a = void 0 === r ? 'circular' : r,
          c = e.color,
          i = e.size,
          s = e.textSize,
          f = e.className,
          b = e.children,
          v = e.style,
          j = l()(e, E),
          p = Object(I.useState)(u()({ length: 12 })),
          y = o()(p, 1)[0]
        return Object(z.jsxs)(
          T.n,
          _objectSpread(
            _objectSpread(
              {
                className: ' ' + A.b('loading', { vertical: t }) + ' ' + f,
                style: A.c([v]),
              },
              j,
            ),
            {},
            {
              children: [
                Object(z.jsx)(T.n, {
                  className: 'van-loading__spinner van-loading__spinner--' + a,
                  style:
                    ((n = { color: c, size: i }),
                    Object(A.c)({
                      color: n.color,
                      width: Object(B.a)(n.size),
                      height: Object(B.a)(n.size),
                    })),
                  children:
                    'spinner' === a &&
                    Object(z.jsx)(T.a, {
                      children: d()(y).call(y, function (e, n) {
                        return Object(z.jsx)(
                          T.n,
                          { className: 'van-loading__dot' },
                          'van-loading__dot_'.concat(n),
                        )
                      }),
                    }),
                }),
                Object(z.jsx)(T.n, {
                  className: 'van-loading__text',
                  style: textStyle({ textSize: s }),
                  children: b,
                }),
              ],
            },
          ),
        )
      }
      n.b = Loading
    },
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
        a = t(139),
        c = t.n(a),
        o = t(22),
        i = t.n(o),
        l = t(15),
        s = t.n(l),
        u = t(5),
        f = t.n(u),
        d = (t(517), t(841)),
        b = (t(844), t(87)),
        v = t(895),
        j = (t(75), t(526))
      t(546)
      function range(e, n, t) {
        return Math.min(Math.max(e, n), t)
      }
      function getSystemInfoSync() {
        return null == r && (r = Object(d.a)()), r
      }
      function addUnit(e) {
        if (Object(j.b)(e))
          return /^-?\d+(\.\d+)?$/.test('' + e) ? b.a.pxTransform(e) : e
      }
      function requestAnimationFrame(e) {
        return 'devtools' === getSystemInfoSync().platform
          ? setTimeout(function () {
              e()
            }, 33.333333333333336)
          : Object(v.a)()
              .selectViewport()
              .boundingClientRect()
              .exec(function () {
                e()
              })
      }
      function pickExclude(e, n) {
        var t
        return Object(j.e)(e)
          ? c()((t = i()(e))).call(
              t,
              function (t, r) {
                return s()(n).call(n, r) || (t[r] = e[r]), t
              },
              {},
            )
          : {}
      }
      function getRect(e, n) {
        return new f.a(function (t) {
          var r = Object(v.a)()
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
          var r = Object(v.a)()
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
        return Object(j.f)(e) ? e : f.a.resolve(e)
      }
      t.d(n, 'e', function () {
        return j.b
      })
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
        a = t(111),
        c = t.n(a),
        o = t(841),
        i = t(842)
      t(843)
      function gte(e) {
        return (
          (function compareVersion(e, n) {
            ;(e = e.split('.')), (n = n.split('.'))
            for (var t = Math.max(e.length, n.length); e.length < t; )
              e.push('0')
            for (; n.length < t; ) n.push('0')
            for (var r = 0; r < t; r++) {
              var a = c()(e[r], 10),
                o = c()(n[r], 10)
              if (a > o) return 1
              if (a < o) return -1
            }
            return 0
          })(
            (function getSystemInfoSync() {
              return null == r && (r = Object(o.a)()), r
            })().SDKVersion,
            e,
          ) >= 0
        )
      }
      function canIUseModel() {
        return gte('2.9.3')
      }
      function canIUseNextTick() {
        return Object(i.a)('nextTick')
      }
    },
    560: function (e, n, t) {
      'use strict'
      t.d(n, 'a', function () {
        return Button
      })
      var r = t(22),
        a = t.n(r),
        c = t(520),
        o = t.n(c),
        i = t(30),
        l = t.n(i),
        s = t(519),
        u = t.n(s),
        f = t(26),
        d = t.n(f),
        b = t(169),
        v = t.n(b),
        j = t(109),
        p = t.n(j),
        y = t(52),
        m = t.n(y),
        g = t(522),
        h = t.n(g),
        O = t(523),
        x = t.n(O),
        C = t(87),
        w = t(518),
        _ = t(521),
        k = t(529),
        S = t(538),
        N = t(27),
        T = t.n(N),
        I = t(527)
      function rootStyle(e) {
        var n
        if (!e.color) return ''
        var t = {
          color: e.plain ? e.color : '#fff',
          background: e.plain ? null : e.color,
        }
        return (
          -1 !== T()((n = e.color)).call(n, 'gradient')
            ? (t.border = 0)
            : (t['border-color'] = e.color),
          Object(I.a)([t])
        )
      }
      var A = t(108),
        B = [
          'type',
          'size',
          'block',
          'round',
          'plain',
          'square',
          'loading',
          'disabled',
          'hairline',
          'color',
          'loadingSize',
          'loadingType',
          'loadingText',
          'icon',
          'classPrefix',
          'onClick',
          'children',
          'style',
          'className',
        ]
      function ownKeys(e, n) {
        var t = a()(e)
        if (o.a) {
          var r = o()(e)
          n &&
            (r = l()(r).call(r, function (n) {
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
              h()(e, n, r[n])
            })
          else if (v.a) p()(e, v()(r))
          else {
            var a
            d()((a = ownKeys(Object(r)))).call(a, function (n) {
              m()(e, n, u()(r, n))
            })
          }
        }
        return e
      }
      var z = !1,
        E = 10
      if (!z)
        var L = setInterval(function () {
          if (--E > 0)
            for (
              var e = document.getElementsByTagName('style') || [],
                n = e.length - 1;
              n >= 0;
              n--
            ) {
              var t = e[n],
                r = t.innerHTML
              if (r && /^taro-button-core{/.test(r)) {
                t.remove(), (z = !0), L && clearInterval(L)
                break
              }
            }
          else L && clearInterval(L)
        }, 200)
      function Button(e) {
        var n,
          t = e.type,
          r = void 0 === t ? 'default' : t,
          a = e.size,
          c = void 0 === a ? 'normal' : a,
          o = e.block,
          i = e.round,
          l = e.plain,
          s = e.square,
          u = e.loading,
          f = e.disabled,
          d = e.hairline,
          b = e.color,
          v = e.loadingSize,
          j = void 0 === v ? C.a.pxTransform(40) : v,
          p = e.loadingType,
          y = void 0 === p ? 'circular' : p,
          m = e.loadingText,
          g = e.icon,
          h = e.classPrefix,
          O = void 0 === h ? 'van-icon' : h,
          N = e.onClick,
          T = e.children,
          I = e.style,
          z = e.className,
          E = x()(e, B)
        return Object(A.jsx)(
          w.b,
          _objectSpread(
            _objectSpread(
              {
                className:
                  ' ' +
                  _.b('button', [
                    r,
                    c,
                    {
                      block: o,
                      round: i,
                      plain: l,
                      square: s,
                      loading: u,
                      disabled: f,
                      hairline: d,
                      unclickable: f || u,
                    },
                  ]) +
                  ' ' +
                  (d ? 'van-hairline--surround' : '') +
                  ' '.concat(z || ''),
                hoverClass: 'van-button--active hover-class',
                style: _.c([rootStyle({ plain: l, color: b }), I]),
                onClick: f || u ? void 0 : N,
              },
              E,
            ),
            {},
            {
              children: u
                ? Object(A.jsxs)(w.n, {
                    style: 'display: flex',
                    children: [
                      Object(A.jsx)(S.a, {
                        className: 'loading-class',
                        size: j,
                        type: y,
                        color:
                          ((n = { type: r, color: b, plain: l }),
                          n.plain
                            ? n.color
                              ? n.color
                              : '#c9c9c9'
                            : 'default' === n.type
                            ? '#c9c9c9'
                            : '#fff'),
                      }),
                      m &&
                        Object(A.jsx)(w.n, {
                          className: 'van-button__loading-text',
                          children: m,
                        }),
                    ],
                  })
                : Object(A.jsxs)(w.a, {
                    children: [
                      g &&
                        Object(A.jsx)(k.a, {
                          size: '1.2em',
                          name: g,
                          classPrefix: O,
                          className: 'van-button__icon',
                          style: 'line-height: inherit;',
                        }),
                      Object(A.jsx)(w.n, {
                        className: 'van-button__text',
                        children: T,
                      }),
                    ],
                  }),
            },
          ),
        )
      }
      n.b = Button
    },
    562: function (e, n, t) {
      'use strict'
      t.d(n, 'a', function () {
        return useTransition
      })
      var r = t(524),
        a = t.n(r),
        c = t(6),
        o = t.n(c),
        i = t(15),
        l = t.n(i),
        s = t(63),
        u = t(526)
      function useTransition(e) {
        var n = e.show,
          t = void 0 !== n && n,
          r = e.duration,
          c = void 0 === r ? 300 : r,
          i = e.name,
          f = void 0 === i ? 'fade' : i,
          d = e.onBeforeEnter,
          b = e.onBeforeLeave,
          v = e.onAfterEnter,
          j = e.onAfterLeave,
          p = e.onEnter,
          y = e.onLeave,
          m = e.enterClass,
          g = e.enterActiveClass,
          h = e.enterToClass,
          O = e.leaveClass,
          x = e.leaveActiveClass,
          C = e.leaveToClass,
          w = Object(s.useRef)(!1),
          _ = Object(s.useRef)(''),
          k = Object(s.useState)(!1),
          S = a()(k, 2),
          N = S[0],
          T = S[1],
          I = Object(s.useState)(!1),
          A = a()(I, 2),
          B = A[0],
          z = A[1],
          E = Object(s.useState)(0),
          L = a()(E, 2),
          K = L[0],
          F = L[1],
          D = Object(s.useState)(''),
          P = a()(D, 2),
          U = P[0],
          q = P[1],
          R = Object(s.useMemo)(
            function () {
              var e,
                n,
                t = (function getClassNames(e) {
                  var n, t, r, a
                  return {
                    enter: o()((n = 'van-'.concat(e, '-enter van-'))).call(
                      n,
                      e,
                      '-enter-active enter-class enter-active-class',
                    ),
                    'enter-to': o()(
                      (t = 'van-'.concat(e, '-enter-to van-')),
                    ).call(
                      t,
                      e,
                      '-enter-active enter-to-class enter-active-class',
                    ),
                    leave: o()((r = 'van-'.concat(e, '-leave van-'))).call(
                      r,
                      e,
                      '-leave-active leave-class leave-active-class',
                    ),
                    'leave-to': o()(
                      (a = 'van-'.concat(e, '-leave-to van-')),
                    ).call(
                      a,
                      e,
                      '-leave-active leave-to-class leave-active-class',
                    ),
                  }
                })(f)
              f ||
                ((t.enter += ' '.concat(null != m ? m : '')),
                (t['enter-to'] += o()(
                  (e = ''.concat(null != h ? h : '', ' ')),
                ).call(e, null != g ? g : '', ' ')),
                (t.leave += '  '.concat(null != O ? O : '')),
                (t['leave-to'] += o()(
                  (n = ' '.concat(null != C ? C : '', ' ')),
                ).call(n, null != x ? x : '')))
              return t
            },
            [g, m, h, x, O, C, f],
          ),
          M = Object(s.useCallback)(
            function () {
              w.current ||
                ((w.current = !0),
                'enter' === _.current ? null == v || v() : null == j || j(),
                !t && N && T(!1))
            },
            [N, v, j, t],
          ),
          H = Object(s.useCallback)(
            function () {
              var e = Object(u.d)(c) ? c.enter : c
              ;(_.current = 'enter'),
                null == d || d(),
                requestAnimationFrame(function () {
                  'enter' === _.current &&
                    (null == p || p(),
                    z(!0),
                    T(!0),
                    q(R.enter),
                    F(e),
                    requestAnimationFrame(function () {
                      'enter' === _.current &&
                        ((w.current = !1),
                        setTimeout(function () {
                          return M()
                        }, e),
                        q(R['enter-to']))
                    }))
                })
            },
            [c, d, p, R, M],
          ),
          V = Object(s.useCallback)(
            function () {
              if (N) {
                var e = Object(u.d)(c) ? c.leave : c
                ;(_.current = 'leave'),
                  null == b || b(),
                  requestAnimationFrame(function () {
                    'leave' === _.current &&
                      (null == y || y(),
                      q(R.leave),
                      F(e),
                      requestAnimationFrame(function () {
                        'leave' === _.current &&
                          ((w.current = !1),
                          setTimeout(function () {
                            return M()
                          }, e),
                          q(R['leave-to']))
                      }))
                  })
              }
            },
            [R, N, c, b, y, M],
          )
        return (
          Object(s.useEffect)(
            function () {
              !t || (U && l()(U).call(U, R['enter-to'])) || H(), t || V()
            },
            [t],
          ),
          {
            display: N,
            inited: B,
            currentDuration: K,
            classes: U,
            onTransitionEnd: M,
          }
        )
      }
    },
    563: function (e, n, t) {},
    568: function (e, n, t) {
      'use strict'
      var r = t(22),
        a = t.n(r),
        c = t(520),
        o = t.n(c),
        i = t(30),
        l = t.n(i),
        s = t(519),
        u = t.n(s),
        f = t(26),
        d = t.n(f),
        b = t(169),
        v = t.n(b),
        j = t(109),
        p = t.n(j),
        y = t(52),
        m = t.n(y),
        g = t(522),
        h = t.n(g),
        O = t(523),
        x = t.n(O),
        C = t(518),
        w = t(521)
      var _ = t(562),
        k = t(108),
        S = [
          'onBeforeEnter',
          'onBeforeLeave',
          'onAfterEnter',
          'onAfterLeave',
          'onEnter',
          'onLeave',
          'duration',
          'name',
          'show',
          'children',
          'style',
          'className',
          'enterClass',
          'enterActiveClass',
          'enterToClass',
          'leaveClass',
          'leaveActiveClass',
          'leaveToClass',
        ]
      function ownKeys(e, n) {
        var t = a()(e)
        if (o.a) {
          var r = o()(e)
          n &&
            (r = l()(r).call(r, function (n) {
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
              h()(e, n, r[n])
            })
          else if (v.a) p()(e, v()(r))
          else {
            var a
            d()((a = ownKeys(Object(r)))).call(a, function (n) {
              m()(e, n, u()(r, n))
            })
          }
        }
        return e
      }
      n.a = function Transition(e) {
        var n,
          t = e.onBeforeEnter,
          r = e.onBeforeLeave,
          a = e.onAfterEnter,
          c = e.onAfterLeave,
          o = e.onEnter,
          i = e.onLeave,
          l = e.duration,
          s = e.name,
          u = e.show,
          f = e.children,
          d = e.style,
          b = e.className,
          v = e.enterClass,
          j = e.enterActiveClass,
          p = e.enterToClass,
          y = e.leaveClass,
          m = e.leaveActiveClass,
          g = e.leaveToClass,
          h = x()(e, S),
          O = Object(_.a)({
            show: u,
            duration: l,
            name: s,
            enterClass: v,
            enterActiveClass: j,
            enterToClass: p,
            leaveClass: y,
            leaveActiveClass: m,
            leaveToClass: g,
            onBeforeEnter: t,
            onBeforeLeave: r,
            onAfterEnter: a,
            onAfterLeave: c,
            onEnter: o,
            onLeave: i,
          }),
          N = O.currentDuration,
          T = O.classes,
          I = O.display
        return Object(k.jsx)(k.Fragment, {
          children: Object(k.jsx)(
            C.n,
            _objectSpread(
              _objectSpread(
                {
                  className: 'van-transition ' + T + ' '.concat(b || ''),
                  style: w.c([
                    ((n = { currentDuration: N, display: I }),
                    w.c([
                      {
                        '-webkit-transition-duration': n.currentDuration + 'ms',
                        'transition-duration': n.currentDuration + 'ms',
                      },
                      n.display ? null : 'display: none',
                      n.style,
                    ])),
                    d,
                  ]),
                },
                h,
              ),
              {},
              { catchMove: !0, children: f },
            ),
          ),
        })
      }
    },
    569: function (e, n, t) {},
    574: function (e, n, t) {
      'use strict'
      t(525), t(537), t(530), t(531), t(563)
    },
    660: function (e, n, t) {
      'use strict'
      t(525), t(569), t(661)
    },
    661: function (e, n, t) {},
    674: function (e, n, t) {
      'use strict'
      var r = t(22),
        a = t.n(r),
        c = t(520),
        o = t.n(c),
        i = t(30),
        l = t.n(i),
        s = t(519),
        u = t.n(s),
        f = t(26),
        d = t.n(f),
        b = t(169),
        v = t.n(b),
        j = t(109),
        p = t.n(j),
        y = t(52),
        m = t.n(y),
        g = t(522),
        h = t.n(g),
        O = t(523),
        x = t.n(O),
        C = t(524),
        w = t.n(C),
        _ = t(0),
        k = t.n(_),
        S = t(517),
        N = t(63),
        T = t(518),
        I = t(521),
        A = t(568),
        B = t(540),
        z = t(528)
      function notifyStyle(e) {
        return Object(I.c)({ background: e.background, color: e.color })
      }
      var E = t(6),
        L = t.n(E),
        K = new (t(87).a.Events)()
      function trigger(e) {
        for (
          var n, t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), a = 1;
          a < t;
          a++
        )
          r[a - 1] = arguments[a]
        return K.trigger.apply(K, L()((n = [e])).call(n, r))
      }
      function on(e, n) {
        return K.on(e, n)
      }
      function off(e, n) {
        return K.off(e, n)
      }
      var F = function Notify(e) {
        trigger('notify_show', e)
      }
      F.clear = function (e) {
        trigger('notify_clear', e)
      }
      var D = F,
        P = t(108),
        U = ['style', 'className', 'zIndex']
      function ownKeys(e, n) {
        var t = a()(e)
        if (o.a) {
          var r = o()(e)
          n &&
            (r = l()(r).call(r, function (n) {
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
              h()(e, n, r[n])
            })
          else if (v.a) p()(e, v()(r))
          else {
            var a
            d()((a = ownKeys(Object(r)))).call(a, function (n) {
              m()(e, n, u()(r, n))
            })
          }
        }
        return e
      }
      var q = {
          selector: '#van-notify',
          message: '',
          background: '',
          type: 'danger',
          color: '#fff',
          duration: 3e3,
          safeAreaInsetTop: !1,
          top: 0,
          id: 'van-notify',
        },
        R = null
      function es_notify_Notify(e) {
        var n = Object(N.useState)({
            selector: '#van-notify',
            show: !1,
            statusBarHeight: void 0,
            message: '',
            background: '',
            type: 'danger',
            color: '#fff',
            duration: 3e3,
            safeAreaInsetTop: !1,
            top: 0,
            id: 'van-notify',
            onClick: function onClick(e) {},
            onOpened: function onOpened() {},
            onClose: function onClose() {},
          }),
          t = w()(n, 2),
          r = t[0],
          a = t[1],
          c = e.style,
          o = e.className,
          i = e.zIndex,
          l = x()(e, U)
        Object(N.useEffect)(
          function () {
            a(function (n) {
              return _objectSpread(
                _objectSpread({}, n),
                {},
                { id: e.id || 'van-notify' },
              )
            })
          },
          [e],
        ),
          Object(N.useEffect)(function () {
            var e = Object(B.d)().statusBarHeight
            a(function (n) {
              return _objectSpread(
                _objectSpread({}, n),
                {},
                { statusBarHeight: e },
              )
            })
          }, []),
          Object(N.useEffect)(function () {
            return (
              on('notify_show', function (e) {
                var n = k()(
                  k()({}, q),
                  (function parseOptions(e) {
                    return null == e
                      ? {}
                      : 'string' == typeof e
                      ? { message: e }
                      : e
                  })(e),
                )
                ;(n.id === r.id || (!n.id && 'van-notify' === r.id)) &&
                  (a(function (e) {
                    return _objectSpread(_objectSpread({}, e), n)
                  }),
                  f(e))
              }),
              on('notify_clear', function (e) {
                u(e)
              }),
              function () {
                off('notify_show'), off('notify_clear')
              }
            )
          }, [])
        var s,
          u = Object(N.useCallback)(function (e) {
            clearTimeout(R),
              a(function (e) {
                return _objectSpread(_objectSpread({}, e), {}, { show: !1 })
              }),
              Object(S.a)(function () {
                var n
                null == e ||
                  null === (n = e.onClose) ||
                  void 0 === n ||
                  n.call(e)
              })
          }, []),
          f = Object(N.useCallback)(
            function (e) {
              clearTimeout(R),
                a(function (e) {
                  return _objectSpread(_objectSpread({}, e), {}, { show: !0 })
                }),
                Object(S.a)(function () {
                  var n
                  null == e ||
                    null === (n = e.onOpened) ||
                    void 0 === n ||
                    n.call(e)
                }),
                r.duration > 0 &&
                  r.duration !== 1 / 0 &&
                  (R = setTimeout(function () {
                    trigger('notify_clear', e)
                  }, r.duration))
            },
            [r.duration],
          ),
          d = Object(N.useCallback)(
            function (e) {
              var n
              null === (n = r.onClick) || void 0 === n || n.call(r, e)
            },
            [r],
          )
        return Object(P.jsx)(
          A.a,
          _objectSpread(
            _objectSpread(
              {
                name: 'slide-down',
                show: r.show,
                className: 'van-notify__container '.concat(o),
                style: I.c([
                  ((s = i ? { zIndex: i, top: r.top } : { top: r.top }),
                  Object(I.c)({
                    'z-index': s.zIndex,
                    top: Object(z.a)(s.top),
                  })),
                  c,
                ]),
                onClick: d,
              },
              l,
            ),
            {},
            {
              children: Object(P.jsxs)(T.n, {
                className: 'van-notify van-notify--' + r.type,
                style: notifyStyle({
                  background: r.background,
                  color: r.color,
                }),
                children: [
                  r.safeAreaInsetTop &&
                    Object(P.jsx)(T.n, {
                      style: 'height: ' + r.statusBarHeight + 'px',
                    }),
                  Object(P.jsx)(T.k, { children: r.message }),
                ],
              }),
            },
          ),
        )
      }
      ;(es_notify_Notify.show = D), (es_notify_Notify.clear = D.clear)
      n.a = es_notify_Notify
    },
    756: function (e, n, t) {},
    849: function (e, n, t) {
      'use strict'
      t.r(n),
        t.d(n, 'default', function () {
          return p
        })
      t(574)
      var r = t(560),
        a = (t(660), t(674)),
        c = t(37),
        o = t(38),
        i = t(171),
        l = t(65),
        s = t(64),
        u = t(88),
        f = t(63),
        d = t(518),
        b = t(541),
        v = t(532),
        j = (t(756), t(108)),
        p = (function (e) {
          Object(l.a)(Index, e)
          var n = Object(s.a)(Index)
          function Index() {
            var e
            return (
              Object(c.a)(this, Index),
              (e = n.call(this)),
              Object(u.a)(Object(i.a)(e), 'showNotify', function () {
                a.a.show('通知内容')
              }),
              Object(u.a)(Object(i.a)(e), 'showCustomColor', function () {
                a.a.show({
                  message: '自定义颜色',
                  color: '#ad0000',
                  background: '#ffe1e1',
                })
              }),
              Object(u.a)(Object(i.a)(e), 'showCustomDuration', function () {
                a.a.show({ duration: 1e3, message: '自定义时长' })
              }),
              Object(u.a)(Object(i.a)(e), 'showNotifyByType', function (e) {
                var n = e.currentTarget.dataset.type
                a.a.show({ type: n, message: '通知内容' })
              }),
              Object(u.a)(Object(i.a)(e), 'showSafe', function () {
                a.a.show({ message: '通知内容', safeAreaInsetTop: !0 })
              }),
              e
            )
          }
          return (
            Object(o.a)(Index, [
              {
                key: 'render',
                value: function render() {
                  var e = this
                  return Object(j.jsx)(b.a, {
                    title: 'Notify 消息通知',
                    children: Object(j.jsxs)(j.Fragment, {
                      children: [
                        Object(j.jsx)(v.a, {
                          padding: !0,
                          title: '基础用法',
                          children: Object(j.jsx)(r.b, {
                            type: 'danger',
                            onClick: this.showNotify,
                            children: '基础用法',
                          }),
                        }),
                        Object(j.jsxs)(v.a, {
                          padding: !0,
                          title: '通知类型',
                          children: [
                            Object(j.jsxs)(d.n, {
                              className: 'demo-margin-bottom',
                              children: [
                                Object(j.jsx)(r.b, {
                                  className: 'demo-margin-right',
                                  type: 'info',
                                  onClick: function onClick(n) {
                                    e.showNotifyByType({
                                      detail: n.detail,
                                      currentTarget: {
                                        dataset: { type: 'primary' },
                                      },
                                      target: { dataset: { type: 'primary' } },
                                    })
                                  },
                                  children: '主要通知',
                                }),
                                Object(j.jsx)(r.b, {
                                  className: 'demo-margin-right',
                                  type: 'primary',
                                  onClick: function onClick(n) {
                                    e.showNotifyByType({
                                      detail: n.detail,
                                      currentTarget: {
                                        dataset: { type: 'success' },
                                      },
                                      target: { dataset: { type: 'success' } },
                                    })
                                  },
                                  children: '成功通知',
                                }),
                              ],
                            }),
                            Object(j.jsxs)(d.n, {
                              className: 'demo-margin-bottom',
                              children: [
                                Object(j.jsx)(r.b, {
                                  className: 'demo-margin-right',
                                  type: 'danger',
                                  onClick: function onClick(n) {
                                    e.showNotifyByType({
                                      detail: n.detail,
                                      currentTarget: {
                                        dataset: { type: 'danger' },
                                      },
                                      target: { dataset: { type: 'danger' } },
                                    })
                                  },
                                  children: '危险通知',
                                }),
                                Object(j.jsx)(r.b, {
                                  type: 'warning',
                                  onClick: function onClick(n) {
                                    e.showNotifyByType({
                                      detail: n.detail,
                                      currentTarget: {
                                        dataset: { type: 'warning' },
                                      },
                                      target: { dataset: { type: 'warning' } },
                                    })
                                  },
                                  children: '警告通知',
                                }),
                              ],
                            }),
                          ],
                        }),
                        Object(j.jsxs)(v.a, {
                          padding: !0,
                          title: '自定义通知',
                          children: [
                            Object(j.jsx)(r.b, {
                              type: 'primary',
                              className: 'demo-margin-right',
                              onClick: this.showCustomColor,
                              children: '自定义颜色',
                            }),
                            Object(j.jsx)(r.b, {
                              type: 'primary',
                              onClick: this.showCustomDuration,
                              children: '自定义时长',
                            }),
                          ],
                        }),
                        Object(j.jsx)(v.a, {
                          padding: !0,
                          title: '插入状态栏高度',
                          children: Object(j.jsx)(r.b, {
                            type: 'primary',
                            className: 'demo-margin-right',
                            onClick: this.showSafe,
                            children: '插入状态栏高度',
                          }),
                        }),
                        Object(j.jsx)(a.a, { id: 'van-notify' }),
                      ],
                    }),
                  })
                },
              },
            ]),
            Index
          )
        })(f.Component)
    },
  },
])
