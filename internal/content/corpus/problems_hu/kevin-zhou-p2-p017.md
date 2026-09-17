---
id: "kevin-zhou-p2-p017"
source: "kevin-zhou"
native_id: "KZ-P2-P017"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "hu"
translated: true
links_en: "kevin-zhou-p2-p017"
topic: [valószínűségszámítás és statisztika]
subtopic: [binomiális eloszlás, szórás, centrális határeloszlás-tétel]
math_tools: [valószínűségszámítás és statisztika, algebra]
format: "explanation"
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

Példa 4

       Egy szabályos érmét 1000-szer feldobunk, és megszámoljuk a fejek számát. Ha ezt a folyamatot sokszor megismételjük, mekkora lesz a fejek számának szórása?

       Megoldás
       Tekintsük az 1000 feldobásból álló egyetlen kísérletet. A fejek száma X = X1 + X2 + . . . + X1000, ahol
                                              (
                                               1 fej az i. dobásnál,
                                         Xi =
                                               0 írás az i. dobásnál.

       Természetesen mindegyik változó várható értéke ⟨Xi ⟩ = 0.5, ezért X várható értéke 500. Ezenkívül az Xi változók egymástól függetlenek, így a varianciáik összeadódnak. Mindegyikük varianciája
                                                               1 1       1
                                  var Xi = ⟨Xi2 ⟩ − ⟨Xi ⟩2 = − = .
                                                               2 4       4
       Így a fejek számának szórása
                                        √          p
                                          var X = 1000/4 ≈ 16.

       Tehát 520 fej nem lenne meglepő, de 550 fej esetén már indokolt lehet arra gyanakodni, hogy az érme nem szabályos. (A fejek száma egyébként a fent említett centrális határeloszlás-tétel miatt nagyon közel áll a normális eloszláshoz.) Annak ellenőrzésére, hogy megértettük-e ezt p esetében is, ismételjük meg a számítást azzal az általános p valószínűséggel, hogy fejet kapunk; ekkor 1000 p(1 − p) eredményt kell kapnunk.
