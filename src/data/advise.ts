import { getMethod, type Method } from "@/data/guide";

export type Water = "creek" | "pond" | "river" | "tidal";
export type Window = "hour" | "afternoon" | "overnight" | "tide";
export type Quarry = "baitfish" | "panfish" | "catfish" | "any";
export type GearId =
  | "bottle"
  | "cord"
  | "sticks"
  | "stones"
  | "hook"
  | "line"
  | "bait"
  | "knife";

export type Answers = {
  water: Water;
  window: Window;
  quarry: Quarry;
  gear: GearId[];
};

export type Pick = {
  method: Method;
  score: number;
  reasons: string[];
  gap: string | null;
};

const gaps: Record<string, { gear: GearId; line: string } | null> = {
  bottle: {
    gear: "bottle",
    line: "You still need a plastic bottle. Any one- or two-liter soda bottle is the trap.",
  },
  basket: {
    gear: "sticks",
    line: "You need a bundle of green shoots and something to lash them. The bank usually has both if you look past the path.",
  },
  weir: {
    gear: "sticks",
    line: "The wing is made of stakes and leafy brush from this creek. Don't dam it, and don't start if you can't wade the edge.",
  },
  tidal: {
    gear: "stones",
    line: "Use stones already on the flat. If the flat is sand and nothing else, this corral isn't here — fish a hook on the ebb instead.",
  },
  hook: {
    gear: "hook",
    line: "Carry a proper hook. A bent pin or a nail is not a substitute — it is unreliable and can injure you or the fish. Without a real hook, do not improvise a point.",
  },
  gorge: {
    gear: "knife",
    line: "You need a knife, line, and bait, and a fish you intend to eat. Otherwise this is the wrong page.",
  },
};

