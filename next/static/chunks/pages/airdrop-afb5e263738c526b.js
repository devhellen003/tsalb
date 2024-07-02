(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5393], {
        1093: function(e, a, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/airdrop", function() {
                return t(517)
            }])
        },
        517: function(e, a, t) {
            "use strict";
            t.r(a), t.d(a, {
                __N_SSP: function() {
                    return F
                }
            });
            var i = t(4817),
                s = t(8851),
                r = t(7833),
                l = t(8735),
                n = t.n(l),
                d = t(7518),
                o = t.n(d),
                c = t(6497),
                h = t(1248),
                x = t(7622),
                p = t(1389),
                u = t(6179),
                m = t(5834),
                j = t(7594),
                b = t(3096),
                y = t(2359),
                f = t(3125),
                v = t(6359),
                g = t(9752),
                _ = t(8299),
                w = t(414),
                N = t(7657),
                k = t(8397),
                S = t(350),
                z = t(6897),
                C = t(3460),
                I = t(3338);
            let O = (0, z.fz)(e => {
                var a, t, l, n;
                let {
                    me: d
                } = (0, I.Hi)(e.me), o = (0, S.A)(), x = (0, b.O)(), p = (0, f.G)(), u = (0, c.useRouter)(), {
                    lang: j,
                    t: z
                } = (0, r.Z)("airdrop"), [O, F] = (0, C.WE)("blast:dashboard:tutorial:step", 0), Z = "string" != typeof d && !0 !== d.hasBridged, L = "string" == typeof d && "string" == typeof o.lastAuthenticated;
                if (h.useEffect(() => {
                        (Z || L) && u.replace("/airdrop/early-access", void 0, {
                            shallow: !0
                        })
                    }, [Z, L, u]), "loading" === d) return !1;
                let T = !p.isOpen && "string" != typeof d && !0 === d.hasBridged,
                    U = !p.isOpen && "unauthorized" === d,
                    P = "string" != typeof d && null !== (t = d.nextSquadGoal) && void 0 !== t ? t : 0,
                    E = "string" != typeof d && null !== (l = d.currentSquadBalance) && void 0 !== l ? l : 0,
                    B = E > 100 ? 2 : Math.min(Math.max(null !== (n = null === (a = "".concat(E).split(".")[1]) || void 0 === a ? void 0 : a.length) && void 0 !== n ? n : 2, 2), 4);
                return (0, i.jsxs)(h.Fragment, {
                    children: [(0, i.jsx)(v.h4, {
                        underlined: !0,
                        children: (0, i.jsx)(g.JL, {
                            navPoints: !0,
                            navProfile: !0,
                            me: d
                        })
                    }), (0, i.jsx)(v.or, {
                        children: (0, i.jsxs)("div", {
                            className: "relative mr-0 flex flex-1",
                            children: [(0, i.jsx)(N.WV, {
                                appear: !0,
                                duration: 1e3,
                                in: U,
                                children: (0, i.jsx)(v.M9, {
                                    position: "center-xy",
                                    children: (0, i.jsxs)("div", {
                                        className: "flex flex-col items-center gap-3",
                                        children: [(0, i.jsx)("figure", {
                                            "aria-hidden": !0,
                                            className: "max-w-96 xs:max-w-96 relative aspect-square w-full xs:w-96",
                                            children: (0, i.jsx)(y.V, {
                                                progress: 0
                                            })
                                        }), (0, i.jsx)("h1", {
                                            className: "typography-brand-body-l-caps mb-4 text-center uppercase text-yellow-100",
                                            children: z("h1_unauthorized")
                                        }), (0, i.jsx)("div", {
                                            className: "max-w-64 w-full xs:w-64",
                                            children: (0, i.jsx)(k.h, {
                                                glow: !0,
                                                stretch: !0,
                                                onClick: x.connect,
                                                isWalletPending: x.isConnecting || o.isAuthenticating,
                                                children: z("cta_unauthorized")
                                            })
                                        })]
                                    })
                                })
                            }), (0, i.jsx)(N.rl, {
                                appear: !0,
                                in: T,
                                children: (0, i.jsxs)(v.M9, {
                                    className: "w-full flex-row pr-28",
                                    position: "top",
                                    children: [(0, i.jsx)("section", {
                                        className: "flex h-full flex-col overflow-auto",
                                        children: (0, i.jsxs)("div", {
                                            className: "mr-10 w-72",
                                            children: [(0, i.jsx)("article", {
                                                children: (0, i.jsx)(Balances, { in: T
                                                })
                                            }), (0, i.jsx)(_.zz, { in: T,
                                                children: (0, i.jsx)(v.iz, {
                                                    axis: "x"
                                                })
                                            }), (0, i.jsx)("article", {
                                                children: (0, i.jsx)(Spins, { in: T
                                                })
                                            }), (0, i.jsx)(_.zz, { in: T,
                                                children: (0, i.jsx)(v.iz, {
                                                    axis: "x"
                                                })
                                            }), (0, i.jsx)("article", {
                                                children: (0, i.jsx)(LeaderboardRank, { in: T
                                                })
                                            })]
                                        })
                                    }), (0, i.jsx)("div", {
                                        children: (0, i.jsx)(_.S3, { in: T,
                                            children: (0, i.jsx)(v.iz, {
                                                axis: "y"
                                            })
                                        })
                                    }), (0, i.jsxs)("section", {
                                        className: "flex flex-1 flex-col pl-10",
                                        children: [(0, i.jsxs)("div", {
                                            className: "flex",
                                            children: [(0, i.jsxs)("div", {
                                                className: "flex flex-1 items-center gap-4",
                                                children: [(0, i.jsx)("h1", {
                                                    className: "typography-brand-heading-2 text-yellow-100",
                                                    children: z("dashboard.h1")
                                                }), (0, i.jsx)(w.zW, {
                                                    appear: !0,
                                                    in: T && null === O,
                                                    children: (0, i.jsx)("div", {
                                                        className: "mt-1",
                                                        children: (0, i.jsx)(m.hU, {
                                                            "aria-label": z("dashbord.aria-label_button_tutorial"),
                                                            name: "info",
                                                            onClick: () => F(0)
                                                        })
                                                    })
                                                })]
                                            }), (0, i.jsx)(w.zW, {
                                                appear: !0,
                                                in: T && 0 !== O,
                                                children: (0, i.jsxs)("div", {
                                                    className: "flex flex-1 flex-col gap-2",
                                                    children: [(0, i.jsx)("label", {
                                                        className: "typography-brand-body-l flex justify-between",
                                                        htmlFor: "squad-goal-progress",
                                                        children: (0, i.jsx)(s.Z, {
                                                            i18nKey: "airdrop:dashboard.label_progress_luck",
                                                            components: {
                                                                0: (0, i.jsx)("div", {
                                                                    className: "text-camo-400"
                                                                }),
                                                                1: (0, i.jsx)("div", {
                                                                    className: "text-camo-200"
                                                                })
                                                            },
                                                            values: {
                                                                max: P.toLocaleString(j),
                                                                value: E.toLocaleString(j, {
                                                                    maximumFractionDigits: B,
                                                                    minimumFractionDigits: 1
                                                                })
                                                            }
                                                        })
                                                    }), (0, i.jsx)("progress", {
                                                        className: "h-3 w-full [&::-moz-progress-bar]:bg-yellow-400 [&::-webkit-progress-bar]:bg-camo-500 [&::-webkit-progress-value]:bg-yellow-400",
                                                        id: "squad-goal-progress",
                                                        max: P,
                                                        value: E
                                                    })]
                                                })
                                            })]
                                        }), (0, i.jsx)(_.tB, { in: T,
                                            children: (0, i.jsx)(v.iz, {
                                                axis: "x",
                                                className: "mt-8"
                                            })
                                        }), (0, i.jsx)("div", {
                                            className: "relative flex min-h-0 flex-1",
                                            children: (0, i.jsxs)("div", {
                                                className: "w-full",
                                                children: [(0, i.jsx)(Tutorial, {
                                                    onNext: () => F(1),
                                                    step: O,
                                                    onClose: () => {
                                                        F(null)
                                                    }
                                                }), (0, i.jsx)(Invites, { in: T && !(null !== O)
                                                })]
                                            })
                                        })]
                                    })]
                                })
                            }, "object" == typeof d ? d.walletAddress : "unauthorized")]
                        })
                    })]
                })
            });
            var F = !0;

            function Balances(e) {
                let a = (0, j.q1)(),
                    {
                        t
                    } = (0, r.Z)("airdrop"),
                    s = h.useRef(null),
                    l = h.useRef(null);
                return (0, i.jsxs)(h.Fragment, {
                    children: [(0, i.jsx)(m.u, {
                        placement: "right-start",
                        referenceElement: s.current,
                        children: (0, i.jsx)("div", {
                            className: "typography-brand-body max-w-xs text-camo-200",
                            children: t("dashboard.tooltip_eth")
                        })
                    }), (0, i.jsx)(m.u, {
                        placement: "right-start",
                        referenceElement: l.current,
                        children: (0, i.jsx)("div", {
                            className: "typography-brand-body max-w-xs text-camo-200",
                            children: t("dashboard.tooltip_usdb")
                        })
                    }), (0, i.jsx)(w.qQ, {
                        appear: !0,
                        in: e.in && !a.isLoading,
                        children: (0, i.jsxs)("div", {
                            className: "w-full translate-y-8 flex-col items-center justify-between px-8 opacity-0",
                            children: [(0, i.jsxs)("div", {
                                className: "flex items-center justify-center gap-2 pl-2",
                                children: [(0, i.jsx)("span", {
                                    className: "typography-brand-heading-3 text-yellow-100",
                                    children: a.eth
                                }), (0, i.jsx)("div", {
                                    className: "flex h-6 w-6 items-center justify-center rounded-full bg-camo-200 text-black",
                                    children: (0, i.jsx)(m.JO, {
                                        ref: s,
                                        height: 20,
                                        name: "eth",
                                        width: 20
                                    })
                                })]
                            }), (0, i.jsxs)("div", {
                                className: "flex items-center justify-center gap-2 pl-2",
                                children: [(0, i.jsx)("span", {
                                    className: "typography-brand-heading-3 text-yellow-100",
                                    children: a.usd
                                }), (0, i.jsx)("div", {
                                    className: "flex h-6 w-6 items-center justify-center rounded-full bg-yellow-300 text-black",
                                    children: (0, i.jsx)(m.JO, {
                                        ref: l,
                                        height: 20,
                                        name: "usdb",
                                        width: 20
                                    })
                                })]
                            }), (0, i.jsx)("h2", {
                                className: "typography-brand-heading-3 mb-4 mt-2 flex flex-col items-center text-camo-200",
                                children: t("dashboard.h2_article_balances")
                            }), (0, i.jsx)(o(), {
                                href: "/bridge",
                                children: (0, i.jsx)(m.zx, {
                                    stretch: !0,
                                    focus: "group",
                                    children: t("dashboard.cta_article_balances")
                                })
                            }), (0, i.jsx)("aside", {
                                className: "typography-brand-body mb-5 mt-1 text-center text-camo-300",
                                children: t("dashboard.aside_article_balances")
                            })]
                        })
                    })]
                })
            }

            function Spins(e) {
                var a, t, l, d, o, c, p;
                let {
                    t: j
                } = (0, r.Z)("airdrop"), b = (0, f.G)(), {
                    me: y
                } = (0, I.Hi)(), {
                    data: v
                } = (0, x.ZP)((0, u.FP)("/user/dashboard"), u.U2), g = h.useRef(null), [w, N] = h.useState(!1), [k, S] = h.useState(!1), z = null !== (a = null == v ? void 0 : v.spins["luck-spin"]) && void 0 !== a ? a : 0, C = null !== (t = null == v ? void 0 : v.spins["super-spin"]) && void 0 !== t ? t : 0, O = null !== (l = null == v ? void 0 : v.spins["tweet-spin"]) && void 0 !== l ? l : 0, F = null !== (d = null == v ? void 0 : v.spins["standard-spin"]) && void 0 !== d ? d : 0, Z = null !== (o = null == v ? void 0 : v.spins["initial-spin"]) && void 0 !== o ? o : 0, L = null !== (c = null == v ? void 0 : v.spinStats.spinsPerWeek) && void 0 !== c ? c : 0, T = "string" != typeof y && !0 === y.isEligibleForTweetSpin, U = "string" != typeof y ? (100 * (null !== (p = y.luck) && void 0 !== p ? p : 0)).toFixed(0) : "0";
                if (Z > 0 || O > 0) {
                    let a = Z ? "initial-spin" : "tweet-spin",
                        t = Z || O;
                    return (0, i.jsx)(_.ug, { in: e.in,
                        children: (0, i.jsxs)("div", {
                            className: "relative mt-4 px-8",
                            onMouseEnter: () => {
                                b.isOpen || b.init({
                                    spinCount: t,
                                    spinType: a,
                                    spinsPerWeek: L
                                })
                            },
                            children: [(0, i.jsx)("div", {
                                className: "typography-brand-body-bold absolute right-0 flex items-center gap-1 text-camo-200",
                                children: (0, i.jsx)(s.Z, {
                                    i18nKey: "airdrop:dashboard.icon_luck",
                                    values: {
                                        luck: U
                                    },
                                    components: {
                                        0: (0, i.jsx)(m.JO, {
                                            name: "luck"
                                        })
                                    }
                                })
                            }), (0, i.jsx)("h2", {
                                className: "typography-brand-heading-2 mb-4 text-center text-yellow-100",
                                children: (0, i.jsx)(s.Z, {
                                    i18nKey: "airdrop:dashboard.h2_article_spin",
                                    components: {
                                        0: (0, i.jsx)("div", {
                                            className: "typography-brand-heading-3 mt-[-4px] text-camo-200"
                                        })
                                    },
                                    values: {
                                        count: t
                                    }
                                })
                            }), (0, i.jsx)(m.zx, {
                                stretch: !0,
                                onClick: b.start,
                                variant: "secondary",
                                children: j("dashboard.button_article_spin")
                            }), (0, i.jsx)("aside", {
                                className: "typography-brand-body py-2 pb-4 text-center text-camo-300",
                                children: j("dashboard.aside_article_spin", {
                                    count: L
                                })
                            })]
                        })
                    })
                }
                return T ? (0, i.jsxs)(h.Fragment, {
                    children: [(0, i.jsx)("div", {
                        className: "group flex h-full w-full cursor-pointer flex-col justify-center bg-camo-200 p-8 text-camo-200",
                        onClick: () => {
                            S(!0)
                        },
                        children: (0, i.jsx)(_.ug, { in: e.in,
                            children: (0, i.jsxs)("div", {
                                children: [(0, i.jsx)("h2", {
                                    className: "typography-brand-heading-2 mb-6 text-center text-camo-700",
                                    style: {
                                        fontSize: "32px"
                                    },
                                    children: (0, i.jsx)(s.Z, {
                                        i18nKey: "airdrop:dashboard.h2_article_tweet_spin",
                                        components: {
                                            0: (0, i.jsx)("div", {
                                                className: "typography-brand-heading-3"
                                            })
                                        }
                                    })
                                }), (0, i.jsx)(m.zx, {
                                    stretch: !0,
                                    focus: "group",
                                    hover: "group",
                                    text: "current",
                                    variant: "tertiary",
                                    onClick: () => {
                                        S(!0)
                                    },
                                    children: (0, i.jsxs)("div", {
                                        className: "flex items-center justify-center gap-2.5",
                                        children: [j("dashboard.button_article_tweet_spin"), (0, i.jsx)(m.JO, {
                                            "aria-hidden": !0,
                                            name: "twitter"
                                        })]
                                    })
                                })]
                            })
                        })
                    }), (0, i.jsx)(TweetSpinModal, {
                        onClose: () => S(!1),
                        open: k
                    })]
                }) : z > 0 ? (0, i.jsxs)("div", {
                    className: "group relative flex h-full min-h-[208px] w-full cursor-pointer flex-col justify-center overflow-hidden bg-yellow-100 p-8",
                    onClick: b.start,
                    onMouseEnter: () => {
                        b.isOpen || b.init({
                            spinCount: z,
                            spinType: "luck-spin"
                        })
                    },
                    children: [(0, i.jsx)("div", {
                        className: "absolute inset-0 left-[100%] transition-[left] duration-300 group-hover:left-[-100%]",
                        children: (0, i.jsx)(n(), {
                            "aria-hidden": !0,
                            alt: "",
                            layout: "fill",
                            objectFit: "cover",
                            src: "/images/shine-yellow-100.svg"
                        })
                    }), (0, i.jsx)(_.ug, { in: e.in,
                        children: (0, i.jsxs)("div", {
                            className: "relative z-10 text-yellow-100",
                            children: [(0, i.jsx)("h2", {
                                className: "typography-brand-heading-3 mb-6 text-center tracking-wide text-camo-700",
                                style: {
                                    fontSize: "24px"
                                },
                                children: (0, i.jsx)(s.Z, {
                                    i18nKey: "airdrop:dashboard.h2_article_spin_luck",
                                    components: {
                                        0: (0, i.jsx)("span", {
                                            className: "font-semibold"
                                        })
                                    }
                                })
                            }), (0, i.jsx)(m.zx, {
                                stretch: !0,
                                focus: "group",
                                hover: "group",
                                onClick: b.start,
                                text: "current",
                                variant: "tertiary",
                                children: j("dashboard.button_article_spin_luck")
                            })]
                        })
                    })]
                }) : C > 0 ? (0, i.jsxs)("div", {
                    className: "group relative flex h-full min-h-[208px] w-full cursor-pointer flex-col justify-center overflow-hidden bg-yellow-300 p-8",
                    onClick: b.start,
                    onMouseEnter: () => {
                        b.isOpen || b.init({
                            spinCount: C,
                            spinType: "super-spin"
                        })
                    },
                    children: [(0, i.jsx)("div", {
                        className: "absolute inset-0 left-[100%] transition-[left] duration-300 group-hover:left-[-100%]",
                        children: (0, i.jsx)(n(), {
                            "aria-hidden": !0,
                            alt: "",
                            layout: "fill",
                            objectFit: "cover",
                            src: "/images/shine-yellow-300.svg"
                        })
                    }), (0, i.jsx)(_.ug, { in: e.in,
                        children: (0, i.jsxs)("div", {
                            className: "relative z-10 text-yellow-300",
                            children: [(0, i.jsx)("h2", {
                                className: "typography-brand-heading-2 mb-6 text-center text-camo-700",
                                style: {
                                    fontSize: "32px"
                                },
                                children: (0, i.jsx)(s.Z, {
                                    i18nKey: "airdrop:dashboard.h2_article_spin_super",
                                    components: {
                                        0: (0, i.jsx)("div", {
                                            className: "typography-brand-heading-3",
                                            style: {
                                                fontSize: "24px"
                                            }
                                        })
                                    }
                                })
                            }), (0, i.jsx)(m.zx, {
                                stretch: !0,
                                focus: "group",
                                hover: "group",
                                onClick: b.start,
                                text: "current",
                                variant: "tertiary",
                                children: j("dashboard.button_article_spin_super")
                            })]
                        })
                    })]
                }) : (0, i.jsxs)(h.Fragment, {
                    children: [(0, i.jsx)(m.u, {
                        placement: "right-start",
                        referenceElement: g.current,
                        children: (0, i.jsx)("div", {
                            className: "typography-brand-body max-w-xs text-camo-200",
                            children: j("dashboard.tooltip_luck")
                        })
                    }), (0, i.jsx)(_.ug, { in: e.in,
                        children: (0, i.jsxs)("div", {
                            className: "relative mt-4 px-8",
                            onMouseEnter: () => {
                                !b.isOpen && F > 0 && b.init({
                                    spinsPerWeek: L,
                                    spinCount: F,
                                    spinType: "standard-spin"
                                })
                            },
                            children: [(0, i.jsx)("div", {
                                ref: g,
                                className: "typography-brand-body-bold absolute right-0 flex items-center gap-1 text-camo-200",
                                children: (0, i.jsx)(s.Z, {
                                    i18nKey: "airdrop:dashboard.icon_luck",
                                    values: {
                                        luck: U
                                    },
                                    components: {
                                        0: (0, i.jsx)(m.JO, {
                                            name: "luck"
                                        })
                                    }
                                })
                            }), (0, i.jsx)("h2", {
                                className: "typography-brand-heading-2 mb-4 text-center text-yellow-100",
                                children: (0, i.jsx)(s.Z, {
                                    i18nKey: "airdrop:dashboard.h2_article_spin",
                                    components: {
                                        0: (0, i.jsx)("div", {
                                            className: "typography-brand-heading-3 mt-[-4px] text-camo-200"
                                        })
                                    },
                                    values: {
                                        count: F
                                    }
                                })
                            }), (0, i.jsx)(m.zx, {
                                stretch: !0,
                                variant: "secondary",
                                onClick: () => {
                                    F > 0 ? b.start() : N(!0)
                                },
                                children: j("dashboard.button_article_spin")
                            }), (0, i.jsx)("aside", {
                                className: "typography-brand-body py-2 pb-4 text-center text-camo-300",
                                children: j("dashboard.aside_article_spin", {
                                    count: L
                                })
                            })]
                        })
                    }), (0, i.jsx)(NoSpinsModal, {
                        onClose: () => N(!1),
                        open: w
                    })]
                })
            }

            function TweetSpinModal(e) {
                let {
                    me: a
                } = (0, I.Hi)(), {
                    t
                } = (0, r.Z)("airdrop"), {
                    mutate: s
                } = (0, x.ZP)((0, u.FP)("/user/dashboard"), u.U2), [l, d] = h.useState(!1), [o, c] = h.useState(null), [j, b] = h.useState(!1), [y, f] = h.useState(!1), [v, g] = h.useState(!1), [_, w] = h.useState(!1), [N, k] = (0, C.WE)("blast:dashboard:tweetVerificationFailed", !1), S = h.useMemo(() => {
                    if ("string" == typeof a || "object" != typeof a.airdropStats) return null; {
                        var e, t, i, s;
                        let r = btoa(JSON.stringify({
                            dexVolume: null === (e = a.airdropStats) || void 0 === e ? void 0 : e.dexVolumeDisplay,
                            gasSpent: null === (t = a.airdropStats) || void 0 === t ? void 0 : t.gasSpentDisplay,
                            nftVolume: null === (i = a.airdropStats) || void 0 === i ? void 0 : i.nftVolumeDisplay,
                            points: a.pointsForBridging,
                            rank: null === (s = a.airdropStats) || void 0 === s ? void 0 : s.allocationsRank
                        }));
                        return "https://blast-airdrop-image-launch.fly.dev/d932321e/airdrop?data=".concat(r)
                    }
                }, [a]);
                h.useEffect(() => {
                    null !== S && fetch(S).then(async e => {
                        let a = await e.blob();
                        c(a)
                    }).catch(() => {})
                }, [S]);
                let verifyTwitter = async () => {
                    g(!0), N ? _ || (await fetch((0, u.FP)("/spins/check-tweet"), {
                        credentials: "include",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        method: "POST"
                    }), setTimeout(async () => {
                        await s(), e.onClose()
                    }, 1500)) : (await fetch((0, u.FP)("/spins/verify-tweet"), {
                        credentials: "include",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        method: "POST"
                    }), setTimeout(() => {
                        w(!0), g(!1), k(!0)
                    }, 1500))
                };
                return (0, i.jsxs)(m.u_, {
                    ariaLabel: t("dashboard.aria-label_modal_tweet_spin"),
                    ...e,
                    children: [(0, i.jsx)(m.Io, {
                        children: (0, i.jsx)("h2", {
                            className: "typography-brand-body-l-caps text-yellow-100",
                            children: t("dashboard.h2_modal_tweet_spin")
                        })
                    }), (0, i.jsxs)("div", {
                        className: "flex flex-col items-center gap-8 px-12",
                        children: [(0, i.jsx)("div", {
                            className: "aspect-video h-[320px]",
                            children: null !== S && (0, i.jsx)(n(), {
                                alt: t("dashboard.img_alt_modal_tweet_spin"),
                                height: 675,
                                onLoad: () => f(!0),
                                src: S,
                                width: 1200,
                                className: (0, p.m)("transition-opacity duration-1000", y ? "opacity-100" : "opacity-0")
                            })
                        }), (0, i.jsxs)("div", {
                            className: "relative flex gap-2.5",
                            children: [(0, i.jsx)(m.zx, {
                                disabled: !y || null === o,
                                onClick: () => {
                                    if (null !== o) try {
                                        navigator.clipboard.write([new ClipboardItem({
                                            [o.type]: o
                                        })]).then(() => {
                                            b(!0), d(!0), setTimeout(() => {
                                                b(!1)
                                            }, 1500)
                                        })
                                    } catch (e) {}
                                },
                                variant: "secondary",
                                children: t(j ? "dashboard.button_secondary_modal_tweet_active" : "dashboard.button_secondary_modal_tweet_spin")
                            }), (0, i.jsx)(m.zx, {
                                disabled: !y || null === o,
                                onClick: () => {
                                    window.open("https://twitter.com/intent/tweet?text=".concat(encodeURIComponent("It's time to BLAST OFF\n\n@BLAST_L2 is the L2 with native yield backed by @Paradigm and @StandardCrypto\n\nJoin Blast Early Access to start earning yield + Blast Points, redeemable in May")), "_blank"), d(!0)
                                },
                                variant: "secondary",
                                children: (0, i.jsx)("div", {
                                    className: "flex items-center gap-2.5",
                                    children: t("dashboard.button_primary_modal_tweet_spin")
                                })
                            }), (0, i.jsx)("div", {
                                className: "min-w-[124px]",
                                children: (0, i.jsx)(m.zx, {
                                    stretch: !0,
                                    onClick: verifyTwitter,
                                    variant: "secondary",
                                    disabled: !l || v || _,
                                    children: (0, i.jsx)("div", {
                                        className: "flex justify-center",
                                        children: v ? (0, i.jsx)(m.aN, {}) : "Verify"
                                    })
                                })
                            }), N && _ && (0, i.jsxs)("div", {
                                className: "typography-UI-body absolute right-0 top-full flex w-max items-center justify-start gap-2 pt-1 text-mars-300",
                                children: [(0, i.jsx)(m.JO, {
                                    name: "error"
                                }), t("dashboard.strong_modal_tweet_spin")]
                            })]
                        })]
                    })]
                })
            }

            function NoSpinsModal(e) {
                let {
                    t: a
                } = (0, r.Z)("airdrop");
                return (0, i.jsxs)(m.u_, {
                    ariaLabel: a("dashboard.aria-label_modal_standard_spin"),
                    ...e,
                    children: [(0, i.jsx)(m.Io, {
                        children: (0, i.jsx)("h2", {
                            className: "typography-brand-body-l-caps text-yellow-100",
                            children: a("dashboard.h2_modal_standard_spin")
                        })
                    }), (0, i.jsxs)("div", {
                        className: "flex items-center gap-24 px-12",
                        children: [(0, i.jsxs)("div", {
                            className: "flex flex-col gap-6",
                            children: [(0, i.jsxs)("label", {
                                className: "group flex h-52 w-52 flex-col items-center gap-4 rounded-2xl border border-camo-300 py-8 transition-colors hover:cursor-pointer hover:border-white",
                                htmlFor: "button-primary-modal-standard-spin",
                                children: [(0, i.jsx)("div", {
                                    className: "typography-brand-body-l-caps interactive-text-group text-yellow-100",
                                    children: a("dashboard.label_primary_modal_standard_spin")
                                }), (0, i.jsxs)("div", {
                                    className: "interactive-text-group flex flex-1 items-center gap-6 text-yellow-100",
                                    children: [(0, i.jsx)(m.JO, {
                                        height: 72,
                                        name: "eth",
                                        width: 72
                                    }), (0, i.jsx)(m.JO, {
                                        height: 72,
                                        name: "usdc",
                                        width: 72
                                    })]
                                })]
                            }), (0, i.jsx)(o(), {
                                className: "group w-full",
                                href: "/bridge",
                                children: (0, i.jsx)(m.zx, {
                                    stretch: !0,
                                    focus: "group",
                                    id: "button-primary-modal-standard-spin",
                                    variant: "primary",
                                    children: a("dashboard.button_primary_modal_standard_spin")
                                })
                            })]
                        }), (0, i.jsxs)("div", {
                            className: "flex flex-col gap-6",
                            children: [(0, i.jsxs)("label", {
                                className: "group flex h-52 w-52 flex-col items-center rounded-2xl border border-camo-300 py-8 transition-colors hover:cursor-pointer hover:border-white",
                                htmlFor: "button-secondary-modal-standard-spin",
                                children: [(0, i.jsx)("div", {
                                    className: "typography-brand-body-l-caps interactive-text-group text-yellow-100",
                                    children: a("dashboard.label_secondary_modal_standard_spin")
                                }), (0, i.jsxs)("div", {
                                    className: "interactive-text-group mt-4 flex flex-1 flex-col items-center justify-center gap-3 text-yellow-100",
                                    children: [(0, i.jsx)(m.JO, {
                                        name: "user"
                                    }), (0, i.jsxs)("div", {
                                        className: "flex gap-2",
                                        children: [(0, i.jsx)(m.JO, {
                                            name: "user"
                                        }), (0, i.jsx)(m.JO, {
                                            name: "user"
                                        })]
                                    }), (0, i.jsxs)("div", {
                                        className: "flex gap-2",
                                        children: [(0, i.jsx)(m.JO, {
                                            name: "user"
                                        }), (0, i.jsx)(m.JO, {
                                            name: "user"
                                        }), (0, i.jsx)(m.JO, {
                                            name: "user"
                                        })]
                                    })]
                                })]
                            }), (0, i.jsx)(m.zx, {
                                stretch: !0,
                                id: "button-secondary-modal-standard-spin",
                                onClick: e.onClose,
                                variant: "secondary",
                                children: a("dashboard.button_secondary_modal_standard_spin")
                            })]
                        })]
                    })]
                })
            }

            function LeaderboardRank(e) {
                var a;
                let {
                    t
                } = (0, r.Z)("airdrop"), {
                    data: l,
                    isLoading: n
                } = (0, x.ZP)((0, u.FP)("/user/leaderboard-position"), u.U2), d = null !== (a = null == l ? void 0 : l.user.rank) && void 0 !== a ? a : null;
                return (0, i.jsx)(w.qQ, {
                    appear: !0,
                    in: e.in && !n,
                    children: (0, i.jsxs)("div", {
                        className: "translate-y-8 pt-5 opacity-0",
                        children: [(0, i.jsx)("h2", {
                            className: "typography-brand-heading-2 text-center text-yellow-100",
                            children: (0, i.jsx)(s.Z, {
                                values: {
                                    rank: d
                                },
                                components: {
                                    0: (0, i.jsx)("div", {}),
                                    1: (0, i.jsx)("div", {
                                        className: "typography-brand-heading-3 pt-1 text-camo-200"
                                    })
                                },
                                i18nKey: null === d ? "airdrop:dashboard.h2_article_leaderboard_unranked" : "airdrop:dashboard.h2_article_leaderboard"
                            })
                        }), (0, i.jsx)("aside", {
                            className: "typography-brand-body text-center text-camo-300",
                            children: t("dashboard.aside_article_leaderboard")
                        })]
                    })
                })
            }

            function Tutorial(e) {
                let {
                    onClose: a,
                    onNext: t,
                    step: l
                } = e, {
                    t: d
                } = (0, r.Z)("airdrop");
                if (null === l) return null;
                let renderStep = e => !!e && (0, i.jsxs)("div", {
                    className: "flex min-h-[400px] max-w-[800px] flex-1 flex-col divide-y divide-camo-500 bg-camo-700 px-8 py-6",
                    children: [(0, i.jsxs)("div", {
                        className: "flex flex-1 flex-col",
                        children: [(0, i.jsxs)("div", {
                            className: "flex items-center justify-between",
                            children: [(0, i.jsx)("h2", {
                                className: "typography-brand-heading-3 mb-2 text-yellow-100",
                                children: d(e.h2)
                            }), (0, i.jsx)(m.hU, {
                                "aria-label": d(e.button),
                                name: "close",
                                onClick: e.action
                            })]
                        }), (0, i.jsxs)("figure", {
                            className: "flex flex-1 flex-col items-center",
                            children: [(0, i.jsx)("figcaption", {
                                className: "typography-brand-body-l flex flex-col gap-3 text-camo-200",
                                children: (0, i.jsx)(s.Z, {
                                    i18nKey: e.figcaption,
                                    components: {
                                        0: (0, i.jsx)("p", {}),
                                        1: (0, i.jsx)("p", {}),
                                        2: (0, i.jsx)("span", {
                                            className: "typography-brand-body-l-bold text-yellow-100"
                                        })
                                    }
                                })
                            }), (0, i.jsx)("div", {
                                className: "flex h-[200px] items-center justify-center",
                                children: (0, i.jsx)(n(), {
                                    alt: d(e.h2),
                                    height: e.imgHeight,
                                    src: e.img,
                                    width: e.imgWidth
                                })
                            })]
                        })]
                    }), (0, i.jsx)("div", {
                        className: "w-full pt-6 text-center",
                        children: (0, i.jsx)("button", {
                            className: "typography-brand-body-l-caps text-yellow-300 transition-colors hover:text-white",
                            onClick: e.action,
                            children: d(e.button)
                        })
                    })]
                });
                return (0, i.jsx)(h.Fragment, {
                    children: [{
                        action: t,
                        button: "airdrop:tutorial.button_0",
                        figcaption: "airdrop:tutorial.figcaption_0",
                        h2: "airdrop:tutorial.h2_0",
                        img: "/images/dashboard-tutorial-0.png",
                        imgHeight: 150,
                        imgWidth: 430
                    }, {
                        action: a,
                        button: "airdrop:tutorial.button_1",
                        figcaption: "airdrop:tutorial.figcaption_1",
                        h2: "airdrop:tutorial.h2_1",
                        img: "/images/dashboard-tutorial-1.png",
                        imgHeight: 200,
                        imgWidth: 700
                    }].map((e, a) => (0, i.jsx)(N.rl, {
                        appear: !0,
                        in: a === l,
                        children: renderStep(e)
                    }, "tutorial-step-".concat(a)))
                })
            }

            function Invites(e) {
                var a, t, s;
                let {
                    t: l
                } = (0, r.Z)("airdrop"), {
                    data: n
                } = (0, x.ZP)((0, u.FP)("/user/invites"), u.U2), [d, o] = h.useState(!1), c = null == n ? void 0 : n.referralCode, p = null !== (t = null == n ? void 0 : n.invites.filter(e => null !== e.referredUser)) && void 0 !== t ? t : [], m = null !== (s = null == n ? void 0 : n.invites.filter(e => null === e.referredUser)) && void 0 !== s ? s : [], j = e.in && !!n;
                return (0, i.jsx)(N.WV, {
                    appear: !0,
                    in: j,
                    children: "string" == typeof c ? (0, i.jsxs)(InvitesUl, {
                        children: [(0, i.jsxs)(InviteStickyLi, { in: j,
                            stick: !d,
                            children: [(0, i.jsx)("div", {
                                className: "typography-brand-heading-3 text-camo-200",
                                children: l("dashboard.li_referral")
                            }), (0, i.jsx)(InviteButton, {
                                code: c,
                                isReferral: !0
                            })]
                        }), null == p ? void 0 : p.map((e, a) => (0, i.jsx)(InviteLi, { in: j,
                            invite: e,
                            underline: a !== p.length - 1
                        }, "first-degree-".concat(a)))]
                    }) : (null == p ? void 0 : p.length) >= 4 ? (0, i.jsxs)(InvitesUl, {
                        children: [m[0] && (0, i.jsxs)(InviteStickyLi, { in: j,
                            stick: !d,
                            children: [(0, i.jsxs)("div", {
                                children: [(0, i.jsx)("div", {
                                    className: "typography-brand-heading-3 text-camo-200",
                                    children: l("dashboard.li_available")
                                }), m.length > 1 && (0, i.jsx)("button", {
                                    className: "interactive-text typography-brand-body-l-caps text-yellow-300",
                                    onClick: e => {
                                        e.target.blur(), o(e => !e)
                                    },
                                    children: l(d ? "dashboard.button_less" : "dashboard.button_more", {
                                        count: m.length - 1
                                    })
                                })]
                            }), (0, i.jsx)(InviteButton, {
                                code: m[0].code,
                                isReferral: !1
                            })]
                        }), null === (a = m.slice(1)) || void 0 === a ? void 0 : a.map((e, a) => (0, i.jsx)(InviteLi, {
                            hidden: !d,
                            in: j,
                            invite: e,
                            underline: !0
                        }, "available-invite--".concat(a))), null == p ? void 0 : p.map((e, a) => (0, i.jsx)(InviteLi, { in: j,
                            invite: e,
                            underline: a !== p.length - 1
                        }, "first-degree-".concat(a)))]
                    }) : (0, i.jsxs)(InvitesUl, {
                        children: [null == p ? void 0 : p.map((e, a) => (0, i.jsx)(InviteLi, { in: j,
                            invite: e,
                            underline: m.length > 0
                        }, "first-degree-".concat(a))), null == m ? void 0 : m.map((e, a) => (0, i.jsx)(InviteLi, { in: j,
                            invite: e,
                            underline: a !== m.length - 1
                        }, "available-invite--".concat(a)))]
                    })
                })
            }

            function InvitesUl(e) {
                let {
                    children: a
                } = e;
                return (0, i.jsx)("div", {
                    className: "h-full w-full overflow-auto pb-[60px]",
                    children: (0, i.jsx)("ul", {
                        className: "relative flex w-full flex-1 flex-col",
                        children: a
                    })
                })
            }

            function InviteLi(e) {
                var a, t;
                let {
                    invite: s,
                    underline: l,
                    ...d
                } = e, {
                    lang: o,
                    t: c
                } = (0, r.Z)("airdrop");
                return (0, i.jsxs)("li", {
                    className: (0, p.m)("w-full transition-all", d.hidden ? "max-h-0 translate-y-[-120px] overflow-hidden" : "max-h-[120px] translate-y-0"),
                    children: [(0, i.jsxs)("div", {
                        className: "flex h-[120px] w-full justify-between",
                        children: [(0, i.jsxs)("div", {
                            className: "flex items-center justify-center gap-8",
                            children: [(0, i.jsx)("div", {
                                className: "h-12 w-12 rounded-full bg-camo-400",
                                children: null !== s.referredUser && null !== s.referredUser.profileImageUrl && (0, i.jsx)(n(), {
                                    alt: "".concat(s.referredUser.displayName),
                                    className: "h-12 w-12 rounded-full bg-camo-500",
                                    height: 48,
                                    src: "".concat(s.referredUser.profileImageUrl),
                                    width: 48
                                })
                            }), (0, i.jsx)(_.oI, { in: d.in,
                                children: (0, i.jsx)("div", {
                                    className: "typography-brand-heading-3 text-camo-200",
                                    children: null !== (t = null === (a = s.referredUser) || void 0 === a ? void 0 : a.displayName) && void 0 !== t ? t : c("dashboard.li_available")
                                })
                            })]
                        }), (0, i.jsx)(_.h4, { in: d.in,
                            children: (0, i.jsx)("div", {
                                className: "flex items-center justify-center",
                                children: null === s.referredUser ? (0, i.jsx)(InviteButton, {
                                    code: s.code,
                                    isReferral: !1
                                }) : (0, i.jsxs)(h.Fragment, {
                                    children: [(0, i.jsx)("div", {
                                        className: "typography-brand-heading-3 mr-2 text-camo-200",
                                        children: (e => {
                                            var a, t;
                                            let i = Number(e),
                                                s = Number(e) > 100 ? 2 : Math.min(Math.max(null !== (t = null === (a = e.split(".")[1]) || void 0 === a ? void 0 : a.length) && void 0 !== t ? t : 2, 2), 4);
                                            return i.toLocaleString(o, {
                                                maximumFractionDigits: s,
                                                minimumFractionDigits: 1,
                                                useGrouping: "min2"
                                            })
                                        })(s.referredUser.approximateAmountBridgedInEth)
                                    }), (0, i.jsx)("div", {
                                        className: "text-camo-400",
                                        children: (0, i.jsx)(m.JO, {
                                            name: "eth",
                                            "aria-label": c("dashboard.aria-label_li_first_degree_ethereum")
                                        })
                                    })]
                                })
                            })
                        })]
                    }), l && (0, i.jsx)(_.tB, { in: d.in,
                        children: (0, i.jsx)(v.iz, {
                            axis: "x"
                        })
                    })]
                })
            }

            function InviteStickyLi(e) {
                return (0, i.jsxs)("li", {
                    className: (0, p.m)("w-full", e.stick && "sticky top-0 z-[1]"),
                    children: [(0, i.jsx)("div", {
                        className: "flex h-[120px] w-full items-center justify-between backdrop-blur-lg",
                        children: e.children
                    }), (0, i.jsx)(_.tB, { in: e.in,
                        children: (0, i.jsx)(v.iz, {
                            axis: "x"
                        })
                    })]
                })
            }

            function InviteButton(e) {
                let {
                    code: a,
                    isReferral: t,
                    formatCode: s = "".concat(window.location.host, "/").concat(a)
                } = e, {
                    t: l
                } = (0, r.Z)("airdrop"), [n, d] = h.useState(!1);
                return (0, i.jsxs)("div", {
                    className: "flex items-center gap-8",
                    children: [(0, i.jsx)("label", {
                        className: "interactive-text typography-brand-body-l cursor-pointer text-camo-200",
                        htmlFor: "copy-code-".concat(a),
                        children: s
                    }), (0, i.jsx)("div", {
                        className: (0, p.m)(t ? "min-w-[280px]" : "min-w-[200px]"),
                        children: (0, i.jsx)(m.zx, {
                            stretch: !0,
                            id: "copy-code-".concat(a),
                            onClick: () => {
                                var e;
                                null === (e = navigator.clipboard) || void 0 === e || e.writeText(s).then(() => {
                                    d(!0), setTimeout(() => {
                                        d(!1)
                                    }, 1500)
                                })
                            },
                            variant: "secondary",
                            children: l(n ? "dashboard.button_copied" : t ? "dashboard.button_li_referral" : "dashboard.button_li_available")
                        })
                    })]
                })
            }
            a.default = O
        }
    },
    function(e) {
        e.O(0, [3714, 9728, 4049, 2811, 9774, 2888, 179], function() {
            return e(e.s = 1093)
        }), _N_E = e.O()
    }
]);