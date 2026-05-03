import Link from "next/link";
import { TOP_LANDING_PAGES, getLandingPath } from "@/lib/landing-pages";
import { JsonLd } from "@/components/json-ld";

// SEO-DECISION: Server-rendered content for homepage crawlability.
// This content is always visible to search engines even though the
// main job search is client-rendered.

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://heizungjob.ch";

// FAQ answers target the AI-citation optimum band of 134-167 words per answer.
// Shorter answers get truncated by LLMs into low-context excerpts; longer ones
// get summarized away. The 134-167 range survives both ends intact.
const HOMEPAGE_FAQS = [
  {
    question: "Welche Heizungsjobs gibt es auf heizungjob.ch?",
    answer:
      "Auf heizungjob.ch findest du alle relevanten Stellenprofile der Schweizer Heizungs-, Lüftungs-, Klima- und Sanitärbranche (HLKS). Dazu gehören die EFZ-Lehrabschluss-Berufe Heizungsinstallateur, Heizungsmonteur, Servicemonteur Heizung, Anlagenmechaniker SHK und Kältesystem-Monteur, dazu Service- und Aussendienst-Profile wie Servicetechniker Heizung, Betriebstechniker Heizung und Wärmepumpen-Spezialist. Auf der Planungs- und Projektebene listen wir Heizungsplaner, Gebäudetechnikplaner Heizung, Bauleiter HLKS und Projektleiter HLKS. Spezialisierte Profile wie Solarthermie-Installateure, Pellet- und Holzschnitzel-Servicetechniker, Feuerungskontrolleure mit kantonaler Zulassung sowie Fernwärme-Inbetriebnehmer sind ebenfalls regelmässig vertreten. Auf der Führungsebene findest du Niederlassungsleiter, HLK-Fachvorgesetzte und Geschäftsführende von Gebäudetechnikbetrieben. Lehrstellen, Trainee-Programme und Wiedereinsteigerangebote sind separat ausgewiesen, damit Berufsanfängerinnen, Quereinsteiger und Wiedereinsteigende die für sie passenden Inserate schnell finden. Über die Kartenansicht lokalisierst du Stellen zusätzlich nach Postleitzahl und Pendelradius — besonders nützlich in ländlichen Regionen mit wechselnden Baustellen. Die Inserate werden täglich aktualisiert und verteilen sich auf alle 26 Schweizer Kantone, mit besonderer Dichte in Zürich, Bern, Aargau, St. Gallen und der Innerschweiz.",
  },
  {
    question: "Was verdient ein Heizungsinstallateur in der Schweiz?",
    answer:
      "Ein Heizungsinstallateur EFZ verdient in der Schweiz im Durchschnitt CHF 72'000 bis 92'000 pro Jahr. Das Gehalt variiert deutlich nach Kanton, Berufserfahrung, Arbeitgebergrösse und Spezialisierung. Im Kanton Zürich, in Zug und in Basel-Stadt liegen die Löhne tendenziell 5 bis 10 Prozent über dem Schweizer Mittel; in ländlicheren Kantonen wie Freiburg, Solothurn oder Graubünden 5 bis 8 Prozent darunter. Berufsanfänger nach EFZ-Abschluss starten meist im Bereich CHF 64'000 bis 72'000, mit drei bis fünf Jahren Erfahrung verschiebt sich der Marktwert in den Bereich CHF 78'000 bis 88'000. Spezialisierungen auf Wärmepumpen, Solarthermie oder Fernwärme bringen zusätzliche 5 bis 12 Prozent. Vorarbeiter, aktiver Pikettdienst und der Abschluss zum diplomierten Heizungs-Servicemonteur heben das Salärband weiter. Im Vergleich zum Nachbarland Deutschland liegen die Schweizer Bruttolöhne durchschnittlich 60 bis 80 Prozent höher; allerdings sind Lebenshaltungskosten und Krankenkassenprämien ebenfalls deutlich höher, sodass sich der direkte Nettovergleich nur über einen detaillierten Lohnrechner lohnt. Der 13. Monatslohn ist in der Gebäudetechnikbranche Standard. Die vollständige Lohnübersicht für alle Heizungsberufe findest du auf dieser Startseite.",
  },
  {
    question: "Wie finde ich einen Job als Heizungsmonteur in der Schweiz?",
    answer:
      "Auf heizungjob.ch suchst du gezielt mit drei Filtern nach passenden Stellen: Beruf (12 EFZ- und Spezialisten-Profile aus dem HLKS-Bereich), Standort (alle 26 Schweizer Kantone plus Ortssuche mit Umkreis-Radius in Kilometern) und Pensum (Vollzeit, 80 bis 100 Prozent, 60 bis 80 Prozent, Teilzeit). Du kannst zusätzlich nach Anstellungsart (Festanstellung, Temporär, Praktikum, Lehre) filtern und Stellen mit konkretem Lohnband gezielt aufrufen. Der Bewerbungsprozess läuft direkt über die Plattform: Lebenslauf als PDF hochladen, Anschreiben in das Formular tippen oder ebenfalls als PDF beifügen, Sprache und Verfügbarkeit angeben, abschicken. Wir leiten dein Dossier anonymisiert an den Arbeitgeber weiter. Du kannst Suchprofile speichern und erhältst dann eine Benachrichtigung, sobald neue passende Stellen aufgeschaltet werden. Für regional konzentrierte Suchen empfehlen wir die Karte mit Umkreis-Filter — so findest du Stellen innerhalb deines bevorzugten Pendelradius. Branchenmessen wie die Hausbau- und Energie-Messe Bern, die Bauen+Wohnen Aargau sowie die suissetec-Fachveranstaltungen bieten zusätzliche Direktkontakte zu Arbeitgebern; viele Betriebe haben offene Stellen, die sie noch nicht öffentlich ausgeschrieben haben.",
  },
  {
    question: "Welche Kantone haben die meisten Heizungsjobs?",
    answer:
      "Die mit Abstand meisten offenen Stellen für Heizungs- und Gebäudetechnik-Fachkräfte gibt es in den Kantonen Zürich, Bern, Aargau, Waadt und St. Gallen. Diese fünf Kantone vereinen rund 60 Prozent aller publizierten HLKS-Stellenausschreibungen in der Schweiz. Im Mittelfeld folgen Luzern, Basel-Stadt, Thurgau, Solothurn und Genf. Ländlichere Kantone wie Uri, Glarus, Appenzell Innerrhoden oder Jura haben deutlich weniger offene Stellen, dafür weniger Konkurrenz unter Bewerbern. Die regionale Verteilung folgt der Sanierungswelle und dem Wärmepumpen-Boom: Wo Mehrfamilienhäuser energetisch saniert und Öl- bzw. Gasheizungen gemäss MuKEn-Vorgaben ersetzt werden, steigt die Nachfrage nach Installateuren, Servicemonteuren und Projektleitern HLKS deutlich. Für Pendlerregionen lohnt sich ein Blick auf die Nachbarkantone — Aargauer Betriebe rekrutieren häufig in Solothurn und Luzern, Berner Betriebe in Solothurn, Freiburg und Wallis, Zürcher in Schaffhausen, Thurgau und Schwyz. Eine zweisprachige Bewerbung (Deutsch und Französisch) öffnet zusätzlich den Markt im Kanton Wallis, in der Region Biel/Bienne und in Teilen von Fribourg. Die täglich aktualisierten Stellenzahlen pro Kanton siehst du in unserem Filter.",
  },
  {
    question:
      "Was ist der Unterschied zwischen Heizungsinstallateur und Heizungsmonteur?",
    answer:
      "Der Unterschied liegt in Lehrdauer, Befähigung und Gehaltsband. Der Heizungsinstallateur EFZ absolviert eine 4-jährige Lehre und plant, installiert und nimmt Heizungs- und Wärmepumpenanlagen eigenständig in Betrieb — inklusive hydraulischem Abgleich und Übergabeprotokoll an die Bauherrschaft. Der Heizungsmonteur ist auf die ausführende Tätigkeit fokussiert: Rohrverlegung, Heizkörpermontage, Anschluss von Pumpengruppen und Verteilern unter Anleitung der Installateurin oder des Vorarbeiters. Beide Berufe sind in der Schweiz stark gefragt, der Lohnabstand beträgt durchschnittlich CHF 4'000 bis 8'000 pro Jahr zugunsten des Heizungsinstallateurs EFZ. Wechsel ist gut möglich: Über die zweijährige verkürzte Zusatzlehre wird der Heizungsmonteur zum Heizungsinstallateur EFZ. Viele Lehrbetriebe finanzieren diesen Weg mit, weil Fachkräfte mit voller Befähigung im aktuellen Wärmepumpen-Boom besonders knapp sind. Aktuell entstehen zudem hybride Profile rund um Wärmepumpen-Montage, Solarthermie-Installation und Anschluss an Fernwärme-Verbünde, die für Berufseinsteiger eine attraktive Alternative zum klassischen Installateur-Pfad darstellen. Welcher Beruf besser passt, hängt von Lust auf Eigenverantwortung versus Teamarbeit auf der Baustelle ab — eine Berufsberatung in deinem Wohnkanton hilft bei der konkreten Wahl.",
  },
  {
    question: "Gibt es auf heizungjob.ch auch Teilzeitstellen?",
    answer:
      "Ja, ein wachsender Teil der Stellen auf heizungjob.ch ist Teilzeitarbeit oder mit reduziertem Pensum verfügbar. Im Filter wählst du zwischen Vollzeit (90 bis 100 Prozent), 80 bis 100 Prozent, 60 bis 80 Prozent oder Teilzeit unter 60 Prozent. Teilzeitmodelle sind besonders bei Servicemonteuren Heizung, Heizungsplanern und in der Gebäudeautomation verbreitet — Elternzeit-Modelle, schrittweiser Wiedereinstieg nach Pause und Vorruhestand mit Reduzierung auf 60 oder 80 Prozent sind in der Schweizer Gebäudetechnikbranche zunehmend Standard. Auf der Baustellenseite (Heizungsinstallateur, Heizungsmonteur) bleibt Vollzeit dominant, weil Equipen meist vollständig disponiert werden. In den Bereichen Planung, Projektleitung und Kundendienst ist Teilzeit hingegen gut etabliert. Job-Sharing-Modelle (zwei Personen teilen sich eine Stelle) werden ebenfalls vereinzelt angeboten. Wer Elternzeit-Wiedereinstieg sucht, profitiert von einer wachsenden Akzeptanz für gestaffelte Pensumserhöhungen — also Start mit 60 Prozent und schrittweise Anhebung über 12 bis 24 Monate.",
  },
];

