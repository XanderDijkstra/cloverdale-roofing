export const site = {
  name: "Cloverdale Roofing Co.",
  email: "info@fx-media.no",
  region: "Cloverdale, Surrey, BC",
  url: "https://cloverdaleroofingco.com",
};

export const services = [
  {
    slug: "roof-repair",
    title: "Roof repair",
    image: "/images/service-roof-repair-higgsfield.webp",
    imageAlt: "Illustration of plumbing vent flashing on an asphalt shingle roof",
    short: "Find the leak, fix the cause, and protect the structure before the next rainfall.",
    intro: "A roof leak rarely starts where the water appears inside. We trace the path, inspect the vulnerable details, and explain the repair before work begins.",
    includes: ["Leak tracing and roof assessment", "Flashing, vent and valley repairs", "Missing or damaged shingle replacement", "Clear repair photos and next-step advice"],
  },
  {
    slug: "roof-replacement",
    title: "Roof replacement",
    image: "/images/service-roof-replacement-higgsfield.webp",
    imageAlt: "Illustration of an architectural shingle roof after rainfall",
    short: "A complete roofing system planned for Lower Mainland rain, wind, and long wet seasons.",
    intro: "When repair is no longer the sensible choice, we help you select the right materials and install a complete roofing system for your home.",
    includes: ["Full tear-off and deck inspection", "Underlayment, flashing and ventilation review", "Architectural shingle options", "Site protection and thorough cleanup"],
  },
  {
    slug: "cedar-roof-conversion",
    title: "Cedar roof conversion",
    image: "/images/service-cedar-conversion-higgsfield.webp",
    imageAlt: "Illustration of cedar shakes and architectural asphalt shingles",
    short: "Replace an aging cedar roof while respecting the character of your Cloverdale home.",
    intro: "Older cedar roofs can hide moisture damage and ventilation issues. A careful conversion starts with the deck, not with laying new shingles over old problems.",
    includes: ["Cedar tear-off and disposal", "Deck condition assessment", "Modern shingle and synthetic shake options", "Ventilation and flashing upgrades"],
  },
  {
    slug: "roof-inspection",
    title: "Roof inspection",
    image: "/images/service-roof-inspection-higgsfield.webp",
    imageAlt: "Illustrative high-angle view of an asphalt shingle roof in wet weather",
    short: "A practical assessment for buyers, owners, and anyone unsure whether to repair or replace.",
    intro: "You get a plain-language view of the roof condition, the urgent items, and the work that can wait. No automatic replacement pitch.",
    includes: ["Roof surface and penetration check", "Attic ventilation observations where accessible", "Photo documentation", "Prioritized repair recommendations"],
  },
] as const;
