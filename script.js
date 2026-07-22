(() => {
  "use strict";

  const navLinks = [...document.querySelectorAll("[data-section]")];
  const sectionLinks = [...document.querySelectorAll("[data-section-link]")];
  const views = [...document.querySelectorAll("[data-view]")];
  const menuToggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".nav-links");
  const brand = document.querySelector("[data-nav-target]");
  const main = document.getElementById("main-content");
  const year = document.getElementById("year");
  const form = document.getElementById("contact-form");
  const formStatus = document.getElementById("form-status");
  const legalDialog = document.getElementById("legal-dialog");
  const legalTitle = document.getElementById("legal-title");
  const legalContent = document.getElementById("legal-content");
  const dialogClose = document.querySelector("#legal-dialog .dialog-close");
  const blogDialog = document.getElementById("blog-dialog");
  const blogDialogTitle = document.getElementById("blog-dialog-title");
  const blogDialogContent = document.getElementById("blog-dialog-content");
  const blogDialogClose = document.querySelector(".dialog-close--blog");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  const sectionTitles = {
    home: "pranapaw | Prana Fernheilung & Tierkommunikation",
    infos: "Infos | Prana Fernheilung & Tierkommunikation",
    angebote: "Angebote | Prana Fernheilung & Tierkommunikation",
    kontakt: "Kontakt | Prana Fernheilung & Tierkommunikation",
    blog: "Blog | pranapaw",
    whatsapp: "WhatsApp | Prana Fernheilung & Tierkommunikation"
  };

  const legalPages = {
    agb: {
      title: "Allgemeine Geschäftsbedingungen",
      html: `
        <p><strong>Mustertext – vor Veröffentlichung rechtlich prüfen und durch Eure tatsächlichen Angaben ersetzen.</strong></p>
        <h3>1. Geltungsbereich</h3>
        <p>Diese Bedingungen gelten für Vereinbarungen über energetische Begleitung und Tierkommunikation zwischen den Anbietenden und ihren Kundinnen und Kunden.</p>
        <h3>2. Leistungsbeschreibung</h3>
        <p>Art, Umfang, Termin und Vergütung werden vor Beginn individuell vereinbart. Es wird kein bestimmter Erfolg geschuldet.</p>
        <h3>3. Abgrenzung</h3>
        <p>Die Angebote ersetzen keine medizinische, tiermedizinische, psychotherapeutische oder heilpraktische Diagnose und Behandlung.</p>
        <h3>4. Termine und Absagen</h3>
        <p>Regelungen zu Terminverschiebungen, Ausfallhonoraren und Zahlungsfristen sind mit Euren tatsächlichen Konditionen zu ergänzen.</p>
      `
    },
    datenschutz: {
      title: "Datenschutz",
      html: `
        <p><strong>Mustertext – vor Veröffentlichung an Hosting, Kontaktwege und eingesetzte Dienste anpassen.</strong></p>
        <h3>Verantwortliche Stelle</h3>
        <p>Bitte ergänzt hier vollständigen Namen, ladungsfähige Anschrift und eine Kontakt-E-Mail.</p>
        <h3>Kontaktaufnahme</h3>
        <p>Die im Formular eingegebenen Daten werden ausschließlich zur Bearbeitung der Anfrage verwendet. Das Formular öffnet lokal das E-Mail-Programm und speichert auf dieser Website keine Daten.</p>
        <h3>WhatsApp</h3>
        <p>Beim Öffnen des WhatsApp-Links gelten die Datenschutzbedingungen des jeweiligen Anbieters. Nutzt diesen Kontaktweg nur, wenn Ihr damit einverstanden seid.</p>
        <h3>Server-Logdateien</h3>
        <p>Der Hostinganbieter kann technisch erforderliche Zugriffsdaten verarbeiten. Ergänzt hier die Angaben Eures tatsächlichen Hosters.</p>
      `
    },
        impressum: {
      title: "Impressum",
      html: `
        <h3>Angaben gemäß §5 TMG</h3>
        <p>
        Kevin Maus<br>
        pranapaw<br>
        Wuppertal<br>
        Nordrhein-Westfalen, Deutschland
        </p>

        <h3>Kontakt</h3>
        <p>E-Mail: <a href="mailto:kmzentral@gmail.com">kmzentral@gmail.com</a></p>

        <h3>Umsatzsteuer</h3>
        <p>Gemäß §19 UStG wird keine Umsatzsteuer berechnet (Kleinunternehmerregelung).</p>

        <h3>Inhaltlich verantwortlich</h3>
        <p>Kevin Maus (Anschrift wie oben)</p>

        <h3>Streitbeilegung</h3>
        <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
        <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">
        https://ec.europa.eu/consumers/odr/
        </a>.
        Wir sind nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
      `
    }
  };


  const blogPosts = {
    podcast: {
      title: "Pranaheilung vs. Schulmedizin",
      html: `
        <button class="category-back-btn" type="button" data-blog-open="topic-prana">← Zurück zur Übersicht</button>
        <p><strong>Zwei unterschiedliche Ebenen – kein Gegeneinander.</strong></p>
        <p>
          Schulmedizin basiert auf wissenschaftlicher Diagnostik, überprüfbaren Verfahren und klaren
          Behandlungsstandards. Sie ist bei Beschwerden, Erkrankungen, Verletzungen und Notfällen unverzichtbar.
        </p>
        <p>
          Pranaheilung und andere energetische Methoden verstehen wir als ergänzende Begleitung. Sie können
          einen achtsamen Raum für Entspannung, Selbstwahrnehmung, innere Ausrichtung und persönliche Reflexion schaffen.
        </p>
        <h3>Verantwortung bedeutet Klarheit</h3>
        <p>
          Energetische Begleitung darf niemals Diagnosen stellen, Medikamente verändern oder medizinische
          Behandlungen ersetzen. Bei gesundheitlichen Beschwerden gehört die Abklärung immer in professionelle
          ärztliche oder tierärztliche Hände.
        </p>
        <p>
          Unser Ziel ist deshalb kein Wettbewerb zwischen Methoden, sondern ein respektvoller, transparenter
          Umgang mit ihren jeweiligen Möglichkeiten und Grenzen.
        </p>
      `
    },
    lotus: {
      title: "Die Geschichte der Lotusblüte",
      html: `
        <button class="category-back-btn" type="button" data-blog-open="topic-meditation">← Zurück zur Übersicht</button>
        <p><strong>Die Lehre des Wachstums aus der Tiefe.</strong></p>
        <p>
          In den Tiefen eines stillen Teiches, verborgen im Dunkel des Schlammes, schlummerte ein winziger Lotus-Samen. Er war klein und unscheinbar, doch in ihm barg sich die Sehnsucht nach dem Licht, der Wunsch zu wachsen und zu erblühen.
        </p>
        <p>
          Ein zartes Pflänzchen spross aus dem Samen, ein dünner Stängel, der sich tapfer durch den trüben Schlamm kämpfte. Der Weg war beschwerlich, voller Hindernisse und Dunkelheit. Der Schlamm symbolisierte die Herausforderungen des Lebens, die Unwissenheit, den Mangel an Liebe und Wahrheit. Doch der junge Lotus ließ sich nicht entmutigen. Er strebte unaufhaltsam nach oben, dem Licht entgegen, angetrieben von einer unsichtbaren Kraft.
        </p>
        <p>
          Auf seiner Reise lernte der Lotus, das Gute vom Schlechten zu trennen. Er nahm nur das auf, was seinem Wachstum diente, was ihn stärkte und ihm half, sich zu entfalten. Alles Negative, alles was ihn behinderte, ließ er hinter sich.
        </p>
        <p>
          Endlich, nach langem Kampf, erreichte der Lotus die Oberfläche des Wassers. Er durchbrach die Grenze zwischen Dunkelheit und Licht und entfaltete seine Blütenblätter in all ihrer Pracht. Die Sonne küsste seine zarten Blätter, der Himmel spiegelte sich in ihrem reinen Weiß.
        </p>
        <p>
          Die Lotusblüte hatte ihr Ziel erreicht. Sie verband sich mit dem Licht, dem Ursprung allen Seins, und erstrahlte in ihrer vollen Schönheit. Der Kreislauf schloss sich, die Reise war vollendet.
        </p>
        <h3>Die Lehre des Lotus</h3>
        <p>
          Die Geschichte der Lotusblüte ist eine Geschichte der Hoffnung, der Transformation und der Erleuchtung. Sie lehrt uns, dass wir alle das Potenzial haben, über uns hinauszuwachsen, selbst aus den schwierigsten Umständen. Wie der Lotus können auch wir den Weg des Lichts finden, indem wir uns auf das Positive konzentrieren, das Negative loslassen und stets nach oben streben.
        </p>
        <p>
          Die Lotusblüte erinnert uns daran, dass wahre Schönheit und Erfüllung im Inneren zu finden sind, wenn wir uns mit unserer wahren Natur verbinden und unser volles Potenzial entfalten.
        </p>
      `
    },
    dankbarkeit: {
      title: "Dankbarkeit als heilsame Frequenz für Tiere",
      html: `
        <button class="category-back-btn" type="button" data-blog-open="topic-glaube">← Zurück zur Übersicht</button>
        <p><strong>Die stärkste Kraft im Universum.</strong></p>
        <p>
          Es gibt Zeiten, in denen uns die Welt um uns herum schwer, trüb oder dunkel erscheint. In solchen Momenten der tiefsten Dunkelheit ist es oft schwer, einen Ausweg zu sehen. Doch genau hier entfaltet eine der kraftvollsten Energien des Universums ihre Wirkung: die Dankbarkeit.
        </p>
        <p>
          Dankbarkeit ist kein passives "Danke" für angenehme Dinge. Sie ist eine aktive Ausrichtung unseres Bewusstseins. Wenn wir den Blick bewusst auf das lenken, was uns trotz allem nährt und trägt, verändern wir augenblicklich unsere Schwingungsfrequenz. Selbst das kleinste Licht der Dankbarkeit vertreibt die Schatten der Sorge und lässt neue Hoffnung entstehen.
        </p>
        <h3>Kleine Übung für den Alltag: Die Lichtperle der Dankbarkeit</h3>
        <p>
          Nimm dir heute drei Minuten Zeit für dich (und gerne auch neben deinem Haustier):
        </p>
        <ol>
          <li>Schließe deine Augen und atme ruhig ein und aus.</li>
          <li>Richte deine Aufmerksamkeit auf dein Herz-Chakra in der Mitte deiner Brust.</li>
          <li>Erinnere dich an eine einzige Sache, eine Geste oder einen Moment mit deinem Tier, der dir bedingungslose Freude geschenkt hat.</li>
          <li>Lass das Gefühl der Dankbarkeit für diesen Moment als warmes, goldenes Licht in deinem Herzen erstrahlen.</li>
          <li>Stelle dir vor, wie sich dieses Licht mit jedem Atemzug ausdehnt, deine Aura reinigt und jeden Schatten der Sorge sanft auflöst.</li>
        </ol>
      `
    },
    "was-ist-prana": {
      title: "Was ist Pranaheilung?",
      html: `
        <button class="category-back-btn" type="button" data-blog-open="topic-prana">← Zurück zur Übersicht</button>
        <p><strong>Grundlagen der feinstofflichen Energiearbeit.</strong></p>
        <p>
          Die Pranaheilung (nach Grandmaster Choa Kok Sui) basiert auf dem Prinzip, dass jeder lebende Organismus die angeborene Fähigkeit besitzt, sich selbst zu heilen. Diese Selbstheilung wird durch die gezielte Übertragung von Lebensenergie – auch Prana, Chi oder Prana genannt – unterstützt und beschleunigt.
        </p>
        <p>
          Die Arbeit findet ausschließlich im feinstofflichen Bereich (der Aura) und den Energiezentren (Chakras) statt. Der physische Körper wird dabei nicht berührt.
        </p>
        <h3>Zwei elementare Schritte der Behandlung</h3>
        <ul>
          <li><strong>Reinigung (Cleansing):</strong> Bevor neue Energie übertragen werden kann, muss verbrauchte, gestaute oder blockierte Energie sanft aus der Aura entfernt werden. Dies verhindert energetische Staus und bereitet den Weg für die Aufnahme frischer Kraft.</li>
          <li><strong>Energetisieren (Energizing):</strong> Erst nach der Reinigung wird frisches, vitales Prana auf die betroffenen Bereiche übertragen, um den natürlichen Regenerationsprozess zu beschleunigen.</li>
        </ul>
        <h3>Wichtiger Hinweis und Grenzen</h3>
        <p>
          Wir stellen keine Diagnosen und geben keine Heilversprechen ab. Die energetische Begleitung dient der Entspannung und Harmonisierung des Energiefeldes und versteht sich stets als Ergänzung zur Schulmedizin.
        </p>
      `
    },
    "goldene-mitte": {
      title: "Aspirin, Hausmittel oder Heilpflanzen? Auf der Suche nach der goldenen Mitte",
      html: `
        <button class="category-back-btn" type="button" data-blog-open="topic-natur">← Zurück zur Übersicht</button>
        <audio class="podcast-player" controls preload="metadata" style="width: 100%; margin-bottom: 1.5rem; border-radius: 0.9rem; filter: drop-shadow(0 8px 14px rgba(21, 75, 65, 0.08));">
          <source src="podcast-goldene-mitte.mp3" type="audio/mpeg">
          Dein Browser unterstützt die Audiowiedergabe nicht.
        </audio>
        <p><strong>Die langjährigen Begleiter wie Ibuprofen und Co. bringen Beipackzettel voller Risiken mit sich. Auf der anderen Seite lockt die Naturheilkunde. Wie finden wir die goldene Mitte im Dschungel der Ratschläge?</strong></p>
        <p>
          In den letzten Jahrzehnten hat sich in der globalen Gesundheitslandschaft ein deutlicher Wandel vollzogen. Die Grenzen strenger biomedizinischer Modelle bei der Behandlung komplexer oder chronischer Gesundheitsprobleme werden zunehmend erkannt, weshalb das Interesse an schonenden, integrativen Alternativen rasant wächst. Viele Menschen greifen heute vermehrt zur Phytotherapie (Pflanzenheilkunde) oder zu bewährten Hausmitteln, um Beschwerden auf natürliche Weise zu begegnen. Dabei rücken altbewährte Heilpflanzen wie die Linde (Heilpflanze des Jahres 2025) oder der Echte Beinwell (Heilpflanze des Jahres 2027) wieder stark in das öffentliche Bewusstsein. Auch die moderne Forschung widmet sich zunehmend der Wirksamkeit von Naturstoffen, wie etwa dem Einsatz von Grüntee bei Hauterkrankungen wie Rosazea oder pflanzlichen Behandlungsansätzen bei Endometriose.
        </p>
        <h3>Integrative Medizin als Lösung</h3>
        <p>
          Bedeutet dieser Trend zur Natur jedoch, dass wir klassische pharmazeutische Medikamente vollständig verbannen sollten? Experten aus dem Bereich der komplementären Gesundheitsversorgung betonen deutlich, dass die Lösung nicht in einem radikalen „Entweder-oder“ liegt. Die wahre goldene Mitte findet sich in der <strong>integrativen Medizin</strong>, welche die Errungenschaften der klassischen Schulmedizin mit den sanften Ansätzen der Naturheilkunde verbindet.
        </p>
        <p>
          Seriöse alternative Heilmethoden verstehen sich ausdrücklich als ergänzende (komplementäre) Praxis und nicht als Ersatz für eine orthodoxe medizinische Versorgung. Entsprechend geschulte Anwender komplementärer Methoden raten niemals von ärztlich verschriebenen Medikamenten ab und greifen nicht in bestehende Behandlungen ein.
        </p>
        <h3>Die Stärken beider Welten vereinen</h3>
        <p>
          Es geht vielmehr darum, die Stärken beider Welten verantwortungsvoll zu kombinieren. Während die klassische (allopathische) Medizin darauf spezialisiert ist, Krankheiten zielgerichtet biochemisch zu behandeln, zielen natürliche Ansätze darauf ab, das Gesamtsystem des Körpers in sein natürliches Gleichgewicht (Homöostase) zurückzuführen und die Selbstheilungskräfte zu stärken.
        </p>
        <p>
          Der ideale Weg für Patienten besteht somit darin, bei schweren, akuten oder anhaltenden Symptomen stets ärztlichen Rat einzuholen, jedoch bei der Prävention und bei leichten Beschwerden das wertvolle Wissen der Naturheilkunde und Phytotherapie als sanfte, begleitende Unterstützung zu nutzen.
        </p>
        <p><em>(Hinweis: Da die mir zur Verfügung stehenden Quellen keine spezifischen Informationen oder Risikobewertungen zu den Medikamenten Aspirin, Ibuprofen oder Paracetamol enthalten, fokussiert sich dieser Fachbeitrag auf die in den Texten belegte generelle Balance zwischen klassischer Schulmedizin und komplementären Heilmethoden, wie der Pflanzenheilkunde.)</em></p>
      `
    },
    "tierkommunikation-erklaert": {
      title: "Tierkommunikation einfach erklärt",
      html: `
        <button class="category-back-btn" type="button" data-blog-open="topic-tier">← Zurück zur Übersicht</button>
        <p><strong>Die Sprache der Intuition und Verbundenheit.</strong></p>
        <p>
          Tierkommunikation ist kein magisches Geheimnis, sondern eine Form der nonverbalen, telepathischen Verständigung, die auf einer tiefen intuitiven Ebene stattfindet. Tiere nutzen diese Sprache von Natur aus – wir Menschen haben sie im Laufe unseres Lebens oft nur verlernt.
        </p>
        <p>
          Der Austausch basiert auf Schwingungen. Informationen können in Form von mentalen Bildern, Gefühlen, körperlichen Empfindungen, Worten oder plötzlichem Wissen übertragen werden.
        </p>
        <h3>Wie funktioniert der Ablauf?</h3>
        <p>
          Um eine Verbindung herzustellen, begibt sich der Kommunikator in einen Zustand tiefer mentaler Ruhe und Achtsamkeit (vergleichbar mit Meditation). In diesem Zustand der Präsenz richten wir unseren Fokus auf das Tier und senden oder empfangen Signale.
        </p>
        <p>
          Durch Tierkommunikation können wir erfahren:
        </p>
        <ul>
          <li>Wie sich das Tier in seiner Umgebung fühlt.</li>
          <li>Welche Wünsche oder Bedürfnisse es hat.</li>
          <li>Die energetischen Ursachen von Verhaltensauffälligkeiten.</li>
          <li>Botschaften, die das Tier an seinen Besitzer richten möchte.</li>
        </ul>
        <p>
          Wir begegnen den Tieren dabei stets mit tiefem Respekt, Liebe und auf Augenhöhe – als gleichwertigen Seelenpartnern des Menschen.
        </p>
      `
    },
    "liebe-lebensweg": {
      title: "Liebe als Weg des Lebens — Mit Ängsten umgehen",
      html: `
        <button class="category-back-btn" type="button" data-blog-open="topic-glaube">← Zurück zur Übersicht</button>
        <p><strong>Ängste annehmen und in Vertrauen wandeln.</strong></p>
        <p>
          Angst ist eine natürliche Emotion, die uns schützen soll. Wenn sie jedoch dauerhaft unser Energiefeld dominiert, führt sie zu Blockaden. Energetisch zieht sich bei Angst das Herz-Chakra zusammen, und der Energiefluss gerät ins Stocken. Das blockiert auch den Zugang zu unserer inneren Intuition.
        </p>
        <p>
          Der Weg der Liebe bedeutet nicht, die Angst wegzudrücken, sondern ihr einen Raum des Mitgefühls zu schenken. Wenn wir unsere Ängste liebevoll annehmen, verlieren sie ihre lähmende Macht.
        </p>
        <h3>Drei Schritte für den Alltag</h3>
        <ol>
          <li><strong>Atmen und Spüren:</strong> Wenn Angst aufsteigt, halte inne. Atme tief in den Bauch und nimm das Gefühl im Körper wahr, ohne es zu bewerten.</li>
          <li><strong>Das Herz öffnen:</strong> Lege eine Hand auf dein Herz und spüre die Wärme. Schicke dir selbst und deiner Angst Mitgefühl.</li>
          <li><strong>Gemeinsame Erdung:</strong> Nimm Kontakt zu deinem Haustier auf. Tiere spüren das liebevolle Feld, das du aufbaust, und helfen dir durch ihre reine Präsenz, wieder im Hier und Jetzt anzukommen.</li>
        </ol>
      `
    },
    erdung: {
      title: "Erdungsübungen für Mensch und Tier",
      html: `
        <button class="category-back-btn" type="button" data-blog-open="topic-tier">← Zurück zur Übersicht</button>
        <p><strong>Die heilsame Verbindung zur Energie der Erde.</strong></p>
        <p>
          Im stressigen Alltag verlieren wir oft den energetischen Kontakt zum Boden unter unseren Füßen. Wir sind wortwörtlich „nicht geerdet“. Dies äußert sich feinstofflich durch einen Energieüberschuss im Kopfbereich, was zu Gedankenkarussell, Unruhe und Erschöpfung führen kann.
        </p>
        <p>
          Erdung (Earthing) bedeutet, unser Energiefeld wieder mit der beruhigenden und stabilisierenden Frequenz der Erde zu verbinden.
        </p>
        <h3>Einfache Übung zur Erdung im Alltag</h3>
        <p>
          Stelle dich barfuß auf eine Wiese oder einen natürlichen Untergrund. Schließe deine Augen und atme tief ein. Visualisiere beim Ausatmen, wie feine energetische Wurzeln aus deinen Fußsohlen tief in die Erde wachsen. Spüre, wie verbrauchte Energie über diese Wurzeln abfließt und frische Erdenergie dich ausfüllt.
        </p>
        <p>
          <strong>Tipp mit Tieren:</strong> Tiere sind von Natur aus hervorragend geerdet. Verbringe bewusst Zeit mit ihnen im Wald oder auf einer Wiese. Das Streicheln deines Hundes oder Pferdes auf natürlichem Boden überträgt diese harmonisierende Erdenergie auch auf dich.
        </p>
      `
    },
    atemuebung: {
      title: "5 Minuten Atemstille",
      html: `
        <button class="category-back-btn" type="button" data-blog-open="topic-meditation">← Zurück zur Übersicht</button>
        <p><strong>Eine kurze geführte Atemübung zur sofortigen Entspannung.</strong></p>
        <p>
          Setze oder lege dich bequem hin. Richte deine Wirbelsäule sanft auf, lockere deine Schultern und schließe deine Augen.
        </p>
        <h3>Der Ablauf:</h3>
        <ol>
          <li>Atme durch die Nase ein und zähle im Geist langsam bis 4. Stell dir vor, wie reines Licht und frisches Prana dein Herz erwärmen.</li>
          <li>Halte den Atem für 2 Sekunden sanft an.</li>
          <li>Atme langsam durch den Mund aus und zähle dabei bis 6. Lass alle Anspannung, Sorgen und schwere Energien mit dem Atem entweichen.</li>
          <li>Wiederhole diesen Zyklus für etwa 5 Minuten.</li>
        </ol>
        <p>
          Diese einfache Atemtechnik beruhigt das Nervensystem, harmonisiert das Solarplexus-Chakra und bringt dich sofort in deine Mitte zurück.
        </p>
      `
    },
    waldesstille: {
      title: "Die Stille des Waldes",
      html: `
        <button class="category-back-btn" type="button" data-blog-open="topic-natur">← Zurück zur Übersicht</button>
        <p><strong>Eine Einladung zum Innehalten und Wahrnehmen.</strong></p>
        <p>
          Wenn wir durch einen Wald gehen, bemerken wir schnell eine tiefe, fast greifbare Ruhe. Bäume und Pflanzen strahlen ein hochgeordnetes, harmonisches Energiefeld aus, das unsere eigene Aura reinigt und auflädt.
        </p>
        <p>
          In der Natur gibt es keine Eile. Ein Baum wächst behutsam und verwurzelt sich tief, bevor er weit in den Himmel ragt. 
        </p>
        <p>
          Nimm dir bei deinem nächsten Spaziergang vor, für 10 Minuten völlig still zu sein und alle Sinne zu öffnen: Was riechst du? Was hörst du? Wie fühlt sich die Rinde eines Baumes an? Diese achtsame Präsenz stärkt deine Verbindung zum Leben und bringt deine Seele ins Gleichgewicht.
        </p>
      `
    },
    "podcast-ursache": {
      title: "Podcast: Ursache und Wirkung",
      html: `
        <audio class="podcast-player" controls preload="metadata" style="width: 100%; margin-bottom: 1.5rem; border-radius: 0.9rem; filter: drop-shadow(0 8px 14px rgba(21, 75, 65, 0.08));">
          <source src="Ursache_und_Wirkung.mp3" type="audio/mpeg">
          Dein Browser unterstützt die Audiowiedergabe nicht.
        </audio>
        <p><strong>Die universellen Gesetze der Energie verstehen.</strong></p>
        <p>
          Nichts im Universum geschieht ohne Grund. In dieser Folge beleuchten wir das Gesetz von Ursache und Wirkung (Karma) aus energetischer Sicht.
        </p>
        <p>
          Jeder Gedanke, jedes Wort und jede Handlung sendet eine feine Schwingung aus, die früher oder später zu uns zurückkehrt. Im Kontext der Energiearbeit bedeutet dies: Wenn wir blockierende, grollende oder ängstliche Schwingungen aussenden, formen diese unser Energiefeld und ziehen ähnliche Erfahrungen an.
        </p>
        <h3>Heilung durch Ursachenarbeit</h3>
        <p>
          Indem wir die energetischen Ursachen von Staus und Disharmonien betrachten (anstatt nur das Symptom im physischen Körper zu behandeln), können wir heilsame Veränderungen anstoßen. Wir lernen, bewusste Schwingungen der Liebe, Vergebung und Klarheit auszusenden, um ein harmonisches Lebensumfeld für uns und unsere Tiere zu erschaffen.
        </p>
      `
    },
    "podcast-placebo": {
      title: "Podcast: Echte Heilenergie oder Placebo?",
      html: `
        <audio class="podcast-player" controls preload="metadata" style="width: 100%; margin-bottom: 1.5rem; border-radius: 0.9rem; filter: drop-shadow(0 8px 14px rgba(21, 75, 65, 0.08));">
          <source src="Placebo vs. Pranaheilung.mp3" type="audio/mpeg">
          Dein Browser unterstützt die Audiowiedergabe nicht.
        </audio>
        <p><strong>Ein verantwortungsvoller und offener Dialog.</strong></p>
        <p>
          In dieser Folge gehen wir einer der häufigsten Fragen auf den Grund: Ist die Wirkung von Pranaheilung und Tierkommunikation nur auf den Placeboeffekt zurückzuführen?
        </p>
        <p>
          Wir beleuchten dieses Thema differenziert:
        </p>
        <ul>
          <li><strong>Der Placeboeffekt</strong> ist keine Täuschung, sondern die beeindruckende Fähigkeit unseres eigenen Geistes, biologische Selbstheilungsprozesse über Glauben und Erwartung zu aktivieren. Dies ist ein wertvoller Verbündeter in jeder Begleitung.</li>
          <li><strong>Echte feinstoffliche Energie</strong> hingegen lässt sich unabhängig vom bewussten Glauben beobachten – beispielsweise bei der Behandlung von sehr kleinen Kindern oder Tieren, die keinen rationalen Glauben an die Methode besitzen und dennoch positiv auf die energetische Reinigung und Energetisierung reagieren.</li>
        </ul>
        <p>
          Wir laden dich ein, energetische Begleitung frei von Vorurteilen selbst auszuprobieren und zu spüren, wie die Lebensenergie ins Fließen kommt.
        </p>
      `
    },
    "topic-prana": {
      title: "Themenschwerpunkt: Pranaheilung",
      html: `
        <div class="category-article-list">
          <div class="category-article-item">
            <div class="category-article-info">
              <strong>Was ist Pranaheilung?</strong>
              <p>Grundlagen der feinstofflichen Energiearbeit und die Wirkungsweise der Selbstheilung.</p>
            </div>
            <button class="button button--secondary" type="button" data-blog-open="was-ist-prana">Lesen →</button>
          </div>
          <div class="category-article-item">
            <div class="category-article-info">
              <strong>Pranaheilung vs. Schulmedizin</strong>
              <p>Ein respektvoller, transparenter Umgang mit den Möglichkeiten und Grenzen beider Richtungen.</p>
            </div>
            <button class="button button--secondary" type="button" data-blog-open="podcast">Lesen →</button>
          </div>
        </div>
      `
    },
    "topic-tier": {
      title: "Themenschwerpunkt: Tierkommunikation",
      html: `
        <div class="category-article-list">
          <div class="category-article-item">
            <div class="category-article-info">
              <strong>Tierkommunikation einfach erklärt</strong>
              <p>Erfahre, wie Tiere über Gefühle und innere Bilder kommunizieren.</p>
            </div>
            <button class="button button--secondary" type="button" data-blog-open="tierkommunikation-erklaert">Lesen →</button>
          </div>
          <div class="category-article-item">
            <div class="category-article-info">
              <strong>Erdungsübungen für Mensch und Tier</strong>
              <p>Praktische Erdungsmethoden, um gemeinsam mit deinem Tier Ruhe zu finden.</p>
            </div>
            <button class="button button--secondary" type="button" data-blog-open="erdung">Lesen →</button>
          </div>
        </div>
      `
    },
    "topic-glaube": {
      title: "Themenschwerpunkt: Glaube & Vertrauen",
      html: `
        <div class="category-article-list">
          <div class="category-article-item">
            <div class="category-article-info">
              <strong>Liebe als Weg des Lebens</strong>
              <p>Wie wir Ängste liebevoll annehmen und in tiefes Vertrauen transformieren können.</p>
            </div>
            <button class="button button--secondary" type="button" data-blog-open="liebe-lebensweg">Lesen →</button>
          </div>
          <div class="category-article-item">
            <div class="category-article-info">
              <strong>Dankbarkeit als heilsame Frequenz</strong>
              <p>Wie Dankbarkeit als stärkste Kraft im Universum selbst in tiefster Dunkelheit Licht spendet.</p>
            </div>
            <button class="button button--secondary" type="button" data-blog-open="dankbarkeit">Lesen →</button>
          </div>
        </div>
      `
    },
    "topic-natur": {
      title: "Themenschwerpunkt: Natur & Rhythmen",
      html: `
        <div class="category-article-list">
          <div class="category-article-item">
            <div class="category-article-info">
              <strong>Die Stille des Waldes</strong>
              <p>Eine Einladung zum Innehalten, Krafttanken und Wahrnehmen in der Natur.</p>
            </div>
            <button class="button button--secondary" type="button" data-blog-open="waldesstille">Lesen →</button>
          </div>
          <div class="category-article-item">
            <div class="category-article-info">
              <strong>Auf der Suche nach der goldenen Mitte</strong>
              <p>Zwischen allopathischen Medikamenten und Phytotherapie: Die Balance finden.</p>
            </div>
            <button class="button button--secondary" type="button" data-blog-open="goldene-mitte">Lesen →</button>
          </div>
        </div>
      `
    },
    "topic-meditation": {
      title: "Themenschwerpunkt: Meditation & Stille",
      html: `
        <div class="category-article-list">
          <div class="category-article-item">
            <div class="category-article-info">
              <strong>5 Minuten Atemstille</strong>
              <p>Eine geführte Atemübung zur schnellen Beruhigung und Zentrierung im Alltag.</p>
            </div>
            <button class="button button--secondary" type="button" data-blog-open="atemuebung">Lesen →</button>
          </div>
          <div class="category-article-item">
            <div class="category-article-info">
              <strong>Die Geschichte der Lotusblüte</strong>
              <p>Eine Erzählung über Wachstum, Transformation und innere Erleuchtung.</p>
            </div>
            <button class="button button--secondary" type="button" data-blog-open="lotus">Lesen →</button>
          </div>
        </div>
      `
    },
    "tagesimpuls-herzsprache": {
      title: "Die Sprache des Herzens",
      html: `
        <p><strong>Wie Frequenzen die Verbindung zu unseren Tieren prägen.</strong></p>
        <p>
          Tiere kommunizieren selten über den Verstand oder gesprochene Worte. Ihre Welt ist die der Schwingungen, Gefühle und Bilder. Sie spüren unsere innere Verfassung, bevor wir uns ihrer selbst bewusst sind. Wenn wir gehetzt sind, kreisen unsere Gedanken im Kopf, und unser Herz-Chakra zieht sich zusammen. Tiere nehmen dies als energetische Unruhe wahr.
        </p>
        <p>
          Wenn wir uns jedoch bewusst auf Dankbarkeit ausrichten, weitet sich unser Energiefeld. Das Herz beginnt in einer harmonischen, ruhigen Frequenz zu schwingen (Herz-Kohärenz). Diese Energie breitet sich im Raum aus und signalisiert deinem Tier: <em>„Hier bist du sicher. Hier darfst du entspannen.“</em>
        </p>
        <h3>Dankbarkeit als Brücke</h3>
        <p>
          Nutze diese Erkenntnis heute in eurer Kommunikation. Richte deine Aufmerksamkeit beim Zusammentreffen ganz bewusst auf das Gefühl der Dankbarkeit für seine treue Begleitung. Du wirst sehen, dass dein Tier dieses Signal empfängt – oft durch ein tiefes Aufseufzen, Entspannung der Muskeln oder die Suche nach deiner Nähe.
        </p>
      `
    },
    "zitat-lehrer": {
      title: "Tiere als Lehrmeister des Moments",
      html: `
        <p><strong>Die lautlose Weisheit im Hier und Jetzt.</strong></p>
        <p>
          Das Zitat des Tages erinnert uns daran, dass Tiere uns einen der wertvollsten Zustände vorleben: die bedingungslose Präsenz im gegenwärtigen Moment.
        </p>
        <p>
          Ein Hund berechnet nicht den Nutzen seines Wedelns, und eine Katze grübelt nicht über den gestrigen Tag nach. Sie empfinden reine, unverfälschte Freude für das, was genau in dieser Sekunde ist – sei es ein Sonnenstrahl auf dem Boden, ein Spaziergang im Regen oder deine bloße Nähe.
        </p>
        <h3>Das Positive wecken</h3>
        <p>
          Wir Menschen verbringen viel Zeit in der Vergangenheit oder planen die Zukunft. Dabei übersehen wir die Geschenke des Augenblicks. Nimm dir heute ein Beispiel an deinem Tier: Halte inne, atme durch und spüre die Dankbarkeit für das einfache Dasein.
        </p>
      `
    },
    "meditation-herzbruecke": {
      title: "Die goldene Herzbrücke",
      html: `
        <p><strong>Eine 3-Minuten-Visualisierung zur energetischen Kohärenz.</strong></p>
        <p>
          Diese einfache Übung hilft dir, dein Herzfeld mit dem deines Tieres zu harmonisieren.
        </p>
        <h3>Anleitung:</h3>
        <ol>
          <li>Finde einen ruhigen Sitzplatz. Wenn dein Tier mag, darf es sich gerne neben dich legen, ansonsten funktioniert die Übung auch über Distanz.</li>
          <li>Schließe deine Augen und atme dreimal tief und entspannt durch die Nase ein und durch den Mund aus.</li>
          <li>Richte deine Aufmerksamkeit in deine Brustmitte. Stelle dir dort ein warmes, weiches, goldenes Licht vor.</li>
          <li>Lass dieses Licht mit jedem Atemzug heller und strahlender werden, aufgeladen mit deiner tiefen Dankbarkeit für dein Tier.</li>
          <li>Visualisiere nun ein goldenes Band des Lichts, das sanft aus deinem Herzen fließt und sich mit dem Herzen deines Tieres verbindet.</li>
          <li>Verweile für zwei Minuten in diesem Gefühl des reinen Austauschs von Frieden und Verbundenheit.</li>
        </ol>
      `
    },
    "gedanke-schnurren": {
      title: "Persönlicher Gedanke: Kleine Alltags-Wunder",
      html: `
        <p><strong>Die heilende Kraft der kleinen Gesten.</strong></p>
        <p>
          Gestern Abend saß ich nach einem anstrengenden Tag auf dem Sofa. Meine Gedanken kreisten, ich war erschöpft. In diesem Moment kam unsere Katze, stieg mir ohne Zögern auf die Brust und fing an, tief und gleichmäßig zu schnurren.
        </p>
        <p>
          Es war, als ob sie sagen wollte: <em>„Lass das Denken los. Sei einfach hier.“</em> Innerhalb weniger Minuten verlangsamte sich mein Puls, mein Atem wurde ruhiger, und die kreisenden Sorgen verloren ihr Gewicht.
        </p>
        <h3>Das Wunder der Einfachheit</h3>
        <p>
          Wir suchen oft nach den großen Antworten und heilsamen Lösungen im Außen. Dabei tragen unsere tierischen Begleiter die Medizin bereits in sich. Das leise Schnurren auf der Brust, das sanfte Auflegen des Kopfes auf dein Knie – das ist gelebte, reine Dankbarkeit, die uns erdet.
        </p>
        <p>
          Achte heute auf diese kleinen Augenblicke. Sie sind das Fundament unserer energetischen Gesundheit.
        </p>
      `
    }
  };

  let activeId = "home";
  let transitionToken = 0;

  function closeMenu({ restoreFocus = false } = {}) {
    if (!menu || !menuToggle) return;
    menu.classList.remove("is-open");
    document.body.classList.remove("menu-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Menü öffnen");
    if (restoreFocus) menuToggle.focus();
  }

  function toggleMenu() {
    if (!menu || !menuToggle) return;
    const willOpen = !menu.classList.contains("is-open");
    menu.classList.toggle("is-open", willOpen);
    document.body.classList.toggle("menu-open", willOpen);
    menuToggle.setAttribute("aria-expanded", String(willOpen));
    menuToggle.setAttribute("aria-label", willOpen ? "Menü schließen" : "Menü öffnen");
  }

  function updateNavigation(id) {
    navLinks.forEach((link) => {
      const isActive = link.dataset.section === id;
      link.classList.toggle("is-active", isActive);
      if (isActive) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  function showSection(id, options = {}) {
    const target = document.getElementById(id);
    if (!target || !sectionTitles[id]) {
      closeMenu();
      return false;
    }

    views.forEach((view) => {
      const isTarget = view === target;
      view.hidden = !isTarget;
      view.classList.toggle("is-active", isTarget);
      view.classList.remove("is-leaving");
      view.setAttribute("aria-hidden", String(!isTarget));
      if ("inert" in view) view.inert = !isTarget;
    });

    activeId = id;
    updateNavigation(id);
    closeMenu();
    document.title = sectionTitles[id];

    if (options.updateHash !== false) {
      const nextHash = `#${id}`;
      if (location.hash !== nextHash) {
        history.pushState({ section: id }, "", nextHash);
      }
    }

    if (options.focus !== false && main) {
      try {
        main.focus({ preventScroll: true });
      } catch {
        main.focus();
      }
    }

    window.scrollTo({
      top: 0,
      behavior: reducedMotion.matches ? "auto" : "smooth"
    });

    return true;
  }

  function openLegal(key) {
    const page = legalPages[key];
    if (!page) return;
    legalTitle.textContent = page.title;
    legalContent.innerHTML = page.html;
    legalDialog.showModal();
    dialogClose.focus();
  }

  function validateField(field) {
    const wrapper = field.closest(".field");
    if (!wrapper) return field.checkValidity();
    const valid = field.checkValidity();
    wrapper.classList.toggle("is-invalid", !valid);
    field.setAttribute("aria-invalid", String(!valid));
    return valid;
  }

  function prepareMail(event) {
    event.preventDefault();

    const controls = [...form.querySelectorAll("input:not([type='checkbox']), select, textarea")];
    const controlsValid = controls.every(validateField);
    const privacy = form.elements.privacy;

    if (!controlsValid || !privacy.checked) {
      formStatus.textContent = "Bitte prüfe die markierten Felder und bestätige den Datenschutz.";
      formStatus.style.color = "#8b2525";
      if (!privacy.checked) privacy.focus();
      else form.querySelector("[aria-invalid='true']")?.focus();
      return;
    }

    const data = new FormData(form);
    const subject = encodeURIComponent(`Anfrage: ${data.get("topic")}`);
    const body = encodeURIComponent(
      `Hallo Kevin und Chris,\n\n${data.get("message")}\n\nViele Grüße\n${data.get("name")}\nE-Mail: ${data.get("email")}`
    );

    formStatus.textContent = "Dein E-Mail-Programm wird geöffnet.";
    formStatus.style.color = "#185b4c";
    window.location.href = `mailto:kmzentral@gmail.com?subject=${subject}&body=${body}`;
  }

  function openDialog(dialog, closeButton) {
    if (!dialog) return;

    if (typeof dialog.showModal === "function") {
      if (!dialog.open) dialog.showModal();
    } else {
      dialog.setAttribute("open", "");
      dialog.classList.add("dialog-fallback-open");
      document.body.classList.add("dialog-open");
    }

    window.setTimeout(() => closeButton?.focus(), 0);
  }

  function closeDialog(dialog) {
    if (!dialog) return;

    if (typeof dialog.close === "function" && dialog.open) {
      dialog.close();
    } else {
      dialog.removeAttribute("open");
      dialog.classList.remove("dialog-fallback-open");
      document.body.classList.remove("dialog-open");
    }
  }

  document.addEventListener("click", (event) => {
    const targetElement = event.target instanceof Element ? event.target : null;
    if (!targetElement) return;

    const sectionControl = targetElement.closest("[data-section], [data-section-link], [data-nav-target]");
    if (sectionControl) {
      const id =
        sectionControl.dataset.section ||
        sectionControl.dataset.sectionLink ||
        sectionControl.dataset.navTarget;

      if (id && sectionTitles[id]) {
        event.preventDefault();
        showSection(id);
        return;
      }
    }

    const legalControl = targetElement.closest("[data-legal]");
    if (legalControl) {
      event.preventDefault();
      const page = legalPages[legalControl.dataset.legal];
      if (page && legalDialog && legalTitle && legalContent) {
        legalTitle.textContent = page.title;
        legalContent.innerHTML = page.html;
        openDialog(legalDialog, dialogClose);
      }
      return;
    }

    const blogControl = targetElement.closest("[data-blog-open]");
    if (blogControl) {
      event.preventDefault();
      const post = blogPosts[blogControl.dataset.blogOpen];
      if (post && blogDialog && blogDialogTitle && blogDialogContent) {
        blogDialogTitle.textContent = post.title;
        blogDialogContent.innerHTML = post.html;
        openDialog(blogDialog, blogDialogClose);
      }
      return;
    }

    if (event.target === legalDialog) closeDialog(legalDialog);
    if (event.target === blogDialog) closeDialog(blogDialog);

    if (
      menu &&
      menuToggle &&
      menu.classList.contains("is-open") &&
      !menu.contains(targetElement) &&
      !menuToggle.contains(targetElement)
    ) {
      closeMenu();
    }
  });

  menuToggle?.addEventListener("click", (event) => {
    event.stopPropagation();
    toggleMenu();
  });

  dialogClose?.addEventListener("click", () => closeDialog(legalDialog));
  blogDialogClose?.addEventListener("click", () => closeDialog(blogDialog));

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;

    if (menu?.classList.contains("is-open")) {
      closeMenu({ restoreFocus: true });
      return;
    }

    if (legalDialog?.open || legalDialog?.hasAttribute("open")) {
      closeDialog(legalDialog);
      return;
    }

    if (blogDialog?.open || blogDialog?.hasAttribute("open")) {
      closeDialog(blogDialog);
    }
  });

  form?.addEventListener("submit", prepareMail);
  form?.querySelectorAll("input, select, textarea").forEach((control) => {
    control.addEventListener("blur", () => validateField(control));
    control.addEventListener("input", () => {
      if (control.closest(".field")?.classList.contains("is-invalid")) {
        validateField(control);
      }
    });
  });

  // Newsletter Form handler
  const newsletterForm = document.getElementById("newsletter-blog-form");
  newsletterForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    const nameInput = newsletterForm.querySelector("#newsletter-name");
    const emailInput = newsletterForm.querySelector("#newsletter-email");
    const privacyCheck = document.getElementById("newsletter-blog-check");

    if (!nameInput || !emailInput || !privacyCheck || !privacyCheck.checked) {
      return;
    }

    const name = encodeURIComponent(nameInput.value);
    const email = encodeURIComponent(emailInput.value);
    const subject = encodeURIComponent("Newsletter-Anmeldung pranapaw");
    const body = encodeURIComponent(
      `Hallo,\n\nich möchte mich gerne für den pranapaw Newsletter anmelden.\n\nName: ${nameInput.value}\nE-Mail: ${emailInput.value}\n\nBitte füge mich dem Verteiler hinzu.`
    );

    window.location.href = `mailto:kmzentral@gmail.com?subject=${subject}&body=${body}`;
    
    alert("Vielen Dank! Dein E-Mail-Programm wird geöffnet, um die Anmeldung zu senden.");
    newsletterForm.reset();
  });

  document.querySelectorAll(".info-panel__trigger").forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const panel = trigger.closest(".info-panel");
      const content = panel?.querySelector(".info-panel__content");
      if (!panel || !content) return;

      const willOpen = !panel.classList.contains("is-open");

      document.querySelectorAll(".info-panel").forEach((item) => {
        const itemTrigger = item.querySelector(".info-panel__trigger");
        const itemContent = item.querySelector(".info-panel__content");
        item.classList.remove("is-open");
        itemTrigger?.setAttribute("aria-expanded", "false");
        if (itemContent) itemContent.hidden = true;
      });

      if (willOpen) {
        panel.classList.add("is-open");
        trigger.setAttribute("aria-expanded", "true");
        content.hidden = false;
      }
    });
  });

  // 1. Tab-Umschaltung (Impuls des Tages)
  document.querySelectorAll(".tab-trigger").forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const parent = trigger.closest("section");
      if (!parent) return;

      // Deactivate all triggers in this section
      parent.querySelectorAll(".tab-trigger").forEach((btn) => {
        btn.classList.remove("is-active");
        btn.setAttribute("aria-selected", "false");
      });

      // Activate clicked trigger
      trigger.classList.add("is-active");
      trigger.setAttribute("aria-selected", "true");

      // Hide all panels
      const targetId = trigger.getAttribute("aria-controls");
      parent.querySelectorAll(".tab-panel").forEach((panel) => {
        panel.hidden = true;
        panel.classList.remove("is-active");
      });

      // Show target panel
      const targetPanel = document.getElementById(targetId);
      if (targetPanel) {
        targetPanel.hidden = false;
        targetPanel.classList.add("is-active");
      }
    });
  });

  // 2. Meditationsbibliothek-Player
  const playerBar = document.querySelector(".meditation-player-bar");
  const playerBarAudio = playerBar?.querySelector(".player-bar__audio");
  const playerBarTitle = playerBar?.querySelector(".player-bar__title");
  
  if (playerBar && playerBarAudio) {
    document.querySelectorAll(".meditation-play-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const audioSrc = btn.getAttribute("data-audio-src");
        const itemTitle = btn.closest(".meditation-item")?.querySelector("strong")?.textContent || "Meditation";

        if (!audioSrc) return;

        // Check if this audio is already loaded
        const isCurrent = playerBarAudio.getAttribute("src") === audioSrc;

        if (isCurrent) {
          if (playerBarAudio.paused) {
            playerBarAudio.play();
          } else {
            playerBarAudio.pause();
          }
        } else {
          // Play new audio
          playerBarAudio.src = audioSrc;
          playerBarTitle.textContent = `Wiedergabe: ${itemTitle}`;
          playerBar.style.display = "flex";
          playerBarAudio.play();
        }
      });
    });

    // Sync button states on audio events
    const updatePlayStates = () => {
      document.querySelectorAll(".meditation-play-btn").forEach((btn) => {
        const audioSrc = btn.getAttribute("data-audio-src");
        const isCurrent = playerBarAudio.getAttribute("src") === audioSrc;
        const isPlaying = isCurrent && !playerBarAudio.paused;

        btn.classList.toggle("is-playing", isPlaying);
        const playIcon = btn.querySelector(".play-icon");
        const pauseIcon = btn.querySelector(".pause-icon");
        
        if (playIcon && pauseIcon) {
          playIcon.style.display = isPlaying ? "none" : "block";
          pauseIcon.style.display = isPlaying ? "block" : "none";
        }
        
        // Find last child which holds text
        const textNode = btn.childNodes[btn.childNodes.length - 1];
        if (textNode) {
          textNode.textContent = isPlaying ? " Pause" : " Anhören";
        }
      });
    };

    playerBarAudio.addEventListener("play", updatePlayStates);
    playerBarAudio.addEventListener("pause", updatePlayStates);
    playerBarAudio.addEventListener("ended", () => {
      updatePlayStates();
      playerBar.style.display = "none";
    });
  }

  window.addEventListener("hashchange", () => {
    const id = location.hash.slice(1);
    if (sectionTitles[id] && id !== activeId) {
      showSection(id, { updateHash: false, focus: false });
    }
  });

  window.addEventListener("popstate", () => {
    const id = location.hash.slice(1) || "home";
    if (sectionTitles[id]) {
      showSection(id, { updateHash: false, focus: false });
    }
  });

  if (year) {
    year.textContent = String(new Date().getFullYear());
  }

  const initialId = location.hash.slice(1);
  const startupId = sectionTitles[initialId] ? initialId : "home";
  showSection(startupId, { updateHash: false, focus: false });

  if (!location.hash || !sectionTitles[initialId]) {
    history.replaceState({ section: "home" }, "", "#home");
  }

})();
