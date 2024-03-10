import { nanoid } from "nanoid";
import { create } from "zustand";

export const useStore = create((set) => ({
  texture: "dirt",
  cubes: [
    {
      key: nanoid(),
      pos: [10, 0.5, 10],
      texture: "wood",
    },
  ],
  addCube: (x, y, z) => {
    set((prev) => ({
      cubes: [
        ...prev.cubes,
        {
          key: nanoid(),
          pos: [x, y, z],
          texture: prev.texture,
        },
      ],
    }));
  },
  removeCubes: (x, y, z) => {},
  setTexture: (texture) => {},
  saveWorld: () => {},
  resetWorld: () => {},
}));
