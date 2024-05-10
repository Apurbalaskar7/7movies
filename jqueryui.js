! function(r, l) {
    function s(t, e) {
        var i, s, n = t.nodeName.toLowerCase();
        return "area" === n ? (s = (i = t.parentNode).name, !(!t.href || !s || "map" !== i.nodeName.toLowerCase()) && (!!(s = r("img[usemap=#" + s + "]")[0]) && o(s))) : (/input|select|textarea|button|object/.test(n) ? !t.disabled : "a" === n && t.href || e) && o(t)
    }

    function o(t) {
        return r.expr.filters.visible(t) && !r(t).parents().andSelf().filter(function() {
            return "hidden" === r.css(this, "visibility")
        }).length
    }
    var t, e, i = 0,
        n = /^ui-id-\d+$/;
    r.ui = r.ui || {}, r.ui.version || (r.extend(r.ui, {
        version: "1.9.2",
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
            NUMPAD_ADD: 107,
            NUMPAD_DECIMAL: 110,
            NUMPAD_DIVIDE: 111,
            NUMPAD_ENTER: 108,
            NUMPAD_MULTIPLY: 106,
            NUMPAD_SUBTRACT: 109,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    }), r.fn.extend({
        _focus: r.fn.focus,
        focus: function(e, i) {
            return "number" == typeof e ? this.each(function() {
                var t = this;
                setTimeout(function() {
                    r(t).focus(), i && i.call(t)
                }, e)
            }) : this._focus.apply(this, arguments)
        },
        scrollParent: function() {
            var t = (r.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function() {
                return /(relative|absolute|fixed)/.test(r.css(this, "position")) && /(auto|scroll)/.test(r.css(this, "overflow") + r.css(this, "overflow-y") + r.css(this, "overflow-x"))
            }) : this.parents().filter(function() {
                return /(auto|scroll)/.test(r.css(this, "overflow") + r.css(this, "overflow-y") + r.css(this, "overflow-x"))
            })).eq(0);
            return /fixed/.test(this.css("position")) || !t.length ? r(document) : t
        },
        zIndex: function(t) {
            if (t !== l) return this.css("zIndex", t);
            if (this.length)
                for (var e, i, s = r(this[0]); s.length && s[0] !== document;) {
                    if (e = s.css("position"), ("absolute" === e || "relative" === e || "fixed" === e) && (i = parseInt(s.css("zIndex"), 10), !isNaN(i) && 0 !== i)) return i;
                    s = s.parent()
                }
            return 0
        },
        uniqueId: function() {
            return this.each(function() {
                this.id || (this.id = "ui-id-" + ++i)
            })
        },
        removeUniqueId: function() {
            return this.each(function() {
                n.test(this.id) && r(this).removeAttr("id")
            })
        }
    }), r.extend(r.expr[":"], {
        data: r.expr.createPseudo ? r.expr.createPseudo(function(e) {
            return function(t) {
                return !!r.data(t, e)
            }
        }) : function(t, e, i) {
            return !!r.data(t, i[3])
        },
        focusable: function(t) {
            return s(t, !isNaN(r.attr(t, "tabindex")))
        },
        tabbable: function(t) {
            var e = r.attr(t, "tabindex"),
                i = isNaN(e);
            return (i || 0 <= e) && s(t, !i)
        }
    }), r(function() {
        var t = document.body,
            e = t.appendChild(document.createElement("div"));
        e.offsetHeight, r.extend(e.style, {
            minHeight: "100px",
            height: "auto",
            padding: 0,
            borderWidth: 0
        }), r.support.minHeight = 100 === e.offsetHeight, r.support.selectstart = "onselectstart" in e, t.removeChild(e).style.display = "none"
    }), r("<a>").outerWidth(1).jquery || r.each(["Width", "Height"], function(t, i) {
        function s(t, e, i, s) {
            return r.each(n, function() {
                e -= parseFloat(r.css(t, "padding" + this)) || 0, i && (e -= parseFloat(r.css(t, "border" + this + "Width")) || 0), s && (e -= parseFloat(r.css(t, "margin" + this)) || 0)
            }), e
        }
        var n = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
            o = i.toLowerCase(),
            a = {
                innerWidth: r.fn.innerWidth,
                innerHeight: r.fn.innerHeight,
                outerWidth: r.fn.outerWidth,
                outerHeight: r.fn.outerHeight
            };
        r.fn["inner" + i] = function(t) {
            return t === l ? a["inner" + i].call(this) : this.each(function() {
                r(this).css(o, s(this, t) + "px")
            })
        }, r.fn["outer" + i] = function(t, e) {
            return "number" != typeof t ? a["outer" + i].call(this, t) : this.each(function() {
                r(this).css(o, s(this, t, !0, e) + "px")
            })
        }
    }), r("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (r.fn.removeData = (e = r.fn.removeData, function(t) {
        return arguments.length ? e.call(this, r.camelCase(t)) : e.call(this)
    })), t = /msie ([\w.]+)/.exec(navigator.userAgent.toLowerCase()) || [], r.ui.ie = !!t.length, r.ui.ie6 = 6 === parseFloat(t[1], 10), r.fn.extend({
        disableSelection: function() {
            return this.bind((r.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(t) {
                t.preventDefault()
            })
        },
        enableSelection: function() {
            return this.unbind(".ui-disableSelection")
        }
    }), r.extend(r.ui, {
        plugin: {
            add: function(t, e, i) {
                var s, n = r.ui[t].prototype;
                for (s in i) n.plugins[s] = n.plugins[s] || [], n.plugins[s].push([e, i[s]])
            },
            call: function(t, e, i) {
                var s, n = t.plugins[e];
                if (n && t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType)
                    for (s = 0; s < n.length; s++) t.options[n[s][0]] && n[s][1].apply(t.element, i)
            }
        },
        contains: r.contains,
        hasScroll: function(t, e) {
            if ("hidden" === r(t).css("overflow")) return !1;
            var i = e && "left" === e ? "scrollLeft" : "scrollTop",
                e = !1;
            return 0 < t[i] || (t[i] = 1, e = 0 < t[i], t[i] = 0, e)
        },
        isOverAxis: function(t, e, i) {
            return e < t && t < e + i
        },
        isOver: function(t, e, i, s, n, o) {
            return r.ui.isOverAxis(t, i, n) && r.ui.isOverAxis(e, s, o)
        }
    }))
}(jQuery),
function(l, r) {
    var i = 0,
        u = Array.prototype.slice,
        s = l.cleanData;
    l.cleanData = function(t) {
        for (var e, i = 0; null != (e = t[i]); i++) try {
            l(e).triggerHandler("remove")
        } catch (t) {}
        s(t)
    }, l.widget = function(t, i, a) {
        var e, s, n, o, r = t.split(".")[0];
        t = t.split(".")[1], e = r + "-" + t, a || (a = i, i = l.Widget), l.expr[":"][e.toLowerCase()] = function(t) {
            return !!l.data(t, e)
        }, l[r] = l[r] || {}, s = l[r][t], n = l[r][t] = function(t, e) {
            if (!this._createWidget) return new n(t, e);
            arguments.length && this._createWidget(t, e)
        }, l.extend(n, s, {
            version: a.version,
            _proto: l.extend({}, a),
            _childConstructors: []
        }), (o = new i).options = l.widget.extend({}, o.options), l.each(a, function(e, s) {
            function n() {
                return i.prototype[e].apply(this, arguments)
            }

            function o(t) {
                return i.prototype[e].apply(this, t)
            }
            l.isFunction(s) && (a[e] = function() {
                var t, e = this._super,
                    i = this._superApply;
                return this._super = n, this._superApply = o, t = s.apply(this, arguments), this._super = e, this._superApply = i, t
            })
        }), n.prototype = l.widget.extend(o, {
            widgetEventPrefix: s ? o.widgetEventPrefix : t
        }, a, {
            constructor: n,
            namespace: r,
            widgetName: t,
            widgetBaseClass: e,
            widgetFullName: e
        }), s ? (l.each(s._childConstructors, function(t, e) {
            var i = e.prototype;
            l.widget(i.namespace + "." + i.widgetName, n, e._proto)
        }), delete s._childConstructors) : i._childConstructors.push(n), l.widget.bridge(t, n)
    }, l.widget.extend = function(t) {
        for (var e, i, s = u.call(arguments, 1), n = 0, o = s.length; n < o; n++)
            for (e in s[n]) i = s[n][e], s[n].hasOwnProperty(e) && i !== r && (l.isPlainObject(i) ? t[e] = l.isPlainObject(t[e]) ? l.widget.extend({}, t[e], i) : l.widget.extend({}, i) : t[e] = i);
        return t
    }, l.widget.bridge = function(o, e) {
        var a = e.prototype.widgetFullName || o;
        l.fn[o] = function(i) {
            var t = "string" == typeof i,
                s = u.call(arguments, 1),
                n = this;
            return i = !t && s.length ? l.widget.extend.apply(null, [i].concat(s)) : i, t ? this.each(function() {
                var t, e = l.data(this, a);
                return e ? l.isFunction(e[i]) && "_" !== i.charAt(0) ? (t = e[i].apply(e, s)) !== e && t !== r ? (n = t && t.jquery ? n.pushStack(t.get()) : t, !1) : void 0 : l.error("no such method '" + i + "' for " + o + " widget instance") : l.error("cannot call methods on " + o + " prior to initialization; attempted to call method '" + i + "'")
            }) : this.each(function() {
                var t = l.data(this, a);
                t ? t.option(i || {})._init() : l.data(this, a, new e(i, this))
            }), n
        }
    }, l.Widget = function() {}, l.Widget._childConstructors = [], l.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            disabled: !1,
            create: null
        },
        _createWidget: function(t, e) {
            e = l(e || this.defaultElement || this)[0], this.element = l(e), this.uuid = i++, this.eventNamespace = "." + this.widgetName + this.uuid, this.options = l.widget.extend({}, this.options, this._getCreateOptions(), t), this.bindings = l(), this.hoverable = l(), this.focusable = l(), e !== this && (l.data(e, this.widgetName, this), l.data(e, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function(t) {
                    t.target === e && this.destroy()
                }
            }), this.document = l(e.style ? e.ownerDocument : e.document || e), this.window = l(this.document[0].defaultView || this.document[0].parentWindow)), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
        },
        _getCreateOptions: l.noop,
        _getCreateEventData: l.noop,
        _create: l.noop,
        _init: l.noop,
        destroy: function() {
            this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(l.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
        },
        _destroy: l.noop,
        widget: function() {
            return this.element
        },
        option: function(t, e) {
            var i, s, n, o = t;
            if (0 === arguments.length) return l.widget.extend({}, this.options);
            if ("string" == typeof t)
                if (o = {}, t = (i = t.split(".")).shift(), i.length) {
                    for (s = o[t] = l.widget.extend({}, this.options[t]), n = 0; n < i.length - 1; n++) s[i[n]] = s[i[n]] || {}, s = s[i[n]];
                    if (t = i.pop(), e === r) return s[t] === r ? null : s[t];
                    s[t] = e
                } else {
                    if (e === r) return this.options[t] === r ? null : this.options[t];
                    o[t] = e
                }
            return this._setOptions(o), this
        },
        _setOptions: function(t) {
            for (var e in t) this._setOption(e, t[e]);
            return this
        },
        _setOption: function(t, e) {
            return this.options[t] = e, "disabled" === t && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!e).attr("aria-disabled", e), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")), this
        },
        enable: function() {
            return this._setOption("disabled", !1)
        },
        disable: function() {
            return this._setOption("disabled", !0)
        },
        _on: function(n, o, t) {
            var a, r = this;
            "boolean" != typeof n && (t = o, o = n, n = !1), t ? (o = a = l(o), this.bindings = this.bindings.add(o)) : (t = o, o = this.element, a = this.widget()), l.each(t, function(t, e) {
                function i() {
                    if (n || !0 !== r.options.disabled && !l(this).hasClass("ui-state-disabled")) return ("string" == typeof e ? r[e] : e).apply(r, arguments)
                }
                "string" != typeof e && (i.guid = e.guid = e.guid || i.guid || l.guid++);
                var s = t.match(/^(\w+)\s*(.*)$/),
                    t = s[1] + r.eventNamespace,
                    s = s[2];
                s ? a.delegate(s, t, i) : o.bind(t, i)
            })
        },
        _off: function(t, e) {
            e = (e || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, t.unbind(e).undelegate(e)
        },
        _delay: function(t, e) {
            var i = this;
            return setTimeout(function() {
                return ("string" == typeof t ? i[t] : t).apply(i, arguments)
            }, e || 0)
        },
        _hoverable: function(t) {
            this.hoverable = this.hoverable.add(t), this._on(t, {
                mouseenter: function(t) {
                    l(t.currentTarget).addClass("ui-state-hover")
                },
                mouseleave: function(t) {
                    l(t.currentTarget).removeClass("ui-state-hover")
                }
            })
        },
        _focusable: function(t) {
            this.focusable = this.focusable.add(t), this._on(t, {
                focusin: function(t) {
                    l(t.currentTarget).addClass("ui-state-focus")
                },
                focusout: function(t) {
                    l(t.currentTarget).removeClass("ui-state-focus")
                }
            })
        },
        _trigger: function(t, e, i) {
            var s, n, o = this.options[t];
            if (i = i || {}, (e = l.Event(e)).type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), e.target = this.element[0], n = e.originalEvent)
                for (s in n) s in e || (e[s] = n[s]);
            return this.element.trigger(e, i), !(l.isFunction(o) && !1 === o.apply(this.element[0], [e].concat(i)) || e.isDefaultPrevented())
        }
    }, l.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(o, a) {
        l.Widget.prototype["_" + o] = function(e, t, i) {
            "string" == typeof t && (t = {
                effect: t
            });
            var s, n = t ? !0 !== t && "number" != typeof t && t.effect || a : o;
            "number" == typeof(t = t || {}) && (t = {
                duration: t
            }), s = !l.isEmptyObject(t), t.complete = i, t.delay && e.delay(t.delay), s && l.effects && (l.effects.effect[n] || !1 !== l.uiBackCompat && l.effects[n]) ? e[o](t) : n !== o && e[n] ? e[n](t.duration, t.easing, i) : e.queue(function(t) {
                l(this)[o](), i && i.call(e[0]), t()
            })
        }
    }), !1 !== l.uiBackCompat && (l.Widget.prototype._getCreateOptions = function() {
        return l.metadata && l.metadata.get(this.element[0])[this.widgetName]
    })
}(jQuery),
function(n) {
    var o = !1;
    n(document).mouseup(function(t) {
        o = !1
    }), n.widget("ui.mouse", {
        version: "1.9.2",
        options: {
            cancel: "input,textarea,button,select,option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function() {
            var e = this;
            this.element.bind("mousedown." + this.widgetName, function(t) {
                return e._mouseDown(t)
            }).bind("click." + this.widgetName, function(t) {
                if (!0 === n.data(t.target, e.widgetName + ".preventClickEvent")) return n.removeData(t.target, e.widgetName + ".preventClickEvent"), t.stopImmediatePropagation(), !1
            }), this.started = !1
        },
        _mouseDestroy: function() {
            this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && n(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
        },
        _mouseDown: function(t) {
            if (!o) {
                this._mouseStarted && this._mouseUp(t), this._mouseDownEvent = t;
                var e = this,
                    i = 1 === t.which,
                    s = !("string" != typeof this.options.cancel || !t.target.nodeName) && n(t.target).closest(this.options.cancel).length;
                return i && !s && this._mouseCapture(t) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                    e.mouseDelayMet = !0
                }, this.options.delay)), this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = !1 !== this._mouseStart(t), !this._mouseStarted) ? t.preventDefault() : (!0 === n.data(t.target, this.widgetName + ".preventClickEvent") && n.removeData(t.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(t) {
                    return e._mouseMove(t)
                }, this._mouseUpDelegate = function(t) {
                    return e._mouseUp(t)
                }, n(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), t.preventDefault(), o = !0), !0) : !0
            }
        },
        _mouseMove: function(t) {
            return !n.ui.ie || 9 <= document.documentMode || t.button ? this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = !1 !== this._mouseStart(this._mouseDownEvent, t), this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted) : this._mouseUp(t)
        },
        _mouseUp: function(t) {
            return n(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, t.target === this._mouseDownEvent.target && n.data(t.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(t)), !1
        },
        _mouseDistanceMet: function(t) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function(t) {
            return this.mouseDelayMet
        },
        _mouseStart: function(t) {},
        _mouseDrag: function(t) {},
        _mouseStop: function(t) {},
        _mouseCapture: function(t) {
            return !0
        }
    })
}(jQuery),
function(x) {
    function C(t, e, i) {
        return [parseInt(t[0], 10) * (h.test(t[0]) ? e / 100 : 1), parseInt(t[1], 10) * (h.test(t[1]) ? i / 100 : 1)]
    }

    function k(t, e) {
        return parseInt(x.css(t, e), 10) || 0
    }
    x.ui = x.ui || {};
    var s, n, o, P = Math.max,
        T = Math.abs,
        E = Math.round,
        a = /left|center|right/,
        r = /top|center|bottom/,
        l = /[\+\-]\d+%?/,
        u = /^\w+/,
        h = /%$/,
        e = x.fn.position;
    x.position = {
            scrollbarWidth: function() {
                if (void 0 !== s) return s;
                var t, e = x("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                    i = e.children()[0];
                return x("body").append(e), t = i.offsetWidth, e.css("overflow", "scroll"), t === (i = i.offsetWidth) && (i = e[0].clientWidth), e.remove(), s = t - i
            },
            getScrollInfo: function(t) {
                var e = t.isWindow ? "" : t.element.css("overflow-x"),
                    i = t.isWindow ? "" : t.element.css("overflow-y"),
                    e = "scroll" === e || "auto" === e && t.width < t.element[0].scrollWidth,
                    t = "scroll" === i || "auto" === i && t.height < t.element[0].scrollHeight;
                return {
                    width: e ? x.position.scrollbarWidth() : 0,
                    height: t ? x.position.scrollbarWidth() : 0
                }
            },
            getWithinInfo: function(t) {
                var e = x(t || window),
                    t = x.isWindow(e[0]);
                return {
                    element: e,
                    isWindow: t,
                    offset: e.offset() || {
                        left: 0,
                        top: 0
                    },
                    scrollLeft: e.scrollLeft(),
                    scrollTop: e.scrollTop(),
                    width: t ? e.width() : e.outerWidth(),
                    height: t ? e.height() : e.outerHeight()
                }
            }
        }, x.fn.position = function(c) {
            if (!c || !c.of) return e.apply(this, arguments);
            c = x.extend({}, c);
            var d, p, f, m = x(c.of),
                g = x.position.getWithinInfo(c.within),
                v = x.position.getScrollInfo(g),
                t = m[0],
                b = (c.collision || "flip").split(" "),
                y = {},
                _ = 9 === t.nodeType ? (p = m.width(), f = m.height(), {
                    top: 0,
                    left: 0
                }) : x.isWindow(t) ? (p = m.width(), f = m.height(), {
                    top: m.scrollTop(),
                    left: m.scrollLeft()
                }) : t.preventDefault ? (c.at = "left top", p = f = 0, {
                    top: t.pageY,
                    left: t.pageX
                }) : (p = m.outerWidth(), f = m.outerHeight(), m.offset()),
                w = x.extend({}, _);
            return x.each(["my", "at"], function() {
                var t, e, i = (c[this] || "").split(" ");
                1 === i.length && (i = a.test(i[0]) ? i.concat(["center"]) : r.test(i[0]) ? ["center"].concat(i) : ["center", "center"]), i[0] = a.test(i[0]) ? i[0] : "center", i[1] = r.test(i[1]) ? i[1] : "center", t = l.exec(i[0]), e = l.exec(i[1]), y[this] = [t ? t[0] : 0, e ? e[0] : 0], c[this] = [u.exec(i[0])[0], u.exec(i[1])[0]]
            }), 1 === b.length && (b[1] = b[0]), "right" === c.at[0] ? w.left += p : "center" === c.at[0] && (w.left += p / 2), "bottom" === c.at[1] ? w.top += f : "center" === c.at[1] && (w.top += f / 2), d = C(y.at, p, f), w.left += d[0], w.top += d[1], this.each(function() {
                var i, t, a = x(this),
                    r = a.outerWidth(),
                    l = a.outerHeight(),
                    e = k(this, "marginLeft"),
                    s = k(this, "marginTop"),
                    n = r + e + k(this, "marginRight") + v.width,
                    o = l + s + k(this, "marginBottom") + v.height,
                    u = x.extend({}, w),
                    h = C(y.my, a.outerWidth(), a.outerHeight());
                "right" === c.my[0] ? u.left -= r : "center" === c.my[0] && (u.left -= r / 2), "bottom" === c.my[1] ? u.top -= l : "center" === c.my[1] && (u.top -= l / 2), u.left += h[0], u.top += h[1], x.support.offsetFractions || (u.left = E(u.left), u.top = E(u.top)), i = {
                    marginLeft: e,
                    marginTop: s
                }, x.each(["left", "top"], function(t, e) {
                    x.ui.position[b[t]] && x.ui.position[b[t]][e](u, {
                        targetWidth: p,
                        targetHeight: f,
                        elemWidth: r,
                        elemHeight: l,
                        collisionPosition: i,
                        collisionWidth: n,
                        collisionHeight: o,
                        offset: [d[0] + h[0], d[1] + h[1]],
                        my: c.my,
                        at: c.at,
                        within: g,
                        elem: a
                    })
                }), x.fn.bgiframe && a.bgiframe(), c.using && (t = function(t) {
                    var e = _.left - u.left,
                        i = e + p - r,
                        s = _.top - u.top,
                        n = s + f - l,
                        o = {
                            target: {
                                element: m,
                                left: _.left,
                                top: _.top,
                                width: p,
                                height: f
                            },
                            element: {
                                element: a,
                                left: u.left,
                                top: u.top,
                                width: r,
                                height: l
                            },
                            horizontal: i < 0 ? "left" : 0 < e ? "right" : "center",
                            vertical: n < 0 ? "top" : 0 < s ? "bottom" : "middle"
                        };
                    p < r && T(e + i) < p && (o.horizontal = "center"), f < l && T(s + n) < f && (o.vertical = "middle"), P(T(e), T(i)) > P(T(s), T(n)) ? o.important = "horizontal" : o.important = "vertical", c.using.call(this, t, o)
                }), a.offset(x.extend(u, {
                    using: t
                }))
            })
        }, x.ui.position = {
            fit: {
                left: function(t, e) {
                    var i = e.within,
                        s = i.isWindow ? i.scrollLeft : i.offset.left,
                        n = i.width,
                        o = t.left - e.collisionPosition.marginLeft,
                        a = s - o,
                        r = o + e.collisionWidth - n - s;
                    e.collisionWidth > n ? 0 < a && r <= 0 ? (i = t.left + a + e.collisionWidth - n - s, t.left += a - i) : t.left = !(0 < r && a <= 0) && r < a ? s + n - e.collisionWidth : s : 0 < a ? t.left += a : 0 < r ? t.left -= r : t.left = P(t.left - o, t.left)
                },
                top: function(t, e) {
                    var i = e.within,
                        s = i.isWindow ? i.scrollTop : i.offset.top,
                        n = e.within.height,
                        o = t.top - e.collisionPosition.marginTop,
                        a = s - o,
                        r = o + e.collisionHeight - n - s;
                    e.collisionHeight > n ? 0 < a && r <= 0 ? (i = t.top + a + e.collisionHeight - n - s, t.top += a - i) : t.top = !(0 < r && a <= 0) && r < a ? s + n - e.collisionHeight : s : 0 < a ? t.top += a : 0 < r ? t.top -= r : t.top = P(t.top - o, t.top)
                }
            },
            flip: {
                left: function(t, e) {
                    var i = e.within,
                        s = i.offset.left + i.scrollLeft,
                        n = i.width,
                        o = i.isWindow ? i.scrollLeft : i.offset.left,
                        a = t.left - e.collisionPosition.marginLeft,
                        r = a - o,
                        l = a + e.collisionWidth - n - o,
                        u = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0,
                        i = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0,
                        a = -2 * e.offset[0];
                    r < 0 ? ((s = t.left + u + i + a + e.collisionWidth - n - s) < 0 || s < T(r)) && (t.left += u + i + a) : 0 < l && (0 < (o = t.left - e.collisionPosition.marginLeft + u + i + a - o) || T(o) < l) && (t.left += u + i + a)
                },
                top: function(t, e) {
                    var i = e.within,
                        s = i.offset.top + i.scrollTop,
                        n = i.height,
                        o = i.isWindow ? i.scrollTop : i.offset.top,
                        a = t.top - e.collisionPosition.marginTop,
                        r = a - o,
                        l = a + e.collisionHeight - n - o,
                        u = "top" === e.my[1] ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0,
                        i = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0,
                        a = -2 * e.offset[1];
                    r < 0 ? (s = t.top + u + i + a + e.collisionHeight - n - s, t.top + u + i + a > r && (s < 0 || s < T(r)) && (t.top += u + i + a)) : 0 < l && (o = t.top - e.collisionPosition.marginTop + u + i + a - o, t.top + u + i + a > l && (0 < o || T(o) < l) && (t.top += u + i + a))
                }
            },
            flipfit: {
                left: function() {
                    x.ui.position.flip.left.apply(this, arguments), x.ui.position.fit.left.apply(this, arguments)
                },
                top: function() {
                    x.ui.position.flip.top.apply(this, arguments), x.ui.position.fit.top.apply(this, arguments)
                }
            }
        },
        function() {
            var t, e = document.getElementsByTagName("body")[0],
                i = document.createElement("div"),
                s = document.createElement(e ? "div" : "body"),
                n = {
                    visibility: "hidden",
                    width: 0,
                    height: 0,
                    border: 0,
                    margin: 0,
                    background: "none"
                };
            for (t in e && x.extend(n, {
                    position: "absolute",
                    left: "-1000px",
                    top: "-1000px"
                }), n) s.style[t] = n[t];
            s.appendChild(i), (e = e || document.documentElement).insertBefore(s, e.firstChild), i.style.cssText = "position: absolute; left: 10.7432222px;", i = x(i).offset().left, x.support.offsetFractions = 10 < i && i < 11, s.innerHTML = "", e.removeChild(s)
        }(), !1 !== x.uiBackCompat && (n = jQuery, o = n.fn.position, n.fn.position = function(t) {
            if (!t || !t.offset) return o.call(this, t);
            var e = t.offset.split(" "),
                i = t.at.split(" ");
            return 1 === e.length && (e[1] = e[0]), /^\d/.test(e[0]) && (e[0] = "+" + e[0]), /^\d/.test(e[1]) && (e[1] = "+" + e[1]), 1 === i.length && (/left|center|right/.test(i[0]) ? i[1] = "center" : (i[1] = i[0], i[0] = "center")), o.call(this, n.extend(t, {
                at: i[0] + e[0] + " " + i[1] + e[1],
                offset: void 0
            }))
        })
}(jQuery),
function(y) {
    y.widget("ui.draggable", y.ui.mouse, {
        version: "1.9.2",
        widgetEventPrefix: "drag",
        options: {
            addClasses: !0,
            appendTo: "parent",
            axis: !1,
            connectToSortable: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            iframeFix: !1,
            opacity: !1,
            refreshPositions: !1,
            revert: !1,
            revertDuration: 500,
            scope: "default",
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            snap: !1,
            snapMode: "both",
            snapTolerance: 20,
            stack: !1,
            zIndex: !1
        },
        _create: function() {
            "original" != this.options.helper || /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative"), this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), this._mouseInit()
        },
        _destroy: function() {
            this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._mouseDestroy()
        },
        _mouseCapture: function(t) {
            var e = this.options;
            return !(this.helper || e.disabled || y(t.target).is(".ui-resizable-handle")) && (this.handle = this._getHandle(t), !!this.handle && (y(!0 === e.iframeFix ? "iframe" : e.iframeFix).each(function() {
                y('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({
                    width: this.offsetWidth + "px",
                    height: this.offsetHeight + "px",
                    position: "absolute",
                    opacity: "0.001",
                    zIndex: 1e3
                }).css(y(this).offset()).appendTo("body")
            }), !0))
        },
        _mouseStart: function(t) {
            var e = this.options;
            return this.helper = this._createHelper(t), this.helper.addClass("ui-draggable-dragging"), this._cacheHelperProportions(), y.ui.ddmanager && (y.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(), this.offset = this.positionAbs = this.element.offset(), this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            }, y.extend(this.offset, {
                click: {
                    left: t.pageX - this.offset.left,
                    top: t.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }), this.originalPosition = this.position = this._generatePosition(t), this.originalPageX = t.pageX, this.originalPageY = t.pageY, e.cursorAt && this._adjustOffsetFromHelper(e.cursorAt), e.containment && this._setContainment(), !1 === this._trigger("start", t) ? (this._clear(), !1) : (this._cacheHelperProportions(), y.ui.ddmanager && !e.dropBehaviour && y.ui.ddmanager.prepareOffsets(this, t), this._mouseDrag(t, !0), y.ui.ddmanager && y.ui.ddmanager.dragStart(this, t), !0)
        },
        _mouseDrag: function(t, e) {
            if (this.position = this._generatePosition(t), this.positionAbs = this._convertPositionTo("absolute"), !e) {
                e = this._uiHash();
                if (!1 === this._trigger("drag", t, e)) return this._mouseUp({}), !1;
                this.position = e.position
            }
            return this.options.axis && "y" == this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" == this.options.axis || (this.helper[0].style.top = this.position.top + "px"), y.ui.ddmanager && y.ui.ddmanager.drag(this, t), !1
        },
        _mouseStop: function(t) {
            var e = !1;
            y.ui.ddmanager && !this.options.dropBehaviour && (e = y.ui.ddmanager.drop(this, t)), this.dropped && (e = this.dropped, this.dropped = !1);
            for (var i, s = this.element[0], n = !1; s = s && s.parentNode;) s == document && (n = !0);
            return (n || "original" !== this.options.helper) && ("invalid" == this.options.revert && !e || "valid" == this.options.revert && e || !0 === this.options.revert || y.isFunction(this.options.revert) && this.options.revert.call(this.element, e) ? y((i = this).helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
                !1 !== i._trigger("stop", t) && i._clear()
            }) : !1 !== this._trigger("stop", t) && this._clear()), !1
        },
        _mouseUp: function(t) {
            return y("div.ui-draggable-iframeFix").each(function() {
                this.parentNode.removeChild(this)
            }), y.ui.ddmanager && y.ui.ddmanager.dragStop(this, t), y.ui.mouse.prototype._mouseUp.call(this, t)
        },
        cancel: function() {
            return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this
        },
        _getHandle: function(t) {
            var e = !this.options.handle || !y(this.options.handle, this.element).length;
            return y(this.options.handle, this.element).find("*").andSelf().each(function() {
                this == t.target && (e = !0)
            }), e
        },
        _createHelper: function(t) {
            var e = this.options,
                t = y.isFunction(e.helper) ? y(e.helper.apply(this.element[0], [t])) : "clone" == e.helper ? this.element.clone().removeAttr("id") : this.element;
            return t.parents("body").length || t.appendTo("parent" == e.appendTo ? this.element[0].parentNode : e.appendTo), t[0] == this.element[0] || /(fixed|absolute)/.test(t.css("position")) || t.css("position", "absolute"), t
        },
        _adjustOffsetFromHelper: function(t) {
            "string" == typeof t && (t = t.split(" ")), y.isArray(t) && (t = {
                left: +t[0],
                top: +t[1] || 0
            }), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
        },
        _getParentOffset: function() {
            this.offsetParent = this.helper.offsetParent();
            var t = this.offsetParent.offset();
            return "absolute" == this.cssPosition && this.scrollParent[0] != document && y.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()), (this.offsetParent[0] == document.body || this.offsetParent[0].tagName && "html" == this.offsetParent[0].tagName.toLowerCase() && y.ui.ie) && (t = {
                top: 0,
                left: 0
            }), {
                top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if ("relative" != this.cssPosition) return {
                top: 0,
                left: 0
            };
            var t = this.element.position();
            return {
                top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.element.css("marginLeft"), 10) || 0,
                top: parseInt(this.element.css("marginTop"), 10) || 0,
                right: parseInt(this.element.css("marginRight"), 10) || 0,
                bottom: parseInt(this.element.css("marginBottom"), 10) || 0
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var t, e, i = this.options;
            "parent" == i.containment && (i.containment = this.helper[0].parentNode), "document" != i.containment && "window" != i.containment || (this.containment = ["document" == i.containment ? 0 : y(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, "document" == i.containment ? 0 : y(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, ("document" == i.containment ? 0 : y(window).scrollLeft()) + y("document" == i.containment ? document : window).width() - this.helperProportions.width - this.margins.left, ("document" == i.containment ? 0 : y(window).scrollTop()) + (y("document" == i.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(i.containment) || i.containment.constructor == Array ? i.containment.constructor == Array && (this.containment = i.containment) : (e = (t = y(i.containment))[0]) && (t.offset(), i = "hidden" != y(e).css("overflow"), this.containment = [(parseInt(y(e).css("borderLeftWidth"), 10) || 0) + (parseInt(y(e).css("paddingLeft"), 10) || 0), (parseInt(y(e).css("borderTopWidth"), 10) || 0) + (parseInt(y(e).css("paddingTop"), 10) || 0), (i ? Math.max(e.scrollWidth, e.offsetWidth) : e.offsetWidth) - (parseInt(y(e).css("borderLeftWidth"), 10) || 0) - (parseInt(y(e).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (i ? Math.max(e.scrollHeight, e.offsetHeight) : e.offsetHeight) - (parseInt(y(e).css("borderTopWidth"), 10) || 0) - (parseInt(y(e).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relative_container = t)
        },
        _convertPositionTo: function(t, e) {
            e = e || this.position;
            var i = "absolute" == t ? 1 : -1,
                s = (this.options, "absolute" != this.cssPosition || this.scrollParent[0] != document && y.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent),
                t = /(html|body)/i.test(s[0].tagName);
            return {
                top: e.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" == this.cssPosition ? -this.scrollParent.scrollTop() : t ? 0 : s.scrollTop()) * i,
                left: e.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" == this.cssPosition ? -this.scrollParent.scrollLeft() : t ? 0 : s.scrollLeft()) * i
            }
        },
        _generatePosition: function(t) {
            var e, i = this.options,
                s = "absolute" != this.cssPosition || this.scrollParent[0] != document && y.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                n = /(html|body)/i.test(s[0].tagName),
                o = t.pageX,
                a = t.pageY;
            return this.originalPosition && (this.containment && (e = this.relative_container ? (e = this.relative_container.offset(), [this.containment[0] + e.left, this.containment[1] + e.top, this.containment[2] + e.left, this.containment[3] + e.top]) : this.containment, t.pageX - this.offset.click.left < e[0] && (o = e[0] + this.offset.click.left), t.pageY - this.offset.click.top < e[1] && (a = e[1] + this.offset.click.top), t.pageX - this.offset.click.left > e[2] && (o = e[2] + this.offset.click.left), t.pageY - this.offset.click.top > e[3] && (a = e[3] + this.offset.click.top)), i.grid && (t = i.grid[1] ? this.originalPageY + Math.round((a - this.originalPageY) / i.grid[1]) * i.grid[1] : this.originalPageY, a = e && (t - this.offset.click.top < e[1] || t - this.offset.click.top > e[3]) ? t - this.offset.click.top < e[1] ? t + i.grid[1] : t - i.grid[1] : t, t = i.grid[0] ? this.originalPageX + Math.round((o - this.originalPageX) / i.grid[0]) * i.grid[0] : this.originalPageX, o = e && (t - this.offset.click.left < e[0] || t - this.offset.click.left > e[2]) ? t - this.offset.click.left < e[0] ? t + i.grid[0] : t - i.grid[0] : t)), {
                top: a - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" == this.cssPosition ? -this.scrollParent.scrollTop() : n ? 0 : s.scrollTop()),
                left: o - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" == this.cssPosition ? -this.scrollParent.scrollLeft() : n ? 0 : s.scrollLeft())
            }
        },
        _clear: function() {
            this.helper.removeClass("ui-draggable-dragging"), this.helper[0] == this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1
        },
        _trigger: function(t, e, i) {
            return i = i || this._uiHash(), y.ui.plugin.call(this, t, [e, i]), "drag" == t && (this.positionAbs = this._convertPositionTo("absolute")), y.Widget.prototype._trigger.call(this, t, e, i)
        },
        plugins: {},
        _uiHash: function(t) {
            return {
                helper: this.helper,
                position: this.position,
                originalPosition: this.originalPosition,
                offset: this.positionAbs
            }
        }
    }), y.ui.plugin.add("draggable", "connectToSortable", {
        start: function(e, t) {
            var i = y(this).data("draggable"),
                s = i.options,
                n = y.extend({}, t, {
                    item: i.element
                });
            i.sortables = [], y(s.connectToSortable).each(function() {
                var t = y.data(this, "sortable");
                t && !t.options.disabled && (i.sortables.push({
                    instance: t,
                    shouldRevert: t.options.revert
                }), t.refreshPositions(), t._trigger("activate", e, n))
            })
        },
        stop: function(t, e) {
            var i = y(this).data("draggable"),
                s = y.extend({}, e, {
                    item: i.element
                });
            y.each(i.sortables, function() {
                this.instance.isOver ? (this.instance.isOver = 0, i.cancelHelperRemoval = !0, this.instance.cancelHelperRemoval = !1, this.shouldRevert && (this.instance.options.revert = !0), this.instance._mouseStop(t), this.instance.options.helper = this.instance.options._helper, "original" == i.options.helper && this.instance.currentItem.css({
                    top: "auto",
                    left: "auto"
                })) : (this.instance.cancelHelperRemoval = !1, this.instance._trigger("deactivate", t, s))
            })
        },
        drag: function(s, n) {
            var o = y(this).data("draggable"),
                a = this;
            y.each(o.sortables, function(t) {
                var e = !1,
                    i = this;
                this.instance.positionAbs = o.positionAbs, this.instance.helperProportions = o.helperProportions, this.instance.offset.click = o.offset.click, this.instance._intersectsWith(this.instance.containerCache) && (e = !0, y.each(o.sortables, function() {
                    return this.instance.positionAbs = o.positionAbs, this.instance.helperProportions = o.helperProportions, this.instance.offset.click = o.offset.click, this != i && this.instance._intersectsWith(this.instance.containerCache) && y.ui.contains(i.instance.element[0], this.instance.element[0]) && (e = !1), e
                })), e ? (this.instance.isOver || (this.instance.isOver = 1, this.instance.currentItem = y(a).clone().removeAttr("id").appendTo(this.instance.element).data("sortable-item", !0), this.instance.options._helper = this.instance.options.helper, this.instance.options.helper = function() {
                    return n.helper[0]
                }, s.target = this.instance.currentItem[0], this.instance._mouseCapture(s, !0), this.instance._mouseStart(s, !0, !0), this.instance.offset.click.top = o.offset.click.top, this.instance.offset.click.left = o.offset.click.left, this.instance.offset.parent.left -= o.offset.parent.left - this.instance.offset.parent.left, this.instance.offset.parent.top -= o.offset.parent.top - this.instance.offset.parent.top, o._trigger("toSortable", s), o.dropped = this.instance.element, o.currentItem = o.element, this.instance.fromOutside = o), this.instance.currentItem && this.instance._mouseDrag(s)) : this.instance.isOver && (this.instance.isOver = 0, this.instance.cancelHelperRemoval = !0, this.instance.options.revert = !1, this.instance._trigger("out", s, this.instance._uiHash(this.instance)), this.instance._mouseStop(s, !0), this.instance.options.helper = this.instance.options._helper, this.instance.currentItem.remove(), this.instance.placeholder && this.instance.placeholder.remove(), o._trigger("fromSortable", s), o.dropped = !1)
            })
        }
    }), y.ui.plugin.add("draggable", "cursor", {
        start: function(t, e) {
            var i = y("body"),
                s = y(this).data("draggable").options;
            i.css("cursor") && (s._cursor = i.css("cursor")), i.css("cursor", s.cursor)
        },
        stop: function(t, e) {
            var i = y(this).data("draggable").options;
            i._cursor && y("body").css("cursor", i._cursor)
        }
    }), y.ui.plugin.add("draggable", "opacity", {
        start: function(t, e) {
            var i = y(e.helper),
                e = y(this).data("draggable").options;
            i.css("opacity") && (e._opacity = i.css("opacity")), i.css("opacity", e.opacity)
        },
        stop: function(t, e) {
            var i = y(this).data("draggable").options;
            i._opacity && y(e.helper).css("opacity", i._opacity)
        }
    }), y.ui.plugin.add("draggable", "scroll", {
        start: function(t, e) {
            var i = y(this).data("draggable");
            i.scrollParent[0] != document && "HTML" != i.scrollParent[0].tagName && (i.overflowOffset = i.scrollParent.offset())
        },
        drag: function(t, e) {
            var i = y(this).data("draggable"),
                s = i.options,
                n = !1;
            i.scrollParent[0] != document && "HTML" != i.scrollParent[0].tagName ? (s.axis && "x" == s.axis || (i.overflowOffset.top + i.scrollParent[0].offsetHeight - t.pageY < s.scrollSensitivity ? i.scrollParent[0].scrollTop = n = i.scrollParent[0].scrollTop + s.scrollSpeed : t.pageY - i.overflowOffset.top < s.scrollSensitivity && (i.scrollParent[0].scrollTop = n = i.scrollParent[0].scrollTop - s.scrollSpeed)), s.axis && "y" == s.axis || (i.overflowOffset.left + i.scrollParent[0].offsetWidth - t.pageX < s.scrollSensitivity ? i.scrollParent[0].scrollLeft = n = i.scrollParent[0].scrollLeft + s.scrollSpeed : t.pageX - i.overflowOffset.left < s.scrollSensitivity && (i.scrollParent[0].scrollLeft = n = i.scrollParent[0].scrollLeft - s.scrollSpeed))) : (s.axis && "x" == s.axis || (t.pageY - y(document).scrollTop() < s.scrollSensitivity ? n = y(document).scrollTop(y(document).scrollTop() - s.scrollSpeed) : y(window).height() - (t.pageY - y(document).scrollTop()) < s.scrollSensitivity && (n = y(document).scrollTop(y(document).scrollTop() + s.scrollSpeed))), s.axis && "y" == s.axis || (t.pageX - y(document).scrollLeft() < s.scrollSensitivity ? n = y(document).scrollLeft(y(document).scrollLeft() - s.scrollSpeed) : y(window).width() - (t.pageX - y(document).scrollLeft()) < s.scrollSensitivity && (n = y(document).scrollLeft(y(document).scrollLeft() + s.scrollSpeed)))), !1 !== n && y.ui.ddmanager && !s.dropBehaviour && y.ui.ddmanager.prepareOffsets(i, t)
        }
    }), y.ui.plugin.add("draggable", "snap", {
        start: function(t, e) {
            var i = y(this).data("draggable"),
                s = i.options;
            i.snapElements = [], y(s.snap.constructor != String ? s.snap.items || ":data(draggable)" : s.snap).each(function() {
                var t = y(this),
                    e = t.offset();
                this != i.element[0] && i.snapElements.push({
                    item: this,
                    width: t.outerWidth(),
                    height: t.outerHeight(),
                    top: e.top,
                    left: e.left
                })
            })
        },
        drag: function(t, e) {
            for (var i = y(this).data("draggable"), s = i.options, n = s.snapTolerance, o = e.offset.left, a = o + i.helperProportions.width, r = e.offset.top, l = r + i.helperProportions.height, u = i.snapElements.length - 1; 0 <= u; u--) {
                var h, c, d, p, f, m = i.snapElements[u].left,
                    g = m + i.snapElements[u].width,
                    v = i.snapElements[u].top,
                    b = v + i.snapElements[u].height;
                m - n < o && o < g + n && v - n < r && r < b + n || m - n < o && o < g + n && v - n < l && l < b + n || m - n < a && a < g + n && v - n < r && r < b + n || m - n < a && a < g + n && v - n < l && l < b + n ? ("inner" != s.snapMode && (c = Math.abs(v - l) <= n, d = Math.abs(b - r) <= n, p = Math.abs(m - a) <= n, f = Math.abs(g - o) <= n, c && (e.position.top = i._convertPositionTo("relative", {
                    top: v - i.helperProportions.height,
                    left: 0
                }).top - i.margins.top), d && (e.position.top = i._convertPositionTo("relative", {
                    top: b,
                    left: 0
                }).top - i.margins.top), p && (e.position.left = i._convertPositionTo("relative", {
                    top: 0,
                    left: m - i.helperProportions.width
                }).left - i.margins.left), f && (e.position.left = i._convertPositionTo("relative", {
                    top: 0,
                    left: g
                }).left - i.margins.left)), h = c || d || p || f, "outer" != s.snapMode && (c = Math.abs(v - r) <= n, d = Math.abs(b - l) <= n, p = Math.abs(m - o) <= n, f = Math.abs(g - a) <= n, c && (e.position.top = i._convertPositionTo("relative", {
                    top: v,
                    left: 0
                }).top - i.margins.top), d && (e.position.top = i._convertPositionTo("relative", {
                    top: b - i.helperProportions.height,
                    left: 0
                }).top - i.margins.top), p && (e.position.left = i._convertPositionTo("relative", {
                    top: 0,
                    left: m
                }).left - i.margins.left), f && (e.position.left = i._convertPositionTo("relative", {
                    top: 0,
                    left: g - i.helperProportions.width
                }).left - i.margins.left)), !i.snapElements[u].snapping && (c || d || p || f || h) && i.options.snap.snap && i.options.snap.snap.call(i.element, t, y.extend(i._uiHash(), {
                    snapItem: i.snapElements[u].item
                })), i.snapElements[u].snapping = c || d || p || f || h) : (i.snapElements[u].snapping && i.options.snap.release && i.options.snap.release.call(i.element, t, y.extend(i._uiHash(), {
                    snapItem: i.snapElements[u].item
                })), i.snapElements[u].snapping = !1)
            }
        }
    }), y.ui.plugin.add("draggable", "stack", {
        start: function(t, e) {
            var i, s = y(this).data("draggable").options,
                s = y.makeArray(y(s.stack)).sort(function(t, e) {
                    return (parseInt(y(t).css("zIndex"), 10) || 0) - (parseInt(y(e).css("zIndex"), 10) || 0)
                });
            s.length && (i = parseInt(s[0].style.zIndex) || 0, y(s).each(function(t) {
                this.style.zIndex = i + t
            }), this[0].style.zIndex = i + s.length)
        }
    }), y.ui.plugin.add("draggable", "zIndex", {
        start: function(t, e) {
            var i = y(e.helper),
                e = y(this).data("draggable").options;
            i.css("zIndex") && (e._zIndex = i.css("zIndex")), i.css("zIndex", e.zIndex)
        },
        stop: function(t, e) {
            var i = y(this).data("draggable").options;
            i._zIndex && y(e.helper).css("zIndex", i._zIndex)
        }
    })
}(jQuery),
function(o) {
    function a() {
        var t = o(this).find(":ui-button");
        setTimeout(function() {
            t.button("refresh")
        }, 1)
    }

    function r(t) {
        var e = t.name,
            i = t.form,
            s = o([]);
        return e && (s = i ? o(i).find("[name='" + e + "']") : o("[name='" + e + "']", t.ownerDocument).filter(function() {
            return !this.form
        })), s
    }
    var l, u, h, c, d = "ui-button ui-widget ui-state-default ui-corner-all",
        p = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only";
    o.widget("ui.button", {
        version: "1.9.2",
        defaultElement: "<button>",
        options: {
            disabled: null,
            text: !0,
            label: null,
            icons: {
                primary: null,
                secondary: null
            }
        },
        _create: function() {
            this.element.closest("form").unbind("reset" + this.eventNamespace).bind("reset" + this.eventNamespace, a), "boolean" != typeof this.options.disabled ? this.options.disabled = !!this.element.prop("disabled") : this.element.prop("disabled", this.options.disabled), this._determineButtonType(), this.hasTitle = !!this.buttonElement.attr("title");
            var e = this,
                i = this.options,
                t = "checkbox" === this.type || "radio" === this.type,
                s = t ? "" : "ui-state-active",
                n = "ui-state-focus";
            null === i.label && (i.label = "input" === this.type ? this.buttonElement.val() : this.buttonElement.html()), this._hoverable(this.buttonElement), this.buttonElement.addClass(d).attr("role", "button").bind("mouseenter" + this.eventNamespace, function() {
                i.disabled || this === l && o(this).addClass("ui-state-active")
            }).bind("mouseleave" + this.eventNamespace, function() {
                i.disabled || o(this).removeClass(s)
            }).bind("click" + this.eventNamespace, function(t) {
                i.disabled && (t.preventDefault(), t.stopImmediatePropagation())
            }), this.element.bind("focus" + this.eventNamespace, function() {
                e.buttonElement.addClass(n)
            }).bind("blur" + this.eventNamespace, function() {
                e.buttonElement.removeClass(n)
            }), t && (this.element.bind("change" + this.eventNamespace, function() {
                c || e.refresh()
            }), this.buttonElement.bind("mousedown" + this.eventNamespace, function(t) {
                i.disabled || (c = !1, u = t.pageX, h = t.pageY)
            }).bind("mouseup" + this.eventNamespace, function(t) {
                i.disabled || u === t.pageX && h === t.pageY || (c = !0)
            })), "checkbox" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function() {
                return !i.disabled && !c && (o(this).toggleClass("ui-state-active"), void e.buttonElement.attr("aria-pressed", e.element[0].checked))
            }) : "radio" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function() {
                if (i.disabled || c) return !1;
                o(this).addClass("ui-state-active"), e.buttonElement.attr("aria-pressed", "true");
                var t = e.element[0];
                r(t).not(t).map(function() {
                    return o(this).button("widget")[0]
                }).removeClass("ui-state-active").attr("aria-pressed", "false")
            }) : (this.buttonElement.bind("mousedown" + this.eventNamespace, function() {
                return !i.disabled && (o(this).addClass("ui-state-active"), l = this, void e.document.one("mouseup", function() {
                    l = null
                }))
            }).bind("mouseup" + this.eventNamespace, function() {
                return !i.disabled && void o(this).removeClass("ui-state-active")
            }).bind("keydown" + this.eventNamespace, function(t) {
                return !i.disabled && void(t.keyCode !== o.ui.keyCode.SPACE && t.keyCode !== o.ui.keyCode.ENTER || o(this).addClass("ui-state-active"))
            }).bind("keyup" + this.eventNamespace, function() {
                o(this).removeClass("ui-state-active")
            }), this.buttonElement.is("a") && this.buttonElement.keyup(function(t) {
                t.keyCode === o.ui.keyCode.SPACE && o(this).click()
            })), this._setOption("disabled", i.disabled), this._resetButton()
        },
        _determineButtonType: function() {
            var t, e;
            this.element.is("[type=checkbox]") ? this.type = "checkbox" : this.element.is("[type=radio]") ? this.type = "radio" : this.element.is("input") ? this.type = "input" : this.type = "button", "checkbox" === this.type || "radio" === this.type ? (t = this.element.parents().last(), e = "label[for='" + this.element.attr("id") + "']", this.buttonElement = t.find(e), this.buttonElement.length || (t = (t.length ? t : this.element).siblings(), this.buttonElement = t.filter(e), this.buttonElement.length || (this.buttonElement = t.find(e))), this.element.addClass("ui-helper-hidden-accessible"), (e = this.element.is(":checked")) && this.buttonElement.addClass("ui-state-active"), this.buttonElement.prop("aria-pressed", e)) : this.buttonElement = this.element
        },
        widget: function() {
            return this.buttonElement
        },
        _destroy: function() {
            this.element.removeClass("ui-helper-hidden-accessible"), this.buttonElement.removeClass(d + " ui-state-hover ui-state-active  " + p).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()), this.hasTitle || this.buttonElement.removeAttr("title")
        },
        _setOption: function(t, e) {
            this._super(t, e), "disabled" !== t ? this._resetButton() : e ? this.element.prop("disabled", !0) : this.element.prop("disabled", !1)
        },
        refresh: function() {
            var t = this.element.is("input, button") ? this.element.is(":disabled") : this.element.hasClass("ui-button-disabled");
            t !== this.options.disabled && this._setOption("disabled", t), "radio" === this.type ? r(this.element[0]).each(function() {
                o(this).is(":checked") ? o(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true") : o(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false")
            }) : "checkbox" === this.type && (this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true") : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false"))
        },
        _resetButton: function() {
            var t, e, i, s, n;
            "input" !== this.type ? (t = this.buttonElement.removeClass(p), e = o("<span></span>", this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(t.empty()).text(), s = (i = this.options.icons).primary && i.secondary, n = [], i.primary || i.secondary ? (this.options.text && n.push("ui-button-text-icon" + (s ? "s" : i.primary ? "-primary" : "-secondary")), i.primary && t.prepend("<span class='ui-button-icon-primary ui-icon " + i.primary + "'></span>"), i.secondary && t.append("<span class='ui-button-icon-secondary ui-icon " + i.secondary + "'></span>"), this.options.text || (n.push(s ? "ui-button-icons-only" : "ui-button-icon-only"), this.hasTitle || t.attr("title", o.trim(e)))) : n.push("ui-button-text-only"), t.addClass(n.join(" "))) : this.options.label && this.element.val(this.options.label)
        }
    }), o.widget("ui.buttonset", {
        version: "1.9.2",
        options: {
            items: "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(button)"
        },
        _create: function() {
            this.element.addClass("ui-buttonset")
        },
        _init: function() {
            this.refresh()
        },
        _setOption: function(t, e) {
            "disabled" === t && this.buttons.button("option", t, e), this._super(t, e)
        },
        refresh: function() {
            var t = "rtl" === this.element.css("direction");
            this.buttons = this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function() {
                return o(this).button("widget")[0]
            }).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(t ? "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(t ? "ui-corner-left" : "ui-corner-right").end().end()
        },
        _destroy: function() {
            this.element.removeClass("ui-buttonset"), this.buttons.map(function() {
                return o(this).button("widget")[0]
            }).removeClass("ui-corner-left ui-corner-right").end().button("destroy")
        }
    })
}(jQuery),
function(r) {
    var l = "ui-dialog ui-widget ui-widget-content ui-corner-all ",
        o = {
            buttons: !0,
            height: !0,
            maxHeight: !0,
            maxWidth: !0,
            minHeight: !0,
            minWidth: !0,
            width: !0
        },
        a = {
            maxHeight: !0,
            maxWidth: !0,
            minHeight: !0,
            minWidth: !0
        };
    r.widget("ui.dialog", {
        version: "1.9.2",
        options: {
            autoOpen: !0,
            buttons: {},
            closeOnEscape: !0,
            closeText: "close",
            dialogClass: "",
            draggable: !0,
            hide: null,
            height: "auto",
            maxHeight: !1,
            maxWidth: !1,
            minHeight: 150,
            minWidth: 150,
            modal: !1,
            position: {
                my: "center",
                at: "center",
                of: window,
                collision: "fit",
                using: function(t) {
                    var e = r(this).css(t).offset().top;
                    e < 0 && r(this).css("top", t.top - e)
                }
            },
            resizable: !0,
            show: null,
            stack: !0,
            title: "",
            width: 300,
            zIndex: 1e3
        },
        _create: function() {
            this.originalTitle = this.element.attr("title"), "string" != typeof this.originalTitle && (this.originalTitle = ""), this.oldPosition = {
                parent: this.element.parent(),
                index: this.element.parent().children().index(this.element)
            }, this.options.title = this.options.title || this.originalTitle;
            var t, e, i, s = this,
                n = this.options,
                o = n.title || "&#160;",
                a = (this.uiDialog = r("<div>")).addClass(l + n.dialogClass).css({
                    display: "none",
                    outline: 0,
                    zIndex: n.zIndex
                }).attr("tabIndex", -1).keydown(function(t) {
                    n.closeOnEscape && !t.isDefaultPrevented() && t.keyCode && t.keyCode === r.ui.keyCode.ESCAPE && (s.close(t), t.preventDefault())
                }).mousedown(function(t) {
                    s.moveToTop(!1, t)
                }).appendTo("body");
            this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(a), t = (this.uiDialogTitlebar = r("<div>")).addClass("ui-dialog-titlebar  ui-widget-header  ui-corner-all  ui-helper-clearfix").bind("mousedown", function() {
                a.focus()
            }).prependTo(a), e = r("<a href='#'></a>").addClass("ui-dialog-titlebar-close  ui-corner-all").attr("role", "button").click(function(t) {
                t.preventDefault(), s.close(t)
            }).appendTo(t), (this.uiDialogTitlebarCloseText = r("<span>")).addClass("ui-icon ui-icon-closethick").text(n.closeText).appendTo(e), i = r("<span>").uniqueId().addClass("ui-dialog-title").html(o).prependTo(t), o = (this.uiDialogButtonPane = r("<div>")).addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"), (this.uiButtonSet = r("<div>")).addClass("ui-dialog-buttonset").appendTo(o), a.attr({
                role: "dialog",
                "aria-labelledby": i.attr("id")
            }), t.find("*").add(t).disableSelection(), this._hoverable(e), this._focusable(e), n.draggable && r.fn.draggable && this._makeDraggable(), n.resizable && r.fn.resizable && this._makeResizable(), this._createButtons(n.buttons), this._isOpen = !1, r.fn.bgiframe && a.bgiframe(), this._on(a, {
                keydown: function(t) {
                    if (n.modal && t.keyCode === r.ui.keyCode.TAB) {
                        var e = r(":tabbable", a),
                            i = e.filter(":first"),
                            e = e.filter(":last");
                        return t.target !== e[0] || t.shiftKey ? t.target === i[0] && t.shiftKey ? (e.focus(1), !1) : void 0 : (i.focus(1), !1)
                    }
                }
            })
        },
        _init: function() {
            this.options.autoOpen && this.open()
        },
        _destroy: function() {
            var t, e = this.oldPosition;
            this.overlay && this.overlay.destroy(), this.uiDialog.hide(), this.element.removeClass("ui-dialog-content ui-widget-content").hide().appendTo("body"), this.uiDialog.remove(), this.originalTitle && this.element.attr("title", this.originalTitle), (t = e.parent.children().eq(e.index)).length && t[0] !== this.element[0] ? t.before(this.element) : e.parent.append(this.element)
        },
        widget: function() {
            return this.uiDialog
        },
        close: function(t) {
            var e, i, s = this;
            if (this._isOpen && !1 !== this._trigger("beforeClose", t)) return this._isOpen = !1, this.overlay && this.overlay.destroy(), this.options.hide ? this._hide(this.uiDialog, this.options.hide, function() {
                s._trigger("close", t)
            }) : (this.uiDialog.hide(), this._trigger("close", t)), r.ui.dialog.overlay.resize(), this.options.modal && (e = 0, r(".ui-dialog").each(function() {
                this !== s.uiDialog[0] && (i = r(this).css("z-index"), isNaN(i) || (e = Math.max(e, i)))
            }), r.ui.dialog.maxZ = e), this
        },
        isOpen: function() {
            return this._isOpen
        },
        moveToTop: function(t, e) {
            var i = this.options;
            return i.modal && !t || !i.stack && !i.modal ? this._trigger("focus", e) : (i.zIndex > r.ui.dialog.maxZ && (r.ui.dialog.maxZ = i.zIndex), this.overlay && (r.ui.dialog.maxZ += 1, r.ui.dialog.overlay.maxZ = r.ui.dialog.maxZ, this.overlay.$el.css("z-index", r.ui.dialog.overlay.maxZ)), i = {
                scrollTop: this.element.scrollTop(),
                scrollLeft: this.element.scrollLeft()
            }, r.ui.dialog.maxZ += 1, this.uiDialog.css("z-index", r.ui.dialog.maxZ), this.element.attr(i), this._trigger("focus", e), this)
        },
        open: function() {
            if (!this._isOpen) {
                var t = this.options,
                    e = this.uiDialog;
                return this._size(), this._position(t.position), e.show(t.show), this.overlay = t.modal ? new r.ui.dialog.overlay(this) : null, this.moveToTop(!0), (t = this.element.find(":tabbable")).length || ((t = this.uiDialogButtonPane.find(":tabbable")).length || (t = e)), t.eq(0).focus(), this._isOpen = !0, this._trigger("open"), this
            }
        },
        _createButtons: function(t) {
            var s = this,
                e = !1;
            this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), "object" == typeof t && null !== t && r.each(t, function() {
                return !(e = !0)
            }), e ? (r.each(t, function(t, e) {
                var i;
                e = r.isFunction(e) ? {
                    click: e,
                    text: t
                } : e, e = r.extend({
                    type: "button"
                }, e), i = e.click, e.click = function() {
                    i.apply(s.element[0], arguments)
                }, e = r("<button></button>", e).appendTo(s.uiButtonSet), r.fn.button && e.button()
            }), this.uiDialog.addClass("ui-dialog-buttons"), this.uiDialogButtonPane.appendTo(this.uiDialog)) : this.uiDialog.removeClass("ui-dialog-buttons")
        },
        _makeDraggable: function() {
            function i(t) {
                return {
                    position: t.position,
                    offset: t.offset
                }
            }
            var s = this,
                n = this.options;
            this.uiDialog.draggable({
                cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                handle: ".ui-dialog-titlebar",
                containment: "document",
                start: function(t, e) {
                    r(this).addClass("ui-dialog-dragging"), s._trigger("dragStart", t, i(e))
                },
                drag: function(t, e) {
                    s._trigger("drag", t, i(e))
                },
                stop: function(t, e) {
                    n.position = [e.position.left - s.document.scrollLeft(), e.position.top - s.document.scrollTop()], r(this).removeClass("ui-dialog-dragging"), s._trigger("dragStop", t, i(e)), r.ui.dialog.overlay.resize()
                }
            })
        },
        _makeResizable: function(t) {
            function i(t) {
                return {
                    originalPosition: t.originalPosition,
                    originalSize: t.originalSize,
                    position: t.position,
                    size: t.size
                }
            }
            t = void 0 === t ? this.options.resizable : t;
            var s = this,
                n = this.options,
                e = this.uiDialog.css("position"),
                t = "string" == typeof t ? t : "n,e,s,w,se,sw,ne,nw";
            this.uiDialog.resizable({
                cancel: ".ui-dialog-content",
                containment: "document",
                alsoResize: this.element,
                maxWidth: n.maxWidth,
                maxHeight: n.maxHeight,
                minWidth: n.minWidth,
                minHeight: this._minHeight(),
                handles: t,
                start: function(t, e) {
                    r(this).addClass("ui-dialog-resizing"), s._trigger("resizeStart", t, i(e))
                },
                resize: function(t, e) {
                    s._trigger("resize", t, i(e))
                },
                stop: function(t, e) {
                    r(this).removeClass("ui-dialog-resizing"), n.height = r(this).height(), n.width = r(this).width(), s._trigger("resizeStop", t, i(e)), r.ui.dialog.overlay.resize()
                }
            }).css("position", e).find(".ui-resizable-se").addClass("ui-icon ui-icon-grip-diagonal-se")
        },
        _minHeight: function() {
            var t = this.options;
            return "auto" === t.height ? t.minHeight : Math.min(t.minHeight, t.height)
        },
        _position: function(t) {
            var e, i = [],
                s = [0, 0];
            t = t ? (("string" == typeof t || "object" == typeof t && "0" in t) && (1 === (i = t.split ? t.split(" ") : [t[0], t[1]]).length && (i[1] = i[0]), r.each(["left", "top"], function(t, e) {
                +i[t] === i[t] && (s[t] = i[t], i[t] = e)
            }), t = {
                my: i[0] + (s[0] < 0 ? s[0] : "+" + s[0]) + " " + i[1] + (s[1] < 0 ? s[1] : "+" + s[1]),
                at: i.join(" ")
            }), r.extend({}, r.ui.dialog.prototype.options.position, t)) : r.ui.dialog.prototype.options.position, (e = this.uiDialog.is(":visible")) || this.uiDialog.show(), this.uiDialog.position(t), e || this.uiDialog.hide()
        },
        _setOptions: function(t) {
            var i = this,
                s = {},
                n = !1;
            r.each(t, function(t, e) {
                i._setOption(t, e), t in o && (n = !0), t in a && (s[t] = e)
            }), n && this._size(), this.uiDialog.is(":data(resizable)") && this.uiDialog.resizable("option", s)
        },
        _setOption: function(t, e) {
            var i, s = this.uiDialog;
            switch (t) {
                case "buttons":
                    this._createButtons(e);
                    break;
                case "closeText":
                    this.uiDialogTitlebarCloseText.text("" + e);
                    break;
                case "dialogClass":
                    s.removeClass(this.options.dialogClass).addClass(l + e);
                    break;
                case "disabled":
                    e ? s.addClass("ui-dialog-disabled") : s.removeClass("ui-dialog-disabled");
                    break;
                case "draggable":
                    (i = s.is(":data(draggable)")) && !e && s.draggable("destroy"), !i && e && this._makeDraggable();
                    break;
                case "position":
                    this._position(e);
                    break;
                case "resizable":
                    (i = s.is(":data(resizable)")) && !e && s.resizable("destroy"), i && "string" == typeof e && s.resizable("option", "handles", e), i || !1 === e || this._makeResizable(e);
                    break;
                case "title":
                    r(".ui-dialog-title", this.uiDialogTitlebar).html("" + (e || "&#160;"))
            }
            this._super(t, e)
        },
        _size: function() {
            var t, e, i, s = this.options,
                n = this.uiDialog.is(":visible");
            this.element.show().css({
                width: "auto",
                minHeight: 0,
                height: 0
            }), s.minWidth > s.width && (s.width = s.minWidth), t = this.uiDialog.css({
                height: "auto",
                width: s.width
            }).outerHeight(), e = Math.max(0, s.minHeight - t), "auto" === s.height ? r.support.minHeight ? this.element.css({
                minHeight: e,
                height: "auto"
            }) : (this.uiDialog.show(), i = this.element.css("height", "auto").height(), n || this.uiDialog.hide(), this.element.height(Math.max(i, e))) : this.element.height(Math.max(s.height - t, 0)), this.uiDialog.is(":data(resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
        }
    }), r.extend(r.ui.dialog, {
        uuid: 0,
        maxZ: 0,
        getTitleId: function(t) {
            t = t.attr("id");
            return t || (this.uuid += 1, t = this.uuid), "ui-dialog-title-" + t
        },
        overlay: function(t) {
            this.$el = r.ui.dialog.overlay.create(t)
        }
    }), r.extend(r.ui.dialog.overlay, {
        instances: [],
        oldInstances: [],
        maxZ: 0,
        events: r.map("focus,mousedown,mouseup,keydown,keypress,click".split(","), function(t) {
            return t + ".dialog-overlay"
        }).join(" "),
        create: function(i) {
            0 === this.instances.length && (setTimeout(function() {
                r.ui.dialog.overlay.instances.length && r(document).bind(r.ui.dialog.overlay.events, function(t) {
                    if (r(t.target).zIndex() < r.ui.dialog.overlay.maxZ) return !1
                })
            }, 1), r(window).bind("resize.dialog-overlay", r.ui.dialog.overlay.resize));
            var s = this.oldInstances.pop() || r("<div>").addClass("ui-widget-overlay");
            return r(document).bind("keydown.dialog-overlay", function(t) {
                var e = r.ui.dialog.overlay.instances;
                0 !== e.length && e[e.length - 1] === s && i.options.closeOnEscape && !t.isDefaultPrevented() && t.keyCode && t.keyCode === r.ui.keyCode.ESCAPE && (i.close(t), t.preventDefault())
            }), s.appendTo(document.body).css({
                width: this.width(),
                height: this.height()
            }), r.fn.bgiframe && s.bgiframe(), this.instances.push(s), s
        },
        destroy: function(t) {
            var e = r.inArray(t, this.instances),
                i = 0; - 1 !== e && this.oldInstances.push(this.instances.splice(e, 1)[0]), 0 === this.instances.length && r([document, window]).unbind(".dialog-overlay"), t.height(0).width(0).remove(), r.each(this.instances, function() {
                i = Math.max(i, this.css("z-index"))
            }), this.maxZ = i
        },
        height: function() {
            var t;
            return r.ui.ie ? (t = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight)) < Math.max(document.documentElement.offsetHeight, document.body.offsetHeight) ? r(window).height() + "px" : t + "px" : r(document).height() + "px"
        },
        width: function() {
            var t;
            return r.ui.ie ? (t = Math.max(document.documentElement.scrollWidth, document.body.scrollWidth)) < Math.max(document.documentElement.offsetWidth, document.body.offsetWidth) ? r(window).width() + "px" : t + "px" : r(document).width() + "px"
        },
        resize: function() {
            var t = r([]);
            r.each(r.ui.dialog.overlay.instances, function() {
                t = t.add(this)
            }), t.css({
                width: 0,
                height: 0
            }).css({
                width: r.ui.dialog.overlay.width(),
                height: r.ui.dialog.overlay.height()
            })
        }
    }), r.extend(r.ui.dialog.overlay.prototype, {
        destroy: function() {
            r.ui.dialog.overlay.destroy(this.$el)
        }
    })
}(jQuery),
function(t) {
    t.widget("ui.progressbar", {
        version: "1.9.2",
        options: {
            value: 0,
            max: 100
        },
        min: 0,
        _create: function() {
            this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({
                role: "progressbar",
                "aria-valuemin": this.min,
                "aria-valuemax": this.options.max,
                "aria-valuenow": this._value()
            }), this.valueDiv = t("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element), this.oldValue = this._value(), this._refreshValue()
        },
        _destroy: function() {
            this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.valueDiv.remove()
        },
        value: function(t) {
            return void 0 === t ? this._value() : (this._setOption("value", t), this)
        },
        _setOption: function(t, e) {
            "value" === t && (this.options.value = e, this._refreshValue(), this._value() === this.options.max && this._trigger("complete")), this._super(t, e)
        },
        _value: function() {
            var t = this.options.value;
            return "number" != typeof t && (t = 0), Math.min(this.options.max, Math.max(this.min, t))
        },
        _percentage: function() {
            return 100 * this._value() / this.options.max
        },
        _refreshValue: function() {
            var t = this.value(),
                e = this._percentage();
            this.oldValue !== t && (this.oldValue = t, this._trigger("change")), this.valueDiv.toggle(t > this.min).toggleClass("ui-corner-right", t === this.options.max).width(e.toFixed(0) + "%"), this.element.attr("aria-valuenow", t)
        }
    })
}(jQuery), jQuery.effects || function(r) {
        var i, a, l, h, c, u, t, d, e, p, f, m, g, s, v, n = !1 !== r.uiBackCompat,
            o = "ui-effects-";

        function b(t, e, i, s) {
            return r.isPlainObject(t) && (t = (e = t).effect), t = {
                effect: t
            }, null == e && (e = {}), r.isFunction(e) && (s = e, i = null, e = {}), "number" != typeof e && !r.fx.speeds[e] || (s = i, i = e, e = {}), r.isFunction(i) && (s = i, i = null), e && r.extend(t, e), i = i || e.duration, t.duration = r.fx.off ? 0 : "number" == typeof i ? i : i in r.fx.speeds ? r.fx.speeds[i] : r.fx.speeds._default, t.complete = s || e.complete, t
        }

        function y(t) {
            return !t || "number" == typeof t || r.fx.speeds[t] || "string" == typeof t && !r.effects.effect[t] && (!n || !r.effects[t])
        }

        function _() {
            var t, e, i = this.ownerDocument.defaultView ? this.ownerDocument.defaultView.getComputedStyle(this, null) : this.currentStyle,
                s = {};
            if (i && i.length && i[0] && i[i[0]])
                for (e = i.length; e--;) "string" == typeof i[t = i[e]] && (s[r.camelCase(t)] = i[t]);
            else
                for (t in i) "string" == typeof i[t] && (s[t] = i[t]);
            return s
        }

        function w(t, e, i) {
            var s = m[e.type] || {};
            return null == t ? i || !e.def ? null : e.def : (t = s.floor ? ~~t : parseFloat(t), isNaN(t) ? e.def : s.mod ? (t + s.mod) % s.mod : t < 0 ? 0 : s.max < t ? s.max : t)
        }

        function x(s) {
            var n = p(),
                o = n._rgba = [];
            return s = s.toLowerCase(), v(e, function(t, e) {
                var i = e.re.exec(s),
                    i = i && e.parse(i),
                    e = e.space || "rgba";
                if (i) return i = n[e](i), n[f[e].cache] = i[f[e].cache], o = n._rgba = i._rgba, !1
            }), o.length ? ("0,0,0,0" === o.join() && h.extend(o, u.transparent), n) : u[s]
        }

        function C(t, e, i) {
            return 6 * (i = (i + 1) % 1) < 1 ? t + (e - t) * i * 6 : 2 * i < 1 ? e : 3 * i < 2 ? t + (e - t) * (2 / 3 - i) * 6 : t
        }
        r.effects = {
            effect: {}
        }, h = jQuery, t = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor".split(" "), d = /^([\-+])=\s*(\d+\.?\d*)/, e = [{
            re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
            parse: function(t) {
                return [t[1], t[2], t[3], t[4]]
            }
        }, {
            re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
            parse: function(t) {
                return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]]
            }
        }, {
            re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
            parse: function(t) {
                return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)]
            }
        }, {
            re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
            parse: function(t) {
                return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)]
            }
        }, {
            re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
            space: "hsla",
            parse: function(t) {
                return [t[1], t[2] / 100, t[3] / 100, t[4]]
            }
        }], p = h.Color = function(t, e, i, s) {
            return new h.Color.fn.parse(t, e, i, s)
        }, f = {
            rgba: {
                props: {
                    red: {
                        idx: 0,
                        type: "byte"
                    },
                    green: {
                        idx: 1,
                        type: "byte"
                    },
                    blue: {
                        idx: 2,
                        type: "byte"
                    }
                }
            },
            hsla: {
                props: {
                    hue: {
                        idx: 0,
                        type: "degrees"
                    },
                    saturation: {
                        idx: 1,
                        type: "percent"
                    },
                    lightness: {
                        idx: 2,
                        type: "percent"
                    }
                }
            }
        }, m = {
            byte: {
                floor: !0,
                max: 255
            },
            percent: {
                max: 1
            },
            degrees: {
                mod: 360,
                floor: !0
            }
        }, g = p.support = {}, s = h("<p>")[0], v = h.each, s.style.cssText = "background-color:rgba(1,1,1,.5)", g.rgba = -1 < s.style.backgroundColor.indexOf("rgba"), v(f, function(t, e) {
            e.cache = "_" + t, e.props.alpha = {
                idx: 3,
                type: "percent",
                def: 1
            }
        }), p.fn = h.extend(p.prototype, {
            parse: function(n, t, e, i) {
                if (n === c) return this._rgba = [null, null, null, null], this;
                (n.jquery || n.nodeType) && (n = h(n).css(t), t = c);
                var o = this,
                    s = h.type(n),
                    a = this._rgba = [];
                return t !== c && (n = [n, t, e, i], s = "array"), "string" === s ? this.parse(x(n) || u._default) : "array" === s ? (v(f.rgba.props, function(t, e) {
                    a[e.idx] = w(n[e.idx], e)
                }), this) : "object" === s ? (v(f, n instanceof p ? function(t, e) {
                    n[e.cache] && (o[e.cache] = n[e.cache].slice())
                } : function(t, i) {
                    var s = i.cache;
                    v(i.props, function(t, e) {
                        if (!o[s] && i.to) {
                            if ("alpha" === t || null == n[t]) return;
                            o[s] = i.to(o._rgba)
                        }
                        o[s][e.idx] = w(n[t], e, !0)
                    }), o[s] && r.inArray(null, o[s].slice(0, 3)) < 0 && (o[s][3] = 1, i.from && (o._rgba = i.from(o[s])))
                }), this) : void 0
            },
            is: function(t) {
                var n = p(t),
                    o = !0,
                    a = this;
                return v(f, function(t, e) {
                    var i, s = n[e.cache];
                    return s && (i = a[e.cache] || e.to && e.to(a._rgba) || [], v(e.props, function(t, e) {
                        if (null != s[e.idx]) return o = s[e.idx] === i[e.idx]
                    })), o
                }), o
            },
            _space: function() {
                var i = [],
                    s = this;
                return v(f, function(t, e) {
                    s[e.cache] && i.push(t)
                }), i.pop()
            },
            transition: function(t, a) {
                var e = (u = p(t))._space(),
                    i = f[e],
                    t = 0 === this.alpha() ? p("transparent") : this,
                    r = t[i.cache] || i.to(t._rgba),
                    l = r.slice(),
                    u = u[i.cache];
                return v(i.props, function(t, e) {
                    var i = e.idx,
                        s = r[i],
                        n = u[i],
                        o = m[e.type] || {};
                    null !== n && (null === s ? l[i] = n : (o.mod && (o.mod / 2 < n - s ? s += o.mod : o.mod / 2 < s - n && (s -= o.mod)), l[i] = w((n - s) * a + s, e)))
                }), this[e](l)
            },
            blend: function(t) {
                if (1 === this._rgba[3]) return this;
                var e = this._rgba.slice(),
                    i = e.pop(),
                    s = p(t)._rgba;
                return p(h.map(e, function(t, e) {
                    return (1 - i) * s[e] + i * t
                }))
            },
            toRgbaString: function() {
                var t = "rgba(",
                    e = h.map(this._rgba, function(t, e) {
                        return null == t ? 2 < e ? 1 : 0 : t
                    });
                return 1 === e[3] && (e.pop(), t = "rgb("), t + e.join() + ")"
            },
            toHslaString: function() {
                var t = "hsla(",
                    e = h.map(this.hsla(), function(t, e) {
                        return null == t && (t = 2 < e ? 1 : 0), e && e < 3 && (t = Math.round(100 * t) + "%"), t
                    });
                return 1 === e[3] && (e.pop(), t = "hsl("), t + e.join() + ")"
            },
            toHexString: function(t) {
                var e = this._rgba.slice(),
                    i = e.pop();
                return t && e.push(~~(255 * i)), "#" + h.map(e, function(t) {
                    return 1 === (t = (t || 0).toString(16)).length ? "0" + t : t
                }).join("")
            },
            toString: function() {
                return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
            }
        }), p.fn.parse.prototype = p.fn, f.hsla.to = function(t) {
            if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
            var e = t[0] / 255,
                i = t[1] / 255,
                s = t[2] / 255,
                n = t[3],
                o = Math.max(e, i, s),
                a = Math.min(e, i, s),
                r = o - a,
                l = o + a,
                t = .5 * l,
                i = a === o ? 0 : e === o ? 60 * (i - s) / r + 360 : i === o ? 60 * (s - e) / r + 120 : 60 * (e - i) / r + 240,
                l = 0 == t || 1 == t ? t : t <= .5 ? r / l : r / (2 - l);
            return [Math.round(i) % 360, l, t, null == n ? 1 : n]
        }, f.hsla.from = function(t) {
            if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
            var e = t[0] / 360,
                i = t[1],
                s = t[2],
                t = t[3],
                i = s <= .5 ? s * (1 + i) : s + i - s * i,
                s = 2 * s - i;
            return [Math.round(255 * C(s, i, e + 1 / 3)), Math.round(255 * C(s, i, e)), Math.round(255 * C(s, i, e - 1 / 3)), t]
        }, v(f, function(r, t) {
            var o = t.props,
                a = t.cache,
                l = t.to,
                u = t.from;
            p.fn[r] = function(t) {
                if (l && !this[a] && (this[a] = l(this._rgba)), t === c) return this[a].slice();
                var e, i = h.type(t),
                    s = "array" === i || "object" === i ? t : arguments,
                    n = this[a].slice();
                return v(o, function(t, e) {
                    t = s["object" === i ? t : e.idx];
                    null == t && (t = n[e.idx]), n[e.idx] = w(t, e)
                }), u ? ((e = p(u(n)))[a] = n, e) : p(n)
            }, v(o, function(o, a) {
                p.fn[o] || (p.fn[o] = function(t) {
                    var e = h.type(t),
                        i = "alpha" === o ? this._hsla ? "hsla" : "rgba" : r,
                        s = this[i](),
                        n = s[a.idx];
                    return "undefined" === e ? n : ("function" === e && (t = t.call(this, n), e = h.type(t)), null == t && a.empty ? this : ("string" === e && ((e = d.exec(t)) && (t = n + parseFloat(e[2]) * ("+" === e[1] ? 1 : -1))), s[a.idx] = t, this[i](s)))
                })
            })
        }), v(t, function(t, o) {
            h.cssHooks[o] = {
                set: function(t, e) {
                    var i, s, n = "";
                    if ("string" !== h.type(e) || (i = x(e))) {
                        if (e = p(i || e), !g.rgba && 1 !== e._rgba[3]) {
                            for (s = "backgroundColor" === o ? t.parentNode : t;
                                ("" === n || "transparent" === n) && s && s.style;) try {
                                n = h.css(s, "backgroundColor"), s = s.parentNode
                            } catch (t) {}
                            e = e.blend(n && "transparent" !== n ? n : "_default")
                        }
                        e = e.toRgbaString()
                    }
                    try {
                        t.style[o] = e
                    } catch (t) {}
                }
            }, h.fx.step[o] = function(t) {
                t.colorInit || (t.start = p(t.elem, o), t.end = p(t.end), t.colorInit = !0), h.cssHooks[o].set(t.elem, t.start.transition(t.end, t.pos))
            }
        }), h.cssHooks.borderColor = {
            expand: function(i) {
                var s = {};
                return v(["Top", "Right", "Bottom", "Left"], function(t, e) {
                    s["border" + e + "Color"] = i
                }), s
            }
        }, u = h.Color.names = {
            aqua: "#00ffff",
            black: "#000000",
            blue: "#0000ff",
            fuchsia: "#ff00ff",
            gray: "#808080",
            green: "#008000",
            lime: "#00ff00",
            maroon: "#800000",
            navy: "#000080",
            olive: "#808000",
            purple: "#800080",
            red: "#ff0000",
            silver: "#c0c0c0",
            teal: "#008080",
            white: "#ffffff",
            yellow: "#ffff00",
            transparent: [null, null, null, 0],
            _default: "#ffffff"
        }, a = ["add", "remove", "toggle"], l = {
            border: 1,
            borderBottom: 1,
            borderColor: 1,
            borderLeft: 1,
            borderRight: 1,
            borderTop: 1,
            borderWidth: 1,
            margin: 1,
            padding: 1
        }, r.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(t, e) {
            r.fx.step[e] = function(t) {
                ("none" !== t.end && !t.setAttr || 1 === t.pos && !t.setAttr) && (jQuery.style(t.elem, e, t.end), t.setAttr = !0)
            }
        }), r.effects.animateClass = function(n, t, e, i) {
            var o = r.speed(t, e, i);
            return this.queue(function() {
                var i = r(this),
                    t = i.attr("class") || "",
                    e = (e = o.children ? i.find("*").andSelf() : i).map(function() {
                        return {
                            el: r(this),
                            start: _.call(this)
                        }
                    }),
                    s = function() {
                        r.each(a, function(t, e) {
                            n[e] && i[e + "Class"](n[e])
                        })
                    };
                s(), e = e.map(function() {
                    return this.end = _.call(this.el[0]), this.diff = function(t, e) {
                        var i, s, n = {};
                        for (i in e) s = e[i], t[i] === s || l[i] || !r.fx.step[i] && isNaN(parseFloat(s)) || (n[i] = s);
                        return n
                    }(this.start, this.end), this
                }), i.attr("class", t), e = e.map(function() {
                    var t = this,
                        e = r.Deferred(),
                        i = jQuery.extend({}, o, {
                            queue: !1,
                            complete: function() {
                                e.resolve(t)
                            }
                        });
                    return this.el.animate(this.diff, i), e.promise()
                }), r.when.apply(r, e.get()).done(function() {
                    s(), r.each(arguments, function() {
                        var e = this.el;
                        r.each(this.diff, function(t) {
                            e.css(t, "")
                        })
                    }), o.complete.call(i[0])
                })
            })
        }, r.fn.extend({
            _addClass: r.fn.addClass,
            addClass: function(t, e, i, s) {
                return e ? r.effects.animateClass.call(this, {
                    add: t
                }, e, i, s) : this._addClass(t)
            },
            _removeClass: r.fn.removeClass,
            removeClass: function(t, e, i, s) {
                return e ? r.effects.animateClass.call(this, {
                    remove: t
                }, e, i, s) : this._removeClass(t)
            },
            _toggleClass: r.fn.toggleClass,
            toggleClass: function(t, e, i, s, n) {
                return "boolean" == typeof e || void 0 === e ? i ? r.effects.animateClass.call(this, e ? {
                    add: t
                } : {
                    remove: t
                }, i, s, n) : this._toggleClass(t, e) : r.effects.animateClass.call(this, {
                    toggle: t
                }, e, i, s)
            },
            switchClass: function(t, e, i, s, n) {
                return r.effects.animateClass.call(this, {
                    add: e,
                    remove: t
                }, i, s, n)
            }
        }), r.extend(r.effects, {
            version: "1.9.2",
            save: function(t, e) {
                for (var i = 0; i < e.length; i++) null !== e[i] && t.data(o + e[i], t[0].style[e[i]])
            },
            restore: function(t, e) {
                for (var i, s = 0; s < e.length; s++) null !== e[s] && (void 0 === (i = t.data(o + e[s])) && (i = ""), t.css(e[s], i))
            },
            setMode: function(t, e) {
                return "toggle" === e && (e = t.is(":hidden") ? "show" : "hide"), e
            },
            getBaseline: function(t, e) {
                var i, s;
                switch (t[0]) {
                    case "top":
                        i = 0;
                        break;
                    case "middle":
                        i = .5;
                        break;
                    case "bottom":
                        i = 1;
                        break;
                    default:
                        i = t[0] / e.height
                }
                switch (t[1]) {
                    case "left":
                        s = 0;
                        break;
                    case "center":
                        s = .5;
                        break;
                    case "right":
                        s = 1;
                        break;
                    default:
                        s = t[1] / e.width
                }
                return {
                    x: s,
                    y: i
                }
            },
            createWrapper: function(i) {
                if (i.parent().is(".ui-effects-wrapper")) return i.parent();
                var s = {
                        width: i.outerWidth(!0),
                        height: i.outerHeight(!0),
                        float: i.css("float")
                    },
                    t = r("<div></div>").addClass("ui-effects-wrapper").css({
                        fontSize: "100%",
                        background: "transparent",
                        border: "none",
                        margin: 0,
                        padding: 0
                    }),
                    e = {
                        width: i.width(),
                        height: i.height()
                    },
                    n = document.activeElement;
                try {
                    n.id
                } catch (t) {
                    n = document.body
                }
                return i.wrap(t), i[0] !== n && !r.contains(i[0], n) || r(n).focus(), t = i.parent(), "static" === i.css("position") ? (t.css({
                    position: "relative"
                }), i.css({
                    position: "relative"
                })) : (r.extend(s, {
                    position: i.css("position"),
                    zIndex: i.css("z-index")
                }), r.each(["top", "left", "bottom", "right"], function(t, e) {
                    s[e] = i.css(e), isNaN(parseInt(s[e], 10)) && (s[e] = "auto")
                }), i.css({
                    position: "relative",
                    top: 0,
                    left: 0,
                    right: "auto",
                    bottom: "auto"
                })), i.css(e), t.css(s).show()
            },
            removeWrapper: function(t) {
                var e = document.activeElement;
                return t.parent().is(".ui-effects-wrapper") && (t.parent().replaceWith(t), t[0] !== e && !r.contains(t[0], e) || r(e).focus()), t
            },
            setTransition: function(s, t, n, o) {
                return o = o || {}, r.each(t, function(t, e) {
                    var i = s.cssUnit(e);
                    0 < i[0] && (o[e] = i[0] * n + i[1])
                }), o
            }
        }), r.fn.extend({
            effect: function() {
                function t(t) {
                    function e() {
                        r.isFunction(s) && s.call(i[0]), r.isFunction(t) && t()
                    }
                    var i = r(this),
                        s = o.complete,
                        n = o.mode;
                    (i.is(":hidden") ? "hide" === n : "show" === n) ? e(): a.call(i[0], o, e)
                }
                var o = b.apply(this, arguments),
                    e = o.mode,
                    i = o.queue,
                    a = r.effects.effect[o.effect],
                    s = !a && n && r.effects[o.effect];
                return r.fx.off || !a && !s ? e ? this[e](o.duration, o.complete) : this.each(function() {
                    o.complete && o.complete.call(this)
                }) : a ? !1 === i ? this.each(t) : this.queue(i || "fx", t) : s.call(this, {
                    options: o,
                    duration: o.duration,
                    callback: o.complete,
                    mode: o.mode
                })
            },
            _show: r.fn.show,
            show: function(t) {
                if (y(t)) return this._show.apply(this, arguments);
                var e = b.apply(this, arguments);
                return e.mode = "show", this.effect.call(this, e)
            },
            _hide: r.fn.hide,
            hide: function(t) {
                if (y(t)) return this._hide.apply(this, arguments);
                var e = b.apply(this, arguments);
                return e.mode = "hide", this.effect.call(this, e)
            },
            __toggle: r.fn.toggle,
            toggle: function(t) {
                if (y(t) || "boolean" == typeof t || r.isFunction(t)) return this.__toggle.apply(this, arguments);
                var e = b.apply(this, arguments);
                return e.mode = "toggle", this.effect.call(this, e)
            },
            cssUnit: function(t) {
                var i = this.css(t),
                    s = [];
                return r.each(["em", "px", "%", "pt"], function(t, e) {
                    0 < i.indexOf(e) && (s = [parseFloat(i), e])
                }), s
            }
        }), i = {}, r.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(e, t) {
            i[t] = function(t) {
                return Math.pow(t, e + 2)
            }
        }), r.extend(i, {
            Sine: function(t) {
                return 1 - Math.cos(t * Math.PI / 2)
            },
            Circ: function(t) {
                return 1 - Math.sqrt(1 - t * t)
            },
            Elastic: function(t) {
                return 0 === t || 1 === t ? t : -Math.pow(2, 8 * (t - 1)) * Math.sin((80 * (t - 1) - 7.5) * Math.PI / 15)
            },
            Back: function(t) {
                return t * t * (3 * t - 2)
            },
            Bounce: function(t) {
                for (var e, i = 4; t < ((e = Math.pow(2, --i)) - 1) / 11;);
                return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2)
            }
        }), r.each(i, function(t, e) {
            r.easing["easeIn" + t] = e, r.easing["easeOut" + t] = function(t) {
                return 1 - e(1 - t)
            }, r.easing["easeInOut" + t] = function(t) {
                return t < .5 ? e(2 * t) / 2 : 1 - e(-2 * t + 2) / 2
            }
        })
    }(jQuery),
    function(h) {
        h.effects.effect.slide = function(t, e) {
            var i = h(this),
                s = ["position", "top", "bottom", "left", "right", "width", "height"],
                n = h.effects.setMode(i, t.mode || "show"),
                o = "show" === n,
                a = t.direction || "left",
                r = "up" === a || "down" === a ? "top" : "left",
                l = "up" === a || "left" === a,
                u = {};
            h.effects.save(i, s), i.show(), a = t.distance || i["top" == r ? "outerHeight" : "outerWidth"](!0), h.effects.createWrapper(i).css({
                overflow: "hidden"
            }), o && i.css(r, l ? isNaN(a) ? "-" + a : -a : a), u[r] = (o ? l ? "+=" : "-=" : l ? "-=" : "+=") + a, i.animate(u, {
                queue: !1,
                duration: t.duration,
                easing: t.easing,
                complete: function() {
                    "hide" === n && i.hide(), h.effects.restore(i, s), h.effects.removeWrapper(i), e()
                }
            })
        }
    }(jQuery),
    function(f) {
        var m = /up|down|vertical/,
            g = /up|left|vertical|horizontal/;
        f.effects.effect.blind = function(t, e) {
            var i, s, n = f(this),
                o = ["position", "top", "bottom", "left", "right", "height", "width"],
                a = f.effects.setMode(n, t.mode || "hide"),
                r = t.direction || "up",
                l = m.test(r),
                u = l ? "height" : "width",
                h = l ? "top" : "left",
                c = g.test(r),
                d = {},
                p = "show" === a;
            n.parent().is(".ui-effects-wrapper") ? f.effects.save(n.parent(), o) : f.effects.save(n, o), n.show(), s = (i = f.effects.createWrapper(n).css({
                overflow: "hidden"
            }))[u](), r = parseFloat(i.css(h)) || 0, d[u] = p ? s : 0, c || (n.css(l ? "bottom" : "right", 0).css(l ? "top" : "left", "auto").css({
                position: "absolute"
            }), d[h] = p ? r : s + r), p && (i.css(u, 0), c || i.css(h, r + s)), i.animate(d, {
                duration: t.duration,
                easing: t.easing,
                queue: !1,
                complete: function() {
                    "hide" === a && n.hide(), f.effects.restore(n, o), f.effects.removeWrapper(n), e()
                }
            })
        }
    }(jQuery),
    function(n) {
        n.effects.effect.fade = function(t, e) {
            var i = n(this),
                s = n.effects.setMode(i, t.mode || "toggle");
            i.animate({
                opacity: s
            }, {
                queue: !1,
                duration: t.duration,
                easing: t.easing,
                complete: e
            })
        }
    }(jQuery),
    function(a) {
        a.effects.effect.highlight = function(t, e) {
            var i = a(this),
                s = ["backgroundImage", "backgroundColor", "opacity"],
                n = a.effects.setMode(i, t.mode || "show"),
                o = {
                    backgroundColor: i.css("backgroundColor")
                };
            "hide" === n && (o.opacity = 0), a.effects.save(i, s), i.show().css({
                backgroundImage: "none",
                backgroundColor: t.color || "#ffff99"
            }).animate(o, {
                queue: !1,
                duration: t.duration,
                easing: t.easing,
                complete: function() {
                    "hide" === n && i.hide(), a.effects.restore(i, s), e()
                }
            })
        }
    }(jQuery),
    function(c) {
        c.effects.effect.pulsate = function(t, e) {
            var i, s = c(this),
                n = c.effects.setMode(s, t.mode || "show"),
                o = "show" === n,
                a = "hide" === n,
                r = o || "hide" === n,
                l = 2 * (t.times || 5) + (r ? 1 : 0),
                u = t.duration / l,
                h = 0,
                n = s.queue(),
                r = n.length;
            for (!o && s.is(":visible") || (s.css("opacity", 0).show(), h = 1), i = 1; i < l; i++) s.animate({
                opacity: h
            }, u, t.easing), h = 1 - h;
            s.animate({
                opacity: h
            }, u, t.easing), s.queue(function() {
                a && s.hide(), e()
            }), 1 < r && n.splice.apply(n, [1, 0].concat(n.splice(r, 1 + l))), s.dequeue()
        }
    }(jQuery),
    function(o) {
        var s = 0;
        o.widget("ui.autocomplete", {
            version: "1.9.2",
            defaultElement: "<input>",
            options: {
                appendTo: "body",
                autoFocus: !1,
                delay: 300,
                minLength: 1,
                position: {
                    my: "left top",
                    at: "left bottom",
                    collision: "none"
                },
                source: null,
                change: null,
                close: null,
                focus: null,
                open: null,
                response: null,
                search: null,
                select: null
            },
            pending: 0,
            _create: function() {
                var i, s, n;
                this.isMultiLine = this._isMultiLine(), this.valueMethod = this.element[this.element.is("input,textarea") ? "val" : "text"], this.isNewMenu = !0, this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off"), this._on(this.element, {
                    keydown: function(t) {
                        if (this.element.prop("readOnly")) s = n = i = !0;
                        else {
                            s = n = i = !1;
                            var e = o.ui.keyCode;
                            switch (t.keyCode) {
                                case e.PAGE_UP:
                                    i = !0, this._move("previousPage", t);
                                    break;
                                case e.PAGE_DOWN:
                                    i = !0, this._move("nextPage", t);
                                    break;
                                case e.UP:
                                    i = !0, this._keyEvent("previous", t);
                                    break;
                                case e.DOWN:
                                    i = !0, this._keyEvent("next", t);
                                    break;
                                case e.ENTER:
                                case e.NUMPAD_ENTER:
                                    this.menu.active && (i = !0, t.preventDefault(), this.menu.select(t));
                                    break;
                                case e.TAB:
                                    this.menu.active && this.menu.select(t);
                                    break;
                                case e.ESCAPE:
                                    this.menu.element.is(":visible") && (this._value(this.term), this.close(t), t.preventDefault());
                                    break;
                                default:
                                    s = !0, this._searchTimeout(t)
                            }
                        }
                    },
                    keypress: function(t) {
                        if (i) return i = !1, void t.preventDefault();
                        if (!s) {
                            var e = o.ui.keyCode;
                            switch (t.keyCode) {
                                case e.PAGE_UP:
                                    this._move("previousPage", t);
                                    break;
                                case e.PAGE_DOWN:
                                    this._move("nextPage", t);
                                    break;
                                case e.UP:
                                    this._keyEvent("previous", t);
                                    break;
                                case e.DOWN:
                                    this._keyEvent("next", t)
                            }
                        }
                    },
                    input: function(t) {
                        if (n) return n = !1, void t.preventDefault();
                        this._searchTimeout(t)
                    },
                    focus: function() {
                        this.selectedItem = null, this.previous = this._value()
                    },
                    blur: function(t) {
                        this.cancelBlur ? delete this.cancelBlur : (clearTimeout(this.searching), this.close(t), this._change(t))
                    }
                }), this._initSource(), this.menu = o("<ul>").addClass("ui-autocomplete").appendTo(this.document.find(this.options.appendTo || "body")[0]).menu({
                    input: o(),
                    role: null
                }).zIndex(this.element.zIndex() + 1).hide().data("menu"), this._on(this.menu.element, {
                    mousedown: function(t) {
                        t.preventDefault(), this.cancelBlur = !0, this._delay(function() {
                            delete this.cancelBlur
                        });
                        var i = this.menu.element[0];
                        o(t.target).closest(".ui-menu-item").length || this._delay(function() {
                            var e = this;
                            this.document.one("mousedown", function(t) {
                                t.target === e.element[0] || t.target === i || o.contains(i, t.target) || e.close()
                            })
                        })
                    },
                    menufocus: function(t, e) {
                        if (this.isNewMenu && (this.isNewMenu = !1, t.originalEvent && /^mouse/.test(t.originalEvent.type))) return this.menu.blur(), void this.document.one("mousemove", function() {
                            o(t.target).trigger(t.originalEvent)
                        });
                        e = e.item.data("ui-autocomplete-item") || e.item.data("item.autocomplete");
                        !1 !== this._trigger("focus", t, {
                            item: e
                        }) ? t.originalEvent && /^key/.test(t.originalEvent.type) && this._value(e.value) : this.liveRegion.text(e.value)
                    },
                    menuselect: function(t, e) {
                        var i = e.item.data("ui-autocomplete-item") || e.item.data("item.autocomplete"),
                            s = this.previous;
                        this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = s, this._delay(function() {
                            this.previous = s, this.selectedItem = i
                        })), !1 !== this._trigger("select", t, {
                            item: i
                        }) && this._value(i.value), this.term = this._value(), this.close(t), this.selectedItem = i
                    }
                }), this.liveRegion = o("<span>", {
                    role: "status",
                    "aria-live": "polite"
                }).addClass("ui-helper-hidden-accessible").insertAfter(this.element), o.fn.bgiframe && this.menu.element.bgiframe(), this._on(this.window, {
                    beforeunload: function() {
                        this.element.removeAttr("autocomplete")
                    }
                })
            },
            _destroy: function() {
                clearTimeout(this.searching), this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove()
            },
            _setOption: function(t, e) {
                this._super(t, e), "source" === t && this._initSource(), "appendTo" === t && this.menu.element.appendTo(this.document.find(e || "body")[0]), "disabled" === t && e && this.xhr && this.xhr.abort()
            },
            _isMultiLine: function() {
                return !!this.element.is("textarea") || !this.element.is("input") && this.element.prop("isContentEditable")
            },
            _initSource: function() {
                var i, s, n = this;
                o.isArray(this.options.source) ? (i = this.options.source, this.source = function(t, e) {
                    e(o.ui.autocomplete.filter(i, t.term))
                }) : "string" == typeof this.options.source ? (s = this.options.source, this.source = function(t, e) {
                    n.xhr && n.xhr.abort(), n.xhr = o.ajax({
                        url: s,
                        data: t,
                        dataType: "json",
                        success: function(t) {
                            e(t)
                        },
                        error: function() {
                            e([])
                        }
                    })
                }) : this.source = this.options.source
            },
            _searchTimeout: function(t) {
                clearTimeout(this.searching), this.searching = this._delay(function() {
                    this.term !== this._value() && (this.selectedItem = null, this.search(null, t))
                }, this.options.delay)
            },
            search: function(t, e) {
                return t = null != t ? t : this._value(), this.term = this._value(), t.length < this.options.minLength ? this.close(e) : !1 !== this._trigger("search", e) ? this._search(t) : void 0
            },
            _search: function(t) {
                this.pending++, this.element.addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({
                    term: t
                }, this._response())
            },
            _response: function() {
                var e = this,
                    i = ++s;
                return function(t) {
                    i === s && e.__response(t), e.pending--, e.pending || e.element.removeClass("ui-autocomplete-loading")
                }
            },
            __response: function(t) {
                t = t && this._normalize(t), this._trigger("response", null, {
                    content: t
                }), !this.options.disabled && t && t.length && !this.cancelSearch ? (this._suggest(t), this._trigger("open")) : this._close()
            },
            close: function(t) {
                this.cancelSearch = !0, this._close(t)
            },
            _close: function(t) {
                this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", t))
            },
            _change: function(t) {
                this.previous !== this._value() && this._trigger("change", t, {
                    item: this.selectedItem
                })
            },
            _normalize: function(t) {
                return t.length && t[0].label && t[0].value ? t : o.map(t, function(t) {
                    return "string" == typeof t ? {
                        label: t,
                        value: t
                    } : o.extend({
                        label: t.label || t.value,
                        value: t.value || t.label
                    }, t)
                })
            },
            _suggest: function(t) {
                var e = this.menu.element.empty().zIndex(this.element.zIndex() + 1);
                this._renderMenu(e, t), this.menu.refresh(), e.show(), this._resizeMenu(), e.position(o.extend({ of: this.element
                }, this.options.position)), this.options.autoFocus && this.menu.next()
            },
            _resizeMenu: function() {
                var t = this.menu.element;
                t.outerWidth(Math.max(t.width("").outerWidth() + 1, this.element.outerWidth()))
            },
            _renderMenu: function(i, t) {
                var s = this;
                o.each(t, function(t, e) {
                    s._renderItemData(i, e)
                })
            },
            _renderItemData: function(t, e) {
                return this._renderItem(t, e).data("ui-autocomplete-item", e)
            },
            _renderItem: function(t, e) {
                return o("<li>").append(o("<a>").text(e.label)).appendTo(t)
            },
            _move: function(t, e) {
                if (this.menu.element.is(":visible")) return this.menu.isFirstItem() && /^previous/.test(t) || this.menu.isLastItem() && /^next/.test(t) ? (this._value(this.term), void this.menu.blur()) : void this.menu[t](e);
                this.search(null, e)
            },
            widget: function() {
                return this.menu.element
            },
            _value: function() {
                return this.valueMethod.apply(this.element, arguments)
            },
            _keyEvent: function(t, e) {
                this.isMultiLine && !this.menu.element.is(":visible") || (this._move(t, e), e.preventDefault())
            }
        }), o.extend(o.ui.autocomplete, {
            escapeRegex: function(t) {
                return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
            },
            filter: function(t, e) {
                var i = new RegExp(o.ui.autocomplete.escapeRegex(e), "i");
                return o.grep(t, function(t) {
                    return i.test(t.label || t.value || t)
                })
            }
        }), o.widget("ui.autocomplete", o.ui.autocomplete, {
            options: {
                messages: {
                    noResults: "No search results.",
                    results: function(t) {
                        return t + (1 < t ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
                    }
                }
            },
            __response: function(t) {
                var e;
                this._superApply(arguments), this.options.disabled || this.cancelSearch || (e = t && t.length ? this.options.messages.results(t.length) : this.options.messages.noResults, this.liveRegion.text(e))
            }
        })
    }(jQuery),
    function(r) {
        var i = !1;
        r.widget("ui.menu", {
            version: "1.9.2",
            defaultElement: "<ul>",
            delay: 300,
            options: {
                icons: {
                    submenu: "ui-icon-carat-1-e"
                },
                menus: "ul",
                position: {
                    my: "left top",
                    at: "right top"
                },
                role: "menu",
                blur: null,
                focus: null,
                select: null
            },
            _create: function() {
                this.activeMenu = this.element, this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({
                    role: this.options.role,
                    tabIndex: 0
                }).bind("click" + this.eventNamespace, r.proxy(function(t) {
                    this.options.disabled && t.preventDefault()
                }, this)), this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true"), this._on({
                    "mousedown .ui-menu-item > a": function(t) {
                        t.preventDefault()
                    },
                    "click .ui-state-disabled > a": function(t) {
                        t.preventDefault()
                    },
                    "click .ui-menu-item:has(a)": function(t) {
                        var e = r(t.target).closest(".ui-menu-item");
                        !i && e.not(".ui-state-disabled").length && (i = !0, this.select(t), e.has(".ui-menu").length ? this.expand(t) : this.element.is(":focus") || (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
                    },
                    "mouseenter .ui-menu-item": function(t) {
                        var e = r(t.currentTarget);
                        e.siblings().children(".ui-state-active").removeClass("ui-state-active"), this.focus(t, e)
                    },
                    mouseleave: "collapseAll",
                    "mouseleave .ui-menu": "collapseAll",
                    focus: function(t, e) {
                        var i = this.active || this.element.children(".ui-menu-item").eq(0);
                        e || this.focus(t, i)
                    },
                    blur: function(t) {
                        this._delay(function() {
                            r.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(t)
                        })
                    },
                    keydown: "_keydown"
                }), this.refresh(), this._on(this.document, {
                    click: function(t) {
                        r(t.target).closest(".ui-menu").length || this.collapseAll(t), i = !1
                    }
                })
            },
            _destroy: function() {
                this.element.removeAttr("aria-activedescendant").find(".ui-menu").andSelf().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(), this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function() {
                    var t = r(this);
                    t.data("ui-menu-submenu-carat") && t.remove()
                }), this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
            },
            _keydown: function(t) {
                function e(t) {
                    return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
                }
                var i, s, n, o, a = !0;
                switch (t.keyCode) {
                    case r.ui.keyCode.PAGE_UP:
                        this.previousPage(t);
                        break;
                    case r.ui.keyCode.PAGE_DOWN:
                        this.nextPage(t);
                        break;
                    case r.ui.keyCode.HOME:
                        this._move("first", "first", t);
                        break;
                    case r.ui.keyCode.END:
                        this._move("last", "last", t);
                        break;
                    case r.ui.keyCode.UP:
                        this.previous(t);
                        break;
                    case r.ui.keyCode.DOWN:
                        this.next(t);
                        break;
                    case r.ui.keyCode.LEFT:
                        this.collapse(t);
                        break;
                    case r.ui.keyCode.RIGHT:
                        this.active && !this.active.is(".ui-state-disabled") && this.expand(t);
                        break;
                    case r.ui.keyCode.ENTER:
                    case r.ui.keyCode.SPACE:
                        this._activate(t);
                        break;
                    case r.ui.keyCode.ESCAPE:
                        this.collapse(t);
                        break;
                    default:
                        a = !1, i = this.previousFilter || "", s = String.fromCharCode(t.keyCode), n = !1, clearTimeout(this.filterTimer), s === i ? n = !0 : s = i + s, o = new RegExp("^" + e(s), "i"), i = this.activeMenu.children(".ui-menu-item").filter(function() {
                            return o.test(r(this).children("a").text())
                        }), (i = n && -1 !== i.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : i).length || (s = String.fromCharCode(t.keyCode), o = new RegExp("^" + e(s), "i"), i = this.activeMenu.children(".ui-menu-item").filter(function() {
                            return o.test(r(this).children("a").text())
                        })), i.length ? (this.focus(t, i), 1 < i.length ? (this.previousFilter = s, this.filterTimer = this._delay(function() {
                            delete this.previousFilter
                        }, 1e3)) : delete this.previousFilter) : delete this.previousFilter
                }
                a && t.preventDefault()
            },
            _activate: function(t) {
                this.active.is(".ui-state-disabled") || (this.active.children("a[aria-haspopup='true']").length ? this.expand(t) : this.select(t))
            },
            refresh: function() {
                var s = this.options.icons.submenu,
                    t = this.element.find(this.options.menus);
                t.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({
                    role: this.options.role,
                    "aria-hidden": "true",
                    "aria-expanded": "false"
                }).each(function() {
                    var t = r(this),
                        e = t.prev("a"),
                        i = r("<span>").addClass("ui-menu-icon ui-icon " + s).data("ui-menu-submenu-carat", !0);
                    e.attr("aria-haspopup", "true").prepend(i), t.attr("aria-labelledby", e.attr("id"))
                }), (t = t.add(this.element)).children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role", "presentation").children("a").uniqueId().addClass("ui-corner-all").attr({
                    tabIndex: -1,
                    role: this._itemRole()
                }), t.children(":not(.ui-menu-item)").each(function() {
                    var t = r(this);
                    /[^\-��\s]/.test(t.text()) || t.addClass("ui-widget-content ui-menu-divider")
                }), t.children(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !r.contains(this.element[0], this.active[0]) && this.blur()
            },
            _itemRole: function() {
                return {
                    menu: "menuitem",
                    listbox: "option"
                }[this.options.role]
            },
            focus: function(t, e) {
                var i;
                this.blur(t, t && "focus" === t.type), this._scrollIntoView(e), this.active = e.first(), i = this.active.children("a").addClass("ui-state-focus"), this.options.role && this.element.attr("aria-activedescendant", i.attr("id")), this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active"), t && "keydown" === t.type ? this._close() : this.timer = this._delay(function() {
                    this._close()
                }, this.delay), (i = e.children(".ui-menu")).length && /^mouse/.test(t.type) && this._startOpening(i), this.activeMenu = e.parent(), this._trigger("focus", t, {
                    item: e
                })
            },
            _scrollIntoView: function(t) {
                var e, i, s;
                this._hasScroll() && (i = parseFloat(r.css(this.activeMenu[0], "borderTopWidth")) || 0, s = parseFloat(r.css(this.activeMenu[0], "paddingTop")) || 0, e = t.offset().top - this.activeMenu.offset().top - i - s, i = this.activeMenu.scrollTop(), s = this.activeMenu.height(), t = t.height(), e < 0 ? this.activeMenu.scrollTop(i + e) : s < e + t && this.activeMenu.scrollTop(i + e - s + t))
            },
            blur: function(t, e) {
                e || clearTimeout(this.timer), this.active && (this.active.children("a").removeClass("ui-state-focus"), this.active = null, this._trigger("blur", t, {
                    item: this.active
                }))
            },
            _startOpening: function(t) {
                clearTimeout(this.timer), "true" === t.attr("aria-hidden") && (this.timer = this._delay(function() {
                    this._close(), this._open(t)
                }, this.delay))
            },
            _open: function(t) {
                var e = r.extend({ of: this.active
                }, this.options.position);
                clearTimeout(this.timer), this.element.find(".ui-menu").not(t.parents(".ui-menu")).hide().attr("aria-hidden", "true"), t.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(e)
            },
            collapseAll: function(e, i) {
                clearTimeout(this.timer), this.timer = this._delay(function() {
                    var t = i ? this.element : r(e && e.target).closest(this.element.find(".ui-menu"));
                    t.length || (t = this.element), this._close(t), this.blur(e), this.activeMenu = t
                }, this.delay)
            },
            _close: function(t) {
                (t = t || (this.active ? this.active.parent() : this.element)).find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find("a.ui-state-active").removeClass("ui-state-active")
            },
            collapse: function(t) {
                var e = this.active && this.active.parent().closest(".ui-menu-item", this.element);
                e && e.length && (this._close(), this.focus(t, e))
            },
            expand: function(t) {
                var e = this.active && this.active.children(".ui-menu ").children(".ui-menu-item").first();
                e && e.length && (this._open(e.parent()), this._delay(function() {
                    this.focus(t, e)
                }))
            },
            next: function(t) {
                this._move("next", "first", t)
            },
            previous: function(t) {
                this._move("prev", "last", t)
            },
            isFirstItem: function() {
                return this.active && !this.active.prevAll(".ui-menu-item").length
            },
            isLastItem: function() {
                return this.active && !this.active.nextAll(".ui-menu-item").length
            },
            _move: function(t, e, i) {
                var s;
                this.active && (s = "first" === t || "last" === t ? this.active["first" === t ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[t + "All"](".ui-menu-item").eq(0)), s && s.length && this.active || (s = this.activeMenu.children(".ui-menu-item")[e]()), this.focus(i, s)
            },
            nextPage: function(t) {
                var e, i, s;
                this.active ? this.isLastItem() || (this._hasScroll() ? (i = this.active.offset().top, s = this.element.height(), this.active.nextAll(".ui-menu-item").each(function() {
                    return (e = r(this)).offset().top - i - s < 0
                }), this.focus(t, e)) : this.focus(t, this.activeMenu.children(".ui-menu-item")[this.active ? "last" : "first"]())) : this.next(t)
            },
            previousPage: function(t) {
                var e, i, s;
                this.active ? this.isFirstItem() || (this._hasScroll() ? (i = this.active.offset().top, s = this.element.height(), this.active.prevAll(".ui-menu-item").each(function() {
                    return 0 < (e = r(this)).offset().top - i + s
                }), this.focus(t, e)) : this.focus(t, this.activeMenu.children(".ui-menu-item").first())) : this.next(t)
            },
            _hasScroll: function() {
                return this.element.outerHeight() < this.element.prop("scrollHeight")
            },
            select: function(t) {
                this.active = this.active || r(t.target).closest(".ui-menu-item");
                var e = {
                    item: this.active
                };
                this.active.has(".ui-menu").length || this.collapseAll(t, !0), this._trigger("select", t, e)
            }
        })
    }(jQuery),
    function(e) {
        var t, i, s, n, o, a, r;

        function l(t, e) {
            var i, s;
            1 < t.originalEvent.touches.length || (t.preventDefault(), i = t.originalEvent.changedTouches[0], (s = document.createEvent("MouseEvents")).initMouseEvent(e, !0, !0, window, 1, i.screenX, i.screenY, i.clientX, i.clientY, !1, !1, !1, !1, 0, null), t.target.dispatchEvent(s))
        }
        e.support.touch = "ontouchend" in document, e.support.touch && (t = e.ui.mouse.prototype, i = t._mouseInit, s = t._mouseDestroy, t._touchStart = function(t) {
            !a && this._mouseCapture(t.originalEvent.changedTouches[0]) && (r = !(a = !0), n = t.originalEvent.touches[0].screenX, o = t.originalEvent.touches[0].screenY, l(t, "mouseover"), l(t, "mousemove"), l(t, "mousedown"))
        }, t._touchMove = function(t) {
            var e, i;
            a && (e = t.originalEvent.touches[0].screenX, i = t.originalEvent.touches[0].screenY, e - 2 <= n && n <= e + 2 && i - 2 <= o && o <= i + 2 ? r = !1 : (r = !0, l(t, "mousemove")))
        }, t._touchEnd = function(t) {
            a && (l(t, "mouseup"), l(t, "mouseout"), r || l(t, "click"), a = !1)
        }, t._mouseInit = function() {
            var t = this;
            t.element.bind({
                touchstart: e.proxy(t, "_touchStart"),
                touchmove: e.proxy(t, "_touchMove"),
                touchend: e.proxy(t, "_touchEnd")
            }), i.call(t)
        }, t._mouseDestroy = function() {
            var t = this;
            t.element.unbind({
                touchstart: e.proxy(t, "_touchStart"),
                touchmove: e.proxy(t, "_touchMove"),
                touchend: e.proxy(t, "_touchEnd")
            }), s.call(t)
        })
    }(jQuery), $.ui.dialog.prototype.options.responsive = !0, $.ui.dialog.prototype.options.scaleH = .9, $.ui.dialog.prototype.options.scaleW = 1;
var _init = $.ui.dialog.prototype._init;
$.ui.dialog.prototype._init = function() {
    _init.apply(this, arguments)
};
var _open = $.ui.dialog.prototype.open;
$.ui.dialog.prototype.open = function() {
    var s = this;
    _open.apply(this, arguments);

    function t() {
        var t, e, i;
        !0 === s.options.responsive && (t = s.element, e = $(window).height(), i = $(window).width(), t.parent().outerHeight(), t.parent().outerWidth(), e = Math.min(e * s.options.scaleH, n), i = Math.min(i * s.options.scaleW, o), t.dialog("option", "height", e).parent().css("max-height", e), t.dialog("option", "width", i).parent().css("max-width", i), t.dialog("option", "position", "center"), t.css("overflow", "auto"))
    }
    var n = s.element.parent().outerHeight(),
        o = s.element.parent().outerWidth();
    t(), $(window).on("resize", t), s.element.on("dialogclose", function() {
        $(window).off("resize", t)
    }), window.addEventListener("orientationchange", function() {
        t()
    })
};