;(window.webpackJsonp = window.webpackJsonp || []).push([
  [2],
  {
    649: function (t, i, r) {
      t.exports = r(654)
    },
    654: function (t, i, r) {
      var o = r(655)
      t.exports = o
    },
    655: function (t, i, r) {
      var o = r(13),
        a = r(656),
        c = Array.prototype
      t.exports = function (t) {
        var i = t.fill
        return t === c || (o(c, t) && i === c.fill) ? a : i
      }
    },
    656: function (t, i, r) {
      r(657)
      var o = r(17)
      t.exports = o('Array').fill
    },
    657: function (t, i, r) {
      var o = r(4),
        a = r(658),
        c = r(118)
      o({ target: 'Array', proto: !0 }, { fill: a }), c('fill')
    },
    658: function (t, i, r) {
      'use strict'
      var o = r(33),
        a = r(141),
        c = r(47)
      t.exports = function fill(t) {
        for (
          var i = o(this),
            r = c(i),
            u = arguments.length,
            l = a(u > 1 ? arguments[1] : void 0, r),
            h = u > 2 ? arguments[2] : void 0,
            v = void 0 === h ? r : a(h, r);
          v > l;

        )
          i[l++] = t
        return i
      }
    },
    716: function (t, i, r) {
      'use strict'
      r.d(i, 'a', function () {
        return S
      })
      var o = r(40),
        a = r.n(o),
        c = r(113),
        u = r.n(c),
        l = r(112),
        h = r.n(l),
        v = r(132)
      function _createForOfIteratorHelper(t, i) {
        var r = (void 0 !== a.a && u()(t)) || t['@@iterator']
        if (!r) {
          if (
            h()(t) ||
            (r = Object(v.a)(t)) ||
            (i && t && 'number' == typeof t.length)
          ) {
            r && (t = r)
            var o = 0,
              c = function F() {}
            return {
              s: c,
              n: function n() {
                return o >= t.length
                  ? { done: !0 }
                  : { done: !1, value: t[o++] }
              },
              e: function e(t) {
                throw t
              },
              f: c,
            }
          }
          throw new TypeError(
            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
          )
        }
        var l,
          y = !0,
          p = !1
        return {
          s: function s() {
            r = r.call(t)
          },
          n: function n() {
            var t = r.next()
            return (y = t.done), t
          },
          e: function e(t) {
            ;(p = !0), (l = t)
          },
          f: function f() {
            try {
              y || null == r.return || r.return()
            } finally {
              if (p) throw l
            }
          },
        }
      }
      var y = r(635),
        p = r(37),
        g = r(38),
        d = r(606),
        x = r.n(d),
        k = r(30),
        A = r.n(k),
        w = r(6),
        m = r.n(w),
        q = r(5),
        b = r.n(q),
        _ = r(649),
        C = r.n(_),
        T = {
          top: 'top',
          bottom: 'bottom',
          middle: 'middle',
          normal: 'alphabetic',
        },
        S = (function () {
          function CanvasContext(t, i) {
            Object(p.a)(this, CanvasContext),
              (this.actions = []),
              (this.canvas = t),
              (this.ctx = i)
          }
          var t
          return (
            Object(g.a)(CanvasContext, [
              {
                key: 'ctx',
                get: function get() {
                  return this.__raw__ || {}
                },
                set: function set(t) {
                  this.__raw__ = t
                },
              },
              {
                key: 'emptyActions',
                value: function emptyActions() {
                  this.actions.length = 0
                },
              },
              {
                key: 'enqueueActions',
                value: function enqueueActions(t) {
                  for (
                    var i = arguments.length,
                      r = new Array(i > 1 ? i - 1 : 0),
                      o = 1;
                    o < i;
                    o++
                  )
                    r[o - 1] = arguments[o]
                  this.actions.push({ func: t, args: r })
                },
              },
              {
                key: 'fillStyle',
                get: function get() {
                  return this.ctx.fillStyle
                },
                set: function set(t) {
                  var i = this
                  this.enqueueActions(function () {
                    i.ctx.fillStyle = t
                  })
                },
              },
              {
                key: 'font',
                get: function get() {
                  return this.ctx.font
                },
                set: function set(t) {
                  this.ctx.font = t
                },
              },
              {
                key: 'globalAlpha',
                get: function get() {
                  return this.ctx.globalAlpha
                },
                set: function set(t) {
                  var i = this
                  this.enqueueActions(function () {
                    i.ctx.globalAlpha = t
                  })
                },
              },
              {
                key: 'globalCompositeOperation',
                get: function get() {
                  return this.ctx.globalCompositeOperation
                },
                set: function set(t) {
                  var i = this
                  this.enqueueActions(function () {
                    i.ctx.globalCompositeOperation = t
                  })
                },
              },
              {
                key: 'lineCap',
                get: function get() {
                  return this.ctx.lineCap
                },
                set: function set(t) {
                  var i = this
                  this.enqueueActions(function () {
                    i.ctx.lineCap = t
                  })
                },
              },
              {
                key: 'lineDashOffset',
                get: function get() {
                  return this.ctx.lineDashOffset
                },
                set: function set(t) {
                  var i = this
                  this.enqueueActions(function () {
                    i.ctx.lineDashOffset = t
                  })
                },
              },
              {
                key: 'lineJoin',
                get: function get() {
                  return this.ctx.lineJoin
                },
                set: function set(t) {
                  var i = this
                  this.enqueueActions(function () {
                    i.ctx.lineJoin = t
                  })
                },
              },
              {
                key: 'lineWidth',
                get: function get() {
                  return this.ctx.lineWidth
                },
                set: function set(t) {
                  var i = this
                  this.enqueueActions(function () {
                    i.ctx.lineWidth = t
                  })
                },
              },
              {
                key: 'miterLimit',
                get: function get() {
                  return this.ctx.miterLimit
                },
                set: function set(t) {
                  var i = this
                  this.enqueueActions(function () {
                    i.ctx.miterLimit = t
                  })
                },
              },
              {
                key: 'shadowBlur',
                get: function get() {
                  return this.ctx.shadowBlur
                },
                set: function set(t) {
                  var i = this
                  this.enqueueActions(function () {
                    i.ctx.shadowBlur = t
                  })
                },
              },
              {
                key: 'shadowColor',
                get: function get() {
                  return this.ctx.shadowColor
                },
                set: function set(t) {
                  var i = this
                  this.enqueueActions(function () {
                    i.ctx.shadowColor = t
                  })
                },
              },
              {
                key: 'shadowOffsetX',
                get: function get() {
                  return this.ctx.shadowOffsetX
                },
                set: function set(t) {
                  var i = this
                  this.enqueueActions(function () {
                    i.ctx.shadowOffsetX = t
                  })
                },
              },
              {
                key: 'shadowOffsetY',
                get: function get() {
                  return this.ctx.shadowOffsetY
                },
                set: function set(t) {
                  var i = this
                  this.enqueueActions(function () {
                    i.ctx.shadowOffsetY = t
                  })
                },
              },
              {
                key: 'strokeStyle',
                get: function get() {
                  return this.ctx.strokeStyle
                },
                set: function set(t) {
                  var i = this
                  this.enqueueActions(function () {
                    i.ctx.strokeStyle = t
                  })
                },
              },
              {
                key: 'textAlign',
                get: function get() {
                  return this.ctx.textAlign
                },
                set: function set(t) {
                  this.ctx.textAlign = t
                },
              },
              {
                key: 'textBaseline',
                get: function get() {
                  return this.ctx.textBaseline
                },
                set: function set(t) {
                  this.ctx.textBaseline = t
                },
              },
              {
                key: 'direction',
                get: function get() {
                  return this.ctx.direction
                },
                set: function set(t) {
                  this.ctx.direction = t
                },
              },
              {
                key: 'imageSmoothingEnabled',
                get: function get() {
                  return this.ctx.imageSmoothingEnabled
                },
                set: function set(t) {
                  var i = this
                  this.enqueueActions(function () {
                    i.ctx.imageSmoothingEnabled = t
                  })
                },
              },
              {
                key: 'imageSmoothingQuality',
                get: function get() {
                  return this.ctx.imageSmoothingQuality
                },
                set: function set(t) {
                  var i = this
                  this.enqueueActions(function () {
                    i.ctx.imageSmoothingQuality = t
                  })
                },
              },
              {
                key: 'filter',
                get: function get() {
                  return A()(this.ctx)
                },
                set: function set(t) {
                  var i = this
                  this.enqueueActions(function () {
                    i.ctx.filter = t
                  })
                },
              },
              {
                key: 'arc',
                value: function arc() {
                  for (
                    var t, i = arguments.length, r = new Array(i), o = 0;
                    o < i;
                    o++
                  )
                    r[o] = arguments[o]
                  return this.enqueueActions.apply(
                    this,
                    m()((t = [this.ctx.arc])).call(t, r),
                  )
                },
              },
              {
                key: 'arcTo',
                value: function arcTo() {
                  for (
                    var t, i = arguments.length, r = new Array(i), o = 0;
                    o < i;
                    o++
                  )
                    r[o] = arguments[o]
                  return this.enqueueActions.apply(
                    this,
                    m()((t = [this.ctx.arcTo])).call(t, r),
                  )
                },
              },
              {
                key: 'beginPath',
                value: function beginPath() {
                  for (
                    var t, i = arguments.length, r = new Array(i), o = 0;
                    o < i;
                    o++
                  )
                    r[o] = arguments[o]
                  return this.enqueueActions.apply(
                    this,
                    m()((t = [this.ctx.beginPath])).call(t, r),
                  )
                },
              },
              {
                key: 'bezierCurveTo',
                value: function bezierCurveTo() {
                  for (
                    var t, i = arguments.length, r = new Array(i), o = 0;
                    o < i;
                    o++
                  )
                    r[o] = arguments[o]
                  return this.enqueueActions.apply(
                    this,
                    m()((t = [this.ctx.bezierCurveTo])).call(t, r),
                  )
                },
              },
              {
                key: 'clearRect',
                value: function clearRect() {
                  for (
                    var t, i = arguments.length, r = new Array(i), o = 0;
                    o < i;
                    o++
                  )
                    r[o] = arguments[o]
                  return this.enqueueActions.apply(
                    this,
                    m()((t = [this.ctx.clearRect])).call(t, r),
                  )
                },
              },
              {
                key: 'clip',
                value: function clip() {
                  for (
                    var t, i = arguments.length, r = new Array(i), o = 0;
                    o < i;
                    o++
                  )
                    r[o] = arguments[o]
                  return this.enqueueActions.apply(
                    this,
                    m()((t = [this.ctx.clip])).call(t, r),
                  )
                },
              },
              {
                key: 'closePath',
                value: function closePath() {
                  for (
                    var t, i = arguments.length, r = new Array(i), o = 0;
                    o < i;
                    o++
                  )
                    r[o] = arguments[o]
                  return this.enqueueActions.apply(
                    this,
                    m()((t = [this.ctx.closePath])).call(t, r),
                  )
                },
              },
              {
                key: 'createPattern',
                value: function createPattern(t, i) {
                  return this.createPattern(t, i)
                },
              },
              {
                key: 'draw',
                value:
                  ((t = Object(y.a)(
                    x.a.mark(function _callee(t, i) {
                      var r, o, a, c, u
                      return x.a.wrap(
                        function _callee$(l) {
                          for (;;)
                            switch ((l.prev = l.next)) {
                              case 0:
                                ;(l.prev = 0),
                                  t ||
                                    this.ctx.clearRect(
                                      0,
                                      0,
                                      this.canvas.width,
                                      this.canvas.height,
                                    ),
                                  (r = _createForOfIteratorHelper(
                                    this.actions,
                                  )),
                                  (l.prev = 3),
                                  r.s()
                              case 5:
                                if ((o = r.n()).done) {
                                  l.next = 11
                                  break
                                }
                                return (
                                  (a = o.value),
                                  (c = a.func),
                                  (u = a.args),
                                  (l.next = 9),
                                  c.apply(this.ctx, u)
                                )
                              case 9:
                                l.next = 5
                                break
                              case 11:
                                l.next = 16
                                break
                              case 13:
                                ;(l.prev = 13), (l.t0 = l.catch(3)), r.e(l.t0)
                              case 16:
                                return (l.prev = 16), r.f(), l.finish(16)
                              case 19:
                                this.emptyActions(), i && i(), (l.next = 26)
                                break
                              case 23:
                                throw (
                                  ((l.prev = 23),
                                  (l.t1 = l.catch(0)),
                                  { errMsg: l.t1.message })
                                )
                              case 26:
                              case 'end':
                                return l.stop()
                            }
                        },
                        _callee,
                        this,
                        [
                          [0, 23],
                          [3, 13, 16, 19],
                        ],
                      )
                    }),
                  )),
                  function draw(i, r) {
                    return t.apply(this, arguments)
                  }),
              },
              {
                key: 'drawImage',
                value: function drawImage(t) {
                  for (
                    var i = this,
                      r = arguments.length,
                      o = new Array(r > 1 ? r - 1 : 0),
                      a = 1;
                    a < r;
                    a++
                  )
                    o[a - 1] = arguments[a]
                  this.enqueueActions(function () {
                    var r, a
                    if ('string' == typeof t) {
                      var c = new Image()
                      return (
                        (c.src = t),
                        new b.a(function (t, r) {
                          ;(c.onload = function () {
                            var r, a
                            ;(r = i.ctx).drawImage.apply(
                              r,
                              m()((a = [c])).call(a, o),
                            ),
                              t()
                          }),
                            (c.onerror = r)
                        })
                      )
                    }
                    ;(r = i.ctx).drawImage.apply(r, m()((a = [t])).call(a, o))
                  })
                },
              },
              {
                key: 'fill',
                value: function fill() {
                  for (
                    var t, i = arguments.length, r = new Array(i), o = 0;
                    o < i;
                    o++
                  )
                    r[o] = arguments[o]
                  return this.enqueueActions.apply(
                    this,
                    m()((t = [C()(this.ctx)])).call(t, r),
                  )
                },
              },
              {
                key: 'fillRect',
                value: function fillRect() {
                  for (
                    var t, i = arguments.length, r = new Array(i), o = 0;
                    o < i;
                    o++
                  )
                    r[o] = arguments[o]
                  return this.enqueueActions.apply(
                    this,
                    m()((t = [this.ctx.fillRect])).call(t, r),
                  )
                },
              },
              {
                key: 'fillText',
                value: function fillText() {
                  for (
                    var t, i = arguments.length, r = new Array(i), o = 0;
                    o < i;
                    o++
                  )
                    r[o] = arguments[o]
                  return this.enqueueActions.apply(
                    this,
                    m()((t = [this.ctx.fillText])).call(t, r),
                  )
                },
              },
              {
                key: 'lineTo',
                value: function lineTo() {
                  for (
                    var t, i = arguments.length, r = new Array(i), o = 0;
                    o < i;
                    o++
                  )
                    r[o] = arguments[o]
                  return this.enqueueActions.apply(
                    this,
                    m()((t = [this.ctx.lineTo])).call(t, r),
                  )
                },
              },
              {
                key: 'moveTo',
                value: function moveTo() {
                  for (
                    var t, i = arguments.length, r = new Array(i), o = 0;
                    o < i;
                    o++
                  )
                    r[o] = arguments[o]
                  return this.enqueueActions.apply(
                    this,
                    m()((t = [this.ctx.moveTo])).call(t, r),
                  )
                },
              },
              {
                key: 'quadraticCurveTo',
                value: function quadraticCurveTo() {
                  for (
                    var t, i = arguments.length, r = new Array(i), o = 0;
                    o < i;
                    o++
                  )
                    r[o] = arguments[o]
                  return this.enqueueActions.apply(
                    this,
                    m()((t = [this.ctx.quadraticCurveTo])).call(t, r),
                  )
                },
              },
              {
                key: 'rect',
                value: function rect() {
                  for (
                    var t, i = arguments.length, r = new Array(i), o = 0;
                    o < i;
                    o++
                  )
                    r[o] = arguments[o]
                  return this.enqueueActions.apply(
                    this,
                    m()((t = [this.ctx.rect])).call(t, r),
                  )
                },
              },
              {
                key: 'restore',
                value: function restore() {
                  for (
                    var t, i = arguments.length, r = new Array(i), o = 0;
                    o < i;
                    o++
                  )
                    r[o] = arguments[o]
                  return this.enqueueActions.apply(
                    this,
                    m()((t = [this.ctx.restore])).call(t, r),
                  )
                },
              },
              {
                key: 'rotate',
                value: function rotate() {
                  for (
                    var t, i = arguments.length, r = new Array(i), o = 0;
                    o < i;
                    o++
                  )
                    r[o] = arguments[o]
                  return this.enqueueActions.apply(
                    this,
                    m()((t = [this.ctx.rotate])).call(t, r),
                  )
                },
              },
              {
                key: 'save',
                value: function save() {
                  for (
                    var t, i = arguments.length, r = new Array(i), o = 0;
                    o < i;
                    o++
                  )
                    r[o] = arguments[o]
                  return this.enqueueActions.apply(
                    this,
                    m()((t = [this.ctx.save])).call(t, r),
                  )
                },
              },
              {
                key: 'scale',
                value: function scale() {
                  for (
                    var t, i = arguments.length, r = new Array(i), o = 0;
                    o < i;
                    o++
                  )
                    r[o] = arguments[o]
                  return this.enqueueActions.apply(
                    this,
                    m()((t = [this.ctx.scale])).call(t, r),
                  )
                },
              },
              {
                key: 'setFillStyle',
                value: function setFillStyle(t) {
                  var i = this
                  this.enqueueActions(function () {
                    i.ctx.fillStyle = t
                  })
                },
              },
              {
                key: 'setFontSize',
                value: function setFontSize(t) {
                  this.font = ''.concat(t, 'px')
                },
              },
              {
                key: 'setGlobalAlpha',
                value: function setGlobalAlpha(t) {
                  this.globalAlpha = t
                },
              },
              {
                key: 'setLineCap',
                value: function setLineCap(t) {
                  this.lineCap = t
                },
              },
              {
                key: 'setLineDash',
                value: function setLineDash(t, i) {
                  var r = this
                  this.enqueueActions(function () {
                    r.ctx.setLineDash(t), (r.ctx.lineDashOffset = i)
                  })
                },
              },
              {
                key: 'setLineJoin',
                value: function setLineJoin(t) {
                  this.lineJoin = t
                },
              },
              {
                key: 'setLineWidth',
                value: function setLineWidth(t) {
                  this.lineWidth = t
                },
              },
              {
                key: 'setMiterLimit',
                value: function setMiterLimit(t) {
                  this.miterLimit = t
                },
              },
              {
                key: 'setShadow',
                value: function setShadow(t, i, r, o) {
                  var a = this
                  this.enqueueActions(function () {
                    ;(a.ctx.shadowOffsetX = t),
                      (a.ctx.shadowOffsetY = i),
                      (a.ctx.shadowColor = o),
                      (a.ctx.shadowBlur = r)
                  })
                },
              },
              {
                key: 'setStrokeStyle',
                value: function setStrokeStyle(t) {
                  var i = this
                  this.enqueueActions(function () {
                    i.ctx.strokeStyle = t
                  })
                },
              },
              {
                key: 'setTextAlign',
                value: function setTextAlign(t) {
                  this.textAlign = t
                },
              },
              {
                key: 'setTextBaseline',
                value: function setTextBaseline(t) {
                  this.textBaseline = T[t] || 'alphabetic'
                },
              },
              {
                key: 'setTransform',
                value: function setTransform() {
                  for (
                    var t, i = arguments.length, r = new Array(i), o = 0;
                    o < i;
                    o++
                  )
                    r[o] = arguments[o]
                  return this.enqueueActions.apply(
                    this,
                    m()((t = [this.ctx.setTransform])).call(t, r),
                  )
                },
              },
              {
                key: 'stroke',
                value: function stroke() {
                  for (
                    var t, i = arguments.length, r = new Array(i), o = 0;
                    o < i;
                    o++
                  )
                    r[o] = arguments[o]
                  return this.enqueueActions.apply(
                    this,
                    m()((t = [this.ctx.stroke])).call(t, r),
                  )
                },
              },
              {
                key: 'strokeRect',
                value: function strokeRect() {
                  for (
                    var t, i = arguments.length, r = new Array(i), o = 0;
                    o < i;
                    o++
                  )
                    r[o] = arguments[o]
                  return this.enqueueActions.apply(
                    this,
                    m()((t = [this.ctx.strokeRect])).call(t, r),
                  )
                },
              },
              {
                key: 'strokeText',
                value: function strokeText() {
                  for (
                    var t, i = arguments.length, r = new Array(i), o = 0;
                    o < i;
                    o++
                  )
                    r[o] = arguments[o]
                  return this.enqueueActions.apply(
                    this,
                    m()((t = [this.ctx.strokeText])).call(t, r),
                  )
                },
              },
              {
                key: 'transform',
                value: function transform() {
                  for (
                    var t, i = arguments.length, r = new Array(i), o = 0;
                    o < i;
                    o++
                  )
                    r[o] = arguments[o]
                  return this.enqueueActions.apply(
                    this,
                    m()((t = [this.ctx.transform])).call(t, r),
                  )
                },
              },
              {
                key: 'translate',
                value: function translate() {
                  for (
                    var t, i = arguments.length, r = new Array(i), o = 0;
                    o < i;
                    o++
                  )
                    r[o] = arguments[o]
                  return this.enqueueActions.apply(
                    this,
                    m()((t = [this.ctx.translate])).call(t, r),
                  )
                },
              },
              {
                key: 'measureText',
                value: function measureText(t) {
                  return this.ctx.measureText(t)
                },
              },
              {
                key: 'createCircularGradient',
                value: function createCircularGradient(t, i, r) {
                  return this.ctx.createRadialGradient(t, i, 0, t, i, r)
                },
              },
              {
                key: 'createLinearGradient',
                value: function createLinearGradient(t, i, r, o) {
                  return this.createLinearGradient(t, i, r, o)
                },
              },
            ]),
            CanvasContext
          )
        })()
    },
    895: function (t, i, r) {
      'use strict'
      r.d(i, 'a', function () {
        return k
      })
      var o = r(16),
        a = r(37),
        c = r(38),
        u = r(0),
        l = r.n(u),
        h = r(26),
        v = r.n(h),
        y = r(9),
        p = r.n(y),
        g = r(716),
        d = (function () {
          function NodesRef(t, i, r) {
            Object(a.a)(this, NodesRef),
              (this._component = i._component),
              (this._selector = t),
              (this._selectorQuery = i),
              (this._single = r)
          }
          return (
            Object(c.a)(NodesRef, [
              {
                key: 'context',
                value: function context(t) {
                  var i = this._selector,
                    r = this._component,
                    o = this._single,
                    a = this._selectorQuery
                  return a._push(i, r, o, { context: !0 }, t), a
                },
              },
              {
                key: 'node',
                value: function node(t) {
                  var i = this._selector,
                    r = this._component,
                    o = this._single,
                    a = this._selectorQuery
                  return (
                    a._push(i, r, o, { nodeCanvasType: !0, node: !0 }, t), a
                  )
                },
              },
              {
                key: 'boundingClientRect',
                value: function boundingClientRect(t) {
                  var i = this._selector,
                    r = this._component,
                    o = this._single,
                    a = this._selectorQuery
                  return (
                    a._push(
                      i,
                      r,
                      o,
                      { id: !0, dataset: !0, rect: !0, size: !0 },
                      t,
                    ),
                    a
                  )
                },
              },
              {
                key: 'scrollOffset',
                value: function scrollOffset(t) {
                  var i = this._selector,
                    r = this._component,
                    o = this._single,
                    a = this._selectorQuery
                  return (
                    a._push(
                      i,
                      r,
                      o,
                      { id: !0, dataset: !0, scrollOffset: !0 },
                      t,
                    ),
                    a
                  )
                },
              },
              {
                key: 'fields',
                value: function fields(t, i) {
                  var r = this._selector,
                    o = this._component,
                    a = this._single,
                    c = this._selectorQuery,
                    u = t.id,
                    l = t.dataset,
                    h = t.rect,
                    v = t.size,
                    y = t.scrollOffset,
                    p = t.properties,
                    g = void 0 === p ? [] : p,
                    d = t.computedStyle,
                    x = void 0 === d ? [] : d
                  return (
                    c._push(
                      r,
                      o,
                      a,
                      {
                        id: u,
                        dataset: l,
                        rect: h,
                        size: v,
                        scrollOffset: y,
                        properties: g,
                        computedStyle: x,
                      },
                      i,
                    ),
                    c
                  )
                },
              },
            ]),
            NodesRef
          )
        })()
      function filter(t, i, r) {
        if (!i) return null
        var o = '.taro_page' === r,
          a = t.id,
          c = t.dataset,
          u = t.rect,
          h = t.size,
          y = t.scrollOffset,
          p = t.properties,
          d = void 0 === p ? [] : p,
          x = t.computedStyle,
          k = void 0 === x ? [] : x,
          A = t.nodeCanvasType,
          w = t.node,
          m = t.context,
          q = {}
        if (A && w) {
          var b = i.tagName
          if (
            ((q.node = { id: i.id, $taroElement: i }),
            /^taro-canvas-core/i.test(b))
          ) {
            var _ = i.type || ''
            q.nodeCanvasType = _
            var C = i.getElementsByTagName('canvas')[0]
            ;/^(2d|webgl)/i.test(_) && C ? (q.node = C) : (q.node = null)
          } else (q.nodeCanvasType = ''), (q.node = i)
          return q
        }
        if (!m) {
          if (
            (a && (q.id = i.id), c && (q.dataset = l()({}, i.dataset)), u || h)
          ) {
            var T = i.getBoundingClientRect(),
              S = T.left,
              O = T.right,
              L = T.top,
              R = T.bottom,
              Q = T.width,
              B = T.height
            u &&
              (o
                ? ((q.left = 0), (q.right = 0), (q.top = 0), (q.bottom = 0))
                : ((q.left = S), (q.right = O), (q.top = L), (q.bottom = R))),
              h &&
                (o
                  ? ((q.width = i.clientWidth), (q.height = i.clientHeight))
                  : ((q.width = Q), (q.height = B)))
          }
          if (
            (y && ((q.scrollLeft = i.scrollLeft), (q.scrollTop = i.scrollTop)),
            d.length &&
              v()(d).call(d, function (t) {
                var r = i.getAttribute(t)
                r && (q[t] = r)
              }),
            k.length)
          ) {
            var j = window.getComputedStyle(i)
            v()(k).call(k, function (t) {
              var i = j.getPropertyValue(t) || j[t]
              i && (q[t] = i)
            })
          }
          return q
        }
        var I = i.tagName
        if (/^taro-video-core/i.test(I)) return { context: i }
        if (/^taro-canvas-core/i.test(I)) {
          var N = i.type || '2d',
            P = null == i ? void 0 : i.querySelector('canvas'),
            z = null == P ? void 0 : P.getContext(N)
          return { context: new g.a(P, z) }
        }
        ;/^taro-live-player-core/i.test(I)
          ? console.error(
              '暂时不支持通过 NodesRef.context 获取 LivePlayerContext',
            )
          : /^taro-editor-core/i.test(I)
          ? console.error('暂时不支持通过 NodesRef.context 获取 EditorContext')
          : /^taro-map-core/i.test(I) &&
            console.error('暂时不支持通过 NodesRef.context 获取 MapContext')
      }
      var x = (function () {
          function SelectorQuery() {
            Object(a.a)(this, SelectorQuery),
              (this._defaultWebviewId = null),
              (this._webviewId = null),
              (this._queue = []),
              (this._queueCb = []),
              this._component
          }
          return (
            Object(c.a)(SelectorQuery, [
              {
                key: 'in',
                value: function _in(t) {
                  return (this._component = t), this
                },
              },
              {
                key: 'select',
                value: function select(t) {
                  return (
                    'string' == typeof t && (t = t.replace('>>>', '>')),
                    new d(t, this, !0)
                  )
                },
              },
              {
                key: 'selectAll',
                value: function selectAll(t) {
                  return (
                    'string' == typeof t && (t = t.replace('>>>', '>')),
                    new d(t, this, !1)
                  )
                },
              },
              {
                key: 'selectViewport',
                value: function selectViewport() {
                  return new d('.taro_page', this, !0)
                },
              },
              {
                key: 'exec',
                value: function exec(t) {
                  var i = this
                  return (
                    (function queryBat(t, i) {
                      var r = []
                      v()(t).call(t, function (t) {
                        var i,
                          a = t.selector,
                          c = t.single,
                          u = t.fields,
                          l = t.component,
                          h = (null !== l && Object(o.b)(l)) || document,
                          v = !1
                        if (h !== document) {
                          var y =
                            null === (i = h.parentNode) || void 0 === i
                              ? void 0
                              : i.querySelectorAll(a)
                          if (y)
                            for (var g = 0, d = y.length; g < d; ++g)
                              if (h === y[g]) {
                                v = !0
                                break
                              }
                        }
                        if (c) {
                          var x = !0 === v ? h : h.querySelector(a)
                          r.push(filter(u, x, a))
                        } else {
                          var k = h.querySelectorAll(a),
                            A = []
                          !0 === v && A.push(h)
                          for (var w = 0, m = k.length; w < m; ++w) A.push(k[w])
                          r.push(
                            p()(A).call(A, function (t) {
                              return filter(u, t)
                            }),
                          )
                        }
                      }),
                        i(r)
                    })(this._queue, function (r) {
                      var o = i._queueCb
                      v()(r).call(r, function (t, r) {
                        var a = o[r]
                        'function' == typeof a && a.call(i, t)
                      }),
                        'function' == typeof t && t.call(i, r)
                    }),
                    this
                  )
                },
              },
              {
                key: '_push',
                value: function _push(t, i, r, o) {
                  var a =
                    arguments.length > 4 && void 0 !== arguments[4]
                      ? arguments[4]
                      : null
                  this._queue.push({
                    component: i,
                    selector: t,
                    single: r,
                    fields: o,
                  }),
                    this._queueCb.push(a)
                },
              },
            ]),
            SelectorQuery
          )
        })(),
        k = function createSelectorQuery() {
          return new x()
        }
      Object(o.j)('createIntersectionObserver')
    },
  },
])
