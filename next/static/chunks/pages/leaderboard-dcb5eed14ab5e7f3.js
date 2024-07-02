(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2268], {
        705: function(e, a, s) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/leaderboard", function() {
                return s(7645)
            }])
        },
        7645: function(e, a, s) {
            "use strict";
            s.r(a), s.d(a, {
                __N_SSP: function() {
                    return N
                }
            });
            var l = s(4817),
                r = s(8851),
                d = s(7833),
                i = s(8735),
                t = s.n(i),
                n = s(1248),
                o = s(7622),
                c = s(6179),
                m = s(5834),
                x = s(6926),
                p = s(6359),
                h = s(9752),
                f = s(5644),
                b = s(6897),
                u = s(3338);
            let y = (0, b.fz)(e => {
                var a, s;
                let {
                    t: r
                } = (0, d.Z)("leaderboard"), {
                    me: i
                } = (0, u.Hi)(e.me), {
                    data: t,
                    isLoading: m
                } = (0, o.ZP)((0, c.FP)("/leaderboard/top"), c.U2), {
                    data: x
                } = (0, o.ZP)((0, c.FP)("/leaderboard/recent"), c.U2, {
                    refreshInterval: 1e4
                }), {
                    data: f,
                    error: b
                } = (0, o.ZP)((0, c.FP)("/user/leaderboard-position"), c.i3), y = null !== (a = null == t ? void 0 : t.users) && void 0 !== a ? a : [], N = null !== (s = null == x ? void 0 : x.users) && void 0 !== s ? s : [];
                return (0, l.jsxs)(n.Fragment, {
                    children: [(0, l.jsx)(p.Jp, {
                        children: (0, l.jsx)(p.h4, {
                            underlined: !0,
                            children: (0, l.jsx)(h.JL, {
                                navPoints: !0,
                                navProfile: !0,
                                me: i
                            })
                        })
                    }), (0, l.jsx)(p.or, {
                        children: (0, l.jsx)(p.M9, {
                            className: "mt-0 w-full xs:mt-8 lg:mt-0",
                            position: "top",
                            children: (0, l.jsx)(p.M9, {
                                className: "h-full animate-enter-fade",
                                position: "center-x",
                                children: (0, l.jsxs)("div", {
                                    className: "flex h-full w-full animate-appear-slide-up flex-col-reverse gap-8 sm:flex-row",
                                    children: [(0, l.jsx)("div", {
                                        className: "flex flex-1 flex-col",
                                        children: (0, l.jsxs)("div", {
                                            className: "mr-0 flex min-h-0 flex-1 flex-col sm:mr-8 sm:flex-[1px]",
                                            children: [(0, l.jsxs)("div", {
                                                className: "flex flex-col justify-between xs:flex-row xs:items-center",
                                                children: [(0, l.jsx)("h1", {
                                                    className: "typography-brand-heading-2 text-yellow-100",
                                                    children: r("h1")
                                                }), (0, l.jsx)("aside", {
                                                    className: "typography-brand-body-l text-camo-200",
                                                    children: r("aside")
                                                })]
                                            }), (0, l.jsx)("div", {
                                                className: "mt-8 max-h-[70vh] overflow-auto border-t border-camo-400 xs:max-h-max",
                                                children: !m && (0, l.jsxs)("table", {
                                                    className: "w-full animate-enter-fade",
                                                    children: [(0, l.jsx)("thead", {
                                                        className: "typography-brand-body-l-caps sticky top-0 text-camo-400 backdrop-blur-lg",
                                                        children: (0, l.jsxs)("tr", {
                                                            children: [(0, l.jsx)("th", {
                                                                className: "p-0",
                                                                children: (0, l.jsx)("div", {
                                                                    className: "border-b border-camo-400 px-4 py-2 text-start",
                                                                    children: r("table.th_0")
                                                                })
                                                            }), (0, l.jsx)("th", {
                                                                className: "p-0",
                                                                children: (0, l.jsx)("div", {
                                                                    className: "border-b border-camo-400 px-4 py-2 text-start",
                                                                    children: r("table.th_1")
                                                                })
                                                            }), (0, l.jsx)("th", {
                                                                className: "p-0",
                                                                children: (0, l.jsx)("div", {
                                                                    className: "min-w-[150px] border-b border-camo-400 px-4 py-2 text-start",
                                                                    children: r("table.th_2")
                                                                })
                                                            }), (0, l.jsx)("th", {
                                                                className: "p-0",
                                                                children: (0, l.jsx)("div", {
                                                                    className: "border-b border-camo-400 px-4 py-2 text-end",
                                                                    children: r("table.th_3")
                                                                })
                                                            })]
                                                        })
                                                    }), (0, l.jsxs)("tbody", {
                                                        children: [f && !b && (0, l.jsx)(LeaderboardRow, {
                                                            isYou: !0,
                                                            user: f.user
                                                        }), y.map((e, a) => (0, l.jsx)(LeaderboardRow, {
                                                            user: e
                                                        }, "".concat(e.displayName, "-").concat(a)))]
                                                    })]
                                                })
                                            })]
                                        })
                                    }), (0, l.jsx)(p.iz, {
                                        axis: "y",
                                        className: "hidden sm:block"
                                    }), (0, l.jsxs)("div", {
                                        className: "flex min-h-0 w-full flex-col sm:h-full sm:w-72",
                                        children: [(0, l.jsx)("h2", {
                                            className: "typography-brand-heading-2 sm:typography-brand-heading-3 text-yellow-100 sm:mb-[22px] sm:mt-2 sm:h-[50px] lg:h-[54px]",
                                            children: r("h2")
                                        }), (0, l.jsx)(p.iz, {
                                            axis: "x",
                                            className: "hidden sm:block"
                                        }), (0, l.jsx)("div", {
                                            className: "flex flex-1 flex-row gap-4 overflow-auto py-6 sm:flex-col",
                                            children: N.map((e, a) => (0, l.jsx)(j, {
                                                index: a,
                                                user: e
                                            }, e.displayName))
                                        })]
                                    })]
                                })
                            })
                        })
                    })]
                })
            });
            y.getLayout = e => (0, l.jsx)(p.RQ, {
                height: "responsive",
                children: e
            });
            var N = !0;

            function LeaderboardRow(e) {
                var a, s, r, d;
                let {
                    isYou: i,
                    user: n
                } = e, o = (0, f.U)();
                return (0, l.jsxs)("tr", {
                    className: "typography-brand-heading-3 text-camo-200",
                    children: [(0, l.jsx)("td", {
                        className: "p-0",
                        children: (0, l.jsx)("div", {
                            className: "px-0 py-2 pr-4 text-start",
                            children: (0, l.jsx)("div", {
                                className: "bg-camo-700 px-4 py-2 text-center",
                                children: null !== (r = null == n ? void 0 : n.rank) && void 0 !== r ? r : "-"
                            })
                        })
                    }), (0, l.jsx)("td", {
                        className: "p-0",
                        children: (0, l.jsxs)("div", {
                            className: "flex min-w-[250px] max-w-[350px] items-center gap-8 px-4 py-2",
                            children: [(null == n ? void 0 : null === (a = n.twitter) || void 0 === a ? void 0 : a.profileImageUrl) ? (0, l.jsx)(t(), {
                                alt: null == n ? void 0 : n.displayName,
                                className: "rounded-full",
                                height: 32,
                                src: null == n ? void 0 : null === (s = n.twitter) || void 0 === s ? void 0 : s.profileImageUrl,
                                width: 32
                            }) : (0, l.jsx)("div", {
                                className: "h-8 w-8 rounded-full bg-camo-500"
                            }), i ? (0, l.jsx)(m.hU, {
                                "aria-label": null == n ? void 0 : n.displayName,
                                ariaLabelCase: "unmodified",
                                name: "edit",
                                onClick: o.open,
                                renderAriaLabel: "before"
                            }) : (0, l.jsx)("div", {
                                className: "overflow-hidden text-ellipsis whitespace-nowrap",
                                children: null == n ? void 0 : n.displayName
                            })]
                        })
                    }), (0, l.jsx)("td", {
                        className: "p-0",
                        children: (0, l.jsx)("div", {
                            className: "typography-brand-body-l-bold max-w-[200px] overflow-hidden text-ellipsis whitespace-nowrap px-4 py-2 text-start",
                            children: null !== (d = null == n ? void 0 : n.referrerDisplayName) && void 0 !== d ? d : "-"
                        })
                    }), (0, l.jsx)("td", {
                        className: "p-0",
                        children: (0, l.jsx)("div", {
                            className: "px-4 py-2 text-end",
                            children: null == n ? void 0 : n.points.toFixed()
                        })
                    })]
                })
            }
            a.default = y;
            let j = n.memo(e => {
                let {
                    index: a,
                    user: s
                } = e, {
                    t: i
                } = (0, d.Z)("leaderboard");
                return (0, l.jsxs)("div", {
                    className: "flex min-w-fit animate-enter-fade items-center gap-4",
                    style: {
                        animationDelay: "".concat(50 * a, "ms"),
                        animationFillMode: "forwards",
                        animationName: a > 30 ? "none" : "enter-fade",
                        opacity: a > 30 ? 1 : 0
                    },
                    children: [s.twitter.profileImageUrl ? (0, l.jsx)(t(), {
                        alt: s.displayName,
                        className: "rounded-full",
                        height: 48,
                        src: s.twitter.profileImageUrl,
                        width: 48
                    }) : (0, l.jsx)("div", {
                        className: "h-12 w-12 rounded-full bg-camo-500"
                    }), (0, l.jsxs)("div", {
                        className: "flex flex-1 flex-col sm:overflow-hidden",
                        children: [(0, l.jsxs)("div", {
                            className: "flex items-center gap-1",
                            children: [(0, l.jsx)("div", {
                                className: "typography-brand-body-l-bold flex-1 overflow-hidden overflow-ellipsis whitespace-nowrap text-yellow-100",
                                children: s.displayName
                            }), (0, l.jsx)("time", {
                                className: "typography-brand-body hidden text-camo-200 sm:block",
                                children: (0, l.jsx)(r.Z, {
                                    i18nKey: "leaderboard:time_ago",
                                    components: {
                                        0: (0, l.jsx)(x.fZ, {
                                            ms: Date.now() - Date.parse(s.registeredOn),
                                            options: {
                                                largest: 1
                                            }
                                        })
                                    }
                                })
                            })]
                        }), s.referrerDisplayName && (0, l.jsx)("div", {
                            className: "typography-brand-body overflow-hidden overflow-ellipsis whitespace-nowrap text-camo-200",
                            children: i("invited_by", {
                                inviter: s.referrerDisplayName
                            })
                        }), (0, l.jsx)("time", {
                            className: "typography-brand-body text-camo-200 sm:hidden",
                            children: (0, l.jsx)(r.Z, {
                                i18nKey: "leaderboard:time_ago",
                                components: {
                                    0: (0, l.jsx)(x.fZ, {
                                        ms: Date.now() - Date.parse(s.registeredOn),
                                        options: {
                                            largest: 1
                                        }
                                    })
                                }
                            })
                        })]
                    })]
                }, "".concat(s.displayName, "-").concat(a))
            }, (e, a) => e.user.displayName === a.user.displayName);
            j.displayName = "RecentUserRow"
        }
    },
    function(e) {
        e.O(0, [3714, 9728, 4049, 2811, 9774, 2888, 179], function() {
            return e(e.s = 705)
        }), _N_E = e.O()
    }
]);