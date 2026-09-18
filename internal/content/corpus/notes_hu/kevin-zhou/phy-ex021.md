---
id: kevin-zhou-notes-phy-ex021
source: kevin-zhou-notes
native_id: "phy Example 021"
origin: "Kevin Zhou personal physics notes"
language: hu
translated: true
links_en: kevin-zhou-notes-phy-ex021
topic: [elektromágnesség]
subtopic: [elektromos dipólus, térenergia]
math_tools: [vektoranalízis, Taylor-kifejtés]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "1461-1509"
archive_layer: reference_notes
source_role: explanatory_example
---

Példa. Az elektromos dipólus potenciálja

                                          Q         1    1
                                      ϕ=              −             .
                                         4πϵ0       r |r + d|
Ennek közelítéséhez a Taylor-kifejtést használjuk:
                                              X (d · ∇)n
                                  f (r + d) =            f (r)
                                              n
                                                   n!
ami komponensenként úgy érthető meg, hogy d · ∇ = di ∂i . Ekkor

                                   Q           1      Q d·r
                             ϕ≈         −d · ∇     =          .
                                 4πϵ0          r     4πϵ0 r3
Látjuk, hogy a potenciál 1/r2 szerint csökken, és nagy távolságban csak a dipólusmomentumtól
p = Qd függ. A szokásos hányadosszabállyal deriválva
                                             1 3(p · r̂)r̂ − p
                                       E=                      .
                                            4πϵ0     r3
A Taylor-sor első tagjára való korlátozás akkor indokolt, ha r ≫ d. Általánosabban, tetszőleges
töltéseloszlásra
                                                            ρ(r′ )
                                                   Z
                                               1
                                     ϕ(r) =           dr′
                                             4πϵ0          |r − r′ |
az integrandus Taylor-sorral való közelítése a multipólus-kifejtést adja.


Megjegyzés. Az elektromágneses tér energiája. Egy részecskerendszer összeállításához szükséges energia
                                                1X
                                          U=       qi ϕ(ri ).
                                                2
                                                   i

Ez természetes módon általánosítható folytonos töltéseloszlás összeállításának energiájára:
                                        Z                  Z
                                      1                 ϵ0
                                U=        dr ρ(r)ϕ(r) =      dr E 2
                                      2                 2
ahol a második lépésben parciális integrálást végeztünk, és elhagytunk egy felületi tagot. Van azonban egy
finom részlet, amikor visszatérünk a ponttöltésekhez, mert ekkor a két kifejezés már nem egyezik.
Az első kifejezés kifejezetten nem tartalmazza a töltés önkölcsönhatását, mivel a ϕ(ri ) potenciált
az összes többi töltésnek kell meghatároznia. A második viszont tartalmazza, ezért a végső eredmény pozitív definit.
Úgy tekinthetünk rá, mint amely ezen felül minden ponttöltés
nulláról való felépítéséhez szükséges energiáját is tartalmazza.
