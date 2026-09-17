---
id: "kevin-zhou-p2-p013"
source: "kevin-zhou"
native_id: "KZ-P2-P013"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "hu"
translated: true
links_en: "kevin-zhou-p2-p013"
topic: [Kísérleti fizika]
subtopic: [bizonytalanságterjedés, független mérések]
math_tools: [differenciálás, valószínűségszámítás]
format: "open-ended"
kind: "problem"
core_ideas: []
has_solution: false
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/P2.txt"
source_url: "sources/kevin_zhou/site/handouts/P2.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Hungarian translation of a candidate classified as Genuinely new in the Kevin Zhou overlap audit."
---

(b) Mutassuk meg, hogy az eredmények átlagolása a 7. feladatban szereplő N független kísérlet esetén a relatív
         bizonytalanságot √N faktorral csökkenti.

       Megjegyzés
       Sok olyan helyzet van, amelyben a fenti szabályok nem használhatók. Tekintsük például az x + y 2 /x bizonytalanságát,
       ahol x és y függetlenek. A standard szabályokkal kiszámíthatjuk bármelyik tag bizonytalanságát, de az összegükét
       nem, mert a tagok nem függetlenek (mindkettő tartalmazza x-et).

       Ilyen esetekben használhatjuk az érintőegyenes-közelítés többváltozós megfelelőjét,
                                                                     ∂f            ∂f
                               f (x′ , y ′ ) ≈ f (x, y) + (x′ − x)      + (y ′ − y) .
                                                                     ∂x            ∂y
       Független x és y esetén a bizonytalansághoz tartozó két hozzájárulás négyzetes összeadásával
                                         s         2           2
                                             ∂f            ∂f
                                   ∆f =          ∆x +          ∆y .
                                             ∂x             ∂y

       Ez az általános szabály a 10. feladat eredményeinek gyors újralevezetésére is használható. Olimpiadai feladatokban
       azonban erre általában nem kellene szükség legyen. Ha egy kísérletben ilyen helyzetbe kerülünk, gyakran az egyik
       bizonytalanság sokkal kisebb, és teljesen elhanyagolható.


                                                          5
    Kevin Zhou                                                              Physics Olympiad Handouts


    3    A bizonytalanságok használata
