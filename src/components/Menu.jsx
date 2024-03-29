import { useStore } from "../hooks/useStore";

export const Menu = () => {
  const [saveWorld, resetWorld] = useStore((state) => [
    state.saveWorld,
    state.resetWorld,
  ]);

  return (
    <div className="menu absolute">
      <button className="minecraft-button" onClick={() => saveWorld()}>
        Save
      </button>
      <button className="minecraft-button" onClick={() => resetWorld()}>
        Reset
      </button>
    </div>
  );
};
