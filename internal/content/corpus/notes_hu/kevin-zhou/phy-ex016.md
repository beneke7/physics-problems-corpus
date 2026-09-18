---
id: kevin-zhou-notes-phy-ex016
source: kevin-zhou-notes
native_id: "phy Example 016"
origin: "Kevin Zhou personal physics notes"
language: hu
translated: true
links_en: kevin-zhou-notes-phy-ex016
topic: [klasszikus mechanika]
subtopic: [hatás-szög változók, adiabatikus invariánsok]
math_tools: [kalkulus, Hamilton-mechanika]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "1114-1207"
archive_layer: reference_notes
source_role: explanatory_example
---

Példa. Hatás-szög változók egy általános egydimenziós rendszerhez. Legyen

                                                  p2
                                            H=       + V (x).
                                                  2m
H értéke a teljes E energia, ezért az I hatásváltozónak teljesítenie kell

                                             θ̇ = ω = dE/dI

ahol a mozgás periódusa 2π/ω. Az energiamegmaradás alapján
                                          r
                                            m     dq
                                     dt =     p           .
                                            2 E − V (q)


Egyetlen pályán integrálva
      r I                     I √                           I p                      I
 2π      m          dq                 d p                d                        d
    =         p             =      2m     E − V (q) dq =       2m(E − V (q)) dq =      p dq.
 ω        2      E − V (q)            dE                 dE                       dE

Vegyük észre, hogy a d/dE derivált integrál elé kiemelésével elhanyagoltuk a fázistérbeli területnek
a pálya végpontjainak változása miatt bekövetkező változását, mivel ez a hozzájárulás dE másodrendű.
   Így a következő szép eredményeket kapjuk:
                                        I                  I
                                      1                 d
                                I=         p dq, T =          p dq.
                                     2π                dE
Így T kiszámítható θ zárt alakú kifejezésének meghatározása nélkül is, ami kényelmes lehet.
A teljesség kedvéért θ-t is meghatározhatjuk:
                                              Z            Z
                                       dE d             d
                              θ = ωt =           p dq =      p dq.
                                       dI dE            dI
Itt θ értéke határozza meg az integrál felső határát, a derivált pedig az
integrandusra hat.
Most az adiabatikus invariánsokra térünk át.

 • Tekintsünk egy olyan helyzetet, amelyben a Hamilton-függvény egy lassan változó λ(t) paramétertől függ.
   Ekkor az energia nem marad meg; a H(q(t), p(t), λ(t)) = E(t) egyenlőséget deriválva
                                                      ∂H
                                               Ė =      λ̇.
                                                      ∂λ
    bizonyos „adiabatikus invariánsok” közelítőleg megmaradnak.

 • Azt állítjuk, hogy az
                                                p2
                                         H=        + V (q; λ(t))
                                               2m
    adiabatikus invariáns egyszerűen az I hatásváltozó. Mivel I-t mindig a Hamilton-függvény egy adott időpontban rögzített
    pályáján értékeljük ki, csak E és λ függvénye, így
                                             ∂I        ∂I
                                        I˙ =      Ė +      λ̇.
                                             ∂E λ      ∂λ E
    A két hozzájárulás rendre az energia megmaradásának hiányából, illetve a rögzített energiájú pályák alakjának
    megváltozásából ered.

 • Ha λ állandó, akkor a korábbiakhoz hasonlóan E = E(I), ezért
                                        ∂I    1     T (λ)
                                            =     =       .
                                        ∂E λ ω(λ)    2π
    A második tagra pedig
                                        I                      I
                            ∂I      1       ∂p         1           ∂p ∂H
                                 =               dq =                          dt′
                            ∂λ E   2π       ∂λ E      2π           ∂λ E ∂p λ,q

    ahol Hamilton egyenleteit alkalmaztuk, és elhanyagoltuk a végpontok változásából származó magasabb rendű tagot.



  • Az integrandus egyszerűsítéséhez legyen H(q, p(q, λ, E), λ) = E, és E állandó értéken deriváljunk λ szerint.
    Ekkor
                            ∂H      ∂q      ∂H       ∂p     ∂H
                                         +                +          = 0.
                             ∂q λ,p ∂λ E    ∂p λ,q ∂λ E     ∂λ q,p,E
    Konstrukció szerint az első tag nulla. Ezért
                                                    I
                                       ∂I         1    ∂H
                                             =−             dt′ .
                                       ∂λ E      2π    ∂λ E
    Végül ezt az első eredménnyel kombinálva kapjuk:
                                                      Z
                                             ∂H          ∂H       ′    λ̇
                                I˙ = T (λ)          −          dt         .
                                             ∂λ E        ∂λ E         2π

    I˙ időátlagát véve, és figyelembe véve, hogy λ változása lassú a mozgás periódusához képest,
                                                        ˙ = 0, így I adiabatikus invariáns.
    a fenti két mennyiség kiesik, így ⟨I⟩

