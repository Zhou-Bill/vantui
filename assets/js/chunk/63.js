;(window.webpackJsonp = window.webpackJsonp || []).push([
  [63],
  {
    524: function (e, t, n) {
      var r = n(565),
        a = n(566),
        c = n(558),
        i = n(567)
      ;(e.exports = function _slicedToArray(e, t) {
        return r(e) || a(e, t) || c(e, t) || i()
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0)
    },
    537: function (e, t, n) {},
    538: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return Loading
      })
      var r = n(522),
        a = n.n(r),
        c = n(524),
        i = n.n(c),
        s = n(523),
        o = n.n(s),
        l = n(534),
        d = n.n(l),
        u = n(9),
        j = n.n(u),
        h = n(22),
        b = n.n(h),
        x = n(520),
        f = n.n(x),
        p = n(30),
        O = n.n(p),
        g = n(519),
        v = n.n(g),
        m = n(26),
        w = n.n(m),
        y = n(169),
        _ = n.n(y),
        N = n(109),
        S = n.n(N),
        L = n(52),
        F = n.n(L),
        z = n(518),
        I = n(63),
        M = n(521),
        k = n(528)
      function textStyle(e) {
        return Object(M.c)({ 'font-size': Object(k.a)(e.textSize) })
      }
      var E = n(108),
        A = [
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
        var n = b()(e)
        if (f.a) {
          var r = f()(e)
          t &&
            (r = O()(r).call(r, function (t) {
              return v()(e, t).enumerable
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
            w()((n = ownKeys(Object(r), !0))).call(n, function (t) {
              a()(e, t, r[t])
            })
          else if (_.a) S()(e, _()(r))
          else {
            var c
            w()((c = ownKeys(Object(r)))).call(c, function (t) {
              F()(e, t, v()(r, t))
            })
          }
        }
        return e
      }
      function Loading(e) {
        var t,
          n = e.vertical,
          r = e.type,
          a = void 0 === r ? 'circular' : r,
          c = e.color,
          s = e.size,
          l = e.textSize,
          u = e.className,
          h = e.children,
          b = e.style,
          x = o()(e, A),
          f = Object(I.useState)(d()({ length: 12 })),
          p = i()(f, 1)[0]
        return Object(E.jsxs)(
          z.n,
          _objectSpread(
            _objectSpread(
              {
                className: ' ' + M.b('loading', { vertical: n }) + ' ' + u,
                style: M.c([b]),
              },
              x,
            ),
            {},
            {
              children: [
                Object(E.jsx)(z.n, {
                  className: 'van-loading__spinner van-loading__spinner--' + a,
                  style:
                    ((t = { color: c, size: s }),
                    Object(M.c)({
                      color: t.color,
                      width: Object(k.a)(t.size),
                      height: Object(k.a)(t.size),
                    })),
                  children:
                    'spinner' === a &&
                    Object(E.jsx)(z.a, {
                      children: j()(p).call(p, function (e, t) {
                        return Object(E.jsx)(
                          z.n,
                          { className: 'van-loading__dot' },
                          'van-loading__dot_'.concat(t),
                        )
                      }),
                    }),
                }),
                Object(E.jsx)(z.n, {
                  className: 'van-loading__text',
                  style: textStyle({ textSize: l }),
                  children: h,
                }),
              ],
            },
          ),
        )
      }
      t.b = Loading
    },
    558: function (e, t, n) {
      var r = n(173),
        a = n(114),
        c = n(559)
      ;(e.exports = function _unsupportedIterableToArray(e, t) {
        var n
        if (e) {
          if ('string' == typeof e) return c(e, t)
          var i = r((n = Object.prototype.toString.call(e))).call(n, 8, -1)
          return (
            'Object' === i && e.constructor && (i = e.constructor.name),
            'Map' === i || 'Set' === i
              ? a(e)
              : 'Arguments' === i ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)
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
          var c,
            i,
            s = [],
            o = !0,
            l = !1
          try {
            for (
              n = n.call(e);
              !(o = (c = n.next()).done) &&
              (s.push(c.value), !t || s.length !== t);
              o = !0
            );
          } catch (e) {
            ;(l = !0), (i = e)
          } finally {
            try {
              o || null == n.return || n.return()
            } finally {
              if (l) throw i
            }
          }
          return s
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
    589: function (e, t, n) {
      'use strict'
      n(525), n(530), n(531), n(590)
    },
    590: function (e, t, n) {},
    593: function (e, t, n) {
      'use strict'
      var r = n(22),
        a = n.n(r),
        c = n(520),
        i = n.n(c),
        s = n(30),
        o = n.n(s),
        l = n(519),
        d = n.n(l),
        u = n(26),
        j = n.n(u),
        h = n(169),
        b = n.n(h),
        x = n(109),
        f = n.n(x),
        p = n(52),
        O = n.n(p),
        g = n(522),
        v = n.n(g),
        m = n(524),
        w = n.n(m),
        y = n(523),
        _ = n.n(y),
        N = n(63),
        S = n(518),
        L = n(521),
        F = n(529),
        z = n(528)
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
      var M = n(108),
        k = [
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
        if (i.a) {
          var r = i()(e)
          t &&
            (r = o()(r).call(r, function (t) {
              return d()(e, t).enumerable
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
            j()((n = ownKeys(Object(r), !0))).call(n, function (t) {
              v()(e, t, r[t])
            })
          else if (b.a) f()(e, b()(r))
          else {
            var a
            j()((a = ownKeys(Object(r)))).call(a, function (t) {
              O()(e, t, d()(r, t))
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
          c = e.radius,
          i = e.lazyLoad,
          s = e.showMenuByLongpress,
          o = e.fit,
          l = e.showError,
          d = void 0 === l || l,
          u = e.showLoading,
          j = void 0 === u || u,
          h = e.className,
          b = e.style,
          x = e.renderError,
          f = e.renderLoading,
          p = _()(e, k),
          O = Object(N.useState)(),
          g = w()(O, 2),
          v = g[0],
          m = g[1],
          y = Object(N.useState)(!1),
          I = w()(y, 2),
          E = I[0],
          A = I[1]
        Object(N.useEffect)(
          function () {
            void 0 === v && m(!0), A(!1)
          },
          [v],
        )
        var C,
          T = Object(N.useCallback)(function () {
            m(!1)
          }, []),
          K = Object(N.useCallback)(function () {
            A(!0)
          }, []),
          B = Object(N.useMemo)(
            function () {
              var e = {}
              return (
                ('heightFix' !== o && 'widthFix' !== o) ||
                  (e = {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }),
                e
              )
            },
            [o],
          )
        return Object(M.jsxs)(
          S.n,
          _objectSpread(
            _objectSpread(
              {
                style: L.c([
                  ((C = { width: r, height: a, radius: c }),
                  Object(L.c)([
                    {
                      width: Object(z.a)(C.width),
                      height: Object(z.a)(C.height),
                      'border-radius': Object(z.a)(C.radius),
                    },
                    C.radius ? 'overflow: hidden' : null,
                  ])),
                  b,
                ]),
                className: ' ' + L.b('image', { round: n }) + ' ' + h,
                onClick: p.onClick,
              },
              p,
            ),
            {},
            {
              children: [
                !E &&
                  Object(M.jsx)(S.f, {
                    src: t,
                    mode: mode(o || 'none'),
                    lazyLoad: i,
                    className: 'image-class van-image__img',
                    showMenuByLongpress: s,
                    onLoad: T,
                    onError: K,
                    style: B,
                  }),
                v &&
                  j &&
                  Object(M.jsx)(S.n, {
                    className: 'loading-class van-image__loading',
                    children:
                      f ||
                      Object(M.jsx)(F.b, {
                        name: 'photo',
                        className: 'van-image__loading-icon',
                      }),
                  }),
                E &&
                  d &&
                  Object(M.jsx)(S.n, {
                    className: 'error-class van-image__error',
                    children:
                      x ||
                      Object(M.jsx)(F.b, {
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
    659: function (e, t, n) {
      'use strict'
      n(525), n(537)
    },
    749: function (e, t, n) {},
    847: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'default', function () {
          return v
        })
      n(659)
      var r = n(538),
        a = (n(678), n(679)),
        c = (n(717), n(718)),
        i = (n(589), n(593)),
        s = n(37),
        o = n(38),
        l = n(171),
        d = n(65),
        u = n(64),
        j = n(88),
        h = n(9),
        b = n.n(h),
        x = n(518),
        f = n(63),
        p = n(541),
        O = n(532),
        g = (n(749), n(108)),
        v = (function (e) {
          Object(d.a)(Index, e)
          var t = Object(u.a)(Index)
          function Index() {
            var e
            return (
              Object(s.a)(this, Index),
              (e = t.call(this)),
              Object(j.a)(Object(l.a)(e), 'state', {
                fits: [
                  'contain',
                  'cover',
                  'fill',
                  'none',
                  'scaleDown',
                  'widthFix',
                  'heightFix',
                ],
                src: 'https://img.yzcdn.cn/vant/cat.jpeg',
              }),
              e
            )
          }
          return (
            Object(o.a)(Index, [
              {
                key: 'render',
                value: function render() {
                  var e = this.state,
                    t = e.src,
                    n = e.fits
                  return Object(g.jsx)(p.a, {
                    title: 'Image 图片',
                    children: Object(g.jsxs)(g.Fragment, {
                      children: [
                        Object(g.jsx)(O.a, {
                          title: '基础用法',
                          padding: !0,
                          children: Object(g.jsx)(c.a, {
                            children: Object(g.jsx)(i.a, {
                              width: '100',
                              height: '100',
                              src: t,
                            }),
                          }),
                        }),
                        Object(g.jsx)(O.a, {
                          title: '填充模式',
                          padding: !0,
                          children: Object(g.jsx)(c.a, {
                            gutter: '20',
                            children: b()(n).call(n, function (e) {
                              return Object(g.jsxs)(
                                a.a,
                                {
                                  span: '8',
                                  children: [
                                    Object(g.jsx)(i.a, {
                                      fit: e,
                                      width: '100%',
                                      height: '27vw',
                                      src: t,
                                    }),
                                    Object(g.jsx)(x.n, {
                                      className: 'text',
                                      children: e,
                                    }),
                                  ],
                                },
                                e.fit,
                              )
                            }),
                          }),
                        }),
                        Object(g.jsx)(O.a, {
                          title: '圆形图片',
                          padding: !0,
                          children: Object(g.jsx)(c.a, {
                            gutter: '20',
                            children: b()(n).call(n, function (e) {
                              return Object(g.jsxs)(
                                a.a,
                                {
                                  span: '8',
                                  children: [
                                    Object(g.jsx)(i.a, {
                                      round: !0,
                                      fit: e,
                                      width: '100%',
                                      height: '27vw',
                                      src: t,
                                    }),
                                    Object(g.jsx)(x.n, {
                                      className: 'text',
                                      children: e,
                                    }),
                                  ],
                                },
                                e.fit,
                              )
                            }),
                          }),
                        }),
                        Object(g.jsx)(O.a, {
                          title: '加载中提示',
                          padding: !0,
                          children: Object(g.jsxs)(c.a, {
                            gutter: '20',
                            children: [
                              Object(g.jsxs)(a.a, {
                                span: '8',
                                children: [
                                  Object(g.jsx)(i.a, {
                                    width: '100%',
                                    height: '27vw',
                                  }),
                                  Object(g.jsx)(x.n, {
                                    className: 'text',
                                    children: '默认提示',
                                  }),
                                ],
                              }),
                              Object(g.jsxs)(a.a, {
                                span: '8',
                                children: [
                                  Object(g.jsx)(i.a, {
                                    width: '100%',
                                    height: '27vw',
                                    renderLoading: Object(g.jsx)(g.Fragment, {
                                      children: Object(g.jsx)(r.b, {
                                        type: 'spinner',
                                        size: '20',
                                        vertical: !0,
                                      }),
                                    }),
                                  }),
                                  Object(g.jsx)(x.n, {
                                    className: 'text',
                                    children: '自定义提示',
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        Object(g.jsx)(O.a, {
                          title: '加载失败提示',
                          padding: !0,
                          children: Object(g.jsxs)(c.a, {
                            gutter: '20',
                            children: [
                              Object(g.jsxs)(a.a, {
                                span: '8',
                                children: [
                                  Object(g.jsx)(i.a, {
                                    width: '100%',
                                    height: '27vw',
                                    src: 'x',
                                  }),
                                  Object(g.jsx)(x.n, {
                                    className: 'text',
                                    children: '默认提示',
                                  }),
                                ],
                              }),
                              Object(g.jsxs)(a.a, {
                                span: '8',
                                children: [
                                  Object(g.jsx)(i.a, {
                                    width: '100%',
                                    height: '27vw',
                                    src: 'x',
                                    renderError: Object(g.jsx)(g.Fragment, {
                                      children: Object(g.jsx)(x.k, {
                                        children: '加载失败',
                                      }),
                                    }),
                                  }),
                                  Object(g.jsx)(x.n, {
                                    className: 'text',
                                    children: '自定义提示',
                                  }),
                                ],
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
        })(f.Component)
    },
  },
])
