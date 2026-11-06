import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [{ title: "About — Fishing: Catchcraft" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <main id="content" className="mx-auto max-w-3xl px-5 py-8 md:py-12">
      <p className="text-sm font-semibold tracking-wide text-river uppercase">
        The Education Revolution
      </p>
      <h1 className="mt-2 font-display text-4xl md:text-5xl">About and disclaimer</h1>
      <p className="mt-4 text-lg text-ink/85">
        This pocket guide is for learning. It is not a fishing license, a boat safety course, or
        medical advice. You are responsible for following local laws and for every hook and trap
        you set. Blue and the Awesome Dudes are not responsible for injury, tickets, invasive
        species, or illness from eating fish. Part of The Education Revolution pocket guide series.
      </p>
    </main>
  );
}
