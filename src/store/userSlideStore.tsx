import { Slide } from "@/lib/types"
import { create } from "zustand"
import { persist } from "zustand/middleware"

interface slideState {
  slides: Slide[],
  setSlides: (slides: Slide[]) => void
}
export const useSlideStore = create(
  persist<slideState>((set) => ({
    slides: [],
    setSlides: (slides: Slide[]) => set({ slides }),

  }), {
    name: "slides-storage"
  })
)
