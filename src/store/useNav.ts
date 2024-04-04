import { create } from "zustand";

type TItemsAccordion = {
  title: string;
  description: string | string[];
};

type TState = {
  items: TItemsAccordion[];
  currentItem: TItemsAccordion;
};

type Tacion = {
  nextItem: () => void;
  prevItem: () => void;
};

const itemsTemps: TItemsAccordion[] = [
  {
    title: "nose",
    description: "describir nose",
  },
  {
    title: "nose2",
    description: ["sub-nose"],
  },
];

export const useNav = create<TState & Tacion>((set, get) => ({
  items: itemsTemps,
  currentItem: itemsTemps[0],
  nextItem: () => {
    const currentIndex = get().items.indexOf(get().currentItem);
    const nextIndex = (currentIndex + 1) % get().items.length;
    set({ currentItem: get().items[nextIndex] });
  },
  prevItem: () => {
    const currentIndex = get().items.indexOf(get().currentItem);
    const prevIndex =
      (currentIndex - 1 + get().items.length) % get().items.length;
    set({ currentItem: get().items[prevIndex] });
  },
}));
