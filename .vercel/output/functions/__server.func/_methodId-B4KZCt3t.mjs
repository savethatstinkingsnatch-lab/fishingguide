import { i as __toESM } from "./_runtime.mjs";
import { c as lies, d as methods, l as materialById, n as clinch, o as getMethod, r as depths, t as baits } from "./_ssr/guide-DjaGFKW7.mjs";
import { J as require_react, S as require_jsx_runtime, b as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { i as ArrowLeft, r as ArrowRight } from "./_libs/lucide-react.mjs";
import { n as Route, r as useField } from "./_ssr/router-C2HYKw_s.mjs";
import { a as btnGhost, i as btn, n as LawNote, r as Plate, t as CheckRow } from "./_ssr/bits-C1ciQPO1.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_methodId-B4KZCt3t.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function HookStudio() {
	const [depth, setDepth] = (0, import_react.useState)(depths[1].id);
	const [bait, setBait] = (0, import_react.useState)(baits[0].id);
	const [knot, setKnot] = (0, import_react.useState)(0);
	const depthChoice = depths.find((item) => item.id === depth) ?? depths[1];
	const baitChoice = baits.find((item) => item.id === bait) ?? baits[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-3xl",
				children: "Where they sit"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-4 grid gap-3 sm:grid-cols-2",
				children: lies.map((lie) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-card border border-ink/10 bg-paper p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-xl",
						children: lie.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-ink/80",
						children: lie.body
					})]
				}, lie.name))
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl",
					children: "Set the depth"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 max-w-2xl text-ink/80",
					children: "How deep is the spot in front of you? The float — or the lack of one — follows from that."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 grid gap-3",
					children: depths.map((item) => {
						const on = item.id === depth;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-pressed": on,
							onClick: () => setDepth(item.id),
							className: `min-h-11 rounded-card border px-4 py-3 text-left transition-colors duration-150 active:scale-[0.96] ${on ? "border-river bg-river text-paper" : "border-ink/15 bg-paper hover:border-river"}`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-xl",
								children: item.label
							})
						}, item.id);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-2xl text-ink/80",
					children: depthChoice.set
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl",
					children: "What you can bait"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 flex flex-wrap gap-2",
					children: baits.map((item) => {
						const on = item.id === bait;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-pressed": on,
							onClick: () => setBait(item.id),
							className: `min-h-11 rounded-full border px-4 font-semibold transition-colors duration-150 active:scale-[0.96] ${on ? "border-river bg-river text-paper" : "border-ink/15 bg-paper hover:border-river"}`,
							children: item.name
						}, item.id);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 max-w-2xl space-y-2 rounded-card border border-ink/10 bg-paper p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-semibold",
							children: "Find it. "
						}), baitChoice.finds] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-semibold",
							children: "Takes. "
						}), baitChoice.takes] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-semibold",
							children: "Rig. "
						}), baitChoice.rig] })
					]
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl",
					children: clinch.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2 text-sm tabular-nums text-ink/70",
					children: [
						"Move ",
						knot + 1,
						" of ",
						clinch.steps.length
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-2xl text-lg",
					children: clinch.steps[knot]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "inline-flex min-h-11 items-center rounded-full border border-ink/15 px-4 font-semibold disabled:opacity-40",
						onClick: () => setKnot((n) => Math.max(0, n - 1)),
						disabled: knot === 0,
						children: "Back"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "inline-flex min-h-11 items-center rounded-full bg-river px-4 font-semibold text-paper disabled:opacity-40",
						onClick: () => setKnot((n) => Math.min(clinch.steps.length - 1, n + 1)),
						disabled: knot === clinch.steps.length - 1,
						children: "Next wrap"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-2xl text-sm text-ink/70",
					children: "If the clinch slips on braid, tie a Palomar instead: double the line, through the eye, tie an overhand knot, pass the hook through the loop, and tighten."
				})
			] })
		]
	});
}
function MethodPage() {
	const { methodId } = Route.useParams();
	const method = getMethod(methodId);
	const kit = useField((s) => s.kit);
	const steps = useField((s) => s.steps);
	const toggleKit = useField((s) => s.toggleKit);
	const toggleStep = useField((s) => s.toggleStep);
	const pack = useField((s) => s.pack);
	if (!method) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		id: "content",
		className: "mx-auto max-w-2xl px-5 py-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-4xl",
			children: "That method isn't in the guide."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/",
			className: `${btn} mt-6`,
			children: "Back to the guide"
		})]
	});
	const mats = method.materialIds.map((id) => materialById(id)).filter((item) => Boolean(item));
	const packed = mats.length > 0 && mats.every((item) => kit[item.id]);
	const doneSteps = method.steps.filter((_, index) => steps[`${method.id}:${index}`]).length;
	const index = methods.findIndex((item) => item.id === method.id);
	const next = methods[(index + 1) % methods.length];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		id: "content",
		className: "mx-auto max-w-3xl px-5 py-8 md:py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/",
				className: "inline-flex min-h-11 items-center text-sm font-semibold text-river",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {
					className: "mr-1 size-4",
					"aria-hidden": "true"
				}), "Guide"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plate, {
					src: method.image,
					alt: method.alt
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-6 text-sm font-semibold tracking-wide text-copper uppercase",
				children: [
					method.family === "trap" ? "Trap" : method.family === "corral" ? "Corral" : "Hook",
					" ·",
					" ",
					method.time
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-4xl md:text-5xl",
				children: method.name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 font-display text-xl italic text-river",
				children: method.epithet
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-lg text-ink/80",
				children: method.summary
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
				className: "mt-6 grid gap-4 sm:grid-cols-2",
				children: [
					["Catches", method.catches],
					["Doesn't", method.misses],
					["Water", method.water],
					["Tend", method.tend]
				].map(([label, body]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-card border border-ink/10 p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-sm font-semibold text-ink/60",
						children: label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "mt-1 text-sm",
						children: body
					})]
				}, label))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LawNote, { children: method.law })
			}),
			method.id === "hook" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HookStudio, {})
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-end justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl",
						children: "Materials"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: packed ? btnGhost : btn,
						onClick: () => pack(method.materialIds),
						children: packed ? "In the field kit" : "Add to field kit"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 space-y-2",
					children: mats.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckRow, {
						checked: Boolean(kit[item.id]),
						label: item.name,
						note: item.note,
						onToggle: () => toggleKit(item.id)
					}) }, item.id))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-baseline justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl",
						children: "Build"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm tabular-nums text-ink/70",
						children: [
							doneSteps,
							" / ",
							method.steps.length
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-4 space-y-4",
					children: method.steps.map((step, index) => {
						const id = `${method.id}:${index}`;
						const on = Boolean(steps[id]);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "grid grid-cols-[auto_1fr] gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-3xl text-copper tabular-nums",
								children: index + 1
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								role: "checkbox",
								"aria-checked": on,
								onClick: () => toggleStep(id),
								className: "min-h-11 text-left",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `font-display text-2xl ${on ? "text-ink/45 line-through" : ""}`,
									children: step.title
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-ink/80",
								children: step.body
							})] })]
						}, step.title);
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl",
					children: "On the set"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 space-y-2",
					children: method.setting.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "border-l-2 border-river/40 pl-3 text-ink/80",
						children: line
					}, line))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl",
					children: "Easy ways to fail"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 list-disc space-y-2 pl-5 text-ink/80",
					children: method.mistakes.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: line }, line))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 flex flex-wrap items-center justify-between gap-3 border-t border-ink/10 pt-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/bank",
					className: "font-semibold text-river",
					children: "Not this water? Read the bank"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/methods/$methodId",
					params: { methodId: next.id },
					className: "inline-flex min-h-11 items-center font-semibold text-ink",
					children: [
						"Next: ",
						next.name,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
							className: "ml-1 size-4",
							"aria-hidden": "true"
						})
					]
				})]
			})
		]
	});
}
//#endregion
export { MethodPage as component };
