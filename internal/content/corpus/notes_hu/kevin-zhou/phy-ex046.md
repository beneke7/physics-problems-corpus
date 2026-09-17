---
id: kevin-zhou-notes-phy-ex046
source: kevin-zhou-notes
native_id: "phy Example 046"
origin: "Kevin Zhou personal physics notes"
language: hu
translated: true
links_en: kevin-zhou-notes-phy-ex046
topic: [statisztikus-mechanika]
subtopic: [Pauli-paramágnesség, diamágnesség]
math_tools: [Fermi–Dirac-statisztika, Sommerfeld-kifejtés, Euler-összegzés]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "4515-4583"
archive_layer: reference_notes
source_role: explanatory_example
---
Példa. Pauli-féle paramágnesség. A paramágnesség abból ered, hogy a dipólusok egy külső tér irányába állnak be; a Pauli-féle paramágnességben a spin áll be. B térben az elektronok energiája
                                                                      |e|ℏ
                                 E = µB Bs,    s = ±1,         µB =
                                                                      2mc
ahol µB a Bohr-magneton. A foglaltsági számok ekkor
                         N↑   1                        N↓   1
                            = 3 f3/2 (zeβµB B ),          = 3 f3/2 (ze−βµB B ).
                         V   λ                         V   λ
A kapott mágnesezettség
                                         M = µB (N↑ − N↓ ).
85 3. Statisztikus mechanika


A nagy hőmérsékletű határban z kicsi és f3/2 (z) ≈ z, ezért

                                  2µB V z
                          M=              sinh(βµB B) = µB N tanh(βµB B)
                                    λ3
ahol N = N↑ + N↓ . Ez egyszerűen a klasszikus, Maxwell–Boltzmann-statisztikából kapott eredmény. Fontos tulajdonság, hogy a χ = ∂M/∂B szuszceptibilitás 1/T szerint változik, vagyis érvényes Curie törvénye.
   Az alacsony hőmérsékletű határban a Sommerfeld-kifejtés vezető tagját vesszük, majd B szerint első rendig kifejtünk:
                                          M = µ2B g(EF )B.
Alacsony hőmérsékleten a szuszceptibilitás ezért már nem követi Curie törvényét, hanem egy konstanshoz tart. Ennek megértéséhez vegyük észre, hogy csak a g(EF )∆E = g(EF )µB B számú elektron van elég közel a Fermi-felülethez ahhoz, hogy részt vegyen, és mindegyik µB mágnesezettséggel járul hozzá.

Megjegyzés. A diamágnesség tankönyvi magyarázata szerint a töltött részecskék körmozgásba kezdenek, amikor mágneses teret kapcsolunk be, és ellentétes teret hoznak létre. Ez a magyarázat azonban valójában nem helyes a Bohr–van Leeuwen-tétel miatt: a kanonikus partíciós függvény, Z, nem függ a külső tértől, amint az a p − eA → p eltolással látható az integrálban, ezért klasszikus mechanikai termikus egyensúlyban nincs mágnesség!
    Ezt a következtetést konkrétabban is láthatjuk. A részecskéknek véges dobozban, például tükröző falak között kell lenniük. Azok a részecskék, amelyek pályája eléri a falat és visszaverődik, effektíve ellenkező irányban keringenek. Mivel a mágneses momentum a területtel arányos, ez pontosan kioltja a tömb mágneses momentumát. Ennek részletes kiszámítása sokkal nehezebb, mint pusztán Z vizsgálata, mert Z maga kevésbé érzékeny a peremfeltételekre, de elvégezhető.
    Kvantummechanikában a Bohr–van Leeuwen-tétel nem érvényes. A partíciós függvény nem integrál, ezért az első érv elbukik; ehelyett Z nemtriviális térfüggést fog mutatni. Az energiaszintek nyelvén a határ közelében lévő elektronállapotok a taszító potenciál miatt sokkal nagyobb energiájúak, így kevésbé fontosak, ezt azonban nehéz megmutatni.

Megjegyzés. Az Euler-összegzési formula:
                           ∞                    Z ∞
                           X                                         1 ′
                                 h(n + 1/2) =           h(x) dx +      h (0) + . . . .
                                                0                   24
                           n=0

Az Euler-összegzési formula alapgondolata az, hogy egy sima függvényt alacsony fokú polinommal (vagy csökkenő együtthatójú Taylor-sorral) közelíthetünk. Az első tag eredetének megértéséhez tekintsük az egységintervallumra vonatkozó formulát:
                                              Z 1
                                   h(1/2) ≈       h(x) dx + . . . .
                                                    0

Ha h(x) elsőfokú polinom, nincs korrekciós tag. A h(x) másodfokú tagjai miatti korrekció a h′ (x) végpontokban felvett értékeinek kivonásával határozható meg:
                                      Z 1
                           h(1/2) ≈       h(x) dx + c(h′ (0) − h′ (1)) + . . . .
                                        0

c értékének meghatározásához tekintsük a h(x) = (x − 1/2)2 függvényt, ami c = 1/24-et ad. Az összeg teleszkopikus összeállítása eredményezi a fenti formulában szereplő h′ (0)/24 tagot. Általában minden magasabb rendű korrekciós tag páratlan deriváltakat tartalmaz, mert az olyan tagok, mint (x − 1/2)2n+1 , nem járulnak hozzá a területhez.
86 3. Statisztikus mechanika

