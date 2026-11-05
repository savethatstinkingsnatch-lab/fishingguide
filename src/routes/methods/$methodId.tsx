import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { getMethod, materialById, methods } from "@/data/guide";
import { btn, btnGhost, CheckRow, LawNote, Plate } from "@/components/bits";
import { HookStudio } from "@/components/hook-studio";
import { useField } from "@/lib/field-store";

export const Route = createFileRoute("/methods/$methodId")({
  head: ({ params }) => {
    const method = getMethod(params.methodId);
    return {
      meta: [{ title: method ? `${method.name} — Catchcraft` : "Method — Catchcraft" }],
    };
  },
  component: MethodPage,
});

function MethodPage() {
  const { methodId } = Route.useParams();
  const method = getMethod(methodId);
  const kit = useField((s) => s.kit);
  const steps = useField((s) => s.steps);
  const toggleKit = useField((s) => s.toggleKit);
  const toggleStep = useField((s) => s.toggleStep);
  const pack = useField((s) => s.pack);

  if (!method) {
    return (
      <main id="content" className="mx-auto max-w-2xl px-5 py-16">
        <h1 className="font-display text-4xl">That method isn't in the guide.</h1>
        <Link to="/" className={`${btn} mt-6`}>
          Back to the guide
        </Link>
      </main>
    );
  }

  const mats = method.materialIds
    .map((id) => materialById(id))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));
  const packed = mats.length > 0 && mats.every((item) => kit[item.id]);
  const doneSteps = method.steps.filter((_, index) => steps[`${method.id}:${index}`]).length;
  const index = methods.findIndex((item) => item.id === method.id);
  const next = methods[(index + 1) % methods.length];

  return (
    <main id="content" className="mx-auto max-w-3xl px-5 py-8 md:py-12">
      <Link to="/" className="inline-flex min-h-11 items-center text-sm font-semibold text-river">
        <ArrowLeft className="mr-1 size-4" aria-hidden="true" />
        Guide
      </Link>
      <div className="mt-4">
        <Plate src={method.image} alt={method.alt} />
      </div>
      <p className="mt-6 text-sm font-semibold tracking-wide text-copper uppercase">
        {method.family === "trap" ? "Trap" : method.family === "corral" ? "Corral" : "Hook"} ·{" "}
        {method.time}
      </p>
      <h1 className="mt-2 font-display text-4xl md:text-5xl">{method.name}</h1>
      <p className="mt-2 font-display text-xl italic text-river">{method.epithet}</p>
      <p className="mt-4 text-lg text-ink/80">{method.summary}</p>

      <dl className="mt-6 grid gap-4 sm:grid-cols-2">
        {[
          ["Catches", method.catches],
          ["Doesn't", method.misses],
          ["Water", method.water],
          ["Tend", method.tend],
        ].map(([label, body]) => (
          <div key={label} className="rounded-card border border-ink/10 p-4">
            <dt className="text-sm font-semibold text-ink/60">{label}</dt>
            <dd className="mt-1 text-sm">{body}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-6">
        <LawNote>{method.law}</LawNote>
      </div>

      {method.id === "hook" ? (
        <div className="mt-10">
          <HookStudio />
        </div>
      ) : null}

      <section className="mt-10">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <h2 className="font-display text-3xl">Materials</h2>
          <button
            type="button"
            className={packed ? btnGhost : btn}
            onClick={() => pack(method.materialIds)}
          >
            {packed ? "In the field kit" : "Add to field kit"}
          </button>
        </div>
        <ul className="mt-4 space-y-2">
          {mats.map((item) => (
            <li key={item.id}>
              <CheckRow
                checked={Boolean(kit[item.id])}
                label={item.name}
                note={item.note}
                onToggle={() => toggleKit(item.id)}
              />
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <div className="flex items-baseline justify-between gap-3">
          <h2 className="font-display text-3xl">Build</h2>
          <p className="text-sm tabular-nums text-ink/70">
            {doneSteps} / {method.steps.length}
          </p>
        </div>
        <ol className="mt-4 space-y-4">
          {method.steps.map((step, index) => {
            const id = `${method.id}:${index}`;
            const on = Boolean(steps[id]);
            return (
              <li key={step.title} className="grid grid-cols-[auto_1fr] gap-3">
                <span className="font-display text-3xl text-copper tabular-nums">{index + 1}</span>
                <div>
                  <button
                    type="button"
                    role="checkbox"
                    aria-checked={on}
                    onClick={() => toggleStep(id)}
                    className="min-h-11 text-left"
                  >
                    <span className={`font-display text-2xl ${on ? "text-ink/45 line-through" : ""}`}>
                      {step.title}
                    </span>
                  </button>
                  <p className="mt-1 text-ink/80">{step.body}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </section>

      <section className="mt-10">
        <h2 className="font-display text-3xl">On the set</h2>
        <ul className="mt-3 space-y-2">
          {method.setting.map((line) => (
            <li key={line} className="border-l-2 border-river/40 pl-3 text-ink/80">
              {line}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="font-display text-3xl">Easy ways to fail</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-ink/80">
          {method.mistakes.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      </section>

      <div className="mt-12 flex flex-wrap items-center justify-between gap-3 border-t border-ink/10 pt-6">
        <Link to="/bank" className="font-semibold text-river">
          Not this water? Read the bank
        </Link>
        <Link
          to="/methods/$methodId"
          params={{ methodId: next.id }}
          className="inline-flex min-h-11 items-center font-semibold text-ink"
        >
          Next: {next.name}
          <ArrowRight className="ml-1 size-4" aria-hidden="true" />
        </Link>
      </div>
    </main>
  );
}
