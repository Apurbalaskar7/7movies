! function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(T, e) {
    function t(e, t) {
        return t.toUpperCase()
    }
    var n = [],
        C = T.document,
        c = n.slice,
        g = n.concat,
        a = n.push,
        i = n.indexOf,
        r = {},
        o = r.toString,
        h = r.hasOwnProperty,
        v = {},
        s = "2.2.4",
        k = function(e, t) {
            return new k.fn.init(e, t)
        },
        u = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        l = /^-ms-/,
        f = /-([\da-z])/gi;

    function p(e) {
        var t = !!e && "length" in e && e.length,
            n = k.type(e);
        return "function" !== n && !k.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    k.fn = k.prototype = {
        jquery: s,
        constructor: k,
        selector: "",
        length: 0,
        toArray: function() {
            return c.call(this)
        },
        get: function(e) {
            return null != e ? e < 0 ? this[e + this.length] : this[e] : c.call(this)
        },
        pushStack: function(e) {
            e = k.merge(this.constructor(), e);
            return e.prevObject = this, e.context = this.context, e
        },
        each: function(e) {
            return k.each(this, e)
        },
        map: function(n) {
            return this.pushStack(k.map(this, function(e, t) {
                return n.call(e, t, e)
            }))
        },
        slice: function() {
            return this.pushStack(c.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                e = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= e && e < t ? [this[e]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: a,
        sort: n.sort,
        splice: n.splice
    }, k.extend = k.fn.extend = function() {
        var e, t, n, r, i, o = arguments[0] || {},
            s = 1,
            a = arguments.length,
            u = !1;
        for ("boolean" == typeof o && (u = o, o = arguments[s] || {}, s++), "object" == typeof o || k.isFunction(o) || (o = {}), s === a && (o = this, s--); s < a; s++)
            if (null != (e = arguments[s]))
                for (t in e) i = o[t], n = e[t], o !== n && (u && n && (k.isPlainObject(n) || (r = k.isArray(n))) ? (i = r ? (r = !1, i && k.isArray(i) ? i : []) : i && k.isPlainObject(i) ? i : {}, o[t] = k.extend(u, i, n)) : void 0 !== n && (o[t] = n));
        return o
    }, k.extend({
        expando: "jQuery" + (s + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === k.type(e)
        },
        isArray: Array.isArray,
        isWindow: function(e) {
            return null != e && e === e.window
        },
        isNumeric: function(e) {
            var t = e && e.toString();
            return !k.isArray(e) && 0 <= t - parseFloat(t) + 1
        },
        isPlainObject: function(e) {
            if ("object" !== k.type(e) || e.nodeType || k.isWindow(e)) return !1;
            if (e.constructor && !h.call(e, "constructor") && !h.call(e.constructor.prototype || {}, "isPrototypeOf")) return !1;
            for (var t in e);
            return void 0 === t || h.call(e, t)
        },
        isEmptyObject: function(e) {
            for (var t in e) return !1;
            return !0
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? r[o.call(e)] || "object" : typeof e
        },
        globalEval: function(e) {
            var t, n = eval;
            (e = k.trim(e)) && (1 === e.indexOf("use strict") ? ((t = C.createElement("script")).text = e, C.head.appendChild(t).parentNode.removeChild(t)) : n(e))
        },
        camelCase: function(e) {
            return e.replace(l, "ms-").replace(f, t)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t) {
            var n, r = 0;
            if (p(e))
                for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
            else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r])) break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(u, "")
        },
        makeArray: function(e, t) {
            t = t || [];
            return null != e && (p(Object(e)) ? k.merge(t, "string" == typeof e ? [e] : e) : a.call(t, e)), t
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : i.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
            return e.length = i, e
        },
        grep: function(e, t, n) {
            for (var r = [], i = 0, o = e.length, s = !n; i < o; i++) !t(e[i], i) != s && r.push(e[i]);
            return r
        },
        map: function(e, t, n) {
            var r, i, o = 0,
                s = [];
            if (p(e))
                for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && s.push(i);
            else
                for (o in e) i = t(e[o], o, n), null != i && s.push(i);
            return g.apply([], s)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, r;
            return "string" == typeof t && (r = e[t], t = e, e = r), k.isFunction(e) ? (n = c.call(arguments, 2), (r = function() {
                return e.apply(t || this, n.concat(c.call(arguments)))
            }).guid = e.guid = e.guid || k.guid++, r) : void 0
        },
        now: Date.now,
        support: v
    }), "function" == typeof Symbol && (k.fn[Symbol.iterator] = n[Symbol.iterator]), k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        r["[object " + t + "]"] = t.toLowerCase()
    });
    var d = function(n) {
        function f(e, t, n) {
            var r = "0x" + t - 65536;
            return r != r || n ? t : r < 0 ? String.fromCharCode(65536 + r) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
        }

        function t() {
            T()
        }
        var e, h, b, o, r, g, p, v, w, u, l, T, C, i, k, m, s, a, y, E = "sizzle" + +new Date,
            x = n.document,
            N = 0,
            c = 0,
            d = ie(),
            S = ie(),
            j = ie(),
            D = function(e, t) {
                return e === t && (l = !0), 0
            },
            A = {}.hasOwnProperty,
            q = [],
            L = q.pop,
            H = q.push,
            O = q.push,
            F = q.slice,
            P = function(e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                    if (e[n] === t) return n;
                return -1
            },
            R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            M = "[\\x20\\t\\r\\n\\f]",
            I = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]",
            $ = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)",
            B = new RegExp(M + "+", "g"),
            _ = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
            X = new RegExp("^" + M + "*," + M + "*"),
            z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
            U = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"),
            V = new RegExp($),
            Y = new RegExp("^" + I + "$"),
            G = {
                ID: new RegExp("^#(" + I + ")"),
                CLASS: new RegExp("^\\.(" + I + ")"),
                TAG: new RegExp("^(" + I + "|[*])"),
                ATTR: new RegExp("^" + W),
                PSEUDO: new RegExp("^" + $),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + R + ")$", "i"),
                needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
            },
            Q = /^(?:input|select|textarea|button)$/i,
            J = /^h\d$/i,
            K = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = /'|\\/g,
            ne = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig");
        try {
            O.apply(q = F.call(x.childNodes), x.childNodes), q[x.childNodes.length].nodeType
        } catch (e) {
            O = {
                apply: q.length ? function(e, t) {
                    H.apply(e, F.call(t))
                } : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++];);
                    e.length = n - 1
                }
            }
        }

        function re(e, t, n, r) {
            var i, o, s, a, u, l, c, f, p = t && t.ownerDocument,
                d = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== d && 9 !== d && 11 !== d) return n;
            if (!r && ((t ? t.ownerDocument || t : x) !== C && T(t), t = t || C, k)) {
                if (11 !== d && (l = Z.exec(e)))
                    if (i = l[1]) {
                        if (9 === d) {
                            if (!(s = t.getElementById(i))) return n;
                            if (s.id === i) return n.push(s), n
                        } else if (p && (s = p.getElementById(i)) && y(t, s) && s.id === i) return n.push(s), n
                    } else {
                        if (l[2]) return O.apply(n, t.getElementsByTagName(e)), n;
                        if ((i = l[3]) && h.getElementsByClassName && t.getElementsByClassName) return O.apply(n, t.getElementsByClassName(i)), n
                    }
                if (h.qsa && !j[e + " "] && (!m || !m.test(e))) {
                    if (1 !== d) p = t, f = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((a = t.getAttribute("id")) ? a = a.replace(te, "\\$&") : t.setAttribute("id", a = E), o = (c = g(e)).length, u = Y.test(a) ? "#" + a : "[id='" + a + "']"; o--;) c[o] = u + " " + pe(c[o]);
                        f = c.join(","), p = ee.test(e) && ce(t.parentNode) || t
                    }
                    if (f) try {
                        return O.apply(n, p.querySelectorAll(f)), n
                    } catch (e) {} finally {
                        a === E && t.removeAttribute("id")
                    }
                }
            }
            return v(e.replace(_, "$1"), t, n, r)
        }

        function ie() {
            var n = [];

            function r(e, t) {
                return n.push(e + " ") > b.cacheLength && delete r[n.shift()], r[e + " "] = t
            }
            return r
        }

        function oe(e) {
            return e[E] = !0, e
        }

        function se(e) {
            var t = C.createElement("div");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function ae(e, t) {
            for (var n = e.split("|"), r = n.length; r--;) b.attrHandle[n[r]] = t
        }

        function ue(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || 1 << 31) - (~e.sourceIndex || 1 << 31);
            if (r) return r;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function le(s) {
            return oe(function(o) {
                return o = +o, oe(function(e, t) {
                    for (var n, r = s([], e.length, o), i = r.length; i--;) e[n = r[i]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }

        function ce(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        for (e in h = re.support = {}, r = re.isXML = function(e) {
                e = e && (e.ownerDocument || e).documentElement;
                return !!e && "HTML" !== e.nodeName
            }, T = re.setDocument = function(e) {
                var e = e ? e.ownerDocument || e : x;
                return e !== C && 9 === e.nodeType && e.documentElement && (i = (C = e).documentElement, k = !r(C), (e = C.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", t, !1) : e.attachEvent && e.attachEvent("onunload", t)), h.attributes = se(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), h.getElementsByTagName = se(function(e) {
                    return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length
                }), h.getElementsByClassName = K.test(C.getElementsByClassName), h.getById = se(function(e) {
                    return i.appendChild(e).id = E, !C.getElementsByName || !C.getElementsByName(E).length
                }), h.getById ? (b.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && k) {
                        e = t.getElementById(e);
                        return e ? [e] : []
                    }
                }, b.filter.ID = function(e) {
                    var t = e.replace(ne, f);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }) : (delete b.find.ID, b.filter.ID = function(e) {
                    var t = e.replace(ne, f);
                    return function(e) {
                        e = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                        return e && e.value === t
                    }
                }), b.find.TAG = h.getElementsByTagName ? function(e, t) {
                    return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : h.qsa ? t.querySelectorAll(e) : void 0
                } : function(e, t) {
                    var n, r = [],
                        i = 0,
                        o = t.getElementsByTagName(e);
                    if ("*" !== e) return o;
                    for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                    return r
                }, b.find.CLASS = h.getElementsByClassName && function(e, t) {
                    return void 0 !== t.getElementsByClassName && k ? t.getElementsByClassName(e) : void 0
                }, s = [], m = [], (h.qsa = K.test(C.querySelectorAll)) && (se(function(e) {
                    i.appendChild(e).innerHTML = "<a id='" + E + "'></a><select id='" + E + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || m.push("\\[" + M + "*(?:value|" + R + ")"), e.querySelectorAll("[id~=" + E + "-]").length || m.push("~="), e.querySelectorAll(":checked").length || m.push(":checked"), e.querySelectorAll("a#" + E + "+*").length || m.push(".#.+[+~]")
                }), se(function(e) {
                    var t = C.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name" + M + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || m.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), m.push(",.*:")
                })), (h.matchesSelector = K.test(a = i.matches || i.webkitMatchesSelector || i.mozMatchesSelector || i.oMatchesSelector || i.msMatchesSelector)) && se(function(e) {
                    h.disconnectedMatch = a.call(e, "div"), a.call(e, "[s!='']:x"), s.push("!=", $)
                }), m = m.length && new RegExp(m.join("|")), s = s.length && new RegExp(s.join("|")), e = K.test(i.compareDocumentPosition), y = e || K.test(i.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        t = t && t.parentNode;
                    return e === t || !(!t || 1 !== t.nodeType || !(n.contains ? n.contains(t) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(t)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, D = e ? function(e, t) {
                    if (e === t) return l = !0, 0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !h.sortDetached && t.compareDocumentPosition(e) === n ? e === C || e.ownerDocument === x && y(x, e) ? -1 : t === C || t.ownerDocument === x && y(x, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & n ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return l = !0, 0;
                    var n, r = 0,
                        i = e.parentNode,
                        o = t.parentNode,
                        s = [e],
                        a = [t];
                    if (!i || !o) return e === C ? -1 : t === C ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0;
                    if (i === o) return ue(e, t);
                    for (n = e; n = n.parentNode;) s.unshift(n);
                    for (n = t; n = n.parentNode;) a.unshift(n);
                    for (; s[r] === a[r];) r++;
                    return r ? ue(s[r], a[r]) : s[r] === x ? -1 : a[r] === x ? 1 : 0
                }), C
            }, re.matches = function(e, t) {
                return re(e, null, null, t)
            }, re.matchesSelector = function(e, t) {
                if ((e.ownerDocument || e) !== C && T(e), t = t.replace(U, "='$1']"), h.matchesSelector && k && !j[t + " "] && (!s || !s.test(t)) && (!m || !m.test(t))) try {
                    var n = a.call(e, t);
                    if (n || h.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                } catch (e) {}
                return 0 < re(t, C, null, [e]).length
            }, re.contains = function(e, t) {
                return (e.ownerDocument || e) !== C && T(e), y(e, t)
            }, re.attr = function(e, t) {
                (e.ownerDocument || e) !== C && T(e);
                var n = b.attrHandle[t.toLowerCase()],
                    n = n && A.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !k) : void 0;
                return void 0 !== n ? n : h.attributes || !k ? e.getAttribute(t) : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
            }, re.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, re.uniqueSort = function(e) {
                var t, n = [],
                    r = 0,
                    i = 0;
                if (l = !h.detectDuplicates, u = !h.sortStable && e.slice(0), e.sort(D), l) {
                    for (; t = e[i++];) t === e[i] && (r = n.push(i));
                    for (; r--;) e.splice(n[r], 1)
                }
                return u = null, e
            }, o = re.getText = function(e) {
                var t, n = "",
                    r = 0,
                    i = e.nodeType;
                if (i) {
                    if (1 === i || 9 === i || 11 === i) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
                    } else if (3 === i || 4 === i) return e.nodeValue
                } else
                    for (; t = e[r++];) n += o(t);
                return n
            }, (b = re.selectors = {
                cacheLength: 50,
                createPseudo: oe,
                match: G,
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
                    ATTR: function(e) {
                        return e[1] = e[1].replace(ne, f), e[3] = (e[3] || e[4] || e[5] || "").replace(ne, f), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || re.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && re.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && V.test(n) && (t = g(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(ne, f).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = d[e + " "];
                        return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && d(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(t, n, r) {
                        return function(e) {
                            e = re.attr(e, t);
                            return null == e ? "!=" === n : !n || (e += "", "=" === n ? e === r : "!=" === n ? e !== r : "^=" === n ? r && 0 === e.indexOf(r) : "*=" === n ? r && -1 < e.indexOf(r) : "$=" === n ? r && e.slice(-r.length) === r : "~=" === n ? -1 < (" " + e.replace(B, " ") + " ").indexOf(r) : "|=" === n && (e === r || e.slice(0, r.length + 1) === r + "-"))
                        }
                    },
                    CHILD: function(h, e, t, g, v) {
                        var m = "nth" !== h.slice(0, 3),
                            y = "last" !== h.slice(-4),
                            x = "of-type" === e;
                        return 1 === g && 0 === v ? function(e) {
                            return !!e.parentNode
                        } : function(e, t, n) {
                            var r, i, o, s, a, u, l = m != y ? "nextSibling" : "previousSibling",
                                c = e.parentNode,
                                f = x && e.nodeName.toLowerCase(),
                                p = !n && !x,
                                d = !1;
                            if (c) {
                                if (m) {
                                    for (; l;) {
                                        for (s = e; s = s[l];)
                                            if (x ? s.nodeName.toLowerCase() === f : 1 === s.nodeType) return !1;
                                        u = l = "only" === h && !u && "nextSibling"
                                    }
                                    return !0
                                }
                                if (u = [y ? c.firstChild : c.lastChild], y && p) {
                                    for (d = (a = (r = (i = (o = (s = c)[E] || (s[E] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[h] || [])[0] === N && r[1]) && r[2], s = a && c.childNodes[a]; s = ++a && s && s[l] || (d = a = 0) || u.pop();)
                                        if (1 === s.nodeType && ++d && s === e) {
                                            i[h] = [N, a, d];
                                            break
                                        }
                                } else if (p && (d = a = (r = (i = (o = (s = e)[E] || (s[E] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[h] || [])[0] === N && r[1]), !1 === d)
                                    for (;
                                        (s = ++a && s && s[l] || (d = a = 0) || u.pop()) && ((x ? s.nodeName.toLowerCase() !== f : 1 !== s.nodeType) || !++d || (p && ((i = (o = s[E] || (s[E] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[h] = [N, d]), s !== e)););
                                return (d -= v) === g || d % g == 0 && 0 <= d / g
                            }
                        }
                    },
                    PSEUDO: function(e, o) {
                        var t, s = b.pseudos[e] || b.setFilters[e.toLowerCase()] || re.error("unsupported pseudo: " + e);
                        return s[E] ? s(o) : 1 < s.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? oe(function(e, t) {
                            for (var n, r = s(e, o), i = r.length; i--;) e[n = P(e, r[i])] = !(t[n] = r[i])
                        }) : function(e) {
                            return s(e, 0, t)
                        }) : s
                    }
                },
                pseudos: {
                    not: oe(function(e) {
                        var r = [],
                            i = [],
                            a = p(e.replace(_, "$1"));
                        return a[E] ? oe(function(e, t, n, r) {
                            for (var i, o = a(e, null, r, []), s = e.length; s--;)(i = o[s]) && (e[s] = !(t[s] = i))
                        }) : function(e, t, n) {
                            return r[0] = e, a(r, null, n, i), r[0] = null, !i.pop()
                        }
                    }),
                    has: oe(function(t) {
                        return function(e) {
                            return 0 < re(t, e).length
                        }
                    }),
                    contains: oe(function(t) {
                        return t = t.replace(ne, f),
                            function(e) {
                                return -1 < (e.textContent || e.innerText || o(e)).indexOf(t)
                            }
                    }),
                    lang: oe(function(n) {
                        return Y.test(n || "") || re.error("unsupported lang: " + n), n = n.replace(ne, f).toLowerCase(),
                            function(e) {
                                var t;
                                do {
                                    if (t = k ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                                } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function(e) {
                        var t = n.location && n.location.hash;
                        return t && t.slice(1) === e.id
                    },
                    root: function(e) {
                        return e === i
                    },
                    focus: function(e) {
                        return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: function(e) {
                        return !1 === e.disabled
                    },
                    disabled: function(e) {
                        return !0 === e.disabled
                    },
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !b.pseudos.empty(e)
                    },
                    header: function(e) {
                        return J.test(e.nodeName)
                    },
                    input: function(e) {
                        return Q.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (e = e.getAttribute("type")) || "text" === e.toLowerCase())
                    },
                    first: le(function() {
                        return [0]
                    }),
                    last: le(function(e, t) {
                        return [t - 1]
                    }),
                    eq: le(function(e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: le(function(e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    }),
                    odd: le(function(e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    }),
                    lt: le(function(e, t, n) {
                        for (var r = n < 0 ? n + t : n; 0 <= --r;) e.push(r);
                        return e
                    }),
                    gt: le(function(e, t, n) {
                        for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                        return e
                    })
                }
            }).pseudos.nth = b.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) b.pseudos[e] = function(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }(e);
        for (e in {
                submit: !0,
                reset: !0
            }) b.pseudos[e] = function(n) {
            return function(e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n
            }
        }(e);

        function fe() {}

        function pe(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r
        }

        function de(s, e, t) {
            var a = e.dir,
                u = t && "parentNode" === a,
                l = c++;
            return e.first ? function(e, t, n) {
                for (; e = e[a];)
                    if (1 === e.nodeType || u) return s(e, t, n)
            } : function(e, t, n) {
                var r, i, o = [N, l];
                if (n) {
                    for (; e = e[a];)
                        if ((1 === e.nodeType || u) && s(e, t, n)) return !0
                } else
                    for (; e = e[a];)
                        if (1 === e.nodeType || u) {
                            if ((i = (r = (i = e[E] || (e[E] = {}))[e.uniqueID] || (i[e.uniqueID] = {}))[a]) && i[0] === N && i[1] === l) return o[2] = i[2];
                            if ((r[a] = o)[2] = s(e, t, n)) return !0
                        }
            }
        }

        function he(i) {
            return 1 < i.length ? function(e, t, n) {
                for (var r = i.length; r--;)
                    if (!i[r](e, t, n)) return !1;
                return !0
            } : i[0]
        }

        function ge(e, t, n, r, i) {
            for (var o, s = [], a = 0, u = e.length, l = null != t; a < u; a++)(o = e[a]) && (n && !n(o, r, i) || (s.push(o), l && t.push(a)));
            return s
        }

        function ve(d, h, g, v, m, e) {
            return v && !v[E] && (v = ve(v)), m && !m[E] && (m = ve(m, e)), oe(function(e, t, n, r) {
                var i, o, s, a = [],
                    u = [],
                    l = t.length,
                    c = e || function(e, t, n) {
                        for (var r = 0, i = t.length; r < i; r++) re(e, t[r], n);
                        return n
                    }(h || "*", n.nodeType ? [n] : n, []),
                    f = !d || !e && h ? c : ge(c, a, d, n, r),
                    p = g ? m || (e ? d : l || v) ? [] : t : f;
                if (g && g(f, p, n, r), v)
                    for (i = ge(p, u), v(i, [], n, r), o = i.length; o--;)(s = i[o]) && (p[u[o]] = !(f[u[o]] = s));
                if (e) {
                    if (m || d) {
                        if (m) {
                            for (i = [], o = p.length; o--;)(s = p[o]) && i.push(f[o] = s);
                            m(null, p = [], i, r)
                        }
                        for (o = p.length; o--;)(s = p[o]) && -1 < (i = m ? P(e, s) : a[o]) && (e[i] = !(t[i] = s))
                    }
                } else p = ge(p === t ? p.splice(l, p.length) : p), m ? m(null, t, p, r) : O.apply(t, p)
            })
        }

        function me(v, m) {
            function e(e, t, n, r, i) {
                var o, s, a, u = 0,
                    l = "0",
                    c = e && [],
                    f = [],
                    p = w,
                    d = e || x && b.find.TAG("*", i),
                    h = N += null == p ? 1 : Math.random() || .1,
                    g = d.length;
                for (i && (w = t === C || t || i); l !== g && null != (o = d[l]); l++) {
                    if (x && o) {
                        for (s = 0, t || o.ownerDocument === C || (T(o), n = !k); a = v[s++];)
                            if (a(o, t || C, n)) {
                                r.push(o);
                                break
                            }
                        i && (N = h)
                    }
                    y && ((o = !a && o) && u--, e && c.push(o))
                }
                if (u += l, y && l !== u) {
                    for (s = 0; a = m[s++];) a(c, f, t, n);
                    if (e) {
                        if (0 < u)
                            for (; l--;) c[l] || f[l] || (f[l] = L.call(r));
                        f = ge(f)
                    }
                    O.apply(r, f), i && !e && 0 < f.length && 1 < u + m.length && re.uniqueSort(r)
                }
                return i && (N = h, w = p), c
            }
            var y = 0 < m.length,
                x = 0 < v.length;
            return y ? oe(e) : e
        }
        return fe.prototype = b.filters = b.pseudos, b.setFilters = new fe, g = re.tokenize = function(e, t) {
            var n, r, i, o, s, a, u, l = S[e + " "];
            if (l) return t ? 0 : l.slice(0);
            for (s = e, a = [], u = b.preFilter; s;) {
                for (o in n && !(r = X.exec(s)) || (r && (s = s.slice(r[0].length) || s), a.push(i = [])), n = !1, (r = z.exec(s)) && (n = r.shift(), i.push({
                        value: n,
                        type: r[0].replace(_, " ")
                    }), s = s.slice(n.length)), b.filter) !(r = G[o].exec(s)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({
                    value: n,
                    type: o,
                    matches: r
                }), s = s.slice(n.length));
                if (!n) break
            }
            return t ? s.length : s ? re.error(e) : S(e, a).slice(0)
        }, p = re.compile = function(e, t) {
            var n, r = [],
                i = [],
                o = j[e + " "];
            if (!o) {
                for (n = (t = t || g(e)).length; n--;)((o = function e(t) {
                    for (var r, n, i, o = t.length, s = b.relative[t[0].type], a = s || b.relative[" "], u = s ? 1 : 0, l = de(function(e) {
                            return e === r
                        }, a, !0), c = de(function(e) {
                            return -1 < P(r, e)
                        }, a, !0), f = [function(e, t, n) {
                            return n = !s && (n || t !== w) || ((r = t).nodeType ? l : c)(e, t, n), r = null, n
                        }]; u < o; u++)
                        if (n = b.relative[t[u].type]) f = [de(he(f), n)];
                        else {
                            if ((n = b.filter[t[u].type].apply(null, t[u].matches))[E]) {
                                for (i = ++u; i < o && !b.relative[t[i].type]; i++);
                                return ve(1 < u && he(f), 1 < u && pe(t.slice(0, u - 1).concat({
                                    value: " " === t[u - 2].type ? "*" : ""
                                })).replace(_, "$1"), n, u < i && e(t.slice(u, i)), i < o && e(t = t.slice(i)), i < o && pe(t))
                            }
                            f.push(n)
                        }
                    return he(f)
                }(t[n]))[E] ? r : i).push(o);
                (o = j(e, me(i, r))).selector = e
            }
            return o
        }, v = re.select = function(e, t, n, r) {
            var i, o, s, a, u, l = "function" == typeof e && e,
                c = !r && g(e = l.selector || e);
            if (n = n || [], 1 === c.length) {
                if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (s = o[0]).type && h.getById && 9 === t.nodeType && k && b.relative[o[1].type]) {
                    if (!(t = (b.find.ID(s.matches[0].replace(ne, f), t) || [])[0])) return n;
                    l && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                for (i = G.needsContext.test(e) ? 0 : o.length; i-- && (s = o[i], !b.relative[a = s.type]);)
                    if ((u = b.find[a]) && (r = u(s.matches[0].replace(ne, f), ee.test(o[0].type) && ce(t.parentNode) || t))) {
                        if (o.splice(i, 1), !(e = r.length && pe(o))) return O.apply(n, r), n;
                        break
                    }
            }
            return (l || p(e, c))(r, t, !k, n, !t || ee.test(e) && ce(t.parentNode) || t), n
        }, h.sortStable = E.split("").sort(D).join("") === E, h.detectDuplicates = !!l, T(), h.sortDetached = se(function(e) {
            return 1 & e.compareDocumentPosition(C.createElement("div"))
        }), se(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || ae("type|href|height|width", function(e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), h.attributes && se(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || ae("value", function(e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }), se(function(e) {
            return null == e.getAttribute("disabled")
        }) || ae(R, function(e, t, n) {
            return n ? void 0 : !0 === e[t] ? t.toLowerCase() : (t = e.getAttributeNode(t)) && t.specified ? t.value : null
        }), re
    }(T);
    k.find = d, k.expr = d.selectors, k.expr[":"] = k.expr.pseudos, k.uniqueSort = k.unique = d.uniqueSort, k.text = d.getText, k.isXMLDoc = d.isXML, k.contains = d.contains;

    function m(e, t, n) {
        for (var r = [], i = void 0 !== n;
            (e = e[t]) && 9 !== e.nodeType;)
            if (1 === e.nodeType) {
                if (i && k(e).is(n)) break;
                r.push(e)
            }
        return r
    }

    function y(e, t) {
        for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
        return n
    }
    var x = k.expr.match.needsContext,
        b = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        w = /^.[^:#\[\.,]*$/;

    function E(e, n, r) {
        if (k.isFunction(n)) return k.grep(e, function(e, t) {
            return !!n.call(e, t, e) !== r
        });
        if (n.nodeType) return k.grep(e, function(e) {
            return e === n !== r
        });
        if ("string" == typeof n) {
            if (w.test(n)) return k.filter(n, e, r);
            n = k.filter(n, e)
        }
        return k.grep(e, function(e) {
            return -1 < i.call(n, e) !== r
        })
    }
    k.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? k.find.matchesSelector(r, e) ? [r] : [] : k.find.matches(e, k.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, k.fn.extend({
        find: function(e) {
            var t, n = this.length,
                r = [],
                i = this;
            if ("string" != typeof e) return this.pushStack(k(e).filter(function() {
                for (t = 0; t < n; t++)
                    if (k.contains(i[t], this)) return !0
            }));
            for (t = 0; t < n; t++) k.find(e, i[t], r);
            return (r = this.pushStack(1 < n ? k.unique(r) : r)).selector = this.selector ? this.selector + " " + e : e, r
        },
        filter: function(e) {
            return this.pushStack(E(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(E(this, e || [], !0))
        },
        is: function(e) {
            return !!E(this, "string" == typeof e && x.test(e) ? k(e) : e || [], !1).length
        }
    });
    var N, S = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (k.fn.init = function(e, t, n) {
        if (!e) return this;
        if (n = n || N, "string" != typeof e) return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : k.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(k) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), k.makeArray(e, this));
        if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : S.exec(e)) || !r[1] && t) return (!t || t.jquery ? t || n : this.constructor(t)).find(e);
        if (r[1]) {
            if (t = t instanceof k ? t[0] : t, k.merge(this, k.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : C, !0)), b.test(r[1]) && k.isPlainObject(t))
                for (var r in t) k.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
            return this
        }
        return (n = C.getElementById(r[2])) && n.parentNode && (this.length = 1, this[0] = n), this.context = C, this.selector = e, this
    }).prototype = k.fn, N = k(C);
    var j = /^(?:parents|prev(?:Until|All))/,
        D = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function A(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }
    k.fn.extend({
        has: function(e) {
            var t = k(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (k.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            for (var n, r = 0, i = this.length, o = [], s = x.test(e) || "string" != typeof e ? k(e, t || this.context) : 0; r < i; r++)
                for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (s ? -1 < s.index(n) : 1 === n.nodeType && k.find.matchesSelector(n, e))) {
                        o.push(n);
                        break
                    }
            return this.pushStack(1 < o.length ? k.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? i.call(k(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(k.uniqueSort(k.merge(this.get(), k(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), k.each({
        parent: function(e) {
            e = e.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function(e) {
            return m(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return m(e, "parentNode", n)
        },
        next: function(e) {
            return A(e, "nextSibling")
        },
        prev: function(e) {
            return A(e, "previousSibling")
        },
        nextAll: function(e) {
            return m(e, "nextSibling")
        },
        prevAll: function(e) {
            return m(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return m(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return m(e, "previousSibling", n)
        },
        siblings: function(e) {
            return y((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return y(e.firstChild)
        },
        contents: function(e) {
            return e.contentDocument || k.merge([], e.childNodes)
        }
    }, function(r, i) {
        k.fn[r] = function(e, t) {
            var n = k.map(this, i, e);
            return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = k.filter(t, n)), 1 < this.length && (D[r] || k.uniqueSort(n), j.test(r) && n.reverse()), this.pushStack(n)
        }
    });
    var q, L = /\S+/g;

    function H() {
        C.removeEventListener("DOMContentLoaded", H), T.removeEventListener("load", H), k.ready()
    }
    k.Callbacks = function(r) {
        var e, n;
        r = "string" == typeof r ? (e = r, n = {}, k.each(e.match(L) || [], function(e, t) {
            n[t] = !0
        }), n) : k.extend({}, r);

        function i() {
            for (a = r.once, s = o = !0; l.length; c = -1)
                for (t = l.shift(); ++c < u.length;) !1 === u[c].apply(t[0], t[1]) && r.stopOnFalse && (c = u.length, t = !1);
            r.memory || (t = !1), o = !1, a && (u = t ? [] : "")
        }
        var o, t, s, a, u = [],
            l = [],
            c = -1,
            f = {
                add: function() {
                    return u && (t && !o && (c = u.length - 1, l.push(t)), function n(e) {
                        k.each(e, function(e, t) {
                            k.isFunction(t) ? r.unique && f.has(t) || u.push(t) : t && t.length && "string" !== k.type(t) && n(t)
                        })
                    }(arguments), t && !o && i()), this
                },
                remove: function() {
                    return k.each(arguments, function(e, t) {
                        for (var n; - 1 < (n = k.inArray(t, u, n));) u.splice(n, 1), n <= c && c--
                    }), this
                },
                has: function(e) {
                    return e ? -1 < k.inArray(e, u) : 0 < u.length
                },
                empty: function() {
                    return u = u && [], this
                },
                disable: function() {
                    return a = l = [], u = t = "", this
                },
                disabled: function() {
                    return !u
                },
                lock: function() {
                    return a = l = [], t || (u = t = ""), this
                },
                locked: function() {
                    return !!a
                },
                fireWith: function(e, t) {
                    return a || (t = [e, (t = t || []).slice ? t.slice() : t], l.push(t), o || i()), this
                },
                fire: function() {
                    return f.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!s
                }
            };
        return f
    }, k.extend({
        Deferred: function(e) {
            var o = [
                    ["resolve", "done", k.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", k.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", k.Callbacks("memory")]
                ],
                i = "pending",
                s = {
                    state: function() {
                        return i
                    },
                    always: function() {
                        return a.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var i = arguments;
                        return k.Deferred(function(r) {
                            k.each(o, function(e, t) {
                                var n = k.isFunction(i[e]) && i[e];
                                a[t[1]](function() {
                                    var e = n && n.apply(this, arguments);
                                    e && k.isFunction(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this === s ? r.promise() : this, n ? [e] : arguments)
                                })
                            }), i = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? k.extend(e, s) : s
                    }
                },
                a = {};
            return s.pipe = s.then, k.each(o, function(e, t) {
                var n = t[2],
                    r = t[3];
                s[t[1]] = n.add, r && n.add(function() {
                    i = r
                }, o[1 ^ e][2].disable, o[2][2].lock), a[t[0]] = function() {
                    return a[t[0] + "With"](this === a ? s : this, arguments), this
                }, a[t[0] + "With"] = n.fireWith
            }), s.promise(a), e && e.call(a, a), a
        },
        when: function(e) {
            function t(t, n, r) {
                return function(e) {
                    n[t] = this, r[t] = 1 < arguments.length ? c.call(arguments) : e, r === i ? l.notifyWith(n, r) : --u || l.resolveWith(n, r)
                }
            }
            var i, n, r, o = 0,
                s = c.call(arguments),
                a = s.length,
                u = 1 !== a || e && k.isFunction(e.promise) ? a : 0,
                l = 1 === u ? e : k.Deferred();
            if (1 < a)
                for (i = new Array(a), n = new Array(a), r = new Array(a); o < a; o++) s[o] && k.isFunction(s[o].promise) ? s[o].promise().progress(t(o, n, i)).done(t(o, r, s)).fail(l.reject) : --u;
            return u || l.resolveWith(r, s), l.promise()
        }
    }), k.fn.ready = function(e) {
        return k.ready.promise().done(e), this
    }, k.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? k.readyWait++ : k.ready(!0)
        },
        ready: function(e) {
            (!0 === e ? --k.readyWait : k.isReady) || ((k.isReady = !0) !== e && 0 < --k.readyWait || (q.resolveWith(C, [k]), k.fn.triggerHandler && (k(C).triggerHandler("ready"), k(C).off("ready"))))
        }
    }), k.ready.promise = function(e) {
        return q || (q = k.Deferred(), "complete" === C.readyState || "loading" !== C.readyState && !C.documentElement.doScroll ? T.setTimeout(k.ready) : (C.addEventListener("DOMContentLoaded", H), T.addEventListener("load", H))), q.promise(e)
    }, k.ready.promise();

    function O(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    }
    var F = function(e, t, n, r, i, o, s) {
        var a = 0,
            u = e.length,
            l = null == n;
        if ("object" === k.type(n))
            for (a in i = !0, n) F(e, t, a, n[a], !0, o, s);
        else if (void 0 !== r && (i = !0, k.isFunction(r) || (s = !0), l && (t = s ? (t.call(e, r), null) : (l = t, function(e, t, n) {
                return l.call(k(e), n)
            })), t))
            for (; a < u; a++) t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
        return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
    };

    function P() {
        this.expando = k.expando + P.uid++
    }
    P.uid = 1, P.prototype = {
        register: function(e, t) {
            t = t || {};
            return e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                writable: !0,
                configurable: !0
            }), e[this.expando]
        },
        cache: function(e) {
            if (!O(e)) return {};
            var t = e[this.expando];
            return t || (t = {}, O(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t) i[t] = n;
            else
                for (r in t) i[r] = t[r];
            return i
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][t]
        },
        access: function(e, t, n) {
            var r;
            return void 0 === t || t && "string" == typeof t && void 0 === n ? void 0 !== (r = this.get(e, t)) ? r : this.get(e, k.camelCase(t)) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r, i, o = e[this.expando];
            if (void 0 !== o) {
                if (void 0 === t) this.register(e);
                else {
                    n = (r = k.isArray(t) ? t.concat(t.map(k.camelCase)) : (i = k.camelCase(t), t in o ? [t, i] : (r = i) in o ? [r] : r.match(L) || [])).length;
                    for (; n--;) delete o[r[n]]
                }
                void 0 !== t && !k.isEmptyObject(o) || (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            e = e[this.expando];
            return void 0 !== e && !k.isEmptyObject(e)
        }
    };
    var R = new P,
        M = new P,
        I = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        W = /[A-Z]/g;

    function $(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(W, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : I.test(n) ? k.parseJSON(n) : n)
                } catch (e) {}
                M.set(e, t, n)
            } else n = void 0;
        return n
    }
    k.extend({
        hasData: function(e) {
            return M.hasData(e) || R.hasData(e)
        },
        data: function(e, t, n) {
            return M.access(e, t, n)
        },
        removeData: function(e, t) {
            M.remove(e, t)
        },
        _data: function(e, t, n) {
            return R.access(e, t, n)
        },
        _removeData: function(e, t) {
            R.remove(e, t)
        }
    }), k.fn.extend({
        data: function(r, e) {
            var t, n, i, o = this[0],
                s = o && o.attributes;
            if (void 0 !== r) return "object" == typeof r ? this.each(function() {
                M.set(this, r)
            }) : F(this, function(t) {
                var e, n;
                return o && void 0 === t ? void 0 !== (e = M.get(o, r) || M.get(o, r.replace(W, "-$&").toLowerCase())) ? e : (n = k.camelCase(r), void 0 !== (e = M.get(o, n)) ? e : void 0 !== (e = $(o, n, void 0)) ? e : void 0) : (n = k.camelCase(r), void this.each(function() {
                    var e = M.get(this, n);
                    M.set(this, n, t), -1 < r.indexOf("-") && void 0 !== e && M.set(this, r, t)
                }))
            }, null, e, 1 < arguments.length, null, !0);
            if (this.length && (i = M.get(o), 1 === o.nodeType && !R.get(o, "hasDataAttrs"))) {
                for (t = s.length; t--;) s[t] && (0 === (n = s[t].name).indexOf("data-") && (n = k.camelCase(n.slice(5)), $(o, n, i[n])));
                R.set(o, "hasDataAttrs", !0)
            }
            return i
        },
        removeData: function(e) {
            return this.each(function() {
                M.remove(this, e)
            })
        }
    }), k.extend({
        queue: function(e, t, n) {
            var r;
            return e ? (t = (t || "fx") + "queue", r = R.get(e, t), n && (!r || k.isArray(n) ? r = R.access(e, t, k.makeArray(n)) : r.push(n)), r || []) : void 0
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = k.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = k._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function() {
                k.dequeue(e, t)
            }, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return R.get(e, n) || R.access(e, n, {
                empty: k.Callbacks("once memory").add(function() {
                    R.remove(e, [t + "queue", n])
                })
            })
        }
    }), k.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? k.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                var e = k.queue(this, t, n);
                k._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && k.dequeue(this, t)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                k.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            function n() {
                --i || o.resolveWith(s, [s])
            }
            var r, i = 1,
                o = k.Deferred(),
                s = this,
                a = this.length;
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(r = R.get(s[a], e + "queueHooks")) && r.empty && (i++, r.empty.add(n));
            return n(), o.promise(t)
        }
    });

    function B(e, t) {
        return e = t || e, "none" === k.css(e, "display") || !k.contains(e.ownerDocument, e)
    }
    var s = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        _ = new RegExp("^(?:([+-])=|)(" + s + ")([a-z%]*)$", "i"),
        X = ["Top", "Right", "Bottom", "Left"];

    function z(e, t, n, r) {
        var i, o = 1,
            s = 20,
            a = r ? function() {
                return r.cur()
            } : function() {
                return k.css(e, t, "")
            },
            u = a(),
            l = n && n[3] || (k.cssNumber[t] ? "" : "px"),
            c = (k.cssNumber[t] || "px" !== l && +u) && _.exec(k.css(e, t));
        if (c && c[3] !== l)
            for (l = l || c[3], n = n || [], c = +u || 1; o = o || ".5", c /= o, k.style(e, t, c + l), o !== (o = a() / u) && 1 !== o && --s;);
        return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
    }
    var U = /^(?:checkbox|radio)$/i,
        V = /<([\w:-]+)/,
        Y = /^$|\/(?:java|ecma)script/i,
        G = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };

    function Q(e, t) {
        var n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && k.nodeName(e, t) ? k.merge([e], n) : n
    }

    function J(e, t) {
        for (var n = 0, r = e.length; n < r; n++) R.set(e[n], "globalEval", !t || R.get(t[n], "globalEval"))
    }
    G.optgroup = G.option, G.tbody = G.tfoot = G.colgroup = G.caption = G.thead, G.th = G.td;
    var K = /<|&#?\w+;/;

    function Z(e, t, n, r, i) {
        for (var o, s, a, u, l, c = t.createDocumentFragment(), f = [], p = 0, d = e.length; p < d; p++)
            if ((o = e[p]) || 0 === o)
                if ("object" === k.type(o)) k.merge(f, o.nodeType ? [o] : o);
                else if (K.test(o)) {
            for (s = s || c.appendChild(t.createElement("div")), a = (V.exec(o) || ["", ""])[1].toLowerCase(), a = G[a] || G._default, s.innerHTML = a[1] + k.htmlPrefilter(o) + a[2], l = a[0]; l--;) s = s.lastChild;
            k.merge(f, s.childNodes), (s = c.firstChild).textContent = ""
        } else f.push(t.createTextNode(o));
        for (c.textContent = "", p = 0; o = f[p++];)
            if (r && -1 < k.inArray(o, r)) i && i.push(o);
            else if (u = k.contains(o.ownerDocument, o), s = Q(c.appendChild(o), "script"), u && J(s), n)
            for (l = 0; o = s[l++];) Y.test(o.type || "") && n.push(o);
        return c
    }
    n = C.createDocumentFragment().appendChild(C.createElement("div")), (d = C.createElement("input")).setAttribute("type", "radio"), d.setAttribute("checked", "checked"), d.setAttribute("name", "t"), n.appendChild(d), v.checkClone = n.cloneNode(!0).cloneNode(!0).lastChild.checked, n.innerHTML = "<textarea>x</textarea>", v.noCloneChecked = !!n.cloneNode(!0).lastChild.defaultValue;
    var ee = /^key/,
        te = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        ne = /^([^.]*)(?:\.(.+)|)/;

    function re() {
        return !0
    }

    function ie() {
        return !1
    }

    function oe() {
        try {
            return C.activeElement
        } catch (e) {}
    }

    function se(e, t, n, r, i, o) {
        var s, a;
        if ("object" == typeof t) {
            for (a in "string" != typeof n && (r = r || n, n = void 0), t) se(e, a, n, r, t[a], o);
            return e
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = ie;
        else if (!i) return e;
        return 1 === o && (s = i, (i = function(e) {
            return k().off(e), s.apply(this, arguments)
        }).guid = s.guid || (s.guid = k.guid++)), e.each(function() {
            k.event.add(this, t, i, r, n)
        })
    }
    k.event = {
        global: {},
        add: function(t, e, n, r, i) {
            var o, s, a, u, l, c, f, p, d, h = R.get(t);
            if (h)
                for (n.handler && (n = (o = n).handler, i = o.selector), n.guid || (n.guid = k.guid++), (a = h.events) || (a = h.events = {}), (s = h.handle) || (s = h.handle = function(e) {
                        return void 0 !== k && k.event.triggered !== e.type ? k.event.dispatch.apply(t, arguments) : void 0
                    }), u = (e = (e || "").match(L) || [""]).length; u--;) f = d = (l = ne.exec(e[u]) || [])[1], p = (l[2] || "").split(".").sort(), f && (c = k.event.special[f] || {}, f = (i ? c.delegateType : c.bindType) || f, c = k.event.special[f] || {}, l = k.extend({
                    type: f,
                    origType: d,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && k.expr.match.needsContext.test(i),
                    namespace: p.join(".")
                }, o), (d = a[f]) || ((d = a[f] = []).delegateCount = 0, c.setup && !1 !== c.setup.call(t, r, p, s) || t.addEventListener && t.addEventListener(f, s)), c.add && (c.add.call(t, l), l.handler.guid || (l.handler.guid = n.guid)), i ? d.splice(d.delegateCount++, 0, l) : d.push(l), k.event.global[f] = !0)
        },
        remove: function(e, t, n, r, i) {
            var o, s, a, u, l, c, f, p, d, h, g, v = R.hasData(e) && R.get(e);
            if (v && (u = v.events)) {
                for (l = (t = (t || "").match(L) || [""]).length; l--;)
                    if (d = g = (a = ne.exec(t[l]) || [])[1], h = (a[2] || "").split(".").sort(), d) {
                        for (f = k.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = p.length; o--;) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                        s && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || k.removeEvent(e, d, v.handle), delete u[d])
                    } else
                        for (d in u) k.event.remove(e, d + t[l], n, r, !0);
                k.isEmptyObject(u) && R.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            e = k.event.fix(e);
            var t, n, r, i, o, s = c.call(arguments),
                a = (R.get(this, "events") || {})[e.type] || [],
                u = k.event.special[e.type] || {};
            if ((s[0] = e).delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, e)) {
                for (o = k.event.handlers.call(this, e, a), t = 0;
                    (r = o[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = r.elem, n = 0;
                        (i = r.handlers[n++]) && !e.isImmediatePropagationStopped();) e.rnamespace && !e.rnamespace.test(i.namespace) || (e.handleObj = i, e.data = i.data, void 0 !== (i = ((k.event.special[i.origType] || {}).handle || i.handler).apply(r.elem, s)) && !1 === (e.result = i) && (e.preventDefault(), e.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, e), e.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, s = [],
                a = t.delegateCount,
                u = e.target;
            if (a && u.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
                for (; u !== this; u = u.parentNode || this)
                    if (1 === u.nodeType && (!0 !== u.disabled || "click" !== e.type)) {
                        for (r = [], n = 0; n < a; n++) void 0 === r[i = (o = t[n]).selector + " "] && (r[i] = o.needsContext ? -1 < k(i, this).index(u) : k.find(i, this, null, [u]).length), r[i] && r.push(o);
                        r.length && s.push({
                            elem: u,
                            handlers: r
                        })
                    }
            return a < t.length && s.push({
                elem: this,
                handlers: t.slice(a)
            }), s
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, r, i = t.button;
                return null == e.pageX && null != t.clientX && (n = (r = e.target.ownerDocument || C).documentElement, r = r.body, e.pageX = t.clientX + (n && n.scrollLeft || r && r.scrollLeft || 0) - (n && n.clientLeft || r && r.clientLeft || 0), e.pageY = t.clientY + (n && n.scrollTop || r && r.scrollTop || 0) - (n && n.clientTop || r && r.clientTop || 0)), e.which || void 0 === i || (e.which = 1 & i ? 1 : 2 & i ? 3 : 4 & i ? 2 : 0), e
            }
        },
        fix: function(e) {
            if (e[k.expando]) return e;
            var t, n, r, i = e.type,
                o = e,
                s = this.fixHooks[i];
            for (s || (this.fixHooks[i] = s = te.test(i) ? this.mouseHooks : ee.test(i) ? this.keyHooks : {}), r = s.props ? this.props.concat(s.props) : this.props, e = new k.Event(o), t = r.length; t--;) e[n = r[t]] = o[n];
            return e.target || (e.target = C), 3 === e.target.nodeType && (e.target = e.target.parentNode), s.filter ? s.filter(e, o) : e
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== oe() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === oe() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && k.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function(e) {
                    return k.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, k.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, k.Event = function(e, t) {
        return this instanceof k.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? re : ie) : this.type = e, t && k.extend(this, t), this.timeStamp = e && e.timeStamp || k.now(), void(this[k.expando] = !0)) : new k.Event(e, t)
    }, k.Event.prototype = {
        constructor: k.Event,
        isDefaultPrevented: ie,
        isPropagationStopped: ie,
        isImmediatePropagationStopped: ie,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = re, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = re, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = re, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, k.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, i) {
        k.event.special[e] = {
            delegateType: i,
            bindType: i,
            handle: function(e) {
                var t, n = e.relatedTarget,
                    r = e.handleObj;
                return n && (n === this || k.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t
            }
        }
    }), k.fn.extend({
        on: function(e, t, n, r) {
            return se(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return se(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, k(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" != typeof e) return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = ie), this.each(function() {
                k.event.remove(this, e, n, t)
            });
            for (i in e) this.off(i, t, e[i]);
            return this
        }
    });
    var ae = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        ue = /<script|<style|<link/i,
        le = /checked\s*(?:[^=]|=\s*.checked.)/i,
        ce = /^true\/(.*)/,
        fe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function pe(e, t) {
        return k.nodeName(e, "table") && k.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function de(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function he(e) {
        var t = ce.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function ge(e, t) {
        var n, r, i, o, s, a;
        if (1 === t.nodeType) {
            if (R.hasData(e) && (o = R.access(e), s = R.set(t, o), a = o.events))
                for (i in delete s.handle, s.events = {}, a)
                    for (n = 0, r = a[i].length; n < r; n++) k.event.add(t, i, a[i][n]);
            M.hasData(e) && (e = M.access(e), e = k.extend({}, e), M.set(t, e))
        }
    }

    function ve(n, r, i, o) {
        r = g.apply([], r);
        var e, t, s, a, u, l, c = 0,
            f = n.length,
            p = f - 1,
            d = r[0],
            h = k.isFunction(d);
        if (h || 1 < f && "string" == typeof d && !v.checkClone && le.test(d)) return n.each(function(e) {
            var t = n.eq(e);
            h && (r[0] = d.call(this, e, t.html())), ve(t, r, i, o)
        });
        if (f && (t = (e = Z(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
            for (a = (s = k.map(Q(e, "script"), de)).length; c < f; c++) u = e, c !== p && (u = k.clone(u, !0, !0), a && k.merge(s, Q(u, "script"))), i.call(n[c], u, c);
            if (a)
                for (l = s[s.length - 1].ownerDocument, k.map(s, he), c = 0; c < a; c++) u = s[c], Y.test(u.type || "") && !R.access(u, "globalEval") && k.contains(l, u) && (u.src ? k._evalUrl && k._evalUrl(u.src) : k.globalEval(u.textContent.replace(fe, "")))
        }
        return n
    }

    function me(e, t, n) {
        for (var r, i = t ? k.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || k.cleanData(Q(r)), r.parentNode && (n && k.contains(r.ownerDocument, r) && J(Q(r, "script")), r.parentNode.removeChild(r));
        return e
    }
    k.extend({
        htmlPrefilter: function(e) {
            return e.replace(ae, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var r, i, o, s, a, u, l, c = e.cloneNode(!0),
                f = k.contains(e.ownerDocument, e);
            if (!(v.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || k.isXMLDoc(e)))
                for (s = Q(c), r = 0, i = (o = Q(e)).length; r < i; r++) a = o[r], u = s[r], l = void 0, "input" === (l = u.nodeName.toLowerCase()) && U.test(a.type) ? u.checked = a.checked : "input" !== l && "textarea" !== l || (u.defaultValue = a.defaultValue);
            if (t)
                if (n)
                    for (o = o || Q(e), s = s || Q(c), r = 0, i = o.length; r < i; r++) ge(o[r], s[r]);
                else ge(e, c);
            return 0 < (s = Q(c, "script")).length && J(s, !f && Q(e, "script")), c
        },
        cleanData: function(e) {
            for (var t, n, r, i = k.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (O(n)) {
                    if (t = n[R.expando]) {
                        if (t.events)
                            for (r in t.events) i[r] ? k.event.remove(n, r) : k.removeEvent(n, r, t.handle);
                        n[R.expando] = void 0
                    }
                    n[M.expando] && (n[M.expando] = void 0)
                }
        }
    }), k.fn.extend({
        domManip: ve,
        detach: function(e) {
            return me(this, e, !0)
        },
        remove: function(e) {
            return me(this, e)
        },
        text: function(e) {
            return F(this, function(e) {
                return void 0 === e ? k.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return ve(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || pe(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return ve(this, arguments, function(e) {
                var t;
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (t = pe(this, e)).insertBefore(e, t.firstChild)
            })
        },
        before: function() {
            return ve(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return ve(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (k.cleanData(Q(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return k.clone(this, e, t)
            })
        },
        html: function(e) {
            return F(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !ue.test(e) && !G[(V.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = k.htmlPrefilter(e);
                    try {
                        for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (k.cleanData(Q(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return ve(this, arguments, function(e) {
                var t = this.parentNode;
                k.inArray(this, n) < 0 && (k.cleanData(Q(this)), t && t.replaceChild(e, this))
            }, n)
        }
    }), k.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, s) {
        k.fn[e] = function(e) {
            for (var t, n = [], r = k(e), i = r.length - 1, o = 0; o <= i; o++) t = o === i ? this : this.clone(!0), k(r[o])[s](t), a.apply(n, t.get());
            return this.pushStack(n)
        }
    });
    var ye, xe = {
        HTML: "block",
        BODY: "block"
    };

    function be(e, t) {
        e = k(t.createElement(e)).appendTo(t.body), t = k.css(e[0], "display");
        return e.detach(), t
    }

    function we(e) {
        var t = C,
            n = xe[e];
        return n || ("none" !== (n = be(e, t)) && n || ((t = (ye = (ye || k("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentDocument).write(), t.close(), n = be(e, t), ye.detach()), xe[e] = n), n
    }

    function Te(e, t, n, r) {
        var i, o = {};
        for (i in t) o[i] = e.style[i], e.style[i] = t[i];
        for (i in r = n.apply(e, r || []), t) e.style[i] = o[i];
        return r
    }
    var Ce, ke, Ee, Ne, Se, je, De = /^margin/,
        Ae = new RegExp("^(" + s + ")(?!px)[a-z%]+$", "i"),
        qe = function(e) {
            var t = e.ownerDocument.defaultView;
            return t && t.opener || (t = T), t.getComputedStyle(e)
        },
        Le = C.documentElement;

    function He() {
        je.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", je.innerHTML = "", Le.appendChild(Se);
        var e = T.getComputedStyle(je);
        Ce = "1%" !== e.top, Ne = "2px" === e.marginLeft, ke = "4px" === e.width, je.style.marginRight = "50%", Ee = "4px" === e.marginRight, Le.removeChild(Se)
    }

    function Oe(e, t, n) {
        var r, i, o = e.style;
        return "" !== (i = (n = n || qe(e)) ? n.getPropertyValue(t) || n[t] : void 0) && void 0 !== i || k.contains(e.ownerDocument, e) || (i = k.style(e, t)), n && !v.pixelMarginRight() && Ae.test(i) && De.test(t) && (r = o.width, e = o.minWidth, t = o.maxWidth, o.minWidth = o.maxWidth = o.width = i, i = n.width, o.width = r, o.minWidth = e, o.maxWidth = t), void 0 !== i ? i + "" : i
    }

    function Fe(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }
    Se = C.createElement("div"), (je = C.createElement("div")).style && (je.style.backgroundClip = "content-box", je.cloneNode(!0).style.backgroundClip = "", v.clearCloneStyle = "content-box" === je.style.backgroundClip, Se.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", Se.appendChild(je), k.extend(v, {
        pixelPosition: function() {
            return He(), Ce
        },
        boxSizingReliable: function() {
            return null == ke && He(), ke
        },
        pixelMarginRight: function() {
            return null == ke && He(), Ee
        },
        reliableMarginLeft: function() {
            return null == ke && He(), Ne
        },
        reliableMarginRight: function() {
            var e, t = je.appendChild(C.createElement("div"));
            return t.style.cssText = je.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", t.style.marginRight = t.style.width = "0", je.style.width = "1px", Le.appendChild(Se), e = !parseFloat(T.getComputedStyle(t).marginRight), Le.removeChild(Se), je.removeChild(t), e
        }
    }));
    var Pe = /^(none|table(?!-c[ea]).+)/,
        Re = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Me = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Ie = ["Webkit", "O", "Moz", "ms"],
        We = C.createElement("div").style;

    function $e(e) {
        if (e in We) return e;
        for (var t = e[0].toUpperCase() + e.slice(1), n = Ie.length; n--;)
            if ((e = Ie[n] + t) in We) return e
    }

    function Be(e, t, n) {
        var r = _.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }

    function _e(e, t, n, r, i) {
        for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; o < 4; o += 2) "margin" === n && (s += k.css(e, n + X[o], !0, i)), r ? ("content" === n && (s -= k.css(e, "padding" + X[o], !0, i)), "margin" !== n && (s -= k.css(e, "border" + X[o] + "Width", !0, i))) : (s += k.css(e, "padding" + X[o], !0, i), "padding" !== n && (s += k.css(e, "border" + X[o] + "Width", !0, i)));
        return s
    }

    function Xe(e, t, n) {
        var r = !0,
            i = "width" === t ? e.offsetWidth : e.offsetHeight,
            o = qe(e),
            s = "border-box" === k.css(e, "boxSizing", !1, o);
        if (i <= 0 || null == i) {
            if (((i = Oe(e, t, o)) < 0 || null == i) && (i = e.style[t]), Ae.test(i)) return i;
            r = s && (v.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + _e(e, t, n || (s ? "border" : "content"), r, o) + "px"
    }

    function ze(e, t) {
        for (var n, r, i, o = [], s = 0, a = e.length; s < a; s++)(r = e[s]).style && (o[s] = R.get(r, "olddisplay"), n = r.style.display, t ? (o[s] || "none" !== n || (r.style.display = ""), "" === r.style.display && B(r) && (o[s] = R.access(r, "olddisplay", we(r.nodeName)))) : (i = B(r), "none" === n && i || R.set(r, "olddisplay", i ? n : k.css(r, "display"))));
        for (s = 0; s < a; s++)(r = e[s]).style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[s] || "" : "none"));
        return e
    }

    function Ue(e, t, n, r, i) {
        return new Ue.prototype.init(e, t, n, r, i)
    }
    k.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        e = Oe(e, "opacity");
                        return "" === e ? "1" : e
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
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
            float: "cssFloat"
        },
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, s, a = k.camelCase(t),
                    u = e.style;
                return t = k.cssProps[a] || (k.cssProps[a] = $e(a) || a), s = k.cssHooks[t] || k.cssHooks[a], void 0 === n ? s && "get" in s && void 0 !== (i = s.get(e, !1, r)) ? i : u[t] : ("string" === (o = typeof n) && (i = _.exec(n)) && i[1] && (n = z(e, t, i), o = "number"), void(null != n && n == n && ("number" === o && (n += i && i[3] || (k.cssNumber[a] ? "" : "px")), v.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, r)) || (u[t] = n))))
            }
        },
        css: function(e, t, n, r) {
            var i, o = k.camelCase(t);
            return t = k.cssProps[o] || (k.cssProps[o] = $e(o) || o), (o = k.cssHooks[t] || k.cssHooks[o]) && "get" in o && (i = o.get(e, !0, n)), void 0 === i && (i = Oe(e, t, r)), "normal" === i && t in Me && (i = Me[t]), "" === n || n ? (t = parseFloat(i), !0 === n || isFinite(t) ? t || 0 : i) : i
        }
    }), k.each(["height", "width"], function(e, o) {
        k.cssHooks[o] = {
            get: function(e, t, n) {
                return t ? Pe.test(k.css(e, "display")) && 0 === e.offsetWidth ? Te(e, Re, function() {
                    return Xe(e, o, n)
                }) : Xe(e, o, n) : void 0
            },
            set: function(e, t, n) {
                var r, i = n && qe(e),
                    i = n && _e(e, o, n, "border-box" === k.css(e, "boxSizing", !1, i), i);
                return i && (r = _.exec(t)) && "px" !== (r[3] || "px") && (e.style[o] = t, t = k.css(e, o)), Be(0, t, i)
            }
        }
    }), k.cssHooks.marginLeft = Fe(v.reliableMarginLeft, function(e, t) {
        return t ? (parseFloat(Oe(e, "marginLeft")) || e.getBoundingClientRect().left - Te(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        })) + "px" : void 0
    }), k.cssHooks.marginRight = Fe(v.reliableMarginRight, function(e, t) {
        return t ? Te(e, {
            display: "inline-block"
        }, Oe, [e, "marginRight"]) : void 0
    }), k.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(i, o) {
        k.cssHooks[i + o] = {
            expand: function(e) {
                for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + X[t] + o] = r[t] || r[t - 2] || r[0];
                return n
            }
        }, De.test(i) || (k.cssHooks[i + o].set = Be)
    }), k.fn.extend({
        css: function(e, t) {
            return F(this, function(e, t, n) {
                var r, i, o = {},
                    s = 0;
                if (k.isArray(t)) {
                    for (r = qe(e), i = t.length; s < i; s++) o[t[s]] = k.css(e, t[s], !1, r);
                    return o
                }
                return void 0 !== n ? k.style(e, t, n) : k.css(e, t)
            }, e, t, 1 < arguments.length)
        },
        show: function() {
            return ze(this, !0)
        },
        hide: function() {
            return ze(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                B(this) ? k(this).show() : k(this).hide()
            })
        }
    }), (k.Tween = Ue).prototype = {
        constructor: Ue,
        init: function(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || k.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (k.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = Ue.propHooks[this.prop];
            return (e && e.get ? e : Ue.propHooks._default).get(this)
        },
        run: function(e) {
            var t, n = Ue.propHooks[this.prop];
            return this.options.duration ? this.pos = t = k.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), (n && n.set ? n : Ue.propHooks._default).set(this), this
        }
    }, Ue.prototype.init.prototype = Ue.prototype, Ue.propHooks = {
        _default: {
            get: function(e) {
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (e = k.css(e.elem, e.prop, "")) && "auto" !== e ? e : 0
            },
            set: function(e) {
                k.fx.step[e.prop] ? k.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[k.cssProps[e.prop]] && !k.cssHooks[e.prop] ? e.elem[e.prop] = e.now : k.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }, Ue.propHooks.scrollTop = Ue.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, k.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, k.fx = Ue.prototype.init, k.fx.step = {};
    var Ve, Ye, Ge = /^(?:toggle|show|hide)$/,
        Qe = /queueHooks$/;

    function Je() {
        return T.setTimeout(function() {
            Ve = void 0
        }), Ve = k.now()
    }

    function Ke(e, t) {
        var n, r = 0,
            i = {
                height: e
            };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = X[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function Ze(e, t, n) {
        for (var r, i = (et.tweeners[t] || []).concat(et.tweeners["*"]), o = 0, s = i.length; o < s; o++)
            if (r = i[o].call(n, t, e)) return r
    }

    function et(i, e, t) {
        var n, o, r = 0,
            s = et.prefilters.length,
            a = k.Deferred().always(function() {
                delete u.elem
            }),
            u = function() {
                if (o) return !1;
                for (var e = Ve || Je(), e = Math.max(0, l.startTime + l.duration - e), t = 1 - (e / l.duration || 0), n = 0, r = l.tweens.length; n < r; n++) l.tweens[n].run(t);
                return a.notifyWith(i, [l, t, e]), t < 1 && r ? e : (a.resolveWith(i, [l]), !1)
            },
            l = a.promise({
                elem: i,
                props: k.extend({}, e),
                opts: k.extend(!0, {
                    specialEasing: {},
                    easing: k.easing._default
                }, t),
                originalProperties: e,
                originalOptions: t,
                startTime: Ve || Je(),
                duration: t.duration,
                tweens: [],
                createTween: function(e, t) {
                    e = k.Tween(i, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
                    return l.tweens.push(e), e
                },
                stop: function(e) {
                    var t = 0,
                        n = e ? l.tweens.length : 0;
                    if (o) return this;
                    for (o = !0; t < n; t++) l.tweens[t].run(1);
                    return e ? (a.notifyWith(i, [l, 1, 0]), a.resolveWith(i, [l, e])) : a.rejectWith(i, [l, e]), this
                }
            }),
            c = l.props;
        for (function(e, t) {
                var n, r, i, o, s;
                for (n in e)
                    if (r = k.camelCase(n), i = t[r], o = e[n], k.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), s = k.cssHooks[r], s && "expand" in s)
                        for (n in o = s.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i);
                    else t[r] = i
            }(c, l.opts.specialEasing); r < s; r++)
            if (n = et.prefilters[r].call(l, i, c, l.opts)) return k.isFunction(n.stop) && (k._queueHooks(l.elem, l.opts.queue).stop = k.proxy(n.stop, n)), n;
        return k.map(c, Ze, l), k.isFunction(l.opts.start) && l.opts.start.call(i, l), k.fx.timer(k.extend(u, {
            elem: i,
            anim: l,
            queue: l.opts.queue
        })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }
    k.Animation = k.extend(et, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return z(n.elem, e, _.exec(t), n), n
            }]
        },
        tweener: function(e, t) {
            for (var n, r = 0, i = (e = k.isFunction(e) ? (t = e, ["*"]) : e.match(L)).length; r < i; r++) n = e[r], et.tweeners[n] = et.tweeners[n] || [], et.tweeners[n].unshift(t)
        },
        prefilters: [function(t, e, n) {
            var r, i, o, s, a, u, l, c = this,
                f = {},
                p = t.style,
                d = t.nodeType && B(t),
                h = R.get(t, "fxshow");
            for (r in n.queue || (null == (a = k._queueHooks(t, "fx")).unqueued && (a.unqueued = 0, u = a.empty.fire, a.empty.fire = function() {
                    a.unqueued || u()
                }), a.unqueued++, c.always(function() {
                    c.always(function() {
                        a.unqueued--, k.queue(t, "fx").length || a.empty.fire()
                    })
                })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], "inline" === ("none" === (l = k.css(t, "display")) ? R.get(t, "olddisplay") || we(t.nodeName) : l) && "none" === k.css(t, "float") && (p.display = "inline-block")), n.overflow && (p.overflow = "hidden", c.always(function() {
                    p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
                })), e)
                if (i = e[r], Ge.exec(i)) {
                    if (delete e[r], o = o || "toggle" === i, i === (d ? "hide" : "show")) {
                        if ("show" !== i || !h || void 0 === h[r]) continue;
                        d = !0
                    }
                    f[r] = h && h[r] || k.style(t, r)
                } else l = void 0;
            if (k.isEmptyObject(f)) "inline" === ("none" === l ? we(t.nodeName) : l) && (p.display = l);
            else
                for (r in h ? "hidden" in h && (d = h.hidden) : h = R.access(t, "fxshow", {}), o && (h.hidden = !d), d ? k(t).show() : c.done(function() {
                        k(t).hide()
                    }), c.done(function() {
                        for (var e in R.remove(t, "fxshow"), f) k.style(t, e, f[e])
                    }), f) s = Ze(d ? h[r] : 0, r, c), r in h || (h[r] = s.start, d && (s.end = s.start, s.start = "width" === r || "height" === r ? 1 : 0))
        }],
        prefilter: function(e, t) {
            t ? et.prefilters.unshift(e) : et.prefilters.push(e)
        }
    }), k.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? k.extend({}, e) : {
            complete: n || !n && t || k.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !k.isFunction(t) && t
        };
        return r.duration = k.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in k.fx.speeds ? k.fx.speeds[r.duration] : k.fx.speeds._default, null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
            k.isFunction(r.old) && r.old.call(this), r.queue && k.dequeue(this, r.queue)
        }, r
    }, k.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(B).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(t, e, n, r) {
            var i = k.isEmptyObject(t),
                o = k.speed(e, n, r),
                r = function() {
                    var e = et(this, k.extend({}, t), o);
                    (i || R.get(this, "finish")) && e.stop(!0)
                };
            return r.finish = r, i || !1 === o.queue ? this.each(r) : this.queue(o.queue, r)
        },
        stop: function(i, e, o) {
            function s(e) {
                var t = e.stop;
                delete e.stop, t(o)
            }
            return "string" != typeof i && (o = e, e = i, i = void 0), e && !1 !== i && this.queue(i || "fx", []), this.each(function() {
                var e = !0,
                    t = null != i && i + "queueHooks",
                    n = k.timers,
                    r = R.get(this);
                if (t) r[t] && r[t].stop && s(r[t]);
                else
                    for (t in r) r[t] && r[t].stop && Qe.test(t) && s(r[t]);
                for (t = n.length; t--;) n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
                !e && o || k.dequeue(this, i)
            })
        },
        finish: function(s) {
            return !1 !== s && (s = s || "fx"), this.each(function() {
                var e, t = R.get(this),
                    n = t[s + "queue"],
                    r = t[s + "queueHooks"],
                    i = k.timers,
                    o = n ? n.length : 0;
                for (t.finish = !0, k.queue(this, s, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) i[e].elem === this && i[e].queue === s && (i[e].anim.stop(!0), i.splice(e, 1));
                for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }), k.each(["toggle", "show", "hide"], function(e, r) {
        var i = k.fn[r];
        k.fn[r] = function(e, t, n) {
            return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(Ke(r, !0), e, t, n)
        }
    }), k.each({
        slideDown: Ke("show"),
        slideUp: Ke("hide"),
        slideToggle: Ke("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, r) {
        k.fn[e] = function(e, t, n) {
            return this.animate(r, e, t, n)
        }
    }), k.timers = [], k.fx.tick = function() {
        var e, t = 0,
            n = k.timers;
        for (Ve = k.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || k.fx.stop(), Ve = void 0
    }, k.fx.timer = function(e) {
        k.timers.push(e), e() ? k.fx.start() : k.timers.pop()
    }, k.fx.interval = 13, k.fx.start = function() {
        Ye = Ye || T.setInterval(k.fx.tick, k.fx.interval)
    }, k.fx.stop = function() {
        T.clearInterval(Ye), Ye = null
    }, k.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, k.fn.delay = function(r, e) {
        return r = k.fx && k.fx.speeds[r] || r, e = e || "fx", this.queue(e, function(e, t) {
            var n = T.setTimeout(e, r);
            t.stop = function() {
                T.clearTimeout(n)
            }
        })
    }, d = C.createElement("input"), n = C.createElement("select"), s = n.appendChild(C.createElement("option")), d.type = "checkbox", v.checkOn = "" !== d.value, v.optSelected = s.selected, n.disabled = !0, v.optDisabled = !s.disabled, (d = C.createElement("input")).value = "t", d.type = "radio", v.radioValue = "t" === d.value;
    var tt, nt = k.expr.attrHandle;
    k.fn.extend({
        attr: function(e, t) {
            return F(this, k.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                k.removeAttr(this, e)
            })
        }
    }), k.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? k.prop(e, t, n) : (1 === o && k.isXMLDoc(e) || (t = t.toLowerCase(), i = k.attrHooks[t] || (k.expr.match.bool.test(t) ? tt : void 0)), void 0 !== n ? null === n ? void k.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = k.find.attr(e, t)) ? void 0 : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!v.radioValue && "radio" === t && k.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r, i = 0,
                o = t && t.match(L);
            if (o && 1 === e.nodeType)
                for (; n = o[i++];) r = k.propFix[n] || n, k.expr.match.bool.test(n) && (e[r] = !1), e.removeAttribute(n)
        }
    }), tt = {
        set: function(e, t, n) {
            return !1 === t ? k.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, k.each(k.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var o = nt[t] || k.find.attr;
        nt[t] = function(e, t, n) {
            var r, i;
            return n || (i = nt[t], nt[t] = r, r = null != o(e, t, n) ? t.toLowerCase() : null, nt[t] = i), r
        }
    });
    var rt = /^(?:input|select|textarea|button)$/i,
        it = /^(?:a|area)$/i;
    k.fn.extend({
        prop: function(e, t) {
            return F(this, k.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[k.propFix[e] || e]
            })
        }
    }), k.extend({
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && k.isXMLDoc(e) || (t = k.propFix[t] || t, i = k.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = k.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : rt.test(e.nodeName) || it.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), v.optSelected || (k.propHooks.selected = {
        get: function(e) {
            e = e.parentNode;
            return e && e.parentNode && e.parentNode.selectedIndex, null
        },
        set: function(e) {
            e = e.parentNode;
            e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
        }
    }), k.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        k.propFix[this.toLowerCase()] = this
    });
    var ot = /[\t\r\n\f]/g;

    function st(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }
    k.fn.extend({
        addClass: function(t) {
            var e, n, r, i, o, s, a = 0;
            if (k.isFunction(t)) return this.each(function(e) {
                k(this).addClass(t.call(this, e, st(this)))
            });
            if ("string" == typeof t && t)
                for (e = t.match(L) || []; n = this[a++];)
                    if (s = st(n), r = 1 === n.nodeType && (" " + s + " ").replace(ot, " ")) {
                        for (o = 0; i = e[o++];) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                        s !== (s = k.trim(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        removeClass: function(t) {
            var e, n, r, i, o, s, a = 0;
            if (k.isFunction(t)) return this.each(function(e) {
                k(this).removeClass(t.call(this, e, st(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof t && t)
                for (e = t.match(L) || []; n = this[a++];)
                    if (s = st(n), r = 1 === n.nodeType && (" " + s + " ").replace(ot, " ")) {
                        for (o = 0; i = e[o++];)
                            for (; - 1 < r.indexOf(" " + i + " ");) r = r.replace(" " + i + " ", " ");
                        s !== (s = k.trim(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        toggleClass: function(i, t) {
            var o = typeof i;
            return "boolean" == typeof t && "string" == o ? t ? this.addClass(i) : this.removeClass(i) : k.isFunction(i) ? this.each(function(e) {
                k(this).toggleClass(i.call(this, e, st(this), t), t)
            }) : this.each(function() {
                var e, t, n, r;
                if ("string" == o)
                    for (t = 0, n = k(this), r = i.match(L) || []; e = r[t++];) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                else void 0 !== i && "boolean" != o || ((e = st(this)) && R.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", !e && !1 !== i && R.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            for (var t, n = 0, r = " " + e + " "; t = this[n++];)
                if (1 === t.nodeType && -1 < (" " + st(t) + " ").replace(ot, " ").indexOf(r)) return !0;
            return !1
        }
    });
    var at = /\r/g,
        ut = /[\x20\t\r\n\f]+/g;
    k.fn.extend({
        val: function(t) {
            var n, e, r, i = this[0];
            return arguments.length ? (r = k.isFunction(t), this.each(function(e) {
                1 === this.nodeType && (null == (e = r ? t.call(this, e, k(this).val()) : t) ? e = "" : "number" == typeof e ? e += "" : k.isArray(e) && (e = k.map(e, function(e) {
                    return null == e ? "" : e + ""
                })), (n = k.valHooks[this.type] || k.valHooks[this.nodeName.toLowerCase()]) && "set" in n && void 0 !== n.set(this, e, "value") || (this.value = e))
            })) : i ? (n = k.valHooks[i.type] || k.valHooks[i.nodeName.toLowerCase()]) && "get" in n && void 0 !== (e = n.get(i, "value")) ? e : "string" == typeof(e = i.value) ? e.replace(at, "") : null == e ? "" : e : void 0
        }
    }), k.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = k.find.attr(e, "value");
                    return null != t ? t : k.trim(k.text(e)).replace(ut, " ")
                }
            },
            select: {
                get: function(e) {
                    for (var t, n = e.options, r = e.selectedIndex, i = "select-one" === e.type || r < 0, o = i ? null : [], s = i ? r + 1 : n.length, a = r < 0 ? s : i ? r : 0; a < s; a++)
                        if (((t = n[a]).selected || a === r) && (v.optDisabled ? !t.disabled : null === t.getAttribute("disabled")) && (!t.parentNode.disabled || !k.nodeName(t.parentNode, "optgroup"))) {
                            if (t = k(t).val(), i) return t;
                            o.push(t)
                        }
                    return o
                },
                set: function(e, t) {
                    for (var n, r, i = e.options, o = k.makeArray(t), s = i.length; s--;)((r = i[s]).selected = -1 < k.inArray(k.valHooks.option.get(r), o)) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), k.each(["radio", "checkbox"], function() {
        k.valHooks[this] = {
            set: function(e, t) {
                return k.isArray(t) ? e.checked = -1 < k.inArray(k(e).val(), t) : void 0
            }
        }, v.checkOn || (k.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var lt = /^(?:focusinfocus|focusoutblur)$/;
    k.extend(k.event, {
        trigger: function(e, t, n, r) {
            var i, o, s, a, u, l, c = [n || C],
                f = h.call(e, "type") ? e.type : e,
                p = h.call(e, "namespace") ? e.namespace.split(".") : [],
                d = o = n = n || C;
            if (3 !== n.nodeType && 8 !== n.nodeType && !lt.test(f + k.event.triggered) && (-1 < f.indexOf(".") && (f = (p = f.split(".")).shift(), p.sort()), a = f.indexOf(":") < 0 && "on" + f, (e = e[k.expando] ? e : new k.Event(f, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = p.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : k.makeArray(t, [e]), l = k.event.special[f] || {}, r || !l.trigger || !1 !== l.trigger.apply(n, t))) {
                if (!r && !l.noBubble && !k.isWindow(n)) {
                    for (s = l.delegateType || f, lt.test(s + f) || (d = d.parentNode); d; d = d.parentNode) c.push(d), o = d;
                    o === (n.ownerDocument || C) && c.push(o.defaultView || o.parentWindow || T)
                }
                for (i = 0;
                    (d = c[i++]) && !e.isPropagationStopped();) e.type = 1 < i ? s : l.bindType || f, (u = (R.get(d, "events") || {})[e.type] && R.get(d, "handle")) && u.apply(d, t), (u = a && d[a]) && u.apply && O(d) && (e.result = u.apply(d, t), !1 === e.result && e.preventDefault());
                return e.type = f, r || e.isDefaultPrevented() || l._default && !1 !== l._default.apply(c.pop(), t) || !O(n) || a && k.isFunction(n[f]) && !k.isWindow(n) && ((o = n[a]) && (n[a] = null), n[k.event.triggered = f](), k.event.triggered = void 0, o && (n[a] = o)), e.result
            }
        },
        simulate: function(e, t, n) {
            e = k.extend(new k.Event, n, {
                type: e,
                isSimulated: !0
            });
            k.event.trigger(e, null, t)
        }
    }), k.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                k.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            return n ? k.event.trigger(e, t, n, !0) : void 0
        }
    }), k.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, n) {
        k.fn[n] = function(e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    }), k.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), v.focusin = "onfocusin" in T, v.focusin || k.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, r) {
        function i(e) {
            k.event.simulate(r, e.target, k.event.fix(e))
        }
        k.event.special[r] = {
            setup: function() {
                var e = this.ownerDocument || this,
                    t = R.access(e, r);
                t || e.addEventListener(n, i, !0), R.access(e, r, (t || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this,
                    t = R.access(e, r) - 1;
                t ? R.access(e, r, t) : (e.removeEventListener(n, i, !0), R.remove(e, r))
            }
        }
    });
    var ct = T.location,
        ft = k.now(),
        pt = /\?/;
    k.parseJSON = function(e) {
        return JSON.parse(e + "")
    }, k.parseXML = function(e) {
        var t;
        if (!e || "string" != typeof e) return null;
        try {
            t = (new T.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {
            t = void 0
        }
        return t && !t.getElementsByTagName("parsererror").length || k.error("Invalid XML: " + e), t
    };
    var dt = /#.*$/,
        ht = /([?&])_=[^&]*/,
        gt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        vt = /^(?:GET|HEAD)$/,
        mt = /^\/\//,
        yt = {},
        xt = {},
        bt = "*/".concat("*"),
        wt = C.createElement("a");

    function Tt(o) {
        return function(e, t) {
            "string" != typeof e && (t = e, e = "*");
            var n, r = 0,
                i = e.toLowerCase().match(L) || [];
            if (k.isFunction(t))
                for (; n = i[r++];) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
        }
    }

    function Ct(t, r, i, o) {
        var s = {},
            a = t === xt;

        function u(e) {
            var n;
            return s[e] = !0, k.each(t[e] || [], function(e, t) {
                t = t(r, i, o);
                return "string" != typeof t || a || s[t] ? a ? !(n = t) : void 0 : (r.dataTypes.unshift(t), u(t), !1)
            }), n
        }
        return u(r.dataTypes[0]) || !s["*"] && u("*")
    }

    function kt(e, t) {
        var n, r, i = k.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r = r || {})[n] = t[n]);
        return r && k.extend(!0, e, r), e
    }
    wt.href = ct.href, k.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: ct.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(ct.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": bt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": k.parseJSON,
                "text xml": k.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? kt(kt(e, k.ajaxSettings), t) : kt(k.ajaxSettings, e)
        },
        ajaxPrefilter: Tt(yt),
        ajaxTransport: Tt(xt),
        ajax: function(e, t) {
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var u, l, c, n, f, r, p, i, d = k.ajaxSetup({}, t),
                h = d.context || d,
                g = d.context && (h.nodeType || h.jquery) ? k(h) : k.event,
                v = k.Deferred(),
                m = k.Callbacks("once memory"),
                y = d.statusCode || {},
                o = {},
                s = {},
                x = 0,
                a = "canceled",
                b = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === x) {
                            if (!n)
                                for (n = {}; t = gt.exec(c);) n[t[1].toLowerCase()] = t[2];
                            t = n[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === x ? c : null
                    },
                    setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        return x || (e = s[n] = s[n] || e, o[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return x || (d.mimeType = e), this
                    },
                    statusCode: function(e) {
                        if (e)
                            if (x < 2)
                                for (var t in e) y[t] = [y[t], e[t]];
                            else b.always(e[b.status]);
                        return this
                    },
                    abort: function(e) {
                        e = e || a;
                        return u && u.abort(e), w(0, e), this
                    }
                };
            if (v.promise(b).complete = m.add, b.success = b.done, b.error = b.fail, d.url = ((e || d.url || ct.href) + "").replace(dt, "").replace(mt, ct.protocol + "//"), d.type = t.method || t.type || d.method || d.type, d.dataTypes = k.trim(d.dataType || "*").toLowerCase().match(L) || [""], null == d.crossDomain) {
                r = C.createElement("a");
                try {
                    r.href = d.url, r.href = r.href, d.crossDomain = wt.protocol + "//" + wt.host != r.protocol + "//" + r.host
                } catch (e) {
                    d.crossDomain = !0
                }
            }
            if (d.data && d.processData && "string" != typeof d.data && (d.data = k.param(d.data, d.traditional)), Ct(yt, d, t, b), 2 === x) return b;
            for (i in (p = k.event && d.global) && 0 == k.active++ && k.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !vt.test(d.type), l = d.url, d.hasContent || (d.data && (l = d.url += (pt.test(l) ? "&" : "?") + d.data, delete d.data), !1 === d.cache && (d.url = ht.test(l) ? l.replace(ht, "$1_=" + ft++) : l + (pt.test(l) ? "&" : "?") + "_=" + ft++)), d.ifModified && (k.lastModified[l] && b.setRequestHeader("If-Modified-Since", k.lastModified[l]), k.etag[l] && b.setRequestHeader("If-None-Match", k.etag[l])), (d.data && d.hasContent && !1 !== d.contentType || t.contentType) && b.setRequestHeader("Content-Type", d.contentType), b.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + bt + "; q=0.01" : "") : d.accepts["*"]), d.headers) b.setRequestHeader(i, d.headers[i]);
            if (d.beforeSend && (!1 === d.beforeSend.call(h, b, d) || 2 === x)) return b.abort();
            for (i in a = "abort", {
                    success: 1,
                    error: 1,
                    complete: 1
                }) b[i](d[i]);
            if (u = Ct(xt, d, t, b)) {
                if (b.readyState = 1, p && g.trigger("ajaxSend", [b, d]), 2 === x) return b;
                d.async && 0 < d.timeout && (f = T.setTimeout(function() {
                    b.abort("timeout")
                }, d.timeout));
                try {
                    x = 1, u.send(o, w)
                } catch (e) {
                    if (!(x < 2)) throw e;
                    w(-1, e)
                }
            } else w(-1, "No Transport");

            function w(e, t, n, r) {
                var i, o, s, a = t;
                2 !== x && (x = 2, f && T.clearTimeout(f), u = void 0, c = r || "", b.readyState = 0 < e ? 4 : 0, r = 200 <= e && e < 300 || 304 === e, n && (s = function(e, t, n) {
                    for (var r, i, o, s, a = e.contents, u = e.dataTypes;
                        "*" === u[0];) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r)
                        for (i in a)
                            if (a[i] && a[i].test(r)) {
                                u.unshift(i);
                                break
                            }
                    if (u[0] in n) o = u[0];
                    else {
                        for (i in n) {
                            if (!u[0] || e.converters[i + " " + u[0]]) {
                                o = i;
                                break
                            }
                            s = s || i
                        }
                        o = o || s
                    }
                    return o ? (o !== u[0] && u.unshift(o), n[o]) : void 0
                }(d, b, n)), s = function(e, t, n, r) {
                    var i, o, s, a, u, l = {},
                        c = e.dataTypes.slice();
                    if (c[1])
                        for (s in e.converters) l[s.toLowerCase()] = e.converters[s];
                    for (o = c.shift(); o;)
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                            if ("*" === o) o = u;
                            else if ("*" !== u && u !== o) {
                        if (!(s = l[u + " " + o] || l["* " + o]))
                            for (i in l)
                                if (a = i.split(" "), a[1] === o && (s = l[u + " " + a[0]] || l["* " + a[0]])) {
                                    !0 === s ? s = l[i] : !0 !== l[i] && (o = a[0], c.unshift(a[1]));
                                    break
                                }
                        if (!0 !== s)
                            if (s && e.throws) t = s(t);
                            else try {
                                t = s(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: s ? e : "No conversion from " + u + " to " + o
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: t
                    }
                }(d, s, b, r), r ? (d.ifModified && ((n = b.getResponseHeader("Last-Modified")) && (k.lastModified[l] = n), (n = b.getResponseHeader("etag")) && (k.etag[l] = n)), 204 === e || "HEAD" === d.type ? a = "nocontent" : 304 === e ? a = "notmodified" : (a = s.state, i = s.data, r = !(o = s.error))) : (o = a, !e && a || (a = "error", e < 0 && (e = 0))), b.status = e, b.statusText = (t || a) + "", r ? v.resolveWith(h, [i, a, b]) : v.rejectWith(h, [b, a, o]), b.statusCode(y), y = void 0, p && g.trigger(r ? "ajaxSuccess" : "ajaxError", [b, d, r ? i : o]), m.fireWith(h, [b, a]), p && (g.trigger("ajaxComplete", [b, d]), --k.active || k.event.trigger("ajaxStop")))
            }
            return b
        },
        getJSON: function(e, t, n) {
            return k.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return k.get(e, void 0, t, "script")
        }
    }), k.each(["get", "post"], function(e, i) {
        k[i] = function(e, t, n, r) {
            return k.isFunction(t) && (r = r || n, n = t, t = void 0), k.ajax(k.extend({
                url: e,
                type: i,
                dataType: r,
                data: t,
                success: n
            }, k.isPlainObject(e) && e))
        }
    }), k._evalUrl = function(e) {
        return k.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            throws: !0
        })
    }, k.fn.extend({
        wrapAll: function(t) {
            var e;
            return k.isFunction(t) ? this.each(function(e) {
                k(this).wrapAll(t.call(this, e))
            }) : (this[0] && (e = k(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this)
        },
        wrapInner: function(n) {
            return k.isFunction(n) ? this.each(function(e) {
                k(this).wrapInner(n.call(this, e))
            }) : this.each(function() {
                var e = k(this),
                    t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function(t) {
            var n = k.isFunction(t);
            return this.each(function(e) {
                k(this).wrapAll(n ? t.call(this, e) : t)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                k.nodeName(this, "body") || k(this).replaceWith(this.childNodes)
            }).end()
        }
    }), k.expr.filters.hidden = function(e) {
        return !k.expr.filters.visible(e)
    }, k.expr.filters.visible = function(e) {
        return 0 < e.offsetWidth || 0 < e.offsetHeight || 0 < e.getClientRects().length
    };
    var Et = /%20/g,
        Nt = /\[\]$/,
        St = /\r?\n/g,
        jt = /^(?:submit|button|image|reset|file)$/i,
        Dt = /^(?:input|select|textarea|keygen)/i;
    k.param = function(e, t) {
        function n(e, t) {
            t = k.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        }
        var r, i = [];
        if (void 0 === t && (t = k.ajaxSettings && k.ajaxSettings.traditional), k.isArray(e) || e.jquery && !k.isPlainObject(e)) k.each(e, function() {
            n(this.name, this.value)
        });
        else
            for (r in e) ! function n(r, e, i, o) {
                if (k.isArray(e)) k.each(e, function(e, t) {
                    i || Nt.test(r) ? o(r, t) : n(r + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, i, o)
                });
                else if (i || "object" !== k.type(e)) o(r, e);
                else
                    for (var t in e) n(r + "[" + t + "]", e[t], i, o)
            }(r, e[r], t, n);
        return i.join("&").replace(Et, "+")
    }, k.fn.extend({
        serialize: function() {
            return k.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = k.prop(this, "elements");
                return e ? k.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !k(this).is(":disabled") && Dt.test(this.nodeName) && !jt.test(e) && (this.checked || !U.test(e))
            }).map(function(e, t) {
                var n = k(this).val();
                return null == n ? null : k.isArray(n) ? k.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(St, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(St, "\r\n")
                }
            }).get()
        }
    }), k.ajaxSettings.xhr = function() {
        try {
            return new T.XMLHttpRequest
        } catch (e) {}
    };
    var At = {
            0: 200,
            1223: 204
        },
        qt = k.ajaxSettings.xhr();
    v.cors = !!qt && "withCredentials" in qt, v.ajax = qt = !!qt, k.ajaxTransport(function(i) {
        var o, s;
        return v.cors || qt && !i.crossDomain ? {
            send: function(e, t) {
                var n, r = i.xhr();
                if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields)
                    for (n in i.xhrFields) r[n] = i.xhrFields[n];
                for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) r.setRequestHeader(n, e[n]);
                o = function(e) {
                    return function() {
                        o && (o = s = r.onload = r.onerror = r.onabort = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(At[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
                            binary: r.response
                        } : {
                            text: r.responseText
                        }, r.getAllResponseHeaders()))
                    }
                }, r.onload = o(), s = r.onerror = o("error"), void 0 !== r.onabort ? r.onabort = s : r.onreadystatechange = function() {
                    4 === r.readyState && T.setTimeout(function() {
                        o && s()
                    })
                }, o = o("abort");
                try {
                    r.send(i.hasContent && i.data || null)
                } catch (e) {
                    if (o) throw e
                }
            },
            abort: function() {
                o && o()
            }
        } : void 0
    }), k.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return k.globalEval(e), e
            }
        }
    }), k.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), k.ajaxTransport("script", function(n) {
        var r, i;
        if (n.crossDomain) return {
            send: function(e, t) {
                r = k("<script>").prop({
                    charset: n.scriptCharset,
                    src: n.url
                }).on("load error", i = function(e) {
                    r.remove(), i = null, e && t("error" === e.type ? 404 : 200, e.type)
                }), C.head.appendChild(r[0])
            },
            abort: function() {
                i && i()
            }
        }
    });
    var Lt = [],
        Ht = /(=)\?(?=&|$)|\?\?/;
    k.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Lt.pop() || k.expando + "_" + ft++;
            return this[e] = !0, e
        }
    }), k.ajaxPrefilter("json jsonp", function(e, t, n) {
        var r, i, o, s = !1 !== e.jsonp && (Ht.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Ht.test(e.data) && "data");
        return s || "jsonp" === e.dataTypes[0] ? (r = e.jsonpCallback = k.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(Ht, "$1" + r) : !1 !== e.jsonp && (e.url += (pt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
            return o || k.error(r + " was not called"), o[0]
        }, e.dataTypes[0] = "json", i = T[r], T[r] = function() {
            o = arguments
        }, n.always(function() {
            void 0 === i ? k(T).removeProp(r) : T[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, Lt.push(r)), o && k.isFunction(i) && i(o[0]), o = i = void 0
        }), "script") : void 0
    }), k.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || C;
        var r = b.exec(e),
            n = !n && [];
        return r ? [t.createElement(r[1])] : (r = Z([e], t, n), n && n.length && k(n).remove(), k.merge([], r.childNodes))
    };
    var Ot = k.fn.load;

    function Ft(e) {
        return k.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }
    k.fn.load = function(e, t, n) {
        if ("string" != typeof e && Ot) return Ot.apply(this, arguments);
        var r, i, o, s = this,
            a = e.indexOf(" ");
        return -1 < a && (r = k.trim(e.slice(a)), e = e.slice(0, a)), k.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), 0 < s.length && k.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments, s.html(r ? k("<div>").append(k.parseHTML(e)).find(r) : e)
        }).always(n && function(e, t) {
            s.each(function() {
                n.apply(this, o || [e.responseText, t, e])
            })
        }), this
    }, k.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        k.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), k.expr.filters.animated = function(t) {
        return k.grep(k.timers, function(e) {
            return t === e.elem
        }).length
    }, k.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, s, a = k.css(e, "position"),
                u = k(e),
                l = {};
            "static" === a && (e.style.position = "relative"), o = u.offset(), r = k.css(e, "top"), s = k.css(e, "left"), s = ("absolute" === a || "fixed" === a) && -1 < (r + s).indexOf("auto") ? (i = (a = u.position()).top, a.left) : (i = parseFloat(r) || 0, parseFloat(s) || 0), k.isFunction(t) && (t = t.call(e, n, k.extend({}, o))), null != t.top && (l.top = t.top - o.top + i), null != t.left && (l.left = t.left - o.left + s), "using" in t ? t.using.call(e, l) : u.css(l)
        }
    }, k.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                k.offset.setOffset(this, t, e)
            });
            var e, n = this[0],
                r = {
                    top: 0,
                    left: 0
                },
                i = n && n.ownerDocument;
            return i ? (e = i.documentElement, k.contains(e, n) ? (r = n.getBoundingClientRect(), i = Ft(i), {
                top: r.top + i.pageYOffset - e.clientTop,
                left: r.left + i.pageXOffset - e.clientLeft
            }) : r) : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n = this[0],
                    r = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === k.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), k.nodeName(e[0], "html") || (r = e.offset()), r.top += k.css(e[0], "borderTopWidth", !0), r.left += k.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - r.top - k.css(n, "marginTop", !0),
                    left: t.left - r.left - k.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === k.css(e, "position");) e = e.offsetParent;
                return e || Le
            })
        }
    }), k.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, i) {
        var o = "pageYOffset" === i;
        k.fn[t] = function(e) {
            return F(this, function(e, t, n) {
                var r = Ft(e);
                return void 0 === n ? r ? r[i] : e[t] : void(r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n)
            }, t, e, arguments.length)
        }
    }), k.each(["top", "left"], function(e, n) {
        k.cssHooks[n] = Fe(v.pixelPosition, function(e, t) {
            return t ? (t = Oe(e, n), Ae.test(t) ? k(e).position()[n] + "px" : t) : void 0
        })
    }), k.each({
        Height: "height",
        Width: "width"
    }, function(o, s) {
        k.each({
            padding: "inner" + o,
            content: s,
            "": "outer" + o
        }, function(r, e) {
            k.fn[e] = function(e, t) {
                var n = arguments.length && (r || "boolean" != typeof e),
                    i = r || (!0 === e || !0 === t ? "margin" : "border");
                return F(this, function(e, t, n) {
                    var r;
                    return k.isWindow(e) ? e.document.documentElement["client" + o] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + o], r["scroll" + o], e.body["offset" + o], r["offset" + o], r["client" + o])) : void 0 === n ? k.css(e, t, i) : k.style(e, t, n, i)
                }, s, n ? e : void 0, n, null)
            }
        })
    }), k.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        size: function() {
            return this.length
        }
    }), k.fn.andSelf = k.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return k
    });
    var Pt = T.jQuery,
        Rt = T.$;
    return k.noConflict = function(e) {
        return T.$ === k && (T.$ = Rt), e && T.jQuery === k && (T.jQuery = Pt), k
    }, e || (T.jQuery = T.$ = k), k
});