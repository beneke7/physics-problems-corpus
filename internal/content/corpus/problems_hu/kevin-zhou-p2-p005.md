---
id: "kevin-zhou-p2-p005"
source: "kevin-zhou"
native_id: "KZ-P2-P005"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "hu"
translated: true
links_en: "kevin-zhou-p2-p005"
topic: [kísérleti fizika]
subtopic: [bizonytalanságterjedés, variancia, szórás, független hibák]
math_tools: [valószínűségszámítás és statisztika, algebra]
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

⟨X1 X2 ⟩ = ⟨X1 ⟩⟨X2 ⟩.

    Használjuk fel ezt az eredményt annak megmutatására, hogy

                                     var(X1 + X2 ) = var(X1 ) + var(X2 )

   amiből következik, hogy a szórások „négyzetesen adódnak össze”,
                                                 q
                                       σX1 +X2 = σX  2 + σ2 .
                                                       1   X2

   Ez fontos eredmény, amelyet az alábbiakban sokszor felhasználunk.


    2    Bizonytalanságok terjedése
        Ötlet 2
        Ha egy fizikai mennyiséget kísérletben megmérünk, és x±∆x alakban adjuk meg, nem tudjuk,
        mi a mennyiség valódi értéke. Ha a mennyiség p(x) valószínűségi eloszlással rendelkezik,
        akkor a megadott ∆x lényegében p(x) szórása.

        Megjegyzés
        Valós mérésekhez a bizonytalanságok hozzárendeléséhez használhatjuk intuíciónkat és tapasztalatunkat. Például ha egy csak a legközelebbi másodpercet mérő órát használunk, választhatjuk ∆t = 0.5 s értéket. Ha milliméteres beosztású jó vonalzót használunk, választhatjuk ∆x = 0.5 mm értéket. Természetesen a végső próba az eredmény: ha helyesen adtuk meg a bizonytalanságokat, a végső bizonytalanságunk az esetek többségében (de nem mindig) magában foglalja a valódi eredményt.
