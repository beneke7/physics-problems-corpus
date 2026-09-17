---
id: kevin-zhou-notes-phy-ex051
source: kevin-zhou-notes
native_id: "phy Example 051"
origin: "Kevin Zhou personal physics notes"
language: hu
translated: true
links_en: kevin-zhou-notes-phy-ex051
topic: [folytonos-közegek-mechanikája]
subtopic: [potenciáláramlás, folyadékdinamika]
math_tools: [Laplace-egyenlet, Bernoulli-tétel]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "5962-6181"
archive_layer: reference_notes
source_role: explanatory_example
---
Példa. Potenciáláramlás gömb mellett. Tekintsünk egy U ẑ sebességű, aszimptotikusan egyenletes áramlást, amely az origóban lévő, r sugarú gömbnek ütközik. A Laplace-egyenlet megoldásának szokásos módszereivel
                                                          a3
                                                            
                                     Ψ = U r cos θ 1 + 3
                                                         2r
adódik, ahol θ a ẑ-től mért szög. Bernoulli tétele szerint a nyomás változása ∆p = ρ0 v 2 /2, és közvetlen számolással a gömb felszínén

                                          1       9 cos2 θ − 5
                                      ∆p = ρ0 U 2
                                          2            4

adódik. A gömbre ható eredő erő eltűnik; nincs ellenállási erő.
112 4. Folytonos közegek mechanikája

Megjegyzés. D’Alembert-paradoxon az a tény, hogy stacionárius potenciáláramlásban az ellenállási erő általában eltűnik. Ezt fent láttuk, és általánosan is be tudjuk bizonyítani. A testre ható ellenállási erő
                                     I                I
                                                  1
                                  F=      p dS = − ρ0 v 2 dS
                                       S          2     S

ahol Bernoulli tételét használtuk, S pedig a test felszíne. Az egyenletes p0 nyomáshoz tartozó tag integrálja eltűnik, a gravitációs potenciált pedig elhanyagoltuk, mivel az csak a felhajtóerőt adja. Az integrál kiértékeléséhez a divergenciatételt a következő alakban használjuk:
                                     Z                 I
                                        (∇T ) dV = − T dS
                                           V                  S
ahol V az S-en kívüli térfogat. Indexes jelölésre áttérve:
                                     I                 Z
                                  1                1
                          Fi = − ρ0 vj vj dSi = ρ0        ∂i (vj vj ) dV.
                                  2                2    V

Most használjuk, hogy v divergenciája és rotációja is eltűnik, így
                              ∂i (vj vj ) = 2vj ∂i vj = 2vj ∂j vi = 2∂j (vj vi ).

Ezután a divergenciatételt fordított irányban alkalmazva:
                                  Z                     I
                          Fi = ρ0   ∂j (vj vi ) dV = −ρ0 vj vi dSj = 0
                                       V                          S

mivel v · dS a felszínen mindenütt eltűnik. Felmerülhet, hogy a divergenciatétel az infinitezimális távoli határfelületén további tagot ad, de a sebességmező általában legalább 1/r3 szerint csökken, ezért ez nem járul hozzá.
   A paradoxon az, hogy egy A keresztmetszetű, v sebességgel álló folyadékon áthaladó test esetén az ellenállási erő a zérus viszkozitás határán valójában nem tűnik el, hanem ρ0 Av 2 nagyságrendű állandóhoz tart. Ennek többféle értelmezése van annak, miért hiányzik ez a potenciáláramlás megoldásából. Erők szempontjából bármely nemzérus viszkozitás határréteget hoz létre, ez pedig a test mögött olyan csóvát kelt, amelyben a nyomás az elöl lévőnél kisebb, és így ellenállási erő lép fel. Megmaradó mennyiségek szempontjából az ellenállás azért jelenik meg, mert a test impulzust ad a kezdetben nyugalomban lévő folyadéknak, hogy az kitérjen előle. A potenciáláramlás megoldásában ez nem történik meg, mert a folyadék már megfelelően együtt mozog a testtel, a folyadék teljes impulzusa viszont végtelen, ezért ez a helyzet fizikailag nem valóságos.
