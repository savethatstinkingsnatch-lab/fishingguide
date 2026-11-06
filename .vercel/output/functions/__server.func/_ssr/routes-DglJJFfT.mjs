import { i as __toESM } from "../_runtime.mjs";
import { a as filterTags, d as methods, i as families } from "./guide-vuM60l-L.mjs";
import { J as require_react, S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as ArrowRight } from "../_libs/lucide-react.mjs";
import { i as btn, n as LawNote, r as Plate } from "./bits-C1ciQPO1.mjs";
import { n as VolumeNote, t as KeepingBox } from "./notes-D6FbLOI8.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DglJJFfT.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Home() {
	const [tag, setTag] = (0, import_react.useState)("all");
	const visible = methods.filter((method) => tag === "all" || method.tags.includes(tag));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		id: "content",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto grid max-w-5xl gap-6 px-5 py-8 md:grid-cols-2 md:items-end md:py-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rise",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold tracking-wide text-river uppercase",
							children: "A field guide"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-2 font-display text-4xl text-ink md:text-6xl",
							children: "Catch a fish with what the bank has."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 max-w-xl font-display text-lg text-river",
							children: "The Education Revolution Pocket Guide, Volume 23: Fishing"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm font-semibold text-ink/80",
							children: "by Blue and the Awesome Dudes"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-xl text-lg text-ink/80",
							children: "Handmade traps for fish that follow a scent. Corrals that borrow a creek or a tide. And the hook — still the surest way to a meal when you can stay and watch."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex flex-wrap gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/bank",
									className: btn,
									children: ["I'm on the bank", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
										className: "size-4",
										"aria-hidden": "true"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/start",
									className: "inline-flex min-h-11 items-center font-semibold text-river",
									children: "Start here"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/safe",
									className: "inline-flex min-h-11 items-center font-semibold text-river",
									children: "Stay safe"
								})
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plate, {
					wide: true,
					src: "/photos/hero.jpg",
					alt: "A misty riverbank at sunrise with a cane pole, a coil of rope, and a plastic bottle at the water's edge."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto max-w-5xl px-5 pb-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LawNote, { children: "Get a fishing license for the state or place you are in, and read that water's rules before you fish. Traps, weirs, and corrals are illegal in a lot of water. Where they are allowed they usually must be tagged and checked on a schedule. A hook and line is what most places actually permit. Seasons, size limits, bag limits, and bait bans still apply. If you are unsure, do not build a trap — fish a legal hook instead." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeepingBox, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VolumeNote, {})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mx-auto grid max-w-5xl gap-3 px-5 pb-8 sm:grid-cols-3",
				children: [
					["Traps", "Scent and a funnel. You can leave, and you must come back."],
					["Corrals", "Current or tide does the herding. You only shape the bank."],
					["The hook", "You stay. It works in the most places the law allows."]
				].map(([title, body]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-card border border-ink/10 bg-paper p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl",
						children: title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-ink/75",
						children: body
					})]
				}, title))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto flex max-w-5xl flex-wrap gap-2 px-5 pb-10",
				children: filterTags.map((item) => {
					const on = tag === item.id;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-pressed": on,
						onClick: () => setTag(item.id),
						className: `min-h-11 rounded-full border px-4 font-semibold transition-colors duration-150 ${on ? "border-river bg-river text-paper" : "border-ink/15 bg-paper text-ink hover:border-river"}`,
						children: item.label
					}, item.id);
				})
			}),
			families.map((family) => {
				const group = visible.filter((method) => method.family === family.id);
				if (group.length === 0) return null;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: family.anchor,
					className: "scroll-mt-24 border-t border-ink/10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-5xl px-5 py-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-4xl text-copper",
								children: family.numeral
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-1 font-display text-4xl",
								children: family.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 max-w-2xl text-lg text-ink/80",
								children: family.lede
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-8 space-y-10",
								children: group.map((method, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
									className: "grid items-center gap-5 md:grid-cols-5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: index % 2 === 1 ? "md:order-2 md:col-span-3" : "md:col-span-3",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plate, {
											src: method.image,
											alt: method.alt
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "md:col-span-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "font-display text-3xl",
												children: method.name
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-1 font-display text-lg italic text-river",
												children: method.epithet
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-3 text-ink/80",
												children: method.summary
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "mt-3 text-sm text-ink/70",
												children: [
													method.time,
													" · ",
													method.catches
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
												to: "/methods/$methodId",
												params: { methodId: method.id },
												className: "mt-4 inline-flex min-h-11 items-center font-semibold text-river",
												children: ["Build it", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
													className: "ml-1 size-4",
													"aria-hidden": "true"
												})]
											})
										]
									})]
								}, method.id))
							})
						]
					})
				}, family.id);
			}),
			visible.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mx-auto max-w-5xl px-5 pb-16 text-ink/70",
				children: "Nothing in the guide is aimed at that fish. Try the hook anyway — it's the wide net."
			}) : null
		]
	});
}
//#endregion
export { Home as component };
