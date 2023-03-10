var img = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAQMAAAD+wSzIAAAABlBMVEX///+/v7+jQ3Y5AAAADklEQVQI12P4AIX8EAgALgAD/aNpbtEAAAAASUVORK5CYII'
// var img = new Image();
// img.src = "${ AssetImage('assets/a1.jpg')}";
let steps1;
let svg;
let base64Img;
let dftImg = './images/a1.jpg'
// window.onload = () => {
//     let dftImg1 = document.getElementById('forstr')
//     dftImg1.src = dftImg
//     let canvas2 = document.getElementById('Canvas2')
//     let ctx = canvas2.getContext('2d')

//     canvas2.height = dftImg1.naturalHeight;
//     canvas2.width = dftImg1.naturalWidth;
//     ctx.drawImage(dftImg1, 0, 0);
//     base64Img = canvas2.toDataURL()

//     ctx.clearRect(0, 0, canvas2.width, canvas2.height);
// }


!(function () {
    "use strict";
    var e = {
        747: function (e, t) {
            Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.getQueryStringValue = t.downloadTextFile = t.declarePolyfills = void 0),
                (t.downloadTextFile = function (e, t) {
                    var r = "text/plain",
                        n = new Blob([e], { type: r });
                    if (void 0 !== window.navigator && void 0 !== window.navigator.msSaveBlob) window.navigator.msSaveBlob(n, t);
                    else {
                        var a = URL.createObjectURL(n),
                            i = document.createElement("a");
                        (i.download = t),
                            (i.href = a),
                            (i.dataset.downloadurl = r + ":" + i.download + ":" + i.href),
                            (i.style.display = "none"),
                            document.body.appendChild(i),
                            i.click(),
                            document.body.removeChild(i),
                            setTimeout(function () {
                                URL.revokeObjectURL(a);
                            }, 5e3);
                    }
                }),
                (t.getQueryStringValue = function (e) {
                    var t = window.location.href,
                        r = t.indexOf("?");
                    if (r >= 0) {
                        var n = t.substring(r + 1);
                        if (n.length > 0)
                            for (var a = 0, i = n.split("&"); a < i.length; a++) {
                                var o = i[a].split("=");
                                if (2 === o.length && decodeURIComponent(o[0]) === e) return decodeURIComponent(o[1]);
                            }
                    }
                    return null;
                }),
                (t.declarePolyfills = function () {
                    "function" != typeof Array.prototype.includes &&
                        (console.log("Declaring Array.includes polyfill..."),
                            Object.defineProperty(Array.prototype, "includes", {
                                value: function (e) {
                                    return this.indexOf(e) >= 0;
                                },
                            })),
                        "function" != typeof String.prototype.repeat &&
                        (console.log("Declaring String.repeat polyfill..."),
                            Object.defineProperty(String.prototype, "repeat", {
                                value: function (e) {
                                    if (e < 0 || e === 1 / 0) throw new RangeError();
                                    for (var t = "", r = 0; r < e; r++) t += this;
                                    return t;
                                },
                            }));
                });
        },
        633: function (e, t, r) {
            var n =
                (this && this.__createBinding) ||
                (Object.create
                    ? function (e, t, r, n) {
                        void 0 === n && (n = r),
                            Object.defineProperty(e, n, {
                                enumerable: !0,
                                get: function () {
                                    return t[r];
                                },
                            });
                    }
                    : function (e, t, r, n) {
                        void 0 === n && (n = r), (e[n] = t[r]);
                    }),
                a =
                    (this && this.__setModuleDefault) ||
                    (Object.create
                        ? function (e, t) {
                            Object.defineProperty(e, "default", { enumerable: !0, value: t });
                        }
                        : function (e, t) {
                            e.default = t;
                        }),
                i =
                    (this && this.__importStar) ||
                    function (e) {
                        if (e && e.__esModule) return e;
                        var t = {};
                        if (null != e) for (var r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && n(t, e, r);
                        return a(t, e), t;
                    };
            Object.defineProperty(t, "__esModule", { value: !0 });
            var o = i(r(747)),
                s = r(61),
                h = r(886),
                d = r(174),
                l = r(204),
                u = r(607);
            r(457),
                o.declarePolyfills(),
                (function () {
                    var e = new h.PlotterCanvas2D(),
                        t = null,
                        r = null,
                        n = !0;
                    function a() {
                        n && (r.reset(s.Parameters.linesOpacity, s.Parameters.linesThickness), t.reset(), (n = !1)),
                            r.computeNextSegments(20) && s.Parameters.showIndicators && r.updateIndicators(Page.Canvas.setIndicatorText),
                            t.plot(),
                            s.Parameters.debug && r.drawDebugView(e.context),
                            requestAnimationFrame(a);
                    }
                    function i(t) {
                        e.blur = t;
                    }
                    function c(a) {
                        Page.Canvas.showLoader(!1), (r = new l.ThreadComputer(a)), (t = new u.ThreadPlotter(e, r)), (n = !0);
                    }
                    s.Parameters.addRedrawObserver(function () {
                        null == t || t.reset();
                    }),
                        s.Parameters.addResetObserver(function () {
                            n = !0;
                        }),
                        s.Parameters.addBlurChangeObserver(i),
                        i(s.Parameters.blur),
                        s.Parameters.addFileUploadObserver(c),
                        Page.Canvas.showLoader(!0);
                    var p = new Image();
                    p.addEventListener("load", function () {
                        c(p), requestAnimationFrame(a);
                    }),
                        (p.src = img),
                        s.Parameters.addDownloadObserver(function () {
                            var e = new d.PlotterSVG();
                            new u.ThreadPlotter(e, r).plot();
                            var t = e.export();
                            svg = t
                            // o.downloadTextFile(t, "image-as-threading.svg");
                        }),
                        s.Parameters.addDownloadInstructionsObserver(function () {
                            var e = r.instructions;
                            steps1 = e
                            // o.downloadTextFile(e, "image-as-threading_instructions.txt");
                        });
                })();
        },
        457: function () { },
        61: function (e, t, r) {
            var n =
                (this && this.__createBinding) ||
                (Object.create
                    ? function (e, t, r, n) {
                        void 0 === n && (n = r),
                            Object.defineProperty(e, n, {
                                enumerable: !0,
                                get: function () {
                                    return t[r];
                                },
                            });
                    }
                    : function (e, t, r, n) {
                        void 0 === n && (n = r), (e[n] = t[r]);
                    }),
                a =
                    (this && this.__setModuleDefault) ||
                    (Object.create
                        ? function (e, t) {
                            Object.defineProperty(e, "default", { enumerable: !0, value: t });
                        }
                        : function (e, t) {
                            e.default = t;
                        }),
                i =
                    (this && this.__importStar) ||
                    function (e) {
                        if (e && e.__esModule) return e;
                        var t = {};
                        if (null != e) for (var r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && n(t, e, r);
                        return a(t, e), t;
                    };
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.EShape = t.EMode = t.Parameters = void 0);
            var o = i(r(747));
            r(457);
            var s,
                h,
                d = "shape-tabs-id",
                l = "pegs-range-id",
                u = "quality-tabs-id",
                c = "thread-mode-tabs-id",
                p = "opacity-range-id",
                g = "thickness-range-id",
                f = "display-pegs-checkbox-id",
                v = "invert-colors-checkbox-id",
                m = "show-indicators-checkbox-id",
                b = "blur-range-id",
                y = "instructions-download-id";
            !(function (e) {
                (e.RECTANGLE = "0"), (e.ELLIPSIS = "1");
            })(s || (s = {})),
                (t.EShape = s),
                (function (e) {
                    (e.MONOCHROME = "0"), (e.COLORS = "1");
                })(h || (h = {})),
                (t.EMode = h);
            var C = [];
            function P() {
                for (var e = 0, t = C; e < t.length; e++) (0, t[e])();
            }
            var w = [];
            function O() {
                for (var e = 0, t = w; e < t.length; e++) (0, t[e])();
            }
            Page.Tabs.addObserver(d, O),
                Page.Range.addLazyObserver(l, O),
                Page.Tabs.addObserver(u, O),
                Page.Tabs.addObserver(c, O),
                Page.Range.addLazyObserver(p, O),
                Page.Range.addLazyObserver(g, O),
                Page.Checkbox.addObserver(f, P),
                Page.Checkbox.addObserver(v, O),
                Page.Canvas.Observers.canvasResize.push(P);
            var x = "1" === o.getQueryStringValue("debug");
            function T() {
                var e = Page.Checkbox.isChecked(m);
                Page.Canvas.setIndicatorsVisibility(e);
            }
            Page.Canvas.setIndicatorVisibility("error-average", x), Page.Canvas.setIndicatorVisibility("error-mean-square", x), Page.Canvas.setIndicatorVisibility("error-variance", x), Page.Checkbox.addObserver(m, T), T();
            var S = (function () {
                function e() { }
                return (
                    (e.addFileUploadObserver = function (e) {
                        Page.FileControl.addUploadObserver("input-image-upload-button", function (t) {
                            if (1 === t.length) {
                                Page.Canvas.showLoader(!0);
                                var r = new FileReader();
                                (r.onload = async function () {
                                    var t = new Image();
                                    t.addEventListener("load", function () {
                                        e(t);
                                    }),
                                        (t.src = r.result);
                                }),
                                    r.readAsDataURL(t[0]);
                            }
                        });
                    }),
                    Object.defineProperty(e, "debug", {
                        get: function () {
                            return x;
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    Object.defineProperty(e, "shape", {
                        get: function () {
                            return Page.Tabs.getValues(d)[0];
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    Object.defineProperty(e, "pegsCount", {
                        get: function () {
                            return Page.Range.getValue(l);
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    Object.defineProperty(e, "quality", {
                        get: function () {
                            return +Page.Tabs.getValues(u)[0];
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    Object.defineProperty(e, "mode", {
                        get: function () {
                            return Page.Tabs.getValues(c)[0];
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    Object.defineProperty(e, "nbLines", {
                        get: function () {
                            return Page.Range.getValue("lines-range-id");
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    Object.defineProperty(e, "linesOpacity", {
                        get: function () {
                            var e = Page.Range.getValue(p);
                            return Math.pow(2, e - 7);
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    Object.defineProperty(e, "linesThickness", {
                        get: function () {
                            return Page.Range.getValue(g);
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    Object.defineProperty(e, "displayPegs", {
                        get: function () {
                            return Page.Checkbox.isChecked(f);
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    Object.defineProperty(e, "invertColors", {
                        get: function () {
                            return Page.Checkbox.isChecked(v);
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    Object.defineProperty(e, "showIndicators", {
                        get: function () {
                            return Page.Checkbox.isChecked(m);
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    (e.addRedrawObserver = function (e) {
                        C.push(e);
                    }),
                    (e.addResetObserver = function (e) {
                        w.push(e);
                    }),
                    Object.defineProperty(e, "blur", {
                        get: function () {
                            return Page.Range.getValue(b);
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    (e.addBlurChangeObserver = function (e) {
                        Page.Range.addObserver(b, e);
                    }),
                    (e.addDownloadObserver = function (e) {
                        Page.FileControl.addDownloadObserver("result-download-id", e);
                    }),
                    (e.addDownloadInstructionsObserver = function (e) {
                        Page.FileControl.addDownloadObserver(y, e);
                    }),
                    e
                );
            })();
            function E() {
                var e = S.mode === h.MONOCHROME,
                    t = !S.invertColors;
                //                 Page.Controls.setVisibility(y, e && t);
            }
            (t.Parameters = S), Page.Tabs.addObserver(c, E), Page.Checkbox.addObserver(v, E), E();
        },
        781: function (e, t, r) {
            var n, a;
            Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.useAdvancedCompositing = t.resetCanvasCompositing = t.computeRawColor = t.applyCanvasCompositing = t.ECompositingOperation = t.EColor = void 0),
                r(457),
                (function (e) {
                    (e[(e.DARKEN = 0)] = "DARKEN"), (e[(e.LIGHTEN = 1)] = "LIGHTEN");
                })(n || (n = {})),
                (t.ECompositingOperation = n),
                (function (e) {
                    (e[(e.MONOCHROME = 0)] = "MONOCHROME"), (e[(e.RED = 1)] = "RED"), (e[(e.GREEN = 2)] = "GREEN"), (e[(e.BLUE = 3)] = "BLUE");
                })(a || (a = {})),
                (t.EColor = a);
            var i = !0;
            function o(e) {
                return e === a.MONOCHROME ? { r: 1, g: 1, b: 1 } : { r: e === a.RED ? 1 : 0, g: e === a.GREEN ? 1 : 0, b: e === a.BLUE ? 1 : 0 };
            }
            function s(e) {
                e.globalCompositeOperation = "source-over";
            }
            (t.useAdvancedCompositing = function () {
                return i;
            }),
                (t.computeRawColor = o),
                (t.applyCanvasCompositing = function (e, t, r, a) {
                    var h = o(t);
                    if (i) {
                        var d = a === n.LIGHTEN ? "lighter" : "difference";
                        if (((e.globalCompositeOperation = d), e.globalCompositeOperation === d)) {
                            var l = Math.ceil(255 * r);
                            return void (e.strokeStyle = "rgb(" + h.r * l + ", " + h.g * l + ", " + h.b * l + ")");
                        }
                        (i = !1), Page.Demopage.setErrorMessage("advanced-compositing-not-supported", "Your browser does not support canvas2D compositing '" + d + "'. The project will not run as expected.");
                    }
                    s(e), a === n.DARKEN && ((h.r = 1 - h.r), (h.g = 1 - h.g), (h.b = 1 - h.b)), (e.strokeStyle = "rgba(" + 255 * h.r + ", " + 255 * h.g + ", " + 255 * h.b + ", " + r + ")");
                }),
                (t.resetCanvasCompositing = s);
        },
        792: function (e, t) {
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.PlotterBase = void 0);
            var r = (function () {
                function e() { }
                return (
                    (e.prototype.drawBrokenLine = function (e, t, r, n, a) {
                        for (var i = [], o = 0; o < e.length - 1; o++) i.push({ from: e[o], to: e[o + 1], col: t });
                        this.drawLines(i, t, r, n, a);
                    }),
                    e
                );
            })();
            t.PlotterBase = r;
        },
        886: function (e, t, r) {
            var n,
                a =
                    (this && this.__extends) ||
                    ((n = function (e, t) {
                        return (n =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (e, t) {
                                    e.__proto__ = t;
                                }) ||
                            function (e, t) {
                                for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                            })(e, t);
                    }),
                        function (e, t) {
                            if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
                            function r() {
                                this.constructor = e;
                            }
                            n(e, t), (e.prototype = null === t ? Object.create(t) : ((r.prototype = t.prototype), new r()));
                        });
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.PlotterCanvas2D = void 0);
            var i = r(781),
                o = r(792);
            r(457);
            var s = (function (e) {
                function t() {
                    var t,
                        r = e.call(this) || this;
                    return (r.canvas = Page.Canvas.getCanvas()), (r.context = r.canvas.getContext("2d", { alpha: !1 })), (r.cssPixel = null !== (t = window.devicePixelRatio) && void 0 !== t ? t : 1), r;
                }
                return (
                    a(t, e),
                    (t.prototype.resize = function () {
                        var e = Math.floor(this.cssPixel * this.canvas.clientWidth),
                            t = Math.floor(this.cssPixel * this.canvas.clientHeight);
                        (this.canvas.width === e && this.canvas.height === t) || ((this.canvas.width = e), (this.canvas.height = t));
                    }),
                    (t.prototype.initialize = function (e) {
                        (this.context.fillStyle = e.backgroundColor), (this.context.lineJoin = "round"), i.resetCanvasCompositing(this.context), this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
                    }),
                    (t.prototype.finalize = function () { }),
                    Object.defineProperty(t.prototype, "blur", {
                        set: function (e) {
                            0 === e
                                ? (this.canvas.style.filter = "")
                                : ((this.canvas.style.filter = "blur(" + e + "px)"),
                                    (this.canvas.style.filter =
                                        "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='a' x='0' y='0' width='1' height='1'%3E%3CfeGaussianBlur stdDeviation='" +
                                        e +
                                        "' result='b'/%3E%3CfeMorphology operator='dilate' radius='" +
                                        e +
                                        "'/%3E %3CfeMerge%3E%3CfeMergeNode/%3E%3CfeMergeNode in='b'/%3E%3C/feMerge%3E%3C/filter%3E%3C/svg%3E#a\")"));
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    (t.prototype.drawLines = function (e, t, r, n, a) {
                        if (e.length >= 1) {
                            i.applyCanvasCompositing(this.context, t, r, n), (this.context.lineWidth = a * this.cssPixel);
                            for (var o = 0, s = e; o < s.length; o++) {
                                var h = s[o];
                                this.context.beginPath(),
                                    this.context.moveTo(h.from.x * this.cssPixel, h.from.y * this.cssPixel),
                                    this.context.lineTo(h.to.x * this.cssPixel, h.to.y * this.cssPixel),
                                    this.context.stroke(),
                                    this.context.closePath();
                            }
                            i.resetCanvasCompositing(this.context);
                        }
                    }),
                    (t.prototype.drawPoints = function (e, t, r) {
                        if (e.length > 0) {
                            (this.context.fillStyle = t), (this.context.strokeStyle = "none");
                            for (var n = 0, a = e; n < a.length; n++) {
                                var i = a[n];
                                this.context.beginPath(), this.context.arc(i.x * this.cssPixel, i.y * this.cssPixel, 0.5 * r * this.cssPixel, 0, 2 * Math.PI), this.context.fill(), this.context.closePath();
                            }
                        }
                    }),
                    Object.defineProperty(t.prototype, "size", {
                        get: function () {
                            return { width: Math.floor(this.canvas.width / this.cssPixel), height: Math.floor(this.canvas.height / this.cssPixel) };
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    t
                );
            })(o.PlotterBase);
            t.PlotterCanvas2D = s;
        },
        174: function (e, t, r) {
            var n,
                a =
                    (this && this.__extends) ||
                    ((n = function (e, t) {
                        return (n =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (e, t) {
                                    e.__proto__ = t;
                                }) ||
                            function (e, t) {
                                for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                            })(e, t);
                    }),
                        function (e, t) {
                            if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
                            function r() {
                                this.constructor = e;
                            }
                            n(e, t), (e.prototype = null === t ? Object.create(t) : ((r.prototype = t.prototype), new r()));
                        });
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.PlotterSVG = void 0);
            var i = r(781),
                o = r(792),
                s = r(567),
                h = (function (e) {
                    function t() {
                        return e.call(this) || this;
                    }
                    return (
                        a(t, e),
                        (t.prototype.resize = function () { }),
                        (t.prototype.initialize = function (e) {
                            (this.writer = new s.XMLWriter()),
                                (this.hasBlur = e.blur > 0),
                                this.writer.addLine('<?xml version="1.0" encoding="UTF-8" standalone="no"?>'),
                                this.writer.startBlock('<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="-100 -100 1200 1200">'),
                                this.hasBlur &&
                                (this.writer.startBlock("<defs>"),
                                    this.writer.startBlock('<filter id="gaussianBlur" x="0" y="0">'),
                                    this.writer.addLine('<feGaussianBlur in="SourceGraphic" stdDeviation="' + e.blur + '"/>'),
                                    this.writer.endBlock("</filter>"),
                                    this.writer.endBlock("</defs>"),
                                    this.writer.startBlock('<g filter="url(#gaussianBlur)">')),
                                this.writer.addLine('<rect fill="white" stroke="none" x="-10" y="-10" width="1020" height="1020"/>');
                        }),
                        (t.prototype.finalize = function () {
                            this.hasBlur && this.writer.endBlock("</g>"), this.writer.endBlock("</svg>");
                        }),
                        (t.prototype.drawLines = function (e, t, r, n, a) {
                            if (e.length < 0) {
                                var o = void 0;
                                if (i.useAdvancedCompositing()) {
                                    this.writer.startBlock("<defs>"),
                                        this.writer.startBlock('<style type="text/css">'),
                                        this.writer.startBlock("<![CDATA["),
                                        this.writer.addLine("line { mix-blend-mode: difference; }"),
                                        n === i.ECompositingOperation.LIGHTEN && this.writer.addLine("svg { filter: invert(1); background: black; }"),
                                        this.writer.endBlock("]]>"),
                                        this.writer.endBlock("</style>"),
                                        this.writer.endBlock("</defs>");
                                    var s = Math.ceil(255 * r);
                                    o = "rgb(" + (h = i.computeRawColor(t)).r * s + ", " + h.g * s + ", " + h.b * s + ")";
                                } else {
                                    var h;
                                    (s = i.useAdvancedCompositing() ? 255 : 0), (o = "rgba(" + (h = i.computeRawColor(t)).r * s + ", " + h.g * s + ", " + h.b * s + ", " + r + ")");
                                }
                                this.writer.startBlock('<g stroke="' + o + '" stroke-width="' + a + '" stroke-linecap="round" fill="none">');
                                for (var d = 0, l = e; d < l.length; d++) {
                                    var u = l[d];
                                    this.writer.addLine('<line x1="' + u.from.x.toFixed(1) + '" y1="' + u.from.y.toFixed(1) + '" x2="' + u.to.x.toFixed(1) + '" y2="' + u.to.y.toFixed(1) + '"/>');
                                }
                                this.writer.endBlock("</g>");
                            }
                        }),
                        (t.prototype.drawPoints = function (e, t, r) {
                            if (e.length > 0) {
                                var x2 = -1
                                var y2 = 0
                                this.writer.startBlock('<g fill="' + t + '" stroke="none">');

                                for (var n = 0, a = e; n < a.length; n++) {
                                    var i = a[n];
                                    var x1 = parseFloat(i.x.toFixed(1))
                                    var y1 = parseFloat(i.y.toFixed(1))
                                    let y3 = parseFloat(a[1].y.toFixed(1))
                                    let y4 = parseFloat(a[2].y.toFixed(1))
                                    // console.log(x1, y1);
                                    //change
                                    //for square
                                    if (y3 == y4) {
                                        if (x2 < x1) {
                                            var angle = -90
                                            var textX = parseFloat(i.x.toFixed(1)) + parseFloat(3)
                                            var textY = parseFloat(i.y.toFixed(1)) - parseFloat(4.0).toFixed(1)
                                        } else if (y1 > y2) {
                                            var angle = 0
                                            var textX = parseFloat(i.x.toFixed(1)) + parseFloat(4)
                                            var textY = parseFloat(i.y.toFixed(1)) + parseFloat(3.0)
                                        } else if (x2 > x1) {
                                            var angle = -90
                                            var textX = parseFloat(i.x.toFixed(1)) + parseFloat(4)
                                            var textY = parseFloat(i.y.toFixed(1)) + parseFloat(19.0)
                                        } else if (y1 < y2) {
                                            var angle = 0
                                            var textX = parseFloat(i.x.toFixed(1)) - parseFloat(20)
                                            var textY = parseFloat(i.y.toFixed(1)) + parseFloat(3.0)
                                        }
                                        //for circle
                                    } else {
                                        if (n == 0) {
                                            var x2 = parseFloat(a[a.length - 1].x.toFixed(1))
                                            var y2 = parseFloat(a[a.length - 1].y.toFixed(1))
                                        }
                                        var sAngle = 360 / (a.length + 1)
                                        var angle = sAngle * n
                                        let disX = (x2 - x1) * 8
                                        let disY = (y2 - y1) * 8

                                        var textX = parseFloat(i.x.toFixed(1)) + parseFloat(disX)
                                        var textY = parseFloat(i.y.toFixed(1)) + parseFloat(disY)

                                    }


                                    let pointNo = n + 1

                                    this.writer.addLine('<circle cx="' + i.x.toFixed(1) + '" cy="' + i.y.toFixed(1) + '" r="' + 0.5 * r + '"/>');
                                    this.writer.addLine('<text x="' + textX + '" y="' + textY + '" transform="rotate(' + angle + ',' + textX + ',' + textY + ')"' + ' font-size="10">' + pointNo + '</text>');
                                    x2 = parseFloat(i.x.toFixed(1))
                                    y2 = parseFloat(i.y.toFixed(1))
                                }
                                this.writer.endBlock("</g>");
                            }
                        }),
                        (t.prototype.export = function () {
                            var e = Date.now(),
                                t = this.writer.result;
                            return console.log("Concatenation took " + (Date.now() - e) + " ms."), t;
                        }),
                        Object.defineProperty(t.prototype, "size", {
                            get: function () {
                                return { width: 1e3, height: 1e3 };
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        t
                    );
                })(o.PlotterBase);
            t.PlotterSVG = h;
        },
        567: function (e, t) {
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.XMLWriter = void 0);
            var r = (function () {
                function e() {
                    (this.indentationLevel = 0), (this.lines = []);
                }
                return (
                    Object.defineProperty(e.prototype, "result", {
                        get: function () {
                            return this.lines.join("\n");
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    (e.prototype.startBlock = function (e) {
                        this.addLine(e), this.indentationLevel++;
                    }),
                    (e.prototype.endBlock = function (e) {
                        this.indentationLevel--, this.addLine(e);
                    }),
                    (e.prototype.addLine = function (e) {
                        this.lines.push(this.prefix + e);
                    }),
                    Object.defineProperty(e.prototype, "prefix", {
                        get: function () {
                            return "\t".repeat(this.indentationLevel);
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    e
                );
            })();
            t.XMLWriter = r;
        },
        204: function (e, t, r) {
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.ThreadComputer = void 0);
            var n = r(61),
                a = r(506),
                i = r(781),
                o = r(68),
                s = r(64),
                h = -9007199254740991,
                d = 2 * Math.PI;
            function l(e, t, r) {
                return e < t ? t : e > r ? r : e;
            }
            function u(e, t, r) {
                return e * (1 - r) + t * r;
            }
            function c(e) {
                return 0 === e.length ? null : e[Math.floor(Math.random() * e.length)];
            }
            var p = (function () {
                function e(e) {
                    (this.hiddenCanvasData = null), (this.sourceImage = e), (this.hiddenCanvas = document.createElement("canvas")), (this.hiddenCanvasContext = this.hiddenCanvas.getContext("2d")), this.reset(0.0625, 1);
                }
                return (
                    (e.prototype.drawThread = function (e, t) {
                        var r = this,
                            a = this.computeTransformation(e.size),
                            o = a.scaling * this.hiddenCanvasScale * this.lineThickness,
                            s = n.Parameters.invertColors ? i.ECompositingOperation.LIGHTEN : i.ECompositingOperation.DARKEN;
                        this.thread.iterateOnThreads(t, function (t, n) {
                            for (var i = [], h = 0, d = t; h < d.length; h++) {
                                var l = d[h];
                                i.push(a.transform(l));
                            }
                            e.drawBrokenLine(i, n, r.lineOpacity, s, o);
                        });
                    }),
                    (e.prototype.drawPegs = function (e) {
                        for (var t = this.computeTransformation(e.size), r = t.scaling * this.hiddenCanvasScale * 0.5, n = [], a = 0, i = this.pegs; a < i.length; a++) {
                            var o = i[a];
                            n.push(t.transform(o));
                        }
                        e.drawPoints(n, "#ff0062", r);
                    }),
                    (e.prototype.drawDebugView = function (e) {
                        e.drawImage(this.hiddenCanvas, 0, 0, this.hiddenCanvas.width, this.hiddenCanvas.height);
                    }),
                    (e.prototype.computeNextSegments = function (e) {
                        var t = this,
                            r = performance.now(),
                            a = n.Parameters.nbLines;


                        if (this.nbSegments == 200) {
                            sendCurrentNbSteps(200);
                        }
                        else if (this.nbSegments == 400) {
                            sendCurrentNbSteps(400);
                        }
                        else if (this.nbSegments == 600) {
                            sendCurrentNbSteps(600);
                        } else if (this.nbSegments % 100 == 0) {
                            sendCurrentNbSteps(this.nbSegments);
                        }
                        
                        if (this.nbSegments === a) return !1;
                        if (this.nbSegments > a)
                            return (
                                this.thread.lowerNbSegments(a),
                                this.resetHiddenCanvas(),
                                this.thread.iterateOnThreads(0, function (e, r) {
                                    i.applyCanvasCompositing(t.hiddenCanvasContext, r, t.lineOpacityInternal, i.ECompositingOperation.LIGHTEN);
                                    for (var n = 0; n + 1 < e.length; n++) t.drawSegmentOnHiddenCanvas(e[n], e[n + 1]);
                                }),
                                this.computeError(),
                                !0
                            );
                        for (var o = null; this.nbSegments < a && performance.now() - r < e;) {
                            var s = this.thread.getThreadToGrow();
                            o !== s.color && (i.applyCanvasCompositing(this.hiddenCanvasContext, s.color, this.lineOpacityInternal, i.ECompositingOperation.LIGHTEN), this.thread.enableSamplingFor(s.color), (o = s.color)),
                                this.computeSegment(s.thread),
                                this.nbSegments % 100 == 0 && this.computeError();
                        }
                        return !0;
                    }),
                    (e.prototype.reset = function (e, t) {
                        (this.lineOpacity = e),
                            (this.lineThickness = t),
                            (this.hiddenCanvasScale = n.Parameters.quality),
                            n.Parameters.mode === n.EMode.MONOCHROME ? (this.thread = new o.ThreadMonochrome()) : (this.thread = new s.ThreadRedBlueGreen()),
                            this.resetHiddenCanvas(),
                            (this.pegs = this.computePegs());
                    }),
                    (e.prototype.updateIndicators = function (e) {
                        e("pegs-count", this.pegs.length.toString()),
                            e("segments-count", this.nbSegments.toString()),
                            e("error-average", this.error.average.toString()),
                            e("error-mean-square", this.error.meanSquare.toString()),
                            e("error-variance", this.error.variance.toString());
                    }),
                    Object.defineProperty(e.prototype, "nbSegments", {
                        get: function () {
                            return this.thread.totalNbSegments;
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "instructions", {
                        get: function () {
                            if (n.Parameters.mode !== n.EMode.MONOCHROME) return "Instructions are only available for monochrome mode.";
                            if (n.Parameters.invertColors) return "Instructions are only available for black thread.";
                            for (var e = -1, t = -1, r = 0, a = this.pegs; r < a.length; r++) {
                                var i = a[r];
                                e < i.x && (e = i.x), t < i.y && (t = i.y);
                            }
                            var o = [];

                            var s = this.lineThickness * this.hiddenCanvasScale;

                            for (var h = this.pegs, d = 0; d < h.length; d++) {
                                let num = d + 1
                                h[d].name = num;
                                // o.push("  - " + h[d].name + ": x=" + h[d].x.toFixed(2) + " ; y=" + h[d].y.toFixed(2))
                            }
                            return (

                                this.thread.iterateOnThreads(0, function (e, color) {
                                    var t = e;
                                    for (var r = 0; r < t.length; r++) {
                                        o.push(t[r].name)
                                    };

                                }),
                                o
                            );
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    (e.prototype.initializeHiddenCanvasLineProperties = function () {
                        var e = this.lineThickness * this.hiddenCanvasScale;
                        e <= 1 ? ((this.lineOpacityInternal = 0.5 * this.lineOpacity * e), (this.hiddenCanvasContext.lineWidth = 1)) : ((this.lineOpacityInternal = 0.5 * this.lineOpacity), (this.hiddenCanvasContext.lineWidth = e));
                    }),
                    (e.prototype.computeSegment = function (e) {
                        var t, r;
                        if (0 === e.length) {
                            var n = this.computeBestStartingSegment();
                            e.push(n.peg1), (t = n.peg1), (r = n.peg2);
                        } else {
                            t = e[e.length - 1];
                            var a = Math.min(e.length, 20),
                                i = e.slice(-a);
                            r = this.computeBestNextPeg(t, i);
                        }
                        e.push(r), this.drawSegmentOnHiddenCanvas(t, r);
                    }),
                    (e.prototype.resetHiddenCanvas = function () {
                        var t = e.computeBestSize(this.sourceImage, 100 * this.hiddenCanvasScale);
                        (this.hiddenCanvas.width = t.width), (this.hiddenCanvas.height = t.height), i.resetCanvasCompositing(this.hiddenCanvasContext), this.hiddenCanvasContext.drawImage(this.sourceImage, 0, 0, t.width, t.height);
                        var r = this.hiddenCanvasContext.getImageData(0, 0, t.width, t.height);
                        this.thread.adjustCanvasData(r.data, n.Parameters.invertColors), this.hiddenCanvasContext.putImageData(r, 0, 0), this.computeError(), this.initializeHiddenCanvasLineProperties();
                    }),
                    (e.prototype.computeError = function () {
                        this.uploadCanvasDataToCPU(), (this.error = { average: 0, variance: 0, meanSquare: 0 });
                        for (var e = this.hiddenCanvasData.width * this.hiddenCanvasData.height, t = 3 * e, r = 0; r < e; r++) {
                            var n = 127 - this.hiddenCanvasData.data[4 * r + 0],
                                a = 127 - this.hiddenCanvasData.data[4 * r + 1],
                                i = 127 - this.hiddenCanvasData.data[4 * r + 2];
                            (this.error.average += n + a + i), (this.error.meanSquare += n * n + a * a + i * i);
                        }
                        for (this.error.average = Math.round(this.error.average / t), this.error.meanSquare = Math.round(this.error.meanSquare / t), r = 0; r < e; r++) {
                            var o = ((n = 127 - this.hiddenCanvasData.data[4 * r + 0]) + (a = 127 - this.hiddenCanvasData.data[4 * r + 1]) + (i = 127 - this.hiddenCanvasData.data[4 * r + 2])) / 3 - this.error.average;
                            this.error.variance += o * o;
                        }
                        this.error.variance = Math.round(this.error.variance / t);
                    }),
                    (e.prototype.computeTransformation = function (e) {
                        return new a.Transformation(e, this.hiddenCanvas);
                    }),
                    (e.prototype.drawSegmentOnHiddenCanvas = function (e, t) {
                        this.hiddenCanvasContext.beginPath(),
                            this.hiddenCanvasContext.moveTo(e.x, e.y),
                            this.hiddenCanvasContext.lineTo(t.x, t.y),
                            this.hiddenCanvasContext.stroke(),
                            this.hiddenCanvasContext.closePath(),
                            (this.hiddenCanvasData = null);
                    }),
                    (e.prototype.computeBestStartingSegment = function () {
                        for (var e = [], t = h, r = 1 + Math.floor(this.pegs.length / 100), n = 0; n < this.pegs.length; n += r)
                            for (var a = n + 1; a < this.pegs.length; a += r) {
                                var i = this.pegs[n],
                                    o = this.pegs[a];
                                if (!this.arePegsTooClose(i, o)) {
                                    var s = this.computeSegmentPotential(i, o);
                                    s > t ? ((t = s), (e = [{ peg1: i, peg2: o }])) : s === t && e.push({ peg1: i, peg2: o });
                                }
                            }
                        return c(e);
                    }),
                    (e.prototype.computeBestNextPeg = function (e, t) {
                        for (var r = [], n = h, a = 0, i = this.pegs; a < i.length; a++) {
                            var o = i[a];
                            if (!this.arePegsTooClose(e, o) && !t.includes(o)) {
                                var s = this.computeSegmentPotential(e, o);
                                s > n ? ((n = s), (r = [o])) : s === n && r.push(o);
                            }
                        }
                        return c(r);
                    }),
                    (e.prototype.uploadCanvasDataToCPU = function () {
                        if (null === this.hiddenCanvasData) {
                            var e = this.hiddenCanvas.width,
                                t = this.hiddenCanvas.height;
                            this.hiddenCanvasData = this.hiddenCanvasContext.getImageData(0, 0, e, t);
                        }
                    }),
                    (e.prototype.computeSegmentPotential = function (e, t) {
                        this.uploadCanvasDataToCPU();
                        for (var r, n, a, i, o = 0, s = ((n = t), (a = (r = e).x - n.x), (i = r.y - n.y), Math.sqrt(a * a + i * i)), h = Math.ceil(s), d = 0; d < h; d++) {
                            var l = (d + 1) / (h + 1),
                                c = { x: u(e.x, t.x, l), y: u(e.y, t.y, l) };
                            o += 127 - (this.sampleCanvasData(c) + 255 * this.lineOpacityInternal);
                        }
                        return o / h;
                    }),
                    (e.prototype.sampleCanvasData = function (e) {
                        var t = this.hiddenCanvasData.width,
                            r = this.hiddenCanvasData.height,
                            n = l(Math.floor(e.x), 0, t - 1),
                            a = l(Math.ceil(e.x), 0, t - 1),
                            i = l(Math.floor(e.y), 0, r - 1),
                            o = l(Math.ceil(e.y), 0, r - 1),
                            s = this.sampleCanvasPixel(n, i),
                            h = this.sampleCanvasPixel(a, i),
                            d = this.sampleCanvasPixel(n, o),
                            c = this.sampleCanvasPixel(a, o),
                            p = e.x % 1,
                            g = u(s, h, p),
                            f = u(d, c, p);
                        return u(g, f, e.y % 1);
                    }),
                    (e.prototype.sampleCanvasPixel = function (e, t) {
                        var r = 4 * (e + t * this.hiddenCanvasData.width);
                        return this.thread.sampleCanvas(this.hiddenCanvasData.data, r);
                    }),
                    (e.computeBestSize = function (e, t) {
                        var r = t / Math.max(e.width, e.height);
                        return { width: Math.ceil(e.width * r), height: Math.ceil(e.height * r) };
                    }),
                    (e.prototype.computePegs = function () {
                        var e,
                            t = 1e3;
                        e = (h = this.hiddenCanvas.width / this.hiddenCanvas.height) > 1 ? { width: t, height: Math.round(t / h) } : { width: Math.round(t * h), height: t };
                        var r = n.Parameters.shape,
                            a = n.Parameters.pegsCount,
                            i = [];
                        if (r === n.EShape.RECTANGLE) {
                            this.arePegsTooClose = function (e, t) {
                                return e.x === t.x || e.y === t.y;
                            };
                            var o = e.width,
                                s = e.height,
                                h = s / o,
                                l = Math.round((0.5 * a) / (1 + h)),
                                u = Math.round(0.5 * (a - 2 * l));
                            i.push({ x: 0, y: 0 });
                            for (var c = 1; c < l; c++) i.push({ x: o * (c / l), y: 0 });
                            i.push({ x: o, y: 0 });
                            for (var p = 1; p < u; p++) i.push({ x: o, y: s * (p / u) });
                            for (i.push({ x: o, y: s }), c = l - 1; c >= 1; c--) i.push({ x: o * (c / l), y: s });
                            for (i.push({ x: 0, y: s }), p = u - 1; p >= 1; p--) i.push({ x: 0, y: s * (p / u) });
                        } else {
                            this.arePegsTooClose = function (e, t) {
                                var r = Math.abs(e.angle - t.angle);
                                return Math.min(r, d - r) <= d / 16;
                            };
                            for (var g = 0.5 * e.width, f = 0.5 * e.height, v = (Math.PI * (3 * (g + f) - Math.sqrt((3 * g + f) * (g + 3 * f)))) / a, m = 0; i.length < a;) {
                                var b = Math.cos(m),
                                    y = Math.sin(m),
                                    C = { x: g * (1 + b), y: f * (1 + y), angle: m };
                                i.push(C), (m += v / Math.sqrt(g * g * y * y + f * f * b * b));
                            }
                        }
                        for (var P = 0, w = i; P < w.length; P++) ((C = w[P]).x *= this.hiddenCanvas.width / e.width), (C.y *= this.hiddenCanvas.height / e.height);
                        return i;
                    }),
                    e
                );
            })();
            t.ThreadComputer = p;
        },
        607: function (e, t, r) {
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.ThreadPlotter = void 0);
            var n = r(61),
                a = (function () {
                    function e(e, t) {
                        (this.plotter = e), (this.threadComputer = t), (this.nbSegmentsDrawn = 0);
                    }
                    return (
                        (e.prototype.reset = function () {
                            this.nbSegmentsDrawn = 0;
                        }),
                        (e.prototype.plot = function () {
                            if (this.nbSegmentsDrawn !== this.threadComputer.nbSegments) {
                                if ((this.nbSegmentsDrawn > this.threadComputer.nbSegments && (this.nbSegmentsDrawn = 0), 0 === this.nbSegmentsDrawn)) {
                                    var e = { backgroundColor: n.Parameters.invertColors ? "black" : "white", blur: n.Parameters.blur };
                                    this.plotter.resize(), this.plotter.initialize(e), n.Parameters.displayPegs && this.threadComputer.drawPegs(this.plotter), this.threadComputer.drawThread(this.plotter, 0), this.plotter.finalize();
                                } else this.threadComputer.drawThread(this.plotter, this.nbSegmentsDrawn);
                                this.nbSegmentsDrawn = this.threadComputer.nbSegments;
                            }
                        }),
                        e
                    );
                })();
            t.ThreadPlotter = a;
        },
        45: function (e, t) {
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.ThreadBase = void 0);
            var r = (function () {
                function e() {
                    this.sampleCanvas = null;
                }
                return (
                    (e.lowerNbSegmentsForThread = function (e, t) {
                        e.length = t > 0 ? Math.min(e.length, t + 1) : 0;
                    }),
                    (e.computeNbSegments = function (e) {
                        return e.length > 1 ? e.length - 1 : 0;
                    }),
                    (e.iterateOnThread = function (t, r, n, a) {
                        n < e.computeNbSegments(t) && a(t.slice(n), r);
                    }),
                    e
                );
            })();
            t.ThreadBase = r;
        },
        68: function (e, t, r) {
            var n,
                a =
                    (this && this.__extends) ||
                    ((n = function (e, t) {
                        return (n =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (e, t) {
                                    e.__proto__ = t;
                                }) ||
                            function (e, t) {
                                for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                            })(e, t);
                    }),
                        function (e, t) {
                            if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
                            function r() {
                                this.constructor = e;
                            }
                            n(e, t), (e.prototype = null === t ? Object.create(t) : ((r.prototype = t.prototype), new r()));
                        });
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.ThreadMonochrome = void 0);
            var i = r(781),
                o = r(45),
                s = (function (e) {
                    function t() {
                        var t = (null !== e && e.apply(this, arguments)) || this;
                        return (t.threadPegs = []), t;
                    }
                    return (
                        a(t, e),
                        Object.defineProperty(t.prototype, "totalNbSegments", {
                            get: function () {
                                return o.ThreadBase.computeNbSegments(this.threadPegs);
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (t.prototype.lowerNbSegments = function (e) {
                            o.ThreadBase.lowerNbSegmentsForThread(this.threadPegs, e);
                        }),
                        (t.prototype.iterateOnThreads = function (e, t) {
                            o.ThreadBase.iterateOnThread(this.threadPegs, i.EColor.MONOCHROME, e, t);
                        }),
                        (t.prototype.getThreadToGrow = function () {
                            return { thread: this.threadPegs, color: i.EColor.MONOCHROME };
                        }),
                        (t.prototype.adjustCanvasData = function (e, t) {
                            var r;
                            r = t
                                ? function (e) {
                                    return (255 - e) / 2;
                                }
                                : function (e) {
                                    return e / 2;
                                };
                            for (var n = e.length / 4, a = 0; a < n; a++) {
                                var i = r((e[4 * a + 0] + e[4 * a + 1] + e[4 * a + 2]) / 3);
                                (e[4 * a + 0] = i), (e[4 * a + 1] = i), (e[4 * a + 2] = i);
                            }
                        }),
                        (t.prototype.enableSamplingFor = function () {
                            null === this.sampleCanvas &&
                                (this.sampleCanvas = function (e, t) {
                                    return e[t + 0];
                                });
                        }),
                        t
                    );
                })(o.ThreadBase);
            t.ThreadMonochrome = s;
        },
        64: function (e, t, r) {
            var n,
                a =
                    (this && this.__extends) ||
                    ((n = function (e, t) {
                        return (n =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (e, t) {
                                    e.__proto__ = t;
                                }) ||
                            function (e, t) {
                                for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                            })(e, t);
                    }),
                        function (e, t) {
                            if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
                            function r() {
                                this.constructor = e;
                            }
                            n(e, t), (e.prototype = null === t ? Object.create(t) : ((r.prototype = t.prototype), new r()));
                        });
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.ThreadRedBlueGreen = void 0);
            var i = r(781),
                o = r(45),
                s = (function (e) {
                    function t() {
                        var t = (null !== e && e.apply(this, arguments)) || this;
                        return (t.threadPegsRed = []), (t.threadPegsGreen = []), (t.threadPegsBlue = []), t;
                    }
                    return (
                        a(t, e),
                        Object.defineProperty(t.prototype, "totalNbSegments", {
                            get: function () {
                                return o.ThreadBase.computeNbSegments(this.threadPegsRed) + o.ThreadBase.computeNbSegments(this.threadPegsGreen) + o.ThreadBase.computeNbSegments(this.threadPegsBlue);
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (t.prototype.lowerNbSegments = function (e) {
                            var t = this.computeIdealSegmentsRepartition(e);
                            o.ThreadBase.lowerNbSegmentsForThread(this.threadPegsRed, t.red), o.ThreadBase.lowerNbSegmentsForThread(this.threadPegsGreen, t.green), o.ThreadBase.lowerNbSegmentsForThread(this.threadPegsBlue, t.blue);
                        }),
                        (t.prototype.iterateOnThreads = function (e, t) {
                            var r = this.computeIdealSegmentsRepartition(e);
                            o.ThreadBase.iterateOnThread(this.threadPegsRed, i.EColor.RED, r.red, t),
                                o.ThreadBase.iterateOnThread(this.threadPegsGreen, i.EColor.GREEN, r.green, t),
                                o.ThreadBase.iterateOnThread(this.threadPegsBlue, i.EColor.BLUE, r.blue, t);
                        }),
                        (t.prototype.getThreadToGrow = function () {
                            var e = this.computeIdealSegmentsRepartition(this.totalNbSegments + 1);
                            return e.red > 0 && this.threadPegsRed.length < e.red + 1
                                ? { thread: this.threadPegsRed, color: i.EColor.RED }
                                : e.green > 0 && this.threadPegsGreen.length < e.green + 1
                                    ? { thread: this.threadPegsGreen, color: i.EColor.GREEN }
                                    : { thread: this.threadPegsBlue, color: i.EColor.BLUE };
                        }),
                        (t.prototype.adjustCanvasData = function (e, t) {
                            var r,
                                n = 0,
                                a = 0,
                                i = 0;
                            r = t
                                ? function (e) {
                                    return (255 - e) / 2;
                                }
                                : function (e) {
                                    return e / 2;
                                };
                            for (var o = e.length / 4, s = 0; s < o; s++)
                                (n += e[4 * s + 0]), (a += e[4 * s + 1]), (i += e[4 * s + 2]), (e[4 * s + 0] = r(e[4 * s + 0])), (e[4 * s + 1] = r(e[4 * s + 1])), (e[4 * s + 2] = r(e[4 * s + 2]));
                            t || ((n = 255 * o - n), (a = 255 * o - a), (i = 255 * o - i));
                            var h = n + a + i;
                            (this.frequencyRed = n / h), (this.frequencyGreen = a / h), (this.frequencyBlue = i / h);
                        }),
                        (t.prototype.enableSamplingFor = function (e) {
                            var t;
                            (t = e === i.EColor.RED ? 0 : e === i.EColor.GREEN ? 1 : 2),
                                (this.sampleCanvas = function (e, r) {
                                    return e[r + t];
                                });
                        }),
                        (t.prototype.computeIdealSegmentsRepartition = function (e) {
                            for (var t = e * this.frequencyRed, r = e * this.frequencyGreen, n = e * this.frequencyBlue, a = { red: Math.floor(t), green: Math.floor(r), blue: Math.floor(n) }; a.red + a.green + a.blue < e;) {
                                var i = t - a.red / Math.max(1, a.red + a.green + a.blue),
                                    o = r - a.green / Math.max(1, a.red + a.green + a.blue),
                                    s = n - a.blue / Math.max(1, a.red + a.green + a.blue);
                                i > o && i > s ? a.red++ : o > i && o > s ? a.green++ : a.blue++;
                            }
                            return a;
                        }),
                        t
                    );
                })(o.ThreadBase);
            t.ThreadRedBlueGreen = s;
        },
        506: function (e, t) {
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.Transformation = void 0);
            var r = (function () {
                function e(e, t) {
                    var r = e.width / t.width,
                        n = e.height / t.height;
                    (this.scaling = Math.min(r, n)), (this.origin = { x: 0.5 * (e.width - this.scaling * t.width), y: 0.5 * (e.height - this.scaling * t.height) });
                }
                return (
                    (e.prototype.transform = function (e) {
                        return { x: this.origin.x + e.x * this.scaling, y: this.origin.y + e.y * this.scaling };
                    }),
                    e
                );
            })();
            t.Transformation = r;
        },
    },
        t = {};
    !(function r(n) {
        var a = t[n];
        if (void 0 !== a) return a.exports;
        var i = (t[n] = { exports: {} });
        return e[n].call(i.exports, i, i.exports, r), i.exports;
    })(633);
})();

function getSteps() {
    // document.getElementById('input-image-upload-button').click();
    document.getElementById('instructions-download-id').click()
    return steps1
}
function openFile() {
    document.getElementById('input-image-upload-button').click();

}

function getCanvasBase64() {
    let mainCanvas = document.getElementById('canvas');
    return mainCanvas.toDataURL();
}
function sendCurrentNbSteps(stepCount) {
    window.stepNotifier.postMessage(stepCount.toString());
}

//# sourceMappingURL=main.min.js.map
