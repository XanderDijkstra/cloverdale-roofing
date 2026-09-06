import { services } from "./site";

type ServiceContent = {
  description: string;
  heading: string;
  overview: string;
  signs: string[];
  steps: { title: string; text: string }[];
  decisions: { title: string; text: string }[];
  quote: string;
  limitations: string;
  faqs: { question: string; answer: string }[];
};

export const serviceContent: Record<(typeof services)[number]["slug"], ServiceContent> = {
  "roof-repair": {
    description: "Roof leak tracing, flashing repairs, and damaged shingle replacement in Cloverdale and Surrey. Understand the cause, repair scope, and next steps.",
    heading: "Fix the cause of the leak.",
    overview: "Water can travel before it shows up on a ceiling. We start with what you have noticed, inspect the likely entry points, and check whether the surrounding roof is still serviceable. A useful repair recommendation explains both the failed detail and the condition of the roof around it.",
    signs: ["A ceiling stain that changes after rainfall", "Missing, lifted, or damaged shingles", "Water around a chimney, skylight, or roof vent", "A leak that returns after an earlier repair"],
    steps: [
      { title: "Understand when it leaks", text: "Tell us where water appears, when it started, and whether wind or prolonged rain makes it worse. Previous repair records can help narrow the investigation." },
      { title: "Inspect the entry points", text: "We review the accessible roof surface and vulnerable details such as vents, valleys, and flashing. The stain inside is a clue, not proof of the entry point." },
      { title: "Agree the repair boundary", text: "Review the proposed repair, the materials involved, and any surrounding deterioration. If another repair would only postpone broader work, that belongs in the discussion." },
      { title: "Review the completed work", text: "The scope should identify what was repaired and any remaining concerns. Ask what to watch for after rainfall and how to report a recurring issue." },
    ],
    decisions: [
      { title: "When a targeted repair fits", text: "One damaged area or a failed flashing detail may be repairable when the rest of the roof remains sound. The condition around the problem matters more than the size of the visible stain." },
      { title: "When to assess replacement", text: "Leaks in several places, widespread wear, or a history of repeated repairs call for a whole-roof review. We can explain the tradeoff before you commit to another isolated fix." },
    ],
    quote: "Repair cost depends on the source of the leak, access, roof pitch, materials, and the extent of damage beneath the covering. A quote should identify investigation, the proposed repair, and how additional work would be agreed if hidden damage is found.",
    limitations: "Interior ceiling repairs, gutter work, chimney masonry, and structural repairs are not automatically included in a roof repair. Confirm the boundary of the roofing work in the written scope. Visit timing and weather suitability are confirmed individually; no emergency arrival time is promised.",
    faqs: [
      { question: "Can you quote from a photo?", answer: "A photo may help identify the type of problem, but it cannot reliably establish the source or concealed damage. Share photos taken safely from the ground or inside; the repair scope may still require an on-site assessment." },
      { question: "Will the replacement shingles match?", answer: "That depends on the existing product, its age, weathering, and current availability. Discuss the likely appearance of the repaired section before choosing materials." },
      { question: "Does a ceiling stain always mean a roof leak?", answer: "No. The source needs to be investigated. Roof leaks, condensation, or other building issues can produce similar symptoms, so a stain alone is not enough to specify a repair." },
      { question: "Can you repair the roof while it is raining?", answer: "Weather, roof condition, and safe access affect what work is practical. Describe an active leak when you inquire and confirm availability directly; the form does not book an emergency visit." },
    ],
  },
  "roof-replacement": {
    description: "Residential roof replacement in Cloverdale and Surrey. Review tear-off, decking, flashing, ventilation, material options, and what your quote should include.",
    heading: "A complete roof, with a clear scope.",
    overview: "Replacing a roof is more than choosing a shingle colour. The existing covering, deck, water protection, flashing, and ventilation all need to be considered. We help you understand what is included, what can only be confirmed after removal, and how the work will be organized around your home.",
    signs: ["Deterioration across several roof sections", "Recurring leaks and repeated patch repairs", "A roof history that suggests broader wear", "An inspection recommending a complete system review"],
    steps: [
      { title: "Assess the existing system", text: "Review the visible roof condition, pitch, junctions, and access. Identify what is known and what remains concealed beneath the current covering." },
      { title: "Choose the scope and finish", text: "Discuss suitable materials, underlayment, flashing, ventilation, and appearance together. Confirm the product specification and any exclusions in writing." },
      { title: "Plan removal and installation", text: "Agree access, delivery locations, property protection, debris removal, and weather arrangements. Establish how unexpected deck repairs will be priced and authorized." },
      { title: "Review the handover", text: "Ask for a walkthrough of the completed scope, cleanup, remaining maintenance needs, and the warranty documents applicable to the products and work agreed." },
    ],
    decisions: [
      { title: "Compare systems, not just shingles", text: "Two estimates may use a similar shingle but include different flashing, ventilation, disposal, or deck allowances. Compare each item so you can see what the total actually covers." },
      { title: "Make room for concealed conditions", text: "The full condition of a covered deck may only become clear during removal. Decide in advance how photographs, additional pricing, and your approval will be handled." },
    ],
    quote: "Roof area, pitch, access, layers to remove, valleys, skylights, chimneys, and the chosen system affect the price. Ask whether disposal, site protection, taxes, and any deck allowance are included. A site-specific written quote is more useful than a generic price per roof.",
    limitations: "The final schedule depends on the agreed scope, material availability, access, and weather. Structural alterations, interior repairs, gutters, and unrelated building work need their own agreed scope. Warranty duration and coverage must be confirmed for the actual products and installation; no blanket warranty term is stated here.",
    faqs: [
      { question: "How long will a replacement take?", answer: "That depends on the roof size, complexity, access, deck condition, and weather. Confirm an estimated schedule after assessment, including what happens if weather or concealed damage changes the plan." },
      { question: "Do I need to leave my home?", answer: "Discuss access and household needs before work begins. Roofing can involve noise, deliveries, and restricted areas around the building; arrangements depend on the property and the scope." },
      { question: "Is ventilation included?", answer: "Ventilation should be reviewed as part of the roof system. The quote needs to explain what is being retained or changed and which areas could be inspected, rather than relying on a general promise." },
      { question: "What happens if the deck is damaged?", answer: "Agree the procedure before removal: document the condition, explain the required repair, and obtain authorization for additional work. The original quote should state its assumptions and allowances." },
    ],
  },
  "cedar-roof-conversion": {
    description: "Cedar roof conversion in Cloverdale and Surrey. Understand removal, deck preparation, ventilation, replacement materials, and conversion quote factors.",
    heading: "Start beneath the cedar.",
    overview: "An aging cedar roof can raise questions about maintenance, appearance, and what comes next. A conversion starts by assessing the existing construction and choosing an appropriate replacement system. The deck and ventilation need to suit that system; putting a new finish over unresolved conditions is not a complete plan.",
    signs: ["Worn or damaged cedar across the roof", "Recurring maintenance with uncertain remaining condition", "Leaks around cedar roof transitions", "A planned change in roof appearance or material"],
    steps: [
      { title: "Review the cedar and structure", text: "Assess the accessible roof and understand the existing construction. Identify what can be checked before removal and which deck conditions remain unknown." },
      { title: "Compare replacement options", text: "Discuss asphalt shingles and any other proposed finish in relation to pitch, appearance, deck requirements, and the product specification." },
      { title: "Define preparation and removal", text: "The scope should address cedar removal, disposal, deck preparation, water protection, ventilation, and flashing. Set out the approval process for concealed repairs." },
      { title: "Install and review the system", text: "Review the completed work against the agreed specification, including transitions and cleanup. Keep the selected product details and applicable warranty information." },
    ],
    decisions: [
      { title: "Appearance and practical fit", text: "A new material changes the roof's texture and profile. Review samples and any property appearance requirements before ordering, especially if a strata or other approval applies." },
      { title: "Deck preparation is part of conversion", text: "The support beneath an existing cedar roof may need preparation for the proposed covering. The assessment and quote should explain the approach and separate known work from concealed repairs." },
    ],
    quote: "The existing construction, removal and disposal, roof complexity, deck preparation, ventilation, flashing, and chosen finish all affect the conversion price. Compare the complete conversion scope rather than treating it as a shingle-only installation.",
    limitations: "Suitability must be confirmed for the roof and selected product. Structural changes, appearance approvals, and concealed timber repairs are not assumed to be included unless the scope says so. Keep any product and workmanship warranty terms separate and confirm them in writing.",
    faqs: [
      { question: "Can shingles be installed directly over the cedar?", answer: "The proposed system needs a suitable supporting deck and preparation. Our conversion discussion starts with cedar removal and an assessment beneath it; do not assume an overlay is an equivalent scope." },
      { question: "Will the whole deck need replacing?", answer: "That cannot be determined from the roof material alone. Existing construction and condition need to be assessed, and some areas may only be visible after removal. The quote should state the preparation included and how extra repairs are handled." },
      { question: "Can the new roof retain a shake-like appearance?", answer: "Ask about the finishes available for your roof and compare samples. Any suggested product needs to be appropriate for the roof construction and pitch; appearance alone is not enough to choose a system." },
      { question: "Should I repair the cedar or convert it?", answer: "Consider how widespread the deterioration is, the history of repairs, and the condition beneath the covering. An isolated issue and a broadly worn roof lead to different recommendations." },
    ],
  },
  "roof-inspection": {
    description: "Roof inspections in Cloverdale and Surrey for leaks, maintenance, and home purchases. Understand accessible checks, priorities, limitations, and next steps.",
    heading: "Understand the roof before deciding on work.",
    overview: "An inspection should help you make a practical decision: investigate a leak, plan maintenance, compare repair with replacement, or understand a roof before buying a property. Tell us the purpose of the visit so we can confirm the scope and explain the limits of what can be assessed.",
    signs: ["An unexplained stain or a suspected leak", "A roof with an unclear repair or maintenance history", "Visible damage noticed from the ground", "A purchase or maintenance decision that needs roof information"],
    steps: [
      { title: "Set the purpose of the visit", text: "Share your concern, roof history, property address, and any deadline. Confirm access permission and the inspection scope before relying on an appointment." },
      { title: "Review accessible areas", text: "The assessment can cover the roof surface, penetrations, flashing, and accessible ventilation details. Weather and safe access may limit what can be observed." },
      { title: "Explain the findings", text: "Review visible concerns and supporting photos, separating immediate items from work that can be planned. Any inaccessible areas or uncertainties should be made clear." },
      { title: "Choose the next step", text: "Depending on the findings, the next step may be monitoring, a defined repair, further investigation, or a replacement quote. An inspection is not automatically a recommendation to replace." },
    ],
    decisions: [
      { title: "Buying a property", text: "Confirm access, the deadline, and the type of information you need. A roofing assessment is not a substitute for a whole-building inspection or a guarantee about concealed conditions." },
      { title: "Planning maintenance", text: "Bring previous reports and repair records if available. A useful assessment helps prioritize what to address now and what to revisit, without inventing an exact remaining roof lifespan." },
    ],
    quote: "The purpose of the inspection, roof complexity, safe access, buildings involved, and any requested documentation affect the scope. Confirm the visit fee, what is included, and whether further investigation would need a separate agreement before scheduling.",
    limitations: "An inspection reports on what can be safely accessed and observed within the agreed scope. It does not automatically include opening concealed areas, structural engineering, interior repairs, or a guarantee that the roof will never leak. Confirm whether attic access or a particular written report is included.",
    faqs: [
      { question: "Is a roof inspection free?", answer: "No universal free-inspection offer is stated here. Confirm the visit scope and any fee before agreeing to an appointment, particularly for purchase-related reports or additional investigation." },
      { question: "Will I receive photos and a written report?", answer: "Photo documentation and clear recommendations are part of the assessment discussion. If you need a particular written report for a purchase or another purpose, confirm the format and scope before booking." },
      { question: "Can you tell me exactly how many years are left?", answer: "A visible condition assessment can support maintenance decisions, but it cannot guarantee an exact remaining lifespan. Material history, concealed conditions, exposure, and future weather all introduce uncertainty." },
      { question: "Does the inspection include the attic?", answer: "Accessible attic ventilation observations can be included where access is safe and agreed. Mention access arrangements in advance and confirm what the visit will cover." },
    ],
  },
};
