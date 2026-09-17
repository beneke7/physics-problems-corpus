---
id: kevin-zhou-notes-phy-ex034
source: kevin-zhou-notes
native_id: "phy Example 034"
origin: "Kevin Zhou personal physics notes"
language: hu
translated: true
links_en: kevin-zhou-notes-phy-ex034
topic: [statisztikus-mechanika]
subtopic: [termodinamikai-potenciálok]
math_tools: [differenciálok, Legendre-transzformációk]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "3347-3401"
archive_layer: reference_notes
source_role: explanatory_example
---
Példa. Az entalpiát, a Helmholtz-féle szabadenergiát és a Gibbs-féle szabadenergiát a következőképpen definiáljuk:

                        H = U + P V,     F = U − T S,    G = U + P V − T S.

Ekkor
                 dH = T dS + V dp,     dF = −S dT − p dV,      dG = −S dT + V dp.

E differenciálokból leolvashatjuk e függvények természetes változóit. A mennyiségek közötti átváltáshoz használhatjuk a Gibbs–Helmholtz-egyenleteket:
                                                                     
                                 2 ∂(F/T )                  2 ∂(G/T )
                         U = −T                  , H = −T
                                       ∂T      V                   ∂T     p

amelyek közvetlenül következnek a szorzási szabályból.

Megjegyzés. A fenti potenciáloknak közvetlen fizikai értelmezésük van. Tekintsünk egy rendszert, amelyben
d̄W = −p dV + d̄W ′ , ahol d̄W ′ másfajta munkát, például egy akkumulátor által szolgáltatott elektromos munkát tartalmaz. Mivel d̄Q ≤ T dS, az első főtétel szerint

                                    −p dV + d̄W ′ ≥ dU − T dS.

Ha a folyamat állandó térfogaton megy végbe, akkor dF = dU − T dS, tehát d̄W ′ ≥ dF . A Helmholtz-féle szabadenergia ekkor a rögzített hőmérsékleten kinyerhető maximális munkát jelenti. Ha ehelyett a nyomást rögzítjük, akkor d̄W ′ ≥ dG, így a Gibbs-féle szabadenergia adja meg a maximálisan kinyerhető, nem-p dV típusú munkát.
    Az entalpia értelmezése más: állandó nyomáson dH = T dS = d̄Qrev , ezért az entalpia változása megmutatja, hogy egy kémiai reakció endoterm vagy exoterm.

Megjegyzés. A Maxwell-relációk levezetése. Emlékezzünk rá, hogy a T S síkban lévő terület hő, a pV síkban lévő terület pedig munka. Zárt körfolyamatban U változása nulla, ezért a hő és a munka egyenlő:
                                        Z          Z
                                          dp dV = dT dS.

Mivel a körfolyamat tetszőleges, a differenciális 2-formák egyenlők:

                                         dp ∧ dV = dT ∧ dS.

A számítás nyelvén ez azt jelenti, hogy a (p, V ) változókról a (T, S) változókra való áttérés Jacobi-determinánsa egy. Ez az egyenlőség valamennyi Maxwell-reláció levezetésére felhasználható. Tegyük fel például, hogy T = T (S, V ) és P = P (S, V ). A differenciálok kifejtésével és a dS ∧ dS = dV ∧ dV = 0 azonosság használatával:
                                                     
                                 ∂T                  ∂P
                                       dV ∧ dS =             dS ∧ dV
                                 ∂V S                ∂S V

ebből leolvashatunk egy Maxwell-relációt. A másik három ugyanígy vezethető le, tehát fizikailag a Maxwell-relációk egyszerűen az energiamegmaradást fejezik ki. (Maxwell eredetileg hasonló módon vezette le őket, de az euklideszi geometria nyelvét használva!)

Most néhány példát adunk a Maxwell-relációkat és a parciális deriválási szabályokat alkalmazó feladatokra.
65 3. Statisztikus mechanika
