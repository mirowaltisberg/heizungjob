// SEO-DECISION: Comprehensive landing page matrix covering 12 roles × 8 cantons = 96 combinations.
// Each page has unique title, description, intro text, and FAQs for content depth and
// geographic targeting without keyword cannibalization.

export interface LandingFaq {
  question: string;
  answer: string;
}

export interface LandingPageConfig {
  role: string;
  canton: string;
  title: string;
  description: string;
  intro: string;
  roleDescription: string;
  salaryRange: string;
  requirements: string;
  career: string;
  cantonContext: string;
  faqs: LandingFaq[];
}

// --- Role-specific content templates ---
// Used to generate unique content per role × canton combination.

interface RoleContent {
  /** Short role label for titles */
  label: string;
  /** Longer description of what this role does */
  roleDescription: string;
  /** Typical salary range string */
  salaryRange: string;
  /** Key requirements */
  requirements: string;
  /** Career progression options */
  career: string;
  /** Related roles */
  related: string[];
}

const ROLE_CONTENT: Record<string, RoleContent> = {
  "Heizungsinstallateur EFZ": {
    label: "Heizungsinstallateur EFZ",
    roleDescription:
      "Heizungsinstallateure EFZ planen, installieren und warten Heizungsanlagen in Wohn-, Gewerbe- und Industriebauten. Sie verlegen Rohrleitungen, montieren Heizkörper und Wärmepumpen, nehmen Anlagen in Betrieb und führen Druckprüfungen und Sicherheitskontrollen durch.",
    salaryRange: "CHF 72'000 – 90'000",
    requirements:
      "Abgeschlossene 4-jährige Lehre als Heizungsinstallateur EFZ, gute Kenntnisse der SWKI-Richtlinien und Schweizer Normen, Fahrausweis Kategorie B.",
    career:
      "Weiterbildung zum Heizungsmeister, Gebäudetechnikplaner Heizung oder eidg. dipl. Gebäudetechnikingenieur HLKS.",
    related: ["Servicemonteur Heizung", "Wärmepumpen-Spezialist", "Betriebstechniker Heizung"],
  },
  "Servicemonteur Heizung": {
    label: "Servicemonteur Heizung",
    roleDescription:
      "Servicemonteure Heizung führen Montagearbeiten an Heizungsanlagen in Gebäuden aus — von der Rohrmontage über den Einbau von Heizverteilern bis zur Installation von Heizkörpern und Radiatoren. Sie arbeiten meist im Team auf Baustellen und in Bestandsgebäuden.",
    salaryRange: "CHF 70'000 – 88'000",
    requirements:
      "Abgeschlossene Lehre im Heizungsbereich oder gleichwertige Ausbildung, handwerkliches Geschick, Teamfähigkeit.",
    career:
      "Weiterbildung zum Heizungsinstallateur EFZ, Vorarbeiter oder Teamleiter auf Baustellen.",
    related: ["Heizungsinstallateur EFZ", "Heizungsmonteur", "Wärmepumpen-Spezialist"],
  },
  "Wärmepumpen-Spezialist": {
    label: "Wärmepumpen-Spezialist",
    roleDescription:
      "Wärmepumpen-Spezialisten planen, installieren und warten Wärmepumpenanlagen für Heizung und Warmwasser. Sie beheben Störungen direkt beim Kunden, führen Inbetriebnahmen durch und beraten Kunden zu Effizienzoptimierung und Förderprogrammen des Bundes und der Kantone.",
    salaryRange: "CHF 75'000 – 95'000",
    requirements:
      "Ausbildung als Heizungsinstallateur EFZ, fundierte Kenntnisse der Wärmepumpentechnik, Kältemittelzertifikat von Vorteil, Fahrausweis.",
    career:
      "Spezialisierung auf Erdsonden, Luft-Wasser-Systeme oder hybride Heizsysteme. Weiterbildung zum Energieberater oder Projektleiter HLKS.",
    related: ["Heizungsinstallateur EFZ", "Kältetechniker", "Gebäudetechniker HLKS"],
  },
  "Projektleiter HLKS": {
    label: "Projektleiter HLKS",
    roleDescription:
      "Projektleiter HLKS leiten Heizungs-, Lüftungs-, Klima- und Sanitärprojekte von der Offerte über die Planung bis zur Übergabe. Sie führen Montageequipen, kontrollieren Kosten und Termine und beraten Bauherren, Architekten und Generalunternehmer.",
    salaryRange: "CHF 85'000 – 110'000",
    requirements:
      "Weiterbildung zum Gebäudetechnikplaner oder Projektleiter HLKS, Führungserfahrung, Kenntnisse in MSR-Technik und SWKI-Richtlinien, Verhandlungsgeschick.",
    career:
      "Aufstieg zum Bereichsleiter, Niederlassungsleiter oder Gründung eines eigenen HLKS-Betriebs.",
    related: ["Bauleiter HLKS", "Heizungsplaner", "Heizungsinstallateur EFZ"],
  },
  "Heizungsplaner": {
    label: "Heizungsplaner",
    roleDescription:
      "Heizungsplaner erstellen Heizungspläne und Installationsschemen für Neubauten und Sanierungen. Sie berechnen Heizlasten, dimensionieren Verteilsysteme und Wärmeerzeuger und arbeiten eng mit Architekten, Bauherren und Energieberatern zusammen.",
    salaryRange: "CHF 78'000 – 98'000",
    requirements:
      "Ausbildung als Heizungsinstallateur EFZ mit Weiterbildung zum Gebäudetechnikplaner Heizung oder HLK-Ingenieur, CAD- und Simulationskenntnisse.",
    career:
      "Aufstieg zum Planungsleiter, Spezialisierung auf Energieberatung, Gebäudezertifizierung (Minergie) oder nachhaltiges Bauen.",
    related: ["Projektleiter HLKS", "Bauleiter HLKS", "Gebäudetechniker HLKS"],
  },
  "Kältetechniker": {
    label: "Kältetechniker",
    roleDescription:
      "Kältetechniker installieren, warten und reparieren Kälteanlagen, Klimasysteme und Wärmepumpen in Gewerbe, Industrie und Wohngebäuden. Sie arbeiten mit Kältemitteln, führen Dichtigkeitsprüfungen durch und nehmen Anlagen gemäss gesetzlichen Vorschriften in Betrieb.",
    salaryRange: "CHF 72'000 – 92'000",
    requirements:
      "Abgeschlossene Lehre als Kältesystemtechniker EFZ oder gleichwertige Ausbildung, Kältemittelzertifikat Kategorie I, genaues Arbeiten nach Normen.",
    career:
      "Spezialisierung auf Industriekälte, Grossklimata oder Wärmepumpen. Weiterbildung zum Kältemeister oder Gebäudetechnikingenieur.",
    related: ["Wärmepumpen-Spezialist", "Gebäudetechniker HLKS", "Heizungsinstallateur EFZ"],
  },
  "Heizungsmonteur": {
    label: "Heizungsmonteur",
    roleDescription:
      "Heizungsmonteure führen Montagearbeiten an Heizungsanlagen auf Baustellen und in bestehenden Gebäuden aus. Sie verlegen Rohrleitungen, montieren Heizkörper, Pumpen und Armaturen und unterstützen bei Inbetriebnahmen und Druckprüfungen.",
    salaryRange: "CHF 68'000 – 82'000",
    requirements:
      "Ausbildung im Heizungsbereich (EFZ oder gleichwertig), handwerkliches Geschick, körperliche Belastbarkeit, Teamfähigkeit.",
    career:
      "Weiterbildung zum Heizungsinstallateur EFZ, Vorarbeiter oder Spezialisierung auf Wärmepumpen und erneuerbare Energien.",
    related: ["Servicemonteur Heizung", "Heizungsinstallateur EFZ", "Wärmepumpen-Spezialist"],
  },
  "Gebäudetechniker HLKS": {
    label: "Gebäudetechniker HLKS",
    roleDescription:
      "Gebäudetechniker HLKS sind Spezialisten für die technische Infrastruktur von Gebäuden — von Heizung, Lüftung und Klima (HLK) über Sanitäranlagen bis zur Gebäudeautomation. Sie planen, installieren, betreiben und optimieren gebäudetechnische Systeme nach energetischen und wirtschaftlichen Kriterien.",
    salaryRange: "CHF 75'000 – 95'000",
    requirements:
      "Ausbildung im Bereich Gebäudetechnik HLKS, Kenntnisse in HLK-Systemen, MSR-Technik und Gebäudeautomation, Verständnis von Energiestandards (Minergie, SNBS).",
    career:
      "Spezialisierung auf Smart Building, Energiemanagement, Gebäudezertifizierung oder nachhaltige Gebäudetechnik.",
    related: ["Heizungsplaner", "Wärmepumpen-Spezialist", "Projektleiter HLKS"],
  },
  "Feuerungskontrolleur": {
    label: "Feuerungskontrolleur",
    roleDescription:
      "Feuerungskontrolleure prüfen und kontrollieren Feuerungsanlagen (Öl-, Gas- und Holzheizungen) auf Emissionen, Effizienz und Sicherheit. Sie führen amtliche Abgasmessungen durch, dokumentieren Ergebnisse und beraten Anlagenbesitzer zu Sanierungsmassnahmen und Fördermöglichkeiten.",
    salaryRange: "CHF 68'000 – 85'000",
    requirements:
      "Ausbildung als Heizungsinstallateur EFZ mit kantonaler Zulassung als Feuerungskontrolleur, Kenntnisse der LRV (Luftreinhalte-Verordnung), Führerschein obligatorisch.",
    career:
      "Selbstständige Tätigkeit als zugelassener Feuerungskontrolleur, Spezialisierung auf erneuerbare Feuerungsanlagen oder Energieberatung.",
    related: ["Heizungsinstallateur EFZ", "Betriebstechniker Heizung", "Gebäudetechniker HLKS"],
  },
  "Anlagenmechaniker SHK": {
    label: "Anlagenmechaniker SHK",
    roleDescription:
      "Anlagenmechaniker SHK (Sanitär, Heizung, Klima) installieren und warten haustechnische Anlagen in Wohn- und Gewerbegebäuden. Sie verlegen Rohrsysteme, montieren Sanitäreinrichtungen und Heizungsanlagen und führen Funktionsprüfungen sowie Instandhaltungsarbeiten durch.",
    salaryRange: "CHF 70'000 – 88'000",
    requirements:
      "Ausbildung als Anlagenmechaniker SHK oder gleichwertiger Abschluss im Sanitär- oder Heizungsbereich, exaktes Arbeiten nach Plänen, Kenntnisse der Schweizer Installationsnormen.",
    career:
      "Spezialisierung auf Sanitär, Heizung oder Klima. Weiterbildung zum Meister SHK, Bauleiter oder Projektleiter HLKS.",
    related: ["Heizungsinstallateur EFZ", "Betriebstechniker Heizung", "Heizungsinstallateur EFZ"],
  },
  "Bauleiter HLKS": {
    label: "Bauleiter HLKS",
    roleDescription:
      "Bauleiter HLKS koordinieren und überwachen Heizungs-, Lüftungs-, Klima- und Sanitärinstallationen auf Grossbaustellen. Sie sind verantwortlich für Terminplanung, Kostenkontrolle, Qualitätssicherung und die Führung von Subunternehmern und Montageteams.",
    salaryRange: "CHF 90'000 – 120'000",
    requirements:
      "Weiterbildung zum Projektleiter HLKS oder Bauleiter, mehrjährige Berufserfahrung im HLKS-Bereich, ausgeprägte Führungskompetenz und Koordinationsgeschick.",
    career:
      "Aufstieg zum Gesamtprojektleiter, Niederlassungsleiter oder Geschäftsführer eines HLKS-Betriebs.",
    related: ["Projektleiter HLKS", "Heizungsplaner", "Heizungsinstallateur EFZ"],
  },
  "Betriebstechniker Heizung": {
    label: "Betriebstechniker Heizung",
    roleDescription:
      "Betriebstechniker Heizung sind für die Wartung, Instandhaltung und Reparatur von Heizungsanlagen in Industrie-, Gewerbe- und Liegenschaften zuständig. Sie führen regelmässige Inspektionen und Wartungsintervalle durch und sorgen für einen energieeffizienten, störungsfreien Betrieb.",
    salaryRange: "CHF 72'000 – 90'000",
    requirements:
      "Ausbildung als Heizungsinstallateur EFZ oder gleichwertige Qualifikation, Erfahrung in der Anlagenwartung und Fehlerdiagnose, strukturierte und selbstständige Arbeitsweise.",
    career:
      "Aufstieg zum Instandhaltungsleiter, Spezialisierung auf Energiemanagement, Gebäudeautomation oder Fernwärme.",
    related: ["Heizungsinstallateur EFZ", "Wärmepumpen-Spezialist", "Gebäudetechniker HLKS"],
  },
};

