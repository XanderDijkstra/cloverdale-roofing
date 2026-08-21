export const locations = [
  {
    slug: "cloverdale",
    title: "Cloverdale",
    short: "The primary service area, including town-centre neighbourhoods, established homes, and rural properties.",
    intro: "Roofing support across Cloverdale starts with the property, the roof system, and the concern you can see today.",
    considerations: [
      "Long wet periods and repeated rainfall",
      "Roof valleys, flashings, gutters, and drainage paths",
      "A mix of shingle and aging cedar roof systems",
    ],
  },
  {
    slug: "clayton-heights",
    title: "Clayton Heights",
    short: "Roofing assessments for homes and townhouses north of Highway 10.",
    intro: "Clayton Heights roofing work benefits from a clear access, protection, and cleanup plan before the scope begins.",
    considerations: [
      "Property access and neighbouring homes",
      "Drainage details through long wet seasons",
      "Clear staging and cleanup planning",
    ],
  },
  {
    slug: "south-surrey",
    title: "South Surrey",
    short: "Residential roofing support from Grandview to Panorama.",
    intro: "South Surrey homeowners can start with an inspection when the right repair or replacement path is not yet clear.",
    considerations: [
      "Shingle, cedar, and low-slope roof details",
      "Wind-driven rain at exposed roof transitions",
      "Ventilation and drainage as one roof system",
    ],
  },
  {
    slug: "langley-border",
    title: "Nearby Langley",
    short: "Homes and rural properties along Cloverdale's eastern edge.",
    intro: "For properties near the Langley border, the first step is confirming coverage and understanding the roof concern.",
    considerations: [
      "Confirming the property is within practical coverage",
      "Exposure, access, and debris around the roof",
      "A scope that reflects the complete roof condition",
    ],
  },
] as const;

export type Location = (typeof locations)[number];
