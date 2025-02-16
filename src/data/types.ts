/* skillchains.ts */
export type PrimeElement = "Fire" | "Water" | "Ice" | "Wind" | "Earth" | "Lightning" | "Light" | "Dark";
// Attributes by level (1 - 4)
export type A1 = "Liquefaction" | "Reverbation" | "Induration" | "Detonation" | "Scission" | "Impaction" | "Transfixion" | "Compression";
export type A2 = "Distortion" | "Fusion" | "Fragmentation" | "Gravitation";
export type A3 = "Light" | "Darkness";
export type A4 = "Light II" | "Darkness II"

export type Chains =
  | Partial<Record<A1, A1 | A2>>
  | Partial<Record<A2, A2 | A3>>
  | Partial<Record<A3, A4>>

export type Skillchain = {
  level: 1 | 2 | 3;
  elements: PrimeElement[];
  chains: Chains;
}

export type HslValues = {
  h: number;
  s: number;
  l: number;
}

export type ColorProps = {
  color: HslValues;
}

export type ElementProps = Record<PrimeElement, ColorProps>

/* weapon-skills.ts */
export type Job = "Bard" | "Beastmaster" | "Black Mage" | "Dark Knight" | "Dragoon" | "Monk" | "Ninja" | "Paladin" | "Ranger" | "Red Mage" | "Samurai" | "Summoner" | "Thief" | "Warrior" | "White Mage";

export type WeaponType = "Archery" | "Axes" | "Clubs" | "Daggers" | "Great Axes" | "Great Katana" | "Great Swords" | "Hand-to-Hand" | "Katana" | "Polearms" | "Ranged" | "Scythes" | "Swords" | "Staves";

export type Weapons = Record<WeaponType, WeaponProps>

export type WeaponProps = {
  jobs: Partial<Record<Job, JobRating>>;
  skills: SkillRating[];
}

export type JobRating = {
  main: number;
  sub: number; // sub should always be lower than main
}

export type SkillRating = {
  name: string;
  level: number;
  skillchains: (A1 | A2 | A3 | A4)[];
  main?: Job[];
  sub?: Job[];
}