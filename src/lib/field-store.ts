import { create } from "zustand";
import { persist } from "zustand/middleware";

type FieldState = {
  kit: Record<string, boolean>;
  steps: Record<string, boolean>;
  toggleKit: (id: string) => void;
  toggleStep: (id: string) => void;
  pack: (ids: string[]) => void;
};

export const useField = create<FieldState>()(
  persist(
    (set) => ({
      kit: {},
      steps: {},
      toggleKit: (id) =>
        set((s) => ({ kit: { ...s.kit, [id]: !s.kit[id] } })),
      toggleStep: (id) =>
        set((s) => ({ steps: { ...s.steps, [id]: !s.steps[id] } })),
      pack: (ids) =>
        set((s) => {
          const kit = { ...s.kit };
          for (const id of ids) kit[id] = true;
          return { kit };
        }),
    }),
    { name: "catchcraft-field", skipHydration: true },
  ),
);
