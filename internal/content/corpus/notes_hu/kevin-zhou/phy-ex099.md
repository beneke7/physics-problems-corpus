---
id: kevin-zhou-notes-phy-ex099
source: kevin-zhou-notes
native_id: "phy Example 099"
origin: "Kevin Zhou personal physics notes"
language: hu
translated: true
links_en: kevin-zhou-notes-phy-ex099
topic: [kvantumfizika]
subtopic: [szórás, keménygömb-szórás, optikai-tétel]
math_tools: [differenciálegyenletek, aszimptotikus-analízis]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "14358-14438"
archive_layer: reference_notes
source_role: explanatory_example
---
Példa. Keménygömb-szórás. Legyen
                                                  (
                                                   ∞ r<a
                                        V (r) =
                                                      0   r > a.

A radiális hullámfüggvény alakja

                               Rkℓ (r) = cos(δℓ )jℓ (kr) − sin(δℓ )yℓ (kr)

az r > a tartományban, ahol δℓ a fáziseltolódás, amint az r → ∞ határ vizsgálatából látható. Az Rkℓ (a) = 0 határfeltétel
azt adja, hogy
                                                    jℓ (ka)
                                         tan(δℓ ) =         .
                                                    yℓ (ka)
Először a ka ≪ 1 esetet tekintjük. A Bessel-függvények aszimptotikus alakját alkalmazva

                                                         (ka)2ℓ+1
                                sin(δℓ ) ≈ δℓ ≈ −                        .
                                                    (2ℓ − 1)!!(2ℓ + 1)!!
267 12. Szórás

Ez különösen azt jelenti, hogy a szórást az s-hullám dominálja:
                                                 4π
                                           σ = 2 (ka)2 = 4πa2
                                                 k
ami többszöröse a σ = πa2 klasszikus eredménynek. Ezután a ka ≫ 1 esetet vizsgáljuk.
Az ℓ ≪ ka feltételt kielégítő tagokra, ezúttal nagy argumentumra alkalmazva a Bessel-függvények aszimptotikus alakját,

                                                           ℓπ
                                              δℓ = −ka + .
                                                            2
adódik. Amikor ℓ megközelíti ka-t, a fáziseltolódások nullához tartanak, levágva a parciális-hullám-kifejtést. Intuitívan
ez azért van, mert ka ≫ 1 esetén a szórás lényegében klasszikus, a beeső hullám pedig diszkrét részecskeként viselkedik.
Ha egy részecske a sugarú gömbről szóródik, akkor a szögimpulzusa
                                         L = pa sin θ ≤ ℏka.
A teljes hatáskeresztmetszet
                                           ka
                                    4π X
                                  σ≈ 2   (2ℓ + 1)(1/2) ≈ 2πa2
                                    k
                                          ℓ=0
ahol a gyorsan oszcilláló sin2 (δℓ ) tényezőt az átlagával, 1/2-del helyettesítettük. Rejtélyes, hogy a klasszikus
hatáskeresztmetszet kétszeresét kapjuk. Fizikailag a további πa2 a gömb széle körüli diffrakcióból származik, amely
„kitölti” az árnyékot. Ez éles szórási csúcsot hoz létre az előre irányú diffrakcióban, formálisan ugyanúgy, mint a
fény diffrakciójának kör alakú apertúrához tartozó központi csúcsa.
Megjegyzés. Az optikai tétel a teljes hatáskeresztmetszetet az előre irányú szórási amplitúdóval kapcsolja össze. Centrális
erőpotenciálok esetén egyszerűen megjegyezzük, hogy
                                          1X
                                  f (0) =     (2ℓ + 1)eiδℓ sin(δℓ ).
                                          k
                                                ℓ
A teljes hatáskeresztmetszettel összehasonlítva azonnal
                                               4π
                                          σ=      Im(f (0))
                                                k
adódik. Ha f-et sorba fejtjük, az optikai tétel különböző rendű tagokat kapcsol össze, mivel dσ/dΩ ∼ |f |2, viszont
σ ∼ f . Ez a kvantumtérelméletben „vágott” diagramok révén jelenik meg.
   Az optikai tétel általánosabban a valószínűségi fluxus vizsgálatával is levezethető. A valószínűség megmaradása miatt
egy nagy gömbön
                                            Z
                                               J · dS = 0

teljesül. A J fluxus három tagra bomlik: a beeső hullámra (amely nulla fluxust ad), a szórt hullámra (amely vσ-t ad),
és az interferenciatagra,
               ℏ                                                                                
                      ∗             ∗
        Jint = Im (ψscat ∇ψinc + ψinc ∇ψscat ) = vrRe f (θ, ϕ)∗ eik(x−r) x̂ + f (θ, ϕ)eik(r−x) r̂ .
               m
Egy r sugarú gömbön integrálva azt kell kapnunk, hogy
                               Z      Z                                          
                                                  ikr(1−cos θ)
                      σ = r Re     dϕ sin θdθ e                f (θ, ϕ)(1 + cos θ)

az r → ∞ határban. Ekkor a fázistényező gyorsan oszcillál, ezért a hozzájárulás csak a θ = 0, π végpontokból származik,
mivel nincs stacionárius fázisú pont. A θ = π-hez tartozó járulék a (1 + cos θ) tényező miatt nulla, míg a θ = 0 csúcs
adja a kívánt eredményt.
268 12. Szórás
