import { A1, A2, A3, ElementProps, HslValues, PrimeElement, Skillchain } from "./types"

const Skillchains: Record<(A1 | A2 | A3), Skillchain> = {
  "Impaction": {
    level: 1,
    elements: ["Lightning"],
    chains: {
      "Liquefaction": "Liquefaction",
      "Detonation": "Detonation",
    }
  },
  "Scission": {
    level: 1,
    elements: ["Earth"],
    chains: {
      "Liquefaction": "Liquefaction",
      "Detonation": "Detonation",
      "Reverbation": "Reverbation",
    }
  },
  "Reverbation": {
    level: 1,
    elements: ["Water"],
    chains: {
      "Impaction": "Impaction",
      "Induration": "Induration",
    }
  },
  "Compression": {
    level: 1,
    elements: ["Dark"],
    chains: {
      "Detonation": "Detonation",
      "Transfixion": "Transfixion",
    }
  },
  "Liquefaction": {
    level: 1,
    elements: ["Fire"],
    chains: {
      "Scission": "Scission",
      "Impaction": "Impaction",
    }
  },
  "Induration": {
    level: 1,
    elements: ["Ice"],
    chains: {
      "Impaction": "Impaction",
      "Compression": "Compression",
      "Reverbation": "Fragmentation",
    }
  },
  "Detonation": {
    level: 1,
    elements: ["Wind"],
    chains: {
      "Scission": "Scission",
      "Compression": "Gravitation",
    }
  },
  "Transfixion": {
    level: 1,
    elements: ["Light"],
    chains: {
      "Reverbation": "Reverbation",
      "Compression": "Compression",
      "Scission": "Distortion",
    }
  },

  /* Level 2 */
  "Distortion": {
    level: 2,
    elements: ["Water", "Ice"],
    chains: {
      "Fusion": "Fusion",
      "Gravitation": "Darkness",
    }
  },
  "Gravitation": {
    level: 2,
    elements: ["Dark", "Earth"],
    chains: {
      "Fragmentation": "Fragmentation",
      "Distortion": "Darkness",
    }
  },
  "Fusion": {
    level: 2,
    elements: ["Light", "Fire"],
    chains: {
      "Gravitation": "Gravitation",
      "Fragmentation": "Light",
    }
  },
  "Fragmentation": {
    level: 2,
    elements: ["Lightning", "Wind"],
    chains: {
      "Distortion": "Distortion",
      "Fusion": "Light",
    }
  },

  /* Level 3 */
  "Light": {
    level: 3,
    elements: ["Light", "Fire", "Lightning", "Wind"],
    chains: {
      "Light": "Light II"
    }
  },
  "Darkness": {
    level: 3,
    elements: ["Dark", "Earth", "Water", "Ice"],
    chains: {
      "Darkness": "Darkness II"
    }
  }
}

const Elements: ElementProps = {
  "Lightning": {
    color: { h: 300, s: 100, l: 25 }
  },
  "Wind": {
    color: { h: 120, s: 100, l: 25 }
  },
  "Earth": {
    color: { h: 45, s: 100, l: 40 }
  },
  "Fire": {
    color: { h: 0, s: 100, l: 50 }
  },
  "Water": {
    color: { h: 240, s: 100, l: 50 }
  },
  "Ice": {
    color: { h: 195, s: 100, l: 60 }
  },
  "Light": {
    color: { h: 0, s: 0, l: 50 }
  },
  "Dark": {
    color: { h: 0, s: 0, l: 0 }
  },
}

// const Elements: ElementProps = {
//   "Lightning": {
//     color: { hsl: [300, 100, 25], name: "indigo" }
//   },
//   "Wind": {
//     color: { hsl: [120, 100, 25], name: "green" }
//   },
//   "Earth": {
//     color: { hsl: [45, 100, 40], name: "amber" }
//   },
//   "Fire": {
//     color: { hsl: [0, 100, 50], name: "red" }
//   },
//   "Water": {
//     color: { hsl: [240, 100, 50], name: "blue" }
//   },
//   "Ice": {
//     color: { hsl: [195, 100, 60], name: "cyan" }
//   },
//   "Light": {
//     color: { hsl: [0, 0, 50], name: "zinc" }
//   },
//   "Dark": {
//     color: { hsl: [0, 0, 0], name: "gray" }
//   },
// }

const getHsl = (v: HslValues) => {
  return `hsl(${v.h}, ${v.s}%, ${v.l}%)`
}

const SkillchainOptions = Object.entries(Skillchains).map(([k, v]) => ({
  label: k,
  value: k,
  elements: v.elements.map(e => Elements[e])
}))

export { Elements, getHsl, SkillchainOptions, Skillchains }