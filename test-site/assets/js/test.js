//     .MMM.                                    MMMM.          
//     MMMMM.                                  MMMMMM          
//     MMMMM                                    MMMMM          
//      MMMM                                    MMMMM          
//     IMMMM                                     MMMMMM.       
//  .MMMMMMMMMM                               MMMMMMMMMMM      
//  MMMMMMMMMMMM                             MMMMMMMMMMMMM     
//  MMMMMMMMMMMM                             MMMMMMMMMMMMM     
//  MMMMMMMMMMMM.                           MMMMMMMMMMMMMMMM   
// .MMMMMMMMMMMMM    $M        MM          .MMMMMMMMMMMMMMMM   
//  MMMMMMMMMMMMM .MMMMM       MM          MMMMMMMMMMMMMMMMM   
//   MMMMMMMMMMMMMMMMMMO     MMMMMM        MMMMMMMMMMMMMMMMM   
//   MMMMMMMMMMMMMMMMM.        MM         ,MMMMMMMMMMMMMMMMM   
//  =MMMMMMMMMMMMMMMM          MM        MMMMMMMMMMMMMMMMMMM   
// .MMMMMMMMMMMMMMMM                     MMMMMMMMMMMMMMMMMMM   
//  M: =MMMMMMMMMMM?                    .MMMMM: MMMMMMMM   M   
//  M   M    MMMMMMM                     MMMMM  M.:MMMM=   M   
//  M   M      MMMMM                     MMMMM. M  MMMM    M   
//  M   M       MMMM                     MMMMM  M  MMMM.  .M   
//  M   M      .MMMMM                    $MMMM  M  MMMM    M   
//      M       MMMMM.                    MMMM  M  MMMM    M   
//      M        MMMM                     MMMM  $  MMMM    M   
//      M        MMMM                   MMMMMM    :MMMM        
//      +        MMMMM                 .MMMM       MMMM        
//               +MMMM                            MMMMM        
//                 MMMMM                         MMMMM         
//                  ~MMM                                       
// TeehanLax - v - 04-17-2013
// Copyright (c) 2013
// ------------------------------------------------------------
// Are you a developer? Come make awesome sh*t with our team
// www.teehanlax.com/careers

