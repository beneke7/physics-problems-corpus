---
id: kevin-zhou-notes-phy-ex063
source: kevin-zhou-notes
native_id: "phy Example 063"
origin: "Kevin Zhou personal physics notes"
language: hu
translated: true
links_en: kevin-zhou-notes-phy-ex063
topic: [kvantumfizika]
subtopic: [gyenge vonzó potenciál, kötött állapotok, hullámmechanika]
math_tools: [differenciálegyenletek, integrálás]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "7010-7172"
archive_layer: reference_notes
source_role: explanatory_example
---

Példa. Tegyük fel, hogy egy részecske a gV (x) vonzó, rövid hatótávolságú potenciálban van. Mi
történik a kötöttállapot-energiákkal, amikor a potenciál nagyon gyengévé válik, g → 0? Általában
egy vonzó potenciál gyengülésével a kötött állapotok száma csökken, de egy kötött állapot mindig
megmarad, amint azt később a variációs elvvel be fogjuk bizonyítani.
   Tegyük fel most, hogy már csak egyetlen kötött állapot maradt, −E0 energiával. Itt az a zavaró,
hogy E0 és gV is csökkennie kell, amikor g → 0, tehát mit jelenthet az, hogy a potenciál gyenge?
Ennek megértéséhez vegyük észre, hogy amikor a potenciál erős, uralja a Schrödinger-egyenletet. A
kötöttállapot-hullámfüggvényeknek részletesen követniük kell a potenciál hullámzásait: gyorsan
oszcillálnak, amikor a potenciál E0 fölé kerül, és gyorsan nőnek vagy csökkennek, amikor E0 alá kerül.
Ezért a g → 0 ellentétes határesete azt jelenti, hogy a hullámfüggvény lassan változik a potenciál
hatótávolságán belül, így a potenciál delta-függvénnyel közelíthető:
                                               Z ∞
                               gV (x) → gδ(x)       V (x) dx = g ′ δ(x).
                                                −∞

