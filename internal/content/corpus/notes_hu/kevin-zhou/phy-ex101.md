---
id: kevin-zhou-notes-phy-ex101
source: kevin-zhou-notes
native_id: "phy Example 101"
origin: "Kevin Zhou personal physics notes"
language: hu
translated: true
links_en: kevin-zhou-notes-phy-ex101
topic: [kvantumfizika]
subtopic: [Green-függvények, szórás]
math_tools: [komplex-analízis, differenciálegyenletek, spektrális-felbontás]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "14589-14780"
archive_layer: reference_notes
source_role: explanatory_example
---
Példa. Időfüggetlen Hamilton-operátor esetén a t és t′ argumentumokat egyetlen t argumentummal helyettesítjük, amely az
időkülönbséget jelöli. Például háromdimenziós szabad részecskére

                                                          i m(x − x′ )2
                                            m  3/2
                                  ′
                          K0 (x, x , t) =           exp
                                           2πiℏt          ℏ     2t

ahogy azt az útintegrálokról szóló szakaszban találtuk.

Ezután energiafüggő Green-függvényekre térünk át, amelyek lényegében az időfüggő Green-függvények Fourier-transzformáltjai.

 • A nemhomogén, időfüggetlen Schrödinger-egyenletet vizsgáljuk:

                                           (E − H)ψ(x) = S(x)

    ahol H időfüggetlen Hamilton-operátor. Az energiafüggő G(x, x′ , E) Green-függvény ezt az egyenletet E energiával és
    δ(x − x′ ) forrással teljesíti.

 • Energiafüggő Green-függvény birtokában az általános megoldás
                                            Z
                            ψ(x) = ψh (x) + dx G(x, x′ , E)S(x′ ).

    Vegyük észre, hogy a homogén ψh (x) megoldás egyszerűen egy E energiájú stacionárius állapot.

 • Az energiafüggő Green-függvényeket a következőképpen képzelhetjük el. Egy véges területű tavat tekintünk, amely t < 0
   esetén nyugodt. t = 0-kor elkezdjük az x′ pontot E frekvenciával szinuszosan gerjeszteni. Hosszú idő után a kezdeti
   tranziensek disszipáció miatt lecsengenek, és a felszín szinuszosan oszcilláló állandósult állapothoz közelít; ez a
   G(x, x′ , E) Green-függvény.

 • Ha pontosan a tó egyik sajátfrekvenciáján gerjesztünk, a megfelelő sajátmódus amplitúdója nagy, és a disszipáció ϵ → 0
   esetén végtelenhez tart, ezért a Green-függvény disszipáció nélkül nem létezik.

 • Végül folytonos spektrum sajátfrekvenciáján történő gerjesztést is tekinthetünk. Ez csak végtelen tóban valósítható meg,
   mivel a hozzá tartozó sajátmódusok nem korlátosak. 1/ϵ méretű hullámteret kapunk, amelyben az energia folyamatosan
   kisugárzik az x′ gerjesztési pontból. Az ϵ → 0 határban a hullámtér végtelenné válik, és azt látjuk, hogy az energia a
   végtelenbe szállítódik. Ez a hullámminta azonban nem sajátfüggvény, mert a sajátfüggvényeknek bármely zárt határon át
   nulla nettó energiafluxusuk van.

 • Az energiafüggő Green-függvényt operátorként is felírhatjuk:

                           G(x, x′ , E) = ⟨x|Ĝ(E)|x′ ⟩,          (E − H)Ĝ(E) = 1.

    Naivan Ĝ(E) = 1/(E − H) lenne a megoldás, de ez általában nincs jól definiálva. A szokásos módon a kétértelműség a
    határfeltételek megválasztásának szabadságából származik.

 • Megjegyezzük, hogy nem különböztetjük meg expliciten a Hilbert-térre ható H operátort és H koordinátás alakját, amely
   hullámfüggvényekre ható differenciáloperátor.

