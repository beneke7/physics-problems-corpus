---
id: kevin-zhou-notes-phy-ex082
source: kevin-zhou-notes
native_id: "phy Example 082"
origin: "Kevin Zhou personal physics notes"
language: hu
translated: true
links_en: kevin-zhou-notes-phy-ex082
topic: [kvantumfizika]
subtopic: [atom- és molekulafizika]
math_tools: [dimenzióanalízis, differenciálegyenletek, gömbi-koordináták]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "9691-10053"
archive_layer: reference_notes
source_role: explanatory_example
---
Példa. A merev rotor. Tekintsünk két, m1 és m2 tömegű részecskét, amelyeket egy tömeg nélküli, merev,
r0 hosszúságú rúd köt össze. A Hamilton-operátor
                                               L2
                                          H=      , I = µr02 .
                                               2I
Mivel az r0 hossz rögzített, nincs radiális függés; a megoldás egyszerűen

                                    l(l + 1)ℏ2
                             El =              ,   ψlm (θ, ϕ) = Ylm (θ, ϕ).
                                       2µr02
Ez a centrális erőtér problémájának speciális eseteként is felfogható, szinguláris potenciállal.

Megjegyzés. A rejtett szimmetria egy másik, hétköznapibb példája a kétdimenziós végtelen mély
négyzetes potenciálgödör. Az energia-sajátállapotokat egész számokkal indexelt |n1 , n2 ⟩ állapotok
paraméterezi, az energia pedig arányos az n21 + n22 összeggel, ezért a legtöbb energiaszint kétszeresen
degenerált. A rendszernek nyilvánvalóan megvan a négyzet geometriai szimmetriája, és a hozzá tartozó
diszkrét C4v szimmetriacsoportnak vannak kétdimenziós irrepei. A degenerált |n1 , n2 ⟩ ± |n2 , n1 ⟩
állapotpárok többsége azonban különálló, egydimenziós irrepekben van, így a degeneráció magyarázatához
további szimmetriára van szükség.
    A szükséges további szimmetria „dinamikai”, abban az értelemben, hogy a geometriából nem nyilvánvaló,
hanem csak véletlenül marad meg a dinamika során. Megjegyezzük, hogy amikor egy részecske a falaknak
ütközik, px vagy py előjelet vált. (Itt eltekintünk az ezen operátorok szigorú definiálásával kapcsolatos
nehézségektől.) Ezért p2x és p2y külön-külön is megmarad. Összegük maga a Hamilton-operátor, de a
p2x − p2y különbség független szimmetriagenerátor, így a szimmetriacsoport U (1) ⋊ C4v . Mivel ez az
új operátor összekapcsolja a |n1 , n2 ⟩ + |n2 , n1 ⟩ és a |n1 , n2 ⟩ − |n2 , n1 ⟩ állapotokat, megmagyarázza
a fennmaradó degenerációt.
    Egy másik példa az n dimenziós harmonikus oszcillátor, amely hatalmas állapotdegenerációjú centrális
erőterű probléma. Ezt a degenerációt az
Fij = pi pj /(2m) + mω 2 xi xj /2
szimmetriagenerátor magyarázza, amelyet Fradkin-tenzornak is nevezünk.
    Vizsgálhatnánk összetettebb példákat is, de egy idő után ez üres matematikai játékká válik. Tegyük
fel például, hogy bármely elképzelhető problémában |n⟩ és |m⟩ „véletlenül” degenerált energia-sajátállapotok.
Ekkor mindig megmagyarázhatjuk ezt két „dinamikai” szimmetriagenerátor definiálásával, amelyek így hatnak:

                    Q1 |n⟩ = |m⟩,    Q1 |m⟩ = |n⟩,   Q2 |n⟩ = |n⟩,    Q2 |m⟩ = −|m⟩

és a többi állapoton triviálisan. Ezek az operátorok konstrukció szerint kommutálnak a Hamilton-operátorral,
és a {|n⟩, |m⟩} halmaz a megfelelő szimmetriacsoport kétdimenziós irpjét alkotja. Ezzel azonban nem
nyertünk új betekintést a problémába, hacsak Q1 és Q2 nem olyan operátorok, amelyek más okból is érdekelnek
bennünket.

