import { i as __toESM } from "../_runtime.mjs";
import { o as getMethod } from "./guide-vuM60l-L.mjs";
import { J as require_react, S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as ArrowRight } from "../_libs/lucide-react.mjs";
import { a as btnGhost, i as btn, r as Plate } from "./bits-C1ciQPO1.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/bank-BmpDNuGs.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var gaps = {
	bottle: {
		gear: "bottle",
		line: "You still need a plastic bottle. Any one- or two-liter soda bottle is the trap."
	},
	basket: {
		gear: "sticks",
		line: "You need a bundle of green shoots and something to lash them. The bank usually has both if you look past the path."
	},
	weir: {
		gear: "sticks",
		line: "The wing is made of stakes and leafy brush from this creek. Don't dam it, and don't start if you can't wade the edge."
	},
	tidal: {
		gear: "stones",
		line: "Use stones already on the flat. If the flat is sand and nothing else, this corral isn't here — fish a hook on the ebb instead."
	},
	hook: {
		gear: "hook",
		line: "A real hook changes the day. Until you have one, a bent pin or a nail is closer to this method than a gorge is."
	},
	gorge: {
		gear: "knife",
		line: "You need a knife, line, and bait, and a fish you intend to eat. Otherwise this is the wrong page."
	}
};
function advise(answers) {
	const has = (gear) => answers.gear.includes(gear);
	const ranked = [
		() => {
			let score = 0;
			const reasons = [];
			const add = (n, why) => {
				score += n;
				if (why && n > 0) reasons.push(why);
			};
			if (has("hook") && (has("line") || has("cord"))) add(8, "You already have a hook and something to tie it to. That beats building for a single meal.");
			else if (has("hook")) add(4, "A hook without line still needs cord or monofilament. The stick can wait.");
			if (has("bait")) add(2, "Bait in hand means the first likely lie is worth a cast.");
			if (answers.window === "hour") add(3, "An hour is a hook's window. Traps are still filling, and a weir is still a pile of sticks.");
			if (answers.window === "afternoon") add(1);
			if (answers.quarry === "panfish") add(3, "Panfish are the hook's home game — a worm or a pinch of bread under a float.");
			if (answers.quarry === "catfish" && answers.window !== "overnight") add(1, "Catfish will take a bait on the bottom well before a basket could be woven.");
			if (answers.quarry === "baitfish") score -= 2;
			if (answers.water === "tidal") add(1, "A tidal edge still feeds a baited hook between the times you could build a wall.");
			if (answers.quarry === "any" && !has("hook")) add(0);
			return {
				id: "hook",
				score,
				reasons
			};
		},
		() => {
			let score = 0;
			const reasons = [];
			const add = (n, why) => {
				score += n;
				if (why && n > 0) reasons.push(why);
			};
			if (!has("hook") && has("knife") && (has("line") || has("cord")) && has("bait")) add(7, "No metal hook, but a knife, line, and bait. A gorge is a harvest tool you can make before the light goes — only if you mean to keep the fish.");
			if (has("hook")) score -= 8;
			if (!has("bait")) score -= 2;
			return {
				id: "gorge",
				score,
				reasons
			};
		},
		() => {
			let score = 0;
			const reasons = [];
			const add = (n, why) => {
				score += n;
				if (why && n > 0) reasons.push(why);
			};
			if (has("bottle")) add(5, "The bottle is the trap. Everything else is lashing and a pinch of bait.");
			else score -= 2;
			if (answers.quarry === "baitfish") add(4, "Minnows and shiners are what a bottle funnel actually catches.");
			if (answers.water === "pond" || answers.water === "creek") add(2, "Still edges and slow creeks are where small fish patrol a scent trail.");
			if (answers.water === "river") add(1);
			if (answers.water === "tidal") score -= 3;
			if (answers.window === "hour") score -= 1;
			if (answers.window === "afternoon" || answers.window === "overnight") add(1);
			if (has("bait")) add(1);
			return {
				id: "bottle",
				score,
				reasons
			};
		},
		() => {
			let score = 0;
			const reasons = [];
			const add = (n, why) => {
				score += n;
				if (why && n > 0) reasons.push(why);
			};
			if (answers.quarry === "catfish") add(4, "Catfish, bullhead, and eel hunt by smell and will commit to a dark funnel.");
			if (answers.window === "overnight") add(4, "This trap works while you sleep, if you're allowed to leave it and you come back at dawn.");
			if (answers.window === "hour") score -= 4;
			if (has("sticks") && has("cord")) add(3, "Shoots and cord are enough to lash a slat trap before dusk.");
			if (!has("sticks")) score -= 2;
			if (has("knife")) add(1);
			if (answers.water === "river" || answers.water === "pond") add(2, "Slow river and pond margins are basket water. The fish walk the bank at night.");
			if (answers.water === "creek") add(1);
			if (answers.water === "tidal") score -= 2;
			return {
				id: "basket",
				score,
				reasons
			};
		},
		() => {
			let score = 0;
			const reasons = [];
			const add = (n, why) => {
				score += n;
				if (why && n > 0) reasons.push(why);
			};
			if (answers.water === "creek") add(6, "A wadeable creek is the only place a brush wing earns its branches.");
			else score -= 3;
			if (has("sticks")) add(3, "Brush on the bank is the wall. You don't carry this method in.");
			if (answers.window === "afternoon") add(2, "You have time to weave a wing and walk the fish down into it.");
			if (answers.window === "hour" || answers.window === "overnight") score -= 2;
			if (answers.water === "tidal") score -= 5;
			if (answers.quarry === "any" || answers.quarry === "panfish" || answers.quarry === "baitfish") add(1);
			return {
				id: "weir",
				score,
				reasons
			};
		},
		() => {
			let score = 0;
			const reasons = [];
			const add = (n, why) => {
				score += n;
				if (why && n > 0) reasons.push(why);
			};
			if (answers.water === "tidal") add(6, "The tide is the gear. A low stone wall turns the ebb into a corral.");
			else score -= 8;
			if (answers.window === "tide") add(4, "You need the falling water. Set on the dry flat, take fish as the sea leaves.");
			if (answers.window === "afternoon") add(1);
			if (answers.window === "hour") score -= 3;
			if (has("stones")) add(2, "Stones in hand, or underfoot, are the whole material list.");
			else if (answers.water === "tidal") add(1, "A real flat usually supplies the stones. Sand alone does not.");
			return {
				id: "tidal",
				score,
				reasons
			};
		}
	].map((run) => run());
	ranked.sort((a, b) => b.score - a.score);
	const toPick = (row) => {
		const method = getMethod(row.id);
		if (!method) throw new Error(`Missing method ${row.id}`);
		const reasons = row.reasons.length > 0 ? row.reasons.slice(0, 3) : ["It's the least-wrong start for the time and water you marked."];
		const need = gaps[row.id];
		const gap = need && !has(need.gear) ? need.line : null;
		return {
			method,
			score: row.score,
			reasons,
			gap
		};
	};
	const lead = toPick(ranked[0]);
	const runner = ranked[1];
	return {
		lead,
		alt: runner && runner.score >= 4 && runner.score >= lead.score - 6 ? toPick(runner) : null,
		thin: lead.score < 4
	};
}
var waters = [
	{
		id: "creek",
		label: "Wadeable creek",
		hint: "You can see the bottom and stand in the edge."
	},
	{
		id: "pond",
		label: "Pond or lake edge",
		hint: "Still water, weeds, a bank you can walk."
	},
	{
		id: "river",
		label: "Slow river",
		hint: "Moving, but not a rapids. Mud, logs, a deep slack."
	},
	{
		id: "tidal",
		label: "Tidal flat",
		hint: "The sea comes and goes. Stones or sand, and a tide."
	}
];
var windows = [
	{
		id: "hour",
		label: "About an hour",
		hint: "Light's going, or you have a short stop."
	},
	{
		id: "afternoon",
		label: "An afternoon",
		hint: "Time to build something and still tend it."
	},
	{
		id: "overnight",
		label: "Overnight",
		hint: "You can set at dusk and come back at dawn."
	},
	{
		id: "tide",
		label: "A falling tide",
		hint: "You'll be here while the water leaves."
	}
];
var quarries = [
	{
		id: "baitfish",
		label: "Minnows",
		hint: "Baitfish, shiners, anything finger-long."
	},
	{
		id: "panfish",
		label: "Panfish",
		hint: "Bluegill, perch, sunfish, a creek chub."
	},
	{
		id: "catfish",
		label: "Catfish or eel",
		hint: "Fish that hunt by smell after dark."
	},
	{
		id: "any",
		label: "Whatever bites",
		hint: "A meal matters more than a species."
	}
];
var gear = [
	{
		id: "bottle",
		label: "A plastic bottle"
	},
	{
		id: "cord",
		label: "Cord or line"
	},
	{
		id: "sticks",
		label: "Sticks and brush"
	},
	{
		id: "stones",
		label: "Stones you can lift"
	},
	{
		id: "hook",
		label: "A fish hook"
	},
	{
		id: "line",
		label: "Fishing line"
	},
	{
		id: "bait",
		label: "Something for bait"
	},
	{
		id: "knife",
		label: "A knife"
	}
];
var steps = [
	"Water",
	"Time",
	"Quarry",
	"Pockets"
];
function Choice({ pressed, label, hint, onClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		"aria-pressed": pressed,
		onClick,
		className: `min-h-16 rounded-card border px-4 py-3 text-left transition-colors duration-150 active:scale-[0.96] ${pressed ? "border-river bg-river text-paper" : "border-ink/15 bg-paper hover:border-river"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "block font-display text-xl",
			children: label
		}), hint ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: `mt-1 block text-sm ${pressed ? "text-paper/80" : "text-ink/70"}`,
			children: hint
		}) : null]
	});
}
function Bank() {
	const [step, setStep] = (0, import_react.useState)(0);
	const [water, setWater] = (0, import_react.useState)(null);
	const [window, setWindow] = (0, import_react.useState)(null);
	const [quarry, setQuarry] = (0, import_react.useState)(null);
	const [pockets, setPockets] = (0, import_react.useState)([]);
	const [done, setDone] = (0, import_react.useState)(false);
	const ready = step === 0 && water || step === 1 && window || step === 2 && quarry || step === 3;
	function toggleGear(id) {
		setPockets((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);
	}
	function reset() {
		setStep(0);
		setWater(null);
		setWindow(null);
		setQuarry(null);
		setPockets([]);
		setDone(false);
	}
	const answers = water && window && quarry ? {
		water,
		window,
		quarry,
		gear: pockets
	} : null;
	const result = done && answers ? advise(answers) : null;
	const summary = answers ? [
		waters.find((item) => item.id === answers.water)?.label,
		windows.find((item) => item.id === answers.window)?.label,
		quarries.find((item) => item.id === answers.quarry)?.label,
		pockets.length ? pockets.map((id) => gear.find((item) => item.id === id)?.label).join(", ") : "empty pockets"
	].join(" · ") : "";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		id: "content",
		className: "mx-auto max-w-3xl px-5 py-8 md:py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-semibold tracking-wide text-river uppercase",
				children: "On the bank"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-4xl md:text-5xl",
				children: "What does this water want?"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-xl text-lg text-ink/80",
				children: "Four questions. A method you can actually build with what's in your pockets, and a runner-up if the first one is a poor fit."
			}),
			result ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rise mt-8 space-y-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-ink/70",
						children: summary
					}),
					result.thin ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-ink/80",
						children: "This bank is thin. The pick below is the least-bad start, not a promise of fish."
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "grid gap-5 md:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plate, {
							src: result.lead.method.image,
							alt: result.lead.method.alt
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-semibold tracking-wide text-copper uppercase",
								children: "Start here"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-1 font-display text-4xl",
								children: result.lead.method.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-3 space-y-2 text-ink/80",
								children: result.lead.reasons.map((reason) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: reason }, reason))
							}),
							result.lead.gap ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm text-ink/80",
								children: result.lead.gap
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/methods/$methodId",
								params: { methodId: result.lead.method.id },
								className: `${btn} mt-5`,
								children: ["Open the build", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
									className: "size-4",
									"aria-hidden": "true"
								})]
							})
						] })]
					}),
					result.alt ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-card border border-ink/10 p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-semibold text-ink/70",
								children: "Also consider"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-1 font-display text-2xl",
								children: result.alt.method.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-ink/80",
								children: result.alt.reasons[0]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/methods/$methodId",
								params: { methodId: result.alt.method.id },
								className: "mt-3 inline-flex min-h-11 items-center font-semibold text-river",
								children: "Read that build"
							})
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-ink/70",
						children: "Nothing else fits this bank as well."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: reset,
						className: btnGhost,
						children: "Start over"
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm font-semibold tabular-nums text-ink/70",
						children: [
							steps[step],
							" · ",
							step + 1,
							" of ",
							steps.length
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rise mt-4",
						children: [
							step === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid gap-3 sm:grid-cols-2",
								children: waters.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Choice, {
									pressed: water === item.id,
									label: item.label,
									hint: item.hint,
									onClick: () => setWater(item.id)
								}, item.id))
							}) : null,
							step === 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid gap-3 sm:grid-cols-2",
								children: windows.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Choice, {
									pressed: window === item.id,
									label: item.label,
									hint: item.hint,
									onClick: () => setWindow(item.id)
								}, item.id))
							}) : null,
							step === 2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid gap-3 sm:grid-cols-2",
								children: quarries.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Choice, {
									pressed: quarry === item.id,
									label: item.label,
									hint: item.hint,
									onClick: () => setQuarry(item.id)
								}, item.id))
							}) : null,
							step === 3 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mb-3 text-ink/80",
								children: "Leave these off if you don't have them."
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid gap-3 sm:grid-cols-2",
								children: gear.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Choice, {
									pressed: pockets.includes(item.id),
									label: item.label,
									onClick: () => toggleGear(item.id)
								}, item.id))
							})] }) : null
						]
					}, step),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex gap-2",
						children: [step > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: btnGhost,
							onClick: () => setStep((n) => n - 1),
							children: "Back"
						}) : null, step < 3 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: btn,
							disabled: !ready,
							onClick: () => setStep((n) => n + 1),
							children: "Next"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: btn,
							onClick: () => setDone(true),
							children: "Read the bank"
						})]
					})
				]
			})
		]
	});
}
//#endregion
export { Bank as component };
