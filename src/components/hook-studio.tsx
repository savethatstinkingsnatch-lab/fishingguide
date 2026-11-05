import { useState } from "react";
import { baits, clinch, depths, lies } from "@/data/guide";

export function HookStudio() {
  const [depth, setDepth] = useState(depths[1].id);
  const [bait, setBait] = useState(baits[0].id);
  const [knot, setKnot] = useState(0);
  const depthChoice = depths.find((item) => item.id === depth) ?? depths[1];
  const baitChoice = baits.find((item) => item.id === bait) ?? baits[0];

  return (
    <div className="space-y-10">
      <section>
        <h2 className="font-display text-3xl">Where they sit</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {lies.map((lie) => (
            <li key={lie.name} className="rounded-card border border-ink/10 bg-paper p-4">
              <h3 className="font-display text-xl">{lie.name}</h3>
              <p className="mt-1 text-sm text-ink/80">{lie.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="font-display text-3xl">Set the depth</h2>
        <p className="mt-2 max-w-2xl text-ink/80">
          How deep is the spot in front of you? The float — or the lack of one — follows from that.
        </p>
        <div className="mt-4 grid gap-3">
          {depths.map((item) => {
            const on = item.id === depth;
            return (
              <button
                key={item.id}
                type="button"
                aria-pressed={on}
                onClick={() => setDepth(item.id)}
                className={`min-h-11 rounded-card border px-4 py-3 text-left transition-colors duration-150 active:scale-[0.96] ${
                  on ? "border-river bg-river text-paper" : "border-ink/15 bg-paper hover:border-river"
                }`}
              >
                <span className="font-display text-xl">{item.label}</span>
              </button>
            );
          })}
        </div>
        <p className="mt-4 max-w-2xl text-ink/80">{depthChoice.set}</p>
      </section>

      <section>
        <h2 className="font-display text-3xl">What you can bait</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {baits.map((item) => {
            const on = item.id === bait;
            return (
              <button
                key={item.id}
                type="button"
                aria-pressed={on}
                onClick={() => setBait(item.id)}
                className={`min-h-11 rounded-full border px-4 font-semibold transition-colors duration-150 active:scale-[0.96] ${
                  on ? "border-river bg-river text-paper" : "border-ink/15 bg-paper hover:border-river"
                }`}
              >
                {item.name}
              </button>
            );
          })}
        </div>
        <div className="mt-4 max-w-2xl space-y-2 rounded-card border border-ink/10 bg-paper p-4">
          <p>
            <span className="font-semibold">Find it. </span>
            {baitChoice.finds}
          </p>
          <p>
            <span className="font-semibold">Takes. </span>
            {baitChoice.takes}
          </p>
          <p>
            <span className="font-semibold">Rig. </span>
            {baitChoice.rig}
          </p>
        </div>
      </section>

      <section>
        <h2 className="font-display text-3xl">{clinch.name}</h2>
        <p className="mt-2 text-sm tabular-nums text-ink/70">
          Move {knot + 1} of {clinch.steps.length}
        </p>
        <p className="mt-3 max-w-2xl text-lg">{clinch.steps[knot]}</p>
        <div className="mt-4 flex gap-2">
          <button
            type="button"
            className="inline-flex min-h-11 items-center rounded-full border border-ink/15 px-4 font-semibold disabled:opacity-40"
            onClick={() => setKnot((n) => Math.max(0, n - 1))}
            disabled={knot === 0}
          >
            Back
          </button>
          <button
            type="button"
            className="inline-flex min-h-11 items-center rounded-full bg-river px-4 font-semibold text-paper disabled:opacity-40"
            onClick={() => setKnot((n) => Math.min(clinch.steps.length - 1, n + 1))}
            disabled={knot === clinch.steps.length - 1}
          >
            Next wrap
          </button>
        </div>
        <p className="mt-4 max-w-2xl text-sm text-ink/70">
          If the clinch slips on braid, tie a Palomar instead: double the line, through the eye,
          tie an overhand knot, pass the hook through the loop, and tighten.
        </p>
      </section>
    </div>
  );
}
