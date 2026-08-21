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
  requirements: string;
  career: string;
  cantonContext: string;
  faqs: LandingFaq[];
}

interface RoleContent {
  label: string;
  roleDescription: string;
  requirements: string;
  career: string;
}

// Heizung-only search labels. Broad or neighbouring trades are deliberately
// excluded from public SEO navigation.
const ROLE_CONTENT: Record<string, RoleContent> = {
  "Heizungsinstallateur EFZ": {
    label: "Heizungsinstallateur EFZ",
    roleDescription:
      "Heizungsinstallateurinnen und Heizungsinstallateure EFZ montieren wärmetechnische Anlagen wie Wärmepumpen, Heizkörper und Solaranlagen, verlegen Leitungen und bereiten die Inbetriebnahme vor.",
    requirements:
      "Für Stellen mit dem geschützten EFZ-Titel ist in der Regel ein entsprechender Abschluss oder eine im Inserat als gleichwertig bezeichnete Qualifikation erforderlich.",
    career:
      "Das offizielle Berufsprofil nennt unter anderem Chefmonteur/in Heizung BP und Heizungsmeister/in HFP als Weiterbildungswege. Zulassungsbedingungen sind beim jeweiligen Träger zu prüfen.",
  },
  Heizungsmonteur: {
    label: "Heizungsmonteur",
    roleDescription:
      "Stellen mit der Bezeichnung Heizungsmonteur betreffen üblicherweise Montage- und Installationsarbeiten im Heizungsbereich. Aufgaben und Verantwortung unterscheiden sich je nach Inserat.",
    requirements:
      "Massgebend sind die im Inserat verlangte Ausbildung, Erfahrung und allfällige Bewilligungen.",
    career:
      "Weiterbildungen und Anschlussqualifikationen hängen vom vorhandenen Abschluss und der Berufserfahrung ab.",
  },
  "Servicetechniker Heizung": {
    label: "Servicetechniker Heizung",
    roleDescription:
      "Servicestellen im Heizungsbereich können Wartung, Diagnose, Reparaturen und Kundenkontakt umfassen. Der genaue Bereitschafts- und Einsatzumfang steht im Inserat.",
    requirements:
      "Massgebend sind die im Inserat verlangte Heizungsqualifikation, Berufserfahrung und Mobilität.",
    career:
      "Herstellerkurse oder formale Weiterbildungen können je nach Funktion relevant sein; daraus folgt keine pauschale Lohn- oder Aufstiegszusage.",
  },
  "Gebäudetechnikplaner Heizung EFZ": {
    label: "Gebäudetechnikplaner Heizung EFZ",
    roleDescription:
      "Gebäudetechnikplanerinnen und Gebäudetechnikplaner Heizung planen wärmetechnische Anlagen, berechnen den Energiebedarf, zeichnen Ausführungspläne und begleiten die Montage.",
    requirements:
      "Für EFZ-Stellen ist der entsprechende Abschluss oder eine im Inserat als gleichwertig bezeichnete Qualifikation massgebend.",
    career:
      "Mögliche Weiterbildungen und Zulassungsbedingungen sind in den offiziellen Berufs- und Bildungsinformationen zu prüfen.",
  },
  "Projektleiter Heizung": {
    label: "Projektleiter Heizung",
    roleDescription:
      "Projektleitungsstellen im Heizungsbereich können Planung, Kalkulation, Koordination, Termine und Kommunikation mit Projektbeteiligten umfassen.",
    requirements:
      "Ausbildung, Fachpraxis und Führungserfahrung sind je nach Inserat unterschiedlich gewichtet.",
    career:
      "Die Funktion ist keine pauschale Zusage für eine bestimmte Weiterbildung, Verantwortung oder Vergütung.",
  },
  "Chefmonteur Heizung": {
    label: "Chefmonteur Heizung",
    roleDescription:
      "Chefmonteur-Stellen Heizung verbinden fachliche Montagearbeit mit der Organisation und Führung auf Baustellen oder in Projekten.",
    requirements:
      "Massgebend sind die im Inserat verlangte Grundbildung, Berufspraxis und allfällige eidgenössische Berufsprüfung.",
    career:
      "Die Prüfungsordnung der Berufsprüfung Chefmonteur/in Heizung nennt je nach Vorbildung unterschiedliche Praxisanforderungen.",
  },
  Heizungsplaner: {
    label: "Heizungsplaner",
    roleDescription:
      "Stellen in der Heizungsplanung betreffen die Planung und Dokumentation wärmetechnischer Anlagen. Die verwendete Berufsbezeichnung und der Aufgabenbereich sind im Inserat zu prüfen.",
    requirements:
      "Massgebend sind die ausgeschriebene Ausbildung sowie die verlangten Planungs- und Softwarekenntnisse.",
    career:
      "Mögliche Weiterbildungen hängen vom vorhandenen Abschluss und der angestrebten Funktion ab.",
  },
};

interface CantonContent {
  name: string;
  abbr: string;
}

