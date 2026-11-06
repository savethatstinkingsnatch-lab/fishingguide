export function KeepingBox() {
  return (
    <section className="rounded-card border border-ink/15 bg-paper p-4">
      <h2 className="font-display text-2xl">Keeping and eating fish</h2>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-ink/85">
        <li>
          Check your state's fish consumption advisories before you eat a catch. Advisories cover
          mercury and other contaminants, and they depend on the water and the species. They matter
          most for pregnant people, nursing parents, and young children. Local health or wildlife
          pages list which waters and species to limit or avoid.
        </li>
        <li>Keep only what you will eat, within the legal bag and size limits.</li>
        <li>
          Kill a kept fish promptly. Put it on ice immediately so it chills through, then clean it
          with clean water. Keep raw fish separate from ready-to-eat food.
        </li>
        <li>
          Never dump unused live bait, worms from another place, or aquarium fish into a lake or
          creek. That spreads invasive species and disease. Dispose of leftover bait in the trash.
        </li>
      </ul>
    </section>
  );
}

export function VolumeNote() {
  return (
    <aside className="rounded-card border border-ink/10 bg-ink/5 px-4 py-3 text-sm text-ink/85">
      <h2 className="font-display text-xl text-ink">Not in this volume</h2>
      <p className="mt-2">
        This pocket guide is bank and handmade-gear fishing. It does not teach boat operation or
        ice fishing. If you go on ice, learn local ice-thickness rules from a trusted local source
        before you step out. If you use a boat, follow Coast Guard and state boating rules. When
        the boat is underway, wear a properly fitted, Coast Guard–approved life jacket. Federal
        rules generally require children under 13 to wear one on an underway vessel, subject to
        the stated exceptions and to state rules, which can be stricter.
      </p>
    </aside>
  );
}
