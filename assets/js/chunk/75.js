;(window.webpackJsonp = window.webpackJsonp || []).push([
  [75],
  {
    735: function (e, a, s) {},
    839: function (e, a, s) {
      'use strict'
      s.r(a),
        s.d(a, 'default', function () {
          return O
        })
      s(717)
      var n = s(718),
        c = (s(678), s(679)),
        t = s(37),
        r = s(38),
        j = s(171),
        d = s(65),
        i = s(64),
        l = s(88),
        p = s(63),
        b = s(541),
        h = s(532),
        x = (s(735), s(108)),
        O = (function (e) {
          Object(d.a)(Index, e)
          var a = Object(i.a)(Index)
          function Index() {
            var e
            return (
              Object(t.a)(this, Index),
              (e = a.call(this)),
              Object(l.a)(Object(j.a)(e), 'state', {}),
              e
            )
          }
          return (
            Object(r.a)(Index, [
              {
                key: 'render',
                value: function render() {
                  return Object(x.jsx)(b.a, {
                    title: 'Layout 布局',
                    children: Object(x.jsxs)(x.Fragment, {
                      children: [
                        Object(x.jsxs)(h.a, {
                          title: '基础用法',
                          padding: !0,
                          children: [
                            Object(x.jsxs)(n.a, {
                              children: [
                                Object(x.jsx)(c.a, {
                                  span: '8',
                                  className: 'dark',
                                  children: 'span: 8',
                                }),
                                Object(x.jsx)(c.a, {
                                  span: '8',
                                  className: 'light',
                                  children: 'span: 8',
                                }),
                                Object(x.jsx)(c.a, {
                                  span: '8',
                                  className: 'dark',
                                  children: 'span: 8',
                                }),
                              ],
                            }),
                            Object(x.jsxs)(n.a, {
                              children: [
                                Object(x.jsx)(c.a, {
                                  span: '4',
                                  className: 'dark',
                                  children: 'span: 4',
                                }),
                                Object(x.jsx)(c.a, {
                                  span: '10',
                                  offset: '4',
                                  className: 'light',
                                  children: 'offset: 4, span: 10',
                                }),
                              ],
                            }),
                            Object(x.jsx)(n.a, {
                              children: Object(x.jsx)(c.a, {
                                offset: '12',
                                span: '12',
                                className: 'dark',
                                children: 'offset: 12, span: 12',
                              }),
                            }),
                          ],
                        }),
                        Object(x.jsx)(h.a, {
                          title: '在列元素之间增加间距',
                          padding: !0,
                          children: Object(x.jsxs)(n.a, {
                            gutter: '20',
                            children: [
                              Object(x.jsx)(c.a, {
                                span: '8',
                                className: 'dark',
                                children: 'span: 8',
                              }),
                              Object(x.jsx)(c.a, {
                                span: '8',
                                className: 'light',
                                children: 'span: 8',
                              }),
                              Object(x.jsx)(c.a, {
                                span: '8',
                                className: 'dark',
                                children: 'span: 8',
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
        })(p.Component)
    },
  },
])