Megjegyzés. Az együttmozgó derivált skalárokon egybeesik a Lie-deriválttal:
                                               D    ∂
                                                  =    + Lv ,
                                               Dt   ∂t
és egy u skalár, amely egyszerűen együtt áramlik a sebességmezővel, Du/dt = 0-t teljesít. Hasonlóan, általános tenzorokra módosított együttmozgó deriváltat definiálhatunk:
                                               D̃    ∂
                                                   =    + Lv
                                               D̃t   ∂t
amely eltűnik, ha a tenzort a sebességmező mentén Lie-transzportáljuk. Vektormező esetén:
                                   D̃u   ∂u
                                       =    + (v · ∇)u − (u · ∇)v.
                                   D̃t   ∂t
113 4. Folytonos közegek mechanikája

Az örvényesség mozgásegyenletéből és a rotáció szorzatszabályából kiindulva megmutatható, hogy D̃ω/D̃t = 0, ami konkrétan azt jelenti, hogy az örvényvonalakat magával viszi az áramlás. Intuitívan ennek az az oka, hogy az örvényesség a perdület lokális mértéke, és egy folyadékelem perdülete viszkozitás hiányában nem változhat. Továbbá tudjuk, hogy az örvényvonalak nem metszhetik egymást, és zárt hurkokat alkotnak, amint ez a füstkarikák mozgásán is látható. Figyelemre méltó, hogy a 19. század végén ezeket az eredményeket egy „mindenre kiterjedő örvényelmélet” alapjaként használták. Ebben az elméletben — amely az Egyesült Királyság legnagyobb fizikusai között népszerű volt — a különböző atomfajták az éter ideális folyadékot alkotó örvényvonalainak topológiailag különböző csomói. Bár az elmélet nem tudott sok mindent megmagyarázni a kémiából, fontos történeti öröksége van. Például a cambridge-i elméleti fizikai tanszéken többen foglalkoznak folyadékdinamikával, mint nagyenergiás fizikával vagy relativitáselmélettel.

4.4     Összenyomható áramlás
Most ideális folyadékok összenyomható áramlását vizsgáljuk. Ebben az esetben a hangsebesség véges, ezért a hanghullámok tárgyalásával kell kezdenünk.

  • A gravitációt elhanyagolva az Euler-egyenletek most
                              ∂v                ∇p         ∂ρ
                                 + (v · ∇)v = −    ,          + ∇ · (ρv) = 0.
                              ∂t                ρ          ∂t

  • Kis amplitúdójú hanghullám esetén ρ = ρ0 + ∆ρ és p = p0 + ∆p. Ekkor v/c hasonlóan kicsi, ezért az advekciós tagot elhanyagolhatjuk. Legalacsonyabb rendben:
                                 ∂v    1                 ∂(∆ρ)
                                    = − ∇(∆p),                 = −ρ0 ∇ · v
                                 ∂t    ρ0                  ∂t
      amelyből
                                            ∂ 2 (∆ρ)
                                                     = ∇2 (∆p)
                                               ∂t2
      adódik.

  • Barotróp állapotegyenletű folyadékra p = p(ρ), ezért
                                                          ∆ρ
                                                ∆p = K0
                                                          ρ0
      ami a hullámegyenlethez vezet:
                                                                s          s
                               ∂ 2 (∆ρ)                             ∆p         K0
                                        = c20 ∇2 (δρ),   c0 =          =          .
                                  ∂t2                               ∆ρ         ρ0

  • Speciálisan izentrópikus ideális gázra K0 = γp0, és
                                              r         s
                                                 γp0      γRT0
                                         c0 =         =
                                                  ρ0        µ

      ahol µ a moláris tömeg. Az izoterm hangsebesség γ = 1 esetén adódik.

