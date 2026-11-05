import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { families, filterTags, methods, type Tag } from "@/data/guide";
import { btn, LawNote, Plate } from "@/components/bits";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Catchcraft — traps, corrals, and the hook" },
      {
        name: "description",
        content:
          "Build a bottle funnel, a slat basket, a brush wing, a stone tide corral, or fish a hook and bait from the bank.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  const [tag, setTag] = useState<Tag | "all">("all");
  const visible = methods.filter((method) => tag === "all" || method.tags.includes(tag));

  return (
    <main id="content">
      <section className="mx-auto grid max-w-5xl gap-6 px-5 py-8 md:grid-cols-2 md:items-end md:py-12">
        <div className="rise">
          <p className="text-sm font-semibold tracking-wide text-river uppercase">A field guide</p>
          <h1 className="mt-2 font-display text-4xl text-ink md:text-6xl">
            Catch a fish with what the bank has.
          </h1>
          <p className="mt-4 max-w-xl text-lg text-ink/80">
            Handmade traps for fish that follow a scent. Corrals that borrow a creek or a tide.
            And the hook — still the surest way to a meal when you can stay and watch.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/bank" className={btn}>
              I'm on the bank
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <a href="#traps" className="inline-flex min-h-11 items-center font-semibold text-river">
              Start with traps
            </a>
          </div>
        </div>
        <Plate
          wide
          src="/photos/hero.jpg"
          alt="A misty riverbank at sunrise with a cane pole, a coil of rope, and a plastic bottle at the water's edge."
        />
      </section>

      <section className="mx-auto max-w-5xl px-5 pb-6">
        <LawNote>
          Traps, weirs, and corrals are illegal in a lot of water. Where they are allowed they
          usually must be tagged and checked on a schedule. A hook and line is what most places
          actually permit. Read the rule for the water you're standing on before you build anything.
        </LawNote>
      </section>

      <section className="mx-auto grid max-w-5xl gap-3 px-5 pb-8 sm:grid-cols-3">
        {[
          ["Traps", "Scent and a funnel. You can leave, and you must come back."],
          ["Corrals", "Current or tide does the herding. You only shape the bank."],
          ["The hook", "You stay. It works in the most places the law allows."],
        ].map(([title, body]) => (
          <article key={title} className="rounded-card border border-ink/10 bg-paper p-4">
            <h2 className="font-display text-2xl">{title}</h2>
            <p className="mt-1 text-sm text-ink/75">{body}</p>
          </article>
        ))}
      </section>

      <div className="mx-auto flex max-w-5xl flex-wrap gap-2 px-5 pb-10">
        {filterTags.map((item) => {
          const on = tag === item.id;
          return (
            <button
              key={item.id}
              type="button"
              aria-pressed={on}
              onClick={() => setTag(item.id)}
              className={`min-h-11 rounded-full border px-4 font-semibold transition-colors duration-150 ${
                on ? "border-river bg-river text-paper" : "border-ink/15 bg-paper text-ink hover:border-river"
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      {families.map((family) => {
        const group = visible.filter((method) => method.family === family.id);
        if (group.length === 0) return null;
        return (
          <section
            key={family.id}
            id={family.anchor}
            className="scroll-mt-24 border-t border-ink/10"
          >
            <div className="mx-auto max-w-5xl px-5 py-10">
              <p className="font-display text-4xl text-copper">{family.numeral}</p>
              <h2 className="mt-1 font-display text-4xl">{family.title}</h2>
              <p className="mt-3 max-w-2xl text-lg text-ink/80">{family.lede}</p>
              <div className="mt-8 space-y-10">
                {group.map((method, index) => (
                  <article
                    key={method.id}
                    className="grid items-center gap-5 md:grid-cols-5"
                  >
                    <div className={index % 2 === 1 ? "md:order-2 md:col-span-3" : "md:col-span-3"}>
                      <Plate src={method.image} alt={method.alt} />
                    </div>
                    <div className="md:col-span-2">
                      <h3 className="font-display text-3xl">{method.name}</h3>
                      <p className="mt-1 font-display text-lg italic text-river">{method.epithet}</p>
                      <p className="mt-3 text-ink/80">{method.summary}</p>
                      <p className="mt-3 text-sm text-ink/70">
                        {method.time} · {method.catches}
                      </p>
                      <Link
                        to="/methods/$methodId"
                        params={{ methodId: method.id }}
                        className="mt-4 inline-flex min-h-11 items-center font-semibold text-river"
                      >
                        Build it
                        <ArrowRight className="ml-1 size-4" aria-hidden="true" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {visible.length === 0 ? (
        <p className="mx-auto max-w-5xl px-5 pb-16 text-ink/70">
          Nothing in the guide is aimed at that fish. Try the hook anyway — it's the wide net.
        </p>
      ) : null}
    </main>
  );
}
