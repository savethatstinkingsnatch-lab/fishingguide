import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { advise, type Answers, type GearId, type Quarry, type Water, type Window } from "@/data/advise";
import { btn, btnGhost, Plate } from "@/components/bits";

export const Route = createFileRoute("/bank")({
  head: () => ({
    meta: [{ title: "On the bank — Catchcraft" }],
  }),
  component: Bank,
});

const waters: { id: Water; label: string; hint: string }[] = [
  { id: "creek", label: "Wadeable creek", hint: "You can see the bottom and stand in the edge." },
  { id: "pond", label: "Pond or lake edge", hint: "Still water, weeds, a bank you can walk." },
  { id: "river", label: "Slow river", hint: "Moving, but not a rapids. Mud, logs, a deep slack." },
  { id: "tidal", label: "Tidal flat", hint: "The sea comes and goes. Stones or sand, and a tide." },
];

const windows: { id: Window; label: string; hint: string }[] = [
  { id: "hour", label: "About an hour", hint: "Light's going, or you have a short stop." },
  { id: "afternoon", label: "An afternoon", hint: "Time to build something and still tend it." },
  { id: "overnight", label: "Overnight", hint: "You can set at dusk and come back at dawn." },
  { id: "tide", label: "A falling tide", hint: "You'll be here while the water leaves." },
];

const quarries: { id: Quarry; label: string; hint: string }[] = [
  { id: "baitfish", label: "Minnows", hint: "Baitfish, shiners, anything finger-long." },
  { id: "panfish", label: "Panfish", hint: "Bluegill, perch, sunfish, a creek chub." },
  { id: "catfish", label: "Catfish or eel", hint: "Fish that hunt by smell after dark." },
  { id: "any", label: "Whatever bites", hint: "A meal matters more than a species." },
];

const gear: { id: GearId; label: string }[] = [
  { id: "bottle", label: "A plastic bottle" },
  { id: "cord", label: "Cord or line" },
  { id: "sticks", label: "Sticks and brush" },
  { id: "stones", label: "Stones you can lift" },
  { id: "hook", label: "A fish hook" },
  { id: "line", label: "Fishing line" },
  { id: "bait", label: "Something for bait" },
  { id: "knife", label: "A knife" },
];

const steps = ["Water", "Time", "Quarry", "Pockets"] as const;

function Choice({
  pressed,
  label,
  hint,
  onClick,
}: {
  pressed: boolean;
  label: string;
  hint?: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-pressed={pressed}
      onClick={onClick}
      className={`min-h-16 rounded-card border px-4 py-3 text-left transition-colors duration-150 active:scale-[0.96] ${
        pressed ? "border-river bg-river text-paper" : "border-ink/15 bg-paper hover:border-river"
      }`}
    >
      <span className="block font-display text-xl">{label}</span>
      {hint ? (
        <span className={`mt-1 block text-sm ${pressed ? "text-paper/80" : "text-ink/70"}`}>
          {hint}
        </span>
      ) : null}
    </button>
  );
}