const CANTON_CONTENT: Record<string, CantonContent> = {
  ZH: { name: "Zürich", abbr: "ZH" },
  BE: { name: "Bern", abbr: "BE" },
  BS: { name: "Basel-Stadt", abbr: "BS" },
  AG: { name: "Aargau", abbr: "AG" },
  SG: { name: "St. Gallen", abbr: "SG" },
  LU: { name: "Luzern", abbr: "LU" },
  SO: { name: "Solothurn", abbr: "SO" },
  ZG: { name: "Zug", abbr: "ZG" },
  TG: { name: "Thurgau", abbr: "TG" },
  GR: { name: "Graubünden", abbr: "GR" },
  SH: { name: "Schaffhausen", abbr: "SH" },
  FR: { name: "Freiburg", abbr: "FR" },
};

const ALL_ROLES = Object.keys(ROLE_CONTENT);
const ALL_CANTONS = Object.keys(CANTON_CONTENT);

function buildLandingConfig(roleKey: string, cantonKey: string): LandingPageConfig {
  const role = ROLE_CONTENT[roleKey];
  const canton = CANTON_CONTENT[cantonKey];

  if (!role || !canton) {
    throw new Error(`Invalid role "${roleKey}" or canton "${cantonKey}"`);
  }

  const cantonContext = `Der Ortsfilter verwendet den Kanton ${canton.name} (${canton.abbr}). Der genaue Arbeitsort und ein allfälliger Einsatzradius ergeben sich aus dem jeweiligen Inserat.`;

  return {
    role: roleKey,
    canton: cantonKey,
    title: `${role.label} Jobs in ${canton.name}`,
    description: `Stelleninserate mit Bezug zu ${role.label} im Kanton ${canton.name}. Aufgaben, Anforderungen und Arbeitsort im jeweiligen Inserat prüfen.`,
    intro: `Diese Suchseite zeigt Treffer für ${role.label} mit Ortsbezug zum Kanton ${canton.name}. Sie erhebt keinen Anspruch auf Vollständigkeit. ${cantonContext}`,
    roleDescription: role.roleDescription,
    requirements: role.requirements,
    career: role.career,
    cantonContext,
    faqs: [
      {
        question: `Wie viele ${role.label} Stellen gibt es in ${canton.name}?`,
        answer: `Die Zahl der Treffer wird auf dieser Seite aus dem aktuellen öffentlichen Bestand berechnet und kann sich ändern. heizungjob.ch verspricht keine vollständige Marktabdeckung.`,
      },
      {
        question: `Welche Voraussetzungen gelten für ${role.label}?`,
        answer: role.requirements,
      },
      {
        question: `Was verdient ein ${role.label} in ${canton.name}?`,
        answer: `Massgebend ist eine Lohnangabe im konkreten Inserat oder Arbeitsvertrag. Für statistische Vergleiche verweist heizungjob.ch auf Salarium des Bundesamts für Statistik; eigene pauschale Lohnbänder werden nicht ergänzt.`,
      },
      {
        question: `Wo befindet sich die Stelle im Kanton ${canton.name}?`,
        answer: cantonContext,
      },
    ],
  };
}

export const TOP_LANDING_PAGES: LandingPageConfig[] = ALL_ROLES.flatMap((roleKey) =>
  ALL_CANTONS.map((cantonKey) => buildLandingConfig(roleKey, cantonKey))
);

const PRIORITY_PAIRS: Array<[string | undefined, string]> = [
  [ALL_ROLES[0], "ZH"],
  [ALL_ROLES[0], "BE"],
  [ALL_ROLES[1], "ZH"],
  [ALL_ROLES[1], "AG"],
  [ALL_ROLES[2], "ZH"],
  [ALL_ROLES[2], "SG"],
];

export const SEO_PRIORITY_LANDING_PAGES: LandingPageConfig[] = PRIORITY_PAIRS.flatMap(
  ([role, canton]) => {
    if (!role || !CANTON_CONTENT[canton]) return [];
    return [buildLandingConfig(role, canton)];
  },
);

function normalizeSlug(value: string): string {
  return value
    .toLowerCase()
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/\u00df/g, "ss")
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

export function isSeoPriorityLandingPage(config: LandingPageConfig): boolean {
  const path = getLandingPath(config);
  return SEO_PRIORITY_LANDING_PAGES.some(
    (candidate) => getLandingPath(candidate) === path,
  );
}

export function findLandingPageBySlug(roleSlug: string, cantonSlug: string): LandingPageConfig | null {
  return (
    TOP_LANDING_PAGES.find(
      (item) => toRoleSlug(item.role) === roleSlug && toCantonSlug(item.canton) === cantonSlug
    ) ?? null
  );
}

export function getRelatedLandingPages(config: LandingPageConfig, limit = 8): LandingPageConfig[] {
  const sameCantonDifferentRole = TOP_LANDING_PAGES.filter(
    (page) => page.canton === config.canton && page.role !== config.role
  );
  const sameRoleDifferentCanton = TOP_LANDING_PAGES.filter(
    (page) => page.role === config.role && page.canton !== config.canton
  );
  const maxPerGroup = Math.ceil(limit / 2);
  return [
    ...sameCantonDifferentRole.slice(0, maxPerGroup),
    ...sameRoleDifferentCanton.slice(0, maxPerGroup),
  ].slice(0, limit);
}