Másképpen fogalmazva, a potenciál a céljainkra pontosan akkor rövid hatótávolságú, ha ez az
integrál létezik. A Schrödinger-egyenlet megoldása delta-függvényre egyszerű. Mindkét oldalon
lecsengő exponenciálisnak kell lennie:
                                           ( √
                                             e 2mE x/ℏ    x<0
                                  ψ(x) ∝      −
                                                √
                                                  2mE x/ℏ
                                                                .
                                             e            x>0

A delta-függvény az origóban megváltoztatja a meredekséget, g ′ ψ(0) = (ℏ2 /2m)∆ψ ′, amiből
                                                Z ∞             2
                                        g2m
                                   E0 =                V (x) dx .
                                        2ℏ2       −∞

Megjegyzés. A valószínűségi sűrűség és az áram
                                          1
                          ρ = |ψ|2 ,   J = (ψ ∗ vψ + ψvψ ∗ ) = Re(ψ ∗ vψ)
                                          2
ahol a sebességoperátort általában a Hamilton-egyenletek definiálják:
                                                   ∂H
                                              v=      .
                                                   ∂p

Egyszerű esetekben, amikor a kinetikus tag p2 /2m, ebből következik

                                                 p    iℏ
                                            v=     = − ∇.
                                                 m    m
A valószínűségi sűrűség és az áram kielégíti a kontinuitási egyenletet:
                                            ∂ρ
                                               + ∇ · J = 0.
                                            ∂t
Különösen vegyük észre, hogy energia-sajátfüggvény esetén J azonosan zérus, mivel az sajátfüggvény
valósnak választható. Mágneses tér jelenlétében viszont v = (p − qA)/m.
   A ρ és J fizikai értelmezése azonban finom kérdés. Tegyük fel például, hogy megszorozzuk őket a
részecske q töltésével, és formális töltéssűrűségeket és áramokat kapunk. Nem igaz, hogy egy részecske
eρ töltéssűrűségű és eJ áramsűrűségű elektromágneses teret kelt. Egy x helyen lévő részecske
elektromos tere
                                                  q(r − x)
                                         Ex (r) =          .
                                                  |r − x|3
Ezért E tökéletes megmérése az x részecskehely tökéletes megmérése. Így a hidrogénatom esetén nem
egy nagy távolságban exponenciálisan kicsi elektromos teret mérnénk, hanem dipólusteret! A rendszer
állapota nem |ψ⟩ ⊗ Eρ, hanem inkább egy ilyen összefonódott állapot:
                                           Z
                                             dx |x⟩ ⊗ |Ex ⟩

ahol csak az elektrosztatikus teret vesszük figyelembe. E hibák elkerülésére jobb úgy gondolni a
hullámfüggvényre, mint részecskék együttesének leírására, nem pedig egyetlen „szétterült” részecske
leírására. (Ha azonban a mérés hosszabb ideig tart, mint az elektron jellemző keringési ideje, akkor
csak a qJ által létrehozott átlagos teret látjuk.)

Most a várható értékek néhány azonosságát vizsgáljuk; ezeket általában Ehrenfest-relációknak nevezik.

  • Amint később részletesebben látni fogjuk, a Heisenberg-képben az operátorok a Heisenberg-
    mozgásegyenlet szerint fejlődnek:
                                            dA                  ∂A
                                       iℏ      = [A, H(t)] + iℏ
                                            dt                  ∂t
    ahol ∂A/∂t az operátor Schrödinger-képben bekövetkező változását írja le. Ez a legegyszerűbb módja
    annak, hogy kvantumos eredményeinket a klasszikus mechanikához kapcsoljuk, mivel Hamilton-
    egyenleteknek látszik.

  • Mindkét oldal várható értékét véve olyan eredményt kapunk, amely független a képtől:

                                  d        i                 ∂A
                                     ⟨A⟩ = ⟨[H(t), A]⟩ +           .
                                  dt       ℏ                  ∂t

    Például ha A állandó operátor, amely a rendszer szimmetriáját írja le, [A, H(t)] = 0. Ekkor a
    várható értéke állandó. A klasszikus határesetben A eloszlása általában élesen csúcsosra választható,
    így e várható érték határozott klasszikus értékké válik, és visszakapjuk a megmaradási törvény
    klasszikus fogalmát.


  • Általában Ehrenfest-relációnak nevezünk egy olyan kvantumos várhatóérték-relációt, amely egy
    klasszikus eredménynek felel meg. Egyetlen, p2 /2m + V (x) Hamilton-operátorú részecskére például
    a Heisenberg-mozgásegyenletek:
                                        i        p                  i
                                  ẋ = − [x, H] = ,           ṗ = − [p, H].
                                        ℏ        m                  ℏ
    A várható értékeket véve az Ehrenfest-relációk

                           d⟨x⟩   ⟨p⟩       d⟨p⟩                        d2 ⟨x⟩
                                =     ,          = −⟨∇V ⟩,          m          = −⟨∇V ⟩
                            dt     m         dt                          dt2
    amelyek pontosan teljesülnek.

  • Ha a részecske jól lokalizált, akkor ⟨∇V ⟩ helyett ∇V (⟨x⟩, t) írható, amiből következik, hogy
    ⟨x⟩ a klasszikus mozgásegyenleteket teljesíti. Ez az eredmény valójában a klasszikus határesetnél
    általánosabban is érvényes. ⟨∇V ⟩ helyett ∇V (⟨x⟩, t) pontosan akkor írhatunk, ha ∇V legfeljebb
    lineáris x-ben, és ezért pontos, ha V legfeljebb másodfokú x-ben.

  • Így ⟨x⟩ egy harmonikus potenciálban vagy gravitációs térben lévő részecske, egy homogén
    elektromos térben lévő töltött részecske, illetve lineárisan változó mágneses térben lévő,
    mágneses momentummal rendelkező semleges részecske klasszikus mozgásegyenleteit teljesíti
    (mint a Stern–Gerlach-kísérletben). Ez akkor is igaz marad, ha a Hamilton-operátor p-ben és
    x-ben együttesen legfeljebb másodfokú, vagyis homogén mágneses térben mozgó töltött részecskére
    is érvényes.

  • Az A = xp választással egy V (x) potenciálban, T = p2 /2m kinetikus energiájú részecskére
                                          d
                                             ⟨xp⟩ = 2⟨T ⟩ − ⟨r · ∇V ⟩.
                                          dt
    Stacionárius állapotban a bal oldal eltűnik, így megkapjuk a kvantumos virieltételt.

  • Hatványfüggvény-potenciálra, V (x) ∝ rn, ez a következőre egyszerűsödik:
                                                          n
                                                 ⟨T ⟩ =     ⟨V ⟩.
                                                          2
    Ez ésszerű, klasszikusan is várt eredményt ad a harmonikus oszcillátorra (n = 2) és a Coulomb-
    potenciálra (n = −1).

Megjegyzés. A klasszikus mechanikához hasonlóan a virieltétel alkalmazásának is vannak buktatói,
mert meg kell győződnünk arról, hogy megfelelő stacionárius állapotban vagyunk. Taszító Coulomb-
potenciál esetén például azt a képtelen eredményt kapjuk, hogy ⟨T ⟩ és ⟨V ⟩ ellentétes előjelű,
noha a potenciál mindenütt pozitív. Ez azért van, mert ennek a potenciálnak nincsenek kötött állapotai,
és a nem kötött állapotokban ⟨xp⟩ még csak nincs is definiálva. Egy másik példa a vonzó Coulomb-
potenciál egy térdimenzióban. Itt nincs perdületgát, ami azt jelenti, hogy a részecske „egészen
beeshet”, végtelenül negatív potenciálenergiáig, így a várható értékek szingulárissá válnak. A
potenciálgödröt megfelelően regularizálni kell, ami után a virieltétel alkalmazhatatlanná válik.
A kötött állapotok pontos természete látszólag érzékenyen függ a regularizálás módjától, ami folyamatos
vitához vezet az irodalomban; ezt a rendszert „egydimenziós hidrogénatomnak” nevezik.
    Az egy dimenzióban −a/x2 alakú potenciálra a virieltétel ⟨T ⟩ + ⟨V ⟩ = 0-t ad, ami látszólag
azt sugallja, hogy nincsenek kötött állapotok. Ha azonban a elég nagy, a negatív teljes energiájú,
időfüggetlen Schrödinger-egyenletet kielégítő megoldások léteznek; csak túl vadul viselkednek x → 0
esetén, ezért ⟨xp⟩ nincs definiálva. De ahogy itt részletesen le van írva, ennél mélyebb kóros
jelenségek is fellépnek: egy ilyen potenciálban a Schrödinger-egyenletnek nincsenek hossz- vagy
energiadimenziós paraméterei! Ez a szimmetria negatív energiájú állapotok folytonos sokaságát jelenti,
amelyek skálázással kapcsolódnak egymáshoz, és tetszőlegesen kis teljes energiát érnek el. Nincs
alapállapot, és mindegyik kötött állapotnak végtelen sok csomópontja van.
   Ez a kórkép minden dimenzióban fellép, ha a potenciál elég erős, mivel d > 1 dimenzióban a
perdületgát szintén 1/r2-tel arányos, és hozzáadása csak az a együtthatót tolja el. Az egydimenziós
Coulomb-potenciálhoz hasonlóan a potenciált regularizálni kell, hogy ésszerű eredményeket kapjunk.
Bármely regulátor megtöri a skálaszimmetriát, és így meghatároz egy skálát az alapállapot energiájához
(amely teljesen szokásos, csomópont nélküli), egyszerű példát adva egy anomáliára. Ha a regularizálás
megvan, az obszervábilis mennyiségeket problémamentesen kiszámíthatjuk. Bár például az alapállapot
energiáját nem tudjuk megjósolni, levezethetünk kapcsolatot az alapállapot energiája és a szórási
fáziseltolás között, ami a renormálás egyszerű példája.
