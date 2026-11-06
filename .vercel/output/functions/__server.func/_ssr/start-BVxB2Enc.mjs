import { S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/start-BVxB2Enc.js
var import_jsx_runtime = require_jsx_runtime();
var steps = [
	"Get a license and read the rules for your water.",
	"Pack a life jacket, small hooks, light line, bait, and forceps.",
	"Start with hook and bait from the bank, not a trap.",
	"Pinch the barb if you will release fish.",
	"Wet hands, don't squeeze.",
	"Never dump live bait.",
	"Check mercury advisories before you make a meal of it."
];
function StartPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		id: "content",
		className: "mx-auto max-w-3xl px-5 py-8 md:py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-semibold tracking-wide text-river uppercase",
				children: "Volume 23"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-4xl md:text-5xl",
				children: "Start here"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-lg text-ink/80",
				children: "New to fishing?"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-6 space-y-3",
				children: steps.map((step, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "grid grid-cols-[auto_1fr] gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-3xl text-copper tabular-nums",
						children: index + 1
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "pt-1 text-ink/85",
						children: step
					})]
				}, step))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-8 flex flex-wrap gap-x-4 gap-y-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/methods/$methodId",
						params: { methodId: "hook" },
						className: "font-semibold text-river",
						children: "Hook and bait"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/safe",
						className: "font-semibold text-river",
						children: "Stay safe on the water"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/kit",
						className: "font-semibold text-river",
						children: "Field kit"
					})
				]
			})
		]
	});
}
//#endregion
export { StartPage as component };