// --- Canton-specific content ---

interface CantonContent {
  /** Full canton name for titles */
  name: string;
  /** Short canton abbreviation */
  abbr: string;
  /** Brief economic context for the heating/HVAC industry */
  context: string;
}

const CANTON_CONTENT: Record<string, CantonContent> = {
  ZH: {
    name: "Zürich",
    abbr: "ZH",
    context:
      "Der Kanton Zürich ist der grösste Arbeitsmarkt der Schweiz mit zahlreichen Neubauprojekten, energetischen Sanierungen und einer hohen Dichte an HLKS-Unternehmen, die qualifizierte Heizungsfachkräfte suchen.",
  },
  BE: {
    name: "Bern",
    abbr: "BE",
    context:
      "Im Kanton Bern gibt es eine starke Nachfrage nach Heizungs-Fachkräften, besonders in der Bundesstadt und im Berner Oberland — von Wohnbausanierungen bis zu Infrastrukturprojekten mit erneuerbaren Energien.",
  },
  BS: {
    name: "Basel",
    abbr: "BS",
    context:
      "Basel-Stadt und die Region Nordwestschweiz bieten attraktive Arbeitsbedingungen mit zahlreichen Industrie- und Pharmabetrieben sowie grossen Bauprojekten, die erfahrene HLKS-Fachkräfte benötigen.",
  },
  AG: {
    name: "Aargau",
    abbr: "AG",
    context:
      "Der Kanton Aargau ist ein wichtiger Industriestandort mit vielen Energieversorgern und einer hohen Nachfrage nach Heizungs-Fachkräften, besonders im Zuge des Heizungsersatzes und der Wärmepumpenoffensive.",
  },
  SG: {
    name: "St. Gallen",
    abbr: "SG",
    context:
      "Die Ostschweiz mit dem Kanton St. Gallen bietet vielfältige Möglichkeiten für Heizungs-Fachkräfte — von KMU-Installationsbetrieben bis zu grossen Gebäudetechnik-Unternehmen mit Fokus auf erneuerbare Heizsysteme.",
  },
  LU: {
    name: "Luzern",
    abbr: "LU",
    context:
      "Im Kanton Luzern wächst die Nachfrage nach Heizungs-Fachkräften stetig — getrieben durch energetische Sanierungen, Wärmepumpeninstallationen und Neubauprojekte in der Zentral- und Innerschweiz.",
  },
  SO: {
    name: "Solothurn",
    abbr: "SO",
    context:
      "Der Kanton Solothurn bietet als Industriestandort zwischen Bern und Basel gute Karrierechancen für Heizungs-Fachkräfte in Produktion, Wohnungsbau und im wachsenden Bereich erneuerbarer Heizsysteme.",
  },
  ZG: {
    name: "Zug",
    abbr: "ZG",
    context:
      "Der Kanton Zug bietet als wirtschaftsstarker Standort überdurchschnittliche Löhne und spannende Projekte im Bereich Gebäudetechnik, Wärmepumpen und nachhaltiger Heizinfrastruktur.",
  },
  TG: {
    name: "Thurgau",
    abbr: "TG",
    context:
      "Der Kanton Thurgau bietet als wachsender Wirtschaftsstandort in der Ostschweiz zunehmend Chancen für Heizungs-Fachkräfte — besonders in Industrie, Wohnungsbau und bei der Umstellung auf erneuerbare Heizsysteme.",
  },
  GR: {
    name: "Graubünden",
    abbr: "GR",
    context:
      "Im Kanton Graubünden sind Heizungs-Fachkräfte stark gefragt — von der Tourismusinfrastruktur und Berghotels über Energieprojekte bis zu Neubauten und Sanierungen in den Ferienorten.",
  },
  SH: {
    name: "Schaffhausen",
    abbr: "SH",
    context:
      "Der Kanton Schaffhausen bietet als kompakter Industriestandort attraktive Stellen für Heizungs-Fachkräfte, insbesondere in der Maschinenindustrie und bei Gebäudetechnikunternehmen in der Grenzregion.",
  },
  FR: {
    name: "Fribourg",
    abbr: "FR",
    context:
      "Der zweisprachige Kanton Fribourg wächst dynamisch und bietet Heizungs-Fachkräften vielfältige Möglichkeiten in Wohnungsbau, Industrie und öffentlicher Infrastruktur — mit steigendem Bedarf an Wärmepumpen-Spezialisten.",
  },
};

