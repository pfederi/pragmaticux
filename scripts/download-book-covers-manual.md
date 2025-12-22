# Anleitung: Buchcover-Bilder manuell herunterladen

Da Amazon direkte Downloads blockiert, müssen die Bilder manuell heruntergeladen werden.

## Methode 1: Direkt von Amazon

1. Öffne die Amazon-Produktseite (URLs sind in `data/books.json`)
2. Rechtsklick auf das Buchcover-Bild
3. "Bild speichern unter..." wählen
4. Speichere im Ordner `public/images/books/` mit dem richtigen Dateinamen

## Methode 2: Mit Browser-Erweiterung

1. Installiere eine Browser-Erweiterung wie "Image Downloader"
2. Öffne alle Amazon-Produktseiten
3. Lade alle Cover-Bilder herunter
4. Benenne sie entsprechend um

## Dateinamen-Mapping

- `dont-make-me-think.jpg` - Don't Make Me Think
- `design-of-everyday-things.jpg` - The Design of Everyday Things
- `about-face.jpg` - About Face
- `lean-ux.jpg` - Lean UX
- `elements-of-user-experience.jpg` - The Elements of User Experience
- `hooked.jpg` - Hooked
- `measuring-user-experience.jpg` - Measuring the User Experience
- `sprint.jpg` - Sprint
- `user-experience-team-of-one.jpg` - The User Experience Team of One
- `universal-principles-of-design.jpg` - Universal Principles of Design

## Alternative: Open Library API

Du kannst auch die Open Library API verwenden, um Cover-Bilder zu bekommen:
- API: `https://covers.openlibrary.org/b/isbn/[ISBN]-L.jpg`
- Benötigt die ISBN-Nummern der Bücher

