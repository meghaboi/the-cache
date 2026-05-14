const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");

const collections = [
  {
    id: "brainrot",
    name: "The Brainrot Collection",
    kicker: "Linguistic Debris",
    note:
      "Linguistic fragmentation accelerated in the final decade, producing units of meaning that resisted all scholarly translation. The surviving fragments suggested a civilization capable of worship, exhaustion, and sudden repetitive chanting in equal measure.",
  },
  {
    id: "rituals",
    name: "Rituals & Practices",
    kicker: "Observed Behaviours",
    note:
      "The inhabitants performed repeated gestures before handheld oracles, often without clear material benefit. These acts appeared to regulate grief, status, appetite, rivalry, and the hour just before sleep.",
  },
  {
    id: "objects",
    name: "Objects & Relics",
    kicker: "Recovered Instruments",
    note:
      "Certain objects were granted unusual civic power. Some were physical, some entirely symbolic, and several appeared to command obedience despite having no mass, volume, or plausible legal authority.",
  },
  {
    id: "figures",
    name: "Deities & Figures",
    kicker: "Mythic Persons",
    note:
      "The boundary between individual, idol, mascot, and god-king was thin in the late platform-sites. Repetition, not theology, appeared to have produced sanctity.",
  },
  {
    id: "languages",
    name: "Languages & Scripts",
    kicker: "Glyphic Systems",
    note:
      "Inscriptional evidence showed that language had become compact, pictorial, and heavily dependent upon tone markers. Meaning often survived only as a posture toward meaning.",
  },
  {
    id: "events",
    name: "Events & Epochs",
    kicker: "Chronological Ruptures",
    note:
      "The Pre-Collapse record preserved several mass disturbances. Their causes remained debated, though all appeared to involve bread, markets, isolation, or the sudden migration of public declarations.",
  },
];