// --- All role keys ---
const ALL_ROLES = Object.keys(ROLE_CONTENT);
const ALL_CANTONS = Object.keys(CANTON_CONTENT);

// --- Content generation ---

function buildLandingConfig(roleKey: string, cantonKey: string): LandingPageConfig {
  const role = ROLE_CONTENT[roleKey];
  const canton = CANTON_CONTENT[cantonKey];

  if (!role || !canton) {
    throw new Error(`Invalid role "${roleKey}" or canton "${cantonKey}"`);
  }

  const relatedRolesList = role.related.join(", ");

  return {
    role: roleKey,
    canton: cantonKey,
    title: `${role.label} Jobs in ${canton.name}`,
    description: `Aktuelle ${role.label} Stellen im Kanton ${canton.name}. ${role.roleDescription.split(".")[0]}. Jetzt bewerben auf heizungjob.ch.`,
    intro: `Als ${role.label} in ${canton.name} findest du auf heizungjob.ch alle aktuellen Stellenangebote in deiner Region. ${role.roleDescription} ${canton.context} Die Nachfrage nach qualifizierten ${role.label}-Fachkräften im Kanton ${canton.name} ist hoch — Arbeitgeber suchen gezielt nach Kandidaten mit ${role.requirements.split(",")[0].toLowerCase()}. Das durchschnittliche Jahresgehalt für ${role.label} in der Schweiz liegt bei ${role.salaryRange}. Verwandte Berufe wie ${relatedRolesList} bieten zusätzliche Karrieremöglichkeiten in der Heizungsbranche. ${role.career} Nutze unsere smarte Filterung nach Pensum, Umkreis und Anstellungsart, um die passende Stelle zu finden. Bewirb dich direkt online und lade deinen Lebenslauf hoch.`,
    roleDescription: role.roleDescription,
    salaryRange: role.salaryRange,
    requirements: role.requirements,
    career: role.career,
    cantonContext: canton.context,
    faqs: [
      {
        question: `Was verdient ein ${role.label} im Kanton ${canton.name}?`,
        answer: `Ein ${role.label} verdient in der Schweiz durchschnittlich ${role.salaryRange} pro Jahr. Im Kanton ${canton.name} können die Löhne je nach Arbeitgeber, Erfahrung und Spezialisierung variieren.`,
      },
      {
        question: `Welche Voraussetzungen braucht man als ${role.label}?`,
        answer: role.requirements,
      },
      {
        question: `Welche Karrieremöglichkeiten hat ein ${role.label}?`,
        answer: role.career,
      },
      {
        question: `Wie viele ${role.label} Jobs gibt es in ${canton.name}?`,
        answer: `Auf heizungjob.ch findest du aktuelle ${role.label} Stellen im Kanton ${canton.name}. Die Anzahl verfügbarer Jobs variiert — nutze unsere Suche für die aktuellsten Ergebnisse.`,
      },
      {
        question: `Wie ist der Arbeitsmarkt für ${role.label} in ${canton.name}?`,
        answer: `${canton.context} Die Nachfrage nach qualifizierten ${role.label}-Fachkräften im Kanton ${canton.name} ist hoch. Das Durchschnittsgehalt liegt bei ${role.salaryRange} pro Jahr. Arbeitgeber suchen gezielt nach Kandidaten mit ${role.requirements.split(",")[0].toLowerCase()}.`,
      },
    ],
  };
}

