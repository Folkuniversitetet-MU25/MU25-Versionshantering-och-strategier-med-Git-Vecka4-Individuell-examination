# Individuell Examination – Git & Agilt (solo)

> Starta här: Klicka **Use this template** → skapa **privat** repo → bjud in läraren (Collaborator).

## Syfte
Visa Git-flöde (feature-branch → PR → review → merge), hantera minst 1 konflikt, och skriv en kort reflektion om user stories/AC/DoD och förbättringar.

## Krav (G)
- 3 features → 3 PR → review → merge till `main`.
- Minst 1 avsiktlig **mergekonflikt**, löst och dokumenterad i PR-kommentar.
- **PR-policy (light):** rubrik `type(scope): syfte`, kort **varför/hur**, länk till issue/kort, **minst 1 review**.
- **Historik i main:** varje feature landar som **1 commit** (Squash-merge rekommenderas).
- Fyll i `reflection.md` (1–2 sidor): 1) egen user story + **AC** + kort **INVEST**-motivering, 2) sprintmål + **DoD**, 3) **Start/Stop/Continue** (minst 1 förbättring).
- **Reviews:** minst 1 mottagen + 1 given. Lägg länkar i sektionen nedan.

## Kör lokalt
Öppna `starter/index.html` i webbläsaren (eller starta enkel live-server i VS Code).

## Mina reviews
- **Mottagen:** <länk till PR där någon reviewat dig>
- **Given:** <länk till en klasskamrats PR du reviewat>  
*(VG: lägg till en till “Given”)*

## Tips
- Små, fokuserade PR (≈ ≤ 250 rader diff).
- Vid **Squash & merge** blir PR-titel och beskrivning commit-meddelandet → skriv dem tydligt.
- **Före push:** `--amend`/`rebase -i` OK för städ. **Efter push:** använd **`git revert`** (ändra inte publicerad historik).

## Snabbkontroller
- `git log --oneline` på `main` visar 3 (G) / 6 (VG) feature-commits.
- PR:er har tydliga titlar och varför/hur + länk till issue/kort.
- Minst 1 PR innehåller en konflikt som du löser och dokumenterar i PR-kommentaren.
- README komplett + reflection.md ifylld.
- Reviews: 1+ mottagen och 1 (G) / 2 (VG) given (länkar i README).
