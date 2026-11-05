import { useState } from "react";
import { Check, TriangleAlert } from "lucide-react";

export const btn =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-river px-5 font-semibold text-paper transition-transform duration-150 ease-out hover:bg-ink active:scale-[0.96] disabled:opacity-50";

export const btnGhost =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-ink/15 bg-paper px-5 font-semibold text-ink transition-colors duration-150 hover:border-river hover:text-river active:scale-[0.96]";

export function Plate({
  src,
  alt,
  wide = false,
}: {
  src: string;
  alt: string;
  wide?: boolean;
}) {
  const [failed, setFailed] = useState(false);
  return (
    <figure
      className={`overflow-hidden rounded-card bg-river ${wide ? "aspect-video" : "aspect-plate"}`}
    >
      {failed ? (
        <div className="h-full w-full" role="img" aria-label={alt} />
      ) : (
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover"
          onError={() => setFailed(true)}
        />
      )}
    </figure>
  );
}

export function CheckRow({
  checked,
  label,
  note,
  onToggle,
}: {
  checked: boolean;
  label: string;
  note?: string;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      role="checkbox"
      aria-checked={checked}
      onClick={onToggle}
      className="flex min-h-11 w-full items-start gap-3 rounded-card border border-ink/10 bg-paper px-3 py-3 text-left transition-colors duration-150 hover:border-river active:scale-[0.96]"
    >
      <span
        className={`mt-0.5 grid size-5 shrink-0 place-items-center rounded border ${
          checked ? "border-river bg-river text-paper" : "border-ink/30 bg-paper"
        }`}
        aria-hidden="true"
      >
        {checked ? <Check className="size-3.5" strokeWidth={2.5} /> : null}
      </span>
      <span>
        <span className={`block font-semibold ${checked ? "text-ink/50 line-through" : ""}`}>
          {label}
        </span>
        {note ? <span className="mt-0.5 block text-sm text-ink/70">{note}</span> : null}
      </span>
    </button>
  );
}

export function LawNote({ children }: { children: string }) {
  return (
    <aside className="flex gap-3 border-l-2 border-copper bg-ink/5 px-4 py-3 text-sm text-ink">
      <TriangleAlert className="mt-0.5 size-4 shrink-0 text-copper" aria-hidden="true" />
      <p>{children}</p>
    </aside>
  );
}