function Bank() {
  const [step, setStep] = useState(0);
  const [water, setWater] = useState<Water | null>(null);
  const [window, setWindow] = useState<Window | null>(null);
  const [quarry, setQuarry] = useState<Quarry | null>(null);
  const [pockets, setPockets] = useState<GearId[]>([]);
  const [done, setDone] = useState(false);

  const ready =
    (step === 0 && water) || (step === 1 && window) || (step === 2 && quarry) || step === 3;

  function toggleGear(id: GearId) {
    setPockets((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
    );
  }

  function reset() {
    setStep(0);
    setWater(null);
    setWindow(null);
    setQuarry(null);
    setPockets([]);
    setDone(false);
  }

  const answers: Answers | null =
    water && window && quarry ? { water, window, quarry, gear: pockets } : null;
  const result = done && answers ? advise(answers) : null;

  const summary = answers
    ? [
        waters.find((item) => item.id === answers.water)?.label,
        windows.find((item) => item.id === answers.window)?.label,
        quarries.find((item) => item.id === answers.quarry)?.label,
        pockets.length
          ? pockets.map((id) => gear.find((item) => item.id === id)?.label).join(", ")
          : "empty pockets",
      ].join(" · ")
    : "";

  return (
    <main id="content" className="mx-auto max-w-3xl px-5 py-8 md:py-12">
      <p className="text-sm font-semibold tracking-wide text-river uppercase">On the bank</p>
      <h1 className="mt-2 font-display text-4xl md:text-5xl">What does this water want?</h1>
      <p className="mt-3 max-w-xl text-lg text-ink/80">
        Four questions. A method you can actually build with what's in your pockets, and a runner-up
        if the first one is a poor fit.
      </p>

      {result ? (
        <div className="rise mt-8 space-y-6">
          <p className="text-sm text-ink/70">{summary}</p>
          {result.thin ? (
            <p className="text-ink/80">
              This bank is thin. The pick below is the least-bad start, not a promise of fish.
            </p>
          ) : null}
          <article className="grid gap-5 md:grid-cols-2">
            <Plate src={result.lead.method.image} alt={result.lead.method.alt} />
            <div>
              <p className="text-sm font-semibold tracking-wide text-copper uppercase">Start here</p>
              <h2 className="mt-1 font-display text-4xl">{result.lead.method.name}</h2>
              <ul className="mt-3 space-y-2 text-ink/80">
                {result.lead.reasons.map((reason) => (
                  <li key={reason}>{reason}</li>
                ))}
              </ul>
              {result.lead.gap ? <p className="mt-3 text-sm text-ink/80">{result.lead.gap}</p> : null}
              <Link
                to="/methods/$methodId"
                params={{ methodId: result.lead.method.id }}
                className={`${btn} mt-5`}
              >
                Open the build
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </article>
          {result.alt ? (
            <article className="rounded-card border border-ink/10 p-4">
              <p className="text-sm font-semibold text-ink/70">Also consider</p>
              <h3 className="mt-1 font-display text-2xl">{result.alt.method.name}</h3>
              <p className="mt-2 text-ink/80">{result.alt.reasons[0]}</p>
              <Link
                to="/methods/$methodId"
                params={{ methodId: result.alt.method.id }}
                className="mt-3 inline-flex min-h-11 items-center font-semibold text-river"
              >
                Read that build
              </Link>
            </article>
          ) : (
            <p className="text-sm text-ink/70">Nothing else fits this bank as well.</p>
          )}
          <button type="button" onClick={reset} className={btnGhost}>
            Start over
          </button>
        </div>
      ) : (
        <div className="mt-8">
          <p className="text-sm font-semibold tabular-nums text-ink/70">
            {steps[step]} · {step + 1} of {steps.length}
          </p>
          <div key={step} className="rise mt-4">
            {step === 0 ? (
              <div className="grid gap-3 sm:grid-cols-2">
                {waters.map((item) => (
                  <Choice
                    key={item.id}
                    pressed={water === item.id}
                    label={item.label}
                    hint={item.hint}
                    onClick={() => setWater(item.id)}
                  />
                ))}
              </div>
            ) : null}
            {step === 1 ? (
              <div className="grid gap-3 sm:grid-cols-2">
                {windows.map((item) => (
                  <Choice
                    key={item.id}
                    pressed={window === item.id}
                    label={item.label}
                    hint={item.hint}
                    onClick={() => setWindow(item.id)}
                  />
                ))}
              </div>
            ) : null}
            {step === 2 ? (
              <div className="grid gap-3 sm:grid-cols-2">
                {quarries.map((item) => (
                  <Choice
                    key={item.id}
                    pressed={quarry === item.id}
                    label={item.label}
                    hint={item.hint}
                    onClick={() => setQuarry(item.id)}
                  />
                ))}
              </div>
            ) : null}
            {step === 3 ? (
              <div>
                <p className="mb-3 text-ink/80">Leave these off if you don't have them.</p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {gear.map((item) => (
                    <Choice
                      key={item.id}
                      pressed={pockets.includes(item.id)}
                      label={item.label}
                      onClick={() => toggleGear(item.id)}
                    />
                  ))}
                </div>
              </div>
            ) : null}
          </div>
          <div className="mt-6 flex gap-2">
            {step > 0 ? (
              <button type="button" className={btnGhost} onClick={() => setStep((n) => n - 1)}>
                Back
              </button>
            ) : null}
            {step < 3 ? (
              <button
                type="button"
                className={btn}
                disabled={!ready}
                onClick={() => setStep((n) => n + 1)}
              >
                Next
              </button>
            ) : (
              <button type="button" className={btn} onClick={() => setDone(true)}>
                Read the bank
              </button>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
