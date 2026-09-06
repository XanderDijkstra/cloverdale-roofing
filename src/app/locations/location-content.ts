type LocationContent = {
  heading: string;
  paragraphs: string[];
  planning: { title: string; text: string }[];
  services: string[];
  preparation: string;
  pricing: string;
  faqs: { question: string; answer: string }[];
};

export const locationContent: Record<string, LocationContent> = {
  cloverdale: {
    heading: "A repair plan for the roof you have.",
    paragraphs: [
      "A ceiling stain, a loose shingle, and a worn cedar roof call for different decisions. For Cloverdale homeowners, the first step is to understand whether the problem is confined to one detail or reflects the condition of the wider roof. We look at the surface, roof penetrations, flashing, and the path water takes off the house.",
      "Tell us whether your property is in a town-centre neighbourhood or on a rural site. Access for ladders, material deliveries, and waste removal should be planned alongside the roofing work. If an addition, garage, or porch connects to the main roof, include that in your request so the junction can be considered too.",
    ],
    planning: [
      { title: "Leaks that return after rain", text: "Explain when water appears and whether the stain changes with wind or prolonged rain. That history helps guide an inspection of valleys, vent boots, and roof-to-wall flashing instead of treating the visible stain as the leak source." },
      { title: "An older cedar roof", text: "If you are considering conversion, the existing deck and ventilation need to be assessed. The quote should distinguish the planned roofing system from any concealed timber repairs discovered after tear-off." },
      { title: "More than one roof surface", text: "A porch or addition may have a different pitch or material from the main house. Tell us about each surface so that drainage and material transitions are included in the assessment." },
    ],
    services: [
      "For an isolated leak or damaged shingles, start with leak tracing and a review of the surrounding roof. Repair makes sense when the remaining system is in serviceable condition.",
      "For widespread wear or recurring failures, review the whole system: deck, underlayment, flashing, shingles, and ventilation. The proposed scope should explain how these work together.",
      "For an aging shake roof, assess the structure beneath the cedar before choosing a replacement finish. Deck preparation and ventilation form part of the conversion discussion.",
      "For a purchase, maintenance decision, or an uncertain roof age, an inspection helps separate immediate concerns from work that can be planned later.",
    ],
    preparation: "Include your Cloverdale address, the roof material if known, and a description of when the issue started. Mention detached buildings or additions separately, and note any restricted driveway access.",
    pricing: "Roof size, pitch, the number of valleys and penetrations, and the condition beneath the covering all affect the scope. A small flashing repair and a full cedar conversion cannot be priced on the same basis. Ask for the proposed work, exclusions, disposal, and the handling of unexpected deck damage to be set out in writing.",
    faqs: [
      { question: "Can a leaking roof be repaired without replacing it?", answer: "Sometimes. A sound roof with one failed flashing or damaged section may be a repair candidate. Repeated leaks across several areas or widespread deterioration need a broader assessment before that decision can be made." },
      { question: "Should I replace cedar with asphalt shingles?", answer: "The choice depends on roof pitch, the supporting deck, ventilation, appearance, and budget. A conversion needs an assessment of what is beneath the cedar; choosing the visible shingle is only part of the job." },
      { question: "Can I include a garage or rural outbuilding?", answer: "Mention each building, its use, and its roof material in your request. We will confirm the scope and access requirements rather than assuming that every building needs the same work." },
      { question: "What should I do before an assessment?", answer: "Record where and when you notice the problem, and share any previous repair information. Photos taken safely from the ground or indoors can help. Leave access to the roof itself to the assessment team." },
    ],
  },
  "clayton-heights": {
    heading: "Plan the roof work around the whole property.",
    paragraphs: [
      "Roofing work in Clayton Heights needs a clear plan for access as well as the roof itself. For a home with a narrow side passage, neighbouring driveway, or shared roofline, let us know how materials and equipment can reach the work area. These details help define a practical scope before work is scheduled.",
      "For townhouses, confirm who is responsible for the roof before arranging work. A concern visible inside one home may involve a shared valley, adjoining roof section, or drainage detail. We can assess the reported roofing issue, while ownership permissions and any strata approvals need to be established for the proposed work.",
    ],
    planning: [
      { title: "Shared rooflines", text: "Tell us whether the affected roof connects to neighbouring units. The inspection needs to consider adjoining flashing and drainage, while the work scope needs clear boundaries and authorization." },
      { title: "Deliveries and property protection", text: "Flag shared lanes, limited parking, landscaping, and narrow access. Material handling and debris removal should be discussed before agreeing to the work, rather than on the day it starts." },
      { title: "Drainage between roof sections", text: "A leak near a wall or valley may involve more than the shingles above the stain. The assessment considers how water moves through connecting sections and away from the building." },
    ],
    services: [
      "Investigate a leak, failed vent flashing, or missing shingles while checking adjoining roof details. Shared roof sections need a clearly agreed repair boundary.",
      "Plan a complete replacement with material staging, neighbouring property protection, and waste removal in mind. For shared buildings, establish approvals and the extent of the roof included.",
      "If your property has cedar, review the deck and replacement options alongside any exterior appearance requirements that apply to the building.",
      "Assess the condition before committing to work. For a townhouse, tell us whether you are the owner, a strata representative, or a property manager so access can be coordinated.",
    ],
    preparation: "Include the unit number, building address, and whether the roof is shared. Note the contact responsible for access or approvals and any parking or delivery restrictions.",
    pricing: "Access, shared roof junctions, protection for adjacent properties, and the area included in the work can affect the quote. Make sure proposals cover the same roof sections and identify any approvals or access arrangements needed before scheduling.",
    faqs: [
      { question: "Can I request an assessment for a townhouse?", answer: "Yes. Include your unit and building address and explain whether you are acting as the owner or for the strata. Confirm who can authorize inspection access and any subsequent work." },
      { question: "Does the strata need to approve the repair?", answer: "Responsibility depends on the property and its governing documents. Check with your strata or property manager before authorizing work on a shared roof or common property. An assessment request does not replace that approval." },
      { question: "What if access is through a shared lane?", answer: "Tell us about lane width, parking restrictions, and neighbouring access needs with your inquiry. These affect delivery, staging, and cleanup planning and should be resolved before a work date is agreed." },
      { question: "Does a leak in one unit mean the whole roof needs replacing?", answer: "Not necessarily. The source and condition of connected roof sections need to be inspected. A localized detail may be repairable; widespread wear may justify planning broader work." },
    ],
  },
  "south-surrey": {
    heading: "Look beyond the shingles at the source of the problem.",
    paragraphs: [
      "For South Surrey homeowners, a useful roofing assessment connects the visible problem with the details that manage water: roof valleys, wall junctions, skylights, and gutters. Let us know if the issue only appears during windy rain or if it persists after a long wet spell. That distinction helps direct the inspection.",
      "If your home combines cedar, shingles, or a lower-pitched addition, each section needs to be considered on its own terms. A repair or replacement recommendation should account for how those surfaces meet, how the roof drains, and what ventilation is accessible to inspect.",
    ],
    planning: [
      { title: "Exposed transitions", text: "Describe any leaks around skylights, dormers, or walls, particularly those associated with wind-driven rain. Flashing and transitions need to be reviewed along with the main roof covering." },
      { title: "Trees and roof debris", text: "If branches overhang your home or debris gathers in valleys, mention where it collects. Drainage and access for ongoing maintenance should be part of the conversation about the roof." },
      { title: "Different roof pitches", text: "A lower-pitched extension may require a different system from a steep shingle roof. Identify mixed surfaces in your request so material suitability and connecting details can be assessed." },
    ],
    services: [
      "Trace water entry around penetrations and transitions, then assess whether a targeted repair addresses the cause. Explain any link between the leak and wind direction or rainfall.",
      "Review the complete roof system when deterioration is widespread. Material choice should follow the pitch and design of each roof section, including additions.",
      "Consider replacement finishes together with deck condition, ventilation, and the appearance of your home. Existing cedar needs to be assessed before a conversion scope is finalized.",
      "Get a condition assessment for maintenance planning, a home purchase, or an unexplained stain. Tell us about skylights, additions, or previous repairs that deserve attention.",
    ],
    preparation: "Share your South Surrey address and identify the affected part of the home. Mention skylights, additions, overhanging trees, and whether the leak coincides with particular weather conditions.",
    pricing: "Complex roof shapes, skylights, changes in pitch, and the number of flashing details can matter as much as overall roof area. Compare proposals by the system and details included, not just the shingle name. Access and concealed deck repairs should be discussed separately.",
    faqs: [
      { question: "Why does my roof leak only when it is windy?", answer: "Wind-driven rain can expose a vulnerable junction or flashing detail that stays dry in other conditions. The timing is useful information, but an inspection is needed to identify the actual entry point." },
      { question: "Can you assess a roof with both cedar and shingles?", answer: "Include both materials in your request, along with any additions or lower-pitched sections. The assessment needs to consider each covering and the junctions between them before recommending work." },
      { question: "Do blocked gutters mean I need a new roof?", answer: "A drainage issue alone does not establish that the roof needs replacing. The condition of the roof covering, drainage paths, and adjoining details should be checked to understand the problem." },
      { question: "Can I get advice before buying a home?", answer: "Request a roof inspection and share your purchase timeline and access arrangements. Confirm availability and the intended inspection scope before relying on a visit for a purchase deadline." },
    ],
  },
  "langley-border": {
    heading: "Start with your address. Then plan the assessment.",
    paragraphs: [
      "For properties near Cloverdale's eastern edge and the Langley border, coverage is confirmed by address. Send the property location with your roof concern so we can establish whether the visit is within our practical service area before discussing an appointment.",
      "If you have a rural property, distinguish the main home from a detached garage, workshop, or other building. Roof material, use, access, and surrounding trees may differ between structures. A useful assessment request identifies exactly which building has the problem and how it can be reached.",
    ],
    planning: [
      { title: "Coverage before scheduling", text: "This service area covers properties near the border, rather than a promise of coverage across all of Langley. Provide the full address and confirm availability before making plans around a visit." },
      { title: "Driveways and equipment access", text: "Mention gates, long or narrow driveways, overhead branches, and restrictions on delivery vehicles. Access affects how an assessment and any later work can be organized." },
      { title: "Several buildings, different needs", text: "List the affected structures separately. A house, garage, and outbuilding may need different roofing systems and should not be assumed to fit one replacement specification." },
    ],
    services: [
      "Once coverage is confirmed, describe the affected building and the leak or damage. The assessment can establish whether the problem is localized and suitable for repair.",
      "For a roof near the end of its serviceable life, discuss the building, roof system, and access requirements. Confirm which structures are included in the replacement scope.",
      "For a cedar roof, begin with the existing construction and intended replacement system. Include the building type and any access limitations when requesting an assessment.",
      "Confirm the address and visit availability first, then outline the purpose of the inspection: a leak, maintenance planning, or an upcoming property decision.",
    ],
    preparation: "Send the full address, the specific building involved, and your contact details. Include gate or driveway restrictions and any timing requirements so coverage and practical access can be confirmed together.",
    pricing: "The building's size and roof condition are only part of the scope. Material delivery, access, waste removal, and the number of structures involved also need to be considered. Confirm coverage and any visit arrangements before requesting a detailed project quote.",
    faqs: [
      { question: "Do you cover all of Langley?", answer: "Coverage is confirmed for properties near Cloverdale and the Langley border. Send your full address so we can check the location before arranging an assessment. This page does not promise service throughout Langley." },
      { question: "Can I ask about more than one building?", answer: "Yes. Identify each building and its roof material if known, and say which one has the immediate concern. Coverage, access, and the suitability of the requested work need to be confirmed for the proposed scope." },
      { question: "What information helps for a rural property?", answer: "The full address, directions to the affected building, gate arrangements, and any driveway restrictions help us assess practical access. Ground-level photos may also clarify the building and roof type." },
      { question: "Can you guarantee a same-day visit?", answer: "No same-day or emergency attendance is promised here. Confirm coverage and current availability directly before relying on a visit, particularly if your request is time-sensitive." },
    ],
  },
};
