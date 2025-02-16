import { Job, Weapons } from "./types"

const Jobs: Job[] = ["Warrior", "Monk", "Thief", "White Mage", "Red Mage", "Black Mage", "Paladin", "Dark Knight", "Beastmaster", "Bard", "Ranger", "Samurai", "Ninja", "Dragoon", "Summoner"]

// Need to remove the Partial<> when finished!
const WeaponSkills: Partial<Weapons> = {
  "Archery": {
    jobs: {
      "Ranger": { main: 269, sub: 114 },
      "Samurai": { main: 230, sub: 105 },
      "Thief": { main: 220, sub: 105 },
      "Red Mage": { main: 210, sub: 101 },
      "Warrior": { main: 210, sub: 101 },
      "Ninja": { main: 200, sub: 94 },
    },
    skills: [
      {
        name: "Flaming Arrow",
        level: 5,
        skillchains: ["Liquefaction", "Transfixion"],
        main: ["Ranger"]
      },
      {
        name: "Piercing Arrow",
        level: 40,
        skillchains: ["Induration", "Transfixion"],
        main: ["Ranger"]
      }
    ]
  }
}