function Hammer(t, e, i) {
    function n(t) {
        return t.touches ? t.touches.length : 1
    }
    function o(t) {
        var e = document,
            i = e.body;
        return [{
            x: t.pageX || t.clientX + (e && e.scrollLeft || i && i.scrollLeft || 0) - (e && e.clientLeft || i && e.clientLeft || 0),
            y: t.pageY || t.clientY + (e && e.scrollTop || i && i.scrollTop || 0) - (e && e.clientTop || i && e.clientTop || 0)
        }]
    }
    function s(t) {
        for (var i, n = [], o = 0, s = e.two_touch_max ? Math.min(2, t.touches.length) : t.touches.length; s > o; o++) i = t.touches[o], n.push({
                x: i.pageX,
                y: i.pageY
            });
        return n
    }
    function a(t) {
        var n = o;
        return t = t || window.event, R ? n = s : e.allow_touch_and_mouse && t.touches !== i && t.touches.length > 0 && (n = s), n(t)
    }
    function r(t, e) {
        return 180 * Math.atan2(e.y - t.y, e.x - t.x) / Math.PI
    }
    function l(t, e) {
        var i = e.x - t.x,
            n = e.y - t.y;
        return Math.sqrt(i * i + n * n)
    }
    function c(t, e) {
        if (2 == t.length && 2 == e.length) {
            var i = l(t[0], t[1]),
                n = l(e[0], e[1]);
            return n / i
        }
        return 0
    }
    function h(t, e) {
        if (2 == t.length && 2 == e.length) {
            var i = r(t[1], t[0]),
                n = r(e[1], e[0]);
            return n - i
        }
        return 0
    }
    function u(t, e) {
        e.touches = a(e.originalEvent), e.type = t, y(b["on" + t]) && b["on" + t].call(b, e)
    }
    function d(t) {
        t = t || window.event, t.preventDefault ? (t.preventDefault(), t.stopPropagation()) : (t.returnValue = !1, t.cancelBubble = !0)
    }
    function p() {
        z = {}, I = !1, P = 0, S = 0, M = 0, F = null
    }
    function f(i) {
        function o() {
            z.start = a(i), H = (new Date).getTime(), P = n(i), I = !0, k = i;
            var e = t.getBoundingClientRect(),
                o = t.clientTop || document.body.clientTop || 0,
                s = t.clientLeft || document.body.clientLeft || 0,
                r = window.pageYOffset || t.scrollTop || document.body.scrollTop,
                l = window.pageXOffset || t.scrollLeft || document.body.scrollLeft;
            W = {
                top: e.top + r - o,
                left: e.left + l - s
            }, N = !0, E.hold(i)
        }
        var s;
        switch (i.type) {
        case "mousedown":
        case "touchstart":
            s = n(i), G = 1 === s, 2 === s && "drag" === F && u("dragend", {
                originalEvent: i,
                direction: _,
                distance: S,
                angle: M
            }), o(), e.prevent_default && d(i);
            break;
        case "mousemove":
        case "touchmove":
            if (s = n(i), !N && 1 === s) return !1;
            N || 2 !== s || (G = !1, p(), o()), C = i, z.move = a(i), E.transform(i) || E.drag(i);
            break;
        case "mouseup":
        case "mouseout":
        case "touchcancel":
        case "touchend":
            var r = !0;
            if (N = !1, T = i, E.swipe(i), "drag" == F) u("dragend", {
                    originalEvent: i,
                    direction: _,
                    distance: S,
                    angle: M
                });
            else if ("transform" == F) {
                var l = z.center.x - z.startCenter.x,
                    f = z.center.y - z.startCenter.y;
                u("transformend", {
                    originalEvent: i,
                    position: z.center,
                    scale: c(z.start, z.move),
                    rotation: h(z.start, z.move),
                    distance: S,
                    distanceX: l,
                    distanceY: f
                }), 1 === n(i) && (p(), o(), r = !1)
            } else G && "mouseout" != i.type && E.tap(k);
            null !== F && (L = F, u("release", {
                originalEvent: i,
                gesture: F,
                position: z.move || z.start
            })), r && p()
        }
    }
    function m(e) {
        g(t, e.relatedTarget) || f(e)
    }
    function g(t, e) {
        if (!e && window.event && window.event.toElement && (e = window.event.toElement), t === e) return !0;
        if (e) for (var i = e.parentNode; null !== i;) {
                if (i === t) return !0;
                i = i.parentNode
        }
        return !1
    }
    function v(t, e) {
        var i = {};
        if (!e) return t;
        for (var n in t) i[n] = n in e ? e[n] : t[n];
        return i
    }
    function y(t) {
        return "[object Function]" == Object.prototype.toString.call(t)
    }
    function x(t, e, i) {
        e = e.split(" ");
        for (var n = 0, o = e.length; o > n; n++) t.addEventListener ? t.addEventListener(e[n], i, !1) : document.attachEvent && t.attachEvent("on" + e[n], i)
    }
    function w(t, e, i) {
        e = e.split(" ");
        for (var n = 0, o = e.length; o > n; n++) t.removeEventListener ? t.removeEventListener(e[n], i, !1) : document.detachEvent && t.detachEvent("on" + e[n], i)
    }
    var b = this,
        $ = v({
            prevent_default: !1,
            css_hacks: !0,
            swipe: !0,
            swipe_time: 500,
            swipe_min_distance: 20,
            drag: !0,
            drag_vertical: !0,
            drag_horizontal: !0,
            drag_min_distance: 20,
            transform: !0,
            scale_treshold: .1,
            rotation_treshold: 15,
            tap: !0,
            tap_double: !0,
            tap_max_interval: 300,
            tap_max_distance: 10,
            tap_double_distance: 20,
            hold: !0,
            hold_timeout: 500,
            allow_touch_and_mouse: !1
        }, Hammer.defaults || {});
    e = v($, e),
    function () {
        if (!e.css_hacks) return !1;
        for (var i = ["webkit", "moz", "ms", "o", ""], n = {
                userSelect: "none",
                touchCallout: "none",
                touchAction: "none",
                userDrag: "none",
                tapHighlightColor: "rgba(0,0,0,0)"
            }, o = "", s = 0; i.length > s; s++) for (var a in n) o = a, i[s] && (o = i[s] + o.substring(0, 1).toUpperCase() + o.substring(1)), t.style[o] = n[a]
    }();
    var k, C, T, S = 0,
        M = 0,
        _ = 0,
        z = {}, P = 0,
        I = !1,
        F = null,
        L = null,
        H = null,
        A = {
            x: 0,
            y: 0
        }, j = null,
        D = null,
        W = {}, N = !1,
        R = "ontouchstart" in window,
        G = !1;
    this.option = function (t, n) {
        return n !== i && (e[t] = n), e[t]
    }, this.getDirectionFromAngle = function (t) {
        var e, i, n = {
                down: t >= 45 && 135 > t,
                left: t >= 135 || -135 >= t,
                up: -45 > t && t > -135,
                right: t >= -45 && 45 >= t
            };
        for (i in n) if (n[i]) {
                e = i;
                break
            }
        return e
    }, this.destroy = function () {
        (R || e.allow_touch_and_mouse) && w(t, "touchstart touchmove touchend touchcancel", f), (!R || e.allow_touch_and_mouse) && (w(t, "mouseup mousedown mousemove", f), w(t, "mouseout", m))
    };
    var E = {
        hold: function (t) {
            e.hold && (F = "hold", clearTimeout(D), D = setTimeout(function () {
                "hold" == F && u("hold", {
                    originalEvent: t,
                    position: z.start
                })
            }, e.hold_timeout))
        },
        swipe: function (t) {
            if (z.move && "transform" !== F) {
                var i = z.move[0].x - z.start[0].x,
                    n = z.move[0].y - z.start[0].y;
                S = Math.sqrt(i * i + n * n);
                var o = (new Date).getTime(),
                    s = o - H;
                if (e.swipe && e.swipe_time >= s && S >= e.swipe_min_distance) {
                    M = r(z.start[0], z.move[0]), _ = b.getDirectionFromAngle(M), F = "swipe";
                    var a = {
                        x: z.move[0].x - W.left,
                        y: z.move[0].y - W.top
                    }, l = {
                            originalEvent: t,
                            position: a,
                            direction: _,
                            distance: S,
                            distanceX: i,
                            distanceY: n,
                            angle: M
                        };
                    u("swipe", l)
                }
            }
        },
        drag: function (t) {
            var i = z.move[0].x - z.start[0].x,
                n = z.move[0].y - z.start[0].y;
            if (S = Math.sqrt(i * i + n * n), e.drag && S > e.drag_min_distance || "drag" == F) {
                M = r(z.start[0], z.move[0]), _ = b.getDirectionFromAngle(M);
                var o = "up" == _ || "down" == _;
                if ((o && !e.drag_vertical || !o && !e.drag_horizontal) && S > e.drag_min_distance) return;
                F = "drag";
                var s = {
                    x: z.move[0].x - W.left,
                    y: z.move[0].y - W.top
                }, a = {
                        originalEvent: t,
                        position: s,
                        direction: _,
                        distance: S,
                        distanceX: i,
                        distanceY: n,
                        angle: M
                    };
                I && (u("dragstart", a), I = !1), u("drag", a), d(t)
            }
        },
        transform: function (t) {
            if (e.transform) {
                var i = n(t);
                if (2 !== i) return !1;
                var o = h(z.start, z.move),
                    s = c(z.start, z.move);
                if ("transform" === F || Math.abs(1 - s) > e.scale_treshold || Math.abs(o) > e.rotation_treshold) {
                    F = "transform", z.center = {
                        x: (z.move[0].x + z.move[1].x) / 2 - W.left,
                        y: (z.move[0].y + z.move[1].y) / 2 - W.top
                    }, I && (z.startCenter = z.center);
                    var a = z.center.x - z.startCenter.x,
                        r = z.center.y - z.startCenter.y;
                    S = Math.sqrt(a * a + r * r);
                    var l = {
                        originalEvent: t,
                        position: z.center,
                        scale: s,
                        rotation: o,
                        distance: S,
                        distanceX: a,
                        distanceY: r
                    };
                    return I && (u("transformstart", l), I = !1), u("transform", l), d(t), !0
                }
            }
            return !1
        },
        tap: function (t) {
            var i = (new Date).getTime(),
                n = i - H;
            if (!e.hold || e.hold && e.hold_timeout > n) {
                var o = function () {
                    if (A && e.tap_double && "tap" == L && z.start && e.tap_max_interval > H - j) {
                        var t = Math.abs(A[0].x - z.start[0].x),
                            i = Math.abs(A[0].y - z.start[0].y);
                        return A && z.start && Math.max(t, i) < e.tap_double_distance
                    }
                    return !1
                }();
                if (o) F = "double_tap", j = null, u("doubletap", {
                        originalEvent: t,
                        position: z.start
                    }), d(t);
                else {
                    var s = z.move ? Math.abs(z.move[0].x - z.start[0].x) : 0,
                        a = z.move ? Math.abs(z.move[0].y - z.start[0].y) : 0;
                    S = Math.max(s, a), e.tap_max_distance > S && (F = "tap", j = i, A = z.start, e.tap && (u("tap", {
                        originalEvent: t,
                        position: z.start
                    }), d(t)))
                }
            }
        }
    };
    (R || e.allow_touch_and_mouse) && x(t, "touchstart touchmove touchend touchcancel", f), (!R || e.allow_touch_and_mouse) && (x(t, "mouseup mousedown mousemove", f), x(t, "mouseout", m))
}(function (t) {
    t.fn.autogrow = function () {
        return this.filter("textarea").each(function () {
            var e = this,
                i = t(e),
                n = i.height(),
                o = i.hasClass("autogrow-short") ? 0 : parseInt(i.css("lineHeight")),
                s = t("<div></div>").css({
                    position: "absolute",
                    top: -1e4,
                    left: -1e4,
                    width: i.width(),
                    fontSize: i.css("fontSize"),
                    fontFamily: i.css("fontFamily"),
                    fontWeight: i.css("fontWeight"),
                    lineHeight: i.css("lineHeight"),
                    resize: "none"
                }).appendTo(document.body),
                a = function () {
                    var t = function (t, e) {
                        for (var i = 0, n = ""; e > i; i++) n += t;
                        return n
                    }, a = e.value.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/&/g, "&amp;").replace(/\n$/, "<br/>&nbsp;").replace(/\n/g, "<br/>").replace(/ {2,}/g, function (e) {
                            return t("&nbsp;", e.length - 1) + " "
                        });
                    s.css("width", i.width()), s.html(a), i.css("height", Math.max(s.height() + o, n))
                };
            i.change(a).keyup(a).keydown(a), t(window).resize(a), a()
        })
    }
})(jQuery),
function (t, e) {
    "$:nomunge";
    var i, n = t.jQuery || t.Cowboy || (t.Cowboy = {});
    n.throttle = i = function (t, i, o, s) {
        function a() {
            function n() {
                l = +new Date, o.apply(c, u)
            }
            function a() {
                r = e
            }
            var c = this,
                h = +new Date - l,
                u = arguments;
            s && !r && n(), r && clearTimeout(r), s === e && h > t ? n() : i !== !0 && (r = setTimeout(s ? a : n, s === e ? t - h : t))
        }
        var r, l = 0;
        return "boolean" != typeof i && (s = o, o = i, i = e), n.guid && (a.guid = o.guid = o.guid || n.guid++), a
    }, n.debounce = function (t, n, o) {
        return o === e ? i(t, n, !1) : i(t, o, n !== !1)
    }
}(this),
function (t) {
    t.fn.fitText = function (e, i) {
        var n = e || 1,
            o = t.extend({
                minFontSize: Number.NEGATIVE_INFINITY,
                maxFontSize: Number.POSITIVE_INFINITY
            }, i);
        return this.each(function () {
            var e = t(this),
                i = function () {
                    e.css("font-size", Math.max(Math.min(e.width() / (10 * n), parseFloat(o.maxFontSize)), parseFloat(o.minFontSize)))
                };
            i(), t(window).on("resize", i)
        })
    }
}(jQuery),
function (t) {
    t.color = {}, t.color.make = function (e, i, n, o) {
        var s = {};
        return s.r = e || 0, s.g = i || 0, s.b = n || 0, s.a = null != o ? o : 1, s.add = function (t, e) {
            for (var i = 0; t.length > i; ++i) s[t.charAt(i)] += e;
            return s.normalize()
        }, s.scale = function (t, e) {
            for (var i = 0; t.length > i; ++i) s[t.charAt(i)] *= e;
            return s.normalize()
        }, s.toString = function () {
            return s.a >= 1 ? "rgb(" + [s.r, s.g, s.b].join(",") + ")" : "rgba(" + [s.r, s.g, s.b, s.a].join(",") + ")"
        }, s.normalize = function () {
            function t(t, e, i) {
                return t > e ? t : e > i ? i : e
            }
            return s.r = t(0, parseInt(s.r), 255), s.g = t(0, parseInt(s.g), 255), s.b = t(0, parseInt(s.b), 255), s.a = t(0, s.a, 1), s
        }, s.clone = function () {
            return t.color.make(s.r, s.b, s.g, s.a)
        }, s.normalize()
    }, t.color.extract = function (e, i) {
        var n;
        do {
            if (n = e.css(i).toLowerCase(), "" != n && "transparent" != n) break;
            e = e.parent()
        } while (!t.nodeName(e.get(0), "body"));
        return "rgba(0, 0, 0, 0)" == n && (n = "transparent"), t.color.parse(n)
    }, t.color.parse = function (i) {
        var n, o = t.color.make;
        if (n = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(i)) return o(parseInt(n[1], 10), parseInt(n[2], 10), parseInt(n[3], 10));
        if (n = /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(i)) return o(parseInt(n[1], 10), parseInt(n[2], 10), parseInt(n[3], 10), parseFloat(n[4]));
        if (n = /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(i)) return o(2.55 * parseFloat(n[1]), 2.55 * parseFloat(n[2]), 2.55 * parseFloat(n[3]));
        if (n = /rgba\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(i)) return o(2.55 * parseFloat(n[1]), 2.55 * parseFloat(n[2]), 2.55 * parseFloat(n[3]), parseFloat(n[4]));
        if (n = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(i)) return o(parseInt(n[1], 16), parseInt(n[2], 16), parseInt(n[3], 16));
        if (n = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(i)) return o(parseInt(n[1] + n[1], 16), parseInt(n[2] + n[2], 16), parseInt(n[3] + n[3], 16));
        var s = t.trim(i).toLowerCase();
        return "transparent" == s ? o(255, 255, 255, 0) : (n = e[s] || [0, 0, 0], o(n[0], n[1], n[2]))
    };
    var e = {
        aqua: [0, 255, 255],
        azure: [240, 255, 255],
        beige: [245, 245, 220],
        black: [0, 0, 0],
        blue: [0, 0, 255],
        brown: [165, 42, 42],
        cyan: [0, 255, 255],
        darkblue: [0, 0, 139],
        darkcyan: [0, 139, 139],
        darkgrey: [169, 169, 169],
        darkgreen: [0, 100, 0],
        darkkhaki: [189, 183, 107],
        darkmagenta: [139, 0, 139],
        darkolivegreen: [85, 107, 47],
        darkorange: [255, 140, 0],
        darkorchid: [153, 50, 204],
        darkred: [139, 0, 0],
        darksalmon: [233, 150, 122],
        darkviolet: [148, 0, 211],
        fuchsia: [255, 0, 255],
        gold: [255, 215, 0],
        green: [0, 128, 0],
        indigo: [75, 0, 130],
        khaki: [240, 230, 140],
        lightblue: [173, 216, 230],
        lightcyan: [224, 255, 255],
        lightgreen: [144, 238, 144],
        lightgrey: [211, 211, 211],
        lightpink: [255, 182, 193],
        lightyellow: [255, 255, 224],
        lime: [0, 255, 0],
        magenta: [255, 0, 255],
        maroon: [128, 0, 0],
        navy: [0, 0, 128],
        olive: [128, 128, 0],
        orange: [255, 165, 0],
        pink: [255, 192, 203],
        purple: [128, 0, 128],
        violet: [128, 0, 128],
        red: [255, 0, 0],
        silver: [192, 192, 192],
        white: [255, 255, 255],
        yellow: [255, 255, 0]
    }
}(jQuery),
function (t) {
    function e(e, o, s, a) {
        function r(t, e) {
            e = [we].concat(e);
            for (var i = 0; t.length > i; ++i) t[i].apply(this, e)
        }
        function l() {
            for (var e = 0; a.length > e; ++e) {
                var i = a[e];
                i.init(we), i.options && t.extend(!0, ae, i.options)
            }
        }
        function c(e) {
            var i;
            for (t.extend(!0, ae, e), null == ae.xaxis.color && (ae.xaxis.color = ae.grid.color), null == ae.yaxis.color && (ae.yaxis.color = ae.grid.color), null == ae.xaxis.tickColor && (ae.xaxis.tickColor = ae.grid.tickColor), null == ae.yaxis.tickColor && (ae.yaxis.tickColor = ae.grid.tickColor), null == ae.grid.borderColor && (ae.grid.borderColor = ae.grid.color), null == ae.grid.tickColor && (ae.grid.tickColor = "" + t.color.parse(ae.grid.color).scale("a", .22)), i = 0; Math.max(1, ae.xaxes.length) > i; ++i) ae.xaxes[i] = t.extend(!0, {}, ae.xaxis, ae.xaxes[i]);
            for (i = 0; Math.max(1, ae.yaxes.length) > i; ++i) ae.yaxes[i] = t.extend(!0, {}, ae.yaxis, ae.yaxes[i]);
            for (ae.xaxis.noTicks && null == ae.xaxis.ticks && (ae.xaxis.ticks = ae.xaxis.noTicks), ae.yaxis.noTicks && null == ae.yaxis.ticks && (ae.yaxis.ticks = ae.yaxis.noTicks), ae.x2axis && (ae.xaxes[1] = t.extend(!0, {}, ae.xaxis, ae.x2axis), ae.xaxes[1].position = "top"), ae.y2axis && (ae.yaxes[1] = t.extend(!0, {}, ae.yaxis, ae.y2axis), ae.yaxes[1].position = "right"), ae.grid.coloredAreas && (ae.grid.markings = ae.grid.coloredAreas), ae.grid.coloredAreasColor && (ae.grid.markingsColor = ae.grid.coloredAreasColor), ae.lines && t.extend(!0, ae.series.lines, ae.lines), ae.points && t.extend(!0, ae.series.points, ae.points), ae.bars && t.extend(!0, ae.series.bars, ae.bars), null != ae.shadowSize && (ae.series.shadowSize = ae.shadowSize), i = 0; ae.xaxes.length > i; ++i) g(de, i + 1).options = ae.xaxes[i];
            for (i = 0; ae.yaxes.length > i; ++i) g(pe, i + 1).options = ae.yaxes[i];
            for (var n in xe) ae.hooks[n] && ae.hooks[n].length && (xe[n] = xe[n].concat(ae.hooks[n]));
            r(xe.processOptions, [ae])
        }
        function h(t) {
            se = u(t), v(), y()
        }
        function u(e) {
            for (var i = [], n = 0; e.length > n; ++n) {
                var o = t.extend(!0, {}, ae.series);
                null != e[n].data ? (o.data = e[n].data, delete e[n].data, t.extend(!0, o, e[n]), e[n].data = o.data) : o.data = e[n], i.push(o)
            }
            return i
        }
        function d(t, e) {
            var i = t[e + "axis"];
            return "object" == typeof i && (i = i.n), "number" != typeof i && (i = 1), i
        }
        function p() {
            return t.grep(de.concat(pe), function (t) {
                return t
            })
        }
        function f(t) {
            var e, i, n = {};
            for (e = 0; de.length > e; ++e) i = de[e], i && i.used && (n["x" + i.n] = i.c2p(t.left));
            for (e = 0; pe.length > e; ++e) i = pe[e], i && i.used && (n["y" + i.n] = i.c2p(t.top));
            return void 0 !== n.x1 && (n.x = n.x1), void 0 !== n.y1 && (n.y = n.y1), n
        }
        function m(t) {
            var e, i, n, o = {};
            for (e = 0; de.length > e; ++e) if (i = de[e], i && i.used && (n = "x" + i.n, null == t[n] && 1 == i.n && (n = "x"), null != t[n])) {
                    o.left = i.p2c(t[n]);
                    break
                }
            for (e = 0; pe.length > e; ++e) if (i = pe[e], i && i.used && (n = "y" + i.n, null == t[n] && 1 == i.n && (n = "y"), null != t[n])) {
                    o.top = i.p2c(t[n]);
                    break
                }
            return o
        }
        function g(e, i) {
            return e[i - 1] || (e[i - 1] = {
                n: i,
                direction: e == de ? "x" : "y",
                options: t.extend(!0, {}, e == de ? ae.xaxis : ae.yaxis)
            }), e[i - 1]
        }
        function v() {
            var e, i = se.length,
                n = [],
                o = [];
            for (e = 0; se.length > e; ++e) {
                var s = se[e].color;
                null != s && (--i, "number" == typeof s ? o.push(s) : n.push(t.color.parse(se[e].color)))
            }
            for (e = 0; o.length > e; ++e) i = Math.max(i, o[e] + 1);
            var a = [],
                r = 0;
            for (e = 0; i > a.length;) {
                var l;
                l = ae.colors.length == e ? t.color.make(100, 100, 100) : t.color.parse(ae.colors[e]);
                var c = 1 == r % 2 ? -1 : 1;
                l.scale("rgb", 1 + .2 * c * Math.ceil(r / 2)), a.push(l), ++e, e >= ae.colors.length && (e = 0, ++r)
            }
            var h, u = 0;
            for (e = 0; se.length > e; ++e) {
                if (h = se[e], null == h.color ? (h.color = "" + a[u], ++u) : "number" == typeof h.color && (h.color = "" + a[h.color]), null == h.lines.show) {
                    var p, f = !0;
                    for (p in h) if (h[p] && h[p].show) {
                            f = !1;
                            break
                        }
                    f && (h.lines.show = !0)
                }
                h.xaxis = g(de, d(h, "x")), h.yaxis = g(pe, d(h, "y"))
            }
        }
        function y() {
            function e(t, e, i) {
                t.datamin > e && e != -g && (t.datamin = e), i > t.datamax && i != g && (t.datamax = i)
            }
            var i, n, o, s, a, l, c, h, u, d, f = Number.POSITIVE_INFINITY,
                m = Number.NEGATIVE_INFINITY,
                g = Number.MAX_VALUE;
            for (t.each(p(), function (t, e) {
                e.datamin = f, e.datamax = m, e.used = !1
            }), i = 0; se.length > i; ++i) a = se[i], a.datapoints = {
                    points: []
            }, r(xe.processRawData, [a, a.data, a.datapoints]);
            for (i = 0; se.length > i; ++i) {
                a = se[i];
                var v = a.data,
                    y = a.datapoints.format;
                if (y || (y = [], y.push({
                    x: !0,
                    number: !0,
                    required: !0
                }), y.push({
                    y: !0,
                    number: !0,
                    required: !0
                }), (a.bars.show || a.lines.show && a.lines.fill) && (y.push({
                    y: !0,
                    number: !0,
                    required: !1,
                    defaultValue: 0
                }), a.bars.horizontal && (delete y[y.length - 1].y, y[y.length - 1].x = !0)), a.datapoints.format = y), null == a.datapoints.pointsize) for (a.datapoints.pointsize = y.length, c = a.datapoints.pointsize, l = a.datapoints.points, insertSteps = a.lines.show && a.lines.steps, a.xaxis.used = a.yaxis.used = !0, n = o = 0; v.length > n; ++n, o += c) {
                        d = v[n];
                        var x = null == d;
                        if (!x) for (s = 0; c > s; ++s) h = d[s], u = y[s], u && (u.number && null != h && (h = +h, isNaN(h) ? h = null : 1 / 0 == h ? h = g : h == -1 / 0 && (h = -g)), null == h && (u.required && (x = !0), null != u.defaultValue && (h = u.defaultValue))), l[o + s] = h;
                        if (x) for (s = 0; c > s; ++s) h = l[o + s], null != h && (u = y[s], u.x && e(a.xaxis, h, h), u.y && e(a.yaxis, h, h)), l[o + s] = null;
                        else if (insertSteps && o > 0 && null != l[o - c] && l[o - c] != l[o] && l[o - c + 1] != l[o + 1]) {
                            for (s = 0; c > s; ++s) l[o + c + s] = l[o + s];
                            l[o + 1] = l[o - c + 1], o += c
                        }
                }
            }
            for (i = 0; se.length > i; ++i) a = se[i], r(xe.processDatapoints, [a, a.datapoints]);
            for (i = 0; se.length > i; ++i) {
                a = se[i], l = a.datapoints.points, c = a.datapoints.pointsize;
                var w = f,
                    b = f,
                    $ = m,
                    k = m;
                for (n = 0; l.length > n; n += c) if (null != l[n]) for (s = 0; c > s; ++s) h = l[n + s], u = y[s], u && h != g && h != -g && (u.x && (w > h && (w = h), h > $ && ($ = h)), u.y && (b > h && (b = h), h > k && (k = h)));
                if (a.bars.show) {
                    var C = "left" == a.bars.align ? 0 : -a.bars.barWidth / 2;
                    a.bars.horizontal ? (b += C, k += C + a.bars.barWidth) : (w += C, $ += C + a.bars.barWidth)
                }
                e(a.xaxis, w, $), e(a.yaxis, b, k)
            }
            t.each(p(), function (t, e) {
                e.datamin == f && (e.datamin = null), e.datamax == m && (e.datamax = null)
            })
        }
        function x(i, n) {
            var o = document.createElement("canvas");
            return o.className = n, o.width = me, o.height = ge, i || t(o).css({
                position: "absolute",
                left: 0,
                top: 0
            }), t(o).appendTo(e), o.getContext || (o = window.G_vmlCanvasManager.initElement(o)), o.getContext("2d").save(), o
        }
        function w() {
            if (me = e.width(), ge = e.height(), 0 >= me || 0 >= ge) throw "Invalid dimensions for plot, width = " + me + ", height = " + ge
        }
        function b(t) {
            t.width != me && (t.width = me), t.height != ge && (t.height = ge);
            var e = t.getContext("2d");
            e.restore(), e.save()
        }
        function $() {
            var i, n = e.children("canvas.base"),
                o = e.children("canvas.overlay");
            0 == n.length || 0 == o ? (e.html(""), e.css({
                padding: 0
            }), "static" == e.css("position") && e.css("position", "relative"), w(), re = x(!0, "base"), le = x(!1, "overlay"), i = !1) : (re = n.get(0), le = o.get(0), i = !0), he = re.getContext("2d"), ue = le.getContext("2d"), ce = t([le, re]), i && (e.data("plot").shutdown(), we.resize(), ue.clearRect(0, 0, me, ge), ce.unbind(), e.children().not([re, le]).remove()), e.data("plot", we)
        }
        function k() {
            ae.grid.hoverable && (ce.mousemove(X), ce.mouseleave(Y)), ae.grid.clickable && ce.click(Q), r(xe.bindEvents, [ce])
        }
        function C() {
            $e && clearTimeout($e), ce.unbind("mousemove", X), ce.unbind("mouseleave", Y), ce.unbind("click", Q), r(xe.shutdown, [ce])
        }
        function T(t) {
            function e(t) {
                return t
            }
            var i, n, o = t.options.transform || e,
                s = t.options.inverseTransform;
            "x" == t.direction ? (i = t.scale = ve / Math.abs(o(t.max) - o(t.min)), n = Math.min(o(t.max), o(t.min))) : (i = t.scale = ye / Math.abs(o(t.max) - o(t.min)), i = -i, n = Math.max(o(t.max), o(t.min))), t.p2c = o == e ? function (t) {
                return (t - n) * i
            } : function (t) {
                return (o(t) - n) * i
            }, t.c2p = s ? function (t) {
                return s(n + t / i)
            } : function (t) {
                return n + t / i
            }
        }
        function S(i) {
            function n(n, o) {
                return t('<div style="position:absolute;top:-10000px;' + o + 'font-size:smaller">' + '<div class="' + i.direction + "Axis " + i.direction + i.n + 'Axis">' + n.join("") + "</div></div>").appendTo(e)
            }
            var o, s, a, r = i.options,
                l = i.ticks || [],
                c = [],
                h = r.labelWidth,
                u = r.labelHeight;
            if ("x" == i.direction) {
                if (null == h && (h = Math.floor(me / (l.length > 0 ? l.length : 1))), null == u) {
                    for (c = [], o = 0; l.length > o; ++o) s = l[o].label, s && c.push('<div class="tickLabel" style="float:left;width:' + h + 'px">' + s + "</div>");
                    c.length > 0 && (c.push('<div style="clear:left"></div>'), a = n(c, "width:10000px;"), u = a.height(), a.remove())
                }
            } else if (null == h || null == u) {
                for (o = 0; l.length > o; ++o) s = l[o].label, s && c.push('<div class="tickLabel">' + s + "</div>");
                c.length > 0 && (a = n(c, ""), null == h && (h = a.children().width()), null == u && (u = a.find("div.tickLabel").height()), a.remove())
            }
            null == h && (h = 0), null == u && (u = 0), i.labelWidth = h, i.labelHeight = u
        }
        function M(e) {
            var i = e.labelWidth,
                n = e.labelHeight,
                o = e.options.position,
                s = e.options.tickLength,
                a = ae.grid.axisMargin,
                r = ae.grid.labelMargin,
                l = "x" == e.direction ? de : pe,
                c = t.grep(l, function (t) {
                    return t && t.options.position == o && t.reserveSpace
                });
            t.inArray(e, c) == c.length - 1 && (a = 0), null == s && (s = "full");
            var h = t.grep(l, function (t) {
                return t && t.reserveSpace
            }),
                u = 0 == t.inArray(e, h);
            u || "full" != s || (s = 5), isNaN(+s) || (r += +s), "x" == e.direction ? (n += r, "bottom" == o ? (fe.bottom += n + a, e.box = {
                top: ge - fe.bottom,
                height: n
            }) : (e.box = {
                top: fe.top + a,
                height: n
            }, fe.top += n + a)) : (i += r, "left" == o ? (e.box = {
                left: fe.left + a,
                width: i
            }, fe.left += i + a) : (fe.right += i + a, e.box = {
                left: me - fe.right,
                width: i
            })), e.position = o, e.tickLength = s, e.box.padding = r, e.innermost = u
        }
        function _(t) {
            "x" == t.direction ? (t.box.left = fe.left, t.box.width = ve) : (t.box.top = fe.top, t.box.height = ye)
        }
        function z() {
            var e, i = p();
            if (t.each(i, function (t, e) {
                e.show = e.options.show, null == e.show && (e.show = e.used), e.reserveSpace = e.show || e.options.reserveSpace, P(e)
            }), allocatedAxes = t.grep(i, function (t) {
                return t.reserveSpace
            }), fe.left = fe.right = fe.top = fe.bottom = 0, ae.grid.show) {
                for (t.each(allocatedAxes, function (t, e) {
                    I(e), F(e), L(e, e.ticks), S(e)
                }), e = allocatedAxes.length - 1; e >= 0; --e) M(allocatedAxes[e]);
                var n = ae.grid.minBorderMargin;
                if (null == n) for (n = 0, e = 0; se.length > e; ++e) n = Math.max(n, se[e].points.radius + se[e].points.lineWidth / 2);
                for (var o in fe) fe[o] += ae.grid.borderWidth, fe[o] = Math.max(n, fe[o])
            }
            ve = me - fe.left - fe.right, ye = ge - fe.bottom - fe.top, t.each(i, function (t, e) {
                T(e)
            }), ae.grid.show && (t.each(allocatedAxes, function (t, e) {
                _(e)
            }), W()), U()
        }
        function P(t) {
            var e = t.options,
                i = +(null != e.min ? e.min : t.datamin),
                n = +(null != e.max ? e.max : t.datamax),
                o = n - i;
            if (0 == o) {
                var s = 0 == n ? 1 : .01;
                null == e.min && (i -= s), (null == e.max || null != e.min) && (n += s)
            } else {
                var a = e.autoscaleMargin;
                null != a && (null == e.min && (i -= o * a, 0 > i && null != t.datamin && t.datamin >= 0 && (i = 0)), null == e.max && (n += o * a, n > 0 && null != t.datamax && 0 >= t.datamax && (n = 0)))
            }
            t.min = i, t.max = n
        }
        function I(e) {
            var i, o = e.options;
            i = "number" == typeof o.ticks && o.ticks > 0 ? o.ticks : .3 * Math.sqrt("x" == e.direction ? me : ge);
            var s, a, r, l, c, h, u, d = (e.max - e.min) / i;
            if ("time" == o.mode) {
                var p = {
                    second: 1e3,
                    minute: 6e4,
                    hour: 36e5,
                    day: 864e5,
                    month: 2592e6,
                    year: 1e3 * 525949.2 * 60
                }, f = [
                        [1, "second"],
                        [2, "second"],
                        [5, "second"],
                        [10, "second"],
                        [30, "second"],
                        [1, "minute"],
                        [2, "minute"],
                        [5, "minute"],
                        [10, "minute"],
                        [30, "minute"],
                        [1, "hour"],
                        [2, "hour"],
                        [4, "hour"],
                        [8, "hour"],
                        [12, "hour"],
                        [1, "day"],
                        [2, "day"],
                        [3, "day"],
                        [.25, "month"],
                        [.5, "month"],
                        [1, "month"],
                        [2, "month"],
                        [3, "month"],
                        [6, "month"],
                        [1, "year"]
                    ],
                    m = 0;
                null != o.minTickSize && (m = "number" == typeof o.tickSize ? o.tickSize : o.minTickSize[0] * p[o.minTickSize[1]]);
                for (var c = 0; f.length - 1 > c && !((f[c][0] * p[f[c][1]] + f[c + 1][0] * p[f[c + 1][1]]) / 2 > d && f[c][0] * p[f[c][1]] >= m); ++c);
                s = f[c][0], r = f[c][1], "year" == r && (h = Math.pow(10, Math.floor(Math.log(d / p.year) / Math.LN10)), u = d / p.year / h, s = 1.5 > u ? 1 : 3 > u ? 2 : 7.5 > u ? 5 : 10, s *= h), e.tickSize = o.tickSize || [s, r], a = function (t) {
                    var e = [],
                        i = t.tickSize[0],
                        o = t.tickSize[1],
                        s = new Date(t.min),
                        a = i * p[o];
                    "second" == o && s.setUTCSeconds(n(s.getUTCSeconds(), i)), "minute" == o && s.setUTCMinutes(n(s.getUTCMinutes(), i)), "hour" == o && s.setUTCHours(n(s.getUTCHours(), i)), "month" == o && s.setUTCMonth(n(s.getUTCMonth(), i)), "year" == o && s.setUTCFullYear(n(s.getUTCFullYear(), i)), s.setUTCMilliseconds(0), a >= p.minute && s.setUTCSeconds(0), a >= p.hour && s.setUTCMinutes(0), a >= p.day && s.setUTCHours(0), a >= 4 * p.day && s.setUTCDate(1), a >= p.year && s.setUTCMonth(0);
                    var r, l = 0,
                        c = Number.NaN;
                    do if (r = c, c = s.getTime(), e.push(c), "month" == o) if (1 > i) {
                                s.setUTCDate(1);
                                var h = s.getTime();
                                s.setUTCMonth(s.getUTCMonth() + 1);
                                var u = s.getTime();
                                s.setTime(c + l * p.hour + (u - h) * i), l = s.getUTCHours(), s.setUTCHours(0)
                            } else s.setUTCMonth(s.getUTCMonth() + i);
                            else "year" == o ? s.setUTCFullYear(s.getUTCFullYear() + i) : s.setTime(c + a); while (t.max > c && c != r);
                    return e
                }, l = function (e, i) {
                    var n = new Date(e);
                    if (null != o.timeformat) return t.plot.formatDate(n, o.timeformat, o.monthNames);
                    var s = i.tickSize[0] * p[i.tickSize[1]],
                        a = i.max - i.min,
                        r = o.twelveHourClock ? " %p" : "";
                    return fmt = p.minute > s ? "%h:%M:%S" + r : p.day > s ? 2 * p.day > a ? "%h:%M" + r : "%b %d %h:%M" + r : p.month > s ? "%b %d" : p.year > s ? p.year > a ? "%b" : "%b %y" : "%y", t.plot.formatDate(n, fmt, o.monthNames)
                }
            } else {
                var g = o.tickDecimals,
                    v = -Math.floor(Math.log(d) / Math.LN10);
                null != g && v > g && (v = g), h = Math.pow(10, -v), u = d / h, 1.5 > u ? s = 1 : 3 > u ? (s = 2, u > 2.25 && (null == g || g >= v + 1) && (s = 2.5, ++v)) : s = 7.5 > u ? 5 : 10, s *= h, null != o.minTickSize && o.minTickSize > s && (s = o.minTickSize), e.tickDecimals = Math.max(0, null != g ? g : v), e.tickSize = o.tickSize || s, a = function (t) {
                    var e, i = [],
                        o = n(t.min, t.tickSize),
                        s = 0,
                        a = Number.NaN;
                    do e = a, a = o + s * t.tickSize, i.push(a), ++s; while (t.max > a && a != e);
                    return i
                }, l = function (t, e) {
                    return t.toFixed(e.tickDecimals)
                }
            } if (null != o.alignTicksWithAxis) {
                var y = ("x" == e.direction ? de : pe)[o.alignTicksWithAxis - 1];
                if (y && y.used && y != e) {
                    var x = a(e);
                    if (x.length > 0 && (null == o.min && (e.min = Math.min(e.min, x[0])), null == o.max && x.length > 1 && (e.max = Math.max(e.max, x[x.length - 1]))), a = function (t) {
                        var e, i, n = [];
                        for (i = 0; y.ticks.length > i; ++i) e = (y.ticks[i].v - y.min) / (y.max - y.min), e = t.min + e * (t.max - t.min), n.push(e);
                        return n
                    }, "time" != e.mode && null == o.tickDecimals) {
                        var w = Math.max(0, -Math.floor(Math.log(d) / Math.LN10) + 1),
                            b = a(e);
                        b.length > 1 && /\..*0$/.test((b[1] - b[0]).toFixed(w)) || (e.tickDecimals = w)
                    }
                }
            }
            e.tickGenerator = a, e.tickFormatter = t.isFunction(o.tickFormatter) ? function (t, e) {
                return "" + o.tickFormatter(t, e)
            } : l
        }
        function F(e) {
            var i = e.options.ticks,
                n = [];
            null == i || "number" == typeof i && i > 0 ? n = e.tickGenerator(e) : i && (n = t.isFunction(i) ? i({
                min: e.min,
                max: e.max
            }) : i);
            var o, s;
            for (e.ticks = [], o = 0; n.length > o; ++o) {
                var a = null,
                    r = n[o];
                "object" == typeof r ? (s = +r[0], r.length > 1 && (a = r[1])) : s = +r, null == a && (a = e.tickFormatter(s, e)), isNaN(s) || e.ticks.push({
                    v: s,
                    label: a
                })
            }
        }
        function L(t, e) {
            t.options.autoscaleMargin && e.length > 0 && (null == t.options.min && (t.min = Math.min(t.min, e[0].v)), null == t.options.max && e.length > 1 && (t.max = Math.max(t.max, e[e.length - 1].v)))
        }
        function H() {
            he.clearRect(0, 0, me, ge);
            var t = ae.grid;
            t.show && t.backgroundColor && j(), t.show && !t.aboveData && D();
            for (var e = 0; se.length > e; ++e) r(xe.drawSeries, [he, se[e]]), N(se[e]);
            r(xe.draw, [he]), t.show && t.aboveData && D()
        }
        function A(t, e) {
            var n, o, s, a, r = p();
            for (i = 0; r.length > i; ++i) if (n = r[i], n.direction == e && (a = e + n.n + "axis", t[a] || 1 != n.n || (a = e + "axis"), t[a])) {
                    o = t[a].from, s = t[a].to;
                    break
                }
            if (t[a] || (n = "x" == e ? de[0] : pe[0], o = t[e + "1"], s = t[e + "2"]), null != o && null != s && o > s) {
                var l = o;
                o = s, s = l
            }
            return {
                from: o,
                to: s,
                axis: n
            }
        }
        function j() {
            he.save(), he.translate(fe.left, fe.top), he.fillStyle = oe(ae.grid.backgroundColor, ye, 0, "rgba(255, 255, 255, 0)"), he.fillRect(0, 0, ve, ye), he.restore()
        }
        function D() {
            var e;
            he.save(), he.translate(fe.left, fe.top);
            var i = ae.grid.markings;
            if (i) {
                if (t.isFunction(i)) {
                    var n = we.getAxes();
                    n.xmin = n.xaxis.min, n.xmax = n.xaxis.max, n.ymin = n.yaxis.min, n.ymax = n.yaxis.max, i = i(n)
                }
                for (e = 0; i.length > e; ++e) {
                    var o = i[e],
                        s = A(o, "x"),
                        a = A(o, "y");
                    null == s.from && (s.from = s.axis.min), null == s.to && (s.to = s.axis.max), null == a.from && (a.from = a.axis.min), null == a.to && (a.to = a.axis.max), s.to < s.axis.min || s.from > s.axis.max || a.to < a.axis.min || a.from > a.axis.max || (s.from = Math.max(s.from, s.axis.min), s.to = Math.min(s.to, s.axis.max), a.from = Math.max(a.from, a.axis.min), a.to = Math.min(a.to, a.axis.max), (s.from != s.to || a.from != a.to) && (s.from = s.axis.p2c(s.from), s.to = s.axis.p2c(s.to), a.from = a.axis.p2c(a.from), a.to = a.axis.p2c(a.to), s.from == s.to || a.from == a.to ? (he.beginPath(), he.strokeStyle = o.color || ae.grid.markingsColor, he.lineWidth = o.lineWidth || ae.grid.markingsLineWidth, he.moveTo(s.from, a.from), he.lineTo(s.to, a.to), he.stroke()) : (he.fillStyle = o.color || ae.grid.markingsColor, he.fillRect(s.from, a.to, s.to - s.from, a.from - a.to))))
                }
            }
            for (var n = p(), r = ae.grid.borderWidth, l = 0; n.length > l; ++l) {
                var c, h, u, d, f = n[l],
                    m = f.box,
                    g = f.tickLength;
                if (f.show && 0 != f.ticks.length) {
                    for (he.strokeStyle = f.options.tickColor || "" + t.color.parse(f.options.color).scale("a", .22), he.lineWidth = 1, "x" == f.direction ? (c = 0, h = "full" == g ? "top" == f.position ? 0 : ye : m.top - fe.top + ("top" == f.position ? m.height : 0)) : (h = 0, c = "full" == g ? "left" == f.position ? 0 : ve : m.left - fe.left + ("left" == f.position ? m.width : 0)), f.innermost || (he.beginPath(), u = d = 0, "x" == f.direction ? u = ve : d = ye, 1 == he.lineWidth && (c = Math.floor(c) + .5, h = Math.floor(h) + .5), he.moveTo(c, h), he.lineTo(c + u, h + d), he.stroke()), he.beginPath(), e = 0; f.ticks.length > e; ++e) {
                        var v = f.ticks[e].v;
                        u = d = 0, f.min > v || v > f.max || "full" == g && r > 0 && (v == f.min || v == f.max) || ("x" == f.direction ? (c = f.p2c(v), d = "full" == g ? -ye : g, "top" == f.position && (d = -d)) : (h = f.p2c(v), u = "full" == g ? -ve : g, "left" == f.position && (u = -u)), 1 == he.lineWidth && ("x" == f.direction ? c = Math.floor(c) + .5 : h = Math.floor(h) + .5), he.moveTo(c, h), he.lineTo(c + u, h + d))
                    }
                    he.stroke()
                }
            }
            r && (he.lineWidth = r, he.strokeStyle = ae.grid.borderColor, he.strokeRect(-r / 2, -r / 2, ve + r, ye + r)), he.restore()
        }
        function W() {
            e.find(".tickLabels").remove();
            for (var t = ['<div class="tickLabels" style="font-size:smaller">'], i = p(), n = 0; i.length > n; ++n) {
                var o = i[n],
                    s = o.box;
                if (o.show) {
                    t.push('<div class="' + o.direction + "Axis " + o.direction + o.n + 'Axis" style="color:' + o.options.color + '">');
                    for (var a = 0; o.ticks.length > a; ++a) {
                        var r = o.ticks[a];
                        if (!(!r.label || r.v < o.min || r.v > o.max)) {
                            var l, c = {};
                            "x" == o.direction ? (l = "center", c.left = Math.round(fe.left + o.p2c(r.v) - o.labelWidth / 2), "bottom" == o.position ? c.top = s.top + s.padding : c.bottom = ge - (s.top + s.height - s.padding)) : (c.top = Math.round(fe.top + o.p2c(r.v) - o.labelHeight / 2), "left" == o.position ? (c.right = me - (s.left + s.width - s.padding), l = "right") : (c.left = s.left + s.padding, l = "left")), c.width = o.labelWidth;
                            var h = ["position:absolute", "text-align:" + l];
                            for (var u in c) h.push(u + ":" + c[u] + "px");
                            t.push('<div class="tickLabel" style="' + h.join(";") + '">' + r.label + "</div>")
                        }
                    }
                    t.push("</div>")
                }
            }
            t.push("</div>"), e.append(t.join(""))
        }
        function N(t) {
            t.lines.show && R(t), t.bars.show && B(t), t.points.show && G(t)
        }
        function R(t) {
            function e(t, e, i, n, o) {
                var s = t.points,
                    a = t.pointsize,
                    r = null,
                    l = null;
                he.beginPath();
                for (var c = a; s.length > c; c += a) {
                    var h = s[c - a],
                        u = s[c - a + 1],
                        d = s[c],
                        p = s[c + 1];
                    if (null != h && null != d) {
                        if (p >= u && o.min > u) {
                            if (o.min > p) continue;
                            h = (o.min - u) / (p - u) * (d - h) + h, u = o.min
                        } else if (u >= p && o.min > p) {
                            if (o.min > u) continue;
                            d = (o.min - u) / (p - u) * (d - h) + h, p = o.min
                        }
                        if (u >= p && u > o.max) {
                            if (p > o.max) continue;
                            h = (o.max - u) / (p - u) * (d - h) + h, u = o.max
                        } else if (p >= u && p > o.max) {
                            if (u > o.max) continue;
                            d = (o.max - u) / (p - u) * (d - h) + h, p = o.max
                        }
                        if (d >= h && n.min > h) {
                            if (n.min > d) continue;
                            u = (n.min - h) / (d - h) * (p - u) + u, h = n.min
                        } else if (h >= d && n.min > d) {
                            if (n.min > h) continue;
                            p = (n.min - h) / (d - h) * (p - u) + u, d = n.min
                        }
                        if (h >= d && h > n.max) {
                            if (d > n.max) continue;
                            u = (n.max - h) / (d - h) * (p - u) + u, h = n.max
                        } else if (d >= h && d > n.max) {
                            if (h > n.max) continue;
                            p = (n.max - h) / (d - h) * (p - u) + u, d = n.max
                        }(h != r || u != l) && he.moveTo(n.p2c(h) + e, o.p2c(u) + i), r = d, l = p, he.lineTo(n.p2c(d) + e, o.p2c(p) + i)
                    }
                }
                he.stroke()
            }
            function i(t, e, i) {
                for (var n = t.points, o = t.pointsize, s = Math.min(Math.max(0, i.min), i.max), a = 0, r = !1, l = 1, c = 0, h = 0;;) {
                    if (o > 0 && a > n.length + o) break;
                    a += o;
                    var u = n[a - o],
                        d = n[a - o + l],
                        p = n[a],
                        f = n[a + l];
                    if (r) {
                        if (o > 0 && null != u && null == p) {
                            h = a, o = -o, l = 2;
                            continue
                        }
                        if (0 > o && a == c + o) {
                            he.fill(), r = !1, o = -o, l = 1, a = c = h + o;
                            continue
                        }
                    }
                    if (null != u && null != p) {
                        if (p >= u && e.min > u) {
                            if (e.min > p) continue;
                            d = (e.min - u) / (p - u) * (f - d) + d, u = e.min
                        } else if (u >= p && e.min > p) {
                            if (e.min > u) continue;
                            f = (e.min - u) / (p - u) * (f - d) + d, p = e.min
                        }
                        if (u >= p && u > e.max) {
                            if (p > e.max) continue;
                            d = (e.max - u) / (p - u) * (f - d) + d, u = e.max
                        } else if (p >= u && p > e.max) {
                            if (u > e.max) continue;
                            f = (e.max - u) / (p - u) * (f - d) + d, p = e.max
                        }
                        if (r || (he.beginPath(), he.moveTo(e.p2c(u), i.p2c(s)), r = !0), d >= i.max && f >= i.max) he.lineTo(e.p2c(u), i.p2c(i.max)), he.lineTo(e.p2c(p), i.p2c(i.max));
                        else if (i.min >= d && i.min >= f) he.lineTo(e.p2c(u), i.p2c(i.min)), he.lineTo(e.p2c(p), i.p2c(i.min));
                        else {
                            var m = u,
                                g = p;
                            f >= d && i.min > d && f >= i.min ? (u = (i.min - d) / (f - d) * (p - u) + u, d = i.min) : d >= f && i.min > f && d >= i.min && (p = (i.min - d) / (f - d) * (p - u) + u, f = i.min), d >= f && d > i.max && i.max >= f ? (u = (i.max - d) / (f - d) * (p - u) + u, d = i.max) : f >= d && f > i.max && i.max >= d && (p = (i.max - d) / (f - d) * (p - u) + u, f = i.max), u != m && he.lineTo(e.p2c(m), i.p2c(d)), he.lineTo(e.p2c(u), i.p2c(d)), he.lineTo(e.p2c(p), i.p2c(f)), p != g && (he.lineTo(e.p2c(p), i.p2c(f)), he.lineTo(e.p2c(g), i.p2c(f)))
                        }
                    }
                }
            }
            he.save(), he.translate(fe.left, fe.top), he.lineJoin = "round";
            var n = t.lines.lineWidth,
                o = t.shadowSize;
            if (n > 0 && o > 0) {
                he.lineWidth = o, he.strokeStyle = "rgba(0,0,0,0.1)";
                var s = Math.PI / 18;
                e(t.datapoints, Math.sin(s) * (n / 2 + o / 2), Math.cos(s) * (n / 2 + o / 2), t.xaxis, t.yaxis), he.lineWidth = o / 2, e(t.datapoints, Math.sin(s) * (n / 2 + o / 4), Math.cos(s) * (n / 2 + o / 4), t.xaxis, t.yaxis)
            }
            he.lineWidth = n, he.strokeStyle = t.color;
            var a = O(t.lines, t.color, 0, ye);
            a && (he.fillStyle = a, i(t.datapoints, t.xaxis, t.yaxis)), n > 0 && e(t.datapoints, 0, 0, t.xaxis, t.yaxis), he.restore()
        }
        function G(t) {
            function e(t, e, i, n, o, s, a, r) {
                for (var l = t.points, c = t.pointsize, h = 0; l.length > h; h += c) {
                    var u = l[h],
                        d = l[h + 1];
                    null == u || s.min > u || u > s.max || a.min > d || d > a.max || (he.beginPath(), u = s.p2c(u), d = a.p2c(d) + n, "circle" == r ? he.arc(u, d, e, 0, o ? Math.PI : 2 * Math.PI, !1) : r(he, u, d, e, o), he.closePath(), i && (he.fillStyle = i, he.fill()), he.stroke())
                }
            }
            he.save(), he.translate(fe.left, fe.top);
            var i = t.points.lineWidth,
                n = t.shadowSize,
                o = t.points.radius,
                s = t.points.symbol;
            if (i > 0 && n > 0) {
                var a = n / 2;
                he.lineWidth = a, he.strokeStyle = "rgba(0,0,0,0.1)", e(t.datapoints, o, null, a + a / 2, !0, t.xaxis, t.yaxis, s), he.strokeStyle = "rgba(0,0,0,0.2)", e(t.datapoints, o, null, a / 2, !0, t.xaxis, t.yaxis, s)
            }
            he.lineWidth = i, he.strokeStyle = t.color, e(t.datapoints, o, O(t.points, t.color), 0, !1, t.xaxis, t.yaxis, s), he.restore()
        }
        function E(t, e, i, n, o, s, a, r, l, c, h, u) {
            var d, p, f, m, g, v, y, x, w;
            h ? (x = v = y = !0, g = !1, d = i, p = t, m = e + n, f = e + o, d > p && (w = p, p = d, d = w, g = !0, v = !1)) : (g = v = y = !0, x = !1, d = t + n, p = t + o, f = i, m = e, f > m && (w = m, m = f, f = w, x = !0, y = !1)), r.min > p || d > r.max || l.min > m || f > l.max || (r.min > d && (d = r.min, g = !1), p > r.max && (p = r.max, v = !1), l.min > f && (f = l.min, x = !1), m > l.max && (m = l.max, y = !1), d = r.p2c(d), f = l.p2c(f), p = r.p2c(p), m = l.p2c(m), a && (c.beginPath(), c.moveTo(d, f), c.lineTo(d, m), c.lineTo(p, m), c.lineTo(p, f), c.fillStyle = a(f, m), c.fill()), u > 0 && (g || v || y || x) && (c.beginPath(), c.moveTo(d, f + s), g ? c.lineTo(d, m + s) : c.moveTo(d, m + s), y ? c.lineTo(p, m + s) : c.moveTo(p, m + s), v ? c.lineTo(p, f + s) : c.moveTo(p, f + s), x ? c.lineTo(d, f + s) : c.moveTo(d, f + s), c.stroke()))
        }
        function B(t) {
            function e(e, i, n, o, s, a, r) {
                for (var l = e.points, c = e.pointsize, h = 0; l.length > h; h += c) null != l[h] && E(l[h], l[h + 1], l[h + 2], i, n, o, s, a, r, he, t.bars.horizontal, t.bars.lineWidth)
            }
            he.save(), he.translate(fe.left, fe.top), he.lineWidth = t.bars.lineWidth, he.strokeStyle = t.color;
            var i = "left" == t.bars.align ? 0 : -t.bars.barWidth / 2,
                n = t.bars.fill ? function (e, i) {
                    return O(t.bars, t.color, e, i)
                } : null;
            e(t.datapoints, i, i + t.bars.barWidth, 0, n, t.xaxis, t.yaxis), he.restore()
        }
        function O(e, i, n, o) {
            var s = e.fill;
            if (!s) return null;
            if (e.fillColor) return oe(e.fillColor, n, o, i);
            var a = t.color.parse(i);
            return a.a = "number" == typeof s ? s : .4, a.normalize(), "" + a
        }
        function U() {
            if (e.find(".legend").remove(), ae.legend.show) {
                for (var i, n, o = [], s = !1, a = ae.legend.labelFormatter, r = 0; se.length > r; ++r) i = se[r], n = i.label, n && (0 == r % ae.legend.noColumns && (s && o.push("</tr>"), o.push("<tr>"), s = !0), a && (n = a(n, i)), o.push('<td class="legendColorBox"><div style="border:1px solid ' + ae.legend.labelBoxBorderColor + ';padding:1px"><div style="width:4px;height:0;border:5px solid ' + i.color + ';overflow:hidden"></div></div></td>' + '<td class="legendLabel">' + n + "</td>"));
                if (s && o.push("</tr>"), 0 != o.length) {
                    var l = '<table style="font-size:smaller;color:' + ae.grid.color + '">' + o.join("") + "</table>";
                    if (null != ae.legend.container) t(ae.legend.container).html(l);
                    else {
                        var c = "",
                            h = ae.legend.position,
                            u = ae.legend.margin;
                        null == u[0] && (u = [u, u]), "n" == h.charAt(0) ? c += "top:" + (u[1] + fe.top) + "px;" : "s" == h.charAt(0) && (c += "bottom:" + (u[1] + fe.bottom) + "px;"), "e" == h.charAt(1) ? c += "right:" + (u[0] + fe.right) + "px;" : "w" == h.charAt(1) && (c += "left:" + (u[0] + fe.left) + "px;");
                        var d = t('<div class="legend">' + l.replace('style="', 'style="position:absolute;' + c + ";") + "</div>").appendTo(e);
                        if (0 != ae.legend.backgroundOpacity) {
                            var p = ae.legend.backgroundColor;
                            null == p && (p = ae.grid.backgroundColor, p = p && "string" == typeof p ? t.color.parse(p) : t.color.extract(d, "background-color"), p.a = 1, p = "" + p);
                            var f = d.children();
                            t('<div style="position:absolute;width:' + f.width() + "px;height:" + f.height() + "px;" + c + "background-color:" + p + ';"> </div>').prependTo(d).css("opacity", ae.legend.backgroundOpacity)
                        }
                    }
                }
            }
        }
        function q(t, e, i) {
            var n, o, s = ae.grid.mouseActiveRadius,
                a = s * s + 1,
                r = null;
            for (n = se.length - 1; n >= 0; --n) if (i(se[n])) {
                    var l = se[n],
                        c = l.xaxis,
                        h = l.yaxis,
                        u = l.datapoints.points,
                        d = l.datapoints.pointsize,
                        p = c.c2p(t),
                        f = h.c2p(e),
                        m = s / c.scale,
                        g = s / h.scale;
                    if (c.options.inverseTransform && (m = Number.MAX_VALUE), h.options.inverseTransform && (g = Number.MAX_VALUE), l.lines.show || l.points.show) for (o = 0; u.length > o; o += d) {
                            var v = u[o],
                                y = u[o + 1];
                            if (null != v && !(v - p > m || -m > v - p || y - f > g || -g > y - f)) {
                                var x = Math.abs(c.p2c(v) - t),
                                    w = Math.abs(h.p2c(y) - e),
                                    b = x * x + w * w;
                                a > b && (a = b, r = [n, o / d])
                            }
                    }
                    if (l.bars.show && !r) {
                        var $ = "left" == l.bars.align ? 0 : -l.bars.barWidth / 2,
                            k = $ + l.bars.barWidth;
                        for (o = 0; u.length > o; o += d) {
                            var v = u[o],
                                y = u[o + 1],
                                C = u[o + 2];
                            null != v && (se[n].bars.horizontal ? Math.max(C, v) >= p && p >= Math.min(C, v) && f >= y + $ && y + k >= f : p >= v + $ && v + k >= p && f >= Math.min(C, y) && Math.max(C, y) >= f) && (r = [n, o / d])
                        }
                    }
                }
            return r ? (n = r[0], o = r[1], d = se[n].datapoints.pointsize, {
                datapoint: se[n].datapoints.points.slice(o * d, (o + 1) * d),
                dataIndex: o,
                series: se[n],
                seriesIndex: n
            }) : null
        }
        function X(t) {
            ae.grid.hoverable && V("plothover", t, function (t) {
                return 0 != t.hoverable
            })
        }
        function Y(t) {
            ae.grid.hoverable && V("plothover", t, function () {
                return !1
            })
        }
        function Q(t) {
            V("plotclick", t, function (t) {
                return 0 != t.clickable
            })
        }
        function V(t, i, n) {
            var o = ce.offset(),
                s = i.pageX - o.left - fe.left,
                a = i.pageY - o.top - fe.top,
                r = f({
                    left: s,
                    top: a
                });
            r.pageX = i.pageX, r.pageY = i.pageY;
            var l = q(s, a, n);
            if (l && (l.pageX = parseInt(l.series.xaxis.p2c(l.datapoint[0]) + o.left + fe.left), l.pageY = parseInt(l.series.yaxis.p2c(l.datapoint[1]) + o.top + fe.top)), ae.grid.autoHighlight) {
                for (var c = 0; be.length > c; ++c) {
                    var h = be[c];
                    h.auto != t || l && h.series == l.series && h.point[0] == l.datapoint[0] && h.point[1] == l.datapoint[1] || te(h.series, h.point)
                }
                l && Z(l.series, l.datapoint, t)
            }
            e.trigger(t, [r, l])
        }
        function J() {
            $e || ($e = setTimeout(K, 30))
        }
        function K() {
            $e = null, ue.save(), ue.clearRect(0, 0, me, ge), ue.translate(fe.left, fe.top);
            var t, e;
            for (t = 0; be.length > t; ++t) e = be[t], e.series.bars.show ? ne(e.series, e.point) : ie(e.series, e.point);
            ue.restore(), r(xe.drawOverlay, [ue])
        }
        function Z(t, e, i) {
            if ("number" == typeof t && (t = se[t]), "number" == typeof e) {
                var n = t.datapoints.pointsize;
                e = t.datapoints.points.slice(n * e, n * (e + 1))
            }
            var o = ee(t, e); - 1 == o ? (be.push({
                series: t,
                point: e,
                auto: i
            }), J()) : i || (be[o].auto = !1)
        }
        function te(t, e) {
            null == t && null == e && (be = [], J()), "number" == typeof t && (t = se[t]), "number" == typeof e && (e = t.data[e]);
            var i = ee(t, e); - 1 != i && (be.splice(i, 1), J())
        }
        function ee(t, e) {
            for (var i = 0; be.length > i; ++i) {
                var n = be[i];
                if (n.series == t && n.point[0] == e[0] && n.point[1] == e[1]) return i
            }
            return -1
        }
        function ie(e, i) {
            var n = i[0],
                o = i[1],
                s = e.xaxis,
                a = e.yaxis;
            if (!(s.min > n || n > s.max || a.min > o || o > a.max)) {
                var r = e.points.radius + e.points.lineWidth / 2;
                ue.lineWidth = r, ue.strokeStyle = "" + t.color.parse(e.color).scale("a", .5);
                var l = 1.5 * r,
                    n = s.p2c(n),
                    o = a.p2c(o);
                ue.beginPath(), "circle" == e.points.symbol ? ue.arc(n, o, l, 0, 2 * Math.PI, !1) : e.points.symbol(ue, n, o, l, !1), ue.closePath(), ue.stroke()
            }
        }
        function ne(e, i) {
            ue.lineWidth = e.bars.lineWidth, ue.strokeStyle = "" + t.color.parse(e.color).scale("a", .5);
            var n = "" + t.color.parse(e.color).scale("a", .5),
                o = "left" == e.bars.align ? 0 : -e.bars.barWidth / 2;
            E(i[0], i[1], i[2] || 0, o, o + e.bars.barWidth, 0, function () {
                return n
            }, e.xaxis, e.yaxis, ue, e.bars.horizontal, e.bars.lineWidth)
        }
        function oe(e, i, n, o) {
            if ("string" == typeof e) return e;
            for (var s = he.createLinearGradient(0, n, 0, i), a = 0, r = e.colors.length; r > a; ++a) {
                var l = e.colors[a];
                if ("string" != typeof l) {
                    var c = t.color.parse(o);
                    null != l.brightness && (c = c.scale("rgb", l.brightness)), null != l.opacity && (c.a *= l.opacity), l = "" + c
                }
                s.addColorStop(a / (r - 1), l)
            }
            return s
        }
        var se = [],
            ae = {
                colors: ["#edc240", "#afd8f8", "#cb4b4b", "#4da74d", "#9440ed"],
                legend: {
                    show: !0,
                    noColumns: 1,
                    labelFormatter: null,
                    labelBoxBorderColor: "#ccc",
                    container: null,
                    position: "ne",
                    margin: 5,
                    backgroundColor: null,
                    backgroundOpacity: .85
                },
                xaxis: {
                    show: null,
                    position: "bottom",
                    mode: null,
                    color: null,
                    tickColor: null,
                    transform: null,
                    inverseTransform: null,
                    min: null,
                    max: null,
                    autoscaleMargin: null,
                    ticks: null,
                    tickFormatter: null,
                    labelWidth: null,
                    labelHeight: null,
                    reserveSpace: null,
                    tickLength: null,
                    alignTicksWithAxis: null,
                    tickDecimals: null,
                    tickSize: null,
                    minTickSize: null,
                    monthNames: null,
                    timeformat: null,
                    twelveHourClock: !1
                },
                yaxis: {
                    autoscaleMargin: .02,
                    position: "left"
                },
                xaxes: [],
                yaxes: [],
                series: {
                    points: {
                        show: !1,
                        radius: 3,
                        lineWidth: 2,
                        fill: !0,
                        fillColor: "#ffffff",
                        symbol: "circle"
                    },
                    lines: {
                        lineWidth: 2,
                        fill: !1,
                        fillColor: null,
                        steps: !1
                    },
                    bars: {
                        show: !1,
                        lineWidth: 2,
                        barWidth: 1,
                        fill: !0,
                        fillColor: null,
                        align: "left",
                        horizontal: !1
                    },
                    shadowSize: 3
                },
                grid: {
                    show: !0,
                    aboveData: !1,
                    color: "#545454",
                    backgroundColor: null,
                    borderColor: null,
                    tickColor: null,
                    labelMargin: 5,
                    axisMargin: 8,
                    borderWidth: 2,
                    minBorderMargin: null,
                    markings: null,
                    markingsColor: "#f4f4f4",
                    markingsLineWidth: 2,
                    clickable: !1,
                    hoverable: !1,
                    autoHighlight: !0,
                    mouseActiveRadius: 10
                },
                hooks: {}
            }, re = null,
            le = null,
            ce = null,
            he = null,
            ue = null,
            de = [],
            pe = [],
            fe = {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            }, me = 0,
            ge = 0,
            ve = 0,
            ye = 0,
            xe = {
                processOptions: [],
                processRawData: [],
                processDatapoints: [],
                drawSeries: [],
                draw: [],
                bindEvents: [],
                drawOverlay: [],
                shutdown: []
            }, we = this;
        we.setData = h, we.setupGrid = z, we.draw = H, we.getPlaceholder = function () {
            return e
        }, we.getCanvas = function () {
            return re
        }, we.getPlotOffset = function () {
            return fe
        }, we.width = function () {
            return ve
        }, we.height = function () {
            return ye
        }, we.offset = function () {
            var t = ce.offset();
            return t.left += fe.left, t.top += fe.top, t
        }, we.getData = function () {
            return se
        }, we.getAxes = function () {
            var e = {};
            return t.each(de.concat(pe), function (t, i) {
                i && (e[i.direction + (1 != i.n ? i.n : "") + "axis"] = i)
            }), e
        }, we.getXAxes = function () {
            return de
        }, we.getYAxes = function () {
            return pe
        }, we.c2p = f, we.p2c = m, we.getOptions = function () {
            return ae
        }, we.highlight = Z, we.unhighlight = te, we.triggerRedrawOverlay = J, we.pointOffset = function (t) {
            return {
                left: parseInt(de[d(t, "x") - 1].p2c(+t.x) + fe.left),
                top: parseInt(pe[d(t, "y") - 1].p2c(+t.y) + fe.top)
            }
        }, we.shutdown = C, we.resize = function () {
            w(), b(re), b(le)
        }, we.hooks = xe, l(we), c(s), $(), h(o), z(), H(), k();
        var be = [],
            $e = null
    }
    function n(t, e) {
        return e * Math.floor(t / e)
    }
    t.plot = function (i, n, o) {
        var s = new e(t(i), n, o, t.plot.plugins);
        return s
    }, t.plot.version = "0.7", t.plot.plugins = [], t.plot.formatDate = function (t, e, i) {
        var n = function (t) {
            return t = "" + t, 1 == t.length ? "0" + t : t
        }, o = [],
            s = !1,
            a = !1,
            r = t.getUTCHours(),
            l = 12 > r;
        null == i && (i = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]), -1 != e.search(/%p|%P/) && (r > 12 ? r -= 12 : 0 == r && (r = 12));
        for (var c = 0; e.length > c; ++c) {
            var h = e.charAt(c);
            if (s) {
                switch (h) {
                case "h":
                    h = "" + r;
                    break;
                case "H":
                    h = n(r);
                    break;
                case "M":
                    h = n(t.getUTCMinutes());
                    break;
                case "S":
                    h = n(t.getUTCSeconds());
                    break;
                case "d":
                    h = "" + t.getUTCDate();
                    break;
                case "m":
                    h = "" + (t.getUTCMonth() + 1);
                    break;
                case "y":
                    h = "" + t.getUTCFullYear();
                    break;
                case "b":
                    h = "" + i[t.getUTCMonth()];
                    break;
                case "p":
                    h = l ? "am" : "pm";
                    break;
                case "P":
                    h = l ? "AM" : "PM";
                    break;
                case "0":
                    h = "", a = !0
                }
                h && a && (h = n(h), a = !1), o.push(h), a || (s = !1)
            } else "%" == h ? s = !0 : o.push(h)
        }
        return o.join("")
    }
}(jQuery),
function (t, e, i) {
    function n() {
        o = e[r](function () {
            s.each(function () {
                var e = t(this),
                    i = e.width(),
                    n = e.height(),
                    o = t.data(this, c);
                (i !== o.w || n !== o.h) && e.trigger(l, [o.w = i, o.h = n])
            }), n()
        }, a[h])
    }
    var o, s = t([]),
        a = t.resize = t.extend(t.resize, {}),
        r = "setTimeout",
        l = "resize",
        c = l + "-special-event",
        h = "delay",
        u = "throttleWindow";
    a[h] = 250, a[u] = !0, t.event.special[l] = {
        setup: function () {
            if (!a[u] && this[r]) return !1;
            var e = t(this);
            s = s.add(e), t.data(this, c, {
                w: e.width(),
                h: e.height()
            }), 1 === s.length && n()
        },
        teardown: function () {
            if (!a[u] && this[r]) return !1;
            var e = t(this);
            s = s.not(e), e.removeData(c), s.length || clearTimeout(o)
        },
        add: function (e) {
            function n(e, n, s) {
                var a = t(this),
                    r = t.data(this, c);
                r.w = n !== i ? n : a.width(), r.h = s !== i ? s : a.height(), o.apply(this, arguments)
            }
            if (!a[u] && this[r]) return !1;
            var o;
            return t.isFunction(e) ? (o = e, n) : (o = e.handler, e.handler = n, void 0)
        }
    }
}(jQuery, this),
function (t) {
    function e(t) {
        function e() {
            var e = t.getPlaceholder();
            0 != e.width() && 0 != e.height() && (t.resize(), t.setupGrid(), t.draw())
        }
        function i(t) {
            t.getPlaceholder().resize(e)
        }
        function n(t) {
            t.getPlaceholder().unbind("resize", e)
        }
        t.hooks.bindEvents.push(i), t.hooks.shutdown.push(n)
    }
    var i = {};
    t.plot.plugins.push({
        init: e,
        options: i,
        name: "resize",
        version: "1.0"
    })
}(jQuery), jQuery.fn.hammer = function (t) {
    return this.each(function () {
        var e = new Hammer(this, t),
            i = jQuery(this);
        i.data("hammer", e);
        for (var n = ["hold", "tap", "doubletap", "transformstart", "transform", "transformend", "dragstart", "drag", "dragend", "swipe", "release"], o = 0; n.length > o; o++) e["on" + n[o]] = function (t, e) {
                return function (i) {
                    t.trigger(jQuery.Event(e, i))
                }
        }(i, n[o])
    })
},
function (t) {
    function e(e, n, o) {
        var s = this;
        return this.on("click.pjax", e, function (e) {
            var a = t.extend({}, d(n, o));
            a.container || (a.container = t(this).attr("data-pjax") || s), i(e, a)
        })
    }
    function i(e, i, n) {
        n = d(i, n);
        var s = e.currentTarget;
        if ("A" !== s.tagName.toUpperCase()) throw "$.fn.pjax or $.pjax.click requires an anchor element";
        if (!(e.which > 1 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || location.protocol !== s.protocol || location.host !== s.host || s.hash && s.href.replace(s.hash, "") === location.href.replace(location.hash, "") || s.href === location.href + "#")) {
            var a = {
                url: s.href,
                container: t(s).attr("data-pjax"),
                target: s,
                fragment: null
            };
            o(t.extend({}, a, n)), e.preventDefault()
        }
    }
    function n(e, i, n) {
        n = d(i, n);
        var s = e.currentTarget;
        if ("FORM" !== s.tagName.toUpperCase()) throw "$.pjax.submit requires a form element";
        var a = {
            type: s.method,
            url: s.action,
            data: t(s).serializeArray(),
            container: t(s).attr("data-pjax"),
            target: s,
            fragment: null
        };
        o(t.extend({}, a, n)), e.preventDefault()
    }
    function o(e) {
        function i(e, i) {
            var o = t.Event(e, {
                relatedTarget: n
            });
            return r.trigger(o, i), !o.isDefaultPrevented()
        }
        e = t.extend(!0, {}, t.ajaxSettings, o.defaults, e), t.isFunction(e.url) && (e.url = e.url());
        var n = e.target,
            s = u(e.url).hash,
            r = e.context = p(e.container);
        e.data || (e.data = {}), e.data._pjax = r.selector;
        var l;
        e.beforeSend = function (t, n) {
            return "GET" !== n.type && (n.timeout = 0), t.setRequestHeader("X-PJAX", "true"), t.setRequestHeader("X-PJAX-Container", r.selector), i("pjax:beforeSend", [t, n]) ? (n.timeout > 0 && (l = setTimeout(function () {
                i("pjax:timeout", [t, e]) && t.abort("timeout")
            }, n.timeout), n.timeout = 0), e.requestUrl = u(n.url).href, void 0) : !1
        }, e.complete = function (t, n) {
            l && clearTimeout(l), i("pjax:complete", [t, n, e]), i("pjax:end", [t, e])
        }, e.error = function (t, n, o) {
            var s = g("", t, e),
                r = i("pjax:error", [t, n, o, e]);
            "GET" == e.type && "abort" !== n && r && a(s.url)
        }, e.success = function (n, l, h) {
            var d = g(n, h, e);
            if (!d.contents) return a(d.url), void 0;
            if (o.state = {
                id: e.id || c(),
                url: d.url,
                title: d.title,
                container: r.selector,
                fragment: e.fragment,
                timeout: e.timeout
            }, (e.push || e.replace) && window.history.replaceState(o.state, d.title, d.url), d.title && (document.title = d.title), r.html(d.contents), "number" == typeof e.scrollTo && t(window).scrollTop(e.scrollTo), (e.replace || e.push) && window._gaq && _gaq.push(["_trackPageview"]), "" !== s) {
                var p = u(d.url);
                p.hash = s, o.state.url = p.href, window.history.replaceState(o.state, d.title, p.href);
                var f = t(p.hash);
                f.length && t(window).scrollTop(f.offset().top)
            }
            i("pjax:success", [n, l, h, e])
        }, o.state || (o.state = {
            id: c(),
            url: window.location.href,
            title: document.title,
            container: r.selector,
            fragment: e.fragment,
            timeout: e.timeout
        }, window.history.replaceState(o.state, document.title));
        var d = o.xhr;
        d && 4 > d.readyState && (d.onreadystatechange = t.noop, d.abort()), o.options = e;
        var d = o.xhr = t.ajax(e);
        return d.readyState > 0 && (e.push && !e.replace && (v(o.state.id, r.clone().contents()), window.history.pushState(null, "", h(e.requestUrl))), i("pjax:start", [d, e]), i("pjax:send", [d, e])), o.xhr
    }
    function s(e, i) {
        var n = {
            url: window.location.href,
            push: !1,
            replace: !0,
            scrollTo: !1
        };
        return o(t.extend(n, d(e, i)))
    }
    function a(t) {
        window.history.replaceState(null, "", "#"), window.location.replace(t)
    }
    function r(e) {
        var i = e.state;
        if (i && i.container) {
            var n = t(i.container);
            if (n.length) {
                var s = b[i.id];
                if (!o.state) return o.state = i, void 0;
                var r = o.state.id < i.id ? "forward" : "back";
                y(r, o.state.id, n.clone().contents());
                var l = t.Event("pjax:popstate", {
                    state: i,
                    direction: r
                });
                n.trigger(l);
                var c = {
                    id: i.id,
                    url: i.url,
                    container: n,
                    push: !1,
                    fragment: i.fragment,
                    timeout: i.timeout,
                    scrollTo: !1
                };
                s ? (n.trigger("pjax:start", [null, c]), i.title && (document.title = i.title), n.html(s), o.state = i, n.trigger("pjax:end", [null, c])) : o(c), n[0].offsetHeight
            } else a(location.href)
        }
    }
    function l(e) {
        var i = t.isFunction(e.url) ? e.url() : e.url,
            n = e.type ? e.type.toUpperCase() : "GET",
            o = t("<form>", {
                method: "GET" === n ? "GET" : "POST",
                action: i,
                style: "display:none"
            });
        "GET" !== n && "POST" !== n && o.append(t("<input>", {
            type: "hidden",
            name: "_method",
            value: n.toLowerCase()
        }));
        var s = e.data;
        if ("string" == typeof s) t.each(s.split("&"), function (e, i) {
                var n = i.split("=");
                o.append(t("<input>", {
                    type: "hidden",
                    name: n[0],
                    value: n[1]
                }))
            });
        else if ("object" == typeof s) for (key in s) o.append(t("<input>", {
                    type: "hidden",
                    name: key,
                    value: s[key]
                }));
        t(document.body).append(o), o.submit()
    }
    function c() {
        return (new Date).getTime()
    }
    function h(t) {
        return t.replace(/\?_pjax=[^&]+&?/, "?").replace(/_pjax=[^&]+&?/, "").replace(/[\?&]$/, "")
    }
    function u(t) {
        var e = document.createElement("a");
        return e.href = t, e
    }
    function d(e, i) {
        return e && i ? i.container = e : i = t.isPlainObject(e) ? e : {
            container: e
        }, i.container && (i.container = p(i.container)), i
    }
    function p(e) {
        if (e = t(e), e.length) {
            if ("" !== e.selector && e.context === document) return e;
            if (e.attr("id")) return t("#" + e.attr("id"));
            throw "cant get selector for pjax container!"
        }
        throw "no pjax container for " + e.selector
    }
    function f(t, e) {
        return t.filter(e).add(t.find(e))
    }
    function m(e) {
        return t.parseHTML(e, document, !0)
    }
    function g(e, i, n) {
        var o = {};
        if (o.url = h(i.getResponseHeader("X-PJAX-URL") || n.requestUrl), /<html/i.test(e)) var s = t(m(e.match(/<head[^>]*>([\s\S.]*)<\/head>/i)[0])),
        a = t(m(e.match(/<body[^>]*>([\s\S.]*)<\/body>/i)[0]));
        else var s = a = t(m(e)); if (0 === a.length) return o;
        if (o.title = f(s, "title").last().text(), n.fragment) {
            if ("body" === n.fragment) var r = a;
            else var r = f(a, n.fragment).first();
            r.length && (o.contents = r.contents(), o.title || (o.title = r.attr("title") || r.data("title")))
        } else /<html/i.test(e) || (o.contents = a);
        return o.contents && (o.contents = o.contents.not("title"), o.contents.find("title").remove()), o.title && (o.title = t.trim(o.title)), o
    }
    function v(t, e) {
        for (b[t] = e, k.push(t); $.length;) delete b[$.shift()];
        for (; k.length > o.defaults.maxCacheLength;) delete b[k.shift()]
    }
    function y(t, e, i) {
        var n, o;
        b[e] = i, "forward" === t ? (n = k, o = $) : (n = $, o = k), n.push(e), (e = o.pop()) && delete b[e]
    }
    function x() {
        t.fn.pjax = e, t.pjax = o, t.pjax.enable = t.noop, t.pjax.disable = w, t.pjax.click = i, t.pjax.submit = n, t.pjax.reload = s, t.pjax.defaults = {
            timeout: 650,
            push: !0,
            replace: !1,
            type: "GET",
            dataType: "html",
            scrollTo: 0,
            maxCacheLength: 20
        }, t(window).bind("popstate.pjax", r)
    }
    function w() {
        t.fn.pjax = function () {
            return this
        }, t.pjax = l, t.pjax.enable = x, t.pjax.disable = t.noop, t.pjax.click = t.noop, t.pjax.submit = t.noop, t.pjax.reload = function () {
            window.location.reload()
        }, t(window).unbind("popstate.pjax", r)
    }
    var b = {}, $ = [],
        k = [];
    0 > t.inArray("state", t.event.props) && t.event.props.push("state"), t.support.pjax = window.history && window.history.pushState && window.history.replaceState && !navigator.userAgent.match(/((iPod|iPhone|iPad).+\bOS\s+[1-4]|WebApps\/.+CFNetwork)/), t.support.pjax ? x() : w()
}(jQuery),
function (t) {
    function e(t) {
        return "object" == typeof t ? t : {
            top: t,
            left: t
        }
    }
    var i = t.scrollTo = function (e, i, n) {
        t(window).scrollTo(e, i, n)
    };
    i.defaults = {
        axis: "xy",
        duration: parseFloat(t.fn.jquery) >= 1.3 ? 0 : 1,
        limit: !0
    }, i.window = function () {
        return t(window)._scrollable()
    }, t.fn._scrollable = function () {
        return this.map(function () {
            var e = this,
                i = !e.nodeName || -1 != t.inArray(e.nodeName.toLowerCase(), ["iframe", "#document", "html", "body"]);
            if (!i) return e;
            var n = (e.contentWindow || e).document || e.ownerDocument || e;
            return /webkit/i.test(navigator.userAgent) || "BackCompat" == n.compatMode ? n.body : n.documentElement
        })
    }, t.fn.scrollTo = function (n, o, s) {
        return "object" == typeof o && (s = o, o = 0), "function" == typeof s && (s = {
            onAfter: s
        }), "max" == n && (n = 9e9), s = t.extend({}, i.defaults, s), o = o || s.duration, s.queue = s.queue && s.axis.length > 1, s.queue && (o /= 2), s.offset = e(s.offset), s.over = e(s.over), this._scrollable().each(function () {
            function a(t) {
                c.animate(u, o, s.easing, t && function () {
                    t.call(this, n, s)
                })
            }
            if (null != n) {
                var r, l = this,
                    c = t(l),
                    h = n,
                    u = {}, d = c.is("html,body");
                switch (typeof h) {
                case "number":
                case "string":
                    if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(h)) {
                        h = e(h);
                        break
                    }
                    if (h = t(h, this), !h.length) return;
                case "object":
                    (h.is || h.style) && (r = (h = t(h)).offset())
                }
                t.each(s.axis.split(""), function (t, e) {
                    var n = "x" == e ? "Left" : "Top",
                        o = n.toLowerCase(),
                        p = "scroll" + n,
                        f = l[p],
                        m = i.max(l, e);
                    if (r) u[p] = r[o] + (d ? 0 : f - c.offset()[o]), s.margin && (u[p] -= parseInt(h.css("margin" + n)) || 0, u[p] -= parseInt(h.css("border" + n + "Width")) || 0), u[p] += s.offset[o] || 0, s.over[o] && (u[p] += h["x" == e ? "width" : "height"]() * s.over[o]);
                    else {
                        var g = h[o];
                        u[p] = g.slice && "%" == g.slice(-1) ? parseFloat(g) / 100 * m : g
                    }
                    s.limit && /^\d+$/.test(u[p]) && (u[p] = 0 >= u[p] ? 0 : Math.min(u[p], m)), !t && s.queue && (f != u[p] && a(s.onAfterFirst), delete u[p])
                }), a(s.onAfter)
            }
        }).end()
    }, i.max = function (e, i) {
        var n = "x" == i ? "Width" : "Height",
            o = "scroll" + n;
        if (!t(e).is("html,body")) return e[o] - t(e)[n.toLowerCase()]();
        var s = "client" + n,
            a = e.ownerDocument.documentElement,
            r = e.ownerDocument.body;
        return Math.max(a[o], r[o]) - Math.min(a[s], r[s])
    }
}(jQuery),
function (t, e, i) {
    t.fn.simplyScroll = function (e) {
        return this.each(function () {
            new t.simplyScroll(this, e)
        })
    };
    var n = {
        customClass: "simply-scroll",
        frameRate: 24,
        speed: 1,
        orientation: "horizontal",
        auto: !0,
        autoMode: "loop",
        manualMode: "end",
        direction: "forwards",
        pauseOnHover: !0,
        pauseOnTouch: !0,
        pauseButton: !1,
        startOnLoad: !1
    };
    t.simplyScroll = function (i, o) {
        var s = this;
        this.o = t.extend({}, n, o || {}), this.isAuto = this.o.auto !== !1 && null !== this.o.autoMode.match(/^loop|bounce$/), this.isHorizontal = null !== this.o.orientation.match(/^horizontal|vertical$/) && this.o.orientation == n.orientation, this.isRTL = this.isHorizontal && "rtl" == t("html").attr("dir"), this.isForwards = !this.isAuto || this.isAuto && null !== this.o.direction.match(/^forwards|backwards$/) && this.o.direction == n.direction && !this.isRTL, this.isLoop = this.isAuto && "loop" == this.o.autoMode || !this.isAuto && "loop" == this.o.manualMode, this.supportsTouch = "createTouch" in document, this.events = this.supportsTouch ? {
            start: "touchstart MozTouchDown",
            move: "touchmove MozTouchMove",
            end: "touchend touchcancel MozTouchRelease"
        } : {
            start: "mouseenter",
            end: "mouseleave"
        }, this.$list = t(i);
        var a = this.$list.children();
        if (this.$list.addClass("simply-scroll-list").wrap('<div class="simply-scroll-clip"></div>').parent().wrap('<div class="' + this.o.customClass + ' simply-scroll-container"></div>'), this.isAuto ? this.o.pauseButton && (this.$list.parent().parent().prepend('<div class="simply-scroll-btn simply-scroll-btn-pause"></div>'), this.o.pauseOnHover = !1) : this.$list.parent().parent().prepend('<div class="simply-scroll-forward"></div>').prepend('<div class="simply-scroll-back"></div>'), a.length > 1) {
            var r = !1,
                l = 0;
            this.isHorizontal ? (a.each(function () {
                l += t(this).outerWidth(!0)
            }), r = a.eq(0).outerWidth(!0) * a.length !== l) : (a.each(function () {
                l += t(this).outerHeight(!0)
            }), r = a.eq(0).outerHeight(!0) * a.length !== l), r && (this.$list = this.$list.wrap("<div></div>").parent().addClass("simply-scroll-list"), this.isHorizontal ? this.$list.children().css({
                "float": "left",
                width: l + "px"
            }) : this.$list.children().css({
                height: l + "px"
            }))
        }
        this.o.startOnLoad ? t(e).load(function () {
            s.init()
        }) : this.init()
    }, t.simplyScroll.fn = t.simplyScroll.prototype = {}, t.simplyScroll.fn.extend = t.simplyScroll.extend = t.extend, t.simplyScroll.fn.extend({
        init: function () {
            function e() {
                return o.paused === !1 ? (o.paused = !0, o.funcMovePause()) : (o.paused = !1, o.funcMoveResume()), o.paused
            }
            this.$items = this.$list.children(), this.$clip = this.$list.parent(), this.$container = this.$clip.parent(), this.$btnBack = t(".simply-scroll-back", this.$container), this.$btnForward = t(".simply-scroll-forward", this.$container), this.isHorizontal ? (this.itemMax = this.$items.eq(0).outerWidth(!0), this.clipMax = this.$clip.width(), this.dimension = "width", this.moveBackClass = "simply-scroll-btn-left", this.moveForwardClass = "simply-scroll-btn-right", this.scrollPos = "Left") : (this.itemMax = this.$items.eq(0).outerHeight(!0), this.clipMax = this.$clip.height(), this.dimension = "height", this.moveBackClass = "simply-scroll-btn-up", this.moveForwardClass = "simply-scroll-btn-down", this.scrollPos = "Top"), this.posMin = 0, this.posMax = this.$items.length * this.itemMax;
            var n = Math.ceil(this.clipMax / this.itemMax);
            if (this.isAuto && "loop" == this.o.autoMode) this.$list.css(this.dimension, this.posMax + this.itemMax * n + "px"), this.posMax += this.clipMax - this.o.speed, this.isForwards ? (this.$items.slice(0, n).clone(!0).appendTo(this.$list), this.resetPosition = 0) : (this.$items.slice(-n).clone(!0).prependTo(this.$list), this.resetPosition = this.$items.length * this.itemMax, this.isRTL && (this.$clip[0].dir = "ltr", this.$items.css("float", "right")));
            else if (this.isAuto || "loop" != this.o.manualMode) this.$list.css(this.dimension, this.posMax + "px"), this.isForwards ? this.resetPosition = 0 : (this.resetPosition = this.$items.length * this.itemMax, this.isRTL && (this.$clip[0].dir = "ltr", this.$items.css("float", "right")));
            else {
                this.posMax += this.itemMax * n, this.$list.css(this.dimension, this.posMax + this.itemMax * n + "px"), this.posMax += this.clipMax - this.o.speed, this.$items.slice(0, n).clone(!0).appendTo(this.$list), this.$items.slice(-n).clone(!0).prependTo(this.$list), this.resetPositionForwards = this.resetPosition = n * this.itemMax, this.resetPositionBackwards = this.$items.length * this.itemMax;
                var o = this;
                this.$btnBack.bind(this.events.start, function () {
                    o.isForwards = !1, o.resetPosition = o.resetPositionBackwards
                }), this.$btnForward.bind(this.events.start, function () {
                    o.isForwards = !0, o.resetPosition = o.resetPositionForwards
                })
            } if (this.resetPos(), this.interval = null, this.intervalDelay = Math.floor(1e3 / this.o.frameRate), this.isAuto || "end" != this.o.manualMode) for (; 0 !== this.itemMax % this.o.speed;) if (this.o.speed--, 0 === this.o.speed) {
                        this.o.speed = 1;
                        break
                    }
            var o = this;
            if (this.trigger = null, this.funcMoveBack = function (t) {
                t !== i && t.preventDefault(), o.trigger = o.isAuto || "end" != o.o.manualMode ? null : this, o.isAuto ? o.isForwards ? o.moveBack() : o.moveForward() : o.moveBack()
            }, this.funcMoveForward = function (t) {
                t !== i && t.preventDefault(), o.trigger = o.isAuto || "end" != o.o.manualMode ? null : this, o.isAuto ? o.isForwards ? o.moveForward() : o.moveBack() : o.moveForward()
            }, this.funcMovePause = function () {
                o.movePause()
            }, this.funcMoveStop = function () {
                o.moveStop()
            }, this.funcMoveResume = function () {
                o.moveResume()
            }, this.isAuto) {
                if (this.paused = !1, this.supportsTouch && this.$items.find("a").length && (this.supportsTouch = !1), this.supportsTouch = !1, this.isAuto && this.o.pauseOnHover && !this.supportsTouch) this.$clip.bind(this.events.start, this.funcMovePause).bind(this.events.end, this.funcMoveResume);
                else if (this.isAuto && this.o.pauseOnTouch && !this.o.pauseButton && this.supportsTouch) {
                    var s, a;
                    this.$clip.bind(this.events.start, function (t) {
                        e();
                        var i = t.originalEvent.touches[0];
                        s = o.isHorizontal ? i.pageX : i.pageY, a = o.$clip[0]["scroll" + o.scrollPos], t.stopPropagation(), t.preventDefault()
                    }).bind(this.events.move, function (t) {
                        t.stopPropagation(), t.preventDefault();
                        var e = t.originalEvent.touches[0],
                            i = o.isHorizontal ? e.pageX : e.pageY,
                            n = s - i + a;
                        0 > n ? n = 0 : n > o.posMax && (n = o.posMax), o.$clip[0]["scroll" + o.scrollPos] = n, o.funcMovePause(), o.paused = !0
                    })
                } else this.o.pauseButton && (this.$btnPause = t(".simply-scroll-btn-pause", this.$container).bind("click", function (i) {
                        i.preventDefault(), e() ? t(this).addClass("active") : t(this).removeClass("active")
                    }));
                this.funcMoveForward()
            } else this.$btnBack.addClass("simply-scroll-btn " + this.moveBackClass).bind(this.events.start, this.funcMoveBack).bind(this.events.end, this.funcMoveStop), this.$btnForward.addClass("simply-scroll-btn " + this.moveForwardClass).bind(this.events.start, this.funcMoveForward).bind(this.events.end, this.funcMoveStop), "end" == this.o.manualMode && (this.isRTL ? this.$btnForward.addClass("disabled") : this.$btnBack.addClass("disabled"))
        },
        moveForward: function () {
            var t = this;
            this.movement = "forward", null !== this.trigger && this.$btnBack.removeClass("disabled"), t.interval = setInterval(function () {
                t.$clip[0]["scroll" + t.scrollPos] < t.posMax - t.clipMax ? t.$clip[0]["scroll" + t.scrollPos] += t.o.speed : t.isLoop ? t.resetPos() : t.moveStop(t.movement)
            }, t.intervalDelay)
        },
        moveBack: function () {
            var t = this;
            this.movement = "back", null !== this.trigger && this.$btnForward.removeClass("disabled"), t.interval = setInterval(function () {
                t.$clip[0]["scroll" + t.scrollPos] > t.posMin ? t.$clip[0]["scroll" + t.scrollPos] -= t.o.speed : t.isLoop ? t.resetPos() : t.moveStop(t.movement)
            }, t.intervalDelay)
        },
        movePause: function () {
            clearInterval(this.interval)
        },
        moveStop: function (e) {
            this.movePause(), null !== this.trigger && (e !== i && t(this.trigger).addClass("disabled"), this.trigger = null), this.isAuto && "bounce" == this.o.autoMode && ("forward" == e ? this.moveBack() : this.moveForward())
        },
        moveResume: function () {
            "forward" == this.movement ? this.moveForward() : this.moveBack()
        },
        resetPos: function () {
            this.$clip[0]["scroll" + this.scrollPos] = this.resetPosition
        }
    })
}(jQuery, window),
function () {
    var t, e, i, n, o, s, a, r, l, c, h, u, d, p, f, m, g = [].indexOf || function (t) {
            for (var e = 0, i = this.length; i > e; e++) if (e in this && this[e] === t) return e;
            return -1
        }, v = [].slice;
    t = window.jQuery, e = t(window), o = {
        horizontal: {},
        vertical: {}
    }, s = 1, r = {}, a = "waypoints-context-id", h = "resize.waypoints", u = "scroll.waypoints", d = 1, p = "waypoints-waypoint-ids", f = "waypoint", m = "waypoints", i = function () {
        function e(e) {
            var i = this;
            this.$element = e, this.element = e[0], this.didResize = !1, this.didScroll = !1, this.id = "context" + s++, this.oldScroll = {
                x: e.scrollLeft(),
                y: e.scrollTop()
            }, this.waypoints = {
                horizontal: {},
                vertical: {}
            }, e.data(a, this.id), r[this.id] = this, e.bind(u, function () {
                var e;
                return i.didScroll ? void 0 : (i.didScroll = !0, e = function () {
                    return i.doScroll(), i.didScroll = !1
                }, window.setTimeout(e, t[m].settings.scrollThrottle))
            }), e.bind(h, function () {
                var e;
                return i.didResize ? void 0 : (i.didResize = !0, e = function () {
                    return t[m]("refresh"), i.didResize = !1
                }, window.setTimeout(e, t[m].settings.resizeThrottle))
            })
        }
        return e.prototype.doScroll = function () {
            var e, i = this;
            return e = {
                horizontal: {
                    newScroll: this.$element.scrollLeft(),
                    oldScroll: this.oldScroll.x,
                    forward: "right",
                    backward: "left"
                },
                vertical: {
                    newScroll: this.$element.scrollTop(),
                    oldScroll: this.oldScroll.y,
                    forward: "down",
                    backward: "up"
                }
            }, !(g.call(window, "ontouchstart") >= 0) || e.vertical.oldScroll && e.vertical.newScroll || t[m]("refresh"), t.each(e, function (e, n) {
                var o, s, a;
                return a = [], s = n.newScroll > n.oldScroll, o = s ? n.forward : n.backward, t.each(i.waypoints[e], function (t, e) {
                    var i, o;
                    return n.oldScroll < (i = e.offset) && n.newScroll >= i ? a.push(e) : n.newScroll < (o = e.offset) && n.oldScroll >= o ? a.push(e) : void 0
                }), a.sort(function (t, e) {
                    return t.offset - e.offset
                }), s || a.reverse(), t.each(a, function (t, e) {
                    return e.options.continuous || t === a.length - 1 ? e.trigger([o]) : void 0
                })
            }), this.oldScroll = {
                x: e.horizontal.newScroll,
                y: e.vertical.newScroll
            }
        }, e.prototype.refresh = function () {
            var e, i, n, o = this;
            return n = t.isWindow(this.element), i = this.$element.offset(), this.doScroll(), e = {
                horizontal: {
                    contextOffset: n ? 0 : i.left,
                    contextScroll: n ? 0 : this.oldScroll.x,
                    contextDimension: this.$element.width(),
                    oldScroll: this.oldScroll.x,
                    forward: "right",
                    backward: "left",
                    offsetProp: "left"
                },
                vertical: {
                    contextOffset: n ? 0 : i.top,
                    contextScroll: n ? 0 : this.oldScroll.y,
                    contextDimension: n ? t[m]("viewportHeight") : this.$element.height(),
                    oldScroll: this.oldScroll.y,
                    forward: "down",
                    backward: "up",
                    offsetProp: "top"
                }
            }, t.each(e, function (e, i) {
                return t.each(o.waypoints[e], function (e, n) {
                    var o, s, a, r, l;
                    return o = n.options.offset, a = n.offset, s = t.isWindow(n.element) ? 0 : n.$element.offset()[i.offsetProp], t.isFunction(o) ? o = o.apply(n.element) : "string" == typeof o && (o = parseFloat(o), n.options.offset.indexOf("%") > -1 && (o = Math.ceil(i.contextDimension * o / 100))), n.offset = s - i.contextOffset + i.contextScroll - o, n.options.onlyOnScroll && null != a || !n.enabled ? void 0 : null !== a && (r = i.oldScroll) > a && n.offset >= r ? n.trigger([i.backward]) : null !== a && a > (l = i.oldScroll) && l >= n.offset ? n.trigger([i.forward]) : null === a && i.oldScroll >= n.offset ? n.trigger([i.forward]) : void 0
                })
            })
        }, e.prototype.checkEmpty = function () {
            return t.isEmptyObject(this.waypoints.horizontal) && t.isEmptyObject(this.waypoints.vertical) ? (this.$element.unbind([h, u].join(" ")), delete r[this.id]) : void 0
        }, e
    }(), n = function () {
        function e(e, i, n) {
            var s, a;
            n = t.extend({}, t.fn[f].defaults, n), "bottom-in-view" === n.offset && (n.offset = function () {
                var e;
                return e = t[m]("viewportHeight"), t.isWindow(i.element) || (e = i.$element.height()), e - t(this).outerHeight()
            }), this.$element = e, this.element = e[0], this.axis = n.horizontal ? "horizontal" : "vertical", this.callback = n.handler, this.context = i, this.enabled = n.enabled, this.id = "waypoints" + d++, this.offset = null, this.options = n, i.waypoints[this.axis][this.id] = this, o[this.axis][this.id] = this, s = null != (a = e.data(p)) ? a : [], s.push(this.id), e.data(p, s)
        }
        return e.prototype.trigger = function (t) {
            return this.enabled ? (null != this.callback && this.callback.apply(this.element, t), this.options.triggerOnce ? this.destroy() : void 0) : void 0
        }, e.prototype.disable = function () {
            return this.enabled = !1
        }, e.prototype.enable = function () {
            return this.context.refresh(), this.enabled = !0
        }, e.prototype.destroy = function () {
            return delete o[this.axis][this.id], delete this.context.waypoints[this.axis][this.id], this.context.checkEmpty()
        }, e.getWaypointsByElement = function (e) {
            var i, n;
            return (n = t(e).data(p)) ? (i = t.extend({}, o.horizontal, o.vertical), t.map(n, function (t) {
                return i[t]
            })) : []
        }, e
    }(), c = {
        init: function (e, o) {
            var s;
            return null == o && (o = {}), null == (s = o.handler) && (o.handler = e), this.each(function () {
                var e, s, l, c;
                return e = t(this), l = null != (c = o.context) ? c : t.fn[f].defaults.context, t.isWindow(l) || (l = e.closest(l)), l = t(l), s = r[l.data(a)], s || (s = new i(l)), new n(e, s, o)
            }), t[m]("refresh"), this
        },
        disable: function () {
            return c._invoke(this, "disable")
        },
        enable: function () {
            return c._invoke(this, "enable")
        },
        destroy: function () {
            return c._invoke(this, "destroy")
        },
        prev: function (t, e) {
            return c._traverse.call(this, t, e, function (t, e, i) {
                return e > 0 ? t.push(i[e - 1]) : void 0
            })
        },
        next: function (t, e) {
            return c._traverse.call(this, t, e, function (t, e, i) {
                return i.length - 1 > e ? t.push(i[e + 1]) : void 0
            })
        },
        _traverse: function (e, i, n) {
            var o, s;
            return null == e && (e = "vertical"), null == i && (i = window), s = l.aggregate(i), o = [], this.each(function () {
                var i;
                return i = t.inArray(this, s[e]), n(o, i, s[e])
            }), this.pushStack(o)
        },
        _invoke: function (e, i) {
            return e.each(function () {
                var e;
                return e = n.getWaypointsByElement(this), t.each(e, function (t, e) {
                    return e[i](), !0
                })
            }), this
        }
    }, t.fn[f] = function () {
        var e, i;
        return i = arguments[0], e = arguments.length >= 2 ? v.call(arguments, 1) : [], c[i] ? c[i].apply(this, e) : t.isFunction(i) ? c.init.apply(this, arguments) : t.isPlainObject(i) ? c.init.apply(this, [null, i]) : i ? t.error("The " + i + " method does not exist in jQuery Waypoints.") : t.error("jQuery Waypoints needs a callback function or handler option.")
    }, t.fn[f].defaults = {
        context: window,
        continuous: !0,
        enabled: !0,
        horizontal: !1,
        offset: 0,
        triggerOnce: !1
    }, l = {
        refresh: function () {
            return t.each(r, function (t, e) {
                return e.refresh()
            })
        },
        viewportHeight: function () {
            var t;
            return null != (t = window.innerHeight) ? t : e.height()
        },
        aggregate: function (e) {
            var i, n, s;
            return i = o, e && (i = null != (s = r[t(e).data(a)]) ? s.waypoints : void 0), i ? (n = {
                horizontal: [],
                vertical: []
            }, t.each(n, function (e, o) {
                return t.each(i[e], function (t, e) {
                    return o.push(e)
                }), o.sort(function (t, e) {
                    return t.offset - e.offset
                }), n[e] = t.map(o, function (t) {
                    return t.element
                }), n[e] = t.unique(n[e])
            }), n) : []
        },
        above: function (t) {
            return null == t && (t = window), l._filter(t, "vertical", function (t, e) {
                return e.offset <= t.oldScroll.y
            })
        },
        below: function (t) {
            return null == t && (t = window), l._filter(t, "vertical", function (t, e) {
                return e.offset > t.oldScroll.y
            })
        },
        left: function (t) {
            return null == t && (t = window), l._filter(t, "horizontal", function (t, e) {
                return e.offset <= t.oldScroll.x
            })
        },
        right: function (t) {
            return null == t && (t = window), l._filter(t, "horizontal", function (t, e) {
                return e.offset > t.oldScroll.x
            })
        },
        enable: function () {
            return l._invoke("enable")
        },
        disable: function () {
            return l._invoke("disable")
        },
        destroy: function () {
            return l._invoke("destroy")
        },
        extendFn: function (t, e) {
            return c[t] = e
        },
        _invoke: function (e) {
            var i;
            return i = t.extend({}, o.vertical, o.horizontal), t.each(i, function (t, i) {
                return i[e](), !0
            })
        },
        _filter: function (e, i, n) {
            var o, s;
            return (o = r[t(e).data(a)]) ? (s = [], t.each(o.waypoints[i], function (t, e) {
                return n(o, e) ? s.push(e) : void 0
            }), s.sort(function (t, e) {
                return t.offset - e.offset
            }), t.map(s, function (t) {
                return t.element
            })) : []
        }
    }, t[m] = function () {
        var t, e;
        return e = arguments[0], t = arguments.length >= 2 ? v.call(arguments, 1) : [], l[e] ? l[e].apply(null, t) : l.aggregate.call(null, e)
    }, t[m].settings = {
        resizeThrottle: 100,
        scrollThrottle: 30
    }, e.load(function () {
        return t[m]("refresh")
    })
}.call(this);
var tl = tl || {};
tl.register = function (t, e) {
    var i = t.split(".");
    e && (console.log("routed:", e), tl.setRouteClass(e, t)), "tl" === i[0] && (i = i.slice(1));
    for (var n = 0, o = i.length, s = this; o > n; n++) s[i[n]] === void 0 && (s[i[n]] = {}), s = s[i[n]]
}, tl.access = function (t) {
    var e = t.split(".");
    "tl" === e[0] && (e = e.slice(1));
    for (var i = 0, n = e.length, o = this; n > i; ++i) o = o[e[i]];
    return o
}, tl.setRouteClass = function (t, e) {
    t = tl.helper.stripTrailingSlash(t), this.register("tl.routes"), this.routes[t] = e
}, tl.getRouteClass = function (t) {
    t = tl.helper.stripTrailingSlash(t);
    var e = this.routes[t] ? this.routes[t] : "tl.shell.Page";
    return this.access(e)
}, tl.changePage = function () {
    var t = window.location.pathname,
        e = tl.getRouteClass(t);
    console.log("change page:", t), tl.currPage && tl.currPage.deactivate(), tl.currPage = new e, tl.currPage.activate(), tl.currPage.changeTitle(), _gaq.push(["_trackPageview", t]), "undefined" != typeof FB && FB.XFBML.parse(), twttr.widgets !== void 0 && twttr.widgets.load(), tl.Nav.isOpen() && tl.Nav.close()
}, tl.nothingToSeeHere = function () {
    tl.tonydanza = [];
    var t = "38,38,40,40,37,39,37,39,66,65";
    $(window).on("keydown", function (e) {
        for (tl.tonydanza.push(e.keyCode); tl.tonydanza.length > t.split(",").length;) tl.tonydanza.shift();
        ("" + tl.tonydanza).indexOf(t) >= 0 && ($(this).off("keydown"), window.location = "http://jonlax.com")
    })
}, $(document).on("ready", function () {
    tl.Nav.init(), tl.nothingToSeeHere()
}), $(document).on("ready pjax:success", tl.changePage), $(document).pjax('a:not(".no-pjax")', "#page-container"), $(document).on("pjax:send", function () {
    console.log("pjax: send request")
}), $(document).on("pjax:popstate", function () {
    console.log("pjax: popstate change"), tl.changePage()
}), $(document).on("pjax:complete", function () {
    console.log("pjax: request complete")
}), $(document).on("click", ".track-event", function () {
    var t = $(this),
        e = t.attr("data-category"),
        i = t.attr("data-action"),
        n = t.attr("data-label");
    _gaq.push(["_trackEvent", e, i, n])
}), tl.register("tl.helper"), "undefined" == typeof console && (window.console = {
    log: function () {}
}), window.requestAnimFrame = function () {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (t) {
        window.setTimeout(t, 1e3 / 60)
    }
}(), tl.helper.stripTrailingSlash = function (t) {
    return "/" === t.substr(-1) ? t.substr(0, t.length - 1) : t
}, tl.register("tl.Nav"), tl.Nav = {}, tl.Nav.init = function () {
    console.log("init nav"), this.throttledHandler = $.throttle(250, $.proxy(this._scrollHandler, this)), this._el = $("#main-nav");
    var t = this;
    $(document).bind("scroll", this.throttledHandler), $(document).bind("keyup", function (e) {
        27 === e.keyCode && t.close()
    }), this._el.on("click", $.proxy(this.toggle, this)), $("#main-nav-drop .nav-item a").on("mouseenter", function () {
        var e = $(this).attr("data-bg"),
            i = $("#main-nav-drop #background");
        i.addClass("hidden"), clearTimeout(t.bgTimer), t.bgTimer = setTimeout(function () {
            i.attr("class", "").addClass(e)
        }, 200)
    }).on("mouseleave", function () {
        clearTimeout(t.bgTimer), $("#main-nav-drop #background").addClass("hidden")
    }), this._el.removeClass("off-screen")
}, tl.Nav._el = null, tl.Nav._lastScroll = 0, tl.Nav._detachPoint = 500, tl.Nav._hideShowOffset = 20, tl.Nav._attached = !0, tl.Nav._visible = !0, tl.Nav._open = !1, tl.Nav._scrollHandler = function () {
    var t = $(window).scrollTop(),
        e = t > this._lastScroll ? "down" : "up",
        i = Math.abs(t - this._lastScroll);
    t >= this._detachPoint && this.detach(), 0 >= t && this.attach(), t > -1 ? "down" === e && i >= this._hideShowOffset ? this.hide() : "up" === e && i >= this._hideShowOffset && this.show() : this.show(), this._lastScroll = t
}, tl.Nav.detach = function () {
    this._attached && !this._visible && (this._el.addClass("detached"), this._attached = !1)
}, tl.Nav.attach = function () {
    this._attached || (this._el.removeClass("detached"), this._attached = !0)
}, tl.Nav.hide = function () {
    this._visible && (this._el.removeClass("visible").addClass("hidden"), this._visible = !1)
}, tl.Nav.show = function () {
    this._visible || (this._el.removeClass("hidden").addClass("visible"), this._visible = !0)
}, tl.Nav.open = function () {
    $("body").addClass("nav-open"), this._open = !0
}, tl.Nav.close = function () {
    $("body").removeClass("nav-open"), this._open = !1
}, tl.Nav.toggle = function (t) {
    t && !$(t.target).hasClass("logo") && (this._open ? this.close() : this.open())
}, tl.Nav.isOpen = function () {
    return this._open
}, tl.register("tl.shell.Page"), tl.shell.Page = function () {
    console.log("instansiate Page")
}, tl.shell.Page.prototype._title = "Teehan+Lax - Defining Experience", tl.shell.Page.prototype.activate = function () {
    console.log("generic page activated")
}, tl.shell.Page.prototype.deactivate = function () {}, tl.shell.Page.prototype.setTitle = function (t) {
    console.log("set page title"), this._title = t
}, tl.shell.Page.prototype.getTitle = function () {
    return this._title
}, tl.shell.Page.prototype.changeTitle = function () {
    console.log("change page title"), document.title = this.getTitle()
}, tl.shell.Page.prototype.showSolidNav = function () {
    $("#main-nav").addClass("solid-nav")
}, tl.shell.Page.prototype.hideSolidNav = function () {
    $("#main-nav").removeClass("solid-nav")
}, tl.register("tl.page.Android", "/tools/android"), tl.page.Android = function () {
    console.log("instansiate: Android"), this.setTitle("Android GUI PSD | Teehan+Lax")
}, tl.page.Android.prototype = new tl.shell.Page, tl.page.Android.prototype.activate = function () {
    this.showSolidNav()
}, tl.page.Android.prototype.deactivate = function () {
    this.hideSolidNav()
}, tl.register("tl.page.Careers", "/careers/"), tl.page.Careers = function () {
    console.log("instansiate: Careers"), this.setTitle("We’re all about making epic sh*t - Careers at Teehan+Lax")
}, tl.page.Careers.prototype = new tl.shell.Page, tl.page.Careers.prototype.stories = null, tl.page.Careers.prototype.currIndex = 0, tl.page.Careers.prototype.animating = !1, tl.page.Careers.prototype.container = null, tl.page.Careers.prototype.activate = function () {
    this.stories = $(".employee-stories .story"), this.container = $(".employee-stories"), this.container.on("click mousemove", $.proxy(this.mouseHandler, this)), this.container.hammer().bind("swipe", $.proxy(this.swipeHandler, this)), $(".stories-wrapper").on("click", function () {
        $(this).hasClass("open") || $(this).addClass("open")
    }), $(".stories-wrapper .close-button").on("click", function (t) {
        t.stopPropagation(), $(".stories-wrapper").removeClass("open")
    })
}, tl.page.Careers.prototype.deactivate = function () {
    this.container.off("click"), this.container.unbind("swipe")
}, tl.page.Careers.prototype.mouseHandler = function (t) {
    var e = t.clientX,
        i = $(window).width(),
        n = e > i / 2 ? "next" : "prev";
    "click" === t.type && ("next" === n ? this.next() : this.previous()), this.container.removeClass("next prev").addClass(n)
}, tl.page.Careers.prototype.swipeHandler = function (t) {
    "right" === t.direction ? this.next() : "left" === t.direction && this.previous()
}, tl.page.Careers.prototype.next = function () {
    var t = this.currIndex + 1 === this.stories.length ? 0 : this.currIndex + 1;
    this.goTo(t, "prev")
}, tl.page.Careers.prototype.previous = function () {
    var t = 0 === this.currIndex ? this.stories.length - 1 : this.currIndex - 1;
    this.goTo(t, "next")
}, tl.page.Careers.prototype.goTo = function (t, e) {
    if (!this.animating) {
        this.animating = !0;
        var i = $(this.stories[t]),
            n = $(this.stories[this.currIndex]),
            o = e,
            s = this;
        i.addClass(o), setTimeout(function () {
            n.removeClass("active")
        }, 90), setTimeout(function () {
            i.addClass("active")
        }, 100), setTimeout(function () {
            i.removeClass(o)
        }, 110), setTimeout(function () {
            s.animating = !1
        }, 1e3), this.currIndex = t
    }
}, tl.register("tl.page.Contact", "/contact/"), tl.page.Contact = function () {
    console.log("instansiate: Contact"), this.setTitle("Hire Us | Teehan+Lax")
}, tl.page.Contact.prototype = new tl.shell.Page, tl.page.Contact.prototype.activate = function () {
    $(".contact-wrap").waypoint(function () {
        $(".circles", this).addClass("animate")
    }, {
        offset: "25%"
    }), $("#contact-form").on("submit", $.proxy(this.submitForm, this)), $("#contact-form .message").autogrow()
}, tl.page.Contact.prototype.deactivate = function () {}, tl.page.Contact.prototype.submitForm = function (t) {
    t.preventDefault();
    var e = $("#contact-form").serialize();
    $.ajax({
        type: "POST",
        url: "/contact/send/",
        data: e,
        dataType: "json",
        success: function (t) {
            "fail" === t.status ? $(".contact-form .errors").html(t.message) : ($(".contact-form").addClass("thanks"), _gaq.push(["_trackEvent", "Contact Us", "submit", "Successful Submission"]))
        },
        error: function () {}
    })
}, $.fn.scale = function (t, e, i) {
    if (i.rounded) {
        var n, o = t * e;
        n = 0 === Math.floor(o) % 2 && .5 === Math.abs(o - Math.floor(o)) ? Math.round(o) - 1 : Math.round(o), this.val(n)
    } else this.val((t * e).toFixed(1))
}, tl.register("tl.page.Tools.DensityConverter", "/tools/density/"), tl.page.Tools.DensityConverter = function () {
    console.log("instansiate: DensityConverter"), this.setTitle("Density Converter | Teehan+Lax")
}, tl.page.Tools.DensityConverter.prototype = new tl.shell.Page, tl.page.Tools.DensityConverter.prototype.activate = function () {
    this.rounded = !1;
    var t = this;
    $("input:text").bind("keyup", function () {
        t.recalc()
    }), $("input:text").click(function () {
        t.selectAll(this)
    }), $("input:text").focus(function () {
        t.focusInput(this)
    }), $(".controls_options input:radio").click(function () {
        t.clickRadio(this)
    })
}, tl.page.Tools.DensityConverter.prototype.deactivate = function () {
    $("input:text").unbind()
}, tl.page.Tools.DensityConverter.prototype.focusInput = function (t) {
    this.activeInput !== $(t).get(0) && (this.activeInput = $(t).get(0))
}, tl.page.Tools.DensityConverter.prototype.clickRadio = function (t) {
    this.rounded = "rounded" === $(t).val() ? !0 : !1, this.selectAll(this.activeInput), this.recalc()
}, tl.page.Tools.DensityConverter.prototype.selectAll = function (t) {
    this.activeInput = $(t).get(0), this.activeInput.focus(), this.activeInput.select()
}, tl.page.Tools.DensityConverter.prototype.recalc = function () {
    var t = 1,
        e = 1.5,
        i = 2,
        n = 2.25,
        o = 1,
        s = 1,
        a = 1,
        r = 1,
        l = 1,
        c = 1;
    this.activeInput === $("[id^=value_nonretina_width]").get(0) || this.activeInput === $("[id^=value_nonretina_height]").get(0) ? (l = $("[id^=value_nonretina_width]").val(), c = $("[id^=value_nonretina_height]").val(), o = t / t, s = e / t, a = i / t, r = n / t) : this.activeInput === $("[id^=value_hdpi_width]").get(0) || this.activeInput === $("[id^=value_hdpi_height]").get(0) ? (l = $("[id^=value_hdpi_width]").val(), c = $("[id^=value_hdpi_height]").val(), o = t / e, s = e / e, a = i / e, r = n / e) : this.activeInput === $("[id^=value_retina_width]").get(0) || this.activeInput === $("[id^=value_retina_height]").get(0) ? (l = $("[id^=value_retina_width]").val(), c = $("[id^=value_retina_height]").val(), o = t / i, s = e / i, a = i / i, r = n / i) : (this.activeInput === $("[id^=value_xhdpi_width]").get(0) || this.activeInput === $("[id^=value_xhdpi_height]").get(0)) && (l = $("[id^=value_xhdpi_width]").val(), c = $("[id^=value_xhdpi_height]").val(), o = t / n, s = e / n, a = i / n, r = n / n), $("[id^=value_nonretina_width]").not(":focus").scale(l, o, this), $("[id^=value_nonretina_height]").not(":focus").scale(c, o, this), $("[id^=value_hdpi_width]").not(":focus").scale(l, s, this), $("[id^=value_hdpi_height]").not(":focus").scale(c, s, this), $("[id^=value_retina_width]").not(":focus").scale(l, a, this), $("[id^=value_retina_height]").not(":focus").scale(c, a, this), $("[id^=value_xhdpi_width]").not(":focus").scale(l, r, this), $("[id^=value_xhdpi_height]").not(":focus").scale(c, r, this)
}, tl.register("tl.page.Home", "/"), tl.page.Home = function () {
    console.log("instansiate: Home")
}, tl.page.Home.prototype = new tl.shell.Page, tl.page.Home.prototype.scrollHandler = null, tl.page.Home.prototype.slides = null, tl.page.Home.prototype.snapTimer = null, tl.page.Home.prototype.currSlide = 0, tl.page.Home.prototype.activate = function () {
    this.scrollHandler = $.proxy(this.scrollCard, this), this.slides = $("#homepage .slide"), $("#main-nav").addClass("pinned"), $("#homepage").css("height", 100 * this.slides.length + "%"), $(window).on("scroll", this.scrollHandler)
}, tl.page.Home.prototype.deactivate = function () {
    $("#main-nav").removeClass("pinned"), $(window).off("scroll", this.scrollHandler)
}, tl.page.Home.prototype.scrollCard = function () {
    var t = $(document).scrollTop(),
        e = $(".slides").height(),
        i = this.slides.length,
        n = Math.floor(t / e),
        o = t - e * n,
        s = null;
    i - 1 > n && $(this.slides[n]).css("top", -1 * o), n > this.currSlide ? $(this.slides[this.currSlide]).css("top", "-100%") : this.currSlide > n && $(this.slides[this.currSlide]).css("top", ""), s = .5 > t / e - n ? n * e : (n + 1) * e, clearTimeout(this.snapTimer), this.snapTimer = setTimeout(function () {
        $.scrollTo(s, 250)
    }, 250), this.currSlide = n
}, tl.register("tl.page.ipad", "/tools/ipad/"), tl.page.ipad = function () {
    console.log("instansiate: ipad"), this.setTitle("iPad GUI PSD | Teehan+Lax")
}, tl.page.ipad.prototype = new tl.shell.Page, tl.page.ipad.prototype.activate = function () {
    this.ipadGallery = new tl.ui.Gallery($("#ipad-gallery"))
}, tl.page.ipad.prototype.deactivate = function () {}, tl.register("tl.page.iphone", "/tools/iphone/"), tl.page.iphone = function () {
    console.log("instansiate: iphone"), this.setTitle("iPhone GUI PSD | Teehan+Lax")
}, tl.page.iphone.prototype = new tl.shell.Page, tl.page.iphone.prototype.activate = function () {
    this.iphoneGallery = new tl.ui.Gallery($("#iphone-gallery"))
}, tl.page.iphone.prototype.deactivate = function () {}, tl.register("tl.page.SketchiPad", "/tools/sketch-ipad/"), tl.page.SketchiPad = function () {
    console.log("instansiate: SketchiPad"), this.setTitle("iPad Sketch Elements | Teehan+Lax")
}, tl.page.SketchiPad.prototype = new tl.shell.Page, tl.page.SketchiPad.prototype.activate = function () {
    this.showSolidNav()
}, tl.page.SketchiPad.prototype.deactivate = function () {
    this.hideSolidNav()
}, tl.register("tl.page.SketchiPhone", "/tools/sketch-iphone/"), tl.page.SketchiPhone = function () {
    console.log("instansiate: SketchiPhone"), this.setTitle("iPhone Sketch Elements | Teehan+Lax")
}, tl.page.SketchiPhone.prototype = new tl.shell.Page, tl.page.SketchiPhone.prototype.activate = function () {
    this.showSolidNav()
}, tl.page.SketchiPhone.prototype.deactivate = function () {
    this.hideSolidNav()
}, tl.register("tl.story.GlobeAndMail", "/story/globe-and-mail/"), tl.story.GlobeAndMail.plot = "", tl.story.GlobeAndMail = function () {
    console.log("instansiate: GlobeAndMail"), this.bSpun = !1, this.plot = null, this.setTitle("Getting Down to Business - Making a Better Report on Business | Teehan+Lax")
}, tl.story.GlobeAndMail.prototype = new tl.shell.Page, tl.story.GlobeAndMail.prototype.deactivate = function () {
    $(".venn .circle").off("mousemove"), $(".venn .circle").off("mouseover"), $(".venn").off("mouseleave"), this.timer && clearInterval(this.timer), this.plot.shutdown(), $("#vector-chart").empty(), $(".news-clippings").waypoint("destroy")
}, tl.story.GlobeAndMail.prototype.resizeClippings = function () {
    var t = 1530,
        e = $(".news-clippings").width(),
        i = 637,
        n = e / t;
    $(".news-clippings").height(n * i);
    var o = $(".news-clippings img");
    o.each(function (t) {
        var e = $(o[t]),
            i = Number(e.attr("data-w")),
            s = i * n;
        e.css("width", s + "px")
    })
}, tl.story.GlobeAndMail.prototype.createChart = function () {
    for (var t = this, e = $("#vector-chart"), i = [], n = 0; 14 >= n; n++) i.push([10 * n, 0]);
    var o = [
        [0, 61],
        [1, 0],
        [2, 0],
        [3, 0],
        [4, 0],
        [5, 0],
        [6, 0],
        [7, 0],
        [8, 0],
        [9, 0],
        [10, 0],
        [11, 0],
        [12, 0],
        [13, 0],
        [14, 0],
        [15, 0],
        [16, 0],
        [17, 0],
        [18, 0],
        [19, 0],
        [20, 0],
        [21, 0],
        [22, 0],
        [23, 0],
        [24, 0],
        [25, 0],
        [26, 0],
        [27, 0],
        [28, 0],
        [29, 0],
        [30, 0],
        [31, 0],
        [32, 0],
        [33, 0],
        [34, 0],
        [35, 0],
        [36, 0],
        [37, 0],
        [38, 0],
        [39, 0],
        [40, 0],
        [41, 0],
        [42, 0],
        [43, 0],
        [44, 0],
        [45, 0],
        [46, 0],
        [47, 0],
        [48, 0],
        [49, 0],
        [50, 0],
        [51, 0],
        [52, 0],
        [53, 0],
        [54, 0],
        [55, 0],
        [56, 0],
        [57, 0],
        [58, 0],
        [59, 0],
        [60, 0],
        [61, 0],
        [62, 0],
        [63, 0],
        [64, 0],
        [65, 0],
        [66, 0],
        [67, 0],
        [68, 0],
        [69, 0],
        [70, 0],
        [71, 0],
        [72, 0],
        [73, 0],
        [74, 0],
        [75, 0],
        [76, 0],
        [77, 0],
        [78, 0],
        [79, 0],
        [80, 0],
        [81, 0],
        [82, 0],
        [83, 0],
        [84, 0],
        [85, 0],
        [86, 0],
        [87, 0],
        [88, 0],
        [89, 0],
        [90, 0],
        [91, 0],
        [92, 0],
        [93, 0],
        [94, 0],
        [95, 0],
        [96, 0],
        [97, 0],
        [98, 0],
        [99, 0],
        [100, 0],
        [101, 0],
        [102, 0],
        [103, 0],
        [104, 0],
        [105, 0],
        [106, 0],
        [107, 0],
        [108, 0],
        [109, 0],
        [110, 0],
        [111, 0],
        [112, 0],
        [113, 0],
        [114, 0],
        [115, 0],
        [116, 0],
        [117, 0],
        [118, 0],
        [119, 0],
        [120, 0],
        [121, 0],
        [122, 0],
        [123, 0],
        [124, 0],
        [125, 0],
        [126, 0],
        [127, 0],
        [128, 0],
        [129, 0],
        [130, 0],
        [131, 0],
        [132, 0],
        [133, 0],
        [134, 0],
        [135, 0],
        [136, 0],
        [137, 0],
        [138, 0],
        [139, 0],
        [140, 0],
        [141, 0],
        [142, 0],
        [143, 0],
        [144, 0],
        [145, 0],
        [146, 0],
        [147, 0],
        [148, 0],
        [149, 0],
        [150, 0],
        [151, 0],
        [152, 0],
        [153, 0],
        [154, 0],
        [155, 0],
        [156, 0],
        [157, 0],
        [158, 0],
        [159, 0],
        [160, 0],
        [161, 0],
        [162, 0],
        [163, 0],
        [164, 0],
        [165, 0],
        [166, 0],
        [167, 0],
        [168, 0],
        [169, 0],
        [170, 0],
        [171, 0],
        [172, 0],
        [173, 0],
        [174, 0],
        [175, 0],
        [176, 0],
        [177, 0],
        [178, 0],
        [179, 0],
        [180, 0],
        [181, 0],
        [182, 0],
        [183, 0],
        [184, 0],
        [185, 0],
        [186, 0],
        [187, 0],
        [188, 0],
        [189, 0],
        [190, 0],
        [191, 0],
        [192, 0],
        [193, 0],
        [194, 0],
        [195, 0],
        [196, 0],
        [197, 0],
        [198, 0],
        [199, 0],
        [200, 0],
        [201, 0],
        [202, 0],
        [203, 0],
        [204, 0],
        [205, 0],
        [206, 0],
        [207, 0],
        [208, 0],
        [209, 0],
        [210, 0],
        [211, 0],
        [212, 0],
        [213, 0],
        [214, 0],
        [215, 0],
        [216, 0],
        [217, 0],
        [218, 0],
        [219, 0],
        [220, 0],
        [221, 0],
        [222, 0],
        [223, 0],
        [224, 0],
        [225, 0],
        [226, 0],
        [227, 0],
        [228, 0],
        [229, 0],
        [230, 0],
        [231, 0],
        [232, 0],
        [233, 0],
        [234, 0],
        [235, 0],
        [236, 0],
        [237, 0],
        [238, 0],
        [239, 0],
        [240, 0],
        [241, 0],
        [242, 0],
        [243, 0],
        [244, 0],
        [245, 0],
        [246, 0],
        [247, 0],
        [248, 0],
        [249, 0],
        [250, 0],
        [251, 0],
        [252, 0],
        [253, 0],
        [254, 0],
        [255, 0],
        [256, 0],
        [257, 0],
        [258, 0],
        [259, 0],
        [260, 0],
        [261, 0],
        [262, 0],
        [263, 0],
        [264, 0],
        [265, 0],
        [266, 0],
        [267, 0],
        [268, 0],
        [269, 0],
        [270, 0],
        [271, 0],
        [272, 0],
        [273, 0],
        [274, 0],
        [275, 0],
        [276, 0],
        [277, 0],
        [278, 0],
        [279, 0],
        [280, 0],
        [281, 0],
        [282, 0],
        [283, 0],
        [284, 0],
        [285, 0],
        [286, 0],
        [287, 0],
        [288, 0],
        [289, 0],
        [290, 0],
        [291, 0],
        [292, 0],
        [293, 0],
        [294, 0],
        [295, 0],
        [296, 0],
        [297, 0],
        [298, 0],
        [299, 0],
        [300, 0]
    ],
        s = [
            [0, 61.05],
            [1, 58.32],
            [2, 57.35],
            [3, 56.31],
            [4, 55.55],
            [5, 55.64],
            [6, 54.02],
            [7, 51.88],
            [8, 52.99],
            [9, 52.99],
            [10, 51.21],
            [11, 52.24],
            [12, 50.48],
            [13, 51.99],
            [14, 51.13],
            [15, 55.04],
            [16, 55.37],
            [17, 54.23],
            [18, 55.42],
            [19, 54.01],
            [20, 56.97],
            [21, 58.14],
            [22, 58.14],
            [23, 59.02],
            [24, 58.74],
            [25, 58.88],
            [26, 57.71],
            [27, 59.71],
            [28, 59.89],
            [29, 57.81],
            [30, 59.06],
            [31, 58],
            [32, 57.99],
            [33, 59.39],
            [34, 59.39],
            [35, 58.07],
            [36, 60.07],
            [37, 61.14],
            [38, 61.39],
            [39, 61.46],
            [40, 61.79],
            [41, 62],
            [42, 60.07],
            [43, 60.69],
            [44, 61.82],
            [45, 60.05],
            [46, 58.91],
            [47, 57.93],
            [48, 58.16],
            [49, 57.55],
            [50, 57.11],
            [51, 56.59],
            [52, 59.61],
            [53, 61.69],
            [54, 62.28],
            [55, 62.91],
            [56, 62.93],
            [57, 64.03],
            [58, 66.03],
            [59, 65.87],
            [60, 64.64],
            [61, 64.38],
            [62, 64.28],
            [63, 64.28],
            [64, 61.51],
            [65, 61.89],
            [66, 62.01],
            [67, 63.85],
            [68, 63.63],
            [69, 63.61],
            [70, 63.1],
            [71, 63.13],
            [72, 61.83],
            [73, 63.38],
            [74, 64.58],
            [75, 65.84],
            [76, 65.06],
            [77, 66.46],
            [78, 64.4],
            [79, 63.68],
            [80, 63.19],
            [81, 61.93],
            [82, 61.47],
            [83, 61.55],
            [84, 61.81],
            [85, 62.37],
            [86, 62.46],
            [87, 63.17],
            [88, 62.55],
            [89, 64.94],
            [90, 66.27],
            [91, 65.5],
            [92, 65.77],
            [93, 64.18],
            [94, 65.2],
            [95, 63.15],
            [96, 63.49],
            [97, 65.08],
            [98, 66.3],
            [99, 65.96],
            [100, 66.93],
            [101, 65.98],
            [102, 65.35],
            [103, 66.26],
            [104, 68],
            [105, 69.09],
            [106, 69.1],
            [107, 68.19],
            [108, 68.19],
            [109, 69.14],
            [110, 68.19],
            [111, 67.77],
            [112, 68.97],
            [113, 69.57],
            [114, 70.68],
            [115, 71.09],
            [116, 70.92],
            [117, 71.81],
            [118, 72.81],
            [119, 72.19],
            [120, 72.56],
            [121, 72.5],
            [122, 74.15],
            [123, 75.05],
            [124, 75.92],
            [125, 75.57],
            [126, 74.89],
            [127, 73.56],
            [128, 75.57],
            [129, 74.95],
            [130, 76.83],
            [131, 78.21],
            [132, 76.53],
            [133, 76.86],
            [134, 76],
            [135, 71.59],
            [136, 71.47],
            [137, 71.62],
            [138, 71],
            [139, 71.98],
            [140, 71.12],
            [141, 69.47],
            [142, 69.26],
            [143, 69.83],
            [144, 71.09],
            [145, 71.73],
            [146, 73.36],
            [147, 74.04],
            [148, 76.3],
            [149, 77.49],
            [150, 78.23],
            [151, 79.91],
            [152, 80.09],
            [153, 79.1],
            [154, 80.57],
            [155, 81.93],
            [156, 83.32],
            [157, 81.62],
            [158, 80.95],
            [159, 79.53],
            [160, 80.3],
            [161, 82.88],
            [162, 81.66],
            [163, 80.24],
            [164, 80.05],
            [165, 79.94],
            [166, 81.44],
            [167, 81.22],
            [168, 79.02],
            [169, 80.26],
            [170, 80.3],
            [171, 83.08],
            [172, 83.69],
            [173, 86.13],
            [174, 87.61],
            [175, 87.4],
            [176, 89.47],
            [177, 88.6],
            [178, 87.56],
            [179, 87.56],
            [180, 87.1],
            [181, 91.86],
            [182, 93.53],
            [183, 94.53],
            [184, 95.93],
            [185, 93.98],
            [186, 96.37],
            [187, 95.46],
            [188, 96.32],
            [189, 93.43],
            [190, 95.1],
            [191, 94.64],
            [192, 95.1],
            [193, 97.7],
            [194, 94.42],
            [195, 90.62],
            [196, 91.01],
            [197, 88.71],
            [198, 88.32],
            [199, 90.23],
            [200, 88.28],
            [201, 87.86],
            [202, 90.02],
            [203, 92.25],
            [204, 90.63],
            [205, 90.63],
            [206, 90.49],
            [207, 91.24],
            [208, 91.06],
            [209, 90.49],
            [210, 96.62],
            [211, 96],
            [212, 99.62],
            [213, 99.18],
            [214, 95.09],
            [215, 96.33],
            [216, 95.67],
            [217, 91.9],
            [218, 90.84],
            [219, 90.13],
            [220, 90.57],
            [221, 89.21],
            [222, 86.99],
            [223, 89.85],
            [224, 90.99],
            [225, 91.64],
            [226, 92.33],
            [227, 91.75],
            [228, 90.02],
            [229, 88.41],
            [230, 87.14],
            [231, 88.11],
            [232, 91.77],
            [233, 92.78],
            [234, 93.27],
            [235, 95.46],
            [236, 95.46],
            [237, 101.74],
            [238, 98.81],
            [239, 100.88],
            [240, 99.64],
            [241, 102.59],
            [242, 101.84],
            [243, 99.52],
            [244, 99.52],
            [245, 104.52],
            [246, 105.47],
            [247, 105.15],
            [248, 108.75],
            [249, 109.92],
            [250, 110.33],
            [251, 110.21],
            [252, 105.68],
            [253, 101.84],
            [254, 100.86],
            [255, 101.22],
            [256, 105.9],
            [257, 107.58],
            [258, 105.62],
            [259, 101.58],
            [260, 100.98],
            [261, 103.83],
            [262, 106.23],
            [263, 108.5],
            [264, 110.11],
            [265, 110.14],
            [266, 113.79],
            [267, 114.93],
            [268, 114.86],
            [269, 117.48],
            [270, 118.3],
            [271, 116.06],
            [272, 118.52],
            [273, 118.75],
            [274, 113.46],
            [275, 112.52],
            [276, 121.84],
            [277, 123.53],
            [278, 123.69],
            [279, 124.23],
            [280, 125.8],
            [281, 126.29],
            [282, 127.05],
            [283, 129.07],
            [284, 122.19],
            [285, 128.85],
            [286, 127.76],
            [287, 128.54],
            [288, 126.8],
            [289, 126.38],
            [290, 124.86],
            [291, 124.01],
            [292, 126.68],
            [293, 125.65],
            [294, 124.62],
            [295, 124.62],
            [296, 120],
            [297, 120],
            [298, 125.21],
            [299, 123],
            [300, 120.97]
        ],
        a = [
            [0, 98.26024802343454],
            [1, 96.1061405866605],
            [2, 97.72624886720797],
            [3, 99.1951890699357],
            [4, 100.67926166680738],
            [5, 103.02386220968994],
            [6, 102.0138812491507],
            [7, 101.23467931959804],
            [8, 102.8131781014294],
            [9, 102.4728119043316],
            [10, 103.63860043177547],
            [11, 102.99615492868004],
            [12, 104.74313999059066],
            [13, 103.54894381217198],
            [14, 103.5776016249067],
            [15, 101.54951504712984],
            [16, 100.38252075514949],
            [17, 100.69343723920595],
            [18, 99.27635556952734],
            [19, 97.06808126683654],
            [20, 96.9565928596161],
            [21, 97.59015835019423],
            [22, 99.06550856757548],
            [23, 99.73706662211106],
            [24, 101.57812123311558],
            [25, 102.86041095409188],
            [26, 100.62157315761544],
            [27, 98.9871083743568],
            [28, 101.43135450742919],
            [29, 103.35759345060893],
            [30, 104.23614472855787],
            [31, 103.21564918422366],
            [32, 105.72790647058348],
            [33, 104.32598697454769],
            [34, 101.94543374865565],
            [35, 103.06664240680209],
            [36, 100.90737488981384],
            [37, 99.3214647604222],
            [38, 98.5115869849437],
            [39, 100.11326220054825],
            [40, 100.42487405446464],
            [41, 98.67645939634654],
            [42, 100.28237673199506],
            [43, 102.52827342484987],
            [44, 102.33436405320964],
            [45, 99.85957913451234],
            [46, 99.23548112898446],
            [47, 100.91369881480395],
            [48, 99.79858498718339],
            [49, 98.76811481326227],
            [50, 100.54820477149312],
            [51, 99.03812278508684],
            [52, 98.18586647015366],
            [53, 97.3935390168493],
            [54, 97.49925543976389],
            [55, 97.10343131551475],
            [56, 97.23095883786222],
            [57, 97.27376758591804],
            [58, 95.465027985122],
            [59, 97.02834021349442],
            [60, 95.07861954573013],
            [61, 95.17106231083059],
            [62, 96.87785258315893],
            [63, 98.43545307610526],
            [64, 100.14230634282667],
            [65, 100.02335456480225],
            [66, 100.12041825535015],
            [67, 98.36177755108493],
            [68, 96.06823680130732],
            [69, 94.57697827778837],
            [70, 93.02573906301616],
            [71, 92.05843295045315],
            [72, 90.73448906201293],
            [73, 90.97170154880165],
            [74, 89.22449915289593],
            [75, 88.12561345883249],
            [76, 90.18678239305133],
            [77, 91.48213287293133],
            [78, 92.40836149737868],
            [79, 91.99767316101091],
            [80, 89.99230885697713],
            [81, 92.04602024344483],
            [82, 92.26685467235876],
            [83, 90.87903984639566],
            [84, 89.80284876202818],
            [85, 91.03617667650113],
            [86, 92.28106421122439],
            [87, 92.23531558008021],
            [88, 92.83051226712035],
            [89, 91.85376119854567],
            [90, 92.0178170003397],
            [91, 92.55698923689954],
            [92, 92.86587745996339],
            [93, 91.40988958850399],
            [94, 90.88319068456352],
            [95, 89.42728106112202],
            [96, 88.3358369231186],
            [97, 90.11669866919435],
            [98, 90.28303769014485],
            [99, 89.44888089484229],
            [100, 90.09578835160755],
            [101, 89.04867240355071],
            [102, 89.5628915081993],
            [103, 89.74161120868064],
            [104, 91.48312565995673],
            [105, 91.16162077040521],
            [106, 92.21107886543393],
            [107, 94.49114192483255],
            [108, 93.710224340074],
            [109, 95.89472073829002],
            [110, 93.92514738521464],
            [111, 93.93575301195983],
            [112, 94.62015680123744],
            [113, 94.25214912135537],
            [114, 94.67274027836498],
            [115, 94.74016244222092],
            [116, 92.59295680836253],
            [117, 90.8550407839095],
            [118, 91.26359785110812],
            [119, 89.14328126449206],
            [120, 90.80121829855592],
            [121, 91.01619155075662],
            [122, 88.79352288952566],
            [123, 90.41910612912766],
            [124, 88.77830042021947],
            [125, 87.8028385782326],
            [126, 89.13541626638441],
            [127, 89.75584017908884],
            [128, 89.08257357751198],
            [129, 86.91862136353143],
            [130, 86.37450634053249],
            [131, 88.1830723205982],
            [132, 88.42315973274366],
            [133, 86.59054286895204],
            [134, 87.97490041476145],
            [135, 86.02860936438705],
            [136, 87.0568971991072],
            [137, 87.72270760084348],
            [138, 89.37903379070171],
            [139, 91.4167305914342],
            [140, 90.04509790712497],
            [141, 91.7976613222188],
            [142, 91.09339438313819],
            [143, 91.36197066614439],
            [144, 92.65085862758393],
            [145, 91.25365221297412],
            [146, 92.43314574748392],
            [147, 90.44563234660176],
            [148, 89.41667990438724],
            [149, 90.9145698863032],
            [150, 92.46371786887678],
            [151, 90.86529274594392],
            [152, 92.1153399772047],
            [153, 91.64171449218533],
            [154, 92.8594658621286],
            [155, 92.03188945365132],
            [156, 89.88511604681226],
            [157, 89.18653625282872],
            [158, 88.60429234327754],
            [159, 87.4009049460743],
            [160, 88.39986399269704],
            [161, 89.79225717781061],
            [162, 90.61314396024011],
            [163, 92.71754684914049],
            [164, 92.50127733370579],
            [165, 92.7637669749456],
            [166, 93.91494860998415],
            [167, 91.60359992469526],
            [168, 91.9859634428551],
            [169, 90.66628877985616],
            [170, 90.1636863642903],
            [171, 89.04882764977566],
            [172, 89.2405411400124],
            [173, 87.10704142787844],
            [174, 86.9575500594171],
            [175, 85.1426147114763],
            [176, 85.41724082036052],
            [177, 85.28236666618062],
            [178, 83.36078425811279],
            [179, 84.40242825415864],
            [180, 83.24582109892835],
            [181, 84.451464990999],
            [182, 82.43157831282275],
            [183, 83.60939245886368],
            [184, 82.07391188312481],
            [185, 81.67944373264405],
            [186, 80.87679275181347],
            [187, 80.41563861089463],
            [188, 80.04312424915484],
            [189, 81.84456646062388],
            [190, 83.44962848103316],
            [191, 81.56337523694553],
            [192, 82.40266195032778],
            [193, 83.24867615445365],
            [194, 81.32520059084214],
            [195, 81.0118189178466],
            [196, 80.27990803218682],
            [197, 79.09846357378218],
            [198, 77.86895053237227],
            [199, 79.63224544815941],
            [200, 80.53408037566378],
            [201, 81.35561025349658],
            [202, 79.60476113330685],
            [203, 78.2564105428625],
            [204, 79.59924955533029],
            [205, 81.57314521692484],
            [206, 82.9944842627111],
            [207, 81.54591271089055],
            [208, 82.69383247405153],
            [209, 83.81985366342826],
            [210, 84.9389174504135],
            [211, 84.90015915101549],
            [212, 84.53921572112021],
            [213, 85.93985892555509],
            [214, 84.12642911306757],
            [215, 85.76845551786062],
            [216, 83.94241350374074],
            [217, 82.0903246368704],
            [218, 81.84858979167741],
            [219, 82.10320080469587],
            [220, 80.19409448447904],
            [221, 80.27599338636723],
            [222, 79.58888102976113],
            [223, 79.04122623767395],
            [224, 77.3519021345596],
            [225, 78.69588234873278],
            [226, 77.69262061750146],
            [227, 78.63211844189551],
            [228, 76.98691275478916],
            [229, 77.03970739915258],
            [230, 78.7061665219145],
            [231, 80.47469611929706],
            [232, 78.94857438870827],
            [233, 80.38246417049186],
            [234, 81.12273526064348],
            [235, 79.28841260017153],
            [236, 80.96930232200599],
            [237, 81.61076310727877],
            [238, 83.34430949579435],
            [239, 85.34419799798559],
            [240, 83.60804307601666],
            [241, 81.83323004070569],
            [242, 80.63697626519244],
            [243, 81.46868640025727],
            [244, 82.18667000881399],
            [245, 83.69624039187251],
            [246, 83.02359030901547],
            [247, 82.12459575686621],
            [248, 82.94104941360557],
            [249, 82.54333969578923],
            [250, 82.83455686437946],
            [251, 83.10044742025332],
            [252, 84.92263724204582],
            [253, 82.89419118486504],
            [254, 83.65564612054018],
            [255, 84.2238632816833],
            [256, 84.17727416163251],
            [257, 85.25195426521198],
            [258, 85.43326313351893],
            [259, 83.76143035294429],
            [260, 84.30729277290415],
            [261, 85.69949680670628],
            [262, 84.96938169364606],
            [263, 83.08567501446933],
            [264, 81.26854769442708],
            [265, 80.52881117558594],
            [266, 81.47521317757013],
            [267, 79.81206281541141],
            [268, 79.95679217657451],
            [269, 81.07782460437826],
            [270, 82.15684271715286],
            [271, 81.63117757849108],
            [272, 80.68888746897514],
            [273, 80.86891574883325],
            [274, 80.0625485789041],
            [275, 80.75864832504661],
            [276, 82.1132203973964],
            [277, 80.59671134082464],
            [278, 80.12020001319105],
            [279, 81.51404666884135],
            [280, 80.04631353428532],
            [281, 78.48054360978934],
            [282, 79.98879258935195],
            [283, 80.68038021257752],
            [284, 81.11274942381819],
            [285, 82.78031861113435],
            [286, 81.58288190068303],
            [287, 79.92566815234477],
            [288, 79.39780484180012],
            [289, 80.79223622429743],
            [290, 78.79156134544758],
            [291, 78.57791871293097],
            [292, 79.37924156664599],
            [293, 80.98984282006332],
            [294, 82.12275132944421],
            [295, 82.59505270999396],
            [296, 83.24066889098746],
            [297, 81.77237457684683],
            [298, 81.71774275469474],
            [299, 82.14868738028801],
            [300, 81.49703056895763]
        ],
        r = [
            [0, 40.061454022768885],
            [1, 40.635156949732604],
            [2, 40.53776776011049],
            [3, 40.21238564797723],
            [4, 39.63095086698709],
            [5, 40.24088251224983],
            [6, 40.78973276846022],
            [7, 41.51970552688591],
            [8, 41.21411839547543],
            [9, 41.235586055698505],
            [10, 42.127861798907645],
            [11, 42.360116437339826],
            [12, 41.51617803584563],
            [13, 41.03939453858922],
            [14, 41.07835881986122],
            [15, 41.24592006299376],
            [16, 41.41280056911644],
            [17, 40.907455890998534],
            [18, 40.5109663296552],
            [19, 40.62173583956116],
            [20, 41.216657857585936],
            [21, 41.69233562697563],
            [22, 41.050905799350154],
            [23, 42.02567532888405],
            [24, 42.092803870021854],
            [25, 41.392271488496064],
            [26, 41.794728096579725],
            [27, 41.32980384047135],
            [28, 41.15634410695943],
            [29, 42.03321012656463],
            [30, 42.96967973677456],
            [31, 42.460450673359965],
            [32, 42.87950236337892],
            [33, 41.9900294221466],
            [34, 41.29466354773537],
            [35, 40.39257911989713],
            [36, 40.08870724573833],
            [37, 39.833525336972],
            [38, 39.015600133592464],
            [39, 38.91641645730885],
            [40, 38.15668205982623],
            [41, 38.330770382892126],
            [42, 37.97260130958892],
            [43, 37.55650282465566],
            [44, 37.22853059762209],
            [45, 36.770331142681755],
            [46, 37.52716086961696],
            [47, 37.648788539276225],
            [48, 38.24162895400035],
            [49, 37.51028741135227],
            [50, 37.43806099686155],
            [51, 37.72685364580459],
            [52, 37.52349601654522],
            [53, 37.03684637658039],
            [54, 37.88570247008039],
            [55, 38.01248879486971],
            [56, 37.85890743238137],
            [57, 36.96597578550524],
            [58, 36.668697600130116],
            [59, 36.12492627937955],
            [60, 36.38027262689858],
            [61, 35.7851117426896],
            [62, 35.05438305207042],
            [63, 35.046321932304636],
            [64, 34.900201824499305],
            [65, 35.42349240520429],
            [66, 35.63472795584702],
            [67, 34.84766737604994],
            [68, 34.64433764825818],
            [69, 34.090983902988086],
            [70, 33.540173596053656],
            [71, 33.53246968886741],
            [72, 33.20242150745747],
            [73, 32.93088509738136],
            [74, 32.34695869974867],
            [75, 32.59360563877414],
            [76, 32.688208085098005],
            [77, 32.107557632856754],
            [78, 32.882903593131594],
            [79, 33.08283518423532],
            [80, 32.29102439904254],
            [81, 32.073617118889956],
            [82, 31.951202885340557],
            [83, 32.724050994328145],
            [84, 33.311702045579594],
            [85, 33.339134038560715],
            [86, 33.62490446665433],
            [87, 34.25511081690533],
            [88, 33.49331757976164],
            [89, 33.17615562869932],
            [90, 32.88426770745365],
            [91, 32.3536370245622],
            [92, 32.54149198743793],
            [93, 32.69169662129821],
            [94, 32.13647697172857],
            [95, 31.73065684832845],
            [96, 31.78577384542032],
            [97, 31.341495254206887],
            [98, 31.024805366746154],
            [99, 30.982371911515738],
            [100, 31.75001950455182],
            [101, 31.003708419390133],
            [102, 30.772060004219814],
            [103, 30.660277431045376],
            [104, 30.589231371707932],
            [105, 30.615102709550335],
            [106, 30.974259050463345],
            [107, 31.03511735186067],
            [108, 31.31538081683338],
            [109, 31.08089143749029],
            [110, 31.47248811205169],
            [111, 31.484487673532293],
            [112, 31.799234612166508],
            [113, 31.886385738166826],
            [114, 31.846743858765755],
            [115, 31.31433765641171],
            [116, 31.84345472418879],
            [117, 31.05925539991021],
            [118, 31.22842982204837],
            [119, 30.963583086792323],
            [120, 31.20926790497046],
            [121, 31.50379713677508],
            [122, 30.90924283084084],
            [123, 31.268722560845752],
            [124, 31.23139722531469],
            [125, 31.43877093934236],
            [126, 31.47583824584618],
            [127, 32.11720846276429],
            [128, 32.18729920940966],
            [129, 32.231754046048955],
            [130, 32.706161712096225],
            [131, 32.231804834876236],
            [132, 31.99710376357018],
            [133, 31.20391211360592],
            [134, 31.976430253933074],
            [135, 31.182112968694724],
            [136, 31.65711914717718],
            [137, 32.21861935718812],
            [138, 32.95850115668097],
            [139, 32.5229000560408],
            [140, 32.94696990197851],
            [141, 33.01117127023744],
            [142, 32.93906243736419],
            [143, 32.18033689840181],
            [144, 32.40618235143754],
            [145, 32.02439154070381],
            [146, 31.903202735693448],
            [147, 31.659011556464453],
            [148, 31.48719042634855],
            [149, 32.19053070996908],
            [150, 31.757301877297344],
            [151, 32.039861607003374],
            [152, 31.846515807743113],
            [153, 31.947883961194396],
            [154, 31.225097940692326],
            [155, 31.654559762370962],
            [156, 31.443719658000074],
            [157, 31.754009916281817],
            [158, 31.40898304358593],
            [159, 30.75420168198264],
            [160, 31.482611694859596],
            [161, 31.69086364861555],
            [162, 31.65510796686457],
            [163, 31.558249376251084],
            [164, 31.63627822710952],
            [165, 32.17734021650264],
            [166, 31.894405236203006],
            [167, 31.265504820124107],
            [168, 31.172267783114776],
            [169, 31.2910735362817],
            [170, 30.963105702427328],
            [171, 31.293539981022807],
            [172, 30.955686264611384],
            [173, 31.343816286750688],
            [174, 31.08763312251826],
            [175, 30.942566139760448],
            [176, 31.212686284624134],
            [177, 31.18802551262495],
            [178, 30.720404716773835],
            [179, 30.64025024393071],
            [180, 30.958844766277217],
            [181, 30.588388946897464],
            [182, 30.824959181357567],
            [183, 30.96983576810567],
            [184, 30.518643534079672],
            [185, 30.258476502393183],
            [186, 30.755734531794722],
            [187, 31.104238524678795],
            [188, 30.78730920673751],
            [189, 31.23221375558426],
            [190, 31.813479329281595],
            [191, 32.249202434861175],
            [192, 31.493852238740878],
            [193, 32.220840684852114],
            [194, 32.85131808999396],
            [195, 32.413099075023936],
            [196, 31.948958433982458],
            [197, 31.424827911822224],
            [198, 32.02010392656338],
            [199, 32.76361130512194],
            [200, 32.05008507067489],
            [201, 32.10484814050228],
            [202, 32.08298876946126],
            [203, 32.54823350002478],
            [204, 31.993613016598758],
            [205, 31.503703748427554],
            [206, 31.616261179622803],
            [207, 31.800629850441247],
            [208, 31.851910241809723],
            [209, 31.440174280896827],
            [210, 30.72148118445242],
            [211, 30.14493748914188],
            [212, 29.77239940751685],
            [213, 29.628673518130896],
            [214, 30.024068598314763],
            [215, 30.17864226090244],
            [216, 30.663938979497605],
            [217, 30.621680477442187],
            [218, 29.932669091105875],
            [219, 29.339721016989024],
            [220, 28.836407173479504],
            [221, 29.239638267687422],
            [222, 28.564509056681],
            [223, 28.96379305620135],
            [224, 29.451401412728742],
            [225, 29.646755597752616],
            [226, 29.865419794136223],
            [227, 29.184800436350443],
            [228, 29.64152182630406],
            [229, 29.269351999861204],
            [230, 28.554880690813885],
            [231, 28.541682194865036],
            [232, 29.155868514751962],
            [233, 28.73012336977327],
            [234, 28.29526606712536],
            [235, 27.728764537555044],
            [236, 28.075484489815047],
            [237, 28.232483560197686],
            [238, 27.555475626826933],
            [239, 27.424993020262768],
            [240, 27.2970628152968],
            [241, 27.65777240211076],
            [242, 27.510455723176047],
            [243, 27.980959829376484],
            [244, 27.787074613270846],
            [245, 27.627481794656674],
            [246, 26.987568121921477],
            [247, 27.46740641221834],
            [248, 27.595390154688772],
            [249, 28.1460755075782],
            [250, 28.035814592543687],
            [251, 27.781493849304717],
            [252, 28.342008537980007],
            [253, 27.985831453042724],
            [254, 28.62550523312068],
            [255, 29.042006957384928],
            [256, 28.920375654934794],
            [257, 28.314012376907957],
            [258, 28.93543933523809],
            [259, 28.74228750126434],
            [260, 28.400280639938586],
            [261, 28.373837926173614],
            [262, 28.879358055403017],
            [263, 29.489891947994778],
            [264, 29.02455881089597],
            [265, 28.384047592166922],
            [266, 28.327690787058877],
            [267, 28.029362046316887],
            [268, 28.665302645614837],
            [269, 28.356684049966546],
            [270, 28.159938263032263],
            [271, 28.82118065313059],
            [272, 28.277426860878606],
            [273, 28.34149257063013],
            [274, 28.384265905616946],
            [275, 28.7001370063004],
            [276, 28.68301751769078],
            [277, 29.250388258859466],
            [278, 28.754023740337335],
            [279, 28.795312961802594],
            [280, 29.360414616447596],
            [281, 28.6990488935188],
            [282, 29.04456949927702],
            [283, 28.71231990478102],
            [284, 29.295630674671447],
            [285, 28.576580637142808],
            [286, 28.174528864124955],
            [287, 28.386155382300434],
            [288, 28.921711546311556],
            [289, 28.326500500525743],
            [290, 28.39710149089413],
            [291, 28.29234650026321],
            [292, 28.80764183327361],
            [293, 28.300079946795254],
            [294, 28.054178935561048],
            [295, 27.75091947516705],
            [296, 27.842371816830934],
            [297, 28.514063096192704],
            [298, 28.830126776353854],
            [299, 28.92158408826073],
            [300, 28.258117436929886]
        ],
        l = {
            series: {
                shadowSize: 0
            },
            xaxis: {
                tickSize: 300,
                ticks: [
                    [0, "Mon"],
                    [75, "Tues"],
                    [150, "Wed"],
                    [225, "Thurs"],
                    [300, "Fri"]
                ]
            },
            yaxis: {
                show: !0,
                labelWidth: 0,
                labelHeight: 0,
                ticks: i,
                color: "transparent",
                tickColor: "#c3d0d6"
            },
            grid: {
                show: !0,
                borderWidth: 0,
                shadow: !1,
                labelMargin: 0
            }
        }, c = {
            data: o,
            color: "transparent"
        };
    this.plot = $.plot(e, [c], l);
    var h = [],
        u = [],
        d = [],
        p = 0,
        f = s.length,
        m = 10;
    clearInterval(this.timer), this.timer = setInterval(function () {
        h.push(s[p]), u.push(a[p]), d.push(r[p]);
        var e = {
            data: h,
            color: "#FC4E00"
        }, i = {
                data: u,
                color: "#3A5A62"
            }, n = {
                data: d,
                color: "#3F2D22"
            };
        t.plot.setData([e, i, n]), t.plot.draw(), p++, p === f && clearInterval(t.timer)
    }, m)
}, tl.story.GlobeAndMail.prototype.spin = function () {
    var t = $(".news-clippings").width(),
        e = $(".news-clippings").height(),
        i = $(".news-clippings img"),
        n = 1750,
        o = 1e3;
    i.each(function (s) {
        var a = $(i[s]),
            r = parseInt(a.css("top"), 0),
            l = 100 * (r / e),
            c = 1 + Math.random(),
            h = r + 2 * r * c,
            u = parseInt(a.css("left"), 0),
            d = 100 * (u / t),
            p = u + u * c;.4 > u / t && (p = u * -1 * c), 0 === s && (p = -200, h = 200), a.css("top", h + "px"), a.css("left", p + "px"), a.css("opacity", 1);
        var f = Math.random() * (n - o) + o,
            m = s;
        a.animate({
            top: l + "%",
            left: d + "%",
            opacity: 1
        }, f, "swing", function () {
            10 === m && ($(".scissors").css("left", "100%"), $(".scissors").css("top", "50%"), $(".scissors").animate({
                opacity: 1,
                left: "0%",
                top: "0%"
            }, 500, "swing"))
        })
    })
}, tl.story.GlobeAndMail.prototype.activate = function () {
    var t = this;
    $(".notes li").eq(0).show(), setTimeout($.proxy(this.createChart, this), 0), $(window).on("resize", $.proxy(this.resizeClippings, this)), this.resizeClippings(), $(".news-clippings").waypoint(function () {
        t.bSpun || (t.bSpun = !0, t.spin())
    }, {
        offset: "90%"
    }), this.robStoryPages = new tl.ui.Gallery($("#rob-story-pages-gallery"));
    var e;
    try {
        document.createEvent("TouchEvent"), e = !0
    } catch (i) {
        e = !1
    }
    e || (this.robLoupe = new tl.ui.Loupe("#rob-loupe", 107, 193), $(".venn .circle").on("mousemove", function (t) {
        if ($(this).hasClass("active")) {
            var e = 4,
                i = 5,
                n = 6;
            $(this).removeClass("fade"), $(this).siblings().removeClass("active").css("z-index", e).removeClass("fade");
            var o, s = $(this).parent().offset(),
                a = t.pageX - s.left - $(this).position().left,
                r = t.pageY - s.top - $(this).position().top,
                l = a / $(this).width(),
                c = r / $(this).height(),
                h = $("circle.orange"),
                u = $("circle.red"),
                d = $("circle.blue");
            $(this).hasClass("red") ? .5 > l ? ($(".circle.orange").addClass("fade"), o = 2, h.css("z-index", e), u.css("z-index", i), d.css("z-index", n)) : ($(".circle.blue").addClass("fade"), o = 1, h.css("z-index", i), u.css("z-index", n), d.css("z-index", e)) : $(this).hasClass("blue") ? .33 > c ? ($(".circle.orange").addClass("fade"), o = 2, h.css("z-index", e), u.css("z-index", i), d.css("z-index", n)) : ($(".circle.red").addClass("fade"), o = 3, h.css("z-index", i), u.css("z-index", e), d.css("z-index", n)) : $(this).hasClass("orange") && (.33 > c ? ($(".circle.blue").addClass("fade"), o = 1, h.css("z-index", i), u.css("z-index", n), d.css("z-index", e)) : ($(".circle.red").addClass("fade"), o = 3, h.css("z-index", i), u.css("z-index", e), d.css("z-index", n))), $(".notes li").hide(), $(".notes li").eq(o).show()
        }
    }), $(".venn .circle").on("mouseover", function () {
        $(this).hasClass("active") || ($(this).siblings().removeClass("active").css("z-index", 4).removeClass("fade"), $(this).addClass("active"))
    }), $(".venn").on("mouseleave", function () {
        $(".venn .circle").removeClass("active").removeClass("fade"), $(".notes li").hide(), $(".notes li").eq(0).show()
    }))
}, tl.register("tl.story.Medium", "/story/medium/"), tl.story.Medium = function () {
    console.log("instansiate: Medium"), this.setTitle("The making of Medium.com | Teehan+Lax")
}, tl.story.Medium.prototype = new tl.shell.Page, tl.story.Medium.prototype.title = "A Place for Sharing Ideas and Stories", tl.story.Medium.prototype.titleTimer = null, tl.story.Medium.prototype.counterStart = 0, tl.story.Medium.prototype.kmFinish = 4239, tl.story.Medium.prototype.milesFinish = 2633, tl.story.Medium.prototype.counterDuration = 90, tl.story.Medium.prototype.counterFrame = 0, tl.story.Medium.prototype.typeTitle = function (t) {
    var e = $("#main-title"),
        i = e.text();
    e.text(i + t)
}, tl.story.Medium.prototype.easeOut = function (t, e, i, n) {
    return t === n ? e + i : i * (-Math.pow(2, -10 * t / n) + 1) + e
}, tl.story.Medium.prototype.counter = function () {
    this.counterFrame++;
    var t = this.easeOut(this.counterFrame, this.counterStart, this.kmFinish, this.counterDuration),
        e = this.easeOut(this.counterFrame, this.counterStart, this.milesFinish, this.counterDuration);
    this.kmDisplay.text(this.prettyNumber(t)), this.milesDisplay.text(this.prettyNumber(e)), this.counterFrame < this.counterDuration && window.requestAnimFrame($.proxy(this.counter, this))
}, tl.story.Medium.prototype.prettyNumber = function (t) {
    return ("" + Math.floor(t)).replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}, tl.story.Medium.prototype.activate = function () {
    var t = this,
        e = new Image;
    e.src = "/resources/img/story/medium/header-bg.jpg", this.collectionsGallery = new tl.ui.LoopingCarousel("#collections-gallery"), this.conceptsGallery = new tl.ui.Gallery("#initial-concepts"), this.launchGallery = new tl.ui.Gallery("#launch-day-gallery"), this.finalGallery = new tl.ui.Gallery("#final-gallery"), $(window).width() > 1e3 && ($("#main-title").text(""), this.titleTimer = setTimeout(function () {
        $("#main-title").text(t.title)
    }, 5e3), $("#intro-video").on("play", function () {
        if (0 === $("#main-title").text().length) {
            var e = t.title.split("");
            clearTimeout(t.titleTimer), $(e).each(function (e, i) {
                setTimeout(function () {
                    t.typeTitle(i)
                }, 100 + 120 * e)
            })
        }
    })), $(".twitter-dm").waypoint(function () {
        $(this).addClass("animate")
    }, {
        offset: "50%"
    }), $("#state-gallery .interaction").on("click", function () {
        $("#state-demo")[0].play()
    }), $("#state-demo").waypoint(function () {
        window.innerWidth > 500 && this.play()
    }, {
        offset: "50%"
    }), this.kmDisplay = $(".stats .km"), this.milesDisplay = $(".stats .miles"), $(".stats").waypoint(function () {
        t.counter()
    }, {
        offset: "75%"
    }), $(".branding").waypoint(function () {
        $(this).addClass("animate")
    }, {
        offset: "25%"
    }), $(".two-paths").waypoint(function () {
        $(".option.multiple").addClass("fade")
    }, {
        offset: "25%"
    }), $("#creation-gallery .interaction").on("click", function () {
        $("#writing-demo")[0].play()
    }), $("#writing-demo").waypoint(function () {
        window.innerWidth > 500 && this.play()
    }, {
        offset: "50%"
    }), $(".template-wrapper .template").on("click", function () {
        var t = $("img", this),
            e = new Image,
            i = t.attr("src").replace("-small.", ".");
        $(".medium-image-pop").addClass("active"), $(e).on("load", function () {
            $(".medium-image-pop img").attr("src", i).addClass("active"), e = null
        }), e.src = i
    }), $(".medium-image-pop").on("click", function () {
        $(this).removeClass("active"), $(".active", this).removeClass("active")
    }), $(".prototype-wrapper .prototype").on("click", function () {
        var t = $(this).attr("data-video"),
            e = $(".medium-prototype-pop");
        $(".active", e).removeClass("active"), $("." + t, e).addClass("active")[0].play(), e.addClass("active")
    }), $(".medium-prototype-pop").on("click", function () {
        $(this).removeClass("active"), $(".active", this).removeClass("active").stop()
    })
}, tl.story.Medium.prototype.deactivate = function () {}, tl.register("tl.story.Readability", "/story/readability/"), tl.story.Readability = function () {
    console.log("instansiate: Readability"), this.setTitle("A Platform for Reading - Making of Readability | Teehan+Lax")
}, tl.story.Readability.prototype = new tl.shell.Page, tl.story.Readability.prototype.fonts = {
    values: ["sentinel", "vitesse", "mercury", "whitney", "gotham"],
    index: 0
}, tl.story.Readability.prototype.sizes = {
    values: ["medium", "large", "small"],
    index: 0
}, tl.story.Readability.prototype.colours = {
    values: ["light", "dark"],
    index: 0
}, tl.story.Readability.prototype.activate = function () {
    this.beforeAfterSlider = new tl.ui.SideBySide("#before-after-slider"), this.tweetmagGallery = new tl.ui.Gallery("#tweetmag-gallery"), this.finalProductGallery = new tl.ui.Gallery("#final-product"), this.readabilityLoupe = new tl.ui.Loupe("#readability-loupe", 400, 203), $(".trigger.kiss").on("click", function () {
        $(".kiss-audio")[0].play()
    }).on("mouseleave", function () {
        var t = $(".kiss-audio")[0];
        t.pause(), t.currentTime = 0
    }), $(".trigger.rush").on("click", function () {
        $(".rush-audio")[0].play()
    }).on("mouseleave", function () {
        var t = $(".rush-audio")[0];
        t.pause(), t.currentTime = 0
    }), $(".type-settings .font").on("click", $.proxy(this.changeSetting, this)), $(".type-settings .size").on("click", $.proxy(this.changeSetting, this)), $(".type-settings .colour").on("click", $.proxy(this.changeSetting, this)), $("#content-as-interface .interaction").on("click", function () {
        $("#interface-video")[0].play()
    }), $("#interface-video").waypoint(function () {
        window.innerWidth > 500 && this.play()
    }, {
        offset: "50%"
    }), $(".type-viewer-simple").on("click", function () {
        var t = $(".screens-simple img", this),
            e = $(".active", this),
            i = t.index(e),
            n = i + 1 === t.length ? 0 : i + 1;
        e.removeClass("active"), $(t[n]).addClass("active")
    })
}, tl.story.Readability.prototype.deactivate = function () {}, tl.story.Readability.prototype.changeFont = function () {
    var t = this.fontIndex + 1 === this.fonts.length ? 0 : this.fontIndex + 1,
        e = $(".type-settings .font");
    e.removeClass(this.fonts[this.fontIndex]).addClass(this.fonts[t]), this.fontIndex = t
}, tl.story.Readability.prototype.changeSize = function () {
    var t = this.sizeIndex + 1 === this.sizes.length ? 0 : this.sizeIndex + 1,
        e = $(".type-settings .size");
    e.removeClass(this.sizes[this.sizeIndex]).addClass(this.sizes[t]), this.sizeIndex = t
}, tl.story.Readability.prototype.changeColour = function () {
    var t = this.colourIndex + 1 === this.colours.length ? 0 : this.colourIndex + 1,
        e = $(".type-settings .colour");
    e.removeClass(this.colours[this.colourIndex]).addClass(this.colours[t]), this.colourIndex = t
}, tl.story.Readability.prototype.changeSetting = function (t) {
    var e = $(t.target),
        i = e.hasClass("font") ? this.fonts : e.hasClass("size") ? this.sizes : this.colours,
        n = i.index + 1 === i.values.length ? 0 : i.index + 1;
    e.removeClass(i.values[i.index]).addClass(i.values[n]), i.index = n, this.changeScreen()
}, tl.story.Readability.prototype.changeScreen = function () {
    var t = $(".type-viewer .screens img"),
        e = $("#" + this.fonts.values[this.fonts.index] + "-" + this.sizes.values[this.sizes.index] + "-" + this.colours.values[this.colours.index]);
    t.removeClass("active"), e.addClass("active")
}, tl.register("tl.story.Shipwire", "/story/shipwire/"), tl.story.Shipwire = function () {
    console.log("instansiate: Shipwire"), this.setTitle("Shipping a Great Idea - The making of Shipwire.com | Teehan+Lax")
}, tl.story.Shipwire.prototype = new tl.shell.Page, tl.story.Shipwire.prototype.activate = function () {
    console.log(this._title), $(".design-principles").waypoint(function () {
        $(this).addClass("animate")
    }, {
        offset: "25%"
    }), $(".first-concept").waypoint(function () {
        $(".scratch", this).addClass("animate")
    }, {
        offset: "25%"
    }), this.moodboardGallery = new tl.ui.Gallery($("#moodboard-gallery")), this.visualLanguageGallery = new tl.ui.Gallery($("#visual-language")), this.finalProductGallery = new tl.ui.Gallery($("#final-product")), this.manifestoSlider = new tl.ui.LoopingCarousel($(".more-than-box"), this.changeBoxTagline), this.moreThanBox = new tl.ui.LoopingCarousel($(".manifesto")), this.changeBoxTagline(), $(".shipwire-logo-box").waypoint(function () {
        $(this).addClass("animate")
    }, {
        offset: "25%"
    }), $("#cart-video .interaction").on("click", function () {
        $("#cart-demo")[0].play()
    }), $("#cart-demo").waypoint(function () {
        window.innerWidth > 500 && this.play()
    }, {
        offset: "50%"
    })
}, tl.story.Shipwire.prototype.deactivate = function () {
    $(".design-principles li").off("click"), $(".bright").off("click"), $("#cart-video .interaction").off("click"), $("#cart-demo").waypoint("destroy"), $(".more-than-box").off("click"), this.moodboardGallery.deactivate(), this.visualLanguageGallery.deactivate(), this.finalProductGallery.deactivate(), this.manifestoSlider.deactivate()
}, tl.story.Shipwire.prototype.changeBoxTagline = function () {
    var t = $("#more-than-box-tagline");
    t.addClass("hide"), setTimeout(function () {
        var e = $(".more-than-box .item"),
            i = Math.ceil(e.length / 2) - 1;
        t.text($(e[i]).attr("data-tagline")).removeClass("hide")
    }, 700)
}, tl.register("tl.story.Stackup", "/story/stackup/"), tl.story.Stackup = function () {
    console.log("instansiate: Stackup"), this.setTitle("Pictures Instead of Words - Making of stackup.bell.ca | Teehan+Lax")
}, tl.story.Stackup.prototype = new tl.shell.Page, tl.story.Stackup.prototype.activate = function () {
    $(".carousel .item").click(function () {
        $(this).is(":last-child") ? $(this).fadeOut("slow", function () {
            $(this).removeClass("active"), $(".carousel .item:first-child").fadeIn("slow")
        }) : $(this).fadeOut("slow", function () {
            $(this).removeClass("active"), $(this).next(".item").fadeIn("slow")
        })
    }), $.ajax({
        type: "POST",
        url: "/resources/json/stackup.json",
        dataType: "json",
        success: function (t) {
            for (var e = 0; t.length > e; e++) $(".scrollable .items").append("<li class='item' data-phone-id='" + t[e].id + "'><img src='//s3.amazonaws.com/bell-superphones/" + t[e].image + "' alt='" + t[e].name + "' /></li>");
            $(".scrollable .items").simplyScroll()
        }
    });
    var t;
    $(".scrollable .items").on("click", ".item", function () {
        $(this).siblings().animate({
            opacity: .25
        }, 100), $(this).animate({
            opacity: 1
        }, 300), t = $(this).attr("data-phone-id"), $.ajax({
            type: "POST",
            url: "/api/index/" + t,
            dataType: "json",
            success: function (t) {
                $(".specs .make").text(t[0].name), $(".specs .speed").text(t[0].text), $(".specs .processor").text(t[1].text), $(".specs .size").text(t[2].text), $(".specs .camera").text(t[3].text), $(".specs ul").delay(300).fadeIn()
            }
        })
    }), this.finalGallery = new tl.ui.Gallery($(".final-gallery"))
}, tl.story.Stackup.prototype.deactivate = function () {
    $(".carousel .item").off("click"), $(".scrollable .items").off("click"), this.finalGallery.deactivate()
}, tl.register("tl.story.TeehanLax", "/story/teehan-lax/"), tl.story.TeehanLax = function () {
    console.log("instansiate: TeehanLax"), this.setTitle("The Story of Our Company - The Making of Teehan+Lax | Teehan+Lax")
}, tl.story.TeehanLax.prototype = new tl.shell.Page, tl.story.TeehanLax.prototype.resizeHandlerRef = null, tl.story.TeehanLax.prototype.activate = function () {
    this.moodboardGallery = new tl.ui.Gallery($("#office-gallery")), $(".time-split").waypoint(function () {
        $(this).addClass("animate")
    }, {
        offset: "50%"
    }), $(".trigger").on("click", function () {
        $(".heat-audio")[0].play()
    }).on("mouseleave", function () {
        var t = $(".heat-audio")[0];
        t.pause(), t.currentTime = 0
    }), $(".program-options").waypoint(function () {
        $(this).addClass("animate")
    }, {
        offset: "50%"
    }), $(".lizard").waypoint(function () {
        $(this).addClass("animate")
    }, {
        offset: "50%"
    }), $(".card").on("click", function () {
        $(this).toggleClass("open")
    }).on("mouseleave", function () {
        $(this).removeClass("open")
    }), $(".sites-gallery").on("click", function () {
        var t = $(this);
        t.hasClass("closed") && (t.removeClass("closed"), setTimeout(function () {
            t.addClass("opened")
        }, 1100))
    }), $(".sites-gallery .close-button").on("click", function (t) {
        t.stopPropagation();
        var e = $(this).parent(),
            i = $("img", e);
        e.removeClass("opened").addClass("closed"), i.css("margin-left", "")
    }), $(".iphone-psd").waypoint(function () {
        $(this).addClass("animate")
    }, {
        offset: "25%"
    }), $(".timeline-slider .dates").fitText(.5), $(".timeline-slider img").on("mousedown mouseup", function (t) {
        t.preventDefault();
        var e = $(this);
        e.toggleClass("grabbing"), $.data(e[0], "x", t.clientX)
    }), $(".timeline-slider img").on("mouseleave", function () {
        $(this).removeClass("grabbing")
    }), $(".timeline-slider img").on("mousemove", function (t) {
        if ($(this).hasClass("grabbing")) {
            var e = $(this),
                i = $(window).width();
            if (e.width() > i) {
                var n = $.data(e[0], "x"),
                    o = t.clientX - n,
                    s = parseInt(e.css("margin-left"), 0),
                    a = -1 * (i / 2 - 50),
                    r = -1 * (e.width() - i / 2 + 50),
                    l = s + o > a ? a : r > s + o ? r : s + o;
                $.data(e[0], "x", n + o), e.css("margin-left", l)
            } else e.css("margin-left", "")
        }
    }), this.resizeHandlerRef = $.proxy(this.resizeHandler, this), $(document).on("resize", this.resizeHandlerRef)
}, tl.story.TeehanLax.prototype.deactivate = function () {
    $(".timeline-slider img").off("mousedown mouseup mouseleave mousemove"), $(document).off("resize", this.resizeHandlerRef)
}, tl.story.TeehanLax.prototype.resizeHandler = function () {
    var t = $(".timeline-slider img"),
        e = $(window).width();
    t.each(function (t, i) {
        var n = $(i);
        e > n.width() ? n.addClass("no-grab").css("margin-left", "") : n.removeClass("no-grab")
    })
}, tl.register("tl.Fullscreen"), tl.Fullscreen = {}, tl.Fullscreen._inited = !1, tl.Fullscreen._currIndex = 0, tl.Fullscreen.animating = !1, tl.Fullscreen._init = function () {
    this._inited || (console.log("init FullScreen"), this.gallery = $('<div id="gallery-fullscreen"><div class="center"><div class="contents"></div></div><div class="caption"><span class="count"></span><span class="text"></span><span class="fullscreen icon" data-icon="D"><span>Full Screen</span></span></div></div>').appendTo("body"), this.contents = $(".contents", this.gallery), this.caption = $(".text", this.gallery), this.count = $(".count", this.gallery), this.fullscreen = $(".fullscreen", this.gallery), this._inited = !0, this.contents.on("click mousemove", $.proxy(this._mouseHandler, this)), this.contents.hammer().bind("swipe", $.proxy(this._swipeHandler, this)), this.fullscreen.on("click", $.proxy(this.close, this)), $(window).on("keyup", $.proxy(this._keyHandler, this)))
}, tl.Fullscreen._mouseHandler = function (t) {
    var e = t.clientX,
        i = this.gallery.width(),
        n = e > i / 2 ? "next" : "prev";
    "click" === t.type && ("next" === n ? this.next() : this.previous()), this.gallery.removeClass("next prev").addClass(n)
}, tl.Fullscreen._swipeHandler = function (t) {
    "right" === t.direction ? this.previous() : "left" === t.direction && this.next()
}, tl.Fullscreen._keyHandler = function (t) {
    27 === t.keyCode ? this.close() : 39 === t.keyCode ? this.next() : 37 === t.keyCode && this.previous()
}, tl.Fullscreen.open = function (t, e) {
    this._init(), t.clone().appendTo(this.contents), this.images = $("img", this.contents), this.images.each(function (t, e) {
        var i = $(e).attr("src").replace("-small.", "-big.");
        $(e).attr("src", i)
    }), this.images.removeClass("active"), $(this.images[e]).addClass("active"), this._currIndex = e, this.setCaption($(this.images[e]).attr("data-caption")), this.setCount(), this.gallery.css("top", $(document).scrollTop()), $("body").addClass("fullscreen-gallery")
}, tl.Fullscreen.close = function () {
    this.images.remove(), this.caption.text(""), this._currIndex = 0, $("body").removeClass("fullscreen-gallery"), this.gallery.css("top", "")
}, tl.Fullscreen.next = function () {
    var t = this._currIndex + 1 === this.images.length ? 0 : this._currIndex + 1;
    this.goTo(t)
}, tl.Fullscreen.previous = function () {
    var t = 0 === this._currIndex ? this.images.length - 1 : this._currIndex - 1;
    this.goTo(t)
}, tl.Fullscreen.goTo = function (t) {
    if (!this.animating) {
        this.animating = !0;
        var e = $(this.images[t]),
            i = this;
        this.gallery.addClass("animating"), setTimeout(function () {
            i.images.removeClass("active"), e.addClass("active"), i.gallery.removeClass("animating"), i._currIndex = t, i.setCaption(e.attr("data-caption")), i.setCount(), i.animating = !1
        }, 500)
    }
}, tl.Fullscreen.setCaption = function (t) {
    this.caption.html(t)
}, tl.Fullscreen.setCount = function () {
    var t = this._currIndex + 1;
    this.count.text(t + "/" + this.images.length)
}, tl.register("tl.ui.Gallery"), tl.ui.Gallery = function (t) {
    console.log("instansiate: Gallery"), this.el = $(t), this.interaction = $(".interaction", this.el), this.images = $(".contents img:not(.spacer)", this.el), this.caption = $(".caption .text", this.el), this.count = $(".caption .count", this.el), this.fullscreen = $(".fullscreen", this.el), this.mouseHandlerRef = $.proxy(this._mouseHandler, this), this.interaction.hammer().bind("swipe", $.proxy(this._swipeHandler, this)), this.interaction.on("mousemove", this.mouseHandlerRef), this.interaction.on("click", this.mouseHandlerRef), this.fullscreen.on("click", $.proxy(this._fullscreenHandler, this)), this.setCaption($(this.images[0]).attr("data-caption")), this.setCount()
}, tl.ui.Gallery.prototype._currIndex = 0, tl.ui.Gallery.prototype._animating = !1, tl.ui.Gallery.prototype._mouseHandler = function (t) {
    var e = void 0 === t.offsetX ? t.originalEvent.layerX : t.offsetX,
        i = this.interaction.width(),
        n = e > i / 2 ? "next" : "prev";
    "click" === t.type && ("next" === n ? this.next() : this.previous()), this.interaction.removeClass("next prev").addClass(n)
}, tl.ui.Gallery.prototype._swipeHandler = function (t) {
    "right" === t.direction ? this.previous() : "left" === t.direction && this.next()
}, tl.ui.Gallery.prototype._fullscreenHandler = function () {
    tl.Fullscreen.open(this.images, this._currIndex)
}, tl.ui.Gallery.prototype.next = function () {
    var t = this._currIndex + 1 === this.images.length ? 0 : this._currIndex + 1;
    this.goTo(t, "prev")
}, tl.ui.Gallery.prototype.previous = function () {
    var t = 0 === this._currIndex ? this.images.length - 1 : this._currIndex - 1;
    this.goTo(t, "next")
}, tl.ui.Gallery.prototype.goTo = function (t, e) {
    if (!this._animating) {
        this._animating = !0;
        var i = $(this.images[t]),
            n = $(this.images[this._currIndex]),
            o = e,
            s = this;
        this.images.removeClass("super"), i.addClass(o + " super"), setTimeout(function () {
            i.addClass("active")
        }, 100), setTimeout(function () {
            i.removeClass(o)
        }, 110), setTimeout(function () {
            n.removeClass("active"), s._animating = !1
        }, 600), this._currIndex = t, this.setCaption(i.attr("data-caption")), this.setCount()
    }
}, tl.ui.Gallery.prototype.setCaption = function (t) {
    var e = this,
        i = t || "&nbsp;";
    this.caption.addClass("hide"), setTimeout(function () {
        e.caption.html(i).removeClass("hide")
    }, 250)
}, tl.ui.Gallery.prototype.setCount = function () {
    var t = this._currIndex + 1;
    this.count.text(t + "/" + this.images.length)
}, tl.ui.Gallery.prototype.deactivate = function () {
    this.interaction.unbind("swipe"), this.interaction.off("mousemove click"), this.fullscreen.off("click")
}, tl.register("tl.ui.LoopingCarousel"), tl.ui.LoopingCarousel = function (t, e) {
    console.log("instansiate: LoopingCarousel"), this.el = $(t), this.items = $(".item", this.el), this.container = $(".container", this.el), this.itemWidth = this.items.first().outerWidth(!0), this.callback = e || !1, $(".direction", this.el).on("click", $.proxy(this.clickHandler, this)), $(".wrapper", this.el).hammer().bind("swipe", $.proxy(this.swipeHandler, this))
}, tl.ui.LoopingCarousel.prototype.animating = !1, tl.ui.LoopingCarousel.prototype.clickHandler = function (t) {
    var e = $(t.target).attr("data-direction");
    this.move(e)
}, tl.ui.LoopingCarousel.prototype.swipeHandler = function (t) {
    var e = "right" === t.direction ? "previous" : "next";
    this.move(e)
}, tl.ui.LoopingCarousel.prototype.move = function (t) {
    if (!this.animating) {
        this.animating = !0;
        var e = this,
            i = $(".item", this.el);
        "previous" === t ? i.first().animate({
            "margin-left": this.itemWidth + "px"
        }, 500, function () {
            i.last().prependTo(e.container), i.first().css("margin-left", 0), e.animating = !1
        }) : i.first().animate({
            "margin-left": -1 * this.itemWidth + "px"
        }, 500, function () {
            i.first().appendTo(e.container), i.first().css("margin-left", 0), e.animating = !1
        }), this.callback && this.callback(t)
    }
}, tl.ui.LoopingCarousel.prototype.deactivate = function () {
    $(".direction", this.el).off("click"), $(".wrapper", this.el).unbind("swipe")
}, tl.register("tl.ui.Loupe"), tl.ui.Loupe = function (t, e, i) {
    console.log("instansiate: Loupe"), this.el = $(t), this.smallImage = $(".small-image", this.el), this.glass = $(".loupe", this.el), this.zoom = $(".zoom", this.el), this.defaultX = e || 0, this.defaultY = i || 0, this.active = !1, this.animating = !1, this.loadImage(), this.el.addClass("not-dragging")
}, tl.ui.Loupe.prototype.loadImage = function () {
    var t = this,
        e = new Image;
    this.bigImageSrc = this.smallImage.attr("src").replace("-small.", "-big."), $(e).on("load", function () {
        t.bigImageWidth = this.width, t.bigImageHeight = this.height, t.el.addClass("loaded"), e = null, t.activate()
    }), e.src = this.bigImageSrc
}, tl.ui.Loupe.prototype.activate = function () {
    this.glass.on("dragstart", function (t) {
        t.preventDefault()
    }), this.glass.on("mousedown", $.proxy(this.startDrag, this)), this.glass.on("mouseup", $.proxy(this.stopDrag, this)), this.el.on("mousemove", $.proxy(this.reposition, this)), $(document).on("resize", $.proxy(this.resize, this)), this.resize(), this.returnToDefault()
}, tl.ui.Loupe.prototype.resize = function () {
    this.smallImageWidth = this.smallImage.width(), this.smallImageHeight = this.smallImage.height(), this.widthRatio = this.bigImageWidth / this.smallImageWidth, this.heightRatio = this.bigImageHeight / this.smallImageHeight
}, tl.ui.Loupe.prototype.startDrag = function () {
    this.animating || (this.active = !0, this.el.removeClass("not-dragging"), this.zoom.css("background-image", "url(" + this.bigImageSrc + ")"), this.reposition(null, this.defaultX, this.defaultY))
}, tl.ui.Loupe.prototype.stopDrag = function () {
    this.active && (this.active = !1, this.returnToDefault())
}, tl.ui.Loupe.prototype.reposition = function (t, e, i) {
    if (this.active) {
        if (t) {
            var n = this.smallImage.offset();
            e = t.pageX - n.left, i = t.pageY - n.top
        }
        if (e > -120 && this.smallImageWidth + 120 > e && i > -120 && this.smallImageHeight + 120 > i) {
            var o = -1 * (e * this.widthRatio - 110) + "px " + -1 * (i * this.heightRatio - 110) + "px";
            this.zoom.css("background-position", o), this.glass.css({
                left: e + "px",
                top: i + "px"
            })
        } else this.returnToDefault()
    }
}, tl.ui.Loupe.prototype.returnToDefault = function () {
    var t = -1 * (this.defaultX * this.widthRatio - 110) + "px " + -1 * (this.defaultY * this.heightRatio - 110) + "px",
        e = this;
    this.el.addClass("not-dragging animate"), this.animating = !0, this.active = !1, this.glass.css({
        left: this.defaultX + "px",
        top: this.defaultY + "px"
    }), this.zoom.css("background-position", t), setTimeout(function () {
        e.el.removeClass("animate"), e.zoom.css({
            "background-image": "",
            "background-position": ""
        }), e.animating = !1
    }, 1100)
}, tl.register("tl.ui.SideBySide"), tl.ui.SideBySide = function (t) {
    console.log("instansiate: SideBySide"), this.container = $(t), this.right = $(".right", this.container), this.left = $(".left", this.container), this.leftImage = $("img", this.left), this.rightLabel = $(".right-label", this.left), this.leftLabel = $(".left-label", this.left), this.resizeHandlerRef = $.proxy(this.resizeHandler, this), this.resizeHandler(), this.rightLabel.css("right", -1 * (this.rightLabel.width() + 15)), $(document).on("resize", this.resizeHandlerRef), this.container.on("mousemove", $.proxy(this.mouseHandler, this)), this.container.on("touchmove", $.proxy(this.touchHandler, this));
    var e = this;
    this.container.on("mouseenter touchstart", function () {
        e.left.removeClass("animate")
    }), this.container.on("mouseleave touchend", function () {
        e.left.addClass("animate").css("width", "")
    })
}, tl.ui.SideBySide.prototype.onLeft = !1, tl.ui.SideBySide.prototype.resizeHandler = function () {
    var t = this.right.width();
    this.leftImage.css("width", t)
}, tl.ui.SideBySide.prototype.touchHandler = function (t) {
    t.preventDefault();
    var e = t.originalEvent.touches[0].clientX;
    this.move(e)
}, tl.ui.SideBySide.prototype.mouseHandler = function (t) {
    var e = void 0 === t.offsetX ? t.originalEvent.layerX : t.offsetX;
    this.move(e)
}, tl.ui.SideBySide.prototype.move = function (t) {
    var e = this.container.width(),
        i = 100 * (t / e);
    i = Math.min(Math.max(i, 0), 100), 50 > i && this.onLeft === !1 ? ($(".active", this.left).removeClass("active"), this.rightLabel.addClass("active"), this.onLeft = !0) : i > 50 && this.onLeft === !0 && ($(".active", this.left).removeClass("active"), this.leftLabel.addClass("active"), this.onLeft = !1), this.left.css("width", i + "%")
}, tl.ui.SideBySide.prototype.deactivate = function () {
    $(document).off("resize", this.resizeHandlerRef), this.container.off("mouseenter"), this.container.off("mouseleave")
};