Ezután gondosan definiáljuk az energiafüggő Green-operátorokat.

 • Első kísérletként definiáljuk
                                                     Z ∞
                                                1
                                     Ĝ+ (E) =              dt eiEt/ℏ K̂+ (t).
                                               iℏ      −∞

    Ekkor
                                                                                      ei(E−H)t/ℏ ∞
                              Z ∞                           Z ∞
                          1            iEt/ℏ            1
               Ĝ+ (E) =            dt e       U (t) =            dt ei(E−H)t/ℏ = −
                         iℏ   0                        iℏ   0                           E−H 0

    ahol az operátorok minden függvényét hatványsorral definiáljuk. Ĝ+ (E) akkor lenne Green-operátor, ha elhanyagolhatnánk
    az integrál felső határát.

 • A fenti probléma abból ered, hogy a Schrödinger-egyenletnek nincs csillapítása, így a kezdeti tranziensek soha nem
   csengenek le. Ehelyett H → H − iϵ helyettesítést végzünk, ami exponenciális lecsengést ad, vagy ekvivalensen
   E → E + iϵ-et. Általában definiálhatjuk
                                            1 ∞ izt/ℏ
                                             Z
                                                                1
                                 Ĝ+ (z) =        e    U (t) =
                                           iℏ 0                z−H
   bármely z = E + iϵ, ϵ > 0 esetén.

 • Im z > 0 esetén a Green-operátornak teljes sajátfüggvényrendszere van (mivel H-nak is van), bár nem hermitikus.
   Ráadásul egyik sajátérték sem nulla, mert mindegyiknek nemzérus képzetes része van. Így a z − H inverze létezik és
   egyértelmű. (A finom matematikai kérdéseket, például a nemnormálható sajátfüggvényeket figyelmen kívül hagyjuk.)

 • Tegyük fel, hogy H-nak negatív En energiájú diszkrét spektruma és pozitív E energiájú folytonos spektruma van, ahogy
   szórási feladatokban tipikusan:

                                H|nα⟩ = En |nα⟩,         H|Eα⟩ = E|Eα⟩.

   A szokásos normálással az egységoperátor felbontása
                                X               Z ∞      X
                            1=      |nα⟩⟨nα| +       dE     |Eα⟩⟨Eα|.
                                    nα               0        α

   Ezért a Green-operátor felírható:
                                         X |nα⟩⟨nα|       Z ∞      X |E ′ α⟩⟨E ′ α|
                                 1
             Ĝ+ (E + iϵ) =            =                +     dE ′                  .
                            E + iϵ − H   nα
                                            E + iϵ − En    0       α
                                                                     E + iϵ − E ′

 • A fenti kifejezésből arra következtetünk, hogy Ĝ+ (E + iϵ) jól definiált a felső félsíkban, de az ϵ → 0 határban
   szingulárissá válhat. Definiáljuk

                                         Ĝ+ (E) = lim Ĝ+ (E + iϵ)
                                                   ϵ→0

   ahol a jobb oldalt gyakran Ĝ+ (E + i0) alakban írják. Ha E nem sajátérték, akkor a fenti felbontás szerint a határérték
   létezik. Ha E diszkrét sajátérték, a határérték szinguláris, és a Green-függvény nem létezik. Végül E > 0 esetén a fenti
   integrandus divergál, bár mint később egy példában megmutatjuk, az integrál határértéke létezik. Mindez tökéletesen analóg
   a fenti vízhullámokkal.

 • Ha Ĝ+ (E) jól definiált, akkor Green-operátor, mivel
                                                          1
          (E − H)Ĝ+ (E) = lim (E + iϵ − H − iϵ)                = lim (1 − iϵĜ(E + iϵ)) = 1.
                             ϵ→0                     E + iϵ − H   ϵ→0

 • Hasonlóan definiáljuk a bejövő, energiafüggő Green-operátort:

                                            1 0 izt/ℏ
                                             Z
                                                               1
                               Ĝ− (z) = −       e    U (t) =
                                           iℏ −∞              z−H

   ahol most z = E − iϵ. Az alsó félsíkban definiált, és ϵ → 0 esetén Ĝ− (E)-hez tart, ahol a határérték jól definiált,
   ha E egyik En-nel sem egyenlő.

 • A vízhullámos hasonlatban itt „anti-csillapítás” van, és a gerjesztés folyamatosan energiát nyel el. E < 0 esetén ez
   nem számít az ϵ → 0 határban, ahol a gerjesztés nulla energiát nyel el. Folytonos E > 0 sajátfrekvencia esetén azonban
   a gerjesztés még ϵ → 0 esetén is folyamatosan energiát nyel el, mert „a végtelenből jön”, ahogyan a kimenő esetben az
   energia folyamatosan kisugárzik.

 • Vegyük észre, hogy mivel Ĝ± definíciójában az iϵ kivételével minden valós, Ĝ± egymás hermitikus konjugáltjai.

A fenti vízhullámos intuícióval analitikusan is megérthetjük a Green-operátorokat.

 • Definiáljuk a Green-operátorok különbségét:

              ˆ
                        h                           i                        1            1
              ∆(E) = lim Ĝ+ (E + iϵ) − Ĝ− (E − iϵ) = lim                         −                     .
                      ϵ→0                                         ϵ→0   E + iϵ − H   E − iϵ − H

 • Ezt a határértéket közönséges számokkal könnyebb megérteni:

                          1             1                  −2iϵ
               lim               −               = lim                 = −2πiδ(x − x0 ).
               ϵ→0 x − x0 + iϵ     x − x0 − iϵ     ϵ→0 (x − x0 )2 + ϵ2

    Ezért
                                               ˆ
                                               ∆(E) = −2πiδ(E − H).
    A jobb oldali operátort minden sajátvektoron külön definiáljuk: H E0 sajátértékű sajátvektora δ(E − E0 ) sajátértékű
    sajátvektorrá válik. Explicit alakban
                           X                        Z ∞      X
               δ(E − H) =     |nα⟩⟨nα|δ(E − En ) +      dE ′   |E ′ α⟩⟨E ′ α|δ(E − E ′ ).
                                 nα                           0          α

                ˆ
    Látjuk, hogy ∆(E) nulla, ha E nem sajátérték, divergál, ha E = En , és véges
                    ˆ
    E > 0 esetén, ahol ∆(E)
                                 P
                          = −2πi α |Eα⟩⟨Eα|.

 • Ezért Ĝ− (z) a Ĝ+ (z) analitikus folytatása a diszkrét sajátértékek közötti hézagokon keresztül; mindkettő ugyanahhoz
   a rezolvensnek nevezett analitikus függvényhez tartozik:
                                                              1
                                                   Ĝ(z) =
                                                             z−H
    amely H sajátértékeitől eltérő minden z-re definiált. A rezolvensnek minden diszkrét sajátértéknél pólusa, a folytonos
    sajátértékek mentén pedig elágazási vágása van.

 • Ĝ+ (z)-t a pozitív valós tengelyen analitikusan folytathatjuk, „félretolva” az elágazási vágást, hogy elérjük a rezolvens
   második Riemann-lemezét. Ekkor további szingularitásokkal találkozhatunk az alsó félsíkban; ezek rezonanciáknak felelnek
   meg (például hosszú életű kötött állapotoknak). (Ehhez jó példát kell találni!)
