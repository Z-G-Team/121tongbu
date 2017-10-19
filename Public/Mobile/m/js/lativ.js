// Input 0
(function(j, g) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = j.document ? g(j, !0) : function(k) {
        if (!k.document)
            throw Error("jQuery requires a window with a document");
        return g(k)
    }
     : g(j)
}
)("undefined" != typeof window ? window : this, function(j, g) {
    function k(a) {
        var b = a.length
          , d = m.type(a);
        return "function" === d || m.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === d || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }
    function a(a, b, d) {
        if (m.isFunction(b))
            return m.grep(a, function(a, u) {
                return !!b.call(a, 
                u, a) !== d
            }
            );
        if (b.nodeType)
            return m.grep(a, function(a) {
                return a === b !== d
            }
            );
        if ("string" == typeof b) {
            if (hb.test(b))
                return m.filter(b, a, d);
            b = m.filter(b, a)
        }
        return m.grep(a, function(a) {
            return W.call(b, a) >= 0 !== d
        }
        )
    }
    function f(a, b) {
        for (; (a = a[b]) && 1 !== a.nodeType; )
            ;
        return a
    }
    function e(a) {
        var b = La[a] = {};
        return m.each(a.match(Z) || [], function(a, u) {
            b[u] = !0
        }
        ),
        b
    }
    function d() {
        y.removeEventListener("DOMContentLoaded", d, !1);
        j.removeEventListener("load", d, !1);
        m.ready()
    }
    function b() {
        Object.defineProperty(this.cache = {}, 0, 
        {
            get: function() {
                return {}
            }
        });
        this.expando = m.expando + Math.random()
    }
    function h(a, b, d) {
        var h;
        if (void 0 === d && 1 === a.nodeType)
            if (h = "data-" + b.replace(ib, "-$1").toLowerCase(),
            d = a.getAttribute(h),
            "string" == typeof d) {
                try {
                    d = "true" === d ? !0 : "false" === d ? !1 : "null" === d ? null  : +d + "" === d ? +d : jb.test(d) ? m.parseJSON(d) : d
                } catch (e) {}
                R.set(a, b, d)
            } else
                d = void 0;
        return d
    }
    function l() {
        return !0
    }
    function n() {
        return !1
    }
    function v() {
        try {
            return y.activeElement
        } catch (a) {}
    }
    function o(a, b) {
        return m.nodeName(a, "table") && m.nodeName(11 !== 
        b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }
    function q(a) {
        return a.type = (null  !== a.getAttribute("type")) + "/" + a.type,
        a
    }
    function p(a) {
        var b = kb.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"),
        a
    }
    function s(a, b) {
        for (var d = 0, h = a.length; h > d; d++)
            B.set(a[d], "globalEval", !b || B.get(b[d], "globalEval"))
    }
    function r(a, b) {
        var d, h, e, l, f, n;
        if (1 === b.nodeType) {
            if (B.hasData(a) && (d = B.access(a),
            h = B.set(b, d),
            n = d.events))
                for (e in delete h.handle,
                h.events = {},
                n) {
                    d = 0;
                    for (h = n[e].length; h > d; d++)
                        m.event.add(b, e, n[e][d])
                }
            R.hasData(a) && (l = R.access(a),
            f = m.extend({}, l),
            R.set(b, f))
        }
    }
    function t(a, b) {
        var d = a.getElementsByTagName ? a.getElementsByTagName(b || "*") : a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
        return void 0 === b || b && m.nodeName(a, b) ? m.merge([a], d) : d
    }
    function w(a, b) {
        var d, h = m(b.createElement(a)).appendTo(b.body), e = j.getDefaultComputedStyle && (d = j.getDefaultComputedStyle(h[0])) ? d.display : m.css(h[0], "display");
        return h.detach(),
        e
    }
    function z(a) {
        var b = 
        y
          , d = Ma[a];
        return d || (d = w(a, b),
        "none" !== d && d || (va = (va || m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),
        b = va[0].contentDocument,
        b.write(),
        b.close(),
        d = w(a, b),
        va.detach()),
        Ma[a] = d),
        d
    }
    function C(a, b, d) {
        var h, e, l, f, n = a.style;
        return d = d || wa(a),
        d && (f = d.getPropertyValue(b) || d[b]),
        d && ("" !== f || m.contains(a.ownerDocument, a) || (f = m.style(a, b)),
        Fa.test(f) && Na.test(b) && (h = n.width,
        e = n.minWidth,
        l = n.maxWidth,
        n.minWidth = n.maxWidth = n.width = f,
        f = d.width,
        n.width = h,
        n.minWidth = e,
        n.maxWidth = 
        l)),
        void 0 !== f ? f + "" : f
    }
    function G(a, b) {
        return {
            get: function() {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }
    function D(a, b) {
        if (b in a)
            return b;
        for (var d = b[0].toUpperCase() + b.slice(1), h = b, e = Oa.length; e--; )
            if (b = Oa[e] + d,
            b in a)
                return b;
        return h
    }
    function E(a, b, d) {
        return (a = mb.exec(b)) ? Math.max(0, a[1] - (d || 0)) + (a[2] || "px") : b
    }
    function N(a, b, d, h, e) {
        b = d === (h ? "border" : "content") ? 4 : "width" === b ? 1 : 0;
        for (var l = 0; 4 > b; b += 2)
            "margin" === d && (l += m.css(a, d + ca[b], !0, e)),
            h ? ("content" === d && (l -= m.css(a, 
            "padding" + ca[b], !0, e)),
            "margin" !== d && (l -= m.css(a, "border" + ca[b] + "Width", !0, e))) : (l += m.css(a, "padding" + ca[b], !0, e),
            "padding" !== d && (l += m.css(a, "border" + ca[b] + "Width", !0, e)));
        return l
    }
    function H(a, b, d) {
        var h = !0
          , e = "width" === b ? a.offsetWidth : a.offsetHeight
          , l = wa(a)
          , f = "border-box" === m.css(a, "boxSizing", !1, l);
        if (0 >= e || null  == e) {
            if (e = C(a, b, l),
            (0 > e || null  == e) && (e = a.style[b]),
            Fa.test(e))
                return e;
            h = f && (J.boxSizingReliable() || e === a.style[b]);
            e = parseFloat(e) || 0
        }
        return e + N(a, b, d || (f ? "border" : "content"), h, l) + "px"
    }
    function L(a, 
    b) {
        for (var d, h, e, l = [], f = 0, n = a.length; n > f; f++)
            h = a[f],
            h.style && (l[f] = B.get(h, "olddisplay"),
            d = h.style.display,
            b ? (l[f] || "none" !== d || (h.style.display = ""),
            "" === h.style.display && pa(h) && (l[f] = B.access(h, "olddisplay", z(h.nodeName)))) : (e = pa(h),
            "none" === d && e || B.set(h, "olddisplay", e ? d : m.css(h, "display"))));
        for (f = 0; n > f; f++)
            h = a[f],
            h.style && (b && "none" !== h.style.display && "" !== h.style.display || (h.style.display = b ? l[f] || "" : "none"));
        return a
    }
    function F(a, b, d, h, e) {
        return new F.prototype.init(a,b,d,h,e)
    }
    function X() {
        return setTimeout(function() {
            da = 
            void 0
        }
        ),
        da = m.now()
    }
    function O(a, b) {
        var d, h = 0, e = {
            height: a
        };
        for (b = b ? 1 : 0; 4 > h; h += 2 - b)
            d = ca[h],
            e["margin" + d] = e["padding" + d] = a;
        return b && (e.opacity = e.width = a),
        e
    }
    function Y(a, b, d) {
        for (var h, e = (qa[b] || []).concat(qa["*"]), l = 0, f = e.length; f > l; l++)
            if (h = e[l].call(d, b, a))
                return h
    }
    function ra(a, b) {
        var d, h, e, l, f;
        for (d in a)
            if (h = m.camelCase(d),
            e = b[h],
            l = a[d],
            m.isArray(l) && (e = l[1],
            l = a[d] = l[0]),
            d !== h && (a[h] = l,
            delete a[d]),
            f = m.cssHooks[h],
            f && "expand" in f)
                for (d in l = f.expand(l),
                delete a[h],
                l)
                    d in a || (a[d] = l[d],
                    b[d] = e);
            else
                b[h] = e
    }
    function V(a, b, d) {
        var h, e = 0, l = xa.length, f = m.Deferred().always(function() {
            delete n.elem
        }
        ), n = function() {
            if (h)
                return !1;
            var b = da || X();
            b = Math.max(0, g.startTime + g.duration - b);
            for (var d = 1 - (b / g.duration || 0), e = 0, l = g.tweens.length; l > e; e++)
                g.tweens[e].run(d);
            return f.notifyWith(a, [g, d, b]),
            1 > d && l ? b : (f.resolveWith(a, [g]),
            !1)
        }
        , g = f.promise({
            elem: a,
            props: m.extend({}, b),
            opts: m.extend(!0, {
                specialEasing: {}
            }, d),
            originalProperties: b,
            originalOptions: d,
            startTime: da || X(),
            duration: d.duration,
            tweens: [],
            createTween: function(b, 
            d) {
                var h = m.Tween(a, g.opts, b, d, g.opts.specialEasing[b] || g.opts.easing);
                return g.tweens.push(h),
                h
            },
            stop: function(b) {
                var d = 0
                  , e = b ? g.tweens.length : 0;
                if (h)
                    return this;
                for (h = !0; e > d; d++)
                    g.tweens[d].run(1);
                return b ? f.resolveWith(a, [g, b]) : f.rejectWith(a, [g, b]),
                this
            }
        });
        d = g.props;
        for (ra(d, g.opts.specialEasing); l > e; e++)
            if (b = xa[e].call(g, a, d, g.opts))
                return b;
        return m.map(d, Y, g),
        m.isFunction(g.opts.start) && g.opts.start.call(a, g),
        m.fx.timer(m.extend(n, {
            elem: a,
            anim: g,
            queue: g.opts.queue
        })),
        g.progress(g.opts.progress).done(g.opts.done, 
        g.opts.complete).fail(g.opts.fail).always(g.opts.always)
    }
    function ba(a) {
        return function(b, d) {
            "string" != typeof b && (d = b,
            b = "*");
            var h, e = 0, l = b.toLowerCase().match(Z) || [];
            if (m.isFunction(d))
                for (; h = l[e++]; )
                    "+" === h[0] ? (h = h.slice(1) || "*",
                    (a[h] = a[h] || []).unshift(d)) : (a[h] = a[h] || []).push(d)
        }
    }
    function ea(a, b, d, h) {
        function e(n) {
            var g;
            return l[n] = !0,
            m.each(a[n] || [], function(a, u) {
                var n = u(b, d, h);
                return "string" != typeof n || f || l[n] ? f ? !(g = n) : void 0 : (b.dataTypes.unshift(n),
                e(n),
                !1)
            }
            ),
            g
        }
        var l = {}
          , f = a === Ga;
        return e(b.dataTypes[0]) || 
        !l["*"] && e("*")
    }
    function sa(a, b) {
        var d, h, e = m.ajaxSettings.flatOptions || {};
        for (d in b)
            void 0 !== b[d] && ((e[d] ? a : h || (h = {}))[d] = b[d]);
        return h && m.extend(!0, a, h),
        a
    }
    function aa(a, b, d, h) {
        var e;
        if (m.isArray(b))
            m.each(b, function(b, e) {
                d || nb.test(a) ? h(a, e) : aa(a + "[" + ("object" == typeof e ? b : "") + "]", e, d, h)
            }
            );
        else if (d || "object" !== m.type(b))
            h(a, b);
        else
            for (e in b)
                aa(a + "[" + e + "]", b[e], d, h)
    }
    var A = []
      , M = A.slice
      , P = A.concat
      , Q = A.push
      , W = A.indexOf
      , fa = {}
      , Da = fa.toString
      , ta = fa.hasOwnProperty
      , J = {}
      , y = j.document
      , m = function(a, b) {
        return new m.fn.init(a,
        b)
    }
      , ob = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
      , pb = /^-ms-/
      , qb = /-([\da-z])/gi
      , rb = function(a, b) {
        return b.toUpperCase()
    }
    ;
    m.fn = m.prototype = {
        jquery: "2.1.1",
        constructor: m,
        selector: "",
        length: 0,
        toArray: function() {
            return M.call(this)
        },
        get: function(a) {
            return null  != a ? 0 > a ? this[a + this.length] : this[a] : M.call(this)
        },
        pushStack: function(a) {
            a = m.merge(this.constructor(), a);
            return a.prevObject = this,
            a.context = this.context,
            a
        },
        each: function(a, b) {
            return m.each(this, a, b)
        },
        map: function(a) {
            return this.pushStack(m.map(this, function(b, 
            d) {
                return a.call(b, d, b)
            }
            ))
        },
        slice: function() {
            return this.pushStack(M.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(a) {
            var b = this.length;
            a = +a + (0 > a ? b : 0);
            return this.pushStack(a >= 0 && b > a ? [this[a]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null )
        },
        push: Q,
        sort: A.sort,
        splice: A.splice
    };
    m.extend = m.fn.extend = function() {
        var a, b, d, h, e, l, f = arguments[0] || {}, n = 1, g = arguments.length, k = !1;
        "boolean" == typeof f && (k = f,
        f = arguments[n] || {},
        n++);
        "object" == typeof f || m.isFunction(f) || (f = {});
        for (n === g && (f = this,
        n--); g > n; n++)
            if (null  != (a = arguments[n]))
                for (b in a)
                    d = f[b],
                    h = a[b],
                    f !== h && (k && h && (m.isPlainObject(h) || (e = m.isArray(h))) ? (e ? (e = !1,
                    l = d && m.isArray(d) ? d : []) : l = d && m.isPlainObject(d) ? d : {},
                    f[b] = m.extend(k, l, h)) : void 0 !== h && (f[b] = h));
        return f
    }
    ;
    m.extend({
        expando: "jQuery" + ("2.1.1" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw Error(a);
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === m.type(a)
        },
        isArray: Array.isArray,
        isWindow: function(a) {
            return null  != a && a === a.window
        },
        isNumeric: function(a) {
            return !m.isArray(a) && a - parseFloat(a) >= 0
        },
        isPlainObject: function(a) {
            return "object" !== m.type(a) || a.nodeType || m.isWindow(a) ? !1 : a.constructor && !ta.call(a.constructor.prototype, "isPrototypeOf") ? !1 : !0
        },
        isEmptyObject: function(a) {
            for (var b in a)
                return !1;
            return !0
        },
        type: function(a) {
            return null  == a ? a + "" : "object" == typeof a || "function" == typeof a ? fa[Da.call(a)] || "object" : typeof a
        },
        globalEval: function(a) {
            var b, d = eval;
            (a = m.trim(a)) && (1 === a.indexOf("use strict") ? 
            (b = y.createElement("script"),
            b.text = a,
            y.head.appendChild(b).parentNode.removeChild(b)) : d(a))
        },
        camelCase: function(a) {
            return a.replace(pb, "ms-").replace(qb, rb)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, b, d) {
            var h, e = 0, l = a.length, f = k(a);
            if (d)
                if (f)
                    for (; l > e; e++) {
                        if (h = b.apply(a[e], d),
                        h === !1)
                            break
                    }
                else
                    for (e in a) {
                        if (h = b.apply(a[e], d),
                        h === !1)
                            break
                    }
            else if (f)
                for (; l > e; e++) {
                    if (h = b.call(a[e], e, a[e]),
                    h === !1)
                        break
                }
            else
                for (e in a)
                    if (h = b.call(a[e], e, a[e]),
                    h === !1)
                        break;
            return a
        },
        trim: function(a) {
            return null  == a ? "" : (a + "").replace(ob, "")
        },
        makeArray: function(a, b) {
            var d = b || [];
            return null  != a && (k(Object(a)) ? m.merge(d, "string" == typeof a ? [a] : a) : Q.call(d, a)),
            d
        },
        inArray: function(a, b, d) {
            return null  == b ? -1 : W.call(b, a, d)
        },
        merge: function(a, b) {
            for (var d = +b.length, h = 0, e = a.length; d > h; h++)
                a[e++] = b[h];
            return a.length = e,
            a
        },
        grep: function(a, b, d) {
            for (var h = [], e = 0, l = a.length, f = !d; l > e; e++)
                d = !b(a[e], e),
                d !== f && h.push(a[e]);
            return h
        },
        map: function(a, b, d) {
            var h, e = 0, l = a.length, f = [];
            if (k(a))
                for (; l > e; e++)
                    h = b(a[e], e, d),
                    null  != h && f.push(h);
            else
                for (e in a)
                    h = b(a[e], e, d),
                    null  != h && f.push(h);
            return P.apply([], f)
        },
        guid: 1,
        proxy: function(a, b) {
            var d, h, e;
            return "string" == typeof b && (d = a[b],
            b = a,
            a = d),
            m.isFunction(a) ? (h = M.call(arguments, 2),
            e = function() {
                return a.apply(b || this, h.concat(M.call(arguments)))
            }
            ,
            e.guid = a.guid = a.guid || m.guid++,
            e) : void 0
        },
        now: Date.now,
        support: J
    });
    m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
        fa["[object " + b + "]"] = b.toLowerCase()
    }
    );
    A = function(a) {
        function b(a, d, h, e) {
            var l, u, f, n, I;
            if ((d ? d.ownerDocument || d : W) !== y && Q(d),
            d = d || y,
            h = h || [],
            !a || "string" != typeof a)
                return h;
            if (1 !== (n = d.nodeType) && 9 !== n)
                return [];
            if (H && !e) {
                if (l = xa.exec(a))
                    if (f = l[1])
                        if (9 === n) {
                            if (u = d.getElementById(f),
                            !u || !u.parentNode)
                                return h;
                            if (u.id === f)
                                return h.push(u),
                                h
                        } else {
                            if (d.ownerDocument && (u = d.ownerDocument.getElementById(f)) && fa(d, u) && u.id === f)
                                return h.push(u),
                                h
                        }
                    else {
                        if (l[2])
                            return la.apply(h, d.getElementsByTagName(a)),
                            h;
                        if ((f = l[3]) && A.getElementsByClassName && d.getElementsByClassName)
                            return la.apply(h, 
                            d.getElementsByClassName(f)),
                            h
                    }
                if (A.qsa && (!F || !F.test(a))) {
                    if (u = l = S,
                    f = d,
                    I = 9 === n && a,
                    1 === n && "object" !== d.nodeName.toLowerCase()) {
                        n = M(a);
                        (l = d.getAttribute("id")) ? u = l.replace(ya, "\\$&") : d.setAttribute("id", u);
                        u = "[id='" + u + "'] ";
                        for (f = n.length; f--; )
                            n[f] = u + o(n[f]);
                        f = oa.test(a) && k(d.parentNode) || d;
                        I = n.join(",")
                    }
                    if (I)
                        try {
                            return la.apply(h, f.querySelectorAll(I)),
                            h
                        } catch (m) {} finally {
                            l || d.removeAttribute("id")
                        }
                }
            }
            return B(a.replace(ba, "$1"), d, h, e)
        }
        function d() {
            function a(d, h) {
                return b.push(d + " ") > x.cacheLength && 
                delete a[b.shift()],
                a[d + " "] = h
            }
            var b = [];
            return a
        }
        function h(a) {
            return a[S] = !0,
            a
        }
        function e(a) {
            var b = y.createElement("div");
            try {
                return !!a(b)
            } catch (d) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b)
            }
        }
        function l(a, b) {
            for (var d = a.split("|"), h = a.length; h--; )
                x.attrHandle[d[h]] = b
        }
        function f(a, b) {
            var d = b && a
              , h = d && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || Z) - (~a.sourceIndex || Z);
            if (h)
                return h;
            if (d)
                for (; d = d.nextSibling; )
                    if (d === b)
                        return -1;
            return a ? 1 : -1
        }
        function n(a) {
            return function(b) {
                return "input" === 
                b.nodeName.toLowerCase() && b.type === a
            }
        }
        function m(a) {
            return function(b) {
                var d = b.nodeName.toLowerCase();
                return ("input" === d || "button" === d) && b.type === a
            }
        }
        function g(a) {
            return h(function(b) {
                return b = +b,
                h(function(d, h) {
                    for (var e, l = a([], d.length, b), u = l.length; u--; )
                        d[e = l[u]] && (d[e] = !(h[e] = d[e]))
                }
                )
            }
            )
        }
        function k(a) {
            return a && typeof a.getElementsByTagName !== U && a
        }
        function j() {}
        function o(a) {
            for (var b = 0, d = a.length, h = ""; d > b; b++)
                h += a[b].value;
            return h
        }
        function v(a, b, d) {
            var h = b.dir
              , e = d && "parentNode" === h
              , l = O++;
            return b.first ? 
            function(b, d, l) {
                for (; b = b[h]; )
                    if (1 === b.nodeType || e)
                        return a(b, d, l)
            }
             : function(b, d, u) {
                var f, n, I = [ga, l];
                if (u)
                    for (; b = b[h]; ) {
                        if ((1 === b.nodeType || e) && a(b, d, u))
                            return !0
                    }
                else
                    for (; b = b[h]; )
                        if (1 === b.nodeType || e) {
                            if (n = b[S] || (b[S] = {}),
                            (f = n[h]) && f[0] === ga && f[1] === l)
                                return I[2] = f[2];
                            if (n[h] = I,
                            I[2] = a(b, d, u))
                                return !0
                        }
            }
        }
        function p(a) {
            return a.length > 1 ? function(b, d, h) {
                for (var e = a.length; e--; )
                    if (!a[e](b, d, h))
                        return !1;
                return !0
            }
             : a[0]
        }
        function q(a, b, d, h, e) {
            for (var l, u = [], f = 0, n = a.length, I = null  != b; n > f; f++)
                (l = a[f]) && (!d || 
                d(l, h, e)) && (u.push(l),
                I && b.push(f));
            return u
        }
        function s(a, d, e, l, u, f) {
            return l && !l[S] && (l = s(l)),
            u && !u[S] && (u = s(u, f)),
            h(function(h, f, n, m) {
                var g, K, k = [], j = [], o = f.length, T;
                if (!(T = h)) {
                    T = d || "*";
                    for (var v = n.nodeType ? [n] : n, za = [], p = 0, Ca = v.length; Ca > p; p++)
                        b(T, v[p], za);
                    T = za
                }
                T = !a || !h && d ? T : q(T, k, a, n, m);
                v = e ? u || (h ? a : o || l) ? [] : f : T;
                if (e && e(T, v, n, m),
                l) {
                    g = q(v, j);
                    l(g, [], n, m);
                    for (n = g.length; n--; )
                        (K = g[n]) && (v[j[n]] = !(T[j[n]] = K))
                }
                if (h) {
                    if (u || a) {
                        if (u) {
                            g = [];
                            for (n = v.length; n--; )
                                (K = v[n]) && g.push(T[n] = K);
                            u(null , v = [], g, m)
                        }
                        for (n = 
                        v.length; n--; )
                            (K = v[n]) && (g = u ? Y.call(h, K) : k[n]) > -1 && (h[g] = !(f[g] = K))
                    }
                } else
                    v = q(v === f ? v.splice(o, v.length) : v),
                    u ? u(null , f, v, m) : la.apply(f, v)
            }
            )
        }
        function r(a) {
            var b, d, h, e = a.length, l = x.relative[a[0].type];
            d = l || x.relative[" "];
            for (var u = l ? 1 : 0, f = v(function(a) {
                return a === b
            }
            , d, !0), n = v(function(a) {
                return Y.call(b, a) > -1
            }
            , d, !0), I = [function(a, d, h) {
                return !l && (h || d !== P) || ((b = d).nodeType ? f(a, d, h) : n(a, d, h))
            }
            ]; e > u; u++)
                if (d = x.relative[a[u].type])
                    I = [v(p(I), d)];
                else {
                    if (d = x.filter[a[u].type].apply(null , a[u].matches),
                    d[S]) {
                        for (h = 
                        ++u; e > h; h++)
                            if (x.relative[a[h].type])
                                break;
                        return s(u > 1 && p(I), u > 1 && o(a.slice(0, u - 1).concat({
                            value: " " === a[u - 2].type ? "*" : ""
                        })).replace(ba, "$1"), d, h > u && r(a.slice(u, h)), e > h && r(a = a.slice(h)), e > h && o(a))
                    }
                    I.push(d)
                }
            return p(I)
        }
        function t(a, d) {
            var e = d.length > 0
              , l = a.length > 0
              , u = function(h, u, f, n, m) {
                var g, K, k, j = 0, o = "0", v = h && [], T = [], za = P, p = h || l && x.find.TAG("*", m), Ca = ga += null  == za ? 1 : Math.random() || 0.1, lb = p.length;
                for (m && (P = u !== y && u); o !== lb && null  != (g = p[o]); o++) {
                    if (l && g) {
                        for (K = 0; k = a[K++]; )
                            if (k(g, u, f)) {
                                n.push(g);
                                break
                            }
                        m && 
                        (ga = Ca)
                    }
                    e && ((g = !k && g) && j--,
                    h && v.push(g))
                }
                if (j += o,
                e && o !== j) {
                    for (K = 0; k = d[K++]; )
                        k(v, T, u, f);
                    if (h) {
                        if (j > 0)
                            for (; o--; )
                                v[o] || T[o] || (T[o] = ha.call(n));
                        T = q(T)
                    }
                    la.apply(n, T);
                    m && !h && T.length > 0 && j + d.length > 1 && b.uniqueSort(n)
                }
                return m && (ga = Ca,
                P = za),
                v
            }
            ;
            return e ? h(u) : u
        }
        var w, A, x, z, C, M, G, B, P, D, E, Q, y, J, H, F, L, N, fa, S = "sizzle" + -new Date, W = a.document, ga = 0, O = 0, R = d(), Da = d(), X = d(), ta = function(a, b) {
            return a === b && (E = !0),
            0
        }
        , U = "undefined", Z = -2147483648, aa = {}.hasOwnProperty, V = [], ha = V.pop, ja = V.push, la = V.push, ca = V.slice, Y = V.indexOf || 
        function(a) {
            for (var b = 0, d = this.length; d > b; b++)
                if (this[b] === a)
                    return b;
            return -1
        }
        , ea = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+".replace("w", "w#"), ia = "\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ea + "))|)[\\x20\\t\\r\\n\\f]*\\]", da = ":((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ia + ")*)|.*)\\)|)", ba = RegExp("^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$", 
        "g"), pa = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/, qa = /^[\x20\t\r\n\f]*([>+~]|[\x20\t\r\n\f])[\x20\t\r\n\f]*/, ra = RegExp("=[\\x20\\t\\r\\n\\f]*([^\\]'\"]*?)[\\x20\\t\\r\\n\\f]*\\]", "g"), sa = RegExp(da), ua = RegExp("^" + ea + "$"), ka = {
            ID: /^#((?:\\.|[\w-]|[^\x00-\xa0])+)/,
            CLASS: /^\.((?:\\.|[\w-]|[^\x00-\xa0])+)/,
            TAG: RegExp("^(" + "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+".replace("w", "w*") + ")"),
            ATTR: RegExp("^" + ia),
            PSEUDO: RegExp("^" + da),
            CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)", 
            "i"),
            bool: RegExp("^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$", "i"),
            needsContext: RegExp("^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)", "i")
        }, va = /^(?:input|select|textarea|button)$/i, wa = /^h\d$/i, Aa = /^[^{]+\{\s*\[native \w/, xa = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, oa = /[+~]/, ya = /'|\\/g, ma = RegExp("\\\\([\\da-f]{1,6}[\\x20\\t\\r\\n\\f]?|([\\x20\\t\\r\\n\\f])|.)", 
        "ig"), na = function(a, b, d) {
            a = "0x" + b - 65536;
            return a !== a || d ? b : 0 > a ? String.fromCharCode(a + 65536) : String.fromCharCode(a >> 10 | 55296, 1023 & a | 56320)
        }
        ;
        try {
            la.apply(V = ca.call(W.childNodes), W.childNodes)
        } catch (Ba) {
            la = {
                apply: V.length ? function(a, b) {
                    ja.apply(a, ca.call(b))
                }
                 : function(a, b) {
                    for (var d = a.length, h = 0; a[d++] = b[h++]; )
                        ;
                    a.length = d - 1
                }
            }
        }
        A = b.support = {};
        C = b.isXML = function(a) {
            return (a = a && (a.ownerDocument || a).documentElement) ? "HTML" !== a.nodeName : !1
        }
        ;
        Q = b.setDocument = function(a) {
            var b, d = a ? a.ownerDocument || a : W;
            a = d.defaultView;
            return d !== y && 9 === d.nodeType && d.documentElement ? (y = d,
            J = d.documentElement,
            H = !C(d),
            a && a !== a.top && (a.addEventListener ? a.addEventListener("unload", function() {
                Q()
            }
            , !1) : a.attachEvent && a.attachEvent("onunload", function() {
                Q()
            }
            )),
            A.attributes = e(function(a) {
                return a.className = "i",
                !a.getAttribute("className")
            }
            ),
            A.getElementsByTagName = e(function(a) {
                return a.appendChild(d.createComment("")),
                !a.getElementsByTagName("*").length
            }
            ),
            A.getElementsByClassName = Aa.test(d.getElementsByClassName) && e(function(a) {
                return a.innerHTML = 
                "<div class='a'></div><div class='a i'></div>",
                a.firstChild.className = "i",
                2 === a.getElementsByClassName("i").length
            }
            ),
            A.getById = e(function(a) {
                return J.appendChild(a).id = S,
                !d.getElementsByName || !d.getElementsByName(S).length
            }
            ),
            A.getById ? (x.find.ID = function(a, b) {
                if (typeof b.getElementById !== U && H) {
                    var d = b.getElementById(a);
                    return d && d.parentNode ? [d] : []
                }
            }
            ,
            x.filter.ID = function(a) {
                var b = a.replace(ma, na);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }
            ) : (delete x.find.ID,
            x.filter.ID = function(a) {
                var b = 
                a.replace(ma, na);
                return function(a) {
                    return (a = typeof a.getAttributeNode !== U && a.getAttributeNode("id")) && a.value === b
                }
            }
            ),
            x.find.TAG = A.getElementsByTagName ? function(a, b) {
                return typeof b.getElementsByTagName !== U ? b.getElementsByTagName(a) : void 0
            }
             : function(a, b) {
                var d, h = [], e = 0, l = b.getElementsByTagName(a);
                if ("*" === a) {
                    for (; d = l[e++]; )
                        1 === d.nodeType && h.push(d);
                    return h
                }
                return l
            }
            ,
            x.find.CLASS = A.getElementsByClassName && function(a, b) {
                return typeof b.getElementsByClassName !== U && H ? b.getElementsByClassName(a) : void 0
            }
            ,
            L = [],
            F = [],
            (A.qsa = Aa.test(d.querySelectorAll)) && (e(function(a) {
                a.innerHTML = "<select msallowclip=''><option selected=''></option></select>";
                a.querySelectorAll("[msallowclip^='']").length && F.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")");
                a.querySelectorAll("[selected]").length || F.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)");
                a.querySelectorAll(":checked").length || F.push(":checked")
            }
            ),
            e(function(a) {
                var b = d.createElement("input");
                b.setAttribute("type", "hidden");
                a.appendChild(b).setAttribute("name", "D");
                a.querySelectorAll("[name=d]").length && F.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?=");
                a.querySelectorAll(":enabled").length || F.push(":enabled", ":disabled");
                a.querySelectorAll("*,:x");
                F.push(",.*:")
            }
            )),
            (A.matchesSelector = Aa.test(N = J.matches || J.webkitMatchesSelector || J.mozMatchesSelector || J.oMatchesSelector || J.msMatchesSelector)) && e(function(a) {
                A.disconnectedMatch = N.call(a, "div");
                N.call(a, 
                "[s!='']:x");
                L.push("!=", da)
            }
            ),
            F = F.length && RegExp(F.join("|")),
            L = L.length && RegExp(L.join("|")),
            b = Aa.test(J.compareDocumentPosition),
            fa = b || Aa.test(J.contains) ? function(a, b) {
                var d = 9 === a.nodeType ? a.documentElement : a
                  , h = b && b.parentNode;
                return a === h || !(!h || 1 !== h.nodeType || !(d.contains ? d.contains(h) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(h)))
            }
             : function(a, b) {
                if (b)
                    for (; b = b.parentNode; )
                        if (b === a)
                            return !0;
                return !1
            }
            ,
            ta = b ? function(a, b) {
                if (a === b)
                    return E = !0,
                    0;
                var h = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return h ? h : (h = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1,
                1 & h || !A.sortDetached && b.compareDocumentPosition(a) === h ? a === d || a.ownerDocument === W && fa(W, a) ? -1 : b === d || b.ownerDocument === W && fa(W, b) ? 1 : D ? Y.call(D, a) - Y.call(D, b) : 0 : 4 & h ? -1 : 1)
            }
             : function(a, b) {
                if (a === b)
                    return E = !0,
                    0;
                var h, e = 0;
                h = a.parentNode;
                var l = b.parentNode
                  , u = [a]
                  , n = [b];
                if (!h || !l)
                    return a === d ? -1 : b === d ? 1 : h ? -1 : l ? 1 : D ? Y.call(D, a) - Y.call(D, b) : 0;
                if (h === l)
                    return f(a, b);
                for (h = a; h = h.parentNode; )
                    u.unshift(h);
                for (h = b; h = h.parentNode; )
                    n.unshift(h);
                for (; u[e] === n[e]; )
                    e++;
                return e ? f(u[e], n[e]) : u[e] === W ? -1 : n[e] === W ? 1 : 0
            }
            ,
            d) : y
        }
        ;
        b.matches = function(a, d) {
            return b(a, null , null , d)
        }
        ;
        b.matchesSelector = function(a, d) {
            if ((a.ownerDocument || a) !== y && Q(a),
            d = d.replace(ra, "='$1']"),
            !(!A.matchesSelector || !H || L && L.test(d) || F && F.test(d)))
                try {
                    var h = N.call(a, d);
                    if (h || A.disconnectedMatch || a.document && 11 !== a.document.nodeType)
                        return h
                } catch (e) {}
            return b(d, y, null , [a]).length > 0
        }
        ;
        b.contains = function(a, b) {
            return (a.ownerDocument || a) !== y && Q(a),
            fa(a, b)
        }
        ;
        b.attr = function(a, b) {
            (a.ownerDocument || 
            a) !== y && Q(a);
            var d = x.attrHandle[b.toLowerCase()];
            d = d && aa.call(x.attrHandle, b.toLowerCase()) ? d(a, b, !H) : void 0;
            return void 0 !== d ? d : A.attributes || !H ? a.getAttribute(b) : (d = a.getAttributeNode(b)) && d.specified ? d.value : null 
        }
        ;
        b.error = function(a) {
            throw Error("Syntax error, unrecognized expression: " + a);
        }
        ;
        b.uniqueSort = function(a) {
            var b, d = [], h = 0, e = 0;
            if (E = !A.detectDuplicates,
            D = !A.sortStable && a.slice(0),
            a.sort(ta),
            E) {
                for (; b = a[e++]; )
                    b === a[e] && (h = d.push(e));
                for (; h--; )
                    a.splice(d[h], 1)
            }
            return D = null ,
            a
        }
        ;
        z = b.getText = 
        function(a) {
            var b, d = "", h = 0;
            if (b = a.nodeType)
                if (1 === b || 9 === b || 11 === b) {
                    if ("string" == typeof a.textContent)
                        return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling)
                        d += z(a)
                } else {
                    if (3 === b || 4 === b)
                        return a.nodeValue
                }
            else
                for (; b = a[h++]; )
                    d += z(b);
            return d
        }
        ;
        x = b.selectors = {
            cacheLength: 50,
            createPseudo: h,
            match: ka,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(ma, 
                    na),
                    a[3] = (a[3] || a[4] || a[5] || "").replace(ma, na),
                    "~=" === a[2] && (a[3] = " " + a[3] + " "),
                    a.slice(0, 4)
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(),
                    "nth" === a[1].slice(0, 3) ? (a[3] || b.error(a[0]),
                    a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])),
                    a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && b.error(a[0]),
                    a
                },
                PSEUDO: function(a) {
                    var b, d = !a[6] && a[2];
                    return ka.CHILD.test(a[0]) ? null  : (a[3] ? a[2] = a[4] || a[5] || "" : d && sa.test(d) && (b = M(d, !0)) && (b = d.indexOf(")", d.length - b) - d.length) && (a[0] = a[0].slice(0, b),
                    a[2] = d.slice(0, 
                    b)),
                    a.slice(0, 3))
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(ma, na).toLowerCase();
                    return "*" === a ? function() {
                        return !0
                    }
                     : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var b = R[a + " "];
                    return b || (b = RegExp("(^|[\\x20\\t\\r\\n\\f])" + a + "([\\x20\\t\\r\\n\\f]|$)")) && R(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || typeof a.getAttribute !== U && a.getAttribute("class") || "")
                    }
                    )
                },
                ATTR: function(a, d, h) {
                    return function(e) {
                        e = b.attr(e, a);
                        return null  == e ? "!=" === d : d ? (e += 
                        "",
                        "=" === d ? e === h : "!=" === d ? e !== h : "^=" === d ? h && 0 === e.indexOf(h) : "*=" === d ? h && e.indexOf(h) > -1 : "$=" === d ? h && e.slice(-h.length) === h : "~=" === d ? (" " + e + " ").indexOf(h) > -1 : "|=" === d ? e === h || e.slice(0, h.length + 1) === h + "-" : !1) : !0
                    }
                },
                CHILD: function(a, b, d, h, e) {
                    var l = "nth" !== a.slice(0, 3)
                      , u = "last" !== a.slice(-4)
                      , f = "of-type" === b;
                    return 1 === h && 0 === e ? function(a) {
                        return !!a.parentNode
                    }
                     : function(b, d, n) {
                        var I, m, g, K, k;
                        d = l !== u ? "nextSibling" : "previousSibling";
                        var j = b.parentNode
                          , o = f && b.nodeName.toLowerCase();
                        n = !n && !f;
                        if (j) {
                            if (l) {
                                for (; d; ) {
                                    for (m = 
                                    b; m = m[d]; )
                                        if (f ? m.nodeName.toLowerCase() === o : 1 === m.nodeType)
                                            return !1;
                                    k = d = "only" === a && !k && "nextSibling"
                                }
                                return !0
                            }
                            if (k = [u ? j.firstChild : j.lastChild],
                            u && n) {
                                n = j[S] || (j[S] = {});
                                I = n[a] || [];
                                K = I[0] === ga && I[1];
                                g = I[0] === ga && I[2];
                                for (m = K && j.childNodes[K]; m = ++K && m && m[d] || (g = K = 0) || k.pop(); )
                                    if (1 === m.nodeType && ++g && m === b) {
                                        n[a] = [ga, K, g];
                                        break
                                    }
                            } else if (n && (I = (b[S] || (b[S] = {}))[a]) && I[0] === ga)
                                g = I[1];
                            else
                                for (; m = ++K && m && m[d] || (g = K = 0) || k.pop(); )
                                    if ((f ? m.nodeName.toLowerCase() === o : 1 === m.nodeType) && ++g && (n && ((m[S] || (m[S] = {}))[a] = 
                                    [ga, g]),
                                    m === b))
                                        break;
                            return g -= e,
                            g === h || g % h === 0 && g / h >= 0
                        }
                    }
                },
                PSEUDO: function(a, d) {
                    var e, l = x.pseudos[a] || x.setFilters[a.toLowerCase()] || b.error("unsupported pseudo: " + a);
                    return l[S] ? l(d) : l.length > 1 ? (e = [a, a, "", d],
                    x.setFilters.hasOwnProperty(a.toLowerCase()) ? h(function(a, b) {
                        for (var h, e = l(a, d), u = e.length; u--; )
                            h = Y.call(a, e[u]),
                            a[h] = !(b[h] = e[u])
                    }
                    ) : function(a) {
                        return l(a, 0, e)
                    }
                    ) : l
                }
            },
            pseudos: {
                not: h(function(a) {
                    var b = []
                      , d = []
                      , e = G(a.replace(ba, "$1"));
                    return e[S] ? h(function(a, b, d, h) {
                        var l;
                        d = e(a, null , h, []);
                        for (h = 
                        a.length; h--; )
                            (l = d[h]) && (a[h] = !(b[h] = l))
                    }
                    ) : function(a, h, l) {
                        return b[0] = a,
                        e(b, null , l, d),
                        !d.pop()
                    }
                }
                ),
                has: h(function(a) {
                    return function(d) {
                        return b(a, d).length > 0
                    }
                }
                ),
                contains: h(function(a) {
                    return function(b) {
                        return (b.textContent || b.innerText || z(b)).indexOf(a) > -1
                    }
                }
                ),
                lang: h(function(a) {
                    return ua.test(a || "") || b.error("unsupported lang: " + a),
                    a = a.replace(ma, na).toLowerCase(),
                    function(b) {
                        var d;
                        do
                            if (d = H ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang"))
                                return d = d.toLowerCase(),
                                d === a || 0 === d.indexOf(a + 
                                "-");
                        while ((b = b.parentNode) && 1 === b.nodeType);return !1
                    }
                }
                ),
                target: function(b) {
                    var d = a.location && a.location.hash;
                    return d && d.slice(1) === b.id
                },
                root: function(a) {
                    return a === J
                },
                focus: function(a) {
                    return a === y.activeElement && (!y.hasFocus || y.hasFocus()) && !(!a.type && !a.href && !~a.tabIndex)
                },
                enabled: function(a) {
                    return a.disabled === !1
                },
                disabled: function(a) {
                    return a.disabled === !0
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function(a) {
                    return a.selected === 
                    !0
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(a) {
                    return !x.pseudos.empty(a)
                },
                header: function(a) {
                    return wa.test(a.nodeName)
                },
                input: function(a) {
                    return va.test(a.nodeName)
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null  == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: g(function() {
                    return [0]
                }
                ),
                last: g(function(a, b) {
                    return [b - 1]
                }
                ),
                eq: g(function(a, b, d) {
                    return [0 > d ? d + b : d]
                }
                ),
                even: g(function(a, b) {
                    for (var d = 0; b > d; d += 2)
                        a.push(d);
                    return a
                }
                ),
                odd: g(function(a, b) {
                    for (var d = 1; b > d; d += 2)
                        a.push(d);
                    return a
                }
                ),
                lt: g(function(a, b, d) {
                    for (b = 0 > d ? d + b : d; --b >= 0; )
                        a.push(b);
                    return a
                }
                ),
                gt: g(function(a, b, d) {
                    for (d = 0 > d ? d + b : d; ++d < b; )
                        a.push(d);
                    return a
                }
                )
            }
        };
        x.pseudos.nth = x.pseudos.eq;
        for (w in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            x.pseudos[w] = n(w);
        for (w in {
            submit: !0,
            reset: !0
        })
            x.pseudos[w] = m(w);
        j.prototype = x.filters = 
        x.pseudos;
        x.setFilters = new j;
        M = b.tokenize = function(a, d) {
            var h, e, l, u, f, n, m;
            if (f = Da[a + " "])
                return d ? 0 : f.slice(0);
            f = a;
            n = [];
            for (m = x.preFilter; f; ) {
                (!h || (e = pa.exec(f))) && (e && (f = f.slice(e[0].length) || f),
                n.push(l = []));
                h = !1;
                (e = qa.exec(f)) && (h = e.shift(),
                l.push({
                    value: h,
                    type: e[0].replace(ba, " ")
                }),
                f = f.slice(h.length));
                for (u in x.filter)
                    !(e = ka[u].exec(f)) || m[u] && !(e = m[u](e)) || (h = e.shift(),
                    l.push({
                        value: h,
                        type: u,
                        matches: e
                    }),
                    f = f.slice(h.length));
                if (!h)
                    break
            }
            return d ? f.length : f ? b.error(a) : Da(a, n).slice(0)
        }
        ;
        return G = 
        b.compile = function(a, b) {
            var d, h = [], e = [], l = X[a + " "];
            if (!l) {
                b || (b = M(a));
                for (d = b.length; d--; )
                    l = r(b[d]),
                    l[S] ? h.push(l) : e.push(l);
                l = X(a, t(e, h));
                l.selector = a
            }
            return l
        }
        ,
        B = b.select = function(a, b, d, h) {
            var e, l, u, f, n, I = "function" == typeof a && a, m = !h && M(a = I.selector || a);
            if (d = d || [],
            1 === m.length) {
                if (l = m[0] = m[0].slice(0),
                l.length > 2 && "ID" === (u = l[0]).type && A.getById && 9 === b.nodeType && H && x.relative[l[1].type]) {
                    if (b = (x.find.ID(u.matches[0].replace(ma, na), b) || [])[0],
                    !b)
                        return d;
                    I && (b = b.parentNode);
                    a = a.slice(l.shift().value.length)
                }
                for (e = 
                ka.needsContext.test(a) ? 0 : l.length; e--; ) {
                    if (u = l[e],
                    x.relative[f = u.type])
                        break;
                    if ((n = x.find[f]) && (h = n(u.matches[0].replace(ma, na), oa.test(l[0].type) && k(b.parentNode) || b))) {
                        if (l.splice(e, 1),
                        a = h.length && o(l),
                        !a)
                            return la.apply(d, h),
                            d;
                        break
                    }
                }
            }
            return (I || G(a, m))(h, b, !H, d, oa.test(a) && k(b.parentNode) || b),
            d
        }
        ,
        A.sortStable = S.split("").sort(ta).join("") === S,
        A.detectDuplicates = !!E,
        Q(),
        A.sortDetached = e(function(a) {
            return 1 & a.compareDocumentPosition(y.createElement("div"))
        }
        ),
        e(function(a) {
            return a.innerHTML = "<a href='#'></a>",
            "#" === a.firstChild.getAttribute("href")
        }
        ) || l("type|href|height|width", function(a, b, d) {
            return d ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }
        ),
        A.attributes && e(function(a) {
            return a.innerHTML = "<input/>",
            a.firstChild.setAttribute("value", ""),
            "" === a.firstChild.getAttribute("value")
        }
        ) || l("value", function(a, b, d) {
            return d || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }
        ),
        e(function(a) {
            return null  == a.getAttribute("disabled")
        }
        ) || l("checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", 
        function(a, b, d) {
            var h;
            return d ? void 0 : a[b] === !0 ? b.toLowerCase() : (h = a.getAttributeNode(b)) && h.specified ? h.value : null 
        }
        ),
        b
    }
    (j);
    m.find = A;
    m.expr = A.selectors;
    m.expr[":"] = m.expr.pseudos;
    m.unique = A.uniqueSort;
    m.text = A.getText;
    m.isXMLDoc = A.isXML;
    m.contains = A.contains;
    var Pa = m.expr.match.needsContext
      , Qa = /^<(\w+)\s*\/?>(?:<\/\1>|)$/
      , hb = /^.[^:#\[\.,]*$/;
    m.filter = function(a, b, d) {
        var h = b[0];
        return d && (a = ":not(" + a + ")"),
        1 === b.length && 1 === h.nodeType ? m.find.matchesSelector(h, a) ? [h] : [] : m.find.matches(a, m.grep(b, function(a) {
            return 1 === 
            a.nodeType
        }
        ))
    }
    ;
    m.fn.extend({
        find: function(a) {
            var b, d = this.length, h = [], e = this;
            if ("string" != typeof a)
                return this.pushStack(m(a).filter(function() {
                    for (b = 0; d > b; b++)
                        if (m.contains(e[b], this))
                            return !0
                }
                ));
            for (b = 0; d > b; b++)
                m.find(a, e[b], h);
            return h = this.pushStack(d > 1 ? m.unique(h) : h),
            h.selector = this.selector ? this.selector + " " + a : a,
            h
        },
        filter: function(b) {
            return this.pushStack(a(this, b || [], !1))
        },
        not: function(b) {
            return this.pushStack(a(this, b || [], !0))
        },
        is: function(b) {
            return !!a(this, "string" == typeof b && Pa.test(b) ? 
            m(b) : b || [], !1).length
        }
    });
    var oa, tb = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (m.fn.init = function(a, b) {
        var d, h;
        if (!a)
            return this;
        if ("string" == typeof a) {
            if (d = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null , a, null ] : tb.exec(a),
            !d || !d[1] && b)
                return !b || b.jquery ? (b || oa).find(a) : this.constructor(b).find(a);
            if (d[1]) {
                if (b = b instanceof m ? b[0] : b,
                m.merge(this, m.parseHTML(d[1], b && b.nodeType ? b.ownerDocument || b : y, !0)),
                Qa.test(d[1]) && m.isPlainObject(b))
                    for (d in b)
                        m.isFunction(this[d]) ? this[d](b[d]) : this.attr(d, b[d]);
                return this
            }
            return h = y.getElementById(d[2]),
            h && h.parentNode && (this.length = 1,
            this[0] = h),
            this.context = y,
            this.selector = a,
            this
        }
        return a.nodeType ? (this.context = this[0] = a,
        this.length = 1,
        this) : m.isFunction(a) ? "undefined" != typeof oa.ready ? oa.ready(a) : a(m) : (void 0 !== a.selector && (this.selector = a.selector,
        this.context = a.context),
        m.makeArray(a, this))
    }
    ).prototype = m.fn;
    oa = m(y);
    var ub = /^(?:parents|prev(?:Until|All))/
      , vb = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    m.extend({
        dir: function(a, b, d) {
            for (var h = [], e = void 0 !== 
            d; (a = a[b]) && 9 !== a.nodeType; )
                if (1 === a.nodeType) {
                    if (e && m(a).is(d))
                        break;
                    h.push(a)
                }
            return h
        },
        sibling: function(a, b) {
            for (var d = []; a; a = a.nextSibling)
                1 === a.nodeType && a !== b && d.push(a);
            return d
        }
    });
    m.fn.extend({
        has: function(a) {
            var b = m(a, this)
              , d = b.length;
            return this.filter(function() {
                for (var a = 0; d > a; a++)
                    if (m.contains(this, b[a]))
                        return !0
            }
            )
        },
        closest: function(a, b) {
            for (var d, h = 0, e = this.length, l = [], f = Pa.test(a) || "string" != typeof a ? m(a, b || this.context) : 0; e > h; h++)
                for (d = this[h]; d && d !== b; d = d.parentNode)
                    if (d.nodeType < 
                    11 && (f ? f.index(d) > -1 : 1 === d.nodeType && m.find.matchesSelector(d, a))) {
                        l.push(d);
                        break
                    }
            return this.pushStack(l.length > 1 ? m.unique(l) : l)
        },
        index: function(a) {
            return a ? "string" == typeof a ? W.call(m(a), this[0]) : W.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(a, b) {
            return this.pushStack(m.unique(m.merge(this.get(), m(a, b))))
        },
        addBack: function(a) {
            return this.add(null  == a ? this.prevObject : this.prevObject.filter(a))
        }
    });
    m.each({
        parent: function(a) {
            return (a = a.parentNode) && 
            11 !== a.nodeType ? a : null 
        },
        parents: function(a) {
            return m.dir(a, "parentNode")
        },
        parentsUntil: function(a, b, d) {
            return m.dir(a, "parentNode", d)
        },
        next: function(a) {
            return f(a, "nextSibling")
        },
        prev: function(a) {
            return f(a, "previousSibling")
        },
        nextAll: function(a) {
            return m.dir(a, "nextSibling")
        },
        prevAll: function(a) {
            return m.dir(a, "previousSibling")
        },
        nextUntil: function(a, b, d) {
            return m.dir(a, "nextSibling", d)
        },
        prevUntil: function(a, b, d) {
            return m.dir(a, "previousSibling", d)
        },
        siblings: function(a) {
            return m.sibling((a.parentNode || 
            {}).firstChild, a)
        },
        children: function(a) {
            return m.sibling(a.firstChild)
        },
        contents: function(a) {
            return a.contentDocument || m.merge([], a.childNodes)
        }
    }, function(a, b) {
        m.fn[a] = function(d, h) {
            var e = m.map(this, b, d);
            return "Until" !== a.slice(-5) && (h = d),
            h && "string" == typeof h && (e = m.filter(h, e)),
            this.length > 1 && (vb[a] || m.unique(e),
            ub.test(a) && e.reverse()),
            this.pushStack(e)
        }
    }
    );
    var Z = /\S+/g
      , La = {};
    m.Callbacks = function(a) {
        a = "string" == typeof a ? La[a] || e(a) : m.extend({}, a);
        var b, d, h, l, f, n, g = [], k = !a.once && [], j = function(e) {
            b = 
            a.memory && e;
            d = !0;
            n = l || 0;
            l = 0;
            f = g.length;
            for (h = !0; g && f > n; n++)
                if (g[n].apply(e[0], e[1]) === !1 && a.stopOnFalse) {
                    b = !1;
                    break
                }
            h = !1;
            g && (k ? k.length && j(k.shift()) : b ? g = [] : o.disable())
        }
        , o = {
            add: function() {
                if (g) {
                    var d = g.length;
                    (function sb(b) {
                        m.each(b, function(b, d) {
                            var h = m.type(d);
                            "function" === h ? a.unique && o.has(d) || g.push(d) : d && d.length && "string" !== h && sb(d)
                        }
                        )
                    }
                    )(arguments);
                    h ? f = g.length : b && (l = d,
                    j(b))
                }
                return this
            },
            remove: function() {
                return g && m.each(arguments, function(a, b) {
                    for (var d; (d = m.inArray(b, g, d)) > -1; )
                        g.splice(d, 
                        1),
                        h && (f >= d && f--,
                        n >= d && n--)
                }
                ),
                this
            },
            has: function(a) {
                return a ? m.inArray(a, g) > -1 : !(!g || !g.length)
            },
            empty: function() {
                return g = [],
                f = 0,
                this
            },
            disable: function() {
                return g = k = b = void 0,
                this
            },
            disabled: function() {
                return !g
            },
            lock: function() {
                return k = void 0,
                b || o.disable(),
                this
            },
            locked: function() {
                return !k
            },
            fireWith: function(a, b) {
                return !g || d && !k || (b = b || [],
                b = [a, b.slice ? b.slice() : b],
                h ? k.push(b) : j(b)),
                this
            },
            fire: function() {
                return o.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!d
            }
        };
        return o
    }
    ;
    m.extend({
        Deferred: function(a) {
            var b = 
            [["resolve", "done", m.Callbacks("once memory"), "resolved"], ["reject", "fail", m.Callbacks("once memory"), "rejected"], ["notify", "progress", m.Callbacks("memory")]]
              , d = "pending"
              , h = {
                state: function() {
                    return d
                },
                always: function() {
                    return e.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var a = arguments;
                    return m.Deferred(function(d) {
                        m.each(b, function(b, l) {
                            var u = m.isFunction(a[b]) && a[b];
                            e[l[1]](function() {
                                var a = u && u.apply(this, arguments);
                                a && m.isFunction(a.promise) ? a.promise().done(d.resolve).fail(d.reject).progress(d.notify) : 
                                d[l[0] + "With"](this === h ? d.promise() : this, u ? [a] : arguments)
                            }
                            )
                        }
                        );
                        a = null 
                    }
                    ).promise()
                },
                promise: function(a) {
                    return null  != a ? m.extend(a, h) : h
                }
            }
              , e = {};
            return h.pipe = h.then,
            m.each(b, function(a, l) {
                var u = l[2]
                  , f = l[3];
                h[l[1]] = u.add;
                f && u.add(function() {
                    d = f
                }
                , b[1 ^ a][2].disable, b[2][2].lock);
                e[l[0]] = function() {
                    return e[l[0] + "With"](this === e ? h : this, arguments),
                    this
                }
                ;
                e[l[0] + "With"] = u.fireWith
            }
            ),
            h.promise(e),
            a && a.call(e, e),
            e
        },
        when: function(a) {
            var b = 0, d = M.call(arguments), h = d.length, e = 1 !== h || a && m.isFunction(a.promise) ? h : 0, 
            l = 1 === e ? a : m.Deferred(), f = function(a, b, d) {
                return function(h) {
                    b[a] = this;
                    d[a] = arguments.length > 1 ? M.call(arguments) : h;
                    d === n ? l.notifyWith(b, d) : --e || l.resolveWith(b, d)
                }
            }
            , n, g, k;
            if (h > 1) {
                n = Array(h);
                g = Array(h);
                for (k = Array(h); h > b; b++)
                    d[b] && m.isFunction(d[b].promise) ? d[b].promise().done(f(b, k, d)).fail(l.reject).progress(f(b, g, n)) : --e
            }
            return e || l.resolveWith(k, d),
            l.promise()
        }
    });
    var ya;
    m.fn.ready = function(a) {
        return m.ready.promise().done(a),
        this
    }
    ;
    m.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? m.readyWait++ : 
            m.ready(!0)
        },
        ready: function(a) {
            (a === !0 ? --m.readyWait : m.isReady) || (m.isReady = !0,
            a !== !0 && --m.readyWait > 0 || (ya.resolveWith(y, [m]),
            m.fn.triggerHandler && (m(y).triggerHandler("ready"),
            m(y).off("ready"))))
        }
    });
    m.ready.promise = function(a) {
        return ya || (ya = m.Deferred(),
        "complete" === y.readyState ? setTimeout(m.ready) : (y.addEventListener("DOMContentLoaded", d, !1),
        j.addEventListener("load", d, !1))),
        ya.promise(a)
    }
    ;
    m.ready.promise();
    var ha = m.access = function(a, b, d, h, e, l, f) {
        var n = 0
          , g = a.length
          , k = null  == d;
        if ("object" === m.type(d))
            for (n in e = 
            !0,
            d)
                m.access(a, b, n, d[n], !0, l, f);
        else if (void 0 !== h && (e = !0,
        m.isFunction(h) || (f = !0),
        k && (f ? (b.call(a, h),
        b = null ) : (k = b,
        b = function(a, b, d) {
            return k.call(m(a), d)
        }
        )),
        b))
            for (; g > n; n++)
                b(a[n], d, f ? h : h.call(a[n], n, b(a[n], d)));
        return e ? a : k ? b.call(a) : g ? b(a[0], d) : l
    }
    ;
    m.acceptData = function(a) {
        return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
    }
    ;
    b.uid = 1;
    b.accepts = m.acceptData;
    b.prototype = {
        key: function(a) {
            if (!b.accepts(a))
                return 0;
            var d = {}
              , h = a[this.expando];
            if (!h) {
                h = b.uid++;
                try {
                    d[this.expando] = {
                        value: h
                    },
                    Object.defineProperties(a, 
                    d)
                } catch (e) {
                    d[this.expando] = h,
                    m.extend(a, d)
                }
            }
            return this.cache[h] || (this.cache[h] = {}),
            h
        },
        set: function(a, b, d) {
            var h;
            a = this.key(a);
            var e = this.cache[a];
            if ("string" == typeof b)
                e[b] = d;
            else if (m.isEmptyObject(e))
                m.extend(this.cache[a], b);
            else
                for (h in b)
                    e[h] = b[h];
            return e
        },
        get: function(a, b) {
            var d = this.cache[this.key(a)];
            return void 0 === b ? d : d[b]
        },
        access: function(a, b, d) {
            var h;
            return void 0 === b || b && "string" == typeof b && void 0 === d ? (h = this.get(a, b),
            void 0 !== h ? h : this.get(a, m.camelCase(b))) : (this.set(a, b, d),
            void 0 !== 
            d ? d : b)
        },
        remove: function(a, b) {
            var d, h, e = this.key(a), l = this.cache[e];
            if (void 0 === b)
                this.cache[e] = {};
            else {
                m.isArray(b) ? h = b.concat(b.map(m.camelCase)) : (d = m.camelCase(b),
                b in l ? h = [b, d] : (h = d,
                h = h in l ? [h] : h.match(Z) || []));
                for (d = h.length; d--; )
                    delete l[h[d]]
            }
        },
        hasData: function(a) {
            return !m.isEmptyObject(this.cache[a[this.expando]] || {})
        },
        discard: function(a) {
            a[this.expando] && delete this.cache[a[this.expando]]
        }
    };
    var B = new b
      , R = new b
      , jb = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , ib = /([A-Z])/g;
    m.extend({
        hasData: function(a) {
            return R.hasData(a) || 
            B.hasData(a)
        },
        data: function(a, b, d) {
            return R.access(a, b, d)
        },
        removeData: function(a, b) {
            R.remove(a, b)
        },
        _data: function(a, b, d) {
            return B.access(a, b, d)
        },
        _removeData: function(a, b) {
            B.remove(a, b)
        }
    });
    m.fn.extend({
        data: function(a, b) {
            var d, e, l, f = this[0], n = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (l = R.get(f),
                1 === f.nodeType && !B.get(f, "hasDataAttrs"))) {
                    for (d = n.length; d--; )
                        n[d] && (e = n[d].name,
                        0 === e.indexOf("data-") && (e = m.camelCase(e.slice(5)),
                        h(f, e, l[e])));
                    B.set(f, "hasDataAttrs", !0)
                }
                return l
            }
            return "object" == typeof a ? 
            this.each(function() {
                R.set(this, a)
            }
            ) : ha(this, function(b) {
                var d, e = m.camelCase(a);
                if (f && void 0 === b) {
                    if (d = R.get(f, a),
                    void 0 !== d)
                        return d;
                    if (d = R.get(f, e),
                    void 0 !== d)
                        return d;
                    if (d = h(f, e, void 0),
                    void 0 !== d)
                        return d
                } else
                    this.each(function() {
                        var d = R.get(this, e);
                        R.set(this, e, b);
                        -1 !== a.indexOf("-") && void 0 !== d && R.set(this, a, b)
                    }
                    )
            }
            , null , b, arguments.length > 1, null , !0)
        },
        removeData: function(a) {
            return this.each(function() {
                R.remove(this, a)
            }
            )
        }
    });
    m.extend({
        queue: function(a, b, d) {
            var h;
            return a ? (b = (b || "fx") + "queue",
            h = 
            B.get(a, b),
            d && (!h || m.isArray(d) ? h = B.access(a, b, m.makeArray(d)) : h.push(d)),
            h || []) : void 0
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var d = m.queue(a, b)
              , h = d.length
              , e = d.shift()
              , l = m._queueHooks(a, b)
              , f = function() {
                m.dequeue(a, b)
            }
            ;
            "inprogress" === e && (e = d.shift(),
            h--);
            e && ("fx" === b && d.unshift("inprogress"),
            delete l.stop,
            e.call(a, f, l));
            !h && l && l.empty.fire()
        },
        _queueHooks: function(a, b) {
            var d = b + "queueHooks";
            return B.get(a, d) || B.access(a, d, {
                empty: m.Callbacks("once memory").add(function() {
                    B.remove(a, [b + "queue", d])
                }
                )
            })
        }
    });
    m.fn.extend({
        queue: function(a, 
        b) {
            var d = 2;
            return "string" != typeof a && (b = a,
            a = "fx",
            d--),
            arguments.length < d ? m.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var d = m.queue(this, a, b);
                m._queueHooks(this, a);
                "fx" === a && "inprogress" !== d[0] && m.dequeue(this, a)
            }
            )
        },
        dequeue: function(a) {
            return this.each(function() {
                m.dequeue(this, a)
            }
            )
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, b) {
            var d, h = 1, e = m.Deferred(), l = this, f = this.length, n = function() {
                --h || e.resolveWith(l, [l])
            }
            ;
            "string" != typeof a && (b = a,
            a = void 0);
            for (a = a || 
            "fx"; f--; )
                (d = B.get(l[f], a + "queueHooks")) && d.empty && (h++,
                d.empty.add(n));
            return n(),
            e.promise(b)
        }
    });
    A = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
    var ca = ["Top", "Right", "Bottom", "Left"]
      , pa = function(a, b) {
        return a = b || a,
        "none" === m.css(a, "display") || !m.contains(a.ownerDocument, a)
    }
      , Ra = /^(?:checkbox|radio)$/i;
    (function() {
        var a = y.createDocumentFragment().appendChild(y.createElement("div"))
          , b = y.createElement("input");
        b.setAttribute("type", "radio");
        b.setAttribute("checked", "checked");
        b.setAttribute("name", 
        "t");
        a.appendChild(b);
        J.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked;
        a.innerHTML = "<textarea>x</textarea>";
        J.noCloneChecked = !!a.cloneNode(!0).lastChild.defaultValue
    }
    )();
    J.focusinBubbles = "onfocusin" in j;
    var wb = /^key/
      , xb = /^(?:mouse|pointer|contextmenu)|click/
      , Sa = /^(?:focusinfocus|focusoutblur)$/
      , Ta = /^([^.]*)(?:\.(.+)|)$/;
    m.event = {
        global: {},
        add: function(a, b, d, h, e) {
            var l, f, n, g, k, j, o, v, p, q;
            if (k = B.get(a)) {
                d.handler && (l = d,
                d = l.handler,
                e = l.selector);
                d.guid || (d.guid = m.guid++);
                (g = k.events) || (g = 
                k.events = {});
                (f = k.handle) || (f = k.handle = function(b) {
                    return typeof m !== "undefined" && m.event.triggered !== b.type ? m.event.dispatch.apply(a, arguments) : void 0
                }
                );
                b = (b || "").match(Z) || [""];
                for (k = b.length; k--; )
                    n = Ta.exec(b[k]) || [],
                    p = q = n[1],
                    n = (n[2] || "").split(".").sort(),
                    p && (o = m.event.special[p] || {},
                    p = (e ? o.delegateType : o.bindType) || p,
                    o = m.event.special[p] || {},
                    j = m.extend({
                        type: p,
                        origType: q,
                        data: h,
                        handler: d,
                        guid: d.guid,
                        selector: e,
                        needsContext: e && m.expr.match.needsContext.test(e),
                        namespace: n.join(".")
                    }, l),
                    (v = g[p]) || 
                    (v = g[p] = [],
                    v.delegateCount = 0,
                    o.setup && o.setup.call(a, h, n, f) !== !1 || a.addEventListener && a.addEventListener(p, f, !1)),
                    o.add && (o.add.call(a, j),
                    j.handler.guid || (j.handler.guid = d.guid)),
                    e ? v.splice(v.delegateCount++, 0, j) : v.push(j),
                    m.event.global[p] = !0)
            }
        },
        remove: function(a, b, d, h, e) {
            var l, f, n, g, k, j, o, v, p, q, s, r = B.hasData(a) && B.get(a);
            if (r && (g = r.events)) {
                b = (b || "").match(Z) || [""];
                for (k = b.length; k--; )
                    if (n = Ta.exec(b[k]) || [],
                    p = s = n[1],
                    q = (n[2] || "").split(".").sort(),
                    p) {
                        o = m.event.special[p] || {};
                        p = (h ? o.delegateType : 
                        o.bindType) || p;
                        v = g[p] || [];
                        n = n[2] && RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)");
                        for (f = l = v.length; l--; )
                            j = v[l],
                            !e && s !== j.origType || d && d.guid !== j.guid || n && !n.test(j.namespace) || h && h !== j.selector && ("**" !== h || !j.selector) || (v.splice(l, 1),
                            j.selector && v.delegateCount--,
                            o.remove && o.remove.call(a, j));
                        f && !v.length && (o.teardown && o.teardown.call(a, q, r.handle) !== !1 || m.removeEvent(a, p, r.handle),
                        delete g[p])
                    } else
                        for (p in g)
                            m.event.remove(a, p + b[k], d, h, !0);
                m.isEmptyObject(g) && (delete r.handle,
                B.remove(a, "events"))
            }
        },
        trigger: function(a, b, d, h) {
            var e, l, f, n, g, k, o, v = [d || y], p = ta.call(a, "type") ? a.type : a;
            e = ta.call(a, "namespace") ? a.namespace.split(".") : [];
            if (l = f = d = d || y,
            3 !== d.nodeType && 8 !== d.nodeType && !Sa.test(p + m.event.triggered) && (p.indexOf(".") >= 0 && (e = p.split("."),
            p = e.shift(),
            e.sort()),
            g = p.indexOf(":") < 0 && "on" + p,
            a = a[m.expando] ? a : new m.Event(p,"object" == typeof a && a),
            a.isTrigger = h ? 2 : 3,
            a.namespace = e.join("."),
            a.namespace_re = a.namespace ? RegExp("(^|\\.)" + e.join("\\.(?:.*\\.|)") + "(\\.|$)") : null ,
            a.result = void 0,
            a.target || 
            (a.target = d),
            b = null  == b ? [a] : m.makeArray(b, [a]),
            o = m.event.special[p] || {},
            h || !o.trigger || o.trigger.apply(d, b) !== !1)) {
                if (!h && !o.noBubble && !m.isWindow(d)) {
                    n = o.delegateType || p;
                    for (Sa.test(n + p) || (l = l.parentNode); l; l = l.parentNode)
                        v.push(l),
                        f = l;
                    f === (d.ownerDocument || y) && v.push(f.defaultView || f.parentWindow || j)
                }
                for (e = 0; (l = v[e++]) && !a.isPropagationStopped(); )
                    a.type = e > 1 ? n : o.bindType || p,
                    (k = (B.get(l, "events") || {})[a.type] && B.get(l, "handle")) && k.apply(l, b),
                    (k = g && l[g]) && k.apply && m.acceptData(l) && (a.result = k.apply(l, 
                    b),
                    a.result === !1 && a.preventDefault());
                return a.type = p,
                h || a.isDefaultPrevented() || o._default && o._default.apply(v.pop(), b) !== !1 || !m.acceptData(d) || g && m.isFunction(d[p]) && !m.isWindow(d) && (f = d[g],
                f && (d[g] = null ),
                m.event.triggered = p,
                d[p](),
                m.event.triggered = void 0,
                f && (d[g] = f)),
                a.result
            }
        },
        dispatch: function(a) {
            a = m.event.fix(a);
            var b, d, h, e, l, f = [], n = M.call(arguments);
            b = (B.get(this, "events") || {})[a.type] || [];
            var g = m.event.special[a.type] || {};
            if (n[0] = a,
            a.delegateTarget = this,
            !g.preDispatch || g.preDispatch.call(this, 
            a) !== !1) {
                f = m.event.handlers.call(this, a, b);
                for (b = 0; (e = f[b++]) && !a.isPropagationStopped(); ) {
                    a.currentTarget = e.elem;
                    for (d = 0; (l = e.handlers[d++]) && !a.isImmediatePropagationStopped(); )
                        (!a.namespace_re || a.namespace_re.test(l.namespace)) && (a.handleObj = l,
                        a.data = l.data,
                        h = ((m.event.special[l.origType] || {}).handle || l.handler).apply(e.elem, n),
                        void 0 !== h && (a.result = h) === !1 && (a.preventDefault(),
                        a.stopPropagation()))
                }
                return g.postDispatch && g.postDispatch.call(this, a),
                a.result
            }
        },
        handlers: function(a, b) {
            var d, h, e, 
            l, f = [], n = b.delegateCount, g = a.target;
            if (n && g.nodeType && (!a.button || "click" !== a.type))
                for (; g !== this; g = g.parentNode || this)
                    if (g.disabled !== !0 || "click" !== a.type) {
                        h = [];
                        for (d = 0; n > d; d++)
                            l = b[d],
                            e = l.selector + " ",
                            void 0 === h[e] && (h[e] = l.needsContext ? m(e, this).index(g) >= 0 : m.find(e, this, null , [g]).length),
                            h[e] && h.push(l);
                        h.length && f.push({
                            elem: g,
                            handlers: h
                        })
                    }
            return n < b.length && f.push({
                elem: this,
                handlers: b.slice(n)
            }),
            f
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null  == a.which && (a.which = null  != b.charCode ? b.charCode : b.keyCode),
                a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var d, h, e, l = b.button;
                return null  == a.pageX && null  != b.clientX && (d = a.target.ownerDocument || y,
                h = d.documentElement,
                e = d.body,
                a.pageX = b.clientX + (h && h.scrollLeft || e && e.scrollLeft || 0) - (h && h.clientLeft || e && e.clientLeft || 
                0),
                a.pageY = b.clientY + (h && h.scrollTop || e && e.scrollTop || 0) - (h && h.clientTop || e && e.clientTop || 0)),
                a.which || void 0 === l || (a.which = 1 & l ? 1 : 2 & l ? 3 : 4 & l ? 2 : 0),
                a
            }
        },
        fix: function(a) {
            if (a[m.expando])
                return a;
            var b, d, h;
            b = a.type;
            var e = a
              , l = this.fixHooks[b];
            l || (this.fixHooks[b] = l = xb.test(b) ? this.mouseHooks : wb.test(b) ? this.keyHooks : {});
            h = l.props ? this.props.concat(l.props) : this.props;
            a = new m.Event(e);
            for (b = h.length; b--; )
                d = h[b],
                a[d] = e[d];
            return a.target || (a.target = y),
            3 === a.target.nodeType && (a.target = a.target.parentNode),
            l.filter ? l.filter(a, e) : a
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== v() && this.focus ? (this.focus(),
                    !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === v() && this.blur ? (this.blur(),
                    !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && m.nodeName(this, "input") ? (this.click(),
                    !1) : void 0
                },
                _default: function(a) {
                    return m.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && 
                    (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function(a, b, d, h) {
            a = m.extend(new m.Event, d, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            h ? m.event.trigger(a, null , b) : m.event.dispatch.call(b, a);
            a.isDefaultPrevented() && d.preventDefault()
        }
    };
    m.removeEvent = function(a, b, d) {
        a.removeEventListener && a.removeEventListener(b, d, !1)
    }
    ;
    m.Event = function(a, b) {
        return this instanceof m.Event ? (a && a.type ? (this.originalEvent = a,
        this.type = a.type,
        this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === 
        !1 ? l : n) : this.type = a,
        b && m.extend(this, b),
        this.timeStamp = a && a.timeStamp || m.now(),
        void (this[m.expando] = !0)) : new m.Event(a,b)
    }
    ;
    m.Event.prototype = {
        isDefaultPrevented: n,
        isPropagationStopped: n,
        isImmediatePropagationStopped: n,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = l;
            a && a.preventDefault && a.preventDefault()
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = l;
            a && a.stopPropagation && a.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var a = 
            this.originalEvent;
            this.isImmediatePropagationStopped = l;
            a && a.stopImmediatePropagation && a.stopImmediatePropagation();
            this.stopPropagation()
        }
    };
    m.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        m.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var d, h = a.relatedTarget, e = a.handleObj;
                return (!h || h !== this && !m.contains(this, h)) && (a.type = e.origType,
                d = e.handler.apply(this, arguments),
                a.type = b),
                d
            }
        }
    }
    );
    J.focusinBubbles || m.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var d = function(a) {
            m.event.simulate(b, a.target, m.event.fix(a), !0)
        }
        ;
        m.event.special[b] = {
            setup: function() {
                var h = this.ownerDocument || this
                  , e = B.access(h, b);
                e || h.addEventListener(a, d, !0);
                B.access(h, b, (e || 0) + 1)
            },
            teardown: function() {
                var h = this.ownerDocument || this
                  , e = B.access(h, b) - 1;
                e ? B.access(h, b, e) : (h.removeEventListener(a, d, !0),
                B.remove(h, b))
            }
        }
    }
    );
    m.fn.extend({
        on: function(a, b, d, h, e) {
            var l, f;
            if ("object" == typeof a) {
                "string" != typeof b && (d = d || b,
                b = void 0);
                for (f in a)
                    this.on(f, b, d, 
                    a[f], e);
                return this
            }
            if (null  == d && null  == h ? (h = b,
            d = b = void 0) : null  == h && ("string" == typeof b ? (h = d,
            d = void 0) : (h = d,
            d = b,
            b = void 0)),
            h === !1)
                h = n;
            else if (!h)
                return this;
            return 1 === e && (l = h,
            h = function(a) {
                return m().off(a),
                l.apply(this, arguments)
            }
            ,
            h.guid = l.guid || (l.guid = m.guid++)),
            this.each(function() {
                m.event.add(this, a, h, d, b)
            }
            )
        },
        one: function(a, b, d, h) {
            return this.on(a, b, d, h, 1)
        },
        off: function(a, b, d) {
            var h, e;
            if (a && a.preventDefault && a.handleObj)
                return h = a.handleObj,
                m(a.delegateTarget).off(h.namespace ? h.origType + "." + h.namespace : 
                h.origType, h.selector, h.handler),
                this;
            if ("object" == typeof a) {
                for (e in a)
                    this.off(e, b, a[e]);
                return this
            }
            return (b === !1 || "function" == typeof b) && (d = b,
            b = void 0),
            d === !1 && (d = n),
            this.each(function() {
                m.event.remove(this, a, d, b)
            }
            )
        },
        trigger: function(a, b) {
            return this.each(function() {
                m.event.trigger(a, b, this)
            }
            )
        },
        triggerHandler: function(a, b) {
            var d = this[0];
            return d ? m.event.trigger(a, b, d, !0) : void 0
        }
    });
    var Ua = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi
      , Va = /<([\w:]+)/
      , yb = /<|&#?\w+;/
      , zb = 
    /<(?:script|style|link)/i
      , Ab = /checked\s*(?:[^=]|=\s*.checked.)/i
      , Wa = /^$|\/(?:java|ecma)script/i
      , kb = /^true\/(.*)/
      , Bb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
      , U = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    U.optgroup = U.option;
    U.tbody = U.tfoot = U.colgroup = U.caption = U.thead;
    U.th = U.td;
    m.extend({
        clone: function(a, 
        b, d) {
            var h, e, l, f, n = a.cloneNode(!0), g = m.contains(a.ownerDocument, a);
            if (!J.noCloneChecked && !(1 !== a.nodeType && 11 !== a.nodeType || m.isXMLDoc(a))) {
                f = t(n);
                l = t(a);
                h = 0;
                for (e = l.length; e > h; h++) {
                    var k = l[h]
                      , j = f[h]
                      , o = j.nodeName.toLowerCase();
                    "input" === o && Ra.test(k.type) ? j.checked = k.checked : ("input" === o || "textarea" === o) && (j.defaultValue = k.defaultValue)
                }
            }
            if (b)
                if (d) {
                    l = l || t(a);
                    f = f || t(n);
                    h = 0;
                    for (e = l.length; e > h; h++)
                        r(l[h], f[h])
                } else
                    r(a, n);
            return f = t(n, "script"),
            f.length > 0 && s(f, !g && t(a, "script")),
            n
        },
        buildFragment: function(a, 
        b, d, h) {
            for (var e, l, f, n, g = b.createDocumentFragment(), k = [], j = 0, o = a.length; o > j; j++)
                if (e = a[j],
                e || 0 === e)
                    if ("object" === m.type(e))
                        m.merge(k, e.nodeType ? [e] : e);
                    else if (yb.test(e)) {
                        l = l || g.appendChild(b.createElement("div"));
                        f = (Va.exec(e) || ["", ""])[1].toLowerCase();
                        f = U[f] || U._default;
                        l.innerHTML = f[1] + e.replace(Ua, "<$1></$2>") + f[2];
                        for (f = f[0]; f--; )
                            l = l.lastChild;
                        m.merge(k, l.childNodes);
                        l = g.firstChild;
                        l.textContent = ""
                    } else
                        k.push(b.createTextNode(e));
            g.textContent = "";
            for (j = 0; e = k[j++]; )
                if ((!h || -1 === m.inArray(e, 
                h)) && (n = m.contains(e.ownerDocument, e),
                l = t(g.appendChild(e), "script"),
                n && s(l),
                d))
                    for (f = 0; e = l[f++]; )
                        Wa.test(e.type || "") && d.push(e);
            return g
        },
        cleanData: function(a) {
            for (var b, d, h, e, l = m.event.special, f = 0; void 0 !== (d = a[f]); f++) {
                if (m.acceptData(d) && (e = d[B.expando],
                e && (b = B.cache[e]))) {
                    if (b.events)
                        for (h in b.events)
                            l[h] ? m.event.remove(d, h) : m.removeEvent(d, h, b.handle);
                    B.cache[e] && delete B.cache[e]
                }
                delete R.cache[d[R.expando]]
            }
        }
    });
    m.fn.extend({
        text: function(a) {
            return ha(this, function(a) {
                return void 0 === a ? m.text(this) : 
                this.empty().each(function() {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a)
                }
                )
            }
            , null , a, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(a) {
                (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && o(this, a).appendChild(a)
            }
            )
        },
        prepend: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = o(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            }
            )
        },
        before: function() {
            return this.domManip(arguments, 
            function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            }
            )
        },
        after: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            }
            )
        },
        remove: function(a, b) {
            for (var d, h = a ? m.filter(a, this) : this, e = 0; null  != (d = h[e]); e++)
                b || 1 !== d.nodeType || m.cleanData(t(d)),
                d.parentNode && (b && m.contains(d.ownerDocument, d) && s(t(d, "script")),
                d.parentNode.removeChild(d));
            return this
        },
        empty: function() {
            for (var a, b = 0; null  != (a = this[b]); b++)
                1 === a.nodeType && (m.cleanData(t(a, 
                !1)),
                a.textContent = "");
            return this
        },
        clone: function(a, b) {
            return a = null  == a ? !1 : a,
            b = null  == b ? a : b,
            this.map(function() {
                return m.clone(this, a, b)
            }
            )
        },
        html: function(a) {
            return ha(this, function(a) {
                var b = this[0] || {}
                  , d = 0
                  , h = this.length;
                if (void 0 === a && 1 === b.nodeType)
                    return b.innerHTML;
                if ("string" == typeof a && !zb.test(a) && !U[(Va.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = a.replace(Ua, "<$1></$2>");
                    try {
                        for (; h > d; d++)
                            b = this[d] || {},
                            1 === b.nodeType && (m.cleanData(t(b, !1)),
                            b.innerHTML = a);
                        b = 0
                    } catch (e) {}
                }
                b && this.empty().append(a)
            }
            , 
            null , a, arguments.length)
        },
        replaceWith: function() {
            var a = arguments[0];
            return this.domManip(arguments, function(b) {
                a = this.parentNode;
                m.cleanData(t(this));
                a && a.replaceChild(b, this)
            }
            ),
            a && (a.length || a.nodeType) ? this : this.remove()
        },
        detach: function(a) {
            return this.remove(a, !0)
        },
        domManip: function(a, b) {
            a = P.apply([], a);
            var d, h, e, l, f = 0, n = this.length, g = this, k = n - 1, j = a[0], o = m.isFunction(j);
            if (o || n > 1 && "string" == typeof j && !J.checkClone && Ab.test(j))
                return this.each(function(d) {
                    var h = g.eq(d);
                    o && (a[0] = j.call(this, d, h.html()));
                    h.domManip(a, b)
                }
                );
            if (n && (d = m.buildFragment(a, this[0].ownerDocument, !1, this),
            h = d.firstChild,
            1 === d.childNodes.length && (d = h),
            h)) {
                h = m.map(t(d, "script"), q);
                for (e = h.length; n > f; f++)
                    l = d,
                    f !== k && (l = m.clone(l, !0, !0),
                    e && m.merge(h, t(l, "script"))),
                    b.call(this[f], l, f);
                if (e) {
                    d = h[h.length - 1].ownerDocument;
                    m.map(h, p);
                    for (f = 0; e > f; f++)
                        l = h[f],
                        Wa.test(l.type || "") && !B.access(l, "globalEval") && m.contains(d, l) && (l.src ? m._evalUrl && m._evalUrl(l.src) : m.globalEval(l.textContent.replace(Bb, "")))
                }
            }
            return this
        }
    });
    m.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        m.fn[a] = function(a) {
            for (var d = [], h = m(a), e = h.length - 1, l = 0; e >= l; l++)
                a = l === e ? this : this.clone(!0),
                m(h[l])[b](a),
                Q.apply(d, a.get());
            return this.pushStack(d)
        }
    }
    );
    var va, Ma = {}, Na = /^margin/, Fa = RegExp("^(" + A + ")(?!px)[a-z%]+$", "i"), wa = function(a) {
        return a.ownerDocument.defaultView.getComputedStyle(a, null )
    }
    ;
    (function() {
        var a, b, d = y.documentElement, h = y.createElement("div"), e = y.createElement("div");
        if (e.style) {
            e.style.backgroundClip = 
            "content-box";
            e.cloneNode(!0).style.backgroundClip = "";
            J.clearCloneStyle = "content-box" === e.style.backgroundClip;
            h.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute";
            h.appendChild(e);
            var l = function() {
                e.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute";
                e.innerHTML = "";
                d.appendChild(h);
                var l = j.getComputedStyle(e, null );
                a = "1%" !== l.top;
                b = "4px" === l.width;
                d.removeChild(h)
            }
            ;
            j.getComputedStyle && m.extend(J, {
                pixelPosition: function() {
                    return l(),
                    a
                },
                boxSizingReliable: function() {
                    return null  == b && l(),
                    b
                },
                reliableMarginRight: function() {
                    var a, b = e.appendChild(y.createElement("div"));
                    return b.style.cssText = e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",
                    b.style.marginRight = b.style.width = "0",
                    e.style.width = "1px",
                    d.appendChild(h),
                    a = !parseFloat(j.getComputedStyle(b, 
                    null ).marginRight),
                    d.removeChild(h),
                    a
                }
            })
        }
    }
    )();
    m.swap = function(a, b, d, h) {
        var e, l = {};
        for (e in b)
            l[e] = a.style[e],
            a.style[e] = b[e];
        d = d.apply(a, h || []);
        for (e in b)
            a.style[e] = l[e];
        return d
    }
    ;
    var Cb = /^(none|table(?!-c[ea]).+)/
      , mb = RegExp("^(" + A + ")(.*)$", "i")
      , Db = RegExp("^([+-])=(" + A + ")", "i")
      , Eb = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , Xa = {
        letterSpacing: "0",
        fontWeight: "400"
    }
      , Oa = ["Webkit", "O", "Moz", "ms"];
    m.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var d = C(a, "opacity");
                        return "" === d ? "1" : 
                        d
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(a, b, d, h) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, l, f, n = m.camelCase(b), g = a.style;
                return b = m.cssProps[n] || (m.cssProps[n] = D(g, n)),
                f = m.cssHooks[b] || m.cssHooks[n],
                void 0 === d ? f && "get" in f && void 0 !== (e = f.get(a, !1, h)) ? e : g[b] : (l = typeof d,
                "string" === l && (e = Db.exec(d)) && (d = (e[1] + 1) * e[2] + parseFloat(m.css(a, 
                b)),
                l = "number"),
                null  != d && d === d && ("number" !== l || m.cssNumber[n] || (d += "px"),
                J.clearCloneStyle || "" !== d || 0 !== b.indexOf("background") || (g[b] = "inherit"),
                f && "set" in f && void 0 === (d = f.set(a, d, h)) || (g[b] = d)),
                void 0)
            }
        },
        css: function(a, b, d, h) {
            var e, l, f, n = m.camelCase(b);
            return b = m.cssProps[n] || (m.cssProps[n] = D(a.style, n)),
            f = m.cssHooks[b] || m.cssHooks[n],
            f && "get" in f && (e = f.get(a, !0, d)),
            void 0 === e && (e = C(a, b, h)),
            "normal" === e && b in Xa && (e = Xa[b]),
            "" === d || d ? (l = parseFloat(e),
            d === !0 || m.isNumeric(l) ? l || 0 : e) : e
        }
    });
    m.each(["height", 
    "width"], function(a, b) {
        m.cssHooks[b] = {
            get: function(a, d, h) {
                return d ? Cb.test(m.css(a, "display")) && 0 === a.offsetWidth ? m.swap(a, Eb, function() {
                    return H(a, b, h)
                }
                ) : H(a, b, h) : void 0
            },
            set: function(a, d, h) {
                var e = h && wa(a);
                return E(a, d, h ? N(a, b, h, "border-box" === m.css(a, "boxSizing", !1, e), e) : 0)
            }
        }
    }
    );
    m.cssHooks.marginRight = G(J.reliableMarginRight, function(a, b) {
        return b ? m.swap(a, {
            display: "inline-block"
        }, C, [a, "marginRight"]) : void 0
    }
    );
    m.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        m.cssHooks[a + b] = {
            expand: function(d) {
                var h = 
                0
                  , e = {};
                for (d = "string" == typeof d ? d.split(" ") : [d]; 4 > h; h++)
                    e[a + ca[h] + b] = d[h] || d[h - 2] || d[0];
                return e
            }
        };
        Na.test(a) || (m.cssHooks[a + b].set = E)
    }
    );
    m.fn.extend({
        css: function(a, b) {
            return ha(this, function(a, b, d) {
                var h, e = {}, l = 0;
                if (m.isArray(b)) {
                    d = wa(a);
                    for (h = b.length; h > l; l++)
                        e[b[l]] = m.css(a, b[l], !1, d);
                    return e
                }
                return void 0 !== d ? m.style(a, b, d) : m.css(a, b)
            }
            , a, b, arguments.length > 1)
        },
        show: function() {
            return L(this, !0)
        },
        hide: function() {
            return L(this)
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : 
            this.each(function() {
                pa(this) ? m(this).show() : m(this).hide()
            }
            )
        }
    });
    m.Tween = F;
    F.prototype = {
        constructor: F,
        init: function(a, b, d, h, e, l) {
            this.elem = a;
            this.prop = d;
            this.easing = e || "swing";
            this.options = b;
            this.start = this.now = this.cur();
            this.end = h;
            this.unit = l || (m.cssNumber[d] ? "" : "px")
        },
        cur: function() {
            var a = F.propHooks[this.prop];
            return a && a.get ? a.get(this) : F.propHooks._default.get(this)
        },
        run: function(a) {
            var b, d = F.propHooks[this.prop];
            return this.pos = b = this.options.duration ? m.easing[this.easing](a, this.options.duration * 
            a, 0, 1, this.options.duration) : a,
            this.now = (this.end - this.start) * b + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            d && d.set ? d.set(this) : F.propHooks._default.set(this),
            this
        }
    };
    F.prototype.init.prototype = F.prototype;
    F.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return null  == a.elem[a.prop] || a.elem.style && null  != a.elem.style[a.prop] ? (b = m.css(a.elem, a.prop, ""),
                b && "auto" !== b ? b : 0) : a.elem[a.prop]
            },
            set: function(a) {
                m.fx.step[a.prop] ? m.fx.step[a.prop](a) : a.elem.style && (null  != a.elem.style[m.cssProps[a.prop]] || 
                m.cssHooks[a.prop]) ? m.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    };
    F.propHooks.scrollTop = F.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    };
    m.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return 0.5 - Math.cos(a * Math.PI) / 2
        }
    };
    m.fx = F.prototype.init;
    m.fx.step = {};
    var da, Ba, Fb = /^(?:toggle|show|hide)$/, Ya = RegExp("^(?:([+-])=|)(" + A + ")([a-z%]*)$", "i"), Gb = /queueHooks$/, xa = [function(a, b, d) {
        var h, e, l, f, n, g, k, j = this, o = {}, v = a.style, p = a.nodeType && 
        pa(a), q = B.get(a, "fxshow");
        d.queue || (f = m._queueHooks(a, "fx"),
        null  == f.unqueued && (f.unqueued = 0,
        n = f.empty.fire,
        f.empty.fire = function() {
            f.unqueued || n()
        }
        ),
        f.unqueued++,
        j.always(function() {
            j.always(function() {
                f.unqueued--;
                m.queue(a, "fx").length || f.empty.fire()
            }
            )
        }
        ));
        1 === a.nodeType && ("height" in b || "width" in b) && (d.overflow = [v.overflow, v.overflowX, v.overflowY],
        g = m.css(a, "display"),
        k = "none" === g ? B.get(a, "olddisplay") || z(a.nodeName) : g,
        "inline" === k && "none" === m.css(a, "float") && (v.display = "inline-block"));
        d.overflow && 
        (v.overflow = "hidden",
        j.always(function() {
            v.overflow = d.overflow[0];
            v.overflowX = d.overflow[1];
            v.overflowY = d.overflow[2]
        }
        ));
        for (h in b)
            if (e = b[h],
            Fb.exec(e)) {
                if (delete b[h],
                l = l || "toggle" === e,
                e === (p ? "hide" : "show")) {
                    if ("show" !== e || !q || void 0 === q[h])
                        continue;p = !0
                }
                o[h] = q && q[h] || m.style(a, h)
            } else
                g = void 0;
        if (m.isEmptyObject(o))
            "inline" === ("none" === g ? z(a.nodeName) : g) && (v.display = g);
        else
            for (h in q ? "hidden" in q && (p = q.hidden) : q = B.access(a, "fxshow", {}),
            l && (q.hidden = !p),
            p ? m(a).show() : j.done(function() {
                m(a).hide()
            }
            ),
            j.done(function() {
                var b;
                B.remove(a, "fxshow");
                for (b in o)
                    m.style(a, b, o[b])
            }
            ),
            o)
                b = Y(p ? q[h] : 0, h, j),
                h in q || (q[h] = b.start,
                p && (b.end = b.start,
                b.start = "width" === h || "height" === h ? 1 : 0))
    }
    ], qa = {
        "*": [function(a, b) {
            var d = this.createTween(a, b)
              , h = d.cur()
              , e = Ya.exec(b)
              , l = e && e[3] || (m.cssNumber[a] ? "" : "px")
              , f = (m.cssNumber[a] || "px" !== l && +h) && Ya.exec(m.css(d.elem, a))
              , n = 1
              , g = 20;
            if (f && f[3] !== l) {
                l = l || f[3];
                e = e || [];
                f = +h || 1;
                do
                    n = n || ".5",
                    f /= n,
                    m.style(d.elem, a, f + l);
                while (n !== (n = d.cur() / h) && 1 !== n && --g)
            }
            return e && (f = d.start = +f || +h || 
            0,
            d.unit = l,
            d.end = e[1] ? f + (e[1] + 1) * e[2] : +e[2]),
            d
        }
        ]
    };
    m.Animation = m.extend(V, {
        tweener: function(a, b) {
            m.isFunction(a) ? (b = a,
            a = ["*"]) : a = a.split(" ");
            for (var d, h = 0, e = a.length; e > h; h++)
                d = a[h],
                qa[d] = qa[d] || [],
                qa[d].unshift(b)
        },
        prefilter: function(a, b) {
            b ? xa.unshift(a) : xa.push(a)
        }
    });
    m.speed = function(a, b, d) {
        var h = a && "object" == typeof a ? m.extend({}, a) : {
            complete: d || !d && b || m.isFunction(a) && a,
            duration: a,
            easing: d && b || b && !m.isFunction(b) && b
        };
        return h.duration = m.fx.off ? 0 : "number" == typeof h.duration ? h.duration : h.duration in 
        m.fx.speeds ? m.fx.speeds[h.duration] : m.fx.speeds._default,
        (null  == h.queue || h.queue === !0) && (h.queue = "fx"),
        h.old = h.complete,
        h.complete = function() {
            m.isFunction(h.old) && h.old.call(this);
            h.queue && m.dequeue(this, h.queue)
        }
        ,
        h
    }
    ;
    m.fn.extend({
        fadeTo: function(a, b, d, h) {
            return this.filter(pa).css("opacity", 0).show().end().animate({
                opacity: b
            }, a, d, h)
        },
        animate: function(a, b, d, h) {
            var e = m.isEmptyObject(a)
              , l = m.speed(b, d, h);
            b = function() {
                var b = V(this, m.extend({}, a), l);
                (e || B.get(this, "finish")) && b.stop(!0)
            }
            ;
            return b.finish = 
            b,
            e || l.queue === !1 ? this.each(b) : this.queue(l.queue, b)
        },
        stop: function(a, b, d) {
            var h = function(a) {
                var b = a.stop;
                delete a.stop;
                b(d)
            }
            ;
            return "string" != typeof a && (d = b,
            b = a,
            a = void 0),
            b && a !== !1 && this.queue(a || "fx", []),
            this.each(function() {
                var b = !0
                  , e = null  != a && a + "queueHooks"
                  , l = m.timers
                  , f = B.get(this);
                if (e)
                    f[e] && f[e].stop && h(f[e]);
                else
                    for (e in f)
                        f[e] && f[e].stop && Gb.test(e) && h(f[e]);
                for (e = l.length; e--; )
                    l[e].elem !== this || null  != a && l[e].queue !== a || (l[e].anim.stop(d),
                    b = !1,
                    l.splice(e, 1));
                (b || !d) && m.dequeue(this, a)
            }
            )
        },
        finish: function(a) {
            return a !== !1 && (a = a || "fx"),
            this.each(function() {
                var b, d = B.get(this), h = d[a + "queue"];
                b = d[a + "queueHooks"];
                var e = m.timers
                  , l = h ? h.length : 0;
                d.finish = !0;
                m.queue(this, a, []);
                b && b.stop && b.stop.call(this, !0);
                for (b = e.length; b--; )
                    e[b].elem === this && e[b].queue === a && (e[b].anim.stop(!0),
                    e.splice(b, 1));
                for (b = 0; l > b; b++)
                    h[b] && h[b].finish && h[b].finish.call(this);
                delete d.finish
            }
            )
        }
    });
    m.each(["toggle", "show", "hide"], function(a, b) {
        var d = m.fn[b];
        m.fn[b] = function(a, h, e) {
            return null  == a || "boolean" == typeof a ? 
            d.apply(this, arguments) : this.animate(O(b, !0), a, h, e)
        }
    }
    );
    m.each({
        slideDown: O("show"),
        slideUp: O("hide"),
        slideToggle: O("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(a, b) {
        m.fn[a] = function(a, d, h) {
            return this.animate(b, a, d, h)
        }
    }
    );
    m.timers = [];
    m.fx.tick = function() {
        var a, b = 0, d = m.timers;
        for (da = m.now(); b < d.length; b++)
            a = d[b],
            a() || d[b] !== a || d.splice(b--, 1);
        d.length || m.fx.stop();
        da = void 0
    }
    ;
    m.fx.timer = function(a) {
        m.timers.push(a);
        a() ? m.fx.start() : m.timers.pop()
    }
    ;
    m.fx.interval = 13;
    m.fx.start = function() {
        Ba || (Ba = setInterval(m.fx.tick, m.fx.interval))
    }
    ;
    m.fx.stop = function() {
        clearInterval(Ba);
        Ba = null 
    }
    ;
    m.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    };
    m.fn.delay = function(a, b) {
        return a = m.fx ? m.fx.speeds[a] || a : a,
        b = b || "fx",
        this.queue(b, function(b, d) {
            var h = setTimeout(b, a);
            d.stop = function() {
                clearTimeout(h)
            }
        }
        )
    }
    ;
    (function() {
        var a = y.createElement("input")
          , b = y.createElement("select")
          , d = b.appendChild(y.createElement("option"));
        a.type = "checkbox";
        J.checkOn = "" !== a.value;
        J.optSelected = 
        d.selected;
        b.disabled = !0;
        J.optDisabled = !d.disabled;
        a = y.createElement("input");
        a.value = "t";
        a.type = "radio";
        J.radioValue = "t" === a.value
    }
    )();
    var Za, ua = m.expr.attrHandle;
    m.fn.extend({
        attr: function(a, b) {
            return ha(this, m.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                m.removeAttr(this, a)
            }
            )
        }
    });
    m.extend({
        attr: function(a, b, d) {
            var h, e, l = a.nodeType;
            if (a && 3 !== l && 8 !== l && 2 !== l)
                return typeof a.getAttribute === "undefined" ? m.prop(a, b, d) : (1 === l && m.isXMLDoc(a) || (b = b.toLowerCase(),
                h = m.attrHooks[b] || 
                (m.expr.match.bool.test(b) ? Za : void 0)),
                void 0 === d ? h && "get" in h && null  !== (e = h.get(a, b)) ? e : (e = m.find.attr(a, b),
                null  == e ? void 0 : e) : null  !== d ? h && "set" in h && void 0 !== (e = h.set(a, d, b)) ? e : (a.setAttribute(b, d + ""),
                d) : void m.removeAttr(a, b))
        },
        removeAttr: function(a, b) {
            var d, h, e = 0, l = b && b.match(Z);
            if (l && 1 === a.nodeType)
                for (; d = l[e++]; )
                    h = m.propFix[d] || d,
                    m.expr.match.bool.test(d) && (a[h] = !1),
                    a.removeAttribute(d)
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!J.radioValue && "radio" === b && m.nodeName(a, "input")) {
                        var d = a.value;
                        return a.setAttribute("type", 
                        b),
                        d && (a.value = d),
                        b
                    }
                }
            }
        }
    });
    Za = {
        set: function(a, b, d) {
            return b === !1 ? m.removeAttr(a, d) : a.setAttribute(d, d),
            d
        }
    };
    m.each(m.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var d = ua[b] || m.find.attr;
        ua[b] = function(a, b, h) {
            var e, l;
            return h || (l = ua[b],
            ua[b] = e,
            e = null  != d(a, b, h) ? b.toLowerCase() : null ,
            ua[b] = l),
            e
        }
    }
    );
    var Hb = /^(?:input|select|textarea|button)$/i;
    m.fn.extend({
        prop: function(a, b) {
            return ha(this, m.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            return this.each(function() {
                delete this[m.propFix[a] || 
                a]
            }
            )
        }
    });
    m.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(a, b, d) {
            var h, e, l, f = a.nodeType;
            if (a && 3 !== f && 8 !== f && 2 !== f)
                return l = 1 !== f || !m.isXMLDoc(a),
                l && (b = m.propFix[b] || b,
                e = m.propHooks[b]),
                void 0 !== d ? e && "set" in e && void 0 !== (h = e.set(a, d, b)) ? h : a[b] = d : e && "get" in e && null  !== (h = e.get(a, b)) ? h : a[b]
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    return a.hasAttribute("tabindex") || Hb.test(a.nodeName) || a.href ? a.tabIndex : -1
                }
            }
        }
    });
    J.optSelected || (m.propHooks.selected = {
        get: function() {
            return null 
        }
    });
    m.each(["tabIndex", 
    "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        m.propFix[this.toLowerCase()] = this
    }
    );
    var Ha = /[\t\r\n\f]/g;
    m.fn.extend({
        addClass: function(a) {
            var b, d, h, e, l;
            b = "string" == typeof a && a;
            var f = 0
              , n = this.length;
            if (m.isFunction(a))
                return this.each(function(b) {
                    m(this).addClass(a.call(this, b, this.className))
                }
                );
            if (b)
                for (b = (a || "").match(Z) || []; n > f; f++)
                    if (d = this[f],
                    h = 1 === d.nodeType && (d.className ? (" " + d.className + " ").replace(Ha, " ") : " ")) {
                        for (l = 
                        0; e = b[l++]; )
                            h.indexOf(" " + e + " ") < 0 && (h += e + " ");
                        h = m.trim(h);
                        d.className !== h && (d.className = h)
                    }
            return this
        },
        removeClass: function(a) {
            var b, d, h, e, l;
            b = 0 === arguments.length || "string" == typeof a && a;
            var f = 0
              , n = this.length;
            if (m.isFunction(a))
                return this.each(function(b) {
                    m(this).removeClass(a.call(this, b, this.className))
                }
                );
            if (b)
                for (b = (a || "").match(Z) || []; n > f; f++)
                    if (d = this[f],
                    h = 1 === d.nodeType && (d.className ? (" " + d.className + " ").replace(Ha, " ") : "")) {
                        for (l = 0; e = b[l++]; )
                            for (; h.indexOf(" " + e + " ") >= 0; )
                                h = h.replace(" " + 
                                e + " ", " ");
                        h = a ? m.trim(h) : "";
                        d.className !== h && (d.className = h)
                    }
            return this
        },
        toggleClass: function(a, b) {
            var d = typeof a;
            return "boolean" == typeof b && "string" === d ? b ? this.addClass(a) : this.removeClass(a) : this.each(m.isFunction(a) ? function(d) {
                m(this).toggleClass(a.call(this, d, this.className, b), b)
            }
             : function() {
                if ("string" === d)
                    for (var b, h = 0, e = m(this), l = a.match(Z) || []; b = l[h++]; )
                        e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                else
                    (d === "undefined" || "boolean" === d) && (this.className && B.set(this, "__className__", this.className),
                    this.className = this.className || a === !1 ? "" : B.get(this, "__className__") || "")
            }
            )
        },
        hasClass: function(a) {
            a = " " + a + " ";
            for (var b = 0, d = this.length; d > b; b++)
                if (1 === this[b].nodeType && (" " + this[b].className + " ").replace(Ha, " ").indexOf(a) >= 0)
                    return !0;
            return !1
        }
    });
    var Ib = /\r/g;
    m.fn.extend({
        val: function(a) {
            var b, d, h, e = this[0];
            if (arguments.length)
                return h = m.isFunction(a),
                this.each(function(d) {
                    var e;
                    1 === this.nodeType && (e = h ? a.call(this, d, m(this).val()) : a,
                    null  == e ? e = "" : "number" == typeof e ? e += "" : m.isArray(e) && (e = m.map(e, 
                    function(a) {
                        return null  == a ? "" : a + ""
                    }
                    )),
                    b = m.valHooks[this.type] || m.valHooks[this.nodeName.toLowerCase()],
                    b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                }
                );
            if (e)
                return b = m.valHooks[e.type] || m.valHooks[e.nodeName.toLowerCase()],
                b && "get" in b && void 0 !== (d = b.get(e, "value")) ? d : (d = e.value,
                "string" == typeof d ? d.replace(Ib, "") : null  == d ? "" : d)
        }
    });
    m.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = m.find.attr(a, "value");
                    return null  != b ? b : m.trim(m.text(a))
                }
            },
            select: {
                get: function(a) {
                    for (var b, d = a.options, 
                    h = a.selectedIndex, e = "select-one" === a.type || 0 > h, l = e ? null  : [], f = e ? h + 1 : d.length, n = 0 > h ? f : e ? h : 0; f > n; n++)
                        if (b = d[n],
                        !(!b.selected && n !== h || (J.optDisabled ? b.disabled : null  !== b.getAttribute("disabled")) || b.parentNode.disabled && m.nodeName(b.parentNode, "optgroup"))) {
                            if (a = m(b).val(),
                            e)
                                return a;
                            l.push(a)
                        }
                    return l
                },
                set: function(a, b) {
                    for (var d, h, e = a.options, l = m.makeArray(b), f = e.length; f--; )
                        h = e[f],
                        (h.selected = m.inArray(h.value, l) >= 0) && (d = !0);
                    return d || (a.selectedIndex = -1),
                    l
                }
            }
        }
    });
    m.each(["radio", "checkbox"], function() {
        m.valHooks[this] = 
        {
            set: function(a, b) {
                return m.isArray(b) ? a.checked = m.inArray(m(a).val(), b) >= 0 : void 0
            }
        };
        J.checkOn || (m.valHooks[this].get = function(a) {
            return null  === a.getAttribute("value") ? "on" : a.value
        }
        )
    }
    );
    m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        m.fn[b] = function(a, d) {
            return arguments.length > 0 ? this.on(b, null , a, d) : this.trigger(b)
        }
    }
    );
    m.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        },
        bind: function(a, b, d) {
            return this.on(a, null , b, d)
        },
        unbind: function(a, b) {
            return this.off(a, null , b)
        },
        delegate: function(a, b, d, h) {
            return this.on(b, a, d, h)
        },
        undelegate: function(a, b, d) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", d)
        }
    });
    var Ia = m.now()
      , Ja = /\?/;
    m.parseJSON = function(a) {
        return JSON.parse(a + "")
    }
    ;
    m.parseXML = function(a) {
        var b, d;
        if (!a || "string" != typeof a)
            return null ;
        try {
            d = new DOMParser,
            b = d.parseFromString(a, 
            "text/xml")
        } catch (h) {
            b = void 0
        }
        return (!b || b.getElementsByTagName("parsererror").length) && m.error("Invalid XML: " + a),
        b
    }
    ;
    var ia, ja, Jb = /#.*$/, $a = /([?&])_=[^&]*/, Kb = /^(.*?):[ \t]*([^\r\n]*)$/gm, Lb = /^(?:GET|HEAD)$/, Mb = /^\/\//, ab = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, bb = {}, Ga = {}, cb = "*/".concat("*");
    try {
        ja = location.href
    } catch (Ub) {
        ja = y.createElement("a"),
        ja.href = "",
        ja = ja.href
    }
    ia = ab.exec(ja.toLowerCase()) || [];
    m.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: ja,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(ia[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": cb,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": m.parseJSON,
                "text xml": m.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? sa(sa(a, 
            m.ajaxSettings), b) : sa(m.ajaxSettings, a)
        },
        ajaxPrefilter: ba(bb),
        ajaxTransport: ba(Ga),
        ajax: function(a, b) {
            function d(a, b, f, g) {
                var j, u, t, I, A = b;
                if (2 !== w) {
                    w = 2;
                    n && clearTimeout(n);
                    h = void 0;
                    l = g || "";
                    x.readyState = a > 0 ? 4 : 0;
                    g = a >= 200 && 300 > a || 304 === a;
                    if (f) {
                        t = o;
                        for (var K = x, z, C, M, y, G = t.contents, D = t.dataTypes; "*" === D[0]; )
                            D.shift(),
                            void 0 === z && (z = t.mimeType || K.getResponseHeader("Content-Type"));
                        if (z)
                            for (C in G)
                                if (G[C] && G[C].test(z)) {
                                    D.unshift(C);
                                    break
                                }
                        if (D[0] in f)
                            M = D[0];
                        else {
                            for (C in f) {
                                if (!D[0] || t.converters[C + " " + D[0]]) {
                                    M = 
                                    C;
                                    break
                                }
                                y || (y = C)
                            }
                            M = M || y
                        }
                        t = M ? (M !== D[0] && D.unshift(M),
                        f[M]) : void 0
                    }
                    var B;
                    a: {
                        f = o;
                        z = t;
                        C = x;
                        M = g;
                        var P, E, Q;
                        t = {};
                        K = f.dataTypes.slice();
                        if (K[1])
                            for (P in f.converters)
                                t[P.toLowerCase()] = f.converters[P];
                        for (y = K.shift(); y; )
                            if (f.responseFields[y] && (C[f.responseFields[y]] = z),
                            !Q && M && f.dataFilter && (z = f.dataFilter(z, f.dataType)),
                            Q = y,
                            y = K.shift())
                                if ("*" === y)
                                    y = Q;
                                else if ("*" !== Q && Q !== y) {
                                    if (P = t[Q + " " + y] || t["* " + y],
                                    !P)
                                        for (B in t)
                                            if (E = B.split(" "),
                                            E[1] === y && (P = t[Q + " " + E[0]] || t["* " + E[0]])) {
                                                P === !0 ? P = t[B] : t[B] !== !0 && (y = E[0],
                                                K.unshift(E[1]));
                                                break
                                            }
                                    if (P !== !0)
                                        if (P && f["throws"])
                                            z = P(z);
                                        else
                                            try {
                                                z = P(z)
                                            } catch (F) {
                                                B = {
                                                    state: "parsererror",
                                                    error: P ? F : "No conversion from " + Q + " to " + y
                                                };
                                                break a
                                            }
                                }
                        B = {
                            state: "success",
                            data: z
                        }
                    }
                    t = B;
                    g ? (o.ifModified && (I = x.getResponseHeader("Last-Modified"),
                    I && (m.lastModified[e] = I),
                    I = x.getResponseHeader("etag"),
                    I && (m.etag[e] = I)),
                    204 === a || "HEAD" === o.type ? A = "nocontent" : 304 === a ? A = "notmodified" : (A = t.state,
                    j = t.data,
                    u = t.error,
                    g = !u)) : (u = A,
                    (a || !A) && (A = "error",
                    0 > a && (a = 0)));
                    x.status = a;
                    x.statusText = (b || A) + "";
                    g ? q.resolveWith(v, 
                    [j, A, x]) : q.rejectWith(v, [x, A, u]);
                    x.statusCode(r);
                    r = void 0;
                    k && p.trigger(g ? "ajaxSuccess" : "ajaxError", [x, o, g ? j : u]);
                    s.fireWith(v, [x, A]);
                    k && (p.trigger("ajaxComplete", [x, o]),
                    --m.active || m.event.trigger("ajaxStop"))
                }
            }
            "object" == typeof a && (b = a,
            a = void 0);
            b = b || {};
            var h, e, l, f, n, g, k, j, o = m.ajaxSetup({}, b), v = o.context || o, p = o.context && (v.nodeType || v.jquery) ? m(v) : m.event, q = m.Deferred(), s = m.Callbacks("once memory"), r = o.statusCode || {}, t = {}, A = {}, w = 0, z = "canceled", x = {
                readyState: 0,
                getResponseHeader: function(a) {
                    var b;
                    if (2 === 
                    w) {
                        if (!f)
                            for (f = {}; b = Kb.exec(l); )
                                f[b[1].toLowerCase()] = b[2];
                        b = f[a.toLowerCase()]
                    }
                    return null  == b ? null  : b
                },
                getAllResponseHeaders: function() {
                    return 2 === w ? l : null 
                },
                setRequestHeader: function(a, b) {
                    var d = a.toLowerCase();
                    return w || (a = A[d] = A[d] || a,
                    t[a] = b),
                    this
                },
                overrideMimeType: function(a) {
                    return w || (o.mimeType = a),
                    this
                },
                statusCode: function(a) {
                    var b;
                    if (a)
                        if (2 > w)
                            for (b in a)
                                r[b] = [r[b], a[b]];
                        else
                            x.always(a[x.status]);
                    return this
                },
                abort: function(a) {
                    a = a || z;
                    return h && h.abort(a),
                    d(0, a),
                    this
                }
            };
            if (q.promise(x).complete = 
            s.add,
            x.success = x.done,
            x.error = x.fail,
            o.url = ((a || o.url || ja) + "").replace(Jb, "").replace(Mb, ia[1] + "//"),
            o.type = b.method || b.type || o.method || o.type,
            o.dataTypes = m.trim(o.dataType || "*").toLowerCase().match(Z) || [""],
            null  == o.crossDomain && (g = ab.exec(o.url.toLowerCase()),
            o.crossDomain = !(!g || g[1] === ia[1] && g[2] === ia[2] && (g[3] || ("http:" === g[1] ? "80" : "443")) === (ia[3] || ("http:" === ia[1] ? "80" : "443")))),
            o.data && o.processData && "string" != typeof o.data && (o.data = m.param(o.data, o.traditional)),
            ea(bb, o, b, x),
            2 === w)
                return x;
            (k = o.global) && 0 === m.active++ && m.event.trigger("ajaxStart");
            o.type = o.type.toUpperCase();
            o.hasContent = !Lb.test(o.type);
            e = o.url;
            o.hasContent || (o.data && (e = o.url += (Ja.test(e) ? "&" : "?") + o.data,
            delete o.data),
            o.cache === !1 && (o.url = $a.test(e) ? e.replace($a, "$1_=" + Ia++) : e + (Ja.test(e) ? "&" : "?") + "_=" + Ia++));
            o.ifModified && (m.lastModified[e] && x.setRequestHeader("If-Modified-Since", m.lastModified[e]),
            m.etag[e] && x.setRequestHeader("If-None-Match", m.etag[e]));
            (o.data && o.hasContent && o.contentType !== !1 || b.contentType) && 
            x.setRequestHeader("Content-Type", o.contentType);
            x.setRequestHeader("Accept", o.dataTypes[0] && o.accepts[o.dataTypes[0]] ? o.accepts[o.dataTypes[0]] + ("*" !== o.dataTypes[0] ? ", " + cb + "; q=0.01" : "") : o.accepts["*"]);
            for (j in o.headers)
                x.setRequestHeader(j, o.headers[j]);
            if (o.beforeSend && (o.beforeSend.call(v, x, o) === !1 || 2 === w))
                return x.abort();
            z = "abort";
            for (j in {
                success: 1,
                error: 1,
                complete: 1
            })
                x[j](o[j]);
            if (h = ea(Ga, o, b, x)) {
                x.readyState = 1;
                k && p.trigger("ajaxSend", [x, o]);
                o.async && o.timeout > 0 && (n = setTimeout(function() {
                    x.abort("timeout")
                }
                , 
                o.timeout));
                try {
                    w = 1,
                    h.send(t, d)
                } catch (C) {
                    if (!(2 > w))
                        throw C;
                    d(-1, C)
                }
            } else
                d(-1, "No Transport");
            return x
        },
        getJSON: function(a, b, d) {
            return m.get(a, b, d, "json")
        },
        getScript: function(a, b) {
            return m.get(a, void 0, b, "script")
        }
    });
    m.each(["get", "post"], function(a, b) {
        m[b] = function(a, d, h, e) {
            return m.isFunction(d) && (e = e || h,
            h = d,
            d = void 0),
            m.ajax({
                url: a,
                type: b,
                dataType: e,
                data: d,
                success: h
            })
        }
    }
    );
    m.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
        m.fn[b] = function(a) {
            return this.on(b, 
            a)
        }
    }
    );
    m._evalUrl = function(a) {
        return m.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }
    ;
    m.fn.extend({
        wrapAll: function(a) {
            var b;
            return m.isFunction(a) ? this.each(function(b) {
                m(this).wrapAll(a.call(this, b))
            }
            ) : (this[0] && (b = m(a, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && b.insertBefore(this[0]),
            b.map(function() {
                for (var a = this; a.firstElementChild; )
                    a = a.firstElementChild;
                return a
            }
            ).append(this)),
            this)
        },
        wrapInner: function(a) {
            return this.each(m.isFunction(a) ? function(b) {
                m(this).wrapInner(a.call(this, 
                b))
            }
             : function() {
                var b = m(this)
                  , d = b.contents();
                d.length ? d.wrapAll(a) : b.append(a)
            }
            )
        },
        wrap: function(a) {
            var b = m.isFunction(a);
            return this.each(function(d) {
                m(this).wrapAll(b ? a.call(this, d) : a)
            }
            )
        },
        unwrap: function() {
            return this.parent().each(function() {
                m.nodeName(this, "body") || m(this).replaceWith(this.childNodes)
            }
            ).end()
        }
    });
    m.expr.filters.hidden = function(a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0
    }
    ;
    m.expr.filters.visible = function(a) {
        return !m.expr.filters.hidden(a)
    }
    ;
    var Nb = /%20/g
      , nb = /\[\]$/
      , db = /\r?\n/g
      , Ob = 
    /^(?:submit|button|image|reset|file)$/i
      , Pb = /^(?:input|select|textarea|keygen)/i;
    m.param = function(a, b) {
        var d, h = [], e = function(a, b) {
            b = m.isFunction(b) ? b() : null  == b ? "" : b;
            h[h.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
        }
        ;
        if (void 0 === b && (b = m.ajaxSettings && m.ajaxSettings.traditional),
        m.isArray(a) || a.jquery && !m.isPlainObject(a))
            m.each(a, function() {
                e(this.name, this.value)
            }
            );
        else
            for (d in a)
                aa(d, a[d], b, e);
        return h.join("&").replace(Nb, "+")
    }
    ;
    m.fn.extend({
        serialize: function() {
            return m.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = m.prop(this, "elements");
                return a ? m.makeArray(a) : this
            }
            ).filter(function() {
                var a = this.type;
                return this.name && !m(this).is(":disabled") && Pb.test(this.nodeName) && !Ob.test(a) && (this.checked || !Ra.test(a))
            }
            ).map(function(a, b) {
                var d = m(this).val();
                return null  == d ? null  : m.isArray(d) ? m.map(d, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(db, "\r\n")
                    }
                }
                ) : {
                    name: b.name,
                    value: d.replace(db, "\r\n")
                }
            }
            ).get()
        }
    });
    m.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest
        } catch (a) {}
    }
    ;
    var Qb = 0
      , Ea = {}
      , Rb = {
        0: 200,
        1223: 204
    }
      , ka = m.ajaxSettings.xhr();
    j.ActiveXObject && m(j).on("unload", function() {
        for (var a in Ea)
            Ea[a]()
    }
    );
    J.cors = !!ka && "withCredentials" in ka;
    J.ajax = ka = !!ka;
    m.ajaxTransport(function(a) {
        var b;
        return J.cors || ka && !a.crossDomain ? {
            send: function(d, h) {
                var e, l = a.xhr(), f = ++Qb;
                if (l.open(a.type, a.url, a.async, a.username, a.password),
                a.xhrFields)
                    for (e in a.xhrFields)
                        l[e] = a.xhrFields[e];
                a.mimeType && l.overrideMimeType && l.overrideMimeType(a.mimeType);
                a.crossDomain || d["X-Requested-With"] || (d["X-Requested-With"] = 
                "XMLHttpRequest");
                for (e in d)
                    l.setRequestHeader(e, d[e]);
                b = function(a) {
                    return function() {
                        b && (delete Ea[f],
                        b = l.onload = l.onerror = null ,
                        "abort" === a ? l.abort() : "error" === a ? h(l.status, l.statusText) : h(Rb[l.status] || l.status, l.statusText, "string" == typeof l.responseText ? {
                            text: l.responseText
                        } : void 0, l.getAllResponseHeaders()))
                    }
                }
                ;
                l.onload = b();
                l.onerror = b("error");
                b = Ea[f] = b("abort");
                try {
                    l.send(a.hasContent && a.data || null )
                } catch (n) {
                    if (b)
                        throw n;
                }
            },
            abort: function() {
                b && b()
            }
        } : void 0
    }
    );
    m.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(a) {
                return m.globalEval(a),
                a
            }
        }
    });
    m.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1);
        a.crossDomain && (a.type = "GET")
    }
    );
    m.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, d;
            return {
                send: function(h, e) {
                    b = m("<script>").prop({
                        async: !0,
                        charset: a.scriptCharset,
                        src: a.url
                    }).on("load error", d = function(a) {
                        b.remove();
                        d = null ;
                        a && e("error" === a.type ? 404 : 200, a.type)
                    }
                    );
                    y.head.appendChild(b[0])
                },
                abort: function() {
                    d && d()
                }
            }
        }
    }
    );
    var eb = []
      , Ka = /(=)\?(?=&|$)|\?\?/;
    m.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = eb.pop() || m.expando + "_" + Ia++;
            return this[a] = !0,
            a
        }
    });
    m.ajaxPrefilter("json jsonp", function(a, b, d) {
        var h, e, l, f = a.jsonp !== !1 && (Ka.test(a.url) ? "url" : "string" == typeof a.data && !(a.contentType || "").indexOf("application/x-www-form-urlencoded") && Ka.test(a.data) && "data");
        return f || "jsonp" === a.dataTypes[0] ? (h = a.jsonpCallback = m.isFunction(a.jsonpCallback) ? a.jsonpCallback() : a.jsonpCallback,
        f ? a[f] = a[f].replace(Ka, "$1" + 
        h) : a.jsonp !== !1 && (a.url += (Ja.test(a.url) ? "&" : "?") + a.jsonp + "=" + h),
        a.converters["script json"] = function() {
            return l || m.error(h + " was not called"),
            l[0]
        }
        ,
        a.dataTypes[0] = "json",
        e = j[h],
        j[h] = function() {
            l = arguments
        }
        ,
        d.always(function() {
            j[h] = e;
            a[h] && (a.jsonpCallback = b.jsonpCallback,
            eb.push(h));
            l && m.isFunction(e) && e(l[0]);
            l = e = void 0
        }
        ),
        "script") : void 0
    }
    );
    m.parseHTML = function(a, b, d) {
        if (!a || "string" != typeof a)
            return null ;
        "boolean" == typeof b && (d = b,
        b = !1);
        b = b || y;
        var h = Qa.exec(a);
        d = !d && [];
        return h ? [b.createElement(h[1])] : 
        (h = m.buildFragment([a], b, d),
        d && d.length && m(d).remove(),
        m.merge([], h.childNodes))
    }
    ;
    var fb = m.fn.load;
    m.fn.load = function(a, b, d) {
        if ("string" != typeof a && fb)
            return fb.apply(this, arguments);
        var h, e, l, f = this, n = a.indexOf(" ");
        return n >= 0 && (h = m.trim(a.slice(n)),
        a = a.slice(0, n)),
        m.isFunction(b) ? (d = b,
        b = void 0) : b && "object" == typeof b && (e = "POST"),
        f.length > 0 && m.ajax({
            url: a,
            type: e,
            dataType: "html",
            data: b
        }).done(function(a) {
            l = arguments;
            f.html(h ? m("<div>").append(m.parseHTML(a)).find(h) : a)
        }
        ).complete(d && function(a, b) {
            f.each(d, 
            l || [a.responseText, b, a])
        }
        ),
        this
    }
    ;
    m.expr.filters.animated = function(a) {
        return m.grep(m.timers, function(b) {
            return a === b.elem
        }
        ).length
    }
    ;
    var gb = j.document.documentElement;
    m.offset = {
        setOffset: function(a, b, d) {
            var h, e, l, f, n, g, o = m.css(a, "position"), k = m(a), j = {};
            "static" === o && (a.style.position = "relative");
            n = k.offset();
            l = m.css(a, "top");
            g = m.css(a, "left");
            ("absolute" === o || "fixed" === o) && (l + g).indexOf("auto") > -1 ? (h = k.position(),
            f = h.top,
            e = h.left) : (f = parseFloat(l) || 0,
            e = parseFloat(g) || 0);
            m.isFunction(b) && (b = b.call(a, 
            d, n));
            null  != b.top && (j.top = b.top - n.top + f);
            null  != b.left && (j.left = b.left - n.left + e);
            "using" in b ? b.using.call(a, j) : k.css(j)
        }
    };
    m.fn.extend({
        offset: function(a) {
            if (arguments.length)
                return void 0 === a ? this : this.each(function(b) {
                    m.offset.setOffset(this, a, b)
                }
                );
            var b, d, h = this[0], e = {
                top: 0,
                left: 0
            }, l = h && h.ownerDocument;
            if (l)
                return b = l.documentElement,
                m.contains(b, h) ? (typeof h.getBoundingClientRect !== "undefined" && (e = h.getBoundingClientRect()),
                d = m.isWindow(l) ? l : 9 === l.nodeType && l.defaultView,
                {
                    top: e.top + d.pageYOffset - 
                    b.clientTop,
                    left: e.left + d.pageXOffset - b.clientLeft
                }) : e
        },
        position: function() {
            if (this[0]) {
                var a, b, d = this[0], h = {
                    top: 0,
                    left: 0
                };
                return "fixed" === m.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(),
                b = this.offset(),
                m.nodeName(a[0], "html") || (h = a.offset()),
                h.top += m.css(a[0], "borderTopWidth", !0),
                h.left += m.css(a[0], "borderLeftWidth", !0)),
                {
                    top: b.top - h.top - m.css(d, "marginTop", !0),
                    left: b.left - h.left - m.css(d, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var a = this.offsetParent || 
                gb; a && !m.nodeName(a, "html") && "static" === m.css(a, "position"); )
                    a = a.offsetParent;
                return a || gb
            }
            )
        }
    });
    m.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a, b) {
        var d = "pageYOffset" === b;
        m.fn[a] = function(h) {
            return ha(this, function(a, h, e) {
                var l = m.isWindow(a) ? a : 9 === a.nodeType && a.defaultView;
                return void 0 === e ? l ? l[b] : a[h] : void (l ? l.scrollTo(d ? j.pageXOffset : e, d ? e : j.pageYOffset) : a[h] = e)
            }
            , a, h, arguments.length, null )
        }
    }
    );
    m.each(["top", "left"], function(a, b) {
        m.cssHooks[b] = G(J.pixelPosition, function(a, d) {
            return d ? 
            (d = C(a, b),
            Fa.test(d) ? m(a).position()[b] + "px" : d) : void 0
        }
        )
    }
    );
    m.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        m.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(d, h) {
            m.fn[h] = function(h, e) {
                var l = arguments.length && (d || "boolean" != typeof h)
                  , f = d || (h === !0 || e === !0 ? "margin" : "border");
                return ha(this, function(b, d, h) {
                    var e;
                    return m.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement,
                    Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + 
                    a])) : void 0 === h ? m.css(b, d, f) : m.style(b, d, h, f)
                }
                , b, l ? h : void 0, l, null )
            }
        }
        )
    }
    );
    m.fn.size = function() {
        return this.length
    }
    ;
    m.fn.andSelf = m.fn.addBack;
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return m
    }
    );
    var Sb = j.jQuery
      , Tb = j.$;
    return m.noConflict = function(a) {
        return j.$ === m && (j.$ = Tb),
        a && j.jQuery === m && (j.jQuery = Sb),
        m
    }
    ,
    typeof g === "undefined" && (j.jQuery = j.$ = m),
    m
}
);
// Input 1
(function(j, g, k) {
    "function" == typeof define && define.amd ? define(["jquery"], function(a) {
        return k(a, j, g),
        a.mobile
    }
    ) : k(j.jQuery, j, g)
}
)(this, document, function(j, g, k) {
    j.mobile = {};
    j.extend(j.mobile, {
        version: "1.4.4",
        subPageUrlKey: "ui-page",
        hideUrlBar: !0,
        keepNative: ":jqmData(role='none'), :jqmData(role='nojs')",
        activePageClass: "ui-page-active",
        activeBtnClass: "ui-btn-active",
        focusClass: "ui-focus",
        ajaxEnabled: !0,
        hashListeningEnabled: !0,
        linkBindingEnabled: !0,
        defaultPageTransition: "fade",
        maxTransitionWidth: !1,
        minScrollBack: 0,
        defaultDialogTransition: "pop",
        pageLoadErrorMessage: "Error Loading Page",
        pageLoadErrorMessageTheme: "a",
        phonegapNavigationEnabled: !1,
        autoInitializePage: !0,
        pushStateEnabled: !0,
        ignoreContentEnabled: !1,
        buttonMarkup: {
            hoverDelay: 200
        },
        dynamicBaseEnabled: !0,
        pageContainer: j(),
        allowCrossDomainPages: !1,
        dialogHashKey: "&ui-state=dialog"
    });
    (function(a, f, e) {
        var d = {}
          , b = a.find
          , h = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/
          , l = /:jqmData\(([^)]*)\)/g;
        a.extend(a.mobile, {
            ns: "",
            getAttribute: function(b, d) {
                var e;
                (b = b.jquery ? 
                b[0] : b) && b.getAttribute && (e = b.getAttribute("data-" + a.mobile.ns + d));
                try {
                    e = "true" === e ? !0 : "false" === e ? !1 : "null" === e ? null  : +e + "" === e ? +e : h.test(e) ? JSON.parse(e) : e
                } catch (l) {}
                return e
            },
            nsNormalizeDict: d,
            nsNormalize: function(b) {
                return d[b] || (d[b] = a.camelCase(a.mobile.ns + b))
            },
            closestPageData: function(a) {
                return a.closest(":jqmData(role='page'), :jqmData(role='dialog')").data("mobile-page")
            }
        });
        a.fn.jqmData = function(b, d) {
            var h;
            return "undefined" != typeof b && (b && (b = a.mobile.nsNormalize(b)),
            h = arguments.length < 2 || 
            d === e ? this.data(b) : this.data(b, d)),
            h
        }
        ;
        a.jqmData = function(b, d, h) {
            var e;
            return "undefined" != typeof d && (e = a.data(b, d ? a.mobile.nsNormalize(d) : d, h)),
            e
        }
        ;
        a.fn.jqmRemoveData = function(b) {
            return this.removeData(a.mobile.nsNormalize(b))
        }
        ;
        a.jqmRemoveData = function(b, d) {
            return a.removeData(b, a.mobile.nsNormalize(d))
        }
        ;
        a.find = function(d, h, e, f) {
            return d.indexOf(":jqmData") > -1 && (d = d.replace(l, "[data-" + (a.mobile.ns || "") + "$1]")),
            b.call(this, d, h, e, f)
        }
        ;
        a.extend(a.find, b)
    }
    )(j, this);
    (function(a, f) {
        function e(b, h) {
            var e, f, 
            g, k = b.nodeName.toLowerCase();
            return "area" === k ? (e = b.parentNode,
            f = e.name,
            b.href && f && "map" === e.nodeName.toLowerCase() ? (g = a("img[usemap=#" + f + "]")[0],
            !!g && d(g)) : !1) : (/input|select|textarea|button|object/.test(k) ? !b.disabled : "a" === k ? b.href || h : h) && d(b)
        }
        function d(b) {
            return a.expr.filters.visible(b) && !a(b).parents().addBack().filter(function() {
                return "hidden" === a.css(this, "visibility")
            }
            ).length
        }
        var b = 0
          , h = /^ui-id-\d+$/;
        a.ui = a.ui || {};
        a.extend(a.ui, {
            version: "c0ab71056b936627e8a7821f03c044aec6280a40",
            keyCode: {
                BACKSPACE: 8,
                COMMA: 188,
                DELETE: 46,
                DOWN: 40,
                END: 35,
                ENTER: 13,
                ESCAPE: 27,
                HOME: 36,
                LEFT: 37,
                PAGE_DOWN: 34,
                PAGE_UP: 33,
                PERIOD: 190,
                RIGHT: 39,
                SPACE: 32,
                TAB: 9,
                UP: 38
            }
        });
        a.fn.extend({
            focus: function(b) {
                return function(d, h) {
                    return "number" == typeof d ? this.each(function() {
                        var b = this;
                        setTimeout(function() {
                            a(b).focus();
                            h && h.call(b)
                        }
                        , d)
                    }
                    ) : b.apply(this, arguments)
                }
            }
            (a.fn.focus),
            scrollParent: function() {
                var b;
                return b = a.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function() {
                    return /(relative|absolute|fixed)/.test(a.css(this, 
                    "position")) && /(auto|scroll)/.test(a.css(this, "overflow") + a.css(this, "overflow-y") + a.css(this, "overflow-x"))
                }
                ).eq(0) : this.parents().filter(function() {
                    return /(auto|scroll)/.test(a.css(this, "overflow") + a.css(this, "overflow-y") + a.css(this, "overflow-x"))
                }
                ).eq(0),
                /fixed/.test(this.css("position")) || !b.length ? a(this[0].ownerDocument || k) : b
            },
            uniqueId: function() {
                return this.each(function() {
                    this.id || (this.id = "ui-id-" + ++b)
                }
                )
            },
            removeUniqueId: function() {
                return this.each(function() {
                    h.test(this.id) && a(this).removeAttr("id")
                }
                )
            }
        });
        a.extend(a.expr[":"], {
            data: a.expr.createPseudo ? a.expr.createPseudo(function(b) {
                return function(d) {
                    return !!a.data(d, b)
                }
            }
            ) : function(b, d, h) {
                return !!a.data(b, h[3])
            }
            ,
            focusable: function(b) {
                return e(b, !isNaN(a.attr(b, "tabindex")))
            },
            tabbable: function(b) {
                var d = a.attr(b, "tabindex")
                  , h = isNaN(d);
                return (h || d >= 0) && e(b, !h)
            }
        });
        a("<a>").outerWidth(1).jquery || a.each(["Width", "Height"], function(b, d) {
            function h(b, d, l, f) {
                return a.each(e, function() {
                    d -= parseFloat(a.css(b, "padding" + this)) || 0;
                    l && (d -= parseFloat(a.css(b, "border" + 
                    this + "Width")) || 0);
                    f && (d -= parseFloat(a.css(b, "margin" + this)) || 0)
                }
                ),
                d
            }
            var e = "Width" === d ? ["Left", "Right"] : ["Top", "Bottom"]
              , g = d.toLowerCase()
              , k = {
                innerWidth: a.fn.innerWidth,
                innerHeight: a.fn.innerHeight,
                outerWidth: a.fn.outerWidth,
                outerHeight: a.fn.outerHeight
            };
            a.fn["inner" + d] = function(b) {
                return b === f ? k["inner" + d].call(this) : this.each(function() {
                    a(this).css(g, h(this, b) + "px")
                }
                )
            }
            ;
            a.fn["outer" + d] = function(b, e) {
                return "number" != typeof b ? k["outer" + d].call(this, b) : this.each(function() {
                    a(this).css(g, h(this, b, !0, 
                    e) + "px")
                }
                )
            }
        }
        );
        a.fn.addBack || (a.fn.addBack = function(a) {
            return this.add(null  == a ? this.prevObject : this.prevObject.filter(a))
        }
        );
        a("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (a.fn.removeData = function(b) {
            return function(d) {
                return arguments.length ? b.call(this, a.camelCase(d)) : b.call(this)
            }
        }
        (a.fn.removeData));
        a.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
        a.support.selectstart = "onselectstart" in k.createElement("div");
        a.fn.extend({
            disableSelection: function() {
                return this.bind((a.support.selectstart ? 
                "selectstart" : "mousedown") + ".ui-disableSelection", function(a) {
                    a.preventDefault()
                }
                )
            },
            enableSelection: function() {
                return this.unbind(".ui-disableSelection")
            },
            zIndex: function(b) {
                if (b !== f)
                    return this.css("zIndex", b);
                if (this.length) {
                    var d, h;
                    for (b = a(this[0]); b.length && b[0] !== k; ) {
                        if (d = b.css("position"),
                        ("absolute" === d || "relative" === d || "fixed" === d) && (h = parseInt(b.css("zIndex"), 10),
                        !isNaN(h) && 0 !== h))
                            return h;
                        b = b.parent()
                    }
                }
                return 0
            }
        });
        a.ui.plugin = {
            add: function(b, d, h) {
                var e;
                b = a.ui[b].prototype;
                for (e in h)
                    b.plugins[e] = 
                    b.plugins[e] || [],
                    b.plugins[e].push([d, h[e]])
            },
            call: function(a, b, d, h) {
                if ((b = a.plugins[b]) && (h || a.element[0].parentNode && 11 !== a.element[0].parentNode.nodeType))
                    for (h = 0; h < b.length; h++)
                        a.options[b[h][0]] && b[h][1].apply(a.element, d)
            }
        }
    }
    )(j);
    (function(a, f) {
        var e = function(d, b) {
            var h = d.parent()
              , e = []
              , f = h.children(":jqmData(role='header')")
              , g = d.children(":jqmData(role='header')");
            h = h.children(":jqmData(role='footer')");
            var k = d.children(":jqmData(role='footer')");
            return 0 === g.length && f.length > 0 && (e = e.concat(f.toArray())),
            0 === k.length && h.length > 0 && (e = e.concat(h.toArray())),
            a.each(e, function(d, h) {
                b -= a(h).outerHeight()
            }
            ),
            Math.max(0, b)
        }
        ;
        a.extend(a.mobile, {
            window: a(f),
            document: a(k),
            keyCode: a.ui.keyCode,
            behaviors: {},
            silentScroll: function(d) {
                "number" !== a.type(d) && (d = a.mobile.defaultHomeScroll);
                a.event.special.scrollstart.enabled = !1;
                setTimeout(function() {
                    f.scrollTo(0, d);
                    a.mobile.document.trigger("silentscroll", {
                        x: 0,
                        y: d
                    })
                }
                , 20);
                setTimeout(function() {
                    a.event.special.scrollstart.enabled = !0
                }
                , 150)
            },
            getClosestBaseUrl: function(d) {
                d = 
                a(d).closest(".ui-page").jqmData("url");
                var b = a.mobile.path.documentBase.hrefNoHash;
                return a.mobile.dynamicBaseEnabled && d && a.mobile.path.isPath(d) || (d = b),
                a.mobile.path.makeUrlAbsolute(d, b)
            },
            removeActiveLinkClass: function(d) {
                !a.mobile.activeClickedLink || a.mobile.activeClickedLink.closest("." + a.mobile.activePageClass).length && !d || a.mobile.activeClickedLink.removeClass(a.mobile.activeBtnClass);
                a.mobile.activeClickedLink = null 
            },
            getInheritedTheme: function(a, b) {
                for (var h, e, f = a[0], g = "", k = /ui-(bar|body|overlay)-([a-z])\b/; f && 
                (h = f.className || "",
                !(h && (e = k.exec(h)) && (g = e[2]))); )
                    f = f.parentNode;
                return g || b || "a"
            },
            enhanceable: function(a) {
                return this.haveParents(a, "enhance")
            },
            hijackable: function(a) {
                return this.haveParents(a, "ajax")
            },
            haveParents: function(d, b) {
                if (!a.mobile.ignoreContentEnabled)
                    return d;
                var h, e, f, g, k, j = d.length, p = a();
                for (g = 0; j > g; g++) {
                    e = d.eq(g);
                    f = !1;
                    for (h = d[g]; h; ) {
                        if (k = h.getAttribute ? h.getAttribute("data-" + a.mobile.ns + b) : "",
                        "false" === k) {
                            f = !0;
                            break
                        }
                        h = h.parentNode
                    }
                    f || (p = p.add(e))
                }
                return p
            },
            getScreenHeight: function() {
                return f.innerHeight || 
                a.mobile.window.height()
            },
            resetActivePageHeight: function(d) {
                var b = a("." + a.mobile.activePageClass)
                  , h = b.height()
                  , l = b.outerHeight(!0);
                d = e(b, "number" == typeof d ? d : a.mobile.getScreenHeight());
                b.css("min-height", "");
                b.height() < d && b.css("min-height", d - (l - h))
            },
            loading: function() {
                var d = this.loading._widget || a(a.mobile.loader.prototype.defaultHtml).loader()
                  , b = d.loader.apply(d, arguments);
                return this.loading._widget = d,
                b
            }
        });
        a.addDependents = function(d, b) {
            var h = a(d)
              , e = h.jqmData("dependents") || a();
            h.jqmData("dependents", 
            a(e).add(b))
        }
        ;
        a.fn.extend({
            removeWithDependents: function() {
                a.removeWithDependents(this)
            },
            enhanceWithin: function() {
                var d, b = {}, h = a.mobile.page.prototype.keepNativeSelector(), e = this;
                a.mobile.nojs && a.mobile.nojs(this);
                a.mobile.links && a.mobile.links(this);
                a.mobile.degradeInputsWithin && a.mobile.degradeInputsWithin(this);
                a.fn.buttonMarkup && this.find(a.fn.buttonMarkup.initSelector).not(h).jqmEnhanceable().buttonMarkup();
                a.fn.fieldcontain && this.find(":jqmData(role='fieldcontain')").not(h).jqmEnhanceable().fieldcontain();
                a.each(a.mobile.widgets, function(d, f) {
                    if (f.initSelector) {
                        var g = a.mobile.enhanceable(e.find(f.initSelector));
                        g.length > 0 && (g = g.not(h));
                        g.length > 0 && (b[f.prototype.widgetName] = g)
                    }
                }
                );
                for (d in b)
                    b[d][d]();
                return this
            },
            addDependents: function(d) {
                a.addDependents(this, d)
            },
            getEncodedText: function() {
                return a("<a>").text(this.text()).html()
            },
            jqmEnhanceable: function() {
                return a.mobile.enhanceable(this)
            },
            jqmHijackable: function() {
                return a.mobile.hijackable(this)
            }
        });
        a.removeWithDependents = function(d) {
            d = a(d);
            (d.jqmData("dependents") || 
            a()).remove();
            d.remove()
        }
        ;
        a.addDependents = function(d, b) {
            var h = a(d)
              , e = h.jqmData("dependents") || a();
            h.jqmData("dependents", a(e).add(b))
        }
        ;
        a.find.matches = function(d, b) {
            return a.find(d, null , null , b)
        }
        ;
        a.find.matchesSelector = function(d, b) {
            return a.find(b, null , null , [d]).length > 0
        }
    }
    )(j, this);
    (function(a, f) {
        var e = 0
          , d = Array.prototype.slice
          , b = a.cleanData;
        a.cleanData = function(d) {
            for (var e, f = 0; null  != (e = d[f]); f++)
                try {
                    a(e).triggerHandler("remove")
                } catch (g) {}
            b(d)
        }
        ;
        a.widget = function(b, d, e) {
            var f, g, k, j, s = {}, r = b.split(".")[0];
            return b = b.split(".")[1],
            f = r + "-" + b,
            e || (e = d,
            d = a.Widget),
            a.expr[":"][f.toLowerCase()] = function(b) {
                return !!a.data(b, f)
            }
            ,
            a[r] = a[r] || {},
            g = a[r][b],
            k = a[r][b] = function(a, b) {
                return this._createWidget ? void (arguments.length && this._createWidget(a, b)) : new k(a,b)
            }
            ,
            a.extend(k, g, {
                version: e.version,
                _proto: a.extend({}, e),
                _childConstructors: []
            }),
            j = new d,
            j.options = a.widget.extend({}, j.options),
            a.each(e, function(b, h) {
                return a.isFunction(h) ? void (s[b] = function() {
                    var a = function() {
                        return d.prototype[b].apply(this, arguments)
                    }
                      , 
                    e = function(a) {
                        return d.prototype[b].apply(this, a)
                    }
                    ;
                    return function() {
                        var b, d = this._super, l = this._superApply;
                        return this._super = a,
                        this._superApply = e,
                        b = h.apply(this, arguments),
                        this._super = d,
                        this._superApply = l,
                        b
                    }
                }
                ()) : void (s[b] = h)
            }
            ),
            k.prototype = a.widget.extend(j, {
                widgetEventPrefix: g ? j.widgetEventPrefix || b : b
            }, s, {
                constructor: k,
                namespace: r,
                widgetName: b,
                widgetFullName: f
            }),
            g ? (a.each(g._childConstructors, function(b, d) {
                var h = d.prototype;
                a.widget(h.namespace + "." + h.widgetName, k, d._proto)
            }
            ),
            delete g._childConstructors) : 
            d._childConstructors.push(k),
            a.widget.bridge(b, k),
            k
        }
        ;
        a.widget.extend = function(b) {
            for (var e, g, k = d.call(arguments, 1), j = 0, q = k.length; q > j; j++)
                for (e in k[j])
                    g = k[j][e],
                    k[j].hasOwnProperty(e) && g !== f && (b[e] = a.isPlainObject(g) ? a.isPlainObject(b[e]) ? a.widget.extend({}, b[e], g) : a.widget.extend({}, g) : g);
            return b
        }
        ;
        a.widget.bridge = function(b, e) {
            var g = e.prototype.widgetFullName || b;
            a.fn[b] = function(k) {
                var j = "string" == typeof k
                  , q = d.call(arguments, 1)
                  , p = this;
                return k = !j && q.length ? a.widget.extend.apply(null , [k].concat(q)) : 
                k,
                this.each(j ? function() {
                    var d, e = a.data(this, g);
                    return "instance" === k ? (p = e,
                    !1) : e ? a.isFunction(e[k]) && "_" !== k.charAt(0) ? (d = e[k].apply(e, q),
                    d !== e && d !== f ? (p = d && d.jquery ? p.pushStack(d.get()) : d,
                    !1) : void 0) : a.error("no such method '" + k + "' for " + b + " widget instance") : a.error("cannot call methods on " + b + " prior to initialization; attempted to call method '" + k + "'")
                }
                 : function() {
                    var b = a.data(this, g);
                    b ? b.option(k || {})._init() : a.data(this, g, new e(k,this))
                }
                ),
                p
            }
        }
        ;
        a.Widget = function() {}
        ;
        a.Widget._childConstructors = 
        [];
        a.Widget.prototype = {
            widgetName: "widget",
            widgetEventPrefix: "",
            defaultElement: "<div>",
            options: {
                disabled: !1,
                create: null 
            },
            _createWidget: function(b, d) {
                d = a(d || this.defaultElement || this)[0];
                this.element = a(d);
                this.uuid = e++;
                this.eventNamespace = "." + this.widgetName + this.uuid;
                this.options = a.widget.extend({}, this.options, this._getCreateOptions(), b);
                this.bindings = a();
                this.hoverable = a();
                this.focusable = a();
                d !== this && (a.data(d, this.widgetFullName, this),
                this._on(!0, this.element, {
                    remove: function(a) {
                        a.target === d && 
                        this.destroy()
                    }
                }),
                this.document = a(d.style ? d.ownerDocument : d.document || d),
                this.window = a(this.document[0].defaultView || this.document[0].parentWindow));
                this._create();
                this._trigger("create", null , this._getCreateEventData());
                this._init()
            },
            _getCreateOptions: a.noop,
            _getCreateEventData: a.noop,
            _create: a.noop,
            _init: a.noop,
            destroy: function() {
                this._destroy();
                this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(a.camelCase(this.widgetFullName));
                this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + 
                "-disabled ui-state-disabled");
                this.bindings.unbind(this.eventNamespace);
                this.hoverable.removeClass("ui-state-hover");
                this.focusable.removeClass("ui-state-focus")
            },
            _destroy: a.noop,
            widget: function() {
                return this.element
            },
            option: function(b, d) {
                var e, g, k, j = b;
                if (0 === arguments.length)
                    return a.widget.extend({}, this.options);
                if ("string" == typeof b)
                    if (j = {},
                    e = b.split("."),
                    b = e.shift(),
                    e.length) {
                        g = j[b] = a.widget.extend({}, this.options[b]);
                        for (k = 0; k < e.length - 1; k++)
                            g[e[k]] = g[e[k]] || {},
                            g = g[e[k]];
                        if (b = e.pop(),
                        d === f)
                            return g[b] === 
                            f ? null  : g[b];
                        g[b] = d
                    } else {
                        if (d === f)
                            return this.options[b] === f ? null  : this.options[b];
                        j[b] = d
                    }
                return this._setOptions(j),
                this
            },
            _setOptions: function(a) {
                for (var b in a)
                    this._setOption(b, a[b]);
                return this
            },
            _setOption: function(a, b) {
                return this.options[a] = b,
                "disabled" === a && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!b),
                this.hoverable.removeClass("ui-state-hover"),
                this.focusable.removeClass("ui-state-focus")),
                this
            },
            enable: function() {
                return this._setOptions({
                    disabled: !1
                })
            },
            disable: function() {
                return this._setOptions({
                    disabled: !0
                })
            },
            _on: function(b, d, e) {
                var f, g = this;
                "boolean" != typeof b && (e = d,
                d = b,
                b = !1);
                e ? (d = f = a(d),
                this.bindings = this.bindings.add(d)) : (e = d,
                d = this.element,
                f = this.widget());
                a.each(e, function(e, n) {
                    function k() {
                        return b || g.options.disabled !== !0 && !a(this).hasClass("ui-state-disabled") ? ("string" == typeof n ? g[n] : n).apply(g, arguments) : void 0
                    }
                    "string" != typeof n && (k.guid = n.guid = n.guid || k.guid || a.guid++);
                    var j = e.match(/^(\w+)\s*(.*)$/)
                      , t = j[1] + g.eventNamespace;
                    (j = j[2]) ? f.delegate(j, t, k) : d.bind(t, k)
                }
                )
            },
            _off: function(a, b) {
                b = (b || 
                "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace;
                a.unbind(b).undelegate(b)
            },
            _delay: function(a, b) {
                var d = this;
                return setTimeout(function() {
                    return ("string" == typeof a ? d[a] : a).apply(d, arguments)
                }
                , b || 0)
            },
            _hoverable: function(b) {
                this.hoverable = this.hoverable.add(b);
                this._on(b, {
                    mouseenter: function(b) {
                        a(b.currentTarget).addClass("ui-state-hover")
                    },
                    mouseleave: function(b) {
                        a(b.currentTarget).removeClass("ui-state-hover")
                    }
                })
            },
            _focusable: function(b) {
                this.focusable = this.focusable.add(b);
                this._on(b, 
                {
                    focusin: function(b) {
                        a(b.currentTarget).addClass("ui-state-focus")
                    },
                    focusout: function(b) {
                        a(b.currentTarget).removeClass("ui-state-focus")
                    }
                })
            },
            _trigger: function(b, d, e) {
                var f, g = this.options[b];
                if (e = e || {},
                d = a.Event(d),
                d.type = (b === this.widgetEventPrefix ? b : this.widgetEventPrefix + b).toLowerCase(),
                d.target = this.element[0],
                b = d.originalEvent)
                    for (f in b)
                        f in d || (d[f] = b[f]);
                return this.element.trigger(d, e),
                !(a.isFunction(g) && g.apply(this.element[0], [d].concat(e)) === !1 || d.isDefaultPrevented())
            }
        };
        a.each({
            show: "fadeIn",
            hide: "fadeOut"
        }, function(b, d) {
            a.Widget.prototype["_" + b] = function(e, f, g) {
                "string" == typeof f && (f = {
                    effect: f
                });
                var k, j = f ? f === !0 || "number" == typeof f ? d : f.effect || d : b;
                f = f || {};
                "number" == typeof f && (f = {
                    duration: f
                });
                k = !a.isEmptyObject(f);
                f.complete = g;
                f.delay && e.delay(f.delay);
                k && a.effects && a.effects.effect[j] ? e[b](f) : j !== b && e[j] ? e[j](f.duration, f.easing, g) : e.queue(function(d) {
                    a(this)[b]();
                    g && g.call(e[0]);
                    d()
                }
                )
            }
        }
        )
    }
    )(j);
    (function(a) {
        var f = /[A-Z]/g
          , e = function(a) {
            return "-" + a.toLowerCase()
        }
        ;
        a.extend(a.Widget.prototype, 
        {
            _getCreateOptions: function() {
                var d, b, h = this.element[0], l = {};
                if (!a.mobile.getAttribute(h, "defaults"))
                    for (d in this.options)
                        b = a.mobile.getAttribute(h, d.replace(f, e)),
                        null  != b && (l[d] = b);
                return l
            }
        });
        a.mobile.widget = a.Widget
    }
    )(j);
    (function(a) {
        var f = a("html");
        a.widget("mobile.loader", {
            options: {
                theme: "a",
                textVisible: !1,
                html: "",
                text: "loading"
            },
            defaultHtml: "<div class='ui-loader'><span class='ui-icon-loading'></span><h1></h1></div>",
            fakeFixLoader: function() {
                var e = a("." + a.mobile.activeBtnClass).first();
                this.element.css({
                    top: a.support.scrollTop && 
                    this.window.scrollTop() + this.window.height() / 2 || e.length && e.offset().top || 100
                })
            },
            checkLoaderPosition: function() {
                var e = this.element.offset()
                  , d = this.window.scrollTop()
                  , b = a.mobile.getScreenHeight();
                (e.top < d || e.top - d > b) && (this.element.addClass("ui-loader-fakefix"),
                this.fakeFixLoader(),
                this.window.unbind("scroll", this.checkLoaderPosition).bind("scroll", a.proxy(this.fakeFixLoader, this)))
            },
            resetHtml: function() {
                this.element.html(a(this.defaultHtml).html())
            },
            show: function(e, d, b) {
                var h, l;
                this.resetHtml();
                "object" === 
                a.type(e) ? (l = a.extend({}, this.options, e),
                e = l.theme) : (l = this.options,
                e = e || l.theme);
                h = d || (l.text === !1 ? "" : l.text);
                f.addClass("ui-loading");
                this.element.attr("class", "ui-loader ui-corner-all ui-body-" + e + " ui-loader-" + (l.textVisible || d || e.text ? "verbose" : "default") + (l.textonly || b ? " ui-loader-textonly" : ""));
                l.html ? this.element.html(l.html) : this.element.find("h1").text(h);
                this.element.appendTo(a.mobile.pageContainer);
                this.checkLoaderPosition();
                this.window.bind("scroll", a.proxy(this.checkLoaderPosition, this))
            },
            hide: function() {
                f.removeClass("ui-loading");
                this.options.text && this.element.removeClass("ui-loader-fakefix");
                a.mobile.window.unbind("scroll", this.fakeFixLoader);
                a.mobile.window.unbind("scroll", this.checkLoaderPosition)
            }
        })
    }
    )(j, this);
    (function(a, f, e) {
        function d(a) {
            return a = a || location.href,
            "#" + a.replace(/^[^#]*#?(.*)$/, "$1")
        }
        var b, h = "hashchange", l = a.event.special, g = k.documentMode, j = "on" + h in f && (g === e || g > 7);
        a.fn[h] = function(a) {
            return a ? this.bind(h, a) : this.trigger(h)
        }
        ;
        a.fn[h].delay = 50;
        l[h] = a.extend(l[h], 
        {
            setup: function() {
                return j ? !1 : void a(b.start)
            },
            teardown: function() {
                return j ? !1 : void a(b.stop)
            }
        });
        b = function() {
            function b() {
                var e = d()
                  , g = w(n);
                e !== n ? (t(n = e, g),
                a(f).trigger(h)) : g !== n && (location.href = location.href.replace(/#.*/, "") + g);
                l = setTimeout(b, a.fn[h].delay)
            }
            var l, g = {}, n = d(), r = function(a) {
                return a
            }
            , t = r, w = r;
            return g.start = function() {
                l || b()
            }
            ,
            g.stop = function() {
                l && clearTimeout(l);
                l = e
            }
            ,
            f.attachEvent && !f.addEventListener && !j && function() {
                var e, l;
                g.start = function() {
                    e || (l = a.fn[h].src,
                    l = l && l + d(),
                    e = a('<iframe tabindex="-1" title="empty"/>').hide().one("load", 
                    function() {
                        l || t(d());
                        b()
                    }
                    ).attr("src", l || "javascript:0").insertAfter("body")[0].contentWindow,
                    k.onpropertychange = function() {
                        try {
                            "title" === event.propertyName && (e.document.title = k.title)
                        } catch (a) {}
                    }
                    )
                }
                ;
                g.stop = r;
                w = function() {
                    return d(e.location.href)
                }
                ;
                t = function(b, d) {
                    var l = e.document
                      , f = a.fn[h].domain;
                    b !== d && (l.title = k.title,
                    l.open(),
                    f && l.write('<script>document.domain="' + f + '"<\/script>'),
                    l.close(),
                    e.location.hash = b)
                }
            }
            (),
            g
        }
        ()
    }
    )(j, this);
    (function(a) {
        g.matchMedia = g.matchMedia || function(a) {
            var e, d = a.documentElement, 
            b = d.firstElementChild || d.firstChild, h = a.createElement("body"), l = a.createElement("div");
            return l.id = "mq-test-1",
            l.style.cssText = "position:absolute;top:-100em",
            h.style.background = "none",
            h.appendChild(l),
            function(a) {
                return l.innerHTML = '&shy;<style media="' + a + '"> #mq-test-1 { width: 42px; }</style>',
                d.insertBefore(h, b),
                e = 42 === l.offsetWidth,
                d.removeChild(h),
                {
                    matches: e,
                    media: a
                }
            }
        }
        (k);
        a.mobile.media = function(a) {
            return g.matchMedia(a).matches
        }
    }
    )(j);
    (function(a) {
        var f = {
            touch: "ontouchend" in k
        };
        a.mobile.support = 
        a.mobile.support || {};
        a.extend(a.support, f);
        a.extend(a.mobile.support, f)
    }
    )(j);
    j.extend(j.support, {
        orientation: "orientation" in g && "onorientationchange" in g
    });
    (function(a, f) {
        function e(a) {
            var b, d = a.charAt(0).toUpperCase() + a.substr(1);
            a = (a + " " + l.join(d + " ") + d).split(" ");
            for (b in a)
                if (h[a[b]] !== f)
                    return !0
        }
        var d, b = a("<body>").prependTo("html"), h = b[0].style, l = ["Webkit", "Moz", "O"];
        d = "palmGetResource" in g;
        var n = g.operamini && "[object OperaMini]" === {}.toString.call(g.operamini)
          , j = g.blackberry && !e("-webkit-transform");
        a.extend(a.mobile, {
            browser: {}
        });
        a.mobile.browser.oldIE = function() {
            var a = 3
              , b = k.createElement("div")
              , d = b.all || [];
            do
                b.innerHTML = "<\!--[if gt IE " + ++a + "]><br><![endif]--\>";
            while (d[0]);return a > 4 ? a : !a
        }
        ();
        a.extend(a.support, {
            pushState: "pushState" in history && "replaceState" in history && !(g.navigator.userAgent.indexOf("Firefox") >= 0 && g.top !== g) && -1 === g.navigator.userAgent.search(/CriOS/),
            mediaquery: a.mobile.media("only all"),
            cssPseudoElement: !!e("content"),
            touchOverflow: !!e("overflowScrolling"),
            cssTransform3d: function() {
                var d, 
                h, e, n = a.mobile.media("(-" + l.join("-transform-3d),(-") + "-transform-3d),(transform-3d)");
                if (n)
                    return !!n;
                d = k.createElement("div");
                h = {
                    MozTransform: "-moz-transform",
                    transform: "transform"
                };
                b.append(d);
                for (e in h)
                    d.style[e] !== f && (d.style[e] = "translate3d( 100px, 1px, 1px )",
                    n = g.getComputedStyle(d).getPropertyValue(h[e]));
                return !!n && "none" !== n
            }
            (),
            boxShadow: !!e("boxShadow") && !j,
            fixedPosition: function() {
                var a = navigator.userAgent
                  , b = navigator.platform
                  , d = a.match(/AppleWebKit\/([0-9]+)/);
                d = !!d && d[1];
                var h = a.match(/Fennec\/([0-9]+)/);
                h = !!h && h[1];
                var e = a.match(/Opera Mobi\/([0-9]+)/)
                  , l = !!e && e[1];
                return (b.indexOf("iPhone") > -1 || b.indexOf("iPad") > -1 || b.indexOf("iPod") > -1) && d && 534 > d || g.operamini && "[object OperaMini]" === {}.toString.call(g.operamini) || e && 7458 > l || a.indexOf("Android") > -1 && d && 533 > d || h && 6 > h || "palmGetResource" in g && d && 534 > d || a.indexOf("MeeGo") > -1 && a.indexOf("NokiaBrowser/8.5.0") > -1 ? !1 : !0
            }
            (),
            scrollTop: ("pageXOffset" in g || "scrollTop" in k.documentElement || "scrollTop" in b[0]) && !d && !n,
            dynamicBaseTag: function() {
                var d, h, e = location.protocol + 
                "//" + location.host + location.pathname + "ui-dir/", l = a("head base"), f = null , g = "";
                return l.length ? g = l.attr("href") : l = f = a("<base>", {
                    href: e
                }).appendTo("head"),
                d = a("<a href='testurl' />").prependTo(b),
                h = d[0].href,
                l[0].href = g || location.pathname,
                f && f.remove(),
                0 === h.indexOf(e)
            }
            (),
            cssPointerEvents: function() {
                var a, b = k.createElement("x"), d = k.documentElement, h = g.getComputedStyle;
                return "pointerEvents" in b.style ? (b.style.pointerEvents = "auto",
                b.style.pointerEvents = "x",
                d.appendChild(b),
                a = h && "auto" === h(b, "").pointerEvents,
                d.removeChild(b),
                !!a) : !1
            }
            (),
            boundingRect: "undefined" != typeof k.createElement("div").getBoundingClientRect,
            inlineSVG: function() {
                var b = !(!g.document.createElementNS || !g.document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect || g.opera && -1 === navigator.userAgent.indexOf("Chrome"))
                  , d = function(d) {
                    d && b || a("html").addClass("ui-nosvg")
                }
                  , h = new g.Image;
                h.onerror = function() {
                    d(!1)
                }
                ;
                h.onload = function() {
                    d(1 === h.width && 1 === h.height)
                }
                ;
                h.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="
            }
        });
        b.remove();
        d = function() {
            var a = g.navigator.userAgent;
            return a.indexOf("Nokia") > -1 && (a.indexOf("Symbian/3") > -1 || a.indexOf("Series60/5") > -1) && a.indexOf("AppleWebKit") > -1 && a.match(/(BrowserNG|NokiaBrowser)\/7\.[0-3]/)
        }
        ();
        a.mobile.gradeA = function() {
            return (a.support.mediaquery && a.support.cssPseudoElement || a.mobile.browser.oldIE && a.mobile.browser.oldIE >= 8) && (a.support.boundingRect || null  !== a.fn.jquery.match(/1\.[0-7+]\.[0-9+]?/))
        }
        ;
        a.mobile.ajaxBlacklist = g.blackberry && !g.WebKitPoint || n || d;
        d && a(function() {
            a("head link[rel='stylesheet']").attr("rel", 
            "alternate stylesheet").attr("rel", "stylesheet")
        }
        );
        a.support.boxShadow || a("html").addClass("ui-noboxshadow")
    }
    )(j);
    (function(a, f) {
        var e, d = a.mobile.window, b = function() {}
        ;
        a.event.special.beforenavigate = {
            setup: function() {
                d.on("navigate", b)
            },
            teardown: function() {
                d.off("navigate", b)
            }
        };
        a.event.special.navigate = e = {
            bound: !1,
            pushStateEnabled: !0,
            originalEventName: f,
            isPushStateEnabled: function() {
                return a.support.pushState && a.mobile.pushStateEnabled === !0 && this.isHashChangeEnabled()
            },
            isHashChangeEnabled: function() {
                return a.mobile.hashListeningEnabled === 
                !0
            },
            popstate: function(b) {
                var e = new a.Event("navigate")
                  , f = new a.Event("beforenavigate")
                  , g = b.originalEvent.state || {};
                f.originalEvent = b;
                d.trigger(f);
                f.isDefaultPrevented() || (b.historyState && a.extend(g, b.historyState),
                e.originalEvent = b,
                setTimeout(function() {
                    d.trigger(e, {
                        state: g
                    })
                }
                , 0))
            },
            hashchange: function(b) {
                var e = new a.Event("navigate")
                  , f = new a.Event("beforenavigate");
                f.originalEvent = b;
                d.trigger(f);
                f.isDefaultPrevented() || (e.originalEvent = b,
                d.trigger(e, {
                    state: b.hashchangeState || {}
                }))
            },
            setup: function() {
                e.bound || 
                (e.bound = !0,
                e.isPushStateEnabled() ? (e.originalEventName = "popstate",
                d.bind("popstate.navigate", e.popstate)) : e.isHashChangeEnabled() && (e.originalEventName = "hashchange",
                d.bind("hashchange.navigate", e.hashchange)))
            }
        }
    }
    )(j);
    (function(a, f) {
        var e, d;
        a.mobile.path = e = {
            uiStateKey: "&ui-state",
            urlParseRE: /^\s*(((([^:\/#\?]+:)?(?:(\/\/)((?:(([^:@\/#\?]+)(?:\:([^:@\/#\?]+))?)@)?(([^:\/#\?\]\[]+|\[[^\/\]@#?]+\])(?:\:([0-9]+))?))?)?)?((\/?(?:[^\/\?#]+\/+)*)([^\?#]*)))?(\?[^#]+)?)(#.*)?/,
            getLocation: function(a) {
                var d = 
                this.parseUrl(a || location.href);
                a = a ? d : location;
                var e = d.hash;
                return e = "#" === e ? "" : e,
                a.protocol + d.doubleSlash + a.host + ("" !== a.protocol && "/" !== a.pathname.substring(0, 1) ? "/" : "") + a.pathname + a.search + e
            },
            getDocumentUrl: function(b) {
                return b ? a.extend({}, e.documentUrl) : e.documentUrl.href
            },
            parseLocation: function() {
                return this.parseUrl(this.getLocation())
            },
            parseUrl: function(b) {
                if ("object" === a.type(b))
                    return b;
                b = e.urlParseRE.exec(b || "") || [];
                return {
                    href: b[0] || "",
                    hrefNoHash: b[1] || "",
                    hrefNoSearch: b[2] || "",
                    domain: b[3] || 
                    "",
                    protocol: b[4] || "",
                    doubleSlash: b[5] || "",
                    authority: b[6] || "",
                    username: b[8] || "",
                    password: b[9] || "",
                    host: b[10] || "",
                    hostname: b[11] || "",
                    port: b[12] || "",
                    pathname: b[13] || "",
                    directory: b[14] || "",
                    filename: b[15] || "",
                    search: b[16] || "",
                    hash: b[17] || ""
                }
            },
            makePathAbsolute: function(a, d) {
                var e, f, g, k;
                if (a && "/" === a.charAt(0))
                    return a;
                a = a || "";
                e = (d = d ? d.replace(/^\/|(\/[^\/]*|[^\/]+)$/g, "") : "") ? d.split("/") : [];
                f = a.split("/");
                for (g = 0; g < f.length; g++)
                    switch (k = f[g]) {
                    case ".":
                        break;
                    case "..":
                        e.length && e.pop();
                        break;
                    default:
                        e.push(k)
                    }
                return "/" + 
                e.join("/")
            },
            isSameDomain: function(a, d) {
                return e.parseUrl(a).domain.toLowerCase() === e.parseUrl(d).domain.toLowerCase()
            },
            isRelativeUrl: function(a) {
                return "" === e.parseUrl(a).protocol
            },
            isAbsoluteUrl: function(a) {
                return "" !== e.parseUrl(a).protocol
            },
            makeUrlAbsolute: function(a, d) {
                if (!e.isRelativeUrl(a))
                    return a;
                d === f && (d = this.documentBase);
                var l = e.parseUrl(a)
                  , g = e.parseUrl(d)
                  , k = l.protocol || g.protocol
                  , j = l.protocol ? l.doubleSlash : l.doubleSlash || g.doubleSlash
                  , q = l.authority || g.authority
                  , p = "" !== l.pathname
                  , s = e.makePathAbsolute(l.pathname || 
                g.filename, g.pathname);
                return k + j + q + s + (l.search || !p && g.search || "") + l.hash
            },
            addSearchParams: function(b, d) {
                var l = e.parseUrl(b)
                  , f = "object" == typeof d ? a.param(d) : d
                  , g = l.search || "?";
                return l.hrefNoSearch + g + ("?" !== g.charAt(g.length - 1) ? "&" : "") + f + (l.hash || "")
            },
            convertUrlToDataUrl: function(a) {
                var d = a;
                a = e.parseUrl(a);
                return e.isEmbeddedPage(a) ? d = a.hash.split("&ui-state=dialog")[0].replace(/^#/, "").replace(/\?.*$/, "") : e.isSameDomain(a, this.documentBase) && (d = a.hrefNoHash.replace(this.documentBase.domain, "").split("&ui-state=dialog")[0]),
                g.decodeURIComponent(d)
            },
            get: function(a) {
                return a === f && (a = e.parseLocation().hash),
                e.stripHash(a).replace(/[^\/]*\.[^\/*]+$/, "")
            },
            set: function(a) {
                location.hash = a
            },
            isPath: function(a) {
                return /\//.test(a)
            },
            clean: function(a) {
                return a.replace(this.documentBase.domain, "")
            },
            stripHash: function(a) {
                return a.replace(/^#/, "")
            },
            stripQueryParams: function(a) {
                return a.replace(/\?.*$/, "")
            },
            cleanHash: function(a) {
                return e.stripHash(a.replace(/\?.*$/, "").replace("&ui-state=dialog", ""))
            },
            isHashValid: function(a) {
                return /^#[^#]+$/.test(a)
            },
            isExternal: function(a) {
                a = e.parseUrl(a);
                return !(!a.protocol || a.domain.toLowerCase() === this.documentUrl.domain.toLowerCase())
            },
            hasProtocol: function(a) {
                return /^(:?\w+:)/.test(a)
            },
            isEmbeddedPage: function(a) {
                a = e.parseUrl(a);
                return "" !== a.protocol ? !this.isPath(a.hash) && a.hash && (a.hrefNoHash === this.documentUrl.hrefNoHash || this.documentBaseDiffers && a.hrefNoHash === this.documentBase.hrefNoHash) : /^#/.test(a.href)
            },
            squash: function(a, d) {
                var l, f, g, k, j, p = this.isPath(a), s = this.parseUrl(a), r = s.hash, t = "";
                return d || 
                (p ? d = e.getLocation() : (j = e.getDocumentUrl(!0),
                d = e.isPath(j.hash) ? e.squash(j.href) : j.href)),
                f = p ? e.stripHash(a) : a,
                f = e.isPath(s.hash) ? e.stripHash(s.hash) : f,
                k = f.indexOf(this.uiStateKey),
                k > -1 && (t = f.slice(k),
                f = f.slice(0, k)),
                l = e.makeUrlAbsolute(f, d),
                g = this.parseUrl(l).search,
                p ? ((e.isPath(r) || 0 === r.replace("#", "").indexOf(this.uiStateKey)) && (r = ""),
                t && -1 === r.indexOf(this.uiStateKey) && (r += t),
                -1 === r.indexOf("#") && "" !== r && (r = "#" + r),
                l = e.parseUrl(l),
                l = l.protocol + l.doubleSlash + l.host + l.pathname + g + r) : l += l.indexOf("#") > 
                -1 ? t : "#" + t,
                l
            },
            isPreservableHash: function(a) {
                return 0 === a.replace("#", "").indexOf(this.uiStateKey)
            },
            hashToSelector: function(a) {
                var d = "#" === a.substring(0, 1);
                return d && (a = a.substring(1)),
                (d ? "#" : "") + a.replace(/([!"#$%&'()*+,./:;<=>?@[\]^`{|}~])/g, "\\$1")
            },
            getFilePath: function(a) {
                return a && a.split("&ui-state=dialog")[0]
            },
            isFirstPageUrl: function(b) {
                b = e.parseUrl(e.makeUrlAbsolute(b, this.documentBase));
                var d = a.mobile.firstPage;
                d = d && d[0] ? d[0].id : f;
                return (b.hrefNoHash === this.documentUrl.hrefNoHash || this.documentBaseDiffers && 
                b.hrefNoHash === this.documentBase.hrefNoHash) && (!b.hash || "#" === b.hash || d && b.hash.replace(/^#/, "") === d)
            },
            isPermittedCrossDomainRequest: function(b, d) {
                return a.mobile.allowCrossDomainPages && ("file:" === b.protocol || "content:" === b.protocol) && -1 !== d.search(/^https?:/)
            }
        };
        e.documentUrl = e.parseLocation();
        d = a("head").find("base");
        e.documentBase = d.length ? e.parseUrl(e.makeUrlAbsolute(d.attr("href"), e.documentUrl.href)) : e.documentUrl;
        e.documentBaseDiffers = e.documentUrl.hrefNoHash !== e.documentBase.hrefNoHash;
        e.getDocumentBase = 
        function(b) {
            return b ? a.extend({}, e.documentBase) : e.documentBase.href
        }
        ;
        a.extend(a.mobile, {
            getDocumentUrl: e.getDocumentUrl,
            getDocumentBase: e.getDocumentBase
        })
    }
    )(j);
    (function(a, f) {
        a.mobile.History = function(a, d) {
            this.stack = a || [];
            this.activeIndex = d || 0
        }
        ;
        a.extend(a.mobile.History.prototype, {
            getActive: function() {
                return this.stack[this.activeIndex]
            },
            getLast: function() {
                return this.stack[this.previousIndex]
            },
            getNext: function() {
                return this.stack[this.activeIndex + 1]
            },
            getPrev: function() {
                return this.stack[this.activeIndex - 
                1]
            },
            add: function(a, d) {
                d = d || {};
                this.getNext() && this.clearForward();
                d.hash && -1 === d.hash.indexOf("#") && (d.hash = "#" + d.hash);
                d.url = a;
                this.stack.push(d);
                this.activeIndex = this.stack.length - 1
            },
            clearForward: function() {
                this.stack = this.stack.slice(0, this.activeIndex + 1)
            },
            find: function(a, d, b) {
                d = d || this.stack;
                var h, l, f, g = d.length;
                for (l = 0; g > l; l++)
                    if (h = d[l],
                    (decodeURIComponent(a) === decodeURIComponent(h.url) || decodeURIComponent(a) === decodeURIComponent(h.hash)) && (f = l,
                    b))
                        break;
                return f
            },
            closest: function(a) {
                var d, b = 
                this.activeIndex;
                return d = this.find(a, this.stack.slice(0, b)),
                d === f && (d = this.find(a, this.stack.slice(b), !0),
                d = d === f ? d : d + b),
                d
            },
            direct: function(e) {
                var d = this.closest(e.url)
                  , b = this.activeIndex;
                d !== f && (this.activeIndex = d,
                this.previousIndex = b);
                b > d ? (e.present || e.back || a.noop)(this.getActive(), "back") : d > b ? (e.present || e.forward || a.noop)(this.getActive(), "forward") : d === f && e.missing && e.missing(this.getActive())
            }
        })
    }
    )(j);
    (function(a) {
        var f = a.mobile.path
          , e = location.href;
        a.mobile.Navigator = function(d) {
            this.history = 
            d;
            this.ignoreInitialHashChange = !0;
            a.mobile.window.bind({
                "popstate.history": a.proxy(this.popstate, this),
                "hashchange.history": a.proxy(this.hashchange, this)
            })
        }
        ;
        a.extend(a.mobile.Navigator.prototype, {
            squash: function(d, b) {
                var e, l, n = f.isPath(d) ? f.stripHash(d) : d;
                return l = f.squash(d),
                e = a.extend({
                    hash: n,
                    url: l
                }, b),
                g.history.replaceState(e, e.title || k.title, l),
                e
            },
            hash: function(a, b) {
                var e, l, g, k;
                return e = f.parseUrl(a),
                l = f.parseLocation(),
                l.pathname + l.search === e.pathname + e.search ? g = e.hash ? e.hash : e.pathname + e.search : 
                f.isPath(a) ? (k = f.parseUrl(b),
                g = k.pathname + k.search + (f.isPreservableHash(k.hash) ? k.hash.replace("#", "") : "")) : g = a,
                g
            },
            go: function(d, b, e) {
                var l, n, j, o = a.event.special.navigate.isPushStateEnabled();
                l = f.squash(d);
                n = this.hash(d, l);
                e && n !== f.stripHash(f.parseLocation().hash) && (this.preventNextHashChange = e);
                this.preventHashAssignPopState = !0;
                g.location.hash = n;
                this.preventHashAssignPopState = !1;
                b = a.extend({
                    url: l,
                    hash: n,
                    title: k.title
                }, b);
                o && (j = new a.Event("popstate"),
                j.originalEvent = {
                    type: "popstate",
                    state: null 
                },
                this.squash(d, b),
                e || (this.ignorePopState = !0,
                a.mobile.window.trigger(j)));
                this.history.add(b.url, b)
            },
            popstate: function(d) {
                var b, h;
                if (a.event.special.navigate.isPushStateEnabled())
                    return this.preventHashAssignPopState ? (this.preventHashAssignPopState = !1,
                    void d.stopImmediatePropagation()) : this.ignorePopState ? void (this.ignorePopState = !1) : !d.originalEvent.state && 1 === this.history.stack.length && this.ignoreInitialHashChange && (this.ignoreInitialHashChange = !1,
                    location.href === e) ? void d.preventDefault() : (b = f.parseLocation().hash,
                    !d.originalEvent.state && b ? (h = this.squash(b),
                    this.history.add(h.url, h),
                    void (d.historyState = h)) : void this.history.direct({
                        url: (d.originalEvent.state || {}).url || b,
                        present: function(b, e) {
                            d.historyState = a.extend({}, b);
                            d.historyState.direction = e
                        }
                    }))
            },
            hashchange: function(d) {
                var b, e;
                if (a.event.special.navigate.isHashChangeEnabled() && !a.event.special.navigate.isPushStateEnabled()) {
                    if (this.preventNextHashChange)
                        return this.preventNextHashChange = !1,
                        void d.stopImmediatePropagation();
                    b = this.history;
                    e = f.parseLocation().hash;
                    this.history.direct({
                        url: e,
                        present: function(b, e) {
                            d.hashchangeState = a.extend({}, b);
                            d.hashchangeState.direction = e
                        },
                        missing: function() {
                            b.add(e, {
                                hash: e,
                                title: k.title
                            })
                        }
                    })
                }
            }
        })
    }
    )(j);
    (function(a) {
        a.mobile.navigate = function(e, d, b) {
            a.mobile.navigate.navigator.go(e, d, b)
        }
        ;
        a.mobile.navigate.history = new a.mobile.History;
        a.mobile.navigate.navigator = new a.mobile.Navigator(a.mobile.navigate.history);
        var f = a.mobile.path.parseLocation();
        a.mobile.navigate.history.add(f.href, {
            hash: f.hash
        })
    }
    )(j);
    (function(a, f) {
        var e = 
        {
            animation: {},
            transition: {}
        }
          , d = k.createElement("a")
          , b = ["", "webkit-", "moz-", "o-"];
        a.each(["animation", "transition"], function(h, l) {
            var g = 0 === h ? l + "-name" : l;
            a.each(b, function(b, h) {
                return d.style[a.camelCase(h + g)] !== f ? (e[l].prefix = h,
                !1) : void 0
            }
            );
            e[l].duration = a.camelCase(e[l].prefix + l + "-duration");
            e[l].event = a.camelCase(e[l].prefix + l + "-end");
            "" === e[l].prefix && (e[l].event = e[l].event.toLowerCase())
        }
        );
        a.support.cssTransitions = e.transition.prefix !== f;
        a.support.cssAnimations = e.animation.prefix !== f;
        a(d).remove();
        a.fn.animationComplete = function(b, d, g) {
            var j, o, q = this, p = function() {
                clearTimeout(j);
                b.apply(this, arguments)
            }
            , s = d && "animation" !== d ? "transition" : "animation";
            return a.support.cssTransitions && "transition" === s || a.support.cssAnimations && "animation" === s ? (g === f && (a(this).context !== k && (o = 3E3 * parseFloat(a(this).css(e[s].duration))),
            (0 === o || o === f || isNaN(o)) && (o = a.fn.animationComplete.defaultDuration)),
            j = setTimeout(function() {
                a(q).off(e[s].event, p);
                b.apply(q)
            }
            , o),
            a(this).one(e[s].event, p)) : (setTimeout(a.proxy(b, 
            this), 0),
            a(this))
        }
        ;
        a.fn.animationComplete.defaultDuration = 1E3
    }
    )(j);
    (function(a, f, e, d) {
        function b(a) {
            for (; a && "undefined" != typeof a.originalEvent; )
                a = a.originalEvent;
            return a
        }
        function h(b) {
            for (var d, e, h = {}; b; ) {
                d = a.data(b, C);
                for (e in d)
                    d[e] && (h[e] = h.hasVirtualBinding = !0);
                b = b.parentNode
            }
            return h
        }
        function l() {
            L && (clearTimeout(L),
            L = 0);
            L = setTimeout(function() {
                aa = L = 0;
                Y.length = 0;
                ra = !1;
                V = !0
            }
            , a.vmouse.resetTimerDuration)
        }
        function g(e, h, l) {
            var f, k;
            if (!(k = l && l[e])) {
                if (l = !l)
                    a: {
                        l = h.target;
                        for (var n; l; ) {
                            if (n = a.data(l, 
                            C),
                            n && (!e || n[e]))
                                break a;
                            l = l.parentNode
                        }
                        l = null 
                    }
                k = l
            }
            if (k) {
                f = h;
                var j, o, v, p;
                n = f.type;
                if (f = a.Event(f),
                f.type = e,
                j = f.originalEvent,
                l = a.event.props,
                n.search(/^(mouse|click)/) > -1 && (l = N),
                j)
                    for (k = l.length; k; )
                        e = l[--k],
                        f[e] = j[e];
                if (n.search(/mouse(down|up)|click/) > -1 && !f.which && (f.which = 1),
                -1 !== n.search(/^touch/) && (o = b(j),
                n = o.touches,
                v = o.changedTouches,
                p = n && n.length ? n[0] : v && v.length ? v[0] : d)) {
                    j = 0;
                    for (o = E.length; o > j; j++)
                        e = E[j],
                        f[e] = p[e]
                }
                a(h.target).trigger(f)
            }
            return f
        }
        function k(b) {
            var d, e = a.data(b.target, G);
            ra || 
            aa && aa === e || (d = g("v" + b.type, b),
            d && (d.isDefaultPrevented() && b.preventDefault(),
            d.isPropagationStopped() && b.stopPropagation(),
            d.isImmediatePropagationStopped() && b.stopImmediatePropagation()))
        }
        function j(d) {
            var e, l;
            if ((l = b(d).touches) && 1 === l.length)
                if (e = d.target,
                l = h(e),
                l.hasVirtualBinding)
                    aa = sa++,
                    a.data(e, G, aa),
                    L && (clearTimeout(L),
                    L = 0),
                    O = V = !1,
                    e = b(d).touches[0],
                    F = e.pageX,
                    X = e.pageY,
                    g("vmouseover", d, l),
                    g("vmousedown", d, l)
        }
        function q(a) {
            V || (O || g("vmousecancel", a, h(a.target)),
            O = !0,
            l())
        }
        function p(d) {
            if (!V) {
                var e = 
                b(d).touches[0]
                  , f = O
                  , k = a.vmouse.moveDistanceThreshold
                  , j = h(d.target);
                (O = O || Math.abs(e.pageX - F) > k || Math.abs(e.pageY - X) > k) && !f && g("vmousecancel", d, j);
                g("vmousemove", d, j);
                l()
            }
        }
        function s(a) {
            if (!V) {
                V = !0;
                var d, e, f = h(a.target);
                g("vmouseup", a, f);
                O || (d = g("vclick", a, f),
                d && d.isDefaultPrevented() && (e = b(a).changedTouches[0],
                Y.push({
                    touchID: aa,
                    x: e.clientX,
                    y: e.clientY
                }),
                ra = !0));
                g("vmouseout", a, f);
                O = !1;
                l()
            }
        }
        function r(b) {
            var d;
            if (b = a.data(b, C))
                for (d in b)
                    if (b[d])
                        return !0;
            return !1
        }
        function t() {}
        function w(b) {
            var d = 
            b.substr(1);
            return {
                setup: function() {
                    r(this) || a.data(this, C, {});
                    a.data(this, C)[b] = !0;
                    H[b] = (H[b] || 0) + 1;
                    1 === H[b] && ea.bind(d, k);
                    a(this).bind(d, t);
                    ba && (H.touchstart = (H.touchstart || 0) + 1,
                    1 === H.touchstart && ea.bind("touchstart", j).bind("touchend", s).bind("touchmove", p).bind("scroll", q))
                },
                teardown: function() {
                    --H[b];
                    H[b] || ea.unbind(d, k);
                    ba && (--H.touchstart,
                    H.touchstart || ea.unbind("touchstart", j).unbind("touchmove", p).unbind("touchend", s).unbind("scroll", q));
                    var e = a(this)
                      , h = a.data(this, C);
                    h && (h[b] = !1);
                    e.unbind(d, 
                    t);
                    r(this) || e.removeData(C)
                }
            }
        }
        var z, C = "virtualMouseBindings", G = "virtualTouchID", D = "vmouseover vmousedown vmousemove vmouseup vclick vmouseout vmousecancel".split(" "), E = "clientX clientY pageX pageY screenX screenY".split(" "), N = a.event.props.concat(a.event.mouseHooks ? a.event.mouseHooks.props : []), H = {}, L = 0, F = 0, X = 0, O = !1, Y = [], ra = !1, V = !1, ba = "addEventListener" in e, ea = a(e), sa = 1, aa = 0;
        a.vmouse = {
            moveDistanceThreshold: 10,
            clickDistanceThreshold: 10,
            resetTimerDuration: 1500
        };
        for (f = 0; f < D.length; f++)
            a.event.special[D[f]] = 
            w(D[f]);
        ba && e.addEventListener("click", function(b) {
            var d, e, h, l, f, g = Y.length, n = b.target;
            if (g) {
                d = b.clientX;
                e = b.clientY;
                z = a.vmouse.clickDistanceThreshold;
                for (h = n; h; ) {
                    for (l = 0; g > l; l++)
                        if (f = Y[l],
                        h === n && Math.abs(f.x - d) < z && Math.abs(f.y - e) < z || a.data(h, G) === f.touchID)
                            return b.preventDefault(),
                            void b.stopPropagation();
                    h = h.parentNode
                }
            }
        }
        , !0)
    }
    )(j, g, k);
    (function(a, f, e) {
        function d(b, d, h, l) {
            var f = h.type;
            h.type = d;
            l ? a.event.trigger(h, e, b) : a.event.dispatch.call(b, h);
            h.type = f
        }
        var b = a(k)
          , h = a.mobile.support.touch
          , l = h ? "touchstart" : 
        "mousedown"
          , g = h ? "touchend" : "mouseup"
          , j = h ? "touchmove" : "mousemove";
        a.each("touchstart touchmove touchend tap taphold swipe swipeleft swiperight scrollstart scrollstop".split(" "), function(b, d) {
            a.fn[d] = function(a) {
                return a ? this.bind(d, a) : this.trigger(d)
            }
            ;
            a.attrFn && (a.attrFn[d] = !0)
        }
        );
        a.event.special.scrollstart = {
            enabled: !0,
            setup: function() {
                function b(a, h) {
                    e = h;
                    d(l, e ? "scrollstart" : "scrollstop", a)
                }
                var e, h, l = this;
                a(l).bind("touchmove scroll", function(d) {
                    a.event.special.scrollstart.enabled && (e || b(d, !0),
                    clearTimeout(h),
                    h = setTimeout(function() {
                        b(d, !1)
                    }
                    , 50))
                }
                )
            },
            teardown: function() {
                a(this).unbind("touchmove scroll")
            }
        };
        a.event.special.tap = {
            tapholdThreshold: 750,
            emitTapOnTaphold: !0,
            setup: function() {
                var e = this
                  , h = a(e)
                  , l = !1;
                h.bind("vmousedown", function(f) {
                    function g() {
                        clearTimeout(j)
                    }
                    function n() {
                        g();
                        h.unbind("vclick", k).unbind("vmouseup", g);
                        b.unbind("vmousecancel", n)
                    }
                    function k(a) {
                        n();
                        l || v !== a.target ? l && a.preventDefault() : d(e, "tap", a)
                    }
                    if (l = !1,
                    f.which && 1 !== f.which)
                        return !1;
                    var j, v = f.target;
                    h.bind("vmouseup", g).bind("vclick", 
                    k);
                    b.bind("vmousecancel", n);
                    j = setTimeout(function() {
                        a.event.special.tap.emitTapOnTaphold || (l = !0);
                        d(e, "taphold", a.Event("taphold", {
                            target: v
                        }))
                    }
                    , a.event.special.tap.tapholdThreshold)
                }
                )
            },
            teardown: function() {
                a(this).unbind("vmousedown").unbind("vclick").unbind("vmouseup");
                b.unbind("vmousecancel")
            }
        };
        a.event.special.swipe = {
            scrollSupressionThreshold: 30,
            durationThreshold: 1E3,
            horizontalDistanceThreshold: 30,
            verticalDistanceThreshold: 30,
            getLocation: function(a) {
                var b = f.pageXOffset
                  , d = f.pageYOffset
                  , e = a.clientX
                  , 
                h = a.clientY;
                return 0 === a.pageY && Math.floor(h) > Math.floor(a.pageY) || 0 === a.pageX && Math.floor(e) > Math.floor(a.pageX) ? (e -= b,
                h -= d) : (h < a.pageY - d || e < a.pageX - b) && (e = a.pageX - b,
                h = a.pageY - d),
                {
                    x: e,
                    y: h
                }
            },
            start: function(b) {
                var d = a.event.special.swipe.getLocation(b.originalEvent.touches ? b.originalEvent.touches[0] : b);
                return {
                    time: (new Date).getTime(),
                    coords: [d.x, d.y],
                    origin: a(b.target)
                }
            },
            stop: function(b) {
                b = a.event.special.swipe.getLocation(b.originalEvent.touches ? b.originalEvent.touches[0] : b);
                return {
                    time: (new Date).getTime(),
                    coords: [b.x, b.y]
                }
            },
            handleSwipe: function(b, e, h, l) {
                if (e.time - b.time < a.event.special.swipe.durationThreshold && Math.abs(b.coords[0] - e.coords[0]) > a.event.special.swipe.horizontalDistanceThreshold && Math.abs(b.coords[1] - e.coords[1]) < a.event.special.swipe.verticalDistanceThreshold) {
                    var f = b.coords[0] > e.coords[0] ? "swipeleft" : "swiperight";
                    return d(h, "swipe", a.Event("swipe", {
                        target: l,
                        swipestart: b,
                        swipestop: e
                    }), !0),
                    d(h, f, a.Event(f, {
                        target: l,
                        swipestart: b,
                        swipestop: e
                    }), !0),
                    !0
                }
                return !1
            },
            eventInProgress: !1,
            setup: function() {
                var d, 
                e = this, h = a(e), f = {};
                (d = a.data(this, "mobile-events")) || (d = {
                    length: 0
                },
                a.data(this, "mobile-events", d));
                d.length++;
                d.swipe = f;
                f.start = function(d) {
                    if (!a.event.special.swipe.eventInProgress) {
                        a.event.special.swipe.eventInProgress = !0;
                        var h, l = a.event.special.swipe.start(d), k = d.target, o = !1;
                        f.move = function(b) {
                            l && !b.isDefaultPrevented() && (h = a.event.special.swipe.stop(b),
                            o || (o = a.event.special.swipe.handleSwipe(l, h, e, k),
                            o && (a.event.special.swipe.eventInProgress = !1)),
                            Math.abs(l.coords[0] - h.coords[0]) > a.event.special.swipe.scrollSupressionThreshold && 
                            b.preventDefault())
                        }
                        ;
                        f.stop = function() {
                            o = !0;
                            a.event.special.swipe.eventInProgress = !1;
                            b.off(j, f.move);
                            f.move = null 
                        }
                        ;
                        b.on(j, f.move).one(g, f.stop)
                    }
                }
                ;
                h.on(l, f.start)
            },
            teardown: function() {
                var d, e;
                (d = a.data(this, "mobile-events")) && (e = d.swipe,
                delete d.swipe,
                d.length--,
                0 === d.length && a.removeData(this, "mobile-events"));
                e && (e.start && a(this).off(l, e.start),
                e.move && b.off(j, e.move),
                e.stop && b.off(g, e.stop))
            }
        };
        a.each({
            scrollstop: "scrollstart",
            taphold: "tap",
            swipeleft: "swipe.left",
            swiperight: "swipe.right"
        }, function(b, 
        d) {
            a.event.special[b] = {
                setup: function() {
                    a(this).bind(d, a.noop)
                },
                teardown: function() {
                    a(this).unbind(d)
                }
            }
        }
        )
    }
    )(j, this);
    (function(a) {
        a.event.special.throttledresize = {
            setup: function() {
                a(this).bind("resize", b)
            },
            teardown: function() {
                a(this).unbind("resize", b)
            }
        };
        var f, e, d, b = function() {
            e = (new Date).getTime();
            d = e - h;
            d >= 250 ? (h = e,
            a(this).trigger("throttledresize")) : (f && clearTimeout(f),
            f = setTimeout(b, 250 - d))
        }
        , h = 0
    }
    )(j);
    (function(a, f) {
        function e() {
            var a = d();
            a !== b && (b = a,
            o.trigger(q))
        }
        var d, b, h, l, g, j, o = a(f), q = "orientationchange", 
        p = {
            0: !0,
            180: !0
        };
        a.support.orientation && (g = f.innerWidth || o.width(),
        j = f.innerHeight || o.height(),
        h = g > j && g - j > 50,
        l = p[f.orientation],
        (h && l || !h && !l) && (p = {
            "-90": !0,
            90: !0
        }));
        a.event.special.orientationchange = a.extend({}, a.event.special.orientationchange, {
            setup: function() {
                return a.support.orientation && !a.event.special.orientationchange.disabled ? !1 : (b = d(),
                void o.bind("throttledresize", e))
            },
            teardown: function() {
                return a.support.orientation && !a.event.special.orientationchange.disabled ? !1 : void o.unbind("throttledresize", 
                e)
            },
            add: function(a) {
                var b = a.handler;
                a.handler = function(a) {
                    return a.orientation = d(),
                    b.apply(this, arguments)
                }
            }
        });
        a.event.special.orientationchange.orientation = d = function() {
            var b = !0
              , d = k.documentElement;
            return b = a.support.orientation ? p[f.orientation] : d && d.clientWidth / d.clientHeight < 1.1,
            b ? "portrait" : "landscape"
        }
        ;
        a.fn[q] = function(a) {
            return a ? this.bind(q, a) : this.trigger(q)
        }
        ;
        a.attrFn && (a.attrFn[q] = !0)
    }
    )(j, this);
    (function(a) {
        var f = a("head").children("base")
          , e = {
            element: f.length ? f : a("<base>", {
                href: a.mobile.path.documentBase.hrefNoHash
            }).prependTo(a("head")),
            linkSelector: "[src], link[href], a[rel='external'], :jqmData(ajax='false'), a[target]",
            set: function(d) {
                a.mobile.dynamicBaseEnabled && a.support.dynamicBaseTag && e.element.attr("href", a.mobile.path.makeUrlAbsolute(d, a.mobile.path.documentBase))
            },
            rewrite: function(d, b) {
                var h = a.mobile.path.get(d);
                b.find(e.linkSelector).each(function(b, d) {
                    var e = a(d).is("[href]") ? "href" : a(d).is("[src]") ? "src" : "action"
                      , f = a.mobile.path.parseLocation()
                      , g = a(d).attr(e);
                    g = g.replace(f.protocol + f.doubleSlash + f.host + f.pathname, "");
                    /^(\w+:|#|\/)/.test(g) || a(d).attr(e, h + g)
                }
                )
            },
            reset: function() {
                e.element.attr("href", a.mobile.path.documentBase.hrefNoSearch)
            }
        };
        a.mobile.base = e
    }
    )(j);
    (function(a, f) {
        a.mobile.widgets = {};
        var e = a.widget
          , d = a.mobile.keepNative;
        a.widget = function(b) {
            return function() {
                var d = b.apply(this, arguments)
                  , e = d.prototype.widgetName;
                return d.initSelector = d.prototype.initSelector !== f ? d.prototype.initSelector : ":jqmData(role='" + e + "')",
                a.mobile.widgets[e] = d,
                d
            }
        }
        (a.widget);
        a.extend(a.widget, e);
        a.mobile.document.on("create", 
        function(b) {
            a(b.target).enhanceWithin()
        }
        );
        a.widget("mobile.page", {
            options: {
                theme: "a",
                domCache: !1,
                keepNativeDefault: a.mobile.keepNative,
                contentTheme: null ,
                enhanced: !1
            },
            _createWidget: function() {
                a.Widget.prototype._createWidget.apply(this, arguments);
                this._trigger("init")
            },
            _create: function() {
                return this._trigger("beforecreate") === !1 ? !1 : (this.options.enhanced || this._enhance(),
                this._on(this.element, {
                    pagebeforehide: "removeContainerBackground",
                    pagebeforeshow: "_handlePageBeforeShow"
                }),
                this.element.enhanceWithin(),
                void ("dialog" === a.mobile.getAttribute(this.element[0], "role") && a.mobile.dialog && this.element.dialog()))
            },
            _enhance: function() {
                var b = "data-" + a.mobile.ns
                  , d = this;
                this.options.role && this.element.attr("data-" + a.mobile.ns + "role", this.options.role);
                this.element.attr("tabindex", "0").addClass("ui-page ui-page-theme-" + this.options.theme);
                this.element.find("[" + b + "role='content']").each(function() {
                    var e = a(this)
                      , g = this.getAttribute(b + "theme") || f;
                    d.options.contentTheme = g || d.options.contentTheme || d.options.dialog && 
                    d.options.theme || "dialog" === d.element.jqmData("role") && d.options.theme;
                    e.addClass("ui-content");
                    d.options.contentTheme && e.addClass("ui-body-" + d.options.contentTheme);
                    e.attr("role", "main").addClass("ui-content")
                }
                )
            },
            bindRemove: function(b) {
                var d = this.element;
                !d.data("mobile-page").options.domCache && d.is(":jqmData(external-page='true')") && d.bind("pagehide.remove", b || function(b, d) {
                    if (!d.samePage) {
                        var e = a(this)
                          , h = new a.Event("pageremove");
                        e.trigger(h);
                        h.isDefaultPrevented() || e.removeWithDependents()
                    }
                }
                )
            },
            _setOptions: function(b) {
                b.theme !== f && this.element.removeClass("ui-page-theme-" + this.options.theme).addClass("ui-page-theme-" + b.theme);
                b.contentTheme !== f && this.element.find("[data-" + a.mobile.ns + "='content']").removeClass("ui-body-" + this.options.contentTheme).addClass("ui-body-" + b.contentTheme)
            },
            _handlePageBeforeShow: function() {
                this.setContainerBackground()
            },
            removeContainerBackground: function() {
                this.element.closest(":mobile-pagecontainer").pagecontainer({
                    theme: "none"
                })
            },
            setContainerBackground: function(a) {
                this.element.parent().pagecontainer({
                    theme: a || 
                    this.options.theme
                })
            },
            keepNativeSelector: function() {
                var b = this.options
                  , e = a.trim(b.keepNative || "")
                  , l = a.trim(a.mobile.keepNative);
                b = a.trim(b.keepNativeDefault);
                l = d === l ? "" : l;
                b = "" === l ? b : "";
                return (e ? [e] : []).concat(l ? [l] : []).concat(b ? [b] : []).join(", ")
            }
        })
    }
    )(j);
    (function(a, f) {
        a.widget("mobile.pagecontainer", {
            options: {
                theme: "a"
            },
            initSelector: !1,
            _create: function() {
                this._trigger("beforecreate");
                this.setLastScrollEnabled = !0;
                this._on(this.window, {
                    navigate: "_disableRecordScroll",
                    scrollstop: "_delayedRecordScroll"
                });
                this._on(this.window, {
                    navigate: "_filterNavigateEvents"
                });
                this._on({
                    pagechange: "_afterContentChange"
                });
                this.window.one("navigate", a.proxy(function() {
                    this.setLastScrollEnabled = !0
                }
                , this))
            },
            _setOptions: function(a) {
                a.theme !== f && "none" !== a.theme ? this.element.removeClass("ui-overlay-" + this.options.theme).addClass("ui-overlay-" + a.theme) : a.theme !== f && this.element.removeClass("ui-overlay-" + this.options.theme);
                this._super(a)
            },
            _disableRecordScroll: function() {
                this.setLastScrollEnabled = !1
            },
            _enableRecordScroll: function() {
                this.setLastScrollEnabled = 
                !0
            },
            _afterContentChange: function() {
                this.setLastScrollEnabled = !0;
                this._off(this.window, "scrollstop");
                this._on(this.window, {
                    scrollstop: "_delayedRecordScroll"
                })
            },
            _recordScroll: function() {
                if (this.setLastScrollEnabled) {
                    var a, d, e, f = this._getActiveHistory();
                    f && (a = this._getScroll(),
                    d = this._getMinScroll(),
                    e = this._getDefaultScroll(),
                    f.lastScroll = d > a ? e : a)
                }
            },
            _delayedRecordScroll: function() {
                setTimeout(a.proxy(this, "_recordScroll"), 100)
            },
            _getScroll: function() {
                return this.window.scrollTop()
            },
            _getMinScroll: function() {
                return a.mobile.minScrollBack
            },
            _getDefaultScroll: function() {
                return a.mobile.defaultHomeScroll
            },
            _filterNavigateEvents: function(b, d) {
                var e;
                b.originalEvent && b.originalEvent.isDefaultPrevented() || (e = b.originalEvent.type.indexOf("hashchange") > -1 ? d.state.hash : d.state.url,
                e || (e = this._getHash()),
                e && "#" !== e && 0 !== e.indexOf("#" + a.mobile.path.uiStateKey) || (e = location.href),
                this._handleNavigate(e, d.state))
            },
            _getHash: function() {
                return a.mobile.path.parseLocation().hash
            },
            getActivePage: function() {
                return this.activePage
            },
            _getInitialContent: function() {
                return a.mobile.firstPage
            },
            _getHistory: function() {
                return a.mobile.navigate.history
            },
            _getActiveHistory: function() {
                return this._getHistory().getActive()
            },
            _getDocumentBase: function() {
                return a.mobile.path.documentBase
            },
            back: function() {
                this.go(-1)
            },
            forward: function() {
                this.go(1)
            },
            go: function(b) {
                if (a.mobile.hashListeningEnabled)
                    g.history.go(b);
                else {
                    var d = a.mobile.navigate.history.activeIndex
                      , e = d + parseInt(b, 10)
                      , f = a.mobile.navigate.history.stack[e].url;
                    a.mobile.navigate.history.activeIndex = e;
                    a.mobile.navigate.history.previousIndex = 
                    d;
                    this.change(f, {
                        direction: b >= 1 ? "forward" : "back",
                        changeHash: !1,
                        fromHashChange: !0
                    })
                }
            },
            _handleDestination: function(b) {
                return "string" === a.type(b) && (b = a.mobile.path.stripHash(b)),
                b && (this._getHistory(),
                b = a.mobile.path.isPath(b) ? b : a.mobile.path.makeUrlAbsolute("#" + b, this._getDocumentBase())),
                b || this._getInitialContent()
            },
            _transitionFromHistory: function(a, d) {
                var e = this._getHistory();
                return (e = "back" === a ? e.getLast() : e.getActive()) && e.transition || d
            },
            _handleDialog: function(b, d) {
                var e, f, g = this.getActivePage();
                return g && !g.data("mobile-dialog") ? ("back" === d.direction ? this.back() : this.forward(),
                !1) : (e = d.pageUrl,
                f = this._getActiveHistory(),
                a.extend(b, {
                    role: f.role,
                    transition: this._transitionFromHistory(d.direction, b.transition),
                    reverse: "back" === d.direction
                }),
                e)
            },
            _handleNavigate: function(b, d) {
                var e = a.mobile.path.stripHash(b)
                  , f = this._getHistory()
                  , g = 0 === f.stack.length ? "none" : this._transitionFromHistory(d.direction)
                  , k = {
                    changeHash: !1,
                    fromHashChange: !0,
                    reverse: "back" === d.direction
                };
                a.extend(k, d, {
                    transition: g
                });
                f.activeIndex > 
                0 && e.indexOf(a.mobile.dialogHashKey) > -1 && (e = this._handleDialog(k, d),
                e === !1) || this._changeContent(this._handleDestination(e), k)
            },
            _changeContent: function(b, d) {
                a.mobile.changePage(b, d)
            },
            _getBase: function() {
                return a.mobile.base
            },
            _getNs: function() {
                return a.mobile.ns
            },
            _enhance: function(a, d) {
                return a.page({
                    role: d
                })
            },
            _include: function(a, d) {
                a.appendTo(this.element);
                this._enhance(a, d.role);
                a.page("bindRemove")
            },
            _find: function(b) {
                var d, e = this._createFileUrl(b);
                b = this._createDataUrl(b);
                var f = this._getInitialContent();
                return d = this.element.children("[data-" + this._getNs() + "url='" + a.mobile.path.hashToSelector(b) + "']"),
                0 === d.length && b && !a.mobile.path.isPath(b) && (d = this.element.children(a.mobile.path.hashToSelector("#" + b)).attr("data-" + this._getNs() + "url", b).jqmData("url", b)),
                0 === d.length && a.mobile.path.isFirstPageUrl(e) && f && f.parent().length && (d = a(f)),
                d
            },
            _getLoader: function() {
                return a.mobile.loading()
            },
            _showLoading: function(b, d, e, f) {
                this._loadMsg || (this._loadMsg = setTimeout(a.proxy(function() {
                    this._getLoader().loader("show", 
                    d, e, f);
                    this._loadMsg = 0
                }
                , this), b))
            },
            _hideLoading: function() {
                clearTimeout(this._loadMsg);
                this._loadMsg = 0;
                this._getLoader().loader("hide")
            },
            _showError: function() {
                this._hideLoading();
                this._showLoading(0, a.mobile.pageLoadErrorMessageTheme, a.mobile.pageLoadErrorMessage, !0);
                setTimeout(a.proxy(this, "_hideLoading"), 1500)
            },
            _parse: function(b, d) {
                var e, f = a("<div></div>");
                return f.get(0).innerHTML = b,
                e = f.find(":jqmData(role='page'), :jqmData(role='dialog')").first(),
                e.length || (e = a("<div data-" + this._getNs() + "role='page'>" + 
                (b.split(/<\/?body[^>]*>/gim)[1] || "") + "</div>")),
                e.attr("data-" + this._getNs() + "url", this._createDataUrl(d)).attr("data-" + this._getNs() + "external-page", !0),
                e
            },
            _setLoadedTitle: function(b, d) {
                var e = d.match(/<title[^>]*>([^<]*)/) && RegExp.$1;
                e && !b.jqmData("title") && (e = a("<div>" + e + "</div>").text(),
                b.jqmData("title", e))
            },
            _isRewritableBaseTag: function() {
                return a.mobile.dynamicBaseEnabled && !a.support.dynamicBaseTag
            },
            _createDataUrl: function(b) {
                return a.mobile.path.convertUrlToDataUrl(b)
            },
            _createFileUrl: function(b) {
                return a.mobile.path.getFilePath(b)
            },
            _triggerWithDeprecated: function(b, d, e) {
                var f = a.Event("page" + b)
                  , g = a.Event(this.widgetName + b);
                return (e || this.element).trigger(f, d),
                this._trigger(b, g, d),
                {
                    deprecatedEvent: f,
                    event: g
                }
            },
            _loadSuccess: function(b, d, e, g) {
                var k = this._createFileUrl(b);
                return a.proxy(function(j, q, p) {
                    var s;
                    s = RegExp("(<[^>]+\\bdata-" + this._getNs() + "role=[\"']?page[\"']?[^>]*>)");
                    var r = RegExp("\\bdata-" + this._getNs() + "url=[\"']?([^\"'>]*)[\"']?");
                    s.test(j) && RegExp.$1 && r.test(RegExp.$1) && RegExp.$1 && (k = a.mobile.path.getFilePath(a("<div>" + 
                    RegExp.$1 + "</div>").text()),
                    k = this.window[0].encodeURIComponent(k));
                    e.prefetch === f && this._getBase().set(k);
                    s = this._parse(j, k);
                    this._setLoadedTitle(s, j);
                    d.xhr = p;
                    d.textStatus = q;
                    d.page = s;
                    d.content = s;
                    d.toPage = s;
                    this._triggerWithDeprecated("load", d).event.isDefaultPrevented() || (this._isRewritableBaseTag() && s && this._getBase().rewrite(k, s),
                    this._include(s, e),
                    e.showLoadMsg && this._hideLoading(),
                    g.resolve(b, e, s))
                }
                , this)
            },
            _loadDefaults: {
                type: "get",
                data: f,
                reloadPage: !1,
                reload: !1,
                role: f,
                showLoadMsg: !1,
                loadMsgDelay: 50
            },
            load: function(b, d) {
                var e, g, k, j, q = d && d.deferred || a.Deferred(), p = a.extend({}, this._loadDefaults, d), s = null , r = a.mobile.path.makeUrlAbsolute(b, this._findBaseWithDefault());
                return p.reload = p.reloadPage,
                p.data && "get" === p.type && (r = a.mobile.path.addSearchParams(r, p.data),
                p.data = f),
                p.data && "post" === p.type && (p.reload = !0),
                e = this._createFileUrl(r),
                g = this._createDataUrl(r),
                s = this._find(r),
                0 === s.length && a.mobile.path.isEmbeddedPage(e) && !a.mobile.path.isFirstPageUrl(e) ? (q.reject(r, p),
                q.promise()) : (this._getBase().reset(),
                s.length && !p.reload ? (this._enhance(s, p.role),
                q.resolve(r, p, s),
                p.prefetch || this._getBase().set(b),
                q.promise()) : (j = {
                    url: b,
                    absUrl: r,
                    toPage: b,
                    prevPage: d ? d.fromPage : f,
                    dataUrl: g,
                    deferred: q,
                    options: p
                },
                k = this._triggerWithDeprecated("beforeload", j),
                k.deprecatedEvent.isDefaultPrevented() || k.event.isDefaultPrevented() ? q.promise() : (p.showLoadMsg && this._showLoading(p.loadMsgDelay),
                p.prefetch === f && this._getBase().reset(),
                a.mobile.allowCrossDomainPages || a.mobile.path.isSameDomain(a.mobile.path.documentUrl, r) ? (a.ajax({
                    url: e,
                    type: p.type,
                    data: p.data,
                    contentType: p.contentType,
                    dataType: "html",
                    success: this._loadSuccess(r, j, p, q),
                    error: this._loadError(r, j, p, q)
                }),
                q.promise()) : (q.reject(r, p),
                q.promise()))))
            },
            _loadError: function(b, d, e, f) {
                return a.proxy(function(g, k, j) {
                    this._getBase().set(a.mobile.path.get());
                    d.xhr = g;
                    d.textStatus = k;
                    d.errorThrown = j;
                    g = this._triggerWithDeprecated("loadfailed", d);
                    g.deprecatedEvent.isDefaultPrevented() || g.event.isDefaultPrevented() || (e.showLoadMsg && this._showError(),
                    f.reject(b, e))
                }
                , this)
            },
            _getTransitionHandler: function(b) {
                return b = 
                a.mobile._maybeDegradeTransition(b),
                a.mobile.transitionHandlers[b] || a.mobile.defaultTransitionHandler
            },
            _triggerCssTransitionEvents: function(b, d, e) {
                var f;
                e = e || "";
                d && (b[0] === d[0] && (f = !0),
                this._triggerWithDeprecated(e + "hide", {
                    nextPage: b,
                    toPage: b,
                    prevPage: d,
                    samePage: !1
                }, d));
                this._triggerWithDeprecated(e + "show", {
                    prevPage: d || a(""),
                    toPage: b
                }, b)
            },
            _cssTransition: function(b, d, e) {
                var f = e.transition
                  , g = e.reverse
                  , k = e.deferred;
                this._triggerCssTransitionEvents(b, d, "before");
                this._hideLoading();
                e = (new (this._getTransitionHandler(f))(f,
                g,b,d)).transition();
                e.done(a.proxy(function() {
                    this._triggerCssTransitionEvents(b, d)
                }
                , this));
                e.done(function() {
                    k.resolve.apply(k, arguments)
                }
                )
            },
            _releaseTransitionLock: function() {
                d = !1;
                e.length > 0 && a.mobile.changePage.apply(null , e.pop())
            },
            _removeActiveLinkClass: function(b) {
                a.mobile.removeActiveLinkClass(b)
            },
            _loadUrl: function(b, e, l) {
                l.target = b;
                l.deferred = a.Deferred();
                this.load(b, l);
                l.deferred.done(a.proxy(function(a, b, l) {
                    d = !1;
                    b.absUrl = e.absUrl;
                    this.transition(l, e, b)
                }
                , this));
                l.deferred.fail(a.proxy(function() {
                    this._removeActiveLinkClass(!0);
                    this._releaseTransitionLock();
                    this._triggerWithDeprecated("changefailed", e)
                }
                , this))
            },
            _triggerPageBeforeChange: function(b, d, e) {
                var f;
                return d.prevPage = this.activePage,
                a.extend(d, {
                    toPage: b,
                    options: e
                }),
                d.absUrl = "string" === a.type(b) ? a.mobile.path.makeUrlAbsolute(b, this._findBaseWithDefault()) : e.absUrl,
                f = this._triggerWithDeprecated("beforechange", d),
                f.event.isDefaultPrevented() || f.deprecatedEvent.isDefaultPrevented() ? !1 : !0
            },
            change: function(b, h) {
                if (d)
                    return void e.unshift(arguments);
                var l = a.extend({}, a.mobile.changePage.defaults, 
                h)
                  , f = {};
                l.fromPage = l.fromPage || this.activePage;
                this._triggerPageBeforeChange(b, f, l) && (b = f.toPage,
                "string" === a.type(b) ? (d = !0,
                this._loadUrl(b, f, l)) : this.transition(b, f, l))
            },
            transition: function(b, h, l) {
                var g, j, o, q, p, s, r, t, w, z, C;
                if (d)
                    return void e.unshift([b, l]);
                if (this._triggerPageBeforeChange(b, h, l) && (h.prevPage = l.fromPage,
                o = this._triggerWithDeprecated("beforetransition", h),
                !o.deprecatedEvent.isDefaultPrevented() && !o.event.isDefaultPrevented())) {
                    if (d = !0,
                    b[0] !== a.mobile.firstPage[0] || l.dataUrl || (l.dataUrl = 
                    a.mobile.path.documentUrl.hrefNoHash),
                    g = l.fromPage,
                    j = l.dataUrl && a.mobile.path.convertUrlToDataUrl(l.dataUrl) || b.jqmData("url"),
                    o = j,
                    a.mobile.path.getFilePath(j),
                    q = a.mobile.navigate.history.getActive(),
                    p = 0 === a.mobile.navigate.history.activeIndex,
                    s = 0,
                    r = k.title,
                    t = ("dialog" === l.role || "dialog" === b.jqmData("role")) && b.jqmData("dialog") !== !0,
                    g && g[0] === b[0] && !l.allowSamePageTransition)
                        return d = !1,
                        this._triggerWithDeprecated("transition", h),
                        this._triggerWithDeprecated("change", h),
                        void (l.fromHashChange && a.mobile.navigate.history.direct({
                            url: j
                        }));
                    b.page({
                        role: l.role
                    });
                    l.fromHashChange && (s = "back" === l.direction ? -1 : 1);
                    try {
                        k.activeElement && "body" !== k.activeElement.nodeName.toLowerCase() ? a(k.activeElement).blur() : a("input:focus, textarea:focus, select:focus").blur()
                    } catch (G) {}
                    w = !1;
                    t && q && (q.url && q.url.indexOf(a.mobile.dialogHashKey) > -1 && this.activePage && !this.activePage.hasClass("ui-dialog") && a.mobile.navigate.history.activeIndex > 0 && (l.changeHash = !1,
                    w = !0),
                    j = q.url || "",
                    j += !w && j.indexOf("#") > -1 ? a.mobile.dialogHashKey : "#" + a.mobile.dialogHashKey);
                    (z = 
                    q ? b.jqmData("title") || b.children(":jqmData(role='header')").find(".ui-title").text() : r) && r === k.title && (r = z);
                    b.jqmData("title") || b.jqmData("title", r);
                    l.transition = l.transition || (s && !p ? q.transition : f) || (t ? a.mobile.defaultDialogTransition : a.mobile.defaultPageTransition);
                    !s && w && (a.mobile.navigate.history.getActive().pageUrl = o);
                    j && !l.fromHashChange && (!a.mobile.path.isPath(j) && j.indexOf("#") < 0 && (j = "#" + j),
                    C = {
                        transition: l.transition,
                        title: r,
                        pageUrl: o,
                        role: l.role
                    },
                    l.changeHash !== !1 && a.mobile.hashListeningEnabled ? 
                    a.mobile.navigate(this.window[0].encodeURI(j), C, !0) : b[0] !== a.mobile.firstPage[0] && a.mobile.navigate.history.add(j, C));
                    k.title = r;
                    this.activePage = a.mobile.activePage = b;
                    l.reverse = l.reverse || 0 > s;
                    j = a.Deferred();
                    this._cssTransition(b, g, {
                        transition: l.transition,
                        reverse: l.reverse,
                        deferred: j
                    });
                    j.done(a.proxy(function(d, e, f, g, k) {
                        a.mobile.removeActiveLinkClass();
                        l.duplicateCachedPage && l.duplicateCachedPage.remove();
                        k || a.mobile.focusPage(b);
                        this._releaseTransitionLock();
                        this._triggerWithDeprecated("transition", 
                        h);
                        this._triggerWithDeprecated("change", h)
                    }
                    , this))
                }
            },
            _findBaseWithDefault: function() {
                return this.activePage && a.mobile.getClosestBaseUrl(this.activePage) || a.mobile.path.documentBase.hrefNoHash
            }
        });
        a.mobile.navreadyDeferred = a.Deferred();
        var e = []
          , d = !1
    }
    )(j);
    (function(a, f) {
        function e(a) {
            for (; a && ("string" != typeof a.nodeName || "a" !== a.nodeName.toLowerCase()); )
                a = a.parentNode;
            return a
        }
        var d = a.Deferred()
          , b = a.Deferred()
          , h = function() {
            b.resolve();
            b = null 
        }
          , l = a.mobile.path.documentUrl
          , j = null ;
        a.mobile.loadPage = function(b, 
        d) {
            var e;
            return d = d || {},
            e = d.pageContainer || a.mobile.pageContainer,
            d.deferred = a.Deferred(),
            e.pagecontainer("load", b, d),
            d.deferred.promise()
        }
        ;
        a.mobile.back = function() {
            var b = g.navigator;
            this.phonegapNavigationEnabled && b && b.app && b.app.backHistory ? b.app.backHistory() : a.mobile.pageContainer.pagecontainer("back")
        }
        ;
        a.mobile.focusPage = function(a) {
            var b = a.find("[autofocus]")
              , d = a.find(".ui-title:eq(0)");
            return b.length ? void b.focus() : void (d.length ? d.focus() : a.focus())
        }
        ;
        a.mobile._maybeDegradeTransition = a.mobile._maybeDegradeTransition || 
        function(a) {
            return a
        }
        ;
        a.mobile.changePage = function(b, d) {
            a.mobile.pageContainer.pagecontainer("change", b, d)
        }
        ;
        a.mobile.changePage.defaults = {
            transition: f,
            reverse: !1,
            changeHash: !0,
            fromHashChange: !1,
            role: f,
            duplicateCachedPage: f,
            pageContainer: f,
            showLoadMsg: !0,
            dataUrl: f,
            fromPage: f,
            allowSamePageTransition: !1
        };
        a.mobile._registerInternalEvents = function() {
            var d = function(b, d) {
                var e, h, f, g, k = !0;
                return !a.mobile.ajaxEnabled || b.is(":jqmData(ajax='false')") || !b.jqmHijackable().length || b.attr("target") ? !1 : (e = j && j.attr("formaction") || 
                b.attr("action"),
                g = (b.attr("method") || "get").toLowerCase(),
                e || (e = a.mobile.getClosestBaseUrl(b),
                "get" === g && (e = a.mobile.path.parseUrl(e).hrefNoSearch),
                e === a.mobile.path.documentBase.hrefNoHash && (e = l.hrefNoSearch)),
                e = a.mobile.path.makeUrlAbsolute(e, a.mobile.getClosestBaseUrl(b)),
                a.mobile.path.isExternal(e) && !a.mobile.path.isPermittedCrossDomainRequest(l, e) ? !1 : (d || (h = b.serializeArray(),
                j && j[0].form === b[0] && (f = j.attr("name"),
                f && (a.each(h, function(a, b) {
                    return b.name === f ? (f = "",
                    !1) : void 0
                }
                ),
                f && h.push({
                    name: f,
                    value: j.attr("value")
                }))),
                k = {
                    url: e,
                    options: {
                        type: g,
                        data: a.param(h),
                        transition: b.jqmData("transition"),
                        reverse: "reverse" === b.jqmData("direction"),
                        reloadPage: !0
                    }
                }),
                k))
            }
            ;
            a.mobile.document.delegate("form", "submit", function(b) {
                var e;
                b.isDefaultPrevented() || (e = d(a(this)),
                e && (a.mobile.changePage(e.url, e.options),
                b.preventDefault()))
            }
            );
            a.mobile.document.bind("vclick", function(b) {
                var h, f = b.target, l = !1;
                if (!(b.which > 1) && a.mobile.linkBindingEnabled) {
                    if (j = a(f),
                    a.data(f, "mobile-button")) {
                        if (!d(a(f).closest("form"), 
                        !0))
                            return;
                        f.parentNode && (f = f.parentNode)
                    } else {
                        if (f = e(f),
                        !f || "#" === a.mobile.path.parseUrl(f.getAttribute("href") || "#").hash)
                            return;
                        if (!a(f).jqmHijackable().length)
                            return
                    }
                    ~f.className.indexOf("ui-link-inherit") ? f.parentNode && (h = a.data(f.parentNode, "buttonElements")) : h = a.data(f, "buttonElements");
                    h ? f = h.outer : l = !0;
                    b = a(f);
                    l && (b = b.closest(".ui-btn"));
                    b.length > 0 && !b.hasClass("ui-state-disabled") && (a.mobile.removeActiveLinkClass(!0),
                    a.mobile.activeClickedLink = b,
                    a.mobile.activeClickedLink.addClass(a.mobile.activeBtnClass))
                }
            }
            );
            a.mobile.document.bind("click", function(b) {
                if (a.mobile.linkBindingEnabled && !b.isDefaultPrevented()) {
                    var d, h, k, j;
                    j = e(b.target);
                    var n = a(j)
                      , v = function() {
                        g.setTimeout(function() {
                            a.mobile.removeActiveLinkClass(!0)
                        }
                        , 200)
                    }
                    ;
                    if (a.mobile.activeClickedLink && a.mobile.activeClickedLink[0] === b.target.parentNode && v(),
                    j && !(b.which > 1) && n.jqmHijackable().length) {
                        if (n.is(":jqmData(rel='back')"))
                            return a.mobile.back(),
                            !1;
                        if (d = a.mobile.getClosestBaseUrl(n),
                        h = a.mobile.path.makeUrlAbsolute(n.attr("href") || "#", d),
                        !a.mobile.ajaxEnabled && 
                        !a.mobile.path.isEmbeddedPage(h))
                            return void v();
                        if (!(-1 === h.search("#") || a.mobile.path.isExternal(h) && a.mobile.path.isAbsoluteUrl(h))) {
                            if (h = h.replace(/[^#]*#/, ""),
                            !h)
                                return void b.preventDefault();
                            h = a.mobile.path.isPath(h) ? a.mobile.path.makeUrlAbsolute(h, d) : a.mobile.path.makeUrlAbsolute("#" + h, l.hrefNoHash)
                        }
                        if (k = n.is("[rel='external']") || n.is(":jqmData(ajax='false')") || n.is("[target]"),
                        k || a.mobile.path.isExternal(h) && !a.mobile.path.isPermittedCrossDomainRequest(l, h))
                            return void v();
                        d = n.jqmData("transition");
                        k = "reverse" === n.jqmData("direction") || n.jqmData("back");
                        j = n.attr("data-" + a.mobile.ns + "rel") || f;
                        a.mobile.changePage(h, {
                            transition: d,
                            reverse: k,
                            role: j,
                            link: n
                        });
                        b.preventDefault()
                    }
                }
            }
            );
            a.mobile.document.delegate(".ui-page", "pageshow.prefetch", function() {
                var b = [];
                a(this).find("a:jqmData(prefetch)").each(function() {
                    var d = a(this)
                      , e = d.attr("href");
                    e && -1 === a.inArray(e, b) && (b.push(e),
                    a.mobile.loadPage(e, {
                        role: d.attr("data-" + a.mobile.ns + "rel"),
                        prefetch: !0
                    }))
                }
                )
            }
            );
            a.mobile.pageContainer.pagecontainer();
            a.mobile.document.bind("pageshow", 
            function() {
                b ? b.done(a.mobile.resetActivePageHeight) : a.mobile.resetActivePageHeight()
            }
            );
            a.mobile.window.bind("throttledresize", a.mobile.resetActivePageHeight)
        }
        ;
        a(function() {
            d.resolve()
        }
        );
        "complete" === k.readyState ? h() : a.mobile.window.load(h);
        a.when(d, a.mobile.navreadyDeferred).done(function() {
            a.mobile._registerInternalEvents()
        }
        )
    }
    )(j);
    (function(a, f) {
        a.mobile.Transition = function() {
            this.init.apply(this, arguments)
        }
        ;
        a.extend(a.mobile.Transition.prototype, {
            toPreClass: " ui-page-pre-in",
            init: function(e, d, b, 
            h) {
                a.extend(this, {
                    name: e,
                    reverse: d,
                    $to: b,
                    $from: h,
                    deferred: new a.Deferred
                })
            },
            cleanFrom: function() {
                this.$from.removeClass(a.mobile.activePageClass + " out in reverse " + this.name).height("")
            },
            beforeDoneIn: function() {},
            beforeDoneOut: function() {},
            beforeStartOut: function() {},
            doneIn: function() {
                this.beforeDoneIn();
                this.$to.removeClass("out in reverse " + this.name).height("");
                this.toggleViewportClass();
                a.mobile.window.scrollTop() !== this.toScroll && this.scrollPage();
                this.sequential || this.$to.addClass(a.mobile.activePageClass);
                this.deferred.resolve(this.name, this.reverse, this.$to, this.$from, !0)
            },
            doneOut: function(a, d, b, h) {
                this.beforeDoneOut();
                this.startIn(a, d, b, h)
            },
            hideIn: function(a) {
                this.$to.css("z-index", -10);
                a.call(this);
                this.$to.css("z-index", "")
            },
            scrollPage: function() {
                a.event.special.scrollstart.enabled = !1;
                (a.mobile.hideUrlBar || this.toScroll !== a.mobile.defaultHomeScroll) && f.scrollTo(0, this.toScroll);
                setTimeout(function() {
                    a.event.special.scrollstart.enabled = !0
                }
                , 150)
            },
            startIn: function(e, d, b, h) {
                this.hideIn(function() {
                    this.$to.addClass(a.mobile.activePageClass + 
                    this.toPreClass);
                    h || a.mobile.focusPage(this.$to);
                    this.$to.height(e + this.toScroll);
                    b || this.scrollPage()
                }
                );
                this.$to.removeClass(this.toPreClass).addClass(this.name + " in " + d);
                b ? this.doneIn() : this.$to.animationComplete(a.proxy(function() {
                    this.doneIn()
                }
                , this))
            },
            startOut: function(e, d, b) {
                this.beforeStartOut(e, d, b);
                this.$from.height(e + a.mobile.window.scrollTop()).addClass(this.name + " out" + d)
            },
            toggleViewportClass: function() {
                a.mobile.pageContainer.toggleClass("ui-mobile-viewport-transitioning viewport-" + this.name)
            },
            transition: function() {
                var e, d = this.reverse ? " reverse" : "", b = a.mobile.getScreenHeight(), h = a.mobile.maxTransitionWidth !== !1 && a.mobile.window.width() > a.mobile.maxTransitionWidth;
                return this.toScroll = a.mobile.navigate.history.getActive().lastScroll || a.mobile.defaultHomeScroll,
                e = !a.support.cssTransitions || !a.support.cssAnimations || h || !this.name || "none" === this.name || Math.max(a.mobile.window.scrollTop(), this.toScroll) > a.mobile.getMaxScrollForTransition(),
                this.toggleViewportClass(),
                this.$from && !e ? this.startOut(b, 
                d, e) : this.doneOut(b, d, e, !0),
                this.deferred.promise()
            }
        })
    }
    )(j, this);
    (function(a) {
        a.mobile.SerialTransition = function() {
            this.init.apply(this, arguments)
        }
        ;
        a.extend(a.mobile.SerialTransition.prototype, a.mobile.Transition.prototype, {
            sequential: !0,
            beforeDoneOut: function() {
                this.$from && this.cleanFrom()
            },
            beforeStartOut: function(f, e, d) {
                this.$from.animationComplete(a.proxy(function() {
                    this.doneOut(f, e, d)
                }
                , this))
            }
        })
    }
    )(j);
    (function(a) {
        a.mobile.ConcurrentTransition = function() {
            this.init.apply(this, arguments)
        }
        ;
        a.extend(a.mobile.ConcurrentTransition.prototype, 
        a.mobile.Transition.prototype, {
            sequential: !1,
            beforeDoneIn: function() {
                this.$from && this.cleanFrom()
            },
            beforeStartOut: function(a, e, d) {
                this.doneOut(a, e, d)
            }
        })
    }
    )(j);
    (function(a) {
        var f;
        a.mobile.transitionHandlers = {
            sequential: a.mobile.SerialTransition,
            simultaneous: a.mobile.ConcurrentTransition
        };
        a.mobile.defaultTransitionHandler = a.mobile.transitionHandlers.sequential;
        a.mobile.transitionFallbacks = {};
        a.mobile._maybeDegradeTransition = function(e) {
            return e && !a.support.cssTransform3d && a.mobile.transitionFallbacks[e] && 
            (e = a.mobile.transitionFallbacks[e]),
            e
        }
        ;
        a.mobile.getMaxScrollForTransition = a.mobile.getMaxScrollForTransition || function() {
            return 3 * a.mobile.getScreenHeight()
        }
    }
    )(j);
    j.mobile.transitionFallbacks.flip = "fade";
    j.mobile.transitionFallbacks.flow = "fade";
    j.mobile.transitionFallbacks.pop = "fade";
    (function(a) {
        a.mobile.transitionHandlers.slide = a.mobile.transitionHandlers.simultaneous;
        a.mobile.transitionFallbacks.slide = "fade"
    }
    )(j, this);
    j.mobile.transitionFallbacks.slidedown = "fade";
    j.mobile.transitionFallbacks.slidefade = 
    "fade";
    j.mobile.transitionFallbacks.slideup = "fade";
    j.mobile.transitionFallbacks.turn = "fade";
    (function(a) {
        a.mobile.degradeInputs = {
            color: !1,
            date: !1,
            datetime: !1,
            "datetime-local": !1,
            email: !1,
            month: !1,
            number: !1,
            range: "number",
            search: "text",
            tel: !1,
            time: !1,
            url: !1,
            week: !1
        };
        a.mobile.page.prototype.options.degradeInputs = a.mobile.degradeInputs;
        a.mobile.degradeInputsWithin = function(f) {
            f = a(f);
            f.find("input").not(a.mobile.page.prototype.keepNativeSelector()).each(function() {
                var e, d, b, h, f = a(this), g = this.getAttribute("type"), 
                k = a.mobile.degradeInputs[g] || "text";
                a.mobile.degradeInputs[g] && (e = a("<div>").html(f.clone()).html(),
                d = e.indexOf(" type=") > -1,
                b = d ? /\s+type=["']?\w+['"]?/ : /\/?>/,
                h = ' type="' + k + '" data-' + a.mobile.ns + 'type="' + g + '"' + (d ? "" : ">"),
                f.replaceWith(e.replace(b, h)))
            }
            )
        }
    }
    )(j);
    (function(a, f, e) {
        a.widget("mobile.page", a.mobile.page, {
            options: {
                closeBtn: "left",
                closeBtnText: "Close",
                overlayTheme: "a",
                corners: !0,
                dialog: !1
            },
            _create: function() {
                this._super();
                this.options.dialog && (a.extend(this, {
                    _inner: this.element.children(),
                    _headerCloseButton: null 
                }),
                this.options.enhanced || this._setCloseBtn(this.options.closeBtn))
            },
            _enhance: function() {
                this._super();
                this.options.dialog && this.element.addClass("ui-dialog").wrapInner(a("<div/>", {
                    role: "dialog",
                    "class": "ui-dialog-contain ui-overlay-shadow" + (this.options.corners ? " ui-corner-all" : "")
                }))
            },
            _setOptions: function(d) {
                var b, h, f = this.options;
                d.corners !== e && this._inner.toggleClass("ui-corner-all", !!d.corners);
                d.overlayTheme !== e && a.mobile.activePage[0] === this.element[0] && (f.overlayTheme = 
                d.overlayTheme,
                this._handlePageBeforeShow());
                d.closeBtnText !== e && (b = f.closeBtn,
                h = d.closeBtnText);
                d.closeBtn !== e && (b = d.closeBtn);
                b && this._setCloseBtn(b, h);
                this._super(d)
            },
            _handlePageBeforeShow: function() {
                this.options.overlayTheme && this.options.dialog ? (this.removeContainerBackground(),
                this.setContainerBackground(this.options.overlayTheme)) : this._super()
            },
            _setCloseBtn: function(d, b) {
                var e, f = this._headerCloseButton;
                d = "left" === d ? "left" : "right" === d ? "right" : "none";
                "none" === d ? f && (f.remove(),
                f = null ) : f ? (f.removeClass("ui-btn-left ui-btn-right").addClass("ui-btn-" + 
                d),
                b && f.text(b)) : (e = this._inner.find(":jqmData(role='header')").first(),
                f = a("<a></a>", {
                    href: "#",
                    "class": "ui-btn ui-corner-all ui-icon-delete ui-btn-icon-notext ui-btn-" + d
                }).attr("data-" + a.mobile.ns + "rel", "back").text(b || this.options.closeBtnText || "").prependTo(e));
                this._headerCloseButton = f
            }
        })
    }
    )(j, this);
    (function(a, f, e) {
        a.widget("mobile.dialog", {
            options: {
                closeBtn: "left",
                closeBtnText: "Close",
                overlayTheme: "a",
                corners: !0
            },
            _handlePageBeforeShow: function() {
                this._isCloseable = !0;
                this.options.overlayTheme && 
                this.element.page("removeContainerBackground").page("setContainerBackground", this.options.overlayTheme)
            },
            _handlePageBeforeHide: function() {
                this._isCloseable = !1
            },
            _handleVClickSubmit: function(d) {
                var b;
                d = a(d.target).closest("vclick" === d.type ? "a" : "form");
                d.length && !d.jqmData("transition") && (b = {},
                b["data-" + a.mobile.ns + "transition"] = (a.mobile.navigate.history.getActive() || {}).transition || a.mobile.defaultDialogTransition,
                b["data-" + a.mobile.ns + "direction"] = "reverse",
                d.attr(b))
            },
            _create: function() {
                var d = this.element
                  , 
                b = this.options;
                d.addClass("ui-dialog").wrapInner(a("<div/>", {
                    role: "dialog",
                    "class": "ui-dialog-contain ui-overlay-shadow" + (b.corners ? " ui-corner-all" : "")
                }));
                a.extend(this, {
                    _isCloseable: !1,
                    _inner: d.children(),
                    _headerCloseButton: null 
                });
                this._on(d, {
                    vclick: "_handleVClickSubmit",
                    submit: "_handleVClickSubmit",
                    pagebeforeshow: "_handlePageBeforeShow",
                    pagebeforehide: "_handlePageBeforeHide"
                });
                this._setCloseBtn(b.closeBtn)
            },
            _setOptions: function(d) {
                var b, h, f = this.options;
                d.corners !== e && this._inner.toggleClass("ui-corner-all", 
                !!d.corners);
                d.overlayTheme !== e && a.mobile.activePage[0] === this.element[0] && (f.overlayTheme = d.overlayTheme,
                this._handlePageBeforeShow());
                d.closeBtnText !== e && (b = f.closeBtn,
                h = d.closeBtnText);
                d.closeBtn !== e && (b = d.closeBtn);
                b && this._setCloseBtn(b, h);
                this._super(d)
            },
            _setCloseBtn: function(d, b) {
                var e, f = this._headerCloseButton;
                d = "left" === d ? "left" : "right" === d ? "right" : "none";
                "none" === d ? f && (f.remove(),
                f = null ) : f ? (f.removeClass("ui-btn-left ui-btn-right").addClass("ui-btn-" + d),
                b && f.text(b)) : (e = this._inner.find(":jqmData(role='header')").first(),
                f = a("<a></a>", {
                    role: "button",
                    href: "#",
                    "class": "ui-btn ui-corner-all ui-icon-delete ui-btn-icon-notext ui-btn-" + d
                }).text(b || this.options.closeBtnText || "").prependTo(e),
                this._on(f, {
                    click: "close"
                }));
                this._headerCloseButton = f
            },
            close: function() {
                var d = a.mobile.navigate.history;
                this._isCloseable && (this._isCloseable = !1,
                a.mobile.hashListeningEnabled && d.activeIndex > 0 ? a.mobile.back() : a.mobile.pageContainer.pagecontainer("back"))
            }
        })
    }
    )(j, this);
    (function(a, f) {
        var e = /([A-Z])/g
          , d = function(a) {
            return "ui-btn-icon-" + 
            (null  === a ? "left" : a)
        }
        ;
        a.widget("mobile.collapsible", {
            options: {
                enhanced: !1,
                expandCueText: null ,
                collapseCueText: null ,
                collapsed: !0,
                heading: "h1,h2,h3,h4,h5,h6,legend",
                collapsedIcon: null ,
                expandedIcon: null ,
                iconpos: null ,
                theme: null ,
                contentTheme: null ,
                inset: null ,
                corners: null ,
                mini: null 
            },
            _create: function() {
                var b = this.element
                  , d = {
                    accordion: b.closest(":jqmData(role='collapsible-set'),:jqmData(role='collapsibleset')" + (a.mobile.collapsibleset ? ", :mobile-collapsibleset" : "")).addClass("ui-collapsible-set")
                };
                this._ui = 
                d;
                this._renderedOptions = this._getOptions(this.options);
                this.options.enhanced ? (d.heading = this.element.children(".ui-collapsible-heading"),
                d.content = d.heading.next(),
                d.anchor = d.heading.children(),
                d.status = d.anchor.children(".ui-collapsible-heading-status")) : this._enhance(b, d);
                this._on(d.heading, {
                    tap: function() {
                        d.heading.find("a").first().addClass(a.mobile.activeBtnClass)
                    },
                    click: function(a) {
                        this._handleExpandCollapse(!d.heading.hasClass("ui-collapsible-heading-collapsed"));
                        a.preventDefault();
                        a.stopPropagation()
                    }
                })
            },
            _getOptions: function(b) {
                var d, f = this._ui.accordion, g = this._ui.accordionWidget;
                b = a.extend({}, b);
                f.length && !g && (this._ui.accordionWidget = g = f.data("mobile-collapsibleset"));
                for (d in b)
                    b[d] = null  != b[d] ? b[d] : g ? g.options[d] : f.length ? a.mobile.getAttribute(f[0], d.replace(e, "-$1").toLowerCase()) : null ,
                    null  == b[d] && (b[d] = a.mobile.collapsible.defaults[d]);
                return b
            },
            _themeClassFromOption: function(a, d) {
                return d ? "none" === d ? "" : a + d : ""
            },
            _enhance: function(b, e) {
                var f, g = this._renderedOptions, k = this._themeClassFromOption("ui-body-", 
                g.contentTheme);
                return b.addClass("ui-collapsible " + (g.inset ? "ui-collapsible-inset " : "") + (g.inset && g.corners ? "ui-corner-all " : "") + (k ? "ui-collapsible-themed-content " : "")),
                e.originalHeading = b.children(this.options.heading).first(),
                e.content = b.wrapInner("<div class='ui-collapsible-content " + k + "'></div>").children(".ui-collapsible-content"),
                e.heading = e.originalHeading,
                e.heading.is("legend") && (e.heading = a("<div role='heading'>" + e.heading.html() + "</div>"),
                e.placeholder = a("<div><\!-- placeholder for legend --\></div>").insertBefore(e.originalHeading),
                e.originalHeading.remove()),
                f = g.collapsed ? g.collapsedIcon ? "ui-icon-" + g.collapsedIcon : "" : g.expandedIcon ? "ui-icon-" + g.expandedIcon : "",
                e.status = a("<span class='ui-collapsible-heading-status'></span>"),
                e.anchor = e.heading.detach().addClass("ui-collapsible-heading").append(e.status).wrapInner("<a href='#' class='ui-collapsible-heading-toggle'></a>").find("a").first().addClass("ui-btn " + (f ? f + " " : "") + (f ? d(g.iconpos) + " " : "") + this._themeClassFromOption("ui-btn-", g.theme) + " " + (g.mini ? "ui-mini " : "")),
                e.heading.insertBefore(e.content),
                this._handleExpandCollapse(this.options.collapsed),
                e
            },
            refresh: function() {
                this._applyOptions(this.options);
                this._renderedOptions = this._getOptions(this.options)
            },
            _applyOptions: function(a) {
                var e, l, g, k, j = this.element, q = this._renderedOptions, p = this._ui, s = p.anchor;
                k = p.status;
                var r = this._getOptions(a);
                a.collapsed !== f && this._handleExpandCollapse(a.collapsed);
                (a = j.hasClass("ui-collapsible-collapsed")) ? r.expandCueText !== f && k.text(r.expandCueText) : r.collapseCueText !== f && k.text(r.collapseCueText);
                k = r.collapsedIcon !== 
                f ? r.collapsedIcon !== !1 : q.collapsedIcon !== !1;
                (r.iconpos !== f || r.collapsedIcon !== f || r.expandedIcon !== f) && (s.removeClass([d(q.iconpos)].concat(q.expandedIcon ? ["ui-icon-" + q.expandedIcon] : []).concat(q.collapsedIcon ? ["ui-icon-" + q.collapsedIcon] : []).join(" ")),
                k && s.addClass([d(r.iconpos !== f ? r.iconpos : q.iconpos)].concat(a ? ["ui-icon-" + (r.collapsedIcon !== f ? r.collapsedIcon : q.collapsedIcon)] : ["ui-icon-" + (r.expandedIcon !== f ? r.expandedIcon : q.expandedIcon)]).join(" ")));
                r.theme !== f && (l = this._themeClassFromOption("ui-btn-", 
                q.theme),
                e = this._themeClassFromOption("ui-btn-", r.theme),
                s.removeClass(l).addClass(e));
                r.contentTheme !== f && (l = this._themeClassFromOption("ui-body-", q.contentTheme),
                e = this._themeClassFromOption("ui-body-", r.contentTheme),
                p.content.removeClass(l).addClass(e));
                r.inset !== f && (j.toggleClass("ui-collapsible-inset", r.inset),
                g = !(!r.inset || !r.corners && !q.corners));
                r.corners !== f && (g = !(!r.corners || !r.inset && !q.inset));
                g !== f && j.toggleClass("ui-corner-all", g);
                r.mini !== f && s.toggleClass("ui-mini", r.mini)
            },
            _setOptions: function(a) {
                this._applyOptions(a);
                this._super(a);
                this._renderedOptions = this._getOptions(this.options)
            },
            _handleExpandCollapse: function(b) {
                var d = this._renderedOptions
                  , e = this._ui;
                e.status.text(b ? d.expandCueText : d.collapseCueText);
                e.heading.toggleClass("ui-collapsible-heading-collapsed", b).find("a").first().toggleClass("ui-icon-" + d.expandedIcon, !b).toggleClass("ui-icon-" + d.collapsedIcon, b || d.expandedIcon === d.collapsedIcon).removeClass(a.mobile.activeBtnClass);
                this.element.toggleClass("ui-collapsible-collapsed", b);
                e.content.toggleClass("ui-collapsible-content-collapsed", 
                b).attr("aria-hidden", b).trigger("updatelayout");
                this.options.collapsed = b;
                this._trigger(b ? "collapse" : "expand")
            },
            expand: function() {
                this._handleExpandCollapse(!1)
            },
            collapse: function() {
                this._handleExpandCollapse(!0)
            },
            _destroy: function() {
                var a = this._ui;
                this.options.enhanced || (a.placeholder ? (a.originalHeading.insertBefore(a.placeholder),
                a.placeholder.remove(),
                a.heading.remove()) : (a.status.remove(),
                a.heading.removeClass("ui-collapsible-heading ui-collapsible-heading-collapsed").children().contents().unwrap()),
                a.anchor.contents().unwrap(),
                a.content.contents().unwrap(),
                this.element.removeClass("ui-collapsible ui-collapsible-collapsed ui-collapsible-themed-content ui-collapsible-inset ui-corner-all"))
            }
        });
        a.mobile.collapsible.defaults = {
            expandCueText: " click to expand contents",
            collapseCueText: " click to collapse contents",
            collapsedIcon: "plus",
            contentTheme: "inherit",
            expandedIcon: "minus",
            iconpos: "left",
            inset: !0,
            corners: !0,
            theme: "inherit",
            mini: !1
        }
    }
    )(j);
    (function(a) {
        function f(d) {
            var b, h = d.length, f = [];
            for (b = 0; h > 
            b; b++)
                d[b].className.match(e) || f.push(d[b]);
            return a(f)
        }
        var e = /\bui-screen-hidden\b/;
        a.mobile.behaviors.addFirstLastClasses = {
            _getVisibles: function(a, b) {
                var e;
                return b ? e = f(a) : (e = a.filter(":visible"),
                0 === e.length && (e = f(a))),
                e
            },
            _addFirstLastClasses: function(a, b, e) {
                a.removeClass("ui-first-child ui-last-child");
                b.eq(0).addClass("ui-first-child").end().last().addClass("ui-last-child");
                e || this.element.trigger("updatelayout")
            },
            _removeFirstLastClasses: function(a) {
                a.removeClass("ui-first-child ui-last-child")
            }
        }
    }
    )(j);
    (function(a, f) {
        var e = ":mobile-collapsible, " + a.mobile.collapsible.initSelector;
        a.widget("mobile.collapsibleset", a.extend({
            initSelector: ":jqmData(role='collapsible-set'),:jqmData(role='collapsibleset')",
            options: a.extend({
                enhanced: !1
            }, a.mobile.collapsible.defaults),
            _handleCollapsibleExpand: function(d) {
                d = a(d.target).closest(".ui-collapsible");
                d.parent().is(":mobile-collapsibleset, :jqmData(role='collapsible-set')") && d.siblings(".ui-collapsible:not(.ui-collapsible-collapsed)").collapsible("collapse")
            },
            _create: function() {
                var d = this.element
                  , b = this.options;
                a.extend(this, {
                    _classes: ""
                });
                b.enhanced || (d.addClass("ui-collapsible-set " + this._themeClassFromOption("ui-group-theme-", b.theme) + " " + (b.corners && b.inset ? "ui-corner-all " : "")),
                this.element.find(a.mobile.collapsible.initSelector).collapsible());
                this._on(d, {
                    collapsibleexpand: "_handleCollapsibleExpand"
                })
            },
            _themeClassFromOption: function(a, b) {
                return b ? "none" === b ? "" : a + b : ""
            },
            _init: function() {
                this._refresh(!0);
                this.element.children(e).filter(":jqmData(collapsed='false')").collapsible("expand")
            },
            _setOptions: function(a) {
                var b, e, l = this.element, g = this._themeClassFromOption("ui-group-theme-", a.theme);
                return g && l.removeClass(this._themeClassFromOption("ui-group-theme-", this.options.theme)).addClass(g),
                a.inset !== f && (e = !(!a.inset || !a.corners && !this.options.corners)),
                a.corners !== f && (e = !(!a.corners || !a.inset && !this.options.inset)),
                e !== f && l.toggleClass("ui-corner-all", e),
                b = this._super(a),
                this.element.children(":mobile-collapsible").collapsible("refresh"),
                b
            },
            _destroy: function() {
                var a = this.element;
                this._removeFirstLastClasses(a.children(e));
                a.removeClass("ui-collapsible-set ui-corner-all " + this._themeClassFromOption("ui-group-theme-", this.options.theme)).children(":mobile-collapsible").collapsible("destroy")
            },
            _refresh: function(d) {
                var b = this.element.children(e);
                this.element.find(a.mobile.collapsible.initSelector).not(".ui-collapsible").collapsible();
                this._addFirstLastClasses(b, this._getVisibles(b, d), d)
            },
            refresh: function() {
                this._refresh(!1)
            }
        }, a.mobile.behaviors.addFirstLastClasses))
    }
    )(j);
    (function(a) {
        a.fn.fieldcontain = function() {
            return this.addClass("ui-field-contain")
        }
    }
    )(j);
    (function(a) {
        a.fn.grid = function(f) {
            return this.each(function() {
                var e, d = a(this), b = a.extend({
                    grid: null 
                }, f), h = d.children(), l = {
                    solo: 1,
                    a: 2,
                    b: 3,
                    c: 4,
                    d: 5
                };
                b = b.grid;
                if (!b)
                    if (h.length <= 5)
                        for (e in l)
                            l[e] === h.length && (b = e);
                    else
                        b = "a",
                        d.addClass("ui-grid-duo");
                e = l[b];
                d.addClass("ui-grid-" + b);
                h.filter(":nth-child(" + e + "n+1)").addClass("ui-block-a");
                e > 1 && h.filter(":nth-child(" + e + "n+2)").addClass("ui-block-b");
                e > 2 && h.filter(":nth-child(" + e + "n+3)").addClass("ui-block-c");
                e > 3 && h.filter(":nth-child(" + e + "n+4)").addClass("ui-block-d");
                e > 4 && h.filter(":nth-child(" + e + "n+5)").addClass("ui-block-e")
            }
            )
        }
    }
    )(j);
    (function(a, f) {
        a.widget("mobile.navbar", {
            options: {
                iconpos: "top",
                grid: null 
            },
            _create: function() {
                var e = this.element
                  , d = e.find("a, button")
                  , b = d.filter(":jqmData(icon)").length ? this.options.iconpos : f;
                e.addClass("ui-navbar").attr("role", "navigation").find("ul").jqmEnhanceable().grid({
                    grid: this.options.grid
                });
                d.each(function() {
                    var d = a.mobile.getAttribute(this, "icon")
                      , e = a.mobile.getAttribute(this, "theme")
                      , f = "ui-btn";
                    e && (f += " ui-btn-" + e);
                    d && (f += " ui-icon-" + d + " ui-btn-icon-" + b);
                    a(this).addClass(f)
                }
                );
                e.delegate("a", "vclick", function() {
                    var b = a(this);
                    b.hasClass("ui-state-disabled") || b.hasClass("ui-disabled") || b.hasClass(a.mobile.activeBtnClass) || (d.removeClass(a.mobile.activeBtnClass),
                    b.addClass(a.mobile.activeBtnClass),
                    a(k).one("pagehide", function() {
                        b.removeClass(a.mobile.activeBtnClass)
                    }
                    ))
                }
                );
                e.closest(".ui-page").bind("pagebeforeshow", function() {
                    d.filter(".ui-state-persist").addClass(a.mobile.activeBtnClass)
                }
                )
            }
        })
    }
    )(j);
    (function(a) {
        var f = 
        a.mobile.getAttribute;
        a.widget("mobile.listview", a.extend({
            options: {
                theme: null ,
                countTheme: null ,
                dividerTheme: null ,
                icon: "carat-r",
                splitIcon: "carat-r",
                splitTheme: null ,
                corners: !0,
                shadow: !0,
                inset: !1
            },
            _create: function() {
                var a = "";
                a += this.options.inset ? " ui-listview-inset" : "";
                this.options.inset && (a += this.options.corners ? " ui-corner-all" : "",
                a += this.options.shadow ? " ui-shadow" : "");
                this.element.addClass(" ui-listview" + a);
                this.refresh(!0)
            },
            _findFirstElementByTagName: function(a, d, b, h) {
                var f = {};
                for (f[b] = f[h] = !0; a; ) {
                    if (f[a.nodeName])
                        return a;
                    a = a[d]
                }
                return null 
            },
            _addThumbClasses: function(e) {
                var d, b, h = e.length;
                for (d = 0; h > d; d++)
                    b = a(this._findFirstElementByTagName(e[d].firstChild, "nextSibling", "img", "IMG")),
                    b.length && a(this._findFirstElementByTagName(b[0].parentNode, "parentNode", "li", "LI")).addClass(b.hasClass("ui-li-icon") ? "ui-li-has-icon" : "ui-li-has-thumb")
            },
            _getChildrenByTagName: function(e, d, b) {
                var h = []
                  , f = {};
                f[d] = f[b] = !0;
                for (e = e.firstChild; e; )
                    f[e.nodeName] && h.push(e),
                    e = e.nextSibling;
                return a(h)
            },
            _beforeListviewRefresh: a.noop,
            _afterListviewRefresh: a.noop,
            refresh: function(e) {
                var d, b, h, l, g, k, j, q, p, s, r, t, w, z, C, G, D, E, N, H = this.options;
                h = this.element;
                var L = !!a.nodeName(h[0], "ol");
                l = h.attr("start");
                var F = {}
                  , X = h.find(".ui-li-count")
                  , O = f(h[0], "counttheme") || this.options.countTheme;
                O = O ? "ui-body-" + O : "ui-body-inherit";
                H.theme && h.addClass("ui-group-theme-" + H.theme);
                L && (l || 0 === l) && (b = parseInt(l, 10) - 1,
                h.css("counter-reset", "listnumbering " + b));
                this._beforeListviewRefresh();
                N = this._getChildrenByTagName(h[0], "li", "LI");
                b = 0;
                for (h = N.length; h > b; b++)
                    l = N.eq(b),
                    g = "",
                    (e || 
                    l[0].className.search(/\bui-li-static\b|\bui-li-divider\b/) < 0) && (p = this._getChildrenByTagName(l[0], "a", "A"),
                    s = "list-divider" === f(l[0], "role"),
                    t = l.attr("value"),
                    k = f(l[0], "theme"),
                    p.length && p[0].className.search(/\bui-btn\b/) < 0 && !s ? (j = f(l[0], "icon"),
                    q = j === !1 ? !1 : j || H.icon,
                    p.removeClass("ui-link"),
                    d = "ui-btn",
                    k && (d += " ui-btn-" + k),
                    p.length > 1 ? (g = "ui-li-has-alt",
                    w = p.last(),
                    z = f(w[0], "theme") || H.splitTheme || f(l[0], "theme", !0),
                    C = z ? " ui-btn-" + z : "",
                    G = f(w[0], "icon") || f(l[0], "icon") || H.splitIcon,
                    D = "ui-btn ui-btn-icon-notext ui-icon-" + 
                    G + C,
                    w.attr("title", a.trim(w.getEncodedText())).addClass(D).empty(),
                    p = p.first()) : q && (d += " ui-btn-icon-right ui-icon-" + q),
                    p.addClass(d)) : s ? (E = f(l[0], "theme") || H.dividerTheme || H.theme,
                    g = "ui-li-divider ui-bar-" + (E ? E : "inherit"),
                    l.attr("role", "heading")) : p.length <= 0 && (g = "ui-li-static ui-body-" + (k ? k : "inherit")),
                    L && t && (r = parseInt(t, 10) - 1,
                    l.css("counter-reset", "listnumbering " + r))),
                    F[g] || (F[g] = []),
                    F[g].push(l[0]);
                for (g in F)
                    a(F[g]).addClass(g);
                X.each(function() {
                    a(this).closest("li").addClass("ui-li-has-count")
                }
                );
                O && X.not("[class*='ui-body-']").addClass(O);
                this._addThumbClasses(N);
                this._addThumbClasses(N.find(".ui-btn"));
                this._afterListviewRefresh();
                this._addFirstLastClasses(N, this._getVisibles(N, e), e)
            }
        }, a.mobile.behaviors.addFirstLastClasses))
    }
    )(j);
    (function(a) {
        a.widget("mobile.listview", a.mobile.listview, {
            options: {
                autodividers: !1,
                autodividersSelector: function(f) {
                    return (f = a.trim(f.text()) || null ) ? f.slice(0, 1).toUpperCase() : null 
                }
            },
            _beforeListviewRefresh: function() {
                this.options.autodividers && (this._replaceDividers(),
                this._superApply(arguments))
            },
            _replaceDividers: function() {
                var f, e, d, b, h, l = null ;
                f = this.element;
                f.children("li:jqmData(role='list-divider')").remove();
                e = f.children("li");
                for (f = 0; f < e.length; f++)
                    d = e[f],
                    (b = this.options.autodividersSelector(a(d))) && l !== b && (h = k.createElement("li"),
                    h.appendChild(k.createTextNode(b)),
                    h.setAttribute("data-" + a.mobile.ns + "role", "list-divider"),
                    d.parentNode.insertBefore(h, d)),
                    l = b
            }
        })
    }
    )(j);
    (function(a) {
        var f = /(^|\s)ui-li-divider($|\s)/
          , e = /(^|\s)ui-screen-hidden($|\s)/;
        a.widget("mobile.listview", 
        a.mobile.listview, {
            options: {
                hideDividers: !1
            },
            _afterListviewRefresh: function() {
                var a, b, h, l = !0;
                if (this._superApply(arguments),
                this.options.hideDividers) {
                    a = this._getChildrenByTagName(this.element[0], "li", "LI");
                    for (b = a.length - 1; b > -1; b--)
                        h = a[b],
                        h.className.match(f) ? (l && (h.className += " ui-screen-hidden"),
                        l = !0) : h.className.match(e) || (l = !1)
                }
            }
        })
    }
    )(j);
    (function(a) {
        a.mobile.nojs = function(f) {
            a(":jqmData(role='nojs')", f).addClass("ui-nojs")
        }
    }
    )(j);
    (function(a) {
        a.mobile.behaviors.formReset = {
            _handleFormReset: function() {
                this._on(this.element.closest("form"), 
                {
                    reset: function() {
                        this._delay("_reset")
                    }
                })
            }
        }
    }
    )(j);
    (function(a, f) {
        var e = a.mobile.path.hashToSelector;
        a.widget("mobile.checkboxradio", a.extend({
            initSelector: "input:not( :jqmData(role='flipswitch' ) )[type='checkbox'],input[type='radio']:not( :jqmData(role='flipswitch' ))",
            options: {
                theme: "inherit",
                mini: !1,
                wrapperClass: null ,
                enhanced: !1,
                iconpos: "left"
            },
            _create: function() {
                var d = this.element
                  , b = this.options
                  , e = this.options.enhanced ? {
                    element: this.element.siblings("label"),
                    isParent: !1
                } : this._findLabel()
                  , f = d[0].type
                  , 
                g = "ui-" + f + "-on"
                  , k = "ui-" + f + "-off";
                ("checkbox" === f || "radio" === f) && (this.element[0].disabled && (this.options.disabled = !0),
                b.iconpos = d.jqmData("iconpos") || d.closest("form, fieldset").jqmData("iconpos") || e.element.attr("data-" + a.mobile.ns + "iconpos") || b.iconpos,
                b.mini = d.jqmData("mini") || d.closest("form, fieldset").jqmData("mini") || b.mini,
                a.extend(this, {
                    input: d,
                    label: e.element,
                    labelIsParent: e.isParent,
                    inputtype: f,
                    checkedClass: g,
                    uncheckedClass: k
                }),
                this.options.enhanced || this._enhance(),
                this._on(e.element, 
                {
                    vmouseover: "_handleLabelVMouseOver",
                    vclick: "_handleLabelVClick"
                }),
                this._on(d, {
                    vmousedown: "_cacheVals",
                    vclick: "_handleInputVClick",
                    focus: "_handleInputFocus",
                    blur: "_handleInputBlur"
                }),
                this._handleFormReset(),
                this.refresh())
            },
            _findLabel: function() {
                var d, b, h, f = this.element, g = f[0].labels;
                return g && g.length > 0 ? (b = a(g[0]),
                h = a.contains(b[0], f[0])) : (d = f.closest("label"),
                h = d.length > 0,
                b = h ? d : a(this.document[0].getElementsByTagName("label")).filter("[for='" + e(f[0].id) + "']").first()),
                {
                    element: b,
                    isParent: h
                }
            },
            _enhance: function() {
                this.label.addClass("ui-btn ui-corner-all");
                this.labelIsParent ? this.input.add(this.label).wrapAll(this._wrapper()) : (this.element.wrap(this._wrapper()),
                this.element.parent().prepend(this.label));
                this._setOptions({
                    theme: this.options.theme,
                    iconpos: this.options.iconpos,
                    mini: this.options.mini
                })
            },
            _wrapper: function() {
                return a("<div class='" + (this.options.wrapperClass ? this.options.wrapperClass : "") + " ui-" + this.inputtype + (this.options.disabled ? " ui-state-disabled" : "") + "' ></div>")
            },
            _handleInputFocus: function() {
                this.label.addClass(a.mobile.focusClass)
            },
            _handleInputBlur: function() {
                this.label.removeClass(a.mobile.focusClass)
            },
            _handleInputVClick: function() {
                this.element.prop("checked", this.element.is(":checked"));
                this._getInputSet().not(this.element).prop("checked", !1);
                this._updateAll(!0)
            },
            _handleLabelVMouseOver: function(a) {
                this.label.parent().hasClass("ui-state-disabled") && a.stopPropagation()
            },
            _handleLabelVClick: function(a) {
                var b = this.element;
                return b.is(":disabled") ? void a.preventDefault() : (this._cacheVals(),
                b.prop("checked", "radio" === this.inputtype && 
                !0 || !b.prop("checked")),
                b.triggerHandler("click"),
                this._getInputSet().not(b).prop("checked", !1),
                this._updateAll(),
                !1)
            },
            _cacheVals: function() {
                this._getInputSet().each(function() {
                    a(this).attr("data-" + a.mobile.ns + "cacheVal", this.checked)
                }
                )
            },
            _getInputSet: function() {
                var d, b, h = this.element[0], f = h.name, g = h.form;
                h = this.element.parents().last().get(0);
                var k = this.element;
                return f && "radio" === this.inputtype && h && (d = "input[type='radio'][name='" + e(f) + "']",
                g ? (b = g.getAttribute("id"),
                b && (k = a(d + "[form='" + e(b) + "']", 
                h)),
                k = a(g).find(d).filter(function() {
                    return this.form === g
                }
                ).add(k)) : k = a(d, h).filter(function() {
                    return !this.form
                }
                )),
                k
            },
            _updateAll: function(d) {
                var b = this;
                this._getInputSet().each(function() {
                    var e = a(this);
                    !this.checked && "checkbox" !== b.inputtype || d || e.trigger("change")
                }
                ).checkboxradio("refresh")
            },
            _reset: function() {
                this.refresh()
            },
            _hasIcon: function() {
                var d, b, e = a.mobile.controlgroup;
                return e && (d = this.element.closest(":mobile-controlgroup," + e.prototype.initSelector),
                d.length > 0) ? (b = a.data(d[0], "mobile-controlgroup"),
                "horizontal" !== (b ? b.options.type : d.attr("data-" + a.mobile.ns + "type"))) : !0
            },
            refresh: function() {
                var d = this.element[0].checked
                  , b = a.mobile.activeBtnClass
                  , e = "ui-btn-icon-" + this.options.iconpos
                  , f = []
                  , g = [];
                this._hasIcon() ? (g.push(b),
                f.push(e)) : (g.push(e),
                (d ? f : g).push(b));
                d ? (f.push(this.checkedClass),
                g.push(this.uncheckedClass)) : (f.push(this.uncheckedClass),
                g.push(this.checkedClass));
                this.widget().toggleClass("ui-state-disabled", this.element.prop("disabled"));
                this.label.addClass(f.join(" ")).removeClass(g.join(" "))
            },
            widget: function() {
                return this.label.parent()
            },
            _setOptions: function(a) {
                var b = this.label
                  , e = this.options
                  , l = this.widget()
                  , g = this._hasIcon();
                a.disabled !== f && (this.input.prop("disabled", !!a.disabled),
                l.toggleClass("ui-state-disabled", !!a.disabled));
                a.mini !== f && l.toggleClass("ui-mini", !!a.mini);
                a.theme !== f && b.removeClass("ui-btn-" + e.theme).addClass("ui-btn-" + a.theme);
                a.wrapperClass !== f && l.removeClass(e.wrapperClass).addClass(a.wrapperClass);
                a.iconpos !== f && g ? b.removeClass("ui-btn-icon-" + e.iconpos).addClass("ui-btn-icon-" + 
                a.iconpos) : g || b.removeClass("ui-btn-icon-" + e.iconpos);
                this._super(a)
            }
        }, a.mobile.behaviors.formReset))
    }
    )(j);
    (function(a, f) {
        a.widget("mobile.button", {
            initSelector: "input[type='button'], input[type='submit'], input[type='reset']",
            options: {
                theme: null ,
                icon: null ,
                iconpos: "left",
                iconshadow: !1,
                corners: !0,
                shadow: !0,
                inline: null ,
                mini: null ,
                wrapperClass: null ,
                enhanced: !1
            },
            _create: function() {
                this.element.is(":disabled") && (this.options.disabled = !0);
                this.options.enhanced || this._enhance();
                a.extend(this, {
                    wrapper: this.element.parent()
                });
                this._on({
                    focus: function() {
                        this.widget().addClass(a.mobile.focusClass)
                    },
                    blur: function() {
                        this.widget().removeClass(a.mobile.focusClass)
                    }
                });
                this.refresh(!0)
            },
            _enhance: function() {
                this.element.wrap(this._button())
            },
            _button: function() {
                var e = this.options
                  , d = this._getIconClasses(this.options);
                return a("<div class='ui-btn ui-input-btn" + (e.wrapperClass ? " " + e.wrapperClass : "") + (e.theme ? " ui-btn-" + e.theme : "") + (e.corners ? " ui-corner-all" : "") + (e.shadow ? " ui-shadow" : "") + (e.inline ? " ui-btn-inline" : "") + (e.mini ? " ui-mini" : 
                "") + (e.disabled ? " ui-state-disabled" : "") + (d ? " " + d : "") + "' >" + this.element.val() + "</div>")
            },
            widget: function() {
                return this.wrapper
            },
            _destroy: function() {
                this.element.insertBefore(this.wrapper);
                this.wrapper.remove()
            },
            _getIconClasses: function(a) {
                return a.icon ? "ui-icon-" + a.icon + (a.iconshadow ? " ui-shadow-icon" : "") + " ui-btn-icon-" + a.iconpos : ""
            },
            _setOptions: function(e) {
                var d = this.widget();
                e.theme !== f && d.removeClass(this.options.theme).addClass("ui-btn-" + e.theme);
                e.corners !== f && d.toggleClass("ui-corner-all", 
                e.corners);
                e.shadow !== f && d.toggleClass("ui-shadow", e.shadow);
                e.inline !== f && d.toggleClass("ui-btn-inline", e.inline);
                e.mini !== f && d.toggleClass("ui-mini", e.mini);
                e.disabled !== f && (this.element.prop("disabled", e.disabled),
                d.toggleClass("ui-state-disabled", e.disabled));
                (e.icon !== f || e.iconshadow !== f || e.iconpos !== f) && d.removeClass(this._getIconClasses(this.options)).addClass(this._getIconClasses(a.extend({}, this.options, e)));
                this._super(e)
            },
            refresh: function(e) {
                var d, b = this.element.prop("disabled");
                this.options.icon && 
                "notext" === this.options.iconpos && this.element.attr("title") && this.element.attr("title", this.element.val());
                e || (d = this.element.detach(),
                a(this.wrapper).text(this.element.val()).append(d));
                this.options.disabled !== b && this._setOptions({
                    disabled: b
                })
            }
        })
    }
    )(j);
    (function(a) {
        var f = a("meta[name=viewport]")
          , e = f.attr("content")
          , d = e + ",maximum-scale=1, user-scalable=no"
          , b = e + ",maximum-scale=10, user-scalable=yes"
          , h = /(user-scalable[\s]*=[\s]*no)|(maximum-scale[\s]*=[\s]*1)[$,\s]/.test(e);
        a.mobile.zoom = a.extend({}, 
        {
            enabled: !h,
            locked: !1,
            disable: function(b) {
                h || a.mobile.zoom.locked || (f.attr("content", d),
                a.mobile.zoom.enabled = !1,
                a.mobile.zoom.locked = b || !1)
            },
            enable: function(d) {
                h || a.mobile.zoom.locked && d !== !0 || (f.attr("content", b),
                a.mobile.zoom.enabled = !0,
                a.mobile.zoom.locked = !1)
            },
            restore: function() {
                h || (f.attr("content", e),
                a.mobile.zoom.enabled = !0)
            }
        })
    }
    )(j);
    (function(a, f) {
        a.widget("mobile.textinput", {
            initSelector: "input[type='text'],input[type='search'],:jqmData(type='search'),input[type='number'],:jqmData(type='number'),input[type='password'],input[type='email'],input[type='url'],input[type='tel'],textarea,input[type='time'],input[type='date'],input[type='month'],input[type='week'],input[type='datetime'],input[type='datetime-local'],input[type='color'],input:not([type]),input[type='file']",
            options: {
                theme: null ,
                corners: !0,
                mini: !1,
                preventFocusZoom: /iPhone|iPad|iPod/.test(navigator.platform) && navigator.userAgent.indexOf("AppleWebKit") > -1,
                wrapperClass: "",
                enhanced: !1
            },
            _create: function() {
                var e = this.options
                  , d = this.element.is("[type='search'], :jqmData(type='search')")
                  , b = "TEXTAREA" === this.element[0].tagName
                  , h = this.element.is("[data-" + (a.mobile.ns || "") + "type='range']")
                  , f = (this.element.is("input") || this.element.is("[data-" + (a.mobile.ns || "") + "type='search']")) && !h;
                this.element.prop("disabled") && 
                (e.disabled = !0);
                a.extend(this, {
                    classes: this._classesFromOptions(),
                    isSearch: d,
                    isTextarea: b,
                    isRange: h,
                    inputNeedsWrap: f
                });
                this._autoCorrect();
                e.enhanced || this._enhance();
                this._on({
                    focus: "_handleFocus",
                    blur: "_handleBlur"
                })
            },
            refresh: function() {
                this.setOptions({
                    disabled: this.element.is(":disabled")
                })
            },
            _enhance: function() {
                var a = [];
                this.isTextarea && a.push("ui-input-text");
                (this.isTextarea || this.isRange) && a.push("ui-shadow-inset");
                this.inputNeedsWrap ? this.element.wrap(this._wrap()) : a = a.concat(this.classes);
                this.element.addClass(a.join(" "))
            },
            widget: function() {
                return this.inputNeedsWrap ? this.element.parent() : this.element
            },
            _classesFromOptions: function() {
                var a = this.options
                  , d = [];
                return d.push("ui-body-" + (null  === a.theme ? "inherit" : a.theme)),
                a.corners && d.push("ui-corner-all"),
                a.mini && d.push("ui-mini"),
                a.disabled && d.push("ui-state-disabled"),
                a.wrapperClass && d.push(a.wrapperClass),
                d
            },
            _wrap: function() {
                return a("<div class='" + (this.isSearch ? "ui-input-search " : "ui-input-text ") + this.classes.join(" ") + " ui-shadow-inset'></div>")
            },
            _autoCorrect: function() {
                "undefined" == typeof this.element[0].autocorrect || a.support.touchOverflow || (this.element[0].setAttribute("autocorrect", "off"),
                this.element[0].setAttribute("autocomplete", "off"))
            },
            _handleBlur: function() {
                this.widget().removeClass(a.mobile.focusClass);
                this.options.preventFocusZoom && a.mobile.zoom.enable(!0)
            },
            _handleFocus: function() {
                this.options.preventFocusZoom && a.mobile.zoom.disable(!0);
                this.widget().addClass(a.mobile.focusClass)
            },
            _setOptions: function(a) {
                var d = this.widget();
                this._super(a);
                (a.disabled !== f || a.mini !== f || a.corners !== f || a.theme !== f || a.wrapperClass !== f) && (d.removeClass(this.classes.join(" ")),
                this.classes = this._classesFromOptions(),
                d.addClass(this.classes.join(" ")));
                a.disabled !== f && this.element.prop("disabled", !!a.disabled)
            },
            _destroy: function() {
                this.options.enhanced || (this.inputNeedsWrap && this.element.unwrap(),
                this.element.removeClass("ui-input-text " + this.classes.join(" ")))
            }
        })
    }
    )(j);
    (function(a, f) {
        a.widget("mobile.slider", a.extend({
            initSelector: "input[type='range'], :jqmData(type='range'), :jqmData(role='slider')",
            widgetEventPrefix: "slide",
            options: {
                theme: null ,
                trackTheme: null ,
                corners: !0,
                mini: !1,
                highlight: !1
            },
            _create: function() {
                var e, d, b, h, l, j, v, o = this.element, q = this.options.trackTheme || a.mobile.getAttribute(o[0], "theme");
                b = q ? " ui-bar-" + q : " ui-bar-inherit";
                h = this.options.corners || o.jqmData("corners") ? " ui-corner-all" : "";
                l = this.options.mini || o.jqmData("mini") ? " ui-mini" : "";
                j = o[0].nodeName.toLowerCase();
                q = "select" === j;
                var p = o.parent().is(":jqmData(role='rangeslider')");
                v = q ? "ui-slider-switch" : "";
                e = o.attr("id");
                var s = a("[for='" + e + "']")
                  , r = s.attr("id") || e + "-label"
                  , t = q ? 0 : parseFloat(o.attr("min"))
                  , w = q ? o.find("option").length - 1 : parseFloat(o.attr("max"))
                  , z = g.parseFloat(o.attr("step") || 1)
                  , C = k.createElement("a")
                  , G = a(C);
                e = k.createElement("div");
                var D = a(e)
                  , E = this.options.highlight && !q ? function() {
                    var b = k.createElement("div");
                    return b.className = "ui-slider-bg " + a.mobile.activeBtnClass,
                    a(b).prependTo(D)
                }
                () : !1;
                if (s.attr("id", r),
                this.isToggleSwitch = q,
                C.setAttribute("href", "#"),
                e.setAttribute("role", "application"),
                e.className = 
                [this.isToggleSwitch ? "ui-slider ui-slider-track ui-shadow-inset " : "ui-slider-track ui-shadow-inset ", v, b, h, l].join(""),
                C.className = "ui-slider-handle",
                e.appendChild(C),
                G.attr({
                    role: "slider",
                    "aria-valuemin": t,
                    "aria-valuemax": w,
                    "aria-valuenow": this._value(),
                    "aria-valuetext": this._value(),
                    title: this._value(),
                    "aria-labelledby": r
                }),
                a.extend(this, {
                    slider: D,
                    handle: G,
                    control: o,
                    type: j,
                    step: z,
                    max: w,
                    min: t,
                    valuebg: E,
                    isRangeslider: p,
                    dragging: !1,
                    beforeStart: null ,
                    userModified: !1,
                    mouseMoved: !1
                }),
                q) {
                    (d = o.attr("tabindex")) && 
                    G.attr("tabindex", d);
                    o.attr("tabindex", "-1").focus(function() {
                        a(this).blur();
                        G.focus()
                    }
                    );
                    d = k.createElement("div");
                    d.className = "ui-slider-inneroffset";
                    b = 0;
                    for (h = e.childNodes.length; h > b; b++)
                        d.appendChild(e.childNodes[b]);
                    e.appendChild(d);
                    G.addClass("ui-slider-handle-snapping");
                    e = o.find("option");
                    b = 0;
                    for (h = e.length; h > b; b++)
                        l = b ? "a" : "b",
                        j = b ? " " + a.mobile.activeBtnClass : "",
                        v = k.createElement("span"),
                        v.className = ["ui-slider-label ui-slider-label-", l, j].join(""),
                        v.setAttribute("role", "img"),
                        v.appendChild(k.createTextNode(e[b].innerHTML)),
                        a(v).prependTo(D);
                    this._labels = a(".ui-slider-label", D)
                }
                o.addClass(q ? "ui-slider-switch" : "ui-slider-input");
                this._on(o, {
                    change: "_controlChange",
                    keyup: "_controlKeyup",
                    blur: "_controlBlur",
                    vmouseup: "_controlVMouseUp"
                });
                D.bind("vmousedown", a.proxy(this._sliderVMouseDown, this)).bind("vclick", !1);
                this._on(k, {
                    vmousemove: "_preventDocumentDrag"
                });
                this._on(D.add(k), {
                    vmouseup: "_sliderVMouseUp"
                });
                D.insertAfter(o);
                q || p || (d = this.options.mini ? "<div class='ui-slider ui-mini'>" : "<div class='ui-slider'>",
                o.add(D).wrapAll(d));
                this._on(this.handle, {
                    vmousedown: "_handleVMouseDown",
                    keydown: "_handleKeydown",
                    keyup: "_handleKeyup"
                });
                this.handle.bind("vclick", !1);
                this._handleFormReset();
                this.refresh(f, f, !0)
            },
            _setOptions: function(a) {
                a.theme !== f && this._setTheme(a.theme);
                a.trackTheme !== f && this._setTrackTheme(a.trackTheme);
                a.corners !== f && this._setCorners(a.corners);
                a.mini !== f && this._setMini(a.mini);
                a.highlight !== f && this._setHighlight(a.highlight);
                a.disabled !== f && this._setDisabled(a.disabled);
                this._super(a)
            },
            _controlChange: function(a) {
                return this._trigger("controlchange", 
                a) === !1 ? !1 : void (this.mouseMoved || this.refresh(this._value(), !0))
            },
            _controlKeyup: function() {
                this.refresh(this._value(), !0, !0)
            },
            _controlBlur: function() {
                this.refresh(this._value(), !0)
            },
            _controlVMouseUp: function() {
                this._checkedRefresh()
            },
            _handleVMouseDown: function() {
                this.handle.focus()
            },
            _handleKeydown: function(e) {
                var d = this._value();
                if (!this.options.disabled) {
                    switch (e.keyCode) {
                    case a.mobile.keyCode.HOME:
                    case a.mobile.keyCode.END:
                    case a.mobile.keyCode.PAGE_UP:
                    case a.mobile.keyCode.PAGE_DOWN:
                    case a.mobile.keyCode.UP:
                    case a.mobile.keyCode.RIGHT:
                    case a.mobile.keyCode.DOWN:
                    case a.mobile.keyCode.LEFT:
                        e.preventDefault(),
                        this._keySliding || (this._keySliding = !0,
                        this.handle.addClass("ui-state-active"))
                    }
                    switch (e.keyCode) {
                    case a.mobile.keyCode.HOME:
                        this.refresh(this.min);
                        break;
                    case a.mobile.keyCode.END:
                        this.refresh(this.max);
                        break;
                    case a.mobile.keyCode.PAGE_UP:
                    case a.mobile.keyCode.UP:
                    case a.mobile.keyCode.RIGHT:
                        this.refresh(d + this.step);
                        break;
                    case a.mobile.keyCode.PAGE_DOWN:
                    case a.mobile.keyCode.DOWN:
                    case a.mobile.keyCode.LEFT:
                        this.refresh(d - this.step)
                    }
                }
            },
            _handleKeyup: function() {
                this._keySliding && (this._keySliding = !1,
                this.handle.removeClass("ui-state-active"))
            },
            _sliderVMouseDown: function(a) {
                return this.options.disabled || 1 !== a.which && 0 !== a.which && a.which !== f ? !1 : this._trigger("beforestart", a) === !1 ? !1 : (this.dragging = !0,
                this.userModified = !1,
                this.mouseMoved = !1,
                this.isToggleSwitch && (this.beforeStart = this.element[0].selectedIndex),
                this.refresh(a),
                this._trigger("start"),
                !1)
            },
            _sliderVMouseUp: function() {
                return this.dragging ? (this.dragging = !1,
                this.isToggleSwitch && (this.handle.addClass("ui-slider-handle-snapping"),
                this.refresh(this.mouseMoved ? 
                this.userModified ? 0 === this.beforeStart ? 1 : 0 : this.beforeStart : 0 === this.beforeStart ? 1 : 0)),
                this.mouseMoved = !1,
                this._trigger("stop"),
                !1) : void 0
            },
            _preventDocumentDrag: function(a) {
                return this._trigger("drag", a) === !1 ? !1 : this.dragging && !this.options.disabled ? (this.mouseMoved = !0,
                this.isToggleSwitch && this.handle.removeClass("ui-slider-handle-snapping"),
                this.refresh(a),
                this.userModified = this.beforeStart !== this.element[0].selectedIndex,
                !1) : void 0
            },
            _checkedRefresh: function() {
                this.value !== this._value() && this.refresh(this._value())
            },
            _value: function() {
                return this.isToggleSwitch ? this.element[0].selectedIndex : parseFloat(this.element.val())
            },
            _reset: function() {
                this.refresh(f, !1, !0)
            },
            refresh: function(e, d, b) {
                var h, f, g, j, o, q, p, s, r, t, w, z, C, G, D, E, N, H = this;
                s = a.mobile.getAttribute(this.element[0], "theme");
                r = (r = this.options.theme || s) ? " ui-btn-" + r : "";
                s = this.options.trackTheme || s;
                if (H.slider[0].className = [this.isToggleSwitch ? "ui-slider ui-slider-switch ui-slider-track ui-shadow-inset" : "ui-slider-track ui-shadow-inset", s ? " ui-bar-" + s : " ui-bar-inherit", 
                this.options.corners ? " ui-corner-all" : "", this.options.mini ? " ui-mini" : ""].join(""),
                (this.options.disabled || this.element.prop("disabled")) && this.disable(),
                this.value = this._value(),
                this.options.highlight && !this.isToggleSwitch && 0 === this.slider.find(".ui-slider-bg").length && (this.valuebg = function() {
                    var b = k.createElement("div");
                    return b.className = "ui-slider-bg " + a.mobile.activeBtnClass,
                    a(b).prependTo(H.slider)
                }
                ()),
                this.handle.addClass("ui-btn" + r + " ui-shadow"),
                o = this.element,
                q = !this.isToggleSwitch,
                p = q ? 
                [] : o.find("option"),
                s = q ? parseFloat(o.attr("min")) : 0,
                r = q ? parseFloat(o.attr("max")) : p.length - 1,
                t = q && parseFloat(o.attr("step")) > 0 ? parseFloat(o.attr("step")) : 1,
                "object" == typeof e) {
                    if (g = e,
                    h = this.slider.offset().left,
                    f = this.slider.width(),
                    j = f / ((r - s) / t),
                    !this.dragging || g.pageX < h - 8 || g.pageX > h + f + 8)
                        return;
                    h = j > 1 ? (g.pageX - h) / f * 100 : Math.round((g.pageX - h) / f * 100)
                } else
                    null  == e && (e = q ? parseFloat(o.val() || 0) : o[0].selectedIndex),
                    h = (parseFloat(e) - s) / (r - s) * 100;
                if (!isNaN(h) && (w = h / 100 * (r - s) + s,
                z = (w - s) % t,
                C = w - z,
                2 * Math.abs(z) >= 
                t && (C += z > 0 ? t : -t),
                G = 100 / ((r - s) / t),
                w = parseFloat(C.toFixed(5)),
                "undefined" == typeof j && (j = f / ((r - s) / t)),
                j > 1 && q && (h = (w - s) * G * (1 / t)),
                0 > h && (h = 0),
                h > 100 && (h = 100),
                s > w && (w = s),
                w > r && (w = r),
                this.handle.css("left", h + "%"),
                this.handle[0].setAttribute("aria-valuenow", q ? w : p.eq(w).attr("value")),
                this.handle[0].setAttribute("aria-valuetext", q ? w : p.eq(w).getEncodedText()),
                this.handle[0].setAttribute("title", q ? w : p.eq(w).getEncodedText()),
                this.valuebg && this.valuebg.css("width", h + "%"),
                this._labels && (D = this.handle.width() / this.slider.width() * 
                100,
                E = h && D + (100 - D) * h / 100,
                N = 100 === h ? 0 : Math.min(D + 100 - E, 100),
                this._labels.each(function() {
                    var b = a(this).hasClass("ui-slider-label-a");
                    a(this).width((b ? E : N) + "%")
                }
                )),
                !b)) {
                    if (b = !1,
                    q ? (b = parseFloat(o.val()) !== w,
                    o.val(w)) : (b = o[0].selectedIndex !== w,
                    o[0].selectedIndex = w),
                    this._trigger("beforechange", e) === !1)
                        return !1;
                    !d && b && o.trigger("change")
                }
            },
            _setHighlight: function(a) {
                (a = !!a) ? (this.options.highlight = !!a,
                this.refresh()) : this.valuebg && (this.valuebg.remove(),
                this.valuebg = !1)
            },
            _setTheme: function(a) {
                this.handle.removeClass("ui-btn-" + 
                this.options.theme).addClass("ui-btn-" + a);
                a = a ? a : "inherit";
                this.control.removeClass("ui-body-" + (this.options.theme ? this.options.theme : "inherit")).addClass("ui-body-" + a)
            },
            _setTrackTheme: function(a) {
                a = a ? a : "inherit";
                this.slider.removeClass("ui-body-" + (this.options.trackTheme ? this.options.trackTheme : "inherit")).addClass("ui-body-" + a)
            },
            _setMini: function(a) {
                a = !!a;
                this.isToggleSwitch || this.isRangeslider || (this.slider.parent().toggleClass("ui-mini", a),
                this.element.toggleClass("ui-mini", a));
                this.slider.toggleClass("ui-mini", 
                a)
            },
            _setCorners: function(a) {
                this.slider.toggleClass("ui-corner-all", a);
                this.isToggleSwitch || this.control.toggleClass("ui-corner-all", a)
            },
            _setDisabled: function(a) {
                a = !!a;
                this.element.prop("disabled", a);
                this.slider.toggleClass("ui-state-disabled", a).attr("aria-disabled", a);
                this.element.toggleClass("ui-state-disabled", a)
            }
        }, a.mobile.behaviors.formReset))
    }
    )(j);
    (function(a) {
        var f;
        a.widget("mobile.slider", a.mobile.slider, {
            options: {
                popupEnabled: !1,
                showValue: !1
            },
            _create: function() {
                this._super();
                a.extend(this, 
                {
                    _currentValue: null ,
                    _popup: null ,
                    _popupVisible: !1
                });
                this._setOption("popupEnabled", this.options.popupEnabled);
                this._on(this.handle, {
                    vmousedown: "_showPopup"
                });
                this._on(this.slider.add(this.document), {
                    vmouseup: "_hidePopup"
                });
                this._refresh()
            },
            _positionPopup: function() {
                var a = this.handle.offset();
                this._popup.offset({
                    left: a.left + (this.handle.width() - this._popup.width()) / 2,
                    top: a.top - this._popup.outerHeight() - 5
                })
            },
            _setOption: function(e, d) {
                this._super(e, d);
                "showValue" === e ? this.handle.html(d && !this.options.mini ? 
                this._value() : "") : "popupEnabled" === e && d && !this._popup && (this._popup = (f || (f = a("<div></div>", {
                    "class": "ui-slider-popup ui-shadow ui-corner-all"
                })),
                f.clone()).addClass("ui-body-" + (this.options.theme || "a")).hide().insertBefore(this.element))
            },
            refresh: function() {
                this._super.apply(this, arguments);
                this._refresh()
            },
            _refresh: function() {
                var a, d = this.options;
                d.popupEnabled && this.handle.removeAttr("title");
                a = this._value();
                a !== this._currentValue && (this._currentValue = a,
                d.popupEnabled && this._popup && (this._positionPopup(),
                this._popup.html(a)),
                d.showValue && !this.options.mini && this.handle.html(a))
            },
            _showPopup: function() {
                this.options.popupEnabled && !this._popupVisible && (this.handle.html(""),
                this._popup.show(),
                this._positionPopup(),
                this._popupVisible = !0)
            },
            _hidePopup: function() {
                var a = this.options;
                a.popupEnabled && this._popupVisible && (a.showValue && !a.mini && this.handle.html(this._value()),
                this._popup.hide(),
                this._popupVisible = !1)
            }
        })
    }
    )(j);
    (function(a, f) {
        a.widget("mobile.flipswitch", a.extend({
            options: {
                onText: "On",
                offText: "Off",
                theme: null ,
                enhanced: !1,
                wrapperClass: null ,
                corners: !0,
                mini: !1
            },
            _create: function() {
                this.options.enhanced ? a.extend(this, {
                    flipswitch: this.element.parent(),
                    on: this.element.find(".ui-flipswitch-on").eq(0),
                    off: this.element.find(".ui-flipswitch-off").eq(0),
                    type: this.element.get(0).tagName
                }) : this._enhance();
                this._handleFormReset();
                this._originalTabIndex = this.element.attr("tabindex");
                null  != this._originalTabIndex && this.on.attr("tabindex", this._originalTabIndex);
                this.element.attr("tabindex", "-1");
                this._on({
                    focus: "_handleInputFocus"
                });
                this.element.is(":disabled") && this._setOptions({
                    disabled: !0
                });
                this._on(this.flipswitch, {
                    click: "_toggle",
                    swipeleft: "_left",
                    swiperight: "_right"
                });
                this._on(this.on, {
                    keydown: "_keydown"
                });
                this._on({
                    change: "refresh"
                })
            },
            _handleInputFocus: function() {
                this.on.focus()
            },
            widget: function() {
                return this.flipswitch
            },
            _left: function() {
                this.flipswitch.removeClass("ui-flipswitch-active");
                "SELECT" === this.type ? this.element.get(0).selectedIndex = 0 : this.element.prop("checked", !1);
                this.element.trigger("change")
            },
            _right: function() {
                this.flipswitch.addClass("ui-flipswitch-active");
                "SELECT" === this.type ? this.element.get(0).selectedIndex = 1 : this.element.prop("checked", !0);
                this.element.trigger("change")
            },
            _enhance: function() {
                var e = a("<div>")
                  , d = this.options
                  , b = this.element
                  , h = d.theme ? d.theme : "inherit"
                  , f = a("<a></a>", {
                    href: "#"
                })
                  , g = a("<span></span>")
                  , k = b.get(0).tagName
                  , j = "INPUT" === k ? d.onText : b.find("option").eq(1).text()
                  , q = "INPUT" === k ? d.offText : b.find("option").eq(0).text();
                f.addClass("ui-flipswitch-on ui-btn ui-shadow ui-btn-inherit").text(j);
                g.addClass("ui-flipswitch-off").text(q);
                e.addClass("ui-flipswitch ui-shadow-inset ui-bar-" + 
                h + " " + (d.wrapperClass ? d.wrapperClass : "") + " " + (b.is(":checked") || b.find("option").eq(1).is(":selected") ? "ui-flipswitch-active" : "") + (b.is(":disabled") ? " ui-state-disabled" : "") + (d.corners ? " ui-corner-all" : "") + (d.mini ? " ui-mini" : "")).append(f, g);
                b.addClass("ui-flipswitch-input").after(e).appendTo(e);
                a.extend(this, {
                    flipswitch: e,
                    on: f,
                    off: g,
                    type: k
                })
            },
            _reset: function() {
                this.refresh()
            },
            refresh: function() {
                var a, d = this.flipswitch.hasClass("ui-flipswitch-active") ? "_right" : "_left";
                a = "SELECT" === this.type ? this.element.get(0).selectedIndex > 
                0 ? "_right" : "_left" : this.element.prop("checked") ? "_right" : "_left";
                a !== d && this[a]()
            },
            _toggle: function() {
                this[this.flipswitch.hasClass("ui-flipswitch-active") ? "_left" : "_right"]()
            },
            _keydown: function(e) {
                e.which === a.mobile.keyCode.LEFT ? this._left() : e.which === a.mobile.keyCode.RIGHT ? this._right() : e.which === a.mobile.keyCode.SPACE && (this._toggle(),
                e.preventDefault())
            },
            _setOptions: function(a) {
                if (a.theme !== f) {
                    var d = a.theme ? a.theme : "inherit"
                      , b = a.theme ? a.theme : "inherit";
                    this.widget().removeClass("ui-bar-" + d).addClass("ui-bar-" + 
                    b)
                }
                a.onText !== f && this.on.text(a.onText);
                a.offText !== f && this.off.text(a.offText);
                a.disabled !== f && this.widget().toggleClass("ui-state-disabled", a.disabled);
                a.mini !== f && this.widget().toggleClass("ui-mini", a.mini);
                a.corners !== f && this.widget().toggleClass("ui-corner-all", a.corners);
                this._super(a)
            },
            _destroy: function() {
                this.options.enhanced || (null  != this._originalTabIndex ? this.element.attr("tabindex", this._originalTabIndex) : this.element.removeAttr("tabindex"),
                this.on.remove(),
                this.off.remove(),
                this.element.unwrap(),
                this.flipswitch.remove(),
                this.removeClass("ui-flipswitch-input"))
            }
        }, a.mobile.behaviors.formReset))
    }
    )(j);
    (function(a, f) {
        a.widget("mobile.rangeslider", a.extend({
            options: {
                theme: null ,
                trackTheme: null ,
                corners: !0,
                mini: !1,
                highlight: !0
            },
            _create: function() {
                var e = this.element
                  , d = this.options.mini ? "ui-rangeslider ui-mini" : "ui-rangeslider"
                  , b = e.find("input").first()
                  , h = e.find("input").last()
                  , f = e.find("label").first()
                  , g = a.data(b.get(0), "mobile-slider") || a.data(b.slider().get(0), "mobile-slider")
                  , k = a.data(h.get(0), 
                "mobile-slider") || a.data(h.slider().get(0), "mobile-slider")
                  , j = g.slider;
                k = k.slider;
                g = g.handle;
                var q = a("<div class='ui-rangeslider-sliders' />").appendTo(e);
                b.addClass("ui-rangeslider-first");
                h.addClass("ui-rangeslider-last");
                e.addClass(d);
                j.appendTo(q);
                k.appendTo(q);
                f.insertBefore(e);
                g.prependTo(k);
                a.extend(this, {
                    _inputFirst: b,
                    _inputLast: h,
                    _sliderFirst: j,
                    _sliderLast: k,
                    _label: f,
                    _targetVal: null ,
                    _sliderTarget: !1,
                    _sliders: q,
                    _proxy: !1
                });
                this.refresh();
                this._on(this.element.find("input.ui-slider-input"), 
                {
                    slidebeforestart: "_slidebeforestart",
                    slidestop: "_slidestop",
                    slidedrag: "_slidedrag",
                    slidebeforechange: "_change",
                    blur: "_change",
                    keyup: "_change"
                });
                this._on({
                    mousedown: "_change"
                });
                this._on(this.element.closest("form"), {
                    reset: "_handleReset"
                });
                this._on(g, {
                    vmousedown: "_dragFirstHandle"
                })
            },
            _handleReset: function() {
                var a = this;
                setTimeout(function() {
                    a._updateHighlight()
                }
                , 0)
            },
            _dragFirstHandle: function(e) {
                return a.data(this._inputFirst.get(0), "mobile-slider").dragging = !0,
                a.data(this._inputFirst.get(0), "mobile-slider").refresh(e),
                a.data(this._inputFirst.get(0), "mobile-slider")._trigger("start"),
                !1
            },
            _slidedrag: function(e) {
                var d = a(e.target).is(this._inputFirst)
                  , b = d ? this._inputLast : this._inputFirst;
                return this._sliderTarget = !1,
                "first" === this._proxy && d || "last" === this._proxy && !d ? (a.data(b.get(0), "mobile-slider").dragging = !0,
                a.data(b.get(0), "mobile-slider").refresh(e),
                !1) : void 0
            },
            _slidestop: function(e) {
                e = a(e.target).is(this._inputFirst);
                this._proxy = !1;
                this.element.find("input").trigger("vmouseup");
                this._sliderFirst.css("z-index", 
                e ? 1 : "")
            },
            _slidebeforestart: function(e) {
                this._sliderTarget = !1;
                a(e.originalEvent.target).hasClass("ui-slider-track") && (this._sliderTarget = !0,
                this._targetVal = a(e.target).val())
            },
            _setOptions: function(a) {
                a.theme !== f && this._setTheme(a.theme);
                a.trackTheme !== f && this._setTrackTheme(a.trackTheme);
                a.mini !== f && this._setMini(a.mini);
                a.highlight !== f && this._setHighlight(a.highlight);
                a.disabled !== f && this._setDisabled(a.disabled);
                this._super(a);
                this.refresh()
            },
            refresh: function() {
                var a = this.element
                  , d = this.options;
                (this._inputFirst.is(":disabled") || this._inputLast.is(":disabled")) && (this.options.disabled = !0);
                a.find("input").slider({
                    theme: d.theme,
                    trackTheme: d.trackTheme,
                    disabled: d.disabled,
                    corners: d.corners,
                    mini: d.mini,
                    highlight: d.highlight
                }).slider("refresh");
                this._updateHighlight()
            },
            _change: function(e) {
                if ("keyup" === e.type)
                    return this._updateHighlight(),
                    !1;
                var d = this
                  , b = parseFloat(this._inputFirst.val(), 10)
                  , h = parseFloat(this._inputLast.val(), 10)
                  , f = a(e.target).hasClass("ui-rangeslider-first")
                  , g = f ? this._inputFirst : 
                this._inputLast
                  , k = f ? this._inputLast : this._inputFirst;
                if (this._inputFirst.val() > this._inputLast.val() && "mousedown" === e.type && !a(e.target).hasClass("ui-slider-handle"))
                    g.blur();
                else if ("mousedown" === e.type)
                    return;
                return b > h && !this._sliderTarget ? (g.val(f ? h : b).slider("refresh"),
                this._trigger("normalize")) : b > h && (g.val(this._targetVal).slider("refresh"),
                setTimeout(function() {
                    k.val(f ? b : h).slider("refresh");
                    a.data(k.get(0), "mobile-slider").handle.focus();
                    d._sliderFirst.css("z-index", f ? "" : 1);
                    d._trigger("normalize")
                }
                , 
                0),
                this._proxy = f ? "first" : "last"),
                b === h ? (a.data(g.get(0), "mobile-slider").handle.css("z-index", 1),
                a.data(k.get(0), "mobile-slider").handle.css("z-index", 0)) : (a.data(k.get(0), "mobile-slider").handle.css("z-index", ""),
                a.data(g.get(0), "mobile-slider").handle.css("z-index", "")),
                this._updateHighlight(),
                b >= h ? !1 : void 0
            },
            _updateHighlight: function() {
                var e = parseInt(a.data(this._inputFirst.get(0), "mobile-slider").handle.get(0).style.left, 10)
                  , d = parseInt(a.data(this._inputLast.get(0), "mobile-slider").handle.get(0).style.left, 
                10) - e;
                this.element.find(".ui-slider-bg").css({
                    "margin-left": e + "%",
                    width: d + "%"
                })
            },
            _setTheme: function(a) {
                this._inputFirst.slider("option", "theme", a);
                this._inputLast.slider("option", "theme", a)
            },
            _setTrackTheme: function(a) {
                this._inputFirst.slider("option", "trackTheme", a);
                this._inputLast.slider("option", "trackTheme", a)
            },
            _setMini: function(a) {
                this._inputFirst.slider("option", "mini", a);
                this._inputLast.slider("option", "mini", a);
                this.element.toggleClass("ui-mini", !!a)
            },
            _setHighlight: function(a) {
                this._inputFirst.slider("option", 
                "highlight", a);
                this._inputLast.slider("option", "highlight", a)
            },
            _setDisabled: function(a) {
                this._inputFirst.prop("disabled", a);
                this._inputLast.prop("disabled", a)
            },
            _destroy: function() {
                this._label.prependTo(this.element);
                this.element.removeClass("ui-rangeslider ui-mini");
                this._inputFirst.after(this._sliderFirst);
                this._inputLast.after(this._sliderLast);
                this._sliders.remove();
                this.element.find("input").removeClass("ui-rangeslider-first ui-rangeslider-last").slider("destroy")
            }
        }, a.mobile.behaviors.formReset))
    }
    )(j);
    (function(a, f) {
        a.widget("mobile.textinput", a.mobile.textinput, {
            options: {
                clearBtn: !1,
                clearBtnText: "Clear text"
            },
            _create: function() {
                this._super();
                this.isSearch && (this.options.clearBtn = !0);
                this.options.clearBtn && this.inputNeedsWrap && this._addClearBtn()
            },
            clearButton: function() {
                return a("<a href='#' tabindex='-1' aria-hidden='true' class='ui-input-clear ui-btn ui-icon-delete ui-btn-icon-notext ui-corner-all'></a>").attr("title", this.options.clearBtnText).text(this.options.clearBtnText)
            },
            _clearBtnClick: function(a) {
                this.element.val("").focus().trigger("change");
                this._clearBtn.addClass("ui-input-clear-hidden");
                a.preventDefault()
            },
            _addClearBtn: function() {
                this.options.enhanced || this._enhanceClear();
                a.extend(this, {
                    _clearBtn: this.widget().find("a.ui-input-clear")
                });
                this._bindClearEvents();
                this._toggleClear()
            },
            _enhanceClear: function() {
                this.clearButton().appendTo(this.widget());
                this.widget().addClass("ui-input-has-clear")
            },
            _bindClearEvents: function() {
                this._on(this._clearBtn, {
                    click: "_clearBtnClick"
                });
                this._on({
                    keyup: "_toggleClear",
                    change: "_toggleClear",
                    input: "_toggleClear",
                    focus: "_toggleClear",
                    blur: "_toggleClear",
                    cut: "_toggleClear",
                    paste: "_toggleClear"
                })
            },
            _unbindClear: function() {
                this._off(this._clearBtn, "click");
                this._off(this.element, "keyup change input focus blur cut paste")
            },
            _setOptions: function(a) {
                this._super(a);
                a.clearBtn === f || this.element.is("textarea, :jqmData(type='range')") || (a.clearBtn ? this._addClearBtn() : this._destroyClear());
                a.clearBtnText !== f && this._clearBtn !== f && this._clearBtn.text(a.clearBtnText).attr("title", a.clearBtnText)
            },
            _toggleClear: function() {
                this._delay("_toggleClearClass", 
                0)
            },
            _toggleClearClass: function() {
                this._clearBtn.toggleClass("ui-input-clear-hidden", !this.element.val())
            },
            _destroyClear: function() {
                this.widget().removeClass("ui-input-has-clear");
                this._unbindClear();
                this._clearBtn.remove()
            },
            _destroy: function() {
                this._super();
                this.options.clearBtn && this._destroyClear()
            }
        })
    }
    )(j);
    (function(a, f) {
        a.widget("mobile.textinput", a.mobile.textinput, {
            options: {
                autogrow: !0,
                keyupTimeoutBuffer: 100
            },
            _create: function() {
                this._super();
                this.options.autogrow && this.isTextarea && this._autogrow()
            },
            _autogrow: function() {
                this.element.addClass("ui-textinput-autogrow");
                this._on({
                    keyup: "_timeout",
                    change: "_timeout",
                    input: "_timeout",
                    paste: "_timeout"
                });
                this._on(!0, this.document, {
                    pageshow: "_handleShow",
                    popupbeforeposition: "_handleShow",
                    updatelayout: "_handleShow",
                    panelopen: "_handleShow"
                })
            },
            _handleShow: function(e) {
                a.contains(e.target, this.element[0]) && this.element.is(":visible") && ("popupbeforeposition" !== e.type && this.element.addClass("ui-textinput-autogrow-resize").animationComplete(a.proxy(function() {
                    this.element.removeClass("ui-textinput-autogrow-resize")
                }
                , 
                this), "transition"),
                this._prepareHeightUpdate())
            },
            _unbindAutogrow: function() {
                this.element.removeClass("ui-textinput-autogrow");
                this._off(this.element, "keyup change input paste");
                this._off(this.document, "pageshow popupbeforeposition updatelayout panelopen")
            },
            keyupTimeout: null ,
            _prepareHeightUpdate: function(a) {
                this.keyupTimeout && clearTimeout(this.keyupTimeout);
                a === f ? this._updateHeight() : this.keyupTimeout = this._delay("_updateHeight", a)
            },
            _timeout: function() {
                this._prepareHeightUpdate(this.options.keyupTimeoutBuffer)
            },
            _updateHeight: function() {
                var a, d, b, h, f, g, k, j = this.window.scrollTop();
                this.keyupTimeout = 0;
                "onpage" in this.element[0] || this.element.css({
                    height: 0,
                    "min-height": 0,
                    "max-height": 0
                });
                h = this.element[0].scrollHeight;
                f = this.element[0].clientHeight;
                g = parseFloat(this.element.css("border-top-width"));
                k = parseFloat(this.element.css("border-bottom-width"));
                h = h + (g + k) + 15;
                0 === f && (a = parseFloat(this.element.css("padding-top")),
                d = parseFloat(this.element.css("padding-bottom")),
                b = a + d,
                h += b);
                this.element.css({
                    height: h,
                    "min-height": "",
                    "max-height": ""
                });
                this.window.scrollTop(j)
            },
            refresh: function() {
                this.options.autogrow && this.isTextarea && this._updateHeight()
            },
            _setOptions: function(a) {
                this._super(a);
                a.autogrow !== f && this.isTextarea && (a.autogrow ? this._autogrow() : this._unbindAutogrow())
            }
        })
    }
    )(j);
    (function(a) {
        a.widget("mobile.selectmenu", a.extend({
            initSelector: "select:not( :jqmData(role='slider')):not( :jqmData(role='flipswitch') )",
            options: {
                theme: null ,
                icon: "carat-d",
                iconpos: "right",
                inline: !1,
                corners: !0,
                shadow: !0,
                iconshadow: !1,
                overlayTheme: null ,
                dividerTheme: null ,
                hidePlaceholderMenuItems: !0,
                closeText: "Close",
                nativeMenu: !0,
                preventFocusZoom: /iPhone|iPad|iPod/.test(navigator.platform) && navigator.userAgent.indexOf("AppleWebKit") > -1,
                mini: !1
            },
            _button: function() {
                return a("<div/>")
            },
            _setDisabled: function(a) {
                return this.element.attr("disabled", a),
                this.button.attr("aria-disabled", a),
                this._setOption("disabled", a)
            },
            _focusButton: function() {
                var a = this;
                setTimeout(function() {
                    a.button.focus()
                }
                , 40)
            },
            _selectOptions: function() {
                return this.select.find("option")
            },
            _preExtension: function() {
                var f = this.options.inline || this.element.jqmData("inline")
                  , e = this.options.mini || this.element.jqmData("mini")
                  , d = "";
                ~this.element[0].className.indexOf("ui-btn-left") && (d = " ui-btn-left");
                ~this.element[0].className.indexOf("ui-btn-right") && (d = " ui-btn-right");
                f && (d += " ui-btn-inline");
                e && (d += " ui-mini");
                this.select = this.element.removeClass("ui-btn-left ui-btn-right").wrap("<div class='ui-select" + d + "'>");
                this.selectId = this.select.attr("id") || "select-" + this.uuid;
                this.buttonId = this.selectId + 
                "-button";
                this.label = a("label[for='" + this.selectId + "']");
                this.isMultiple = this.select[0].multiple
            },
            _destroy: function() {
                var a = this.element.parents(".ui-select");
                a.length > 0 && (a.is(".ui-btn-left, .ui-btn-right") && this.element.addClass(a.hasClass("ui-btn-left") ? "ui-btn-left" : "ui-btn-right"),
                this.element.insertAfter(a),
                a.remove())
            },
            _create: function() {
                this._preExtension();
                this.button = this._button();
                var f = this
                  , e = this.options
                  , d = e.icon ? e.iconpos || this.select.jqmData("iconpos") : !1;
                d = this.button.insertBefore(this.select).attr("id", 
                this.buttonId).addClass("ui-btn" + (e.icon ? " ui-icon-" + e.icon + " ui-btn-icon-" + d + (e.iconshadow ? " ui-shadow-icon" : "") : "") + (e.theme ? " ui-btn-" + e.theme : "") + (e.corners ? " ui-corner-all" : "") + (e.shadow ? " ui-shadow" : ""));
                this.setButtonText();
                e.nativeMenu && g.opera && g.opera.version && d.addClass("ui-select-nativeonly");
                this.isMultiple && (this.buttonCount = a("<span>").addClass("ui-li-count ui-body-inherit").hide().appendTo(d.addClass("ui-li-has-count")));
                (e.disabled || this.element.attr("disabled")) && this.disable();
                this.select.change(function() {
                    f.refresh();
                    e.nativeMenu && this.blur()
                }
                );
                this._handleFormReset();
                this._on(this.button, {
                    keydown: "_handleKeydown"
                });
                this.build()
            },
            build: function() {
                var f = this;
                this.select.appendTo(f.button).bind("vmousedown", function() {
                    f.button.addClass(a.mobile.activeBtnClass)
                }
                ).bind("focus", function() {
                    f.button.addClass(a.mobile.focusClass)
                }
                ).bind("blur", function() {
                    f.button.removeClass(a.mobile.focusClass)
                }
                ).bind("focus vmouseover", function() {
                    f.button.trigger("vmouseover")
                }
                ).bind("vmousemove", 
                function() {
                    f.button.removeClass(a.mobile.activeBtnClass)
                }
                ).bind("change blur vmouseout", function() {
                    f.button.trigger("vmouseout").removeClass(a.mobile.activeBtnClass)
                }
                );
                f.button.bind("vmousedown", function() {
                    f.options.preventFocusZoom && a.mobile.zoom.disable(!0)
                }
                );
                f.label.bind("click focus", function() {
                    f.options.preventFocusZoom && a.mobile.zoom.disable(!0)
                }
                );
                f.select.bind("focus", function() {
                    f.options.preventFocusZoom && a.mobile.zoom.disable(!0)
                }
                );
                f.button.bind("mouseup", function() {
                    f.options.preventFocusZoom && 
                    setTimeout(function() {
                        a.mobile.zoom.enable(!0)
                    }
                    , 0)
                }
                );
                f.select.bind("blur", function() {
                    f.options.preventFocusZoom && a.mobile.zoom.enable(!0)
                }
                )
            },
            selected: function() {
                return this._selectOptions().filter(":selected")
            },
            selectedIndices: function() {
                var a = this;
                return this.selected().map(function() {
                    return a._selectOptions().index(this)
                }
                ).get()
            },
            setButtonText: function() {
                var f = this
                  , e = this.selected()
                  , d = this.placeholder
                  , b = a(k.createElement("span"));
                this.button.children("span").not(".ui-li-count").remove().end().end().prepend(function() {
                    return d = 
                    e.length ? e.map(function() {
                        return a(this).text()
                    }
                    ).get().join(", ") : f.placeholder,
                    d ? b.text(d) : b.html("&#160;"),
                    b.addClass(f.select.attr("class")).addClass(e.attr("class")).removeClass("ui-screen-hidden")
                }
                ())
            },
            setButtonCount: function() {
                var a = this.selected();
                this.isMultiple && this.buttonCount[a.length > 1 ? "show" : "hide"]().text(a.length)
            },
            _handleKeydown: function() {
                this._delay("_refreshButton")
            },
            _reset: function() {
                this.refresh()
            },
            _refreshButton: function() {
                this.setButtonText();
                this.setButtonCount()
            },
            refresh: function() {
                this._refreshButton()
            },
            open: a.noop,
            close: a.noop,
            disable: function() {
                this._setDisabled(!0);
                this.button.addClass("ui-state-disabled")
            },
            enable: function() {
                this._setDisabled(!1);
                this.button.removeClass("ui-state-disabled")
            }
        }, a.mobile.behaviors.formReset))
    }
    )(j);
    (function(a) {
        a.mobile.links = function(f) {
            a(f).find("a").jqmEnhanceable().filter(":jqmData(rel='popup')[href][href!='']").each(function() {
                var a = this.getAttribute("href").substring(1);
                a && (this.setAttribute("aria-haspopup", !0),
                this.setAttribute("aria-owns", a),
                this.setAttribute("aria-expanded", 
                !1))
            }
            ).end().not(".ui-btn, :jqmData(role='none'), :jqmData(role='nojs')").addClass("ui-link")
        }
    }
    )(j);
    (function(a, f) {
        function e(a) {
            return {
                x: a.scrollLeft(),
                y: a.scrollTop(),
                cx: a[0].innerWidth || a.width(),
                cy: a[0].innerHeight || a.height()
            }
        }
        a.widget("mobile.popup", {
            options: {
                wrapperClass: null ,
                theme: null ,
                overlayTheme: null ,
                shadow: !0,
                corners: !0,
                transition: "none",
                positionTo: "origin",
                tolerance: null ,
                closeLinkSelector: "a:jqmData(rel='back')",
                closeLinkEvents: "click.popup",
                navigateEvents: "navigate.popup",
                closeEvents: "navigate.popup pagebeforechange.popup",
                dismissible: !0,
                enhanced: !1,
                history: !a.mobile.browser.oldIE
            },
            _handleDocumentVmousedown: function(d) {
                this._isOpen && a.contains(this._ui.container[0], d.target) && this._ignoreResizeEvents()
            },
            _create: function() {
                var d = this.element
                  , b = d.attr("id")
                  , e = this.options;
                e.history = e.history && a.mobile.ajaxEnabled && a.mobile.hashListeningEnabled;
                this._on(this.document, {
                    vmousedown: "_handleDocumentVmousedown"
                });
                a.extend(this, {
                    _scrollTop: 0,
                    _page: d.closest(".ui-page"),
                    _ui: null ,
                    _fallbackTransition: "",
                    _currentTransition: !1,
                    _prerequisites: null ,
                    _isOpen: !1,
                    _tolerance: null ,
                    _resizeData: null ,
                    _ignoreResizeTo: 0,
                    _orientationchangeInProgress: !1
                });
                0 === this._page.length && (this._page = a("body"));
                e.enhanced ? this._ui = {
                    container: d.parent(),
                    screen: d.parent().prev(),
                    placeholder: a(this.document[0].getElementById(b + "-placeholder"))
                } : (this._ui = this._enhance(d, b),
                this._applyTransition(e.transition));
                this._setTolerance(e.tolerance)._ui.focusElement = this._ui.container;
                this._on(this._ui.screen, {
                    vclick: "_eatEventAndClose"
                });
                this._on(this.window, {
                    orientationchange: a.proxy(this, 
                    "_handleWindowOrientationchange"),
                    resize: a.proxy(this, "_handleWindowResize"),
                    keyup: a.proxy(this, "_handleWindowKeyUp")
                });
                this._on(this.document, {
                    focusin: "_handleDocumentFocusIn"
                })
            },
            _enhance: function(d, b) {
                var e = this.options
                  , f = e.wrapperClass;
                f = {
                    screen: a("<div class='ui-screen-hidden ui-popup-screen " + this._themeClassFromOption("ui-overlay-", e.overlayTheme) + "'></div>"),
                    placeholder: a("<div style='display: none;'><\!-- placeholder --\></div>"),
                    container: a("<div class='ui-popup-container ui-popup-hidden ui-popup-truncate" + 
                    (f ? " " + f : "") + "'></div>")
                };
                var g = this.document[0].createDocumentFragment();
                return g.appendChild(f.screen[0]),
                g.appendChild(f.container[0]),
                b && (f.screen.attr("id", b + "-screen"),
                f.container.attr("id", b + "-popup"),
                f.placeholder.attr("id", b + "-placeholder").html("<\!-- placeholder for " + b + " --\>")),
                this._page[0].appendChild(g),
                f.placeholder.insertAfter(d),
                d.detach().addClass("ui-popup " + this._themeClassFromOption("ui-body-", e.theme) + " " + (e.shadow ? "ui-overlay-shadow " : "") + (e.corners ? "ui-corner-all " : "")).appendTo(f.container),
                f
            },
            _eatEventAndClose: function(a) {
                return a.preventDefault(),
                a.stopImmediatePropagation(),
                this.options.dismissible && this.close(),
                !1
            },
            _resizeScreen: function() {
                var a = this._ui.screen
                  , b = this._ui.container.outerHeight(!0)
                  , e = a.removeAttr("style").height()
                  , f = this.document.height() - 1;
                f > e ? a.height(f) : b > e && a.height(b)
            },
            _handleWindowKeyUp: function(d) {
                return this._isOpen && d.keyCode === a.mobile.keyCode.ESCAPE ? this._eatEventAndClose(d) : void 0
            },
            _expectResizeEvent: function() {
                var a = e(this.window);
                if (this._resizeData) {
                    if (a.x === 
                    this._resizeData.windowCoordinates.x && a.y === this._resizeData.windowCoordinates.y && a.cx === this._resizeData.windowCoordinates.cx && a.cy === this._resizeData.windowCoordinates.cy)
                        return !1;
                    clearTimeout(this._resizeData.timeoutId)
                }
                return this._resizeData = {
                    timeoutId: this._delay("_resizeTimeout", 200),
                    windowCoordinates: a
                },
                !0
            },
            _resizeTimeout: function() {
                this._isOpen ? this._expectResizeEvent() || (this._ui.container.hasClass("ui-popup-hidden") && (this._ui.container.removeClass("ui-popup-hidden ui-popup-truncate"),
                this.reposition({
                    positionTo: "window"
                }),
                this._ignoreResizeEvents()),
                this._resizeScreen(),
                this._resizeData = null ,
                this._orientationchangeInProgress = !1) : (this._resizeData = null ,
                this._orientationchangeInProgress = !1)
            },
            _stopIgnoringResizeEvents: function() {
                this._ignoreResizeTo = 0
            },
            _ignoreResizeEvents: function() {
                this._ignoreResizeTo && clearTimeout(this._ignoreResizeTo);
                this._ignoreResizeTo = this._delay("_stopIgnoringResizeEvents", 1E3)
            },
            _handleWindowResize: function() {
                this._isOpen && 0 === this._ignoreResizeTo && (!this._expectResizeEvent() && 
                !this._orientationchangeInProgress || this._ui.container.hasClass("ui-popup-hidden") || this._ui.container.addClass("ui-popup-hidden ui-popup-truncate").removeAttr("style"))
            },
            _handleWindowOrientationchange: function() {
                !this._orientationchangeInProgress && this._isOpen && 0 === this._ignoreResizeTo && (this._expectResizeEvent(),
                this._orientationchangeInProgress = !0)
            },
            _handleDocumentFocusIn: function(d) {
                var b, e = d.target, f = this._ui;
                if (this._isOpen) {
                    if (e !== f.container[0]) {
                        if (b = a(e),
                        0 === b.parents().filter(f.container[0]).length)
                            return a(this.document[0].activeElement).one("focus", 
                            function() {
                                "body" !== e.nodeName.toLowerCase() && b.blur()
                            }
                            ),
                            f.focusElement.focus(),
                            d.preventDefault(),
                            d.stopImmediatePropagation(),
                            !1;
                        f.focusElement[0] === f.container[0] && (f.focusElement = b)
                    }
                    this._ignoreResizeEvents()
                }
            },
            _themeClassFromOption: function(a, b) {
                return b ? "none" === b ? "" : a + b : a + "inherit"
            },
            _applyTransition: function(d) {
                return d && (this._ui.container.removeClass(this._fallbackTransition),
                "none" !== d && (this._fallbackTransition = a.mobile._maybeDegradeTransition(d),
                "none" === this._fallbackTransition && (this._fallbackTransition = 
                ""),
                this._ui.container.addClass(this._fallbackTransition))),
                this
            },
            _setOptions: function(a) {
                var b = this.options
                  , e = this.element
                  , g = this._ui.screen;
                return a.wrapperClass !== f && this._ui.container.removeClass(b.wrapperClass).addClass(a.wrapperClass),
                a.theme !== f && e.removeClass(this._themeClassFromOption("ui-body-", b.theme)).addClass(this._themeClassFromOption("ui-body-", a.theme)),
                a.overlayTheme !== f && (g.removeClass(this._themeClassFromOption("ui-overlay-", b.overlayTheme)).addClass(this._themeClassFromOption("ui-overlay-", 
                a.overlayTheme)),
                this._isOpen && g.addClass("in")),
                a.shadow !== f && e.toggleClass("ui-overlay-shadow", a.shadow),
                a.corners !== f && e.toggleClass("ui-corner-all", a.corners),
                a.transition !== f && (this._currentTransition || this._applyTransition(a.transition)),
                a.tolerance !== f && this._setTolerance(a.tolerance),
                a.disabled !== f && a.disabled && this.close(),
                this._super(a)
            },
            _setTolerance: function(d) {
                var b, e = {
                    t: 30,
                    r: 15,
                    b: 30,
                    l: 15
                };
                if (d !== f)
                    switch (b = String(d).split(","),
                    a.each(b, function(a, d) {
                        b[a] = parseInt(d, 10)
                    }
                    ),
                    b.length) {
                    case 1:
                        isNaN(b[0]) || 
                        (e.t = e.r = e.b = e.l = b[0]);
                        break;
                    case 2:
                        isNaN(b[0]) || (e.t = e.b = b[0]);
                        isNaN(b[1]) || (e.l = e.r = b[1]);
                        break;
                    case 4:
                        isNaN(b[0]) || (e.t = b[0]),
                        isNaN(b[1]) || (e.r = b[1]),
                        isNaN(b[2]) || (e.b = b[2]),
                        isNaN(b[3]) || (e.l = b[3])
                    }
                return this._tolerance = e,
                this
            },
            _clampPopupWidth: function(a) {
                var b, h = e(this.window);
                h = {
                    x: this._tolerance.l,
                    y: h.y + this._tolerance.t,
                    cx: h.cx - this._tolerance.l - this._tolerance.r,
                    cy: h.cy - this._tolerance.t - this._tolerance.b
                };
                return a || this._ui.container.css("max-width", h.cx),
                b = {
                    cx: this._ui.container.outerWidth(!0),
                    cy: this._ui.container.outerHeight(!0)
                },
                {
                    rc: h,
                    menuSize: b
                }
            },
            _calculateFinalLocation: function(a, b) {
                var e, f = b.rc, g = b.menuSize;
                return e = {
                    left: g.cx > f.cx ? f.x + (f.cx - g.cx) / 2 : Math.min(Math.max(f.x, a.x - g.cx / 2), f.x + f.cx - g.cx),
                    top: g.cy > f.cy ? f.y + (f.cy - g.cy) / 2 : Math.min(Math.max(f.y, a.y - g.cy / 2), f.y + f.cy - g.cy)
                },
                e.top = Math.max(0, e.top),
                e.top -= Math.min(e.top, Math.max(0, e.top + g.cy - this.document.height())),
                e
            },
            _placementCoords: function(a) {
                return this._calculateFinalLocation(a, this._clampPopupWidth())
            },
            _createPrerequisites: function(d, 
            b, e) {
                var f, g = this;
                f = {
                    screen: a.Deferred(),
                    container: a.Deferred()
                };
                f.screen.then(function() {
                    f === g._prerequisites && d()
                }
                );
                f.container.then(function() {
                    f === g._prerequisites && b()
                }
                );
                a.when(f.screen, f.container).done(function() {
                    f === g._prerequisites && (g._prerequisites = null ,
                    e())
                }
                );
                g._prerequisites = f
            },
            _animate: function(d) {
                return this._ui.screen.removeClass(d.classToRemove).addClass(d.screenClassToAdd),
                d.prerequisites.screen.resolve(),
                d.transition && "none" !== d.transition && (d.applyTransition && this._applyTransition(d.transition),
                this._fallbackTransition) ? void this._ui.container.addClass(d.containerClassToAdd).removeClass(d.classToRemove).animationComplete(a.proxy(d.prerequisites.container, "resolve")) : (this._ui.container.removeClass(d.classToRemove),
                void d.prerequisites.container.resolve())
            },
            _desiredCoords: function(d) {
                var b, h = null , f = e(this.window), g = d.x, k = d.y;
                if ((d = d.positionTo) && "origin" !== d)
                    if ("window" === d)
                        g = f.cx / 2 + f.x,
                        k = f.cy / 2 + f.y;
                    else {
                        try {
                            h = a(d)
                        } catch (j) {
                            h = null 
                        }
                        h && (h.filter(":visible"),
                        0 === h.length && (h = null ))
                    }
                return h && 
                (b = h.offset(),
                g = b.left + h.outerWidth() / 2,
                k = b.top + h.outerHeight() / 2),
                ("number" !== a.type(g) || isNaN(g)) && (g = f.cx / 2 + f.x),
                ("number" !== a.type(k) || isNaN(k)) && (k = f.cy / 2 + f.y),
                {
                    x: g,
                    y: k
                }
            },
            _reposition: function(a) {
                a = {
                    x: a.x,
                    y: a.y,
                    positionTo: a.positionTo
                };
                this._trigger("beforeposition", f, a);
                this._ui.container.offset(this._placementCoords(this._desiredCoords(a)))
            },
            reposition: function(a) {
                this._isOpen && this._reposition(a)
            },
            _openPrerequisitesComplete: function() {
                var a = this.element.attr("id");
                this._ui.container.addClass("ui-popup-active");
                this._isOpen = !0;
                this._resizeScreen();
                this._ui.container.attr("tabindex", "0").focus();
                this._ignoreResizeEvents();
                a && this.document.find("[aria-haspopup='true'][aria-owns='" + a + "']").attr("aria-expanded", !0);
                this._trigger("afteropen")
            },
            _open: function(d) {
                d = a.extend({}, this.options, d);
                var b = function() {
                    var a = navigator.userAgent
                      , b = a.match(/AppleWebKit\/([0-9\.]+)/);
                    b = !!b && b[1];
                    var d = a.match(/Android (\d+(?:\.\d+))/)
                      , e = !!d && d[1];
                    a = a.indexOf("Chrome") > -1;
                    return null  !== d && "4.0" === e && b && b > 534.13 && !a ? !0 : !1
                }
                ();
                this._createPrerequisites(a.noop, a.noop, a.proxy(this, "_openPrerequisitesComplete"));
                this._currentTransition = d.transition;
                this._applyTransition(d.transition);
                this._ui.screen.removeClass("ui-screen-hidden");
                this._ui.container.removeClass("ui-popup-truncate");
                this._reposition(d);
                this._ui.container.removeClass("ui-popup-hidden");
                this.options.overlayTheme && b && this.element.closest(".ui-page").addClass("ui-popup-open");
                this._animate({
                    additionalCondition: !0,
                    transition: d.transition,
                    classToRemove: "",
                    screenClassToAdd: "in",
                    containerClassToAdd: "in",
                    applyTransition: !1,
                    prerequisites: this._prerequisites
                })
            },
            _closePrerequisiteScreen: function() {
                this._ui.screen.removeClass("out").addClass("ui-screen-hidden")
            },
            _closePrerequisiteContainer: function() {
                this._ui.container.removeClass("reverse out").addClass("ui-popup-hidden ui-popup-truncate").removeAttr("style")
            },
            _closePrerequisitesDone: function() {
                var d = this._ui.container
                  , b = this.element.attr("id");
                d.removeAttr("tabindex");
                a.mobile.popup.active = f;
                a(":focus", d[0]).add(d[0]).blur();
                b && this.document.find("[aria-haspopup='true'][aria-owns='" + b + "']").attr("aria-expanded", !1);
                this._trigger("afterclose")
            },
            _close: function(d) {
                this._ui.container.removeClass("ui-popup-active");
                this._page.removeClass("ui-popup-open");
                this._isOpen = !1;
                this._createPrerequisites(a.proxy(this, "_closePrerequisiteScreen"), a.proxy(this, "_closePrerequisiteContainer"), a.proxy(this, "_closePrerequisitesDone"));
                this._animate({
                    additionalCondition: this._ui.screen.hasClass("in"),
                    transition: d ? "none" : this._currentTransition,
                    classToRemove: "in",
                    screenClassToAdd: "out",
                    containerClassToAdd: "reverse out",
                    applyTransition: !0,
                    prerequisites: this._prerequisites
                })
            },
            _unenhance: function() {
                this.options.enhanced || (this._setOptions({
                    theme: a.mobile.popup.prototype.options.theme
                }),
                this.element.detach().insertAfter(this._ui.placeholder).removeClass("ui-popup ui-overlay-shadow ui-corner-all ui-body-inherit"),
                this._ui.screen.remove(),
                this._ui.container.remove(),
                this._ui.placeholder.remove())
            },
            _destroy: function() {
                return a.mobile.popup.active === 
                this ? (this.element.one("popupafterclose", a.proxy(this, "_unenhance")),
                this.close()) : this._unenhance(),
                this
            },
            _closePopup: function(d, b) {
                var e, f, k = this.options, j = !1;
                d && d.isDefaultPrevented() || a.mobile.popup.active !== this || (g.scrollTo(0, this._scrollTop),
                d && "pagebeforechange" === d.type && b && (e = "string" == typeof b.toPage ? b.toPage : b.toPage.jqmData("url"),
                e = a.mobile.path.parseUrl(e),
                f = e.pathname + e.search + e.hash,
                this._myUrl !== a.mobile.path.makeUrlAbsolute(f) ? j = !0 : d.preventDefault()),
                this.window.off(k.closeEvents),
                this.element.undelegate(k.closeLinkSelector, k.closeLinkEvents),
                this._close(j))
            },
            _bindContainerClose: function() {
                this.window.on(this.options.closeEvents, a.proxy(this, "_closePopup"))
            },
            widget: function() {
                return this._ui.container
            },
            open: function(d) {
                var b, e, f, g, k, j = this, q = this.options;
                return a.mobile.popup.active || q.disabled ? this : (a.mobile.popup.active = this,
                this._scrollTop = this.window.scrollTop(),
                q.history ? (k = a.mobile.navigate.history,
                e = a.mobile.dialogHashKey,
                f = a.mobile.activePage,
                g = f ? f.hasClass("ui-dialog") : 
                !1,
                this._myUrl = b = k.getActive().url,
                b.indexOf(e) > -1 && !g && k.activeIndex > 0 ? (j._open(d),
                j._bindContainerClose(),
                this) : (-1 !== b.indexOf(e) || g ? b = a.mobile.path.parseLocation().hash + e : b += b.indexOf("#") > -1 ? e : "#" + e,
                this.window.one("beforenavigate", function(a) {
                    a.preventDefault();
                    j._open(d);
                    j._bindContainerClose()
                }
                ),
                this.urlAltered = !0,
                a.mobile.navigate(b, {
                    role: "dialog"
                }),
                this)) : (j._open(d),
                j._bindContainerClose(),
                j.element.delegate(q.closeLinkSelector, q.closeLinkEvents, function(a) {
                    j.close();
                    a.preventDefault()
                }
                ),
                this))
            },
            close: function() {
                return a.mobile.popup.active !== this ? this : (this._scrollTop = this.window.scrollTop(),
                this.options.history && this.urlAltered ? (a.mobile.back(),
                this.urlAltered = !1) : this._closePopup(),
                this)
            }
        });
        a.mobile.popup.handleLink = function(d) {
            var b, e = a.mobile.path;
            e = a(e.hashToSelector(e.parseUrl(d.attr("href")).hash)).first();
            e.length > 0 && e.data("mobile-popup") && (b = d.offset(),
            e.popup("open", {
                x: b.left + d.outerWidth() / 2,
                y: b.top + d.outerHeight() / 2,
                transition: d.jqmData("transition"),
                positionTo: d.jqmData("position-to")
            }));
            setTimeout(function() {
                d.removeClass(a.mobile.activeBtnClass)
            }
            , 300)
        }
        ;
        a.mobile.document.on("pagebeforechange", function(d, b) {
            "popup" === b.options.role && (a.mobile.popup.handleLink(b.options.link),
            d.preventDefault())
        }
        )
    }
    )(j);
    (function(a, f) {
        var e = function(a, b, e) {
            a = a[e + "All"]().not(".ui-disabled,.ui-state-disabled,.ui-li-divider,.ui-screen-hidden,:jqmData(role='placeholder')").first();
            a.length && (b.blur().attr("tabindex", "-1"),
            a.find("a").first().focus())
        }
        ;
        a.widget("mobile.selectmenu", a.mobile.selectmenu, {
            _create: function() {
                var a = 
                this.options;
                return a.nativeMenu = a.nativeMenu || this.element.parents(":jqmData(role='popup'),:mobile-popup").length > 0,
                this._super()
            },
            _handleSelectFocus: function() {
                this.element.blur();
                this.button.focus()
            },
            _handleKeydown: function(a) {
                this._super(a);
                this._handleButtonVclickKeydown(a)
            },
            _handleButtonVclickKeydown: function(d) {
                this.options.disabled || this.isOpen || this.options.nativeMenu || ("vclick" === d.type || d.keyCode && (d.keyCode === a.mobile.keyCode.ENTER || d.keyCode === a.mobile.keyCode.SPACE)) && (this._decideFormat(),
                "overlay" === this.menuType ? this.button.attr("href", "#" + this.popupId).attr("data-" + (a.mobile.ns || "") + "rel", "popup") : this.button.attr("href", "#" + this.dialogId).attr("data-" + (a.mobile.ns || "") + "rel", "dialog"),
                this.isOpen = !0)
            },
            _handleListFocus: function(d) {
                var b = "focusin" === d.type ? {
                    tabindex: "0",
                    event: "vmouseover"
                } : {
                    tabindex: "-1",
                    event: "vmouseout"
                };
                a(d.target).attr("tabindex", b.tabindex).trigger(b.event)
            },
            _handleListKeydown: function(d) {
                var b = a(d.target)
                  , h = b.closest("li");
                switch (d.keyCode) {
                case 38:
                    return e(h, 
                    b, "prev"),
                    !1;
                case 40:
                    return e(h, b, "next"),
                    !1;
                case 13:
                case 32:
                    return b.trigger("click"),
                    !1
                }
            },
            _handleMenuPageHide: function() {
                this._delayedTrigger();
                this.thisPage.page("bindRemove")
            },
            _handleHeaderCloseClick: function() {
                return "overlay" === this.menuType ? (this.close(),
                !1) : void 0
            },
            _handleListItemClick: function(d) {
                var b = a(d.target).closest("li")
                  , e = this.select[0].selectedIndex
                  , f = a.mobile.getAttribute(b, "option-index")
                  , g = this._selectOptions().eq(f)[0];
                g.selected = this.isMultiple ? !g.selected : !0;
                this.isMultiple && 
                b.find("a").toggleClass("ui-checkbox-on", g.selected).toggleClass("ui-checkbox-off", !g.selected);
                this.isMultiple || e === f || (this._triggerChange = !0);
                this.isMultiple ? (this.select.trigger("change"),
                this.list.find("li:not(.ui-li-divider)").eq(f).find("a").first().focus()) : this.close();
                d.preventDefault()
            },
            build: function() {
                var d, b, e, g, k, j, o, q, p, s, r, t, w, z, C, G, D, E = this.options;
                return E.nativeMenu ? this._super() : (d = this.selectId,
                b = d + "-listbox",
                e = d + "-dialog",
                g = this.label,
                k = this.element.closest(".ui-page"),
                j = this.element[0].multiple,
                o = d + "-menu",
                q = E.theme ? " data-" + a.mobile.ns + "theme='" + E.theme + "'" : "",
                p = E.overlayTheme || E.theme || null ,
                s = p ? " data-" + a.mobile.ns + "overlay-theme='" + p + "'" : "",
                r = E.dividerTheme && j ? " data-" + a.mobile.ns + "divider-theme='" + E.dividerTheme + "'" : "",
                t = a("<div data-" + a.mobile.ns + "role='dialog' class='ui-selectmenu' id='" + e + "'" + q + s + "><div data-" + a.mobile.ns + "role='header'><div class='ui-title'></div></div><div data-" + a.mobile.ns + "role='content'></div></div>"),
                w = a("<div" + q + s + " id='" + b + "' class='ui-selectmenu'></div>").insertAfter(this.select).popup(),
                z = a("<ul class='ui-selectmenu-list' id='" + o + "' role='listbox' aria-labelledby='" + this.buttonId + "'" + q + r + "></ul>").appendTo(w),
                C = a("<div class='ui-header ui-bar-" + (E.theme ? E.theme : "inherit") + "'></div>").prependTo(w),
                G = a("<h1 class='ui-title'></h1>").appendTo(C),
                this.isMultiple && (D = a("<a>", {
                    role: "button",
                    text: E.closeText,
                    href: "#",
                    "class": "ui-btn ui-corner-all ui-btn-left ui-btn-icon-notext ui-icon-delete"
                }).appendTo(C)),
                a.extend(this, {
                    selectId: d,
                    menuId: o,
                    popupId: b,
                    dialogId: e,
                    thisPage: k,
                    menuPage: t,
                    label: g,
                    isMultiple: j,
                    theme: E.theme,
                    listbox: w,
                    list: z,
                    header: C,
                    headerTitle: G,
                    headerClose: D,
                    menuPageContent: void 0,
                    menuPageClose: void 0,
                    placeholder: ""
                }),
                this.refresh(),
                this._origTabIndex === f && (this._origTabIndex = null  === this.select[0].getAttribute("tabindex") ? !1 : this.select.attr("tabindex")),
                this.select.attr("tabindex", "-1"),
                this._on(this.select, {
                    focus: "_handleSelectFocus"
                }),
                this._on(this.button, {
                    vclick: "_handleButtonVclickKeydown"
                }),
                this.list.attr("role", "listbox"),
                this._on(this.list, {
                    focusin: "_handleListFocus",
                    focusout: "_handleListFocus",
                    keydown: "_handleListKeydown",
                    "click li:not(.ui-disabled,.ui-state-disabled,.ui-li-divider)": "_handleListItemClick"
                }),
                this._on(this.menuPage, {
                    pagehide: "_handleMenuPageHide"
                }),
                this._on(this.listbox, {
                    popupafterclose: "_popupClosed"
                }),
                this.isMultiple && this._on(this.headerClose, {
                    click: "_handleHeaderCloseClick"
                }),
                this)
            },
            _popupClosed: function() {
                this.close();
                this._delayedTrigger()
            },
            _delayedTrigger: function() {
                this._triggerChange && this.element.trigger("change");
                this._triggerChange = 
                !1
            },
            _isRebuildRequired: function() {
                var a = this.list.find("li");
                return this._selectOptions().not(".ui-screen-hidden").text() !== a.text()
            },
            selected: function() {
                return this._selectOptions().filter(":selected:not( :jqmData(placeholder='true') )")
            },
            refresh: function(d) {
                var b, e;
                return this.options.nativeMenu ? this._super(d) : (b = this,
                (d || this._isRebuildRequired()) && b._buildList(),
                e = this.selectedIndices(),
                b.setButtonText(),
                b.setButtonCount(),
                void b.list.find("li:not(.ui-li-divider)").find("a").removeClass(a.mobile.activeBtnClass).end().attr("aria-selected", 
                !1).each(function(d) {
                    a.inArray(d, e) > -1 && (d = a(this),
                    d.attr("aria-selected", !0),
                    b.isMultiple ? d.find("a").removeClass("ui-checkbox-off").addClass("ui-checkbox-on") : d.hasClass("ui-screen-hidden") ? d.next().find("a").addClass(a.mobile.activeBtnClass) : d.find("a").addClass(a.mobile.activeBtnClass))
                }
                ))
            },
            close: function() {
                if (!this.options.disabled && this.isOpen)
                    "page" === this.menuType ? (this.menuPage.dialog("close"),
                    this.list.appendTo(this.listbox)) : this.listbox.popup("close"),
                    this._focusButton(),
                    this.isOpen = !1
            },
            open: function() {
                this.button.click()
            },
            _focusMenuItem: function() {
                var d = this.list.find("a." + a.mobile.activeBtnClass);
                0 === d.length && (d = this.list.find("li:not(.ui-disabled,.ui-state-disabled,.ui-li-divider,.ui-screen-hidden,:jqmData(role='placeholder')) a.ui-btn"));
                d.first().focus()
            },
            _decideFormat: function() {
                var d = this.window
                  , b = this.list.parent().outerHeight()
                  , e = d.scrollTop()
                  , f = this.button.offset().top;
                d = d.height();
                b > d - 80 || !a.support.scrollTop ? (this.menuPage.appendTo(a.mobile.pageContainer).page(),
                this.menuPageContent = 
                this.menuPage.find(".ui-content"),
                this.menuPageClose = this.menuPage.find(".ui-header a"),
                this.thisPage.unbind("pagehide.remove"),
                0 === e && f > d && this.thisPage.one("pagehide", function() {
                    a(this).jqmData("lastScroll", f)
                }
                ),
                this.menuPage.one({
                    pageshow: a.proxy(this, "_focusMenuItem"),
                    pagehide: a.proxy(this, "close")
                }),
                this.menuType = "page",
                this.menuPageContent.append(this.list),
                this.menuPage.find("div .ui-title").text(this.label.getEncodedText() || this.placeholder)) : (this.menuType = "overlay",
                this.listbox.one({
                    popupafteropen: a.proxy(this, 
                    "_focusMenuItem")
                }))
            },
            _buildList: function() {
                var d, b, e, f, g, j, o, q, p, s, r, t, w, z, C = this.options, G = this.placeholder, D = !0;
                d = "data-" + a.mobile.ns;
                var E = d + "option-index"
                  , N = d + "icon"
                  , H = d + "role"
                  , L = d + "placeholder"
                  , F = k.createDocumentFragment()
                  , X = !1;
                this.list.empty().filter(".ui-listview").listview("destroy");
                d = this._selectOptions();
                b = d.length;
                e = this.select[0];
                for (g = 0; b > g; g++,
                X = !1)
                    j = d[g],
                    o = a(j),
                    o.hasClass("ui-screen-hidden") || (q = j.parentNode,
                    r = [],
                    p = o.text(),
                    s = k.createElement("a"),
                    s.setAttribute("href", "#"),
                    s.appendChild(k.createTextNode(p)),
                    q !== e && "optgroup" === q.nodeName.toLowerCase() && (t = q.getAttribute("label"),
                    t !== f && (w = k.createElement("li"),
                    w.setAttribute(H, "list-divider"),
                    w.setAttribute("role", "option"),
                    w.setAttribute("tabindex", "-1"),
                    w.appendChild(k.createTextNode(t)),
                    F.appendChild(w),
                    f = t)),
                    !D || j.getAttribute("value") && 0 !== p.length && !o.jqmData("placeholder") || (D = !1,
                    X = !0,
                    null  === j.getAttribute(L) && (this._removePlaceholderAttr = !0),
                    j.setAttribute(L, !0),
                    C.hidePlaceholderMenuItems && r.push("ui-screen-hidden"),
                    G !== p && (G = this.placeholder = 
                    p)),
                    z = k.createElement("li"),
                    j.disabled && (r.push("ui-state-disabled"),
                    z.setAttribute("aria-disabled", !0)),
                    z.setAttribute(E, g),
                    z.setAttribute(N, "false"),
                    X && z.setAttribute(L, !0),
                    z.className = r.join(" "),
                    z.setAttribute("role", "option"),
                    s.setAttribute("tabindex", "-1"),
                    this.isMultiple && a(s).addClass("ui-btn ui-checkbox-off ui-btn-icon-right"),
                    z.appendChild(s),
                    F.appendChild(z));
                this.list[0].appendChild(F);
                this.isMultiple || G.length ? this.headerTitle.text(this.placeholder) : this.header.addClass("ui-screen-hidden");
                this.list.listview()
            },
            _button: function() {
                return this.options.nativeMenu ? this._super() : a("<a>", {
                    href: "#",
                    role: "button",
                    id: this.buttonId,
                    "aria-haspopup": "true",
                    "aria-owns": this.menuId
                })
            },
            _destroy: function() {
                this.options.nativeMenu || (this.close(),
                this._origTabIndex !== f && (this._origTabIndex !== !1 ? this.select.attr("tabindex", this._origTabIndex) : this.select.removeAttr("tabindex")),
                this._removePlaceholderAttr && this._selectOptions().removeAttr("data-" + a.mobile.ns + "placeholder"),
                this.listbox.remove(),
                this.menuPage.remove());
                this._super()
            }
        })
    }
    )(j);
    (function(a, f) {
        function e(a) {
            return "-" + a.toLowerCase()
        }
        var d = {
            "ui-shadow": "shadow",
            "ui-corner-all": "corners",
            "ui-btn-inline": "inline",
            "ui-shadow-icon": "iconshadow",
            "ui-mini": "mini"
        }
          , b = function() {
            var b = a.mobile.getAttribute.apply(this, arguments);
            return null  == b ? f : b
        }
          , h = /[A-Z]/g;
        a.fn.buttonMarkup = function(g, k) {
            var j, o, q, p, s, r = a.fn.buttonMarkup.defaults;
            for (j = 0; j < this.length; j++) {
                q = this[j];
                var t;
                if (k)
                    t = {
                        alreadyEnhanced: !1,
                        unknownClasses: []
                    };
                else {
                    t = q.className;
                    var w = p = void 0
                      , z = void 0
                      , 
                    C = !1
                      , G = !0
                      , D = {
                        icon: "",
                        inline: !1,
                        shadow: !1,
                        corners: !1,
                        iconshadow: !1,
                        mini: !1
                    }
                      , E = [];
                    t = t.split(" ");
                    for (p = 0; p < t.length; p++)
                        z = !0,
                        w = d[t[p]],
                        w !== f ? (z = !1,
                        D[w] = !0) : 0 === t[p].indexOf("ui-btn-icon-") ? (z = !1,
                        G = !1,
                        D.iconpos = t[p].substring(12)) : 0 === t[p].indexOf("ui-icon-") ? (z = !1,
                        D.icon = t[p].substring(8)) : 0 === t[p].indexOf("ui-btn-") && 8 === t[p].length ? (z = !1,
                        D.theme = t[p].substring(7)) : "ui-btn" === t[p] && (z = !1,
                        C = !0),
                        z && E.push(t[p]);
                    t = (G && (D.icon = ""),
                    {
                        options: D,
                        unknownClasses: E,
                        alreadyEnhanced: C
                    })
                }
                if (o = t,
                p = a.extend({}, o.alreadyEnhanced ? 
                o.options : {}, g),
                !o.alreadyEnhanced)
                    for (s in r)
                        p[s] === f && (p[s] = b(q, s.replace(h, e)));
                t = q;
                p = a.extend({}, r, p);
                w = (w = o.unknownClasses) ? w : [];
                p = (w.push("ui-btn"),
                p.theme && w.push("ui-btn-" + p.theme),
                p.icon && (w = w.concat(["ui-icon-" + p.icon, "ui-btn-icon-" + p.iconpos]),
                p.iconshadow && w.push("ui-shadow-icon")),
                p.inline && w.push("ui-btn-inline"),
                p.shadow && w.push("ui-shadow"),
                p.corners && w.push("ui-corner-all"),
                p.mini && w.push("ui-mini"),
                w);
                t.className = p.join.call(p, " ");
                "button" !== q.tagName.toLowerCase() && q.setAttribute("role", 
                "button")
            }
            return this
        }
        ;
        a.fn.buttonMarkup.defaults = {
            icon: "",
            iconpos: "left",
            theme: null ,
            inline: !1,
            shadow: !0,
            corners: !0,
            iconshadow: !1,
            mini: !1
        };
        a.extend(a.fn.buttonMarkup, {
            initSelector: "a:jqmData(role='button'), .ui-bar > a, .ui-bar > :jqmData(role='controlgroup') > a, button:not(:jqmData(role='navbar') button)"
        })
    }
    )(j);
    (function(a, f) {
        a.widget("mobile.controlgroup", a.extend({
            options: {
                enhanced: !1,
                theme: null ,
                shadow: !1,
                corners: !0,
                excludeInvisible: !0,
                type: "vertical",
                mini: !1
            },
            _create: function() {
                var e = this.element
                  , 
                d = this.options;
                a.fn.buttonMarkup && this.element.find(a.fn.buttonMarkup.initSelector).buttonMarkup();
                a.each(this._childWidgets, a.proxy(function(b, d) {
                    a.mobile[d] && this.element.find(a.mobile[d].initSelector).not(a.mobile.page.prototype.keepNativeSelector())[d]()
                }
                , this));
                a.extend(this, {
                    _ui: null ,
                    _initialRefresh: !0
                });
                this._ui = d.enhanced ? {
                    groupLegend: e.children(".ui-controlgroup-label").children(),
                    childWrapper: e.children(".ui-controlgroup-controls")
                } : this._enhance()
            },
            _childWidgets: ["checkboxradio", "selectmenu", 
            "button"],
            _themeClassFromOption: function(a) {
                return a ? "none" === a ? "" : "ui-group-theme-" + a : ""
            },
            _enhance: function() {
                var e = this.element
                  , d = this.options;
                d = {
                    groupLegend: e.children("legend"),
                    childWrapper: e.addClass("ui-controlgroup ui-controlgroup-" + ("horizontal" === d.type ? "horizontal" : "vertical") + " " + this._themeClassFromOption(d.theme) + " " + (d.corners ? "ui-corner-all " : "") + (d.mini ? "ui-mini " : "")).wrapInner("<div class='ui-controlgroup-controls " + (d.shadow === !0 ? "ui-shadow" : "") + "'></div>").children()
                };
                return d.groupLegend.length > 
                0 && a("<div role='heading' class='ui-controlgroup-label'></div>").append(d.groupLegend).prependTo(e),
                d
            },
            _init: function() {
                this.refresh()
            },
            _setOptions: function(a) {
                var d, b, h = this.element;
                return a.type !== f && (h.removeClass("ui-controlgroup-horizontal ui-controlgroup-vertical").addClass("ui-controlgroup-" + ("horizontal" === a.type ? "horizontal" : "vertical")),
                d = !0),
                a.theme !== f && h.removeClass(this._themeClassFromOption(this.options.theme)).addClass(this._themeClassFromOption(a.theme)),
                a.corners !== f && h.toggleClass("ui-corner-all", 
                a.corners),
                a.mini !== f && h.toggleClass("ui-mini", a.mini),
                a.shadow !== f && this._ui.childWrapper.toggleClass("ui-shadow", a.shadow),
                a.excludeInvisible !== f && (this.options.excludeInvisible = a.excludeInvisible,
                d = !0),
                b = this._super(a),
                d && this.refresh(),
                b
            },
            container: function() {
                return this._ui.childWrapper
            },
            refresh: function() {
                var e = this.container()
                  , d = e.find(".ui-btn").not(".ui-slider-handle")
                  , b = this._initialRefresh;
                a.mobile.checkboxradio && e.find(":mobile-checkboxradio").checkboxradio("refresh");
                this._addFirstLastClasses(d, 
                this.options.excludeInvisible ? this._getVisibles(d, b) : d, b);
                this._initialRefresh = !1
            },
            _destroy: function() {
                var a, d, b = this.options;
                return b.enhanced ? this : (a = this._ui,
                d = this.element.removeClass("ui-controlgroup ui-controlgroup-horizontal ui-controlgroup-vertical ui-corner-all ui-mini " + this._themeClassFromOption(b.theme)).find(".ui-btn").not(".ui-slider-handle"),
                this._removeFirstLastClasses(d),
                a.groupLegend.unwrap(),
                void a.childWrapper.children().unwrap())
            }
        }, a.mobile.behaviors.addFirstLastClasses))
    }
    )(j);
    (function(a, f) {
        a.widget("mobile.toolbar", {
            initSelector: ":jqmData(role='footer'), :jqmData(role='header')",
            options: {
                theme: null ,
                addBackBtn: !1,
                backBtnTheme: null ,
                backBtnText: "Back"
            },
            _create: function() {
                var e = this.element.is(":jqmData(role='header')") ? "header" : "footer"
                  , d = this.element.closest(".ui-page");
                0 === d.length && (d = !1,
                this._on(this.document, {
                    pageshow: "refresh"
                }));
                a.extend(this, {
                    role: e,
                    page: d,
                    leftbtn: void 0,
                    rightbtn: void 0
                });
                this.element.attr("role", "header" === e ? "banner" : "contentinfo").addClass("ui-" + 
                e);
                this.refresh();
                this._setOptions(this.options)
            },
            _setOptions: function(a) {
                if (a.addBackBtn !== f && this._updateBackButton(),
                null  != a.backBtnTheme && this.element.find(".ui-toolbar-back-btn").addClass("ui-btn ui-btn-" + a.backBtnTheme),
                a.backBtnText !== f && this.element.find(".ui-toolbar-back-btn .ui-btn-text").text(a.backBtnText),
                a.theme !== f) {
                    var d = a.theme ? a.theme : "inherit";
                    this.element.removeClass("ui-bar-" + (this.options.theme ? this.options.theme : "inherit")).addClass("ui-bar-" + d)
                }
                this._super(a)
            },
            refresh: function() {
                "header" === 
                this.role && this._addHeaderButtonClasses();
                this.page || (this._setRelative(),
                "footer" === this.role ? this.element.appendTo("body") : "header" === this.role && this._updateBackButton());
                this._addHeadingClasses();
                this._btnMarkup()
            },
            _setRelative: function() {
                a("[data-" + a.mobile.ns + "role='page']").css({
                    position: "relative"
                })
            },
            _btnMarkup: function() {
                this.element.children("a").filter(":not([data-" + a.mobile.ns + "role='none'])").attr("data-" + a.mobile.ns + "role", "button");
                this.element.trigger("create")
            },
            _addHeaderButtonClasses: function() {
                var a = 
                this.element.children("a, button");
                this.leftbtn = a.hasClass("ui-btn-left") && !a.hasClass("ui-toolbar-back-btn");
                this.rightbtn = a.hasClass("ui-btn-right");
                this.leftbtn = this.leftbtn || a.eq(0).not(".ui-btn-right,.ui-toolbar-back-btn").addClass("ui-btn-left").length;
                this.rightbtn = this.rightbtn || a.eq(1).addClass("ui-btn-right").length
            },
            _updateBackButton: function() {
                var e, d = this.options, b = d.backBtnTheme || d.theme;
                e = this._backButton = this._backButton || {};
                this.options.addBackBtn && "header" === this.role && a(".ui-page").length > 
                1 && (this.page ? this.page[0].getAttribute("data-" + a.mobile.ns + "url") !== a.mobile.path.stripHash(location.hash) : a.mobile.navigate && a.mobile.navigate.history && a.mobile.navigate.history.activeIndex > 0) && !this.leftbtn ? e.attached || (this.backButton = e.element = (e.element || a("<a role='button' href='javascript:void(0);' class='ui-btn ui-corner-all ui-shadow ui-btn-left " + (b ? "ui-btn-" + b + " " : "") + "ui-toolbar-back-btn ui-icon-carat-l ui-btn-icon-left' data-" + a.mobile.ns + "rel='back'>" + d.backBtnText + "</a>")).prependTo(this.element),
                e.attached = !0) : e.element && (e.element.detach(),
                e.attached = !1)
            },
            _addHeadingClasses: function() {
                this.element.children("h1, h2, h3, h4, h5, h6").addClass("ui-title").attr({
                    role: "heading",
                    "aria-level": "1"
                })
            },
            _destroy: function() {
                this.element.children("h1, h2, h3, h4, h5, h6").removeClass("ui-title").removeAttr("role").removeAttr("aria-level");
                "header" === this.role && (this.element.children("a, button").removeClass("ui-btn-left ui-btn-right ui-btn ui-shadow ui-corner-all"),
                this.backButton && this.backButton.remove());
                this.element.removeClass("ui-bar-" + (this.options.theme ? this.options.theme : "inherit"));
                this.element.removeClass("ui-" + this.role).removeAttr("role")
            }
        })
    }
    )(j);
    (function(a, f) {
        a.widget("mobile.toolbar", a.mobile.toolbar, {
            options: {
                position: null ,
                visibleOnPageShow: !0,
                disablePageZoom: !0,
                transition: "slide",
                fullscreen: !1,
                tapToggle: !0,
                tapToggleBlacklist: "a, button, input, select, textarea, .ui-header-fixed, .ui-footer-fixed, .ui-flipswitch, .ui-popup, .ui-panel, .ui-panel-dismiss-open",
                hideDuringFocus: "input, textarea, select",
                updatePagePadding: !0,
                trackPersistentToolbars: !0,
                supportBlacklist: function() {
                    return !a.support.fixedPosition
                }
            },
            _create: function() {
                this._super();
                this.pagecontainer = a(":mobile-pagecontainer");
                "fixed" !== this.options.position || this.options.supportBlacklist() || this._makeFixed()
            },
            _makeFixed: function() {
                this.element.addClass("ui-" + this.role + "-fixed");
                this.updatePagePadding();
                this._addTransitionClass();
                this._bindPageEvents();
                this._bindToggleHandlers()
            },
            _setOptions: function(e) {
                if ("fixed" === e.position && "fixed" !== 
                this.options.position && this._makeFixed(),
                "fixed" === this.options.position && !this.options.supportBlacklist()) {
                    var d = this.page ? this.page : a(".ui-page-active").length > 0 ? a(".ui-page-active") : a(".ui-page").eq(0);
                    e.fullscreen !== f && (e.fullscreen ? (this.element.addClass("ui-" + this.role + "-fullscreen"),
                    d.addClass("ui-page-" + this.role + "-fullscreen")) : (this.element.removeClass("ui-" + this.role + "-fullscreen"),
                    d.removeClass("ui-page-" + this.role + "-fullscreen").addClass("ui-page-" + this.role + "-fixed")))
                }
                this._super(e)
            },
            _addTransitionClass: function() {
                var a = this.options.transition;
                a && "none" !== a && ("slide" === a && (a = this.element.hasClass("ui-header") ? "slidedown" : "slideup"),
                this.element.addClass(a))
            },
            _bindPageEvents: function() {
                this._on(this.page ? this.element.closest(".ui-page") : this.document, {
                    pagebeforeshow: "_handlePageBeforeShow",
                    webkitAnimationStart: "_handleAnimationStart",
                    animationstart: "_handleAnimationStart",
                    updatelayout: "_handleAnimationStart",
                    pageshow: "_handlePageShow",
                    pagebeforehide: "_handlePageBeforeHide"
                })
            },
            _handlePageBeforeShow: function() {
                var e = this.options;
                e.disablePageZoom && a.mobile.zoom.disable(!0);
                e.visibleOnPageShow || this.hide(!0)
            },
            _handleAnimationStart: function() {
                this.options.updatePagePadding && this.updatePagePadding(this.page ? this.page : ".ui-page-active")
            },
            _handlePageShow: function() {
                this.updatePagePadding(this.page ? this.page : ".ui-page-active");
                this.options.updatePagePadding && this._on(this.window, {
                    throttledresize: "updatePagePadding"
                })
            },
            _handlePageBeforeHide: function(e, d) {
                var b, h, f, g, k = this.options;
                k.disablePageZoom && a.mobile.zoom.enable(!0);
                k.updatePagePadding && this._off(this.window, "throttledresize");
                k.trackPersistentToolbars && (b = a(".ui-footer-fixed:jqmData(id)", this.page),
                h = a(".ui-header-fixed:jqmData(id)", this.page),
                f = b.length && d.nextPage && a(".ui-footer-fixed:jqmData(id='" + b.jqmData("id") + "')", d.nextPage) || a(),
                g = h.length && d.nextPage && a(".ui-header-fixed:jqmData(id='" + h.jqmData("id") + "')", d.nextPage) || a(),
                (f.length || g.length) && (f.add(g).appendTo(a.mobile.pageContainer),
                d.nextPage.one("pageshow", 
                function() {
                    g.prependTo(this);
                    f.appendTo(this)
                }
                )))
            },
            _visible: !0,
            updatePagePadding: function(e) {
                var d = this.element
                  , b = "header" === this.role
                  , h = parseFloat(d.css(b ? "top" : "bottom"));
                this.options.fullscreen || (e && e.type === f && e || this.page || d.closest(".ui-page"),
                e = this.page ? this.page : ".ui-page-active",
                a(e).css("padding-" + (b ? "top" : "bottom"), d.outerHeight() + h))
            },
            _useTransition: function(e) {
                var d = this.element
                  , b = this.window.scrollTop()
                  , h = d.height();
                d = this.page ? d.closest(".ui-page").height() : a(".ui-page-active").height();
                var f = a.mobile.getScreenHeight();
                return !e && (this.options.transition && "none" !== this.options.transition && ("header" === this.role && !this.options.fullscreen && b > h || "footer" === this.role && !this.options.fullscreen && d - h > b + f) || this.options.fullscreen)
            },
            show: function(a) {
                var d = this.element;
                this._useTransition(a) ? d.removeClass("out ui-fixed-hidden").addClass("in").animationComplete(function() {
                    d.removeClass("in")
                }
                ) : d.removeClass("ui-fixed-hidden");
                this._visible = !0
            },
            hide: function(a) {
                var d = this.element
                  , b = "out" + ("slide" === 
                this.options.transition ? " reverse" : "");
                this._useTransition(a) ? d.addClass(b).removeClass("in").animationComplete(function() {
                    d.addClass("ui-fixed-hidden").removeClass(b)
                }
                ) : d.addClass("ui-fixed-hidden").removeClass(b);
                this._visible = !1
            },
            toggle: function() {
                this[this._visible ? "hide" : "show"]()
            },
            _bindToggleHandlers: function() {
                var e, d, b = this, h = b.options, f = !0;
                (this.page ? this.page : a(".ui-page")).bind("vclick", function(d) {
                    h.tapToggle && !a(d.target).closest(h.tapToggleBlacklist).length && b.toggle()
                }
                ).bind("focusin focusout", 
                function(g) {
                    screen.width < 1025 && a(g.target).is(h.hideDuringFocus) && !a(g.target).closest(".ui-header-fixed, .ui-footer-fixed").length && ("focusout" !== g.type || f ? "focusin" === g.type && f && (clearTimeout(e),
                    f = !1,
                    d = setTimeout(function() {
                        b.hide()
                    }
                    , 0)) : (f = !0,
                    clearTimeout(d),
                    e = setTimeout(function() {
                        b.show()
                    }
                    , 0)))
                }
                )
            },
            _setRelative: function() {
                "fixed" !== this.options.position && a("[data-" + a.mobile.ns + "role='page']").css({
                    position: "relative"
                })
            },
            _destroy: function() {
                var e, d, b, h, f = this.pagecontainer.pagecontainer("getActivePage");
                this._super();
                "fixed" === this.options.position && (d = a("body>.ui-" + this.role + "-fixed").add(f.find(".ui-" + this.options.role + "-fixed")).not(this.element).length > 0,
                h = a("body>.ui-" + this.role + "-fixed").add(f.find(".ui-" + this.options.role + "-fullscreen")).not(this.element).length > 0,
                this.element.removeClass("ui-header-fixed ui-footer-fixed ui-header-fullscreen in out ui-footer-fullscreen fade slidedown slideup ui-fixed-hidden"),
                h || (e = "ui-page-" + this.role + "-fullscreen"),
                d || (b = "header" === this.role,
                e += " ui-page-" + 
                this.role + "-fixed",
                f.css("padding-" + (b ? "top" : "bottom"), "")),
                f.removeClass(e))
            }
        })
    }
    )(j);
    (function(a) {
        a.widget("mobile.toolbar", a.mobile.toolbar, {
            _makeFixed: function() {
                this._super();
                this._workarounds()
            },
            _workarounds: function() {
                var a = navigator.userAgent
                  , e = navigator.platform
                  , d = a.match(/AppleWebKit\/([0-9]+)/);
                d = !!d && d[1];
                var b = null ;
                if (e.indexOf("iPhone") > -1 || e.indexOf("iPad") > -1 || e.indexOf("iPod") > -1)
                    b = "ios";
                else {
                    if (!(a.indexOf("Android") > -1))
                        return;
                    b = "android"
                }
                "ios" === b ? this._bindScrollWorkaround() : "android" === 
                b && d && 534 > d && (this._bindScrollWorkaround(),
                this._bindListThumbWorkaround())
            },
            _viewportOffset: function() {
                var a = this.element
                  , e = a.hasClass("ui-header")
                  , d = Math.abs(a.offset().top - this.window.scrollTop());
                return e || (d = Math.round(d - this.window.height() + a.outerHeight()) - 60),
                d
            },
            _bindScrollWorkaround: function() {
                var a = this;
                this._on(this.window, {
                    scrollstop: function() {
                        a._viewportOffset() > 2 && a._visible && a._triggerRedraw()
                    }
                })
            },
            _bindListThumbWorkaround: function() {
                this.element.closest(".ui-page").addClass("ui-android-2x-fixed")
            },
            _triggerRedraw: function() {
                var f = parseFloat(a(".ui-page-active").css("padding-bottom"));
                a(".ui-page-active").css("padding-bottom", f + 1 + "px");
                setTimeout(function() {
                    a(".ui-page-active").css("padding-bottom", f + "px")
                }
                , 0)
            },
            destroy: function() {
                this._super();
                this.element.closest(".ui-page-active").removeClass("ui-android-2x-fix")
            }
        })
    }
    )(j);
    (function(a, f) {
        var e = a.mobile.browser.oldIE && a.mobile.browser.oldIE <= 8
          , d = a("<div class='ui-popup-arrow-guide'></div><div class='ui-popup-arrow-container" + (e ? " ie" : "") + "'><div class='ui-popup-arrow'></div></div>");
        a.widget("mobile.popup", a.mobile.popup, {
            options: {
                arrow: ""
            },
            _create: function() {
                var a = this._super();
                return this.options.arrow && (this._ui.arrow = this._addArrow()),
                a
            },
            _addArrow: function() {
                var a, e = this.options, f, g = d.clone();
                f = g.eq(0);
                g = g.eq(1);
                var k = g.children();
                f = {
                    arEls: g.add(f),
                    gd: f,
                    ct: g,
                    ar: k
                };
                return a = this._themeClassFromOption("ui-body-", e.theme),
                f.ar.addClass(a + (e.shadow ? " ui-overlay-shadow" : "")),
                f.arEls.hide().appendTo(this.element),
                f
            },
            _unenhance: function() {
                var a = this._ui.arrow;
                return a && a.arEls.remove(),
                this._super()
            },
            _tryAnArrow: function(a, d, e, f, g) {
                var k, j, p, s = {}, r = {};
                return f.arFull[a.dimKey] > f.guideDims[a.dimKey] ? g : (s[a.fst] = e[a.fst] + (f.arHalf[a.oDimKey] + f.menuHalf[a.oDimKey]) * a.offsetFactor - f.contentBox[a.fst] + (f.clampInfo.menuSize[a.oDimKey] - f.contentBox[a.oDimKey]) * a.arrowOffsetFactor,
                s[a.snd] = e[a.snd],
                k = f.result || this._calculateFinalLocation(s, f.clampInfo),
                j = {
                    x: k.left,
                    y: k.top
                },
                r[a.fst] = j[a.fst] + f.contentBox[a.fst] + a.tipOffset,
                r[a.snd] = Math.max(k[a.prop] + f.guideOffset[a.prop] + f.arHalf[a.dimKey], 
                Math.min(k[a.prop] + f.guideOffset[a.prop] + f.guideDims[a.dimKey] - f.arHalf[a.dimKey], e[a.snd])),
                p = Math.abs(e.x - r.x) + Math.abs(e.y - r.y),
                (!g || p < g.diff) && (r[a.snd] -= f.arHalf[a.dimKey] + k[a.prop] + f.contentBox[a.snd],
                g = {
                    dir: d,
                    diff: p,
                    result: k,
                    posProp: a.prop,
                    posVal: r[a.snd]
                }),
                g)
            },
            _getPlacementState: function(a) {
                var d, e, f = this._ui.arrow;
                a = {
                    clampInfo: this._clampPopupWidth(!a),
                    arFull: {
                        cx: f.ct.width(),
                        cy: f.ct.height()
                    },
                    guideDims: {
                        cx: f.gd.width(),
                        cy: f.gd.height()
                    },
                    guideOffset: f.gd.offset()
                };
                return d = this.element.offset(),
                f.gd.css({
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0
                }),
                e = f.gd.offset(),
                a.contentBox = {
                    x: e.left - d.left,
                    y: e.top - d.top,
                    cx: f.gd.width(),
                    cy: f.gd.height()
                },
                f.gd.removeAttr("style"),
                a.guideOffset = {
                    left: a.guideOffset.left - d.left,
                    top: a.guideOffset.top - d.top
                },
                a.arHalf = {
                    cx: a.arFull.cx / 2,
                    cy: a.arFull.cy / 2
                },
                a.menuHalf = {
                    cx: a.clampInfo.menuSize.cx / 2,
                    cy: a.clampInfo.menuSize.cy / 2
                },
                a
            },
            _placementCoords: function(b) {
                var d, f, g, k = this.options.arrow, j = this._ui.arrow;
                return j ? (j.arEls.show(),
                d = this._getPlacementState(!0),
                g = {
                    l: {
                        fst: "x",
                        snd: "y",
                        prop: "top",
                        dimKey: "cy",
                        oDimKey: "cx",
                        offsetFactor: 1,
                        tipOffset: -d.arHalf.cx,
                        arrowOffsetFactor: 0
                    },
                    r: {
                        fst: "x",
                        snd: "y",
                        prop: "top",
                        dimKey: "cy",
                        oDimKey: "cx",
                        offsetFactor: -1,
                        tipOffset: d.arHalf.cx + d.contentBox.cx,
                        arrowOffsetFactor: 1
                    },
                    b: {
                        fst: "y",
                        snd: "x",
                        prop: "left",
                        dimKey: "cx",
                        oDimKey: "cy",
                        offsetFactor: -1,
                        tipOffset: d.arHalf.cy + d.contentBox.cy,
                        arrowOffsetFactor: 1
                    },
                    t: {
                        fst: "y",
                        snd: "x",
                        prop: "left",
                        dimKey: "cx",
                        oDimKey: "cy",
                        offsetFactor: 1,
                        tipOffset: -d.arHalf.cy,
                        arrowOffsetFactor: 0
                    }
                },
                a.each((k === !0 ? "l,t,r,b" : 
                k).split(","), a.proxy(function(a, e) {
                    f = this._tryAnArrow(g[e], e, b, d, f)
                }
                , this)),
                f ? (j.ct.removeClass("ui-popup-arrow-l ui-popup-arrow-t ui-popup-arrow-r ui-popup-arrow-b").addClass("ui-popup-arrow-" + f.dir).removeAttr("style").css(f.posProp, f.posVal).show(),
                e || (this.element.offset(),
                j.ct.offset()),
                f.result) : (j.arEls.hide(),
                this._super(b))) : this._super(b)
            },
            _setOptions: function(a) {
                var d, e = this.options.theme, g = this._ui.arrow, k = this._super(a);
                if (a.arrow !== f) {
                    if (!g && a.arrow)
                        return void (this._ui.arrow = this._addArrow());
                    g && !a.arrow && (g.arEls.remove(),
                    this._ui.arrow = null )
                }
                return g = this._ui.arrow,
                g && (a.theme !== f && (e = this._themeClassFromOption("ui-body-", e),
                d = this._themeClassFromOption("ui-body-", a.theme),
                g.ar.removeClass(e).addClass(d)),
                a.shadow !== f && g.ar.toggleClass("ui-overlay-shadow", a.shadow)),
                k
            },
            _destroy: function() {
                var a = this._ui.arrow;
                return a && a.arEls.remove(),
                this._super()
            }
        })
    }
    )(j);
    (function(a, f) {
        a.widget("mobile.panel", {
            options: {
                classes: {
                    panel: "ui-panel",
                    panelOpen: "ui-panel-open",
                    panelClosed: "ui-panel-closed",
                    panelFixed: "ui-panel-fixed",
                    panelInner: "ui-panel-inner",
                    modal: "ui-panel-dismiss",
                    modalOpen: "ui-panel-dismiss-open",
                    pageContainer: "ui-panel-page-container",
                    pageWrapper: "ui-panel-wrapper",
                    pageFixedToolbar: "ui-panel-fixed-toolbar",
                    pageContentPrefix: "ui-panel-page-content",
                    animate: "ui-panel-animate"
                },
                animate: !0,
                theme: null ,
                position: "left",
                dismissible: !0,
                display: "reveal",
                swipeClose: !0,
                positionFixed: !1
            },
            _closeLink: null ,
            _parentPage: null ,
            _page: null ,
            _modal: null ,
            _panelInner: null ,
            _wrapper: null ,
            _fixedToolbars: null ,
            _create: function() {
                var e = this.element
                  , d = e.closest(".ui-page, :jqmData(role='page')");
                a.extend(this, {
                    _closeLink: e.find(":jqmData(rel='close')"),
                    _parentPage: d.length > 0 ? d : !1,
                    _openedPage: null ,
                    _page: this._getPage,
                    _panelInner: this._getPanelInner(),
                    _fixedToolbars: this._getFixedToolbars
                });
                "overlay" !== this.options.display && this._getWrapper();
                this._addPanelClasses();
                a.support.cssTransform3d && this.options.animate && this.element.addClass(this.options.classes.animate);
                this._bindUpdateLayout();
                this._bindCloseEvents();
                this._bindLinkListeners();
                this._bindPageEvents();
                this.options.dismissible && this._createModal();
                this._bindSwipeEvents()
            },
            _getPanelInner: function() {
                var a = this.element.find("." + this.options.classes.panelInner);
                return 0 === a.length && (a = this.element.children().wrapAll("<div class='" + this.options.classes.panelInner + "' />").parent()),
                a
            },
            _createModal: function() {
                var e = this
                  , d = e._parentPage ? e._parentPage.parent() : e.element.parent();
                e._modal = a("<div class='" + e.options.classes.modal + "'></div>").on("mousedown", 
                function() {
                    e.close()
                }
                ).appendTo(d)
            },
            _getPage: function() {
                return this._openedPage || this._parentPage || a("." + a.mobile.activePageClass)
            },
            _getWrapper: function() {
                var a = this._page().find("." + this.options.classes.pageWrapper);
                0 === a.length && (a = this._page().children(".ui-header:not(.ui-header-fixed), .ui-content:not(.ui-popup), .ui-footer:not(.ui-footer-fixed)").wrapAll("<div class='" + this.options.classes.pageWrapper + "'></div>").parent());
                this._wrapper = a
            },
            _getFixedToolbars: function() {
                var e = a("body").children(".ui-header-fixed, .ui-footer-fixed")
                  , 
                d = this._page().find(".ui-header-fixed, .ui-footer-fixed");
                return e.add(d).addClass(this.options.classes.pageFixedToolbar)
            },
            _getPosDisplayClasses: function(a) {
                return a + "-position-" + this.options.position + " " + a + "-display-" + this.options.display
            },
            _getPanelClasses: function() {
                var a = this.options.classes.panel + " " + this._getPosDisplayClasses(this.options.classes.panel) + " " + this.options.classes.panelClosed + " ui-body-" + (this.options.theme ? this.options.theme : "inherit");
                return this.options.positionFixed && (a += " " + 
                this.options.classes.panelFixed),
                a
            },
            _addPanelClasses: function() {
                this.element.addClass(this._getPanelClasses())
            },
            _handleCloseClick: function(a) {
                a.isDefaultPrevented() || this.close()
            },
            _bindCloseEvents: function() {
                this._on(this._closeLink, {
                    click: "_handleCloseClick"
                });
                this._on({
                    "click a:jqmData(ajax='false')": "_handleCloseClick"
                })
            },
            _positionPanel: function(e) {
                var d = this._panelInner.outerHeight()
                  , b = d > a.mobile.getScreenHeight();
                b || !this.options.positionFixed ? (b && (this._unfixPanel(),
                a.mobile.resetActivePageHeight(d)),
                e && this.window[0].scrollTo(0, a.mobile.defaultHomeScroll)) : this._fixPanel()
            },
            _bindFixListener: function() {
                this._on(a(g), {
                    throttledresize: "_positionPanel"
                })
            },
            _unbindFixListener: function() {
                this._off(a(g), "throttledresize")
            },
            _unfixPanel: function() {
                this.options.positionFixed && a.support.fixedPosition && this.element.removeClass(this.options.classes.panelFixed)
            },
            _fixPanel: function() {
                this.options.positionFixed && a.support.fixedPosition && this.element.addClass(this.options.classes.panelFixed)
            },
            _bindUpdateLayout: function() {
                var a = 
                this;
                a.element.on("updatelayout", function() {
                    a._open && a._positionPanel()
                }
                )
            },
            _bindLinkListeners: function() {
                this._on("body", {
                    "click a": "_handleClick"
                })
            },
            _handleClick: function(e) {
                var d, b = this.element.attr("id");
                e.currentTarget.href.split("#")[1] === b && b !== f && (e.preventDefault(),
                d = a(e.target),
                d.hasClass("ui-btn") && (d.addClass(a.mobile.activeBtnClass),
                this.element.one("panelopen panelclose", function() {
                    d.removeClass(a.mobile.activeBtnClass)
                }
                )),
                this.toggle())
            },
            _bindSwipeEvents: function() {
                var a = this
                  , d = a._modal ? 
                a.element.add(a._modal) : a.element;
                a.options.swipeClose && ("left" === a.options.position ? d.on("swipeleft.panel", function() {
                    a.close()
                }
                ) : d.on("swiperight.panel", function() {
                    a.close()
                }
                ))
            },
            _bindPageEvents: function() {
                var a = this;
                this.document.on("panelbeforeopen", function(d) {
                    a._open && d.target !== a.element[0] && a.close()
                }
                ).on("keyup.panel", function(d) {
                    27 === d.keyCode && a._open && a.close()
                }
                );
                this._parentPage || "overlay" === this.options.display || this._on(this.document, {
                    pageshow: "_getWrapper"
                });
                a._parentPage ? this.document.on("pagehide", 
                ":jqmData(role='page')", function() {
                    a._open && a.close(!0)
                }
                ) : this.document.on("pagebeforehide", function() {
                    a._open && a.close(!0)
                }
                )
            },
            _open: !1,
            _pageContentOpenClasses: null ,
            _modalOpenClasses: null ,
            open: function(e) {
                if (!this._open) {
                    var d = this
                      , b = d.options
                      , h = function() {
                        d._off(d.document, "panelclose");
                        d._page().jqmData("panel", "open");
                        a.support.cssTransform3d && b.animate && "overlay" !== b.display && (d._wrapper.addClass(b.classes.animate),
                        d._fixedToolbars().addClass(b.classes.animate));
                        !e && a.support.cssTransform3d && 
                        b.animate ? (d._wrapper || d.element).animationComplete(f, "transition") : setTimeout(f, 0);
                        b.theme && "overlay" !== b.display && d._page().parent().addClass(b.classes.pageContainer + "-themed " + b.classes.pageContainer + "-" + b.theme);
                        d.element.removeClass(b.classes.panelClosed).addClass(b.classes.panelOpen);
                        d._positionPanel(!0);
                        d._pageContentOpenClasses = d._getPosDisplayClasses(b.classes.pageContentPrefix);
                        "overlay" !== b.display && (d._page().parent().addClass(b.classes.pageContainer),
                        d._wrapper.addClass(d._pageContentOpenClasses),
                        d._fixedToolbars().addClass(d._pageContentOpenClasses));
                        d._modalOpenClasses = d._getPosDisplayClasses(b.classes.modal) + " " + b.classes.modalOpen;
                        d._modal && d._modal.addClass(d._modalOpenClasses).height(Math.max(d._modal.height(), d.document.height()))
                    }
                      , f = function() {
                        d._open && ("overlay" !== b.display && (d._wrapper.addClass(b.classes.pageContentPrefix + "-open"),
                        d._fixedToolbars().addClass(b.classes.pageContentPrefix + "-open")),
                        d._bindFixListener(),
                        d._trigger("open"),
                        d._openedPage = d._page())
                    }
                    ;
                    d._trigger("beforeopen");
                    "open" === d._page().jqmData("panel") ? d._on(d.document, {
                        panelclose: h
                    }) : h();
                    d._open = !0
                }
            },
            close: function(e) {
                if (this._open) {
                    var d = this
                      , b = this.options
                      , h = function() {
                        b.theme && "overlay" !== b.display && d._page().parent().removeClass(b.classes.pageContainer + "-themed " + b.classes.pageContainer + "-" + b.theme);
                        d.element.addClass(b.classes.panelClosed);
                        "overlay" !== b.display && (d._page().parent().removeClass(b.classes.pageContainer),
                        d._wrapper.removeClass(b.classes.pageContentPrefix + "-open"),
                        d._fixedToolbars().removeClass(b.classes.pageContentPrefix + 
                        "-open"));
                        a.support.cssTransform3d && b.animate && "overlay" !== b.display && (d._wrapper.removeClass(b.classes.animate),
                        d._fixedToolbars().removeClass(b.classes.animate));
                        d._fixPanel();
                        d._unbindFixListener();
                        a.mobile.resetActivePageHeight();
                        d._page().jqmRemoveData("panel");
                        d._trigger("close");
                        d._openedPage = null 
                    }
                    ;
                    d._trigger("beforeclose");
                    d.element.removeClass(b.classes.panelOpen);
                    "overlay" !== b.display && (d._wrapper.removeClass(d._pageContentOpenClasses),
                    d._fixedToolbars().removeClass(d._pageContentOpenClasses));
                    !e && a.support.cssTransform3d && b.animate ? (d._wrapper || d.element).animationComplete(h, "transition") : setTimeout(h, 0);
                    d._modal && d._modal.removeClass(d._modalOpenClasses).height("");
                    d._open = !1
                }
            },
            toggle: function() {
                this[this._open ? "close" : "open"]()
            },
            _destroy: function() {
                var e, d = this.options, b = a("body > :mobile-panel").length + a.mobile.activePage.find(":mobile-panel").length > 1;
                "overlay" !== d.display && (e = a("body > :mobile-panel").add(a.mobile.activePage.find(":mobile-panel")),
                0 === e.not(".ui-panel-display-overlay").not(this.element).length && 
                this._wrapper.children().unwrap(),
                this._open && (this._fixedToolbars().removeClass(d.classes.pageContentPrefix + "-open"),
                a.support.cssTransform3d && d.animate && this._fixedToolbars().removeClass(d.classes.animate),
                this._page().parent().removeClass(d.classes.pageContainer),
                d.theme && this._page().parent().removeClass(d.classes.pageContainer + "-themed " + d.classes.pageContainer + "-" + d.theme)));
                b || this.document.off("panelopen panelclose");
                this._open && this._page().jqmRemoveData("panel");
                this._panelInner.children().unwrap();
                this.element.removeClass([this._getPanelClasses(), d.classes.panelOpen, d.classes.animate].join(" ")).off("swipeleft.panel swiperight.panel").off("panelbeforeopen").off("panelhide").off("keyup.panel").off("updatelayout");
                this._modal && this._modal.remove()
            }
        })
    }
    )(j);
    (function(a, f) {
        a.widget("mobile.table", {
            options: {
                classes: {
                    table: "ui-table"
                },
                enhanced: !1
            },
            _create: function() {
                this.options.enhanced || this.element.addClass(this.options.classes.table);
                a.extend(this, {
                    headers: f,
                    allHeaders: f
                });
                this._refresh(!0)
            },
            _setHeaders: function() {
                var a = this.element.find("thead tr");
                this.headers = this.element.find("tr:eq(0)").children();
                this.allHeaders = this.headers.add(a.children())
            },
            refresh: function() {
                this._refresh()
            },
            rebuild: a.noop,
            _refresh: function() {
                var e = this.element
                  , d = e.find("thead tr");
                this._setHeaders();
                d.each(function() {
                    var b = 0;
                    a(this).children().each(function() {
                        var h, f = parseInt(this.getAttribute("colspan"), 10), g = ":nth-child(" + (b + 1) + ")";
                        if (this.setAttribute("data-" + a.mobile.ns + "colstart", b + 1),
                        f)
                            for (h = 0; f - 1 > h; h++)
                                b++,
                                g += ", :nth-child(" + (b + 1) + ")";
                        a(this).jqmData("cells", e.find("tr").not(d.eq(0)).not(this).children(g));
                        b++
                    }
                    )
                }
                )
            }
        })
    }
    )(j);
    (function(a) {
        a.widget("mobile.table", a.mobile.table, {
            options: {
                mode: "columntoggle",
                columnBtnTheme: null ,
                columnPopupTheme: null ,
                columnBtnText: "Columns...",
                classes: a.extend(a.mobile.table.prototype.options.classes, {
                    popup: "ui-table-columntoggle-popup",
                    columnBtn: "ui-table-columntoggle-btn",
                    priorityPrefix: "ui-table-priority-",
                    columnToggleTable: "ui-table-columntoggle"
                })
            },
            _create: function() {
                this._super();
                "columntoggle" === this.options.mode && (a.extend(this, {
                    _menu: null 
                }),
                this.options.enhanced ? (this._menu = a(this.document[0].getElementById(this._id() + "-popup")).children().first(),
                this._addToggles(this._menu, !0)) : (this._menu = this._enhanceColToggle(),
                this.element.addClass(this.options.classes.columnToggleTable)),
                this._setupEvents(),
                this._setToggleState())
            },
            _id: function() {
                return this.element.attr("id") || this.widgetName + this.uuid
            },
            _setupEvents: function() {
                this._on(this.window, {
                    throttledresize: "_setToggleState"
                });
                this._on(this._menu, {
                    "change input": "_menuInputChange"
                })
            },
            _addToggles: function(f, e) {
                var d, b = 0, h = this.options, g = f.controlgroup("container");
                e ? d = f.find("input") : g.empty();
                this.headers.not("td").each(function() {
                    var f, k, j = a(this), q = a.mobile.getAttribute(this, "priority");
                    q && (k = j.add(j.jqmData("cells")),
                    k.addClass(h.classes.priorityPrefix + q),
                    f = (e ? d.eq(b++) : a("<label><input type='checkbox' checked />" + (j.children("abbr").first().attr("title") || j.text()) + "</label>").appendTo(g).children(0).checkboxradio({
                        theme: h.columnPopupTheme
                    })).jqmData("header", 
                    j).jqmData("cells", k),
                    j.jqmData("input", f))
                }
                );
                e || f.controlgroup("refresh")
            },
            _menuInputChange: function(f) {
                f = a(f.target);
                var e = f[0].checked;
                f.jqmData("cells").toggleClass("ui-table-cell-hidden", !e).toggleClass("ui-table-cell-visible", e)
            },
            _unlockCells: function(a) {
                a.removeClass("ui-table-cell-hidden ui-table-cell-visible")
            },
            _enhanceColToggle: function() {
                var f, e, d, b, h = this.element, g = this.options, k = a.mobile.ns, j = this.document[0].createDocumentFragment();
                return f = this._id() + "-popup",
                e = a("<a href='#" + f + "' class='" + 
                g.classes.columnBtn + " ui-btn ui-btn-" + (g.columnBtnTheme || "a") + " ui-corner-all ui-shadow ui-mini' data-" + k + "rel='popup'>" + g.columnBtnText + "</a>"),
                d = a("<div class='" + g.classes.popup + "' id='" + f + "'></div>"),
                b = a("<fieldset></fieldset>").controlgroup(),
                this._addToggles(b, !1),
                b.appendTo(d),
                j.appendChild(d[0]),
                j.appendChild(e[0]),
                h.before(j),
                d.popup(),
                b
            },
            rebuild: function() {
                this._super();
                "columntoggle" === this.options.mode && this._refresh(!1)
            },
            _refresh: function(f) {
                var e, d;
                if (this._super(f),
                !f && "columntoggle" === 
                this.options.mode) {
                    e = this.headers;
                    d = [];
                    this._menu.find("input").each(function() {
                        var b = a(this)
                          , h = b.jqmData("header");
                        h = e.index(h[0]);
                        h > -1 && !b.prop("checked") && d.push(h)
                    }
                    );
                    this._unlockCells(this.element.find(".ui-table-cell-hidden, .ui-table-cell-visible"));
                    this._addToggles(this._menu, f);
                    for (f = d.length - 1; f > -1; f--)
                        e.eq(d[f]).jqmData("input").prop("checked", !1).checkboxradio("refresh").trigger("change")
                }
            },
            _setToggleState: function() {
                this._menu.find("input").each(function() {
                    var f = a(this);
                    this.checked = "table-cell" === 
                    f.jqmData("cells").eq(0).css("display");
                    f.checkboxradio("refresh")
                }
                )
            },
            _destroy: function() {
                this._super()
            }
        })
    }
    )(j);
    (function(a) {
        a.widget("mobile.table", a.mobile.table, {
            options: {
                mode: "reflow",
                classes: a.extend(a.mobile.table.prototype.options.classes, {
                    reflowTable: "ui-table-reflow",
                    cellLabels: "ui-table-cell-label"
                })
            },
            _create: function() {
                this._super();
                "reflow" === this.options.mode && (this.options.enhanced || (this.element.addClass(this.options.classes.reflowTable),
                this._updateReflow()))
            },
            rebuild: function() {
                this._super();
                "reflow" === this.options.mode && this._refresh(!1)
            },
            _refresh: function(a) {
                this._super(a);
                a || "reflow" !== this.options.mode || this._updateReflow()
            },
            _updateReflow: function() {
                var f = this
                  , e = this.options;
                a(f.allHeaders.get().reverse()).each(function() {
                    var d, b, h = a(this).jqmData("cells"), g = a.mobile.getAttribute(this, "colstart"), k = h.not(this).filter("thead th").length && " ui-table-cell-label-top", j = a(this).clone().contents();
                    j.length > 0 && (k ? (d = parseInt(this.getAttribute("colspan"), 10),
                    b = "",
                    d && (b = "td:nth-child(" + d + 
                    "n + " + g + ")"),
                    f._addLabels(h.filter(b), e.classes.cellLabels + k, j)) : f._addLabels(h, e.classes.cellLabels, j))
                }
                )
            },
            _addLabels: function(f, e, d) {
                1 === d.length && "abbr" === d[0].nodeName.toLowerCase() && (d = d.eq(0).attr("title"));
                f.not(":has(b." + e + ")").prepend(a("<b class='" + e + "'></b>").append(d))
            }
        })
    }
    )(j);
    (function(a, f) {
        var e = function(d, b) {
            return -1 === ("" + (a.mobile.getAttribute(this, "filtertext") || a(this).text())).toLowerCase().indexOf(b)
        }
        ;
        a.widget("mobile.filterable", {
            initSelector: ":jqmData(filter='true')",
            options: {
                filterReveal: !1,
                filterCallback: e,
                enhanced: !1,
                input: null ,
                children: "> li, > option, > optgroup option, > tbody tr, > .ui-controlgroup-controls > .ui-btn, > .ui-controlgroup-controls > .ui-checkbox, > .ui-controlgroup-controls > .ui-radio"
            },
            _create: function() {
                var d = this.options;
                a.extend(this, {
                    _search: null ,
                    _timer: 0
                });
                this._setInput(d.input);
                d.enhanced || this._filterItems((this._search && this._search.val() || "").toLowerCase())
            },
            _onKeyUp: function() {
                var d, b, e = this._search;
                if (e && !(d = e.val().toLowerCase(),
                b = a.mobile.getAttribute(e[0], 
                "lastval") + "",
                b && b === d))
                    this._timer && (g.clearTimeout(this._timer),
                    this._timer = 0),
                    this._timer = this._delay(function() {
                        return this._trigger("beforefilter", null , {
                            input: e
                        }) === !1 ? !1 : (e[0].setAttribute("data-" + a.mobile.ns + "lastval", d),
                        this._filterItems(d),
                        void (this._timer = 0))
                    }
                    , 250)
            },
            _getFilterableItems: function() {
                var d = this.element
                  , b = this.options.children;
                b = b ? a.isFunction(b) ? b() : b.nodeName ? a(b) : b.jquery ? b : this.element.find(b) : {
                    length: 0
                };
                return 0 === b.length && (b = d.children()),
                b
            },
            _filterItems: function(d) {
                var b, 
                h, f, g, k = [], j = [], q = this.options, p = this._getFilterableItems();
                if (null  != d) {
                    h = q.filterCallback || e;
                    f = p.length;
                    for (b = 0; f > b; b++)
                        g = h.call(p[b], b, d) ? j : k,
                        g.push(p[b])
                }
                0 === j.length ? p[q.filterReveal && 0 === d.length ? "addClass" : "removeClass"]("ui-screen-hidden") : (a(j).addClass("ui-screen-hidden"),
                a(k).removeClass("ui-screen-hidden"));
                this._refreshChildWidget();
                this._trigger("filter", null , {
                    items: p
                })
            },
            _refreshChildWidget: function() {
                var d, b, e = ["collapsibleset", "selectmenu", "controlgroup", "listview"];
                for (b = e.length - 
                1; b > -1; b--)
                    d = e[b],
                    a.mobile[d] && (d = this.element.data("mobile-" + d),
                    d && a.isFunction(d.refresh) && d.refresh())
            },
            _setInput: function(d) {
                var b = this._search;
                this._timer && (g.clearTimeout(this._timer),
                this._timer = 0);
                b && (this._off(b, "keyup change input"),
                b = null );
                d && (b = d.jquery ? d : d.nodeName ? a(d) : this.document.find(d),
                this._on(b, {
                    keydown: "_onKeyDown",
                    keypress: "_onKeyPress",
                    keyup: "_onKeyUp",
                    change: "_onKeyUp",
                    input: "_onKeyUp"
                }));
                this._search = b
            },
            _onKeyDown: function(d) {
                d.keyCode === a.ui.keyCode.ENTER && (d.preventDefault(),
                this._preventKeyPress = !0)
            },
            _onKeyPress: function(a) {
                this._preventKeyPress && (a.preventDefault(),
                this._preventKeyPress = !1)
            },
            _setOptions: function(a) {
                var b = !(a.filterReveal === f && a.filterCallback === f && a.children === f);
                this._super(a);
                a.input !== f && (this._setInput(a.input),
                b = !0);
                b && this.refresh()
            },
            _destroy: function() {
                var a = this.options
                  , b = this._getFilterableItems();
                a.enhanced ? b.toggleClass("ui-screen-hidden", a.filterReveal) : b.removeClass("ui-screen-hidden")
            },
            refresh: function() {
                this._timer && (g.clearTimeout(this._timer),
                this._timer = 0);
                this._filterItems((this._search && this._search.val() || "").toLowerCase())
            }
        })
    }
    )(j);
    (function(a, f) {
        var e = function(a, b) {
            return function(d) {
                b.call(this, d);
                a._syncTextInputOptions(d)
            }
        }
          , d = /(^|\s)ui-li-divider(\s|$)/
          , b = a.mobile.filterable.prototype.options.filterCallback;
        a.mobile.filterable.prototype.options.filterCallback = function(a, e) {
            return !this.className.match(d) && b.call(this, a, e)
        }
        ;
        a.widget("mobile.filterable", a.mobile.filterable, {
            options: {
                filterPlaceholder: "Filter items...",
                filterTheme: null 
            },
            _create: function() {
                var b, d, e = this.element, f = ["collapsibleset", "selectmenu", "controlgroup", "listview"], g = {};
                this._super();
                a.extend(this, {
                    _widget: null 
                });
                for (b = f.length - 1; b > -1; b--)
                    if (d = f[b],
                    a.mobile[d]) {
                        if (this._setWidget(e.data("mobile-" + d)))
                            break;
                        g[d + "create"] = "_handleCreate"
                    }
                this._widget || this._on(e, g)
            },
            _handleCreate: function(a) {
                this._setWidget(this.element.data("mobile-" + a.type.substring(0, a.type.length - 6)))
            },
            _trigger: function(a, b, d) {
                return this._widget && "mobile-listview" === this._widget.widgetFullName && 
                "beforefilter" === a && this._widget._trigger("beforefilter", b, d),
                this._super(a, b, d)
            },
            _setWidget: function(a) {
                return !this._widget && a && (this._widget = a,
                this._widget._setOptions = e(this, this._widget._setOptions)),
                this._widget && (this._syncTextInputOptions(this._widget.options),
                "listview" === this._widget.widgetName && (this._widget.options.hideDividers = !0,
                this._widget.element.listview("refresh"))),
                !!this._widget
            },
            _isSearchInternal: function() {
                return this._search && this._search.jqmData("ui-filterable-" + this.uuid + 
                "-internal")
            },
            _setInput: function(b) {
                var d = this.options
                  , e = !0
                  , f = {};
                if (!b) {
                    if (this._isSearchInternal())
                        return;
                    e = !1;
                    b = a("<input data-" + a.mobile.ns + "type='search' placeholder='" + d.filterPlaceholder + "'></input>").jqmData("ui-filterable-" + this.uuid + "-internal", !0);
                    a("<form class='ui-filterable'></form>").append(b).submit(function(a) {
                        a.preventDefault();
                        b.blur()
                    }
                    ).insertBefore(this.element);
                    a.mobile.textinput && (null  != this.options.filterTheme && (f.theme = d.filterTheme),
                    b.textinput(f))
                }
                this._super(b);
                this._isSearchInternal() && 
                e && this._search.attr("placeholder", this.options.filterPlaceholder)
            },
            _setOptions: function(b) {
                var d = this._super(b);
                return b.filterPlaceholder !== f && this._isSearchInternal() && this._search.attr("placeholder", b.filterPlaceholder),
                b.filterTheme !== f && this._search && a.mobile.textinput && this._search.textinput("option", "theme", b.filterTheme),
                d
            },
            _refreshChildWidget: function() {
                this._refreshingChildWidget = !0;
                this._superApply(arguments);
                this._refreshingChildWidget = !1
            },
            refresh: function() {
                this._refreshingChildWidget || 
                this._superApply(arguments)
            },
            _destroy: function() {
                this._isSearchInternal() && this._search.remove();
                this._super()
            },
            _syncTextInputOptions: function(b) {
                var d, e = {};
                if (this._isSearchInternal() && a.mobile.textinput) {
                    for (d in a.mobile.textinput.prototype.options)
                        b[d] !== f && (e[d] = "theme" === d && null  != this.options.filterTheme ? this.options.filterTheme : b[d]);
                    this._search.textinput("option", e)
                }
            }
        });
        a.widget("mobile.listview", a.mobile.listview, {
            options: {
                filter: !1
            },
            _create: function() {
                return this.options.filter !== !0 || this.element.data("mobile-filterable") || 
                this.element.filterable(),
                this._super()
            },
            refresh: function() {
                var a;
                this._superApply(arguments);
                this.options.filter === !0 && (a = this.element.data("mobile-filterable"),
                a && a.refresh())
            }
        })
    }
    )(j);
    (function(a, f) {
        function e(a) {
            return a.hash.length > 1 && decodeURIComponent(a.href.replace(b, "")) === decodeURIComponent(location.href.replace(b, ""))
        }
        var d = 0
          , b = /#.*$/;
        a.widget("ui.tabs", {
            version: "fadf2b312a05040436451c64bbfaf4814bc62c56",
            delay: 300,
            options: {
                active: null ,
                collapsible: !1,
                event: "click",
                heightStyle: "content",
                hide: null ,
                show: null ,
                activate: null ,
                beforeActivate: null ,
                beforeLoad: null ,
                load: null 
            },
            _create: function() {
                var b = this
                  , d = this.options;
                this.running = !1;
                this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible", d.collapsible).delegate(".ui-tabs-nav > li", "mousedown" + this.eventNamespace, function(b) {
                    a(this).is(".ui-state-disabled") && b.preventDefault()
                }
                ).delegate(".ui-tabs-anchor", "focus" + this.eventNamespace, function() {
                    a(this).closest("li").is(".ui-state-disabled") && this.blur()
                }
                );
                this._processTabs();
                d.active = this._initialActive();
                a.isArray(d.disabled) && (d.disabled = a.unique(d.disabled.concat(a.map(this.tabs.filter(".ui-state-disabled"), function(a) {
                    return b.tabs.index(a)
                }
                ))).sort());
                this.active = this.options.active !== !1 && this.anchors.length ? this._findActive(d.active) : a();
                this._refresh();
                this.active.length && this.load(d.active)
            },
            _initialActive: function() {
                var b = this.options.active
                  , d = this.options.collapsible
                  , e = location.hash.substring(1);
                return null  === b && (e && this.tabs.each(function(d, 
                f) {
                    return a(f).attr("aria-controls") === e ? (b = d,
                    !1) : void 0
                }
                ),
                null  === b && (b = this.tabs.index(this.tabs.filter(".ui-tabs-active"))),
                (null  === b || -1 === b) && (b = this.tabs.length ? 0 : !1)),
                b !== !1 && (b = this.tabs.index(this.tabs.eq(b)),
                -1 === b && (b = d ? !1 : 0)),
                !d && b === !1 && this.anchors.length && (b = 0),
                b
            },
            _getCreateEventData: function() {
                return {
                    tab: this.active,
                    panel: this.active.length ? this._getPanelForTab(this.active) : a()
                }
            },
            _tabKeydown: function(b) {
                var d = a(this.document[0].activeElement).closest("li")
                  , e = this.tabs.index(d)
                  , f = !0;
                if (!this._handlePageNav(b)) {
                    switch (b.keyCode) {
                    case a.ui.keyCode.RIGHT:
                    case a.ui.keyCode.DOWN:
                        e++;
                        break;
                    case a.ui.keyCode.UP:
                    case a.ui.keyCode.LEFT:
                        f = !1;
                        e--;
                        break;
                    case a.ui.keyCode.END:
                        e = this.anchors.length - 1;
                        break;
                    case a.ui.keyCode.HOME:
                        e = 0;
                        break;
                    case a.ui.keyCode.SPACE:
                        return b.preventDefault(),
                        clearTimeout(this.activating),
                        void this._activate(e);
                    case a.ui.keyCode.ENTER:
                        return b.preventDefault(),
                        clearTimeout(this.activating),
                        void this._activate(e === this.options.active ? !1 : e);
                    default:
                        return
                    }
                    b.preventDefault();
                    clearTimeout(this.activating);
                    e = this._focusNextTab(e, f);
                    b.ctrlKey || (d.attr("aria-selected", "false"),
                    this.tabs.eq(e).attr("aria-selected", "true"),
                    this.activating = this._delay(function() {
                        this.option("active", e)
                    }
                    , this.delay))
                }
            },
            _panelKeydown: function(b) {
                this._handlePageNav(b) || b.ctrlKey && b.keyCode === a.ui.keyCode.UP && (b.preventDefault(),
                this.active.focus())
            },
            _handlePageNav: function(b) {
                return b.altKey && b.keyCode === a.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)),
                !0) : b.altKey && 
                b.keyCode === a.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)),
                !0) : void 0
            },
            _findNextTab: function(b, d) {
                for (var e = this.tabs.length - 1; -1 !== a.inArray((b > e && (b = 0),
                0 > b && (b = e),
                b), this.options.disabled); )
                    b = d ? b + 1 : b - 1;
                return b
            },
            _focusNextTab: function(a, b) {
                return a = this._findNextTab(a, b),
                this.tabs.eq(a).focus(),
                a
            },
            _setOption: function(a, b) {
                return "active" === a ? void this._activate(b) : "disabled" === a ? void this._setupDisabled(b) : (this._super(a, b),
                "collapsible" === a && (this.element.toggleClass("ui-tabs-collapsible", 
                b),
                b || this.options.active !== !1 || this._activate(0)),
                "event" === a && this._setupEvents(b),
                void ("heightStyle" === a && this._setupHeightStyle(b)))
            },
            _tabId: function(a) {
                return a.attr("aria-controls") || "ui-tabs-" + ++d
            },
            _sanitizeSelector: function(a) {
                return a ? a.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
            },
            refresh: function() {
                var b = this.options
                  , d = this.tablist.children(":has(a[href])");
                b.disabled = a.map(d.filter(".ui-state-disabled"), function(a) {
                    return d.index(a)
                }
                );
                this._processTabs();
                b.active !== !1 && this.anchors.length ? 
                this.active.length && !a.contains(this.tablist[0], this.active[0]) ? this.tabs.length === b.disabled.length ? (b.active = !1,
                this.active = a()) : this._activate(this._findNextTab(Math.max(0, b.active - 1), !1)) : b.active = this.tabs.index(this.active) : (b.active = !1,
                this.active = a());
                this._refresh()
            },
            _refresh: function() {
                this._setupDisabled(this.options.disabled);
                this._setupEvents(this.options.event);
                this._setupHeightStyle(this.options.heightStyle);
                this.tabs.not(this.active).attr({
                    "aria-selected": "false",
                    tabIndex: -1
                });
                this.panels.not(this._getPanelForTab(this.active)).hide().attr({
                    "aria-expanded": "false",
                    "aria-hidden": "true"
                });
                this.active.length ? (this.active.addClass("ui-tabs-active ui-state-active").attr({
                    "aria-selected": "true",
                    tabIndex: 0
                }),
                this._getPanelForTab(this.active).show().attr({
                    "aria-expanded": "true",
                    "aria-hidden": "false"
                })) : this.tabs.eq(0).attr("tabIndex", 0)
            },
            _processTabs: function() {
                var b = this;
                this.tablist = this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role", "tablist");
                this.tabs = this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({
                    role: "tab",
                    tabIndex: -1
                });
                this.anchors = this.tabs.map(function() {
                    return a("a", this)[0]
                }
                ).addClass("ui-tabs-anchor").attr({
                    role: "presentation",
                    tabIndex: -1
                });
                this.panels = a();
                this.anchors.each(function(d, f) {
                    var g, k, j, p = a(f).uniqueId().attr("id"), s = a(f).closest("li"), r = s.attr("aria-controls");
                    e(f) ? (g = f.hash,
                    k = b.element.find(b._sanitizeSelector(g))) : (j = b._tabId(s),
                    g = "#" + j,
                    k = b.element.find(g),
                    k.length || (k = b._createPanel(j),
                    k.insertAfter(b.panels[d - 1] || b.tablist)),
                    k.attr("aria-live", "polite"));
                    k.length && (b.panels = b.panels.add(k));
                    r && s.data("ui-tabs-aria-controls", r);
                    s.attr({
                        "aria-controls": g.substring(1),
                        "aria-labelledby": p
                    });
                    k.attr("aria-labelledby", p)
                }
                );
                this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role", "tabpanel")
            },
            _getList: function() {
                return this.element.find("ol,ul").eq(0)
            },
            _createPanel: function(b) {
                return a("<div>").attr("id", b).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", !0)
            },
            _setupDisabled: function(b) {
                a.isArray(b) && (b.length ? b.length === this.anchors.length && 
                (b = !0) : b = !1);
                for (var d, e = 0; d = this.tabs[e]; e++)
                    b === !0 || -1 !== a.inArray(e, b) ? a(d).addClass("ui-state-disabled").attr("aria-disabled", "true") : a(d).removeClass("ui-state-disabled").removeAttr("aria-disabled");
                this.options.disabled = b
            },
            _setupEvents: function(b) {
                var d = {
                    click: function(a) {
                        a.preventDefault()
                    }
                };
                b && a.each(b.split(" "), function(a, b) {
                    d[b] = "_eventHandler"
                }
                );
                this._off(this.anchors.add(this.tabs).add(this.panels));
                this._on(this.anchors, d);
                this._on(this.tabs, {
                    keydown: "_tabKeydown"
                });
                this._on(this.panels, 
                {
                    keydown: "_panelKeydown"
                });
                this._focusable(this.tabs);
                this._hoverable(this.tabs)
            },
            _setupHeightStyle: function(b) {
                var d, e = this.element.parent();
                "fill" === b ? (d = e.height(),
                d -= this.element.outerHeight() - this.element.height(),
                this.element.siblings(":visible").each(function() {
                    var b = a(this)
                      , e = b.css("position");
                    "absolute" !== e && "fixed" !== e && (d -= b.outerHeight(!0))
                }
                ),
                this.element.children().not(this.panels).each(function() {
                    d -= a(this).outerHeight(!0)
                }
                ),
                this.panels.each(function() {
                    a(this).height(Math.max(0, d - a(this).innerHeight() + 
                    a(this).height()))
                }
                ).css("overflow", "auto")) : "auto" === b && (d = 0,
                this.panels.each(function() {
                    d = Math.max(d, a(this).height("").height())
                }
                ).height(d))
            },
            _eventHandler: function(b) {
                var d = this.options
                  , e = this.active
                  , f = a(b.currentTarget).closest("li")
                  , g = f[0] === e[0]
                  , k = g && d.collapsible
                  , j = k ? a() : this._getPanelForTab(f)
                  , s = e.length ? this._getPanelForTab(e) : a();
                e = {
                    oldTab: e,
                    oldPanel: s,
                    newTab: k ? a() : f,
                    newPanel: j
                };
                b.preventDefault();
                f.hasClass("ui-state-disabled") || f.hasClass("ui-tabs-loading") || this.running || g && !d.collapsible || 
                this._trigger("beforeActivate", b, e) === !1 || (d.active = k ? !1 : this.tabs.index(f),
                this.active = g ? a() : f,
                this.xhr && this.xhr.abort(),
                s.length || j.length || a.error("jQuery UI Tabs: Mismatching fragment identifier."),
                j.length && this.load(this.tabs.index(f), b),
                this._toggle(b, e))
            },
            _toggle: function(b, d) {
                function e() {
                    g.running = !1;
                    g._trigger("activate", b, d)
                }
                function f() {
                    d.newTab.closest("li").addClass("ui-tabs-active ui-state-active");
                    k.length && g.options.show ? g._show(k, g.options.show, e) : (k.show(),
                    e())
                }
                var g = this
                  , k = d.newPanel
                  , 
                j = d.oldPanel;
                this.running = !0;
                j.length && this.options.hide ? this._hide(j, this.options.hide, function() {
                    d.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active");
                    f()
                }
                ) : (d.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),
                j.hide(),
                f());
                j.attr({
                    "aria-expanded": "false",
                    "aria-hidden": "true"
                });
                d.oldTab.attr("aria-selected", "false");
                k.length && j.length ? d.oldTab.attr("tabIndex", -1) : k.length && this.tabs.filter(function() {
                    return 0 === a(this).attr("tabIndex")
                }
                ).attr("tabIndex", -1);
                k.attr({
                    "aria-expanded": "true",
                    "aria-hidden": "false"
                });
                d.newTab.attr({
                    "aria-selected": "true",
                    tabIndex: 0
                })
            },
            _activate: function(b) {
                var d;
                b = this._findActive(b);
                b[0] !== this.active[0] && (b.length || (b = this.active),
                d = b.find(".ui-tabs-anchor")[0],
                this._eventHandler({
                    target: d,
                    currentTarget: d,
                    preventDefault: a.noop
                }))
            },
            _findActive: function(b) {
                return b === !1 ? a() : this.tabs.eq(b)
            },
            _getIndex: function(a) {
                return "string" == typeof a && (a = this.anchors.index(this.anchors.filter("[href$='" + a + "']"))),
                a
            },
            _destroy: function() {
                this.xhr && this.xhr.abort();
                this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible");
                this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role");
                this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId();
                this.tabs.add(this.panels).each(function() {
                    a.data(this, "ui-tabs-destroy") ? a(this).remove() : a(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")
                }
                );
                this.tabs.each(function() {
                    var b = a(this)
                      , d = b.data("ui-tabs-aria-controls");
                    d ? b.attr("aria-controls", d).removeData("ui-tabs-aria-controls") : b.removeAttr("aria-controls")
                }
                );
                this.panels.show();
                "content" !== this.options.heightStyle && this.panels.css("height", "")
            },
            enable: function(b) {
                var d = this.options.disabled;
                d !== !1 && (b === f ? d = !1 : (b = this._getIndex(b),
                d = a.isArray(d) ? a.map(d, function(a) {
                    return a !== b ? a : null 
                }
                ) : a.map(this.tabs, function(a, d) {
                    return d !== b ? d : null 
                }
                )),
                this._setupDisabled(d))
            },
            disable: function(b) {
                var d = 
                this.options.disabled;
                if (d !== !0) {
                    if (b === f)
                        d = !0;
                    else {
                        if (b = this._getIndex(b),
                        -1 !== a.inArray(b, d))
                            return;
                        d = a.isArray(d) ? a.merge([b], d).sort() : [b]
                    }
                    this._setupDisabled(d)
                }
            },
            load: function(b, d) {
                b = this._getIndex(b);
                var f = this
                  , g = this.tabs.eq(b)
                  , k = g.find(".ui-tabs-anchor")
                  , j = this._getPanelForTab(g)
                  , p = {
                    tab: g,
                    panel: j
                };
                e(k[0]) || (this.xhr = a.ajax(this._ajaxSettings(k, d, p)),
                this.xhr && "canceled" !== this.xhr.statusText && (g.addClass("ui-tabs-loading"),
                j.attr("aria-busy", "true"),
                this.xhr.success(function(a) {
                    setTimeout(function() {
                        j.html(a);
                        f._trigger("load", d, p)
                    }
                    , 1)
                }
                ).complete(function(a, b) {
                    setTimeout(function() {
                        "abort" === b && f.panels.stop(!1, !0);
                        g.removeClass("ui-tabs-loading");
                        j.removeAttr("aria-busy");
                        a === f.xhr && delete f.xhr
                    }
                    , 1)
                }
                )))
            },
            _ajaxSettings: function(b, d, e) {
                var f = this;
                return {
                    url: b.attr("href"),
                    beforeSend: function(b, h) {
                        return f._trigger("beforeLoad", d, a.extend({
                            jqXHR: b,
                            ajaxSettings: h
                        }, e))
                    }
                }
            },
            _getPanelForTab: function(b) {
                return this.element.find(this._sanitizeSelector("#" + a(b).attr("aria-controls")))
            }
        })
    }
    )(j);
    (function(a, f) {
        function e(a) {
            b = 
            a.originalEvent;
            j = b.accelerationIncludingGravity;
            h = Math.abs(j.x);
            g = Math.abs(j.y);
            k = Math.abs(j.z);
            !f.orientation && (h > 7 || (k > 6 && 8 > g || 8 > k && g > 6) && h > 5) ? d.enabled && d.disable() : d.enabled || d.enable()
        }
        a.mobile.iosorientationfixEnabled = !0;
        var d, b, h, g, k, j, o = navigator.userAgent;
        return /iPhone|iPad|iPod/.test(navigator.platform) && /OS [1-5]_[0-9_]* like Mac OS X/i.test(o) && o.indexOf("AppleWebKit") > -1 ? (d = a.mobile.zoom,
        void a.mobile.document.on("mobileinit", function() {
            a.mobile.iosorientationfixEnabled && a.mobile.window.bind("orientationchange.iosorientationfix", 
            d.enable).bind("devicemotion.iosorientationfix", e)
        }
        )) : void (a.mobile.iosorientationfixEnabled = !1)
    }
    )(j, this);
    (function(a, f, e) {
        function d() {
            b.removeClass("ui-mobile-rendering")
        }
        var b = a("html")
          , h = a.mobile.window;
        a(f.document).trigger("mobileinit");
        a.mobile.gradeA() && (a.mobile.ajaxBlacklist && (a.mobile.ajaxEnabled = !1),
        b.addClass("ui-mobile ui-mobile-rendering"),
        setTimeout(d, 5E3),
        a.extend(a.mobile, {
            initializePage: function() {
                var b = a.mobile.path
                  , f = a(":jqmData(role='page'), :jqmData(role='dialog')")
                  , g = b.stripHash(b.stripQueryParams(b.parseLocation().hash))
                  , 
                j = a.mobile.path.parseLocation()
                  , q = g ? k.getElementById(g) : e;
                f.length || (f = a("body").wrapInner("<div data-" + a.mobile.ns + "role='page'></div>").children(0));
                f.each(function() {
                    var d = a(this);
                    d[0].getAttribute("data-" + a.mobile.ns + "url") || d.attr("data-" + a.mobile.ns + "url", d.attr("id") || b.convertUrlToDataUrl(j.pathname + j.search))
                }
                );
                a.mobile.firstPage = f.first();
                a.mobile.pageContainer = a.mobile.firstPage.parent().addClass("ui-mobile-viewport").pagecontainer();
                a.mobile.navreadyDeferred.resolve();
                h.trigger("pagecontainercreate");
                a.mobile.loading("show");
                d();
                a.mobile.hashListeningEnabled && a.mobile.path.isHashValid(location.hash) && (a(q).is(":jqmData(role='page')") || a.mobile.path.isPath(g) || g === a.mobile.dialogHashKey) ? a.event.special.navigate.isPushStateEnabled() ? (a.mobile.navigate.history.stack = [],
                a.mobile.navigate(a.mobile.path.isPath(location.hash) ? location.hash : location.href)) : h.trigger("hashchange", [!0]) : (a.event.special.navigate.isPushStateEnabled() && a.mobile.navigate.navigator.squash(b.parseLocation().href),
                a.mobile.changePage(a.mobile.firstPage, 
                {
                    transition: "none",
                    reverse: !0,
                    changeHash: !1,
                    fromHashChange: !0
                }))
            }
        }),
        a(function() {
            a.support.inlineSVG();
            a.mobile.hideUrlBar && f.scrollTo(0, 1);
            a.mobile.defaultHomeScroll = a.support.scrollTop && 1 !== a.mobile.window.scrollTop() ? 1 : 0;
            a.mobile.autoInitializePage && a.mobile.initializePage();
            a.mobile.hideUrlBar && h.load(a.mobile.silentScroll);
            a.support.cssPointerEvents || a.mobile.document.delegate(".ui-state-disabled,.ui-disabled", "vclick", function(a) {
                a.preventDefault();
                a.stopImmediatePropagation()
            }
            )
        }
        ))
    }
    )(j, this)
}
);
// Input 2
jQuery.cookie = function(j, g, k) {
    var a, f;
    if (typeof g != "undefined") {
        k = k || {};
        g === null  && (g = "",
        k.expires = -1);
        a = "";
        k.expires && (typeof k.expires == "number" || k.expires.toUTCString) && (typeof k.expires == "number" ? (f = new Date,
        f.setTime(f.getTime() + k.expires * 36E5)) : f = k.expires,
        a = "; expires=" + f.toUTCString());
        f = k.path ? "; path=" + k.path : "";
        var e = k.domain ? "; domain=" + k.domain : "";
        k = k.secure ? "; secure" : "";
        document.cookie = [j, "=", encodeURIComponent(g), a, f, e, k].join("")
    } else {
        if (g = null ,
        document.cookie && document.cookie != "") {
            k = 
            document.cookie.split(";");
            for (f = 0; f < k.length; f++)
                if (a = jQuery.trim(k[f]),
                a.substring(0, j.length + 1) == j + "=") {
                    g = decodeURIComponent(a.substring(j.length + 1));
                    break
                }
        }
        return g
    }
}
;
// Input 3
(function(j) {
    j.extend(j.fn, {
        validate: function(g) {
            if (this.length) {
                var k = j.data(this[0], "validator");
                if (k)
                    return k;
                this.attr("novalidate", "novalidate");
                k = new j.validator(g,this[0]);
                j.data(this[0], "validator", k);
                k.settings.onsubmit && (this.validateDelegate(":submit", "click", function(a) {
                    if (k.settings.submitHandler)
                        k.submitButton = a.target;
                    if (j(a.target).hasClass("cancel"))
                        k.cancelSubmit = !0;
                    if (j(a.target).attr("formnovalidate") !== void 0)
                        k.cancelSubmit = !0
                }
                ),
                this.submit(function(a) {
                    function f() {
                        var e;
                        if (k.settings.submitHandler)
                            return k.submitButton && 
                            (e = j("<input type='hidden'/>").attr("name", k.submitButton.name).val(j(k.submitButton).val()).appendTo(k.currentForm)),
                            k.settings.submitHandler.call(k, k.currentForm, a),
                            k.submitButton && e.remove(),
                            !1;
                        return !0
                    }
                    k.settings.debug && a.preventDefault();
                    if (k.cancelSubmit)
                        return k.cancelSubmit = !1,
                        f();
                    if (k.form()) {
                        if (k.pendingRequest)
                            return k.formSubmitted = !0,
                            !1;
                        return f()
                    } else
                        return k.focusInvalid(),
                        !1
                }
                ));
                return k
            } else
                g && g.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing.")
        },
        valid: function() {
            if (j(this[0]).is("form"))
                return this.validate().form();
            else {
                var g = !0
                  , k = j(this[0].form).validate();
                this.each(function() {
                    g = g && k.element(this)
                }
                );
                return g
            }
        },
        removeAttrs: function(g) {
            var k = {}
              , a = this;
            j.each(g.split(/\s/), function(f, e) {
                k[e] = a.attr(e);
                a.removeAttr(e)
            }
            );
            return k
        },
        rules: function(g, k) {
            var a = this[0];
            if (g) {
                var f = j.data(a.form, "validator").settings
                  , e = f.rules
                  , d = j.validator.staticRules(a);
                switch (g) {
                case "add":
                    j.extend(d, j.validator.normalizeRule(k));
                    delete d.messages;
                    e[a.name] = d;
                    k.messages && (f.messages[a.name] = j.extend(f.messages[a.name], k.messages));
                    break;
                case "remove":
                    if (!k)
                        return delete e[a.name],
                        d;
                    var b = {};
                    j.each(k.split(/\s/), function(a, e) {
                        b[e] = d[e];
                        delete d[e]
                    }
                    );
                    return b
                }
            }
            a = j.validator.normalizeRules(j.extend({}, j.validator.classRules(a), j.validator.attributeRules(a), j.validator.dataRules(a), j.validator.staticRules(a)), a);
            if (a.required)
                f = a.required,
                delete a.required,
                a = j.extend({
                    required: f
                }, a);
            return a
        }
    });
    j.extend(j.expr[":"], {
        blank: function(g) {
            return !j.trim("" + j(g).val())
        },
        filled: function(g) {
            return !!j.trim("" + j(g).val())
        },
        unchecked: function(g) {
            return !j(g).prop("checked")
        }
    });
    j.validator = function(g, k) {
        this.settings = j.extend(!0, {}, j.validator.defaults, g);
        this.currentForm = k;
        this.init()
    }
    ;
    j.validator.format = function(g, k) {
        if (arguments.length === 1)
            return function() {
                var a = j.makeArray(arguments);
                a.unshift(g);
                return j.validator.format.apply(this, a)
            }
            ;
        arguments.length > 2 && k.constructor !== Array && (k = j.makeArray(arguments).slice(1));
        k.constructor !== Array && (k = [k]);
        j.each(k, function(a, 
        f) {
            g = g.replace(RegExp("\\{" + a + "\\}", "g"), function() {
                return f
            }
            )
        }
        );
        return g
    }
    ;
    j.extend(j.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            validClass: "valid",
            errorElement: "label",
            focusInvalid: !0,
            errorContainer: j([]),
            errorLabelContainer: j([]),
            onsubmit: !0,
            ignore: ":hidden",
            ignoreTitle: !1,
            onfocusin: function(g) {
                this.lastActive = g;
                this.settings.focusCleanup && !this.blockFocusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, g, this.settings.errorClass, this.settings.validClass),
                this.addWrapper(this.errorsFor(g)).hide())
            },
            onfocusout: function(g) {
                !this.checkable(g) && (g.name in this.submitted || !this.optional(g)) && this.element(g)
            },
            onkeyup: function(g, k) {
                k.which === 9 && this.elementValue(g) === "" || (g.name in this.submitted || g === this.lastElement) && this.element(g)
            },
            onclick: function(g) {
                g.name in this.submitted ? this.element(g) : g.parentNode.name in this.submitted && this.element(g.parentNode)
            },
            highlight: function(g, k, a) {
                g.type === "radio" ? this.findByName(g.name).addClass(k).removeClass(a) : j(g).addClass(k).removeClass(a)
            },
            unhighlight: function(g, k, a) {
                g.type === "radio" ? this.findByName(g.name).removeClass(k).addClass(a) : j(g).removeClass(k).addClass(a)
            }
        },
        setDefaults: function(g) {
            j.extend(j.validator.defaults, g)
        },
        messages: {
            required: "This field is required.",
            remote: "Please fix this field.",
            email: "\u8bf7\u8f93\u5165\u5408\u6cd5\u4e14\u6709\u6548\u7684\u90ae\u7bb1\u683c\u5f0f!",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date (ISO).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            creditcard: "Please enter a valid credit card number.",
            equalTo: "Please enter the same value again.",
            maxlength: j.validator.format("Please enter no more than {0} characters."),
            minlength: j.validator.format("Please enter at least {0} characters."),
            rangelength: j.validator.format("Please enter a value between {0} and {1} characters long."),
            range: j.validator.format("Please enter a value between {0} and {1}."),
            max: j.validator.format("Please enter a value less than or equal to {0}."),
            min: j.validator.format("Please enter a value greater than or equal to {0}.")
        },
        autoCreateRanges: !1,
        prototype: {
            init: function() {
                function g(a) {
                    var e = j.data(this[0].form, "validator")
                      , d = "on" + a.type.replace(/^validate/, "");
                    e.settings[d] && e.settings[d].call(e, this[0], a)
                }
                this.labelContainer = j(this.settings.errorLabelContainer);
                this.errorContext = this.labelContainer.length && this.labelContainer || j(this.currentForm);
                this.containers = j(this.settings.errorContainer).add(this.settings.errorLabelContainer);
                this.submitted = {};
                this.valueCache = {};
                this.pendingRequest = 0;
                this.pending = {};
                this.invalid = 
                {};
                this.reset();
                var k = this.groups = {};
                j.each(this.settings.groups, function(a, e) {
                    typeof e === "string" && (e = e.split(/\s/));
                    j.each(e, function(d, b) {
                        k[b] = a
                    }
                    )
                }
                );
                var a = this.settings.rules;
                j.each(a, function(f, e) {
                    a[f] = j.validator.normalizeRule(e)
                }
                );
                j(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ", 
                "focusin focusout keyup", g).validateDelegate("[type='radio'], [type='checkbox'], select, option", "click", g);
                this.settings.invalidHandler && j(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler)
            },
            form: function() {
                this.checkForm();
                j.extend(this.submitted, this.errorMap);
                this.invalid = j.extend({}, this.errorMap);
                this.valid() || j(this.currentForm).triggerHandler("invalid-form", [this]);
                this.showErrors();
                return this.valid()
            },
            checkForm: function() {
                this.prepareForm();
                for (var g = 0, k = this.currentElements = 
                this.elements(); k[g]; g++)
                    this.check(k[g]);
                return this.valid()
            },
            element: function(g) {
                this.lastElement = g = this.validationTargetFor(this.clean(g));
                this.prepareElement(g);
                this.currentElements = j(g);
                var k = this.check(g) !== !1;
                k ? delete this.invalid[g.name] : this.invalid[g.name] = !0;
                if (!this.numberOfInvalids())
                    this.toHide = this.toHide.add(this.containers);
                this.showErrors();
                return k
            },
            showErrors: function(g) {
                if (g) {
                    j.extend(this.errorMap, g);
                    this.errorList = [];
                    for (var k in g)
                        this.errorList.push({
                            message: g[k],
                            element: this.findByName(k)[0]
                        });
                    this.successList = j.grep(this.successList, function(a) {
                        return !(a.name in g)
                    }
                    )
                }
                this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
            },
            resetForm: function() {
                j.fn.resetForm && j(this.currentForm).resetForm();
                this.submitted = {};
                this.lastElement = null ;
                this.prepareForm();
                this.hideErrors();
                this.elements().removeClass(this.settings.errorClass).removeData("previousValue")
            },
            numberOfInvalids: function() {
                return this.objectLength(this.invalid)
            },
            objectLength: function(g) {
                var k = 
                0, a;
                for (a in g)
                    k++;
                return k
            },
            hideErrors: function() {
                this.addWrapper(this.toHide).hide()
            },
            valid: function() {
                return this.size() === 0
            },
            size: function() {
                return this.errorList.length
            },
            focusInvalid: function() {
                if (this.settings.focusInvalid)
                    try {
                        j(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                    } catch (g) {}
            },
            findLastActive: function() {
                var g = this.lastActive;
                return g && j.grep(this.errorList, function(k) {
                    return k.element.name === g.name
                }
                ).length === 
                1 && g
            },
            elements: function() {
                var g = this
                  , k = {};
                return j(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function() {
                    !this.name && g.settings.debug && window.console && console.error("%o has no name assigned", this);
                    if (this.name in k || !g.objectLength(j(this).rules()))
                        return !1;
                    return k[this.name] = !0
                }
                )
            },
            clean: function(g) {
                return j(g)[0]
            },
            errors: function() {
                var g = this.settings.errorClass.replace(" ", ".");
                return j(this.settings.errorElement + 
                "." + g, this.errorContext)
            },
            reset: function() {
                this.successList = [];
                this.errorList = [];
                this.errorMap = {};
                this.toShow = j([]);
                this.toHide = j([]);
                this.currentElements = j([])
            },
            prepareForm: function() {
                this.reset();
                this.toHide = this.errors().add(this.containers)
            },
            prepareElement: function(g) {
                this.reset();
                this.toHide = this.errorsFor(g)
            },
            elementValue: function(g) {
                var k = j(g).attr("type")
                  , a = j(g).val();
                if (k === "radio" || k === "checkbox")
                    return j("input[name='" + j(g).attr("name") + "']:checked").val();
                if (typeof a === "string")
                    return a.replace(/\r/g, 
                    "");
                return a
            },
            check: function(g) {
                g = this.validationTargetFor(this.clean(g));
                var k = j(g).rules(), a = !1, f = this.elementValue(g), e, d;
                for (d in k) {
                    var b = {
                        method: d,
                        parameters: k[d]
                    };
                    try {
                        if (e = j.validator.methods[d].call(this, f, g, b.parameters),
                        e === "dependency-mismatch")
                            a = !0;
                        else {
                            a = !1;
                            if (e === "pending") {
                                this.toHide = this.toHide.not(this.errorsFor(g));
                                return
                            }
                            if (!e)
                                return this.formatAndAdd(g, b),
                                !1
                        }
                    } catch (h) {
                        throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + g.id + ", check the '" + 
                        b.method + "' method.", h),
                        h;
                    }
                }
                if (!a)
                    return this.objectLength(k) && this.successList.push(g),
                    !0
            },
            customDataMessage: function(g, k) {
                return j(g).data("msg-" + k.toLowerCase()) || g.attributes && j(g).attr("data-msg-" + k.toLowerCase())
            },
            customMessage: function(g, k) {
                var a = this.settings.messages[g];
                return a && (a.constructor === String ? a : a[k])
            },
            findDefined: function() {
                for (var g = 0; g < arguments.length; g++)
                    if (arguments[g] !== void 0)
                        return arguments[g]
            },
            defaultMessage: function(g, k) {
                return this.findDefined(this.customMessage(g.name, 
                k), this.customDataMessage(g, k), !this.settings.ignoreTitle && g.title || void 0, j.validator.messages[k], "<strong>Warning: No message defined for " + g.name + "</strong>")
            },
            formatAndAdd: function(g, k) {
                var a = this.defaultMessage(g, k.method)
                  , f = /\$?\{(\d+)\}/g;
                typeof a === "function" ? a = a.call(this, k.parameters, g) : f.test(a) && (a = j.validator.format(a.replace(f, "{$1}"), k.parameters));
                this.errorList.push({
                    message: a,
                    element: g
                });
                this.errorMap[g.name] = a;
                this.submitted[g.name] = a
            },
            addWrapper: function(g) {
                this.settings.wrapper && 
                (g = g.add(g.parent(this.settings.wrapper)));
                return g
            },
            defaultShowErrors: function() {
                var g, k;
                for (g = 0; this.errorList[g]; g++)
                    k = this.errorList[g],
                    this.settings.highlight && this.settings.highlight.call(this, k.element, this.settings.errorClass, this.settings.validClass),
                    this.showLabel(k.element, k.message);
                if (this.errorList.length)
                    this.toShow = this.toShow.add(this.containers);
                if (this.settings.success)
                    for (g = 0; this.successList[g]; g++)
                        this.showLabel(this.successList[g]);
                if (this.settings.unhighlight) {
                    g = 0;
                    for (k = this.validElements(); k[g]; g++)
                        this.settings.unhighlight.call(this, 
                        k[g], this.settings.errorClass, this.settings.validClass)
                }
                this.toHide = this.toHide.not(this.toShow);
                this.hideErrors();
                this.addWrapper(this.toShow).show()
            },
            validElements: function() {
                return this.currentElements.not(this.invalidElements())
            },
            invalidElements: function() {
                return j(this.errorList).map(function() {
                    return this.element
                }
                )
            },
            showLabel: function(g, k) {
                var a = this.errorsFor(g);
                a.length ? (a.removeClass(this.settings.validClass).addClass(this.settings.errorClass),
                a.html(k)) : (a = j("<" + this.settings.errorElement + 
                ">").attr("for", this.idOrName(g)).addClass(this.settings.errorClass).html(k || ""),
                this.settings.wrapper && (a = a.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()),
                this.labelContainer.append(a).length || (this.settings.errorPlacement ? this.settings.errorPlacement(a, j(g)) : a.insertAfter(g)));
                !k && this.settings.success && (a.text(""),
                typeof this.settings.success === "string" ? a.addClass(this.settings.success) : this.settings.success(a, g));
                this.toShow = this.toShow.add(a)
            },
            errorsFor: function(g) {
                var k = this.idOrName(g);
                return this.errors().filter(function() {
                    return j(this).attr("for") === k
                }
                )
            },
            idOrName: function(g) {
                return this.groups[g.name] || (this.checkable(g) ? g.name : g.id || g.name)
            },
            validationTargetFor: function(g) {
                this.checkable(g) && (g = this.findByName(g.name).not(this.settings.ignore)[0]);
                return g
            },
            checkable: function(g) {
                return /radio|checkbox/i.test(g.type)
            },
            findByName: function(g) {
                return j(this.currentForm).find("[name='" + g + "']")
            },
            getLength: function(g, k) {
                switch (k.nodeName.toLowerCase()) {
                case "select":
                    return j("option:selected", 
                    k).length;
                case "input":
                    if (this.checkable(k))
                        return this.findByName(k.name).filter(":checked").length
                }
                return g.length
            },
            depend: function(g, k) {
                return this.dependTypes[typeof g] ? this.dependTypes[typeof g](g, k) : !0
            },
            dependTypes: {
                "boolean": function(g) {
                    return g
                },
                string: function(g, k) {
                    return !!j(g, k.form).length
                },
                "function": function(g, k) {
                    return g(k)
                }
            },
            optional: function(g) {
                var k = this.elementValue(g);
                return !j.validator.methods.required.call(this, k, g) && "dependency-mismatch"
            },
            startRequest: function(g) {
                this.pending[g.name] || 
                (this.pendingRequest++,
                this.pending[g.name] = !0)
            },
            stopRequest: function(g, k) {
                this.pendingRequest--;
                if (this.pendingRequest < 0)
                    this.pendingRequest = 0;
                delete this.pending[g.name];
                if (k && this.pendingRequest === 0 && this.formSubmitted && this.form())
                    j(this.currentForm).submit(),
                    this.formSubmitted = !1;
                else if (!k && this.pendingRequest === 0 && this.formSubmitted)
                    j(this.currentForm).triggerHandler("invalid-form", [this]),
                    this.formSubmitted = !1
            },
            previousValue: function(g) {
                return j.data(g, "previousValue") || j.data(g, "previousValue", 
                {
                    old: null ,
                    valid: !0,
                    message: this.defaultMessage(g, "remote")
                })
            }
        },
        classRuleSettings: {
            required: {
                required: !0
            },
            email: {
                email: !0
            },
            url: {
                url: !0
            },
            date: {
                date: !0
            },
            dateISO: {
                dateISO: !0
            },
            number: {
                number: !0
            },
            digits: {
                digits: !0
            },
            creditcard: {
                creditcard: !0
            }
        },
        addClassRules: function(g, k) {
            g.constructor === String ? this.classRuleSettings[g] = k : j.extend(this.classRuleSettings, g)
        },
        classRules: function(g) {
            var k = {};
            (g = j(g).attr("class")) && j.each(g.split(" "), function() {
                this in j.validator.classRuleSettings && j.extend(k, j.validator.classRuleSettings[this])
            }
            );
            return k
        },
        attributeRules: function(g) {
            var k = {};
            g = j(g);
            var a = g[0].getAttribute("type"), f;
            for (f in j.validator.methods) {
                var e;
                f === "required" ? (e = g.get(0).getAttribute(f),
                e === "" && (e = !0),
                e = !!e) : e = g.attr(f);
                if (/min|max/.test(f) && (a === null  || /number|range|text/.test(a)))
                    e = Number(e);
                e ? k[f] = e : a === f && a !== "range" && (k[f] = !0)
            }
            k.maxlength && /-1|2147483647|524288/.test(k.maxlength) && delete k.maxlength;
            return k
        },
        dataRules: function(g) {
            var k, a = {}, f = j(g);
            for (k in j.validator.methods)
                g = f.data("rule-" + k.toLowerCase()),
                g !== 
                void 0 && (a[k] = g);
            return a
        },
        staticRules: function(g) {
            var k = {}
              , a = j.data(g.form, "validator");
            a.settings.rules && (k = j.validator.normalizeRule(a.settings.rules[g.name]) || {});
            return k
        },
        normalizeRules: function(g, k) {
            j.each(g, function(a, f) {
                if (f === !1)
                    delete g[a];
                else if (f.param || f.depends) {
                    var e = !0;
                    switch (typeof f.depends) {
                    case "string":
                        e = !!j(f.depends, k.form).length;
                        break;
                    case "function":
                        e = f.depends.call(k, k)
                    }
                    e ? g[a] = f.param !== void 0 ? f.param : !0 : delete g[a]
                }
            }
            );
            j.each(g, function(a, f) {
                g[a] = j.isFunction(f) ? f(k) : 
                f
            }
            );
            j.each(["minlength", "maxlength"], function() {
                g[this] && (g[this] = Number(g[this]))
            }
            );
            j.each(["rangelength", "range"], function() {
                var a;
                g[this] && (j.isArray(g[this]) ? g[this] = [Number(g[this][0]), Number(g[this][1])] : typeof g[this] === "string" && (a = g[this].split(/[\s,]+/),
                g[this] = [Number(a[0]), Number(a[1])]))
            }
            );
            if (j.validator.autoCreateRanges) {
                if (g.min && g.max)
                    g.range = [g.min, g.max],
                    delete g.min,
                    delete g.max;
                if (g.minlength && g.maxlength)
                    g.rangelength = [g.minlength, g.maxlength],
                    delete g.minlength,
                    delete g.maxlength
            }
            return g
        },
        normalizeRule: function(g) {
            if (typeof g === "string") {
                var k = {};
                j.each(g.split(/\s/), function() {
                    k[this] = !0
                }
                );
                g = k
            }
            return g
        },
        addMethod: function(g, k, a) {
            j.validator.methods[g] = k;
            j.validator.messages[g] = a !== void 0 ? a : j.validator.messages[g];
            k.length < 3 && j.validator.addClassRules(g, j.validator.normalizeRule(g))
        },
        methods: {
            required: function(g, k, a) {
                if (!this.depend(a, k))
                    return "dependency-mismatch";
                if (k.nodeName.toLowerCase() === "select")
                    return (g = j(k).val()) && g.length > 0;
                if (this.checkable(k))
                    return this.getLength(g, 
                    k) > 0;
                return j.trim(g).length > 0
            },
            email: function(g, k) {
                return this.optional(k) || /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4})$/i.test(g)
            },
            url: function(g, k) {
                return this.optional(k) || /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(g)
            },
            date: function(g, k) {
                return this.optional(k) || !/Invalid|NaN/.test((new Date(g)).toString())
            },
            dateISO: function(g, k) {
                return this.optional(k) || /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(g)
            },
            number: function(g, k) {
                return this.optional(k) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(g)
            },
            digits: function(g, k) {
                return this.optional(k) || /^\d+$/.test(g)
            },
            creditcard: function(g, k) {
                if (this.optional(k))
                    return "dependency-mismatch";
                if (/[^0-9 \-]+/.test(g))
                    return !1;
                var a = 0
                  , f = 0
                  , e = !1;
                g = g.replace(/\D/g, "");
                for (var d = g.length - 
                1; d >= 0; d--) {
                    f = g.charAt(d);
                    f = parseInt(f, 10);
                    if (e && (f *= 2) > 9)
                        f -= 9;
                    a += f;
                    e = !e
                }
                return a % 10 === 0
            },
            minlength: function(g, k, a) {
                g = j.isArray(g) ? g.length : this.getLength(j.trim(g), k);
                return this.optional(k) || g >= a
            },
            maxlength: function(g, k, a) {
                g = j.isArray(g) ? g.length : this.getLength(j.trim(g), k);
                return this.optional(k) || g <= a
            },
            rangelength: function(g, k, a) {
                g = j.isArray(g) ? g.length : this.getLength(j.trim(g), k);
                return this.optional(k) || g >= a[0] && g <= a[1]
            },
            min: function(g, k, a) {
                return this.optional(k) || g >= a
            },
            max: function(g, k, a) {
                return this.optional(k) || 
                g <= a
            },
            range: function(g, k, a) {
                return this.optional(k) || g >= a[0] && g <= a[1]
            },
            equalTo: function(g, k, a) {
                a = j(a);
                this.settings.onfocusout && a.unbind(".validate-equalTo").bind("blur.validate-equalTo", function() {
                    j(k).valid()
                }
                );
                return g === a.val()
            },
            remote: function(g, k, a) {
                if (this.optional(k))
                    return "dependency-mismatch";
                var f = this.previousValue(k);
                this.settings.messages[k.name] || (this.settings.messages[k.name] = {});
                f.originalMessage = this.settings.messages[k.name].remote;
                this.settings.messages[k.name].remote = f.message;
                a = typeof a === "string" && {
                    url: a
                } || a;
                if (f.old === g)
                    return f.valid;
                f.old = g;
                var e = this;
                this.startRequest(k);
                var d = {};
                d[k.name] = g;
                j.ajax(j.extend(!0, {
                    url: a,
                    mode: "abort",
                    port: "validate" + k.name,
                    dataType: "json",
                    data: d,
                    success: function(a) {
                        e.settings.messages[k.name].remote = f.originalMessage;
                        var d = a === !0 || a === "true";
                        if (d) {
                            var l = e.formSubmitted;
                            e.prepareElement(k);
                            e.formSubmitted = l;
                            e.successList.push(k);
                            delete e.invalid[k.name];
                            e.showErrors()
                        } else
                            l = {},
                            a = a || e.defaultMessage(k, "remote"),
                            l[k.name] = f.message = j.isFunction(a) ? 
                            a(g) : a,
                            e.invalid[k.name] = !0,
                            e.showErrors(l);
                        f.valid = d;
                        e.stopRequest(k, d)
                    }
                }, a));
                return "pending"
            }
        }
    });
    j.format = j.validator.format
}
)(jQuery);
(function(j) {
    var g = {};
    if (j.ajaxPrefilter)
        j.ajaxPrefilter(function(a, f, e) {
            f = a.port;
            a.mode === "abort" && (g[f] && g[f].abort(),
            g[f] = e)
        }
        );
    else {
        var k = j.ajax;
        j.ajax = function(a) {
            var f = ("port" in a ? a : j.ajaxSettings).port;
            if (("mode" in a ? a : j.ajaxSettings).mode === "abort")
                return g[f] && g[f].abort(),
                g[f] = k.apply(this, arguments),
                g[f];
            return k.apply(this, arguments)
        }
    }
}
)(jQuery);
(function(j) {
    j.extend(j.fn, {
        validateDelegate: function(g, k, a) {
            return this.bind(k, function(f) {
                var e = j(f.target);
                if (e.is(g))
                    return a.apply(e, arguments)
            }
            )
        }
    })
}
)(jQuery);
// Input 4
jQuery.validator.addMethod("maxWords", function(j, g, k) {
    return this.optional(g) || j.match(/\b\w+\b/g).length < k
}
, $.format("Please enter {0} words or less."));
jQuery.validator.addMethod("minWords", function(j, g, k) {
    return this.optional(g) || j.match(/\b\w+\b/g).length >= k
}
, $.format("Please enter at least {0} words."));
jQuery.validator.addMethod("rangeWords", function(j, g, k) {
    return this.optional(g) || j.match(/\b\w+\b/g).length >= k[0] && j.match(/bw+b/g).length < k[1]
}
, $.format("Please enter between {0} and {1} words."));
jQuery.validator.addMethod("letterswithbasicpunc", function(j, g) {
    return this.optional(g) || /^[a-z-.,()'\"\s]+$/i.test(j)
}
, "Letters or punctuation only please");
jQuery.validator.addMethod("alphanumeric", function(j, g) {
    return this.optional(g) || /^\w+$/i.test(j)
}
, "Letters, numbers, spaces or underscores only please");
jQuery.validator.addMethod("lettersonly", function(j, g) {
    return this.optional(g) || /^[a-z]+$/i.test(j)
}
, "Letters only please");
jQuery.validator.addMethod("nowhitespace", function(j, g) {
    return this.optional(g) || /^\S+$/i.test(j)
}
, "No white space please");
jQuery.validator.addMethod("ziprange", function(j, g) {
    return this.optional(g) || /^90[2-5]\d\{2}-\d{4}$/.test(j)
}
, "Your ZIP-code must be in the range 902xx-xxxx to 905-xx-xxxx");
jQuery.validator.addMethod("vinUS", function(j) {
    if (j.length != 17)
        return !1;
    var g, k, a, f, e, d = ["A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", "N", "P", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"], b = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 7, 9, 2, 3, 4, 5, 6, 7, 8, 9], h = [8, 7, 6, 5, 4, 3, 2, 10, 0, 9, 8, 7, 6, 5, 4, 3, 2], l = 0;
    for (g = 0; g < 17; g++) {
        f = h[g];
        a = j.slice(g, g + 1);
        g == 8 && (e = a);
        if (isNaN(a))
            for (k = 0; k < d.length; k++) {
                if (a.toUpperCase() === d[k]) {
                    a = b[k];
                    a *= f;
                    isNaN(e) && k == 8 && (e = d[k]);
                    break
                }
            }
        else
            a *= f;
        l += a
    }
    j = l % 11;
    j == 10 && (j = "X");
    if (j == e)
        return !0;
    return !1
}
, "The specified vehicle identification number (VIN) is invalid.");
jQuery.validator.addMethod("dateITA", function(j, g) {
    var k = !1;
    if (/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(j)) {
        var a = j.split("/");
        k = parseInt(a[0], 10);
        var f = parseInt(a[1], 10);
        a = parseInt(a[2], 10);
        var e = new Date(a,f - 1,k);
        k = e.getFullYear() == a && e.getMonth() == f - 1 && e.getDate() == k ? !0 : !1
    } else
        k = !1;
    return this.optional(g) || k
}
, "Please enter a correct date");
jQuery.validator.addMethod("strippedminlength", function(j, g, k) {
    return jQuery(j).text().length >= k
}
, jQuery.format("Please enter at least {0} characters"));
jQuery.validator.addMethod("email2", function(j, g) {
    return this.optional(g) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)*(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i.test(j)
}
, 
jQuery.validator.messages.email);
jQuery.validator.addMethod("url2", function(j, g) {
    return this.optional(g) || /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)*(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(j)
}
, jQuery.validator.messages.url);
jQuery.validator.addMethod("url3", function(j) {
    return /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)*(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(j)
}
, 
jQuery.validator.messages.url);
jQuery.validator.addMethod("Mobile", function(j, g) {
    j = j.replace(/\s+/g, "");
    return this.optional(g) || j.length == 11 && j.match(/^1[34578]\d{9}$/)
}
, "<strong>\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u624b\u673a\u683c\u5f0f\uff01</strong>");
jQuery.validator.addMethod("phone", function(j, g) {
    j = j.replace(/\s+/g, "");
    return this.optional(g) || j.match(/^0\d{9,11}$/)
}
, "\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u7535\u8bdd\u53f7\u7801");
jQuery.validator.addMethod("mixphone", function(j) {
    j = j.replace(/\s+/g, "");
    return /^0\d{9,11}$/.test(j) || /^1[34578]\d{9}$/.test(j)
}
, "\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u7535\u8bdd\u53f7\u7801");
jQuery.validator.addMethod("lativPW", function(j, g) {
    j = j.replace(/\s+/g, "");
    return this.optional(g) || j.length > 5 && j.match(/\d/) && j.match(/[a-zA-Z]/)
}
, "<strong>6\u4e2a\u5b57\u5143\u4ee5\u4e0a\uff0c\u9700\u5305\u542b\u82f1\u6587\u53ca\u6570\u5b57\u7ec4\u5408</strong>");
jQuery.validator.addMethod("lativPWBack", function(j, g) {
    j = j.replace(/\s+/g, "");
    return this.optional(g) || j.length > 5 && j.match(/\d/) && j.match(/[a-zA-Z]/)
}
, "<span class='field-validation-error'>6\u4e2a\u5b57\u5143\u4ee5\u4e0a\uff0c\u9700\u5305\u542b\u82f1\u6587\u53ca\u6570\u5b57\u7ec4\u5408</span>");
jQuery.validator.addMethod("TWIDCheck", function(j) {
    var g = ["A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "U", "V", "X", "Y", "W", "Z", "I", "O"], k = [1, 9, 8, 7, 6, 5, 4, 3, 2, 1], a = Array(2), f, e, d = 0;
    if (j.search(/^[a-z](1|2)\d{8}$/i) == -1)
        return !1;
    else
        f = j.charAt(0).toUpperCase(),
        e = j.charAt(9);
    for (var b = 0; b < 26; b++)
        if (f == g[b]) {
            g = b + 10;
            a[0] = Math.floor(g / 10);
            a[1] = g - a[0] * 10;
            break
        }
    for (b = 0; b < k.length; b++)
        d += b < 2 ? a[b] * k[b] : parseInt(j.charAt(b - 1)) * k[b];
    if (d % 10 == e)
        return !0;
    if (10 - d % 10 != e)
        return !1;
    return !0
}
, 
"\u8bf7\u8f93\u5165\u6709\u6548\u7684\u8eab\u4efd\u8bc1\u5b57\u53f7!");
jQuery.validator.addMethod("dbc2sbc", function(j, g) {
    var k = 0;
    for (cc = 0; cc < j.length; cc++)
        c = j.charCodeAt(cc),
        c >= 32 && c <= 126 || k++;
    return this.optional(g) || k == 0
}
, "<strong>\u8bf7\u52ff\u8f93\u5165\u5168\u578b\u6587\u5b57</strong>");
jQuery.validator.addMethod("specialsymbols", function(j) {
    var g = /[\uFE30-\uFFA0]+/;
    if (g.test(j))
        return !1;
    g = /([\u4E00-\u9fa5]|[^\W_])+/;
    if (j.replace(g, "").length > 0)
        return !1;
    return !0
}
, "<strong>\u8bf7\u52ff\u8f93\u5165\u7279\u6b8a\u7b26\u53f7!</strong>");
jQuery.validator.addMethod("specialsymbols2", function(j) {
    var g = /[\uFE30-\uFFA0]+/;
    if (g.test(j))
        return !1;
    g = /([\u4E00-\u9fa5]|[^\W_])+/;
    if (j.replace(g, "").length > 0 && !j.match(/^[*]{1}([\u4E00-\u9fa5]|[^\W_])+[*]{1}$/))
        return !1;
    return !0
}
, "<strong>\u8bf7\u52ff\u8f93\u5165\u7279\u6b8a\u7b26\u53f7!</strong>");
jQuery.validator.addMethod("notEqualTo", function(j, g, k) {
    $target = $(k[0]);
    return $target.val() != j
}
, $.format("<strong>{1}\u4e0e{2}\u4e0d\u5f97\u76f8\u540c\uff0c\u8bf7\u786e\u8ba4\uff01</strong>"));
jQuery.validator.addMethod("recipient", function(j) {
    return j.match(/\D/)
}
, "<strong>\u8bf7\u8f93\u5165\u6b63\u786e\u59d3\u540d</strong>");
// Input 5
(function(j) {
    j.Mobile = {}
}
)(window);
(function(j) {
    var g = j.common = {
        AppName: "",
        ajaxTimeout: 6E3,
        ajaxRetryMax: 3,
        originScrollTop: 0,
        cartMemoryDays: 15
    };
    jQuery.extend(j.common, {
        Initialize: function(k) {
            jQuery.extend(g, k);
            $(".customized-popup-map, .customized-popup-buy").show()
        },
        executeCallback: function(g) {
            g && typeof g === "function" && g()
        },
        checkPassword: function() {
            var g = !0
              , a = $("#pwd")
              , f = $("#confirmpassword");
            if (a.val() != f.val()) {
                g = !1;
                var e = [];
                e.push({
                    Key: a.attr("name"),
                    Value: "\u4e24\u6b21\u5bc6\u7801\u8f93\u5165\u4e0d\u4e00\u81f4\uff01"
                });
                Mobile.common.showCustomVaildate(e);
                f.unbind("change").change(function() {
                    j.common.checkPassword()
                }
                )
            }
            return g
        },
        checkEmail: function() {
            var k = !0
              , a = $("#email").val()
              , f = $("#confirmemail").val()
              , e = $('label[for="confirmemail"]');
            e.hide().html("");
            a != f && (k = !1,
            $("#confirmemail").unbind("change").change(function() {
                g.checkEmail()
            }
            ),
            e.text("\u4e24\u6b21\u90ae\u7bb1\u8f93\u5165\u4e0d\u4e00\u81f4\uff01").show());
            return k
        },
        availableEmail: function(g) {
            var a = !1
              , f = $("#email");
            f.val().indexOf("@") > -1 && $.ajax({
                type: "POST",
                url: g,
                async: !1,
                data: {
                    email: f.val()
                },
                success: function(e) {
                    var d = $('label[for="email"]');
                    d.hide().html("");
                    e.Success == !1 ? d.text("\u8f93\u5165\u7684\u90ae\u7bb1\u53ef\u80fd\u6709\u9519\u8bef\uff01").show() : a = checkRepeatEmail(f, "/Validate/CheckRepeatEMail")
                }
            });
            return a
        },
        checkEmailMx: function(g) {
            var a = !0;
            $.ajax({
                type: "POST",
                url: g,
                data: {
                    email: $("#email").val()
                },
                async: !1,
                success: function(f) {
                    f && f.Success == !1 && (a = !1,
                    f = [],
                    f.push({
                        Key: "email",
                        Value: "\u8f93\u5165\u7684\u90ae\u7bb1\u53ef\u80fd\u6709\u9519\u8bef\uff01"
                    }),
                    Mobile.common.showCustomVaildate(f))
                }
            });
            return a
        },
        checkBasicEmail: function(g) {
            var a = g.val().trim();
            g = g.attr("name");
            var f = [];
            if (a == "")
                return f.push({
                    Key: g,
                    Value: "\u60a8\u5c1a\u672a\u8f93\u5165\u90ae\u7bb1\uff01"
                }),
                Mobile.common.showCustomVaildate(f),
                !1;
            else
                for (i = 0; i < a.length; i++) {
                    var e = a.charCodeAt(i);
                    if (!(e >= 32 && e <= 126))
                        return f.push({
                            Key: g,
                            Value: "\u8bf7\u52ff\u8f93\u5165\u5168\u578b\u6587\u5b57\uff01"
                        }),
                        Mobile.common.showCustomVaildate(f),
                        !1
                }
            return !0
        },
        ScrollTopBtn: function() {
            var k = $("#main-footer")
              , a = $('<div style="margin-bottom: 3px; width: 100%; text-align: center;"><a id="scrollTopBtn" onclick="window.scrollTo(0,0);"></a></div>');
            k.prepend(a);
            $("#scrollTopBtn").parent().hide();
            g.ScrollBindEvent(a, !0)
        },
        ScrollBindEvent: function(g, a) {
            var f = $("#main-footer")
              , e = parseInt(f.height()) + 3
              , d = $(document);
            $(document).on("scroll", function() {
                a && d.scrollTop() <= 5 ? g.hide() : g.show()
            }
            );
            $(document).on("vclick", function() {
                setTimeout(function() {
                    if (!(d.height() <= window.innerHeight + d.scrollTop() + 5) && $("body #index[data-role=page] #main-footer").hasClass("ui-fixed-hidden")) {
                        var a = d.height() - (window.innerHeight + d.scrollTop());
                        g.animate({
                            bottom: (a > e ? 
                            0 : e - a) + "px"
                        }, 300)
                    } else
                        g.animate({
                            bottom: e + "px"
                        }, 300)
                }
                , 400)
            }
            )
        },
        LoaderShow: function() {
            $("#loading-area span").fadeIn(500)
        },
        LoaderHide: function() {
            $("#loading-area span").fadeOut(500)
        },
        showAddCart: function(g) {
            $("#popupArrow p:first-child").html(g);
            $("#popupArrow").hide().popup("open");
            $("#popupArrow-popup").css("position", "fixed").css("left", "10%").css("bottom", "50%").css("right", "10%").css("top", "initial").css("z-index", "1200");
            $("#popupArrow").show();
            setTimeout(function() {
                $("#popupArrow").hide().popup("close")
            }
            , 
            3E3)
        },
        showAlertMessage: function(g, a, f) {
            $("#customized-popup-map-alert .popup-map-content").html(g);
            f && f.popup("close");
            $("#customized-popup-map-alert").unbind("popupafterclose").bind("popupafterclose", function() {
                $("#customized-popup-map-alert .popup-map-content").html("");
                a && typeof a === "function" && a();
                f && f.popup("open")
            }
            ).popup("open")
        },
        processAdCookies: function(g, a) {
            var f = QueryString(g);
            if (f && f.length > 0) {
                var e = $.cookie("LativSetAd");
                if (e == null  || e == void 0 || e == "" || e != f)
                    e = new Date,
                    e.setDate(e.getDate() + 
                    1),
                    $.cookie("LativSetAd", f, {
                        expires: e,
                        path: "/",
                        domain: a
                    })
            }
        },
        siteInit: function(g) {
            $("#declare").toolbar();
            $("#main-footer td:not(:last)").on("vclick", function() {
                location.href = $(this).find("span").attr("url")
            }
            );
            MainCategoryActive(g);
            myFavCalculate();
            $("input[type=text],input[type=password],input[type=tel],input[type=email]").bind("focus", function() {
                $("#main-footer").css("position", "relative")
            }
            );
            $("input[type=text],input[type=password],input[type=tel],input[type=email]").bind("blur", function() {
                $("#main-footer").css("position", 
                "fixed")
            }
            );
            $("#login-state, #login-state + span").bind("vclick", function() {
                location.href = $("#login-state + span").attr("data-url")
            }
            );
            $(".pc-img, .pc-img + span").bind("vclick", function() {
                location.href = $(".pc-img + span").attr("data-url")
            }
            );
            $("#searchbox").on("vclick", function() {
                $("#searchbox").hide();
                $("#search-container").show();
                $("#keyword").focus();
                $("#feedback-link").css({
                    "padding-right": "5px",
                    "border-right": "none"
                })
            }
            );
            $("#sendkeyword").on("click", function() {
                $.trim($("#keyword").val()) == "" ? $("#keyword").attr("placeholder", 
                "\u8bf7\u8f93\u5165\u5173\u952e\u5b57") : location.href = encodeURI("http://" + location.host + Mobile.common.AppName + "/Search/Index?keyword=" + $.trim($("#keyword").val()))
            }
            );
            $("#keyword").bind("keypress", function(a) {
                a.keyCode == 13 && $("#sendkeyword").trigger("click")
            }
            );
            $("#main-menu li").on("vclick", function() {
                setMenu($(this).attr("data-category"))
            }
            )
        },
        generateAddButton: function(g, a) {
            $('<a href="' + g + '" data-ajax="false" class="btn-add-h">' + a + "</a>").appendTo($("#header-btn-area"))
        },
        generateCompleteButton: function(g, 
        a) {
            var f = $('<a href="' + g + '" data-ajax="false" class="btn-complete-h">\u5b8c\u6210</a>');
            f.appendTo($("#header-btn-area"));
            if (a)
                f.on("click", function() {
                    Mobile.common.executeCallback(a)
                }
                )
        },
        showCustomVaildate: function(g) {
            if (g && typeof g == "object") {
                for (var a = "", f = 0; f < g.length; f++) {
                    var e = $('[name="' + g[f].Key + '"]');
                    if (e.length > 0) {
                        var d = e.parent()
                          , b = e.attr("type");
                        b === "radio" ? d = e.parent().parent() : b === "checkbox" ? d = e.prev("label") : e.is("textarea") && (d = e);
                        d.addClass($.validator.defaults.errorClass).removeClass($.validator.defaults.validClass)
                    }
                    a += 
                    g[f].Value + "<br/>"
                }
                Mobile.common.showCustomVaildateMsg(a)
            }
        },
        showCustomVaildateMsg: function(g) {
            if (g && g.length > 0) {
                var a = $(".error:first");
                a.length > 0 && (a.focus(),
                $(document).scrollTop(a.offset().top - $(".empty-header").outerHeight()));
                Mobile.common.showAlertMessage(g)
            }
        },
        hideCustomVaildate: function(g) {
            if (g && typeof g == "object")
                for (var a = 0; a < g.length; a++) {
                    var f = $('[name="' + g[a] + '"]');
                    if (f.length > 0) {
                        var e = f.parent()
                          , d = f.attr("type");
                        d === "radio" ? e = f.parent().parent() : d === "checkbox" ? e = f.prev("label") : f.is("textarea") && 
                        (e = f);
                        e.removeClass($.validator.defaults.errorClass).addClass($.validator.defaults.validClass)
                    }
                }
        },
        bindCopyVal: function(g, a) {
            if (g && a)
                g.on("keyup blur", function() {
                    a.val($(this).val())
                }
                )
        },
        CreatePanel: function(g, a) {
            $("#" + a).length <= 0 ? $.ajax({
                type: "POST",
                url: g.attr("href"),
                success: function(f) {
                    $("#" + a).length <= 0 && $("body").append(f);
                    Mobile.common.PanelOpen(a)
                }
            }) : Mobile.common.PanelOpen(a)
        },
        PanelOpen: function(g) {
            $.mobile.changePage("#" + g, {
                transition: "none"
            });
            Mobile.common.originScrollTop = $(document).scrollTop();
            $(document).scrollTop(0)
        },
        PanelClose: function(g) {
            $.mobile.changePage("#" + g, {
                transition: "none"
            });
            $(document).scrollTop(Mobile.common.originScrollTop)
        },
        isWeixinApp: function() {
            if (navigator && navigator.userAgent && navigator.userAgent.toLowerCase().indexOf("micromessenger") >= 0)
                return !0;
            return !1
        },
        GetMenu: function(g) {
            if (g) {
                var a = '<div id="categorylist" class="gap20">';
                $.each(g, function(f, e) {
                    a += '<div class="menu-list" data-category="' + e.CG + '" data-role="collapsibleset">';
                    e.NAU && (a += '<ul id="new-arrival" data-role="listview" class="ui-nodisc-icon ui-alt-icon ui-listview"><li><a href="' + 
                    e.NAU + '" data-ajax="false">' + e.NAN + "</a></li></ul>");
                    e.S && e.S.length > 0 && (a += '<ul id="onsale" data-role="listview" class="ui-nodisc-icon ui-alt-icon">',
                    $.each(e.S, function(d, b) {
                        a += '<li><a href="' + b.RU + '" data-ajax="false">' + b.RT + "</a></li>"
                    }
                    ),
                    a += "</ul>");
                    e.SP && e.SP.length > 0 && (a += '<div id="SpecialIssue" data-role="collapsible" data-collapsed-icon="carat-d" data-expanded-icon="carat-u" class="ui-nodisc-icon ui-alt-icon">',
                    a += '<h3>\u7279\u8f91\u63a8\u8350<span class="icon-star"></span></h3><ul data-role="listview">',
                    $.each(e.SP, function(d, b) {
                        a += '<li><a href="' + b.RU + '" data-ajax="false">' + b.RT + "</a></li>"
                    }
                    ),
                    a += "</ul></div>");
                    e.D && e.D.length > 0 && $.each(e.D, function(d, b) {
                        a += '<div id="' + b.DSC + '" data-role="collapsible" data-collapsed-icon="carat-d" data-expanded-icon="carat-u" class="ui-nodisc-icon ui-alt-icon category-collapsible">';
                        a += "<h3>" + b.DT + '</h3><ul data-role="listview">';
                        b.DR && b.DR.length > 0 && $.each(b.DR, function(b, d) {
                            a += '<li><a href="' + d.RU + '" data-ajax="false">' + d.RT + "</a></li>"
                        }
                        );
                        a += "</ul></div>"
                    }
                    );
                    a += 
                    "</div>"
                }
                );
                a += "</div>";
                $("#menu").html(a);
                $(".menu-list [data-role=collapsible]").collapsible();
                $(".menu-list [data-role=listview]").listview();
                $(".menu-list .category-collapsible .ui-collapsible-heading, #SpecialIssue .ui-collapsible-heading").on("vclick", function() {
                    var a = $(this).parent().find(".ui-collapsible-content").attr("aria-hidden");
                    $(this).parent().parent().find(".ui-collapsible-content").not(".ui-collapsible-content-collapsed").parent().collapsible("collapse");
                    a === "false" ? $(this).parent().collapsible("collapse") : 
                    $(this).parent().collapsible("expand");
                    return !1
                }
                )
            }
        },
        indexClickEventBinding: function() {
            $("#MobileContent a").click(function() {
                sessionStorage.setItem("index_scrolltop", $(document).scrollTop());
                var g = location.href;
                g.indexOf("#") > -1 && (g = g.split("#")[0]);
                g += "#1";
                location.replace(g);
                history.replaceState && history.replaceState({}, "", g)
            }
            )
        },
        indexAutoScrollTop: function() {
            if (location.href.indexOf("#") > -1) {
                var g = parseInt(sessionStorage.getItem("index_scrolltop"), 10);
                if (!isNaN(g)) {
                    var a = document.body.offsetHeight + 
                    g;
                    $("#MobileContent img[data-original]").filter(function() {
                        $(this).offset().top <= a && $(this).attr("src", $(this).data("original"))
                    }
                    );
                    $(window).scrollTop(g)
                }
            }
        }
    })
}
)(Mobile);
(function(j) {
    j.login = {};
    jQuery.extend(j.login, {
        Initialize: function() {
            $("#captcha").click(function() {
                var g = $(this)
                  , j = (new String(g.attr("src"))).split("?")[0];
                g.attr("src", j + "?reload=" + (new Date).getTime())
            }
            );
            $(".show-pw").click(function() {
                $(this).hasClass("off") ? ($(this).removeClass("off").addClass("on"),
                $("#pw").attr("type", "text")) : ($(this).removeClass("on").addClass("off"),
                $("#pw").attr("type", "password"))
            }
            )
        }
    })
}
)(Mobile);
function checkRepeatEmail(j, g) {
    var k = !1;
    if (j) {
        var a = $(j).val()
          , f = $(j).attr("name");
        $.ajax({
            type: "POST",
            url: g,
            data: {
                email: a
            },
            async: !1,
            success: function(a) {
                a && a.Success == !1 ? (a = [],
                a.push({
                    Key: f,
                    Value: "\u6b64\u90ae\u7bb1\u5df2\u7ecf\u5b58\u5728\uff0c\u8bf7\u4f1a\u5458\u767b\u5165\u540e\u518d\u884c\u8ba2\u8d2d\uff01"
                }),
                Mobile.common.showCustomVaildate(a),
                $(j).unbind("change").change(function() {
                    checkRepeatEmail($(j), g)
                }
                )) : k = !0
            }
        })
    }
    return k
}
function checkCorrectEmailMx(j, g) {
    var k = !1;
    if (j) {
        var a = $(j).val()
          , f = $(j).attr("name");
        $.ajax({
            type: "POST",
            url: g,
            data: {
                email: a
            },
            async: !1,
            success: function(a) {
                a && a.Success == !1 ? (a = [],
                a.push({
                    Key: f,
                    Value: "\u60a8\u8f93\u5165\u7684\u90ae\u7bb1\u53ef\u80fd\u6709\u9519\u8bef\uff01"
                }),
                Mobile.common.showCustomVaildate(a)) : k = !0
            }
        })
    }
    return k
}
function similarEmail(j, g) {
    var k = !1
      , a = $(j).val()
      , f = $(j).attr("name");
    a.indexOf("@") > -1 && $.ajax({
        type: "POST",
        url: g,
        async: !1,
        data: {
            email: a
        },
        success: function(a) {
            a && a.Success == !1 ? (a = [],
            a.push({
                Key: f,
                Value: "\u60a8\u8f93\u5165\u7684\u90ae\u7bb1\u53ef\u80fd\u6709\u9519\u8bef\uff01"
            }),
            Mobile.common.showCustomVaildate(a)) : k = !0
        }
    });
    return k
}
function QueryString(j) {
    var g = window.location.search.substring(1).split("&");
    for (i = 0; i < g.length; i++) {
        var k = g[i].split("=");
        if (k[0].toUpperCase() == j)
            return k[1]
    }
    return ""
}
function NotInputNumber(j, g) {
    if (/\d+$/.test(g)) {
        var k = /[^0-9]+/.exec(j.value);
        j.value = k != null  ? k : ""
    }
    return !1
}
function ValidateNumber2(j, g) {
    if (!/^\d+$/.test(g)) {
        var k = /^\d+/.exec(j.value);
        j.value = k != null  ? k : ""
    }
    return !1
}
function StatisticClick(j) {
    j != null  && j != void 0 && !isNaN(parseInt(j)) && $.ajax({
        type: "POST",
        url: "/Home/StatisticClick",
        async: !0,
        data: {
            id: j
        },
        success: function() {}
    })
}
function ActivityStatistic(j) {
    j != null  && $.trim(j) != "" && $.ajax({
        type: "POST",
        url: "/Home/ActivityStatistic",
        async: !0,
        data: {
            name: j
        },
        success: function() {}
    })
}
function GenerateBuyCountSelect(j) {
    for (var g = 1; g <= j; g++)
        $("#buyCount").append("<option>" + g + "</option>")
}
function moneyformat(j) {
    j += "";
    for (var g = /(-?\d+)(\d{3})/; g.test(j); )
        j = j.replace(g, "$1,$2");
    return j
}
$.postJSON = function(j, g, k) {
    $.ajax({
        type: "POST",
        url: j,
        data: g,
        timeout: 3E3,
        async: !1,
        dataType: "json",
        success: k
    })
}
;
$.retryAjax = function(j) {
    var g = $.extend({
        enableRetry: !0,
        timeout: Mobile.common.ajaxTimeout,
        retryMax: Mobile.common.ajaxRetryMax
    }, j);
    g.beforeSend = function(g) {
        navigator.onLine ? typeof j.beforeSend === "function" && j.beforeSend() : (showNetworkMsg(),
        g.abort())
    }
    ;
    $.ajax(g)
}
;
$.ajaxPrefilter(function(j, g) {
    j.error = function(j, a) {
        if (g.enableRetry === !0)
            g.error && typeof g.error === "function" && g.error(),
            g.retryCount ? g.retryCount++ : g.retryCount = 1,
            g.retryCount > g.retryMax ? showNetworkMsg() : a == "timeout" && (canAlertMsg = !0,
            $.ajax(g))
    }
}
);
function initAddressSelectEvent(j) {
    $('select[name="provinces"]').change(function() {
        var g = $(this).parents(".provinces-group")
          , k = g.find("#cities, #regions, #streets").find("select");
        k.find("option:not(:first)").remove();
        g.find('input[type="hidden"]').val("");
        $(this).val() ? $.get(j, {
            name: "provinces",
            value: $(this).val()
        }, function(a) {
            g.find("#cities").html(a);
            $citys = $('select[name="cities"]');
            $citys.find("option").size() == 2 && ($citys.find("option:last").attr("selected", "true"),
            $citys.change());
            $('select[name="cities"]').selectmenu()
        }
        , 
        "text") : k.selectmenu("refresh")
    }
    );
    $("body").on("change", 'select[name="cities"]', function() {
        var g = $(this).parents(".provinces-group")
          , k = g.find('select[name="provinces"]').val()
          , a = [k, $(this).val()]
          , f = g.find("#regions, #streets").find("select");
        f.find("option:not(:first)").remove();
        g.find('input[type="hidden"]').val("");
        k && $(this).val() ? $.get(j, {
            name: "cities",
            value: a.join()
        }, function(a) {
            g.find("#regions").html(a);
            $('select[name="regions"]').selectmenu()
        }
        , "text") : f.selectmenu("refresh")
    }
    );
    $("body").on("change", 
    'select[name="regions"]', function() {
        var g = $(this).parents(".provinces-group")
          , k = g.find('select[name="cities"]')
          , a = g.find('select[name="provinces"]').val()
          , f = k.val();
        k = k.find(":selected").attr("citycode");
        var e = [a, f, $(this).val()]
          , d = g.find("#streets select");
        d.find("option:not(:first)").remove();
        g.find('input[type="hidden"]').val("");
        a && f && $(this).val() ? (g.find("input.area").val(e.join(" ")),
        g.find("input.citycode").val(k),
        g.find("label.error").hide(),
        $.get(j, {
            name: "regions",
            value: e.join()
        }, function(a) {
            g.find("#streets").html(a);
            $('select[name="streets"]').selectmenu()
        }
        , "text")) : d.selectmenu("refresh")
    }
    );
    $("body").on("change", 'select[name="streets"]', function() {
        var g = $(this).parents(".provinces-group")
          , j = g.find('select[name="provinces"]').val()
          , a = g.find('select[name="cities"]').val()
          , f = g.find('select[name="regions"]').val();
        j = [j, a, f];
        $(this).val() && j.push($(this).val());
        g.find("input.area").val(j.join(" "))
    }
    )
}
function toMoneyDisplay(j) {
    return $.isNumeric(j) && !isNaN(parseFloat(j)) ? parseFloat(j).toString() : "NaN"
}
function initWatermark() {
    $("textarea[watermark] , input[watermark]").each(function() {
        $(this).val() === "" || $(this).val() === $(this).attr("watermark") ? $(this).val($(this).attr("watermark")).css("color", "#a8a8a8") : $(this).css("color", "#000");
        ($(this).is("input") || $(this).is("textarea")) && $(this).bind("focus", function() {
            $(this).val() === $(this).attr("watermark") && $(this).val("");
            $(this).css("color", "#000")
        }
        ).bind("blur", function() {
            $(this).val() === "" ? $(this).val($(this).attr("watermark")).css("color", "#a8a8a8") : 
            $(this).css("color", "#000")
        }
        )
    }
    )
}
function padLeft(j, g) {
    j = j.toString();
    return j.length >= g ? j : padLeft("0" + j, g)
}
function setMenu(j, g) {
    var k = $('.menu-list[data-category="' + j + '"]');
    $("#main-content").remove();
    $(".menu-list").hide();
    k.show();
    MainCategoryActive(j);
    g && $('.menu-list[data-category="' + j + '"] #' + g).collapsible("expand");
    $("#menu").show()
}
function MainCategoryActive(j) {
    j !== "" && ($("#main-menu li").removeClass("active"),
    j = $("#" + j).closest("li"),
    j.addClass("active"),
    j.is(":last-child") ? $("#main-menu").addClass("ea-color") : $("#main-menu").removeClass("ea-color"))
}
function myFavCalculate() {
    var j = $.cookie("fav_item");
    j = j ? $.parseJSON(j) : null ;
    if (j != null  && j.item != void 0 && j.item) {
        var g = 0;
        $.each(j.item.split(","), function() {
            g++
        }
        );
        $("#fav-amt").text(g)
    }
        
}
;
// Input 6
(function(j) {
    var g = j.shopping = {}
      , k = {
        formSubmitted: !1,
        apliayUrl: "",
        finishOrderUrl: "",
        payFailUrl: "",
        addPurchasePriceUrl: ""
    };
    jQuery.extend(j.shopping, {
        Init: function(a) {
            k = $.extend({}, k, a || {});
            $("#orderform").submit(function() {
                if (!k.formSubmitted)
                    if (k.formSubmitted = !0,
                    !checkStock() || !checkFreeItem() || !checkBuyOverItem())
                        k.formSubmitted = !1;
                    else {
                        var a = []
                          , e = $("#pick-up-tel-val").val()
                          , d = $("#autofill-tel-label");
                        d.length > 0 && (e = d.data("tel") + e);
                        (!$("#pick-up-name-val").val() || !$("#pick-up-provinces-val").val() || 
                        !$("#pick-up-addr-val").val()) && a.push({
                            Key: "addr-no-record",
                            Value: "\u8bf7\u9009\u62e9\u6536\u8d27\u5730\u5740"
                        });
                        e ? /^[0-9]+$/.test(e) ? /^1[34578]\d{9}$/.test(e) || a.push({
                            Key: "tel-validate-only",
                            Value: "\u8054\u7edc\u4eba\u624b\u673a\u53f7\u7801\u683c\u5f0f\u9519\u8bef"
                        }) : a.push({
                            Key: "tel-validate-only",
                            Value: "\u8054\u7edc\u4eba\u624b\u673a\u53f7\u7801\u8bf7\u52ff\u8f93\u5165\u7279\u6b8a\u7b26\u53f7"
                        }) : a.push({
                            Key: "tel-validate-only",
                            Value: "\u8bf7\u8f93\u5165\u8054\u7edc\u4eba\u624b\u673a\u53f7\u7801"
                        });
                        a.length ? (Mobile.common.showCustomVaildate(a),
                        k.formSubmitted = !1) : (Mobile.common.hideCustomVaildate(["addr-no-record", "tel-validate-only"]),
                        $('[name="order.\u6536\u4ef6\u4eba\u96fb\u8a71"]').val(e),
                        $.ajax({
                            type: "POST",
                            url: $(this).attr("action"),
                            data: $(this).serialize(),
                            dataType: "json",
                            beforeSend: function() {
                                $.mobile.loading("show", {
                                    text: "\u8ba2\u5355\u5904\u7406\u4e2d...",
                                    textonly: !0,
                                    textVisible: !0,
                                    theme: "b"
                                })
                            },
                            success: function(a) {
                                $.mobile.loading("hide");
                                a.Success ? a.Data ? typeof WeixinJSBridge == "undefined" ? 
                                document.addEventListener ? document.addEventListener("WeixinJSBridgeReady", Mobile.shopping.weixinPay(a.Data), !1) : document.attachEvent && (document.attachEvent("WeixinJSBridgeReady", Mobile.shopping.weixinPay(a.Data)),
                                document.attachEvent("onWeixinJSBridgeReady", Mobile.shopping.weixinPay(a.Data))) : Mobile.shopping.weixinPay(a.Data) : ($(".weixin-btn, .alipay-btn, .go-shopping-btn").off("click"),
                                $("#popupOrderConfirm").html() === void 0 ? location.href = k.apliayUrl : $("#popupOrderConfirm").popup("open", {
                                    positionTo: "window"
                                })) : 
                                Mobile.common.showAlertMessage(a.Data.join("<br/>"), function() {
                                    if (a.Message === "T")
                                        $(".weixin-btn, .alipay-btn").off("click"),
                                        location.href = k.payFailUrl
                                }
                                )
                            },
                            complete: function() {
                                $.mobile.loading("hide");
                                k.formSubmitted = !1
                            }
                        }))
                    }
                return !1
            }
            );
            $(".weixin-btn, .alipay-btn").on("click", function() {
                $("#pay-type").val($(this).attr("data-val"));
                $("#orderform").submit()
            }
            );
            $(".go-shopping-btn, #shippingfee-remind").on("click", function() {
                location.href = Mobile.common.AppName + "/"
            }
            );
            $(".decrease, .increase").bind("click", 
            function() {
                var a = !1;
                $(this).attr("data-isAddpurchaseprice") === "true" && (a = !0);
                changeAmount($(this), a)
            }
            )
        },
        weixinPay: function(a) {
            WeixinJSBridge.invoke("getBrandWCPayRequest", {
                appId: a.appID,
                timeStamp: a.timeStamp.toString(),
                nonceStr: a.nonceStr,
                "package": a["package"],
                signType: a.signType,
                paySign: a.paySign
            }, function(a) {
                var e = "";
                if (a.err_msg.match(/ok$/))
                    e = k.finishOrderUrl;
                else if (k.payFailUrl)
                    e = k.payFailUrl;
                if (e)
                    $(".weixin-btn, .alipay-btn, .go-shopping-btn").off("click"),
                    location.href = e
            }
            )
        },
        clickChange: function(a) {
            var f = 
            a.val()
              , e = a.attr("data-rel")
              , d = a.attr("id")
              , b = 0;
            e && $('.order-amount[data-rel="' + e + '"]').each(function() {
                b += parseInt($(this).val())
            }
            );
            $.retryAjax({
                type: "POST",
                url: Mobile.common.AppName + "/shopping/ChangeBuyAmount",
                data: {
                    buyAmount: b,
                    singleItemCount: f,
                    itemNo: d,
                    activityNo: e
                },
                dataType: "json",
                async: !1,
                success: function(b) {
                    b || Mobile.common.showAlertMessage("\u60a8\u7684\u8d2d\u7269\u8f66\u5185\u6ca1\u6709\u5546\u54c1\uff01", function() {
                        window.location.href = Mobile.common.AppName + "/"
                    }
                    );
                    if (b[0].errorMsg)
                        b[0].isOverWeight === 
                        "true" ? Mobile.common.showAlertMessage(b[0].errorMsg.replace("\r\n", "")) : Mobile.common.showAlertMessage(b[0].errorMsg),
                        a.val(f - 1);
                    else {
                        b[0].alertMsg && Mobile.common.showAlertMessage(b[0].alertMsg);
                        a.attr("data-amount", f);
                        var d = b[0].price != b[0].unitPrice;
                        if (d)
                            switch (b[0].activityType) {
                            case "8":
                            case "2":
                                $("." + e).html("\uffe5" + Math.round(b[0].price)).attr("data-price", b[0].price);
                                break;
                            case "1":
                                var g = b[0].discount
                                  , j = 0;
                                $.each($("." + e), function(a, b) {
                                    j = Math.round(parseFloat($(b).attr("data-original")) * g);
                                    $(b).html("\uffe5" + j).attr("data-price", j)
                                }
                                )
                            }
                        else {
                            var k = 0;
                            $.each($("." + e), function(a, b) {
                                k = $(b).attr("data-original");
                                $(b).html("\uffe5" + k).attr("data-price", k)
                            }
                            )
                        }
                        b = $(".notmatch" + e);
                        var q = $(".match" + e);
                        d ? (b.hide(),
                        q.show()) : (b.show(),
                        q.hide());
                        addPurchasePrice && countTotal() >= addPurchasePrice ? (Mobile.shopping.bindAddPurchasePriceItemEvent(),
                        calculateTotalPrice(),
                        $("#has-free-activity").val() === "True" && getFreeItem("/Shopping/GetFreeItem"),
                        $("#has-buyover-activity").val() === "True" && getBuyOverItem("/Shopping/GetBuyOverItem")) : 
                        $.retryAjax({
                            type: "POST",
                            url: Mobile.common.AppName + "/Shopping/GetAddPurchasePriceItem",
                            success: function(a) {
                                appendAddPurchasePriceItem(a);
                                $("#has-free-activity").val() === "True" && getFreeItem("/Shopping/GetFreeItem");
                                $("#has-buyover-activity").val() === "True" && getBuyOverItem("/Shopping/GetBuyOverItem")
                            }
                        })
                    }
                }
            })
        },
        appendSizeOptions: function(a, f) {
            f = f || 20;
            var e = $(a).parents(".product-area").find("select.stock-opt")
              , d = $(a).find("option:selected").attr("data-rel");
            e.html("");
            if (d) {
                for (var b = 1; b <= parseInt(d); b++)
                    if (e.append('<option value="' + 
                    b + '">' + b + "</option>"),
                    b >= f)
                        break;
                e.selectmenu("refresh").selectmenu("enable")
            } else
                e.html('<option value="">\u6570\u91cf</option>').selectmenu("refresh").selectmenu("disable"),
                e.parents(".any-checked-display").removeClass("any-checked-display")
        },
        addShopCar: function(a) {
            var f = a.parents(".block-addpurchase").find("select.size-opt")
              , e = a.parents(".block-addpurchase").find("select.stock-opt")
              , d = f.val()
              , b = e.val()
              , g = [];
            d || g.push("\u8bf7\u9009\u62e9\u5c3a\u5bf8");
            b || g.push("\u8bf7\u9009\u62e9\u6570\u91cf");
            parseInt(b) > 50 && g.push("\u5df2\u7ecf\u8d85\u8fc7\u5355\u54c1\u8d2d\u4e70\u4e0a\u9650\uff01");
            if (g.length)
                return Mobile.common.showAlertMessage(g.join("<br/>")),
                !1;
            $.retryAjax({
                type: "POST",
                url: Mobile.common.AppName + "/Shopping/SelectAddPurchasePrice",
                data: {
                    itemNo: d,
                    buyAmount: b
                },
                dataType: "json",
                async: !1,
                success: function(b) {
                    var d = $.parseJSON(b);
                    d.errorMsg != "" ? d.isOverWeight === "true" ? (Mobile.common.showAlertMessage(d.errorMsg),
                    e.val(e.attr("data-amount")).selectmenu("refresh")) : Mobile.common.showAlertMessage(d.errorMsg) : 
                    (d.isShiftOut ? (f.val("").selectmenu("refresh"),
                    e.html("").selectmenu("refresh")) : ($(a).parents(".border-box").addClass("any-checked-display"),
                    e.attr("data-amount", e.val())),
                    d.alertMsg != "" ? Mobile.common.showAlertMessage(d.alertMsg, function() {
                        d.isShiftOut || Mobile.common.showAddCart($($(a).parents(".border-box").find(".product-name")).html() + "<br>\u5df2\u52a0\u5165\u8d2d\u7269\u8f66\uff01")
                    }
                    ) : d.isShiftOut || Mobile.common.showAddCart($($(a).parents(".border-box").find(".product-name")).html() + "<br>\u5df2\u52a0\u5165\u8d2d\u7269\u8f66\uff01"))
                }
            })
        },
        addColor: function(a) {
            a = a || 20;
            $.each(myCart, function(f, e) {
                var d = $('select.size-opt option[value="' + e.sn + '"]').parent()
                  , b = d.parents("div.product-area").find("select.stock-opt");
                d.length && (d.val(e.sn).selectmenu("refresh", !0),
                g.appendSizeOptions(d, a),
                b.val(e.amount).attr("data-amount", e.amount).selectmenu("refresh", !0),
                d.parents(".border-box").addClass("any-checked-display"))
            }
            )
        },
        getAddPurchasePriceList: function(a, f) {
            var e = 0
              , d = ""
              , b = ["ui-block-a", "ui-block-b"]
              , g = $("#imgbed").val()
              , j = g ? g.split(",") : []
              , 
            k = j.length - 1
              , v = 0;
            $.each(a, function() {
                d += '<div class="' + b[e] + ' block-addpurchase product-area"><div class="border-box"><img class="productimg" src="' + (k > -1 && this.\u5716\u7247 ? j[v] : "") + this.\u5716\u7247 + '" alt="' + this.\u5546\u54c1\u540d\u7a31 + '" title="' + this.\u5546\u54c1\u540d\u7a31 + this.\u984f\u8272 + '" /><h3 class="product-name">' + this.\u5546\u54c1\u540d\u7a31 + '</h3><div class="productname"><h3 class="any-display-price"><span class="activities">\uffe5' + toMoneyDisplay(this.\u55ae\u50f9) + "</span>&nbsp;&nbsp;<span>" + 
                f + '&nbsp;<em class="font14">' + toMoneyDisplay(this.AddPurchasePrice) + '</em></span></h3></div><div class="picksize"><select class="size-opt" data-mini="true" onchange="Mobile.shopping.appendSizeOptions($(this))"><option value="">\u5c3a\u5bf8</option>';
                $.each(this.col, function() {
                    this.\u5eab\u5b58 > 0 && (d += '<option value="' + this.sn + '" data-rel="' + this.\u5eab\u5b58 + '">' + this.size + "</option>")
                }
                );
                d += '</select><select class="stock-opt" data-mini="true" disabled><option value="">\u6570\u91cf</option></select></div><div class="checkbuy"><a href="javascript:void(0)" onclick="Mobile.shopping.addShopCar($(this))" class="check-btn btn-gold">\u52a0\u8d2d</a></div></div></div>';
                e = e == 1 ? 0 : ++e;
                v = k > -1 && v == k ? 0 : ++v
            }
            );
            $("#product-list").append(d);
            $("#add-purchase-price select").selectmenu();
            Mobile.shopping.addColor()
        },
        ReadRecommendedProducts: function(a, f, e) {
            var d = 0
              , b = ""
              , g = ["ui-block-a", "ui-block-b"];
            a.length != 0 && ($.each(a, function() {
                b += '<div class="' + g[d] + ' block_product font-xs"><a href="' + Mobile.common.AppName + "/Detail/" + this.Col[0].Sn + '" onclick="Mobile.product.Redirect()" data-ajax="false"><img class="productimg" alt="' + this.ProductName + '" src="' + (d == 0 ? f : e) + this.image_140 + 
                '" /></a>';
                b += '<div class="productname"><span>' + this.ProductName + '</span></div><div class="productprice">';
                this.IsActivities ? (this.Price != this.ActivityPrice && (b += '<span class="activities">\uffe5&nbsp;' + toMoneyDisplay(this.Price) + "</span>&nbsp;&nbsp;"),
                b += "<span>\u4f18\u60e0\u4ef7&nbsp;" + toMoneyDisplay(this.ActivityPrice) + "</span>") : b += this.IsAddPurchase ? '<span class="activities">\uffe5&nbsp;' + toMoneyDisplay(this.Price) + "</span>&nbsp;&nbsp;<span>\u53e6\u4eab\u6ee1\u989d\u4f18\u60e0</span>" : "<span>\uffe5&nbsp;" + 
                toMoneyDisplay(this.Price) + "</span>";
                b += "</div></div>";
                d = d == 1 ? 0 : ++d
            }
            ),
            $("#productList").html(b))
        },
        bindAddPurchasePriceItemEvent: function() {
            $("#add-purchase-price-btn").unbind("click").click(function() {
                location.href = k.addPurchasePriceUrl
            }
            ).removeClass().addClass("add-purchase-price-gold-btn")
        }
    })
}
)(Mobile);
function calculateTotalPrice() {
    var j = 0;
    $(".subtotal:visible").each(function() {
        var a = $(this).parent()
          , e = a.find("em.special-price")
          , d = parseFloat(e.attr("data-price").replace(/[^0-9.]/g, ""));
        a = parseInt(a.find(".order-amount").val());
        isNaN(a) && (a = 1);
        e.html("\uffe5" + (d * a).toFixed(0));
        j += a
    }
    );
    $("#total-amount").text(j);
    if ($(".subtotal").length && pdCostJson) {
        var g = !0
          , k = countTotal()
          , a = pdCostJson.Original;
        if (pdCostJson.Condition && pdCostJson.Special != void 0 && pdCostJson.Special != null  && k >= pdCostJson.Condition)
            a = 
            pdCostJson.Special,
            g = !1;
        $("#pd-cost").attr("data-cost", a).html("\uffe5" + a);
        $("#shippingfee-remind").hide().find("em").text("");
        g && pdCostJson.Condition > 0 && $("#shippingfee-remind").find("em").text(pdCostJson.Condition - k).end().show()
    }
    k = parseFloat($("#pd-cost").attr("data-cost"));
    g = countTotal();
    $("#total").html("\uffe5" + g);
    isNaN(k) && (k = 0);
    k = moneyformat(g + k);
    $("#order-price").html("\uffe5" + k);
    addPurchasePrice && g >= addPurchasePrice && Mobile.shopping.bindAddPurchasePriceItemEvent()
}
function countTotal() {
    var j = 0;
    $(".subtotal:visible").each(function() {
        var g = $(this).parent()
          , k = g.find("em.special-price");
        k = parseFloat(k.attr("data-price").replace(/[^0-9.]/g, ""));
        g = parseInt(g.find(".order-amount").val());
        isNaN(g) && (g = 1);
        j += k * g
    }
    );
    return parseFloat(j.toFixed(0))
}
var matchPrice = 0;
function getFreeItem(j) {
    $(".shopping-cart").length && (j += "?resetFreeItem=true");
    $(".free-item").length < 1 && ($("#shop-list tbody tr:last").after("<tr id='j-loading'><td colspan='4'>\u6d3b\u52a8\u5546\u54c1\u68c0\u67e5\u4e2d...</td></tr>"),
    $.retryAjax({
        url: Mobile.common.AppName + j,
        async: !1,
        dataType: "text",
        success: function(g) {
            $("#j-loading").remove();
            $("#shop-list tbody tr:last").after(g);
            $("#shop-list select").selectmenu({
                mini: !0
            })
        }
    }));
    matchPrice != 0 && countTotal() >= matchPrice ? $(".free-item").show() : $(".free-item").hide();
    calculateTotalPrice()
}
function getBuyOverItem(j) {
    $(".shopping-cart").length && (j += "?resetItem=true");
    $("#shop-list tbody tr:last").after("<tr id='j-loading'><td colspan='4'>\u6d3b\u52a8\u5546\u54c1\u68c0\u67e5\u4e2d...</td></tr>");
    $.retryAjax({
        url: Mobile.common.AppName + j,
        async: !1,
        dataType: "text",
        success: function(g) {
            $("#j-loading").remove();
            $(".buy-overitem").remove();
            $("#shop-list tbody tr:last").after(g);
            $("#shop-list select").selectmenu({
                mini: !0
            })
        }
    });
    calculateTotalPrice()
}
function checkOrderItemCount(j) {
    if ($('#shop-list tbody tr:not(".free-item")').length < 1)
        location.href = j
}
function onDel(j, g) {
    $.retryAjax({
        type: "POST",
        url: j,
        data: {
            itemNo: g
        },
        async: !1,
        success: function(g) {
            g == 1 && $.ajax({
                type: "POST",
                url: Mobile.common.AppName + "/Shopping/ShoppingCartList",
                success: function(a) {
                    $("#shop-list tbody tr:not(.free-item)").remove();
                    $("#shop-list tbody").prepend(a);
                    checkOrderItemCount(Mobile.common.AppName + "/Shopping/Cart");
                    calculateTotalPrice();
                    $("#has-free-activity").val() === "True" && getFreeItem("/Shopping/GetFreeItem");
                    $("#has-buyover-activity").val() === "True" && getBuyOverItem("/Shopping/GetBuyOverItem");
                    reBindClickChange()
                }
            })
        }
    })
}
function delFreeItem(j, g) {
    $.retryAjax({
        type: "POST",
        url: Mobile.common.AppName + "/Shopping/DelFreeItem",
        data: {
            itemNo: j
        },
        async: !1,
        success: function() {
            g.parents("tr.free-item").remove();
            calculateTotalPrice()
        }
    })
}
function delBuyOverItem(j, g) {
    $.retryAjax({
        type: "POST",
        url: Mobile.common.AppName + "/Shopping/DelBuyOverItem",
        data: {
            itemNo: j
        },
        async: !1,
        success: function() {
            g.parents("tr.buy-overitem").remove();
            calculateTotalPrice()
        }
    })
}
function delPurchasePriceItem(j) {
    $.retryAjax({
        type: "POST",
        url: Mobile.common.AppName + "/Shopping/RemovePurchasePriceItem",
        data: {
            itemNo: j
        },
        async: !1,
        success: function(g) {
            g == 1 && $.retryAjax({
                type: "POST",
                url: Mobile.common.AppName + "/Shopping/ShoppingCartList",
                success: function(g) {
                    $("#shop-list tbody tr:not(.free-item)").remove();
                    $("#shop-list tbody").prepend(g);
                    calculateTotalPrice();
                    $("#has-free-activity").val() === "True" && getFreeItem("/Shopping/GetFreeItem");
                    $("#has-buyover-activity").val() === "True" && getBuyOverItem("/Shopping/GetBuyOverItem");
                    reBindClickChange()
                }
            })
        }
    })
}
function checkStock() {
    if ($(".stock-tip").length > 0)
        return Mobile.common.showAlertMessage("\u6709\u5546\u54c1\u5df2\u4e0b\u67b6\u6216\u6ca1\u5e93\u5b58\uff0c\u8bf7\u91cd\u65b0\u9009\u8d2d\u6216\u79fb\u9664\u5546\u54c1\u3002"),
        !1;
    return !0
}
function checkFreeItem() {
    if ($(".free-item").length) {
        var j = !0;
        $("select.freeitem-size").each(function() {
            if ($.trim($(this).val()) == void 0 || $.trim($(this).val()) == "")
                Mobile.common.showAlertMessage("\u60a8\u5c1a\u672a\u9009\u62e9\u6d3b\u52a8\u8d60\u54c1\uff0c\u8bf7\u9009\u62e9\uff01"),
                j = !1
        }
        );
        return j
    }
    return !0
}
function checkBuyOverItem() {
    if ($(".buy-overitem").length) {
        var j = !0;
        $("select.buy-overitem-size").each(function() {
            if ($.trim($(this).val()) == void 0 || $.trim($(this).val()) == "")
                Mobile.common.showAlertMessage("\u60a8\u5c1a\u672a\u9009\u62e9\u6d3b\u52a8\u8d60\u54c1\uff0c\u8bf7\u9009\u62e9\uff01"),
                j = !1
        }
        );
        return j
    }
    return !0
}
function appendAddPurchasePriceItem(j) {
    $('#shop-list tr[class*="addpurchaseprice-item"]').remove();
    $("#shop-list tr.free-item").length ? $("#shop-list tbody tr.free-item:first").before(j) : $("#shop-list tr.buy-overitem").length ? $("#shop-list tr.buy-overitem:first").before(j) : $("#shop-list tbody tr:last").after(j);
    $("#shop-list select").selectmenu({
        mini: !0
    });
    calculateTotalPrice()
}
function changeAmount(j, g) {
    var k = j.parent()
      , a = j.attr("class")
      , f = k.find(".order-amount")
      , e = parseInt(f.val())
      , d = parseInt(f.attr("data-stock"), 10);
    if (a.indexOf("lock") != -1)
        return !1;
    else
        a.indexOf("decrease") === 0 ? e -= 1 : a.indexOf("increase") === 0 && (e += 1);
    isNaN(e) || isNaN(d) || e <= 1 ? (f.val(1),
    k.find(".decrease").addClass("lock"),
    k.find(".increase").removeClass("lock")) : (e >= d ? (f.val(d),
    k.find(".increase").addClass("lock")) : (f.val(e),
    k.find(".increase.lock").removeClass("lock")),
    k.find(".decrease.lock").removeClass("lock"));
    g === !0 ? $.retryAjax({
        type: "POST",
        url: Mobile.common.AppName + "/Shopping/SelectAddPurchasePrice",
        data: {
            itemNo: f.attr("id"),
            buyAmount: e
        },
        dataType: "json",
        async: !1,
        success: function(a) {
            a = $.parseJSON(a);
            a.errorMsg ? (a.isOverWeight === "true" ? Mobile.common.showAlertMessage(a.errorMsg.replace("\r\n", "")) : Mobile.common.showAlertMessage(a.errorMsg),
            f.val(e - 1)) : (a.alertMsg && Mobile.common.showAlertMessage(a.alertMsg),
            f.attr("data-amount", e),
            $.retryAjax({
                type: "POST",
                url: Mobile.common.AppName + "/Shopping/GetAddPurchasePriceItem",
                success: function(a) {
                    appendAddPurchasePriceItem(a);
                    $("#has-free-activity").val() === "True" && getFreeItem("/Shopping/GetFreeItem");
                    $("#has-buyover-activity").val() === "True" && getBuyOverItem("/Shopping/GetBuyOverItem");
                    reBindClickChange()
                }
            }))
        }
    }) : Mobile.shopping.clickChange(f)
}
function reBindClickChange() {
    $(".decrease, .increase").unbind("click").bind("click", function() {
        var j = !1;
        $(this).attr("data-isAddpurchaseprice") === "true" && (j = !0);
        changeAmount($(this), j)
    }
    );
    addPurchasePrice && countTotal() >= addPurchasePrice ? Mobile.shopping.bindAddPurchasePriceItemEvent() : $("#add-purchase-price-btn").unbind("click").click(function() {
        $("#customized-popup-map").popup("open")
    }
    ).removeClass().addClass("add-purchase-price-gray-btn")
}
;