Most kétatomos molekulákat vizsgálunk.

  • Egy tipikus kétatomos molekulában, például a CO-ban, a redukált tömeg néhány atomsúly nagyságrendű,
    ezért a forgási energiaszintek sokkal sűrűbben helyezkednek el, mint az atomi szintek. (Itt a két atomot
    pontszerű részecskének tekintjük; ezt a Born–Oppenheimer-közelítés indokolja, amely azért működik,
    mert az atomi szabadságfokok gyorsabbak, vagyis nagyobb energiájúak.) A két atom távolságának
    oszcillációi miatt rezgési szabadságfokok is vannak.

  • A rezgési mozgás energiaszintjeinek becsléséhez dimenzióanalízist végzünk az m, e és ℏ paramétereken,
    ahol m és e az elektron tömege és töltése; ez ésszerű, mivel a kötésért a vegyértékelektronok felelősek.
    A c-t nem használjuk, mert a helyzet nemrelativisztikus.

  • A következő egységeket kapjuk:

      – Ha relativisztikus korrekciókat is figyelembe veszünk, megjelenik egy dimenziótlan paraméter, a
        finomszerkezeti állandó. SI-egységekben ez
                                                     e2       1
                                              α=           ≈     .
                                                   4πϵ0 ℏc   137
         Gauss-egységekben ez e2 /ℏc-re egyszerűsödik. Atom- egységekben egyszerűen 1/c.

     – Hosszúság: a0 = ℏ2 /me2 ≈ 0.5 Å, a Bohr-sugár.
     – Energia: K0 = e2 /a0 = me4 /ℏ2 ≈ 27 eV, a Rydberg-állandó kétszerese.
     – Sebesség: v0 = e2 /ℏ = αc, ami igazolja, hogy a mozgás nemrelativisztikus.

    Atom- egységekben e = m = ℏ = 1-et választunk, így mindezen mennyiségek egységnyivé válnak,
    tehát c = 1/α ≈ 137.

 • A kétatomos kötést most a minimuma közelében harmonikus oszcillátorként becsüljük. Feltételezzük,
   hogy a kötés „rugóállandója” körülbelül megegyezik a vegyértékelektronok és saját atomjuk közötti kötés
   „rugóállandójával” (ami érthető, mivel a kötés kovalens), és a
                 √
   ω ∝ 1/ m összefüggést használva azt kapjuk, hogy                  r
                                               m
                                     ωvib =       ω0 , ω0 = K0 /ℏ
                                               M
    ahol M a redukált tömeg, azaz körülbelül 104 m. Ezért a rezgési energiaszintek távolsága mintegy
    százszor kisebb az elektronikus energiaszintek távolságánál, vagy ekvivalensen a kötési energiánál.

 • A forgási energiaszintek másképp függenek a paraméterektől:

                                         ℏ2    ℏ2     m
                               ∆Erot =      ∼     2 =   K0 ∼ 10−4 K0 .
                                         2I   M a0    M

    A forgási szintek egymástól újabb százszor kisebb távolságra vannak, mint a rezgési szintek.

 • Szobahőmérsékleten a forgási szintek gerjeszthetők, míg a rezgési szintek az érintett atomok tömegétől
   függően részben vagy teljesen befagynak.

