# Prana Landingpage

Responsive Onepage-Landingpage mit:
- animierten Inhaltsbereichen
- Glassmorphism-Design
- Hamburger-Menü
- barrierearmen Bedienelementen
- Kontaktformular mit lokaler `mailto:`-Übergabe
- SEO- und Social-Meta-Tags
- Dialogen für AGB, Datenschutz und Impressum
- Unterstützung für `prefers-reduced-motion`

## Verwendung

1. Den Ordner auf einen Webserver oder zu Netlify hochladen.
2. Kontaktdaten (WhatsApp, E-Mail, Anschrift) in `index.html` und `script.js` bei Bedarf auf den finalen Stand bringen.
3. Rechtstexte und Pflichtangaben fachlich prüfen und vervollständigen.

Die Dateien müssen gemeinsam im selben Ordner liegen.

## Blogbereich

Enthält einen MP3-Podcast, Tagesimpulse, ausführliche Dialogbeiträge und Social-Media-Verknüpfungen.

## Deployment mit GitHub Pages

Dieses Projekt ist statisch und kann direkt über GitHub Pages deployed werden.

1. Repository zu GitHub pushen.
2. In GitHub: **Settings -> Pages** öffnen.
3. Unter **Build and deployment** als **Source** den Punkt **GitHub Actions** wählen.
4. Die Workflow-Datei `.github/workflows/deploy-pages.yml` ist bereits vorbereitet.
5. Nach dem nächsten Push auf den Branch `main` startet das Deployment automatisch.

Die Seite ist danach erreichbar unter:

- `https://<dein-github-name>.github.io/<repo-name>/`

Hinweis: Änderungen an `index.html`, `styles.css`, `script.js` und Assets werden nach jedem Push automatisch veröffentlicht.

### Troubleshooting GitHub Pages

Wenn der Workflow im Schritt **Setup Pages** mit einer Meldung wie `Get Pages site failed` oder `HttpError: Not Found` fehlschlägt:

1. In GitHub: **Settings -> Pages** öffnen.
2. Unter **Build and deployment** bei **Source** auf **GitHub Actions** stellen.
3. Den fehlgeschlagenen Workflow-Run in **Actions** mit **Re-run jobs** erneut starten.