export function advise(answers: Answers): { lead: Pick; alt: Pick | null; thin: boolean } {
  const has = (gear: GearId) => answers.gear.includes(gear);

  const ranked = (
    [
      () => {
        let score = 0;
        const reasons: string[] = [];
        const add = (n: number, why?: string) => {
          score += n;
          if (why && n > 0) reasons.push(why);
        };
        if (has("hook") && (has("line") || has("cord"))) {
          add(
            8,
            "You already have a hook and something to tie it to. That beats building for a single meal.",
          );
        } else if (has("hook")) {
          add(4, "A hook without line still needs cord or monofilament. The stick can wait.");
        }
        if (has("bait")) add(2, "Bait in hand means the first likely lie is worth a cast.");
        if (answers.window === "hour") {
          add(3, "An hour is a hook's window. Traps are still filling, and a weir is still a pile of sticks.");
        }
        if (answers.window === "afternoon") add(1);
        if (answers.quarry === "panfish") {
          add(3, "Panfish are the hook's home game — a worm or a pinch of bread under a float.");
        }
        if (answers.quarry === "catfish" && answers.window !== "overnight") {
          add(1, "Catfish will take a bait on the bottom well before a basket could be woven.");
        }
        if (answers.quarry === "baitfish") {
          score -= 2;
        }
        if (answers.water === "tidal") {
          add(1, "A tidal edge still feeds a baited hook between the times you could build a wall.");
        }
        if (answers.quarry === "any" && !has("hook")) {
          add(0);
        }
        return { id: "hook", score, reasons };
      },
      () => {
        let score = 0;
        const reasons: string[] = [];
        const add = (n: number, why?: string) => {
          score += n;
          if (why && n > 0) reasons.push(why);
        };
        if (!has("hook") && has("knife") && (has("line") || has("cord")) && has("bait")) {
          add(
            7,
            "No metal hook, but a knife, line, and bait. A gorge is a harvest tool you can make before the light goes — only if you mean to keep the fish.",
          );
        }
        if (has("hook")) score -= 8;
        if (!has("bait")) score -= 2;
        return { id: "gorge", score, reasons };
      },
      () => {
        let score = 0;
        const reasons: string[] = [];
        const add = (n: number, why?: string) => {
          score += n;
          if (why && n > 0) reasons.push(why);
        };
        if (has("bottle")) {
          add(5, "The bottle is the trap. Everything else is lashing and a pinch of bait.");
        } else {
          score -= 2;
        }
        if (answers.quarry === "baitfish") {
          add(4, "Minnows and shiners are what a bottle funnel actually catches — and only where a trap of this kind is legal for those fish. Sunfish are often not a legal trap target.");
        }
        if (answers.water === "pond" || answers.water === "creek") {
          add(2, "Still edges and slow creeks are where small fish patrol a scent trail.");
        }
        if (answers.water === "river") add(1);
        if (answers.water === "tidal") score -= 3;
        if (answers.window === "hour") score -= 1;
        if (answers.window === "afternoon" || answers.window === "overnight") add(1);
        if (has("bait")) add(1);
        return { id: "bottle", score, reasons };
      },
      () => {
        let score = 0;
        const reasons: string[] = [];
        const add = (n: number, why?: string) => {
          score += n;
          if (why && n > 0) reasons.push(why);
        };
        if (answers.quarry === "catfish") {
          add(4, "Catfish, bullhead, and eel hunt by smell and will commit to a dark funnel.");
        }
        if (answers.window === "overnight") {
          add(4, "An overnight set is only a candidate if this water allows an unattended trap, with the tag and the check schedule that rule names. If you cannot quote that rule, do not leave it.");
        }
        if (answers.window === "hour") score -= 4;
        if (has("sticks") && has("cord")) {
          add(3, "Shoots and cord are enough to lash a slat trap before dusk.");
        }
        if (!has("sticks")) score -= 2;
        if (has("knife")) add(1);
        if (answers.water === "river" || answers.water === "pond") {
          add(2, "Slow river and pond margins are basket water. The fish walk the bank at night.");
        }
        if (answers.water === "creek") add(1);
        if (answers.water === "tidal") score -= 2;
        return { id: "basket", score, reasons };
      },
      () => {
        let score = 0;
        const reasons: string[] = [];
        const add = (n: number, why?: string) => {
          score += n;
          if (why && n > 0) reasons.push(why);
        };
        if (answers.water === "creek") {
          add(6, "A wadeable creek is the only place a brush wing earns its branches — and only if that creek's rules let you put brush in the water.");
        } else {
          score -= 3;
        }
        if (has("sticks")) {
          add(3, "Brush on the bank is the wall. You don't carry this method in.");
        }
        if (answers.window === "afternoon") {
          add(2, "You have time to weave a wing and walk the fish down into it.");
        }
        if (answers.window === "hour" || answers.window === "overnight") score -= 2;
        if (answers.water === "tidal") score -= 5;
        if (answers.quarry === "any" || answers.quarry === "panfish" || answers.quarry === "baitfish") {
          add(1);
        }
        return { id: "weir", score, reasons };
      },
      () => {
        let score = 0;
        const reasons: string[] = [];
        const add = (n: number, why?: string) => {
          score += n;
          if (why && n > 0) reasons.push(why);
        };
        if (answers.water === "tidal") {
          add(6, "The tide is the gear. A low stone wall turns the ebb into a corral only where a new wall is legal. Many shores ban it, and old walls are not yours to change.");
        } else {
          score -= 8;
        }
        if (answers.window === "tide") {
          add(4, "You need the falling water. Set on the dry flat, take fish as the sea leaves.");
        }
        if (answers.window === "afternoon") add(1);
        if (answers.window === "hour") score -= 3;
        if (has("stones")) {
          add(2, "Stones in hand, or underfoot, are the whole material list.");
        } else if (answers.water === "tidal") {
          add(1, "A real flat usually supplies the stones. Sand alone does not.");
        }
        return { id: "tidal", score, reasons };
      },
    ] as const
  ).map((run) => run());

  ranked.sort((a, b) => b.score - a.score);

  const toPick = (row: { id: string; score: number; reasons: string[] }): Pick => {
    const method = getMethod(row.id);
    if (!method) throw new Error(`Missing method ${row.id}`);
    const reasons =
      row.reasons.length > 0
        ? row.reasons.slice(0, 3)
        : ["It's the least-wrong start for the time and water you marked."];
    const need = gaps[row.id];
    const gap = need && !has(need.gear) ? need.line : null;
    return { method, score: row.score, reasons, gap };
  };

  const lead = toPick(ranked[0]);
  const runner = ranked[1];
  const alt =
    runner && runner.score >= 4 && runner.score >= lead.score - 6 ? toPick(runner) : null;

  return { lead, alt, thin: lead.score < 4 };
}
