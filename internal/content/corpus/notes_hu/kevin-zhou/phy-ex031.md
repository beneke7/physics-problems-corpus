---
id: kevin-zhou-notes-phy-ex031
source: kevin-zhou-notes
native_id: "phy Example 031"
origin: "Kevin Zhou personal physics notes"
language: hu
translated: true
links_en: kevin-zhou-notes-phy-ex031
topic: [statisztikus-mechanika]
subtopic: [kanonikus-sokaság, energiaingadozások]
math_tools: [kumulánsok, partíciós-függvény]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "3119-3153"
archive_layer: reference_notes
source_role: explanatory_example
---
Példa. Nem kölcsönható rendszerek esetén a partíciós függvények összeszorzódnak. Egy másik hasznos tulajdonság, hogy a partíciós függvény az energia kumulánsgeneráló függvényéhez hasonló:
                                                         X e−(β−γ)En
                               f (γ) = log⟨eγE ⟩ = log                    .
                                                          n
                                                                   Z

A kumulánsok az f γ = 0-ban kiértékelt deriváltjai. Ehhez a taghoz csak a számláló járul hozzá, és mivel az csak a (β − γ) mennyiséget tartalmazza, helyette β szerint deriválhatunk:
                                                          ∂ n (log Z)
                                  f (n) (γ)|γ=0 = (−1)n               .
                                                              ∂β n


Konkrét példaként:
                                         ∂ log Z               ∂ 2 log Z
                               ⟨E⟩ = −           ,   var E =             .
                                           ∂β                     ∂β 2
Mivel azonban var E = −∂⟨E⟩/∂β, ezért

                                          var E = kB T 2 CV

ami a fluktuáció–disszipációs tétel rokona. Továbbá az energia minden kumulánsa meghatározható az ⟨E⟩ deriválásával, ezért mind kiterjedt mennyiség. A termodinamikai határátmenetben tehát a rendszer energiája meghatározott, és a kanonikus, illetve a mikrokanonikus sokaság egybeesik. (Ez nem igaz, amikor a kanonikus sokaságot kis rendszerre, például egyetlen atomra alkalmazzuk.)
   Ennek egy másik megértéséhez vegyük észre, hogy
                                             X
                                        Z=       Ω(Ei )e−βEi
                                              Ei

ahol most állapotok helyett az energiák szerint összegzünk. A termodinamikai határátmenetben a két tényező az összegben gyorsan növekszik, illetve csökken, ezért az összeget a legnagyobb tag uralja, amelyhez rögzített energia tartozik.
