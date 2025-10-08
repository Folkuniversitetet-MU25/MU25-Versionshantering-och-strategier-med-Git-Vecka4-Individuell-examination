# Individuell examination – Git & Agilt (solo) · **Välj 1 av 3 case**

**Mål:** Visa ett helt Git-flöde (branches → PR → review → merge), lös minst 1 konflikt och skriv en kort reflektion om agilt (user stories, AC, DoD, förbättringar).

---

> Starta här: Klicka **Use this template** → skapa **privat** repo → bjud in läraren (Collaborator).
> Var finns knappen? På mall-repots startsida, ovanför fil-listan (nära “Code”).
Skillnad mot Fork? Template skapar nytt repo utan historik (bättre för uppgifter). Fork kopierar även historik och kopplar till originalet (inte önskat här).

## Välj case (1 av 3)

1) **Todo Lite** *(default, starter-koden funkar direkt)*  
   Lista uppgifter, markera klara, ta bort, lägg till. (Välj denna om du siktar på G)  
2) **Bookmarks Mini**  
   Spara bokmärken (titel + URL), visa lista, öppna i ny flik, ta bort.  
3) **Pomodoro Timer**  
   25/5-minuters timer med start/paus/återställ och räkning av pass.

> Om du väljer 2 eller 3 (VG krav): uppdatera **“Valt case”** nedan + skapa egna filer/kod (du kan börja från `starter/` eller skriva nytt).

---

## Valt case (fyll i)
**Jag bygger:** Todo Lite / Bookmarks Mini / Pomodoro Timer

### User stories + AC (exempel för _Todo Lite_)
- **US1**: Som användare vill jag kunna **lägga till** en todo så att jag kan planera.  
  **AC:**  
  - [ ] Input + knapp *Lägg till* finns  
  - [ ] Ny todo visas överst i listan
- **US2**: Som användare vill jag kunna **markera klar**/oklar.  
  **AC:**  
  - [ ] Klick/toggle ändrar status  
  - [ ] Klar item får visuell indikator
- **US3**: Som användare vill jag kunna **ta bort** en todo.  
  **AC:**  
  - [ ] En delete-ikon/knapp finns  
  - [ ] Raden försvinner direkt
- **US4 (valfri för VG)**: **Filtrera** (Alla/Aktiva/Klara) eller **Spara i localStorage**.  
  **AC:**  
  - [ ] Filterknappar uppdaterar listan **eller** data finns kvar efter omladdning

> Väljer du **Bookmarks Mini** eller **Pomodoro Timer**, skapa motsvarande 3–4 stories med tydliga AC (checkboxar).

---

## Krav (G)
- README (syfte, hur man kör) + .gitignore.
- 3 features → 3 PR → review → merge till `main`.
- Minst 1 avsiktlig **mergekonflikt**, löst och dokumenterad i PR-kommentar.
- **PR-policy:** rubrik `type(scope): syfte`, kort **varför/hur**, länk till issue/kort, **minst 1 review**.
- **Historik i main:** varje feature landar som **1 commit** (Squash-merge rekommenderas).
- Fyll i `reflection.md` (1–2 sidor): 1) Minst 1 egen user story + **AC** + kort **INVEST**-motivering, 2) sprintmål + **DoD**, 3) **Start/Stop/Continue** (minst 1 förbättring).
- **Reviews:**: minst 1 mottagen på dina PR + 1 given till klasskamrat (länkar i README under “Mina reviews”).

## Krav (VG) – utöver G
- 6 features via 6 PR (små, fokuserade).
- Minst 2 reviews givna (länkar i README).
- PR-kvalitet: alla PR ≈ ≤ 250 rader diff + tydlig varför/hur (+ ev. bild/GIF).
- Historik: varje feature 1 commit i main (squash eller rebase -i); inga brus-commits i main.
- Reflektionen: minst 2 förbättringar med hänvisning till specifika PR/commits.
- Du har valt Case: **Bookmarks Mini** eller **Pomodoro Timer**, så du behöver skapa minst motsvarande 3–4 stories med tydliga AC (checkboxar).

---

## Struktur i Starter Template:
├── README.md
├── reflection.md
├── .gitignore
├── .github/
│   ├── pull_request_template.md
│   └── ISSUE_TEMPLATE/
│       └── feature_request.md
└── starter/
    ├── index.html
    ├── style.css
    └── app.js


## Kör lokalt
Öppna `starter/index.html` i webbläsaren (eller starta enkel live-server i VS Code).

---

## Tips
- Imperativ i commits: add, fix, update.
- Hellre 4 små PR än 1 stor.
- Referera issue i PR: Closes #<nr>.
- Små, fokuserade PR (≈ ≤ 250 rader diff).
- Vid **Squash & merge** blir PR-titel och beskrivning commit-meddelandet → skriv dem tydligt.
- **Före push:** `--amend`/`rebase -i` OK för städ. **Efter push:** använd **`git revert`** (ändra inte publicerad historik).

---

## Snabbkontroller
- `git log --oneline` på `main` visar 3 (G) / 6 (VG) feature-commits.
- PR:er har tydliga titlar och varför/hur + länk till issue/kort.
- Minst 1 PR innehåller en konflikt som du löser och dokumenterar i PR-kommentaren.
- README komplett + reflection.md ifylld.
- Reviews: 1+ mottagen och 1 (G) / 2 (VG) given (länkar i README).
