# pranapaw.net – Final V2.0

Produktionsfertige, framework-freie Onepage-App mit Glassmorphism, barrierearmem Hash-Routing,
Blog/Podcast-Archiv, Manifest, Web3Forms-Kontaktformular und mobilem WhatsApp-CTA.

## Deployment

Den vollständigen Ordner unverändert auf Netlify oder einen statischen Webserver hochladen.
`index.html`, `styles.css`, `script.js`, Bilder und MP3-Dateien müssen im selben Verzeichnis liegen.

## Vor Livegang prüfen

- Web3Forms-Zielkonto und Access-Key bestätigen.
- Impressum, Datenschutz und AGB anwaltlich bzw. fachlich prüfen.
- Newsletter-Prozess und Einwilligungsnachweis an den tatsächlich verwendeten Dienst anbinden.
- Nach dem Deployment Lighthouse, Tastaturbedienung und Formularversand auf der Live-Domain testen.

## Performance

Die sichtbaren Bilder liegen zusätzlich als WebP vor. Das Hero-Bild wird vorab geladen.
Audio wird nur als Metadaten geladen; Animationen respektieren `prefers-reduced-motion`.
