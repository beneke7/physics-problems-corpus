---
id: kalda-circuits-idea26
source: kalda
language: hu
translated: true
links_en: kalda-circuits-idea26
handout: circuits
section: "Circuits with resistors, batteries, ammeters and voltmeters"
kind: idea
meta_technique: [differential-element]
example_problems: [kalda-circuits-pr25]
status: stable
provenance_note: "Kalda circuits segédanyag, idea 26; magyar fordítás az angol eredetiből"
---

Egy nemlineáris elemen a feszültség kis változása, $\tilde{V}\equiv V-V_{0}$, és a rajta átfolyó áram kis változása, $\tilde{I}\equiv I-I_{0}$ esetén a $V$–$I$ görbe linearizálható: $\tilde{V}=R_{\mathrm{diff}}\tilde{I}$, ahol az $R_{\mathrm{diff}}=\frac{\mathrm{d}V}{\mathrm{d}I}$ mennyiséget differenciális ellenállásnak nevezzük. Itt $V_{0}$ és $I_{0}$ a feszültség, illetve az áram zavarás előtti, egyensúlyi értéke. Ekkor a nemlineáris elem teljes feszültsége $V=V_{0}+R_{\mathrm{diff}}\tilde{I}$. Ha most felírjuk a Kirchhoff-féle huroktörvényt az $\tilde{I}$ áramváltozással, akkor a feszültségváltozás $R_{\mathrm{diff}}\tilde{I}$-val megadott „Ohm-törvényén” kívül megjelenik a $V_{0}$ állandó tag is, amely effektív elektromotoros erőként értelmezhető. Egy tetszőleges $R$ lineáris ellenálláson a feszültség szintén az $I_{0}R$ állandó tag és az $R\tilde{I}$ változási tag összege. Az összes zavarás előtti állandó tagnak ki kell esnie a Kirchhoff-féle huroktörvényből, mert $V_{0}$ és $I_{0}$ a Kirchhoff-törvények érvényes megoldásai voltak. Valóban, ha minden zavarás értékét nullának választjuk, akkor $\tilde{I}=0$ és $\tilde{V}=0$ megoldást kell adjon a Kirchhoff-törvényekre, ezért minden állandó tagnak ki kell egyenlítenie egymást.
