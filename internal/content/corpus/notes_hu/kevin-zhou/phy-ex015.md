---
id: kevin-zhou-notes-phy-ex015
source: kevin-zhou-notes
native_id: "phy Example 015"
origin: "Kevin Zhou personal physics notes"
language: hu
translated: true
links_en: kevin-zhou-notes-phy-ex015
topic: [klasszikus mechanika]
subtopic: [egyszerű harmonikus oszcillátor, hatás-szög változók]
math_tools: [kalkulus, kanonikus transzformációk]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "1072-1113"
archive_layer: reference_notes
source_role: explanatory_example
---

Példa. Egyszerű harmonikus oszcillátor. A Hamilton-függvény

                                                p2  1
                                           H=      + mω 2 q 2
                                                2m 2
és (q, p)-ről (θ, I)-re váltunk, ahol

                                                           √
                                     r
                                       2I
                               q=          sin θ,     p=    2Imω cos θ.
                                       mω
Annak ellenőrzésére, hogy ez kanonikus transzformáció, megvizsgáljuk a Poisson-zárójelek megmaradását; a
legegyszerűbb visszafelé dolgozni, és észrevenni, hogy
                                              √        √
                              {q, p}(θ,I) = 2{ I sin θ, I cos θ}(θ,I) = 1

a kívánt módon. Ezekben az új koordinátákban a Hamilton-függvény egyszerűen

                                        H = ωI,     θ̇ = ω, I˙ = 0.

A fázistér áramlását „kiegyenesítettük”: egy hengeren egyenes vonalakká alakítottuk. Ez a
hatás-szög változók legegyszerűbb példája.

  • Általában n szabadságfok esetén olyan (θi , Ii ) változókat szeretnénk találni, amelyekben a Hamilton-függvény
    csak az Ii függvénye. Ekkor az Ii-k megmaradnak, és θ̇i = ωi , ahol az ωi az Ii-től függnek,
    de időfüggetlenek. Korlátos rendszer esetén θi-t úgy skálázzuk, hogy [0, 2π) intervallumba essen. Az
    így kapott változókat hatás-szög változóknak nevezzük, a rendszer pedig integrálható.

  • Liouville tétele szerint ha n, egymással Poisson szerint kommutáló megmaradó mennyiség
    Ii van, akkor a rendszer integrálható. (Első pillantásra ez triviális kritériumnak tűnik – hogyan
    lehetne megmutatni, hogy ilyen megmaradó mennyiségek nem léteznek? Mégis lehetséges; például
    Poincaré híresen megmutatta, hogy az általános
    háromtest-problémának nincs ilyen, a kanonikus változókban és a tömegekben analitikus megmaradó mennyisége.)

  • Az integrálható rendszerek ritkák és különlegesek; a kaotikus rendszerek nem integrálhatók. Annak kérdése,
    hogy egy rendszer integrálható-e, a globális struktúrához kapcsolódik, mert lokálisan mindig kiegyenesíthetjük
    a fázistér áramvonalait.

  • Egy integrálható rendszer mozgása állandó Ii értékű felületen zajlik. Ezek a felületek topológiailag
    Tn tóruszok, amelyeket invariáns tóruszoknak nevezünk.
