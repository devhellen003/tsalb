(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5531], {
        8581: function(e, t, r) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/airdrop/early-access", function() {
                return r(9813)
            }])
        },
        3039: function(e, t, r) {
            "use strict";
            r.d(t, {
                e: function() {
                    return InviteCodeForm
                }
            });
            var i = r(4817),
                n = r(7833),
                s = r(1248),
                a = r(1389),
                l = r(5834);

            function parseInitInviteCode() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                    t = !1,
                    r = "",
                    i = {
                        1: "",
                        2: "",
                        3: "",
                        4: "",
                        5: ""
                    };
                if (/^[A-Za-z0-9]{5}$/.test(e)) {
                    let [n, s, a, l, o] = e.split("");
                    t = !0, r = "".concat(n).concat(s).concat(a).concat(l).concat(o), i["1"] = "".concat(n), i["2"] = "".concat(s), i["3"] = "".concat(a), i["4"] = "".concat(l), i["5"] = "".concat(o)
                }
                return {
                    digits: i,
                    valid: t,
                    value: r
                }
            }

            function InviteCodeForm(e) {
                let {
                    autoFocus: t,
                    disabled: r = !1,
                    onTouch: a,
                    submitting: o = !1,
                    variant: c = "primary"
                } = e, {
                    t: d
                } = (0, n.Z)("invite-code-form"), u = s.useRef(null), p = s.useRef(null), [x, h] = s.useState(parseInitInviteCode(e.initCode).digits), m = Object.entries(x), f = m.reduce((e, t) => {
                    let [, r] = t;
                    return "".concat(e).concat(r)
                }, ""), g = f.length === m.length, y = {
                    valid: g,
                    value: f
                }, j = "function" == typeof r ? r(y) : r;
                s.useEffect(() => {
                    if ("function" == typeof t && (!document.activeElement || "INPUT" !== document.activeElement.tagName)) {
                        let e = document.getElementById(digitInputId(t()));
                        null == e || e.focus()
                    }
                }, [t]);
                let v = s.useCallback(e => {
                        e.preventDefault();
                        let t = e.clipboardData.getData("text/plain"),
                            r = parseInitInviteCode(t);
                        r.valid && (h(r.digits), InviteCodeForm_focus(p.current))
                    }, []),
                    b = s.useCallback((e, t, r) => {
                        if (/^[A-Za-z0-9]{1}$/.test(e.target.value)) {
                            h(r => ({ ...r,
                                [t]: e.target.value
                            }));
                            let i = null !== r && "" !== e.target.value ? document.getElementById(digitInputId(r)) : null;
                            InviteCodeForm_focus(i), null == a || a()
                        }
                    }, [a]),
                    w = s.useCallback(e => {
                        setTimeout(() => {
                            e.target.setSelectionRange(1, 1)
                        }, 0)
                    }, []),
                    _ = s.useCallback((e, t, r, i) => {
                        let n = r ? document.getElementById(digitInputId(r)) : null,
                            s = i ? document.getElementById(digitInputId(i)) : null;
                        switch (e.key) {
                            case "ArrowLeft":
                                InviteCodeForm_focus(n);
                                break;
                            case "ArrowRight":
                                InviteCodeForm_focus(s);
                                break;
                            case "Backspace":
                            case "Delete":
                                var l;
                                null == a || a(), (null === (l = e.target) || void 0 === l ? void 0 : l.value) !== "" ? h(e => ({ ...e,
                                    [t]: ""
                                })) : r && (h(e => ({ ...e,
                                    [r]: ""
                                })), InviteCodeForm_focus(n))
                        }
                    }, [a]);
                return (0, i.jsxs)("form", {
                    className: "flex h-max w-72 flex-col items-center",
                    onPaste: v,
                    onSubmit: t => {
                        var r;
                        t.preventDefault(), null === (r = e.onSubmit) || void 0 === r || r.call(e, y)
                    },
                    children: [(0, i.jsxs)("fieldset", {
                        disabled: o,
                        children: [(0, i.jsx)("legend", {
                            className: "typography-brand-body-l max-w-[256px] text-center text-yellow-100",
                            children: d("fieldset_legend")
                        }), (0, i.jsx)("div", {
                            ref: u,
                            className: "my-8 flex gap-2",
                            children: m.map((e, t) => {
                                let [r, n] = e, s = digitInputId(r), a = m[t - 1], l = m[t + 1], o = a ? a[0] : null, c = l ? l[0] : null;
                                return (0, i.jsx)(DigitInput, {
                                    "aria-label": d("input_aria_label", {
                                        digit: r
                                    }),
                                    id: s,
                                    onFocusCapture: w,
                                    value: n,
                                    onChange: e => {
                                        b(e, r, c)
                                    },
                                    onKeyDown: e => {
                                        _(e, r, o, c)
                                    }
                                }, s)
                            })
                        })]
                    }), (0, i.jsx)(l.zx, {
                        ref: p,
                        glow: !0,
                        disabled: j || o,
                        variant: c,
                        children: g ? d("button_submit_valid") : d("button_submit_invalid")
                    })]
                })
            }
            let DigitInput = e => (0, i.jsxs)("div", {
                className: "relative flex justify-center",
                children: [(0, i.jsx)("input", { ...e,
                    autoComplete: "off",
                    className: "typography-brand-heading-3-caps peer h-[62px] w-[50px] rounded-[15px] border border-camo-300 bg-transparent p-[10px] text-center text-yellow-100 transition-colors focus:border-yellow-100 disabled:text-camo-300",
                    maxLength: 1
                }), (0, i.jsx)("div", {
                    className: (0, a.m)("absolute bottom-[10px] m-auto h-[2px] w-[24px] bg-camo-300 opacity-40 transition", "peer-focus:translate-y-[11px] peer-focus:scale-x-150 peer-focus:opacity-0", "" !== e.value && "opacity-0")
                })]
            });

            function digitInputId(e) {
                return "early-access-digit-".concat(e)
            }

            function InviteCodeForm_focus(e) {
                e && "focus" in e && "function" == typeof e.focus && setTimeout(() => e.focus(), 0)
            }
        },
        9813: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                __N_SSP: function() {
                    return I
                }
            });
            var i = r(4817),
                n = r(8851),
                s = r(7833),
                a = r(6497),
                l = r(1248),
                o = r(1389),
                c = r(6179),
                d = r(5834),
                u = r(3096),
                p = r(2359),
                x = r(3039),
                h = r(6359),
                m = r(9752),
                f = r(5644),
                g = r(6388),
                y = r(8299),
                j = r(7657),
                v = r(8397),
                b = r(350),
                w = r(6897),
                _ = r(3338);
            let C = (0, w.fz)(e => {
                let {
                    me: t,
                    refreshMe: r
                } = (0, _.Hi)(e.me), n = (0, b.A)(), o = (0, g.$l)(), u = (0, a.useRouter)(), {
                    t: f
                } = (0, s.Z)("early-access"), [v, w] = l.useState(!1), [C, I] = l.useState(!1), [N, P] = l.useState("input" === u.query.code), [k, q] = l.useState(!1), E = "string" != typeof t && !0 === t.hasBridged, A = "string" != typeof t && !0 === t.hasSeenPoints && "string" == typeof t.registeredOn, F = o.state === g.EW.COMPLETE, O = o.state === g.EW.IDLE;
                l.useEffect(() => {
                    F && u.replace("/airdrop/early-access/bridge", void 0, {
                        shallow: !0
                    })
                }, [F, u]), l.useEffect(() => {
                    Object.keys(u.query).length > 0 && u.replace("/airdrop/early-access", void 0, {
                        shallow: !0
                    }), E ? u.replace("/airdrop", void 0, {
                        shallow: !0
                    }) : A && O && u.replace("/airdrop/early-access/bridge", void 0, {
                        shallow: !0
                    })
                }, [E, A, O, u]);
                let authInit = async e => {
                        w(!0), P(!1);
                        let t = await (0, _.mg)(e);
                        t ? (await r(), q(!1)) : P(!0), w(!1)
                    },
                    L = e.inviteCode && !k ? e.inviteCode : "",
                    D = "string" != typeof t && !k && o.state < g.EW.ACTIVE,
                    R = ("unauthorized" === t || k) && o.state < g.EW.ACTIVE,
                    getProgressOrb = () => "string" == typeof t ? 0 : null !== t.discord ? 2 : null !== t.twitter ? 1 : 0;
                return (0, i.jsxs)(l.Fragment, {
                    children: [(0, i.jsx)(h.h4, {
                        underlined: !0,
                        children: (0, i.jsx)(m.JL, {
                            navProfile: !0,
                            me: t
                        })
                    }), (0, i.jsx)(h.or, {
                        unsafeOverflow: !0,
                        children: (0, i.jsxs)("div", {
                            ref: o.anchorRef,
                            className: "relative mr-auto flex h-full w-full max-w-7xl lg:ml-auto",
                            children: [(0, i.jsx)(j.WV, {
                                appear: !0,
                                in: R,
                                children: (0, i.jsxs)(h.M9, {
                                    position: "center-xy",
                                    children: [(0, i.jsx)("h1", {
                                        className: "typography-brand-heading-4-caps mb-4 text-center text-yellow-300",
                                        children: f("invite-code-form:h1_airdrop_and_early_access")
                                    }), (0, i.jsx)(x.e, {
                                        disabled: e => {
                                            let {
                                                valid: t
                                            } = e;
                                            return !t
                                        },
                                        initCode: L,
                                        submitting: v,
                                        autoFocus: l.useCallback(() => L || N && C ? "5" : "1", [C, N, L]),
                                        onSubmit: e => {
                                            let {
                                                value: t
                                            } = e;
                                            I(!0), authInit(t)
                                        },
                                        onTouch: l.useCallback(() => {
                                            I(!0), N && P(!1)
                                        }, [N])
                                    }), (0, i.jsx)("div", {
                                        className: "absolute right-0 top-0",
                                        children: (0, i.jsx)(j.s_, {
                                            appear: !0,
                                            in: N,
                                            children: (0, i.jsx)(d.Vq, {
                                                variant: "error",
                                                children: (0, i.jsxs)("div", {
                                                    className: "flex w-full items-center justify-start gap-2",
                                                    children: [(0, i.jsx)(d.JO, {
                                                        name: "error"
                                                    }), f("error_input")]
                                                })
                                            })
                                        })
                                    })]
                                })
                            }), (0, i.jsx)(j.rl, {
                                appear: !0,
                                duration: 1e3,
                                in: D,
                                children: (0, i.jsx)(h.M9, {
                                    className: "flex sm:hidden",
                                    position: "center-xy",
                                    children: (0, i.jsxs)("div", {
                                        className: "flex flex-col items-center gap-3",
                                        children: [(0, i.jsx)("figure", {
                                            "aria-hidden": !0,
                                            className: "max-w-96 xs:max-w-96 relative aspect-square w-full xs:w-96",
                                            children: (0, i.jsx)(p.V, {
                                                progress: 0
                                            })
                                        }), (0, i.jsx)("h1", {
                                            className: "typography-brand-body-l-caps mb-4 text-center uppercase text-yellow-100",
                                            children: f("h1_device")
                                        })]
                                    })
                                })
                            }), (0, i.jsx)(j.rl, {
                                appear: !0,
                                duration: 1e3,
                                in: D,
                                children: (0, i.jsxs)(h.M9, {
                                    className: "h-full w-full hidden sm:flex",
                                    position: "top",
                                    children: [(0, i.jsx)(y.ug, {
                                        duration: 1e3,
                                        in: D,
                                        children: (0, i.jsxs)("div", {
                                            children: [(0, i.jsx)("div", {
                                                className: "typography-brand-body-l-caps text-camo-200",
                                                children: f("pretitle_prospect")
                                            }), (0, i.jsx)("h1", {
                                                className: "typography-brand-heading-2 text-yellow-100",
                                                children: f("h1_prospect")
                                            })]
                                        })
                                    }), (0, i.jsxs)("div", {
                                        className: "flex w-full flex-1 gap-11",
                                        children: [(0, i.jsx)("div", {
                                            className: "mt-8 flex-1",
                                            children: (() => {
                                                if ("loading" === t || "unauthorized" === t) return null; {
                                                    var r, s;
                                                    let a = !1 === t.isMissingInviteCode,
                                                        o = !0 === t.isMissingInviteCode,
                                                        d = !!t.twitter,
                                                        u = e.authCode === c.eF.TwitterUnknownError,
                                                        p = !!t.discord,
                                                        x = e.authCode === c.eF.DiscordUnknownError,
                                                        h = n.isAuthenticated && "string" == typeof t.registeredOn;
                                                    return (0, i.jsxs)(l.Fragment, {
                                                        children: [(0, i.jsx)(InviteCodePrerequisite, {
                                                            complete: a,
                                                            error: o,
                                                            index: 1,
                                                            open: o,
                                                            requestNewCode: () => q(!0),
                                                            transition: D
                                                        }), (0, i.jsx)(TwitterAuthPrerequisite, {
                                                            complete: d,
                                                            error: u,
                                                            handle: null !== (s = null === (r = t.twitter) || void 0 === r ? void 0 : r.handle) && void 0 !== s ? s : null,
                                                            index: 2,
                                                            open: !d,
                                                            transition: D
                                                        }), (0, i.jsx)(DiscordAuthPrerequiside, {
                                                            complete: p,
                                                            error: x,
                                                            index: 3,
                                                            open: d && !p,
                                                            transition: D
                                                        }), (0, i.jsx)(ConnectedWalletPrerequisite, {
                                                            complete: h,
                                                            error: !1,
                                                            index: 4,
                                                            open: p,
                                                            transition: D
                                                        })]
                                                    })
                                                }
                                            })()
                                        }), (0, i.jsx)("figure", {
                                            ref: o.progressOrbRef,
                                            "aria-hidden": !0,
                                            className: "relative h-[456px] w-[456px]",
                                            children: (0, i.jsx)(p.V, {
                                                progress: getProgressOrb()
                                            }, getProgressOrb())
                                        })]
                                    }), (0, i.jsxs)("div", {
                                        className: "mr-64",
                                        children: ["string" != typeof t && !0 === t.isMissingInviteCode && (0, i.jsx)(d.Vq, {
                                            variant: "error",
                                            children: (0, i.jsxs)("div", {
                                                className: "flex w-full items-center justify-start gap-2",
                                                children: [(0, i.jsx)(d.JO, {
                                                    name: "error"
                                                }), f("error_race")]
                                            })
                                        }), "number" == typeof e.authCode && [c.eF.DiscordUnknownError, c.eF.TwitterUnknownError].includes(e.authCode) && (0, i.jsx)(d.Vq, {
                                            variant: "error",
                                            children: (0, i.jsxs)("div", {
                                                className: "flex w-full items-center justify-start gap-2",
                                                children: [(0, i.jsx)(d.JO, {
                                                    name: "error"
                                                }), f("error_".concat(e.authCode))]
                                            })
                                        })]
                                    })]
                                })
                            })]
                        })
                    })]
                })
            });
            var I = !0;
            t.default = C;
            let PrerequisiteLabel = e => {
                    var t;
                    return (0, i.jsx)(y.oI, {
                        delay: 1,
                        duration: 1e3,
                        in: null !== (t = e.transition) && void 0 !== t && t,
                        children: (0, i.jsx)("div", {
                            className: (0, o.m)("typography-brand-body-l-caps text-camo-200", e.open && "text-yellow-100"),
                            children: e.children
                        })
                    })
                },
                PrerequisiteMarker = e => {
                    var t;
                    return (0, i.jsx)(y.IR, {
                        delay: 1,
                        duration: 1e3,
                        in: null !== (t = e.transition) && void 0 !== t && t,
                        children: (0, i.jsx)("div", {
                            className: (0, o.m)("typography-brand-body-l-caps flex h-10 w-14 items-center justify-center bg-camo-200 text-black transition-colors [clip-path:polygon(36%_0,100%_0,100%_50%,64%_100%,0_100%,0%_50%)]", e.open && "bg-yellow-100", e.error && "bg-mars-300 text-white"),
                            children: e.index
                        })
                    })
                },
                PrerequisiteRowLayout = e => {
                    var t;
                    return (0, i.jsxs)(l.Fragment, {
                        children: [(0, i.jsx)("div", {
                            className: "grid grid-cols-[56px_1fr_264px] items-center gap-8 py-7",
                            children: l.Children.map(e.children, e => (0, i.jsx)("div", {
                                className: "col-span-1",
                                children: e
                            }))
                        }), (0, i.jsx)(y.tB, {
                            delay: 1,
                            duration: 1e3,
                            in: null !== (t = e.transition) && void 0 !== t && t,
                            children: (0, i.jsx)(h.iz, {
                                axis: "x"
                            })
                        })]
                    })
                },
                PrerequisiteAction = e => {
                    var t;
                    return (0, i.jsx)(y.h4, {
                        delay: 1,
                        duration: 1e3,
                        in: null !== (t = e.transition) && void 0 !== t && t,
                        children: (0, i.jsx)("div", {
                            children: e.children
                        })
                    })
                },
                InviteCodePrerequisite = e => {
                    let {
                        t
                    } = (0, s.Z)("early-access");
                    return (0, i.jsxs)(PrerequisiteRowLayout, { ...e,
                        children: [(0, i.jsx)(PrerequisiteMarker, { ...e
                        }), (0, i.jsx)(PrerequisiteLabel, { ...e,
                            children: t("label_invite")
                        }), (0, i.jsx)(PrerequisiteAction, { ...e,
                            children: e.complete ? (0, i.jsx)("div", {
                                className: "flex justify-end text-yellow-100",
                                children: (0, i.jsx)(d.JO, {
                                    name: "checkmark-circle"
                                })
                            }) : (0, i.jsx)(d.zx, {
                                glow: !0,
                                stretch: !0,
                                onClick: e.requestNewCode,
                                variant: "secondary",
                                children: t("button_invite_incomplete")
                            })
                        })]
                    })
                },
                TwitterAuthPrerequisite = e => {
                    let {
                        t
                    } = (0, s.Z)("early-access"), r = (0, f.U)();
                    return (0, i.jsxs)(PrerequisiteRowLayout, { ...e,
                        children: [(0, i.jsx)(PrerequisiteMarker, { ...e
                        }), (0, i.jsx)(PrerequisiteLabel, { ...e,
                            children: e.complete ? (0, i.jsx)(n.Z, {
                                i18nKey: "early-access:label_twitter_complete",
                                values: {
                                    handle: e.handle
                                }
                            }) : (0, i.jsx)(n.Z, {
                                i18nKey: "early-access:label_twitter_incomplete",
                                components: {
                                    0: (0, i.jsx)("a", {
                                        className: "interactive-text text-yellow-300",
                                        href: "https://twitter.com/blast_l2",
                                        target: "_blank"
                                    })
                                }
                            })
                        }), (0, i.jsx)(PrerequisiteAction, { ...e,
                            children: e.complete ? (0, i.jsx)("div", {
                                className: "typography-brand-body flex justify-end",
                                children: (0, i.jsx)(d.hU, {
                                    "aria-label": t("button_twitter_complete"),
                                    name: "edit",
                                    onClick: r.open,
                                    renderAriaLabel: "before",
                                    variant: "primary"
                                })
                            }) : (0, i.jsx)("a", {
                                className: "group",
                                href: (0, c.FP)("/auth/twitter"),
                                children: (0, i.jsx)(d.zx, {
                                    glow: !0,
                                    stretch: !0,
                                    disabled: !e.open,
                                    focus: "group",
                                    variant: e.error ? "secondary" : "primary",
                                    children: t("button_twitter_incomplete")
                                })
                            })
                        })]
                    })
                },
                DiscordAuthPrerequiside = e => {
                    let {
                        t
                    } = (0, s.Z)("early-access");
                    return (0, i.jsxs)(PrerequisiteRowLayout, { ...e,
                        children: [(0, i.jsx)(PrerequisiteMarker, { ...e
                        }), (0, i.jsx)(PrerequisiteLabel, { ...e,
                            children: (0, i.jsx)(n.Z, {
                                i18nKey: "early-access:label_discord",
                                components: {
                                    0: (0, i.jsx)("a", {
                                        className: "interactive-text text-yellow-300",
                                        href: "https://discord.gg/blast-l2",
                                        target: "_blank"
                                    })
                                }
                            })
                        }), (0, i.jsx)(PrerequisiteAction, { ...e,
                            children: e.complete ? (0, i.jsx)("div", {
                                className: "flex justify-end text-yellow-100",
                                children: (0, i.jsx)(d.JO, {
                                    name: "checkmark-circle"
                                })
                            }) : (0, i.jsx)("a", {
                                className: "group",
                                href: (0, c.FP)("/auth/discord"),
                                children: (0, i.jsx)(d.zx, {
                                    glow: !0,
                                    stretch: !0,
                                    disabled: !e.open,
                                    focus: "group",
                                    variant: e.error ? "secondary" : "primary",
                                    children: t("button_discord_incomplete")
                                })
                            })
                        })]
                    })
                },
                ConnectedWalletPrerequisite = e => {
                    let t = (0, u.O)(),
                        {
                            t: r
                        } = (0, s.Z)("early-access"),
                        n = (0, b.A)(),
                        l = (0, a.useRouter)(),
                        o = (0, g.$l)(),
                        {
                            refreshMe: c
                        } = (0, _.Hi)();
                    e.open && !e.complete && o.state === g.EW.IDLE && (o.init(), l.prefetch("/airdrop/early-access/bridge"));
                    let onClick = async () => {
                        e.complete ? (o.start(), (0, _.nm)().then(c)) : t.isConnected ? n.authenticate() : (t.connect(), n.autoAuthenticate(!0))
                    };
                    return (0, i.jsxs)(PrerequisiteRowLayout, { ...e,
                        children: [(0, i.jsx)(PrerequisiteMarker, { ...e
                        }), (0, i.jsx)(PrerequisiteLabel, { ...e,
                            children: r("label_wallet")
                        }), (0, i.jsx)(PrerequisiteAction, { ...e,
                            children: (0, i.jsx)(v.h, {
                                glow: !0,
                                stretch: !0,
                                disabled: !e.open,
                                onClick: onClick,
                                pendingText: r("common:sign wallet"),
                                variant: "primary",
                                isWalletPending: !!e.open && (t.isConnecting || n.isAuthenticating),
                                children: r(e.complete ? "button_wallet_complete" : "button_wallet_incomplete")
                            })
                        })]
                    })
                }
        }
    },
    function(e) {
        e.O(0, [3714, 9728, 4049, 2811, 9774, 2888, 179], function() {
            return e(e.s = 8581)
        }), _N_E = e.O()
    }
]);