const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: HOMEPAGE_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const SALARY_TABLE = [
  { role: "Bauleiter HLKS", range: "CHF 95'000 – 125'000" },
  { role: "Projektleiter HLKS", range: "CHF 88'000 – 115'000" },
  { role: "Heizungsplaner", range: "CHF 82'000 – 105'000" },
  { role: "Wärmepumpen-Spezialist", range: "CHF 80'000 – 100'000" },
  { role: "Kältetechniker", range: "CHF 78'000 – 98'000" },
  { role: "Heizungsinstallateur EFZ", range: "CHF 72'000 – 92'000" },
  { role: "Servicemonteur Heizung", range: "CHF 72'000 – 90'000" },
  { role: "Betriebstechniker Heizung", range: "CHF 72'000 – 90'000" },
  { role: "Feuerungskontrolleur", range: "CHF 70'000 – 88'000" },
  { role: "Anlagenmechaniker SHK", range: "CHF 68'000 – 85'000" },
  { role: "Heizungsmonteur EFZ", range: "CHF 68'000 – 82'000" },
  { role: "Gebäudetechnik HLKS", range: "CHF 70'000 – 90'000" },
];

/**
 * Server-rendered SEO content for the homepage.
 * Crawlable by search engines even when JS is disabled.
 * Includes: intro text, FAQ section, salary table, landing page links.
 */
