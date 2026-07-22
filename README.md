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
2. In `index.html` die WhatsApp-Beispielnummer `491234567890` ersetzen.
3. In `script.js` die Beispieladresse `kontakt@beispiel.de` ersetzen.
4. Rechtstexte und Pflichtangaben fachlich prüfen und vervollständigen.

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
