(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5405], {
        8312: function(e, a, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
                return t(7451)
            }])
        },
        3039: function(e, a, t) {
            "use strict";
            t.d(a, {
                e: function() {
                    return InviteCodeForm
                }
            });
            var s = t(4817),
                l = t(7833),
                n = t(1248),
                i = t(1389),
                r = t(5834);

            function parseInitInviteCode() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                    a = !1,
                    t = "",
                    s = {
                        1: "",
                        2: "",
                        3: "",
                        4: "",
                        5: ""
                    };
                if (/^[A-Za-z0-9]{5}$/.test(e)) {
                    let [l, n, i, r, c] = e.split("");
                    a = !0, t = "".concat(l).concat(n).concat(i).concat(r).concat(c), s["1"] = "".concat(l), s["2"] = "".concat(n), s["3"] = "".concat(i), s["4"] = "".concat(r), s["5"] = "".concat(c)
                }
                return {
                    digits: s,
                    valid: a,
                    value: t
                }
            }

            function InviteCodeForm(e) {
                let {
                    autoFocus: a,
                    disabled: t = !1,
                    onTouch: i,
                    submitting: c = !1,
                    variant: d = "primary"
                } = e, {
                    t: o
                } = (0, l.Z)("invite-code-form"), p = n.useRef(null), m = n.useRef(null), [x, u] = n.useState(parseInitInviteCode(e.initCode).digits), h = Object.entries(x), g = h.reduce((e, a) => {
                    let [, t] = a;
                    return "".concat(e).concat(t)
                }, ""), f = g.length === h.length, y = {
                    valid: f,
                    value: g
                }, j = "function" == typeof t ? t(y) : t;
                n.useEffect(() => {
                    if ("function" == typeof a && (!document.activeElement || "INPUT" !== document.activeElement.tagName)) {
                        let e = document.getElementById(digitInputId(a()));
                        null == e || e.focus()
                    }
                }, [a]);
                let v = n.useCallback(e => {
                        e.preventDefault();
                        let a = e.clipboardData.getData("text/plain"),
                            t = parseInitInviteCode(a);
                        t.valid && (u(t.digits), InviteCodeForm_focus(m.current))
                    }, []),
                    b = n.useCallback((e, a, t) => {
                        if (/^[A-Za-z0-9]{1}$/.test(e.target.value)) {
                            u(t => ({ ...t,
                                [a]: e.target.value
                            }));
                            let s = null !== t && "" !== e.target.value ? document.getElementById(digitInputId(t)) : null;
                            InviteCodeForm_focus(s), null == i || i()
                        }
                    }, [i]),
                    N = n.useCallback(e => {
                        setTimeout(() => {
                            e.target.setSelectionRange(1, 1)
                        }, 0)
                    }, []),
                    w = n.useCallback((e, a, t, s) => {
                        let l = t ? document.getElementById(digitInputId(t)) : null,
                            n = s ? document.getElementById(digitInputId(s)) : null;
                        switch (e.key) {
                            case "ArrowLeft":
                                InviteCodeForm_focus(l);
                                break;
                            case "ArrowRight":
                                InviteCodeForm_focus(n);
                                break;
                            case "Backspace":
                            case "Delete":
                                var r;
                                null == i || i(), (null === (r = e.target) || void 0 === r ? void 0 : r.value) !== "" ? u(e => ({ ...e,
                                    [a]: ""
                                })) : t && (u(e => ({ ...e,
                                    [t]: ""
                                })), InviteCodeForm_focus(l))
                        }
                    }, [i]);
                return (0, s.jsxs)("form", {
                    className: "flex h-max w-72 flex-col items-center",
                    onPaste: v,
                    onSubmit: a => {
                        var t;
                        a.preventDefault(), null === (t = e.onSubmit) || void 0 === t || t.call(e, y)
                    },
                    children: [(0, s.jsxs)("fieldset", {
                        disabled: c,
                        children: [(0, s.jsx)("legend", {
                            className: "typography-brand-body-l max-w-[256px] text-center text-yellow-100",
                            children: o("fieldset_legend")
                        }), (0, s.jsx)("div", {
                            ref: p,
                            className: "my-8 flex gap-2",
                            children: h.map((e, a) => {
                                let [t, l] = e, n = digitInputId(t), i = h[a - 1], r = h[a + 1], c = i ? i[0] : null, d = r ? r[0] : null;
                                return (0, s.jsx)(DigitInput, {
                                    "aria-label": o("input_aria_label", {
                                        digit: t
                                    }),
                                    id: n,
                                    onFocusCapture: N,
                                    value: l,
                                    onChange: e => {
                                        b(e, t, d)
                                    },
                                    onKeyDown: e => {
                                        w(e, t, c, d)
                                    }
                                }, n)
                            })
                        })]
                    }), (0, s.jsx)(r.zx, {
                        ref: m,
                        glow: !0,
                        disabled: j || c,
                        variant: d,
                        children: f ? o("button_submit_valid") : o("button_submit_invalid")
                    })]
                })
            }
            let DigitInput = e => (0, s.jsxs)("div", {
                className: "relative flex justify-center",
                children: [(0, s.jsx)("input", { ...e,
                    autoComplete: "off",
                    className: "typography-brand-heading-3-caps peer h-[62px] w-[50px] rounded-[15px] border border-camo-300 bg-transparent p-[10px] text-center text-yellow-100 transition-colors focus:border-yellow-100 disabled:text-camo-300",
                    maxLength: 1
                }), (0, s.jsx)("div", {
                    className: (0, i.m)("absolute bottom-[10px] m-auto h-[2px] w-[24px] bg-camo-300 opacity-40 transition", "peer-focus:translate-y-[11px] peer-focus:scale-x-150 peer-focus:opacity-0", "" !== e.value && "opacity-0")
                })]
            });

            function digitInputId(e) {
                return "early-access-digit-".concat(e)
            }

            function InviteCodeForm_focus(e) {
                e && "focus" in e && "function" == typeof e.focus && setTimeout(() => e.focus(), 0)
            }
        },
        7451: function(e, a, t) {
            "use strict";
            t.r(a), t.d(a, {
                __N_SSP: function() {
                    return I
                }
            });
            var s = t(4817),
                l = t(8851),
                n = t(7833),
                i = t(4389),
                r = t.n(i),
                c = t(8735),
                d = t.n(c),
                o = t(7518),
                p = t.n(o),
                m = t(6497),
                x = t(1248),
                u = t(5834),
                h = t(7594),
                g = t(3096),
                f = t(3039),
                y = t(6359),
                j = t(9752),
                v = t(7657),
                b = t(9651),
                N = t(6897),
                w = t(3338);
            let _ = (0, N.fz)(e => {
                let {
                    t: a
                } = (0, n.Z)("index"), t = (0, m.useRouter)(), {
                    me: l,
                    refreshMe: i
                } = (0, w.Hi)(e.me);
                return t.prefetch("/airdrop/early-access"), (0, s.jsxs)("div", {
                    className: "flex flex-1 sm:overflow-hidden",
                    children: [(0, s.jsx)(r(), {
                        children: (0, s.jsx)("link", {
                            as: "image",
                            href: "/images/hero-0.5x.jpg",
                            rel: "preload"
                        })
                    }), (0, s.jsxs)("div", {
                        className: "flex flex-1 flex-col",
                        children: [(0, s.jsx)(y.Jp, {
                            bgImage: "blur",
                            children: (0, s.jsx)(y.h4, {
                                className: "sm:mr-0",
                                children: (0, s.jsx)(j.JL, {
                                    me: l
                                })
                            })
                        }), (0, s.jsx)(y.or, {
                            className: "sm:pr-0",
                            children: (0, s.jsxs)(y.M9, {
                                className: "animate-enter-fade gap-12",
                                position: "top",
                                children: [(0, s.jsxs)("div", {
                                    className: "flex flex-col gap-8",
                                    children: [(0, s.jsxs)("h1", {
                                        className: "typography-brand-heading-1 max-w-[16ch] animate-appear-slide-up text-yellow-100",
                                        children: [a("h1"), (0, s.jsx)(Ticker, {
                                            nouns: [a("ticker.eth"), a("ticker.usd"), a("ticker.yield")]
                                        })]
                                    }), (0, s.jsx)("h3", {
                                        className: "typography-brand-heading-3 max-w-[28ch] animate-appear-slide-up text-camo-100",
                                        children: a("h3")
                                    }), (0, s.jsx)(p(), {
                                        className: "typography-brand-body-l-caps group min-w-[256px] animate-appear-slide-up self-center pt-4 text-yellow-300 xs:self-start",
                                        href: "/airdrop/early-access",
                                        children: (0, s.jsx)(u.zx, {
                                            glow: !0,
                                            stretch: !0,
                                            focus: "group",
                                            children: a("cta_primary")
                                        })
                                    })]
                                }), (0, s.jsx)("div", {
                                    className: "text-camo-500 xs:hidden",
                                    children: (0, s.jsx)(y.i4, {})
                                }), (0, s.jsx)("div", {
                                    className: "flex justify-center xs:hidden",
                                    children: (0, s.jsx)(Tvl, {})
                                }), (0, s.jsx)("div", {
                                    className: "flex sm:hidden",
                                    children: (0, s.jsx)(Backers, {})
                                })]
                            })
                        })]
                    }), (0, s.jsxs)("div", {
                        className: "hidden h-full w-max flex-col content-between items-center pt-12 text-camo-400 sm:flex",
                        children: [(0, s.jsx)(y.Hw, {
                            appear: { in: !0
                            }
                        }), (0, s.jsx)(y.iz, {
                            axis: "y",
                            className: "my-3 animate-appear-expand-y"
                        }), (0, s.jsx)(y.Hw, {
                            appear: { in: !0
                            }
                        })]
                    }), (0, s.jsxs)("div", {
                        className: "mt-10 hidden h-full w-max p-6 pl-4 sm:flex sm:flex-col sm:justify-between",
                        children: [(0, s.jsx)(Cta, {
                            me: l,
                            refreshMe: i
                        }), (0, s.jsx)("div", {
                            className: "mb-8 mt-auto hidden sm:block",
                            children: (0, s.jsx)(Backers, {})
                        })]
                    })]
                })
            });
            _.getLayout = e => (0, s.jsx)(y.RQ, {
                showBars: !0,
                bottomEdgeContent: (0, s.jsx)(b.B, {
                    tvlStyle: "bright"
                }),
                height: "responsive",
                children: e
            });
            var I = !0;
            a.default = _;
            let Cta = e => {
                    let {
                        me: a,
                        refreshMe: t
                    } = e, i = (0, h.q1)(), r = (0, g.O)(), c = (0, m.useRouter)(), {
                        t: d
                    } = (0, n.Z)("index");
                    return (0, s.jsx)("div", {
                        className: "relative w-72",
                        children: (0, s.jsx)(v.WV, {
                            appear: !0,
                            in: "loading" !== a && !i.isLoading,
                            children: (() => {
                                let e = "string" != typeof a && !0 !== a.hasBridged,
                                    n = "string" != typeof a && !0 === a.hasBridged;
                                return "loading" === a || "unauthorized" === a ? (0, s.jsxs)("div", {
                                    className: "w-full animate-appear-slide-up",
                                    children: [(0, s.jsxs)("div", {
                                        className: "flex flex-col items-end justify-end gap-6",
                                        children: [r.isConnected && (0, s.jsx)(j.Ak, {
                                            marginTop: "-12px",
                                            me: a,
                                            underline: (0, s.jsx)(y.iz, {
                                                axis: "x",
                                                className: "animate-appear-expand-left"
                                            })
                                        }), (0, s.jsx)("h2", {
                                            className: "typography-brand-heading-4-caps w-full pb-4 text-center text-yellow-300",
                                            children: d("h2_anonymous")
                                        })]
                                    }), (0, s.jsx)(f.e, {
                                        variant: "secondary",
                                        onSubmit: async e => {
                                            let {
                                                valid: a,
                                                value: s
                                            } = e;
                                            if (a) {
                                                let e = await (0, w.mg)(s);
                                                e ? (await t(), c.push("/airdrop/early-access")) : c.push("/airdrop/early-access?code=input", "/airdrop/early-access")
                                            } else c.push("/airdrop/early-access?code=input", "/airdrop/early-access")
                                        }
                                    })]
                                }) : e ? (0, s.jsxs)("div", {
                                    className: "w-full",
                                    children: [(0, s.jsxs)("div", {
                                        className: "flex flex-col items-end justify-end gap-6",
                                        children: [(0, s.jsx)(j.Ak, {
                                            marginTop: "-12px",
                                            me: a,
                                            underline: (0, s.jsx)(y.iz, {
                                                axis: "x",
                                                className: "animate-appear-expand-left"
                                            })
                                        }), (0, s.jsx)("h2", {
                                            className: "typography-brand-heading-4-caps w-full animate-appear-slide-up text-center text-yellow-300",
                                            children: d("h2_prospect")
                                        })]
                                    }), (0, s.jsx)("p", {
                                        className: "typography-brand-body-l mb-8 mt-4 animate-appear-slide-up text-center  text-yellow-100",
                                        children: d("p_prospect")
                                    }), (0, s.jsx)("div", {
                                        className: "animate-appear-slide-up",
                                        children: (0, s.jsx)(p(), {
                                            className: "group",
                                            href: "/airdrop/early-access",
                                            children: (0, s.jsx)(u.zx, {
                                                glow: !0,
                                                stretch: !0,
                                                focus: "group",
                                                variant: "secondary",
                                                children: d("cta_secondary_prospect")
                                            })
                                        })
                                    })]
                                }) : !!n && (0, s.jsxs)("div", {
                                    className: "w-full animate-appear-slide-up",
                                    children: [(0, s.jsxs)("div", {
                                        className: "flex flex-col items-end gap-6",
                                        children: [(0, s.jsx)(j.Ak, {
                                            marginTop: "-12px",
                                            me: a,
                                            underline: (0, s.jsx)(y.iz, {
                                                axis: "x",
                                                className: "animate-appear-expand-left"
                                            })
                                        }), (0, s.jsx)("h2", {
                                            className: "typography-brand-heading-2 mb-4 w-full text-center normal-case text-yellow-100",
                                            children: (0, s.jsx)(l.Z, {
                                                i18nKey: "index:h2_converted",
                                                values: {
                                                    amount: i.eth
                                                },
                                                components: {
                                                    0: (0, s.jsx)("span", {}),
                                                    1: (0, s.jsx)("span", {
                                                        className: "typography-brand-heading-3 block text-camo-200"
                                                    })
                                                }
                                            })
                                        })]
                                    }), (0, s.jsx)(p(), {
                                        className: "group",
                                        href: "/bridge",
                                        children: (0, s.jsx)(u.zx, {
                                            glow: !0,
                                            stretch: !0,
                                            focus: "group",
                                            variant: "secondary",
                                            children: d("cta_secondary_converted")
                                        })
                                    }), (0, s.jsx)("p", {
                                        className: "typography-brand-body mt-2 text-center text-camo-300",
                                        children: d("p_converted")
                                    })]
                                })
                            })()
                        })
                    })
                },
                Tvl = () => {
                    let {
                        data: e,
                        error: a
                    } = (0, b.j)();
                    return !e || a ? null : (0, s.jsxs)("div", {
                        className: "flex flex-col items-center gap-2",
                        children: [(0, s.jsx)("div", {
                            className: "typography-brand-body-l-caps text-yellow-100",
                            children: "TVL"
                        }), (0, s.jsx)("div", {
                            className: "typography-brand-heading-2 max-w-[80vw] overflow-hidden text-ellipsis text-camo-300",
                            children: Number(e.totalBridgeValueInUsd).toLocaleString("en-US", {
                                currency: "USD",
                                maximumFractionDigits: 0,
                                style: "currency"
                            })
                        })]
                    })
                },
                Backers = () => {
                    let {
                        t: e
                    } = (0, n.Z)("index");
                    return (0, s.jsxs)("div", {
                        className: "flex flex-1 animate-enter-fade flex-col pb-6 xs:max-w-max sm:max-w-full",
                        children: [(0, s.jsx)("h4", {
                            className: "typography-brand-body-l-caps animate-appear-slide-up text-center text-camo-200 xs:text-left sm:text-center",
                            children: e("h4")
                        }), (0, s.jsxs)("div", {
                            className: "mb-8 mt-4 flex animate-appear-slide-up flex-col items-center justify-center gap-6 xs:items-start sm:items-center",
                            children: [(0, s.jsx)(d(), {
                                alt: e("img.alt_letterhead-paradigm"),
                                height: 40,
                                src: "/images/letterhead-paradigm-camo-100.png",
                                width: 144
                            }), (0, s.jsx)(d(), {
                                alt: e("img.alt_letterhead-standard-crypto"),
                                height: 24,
                                src: "/images/letterhead-standard-crypto-long-camo-100.png",
                                width: 240
                            })]
                        }), (0, s.jsxs)("div", {
                            className: "grid animate-appear-slide-up grid-cols-2 grid-rows-2 place-items-center gap-6 xs:grid-cols-4 xs:grid-rows-1 sm:grid-cols-2 sm:grid-rows-2",
                            children: [(0, s.jsxs)("figure", {
                                className: "flex flex-col items-center",
                                children: [(0, s.jsx)(d(), {
                                    alt: e("img.alt_avatar-cl"),
                                    className: "h-16 w-16 rounded-full",
                                    height: 75,
                                    src: "/images/avatar-cl.png",
                                    width: 75
                                }), (0, s.jsx)("figcaption", {
                                    className: "typography-brand-body-l mt-1 text-camo-100",
                                    children: e("figcaption_avatar-cl")
                                })]
                            }), (0, s.jsxs)("figure", {
                                className: "flex flex-col items-center",
                                children: [(0, s.jsx)(d(), {
                                    alt: e("img.alt_avatar-degenspartan"),
                                    className: "h-16 w-16 rounded-full",
                                    height: 75,
                                    src: "/images/avatar-degenspartan.png",
                                    width: 75
                                }), (0, s.jsx)("figcaption", {
                                    className: "typography-brand-body-l mt-1 text-camo-100",
                                    children: e("figcaption_avatar-degenspartan")
                                })]
                            }), (0, s.jsxs)("figure", {
                                className: "flex flex-col items-center",
                                children: [(0, s.jsx)(d(), {
                                    alt: e("img.alt_avatar-andrew-kang"),
                                    className: "h-16 w-16 rounded-full",
                                    height: 75,
                                    src: "/images/avatar-andrew-kang.png",
                                    width: 75
                                }), (0, s.jsx)("figcaption", {
                                    className: "typography-brand-body-l mt-1 text-camo-100",
                                    children: e("figcaption_avatar-andrew-kang")
                                })]
                            }), (0, s.jsxs)("figure", {
                                className: "flex flex-col items-center",
                                children: [(0, s.jsx)(d(), {
                                    alt: e("img.alt_avatar-santiago"),
                                    className: "h-16 w-16 rounded-full",
                                    height: 75,
                                    src: "/images/avatar-santiago.png",
                                    width: 75
                                }), (0, s.jsx)("figcaption", {
                                    className: "typography-brand-body-l mt-1 text-camo-100",
                                    children: e("figcaption_avatar-santiago")
                                })]
                            })]
                        })]
                    })
                },
                Ticker = e => {
                    var a, t;
                    let {
                        nouns: l
                    } = e, [n, i] = x.useState(null), [r, c] = x.useState(0);
                    x.useEffect(() => {
                        let e = setInterval(() => {
                            c(e => (e + 1) % l.length)
                        }, 3e3);
                        return () => clearInterval(e)
                    }, [l.length]);
                    let d = null == n ? void 0 : n.children[r],
                        o = null !== (a = null == d ? void 0 : d.clientWidth) && void 0 !== a ? a : 0,
                        p = null !== (t = null == d ? void 0 : d.clientHeight) && void 0 !== t ? t : 0;
                    return (0, s.jsx)("span", {
                        className: "mt-2 block overflow-hidden rounded-bl-lg rounded-tr-lg bg-camo-400 align-middle transition-[width] duration-1000 xs:ml-4 xs:mt-0 xs:inline-block",
                        style: {
                            height: p,
                            width: o
                        },
                        children: (0, s.jsx)("span", {
                            ref: i,
                            className: "flex flex-col items-start text-black transition-transform duration-1000",
                            style: {
                                transform: "translateY(calc(".concat(p, "px * -").concat(r, "))")
                            },
                            children: l.map(e => (0, s.jsx)("span", {
                                className: "px-2 leading-[125%] xs:px-3",
                                children: e
                            }, e))
                        })
                    })
                }
        }
    },
    function(e) {
        e.O(0, [3714, 9728, 4049, 2811, 9774, 2888, 179], function() {
            return e(e.s = 8312)
        }), _N_E = e.O()
    }
]);