Most a hidrogén klasszikus példáját vizsgáljuk.

 • Spin nélküli, elektrosztatikus, nemrelativisztikus modellt tekintünk. Általánosságban olyan, egy
   elektront tartalmazó atomokat vizsgálunk, amelyek rendszáma Z, ezért a potenciáljuk

                                                          Ze2
                                              V (r) = −       .
                                                           r
    Vegyük észre, hogy Gauss-egységeket használunk; SI-re áttéréshez az e2 → e2 /4πϵ0 helyettesítést
    kell alkalmazni.

 • A radiális Schrodinger-egyenlet

                                  ℏ2 d2 f         l(l + 1)ℏ2 Ze2

                                −         +                 −          f = Ef
                                  2µ dr2             2µr2     r

    ahol µ a redukált tömeg. Ebben a potenciálban a fenti atomi egységek módosulnak.

     – A jellemző távolság a = ℏ2 /meel enuc = a0 /Z, így nagyobb Z esetén az elektronok közelebb
       keringenek.
     – A jellemző energia K = eel enuc /a = Z 2 K0, így nagyobb Z esetén az energiák nagyobbak.
     – A jellemző sebesség v = eel enuc /ℏ = Zv0 = (Zα)c, ezért nehéz atommagok esetén a
       nemrelativisztikus közelítés felbomlik.

 • A hosszúságot a, az energiát K egységeiben mérve:

                               d2 f

                                          l(l + 1) 2
                                    +   −         +   + 2E   f = 0.
                               dr2           r2     r

   A spektrumban kötött és szabad állapotok is vannak. Kötött állapotokat keresve a radiális változót
   így módosítjuk:
                                          2r            1
                                     ρ= , ν= √
                                           ν           −2E
   amivel az egyenlet alakja

                                   d2 f

                                            l(l + 1) ν  1
                                        + −         + −     f = 0.
                                   dρ2         ρ2    ρ 4

 • Az egyenletet most standard módszerekkel oldhatjuk meg. Áttekintésként először a nagy ρ határesetet
   vesszük, hogy megtaláljuk a normálható megoldások aszimptotikus viselkedését, f ∝ e−ρ/2 . Tudjuk
   azt is, hogy kis ρ esetén R(r) ∝ rl, így f (r) ∝ rl+1. E két tényezőt leválasztva legyen

                                          f (ρ) = ρl+1 e−ρ/2 g(ρ)

   és a g-re egyszerű egyenletet kapunk:

                                  d2 g               dg
                              ρ      2
                                       + (2l + 2 − ρ) + (ν − l − 1)g = 0.
                                  dρ                 dρ

 • Ennek megoldásához a szokásos „Frobenius-módszert” használjuk, vagyis g(ρ)-t hatványsorba fejtjük,
   és rekurziós relációt kapunk az együtthatókra. Ha a sor nem áll meg, akkor eρ növekvő exponenciálisba
   összegződik, ami miatt f (ρ) divergál. A sor pontosan akkor áll meg, ha
                                          ν = n ∈ Z, l < n.
   Az n-t főkvantumszámnak nevezzük.

 • Ha a nem normálható megoldások érdekelnek bennünket, az egyik lehetőség f (ρ) = ρ−l e−ρ/2 h(ρ)
   leválasztása, majd h(ρ) hatványsorba fejtése. Ezt az motiválja, hogy a Laplace-egyenlet nem normálható
   megoldásai kis ρ esetén ρ−l−1 alakúak.

 • Az f megoldásai n-ed fokú polinom és az e−ρ/2 exponenciális szorzatai, az energiák pedig

                                              En = −1/2n2

   függetlenek l-től. Ezért minden n értékhez n2-szeres degeneráció tartozik, illetve a spint is beleszámítva
   2n2. A szokásos egységeket visszaállítva az energiák

                                                     Z 2 e4 m 1
                                            En = −
                                                       2ℏ2 n2
   alakúak, ahol m valójában a redukált tömeg, amely az elektron tömegétől 0,1%-nál kisebb mértékben
   tér el.

  • A radiális hullámfüggvények explicit alakja
                                           1                            1
                      R10 = 2e−r ,   R20 = √ (2 − r)e−r/2 ,       R21 = √ re−r/2
                                          2 2                          2 6
    és

          2               2 2 −r/3                2              2 2 −r/3                4
    R30 = √       3 − 2r + r e     ,       R31 = √           4r − r e     ,    R32 =     √ r2 e−r/3 .
         9 3              9                     27 6             3                     81 30
    Itt a = 1-et választottuk. Az a visszaállításához r helyett r/a-t írunk, és 1/a3/2 előfaktort adunk
    hozzá.

  • Az alábbi, több helyen hasznos eredményt kapjuk:
                                                         3/2
                                                        Z
                                          Rn0 (0) = 2
                                                        n
    atom- egységekben. Ez a mennyiség ℓ ̸= 0 esetén zérus a szögimpulzus-gát miatt.

  • Az l < n korlát klasszikusan is érthető. Egy rögzített energiájú (és így rögzített nagytengelyű)
    csillag körül keringő bolygónak van egy maximális lehetséges szögimpulzusa, amely bizonyos egységekben
    l ≈ n-nek felel meg, és körpályának felel meg. Az analóg kvantumállapotokban f (ρ) egyetlen érték
    körül csúcsosodik. A kis szögimpulzusú állapotok hosszú, keskeny ellipsziseknek felelnek meg, és a
    hozzájuk tartozó f (ρ) valóban messzebbre terjed ki, több csomóponttal.

