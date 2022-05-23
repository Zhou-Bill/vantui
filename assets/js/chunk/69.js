;(window.webpackJsonp = window.webpackJsonp || []).push([
  [69],
  {
    526: function (t, n, e) {
      'use strict'
      e.d(n, 'e', function () {
        return isPlainObject
      }),
        e.d(n, 'f', function () {
          return isPromise
        }),
        e.d(n, 'b', function () {
          return isDef
        }),
        e.d(n, 'd', function () {
          return isObj
        }),
        e.d(n, 'a', function () {
          return isBoolean
        }),
        e.d(n, 'c', function () {
          return isImageUrl
        }),
        e.d(n, 'g', function () {
          return isVideoUrl
        })
      var a = e(170),
        r = e.n(a)
      function isFunction(t) {
        return 'function' == typeof t
      }
      function isPlainObject(t) {
        return null !== t && 'object' === r()(t) && !Array.isArray(t)
      }
      function isPromise(t) {
        return isPlainObject(t) && isFunction(t.then) && isFunction(t.catch)
      }
      function isDef(t) {
        return null != t
      }
      function isObj(t) {
        var n = r()(t)
        return null !== t && ('object' === n || 'function' === n)
      }
      function isBoolean(t) {
        return 'boolean' == typeof t
      }
      var i = /\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i,
        c = /\.(mp4|mpg|mpeg|dat|asf|avi|rm|rmvb|mov|wmv|flv|mkv)/i
      function isImageUrl(t) {
        return i.test(t)
      }
      function isVideoUrl(t) {
        return c.test(t)
      }
    },
    532: function (t, n, e) {
      'use strict'
      e.d(n, 'a', function () {
        return u
      })
      var a = e(37),
        r = e(38),
        i = e(65),
        c = e(64),
        o = e(518),
        s = e(63),
        l = (e(533), e(108)),
        u = (function (t) {
          Object(i.a)(Index, t)
          var n = Object(c.a)(Index)
          function Index() {
            return Object(a.a)(this, Index), n.call(this)
          }
          return (
            Object(r.a)(Index, [
              {
                key: 'render',
                value: function render() {
                  var t = this.props,
                    n = t.padding,
                    e = t.title,
                    a = t.card
                  return Object(l.jsxs)(o.n, {
                    className:
                      'custom-class demo-block van-clearfix ' +
                      (n ? 'demo-block--padding' : ''),
                    children: [
                      e &&
                        Object(l.jsx)(o.n, {
                          className: 'demo-block__title',
                          children: e,
                        }),
                      a
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
    533: function (t, n, e) {},
    540: function (t, n, e) {
      'use strict'
      e.d(n, 'g', function () {
        return range
      }),
        e.d(n, 'd', function () {
          return getSystemInfoSync
        }),
        e.d(n, 'a', function () {
          return addUnit
        }),
        e.d(n, 'h', function () {
          return requestAnimationFrame
        }),
        e.d(n, 'f', function () {
          return pickExclude
        }),
        e.d(n, 'c', function () {
          return getRect
        }),
        e.d(n, 'b', function () {
          return getAllRect
        }),
        e.d(n, 'i', function () {
          return toPromise
        })
      var a,
        r = e(139),
        i = e.n(r),
        c = e(22),
        o = e.n(c),
        s = e(15),
        l = e.n(s),
        u = e(5),
        f = e.n(u),
        d = (e(517), e(841)),
        h = (e(844), e(87)),
        m = e(895),
        b = (e(75), e(526))
      e(546)
      function range(t, n, e) {
        return Math.min(Math.max(t, n), e)
      }
      function getSystemInfoSync() {
        return null == a && (a = Object(d.a)()), a
      }
      function addUnit(t) {
        if (Object(b.b)(t))
          return /^-?\d+(\.\d+)?$/.test('' + t) ? h.a.pxTransform(t) : t
      }
      function requestAnimationFrame(t) {
        return 'devtools' === getSystemInfoSync().platform
          ? setTimeout(function () {
              t()
            }, 33.333333333333336)
          : Object(m.a)()
              .selectViewport()
              .boundingClientRect()
              .exec(function () {
                t()
              })
      }
      function pickExclude(t, n) {
        var e
        return Object(b.e)(t)
          ? i()((e = o()(t))).call(
              e,
              function (e, a) {
                return l()(n).call(n, a) || (e[a] = t[a]), e
              },
              {},
            )
          : {}
      }
      function getRect(t, n) {
        return new f.a(function (e) {
          var a = Object(m.a)()
          t && (a = a.in(t)),
            a
              .select(n)
              .boundingClientRect()
              .exec(function () {
                var t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : []
                return e(t[0])
              })
        })
      }
      function getAllRect(t, n) {
        return new f.a(function (e) {
          var a = Object(m.a)()
          t && (a = a.in(t)),
            a
              .selectAll(n)
              .boundingClientRect()
              .exec(function () {
                var t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : []
                return e(t[0])
              })
        })
      }
      function toPromise(t) {
        return Object(b.f)(t) ? t : f.a.resolve(t)
      }
      e.d(n, 'e', function () {
        return b.b
      })
    },
    546: function (t, n, e) {
      'use strict'
      e.d(n, 'a', function () {
        return canIUseModel
      }),
        e.d(n, 'b', function () {
          return canIUseNextTick
        })
      var a,
        r = e(111),
        i = e.n(r),
        c = e(841),
        o = e(842)
      e(843)
      function gte(t) {
        return (
          (function compareVersion(t, n) {
            ;(t = t.split('.')), (n = n.split('.'))
            for (var e = Math.max(t.length, n.length); t.length < e; )
              t.push('0')
            for (; n.length < e; ) n.push('0')
            for (var a = 0; a < e; a++) {
              var r = i()(t[a], 10),
                c = i()(n[a], 10)
              if (r > c) return 1
              if (r < c) return -1
            }
            return 0
          })(
            (function getSystemInfoSync() {
              return null == a && (a = Object(c.a)()), a
            })().SDKVersion,
            t,
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
    753: function (t, n, e) {},
    754: function (t, n, e) {
      'use strict'
      e.d(n, 'a', function () {
        return y
      })
      var a = e(177),
        r = e(38),
        i = e(37),
        c = e(6),
        o = e.n(c),
        s = e(26),
        l = e.n(s),
        u = e(30),
        f = e.n(u),
        d = e(9),
        h = e.n(d),
        m = new (Object(r.a)(function StyleSheet() {
          var t = this
          Object(i.a)(this, StyleSheet),
            (this.$style = null),
            (this.sheet = null),
            (this.appendStyleSheet = function () {
              if (t.$style) {
                var n = document.getElementsByTagName('head')[0]
                t.$style.setAttribute('type', 'text/css'),
                  t.$style.setAttribute('data-type', 'Taro'),
                  n.appendChild(t.$style),
                  (t.sheet = t.$style.sheet)
              }
              t.sheet &&
                !('insertRule' in t.sheet) &&
                console.warn('当前浏览器不支持 stylesheet.insertRule 接口')
            }),
            (this.add = function (n) {
              var e,
                a =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : 0
              null === t.sheet && t.appendStyleSheet(),
                null === (e = t.sheet) || void 0 === e || e.insertRule(n, a)
            }),
            (this.$style = document.createElement('style'))
        }))(),
        b = 'transitionend',
        v = 'transform',
        p = document.createElement('div')
      ;(p.style.cssText =
        '-webkit-animation-name:webkit;-moz-animation-name:moz;-ms-animation-name:ms;animation-name:standard;'),
        'standard' === p.style['animation-name']
          ? ((b = 'transitionend'), (v = 'transform'))
          : 'webkit' === p.style['-webkit-animation-name']
          ? ((b = 'webkitTransitionEnd'), (v = '-webkit-transform'))
          : 'moz' === p.style['-moz-animation-name']
          ? ((b = 'mozTransitionEnd'), (v = '-moz-transform'))
          : 'ms' === p.style['-ms-animation-name'] &&
            ((b = 'msTransitionEnd'), (v = '-ms-transform'))
      var j = 0,
        g = (function () {
          function Animation() {
            var t = this,
              n =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              e = n.duration,
              r = void 0 === e ? 400 : e,
              c = n.delay,
              s = void 0 === c ? 0 : c,
              l = n.timingFunction,
              u = void 0 === l ? 'linear' : l,
              f = n.transformOrigin,
              d = void 0 === f ? '50% 50% 0' : f,
              h = n.unit,
              m = void 0 === h ? 'px' : h
            Object(i.a)(this, Animation),
              (this.rules = []),
              (this.transform = [''.concat(v, ':')]),
              (this.steps = []),
              (this.animationMap = {}),
              (this.animationMapCount = 0),
              this.setDefault(r, s, u, d),
              (this.unit = m)
            var p = 'animation'
            ;(this.id = ++j),
              document.body.addEventListener(b, function (n) {
                var e = n.target
                null === e.getAttribute(p) && (p = 'data-animation')
                var r = e.getAttribute(p)
                if (null !== r) {
                  var i = r.split('__'),
                    c = Object(a.a)(i, 2),
                    s = c[0],
                    l = c[1]
                  if (
                    s === 'taro-h5-poly-fill/'.concat(t.id, '/create-animation')
                  ) {
                    var u,
                      f,
                      d,
                      h,
                      m,
                      b = l.split('--'),
                      v = Object(a.a)(b, 2),
                      j = v[0],
                      g = v[1],
                      y = Number(void 0 === g ? 0 : g)
                    if (
                      y <
                      t.animationMap[o()((u = ''.concat(s, '__'))).call(u, j)] -
                        1
                    )
                      if (
                        (e.setAttribute(
                          p,
                          o()(
                            (f = o()((d = ''.concat(s, '__'))).call(
                              d,
                              j,
                              '--',
                            )),
                          ).call(f, y + 1),
                        ),
                        'animation' === p)
                      )
                        e.setAttribute(
                          'data-animation',
                          o()(
                            (h = o()((m = ''.concat(s, '__'))).call(
                              m,
                              j,
                              '--',
                            )),
                          ).call(h, y + 1),
                        )
                  }
                }
              })
          }
          return (
            Object(r.a)(Animation, [
              {
                key: 'transformUnit',
                value: function transformUnit() {
                  for (
                    var t = this,
                      n = [],
                      e = arguments.length,
                      a = new Array(e),
                      r = 0;
                    r < e;
                    r++
                  )
                    a[r] = arguments[r]
                  return (
                    l()(a).call(a, function (e) {
                      var a
                      n.push(
                        isNaN(e) ? e : o()((a = ''.concat(e))).call(a, t.unit),
                      )
                    }),
                    n
                  )
                },
              },
              {
                key: 'setDefault',
                value: function setDefault(t, n, e, a) {
                  this.DEFAULT = {
                    duration: t,
                    delay: n,
                    timingFunction: e,
                    transformOrigin: a,
                  }
                },
              },
              {
                key: 'matrix',
                value: function matrix(t, n, e, a, r, i) {
                  var c, s, l, u, f
                  return (
                    this.transform.push(
                      o()(
                        (c = o()(
                          (s = o()(
                            (l = o()(
                              (u = o()((f = 'matrix('.concat(t, ', '))).call(
                                f,
                                n,
                                ', ',
                              )),
                            ).call(u, e, ', ')),
                          ).call(l, a, ', ')),
                        ).call(s, r, ', ')),
                      ).call(c, i, ')'),
                    ),
                    this
                  )
                },
              },
              {
                key: 'matrix3d',
                value: function matrix3d(
                  t,
                  n,
                  e,
                  a,
                  r,
                  i,
                  c,
                  s,
                  l,
                  u,
                  f,
                  d,
                  h,
                  m,
                  b,
                  v,
                ) {
                  var p, j, g, y, O, k, x, w, _, S, I, A, U, C, T
                  return (
                    this.transform.push(
                      o()(
                        (p = o()(
                          (j = o()(
                            (g = o()(
                              (y = o()(
                                (O = o()(
                                  (k = o()(
                                    (x = o()(
                                      (w = o()(
                                        (_ = o()(
                                          (S = o()(
                                            (I = o()(
                                              (A = o()(
                                                (U = o()(
                                                  (C = o()(
                                                    (T = 'matrix3d('.concat(
                                                      t,
                                                      ', ',
                                                    )),
                                                  ).call(T, n, ', ')),
                                                ).call(C, e, ', ')),
                                              ).call(U, a, ', ')),
                                            ).call(A, r, ', ')),
                                          ).call(I, i, ', ')),
                                        ).call(S, c, ', ')),
                                      ).call(_, s, ', ')),
                                    ).call(w, l, ', ')),
                                  ).call(x, u, ', ')),
                                ).call(k, f, ', ')),
                              ).call(O, d, ', ')),
                            ).call(y, h, ', ')),
                          ).call(g, m, ', ')),
                        ).call(j, b, ', ')),
                      ).call(p, v, ')'),
                    ),
                    this
                  )
                },
              },
              {
                key: 'rotate',
                value: function rotate(t) {
                  return this.transform.push('rotate('.concat(t, 'deg)')), this
                },
              },
              {
                key: 'rotate3d',
                value: function rotate3d(t, n, e, a) {
                  var r, i, c
                  'number' != typeof n
                    ? this.transform.push('rotate3d('.concat(t, ')'))
                    : this.transform.push(
                        o()(
                          (r = o()(
                            (i = o()((c = 'rotate3d('.concat(t, ', '))).call(
                              c,
                              n || 0,
                              ', ',
                            )),
                          ).call(i, e || 0, ', ')),
                        ).call(r, a || 0, 'deg)'),
                      )
                  return this
                },
              },
              {
                key: 'rotateX',
                value: function rotateX(t) {
                  return this.transform.push('rotateX('.concat(t, 'deg)')), this
                },
              },
              {
                key: 'rotateY',
                value: function rotateY(t) {
                  return this.transform.push('rotateY('.concat(t, 'deg)')), this
                },
              },
              {
                key: 'rotateZ',
                value: function rotateZ(t) {
                  return this.transform.push('rotateZ('.concat(t, 'deg)')), this
                },
              },
              {
                key: 'scale',
                value: function scale(t, n) {
                  var e
                  return (
                    this.transform.push(
                      o()((e = 'scale('.concat(t, ', '))).call(e, n, ')'),
                    ),
                    this
                  )
                },
              },
              {
                key: 'scale3d',
                value: function scale3d(t, n, e) {
                  var a, r
                  return (
                    this.transform.push(
                      o()(
                        (a = o()((r = 'scale3d('.concat(t, ', '))).call(
                          r,
                          n,
                          ', ',
                        )),
                      ).call(a, e, ')'),
                    ),
                    this
                  )
                },
              },
              {
                key: 'scaleX',
                value: function scaleX(t) {
                  return this.transform.push('scaleX('.concat(t, ')')), this
                },
              },
              {
                key: 'scaleY',
                value: function scaleY(t) {
                  return this.transform.push('scaleY('.concat(t, ')')), this
                },
              },
              {
                key: 'scaleZ',
                value: function scaleZ(t) {
                  return this.transform.push('scaleZ('.concat(t, ')')), this
                },
              },
              {
                key: 'skew',
                value: function skew(t, n) {
                  var e
                  return (
                    this.transform.push(
                      o()((e = 'skew('.concat(t, ', '))).call(e, n, ')'),
                    ),
                    this
                  )
                },
              },
              {
                key: 'skewX',
                value: function skewX(t) {
                  return this.transform.push('skewX('.concat(t, ')')), this
                },
              },
              {
                key: 'skewY',
                value: function skewY(t) {
                  return this.transform.push('skewY('.concat(t, ')')), this
                },
              },
              {
                key: 'translate',
                value: function translate(t, n) {
                  var e,
                    r = this.transformUnit(t, n),
                    i = Object(a.a)(r, 2)
                  return (
                    (t = i[0]),
                    (n = i[1]),
                    this.transform.push(
                      o()((e = 'translate('.concat(t, ', '))).call(e, n, ')'),
                    ),
                    this
                  )
                },
              },
              {
                key: 'translate3d',
                value: function translate3d(t, n, e) {
                  var r,
                    i,
                    c = this.transformUnit(t, n, e),
                    s = Object(a.a)(c, 3)
                  return (
                    (t = s[0]),
                    (n = s[1]),
                    (e = s[2]),
                    this.transform.push(
                      o()(
                        (r = o()((i = 'translate3d('.concat(t, ', '))).call(
                          i,
                          n,
                          ', ',
                        )),
                      ).call(r, e, ')'),
                    ),
                    this
                  )
                },
              },
              {
                key: 'translateX',
                value: function translateX(t) {
                  var n = this.transformUnit(t)
                  return (
                    (t = Object(a.a)(n, 1)[0]),
                    this.transform.push('translateX('.concat(t, ')')),
                    this
                  )
                },
              },
              {
                key: 'translateY',
                value: function translateY(t) {
                  var n = this.transformUnit(t)
                  return (
                    (t = Object(a.a)(n, 1)[0]),
                    this.transform.push('translateY('.concat(t, ')')),
                    this
                  )
                },
              },
              {
                key: 'translateZ',
                value: function translateZ(t) {
                  var n = this.transformUnit(t)
                  return (
                    (t = Object(a.a)(n, 1)[0]),
                    this.transform.push('translateZ('.concat(t, ')')),
                    this
                  )
                },
              },
              {
                key: 'opacity',
                value: function opacity(t) {
                  return this.rules.push('opacity: '.concat(t)), this
                },
              },
              {
                key: 'backgroundColor',
                value: function backgroundColor(t) {
                  return this.rules.push('background-color: '.concat(t)), this
                },
              },
              {
                key: 'width',
                value: function width(t) {
                  var n = this.transformUnit(t)
                  return (
                    (t = Object(a.a)(n, 1)[0]),
                    this.rules.push('width: '.concat(t)),
                    this
                  )
                },
              },
              {
                key: 'height',
                value: function height(t) {
                  var n = this.transformUnit(t)
                  return (
                    (t = Object(a.a)(n, 1)[0]),
                    this.rules.push('height: '.concat(t)),
                    this
                  )
                },
              },
              {
                key: 'top',
                value: function top(t) {
                  var n = this.transformUnit(t)
                  return (
                    (t = Object(a.a)(n, 1)[0]),
                    this.rules.push('top: '.concat(t)),
                    this
                  )
                },
              },
              {
                key: 'right',
                value: function right(t) {
                  var n = this.transformUnit(t)
                  return (
                    (t = Object(a.a)(n, 1)[0]),
                    this.rules.push('right: '.concat(t)),
                    this
                  )
                },
              },
              {
                key: 'bottom',
                value: function bottom(t) {
                  var n = this.transformUnit(t)
                  return (
                    (t = Object(a.a)(n, 1)[0]),
                    this.rules.push('bottom: '.concat(t)),
                    this
                  )
                },
              },
              {
                key: 'left',
                value: function left(t) {
                  var n = this.transformUnit(t)
                  return (
                    (t = Object(a.a)(n, 1)[0]),
                    this.rules.push('left: '.concat(t)),
                    this
                  )
                },
              },
              {
                key: 'step',
                value: function step() {
                  var t,
                    n,
                    e,
                    a,
                    r,
                    i =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    c = this.DEFAULT,
                    s = i.duration,
                    l = void 0 === s ? c.duration : s,
                    u = i.delay,
                    d = void 0 === u ? c.delay : u,
                    m = i.timingFunction,
                    b = void 0 === m ? c.timingFunction : m,
                    p = i.transformOrigin,
                    j = void 0 === p ? c.transformOrigin : p
                  return (
                    this.steps.push(
                      f()(
                        (t = [
                          h()((n = this.rules))
                            .call(n, function (t) {
                              return ''.concat(t, '!important')
                            })
                            .join(';'),
                          ''.concat(this.transform.join(' '), '!important'),
                          o()((e = ''.concat(v, '-origin: '))).call(e, j),
                          o()(
                            (a = o()(
                              (r = 'transition: all '.concat(l, 'ms ')),
                            ).call(r, b, ' ')),
                          ).call(a, d, 'ms'),
                        ]),
                      )
                        .call(t, function (t) {
                          return '' !== t && t !== ''.concat(v, ':')
                        })
                        .join(';'),
                    ),
                    (this.rules = []),
                    (this.transform = [''.concat(v, ':')]),
                    this
                  )
                },
              },
              {
                key: 'createAnimationData',
                value: function createAnimationData() {
                  var t,
                    n,
                    e = o()(
                      (t = 'taro-h5-poly-fill/'.concat(
                        this.id,
                        '/create-animation__',
                      )),
                    ).call(t, this.animationMapCount++)
                  return (
                    (this.animationMap[e] = this.steps.length),
                    l()((n = this.steps)).call(n, function (t, n) {
                      var a,
                        r,
                        i,
                        c,
                        s,
                        l =
                          0 === n
                            ? o()(
                                (a = '[animation="'.concat(
                                  e,
                                  '"], [data-animation="',
                                )),
                              ).call(a, e, '"]')
                            : o()(
                                (r = o()(
                                  (i = o()(
                                    (c = '[animation="'.concat(e, '--')),
                                  ).call(c, n, '"], [data-animation="')),
                                ).call(i, e, '--')),
                              ).call(r, n, '"]')
                      m.add(o()((s = ''.concat(l, ' { '))).call(s, t, ' }'))
                    }),
                    (this.steps = []),
                    e
                  )
                },
              },
              {
                key: 'export',
                value: function _export() {
                  return this.createAnimationData()
                },
              },
            ]),
            Animation
          )
        })(),
        y = function createAnimation(t) {
          return new g(t)
        }
    },
    755: function (t, n, e) {},
    879: function (t, n, e) {
      'use strict'
      e.r(n),
        e.d(n, 'default', function () {
          return K
        })
      e(525), e(530), e(531), e(753)
      var a = e(22),
        r = e.n(a),
        i = e(520),
        c = e.n(i),
        o = e(30),
        s = e.n(o),
        l = e(519),
        u = e.n(l),
        f = e(26),
        d = e.n(f),
        h = e(169),
        m = e.n(h),
        b = e(109),
        v = e.n(b),
        p = e(52),
        j = e.n(p),
        g = e(522),
        y = e.n(g),
        O = e(523),
        k = e.n(O),
        x = e(524),
        w = e.n(x),
        _ = e(5),
        S = e.n(_),
        I = e(87),
        A = e(754),
        U = e(517),
        C = e(63),
        T = e(518),
        N = e(521),
        D = e(540),
        E = e(529),
        F = e(527)
      var R = e(108),
        X = [
          'text',
          'mode',
          'url',
          'openType',
          'delay',
          'speed',
          'scrollable',
          'leftIcon',
          'color',
          'backgroundColor',
          'background',
          'wrapable',
          'renderLeftIcon',
          'renderRightIcon',
          'onClick',
          'onClose',
          'style',
          'className',
          'children',
        ]
      function ownKeys(t, n) {
        var e = r()(t)
        if (c.a) {
          var a = c()(t)
          n &&
            (a = s()(a).call(a, function (n) {
              return u()(t, n).enumerable
            })),
            e.push.apply(e, a)
        }
        return e
      }
      function _objectSpread(t) {
        for (var n = 1; n < arguments.length; n++) {
          var e,
            a = null != arguments[n] ? arguments[n] : {}
          if (n % 2)
            d()((e = ownKeys(Object(a), !0))).call(e, function (n) {
              y()(t, n, a[n])
            })
          else if (m.a) v()(t, m()(a))
          else {
            var r
            d()((r = ownKeys(Object(a)))).call(r, function (n) {
              j()(t, n, u()(a, n))
            })
          }
        }
        return t
      }
      var Y = 0
      var M = function NoticeBar(t) {
          var n = Object(C.useState)({
              ready: !1,
              show: !0,
              animationData: { actions: [] },
              unitag: 0,
            }),
            e = w()(n, 2),
            a = e[0],
            r = e[1],
            i = {
              animation: null,
              resetAnimation: null,
              timer: null,
              wrapWidth: void 0,
              contentWidth: void 0,
              duration: void 0,
            },
            c = Object(C.useRef)(i),
            o = t.text,
            s = void 0 === o ? '' : o,
            l = t.mode,
            u = void 0 === l ? '' : l,
            f = t.url,
            d = void 0 === f ? '' : f,
            h = t.openType,
            m = void 0 === h ? 'navigate' : h,
            b = t.delay,
            v = void 0 === b ? 1 : b,
            p = t.speed,
            j = void 0 === p ? 60 : p,
            g = t.scrollable,
            y = void 0 === g ? null : g,
            O = t.leftIcon,
            x = void 0 === O ? '' : O,
            _ = t.color,
            M = void 0 === _ ? '#ed6a0c' : _,
            Z = t.backgroundColor,
            $ = void 0 === Z ? '#fffbe8' : Z,
            P = t.background,
            z = t.wrapable,
            W = t.renderLeftIcon,
            B = t.renderRightIcon,
            L = t.onClick,
            V = t.onClose,
            K = t.style,
            q = t.className,
            J = t.children,
            G = k()(t, X)
          Object(C.useEffect)(function () {
            r(function (t) {
              return _objectSpread(_objectSpread({}, t), {}, { unitag: Y++ })
            })
          }, []),
            I.a.useReady(function () {
              0
            }),
            Object(C.useEffect)(function () {
              ;(c.current.resetAnimation = Object(A.a)({
                duration: 0,
                timingFunction: 'linear',
              })),
                r(function (t) {
                  return _objectSpread(_objectSpread({}, t), {}, { ready: !0 })
                })
            }, []),
            Object(C.useEffect)(
              function () {
                return (
                  s && a.ready && tt(),
                  function () {
                    c.current.timer && clearTimeout(c.current.timer)
                  }
                )
              },
              [s, j, a.ready],
            )
          var H,
            Q = Object(C.useCallback)(function () {
              var t =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
              c.current.timer && clearTimeout(c.current.timer),
                (c.current.timer = null),
                r(function (n) {
                  return _objectSpread(
                    _objectSpread({}, n),
                    {},
                    {
                      animationData: c.current.resetAnimation
                        .translateX(t ? 0 : c.current.wrapWidth)
                        .step()
                        .export(),
                    },
                  )
                }),
                setTimeout(function () {
                  Object(D.h)(function () {
                    r(function (t) {
                      return _objectSpread(
                        _objectSpread({}, t),
                        {},
                        {
                          animationData: c.current.animation
                            .translateX(-c.current.contentWidth)
                            .step()
                            .export(),
                        },
                      )
                    })
                  })
                }, 10),
                (c.current.timer = setTimeout(function () {
                  Q()
                }, c.current.duration))
            }, []),
            tt = Object(C.useCallback)(
              function () {
                Object(D.h)(function () {
                  S.a
                    .all([
                      Object(D.c)(
                        null,
                        '.van-notice-bar__content_'.concat(a.unitag),
                      ),
                      Object(D.c)(
                        null,
                        '.van-notice-bar__wrap_'.concat(a.unitag),
                      ),
                    ])
                    .then(function (t) {
                      var n = t[0],
                        e = t[1]
                      null != n &&
                        null != e &&
                        n.width &&
                        e.width &&
                        !1 !== y &&
                        Object(U.a)(function () {
                          ;(y || e.width <= n.width) &&
                            ((c.current.wrapWidth = e.width),
                            (c.current.contentWidth = n.width),
                            (c.current.duration =
                              ((e.width + n.width) / j) * 1e3),
                            (c.current.animation = Object(A.a)({
                              duration: c.current.duration,
                              timingFunction: 'linear',
                              delay: v,
                            })),
                            Q(!0))
                        })
                    })
                })
              },
              [a.unitag, y, j, v, Q],
            ),
            nt = Object(C.useCallback)(
              function (t) {
                'closeable' === u &&
                  (c.current.timer && clearTimeout(c.current.timer),
                  (c.current.timer = null),
                  r(function (t) {
                    return _objectSpread(_objectSpread({}, t), {}, { show: !1 })
                  }),
                  null == V || V(t))
              },
              [u, V],
            )
          return (
            a.show &&
            Object(R.jsxs)(
              T.n,
              _objectSpread(
                _objectSpread(
                  {
                    className:
                      N.b('notice-bar', { withicon: u, wrapable: z }) +
                      ' '.concat(q || ''),
                    style: N.c([
                      ((H = { color: M, backgroundColor: $, background: P }),
                      Object(F.a)({
                        color: H.color,
                        'background-color': H.backgroundColor,
                        background: H.background,
                      })),
                      K,
                    ]),
                  },
                  G,
                ),
                {},
                {
                  onClick: L,
                  children: [
                    x
                      ? Object(R.jsx)(E.b, {
                          name: x,
                          className: 'van-notice-bar__left-icon',
                        })
                      : W,
                    Object(R.jsx)(T.n, {
                      className:
                        'van-notice-bar__wrap van-notice-bar__wrap_'.concat(
                          a.unitag,
                        ),
                      children: Object(R.jsxs)(T.n, {
                        className:
                          'van-notice-bar__content van-notice-bar__content_'.concat(
                            a.unitag,
                            ' ',
                          ) + (!1 !== y || z ? '' : 'van-ellipsis'),
                        animation: a.animationData,
                        children: [s, !s && J],
                      }),
                    }),
                    'closeable' === u
                      ? Object(R.jsx)(E.b, {
                          className: 'van-notice-bar__right-icon',
                          name: 'cross',
                          onClick: nt,
                        })
                      : 'link' === u
                      ? Object(R.jsx)(T.h, {
                          url: d,
                          openType: m,
                          children: Object(R.jsx)(E.b, {
                            className: 'van-notice-bar__right-icon',
                            name: 'arrow',
                          }),
                        })
                      : B,
                  ],
                },
              ),
            )
          )
        },
        Z = e(37),
        $ = e(38),
        P = e(171),
        z = e(65),
        W = e(64),
        B = e(88),
        L = e(541),
        V = e(532),
        K =
          (e(755),
          (function (t) {
            Object(z.a)(Index, t)
            var n = Object(W.a)(Index)
            function Index() {
              var t
              return (
                Object(Z.a)(this, Index),
                (t = n.call(this)),
                Object(B.a)(Object(P.a)(t), 'state', {
                  text: '在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。',
                  shortText: '技术是开发它的人的共同灵魂。',
                }),
                t
              )
            }
            return (
              Object($.a)(Index, [
                {
                  key: 'render',
                  value: function render() {
                    var t = this.state,
                      n = t.text,
                      e = t.shortText
                    return Object(R.jsx)(L.a, {
                      title: 'NoticeBar 通知栏',
                      children: Object(R.jsxs)(R.Fragment, {
                        children: [
                          Object(R.jsx)(V.a, {
                            title: '基础用法',
                            children: Object(R.jsx)(M, {
                              text: n,
                              leftIcon: 'volume-o',
                            }),
                          }),
                          Object(R.jsxs)(V.a, {
                            title: '滚动模式',
                            children: [
                              Object(R.jsx)(M, {
                                className: 'margin-top',
                                scrollable: !0,
                                text: e,
                              }),
                              Object(R.jsx)(M, {
                                className: 'margin-top',
                                scrollable: !1,
                                text: n,
                              }),
                            ],
                          }),
                          Object(R.jsx)(V.a, {
                            title: '多行展示',
                            children: Object(R.jsx)(M, {
                              wrapable: !0,
                              scrollable: !1,
                              text: n,
                            }),
                          }),
                          Object(R.jsxs)(V.a, {
                            title: '通知栏模式',
                            children: [
                              Object(R.jsx)(M, { mode: 'closeable', text: e }),
                              Object(R.jsx)(M, {
                                className: 'margin-top',
                                mode: 'link',
                                text: e,
                              }),
                            ],
                          }),
                          Object(R.jsx)(V.a, {
                            title: '自定义样式',
                            children: Object(R.jsx)(M, {
                              text: e,
                              color: '#1989fa',
                              background: '#ecf9ff',
                              leftIcon: 'info-o',
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
          })(C.Component))
    },
  },
])
