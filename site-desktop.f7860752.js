/*! For license information please see site-desktop.f7860752.js.LICENSE.txt */
;(() => {
  var e,
    t = {
      6252: (e, t, n) => {
        'use strict'
        n.d(t, {
          P$: () => w,
          HY: () => je,
          $d: () => bt,
          j4: () => Be,
          kq: () => Ye,
          iD: () => Me,
          _: () => Ge,
          Us: () => we,
          Uk: () => Qe,
          Wm: () => Ke,
          aZ: () => I,
          FN: () => ut,
          Q6: () => E,
          h: () => Kt,
          f3: () => b,
          Y3: () => Ft,
          ic: () => B,
          wg: () => Ne,
          Cn: () => p,
          JJ: () => y,
          dD: () => d,
          Ko: () => tt,
          WI: () => nt,
          up: () => De,
          U2: () => k,
          nK: () => D,
          Y8: () => _,
          YP: () => Zt,
          w5: () => f,
          wy: () => ge,
        })
        var r = n(2262),
          o = n(3577)
        function a(e, t, ...n) {
          const r = e.vnode.props || o.kT
          let a = n
          const i = t.startsWith('update:'),
            c = i && t.slice(7)
          if (c && c in r) {
            const e = `${'modelValue' === c ? 'model' : c}Modifiers`,
              { number: t, trim: i } = r[e] || o.kT
            i ? (a = n.map((e) => e.trim())) : t && (a = n.map(o.He))
          }
          let l,
            s = r[(l = (0, o.hR)(t))] || r[(l = (0, o.hR)((0, o._A)(t)))]
          !s && i && (s = r[(l = (0, o.hR)((0, o.rs)(t)))]), s && bt(s, e, 6, a)
          const u = r[l + 'Once']
          if (u) {
            if (e.emitted) {
              if (e.emitted[l]) return
            } else e.emitted = {}
            ;(e.emitted[l] = !0), bt(u, e, 6, a)
          }
        }
        function i(e, t, n = !1) {
          const r = t.emitsCache,
            a = r.get(e)
          if (void 0 !== a) return a
          const c = e.emits
          let l = {},
            s = !1
          if (!(0, o.mf)(e)) {
            const r = (e) => {
              const n = i(e, t, !0)
              n && ((s = !0), (0, o.l7)(l, n))
            }
            !n && t.mixins.length && t.mixins.forEach(r),
              e.extends && r(e.extends),
              e.mixins && e.mixins.forEach(r)
          }
          return c || s
            ? ((0, o.kJ)(c) ? c.forEach((e) => (l[e] = null)) : (0, o.l7)(l, c),
              r.set(e, l),
              l)
            : (r.set(e, null), null)
        }
        function c(e, t) {
          return (
            !(!e || !(0, o.F7)(t)) &&
            ((t = t.slice(2).replace(/Once$/, '')),
            (0, o.RI)(e, t[0].toLowerCase() + t.slice(1)) ||
              (0, o.RI)(e, (0, o.rs)(t)) ||
              (0, o.RI)(e, t))
          )
        }
        new Set(), new Map()
        let l = null,
          s = null
        function u(e) {
          const t = l
          return (l = e), (s = (e && e.type.__scopeId) || null), t
        }
        function d(e) {
          s = e
        }
        function p() {
          s = null
        }
        function f(e, t = l, n) {
          if (!t) return e
          if (e._n) return e
          const r = (...n) => {
            r._d && Re(-1)
            const o = u(t),
              a = e(...n)
            return u(o), r._d && Re(1), a
          }
          return (r._n = !0), (r._c = !0), (r._d = !0), r
        }
        function h(e) {
          const {
            type: t,
            vnode: n,
            proxy: r,
            withProxy: a,
            props: i,
            propsOptions: [c],
            slots: l,
            attrs: s,
            emit: d,
            render: p,
            renderCache: f,
            data: h,
            setupState: v,
            ctx: y,
            inheritAttrs: b,
          } = e
          let _, S
          const w = u(e)
          try {
            if (4 & n.shapeFlag) {
              const e = a || r
              ;(_ = $e(p.call(e, e, f, i, v, h, y))), (S = s)
            } else {
              const e = t
              ;(_ = $e(
                e.length > 1
                  ? e(i, { attrs: s, slots: l, emit: d })
                  : e(i, null),
              )),
                (S = t.props ? s : m(s))
            }
          } catch (t) {
            ;(Fe.length = 0), _t(t, e, 1), (_ = Ke(Ae))
          }
          let x = _
          if (S && !1 !== b) {
            const e = Object.keys(S),
              { shapeFlag: t } = x
            e.length &&
              7 & t &&
              (c && e.some(o.tR) && (S = g(S, c)), (x = Je(x, S)))
          }
          return (
            n.dirs && (x.dirs = x.dirs ? x.dirs.concat(n.dirs) : n.dirs),
            n.transition && (x.transition = n.transition),
            (_ = x),
            u(w),
            _
          )
        }
        const m = (e) => {
            let t
            for (const n in e)
              ('class' === n || 'style' === n || (0, o.F7)(n)) &&
                ((t || (t = {}))[n] = e[n])
            return t
          },
          g = (e, t) => {
            const n = {}
            for (const r in e)
              ((0, o.tR)(r) && r.slice(9) in t) || (n[r] = e[r])
            return n
          }
        function v(e, t, n) {
          const r = Object.keys(t)
          if (r.length !== Object.keys(e).length) return !0
          for (let o = 0; o < r.length; o++) {
            const a = r[o]
            if (t[a] !== e[a] && !c(n, a)) return !0
          }
          return !1
        }
        function y(e, t) {
          if (st) {
            let n = st.provides
            const r = st.parent && st.parent.provides
            r === n && (n = st.provides = Object.create(r)), (n[e] = t)
          }
        }
        function b(e, t, n = !1) {
          const r = st || l
          if (r) {
            const a =
              null == r.parent
                ? r.vnode.appContext && r.vnode.appContext.provides
                : r.parent.provides
            if (a && e in a) return a[e]
            if (arguments.length > 1)
              return n && (0, o.mf)(t) ? t.call(r.proxy) : t
          }
        }
        function _() {
          const e = {
            isMounted: !1,
            isLeaving: !1,
            isUnmounting: !1,
            leavingVNodes: new Map(),
          }
          return (
            H(() => {
              e.isMounted = !0
            }),
            V(() => {
              e.isUnmounting = !0
            }),
            e
          )
        }
        const S = [Function, Array],
          w = {
            name: 'BaseTransition',
            props: {
              mode: String,
              appear: Boolean,
              persisted: Boolean,
              onBeforeEnter: S,
              onEnter: S,
              onAfterEnter: S,
              onEnterCancelled: S,
              onBeforeLeave: S,
              onLeave: S,
              onAfterLeave: S,
              onLeaveCancelled: S,
              onBeforeAppear: S,
              onAppear: S,
              onAfterAppear: S,
              onAppearCancelled: S,
            },
            setup(e, { slots: t }) {
              const n = ut(),
                o = _()
              let a
              return () => {
                const i = t.default && E(t.default(), !0)
                if (!i || !i.length) return
                const c = (0, r.IU)(e),
                  { mode: l } = c,
                  s = i[0]
                if (o.isLeaving) return O(s)
                const u = C(s)
                if (!u) return O(s)
                const d = k(u, c, o, n)
                D(u, d)
                const p = n.subTree,
                  f = p && C(p)
                let h = !1
                const { getTransitionKey: m } = u.type
                if (m) {
                  const e = m()
                  void 0 === a ? (a = e) : e !== a && ((a = e), (h = !0))
                }
                if (f && f.type !== Ae && (!Ze(u, f) || h)) {
                  const e = k(f, c, o, n)
                  if ((D(f, e), 'out-in' === l))
                    return (
                      (o.isLeaving = !0),
                      (e.afterLeave = () => {
                        ;(o.isLeaving = !1), n.update()
                      }),
                      O(s)
                    )
                  'in-out' === l &&
                    u.type !== Ae &&
                    (e.delayLeave = (e, t, n) => {
                      ;(x(o, f)[String(f.key)] = f),
                        (e._leaveCb = () => {
                          t(), (e._leaveCb = void 0), delete d.delayedLeave
                        }),
                        (d.delayedLeave = n)
                    })
                }
                return s
              }
            },
          }
        function x(e, t) {
          const { leavingVNodes: n } = e
          let r = n.get(t.type)
          return r || ((r = Object.create(null)), n.set(t.type, r)), r
        }
        function k(e, t, n, r) {
          const {
              appear: o,
              mode: a,
              persisted: i = !1,
              onBeforeEnter: c,
              onEnter: l,
              onAfterEnter: s,
              onEnterCancelled: u,
              onBeforeLeave: d,
              onLeave: p,
              onAfterLeave: f,
              onLeaveCancelled: h,
              onBeforeAppear: m,
              onAppear: g,
              onAfterAppear: v,
              onAppearCancelled: y,
            } = t,
            b = String(e.key),
            _ = x(n, e),
            S = (e, t) => {
              e && bt(e, r, 9, t)
            },
            w = {
              mode: a,
              persisted: i,
              beforeEnter(t) {
                let r = c
                if (!n.isMounted) {
                  if (!o) return
                  r = m || c
                }
                t._leaveCb && t._leaveCb(!0)
                const a = _[b]
                a && Ze(e, a) && a.el._leaveCb && a.el._leaveCb(), S(r, [t])
              },
              enter(e) {
                let t = l,
                  r = s,
                  a = u
                if (!n.isMounted) {
                  if (!o) return
                  ;(t = g || l), (r = v || s), (a = y || u)
                }
                let i = !1
                const c = (e._enterCb = (t) => {
                  i ||
                    ((i = !0),
                    S(t ? a : r, [e]),
                    w.delayedLeave && w.delayedLeave(),
                    (e._enterCb = void 0))
                })
                t ? (t(e, c), t.length <= 1 && c()) : c()
              },
              leave(t, r) {
                const o = String(e.key)
                if ((t._enterCb && t._enterCb(!0), n.isUnmounting)) return r()
                S(d, [t])
                let a = !1
                const i = (t._leaveCb = (n) => {
                  a ||
                    ((a = !0),
                    r(),
                    S(n ? h : f, [t]),
                    (t._leaveCb = void 0),
                    _[o] === e && delete _[o])
                })
                ;(_[o] = e), p ? (p(t, i), p.length <= 1 && i()) : i()
              },
              clone: (e) => k(e, t, n, r),
            }
          return w
        }
        function O(e) {
          if (P(e)) return ((e = Je(e)).children = null), e
        }
        function C(e) {
          return P(e) ? (e.children ? e.children[0] : void 0) : e
        }
        function D(e, t) {
          6 & e.shapeFlag && e.component
            ? D(e.component.subTree, t)
            : 128 & e.shapeFlag
            ? ((e.ssContent.transition = t.clone(e.ssContent)),
              (e.ssFallback.transition = t.clone(e.ssFallback)))
            : (e.transition = t)
        }
        function E(e, t = !1) {
          let n = [],
            r = 0
          for (let o = 0; o < e.length; o++) {
            const a = e[o]
            a.type === je
              ? (128 & a.patchFlag && r++, (n = n.concat(E(a.children, t))))
              : (t || a.type !== Ae) && n.push(a)
          }
          if (r > 1) for (let e = 0; e < n.length; e++) n[e].patchFlag = -2
          return n
        }
        function I(e) {
          return (0, o.mf)(e) ? { setup: e, name: e.name } : e
        }
        const j = (e) => !!e.type.__asyncLoader,
          P = (e) => e.type.__isKeepAlive
        function A(e, t) {
          F(e, 'a', t)
        }
        function T(e, t) {
          F(e, 'da', t)
        }
        function F(e, t, n = st) {
          const r =
            e.__wdc ||
            (e.__wdc = () => {
              let t = n
              for (; t; ) {
                if (t.isDeactivated) return
                t = t.parent
              }
              e()
            })
          if ((N(t, r, n), n)) {
            let e = n.parent
            for (; e && e.parent; )
              P(e.parent.vnode) && U(r, t, n, e), (e = e.parent)
          }
        }
        function U(e, t, n, r) {
          const a = N(t, e, r, !0)
          Z(() => {
            ;(0, o.Od)(r[t], a)
          }, n)
        }
        function N(e, t, n = st, o = !1) {
          if (n) {
            const a = n[e] || (n[e] = []),
              i =
                t.__weh ||
                (t.__weh = (...o) => {
                  if (n.isUnmounted) return
                  ;(0, r.Jd)(), dt(n)
                  const a = bt(t, n, e, o)
                  return pt(), (0, r.lk)(), a
                })
            return o ? a.unshift(i) : a.push(i), i
          }
        }
        RegExp, RegExp
        const L =
            (e) =>
            (t, n = st) =>
              (!ht || 'sp' === e) && N(e, t, n),
          R = L('bm'),
          H = L('m'),
          M = L('bu'),
          B = L('u'),
          V = L('bum'),
          Z = L('um'),
          z = L('sp'),
          q = L('rtg'),
          W = L('rtc')
        function G(e, t = st) {
          N('ec', e, t)
        }
        let K = !0
        function J(e, t, n) {
          bt(
            (0, o.kJ)(e) ? e.map((e) => e.bind(t.proxy)) : e.bind(t.proxy),
            t,
            n,
          )
        }
        function Q(e, t, n, r) {
          const a = r.includes('.') ? Wt(n, r) : () => n[r]
          if ((0, o.HD)(e)) {
            const n = t[e]
            ;(0, o.mf)(n) && Zt(a, n)
          } else if ((0, o.mf)(e)) Zt(a, e.bind(n))
          else if ((0, o.Kn)(e))
            if ((0, o.kJ)(e)) e.forEach((e) => Q(e, t, n, r))
            else {
              const r = (0, o.mf)(e.handler) ? e.handler.bind(n) : t[e.handler]
              ;(0, o.mf)(r) && Zt(a, r, e)
            }
        }
        function Y(e) {
          const t = e.type,
            { mixins: n, extends: r } = t,
            {
              mixins: o,
              optionsCache: a,
              config: { optionMergeStrategies: i },
            } = e.appContext,
            c = a.get(t)
          let l
          return (
            c
              ? (l = c)
              : o.length || n || r
              ? ((l = {}),
                o.length && o.forEach((e) => $(l, e, i, !0)),
                $(l, t, i))
              : (l = t),
            a.set(t, l),
            l
          )
        }
        function $(e, t, n, r = !1) {
          const { mixins: o, extends: a } = t
          a && $(e, a, n, !0), o && o.forEach((t) => $(e, t, n, !0))
          for (const o in t)
            if (r && 'expose' === o);
            else {
              const r = X[o] || (n && n[o])
              e[o] = r ? r(e[o], t[o]) : t[o]
            }
          return e
        }
        const X = {
          data: ee,
          props: re,
          emits: re,
          methods: re,
          computed: re,
          beforeCreate: ne,
          created: ne,
          beforeMount: ne,
          mounted: ne,
          beforeUpdate: ne,
          updated: ne,
          beforeDestroy: ne,
          beforeUnmount: ne,
          destroyed: ne,
          unmounted: ne,
          activated: ne,
          deactivated: ne,
          errorCaptured: ne,
          serverPrefetch: ne,
          components: re,
          directives: re,
          watch: function (e, t) {
            if (!e) return t
            if (!t) return e
            const n = (0, o.l7)(Object.create(null), e)
            for (const r in t) n[r] = ne(e[r], t[r])
            return n
          },
          provide: ee,
          inject: function (e, t) {
            return re(te(e), te(t))
          },
        }
        function ee(e, t) {
          return t
            ? e
              ? function () {
                  return (0, o.l7)(
                    (0, o.mf)(e) ? e.call(this, this) : e,
                    (0, o.mf)(t) ? t.call(this, this) : t,
                  )
                }
              : t
            : e
        }
        function te(e) {
          if ((0, o.kJ)(e)) {
            const t = {}
            for (let n = 0; n < e.length; n++) t[e[n]] = e[n]
            return t
          }
          return e
        }
        function ne(e, t) {
          return e ? [...new Set([].concat(e, t))] : t
        }
        function re(e, t) {
          return e ? (0, o.l7)((0, o.l7)(Object.create(null), e), t) : t
        }
        function oe(e, t, n, a) {
          const [i, l] = e.propsOptions
          let s,
            u = !1
          if (t)
            for (let r in t) {
              if ((0, o.Gg)(r)) continue
              const d = t[r]
              let p
              i && (0, o.RI)(i, (p = (0, o._A)(r)))
                ? l && l.includes(p)
                  ? ((s || (s = {}))[p] = d)
                  : (n[p] = d)
                : c(e.emitsOptions, r) || (d !== a[r] && ((a[r] = d), (u = !0)))
            }
          if (l) {
            const t = (0, r.IU)(n),
              a = s || o.kT
            for (let r = 0; r < l.length; r++) {
              const c = l[r]
              n[c] = ae(i, t, c, a[c], e, !(0, o.RI)(a, c))
            }
          }
          return u
        }
        function ae(e, t, n, r, a, i) {
          const c = e[n]
          if (null != c) {
            const e = (0, o.RI)(c, 'default')
            if (e && void 0 === r) {
              const e = c.default
              if (c.type !== Function && (0, o.mf)(e)) {
                const { propsDefaults: o } = a
                n in o
                  ? (r = o[n])
                  : (dt(a), (r = o[n] = e.call(null, t)), pt())
              } else r = e
            }
            c[0] &&
              (i && !e
                ? (r = !1)
                : !c[1] || ('' !== r && r !== (0, o.rs)(n)) || (r = !0))
          }
          return r
        }
        function ie(e, t, n = !1) {
          const r = t.propsCache,
            a = r.get(e)
          if (a) return a
          const i = e.props,
            c = {},
            l = []
          let s = !1
          if (!(0, o.mf)(e)) {
            const r = (e) => {
              s = !0
              const [n, r] = ie(e, t, !0)
              ;(0, o.l7)(c, n), r && l.push(...r)
            }
            !n && t.mixins.length && t.mixins.forEach(r),
              e.extends && r(e.extends),
              e.mixins && e.mixins.forEach(r)
          }
          if (!i && !s) return r.set(e, o.Z6), o.Z6
          if ((0, o.kJ)(i))
            for (let e = 0; e < i.length; e++) {
              const t = (0, o._A)(i[e])
              ce(t) && (c[t] = o.kT)
            }
          else if (i)
            for (const e in i) {
              const t = (0, o._A)(e)
              if (ce(t)) {
                const n = i[e],
                  r = (c[t] = (0, o.kJ)(n) || (0, o.mf)(n) ? { type: n } : n)
                if (r) {
                  const e = ue(Boolean, r.type),
                    n = ue(String, r.type)
                  ;(r[0] = e > -1),
                    (r[1] = n < 0 || e < n),
                    (e > -1 || (0, o.RI)(r, 'default')) && l.push(t)
                }
              }
            }
          const u = [c, l]
          return r.set(e, u), u
        }
        function ce(e) {
          return '$' !== e[0]
        }
        function le(e) {
          const t = e && e.toString().match(/^\s*function (\w+)/)
          return t ? t[1] : null === e ? 'null' : ''
        }
        function se(e, t) {
          return le(e) === le(t)
        }
        function ue(e, t) {
          return (0, o.kJ)(t)
            ? t.findIndex((t) => se(t, e))
            : (0, o.mf)(t) && se(t, e)
            ? 0
            : -1
        }
        const de = (e) => '_' === e[0] || '$stable' === e,
          pe = (e) => ((0, o.kJ)(e) ? e.map($e) : [$e(e)]),
          fe = (e, t, n) => {
            const r = f((...e) => pe(t(...e)), n)
            return (r._c = !1), r
          },
          he = (e, t, n) => {
            const r = e._ctx
            for (const n in e) {
              if (de(n)) continue
              const a = e[n]
              if ((0, o.mf)(a)) t[n] = fe(0, a, r)
              else if (null != a) {
                const e = pe(a)
                t[n] = () => e
              }
            }
          },
          me = (e, t) => {
            const n = pe(t)
            e.slots.default = () => n
          }
        function ge(e, t) {
          if (null === l) return e
          const n = l.proxy,
            r = e.dirs || (e.dirs = [])
          for (let e = 0; e < t.length; e++) {
            let [a, i, c, l = o.kT] = t[e]
            ;(0, o.mf)(a) && (a = { mounted: a, updated: a }),
              a.deep && Gt(i),
              r.push({
                dir: a,
                instance: n,
                value: i,
                oldValue: void 0,
                arg: c,
                modifiers: l,
              })
          }
          return e
        }
        function ve(e, t, n, o) {
          const a = e.dirs,
            i = t && t.dirs
          for (let c = 0; c < a.length; c++) {
            const l = a[c]
            i && (l.oldValue = i[c].value)
            let s = l.dir[o]
            s && ((0, r.Jd)(), bt(s, n, 8, [e.el, l, e, t]), (0, r.lk)())
          }
        }
        function ye() {
          return {
            app: null,
            config: {
              isNativeTag: o.NO,
              performance: !1,
              globalProperties: {},
              optionMergeStrategies: {},
              errorHandler: void 0,
              warnHandler: void 0,
              compilerOptions: {},
            },
            mixins: [],
            components: {},
            directives: {},
            provides: Object.create(null),
            optionsCache: new WeakMap(),
            propsCache: new WeakMap(),
            emitsCache: new WeakMap(),
          }
        }
        let be = 0
        function _e(e, t) {
          return function (n, r = null) {
            null == r || (0, o.Kn)(r) || (r = null)
            const a = ye(),
              i = new Set()
            let c = !1
            const l = (a.app = {
              _uid: be++,
              _component: n,
              _props: r,
              _container: null,
              _context: a,
              _instance: null,
              version: Jt,
              get config() {
                return a.config
              },
              set config(e) {},
              use: (e, ...t) => (
                i.has(e) ||
                  (e && (0, o.mf)(e.install)
                    ? (i.add(e), e.install(l, ...t))
                    : (0, o.mf)(e) && (i.add(e), e(l, ...t))),
                l
              ),
              mixin: (e) => (a.mixins.includes(e) || a.mixins.push(e), l),
              component: (e, t) =>
                t ? ((a.components[e] = t), l) : a.components[e],
              directive: (e, t) =>
                t ? ((a.directives[e] = t), l) : a.directives[e],
              mount(o, i, s) {
                if (!c) {
                  const u = Ke(n, r)
                  return (
                    (u.appContext = a),
                    i && t ? t(u, o) : e(u, o, s),
                    (c = !0),
                    (l._container = o),
                    (o.__vue_app__ = l),
                    vt(u.component) || u.component.proxy
                  )
                }
              },
              unmount() {
                c && (e(null, l._container), delete l._container.__vue_app__)
              },
              provide: (e, t) => ((a.provides[e] = t), l),
            })
            return l
          }
        }
        const Se = function (e, t) {
          t && t.pendingBranch
            ? (0, o.kJ)(e)
              ? t.effects.push(...e)
              : t.effects.push(e)
            : Lt(e, It, Et, jt)
        }
        function we(e) {
          return (function (e, t) {
            ;(0, o.E9)().__VUE__ = !0
            const {
                insert: n,
                remove: l,
                patchProp: s,
                createElement: u,
                createText: d,
                createComment: p,
                setText: f,
                setElementText: m,
                parentNode: g,
                nextSibling: y,
                setScopeId: b = o.dG,
                cloneNode: _,
                insertStaticContent: S,
              } = e,
              w = (
                e,
                t,
                n,
                r = null,
                o = null,
                a = null,
                i = !1,
                c = null,
                l = !!t.dynamicChildren,
              ) => {
                if (e === t) return
                e && !Ze(e, t) && ((r = Y(e)), W(e, o, a, !0), (e = null)),
                  -2 === t.patchFlag && ((l = !1), (t.dynamicChildren = null))
                const { type: s, ref: u, shapeFlag: d } = t
                switch (s) {
                  case Pe:
                    x(e, t, n, r)
                    break
                  case Ae:
                    k(e, t, n, r)
                    break
                  case Te:
                    null == e && O(t, n, r, i)
                    break
                  case je:
                    N(e, t, n, r, o, a, i, c, l)
                    break
                  default:
                    1 & d
                      ? D(e, t, n, r, o, a, i, c, l)
                      : 6 & d
                      ? L(e, t, n, r, o, a, i, c, l)
                      : (64 & d || 128 & d) &&
                        s.process(e, t, n, r, o, a, i, c, l, X)
                }
                null != u && o && xe(u, e && e.ref, a, t || e, !t)
              },
              x = (e, t, r, o) => {
                if (null == e) n((t.el = d(t.children)), r, o)
                else {
                  const n = (t.el = e.el)
                  t.children !== e.children && f(n, t.children)
                }
              },
              k = (e, t, r, o) => {
                null == e
                  ? n((t.el = p(t.children || '')), r, o)
                  : (t.el = e.el)
              },
              O = (e, t, n, r) => {
                ;[e.el, e.anchor] = S(e.children, t, n, r)
              },
              C = ({ el: e, anchor: t }) => {
                let n
                for (; e && e !== t; ) (n = y(e)), l(e), (e = n)
                l(t)
              },
              D = (e, t, n, r, o, a, i, c, l) => {
                ;(i = i || 'svg' === t.type),
                  null == e ? E(t, n, r, o, a, i, c, l) : T(e, t, o, a, i, c, l)
              },
              E = (e, t, r, a, i, c, l, d) => {
                let p, f
                const {
                  type: h,
                  props: g,
                  shapeFlag: v,
                  transition: y,
                  patchFlag: b,
                  dirs: S,
                } = e
                if (e.el && void 0 !== _ && -1 === b) p = e.el = _(e.el)
                else {
                  if (
                    ((p = e.el = u(e.type, c, g && g.is, g)),
                    8 & v
                      ? m(p, e.children)
                      : 16 & v &&
                        A(
                          e.children,
                          p,
                          null,
                          a,
                          i,
                          c && 'foreignObject' !== h,
                          l,
                          d,
                        ),
                    S && ve(e, null, a, 'created'),
                    g)
                  ) {
                    for (const t in g)
                      'value' === t ||
                        (0, o.Gg)(t) ||
                        s(p, t, null, g[t], c, e.children, a, i, Q)
                    'value' in g && s(p, 'value', null, g.value),
                      (f = g.onVnodeBeforeMount) && ke(f, a, e)
                  }
                  I(p, e, e.scopeId, l, a)
                }
                S && ve(e, null, a, 'beforeMount')
                const w = (!i || (i && !i.pendingBranch)) && y && !y.persisted
                w && y.beforeEnter(p),
                  n(p, t, r),
                  ((f = g && g.onVnodeMounted) || w || S) &&
                    Se(() => {
                      f && ke(f, a, e),
                        w && y.enter(p),
                        S && ve(e, null, a, 'mounted')
                    }, i)
              },
              I = (e, t, n, r, o) => {
                if ((n && b(e, n), r))
                  for (let t = 0; t < r.length; t++) b(e, r[t])
                if (o && t === o.subTree) {
                  const t = o.vnode
                  I(e, t, t.scopeId, t.slotScopeIds, o.parent)
                }
              },
              A = (e, t, n, r, o, a, i, c, l = 0) => {
                for (let s = l; s < e.length; s++) {
                  const l = (e[s] = c ? Xe(e[s]) : $e(e[s]))
                  w(null, l, t, n, r, o, a, i, c)
                }
              },
              T = (e, t, n, r, a, i, c) => {
                const l = (t.el = e.el)
                let { patchFlag: u, dynamicChildren: d, dirs: p } = t
                u |= 16 & e.patchFlag
                const f = e.props || o.kT,
                  h = t.props || o.kT
                let g
                ;(g = h.onVnodeBeforeUpdate) && ke(g, n, t, e),
                  p && ve(t, e, n, 'beforeUpdate')
                const v = a && 'foreignObject' !== t.type
                if (
                  (d
                    ? F(e.dynamicChildren, d, l, n, r, v, i)
                    : c || V(e, t, l, null, n, r, v, i, !1),
                  u > 0)
                ) {
                  if (16 & u) U(l, t, f, h, n, r, a)
                  else if (
                    (2 & u &&
                      f.class !== h.class &&
                      s(l, 'class', null, h.class, a),
                    4 & u && s(l, 'style', f.style, h.style, a),
                    8 & u)
                  ) {
                    const o = t.dynamicProps
                    for (let t = 0; t < o.length; t++) {
                      const i = o[t],
                        c = f[i],
                        u = h[i]
                      ;(u === c && 'value' !== i) ||
                        s(l, i, c, u, a, e.children, n, r, Q)
                    }
                  }
                  1 & u && e.children !== t.children && m(l, t.children)
                } else c || null != d || U(l, t, f, h, n, r, a)
                ;((g = h.onVnodeUpdated) || p) &&
                  Se(() => {
                    g && ke(g, n, t, e), p && ve(t, e, n, 'updated')
                  }, r)
              },
              F = (e, t, n, r, o, a, i) => {
                for (let c = 0; c < t.length; c++) {
                  const l = e[c],
                    s = t[c],
                    u =
                      l.el && (l.type === je || !Ze(l, s) || 70 & l.shapeFlag)
                        ? g(l.el)
                        : n
                  w(l, s, u, null, r, o, a, i, !0)
                }
              },
              U = (e, t, n, r, a, i, c) => {
                if (n !== r) {
                  for (const l in r) {
                    if ((0, o.Gg)(l)) continue
                    const u = r[l],
                      d = n[l]
                    u !== d &&
                      'value' !== l &&
                      s(e, l, d, u, c, t.children, a, i, Q)
                  }
                  if (n !== o.kT)
                    for (const l in n)
                      (0, o.Gg)(l) ||
                        l in r ||
                        s(e, l, n[l], null, c, t.children, a, i, Q)
                  'value' in r && s(e, 'value', n.value, r.value)
                }
              },
              N = (e, t, r, o, a, i, c, l, s) => {
                const u = (t.el = e ? e.el : d('')),
                  p = (t.anchor = e ? e.anchor : d(''))
                let { patchFlag: f, dynamicChildren: h, slotScopeIds: m } = t
                m && (l = l ? l.concat(m) : m),
                  null == e
                    ? (n(u, r, o),
                      n(p, r, o),
                      A(t.children, r, p, a, i, c, l, s))
                    : f > 0 && 64 & f && h && e.dynamicChildren
                    ? (F(e.dynamicChildren, h, r, a, i, c, l),
                      (null != t.key || (a && t === a.subTree)) && Oe(e, t, !0))
                    : V(e, t, r, p, a, i, c, l, s)
              },
              L = (e, t, n, r, o, a, i, c, l) => {
                ;(t.slotScopeIds = c),
                  null == e
                    ? 512 & t.shapeFlag
                      ? o.ctx.activate(t, n, r, i, l)
                      : R(t, n, r, o, a, i, l)
                    : H(e, t, l)
              },
              R = (e, t, n, c, l, s, u) => {
                const d = (e.component = (function (e, t, n) {
                  const c = e.type,
                    l = (t ? t.appContext : e.appContext) || ct,
                    s = {
                      uid: lt++,
                      vnode: e,
                      type: c,
                      parent: t,
                      appContext: l,
                      root: null,
                      next: null,
                      subTree: null,
                      update: null,
                      scope: new r.Bj(!0),
                      render: null,
                      proxy: null,
                      exposed: null,
                      exposeProxy: null,
                      withProxy: null,
                      provides: t ? t.provides : Object.create(l.provides),
                      accessCache: null,
                      renderCache: [],
                      components: null,
                      directives: null,
                      propsOptions: ie(c, l),
                      emitsOptions: i(c, l),
                      emit: null,
                      emitted: null,
                      propsDefaults: o.kT,
                      inheritAttrs: c.inheritAttrs,
                      ctx: o.kT,
                      data: o.kT,
                      props: o.kT,
                      attrs: o.kT,
                      slots: o.kT,
                      refs: o.kT,
                      setupState: o.kT,
                      setupContext: null,
                      suspense: n,
                      suspenseId: n ? n.pendingId : 0,
                      asyncDep: null,
                      asyncResolved: !1,
                      isMounted: !1,
                      isUnmounted: !1,
                      isDeactivated: !1,
                      bc: null,
                      c: null,
                      bm: null,
                      m: null,
                      bu: null,
                      u: null,
                      um: null,
                      bum: null,
                      da: null,
                      a: null,
                      rtg: null,
                      rtc: null,
                      ec: null,
                      sp: null,
                    }
                  return (
                    (s.ctx = { _: s }),
                    (s.root = t ? t.root : s),
                    (s.emit = a.bind(null, s)),
                    e.ce && e.ce(s),
                    s
                  )
                })(e, c, l))
                if (
                  (P(e) && (d.ctx.renderer = X),
                  (function (e, t = !1) {
                    ht = t
                    const { props: n, children: a } = e.vnode,
                      i = ft(e)
                    !(function (e, t, n, a = !1) {
                      const i = {},
                        c = {}
                      ;(0, o.Nj)(c, ze, 1),
                        (e.propsDefaults = Object.create(null)),
                        oe(e, t, i, c)
                      for (const t in e.propsOptions[0])
                        t in i || (i[t] = void 0)
                      n
                        ? (e.props = a ? i : (0, r.Um)(i))
                        : e.type.props
                        ? (e.props = i)
                        : (e.props = c),
                        (e.attrs = c)
                    })(e, n, i, t),
                      ((e, t) => {
                        if (32 & e.vnode.shapeFlag) {
                          const n = t._
                          n
                            ? ((e.slots = (0, r.IU)(t)), (0, o.Nj)(t, '_', n))
                            : he(t, (e.slots = {}))
                        } else (e.slots = {}), t && me(e, t)
                        ;(0, o.Nj)(e.slots, ze, 1)
                      })(e, a)
                    const c = i
                      ? (function (e, t) {
                          const n = e.type
                          ;(e.accessCache = Object.create(null)),
                            (e.proxy = (0, r.Xl)(new Proxy(e.ctx, it)))
                          const { setup: a } = n
                          if (a) {
                            const n = (e.setupContext =
                              a.length > 1
                                ? (function (e) {
                                    const t = (t) => {
                                      e.exposed = t || {}
                                    }
                                    let n
                                    return {
                                      get attrs() {
                                        return (
                                          n ||
                                          (n = (function (e) {
                                            return new Proxy(e.attrs, {
                                              get: (t, n) => (
                                                (0, r.j)(e, 'get', '$attrs'),
                                                t[n]
                                              ),
                                            })
                                          })(e))
                                        )
                                      },
                                      slots: e.slots,
                                      emit: e.emit,
                                      expose: t,
                                    }
                                  })(e)
                                : null)
                            dt(e), (0, r.Jd)()
                            const i = yt(a, e, 0, [e.props, n])
                            if (((0, r.lk)(), pt(), (0, o.tI)(i))) {
                              if ((i.then(pt, pt), t))
                                return i
                                  .then((n) => {
                                    mt(e, n, t)
                                  })
                                  .catch((t) => {
                                    _t(t, e, 0)
                                  })
                              e.asyncDep = i
                            } else mt(e, i, t)
                          } else gt(e, t)
                        })(e, t)
                      : void 0
                    ht = !1
                  })(d),
                  d.asyncDep)
                ) {
                  if ((l && l.registerDep(d, M), !e.el)) {
                    const e = (d.subTree = Ke(Ae))
                    k(null, e, t, n)
                  }
                } else M(d, e, t, n, l, s, u)
              },
              H = (e, t, n) => {
                const r = (t.component = e.component)
                if (
                  (function (e, t, n) {
                    const { props: r, children: o, component: a } = e,
                      { props: i, children: l, patchFlag: s } = t,
                      u = a.emitsOptions
                    if (t.dirs || t.transition) return !0
                    if (!(n && s >= 0))
                      return (
                        !((!o && !l) || (l && l.$stable)) ||
                        (r !== i && (r ? !i || v(r, i, u) : !!i))
                      )
                    if (1024 & s) return !0
                    if (16 & s) return r ? v(r, i, u) : !!i
                    if (8 & s) {
                      const e = t.dynamicProps
                      for (let t = 0; t < e.length; t++) {
                        const n = e[t]
                        if (i[n] !== r[n] && !c(u, n)) return !0
                      }
                    }
                    return !1
                  })(e, t, n)
                ) {
                  if (r.asyncDep && !r.asyncResolved) return void B(r, t, n)
                  ;(r.next = t),
                    (function (e) {
                      const t = xt.indexOf(e)
                      t > kt && xt.splice(t, 1)
                    })(r.update),
                    r.update()
                } else (t.component = e.component), (t.el = e.el), (r.vnode = t)
              },
              M = (e, t, n, a, i, c, l) => {
                const s = new r.qq(
                    () => {
                      if (e.isMounted) {
                        let t,
                          { next: n, bu: r, u: a, parent: u, vnode: d } = e,
                          p = n
                        ;(s.allowRecurse = !1),
                          n ? ((n.el = d.el), B(e, n, l)) : (n = d),
                          r && (0, o.ir)(r),
                          (t = n.props && n.props.onVnodeBeforeUpdate) &&
                            ke(t, u, n, d),
                          (s.allowRecurse = !0)
                        const f = h(e),
                          m = e.subTree
                        ;(e.subTree = f),
                          w(m, f, g(m.el), Y(m), e, i, c),
                          (n.el = f.el),
                          null === p &&
                            (function ({ vnode: e, parent: t }, n) {
                              for (; t && t.subTree === e; )
                                ((e = t.vnode).el = n), (t = t.parent)
                            })(e, f.el),
                          a && Se(a, i),
                          (t = n.props && n.props.onVnodeUpdated) &&
                            Se(() => ke(t, u, n, d), i)
                      } else {
                        let r
                        const { el: l, props: u } = t,
                          { bm: d, m: p, parent: f } = e,
                          m = j(t)
                        if (
                          ((s.allowRecurse = !1),
                          d && (0, o.ir)(d),
                          !m && (r = u && u.onVnodeBeforeMount) && ke(r, f, t),
                          (s.allowRecurse = !0),
                          l && te)
                        ) {
                          const n = () => {
                            ;(e.subTree = h(e)), te(l, e.subTree, e, i, null)
                          }
                          m
                            ? t.type
                                .__asyncLoader()
                                .then(() => !e.isUnmounted && n())
                            : n()
                        } else {
                          const r = (e.subTree = h(e))
                          w(null, r, n, a, e, i, c), (t.el = r.el)
                        }
                        if (
                          (p && Se(p, i), !m && (r = u && u.onVnodeMounted))
                        ) {
                          const e = t
                          Se(() => ke(r, f, e), i)
                        }
                        256 & t.shapeFlag && e.a && Se(e.a, i),
                          (e.isMounted = !0),
                          (t = n = a = null)
                      }
                    },
                    () => Ut(e.update),
                    e.scope,
                  ),
                  u = (e.update = s.run.bind(s))
                ;(u.id = e.uid), (s.allowRecurse = u.allowRecurse = !0), u()
              },
              B = (e, t, n) => {
                t.component = e
                const a = e.vnode.props
                ;(e.vnode = t),
                  (e.next = null),
                  (function (e, t, n, a) {
                    const {
                        props: i,
                        attrs: c,
                        vnode: { patchFlag: l },
                      } = e,
                      s = (0, r.IU)(i),
                      [u] = e.propsOptions
                    let d = !1
                    if (!(a || l > 0) || 16 & l) {
                      let r
                      oe(e, t, i, c) && (d = !0)
                      for (const a in s)
                        (t &&
                          ((0, o.RI)(t, a) ||
                            ((r = (0, o.rs)(a)) !== a && (0, o.RI)(t, r)))) ||
                          (u
                            ? !n ||
                              (void 0 === n[a] && void 0 === n[r]) ||
                              (i[a] = ae(u, s, a, void 0, e, !0))
                            : delete i[a])
                      if (c !== s)
                        for (const e in c)
                          (t && (0, o.RI)(t, e)) || (delete c[e], (d = !0))
                    } else if (8 & l) {
                      const n = e.vnode.dynamicProps
                      for (let r = 0; r < n.length; r++) {
                        let a = n[r]
                        const l = t[a]
                        if (u)
                          if ((0, o.RI)(c, a))
                            l !== c[a] && ((c[a] = l), (d = !0))
                          else {
                            const t = (0, o._A)(a)
                            i[t] = ae(u, s, t, l, e, !1)
                          }
                        else l !== c[a] && ((c[a] = l), (d = !0))
                      }
                    }
                    d && (0, r.X$)(e, 'set', '$attrs')
                  })(e, t.props, a, n),
                  ((e, t, n) => {
                    const { vnode: r, slots: a } = e
                    let i = !0,
                      c = o.kT
                    if (32 & r.shapeFlag) {
                      const e = t._
                      e
                        ? n && 1 === e
                          ? (i = !1)
                          : ((0, o.l7)(a, t), n || 1 !== e || delete a._)
                        : ((i = !t.$stable), he(t, a)),
                        (c = t)
                    } else t && (me(e, t), (c = { default: 1 }))
                    if (i) for (const e in a) de(e) || e in c || delete a[e]
                  })(e, t.children, n),
                  (0, r.Jd)(),
                  Rt(void 0, e.update),
                  (0, r.lk)()
              },
              V = (e, t, n, r, o, a, i, c, l = !1) => {
                const s = e && e.children,
                  u = e ? e.shapeFlag : 0,
                  d = t.children,
                  { patchFlag: p, shapeFlag: f } = t
                if (p > 0) {
                  if (128 & p) return void z(s, d, n, r, o, a, i, c, l)
                  if (256 & p) return void Z(s, d, n, r, o, a, i, c, l)
                }
                8 & f
                  ? (16 & u && Q(s, o, a), d !== s && m(n, d))
                  : 16 & u
                  ? 16 & f
                    ? z(s, d, n, r, o, a, i, c, l)
                    : Q(s, o, a, !0)
                  : (8 & u && m(n, ''), 16 & f && A(d, n, r, o, a, i, c, l))
              },
              Z = (e, t, n, r, a, i, c, l, s) => {
                ;(e = e || o.Z6), (t = t || o.Z6)
                const u = e.length,
                  d = t.length,
                  p = Math.min(u, d)
                let f
                for (f = 0; f < p; f++) {
                  const r = (t[f] = s ? Xe(t[f]) : $e(t[f]))
                  w(e[f], r, n, null, a, i, c, l, s)
                }
                u > d ? Q(e, a, i, !0, !1, p) : A(t, n, r, a, i, c, l, s, p)
              },
              z = (e, t, n, r, a, i, c, l, s) => {
                let u = 0
                const d = t.length
                let p = e.length - 1,
                  f = d - 1
                for (; u <= p && u <= f; ) {
                  const r = e[u],
                    o = (t[u] = s ? Xe(t[u]) : $e(t[u]))
                  if (!Ze(r, o)) break
                  w(r, o, n, null, a, i, c, l, s), u++
                }
                for (; u <= p && u <= f; ) {
                  const r = e[p],
                    o = (t[f] = s ? Xe(t[f]) : $e(t[f]))
                  if (!Ze(r, o)) break
                  w(r, o, n, null, a, i, c, l, s), p--, f--
                }
                if (u > p) {
                  if (u <= f) {
                    const e = f + 1,
                      o = e < d ? t[e].el : r
                    for (; u <= f; )
                      w(
                        null,
                        (t[u] = s ? Xe(t[u]) : $e(t[u])),
                        n,
                        o,
                        a,
                        i,
                        c,
                        l,
                        s,
                      ),
                        u++
                  }
                } else if (u > f) for (; u <= p; ) W(e[u], a, i, !0), u++
                else {
                  const h = u,
                    m = u,
                    g = new Map()
                  for (u = m; u <= f; u++) {
                    const e = (t[u] = s ? Xe(t[u]) : $e(t[u]))
                    null != e.key && g.set(e.key, u)
                  }
                  let v,
                    y = 0
                  const b = f - m + 1
                  let _ = !1,
                    S = 0
                  const x = new Array(b)
                  for (u = 0; u < b; u++) x[u] = 0
                  for (u = h; u <= p; u++) {
                    const r = e[u]
                    if (y >= b) {
                      W(r, a, i, !0)
                      continue
                    }
                    let o
                    if (null != r.key) o = g.get(r.key)
                    else
                      for (v = m; v <= f; v++)
                        if (0 === x[v - m] && Ze(r, t[v])) {
                          o = v
                          break
                        }
                    void 0 === o
                      ? W(r, a, i, !0)
                      : ((x[o - m] = u + 1),
                        o >= S ? (S = o) : (_ = !0),
                        w(r, t[o], n, null, a, i, c, l, s),
                        y++)
                  }
                  const k = _
                    ? (function (e) {
                        const t = e.slice(),
                          n = [0]
                        let r, o, a, i, c
                        const l = e.length
                        for (r = 0; r < l; r++) {
                          const l = e[r]
                          if (0 !== l) {
                            if (((o = n[n.length - 1]), e[o] < l)) {
                              ;(t[r] = o), n.push(r)
                              continue
                            }
                            for (a = 0, i = n.length - 1; a < i; )
                              (c = (a + i) >> 1),
                                e[n[c]] < l ? (a = c + 1) : (i = c)
                            l < e[n[a]] &&
                              (a > 0 && (t[r] = n[a - 1]), (n[a] = r))
                          }
                        }
                        for (a = n.length, i = n[a - 1]; a-- > 0; )
                          (n[a] = i), (i = t[i])
                        return n
                      })(x)
                    : o.Z6
                  for (v = k.length - 1, u = b - 1; u >= 0; u--) {
                    const e = m + u,
                      o = t[e],
                      p = e + 1 < d ? t[e + 1].el : r
                    0 === x[u]
                      ? w(null, o, n, p, a, i, c, l, s)
                      : _ && (v < 0 || u !== k[v] ? q(o, n, p, 2) : v--)
                  }
                }
              },
              q = (e, t, r, o, a = null) => {
                const {
                  el: i,
                  type: c,
                  transition: l,
                  children: s,
                  shapeFlag: u,
                } = e
                if (6 & u) q(e.component.subTree, t, r, o)
                else if (128 & u) e.suspense.move(t, r, o)
                else if (64 & u) c.move(e, t, r, X)
                else if (c !== je)
                  if (c !== Te)
                    if (2 !== o && 1 & u && l)
                      if (0 === o)
                        l.beforeEnter(i), n(i, t, r), Se(() => l.enter(i), a)
                      else {
                        const { leave: e, delayLeave: o, afterLeave: a } = l,
                          c = () => n(i, t, r),
                          s = () => {
                            e(i, () => {
                              c(), a && a()
                            })
                          }
                        o ? o(i, c, s) : s()
                      }
                    else n(i, t, r)
                  else
                    (({ el: e, anchor: t }, r, o) => {
                      let a
                      for (; e && e !== t; ) (a = y(e)), n(e, r, o), (e = a)
                      n(t, r, o)
                    })(e, t, r)
                else {
                  n(i, t, r)
                  for (let e = 0; e < s.length; e++) q(s[e], t, r, o)
                  n(e.anchor, t, r)
                }
              },
              W = (e, t, n, r = !1, o = !1) => {
                const {
                  type: a,
                  props: i,
                  ref: c,
                  children: l,
                  dynamicChildren: s,
                  shapeFlag: u,
                  patchFlag: d,
                  dirs: p,
                } = e
                if ((null != c && xe(c, null, n, e, !0), 256 & u))
                  return void t.ctx.deactivate(e)
                const f = 1 & u && p,
                  h = !j(e)
                let m
                if (
                  (h && (m = i && i.onVnodeBeforeUnmount) && ke(m, t, e), 6 & u)
                )
                  J(e.component, n, r)
                else {
                  if (128 & u) return void e.suspense.unmount(n, r)
                  f && ve(e, null, t, 'beforeUnmount'),
                    64 & u
                      ? e.type.remove(e, t, n, o, X, r)
                      : s && (a !== je || (d > 0 && 64 & d))
                      ? Q(s, t, n, !1, !0)
                      : ((a === je && 384 & d) || (!o && 16 & u)) && Q(l, t, n),
                    r && G(e)
                }
                ;((h && (m = i && i.onVnodeUnmounted)) || f) &&
                  Se(() => {
                    m && ke(m, t, e), f && ve(e, null, t, 'unmounted')
                  }, n)
              },
              G = (e) => {
                const { type: t, el: n, anchor: r, transition: o } = e
                if (t === je) return void K(n, r)
                if (t === Te) return void C(e)
                const a = () => {
                  l(n), o && !o.persisted && o.afterLeave && o.afterLeave()
                }
                if (1 & e.shapeFlag && o && !o.persisted) {
                  const { leave: t, delayLeave: r } = o,
                    i = () => t(n, a)
                  r ? r(e.el, a, i) : i()
                } else a()
              },
              K = (e, t) => {
                let n
                for (; e !== t; ) (n = y(e)), l(e), (e = n)
                l(t)
              },
              J = (e, t, n) => {
                const { bum: r, scope: a, update: i, subTree: c, um: l } = e
                r && (0, o.ir)(r),
                  a.stop(),
                  i && ((i.active = !1), W(c, e, t, n)),
                  l && Se(l, t),
                  Se(() => {
                    e.isUnmounted = !0
                  }, t),
                  t &&
                    t.pendingBranch &&
                    !t.isUnmounted &&
                    e.asyncDep &&
                    !e.asyncResolved &&
                    e.suspenseId === t.pendingId &&
                    (t.deps--, 0 === t.deps && t.resolve())
              },
              Q = (e, t, n, r = !1, o = !1, a = 0) => {
                for (let i = a; i < e.length; i++) W(e[i], t, n, r, o)
              },
              Y = (e) =>
                6 & e.shapeFlag
                  ? Y(e.component.subTree)
                  : 128 & e.shapeFlag
                  ? e.suspense.next()
                  : y(e.anchor || e.el),
              $ = (e, t, n) => {
                null == e
                  ? t._vnode && W(t._vnode, null, null, !0)
                  : w(t._vnode || null, e, t, null, null, null, n),
                  Ht(),
                  (t._vnode = e)
              },
              X = {
                p: w,
                um: W,
                m: q,
                r: G,
                mt: R,
                mc: A,
                pc: V,
                pbc: F,
                n: Y,
                o: e,
              }
            let ee, te
            return (
              t && ([ee, te] = t(X)),
              { render: $, hydrate: ee, createApp: _e($, ee) }
            )
          })(e)
        }
        function xe(e, t, n, a, i = !1) {
          if ((0, o.kJ)(e))
            return void e.forEach((e, r) =>
              xe(e, t && ((0, o.kJ)(t) ? t[r] : t), n, a, i),
            )
          if (j(a) && !i) return
          const c =
              4 & a.shapeFlag ? vt(a.component) || a.component.proxy : a.el,
            l = i ? null : c,
            { i: s, r: u } = e,
            d = t && t.r,
            p = s.refs === o.kT ? (s.refs = {}) : s.refs,
            f = s.setupState
          if (
            (null != d &&
              d !== u &&
              ((0, o.HD)(d)
                ? ((p[d] = null), (0, o.RI)(f, d) && (f[d] = null))
                : (0, r.dq)(d) && (d.value = null)),
            (0, o.HD)(u))
          ) {
            const e = () => {
              ;(p[u] = l), (0, o.RI)(f, u) && (f[u] = l)
            }
            l ? ((e.id = -1), Se(e, n)) : e()
          } else if ((0, r.dq)(u)) {
            const e = () => {
              u.value = l
            }
            l ? ((e.id = -1), Se(e, n)) : e()
          } else (0, o.mf)(u) && yt(u, s, 12, [l, p])
        }
        function ke(e, t, n, r = null) {
          bt(e, t, 7, [n, r])
        }
        function Oe(e, t, n = !1) {
          const r = e.children,
            a = t.children
          if ((0, o.kJ)(r) && (0, o.kJ)(a))
            for (let e = 0; e < r.length; e++) {
              const t = r[e]
              let o = a[e]
              1 & o.shapeFlag &&
                !o.dynamicChildren &&
                ((o.patchFlag <= 0 || 32 === o.patchFlag) &&
                  ((o = a[e] = Xe(a[e])), (o.el = t.el)),
                n || Oe(t, o))
            }
        }
        const Ce = 'components'
        function De(e, t) {
          return (
            (function (e, t, n = !0, r = !1) {
              const a = l || st
              if (a) {
                const n = a.type
                if (e === Ce) {
                  const e = (function (e) {
                    return ((0, o.mf)(e) && e.displayName) || e.name
                  })(n)
                  if (
                    e &&
                    (e === t ||
                      e === (0, o._A)(t) ||
                      e === (0, o.kC)((0, o._A)(t)))
                  )
                    return n
                }
                const i = Ie(a[e] || n[e], t) || Ie(a.appContext[e], t)
                return !i && r ? n : i
              }
            })(Ce, e, !0, t) || e
          )
        }
        const Ee = Symbol()
        function Ie(e, t) {
          return e && (e[t] || e[(0, o._A)(t)] || e[(0, o.kC)((0, o._A)(t))])
        }
        const je = Symbol(void 0),
          Pe = Symbol(void 0),
          Ae = Symbol(void 0),
          Te = Symbol(void 0),
          Fe = []
        let Ue = null
        function Ne(e = !1) {
          Fe.push((Ue = e ? null : []))
        }
        let Le = 1
        function Re(e) {
          Le += e
        }
        function He(e) {
          return (
            (e.dynamicChildren = Le > 0 ? Ue || o.Z6 : null),
            Fe.pop(),
            (Ue = Fe[Fe.length - 1] || null),
            Le > 0 && Ue && Ue.push(e),
            e
          )
        }
        function Me(e, t, n, r, o, a) {
          return He(Ge(e, t, n, r, o, a, !0))
        }
        function Be(e, t, n, r, o) {
          return He(Ke(e, t, n, r, o, !0))
        }
        function Ve(e) {
          return !!e && !0 === e.__v_isVNode
        }
        function Ze(e, t) {
          return e.type === t.type && e.key === t.key
        }
        const ze = '__vInternal',
          qe = ({ key: e }) => (null != e ? e : null),
          We = ({ ref: e }) =>
            null != e
              ? (0, o.HD)(e) || (0, r.dq)(e) || (0, o.mf)(e)
                ? { i: l, r: e }
                : e
              : null
        function Ge(
          e,
          t = null,
          n = null,
          r = 0,
          a = null,
          i = e === je ? 0 : 1,
          c = !1,
          l = !1,
        ) {
          const u = {
            __v_isVNode: !0,
            __v_skip: !0,
            type: e,
            props: t,
            key: t && qe(t),
            ref: t && We(t),
            scopeId: s,
            slotScopeIds: null,
            children: n,
            component: null,
            suspense: null,
            ssContent: null,
            ssFallback: null,
            dirs: null,
            transition: null,
            el: null,
            anchor: null,
            target: null,
            targetAnchor: null,
            staticCount: 0,
            shapeFlag: i,
            patchFlag: r,
            dynamicProps: a,
            dynamicChildren: null,
            appContext: null,
          }
          return (
            l
              ? (et(u, n), 128 & i && e.normalize(u))
              : n && (u.shapeFlag |= (0, o.HD)(n) ? 8 : 16),
            Le > 0 &&
              !c &&
              Ue &&
              (u.patchFlag > 0 || 6 & i) &&
              32 !== u.patchFlag &&
              Ue.push(u),
            u
          )
        }
        const Ke = function (e, t = null, n = null, a = 0, i = null, c = !1) {
          if (((e && e !== Ee) || (e = Ae), Ve(e))) {
            const r = Je(e, t, !0)
            return n && et(r, n), r
          }
          if (
            ((l = e), (0, o.mf)(l) && '__vccOpts' in l && (e = e.__vccOpts), t)
          ) {
            t = (function (e) {
              return e ? ((0, r.X3)(e) || ze in e ? (0, o.l7)({}, e) : e) : null
            })(t)
            let { class: e, style: n } = t
            e && !(0, o.HD)(e) && (t.class = (0, o.C_)(e)),
              (0, o.Kn)(n) &&
                ((0, r.X3)(n) && !(0, o.kJ)(n) && (n = (0, o.l7)({}, n)),
                (t.style = (0, o.j5)(n)))
          }
          var l
          return Ge(
            e,
            t,
            n,
            a,
            i,
            (0, o.HD)(e)
              ? 1
              : ((e) => e.__isSuspense)(e)
              ? 128
              : ((e) => e.__isTeleport)(e)
              ? 64
              : (0, o.Kn)(e)
              ? 4
              : (0, o.mf)(e)
              ? 2
              : 0,
            c,
            !0,
          )
        }
        function Je(e, t, n = !1) {
          const { props: r, ref: a, patchFlag: i, children: c } = e,
            l = t
              ? (function (...e) {
                  const t = {}
                  for (let n = 0; n < e.length; n++) {
                    const r = e[n]
                    for (const e in r)
                      if ('class' === e)
                        t.class !== r.class &&
                          (t.class = (0, o.C_)([t.class, r.class]))
                      else if ('style' === e)
                        t.style = (0, o.j5)([t.style, r.style])
                      else if ((0, o.F7)(e)) {
                        const n = t[e],
                          o = r[e]
                        n !== o && (t[e] = n ? [].concat(n, o) : o)
                      } else '' !== e && (t[e] = r[e])
                  }
                  return t
                })(r || {}, t)
              : r
          return {
            __v_isVNode: !0,
            __v_skip: !0,
            type: e.type,
            props: l,
            key: l && qe(l),
            ref:
              t && t.ref
                ? n && a
                  ? (0, o.kJ)(a)
                    ? a.concat(We(t))
                    : [a, We(t)]
                  : We(t)
                : a,
            scopeId: e.scopeId,
            slotScopeIds: e.slotScopeIds,
            children: c,
            target: e.target,
            targetAnchor: e.targetAnchor,
            staticCount: e.staticCount,
            shapeFlag: e.shapeFlag,
            patchFlag: t && e.type !== je ? (-1 === i ? 16 : 16 | i) : i,
            dynamicProps: e.dynamicProps,
            dynamicChildren: e.dynamicChildren,
            appContext: e.appContext,
            dirs: e.dirs,
            transition: e.transition,
            component: e.component,
            suspense: e.suspense,
            ssContent: e.ssContent && Je(e.ssContent),
            ssFallback: e.ssFallback && Je(e.ssFallback),
            el: e.el,
            anchor: e.anchor,
          }
        }
        function Qe(e = ' ', t = 0) {
          return Ke(Pe, null, e, t)
        }
        function Ye(e = '', t = !1) {
          return t ? (Ne(), Be(Ae, null, e)) : Ke(Ae, null, e)
        }
        function $e(e) {
          return null == e || 'boolean' == typeof e
            ? Ke(Ae)
            : (0, o.kJ)(e)
            ? Ke(je, null, e.slice())
            : 'object' == typeof e
            ? Xe(e)
            : Ke(Pe, null, String(e))
        }
        function Xe(e) {
          return null === e.el || e.memo ? e : Je(e)
        }
        function et(e, t) {
          let n = 0
          const { shapeFlag: r } = e
          if (null == t) t = null
          else if ((0, o.kJ)(t)) n = 16
          else if ('object' == typeof t) {
            if (65 & r) {
              const n = t.default
              return void (
                n && (n._c && (n._d = !1), et(e, n()), n._c && (n._d = !0))
              )
            }
            {
              n = 32
              const r = t._
              r || ze in t
                ? 3 === r &&
                  l &&
                  (1 === l.slots._
                    ? (t._ = 1)
                    : ((t._ = 2), (e.patchFlag |= 1024)))
                : (t._ctx = l)
            }
          } else
            (0, o.mf)(t)
              ? ((t = { default: t, _ctx: l }), (n = 32))
              : ((t = String(t)), 64 & r ? ((n = 16), (t = [Qe(t)])) : (n = 8))
          ;(e.children = t), (e.shapeFlag |= n)
        }
        function tt(e, t, n, r) {
          let a
          const i = n && n[r]
          if ((0, o.kJ)(e) || (0, o.HD)(e)) {
            a = new Array(e.length)
            for (let n = 0, r = e.length; n < r; n++)
              a[n] = t(e[n], n, void 0, i && i[n])
          } else if ('number' == typeof e) {
            a = new Array(e)
            for (let n = 0; n < e; n++) a[n] = t(n + 1, n, void 0, i && i[n])
          } else if ((0, o.Kn)(e))
            if (e[Symbol.iterator])
              a = Array.from(e, (e, n) => t(e, n, void 0, i && i[n]))
            else {
              const n = Object.keys(e)
              a = new Array(n.length)
              for (let r = 0, o = n.length; r < o; r++) {
                const o = n[r]
                a[r] = t(e[o], o, r, i && i[r])
              }
            }
          else a = []
          return n && (n[r] = a), a
        }
        function nt(e, t, n = {}, r, o) {
          if (l.isCE)
            return Ke('slot', 'default' === t ? null : { name: t }, r && r())
          let a = e[t]
          a && a._c && (a._d = !1), Ne()
          const i = a && rt(a(n)),
            c = Be(
              je,
              { key: n.key || `_${t}` },
              i || (r ? r() : []),
              i && 1 === e._ ? 64 : -2,
            )
          return (
            !o && c.scopeId && (c.slotScopeIds = [c.scopeId + '-s']),
            a && a._c && (a._d = !0),
            c
          )
        }
        function rt(e) {
          return e.some(
            (e) =>
              !Ve(e) || (e.type !== Ae && !(e.type === je && !rt(e.children))),
          )
            ? e
            : null
        }
        const ot = (e) =>
            e ? (ft(e) ? vt(e) || e.proxy : ot(e.parent)) : null,
          at = (0, o.l7)(Object.create(null), {
            $: (e) => e,
            $el: (e) => e.vnode.el,
            $data: (e) => e.data,
            $props: (e) => e.props,
            $attrs: (e) => e.attrs,
            $slots: (e) => e.slots,
            $refs: (e) => e.refs,
            $parent: (e) => ot(e.parent),
            $root: (e) => ot(e.root),
            $emit: (e) => e.emit,
            $options: (e) => Y(e),
            $forceUpdate: (e) => () => Ut(e.update),
            $nextTick: (e) => Ft.bind(e.proxy),
            $watch: (e) => qt.bind(e),
          }),
          it = {
            get({ _: e }, t) {
              const {
                ctx: n,
                setupState: a,
                data: i,
                props: c,
                accessCache: l,
                type: s,
                appContext: u,
              } = e
              let d
              if ('$' !== t[0]) {
                const r = l[t]
                if (void 0 !== r)
                  switch (r) {
                    case 0:
                      return a[t]
                    case 1:
                      return i[t]
                    case 3:
                      return n[t]
                    case 2:
                      return c[t]
                  }
                else {
                  if (a !== o.kT && (0, o.RI)(a, t)) return (l[t] = 0), a[t]
                  if (i !== o.kT && (0, o.RI)(i, t)) return (l[t] = 1), i[t]
                  if ((d = e.propsOptions[0]) && (0, o.RI)(d, t))
                    return (l[t] = 2), c[t]
                  if (n !== o.kT && (0, o.RI)(n, t)) return (l[t] = 3), n[t]
                  K && (l[t] = 4)
                }
              }
              const p = at[t]
              let f, h
              return p
                ? ('$attrs' === t && (0, r.j)(e, 'get', t), p(e))
                : (f = s.__cssModules) && (f = f[t])
                ? f
                : n !== o.kT && (0, o.RI)(n, t)
                ? ((l[t] = 3), n[t])
                : ((h = u.config.globalProperties),
                  (0, o.RI)(h, t) ? h[t] : void 0)
            },
            set({ _: e }, t, n) {
              const { data: r, setupState: a, ctx: i } = e
              if (a !== o.kT && (0, o.RI)(a, t)) a[t] = n
              else if (r !== o.kT && (0, o.RI)(r, t)) r[t] = n
              else if ((0, o.RI)(e.props, t)) return !1
              return !(('$' === t[0] && t.slice(1) in e) || ((i[t] = n), 0))
            },
            has(
              {
                _: {
                  data: e,
                  setupState: t,
                  accessCache: n,
                  ctx: r,
                  appContext: a,
                  propsOptions: i,
                },
              },
              c,
            ) {
              let l
              return (
                void 0 !== n[c] ||
                (e !== o.kT && (0, o.RI)(e, c)) ||
                (t !== o.kT && (0, o.RI)(t, c)) ||
                ((l = i[0]) && (0, o.RI)(l, c)) ||
                (0, o.RI)(r, c) ||
                (0, o.RI)(at, c) ||
                (0, o.RI)(a.config.globalProperties, c)
              )
            },
          },
          ct = ye()
        let lt = 0
        let st = null
        const ut = () => st || l,
          dt = (e) => {
            ;(st = e), e.scope.on()
          },
          pt = () => {
            st && st.scope.off(), (st = null)
          }
        function ft(e) {
          return 4 & e.vnode.shapeFlag
        }
        let ht = !1
        function mt(e, t, n) {
          ;(0, o.mf)(t)
            ? e.type.__ssrInlineRender
              ? (e.ssrRender = t)
              : (e.render = t)
            : (0, o.Kn)(t) && (e.setupState = (0, r.WL)(t)),
            gt(e, n)
        }
        function gt(e, t, n) {
          const a = e.type
          e.render || (e.render = a.render || o.dG),
            dt(e),
            (0, r.Jd)(),
            (function (e) {
              const t = Y(e),
                n = e.proxy,
                a = e.ctx
              ;(K = !1), t.beforeCreate && J(t.beforeCreate, e, 'bc')
              const {
                data: i,
                computed: c,
                methods: l,
                watch: s,
                provide: u,
                inject: d,
                created: p,
                beforeMount: f,
                mounted: h,
                beforeUpdate: m,
                updated: g,
                activated: v,
                deactivated: _,
                beforeDestroy: S,
                beforeUnmount: w,
                destroyed: x,
                unmounted: k,
                render: O,
                renderTracked: C,
                renderTriggered: D,
                errorCaptured: E,
                serverPrefetch: I,
                expose: j,
                inheritAttrs: P,
                components: F,
                directives: U,
                filters: N,
              } = t
              if (
                (d &&
                  (function (e, t, n = o.dG, a = !1) {
                    ;(0, o.kJ)(e) && (e = te(e))
                    for (const n in e) {
                      const i = e[n]
                      let c
                      ;(c = (0, o.Kn)(i)
                        ? 'default' in i
                          ? b(i.from || n, i.default, !0)
                          : b(i.from || n)
                        : b(i)),
                        (0, r.dq)(c) && a
                          ? Object.defineProperty(t, n, {
                              enumerable: !0,
                              configurable: !0,
                              get: () => c.value,
                              set: (e) => (c.value = e),
                            })
                          : (t[n] = c)
                    }
                  })(d, a, null, e.appContext.config.unwrapInjectedRef),
                l)
              )
                for (const e in l) {
                  const t = l[e]
                  ;(0, o.mf)(t) && (a[e] = t.bind(n))
                }
              if (i) {
                const t = i.call(n, n)
                ;(0, o.Kn)(t) && (e.data = (0, r.qj)(t))
              }
              if (((K = !0), c))
                for (const e in c) {
                  const t = c[e],
                    i = (0, o.mf)(t)
                      ? t.bind(n, n)
                      : (0, o.mf)(t.get)
                      ? t.get.bind(n, n)
                      : o.dG,
                    l =
                      !(0, o.mf)(t) && (0, o.mf)(t.set) ? t.set.bind(n) : o.dG,
                    s = (0, r.Fl)({ get: i, set: l })
                  Object.defineProperty(a, e, {
                    enumerable: !0,
                    configurable: !0,
                    get: () => s.value,
                    set: (e) => (s.value = e),
                  })
                }
              if (s) for (const e in s) Q(s[e], a, n, e)
              if (u) {
                const e = (0, o.mf)(u) ? u.call(n) : u
                Reflect.ownKeys(e).forEach((t) => {
                  y(t, e[t])
                })
              }
              function L(e, t) {
                ;(0, o.kJ)(t)
                  ? t.forEach((t) => e(t.bind(n)))
                  : t && e(t.bind(n))
              }
              if (
                (p && J(p, e, 'c'),
                L(R, f),
                L(H, h),
                L(M, m),
                L(B, g),
                L(A, v),
                L(T, _),
                L(G, E),
                L(W, C),
                L(q, D),
                L(V, w),
                L(Z, k),
                L(z, I),
                (0, o.kJ)(j))
              )
                if (j.length) {
                  const t = e.exposed || (e.exposed = {})
                  j.forEach((e) => {
                    Object.defineProperty(t, e, {
                      get: () => n[e],
                      set: (t) => (n[e] = t),
                    })
                  })
                } else e.exposed || (e.exposed = {})
              O && e.render === o.dG && (e.render = O),
                null != P && (e.inheritAttrs = P),
                F && (e.components = F),
                U && (e.directives = U)
            })(e),
            (0, r.lk)(),
            pt()
        }
        function vt(e) {
          if (e.exposed)
            return (
              e.exposeProxy ||
              (e.exposeProxy = new Proxy((0, r.WL)((0, r.Xl)(e.exposed)), {
                get: (t, n) => (n in t ? t[n] : n in at ? at[n](e) : void 0),
              }))
            )
        }
        function yt(e, t, n, r) {
          let o
          try {
            o = r ? e(...r) : e()
          } catch (e) {
            _t(e, t, n)
          }
          return o
        }
        function bt(e, t, n, r) {
          if ((0, o.mf)(e)) {
            const a = yt(e, t, n, r)
            return (
              a &&
                (0, o.tI)(a) &&
                a.catch((e) => {
                  _t(e, t, n)
                }),
              a
            )
          }
          const a = []
          for (let o = 0; o < e.length; o++) a.push(bt(e[o], t, n, r))
          return a
        }
        function _t(e, t, n, r = !0) {
          if ((t && t.vnode, t)) {
            let r = t.parent
            const o = t.proxy,
              a = n
            for (; r; ) {
              const t = r.ec
              if (t)
                for (let n = 0; n < t.length; n++)
                  if (!1 === t[n](e, o, a)) return
              r = r.parent
            }
            const i = t.appContext.config.errorHandler
            if (i) return void yt(i, null, 10, [e, o, a])
          }
          !(function (e, t, n, r = !0) {
            console.error(e)
          })(e, 0, 0, r)
        }
        let St = !1,
          wt = !1
        const xt = []
        let kt = 0
        const Ot = []
        let Ct = null,
          Dt = 0
        const Et = []
        let It = null,
          jt = 0
        const Pt = Promise.resolve()
        let At = null,
          Tt = null
        function Ft(e) {
          const t = At || Pt
          return e ? t.then(this ? e.bind(this) : e) : t
        }
        function Ut(e) {
          ;(xt.length && xt.includes(e, St && e.allowRecurse ? kt + 1 : kt)) ||
            e === Tt ||
            (null == e.id
              ? xt.push(e)
              : xt.splice(
                  (function (e) {
                    let t = kt + 1,
                      n = xt.length
                    for (; t < n; ) {
                      const r = (t + n) >>> 1
                      Mt(xt[r]) < e ? (t = r + 1) : (n = r)
                    }
                    return t
                  })(e.id),
                  0,
                  e,
                ),
            Nt())
        }
        function Nt() {
          St || wt || ((wt = !0), (At = Pt.then(Bt)))
        }
        function Lt(e, t, n, r) {
          ;(0, o.kJ)(e)
            ? n.push(...e)
            : (t && t.includes(e, e.allowRecurse ? r + 1 : r)) || n.push(e),
            Nt()
        }
        function Rt(e, t = null) {
          if (Ot.length) {
            for (
              Tt = t, Ct = [...new Set(Ot)], Ot.length = 0, Dt = 0;
              Dt < Ct.length;
              Dt++
            )
              Ct[Dt]()
            ;(Ct = null), (Dt = 0), (Tt = null), Rt(e, t)
          }
        }
        function Ht(e) {
          if (Et.length) {
            const e = [...new Set(Et)]
            if (((Et.length = 0), It)) return void It.push(...e)
            for (
              It = e, It.sort((e, t) => Mt(e) - Mt(t)), jt = 0;
              jt < It.length;
              jt++
            )
              It[jt]()
            ;(It = null), (jt = 0)
          }
        }
        const Mt = (e) => (null == e.id ? 1 / 0 : e.id)
        function Bt(e) {
          ;(wt = !1), (St = !0), Rt(e), xt.sort((e, t) => Mt(e) - Mt(t)), o.dG
          try {
            for (kt = 0; kt < xt.length; kt++) {
              const e = xt[kt]
              e && !1 !== e.active && yt(e, null, 14)
            }
          } finally {
            ;(kt = 0),
              (xt.length = 0),
              Ht(),
              (St = !1),
              (At = null),
              (xt.length || Ot.length || Et.length) && Bt(e)
          }
        }
        const Vt = {}
        function Zt(e, t, n) {
          return zt(e, t, n)
        }
        function zt(
          e,
          t,
          { immediate: n, deep: a, flush: i, onTrack: c, onTrigger: l } = o.kT,
        ) {
          const s = st
          let u,
            d,
            p = !1,
            f = !1
          if (
            ((0, r.dq)(e)
              ? ((u = () => e.value), (p = !!e._shallow))
              : (0, r.PG)(e)
              ? ((u = () => e), (a = !0))
              : (0, o.kJ)(e)
              ? ((f = !0),
                (p = e.some(r.PG)),
                (u = () =>
                  e.map((e) =>
                    (0, r.dq)(e)
                      ? e.value
                      : (0, r.PG)(e)
                      ? Gt(e)
                      : (0, o.mf)(e)
                      ? yt(e, s, 2)
                      : void 0,
                  )))
              : (u = (0, o.mf)(e)
                  ? t
                    ? () => yt(e, s, 2)
                    : () => {
                        if (!s || !s.isUnmounted)
                          return d && d(), bt(e, s, 3, [h])
                      }
                  : o.dG),
            t && a)
          ) {
            const e = u
            u = () => Gt(e())
          }
          let h = (e) => {
            d = y.onStop = () => {
              yt(e, s, 4)
            }
          }
          if (ht)
            return (
              (h = o.dG),
              t ? n && bt(t, s, 3, [u(), f ? [] : void 0, h]) : u(),
              o.dG
            )
          let m = f ? [] : Vt
          const g = () => {
            if (y.active)
              if (t) {
                const e = y.run()
                ;(a ||
                  p ||
                  (f
                    ? e.some((e, t) => (0, o.aU)(e, m[t]))
                    : (0, o.aU)(e, m))) &&
                  (d && d(),
                  bt(t, s, 3, [e, m === Vt ? void 0 : m, h]),
                  (m = e))
              } else y.run()
          }
          let v
          ;(g.allowRecurse = !!t),
            (v =
              'sync' === i
                ? g
                : 'post' === i
                ? () => Se(g, s && s.suspense)
                : () => {
                    !s || s.isMounted
                      ? (function (e) {
                          Lt(e, Ct, Ot, Dt)
                        })(g)
                      : g()
                  })
          const y = new r.qq(u, v)
          return (
            t
              ? n
                ? g()
                : (m = y.run())
              : 'post' === i
              ? Se(y.run.bind(y), s && s.suspense)
              : y.run(),
            () => {
              y.stop(), s && s.scope && (0, o.Od)(s.scope.effects, y)
            }
          )
        }
        function qt(e, t, n) {
          const r = this.proxy,
            a = (0, o.HD)(e)
              ? e.includes('.')
                ? Wt(r, e)
                : () => r[e]
              : e.bind(r, r)
          let i
          ;(0, o.mf)(t) ? (i = t) : ((i = t.handler), (n = t))
          const c = st
          dt(this)
          const l = zt(a, i.bind(r), n)
          return c ? dt(c) : pt(), l
        }
        function Wt(e, t) {
          const n = t.split('.')
          return () => {
            let t = e
            for (let e = 0; e < n.length && t; e++) t = t[n[e]]
            return t
          }
        }
        function Gt(e, t) {
          if (!(0, o.Kn)(e) || e.__v_skip) return e
          if ((t = t || new Set()).has(e)) return e
          if ((t.add(e), (0, r.dq)(e))) Gt(e.value, t)
          else if ((0, o.kJ)(e)) for (let n = 0; n < e.length; n++) Gt(e[n], t)
          else if ((0, o.DM)(e) || (0, o._N)(e))
            e.forEach((e) => {
              Gt(e, t)
            })
          else if ((0, o.PO)(e)) for (const n in e) Gt(e[n], t)
          return e
        }
        function Kt(e, t, n) {
          const r = arguments.length
          return 2 === r
            ? (0, o.Kn)(t) && !(0, o.kJ)(t)
              ? Ve(t)
                ? Ke(e, null, [t])
                : Ke(e, t)
              : Ke(e, null, t)
            : (r > 3
                ? (n = Array.prototype.slice.call(arguments, 2))
                : 3 === r && Ve(n) && (n = [n]),
              Ke(e, t, n))
        }
        Symbol('')
        const Jt = '3.2.20'
      },
      3912: (e, t, n) => {
        'use strict'
        var r = n(6252),
          o = n(3577)
        n(2262)
        const a = 'undefined' != typeof document ? document : null,
          i = new Map(),
          c = {
            insert: (e, t, n) => {
              t.insertBefore(e, n || null)
            },
            remove: (e) => {
              const t = e.parentNode
              t && t.removeChild(e)
            },
            createElement: (e, t, n, r) => {
              const o = t
                ? a.createElementNS('http://www.w3.org/2000/svg', e)
                : a.createElement(e, n ? { is: n } : void 0)
              return (
                'select' === e &&
                  r &&
                  null != r.multiple &&
                  o.setAttribute('multiple', r.multiple),
                o
              )
            },
            createText: (e) => a.createTextNode(e),
            createComment: (e) => a.createComment(e),
            setText: (e, t) => {
              e.nodeValue = t
            },
            setElementText: (e, t) => {
              e.textContent = t
            },
            parentNode: (e) => e.parentNode,
            nextSibling: (e) => e.nextSibling,
            querySelector: (e) => a.querySelector(e),
            setScopeId(e, t) {
              e.setAttribute(t, '')
            },
            cloneNode(e) {
              const t = e.cloneNode(!0)
              return '_value' in e && (t._value = e._value), t
            },
            insertStaticContent(e, t, n, r) {
              const o = n ? n.previousSibling : t.lastChild
              let c = i.get(e)
              if (!c) {
                const t = a.createElement('template')
                if (
                  ((t.innerHTML = r ? `<svg>${e}</svg>` : e),
                  (c = t.content),
                  r)
                ) {
                  const e = c.firstChild
                  for (; e.firstChild; ) c.appendChild(e.firstChild)
                  c.removeChild(e)
                }
                i.set(e, c)
              }
              return (
                t.insertBefore(c.cloneNode(!0), n),
                [
                  o ? o.nextSibling : t.firstChild,
                  n ? n.previousSibling : t.lastChild,
                ]
              )
            },
          },
          l = /\s*!important$/
        function s(e, t, n) {
          if ((0, o.kJ)(n)) n.forEach((n) => s(e, t, n))
          else if (t.startsWith('--')) e.setProperty(t, n)
          else {
            const r = (function (e, t) {
              const n = d[t]
              if (n) return n
              let r = (0, o._A)(t)
              if ('filter' !== r && r in e) return (d[t] = r)
              r = (0, o.kC)(r)
              for (let n = 0; n < u.length; n++) {
                const o = u[n] + r
                if (o in e) return (d[t] = o)
              }
              return t
            })(e, t)
            l.test(n)
              ? e.setProperty((0, o.rs)(r), n.replace(l, ''), 'important')
              : (e[r] = n)
          }
        }
        const u = ['Webkit', 'Moz', 'ms'],
          d = {},
          p = 'http://www.w3.org/1999/xlink'
        let f = Date.now,
          h = !1
        if ('undefined' != typeof window) {
          f() > document.createEvent('Event').timeStamp &&
            (f = () => performance.now())
          const e = navigator.userAgent.match(/firefox\/(\d+)/i)
          h = !!(e && Number(e[1]) <= 53)
        }
        let m = 0
        const g = Promise.resolve(),
          v = () => {
            m = 0
          }
        const y = /(?:Once|Passive|Capture)$/,
          b = /^on[a-z]/
        'undefined' != typeof HTMLElement && HTMLElement
        const _ = 'transition',
          S = 'animation',
          w = (e, { slots: t }) =>
            (0, r.h)(
              r.P$,
              (function (e) {
                const t = {}
                for (const n in e) n in x || (t[n] = e[n])
                if (!1 === e.css) return t
                const {
                    name: n = 'v',
                    type: r,
                    duration: a,
                    enterFromClass: i = `${n}-enter-from`,
                    enterActiveClass: c = `${n}-enter-active`,
                    enterToClass: l = `${n}-enter-to`,
                    appearFromClass: s = i,
                    appearActiveClass: u = c,
                    appearToClass: d = l,
                    leaveFromClass: p = `${n}-leave-from`,
                    leaveActiveClass: f = `${n}-leave-active`,
                    leaveToClass: h = `${n}-leave-to`,
                  } = e,
                  m = (function (e) {
                    if (null == e) return null
                    if ((0, o.Kn)(e)) return [C(e.enter), C(e.leave)]
                    {
                      const t = C(e)
                      return [t, t]
                    }
                  })(a),
                  g = m && m[0],
                  v = m && m[1],
                  {
                    onBeforeEnter: y,
                    onEnter: b,
                    onEnterCancelled: _,
                    onLeave: S,
                    onLeaveCancelled: w,
                    onBeforeAppear: j = y,
                    onAppear: A = b,
                    onAppearCancelled: T = _,
                  } = t,
                  F = (e, t, n) => {
                    E(e, t ? d : l), E(e, t ? u : c), n && n()
                  },
                  U = (e, t) => {
                    E(e, h), E(e, f), t && t()
                  },
                  N = (e) => (t, n) => {
                    const o = e ? A : b,
                      a = () => F(t, e, n)
                    k(o, [t, a]),
                      I(() => {
                        E(t, e ? s : i), D(t, e ? d : l), O(o) || P(t, r, g, a)
                      })
                  }
                return (0, o.l7)(t, {
                  onBeforeEnter(e) {
                    k(y, [e]), D(e, i), D(e, c)
                  },
                  onBeforeAppear(e) {
                    k(j, [e]), D(e, s), D(e, u)
                  },
                  onEnter: N(!1),
                  onAppear: N(!0),
                  onLeave(e, t) {
                    const n = () => U(e, t)
                    D(e, p),
                      document.body.offsetHeight,
                      D(e, f),
                      I(() => {
                        E(e, p), D(e, h), O(S) || P(e, r, v, n)
                      }),
                      k(S, [e, n])
                  },
                  onEnterCancelled(e) {
                    F(e, !1), k(_, [e])
                  },
                  onAppearCancelled(e) {
                    F(e, !0), k(T, [e])
                  },
                  onLeaveCancelled(e) {
                    U(e), k(w, [e])
                  },
                })
              })(e),
              t,
            )
        w.displayName = 'Transition'
        const x = {
            name: String,
            type: String,
            css: { type: Boolean, default: !0 },
            duration: [String, Number, Object],
            enterFromClass: String,
            enterActiveClass: String,
            enterToClass: String,
            appearFromClass: String,
            appearActiveClass: String,
            appearToClass: String,
            leaveFromClass: String,
            leaveActiveClass: String,
            leaveToClass: String,
          },
          k =
            ((w.props = (0, o.l7)({}, r.P$.props, x)),
            (e, t = []) => {
              ;(0, o.kJ)(e) ? e.forEach((e) => e(...t)) : e && e(...t)
            }),
          O = (e) =>
            !!e && ((0, o.kJ)(e) ? e.some((e) => e.length > 1) : e.length > 1)
        function C(e) {
          return (0, o.He)(e)
        }
        function D(e, t) {
          t.split(/\s+/).forEach((t) => t && e.classList.add(t)),
            (e._vtc || (e._vtc = new Set())).add(t)
        }
        function E(e, t) {
          t.split(/\s+/).forEach((t) => t && e.classList.remove(t))
          const { _vtc: n } = e
          n && (n.delete(t), n.size || (e._vtc = void 0))
        }
        function I(e) {
          requestAnimationFrame(() => {
            requestAnimationFrame(e)
          })
        }
        let j = 0
        function P(e, t, n, r) {
          const o = (e._endId = ++j),
            a = () => {
              o === e._endId && r()
            }
          if (n) return setTimeout(a, n)
          const {
            type: i,
            timeout: c,
            propCount: l,
          } = (function (e, t) {
            const n = window.getComputedStyle(e),
              r = (e) => (n[e] || '').split(', '),
              o = r('transitionDelay'),
              a = r('transitionDuration'),
              i = A(o, a),
              c = r('animationDelay'),
              l = r('animationDuration'),
              s = A(c, l)
            let u = null,
              d = 0,
              p = 0
            return (
              t === _
                ? i > 0 && ((u = _), (d = i), (p = a.length))
                : t === S
                ? s > 0 && ((u = S), (d = s), (p = l.length))
                : ((d = Math.max(i, s)),
                  (u = d > 0 ? (i > s ? _ : S) : null),
                  (p = u ? (u === _ ? a.length : l.length) : 0)),
              {
                type: u,
                timeout: d,
                propCount: p,
                hasTransform:
                  u === _ &&
                  /\b(transform|all)(,|$)/.test(n.transitionProperty),
              }
            )
          })(e, t)
          if (!i) return r()
          const s = i + 'end'
          let u = 0
          const d = () => {
              e.removeEventListener(s, p), a()
            },
            p = (t) => {
              t.target === e && ++u >= l && d()
            }
          setTimeout(() => {
            u < l && d()
          }, c + 1),
            e.addEventListener(s, p)
        }
        function A(e, t) {
          for (; e.length < t.length; ) e = e.concat(e)
          return Math.max(...t.map((t, n) => T(t) + T(e[n])))
        }
        function T(e) {
          return 1e3 * Number(e.slice(0, -1).replace(',', '.'))
        }
        new WeakMap(), new WeakMap()
        const F = {
          beforeMount(e, { value: t }, { transition: n }) {
            ;(e._vod = 'none' === e.style.display ? '' : e.style.display),
              n && t ? n.beforeEnter(e) : U(e, t)
          },
          mounted(e, { value: t }, { transition: n }) {
            n && t && n.enter(e)
          },
          updated(e, { value: t, oldValue: n }, { transition: r }) {
            !t != !n &&
              (r
                ? t
                  ? (r.beforeEnter(e), U(e, !0), r.enter(e))
                  : r.leave(e, () => {
                      U(e, !1)
                    })
                : U(e, t))
          },
          beforeUnmount(e, { value: t }) {
            U(e, t)
          },
        }
        function U(e, t) {
          e.style.display = t ? e._vod : 'none'
        }
        const N = (0, o.l7)(
          {
            patchProp: (e, t, n, a, i = !1, c, l, u, d) => {
              'class' === t
                ? (function (e, t, n) {
                    const r = e._vtc
                    r && (t = (t ? [t, ...r] : [...r]).join(' ')),
                      null == t
                        ? e.removeAttribute('class')
                        : n
                        ? e.setAttribute('class', t)
                        : (e.className = t)
                  })(e, a, i)
                : 'style' === t
                ? (function (e, t, n) {
                    const r = e.style,
                      a = r.display
                    if (n)
                      if ((0, o.HD)(n)) t !== n && (r.cssText = n)
                      else {
                        for (const e in n) s(r, e, n[e])
                        if (t && !(0, o.HD)(t))
                          for (const e in t) null == n[e] && s(r, e, '')
                      }
                    else e.removeAttribute('style')
                    '_vod' in e && (r.display = a)
                  })(e, n, a)
                : (0, o.F7)(t)
                ? (0, o.tR)(t) ||
                  (function (e, t, n, a, i = null) {
                    const c = e._vei || (e._vei = {}),
                      l = c[t]
                    if (a && l) l.value = a
                    else {
                      const [n, s] = (function (e) {
                        let t
                        if (y.test(e)) {
                          let n
                          for (t = {}; (n = e.match(y)); )
                            (e = e.slice(0, e.length - n[0].length)),
                              (t[n[0].toLowerCase()] = !0)
                        }
                        return [(0, o.rs)(e.slice(2)), t]
                      })(t)
                      if (a) {
                        const l = (c[t] = (function (e, t) {
                          const n = (e) => {
                            const a = e.timeStamp || f()
                            ;(h || a >= n.attached - 1) &&
                              (0, r.$d)(
                                (function (e, t) {
                                  if ((0, o.kJ)(t)) {
                                    const n = e.stopImmediatePropagation
                                    return (
                                      (e.stopImmediatePropagation = () => {
                                        n.call(e), (e._stopped = !0)
                                      }),
                                      t.map((e) => (t) => !t._stopped && e(t))
                                    )
                                  }
                                  return t
                                })(e, n.value),
                                t,
                                5,
                                [e],
                              )
                          }
                          return (
                            (n.value = e),
                            (n.attached = m || (g.then(v), (m = f()))),
                            n
                          )
                        })(a, i))
                        !(function (e, t, n, r) {
                          e.addEventListener(t, n, r)
                        })(e, n, l, s)
                      } else
                        l &&
                          ((function (e, t, n, r) {
                            e.removeEventListener(t, n, r)
                          })(e, n, l, s),
                          (c[t] = void 0))
                    }
                  })(e, t, 0, a, l)
                : (
                    '.' === t[0]
                      ? ((t = t.slice(1)), 1)
                      : '^' === t[0]
                      ? ((t = t.slice(1)), 0)
                      : (function (e, t, n, r) {
                          return r
                            ? 'innerHTML' === t ||
                                'textContent' === t ||
                                !!(t in e && b.test(t) && (0, o.mf)(n))
                            : 'spellcheck' !== t &&
                                'draggable' !== t &&
                                'form' !== t &&
                                ('list' !== t || 'INPUT' !== e.tagName) &&
                                ('type' !== t || 'TEXTAREA' !== e.tagName) &&
                                (!b.test(t) || !(0, o.HD)(n)) &&
                                t in e
                        })(e, t, a, i)
                  )
                ? (function (e, t, n, r, a, i, c) {
                    if ('innerHTML' === t || 'textContent' === t)
                      return r && c(r, a, i), void (e[t] = null == n ? '' : n)
                    if ('value' === t && 'PROGRESS' !== e.tagName) {
                      e._value = n
                      const r = null == n ? '' : n
                      return (
                        e.value !== r && (e.value = r),
                        void (null == n && e.removeAttribute(t))
                      )
                    }
                    if ('' === n || null == n) {
                      const r = typeof e[t]
                      if ('boolean' === r) return void (e[t] = (0, o.yA)(n))
                      if (null == n && 'string' === r)
                        return (e[t] = ''), void e.removeAttribute(t)
                      if ('number' === r) {
                        try {
                          e[t] = 0
                        } catch (e) {}
                        return void e.removeAttribute(t)
                      }
                    }
                    try {
                      e[t] = n
                    } catch (e) {}
                  })(e, t, a, c, l, u, d)
                : ('true-value' === t
                    ? (e._trueValue = a)
                    : 'false-value' === t && (e._falseValue = a),
                  (function (e, t, n, r, a) {
                    if (r && t.startsWith('xlink:'))
                      null == n
                        ? e.removeAttributeNS(p, t.slice(6, t.length))
                        : e.setAttributeNS(p, t, n)
                    else {
                      const r = (0, o.Pq)(t)
                      null == n || (r && !(0, o.yA)(n))
                        ? e.removeAttribute(t)
                        : e.setAttribute(t, r ? '' : n)
                    }
                  })(e, t, a, i))
            },
          },
          c,
        )
        let L
        var R = n(8334),
          H = n.n(R),
          M = (n(7337), n(9977)),
          B = n(2765),
          V = n(1726),
          Z = n(6872),
          z = n(954),
          q = n(4359),
          W = n(7322),
          G = n(9567),
          K = n(9978),
          J = n(9100),
          Q = n(2589),
          Y = n(9709),
          $ = n(4521),
          X = n(5732),
          ee = n(5425),
          te = n(9954),
          ne = n(5621),
          re = n(4299),
          oe = n(7053),
          ae = n(7030),
          ie = n(6990),
          ce = n(4921),
          le = n(8436),
          se = n(449),
          ue = n(1230),
          de = n(7685),
          pe = n(9020),
          fe = n(4888),
          he = n(3225),
          me = n(7100),
          ge = n(410),
          ve = n(1856),
          ye = n(3439),
          be = n(277),
          _e = n(6229),
          Se = n(7320),
          we = n(6720),
          xe = n(6707),
          ke = n(8328),
          Oe = n(7896),
          Ce = n(7416),
          De = n(2386),
          Ee = n(3712),
          Ie = n(5369),
          je = n(6420),
          Pe = n(1630),
          Ae = n(6190),
          Te = n(983),
          Fe = n(4300),
          Ue = n(920),
          Ne = n(4758),
          Le = n(977),
          Re = n(8254),
          He = n(4996),
          Me = n(4402),
          Be = n(8393),
          Ve = n(2734),
          Ze = n(9319),
          ze = n(9070),
          qe = n(7826),
          We = n(6693),
          Ge = n(9873),
          Ke = n(6090),
          Je = n(4570),
          Qe = n(3760),
          Ye = {
            Comments: M.Z,
            CustomStyle: B.Z,
            Home: V.Z,
            Quickstart: Z.Z,
            Theme: z.Z,
            UseInReact: q.Z,
            ActionSheet: W.Z,
            Area: G.Z,
            Button: K.Z,
            Calendar: J.Z,
            Card: Q.Z,
            Cell: Y.Z,
            Checkbox: $.Z,
            Circle: X.Z,
            Col: ee.Z,
            Collapse: te.Z,
            Common: ne.Z,
            ConfigProvider: re.Z,
            CountDown: oe.Z,
            DatetimePicker: ae.Z,
            Dialog: ie.Z,
            Divider: ce.Z,
            DropdownMenu: le.Z,
            Empty: se.Z,
            Field: ue.Z,
            Form: de.Z,
            GoodsAction: pe.Z,
            Grid: fe.Z,
            Icon: he.Z,
            Image: me.Z,
            Index: ge.Z,
            IndexBar: ve.Z,
            Loading: ye.Z,
            NavBar: be.Z,
            NoticeBar: _e.Z,
            Notify: Se.Z,
            NumberKeyboard: we.Z,
            Overlay: xe.Z,
            Pagination: ke.Z,
            Panel: Oe.Z,
            Picker: Ce.Z,
            Popup: De.Z,
            PowerScrollView: Ee.Z,
            Progress: Ie.Z,
            Radio: je.Z,
            Rate: Pe.Z,
            Search: Ae.Z,
            ShareSheet: Te.Z,
            Sidebar: Fe.Z,
            Skeleton: Ue.Z,
            Slider: Ne.Z,
            Stepper: Le.Z,
            Steps: Re.Z,
            Sticky: He.Z,
            SubmitBar: Me.Z,
            SwipeCell: Be.Z,
            Switch: Ve.Z,
            Tab: Ze.Z,
            Tabbar: ze.Z,
            Table: qe.Z,
            Tag: We.Z,
            Toast: Ge.Z,
            Transition: Ke.Z,
            TreeSelect: Je.Z,
            Uploader: Qe.Z,
          },
          $e = { class: 'app' },
          Xe = { class: 'van-doc' },
          et = { class: 'van-doc-nav__title' },
          tt = ['href', 'innerHTML'],
          nt = ['innerHTML'],
          rt = {
            name: 'VanDocNavLink',
            props: { base: String, item: Object },
            computed: {
              itemName() {
                var e = (this.item.title || this.item.name).split(' ')
                return ''
                  .concat(e[0], ' <span>')
                  .concat(e.slice(1).join(' '), '</span>')
              },
              path() {
                return ''.concat(this.base).concat(this.item.path)
              },
              active() {
                return (
                  this.$route.path === this.path ||
                  ('home' === this.item.path && this.$route.path === this.base)
                )
              },
            },
            watch: {
              active() {
                this.scrollIntoView()
              },
            },
            mounted() {
              this.scrollIntoView()
            },
            methods: {
              scrollIntoView() {
                this.active &&
                  this.$el &&
                  this.$el.scrollIntoViewIfNeeded &&
                  this.$el.scrollIntoViewIfNeeded()
              },
            },
            render: function (e, t, n, a, i, c) {
              var l = (0, r.up)('router-link')
              return n.item.path
                ? ((0, r.wg)(),
                  (0, r.j4)(
                    l,
                    {
                      key: 0,
                      class: (0, o.C_)({ active: c.active }),
                      to: c.path,
                      innerHTML: c.itemName,
                    },
                    null,
                    8,
                    ['class', 'to', 'innerHTML'],
                  ))
                : n.item.link
                ? ((0, r.wg)(),
                  (0, r.iD)(
                    'a',
                    { key: 1, href: n.item.link, innerHTML: c.itemName },
                    null,
                    8,
                    tt,
                  ))
                : ((0, r.wg)(),
                  (0, r.iD)(
                    'a',
                    { key: 2, innerHTML: c.itemName },
                    null,
                    8,
                    nt,
                  ))
            },
          },
          ot = {
            name: 'VanDocNav',
            components: { [rt.name]: rt },
            props: { lang: String, navConfig: Array },
            data: () => ({ top: 64, bottom: 0 }),
            computed: {
              style() {
                return { top: this.top + 'px', bottom: this.bottom + 'px' }
              },
              base() {
                return this.lang ? '/'.concat(this.lang, '/') : '/'
              },
            },
            created() {
              window.addEventListener('scroll', this.onScroll), this.onScroll()
            },
            methods: {
              onScroll() {
                var { pageYOffset: e } = window
                this.top = Math.max(0, 64 - e)
              },
            },
          },
          at = n(3379),
          it = n.n(at),
          ct = n(1654)
        it()(ct.Z, { insert: 'head', singleton: !1 }),
          ct.Z.locals,
          (ot.render = function (e, t, n, a, i, c) {
            var l = (0, r.up)('van-doc-nav-link')
            return (
              (0, r.wg)(),
              (0, r.iD)(
                'div',
                { class: 'van-doc-nav', style: (0, o.j5)(c.style) },
                [
                  ((0, r.wg)(!0),
                  (0, r.iD)(
                    r.HY,
                    null,
                    (0, r.Ko)(
                      n.navConfig,
                      (e, t) => (
                        (0, r.wg)(),
                        (0, r.iD)(
                          'div',
                          { class: 'van-doc-nav__group', key: t },
                          [
                            (0, r._)('div', et, (0, o.zw)(e.title), 1),
                            e.items
                              ? ((0, r.wg)(!0),
                                (0, r.iD)(
                                  r.HY,
                                  { key: 0 },
                                  (0, r.Ko)(
                                    e.items,
                                    (e, t) => (
                                      (0, r.wg)(),
                                      (0, r.iD)(
                                        'div',
                                        { key: t, class: 'van-doc-nav__item' },
                                        [
                                          (0, r.Wm)(
                                            l,
                                            { item: e, base: c.base },
                                            null,
                                            8,
                                            ['item', 'base'],
                                          ),
                                        ],
                                      )
                                    ),
                                  ),
                                  128,
                                ))
                              : (0, r.kq)('v-if', !0),
                          ],
                        )
                      ),
                    ),
                    128,
                  )),
                ],
                4,
              )
            )
          })
        var lt = ot,
          st = { class: 'van-doc-header' },
          ut = { class: 'van-doc-row' },
          dt = { class: 'van-doc-header__top' },
          pt = { class: 'van-doc-header__logo' },
          ft = ['src'],
          ht = { class: 'van-doc-header__top-nav' },
          mt = ['href'],
          gt = ['src'],
          vt = { key: 1 },
          yt = {
            key: 0,
            ref: 'version',
            class: 'van-doc-header__top-nav-item',
          },
          bt = { key: 0, class: 'van-doc-header__version-pop' },
          _t = ['onClick'],
          St = { key: 1, class: 'van-doc-header__top-nav-item' },
          wt = ['href'],
          xt = { id: 'docsearch' },
          kt = n(3278)
        function Ot(e) {
          return (Ot =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (e) {
                  return typeof e
                }
              : function (e) {
                  return e &&
                    'function' == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e
                })(e)
        }
        function Ct(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          )
        }
        function Dt() {
          return (Dt =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t]
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
              }
              return e
            }).apply(this, arguments)
        }
        function Et(e, t) {
          var n = Object.keys(e)
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e)
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
              })),
              n.push.apply(n, r)
          }
          return n
        }
        function It(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {}
            t % 2
              ? Et(Object(n), !0).forEach(function (t) {
                  Ct(e, t, n[t])
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : Et(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  )
                })
          }
          return e
        }
        function jt(e, t) {
          return (
            (function (e) {
              if (Array.isArray(e)) return e
            })(e) ||
            (function (e, t) {
              if (
                'undefined' != typeof Symbol &&
                Symbol.iterator in Object(e)
              ) {
                var n = [],
                  r = !0,
                  o = !1,
                  a = void 0
                try {
                  for (
                    var i, c = e[Symbol.iterator]();
                    !(r = (i = c.next()).done) &&
                    (n.push(i.value), !t || n.length !== t);
                    r = !0
                  );
                } catch (e) {
                  ;(o = !0), (a = e)
                } finally {
                  try {
                    r || null == c.return || c.return()
                  } finally {
                    if (o) throw a
                  }
                }
                return n
              }
            })(e, t) ||
            At(e, t) ||
            (function () {
              throw new TypeError(
                'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
              )
            })()
          )
        }
        function Pt(e) {
          return (
            (function (e) {
              if (Array.isArray(e)) return Tt(e)
            })(e) ||
            (function (e) {
              if ('undefined' != typeof Symbol && Symbol.iterator in Object(e))
                return Array.from(e)
            })(e) ||
            At(e) ||
            (function () {
              throw new TypeError(
                'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
              )
            })()
          )
        }
        function At(e, t) {
          if (e) {
            if ('string' == typeof e) return Tt(e, t)
            var n = Object.prototype.toString.call(e).slice(8, -1)
            return (
              'Object' === n && e.constructor && (n = e.constructor.name),
              'Map' === n || 'Set' === n
                ? Array.from(e)
                : 'Arguments' === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? Tt(e, t)
                : void 0
            )
          }
        }
        function Tt(e, t) {
          ;(null == t || t > e.length) && (t = e.length)
          for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n]
          return r
        }
        it()(kt.Z, { insert: 'head', singleton: !1 }), kt.Z.locals
        var Ft,
          Ut,
          Nt,
          Lt,
          Rt,
          Ht,
          Mt = {},
          Bt = [],
          Vt =
            /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i
        function Zt(e, t) {
          for (var n in t) e[n] = t[n]
          return e
        }
        function zt(e) {
          var t = e.parentNode
          t && t.removeChild(e)
        }
        function qt(e, t, n) {
          var r,
            o,
            a,
            i = arguments,
            c = {}
          for (a in t)
            'key' == a ? (r = t[a]) : 'ref' == a ? (o = t[a]) : (c[a] = t[a])
          if (arguments.length > 3)
            for (n = [n], a = 3; a < arguments.length; a++) n.push(i[a])
          if (
            (null != n && (c.children = n),
            'function' == typeof e && null != e.defaultProps)
          )
            for (a in e.defaultProps)
              void 0 === c[a] && (c[a] = e.defaultProps[a])
          return Wt(e, c, r, o, null)
        }
        function Wt(e, t, n, r, o) {
          var a = {
            type: e,
            props: t,
            key: n,
            ref: r,
            __k: null,
            __: null,
            __b: 0,
            __e: null,
            __d: void 0,
            __c: null,
            __h: null,
            constructor: void 0,
            __v: null == o ? ++Ft.__v : o,
          }
          return null != Ft.vnode && Ft.vnode(a), a
        }
        function Gt(e) {
          return e.children
        }
        function Kt(e, t) {
          ;(this.props = e), (this.context = t)
        }
        function Jt(e, t) {
          if (null == t) return e.__ ? Jt(e.__, e.__.__k.indexOf(e) + 1) : null
          for (var n; t < e.__k.length; t++)
            if (null != (n = e.__k[t]) && null != n.__e) return n.__e
          return 'function' == typeof e.type ? Jt(e) : null
        }
        function Qt(e) {
          var t, n
          if (null != (e = e.__) && null != e.__c) {
            for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
              if (null != (n = e.__k[t]) && null != n.__e) {
                e.__e = e.__c.base = n.__e
                break
              }
            return Qt(e)
          }
        }
        function Yt(e) {
          ;((!e.__d && (e.__d = !0) && Ut.push(e) && !$t.__r++) ||
            Lt !== Ft.debounceRendering) &&
            ((Lt = Ft.debounceRendering) || Nt)($t)
        }
        function $t() {
          for (var e; ($t.__r = Ut.length); )
            (e = Ut.sort(function (e, t) {
              return e.__v.__b - t.__v.__b
            })),
              (Ut = []),
              e.some(function (e) {
                var t, n, r, o, a, i, c
                e.__d &&
                  ((i = (a = (t = e).__v).__e),
                  (c = t.__P) &&
                    ((n = []),
                    ((r = Zt({}, a)).__v = a.__v + 1),
                    (o = ln(
                      c,
                      a,
                      r,
                      t.__n,
                      void 0 !== c.ownerSVGElement,
                      null != a.__h ? [i] : null,
                      n,
                      null == i ? Jt(a) : i,
                      a.__h,
                    )),
                    sn(n, a),
                    o != i && Qt(a)))
              })
        }
        function Xt(e, t, n, r, o, a, i, c, l, s) {
          var u,
            d,
            p,
            f,
            h,
            m,
            g,
            v = (r && r.__k) || Bt,
            y = v.length
          for (
            l == Mt && (l = null != i ? i[0] : y ? Jt(r, 0) : null),
              n.__k = [],
              u = 0;
            u < t.length;
            u++
          )
            if (
              null !=
              (f = n.__k[u] =
                null == (f = t[u]) || 'boolean' == typeof f
                  ? null
                  : 'string' == typeof f || 'number' == typeof f
                  ? Wt(null, f, null, null, f)
                  : Array.isArray(f)
                  ? Wt(Gt, { children: f }, null, null, null)
                  : null != f.__e || null != f.__c
                  ? Wt(f.type, f.props, f.key, null, f.__v)
                  : f)
            ) {
              if (
                ((f.__ = n),
                (f.__b = n.__b + 1),
                null === (p = v[u]) ||
                  (p && f.key == p.key && f.type === p.type))
              )
                v[u] = void 0
              else
                for (d = 0; d < y; d++) {
                  if ((p = v[d]) && f.key == p.key && f.type === p.type) {
                    v[d] = void 0
                    break
                  }
                  p = null
                }
              ;(h = ln(e, f, (p = p || Mt), o, a, i, c, l, s)),
                (d = f.ref) &&
                  p.ref != d &&
                  (g || (g = []),
                  p.ref && g.push(p.ref, null, f),
                  g.push(d, f.__c || h, f)),
                null != h
                  ? (null == m && (m = h),
                    (l = tn(e, f, p, v, i, h, l)),
                    s || 'option' != n.type
                      ? 'function' == typeof n.type && (n.__d = l)
                      : (e.value = ''))
                  : l && p.__e == l && l.parentNode != e && (l = Jt(p))
            }
          if (((n.__e = m), null != i && 'function' != typeof n.type))
            for (u = i.length; u--; ) null != i[u] && zt(i[u])
          for (u = y; u--; ) null != v[u] && pn(v[u], v[u])
          if (g) for (u = 0; u < g.length; u++) dn(g[u], g[++u], g[++u])
        }
        function en(e, t) {
          return (
            (t = t || []),
            null == e ||
              'boolean' == typeof e ||
              (Array.isArray(e)
                ? e.some(function (e) {
                    en(e, t)
                  })
                : t.push(e)),
            t
          )
        }
        function tn(e, t, n, r, o, a, i) {
          var c, l, s
          if (void 0 !== t.__d) (c = t.__d), (t.__d = void 0)
          else if (o == n || a != i || null == a.parentNode)
            e: if (null == i || i.parentNode !== e) e.appendChild(a), (c = null)
            else {
              for (l = i, s = 0; (l = l.nextSibling) && s < r.length; s += 2)
                if (l == a) break e
              e.insertBefore(a, i), (c = i)
            }
          return void 0 !== c ? c : a.nextSibling
        }
        function nn(e, t, n) {
          '-' === t[0]
            ? e.setProperty(t, n)
            : (e[t] =
                null == n
                  ? ''
                  : 'number' != typeof n || Vt.test(t)
                  ? n
                  : n + 'px')
        }
        function rn(e, t, n, r, o) {
          var a, i, c
          if ((o && 'className' == t && (t = 'class'), 'style' === t))
            if ('string' == typeof n) e.style.cssText = n
            else {
              if (('string' == typeof r && (e.style.cssText = r = ''), r))
                for (t in r) (n && t in n) || nn(e.style, t, '')
              if (n) for (t in n) (r && n[t] === r[t]) || nn(e.style, t, n[t])
            }
          else
            'o' === t[0] && 'n' === t[1]
              ? ((a = t !== (t = t.replace(/Capture$/, ''))),
                (i = t.toLowerCase()) in e && (t = i),
                (t = t.slice(2)),
                e.l || (e.l = {}),
                (e.l[t + a] = n),
                (c = a ? an : on),
                n
                  ? r || e.addEventListener(t, c, a)
                  : e.removeEventListener(t, c, a))
              : 'list' !== t &&
                'tagName' !== t &&
                'form' !== t &&
                'type' !== t &&
                'size' !== t &&
                'download' !== t &&
                'href' !== t &&
                !o &&
                t in e
              ? (e[t] = null == n ? '' : n)
              : 'function' != typeof n &&
                'dangerouslySetInnerHTML' !== t &&
                (t !== (t = t.replace(/xlink:?/, ''))
                  ? null == n || !1 === n
                    ? e.removeAttributeNS(
                        'http://www.w3.org/1999/xlink',
                        t.toLowerCase(),
                      )
                    : e.setAttributeNS(
                        'http://www.w3.org/1999/xlink',
                        t.toLowerCase(),
                        n,
                      )
                  : null == n || (!1 === n && !/^ar/.test(t))
                  ? e.removeAttribute(t)
                  : e.setAttribute(t, n))
        }
        function on(e) {
          this.l[e.type + !1](Ft.event ? Ft.event(e) : e)
        }
        function an(e) {
          this.l[e.type + !0](Ft.event ? Ft.event(e) : e)
        }
        function cn(e, t, n) {
          var r, o
          for (r = 0; r < e.__k.length; r++)
            (o = e.__k[r]) &&
              ((o.__ = e),
              o.__e &&
                ('function' == typeof o.type && o.__k.length > 1 && cn(o, t, n),
                (t = tn(n, o, o, e.__k, null, o.__e, t)),
                'function' == typeof e.type && (e.__d = t)))
        }
        function ln(e, t, n, r, o, a, i, c, l) {
          var s,
            u,
            d,
            p,
            f,
            h,
            m,
            g,
            v,
            y,
            b,
            _ = t.type
          if (void 0 !== t.constructor) return null
          null != n.__h &&
            ((l = n.__h), (c = t.__e = n.__e), (t.__h = null), (a = [c])),
            (s = Ft.__b) && s(t)
          try {
            e: if ('function' == typeof _) {
              if (
                ((g = t.props),
                (v = (s = _.contextType) && r[s.__c]),
                (y = s ? (v ? v.props.value : s.__) : r),
                n.__c
                  ? (m = (u = t.__c = n.__c).__ = u.__E)
                  : ('prototype' in _ && _.prototype.render
                      ? (t.__c = u = new _(g, y))
                      : ((t.__c = u = new Kt(g, y)),
                        (u.constructor = _),
                        (u.render = fn)),
                    v && v.sub(u),
                    (u.props = g),
                    u.state || (u.state = {}),
                    (u.context = y),
                    (u.__n = r),
                    (d = u.__d = !0),
                    (u.__h = [])),
                null == u.__s && (u.__s = u.state),
                null != _.getDerivedStateFromProps &&
                  (u.__s == u.state && (u.__s = Zt({}, u.__s)),
                  Zt(u.__s, _.getDerivedStateFromProps(g, u.__s))),
                (p = u.props),
                (f = u.state),
                d)
              )
                null == _.getDerivedStateFromProps &&
                  null != u.componentWillMount &&
                  u.componentWillMount(),
                  null != u.componentDidMount && u.__h.push(u.componentDidMount)
              else {
                if (
                  (null == _.getDerivedStateFromProps &&
                    g !== p &&
                    null != u.componentWillReceiveProps &&
                    u.componentWillReceiveProps(g, y),
                  (!u.__e &&
                    null != u.shouldComponentUpdate &&
                    !1 === u.shouldComponentUpdate(g, u.__s, y)) ||
                    t.__v === n.__v)
                ) {
                  ;(u.props = g),
                    (u.state = u.__s),
                    t.__v !== n.__v && (u.__d = !1),
                    (u.__v = t),
                    (t.__e = n.__e),
                    (t.__k = n.__k),
                    u.__h.length && i.push(u),
                    cn(t, c, e)
                  break e
                }
                null != u.componentWillUpdate &&
                  u.componentWillUpdate(g, u.__s, y),
                  null != u.componentDidUpdate &&
                    u.__h.push(function () {
                      u.componentDidUpdate(p, f, h)
                    })
              }
              ;(u.context = y),
                (u.props = g),
                (u.state = u.__s),
                (s = Ft.__r) && s(t),
                (u.__d = !1),
                (u.__v = t),
                (u.__P = e),
                (s = u.render(u.props, u.state, u.context)),
                (u.state = u.__s),
                null != u.getChildContext &&
                  (r = Zt(Zt({}, r), u.getChildContext())),
                d ||
                  null == u.getSnapshotBeforeUpdate ||
                  (h = u.getSnapshotBeforeUpdate(p, f)),
                (b =
                  null != s && s.type == Gt && null == s.key
                    ? s.props.children
                    : s),
                Xt(e, Array.isArray(b) ? b : [b], t, n, r, o, a, i, c, l),
                (u.base = t.__e),
                (t.__h = null),
                u.__h.length && i.push(u),
                m && (u.__E = u.__ = null),
                (u.__e = !1)
            } else
              null == a && t.__v === n.__v
                ? ((t.__k = n.__k), (t.__e = n.__e))
                : (t.__e = un(n.__e, t, n, r, o, a, i, l))
            ;(s = Ft.diffed) && s(t)
          } catch (e) {
            ;(t.__v = null),
              (l || null != a) &&
                ((t.__e = c), (t.__h = !!l), (a[a.indexOf(c)] = null)),
              Ft.__e(e, t, n)
          }
          return t.__e
        }
        function sn(e, t) {
          Ft.__c && Ft.__c(t, e),
            e.some(function (t) {
              try {
                ;(e = t.__h),
                  (t.__h = []),
                  e.some(function (e) {
                    e.call(t)
                  })
              } catch (e) {
                Ft.__e(e, t.__v)
              }
            })
        }
        function un(e, t, n, r, o, a, i, c) {
          var l,
            s,
            u,
            d,
            p,
            f = n.props,
            h = t.props
          if (((o = 'svg' === t.type || o), null != a))
            for (l = 0; l < a.length; l++)
              if (
                null != (s = a[l]) &&
                ((null === t.type
                  ? 3 === s.nodeType
                  : s.localName === t.type) ||
                  e == s)
              ) {
                ;(e = s), (a[l] = null)
                break
              }
          if (null == e) {
            if (null === t.type) return document.createTextNode(h)
            ;(e = o
              ? document.createElementNS('http://www.w3.org/2000/svg', t.type)
              : document.createElement(t.type, h.is && { is: h.is })),
              (a = null),
              (c = !1)
          }
          if (null === t.type) f === h || (c && e.data === h) || (e.data = h)
          else {
            if (
              (null != a && (a = Bt.slice.call(e.childNodes)),
              (u = (f = n.props || Mt).dangerouslySetInnerHTML),
              (d = h.dangerouslySetInnerHTML),
              !c)
            ) {
              if (null != a)
                for (f = {}, p = 0; p < e.attributes.length; p++)
                  f[e.attributes[p].name] = e.attributes[p].value
              ;(d || u) &&
                ((d &&
                  ((u && d.__html == u.__html) || d.__html === e.innerHTML)) ||
                  (e.innerHTML = (d && d.__html) || ''))
            }
            ;(function (e, t, n, r, o) {
              var a
              for (a in n)
                'children' === a ||
                  'key' === a ||
                  a in t ||
                  rn(e, a, null, n[a], r)
              for (a in t)
                (o && 'function' != typeof t[a]) ||
                  'children' === a ||
                  'key' === a ||
                  'value' === a ||
                  'checked' === a ||
                  n[a] === t[a] ||
                  rn(e, a, t[a], n[a], r)
            })(e, h, f, o, c),
              d
                ? (t.__k = [])
                : ((l = t.props.children),
                  Xt(
                    e,
                    Array.isArray(l) ? l : [l],
                    t,
                    n,
                    r,
                    'foreignObject' !== t.type && o,
                    a,
                    i,
                    Mt,
                    c,
                  )),
              c ||
                ('value' in h &&
                  void 0 !== (l = h.value) &&
                  (l !== e.value || ('progress' === t.type && !l)) &&
                  rn(e, 'value', l, f.value, !1),
                'checked' in h &&
                  void 0 !== (l = h.checked) &&
                  l !== e.checked &&
                  rn(e, 'checked', l, f.checked, !1))
          }
          return e
        }
        function dn(e, t, n) {
          try {
            'function' == typeof e ? e(t) : (e.current = t)
          } catch (e) {
            Ft.__e(e, n)
          }
        }
        function pn(e, t, n) {
          var r, o, a
          if (
            (Ft.unmount && Ft.unmount(e),
            (r = e.ref) &&
              ((r.current && r.current !== e.__e) || dn(r, null, t)),
            n || 'function' == typeof e.type || (n = null != (o = e.__e)),
            (e.__e = e.__d = void 0),
            null != (r = e.__c))
          ) {
            if (r.componentWillUnmount)
              try {
                r.componentWillUnmount()
              } catch (e) {
                Ft.__e(e, t)
              }
            r.base = r.__P = null
          }
          if ((r = e.__k)) for (a = 0; a < r.length; a++) r[a] && pn(r[a], t, n)
          null != o && zt(o)
        }
        function fn(e, t, n) {
          return this.constructor(e, n)
        }
        function hn(e, t, n) {
          var r, o, a
          Ft.__ && Ft.__(e, t),
            (o = (r = n === Rt) ? null : (n && n.__k) || t.__k),
            (e = qt(Gt, null, [e])),
            (a = []),
            ln(
              t,
              ((r ? t : n || t).__k = e),
              o || Mt,
              Mt,
              void 0 !== t.ownerSVGElement,
              n && !r
                ? [n]
                : o
                ? null
                : t.childNodes.length
                ? Bt.slice.call(t.childNodes)
                : null,
              a,
              n || Mt,
              r,
            ),
            sn(a, e)
        }
        function mn(e, t) {
          hn(e, t, Rt)
        }
        function gn(e, t, n) {
          var r,
            o,
            a,
            i = arguments,
            c = Zt({}, e.props)
          for (a in t)
            'key' == a ? (r = t[a]) : 'ref' == a ? (o = t[a]) : (c[a] = t[a])
          if (arguments.length > 3)
            for (n = [n], a = 3; a < arguments.length; a++) n.push(i[a])
          return (
            null != n && (c.children = n),
            Wt(e.type, c, r || e.key, o || e.ref, null)
          )
        }
        ;(Ft = {
          __e: function (e, t) {
            for (var n, r, o, a = t.__h; (t = t.__); )
              if ((n = t.__c) && !n.__)
                try {
                  if (
                    ((r = n.constructor) &&
                      null != r.getDerivedStateFromError &&
                      (n.setState(r.getDerivedStateFromError(e)), (o = n.__d)),
                    null != n.componentDidCatch &&
                      (n.componentDidCatch(e), (o = n.__d)),
                    o)
                  )
                    return (t.__h = a), (n.__E = n)
                } catch (t) {
                  e = t
                }
            throw e
          },
          __v: 0,
        }),
          (Kt.prototype.setState = function (e, t) {
            var n
            ;(n =
              null != this.__s && this.__s !== this.state
                ? this.__s
                : (this.__s = Zt({}, this.state))),
              'function' == typeof e && (e = e(Zt({}, n), this.props)),
              e && Zt(n, e),
              null != e && this.__v && (t && this.__h.push(t), Yt(this))
          }),
          (Kt.prototype.forceUpdate = function (e) {
            this.__v && ((this.__e = !0), e && this.__h.push(e), Yt(this))
          }),
          (Kt.prototype.render = Gt),
          (Ut = []),
          (Nt =
            'function' == typeof Promise
              ? Promise.prototype.then.bind(Promise.resolve())
              : setTimeout),
          ($t.__r = 0),
          (Rt = Mt),
          (Ht = 0)
        var vn,
          yn,
          bn,
          _n = 0,
          Sn = [],
          wn = Ft.__b,
          xn = Ft.__r,
          kn = Ft.diffed,
          On = Ft.__c,
          Cn = Ft.unmount
        function Dn(e, t) {
          Ft.__h && Ft.__h(yn, e, _n || t), (_n = 0)
          var n = yn.__H || (yn.__H = { __: [], __h: [] })
          return e >= n.__.length && n.__.push({}), n.__[e]
        }
        function En(e) {
          return (_n = 1), In(Rn, e)
        }
        function In(e, t, n) {
          var r = Dn(vn++, 2)
          return (
            (r.t = e),
            r.__c ||
              ((r.__ = [
                n ? n(t) : Rn(void 0, t),
                function (e) {
                  var t = r.t(r.__[0], e)
                  r.__[0] !== t && ((r.__ = [t, r.__[1]]), r.__c.setState({}))
                },
              ]),
              (r.__c = yn)),
            r.__
          )
        }
        function jn(e, t) {
          var n = Dn(vn++, 3)
          !Ft.__s &&
            Ln(n.__H, t) &&
            ((n.__ = e), (n.__H = t), yn.__H.__h.push(n))
        }
        function Pn(e, t) {
          var n = Dn(vn++, 4)
          !Ft.__s && Ln(n.__H, t) && ((n.__ = e), (n.__H = t), yn.__h.push(n))
        }
        function An(e, t) {
          var n = Dn(vn++, 7)
          return Ln(n.__H, t) && ((n.__ = e()), (n.__H = t), (n.__h = e)), n.__
        }
        function Tn() {
          Sn.forEach(function (e) {
            if (e.__P)
              try {
                e.__H.__h.forEach(Un), e.__H.__h.forEach(Nn), (e.__H.__h = [])
              } catch (t) {
                ;(e.__H.__h = []), Ft.__e(t, e.__v)
              }
          }),
            (Sn = [])
        }
        ;(Ft.__b = function (e) {
          ;(yn = null), wn && wn(e)
        }),
          (Ft.__r = function (e) {
            xn && xn(e), (vn = 0)
            var t = (yn = e.__c).__H
            t && (t.__h.forEach(Un), t.__h.forEach(Nn), (t.__h = []))
          }),
          (Ft.diffed = function (e) {
            kn && kn(e)
            var t = e.__c
            t &&
              t.__H &&
              t.__H.__h.length &&
              ((1 !== Sn.push(t) && bn === Ft.requestAnimationFrame) ||
                (
                  (bn = Ft.requestAnimationFrame) ||
                  function (e) {
                    var t,
                      n = function () {
                        clearTimeout(r),
                          Fn && cancelAnimationFrame(t),
                          setTimeout(e)
                      },
                      r = setTimeout(n, 100)
                    Fn && (t = requestAnimationFrame(n))
                  }
                )(Tn)),
              (yn = void 0)
          }),
          (Ft.__c = function (e, t) {
            t.some(function (e) {
              try {
                e.__h.forEach(Un),
                  (e.__h = e.__h.filter(function (e) {
                    return !e.__ || Nn(e)
                  }))
              } catch (n) {
                t.some(function (e) {
                  e.__h && (e.__h = [])
                }),
                  (t = []),
                  Ft.__e(n, e.__v)
              }
            }),
              On && On(e, t)
          }),
          (Ft.unmount = function (e) {
            Cn && Cn(e)
            var t = e.__c
            if (t && t.__H)
              try {
                t.__H.__.forEach(Un)
              } catch (e) {
                Ft.__e(e, t.__v)
              }
          })
        var Fn = 'function' == typeof requestAnimationFrame
        function Un(e) {
          var t = yn
          'function' == typeof e.__c && e.__c(), (yn = t)
        }
        function Nn(e) {
          var t = yn
          ;(e.__c = e.__()), (yn = t)
        }
        function Ln(e, t) {
          return (
            !e ||
            e.length !== t.length ||
            t.some(function (t, n) {
              return t !== e[n]
            })
          )
        }
        function Rn(e, t) {
          return 'function' == typeof t ? t(e) : t
        }
        function Hn(e, t) {
          for (var n in t) e[n] = t[n]
          return e
        }
        function Mn(e, t) {
          for (var n in e) if ('__source' !== n && !(n in t)) return !0
          for (var r in t) if ('__source' !== r && e[r] !== t[r]) return !0
          return !1
        }
        function Bn(e) {
          this.props = e
        }
        ;((Bn.prototype = new Kt()).isPureReactComponent = !0),
          (Bn.prototype.shouldComponentUpdate = function (e, t) {
            return Mn(this.props, e) || Mn(this.state, t)
          })
        var Vn = Ft.__b
        Ft.__b = function (e) {
          e.type &&
            e.type.__f &&
            e.ref &&
            ((e.props.ref = e.ref), (e.ref = null)),
            Vn && Vn(e)
        }
        var Zn =
            ('undefined' != typeof Symbol &&
              Symbol.for &&
              Symbol.for('react.forward_ref')) ||
            3911,
          zn = function (e, t) {
            return null == e ? null : en(en(e).map(t))
          },
          qn = {
            map: zn,
            forEach: zn,
            count: function (e) {
              return e ? en(e).length : 0
            },
            only: function (e) {
              var t = en(e)
              if (1 !== t.length) throw 'Children.only'
              return t[0]
            },
            toArray: en,
          },
          Wn = Ft.__e
        function Gn(e) {
          return (
            e &&
              (e.__c &&
                e.__c.__H &&
                (e.__c.__H.__.forEach(function (e) {
                  'function' == typeof e.__c && e.__c()
                }),
                (e.__c.__H = null)),
              ((e = Hn({}, e)).__c = null),
              (e.__k = e.__k && e.__k.map(Gn))),
            e
          )
        }
        function Kn(e) {
          return e && ((e.__v = null), (e.__k = e.__k && e.__k.map(Kn))), e
        }
        function Jn() {
          ;(this.__u = 0), (this.t = null), (this.__b = null)
        }
        function Qn(e) {
          var t = e.__.__c
          return t && t.__e && t.__e(e)
        }
        function Yn() {
          ;(this.u = null), (this.o = null)
        }
        ;(Ft.__e = function (e, t, n) {
          if (e.then)
            for (var r, o = t; (o = o.__); )
              if ((r = o.__c) && r.__c)
                return (
                  null == t.__e && ((t.__e = n.__e), (t.__k = n.__k)),
                  r.__c(e, t)
                )
          Wn(e, t, n)
        }),
          ((Jn.prototype = new Kt()).__c = function (e, t) {
            var n = t.__c,
              r = this
            null == r.t && (r.t = []), r.t.push(n)
            var o = Qn(r.__v),
              a = !1,
              i = function () {
                a ||
                  ((a = !0), (n.componentWillUnmount = n.__c), o ? o(c) : c())
              }
            ;(n.__c = n.componentWillUnmount),
              (n.componentWillUnmount = function () {
                i(), n.__c && n.__c()
              })
            var c = function () {
              var e
              if (!--r.__u)
                for (
                  r.__v.__k[0] = Kn(r.state.__e),
                    r.setState({ __e: (r.__b = null) });
                  (e = r.t.pop());

                )
                  e.forceUpdate()
            }
            !0 === t.__h ||
              r.__u++ ||
              r.setState({ __e: (r.__b = r.__v.__k[0]) }),
              e.then(i, i)
          }),
          (Jn.prototype.componentWillUnmount = function () {
            this.t = []
          }),
          (Jn.prototype.render = function (e, t) {
            this.__b &&
              (this.__v.__k && (this.__v.__k[0] = Gn(this.__b)),
              (this.__b = null))
            var n = t.__e && qt(Gt, null, e.fallback)
            return (
              n && (n.__h = null), [qt(Gt, null, t.__e ? null : e.children), n]
            )
          })
        var $n = function (e, t, n) {
          if (
            (++n[1] === n[0] && e.o.delete(t),
            e.props.revealOrder &&
              ('t' !== e.props.revealOrder[0] || !e.o.size))
          )
            for (n = e.u; n; ) {
              for (; n.length > 3; ) n.pop()()
              if (n[1] < n[0]) break
              e.u = n = n[2]
            }
        }
        function Xn(e) {
          return (
            (this.getChildContext = function () {
              return e.context
            }),
            e.children
          )
        }
        function er(e) {
          var t = this,
            n = e.i,
            r = qt(Xn, { context: t.context }, e.__v)
          ;(t.componentWillUnmount = function () {
            var e = t.l.parentNode
            e && e.removeChild(t.l), pn(t.s)
          }),
            t.i && t.i !== n && (t.componentWillUnmount(), (t.h = !1)),
            e.__v
              ? t.h
                ? ((n.__k = t.__k), hn(r, n), (t.__k = n.__k))
                : ((t.l = document.createTextNode('')),
                  (t.__k = n.__k),
                  mn('', n),
                  n.appendChild(t.l),
                  (t.h = !0),
                  (t.i = n),
                  hn(r, n, t.l),
                  (n.__k = t.__k),
                  (t.__k = t.l.__k))
              : t.h && t.componentWillUnmount(),
            (t.s = r)
        }
        function tr(e, t) {
          return qt(er, { __v: e, i: t })
        }
        ;((Yn.prototype = new Kt()).__e = function (e) {
          var t = this,
            n = Qn(t.__v),
            r = t.o.get(e)
          return (
            r[0]++,
            function (o) {
              var a = function () {
                t.props.revealOrder ? (r.push(o), $n(t, e, r)) : o()
              }
              n ? n(a) : a()
            }
          )
        }),
          (Yn.prototype.render = function (e) {
            ;(this.u = null), (this.o = new Map())
            var t = en(e.children)
            e.revealOrder && 'b' === e.revealOrder[0] && t.reverse()
            for (var n = t.length; n--; )
              this.o.set(t[n], (this.u = [1, 0, this.u]))
            return e.children
          }),
          (Yn.prototype.componentDidUpdate = Yn.prototype.componentDidMount =
            function () {
              var e = this
              this.o.forEach(function (t, n) {
                $n(e, n, t)
              })
            })
        var nr =
            ('undefined' != typeof Symbol &&
              Symbol.for &&
              Symbol.for('react.element')) ||
            60103,
          rr =
            /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
          or = 'undefined' != typeof Symbol ? /fil|che|rad/i : /fil|che|ra/i
        function ar(e, t, n) {
          return (
            null == t.__k && (t.textContent = ''),
            hn(e, t),
            'function' == typeof n && n(),
            e ? e.__c : null
          )
        }
        ;(Kt.prototype.isReactComponent = {}),
          [
            'componentWillMount',
            'componentWillReceiveProps',
            'componentWillUpdate',
          ].forEach(function (e) {
            Object.defineProperty(Kt.prototype, e, {
              configurable: !0,
              get: function () {
                return this['UNSAFE_' + e]
              },
              set: function (t) {
                Object.defineProperty(this, e, {
                  configurable: !0,
                  writable: !0,
                  value: t,
                })
              },
            })
          })
        var ir = Ft.event
        function cr() {}
        function lr() {
          return this.cancelBubble
        }
        function sr() {
          return this.defaultPrevented
        }
        Ft.event = function (e) {
          return (
            ir && (e = ir(e)),
            (e.persist = cr),
            (e.isPropagationStopped = lr),
            (e.isDefaultPrevented = sr),
            (e.nativeEvent = e)
          )
        }
        var ur,
          dr = {
            configurable: !0,
            get: function () {
              return this.class
            },
          },
          pr = Ft.vnode
        Ft.vnode = function (e) {
          var t = e.type,
            n = e.props,
            r = n
          if ('string' == typeof t) {
            for (var o in ((r = {}), n)) {
              var a = n[o]
              'defaultValue' === o && 'value' in n && null == n.value
                ? (o = 'value')
                : 'download' === o && !0 === a
                ? (a = '')
                : /ondoubleclick/i.test(o)
                ? (o = 'ondblclick')
                : /^onchange(textarea|input)/i.test(o + t) && !or.test(n.type)
                ? (o = 'oninput')
                : /^on(Ani|Tra|Tou|BeforeInp)/.test(o)
                ? (o = o.toLowerCase())
                : rr.test(o)
                ? (o = o.replace(/[A-Z0-9]/, '-$&').toLowerCase())
                : null === a && (a = void 0),
                (r[o] = a)
            }
            'select' == t &&
              r.multiple &&
              Array.isArray(r.value) &&
              (r.value = en(n.children).forEach(function (e) {
                e.props.selected = -1 != r.value.indexOf(e.props.value)
              })),
              (e.props = r)
          }
          t &&
            n.class != n.className &&
            ((dr.enumerable = 'className' in n),
            null != n.className && (r.class = n.className),
            Object.defineProperty(r, 'className', dr)),
            (e.$$typeof = nr),
            pr && pr(e)
        }
        var fr = Ft.__r
        function hr(e) {
          return !!e && e.$$typeof === nr
        }
        Ft.__r = function (e) {
          fr && fr(e), (ur = e.__c)
        }
        var mr = {
          useState: En,
          useReducer: In,
          useEffect: jn,
          useLayoutEffect: Pn,
          useRef: function (e) {
            return (
              (_n = 5),
              An(function () {
                return { current: e }
              }, [])
            )
          },
          useImperativeHandle: function (e, t, n) {
            ;(_n = 6),
              Pn(
                function () {
                  'function' == typeof e ? e(t()) : e && (e.current = t())
                },
                null == n ? n : n.concat(e),
              )
          },
          useMemo: An,
          useCallback: function (e, t) {
            return (
              (_n = 8),
              An(function () {
                return e
              }, t)
            )
          },
          useContext: function (e) {
            var t = yn.context[e.__c],
              n = Dn(vn++, 9)
            return (
              (n.__c = e),
              t
                ? (null == n.__ && ((n.__ = !0), t.sub(yn)), t.props.value)
                : e.__
            )
          },
          useDebugValue: function (e, t) {
            Ft.useDebugValue && Ft.useDebugValue(t ? t(e) : e)
          },
          version: '16.8.0',
          Children: qn,
          render: ar,
          hydrate: function (e, t, n) {
            return mn(e, t), 'function' == typeof n && n(), e ? e.__c : null
          },
          unmountComponentAtNode: function (e) {
            return !!e.__k && (hn(null, e), !0)
          },
          createPortal: tr,
          createElement: qt,
          createContext: function (e, t) {
            var n = {
              __c: (t = '__cC' + Ht++),
              __: e,
              Consumer: function (e, t) {
                return e.children(t)
              },
              Provider: function (e, n, r) {
                return (
                  this.getChildContext ||
                    ((n = []),
                    ((r = {})[t] = this),
                    (this.getChildContext = function () {
                      return r
                    }),
                    (this.shouldComponentUpdate = function (e) {
                      this.props.value !== e.value && n.some(Yt)
                    }),
                    (this.sub = function (e) {
                      n.push(e)
                      var t = e.componentWillUnmount
                      e.componentWillUnmount = function () {
                        n.splice(n.indexOf(e), 1), t && t.call(e)
                      }
                    })),
                  e.children
                )
              },
            }
            return (n.Provider.__ = n.Consumer.contextType = n)
          },
          createFactory: function (e) {
            return qt.bind(null, e)
          },
          cloneElement: function (e) {
            return hr(e) ? gn.apply(null, arguments) : e
          },
          createRef: function () {
            return { current: null }
          },
          Fragment: Gt,
          isValidElement: hr,
          findDOMNode: function (e) {
            return (e && (e.base || (1 === e.nodeType && e))) || null
          },
          Component: Kt,
          PureComponent: Bn,
          memo: function (e, t) {
            function n(e) {
              var n = this.props.ref,
                r = n == e.ref
              return (
                !r && n && (n.call ? n(null) : (n.current = null)),
                t ? !t(this.props, e) || !r : Mn(this.props, e)
              )
            }
            function r(t) {
              return (this.shouldComponentUpdate = n), qt(e, t)
            }
            return (
              (r.displayName = 'Memo(' + (e.displayName || e.name) + ')'),
              (r.prototype.isReactComponent = !0),
              (r.__f = !0),
              r
            )
          },
          forwardRef: function (e) {
            function t(t, n) {
              var r = Hn({}, t)
              return (
                delete r.ref,
                e(
                  r,
                  (n = t.ref || n) && ('object' != Ot(n) || 'current' in n)
                    ? n
                    : null,
                )
              )
            }
            return (
              (t.$$typeof = Zn),
              (t.render = t),
              (t.prototype.isReactComponent = t.__f = !0),
              (t.displayName = 'ForwardRef(' + (e.displayName || e.name) + ')'),
              t
            )
          },
          unstable_batchedUpdates: function (e, t) {
            return e(t)
          },
          StrictMode: Gt,
          Suspense: Jn,
          SuspenseList: Yn,
          lazy: function (e) {
            var t, n, r
            function o(o) {
              if (
                (t ||
                  (t = e()).then(
                    function (e) {
                      n = e.default || e
                    },
                    function (e) {
                      r = e
                    },
                  ),
                r)
              )
                throw r
              if (!n) throw t
              return qt(n, o)
            }
            return (o.displayName = 'Lazy'), (o.__f = !0), o
          },
          __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
            ReactCurrentDispatcher: {
              current: {
                readContext: function (e) {
                  return ur.__n[e.__c].props.value
                },
              },
            },
          },
        }
        function gr() {
          return mr.createElement(
            'svg',
            {
              width: '15',
              height: '15',
              className: 'DocSearch-Control-Key-Icon',
            },
            mr.createElement('path', {
              d: 'M4.505 4.496h2M5.505 5.496v5M8.216 4.496l.055 5.993M10 7.5c.333.333.5.667.5 1v2M12.326 4.5v5.996M8.384 4.496c1.674 0 2.116 0 2.116 1.5s-.442 1.5-2.116 1.5M3.205 9.303c-.09.448-.277 1.21-1.241 1.203C1 10.5.5 9.513.5 8V7c0-1.57.5-2.5 1.464-2.494.964.006 1.134.598 1.24 1.342M12.553 10.5h1.953',
              strokeWidth: '1.2',
              stroke: 'currentColor',
              fill: 'none',
              strokeLinecap: 'square',
            }),
          )
        }
        function vr() {
          return mr.createElement(
            'svg',
            {
              width: '20',
              height: '20',
              className: 'DocSearch-Search-Icon',
              viewBox: '0 0 20 20',
            },
            mr.createElement('path', {
              d: 'M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z',
              stroke: 'currentColor',
              fill: 'none',
              fillRule: 'evenodd',
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
            }),
          )
        }
        function yr() {
          return (yr =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t]
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
              }
              return e
            }).apply(this, arguments)
        }
        function br(e, t) {
          ;(null == t || t > e.length) && (t = e.length)
          for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n]
          return r
        }
        var _r = mr.forwardRef(function (e, t) {
          var n = e.translations,
            r = void 0 === n ? {} : n,
            o = (function (e, t) {
              if (null == e) return {}
              var n,
                r,
                o = (function (e, t) {
                  if (null == e) return {}
                  var n,
                    r,
                    o = {},
                    a = Object.keys(e)
                  for (r = 0; r < a.length; r++)
                    (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n])
                  return o
                })(e, t)
              if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e)
                for (r = 0; r < a.length; r++)
                  (n = a[r]),
                    t.indexOf(n) >= 0 ||
                      (Object.prototype.propertyIsEnumerable.call(e, n) &&
                        (o[n] = e[n]))
              }
              return o
            })(e, ['translations']),
            a = r.buttonText,
            i = void 0 === a ? 'Search' : a,
            c = r.buttonAriaLabel,
            l = void 0 === c ? 'Search' : c,
            s = (function (e, t) {
              return (
                (function (e) {
                  if (Array.isArray(e)) return e
                })(e) ||
                (function (e, t) {
                  if (
                    'undefined' != typeof Symbol &&
                    Symbol.iterator in Object(e)
                  ) {
                    var n = [],
                      r = !0,
                      o = !1,
                      a = void 0
                    try {
                      for (
                        var i, c = e[Symbol.iterator]();
                        !(r = (i = c.next()).done) &&
                        (n.push(i.value), 2 !== n.length);
                        r = !0
                      );
                    } catch (e) {
                      ;(o = !0), (a = e)
                    } finally {
                      try {
                        r || null == c.return || c.return()
                      } finally {
                        if (o) throw a
                      }
                    }
                    return n
                  }
                })(e) ||
                (function (e, t) {
                  if (e) {
                    if ('string' == typeof e) return br(e, 2)
                    var n = Object.prototype.toString.call(e).slice(8, -1)
                    return (
                      'Object' === n &&
                        e.constructor &&
                        (n = e.constructor.name),
                      'Map' === n || 'Set' === n
                        ? Array.from(e)
                        : 'Arguments' === n ||
                          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                        ? br(e, 2)
                        : void 0
                    )
                  }
                })(e) ||
                (function () {
                  throw new TypeError(
                    'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                  )
                })()
              )
            })(En(null)),
            u = s[0],
            d = s[1]
          return (
            jn(function () {
              'undefined' != typeof navigator &&
                d(
                  /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)
                    ? '⌘'
                    : 'Ctrl',
                )
            }, []),
            mr.createElement(
              'button',
              yr(
                {
                  type: 'button',
                  className: 'DocSearch DocSearch-Button',
                  'aria-label': l,
                },
                o,
                { ref: t },
              ),
              mr.createElement(
                'span',
                { className: 'DocSearch-Button-Container' },
                mr.createElement(vr, null),
                mr.createElement(
                  'span',
                  { className: 'DocSearch-Button-Placeholder' },
                  i,
                ),
              ),
              null !== u &&
                mr.createElement(
                  'span',
                  { className: 'DocSearch-Button-Keys' },
                  mr.createElement(
                    'span',
                    { className: 'DocSearch-Button-Key' },
                    'Ctrl' === u ? mr.createElement(gr, null) : u,
                  ),
                  mr.createElement(
                    'span',
                    { className: 'DocSearch-Button-Key' },
                    'K',
                  ),
                ),
            )
          )
        })
        function Sr(e, t) {
          var n = Object.keys(e)
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e)
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
              })),
              n.push.apply(n, r)
          }
          return n
        }
        function wr(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          )
        }
        function xr(e) {
          return e.reduce(function (e, t) {
            return e.concat(t)
          }, [])
        }
        var kr = 0
        function Or(e) {
          return 0 === e.collections.length
            ? 0
            : e.collections.reduce(function (e, t) {
                return e + t.items.length
              }, 0)
        }
        function Cr(e, t, n, r) {
          if (null === t && e < 0) return n - 1
          if (null !== r && 0 === t && e < 0) return n - 1
          var o = (null === t ? -1 : t) + e
          return o <= -1 || o >= n ? (null === r ? null : 0) : o
        }
        var Dr = function () {}
        function Er(e, t) {
          var n = Object.keys(e)
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e)
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
              })),
              n.push.apply(n, r)
          }
          return n
        }
        function Ir(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          )
        }
        function jr(e) {
          var t = e.state,
            n = (function (e) {
              var t = e.state,
                n = t.collections
                  .map(function (e) {
                    return e.items.length
                  })
                  .reduce(function (e, t, n) {
                    var r = (e[n - 1] || 0) + t
                    return e.push(r), e
                  }, [])
                  .reduce(function (e, n) {
                    return n <= t.selectedItemId ? e + 1 : e
                  }, 0)
              return t.collections[n]
            })({ state: t })
          if (!n) return null
          var r =
              n.items[
                (function (e) {
                  for (
                    var t = e.state, n = e.collection, r = !1, o = 0, a = 0;
                    !1 === r;

                  ) {
                    var i = t.collections[o]
                    if (i === n) {
                      r = !0
                      break
                    }
                    ;(a += i.items.length), o++
                  }
                  return t.selectedItemId - a
                })({ state: t, collection: n })
              ],
            o = n.source
          return {
            item: r,
            itemInputValue: o.getItemInputValue({ item: r, state: t }),
            itemUrl: o.getItemUrl({ item: r, state: t }),
            source: o,
          }
        }
        function Pr(e, t) {
          return e === t || (e.contains && e.contains(t))
        }
        function Ar(e, t) {
          var n = Object.keys(e)
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e)
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
              })),
              n.push.apply(n, r)
          }
          return n
        }
        function Tr(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {}
            t % 2
              ? Ar(Object(n), !0).forEach(function (t) {
                  Fr(e, t, n[t])
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : Ar(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  )
                })
          }
          return e
        }
        function Fr(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          )
        }
        function Ur(e) {
          var t = e.environment
          return {
            navigate: function (e) {
              var n = e.itemUrl
              t.location.assign(n)
            },
            navigateNewTab: function (e) {
              var n = e.itemUrl,
                r = t.open(n, '_blank', 'noopener')
              r && r.focus()
            },
            navigateNewWindow: function (e) {
              var n = e.itemUrl
              t.open(n, '_blank', 'noopener')
            },
          }
        }
        function Nr(e, t) {
          ;(null == t || t > e.length) && (t = e.length)
          for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n]
          return r
        }
        function Lr(e, t) {
          var n = Object.keys(e)
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e)
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
              })),
              n.push.apply(n, r)
          }
          return n
        }
        function Rr(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {}
            t % 2
              ? Lr(Object(n), !0).forEach(function (t) {
                  Hr(e, t, n[t])
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : Lr(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  )
                })
          }
          return e
        }
        function Hr(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          )
        }
        function Mr(e, t) {
          var n = Object.keys(e)
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e)
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
              })),
              n.push.apply(n, r)
          }
          return n
        }
        function Br(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {}
            t % 2
              ? Mr(Object(n), !0).forEach(function (t) {
                  Vr(e, t, n[t])
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : Mr(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  )
                })
          }
          return e
        }
        function Vr(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          )
        }
        var Zr = null
        function zr(e) {
          var t,
            n = e.query,
            r = e.event,
            o = e.store,
            a = e.props,
            i = e.setSelectedItemId,
            c = e.setQuery,
            l = e.setCollections,
            s = e.setIsOpen,
            u = e.setStatus,
            d = e.setContext,
            p = e.nextState,
            f = void 0 === p ? {} : p,
            h = e.refresh
          return a.onInput
            ? Promise.resolve(
                a.onInput({
                  query: n,
                  state: o.getState(),
                  setSelectedItemId: i,
                  setQuery: c,
                  setCollections: l,
                  setIsOpen: s,
                  setStatus: u,
                  setContext: d,
                  refresh: h,
                }),
              )
            : (Zr && clearTimeout(Zr),
              c(n),
              i(a.defaultSelectedItemId),
              0 === n.length && !1 === a.openOnFocus
                ? (u('idle'),
                  l(
                    o.getState().collections.map(function (e) {
                      return Br(Br({}, e), {}, { items: [] })
                    }),
                  ),
                  s(
                    null !== (t = f.isOpen) && void 0 !== t
                      ? t
                      : a.shouldPanelShow({ state: o.getState() }),
                  ),
                  Promise.resolve())
                : (u('loading'),
                  (Zr = a.environment.setTimeout(function () {
                    u('stalled')
                  }, a.stallThreshold)),
                  a
                    .getSources({
                      query: n,
                      state: o.getState(),
                      setSelectedItemId: i,
                      setQuery: c,
                      setCollections: l,
                      setIsOpen: s,
                      setStatus: u,
                      setContext: d,
                      refresh: h,
                    })
                    .then(function (e) {
                      return (
                        u('loading'),
                        Promise.all(
                          e.map(function (e) {
                            return Promise.resolve(
                              e.getItems({
                                query: n,
                                state: o.getState(),
                                setSelectedItemId: i,
                                setQuery: c,
                                setCollections: l,
                                setIsOpen: s,
                                setStatus: u,
                                setContext: d,
                                refresh: h,
                              }),
                            ).then(function (t) {
                              return { source: e, items: t }
                            })
                          }),
                        )
                          .then(function (e) {
                            var t
                            u('idle'),
                              l(e),
                              s(
                                null !== (t = f.isOpen) && void 0 !== t
                                  ? t
                                  : (0 === n.length && a.openOnFocus) ||
                                      a.shouldPanelShow({
                                        state: o.getState(),
                                      }),
                              )
                            var p = jr({ state: o.getState() })
                            if (null !== o.getState().selectedItemId && p) {
                              var h = p.item,
                                m = p.itemInputValue,
                                g = p.itemUrl,
                                v = p.source
                              v.onHighlight({
                                item: h,
                                itemInputValue: m,
                                itemUrl: g,
                                source: v,
                                state: o.getState(),
                                setSelectedItemId: i,
                                setQuery: c,
                                setCollections: l,
                                setIsOpen: s,
                                setStatus: u,
                                setContext: d,
                                event: r,
                              })
                            }
                          })
                          .catch(function (e) {
                            throw (u('error'), e)
                          })
                          .finally(function () {
                            Zr && clearTimeout(Zr)
                          })
                      )
                    })))
        }
        function qr(e, t) {
          if (null == e) return {}
          var n,
            r,
            o = (function (e, t) {
              if (null == e) return {}
              var n,
                r,
                o = {},
                a = Object.keys(e)
              for (r = 0; r < a.length; r++)
                (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n])
              return o
            })(e, t)
          if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(e)
            for (r = 0; r < a.length; r++)
              (n = a[r]),
                t.indexOf(n) >= 0 ||
                  (Object.prototype.propertyIsEnumerable.call(e, n) &&
                    (o[n] = e[n]))
          }
          return o
        }
        function Wr(e, t) {
          var n = Object.keys(e)
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e)
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
              })),
              n.push.apply(n, r)
          }
          return n
        }
        function Gr(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {}
            t % 2
              ? Wr(Object(n), !0).forEach(function (t) {
                  Kr(e, t, n[t])
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : Wr(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  )
                })
          }
          return e
        }
        function Kr(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          )
        }
        function Jr(e) {
          var t = e.state
          return !1 === t.isOpen || null === t.selectedItemId
            ? null
            : jr({ state: t }).itemInputValue || null
        }
        function Qr(e, t) {
          var n = Object.keys(e)
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e)
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
              })),
              n.push.apply(n, r)
          }
          return n
        }
        function Yr(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {}
            t % 2
              ? Qr(Object(n), !0).forEach(function (t) {
                  $r(e, t, n[t])
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : Qr(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  )
                })
          }
          return e
        }
        function $r(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          )
        }
        var Xr = function (e, t) {
          switch (t.type) {
            case 'setSelectedItemId':
            case 'mousemove':
              return Yr(Yr({}, e), {}, { selectedItemId: t.payload })
            case 'setQuery':
              return Yr(Yr({}, e), {}, { query: t.payload, completion: null })
            case 'setCollections':
              return Yr(Yr({}, e), {}, { collections: t.payload })
            case 'setIsOpen':
              return Yr(Yr({}, e), {}, { isOpen: t.payload })
            case 'setStatus':
              return Yr(Yr({}, e), {}, { status: t.payload })
            case 'setContext':
              return Yr(
                Yr({}, e),
                {},
                { context: Yr(Yr({}, e.context), t.payload) },
              )
            case 'ArrowDown':
              var n = Yr(
                Yr({}, e),
                {},
                {
                  selectedItemId: Cr(
                    1,
                    e.selectedItemId,
                    Or(e),
                    t.props.defaultSelectedItemId,
                  ),
                },
              )
              return Yr(Yr({}, n), {}, { completion: Jr({ state: n }) })
            case 'ArrowUp':
              var r = Yr(
                Yr({}, e),
                {},
                {
                  selectedItemId: Cr(
                    -1,
                    e.selectedItemId,
                    Or(e),
                    t.props.defaultSelectedItemId,
                  ),
                },
              )
              return Yr(Yr({}, r), {}, { completion: Jr({ state: r }) })
            case 'Escape':
              return e.isOpen
                ? Yr(Yr({}, e), {}, { isOpen: !1, completion: null })
                : Yr(
                    Yr({}, e),
                    {},
                    { query: '', status: 'idle', collections: [] },
                  )
            case 'submit':
              return Yr(
                Yr({}, e),
                {},
                { selectedItemId: null, isOpen: !1, status: 'idle' },
              )
            case 'reset':
              return Yr(
                Yr({}, e),
                {},
                {
                  selectedItemId:
                    !0 === t.props.openOnFocus
                      ? t.props.defaultSelectedItemId
                      : null,
                  isOpen: t.props.openOnFocus,
                  status: 'idle',
                  query: '',
                },
              )
            case 'focus':
              return Yr(
                Yr({}, e),
                {},
                {
                  selectedItemId: t.props.defaultSelectedItemId,
                  isOpen: t.props.openOnFocus || e.query.length > 0,
                },
              )
            case 'blur':
              return t.props.debug
                ? e
                : Yr(Yr({}, e), {}, { isOpen: !1, selectedItemId: null })
            case 'mouseleave':
              return Yr(
                Yr({}, e),
                {},
                { selectedItemId: t.props.defaultSelectedItemId },
              )
            default:
              return e
          }
        }
        function eo(e) {
          var t = (function (e) {
              var t,
                n = 'undefined' != typeof window ? window : {},
                r = e.plugins || []
              return Rr(
                Rr(
                  {
                    debug: !1,
                    openOnFocus: !1,
                    placeholder: '',
                    autoFocus: !1,
                    defaultSelectedItemId: null,
                    stallThreshold: 300,
                    environment: n,
                    shouldPanelShow: function (e) {
                      return Or(e.state) > 0
                    },
                  },
                  e,
                ),
                {},
                {
                  id:
                    null !== (t = e.id) && void 0 !== t
                      ? t
                      : 'autocomplete-'.concat(kr++),
                  initialState: Rr(
                    {
                      selectedItemId: null,
                      query: '',
                      completion: null,
                      collections: [],
                      isOpen: !1,
                      status: 'idle',
                      context: {},
                    },
                    e.initialState,
                  ),
                  plugins: r,
                  onStateChange: function (t) {
                    var n
                    null === (n = e.onStateChange) ||
                      void 0 === n ||
                      n.call(e, t),
                      r.forEach(function (e) {
                        var n
                        null === (n = e.onStateChange) ||
                          void 0 === n ||
                          n.call(e, t)
                      })
                  },
                  onSubmit: function (t) {
                    var n
                    null === (n = e.onSubmit) || void 0 === n || n.call(e, t),
                      r.forEach(function (e) {
                        var n
                        null === (n = e.onSubmit) ||
                          void 0 === n ||
                          n.call(e, t)
                      })
                  },
                  getSources: function (t) {
                    return Promise.all(
                      []
                        .concat(
                          (function (e) {
                            return (
                              (function (e) {
                                if (Array.isArray(e)) return Nr(e)
                              })(e) ||
                              (function (e) {
                                if (
                                  'undefined' != typeof Symbol &&
                                  Symbol.iterator in Object(e)
                                )
                                  return Array.from(e)
                              })(e) ||
                              (function (e, t) {
                                if (e) {
                                  if ('string' == typeof e) return Nr(e, t)
                                  var n = Object.prototype.toString
                                    .call(e)
                                    .slice(8, -1)
                                  return (
                                    'Object' === n &&
                                      e.constructor &&
                                      (n = e.constructor.name),
                                    'Map' === n || 'Set' === n
                                      ? Array.from(e)
                                      : 'Arguments' === n ||
                                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                          n,
                                        )
                                      ? Nr(e, t)
                                      : void 0
                                  )
                                }
                              })(e) ||
                              (function () {
                                throw new TypeError(
                                  'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                                )
                              })()
                            )
                          })(
                            r.map(function (e) {
                              return e.getSources
                            }),
                          ),
                          [e.getSources],
                        )
                        .filter(Boolean)
                        .map(function (e) {
                          return (function (e, t) {
                            return Promise.resolve(e(t)).then(function (e) {
                              return Promise.all(
                                e.filter(Boolean).map(function (e) {
                                  return Promise.resolve(
                                    (function (e) {
                                      return (function (e) {
                                        for (
                                          var t = 1;
                                          t < arguments.length;
                                          t++
                                        ) {
                                          var n =
                                            null != arguments[t]
                                              ? arguments[t]
                                              : {}
                                          t % 2
                                            ? Er(Object(n), !0).forEach(
                                                function (t) {
                                                  Ir(e, t, n[t])
                                                },
                                              )
                                            : Object.getOwnPropertyDescriptors
                                            ? Object.defineProperties(
                                                e,
                                                Object.getOwnPropertyDescriptors(
                                                  n,
                                                ),
                                              )
                                            : Er(Object(n)).forEach(function (
                                                t,
                                              ) {
                                                Object.defineProperty(
                                                  e,
                                                  t,
                                                  Object.getOwnPropertyDescriptor(
                                                    n,
                                                    t,
                                                  ),
                                                )
                                              })
                                        }
                                        return e
                                      })(
                                        {
                                          getItemInputValue: function (e) {
                                            return e.state.query
                                          },
                                          getItemUrl: function () {},
                                          onSelect: function (e) {
                                            ;(0, e.setIsOpen)(!1)
                                          },
                                          onHighlight: Dr,
                                        },
                                        e,
                                      )
                                    })(e),
                                  )
                                }),
                              )
                            })
                          })(e, t)
                        }),
                    )
                      .then(function (e) {
                        return xr(e)
                      })
                      .then(function (e) {
                        return e.map(function (e) {
                          return Rr(
                            Rr({}, e),
                            {},
                            {
                              onSelect: function (t) {
                                e.onSelect(t),
                                  r.forEach(function (e) {
                                    var n, r
                                    null === (n = e.subscribed) ||
                                      void 0 === n ||
                                      null === (r = n.onSelect) ||
                                      void 0 === r ||
                                      r.call(n, t)
                                  })
                              },
                            },
                          )
                        })
                      })
                  },
                  navigator: Rr(Rr({}, Ur({ environment: n })), e.navigator),
                },
              )
            })(e),
            n = (function (e, t) {
              var n = t.initialState
              return {
                getState: function () {
                  return n
                },
                send: function (r, o) {
                  var a = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                      var n = null != arguments[t] ? arguments[t] : {}
                      t % 2
                        ? Sr(Object(n), !0).forEach(function (t) {
                            wr(e, t, n[t])
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                            e,
                            Object.getOwnPropertyDescriptors(n),
                          )
                        : Sr(Object(n)).forEach(function (t) {
                            Object.defineProperty(
                              e,
                              t,
                              Object.getOwnPropertyDescriptor(n, t),
                            )
                          })
                    }
                    return e
                  })({}, n)
                  ;(n = e(n, { type: r, props: t, payload: o })),
                    t.onStateChange({ state: n, prevState: a })
                },
              }
            })(Xr, t),
            r = (function (e) {
              var t = e.store
              return {
                setSelectedItemId: function (e) {
                  t.send('setSelectedItemId', e)
                },
                setQuery: function (e) {
                  t.send('setQuery', e)
                },
                setCollections: function (e) {
                  var n = 0,
                    r = e.map(function (e) {
                      return Tr(
                        Tr({}, e),
                        {},
                        {
                          items: xr(e.items).map(function (e) {
                            return Tr(Tr({}, e), {}, { __autocomplete_id: n++ })
                          }),
                        },
                      )
                    })
                  t.send('setCollections', r)
                },
                setIsOpen: function (e) {
                  t.send('setIsOpen', e)
                },
                setStatus: function (e) {
                  t.send('setStatus', e)
                },
                setContext: function (e) {
                  t.send('setContext', e)
                },
              }
            })({ store: n }),
            o = r.setSelectedItemId,
            a = r.setQuery,
            i = r.setCollections,
            c = r.setIsOpen,
            l = r.setStatus,
            s = r.setContext,
            u = (function (e) {
              var t = e.store,
                n = e.props,
                r = e.setSelectedItemId,
                o = e.setQuery,
                a = e.setCollections,
                i = e.setIsOpen,
                c = e.setStatus,
                l = e.setContext,
                s = e.refresh
              return {
                getEnvironmentProps: function (e) {
                  return {
                    onTouchStart: function (r) {
                      !1 !== t.getState().isOpen &&
                        r.target !== e.inputElement &&
                        !1 ===
                          [e.searchBoxElement, e.panelElement].some(function (
                            e,
                          ) {
                            return (
                              e &&
                              (Pr(e, r.target) ||
                                Pr(e, n.environment.document.activeElement))
                            )
                          }) &&
                        t.send('blur', null)
                    },
                    onTouchMove: function (r) {
                      !1 !== t.getState().isOpen &&
                        e.inputElement ===
                          n.environment.document.activeElement &&
                        r.target !== e.inputElement &&
                        e.inputElement.blur()
                    },
                  }
                },
                getRootProps: function (e) {
                  return Gr(
                    {
                      role: 'combobox',
                      'aria-expanded': t.getState().isOpen,
                      'aria-haspopup': 'listbox',
                      'aria-owns': t.getState().isOpen
                        ? ''.concat(n.id, '-list')
                        : void 0,
                      'aria-labelledby': ''.concat(n.id, '-label'),
                    },
                    e,
                  )
                },
                getFormProps: function (e) {
                  return (
                    e.inputElement,
                    Gr(
                      {
                        action: '',
                        noValidate: !0,
                        role: 'search',
                        onSubmit: function (s) {
                          s.preventDefault(),
                            n.onSubmit({
                              state: t.getState(),
                              setSelectedItemId: r,
                              setQuery: o,
                              setCollections: a,
                              setIsOpen: i,
                              setStatus: c,
                              setContext: l,
                              event: s,
                            }),
                            t.send('submit', null),
                            e.inputElement && e.inputElement.blur()
                        },
                        onReset: function (u) {
                          u.preventDefault(),
                            n.openOnFocus &&
                              zr({
                                query: '',
                                event: u,
                                store: t,
                                props: n,
                                setSelectedItemId: r,
                                setQuery: o,
                                setCollections: a,
                                setIsOpen: i,
                                setStatus: c,
                                setContext: l,
                                refresh: s,
                              }),
                            t.send('reset', null),
                            e.inputElement && e.inputElement.focus()
                        },
                      },
                      qr(e, ['inputElement']),
                    )
                  )
                },
                getLabelProps: function (e) {
                  return Gr(
                    {
                      htmlFor: ''.concat(n.id, '-input'),
                      id: ''.concat(n.id, '-label'),
                    },
                    e,
                  )
                },
                getInputProps: function (e) {
                  function u(e) {
                    ;(n.openOnFocus || t.getState().query.length > 0) &&
                      zr({
                        query: t.getState().completion || t.getState().query,
                        event: e,
                        store: t,
                        props: n,
                        setSelectedItemId: r,
                        setQuery: o,
                        setCollections: a,
                        setIsOpen: i,
                        setStatus: c,
                        setContext: l,
                        refresh: s,
                      }),
                      t.send('focus', null)
                  }
                  var d = 'ontouchstart' in n.environment,
                    p = e || {},
                    f = (p.inputElement, p.maxLength),
                    h = void 0 === f ? 512 : f,
                    m = qr(p, ['inputElement', 'maxLength'])
                  return Gr(
                    {
                      'aria-autocomplete': 'both',
                      'aria-activedescendant':
                        t.getState().isOpen &&
                        null !== t.getState().selectedItemId
                          ? ''
                              .concat(n.id, '-item-')
                              .concat(t.getState().selectedItemId)
                          : void 0,
                      'aria-controls': t.getState().isOpen
                        ? ''.concat(n.id, '-list')
                        : void 0,
                      'aria-labelledby': ''.concat(n.id, '-label'),
                      value: t.getState().completion || t.getState().query,
                      id: ''.concat(n.id, '-input'),
                      autoComplete: 'off',
                      autoCorrect: 'off',
                      autoCapitalize: 'off',
                      spellCheck: 'false',
                      autoFocus: n.autoFocus,
                      placeholder: n.placeholder,
                      maxLength: h,
                      type: 'search',
                      onChange: function (e) {
                        zr({
                          query: e.currentTarget.value.slice(0, h),
                          event: e,
                          store: t,
                          props: n,
                          setSelectedItemId: r,
                          setQuery: o,
                          setCollections: a,
                          setIsOpen: i,
                          setStatus: c,
                          setContext: l,
                          refresh: s,
                        })
                      },
                      onKeyDown: function (e) {
                        !(function (e) {
                          var t = e.event,
                            n = e.store,
                            r = e.props,
                            o = e.setSelectedItemId,
                            a = e.setQuery,
                            i = e.setCollections,
                            c = e.setIsOpen,
                            l = e.setStatus,
                            s = e.setContext,
                            u = e.refresh
                          if ('ArrowUp' === t.key || 'ArrowDown' === t.key) {
                            t.preventDefault(), n.send(t.key, null)
                            var d = r.environment.document.getElementById(
                              ''
                                .concat(r.id, '-item-')
                                .concat(n.getState().selectedItemId),
                            )
                            d &&
                              (d.scrollIntoViewIfNeeded
                                ? d.scrollIntoViewIfNeeded(!1)
                                : d.scrollIntoView(!1))
                            var p = jr({ state: n.getState() })
                            if (null !== n.getState().selectedItemId && p) {
                              var f = p.item,
                                h = p.itemInputValue,
                                m = p.itemUrl,
                                g = p.source
                              g.onHighlight({
                                item: f,
                                itemInputValue: h,
                                itemUrl: m,
                                source: g,
                                state: n.getState(),
                                setSelectedItemId: o,
                                setQuery: a,
                                setCollections: i,
                                setIsOpen: c,
                                setStatus: l,
                                setContext: s,
                                event: t,
                              })
                            }
                          } else if ('Escape' === t.key)
                            t.preventDefault(), n.send(t.key, null)
                          else if ('Enter' === t.key) {
                            if (
                              null === n.getState().selectedItemId ||
                              n.getState().collections.every(function (e) {
                                return 0 === e.items.length
                              })
                            )
                              return
                            t.preventDefault()
                            var v = jr({ state: n.getState() }),
                              y = v.item,
                              b = v.itemInputValue,
                              _ = v.itemUrl,
                              S = v.source
                            if (t.metaKey || t.ctrlKey)
                              void 0 !== _ &&
                                (S.onSelect({
                                  item: y,
                                  itemInputValue: b,
                                  itemUrl: _,
                                  source: S,
                                  state: n.getState(),
                                  setSelectedItemId: o,
                                  setQuery: a,
                                  setCollections: i,
                                  setIsOpen: c,
                                  setStatus: l,
                                  setContext: s,
                                  event: t,
                                }),
                                r.navigator.navigateNewTab({
                                  itemUrl: _,
                                  item: y,
                                  state: n.getState(),
                                }))
                            else if (t.shiftKey)
                              void 0 !== _ &&
                                (S.onSelect({
                                  item: y,
                                  itemInputValue: b,
                                  itemUrl: _,
                                  source: S,
                                  state: n.getState(),
                                  setSelectedItemId: o,
                                  setQuery: a,
                                  setCollections: i,
                                  setIsOpen: c,
                                  setStatus: l,
                                  setContext: s,
                                  event: t,
                                }),
                                r.navigator.navigateNewWindow({
                                  itemUrl: _,
                                  item: y,
                                  state: n.getState(),
                                }))
                            else if (t.altKey);
                            else {
                              if (void 0 !== _)
                                return (
                                  S.onSelect({
                                    item: y,
                                    itemInputValue: b,
                                    itemUrl: _,
                                    source: S,
                                    state: n.getState(),
                                    setSelectedItemId: o,
                                    setQuery: a,
                                    setCollections: i,
                                    setIsOpen: c,
                                    setStatus: l,
                                    setContext: s,
                                    event: t,
                                  }),
                                  void r.navigator.navigate({
                                    itemUrl: _,
                                    item: y,
                                    state: n.getState(),
                                  })
                                )
                              zr({
                                query: b,
                                event: t,
                                store: n,
                                props: r,
                                setSelectedItemId: o,
                                setQuery: a,
                                setCollections: i,
                                setIsOpen: c,
                                setStatus: l,
                                setContext: s,
                                nextState: { isOpen: !1 },
                                refresh: u,
                              }).then(function () {
                                S.onSelect({
                                  item: y,
                                  itemInputValue: b,
                                  itemUrl: _,
                                  source: S,
                                  state: n.getState(),
                                  setSelectedItemId: o,
                                  setQuery: a,
                                  setCollections: i,
                                  setIsOpen: c,
                                  setStatus: l,
                                  setContext: s,
                                  event: t,
                                })
                              })
                            }
                          }
                        })({
                          event: e,
                          store: t,
                          props: n,
                          setSelectedItemId: r,
                          setQuery: o,
                          setCollections: a,
                          setIsOpen: i,
                          setStatus: c,
                          setContext: l,
                          refresh: s,
                        })
                      },
                      onFocus: u,
                      onBlur: function () {
                        d || t.send('blur', null)
                      },
                      onClick: function (r) {
                        e.inputElement !==
                          n.environment.document.activeElement ||
                          t.getState().isOpen ||
                          u(r)
                      },
                    },
                    m,
                  )
                },
                getPanelProps: function (e) {
                  return Gr(
                    {
                      onMouseDown: function (e) {
                        e.preventDefault()
                      },
                      onMouseLeave: function () {
                        t.send('mouseleave', null)
                      },
                    },
                    e,
                  )
                },
                getListProps: function (e) {
                  return Gr(
                    {
                      role: 'listbox',
                      'aria-labelledby': ''.concat(n.id, '-label'),
                      id: ''.concat(n.id, '-list'),
                    },
                    e,
                  )
                },
                getItemProps: function (e) {
                  var u = e.item,
                    d = e.source,
                    p = qr(e, ['item', 'source'])
                  return Gr(
                    {
                      id: ''.concat(n.id, '-item-').concat(u.__autocomplete_id),
                      role: 'option',
                      'aria-selected':
                        t.getState().selectedItemId === u.__autocomplete_id,
                      onMouseMove: function (e) {
                        if (
                          u.__autocomplete_id !== t.getState().selectedItemId
                        ) {
                          t.send('mousemove', u.__autocomplete_id)
                          var n = jr({ state: t.getState() })
                          if (null !== t.getState().selectedItemId && n) {
                            var s = n.item,
                              d = n.itemInputValue,
                              p = n.itemUrl,
                              f = n.source
                            f.onHighlight({
                              item: s,
                              itemInputValue: d,
                              itemUrl: p,
                              source: f,
                              state: t.getState(),
                              setSelectedItemId: r,
                              setQuery: o,
                              setCollections: a,
                              setIsOpen: i,
                              setStatus: c,
                              setContext: l,
                              event: e,
                            })
                          }
                        }
                      },
                      onMouseDown: function (e) {
                        e.preventDefault()
                      },
                      onClick: function (e) {
                        var p = d.getItemInputValue({
                            item: u,
                            state: t.getState(),
                          }),
                          f = d.getItemUrl({ item: u, state: t.getState() })
                        ;(f
                          ? Promise.resolve()
                          : zr({
                              query: p,
                              event: e,
                              store: t,
                              props: n,
                              setSelectedItemId: r,
                              setQuery: o,
                              setCollections: a,
                              setIsOpen: i,
                              setStatus: c,
                              setContext: l,
                              refresh: s,
                              nextState: { isOpen: !1 },
                            })
                        ).then(function () {
                          d.onSelect({
                            item: u,
                            itemInputValue: p,
                            itemUrl: f,
                            source: d,
                            state: t.getState(),
                            setSelectedItemId: r,
                            setQuery: o,
                            setCollections: a,
                            setIsOpen: i,
                            setStatus: c,
                            setContext: l,
                            event: e,
                          })
                        })
                      },
                    },
                    p,
                  )
                },
              }
            })({
              store: n,
              props: t,
              setSelectedItemId: o,
              setQuery: a,
              setCollections: i,
              setIsOpen: c,
              setStatus: l,
              setContext: s,
              refresh: b,
            }),
            d = u.getEnvironmentProps,
            p = u.getRootProps,
            f = u.getFormProps,
            h = u.getLabelProps,
            m = u.getInputProps,
            g = u.getPanelProps,
            v = u.getListProps,
            y = u.getItemProps
          function b() {
            return zr({
              query: n.getState().query,
              event: new Event('input'),
              store: n,
              props: t,
              setSelectedItemId: o,
              setQuery: a,
              setCollections: i,
              setIsOpen: c,
              setStatus: l,
              setContext: s,
              nextState: { isOpen: n.getState().isOpen },
              refresh: b,
            })
          }
          return {
            setSelectedItemId: o,
            setQuery: a,
            setCollections: i,
            setIsOpen: c,
            setStatus: l,
            setContext: s,
            getEnvironmentProps: d,
            getRootProps: p,
            getFormProps: f,
            getInputProps: m,
            getLabelProps: h,
            getPanelProps: g,
            getListProps: v,
            getItemProps: y,
            refresh: b,
          }
        }
        function to(e, t) {
          var n = Object.keys(e)
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e)
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
              })),
              n.push.apply(n, r)
          }
          return n
        }
        function no(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {}
            t % 2
              ? to(Object(n), !0).forEach(function (t) {
                  ro(e, t, n[t])
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : to(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  )
                })
          }
          return e
        }
        function ro(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          )
        }
        function oo() {
          return mr.createElement(
            'a',
            {
              href: 'https://www.algolia.com/docsearch',
              target: '_blank',
              rel: 'noopener noreferrer',
            },
            mr.createElement(
              'span',
              { className: 'DocSearch-Label' },
              'Search by',
            ),
            mr.createElement(
              'svg',
              { width: '77', height: '19' },
              mr.createElement('path', {
                d: 'M2.5067 0h14.0245c1.384.001 2.5058 1.1205 2.5068 2.5017V16.5c-.0014 1.3808-1.1232 2.4995-2.5068 2.5H2.5067C1.1232 18.9995.0014 17.8808 0 16.5V2.4958A2.495 2.495 0 01.735.7294 2.505 2.505 0 012.5068 0zM37.95 15.0695c-3.7068.0168-3.7068-2.986-3.7068-3.4634L34.2372.3576 36.498 0v11.1794c0 .2715 0 1.9889 1.452 1.994v1.8961zm-9.1666-1.8388c.694 0 1.2086-.0397 1.5678-.1088v-2.2934a5.3639 5.3639 0 00-1.3303-.1679 4.8283 4.8283 0 00-.758.0582 2.2845 2.2845 0 00-.688.2024c-.2029.0979-.371.2362-.4919.4142-.1268.1788-.185.2826-.185.5533 0 .5297.185.8359.5205 1.0375.3355.2016.7928.3053 1.365.3053v-.0008zm-.1969-8.1817c.7463 0 1.3768.092 1.8856.2767.5088.1838.9195.4428 1.2204.7717.3068.334.5147.7777.6423 1.251.1327.4723.196.991.196 1.5603v5.798c-.5235.1036-1.05.192-1.5787.2649-.7048.1037-1.4976.156-2.3774.156-.5832 0-1.1215-.0582-1.6016-.167a3.385 3.385 0 01-1.2432-.5364 2.6034 2.6034 0 01-.8037-.9565c-.191-.3922-.29-.9447-.29-1.5208 0-.5533.11-.905.3246-1.2863a2.7351 2.7351 0 01.8849-.9329c.376-.242.8029-.415 1.2948-.5187a7.4517 7.4517 0 011.5381-.156 7.1162 7.1162 0 011.6667.2024V8.886c0-.259-.0296-.5061-.093-.7372a1.5847 1.5847 0 00-.3245-.6158 1.5079 1.5079 0 00-.6119-.4158 2.6788 2.6788 0 00-.966-.173c-.5206 0-.9948.0634-1.4283.1384a6.5481 6.5481 0 00-1.065.259l-.2712-1.849c.2831-.0986.7048-.1964 1.2491-.2943a9.2979 9.2979 0 011.752-.1501v.0008zm44.6597 8.1193c.6947 0 1.2086-.0405 1.567-.1097v-2.2942a5.3743 5.3743 0 00-1.3303-.1679c-.2485 0-.503.0177-.7573.0582a2.2853 2.2853 0 00-.688.2024 1.2333 1.2333 0 00-.4918.4142c-.1268.1788-.1843.2826-.1843.5533 0 .5297.1843.8359.5198 1.0375.3414.2066.7927.3053 1.365.3053v.0009zm-.191-8.1767c.7463 0 1.3768.0912 1.8856.2759.5087.1847.9195.4436 1.2204.7717.3.329.5147.7786.6414 1.251a5.7248 5.7248 0 01.197 1.562v5.7972c-.3466.0742-.874.1602-1.5788.2648-.7049.1038-1.4976.1552-2.3774.1552-.5832 0-1.1215-.0573-1.6016-.167a3.385 3.385 0 01-1.2432-.5356 2.6034 2.6034 0 01-.8038-.9565c-.191-.3922-.2898-.9447-.2898-1.5216 0-.5533.1098-.905.3245-1.2854a2.7373 2.7373 0 01.8849-.9338c.376-.2412.8029-.4141 1.2947-.5178a7.4545 7.4545 0 012.325-.1097c.2781.0287.5672.081.879.156v-.3686a2.7781 2.7781 0 00-.092-.738 1.5788 1.5788 0 00-.3246-.6166 1.5079 1.5079 0 00-.612-.415 2.6797 2.6797 0 00-.966-.1729c-.5205 0-.9947.0633-1.4282.1384a6.5608 6.5608 0 00-1.065.259l-.2712-1.8498c.283-.0979.7048-.1957 1.2491-.2935a9.8597 9.8597 0 011.752-.1494zm-6.79-1.072c-.7576.001-1.373-.6103-1.3759-1.3664 0-.755.6128-1.3664 1.376-1.3664.764 0 1.3775.6115 1.3775 1.3664s-.6195 1.3664-1.3776 1.3664zm1.1393 11.1507h-2.2726V5.3409l2.2734-.3568v10.0845l-.0008.0017zm-3.984 0c-3.707.0168-3.707-2.986-3.707-3.4642L59.7069.3576 61.9685 0v11.1794c0 .2715 0 1.9889 1.452 1.994V15.0703zm-7.3512-4.979c0-.975-.2138-1.7873-.6305-2.3516-.4167-.571-.9998-.852-1.747-.852-.7454 0-1.3302.281-1.7452.852-.4166.5702-.6195 1.3765-.6195 2.3516 0 .9851.208 1.6473.6254 2.2183.4158.576.9998.8587 1.7461.8587.7454 0 1.3303-.2885 1.747-.8595.4158-.5761.6237-1.2315.6237-2.2184v.0009zm2.3132-.006c0 .7609-.1099 1.3361-.3356 1.9654a4.654 4.654 0 01-.9533 1.6076A4.214 4.214 0 0155.613 14.69c-.579.2412-1.4697.3795-1.9143.3795-.4462-.005-1.3303-.1324-1.9033-.3795a4.307 4.307 0 01-1.474-1.0316c-.4115-.4445-.7293-.9801-.9609-1.6076a5.3423 5.3423 0 01-.3465-1.9653c0-.7608.104-1.493.3356-2.1155a4.683 4.683 0 01.9719-1.5958 4.3383 4.3383 0 011.479-1.0257c.5739-.242 1.2043-.3567 1.8864-.3567.6829 0 1.3125.1197 1.8906.3567a4.1245 4.1245 0 011.4816 1.0257 4.7587 4.7587 0 01.9592 1.5958c.2426.6225.3643 1.3547.3643 2.1155zm-17.0198 0c0 .9448.208 1.9932.6238 2.431.4166.4386.955.6579 1.6142.6579.3584 0 .6998-.0523 1.0176-.1502.3186-.0978.5721-.2134.775-.3517V7.0784a8.8706 8.8706 0 00-1.4926-.1906c-.8206-.0236-1.4452.312-1.8847.8468-.4335.5365-.6533 1.476-.6533 2.3516v-.0008zm6.2863 4.4485c0 1.5385-.3938 2.662-1.1866 3.3773-.791.7136-2.0005 1.0712-3.6308 1.0712-.5958 0-1.834-.1156-2.8228-.334l.3643-1.7865c.8282.173 1.9202.2193 2.4932.2193.9077 0 1.555-.1847 1.943-.5533.388-.3686.578-.916.578-1.643v-.3687a6.8289 6.8289 0 01-.8848.3349c-.3634.1096-.786.167-1.261.167-.6246 0-1.1917-.0979-1.7055-.2944a3.5554 3.5554 0 01-1.3244-.8645c-.3642-.3796-.6541-.8579-.8561-1.4289-.2028-.571-.3068-1.59-.3068-2.339 0-.7034.1099-1.5856.3245-2.1735.2198-.5871.5316-1.0949.9542-1.515.4167-.42.9255-.743 1.5213-.98a5.5923 5.5923 0 012.052-.3855c.7353 0 1.4114.092 2.0707.2024.6592.1088 1.2204.2236 1.6776.35v8.945-.0008zM11.5026 4.2418v-.6511c-.0005-.4553-.3704-.8241-.8266-.8241H8.749c-.4561 0-.826.3688-.8265.824v.669c0 .0742.0693.1264.1445.1096a6.0346 6.0346 0 011.6768-.2362 6.125 6.125 0 011.6202.2185.1116.1116 0 00.1386-.1097zm-5.2806.852l-.3296-.3282a.8266.8266 0 00-1.168 0l-.393.3922a.8199.8199 0 000 1.164l.3237.323c.0524.0515.1268.0397.1733-.0117.191-.259.3989-.507.6305-.7372.2374-.2362.48-.4437.7462-.6335.0575-.0354.0634-.1155.017-.1687zm3.5159 2.069v2.818c0 .081.0879.1392.1622.0987l2.5102-1.2964c.0574-.0287.0752-.0987.0464-.1552a3.1237 3.1237 0 00-2.603-1.574c-.0575 0-.115.0456-.115.1097l-.0008-.0009zm.0008 6.789c-2.0933.0005-3.7915-1.6912-3.7947-3.7804C5.9468 8.0821 7.6452 6.39 9.7387 6.391c2.0932-.0005 3.7911 1.6914 3.794 3.7804a3.7783 3.7783 0 01-1.1124 2.675 3.7936 3.7936 0 01-2.6824 1.1054h.0008zM9.738 4.8002c-1.9218 0-3.6975 1.0232-4.6584 2.6841a5.359 5.359 0 000 5.3683c.9609 1.661 2.7366 2.6841 4.6584 2.6841a5.3891 5.3891 0 003.8073-1.5725 5.3675 5.3675 0 001.578-3.7987 5.3574 5.3574 0 00-1.5771-3.797A5.379 5.379 0 009.7387 4.801l-.0008-.0008z',
                fill: 'currentColor',
                fillRule: 'evenodd',
              }),
            ),
          )
        }
        function ao() {
          return mr.createElement(
            mr.Fragment,
            null,
            mr.createElement(
              'div',
              { className: 'DocSearch-Logo' },
              mr.createElement(oo, null),
            ),
            mr.createElement(
              'ul',
              { className: 'DocSearch-Commands' },
              mr.createElement(
                'li',
                null,
                mr.createElement(
                  'span',
                  { className: 'DocSearch-Commands-Key' },
                  mr.createElement(
                    io,
                    null,
                    mr.createElement('path', {
                      d: 'M12 3.53088v3c0 1-1 2-2 2H4M7 11.53088l-3-3 3-3',
                    }),
                  ),
                ),
                mr.createElement(
                  'span',
                  { className: 'DocSearch-Label' },
                  'to select',
                ),
              ),
              mr.createElement(
                'li',
                null,
                mr.createElement(
                  'span',
                  { className: 'DocSearch-Commands-Key' },
                  mr.createElement(
                    io,
                    null,
                    mr.createElement('path', {
                      d: 'M7.5 3.5v8M10.5 8.5l-3 3-3-3',
                    }),
                  ),
                ),
                mr.createElement(
                  'span',
                  { className: 'DocSearch-Commands-Key' },
                  mr.createElement(
                    io,
                    null,
                    mr.createElement('path', {
                      d: 'M7.5 11.5v-8M10.5 6.5l-3-3-3 3',
                    }),
                  ),
                ),
                mr.createElement(
                  'span',
                  { className: 'DocSearch-Label' },
                  'to navigate',
                ),
              ),
              mr.createElement(
                'li',
                null,
                mr.createElement(
                  'span',
                  { className: 'DocSearch-Commands-Key' },
                  mr.createElement(
                    io,
                    null,
                    mr.createElement('path', {
                      d: 'M13.6167 8.936c-.1065.3583-.6883.962-1.4875.962-.7993 0-1.653-.9165-1.653-2.1258v-.5678c0-1.2548.7896-2.1016 1.653-2.1016.8634 0 1.3601.4778 1.4875 1.0724M9 6c-.1352-.4735-.7506-.9219-1.46-.8972-.7092.0246-1.344.57-1.344 1.2166s.4198.8812 1.3445.9805C8.465 7.3992 8.968 7.9337 9 8.5c.032.5663-.454 1.398-1.4595 1.398C6.6593 9.898 6 9 5.963 8.4851m-1.4748.5368c-.2635.5941-.8099.876-1.5443.876s-1.7073-.6248-1.7073-2.204v-.4603c0-1.0416.721-2.131 1.7073-2.131.9864 0 1.6425 1.031 1.5443 2.2492h-2.956',
                    }),
                  ),
                ),
                mr.createElement(
                  'span',
                  { className: 'DocSearch-Label' },
                  'to close',
                ),
              ),
            ),
          )
        }
        function io(e) {
          return mr.createElement(
            'svg',
            { width: '15', height: '15' },
            mr.createElement(
              'g',
              {
                fill: 'none',
                stroke: 'currentColor',
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: '1.2',
              },
              e.children,
            ),
          )
        }
        function co(e) {
          var t = e.hit,
            n = e.children
          return mr.createElement('a', { href: t.url }, n)
        }
        function lo() {
          return mr.createElement(
            'svg',
            {
              viewBox: '0 0 38 38',
              stroke: 'currentColor',
              strokeOpacity: '.5',
            },
            mr.createElement(
              'g',
              { fill: 'none', fillRule: 'evenodd' },
              mr.createElement(
                'g',
                { transform: 'translate(1 1)', strokeWidth: '2' },
                mr.createElement('circle', {
                  strokeOpacity: '.3',
                  cx: '18',
                  cy: '18',
                  r: '18',
                }),
                mr.createElement(
                  'path',
                  { d: 'M36 18c0-9.94-8.06-18-18-18' },
                  mr.createElement('animateTransform', {
                    attributeName: 'transform',
                    type: 'rotate',
                    from: '0 18 18',
                    to: '360 18 18',
                    dur: '1s',
                    repeatCount: 'indefinite',
                  }),
                ),
              ),
            ),
          )
        }
        function so() {
          return mr.createElement(
            'svg',
            { width: '20', height: '20', viewBox: '0 0 20 20' },
            mr.createElement(
              'g',
              {
                stroke: 'currentColor',
                fill: 'none',
                fillRule: 'evenodd',
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
              },
              mr.createElement('path', {
                d: 'M3.18 6.6a8.23 8.23 0 1112.93 9.94h0a8.23 8.23 0 01-11.63 0',
              }),
              mr.createElement('path', {
                d: 'M6.44 7.25H2.55V3.36M10.45 6v5.6M10.45 11.6L13 13',
              }),
            ),
          )
        }
        function uo() {
          return mr.createElement(
            'svg',
            { width: '20', height: '20', viewBox: '0 0 20 20' },
            mr.createElement('path', {
              d: 'M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z',
              stroke: 'currentColor',
              fill: 'none',
              fillRule: 'evenodd',
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
            }),
          )
        }
        function po() {
          return mr.createElement(
            'svg',
            {
              className: 'DocSearch-Hit-Select-Icon',
              width: '20',
              height: '20',
              viewBox: '0 0 20 20',
            },
            mr.createElement(
              'g',
              {
                stroke: 'currentColor',
                fill: 'none',
                fillRule: 'evenodd',
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
              },
              mr.createElement('path', { d: 'M18 3v4c0 2-2 4-4 4H2' }),
              mr.createElement('path', { d: 'M8 17l-6-6 6-6' }),
            ),
          )
        }
        function fo(e) {
          switch (e.type) {
            case 'lvl1':
              return mr.createElement(ho, null)
            case 'content':
              return mr.createElement(go, null)
            default:
              return mr.createElement(mo, null)
          }
        }
        function ho() {
          return mr.createElement(
            'svg',
            { width: '20', height: '20', viewBox: '0 0 20 20' },
            mr.createElement('path', {
              d: 'M17 6v12c0 .52-.2 1-1 1H4c-.7 0-1-.33-1-1V2c0-.55.42-1 1-1h8l5 5zM14 8h-3.13c-.51 0-.87-.34-.87-.87V4',
              stroke: 'currentColor',
              fill: 'none',
              fillRule: 'evenodd',
              strokeLinejoin: 'round',
            }),
          )
        }
        function mo() {
          return mr.createElement(
            'svg',
            { width: '20', height: '20', viewBox: '0 0 20 20' },
            mr.createElement('path', {
              d: 'M13 13h4-4V8H7v5h6v4-4H7V8H3h4V3v5h6V3v5h4-4v5zm-6 0v4-4H3h4z',
              stroke: 'currentColor',
              fill: 'none',
              fillRule: 'evenodd',
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
            }),
          )
        }
        function go() {
          return mr.createElement(
            'svg',
            { width: '20', height: '20', viewBox: '0 0 20 20' },
            mr.createElement('path', {
              d: 'M17 5H3h14zm0 5H3h14zm0 5H3h14z',
              stroke: 'currentColor',
              fill: 'none',
              fillRule: 'evenodd',
              strokeLinejoin: 'round',
            }),
          )
        }
        function vo() {
          return mr.createElement(
            'svg',
            { width: '20', height: '20', viewBox: '0 0 20 20' },
            mr.createElement('path', {
              d: 'M10 14.2L5 17l1-5.6-4-4 5.5-.7 2.5-5 2.5 5 5.6.8-4 4 .9 5.5z',
              stroke: 'currentColor',
              fill: 'none',
              fillRule: 'evenodd',
              strokeLinejoin: 'round',
            }),
          )
        }
        function yo() {
          return mr.createElement(
            'svg',
            {
              width: '40',
              height: '40',
              viewBox: '0 0 20 20',
              fill: 'none',
              fillRule: 'evenodd',
              stroke: 'currentColor',
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
            },
            mr.createElement('path', {
              d: 'M19 4.8a16 16 0 00-2-1.2m-3.3-1.2A16 16 0 001.1 4.7M16.7 8a12 12 0 00-2.8-1.4M10 6a12 12 0 00-6.7 2M12.3 14.7a4 4 0 00-4.5 0M14.5 11.4A8 8 0 0010 10M3 16L18 2M10 18h0',
            }),
          )
        }
        function bo() {
          return mr.createElement(
            'svg',
            {
              width: '40',
              height: '40',
              viewBox: '0 0 20 20',
              fill: 'none',
              fillRule: 'evenodd',
              stroke: 'currentColor',
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
            },
            mr.createElement('path', {
              d: 'M15.5 4.8c2 3 1.7 7-1 9.7h0l4.3 4.3-4.3-4.3a7.8 7.8 0 01-9.8 1m-2.2-2.2A7.8 7.8 0 0113.2 2.4M2 18L18 2',
            }),
          )
        }
        function _o() {
          return mr.createElement(
            'div',
            { className: 'DocSearch-ErrorScreen' },
            mr.createElement(
              'div',
              { className: 'DocSearch-Screen-Icon' },
              mr.createElement(yo, null),
            ),
            mr.createElement(
              'p',
              { className: 'DocSearch-Title' },
              'Unable to fetch results',
            ),
            mr.createElement(
              'p',
              { className: 'DocSearch-Help' },
              'You might want to check your network connection.',
            ),
          )
        }
        function So(e, t) {
          ;(null == t || t > e.length) && (t = e.length)
          for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n]
          return r
        }
        function wo(e) {
          var t = e.state.context.searchSuggestions
          return mr.createElement(
            'div',
            { className: 'DocSearch-NoResults' },
            mr.createElement(
              'div',
              { className: 'DocSearch-Screen-Icon' },
              mr.createElement(bo, null),
            ),
            mr.createElement(
              'p',
              { className: 'DocSearch-Title' },
              'No results for "',
              mr.createElement('strong', null, e.state.query),
              '"',
            ),
            t &&
              t.length > 0 &&
              mr.createElement(
                'div',
                { className: 'DocSearch-NoResults-Prefill-List' },
                mr.createElement(
                  'p',
                  { className: 'DocSearch-Help' },
                  'Try searching for:',
                ),
                mr.createElement(
                  'ul',
                  null,
                  t.slice(0, 3).reduce(function (t, n) {
                    return [].concat(
                      (function (e) {
                        return (
                          (function (e) {
                            if (Array.isArray(e)) return So(e)
                          })(e) ||
                          (function (e) {
                            if (
                              'undefined' != typeof Symbol &&
                              Symbol.iterator in Object(e)
                            )
                              return Array.from(e)
                          })(e) ||
                          (function (e, t) {
                            if (e) {
                              if ('string' == typeof e) return So(e, t)
                              var n = Object.prototype.toString
                                .call(e)
                                .slice(8, -1)
                              return (
                                'Object' === n &&
                                  e.constructor &&
                                  (n = e.constructor.name),
                                'Map' === n || 'Set' === n
                                  ? Array.from(e)
                                  : 'Arguments' === n ||
                                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                      n,
                                    )
                                  ? So(e, t)
                                  : void 0
                              )
                            }
                          })(e) ||
                          (function () {
                            throw new TypeError(
                              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                            )
                          })()
                        )
                      })(t),
                      [
                        mr.createElement(
                          'li',
                          { key: n },
                          mr.createElement(
                            'button',
                            {
                              className: 'DocSearch-Prefill',
                              key: n,
                              onClick: function () {
                                e.setQuery(n.toLowerCase() + ' '),
                                  e.refresh(),
                                  e.inputRef.current.focus()
                              },
                            },
                            n,
                          ),
                        ),
                      ],
                    )
                  }, []),
                ),
              ),
            mr.createElement(
              'p',
              { className: 'DocSearch-Help' },
              'Believe this query should return results?',
              ' ',
              mr.createElement(
                'a',
                {
                  href: 'https://github.com/algolia/docsearch-configs/issues/new?template=Missing_results.md&title=['
                    .concat(e.indexName, ']+Missing+results+for+query+"')
                    .concat(e.state.query, '"'),
                  target: '_blank',
                  rel: 'noopener noreferrer',
                },
                'Let us know',
              ),
              '.',
            ),
          )
        }
        function xo(e, t) {
          var n = Object.keys(e)
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e)
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
              })),
              n.push.apply(n, r)
          }
          return n
        }
        function ko(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {}
            t % 2
              ? xo(Object(n), !0).forEach(function (t) {
                  Oo(e, t, n[t])
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : xo(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  )
                })
          }
          return e
        }
        function Oo(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          )
        }
        function Co(e, t) {
          return t.split('.').reduce(function (e, t) {
            return e && e[t]
          }, e)
        }
        function Do(e) {
          var t = e.hit,
            n = e.attribute,
            r = e.tagName
          return qt(
            void 0 === r ? 'span' : r,
            ko(
              ko(
                {},
                (function (e, t) {
                  if (null == e) return {}
                  var n,
                    r,
                    o = (function (e, t) {
                      if (null == e) return {}
                      var n,
                        r,
                        o = {},
                        a = Object.keys(e)
                      for (r = 0; r < a.length; r++)
                        (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n])
                      return o
                    })(e, t)
                  if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e)
                    for (r = 0; r < a.length; r++)
                      (n = a[r]),
                        t.indexOf(n) >= 0 ||
                          (Object.prototype.propertyIsEnumerable.call(e, n) &&
                            (o[n] = e[n]))
                  }
                  return o
                })(e, ['hit', 'attribute', 'tagName']),
              ),
              {},
              {
                dangerouslySetInnerHTML: {
                  __html:
                    Co(t, '_snippetResult.'.concat(n, '.value')) || Co(t, n),
                },
              },
            ),
          )
        }
        function Eo(e, t) {
          return (
            (function (e) {
              if (Array.isArray(e)) return e
            })(e) ||
            (function (e, t) {
              if (
                'undefined' != typeof Symbol &&
                Symbol.iterator in Object(e)
              ) {
                var n = [],
                  r = !0,
                  o = !1,
                  a = void 0
                try {
                  for (
                    var i, c = e[Symbol.iterator]();
                    !(r = (i = c.next()).done) &&
                    (n.push(i.value), !t || n.length !== t);
                    r = !0
                  );
                } catch (e) {
                  ;(o = !0), (a = e)
                } finally {
                  try {
                    r || null == c.return || c.return()
                  } finally {
                    if (o) throw a
                  }
                }
                return n
              }
            })(e, t) ||
            (function (e, t) {
              if (e) {
                if ('string' == typeof e) return Io(e, t)
                var n = Object.prototype.toString.call(e).slice(8, -1)
                return (
                  'Object' === n && e.constructor && (n = e.constructor.name),
                  'Map' === n || 'Set' === n
                    ? Array.from(e)
                    : 'Arguments' === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? Io(e, t)
                    : void 0
                )
              }
            })(e, t) ||
            (function () {
              throw new TypeError(
                'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
              )
            })()
          )
        }
        function Io(e, t) {
          ;(null == t || t > e.length) && (t = e.length)
          for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n]
          return r
        }
        function jo() {
          return (jo =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t]
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
              }
              return e
            }).apply(this, arguments)
        }
        function Po(e) {
          return e.collection && 0 !== e.collection.items.length
            ? mr.createElement(
                'section',
                { className: 'DocSearch-Hits' },
                mr.createElement(
                  'div',
                  { className: 'DocSearch-Hit-source' },
                  e.title,
                ),
                mr.createElement(
                  'ul',
                  e.getListProps(),
                  e.collection.items.map(function (t, n) {
                    return mr.createElement(
                      Ao,
                      jo(
                        {
                          key: [e.title, t.objectID].join(':'),
                          item: t,
                          index: n,
                        },
                        e,
                      ),
                    )
                  }),
                ),
              )
            : null
        }
        function Ao(e) {
          var t = e.item,
            n = e.index,
            r = e.renderIcon,
            o = e.renderAction,
            a = e.getItemProps,
            i = e.onItemClick,
            c = e.collection,
            l = e.hitComponent,
            s = Eo(mr.useState(!1), 2),
            u = s[0],
            d = s[1],
            p = Eo(mr.useState(!1), 2),
            f = p[0],
            h = p[1],
            m = mr.useRef(null),
            g = l
          return mr.createElement(
            'li',
            jo(
              {
                className: [
                  'DocSearch-Hit',
                  t.__docsearch_parent && 'DocSearch-Hit--Child',
                  u && 'DocSearch-Hit--deleting',
                  f && 'DocSearch-Hit--favoriting',
                ]
                  .filter(Boolean)
                  .join(' '),
                onTransitionEnd: function () {
                  m.current && m.current()
                },
              },
              a({
                item: t,
                source: c.source,
                onClick: function () {
                  i(t)
                },
              }),
            ),
            mr.createElement(
              g,
              { hit: t },
              mr.createElement(
                'div',
                { className: 'DocSearch-Hit-Container' },
                r({ item: t, index: n }),
                t.hierarchy[t.type] &&
                  'lvl1' === t.type &&
                  mr.createElement(
                    'div',
                    { className: 'DocSearch-Hit-content-wrapper' },
                    mr.createElement(Do, {
                      className: 'DocSearch-Hit-title',
                      hit: t,
                      attribute: 'hierarchy.lvl1',
                    }),
                    t.content &&
                      mr.createElement(Do, {
                        className: 'DocSearch-Hit-path',
                        hit: t,
                        attribute: 'content',
                      }),
                  ),
                t.hierarchy[t.type] &&
                  ('lvl2' === t.type ||
                    'lvl3' === t.type ||
                    'lvl4' === t.type ||
                    'lvl5' === t.type ||
                    'lvl6' === t.type) &&
                  mr.createElement(
                    'div',
                    { className: 'DocSearch-Hit-content-wrapper' },
                    mr.createElement(Do, {
                      className: 'DocSearch-Hit-title',
                      hit: t,
                      attribute: 'hierarchy.'.concat(t.type),
                    }),
                    mr.createElement(Do, {
                      className: 'DocSearch-Hit-path',
                      hit: t,
                      attribute: 'hierarchy.lvl1',
                    }),
                  ),
                'content' === t.type &&
                  mr.createElement(
                    'div',
                    { className: 'DocSearch-Hit-content-wrapper' },
                    mr.createElement(Do, {
                      className: 'DocSearch-Hit-title',
                      hit: t,
                      attribute: 'content',
                    }),
                    mr.createElement(Do, {
                      className: 'DocSearch-Hit-path',
                      hit: t,
                      attribute: 'hierarchy.lvl1',
                    }),
                  ),
                o({
                  item: t,
                  runDeleteTransition: function (e) {
                    d(!0), (m.current = e)
                  },
                  runFavoriteTransition: function (e) {
                    h(!0), (m.current = e)
                  },
                }),
              ),
            ),
          )
        }
        function To() {
          return (To =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t]
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
              }
              return e
            }).apply(this, arguments)
        }
        function Fo(e) {
          return mr.createElement(
            'div',
            { className: 'DocSearch-Dropdown-Container' },
            e.state.collections.map(function (t, n) {
              if (0 === t.items.length) return null
              var r = t.items[0].hierarchy.lvl0
              return mr.createElement(
                Po,
                To({}, e, {
                  key: n,
                  title: r,
                  collection: t,
                  renderIcon: function (e) {
                    var n,
                      r = e.item,
                      o = e.index
                    return mr.createElement(
                      mr.Fragment,
                      null,
                      r.__docsearch_parent &&
                        mr.createElement(
                          'svg',
                          {
                            className: 'DocSearch-Hit-Tree',
                            viewBox: '0 0 24 54',
                          },
                          mr.createElement(
                            'g',
                            {
                              stroke: 'currentColor',
                              fill: 'none',
                              fillRule: 'evenodd',
                              strokeLinecap: 'round',
                              strokeLinejoin: 'round',
                            },
                            r.__docsearch_parent !==
                              (null === (n = t.items[o + 1]) || void 0 === n
                                ? void 0
                                : n.__docsearch_parent)
                              ? mr.createElement('path', {
                                  d: 'M8 6v21M20 27H8.3',
                                })
                              : mr.createElement('path', {
                                  d: 'M8 6v42M20 27H8.3',
                                }),
                          ),
                        ),
                      mr.createElement(
                        'div',
                        { className: 'DocSearch-Hit-icon' },
                        mr.createElement(fo, { type: r.type }),
                      ),
                    )
                  },
                  renderAction: function () {
                    return mr.createElement(
                      'div',
                      { className: 'DocSearch-Hit-action' },
                      mr.createElement(po, null),
                    )
                  },
                }),
              )
            }),
            e.resultsFooterComponent &&
              mr.createElement(
                'section',
                { className: 'DocSearch-HitsFooter' },
                mr.createElement(e.resultsFooterComponent, { state: e.state }),
              ),
          )
        }
        function Uo() {
          return (Uo =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t]
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
              }
              return e
            }).apply(this, arguments)
        }
        function No(e) {
          return 'idle' === e.state.status && !1 === e.hasCollections
            ? e.disableUserPersonalization
              ? null
              : mr.createElement(
                  'div',
                  { className: 'DocSearch-StartScreen' },
                  mr.createElement(
                    'p',
                    { className: 'DocSearch-Help' },
                    'No recent searches',
                  ),
                )
            : !1 === e.hasCollections
            ? null
            : mr.createElement(
                'div',
                { className: 'DocSearch-Dropdown-Container' },
                mr.createElement(
                  Po,
                  Uo({}, e, {
                    title: 'Recent',
                    collection: e.state.collections[0],
                    renderIcon: function () {
                      return mr.createElement(
                        'div',
                        { className: 'DocSearch-Hit-icon' },
                        mr.createElement(so, null),
                      )
                    },
                    renderAction: function (t) {
                      var n = t.item,
                        r = t.runFavoriteTransition,
                        o = t.runDeleteTransition
                      return mr.createElement(
                        mr.Fragment,
                        null,
                        mr.createElement(
                          'div',
                          { className: 'DocSearch-Hit-action' },
                          mr.createElement(
                            'button',
                            {
                              className: 'DocSearch-Hit-action-button',
                              title: 'Save this search',
                              onClick: function (t) {
                                t.preventDefault(),
                                  t.stopPropagation(),
                                  r(function () {
                                    e.favoriteSearches.add(n),
                                      e.recentSearches.remove(n),
                                      e.refresh()
                                  })
                              },
                            },
                            mr.createElement(vo, null),
                          ),
                        ),
                        mr.createElement(
                          'div',
                          { className: 'DocSearch-Hit-action' },
                          mr.createElement(
                            'button',
                            {
                              className: 'DocSearch-Hit-action-button',
                              title: 'Remove this search from history',
                              onClick: function (t) {
                                t.preventDefault(),
                                  t.stopPropagation(),
                                  o(function () {
                                    e.recentSearches.remove(n), e.refresh()
                                  })
                              },
                            },
                            mr.createElement(uo, null),
                          ),
                        ),
                      )
                    },
                  }),
                ),
                mr.createElement(
                  Po,
                  Uo({}, e, {
                    title: 'Favorites',
                    collection: e.state.collections[1],
                    renderIcon: function () {
                      return mr.createElement(
                        'div',
                        { className: 'DocSearch-Hit-icon' },
                        mr.createElement(vo, null),
                      )
                    },
                    renderAction: function (t) {
                      var n = t.item,
                        r = t.runDeleteTransition
                      return mr.createElement(
                        'div',
                        { className: 'DocSearch-Hit-action' },
                        mr.createElement(
                          'button',
                          {
                            className: 'DocSearch-Hit-action-button',
                            title: 'Remove this search from favorites',
                            onClick: function (t) {
                              t.preventDefault(),
                                t.stopPropagation(),
                                r(function () {
                                  e.favoriteSearches.remove(n), e.refresh()
                                })
                            },
                          },
                          mr.createElement(uo, null),
                        ),
                      )
                    },
                  }),
                ),
              )
        }
        function Lo() {
          return (Lo =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t]
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
              }
              return e
            }).apply(this, arguments)
        }
        var Ro = mr.memo(
          function (e) {
            if ('error' === e.state.status) return mr.createElement(_o, null)
            var t = e.state.collections.some(function (e) {
              return e.items.length > 0
            })
            return e.state.query
              ? !1 === t
                ? mr.createElement(wo, e)
                : mr.createElement(Fo, e)
              : mr.createElement(No, Lo({}, e, { hasCollections: t }))
          },
          function (e, t) {
            return 'loading' === t.state.status || 'stalled' === t.state.status
          },
        )
        function Ho() {
          return (Ho =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t]
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
              }
              return e
            }).apply(this, arguments)
        }
        function Mo(e) {
          var t = e.getFormProps({ inputElement: e.inputRef.current }).onReset
          return (
            mr.useEffect(
              function () {
                e.autoFocus && e.inputRef.current && e.inputRef.current.focus()
              },
              [e.autoFocus, e.inputRef],
            ),
            mr.useEffect(
              function () {
                e.isFromSelection &&
                  e.inputRef.current &&
                  e.inputRef.current.select()
              },
              [e.isFromSelection, e.inputRef],
            ),
            mr.createElement(
              mr.Fragment,
              null,
              mr.createElement(
                'form',
                {
                  className: 'DocSearch-Form',
                  onSubmit: function (e) {
                    e.preventDefault()
                  },
                  onReset: t,
                },
                mr.createElement(
                  'label',
                  Ho(
                    { className: 'DocSearch-MagnifierLabel' },
                    e.getLabelProps(),
                  ),
                  mr.createElement(vr, null),
                ),
                mr.createElement(
                  'div',
                  { className: 'DocSearch-LoadingIndicator' },
                  mr.createElement(lo, null),
                ),
                mr.createElement(
                  'input',
                  Ho(
                    { className: 'DocSearch-Input', ref: e.inputRef },
                    e.getInputProps({
                      inputElement: e.inputRef.current,
                      autoFocus: e.autoFocus,
                      maxLength: 64,
                      enterKeyHint: 'go',
                    }),
                  ),
                ),
                mr.createElement(
                  'button',
                  {
                    type: 'reset',
                    title: 'Clear the query',
                    className: 'DocSearch-Reset',
                    hidden: !e.state.query,
                  },
                  mr.createElement(uo, null),
                ),
              ),
              mr.createElement(
                'button',
                { className: 'DocSearch-Cancel', onClick: e.onClose },
                'Cancel',
              ),
            )
          )
        }
        function Bo(e) {
          var t = e.key,
            n = e.limit,
            r = void 0 === n ? 5 : n,
            o = (function (e) {
              return !1 ===
                (function () {
                  var e = '__TEST_KEY__'
                  try {
                    return (
                      localStorage.setItem(e, ''),
                      localStorage.removeItem(e),
                      !0
                    )
                  } catch (e) {
                    return !1
                  }
                })()
                ? {
                    setItem: function () {},
                    getItem: function () {
                      return []
                    },
                  }
                : {
                    setItem: function (t) {
                      return window.localStorage.setItem(e, JSON.stringify(t))
                    },
                    getItem: function () {
                      var t = window.localStorage.getItem(e)
                      return t ? JSON.parse(t) : []
                    },
                  }
            })(t),
            a = o.getItem().slice(0, r)
          return {
            add: function (e) {
              var t = e,
                n =
                  (t._highlightResult,
                  t._snippetResult,
                  (function (e, t) {
                    if (null == e) return {}
                    var n,
                      r,
                      o = (function (e, t) {
                        if (null == e) return {}
                        var n,
                          r,
                          o = {},
                          a = Object.keys(e)
                        for (r = 0; r < a.length; r++)
                          (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n])
                        return o
                      })(e, t)
                    if (Object.getOwnPropertySymbols) {
                      var a = Object.getOwnPropertySymbols(e)
                      for (r = 0; r < a.length; r++)
                        (n = a[r]),
                          t.indexOf(n) >= 0 ||
                            (Object.prototype.propertyIsEnumerable.call(e, n) &&
                              (o[n] = e[n]))
                    }
                    return o
                  })(t, ['_highlightResult', '_snippetResult'])),
                i = a.findIndex(function (e) {
                  return e.objectID === n.objectID
                })
              i > -1 && a.splice(i, 1),
                a.unshift(n),
                (a = a.slice(0, r)),
                o.setItem(a)
            },
            remove: function (e) {
              ;(a = a.filter(function (t) {
                return t.objectID !== e.objectID
              })),
                o.setItem(a)
            },
            getAll: function () {
              return a
            },
          }
        }
        function Vo(e) {
          var t,
            n = 'algoliasearch-client-js-'.concat(e.key),
            r = function () {
              return (
                void 0 === t && (t = e.localStorage || window.localStorage), t
              )
            },
            o = function () {
              return JSON.parse(r().getItem(n) || '{}')
            }
          return {
            get: function (e, t) {
              var n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {
                      miss: function () {
                        return Promise.resolve()
                      },
                    }
              return Promise.resolve()
                .then(function () {
                  var n = JSON.stringify(e),
                    r = o()[n]
                  return Promise.all([r || t(), void 0 !== r])
                })
                .then(function (e) {
                  var t = jt(e, 2),
                    r = t[0],
                    o = t[1]
                  return Promise.all([r, o || n.miss(r)])
                })
                .then(function (e) {
                  return jt(e, 1)[0]
                })
            },
            set: function (e, t) {
              return Promise.resolve().then(function () {
                var a = o()
                return (
                  (a[JSON.stringify(e)] = t),
                  r().setItem(n, JSON.stringify(a)),
                  t
                )
              })
            },
            delete: function (e) {
              return Promise.resolve().then(function () {
                var t = o()
                delete t[JSON.stringify(e)], r().setItem(n, JSON.stringify(t))
              })
            },
            clear: function () {
              return Promise.resolve().then(function () {
                r().removeItem(n)
              })
            },
          }
        }
        function Zo(e) {
          var t = Pt(e.caches),
            n = t.shift()
          return void 0 === n
            ? {
                get: function (e, t) {
                  var n =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : {
                            miss: function () {
                              return Promise.resolve()
                            },
                          },
                    r = t()
                  return r
                    .then(function (e) {
                      return Promise.all([e, n.miss(e)])
                    })
                    .then(function (e) {
                      return jt(e, 1)[0]
                    })
                },
                set: function (e, t) {
                  return Promise.resolve(t)
                },
                delete: function (e) {
                  return Promise.resolve()
                },
                clear: function () {
                  return Promise.resolve()
                },
              }
            : {
                get: function (e, r) {
                  var o =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : {
                          miss: function () {
                            return Promise.resolve()
                          },
                        }
                  return n.get(e, r, o).catch(function () {
                    return Zo({ caches: t }).get(e, r, o)
                  })
                },
                set: function (e, r) {
                  return n.set(e, r).catch(function () {
                    return Zo({ caches: t }).set(e, r)
                  })
                },
                delete: function (e) {
                  return n.delete(e).catch(function () {
                    return Zo({ caches: t }).delete(e)
                  })
                },
                clear: function () {
                  return n.clear().catch(function () {
                    return Zo({ caches: t }).clear()
                  })
                },
              }
        }
        function zo() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : { serializable: !0 },
            t = {}
          return {
            get: function (n, r) {
              var o =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {
                        miss: function () {
                          return Promise.resolve()
                        },
                      },
                a = JSON.stringify(n)
              if (a in t)
                return Promise.resolve(e.serializable ? JSON.parse(t[a]) : t[a])
              var i = r(),
                c =
                  (o && o.miss) ||
                  function () {
                    return Promise.resolve()
                  }
              return i
                .then(function (e) {
                  return c(e)
                })
                .then(function () {
                  return i
                })
            },
            set: function (n, r) {
              return (
                (t[JSON.stringify(n)] = e.serializable ? JSON.stringify(r) : r),
                Promise.resolve(r)
              )
            },
            delete: function (e) {
              return delete t[JSON.stringify(e)], Promise.resolve()
            },
            clear: function () {
              return (t = {}), Promise.resolve()
            },
          }
        }
        function qo(e) {
          for (var t = e.length - 1; t > 0; t--) {
            var n = Math.floor(Math.random() * (t + 1)),
              r = e[t]
            ;(e[t] = e[n]), (e[n] = r)
          }
          return e
        }
        function Wo(e, t) {
          return t
            ? (Object.keys(t).forEach(function (n) {
                e[n] = t[n](e)
              }),
              e)
            : e
        }
        function Go(e) {
          for (
            var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
            r < t;
            r++
          )
            n[r - 1] = arguments[r]
          var o = 0
          return e.replace(/%s/g, function () {
            return encodeURIComponent(n[o++])
          })
        }
        function Ko(e, t) {
          var n = e || {},
            r = n.data || {}
          return (
            Object.keys(n).forEach(function (e) {
              ;-1 ===
                [
                  'timeout',
                  'headers',
                  'queryParameters',
                  'data',
                  'cacheable',
                ].indexOf(e) && (r[e] = n[e])
            }),
            {
              data: Object.entries(r).length > 0 ? r : void 0,
              timeout: n.timeout || t,
              headers: n.headers || {},
              queryParameters: n.queryParameters || {},
              cacheable: n.cacheable,
            }
          )
        }
        var Jo = { Read: 1, Write: 2, Any: 3 }
        function Qo(e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1
          return It(It({}, e), {}, { status: t, lastUpdate: Date.now() })
        }
        function Yo(e) {
          return 'string' == typeof e
            ? { protocol: 'https', url: e, accept: Jo.Any }
            : {
                protocol: e.protocol || 'https',
                url: e.url,
                accept: e.accept || Jo.Any,
              }
        }
        var $o = 'POST'
        function Xo(e, t, n, r) {
          var o = [],
            a = (function (e, t) {
              if (
                'GET' !== e.method &&
                (void 0 !== e.data || void 0 !== t.data)
              ) {
                var n = Array.isArray(e.data)
                  ? e.data
                  : It(It({}, e.data), t.data)
                return JSON.stringify(n)
              }
            })(n, r),
            i = (function (e, t) {
              var n = It(It({}, e.headers), t.headers),
                r = {}
              return (
                Object.keys(n).forEach(function (e) {
                  var t = n[e]
                  r[e.toLowerCase()] = t
                }),
                r
              )
            })(e, r),
            c = n.method,
            l = 'GET' !== n.method ? {} : It(It({}, n.data), r.data),
            s = It(
              It(
                It({ 'x-algolia-agent': e.userAgent.value }, e.queryParameters),
                l,
              ),
              r.queryParameters,
            ),
            u = 0,
            d = function t(l, d) {
              var p = l.pop()
              if (void 0 === p)
                throw {
                  name: 'RetryError',
                  message:
                    'Unreachable hosts - your application id may be incorrect. If the error persists, contact support@algolia.com.',
                  transporterStackTrace: ra(o),
                }
              var f = {
                  data: a,
                  headers: i,
                  method: c,
                  url: ta(p, n.path, s),
                  connectTimeout: d(u, e.timeouts.connect),
                  responseTimeout: d(u, r.timeout),
                },
                h = function (e) {
                  var t = {
                    request: f,
                    response: e,
                    host: p,
                    triesLeft: l.length,
                  }
                  return o.push(t), t
                },
                m = {
                  onSucess: function (e) {
                    return (function (e) {
                      try {
                        return JSON.parse(e.content)
                      } catch (t) {
                        throw (function (e, t) {
                          return {
                            name: 'DeserializationError',
                            message: e,
                            response: t,
                          }
                        })(t.message, e)
                      }
                    })(e)
                  },
                  onRetry: function (n) {
                    var r = h(n)
                    return (
                      n.isTimedOut && u++,
                      Promise.all([
                        e.logger.info('Retryable failure', oa(r)),
                        e.hostsCache.set(p, Qo(p, n.isTimedOut ? 3 : 2)),
                      ]).then(function () {
                        return t(l, d)
                      })
                    )
                  },
                  onFail: function (e) {
                    throw (
                      (h(e),
                      (function (e, t) {
                        var n = e.content,
                          r = e.status,
                          o = n
                        try {
                          o = JSON.parse(n).message
                        } catch (e) {}
                        return (function (e, t, n) {
                          return {
                            name: 'ApiError',
                            message: e,
                            status: t,
                            transporterStackTrace: n,
                          }
                        })(o, r, t)
                      })(e, ra(o)))
                    )
                  },
                }
              return e.requester.send(f).then(function (e) {
                return (function (e, t) {
                  return (function (e) {
                    var t = e.status
                    return (
                      e.isTimedOut ||
                      (function (e) {
                        var t = e.isTimedOut,
                          n = e.status
                        return !t && 0 == ~~n
                      })(e) ||
                      (2 != ~~(t / 100) && 4 != ~~(t / 100))
                    )
                  })(e)
                    ? t.onRetry(e)
                    : 2 == ~~(e.status / 100)
                    ? t.onSucess(e)
                    : t.onFail(e)
                })(e, m)
              })
            }
          return (function (e, t) {
            return Promise.all(
              t.map(function (t) {
                return e.get(t, function () {
                  return Promise.resolve(Qo(t))
                })
              }),
            ).then(function (e) {
              var n = e.filter(function (e) {
                  return (function (e) {
                    return 1 === e.status || Date.now() - e.lastUpdate > 12e4
                  })(e)
                }),
                r = e.filter(function (e) {
                  return (function (e) {
                    return 3 === e.status && Date.now() - e.lastUpdate <= 12e4
                  })(e)
                }),
                o = [].concat(Pt(n), Pt(r))
              return {
                getTimeout: function (e, t) {
                  return (0 === r.length && 0 === e ? 1 : r.length + 3 + e) * t
                },
                statelessHosts:
                  o.length > 0
                    ? o.map(function (e) {
                        return Yo(e)
                      })
                    : t,
              }
            })
          })(e.hostsCache, t).then(function (e) {
            return d(Pt(e.statelessHosts).reverse(), e.getTimeout)
          })
        }
        function ea(e) {
          var t = {
            value: 'Algolia for JavaScript ('.concat(e, ')'),
            add: function (e) {
              var n = '; '
                .concat(e.segment)
                .concat(void 0 !== e.version ? ' ('.concat(e.version, ')') : '')
              return (
                -1 === t.value.indexOf(n) &&
                  (t.value = ''.concat(t.value).concat(n)),
                t
              )
            },
          }
          return t
        }
        function ta(e, t, n) {
          var r = na(n),
            o = ''
              .concat(e.protocol, '://')
              .concat(e.url, '/')
              .concat('/' === t.charAt(0) ? t.substr(1) : t)
          return r.length && (o += '?'.concat(r)), o
        }
        function na(e) {
          return Object.keys(e)
            .map(function (t) {
              return Go(
                '%s=%s',
                t,
                ((n = e[t]),
                '[object Object]' === Object.prototype.toString.call(n) ||
                '[object Array]' === Object.prototype.toString.call(n)
                  ? JSON.stringify(e[t])
                  : e[t]),
              )
              var n
            })
            .join('&')
        }
        function ra(e) {
          return e.map(function (e) {
            return oa(e)
          })
        }
        function oa(e) {
          var t = e.request.headers['x-algolia-api-key']
            ? { 'x-algolia-api-key': '*****' }
            : {}
          return It(
            It({}, e),
            {},
            {
              request: It(
                It({}, e.request),
                {},
                { headers: It(It({}, e.request.headers), t) },
              ),
            },
          )
        }
        var aa = function (e) {
            return function (t) {
              var n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                r = { transporter: e.transporter, appId: e.appId, indexName: t }
              return Wo(r, n.methods)
            }
          },
          ia = function (e) {
            return function (t, n) {
              var r = t.map(function (e) {
                return It(It({}, e), {}, { params: na(e.params || {}) })
              })
              return e.transporter.read(
                {
                  method: $o,
                  path: '1/indexes/*/queries',
                  data: { requests: r },
                  cacheable: !0,
                },
                n,
              )
            }
          },
          ca = function (e) {
            return function (t, n) {
              return Promise.all(
                t.map(function (t) {
                  var r = t.params,
                    o = r.facetName,
                    a = r.facetQuery,
                    i = (function (e, t) {
                      if (null == e) return {}
                      var n,
                        r,
                        o = (function (e, t) {
                          if (null == e) return {}
                          var n,
                            r,
                            o = {},
                            a = Object.keys(e)
                          for (r = 0; r < a.length; r++)
                            (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n])
                          return o
                        })(e, t)
                      if (Object.getOwnPropertySymbols) {
                        var a = Object.getOwnPropertySymbols(e)
                        for (r = 0; r < a.length; r++)
                          (n = a[r]),
                            t.indexOf(n) >= 0 ||
                              (Object.prototype.propertyIsEnumerable.call(
                                e,
                                n,
                              ) &&
                                (o[n] = e[n]))
                      }
                      return o
                    })(r, ['facetName', 'facetQuery'])
                  return aa(e)(t.indexName, {
                    methods: { searchForFacetValues: ua },
                  }).searchForFacetValues(o, a, It(It({}, n), i))
                }),
              )
            }
          },
          la = function (e) {
            return function (t, n, r) {
              return e.transporter.read(
                {
                  method: $o,
                  path: Go('1/answers/%s/prediction', e.indexName),
                  data: { query: t, queryLanguages: n },
                  cacheable: !0,
                },
                r,
              )
            }
          },
          sa = function (e) {
            return function (t, n) {
              return e.transporter.read(
                {
                  method: $o,
                  path: Go('1/indexes/%s/query', e.indexName),
                  data: { query: t },
                  cacheable: !0,
                },
                n,
              )
            }
          },
          ua = function (e) {
            return function (t, n, r) {
              return e.transporter.read(
                {
                  method: $o,
                  path: Go('1/indexes/%s/facets/%s/query', e.indexName, t),
                  data: { facetQuery: n },
                  cacheable: !0,
                },
                r,
              )
            }
          }
        function da(e, t, n) {
          var r = {
            appId: e,
            apiKey: t,
            timeouts: { connect: 1, read: 2, write: 30 },
            requester: {
              send: function (e) {
                return new Promise(function (t) {
                  var n = new XMLHttpRequest()
                  n.open(e.method, e.url, !0),
                    Object.keys(e.headers).forEach(function (t) {
                      return n.setRequestHeader(t, e.headers[t])
                    })
                  var r,
                    o = function (e, r) {
                      return setTimeout(function () {
                        n.abort(), t({ status: 0, content: r, isTimedOut: !0 })
                      }, 1e3 * e)
                    },
                    a = o(e.connectTimeout, 'Connection timeout')
                  ;(n.onreadystatechange = function () {
                    n.readyState > n.OPENED &&
                      void 0 === r &&
                      (clearTimeout(a),
                      (r = o(e.responseTimeout, 'Socket timeout')))
                  }),
                    (n.onerror = function () {
                      0 === n.status &&
                        (clearTimeout(a),
                        clearTimeout(r),
                        t({
                          content: n.responseText || 'Network request failed',
                          status: n.status,
                          isTimedOut: !1,
                        }))
                    }),
                    (n.onload = function () {
                      clearTimeout(a),
                        clearTimeout(r),
                        t({
                          content: n.responseText,
                          status: n.status,
                          isTimedOut: !1,
                        })
                    }),
                    n.send(e.data)
                })
              },
            },
            logger: {
              debug: function (e, t) {
                return Promise.resolve()
              },
              info: function (e, t) {
                return Promise.resolve()
              },
              error: function (e, t) {
                return console.error(e, t), Promise.resolve()
              },
            },
            responsesCache: zo(),
            requestsCache: zo({ serializable: !1 }),
            hostsCache: Zo({
              caches: [Vo({ key: ''.concat('4.8.1', '-').concat(e) }), zo()],
            }),
            userAgent: ea('4.8.1').add({ segment: 'Browser', version: 'lite' }),
            authMode: 0,
          }
          return (function (e) {
            var t = e.appId,
              n = (function (e, t, n) {
                var r = {
                  'x-algolia-api-key': n,
                  'x-algolia-application-id': t,
                }
                return {
                  headers: function () {
                    return 1 === e ? r : {}
                  },
                  queryParameters: function () {
                    return 0 === e ? r : {}
                  },
                }
              })(void 0 !== e.authMode ? e.authMode : 1, t, e.apiKey),
              r = (function (e) {
                var t = e.hostsCache,
                  n = e.logger,
                  r = e.requester,
                  o = e.requestsCache,
                  a = e.responsesCache,
                  i = e.timeouts,
                  c = e.userAgent,
                  l = e.hosts,
                  s = e.queryParameters,
                  u = {
                    hostsCache: t,
                    logger: n,
                    requester: r,
                    requestsCache: o,
                    responsesCache: a,
                    timeouts: i,
                    userAgent: c,
                    headers: e.headers,
                    queryParameters: s,
                    hosts: l.map(function (e) {
                      return Yo(e)
                    }),
                    read: function (e, t) {
                      var n = Ko(t, u.timeouts.read),
                        r = function () {
                          return Xo(
                            u,
                            u.hosts.filter(function (e) {
                              return 0 != (e.accept & Jo.Read)
                            }),
                            e,
                            n,
                          )
                        }
                      if (
                        !0 !==
                        (void 0 !== n.cacheable ? n.cacheable : e.cacheable)
                      )
                        return r()
                      var o = {
                        request: e,
                        mappedRequestOptions: n,
                        transporter: {
                          queryParameters: u.queryParameters,
                          headers: u.headers,
                        },
                      }
                      return u.responsesCache.get(
                        o,
                        function () {
                          return u.requestsCache.get(o, function () {
                            return u.requestsCache
                              .set(o, r())
                              .then(
                                function (e) {
                                  return Promise.all([
                                    u.requestsCache.delete(o),
                                    e,
                                  ])
                                },
                                function (e) {
                                  return Promise.all([
                                    u.requestsCache.delete(o),
                                    Promise.reject(e),
                                  ])
                                },
                              )
                              .then(function (e) {
                                var t = jt(e, 2)
                                return t[0], t[1]
                              })
                          })
                        },
                        {
                          miss: function (e) {
                            return u.responsesCache.set(o, e)
                          },
                        },
                      )
                    },
                    write: function (e, t) {
                      return Xo(
                        u,
                        u.hosts.filter(function (e) {
                          return 0 != (e.accept & Jo.Write)
                        }),
                        e,
                        Ko(t, u.timeouts.write),
                      )
                    },
                  }
                return u
              })(
                It(
                  It(
                    {
                      hosts: [
                        {
                          url: ''.concat(t, '-dsn.algolia.net'),
                          accept: Jo.Read,
                        },
                        { url: ''.concat(t, '.algolia.net'), accept: Jo.Write },
                      ].concat(
                        qo([
                          { url: ''.concat(t, '-1.algolianet.com') },
                          { url: ''.concat(t, '-2.algolianet.com') },
                          { url: ''.concat(t, '-3.algolianet.com') },
                        ]),
                      ),
                    },
                    e,
                  ),
                  {},
                  {
                    headers: It(
                      It(It({}, n.headers()), {
                        'content-type': 'application/x-www-form-urlencoded',
                      }),
                      e.headers,
                    ),
                    queryParameters: It(
                      It({}, n.queryParameters()),
                      e.queryParameters,
                    ),
                  },
                ),
              )
            return Wo(
              {
                transporter: r,
                appId: t,
                addAlgoliaAgent: function (e, t) {
                  r.userAgent.add({ segment: e, version: t })
                },
                clearCache: function () {
                  return Promise.all([
                    r.requestsCache.clear(),
                    r.responsesCache.clear(),
                  ]).then(function () {})
                },
              },
              e.methods,
            )
          })(
            It(
              It(It({}, r), n),
              {},
              {
                methods: {
                  search: ia,
                  searchForFacetValues: ca,
                  multipleQueries: ia,
                  multipleSearchForFacetValues: ca,
                  initIndex: function (e) {
                    return function (t) {
                      return aa(e)(t, {
                        methods: {
                          search: sa,
                          searchForFacetValues: ua,
                          findAnswers: la,
                        },
                      })
                    }
                  },
                },
              },
            ),
          )
        }
        function pa(e, t) {
          return e.reduce(function (e, n) {
            var r = t(n)
            return (
              e.hasOwnProperty(r) || (e[r] = []),
              e[r].length < 5 && e[r].push(n),
              e
            )
          }, {})
        }
        function fa(e) {
          return e
        }
        function ha() {}
        function ma() {
          return (ma =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t]
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
              }
              return e
            }).apply(this, arguments)
        }
        function ga(e, t) {
          var n = Object.keys(e)
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e)
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
              })),
              n.push.apply(n, r)
          }
          return n
        }
        function va(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {}
            t % 2
              ? ga(Object(n), !0).forEach(function (t) {
                  ya(e, t, n[t])
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : ga(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  )
                })
          }
          return e
        }
        function ya(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          )
        }
        function ba(e, t) {
          ;(null == t || t > e.length) && (t = e.length)
          for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n]
          return r
        }
        function _a(e) {
          var t = e.appId,
            n = void 0 === t ? 'BH4D9OD16A' : t,
            r = e.apiKey,
            o = e.indexName,
            a = e.placeholder,
            i = void 0 === a ? 'Search docs' : a,
            c = e.searchParameters,
            l = e.onClose,
            s = void 0 === l ? ha : l,
            u = e.transformItems,
            d = void 0 === u ? fa : u,
            p = e.hitComponent,
            f = void 0 === p ? co : p,
            h = e.resultsFooterComponent,
            m =
              void 0 === h
                ? function () {
                    return null
                  }
                : h,
            g = e.navigator,
            v = e.initialScrollY,
            y = void 0 === v ? 0 : v,
            b = e.transformSearchClient,
            _ = void 0 === b ? fa : b,
            S = e.disableUserPersonalization,
            w = void 0 !== S && S,
            x = e.initialQuery,
            k = void 0 === x ? '' : x,
            O = (function (e, t) {
              return (
                (function (e) {
                  if (Array.isArray(e)) return e
                })(e) ||
                (function (e, t) {
                  if (
                    'undefined' != typeof Symbol &&
                    Symbol.iterator in Object(e)
                  ) {
                    var n = [],
                      r = !0,
                      o = !1,
                      a = void 0
                    try {
                      for (
                        var i, c = e[Symbol.iterator]();
                        !(r = (i = c.next()).done) &&
                        (n.push(i.value), 2 !== n.length);
                        r = !0
                      );
                    } catch (e) {
                      ;(o = !0), (a = e)
                    } finally {
                      try {
                        r || null == c.return || c.return()
                      } finally {
                        if (o) throw a
                      }
                    }
                    return n
                  }
                })(e) ||
                (function (e, t) {
                  if (e) {
                    if ('string' == typeof e) return ba(e, 2)
                    var n = Object.prototype.toString.call(e).slice(8, -1)
                    return (
                      'Object' === n &&
                        e.constructor &&
                        (n = e.constructor.name),
                      'Map' === n || 'Set' === n
                        ? Array.from(e)
                        : 'Arguments' === n ||
                          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                        ? ba(e, 2)
                        : void 0
                    )
                  }
                })(e) ||
                (function () {
                  throw new TypeError(
                    'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                  )
                })()
              )
            })(
              mr.useState({
                query: '',
                collections: [],
                completion: null,
                context: {},
                isOpen: !1,
                selectedItemId: null,
                status: 'idle',
              }),
            ),
            C = O[0],
            D = O[1],
            E = mr.useRef(null),
            I = mr.useRef(null),
            j = mr.useRef(null),
            P = mr.useRef(null),
            A = mr.useRef(null),
            T = mr.useRef(10),
            F = mr.useRef(
              'undefined' != typeof window
                ? window.getSelection().toString().slice(0, 64)
                : '',
            ).current,
            U = mr.useRef(k || F).current,
            N = (function (e, t, n) {
              return mr.useMemo(
                function () {
                  var r = da(e, t)
                  return (
                    r.addAlgoliaAgent('docsearch', '3.0.0-alpha.33'),
                    !1 ===
                      /docsearch.js \(.*\)/.test(
                        r.transporter.userAgent.value,
                      ) &&
                      r.addAlgoliaAgent('docsearch-react', '3.0.0-alpha.33'),
                    n(r)
                  )
                },
                [e, t, n],
              )
            })(n, r, _),
            L = mr.useRef(
              Bo({
                key: '__DOCSEARCH_FAVORITE_SEARCHES__'.concat(o),
                limit: 10,
              }),
            ).current,
            R = mr.useRef(
              Bo({
                key: '__DOCSEARCH_RECENT_SEARCHES__'.concat(o),
                limit: 0 === L.getAll().length ? 7 : 4,
              }),
            ).current,
            H = mr.useCallback(
              function (e) {
                if (!w) {
                  var t = 'content' === e.type ? e.__docsearch_parent : e
                  t &&
                    -1 ===
                      L.getAll().findIndex(function (e) {
                        return e.objectID === t.objectID
                      }) &&
                    R.add(t)
                }
              },
              [L, R, w],
            ),
            M = mr.useMemo(
              function () {
                return eo({
                  id: 'docsearch',
                  defaultSelectedItemId: 0,
                  placeholder: i,
                  openOnFocus: !0,
                  initialState: {
                    query: U,
                    context: { searchSuggestions: [] },
                  },
                  navigator: g,
                  onStateChange: function (e) {
                    var t = e.state
                    D(t)
                  },
                  getSources: function (e) {
                    var t = e.query,
                      n = e.state,
                      r = e.setContext,
                      a = e.setStatus
                    return t
                      ? (function (e) {
                          return (function (e) {
                            var t = e.searchClient,
                              n = e.queries
                            return (
                              'function' == typeof t.addAlgoliaAgent &&
                                t.addAlgoliaAgent(
                                  'autocomplete-core',
                                  '1.0.0-alpha.35',
                                ),
                              t.search(
                                n.map(function (e) {
                                  return {
                                    indexName: e.indexName,
                                    query: e.query,
                                    params: no(
                                      {
                                        hitsPerPage: 5,
                                        highlightPreTag: '__aa-highlight__',
                                        highlightPostTag: '__/aa-highlight__',
                                      },
                                      e.params,
                                    ),
                                  }
                                }),
                              )
                            )
                          })({
                            searchClient: e.searchClient,
                            queries: e.queries,
                          }).then(function (e) {
                            return e.results
                          })
                        })({
                          searchClient: N,
                          queries: [
                            {
                              indexName: o,
                              query: t,
                              params: va(
                                {
                                  attributesToRetrieve: [
                                    'hierarchy.lvl0',
                                    'hierarchy.lvl1',
                                    'hierarchy.lvl2',
                                    'hierarchy.lvl3',
                                    'hierarchy.lvl4',
                                    'hierarchy.lvl5',
                                    'hierarchy.lvl6',
                                    'content',
                                    'type',
                                    'url',
                                  ],
                                  attributesToSnippet: [
                                    'hierarchy.lvl1:'.concat(T.current),
                                    'hierarchy.lvl2:'.concat(T.current),
                                    'hierarchy.lvl3:'.concat(T.current),
                                    'hierarchy.lvl4:'.concat(T.current),
                                    'hierarchy.lvl5:'.concat(T.current),
                                    'hierarchy.lvl6:'.concat(T.current),
                                    'content:'.concat(T.current),
                                  ],
                                  snippetEllipsisText: '…',
                                  highlightPreTag: '<mark>',
                                  highlightPostTag: '</mark>',
                                  hitsPerPage: 20,
                                },
                                c,
                              ),
                            },
                          ],
                        })
                          .catch(function (e) {
                            throw ('RetryError' === e.name && a('error'), e)
                          })
                          .then(function (e) {
                            var t = e[0].hits,
                              o = e[0].nbHits,
                              a = pa(t, function (e) {
                                return e.hierarchy.lvl0
                              })
                            return (
                              n.context.searchSuggestions.length <
                                Object.keys(a).length &&
                                r({ searchSuggestions: Object.keys(a) }),
                              r({ nbHits: o }),
                              Object.values(a).map(function (e) {
                                return {
                                  onSelect: function (e) {
                                    var t = e.item,
                                      n = e.event
                                    H(t),
                                      n.shiftKey ||
                                        n.ctrlKey ||
                                        n.metaKey ||
                                        s()
                                  },
                                  getItemUrl: function (e) {
                                    return e.item.url
                                  },
                                  getItems: function () {
                                    return Object.values(
                                      pa(e, function (e) {
                                        return e.hierarchy.lvl1
                                      }),
                                    )
                                      .map(d)
                                      .map(function (e) {
                                        return e.map(function (t) {
                                          return va(
                                            va({}, t),
                                            {},
                                            {
                                              __docsearch_parent:
                                                'lvl1' !== t.type &&
                                                e.find(function (e) {
                                                  return (
                                                    'lvl1' === e.type &&
                                                    e.hierarchy.lvl1 ===
                                                      t.hierarchy.lvl1
                                                  )
                                                }),
                                            },
                                          )
                                        })
                                      })
                                      .flat()
                                  },
                                }
                              })
                            )
                          })
                      : w
                      ? []
                      : [
                          {
                            onSelect: function (e) {
                              var t = e.item,
                                n = e.event
                              H(t), n.shiftKey || n.ctrlKey || n.metaKey || s()
                            },
                            getItemUrl: function (e) {
                              return e.item.url
                            },
                            getItems: function () {
                              return R.getAll()
                            },
                          },
                          {
                            onSelect: function (e) {
                              var t = e.item,
                                n = e.event
                              H(t), n.shiftKey || n.ctrlKey || n.metaKey || s()
                            },
                            getItemUrl: function (e) {
                              return e.item.url
                            },
                            getItems: function () {
                              return L.getAll()
                            },
                          },
                        ]
                  },
                })
              },
              [o, c, N, s, R, L, H, U, i, g, d, w],
            ),
            B = M.getEnvironmentProps,
            V = M.getRootProps,
            Z = M.refresh
          return (
            (function (e) {
              var t = e.getEnvironmentProps,
                n = e.panelElement,
                r = e.searchBoxElement,
                o = e.inputElement
              mr.useEffect(
                function () {
                  if (n && r && o) {
                    var e = t({
                        panelElement: n,
                        searchBoxElement: r,
                        inputElement: o,
                      }),
                      a = e.onTouchStart,
                      i = e.onTouchMove
                    return (
                      window.addEventListener('touchstart', a),
                      window.addEventListener('touchmove', i),
                      function () {
                        window.removeEventListener('touchstart', a),
                          window.removeEventListener('touchmove', i)
                      }
                    )
                  }
                },
                [t, n, r, o],
              )
            })({
              getEnvironmentProps: B,
              panelElement: P.current,
              searchBoxElement: j.current,
              inputElement: A.current,
            }),
            (function (e) {
              var t = e.container
              mr.useEffect(
                function () {
                  if (t) {
                    var e = t.querySelectorAll(
                        'a[href]:not([disabled]), button:not([disabled]), input:not([disabled])',
                      ),
                      n = e[0],
                      r = e[e.length - 1]
                    return (
                      t.addEventListener('keydown', o),
                      function () {
                        t.removeEventListener('keydown', o)
                      }
                    )
                  }
                  function o(e) {
                    'Tab' === e.key &&
                      (e.shiftKey
                        ? document.activeElement === n &&
                          (e.preventDefault(), r.focus())
                        : document.activeElement === r &&
                          (e.preventDefault(), n.focus()))
                  }
                },
                [t],
              )
            })({ container: E.current }),
            mr.useEffect(function () {
              return (
                document.body.classList.add('DocSearch--active'),
                function () {
                  var e, t
                  document.body.classList.remove('DocSearch--active'),
                    null === (e = (t = window).scrollTo) ||
                      void 0 === e ||
                      e.call(t, 0, y)
                }
              )
            }, []),
            mr.useEffect(function () {
              window.matchMedia('(max-width: 750px)').matches && (T.current = 5)
            }, []),
            mr.useEffect(
              function () {
                P.current && (P.current.scrollTop = 0)
              },
              [C.query],
            ),
            mr.useEffect(
              function () {
                U.length > 0 && (Z(), A.current && A.current.focus())
              },
              [U, Z],
            ),
            mr.useEffect(function () {
              function e() {
                if (I.current) {
                  var e = 0.01 * window.innerHeight
                  I.current.style.setProperty(
                    '--docsearch-vh',
                    ''.concat(e, 'px'),
                  )
                }
              }
              return (
                e(),
                window.addEventListener('resize', e),
                function () {
                  window.removeEventListener('resize', e)
                }
              )
            }, []),
            mr.createElement(
              'div',
              ma({ ref: E }, V({ 'aria-expanded': !0 }), {
                className: [
                  'DocSearch',
                  'DocSearch-Container',
                  'stalled' === C.status && 'DocSearch-Container--Stalled',
                  'error' === C.status && 'DocSearch-Container--Errored',
                ]
                  .filter(Boolean)
                  .join(' '),
                onMouseDown: function (e) {
                  e.target === e.currentTarget && s()
                },
              }),
              mr.createElement(
                'div',
                { className: 'DocSearch-Modal', ref: I },
                mr.createElement(
                  'header',
                  { className: 'DocSearch-SearchBar', ref: j },
                  mr.createElement(
                    Mo,
                    ma({}, M, {
                      state: C,
                      autoFocus: 0 === U.length,
                      onClose: s,
                      inputRef: A,
                      isFromSelection: Boolean(U) && U === F,
                    }),
                  ),
                ),
                mr.createElement(
                  'div',
                  { className: 'DocSearch-Dropdown', ref: P },
                  mr.createElement(
                    Ro,
                    ma({}, M, {
                      indexName: o,
                      state: C,
                      hitComponent: f,
                      resultsFooterComponent: m,
                      disableUserPersonalization: w,
                      recentSearches: R,
                      favoriteSearches: L,
                      onItemClick: function (e) {
                        H(e), s()
                      },
                      inputRef: A,
                    }),
                  ),
                ),
                mr.createElement(
                  'footer',
                  { className: 'DocSearch-Footer' },
                  mr.createElement(ao, null),
                ),
              ),
            )
          )
        }
        function Sa() {
          return (Sa =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t]
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
              }
              return e
            }).apply(this, arguments)
        }
        function wa(e, t) {
          return (
            (function (e) {
              if (Array.isArray(e)) return e
            })(e) ||
            (function (e, t) {
              if (
                'undefined' != typeof Symbol &&
                Symbol.iterator in Object(e)
              ) {
                var n = [],
                  r = !0,
                  o = !1,
                  a = void 0
                try {
                  for (
                    var i, c = e[Symbol.iterator]();
                    !(r = (i = c.next()).done) &&
                    (n.push(i.value), !t || n.length !== t);
                    r = !0
                  );
                } catch (e) {
                  ;(o = !0), (a = e)
                } finally {
                  try {
                    r || null == c.return || c.return()
                  } finally {
                    if (o) throw a
                  }
                }
                return n
              }
            })(e, t) ||
            (function (e, t) {
              if (e) {
                if ('string' == typeof e) return xa(e, t)
                var n = Object.prototype.toString.call(e).slice(8, -1)
                return (
                  'Object' === n && e.constructor && (n = e.constructor.name),
                  'Map' === n || 'Set' === n
                    ? Array.from(e)
                    : 'Arguments' === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? xa(e, t)
                    : void 0
                )
              }
            })(e, t) ||
            (function () {
              throw new TypeError(
                'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
              )
            })()
          )
        }
        function xa(e, t) {
          ;(null == t || t > e.length) && (t = e.length)
          for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n]
          return r
        }
        function ka(e) {
          var t = mr.useRef(null),
            n = wa(mr.useState(!1), 2),
            r = n[0],
            o = n[1],
            a = wa(mr.useState(void 0), 2),
            i = a[0],
            c = a[1],
            l = mr.useCallback(
              function () {
                o(!0)
              },
              [o],
            ),
            s = mr.useCallback(
              function () {
                o(!1)
              },
              [o],
            )
          return (
            (function (e) {
              var t = e.isOpen,
                n = e.onOpen,
                r = e.onClose,
                o = e.onInput,
                a = e.searchButtonRef
              mr.useEffect(
                function () {
                  function e(e) {
                    ;((27 === e.keyCode && t) ||
                      ('k' === e.key && (e.metaKey || e.ctrlKey)) ||
                      (!(function (e) {
                        var t = e.target,
                          n = t.tagName
                        return (
                          t.isContentEditable ||
                          'INPUT' === n ||
                          'SELECT' === n ||
                          'TEXTAREA' === n
                        )
                      })(e) &&
                        '/' === e.key &&
                        !t)) &&
                      (e.preventDefault(),
                      t
                        ? r()
                        : document.body.classList.contains(
                            'DocSearch--active',
                          ) ||
                          document.body.classList.contains(
                            'DocSearch--active',
                          ) ||
                          n()),
                      a &&
                        a.current === document.activeElement &&
                        o &&
                        /[a-zA-Z0-9]/.test(String.fromCharCode(e.keyCode)) &&
                        o(e)
                  }
                  return (
                    window.addEventListener('keydown', e),
                    function () {
                      window.removeEventListener('keydown', e)
                    }
                  )
                },
                [t, n, r, o, a],
              )
            })({
              isOpen: r,
              onOpen: l,
              onClose: s,
              onInput: mr.useCallback(
                function (e) {
                  o(!0), c(e.key)
                },
                [o, c],
              ),
              searchButtonRef: t,
            }),
            mr.createElement(
              mr.Fragment,
              null,
              mr.createElement(_r, { onClick: l, ref: t }),
              r &&
                tr(
                  mr.createElement(
                    _a,
                    Sa({}, e, {
                      initialScrollY: window.scrollY,
                      initialQuery: i,
                      onClose: s,
                    }),
                  ),
                  document.body,
                ),
            )
          )
        }
        function Oa(e, t) {
          var n = Object.keys(e)
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e)
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
              })),
              n.push.apply(n, r)
          }
          return n
        }
        function Ca(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {}
            t % 2
              ? Oa(Object(n), !0).forEach(function (t) {
                  Da(e, t, n[t])
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : Oa(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  )
                })
          }
          return e
        }
        function Da(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          )
        }
        da.version = '4.8.1'
        var Ea = {
            name: 'VanDocSearch',
            props: { lang: String, searchConfig: Object },
            watch: {
              lang() {
                this.initDocsearch()
              },
            },
            mounted() {
              this.initDocsearch()
            },
            methods: {
              initDocsearch() {
                this.searchConfig &&
                  (function (e) {
                    ar(
                      mr.createElement(
                        ka,
                        Dt({}, e, {
                          transformSearchClient: function (t) {
                            return (
                              t.addAlgoliaAgent(
                                'docsearch.js',
                                '3.0.0-alpha.33',
                              ),
                              e.transformSearchClient
                                ? e.transformSearchClient(t)
                                : t
                            )
                          },
                        }),
                      ),
                      (function (e) {
                        var t =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : window
                        return 'string' == typeof e
                          ? t.document.querySelector(e)
                          : e
                      })(e.container, e.environment),
                    )
                  })(
                    Ca(
                      Ca({}, this.searchConfig),
                      {},
                      { container: '#docsearch' },
                    ),
                  )
              },
            },
          },
          Ia = n(7361)
        it()(Ia.Z, { insert: 'head', singleton: !1 }),
          Ia.Z.locals,
          (Ea.render = function (e, t, n, o, a, i) {
            return (0, r.wg)(), (0, r.iD)('div', xt)
          })
        var ja = {
            name: 'VanDocHeader',
            components: { SearchInput: Ea },
            props: {
              lang: String,
              config: Object,
              versions: Array,
              langConfigs: Array,
            },
            data: () => ({ packageVersion: '1.9.3', showVersionPop: !1 }),
            computed: {
              langLink() {
                return '#'.concat(
                  this.$route.path.replace(this.lang, this.anotherLang.lang),
                )
              },
              langLabel() {
                return this.anotherLang.label
              },
              anotherLang() {
                var e = this.langConfigs.filter((e) => e.lang !== this.lang)
                return e.length ? e[0] : {}
              },
              searchConfig() {
                return this.config.searchConfig
              },
            },
            methods: {
              toggleVersionPop() {
                var e = !this.showVersionPop,
                  t = e ? 'add' : 'remove'
                document.body[''.concat(t, 'EventListener')](
                  'click',
                  this.checkHideVersionPop,
                ),
                  (this.showVersionPop = e)
              },
              checkHideVersionPop(e) {
                this.$refs.version.contains(e.target) ||
                  (this.showVersionPop = !1)
              },
              onSwitchLang(e) {
                this.$router.push(this.$route.path.replace(e.from, e.to))
              },
              onSwitchVersion(e) {
                e.link && (location.href = e.link)
              },
            },
          },
          Pa = n(6399)
        it()(Pa.Z, { insert: 'head', singleton: !1 }),
          Pa.Z.locals,
          (ja.render = function (e, t, n, a, i, c) {
            var l = (0, r.up)('search-input')
            return (
              (0, r.wg)(),
              (0, r.iD)('div', st, [
                (0, r._)('div', ut, [
                  (0, r._)('div', dt, [
                    (0, r._)('a', pt, [
                      (0, r._)('img', { src: n.config.logo }, null, 8, ft),
                      (0, r._)('span', null, (0, o.zw)(n.config.title), 1),
                    ]),
                    (0, r._)('ul', ht, [
                      ((0, r.wg)(!0),
                      (0, r.iD)(
                        r.HY,
                        null,
                        (0, r.Ko)(
                          n.config.links,
                          (e, t) => (
                            (0, r.wg)(),
                            (0, r.iD)(
                              'li',
                              { key: t, class: 'van-doc-header__top-nav-item' },
                              [
                                (0, r._)(
                                  'a',
                                  {
                                    class: 'van-doc-header__link',
                                    target: '_blank',
                                    href: e.url,
                                  },
                                  [
                                    e.logo
                                      ? ((0, r.wg)(),
                                        (0, r.iD)(
                                          'img',
                                          { key: 0, src: e.logo },
                                          null,
                                          8,
                                          gt,
                                        ))
                                      : e.text
                                      ? ((0, r.wg)(),
                                        (0, r.iD)(
                                          'span',
                                          vt,
                                          (0, o.zw)(e.text),
                                          1,
                                        ))
                                      : (0, r.kq)('v-if', !0),
                                  ],
                                  8,
                                  mt,
                                ),
                              ],
                            )
                          ),
                        ),
                        128,
                      )),
                      n.versions
                        ? ((0, r.wg)(),
                          (0, r.iD)(
                            'li',
                            yt,
                            [
                              (0, r._)(
                                'span',
                                {
                                  class:
                                    'van-doc-header__cube van-doc-header__version',
                                  onClick:
                                    t[0] ||
                                    (t[0] = function () {
                                      return (
                                        c.toggleVersionPop &&
                                        c.toggleVersionPop(...arguments)
                                      )
                                    }),
                                },
                                [
                                  (0, r.Uk)(
                                    (0, o.zw)(i.packageVersion) + ' ',
                                    1,
                                  ),
                                  (0, r.Wm)(
                                    w,
                                    { name: 'van-doc-dropdown' },
                                    {
                                      default: (0, r.w5)(() => [
                                        i.showVersionPop
                                          ? ((0, r.wg)(),
                                            (0, r.iD)('div', bt, [
                                              ((0, r.wg)(!0),
                                              (0, r.iD)(
                                                r.HY,
                                                null,
                                                (0, r.Ko)(
                                                  n.versions,
                                                  (e, t) => (
                                                    (0, r.wg)(),
                                                    (0, r.iD)(
                                                      'div',
                                                      {
                                                        key: t,
                                                        class:
                                                          'van-doc-header__version-pop-item',
                                                        onClick: (t) =>
                                                          c.onSwitchVersion(e),
                                                      },
                                                      (0, o.zw)(e.label),
                                                      9,
                                                      _t,
                                                    )
                                                  ),
                                                ),
                                                128,
                                              )),
                                            ]))
                                          : (0, r.kq)('v-if', !0),
                                      ]),
                                      _: 1,
                                    },
                                  ),
                                ],
                              ),
                            ],
                            512,
                          ))
                        : (0, r.kq)('v-if', !0),
                      c.langLabel && c.langLink
                        ? ((0, r.wg)(),
                          (0, r.iD)('li', St, [
                            (0, r._)(
                              'a',
                              {
                                class: 'van-doc-header__cube',
                                href: c.langLink,
                              },
                              (0, o.zw)(c.langLabel),
                              9,
                              wt,
                            ),
                          ]))
                        : (0, r.kq)('v-if', !0),
                      c.searchConfig
                        ? ((0, r.wg)(),
                          (0, r.j4)(
                            l,
                            {
                              key: 2,
                              lang: n.lang,
                              'search-config': c.searchConfig,
                            },
                            null,
                            8,
                            ['lang', 'search-config'],
                          ))
                        : (0, r.kq)('v-if', !0),
                    ]),
                  ]),
                ]),
              ])
            )
          })
        var Aa = ja,
          Ta = {
            name: 'VanDocContent',
            computed: {
              currentPage() {
                var { path: e } = this.$route
                return e ? e.split('/').slice(-1)[0] : this.$route.name
              },
            },
          },
          Fa = n(8570)
        it()(Fa.Z, { insert: 'head', singleton: !1 }),
          Fa.Z.locals,
          (Ta.render = function (e, t, n, a, i, c) {
            return (
              (0, r.wg)(),
              (0, r.iD)(
                'div',
                {
                  class: (0, o.C_)([
                    'van-doc-content',
                    'van-doc-content--'.concat(c.currentPage),
                  ]),
                },
                [(0, r.WI)(e.$slots, 'default')],
                2,
              )
            )
          })
        var Ua = Ta,
          Na = { name: 'VanDocContainer', props: { hasSimulator: Boolean } },
          La = n(484)
        it()(La.Z, { insert: 'head', singleton: !1 }),
          La.Z.locals,
          (Na.render = function (e, t, n, a, i, c) {
            return (
              (0, r.wg)(),
              (0, r.iD)(
                'div',
                {
                  class: (0, o.C_)([
                    'van-doc-container van-doc-row',
                    { 'van-doc-container--with-simulator': n.hasSimulator },
                  ]),
                },
                [(0, r.WI)(e.$slots, 'default')],
                2,
              )
            )
          })
        var Ra = Na,
          Ha = ['src'],
          Ma = {
            name: 'VanDocSimulator',
            props: { src: String },
            data: () => ({
              scrollTop: window.scrollY,
              windowHeight: window.innerHeight,
            }),
            computed: {
              isFixed() {
                return this.scrollTop > 60
              },
              simulatorStyle() {
                return { height: Math.min(640, this.windowHeight - 90) + 'px' }
              },
            },
            mounted() {
              window.addEventListener('scroll', () => {
                this.scrollTop = window.scrollY
              }),
                window.addEventListener('resize', () => {
                  this.windowHeight = window.innerHeight
                })
            },
          },
          Ba = n(7241)
        it()(Ba.Z, { insert: 'head', singleton: !1 }),
          Ba.Z.locals,
          (Ma.render = function (e, t, n, a, i, c) {
            return (
              (0, r.wg)(),
              (0, r.iD)(
                'div',
                {
                  class: (0, o.C_)([
                    'van-doc-simulator',
                    { 'van-doc-simulator-fixed': c.isFixed },
                  ]),
                },
                [
                  (0, r._)(
                    'iframe',
                    {
                      ref: 'iframe',
                      src: n.src,
                      style: (0, o.j5)(c.simulatorStyle),
                      frameborder: '0',
                    },
                    null,
                    12,
                    Ha,
                  ),
                ],
                2,
              )
            )
          })
        var Va = {
            name: 'VanDoc',
            components: {
              DocNav: lt,
              DocHeader: Aa,
              DocContent: Ua,
              DocContainer: Ra,
              DocSimulator: Ma,
            },
            props: {
              lang: String,
              versions: Array,
              simulator: String,
              hasSimulator: Boolean,
              langConfigs: Array,
              config: { type: Object, required: !0 },
              base: { type: String, default: '' },
            },
            emits: ['switch-version'],
            watch: {
              $route() {
                this.setNav()
              },
            },
            created() {
              this.setNav(), this.keyboardHandler()
            },
            methods: {
              setNav() {
                for (
                  var e,
                    { nav: t } = this.config,
                    n = t.reduce((e, t) => e.concat(t.items), []),
                    r = this.$route.path.split('/').pop(),
                    o = 0,
                    a = n.length;
                  o < a;
                  o++
                )
                  if (n[o].path === r) {
                    e = o
                    break
                  }
                ;(this.leftNav = n[e - 1]), (this.rightNav = n[e + 1])
              },
              keyboardNav(e) {
                if (
                  !/win(32|64)/.test(navigator.userAgent.toLocaleLowerCase())
                ) {
                  var t = 'prev' === e ? this.leftNav : this.rightNav
                  t.path && this.$router.push(this.base + t.path)
                }
              },
              keyboardHandler() {
                window.addEventListener('keyup', (e) => {
                  switch (e.keyCode) {
                    case 37:
                      this.keyboardNav('prev')
                      break
                    case 39:
                      this.keyboardNav('next')
                  }
                })
              },
            },
          },
          Za = n(4184)
        it()(Za.Z, { insert: 'head', singleton: !1 }),
          Za.Z.locals,
          (Va.render = function (e, t, n, o, a, i) {
            var c = (0, r.up)('doc-header'),
              l = (0, r.up)('doc-nav'),
              s = (0, r.up)('doc-content'),
              u = (0, r.up)('doc-container'),
              d = (0, r.up)('doc-simulator')
            return (
              (0, r.wg)(),
              (0, r.iD)('div', Xe, [
                (0, r.Wm)(
                  c,
                  {
                    lang: n.lang,
                    config: n.config,
                    versions: n.versions,
                    'lang-configs': n.langConfigs,
                    onSwitchVersion:
                      t[0] || (t[0] = (t) => e.$emit('switch-version', t)),
                  },
                  null,
                  8,
                  ['lang', 'config', 'versions', 'lang-configs'],
                ),
                (0, r.Wm)(
                  l,
                  { lang: n.lang, 'nav-config': n.config.nav },
                  null,
                  8,
                  ['lang', 'nav-config'],
                ),
                (0, r.Wm)(
                  u,
                  { 'has-simulator': n.hasSimulator },
                  {
                    default: (0, r.w5)(() => [
                      (0, r.Wm)(s, null, {
                        default: (0, r.w5)(() => [
                          (0, r.WI)(e.$slots, 'default'),
                        ]),
                        _: 3,
                      }),
                    ]),
                    _: 3,
                  },
                  8,
                  ['has-simulator'],
                ),
                n.hasSimulator
                  ? ((0, r.wg)(),
                    (0, r.j4)(d, { key: 0, src: n.simulator }, null, 8, [
                      'src',
                    ]))
                  : (0, r.kq)('v-if', !0),
              ])
            )
          })
        var za = 'zh-CN',
          qa = 'vant-cli-lang',
          Wa = za,
          Ga = {
            components: { VanDoc: Va },
            data: () => ({ hasSimulator: !0 }),
            computed: {
              simulator() {
                var e, t
                if (null !== (e = H().site.simulator) && void 0 !== e && e.url)
                  return null === (t = H().site.simulator) || void 0 === t
                    ? void 0
                    : t.url
                var n = location.pathname.replace(/\/index(\.html)?/, '/')
                return ''.concat(n, 'mobile.html').concat(location.hash)
              },
              lang() {
                var { lang: e } = this.$route.meta
                return e || ''
              },
              langConfigs() {
                var { locales: e = {} } = H().site
                return Object.keys(e).map((t) => ({
                  lang: t,
                  label: e[t].langLabel || '',
                }))
              },
              config() {
                var { locales: e } = H().site
                return e ? e[this.lang] : H().site
              },
              versions: () => H().site.versions || null,
            },
            watch: {
              '$route.path'() {
                this.setTitleAndToogleSimulator()
              },
              lang(e) {
                var t
                ;(Wa = t = e),
                  localStorage.setItem(qa, t),
                  this.setTitleAndToogleSimulator()
              },
              config: {
                handler(e) {
                  e && this.setTitleAndToogleSimulator()
                },
                immediate: !0,
              },
            },
            mounted() {
              this.$route.hash &&
                this.$nextTick(() => {
                  var e = document.querySelector(this.$route.hash)
                  e && e.scrollIntoView()
                })
            },
            methods: {
              setTitleAndToogleSimulator() {
                var { title: e } = this.config,
                  t = this.config.nav
                    .reduce((e, t) => [...e, ...t.items], [])
                    .find((e) => e.path === this.$route.meta.name)
                t && t.title
                  ? (e = t.title + ' - ' + e)
                  : this.config.description &&
                    (e += ' - '.concat(this.config.description)),
                  (document.title = e),
                  (this.hasSimulator = !(
                    H().site.hideSimulator ||
                    this.config.hideSimulator ||
                    (t && t.hideSimulator)
                  ))
              },
            },
          },
          Ka = n(387)
        it()(Ka.Z, { insert: 'head', singleton: !1 }),
          Ka.Z.locals,
          (Ga.render = function (e, t, n, o, a, i) {
            var c = (0, r.up)('router-view'),
              l = (0, r.up)('van-doc')
            return (
              (0, r.wg)(),
              (0, r.iD)('div', $e, [
                i.config
                  ? ((0, r.wg)(),
                    (0, r.j4)(
                      l,
                      {
                        key: 0,
                        lang: i.lang,
                        config: i.config,
                        versions: i.versions,
                        simulator: i.simulator,
                        'has-simulator': a.hasSimulator,
                        'lang-configs': i.langConfigs,
                      },
                      { default: (0, r.w5)(() => [(0, r.Wm)(c)]), _: 1 },
                      8,
                      [
                        'lang',
                        'config',
                        'versions',
                        'simulator',
                        'has-simulator',
                        'lang-configs',
                      ],
                    ))
                  : (0, r.kq)('v-if', !0),
              ])
            )
          })
        var Ja = Ga,
          Qa = (e) => ((0, r.dD)('data-v-41f5cf44'), (e = e()), (0, r.Cn)(), e),
          Ya = { class: 'demo-playground--code' },
          $a = { class: 'demo-playground--code--actions' },
          Xa = Qa(() => (0, r._)('span', null, null, -1)),
          ei = ['data-status'],
          ti = ['innerHTML'],
          ni = {
            name: 'DemoPlayground',
            props: {
              originCode: String,
              codeSnippet: String,
              transform: Boolean,
              compact: Boolean,
              inline: Boolean,
            },
            data: () => ({ showSource: !1, copyStatus: 'ready' }),
            methods: {
              unescape,
              toogleSource() {
                this.showSource = !this.showSource
              },
              copySourceCode() {
                !(function (e) {
                  var t = document.createElement('textarea')
                  ;(t.value = e),
                    t.setAttribute('readonly', ''),
                    (t.style.position = 'absolute'),
                    (t.style.left = '-9999px'),
                    document.body.appendChild(t)
                  var n = document.getSelection()
                  if (n) {
                    var r = n.rangeCount > 0 && n.getRangeAt(0)
                    t.select(),
                      document.execCommand('copy'),
                      document.body.removeChild(t),
                      r && (n.removeAllRanges(), n.addRange(r))
                  }
                })(unescape(this.originCode)),
                  (this.copyStatus = 'copied'),
                  setTimeout(() => {
                    this.copyStatus = 'ready'
                  }, 2e3)
              },
            },
          },
          ri = n(8602)
        it()(ri.Z, { insert: 'head', singleton: !1 }),
          ri.Z.locals,
          (ni.render = function (e, t, n, a, i, c) {
            return (
              (0, r.wg)(),
              (0, r.iD)(
                'div',
                {
                  class: (0, o.C_)({
                    'demo-playground': !n.inline,
                    transform: n.transform,
                  }),
                },
                [
                  n.inline
                    ? (0, r.WI)(e.$slots, 'default', { key: 0 }, void 0, !0)
                    : ((0, r.wg)(),
                      (0, r.iD)(
                        r.HY,
                        { key: 1 },
                        [
                          (0, r._)(
                            'div',
                            {
                              class: (0, o.C_)([
                                'demo-playground--previewer',
                                { compact: n.compact },
                              ]),
                            },
                            [(0, r.WI)(e.$slots, 'default', {}, void 0, !0)],
                            2,
                          ),
                          (0, r._)('div', Ya, [
                            (0, r._)('div', $a, [
                              Xa,
                              (0, r._)(
                                'button',
                                {
                                  title: 'Copy source code',
                                  class: 'action-icon',
                                  role: 'copy',
                                  'data-status': i.copyStatus,
                                  onClick:
                                    t[0] ||
                                    (t[0] = function () {
                                      return (
                                        c.copySourceCode &&
                                        c.copySourceCode(...arguments)
                                      )
                                    }),
                                },
                                null,
                                8,
                                ei,
                              ),
                              (0, r._)('button', {
                                title: 'Toggle source code panel',
                                class: 'action-icon',
                                role: 'source',
                                onClick:
                                  t[1] ||
                                  (t[1] = function () {
                                    return (
                                      c.toogleSource &&
                                      c.toogleSource(...arguments)
                                    )
                                  }),
                              }),
                            ]),
                            (0, r.wy)(
                              (0, r._)(
                                'div',
                                {
                                  innerHTML: c.unescape(n.codeSnippet),
                                  class: 'demo-playground--code--content',
                                },
                                null,
                                8,
                                ti,
                              ),
                              [[F, i.showSource]],
                            ),
                          ]),
                        ],
                        64,
                      )),
                ],
                2,
              )
            )
          }),
          (ni.__scopeId = 'data-v-41f5cf44')
        var oi = ni,
          ai = n(2119),
          ii = navigator.userAgent.toLowerCase(),
          ci = /ios|iphone|ipod|ipad|android/.test(ii)
        function li(e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '-'
          return e
            .replace(/([a-z\d])([A-Z])/g, '$1' + t + '$2')
            .replace(/([A-Z]+)([A-Z][a-z\d]+)/g, '$1' + t + '$2')
            .toLowerCase()
        }
        var si,
          ui = [],
          di = !1
        function pi() {
          var e,
            t,
            n = window.vueRouter,
            { path: r } = n.currentRoute.value
          return null !== (e = H().site.simulator) &&
            void 0 !== e &&
            e.routeMapper
            ? null === (t = H().site.simulator) || void 0 === t
              ? void 0
              : t.routeMapper(r)
            : r
        }
        function fi() {
          var e,
            t = document.querySelector('iframe')
          t &&
            ((e = () => {
              t.contentWindow.postMessage(
                { type: 'replacePath', value: pi() },
                '*',
              )
            }),
            di ? e() : ui.push(e))
        }
        window.top === window
          ? window.addEventListener('message', (e) => {
              'iframeReady' === e.data.type &&
                ((di = !0), ui.forEach((e) => e()), (ui = []))
            })
          : window.top.postMessage({ type: 'iframeReady' }, '*'),
          ci && location.replace('mobile.html' + location.hash)
        var hi,
          mi,
          { locales: gi, defaultLang: vi } = H().site
        function yi(e) {
          var t = e.path.split('/')[1]
          return -1 !== Object.keys(gi).indexOf(t) ? t : Wa
        }
        ;(hi = vi),
          (mi = localStorage.getItem(qa)),
          (Wa =
            mi ||
            (navigator.language && -1 !== navigator.language.indexOf('zh-')
              ? za
              : hi || 'en-US'))
        var bi,
          _i,
          Si = (0, ai.p7)({
            history: (0, ai.r5)(),
            routes:
              ((bi = []),
              (_i = Object.keys(Ye)),
              gi
                ? bi.push({
                    name: 'notFound',
                    path: '/:path(.*)+',
                    redirect: (e) => ({ name: yi(e) }),
                  })
                : bi.push({
                    name: 'notFound',
                    path: '/:path(.*)+',
                    redirect: { name: 'home' },
                  }),
              _i.forEach((e) => {
                var { component: t, lang: n } = (function (e) {
                  if (-1 !== e.indexOf('_')) {
                    var t = e.split('_'),
                      n = t.shift()
                    return { component: ''.concat(li(n)), lang: t.join('-') }
                  }
                  return { component: ''.concat(li(e)), lang: '' }
                })(e)
                'home' === t &&
                  (function (e, t) {
                    bi.push({
                      name: t || 'home',
                      path: '/'.concat(t || ''),
                      component: e,
                      meta: { lang: t },
                    })
                  })(Ye[e], n),
                  n
                    ? bi.push({
                        name: ''.concat(n, '/').concat(t),
                        path: '/'.concat(n, '/').concat(t),
                        component: Ye[e],
                        meta: { lang: n, name: t },
                      })
                    : bi.push({
                        name: ''.concat(t),
                        path: '/'.concat(t),
                        component: Ye[e],
                        meta: { name: t },
                      })
              }),
              bi),
            scrollBehavior: (e) => (e.hash ? { el: e.hash } : { x: 0, y: 0 }),
          })
        Si.afterEach(() => {
          ;(0, r.Y3)(fi)
        }),
          !1 !==
            (null === (si = H().site.simulator) || void 0 === si
              ? void 0
              : si.syncPathFromSimulator) &&
            (function (e) {
              window.addEventListener('message', (t) => {
                var n, r
                if (
                  'replacePath' ===
                  (null === (n = t.data) || void 0 === n ? void 0 : n.type)
                ) {
                  var o =
                    (null === (r = t.data) || void 0 === r
                      ? void 0
                      : r.value) || ''
                  e.currentRoute.value.path !== o &&
                    e.replace(o).catch(() => {})
                }
              })
            })(Si),
          (window.vueRouter = Si),
          (window.app = ((...e) => {
            const t = (L || (L = (0, r.Us)(N))).createApp(...e),
              { mount: n } = t
            return (
              (t.mount = (e) => {
                const r = (function (e) {
                  return (0, o.HD)(e) ? document.querySelector(e) : e
                })(e)
                if (!r) return
                const a = t._component
                ;(0, o.mf)(a) ||
                  a.render ||
                  a.template ||
                  (a.template = r.innerHTML),
                  (r.innerHTML = '')
                const i = n(r, !1, r instanceof SVGElement)
                return (
                  r instanceof Element &&
                    (r.removeAttribute('v-cloak'),
                    r.setAttribute('data-v-app', '')),
                  i
                )
              }),
              t
            )
          })(Ja)
            .use(Si)
            .use({
              install: function (e) {
                ;[].forEach((t) => {
                  t.install ? e.use(t) : t.name && e.component(t.name, t)
                })
              },
              version: '1.9.3',
            })
            .component(oi.name, oi)),
          setTimeout(() => {
            window.app.mount('#app')
          }, 0)
      },
      8334: (e) => {
        e.exports = {
          name: 'vantui-doc',
          build: {
            srcDir: '',
            css: { preprocessor: 'less' },
            site: { publicPath: '/vantui/', searchConfig: {} },
          },
          site: {
            simulator: { url: '' },
            title: '@antmjs/vantui',
            logo: 'https://antm-js.gitee.io/resource/antmjs-vantui.jpg',
            links: [
              {
                logo: 'https://b.yzcdn.cn/vant/logo/github.svg',
                url: 'https://github.com/antmjs/vantui',
              },
            ],
            nav: [
              {
                title: '开发指南',
                items: [
                  { path: 'home', title: '介绍', hideSimulator: !1 },
                  { path: 'quickstart', title: '快速上手', hideSimulator: !1 },
                  {
                    path: 'custom-style',
                    title: '样式覆盖',
                    hideSimulator: !1,
                  },
                  { path: 'theme', title: '定制主题', hideSimulator: !1 },
                  {
                    path: 'use-in-react',
                    title: '如何在React中使用',
                    hideSimulator: !1,
                  },
                  {
                    path: 'comments',
                    title: 'typescript同步到文档',
                    hideSimulator: !1,
                  },
                ],
              },
              {
                title: '基础组件',
                items: [
                  { path: 'button', title: 'Button 按钮' },
                  { path: 'cell', title: 'Cell 单元格' },
                  { path: 'config-provider', title: 'ConfigProvider 全局配置' },
                  { path: 'icon', title: 'Icon 图标' },
                  { path: 'image', title: 'Image 图片' },
                  { path: 'col', title: 'Layout 布局' },
                  { path: 'popup', title: 'Popup 弹出层' },
                  { path: 'common', title: 'Style 内置样式' },
                  { path: 'toast', title: 'Toast 轻提示' },
                  { path: 'transition', title: 'transition 动画' },
                ],
              },
              {
                title: '表单组件',
                items: [
                  { path: 'calendar', title: 'Calendar 日历' },
                  { path: 'checkbox', title: 'Checkbox 复选框' },
                  { path: 'datetime-picker', title: 'DatetimePicker 时间选择' },
                  { path: 'field', title: 'Field 输入框' },
                  { path: 'form', title: 'Form 表单' },
                  { path: 'picker', title: 'Picker 选择器' },
                  { path: 'radio', title: 'Radio 单选框' },
                  { path: 'rate', title: 'Rate 评分' },
                  { path: 'search', title: 'Search 搜索' },
                  { path: 'slider', title: 'Slider 滑块' },
                  { path: 'stepper', title: 'Stepper 步进器' },
                  { path: 'switch', title: 'Switch 开关' },
                  { path: 'uploader', title: 'Uploader 文件上传' },
                ],
              },
              {
                title: '反馈组件',
                items: [
                  { path: 'action-sheet', title: 'ActionSheet 动作面板' },
                  { path: 'dialog', title: 'Dialog 弹出框' },
                  { path: 'dropdown-menu', title: 'DropdownMenu 下拉菜单' },
                  { path: 'loading', title: 'Loading 加载' },
                  { path: 'notify', title: 'Notify 消息通知' },
                  { path: 'overlay', title: 'Overlay 遮罩层' },
                  { path: 'share-sheet', title: 'ShareSheet 分享面板' },
                  { path: 'swipe-cell', title: 'SwipeCell 滑动单元格' },
                ],
              },
              {
                title: '展示组件',
                items: [
                  { path: 'table', title: 'Table 表格' },
                  { path: 'circle', title: 'Circle 环形进度条' },
                  { path: 'collapse', title: 'Collapse 折叠面板' },
                  { path: 'count-down', title: 'CountDown 倒计时' },
                  { path: 'divider', title: 'Divider 分割线' },
                  { path: 'empty', title: 'Empty 空状态' },
                  { path: 'notice-bar', title: 'NoticeBar 通知栏' },
                  { path: 'progress', title: 'Progress 进度条' },
                  { path: 'skeleton', title: 'Skeleton 骨架屏' },
                  { path: 'steps', title: 'Steps 步骤条' },
                  { path: 'sticky', title: 'Sticky 粘性布局' },
                  { path: 'tag', title: 'Tag 标签' },
                  {
                    path: 'power-scroll-view',
                    title: 'PowerScrollView 滚动列表',
                  },
                  { path: 'number-keyboard', title: 'NumberKeyboard 数字键盘' },
                ],
              },
              {
                title: '导航组件',
                items: [
                  { path: 'pagination', title: 'Pagination 分页' },
                  { path: 'grid', title: 'Grid 宫格' },
                  { path: 'index-bar', title: 'IndexBar 索引栏' },
                  { path: 'nav-bar', title: 'NavBar 导航栏' },
                  { path: 'sidebar', title: 'Sidebar 侧边导航' },
                  { path: 'tab', title: 'Tab 标签页' },
                  { path: 'tabbar', title: 'Tabbar 标签栏' },
                  { path: 'tree-select', title: 'TreeSelect 分类选择' },
                ],
              },
              {
                title: '业务组件',
                items: [
                  { path: 'area', title: 'Area 省市区选择' },
                  { path: 'card', title: 'Card 商品卡片' },
                  { path: 'submit-bar', title: 'SubmitBar 提交订单栏' },
                  { path: 'goods-action', title: 'GoodsAction 商品导航' },
                ],
              },
              {
                title: '有赞Vant-Weapp小程序文档',
                items: [{ path: 'index', title: '参考', hideSimulator: !1 }],
              },
            ],
          },
        }
      },
      3278: (e, t, n) => {
        'use strict'
        var r = n(3645),
          o = n.n(r)()(!1)
        o.push([
          e.id,
          '/*! @docsearch/css 3.0.0-alpha.33 | MIT License | © Algolia, Inc. and contributors | https://docsearch.algolia.com */\n:root{--docsearch-primary-color:#5468ff;--docsearch-text-color:#1c1e21;--docsearch-spacing:12px;--docsearch-icon-stroke-width:1.4;--docsearch-highlight-color:var(--docsearch-primary-color);--docsearch-muted-color:#969faf;--docsearch-container-background:rgba(101,108,133,0.8);--docsearch-logo-color:#5468ff;--docsearch-modal-width:560px;--docsearch-modal-height:600px;--docsearch-modal-background:#f5f6f7;--docsearch-modal-shadow:inset 1px 1px 0 0 hsla(0,0%,100%,0.5),0 3px 8px 0 #555a64;--docsearch-searchbox-height:56px;--docsearch-searchbox-background:#ebedf0;--docsearch-searchbox-focus-background:#fff;--docsearch-searchbox-shadow:inset 0 0 0 2px var(--docsearch-primary-color);--docsearch-hit-height:56px;--docsearch-hit-color:#444950;--docsearch-hit-active-color:#fff;--docsearch-hit-background:#fff;--docsearch-hit-shadow:0 1px 3px 0 #d4d9e1;--docsearch-key-gradient:linear-gradient(-225deg,#d5dbe4,#f8f8f8);--docsearch-key-shadow:inset 0 -2px 0 0 #cdcde6,inset 0 0 1px 1px #fff,0 1px 2px 1px rgba(30,35,90,0.4);--docsearch-footer-height:44px;--docsearch-footer-background:#fff;--docsearch-footer-shadow:0 -1px 0 0 #e0e3e8,0 -3px 6px 0 rgba(69,98,155,0.12)}html[data-theme=dark]{--docsearch-text-color:#f5f6f7;--docsearch-container-background:rgba(9,10,17,0.8);--docsearch-modal-background:#15172a;--docsearch-modal-shadow:inset 1px 1px 0 0 #2c2e40,0 3px 8px 0 #000309;--docsearch-searchbox-background:#090a11;--docsearch-searchbox-focus-background:#000;--docsearch-hit-color:#bec3c9;--docsearch-hit-shadow:none;--docsearch-hit-background:#090a11;--docsearch-key-gradient:linear-gradient(-26.5deg,#565872,#31355b);--docsearch-key-shadow:inset 0 -2px 0 0 #282d55,inset 0 0 1px 1px #51577d,0 2px 2px 0 rgba(3,4,9,0.3);--docsearch-footer-background:#1e2136;--docsearch-footer-shadow:inset 0 1px 0 0 rgba(73,76,106,0.5),0 -4px 8px 0 rgba(0,0,0,0.2);--docsearch-logo-color:#fff;--docsearch-muted-color:#7f8497}.DocSearch-Button{align-items:center;background:var(--docsearch-searchbox-background);border:0;border-radius:40px;color:var(--docsearch-muted-color);cursor:pointer;display:flex;font-weight:500;height:36px;justify-content:space-between;margin:0 0 0 16px;padding:0 8px;-webkit-user-select:none;user-select:none}.DocSearch-Button:active,.DocSearch-Button:focus,.DocSearch-Button:hover{background:var(--docsearch-searchbox-focus-background);box-shadow:var(--docsearch-searchbox-shadow);color:var(--docsearch-text-color);outline:none}.DocSearch-Button-Container{align-items:center;display:flex}.DocSearch-Search-Icon{stroke-width:1.6}.DocSearch-Button .DocSearch-Search-Icon{color:var(--docsearch-text-color)}.DocSearch-Button-Placeholder{font-size:1rem;padding:0 12px 0 6px}.DocSearch-Button-Keys{display:flex}.DocSearch-Button-Key{align-items:center;background:var(--docsearch-key-gradient);border-radius:3px;box-shadow:var(--docsearch-key-shadow);color:var(--docsearch-muted-color);display:flex;height:18px;justify-content:center;margin-right:.4em;padding-bottom:2px;position:relative;top:-1px;width:20px}@media (max-width:750px){.DocSearch-Button-Key,.DocSearch-Button-KeySeparator,.DocSearch-Button-Placeholder{display:none}}.DocSearch--active{overflow:hidden!important}.DocSearch-Container,.DocSearch-Container *{box-sizing:border-box}.DocSearch-Container{background-color:var(--docsearch-container-background);height:100vh;left:0;position:fixed;top:0;width:100vw;z-index:200}.DocSearch-Container a{text-decoration:none}.DocSearch-Link{-webkit-appearance:none;appearance:none;background:none;border:0;color:var(--docsearch-highlight-color);cursor:pointer;font:inherit;margin:0;padding:0}.DocSearch-Modal{background:var(--docsearch-modal-background);border-radius:6px;box-shadow:var(--docsearch-modal-shadow);flex-direction:column;margin:60px auto auto;max-width:var(--docsearch-modal-width);position:relative}.DocSearch-SearchBar{display:flex;padding:var(--docsearch-spacing) var(--docsearch-spacing) 0}.DocSearch-Form{align-items:center;background:var(--docsearch-searchbox-focus-background);border-radius:4px;box-shadow:var(--docsearch-searchbox-shadow);display:flex;height:var(--docsearch-searchbox-height);margin:0;padding:0 var(--docsearch-spacing);position:relative;width:100%}.DocSearch-Input{-webkit-appearance:none;appearance:none;background:transparent;border:0;color:var(--docsearch-text-color);flex:1;font:inherit;font-size:1.2em;height:100%;outline:none;padding:0 0 0 8px;width:80%}.DocSearch-Input::-webkit-input-placeholder{color:var(--docsearch-muted-color);opacity:1}.DocSearch-Input::placeholder{color:var(--docsearch-muted-color);opacity:1}.DocSearch-Input::-webkit-search-cancel-button,.DocSearch-Input::-webkit-search-decoration,.DocSearch-Input::-webkit-search-results-button,.DocSearch-Input::-webkit-search-results-decoration{display:none}.DocSearch-LoadingIndicator,.DocSearch-MagnifierLabel,.DocSearch-Reset{margin:0;padding:0}.DocSearch-MagnifierLabel,.DocSearch-Reset{align-items:center;color:var(--docsearch-highlight-color);display:flex;justify-content:center}.DocSearch-Container--Stalled .DocSearch-MagnifierLabel,.DocSearch-LoadingIndicator{display:none}.DocSearch-Container--Stalled .DocSearch-LoadingIndicator{align-items:center;color:var(--docsearch-highlight-color);display:flex;justify-content:center}@media screen and (prefers-reduced-motion:reduce){.DocSearch-Reset{animation:none;-webkit-appearance:none;appearance:none;background:none;border:0;border-radius:50%;color:var(--docsearch-icon-color);cursor:pointer;right:0;stroke-width:var(--docsearch-icon-stroke-width)}}.DocSearch-Reset{animation:fade-in .1s ease-in forwards;-webkit-appearance:none;appearance:none;background:none;border:0;border-radius:50%;color:var(--docsearch-icon-color);cursor:pointer;padding:2px;right:0;stroke-width:var(--docsearch-icon-stroke-width)}.DocSearch-Reset[hidden]{display:none}.DocSearch-Reset:focus{outline:none}.DocSearch-Reset:hover{color:var(--docsearch-highlight-color)}.DocSearch-LoadingIndicator svg,.DocSearch-MagnifierLabel svg{height:24px;width:24px}.DocSearch-Cancel{display:none}.DocSearch-Dropdown{max-height:calc(var(--docsearch-modal-height) - var(--docsearch-searchbox-height) - var(--docsearch-spacing) - var(--docsearch-footer-height));min-height:var(--docsearch-spacing);overflow-y:auto;overflow-y:overlay;padding:0 var(--docsearch-spacing);scrollbar-color:var(--docsearch-muted-color) var(--docsearch-modal-background);scrollbar-width:thin}.DocSearch-Dropdown::-webkit-scrollbar{width:12px}.DocSearch-Dropdown::-webkit-scrollbar-track{background:transparent}.DocSearch-Dropdown::-webkit-scrollbar-thumb{background-color:var(--docsearch-muted-color);border:3px solid var(--docsearch-modal-background);border-radius:20px}.DocSearch-Dropdown ul{list-style:none;margin:0;padding:0}.DocSearch-Label{font-size:.75em;line-height:1.6em}.DocSearch-Help,.DocSearch-Label{color:var(--docsearch-muted-color)}.DocSearch-Help{font-size:.9em;margin:0;-webkit-user-select:none;user-select:none}.DocSearch-Title{font-size:1.2em}.DocSearch-Logo a{display:flex}.DocSearch-Logo svg{color:var(--docsearch-logo-color);margin-left:8px}.DocSearch-Hits:last-of-type{margin-bottom:24px}.DocSearch-Hits mark{background:none;color:var(--docsearch-highlight-color)}.DocSearch-HitsFooter{color:var(--docsearch-muted-color);display:flex;font-size:.85em;justify-content:center;margin-bottom:var(--docsearch-spacing);padding:var(--docsearch-spacing)}.DocSearch-HitsFooter a{border-bottom:1px solid;color:inherit}.DocSearch-Hit{border-radius:4px;display:flex;padding-bottom:4px;position:relative}@media screen and (prefers-reduced-motion:reduce){.DocSearch-Hit--deleting{transition:none}}.DocSearch-Hit--deleting{opacity:0;transition:all .25s linear}@media screen and (prefers-reduced-motion:reduce){.DocSearch-Hit--favoriting{transition:none}}.DocSearch-Hit--favoriting{transform:scale(0);transform-origin:top center;transition:all .25s linear;transition-delay:.25s}.DocSearch-Hit a{background:var(--docsearch-hit-background);border-radius:4px;box-shadow:var(--docsearch-hit-shadow);display:block;padding-left:var(--docsearch-spacing);width:100%}.DocSearch-Hit-source{background:var(--docsearch-modal-background);color:var(--docsearch-highlight-color);font-size:.85em;font-weight:600;line-height:32px;margin:0 -4px;padding:8px 4px 0;position:-webkit-sticky;position:sticky;top:0;z-index:10}.DocSearch-Hit-Tree{color:var(--docsearch-muted-color);height:var(--docsearch-hit-height);opacity:.5;stroke-width:var(--docsearch-icon-stroke-width);width:24px}.DocSearch-Hit[aria-selected=true] a{background-color:var(--docsearch-highlight-color)}.DocSearch-Hit[aria-selected=true] mark{text-decoration:underline}.DocSearch-Hit-Container{align-items:center;color:var(--docsearch-hit-color);display:flex;flex-direction:row;height:var(--docsearch-hit-height);padding:0 var(--docsearch-spacing) 0 0}.DocSearch-Hit-icon{height:20px;width:20px}.DocSearch-Hit-action,.DocSearch-Hit-icon{color:var(--docsearch-muted-color);stroke-width:var(--docsearch-icon-stroke-width)}.DocSearch-Hit-action{align-items:center;display:flex;height:22px;width:22px}.DocSearch-Hit-action svg{display:block;height:18px;width:18px}.DocSearch-Hit-action+.DocSearch-Hit-action{margin-left:6px}.DocSearch-Hit-action-button{-webkit-appearance:none;appearance:none;background:none;border:0;border-radius:50%;color:inherit;cursor:pointer;padding:2px}svg.DocSearch-Hit-Select-Icon{display:none}.DocSearch-Hit[aria-selected=true] .DocSearch-Hit-Select-Icon{display:block}.DocSearch-Hit-action-button:focus,.DocSearch-Hit-action-button:hover{background:rgba(0,0,0,.2);transition:background-color .1s ease-in}@media screen and (prefers-reduced-motion:reduce){.DocSearch-Hit-action-button:focus,.DocSearch-Hit-action-button:hover{transition:none}}.DocSearch-Hit-action-button:focus path,.DocSearch-Hit-action-button:hover path{fill:#fff}.DocSearch-Hit-content-wrapper{display:flex;flex:1 1 auto;flex-direction:column;font-weight:500;justify-content:center;line-height:1.2em;margin:0 8px;overflow-x:hidden;position:relative;text-overflow:ellipsis;white-space:nowrap;width:80%}.DocSearch-Hit-title{font-size:.9em}.DocSearch-Hit-path{color:var(--docsearch-muted-color);font-size:.75em}.DocSearch-Hit[aria-selected=true] .DocSearch-Hit-action,.DocSearch-Hit[aria-selected=true] .DocSearch-Hit-icon,.DocSearch-Hit[aria-selected=true] .DocSearch-Hit-path,.DocSearch-Hit[aria-selected=true] .DocSearch-Hit-text,.DocSearch-Hit[aria-selected=true] .DocSearch-Hit-title,.DocSearch-Hit[aria-selected=true] .DocSearch-Hit-Tree,.DocSearch-Hit[aria-selected=true] mark{color:var(--docsearch-hit-active-color)!important}@media screen and (prefers-reduced-motion:reduce){.DocSearch-Hit-action-button:focus,.DocSearch-Hit-action-button:hover{background:rgba(0,0,0,.2);transition:none}}.DocSearch-ErrorScreen,.DocSearch-NoResults,.DocSearch-StartScreen{font-size:.9em;margin:0 auto;padding:36px 0;text-align:center;width:80%}.DocSearch-Screen-Icon{color:var(--docsearch-muted-color);padding-bottom:12px}.DocSearch-NoResults-Prefill-List{display:inline-block;padding-bottom:24px;text-align:left}.DocSearch-NoResults-Prefill-List ul{display:inline-block;padding:8px 0 0}.DocSearch-NoResults-Prefill-List li{list-style-position:inside;list-style-type:"» "}.DocSearch-Prefill{-webkit-appearance:none;appearance:none;background:none;border:0;border-radius:1em;color:var(--docsearch-highlight-color);cursor:pointer;display:inline-block;font-size:1em;font-weight:700;padding:0}.DocSearch-Prefill:focus,.DocSearch-Prefill:hover{outline:none;text-decoration:underline}.DocSearch-Footer{align-items:center;background:var(--docsearch-footer-background);border-radius:0 0 8px 8px;box-shadow:var(--docsearch-footer-shadow);display:flex;flex-direction:row-reverse;flex-shrink:0;height:var(--docsearch-footer-height);justify-content:space-between;padding:0 var(--docsearch-spacing);position:relative;-webkit-user-select:none;user-select:none;width:100%;z-index:300}.DocSearch-Commands{color:var(--docsearch-muted-color);display:flex;list-style:none;margin:0;padding:0}.DocSearch-Commands li{align-items:center;display:flex}.DocSearch-Commands li:not(:last-of-type){margin-right:.8em}.DocSearch-Commands-Key{align-items:center;background:var(--docsearch-key-gradient);border-radius:2px;box-shadow:var(--docsearch-key-shadow);display:flex;height:18px;justify-content:center;margin-right:.4em;padding-bottom:1px;width:20px}@media (max-width:750px){:root{--docsearch-spacing:10px;--docsearch-footer-height:40px}.DocSearch-Dropdown{height:100%}.DocSearch-Container{height:100vh;height:-webkit-fill-available;height:calc(var(--docsearch-vh, 1vh)*100);position:absolute}.DocSearch-Footer{border-radius:0;bottom:0;position:absolute}.DocSearch-Hit-content-wrapper{display:flex;position:relative;width:80%}.DocSearch-Modal{border-radius:0;box-shadow:none;height:100vh;height:-webkit-fill-available;height:calc(var(--docsearch-vh, 1vh)*100);margin:0;max-width:100%;width:100%}.DocSearch-Dropdown{max-height:calc(var(--docsearch-vh, 1vh)*100 - var(--docsearch-searchbox-height) - var(--docsearch-spacing) - var(--docsearch-footer-height))}.DocSearch-Cancel{-webkit-appearance:none;appearance:none;background:none;border:0;color:var(--docsearch-highlight-color);cursor:pointer;display:inline-block;flex:none;font:inherit;font-size:1em;font-weight:500;margin-left:var(--docsearch-spacing);outline:none;overflow:hidden;padding:0;-webkit-user-select:none;user-select:none;white-space:nowrap}.DocSearch-Commands,.DocSearch-Hit-Tree{display:none}}@keyframes fade-in{0%{opacity:0}to{opacity:1}}',
          '',
        ]),
          (t.Z = o)
      },
      387: (e, t, n) => {
        'use strict'
        var r = n(3645),
          o = n.n(r)()(!1)
        o.push([
          e.id,
          "/* cyrillic-ext */\n@font-face {\n  font-weight: 400;\n  font-family: 'Open Sans';\n  font-style: normal;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://b.yzcdn.cn/vant/mem8YaGs126MiZpBA-UFWJ0bf8pkAp6a.woff2) format('woff2');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-weight: 400;\n  font-family: 'Open Sans';\n  font-style: normal;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://b.yzcdn.cn/vant/mem8YaGs126MiZpBA-UFUZ0bf8pkAp6a.woff2) format('woff2');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* greek-ext */\n@font-face {\n  font-weight: 400;\n  font-family: 'Open Sans';\n  font-style: normal;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://b.yzcdn.cn/vant/mem8YaGs126MiZpBA-UFWZ0bf8pkAp6a.woff2) format('woff2');\n  unicode-range: U+1F00-1FFF;\n}\n/* greek */\n@font-face {\n  font-weight: 400;\n  font-family: 'Open Sans';\n  font-style: normal;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://b.yzcdn.cn/vant/mem8YaGs126MiZpBA-UFVp0bf8pkAp6a.woff2) format('woff2');\n  unicode-range: U+0370-03FF;\n}\n/* vietnamese */\n@font-face {\n  font-weight: 400;\n  font-family: 'Open Sans';\n  font-style: normal;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://b.yzcdn.cn/vant/mem8YaGs126MiZpBA-UFWp0bf8pkAp6a.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-weight: 400;\n  font-family: 'Open Sans';\n  font-style: normal;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://b.yzcdn.cn/vant/mem8YaGs126MiZpBA-UFW50bf8pkAp6a.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-weight: 400;\n  font-family: 'Open Sans';\n  font-style: normal;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://b.yzcdn.cn/vant/mem8YaGs126MiZpBA-UFVZ0bf8pkAg.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* cyrillic-ext */\n@font-face {\n  font-weight: 600;\n  font-family: 'Open Sans';\n  font-style: normal;\n  src: local('Open Sans SemiBold'), local('OpenSans-SemiBold'), url(https://b.yzcdn.cn/vant/mem5YaGs126MiZpBA-UNirkOX-hpKKSTj5PW.woff2) format('woff2');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-weight: 600;\n  font-family: 'Open Sans';\n  font-style: normal;\n  src: local('Open Sans SemiBold'), local('OpenSans-SemiBold'), url(https://b.yzcdn.cn/vant/mem5YaGs126MiZpBA-UNirkOVuhpKKSTj5PW.woff2) format('woff2');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* greek-ext */\n@font-face {\n  font-weight: 600;\n  font-family: 'Open Sans';\n  font-style: normal;\n  src: local('Open Sans SemiBold'), local('OpenSans-SemiBold'), url(https://b.yzcdn.cn/vant/mem5YaGs126MiZpBA-UNirkOXuhpKKSTj5PW.woff2) format('woff2');\n  unicode-range: U+1F00-1FFF;\n}\n/* greek */\n@font-face {\n  font-weight: 600;\n  font-family: 'Open Sans';\n  font-style: normal;\n  src: local('Open Sans SemiBold'), local('OpenSans-SemiBold'), url(https://b.yzcdn.cn/vant/mem5YaGs126MiZpBA-UNirkOUehpKKSTj5PW.woff2) format('woff2');\n  unicode-range: U+0370-03FF;\n}\n/* vietnamese */\n@font-face {\n  font-weight: 600;\n  font-family: 'Open Sans';\n  font-style: normal;\n  src: local('Open Sans SemiBold'), local('OpenSans-SemiBold'), url(https://b.yzcdn.cn/vant/mem5YaGs126MiZpBA-UNirkOXehpKKSTj5PW.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-weight: 600;\n  font-family: 'Open Sans';\n  font-style: normal;\n  src: local('Open Sans SemiBold'), local('OpenSans-SemiBold'), url(https://b.yzcdn.cn/vant/mem5YaGs126MiZpBA-UNirkOXOhpKKSTj5PW.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-weight: 600;\n  font-family: 'Open Sans';\n  font-style: normal;\n  src: local('Open Sans SemiBold'), local('OpenSans-SemiBold'), url(https://b.yzcdn.cn/vant/mem5YaGs126MiZpBA-UNirkOUuhpKKSTjw.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\nbody {\n  min-width: 1100px;\n  margin: 0;\n  overflow-x: auto;\n  color: #323233;\n  font-size: 16px;\n  font-family: 'Open Sans', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Helvetica, Segoe UI, Arial, Roboto, 'PingFang SC', 'miui', 'Hiragino Sans GB', 'Microsoft Yahei', sans-serif;\n  background-color: #f7f8fa;\n  -webkit-font-smoothing: antialiased;\n}\np {\n  margin: 0;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 0;\n  font-size: inherit;\n}\nul,\nol {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\na {\n  text-decoration: none;\n}\n.van-doc-row {\n  width: 100%;\n}\n@media (min-width: 1680px) {\n.van-doc-row {\n    width: 1680px;\n    margin: 0 auto;\n}\n}\ncode {\n  position: relative;\n  display: block;\n  padding: 16px 20px;\n  overflow-x: auto;\n  color: #58727e;\n  font-weight: 400;\n  font-size: 14px;\n  font-family: 'Source Code Pro', 'Monaco', 'Inconsolata', monospace;\n  line-height: 26px;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n  -webkit-font-smoothing: auto;\n  background-color: #f8f8f8;\n  border-radius: 20px;\n}\npre {\n  margin: 20px 0 0;\n}\npre + p {\n  margin-top: 20px;\n}\n.hljs {\n  display: block;\n  padding: 0.5em;\n  overflow-x: auto;\n  background: #fff;\n}\n.hljs-subst {\n  color: #58727e;\n}\n.hljs-string,\n.hljs-meta,\n.hljs-symbol,\n.hljs-template-tag,\n.hljs-template-variable,\n.hljs-addition {\n  color: #4fc08d;\n}\n.hljs-comment,\n.hljs-quote {\n  color: #999;\n}\n.hljs-params,\n.hljs-keyword,\n.hljs-attribute {\n  color: #8080ff;\n}\n.hljs-deletion,\n.hljs-variable,\n.hljs-number,\n.hljs-regexp,\n.hljs-literal,\n.hljs-bullet,\n.hljs-link {\n  color: #eb6f6f;\n}\n.hljs-attr,\n.hljs-selector-tag,\n.hljs-title,\n.hljs-section,\n.hljs-built_in,\n.hljs-doctag,\n.hljs-type,\n.hljs-name,\n.hljs-selector-id,\n.hljs-selector-class,\n.hljs-strong {\n  color: #4994df;\n}\n.hljs-emphasis {\n  font-style: italic;\n}\n.van-doc-intro {\n  padding-top: 20px;\n  text-align: center;\n}\n.van-doc-intro p {\n  margin-bottom: 20px;\n}\n",
          '',
        ]),
          (t.Z = o)
      },
      484: (e, t, n) => {
        'use strict'
        var r = n(3645),
          o = n.n(r)()(!1)
        o.push([
          e.id,
          '.van-doc-container {\n  box-sizing: border-box;\n  padding-left: 220px;\n  overflow: hidden;\n}\n.van-doc-container--with-simulator {\n  padding-right: 384px;\n}\n',
          '',
        ]),
          (t.Z = o)
      },
      8570: (e, t, n) => {
        'use strict'
        var r = n(3645),
          o = n.n(r)()(!1)
        o.push([
          e.id,
          ".card {\n  margin-bottom: 24px;\n  padding: 24px;\n  background-color: #fff;\n  border-radius: 20px;\n  box-shadow: 0 8px 12px #ebedf0;\n}\n.card > p a,\n.card > ul a,\n.card > table a,\n.card > blockquote a {\n  margin: 0 1px;\n  color: #1989fa;\n  -webkit-font-smoothing: auto;\n}\n.card > p a:hover,\n.card > ul a:hover,\n.card > table a:hover,\n.card > blockquote a:hover {\n  color: #0570db;\n}\n.card > p a:active,\n.card > ul a:active,\n.card > table a:active,\n.card > blockquote a:active {\n  color: #0456a9;\n}\n.card > h3,\n.card > h4,\n.card > h5,\n.card > h6 {\n  color: #323233;\n  font-weight: normal;\n  line-height: 1.5;\n}\n.card > h3[id],\n.card > h4[id],\n.card > h5[id],\n.card > h6[id] {\n  cursor: pointer;\n}\n.card > h3 {\n  margin-bottom: 16px;\n  font-weight: 600;\n  font-size: 19px;\n}\n.card > h4 {\n  margin: 24px 0 12px;\n  font-weight: 600;\n  font-size: 16px;\n}\n.card > h5 {\n  margin: 24px 0 12px;\n  font-weight: 600;\n  font-size: 15px;\n}\n.card > p,\n.card > blockquote p {\n  color: #34495e;\n  font-size: 15px;\n  line-height: 26px;\n}\n.card > p strong,\n.card > blockquote p strong {\n  color: black;\n}\n.card > table {\n  width: 100%;\n  margin-top: 12px;\n  color: #34495e;\n  font-size: 14px;\n  line-height: 1.5;\n  border-collapse: collapse;\n}\n.card > table th {\n  padding: 8px 10px;\n  font-weight: 600;\n  text-align: left;\n}\n.card > table th:first-child {\n  padding-left: 0;\n}\n.card > table th:last-child {\n  padding-right: 0;\n}\n.card > table td {\n  padding: 8px;\n  border-top: 1px solid #f1f4f8;\n}\n.card > table td:first-child {\n  padding-left: 0;\n}\n.card > table td:first-child code {\n  margin: 0;\n  padding: 2px 6px;\n  color: #1989fa;\n  font-weight: 600;\n  font-size: 11px;\n  background-color: rgba(25, 137, 250, 0.1);\n  border-radius: 20px;\n}\n.card > table td:last-child {\n  padding-right: 0;\n}\n.card > table em {\n  display: inline-block;\n  color: #4fc08d;\n  font-size: 14px;\n  font-family: 'Source Code Pro', 'Monaco', 'Inconsolata', monospace;\n  font-style: normal;\n  max-width: 300px;\n  -webkit-font-smoothing: auto;\n}\n.card > ul li,\n.card > ol li {\n  position: relative;\n  margin: 5px 0 5px 10px;\n  padding-left: 15px;\n  color: #34495e;\n  font-size: 15px;\n  line-height: 26px;\n}\n.card > ul li::before,\n.card > ol li::before {\n  position: absolute;\n  top: 0;\n  left: 0;\n  box-sizing: border-box;\n  width: 6px;\n  height: 6px;\n  margin-top: 10px;\n  border: 1px solid #666;\n  border-radius: 50%;\n  content: '';\n}\n.card > hr {\n  margin: 30px 0;\n  border: 0 none;\n  border-top: 1px solid #eee;\n}\n.card > p code,\n.card > ul code,\n.card > ol code,\n.card > table code {\n  display: inline;\n  margin: 0 2px;\n  padding: 2px 5px;\n  font-size: 14px;\n  font-family: inherit;\n  font-weight: 600;\n  word-break: keep-all;\n  background-color: #f7f8fa;\n  border-radius: 4px;\n  -webkit-font-smoothing: antialiased;\n}\n.card > blockquote {\n  margin: 16px 0 0;\n  padding: 16px;\n  background-color: #ecf9ff;\n  border-radius: 20px;\n}\n.card > img,\n.card > p img {\n  width: 100%;\n  margin: 16px 0;\n  border-radius: 20px;\n}\n.van-doc-content {\n  position: relative;\n  flex: 1;\n  padding: 0 0 75px;\n}\n.van-doc-content > section {\n  padding: 24px;\n  overflow: hidden;\n}\n.van-doc-content > section h1,\n.van-doc-content > section h2 {\n  color: #323233;\n  font-weight: normal;\n  line-height: 1.5;\n}\n.van-doc-content > section h1[id],\n.van-doc-content > section h2[id] {\n  cursor: pointer;\n}\n.van-doc-content > section h1 {\n  margin: 0 0 30px;\n  font-size: 30px;\n  cursor: default;\n}\n.van-doc-content > section h2 {\n  margin: 45px 0 20px;\n  font-size: 25px;\n}\n.van-doc-content--changelog strong {\n  display: block;\n  margin: 24px 0 12px;\n  font-weight: 600;\n  font-size: 15px;\n}\n.van-doc-content--changelog h3 + p code {\n  margin: 0;\n}\n.van-doc-content--changelog h3 a {\n  color: inherit;\n  font-size: 20px;\n}\n",
          '',
        ]),
          (t.Z = o)
      },
      8602: (e, t, n) => {
        'use strict'
        var r = n(3645),
          o = n.n(r)()(!1)
        o.push([
          e.id,
          ".demo-playground[data-v-41f5cf44] {\n  background-color: #fff;\n  border: 1px solid #ebedf1;\n  border-radius: 1px;\n  margin: 24px 0;\n}\n.demo-playground.transform[data-v-41f5cf44] {\n  transform: translate(0, 0);\n}\n.demo-playground--previewer[data-v-41f5cf44] {\n  padding: 40px 24px;\n  border-bottom: 1px solid #ebedf1;\n}\n.demo-playground--previewer.compact[data-v-41f5cf44] {\n  padding: 0;\n}\n.demo-playground--code--actions[data-v-41f5cf44] {\n  display: flex;\n  height: 40px;\n  padding: 0 1em;\n  align-items: center;\n}\n.demo-playground--code--actions > a[data-v-41f5cf44]:not(:last-child),\n.demo-playground--code--actions > button[data-v-41f5cf44]:not(:last-child) {\n  margin-right: 8px;\n}\n.demo-playground--code--actions > a[data-v-41f5cf44] {\n  display: flex;\n}\n.demo-playground--code--actions button[data-v-41f5cf44] {\n  position: relative;\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n  padding: 0;\n  border: 0;\n  box-sizing: border-box;\n  cursor: pointer;\n  opacity: 0.6;\n  outline: none;\n  transition: opacity 0.2s, background 0.2s;\n}\n.demo-playground--code--actions button[data-v-41f5cf44]::after {\n  content: '';\n  position: absolute;\n  top: -8px;\n  left: -8px;\n  right: -8px;\n  bottom: -8px;\n}\n.demo-playground--code--actions button[data-v-41f5cf44]:hover {\n  opacity: 0.8;\n}\n.demo-playground--code--actions button[data-v-41f5cf44]:active {\n  opacity: 0.9;\n}\n.demo-playground--code--actions button[data-v-41f5cf44]:disabled {\n  opacity: 0.2;\n  cursor: not-allowed;\n}\n.demo-playground--code--actions button[role='codesandbox'][data-v-41f5cf44] {\n  background-position: -18px 0;\n}\n.demo-playground--code--actions button[role='codepen'][data-v-41f5cf44] {\n  background-position: -36px 0;\n}\n.demo-playground--code--actions button[role='source'][data-v-41f5cf44] {\n  background-position: -72px 0;\n}\n.demo-playground--code--actions button[role='change-jsx'][data-v-41f5cf44] {\n  background-position: -90px 0;\n}\n.demo-playground--code--actions button[role='change-tsx'][data-v-41f5cf44] {\n  background-position: -108px 0;\n}\n.demo-playground--code--actions button[role='open-demo'][data-v-41f5cf44] {\n  background-position: -126px 0;\n}\n.demo-playground--code--actions button[role='motions'][data-v-41f5cf44] {\n  background-position: -162px 0;\n}\n.demo-playground--code--actions button[role='sketch-component'][data-v-41f5cf44] {\n  background-position: -182px 0;\n}\n.demo-playground--code--actions button[role='sketch-group'][data-v-41f5cf44] {\n  background-position: -200px 0;\n}\n.demo-playground--code--actions button[role='copy'][data-status='ready'][data-v-41f5cf44] {\n  background-position: -54px 0;\n}\n.demo-playground--code--actions button[role='copy'][data-status='copied'][data-v-41f5cf44] {\n  pointer-events: none;\n  background-position: -54px -16px;\n}\n.demo-playground--code--actions button[role='refresh'][data-v-41f5cf44] {\n  background-position-x: -144px;\n}\n.demo-playground--code--actions > span[data-v-41f5cf44] {\n  flex: 1;\n  display: inline-block;\n}\n.demo-playground--code--content[data-v-41f5cf44] {\n  border-top: 1px dashed #ebedf1;\n}\n.demo-playground--code--content[data-v-41f5cf44] pre {\n  margin: 0;\n}\n.demo-playground--code--content[data-v-41f5cf44] .language-html {\n  border-radius: 0;\n}\n.action-icon[data-v-41f5cf44] {\n  background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAcwAAAA8CAMAAADc4HoZAAABFFBMVEUAAABGT2VGTmZaYXpCvGtIUGg3tGBGTmU3s2A/tmFKUGxFTmRFTWVQWmxFTWRJUGZFTWRGTmRLWWpFTWRGTmVGTmVLVG1FTmRGTWVHTmVFTWRHUGdFTWRGT2ZFTWVGTmU6t2I7xHA3tF9GTWRIT2dFTmRGTmVFTWQ3s2BFTWRGTmVGTmZKUmVFTWRFTWRGTWRGTmVcXHxFTmVFTmVGTmVFTWRIUGdGTWVNU3FGT2ZGTmVHTmVFTWRFTWVFTmVITWRHUGZFTWVFTmRGTmZGTmVFTWVLU2g4tF83tGBFTWQ3s1/LzdT09faoq7Zwdoieoq58gpLj5OeCh5fq6+2/wsmTmKWQlKJfZnpIUGfU1tu0t8BOVWynlyFSAAAASXRSTlMAkoAHEkDQ/dgYFuf0C8gj+KQQmm1oEuyNWNg53kSXfCYI5tEtzq7ivbOgTBy924R1BfHUibcpYw1JcU7v+7E3Nav6XVPDGraPqQuKawAACh1JREFUeNrsm2lT6kgUhg9QFFUkgWDYZfnAVsi+KQJeQdGqt1xm7jZ3lv//PyYdhe7QWQw1zP0w83xQsY9Um4fTp7vToeBczmaX5MN5rXZO/+NGJzGuLejnkw3dADehLHkQyceAWD5C/0my9XqWPLlCK9WHQScirUMk18g7J9ZosYLFajFyT8siLIpuyQkHKBDw4NgYsnDr0Xybaii60rjYzsmdbrqnw0TvpbvkhjYuzinygDXJXLewR2/O/f73w1cWCUj0LkmiU8SeYsc9LXMZIJNjyXkqmbWQCzV8ICawzLO8jh3q4IyciYfugMnMMGYT4C4UJ2fOEbbSc0EyrVp4T/7u4kiZs6jANjwBxkupWMLG7NIlLZvxM+As3nRLTsD/N5xtekmHIEQuhBAoBuREtmaXWVgB41Smc97JbMZA7pqcKKgopbu7FC1BLUgD22MyeVnPWD0bonLLeCQRhIkzQNnz6gHiK0HmxeF4qkKPSsVygh2x2q50SmlZIGIyiQo8OY+XGVExOLVM2WVRbAkDSma0609aQaxKMgOo6YjQ77Tc8d3laxPRxS7R564yI8WSFkymgUNuJqlbomQLisblpnNAf0nrB1j06rTsA7n0SE5L2skkh+Qcm2CP3vGV2QHWp5Ypu4wDosumRpyzNrBwcFmqk4166dBmrFgJ5aeDKhvSklWLBLokgBhcaF3bFL59lV45EQsR3QLVfV0uAuNFhEy2JaC/fcveMVC8ltKSy3RITtjRl34yDSj0r8rMNkyXQksByJOdCmIdslNAKS7V0BIKdpmGQ1+S9slA2IVa60My89HoRKyZ5XTD8rhBX1DwEN85Gw53drIsT6W0FGTKyYmYtgcI427rI1NB5bQyZZeTuNCSXaEpBX2Cotm9qWqdJOqqajN85y8zTC6E8SGZGalmjja4uaQC0OUy0UzSAckNTKS0FGTKyYmYbfQP42brcFGr/X5+N/XDNVG+36+eXCZ3Kbbkbd644cHBW6bpnTlx0vZO6PL0NI/LE8uksxtUqQ7sUgpoAfp0TgLzqQ4oAFkkeFqadCwFxJMz4SKTwogVpIsaBtrv+qdQzZ8ibSB8cpncJW+Z68iQTBq5EXG6N6UIvTHVr2hPpHTX9ZY5Rf0ImfIEyEMmFWHQmk89gHKhBShCP68UoHVfFtZnqV0yahWYVLTdJyMFwE0ms8l+cnFJfWyIuM2TyuQuecsW4xFJMMcd0S1PzBRQGdkaOKosc4DKYn1amSM2rb4H5lwmaVUVqEXJItoA1LBGokwoHWKUS0AqBZTKxOgocJXJl74uLi+Be+I2TyuTu+SkkCInmrZS3kNXkMnnF9RFT5Qpv1cVJkYwmRzxlavMIRClmTgBYmIeU1bpfC+WqS6RKPOKOTxjaWlZXSpWcp4xq1dBZIaBTxH+v95kySLyCQifSCZ3WYuTnYbDKNvpnVMVPUpulvSGPiFRJlq39M5E95bZNYZXD1icTOaoHophQ1EgLcpkrBOsdLJimbglsstMzpnGxZtSE0vjwlKalGVyuEzZJSXQIxJs2kVVDJOLC6NKVK/0jLWrzEzPYB/G6SxV9pJZq2XlyXSHDqlAjW5XjaSCzfsfom2XiX3hbEN4y3G/r64agy7ZifRrXOa6wmMkmT7YZfbwTuPsUoGi2WUyWOlkxZJIkskGWD7YkpWcb4NtAJlVm8tHYEF2m6KofW/pXLe2INxkTs0QeszB5N5rmJVckg55RzI+gTpEToFySRZ1GAcy94lg8AmOtmtSh2QnNebrTCnmWJlzHRatYeRegbomWSZpU2Cq0UdkdgLKlBMzA2EZNpJkmnmZQ9EwqtSDMijqGU+ZeeSqD/pCkikhZ6ZsU8cNc+kuc3EoU0tgT4hE5q3ELgZCTIBh1nECVAWm0fMs3daA8bV4wUN7f0nhAkdCgkztnx9mZ5iQ+zDLSLxdx5bZFK+Tp8wZDNLqFEAmr5myzRh36TfM8obXX01eAeyaqT4LhYvouMccLzNSRIlZmwGzLnGskVWWWWhBmgBZlXPpOwHieEyA5joGsktZJvumXBN5yzSQW/puGhy2XGBDTjZbWDGXLhMgRZ4ArQF8f375+vnP5y/gFawKYHzlEuOzNPGRSVFgSkT37LcCYDSidpnnCUCQaTmUlyaW1QAyxaVJAVjLLmWZViQSUW+Z9RsWE1DmFuMIOZAddIMtTSrA69PTy/dfXr798QMo7GVmzjXyijleJqVwV7d6t4rL2+NlUeY5GE6bBnNp0yCQTG4zBYVIWGa6y6SMCmDoKZOuFQDVYDI1FWlyJtimQR8/vv76/O319enrl89/wdjLZEnsFeO/nee6NImv8MAW6zpSssylKLMMxrHbebJM2eZohYrkUpL5HhKfqohdesokbZED1oFk0gC5M/Kje+e7nafi9fnl8y8mn1+ef6AtyXSNOV4mZd4q7wAo+8s8fqOdA7httJd3Hwlpo12WeUZUv0PaVWaCuTSVqxgGkznPYTYiP/w32lfAr0+/fAF+++2PV6ApyvSK8ZcpL034LbAWclm2kEU/4i8z8C0wf5mcENQIcTxkJnuTOMV1ZBxkniceqYkmnRmtR4ooQWVSJwbD16b/LbAGTEffnvD705NpC3lZphxzrEwbYVZg2Dd+c9pZZpCb08FltrChj8nsAGpiDD0py9RWUIvAkFWOuwcFuA0ok4bALCuKswQFvTk9gMnL85fvz99h0ttsmp8+tdt9LlOKuXC5OS1fOa42c3jUUrW6sIGetB8bwVCUuUCgYyPBZa6B+w/KpHsVgOq4adBhTQ8RonIOwE3ACRBjGMNquJ/ODcc9YgQ8NtJVYfLn568vMImtVrmcoiitVmLuFON6bMRfpiOPY/QOD3T16juZ9V6AA10+MhkkE0Ys6yuzXFgTY35fzTw6L03iV8MOMbTt8CpJwWVa02C9PSyUt8NPKtBK0hEHuoYAzAH0G0z0c+IEjIGALDMfdeYCuD88ahmrxJnMuBE77qilLHPkKnOZlhLz9CcNnFu06hg7lLBGRx21DMHkr9+ZJ6HFKya4TC9atIOf6woBIX6SK8AhaM8D0D//ELR3ryLXlV4xV0qElhEiz0PQbcNoOx+CvlJgIT6H4xUTHCMGd1LE4aVTKpa+jyf4y/z5jycE7lXwxxO0gtFu5svECRrz/4NDf7dvxjYQwzAMdGEE8RaWq2ySh/cf6OGoyQCRANLkBHenWqnzxyGU6aVP0zRN0zTtmzUru64ZWZ923kC0n6tT9WnnnL+y5R51pj6L9ahlx7k6UR8kVt2Sh1W35GHVLXlYdUseVt2Sh1W3fK8aDmuSOmyfelyGwpqkjtvnnvMyENYcdeA+fSxaDNYUdeg+TovBmqAO3sdpMVjD1eH7OC0Ga7A6QR+nxWANVafo47QYrIHqJH0eWhDWMHWaPosWhTVInahPHzisIepUffrAYQ1QJ+vTgVgD1IP6/AHM0QJdY511NAAAAABJRU5ErkJggg==') no-repeat 0 0/230px auto;\n}\n",
          '',
        ]),
          (t.Z = o)
      },
      6399: (e, t, n) => {
        'use strict'
        var r = n(3645),
          o = n.n(r)()(!1)
        o.push([
          e.id,
          ".van-doc-header {\n  width: 100%;\n  background-color: #001938;\n  -webkit-user-select: none;\n          user-select: none;\n}\n.van-doc-header__top {\n  display: flex;\n  align-items: center;\n  height: 64px;\n  padding: 0 24px;\n}\n.van-doc-header__top-nav {\n  flex: 1;\n  font-size: 0;\n  text-align: right;\n}\n.van-doc-header__top-nav > li {\n  position: relative;\n  display: inline-block;\n  vertical-align: middle;\n}\n.van-doc-header__top-nav-item {\n  margin-left: 16px;\n}\n.van-doc-header__top-nav-title {\n  display: block;\n  font-size: 15px;\n}\n.van-doc-header__cube {\n  position: relative;\n  display: block;\n  padding: 0 12px;\n  color: #001938;\n  background: #f7f8fa;\n  font-size: 14px;\n  line-height: 30px;\n  text-align: center;\n  border: 1px solid rgba(255, 255, 255, 0.7);\n  border-radius: 20px;\n  cursor: pointer;\n  transition: 0.3s ease-in-out;\n}\n.van-doc-header__version {\n  padding-right: 20px;\n}\n.van-doc-header__version::after {\n  position: absolute;\n  top: 10px;\n  right: 9px;\n  width: 5px;\n  height: 5px;\n  color: #001938;\n  border: 1px solid;\n  border-color: transparent transparent currentColor currentColor;\n  transform: rotate(-45deg);\n  content: '';\n}\n.van-doc-header__version-pop {\n  position: absolute;\n  top: 34px;\n  left: 0;\n  width: 100%;\n  z-index: 99;\n  color: #333;\n  line-height: 36px;\n  text-align: left;\n  overflow: hidden;\n  background-color: #fff;\n  border-radius: 8px;\n  box-shadow: 0 4px 12px #ebedf0;\n  transform-origin: top;\n  transition: 0.2s cubic-bezier(0.215, 0.61, 0.355, 1);\n}\n.van-doc-header__version-pop-item {\n  padding-left: 12px;\n  transition: 0.2s;\n}\n.van-doc-header__version-pop-item:hover {\n  color: #1989fa;\n  background-color: #f7f8fa;\n}\n.van-doc-header__logo {\n  display: block;\n}\n.van-doc-header__logo img,\n.van-doc-header__logo span {\n  display: inline-block;\n  vertical-align: middle;\n}\n.van-doc-header__logo img {\n  width: 28px;\n  margin-right: 12px;\n}\n.van-doc-header__logo span {\n  color: #fff;\n  font-size: 22px;\n}\n.van-doc-header__link span {\n  color: #fff;\n  font-size: 16px;\n}\n.van-doc-header__link img {\n  display: block;\n  width: 30px;\n  height: 30px;\n  transition: 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n.van-doc-header__link img:hover {\n  transform: scale(1.2);\n}\n.van-doc-dropdown-enter,\n.van-doc-dropdown-leave-active {\n  transform: scaleY(0);\n  opacity: 0;\n}\n",
          '',
        ]),
          (t.Z = o)
      },
      1654: (e, t, n) => {
        'use strict'
        var r = n(3645),
          o = n.n(r)()(!1)
        o.push([
          e.id,
          '.van-doc-nav {\n  position: fixed;\n  left: 0;\n  z-index: 1;\n  min-width: 220px;\n  max-width: 220px;\n  padding: 24px 0;\n  overflow-y: scroll;\n  background-color: #fff;\n  box-shadow: 0 8px 12px #ebedf0;\n}\n@media (min-width: 1680px) {\n.van-doc-nav {\n    left: 50%;\n    margin-left: -840px;\n}\n}\n.van-doc-nav::-webkit-scrollbar {\n  width: 6px;\n  height: 6px;\n  background-color: transparent;\n}\n.van-doc-nav::-webkit-scrollbar-thumb {\n  background-color: transparent;\n  border-radius: 6px;\n}\n.van-doc-nav:hover::-webkit-scrollbar-thumb {\n  background-color: rgba(69, 90, 100, 0.2);\n}\n.van-doc-nav__group {\n  margin-bottom: 16px;\n  padding-left: 6px;\n}\n.van-doc-nav__title {\n  padding: 8px 0 8px 24px;\n  color: #455a64;\n  font-weight: 600;\n  font-size: 15px;\n  line-height: 28px;\n}\n.van-doc-nav__item a {\n  display: block;\n  margin: 8px 0;\n  padding: 8px 0 8px 24px;\n  color: #455a64;\n  font-size: 14px;\n  line-height: 20px;\n  transition: color 0.2s;\n}\n.van-doc-nav__item a:hover,\n.van-doc-nav__item a.active {\n  color: #4fc08d;\n}\n.van-doc-nav__item a.active {\n  font-weight: 600;\n  background-color: #ebfff0;\n  border-radius: 999px;\n}\n.van-doc-nav__item a span {\n  font-size: 13px;\n}\n@media (max-width: 1300px) {\n.van-doc-nav__item a {\n    font-size: 13px;\n}\n.van-doc-nav__item:active {\n    font-size: 14px;\n}\n}\n',
          '',
        ]),
          (t.Z = o)
      },
      7361: (e, t, n) => {
        'use strict'
        var r = n(3645),
          o = n.n(r)()(!1)
        o.push([
          e.id,
          '#docsearch {\n  display: inline-block;\n  vertical-align: middle;\n}\n.DocSearch-Button {\n  height: 32px;\n  background: #f7f8fa;\n}\n.DocSearch-Button:hover {\n  box-shadow: none;\n}\n.DocSearch-Search-Icon {\n  width: 18px;\n  height: 18px;\n}\n.DocSearch-Button-Key {\n  font-size: 12px;\n}\n',
          '',
        ]),
          (t.Z = o)
      },
      7241: (e, t, n) => {
        'use strict'
        var r = n(3645),
          o = n.n(r)()(!1)
        o.push([
          e.id,
          '.van-doc-simulator {\n  position: absolute;\n  top: 88px;\n  right: 24px;\n  z-index: 1;\n  box-sizing: border-box;\n  width: 360px;\n  min-width: 360px;\n  overflow: hidden;\n  background: #fafafa;\n  border-radius: 20px;\n  box-shadow: 0 8px 12px #ebedf0;\n}\n@media (max-width: 1100px) {\n.van-doc-simulator {\n    right: auto;\n    left: 750px;\n}\n}\n@media (min-width: 1680px) {\n.van-doc-simulator {\n    right: 50%;\n    margin-right: -816px;\n}\n}\n.van-doc-simulator-fixed {\n  position: fixed;\n  top: 24px;\n}\n.van-doc-simulator iframe {\n  display: block;\n  width: 100%;\n}\n',
          '',
        ]),
          (t.Z = o)
      },
      4184: (e, t, n) => {
        'use strict'
        var r = n(3645),
          o = n.n(r)()(!1)
        o.push([e.id, '', '']), (t.Z = o)
      },
    },
    n = {}
  function r(e) {
    var o = n[e]
    if (void 0 !== o) return o.exports
    var a = (n[e] = { id: e, exports: {} })
    return t[e](a, a.exports, r), a.exports
  }
  ;(r.m = t),
    (e = []),
    (r.O = (t, n, o, a) => {
      if (!n) {
        var i = 1 / 0
        for (u = 0; u < e.length; u++) {
          for (var [n, o, a] = e[u], c = !0, l = 0; l < n.length; l++)
            (!1 & a || i >= a) && Object.keys(r.O).every((e) => r.O[e](n[l]))
              ? n.splice(l--, 1)
              : ((c = !1), a < i && (i = a))
          if (c) {
            e.splice(u--, 1)
            var s = o()
            void 0 !== s && (t = s)
          }
        }
        return t
      }
      a = a || 0
      for (var u = e.length; u > 0 && e[u - 1][2] > a; u--) e[u] = e[u - 1]
      e[u] = [n, o, a]
    }),
    (r.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e
      return r.d(t, { a: t }), t
    }),
    (r.d = (e, t) => {
      for (var n in t)
        r.o(t, n) &&
          !r.o(e, n) &&
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] })
    }),
    (r.g = (function () {
      if ('object' == typeof globalThis) return globalThis
      try {
        return this || new Function('return this')()
      } catch (e) {
        if ('object' == typeof window) return window
      }
    })()),
    (r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      var e = { 87: 0 }
      r.O.j = (t) => 0 === e[t]
      var t = (t, n) => {
          var o,
            a,
            [i, c, l] = n,
            s = 0
          if (i.some((t) => 0 !== e[t])) {
            for (o in c) r.o(c, o) && (r.m[o] = c[o])
            if (l) var u = l(r)
          }
          for (t && t(n); s < i.length; s++)
            (a = i[s]), r.o(e, a) && e[a] && e[a][0](), (e[a] = 0)
          return r.O(u)
        },
        n = (self.webpackChunkvantui_doc = self.webpackChunkvantui_doc || [])
      n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)))
    })()
  var o = r.O(void 0, [962], () => r(3912))
  o = r.O(o)
})()
