export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string; // e.g. "Full-time", "Part-time"
  workload: string; // e.g. "80-100%"
  description: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
  datePosted: string;
  isUrgent?: boolean;
  isNew?: boolean;
}

export const mockJobs: Job[] = [
  {
    id: "1",
    title: "Heizungsinstallateur EFZ (m/w/d)",
    company: "WärmeTech AG",
    location: "Zürich, ZH",
    type: "Full-time",
    workload: "100%",
    description: "Wir suchen einen engagierten Heizungsinstallateur für spannende Neubau- und Sanierungsprojekte im Raum Zürich.",
    responsibilities: [
      "Montage und Inbetriebnahme von Heizungsanlagen",
      "Installation von Wärmepumpen und Solar-Thermie-Systemen",
      "Planlesen und selbständige Umsetzung auf der Baustelle",
      "Dokumentation der ausgeführten Arbeiten"
    ],
    requirements: [
      "Abgeschlossene Lehre als Heizungsinstallateur EFZ",
      "Einige Jahre Berufserfahrung von Vorteil",
      "Gute Deutschkenntnisse",
      "Führerausweis Kategorie B"
    ],
    benefits: [
      "Überdurchschnittliches Gehalt",
      "Modernes Firmenfahrzeug",
      "5 Wochen Ferien",
      "Weiterbildungsmöglichkeiten"
    ],
    datePosted: "2026-02-24",
    isNew: true,
  },
  {
    id: "2",
    title: "Servicemonteur Heizung EFZ",
    company: "Heizkomfort GmbH",
    location: "Bern, BE",
    type: "Full-time",
    workload: "80-100%",
    description: "Unterstützen Sie unser Team bei der Wartung und dem Service von Heizungsanlagen in Wohn- und Gewerbebauten.",
    responsibilities: [
      "Wartung und Service von Öl-, Gas- und Wärmepumpenanlagen",
      "Fehlerdiagnose und Störungsbehebung",
      "Kundendiensteinsätze und Beratung",
      "Allgemeine Servicearbeiten an HLKS-Anlagen"
    ],
    requirements: [
      "Abgeschlossene Ausbildung als Heizungsinstallateur EFZ oder Servicemonteur",
      "Handwerkliches Geschick und Zuverlässigkeit",
      "Teamfähigkeit und genaue Arbeitsweise"
    ],
    benefits: [
      "Junges und dynamisches Team",
      "Flache Hierarchien",
      "Gute Sozialleistungen"
    ],
    datePosted: "2026-02-20",
  },
  {
    id: "3",
    title: "Projektleiter HLKS (w/m)",
    company: "KlimaSystem Schweiz SA",
    location: "Basel, BS",
    type: "Full-time",
    workload: "100%",
    description: "Leiten Sie innovative Heizungs-, Lüftungs- und Klimaprojekte von der Planung bis zur Übergabe.",
    responsibilities: [
      "Projektleitung von A bis Z inklusive Kostenkontrolle",
      "Kundenberatung und Offertenerstellung",
      "Führung der Montageequipen",
      "Qualitätssicherung und Abnahme"
    ],
    requirements: [
      "Weiterbildung zum HLKS-Projektleiter oder Gebäudetechniker",
      "Führungserfahrung in einer ähnlichen Position",
      "Kenntnisse in Gebäudeautomation und Energiesystemen",
      "Verhandlungsgeschick und souveränes Auftreten"
    ],
    benefits: [
      "Attraktives Bonusmodell",
      "Geschäftsauto auch zur privaten Nutzung",
      "Flexible Arbeitszeiten"
    ],
    datePosted: "2026-02-23",
    isUrgent: true,
  },
  {
    id: "4",
    title: "Wärmepumpen-Spezialist / Kältetechniker",
    company: "EnergieTech Group",
    location: "Luzern, LU",
    type: "Full-time",
    workload: "100%",
    description: "Sie installieren und warten Wärmepumpen und Kälteanlagen für Wohn- und Industriegebäude.",
    responsibilities: [
      "Montage und Inbetriebnahme von Wärmepumpenanlagen",
      "Wartung und Reparatur von Kälteanlagen",
      "Fehlersuche und Behebung",
      "Mithilfe bei Inbetriebnahmen und Kundenübergaben"
    ],
    requirements: [
      "Berufsabschluss als Kältetechniker oder Heizungsinstallateur EFZ",
      "Erfahrung mit Wärmepumpen und Kältesystemen",
      "Selbständige und präzise Arbeitsweise"
    ],
    benefits: [
      "Moderne Werkstatt und Ausrüstung",
      "Geregelte Arbeitszeiten",
      "Gute Anbindung an den ÖV"
    ],
    datePosted: "2026-02-18",
  },
  {
    id: "5",
    title: "Heizungsplaner / Gebäudetechniker HLKS",
    company: "PlanWärme AG",
    location: "St. Gallen, SG",
    type: "Part-time",
    workload: "60-80%",
    description: "Als Heizungsplaner entwickeln Sie energieeffiziente Heizungskonzepte für Neubau- und Sanierungsprojekte.",
    responsibilities: [
      "Planung und Dimensionierung von Heizungsanlagen",
      "Erstellung von Schemata und Installationsplänen",
      "Berechnung des Wärmebedarfs und Systemauslegung",
      "Beratung von Architekten und Bauherren"
    ],
    requirements: [
      "Ausbildung als Heizungsinstallateur EFZ mit Weiterbildung zum Planer",
      "Erfahrung mit CAD-Planungssoftware",
      "Kenntnisse der aktuellen Energievorschriften (MuKEn)",
      "Gültiger Fahrausweis"
    ],
    benefits: [
      "Hohe Selbständigkeit",
      "Modernes Planungsbüro",
      "Leistungsgerechte Entlöhnung"
    ],
    datePosted: "2026-02-25",
    isNew: true,
  }
];
