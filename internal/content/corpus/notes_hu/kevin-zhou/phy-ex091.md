---
id: kevin-zhou-notes-phy-ex091
source: kevin-zhou-notes
native_id: "phy Example 091"
origin: "Kevin Zhou personal physics notes"
language: hu
translated: true
links_en: kevin-zhou-notes-phy-ex091
topic: [kvantumfizika]
subtopic: [atomfizika, elektronkonfigurációk]
math_tools: [Clebsch–Gordan-felbontás, szögimpulzus, spin]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "13201-13223"
archive_layer: reference_notes
source_role: explanatory_example
---
Példa. Nitrogén. Az 1s2 2s2 2p3 elektronkonfigurációból indulunk ki, amelynek degenerációja
 6

 3 = 20. Ehhez szisztematikusabb megközelítés szükséges. Az általános eljárás a Clebsch–Gordan-felbontáshoz hasonló. Az állapotokat az (ML , MS ) értékek szerint rendezzük. Egy legmagasabb párnak (vagyis egy L+ és S+ által lenullázott állapotnak) egy 2S+1 L multiplett kétszeresen nyújtott, illetve legmagasabb súlyú állapotának kell lennie. Ezután ebben a multiplettben áthúzzuk a többi (ML , MS ) értéket, és ismételjük az eljárást. Továbbá, mivel legmagasabb súlyú állapotokra összpontosítunk, csak az ML , MS ≥ 0 állapotokat kell figyelembe vennünk.
    Ebben az esetben a releváns (ML , MS ) értékek:

                      1 × (2, 1/2),   2 × (1, 1/2),   1 × (0, 3/2),   3 × (0, 1/2)

Ezért az első állapot egy 2 D multiplett legmagasabb súlyú állapota. Ennek a multiplettnek az áthúzása után marad

                              1 × (1, 1/2),   1 × (0, 3/2),   2 × (0, 1/2).

Az első megmaradt állapot tehát egy 2 P multiplett legmagasabb súlyú állapota. Végül egy 4 S multiplett marad. A dimenziók 10 + 6 + 4, amelyek a várakozásnak megfelelően 20-ra adódnak össze.
