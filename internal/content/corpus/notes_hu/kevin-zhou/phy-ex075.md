---
id: kevin-zhou-notes-phy-ex075
source: kevin-zhou-notes
native_id: "phy Example 075"
origin: "Kevin Zhou personal physics notes"
language: hu
translated: true
links_en: kevin-zhou-notes-phy-ex075
topic: [kvantumfizika]
subtopic: [harmonikus oszcillátor, úttintegrálok]
math_tools: [kalkulus, Gauss-integrálok]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "8884-8922"
archive_layer: reference_notes
source_role: explanatory_example
---

Példa. A harmonikus oszcillátor ω frekvenciával. Ez kissé finom, mivel az (x0 , x, t) bizonyos
választásai végtelen sok ágat vagy egyetlen ágat sem adnak. Ha azonban pontosan egy ágat választunk,
akkor
                                             mω
                         S(x, x0 , t) =            ((x2 + x2 ) cos(ωt) − 2xx0 ).
                                          2 sin(ωt) 0

µ meghatározásához vegyük észre, hogy a második variáció parciális integrálással így írható:

                                               m d2
                                Z
                                                           2
                          δS = dτ δx(τ ) −              +ω      δx(τ )
                                               2 dτ 2

így csak a fenti operátor negatív sajátértékeinek számát kell meghatároznunk, ahol a peremfeltételek
δx(0) = δx(t) = 0. A sajátfüggvények sin(nπτ /t) alakúak, pozitív egész n-nel, és sajátértékük
(nπ/t)2 − ω 2. Ezért a negatív sajátértékek száma t értékétől függ, de elég kis t esetén nincs
ilyen sajátérték.
   A Van Vleck-képlet alkalmazásával megkapjuk az egzakt propagátort:
                                    r
                                          mω
                     K(x, x0 , t) =                exp(iS(x, x0 , t)/ℏ), t < π/ω.
                                      2πiℏ sin(ωt)

t = −iℏβ-t választva és egyszerűsítve a partíciós függvény

                                                    e−βℏω/2
                                             Z=
                                                   1 − e−βℏω

adódik, ami természetesen egyezik a szokásos statisztikus mechanika eredményeivel. Az úttintegrálok
azonban akkor válnak igazán érdekessé, amikor a probléma nem oldható meg egzaktul, például ha az
oszcillátor potenciáljának kis negyedfokú perturbációja van. Ekkor az euklideszi akciót e járulék
szerint perturbatívan kifejthetjük, ami a teljes partíciós függvény diagrammatikus kifejtését adja a
perturbálatlan oszcillátor korrelációs függvényeivel. További tárgyalásért lásd a Kvantumtér-elmélet
című jegyzetet.
