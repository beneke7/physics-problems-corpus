---
id: "kevin-zhou-p2-ex004"
source: "kevin-zhou"
native_id: "KZ-P2-EX004"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "hu"
translated: true
links_en: "kevin-zhou-p2-ex004"
topic: [Matematikai módszerek]
subtopic: [valószínűségi változók, szórásnégyzet, centrális határeloszlás-tétel]
math_tools: [valószínűségszámítás]
format: "explanation"
kind: "example"
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

Tekintsünk 1000 pénzfeldobásból álló kísérletet. A fejek száma X = X1 + X2 + . . . + X1000 , ahol
                                              (
                                               1 fej az i. dobásnál,
                                         Xi =
                                               0 írás az i. dobásnál.

       Természetesen mindegyik változó átlaga ⟨Xi ⟩ = 0.5, így X átlaga 500. Ezenkívül az Xi változók egymástól
       függetlenek, ezért a varianciák összeadódnak. Egy-egy ilyen változó varianciája
                                                               1 1       1
                                  var Xi = ⟨Xi2 ⟩ − ⟨Xi ⟩2 = − = .
                                                               2 4       4
       Így a fejek számának szórása
                                        √          p
                                          var X = 1000/4 ≈ 16.

       Ezért 520 fej nem lenne meglepő, de 550 fej esetén joggal gyanakodhatnánk, hogy az érme nem szabályos. (A fejek
       száma egyébként a fent említett centrális határeloszlás-tétel miatt nagyon közel áll a normális eloszláshoz.) Annak
       ellenőrzésére, hogy megértettük-e ezt, ismételjük meg a számolást a fej dobásának általános p valószínűségével;
       ekkor 1000 p(1 − p) adódik.
