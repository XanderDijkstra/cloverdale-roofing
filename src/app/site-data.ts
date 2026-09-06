export const locations = [
  {
    slug: "cloverdale",
    title: "Cloverdale",
    short: "We repair and replace roofs across Cloverdale, from town-centre neighbourhoods to rural properties.",
    intro: "We provide roof inspections, repairs, replacements, and cedar conversions for homeowners across Cloverdale.",
    considerations: [
      "Long wet periods and repeated rainfall",
      "Roof valleys, flashings, gutters, and drainage paths",
      "A mix of shingle and aging cedar roof systems",
    ],
  },
  {
    slug: "clayton-heights",
    title: "Clayton Heights",
    short: "We provide roofing services for homes and townhouses throughout Clayton Heights.",
    intro: "We inspect, repair, and replace residential roofs in Clayton Heights with careful property protection and cleanup.",
    considerations: [
      "Property access and neighbouring homes",
      "Drainage details through long wet seasons",
      "Clear staging and cleanup planning",
    ],
  },
  {
    slug: "south-surrey",
    title: "South Surrey",
    short: "We help South Surrey homeowners assess leaks, plan roof repairs, and review replacement options.",
    intro: "We assess roofing problems across South Surrey and recommend the repair or replacement your home actually needs.",
    considerations: [
      "Shingle, cedar, and low-slope roof details",
      "Wind-driven rain at exposed roof transitions",
      "Ventilation and drainage as one roof system",
    ],
  },
  {
    slug: "langley-border",
    title: "Nearby Langley",
    short: "We serve homes and rural properties near Cloverdale's eastern edge and the Langley border.",
    intro: "Tell us where your property is and what is happening with the roof. We will confirm coverage and arrange the right assessment.",
    considerations: [
      "Confirming the property is within practical coverage",
      "Exposure, access, and debris around the roof",
      "A scope that reflects the complete roof condition",
    ],
  },
] as const;

export type Location = (typeof locations)[number];
