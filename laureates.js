/*
 * Utubaa Village — illustrative laureate data.
 * IMPORTANT: every record here is an ILLUSTRATIVE COMPOSITE created to show how a
 * pillar will appear. No real person is depicted. Nominations formally open in 2028.
 * The structure mirrors the founding "life-stage ledger": each life is told in stages,
 * and each stage carries contribution (verified), why it went unseen, failures & costs
 * (self-authored), lessons for humanity, and the belief held at the end of that stage.
 */
window.FIELDS = {
  ED: "Education & Mentorship",
  HE: "Health & Care",
  AG: "Agriculture & Food",
  SC: "Science & Scholarship",
  TE: "Technology & Engineering",
  EN: "Environment & Stewardship",
  CJ: "Community & Social Justice",
  PH: "Peace & Humanitarian Action",
  CU: "Culture, Language & Heritage",
  CR: "Craft & Vocational Mastery",
  EC: "Economic Empowerment",
  GO: "Ethical Public Service"
};
window.MODES = {
  M1: "Practice", M2: "Innovation", M3: "Transmission", M4: "Protection", M5: "Building"
};

window.LAUREATES = [
  {
    id: "teacher-amhara",
    name: "Tsehay G. (illustrative)",
    field: "ED", mode: "M3", color: "#078930",
    role: "Village teacher, Amhara Region",
    region: "Amhara",
    languages: "Amharic",
    cite: "For forty-one years teaching the children of one highland village to read — and refusing three transfers to the town so that the girls would not lose their teacher.",
    verification: { witnesses: 7, evidenceItems: 7, evidenceTypes: "School registers, church records, 12 former-pupil testimonies, on-site inspection", years: 41 },
    stages: [
      {
        stage: "The one-room years", period: "1984–2003", role: "Sole teacher, informal village school",
        contribution: [
          "Taught reading and arithmetic to roughly 900 children across two decades in a village with no government school, under a shared shelter she maintained herself.",
          "Kept girls in class by walking them home through the years when families feared the road — verified by twelve former pupils, now grandmothers, interviewed separately."
        ],
        recognitionAbsence: "The school was never on any ministry register, so none of the work appears in official records; it survives only in the memory of those she taught.",
        failures: [
          "Turned away over-age boys in the early years for lack of room, some of whom never learned to read — a decision she calls the regret she carries.",
          "Lost a full year's lessons in a dispute with an elder she now believes she handled with pride rather than patience."
        ],
        lessons: [
          "Teach the child in front of you, not the class you wish you had.",
          "A teacher who leaves for the town teaches the village one last lesson: that they were worth leaving."
        ],
        belief: { text: "I used to think I was giving them letters. I came to see the letters were the smallest thing I gave.", date: "2003" }
      },
      {
        stage: "Handing it on", period: "2003–2025", role: "Mentor to younger teachers",
        contribution: [
          "Trained nineteen younger teachers who now staff four government schools in the woreda, each of whom names her as the reason they stayed in the profession.",
          "Persuaded the community to build a permanent two-room school, which she then declined to be named after."
        ],
        recognitionAbsence: "She insisted her name be left off the building and the training was never formalized, so the lineage of teachers she raised is invisible on paper.",
        failures: [
          "Held on to old methods too long, she says, and discouraged a young teacher's new ideas that later proved right."
        ],
        lessons: [
          "The measure of a teacher is not the pupils she keeps but the teachers she releases.",
          "Correct the young quietly and praise them loudly; you will not always be there to defend them."
        ],
        belief: { text: "A pillar is not the one who stands tallest. It is the one others lean on and do not feel the weight.", date: "2025" }
      }
    ],
    obelisk: "Tier 2 — a 360° film walks the visitor through the highland path she walked with her pupils."
  },
  {
    id: "farmer-borana",
    name: "Boru D. (illustrative)",
    field: "AG", mode: "M2", color: "#DA121A",
    role: "Farmer-innovator, Oromia (Borana)",
    region: "Oromia",
    languages: "Afaan Oromo",
    cite: "For a drought-resistant way of intercropping that spread by word of mouth to more than four thousand pastoralist households — carried farmer to farmer, never sold.",
    verification: { witnesses: 7, evidenceItems: 7, evidenceTypes: "Agronomist site survey, yield sampling across 14 farms, 4,000+ household adoption trace, cooperative records", years: 22 },
    stages: [
      {
        stage: "The dry years", period: "2003–2014", role: "Herder turned cultivator",
        contribution: [
          "Developed a low-water intercropping method that kept families fed through three drought cycles, verified by an agronomist's yield sampling across fourteen farms.",
          "Taught the method to any neighbor who asked and refused every offer to patent or brand it."
        ],
        recognitionAbsence: "Because he never sold or published the method, no institution recorded it; its spread is known only by tracing which households learned it from whom.",
        failures: [
          "His first two seasons failed and cost the family its cattle; neighbors mocked the experiment before it worked.",
          "He admits he ignored the women's seed knowledge for years, and the method improved only once he listened."
        ],
        lessons: [
          "Feed your neighbor's herd and you have fed your own, one season later.",
          "The oldest woman in the village knows something the newest agronomist does not. Ask her first."
        ],
        belief: { text: "The land does not belong to us. We are the ones who must answer to it for what the children eat.", date: "2014" }
      }
    ],
    obelisk: "Tier 1 — a photo-story and recorded testimony in Afaan Oromo, shown in the woreda's school kiosk."
  },
  {
    id: "midwife-gamo",
    name: "Marta H. (illustrative)",
    field: "HE", mode: "M1", color: "#078930",
    role: "Community midwife, South Ethiopia (Gamo)",
    region: "South Ethiopia",
    languages: "Gamo, Amharic",
    cite: "For thirty years walking mountain footpaths to reach mothers in labour, and for the maternal deaths that fell to near zero in the kebeles she served.",
    verification: { witnesses: 7, evidenceItems: 7, evidenceTypes: "Health-post records, district mortality data, 20 mother interviews, midwife-register", years: 30 },
    stages: [
      {
        stage: "The footpaths", period: "1995–2012", role: "Traditional then trained birth attendant",
        contribution: [
          "Attended more than 1,300 births across scattered mountain kebeles, verified against health-post records and twenty mothers interviewed by the field team.",
          "Cut maternal deaths in her area to near zero by learning to recognize danger early and carry mothers to the road herself."
        ],
        recognitionAbsence: "Much of her work predated any health-post register, so most of the births she attended exist only in the families' memory and her own worn notebook.",
        failures: [
          "She lost two mothers she believes she could have saved had she known then what she learned later — she asked that both be named in her record, so the lesson is not lost."
        ],
        lessons: [
          "Fear in the mother's eyes is data. Trust it before the chart.",
          "Arriving late with the right thing is worse than arriving early with your two hands."
        ],
        belief: { text: "I never once delivered a child alone. The mother did the work. I only refused to let her do it afraid.", date: "2012" }
      }
    ],
    obelisk: "Tier 2 — a 360° film of the footpaths she walked, with her own recorded account."
  },
  {
    id: "water-somali",
    name: "Yusuf A. (illustrative)",
    field: "EN", mode: "M4", color: "#DA121A",
    role: "Water steward & peacemaker, Somali Region",
    region: "Somali",
    languages: "Somali, Amharic",
    cite: "For keeping a shared well open to every clan through years of dispute, and for turning a source of conflict into a place of agreement.",
    verification: { witnesses: 7, evidenceItems: 7, evidenceTypes: "Elders' council testimony, water-committee records, 3 clan attestations, site inspection", years: 18 },
    stages: [
      {
        stage: "The shared well", period: "2007–2025", role: "Water-committee custodian",
        contribution: [
          "Kept a single well open to rival clans through eighteen years of drought and dispute, verified by elders of three clans interviewed separately.",
          "Built a rotation agreement that ended repeated conflict over the water, now used at four other wells in the district."
        ],
        recognitionAbsence: "The agreements were oral and customary, honoured by all and written down by none, so the peace he kept leaves almost no paper trace.",
        failures: [
          "An early rule he imposed favoured his own clan without his seeing it, and nearly broke the trust; he undid it publicly and says the apology taught him more than the plan."
        ],
        lessons: [
          "Whoever controls the water must be the one who drinks last.",
          "A rule that helps your own people quietly will cost you all people loudly."
        ],
        belief: { text: "Water has no clan. The moment we remembered that, the well stopped being a reason to fight.", date: "2025" }
      }
    ],
    obelisk: "Tier 1 — a photo-story and recorded testimony, with the well and the rotation agreement."
  },
  {
    id: "reconciler-tigray",
    name: "Gebre M. (illustrative)",
    field: "PH", mode: "M4", color: "#078930",
    role: "Reconciliation elder, Tigray Region",
    region: "Tigray",
    languages: "Tigrinya, Amharic",
    cite: "For sitting between grieving families year after year until they could share a table — and for burying no grudge he was asked to carry.",
    verification: { witnesses: 7, evidenceItems: 7, evidenceTypes: "Community-court records, 15 reconciled-family testimonies, church attestation, site interviews", years: 27 },
    stages: [
      {
        stage: "The long mediations", period: "1998–2025", role: "Customary reconciler (shimagle)",
        contribution: [
          "Mediated more than two hundred disputes and blood-feuds to lasting settlement, verified through fifteen reconciled families interviewed separately.",
          "Reopened dialogue between communities after years of silence, refusing payment or favour from either side."
        ],
        recognitionAbsence: "Customary reconciliation leaves little record by design — its success is measured in quarrels that never resumed, which no register can count.",
        failures: [
          "One reconciliation he rushed collapsed and a feud reopened; he counts it as proof that peace cannot be hurried to suit an elder's tiredness."
        ],
        lessons: [
          "Sit longer than you think you can. The truth arrives after the anger is spent, not before.",
          "The reconciler who takes a side has only two clients left, and soon none."
        ],
        belief: { text: "I did not make peace. I kept the two of them in the room long enough for the peace that was already there to be remembered.", date: "2025" }
      }
    ],
    obelisk: "Tier 2 — a 360° film of the reconciliation ground, with his recorded reflection."
  },
  {
    id: "deaf-educator-sidama",
    name: "Loza T. (illustrative)",
    field: "CJ", mode: "M2", color: "#DA121A",
    role: "Deaf educator & sign-language pioneer, Sidama Region",
    region: "Sidama",
    languages: "Ethiopian Sign Language, Amharic, Sidaamu Afoo",
    cite: "For opening the first classroom in her town where deaf children were taught in their own language — and for the sign vocabulary she built so their world could be named.",
    verification: { witnesses: 7, evidenceItems: 7, evidenceTypes: "School records, 10 deaf-alumni testimonies (signed, video), sign-lexicon archive, site inspection", years: 24 },
    stages: [
      {
        stage: "Naming the world", period: "2001–2025", role: "Founder-teacher, deaf classroom",
        contribution: [
          "Taught more than three hundred deaf children who had been kept home, verified by ten deaf alumni whose signed testimonies were recorded and read back.",
          "Built and documented local signs for schoolwork and daily life where none existed, now used by teachers beyond her town."
        ],
        recognitionAbsence: "Because the children she reached had been treated as uneducable, there were no records to begin with — she had to create the very register that now proves the work.",
        failures: [
          "For her first years she taught only speech-reading, following the advice of experts, and lost trust with families before she abandoned it for signing.",
          "She excluded parents at first, she says, and learned too late that a deaf child with signing parents is a different child."
        ],
        lessons: [
          "A child is not broken because you cannot yet hear what they are saying.",
          "Do not teach a child to imitate the hearing world. Teach the hearing world to meet the child."
        ],
        belief: { text: "They were never silent. We were the ones who had not learned to listen with our eyes.", date: "2025" }
      }
    ],
    obelisk: "Tier 3 — a full virtual reconstruction of the first classroom, with signed testimony throughout."
  }
];