Megjegyzés. Számos perturbáció felbontja az l szerinti degenerációt. Tekintsünk például egy alkáliatomot,
vagyis egy semleges atomot egy vegyértékelektronnal. A potenciál nagy távolságban −e2 /r, kis távolságban
pedig −Ze2 /r között interpolál, a többi elektron árnyékoló hatása miatt. A maghoz közel kerülő pályák
energiája csökken, és ez a kis l értékeknél erősebb. Nátriumnál ez a hatás a 3s állapot energiáját
jelentősen a 3p állapot energiája alá viszi. Általános atomokban ez okozza a pályák feltöltésének furcsa
sorrendjét az Aufbau-elvben.
    A gyakorlatban ezek az energiaszint-eltolódások empirikusan a következőképpen paraméterezhetők:
                                                Z 2 e4 m 1
                                      Enℓ = −
                                                  2ℏ (n − δℓ )2
                                                     2

ahol δℓ a kvantumdefektus, amely ℓ növekedésével gyorsan csökken, és nem függ n-től. Például a nátrium
elektronenergiái elég jól illeszthetők δs = 1.35, δp = 0.86, az összes többi értékre pedig nulla választásával.
Ennek oka, hogy rögzített ℓ mellett és Hartree–Fock-közelítésben az Enℓ energiasajátértékek egy rögzített,
1/r farokkal rendelkező radiális potenciálhoz tartoznak. A Bohr-modell levezetéséhez használthoz hasonló
korrespondenciaelv-érv szerint Enℓ ∝ 1/(n − δℓ )2 egész n-ekre, ha n ≫ 1. Ezért a kvantumdefektus kiválóan
paraméterezi egy Rydberg-atom energiaszintjeit, vagyis olyan atomét, amelyben az elektron n ≫ 1 állapotban
van. A Bohr-modellhez hasonlóan kiderül, hogy n ∼ 1 esetén is elfogadhatóan működik.
Az összehasonlítás kedvéért összefoglaljuk a speciális függvényekkel kapcsolatos tényeket és megjelenési
környezetüket.

  • A legáltalánosabb vizsgált egyenlet az időfüggetlen Schrodinger-egyenlet,

                                           −∇2 ψ + V ψ = Eψ

    amely a szokásos Schrodinger-egyenlet szétválasztásából származik. Csak a V = V (r) forgásszimmetrikus
    esetet vizsgáljuk.

 • Ha a hullámegyenletet szétválasztjuk, a térbeli rész a Helmholtz-egyenlet, amely a fenti V = 0 eset.
   Ha ezenfelül E = 0, akkor a Laplace-egyenletet kapjuk, amelynek megoldásai harmonikus függvények.
   Ezek a hullámegyenlet stacionárius megoldásait írják le.

 • Forrástagokat csak teljes PDE-khez érdemes hozzáadni, szétválasztott egyenletekhez nem, ezért nem
   adhatunk forrást az időfüggetlen Schrodinger-egyenlethez vagy a Helmholtz-egyenlethez. Ezzel szemben
   a Laplace-egyenlet tisztán térbeli, és egy forrástag hozzáadásával a Poisson-egyenletet kapjuk.

 • A rotációs szimmetria miatt az időfüggetlen Schrodinger-egyenlet radiális és szög szerinti részre
   válik szét. A szög szerinti megoldások az L2 sajátfüggvényei, a Laplace-operátor szög szerinti részének
   sajátfüggvényei, és gömbharmonikusoknak nevezzük őket.

     – A gömbharmonikusok, Yℓm (θ, ϕ), teljes bázist alkotnak a gömbön értelmezett függvények számára.
       Az ℓ mennyiség nemnegatív egész értékeket vehet fel.
     – Egy eimϕ tényező és egy Pℓm (cos θ) kapcsolt Legendre-függvény szorzatával arányosak.
     – Az m = 0 választás a Legendre-polinomokat adja, amelyek ortonormáltak a [−1, 1] intervallumon.
     – Általánosabban, a kapcsolt Legendre-függvények ortogonalitási relációkat elégítenek ki, amelyek az
       eimϕ-hez tartozó relációkkal együtt biztosítják a gömbharmonikusok ortogonalitását.
     – A gömbharmonikusok nem a gömb harmonikus függvényei. A gömb harmonikus függvényeinek L2 sajátértéke
       zérus, és az egyetlen ilyen függvény az állandó Y00 függvény.
     – Kétdimenziós esetben csak eimθ adódna.

 • A radiális egyenlet a V (r) potenciáltól és a teljes ℓ szögimpulzustól függ, amely centrifugális
   erőtaggal járul hozzá.

     – V = 0 esetén a megoldások a jℓ (r) és yℓ (r) gömbi Bessel-függvények. Ezeket első, illetve
       másodfajú Bessel-függvényeknek nevezzük; az utóbbiak szingulárisak r = 0-ban.
     – Nagy r esetén a Bessel-függvények 1/r amplitúdójú szinuszfüggvényekhez tartanak. Speciális esetként
       ℓ = 0-ra j0 (r) = sin(r)/r és y0 (r) = cos(r)/r adódik, visszakapva az izotróp gömbhullám ismert
       alakját.
     – Kétdimenziós esetben ehelyett a közönséges, vagyis hengeres Bessel-függvényeket kapnánk.
     – A (gömbi) Hankel-függvényeket Bessel-függvények lineáris kombinációiként definiáljuk úgy, hogy
       a végtelenben befelé és kifelé haladó hullámoknak feleljenek meg.
     – Coulomb-tér esetén a megoldások exponenciálisok és kapcsolt Laguerre-polinomok szorzatai.
       Ismét két megoldás van, exponenciális növekedéssel, illetve csökkenéssel, de kötött állapotokhoz
       csak a csökkenő megoldás releváns.

 • Eredményeink a Laplace-egyenletre is alkalmazhatók; ekkor a radiális egyenlet rℓ és 1/rℓ+1 alakú
   megoldásokat ad. Ezek a gömbi Bessel-függvények kis r-hez tartozó határértékei, mivel az origó közelében
   az Eψ energiatag elhanyagolható a centrifugális taghoz képest.

 • Alkalmazásként, ha ezt a felbontást az origó közelében lévő töltéseloszlás által létrehozott potenciálra
   alkalmazzuk, megkapjuk a multipólus-kifejtést; az ℓ = 0 a monopólusjárulékot, és így tovább.

