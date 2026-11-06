import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/start")({
  head: () => ({
    meta: [{ title: "Start here — Fishing: Catchcraft" }],
  }),
  component: StartPage,
});

const steps = [
  "Get a license and read the rules for your water.",
  "Pack a properly fitted, Coast Guard–approved life jacket, small hooks, light line, bait, and forceps.",
  "Start with hook and bait from the bank, not a trap.",
  "Pinch the barb if you will release fish.",
  "Wet hands, don't squeeze.",
  "Never dump live bait.",
  "Check consumption advisories — they cover more than mercury, and they depend on the water and the species — before you make a meal of it.",
];

function StartPage() {
  return (
    <main id="content" className="mx-auto max-w-3xl px-5 py-8 md:py-12">
      <p className="text-sm font-semibold tracking-wide text-river uppercase">Volume 23</p>
      <h1 className="mt-2 font-display text-4xl md:text-5xl">Start here</h1>
      <p className="mt-3 text-lg text-ink/80">New to fishing?</p>
      <ol className="mt-6 space-y-3">
        {steps.map((step, index) => (
          <li key={step} className="grid grid-cols-[auto_1fr] gap-3">
            <span className="font-display text-3xl text-copper tabular-nums">{index + 1}</span>
            <p className="pt-1 text-ink/85">{step}</p>
          </li>
        ))}
      </ol>
      <p className="mt-8 flex flex-wrap gap-x-4 gap-y-2">
        <Link to="/methods/$methodId" params={{ methodId: "hook" }} className="font-semibold text-river">
          Hook and bait
        </Link>
        <Link to="/safe" className="font-semibold text-river">
          Stay safe on the water
        </Link>
        <Link to="/kit" className="font-semibold text-river">
          Field kit
        </Link>
      </p>
    </main>
  );
}
