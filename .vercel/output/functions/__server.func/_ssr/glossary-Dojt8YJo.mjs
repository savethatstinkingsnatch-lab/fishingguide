import { S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/glossary-Dojt8YJo.js
var import_jsx_runtime = require_jsx_runtime();
var terms = [
	{
		name: "License",
		body: "The permit your state requires to fish."
	},
	{
		name: "Bag limit / size limit",
		body: "How many and how large you may keep."
	},
	{
		name: "Barbless",
		body: "A hook with the barb pinched flat; easier to release."
	},
	{
		name: "Catch-and-release",
		body: "Returning a fish to the water alive."
	},
	{
		name: "PFD",
		body: "Personal flotation device; a life jacket. On an underway boat, wear one that is properly fitted and Coast Guard approved."
	},
	{
		name: "Funnel trap",
		body: "A trap fish enter and cannot easily leave."
	},
	{
		name: "Weir / corral",
		body: "A wall or wing that herds fish with current or tide."
	},
	{
		name: "Gorge",
		body: "A swallowed stick hook; harvest only, often illegal."
	},
	{
		name: "Improved clinch",
		body: "A common knot for tying line to a hook."
	},
	{
		name: "Invasive species",
		body: "Plants or animals that harm a water when moved there."
	},
	{
		name: "Consumption advisory",
		body: "Official advice on how often to eat fish from a water."
	}
];
function GlossaryPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		id: "content",
		className: "mx-auto max-w-3xl px-5 py-8 md:py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-semibold tracking-wide text-river uppercase",
				children: "Words"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-4xl md:text-5xl",
				children: "Glossary"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
				className: "mt-6 space-y-4",
				children: terms.map((term) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border-b border-ink/10 pb-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "font-display text-2xl",
						children: term.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "mt-1 text-ink/80",
						children: term.body
					})]
				}, term.name))
			})
		]
	});
}
//#endregion
export { GlossaryPage as component };
