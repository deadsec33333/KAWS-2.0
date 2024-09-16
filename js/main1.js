(function(ht) {
    typeof define == "function" && define.amd ? define(ht) : ht()
}
)(function() {
    "use strict";
    /*!
 * matrix 3.10.4
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
    var ht, ui, on, bi, Wi, Cr, wr, Hi, gt = "transform", un = gt + "Origin", Qn, Zn = function(e) {
        var i = e.ownerDocument || e;
        for (!(gt in e.style) && ("msTransform"in e.style) && (gt = "msTransform",
        un = gt + "Origin"); i.parentNode && (i = i.parentNode); )
            ;
        if (ui = window,
        wr = new si,
        i) {
            ht = i,
            on = i.documentElement,
            bi = i.body,
            Hi = ht.createElementNS("http://www.w3.org/2000/svg", "g"),
            Hi.style.transform = "none";
            var t = i.createElement("div")
              , r = i.createElement("div");
            bi.appendChild(t),
            t.appendChild(r),
            t.style.position = "static",
            t.style[gt] = "translate3d(0,0,1px)",
            Qn = r.offsetParent !== t,
            bi.removeChild(t)
        }
        return i
    }, Yu = function(e) {
        for (var i, t; e && e !== bi; )
            t = e._gsap,
            t && t.uncache && t.get(e, "x"),
            t && !t.scaleX && !t.scaleY && t.renderTransform && (t.scaleX = t.scaleY = 1e-4,
            t.renderTransform(1, t),
            i ? i.push(t) : i = [t]),
            e = e.parentNode;
        return i
    }, Jn = [], eo = [], Xu = function() {
        return ui.pageYOffset || ht.scrollTop || on.scrollTop || bi.scrollTop || 0
    }, zu = function() {
        return ui.pageXOffset || ht.scrollLeft || on.scrollLeft || bi.scrollLeft || 0
    }, sn = function(e) {
        return e.ownerSVGElement || ((e.tagName + "").toLowerCase() === "svg" ? e : null)
    }, Wu = function s(e) {
        if (ui.getComputedStyle(e).position === "fixed")
            return !0;
        if (e = e.parentNode,
        e && e.nodeType === 1)
            return s(e)
    }, an = function s(e, i) {
        if (e.parentNode && (ht || Zn(e))) {
            var t = sn(e)
              , r = t ? t.getAttribute("xmlns") || "http://www.w3.org/2000/svg" : "http://www.w3.org/1999/xhtml"
              , o = t ? i ? "rect" : "g" : "div"
              , a = i !== 2 ? 0 : 100
              , u = i === 3 ? 100 : 0
              , l = "position:absolute;display:block;pointer-events:none;margin:0;padding:0;"
              , d = ht.createElementNS ? ht.createElementNS(r.replace(/^https/, "http"), o) : ht.createElement(o);
            return i && (t ? (Cr || (Cr = s(e)),
            d.setAttribute("width", .01),
            d.setAttribute("height", .01),
            d.setAttribute("transform", "translate(" + a + "," + u + ")"),
            Cr.appendChild(d)) : (Wi || (Wi = s(e),
            Wi.style.cssText = l),
            d.style.cssText = l + "width:0.1px;height:0.1px;top:" + u + "px;left:" + a + "px",
            Wi.appendChild(d))),
            d
        }
        throw "Need document and parent."
    }, Hu = function(e) {
        for (var i = new si, t = 0; t < e.numberOfItems; t++)
            i.multiply(e.getItem(t).matrix);
        return i
    }, Vu = function(e) {
        var i = e.getCTM(), t;
        return i || (t = e.style[gt],
        e.style[gt] = "none",
        e.appendChild(Hi),
        i = Hi.getCTM(),
        e.removeChild(Hi),
        t ? e.style[gt] = t : e.style.removeProperty(gt.replace(/([A-Z])/g, "-$1").toLowerCase())),
        i || wr.clone()
    }, Gu = function(e, i) {
        var t = sn(e), r = e === t, o = t ? Jn : eo, a = e.parentNode, u, l, d, y, c, _;
        if (e === ui)
            return e;
        if (o.length || o.push(an(e, 1), an(e, 2), an(e, 3)),
        u = t ? Cr : Wi,
        t)
            r ? (d = Vu(e),
            y = -d.e / d.a,
            c = -d.f / d.d,
            l = wr) : e.getBBox ? (d = e.getBBox(),
            l = e.transform ? e.transform.baseVal : {},
            l = l.numberOfItems ? l.numberOfItems > 1 ? Hu(l) : l.getItem(0).matrix : wr,
            y = l.a * d.x + l.c * d.y,
            c = l.b * d.x + l.d * d.y) : (l = new si,
            y = c = 0),
            i && e.tagName.toLowerCase() === "g" && (y = c = 0),
            (r ? t : a).appendChild(u),
            u.setAttribute("transform", "matrix(" + l.a + "," + l.b + "," + l.c + "," + l.d + "," + (l.e + y) + "," + (l.f + c) + ")");
        else {
            if (y = c = 0,
            Qn)
                for (l = e.offsetParent,
                d = e; d && (d = d.parentNode) && d !== l && d.parentNode; )
                    (ui.getComputedStyle(d)[gt] + "").length > 4 && (y = d.offsetLeft,
                    c = d.offsetTop,
                    d = 0);
            if (_ = ui.getComputedStyle(e),
            _.position !== "absolute" && _.position !== "fixed")
                for (l = e.offsetParent; a && a !== l; )
                    y += a.scrollLeft || 0,
                    c += a.scrollTop || 0,
                    a = a.parentNode;
            d = u.style,
            d.top = e.offsetTop - c + "px",
            d.left = e.offsetLeft - y + "px",
            d[gt] = _[gt],
            d[un] = _[un],
            d.position = _.position === "fixed" ? "fixed" : "absolute",
            e.parentNode.appendChild(u)
        }
        return u
    }, ln = function(e, i, t, r, o, a, u) {
        return e.a = i,
        e.b = t,
        e.c = r,
        e.d = o,
        e.e = a,
        e.f = u,
        e
    }, si = function() {
        function s(i, t, r, o, a, u) {
            i === void 0 && (i = 1),
            t === void 0 && (t = 0),
            r === void 0 && (r = 0),
            o === void 0 && (o = 1),
            a === void 0 && (a = 0),
            u === void 0 && (u = 0),
            ln(this, i, t, r, o, a, u)
        }
        var e = s.prototype;
        return e.inverse = function() {
            var t = this.a
              , r = this.b
              , o = this.c
              , a = this.d
              , u = this.e
              , l = this.f
              , d = t * a - r * o || 1e-10;
            return ln(this, a / d, -r / d, -o / d, t / d, (o * l - a * u) / d, -(t * l - r * u) / d)
        }
        ,
        e.multiply = function(t) {
            var r = this.a
              , o = this.b
              , a = this.c
              , u = this.d
              , l = this.e
              , d = this.f
              , y = t.a
              , c = t.c
              , _ = t.b
              , n = t.d
              , g = t.e
              , C = t.f;
            return ln(this, y * r + _ * a, y * o + _ * u, c * r + n * a, c * o + n * u, l + g * r + C * a, d + g * o + C * u)
        }
        ,
        e.clone = function() {
            return new s(this.a,this.b,this.c,this.d,this.e,this.f)
        }
        ,
        e.equals = function(t) {
            var r = this.a
              , o = this.b
              , a = this.c
              , u = this.d
              , l = this.e
              , d = this.f;
            return r === t.a && o === t.b && a === t.c && u === t.d && l === t.e && d === t.f
        }
        ,
        e.apply = function(t, r) {
            r === void 0 && (r = {});
            var o = t.x
              , a = t.y
              , u = this.a
              , l = this.b
              , d = this.c
              , y = this.d
              , c = this.e
              , _ = this.f;
            return r.x = o * u + a * d + c || 0,
            r.y = o * l + a * y + _ || 0,
            r
        }
        ,
        s
    }();
    function ai(s, e, i, t) {
        if (!s || !s.parentNode || (ht || Zn(s)).documentElement === s)
            return new si;
        var r = Yu(s)
          , o = sn(s)
          , a = o ? Jn : eo
          , u = Gu(s, i)
          , l = a[0].getBoundingClientRect()
          , d = a[1].getBoundingClientRect()
          , y = a[2].getBoundingClientRect()
          , c = u.parentNode
          , _ = !t && Wu(s)
          , n = new si((d.left - l.left) / 100,(d.top - l.top) / 100,(y.left - l.left) / 100,(y.top - l.top) / 100,l.left + (_ ? 0 : zu()),l.top + (_ ? 0 : Xu()));
        if (c.removeChild(u),
        r)
            for (l = r.length; l--; )
                d = r[l],
                d.scaleX = d.scaleY = 0,
                d.renderTransform(1, d);
        return e ? n.inverse() : n
    }
    function qu(s) {
        if (s === void 0)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return s
    }
    function Uu(s, e) {
        s.prototype = Object.create(e.prototype),
        s.prototype.constructor = s,
        s.__proto__ = e
    }
    var _e, be, dt, vt, Xt, cn, zt, fn, Vi, Qt, to, dn, Gi, Fr, pn, qi, Tt, Ui, br, io = function() {
        return typeof window != "undefined"
    }, ro = function() {
        return _e || io() && (_e = window.gsap) && _e.registerPlugin && _e
    }, Zt = function(e) {
        return typeof e == "function"
    }, ji = function(e) {
        return typeof e == "object"
    }, St = function(e) {
        return typeof e == "undefined"
    }, vr = function() {
        return !1
    }, Ki = "transform", Dn = "transformOrigin", Jt = function(e) {
        return Math.round(e * 1e4) / 1e4
    }, Qi = Array.isArray, Tr = function(e, i) {
        var t = dt.createElementNS ? dt.createElementNS((i || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : dt.createElement(e);
        return t.style ? t : dt.createElement(e)
    }, no = 180 / Math.PI, li = 1e20, ju = new si, ei = Date.now || function() {
        return new Date().getTime()
    }
    , ci = [], vi = {}, Ku = 0, Qu = /^(?:a|input|textarea|button|select)$/i, oo = 0, Ti = {}, Wt = {}, uo = function(e, i) {
        var t = {}, r;
        for (r in e)
            t[r] = i ? e[r] * i : e[r];
        return t
    }, Zu = function(e, i) {
        for (var t in i)
            t in e || (e[t] = i[t]);
        return e
    }, so = function s(e, i) {
        for (var t = e.length, r; t--; )
            i ? e[t].style.touchAction = i : e[t].style.removeProperty("touch-action"),
            r = e[t].children,
            r && r.length && s(r, i)
    }, ao = function() {
        return ci.forEach(function(e) {
            return e()
        })
    }, Ju = function(e) {
        ci.push(e),
        ci.length === 1 && _e.ticker.add(ao)
    }, lo = function() {
        return !ci.length && _e.ticker.remove(ao)
    }, co = function(e) {
        for (var i = ci.length; i--; )
            ci[i] === e && ci.splice(i, 1);
        _e.to(lo, {
            overwrite: !0,
            delay: 15,
            duration: 0,
            onComplete: lo,
            data: "_draggable"
        })
    }, es = function(e, i) {
        for (var t in i)
            t in e || (e[t] = i[t]);
        return e
    }, He = function(e, i, t, r) {
        if (e.addEventListener) {
            var o = Gi[i];
            r = r || (to ? {
                passive: !1
            } : null),
            e.addEventListener(o || i, t, r),
            o && i !== o && e.addEventListener(i, t, r)
        }
    }, Ye = function(e, i, t) {
        if (e.removeEventListener) {
            var r = Gi[i];
            e.removeEventListener(r || i, t),
            r && i !== r && e.removeEventListener(i, t)
        }
    }, _t = function(e) {
        e.preventDefault && e.preventDefault(),
        e.preventManipulation && e.preventManipulation()
    }, ts = function(e, i) {
        for (var t = e.length; t--; )
            if (e[t].identifier === i)
                return !0
    }, is = function s(e) {
        pn = e.touches && Fr < e.touches.length,
        Ye(e.target, "touchend", s)
    }, fo = function(e) {
        pn = e.touches && Fr < e.touches.length,
        He(e.target, "touchend", is)
    }, Si = function(e) {
        return be.pageYOffset || e.scrollTop || e.documentElement.scrollTop || e.body.scrollTop || 0
    }, ki = function(e) {
        return be.pageXOffset || e.scrollLeft || e.documentElement.scrollLeft || e.body.scrollLeft || 0
    }, po = function s(e, i) {
        He(e, "scroll", i),
        Oi(e.parentNode) || s(e.parentNode, i)
    }, Do = function s(e, i) {
        Ye(e, "scroll", i),
        Oi(e.parentNode) || s(e.parentNode, i)
    }, Oi = function(e) {
        return !e || e === vt || e.nodeType === 9 || e === dt.body || e === be || !e.nodeType || !e.parentNode
    }, ho = function(e, i) {
        var t = i === "x" ? "Width" : "Height"
          , r = "scroll" + t
          , o = "client" + t;
        return Math.max(0, Oi(e) ? Math.max(vt[r], Xt[r]) - (be["inner" + t] || vt[o] || Xt[o]) : e[r] - e[o])
    }, hn = function s(e, i) {
        var t = ho(e, "x")
          , r = ho(e, "y");
        Oi(e) ? e = Wt : s(e.parentNode, i),
        e._gsMaxScrollX = t,
        e._gsMaxScrollY = r,
        i || (e._gsScrollX = e.scrollLeft || 0,
        e._gsScrollY = e.scrollTop || 0)
    }, gn = function(e, i, t) {
        var r = e.style;
        !r || (St(r[i]) && (i = Vi(i, e) || i),
        t == null ? r.removeProperty && r.removeProperty(i.replace(/([A-Z])/g, "-$1").toLowerCase()) : r[i] = t)
    }, Zi = function(e) {
        return be.getComputedStyle(e instanceof Element ? e : e.host || (e.parentNode || {}).host || e)
    }, fi = {}, Ai = function(e) {
        if (e === be)
            return fi.left = fi.top = 0,
            fi.width = fi.right = vt.clientWidth || e.innerWidth || Xt.clientWidth || 0,
            fi.height = fi.bottom = (e.innerHeight || 0) - 20 < vt.clientHeight ? vt.clientHeight : e.innerHeight || Xt.clientHeight || 0,
            fi;
        var i = e.ownerDocument || dt
          , t = St(e.pageX) ? !e.nodeType && !St(e.left) && !St(e.top) ? e : Qt(e)[0].getBoundingClientRect() : {
            left: e.pageX - ki(i),
            top: e.pageY - Si(i),
            right: e.pageX - ki(i) + 1,
            bottom: e.pageY - Si(i) + 1
        };
        return St(t.right) && !St(t.width) ? (t.right = t.left + t.width,
        t.bottom = t.top + t.height) : St(t.width) && (t = {
            width: t.right - t.left,
            height: t.bottom - t.top,
            right: t.right,
            left: t.left,
            bottom: t.bottom,
            top: t.top
        }),
        t
    }, Le = function(e, i, t) {
        var r = e.vars, o = r[t], a = e._listeners[i], u;
        return Zt(o) && (u = o.apply(r.callbackScope || e, r[t + "Params"] || [e.pointerEvent])),
        a && e.dispatchEvent(i) === !1 && (u = !1),
        u
    }, go = function(e, i) {
        var t = Qt(e)[0], r, o, a;
        return !t.nodeType && t !== be ? St(e.left) ? (o = e.min || e.minX || e.minRotation || 0,
        r = e.min || e.minY || 0,
        {
            left: o,
            top: r,
            width: (e.max || e.maxX || e.maxRotation || 0) - o,
            height: (e.max || e.maxY || 0) - r
        }) : (a = {
            x: 0,
            y: 0
        },
        {
            left: e.left - a.x,
            top: e.top - a.y,
            width: e.width,
            height: e.height
        }) : rs(t, i)
    }, xt = {}, rs = function(e, i) {
        i = Qt(i)[0];
        var t = e.getBBox && e.ownerSVGElement, r = e.ownerDocument || dt, o, a, u, l, d, y, c, _, n, g, C, T, k, L;
        if (e === be)
            u = Si(r),
            o = ki(r),
            a = o + (r.documentElement.clientWidth || e.innerWidth || r.body.clientWidth || 0),
            l = u + ((e.innerHeight || 0) - 20 < r.documentElement.clientHeight ? r.documentElement.clientHeight : e.innerHeight || r.body.clientHeight || 0);
        else {
            if (i === be || St(i))
                return e.getBoundingClientRect();
            o = u = 0,
            t ? (g = e.getBBox(),
            C = g.width,
            T = g.height) : (e.viewBox && (g = e.viewBox.baseVal) && (o = g.x || 0,
            u = g.y || 0,
            C = g.width,
            T = g.height),
            C || (k = Zi(e),
            g = k.boxSizing === "border-box",
            C = (parseFloat(k.width) || e.clientWidth || 0) + (g ? 0 : parseFloat(k.borderLeftWidth) + parseFloat(k.borderRightWidth)),
            T = (parseFloat(k.height) || e.clientHeight || 0) + (g ? 0 : parseFloat(k.borderTopWidth) + parseFloat(k.borderBottomWidth)))),
            a = C,
            l = T
        }
        return e === i ? {
            left: o,
            top: u,
            width: a - o,
            height: l - u
        } : (d = ai(i, !0).multiply(ai(e)),
        y = d.apply({
            x: o,
            y: u
        }),
        c = d.apply({
            x: a,
            y: u
        }),
        _ = d.apply({
            x: a,
            y: l
        }),
        n = d.apply({
            x: o,
            y: l
        }),
        o = Math.min(y.x, c.x, _.x, n.x),
        u = Math.min(y.y, c.y, _.y, n.y),
        L = i.parentNode || {},
        {
            left: o + (L.scrollLeft || 0),
            top: u + (L.scrollTop || 0),
            width: Math.max(y.x, c.x, _.x, n.x) - o,
            height: Math.max(y.y, c.y, _.y, n.y) - u
        })
    }, _n = function(e, i, t, r, o, a) {
        var u = {}, l, d, y;
        if (i)
            if (o !== 1 && i instanceof Array) {
                if (u.end = l = [],
                y = i.length,
                ji(i[0]))
                    for (d = 0; d < y; d++)
                        l[d] = uo(i[d], o);
                else
                    for (d = 0; d < y; d++)
                        l[d] = i[d] * o;
                t += 1.1,
                r -= 1.1
            } else
                Zt(i) ? u.end = function(c) {
                    var _ = i.call(e, c), n, g;
                    if (o !== 1)
                        if (ji(_)) {
                            n = {};
                            for (g in _)
                                n[g] = _[g] * o;
                            _ = n
                        } else
                            _ *= o;
                    return _
                }
                : u.end = i;
        return (t || t === 0) && (u.max = t),
        (r || r === 0) && (u.min = r),
        a && (u.velocity = 0),
        u
    }, ns = function s(e) {
        var i;
        return !e || !e.getAttribute || e === Xt ? !1 : (i = e.getAttribute("data-clickable")) === "true" || i !== "false" && (e.onclick || Qu.test(e.nodeName + "") || e.getAttribute("contentEditable") === "true") ? !0 : s(e.parentNode)
    }, Sr = function(e, i) {
        for (var t = e.length, r; t--; )
            r = e[t],
            r.ondragstart = r.onselectstart = i ? null : vr,
            _e.set(r, {
                lazy: !0,
                userSelect: i ? "text" : "none"
            })
    }, os = function s(e) {
        if (Zi(e).position === "fixed")
            return !0;
        if (e = e.parentNode,
        e && e.nodeType === 1)
            return s(e)
    }, _o, xn, us = function(e, i) {
        e = _e.utils.toArray(e)[0],
        i = i || {};
        var t = document.createElement("div"), r = t.style, o = e.firstChild, a = 0, u = 0, l = e.scrollTop, d = e.scrollLeft, y = e.scrollWidth, c = e.scrollHeight, _ = 0, n = 0, g = 0, C, T, k, L, N, X;
        _o && i.force3D !== !1 ? (N = "translate3d(",
        X = "px,0px)") : Ki && (N = "translate(",
        X = "px)"),
        this.scrollTop = function(I, H) {
            if (!arguments.length)
                return -this.top();
            this.top(-I, H)
        }
        ,
        this.scrollLeft = function(I, H) {
            if (!arguments.length)
                return -this.left();
            this.left(-I, H)
        }
        ,
        this.left = function(I, H) {
            if (!arguments.length)
                return -(e.scrollLeft + u);
            var A = e.scrollLeft - d
              , U = u;
            if ((A > 2 || A < -2) && !H) {
                d = e.scrollLeft,
                _e.killTweensOf(this, {
                    left: 1,
                    scrollLeft: 1
                }),
                this.left(-d),
                i.onKill && i.onKill();
                return
            }
            I = -I,
            I < 0 ? (u = I - .5 | 0,
            I = 0) : I > n ? (u = I - n | 0,
            I = n) : u = 0,
            (u || U) && (this._skip || (r[Ki] = N + -u + "px," + -a + X),
            u + _ >= 0 && (r.paddingRight = u + _ + "px")),
            e.scrollLeft = I | 0,
            d = e.scrollLeft
        }
        ,
        this.top = function(I, H) {
            if (!arguments.length)
                return -(e.scrollTop + a);
            var A = e.scrollTop - l
              , U = a;
            if ((A > 2 || A < -2) && !H) {
                l = e.scrollTop,
                _e.killTweensOf(this, {
                    top: 1,
                    scrollTop: 1
                }),
                this.top(-l),
                i.onKill && i.onKill();
                return
            }
            I = -I,
            I < 0 ? (a = I - .5 | 0,
            I = 0) : I > g ? (a = I - g | 0,
            I = g) : a = 0,
            (a || U) && (this._skip || (r[Ki] = N + -u + "px," + -a + X)),
            e.scrollTop = I | 0,
            l = e.scrollTop
        }
        ,
        this.maxScrollTop = function() {
            return g
        }
        ,
        this.maxScrollLeft = function() {
            return n
        }
        ,
        this.disable = function() {
            for (o = t.firstChild; o; )
                L = o.nextSibling,
                e.appendChild(o),
                o = L;
            e === t.parentNode && e.removeChild(t)
        }
        ,
        this.enable = function() {
            if (o = e.firstChild,
            o !== t) {
                for (; o; )
                    L = o.nextSibling,
                    t.appendChild(o),
                    o = L;
                e.appendChild(t),
                this.calibrate()
            }
        }
        ,
        this.calibrate = function(I) {
            var H = e.clientWidth === C, A, U, z;
            l = e.scrollTop,
            d = e.scrollLeft,
            !(H && e.clientHeight === T && t.offsetHeight === k && y === e.scrollWidth && c === e.scrollHeight && !I) && ((a || u) && (U = this.left(),
            z = this.top(),
            this.left(-e.scrollLeft),
            this.top(-e.scrollTop)),
            A = Zi(e),
            (!H || I) && (r.display = "block",
            r.width = "auto",
            r.paddingRight = "0px",
            _ = Math.max(0, e.scrollWidth - e.clientWidth),
            _ && (_ += parseFloat(A.paddingLeft) + (xn ? parseFloat(A.paddingRight) : 0))),
            r.display = "inline-block",
            r.position = "relative",
            r.overflow = "visible",
            r.verticalAlign = "top",
            r.boxSizing = "content-box",
            r.width = "100%",
            r.paddingRight = _ + "px",
            xn && (r.paddingBottom = A.paddingBottom),
            C = e.clientWidth,
            T = e.clientHeight,
            y = e.scrollWidth,
            c = e.scrollHeight,
            n = e.scrollWidth - C,
            g = e.scrollHeight - T,
            k = t.offsetHeight,
            r.display = "block",
            (U || z) && (this.left(U),
            this.top(z)))
        }
        ,
        this.content = t,
        this.element = e,
        this._skip = !1,
        this.enable()
    }, yn = function(e) {
        if (io() && document.body) {
            var i = window && window.navigator;
            be = window,
            dt = document,
            vt = dt.documentElement,
            Xt = dt.body,
            cn = Tr("div"),
            br = !!window.PointerEvent,
            zt = Tr("div"),
            zt.style.cssText = "visibility:hidden;height:1px;top:-1px;pointer-events:none;position:relative;clear:both;cursor:grab",
            Ui = zt.style.cursor === "grab" ? "grab" : "move",
            qi = i && i.userAgent.toLowerCase().indexOf("android") !== -1,
            dn = "ontouchstart"in vt && "orientation"in be || i && (i.MaxTouchPoints > 0 || i.msMaxTouchPoints > 0),
            xn = function() {
                var t = Tr("div"), r = Tr("div"), o = r.style, a = Xt, u;
                return o.display = "inline-block",
                o.position = "relative",
                t.style.cssText = r.innerHTML = "width:90px;height:40px;padding:10px;overflow:auto;visibility:hidden",
                t.appendChild(r),
                a.appendChild(t),
                u = r.offsetHeight + 18 > t.scrollHeight,
                a.removeChild(t),
                u
            }(),
            Gi = function(t) {
                for (var r = t.split(","), o = ("onpointerdown"in cn ? "pointerdown,pointermove,pointerup,pointercancel" : "onmspointerdown"in cn ? "MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel" : t).split(","), a = {}, u = 4; --u > -1; )
                    a[r[u]] = o[u],
                    a[o[u]] = r[u];
                try {
                    vt.addEventListener("test", null, Object.defineProperty({}, "passive", {
                        get: function() {
                            to = 1
                        }
                    }))
                } catch {}
                return a
            }("touchstart,touchmove,touchend,touchcancel"),
            He(dt, "touchcancel", vr),
            He(be, "touchmove", vr),
            Xt && Xt.addEventListener("touchstart", vr),
            He(dt, "contextmenu", function() {
                for (var t in vi)
                    vi[t].isPressed && vi[t].endDrag()
            }),
            _e = fn = ro()
        }
        _e ? (Tt = _e.plugins.inertia,
        Vi = _e.utils.checkPrefix,
        Ki = Vi(Ki),
        Dn = Vi(Dn),
        Qt = _e.utils.toArray,
        _o = !!Vi("perspective")) : e && console.warn("Please gsap.registerPlugin(Draggable)")
    }, ss = function() {
        function s(i) {
            this._listeners = {},
            this.target = i || this
        }
        var e = s.prototype;
        return e.addEventListener = function(t, r) {
            var o = this._listeners[t] || (this._listeners[t] = []);
            ~o.indexOf(r) || o.push(r)
        }
        ,
        e.removeEventListener = function(t, r) {
            var o = this._listeners[t]
              , a = o && o.indexOf(r) || -1;
            a > -1 && o.splice(a, 1)
        }
        ,
        e.dispatchEvent = function(t) {
            var r = this, o;
            return (this._listeners[t] || []).forEach(function(a) {
                return a.call(r, {
                    type: t,
                    target: r.target
                }) === !1 && (o = !1)
            }),
            o
        }
        ,
        s
    }(), di = function(s) {
        Uu(e, s);
        function e(i, t) {
            var r;
            r = s.call(this) || this,
            fn || yn(1),
            i = Qt(i)[0],
            Tt || (Tt = _e.plugins.inertia),
            r.vars = t = uo(t || {}),
            r.target = i,
            r.x = r.y = r.rotation = 0,
            r.dragResistance = parseFloat(t.dragResistance) || 0,
            r.edgeResistance = isNaN(t.edgeResistance) ? 1 : parseFloat(t.edgeResistance) || 0,
            r.lockAxis = t.lockAxis,
            r.autoScroll = t.autoScroll || 0,
            r.lockedAxis = null,
            r.allowEventDefault = !!t.allowEventDefault,
            _e.getProperty(i, "x");
            var o = (t.type || "x,y").toLowerCase(), a = ~o.indexOf("x") || ~o.indexOf("y"), u = o.indexOf("rotation") !== -1, l = u ? "rotation" : a ? "x" : "left", d = a ? "y" : "top", y = !!(~o.indexOf("x") || ~o.indexOf("left") || o === "scroll"), c = !!(~o.indexOf("y") || ~o.indexOf("top") || o === "scroll"), _ = t.minimumMovement || 2, n = qu(r), g = Qt(t.trigger || t.handle || i), C = {}, T = 0, k = !1, L = t.autoScrollMarginTop || 40, N = t.autoScrollMarginRight || 40, X = t.autoScrollMarginBottom || 40, I = t.autoScrollMarginLeft || 40, H = t.clickableTest || ns, A = 0, U = i._gsap || _e.core.getCache(i), z = os(i), M = function(f, F) {
                return parseFloat(U.get(i, f, F))
            }, W = i.ownerDocument || dt, K, w, V, De, O, R, re, b, x, Z, ne, Ee, oe, fe, Q, he, ce, ct, ke, Oe, se, ve, de, te, v, h, ee, q, Te, tt, Fe, Ie, At = function(f) {
                return _t(f),
                f.stopImmediatePropagation && f.stopImmediatePropagation(),
                !1
            }, Ne = function Y(f) {
                if (n.autoScroll && n.isDragging && (k || ce)) {
                    var F = i, D = n.autoScroll * 15, p, E, m, S, P, B, G, j;
                    for (k = !1,
                    Wt.scrollTop = be.pageYOffset != null ? be.pageYOffset : W.documentElement.scrollTop != null ? W.documentElement.scrollTop : W.body.scrollTop,
                    Wt.scrollLeft = be.pageXOffset != null ? be.pageXOffset : W.documentElement.scrollLeft != null ? W.documentElement.scrollLeft : W.body.scrollLeft,
                    S = n.pointerX - Wt.scrollLeft,
                    P = n.pointerY - Wt.scrollTop; F && !E; )
                        E = Oi(F.parentNode),
                        p = E ? Wt : F.parentNode,
                        m = E ? {
                            bottom: Math.max(vt.clientHeight, be.innerHeight || 0),
                            right: Math.max(vt.clientWidth, be.innerWidth || 0),
                            left: 0,
                            top: 0
                        } : p.getBoundingClientRect(),
                        B = G = 0,
                        c && (j = p._gsMaxScrollY - p.scrollTop,
                        j < 0 ? G = j : P > m.bottom - X && j ? (k = !0,
                        G = Math.min(j, D * (1 - Math.max(0, m.bottom - P) / X) | 0)) : P < m.top + L && p.scrollTop && (k = !0,
                        G = -Math.min(p.scrollTop, D * (1 - Math.max(0, P - m.top) / L) | 0)),
                        G && (p.scrollTop += G)),
                        y && (j = p._gsMaxScrollX - p.scrollLeft,
                        j < 0 ? B = j : S > m.right - N && j ? (k = !0,
                        B = Math.min(j, D * (1 - Math.max(0, m.right - S) / N) | 0)) : S < m.left + I && p.scrollLeft && (k = !0,
                        B = -Math.min(p.scrollLeft, D * (1 - Math.max(0, S - m.left) / I) | 0)),
                        B && (p.scrollLeft += B)),
                        E && (B || G) && (be.scrollTo(p.scrollLeft, p.scrollTop),
                        et(n.pointerX + B, n.pointerY + G)),
                        F = p
                }
                if (ce) {
                    var ye = n.x
                      , ie = n.y;
                    u ? (n.deltaX = ye - parseFloat(U.rotation),
                    n.rotation = ye,
                    U.rotation = ye + "deg",
                    U.renderTransform(1, U)) : w ? (c && (n.deltaY = ie - w.top(),
                    w.top(ie)),
                    y && (n.deltaX = ye - w.left(),
                    w.left(ye))) : a ? (c && (n.deltaY = ie - parseFloat(U.y),
                    U.y = ie + "px"),
                    y && (n.deltaX = ye - parseFloat(U.x),
                    U.x = ye + "px"),
                    U.renderTransform(1, U)) : (c && (n.deltaY = ie - parseFloat(i.style.top || 0),
                    i.style.top = ie + "px"),
                    y && (n.deltaX = ye - parseFloat(i.style.left || 0),
                    i.style.left = ye + "px")),
                    b && !f && !q && (q = !0,
                    Le(n, "drag", "onDrag") === !1 && (y && (n.x -= n.deltaX),
                    c && (n.y -= n.deltaY),
                    Y(!0)),
                    q = !1)
                }
                ce = !1
            }, ge = function(f, F) {
                var D = n.x, p = n.y, E, m;
                i._gsap || (U = _e.core.getCache(i)),
                U.uncache && _e.getProperty(i, "x"),
                a ? (n.x = parseFloat(U.x),
                n.y = parseFloat(U.y)) : u ? n.x = n.rotation = parseFloat(U.rotation) : w ? (n.y = w.top(),
                n.x = w.left()) : (n.y = parseFloat(i.style.top || (m = Zi(i)) && m.top) || 0,
                n.x = parseFloat(i.style.left || (m || {}).left) || 0),
                (ke || Oe || se) && !F && (n.isDragging || n.isThrowing) && (se && (Ti.x = n.x,
                Ti.y = n.y,
                E = se(Ti),
                E.x !== n.x && (n.x = E.x,
                ce = !0),
                E.y !== n.y && (n.y = E.y,
                ce = !0)),
                ke && (E = ke(n.x),
                E !== n.x && (n.x = E,
                u && (n.rotation = E),
                ce = !0)),
                Oe && (E = Oe(n.y),
                E !== n.y && (n.y = E),
                ce = !0)),
                ce && Ne(!0),
                f || (n.deltaX = n.x - D,
                n.deltaY = n.y - p,
                Le(n, "throwupdate", "onThrowUpdate"))
            }, Je = function(f, F, D, p) {
                return F == null && (F = -li),
                D == null && (D = li),
                Zt(f) ? function(E) {
                    var m = n.isPressed ? 1 - n.edgeResistance : 1;
                    return f.call(n, E > D ? D + (E - D) * m : E < F ? F + (E - F) * m : E) * p
                }
                : Qi(f) ? function(E) {
                    for (var m = f.length, S = 0, P = li, B, G; --m > -1; )
                        B = f[m],
                        G = B - E,
                        G < 0 && (G = -G),
                        G < P && B >= F && B <= D && (S = m,
                        P = G);
                    return f[S]
                }
                : isNaN(f) ? function(E) {
                    return E
                }
                : function() {
                    return f * p
                }
            }, je = function(f, F, D, p, E, m, S) {
                return m = m && m < li ? m * m : li,
                Zt(f) ? function(P) {
                    var B = n.isPressed ? 1 - n.edgeResistance : 1, G = P.x, j = P.y, ye, ie, Se;
                    return P.x = G = G > D ? D + (G - D) * B : G < F ? F + (G - F) * B : G,
                    P.y = j = j > E ? E + (j - E) * B : j < p ? p + (j - p) * B : j,
                    ye = f.call(n, P),
                    ye !== P && (P.x = ye.x,
                    P.y = ye.y),
                    S !== 1 && (P.x *= S,
                    P.y *= S),
                    m < li && (ie = P.x - G,
                    Se = P.y - j,
                    ie * ie + Se * Se > m && (P.x = G,
                    P.y = j)),
                    P
                }
                : Qi(f) ? function(P) {
                    for (var B = f.length, G = 0, j = li, ye, ie, Se, Ae; --B > -1; )
                        Se = f[B],
                        ye = Se.x - P.x,
                        ie = Se.y - P.y,
                        Ae = ye * ye + ie * ie,
                        Ae < j && (G = B,
                        j = Ae);
                    return j <= m ? f[G] : P
                }
                : function(P) {
                    return P
                }
            }, qt = function() {
                var f, F, D, p;
                re = !1,
                w ? (w.calibrate(),
                n.minX = ne = -w.maxScrollLeft(),
                n.minY = oe = -w.maxScrollTop(),
                n.maxX = Z = n.maxY = Ee = 0,
                re = !0) : t.bounds && (f = go(t.bounds, i.parentNode),
                u ? (n.minX = ne = f.left,
                n.maxX = Z = f.left + f.width,
                n.minY = oe = n.maxY = Ee = 0) : !St(t.bounds.maxX) || !St(t.bounds.maxY) ? (f = t.bounds,
                n.minX = ne = f.minX,
                n.minY = oe = f.minY,
                n.maxX = Z = f.maxX,
                n.maxY = Ee = f.maxY) : (F = go(i, i.parentNode),
                n.minX = ne = Math.round(M(l, "px") + f.left - F.left),
                n.minY = oe = Math.round(M(d, "px") + f.top - F.top),
                n.maxX = Z = Math.round(ne + (f.width - F.width)),
                n.maxY = Ee = Math.round(oe + (f.height - F.height))),
                ne > Z && (n.minX = Z,
                n.maxX = Z = ne,
                ne = n.minX),
                oe > Ee && (n.minY = Ee,
                n.maxY = Ee = oe,
                oe = n.minY),
                u && (n.minRotation = ne,
                n.maxRotation = Z),
                re = !0),
                t.liveSnap && (D = t.liveSnap === !0 ? t.snap || {} : t.liveSnap,
                p = Qi(D) || Zt(D),
                u ? (ke = Je(p ? D : D.rotation, ne, Z, 1),
                Oe = null) : D.points ? se = je(p ? D : D.points, ne, Z, oe, Ee, D.radius, w ? -1 : 1) : (y && (ke = Je(p ? D : D.x || D.left || D.scrollLeft, ne, Z, w ? -1 : 1)),
                c && (Oe = Je(p ? D : D.y || D.top || D.scrollTop, oe, Ee, w ? -1 : 1))))
            }, Rt = function() {
                n.isThrowing = !1,
                Le(n, "throwcomplete", "onThrowComplete")
            }, wt = function() {
                n.isThrowing = !1
            }, Ut = function(f, F) {
                var D, p, E, m;
                f && Tt ? (f === !0 && (D = t.snap || t.liveSnap || {},
                p = Qi(D) || Zt(D),
                f = {
                    resistance: (t.throwResistance || t.resistance || 1e3) / (u ? 10 : 1)
                },
                u ? f.rotation = _n(n, p ? D : D.rotation, Z, ne, 1, F) : (y && (f[l] = _n(n, p ? D : D.points || D.x || D.left, Z, ne, w ? -1 : 1, F || n.lockedAxis === "x")),
                c && (f[d] = _n(n, p ? D : D.points || D.y || D.top, Ee, oe, w ? -1 : 1, F || n.lockedAxis === "y")),
                (D.points || Qi(D) && ji(D[0])) && (f.linkedProps = l + "," + d,
                f.radius = D.radius))),
                n.isThrowing = !0,
                m = isNaN(t.overshootTolerance) ? t.edgeResistance === 1 ? 0 : 1 - n.edgeResistance + .2 : t.overshootTolerance,
                f.duration || (f.duration = {
                    max: Math.max(t.minDuration || 0, "maxDuration"in t ? t.maxDuration : 2),
                    min: isNaN(t.minDuration) ? m === 0 || ji(f) && f.resistance > 1e3 ? 0 : .5 : t.minDuration,
                    overshoot: m
                }),
                n.tween = E = _e.to(w || i, {
                    inertia: f,
                    data: "_draggable",
                    onComplete: Rt,
                    onInterrupt: wt,
                    onUpdate: t.fastMode ? Le : ge,
                    onUpdateParams: t.fastMode ? [n, "onthrowupdate", "onThrowUpdate"] : D && D.radius ? [!1, !0] : []
                }),
                t.fastMode || (w && (w._skip = !0),
                E.render(1e9, !0, !0),
                ge(!0, !0),
                n.endX = n.x,
                n.endY = n.y,
                u && (n.endRotation = n.x),
                E.play(0),
                ge(!0, !0),
                w && (w._skip = !1))) : re && n.applyBounds()
            }, Pt = function(f) {
                var F = te, D;
                te = ai(i.parentNode, !0),
                f && n.isPressed && !te.equals(F || new si) && (D = F.inverse().apply({
                    x: V,
                    y: De
                }),
                te.apply(D, D),
                V = D.x,
                De = D.y),
                te.equals(ju) && (te = null)
            }, Ft = function() {
                var f = 1 - n.edgeResistance, F = z ? ki(W) : 0, D = z ? Si(W) : 0, p, E, m;
                Pt(!1),
                xt.x = n.pointerX - F,
                xt.y = n.pointerY - D,
                te && te.apply(xt, xt),
                V = xt.x,
                De = xt.y,
                ce && (et(n.pointerX, n.pointerY),
                Ne(!0)),
                Ie = ai(i),
                w ? (qt(),
                R = w.top(),
                O = w.left()) : (bt() ? (ge(!0, !0),
                qt()) : n.applyBounds(),
                u ? (p = i.ownerSVGElement ? [U.xOrigin - i.getBBox().x, U.yOrigin - i.getBBox().y] : (Zi(i)[Dn] || "0 0").split(" "),
                he = n.rotationOrigin = ai(i).apply({
                    x: parseFloat(p[0]) || 0,
                    y: parseFloat(p[1]) || 0
                }),
                ge(!0, !0),
                E = n.pointerX - he.x - F,
                m = he.y - n.pointerY + D,
                O = n.x,
                R = n.y = Math.atan2(m, E) * no) : (R = M(d, "px"),
                O = M(l, "px"))),
                re && f && (O > Z ? O = Z + (O - Z) / f : O < ne && (O = ne - (ne - O) / f),
                u || (R > Ee ? R = Ee + (R - Ee) / f : R < oe && (R = oe - (oe - R) / f))),
                n.startX = O = Jt(O),
                n.startY = R = Jt(R)
            }, bt = function() {
                return n.tween && n.tween.isActive()
            }, me = function() {
                zt.parentNode && !bt() && !n.isDragging && zt.parentNode.removeChild(zt)
            }, ft = function(f, F) {
                var D;
                if (!K || n.isPressed || !f || (f.type === "mousedown" || f.type === "pointerdown") && !F && ei() - A < 30 && Gi[n.pointerEvent.type]) {
                    Fe && f && K && _t(f);
                    return
                }
                if (v = bt(),
                n.pointerEvent = f,
                Gi[f.type] ? (de = ~f.type.indexOf("touch") ? f.currentTarget || f.target : W,
                He(de, "touchend", $e),
                He(de, "touchmove", Re),
                He(de, "touchcancel", $e),
                He(W, "touchstart", fo)) : (de = null,
                He(W, "mousemove", Re)),
                ee = null,
                (!br || !de) && (He(W, "mouseup", $e),
                f && f.target && He(f.target, "mouseup", $e)),
                ve = H.call(n, f.target) && t.dragClickables === !1 && !F,
                ve) {
                    He(f.target, "change", $e),
                    Le(n, "pressInit", "onPressInit"),
                    Le(n, "press", "onPress"),
                    Sr(g, !0),
                    Fe = !1;
                    return
                }
                if (h = !de || y === c || n.vars.allowNativeTouchScrolling === !1 || n.vars.allowContextMenu && f && (f.ctrlKey || f.which > 2) ? !1 : y ? "y" : "x",
                Fe = !h && !n.allowEventDefault,
                Fe && (_t(f),
                He(be, "touchforcechange", _t)),
                f.changedTouches ? (f = fe = f.changedTouches[0],
                Q = f.identifier) : f.pointerId ? Q = f.pointerId : fe = Q = null,
                Fr++,
                Ju(Ne),
                De = n.pointerY = f.pageY,
                V = n.pointerX = f.pageX,
                Le(n, "pressInit", "onPressInit"),
                (h || n.autoScroll) && hn(i.parentNode),
                i.parentNode && n.autoScroll && !w && !u && i.parentNode._gsMaxScrollX && !zt.parentNode && !i.getBBox && (zt.style.width = i.parentNode.scrollWidth + "px",
                i.parentNode.appendChild(zt)),
                Ft(),
                n.tween && n.tween.kill(),
                n.isThrowing = !1,
                _e.killTweensOf(w || i, C, !0),
                w && _e.killTweensOf(i, {
                    scrollTo: 1
                }, !0),
                n.tween = n.lockedAxis = null,
                (t.zIndexBoost || !u && !w && t.zIndexBoost !== !1) && (i.style.zIndex = e.zIndex++),
                n.isPressed = !0,
                b = !!(t.onDrag || n._listeners.drag),
                x = !!(t.onMove || n._listeners.move),
                t.cursor !== !1 || t.activeCursor)
                    for (D = g.length; --D > -1; )
                        _e.set(g[D], {
                            cursor: t.activeCursor || t.cursor || (Ui === "grab" ? "grabbing" : Ui)
                        });
                Le(n, "press", "onPress")
            }, Re = function(f) {
                var F = f, D, p, E, m, S, P;
                if (!K || pn || !n.isPressed || !f) {
                    Fe && f && K && _t(f);
                    return
                }
                if (n.pointerEvent = f,
                D = f.changedTouches,
                D) {
                    if (f = D[0],
                    f !== fe && f.identifier !== Q) {
                        for (m = D.length; --m > -1 && (f = D[m]).identifier !== Q && f.target !== i; )
                            ;
                        if (m < 0)
                            return
                    }
                } else if (f.pointerId && Q && f.pointerId !== Q)
                    return;
                if (de && h && !ee && (xt.x = f.pageX - (z ? ki(W) : 0),
                xt.y = f.pageY - (z ? Si(W) : 0),
                te && te.apply(xt, xt),
                p = xt.x,
                E = xt.y,
                S = Math.abs(p - V),
                P = Math.abs(E - De),
                (S !== P && (S > _ || P > _) || qi && h === ee) && (ee = S > P && y ? "x" : "y",
                h && ee !== h && He(be, "touchforcechange", _t),
                n.vars.lockAxisOnTouchScroll !== !1 && y && c && (n.lockedAxis = ee === "x" ? "y" : "x",
                Zt(n.vars.onLockAxis) && n.vars.onLockAxis.call(n, F)),
                qi && h === ee))) {
                    $e(F);
                    return
                }
                !n.allowEventDefault && (!h || ee && h !== ee) && F.cancelable !== !1 ? (_t(F),
                Fe = !0) : Fe && (Fe = !1),
                n.autoScroll && (k = !0),
                et(f.pageX, f.pageY, x)
            }, et = function(f, F, D) {
                var p = 1 - n.dragResistance, E = 1 - n.edgeResistance, m = n.pointerX, S = n.pointerY, P = R, B = n.x, G = n.y, j = n.endX, ye = n.endY, ie = n.endRotation, Se = ce, Ae, Ce, le, ue, Yt, Ge;
                n.pointerX = f,
                n.pointerY = F,
                z && (f -= ki(W),
                F -= Si(W)),
                u ? (ue = Math.atan2(he.y - F, f - he.x) * no,
                Yt = n.y - ue,
                Yt > 180 ? (R -= 360,
                n.y = ue) : Yt < -180 && (R += 360,
                n.y = ue),
                n.x !== O || Math.abs(R - ue) > _ ? (n.y = ue,
                le = O + (R - ue) * p) : le = O) : (te && (Ge = f * te.a + F * te.c + te.e,
                F = f * te.b + F * te.d + te.f,
                f = Ge),
                Ce = F - De,
                Ae = f - V,
                Ce < _ && Ce > -_ && (Ce = 0),
                Ae < _ && Ae > -_ && (Ae = 0),
                (n.lockAxis || n.lockedAxis) && (Ae || Ce) && (Ge = n.lockedAxis,
                Ge || (n.lockedAxis = Ge = y && Math.abs(Ae) > Math.abs(Ce) ? "y" : c ? "x" : null,
                Ge && Zt(n.vars.onLockAxis) && n.vars.onLockAxis.call(n, n.pointerEvent)),
                Ge === "y" ? Ce = 0 : Ge === "x" && (Ae = 0)),
                le = Jt(O + Ae * p),
                ue = Jt(R + Ce * p)),
                (ke || Oe || se) && (n.x !== le || n.y !== ue && !u) && (se && (Ti.x = le,
                Ti.y = ue,
                Ge = se(Ti),
                le = Jt(Ge.x),
                ue = Jt(Ge.y)),
                ke && (le = Jt(ke(le))),
                Oe && (ue = Jt(Oe(ue)))),
                re && (le > Z ? le = Z + Math.round((le - Z) * E) : le < ne && (le = ne + Math.round((le - ne) * E)),
                u || (ue > Ee ? ue = Math.round(Ee + (ue - Ee) * E) : ue < oe && (ue = Math.round(oe + (ue - oe) * E)))),
                (n.x !== le || n.y !== ue && !u) && (u ? (n.endRotation = n.x = n.endX = le,
                ce = !0) : (c && (n.y = n.endY = ue,
                ce = !0),
                y && (n.x = n.endX = le,
                ce = !0)),
                !D || Le(n, "move", "onMove") !== !1 ? !n.isDragging && n.isPressed && (n.isDragging = !0,
                Le(n, "dragstart", "onDragStart")) : (n.pointerX = m,
                n.pointerY = S,
                R = P,
                n.x = B,
                n.y = G,
                n.endX = j,
                n.endY = ye,
                n.endRotation = ie,
                ce = Se))
            }, $e = function Y(f, F) {
                if (!K || !n.isPressed || f && Q != null && !F && (f.pointerId && f.pointerId !== Q && f.target !== i || f.changedTouches && !ts(f.changedTouches, Q))) {
                    Fe && f && K && _t(f);
                    return
                }
                n.isPressed = !1;
                var D = f, p = n.isDragging, E = n.vars.allowContextMenu && f && (f.ctrlKey || f.which > 2), m = _e.delayedCall(.001, me), S, P, B, G, j;
                if (de ? (Ye(de, "touchend", Y),
                Ye(de, "touchmove", Re),
                Ye(de, "touchcancel", Y),
                Ye(W, "touchstart", fo)) : Ye(W, "mousemove", Re),
                Ye(be, "touchforcechange", _t),
                (!br || !de) && (Ye(W, "mouseup", Y),
                f && f.target && Ye(f.target, "mouseup", Y)),
                ce = !1,
                p && (T = oo = ei(),
                n.isDragging = !1),
                ve && !E) {
                    f && (Ye(f.target, "change", Y),
                    n.pointerEvent = D),
                    Sr(g, !1),
                    Le(n, "release", "onRelease"),
                    Le(n, "click", "onClick"),
                    ve = !1;
                    return
                }
                for (co(Ne),
                P = g.length; --P > -1; )
                    gn(g[P], "cursor", t.cursor || (t.cursor !== !1 ? Ui : null));
                if (Fr--,
                f) {
                    if (S = f.changedTouches,
                    S && (f = S[0],
                    f !== fe && f.identifier !== Q)) {
                        for (P = S.length; --P > -1 && (f = S[P]).identifier !== Q && f.target !== i; )
                            ;
                        if (P < 0)
                            return
                    }
                    n.pointerEvent = D,
                    n.pointerX = f.pageX,
                    n.pointerY = f.pageY
                }
                return E && D ? (_t(D),
                Fe = !0,
                Le(n, "release", "onRelease")) : D && !p ? (Fe = !1,
                v && (t.snap || t.bounds) && Ut(t.inertia || t.throwProps),
                Le(n, "release", "onRelease"),
                (!qi || D.type !== "touchmove") && D.type.indexOf("cancel") === -1 && (Le(n, "click", "onClick"),
                ei() - A < 300 && Le(n, "doubleclick", "onDoubleClick"),
                G = D.target || i,
                A = ei(),
                j = function() {
                    A !== Te && n.enabled() && !n.isPressed && !D.defaultPrevented && (G.click ? G.click() : W.createEvent && (B = W.createEvent("MouseEvents"),
                    B.initMouseEvent("click", !0, !0, be, 1, n.pointerEvent.screenX, n.pointerEvent.screenY, n.pointerX, n.pointerY, !1, !1, !1, !1, 0, null),
                    G.dispatchEvent(B)))
                }
                ,
                !qi && !D.defaultPrevented && _e.delayedCall(.05, j))) : (Ut(t.inertia || t.throwProps),
                !n.allowEventDefault && D && (t.dragClickables !== !1 || !H.call(n, D.target)) && p && (!h || ee && h === ee) && D.cancelable !== !1 ? (Fe = !0,
                _t(D)) : Fe = !1,
                Le(n, "release", "onRelease")),
                bt() && m.duration(n.tween.duration()),
                p && Le(n, "dragend", "onDragEnd"),
                !0
            }, Dt = function(f) {
                if (f && n.isDragging && !w) {
                    var F = f.target || i.parentNode
                      , D = F.scrollLeft - F._gsScrollX
                      , p = F.scrollTop - F._gsScrollY;
                    (D || p) && (te ? (V -= D * te.a + p * te.c,
                    De -= p * te.d + D * te.b) : (V -= D,
                    De -= p),
                    F._gsScrollX += D,
                    F._gsScrollY += p,
                    et(n.pointerX, n.pointerY))
                }
            }, $t = function(f) {
                var F = ei()
                  , D = F - A < 100
                  , p = F - T < 50
                  , E = D && Te === A
                  , m = n.pointerEvent && n.pointerEvent.defaultPrevented
                  , S = D && tt === A
                  , P = f.isTrusted || f.isTrusted == null && D && E;
                if ((E || p && n.vars.suppressClickOnDrag !== !1) && f.stopImmediatePropagation && f.stopImmediatePropagation(),
                D && !(n.pointerEvent && n.pointerEvent.defaultPrevented) && (!E || P && !S)) {
                    P && E && (tt = A),
                    Te = A;
                    return
                }
                (n.isPressed || p || D) && (!P || !f.detail || !D || m) && _t(f),
                !D && !p && (f && f.target && (n.pointerEvent = f),
                Le(n, "click", "onClick"))
            }, jt = function(f) {
                return te ? {
                    x: f.x * te.a + f.y * te.c + te.e,
                    y: f.x * te.b + f.y * te.d + te.f
                } : {
                    x: f.x,
                    y: f.y
                }
            };
            return ct = e.get(i),
            ct && ct.kill(),
            r.startDrag = function(Y, f) {
                var F, D, p, E;
                ft(Y || n.pointerEvent, !0),
                f && !n.hitTest(Y || n.pointerEvent) && (F = Ai(Y || n.pointerEvent),
                D = Ai(i),
                p = jt({
                    x: F.left + F.width / 2,
                    y: F.top + F.height / 2
                }),
                E = jt({
                    x: D.left + D.width / 2,
                    y: D.top + D.height / 2
                }),
                V -= p.x - E.x,
                De -= p.y - E.y),
                n.isDragging || (n.isDragging = !0,
                Le(n, "dragstart", "onDragStart"))
            }
            ,
            r.drag = Re,
            r.endDrag = function(Y) {
                return $e(Y || n.pointerEvent, !0)
            }
            ,
            r.timeSinceDrag = function() {
                return n.isDragging ? 0 : (ei() - T) / 1e3
            }
            ,
            r.timeSinceClick = function() {
                return (ei() - A) / 1e3
            }
            ,
            r.hitTest = function(Y, f) {
                return e.hitTest(n.target, Y, f)
            }
            ,
            r.getDirection = function(Y, f) {
                var F = Y === "velocity" && Tt ? Y : ji(Y) && !u ? "element" : "start", D, p, E, m, S, P;
                return F === "element" && (S = Ai(n.target),
                P = Ai(Y)),
                D = F === "start" ? n.x - O : F === "velocity" ? Tt.getVelocity(i, l) : S.left + S.width / 2 - (P.left + P.width / 2),
                u ? D < 0 ? "counter-clockwise" : "clockwise" : (f = f || 2,
                p = F === "start" ? n.y - R : F === "velocity" ? Tt.getVelocity(i, d) : S.top + S.height / 2 - (P.top + P.height / 2),
                E = Math.abs(D / p),
                m = E < 1 / f ? "" : D < 0 ? "left" : "right",
                E < f && (m !== "" && (m += "-"),
                m += p < 0 ? "up" : "down"),
                m)
            }
            ,
            r.applyBounds = function(Y, f) {
                var F, D, p, E, m, S;
                if (Y && t.bounds !== Y)
                    return t.bounds = Y,
                    n.update(!0, f);
                if (ge(!0),
                qt(),
                re && !bt()) {
                    if (F = n.x,
                    D = n.y,
                    F > Z ? F = Z : F < ne && (F = ne),
                    D > Ee ? D = Ee : D < oe && (D = oe),
                    (n.x !== F || n.y !== D) && (p = !0,
                    n.x = n.endX = F,
                    u ? n.endRotation = F : n.y = n.endY = D,
                    ce = !0,
                    Ne(!0),
                    n.autoScroll && !n.isDragging))
                        for (hn(i.parentNode),
                        E = i,
                        Wt.scrollTop = be.pageYOffset != null ? be.pageYOffset : W.documentElement.scrollTop != null ? W.documentElement.scrollTop : W.body.scrollTop,
                        Wt.scrollLeft = be.pageXOffset != null ? be.pageXOffset : W.documentElement.scrollLeft != null ? W.documentElement.scrollLeft : W.body.scrollLeft; E && !S; )
                            S = Oi(E.parentNode),
                            m = S ? Wt : E.parentNode,
                            c && m.scrollTop > m._gsMaxScrollY && (m.scrollTop = m._gsMaxScrollY),
                            y && m.scrollLeft > m._gsMaxScrollX && (m.scrollLeft = m._gsMaxScrollX),
                            E = m;
                    n.isThrowing && (p || n.endX > Z || n.endX < ne || n.endY > Ee || n.endY < oe) && Ut(t.inertia || t.throwProps, p)
                }
                return n
            }
            ,
            r.update = function(Y, f, F) {
                if (f && n.isPressed) {
                    var D = ai(i)
                      , p = Ie.apply({
                        x: n.x - O,
                        y: n.y - R
                    })
                      , E = ai(i.parentNode, !0);
                    E.apply({
                        x: D.e - p.x,
                        y: D.f - p.y
                    }, p),
                    n.x -= p.x - E.e,
                    n.y -= p.y - E.f,
                    Ne(!0),
                    Ft()
                }
                var m = n.x
                  , S = n.y;
                return Pt(!f),
                Y ? n.applyBounds() : (ce && F && Ne(!0),
                ge(!0)),
                f && (et(n.pointerX, n.pointerY),
                ce && Ne(!0)),
                n.isPressed && !f && (y && Math.abs(m - n.x) > .01 || c && Math.abs(S - n.y) > .01 && !u) && Ft(),
                n.autoScroll && (hn(i.parentNode, n.isDragging),
                k = n.isDragging,
                Ne(!0),
                Do(i, Dt),
                po(i, Dt)),
                n
            }
            ,
            r.enable = function(Y) {
                var f = {
                    lazy: !0
                }, F, D, p;
                if (t.cursor !== !1 && (f.cursor = t.cursor || Ui),
                _e.utils.checkPrefix("touchCallout") && (f.touchCallout = "none"),
                Y !== "soft") {
                    for (so(g, y === c ? "none" : t.allowNativeTouchScrolling && i.scrollHeight === i.clientHeight == (i.scrollWidth === i.clientHeight) || t.allowEventDefault ? "manipulation" : y ? "pan-y" : "pan-x"),
                    D = g.length; --D > -1; )
                        p = g[D],
                        br || He(p, "mousedown", ft),
                        He(p, "touchstart", ft),
                        He(p, "click", $t, !0),
                        _e.set(p, f),
                        p.getBBox && p.ownerSVGElement && _e.set(p.ownerSVGElement, {
                            touchAction: y === c ? "none" : t.allowNativeTouchScrolling || t.allowEventDefault ? "manipulation" : y ? "pan-y" : "pan-x"
                        }),
                        t.allowContextMenu || He(p, "contextmenu", At);
                    Sr(g, !1)
                }
                return po(i, Dt),
                K = !0,
                Tt && Y !== "soft" && Tt.track(w || i, a ? "x,y" : u ? "rotation" : "top,left"),
                i._gsDragID = F = "d" + Ku++,
                vi[F] = n,
                w && (w.enable(),
                w.element._gsDragID = F),
                (t.bounds || u) && Ft(),
                t.bounds && n.applyBounds(),
                n
            }
            ,
            r.disable = function(Y) {
                for (var f = n.isDragging, F = g.length, D; --F > -1; )
                    gn(g[F], "cursor", null);
                if (Y !== "soft") {
                    for (so(g, null),
                    F = g.length; --F > -1; )
                        D = g[F],
                        gn(D, "touchCallout", null),
                        Ye(D, "mousedown", ft),
                        Ye(D, "touchstart", ft),
                        Ye(D, "click", $t),
                        Ye(D, "contextmenu", At);
                    Sr(g, !0),
                    de && (Ye(de, "touchcancel", $e),
                    Ye(de, "touchend", $e),
                    Ye(de, "touchmove", Re)),
                    Ye(W, "mouseup", $e),
                    Ye(W, "mousemove", Re)
                }
                return Do(i, Dt),
                K = !1,
                Tt && Y !== "soft" && Tt.untrack(w || i, a ? "x,y" : u ? "rotation" : "top,left"),
                w && w.disable(),
                co(Ne),
                n.isDragging = n.isPressed = ve = !1,
                f && Le(n, "dragend", "onDragEnd"),
                n
            }
            ,
            r.enabled = function(Y, f) {
                return arguments.length ? Y ? n.enable(f) : n.disable(f) : K
            }
            ,
            r.kill = function() {
                return n.isThrowing = !1,
                n.tween && n.tween.kill(),
                n.disable(),
                _e.set(g, {
                    clearProps: "userSelect"
                }),
                delete vi[i._gsDragID],
                n
            }
            ,
            ~o.indexOf("scroll") && (w = r.scrollProxy = new us(i,Zu({
                onKill: function() {
                    n.isPressed && $e(null)
                }
            }, t)),
            i.style.overflowY = c && !dn ? "auto" : "hidden",
            i.style.overflowX = y && !dn ? "auto" : "hidden",
            i = w.content),
            u ? C.rotation = 1 : (y && (C[l] = 1),
            c && (C[d] = 1)),
            U.force3D = "force3D"in t ? t.force3D : !0,
            r.enable(),
            r
        }
        return e.register = function(t) {
            _e = t,
            yn()
        }
        ,
        e.create = function(t, r) {
            return fn || yn(!0),
            Qt(t).map(function(o) {
                return new e(o,r)
            })
        }
        ,
        e.get = function(t) {
            return vi[(Qt(t)[0] || {})._gsDragID]
        }
        ,
        e.timeSinceDrag = function() {
            return (ei() - oo) / 1e3
        }
        ,
        e.hitTest = function(t, r, o) {
            if (t === r)
                return !1;
            var a = Ai(t), u = Ai(r), l = a.top, d = a.left, y = a.right, c = a.bottom, _ = a.width, n = a.height, g = u.left > y || u.right < d || u.top > c || u.bottom < l, C, T, k;
            return g || !o ? !g : (k = (o + "").indexOf("%") !== -1,
            o = parseFloat(o) || 0,
            C = {
                left: Math.max(d, u.left),
                top: Math.max(l, u.top)
            },
            C.width = Math.min(y, u.right) - C.left,
            C.height = Math.min(c, u.bottom) - C.top,
            C.width < 0 || C.height < 0 ? !1 : k ? (o *= .01,
            T = C.width * C.height,
            T >= _ * n * o || T >= u.width * u.height * o) : C.width > o && C.height > o)
        }
        ,
        e
    }(ss);
    es(di.prototype, {
        pointerX: 0,
        pointerY: 0,
        startX: 0,
        startY: 0,
        deltaX: 0,
        deltaY: 0,
        isDragging: !1,
        isPressed: !1
    }),
    di.zIndex = 1e3,
    di.version = "3.10.4",
    ro() && _e.registerPlugin(di);
    /*!
 * VelocityTracker: 3.10.4
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
    var Mt, En, Ji, xo, Pi, Mi, mn, yo, Eo = function() {
        return Mt || typeof window != "undefined" && (Mt = window.gsap)
    }, Cn = {}, as = function(e) {
        return Math.round(e * 1e4) / 1e4
    }, wn = function(e) {
        return yo(e).id
    }, er = function(e) {
        return Cn[wn(typeof e == "string" ? Ji(e)[0] : e)]
    }, mo = function(e) {
        var i = Pi, t;
        if (e - mn >= .05)
            for (mn = e; i; )
                t = i.g(i.t, i.p),
                (t !== i.v1 || e - i.t1 > .2) && (i.v2 = i.v1,
                i.v1 = t,
                i.t2 = i.t1,
                i.t1 = e),
                i = i._next
    }, ls = {
        deg: 360,
        rad: Math.PI * 2
    }, Fn = function() {
        Mt = Eo(),
        Mt && (Ji = Mt.utils.toArray,
        xo = Mt.utils.getUnit,
        yo = Mt.core.getCache,
        Mi = Mt.ticker,
        En = 1)
    }, cs = function(e, i, t, r) {
        this.t = e,
        this.p = i,
        this.g = e._gsap.get,
        this.rCap = ls[t || xo(this.g(e, i))],
        this.v1 = this.v2 = 0,
        this.t1 = this.t2 = Mi.time,
        r && (this._next = r,
        r._prev = this)
    }, tr = function() {
        function s(i, t) {
            En || Fn(),
            this.target = Ji(i)[0],
            Cn[wn(this.target)] = this,
            this._props = {},
            t && this.add(t)
        }
        s.register = function(t) {
            Mt = t,
            Fn()
        }
        ;
        var e = s.prototype;
        return e.get = function(t, r) {
            var o = this._props[t] || console.warn("Not tracking " + t + " velocity."), a, u, l;
            return a = parseFloat(r ? o.v1 : o.g(o.t, o.p)),
            u = a - parseFloat(o.v2),
            l = o.rCap,
            l && (u = u % l,
            u !== u % (l / 2) && (u = u < 0 ? u + l : u - l)),
            as(u / ((r ? o.t1 : Mi.time) - o.t2))
        }
        ,
        e.getAll = function() {
            var t = {}, r = this._props, o;
            for (o in r)
                t[o] = this.get(o);
            return t
        }
        ,
        e.isTracking = function(t) {
            return t in this._props
        }
        ,
        e.add = function(t, r) {
            t in this._props || (Pi || (Mi.add(mo),
            mn = Mi.time),
            Pi = this._props[t] = new cs(this.target,t,r,Pi))
        }
        ,
        e.remove = function(t) {
            var r = this._props[t], o, a;
            r && (o = r._prev,
            a = r._next,
            o && (o._next = a),
            a ? a._prev = o : Pi === r && (Mi.remove(mo),
            Pi = 0),
            delete this._props[t])
        }
        ,
        e.kill = function(t) {
            for (var r in this._props)
                this.remove(r);
            t || delete Cn[wn(this.target)]
        }
        ,
        s.track = function(t, r, o) {
            En || Fn();
            for (var a = [], u = Ji(t), l = r.split(","), d = (o || "").split(","), y = u.length, c, _; y--; ) {
                for (c = er(u[y]) || new s(u[y]),
                _ = l.length; _--; )
                    c.add(l[_], d[_] || d[0]);
                a.push(c)
            }
            return a
        }
        ,
        s.untrack = function(t, r) {
            var o = (r || "").split(",");
            Ji(t).forEach(function(a) {
                var u = er(a);
                u && (o.length ? o.forEach(function(l) {
                    return u.remove(l)
                }) : u.kill(1))
            })
        }
        ,
        s.isTracking = function(t, r) {
            var o = er(t);
            return o && o.isTracking(r)
        }
        ,
        s.getVelocity = function(t, r) {
            var o = er(t);
            return !o || !o.isTracking(r) ? console.warn("Not tracking velocity of " + r) : o.get(r)
        }
        ,
        s
    }();
    tr.getByTarget = er,
    Eo() && Mt.registerPlugin(tr);
    /*!
 * InertiaPlugin 3.10.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
    var Ke, Co, wo, Fo, bn, ir, bo, vo, To, vn, So, rr, kr = tr.getByTarget, ko = function() {
        return Ke || typeof window != "undefined" && (Ke = window.gsap) && Ke.registerPlugin && Ke
    }, fs = function(e) {
        return typeof e == "string"
    }, nr = function(e) {
        return typeof e == "number"
    }, ti = function(e) {
        return typeof e == "object"
    }, Tn = function(e) {
        return typeof e == "function"
    }, ds = 1, Oo = Array.isArray, ps = function(e) {
        return e
    }, pi = 1e10, Ao = 1 / pi, Po = .05, Ds = function(e) {
        return Math.round(e * 1e4) / 1e4
    }, hs = function(e, i, t) {
        for (var r in i)
            !(r in e) && r !== t && (e[r] = i[r]);
        return e
    }, gs = function s(e) {
        var i = {}, t, r;
        for (t in e)
            i[t] = ti(r = e[t]) && !Oo(r) ? s(r) : r;
        return i
    }, Mo = function(e, i, t, r, o) {
        var a = i.length, u = 0, l = pi, d, y, c, _;
        if (ti(e)) {
            for (; a--; ) {
                d = i[a],
                y = 0;
                for (c in e)
                    _ = d[c] - e[c],
                    y += _ * _;
                y < l && (u = a,
                l = y)
            }
            if ((o || pi) < pi && o < Math.sqrt(l))
                return e
        } else
            for (; a--; )
                d = i[a],
                y = d - e,
                y < 0 && (y = -y),
                y < l && d >= r && d <= t && (u = a,
                l = y);
        return i[u]
    }, Bo = function(e, i, t, r, o, a, u) {
        if (e.end === "auto")
            return e;
        var l = e.end, d, y;
        if (t = isNaN(t) ? pi : t,
        r = isNaN(r) ? -pi : r,
        ti(i)) {
            if (d = i.calculated ? i : (Tn(l) ? l(i, u) : Mo(i, l, t, r, a)) || i,
            !i.calculated) {
                for (y in d)
                    i[y] = d[y];
                i.calculated = !0
            }
            d = d[o]
        } else
            d = Tn(l) ? l(i, u) : Oo(l) ? Mo(i, l, t, r, a) : parseFloat(l);
        return d > t ? d = t : d < r && (d = r),
        {
            max: d,
            min: d,
            unitFactor: e.unitFactor
        }
    }, Or = function(e, i, t) {
        return isNaN(e[i]) ? t : +e[i]
    }, Sn = function(e, i) {
        return i * Po * e / vn
    }, Io = function(e, i, t) {
        return Math.abs((i - e) * vn / t / Po)
    }, Lo = {
        resistance: 1,
        checkpoint: 1,
        preventOvershoot: 1,
        linkedProps: 1,
        radius: 1,
        duration: 1
    }, No = function(e, i, t, r) {
        if (i.linkedProps) {
            var o = i.linkedProps.split(","), a = {}, u, l, d, y, c, _;
            for (u = 0; u < o.length; u++)
                l = o[u],
                d = i[l],
                d && (nr(d.velocity) ? y = d.velocity : (c = c || kr(e),
                y = c && c.isTracking(l) ? c.get(l) : 0),
                _ = Math.abs(y / Or(d, "resistance", r)),
                a[l] = parseFloat(t(e, l)) + Sn(y, _));
            return a
        }
    }, _s = function(e, i, t, r, o, a) {
        if (t === void 0 && (t = 10),
        r === void 0 && (r = .2),
        o === void 0 && (o = 1),
        a === void 0 && (a = 0),
        fs(e) && (e = Fo(e)[0]),
        !e)
            return 0;
        var u = 0, l = pi, d = i.inertia || i, y = To(e).get, c = Or(d, "resistance", ir.resistance), _, n, g, C, T, k, L, N, X, I;
        I = No(e, d, y, c);
        for (_ in d)
            Lo[_] || (n = d[_],
            ti(n) || (N = N || kr(e),
            N && N.isTracking(_) ? n = nr(n) ? {
                velocity: n
            } : {
                velocity: N.get(_)
            } : (C = +n || 0,
            g = Math.abs(C / c))),
            ti(n) && (nr(n.velocity) ? C = n.velocity : (N = N || kr(e),
            C = N && N.isTracking(_) ? N.get(_) : 0),
            g = So(r, t, Math.abs(C / Or(n, "resistance", c))),
            T = parseFloat(y(e, _)) || 0,
            k = T + Sn(C, g),
            "end"in n && (n = Bo(n, I && _ in I ? I : k, n.max, n.min, _, d.radius, C),
            a && (rr === i && (rr = d = gs(i)),
            d[_] = hs(n, d[_], "end"))),
            "max"in n && k > +n.max + Ao ? (X = n.unitFactor || ir.unitFactors[_] || 1,
            L = T > n.max && n.min !== n.max || C * X > -15 && C * X < 45 ? r + (t - r) * .1 : Io(T, n.max, C),
            L + o < l && (l = L + o)) : "min"in n && k < +n.min - Ao && (X = n.unitFactor || ir.unitFactors[_] || 1,
            L = T < n.min && n.min !== n.max || C * X > -45 && C * X < 15 ? r + (t - r) * .1 : Io(T, n.min, C),
            L + o < l && (l = L + o)),
            L > u && (u = L)),
            g > u && (u = g));
        return u > l && (u = l),
        u > t ? t : u < r ? r : u
    }, Ro = function() {
        Ke = ko(),
        Ke && (wo = Ke.parseEase,
        Fo = Ke.utils.toArray,
        bo = Ke.utils.getUnit,
        To = Ke.core.getCache,
        So = Ke.utils.clamp,
        bn = wo("power3"),
        vn = bn(.05),
        vo = Ke.core.PropTween,
        Ke.config({
            resistance: 100,
            unitFactors: {
                time: 1e3,
                totalTime: 1e3,
                progress: 1e3,
                totalProgress: 1e3
            }
        }),
        ir = Ke.config(),
        Ke.registerPlugin(tr),
        Co = 1)
    }, Ar = {
        version: "3.10.4",
        name: "inertia",
        register: function(e) {
            Ke = e,
            Ro()
        },
        init: function(e, i, t, r, o) {
            Co || Ro();
            var a = kr(e);
            if (i === "auto") {
                if (!a) {
                    console.warn("No inertia tracking on " + e + ". InertiaPlugin.track(target) first.");
                    return
                }
                i = a.getAll()
            }
            this.target = e,
            this.tween = t,
            rr = i;
            var u = e._gsap, l = u.get, d = i.duration, y = ti(d), c = i.preventOvershoot || y && d.overshoot === 0, _ = Or(i, "resistance", ir.resistance), n = nr(d) ? d : _s(e, i, y && d.max || 10, y && d.min || .2, y && "overshoot"in d ? +d.overshoot : c ? 0 : 1, !0), g, C, T, k, L, N, X, I, H;
            i = rr,
            rr = 0,
            H = No(e, i, l, _);
            for (g in i)
                Lo[g] || (C = i[g],
                Tn(C) && (C = C(r, e, o)),
                nr(C) ? L = C : ti(C) && !isNaN(C.velocity) ? L = +C.velocity : a && a.isTracking(g) ? L = a.get(g) : console.warn("ERROR: No velocity was defined for " + e + " property: " + g),
                N = Sn(L, n),
                I = 0,
                T = l(e, g),
                k = bo(T),
                T = parseFloat(T),
                ti(C) && (X = T + N,
                "end"in C && (C = Bo(C, H && g in H ? H : X, C.max, C.min, g, i.radius, L)),
                "max"in C && +C.max < X ? c || C.preventOvershoot ? N = C.max - T : I = C.max - T - N : "min"in C && +C.min > X && (c || C.preventOvershoot ? N = C.min - T : I = C.min - T - N)),
                this._props.push(g),
                this._pt = new vo(this._pt,e,g,T,0,ps,0,u.set(e, g, this)),
                this._pt.u = k || 0,
                this._pt.c1 = N,
                this._pt.c2 = I);
            return t.duration(n),
            ds
        },
        render: function(e, i) {
            var t = i._pt;
            for (e = bn(i.tween._time / i.tween._dur); t; )
                t.set(t.t, t.p, Ds(t.s + t.c1 * e + t.c2 * e * e) + t.u, t.d, e),
                t = t._next
        }
    };
    "track,untrack,isTracking,getVelocity,getByTarget".split(",").forEach(function(s) {
        return Ar[s] = tr[s]
    }),
    ko() && Ke.registerPlugin(Ar);
    function $o(s, e) {
        for (var i = 0; i < e.length; i++) {
            var t = e[i];
            t.enumerable = t.enumerable || !1,
            t.configurable = !0,
            "value"in t && (t.writable = !0),
            Object.defineProperty(s, t.key, t)
        }
    }
    function xs(s, e, i) {
        return e && $o(s.prototype, e),
        i && $o(s, i),
        s
    }
    /*!
 * Observer 3.10.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
    var it, kn, pt, Di, hi, Bi, Yo, gi, or, Xo, Ht, kt, zo = function() {
        return it || typeof window != "undefined" && (it = window.gsap) && it.registerPlugin && it
    }, Wo = 1, Ii = [], we = [], Bt = [], ur = Date.now, On = function(e, i) {
        return i
    }, ys = function() {
        var e = or.core
          , i = e.bridge || {}
          , t = e._scrollers
          , r = e._proxies;
        t.push.apply(t, we),
        r.push.apply(r, Bt),
        we = t,
        Bt = r,
        On = function(a, u) {
            return i[a](u)
        }
    }, ii = function(e, i) {
        return ~Bt.indexOf(e) && Bt[Bt.indexOf(e) + 1][i]
    }, Pr = function(e) {
        return !!~Xo.indexOf(e)
    }, at = function(e, i, t, r, o) {
        return e.addEventListener(i, t, {
            passive: !r,
            capture: !!o
        })
    }, rt = function(e, i, t, r) {
        return e.removeEventListener(i, t, !!r)
    }, Mr = "scrollLeft", Br = "scrollTop", Ho = function() {
        return Ht && Ht.isPressed || we.cache++
    }, Ir = function(e, i) {
        var t = function r(o) {
            if (o || o === 0) {
                Wo && (pt.history.scrollRestoration = "manual");
                var a = Ht && Ht.isPressed;
                o = r.v = Math.round(o) || (Ht && Ht.iOS ? 1 : 0),
                e(o),
                r.cacheID = we.cache,
                a && On("ss", o)
            } else
                (i || we.cache !== r.cacheID || On("ref")) && (r.cacheID = we.cache,
                r.v = e());
            return r.v + r.offset
        };
        return t.offset = 0,
        e && t
    }, nt = {
        s: Mr,
        p: "left",
        p2: "Left",
        os: "right",
        os2: "Right",
        d: "width",
        d2: "Width",
        a: "x",
        sc: Ir(function(s) {
            return arguments.length ? pt.scrollTo(s, Ve.sc()) : pt.pageXOffset || Di[Mr] || hi[Mr] || Bi[Mr] || 0
        })
    }, Ve = {
        s: Br,
        p: "top",
        p2: "Top",
        os: "bottom",
        os2: "Bottom",
        d: "height",
        d2: "Height",
        a: "y",
        op: nt,
        sc: Ir(function(s) {
            return arguments.length ? pt.scrollTo(nt.sc(), s) : pt.pageYOffset || Di[Br] || hi[Br] || Bi[Br] || 0
        })
    }, lt = function(e) {
        return it.utils.toArray(e)[0] || (typeof e == "string" && it.config().nullTargetWarn !== !1 ? console.warn("Element not found:", e) : null)
    }, ri = function(e, i) {
        var t = i.s
          , r = i.sc
          , o = we.indexOf(e)
          , a = r === Ve.sc ? 1 : 2;
        return !~o && (o = we.push(e) - 1),
        we[o + a] || (we[o + a] = Ir(ii(e, t), !0) || (Pr(e) ? r : Ir(function(u) {
            return arguments.length ? e[t] = u : e[t]
        })))
    }, An = function(e, i, t) {
        var r = e
          , o = e
          , a = ur()
          , u = a
          , l = i || 50
          , d = Math.max(500, l * 3)
          , y = function(g, C) {
            var T = ur();
            C || T - a > l ? (o = r,
            r = g,
            u = a,
            a = T) : t ? r += g : r = o + (g - o) / (T - u) * (a - u)
        }
          , c = function() {
            o = r = t ? 0 : r,
            u = a = 0
        }
          , _ = function(g) {
            var C = u
              , T = o
              , k = ur();
            return (g || g === 0) && g !== r && y(g),
            a === u || k - u > d ? 0 : (r + (t ? T : -T)) / ((t ? k : a) - C) * 1e3
        };
        return {
            update: y,
            reset: c,
            getVelocity: _
        }
    }, sr = function(e, i) {
        return i && !e._gsapAllow && e.preventDefault(),
        e.changedTouches ? e.changedTouches[0] : e
    }, Vo = function(e) {
        var i = Math.max.apply(Math, e)
          , t = Math.min.apply(Math, e);
        return Math.abs(i) >= Math.abs(t) ? i : t
    }, Go = function() {
        or = it.core.globals().ScrollTrigger,
        or && or.core && ys()
    }, qo = function(e) {
        return it = e || zo(),
        it && typeof document != "undefined" && document.body && (pt = window,
        Di = document,
        hi = Di.documentElement,
        Bi = Di.body,
        Xo = [pt, Di, hi, Bi],
        it.utils.clamp,
        gi = "onpointerenter"in Bi ? "pointer" : "mouse",
        Yo = Xe.isTouch = pt.matchMedia && pt.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart"in pt || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0,
        kt = Xe.eventTypes = ("ontouchstart"in hi ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown"in hi ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","),
        setTimeout(function() {
            return Wo = 0
        }, 500),
        Go(),
        kn = 1),
        kn
    };
    nt.op = Ve,
    we.cache = 0;
    var Xe = function() {
        function s(i) {
            this.init(i)
        }
        var e = s.prototype;
        return e.init = function(t) {
            kn || qo(it) || console.warn("Please gsap.registerPlugin(Observer)"),
            or || Go();
            var r = t.tolerance
              , o = t.dragMinimum
              , a = t.type
              , u = t.target
              , l = t.lineHeight
              , d = t.debounce
              , y = t.preventDefault
              , c = t.onStop
              , _ = t.onStopDelay
              , n = t.ignore
              , g = t.wheelSpeed
              , C = t.event
              , T = t.onDragStart
              , k = t.onDragEnd
              , L = t.onDrag
              , N = t.onPress
              , X = t.onRelease
              , I = t.onRight
              , H = t.onLeft
              , A = t.onUp
              , U = t.onDown
              , z = t.onChangeX
              , M = t.onChangeY
              , W = t.onChange
              , K = t.onToggleX
              , w = t.onToggleY
              , V = t.onHover
              , De = t.onHoverEnd
              , O = t.onMove
              , R = t.ignoreCheck
              , re = t.isNormalizer
              , b = t.onGestureStart
              , x = t.onGestureEnd
              , Z = t.onWheel
              , ne = t.onEnable
              , Ee = t.onDisable
              , oe = t.onClick
              , fe = t.scrollSpeed
              , Q = t.capture
              , he = t.allowClicks
              , ce = t.lockAxis
              , ct = t.onLockAxis;
            this.target = u = lt(u) || hi,
            this.vars = t,
            n && (n = it.utils.toArray(n)),
            r = r || 0,
            o = o || 0,
            g = g || 1,
            fe = fe || 1,
            a = a || "wheel,touch,pointer",
            d = d !== !1,
            l || (l = parseFloat(pt.getComputedStyle(Bi).lineHeight) || 22);
            var ke, Oe, se, ve, de, te, v, h = this, ee = 0, q = 0, Te = ri(u, nt), tt = ri(u, Ve), Fe = Te(), Ie = tt(), At = ~a.indexOf("touch") && !~a.indexOf("pointer") && kt[0] === "pointerdown", Ne = Pr(u), ge = u.ownerDocument || Di, Je = [0, 0, 0], je = [0, 0, 0], qt = 0, Rt = function() {
                return qt = ur()
            }, wt = function(p, E) {
                return (h.event = p) && n && ~n.indexOf(p.target) || E && At && p.pointerType !== "touch" || R && R(p, E)
            }, Ut = function() {
                h._vx.reset(),
                h._vy.reset(),
                Oe.pause(),
                c && c(h)
            }, Pt = function() {
                var p = h.deltaX = Vo(Je)
                  , E = h.deltaY = Vo(je)
                  , m = Math.abs(p) >= r
                  , S = Math.abs(E) >= r;
                W && (m || S) && W(h, p, E, Je, je),
                m && (I && h.deltaX > 0 && I(h),
                H && h.deltaX < 0 && H(h),
                z && z(h),
                K && h.deltaX < 0 != ee < 0 && K(h),
                ee = h.deltaX,
                Je[0] = Je[1] = Je[2] = 0),
                S && (U && h.deltaY > 0 && U(h),
                A && h.deltaY < 0 && A(h),
                M && M(h),
                w && h.deltaY < 0 != q < 0 && w(h),
                q = h.deltaY,
                je[0] = je[1] = je[2] = 0),
                (ve || se) && (O && O(h),
                ct && te && ct(h),
                se && (L(h),
                se = !1),
                ve = te = !1),
                de && (Z(h),
                de = !1),
                ke = 0
            }, Ft = function(p, E, m) {
                Je[m] += p,
                je[m] += E,
                h._vx.update(p),
                h._vy.update(E),
                d ? ke || (ke = requestAnimationFrame(Pt)) : Pt()
            }, bt = function(p, E) {
                v !== "y" && (Je[2] += p,
                h._vx.update(p, !0)),
                v !== "x" && (je[2] += E,
                h._vy.update(E, !0)),
                ce && !v && (h.axis = v = Math.abs(p) > Math.abs(E) ? "x" : "y",
                te = !0),
                d ? ke || (ke = requestAnimationFrame(Pt)) : Pt()
            }, me = function(p) {
                if (!wt(p, 1)) {
                    p = sr(p, y);
                    var E = p.clientX
                      , m = p.clientY
                      , S = E - h.x
                      , P = m - h.y
                      , B = h.isDragging;
                    h.x = E,
                    h.y = m,
                    (B || Math.abs(h.startX - E) >= o || Math.abs(h.startY - m) >= o) && (L && (se = !0),
                    B || (h.isDragging = !0),
                    bt(S, P),
                    B || T && T(h))
                }
            }, ft = h.onPress = function(D) {
                wt(D, 1) || (h.axis = v = null,
                Oe.pause(),
                h.isPressed = !0,
                D = sr(D),
                ee = q = 0,
                h.startX = h.x = D.clientX,
                h.startY = h.y = D.clientY,
                h._vx.reset(),
                h._vy.reset(),
                at(re ? u : ge, kt[1], me, y, !0),
                h.deltaX = h.deltaY = 0,
                N && N(h))
            }
            , Re = function(p) {
                if (!wt(p, 1)) {
                    rt(re ? u : ge, kt[1], me, !0);
                    var E = h.isDragging && (Math.abs(h.x - h.startX) > 3 || Math.abs(h.y - h.startY) > 3)
                      , m = sr(p);
                    E || (h._vx.reset(),
                    h._vy.reset(),
                    y && he && it.delayedCall(.08, function() {
                        if (ur() - qt > 300 && !p.defaultPrevented) {
                            if (p.target.click)
                                p.target.click();
                            else if (ge.createEvent) {
                                var S = ge.createEvent("MouseEvents");
                                S.initMouseEvent("click", !0, !0, pt, 1, m.screenX, m.screenY, m.clientX, m.clientY, !1, !1, !1, !1, 0, null),
                                p.target.dispatchEvent(S)
                            }
                        }
                    })),
                    h.isDragging = h.isGesturing = h.isPressed = !1,
                    c && !re && Oe.restart(!0),
                    k && E && k(h),
                    X && X(h, E)
                }
            }, et = function(p) {
                return p.touches && p.touches.length > 1 && (h.isGesturing = !0) && b(p, h.isDragging)
            }, $e = function() {
                return (h.isGesturing = !1) || x(h)
            }, Dt = function(p) {
                if (!wt(p)) {
                    var E = Te()
                      , m = tt();
                    Ft((E - Fe) * fe, (m - Ie) * fe, 1),
                    Fe = E,
                    Ie = m,
                    c && Oe.restart(!0)
                }
            }, $t = function(p) {
                if (!wt(p)) {
                    p = sr(p, y),
                    Z && (de = !0);
                    var E = (p.deltaMode === 1 ? l : p.deltaMode === 2 ? pt.innerHeight : 1) * g;
                    Ft(p.deltaX * E, p.deltaY * E, 0),
                    c && !re && Oe.restart(!0)
                }
            }, jt = function(p) {
                if (!wt(p)) {
                    var E = p.clientX
                      , m = p.clientY
                      , S = E - h.x
                      , P = m - h.y;
                    h.x = E,
                    h.y = m,
                    ve = !0,
                    (S || P) && bt(S, P)
                }
            }, Y = function(p) {
                h.event = p,
                V(h)
            }, f = function(p) {
                h.event = p,
                De(h)
            }, F = function(p) {
                return wt(p) || sr(p, y) && oe(h)
            };
            Oe = h._dc = it.delayedCall(_ || .25, Ut).pause(),
            h.deltaX = h.deltaY = 0,
            h._vx = An(0, 50, !0),
            h._vy = An(0, 50, !0),
            h.scrollX = Te,
            h.scrollY = tt,
            h.isDragging = h.isGesturing = h.isPressed = !1,
            h.enable = function(D) {
                return h.isEnabled || (at(Ne ? ge : u, "scroll", Ho),
                a.indexOf("scroll") >= 0 && at(Ne ? ge : u, "scroll", Dt, y, Q),
                a.indexOf("wheel") >= 0 && at(u, "wheel", $t, y, Q),
                (a.indexOf("touch") >= 0 && Yo || a.indexOf("pointer") >= 0) && (at(u, kt[0], ft, y, Q),
                at(ge, kt[2], Re),
                at(ge, kt[3], Re),
                he && at(u, "click", Rt, !1, !0),
                oe && at(u, "click", F),
                b && at(ge, "gesturestart", et),
                x && at(ge, "gestureend", $e),
                V && at(u, gi + "enter", Y),
                De && at(u, gi + "leave", f),
                O && at(u, gi + "move", jt)),
                h.isEnabled = !0,
                D && D.type && ft(D),
                ne && ne(h)),
                h
            }
            ,
            h.disable = function() {
                h.isEnabled && (Ii.filter(function(D) {
                    return D !== h && Pr(D.target)
                }).length || rt(Ne ? ge : u, "scroll", Ho),
                h.isPressed && (h._vx.reset(),
                h._vy.reset(),
                rt(re ? u : ge, kt[1], me, !0)),
                rt(Ne ? ge : u, "scroll", Dt, Q),
                rt(u, "wheel", $t, Q),
                rt(u, kt[0], ft, Q),
                rt(ge, kt[2], Re),
                rt(ge, kt[3], Re),
                rt(u, "click", Rt, !0),
                rt(u, "click", F),
                rt(ge, "gesturestart", et),
                rt(ge, "gestureend", $e),
                rt(u, gi + "enter", Y),
                rt(u, gi + "leave", f),
                rt(u, gi + "move", jt),
                h.isEnabled = h.isPressed = h.isDragging = !1,
                Ee && Ee(h))
            }
            ,
            h.kill = function() {
                h.disable();
                var D = Ii.indexOf(h);
                D >= 0 && Ii.splice(D, 1),
                Ht === h && (Ht = 0)
            }
            ,
            Ii.push(h),
            re && Pr(u) && (Ht = h),
            h.enable(C)
        }
        ,
        xs(s, [{
            key: "velocityX",
            get: function() {
                return this._vx.getVelocity()
            }
        }, {
            key: "velocityY",
            get: function() {
                return this._vy.getVelocity()
            }
        }]),
        s
    }();
    Xe.version = "3.10.4",
    Xe.create = function(s) {
        return new Xe(s)
    }
    ,
    Xe.register = qo,
    Xe.getAll = function() {
        return Ii.slice()
    }
    ,
    Xe.getById = function(s) {
        return Ii.filter(function(e) {
            return e.vars.id === s
        })[0]
    }
    ,
    zo() && it.registerPlugin(Xe);
    /*!
 * ScrollTrigger 3.10.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
    var J, _i, pe, Pe, Vt, Me, Uo, Lr, Nr, Li, Rr, $r, Qe, Yr, Pn, ot, jo, Ko, Ni, Qo, Mn, Zo, yt, Jo, eu, tu, xi, Bn, ar = 1, ut = Date.now, In = ut(), Et = 0, Xr = 0, iu = function() {
        return Yr = 1
    }, ru = function() {
        return Yr = 0
    }, ni = function(e) {
        return e
    }, lr = function(e) {
        return Math.round(e * 1e5) / 1e5 || 0
    }, nu = function() {
        return typeof window != "undefined"
    }, ou = function() {
        return J || nu() && (J = window.gsap) && J.registerPlugin && J
    }, yi = function(e) {
        return !!~Uo.indexOf(e)
    }, uu = function(e) {
        return ii(e, "getBoundingClientRect") || (yi(e) ? function() {
            return nn.width = pe.innerWidth,
            nn.height = pe.innerHeight,
            nn
        }
        : function() {
            return Gt(e)
        }
        )
    }, Es = function(e, i, t) {
        var r = t.d
          , o = t.d2
          , a = t.a;
        return (a = ii(e, "getBoundingClientRect")) ? function() {
            return a()[r]
        }
        : function() {
            return (i ? pe["inner" + o] : e["client" + o]) || 0
        }
    }, ms = function(e, i) {
        return !i || ~Bt.indexOf(e) ? uu(e) : function() {
            return nn
        }
    }, oi = function(e, i) {
        var t = i.s
          , r = i.d2
          , o = i.d
          , a = i.a;
        return (t = "scroll" + r) && (a = ii(e, t)) ? a() - uu(e)()[o] : yi(e) ? (Vt[t] || Me[t]) - (pe["inner" + r] || Vt["client" + r] || Me["client" + r]) : e[t] - e["offset" + r]
    }, zr = function(e, i) {
        for (var t = 0; t < Ni.length; t += 3)
            (!i || ~i.indexOf(Ni[t + 1])) && e(Ni[t], Ni[t + 1], Ni[t + 2])
    }, It = function(e) {
        return typeof e == "string"
    }, Ot = function(e) {
        return typeof e == "function"
    }, cr = function(e) {
        return typeof e == "number"
    }, Wr = function(e) {
        return typeof e == "object"
    }, Hr = function(e) {
        return Ot(e) && e()
    }, su = function(e, i) {
        return function() {
            var t = Hr(e)
              , r = Hr(i);
            return function() {
                Hr(t),
                Hr(r)
            }
        }
    }, fr = function(e, i, t) {
        return e && e.progress(i ? 0 : 1) && t && e.pause()
    }, Ln = function(e, i) {
        if (e.enabled) {
            var t = i(e);
            t && t.totalTime && (e.callbackAnimation = t)
        }
    }, Ri = Math.abs, au = "left", lu = "top", Nn = "right", Rn = "bottom", Ei = "width", mi = "height", dr = "Right", pr = "Left", Dr = "Top", hr = "Bottom", ze = "padding", mt = "margin", $i = "Width", $n = "Height", st = "px", Lt = function(e) {
        return pe.getComputedStyle(e)
    }, Cs = function(e) {
        var i = Lt(e).position;
        e.style.position = i === "absolute" || i === "fixed" ? i : "relative"
    }, cu = function(e, i) {
        for (var t in i)
            t in e || (e[t] = i[t]);
        return e
    }, Gt = function(e, i) {
        var t = i && Lt(e)[Pn] !== "matrix(1, 0, 0, 1, 0, 0)" && J.to(e, {
            x: 0,
            y: 0,
            xPercent: 0,
            yPercent: 0,
            rotation: 0,
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            skewX: 0,
            skewY: 0
        }).progress(1)
          , r = e.getBoundingClientRect();
        return t && t.progress(0).kill(),
        r
    }, Yn = function(e, i) {
        var t = i.d2;
        return e["offset" + t] || e["client" + t] || 0
    }, fu = function(e) {
        var i = [], t = e.labels, r = e.duration(), o;
        for (o in t)
            i.push(t[o] / r);
        return i
    }, ws = function(e) {
        return function(i) {
            return J.utils.snap(fu(e), i)
        }
    }, Xn = function(e) {
        var i = J.utils.snap(e)
          , t = Array.isArray(e) && e.slice(0).sort(function(r, o) {
            return r - o
        });
        return t ? function(r, o, a) {
            a === void 0 && (a = .001);
            var u;
            if (!o)
                return i(r);
            if (o > 0) {
                for (r -= a,
                u = 0; u < t.length; u++)
                    if (t[u] >= r)
                        return t[u];
                return t[u - 1]
            } else
                for (u = t.length,
                r += a; u--; )
                    if (t[u] <= r)
                        return t[u];
            return t[0]
        }
        : function(r, o, a) {
            a === void 0 && (a = .001);
            var u = i(r);
            return !o || Math.abs(u - r) < a || u - r < 0 == o < 0 ? u : i(o < 0 ? r - e : r + e)
        }
    }, Fs = function(e) {
        return function(i, t) {
            return Xn(fu(e))(i, t.direction)
        }
    }, Vr = function(e, i, t, r) {
        return t.split(",").forEach(function(o) {
            return e(i, o, r)
        })
    }, Ze = function(e, i, t, r, o) {
        return e.addEventListener(i, t, {
            passive: !r,
            capture: !!o
        })
    }, Ue = function(e, i, t, r) {
        return e.removeEventListener(i, t, !!r)
    }, Gr = function(e, i, t) {
        return t && t.wheelHandler && e(i, "wheel", t)
    }, du = {
        startColor: "green",
        endColor: "red",
        indent: 0,
        fontSize: "16px",
        fontWeight: "normal"
    }, qr = {
        toggleActions: "play",
        anticipatePin: 0
    }, Ur = {
        top: 0,
        left: 0,
        center: .5,
        bottom: 1,
        right: 1
    }, jr = function(e, i) {
        if (It(e)) {
            var t = e.indexOf("=")
              , r = ~t ? +(e.charAt(t - 1) + 1) * parseFloat(e.substr(t + 1)) : 0;
            ~t && (e.indexOf("%") > t && (r *= i / 100),
            e = e.substr(0, t - 1)),
            e = r + (e in Ur ? Ur[e] * i : ~e.indexOf("%") ? parseFloat(e) * i / 100 : parseFloat(e) || 0)
        }
        return e
    }, Kr = function(e, i, t, r, o, a, u, l) {
        var d = o.startColor
          , y = o.endColor
          , c = o.fontSize
          , _ = o.indent
          , n = o.fontWeight
          , g = Pe.createElement("div")
          , C = yi(t) || ii(t, "pinType") === "fixed"
          , T = e.indexOf("scroller") !== -1
          , k = C ? Me : t
          , L = e.indexOf("start") !== -1
          , N = L ? d : y
          , X = "border-color:" + N + ";font-size:" + c + ";color:" + N + ";font-weight:" + n + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
        return X += "position:" + ((T || l) && C ? "fixed;" : "absolute;"),
        (T || l || !C) && (X += (r === Ve ? Nn : Rn) + ":" + (a + parseFloat(_)) + "px;"),
        u && (X += "box-sizing:border-box;text-align:left;width:" + u.offsetWidth + "px;"),
        g._isStart = L,
        g.setAttribute("class", "gsap-marker-" + e + (i ? " marker-" + i : "")),
        g.style.cssText = X,
        g.innerText = i || i === 0 ? e + "-" + i : e,
        k.children[0] ? k.insertBefore(g, k.children[0]) : k.appendChild(g),
        g._offset = g["offset" + r.op.d2],
        Qr(g, 0, r, L),
        g
    }, Qr = function(e, i, t, r) {
        var o = {
            display: "block"
        }
          , a = t[r ? "os2" : "p2"]
          , u = t[r ? "p2" : "os2"];
        e._isFlipped = r,
        o[t.a + "Percent"] = r ? -100 : 0,
        o[t.a] = r ? "1px" : 0,
        o["border" + a + $i] = 1,
        o["border" + u + $i] = 0,
        o[t.p] = i + "px",
        J.set(e, o)
    }, xe = [], zn = {}, Wn, pu = function() {
        return ut() - Et > 34 && yr()
    }, Yi = function() {
        (!yt || !yt.isPressed || yt.startX > Me.clientWidth) && (we.cache++,
        Wn || (Wn = requestAnimationFrame(yr)),
        Et || Ci("scrollStart"),
        Et = ut())
    }, Du = function() {
        tu = pe.innerWidth,
        eu = pe.innerHeight
    }, gr = function() {
        we.cache++,
        !Qe && !Zo && !Pe.fullscreenElement && !Pe.webkitFullscreenElement && (!Jo || tu !== pe.innerWidth || Math.abs(pe.innerHeight - eu) > pe.innerHeight * .25) && Lr.restart(!0)
    }, _r = {}, bs = [], Be = [], Xi, hu, gu = function(e) {
        var i = J.ticker.frame, t = [], r = 0, o;
        if (hu !== i || ar) {
            for (Zr(); r < Be.length; r += 4)
                o = pe.matchMedia(Be[r]).matches,
                o !== Be[r + 3] && (Be[r + 3] = o,
                o ? t.push(r) : Zr(1, Be[r]) || Ot(Be[r + 2]) && Be[r + 2]());
            for (xu(),
            r = 0; r < t.length; r++)
                o = t[r],
                Xi = Be[o],
                Be[o + 2] = Be[o + 1](e);
            Xi = 0,
            _i && zi(0, 1),
            hu = i,
            Ci("matchMedia")
        }
    }, _u = function s() {
        return Ue(ae, "scrollEnd", s) || zi(!0)
    }, Ci = function(e) {
        return _r[e] && _r[e].map(function(i) {
            return i()
        }) || bs
    }, Ct = [], xu = function(e) {
        for (var i = 0; i < Ct.length; i += 5)
            (!e || Ct[i + 4] === e) && (Ct[i].style.cssText = Ct[i + 1],
            Ct[i].getBBox && Ct[i].setAttribute("transform", Ct[i + 2] || ""),
            Ct[i + 3].uncache = 1)
    }, Zr = function(e, i) {
        var t;
        for (ot = 0; ot < xe.length; ot++)
            t = xe[ot],
            (!i || t.media === i) && (e ? t.kill(1) : t.revert());
        i && xu(i),
        i || Ci("revert")
    }, yu = function() {
        return we.cache++ && we.forEach(function(e) {
            return typeof e == "function" && (e.rec = 0)
        })
    }, xr, Jr = 0, zi = function(e, i) {
        if (Et && !e) {
            Ze(ae, "scrollEnd", _u);
            return
        }
        xr = !0;
        var t = Ci("refreshInit");
        Qo && ae.sort(),
        i || Zr(),
        xe.slice(0).forEach(function(r) {
            return r.refresh()
        }),
        xe.forEach(function(r) {
            return r.vars.end === "max" && r.setPositions(r.start, oi(r.scroller, r._dir))
        }),
        t.forEach(function(r) {
            return r && r.render && r.render(-1)
        }),
        yu(),
        Lr.pause(),
        Jr++,
        xr = !1,
        Ci("refresh")
    }, Eu = 0, en = 1, wi, yr = function() {
        if (!xr) {
            ae.isUpdating = !0,
            wi && wi.update(0);
            var e = xe.length
              , i = ut()
              , t = i - In >= 50
              , r = e && xe[0].scroll();
            if (en = Eu > r ? -1 : 1,
            Eu = r,
            t && (Et && !Yr && i - Et > 200 && (Et = 0,
            Ci("scrollEnd")),
            Rr = In,
            In = i),
            en < 0) {
                for (ot = e; ot-- > 0; )
                    xe[ot] && xe[ot].update(0, t);
                en = 1
            } else
                for (ot = 0; ot < e; ot++)
                    xe[ot] && xe[ot].update(0, t);
            ae.isUpdating = !1
        }
        Wn = 0
    }, Hn = [au, lu, Rn, Nn, mt + hr, mt + dr, mt + Dr, mt + pr, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"], tn = Hn.concat([Ei, mi, "boxSizing", "max" + $i, "max" + $n, "position", mt, ze, ze + Dr, ze + dr, ze + hr, ze + pr]), vs = function(e, i, t) {
        Er(t);
        var r = e._gsap;
        if (r.spacerIsNative)
            Er(r.spacerState);
        else if (e.parentNode === i) {
            var o = i.parentNode;
            o && (o.insertBefore(e, i),
            o.removeChild(i))
        }
    }, Vn = function(e, i, t, r) {
        if (e.parentNode !== i) {
            for (var o = Hn.length, a = i.style, u = e.style, l; o--; )
                l = Hn[o],
                a[l] = t[l];
            a.position = t.position === "absolute" ? "absolute" : "relative",
            t.display === "inline" && (a.display = "inline-block"),
            u[Rn] = u[Nn] = a.flexBasis = "auto",
            a.overflow = "visible",
            a.boxSizing = "border-box",
            a[Ei] = Yn(e, nt) + st,
            a[mi] = Yn(e, Ve) + st,
            a[ze] = u[mt] = u[lu] = u[au] = "0",
            Er(r),
            u[Ei] = u["max" + $i] = t[Ei],
            u[mi] = u["max" + $n] = t[mi],
            u[ze] = t[ze],
            e.parentNode.insertBefore(i, e),
            i.appendChild(e)
        }
    }, Ts = /([A-Z])/g, Er = function(e) {
        if (e) {
            var i = e.t.style, t = e.length, r = 0, o, a;
            for ((e.t._gsap || J.core.getCache(e.t)).uncache = 1; r < t; r += 2)
                a = e[r + 1],
                o = e[r],
                a ? i[o] = a : i[o] && i.removeProperty(o.replace(Ts, "-$1").toLowerCase())
        }
    }, rn = function(e) {
        for (var i = tn.length, t = e.style, r = [], o = 0; o < i; o++)
            r.push(tn[o], t[tn[o]]);
        return r.t = e,
        r
    }, Ss = function(e, i, t) {
        for (var r = [], o = e.length, a = t ? 8 : 0, u; a < o; a += 2)
            u = e[a],
            r.push(u, u in i ? i[u] : e[a + 1]);
        return r.t = e.t,
        r
    }, nn = {
        left: 0,
        top: 0
    }, mu = function(e, i, t, r, o, a, u, l, d, y, c, _, n) {
        Ot(e) && (e = e(l)),
        It(e) && e.substr(0, 3) === "max" && (e = _ + (e.charAt(4) === "=" ? jr("0" + e.substr(3), t) : 0));
        var g = n ? n.time() : 0, C, T, k;
        if (n && n.seek(0),
        cr(e))
            u && Qr(u, t, r, !0);
        else {
            Ot(i) && (i = i(l));
            var L = e.split(" "), N, X, I, H;
            k = lt(i) || Me,
            N = Gt(k) || {},
            (!N || !N.left && !N.top) && Lt(k).display === "none" && (H = k.style.display,
            k.style.display = "block",
            N = Gt(k),
            H ? k.style.display = H : k.style.removeProperty("display")),
            X = jr(L[0], N[r.d]),
            I = jr(L[1] || "0", t),
            e = N[r.p] - d[r.p] - y + X + o - I,
            u && Qr(u, I, r, t - I < 20 || u._isStart && I > 20),
            t -= t - I
        }
        if (a) {
            var A = e + t
              , U = a._isStart;
            C = "scroll" + r.d2,
            Qr(a, A, r, U && A > 20 || !U && (c ? Math.max(Me[C], Vt[C]) : a.parentNode[C]) <= A + 1),
            c && (d = Gt(u),
            c && (a.style[r.op.p] = d[r.op.p] - r.op.m - a._offset + st))
        }
        return n && k && (C = Gt(k),
        n.seek(_),
        T = Gt(k),
        n._caScrollDist = C[r.p] - T[r.p],
        e = e / n._caScrollDist * _),
        n && n.seek(g),
        n ? e : Math.round(e)
    }, ks = /(webkit|moz|length|cssText|inset)/i, Cu = function(e, i, t, r) {
        if (e.parentNode !== i) {
            var o = e.style, a, u;
            if (i === Me) {
                e._stOrig = o.cssText,
                u = Lt(e);
                for (a in u)
                    !+a && !ks.test(a) && u[a] && typeof o[a] == "string" && a !== "0" && (o[a] = u[a]);
                o.top = t,
                o.left = r
            } else
                o.cssText = e._stOrig;
            J.core.getCache(e).uncache = 1,
            i.appendChild(e)
        }
    }, wu = function(e, i) {
        var t = ri(e, i), r = "_scroll" + i.p2, o, a, u = function l(d, y, c, _, n) {
            var g = l.tween
              , C = y.onComplete
              , T = {};
            return c = c || t(),
            n = _ && n || 0,
            _ = _ || d - c,
            g && g.kill(),
            o = Math.round(c),
            y[r] = d,
            y.modifiers = T,
            T[r] = function(k) {
                return k = lr(t()),
                k !== o && k !== a && Math.abs(k - o) > 2 && Math.abs(k - a) > 2 ? (g.kill(),
                l.tween = 0) : k = c + _ * g.ratio + n * g.ratio * g.ratio,
                a = o,
                o = lr(k)
            }
            ,
            y.onComplete = function() {
                l.tween = 0,
                C && C.call(g)
            }
            ,
            g = l.tween = J.to(e, y),
            g
        };
        return e[r] = t,
        t.wheelHandler = function() {
            return u.tween && u.tween.kill() && (u.tween = 0)
        }
        ,
        Ze(e, "wheel", t.wheelHandler),
        u
    }, ae = function() {
        function s(i, t) {
            _i || s.register(J) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
            this.init(i, t)
        }
        var e = s.prototype;
        return e.init = function(t, r) {
            if (this.progress = this.start = 0,
            this.vars && this.kill(!0, !0),
            !Xr) {
                this.update = this.refresh = this.kill = ni;
                return
            }
            t = cu(It(t) || cr(t) || t.nodeType ? {
                trigger: t
            } : t, qr);
            var o = t, a = o.onUpdate, u = o.toggleClass, l = o.id, d = o.onToggle, y = o.onRefresh, c = o.scrub, _ = o.trigger, n = o.pin, g = o.pinSpacing, C = o.invalidateOnRefresh, T = o.anticipatePin, k = o.onScrubComplete, L = o.onSnapComplete, N = o.once, X = o.snap, I = o.pinReparent, H = o.pinSpacer, A = o.containerAnimation, U = o.fastScrollEnd, z = o.preventOverlaps, M = t.horizontal || t.containerAnimation && t.horizontal !== !1 ? nt : Ve, W = !c && c !== 0, K = lt(t.scroller || pe), w = J.core.getCache(K), V = yi(K), De = ("pinType"in t ? t.pinType : ii(K, "pinType") || V && "fixed") === "fixed", O = [t.onEnter, t.onLeave, t.onEnterBack, t.onLeaveBack], R = W && t.toggleActions.split(" "), re = "markers"in t ? t.markers : qr.markers, b = V ? 0 : parseFloat(Lt(K)["border" + M.p2 + $i]) || 0, x = this, Z = t.onRefreshInit && function() {
                return t.onRefreshInit(x)
            }
            , ne = Es(K, V, M), Ee = ms(K, V), oe = 0, fe = 0, Q = ri(K, M), he, ce, ct, ke, Oe, se, ve, de, te, v, h, ee, q, Te, tt, Fe, Ie, At, Ne, ge, Je, je, qt, Rt, wt, Ut, Pt, Ft, bt, me, ft, Re, et, $e, Dt, $t, jt, Y;
            if (x.media = Xi,
            x._dir = M,
            T *= 45,
            x.scroller = K,
            x.scroll = A ? A.time.bind(A) : Q,
            ke = Q(),
            x.vars = t,
            r = r || t.animation,
            "refreshPriority"in t && (Qo = 1,
            t.refreshPriority === -9999 && (wi = x)),
            w.tweenScroll = w.tweenScroll || {
                top: wu(K, Ve),
                left: wu(K, nt)
            },
            x.tweenTo = he = w.tweenScroll[M.p],
            x.scrubDuration = function(p) {
                ft = cr(p) && p,
                ft ? me ? me.duration(p) : me = J.to(r, {
                    ease: "expo",
                    totalProgress: "+=0.001",
                    duration: ft,
                    paused: !0,
                    onComplete: function() {
                        return k && k(x)
                    }
                }) : (me && me.progress(1).kill(),
                me = 0)
            }
            ,
            r && (r.vars.lazy = !1,
            r._initted || r.vars.immediateRender !== !1 && t.immediateRender !== !1 && r.render(0, !0, !0),
            x.animation = r.pause(),
            r.scrollTrigger = x,
            x.scrubDuration(c),
            Ft = 0,
            l || (l = r.vars.id)),
            xe.push(x),
            X && ((!Wr(X) || X.push) && (X = {
                snapTo: X
            }),
            "scrollBehavior"in Me.style && J.set(V ? [Me, Vt] : K, {
                scrollBehavior: "auto"
            }),
            ct = Ot(X.snapTo) ? X.snapTo : X.snapTo === "labels" ? ws(r) : X.snapTo === "labelsDirectional" ? Fs(r) : X.directional !== !1 ? function(p, E) {
                return Xn(X.snapTo)(p, ut() - fe < 500 ? 0 : E.direction)
            }
            : J.utils.snap(X.snapTo),
            Re = X.duration || {
                min: .1,
                max: 2
            },
            Re = Wr(Re) ? Li(Re.min, Re.max) : Li(Re, Re),
            et = J.delayedCall(X.delay || ft / 2 || .1, function() {
                var p = Q()
                  , E = ut() - fe < 500
                  , m = he.tween;
                if ((E || Math.abs(x.getVelocity()) < 10) && !m && !Yr && oe !== p) {
                    var S = (p - se) / q
                      , P = r && !W ? r.totalProgress() : S
                      , B = E ? 0 : (P - bt) / (ut() - Rr) * 1e3 || 0
                      , G = J.utils.clamp(-S, 1 - S, Ri(B / 2) * B / .185)
                      , j = S + (X.inertia === !1 ? 0 : G)
                      , ye = Li(0, 1, ct(j, x))
                      , ie = Math.round(se + ye * q)
                      , Se = X
                      , Ae = Se.onStart
                      , Ce = Se.onInterrupt
                      , le = Se.onComplete;
                    if (p <= ve && p >= se && ie !== p) {
                        if (m && !m._initted && m.data <= Ri(ie - p))
                            return;
                        X.inertia === !1 && (G = ye - S),
                        he(ie, {
                            duration: Re(Ri(Math.max(Ri(j - P), Ri(ye - P)) * .185 / B / .05 || 0)),
                            ease: X.ease || "power3",
                            data: Ri(ie - p),
                            onInterrupt: function() {
                                return et.restart(!0) && Ce && Ce(x)
                            },
                            onComplete: function() {
                                x.update(),
                                oe = Q(),
                                Ft = bt = r && !W ? r.totalProgress() : x.progress,
                                L && L(x),
                                le && le(x)
                            }
                        }, p, G * q, ie - p - G * q),
                        Ae && Ae(x, he.tween)
                    }
                } else
                    x.isActive && oe !== p && et.restart(!0)
            }).pause()),
            l && (zn[l] = x),
            _ = x.trigger = lt(_ || n),
            Y = _ && _._gsap && _._gsap.stRevert,
            Y && (Y = Y(x)),
            n = n === !0 ? _ : lt(n),
            It(u) && (u = {
                targets: _,
                className: u
            }),
            n && (g === !1 || g === mt || (g = !g && Lt(n.parentNode).display === "flex" ? !1 : ze),
            x.pin = n,
            t.force3D !== !1 && J.set(n, {
                force3D: !0
            }),
            ce = J.core.getCache(n),
            ce.spacer ? Te = ce.pinState : (H && (H = lt(H),
            H && !H.nodeType && (H = H.current || H.nativeElement),
            ce.spacerIsNative = !!H,
            H && (ce.spacerState = rn(H))),
            ce.spacer = Ie = H || Pe.createElement("div"),
            Ie.classList.add("pin-spacer"),
            l && Ie.classList.add("pin-spacer-" + l),
            ce.pinState = Te = rn(n)),
            x.spacer = Ie = ce.spacer,
            Pt = Lt(n),
            qt = Pt[g + M.os2],
            Ne = J.getProperty(n),
            ge = J.quickSetter(n, M.a, st),
            Vn(n, Ie, Pt),
            Fe = rn(n)),
            re) {
                ee = Wr(re) ? cu(re, du) : du,
                v = Kr("scroller-start", l, K, M, ee, 0),
                h = Kr("scroller-end", l, K, M, ee, 0, v),
                At = v["offset" + M.op.d2];
                var f = lt(ii(K, "content") || K);
                de = this.markerStart = Kr("start", l, f, M, ee, At, 0, A),
                te = this.markerEnd = Kr("end", l, f, M, ee, At, 0, A),
                A && (jt = J.quickSetter([de, te], M.a, st)),
                !De && !(Bt.length && ii(K, "fixedMarkers") === !0) && (Cs(V ? Me : K),
                J.set([v, h], {
                    force3D: !0
                }),
                wt = J.quickSetter(v, M.a, st),
                Ut = J.quickSetter(h, M.a, st))
            }
            if (A) {
                var F = A.vars.onUpdate
                  , D = A.vars.onUpdateParams;
                A.eventCallback("onUpdate", function() {
                    x.update(0, 0, 1),
                    F && F.apply(D || [])
                })
            }
            x.previous = function() {
                return xe[xe.indexOf(x) - 1]
            }
            ,
            x.next = function() {
                return xe[xe.indexOf(x) + 1]
            }
            ,
            x.revert = function(p) {
                var E = p !== !1 || !x.enabled
                  , m = Qe;
                E !== x.isReverted && (E && (x.scroll.rec || !Qe || !xr || (x.scroll.rec = Q()),
                Dt = Math.max(Q(), x.scroll.rec || 0),
                $e = x.progress,
                $t = r && r.progress()),
                de && [de, te, v, h].forEach(function(S) {
                    return S.style.display = E ? "none" : "block"
                }),
                E && (Qe = 1),
                x.update(E),
                Qe = m,
                n && (E ? vs(n, Ie, Te) : (!I || !x.isActive) && Vn(n, Ie, Lt(n), Rt)),
                x.isReverted = E)
            }
            ,
            x.refresh = function(p, E) {
                if (!((Qe || !x.enabled) && !E)) {
                    if (n && p && Et) {
                        Ze(s, "scrollEnd", _u);
                        return
                    }
                    !xr && Z && Z(x),
                    Qe = 1,
                    fe = ut(),
                    he.tween && (he.tween.kill(),
                    he.tween = 0),
                    me && me.pause(),
                    C && r && r.time(-.01, !0).invalidate(),
                    x.isReverted || x.revert();
                    for (var m = ne(), S = Ee(), P = A ? A.duration() : oi(K, M), B = 0, G = 0, j = t.end, ye = t.endTrigger || _, ie = t.start || (t.start === 0 || !_ ? 0 : n ? "0 0" : "0 100%"), Se = x.pinnedContainer = t.pinnedContainer && lt(t.pinnedContainer), Ae = _ && Math.max(0, xe.indexOf(x)) || 0, Ce = Ae, le, ue, Yt, Ge, qe, We, Kt, Kn, $u, mr; Ce--; )
                        We = xe[Ce],
                        We.end || We.refresh(0, 1) || (Qe = 1),
                        Kt = We.pin,
                        Kt && (Kt === _ || Kt === n) && !We.isReverted && (mr || (mr = []),
                        mr.unshift(We),
                        We.revert()),
                        We !== xe[Ce] && (Ae--,
                        Ce--);
                    for (Ot(ie) && (ie = ie(x)),
                    se = mu(ie, _, m, M, Q(), de, v, x, S, b, De, P, A) || (n ? -.001 : 0),
                    Ot(j) && (j = j(x)),
                    It(j) && !j.indexOf("+=") && (~j.indexOf(" ") ? j = (It(ie) ? ie.split(" ")[0] : "") + j : (B = jr(j.substr(2), m),
                    j = It(ie) ? ie : se + B,
                    ye = _)),
                    ve = Math.max(se, mu(j || (ye ? "100% 0" : P), ye, m, M, Q() + B, te, h, x, S, b, De, P, A)) || -.001,
                    q = ve - se || (se -= .01) && .001,
                    B = 0,
                    Ce = Ae; Ce--; )
                        We = xe[Ce],
                        Kt = We.pin,
                        Kt && We.start - We._pinPush < se && !A && We.end > 0 && (le = We.end - We.start,
                        (Kt === _ || Kt === Se) && !cr(ie) && (B += le * (1 - We.progress)),
                        Kt === n && (G += le));
                    if (se += B,
                    ve += B,
                    x._pinPush = G,
                    de && B && (le = {},
                    le[M.a] = "+=" + B,
                    Se && (le[M.p] = "-=" + Q()),
                    J.set([de, te], le)),
                    n)
                        le = Lt(n),
                        Ge = M === Ve,
                        Yt = Q(),
                        Je = parseFloat(Ne(M.a)) + G,
                        !P && ve > 1 && ((V ? Me : K).style["overflow-" + M.a] = "scroll"),
                        Vn(n, Ie, le),
                        Fe = rn(n),
                        ue = Gt(n, !0),
                        Kn = De && ri(K, Ge ? nt : Ve)(),
                        g && (Rt = [g + M.os2, q + G + st],
                        Rt.t = Ie,
                        Ce = g === ze ? Yn(n, M) + q + G : 0,
                        Ce && Rt.push(M.d, Ce + st),
                        Er(Rt),
                        De && Q(Dt)),
                        De && (qe = {
                            top: ue.top + (Ge ? Yt - se : Kn) + st,
                            left: ue.left + (Ge ? Kn : Yt - se) + st,
                            boxSizing: "border-box",
                            position: "fixed"
                        },
                        qe[Ei] = qe["max" + $i] = Math.ceil(ue.width) + st,
                        qe[mi] = qe["max" + $n] = Math.ceil(ue.height) + st,
                        qe[mt] = qe[mt + Dr] = qe[mt + dr] = qe[mt + hr] = qe[mt + pr] = "0",
                        qe[ze] = le[ze],
                        qe[ze + Dr] = le[ze + Dr],
                        qe[ze + dr] = le[ze + dr],
                        qe[ze + hr] = le[ze + hr],
                        qe[ze + pr] = le[ze + pr],
                        tt = Ss(Te, qe, I)),
                        r ? ($u = r._initted,
                        Mn(1),
                        r.render(r.duration(), !0, !0),
                        je = Ne(M.a) - Je + q + G,
                        q !== je && De && tt.splice(tt.length - 2, 2),
                        r.render(0, !0, !0),
                        $u || r.invalidate(),
                        Mn(0)) : je = q;
                    else if (_ && Q() && !A)
                        for (ue = _.parentNode; ue && ue !== Me; )
                            ue._pinOffset && (se -= ue._pinOffset,
                            ve -= ue._pinOffset),
                            ue = ue.parentNode;
                    mr && mr.forEach(function(Vs) {
                        return Vs.revert(!1)
                    }),
                    x.start = se,
                    x.end = ve,
                    ke = Oe = Q(),
                    A || (ke < Dt && Q(Dt),
                    x.scroll.rec = 0),
                    x.revert(!1),
                    et && (oe = -1,
                    x.isActive && Q(se + q * $e),
                    et.restart(!0)),
                    Qe = 0,
                    r && W && (r._initted || $t) && r.progress() !== $t && r.progress($t, !0).render(r.time(), !0, !0),
                    ($e !== x.progress || A) && (r && !W && r.totalProgress($e, !0),
                    x.progress = $e,
                    x.update(0, 0, 1)),
                    n && g && (Ie._pinOffset = Math.round(x.progress * je)),
                    y && y(x)
                }
            }
            ,
            x.getVelocity = function() {
                return (Q() - Oe) / (ut() - Rr) * 1e3 || 0
            }
            ,
            x.endAnimation = function() {
                fr(x.callbackAnimation),
                r && (me ? me.progress(1) : r.paused() ? W || fr(r, x.direction < 0, 1) : fr(r, r.reversed()))
            }
            ,
            x.labelToScroll = function(p) {
                return r && r.labels && (se || x.refresh() || se) + r.labels[p] / r.duration() * q || 0
            }
            ,
            x.getTrailing = function(p) {
                var E = xe.indexOf(x)
                  , m = x.direction > 0 ? xe.slice(0, E).reverse() : xe.slice(E + 1);
                return (It(p) ? m.filter(function(S) {
                    return S.vars.preventOverlaps === p
                }) : m).filter(function(S) {
                    return x.direction > 0 ? S.end <= se : S.start >= ve
                })
            }
            ,
            x.update = function(p, E, m) {
                if (!(A && !m && !p)) {
                    var S = x.scroll(), P = p ? 0 : (S - se) / q, B = P < 0 ? 0 : P > 1 ? 1 : P || 0, G = x.progress, j, ye, ie, Se, Ae, Ce, le, ue;
                    if (E && (Oe = ke,
                    ke = A ? Q() : S,
                    X && (bt = Ft,
                    Ft = r && !W ? r.totalProgress() : B)),
                    T && !B && n && !Qe && !ar && Et && se < S + (S - Oe) / (ut() - Rr) * T && (B = 1e-4),
                    B !== G && x.enabled) {
                        if (j = x.isActive = !!B && B < 1,
                        ye = !!G && G < 1,
                        Ce = j !== ye,
                        Ae = Ce || !!B != !!G,
                        x.direction = B > G ? 1 : -1,
                        x.progress = B,
                        Ae && !Qe && (ie = B && !G ? 0 : B === 1 ? 1 : G === 1 ? 2 : 3,
                        W && (Se = !Ce && R[ie + 1] !== "none" && R[ie + 1] || R[ie],
                        ue = r && (Se === "complete" || Se === "reset" || Se in r))),
                        z && (Ce || ue) && (ue || c || !r) && (Ot(z) ? z(x) : x.getTrailing(z).forEach(function(We) {
                            return We.endAnimation()
                        })),
                        W || (me && !Qe && !ar ? ((A || wi && wi !== x) && me.render(me._dp._time - me._start),
                        me.resetTo ? me.resetTo("totalProgress", B, r._tTime / r._tDur) : (me.vars.totalProgress = B,
                        me.invalidate().restart())) : r && r.totalProgress(B, !!Qe)),
                        n) {
                            if (p && g && (Ie.style[g + M.os2] = qt),
                            !De)
                                ge(lr(Je + je * B));
                            else if (Ae) {
                                if (le = !p && B > G && ve + 1 > S && S + 1 >= oi(K, M),
                                I)
                                    if (!p && (j || le)) {
                                        var Yt = Gt(n, !0)
                                          , Ge = S - se;
                                        Cu(n, Me, Yt.top + (M === Ve ? Ge : 0) + st, Yt.left + (M === Ve ? 0 : Ge) + st)
                                    } else
                                        Cu(n, Ie);
                                Er(j || le ? tt : Fe),
                                je !== q && B < 1 && j || ge(Je + (B === 1 && !le ? je : 0))
                            }
                        }
                        X && !he.tween && !Qe && !ar && et.restart(!0),
                        u && (Ce || N && B && (B < 1 || !Bn)) && Nr(u.targets).forEach(function(We) {
                            return We.classList[j || N ? "add" : "remove"](u.className)
                        }),
                        a && !W && !p && a(x),
                        Ae && !Qe ? (W && (ue && (Se === "complete" ? r.pause().totalProgress(1) : Se === "reset" ? r.restart(!0).pause() : Se === "restart" ? r.restart(!0) : r[Se]()),
                        a && a(x)),
                        (Ce || !Bn) && (d && Ce && Ln(x, d),
                        O[ie] && Ln(x, O[ie]),
                        N && (B === 1 ? x.kill(!1, 1) : O[ie] = 0),
                        Ce || (ie = B === 1 ? 1 : 3,
                        O[ie] && Ln(x, O[ie]))),
                        U && !j && Math.abs(x.getVelocity()) > (cr(U) ? U : 2500) && (fr(x.callbackAnimation),
                        me ? me.progress(1) : fr(r, !B, 1))) : W && a && !Qe && a(x)
                    }
                    if (Ut) {
                        var qe = A ? S / A.duration() * (A._caScrollDist || 0) : S;
                        wt(qe + (v._isFlipped ? 1 : 0)),
                        Ut(qe)
                    }
                    jt && jt(-S / A.duration() * (A._caScrollDist || 0))
                }
            }
            ,
            x.enable = function(p, E) {
                x.enabled || (x.enabled = !0,
                Ze(K, "resize", gr),
                Ze(V ? Pe : K, "scroll", Yi),
                Z && Ze(s, "refreshInit", Z),
                p !== !1 && (x.progress = $e = 0,
                ke = Oe = oe = Q()),
                E !== !1 && x.refresh())
            }
            ,
            x.getTween = function(p) {
                return p && he ? he.tween : me
            }
            ,
            x.setPositions = function(p, E) {
                n && (Je += p - se,
                je += E - p - q),
                x.start = se = p,
                x.end = ve = E,
                q = E - p,
                x.update()
            }
            ,
            x.disable = function(p, E) {
                if (x.enabled && (p !== !1 && x.revert(),
                x.enabled = x.isActive = !1,
                E || me && me.pause(),
                Dt = 0,
                ce && (ce.uncache = 1),
                Z && Ue(s, "refreshInit", Z),
                et && (et.pause(),
                he.tween && he.tween.kill() && (he.tween = 0)),
                !V)) {
                    for (var m = xe.length; m--; )
                        if (xe[m].scroller === K && xe[m] !== x)
                            return;
                    Ue(K, "resize", gr),
                    Ue(K, "scroll", Yi)
                }
            }
            ,
            x.kill = function(p, E) {
                x.disable(p, E),
                me && !E && me.kill(),
                l && delete zn[l];
                var m = xe.indexOf(x);
                m >= 0 && xe.splice(m, 1),
                m === ot && en > 0 && ot--,
                m = 0,
                xe.forEach(function(S) {
                    return S.scroller === x.scroller && (m = 1)
                }),
                m || (x.scroll.rec = 0),
                r && (r.scrollTrigger = null,
                p && r.render(-1),
                E || r.kill()),
                de && [de, te, v, h].forEach(function(S) {
                    return S.parentNode && S.parentNode.removeChild(S)
                }),
                wi === x && (wi = 0),
                n && (ce && (ce.uncache = 1),
                m = 0,
                xe.forEach(function(S) {
                    return S.pin === n && m++
                }),
                m || (ce.spacer = 0)),
                t.onKill && t.onKill(x)
            }
            ,
            x.enable(!1, !1),
            Y && Y(x),
            !r || !r.add || q ? x.refresh() : J.delayedCall(.01, function() {
                return se || ve || x.refresh()
            }) && (q = .01) && (se = ve = 0)
        }
        ,
        s.register = function(t) {
            return _i || (J = t || ou(),
            nu() && window.document && s.enable(),
            _i = Xr),
            _i
        }
        ,
        s.defaults = function(t) {
            if (t)
                for (var r in t)
                    qr[r] = t[r];
            return qr
        }
        ,
        s.disable = function(t, r) {
            Xr = 0,
            xe.forEach(function(a) {
                return a[r ? "kill" : "disable"](t)
            }),
            Ue(pe, "wheel", Yi),
            Ue(Pe, "scroll", Yi),
            clearInterval($r),
            Ue(Pe, "touchcancel", ni),
            Ue(Me, "touchstart", ni),
            Vr(Ue, Pe, "pointerdown,touchstart,mousedown", iu),
            Vr(Ue, Pe, "pointerup,touchend,mouseup", ru),
            Lr.kill(),
            zr(Ue);
            for (var o = 0; o < we.length; o += 3)
                Gr(Ue, we[o], we[o + 1]),
                Gr(Ue, we[o], we[o + 2])
        }
        ,
        s.enable = function() {
            if (pe = window,
            Pe = document,
            Vt = Pe.documentElement,
            Me = Pe.body,
            J && (Nr = J.utils.toArray,
            Li = J.utils.clamp,
            Mn = J.core.suppressOverwrites || ni,
            J.core.globals("ScrollTrigger", s),
            Me)) {
                Xr = 1,
                Xe.register(J),
                s.isTouch = Xe.isTouch,
                xi = Xe.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),
                Ze(pe, "wheel", Yi),
                Uo = [pe, Pe, Vt, Me],
                s.matchMedia({
                    "(orientation: portrait)": function() {
                        return Du(),
                        Du
                    }
                }),
                Ze(Pe, "scroll", Yi);
                var t = Me.style, r = t.borderTopStyle, o, a;
                for (t.borderTopStyle = "solid",
                o = Gt(Me),
                Ve.m = Math.round(o.top + Ve.sc()) || 0,
                nt.m = Math.round(o.left + nt.sc()) || 0,
                r ? t.borderTopStyle = r : t.removeProperty("border-top-style"),
                $r = setInterval(pu, 250),
                J.delayedCall(.5, function() {
                    return ar = 0
                }),
                Ze(Pe, "touchcancel", ni),
                Ze(Me, "touchstart", ni),
                Vr(Ze, Pe, "pointerdown,touchstart,mousedown", iu),
                Vr(Ze, Pe, "pointerup,touchend,mouseup", ru),
                Pn = J.utils.checkPrefix("transform"),
                tn.push(Pn),
                _i = ut(),
                Lr = J.delayedCall(.2, zi).pause(),
                Ni = [Pe, "visibilitychange", function() {
                    var u = pe.innerWidth
                      , l = pe.innerHeight;
                    Pe.hidden ? (jo = u,
                    Ko = l) : (jo !== u || Ko !== l) && gr()
                }
                , Pe, "DOMContentLoaded", zi, pe, "load", zi, pe, "resize", gr],
                zr(Ze),
                xe.forEach(function(u) {
                    return u.enable(0, 1)
                }),
                a = 0; a < we.length; a += 3)
                    Gr(Ue, we[a], we[a + 1]),
                    Gr(Ue, we[a], we[a + 2])
            }
        }
        ,
        s.config = function(t) {
            "limitCallbacks"in t && (Bn = !!t.limitCallbacks);
            var r = t.syncInterval;
            r && clearInterval($r) || ($r = r) && setInterval(pu, r),
            "ignoreMobileResize"in t && (Jo = s.isTouch === 1 && t.ignoreMobileResize),
            "autoRefreshEvents"in t && (zr(Ue) || zr(Ze, t.autoRefreshEvents || "none"),
            Zo = (t.autoRefreshEvents + "").indexOf("resize") === -1)
        }
        ,
        s.scrollerProxy = function(t, r) {
            var o = lt(t)
              , a = we.indexOf(o)
              , u = yi(o);
            ~a && we.splice(a, u ? 6 : 2),
            r && (u ? Bt.unshift(pe, r, Me, r, Vt, r) : Bt.unshift(o, r))
        }
        ,
        s.matchMedia = function(t) {
            var r, o, a, u, l;
            for (o in t)
                a = Be.indexOf(o),
                u = t[o],
                Xi = o,
                o === "all" ? u() : (r = pe.matchMedia(o),
                r && (r.matches && (l = u()),
                ~a ? (Be[a + 1] = su(Be[a + 1], u),
                Be[a + 2] = su(Be[a + 2], l)) : (a = Be.length,
                Be.push(o, u, l),
                r.addListener ? r.addListener(gu) : r.addEventListener("change", gu)),
                Be[a + 3] = r.matches)),
                Xi = 0;
            return Be
        }
        ,
        s.clearMatchMedia = function(t) {
            t || (Be.length = 0),
            t = Be.indexOf(t),
            t >= 0 && Be.splice(t, 4)
        }
        ,
        s.isInViewport = function(t, r, o) {
            var a = (It(t) ? lt(t) : t).getBoundingClientRect()
              , u = a[o ? Ei : mi] * r || 0;
            return o ? a.right - u > 0 && a.left + u < pe.innerWidth : a.bottom - u > 0 && a.top + u < pe.innerHeight
        }
        ,
        s.positionInViewport = function(t, r, o) {
            It(t) && (t = lt(t));
            var a = t.getBoundingClientRect()
              , u = a[o ? Ei : mi]
              , l = r == null ? u / 2 : r in Ur ? Ur[r] * u : ~r.indexOf("%") ? parseFloat(r) * u / 100 : parseFloat(r) || 0;
            return o ? (a.left + l) / pe.innerWidth : (a.top + l) / pe.innerHeight
        }
        ,
        s
    }();
    ae.version = "3.10.4",
    ae.saveStyles = function(s) {
        return s ? Nr(s).forEach(function(e) {
            if (e && e.style) {
                var i = Ct.indexOf(e);
                i >= 0 && Ct.splice(i, 5),
                Ct.push(e, e.style.cssText, e.getBBox && e.getAttribute("transform"), J.core.getCache(e), Xi)
            }
        }) : Ct
    }
    ,
    ae.revert = function(s, e) {
        return Zr(!s, e)
    }
    ,
    ae.create = function(s, e) {
        return new ae(s,e)
    }
    ,
    ae.refresh = function(s) {
        return s ? gr() : (_i || ae.register()) && zi(!0)
    }
    ,
    ae.update = yr,
    ae.clearScrollMemory = yu,
    ae.maxScroll = function(s, e) {
        return oi(s, e ? nt : Ve)
    }
    ,
    ae.getScrollFunc = function(s, e) {
        return ri(lt(s), e ? nt : Ve)
    }
    ,
    ae.getById = function(s) {
        return zn[s]
    }
    ,
    ae.getAll = function() {
        return xe.filter(function(s) {
            return s.vars.id !== "ScrollSmoother"
        })
    }
    ,
    ae.isScrolling = function() {
        return !!Et
    }
    ,
    ae.snapDirectional = Xn,
    ae.addEventListener = function(s, e) {
        var i = _r[s] || (_r[s] = []);
        ~i.indexOf(e) || i.push(e)
    }
    ,
    ae.removeEventListener = function(s, e) {
        var i = _r[s]
          , t = i && i.indexOf(e);
        t >= 0 && i.splice(t, 1)
    }
    ,
    ae.batch = function(s, e) {
        var i = [], t = {}, r = e.interval || .016, o = e.batchMax || 1e9, a = function(d, y) {
            var c = []
              , _ = []
              , n = J.delayedCall(r, function() {
                y(c, _),
                c = [],
                _ = []
            }).pause();
            return function(g) {
                c.length || n.restart(!0),
                c.push(g.trigger),
                _.push(g),
                o <= c.length && n.progress(1)
            }
        }, u;
        for (u in e)
            t[u] = u.substr(0, 2) === "on" && Ot(e[u]) && u !== "onRefreshInit" ? a(u, e[u]) : e[u];
        return Ot(o) && (o = o(),
        Ze(ae, "refresh", function() {
            return o = e.batchMax()
        })),
        Nr(s).forEach(function(l) {
            var d = {};
            for (u in t)
                d[u] = t[u];
            d.trigger = l,
            i.push(ae.create(d))
        }),
        i
    }
    ;
    var Fu = function(e, i, t, r) {
        return i > r ? e(r) : i < 0 && e(0),
        t > r ? (r - i) / (t - i) : t < 0 ? i / (i - t) : 1
    }, Gn = function s(e, i) {
        i === !0 ? e.style.removeProperty("touch-action") : e.style.touchAction = i === !0 ? "auto" : i ? "pan-" + i + (Xe.isTouch ? " pinch-zoom" : "") : "none",
        e === Vt && s(Me, i)
    }, bu = {
        auto: 1,
        scroll: 1
    }, Os = function(e) {
        var i = e.event, t = e.target, r = e.axis, o = (i.changedTouches ? i.changedTouches[0] : i).target, a = o._gsap || J.core.getCache(o), u = ut(), l;
        if (!a._isScrollT || u - a._isScrollT > 2e3) {
            for (; o && o.scrollHeight <= o.clientHeight; )
                o = o.parentNode;
            a._isScroll = o && !yi(o) && o !== t && (bu[(l = Lt(o)).overflowY] || bu[l.overflowX]),
            a._isScrollT = u
        }
        (a._isScroll || r === "x") && (i._gsapAllow = !0)
    }, vu = function(e, i, t, r) {
        return Xe.create({
            target: e,
            capture: !0,
            debounce: !1,
            lockAxis: !0,
            type: i,
            onWheel: r = r && Os,
            onPress: r,
            onDrag: r,
            onScroll: r,
            onEnable: function() {
                return t && Ze(Pe, Xe.eventTypes[0], Su, !1, !0)
            },
            onDisable: function() {
                return Ue(Pe, Xe.eventTypes[0], Su, !0)
            }
        })
    }, As = /(input|label|select|textarea)/i, Tu, Su = function(e) {
        var i = As.test(e.target.tagName);
        (i || Tu) && (e._gsapAllow = !0,
        Tu = i)
    }, Ps = function(e) {
        Wr(e) || (e = {}),
        e.preventDefault = e.isNormalizer = e.allowClicks = !0,
        e.type || (e.type = "wheel,touch"),
        e.debounce = !!e.debounce,
        e.id = e.id || "normalizer";
        var i = e, t = i.normalizeScrollX, r = i.momentum, o = i.allowNestedScroll, a, u, l = lt(e.target) || Vt, d = J.core.globals().ScrollSmoother, y = xi && (e.content && lt(e.content) || d && d.get() && d.get().content()), c = ri(l, Ve), _ = ri(l, nt), n = 1, g = (Xe.isTouch && pe.visualViewport ? pe.visualViewport.scale * pe.visualViewport.width : pe.outerWidth) / pe.innerWidth, C = 0, T = Ot(r) ? function() {
            return r(a)
        }
        : function() {
            return r || 2.8
        }
        , k, L, N = vu(l, e.type, !0, o), X = function() {
            return k = !1
        }, I = ni, H = ni, A = function() {
            u = oi(l, Ve),
            H = Li(xi ? 1 : 0, u),
            t && (I = Li(0, oi(l, nt))),
            L = Jr
        }, U = function() {
            if (k) {
                requestAnimationFrame(X);
                var De = lr(a.deltaY / 2)
                  , O = H(c.v - De);
                return y && O !== c.v + c.offset && (c.offset = O - c.v,
                y.style.transform = "translateY(" + -c.offset + "px)",
                y._gsap && (y._gsap.y = -c.offset + "px"),
                c.cacheID = we.cache,
                yr()),
                !0
            }
            y && (y.style.transform = "translateY(0px)",
            c.offset = c.cacheID = 0,
            y._gsap && (y._gsap.y = "0px")),
            k = !0
        }, z, M, W, K, w = function() {
            A(),
            z.isActive() && z.vars.scrollY > u && (c() > u ? z.progress(1) && c(u) : z.resetTo("scrollY", u))
        };
        return e.ignoreCheck = function(V) {
            return xi && V.type === "touchmove" && U() || n > 1.05 && V.type !== "touchstart" || a.isGesturing || V.touches && V.touches.length > 1
        }
        ,
        e.onPress = function() {
            var V = n;
            n = lr((pe.visualViewport && pe.visualViewport.scale || 1) / g),
            z.pause(),
            V !== n && Gn(l, n > 1.01 ? !0 : t ? !1 : "x"),
            k = !1,
            M = _(),
            W = c(),
            A(),
            L = Jr
        }
        ,
        e.onRelease = e.onGestureStart = function(V, De) {
            if (y && (y.style.transform = "translateY(0px)",
            c.offset = c.cacheID = 0,
            y._gsap && (y._gsap.y = "0px")),
            !De)
                K.restart(!0);
            else {
                we.cache++;
                var O = T(), R, re;
                t && (R = _(),
                re = R + O * .05 * -V.velocityX / .227,
                O *= Fu(_, R, re, oi(l, nt)),
                z.vars.scrollX = I(re)),
                R = c(),
                re = R + O * .05 * -V.velocityY / .227,
                O *= Fu(c, R, re, oi(l, Ve)),
                z.vars.scrollY = H(re),
                z.invalidate().duration(O).play(.01),
                (xi && z.vars.scrollY >= u || R >= u - 1) && J.to({}, {
                    onUpdate: w,
                    duration: O
                })
            }
        }
        ,
        e.onWheel = function() {
            z._ts && z.pause(),
            ut() - C > 1e3 && (L = 0,
            C = ut())
        }
        ,
        e.onChange = function(V, De, O, R, re) {
            Jr !== L && A(),
            De && t && _(I(R[2] === De ? M + (V.startX - V.x) : _() + De - R[1])),
            O && c(H(re[2] === O ? W + (V.startY - V.y) : c() + O - re[1])),
            yr()
        }
        ,
        e.onEnable = function() {
            Gn(l, t ? !1 : "x"),
            Ze(pe, "resize", w),
            N.enable()
        }
        ,
        e.onDisable = function() {
            Gn(l, !0),
            Ue(pe, "resize", w),
            N.kill()
        }
        ,
        a = new Xe(e),
        a.iOS = xi,
        xi && !c() && c(1),
        K = a._dc,
        z = J.to(a, {
            ease: "power4",
            paused: !0,
            scrollX: t ? "+=0.1" : "+=0",
            scrollY: "+=0.1",
            onComplete: K.vars.onComplete
        }),
        a
    };
    ae.sort = function(s) {
        return xe.sort(s || function(e, i) {
            return (e.vars.refreshPriority || 0) * -1e6 + e.start - (i.start + (i.vars.refreshPriority || 0) * -1e6)
        }
        )
    }
    ,
    ae.observe = function(s) {
        return new Xe(s)
    }
    ,
    ae.normalizeScroll = function(s) {
        if (typeof s == "undefined")
            return yt;
        if (s === !0 && yt)
            return yt.enable();
        if (s === !1)
            return yt && yt.kill();
        var e = s instanceof Xe ? s : Ps(s);
        return yt && yt.target === e.target && yt.kill(),
        yi(e.target) && (yt = e),
        e
    }
    ,
    ae.core = {
        _getVelocityProp: An,
        _inputObserver: vu,
        _scrollers: we,
        _proxies: Bt,
        bridge: {
            ss: function() {
                Et || Ci("scrollStart"),
                Et = ut()
            },
            ref: function() {
                return Qe
            }
        }
    },
    ou() && J.registerPlugin(ae);
    /*!
 * strings: 3.10.4
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
    var Ms = /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;
    function ku(s) {
        var e = s.nodeType
          , i = "";
        if (e === 1 || e === 9 || e === 11) {
            if (typeof s.textContent == "string")
                return s.textContent;
            for (s = s.firstChild; s; s = s.nextSibling)
                i += ku(s)
        } else if (e === 3 || e === 4)
            return s.nodeValue;
        return i
    }
    /*!
 * SplitText: 3.10.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
    var Fi, Ou, Au, Bs = /(?:\r|\n|\t\t)/g, Is = /(?:\s\s+)/g, Ls = function() {
        Fi = document,
        Ou = window,
        Au = 1
    }, Pu = function(e) {
        return Ou.getComputedStyle(e)
    }, Ns = Array.isArray, Mu = [].slice, qn = function(e, i) {
        var t;
        return Ns(e) ? e : (t = typeof e) === "string" && !i && e ? Mu.call(Fi.querySelectorAll(e), 0) : e && t === "object" && "length"in e ? Mu.call(e, 0) : e ? [e] : []
    }, Un = function(e) {
        return e.position === "absolute" || e.absolute === !0
    }, Rs = function(e, i) {
        for (var t = i.length, r; --t > -1; )
            if (r = i[t],
            e.substr(0, r.length) === r)
                return r.length
    }, $s = " style='position:relative;display:inline-block;'", Bu = function(e, i) {
        e === void 0 && (e = "");
        var t = ~e.indexOf("++")
          , r = 1;
        return t && (e = e.split("++").join("")),
        function() {
            return "<" + i + $s + (e ? " class='" + e + (t ? r++ : "") + "'>" : ">")
        }
    }, Iu = function s(e, i, t) {
        var r = e.nodeType;
        if (r === 1 || r === 9 || r === 11)
            for (e = e.firstChild; e; e = e.nextSibling)
                s(e, i, t);
        else
            (r === 3 || r === 4) && (e.nodeValue = e.nodeValue.split(i).join(t))
    }, jn = function(e, i) {
        for (var t = i.length; --t > -1; )
            e.push(i[t])
    }, Lu = function(e, i, t) {
        for (var r; e && e !== i; ) {
            if (r = e._next || e.nextSibling,
            r)
                return r.textContent.charAt(0) === t;
            e = e.parentNode || e._parent
        }
    }, Ys = function s(e) {
        var i = qn(e.childNodes), t = i.length, r, o;
        for (r = 0; r < t; r++)
            o = i[r],
            o._isSplit ? s(o) : r && o.previousSibling && o.previousSibling.nodeType === 3 ? (o.previousSibling.nodeValue += o.nodeType === 3 ? o.nodeValue : o.firstChild.nodeValue,
            e.removeChild(o)) : o.nodeType !== 3 && (e.insertBefore(o.firstChild, o),
            e.removeChild(o))
    }, Nt = function(e, i) {
        return parseFloat(i[e]) || 0
    }, Xs = function(e, i, t, r, o, a, u) {
        var l = Pu(e), d = Nt("paddingLeft", l), y = -999, c = Nt("borderBottomWidth", l) + Nt("borderTopWidth", l), _ = Nt("borderLeftWidth", l) + Nt("borderRightWidth", l), n = Nt("paddingTop", l) + Nt("paddingBottom", l), g = Nt("paddingLeft", l) + Nt("paddingRight", l), C = Nt("fontSize", l) * (i.lineThreshold || .2), T = l.textAlign, k = [], L = [], N = [], X = i.wordDelimiter || " ", I = i.tag ? i.tag : i.span ? "span" : "div", H = i.type || i.split || "chars,words,lines", A = o && ~H.indexOf("lines") ? [] : null, U = ~H.indexOf("words"), z = ~H.indexOf("chars"), M = Un(i), W = i.linesClass, K = ~(W || "").indexOf("++"), w = [], V = l.display === "flex", De = e.style.display, O, R, re, b, x, Z, ne, Ee, oe, fe, Q, he;
        for (K && (W = W.split("++").join("")),
        V && (e.style.display = "block"),
        R = e.getElementsByTagName("*"),
        re = R.length,
        x = [],
        O = 0; O < re; O++)
            x[O] = R[O];
        if (A || M)
            for (O = 0; O < re; O++)
                b = x[O],
                Z = b.parentNode === e,
                (Z || M || z && !U) && (he = b.offsetTop,
                A && Z && Math.abs(he - y) > C && (b.nodeName !== "BR" || O === 0) && (ne = [],
                A.push(ne),
                y = he),
                M && (b._x = b.offsetLeft,
                b._y = he,
                b._w = b.offsetWidth,
                b._h = b.offsetHeight),
                A && ((b._isSplit && Z || !z && Z || U && Z || !U && b.parentNode.parentNode === e && !b.parentNode._isSplit) && (ne.push(b),
                b._x -= d,
                Lu(b, e, X) && (b._wordEnd = !0)),
                b.nodeName === "BR" && (b.nextSibling && b.nextSibling.nodeName === "BR" || O === 0) && A.push([])));
        for (O = 0; O < re; O++) {
            if (b = x[O],
            Z = b.parentNode === e,
            b.nodeName === "BR") {
                A || M ? (b.parentNode && b.parentNode.removeChild(b),
                x.splice(O--, 1),
                re--) : U || e.appendChild(b);
                continue
            }
            if (M && (oe = b.style,
            !U && !Z && (b._x += b.parentNode._x,
            b._y += b.parentNode._y),
            oe.left = b._x + "px",
            oe.top = b._y + "px",
            oe.position = "absolute",
            oe.display = "block",
            oe.width = b._w + 1 + "px",
            oe.height = b._h + "px"),
            !U && z)
                if (b._isSplit)
                    for (b._next = R = b.nextSibling,
                    b.parentNode.appendChild(b); R && R.nodeType === 3 && R.textContent === " "; )
                        b._next = R.nextSibling,
                        b.parentNode.appendChild(R),
                        R = R.nextSibling;
                else
                    b.parentNode._isSplit ? (b._parent = b.parentNode,
                    !b.previousSibling && b.firstChild && (b.firstChild._isFirst = !0),
                    b.nextSibling && b.nextSibling.textContent === " " && !b.nextSibling.nextSibling && w.push(b.nextSibling),
                    b._next = b.nextSibling && b.nextSibling._isFirst ? null : b.nextSibling,
                    b.parentNode.removeChild(b),
                    x.splice(O--, 1),
                    re--) : Z || (he = !b.nextSibling && Lu(b.parentNode, e, X),
                    b.parentNode._parent && b.parentNode._parent.appendChild(b),
                    he && b.parentNode.appendChild(Fi.createTextNode(" ")),
                    I === "span" && (b.style.display = "inline"),
                    k.push(b));
            else
                b.parentNode._isSplit && !b._isSplit && b.innerHTML !== "" ? L.push(b) : z && !b._isSplit && (I === "span" && (b.style.display = "inline"),
                k.push(b))
        }
        for (O = w.length; --O > -1; )
            w[O].parentNode.removeChild(w[O]);
        if (A) {
            for (M && (fe = Fi.createElement(I),
            e.appendChild(fe),
            Q = fe.offsetWidth + "px",
            he = fe.offsetParent === e ? 0 : e.offsetLeft,
            e.removeChild(fe)),
            oe = e.style.cssText,
            e.style.cssText = "display:none;"; e.firstChild; )
                e.removeChild(e.firstChild);
            for (Ee = X === " " && (!M || !U && !z),
            O = 0; O < A.length; O++) {
                for (ne = A[O],
                fe = Fi.createElement(I),
                fe.style.cssText = "display:block;text-align:" + T + ";position:" + (M ? "absolute;" : "relative;"),
                W && (fe.className = W + (K ? O + 1 : "")),
                N.push(fe),
                re = ne.length,
                R = 0; R < re; R++)
                    ne[R].nodeName !== "BR" && (b = ne[R],
                    fe.appendChild(b),
                    Ee && b._wordEnd && fe.appendChild(Fi.createTextNode(" ")),
                    M && (R === 0 && (fe.style.top = b._y + "px",
                    fe.style.left = d + he + "px"),
                    b.style.top = "0px",
                    he && (b.style.left = b._x - he + "px")));
                re === 0 ? fe.innerHTML = "&nbsp;" : !U && !z && (Ys(fe),
                Iu(fe, String.fromCharCode(160), " ")),
                M && (fe.style.width = Q,
                fe.style.height = b._h + "px"),
                e.appendChild(fe)
            }
            e.style.cssText = oe
        }
        M && (u > e.clientHeight && (e.style.height = u - n + "px",
        e.clientHeight < u && (e.style.height = u + c + "px")),
        a > e.clientWidth && (e.style.width = a - g + "px",
        e.clientWidth < a && (e.style.width = a + _ + "px"))),
        V && (De ? e.style.display = De : e.style.removeProperty("display")),
        jn(t, k),
        U && jn(r, L),
        jn(o, N)
    }, zs = function(e, i, t, r) {
        var o = i.tag ? i.tag : i.span ? "span" : "div", a = i.type || i.split || "chars,words,lines", u = ~a.indexOf("chars"), l = Un(i), d = i.wordDelimiter || " ", y = d !== " " ? "" : l ? "&#173; " : " ", c = "</" + o + ">", _ = 1, n = i.specialChars ? typeof i.specialChars == "function" ? i.specialChars : Rs : null, g, C, T, k, L, N, X, I, H = Fi.createElement("div"), A = e.parentNode;
        for (A.insertBefore(H, e),
        H.textContent = e.nodeValue,
        A.removeChild(e),
        e = H,
        g = ku(e),
        X = g.indexOf("<") !== -1,
        i.reduceWhiteSpace !== !1 && (g = g.replace(Is, " ").replace(Bs, "")),
        X && (g = g.split("<").join("{{LT}}")),
        L = g.length,
        C = (g.charAt(0) === " " ? y : "") + t(),
        T = 0; T < L; T++)
            if (N = g.charAt(T),
            n && (I = n(g.substr(T), i.specialChars)))
                N = g.substr(T, I || 1),
                C += u && N !== " " ? r() + N + "</" + o + ">" : N,
                T += I - 1;
            else if (N === d && g.charAt(T - 1) !== d && T) {
                for (C += _ ? c : "",
                _ = 0; g.charAt(T + 1) === d; )
                    C += y,
                    T++;
                T === L - 1 ? C += y : g.charAt(T + 1) !== ")" && (C += y + t(),
                _ = 1)
            } else
                N === "{" && g.substr(T, 6) === "{{LT}}" ? (C += u ? r() + "{{LT}}</" + o + ">" : "{{LT}}",
                T += 5) : N.charCodeAt(0) >= 55296 && N.charCodeAt(0) <= 56319 || g.charCodeAt(T + 1) >= 65024 && g.charCodeAt(T + 1) <= 65039 ? (k = ((g.substr(T, 12).split(Ms) || [])[1] || "").length || 2,
                C += u && N !== " " ? r() + g.substr(T, k) + "</" + o + ">" : g.substr(T, k),
                T += k - 1) : C += u && N !== " " ? r() + N + "</" + o + ">" : N;
        e.outerHTML = C + (_ ? c : ""),
        X && Iu(A, "{{LT}}", "<")
    }, Ws = function s(e, i, t, r) {
        var o = qn(e.childNodes), a = o.length, u = Un(i), l, d;
        if (e.nodeType !== 3 || a > 1) {
            for (i.absolute = !1,
            l = 0; l < a; l++)
                d = o[l],
                d._next = d._isFirst = d._parent = d._wordEnd = null,
                (d.nodeType !== 3 || /\S+/.test(d.nodeValue)) && (u && d.nodeType !== 3 && Pu(d).display === "inline" && (d.style.display = "inline-block",
                d.style.position = "relative"),
                d._isSplit = !0,
                s(d, i, t, r));
            i.absolute = u,
            e._isSplit = !0;
            return
        }
        zs(e, i, t, r)
    }, Nu = function() {
        function s(i, t) {
            Au || Ls(),
            this.elements = qn(i),
            this.chars = [],
            this.words = [],
            this.lines = [],
            this._originals = [],
            this.vars = t || {},
            this.split(t)
        }
        var e = s.prototype;
        return e.split = function(t) {
            this.isSplit && this.revert(),
            this.vars = t = t || this.vars,
            this._originals.length = this.chars.length = this.words.length = this.lines.length = 0;
            for (var r = this.elements.length, o = t.tag ? t.tag : t.span ? "span" : "div", a = Bu(t.wordsClass, o), u = Bu(t.charsClass, o), l, d, y; --r > -1; )
                y = this.elements[r],
                this._originals[r] = y.innerHTML,
                l = y.clientHeight,
                d = y.clientWidth,
                Ws(y, t, a, u),
                Xs(y, t, this.chars, this.words, this.lines, d, l);
            return this.chars.reverse(),
            this.words.reverse(),
            this.lines.reverse(),
            this.isSplit = !0,
            this
        }
        ,
        e.revert = function() {
            var t = this._originals;
            if (!t)
                throw "revert() call wasn't scoped properly.";
            return this.elements.forEach(function(r, o) {
                return r.innerHTML = t[o]
            }),
            this.chars = [],
            this.words = [],
            this.lines = [],
            this.isSplit = !1,
            this
        }
        ,
        s.create = function(t, r) {
            return new s(t,r)
        }
        ,
        s
    }();
    Nu.version = "3.10.4",
    gsap.registerPlugin(ae, Nu, di, Ar),
    $(".toggle-scroll").on("click", function() {
        $("body").toggleClass("no-scroll")
    });
    let Hs = gsap.matchMedia()
      , Ru = 991;
    Hs.add({
        isDesktop: `(min-width: ${Ru}px)`,
        isMobile: `(max-width: ${Ru - 1}px)`,
        reduceMotion: "(prefers-reduced-motion: reduce)"
    }, s=>{
        let {isDesktop: e, isMobile: i, reduceMotion: t} = s.conditions;
        function r() {
            let c = gsap.timeline({});
            c.to(".frame-cutout-base", {
                y: "0vh",
                height: "100%",
                duration: 1.4,
                ease: "Expo.easeInOut"
            }, 0),
            c.to(".scroll-link", {
                height: "3rem",
                y: "0rem",
                ease: "Expo.easeInOut",
                duration: 2
            }, 0),
            c.to(".frame-cut", {
                y: "0rem",
                borderRadius: e ? "1rem" : "1rem 1rem 0rem 0rem",
                borderWidth: e ? "1px" : "1px 1px 0px 1px",
                ease: "Expo.easeInOut",
                duration: 2
            }, 0),
            c.to(".content-wrapper", {
                opacity: 1,
                ease: "none",
                duration: 1
            }, 0),
            c.from(".heading-xlarge.top .char", {
                y: "160%",
                stagger: {
                    each: .04,
                    from: "start"
                },
                ease: "Expo.easeOut",
                duration: .85
            }, .65),
            c.from(".heading-xlarge.bottom .char", {
                y: "160%",
                stagger: {
                    each: .05,
                    from: "start"
                },
                ease: "Expo.easeOut",
                duration: .9
            }, .6)
        }
        function o() {
            $(".trigger").click(),
            r()
        }
        let a = gsap.timeline({
            onComplete: o
        });
        a.set(".content-wrapper", {
            opacity: 0
        }, 0),
        a.set(".main-wrapper", {
            opacity: 1
        }, 0),
        a.set(".load-video", {
            opacity: 1
        }, 0),
        a.set(".is--loadtext .char", {
            y: "-160%"
        }),
        a.set(".is--navcircle", {
            scale: 0
        }, 0),
        a.set(".scroll-link", {
            height: "0rem"
        }, 0),
        a.set(".frame-cutout-base", {
            height: "10%",
            width: "50%",
            y: "100vh",
            x: "25vw"
        }, 0),
        a.set(".frame-cut", {
            y: "-1rem"
        }),
        a.set(".begin, .begin-wrapper", {
            display: "flex"
        }, 0),
        a.set(".scroll-link", {
            y: e ? "0rem" : "2rem"
        }, 0),
        a.set(".text-size-small.close_section .char", {
            y: "100%"
        }, 0),
        a.to(".frame-cutout-base", {
            height: e ? "70%" : "40%",
            y: e ? "15vh" : "25vh",
            x: e ? "30vw" : "15vw",
            width: e ? "40%" : "70%",
            duration: 2,
            ease: "Expo.easeInOut"
        }, 0),
        a.from(".one.is--hero .char", {
            y: "100%",
            stagger: {
                each: .03,
                from: "left"
            },
            ease: "Expo.easeInOut",
            duration: 1.3
        }, .6),
        a.to(".one.is--hero .char", {
            y: "-100%",
            stagger: {
                each: .03,
                from: "left"
            },
            ease: "Expo.easeInOut",
            duration: 1.3
        }, 1.7),
        a.to(".frame-cutout-base", {
            height: e ? "25%" : "13%",
            width: e ? "30%" : "50%",
            x: e ? "35vw" : "25vw",
            y: e ? "37.5vh" : "39.5vh",
            duration: 1.6,
            ease: "Expo.easeInOut"
        }, 1.6),
        a.from(".two.is--hero .char", {
            y: "100%",
            stagger: {
                each: .03,
                from: "left"
            },
            ease: "Expo.easeInOut",
            duration: 1.3
        }, 1.7),
        a.to(".two.is--hero .char", {
            y: "-100%",
            stagger: {
                each: .03,
                from: "left"
            },
            ease: "Expo.easeInOut",
            duration: 1.3
        }, 3),
        a.to(".frame-cutout-base", {
            x: "0vw",
            y: "10vh",
            height: e ? "91%" : "70%",
            width: "100%",
            duration: 1.4,
            ease: "Expo.easeInOut"
        }, 2.8),
        a.from(".three.is--hero .char", {
            y: "100%",
            stagger: {
                each: .02,
                from: "left"
            },
            ease: "Expo.easeInOut",
            duration: 1
        }, 3),
        a.to(".three.is--hero .char", {
            y: "100%",
            stagger: {
                each: .03,
                from: "left"
            },
            ease: "Expo.easeInOut",
            duration: 1.1
        }, 3.9),
        a.to(".frame-cutout-base", {
            height: e ? "6rem" : "4.75rem",
            duration: 2.2,
            ease: "Expo.easeInOut"
        }, 3.9),
        a.to(".begin-wrapper", {
            height: "4rem",
            duration: 2.2,
            ease: "Expo.easeInOut"
        }, 4),
        a.from(".begin", {
            opacity: 0,
            ease: "none",
            duration: .3
        }, 0),
        a.to(".load-image", {
            y: "100%",
            ease: "Expo.easeInOut",
            duration: 2.2
        }, 3.8),
        a.to(".frame-cutout-base", {
            y: e ? "89vh" : "79vh",
            duration: 2.2,
            ease: "Expo.easeInOut"
        }, 4),
        a.to(".begin-wrapper", {
            y: "10vh",
            duration: 2.2,
            ease: "Expo.easeInOut"
        }, 3.8),
        a.to(".is--navcircle", {
            scale: 1,
            ease: "Power1.easeOut",
            duration: .4
        }, 5.2),
        a.to(".is--loadtext .char", {
            y: "0%",
            stagger: {
                each: .02,
                from: "start"
            },
            ease: "Expo.easeInOut",
            duration: 1
        }, 4.6),
        a.to(".main-wrapper", {
            opacity: 1,
            ease: "none",
            duration: .3
        }, 3.8),
        a.to(".begin, .begin-wrapper", {
            display: "none",
            ease: "none",
            duration: 0
        }, 5.1),
        $(".odometer._6").each(function() {
            var c = "9" + 2022 + "8"
              , _ = "4" + 1996 + "2"
              , n = "9" + 1997 + "7"
              , g = "5" + 1998 + "4"
              , C = "9" + 1999 + "9"
              , T = "3" + 2e3 + "3"
              , k = "9" + 2002 + "7"
              , L = new Odometer({
                el: this,
                value: c,
                format: "(dddd.ddd)",
                duration: 2e3
            });
            function N() {
                ae.create({
                    trigger: ".meter-one",
                    start: "top 30%",
                    end: "bottom 45%",
                    onEnter: ()=>{
                        L.update(_)
                    }
                    ,
                    onEnterBack: ()=>{
                        L.update(_)
                    }
                }),
                ae.create({
                    trigger: ".meter-none",
                    start: "top top",
                    end: "bottom 45%",
                    onEnter: ()=>{
                        L.update(c)
                    }
                    ,
                    onEnterBack: ()=>{
                        L.update(c)
                    }
                }),
                ae.create({
                    trigger: ".meter-two",
                    start: "top 30%",
                    end: "bottom 45%",
                    onEnter: ()=>{
                        L.update(n)
                    }
                    ,
                    onEnterBack: ()=>{
                        L.update(n)
                    }
                }),
                ae.create({
                    trigger: ".meter-three",
                    start: "top 30%",
                    end: "bottom 45%",
                    onEnter: ()=>{
                        L.update(g)
                    }
                    ,
                    onEnterBack: ()=>{
                        L.update(g)
                    }
                }),
                ae.create({
                    trigger: ".meter-four",
                    start: "top 30%",
                    end: "bottom 45%",
                    onEnter: ()=>{
                        L.update(C)
                    }
                    ,
                    onEnterBack: ()=>{
                        L.update(C)
                    }
                }),
                ae.create({
                    trigger: ".meter-five",
                    start: "top 30%",
                    end: "bottom 45%",
                    onEnter: ()=>{
                        L.update(T)
                    }
                    ,
                    onEnterBack: ()=>{
                        L.update(T)
                    }
                }),
                ae.create({
                    trigger: ".meter-six",
                    start: "top 30%",
                    end: "bottom 45%",
                    onEnter: ()=>{
                        L.update(k)
                    }
                    ,
                    onEnterBack: ()=>{
                        L.update(k)
                    }
                }),
                ae.create({
                    trigger: ".meter-end",
                    start: "top 30%",
                    end: "bottom 45%",
                    onEnter: ()=>{
                        L.update(c)
                    }
                    ,
                    onEnterBack: ()=>{
                        L.update(c)
                    }
                })
            }
            N(),
            gsap.timeline({
                scrollTrigger: {
                    trigger: ".chaper_component",
                    start: "top 50%",
                    end: "bottom top",
                    toggleActions: "restart none none reverse"
                }
            }).to(".odometer-inside", {
                y: "0rem",
                opacity: 1,
                ease: "Expo.easeInOut",
                duration: 1.4
            }),
            document.querySelector(".meter");
            const I = gsap.utils.toArray(".meter-number");
            console.clear();
            let H;
            const A = U(I, {
                paused: !0,
                draggable: !0,
                center: !0,
                onChange: (z,M)=>{
                    H && H.classList.remove("active"),
                    z.classList.add("active"),
                    H = z
                }
            });
            I.forEach((z,M)=>z.addEventListener("click", ()=>A.toIndex(M, {
                duration: .8,
                ease: "power1.inOut"
            }))),
            document.querySelector(".next").addEventListener("click", ()=>A.next({
                duration: .8,
                ease: "power1.inOut"
            })),
            document.querySelector(".prev").addEventListener("click", ()=>A.previous({
                duration: .8,
                ease: "power1.inOut"
            }));
            function U(z, M) {
                z = gsap.utils.toArray(z),
                M = M || {};
                let W = M.onChange, K = 0, w = gsap.timeline({
                    repeat: M.repeat,
                    onUpdate: W && function() {
                        let v = w.closestIndex();
                        K !== v && (K = v,
                        W(z[v], v))
                    }
                    ,
                    paused: M.paused,
                    defaults: {
                        ease: "none"
                    },
                    onReverseComplete: ()=>w.totalTime(w.rawTime() + w.duration() * 100)
                }), V = z.length, De = z[0].offsetLeft, O = [], R = [], re = [], b = [], x = 0, Z = M.center, ne = (M.speed || 1) * 100, Ee = M.snap === !1 ? v=>v : gsap.utils.snap(M.snap || 1), oe = 0, fe = Z === !0 ? z[0].parentNode : gsap.utils.toArray(Z)[0] || z[0].parentNode, Q, he = ()=>z[V - 1].offsetLeft + b[V - 1] / 100 * R[V - 1] - De + re[0] + z[V - 1].offsetWidth * gsap.getProperty(z[V - 1], "scaleX") + (parseFloat(M.paddingRight) || 0), ce = ()=>{
                    let v = fe.getBoundingClientRect(), h;
                    z.forEach((ee,q)=>{
                        R[q] = parseFloat(gsap.getProperty(ee, "width", "px")),
                        b[q] = Ee(parseFloat(gsap.getProperty(ee, "x", "px")) / R[q] * 100 + gsap.getProperty(ee, "xPercent")),
                        h = ee.getBoundingClientRect(),
                        re[q] = h.left - (q ? v.right : v.left),
                        v = h
                    }
                    ),
                    gsap.set(z, {
                        xPercent: ee=>b[ee]
                    }),
                    Q = he()
                }
                , ct, ke = ()=>{
                    oe = Z ? w.duration() * (fe.offsetWidth / 2) / Q : 0,
                    Z && O.forEach((v,h)=>{
                        O[h] = ct(w.labels["label" + h] + w.duration() * R[h] / 2 / Q - oe)
                    }
                    )
                }
                , Oe = (v,h,ee)=>{
                    let q = v.length, Te = 1e10, tt = 0, Fe;
                    for (; q--; )
                        Fe = Math.abs(v[q] - h),
                        Fe > ee / 2 && (Fe = ee - Fe),
                        Fe < Te && (Te = Fe,
                        tt = q);
                    return tt
                }
                , se = ()=>{
                    let v, h, ee, q, Te;
                    for (w.clear(),
                    v = 0; v < V; v++)
                        h = z[v],
                        ee = b[v] / 100 * R[v],
                        q = h.offsetLeft + ee - De + re[0],
                        Te = q + R[v] * gsap.getProperty(h, "scaleX"),
                        w.to(h, {
                            xPercent: Ee((ee - Te) / R[v] * 100),
                            duration: Te / ne
                        }, 0).fromTo(h, {
                            xPercent: Ee((ee - Te + Q) / R[v] * 100)
                        }, {
                            xPercent: b[v],
                            duration: (ee - Te + Q - ee) / ne,
                            immediateRender: !1
                        }, Te / ne).add("label" + v, q / ne),
                        O[v] = q / ne;
                    ct = gsap.utils.wrap(0, w.duration())
                }
                , ve = v=>{
                    let h = w.progress();
                    w.progress(0, !0),
                    ce(),
                    v && se(),
                    ke(),
                    v && w.draggable ? w.time(O[x], !0) : w.progress(h, !0)
                }
                , de;
                gsap.set(z, {
                    x: 0
                }),
                ce(),
                se(),
                ke(),
                window.addEventListener("resize", ()=>ve(!0));
                function te(v, h) {
                    h = h || {},
                    Math.abs(v - x) > V / 2 && (v += v > x ? -V : V);
                    let ee = gsap.utils.wrap(0, V, v)
                      , q = O[ee];
                    return q > w.time() != v > x && (q += w.duration() * (v > x ? 1 : -1)),
                    (q < 0 || q > w.duration()) && (h.modifiers = {
                        time: ct
                    }),
                    x = ee,
                    h.overwrite = !0,
                    gsap.killTweensOf(de),
                    w.tweenTo(q, h)
                }
                if (w.next = v=>{
                    te(x + 1, v)
                }
                ,
                w.previous = v=>{
                    te(x - 1, v)
                }
                ,
                w.current = ()=>x,
                w.toIndex = (v,h)=>{
                    te(v, h)
                }
                ,
                w.closestIndex = v=>{
                    let h = Oe(O, w.time(), w.duration());
                    return v && (x = h),
                    h
                }
                ,
                w.times = O,
                w.progress(1, !0).progress(0, !0),
                M.reversed && (w.vars.onReverseComplete(),
                w.reverse()),
                M.draggable && typeof di == "function") {
                    de = document.createElement("div");
                    let v = gsap.utils.wrap(0, 1), h, ee, q, Te = ()=>w.progress(v(ee + (q.startX - q.x) * h)), tt = ()=>w.closestIndex(!0);
                    typeof Ar == "undefined" && console.warn("InertiaPlugin required for momentum-based scrolling and snapping. https://greensock.com/club"),
                    q = di.create(de, {
                        trigger: z[0].parentNode,
                        type: "x",
                        onPressInit() {
                            gsap.killTweensOf(w),
                            ee = w.progress(),
                            ve(),
                            h = 1 / Q,
                            gsap.set(de, {
                                x: ee / -h
                            })
                        },
                        onDrag: Te,
                        onThrowUpdate: Te,
                        inertia: !0,
                        snap: Fe=>{
                            let Ie = -(Fe * h) * w.duration()
                              , At = ct(Ie)
                              , Ne = O[Oe(O, At, w.duration())]
                              , ge = Ne - At;
                            return Math.abs(ge) > w.duration() / 2 && (ge += ge < 0 ? w.duration() : -w.duration()),
                            (Ie + ge) / w.duration() / -h
                        }
                        ,
                        onRelease: tt,
                        onThrowComplete: (Fe,Ie)=>{}
                    })[0],
                    w.draggable = q
                }
                return $(".nav-action").on("click", function() {
                    let v = gsap.timeline();
                    w.kill(),
                    w.restart(),
                    w.pause(),
                    v.to(".page-frame_cutout", {
                        height: e ? "35%" : "100%",
                        y: e ? "0vh" : "60vh",
                        ease: "Expo.easeInOut",
                        duration: e ? 1 : 1.4
                    }),
                    v.to(".page-frame_cutout", {
                        y: e ? "65vh" : "60vh",
                        ease: "Expo.easeInOut",
                        duration: 1.4
                    }, e ? .4 : 1.6),
                    v.to(".nav-shade", {
                        scaleY: 1,
                        opacity: 1,
                        ease: "Expo.easeInOut",
                        duration: .9
                    }, e ? .8 : .4),
                    v.to(".section-drag", {
                        y: "0%",
                        duration: 0
                    }, 0),
                    v.to(".main-wrapper", {
                        opacity: .65,
                        ease: "none",
                        duration: .5
                    }, .1),
                    v.to(".meter-number_wrapper", {
                        opacity: 1,
                        stagger: {
                            each: .07
                        },
                        ease: "none",
                        duration: .5
                    }, e ? 1.1 : .8),
                    v.to(".meter-number_wrapper", {
                        x: "0%",
                        y: "0%",
                        scale: 1,
                        stagger: {
                            each: .07
                        },
                        ease: "Expo.easeOut",
                        duration: 1.1
                    }, e ? 1 : .7),
                    v.to(".slidenav", {
                        opacity: 1,
                        stagger: {
                            each: .1
                        },
                        ease: "none",
                        duration: .2
                    }, e ? 1.4 : 1),
                    v.to(".slidenav", {
                        y: "0%",
                        stagger: {
                            each: .1
                        },
                        ease: "Expo.easeOut",
                        duration: .9
                    }, e ? 1.4 : 1),
                    v.to(".scroll-link", {
                        height: "0rem",
                        y: e ? "0rem" : "2rem",
                        ease: "Expo.easeInOut",
                        duration: e ? 1.2 : 1.6
                    }, e ? .6 : 0),
                    v.fromTo(".text-size-small.close_section .char", {
                        y: "100%"
                    }, {
                        y: "0%",
                        stagger: {
                            each: .04,
                            from: "left"
                        },
                        ease: "Expo.easeInOut",
                        duration: .8
                    }, 1),
                    v.fromTo(".text-size-small.is--loadtext .char", {
                        y: "0%"
                    }, {
                        y: "-100%",
                        stagger: {
                            each: .03,
                            from: "left"
                        },
                        ease: "Expo.easeInOut",
                        duration: .7
                    }, .7)
                }),
                $(".nav-close").on("click", function() {
                    let v = gsap.timeline();
                    v.to(".page-frame_cutout", {
                        y: "0vh",
                        ease: "Expo.easeInOut",
                        duration: 1.3
                    }, 0),
                    v.to(".page-frame_cutout", {
                        height: "100%",
                        ease: "Expo.easeInOut",
                        duration: 1.3
                    }, .5),
                    v.to(".nav-shade", {
                        scaleY: 0,
                        opacity: 0,
                        ease: "Power3.easeOut",
                        duration: .5
                    }, .1),
                    v.to(".section-drag", {
                        y: "-100%",
                        duration: 0
                    }, 1.1),
                    v.to(".meter-number_wrapper", {
                        opacity: 0,
                        ease: "none",
                        duration: .2
                    }, .4),
                    v.to(".main-wrapper", {
                        opacity: 1,
                        ease: "none",
                        duration: .5
                    }, .8),
                    v.to(".meter-number_wrapper", {
                        x: "70%",
                        y: "-30%",
                        scale: .5,
                        ease: "Expo.easeInOut",
                        duration: 1.2
                    }, 0),
                    v.to(".slidenav", {
                        opacity: 0,
                        ease: "Power3.easeOut",
                        duration: .4
                    }, 0),
                    v.to(".slidenav", {
                        y: "100%",
                        stagger: {
                            each: .07
                        },
                        ease: "Power3.easeOut",
                        duration: .4
                    }, 0),
                    v.to(".scroll-link", {
                        height: "3rem",
                        y: "0rem",
                        ease: "Expo.easeInOut",
                        duration: 1.5
                    }, 0),
                    v.to(".text-size-small.close_section .char", {
                        y: "100%",
                        stagger: {
                            each: .02,
                            from: "left"
                        },
                        ease: "Expo.easeOut",
                        duration: .6
                    }, 0),
                    v.to(".text-size-small.is--loadtext .char", {
                        y: "0%",
                        stagger: {
                            each: .02,
                            from: "left"
                        },
                        ease: "Expo.easeOut",
                        duration: .5
                    }, .1)
                }),
                w.closestIndex(!0),
                W && W(z[x], x),
                w
            }
        }),
        $(".chapters-open").on("click", function() {
            let c = gsap.timeline();
            c.to(".frame-cutout-base", {
                width: e ? "60%" : "100%",
                ease: "Expo.easeInOut",
                duration: 1
            }),
            c.to(".frame-cutout-base", {
                x: e ? "66.75%" : "0%",
                height: "100%",
                ease: "Expo.easeInOut",
                duration: 1.5
            }, .3),
            c.to(".frame-cutout-base", {
                y: e ? "0vh" : "60vh",
                ease: "Expo.easeInOut",
                duration: e ? 0 : 1.5
            }, e ? .8 : 0),
            c.to(".nav-shade", {
                scaleY: 1,
                opacity: 1,
                ease: "Expo.easeInOut",
                duration: .9
            }, e ? 0 : .5),
            c.to(".frame-cutout-base", {
                height: e ? "85%" : "100%",
                ease: "Expo.easeInOut",
                duration: 1.4
            }, 1.2),
            c.fromTo(".chapter-flyout_heading .char", {
                y: "120%"
            }, {
                y: "0%",
                stagger: {
                    each: .025
                },
                ease: "Expo.easeOut",
                duration: .9
            }, 1.8),
            c.to(".section-chapter", {
                y: "0%",
                duration: 0
            }, 0),
            c.to(".main-wrapper", {
                opacity: .65,
                ease: "none",
                duration: .5
            }, .2),
            c.to(".chapter-list", {
                opacity: 1,
                x: "0%",
                ease: "Expo.easeInOut",
                duration: 1.5
            }, e ? .3 : .4),
            c.to(".chapter-item", {
                x: "0%",
                y: "0%",
                scale: 1,
                stagger: {
                    each: .07
                },
                ease: "Expo.easeOut",
                duration: 1.1
            }, e ? 1 : 1.15),
            c.to(".scroll-link", {
                height: "0rem",
                y: e ? "0rem" : "2rem",
                ease: "Expo.easeInOut",
                duration: 1.4
            }, e ? 1.3 : 0),
            c.fromTo(".text-size-small.close_section .char", {
                y: "100%"
            }, {
                y: "0%",
                stagger: {
                    each: .04,
                    from: "left"
                },
                ease: "Expo.easeInOut",
                duration: .8
            }, 1),
            c.fromTo(".text-size-small.is--loadtext .char", {
                y: "0%"
            }, {
                y: "-100%",
                stagger: {
                    each: .03,
                    from: "left"
                },
                ease: "Expo.easeInOut",
                duration: .7
            }, .7)
        }),
        $(".chapter-close").on("click", function() {
            let c = gsap.timeline();
            c.to(".frame-cutout-base", {
                x: "0%",
                ease: "Expo.easeInOut",
                duration: 1.1
            }, .7),
            c.to(".frame-cutout-base", {
                width: "100%",
                y: "0vh",
                ease: "Expo.easeInOut",
                duration: e ? 1.3 : 1.1
            }, e ? 1.1 : .45),
            c.to(".frame-cutout-base", {
                height: "100%",
                ease: "Expo.easeInOut",
                duration: 1.3
            }, 1.2),
            c.to(".nav-shade", {
                scaleY: 0,
                opacity: 0,
                ease: "Expo.easeOut",
                duration: e ? .7 : 1.1
            }, e ? 1.7 : .9),
            c.to(".frame-cutout-base", {
                height: "100%",
                ease: "Expo.easeInOut",
                duration: 1.4
            }, 0),
            c.to(".chapter-flyout_heading .char", {
                y: "120%",
                stagger: {
                    each: .01
                },
                ease: "Expo.easeInOut",
                duration: .9
            }, .05),
            c.to(".section-chapter", {
                y: "-100%",
                duration: 0
            }, 2),
            c.to(".main-wrapper", {
                opacity: 1,
                ease: "none",
                duration: .5
            }, e ? 1.6 : 1.2),
            c.to(".chapter-list", {
                opacity: 0,
                x: "-100%",
                ease: "Expo.easeInOut",
                duration: 1.1
            }, e ? .7 : .1),
            c.to(".chapter-item", {
                x: "-70%",
                y: "50%",
                scale: .3,
                stagger: {
                    each: .04
                },
                ease: "Expo.easeInOut",
                duration: 1.4
            }, e ? .6 : 0),
            c.to(".scroll-link", {
                height: "3rem",
                y: "0rem",
                ease: "Expo.easeInOut",
                duration: 1.5
            }, e ? 1.4 : .4),
            c.to(".text-size-small.close_section .char", {
                y: "100%",
                stagger: {
                    each: .02,
                    from: "left"
                },
                ease: "Expo.easeOut",
                duration: .6
            }, 0),
            c.to(".text-size-small.is--loadtext .char", {
                y: "0%",
                stagger: {
                    each: .02,
                    from: "left"
                },
                ease: "Expo.easeOut",
                duration: .5
            }, .1)
        });
        let u = $(".chaper_component");
        $(".chapter-block").each(function(c) {
            let _ = gsap.timeline({
                scrollTrigger: {
                    trigger: $(this),
                    start: "top bottom",
                    end: "bottom top",
                    toggleActions: "restart none none reverse"
                }
            });
            c > 0 && _.from(u.eq(c), {
                y: "100%",
                ease: "power2.out",
                duration: .5
            });
            let n = gsap.timeline({
                scrollTrigger: {
                    trigger: $(this),
                    start: "top 25%",
                    end: "bottom top",
                    onEnter: ()=>{
                        n.to(u.eq(c).find(".chapter_bottom"), {
                            y: "0vw",
                            x: "0vw",
                            height: e ? "4.25rem" : "3.7rem",
                            rotateZ: "0deg",
                            fontSize: e ? "2rem" : "1rem",
                            ease: "Expo.easeInOut",
                            duration: 1.3
                        }, 0),
                        n.to(u.eq(c).find(".sticky-wrapper"), {
                            width: "100vw",
                            ease: "Expo.easeInOut",
                            duration: 1.3
                        }, 0),
                        n.to(u.eq(c).find(".chaptershow"), {
                            y: "-100%",
                            ease: "Expo.easeInOut",
                            duration: 1.3
                        }, 0),
                        n.to(u.eq(c).find(".text-average.top .char"), {
                            y: "-100%",
                            stagger: {
                                each: .04,
                                from: "left"
                            },
                            ease: "Expo.easeInOut",
                            duration: 1
                        }, 0),
                        n.to(u.eq(c).find(".text-average.bottom .char"), {
                            y: "-100%",
                            stagger: {
                                each: .04,
                                from: "left"
                            },
                            ease: "Expo.easeInOut",
                            duration: 1
                        }, 0),
                        n.to(u.eq(c).find(".chapter-title_pin"), {
                            scale: 0,
                            stagger: {
                                each: .2
                            },
                            ease: "Expo.easeInOut",
                            duration: 1
                        }, 0)
                    }
                    ,
                    onLeave: ()=>{
                        n.reverse()
                    }
                    ,
                    onLeaveBack: ()=>{
                        n.reverse()
                    }
                    ,
                    onEnterBack: ()=>{
                        n.restart()
                    }
                }
            })
        });
        let l = $(".chapter-block_title-wrapper");
        $(".chapter-block_info").each(function(c) {
            gsap.timeline({
                scrollTrigger: {
                    trigger: $(this),
                    start: "top bottom",
                    end: "bottom bottom",
                    scrub: 1.5
                }
            }).to(l.eq(c).find(".heading-xxlarge .char"), {
                y: "-100%",
                stagger: {
                    each: .04,
                    from: "left"
                },
                ease: "Expo.easeOut",
                duration: 1
            })
        }),
        $(".chapter-block_info").each(function(c) {
            gsap.timeline({
                scrollTrigger: {
                    trigger: $(this),
                    start: "bottom center",
                    end: "bottom top",
                    scrub: 1.5
                }
            }).to(l.eq(c).find(".heading-xxlarge .char"), {
                y: "-200%",
                stagger: {
                    each: .04,
                    from: "left"
                },
                ease: "Expo.easeOut",
                duration: 1
            })
        });
        let d = $(".table_item");
        $(".table_item").each(function(c) {
            let _ = gsap.timeline({
                scrollTrigger: {
                    trigger: $(this),
                    start: "top bottom"
                }
            });
            _.from(d.eq(c).find(".table_item-inside"), {
                width: "0%",
                x: "-5rem",
                ease: "Expo.easeInOut",
                duration: 1.8
            }, 0),
            _.from(d.eq(c).find(".table_item-wrapper"), {
                width: "100%",
                x: "0rem",
                ease: "Expo.easeOut",
                duration: 1.5
            }, 1),
            _.from(d.eq(c).find(".action-circle"), {
                scale: 0,
                ease: "Expo.easeOut",
                duration: .9
            }, 1.5)
        }),
        $(".chapter-name_grid").on("click", function() {
            let c = $(this).closest(".table_item").index()
              , _ = $(".table_flyup")
              , n = gsap.timeline();
            n.to(_.eq(c), {
                x: "0%",
                ease: "Expo.easeInOut",
                duration: e ? 1.3 : 1.7
            }, e ? 0 : .2),
            n.fromTo(_.eq(c).find(".previews_left-title .char"), {
                y: "100%"
            }, {
                y: "0%",
                stagger: {
                    each: .03
                },
                ease: "Expo.easeOut",
                duration: .8
            }, 1.3),
            n.to(_.eq(c).find(".previews_left-title"), {
                opacity: 1,
                stagger: {
                    each: .03
                },
                ease: "Expo.easeOut",
                duration: 0
            }, 0),
            n.to(".frame-cutout-base", {
                width: e ? "39%" : "100%",
                ease: "Expo.easeInOut",
                duration: 1.3
            }, 0),
            n.to(".frame-cutout-base", {
                y: e ? "0vh" : "60vh",
                ease: "Expo.easeInOut",
                duration: 1.4
            }, 0),
            n.to(".chapter_previews", {
                y: "0%",
                ease: "Expo.easeInOut",
                duration: 0
            }, 0),
            n.to(".nav-shade", {
                scaleY: 1,
                opacity: 1,
                ease: "Expo.easeInOut",
                duration: .9
            }, 0),
            n.to(".main-wrapper", {
                opacity: .65,
                ease: "none",
                duration: .5
            }, .2),
            n.to(".frame-cutout-base", {
                height: e ? "80%" : "100%",
                ease: "Expo.easeOut",
                duration: 1
            }, e ? 1.3 : 0),
            n.to(".scroll-link", {
                height: "0rem",
                y: e ? "0rem" : "2rem",
                ease: "Expo.easeOut",
                duration: 1
            }, e ? .9 : 0),
            n.fromTo(".text-size-small.close_section .char", {
                y: "100%"
            }, {
                y: "0%",
                stagger: {
                    each: .04,
                    from: "left"
                },
                ease: "Expo.easeInOut",
                duration: .8
            }, 1),
            n.fromTo(".text-size-small.is--loadtext .char", {
                y: "0%"
            }, {
                y: "-100%",
                stagger: {
                    each: .03,
                    from: "left"
                },
                ease: "Expo.easeInOut",
                duration: .7
            }, .7)
        }),
        $(".fly_close").on("click", function() {
            let c = $(this).closest(".table_flyup").index()
              , _ = $(".table_flyup");
            (()=>{
                document.querySelectorAll("iframe").forEach(C=>{
                    C.src = C.src
                }
                ),
                document.querySelectorAll("video .youtube-video").forEach(C=>{
                    C.pause()
                }
                )
            }
            )();
            let g = gsap.timeline();
            g.to(".table_flyup", {
                x: "180%",
                ease: "Expo.easeInOut",
                duration: 1.1
            }, e ? .5 : 0),
            g.to(_.eq(c).find(".previews_left-title .char"), {
                y: "110%",
                stagger: {
                    each: .015
                },
                ease: "Expo.easeInOut",
                duration: 1
            }, 0),
            g.to(".frame-cutout-base", {
                width: "100%",
                y: "0vh",
                ease: "Expo.easeInOut",
                duration: 1.1
            }, e ? .5 : .3),
            g.to(".chapter_previews", {
                y: "-100%",
                ease: "Expo.easeInOut",
                duration: 0
            }, 1.6),
            g.to(".nav-shade", {
                scaleY: 0,
                opacity: 0,
                ease: "Expo.easeInOut",
                duration: .9
            }, .4),
            g.to(".main-wrapper", {
                opacity: 1,
                ease: "none",
                duration: .5
            }, 1),
            g.to(".frame-cutout-base", {
                height: "100%",
                ease: "Expo.easeInOut",
                duration: 1.2
            }, e ? 0 : 1.1),
            g.to(".scroll-link", {
                height: "3rem",
                y: "0rem",
                ease: "Expo.easeOut",
                duration: e ? .9 : 1.2
            }, e ? 1.3 : 1),
            g.to(".text-size-small.close_section .char", {
                y: "100%",
                stagger: {
                    each: .02,
                    from: "left"
                },
                ease: "Expo.easeOut",
                duration: .6
            }, 0),
            g.to(".text-size-small.is--loadtext .char", {
                y: "0%",
                stagger: {
                    each: .02,
                    from: "left"
                },
                ease: "Expo.easeOut",
                duration: .5
            }, .1)
        }),
        $(".chapter_open").on("click", function() {
            let c = $(this).closest(".chapter-block_info").index()
              , _ = $(".table_flyup")
              , n = gsap.timeline();
            n.to(_.eq(c), {
                x: "0%",
                ease: "Expo.easeInOut",
                duration: e ? 1.3 : 1.7
            }, e ? 0 : .2),
            n.fromTo(_.eq(c).find(".previews_left-title .char"), {
                y: "100%"
            }, {
                y: "0%",
                stagger: {
                    each: .03
                },
                ease: "Expo.easeOut",
                duration: .8
            }, 1.3),
            n.to(_.eq(c).find(".previews_left-title"), {
                opacity: 1,
                stagger: {
                    each: .03
                },
                ease: "Expo.easeOut",
                duration: 0
            }, 0),
            n.to(".frame-cutout-base", {
                width: e ? "39%" : "100%",
                ease: "Expo.easeInOut",
                duration: 1.3
            }, 0),
            n.to(".frame-cutout-base", {
                y: e ? "0vh" : "60vh",
                ease: "Expo.easeInOut",
                duration: 1.4
            }, 0),
            n.to(".chapter_previews", {
                y: "0%",
                ease: "Expo.easeInOut",
                duration: 0
            }, 0),
            n.to(".nav-shade", {
                scaleY: 1,
                opacity: 1,
                ease: "Expo.easeInOut",
                duration: .9
            }, 0),
            n.to(".main-wrapper", {
                opacity: .65,
                ease: "none",
                duration: .5
            }, .2),
            n.to(".frame-cutout-base", {
                height: e ? "80%" : "100%",
                ease: "Expo.easeOut",
                duration: 1
            }, e ? 1.3 : 0),
            n.to(".scroll-link", {
                height: "0rem",
                y: e ? "0rem" : "2rem",
                ease: "Expo.easeOut",
                duration: 1
            }, e ? .9 : 0),
            n.fromTo(".text-size-small.close_section .char", {
                y: "100%"
            }, {
                y: "0%",
                stagger: {
                    each: .04,
                    from: "left"
                },
                ease: "Expo.easeInOut",
                duration: .8
            }, 1),
            n.fromTo(".text-size-small.is--loadtext .char", {
                y: "0%"
            }, {
                y: "-100%",
                stagger: {
                    each: .03,
                    from: "left"
                },
                ease: "Expo.easeInOut",
                duration: .7
            }, .7)
        }),
        $(".chapter-item").on("click", function() {
            let c = $(this).closest(".chapter-quick_item").index()
              , _ = $(".table_flyup")
              , n = gsap.timeline();
            n.to(".chapter-flyout_heading .char", {
                y: "120%",
                stagger: {
                    each: .01
                },
                ease: "Expo.easeInOut",
                duration: .9
            }, 0),
            n.to(".section-chapter", {
                y: "-100%",
                duration: 0
            }, 1.7),
            n.to(".chapter-list", {
                opacity: 0,
                x: "-100%",
                ease: "Expo.easeInOut",
                duration: 1.1
            }, .5),
            n.to(".chapter-item", {
                x: "-70%",
                y: "50%",
                scale: .3,
                stagger: {
                    each: .04
                },
                ease: "Expo.easeInOut",
                duration: 1.4
            }, .4),
            n.to(_.eq(c), {
                x: "0%",
                ease: "Expo.easeInOut",
                duration: e ? 1.3 : 1.7
            }, e ? .5 : .2),
            n.fromTo(_.eq(c).find(".previews_left-title .char"), {
                y: "100%"
            }, {
                y: "0%",
                stagger: {
                    each: .03
                },
                ease: "Expo.easeOut",
                duration: .8
            }, 1.3),
            n.to(_.eq(c).find(".previews_left-title"), {
                opacity: 1,
                stagger: {
                    each: .03
                },
                ease: "Expo.easeOut",
                duration: 0
            }, 0),
            n.to(".frame-cutout-base", {
                width: e ? "39%" : "100%",
                x: "0%",
                ease: "Expo.easeInOut",
                duration: 1.3
            }, e ? .5 : 0),
            n.to(".frame-cutout-base", {
                y: e ? "0vh" : "60vh",
                height: "100%",
                ease: "Expo.easeInOut",
                duration: 1.4
            }, 0),
            n.to(".chapter_previews", {
                y: "0%",
                ease: "Expo.easeInOut",
                duration: 0
            }, 0),
            n.to(".nav-shade", {
                scaleY: 1,
                opacity: 1,
                ease: "Expo.easeInOut",
                duration: .9
            }, 0),
            n.to(".main-wrapper", {
                opacity: .65,
                ease: "none",
                duration: .5
            }, .2),
            n.to(".frame-cutout-base", {
                height: e ? "80%" : "100%",
                ease: "Expo.easeOut",
                duration: 1
            }, e ? 1.3 : 0),
            n.to(".scroll-link", {
                height: "0rem",
                y: e ? "0rem" : "2rem",
                ease: "Expo.easeOut",
                duration: 1
            }, e ? .9 : 0)
        });
        const y = gsap.from(".page-frame_scroll", {
            y: "0vh",
            paused: !0,
            ease: "Power1.easeInOut",
            duration: .6
        }).progress(1);
        ae.create({
            start: "top top",
            end: 99999,
            onUpdate: c=>{
                c.direction === -1 ? y.play() : y.reverse()
            }
        })
    }
    )
});