export function HomepageSeoContent() {
  return (
    <section className="bg-white border-t" aria-label="Informationen für Heizungs-Fachkräfte">
      <JsonLd data={faqPageSchema} />

      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 max-w-5xl">
        {/* SEO intro paragraph — AI-citeable, entity-rich */}
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
            Heizungsjobs in der Schweiz finden
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-4">
            Auf heizungjob.ch finden Heizungs-Fachkräfte aktuelle offene Stellen in der ganzen Schweiz
            — von Heizungsinstallateur EFZ über Servicemonteur Heizung und Projektleiter HLKS bis hin zu
            Wärmepumpen-Spezialisten, Heizungsplanern und Kältetechnikern. Ob du deinen nächsten Heizungsjob
            in Zürich, Bern oder Basel suchst — unsere spezialisierte Jobbörse
            richtet sich an alle Berufsleute der Heizungs- und Gebäudetechnikbranche.
          </p>
          <p className="text-slate-600 text-base leading-relaxed">
            Ob du in Zürich, Bern, Basel, Luzern, St. Gallen oder einem anderen Schweizer Kanton
            suchst — mit unserer smarten Filterung nach Beruf, Ort, Umkreis und Pensum findest du
            schnell die passende Stelle. Bewirb dich direkt über die Plattform mit wenigen Klicks.
          </p>
        </div>

        {/* Salary table — highly citeable by AI. id="loehne" anchor lets editorial */}
        {/* sections on category pages deep-link via /#loehne. */}
        <div id="loehne" className="mb-12 scroll-mt-24">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
            Lohnübersicht Heizungsberufe Schweiz
          </h2>
          <p className="text-slate-500 text-sm mb-4">
            Durchschnittliche Jahresgehälter für Heizungs-Fachkräfte in der Schweiz (2025/2026, Richtwerte).
            Quellen:{" "}
            <a href="https://www.suissetec.ch" target="_blank" rel="noopener noreferrer" className="underline hover:text-slate-700">suissetec</a>,{" "}
            <a href="https://www.gebaeudeklima-schweiz.ch" target="_blank" rel="noopener noreferrer" className="underline hover:text-slate-700">GebäudeKlima Schweiz</a>,{" "}
            <a href="https://www.bfs.admin.ch" target="_blank" rel="noopener noreferrer" className="underline hover:text-slate-700">BFS</a>.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-slate-200">
                  <th className="py-3 pr-4 text-sm font-semibold text-slate-900">Beruf</th>
                  <th className="py-3 text-sm font-semibold text-slate-900">Jahreslohn (CHF)</th>
                </tr>
              </thead>
              <tbody>
                {SALARY_TABLE.map((row) => (
                  <tr key={row.role} className="border-b border-slate-100">
                    <td className="py-2.5 pr-4 text-sm text-slate-700">{row.role}</td>
                    <td className="py-2.5 text-sm font-medium text-slate-900">{row.range}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <details className="mt-4 group rounded-lg border border-slate-200 bg-slate-50 overflow-hidden">
            <summary className="flex cursor-pointer items-center justify-between px-4 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100 transition-colors">
              Methodologie — wie wir die Lohnbänder berechnen
              <span
                className="ml-2 shrink-0 text-slate-400 transition-transform group-open:rotate-180"
                aria-hidden="true"
              >
                ▾
              </span>
            </summary>
            <div className="px-4 pb-4 text-sm text-slate-600 leading-relaxed space-y-2">
              <p>
                <strong>Stand:</strong> 2. Mai 2026.
              </p>
              <p>
                <strong>Quellen:</strong> Wir aggregieren öffentlich publizierte
                Lohndaten der Schweizer Gebäudetechnikbranche aus den Jahres- und
                Branchenstatistiken von{" "}
                <a
                  href="https://www.suissetec.ch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-slate-800"
                >
                  suissetec
                </a>{" "}
                (Schweizerisch-Liechtensteinischer Gebäudetechnikverband),{" "}
                <a
                  href="https://www.gebaeudeklima-schweiz.ch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-slate-800"
                >
                  GebäudeKlima Schweiz
                </a>{" "}
                und dem{" "}
                <a
                  href="https://www.bfs.admin.ch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-slate-800"
                >
                  Bundesamt für Statistik (BFS)
                </a>
                . Ergänzend werten wir die täglich auf heizungjob.ch indexierten
                öffentlichen Stellenausschreibungen aus.
              </p>
              <p>
                <strong>Bandbreite und Mittelwert:</strong> Die Tabelle zeigt
                Richtbänder. Der konkrete Lohn wird im Bewerbungsprozess
                individuell verhandelt und hängt von Erfahrung, Spezialisierung,
                Arbeitgebergrösse, Branche und Region ab. Innerhalb eines Bands
                liegt die Mehrheit (rund zwei Drittel) der ausgewerteten
                Vergleichswerte.
              </p>
              <p>
                <strong>Aktualisierung:</strong> Wir überarbeiten die Lohnbänder
                jährlich beziehungsweise sofort, sobald ein Branchenverband neue
                Empfehlungen veröffentlicht oder sich die Marktlage in einer
                Region merklich verändert. Korrekturhinweise nehmen wir gerne
                über die Kontaktseite entgegen.
              </p>
            </div>
          </details>
        </div>

        {/* FAQ section — conversational query targets */}
        <div className="mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
            Häufig gestellte Fragen
          </h2>
          <div className="space-y-4">
            {HOMEPAGE_FAQS.map((faq, index) => (
              <details
                key={index}
                className="group rounded-lg border border-slate-200 bg-slate-50 overflow-hidden"
              >
                <summary className="flex cursor-pointer items-center justify-between px-4 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100 transition-colors">
                  {faq.question}
                  <span
                    className="ml-2 shrink-0 text-slate-400 transition-transform group-open:rotate-180"
                    aria-hidden="true"
                  >
                    ▾
                  </span>
                </summary>
                <div className="px-4 pb-4 text-sm text-slate-600 leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>

        {/* Landing page links — crawlable internal links */}
        <div className="mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
            Alle Heizung Jobs nach Beruf und Kanton
          </h2>
          <nav aria-label="Beliebte Stellenangebote nach Beruf und Kanton">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
              {TOP_LANDING_PAGES.map((item) => (
                <Link
                  key={`${item.role}-${item.canton}`}
                  href={getLandingPath(item)}
                  className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 hover:border-primary/40 hover:text-primary transition-colors"
                >
                  {item.role} in {item.canton}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </section>
  );
}