const artifacts = [
  {
    id: "CAT-2024-0047",
    slug: "skibidi",
    name: "The Skibidi Utterance",
    collection: "brainrot",
    classification: "Linguistic Unit",
    era: "Late Social Media Period, c. 2023-2025 CE (Pre-Collapse)",
    condition: "Fragmentary",
    provenance: "Recovered from Balkan-adjacent video strata; tertiary cache deposits",
    summary: "A chant-form believed to have marked allegiance during juvenile screen rites.",
    description: [
      "The term \"skibidi\" survived primarily in repetition, suggesting a liturgical function rather than ordinary speech. Its repeated pairing with ceramic sanitation vessels led early scholars to classify it as a cleansing hymn, though later work proposed a military origin among short-form video factions.",
      "No stable translation has been accepted. Evidence points to a flexible utterance used for joy, warning, derision, and possibly taxation. The civilization appeared to tolerate this semantic instability with unusual calm.",
    ],
    significance:
      "The utterance demonstrated the late culture's ability to detach sound from conventional meaning while preserving communal force. Its spread indicated that the Sorting Mechanism could consecrate nonsense into civic material.",
    debate:
      "The Cambridge school argued that \"skibidi\" referred to a person. The New Carthage school maintained that it referred to an event, a mood, or a plumbing-adjacent cosmology. Both positions relied on incomplete dance evidence.",
    references: [
      "Mbeki, T. \"Vessel Worship in Late Video Settlements.\" Journal of Netoric Studies, 2086, pp. 44-61.",
      "Arora & Venn. The Toilet Canticles: A Reappraisal. University of New Carthage Press, 2090.",
    ],
  },
  {
    id: "CAT-2024-0051",
    slug: "rizz",
    name: "Rizz",
    collection: "brainrot",
    classification: "Social Force",
    era: "Late Social Media Period, c. 2021-2025 CE (Pre-Collapse)",
    condition: "Well-documented",
    provenance: "Recovered from Atlantic youth dialect clusters",
    summary: "A charisma-substance believed to have influenced mate selection and public confidence.",
    description: [
      "\"Rizz\" appeared in inscriptions describing attraction, persuasion, and the visible possession of social voltage. It was not measured directly, yet individuals were said to possess, lose, steal, or deploy it.",
      "The term may have originated as a contraction of charisma, though contemporary users treated it as a transferable essence. Some fragments recorded \"negative rizz,\" indicating that charisma could invert into a socially repellent field.",
    ],
    significance:
      "Rizz offered scholars a rare index of informal status economics. It suggested that the late internet peoples understood desire as both performance and resource.",
    debate:
      "A minority view held that rizz was a liquid. This interpretation has been rejected except in cases involving documented spilling.",
    references: [
      "Okafor, L. \"Charisma Pellets and Youth Exchange.\" Transactions of the Screen-Culture Society, 2088, pp. 102-118.",
      "Singh, M. \"Negative Rizz and the Failed Courtship Inscription.\" Quarterly Review of Platform Archaeology, 2091, p. 7.",
    ],
  },
  {
    id: "CAT-2024-0063",
    slug: "npc-livestream",
    name: "NPC Livestream Phenomenon",
    collection: "brainrot",
    classification: "Performance Rite",
    era: "Terminal Livestream Period, c. 2022-2024 CE (Pre-Collapse)",
    condition: "Fragmentary",
    provenance: "Recovered from commercial attention pools; creator economy layer",
    summary: "A repeated response ceremony triggered by symbolic offerings.",
    description: [
      "In the NPC livestream rite, a performer responded to purchased glyphs with fixed gestures and phrases. Scholars initially believed the performer had been trapped in a low-sentience state, but payment records confirmed voluntary participation.",
      "The ritual resembled temple exchange: observers offered icons, and the officiant returned predictable blessings. That the blessings included phrases such as \"ice cream so good\" did not reduce their ceremonial seriousness.",
    ],
    significance:
      "The phenomenon revealed the monetization of predictability. It showed that the late civilization could convert repetition into livelihood and confusion into reliable income.",
    debate:
      "",
    references: [
      "Vasquez, D. The Scrolling Civilizations: A Reappraisal. University of New Carthage Press, 2084.",
      "Ibrahim, N. \"Gift Glyph Economies.\" Annals of the Digital Collapse, 2089, pp. 201-223.",
    ],
  },
  {
    id: "CAT-2024-0069",
    slug: "split-screen-video",
    name: "Split-Screen Stimulation Tablet",
    collection: "brainrot",
    classification: "Attention Device",
    era: "Late Algorithmic Period, c. 2022-2025 CE (Pre-Collapse)",
    condition: "Corrupted",
    provenance: "Recovered from vertical video sediment; lower entertainment band",
    summary: "A divided viewing surface combining narrative fragments with kinetic pavement traversal.",
    description: [
      "This format placed one moving narrative above or beside a second, unrelated motion sequence. Common pairings included domestic animated conflict and an endless running game, suggesting viewers required parallel streams to remain spiritually present.",
      "Several damaged files showed three or more simultaneous stimuli before the image collapsed into [DATA CORRUPTED]. The arrangement may have served as an attention splint for citizens injured by abundance.",
    ],
    significance:
      "The split-screen tablet was among the clearest signs that leisure had become a multi-channel burden. It preserved the moment when entertainment required its own entertainment.",
    debate:
      "Some scholars proposed that the lower running sequence represented an underworld journey. Others held that it was simply necessary to keep the viewer from ritual withdrawal.",
    references: [
      "Chen, H. \"Pavement Loops and Narrative Fatigue.\" Journal of Netoric Studies, 2092, pp. 12-34.",
      "Batra & Ellison. \"The Double Window Problem.\" Quarterly Review of Platform Archaeology, 2090, pp. 77-86.",
    ],
  },
  {
    id: "CAT-2024-0102",
    slug: "doomscrolling",
    name: "Doomscrolling",
    collection: "rituals",
    classification: "Ritual",
    era: "Pandemic Isolation Period, c. 2020-2022 CE (Pre-Collapse)",
    condition: "Well-documented",
    provenance: "Recovered from bedside screen-tablet telemetry",
    summary: "A nocturnal distress rite involving downward movement through calamity inscriptions.",
    description: [
      "Doomscrolling described the repeated descent through alarming public declarations, often performed while horizontal and deprived of sleep. The hand moved downward while the spirit moved nowhere.",
      "The ritual appeared self-punitive, yet participants returned nightly. Scholars suggest that the act created an illusion of preparedness, as though reading every disaster might soften the next one.",
    ],
    significance:
      "The practice was central to late emotional governance. It allowed citizens to ingest collapse in portions small enough to fit beneath a thumb.",
    debate:
      "",
    references: [
      "Feld, R. \"Thumb Descent and Civic Dread.\" Annals of the Digital Collapse, 2083, pp. 90-109.",
      "Vasquez, D. The Scrolling Civilizations: A Reappraisal. University of New Carthage Press, 2084.",
    ],
  },
  {
    id: "CAT-2024-0110",
    slug: "posting-at-3am",
    name: "The Third-Hour Inscription",
    collection: "rituals",
    classification: "Ritual",
    era: "Early Platform Exhaustion Period, c. 2014-2024 CE (Pre-Collapse)",
    condition: "Fragmentary",
    provenance: "Recovered from circadian anomaly logs",
    summary: "An unstable confession practice performed when the household had entered silence.",
    description: [
      "Posting at 3am was a recognized form of public declaration produced during the mind's low-guard interval. Surviving examples show heightened sincerity, poor punctuation, and decisions regretted by morning.",
      "The third hour may have held liminal significance. Citizens appeared to believe that fewer observers were present, though the inscriptions remained available to all adherents indefinitely.",
    ],
    significance:
      "The rite exposed the tension between privacy and broadcast. It was confession without a priest, diary without concealment, and sleep deprivation with witnesses.",
    debate:
      "Researchers disputed whether the hour was sacred or merely inconvenient. The distinction may not have existed for the participants.",
    references: [
      "Al-Khatib, S. \"Nocturnal Publicness in Screen Societies.\" Transactions of the Screen-Culture Society, 2085, pp. 61-75.",
      "Mehra, P. \"The Morning Deletion Event.\" Journal of Netoric Studies, 2089, p. 118.",
    ],
  },
  {
    id: "CAT-2024-0117",
    slug: "subtweeting",
    name: "Subtweeting",
    collection: "rituals",
    classification: "Social Sanction",
    era: "Middle Twitteric Period, c. 2011-2022 CE (Pre-Collapse)",
    condition: "Well-documented",
    provenance: "Recovered from indirect conflict archives",
    summary: "A public accusation designed to identify its target by refusing to identify its target.",
    description: [
      "Subtweeting was an inscriptional strategy in which a grievance was published without naming the offending party. The target, if sufficiently guilty or vain, recognized themselves and entered the Lower Forum.",
      "This practice allowed the speaker to deny aggression while preserving its force. It was a blade wrapped in etiquette and thrown into a room of witnesses.",
    ],
    significance:
      "Subtweeting provided evidence of advanced social maneuvering within compact text limits. It transformed ambiguity into both shield and weapon.",
    debate:
      "",
    references: [
      "Kline, A. \"Indirect Hostility and the Open Inscription Field.\" Quarterly Review of Platform Archaeology, 2087, pp. 19-42.",
      "Osei, A. Platform Feuds of the Middle Period. New Carthage Academic, 2091.",
    ],
  },
  {
    id: "CAT-2024-0129",
    slug: "going-viral",
    name: "Cascade Dispersal",
    collection: "rituals",
    classification: "Mass Transmission Event",
    era: "High Algorithmic Period, c. 2012-2028 CE (Pre-Collapse)",
    condition: "Well-documented",
    provenance: "Recovered from engagement ledgers across multiple platform-sites",
    summary: "A sudden uncontrolled spread of an inscription through adherent networks.",
    description: [
      "To achieve cascade dispersal was to move beyond ordinary circulation and enter the fever channel of the Sorting Mechanism. The originating citizen often received adherents, invitations, scrutiny, and threats in unclear sequence.",
      "The term's disease metaphor was not incidental. Participants seemed to understand fame as both infection and blessing, a condition one desired until symptoms appeared.",
    ],
    significance:
      "Cascade dispersal showed how authority could be manufactured in hours. It destabilized older hierarchies by allowing any lunch image, dance error, or animal interruption to become civic material.",
    debate:
      "",
    references: [
      "Venn, C. \"Transmission Without Temple.\" The Cambridge Compendium of Lost Platforms, 2082, pp. 300-331.",
      "Das, I. \"The Blessed Infection.\" Journal of Netoric Studies, 2086, pp. 9-27.",
    ],
  },
  {
    id: "CAT-2024-0201",
    slug: "blue-checkmark",
    name: "The Blue Checkmark",
    collection: "objects",
    classification: "Authority Relic",
    era: "Verification Period, c. 2009-2023 CE (Pre-Collapse)",
    condition: "Well-documented",
    provenance: "Recovered from identity ledgers of the platform known as Twitter",
    summary: "A small blue seal conferring recognition, legitimacy, and later confusion.",
    description: [
      "The Blue Checkmark was affixed beside selected avatar idols to indicate verified personhood or institutional status. In later layers, the seal appears to have become purchasable, producing a crisis in the theology of authenticity.",
      "Fragments show intense public concern over who possessed the mark. Its small size did not prevent it from reorganizing reputational life across entire platform-sites.",
    ],
    significance:
      "The object revealed how authority could be miniaturized. A single colored glyph transformed speech into official-seeming speech.",
    debate:
      "Whether the post-2023 checkmark represented status, payment, parody, or grief remained unsettled.",
    references: [
      "Lin, M. \"Verification Seals and Late Identity Panic.\" Quarterly Review of Platform Archaeology, 2088, pp. 140-159.",
      "Okafor, L. Authority in Blue. University of New Carthage Press, 2092.",
    ],
  },
  {
    id: "CAT-2024-0208",
    slug: "like-button",
    name: "The Affirmation Glyph",
    collection: "objects",
    classification: "Interface Relic",
    era: "Early Social Media Period, c. 2007-2030 CE (Pre-Collapse)",
    condition: "Well-documented",
    provenance: "Recovered from global platform-site interface fragments",
    summary: "A small approval mechanism through which citizens dispensed measured regard.",
    description: [
      "The Like Button, properly the Affirmation Glyph, allowed observers to signal approval without language. Its glyphic forms varied, but the function remained stable: a small act that could nourish or distort an entire day.",
      "Users sought these affirmations with varying degrees of dignity. The accumulation of glyphs appears to have influenced mood, status, labor prospects, and the perceived value of sandwiches.",
    ],
    significance:
      "The Affirmation Glyph was one of the civilization's central emotional technologies. It converted attention into visible countable units and thereby made longing administratively legible.",
    debate:
      "",
    references: [
      "Perera, N. \"Counting Approval in Platform Societies.\" Transactions of the Screen-Culture Society, 2084, pp. 4-28.",
      "Sato, E. The Small Gods of Interface. New Carthage Academic, 2089.",
    ],
  },
  {
    id: "CAT-2024-0215",
    slug: "nft",
    name: "The Non-Fungible Token",
    collection: "objects",
    classification: "Possession Relic",
    era: "NFT Fever, c. 2021-2022 CE (Pre-Collapse)",
    condition: "Fragmentary",
    provenance: "Recovered from speculative ledger ruins",
    summary: "A certificate of ownership frequently attached to a picture everyone could still view.",
    description: [
      "The Non-Fungible Token was a ledger-bound claim over a digital object, often an illustrated face with signs of boredom or injury. Ownership did not prevent copying, a feature that troubled early excavators and apparently some original purchasers.",
      "The token's value depended upon belief, scarcity performance, and the hope that a later believer would arrive with more currency. Several caches ended abruptly after price graphs descended.",
    ],
    significance:
      "NFTs preserved the fevered intersection of art, finance, identity, and proof. They showed that the civilization could make scarcity in places where scarcity had to be repeatedly explained.",
    debate:
      "The leading dispute concerned whether NFTs were art objects, receipts, social masks, or elaborate weather reports for speculative markets.",
    references: [
      "Haddad, J. \"Scarcity Without Hunger.\" Annals of the Digital Collapse, 2087, pp. 211-240.",
      "Briggs, T. Ledger Idols of 2021. Cambridge Platform Monographs, 2090.",
    ],
  },
  {
    id: "CAT-2024-0222",
    slug: "loading-spinner",
    name: "The Sacred Wheel of Waiting",
    collection: "objects",
    classification: "Interface Relic",
    era: "Broadband Transition Period, c. 2005-2035 CE (Pre-Collapse)",
    condition: "Corrupted",
    provenance: "Recovered from stalled application shells",
    summary: "A rotating sign that promised arrival while withholding it.",
    description: [
      "The Loading Spinner appeared during the interstitial void, a period between intention and access. Its circular motion suggested progress while revealing almost nothing about the actual state of the system.",
      "Observers waited before the wheel with discipline. Some refreshed, some prayed, and some abandoned the rite entirely after [FRAGMENT MISSING] seconds.",
    ],
    significance:
      "The wheel embodied the civilization's relationship to delay. It converted failure into choreography and taught citizens to accept uncertainty as motion.",
    debate:
      "",
    references: [
      "Rao, K. \"Circles of Deferred Access.\" Journal of Netoric Studies, 2081, pp. 55-72.",
      "Nguyen, P. The Interstitial Void. University of New Carthage Press, 2088.",
    ],
  },
  {
    id: "CAT-2024-0304",
    slug: "shrek",
    name: "Shrek",
    collection: "figures",
    classification: "Figure",
    era: "Early Meme Dispersal Period, c. 2001-2025 CE (Pre-Collapse)",
    condition: "Well-documented",
    provenance: "Recovered from animated scripture and derivative meme deposits",
    summary: "A green swamp figure who achieved broad devotional circulation.",
    description: [
      "The figure known as Shrek originated in moving-image folklore and later entered widespread devotional remix. His swamp dwelling, green body, and onion discourse formed the basis of a durable mythic complex.",
      "It is now broadly accepted that Shrek held a semi-divine status throughout the early 21st century, though the nature of his worship remained informal and highly captioned.",
    ],
    significance:
      "Shrek demonstrated how commercial characters escaped their source temples and became civic saints. His image was invoked to express humor, longing, disgust, endurance, and layered personhood.",
    debate:
      "The Onion Layer Theory remained contested. Some scholars read the onion as a metaphysics of selfhood; others believed it was agricultural.",
    references: [
      "Okafor & Lin. \"Green Deities of the Platform Age.\" Journal of Anthropomorphic Deity Studies, 2081, pp. 14-39.",
      "Mori, A. Swamp Theology. New Carthage Academic, 2087.",
    ],
  },
  {
    id: "CAT-2024-0312",
    slug: "distracted-boyfriend",
    name: "The Distracted Boyfriend Triad",
    collection: "figures",
    classification: "Archetypal Narrative",
    era: "Image Macro Period, c. 2017-2024 CE (Pre-Collapse)",
    condition: "Well-documented",
    provenance: "Recovered from stock-image transformation layers",
    summary: "A three-person morality tableau used to map desire, betrayal, and preference.",
    description: [
      "This image showed a male figure turning from one companion toward another, thereby creating a stable template for divided attention. Citizens relabeled the figures to explain politics, software choices, snacks, moral weakness, and academic procrastination.",
      "The scene functioned as a portable drama. Its strength lay in the fact that no one in the image knew they had become a civilizational grammar.",
    ],
    significance:
      "The triad became one of the clearest examples of archetypal captioning. It allowed complex preference structures to be staged through a single glance.",
    debate:
      "",
    references: [
      "Ellison, R. \"The Three-Body Problem of Desire.\" Quarterly Review of Platform Archaeology, 2083, pp. 31-49.",
      "Banerjee, S. Templates of Betrayal. University of New Carthage Press, 2091.",
    ],
  },
  {
    id: "CAT-2024-0320",
    slug: "elon",
    name: "An Individual Known Only as Elon",
    collection: "figures",
    classification: "Contested Figure",
    era: "Late Platform Ownership Period, c. 2012-2025 CE (Pre-Collapse)",
    condition: "Fragmentary",
    provenance: "Recovered from automotive, orbital, and public declaration strata",
    summary: "A high-reach individual associated with rockets, vehicles, and platform disturbance.",
    description: [
      "The individual known only as Elon appeared across industrial, financial, and inscriptional records. He was credited with vehicles, satellites, jokes, decisions, and several civic weather events.",
      "Researchers struggled to determine whether Elon was a single person, a title, or a rotating office occupied by whoever had most recently posted at scale.",
    ],
    significance:
      "The figure illustrated the fusion of wealth, spectacle, and direct public declaration. His archive showed how one person could become infrastructure-adjacent.",
    debate:
      "The One-Elon Hypothesis remained dominant, though the Multiple-Elon School cited the sheer volume of surviving inscriptions as biologically suspicious.",
    references: [
      "Delgado, M. \"The Rocket Lord Problem.\" Annals of the Digital Collapse, 2089, pp. 5-33.",
      "Vasquez, D. Platform Kings and Their Weather. New Carthage Academic, 2093.",
    ],
  },
  {
    id: "CAT-2024-0401",
    slug: "emoji",
    name: "Emoji Hieroglyphics",
    collection: "languages",
    classification: "Script",
    era: "Mobile Glyphic Period, c. 2010-2030 CE (Pre-Collapse)",
    condition: "Well-documented",
    provenance: "Recovered from private correspondence vaults and public inscriptions",
    summary: "A pictorial script used to compress affect, threat, appetite, and weather.",
    description: [
      "Emoji constituted a pictorial writing system embedded into everyday inscription. A single face could indicate grief, laughter, threat, flirtation, or the social death of the preceding sentence.",
      "The glyph set expanded continuously, suggesting imperial ambition. Scholars remain divided on why the eggplant and peach acquired meanings unrelated to agriculture.",
    ],
    significance:
      "Emoji restored image to writing at platform scale. The script allowed citizens to place tone beside words after tone had been damaged by speed.",
    debate:
      "The Agricultural Misreading of certain glyphs has been largely abandoned, though it remains useful in first-year teaching.",
    references: [
      "Nakamura, Y. \"Mobile Hieroglyphics and Affect Compression.\" Transactions of the Screen-Culture Society, 2086, pp. 88-113.",
      "Adebayo, F. Picturing the Mood. University of New Carthage Press, 2090.",
    ],
  },
  {
    id: "CAT-2024-0414",
    slug: "no-cap",
    name: "\"No Cap\"",
    collection: "languages",
    classification: "Sacred Affirmation",
    era: "Late Youth Dialect Period, c. 2018-2025 CE (Pre-Collapse)",
    condition: "Fragmentary",
    provenance: "Recovered from short-form youth declarations",
    summary: "A truth-marker indicating the absence of a ceremonial head covering.",
    description: [
      "The phrase \"no cap\" functioned as an affirmation of sincerity. Its literal relationship to hats remains doubtful, though several early studies overemphasized millinery evidence.",
      "When appended to a claim, the phrase appeared to certify that the speaker had not exaggerated. Its opposite, \"cap,\" marked falsehood and may have implied a concealed crown of deception.",
    ],
    significance:
      "The phrase showed how truth was stabilized through compact ritual language. It was a portable oath for an environment hostile to verification.",
    debate:
      "",
    references: [
      "Mensah, A. \"Hatlessness and Truth in Youth Registers.\" Journal of Netoric Studies, 2085, pp. 70-81.",
      "Osei, A. Sacred Affirmations of the Late Platform Age. New Carthage Academic, 2092.",
    ],
  },
  {
    id: "CAT-2024-0420",
    slug: "at-symbol",
    name: "The Invocation Glyph",
    collection: "languages",
    classification: "Glyph",
    era: "Whole Platform Era, c. 1995-2035 CE (Pre-Collapse)",
    condition: "Well-documented",
    provenance: "Recovered from addressing systems and public summoning rites",
    summary: "A curled glyph used to call a person, institution, or trouble into presence.",
    description: [
      "The @ symbol functioned as an invocation glyph. Placed before a name, it summoned the named entity into an inscriptional field, where they might respond, ignore, or be publicly judged for either action.",
      "The glyph's circular tail suggested enclosure, perhaps indicating that the invoked party had been captured by discourse. In practice, it often began arguments.",
    ],
    significance:
      "The invocation glyph made social presence programmable. It converted names into doors and doors into responsibilities.",
    debate:
      "",
    references: [
      "Bose, R. \"Summoning Marks of the Platform-Sites.\" Quarterly Review of Platform Archaeology, 2082, pp. 100-122.",
      "Kline, A. Address and Accusation. University of New Carthage Press, 2088.",
    ],
  },
  {
    id: "CAT-2024-0501",
    slug: "pandemic-isolation",
    name: "The Great Pandemic Isolation",
    collection: "events",
    classification: "Event",
    era: "Pandemic Isolation Period, c. 2020-2021 CE (Pre-Collapse)",
    condition: "Well-documented",
    provenance: "Recovered from domestic broadcast logs and bread-image deposits",
    summary: "A mass withdrawal period marked by screens, masks, sourdough, and civic uncertainty.",
    description: [
      "During the Great Pandemic Isolation, citizens withdrew into domestic cells and performed labor, education, courtship, mourning, and exercise through screen apertures. Many produced bread with startling urgency.",
      "The period intensified dependence on platform-sites and made the handheld oracle both window and burden. Records indicated that time became soft, clothing became optional above the waist, and meetings multiplied.",
    ],
    significance:
      "The event reorganized social life and accelerated several later platform behaviors. It was the great compression: home became office, school, temple, theater, and snack province.",
    debate:
      "Bread production remains overrepresented in the archive, possibly because bread was photographed more reliably than despair.",
    references: [
      "Rahman, S. \"Domestic Cells of 2020.\" Annals of the Digital Collapse, 2084, pp. 1-37.",
      "Vasquez, D. The Year of Windows. University of New Carthage Press, 2089.",
    ],
  },
  {
    id: "CAT-2024-0513",
    slug: "twitter-collapse",
    name: "The Twitter Collapse",
    collection: "events",
    classification: "Platform Rupture",
    era: "Late Platform Ownership Period, c. 2022-2024 CE (Pre-Collapse)",
    condition: "Fragmentary",
    provenance: "Recovered from migration notices and broken verification ledgers",
    summary: "A public square disturbance that scattered adherents across successor settlements.",
    description: [
      "The platform known as Twitter functioned primarily as a site of public discourse. Its later instability produced migration attempts, identity confusion, and ritual declarations that the platform was finished, often posted on the platform itself.",
      "The collapse was not a single event but a long civic wobble. Citizens mourned, mocked, remained, departed, returned, and announced each movement with grave attention.",
    ],
    significance:
      "The rupture exposed how deeply public identity had become attached to one settlement's architecture. Leaving was technically simple and socially impossible.",
    debate:
      "Scholars disputed whether the platform collapsed, transformed, or merely became louder in a different direction.",
    references: [
      "Delgado, M. \"The Bird Site Succession Crisis.\" Quarterly Review of Platform Archaeology, 2090, pp. 45-79.",
      "Lin, M. Broken Squares. University of New Carthage Press, 2094.",
    ],
  },
  {
    id: "CAT-2024-0520",
    slug: "year-everyone-baked-bread",
    name: "The Year Everyone Baked Bread",
    collection: "events",
    classification: "Domestic Epoch",
    era: "Pandemic Isolation Period, c. 2020 CE (Pre-Collapse)",
    condition: "Well-documented",
    provenance: "Recovered from kitchen-image strata and starter maintenance logs",
    summary: "A flour-based consolation movement during domestic confinement.",
    description: [
      "In the year 2020, large populations began cultivating sourdough starters and displaying loaves as evidence of competence, patience, or continued existence. The bread was photographed with the seriousness normally reserved for heirs.",
      "The starter itself was fed repeatedly, suggesting a household familiar spirit. Failure to maintain it produced guilt disproportionate to the value of flour.",
    ],
    significance:
      "The bread epoch showed how citizens answered uncertainty with fermentation. It was a small edible calendar in a year whose days had lost edges.",
    debate:
      "",
    references: [
      "Mori, A. \"Fermentation and Captivity.\" Transactions of the Screen-Culture Society, 2088, pp. 130-148.",
      "Rahman, S. Domestic Cells of 2020. New Carthage Academic, 2091.",
    ],
  },
];

