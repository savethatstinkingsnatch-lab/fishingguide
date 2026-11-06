import { S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as VolumeNote, t as KeepingBox } from "./notes-tUuJ-l6-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/safe-DqewILVZ.js
var import_jsx_runtime = require_jsx_runtime();
var rules = [
	"License: Buy and carry a valid fishing license. Kids' rules vary by age and state.",
	"Adults in charge: Children fish with an adult. An adult handles hooks, knives, and fish that will be killed.",
	"Life jacket: When a boat is underway, wear a properly fitted, Coast Guard–approved PFD. Federal rules generally require children under 13 to wear one on an underway vessel, subject to the stated exceptions and to state rules, which can be stricter. Strongly consider a PFD when wading deep, swift, or cold water. Non-swimmers and kids wear one at the water's edge too.",
	"Weather: When you hear thunder, get out of the water and move to a substantial building or a hard-topped vehicle. Wait at least 30 minutes after the last thunder before you go back. Rising muddy water and ice shelves are danger, not adventure. Cold water can kill even strong swimmers.",
	"Hooks in skin: If a hook is deep, near an eye, or in a joint, do not cut or push it yourself. Go to urgent care or an ER. For a shallow hook in soft skin, many people seek clinic help rather than home surgery. Call Poison Control at 1-800-222-1222 only if a chemical or bait toxin is involved — for embedded hooks, medical care is the path.",
	"Never leave a baited hook or trap unattended where a person, pet, or wildlife can step on it."
];
function SafePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		id: "content",
		className: "mx-auto max-w-3xl px-5 py-8 md:py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-semibold tracking-wide text-river uppercase",
				children: "Before you fish"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-4xl md:text-5xl",
				children: "Stay safe on the water"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-6 space-y-3",
				children: rules.map((rule) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "border-l-2 border-copper pl-3 text-ink/85",
					children: rule
				}, rule))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeepingBox, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VolumeNote, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/start",
					className: "font-semibold text-river",
					children: "New to this? Start here"
				})
			})
		]
	});
}
//#endregion
export { SafePage as component };
