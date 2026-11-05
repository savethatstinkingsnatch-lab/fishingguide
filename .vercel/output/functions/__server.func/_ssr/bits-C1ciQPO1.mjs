import { i as __toESM } from "../_runtime.mjs";
import { J as require_react, S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Check, t as TriangleAlert } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/bits-C1ciQPO1.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var btn = "inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-river px-5 font-semibold text-paper transition-transform duration-150 ease-out hover:bg-ink active:scale-[0.96] disabled:opacity-50";
var btnGhost = "inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-ink/15 bg-paper px-5 font-semibold text-ink transition-colors duration-150 hover:border-river hover:text-river active:scale-[0.96]";
function Plate({ src, alt, wide = false }) {
	const [failed, setFailed] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figure", {
		className: `overflow-hidden rounded-card bg-river ${wide ? "aspect-video" : "aspect-plate"}`,
		children: failed ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "h-full w-full",
			role: "img",
			"aria-label": alt
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src,
			alt,
			className: "h-full w-full object-cover",
			onError: () => setFailed(true)
		})
	});
}
function CheckRow({ checked, label, note, onToggle }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		role: "checkbox",
		"aria-checked": checked,
		onClick: onToggle,
		className: "flex min-h-11 w-full items-start gap-3 rounded-card border border-ink/10 bg-paper px-3 py-3 text-left transition-colors duration-150 hover:border-river active:scale-[0.96]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: `mt-0.5 grid size-5 shrink-0 place-items-center rounded border ${checked ? "border-river bg-river text-paper" : "border-ink/30 bg-paper"}`,
			"aria-hidden": "true",
			children: checked ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
				className: "size-3.5",
				strokeWidth: 2.5
			}) : null
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: `block font-semibold ${checked ? "text-ink/50 line-through" : ""}`,
			children: label
		}), note ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "mt-0.5 block text-sm text-ink/70",
			children: note
		}) : null] })]
	});
}
function LawNote({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: "flex gap-3 border-l-2 border-copper bg-ink/5 px-4 py-3 text-sm text-ink",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
			className: "mt-0.5 size-4 shrink-0 text-copper",
			"aria-hidden": "true"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children })]
	});
}
//#endregion
export { btnGhost as a, btn as i, LawNote as n, Plate as r, CheckRow as t };
