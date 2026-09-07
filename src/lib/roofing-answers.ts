// Supporting sources were checked on 7 September 2026. These are not endorsements.
export const roofingSources = {
  rcabc: { name: "RCABC homeowner questions", url: "https://www.rcabc.org/faq/" },
  worksafe: { name: "WorkSafeBC clearance letters", url: "https://www.worksafebc.com/en/insurance/why-clearance-letter" },
  iko: { name: "IKO installation and warranty documents", url: "https://www.iko.com/na/document-library/" },
};

export const serviceAnswers: Record<string, { question: string; answer: string; reference: string; source: keyof typeof roofingSources }> = {
  "roof-repair": {
    question: "Does a leaking roof need repair or replacement?",
    answer: "A leak does not automatically mean you need a new roof. Start with an assessment of the entry point and surrounding roof. A repair may suit a localized fault; wider deterioration needs a replacement discussion. For a Cloverdale, BC property, share when the leak appears and any previous repair history.",
    reference: "The Roofing Contractors Association of BC says a leaking roof may need repair rather than replacement and recommends a professional assessment.",
    source: "rcabc",
  },
  "roof-replacement": {
    question: "What should a roof replacement proposal explain?",
    answer: "A roof replacement proposal should explain why replacement is recommended, which roof sections are included, what will be removed, the new roofing system, and how concealed damage will be handled. For your Cloverdale, BC home, compare the same written scope before comparing totals.",
    reference: "RCABC recommends written roofing-system specifications, payment terms, details of reused components, and warranty terms.",
    source: "rcabc",
  },
  "cedar-roof-conversion": {
    question: "What is a cedar roof conversion?",
    answer: "A cedar roof conversion replaces an existing cedar roof with a different roofing system. The proposal should cover removal, inspection of the supporting deck, preparation for the selected material, flashing, and ventilation. The condition of your Cloverdale, BC roof determines the work; a material choice alone cannot establish the scope.",
    reference: "Ask for the selected product’s current installation instructions and warranty. IKO’s document library is one example of manufacturer documentation available for that check.",
    source: "iko",
  },
  "roof-inspection": {
    question: "What can a roof inspection tell you?",
    answer: "A roof inspection can document accessible roof conditions, investigate visible concerns, and help prioritize repairs or replacement. Agree on access, photos, a written report, and any limits before the visit. If contractors give conflicting recommendations, an independent assessment can help you compare them.",
    reference: "RCABC suggests an independent roof observer when repair and replacement recommendations conflict. Its advice also distinguishes an inspection from an installation quote.",
    source: "rcabc",
  },
};
