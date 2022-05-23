;(window.webpackJsonp = window.webpackJsonp || []).push([
  [120],
  {
    506: function (t, i, n) {
      'use strict'
      n.r(i),
        n.d(i, 'taro_slider_core', function () {
          return h
        })
      var a = n(52),
        o = n.n(a),
        r = n(138),
        h = (function () {
          function e(t) {
            var i = this
            Object(r.g)(this, t),
              (this.onChange = Object(r.c)(this, 'change', 7)),
              (this.onChanging = Object(r.c)(this, 'changing', 7)),
              (this.min = 0),
              (this.max = 100),
              (this.step = 1),
              (this.disabled = !1),
              (this.value = 0),
              (this.activeColor = '#1aad19'),
              (this.backgroundColor = '#e9e9e9'),
              (this.blockSize = 28),
              (this.blockColor = '#ffffff'),
              (this.showValue = !1),
              (this.name = ''),
              (this.totalWidth = 0),
              (this.touching = !1),
              (this.ogX = 0),
              (this.touchId = null),
              (this.percent = 0),
              (this.isWillLoadCalled = !1),
              (this.handleTouchStart = function (t) {
                i.touching ||
                  i.disabled ||
                  ((i.touching = !0),
                  (i.touchId = t.targetTouches[0].identifier),
                  (i.totalWidth = i.sliderInsRef.clientWidth),
                  (i.ogX = t.targetTouches[0].pageX),
                  (i.ogPercent = i.percent))
              }),
              (this.handleTouchMove = function (t) {
                var n = i,
                  a = n.disabled,
                  o = n.touching,
                  r = n.touchId,
                  h = n.totalWidth,
                  l = n.max,
                  s = n.min,
                  c = n.ogX,
                  u = n.ogPercent
                if (o && !a && t.targetTouches[0].identifier === r) {
                  t.preventDefault()
                  var d = ((t.targetTouches[0].pageX - c) / h) * 100 + u,
                    f = s + 0.01 * (d = Math.max(0, Math.min(d, 100))) * (l - s)
                  i.updateByStep(f),
                    i.onChanging.emit({ detail: t.detail, value: i.val })
                }
              }),
              (this.handleTouchEnd = function (t) {
                var n = i,
                  a = n.disabled
                n.touching &&
                  !a &&
                  (i.percent !== i.ogPercent &&
                    i.onChange.emit({ detail: t.detail, value: i.val }),
                  (i.touching = !1),
                  (i.touchId = null),
                  (i.ogX = 0),
                  (i.ogPercent = 0))
              })
          }
          return (
            (e.prototype.function = function (t) {
              if (this.isWillLoadCalled) {
                var i = this.max,
                  n = this.min
                if (null !== t && t !== this.val) {
                  var a = Math.max(n, Math.min(t, i))
                  this.updateByStep(a)
                }
              }
            }),
            (e.prototype.componentDidLoad = function () {
              var t = this
              o()(this.el, 'value', {
                get: function get() {
                  return t.val
                },
                set: function set(i) {
                  return (t.value = i)
                },
                configurable: !0,
              }),
                this.handler.addEventListener(
                  'touchstart',
                  this.handleTouchStart,
                ),
                this.handler.addEventListener(
                  'touchmove',
                  this.handleTouchMove,
                ),
                this.handler.addEventListener('touchend', this.handleTouchEnd)
            }),
            (e.prototype.componentDidUpdate = function () {
              this.value = null
            }),
            (e.prototype.componentWillLoad = function () {
              this.isWillLoadCalled = !0
              var t = this,
                i = t.value,
                n = t.max,
                a = t.min
              if (null !== i) {
                var o = Math.max(a, Math.min(i, n))
                this.updateByStep(o)
              }
            }),
            (e.prototype.updateByStep = function (t) {
              for (
                var i = this,
                  n = i.max,
                  a = i.min,
                  o = i.step,
                  r = Math.floor((n - a) / o),
                  h = 0;
                h <= r;
                h++
              ) {
                var l = a + o * h,
                  s = h === r ? null : a + o * (h + 1)
                if (t === l) break
                if ((!s && t > l && (t = l), s && t > l && t < s)) {
                  t = t - l < o / 2 ? l : s
                  break
                }
              }
              var c = ((t - a) / (n - a)) * 100
              ;(this.val = t), (this.percent = c)
            }),
            (e.prototype.render = function () {
              var t = this,
                i = this,
                n = i.showValue,
                a = i.backgroundColor,
                o = i.activeColor,
                h = i.blockColor,
                l = i.name,
                s = i.percent,
                c = i.val,
                u = this.blockSize,
                d = { backgroundColor: a },
                f = s > 100 ? 100 : s,
                p = { width: f + '%', backgroundColor: o }
              u < 12 && (u = 12), u > 28 && (u = 28)
              var g = {
                left: f + '%',
                width: u + 'px',
                height: u + 'px',
                backgroundColor: h,
                marginTop: '-' + Math.floor(u / 2) + 'px',
                marginLeft: '-' + Math.floor(u / 2) + 'px',
              }
              return Object(r.e)(
                r.a,
                { class: 'weui-slider-box' },
                Object(r.e)(
                  'div',
                  { class: 'weui-slider' },
                  Object(r.e)(
                    'div',
                    {
                      class: 'weui-slider__inner',
                      style: d,
                      ref: function ref(i) {
                        return (t.sliderInsRef = i)
                      },
                    },
                    Object(r.e)('div', {
                      style: p,
                      class: 'weui-slider__track',
                    }),
                    Object(r.e)('div', {
                      class: 'weui-slider__handler',
                      ref: function ref(i) {
                        i && (t.handler = i)
                      },
                      style: g,
                    }),
                    Object(r.e)('input', { type: 'hidden', name: l, value: c }),
                  ),
                ),
                n && Object(r.e)('div', { class: 'weui-slider-box__value' }, c),
              )
            }),
            o()(e.prototype, 'el', {
              get: function get() {
                return Object(r.d)(this)
              },
              enumerable: !1,
              configurable: !0,
            }),
            o()(e, 'watchers', {
              get: function get() {
                return { value: ['function'] }
              },
              enumerable: !1,
              configurable: !0,
            }),
            e
          )
        })()
    },
  },
])
