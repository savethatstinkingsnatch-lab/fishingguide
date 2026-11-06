import { s as kitGroups, u as materials } from "./guide-DrvdgcRU.mjs";
import { S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as useField } from "./router-DsI8fdyg.mjs";
import { t as CheckRow } from "./bits-C1ciQPO1.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/kit-BANwEY_v.js
var import_jsx_runtime = require_jsx_runtime();
function KitPage() {
	const kit = useField((s) => s.kit);
	const toggleKit = useField((s) => s.toggleKit);
	const packed = materials.filter((item) => kit[item.id]).length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		id: "content",
		className: "mx-auto max-w-3xl px-5 py-8 md:py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-semibold tracking-wide text-river uppercase",
				children: "Field kit"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-4xl md:text-5xl",
				children: "What to have in reach."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 max-w-xl text-lg text-ink/80",
				children: [
					"Tick what you're carrying. The same list lives on each build, so a check here shows up there.",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "tabular-nums",
						children: [
							packed,
							" of ",
							materials.length,
							" packed."
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 space-y-8",
				children: kitGroups.map((group) => {
					const items = materials.filter((item) => item.group === group);
					const done = items.filter((item) => kit[item.id]).length;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-baseline justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-3xl",
							children: group
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm tabular-nums text-ink/70",
							children: [
								done,
								" / ",
								items.length
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 space-y-2",
						children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckRow, {
							checked: Boolean(kit[item.id]),
							label: item.name,
							note: item.note,
							onToggle: () => toggleKit(item.id)
						}) }, item.id))
					})] }, group);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-10 text-ink/80",
				children: [
					"Not sure what the water is asking for?",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/bank",
						className: "font-semibold text-river",
						children: "Read the bank"
					}),
					"."
				]
			})
		]
	});
}
//#endregion
export { KitPage as component };
