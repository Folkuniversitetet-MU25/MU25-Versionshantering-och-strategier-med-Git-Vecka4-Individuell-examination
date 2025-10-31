# Individuell examination – Git & Agilt (solo) · **Välj 1 av 3 case**

**Mål:** Visa ett helt Git-flöde (branches → PR → review → merge), lös minst 1 konflikt och skriv en kort reflektion om agilt (user stories, AC, DoD, förbättringar).

> Starta här: Klicka **Use this template** → skapa **privat** repo → bjud in läraren (Collaborator).
> Var finns knappen? På mall-repots startsida, ovanför fil-listan (nära “Code”).
> Skillnad mot Fork? Template skapar nytt repo utan historik (bättre för uppgifter). Fork kopierar även historik och kopplar till originalet (inte önskat här).

---

## Start här (checklista)
- [ ] **Välj 1 av 3 case** och skapa **Trello-bräda** *(obligatoriskt)*.
- [ ] Lägg in **user stories** med **Acceptance Criteria (AC)** (checkboxar) + kort **INVEST**-motivering.
- [ ] Jobba **en feature per branch** → **PR med mall** → **minst 1 review** → **squash-merge**.
- [ ] Skapa & lös **1 mergekonflikt**, **dokumentera i PR** (vad/hur/varför).
- [ ] Skriv **reflection.md** enligt mallen.
- [ ] Länka **Trello** och **mina reviews** i **README**.

> **Trello vs Issues**  
> **Trello är obligatoriskt** i denna examination. GitHub Issues är **valfritt** som komplement (t.ex. “Closes #123”).  
> I Trello: klistra in **PR-URL** i kortet (eller använd **GitHub Power-Up** för statusbadges).

---

## (Frivilligt, rekommenderas) Branch protection
**Settings → Branches → Add rule**  
**Branch name pattern:** `main`  
Kryssa i:
- **Require a pull request before merging** (minst **1 reviewer**)
- *(Valfritt)* **Blockera direkt-pushar** till `main`

Spara. Klart!

---

## Välj case (1 av 3)

1) **Todo Lite** *(default, starter-koden funkar direkt)*  
   Lista uppgifter, markera klara/oklara, ta bort, lägg till. *(Bra om du siktar på G.)*  
   
2) **Bookmarks Mini**  
   Spara bokmärken (titel + URL), visa lista, öppna i ny flik, ta bort.
   
3) **Pomodoro Timer**  
   25/5-minuters timer med start/paus/återställ och räkning av pass.

> Väljer du **Bookmarks Mini** eller **Pomodoro Timer** (VG krav): uppdatera “Valt case”, skapa egna filer/kod (du kan börja från `starter/` eller skriva nytt).

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

## PR-policy (kort)
- **Små, fokuserade PR** (≈ ≤ 250 rader diff).
- **Rubrik:** `type(scope): kort syfte`  *(ex: `feat(list): add age column`)*  
- **Beskrivning:** **varför** + **hur** + ev. bild/GIF.
- **Länka** Trello-kort/issue.
- **Minst 1 review** krävs innan merge (för minst 1 PR, behöver inte reviews på alla PR).
- **Merge:** **Squash & merge** (PR-titel + beskrivning blir commit-meddelande → skriv tydligt).

---

## Skapa en liten konflikt (exempel)
1. Branch A: ändra **samma rad** i `README.md` (t.ex. lägg till en mening) → commit + push → öppna PR.  
2. Branch B: från `main`, ändra **samma rad** på annat sätt → commit + push → öppna PR.  
3. Mergas den ena först → den andra **får konflikt**.  
4. **Lös konflikten** lokalt eller i GitHub UI, **beskriv hur** i PR-kommentaren.

---

## Krav (G)
- README (syfte, hur man kör) + .gitignore.
- 3 features → 3 PR → (minst 1 review på 1 PR, behöver inte 1 review på alla PR) → merge till `main`.
- Minst 1 avsiktlig **mergekonflikt**, löst och dokumenterad i PR-kommentar.
- **PR-policy följd** (rubrik, varför/hur, liten diff, länk, 1 review).
- **Historik i main:** varje feature landar som **1 commit** *(Squash-merge rekommenderas)*.
- **reflection.md** (1–2 sidor):  
  1) Minst 1 **Egen** user story + **AC** + kort **INVEST**-motivering  
  2) **Sprintmål** + **DoD**  
  3) **Start/Stop/Continue** (minst 1 förbättring)
- **Reviews:** minst **1 mottagen** på EN minst en av dina PR + **1 given** till en klasskamrats PR  
  *(länkar i README under “Mina reviews”)*.

## Krav (VG) – utöver G
- 6 features via 6 PR (små, fokuserade).
- Minst 2 reviews givna (länkar i README). Och minst 2 förbättringar med hänvisning till specifika PR/commits.
- PR-kvalitet: alla PR ≈ ≤ 250 rader diff + tydlig varför/hur (+ ev. bild/GIF).
- Historik: varje feature 1 commit i main (squash eller rebase -i); inga brus-commits i main.
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

---

## Kör lokalt
Öppna `starter/index.html` i webbläsaren (eller starta enkel live-server i VS Code).

---

## Länkar (fyll i)
- **Trello-bräda:** <länk>  
- **Mina reviews:**  
  - Given: <PR-länk>  
  - Mottagen: <PR-länk>  
  - *(VG: lägg till en till given)*
 
## Dela dom/bjud in till läraren: Mail: mandus85@hotmail.com, Github nickname: DutenLobarn

---

## Tips
- Skriv **imperativ** i commits: *add, fix, update*.
- Hellre **flera små PR** än en stor.
- Referera issue i PR: `Closes #<nr>`.
- **Före push:** `--amend`/`rebase -i` OK för städ.
- **Efter push:** använd **`git revert`** (ändra inte publicerad historik).
- Vid **Squash & merge** blir PR-titel och beskrivning commit-meddelandet → skriv dem tydligt.

---

## Snabbkontroller
- `git log --oneline` på `main` visar **3 (G) / 6 (VG)** feature-commits.
- PR:er har **tydliga titlar** och **varför/hur** + **länk** till kort/issue.
- **Minst 1 PR** innehåller en **konflikt** som du **löser och dokumenterar**.
- **README** komplett + **reflection.md** ifylld.
- **Reviews:** 1+ mottagen och **1 (G) / 2 (VG)** given (länkar i README).

---

## Presentationer

Fredagen den 7 november under lektions tid, lottning vilka som får presentera live, resten spelar in sina presentationer.
Max 15 minuters presentation (läraren är inte supersträng på det, men önskar inte för långa =) )
