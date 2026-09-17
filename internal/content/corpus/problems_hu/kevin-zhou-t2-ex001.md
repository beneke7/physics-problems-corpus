---
id: "kevin-zhou-t2-ex001"
source: "kevin-zhou"
native_id: "KZ-T2-EX001"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "hu"
translated: true
links_en: "kevin-zhou-t2-ex001"
topic: [Matematikai módszerek]
subtopic: [parciális deriváltak, koordinátatranszformációk]
math_tools: [parciális deriválás, geometria és trigonometria]
format: "explanation"
kind: "example"
core_ideas: []
has_solution: false
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/T2.txt"
source_url: "sources/kevin_zhou/site/handouts/T2.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Hungarian translation of a candidate classified as Genuinely new in the Kevin Zhou overlap audit."
---

# KZ-T2-EX001

       1. példa

       Tekintsük a sík leírását Descartes-féle (x, y) és polárkoordinátákkal (r, θ). Számítsuk ki a (∂x/∂r)|θ és (∂x/∂r)|y parciális deriváltakat.

       Megoldás
       Az első parciális derivált kiszámításához x-et r és θ függvényeként kell felírnunk. Ezt az x = r cos θ összefüggés adja. r szerint deriválva és θ-t állandónak tekintve azt kapjuk, hogy

                                                   ∂x
                                                        = cos θ.
                                                   ∂r θ

       A másodikhoz x-et r és y segítségével kell felírnunk. Ehhez induljunk ki az

                                                   r 2 = x2 + y 2 .

       Itt megoldhatnánk x-re. Azonban gyorsabb az implicit differenciálás szokásos trükkjét használni: jegyezzük meg, hogy mindkét oldalt r szerint, y-t állandónak tartva deriválva azt kapjuk, hogy

                                                          ∂x
                                               2r = 2x         +0
                                                          ∂r y

       amiből a következő eredmény adódik:
                                               ∂x    r    1
                                                    = =       .
                                               ∂r y  x  cos θ
       A két eredmény különbözik: annak megváltoztatása, hogy mit tartunk állandónak, megváltoztatja a deriváltat. Ezt geometriailag úgy láthatjuk, ha a ∂x/∂r két változatát néhány pontban kiértékeljük.
