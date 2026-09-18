---
id: kevin-zhou-notes-phy-ex023
source: kevin-zhou-notes
native_id: "phy Example 023"
origin: "Kevin Zhou personal physics notes"
language: hu
translated: true
links_en: kevin-zhou-notes-phy-ex023
topic: [elektromágnesség]
subtopic: [peremérték-feladatok, magnetosztatika, mágneses dipólusok]
math_tools: [vektoranalízis, parciális differenciálegyenletek]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "1519-1687"
archive_layer: reference_notes
source_role: explanatory_example
---

Példa. Peremérték-feladatok. Tekintsünk egy Si felületekkel határolt térfogatot, amely akár
végtelenbeli felületet is tartalmazhat. A Laplace-egyenletnek, ∇2 ϕ = 0, ekkor egyértelmű megoldása van (konstansoktól
eltekintve), ha minden felületen rögzítjük ϕ-t vagy ∇ϕ · n̂ ∝ E⊥-ot. Ezeket rendre Dirichlet- és Neumann-
peremfeltételeknek nevezzük. Ennek belátásához legyen f két megoldás különbsége. Ekkor
                          Z              Z                   Z
                                     2
                             dV (∇f ) = dV ∇ · (f ∇f ) = f ∇f · dS

ahol az első egyenlőségnél felhasználtuk, hogy ∇2 f = 0. A peremfeltételek azonban a jobb oldalt
nullává teszik, ezért a bal oldal is nulla, ami megköveteli, hogy f konstans legyen.
   Ha a felületek vezetők, elegendő az egyes felületeken lévő töltést is megadni.
Ennek belátásához vegyük észre, hogy a potenciál egy felületen állandó, így
                                   Z                 Z
                                      f ∇f · dS = f ∇f · dS = 0

mivel két megoldás kivonásakor a felület teljes töltése nulla. Ekkor a korábbiakhoz hasonlóan ∇f = 0,
és ugyanarra a következtetésre jutunk.

2.2   Magnetosztatika
  • A magnetosztatika alapegyenletei

                                        ∇ × B = µ0 J,    ∇ · B = 0.


 • Mivel egy rotáció divergenciája nulla, ∇ · J = 0 kell legyen. Ez egyszerűen a
   folytonossági egyenlet
                                            ∂ρ
                                                +∇·J=0
                                             ∂t
   és annak következménye, hogy sztatikus esetet vizsgálunk.

 • Ampère-törvény integrálása megadja             I
                                                   B · ds = µ0 I.

    Ebből következik, hogy végtelen vezeték mágneses tere Bθ = µ0 I/2πr.

 • A K egyenletes felületi áram a tér ugrását okozza:

                                       ∆B∥ = µ0 K,         ∆B⊥ = 0.

    Ez hasonló a felületi töltés esetéhez, azzal a különbséggel, hogy ott E⊥ ugrik.

 • Tekintsünk egy végtelen hengeres szolenoidot. Szimmetria alapján ekkor B = B(r)ẑ. A szolenoid belsejében és
   kívül ∇ × B = 0, ami ∂B/∂r = 0-t jelent. Mivel a terek a végtelenben eltűnnek,
   a külső térnek nullának kell lennie, Ampère-törvény szerint pedig a belső tér

                                                    B = µ0 K

    ahol K a felületi áramsűrűség, amely nI-vel egyenlő, n pedig az egységnyi hosszra jutó menetszám.

 • Definiáljuk a vektorpotenciált:
                                                   B = ∇ × A.
    A vektorpotenciál a ∇χ gradiens hozzáadásáig nem egyértelmű.

 • Egy ilyen gradiens hozzáadásával A divergenciája ∇2 χ-val változik. A Poisson-egyenlet létezési
   tételének köszönhetően mértéktranszformációkkal tetszőleges ∇ · A választható.

 • Hasznos választás a Coulomb-mérték, ∇ · A = 0. Ekkor Ampère-törvény

                                               ∇2 A = −µ0 J

    ahol a rotáció rotációjára vonatkozó azonosságot használtuk:

                                    ∇2 A = ∇(∇ · A) − ∇ × (∇ × A).

Megjegyzés. Mi a vektori Laplace-operátor? Formálisan tetszőleges tenzor Laplace-operátora

                                         ∇2 T = ∇ · (∇T ).

Metrikával ellátott általános sokaságon a jobb oldali műveleteket kovariáns
deriváltakkal definiáljuk, és ezek egy kapcsolattól függenek. Az általánosság másik végletében definiálható
Rn Descartes-komponenseiben olyan tenzorként, amelynek komponensei T skalár Laplace-operátorai;
ezután koordinátaváltással például gömbi koordinátákra általánosíthatunk.
    A vektori Laplace-operátor esetén görbevonalú koordinátákban a legpraktikusabb definíció
  n
