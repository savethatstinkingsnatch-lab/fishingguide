import { createFileRoute, Link } from "@tanstack/react-router";
import { KeepingBox, VolumeNote } from "@/components/notes";

export const Route = createFileRoute("/safe")({
  head: () => ({
    meta: [{ title: "Stay safe on the water — Fishing: Catchcraft" }],
  }),
  component: SafePage,
});

const rules = [
  "License: Buy and carry a valid fishing license. Kids' rules vary by age and state.",
  "Adults in charge: Children fish with an adult. An adult handles hooks, knives, and fish that will be killed.",
  "Life jacket: Wear a life jacket (PFD) in a boat, and strongly consider one when wading deep, swift, or cold water. Non-swimmers and kids wear one at the water's edge too.",
  "Weather: Leave the water if thunder is near. Rising muddy water and ice shelves are danger, not adventure. Cold water can kill even strong swimmers.",
  "Hooks in skin: If a hook is deep, near an eye, or in a joint, do not cut or push it yourself. Go to urgent care or an ER. For a shallow hook in soft skin, many people seek clinic help rather than home surgery. Call Poison Control at 1-800-222-1222 only if a chemical or bait toxin is involved — for embedded hooks, medical care is the path.",
  "Never leave a baited hook or trap unattended where a person, pet, or wildlife can step on it.",
];

function SafePage() {
  return (
    <main id="content" className="mx-auto max-w-3xl px-5 py-8 md:py-12">
      <p className="text-sm font-semibold tracking-wide text-river uppercase">Before you fish</p>
      <h1 className="mt-2 font-display text-4xl md:text-5xl">Stay safe on the water</h1>
      <ul className="mt-6 space-y-3">
        {rules.map((rule) => (
          <li key={rule} className="border-l-2 border-copper pl-3 text-ink/85">
            {rule}
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <KeepingBox />
      </div>
      <div className="mt-4">
        <VolumeNote />
      </div>
      <p className="mt-8">
        <Link to="/start" className="font-semibold text-river">
          New to this? Start here
        </Link>
      </p>
    </main>
  );
}
