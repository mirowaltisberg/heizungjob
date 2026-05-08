export interface HeizungCity {
  slug: string;
  name: string;
  cantonAbbr: string;
  cantonSlug: string;
  population: string;
  intro: string;
  districts: string[];
  commuterTowns: string[];
  region: string;
  salaryBand: string;
}

export const HEIZUNG_CITIES: HeizungCity[] = [
  {
    slug: "zuerich",
    name: "Zürich",
    cantonAbbr: "ZH",
    cantonSlug: "zuerich",
    population: "ca. 440'000",
    region: "Grossraum Zürich",
    intro:
      "Zürich treibt die Wärmewende — Wärmepumpen-Installationen, Sanierungen und Fernwärmeprojekte sorgen für Rekordnachfrage nach Heizungsinstallateuren.",
    districts: ["City", "Oerlikon", "Altstetten", "Wiedikon", "Schwamendingen", "Affoltern"],
    commuterTowns: ["Winterthur", "Uster", "Dübendorf", "Wetzikon", "Wädenswil", "Bülach"],
    salaryBand: "CHF 77'000 – 101'000",
  },
  {
    slug: "basel",
    name: "Basel",
    cantonAbbr: "BS",
    cantonSlug: "basel",
    population: "ca. 175'000",
    region: "Nordwestschweiz",
    intro:
      "Basel ist Pharma- und Chemiestandort der Schweiz. Roche, Novartis, Syngenta und ihre Zulieferer beschäftigen Heizungs-Fachkräfte mit überdurchschnittlichen Saläre. Der grenznahe Markt zu Frankreich und Deutschland macht trinationale Karrieren attraktiv.",
    districts: ["Innenstadt", "Kleinbasel", "Gundeldingen", "Bachletten", "St. Johann"],
    commuterTowns: ["Liestal", "Allschwil", "Münchenstein", "Riehen", "Reinach", "Pratteln"],
    salaryBand: "CHF 74'000 – 98'000",
  },
  {
    slug: "bern",
    name: "Bern",
    cantonAbbr: "BE",
    cantonSlug: "bern",
    population: "ca. 145'000",
    region: "Mittelland",
    intro:
      "Bern vereint Bundesverwaltung, kantonale Bauämter und ein breites Spektrum an Gewerbe- und Wohnbauprojekten. Heizungs-Aufträge im öffentlichen Bau sind stabil und ganzjährig vorhanden, mit Lohnniveaus auf Schweizer Mittel.",
    districts: ["Innenstadt", "Länggasse", "Breitenrain", "Wankdorf", "Bümpliz"],
    commuterTowns: ["Biel", "Thun", "Köniz", "Münsingen", "Burgdorf", "Lyss"],
    salaryBand: "CHF 70'000 – 92'000",
  },
  {
    slug: "luzern",
    name: "Luzern",
    cantonAbbr: "LU",
    cantonSlug: "luzern",
    population: "ca. 83'000",
    region: "Zentralschweiz",
    intro:
      "Luzern wächst dynamisch — Tourismus-Infrastruktur (Hotels, Bergbahnen, KKL), Gewerbe in Emmen/Kriens und der Wohnbau-Boom in der Seeregion treiben die Nachfrage nach Heizungs-Fachkräften. Die Nähe zu Zug eröffnet zusätzlich Pendelchancen mit Top-Saläre.",
    districts: ["Innenstadt", "Tribschen", "Sentimatt", "Würzenbach", "Maihof"],
    commuterTowns: ["Emmen", "Kriens", "Sursee", "Hochdorf", "Stans", "Zug"],
    salaryBand: "CHF 69'000 – 91'000",
  },
  {
    slug: "st-gallen",
    name: "St. Gallen",
    cantonAbbr: "SG",
    cantonSlug: "st-gallen",
    population: "ca. 80'000",
    region: "Ostschweiz",
    intro:
      "St. Gallen ist Industriestandort und Tor zur Ostschweiz. Maschinenindustrie, Lebensmittelverarbeitung (Bühler-Cluster) und ein wachsender Bildungssektor beschäftigen Heizungs-Fachkräfte in stabilen Festanstellungen. Saläre liegen leicht unter dem Schweizer Mittel, dafür sind Mietpreise tiefer.",
    districts: ["Innenstadt", "St. Fiden", "Bruggen", "Riethüsli", "Heiligkreuz"],
    commuterTowns: ["Wil", "Rorschach", "Gossau", "Herisau", "Rapperswil", "Buchs SG"],
    salaryBand: "CHF 66'000 – 87'000",
  },
];

export function findHeizungCity(slug: string): HeizungCity | null {
  return HEIZUNG_CITIES.find((c) => c.slug === slug) ?? null;
}
