import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/glossary")({
  head: () => ({
    meta: [{ title: "Glossary — Fishing: Catchcraft" }],
  }),
  component: GlossaryPage,
});

const terms: { name: string; body: string }[] = [
  { name: "License", body: "The permit your state requires to fish." },
  { name: "Bag limit / size limit", body: "How many and how large you may keep." },
  { name: "Barbless", body: "A hook with the barb pinched flat; easier to release." },
  { name: "Catch-and-release", body: "Returning a fish to the water alive." },
  { name: "PFD", body: "Personal flotation device; a life jacket. On an underway boat, wear one that is properly fitted and Coast Guard approved." },
  { name: "Funnel trap", body: "A trap fish enter and cannot easily leave." },
  { name: "Weir / corral", body: "A wall or wing that herds fish with current or tide." },
  { name: "Gorge", body: "A swallowed stick hook; harvest only, often illegal." },
  { name: "Improved clinch", body: "A common knot for tying line to a hook." },
  {
    name: "Invasive species",
    body: "Plants or animals that harm a water when moved there.",
  },
  {
    name: "Consumption advisory",
    body: "Official advice on how often to eat fish from a water.",
  },
];

function GlossaryPage() {
  return (
    <main id="content" className="mx-auto max-w-3xl px-5 py-8 md:py-12">
      <p className="text-sm font-semibold tracking-wide text-river uppercase">Words</p>
      <h1 className="mt-2 font-display text-4xl md:text-5xl">Glossary</h1>
      <dl className="mt-6 space-y-4">
        {terms.map((term) => (
          <div key={term.name} className="border-b border-ink/10 pb-4">
            <dt className="font-display text-2xl">{term.name}</dt>
            <dd className="mt-1 text-ink/80">{term.body}</dd>
          </div>
        ))}
      </dl>
    </main>
  );
}
