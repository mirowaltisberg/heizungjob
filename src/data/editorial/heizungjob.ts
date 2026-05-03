// SEO-DECISION: Per-page editorial content for the highest-traffic role × canton
// combinations. Keyed by `${roleSlug}::${cantonSlug}`. The category page renders
// EditorialIntro only when an entry exists here — pages without an entry fall back
// to the default short layout. Word target per section: ~80 words. Total per
// page: 320+. Swiss orthography only — never use Eszett, always "ss".

export interface EditorialContent {
  /** "Was macht ein/e ROLE in CANTON?" — concrete day-to-day, regional context */
  whatDoes: string;
  /** "Lohn & Aufstiegschancen" — salary band + progression. Deep-links to /#loehne */
  salary: string;
  /** "Welche Betriebe stellen ein?" — anonymized, never names specific companies */
  employers: string;
  /** "Bewerbungs-Tipps" — practical, regional (ÖV, Pendlerregion, Sprache) */
  applicationTips: string;
}

const ENTRIES: Record<string, EditorialContent> = {
  "heizungsmonteur::zh": {
    whatDoes:
      "Ein Heizungsmonteur im Kanton Zürich verlegt Vorlauf- und Rücklaufleitungen, montiert Heizkörper, Verteiler und Pumpengruppen und unterstützt bei Inbetriebnahmen, Druckproben und Spülungen. Der Alltag wechselt zwischen Rohbau, Sanierungsbaustelle und Heizungsersatz im bewohnten Mehrfamilienhaus. In Zürich verschiebt sich der Auftragsmix klar Richtung Wärmepumpen-Umstieg: Öl- und Gasheizungen werden im Rahmen der MuKEn-Vorgaben sukzessive durch Sole-Wasser- und Luft-Wasser-Wärmepumpen ersetzt. In den Stadtkreisen herrschen enge Platzverhältnisse, Termindruck und hohe Anforderungen an Lärmschutz und Sauberkeit. Wer flink, sauber und teamfähig arbeitet, hat hier laufend Anschlussaufträge.",
    salary:
      "Heizungsmonteure verdienen im Kanton Zürich typisch CHF 70'000 bis 85'000 pro Jahr — am oberen Schweizer Band. Mit verkürzter Zusatzlehre zum Heizungsinstallateur EFZ (in der Regel zwei Jahre berufsbegleitend) klettert das Salär auf CHF 75'000 bis 92'000. Wer Vorarbeiter wird, rechnet mit zusätzlich 6 bis 10 Prozent. Die Weiterbildung zum diplomierten Heizungs-Servicemonteur oder zum eidg. dipl. HLK-Techniker HF öffnet das Band CHF 90'000 bis 115'000. Spezialisierungen auf Wärmepumpen, Solarthermie oder Fernwärme bringen im Raum Zürich gut bezahlte Zulagen. Die vollständige Lohnübersicht steht auf unserer Startseite.",
    employers:
      "Im Kanton Zürich besetzen vor allem mittelgrosse HLK-Installationsbetriebe mit 15 bis 80 Mitarbeitenden Montage-Stellen. Sie bedienen Wohnüberbauungen, Gewerbebauten und kommunale Sanierungsprojekte in der ganzen Region. Daneben suchen Generalunternehmer Gebäudetechnik und spezialisierte Wärmepumpen-Anbieter Equipen für den beschleunigten Heizungsersatz im Mittelland. Industrie- und Spital-Service-Organisationen rund um Zürich-Nord besetzen ebenfalls regelmässig Stellen für Wartung und Umbau. Wir nennen aus Datenschutz- und Vermittlungsgründen keine Firmennamen — die Inserate auf heizungjob.ch sind anonymisiert, der konkrete Arbeitgeber wird im persönlichen Erstgespräch offengelegt.",
    applicationTips:
      "Halte deinen Lebenslauf konkret: welche Anlagentypen, welche Wärmeerzeuger und welche Etappengrössen du gewohnt bist — etwa «Heizungsersatz MFH Wipkingen, 18 Wohnungen, Luft-Wasser-WP, Vollausführung». Im Kanton Zürich erwarten Arbeitgeber Pendelbereitschaft via S-Bahn — gib deinen ÖV-Knotenpunkt an statt nur den Wohnort. Fahrausweis Kategorie B ist Standard. Erfahrung mit Wärmepumpen, idealerweise belegt mit dem EHPA Hochdruck-Schein, hebt deine Trefferquote spürbar. Im Telefongespräch werden körperliche Belastbarkeit, Pikettbereitschaft und sehr gute Deutschkenntnisse abgefragt — bereite ehrliche, kurze Antworten vor. EFZ-Zeugnis als PDF beilegen beschleunigt die Vorauswahl.",
  },

  "heizungsinstallateur-efz::be": {
    whatDoes:
      "Ein Heizungsinstallateur EFZ im Kanton Bern plant Wärmeerzeuger und Verteilsysteme, führt sie aus und nimmt sie in Betrieb — vom Einfamilienhaus im Emmental über Mehrfamilienhäuser in der Stadt Bern bis zu Hotelbetrieben im Berner Oberland. Der Tag wechselt zwischen Baustelle, Kundengespräch und Inbetriebnahme inklusive hydraulischem Abgleich. In Bern dominiert die Sanierungswelle: Öl- und Gasheizungen werden gemäss MuKEn 2014 / 2025 durch Wärmepumpen, Pellet- und Holzschnitzelanlagen oder Fernwärme-Anschlüsse ersetzt. Wer kommunikativ ist, sauber dokumentiert und Mundart spricht, ist bei KMU wie bei Generalunternehmern stark gefragt.",
    salary:
      "Heizungsinstallateure EFZ verdienen im Kanton Bern typisch CHF 72'000 bis 88'000 pro Jahr. Verantwortung als Vorarbeiter oder Servicemonteur hebt das Salär um 6 bis 10 Prozent. Mit dem Schritt zum diplomierten Heizungs-Servicemonteur sind CHF 85'000 bis 100'000 realistisch. Die höhere Fachprüfung zum Chefmonteur Heizung sowie die HF-Ausbildung zum Techniker HF Gebäudetechnik öffnen das Band CHF 95'000 bis 115'000. Eidg. dipl. Heizungsmeister landen im Kanton Bern häufig bei CHF 110'000 bis 135'000. Berufsbegleitende Weiterbildungen werden von vielen Betrieben mitfinanziert. Die vollständige Lohnübersicht steht auf der Startseite.",
    employers:
      "Im Kanton Bern besetzen vor allem KMU der HLK-Branche mit 10 bis 60 Mitarbeitenden Installateur-Stellen — typische Sanitär-Heizungs-Betriebe, die Wohnungs- und Gewerbebau abdecken. Daneben suchen Generalunternehmer Gebäudetechnik und Wärmepumpen-Spezialisten gezielt Fachkräfte für den beschleunigten Heizungsersatz. Energieversorger, Spital- und Hotelbetriebe sowie Verwaltungsabteilungen besetzen interne Servicestellen. Im Berner Oberland sind Tourismus- und Hotelbetriebe regelmässig auf der Suche nach Saison- oder Festanstellungen. Wir nennen aus Datenschutz- und Vermittlungsgründen keine Firmennamen — die Inserate sind anonymisiert, den konkreten Arbeitgeber lernst du im persönlichen Erstgespräch kennen.",
    applicationTips:
      "Lege Wert auf einen kompakten Lebenslauf mit Anlagentypen (Öl, Gas, Wärmepumpe, Pellet, Solarthermie), Referenzobjekten und gefahrenen Stundensätzen. Im Kanton Bern werden weite Anfahrten erwartet — gib Wohnort und Pendelradius prominent an. Fahrausweis Kategorie B ist Pflicht, BE oder C1 ein Plus für Servicefahrzeuge. Wärmepumpen-Zertifikate wie der EHPA Hochdruck-Schein heben die Trefferquote im Vorauswahl-Schritt deutlich. Sehr gute Deutschkenntnisse mit Mundartverständnis sind Voraussetzung. Im Erstgespräch werden Pikettbereitschaft inklusive Wochenende, körperliche Belastbarkeit und konkrete Diagnoseerfahrung vertieft abgefragt — bereite ein bis zwei dokumentierte Störungsfälle als Beispiel vor.",
  },

  "servicemonteur-heizung::ag": {
    whatDoes:
      "Ein Servicemonteur Heizung im Kanton Aargau fährt täglich verschiedene Kundenstandorte an, behebt Störungen an Wärmeerzeugern, wartet bestehende Anlagen und führt Jahresservice-Arbeiten an Brennern, Wärmepumpen und Pelletfeuerungen durch. Das Tätigkeitsgebiet reicht von Aarau über das Freiamt bis ins Fricktal — Pendel- und Fahrzeiten gehören zum Berufsbild. Der Servicemonteur arbeitet meist eigenständig mit voll ausgerüstetem Servicefahrzeug. Im Aargau prägen die kantonale Sanierungswelle, der Wärmepumpen-Boom und die Umstellung weg von fossilen Energieträgern den Auftragsmix. Wer kommunikativ ist und systematisch diagnostiziert, hat langfristig sichere Aufträge.",
    salary:
      "Servicemonteure Heizung verdienen im Kanton Aargau CHF 72'000 bis 88'000 pro Jahr, je nach Pikettanteil und Spezialisierung. Wer aktiv im 24/7-Pikettdienst steht, rechnet mit 5 bis 10 Prozent Zuschlag plus Inkonvenienzzulagen. Mit Spezialisierung auf Wärmepumpen, Solarthermie oder Pelletfeuerungen sind CHF 85'000 bis 98'000 realistisch. Der Aufstieg zum diplomierten Heizungs-Servicemonteur oder Service-Leiter erweitert die Verantwortung für Disposition und Garantiefälle und hebt das Salär auf CHF 95'000 bis 110'000. Berufsbegleitende Weiterbildungen werden von vielen Aargauer Betrieben mitfinanziert. Die vollständige Lohnübersicht steht auf der Startseite.",
    employers:
      "Im Kanton Aargau besetzen mittelgrosse HLK-Installationsbetriebe und KMU der Gebäudetechnik den Grossteil der Service-Stellen. Daneben betreiben Wärmepumpen-Spezialisten und Anbieter für Pellet- und Holzschnitzelfeuerungen eigene Serviceorganisationen. Energieversorger, Industriebetriebe rund um Baden und Brugg sowie Spital- und Heim-Service-Organisationen suchen interne Servicemonteure für ihre Liegenschaften. Generalunternehmer Gebäudetechnik mit nationaler Tätigkeit besetzen Stellen für Sanierungsprojekte. Wir nennen aus Datenschutz- und Vermittlungsgründen keine Firmennamen — die Inserate sind anonymisiert, den konkreten Arbeitgeber lernst du im persönlichen Erstgespräch kennen, in der Regel innerhalb weniger Tage.",
    applicationTips:
      "Servicemonteure werden für ihre Selbstständigkeit eingestellt — beton im Lebenslauf konkrete Diagnoseerfahrung, geschätzte Reparaturzeiten und Hersteller-Schulungen (z.B. Viessmann, Hoval, CTA, Stiebel Eltron). Im Kanton Aargau werden weite Anfahrten erwartet: Wohnort und Pendelbereitschaft prominent angeben. Fahrausweis Kategorie B ist Pflicht, BE ein Plus. Wärmepumpen-Zertifikat (EHPA Hochdruck-Schein) und Kältemittel-Schein sind in der Vorauswahl ein klares Differenzierungsmerkmal. Sehr gute Deutschkenntnisse sind Voraussetzung. Bereite dich auf Fragen zu Pikettbereitschaft inklusive Wochenende, Zeitmanagement bei mehreren parallelen Aufträgen und typischen Störbildern vor — ein bis zwei dokumentierte Servicefälle helfen.",
  },

  "waermepumpen-spezialist::zg": {
    whatDoes:
      "Ein Wärmepumpen-Spezialist im Kanton Zug plant, installiert und nimmt Sole-Wasser-, Luft-Wasser- und Wasser-Wasser-Wärmepumpen für Heizung und Warmwasser in Betrieb. Der Tag wechselt zwischen Baustelle, Inbetriebnahme mit hydraulischem Abgleich und Kundenberatung zu Effizienzoptimierung sowie kantonalen und Bundes-Förderprogrammen. In Zug prägen Premium-Wohnüberbauungen, Hightech-Standorte rund um Rotkreuz und Baar sowie der konsequente Heizungsersatz nach MuKEn-Vorgaben den Auftragsmix. Daneben gehören Erdsondenbohrungen koordinieren, Kältekreis-Service und Anbindung an Photovoltaik- und Smart-Home-Systeme zum Standard. Wer Anlagen sauber dokumentiert und Bauherren überzeugend berät, hat hier überdurchschnittliche Aufstiegschancen.",
    salary:
      "Wärmepumpen-Spezialisten verdienen im Kanton Zug CHF 80'000 bis 100'000 pro Jahr — am oberen Schweizer Durchschnitt. Mit Inbetriebnahmeroutine und Erfahrung in der Erdsonden-Auslegung verschiebt sich der Marktwert ins obere Drittel. Spezialisierungen auf Grosswärmepumpen für MFH und Gewerbe, Hybridsysteme oder Anbindung an Fernwärmenetze bringen Zulagen von 8 bis 15 Prozent. Der Aufstieg zum Projektleiter Wärmepumpen oder zum eidg. dipl. HLK-Techniker HF (berufsbegleitend, 3 bis 4 Jahre) öffnet das Band CHF 100'000 bis 125'000. Premium-Arbeitgeber im Kanton Zug zahlen marktführend, fordern dafür hohe Eigenständigkeit. Die Lohnübersicht steht auf der Startseite.",
    employers:
      "Im Kanton Zug besetzen Wärmepumpen-Spezialisten und HLK-Installationsbetriebe mit 15 bis 80 Mitarbeitenden den Grossteil der Stellen. Daneben suchen Generalunternehmer Gebäudetechnik, Erdsonden-Bohrunternehmen und Anbieter für Premium-Komfortlüftung gezielt nach Inbetriebnehmern und Servicetechnikern. Hightech- und Forschungsstandorte rund um Rotkreuz und Baar betreiben interne Gebäudetechnik-Abteilungen für ihre Immobilienportfolios. Internationale Konzernzentralen mit eigener Facility-Engineering-Abteilung sowie Datacenter-Betreiber, die hochverfügbare Kälte- und Wärmeanlagen brauchen, sind ebenfalls regelmässige Arbeitgeber. Wir nennen aus Datenschutz- und Vermittlungsgründen keine Firmennamen auf der Plattform — den konkreten Arbeitgeber lernst du im persönlichen Erstgespräch kennen.",
    applicationTips:
      "Liste im Lebenslauf konkrete Anlagentypen, Hersteller (z.B. CTA, Hoval, Stiebel Eltron, Viessmann, NIBE), Leistungsklassen und Inbetriebnahme-Erfahrung auf — Personalverantwortliche im Kanton Zug filtern sehr genau danach. Der EHPA Hochdruck-Schein und ein gültiges Kältemittel-Zertifikat sind in den meisten Stellen Voraussetzung, kein Plus. Englisch in Wort und Schrift wird in den Hightech-Stellen vorausgesetzt. Bringe ein bis zwei dokumentierte Inbetriebnahme-Protokolle inklusive hydraulischem Abgleich mit. Im Vorstellungsgespräch werden Effizienzberechnung (JAZ), Schallschutzplanung, Pikettbereitschaft und der Umgang mit anspruchsvollen Bauherren vertieft abgefragt — bereite konkrete Praxisbeispiele vor.",
  },

  "projektleiter-hlks::sg": {
    whatDoes:
      "Ein Projektleiter HLKS im Kanton St. Gallen führt Heizungs-, Lüftungs-, Klima- und Sanitärprojekte von der Offerte über die Ausführungsplanung bis zur Übergabe — typischerweise im Wohnungsbau, in Schulhaus- und Spitalsanierungen sowie in Industrie- und Logistikprojekten der Ostschweiz. Der Alltag besteht aus Bauleitungssitzungen mit Architekten und Generalunternehmern, Kalkulation und Termincontrolling, Führung der Montageequipen und Koordination mit Subunternehmern. In St. Gallen prägen die Sanierungswelle gemäss MuKEn, der Wärmepumpen-Boom sowie der Ausbau von Fernwärme-Verbünden den Auftragsmix. Wer Verhandlungsstärke, Kostendisziplin und Mundartverständnis mitbringt, ist regional stark gefragt.",
    salary:
      "Projektleiter HLKS verdienen im Kanton St. Gallen typisch CHF 90'000 bis 115'000 pro Jahr, je nach Projektvolumen und Führungsspanne. Mit grösseren Bauvorhaben (ab CHF 5 Mio. HLKS-Anteil), nachgewiesener Akquisitionserfahrung und Kostendisziplin verschiebt sich der Marktwert ins obere Drittel. Der Aufstieg zum Bereichs- oder Niederlassungsleiter öffnet das Band CHF 115'000 bis 145'000. Wer den eidg. dipl. HLK-Techniker HF, den Gebäudetechnikplaner Heizung mit eidg. Fachausweis oder den eidg. dipl. Gebäudetechnikingenieur HLKS abschliesst, qualifiziert sich für Grossprojekte. Berufsbegleitende Weiterbildungen werden mitfinanziert. Die vollständige Lohnübersicht steht auf der Startseite.",
    employers:
      "Im Kanton St. Gallen besetzen vor allem mittelgrosse HLK-Installationsbetriebe und Generalunternehmer Gebäudetechnik mit 30 bis 200 Mitarbeitenden Projektleiter-Stellen. Daneben suchen Ingenieur- und Planungsbüros mit HLKS-Schwerpunkt, Anbieter für Wärmepumpen- und Fernwärmesysteme sowie Industriebetriebe rund um St. Gallen, Wil und das Rheintal eigene Projektleiter für Werks- und Liegenschaftsprojekte. Spital- und Bildungsbauten der öffentlichen Hand werden über Generalplaner abgewickelt. Wir nennen aus Datenschutz- und Vermittlungsgründen keine Firmennamen auf der Plattform — die Inserate sind anonymisiert, den konkreten Arbeitgeber lernst du im persönlichen Erstgespräch kennen, in der Regel innerhalb weniger Tage.",
    applicationTips:
      "Hänge eine kompakte Auswahl referenzierter Projekte an — Bauherrschaft anonymisiert, dafür mit Bauvolumen, Nutzungsart, Wärmeerzeuger-Konzept und deinem konkreten Projektleitungsanteil. Im Kanton St. Gallen prüfen Personalverantwortliche das Dossier explizit auf SWKI-Richtlinien-Kenntnisse, MuKEn-Erfahrung und Vertragstypen (KBOB, SIA 118). Software-Toolkit prominent angeben: Plancal Nova, Revit MEP, AutoCAD, Messerli, Sorba. Sehr gute Deutschkenntnisse mit Mundartverständnis sind Voraussetzung. Fahrausweis Kategorie B ist Standard. Im Bewerbungsgespräch werden Kostendisziplin, Verhandlungsstärke gegenüber Subunternehmern und die Koordinationsfähigkeit mit Architekten, Bauleitung und anderen Gewerken vertieft abgefragt — bereite konkrete Beispiele vor.",
  },
};

export function getEditorialContent(
  roleSlug: string,
  cantonSlug: string
): EditorialContent | null {
  return ENTRIES[`${roleSlug}::${cantonSlug}`] ?? null;
}

export const EDITORIAL_BYLINE = {
  name: "Redaktion heizungjob.ch",
  href: "/team",
  /** ISO date — formatted at render time */
  publishedAt: "2026-05-02",
} as const;