7.5     Szögimpulzusok összeadása
Most a szögimpulzusok összeadását tárgyaljuk.

 • Tekintsünk két, J1 és J2 szögimpulzus-operátorral rendelkező Hilbert-teret. A tenzorszorzat-tér
   szögimpulzus-operátora

                                      J = J1 ⊗ 1 + 1 ⊗ J2 = J1 + J2 .

      A cél a közös rendszer |jm⟩ szögimpulzus-bázisának összekapcsolása a csatolatlan
      |j1 m1 ⟩ ⊗ |j2 m2 ⟩ = |j1 m1 j2 m2 ⟩ szögimpulzus-bázissal.

 • Elegendő két irrep tenzorszorzatát vizsgálni; konkrétan az 52 ⊗ 1 esetet tekintjük. A Jz sajátértéke
   egyszerűen m1 + m2, ezért a csatolatlan bázisállapotok m sajátértékei:



 • A csatolt szögimpulzus-bázis megtalálásához először az | 52 52 ⟩ ⊗ |11⟩ állapotot tekintjük, amelyre
   m = 7/2. Ez a Jz egy dimenziós sajáttere. Mivel Jz kommutál J 2-tel, J 2-nek is egy dimenziós
   sajáttere, tehát határozott j értéke van. Mivel nincs nagyobb m-jű állapot, j = 7/2 kell legyen, ezért
   | 25 52 11⟩ = | 72 27 ⟩.

 • Ezután a teljes lesüllyesztő operátort alkalmazva megkaphatjuk az | 72 25 ⟩ állapotot. Két m = 5/2
   állapot van, így hasonló gondolatmenettel az m = 5/2-höz tartozó ortogonális állapotnak J 2 sajátállapotának
   kell lennie; ez tehát | 52 25 ⟩.

 • Ezt az eljárást folytatva, a bázisvektorokat lesüllyesztve és ortogonalitással új irrepeket keresve
   arra jutunk, hogy 52 ⊗ 1 = 32 ⊕ 52 ⊕ 72. Nagyon hasonló érveléssel általában

                            j1 ⊗ j2 = |j1 − j2 | ⊕ |j1 − j2 | + 1 ⊕ · · · ⊕ j1 + j2 .

 • A Clebsch–Gordan-együtthatókat ⟨j1 j2 m1 m2 |jm⟩ átfedésekként definiáljuk. Ezek az együtthatók
   kielégítik a relációkat:
                         X
                            ⟨jm|j1 j2 m1 m2 ⟩⟨j1 j2 m1 m2 |j ′ m′ ⟩ = δjj ′ δmm′ ,
                           m1 m2

                            X
                                  ⟨j1 j2 m1 m2 |jm⟩⟨jm|j1 j2 m′1 m′2 ⟩ = δm1 m′1 δm2 m′2
                             jm

    amelyek közvetlenül a csatolt és csatolatlan bázisok teljességéből következnek. Ezenfelül fennáll a
    kiválasztási szabály:
                                  ⟨jm|j1 j2 m1 m1 ⟩ ∝ δm,m1 +m2 .
    A Clebsch–Gordan-együtthatókra rekurziós relációkat is kaphatunk, ha J−-t mind a csatolt, mind a
    csatolatlan bázisban alkalmazzuk.

  • Ezután a forgatások működését vizsgáljuk. Mivel J1 és J2 kommutál,

                                  U (n̂, θ) = e−iθn̂·(J1 +J2 )/ℏ = U1 (n̂, θ)U2 (n̂, θ)

    ahol az Ui az egyedi forgatási operátorok. Ekkor
                                                         j
                                             XX
                          U |j1 j2 m1 m2 ⟩ =     |jm′ ⟩Dm                 ′  ′
                                                           ′ m ⟨jm|j1 j2 m1 m2 ⟩
                                                    jm m′

    a csatolt bázisban, valamint
                                                                                            j1      j2
                                                                  X
                  U |j1 j2 m1 m2 ⟩ = U1 |j1 m1 ⟩U2 |j2 m2 ⟩ =              |j1 j2 m′1 m′2 ⟩Dm  ′ m Dm′ m
                                                                                                  1      2
                                                                                             1        2
                                                                 m′1 m′2

    a csatolatlan bázisban. Ezeket kombinálva és az indexeket átnevezve azt kapjuk, hogy
                       j1        j2                          j
                                         X
                                                                     ′        ′  ′
                     Dm   1 m ′ Dm m ′ =
                                    2
                                           ⟨j1 j2 m1 m2 |jm⟩Dmm ′ ⟨jm |j1 j2 m1 m2 ⟩
                              1         2
                                             jmm′

    ami lehetővé teszi a D-mátrixok szorzatainak redukálását.