114 4. Folytonos közegek mechanikája

 • Ha a sűrűségváltozás alakja
                                         ∆ρ = ρ1 sin(kx − ωt),
    akkor a sebességmező
                                                                           ρ1
                                   vx = v1 sin(kx − ωt),      v1 = c0         .
                                                                           ρ0
    Ez megerősíti korábbi állításunkat, hogy v/c és ∆ρ/ρ azonos rendű. Vegyük észre azt is, hogy
                                         |(v · ∇)v|  kv 2 v1
                                                    ∼ 1 =
                                          |∂v/∂t|    ωv1  c0
    ezért az advekciós tag legalacsonyabb rendben nem járul hozzá, igazolva a fenti elhanyagolást. A gravitációt is elhanyagoltuk, ami akkor jó közelítés, ha g ≪ ωc.

Ezután stacionárius összenyomható áramlást vizsgálunk.

 • Ebben az esetben az Euler-egyenletek erre egyszerűsödnek:
                                                    ∇p
                                   (v · ∇)v = −        ,   ∇ · (ρv) = 0.
                                                    ρ
   Az egyszerűség kedvéért barotróp állapotegyenletet feltételezünk. A lokális Mach-szám M = |v|/c.

 • Az Euler-egyenleteket kombinálhatjuk úgy, hogy csak a sebesség szerepeljen. A kontinuitási egyenlet szerint
                                          1             1
                                 ∇ · v = − (v · ∇)ρ = − 2 (v · ∇)p
                                          ρ            ρc
    ahol a hangsebesség definícióját használtuk. Az Euler-egyenletet alkalmazva
                                                     v · (v · ∇)v
                                          ∇·v =                   .
                                                          c2

 • A számlálóra alkalmazott Cauchy–Schwarz-egyenlőtlenségből
                                                      sX
                                     2
                          |∇ · v| ≤ M |∇v|, |∇v| =         (∇i vj )2 .
                                                                      ij

    következik. Ez mutatja, hogy M ≪ 1 esetén a divergencia ∇ · v kicsi, ezért az áramlás összenyomhatatlanként kezelhető. A gyakorlatban ez M ≲ 0.3 esetén ésszerű feltevés.

 • Az összenyomhatatlan esettel analóg levezetésből a Bernoulli-mező
                                            1
                                         H = v 2 + Φ + w(p)
                                            2
    ahol a teljesség kedvéért a gravitációs potenciált Φ is szerepeltetjük, a nyomás-potenciál pedig w(p) = ∫ dp/ρ. Izentrópikus ideális gázra
                                                              γ R
                                        w = cp T,     cp =
                                                             γ−1 µ
    ahol µ a moláris tömeg.

115 4. Folytonos közegek mechanikája

  • Általában egy ideális folyadékban mozgó test előtt van egy stagnálási pont, ahol a folyadék a testhez képest nyugalomban van. Mögötte is legalább egy ilyen pont található, de a test mögött az örvényképződés és turbulencia miatt az áramlás gyakorlatban nem stacionárius, ezért Bernoulli tétele ott nem alkalmazható.

  • Bernoulli tétele lehetővé teszi a hőmérséklet meghatározását az elülső stagnálási pontban:
                                             1 2
                                               v + cp T = cp T0 .
                                             2
    Izentrópikus ideális gáz esetén ebből
                                             T0     γ−1 2
                                                =1+    M
                                             T       2
    adódik, ahol M a kezdeti pont áramlásának Mach-száma. Izentrópikus áramlást feltételezve p ∝ ργ, amiből
                                 γ/(γ−1)               1/(γ−1)
                           p       T              ρ        T
                              =               ,      =               .
                           p0     T0              ρ0      T0
    Nagy sebességeknél a hőmérséklet növekedése jelentős. A gyakorlatban emiatt a gáz plazmává disszociálhat, ami megváltoztatja a moláris tömeget, µ-t, és így az eredményt is.

  • A hangsebességi pont olyan pont, ahol M = 1. Bernoulli tételét egy hangsebességi pont és egy stagnálási pont között alkalmazva
                                            T1      2
                                               =
                                            T0    γ−1
    adódik, amit az előző eredménnyel összevetve a lokális hőmérsékletet a hangsebességi pont hőmérsékletével kifejezve kapjuk:
                                                            −1
                                 T           γ−1      2
                                    = 1+           (M − 1)        .
                                 T1          γ+1