R-ben a rotáció-rotáció azonosságát fordítva használjuk, majd a divergencia, gradiens és rotáció
ismert kifejezéseit behelyettesítjük. Ehhez nincs szükség tenzorműveletekre.


Most matematikai eszközeinket a Biot–Savart-törvény levezetésére használjuk.
 • A Poisson-egyenlet Green-függvényes megoldásával analógiában
                                                       J(x′ )
                                                Z
                                             µ0
                                    A(x) =        dx′           .
                                             4π       |x − x′ |
    Ezt Descartes-koordináták komponenseiben dolgozva közvetlenül is bizonyíthatjuk. Ez az egyenlet
    a vektorjelölés hiányosságát is megmutatja: szó szerint olvasva nem egyértelmű, hogy a vektorok indexei
    milyenek legyenek.
 • A Coulomb-mérték feltételének ellenőrzéséhez vegyük észre, hogy
                             J(x′ )
                Z                      Z                               Z
                      ′                     ′     ′          1                              1
      ∇ · A(x) ∝ dx ∇ ·            ′
                                      =  dx   J(x   ) · ∇       ′
                                                                   = −   dx′ J(x′ ) · ∇′           .
                            |x − x |                      |x − x |                       |x − x′ |
   A vektorjelölésnek itt is vannak problémái: nem egyértelmű, melyik indexre hat a divergencia (ezért
   pontokkal próbáljuk J-hez kapcsolni), és az sem egyértelmű, melyik koordináta szerint derivál
   (ezért prímekkel jelöljük). Az utolsó lépésben az antiszimmetriát használtuk ∇ → −∇′ átalakítására.
    Ezt a kifejezést parciális integrálással (indexjelölésben világosabban) egy felületi tagra és egy
    ∇ · J = 0-val arányos tagra bonthatjuk, így a kívánt ∇ · A = 0 adódik.
 • A rotációt a szorzási szabállyal használva
                           J(x′ )                                                      ′          ′

                                                                                  ′ J(x ) × (x − x )
              Z                         Z                                    Z
           µ0       ′                µ0      ′       1              ′     µ0
   B(x) =        dx ∇ ×            =      dx    ∇             × J(x   ) =      dx
           4π            |x − x′ |   4π           |x − x′ |               4π           |x − x′ |3
    ez a Biot–Savart-törvény.
Ezután a mágneses dipólusokat és multipólusokat vizsgáljuk.
 • A C görbét követő áramhurok vektorpotenciálja
                                                       dr′
                                                   I
                                              µ0 I
                                      A(r) =
                                              4π C |r − r′ |
    a Biot–Savart-törvény szerint.
 • Az elektromos dipólusokhoz hasonlóan kifejthetjük
                                            1        1 r · r′
                                                   =   + 3 + ···
                                         |r − r′ |   r   r
    kis r′ esetén. Az első tag zárt hurok mentén integrálva mindig nullát ad, mivel nincsenek
    mágneses monopólusok, míg a következő tag
                                                         r · r′
                                                    I
                                               µ0 I
                                       A(r) ≈         dr′ 3 .
                                               4π C        r

 • Az egyszerűsítéshez emeljük ki az 1/r3 tényezőt az integrálból, majd skalárisan szorozzuk az integrált g-vel:
                I                  Z                           Z                     Z
                           ′   ′           ′         ′     ′
                    gi rj rj dri =   ϵijk ∂i (gj rℓ rℓ ) dSk =   ϵijk ri gj dSk = g · dS′ × r
                                                                              ′
                   C                S                        S
    Stokes tétele alapján. Mivel g és r is állandó, következik
                                     µ0 m × r
                                                                Z
                             A(r) =           , m = IS, S =         dS.
                                    4π r3                         S
    Itt S a vektori terület, m pedig a mágneses dipólusmomentum.


  • A rotáció közvetlen kiszámítása a mágneses teret adja:

                                                    µ0 3(m · r̂)r̂ − m
                                          B(r) =
                                                    4π       r3
    ami megegyezik egy elektromos dipólus távoli terével.

  • A dipólusok közelében a terek különböznek, mert az elektromos, illetve mágneses tér rotációmentes, illetve
    divergenciamentes. Például az elektromos dipólus belsejében a tér a
    dipólusmomentummal ellentétes, a mágneses dipólus belsejében viszont azonos irányú.

  • Megmutatható, hogy kis dipólusok határesetében a terek

                     1 3(p · r̂)r̂ − p    1                           µ0 3(m · r̂)r̂ − m 2µ0
           E(r) =              3
                                       −     p δ(r),       B(r) =                       +    m δ(r).
                    4πϵ0     r           3ϵ0                          4π       r3         3
    Ezek az úgynevezett „fizikai” dipólusok terei. Mindkét kifejezés levezethető
    véges méretű dipólusok, például egyenletesen polarizált/mágnesezett gömbök vizsgálatával, majd
    a sugarat nullához tartó határérték vételével.