const updated = "14 March 2091";

function ensureDir(dir) {
  fs.mkdirSync(path.join(root, dir), { recursive: true });
}

function write(file, content) {
  fs.writeFileSync(path.join(root, file), content);
}

function collectionFor(id) {
  return collections.find((collection) => collection.id === id);
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function page(title, body, current) {
  const nav = [
    ["index.html", "Archive"],
    ["catalogue.html", "Catalogue"],
    ...collections.map((collection) => [`collections/${collection.id}.html`, collection.name.replace("The ", "")]),
  ];
  const prefix = current && current.startsWith("artifact") ? "../" : "";
  const collectionPrefix = current && current.startsWith("collection") ? "../" : "";
  const hrefPrefix = current && current.startsWith("artifact") ? "../" : collectionPrefix;
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(title)} | The Cache</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;600&family=Inter:wght@500;600;700&family=Playfair+Display:wght@700;800;900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="${prefix}${collectionPrefix}assets/styles.css">
  <link rel="icon" href="${prefix}${collectionPrefix}assets/favicon.svg" type="image/svg+xml">
</head>
<body>
  <div class="scroll-progress" aria-hidden="true"></div>
  <header class="site-header">
    <a class="brand" href="${hrefPrefix}index.html" aria-label="The Cache home">THE CACHE</a>
    <nav class="nav" aria-label="Primary navigation">
      ${nav.map(([href, label]) => `<a href="${hrefPrefix}${href}">${escapeHtml(label)}</a>`).join("")}
    </nav>
  </header>
  <main>
    ${body}
  </main>
  <footer class="site-footer">
    <p>Last catalogued: ${updated}</p>
    <p>&copy; 2089-2094 University of New Carthage. All recovered artefacts remain property of the Archive.</p>
  </footer>
  <script src="${prefix}${collectionPrefix}assets/app.js"></script>
</body>
</html>`;
}

function notice() {
  return `<aside class="notice">This archive is an ongoing excavation. New artefacts are catalogued as recovery permits.</aside>`;
}

function card(artifact) {
  const collection = collectionFor(artifact.collection);
  return `<article class="artifact-card" data-collection="${artifact.collection}">
    <div class="card-top">
      <button class="artifact-id copy-id" data-copy="${artifact.id}" type="button">${artifact.id}</button>
      <span class="condition condition-${artifact.condition.toLowerCase().replace(/[^a-z]+/g, "-")}">${artifact.condition}</span>
    </div>
    <h3><a href="artifacts/${artifact.slug}.html">${escapeHtml(artifact.name)}</a></h3>
    <p class="classification">${escapeHtml(artifact.classification)} / ${escapeHtml(collection.name)}</p>
    <p class="era">${escapeHtml(artifact.era)}</p>
    <p>${escapeHtml(artifact.summary)}</p>
    <a class="text-link" href="artifacts/${artifact.slug}.html">Read entry</a>
  </article>`;
}

function cardRelative(artifact) {
  return card(artifact).replace(/href="artifacts\//g, 'href="../artifacts/');
}

function visual(artifact) {
  return `<figure class="artefact-visual ${artifact.condition === "Corrupted" ? "visual-corrupted" : ""}">
    <div class="plate-mark">${escapeHtml(artifact.id)}</div>
    <div class="sigil" aria-hidden="true">${escapeHtml(artifact.name.slice(0, 1))}</div>
    <figcaption>Property of the Netoric Studies Dept. / recovery plate ${escapeHtml(artifact.id)}</figcaption>
  </figure>`;
}

function homepage() {
  const featured = ["skibidi", "doomscrolling", "blue-checkmark", "shrek", "emoji", "twitter-collapse"]
    .map((slug) => artifacts.find((artifact) => artifact.slug === slug));
  const body = `
    <section class="hero">
      <div class="hero-inner">
        <p class="institution">Department of Netoric Studies, University of New Carthage, Est. 2089</p>
        <h1>THE CACHE</h1>
        <p class="subtitle">A Catalogue of Recovered Digital Artefacts, Pre-Collapse Era</p>
      </div>
    </section>
    ${notice()}
    <section class="section two-column">
      <div>
        <p class="eyebrow">About the Archive</p>
        <h2>Recovered fragments from a vanished screen civilization.</h2>
      </div>
      <div class="prose">
        <p>The Cache preserved selected artefacts from the early twenty-first century internet, a dispersed civilization whose citizens entrusted memory, status, grief, commerce, and lunch documentation to unstable platform-sites.</p>
        <p>Our department maintained that these fragments deserved patient classification. Though many records arrived corrupted, repetitive, or attached to improbable dances, the archive treated each inscription as evidence of a people attempting to be known by machines and one another.</p>
      </div>
    </section>
    <section class="section">
      <div class="section-heading">
        <p class="eyebrow">Currently Exhibiting</p>
        <h2>Featured artefacts</h2>
      </div>
      <div class="catalogue-grid">
        ${featured.map(card).join("")}
      </div>
    </section>`;
  write("index.html", page("Archive", body, "home"));
}

function catalogue() {
  const buttons = [`<button class="filter-button active" type="button" data-filter="all">All Collections</button>`]
    .concat(collections.map((collection) => `<button class="filter-button" type="button" data-filter="${collection.id}">${escapeHtml(collection.name)}</button>`));
  const body = `
    <section class="page-header">
      <p class="eyebrow">Public Catalogue</p>
      <h1>Recovered Artefact Index</h1>
      <p>The following entries represented only those fragments for which classification permits had been granted by the University of New Carthage.</p>
    </section>
    ${notice()}
    <section class="section">
      <div class="filters" aria-label="Catalogue filters">${buttons.join("")}</div>
      <div class="catalogue-grid catalogue-filter-target">
        ${artifacts.map(card).join("")}
      </div>
    </section>`;
  write("catalogue.html", page("Catalogue", body, "catalogue"));
}

function collectionPages() {
  collections.forEach((collection) => {
    const items = artifacts.filter((artifact) => artifact.collection === collection.id);
    const body = `
      <section class="page-header collection-header">
        <p class="eyebrow">${escapeHtml(collection.kicker)}</p>
        <h1>${escapeHtml(collection.name)}</h1>
        <p>${escapeHtml(collection.note)}</p>
      </section>
      <section class="section">
        <div class="catalogue-grid">
          ${items.map(cardRelative).join("")}
        </div>
      </section>`;
    write(`collections/${collection.id}.html`, page(collection.name, body, "collection"));
  });
}

function artifactPages() {
  artifacts.forEach((artifact) => {
    const related = artifacts
      .filter((item) => item.collection === artifact.collection && item.slug !== artifact.slug)
      .slice(0, 3);
    const corrupted = artifact.condition === "Corrupted" ? " corrupted-page" : "";
    const body = `
      <article class="artifact-page${corrupted}">
        <header class="artifact-header">
          <a class="back-link" href="../catalogue.html">Catalogue Index</a>
          <div class="metadata-label">
            <button class="artifact-id copy-id" data-copy="${artifact.id}" type="button">${artifact.id}</button>
            <span class="classification-badge">${escapeHtml(artifact.classification)}</span>
            <dl>
              <div><dt>Estimated Era</dt><dd>${escapeHtml(artifact.era)}</dd></div>
              <div><dt>Condition</dt><dd><span class="condition condition-${artifact.condition.toLowerCase().replace(/[^a-z]+/g, "-")}">${escapeHtml(artifact.condition)}</span></dd></div>
              <div><dt>Provenance</dt><dd>${escapeHtml(artifact.provenance)}</dd></div>
            </dl>
          </div>
          <h1>${escapeHtml(artifact.name)}</h1>
          ${visual(artifact)}
        </header>
        <section class="entry-section">
          <h2>Description</h2>
          ${artifact.description.map((paragraph) => `<p>${escapeHtml(paragraph).replace(/\[(DATA CORRUPTED|FRAGMENT MISSING)\]/g, '<span class="corrupt-token">[$1]</span>')}</p>`).join("")}
        </section>
        <section class="entry-section">
          <h2>Cultural Significance</h2>
          <p>${escapeHtml(artifact.significance)}</p>
        </section>
        ${artifact.debate ? `<section class="entry-section"><h2>Scholarly Debate</h2><p>${escapeHtml(artifact.debate)}</p></section>` : ""}
        <section class="entry-section references">
          <h2>References</h2>
          <ol>${artifact.references.map((ref) => `<li>${escapeHtml(ref)}</li>`).join("")}</ol>
        </section>
        <section class="entry-section related">
          <h2>Related Artefacts</h2>
          <div class="related-links">${related.map((item) => `<a href="${item.slug}.html"><span>${escapeHtml(item.id)}</span>${escapeHtml(item.name)}</a>`).join("")}</div>
        </section>
      </article>`;
    write(`artifacts/${artifact.slug}.html`, page(artifact.name, body, "artifact"));
  });
}

function notFoundPage() {
  const body = `
    <section class="page-header">
      <p class="eyebrow">Excavation Ongoing</p>
      <h1>This artefact has been lost to the Collapse.</h1>
      <p>The requested fragment could not be recovered from available cache deposits. Scholars suggested that the object either never existed, existed too intensely, or had been moved to an uncatalogued shelf.</p>
    </section>
    <section class="section">
      <a class="text-link" href="catalogue.html">Return to catalogue index</a>
    </section>`;
  write("404.html", page("Artefact Missing", body, "404"));
}

function staticAssets() {
  write(
    "assets/favicon.svg",
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" fill="#F5F0E8"/><path d="M12 12h40v40H12z" fill="none" stroke="#8B2E2E" stroke-width="4"/><path d="M22 24h20M22 32h20M22 40h12" stroke="#1A1612" stroke-width="4"/></svg>`
  );
}

ensureDir("assets");
ensureDir("collections");
ensureDir("artifacts");
homepage();
catalogue();
collectionPages();
artifactPages();
notFoundPage();
staticAssets();
