;(window.webpackJsonp = window.webpackJsonp || []).push([
  [62],
  {
    532: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return d
      })
      var i = n(37),
        c = n(38),
        a = n(65),
        l = n(64),
        s = n(518),
        r = n(63),
        o = (n(533), n(108)),
        d = (function (e) {
          Object(a.a)(Index, e)
          var t = Object(l.a)(Index)
          function Index() {
            return Object(i.a)(this, Index), t.call(this)
          }
          return (
            Object(c.a)(Index, [
              {
                key: 'render',
                value: function render() {
                  var e = this.props,
                    t = e.padding,
                    n = e.title,
                    i = e.card
                  return Object(o.jsxs)(s.n, {
                    className:
                      'custom-class demo-block van-clearfix ' +
                      (t ? 'demo-block--padding' : ''),
                    children: [
                      n &&
                        Object(o.jsx)(s.n, {
                          className: 'demo-block__title',
                          children: n,
                        }),
                      i
                        ? Object(o.jsx)(s.n, {
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
        })(r.Component)
    },
    533: function (e, t, n) {},
    589: function (e, t, n) {
      'use strict'
      n(525), n(530), n(531), n(590)
    },
    590: function (e, t, n) {},
    593: function (e, t, n) {
      'use strict'
      var i = n(22),
        c = n.n(i),
        a = n(520),
        l = n.n(a),
        s = n(30),
        r = n.n(s),
        o = n(519),
        d = n.n(o),
        u = n(26),
        b = n.n(u),
        j = n(169),
        v = n.n(j),
        h = n(109),
        m = n.n(h),
        f = n(52),
        x = n.n(f),
        O = n(522),
        p = n.n(O),
        g = n(524),
        I = n.n(g),
        C = n(523),
        k = n.n(C),
        y = n(63),
        N = n(518),
        _ = n(521),
        w = n(529),
        A = n(528)
      var S = {
        none: 'scaleToFill',
        fill: 'scaleToFill',
        cover: 'aspectFill',
        contain: 'aspectFit',
        widthFix: 'widthFix',
        heightFix: 'heightFix',
        scaleDown: 'aspectFit',
      }
      function mode(e) {
        return S[e]
      }
      var M = n(108),
        F = [
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
        var n = c()(e)
        if (l.a) {
          var i = l()(e)
          t &&
            (i = r()(i).call(i, function (t) {
              return d()(e, t).enumerable
            })),
            n.push.apply(n, i)
        }
        return n
      }
      function _objectSpread(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n,
            i = null != arguments[t] ? arguments[t] : {}
          if (t % 2)
            b()((n = ownKeys(Object(i), !0))).call(n, function (t) {
              p()(e, t, i[t])
            })
          else if (v.a) m()(e, v()(i))
          else {
            var c
            b()((c = ownKeys(Object(i)))).call(c, function (t) {
              x()(e, t, d()(i, t))
            })
          }
        }
        return e
      }
      t.a = function Image(e) {
        var t = e.src,
          n = e.round,
          i = e.width,
          c = e.height,
          a = e.radius,
          l = e.lazyLoad,
          s = e.showMenuByLongpress,
          r = e.fit,
          o = e.showError,
          d = void 0 === o || o,
          u = e.showLoading,
          b = void 0 === u || u,
          j = e.className,
          v = e.style,
          h = e.renderError,
          m = e.renderLoading,
          f = k()(e, F),
          x = Object(y.useState)(),
          O = I()(x, 2),
          p = O[0],
          g = O[1],
          C = Object(y.useState)(!1),
          S = I()(C, 2),
          K = S[0],
          L = S[1]
        Object(y.useEffect)(
          function () {
            void 0 === p && g(!0), L(!1)
          },
          [p],
        )
        var E,
          T = Object(y.useCallback)(function () {
            g(!1)
          }, []),
          z = Object(y.useCallback)(function () {
            L(!0)
          }, []),
          B = Object(y.useMemo)(
            function () {
              var e = {}
              return (
                ('heightFix' !== r && 'widthFix' !== r) ||
                  (e = {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }),
                e
              )
            },
            [r],
          )
        return Object(M.jsxs)(
          N.n,
          _objectSpread(
            _objectSpread(
              {
                style: _.c([
                  ((E = { width: i, height: c, radius: a }),
                  Object(_.c)([
                    {
                      width: Object(A.a)(E.width),
                      height: Object(A.a)(E.height),
                      'border-radius': Object(A.a)(E.radius),
                    },
                    E.radius ? 'overflow: hidden' : null,
                  ])),
                  v,
                ]),
                className: ' ' + _.b('image', { round: n }) + ' ' + j,
                onClick: f.onClick,
              },
              f,
            ),
            {},
            {
              children: [
                !K &&
                  Object(M.jsx)(N.f, {
                    src: t,
                    mode: mode(r || 'none'),
                    lazyLoad: l,
                    className: 'image-class van-image__img',
                    showMenuByLongpress: s,
                    onLoad: T,
                    onError: z,
                    style: B,
                  }),
                p &&
                  b &&
                  Object(M.jsx)(N.n, {
                    className: 'loading-class van-image__loading',
                    children:
                      m ||
                      Object(M.jsx)(w.b, {
                        name: 'photo',
                        className: 'van-image__loading-icon',
                      }),
                  }),
                K &&
                  d &&
                  Object(M.jsx)(N.n, {
                    className: 'error-class van-image__error',
                    children:
                      h ||
                      Object(M.jsx)(w.b, {
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
    694: function (e, t, n) {},
    695: function (e, t, n) {
      'use strict'
      var i = n(522),
        c = n.n(i),
        a = n(523),
        l = n.n(a),
        s = n(5),
        r = n.n(s),
        o = n(26),
        d = n.n(o),
        u = n(22),
        b = n.n(u),
        j = n(520),
        v = n.n(j),
        h = n(30),
        m = n.n(h),
        f = n(519),
        x = n.n(f),
        O = n(169),
        p = n.n(O),
        g = n(109),
        I = n.n(g),
        C = n(52),
        k = n.n(C),
        y = n(518),
        N = n(63),
        _ = n(521),
        w = n(108),
        A = ['activeKey', 'onChange', 'className', 'children', 'style']
      function ownKeys(e, t) {
        var n = b()(e)
        if (v.a) {
          var i = v()(e)
          t &&
            (i = m()(i).call(i, function (t) {
              return x()(e, t).enumerable
            })),
            n.push.apply(n, i)
        }
        return n
      }
      function _objectSpread(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n,
            i = null != arguments[t] ? arguments[t] : {}
          if (t % 2)
            d()((n = ownKeys(Object(i), !0))).call(n, function (t) {
              c()(e, t, i[t])
            })
          else if (p.a) I()(e, p()(i))
          else {
            var a
            d()((a = ownKeys(Object(i)))).call(a, function (t) {
              k()(e, t, x()(i, t))
            })
          }
        }
        return e
      }
      t.a = function Sidebar(e) {
        var t = e.activeKey,
          n = e.onChange,
          i = e.className,
          c = e.children,
          a = e.style,
          s = l()(e, A),
          o = Object(N.useRef)([]),
          u = Object(N.useCallback)(function (e) {
            var t = o.current
            return t && t.length
              ? (d()(t).call(t, function (e) {
                  e.setActive(!1)
                }),
                t[e] && t[e].setActive(!0),
                r.a.resolve())
              : r.a.resolve()
          }, [])
        Object(N.useEffect)(
          function () {
            u(t)
          },
          [u, t],
        )
        var b = Object(N.useCallback)(function (e, t) {
            o.current[e] = t
          }, []),
          j = Object(N.useMemo)(
            function () {
              var e = []
              return (
                c &&
                  Array.isArray(c) &&
                  d()(c).call(c, function (t, i) {
                    e.push(
                      Object(N.cloneElement)(t, {
                        key: i,
                        setChildren: b,
                        index: i,
                        setAction: u,
                        onChange: n,
                      }),
                    )
                  }),
                e
              )
            },
            [c, n, u, b],
          )
        return Object(w.jsx)(
          y.n,
          _objectSpread(
            _objectSpread(
              { style: _.c([a]), className: 'van-sidebar  '.concat(i) },
              s,
            ),
            {},
            { children: j },
          ),
        )
      }
    },
    696: function (e, t, n) {},
    697: function (e, t, n) {
      'use strict'
      var i = n(22),
        c = n.n(i),
        a = n(520),
        l = n.n(a),
        s = n(30),
        r = n.n(s),
        o = n(519),
        d = n.n(o),
        u = n(26),
        b = n.n(u),
        j = n(169),
        v = n.n(j),
        h = n(109),
        m = n.n(h),
        f = n(52),
        x = n.n(f),
        O = n(522),
        p = n.n(O),
        g = n(524),
        I = n.n(g),
        C = n(523),
        k = n.n(C),
        y = n(518),
        N = n(63),
        _ = n(521),
        w = n(576),
        A = n(108),
        S = [
          'dot',
          'badge',
          'index',
          'renderTitle',
          'setChildren',
          'setAction',
          'onClick',
          'onChange',
          'info',
          'title',
          'disabled',
          'className',
          'style',
        ]
      function ownKeys(e, t) {
        var n = c()(e)
        if (l.a) {
          var i = l()(e)
          t &&
            (i = r()(i).call(i, function (t) {
              return d()(e, t).enumerable
            })),
            n.push.apply(n, i)
        }
        return n
      }
      function _objectSpread(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n,
            i = null != arguments[t] ? arguments[t] : {}
          if (t % 2)
            b()((n = ownKeys(Object(i), !0))).call(n, function (t) {
              p()(e, t, i[t])
            })
          else if (v.a) m()(e, v()(i))
          else {
            var c
            b()((c = ownKeys(Object(i)))).call(c, function (t) {
              x()(e, t, d()(i, t))
            })
          }
        }
        return e
      }
      t.a = function SidebarItem(e) {
        var t = e.dot,
          n = e.badge,
          i = e.index,
          c = e.renderTitle,
          a = e.setChildren,
          l = e.setAction,
          s = e.onClick,
          r = e.onChange,
          o = e.info,
          d = e.title,
          u = e.disabled,
          b = e.className,
          j = e.style,
          v = k()(e, S),
          h = Object(N.useState)(),
          m = I()(h, 2),
          f = m[0],
          x = m[1],
          O = Object(N.useCallback)(function (e) {
            return x(e)
          }, [])
        Object(N.useEffect)(
          function () {
            null == a || a(i, { setActive: O, selected: f })
          },
          [O, i, a, f],
        )
        var p = Object(N.useCallback)(
          function () {
            u ||
              l(i).then(function () {
                null == r || r({ detail: i }), null == s || s(i)
              })
          },
          [u, i, r, s, l],
        )
        return Object(A.jsx)(
          y.n,
          _objectSpread(
            _objectSpread(
              {
                className:
                  _.b('sidebar-item', { selected: f, disabled: u }) +
                  ' ' +
                  (f ? 'active-class' : '') +
                  ' ' +
                  (u ? 'disabled-class' : '') +
                  ' custom-class ' +
                  b,
                hoverClass: 'van-sidebar-item--hover',
                hoverStayTime: 70,
                onClick: p,
                style: _.c([j]),
              },
              v,
            ),
            {},
            {
              children: Object(A.jsxs)(y.n, {
                className: 'van-sidebar-item__text',
                children: [
                  (null != n || null !== o || t) &&
                    Object(A.jsx)(w.b, { dot: t, info: null != n ? n : o }),
                  d ? Object(A.jsx)(y.n, { children: d }) : c,
                ],
              }),
            },
          ),
        )
      }
    },
    772: function (e, t, n) {},
    773: function (e, t, n) {},
    872: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'default', function () {
          return z
        })
      n(589)
      var i = n(593),
        c = (n(525), n(530), n(696), n(531), n(694), n(772), n(524)),
        a = n.n(c),
        l = n(15),
        s = n.n(l),
        r = n(52),
        o = n.n(r),
        d = n(9),
        u = n.n(d),
        b = n(518),
        j = n(63),
        v = n(521),
        h = n(697),
        m = n(695),
        f = n(529),
        x = n(27),
        O = n.n(x)
      function isActive(e, t) {
        return Array.isArray(e) ? O()(e).call(e, t) > -1 : e === t
      }
      var p = n(108)
      var g = function TreeSelect(e) {
          var t = e.items,
            n = void 0 === t ? [] : t,
            i = e.selectedIcon,
            c = void 0 === i ? 'success' : i,
            l = e.height,
            r = void 0 === l ? 300 : l,
            d = e.mainActiveIndex,
            x = void 0 === d ? 0 : d,
            O = e.activeId,
            g = e.max,
            I = void 0 === g ? 1 / 0 : g,
            C = e.onClickItem,
            k = e.onClickNav,
            y = e.renderContent,
            N = Object(j.useState)([]),
            _ = a()(N, 2),
            w = _[0],
            A = _[1],
            S = Object(j.useCallback)(
              function (e, t) {
                var n,
                  i = Array.isArray(O),
                  c = i && O.length >= I,
                  a = i ? s()((n = O)).call(n, t.id) : O === t.id
                t.disabled ||
                  (c && !a) ||
                  (o()(e, 'detail', { value: t }), null == C || C(e))
              },
              [O, I, C],
            ),
            M = Object(j.useCallback)(
              function (e) {
                var t = e.detail,
                  i = n[t]
                ;(null != i && i.disabled) ||
                  null == k ||
                  k({ detail: { index: t } })
              },
              [k, n],
            )
          return (
            Object(j.useEffect)(
              function () {
                var e = (n[x] || {}).children
                A(void 0 === e ? [] : e)
              },
              [n, x, A],
            ),
            Object(p.jsxs)(b.n, {
              className: 'van-tree-select',
              style: 'height: ' + v.a(r),
              children: [
                Object(p.jsx)(b.j, {
                  scrollY: !0,
                  className: 'van-tree-select__nav',
                  children: Object(p.jsx)(m.a, {
                    activeKey: x,
                    onChange: M,
                    className: 'van-tree-select__nav__inner',
                    children: u()(n).call(n, function (e, t) {
                      return Object(p.jsx)(
                        h.a,
                        {
                          className: 'main-item-class',
                          badge: e.badge,
                          dot: e.dot,
                          title: e.text,
                          disabled: e.disabled,
                        },
                        t,
                      )
                    }),
                  }),
                }),
                Object(p.jsxs)(b.j, {
                  scrollY: !0,
                  className: 'van-tree-select__content',
                  children: [
                    y,
                    u()(w).call(w, function (e) {
                      return Object(p.jsxs)(
                        b.n,
                        {
                          className:
                            'van-ellipsis content-item-class ' +
                            v.b('tree-select__item', {
                              active: isActive(O, e.id),
                              disabled: e.disabled,
                            }) +
                            ' ' +
                            (isActive(O, e.id) ? 'content-active-class' : '') +
                            ' ' +
                            (e.disabled ? 'content-disabled-class' : ''),
                          'data-item': e,
                          onClick: function onClick(t) {
                            S(t, e)
                          },
                          children: [
                            e.text,
                            isActive(O, e.id) &&
                              Object(p.jsx)(f.b, {
                                name: c,
                                size: '16px',
                                className: 'van-tree-select__selected',
                              }),
                          ],
                        },
                        e.id,
                      )
                    }),
                  ],
                }),
              ],
            })
          )
        },
        I = n(592),
        C = n(37),
        k = n(38),
        y = n(171),
        N = n(65),
        _ = n(64),
        w = n(88),
        A = n(21),
        S = n.n(A),
        M = n(116),
        F = n.n(M),
        K = n(541),
        L = n(532),
        E = {
          pro1Name: '浙江',
          pro1: [
            { text: '杭州', id: 1 },
            { text: '温州', id: 2 },
            { text: '宁波', id: 3, disabled: !0 },
            { text: '义乌', id: 4 },
          ],
          pro2Name: '江苏',
          pro2: [
            { text: '南京', id: 5 },
            { text: '无锡', id: 6 },
            { text: '徐州', id: 7 },
            { text: '苏州', id: 8 },
          ],
          pro3Name: '福建',
          pro3: [
            { text: '泉州', id: 9 },
            { text: '厦门', id: 10 },
          ],
        },
        T =
          (n(773),
          [
            { text: E.pro1Name, children: E.pro1 },
            { text: E.pro2Name, children: E.pro2 },
            { text: E.pro3Name, disabled: !0, children: E.pro3 },
          ]),
        z = (function (e) {
          Object(N.a)(Index, e)
          var t = Object(_.a)(Index)
          function Index() {
            var e, n
            return (
              Object(C.a)(this, Index),
              (n = t.call(this)),
              Object(w.a)(Object(y.a)(n), 'state', {
                items: T,
                badgeItems: u()((e = S()(T).call(T, 0, 2))).call(
                  e,
                  function (e, t) {
                    return 0 === t
                      ? Object(I.a)(Object(I.a)({}, e), {}, { dot: !0 })
                      : 1 === t
                      ? Object(I.a)(Object(I.a)({}, e), {}, { badge: 5 })
                      : e
                  },
                ),
                mainActiveIndex: 0,
                activeId: 0,
                mainActiveIndexMulti: 0,
                activeIdMulti: [],
              }),
              Object(w.a)(Object(y.a)(n), 'onClickNav', function (e) {
                var t = e.detail
                n.setState({ mainActiveIndex: t.index || 0 })
              }),
              Object(w.a)(Object(y.a)(n), 'onClickItem', function (e) {
                var t = e.detail,
                  i = n.state.activeId === t.id ? null : t.id
                n.setState({ activeId: i })
              }),
              Object(w.a)(Object(y.a)(n), 'onClickNavMulti', function (e) {
                var t = e.detail
                n.setState({ mainActiveIndexMulti: t.index || 0 })
              }),
              Object(w.a)(Object(y.a)(n), 'onClickItemMulti', function (e) {
                var t = e.detail,
                  i = n.state.activeIdMulti,
                  c = O()(i).call(i, t.id)
                c > -1 ? F()(i).call(i, c, 1) : i.push(t.id),
                  n.setState({ activeIdMulti: i })
              }),
              n
            )
          }
          return (
            Object(k.a)(Index, [
              {
                key: 'render',
                value: function render() {
                  var e = this.state,
                    t = e.items,
                    n = e.mainActiveIndex,
                    c = e.activeId,
                    a = e.mainActiveIndexMulti,
                    l = e.activeIdMulti,
                    s = e.badgeItems
                  return Object(p.jsx)(K.a, {
                    title: 'TreeSelect 分类选择',
                    children: Object(p.jsxs)(p.Fragment, {
                      children: [
                        Object(p.jsx)(L.a, {
                          title: '单选模式',
                          children: Object(p.jsx)(g, {
                            items: t,
                            mainActiveIndex: n,
                            activeId: c,
                            onClickItem: this.onClickItem,
                            onClickNav: this.onClickNav,
                          }),
                        }),
                        Object(p.jsx)(L.a, {
                          title: '多选模式',
                          children: Object(p.jsx)(g, {
                            max: '2',
                            items: t,
                            mainActiveIndex: a,
                            activeId: l,
                            onClickItem: this.onClickItemMulti,
                            onClickNav: this.onClickNavMulti,
                          }),
                        }),
                        Object(p.jsx)(L.a, {
                          title: '自定义内容',
                          children: Object(p.jsx)(g, {
                            items: [{ text: '分组 1' }, { text: '分组 2' }],
                            height: '55vw',
                            mainActiveIndex: n,
                            activeId: c,
                            onClickItem: this.onClickItem,
                            onClickNav: this.onClickNav,
                            renderContent: Object(p.jsx)(p.Fragment, {
                              children:
                                0 === n
                                  ? Object(p.jsx)(i.a, {
                                      src: 'https://img.yzcdn.cn/vant/apple-1.jpg',
                                      width: '100%',
                                      height: '100%',
                                    })
                                  : 1 === n &&
                                    Object(p.jsx)(i.a, {
                                      src: 'https://img.yzcdn.cn/vant/apple-2.jpg',
                                      width: '100%',
                                      height: '100%',
                                      slot: 'content',
                                    }),
                            }),
                          }),
                        }),
                        Object(p.jsx)(L.a, {
                          title: '徽标提示',
                          children: Object(p.jsx)(g, {
                            items: s,
                            mainActiveIndex: n,
                            activeId: c,
                            onClickItem: this.onClickItem,
                            onClickNav: this.onClickNav,
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
        })(j.Component)
    },
  },
])
