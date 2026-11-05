import { createFileRoute, Link } from "@tanstack/react-router";
import { kitGroups, materials } from "@/data/guide";
import { CheckRow } from "@/components/bits";
import { useField } from "@/lib/field-store";

export const Route = createFileRoute("/kit")({
  head: () => ({
    meta: [{ title: "Field kit — Catchcraft" }],
  }),
  component: KitPage,
});

function KitPage() {
  const kit = useField((s) => s.kit);
  const toggleKit = useField((s) => s.toggleKit);
  const packed = materials.filter((item) => kit[item.id]).length;

  return (
    <main id="content" className="mx-auto max-w-3xl px-5 py-8 md:py-12">
      <p className="text-sm font-semibold tracking-wide text-river uppercase">Field kit</p>
      <h1 className="mt-2 font-display text-4xl md:text-5xl">What to have in reach.</h1>
      <p className="mt-3 max-w-xl text-lg text-ink/80">
        Tick what you're carrying. The same list lives on each build, so a check here shows up
        there.{" "}
        <span className="tabular-nums">
          {packed} of {materials.length} packed.
        </span>
      </p>
      <div className="mt-8 space-y-8">
        {kitGroups.map((group) => {
          const items = materials.filter((item) => item.group === group);
          const done = items.filter((item) => kit[item.id]).length;
          return (
            <section key={group}>
              <div className="flex items-baseline justify-between gap-3">
                <h2 className="font-display text-3xl">{group}</h2>
                <p className="text-sm tabular-nums text-ink/70">
                  {done} / {items.length}
                </p>
              </div>
              <ul className="mt-3 space-y-2">
                {items.map((item) => (
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
          );
        })}
      </div>
      <p className="mt-10 text-ink/80">
        Not sure what the water is asking for?{" "}
        <Link to="/bank" className="font-semibold text-river">
          Read the bank
        </Link>
        .
      </p>
    </main>
  );
}
