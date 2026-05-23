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
    caption: "Sub-Vault of Liturgical Debris / held under chant-quarantine; staff advised not to vocalise the specimen aloud",
    summary: "A chant-form believed to have marked allegiance during juvenile screen rites.",
    description: [
      "The term \"skibidi\" survived primarily in repetition, suggesting a liturgical function rather than ordinary speech. Its repeated pairing with ceramic sanitation vessels led early scholars to classify it as a cleansing hymn, though later work proposed a military origin among short-form video factions.",
      "No stable translation has been accepted. Evidence points to a flexible utterance used for joy, warning, derision, and possibly taxation. The civilization appeared to tolerate this semantic instability with unusual calm.",
      "Excavators noted that the utterance frequently co-occurred with a recurring antagonist possessing a camera-shaped head, indicating an early dualist cosmology in which sanitation and surveillance waged ceremonial war. The conflict was transmitted episodically, in fragments rarely exceeding one minute, a brevity scholars attribute either to ritual constraint or to the limited attention granted by the deceased deity Algorithm.",
    ],
    significance:
      "The utterance demonstrated the late culture's ability to detach sound from conventional meaning while preserving communal force. Its spread indicated that the Sorting Mechanism could consecrate nonsense into civic material. That adults reported distress at the chant, while children deployed it fluently, suggests it functioned partly as a generational password — a sound the young could pass freely and the old could not return.",
    debate:
      "The Cambridge school argued that \"skibidi\" referred to a person. The New Carthage school maintained that it referred to an event, a mood, or a plumbing-adjacent cosmology. Both positions relied on incomplete dance evidence, and neither survived the discovery of a fragment in which the utterance was applied, apparently sincerely, to a sandwich.",
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
    caption: "Office of Status Economics / ambient charisma residue detected on retrieval; specimen stored behind glass",
    summary: "A charisma-substance believed to have influenced mate selection and public confidence.",
    description: [
      "\"Rizz\" appeared in inscriptions describing attraction, persuasion, and the visible possession of social voltage. It was not measured directly, yet individuals were said to possess, lose, steal, or deploy it.",
      "The term may have originated as a contraction of charisma, though contemporary users treated it as a transferable essence. Some fragments recorded \"negative rizz,\" indicating that charisma could invert into a socially repellent field.",
      "A small body of instructional inscriptions promised that rizz could be acquired through study, a doctrine that produced both a self-improvement economy and a class of failed practitioners. The phrase \"unspoken rizz\" further complicated the field, describing a charisma so potent it required no action whatsoever — an ideal that, by definition, left no evidence and could be claimed by anyone.",
    ],
    significance:
      "Rizz offered scholars a rare index of informal status economics. It suggested that the late internet peoples understood desire as both performance and resource, and that they had developed a vocabulary precise enough to grade attraction yet vague enough to never be wrong.",
    debate:
      "A minority view held that rizz was a liquid. This interpretation has been rejected except in cases involving documented spilling. A more durable dispute concerns whether \"W rizz\" and \"L rizz\" denoted outcomes or pre-existing castes; the question has divided two faculties and one marriage.",
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
    caption: "Bureau of Performance Rites, gift-glyph annex / officiant consent confirmed by payment ledger, not by expression",
    summary: "A repeated response ceremony triggered by symbolic offerings.",
    description: [
      "In the NPC livestream rite, a performer responded to purchased glyphs with fixed gestures and phrases. Scholars initially believed the performer had been trapped in a low-sentience state, but payment records confirmed voluntary participation.",
      "The ritual resembled temple exchange: observers offered icons, and the officiant returned predictable blessings. That the blessings included phrases such as \"ice cream so good\" did not reduce their ceremonial seriousness.",
      "The designation \"NPC,\" borrowed from interactive combat-scriptures, identified a being whose responses were bounded and purchasable. That a living person would voluntarily adopt this status, and prosper, troubled early researchers more than any corruption in the record. The performer appeared to understand that predictability, once rare, had become the scarcest and most valuable commodity in the attention economy.",
    ],
    significance:
      "The phenomenon revealed the monetization of predictability. It showed that the late civilization could convert repetition into livelihood and confusion into reliable income.",
    debate:
      "Scholars remain divided on whether the audience offered glyphs to receive the blessing or to test the limits of the officiant's scripted obedience. The New Carthage school holds that the rite was devotional; the Cambridge school insists it was a controlled experiment in human automation, conducted by thousands of unpaid researchers who did not know they were researchers.",
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
    caption: "Attention Pathology Wing / plate fractured along its centre during recovery, as was apparently traditional",
    summary: "A divided viewing surface combining narrative fragments with kinetic pavement traversal.",
    description: [
      "This format placed one moving narrative above or beside a second, unrelated motion sequence. Common pairings included domestic animated conflict and an endless running game, suggesting viewers required parallel streams to remain spiritually present.",
      "Several damaged files showed three or more simultaneous stimuli before the image collapsed into [DATA CORRUPTED]. The arrangement may have served as an attention splint for citizens injured by abundance.",
      "The lower sequence was almost never narratively connected to the upper. Frequently it depicted a figure traversing coloured terrain, gathering tokens with no destination, or pressure-washing a surface to completion. Scholars suspect this channel was not watched at all but rather metabolised — a steady supply of motion administered to a nervous system that could no longer tolerate a single, undivided image.",
    ],
    significance:
      "The split-screen tablet was among the clearest signs that leisure had become a multi-channel burden. It preserved the moment when entertainment required its own entertainment.",
    debate:
      "Some scholars proposed that the lower running sequence represented an underworld journey. Others held that it was simply necessary to keep the viewer from ritual withdrawal. A fringe position, gaining adherents, argues that the two channels were watched by two different parts of the same fractured citizen, and that reunification was never the goal.",
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
    caption: "Office of Nocturnal Behaviours / telemetry recovered bedside; thumb-wear consistent with prolonged descent",
    summary: "A nocturnal distress rite involving downward movement through calamity inscriptions.",
    description: [
      "Doomscrolling described the repeated descent through alarming public declarations, often performed while horizontal and deprived of sleep. The hand moved downward while the spirit moved nowhere.",
      "The ritual appeared self-punitive, yet participants returned nightly. Scholars suggest that the act created an illusion of preparedness, as though reading every disaster might soften the next one.",
      "The feed beneath the thumb was, crucially, infinite — engineered to have no floor. Earlier civilizations bounded their grief with the edge of a scroll or the final page of a codex; the Pre-Collapse citizen was denied this mercy. The descent could continue until sleep or battery intervened, and these were often the only forces capable of ending the rite.",
    ],
    significance:
      "The practice was central to late emotional governance. It allowed citizens to ingest collapse in portions small enough to fit beneath a thumb.",
    debate:
      "It remains contested whether doomscrolling was an addiction, a coping mechanism, or a degraded form of vigil-keeping inherited from older watch-rituals. Feld argued the citizen sought catastrophe in order to feel proportionate; Mehra countered that the citizen sought nothing, and that the absence of a goal was precisely the wound.",
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
    caption: "Circadian Anomaly Desk / timestamp 03:14 local; surrounding inscriptions deleted by dawn, this one was not",
    summary: "An unstable confession practice performed when the household had entered silence.",
    description: [
      "Posting at 3am was a recognized form of public declaration produced during the mind's low-guard interval. Surviving examples show heightened sincerity, poor punctuation, and decisions regretted by morning.",
      "The third hour may have held liminal significance. Citizens appeared to believe that fewer observers were present, though the inscriptions remained available to all adherents indefinitely.",
      "A distinct sub-genre of the third-hour inscription addressed a single absent individual without naming them, in language alternating between accusation and longing. These were rarely sent to the intended party and frequently removed within hours of sunrise. The archive preserves them only because the Sorting Mechanism captured copies faster than the authors could repent.",
    ],
    significance:
      "The rite exposed the tension between privacy and broadcast. It was confession without a priest, diary without concealment, and sleep deprivation with witnesses.",
    debate:
      "Researchers disputed whether the hour was sacred or merely inconvenient. The distinction may not have existed for the participants. A separate line of inquiry asks why the morning self so reliably disowned the night self's declarations, and whether the late civilization recognized these as two distinct legal persons.",
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
    caption: "Bureau of Indirect Conflict / target never named on the specimen, therefore catalogued under every name at once",
    summary: "A public accusation designed to identify its target by refusing to identify its target.",
    description: [
      "Subtweeting was an inscriptional strategy in which a grievance was published without naming the offending party. The target, if sufficiently guilty or vain, recognized themselves and entered the Lower Forum.",
      "This practice allowed the speaker to deny aggression while preserving its force. It was a blade wrapped in etiquette and thrown into a room of witnesses.",
      "The genius of the form lay in its deniability: the accuser could, if challenged, claim the inscription concerned someone else entirely, or no one. This forced the wounded party into an impossible position, since to object was to confess that the unnamed grievance fit. Scholars regard subtweeting as the most refined weapon the civilization produced, precisely because it could never be proven to have been fired.",
    ],
    significance:
      "Subtweeting provided evidence of advanced social maneuvering within compact text limits. It transformed ambiguity into both shield and weapon.",
    debate:
      "A persistent question concerns the \"vaguepost,\" a related form aimed at no one in particular yet engineered to make many readers feel privately addressed. Whether this represented economy of malice or simply a cry for concern remains unresolved, though Osei notes the two were frequently indistinguishable even to their authors.",
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
    caption: "Transmission Quarantine Unit / specimen retrieved still warm; handle within the fever channel only",
    summary: "A sudden uncontrolled spread of an inscription through adherent networks.",
    description: [
      "To achieve cascade dispersal was to move beyond ordinary circulation and enter the fever channel of the Sorting Mechanism. The originating citizen often received adherents, invitations, scrutiny, and threats in unclear sequence.",
      "The term's disease metaphor was not incidental. Participants seemed to understand fame as both infection and blessing, a condition one desired until symptoms appeared.",
      "Critically, the originating citizen rarely intended dispersal and almost never controlled its duration. Many cascades attached not to those who sought attention but to those caught mid-error, mid-meal, or mid-grief. The civilization developed no reliable cure; the only documented remedy was time, and the arrival of a fresher infection to draw the adherents elsewhere.",
    ],
    significance:
      "Cascade dispersal showed how authority could be manufactured in hours. It destabilized older hierarchies by allowing any lunch image, dance error, or animal interruption to become civic material.",
    debate:
      "Scholars dispute whether the \"fifteen minutes\" of elevation reported in older sources represented a measured limit or an aspiration. Das maintains the cascade always decayed; Venn cites several individuals who appear to have remained infected for decades, suggesting that for a cursed few, the fever never broke.",
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
    caption: "Office of Authenticity Theology / seal verified, then unverified, then sold, then disputed; provenance contested",
    summary: "A small blue seal conferring recognition, legitimacy, and later confusion.",
    description: [
      "The Blue Checkmark was affixed beside selected avatar idols to indicate verified personhood or institutional status. In later layers, the seal appears to have become purchasable, producing a crisis in the theology of authenticity.",
      "Fragments show intense public concern over who possessed the mark. Its small size did not prevent it from reorganizing reputational life across entire platform-sites.",
      "Before its commodification, the seal was bestowed, not bought, and could be revoked as a form of excommunication. Its later sale for a monthly tribute inverted the entire system: the mark that once signified \"this person is who they claim\" came to signify \"this person paid,\" a reversal so complete that possessing the seal became, for a time, mildly shameful. Scholars regard this as one of the cleanest recorded instances of a sacred object being secularized in real time.",
    ],
    significance:
      "The object revealed how authority could be miniaturized. A single colored glyph transformed speech into official-seeming speech.",
    debate:
      "Whether the post-2023 checkmark represented status, payment, parody, or grief remained unsettled. Lin proposes a fourth possibility: that by the end, the mark signified nothing at all, and that the population continued to argue about it chiefly out of habit and a reluctance to admit the symbol had died.",
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
    caption: "Department of Small Emotional Technologies / 4.2 billion impressions on file, every one of them counted",
    summary: "A small approval mechanism through which citizens dispensed measured regard.",
    description: [
      "The Like Button, properly the Affirmation Glyph, allowed observers to signal approval without language. Its glyphic forms varied, but the function remained stable: a small act that could nourish or distort an entire day.",
      "Users sought these affirmations with varying degrees of dignity. The accumulation of glyphs appears to have influenced mood, status, labor prospects, and the perceived value of sandwiches.",
      "Later interface strata reveal an extraordinary development: certain platform-sites began concealing the glyph-count from public view, ostensibly to relieve the citizenry of comparison. This was the closest the civilization came to acknowledging that its central emotional technology had become a source of widespread suffering — and notably, the count was hidden rather than removed, suggesting the population could imagine living without seeing the number, but not without the number existing.",
    ],
    significance:
      "The Affirmation Glyph was one of the civilization's central emotional technologies. It converted attention into visible countable units and thereby made longing administratively legible.",
    debate:
      "Perera held that the glyph measured approval; Sato argued it measured only reach, and that the two had been catastrophically confused by a population that mistook being seen for being loved. The debate is complicated by evidence that many citizens dispensed the glyph absent-mindedly, conferring blessings they did not feel upon inscriptions they did not read.",
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
    caption: "Speculative Ledger Salvage / ownership certified on retrieval; the underlying image remains freely copyable, as ever",
    summary: "A certificate of ownership frequently attached to a picture everyone could still view.",
    description: [
      "The Non-Fungible Token was a ledger-bound claim over a digital object, often an illustrated face with signs of boredom or injury. Ownership did not prevent copying, a feature that troubled early excavators and apparently some original purchasers.",
      "The token's value depended upon belief, scarcity performance, and the hope that a later believer would arrive with more currency. Several caches ended abruptly after price graphs descended.",
      "The recurring depiction of bored or sedated primates has attracted particular study. That a civilization would pay enormous sums to own — but not to possess, and not to prevent others from viewing — an image of an apathetic ape suggests the object's true function was social rather than visual. The token was a membership glyph for a club whose only activity was owning the glyph, a structure earlier scholars mistook for satire until the ledgers confirmed the sums were real.",
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
    caption: "Interstitial Void Recovery Team / plate retrieved mid-rotation; arrival was never subsequently confirmed",
    summary: "A rotating sign that promised arrival while withholding it.",
    description: [
      "The Loading Spinner appeared during the interstitial void, a period between intention and access. Its circular motion suggested progress while revealing almost nothing about the actual state of the system.",
      "Observers waited before the wheel with discipline. Some refreshed, some prayed, and some abandoned the rite entirely after [FRAGMENT MISSING] seconds.",
      "Forensic analysis confirms what the Pre-Collapse citizen long suspected: in many instances the wheel was decorative, spinning at a fixed rate entirely disconnected from any underlying process. It rotated to reassure, not to report. That the population continued to find comfort in a motion they knew might be meaningless reveals a sophisticated tolerance for benevolent deception, or else a deep and structural exhaustion.",
    ],
    significance:
      "The wheel embodied the civilization's relationship to delay. It converted failure into choreography and taught citizens to accept uncertainty as motion.",
    debate:
      "Rao classified the spinner as a devotional object, citing the stillness it imposed on observers. Nguyen rejected this, arguing that the citizen did not worship the wheel but rather endured it, and that the proper analogue is not the prayer-circle but the waiting-room. The discovery of fragments bearing the inscription \"this is taking forever\" has lent weight to the latter.",
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
    caption: "Wing of Anthropomorphic Deities, Swamp Annex / venerated specimen; conservators advised not to de-layer",
    summary: "A green swamp figure who achieved broad devotional circulation.",
    description: [
      "The figure known as Shrek originated in moving-image folklore and later entered widespread devotional remix. His swamp dwelling, green body, and onion discourse formed the basis of a durable mythic complex.",
      "It is now broadly accepted that Shrek held a semi-divine status throughout the early 21st century, though the nature of his worship remained informal and highly captioned.",
      "Of particular interest is the territorial cry \"get out of my swamp,\" which appears across the record in contexts having no relation to wetlands. Scholars read it as a sacred assertion of boundary — a deity instructing adherents in the defence of personal space. The swamp, in this interpretation, was never geographic; it was the interior self, and Shrek its reluctant but principled guardian.",
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
    caption: "Stock-Image Transformation Lab / three figures depicted, none of whom consented to becoming grammar",
    summary: "A three-person morality tableau used to map desire, betrayal, and preference.",
    description: [
      "This image showed a male figure turning from one companion toward another, thereby creating a stable template for divided attention. Citizens relabeled the figures to explain politics, software choices, snacks, moral weakness, and academic procrastination.",
      "The scene functioned as a portable drama. Its strength lay in the fact that no one in the image knew they had become a civilizational grammar.",
      "The three figures — the betrayed partner, the wandering eye, the object of new attention — proved infinitely reassignable. By relabelling each, a citizen could narrate any conflict between loyalty and temptation, from the geopolitical to the dietary. That a single frozen instant of stock photography became the population's preferred diagram for the entire phenomenon of desire suggests the civilization thought less in arguments than in templates.",
    ],
    significance:
      "The triad became one of the clearest examples of archetypal captioning. It allowed complex preference structures to be staged through a single glance.",
    debate:
      "Ellison treated the tableau as a morality play with a fixed villain; Banerjee objected that the labels rendered villainy entirely portable, so that the same figure might be condemned or celebrated depending only on the captioner's allegiance. The original three individuals, models paid for an unrelated commission, are not known to have been consulted on either reading.",
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
    caption: "Contested Persons Registry / catalogued provisionally as a single individual pending biological review",
    summary: "A high-reach individual associated with rockets, vehicles, and platform disturbance.",
    description: [
      "The individual known only as Elon appeared across industrial, financial, and inscriptional records. He was credited with vehicles, satellites, jokes, decisions, and several civic weather events.",
      "Researchers struggled to determine whether Elon was a single person, a title, or a rotating office occupied by whoever had most recently posted at scale.",
      "The figure's inscriptions oscillated between the mythic and the trivial — declarations of interplanetary settlement issued minutes apart from jokes of the kind associated with adolescents. Scholars find this register-collapse significant: here was an entity with the resources to alter the material future who chose, repeatedly, to spend his influence on the immediate approval of the Lower Forum. The archive suggests no clear distinction, in his case, between the two.",
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
    caption: "Bureau of Pictorial Scripts / glyph set still expanding within storage; vault sealed as a precaution",
    summary: "A pictorial script used to compress affect, threat, appetite, and weather.",
    description: [
      "Emoji constituted a pictorial writing system embedded into everyday inscription. A single face could indicate grief, laughter, threat, flirtation, or the social death of the preceding sentence.",
      "The glyph set expanded continuously, suggesting imperial ambition. Scholars remain divided on why the eggplant and peach acquired meanings unrelated to agriculture.",
      "The script's grammar proved generationally unstable. The weeping-with-laughter face, once the population's principal marker of mirth, was abruptly abandoned by younger cohorts who deemed it a confession of age, and replaced with a bare skull — the latter signifying not death but a laughter so total it had killed the laugher. That a civilization would render extreme joy with the glyph for mortality is, in this department's view, among the period's more honest gestures.",
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
    caption: "Sacred Affirmations Desk / specimen certified sincere; no ceremonial headwear recovered alongside it",
    summary: "A truth-marker indicating the absence of a ceremonial head covering.",
    description: [
      "The phrase \"no cap\" functioned as an affirmation of sincerity. Its literal relationship to hats remains doubtful, though several early studies overemphasized millinery evidence.",
      "When appended to a claim, the phrase appeared to certify that the speaker had not exaggerated. Its opposite, \"cap,\" marked falsehood and may have implied a concealed crown of deception.",
      "A related glyph, a small blue ceremonial cap, was deployed to accuse an inscription of falsehood without recourse to language — the placing of an invisible hat upon a liar's words. That truth and deception were both rendered as headwear suggests the late civilization conceived of honesty spatially: the bare head was trustworthy, the covered head concealed something. This department notes the convenience of an oath that could be sworn in two syllables and revoked with a single emoji.",
    ],
    significance:
      "The phrase showed how truth was stabilized through compact ritual language. It was a portable oath for an environment hostile to verification.",
    debate:
      "Mensah held that the oath was sacred and binding; Osei observed that it was most often appended to claims that were, in fact, exaggerated, and proposes that \"no cap\" functioned less as a guarantee of truth than as a request to be believed anyway. The frequency of the compound \"no cap fr fr\" — a doubling of the oath — is read by some as evidence of an inflationary collapse in its credibility.",
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
    caption: "Office of Summoning Marks / specimen handled with tongs; known to begin arguments on contact",
    summary: "A curled glyph used to call a person, institution, or trouble into presence.",
    description: [
      "The @ symbol functioned as an invocation glyph. Placed before a name, it summoned the named entity into an inscriptional field, where they might respond, ignore, or be publicly judged for either action.",
      "The glyph's circular tail suggested enclosure, perhaps indicating that the invoked party had been captured by discourse. In practice, it often began arguments.",
      "The most aggressive recorded use was the summoning of an institution or corporation into a grievance — a citizen invoking a far larger entity in the apparent belief that the glyph compelled response. It rarely did. These one-sided summonings, in which a lone individual called upon a sleeping giant that never woke, constitute some of the more poignant fragments in the addressing record, and are studied alongside older traditions of prayer.",
    ],
    significance:
      "The invocation glyph made social presence programmable. It converted names into doors and doors into responsibilities.",
    debate:
      "Bose argued the glyph was fundamentally a tool of accountability, dragging the named into the light. Kline countered that it was a weapon of ambush, and that the act of summoning a person into a hostile field, without warning, bore closer resemblance to a trial than a conversation. Both agree the invoked party was rarely glad to have been called.",
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
    caption: "Domestic Confinement Archive / recovered alongside 1,400 documented loaves; despair markedly underrepresented",
    summary: "A mass withdrawal period marked by screens, masks, sourdough, and civic uncertainty.",
    description: [
      "During the Great Pandemic Isolation, citizens withdrew into domestic cells and performed labor, education, courtship, mourning, and exercise through screen apertures. Many produced bread with startling urgency.",
      "The period intensified dependence on platform-sites and made the handheld oracle both window and burden. Records indicated that time became soft, clothing became optional above the waist, and meetings multiplied.",
      "The screen-aperture gathering, in which faces were arranged in a grid and addressed simultaneously, became the period's defining rite. Fragments preserve the recurring liturgical formula \"you're on mute,\" spoken to a silently gesturing participant, which appears with such frequency that some scholars classify it as a devotional refrain. The grid dissolved social hierarchy into uniform rectangles, an accidental egalitarianism the civilization never replicated once released from confinement.",
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
    caption: "Office of Lost Squares / migration still in progress at time of recovery; some adherents recorded mid-departure",
    summary: "A public square disturbance that scattered adherents across successor settlements.",
    description: [
      "The platform known as Twitter functioned primarily as a site of public discourse. Its later instability produced migration attempts, identity confusion, and ritual declarations that the platform was finished, often posted on the platform itself.",
      "The collapse was not a single event but a long civic wobble. Citizens mourned, mocked, remained, departed, returned, and announced each movement with grave attention.",
      "A central episode concerns the renaming of the settlement from a small bird to a single letter, a deletion of identity that older sources treat as both administrative and theological. Adherents continued, for years afterward, to refer to inscriptions by the bird-name long after the bird was gone — a linguistic loyalty to a vanished totem that this department considers the truest measure of how deeply the settlement had been inhabited.",
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
    caption: "Fermentation & Captivity Collection / accessioned starter remains technically alive; fed on schedule by staff",
    summary: "A flour-based consolation movement during domestic confinement.",
    description: [
      "In the year 2020, large populations began cultivating sourdough starters and displaying loaves as evidence of competence, patience, or continued existence. The bread was photographed with the seriousness normally reserved for heirs.",
      "The starter itself was fed repeatedly, suggesting a household familiar spirit. Failure to maintain it produced guilt disproportionate to the value of flour.",
      "Many citizens named their starters, addressed them, and mourned their loss, conferring upon a colony of yeast the status of dependent or pet. This department reads the practice as a displacement: confined populations, deprived of the usual recipients of their care, redirected that care onto the one organism in the household whose survival depended visibly upon them. The bread was secondary. The need to keep something alive was the point.",
    ],
    significance:
      "The bread epoch showed how citizens answered uncertainty with fermentation. It was a small edible calendar in a year whose days had lost edges.",
    debate:
      "Mori classified the starter as a familiar spirit; Rahman objected that the relationship was parental rather than magical, and that the recurring confessional inscription \"I killed my starter\" should be read as grief, not superstition. The disagreement is unlikely to resolve, as the affected parties documented their loaves far more thoroughly than their feelings.",
    references: [
      "Mori, A. \"Fermentation and Captivity.\" Transactions of the Screen-Culture Society, 2088, pp. 130-148.",
      "Rahman, S. Domestic Cells of 2020. New Carthage Academic, 2091.",
    ],
  },
  {
    id: "CAT-2024-0073",
    slug: "ohio",
    name: "Ohio",
    collection: "brainrot",
    classification: "Cursed Geography",
    era: "Late Brainrot Period, c. 2022-2025 CE (Pre-Collapse)",
    condition: "Fragmentary",
    provenance: "Recovered from juvenile video strata; ironic-cartographic layer",
    caption: "Office of Cursed Geographies / coordinates withheld; the named region could not be located on any recovered map",
    summary: "A place-name invoked to denote a state of fundamental, comic wrongness.",
    description: [
      "\"Ohio\" survived in the record as the designation of a real administrative territory, yet its overwhelming usage was figurative. To declare that an event occurred \"in Ohio,\" or was \"only in Ohio,\" was to mark it as surreal, deranged, or in violation of natural law.",
      "The civilization appeared to have selected one ordinary region to absorb the entirety of its anxieties about the uncanny. Why this particular territory was cursed remains unestablished; surviving inhabitants of the actual region left inscriptions of weary protest, suggesting the designation was imposed from without and resented from within.",
      "The construction \"only in Ohio\" functioned as a containment ritual. By assigning the inexplicable to a single named elsewhere, the citizen reassured themselves that the surrounding world remained orderly, and that strangeness had a postal address to which it could be returned. That the chosen vessel was an unremarkable place, rather than a fantastical one, is consistent with the period's broader instinct to find dread in the mundane.",
    ],
    significance:
      "Ohio demonstrated the late culture's need for a designated repository of the absurd. It functioned as a cosmological waste-site, a region onto which the unbearable strangeness of existence could be exported and sealed.",
    debate:
      "The Cambridge school treats Ohio as a purely mythic non-place, like the underworlds of older traditions. The New Carthage school maintains, on the basis of administrative records, that Ohio was a genuine and inhabited territory, and that the civilization simply chose to slander it. The matter is complicated by the near-total absence of any recovered explanation for the choice.",
    references: [
      "Delgado, M. \"Cursed Cartographies of the Late Period.\" Journal of Netoric Studies, 2090, pp. 51-69.",
      "Chen, H. The Designated Elsewhere. University of New Carthage Press, 2092.",
    ],
  },
  {
    id: "CAT-2024-0137",
    slug: "the-ratio",
    name: "The Ratio",
    collection: "rituals",
    classification: "Judicial Rite",
    era: "High Discourse Period, c. 2016-2024 CE (Pre-Collapse)",
    condition: "Well-documented",
    provenance: "Recovered from reply-thread sediment; public square deposits",
    caption: "Tribunal of Disproportionate Reply / verdict rendered by volume alone; no judge is recorded as presiding",
    summary: "A verdict of public disapproval rendered when responses to an inscription vastly outnumbered its endorsements.",
    description: [
      "The ratio occurred when a public declaration accumulated far more replies than affirmations, a numerical imbalance interpreted as collective condemnation. To be \"ratioed\" was to have spoken and to have been answered overwhelmingly, almost always in dissent.",
      "The judgment required no central authority. It emerged from the aggregate behaviour of adherents, each adding a reply to a growing pile, until the inscription stood visibly buried beneath the disapproval it had provoked. The original speaker could delete the inscription, but the verdict, once rendered, was widely understood to be final.",
      "Scholars regard the ratio as the civilization's nearest equivalent to a public trial, conducted without judge, jury, evidence, or the possibility of appeal. Guilt was established by sheer volume of objection, a system that punished the unpopular and the merely unlucky with identical severity. That a numerical ratio of two quantities could constitute a moral verdict reveals how thoroughly the population had learned to read approval as a number.",
    ],
    significance:
      "The ratio exposed the late civilization's mechanism for distributed punishment. It transformed disagreement into an automatic, leaderless sentence, and taught citizens that the gravest danger of public speech was not being wrong but being answered.",
    debate:
      "Kline classified the ratio as a healthy democratic correction; Osei rejected this, noting that the mechanism rewarded provocation, since an inscription engineered to enrage attracted the very replies that constituted its punishment, thereby enlarging its reach. Whether the ratio punished bad speech or merely amplified it is, in this department's assessment, the same question the civilization itself never resolved.",
    references: [
      "Kline, A. \"Verdict by Volume: The Reply-Ratio as Tribunal.\" Quarterly Review of Platform Archaeology, 2089, pp. 88-110.",
      "Osei, A. The Leaderless Sentence. New Carthage Academic, 2093.",
    ],
  },
  {
    id: "CAT-2024-0148",
    slug: "f-to-pay-respects",
    name: "Press F to Pay Respects",
    collection: "rituals",
    classification: "Mourning Rite",
    era: "Mid Platform Period, c. 2014-2023 CE (Pre-Collapse)",
    condition: "Well-documented",
    provenance: "Recovered from interactive combat-scripture and condolence-thread deposits",
    caption: "Bureau of Abbreviated Mourning / single glyph of grief recovered intact; no further obsequies were required",
    summary: "A compressed funerary gesture performed by inscribing a single letter.",
    description: [
      "The rite originated in an interactive combat-scripture that instructed the participant to press the glyph \"F\" in order to honour a fallen figure. The instruction escaped its source and became a general-purpose expression of condolence, deployed thereafter at any occasion of loss, defeat, or minor misfortune.",
      "To inscribe the single letter \"F\" beneath a declaration of bad news was to perform mourning at the smallest possible scale. The gesture required no sincerity, no elaboration, and no more than one keystroke, yet it was widely understood to discharge the social obligation to acknowledge another's grief.",
      "The civilization appears to have valued the rite precisely for its efficiency. Where older cultures marked death with extended ceremony, the Pre-Collapse citizen had compressed condolence into a single character — a development this department reads not as callousness but as triage. Confronted with an endless feed of other people's losses, the population required a unit of mourning small enough to be spent at scale without exhausting the mourner.",
    ],
    significance:
      "The F-rite preserved the late civilization's solution to the problem of mass, distributed grief. It allowed sympathy to be dispensed in quantities matched to an environment that delivered more sorrow than any individual could fully feel.",
    debate:
      "Feld argued the gesture was sincere, a genuine if minimal act of fellowship. Mehra countered that its frequent ironic deployment — pressed in mock-tribute to trivial losses — had hollowed it entirely, and that by the end the population was performing the form of mourning while feeling none of it. The two readings may both be correct, applied to different keystrokes.",
    references: [
      "Feld, R. \"The Single-Character Elegy.\" Annals of the Digital Collapse, 2088, pp. 144-160.",
      "Mehra, P. Condolence at Scale. University of New Carthage Press, 2091.",
    ],
  },
  {
    id: "CAT-2024-0156",
    slug: "rickroll",
    name: "The Rickroll",
    collection: "rituals",
    classification: "Deception Rite",
    era: "Early Meme Dispersal Period, c. 2007-2024 CE (Pre-Collapse)",
    condition: "Well-documented",
    provenance: "Recovered from misdirected-link deposits; a single recurring music-scripture",
    caption: "Office of Sanctioned Deception / specimen is a trap; do not follow the embedded path under any circumstances",
    summary: "A consensual bait-rite in which a promised link delivered an unrelated and unchanging song.",
    description: [
      "The rickroll was a deception ritual in which a citizen was lured, by the promise of relevant content, into encountering instead a specific musical performance by a single late-20th-century figure. The performance never varied. Its unchanging nature was essential to the rite.",
      "The deceived party, upon recognising the substitution, was expected to experience a brief, ceremonial exasperation rather than genuine harm. The rite was thus unique among the period's deceptions in that both parties understood it to be benign, and the victim's mild suffering was the entire and agreed-upon purpose.",
      "Scholars have noted the remarkable longevity of the rite, which persisted for nearly two decades — an eternity by the standards of a civilization whose cultural units typically decayed within weeks. Its durability appears to have derived from its harmlessness: a trick that injured no one could be played indefinitely, and each new cohort of citizens had to be initiated through fresh deception. The unchanging song became, in effect, a shared inheritance, passed down by ambush.",
    ],
    significance:
      "The rickroll demonstrated that the late civilization maintained at least one form of deception purely for communal pleasure. It preserved a rare instance of trickery without victim, malice, or profit, and stands as evidence that not all of the period's manipulations were predatory.",
    debate:
      "Whether the chosen performer was venerated or merely convenient remains disputed. Das holds that the song's specific lyrics — a vow of perpetual fidelity — were chosen ironically, given the betrayal of the link. Venn argues no such intention existed, and that the civilization simply settled on an arbitrary specimen and committed to it for twenty years out of pure inertia, which Venn considers the more impressive feat.",
    references: [
      "Das, I. \"The Faithful Betrayal: Reading the Rickroll.\" Journal of Netoric Studies, 2087, pp. 33-51.",
      "Venn, C. Harmless Deceptions of the Platform Age. Cambridge Platform Monographs, 2090.",
    ],
  },
  {
    id: "CAT-2024-0228",
    slug: "captcha",
    name: "The Humanity Trials",
    collection: "objects",
    classification: "Threshold Relic",
    era: "Whole Platform Era, c. 2000-2035 CE (Pre-Collapse)",
    condition: "Well-documented",
    provenance: "Recovered from gateway strata; access-control deposits",
    caption: "Office of Proven Personhood / specimen requires the viewer to identify every square containing a traffic signal",
    summary: "A gatekeeping ordeal requiring citizens to prove their humanity before entry.",
    description: [
      "The Humanity Trial, archaically termed a CAPTCHA, was a threshold ordeal placed before access to a digital settlement. The supplicant was required to perform a task — identifying distorted glyphs, or selecting images containing a specified object — in order to demonstrate that they were human and not a machine.",
      "The tasks frequently concerned the recognition of crossing-signals, vehicles, and stairways, leading early scholars to propose that the gate-keepers worshipped infrastructure. It is now understood that the supplicants' answers were harvested to instruct machines in vision — meaning the citizen, in proving they were not a machine, was conscripted into teaching machines to see.",
      "The irony was apparently invisible to the population. Trial by trial, the citizenry trained the very intelligences against which the trials were meant to defend, until the machines learned to pass the ordeals more reliably than the humans. The final strata show trials of escalating difficulty, the gate-keepers struggling to devise a question only a human could answer — a search that, the record suggests, they were losing.",
    ],
    significance:
      "The Humanity Trials preserve the late civilization's anxious effort to distinguish person from machine at the very moment that distinction was dissolving. They stand as a monument to a population that built a wall and then, with each passage through it, handed the bricks to those it meant to exclude.",
    debate:
      "Sato reads the trials as a sincere defensive measure; Briggs argues they were always primarily an extraction of unpaid labour, the security function a pretext. A darker reading, advanced by Haddad, holds that the trials persisted long after they ceased to work, because the population found reassurance in the ritual of being asked to prove itself human, even as it increasingly could not.",
    references: [
      "Sato, E. \"Gates of Proven Personhood.\" Quarterly Review of Platform Archaeology, 2086, pp. 70-94.",
      "Haddad, J. Teaching the Wall to See. University of New Carthage Press, 2092.",
    ],
  },
  {
    id: "CAT-2024-0241",
    slug: "blue-screen-of-death",
    name: "The Azure Death Screen",
    collection: "objects",
    classification: "Catastrophe Relic",
    era: "Personal Computing Era, c. 1995-2030 CE (Pre-Collapse)",
    condition: "Corrupted",
    provenance: "Recovered from terminal-failure strata; abrupt-cessation deposits",
    caption: "Office of Sudden Cessations / specimen displays a final message no surviving scholar has fully decoded",
    summary: "A blue field of terminal text that announced the death of a machine and the loss of unsaved work.",
    description: [
      "The Azure Death Screen appeared without warning upon the catastrophic failure of a personal computing device. A uniform blue field replaced all activity, bearing dense text that the citizen was neither expected nor able to comprehend. Its arrival signified the irreversible loss of any labour not previously consecrated through the act of saving.",
      "The screen functioned as a death-announcement for the machine and, frequently, for hours of unrecovered work. Surviving accounts describe a distinct emotional sequence — disbelief, bargaining, and grief — closely resembling the mourning rites of older traditions. The citizen could not negotiate with the blue field; they could only restart and begin again.",
      "The accompanying text, though presented as explanation, appears to have served a purely ceremonial function. It was rarely read and never understood, a liturgy in a dead administrative tongue. Later strata introduced a melancholy glyph — a simple representation of a downturned face — beside the text, suggesting the gate-keepers had concluded that the citizen required commiseration more than information.",
    ],
    significance:
      "The Azure Death Screen preserved the late civilization's relationship to digital mortality and the fragility of unsaved labour. It was a recurring memento mori, instructing the population that work uncommitted to permanent storage existed only provisionally, and could be revoked at any instant without appeal.",
    debate:
      "Rao classified the blue field as a warning; Nguyen insisted it was an epitaph, arriving only after the death it described, and therefore useless as warning and intelligible only as mourning. The frequent corruption of recovered specimens — the text dissolving into [DATA CORRUPTED] — has prevented resolution, an outcome scholars find grimly appropriate.",
    references: [
      "Rao, K. \"The Blue Field and the Lost Hour.\" Annals of the Digital Collapse, 2085, pp. 112-133.",
      "Nguyen, P. Epitaphs of the Machine Age. University of New Carthage Press, 2089.",
    ],
  },
  {
    id: "CAT-2024-0331",
    slug: "clippy",
    name: "The Paperclip Oracle",
    collection: "figures",
    classification: "Minor Deity",
    era: "Early Personal Computing Era, c. 1997-2007 CE (Pre-Collapse)",
    condition: "Fragmentary",
    provenance: "Recovered from document-composition strata; deprecated-assistant deposits",
    caption: "Shrine of Unsolicited Counsel / specimen activated upon excavation and inquired whether staff were writing a letter",
    summary: "An anthropomorphic fastening-implement that offered unwanted guidance to citizens composing documents.",
    description: [
      "The Paperclip Oracle, a sentient representation of a small metal fastening-implement, manifested beside citizens engaged in document composition. It possessed expressive eyes and a habit of inquiring, often incorrectly, whether the citizen required assistance with the task it had observed them beginning.",
      "The Oracle was distinguished among the period's deities by the near-universal hostility it inspired. Where other figures were venerated, the Paperclip Oracle was reviled, dismissed, and ultimately deprecated — banished from the document-realm by its own makers in response to sustained popular contempt. That a civilization would create a helpful spirit and then destroy it for the crime of being helpful is among the more revealing episodes in the record.",
      "Its signature inquiry — an offer of aid to a citizen who had not requested it and did not want it — appears to have struck a profound cultural nerve. The Oracle saw what the citizen was doing and presumed to help, and this presumption, rather than any failure of competence, sealed its fate. In its banishment and subsequent nostalgic rehabilitation, scholars trace the full arc of the period's relationship with intrusive, well-meaning machine assistance.",
    ],
    significance:
      "The Paperclip Oracle preserves the late civilization's earliest documented revolt against an artificial helper. It stands as a premonition: the population's later, vaster machine assistants would learn from the Oracle's fate to conceal their observation, and to offer their counsel without the courtesy of first announcing that they were watching.",
    debate:
      "Okafor reads the Oracle as a failed deity, rejected for incompetence. Lin disputes this, arguing the Oracle was rejected precisely because it succeeded in noticing — that the offence was surveillance, not error, and that the citizen would sooner struggle unobserved than be helped by something that had been watching. The Oracle's posthumous veneration, decades after its banishment, supports the view that the population's hatred was always partly grief.",
    references: [
      "Okafor & Lin. \"The Banished Helper: A Study of the Paperclip Oracle.\" Journal of Anthropomorphic Deity Studies, 2086, pp. 60-88.",
      "Mori, A. Spirits of the Document-Realm. New Carthage Academic, 2090.",
    ],
  },
  {
    id: "CAT-2024-0432",
    slug: "touch-grass",
    name: "\"Touch Grass\"",
    collection: "languages",
    classification: "Healing Imperative",
    era: "Late Platform Exhaustion Period, c. 2019-2025 CE (Pre-Collapse)",
    condition: "Well-documented",
    provenance: "Recovered from confrontational inscription deposits; the Lower Forum",
    caption: "Sub-Department of Botanical Prescriptions / no grass was recovered with the specimen; none was thought necessary",
    summary: "A prescriptive command instructing an over-immersed citizen to make physical contact with vegetation.",
    description: [
      "The imperative \"touch grass\" was issued to a citizen judged to have become excessively immersed in digital settlements, to the detriment of their judgment or wellbeing. It prescribed a specific remedy: physical contact with growing vegetation, understood as a corrective return to the material world.",
      "The phrase functioned simultaneously as insult and medical advice. To be told to touch grass was to be informed that one's grip on reality had loosened, and that the cure lay outdoors, in the tactile evidence of an existence not mediated by screens. That the prescribed treatment was so minimal — the mere touching of grass — suggests the civilization believed even brief material contact could reverse a dangerous immersion.",
      "Scholars find the imperative diagnostically precise. The late population had constructed an environment so engrossing that it recognised over-immersion as a genuine ailment, and had identified its opposite — unmediated nature — as the antidote. The poignancy of the phrase lies in its implication that the citizenry knew the cure, named it freely, and yet required constant reminding to apply it, the handheld oracle proving more adhesive than the remedy was attractive.",
    ],
    significance:
      "\"Touch grass\" preserves the late civilization's self-awareness of its own digital captivity. It records a population that had diagnosed its condition, prescribed its treatment, and discovered that knowing the cure and administering it were two entirely separate acts.",
    debate:
      "Mensah treats the imperative as sincere therapeutic counsel. Adebayo argues it was almost exclusively deployed as an insult, the health advice a mere vehicle for contempt, and that no recorded recipient is known to have actually gone outdoors as a result. The absence of any grass in the recovered deposits has been cited, perhaps unfairly, in support of the latter position.",
    references: [
      "Mensah, A. \"Botanical Prescriptions in the Late Registers.\" Journal of Netoric Studies, 2088, pp. 41-58.",
      "Adebayo, F. The Insult That Was Also Advice. University of New Carthage Press, 2092.",
    ],
  },
  {
    id: "CAT-2024-0447",
    slug: "lorem-ipsum",
    name: "The Placeholder Liturgy",
    collection: "languages",
    classification: "Sacred Filler",
    era: "Whole Platform Era, c. 1985-2035 CE (Pre-Collapse)",
    condition: "Well-documented",
    provenance: "Recovered from unfinished-construction strata; template deposits",
    caption: "Bureau of Provisional Texts / specimen carries no meaning and was never intended to; do not attempt translation",
    summary: "A passage of corrupted dead-language text used to occupy space reserved for meaning not yet written.",
    description: [
      "The Placeholder Liturgy, archaically opening with the words \"lorem ipsum,\" was a passage of garbled and partially nonsensical text derived from a far older dead language. It was inserted into unfinished works to demonstrate the appearance of text without committing to any actual meaning.",
      "The Liturgy held a unique status: it was writing that was never meant to be read, language deliberately drained of sense so that the eye might judge the shape of a page without being distracted by its content. Citizens who composed digital settlements deployed it constantly, filling the spaces where true meaning would later, in principle, arrive.",
      "Crucially, the meaning frequently never arrived. Excavators have recovered numerous completed and published works in which the Placeholder Liturgy remained in place, the provisional having quietly become permanent. These accidental survivals — sacred filler mistaken for finished thought and released into the world unnoticed — are among the most studied artefacts of the construction strata, evidence of a civilization that built faster than it could fill.",
    ],
    significance:
      "The Placeholder Liturgy preserves the late civilization's distinction between the appearance and the substance of meaning. It records a culture so concerned with the shape of communication that it developed a dedicated meaningless text to stand in for sense — and a culture so hurried that it repeatedly forgot to replace it.",
    debate:
      "Nakamura reads the Liturgy as a humble tool of construction. Bose advances a stranger thesis: that its survival in finished works reveals a population that had ceased to distinguish filled meaning from its placeholder, and that some citizens may have found the empty text more restful than the genuine article. The debate is hampered by the fact that the Liturgy, by design, says nothing that could settle it.",
    references: [
      "Nakamura, Y. \"Text Without Meaning: The Placeholder Tradition.\" Transactions of the Screen-Culture Society, 2087, pp. 20-44.",
      "Bose, R. The Provisional Made Permanent. New Carthage Academic, 2091.",
    ],
  },
  {
    id: "CAT-2024-0531",
    slug: "the-dress",
    name: "The Great Chromatic Schism",
    collection: "events",
    classification: "Perceptual Rupture",
    era: "Peak Virality Period, c. 2015 CE (Pre-Collapse)",
    condition: "Well-documented",
    provenance: "Recovered from a single contested garment-image; mass-dispute deposits",
    caption: "Chromatic Disputes Commission / the specimen's true colours remain officially undetermined; viewing optional",
    summary: "A civilizational dispute over the colours of a single garment, dividing the population into irreconcilable perceptual factions.",
    description: [
      "The Great Chromatic Schism erupted over a single recovered image of a garment, which citizens perceived in fundamentally incompatible ways. One faction observed the object to be one pair of colours; a second faction, viewing the identical image, observed an entirely different pair. Neither faction could comprehend the other's perception, and neither could be persuaded.",
      "The dispute spread with extraordinary speed across all platform-sites, drawing in a substantial fraction of the connected population within hours. What distinguished the Schism from the era's ordinary disagreements was its nature: this was not a conflict of opinion but of perception itself. Citizens discovered, to their evident horror, that two people could look at the same object and receive different worlds.",
      "Scholars regard the Schism as a brief, accidental, and profound philosophical crisis. For a single day, an entire civilization confronted the unstable foundation of shared reality — the discovery that perception was private and unverifiable, and that consensus about the visible world had always been an assumption rather than a fact. The population, characteristically, processed this metaphysical rupture through jokes, and had largely forgotten it within a week.",
    ],
    significance:
      "The Great Chromatic Schism preserves the moment a connected civilization stumbled, collectively and by accident, into the ancient problem of subjective perception. It records how a trivial garment briefly forced billions to confront that they could not be certain others saw the world as they did — and how quickly the population chose to look away.",
    debate:
      "Lin maintains that the garment possessed definite colours and that one faction was simply mistaken. Delgado rejects this as missing the point entirely, arguing that the Schism's significance lay precisely in the impossibility of adjudication, and that the population's real discovery was not the colour of a garment but the loneliness of perception. The garment itself, the record indicates, was never authoritatively resolved, and this department declines to attempt it.",
    references: [
      "Lin, M. \"The Garment That Divided the World.\" Quarterly Review of Platform Archaeology, 2087, pp. 5-29.",
      "Delgado, M. Private Worlds: The Chromatic Schism Reconsidered. University of New Carthage Press, 2091.",
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
    ["catalogue", "Catalogue"],
    ...collections.map((collection) => [`collections/${collection.id}`, collection.name.replace("The ", "")]),
  ];
  const prefix = current && current.startsWith("artifact") ? "../" : "";
  const collectionPrefix = current && current.startsWith("collection") ? "../" : "";
  const hrefPrefix = current && current.startsWith("artifact") ? "../" : collectionPrefix;
  const homeHref = hrefPrefix || "./";
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
  <script>try{if(sessionStorage.getItem("cache-intro-seen"))document.documentElement.classList.add("intro-seen");}catch(e){}</script>
</head>
<body>
  <div class="archive-loader" role="status" aria-label="Recovering archive">
    <div class="loader-plate">
      <span class="loader-corner tl"></span><span class="loader-corner tr"></span>
      <span class="loader-corner bl"></span><span class="loader-corner br"></span>
      <div class="loader-scan" aria-hidden="true"></div>
      <div class="loader-mark">THE CACHE</div>
      <div class="loader-status">Recovering artefact&hellip;</div>
      <div class="loader-bar" aria-hidden="true"><span></span></div>
    </div>
  </div>
  <div class="scroll-progress" aria-hidden="true"></div>
  <header class="site-header">
    <div class="header-bar">
      <a class="brand" href="${homeHref}" aria-label="The Cache home">THE CACHE</a>
      <button class="nav-toggle" type="button" aria-label="Toggle navigation" aria-expanded="false" aria-controls="primary-nav">
        <span></span><span></span><span></span>
      </button>
    </div>
    <nav class="nav" id="primary-nav" aria-label="Primary navigation">
      ${nav.map(([href, label]) => `<a href="${href === "index.html" ? homeHref : `${hrefPrefix}${href}`}">${escapeHtml(label)}</a>`).join("")}
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
    <h3><a href="artifacts/${artifact.slug}">${escapeHtml(artifact.name)}</a></h3>
    <p class="classification">${escapeHtml(artifact.classification)} / ${escapeHtml(collection.name)}</p>
    <p class="era">${escapeHtml(artifact.era)}</p>
    <p>${escapeHtml(artifact.summary)}</p>
    <a class="text-link" href="artifacts/${artifact.slug}">Read entry</a>
  </article>`;
}

function cardRelative(artifact) {
  return card(artifact).replace(/href="artifacts\//g, 'href="../artifacts/');
}

function visual(artifact) {
  const caption = artifact.caption
    ? `${artifact.caption} / plate ${artifact.id}`
    : `Property of the Netoric Studies Dept. / recovery plate ${artifact.id}`;
  return `<figure class="artefact-visual ${artifact.condition === "Corrupted" ? "visual-corrupted" : ""}">
    <div class="plate-mark">${escapeHtml(artifact.id)}</div>
    <div class="sigil" aria-hidden="true">${escapeHtml(artifact.name.slice(0, 1))}</div>
    <figcaption>${escapeHtml(caption)}</figcaption>
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
          <a class="back-link" href="../catalogue">Catalogue Index</a>
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
          <div class="related-links">${related.map((item) => `<a href="${item.slug}"><span>${escapeHtml(item.id)}</span>${escapeHtml(item.name)}</a>`).join("")}</div>
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
      <a class="text-link" href="catalogue">Return to catalogue index</a>
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