// --- Build full matrix ---
export const TOP_LANDING_PAGES: LandingPageConfig[] = ALL_ROLES.flatMap((roleKey) =>
  ALL_CANTONS.map((cantonKey) => buildLandingConfig(roleKey, cantonKey))
);

// --- Slug helpers ---

function normalizeSlug(value: string): string {
  return value
    .toLowerCase()
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function toRoleSlug(role: string): string {
  return normalizeSlug(role);
}

export function toCantonSlug(canton: string): string {
  return normalizeSlug(canton);
}

export function getLandingPath(config: LandingPageConfig): string {
  return `/heizungjobs/${toRoleSlug(config.role)}/${toCantonSlug(config.canton)}`;
}

export function findLandingPageBySlug(roleSlug: string, cantonSlug: string): LandingPageConfig | null {
  return (
    TOP_LANDING_PAGES.find(
      (item) => toRoleSlug(item.role) === roleSlug && toCantonSlug(item.canton) === cantonSlug
    ) ?? null
  );
}

/**
 * Get landing pages for the same canton (different roles) or same role (different cantons).
 * Used for cross-linking on landing pages.
 */
export function getRelatedLandingPages(config: LandingPageConfig, limit = 8): LandingPageConfig[] {
  const sameCantonDifferentRole = TOP_LANDING_PAGES.filter(
    (p) => p.canton === config.canton && p.role !== config.role
  );
  const sameRoleDifferentCanton = TOP_LANDING_PAGES.filter(
    (p) => p.role === config.role && p.canton !== config.canton
  );

  // Mix: take some from same canton, some from same role
  const mixed: LandingPageConfig[] = [];
  const maxPerGroup = Math.ceil(limit / 2);
  mixed.push(...sameCantonDifferentRole.slice(0, maxPerGroup));
  mixed.push(...sameRoleDifferentCanton.slice(0, maxPerGroup));
  return mixed.slice(0, limit);
}
