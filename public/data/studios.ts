import { playerData } from "public/data/playerData";

export interface IStudio {
  studio: string;
  players: string[];
}

export const alltSudios = [
  { studio: "🍅", players: "Tomato" },
  { studio: "🥬", players: "Lettuce" },
  { studio: "🧀", players: "Cheese" },
  { studio: "🥕", players: "Carrot" },
  { studio: "🍌", players: "Banana" },
];

export const initialTabs = playerData;

export function getNextStudio(studios: IStudio[]): IStudio | undefined {
  const existing = new Set(studios);
  return playerData.find((studio) => !existing.has(studio));
}
