---
id: kevin-zhou-notes-phy-ex028
source: kevin-zhou-notes
native_id: "phy Example 028"
origin: "Kevin Zhou personal physics notes"
language: hu
translated: true
links_en: kevin-zhou-notes-phy-ex028
topic: [elektromágnesség]
subtopic: [relativisztikus-elektromágnesség, sugárzás]
math_tools: [Lorentz-transzformációk, négyvektorok, Fourier-transzformációk, Green-függvények]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "1991-2686"
archive_layer: reference_notes
source_role: explanatory_example
---
Példa. Egy mozgó ponttöltés. A konstansokat elhanyagolva a tér
                                                            
                                                            x
                                  r            1
                            E∼ 3 = 2                       y  .
                                 r     (x + y 2 + z 2 )3/2
                                                            z

Most tekintsünk egy v = v î sebességgel mozgó vonatkoztatási rendszert. Ekkor a meglökött tér
                                                          
                                                           x
                                 ′           1
                                E ∼ 2                    γy 
                                     (x + y 2 + z 2 )3/2
                                                           γz

az eredeti tér koordinátáit használva. A koordinátákat a meglökött rendszerre cserélve:
                                                                    ′
                                                                    x + vt′
                                                                            
                                               γ
                           E′ ∼ 2 ′                                 y′ 
                                 (γ (x + vt′ )2 + y ′2 + z ′2 )3/2
                                                                       z′

ahol az x = γ(x′ + vt′ ) összefüggést használtuk. Érdekes módon a tér továbbra is radiális. A nevezőben
azonban az x′ koordináta effektíve γx′, tehát olyan, mintha az elektromos erővonalak hosszirányban
összehúzódtak volna. A töltés invarianciája és a Gauss-törvény miatt a teljes fluxus állandó marad, ezért
a tér a merőleges irányban a szokásosnál erősebb, a párhuzamos irányban pedig gyengébb.

Összefoglalásként írjuk fel újra relativisztikusan a Maxwell-egyenleteket és a Lorentz-erőtörvényt.

  • A Maxwell-egyenletek:
                                      ∂µ F µν = µ0 J ν ,   ∂µ Feµν = 0.
    Vegyük észre, hogy ez automatikusan maga után vonja az áram megmaradását. A második egyenlet
    pedig automatikusan teljesül az F = dA összefüggésből.

  • A Lorentz-erőtörvény relativisztikus általánosítása:
                                              dpµ
                                                  = qF µν uν
                                              dτ
    ahol u a sebesség. A térszerű komponense a szokásos Lorentz-erő, az időszerű komponens pedig
                                              dE
                                                 = qγE · u.
                                              dτ
    Ez egyszerűen azt fejezi ki, hogy az elektromos terek munkát végeznek, a mágneses terek viszont nem.

  • Ez a kanonikus impulzus, pµ + qAµ segítségével is felírható:
                                        d µ
                                          (p + qAµ ) = quν ∂ µ Aν .
                                       dτ
    Amint korábban említettük, Hamilton-mechanikában ez a fontosabb mennyiség. A nemrelativisztikus
    határban ennek az egyenletnek a komponensei:

                d 1       2          ∂                 d
                       mv + qϕ = q(ϕ − v · A),            (mv + qA) = −∇q(ϕ − v · A).
                dt 2                ∂t                 dt

  • Egy elegáns trükk: ha E · B = 0, akkor lökéssel elérhetjük, hogy az elektromos vagy a mágneses
    tér eltűnjön. Keresztezett terekben például egy részecske vagy cikloidhoz hasonló mozgást végez,
    vagy tetszőlegesen messzire elrepül; a két esetet az E 2 − B 2 előjele választja szét.

Megjegyzés. Mi a vektorpotenciál fizikai jelentése? Gyakori válasz, hogy fizikailag jelentés nélküli,
mert mértékfüggő, de ez túl szigorú: e mérce szerint a skalárpotenciál és maga a Hamilton-függvény is
fizikailag jelentés nélküli lenne! A skalárpotenciál szokásos jelentése — a töltésenkénti potenciális
energia — csak bizonyos mértékekben értelmes. Hasonlóan, a vektorpotenciál a töltésenkénti potenciális
impulzus, ismét csak bizonyos mértékekben.
    Maxwell így gondolt a vektorpotenciálra, amelyet valójában „elektromágneses impulzusnak” nevezett,
de ez az értelmezés általában kevésbé hasznos. Ennek oka, hogy a pµ + qAµ időszerű komponense
megmarad, amikor Aµ időfüggetlen; ez statikus problémákban megfelelő mértékválasztással könnyen
elérhető, a térszerű komponens számára azonban sokkal nehezebb megteremteni. Elérhető, ha Aµ
térfüggetlen, de ettől minden triviálissá válik. Ha a probléma egy irányban transzlációs szimmetriával
rendelkezik, választhatunk olyan mértéket, amelyben p + qA egyik komponense megmarad; ha pedig a
probléma forgásszimmetrikus, akkor a kanonikus impulzusmomentum, r × (p + qA) egyik komponense
tehető megmaradóvá. Ez adja például a mágneses térben mozgó részecske megmaradó mennyiségeit,
amelyeket korábban az adiabatikus tétellel vezettünk le.
    A potenciális impulzus gondolatát a részecske és a tér együttes figyelembevételével is megérthetjük.
A teljes tér a háttértér és a részecske tere szuperpozíciója:

                                    E = E0 + Ep ,      B = B0 + Bp ,

ahol a fenti mozgásegyenletek csak a háttértérre vonatkoznak. A teljes energia és impulzus mindig
megmarad, de mivel a terekben másodfokúak, az egyes terekhez tartozó külön tagok mellett kevert tag
is megjelenik. Egy statikus részecske esetén például a tér energiája
                                                                 !
                    E2 B2               E02 B02              Ep2
                 Z                  Z
            U=          +     dV =          +    + E0 Ep +         dV = U00 + U0p + Upp .
                     2     2             2    2               2

Ha a terek statikusak és statikus mértékben dolgozunk, amelyben Aµ állandó, akkor

                                        Upp = p0 ,     U0p = qA0 .

A p0 + qA0 megmaradása tehát az U00 megmaradásából következik. Hasonlóan, a tér impulzusa
                              Z              Z
                         P = E × B dV = E0 × B0 + Ep × B0 dV

és a kevert tag, amely a részecske és a tér kölcsönhatását jelenti, éppen qA. Ennek belátásához
vegyük észre, hogy statikus mértékben
               Z                    Z                Z                   Z
                  Ep × B0 dV = − ∇ϕp × B0 dV = ϕp ∇ × B0 dV = ϕp J0 dV

ahol egy peremtagot elhagytunk. Coulomb-mértékre szorítva tovább a feltételeket:
        Z             Z              Z              Z
                           2              2
           ϕp J0 dV = ϕp ∇ A0 dV = (∇ ϕp )A0 dV = qA0 δ(r − rp ) dV = qA0 (rp )

ahogy kívántuk.

2.5     Sugárzás
Ebben a részben azt mutatjuk meg, hogyan keletkezik sugárzás gyorsuló töltésekből.

  • A mozgásegyenlet kifejtése:
                                ∂ν F νµ = µ0 J µ ,   ∂ 2 Aµ − ∂ µ ∂ν Aν = µ0 J µ .

      Az egyszerűség kedvéért Lorenz-mértékben dolgozunk, ∂µ Aµ = 0 mellett, így

                                                ∂ 2 Aµ = µ 0 J µ .

      Vagyis a potenciál megoldja a hullámegyenletet, forrása pedig az áram.


 • Lorenz-mérték akkor létezik, ha mindig választhatunk olyan χ mértéktranszformációt, amelyre
   ∂ 2 χ = −∂µ Aµ . A hullámegyenlet megoldása tehát azt is megmutatja, hogyan juthatunk el
   először Lorenz-mértékhez.

 • A mozgásegyenlet nemrelativisztikus jelölésben:
                                                   ∂              ρ
                                         ∇2 ϕ +       (∇ · A) = −
                                                   ∂t             ϵ0
    és
                                 1 ∂2A

                             2               1 ∂ϕ
                            ∇ A− 2 2 −∇ ∇·A+ 2      = −µ0 J.
                                c ∂t        c ∂t
    Ez az alak olyan mértékeknél hasznos, amelyek megtörik a Lorentz-invarianciát, például a Coulomb-
    mértéknél, ∇ · A = 0.

 • Coulomb-mértékben a ϕ és ρ kapcsolata ugyanaz, mint elektrosztatikában, retardáció nélkül, ami
    látszólag sérti az okságot. Ez fizikailag elfogadható, mert ϕ közvetlenül nem mérhető, de az elemzést
    zavaróbbá teszi. A Coulomb-mérték bizonyos számolásokhoz hasznos, amint a Darwin-Lagrange-
    függvénynél látni fogjuk.

 • Coulomb-mértékben hasznos az áramot transzverzális és longitudinális komponensre bontani:

                                 J = Jℓ + Jt ,     ∇ × Jℓ = 0,    ∇ · Jt = 0.

    Ezek J-ből explicit módon kiszámíthatók:
                                  ∇′ · J(x′ ) ′                                    J(x′ )
                               Z                                              Z
                           1                                     1
                Jt (x) = − ∇                 dx ,        Jt =      ∇×∇×                     dx′ .
                          4π       |x − x′ |                    4π                |x − x′ |

 • Ezután a mozgásegyenlet első egyenlete azt adja:
                                                 1 ∂Φ
                                                   ∇   = µ 0 Jt
                                                 c2 ∂t
    vagyis a második mozgásegyenletben csak a transzverzális áram forrása A-nak:

                                                    1 ∂2A
                                         ∇2 A −            = −µ0 Jt
                                                    c2 ∂t2
    ami érthető, mert A-nak nincs longitudinális komponense.

Lorenz-mértékhez visszatérve ezért motiváltak vagyunk arra, hogy megtaláljuk a ∂ 2 Green-függvényét.

 • Első megközelítésként csak időben végzünk Fourier-transzformációt:
                                         (∇2 + ω 2 )Aµ = −µ0 Jµ .
    Ezt Helmholtz-egyenletnek nevezzük; a Poisson-egyenlet az ω → 0 határeset. A Jµ (x, ω) függvény
    a Jµ (x, t) időbeli Fourier-transzformáltja minden x pontban.

 • A Helmholtz-egyenlet Green-függvényét így definiáljuk:
                                    (∇2 + ω 2 )Gω (x, x′ ) = δ 3 (x − x′ ).
    A transzlációs és rotációs szimmetria miatt Gω (x, x′ ) = Gω (r), ahol r = |x − x′ |. Gω (r)-re
    úgy gondolhatunk, mint az origóban elhelyezett, ω frekvenciájú szinuszos forrás térbeli válaszára.


 • Gömbi koordinátákban:
                                       1 d              dGω
                                                   r2               + ω 2 Gω = δ(r).
                                       r2 dr             dr
    Ennek az egyenletnek a megoldásai
                                                    1 e±iωr
                                               Gω (r) = −   .
                                                   4π r
    Eredményünkhöz úgy is eljuthatunk, ha feltesszük, hogy az amplitúdó 1/r szerint csökken, és ezért
    G helyett rG-vel dolgozunk. A konstansot az r = 0 körüli gömbben végzett integrálás határozza meg.

 • Ezt behelyettesítve:
                                              µ0
                                                        Z                 ±iω|x−x′ |
                                                                    ′ e
                                  Aµ (x, ω) =               dx                         Jµ (x′ , ω).
                                              4π                      |x − x′ |
    Ezért az inverz Fourier-transzformációt véve:
                                       −iω(t∓|x−x′ |)                               ′            ′
                                                                             ′ Jµ (x , t ∓ |x − x |)
                         Z     Z                                        Z
                      µ0            ′ e                     ′        µ0
          Aµ (x, t) =       d̄ω dx                    Jµ (x   , ω) =      dx                         .
                      4π                |x − x′ |                    4π               |x − x′ |

 • Az eredmény a Poisson-egyenlet megoldásához hasonló, azzal a különbséggel, hogy az áramot retardált
   vagy avanzsált időben kell kiértékelni; fizikai időként a retardált időt választjuk:
                                                tret = t − |x − x′ |.
    Láthatjuk, hogy a Helmholtz-egyenlet tartalmazza a fényterjedés helyes időbeli késését.

 • Vegyük észre, hogy bár a potenciálok a szokásos módon csak az áramtól függenek, a retardált időben
    kiértékelve, ez már nem igaz a terekre! A potenciálok deriválásakor extra tagokat kapunk tret
    deriválásából. Ezek az extra tagok kulcsfontosságúak, mert az 1/r szerint lecsengő sugárzási tereket
    adják, nem pedig az 1/r2 szerint lecsengő tagokat.

Időben és térben együtt is végezhetünk Fourier-transzformációt.

 • A hullámegyenlet Green-függvénye kielégíti:
                                     ∂ 2 G(x, t, x′ , t′ ) = δ(x − x′ )δ(t − t′ ).
    A tér- és időbeli transzlációs szimmetria miatt G = G(r, t).

 • Fourier-transzformációt véve és megoldva:
                                                          1
                                            G(k, ω) = − 2          .
                                                       k − ω 2 /c2

 • Az inverz Fourier-transzformáció:
                                                                            ei(k·r−ωt)
                                                            Z
                                        G(r, t) = −             d̄4 k                    .
                                                                           k 2 − ω 2 /c2
    Gömbi koordinátákra áttérve, ẑ ∥ k választással és a szögintegrálást elvégezve:
                                    Z ∞                Z ∞
                                 1          2 2 sin kr               e−iωt
                     G(r, t) = 3        dk c k             dω                   .
                                4π 0              kr    −∞     (ω − ck)(ω + ck)


  • A dω-integrál elvégzéséhez kezelnünk kell a pólusokat. Ha előre, időben egy infinitezimális
    csillapítást adunk hozzá, a pólusokat a valós tengely alá tolhatjuk. Ekkor t < 0 esetén az integrálási
    kontúr a felső félsíkban zárható, így nullát ad. t > 0 esetén az alsó félsíkban zárjuk, és mindkét
    pólust felvesszük, ezért
                                           e−iωt
                              Z
                                                            2π
                                  dω                   = − θ(t) sin(ckt).
                                C    (ω − ck)(ω  + ck)      ck
    Végül a dk-integrál deltafüggvényeket ad, így
                                                           θ(t)
                                         Gret (r, t) = −        δ(tret ).
                                                           4πr
    Ez a retardált Green-függvény; a hullámegyenletbe helyezve ugyanazt a retardált potenciálra kapott
    kifejezést kapjuk, mint korábban.

  • Anticsillapítást is alkalmazhatunk, így az avanzsált Green-függvényt kapjuk:
                                                          θ(−t)
                                        Gadv (r, t) = −         δ(tadv ).
                                                           4πr
  • Mindkét konvenció szemléltethető az integrálási kontúr valós tengely fölé vagy alá tolásával. Ha
    ehelyett az origó körül megdöntjük, akkor a Feynman-propagátort kapjuk.

Megjegyzés. A Lorenz-mérték ellenőrzése. Retardált potenciálmegoldásunk alakja
                                       Z
                              Aµ (x) ∼ d4 x′ G(x, x′ )Jµ (x′ ).

Most számítsuk ki ∂µ Aµ-t. Mivel a Green-függvény csak x − x′-től függ:
                       Z                             Z
                ∂µ A ∼ d x ∂µ G(x, x )Jµ (x ) = − d4 x′ (∂µ′ G(x, x′ ))Jµ (x′ ).
                    µ      4 ′          ′     ′

Ezután parciális integrálást végezhetünk; mivel ∂µ J µ = 0, a Lorenz-mérték teljesül.

Eredményeinket most kis objektumok sugárzásának elemzésére használjuk.

  • Tekintsünk egy, az origó középpontú, d karakterisztikus hosszúságú objektumot a
                                                        Jµ (x′ , tret )
                                                 Z
                                              µ0
                                  Aµ (x, t) =       dx′                 .
                                              4π         |x − x′ |
    A teret r = |x| ≫ d távolságban szeretnénk kiszámítani. Taylor-sorba fejtve:
                 1        1 x · x′
                        =   + 3 + ...,         Jµ (x′ , tret ) = Jµ (x′ , t − r/c + x · x′ /rc + . . .).
              |x − x′ |   r   r

  • d/r vezető rendjében az elektromosdipólus-közelítést kapjuk:
                                                 Z
                                             µ0
                                Aµ (x, t) ≈         dx′ Jµ (x′ , t − r/c).
                                            4πr
    Ez a közelítés csak nemrelativisztikus mozgásnál értelmes: tret következő korrekciós tagja d/c
    nagyságrendű, ami csak akkor kicsi, ha az áram változásainak karakterisztikus időskálája sokkal
    nagyobb d/c-nél.


  • A teret a vektorpotenciálból a legegyszerűbb kiszámítani. Használjuk az
                                                           Z
                                ∂j (Jj xi ) = −ρ̇xi + Ji ,   dx′ J(x′ ) = ṗ
    azonosságot, amely hasonló a magnetosztatikában kapott eredményeinkhez, de itt a változó p
    dipólusmomentumot is megengedjük. Ezt a t − r/c időpontra kiértékelve:
                                                    µ0
                                       A(x, t) ≈       ṗ(t − r/c).
                                                   4πr

  • A szorzási szabály alkalmazásával:

                                µ0     x̂ × ṗ(t − r/c) x̂ × p̈(t − r/c)
                          B≈        −                  −                   .
                                4π             r2               rc

    Az első tag a szokásos, csak időben késleltetett mágneses tér, a második pedig az 1/r-es sugárzási
    tér. Ha a dipólus karakterisztikus frekvenciája ω, akkor a második tag dominál, ha r ≫ λ = c/ω,
    vagyis a távoli térben/sugárzási tartományban.

  • A sugárzási tartományban a terek síkhullámokra hasonlítanak, E = −cx̂ × B mellett. Ekkor
                                   1        c 2        µ0
                              S=      E×B=    B x̂ =            |x̂ × p̈|2 x̂
                                   µ0      µ0        16π 2 r2 c
    ahol a hármas vektoriális szorzat szabályát használtuk.

  • A teljes pillanatnyi teljesítmény:
                                                 Z
                                        µ0                          µ0
                                    P=               sin2 θ dΩ =       |p̈|2 .
                                       16π 2 c                     6πc

  • Tekintsünk egy Q töltésű részecskét, amely ω frekvenciával és d amplitúdóval a ẑ irányban
    oszcillál, így p = Qz a dipólusmomentuma. Kifejtve és időátlagot véve:
                                                 µ0 p 2 ω 4    Q2 a2
                                        Pav =               =          .
                                                  12πc        12πϵ0 c3
    Ez a Larmor-formula; vegyük észre, hogy a töltésben és a gyorsulásban másodfokú (a tér lineáris,
    de az energia bilineáris). Mivel az elektromosdipólus-közelítést használtuk, csak nemrelativisztikus
    mozgásra érvényes.

  • Vegyük észre, hogy a sugárzási terek a ẑ tengelyen eltűnnek. Ez kapcsolódik a szőrös gömb tételéhez:
    mivel a sugárzási terek mindenütt érintők a töltés körüli gömbökhöz, valahol el kell tűnniük.

  • Taylor-sorunk magasabb rendű tagjaival mágneses dipólus-, elektromos kvadrupólustagokat és így
    tovább kaphatunk. A mágneses dipólustag olyan helyzetekben dominál, ahol nincs elektromos
    dipólusmomentum, például áramhuroknál, mozgó töltéseknél azonban teljesítménye v 2 /c2 faktorral
    elnyomott, ezért a nemrelativisztikus határban sokkal kisebb.

Eredményeinket alkalmazhatjuk szórásra.


 • Bemelegítésként a Thomson-szórást tekintjük. Tekintsünk fényben lévő szabad részecskét, és tegyük fel,
   hogy a fény hullámhosszához képest soha nem mozdul el jelentős távolsággal. Ekvivalensen: soha nem
   mozog relativisztikusan nagy sebességgel. Ekkor
                                                                         qE0
                            mẍ(t) ≈ qE(x = 0, t),      x(t) = −              sin(ωt).
                                                                         mω 2
   A Larmor-formulát alkalmazva
                                                     µ0 q 4 E02
                                             Pav =              .
                                                     12πm2 c

 • A fény átlagos Poynting-vektora
                                                       cE02
                                               Sav =        .
                                                       2µ0
   Ezért a Thomson-szórás hatáskeresztmetszete
                                        Pav   8π 2           q2
                                   σ=       =   r ,                = mc2 .
                                        Sav    3 q         4πϵ0 rq

   Itt rq a klasszikus elektronsugár. Vegyük észre, hogy frekvenciafüggetlen.

 • A Thomson-szórás rugalmas, de ha a részecske relativisztikusan gyorsan mozog, a szórt fény a sugárzási
   visszarúgás hatásai miatt vöröseltolódást szenvedhet.

 • Kísérletileg azt találták, hogy a szórt fénynek nagy frekvenciákon és tetszőlegesen kis intenzitásoknál
   eltolódott a hullámhossza (Compton-szórás), ami alátámasztotta a fény részecsketermészetét.

 • A Rayleigh-szórás a fény semleges, de polarizálható atomról vagy molekuláról történő szóródását írja le.
   A Thomson-szórás modelljéhez lényegében rugót és csillapítást adunk:
                                                     qE(t)/m
                                        x(t) = −                          .
                                                   ω 2 − ω02 + iγω

 • Az ω ≪ ω0 határban, ami látható fényre és a légkör molekuláira jó közelítés, az amplitúdó állandó
   lesz (a Thomson-szórás 1/ω 2 függésével szemben), ezért
                                                                 4
                                              8πrq2

                                                           ω
                                           σ=                        .
                                               3           ω0
   Az, hogy σ ∝ ω 4, megmagyarázza, miért kék az ég. Szemléletesen: az alacsony frekvenciájú fény
   szórása azért nyomódik el, mert a „molekuláris rugók” korlátozzák, hogy az elektronok milyen messzire
   mozdulhatnak el.

 • A Rayleigh-szórás akkor érvényes, ha az érintett molekulák mérete sokkal kisebb a fény hullámhosszánál.
   Ha a két hosszúság összemérhető, Mie-szórást kapunk, amely előnyösen a hosszabb hullámhosszakat
   szórja. Ennek oka, hogy a közeli molekulák azonos fázisban oszcillálnak, ezért amplitúdóik
   szuperponálódnak, ami a teljesítmény kvadratikus növekedését adja. A Mie-szórás vízcseppekre
   alkalmazható, megmagyarázza, hogy a felhők láthatók és fehérek. Ha a szóró részecskék sokkal nagyobbak,
   egyszerűen geometriai optikát használunk.


Megjegyzés. Végül eredményeinket relativisztikusan mozgó töltésre is általánosíthatjuk. Tegyük fel,
hogy egy ponttöltés helye r(t). Ekkor a retardált potenciálja:
                                                  δ(x′ − r(tret ))
                                            Z
                                  ϕ(x, t) ∝ dx′                    .
                                                     |x − x′ |
A nehézség az, hogy tret nemtriviális módon függ x′-től. Egyszerűbb a deltafüggvényt idő szerint
integrálható alakra cserélni:
                                  δ(x′ − r(t))δ(t − tret )                ′            ′
                        Z                                    Z
                              ′
             ϕ(x, t) ∝ dx dt                               =   dt                           .
                                         |x − x′ |                        |x − r(t′ )|
A deltafüggvény argumentuma egyrészt t′, másrészt a részecske x pont felé mutató sebessége miatt
változik, ami Doppler-eltolódáshoz hasonló további tagot ad. Ekkor
             q                1                                   qµ0           v(t′ )
ϕ(x, t) =                                       ,   A(x, t) =                                       ,   t′ +R(t′ )/c = t
            4πϵ0 R(t′ )(1 − R̂(t′ ) · v(t′ )/c)                   4π R(t′ )(1 − R̂(t′ ) · v(t′ )/c)
ahol R az R(t) = x − r(t) szeparációs vektor. Ezek a Liénard–Wiechert-potenciálok.
Az elemzést végigvezetve meghatározhatók egy relativisztikus részecske terei és a Larmor-formula
relativisztikus megfelelője. Az eredmény szerint a sugárzási ráta jelentősen megnő, és a részecske
mozgásának irányába koncentrálódik.

Megjegyzés. A sugárzási teljesítmény olcsó, nagyon heurisztikus becslése. Tekintsük egy hangszóró
által kibocsátott hanghullámokat. A releváns tér a v sebességmező, a források pedig tömeg hozzáadásának
Ṁ megfelelői (a hangszóró ezt a tömeg kifelé tolásával valósítja meg). A „csatolás” a levegő sűrűségének
inverze, 1/ρ, abban az értelemben, hogy a statikus tér és energiasűrűség
                                                     Ṁ           1
                                             v=           ,    u = ρv 2 .
                                                    4πρr2         2
Most egy gömbszimmetrikus, Ṁ amplitúdójú és ω körfrekvenciájú hangszóró által kisugárzott teljesítményt
becsüljük. Egyszerű becslésként vehetjük az energiasűrűséget valamely sugáron, és megszorozhatjuk
4πr2c-vel, ahol c a hangsebesség. Kis sugaraknál azonban az 1/r-es sugárzási teret elnyomja az 1/r2-es
kvázisztatikus tér, amely nem számít sugárzásnak.
    Dimenzióanalízissel a két térnek a köztes tértávolságban, r ∼ c/ω mellett azonos fontosságúnak kell
lennie. A teret itt kiértékelve:
                                                   !2 
                                        1      Ṁ                 1 Ṁ 2 ω 2
                        P ∼ (4πr2 c)  ρ                      =             .
                                        2    4πρr2       r=c/ω   8π ρc

Ez a sugárzási teljesítmény helyes becslése; a statikus tér r = c/ω helyen való kiértékelése megkímél
attól, hogy egyáltalán el kelljen gondolkodnunk a sugárzási tér kiszámításán.
   Elektromágnességre való áttéréshez Ṁ-t q-val, az 1/ρ csatolást pedig 1/ϵ0-nal cseréljük, így
                                                           1 q2ω2
                                                    P ∼           .
                                                          8π ϵ0 c
Ez azonban hibás, mert elektromágnességben monopólsugárzás nem létezik a töltésmegmaradás miatt.
Ehelyett a statikus dipólusteret kell használnunk, amely ℓ/r faktorral kisebb, ahol ℓ a töltések közötti
távolság. Ebből
                                                           1 q 2 ℓ2 ω 4
                                                    P ∼
                                                          8π ϵ0 c3

adódik, ami egy O(1) tényezőtől eltekintve a Larmor-formula. (Ismerősebb alakra hozható az
a ∼ ℓω 2 felhasználásával.) Hasonló érveléssel megbecsülhető az elektromos kvadrupólsugárzás
teljesítménye:
                                                   1 q 2 ℓ4 ω 6
                                           P ∼                  .
                                                  8π ϵ0 c5
Ez különösen fontos gravitációs hullámoknál, ahol az energia- és impulzusmegmaradás miatt a
kvadrupólus adja a vezető hozzájárulást. A töltés M, a csatolás pedig 4πG, ezért
                                                  G M 2 ℓ4 ω 6
                                          P ∼                  .
                                                  2    c5
ℓ szeparációjú és M tömegű kettős rendszerben
                                                      GM
                                              ω2 =
                                                       ℓ3
ami
                                               1 G4 M 5
                                            P ∼         .
                                               2 ℓ5 c5
ad. Numerikus tényezőtől eltekintve ez a kvadrupólusformula, amelyet az általános relativitáselméletről
szóló jegyzetekben vezettünk le.

Megjegyzés. Két lassan mozgó töltés közelítőleg a következő Lagrange-függvénnyel írható le:
                                       X1            q1 q2
                                  L0 =      mi vi2 −       .
                                          2            r
                                              i

A sugárzási hatások figyelembevétele nehéz anélkül, hogy a teljes elektromágneses tér dinamikájával
kellene foglalkoznunk, ami drasztikusan növeli a szabadsági fokok számát. Tipikus eljárás, hogy a fenti
formulákkal kiszámítjuk a kisugárzott teljesítményt, majd ezt ad hoc energiaveszteségként vezetjük be.
A sugárzás közvetlenebbül is figyelembe vehető az egyes töltésekre ható „ön-erő” révén, de ez hírhedten
nehéz.
    A legalacsonyabb rendű relativisztikus hatások figyelembevétele azonban egyszerűbb. (v/c)2 rendben
két hatás lép fel: a Coulomb-tér terjedésének retardációja és a töltések közötti mágneses erők. Tegyük
c = 1-nek, és dolgozzunk Coulomb-mértékben. Ebben a mértékben a skalárpotenciál egyáltalán nem
retardált, hanem pillanatszerűen terjed, ezért a keresett hatás teljes egészében a vektorpotenciálba kerül.
A keresett új tagok:
                                L1 = q1 v1 · A2 (r1 ) + q2 v2 · A1 (r2 ).

Mivel már eleve van egy v-vel lineáris előtényező, a vektorpotenciált v első rendjéig kell venni.
Ez a legalacsonyabb rend, ezért a magnetosztatikus kifejezésből határozható meg:
                                                         Jt (r′ )
                                                  Z
                                              µ0
                                      A(r) =        dr′           .
                                              4π        |r − r′ |
Az áram transzverzális része egy ponttöltés áramából kiindulva és a fent leírt módon transzverzális
részt véve számítható ki. Ez adja a Darwin-Lagrange-függvényt:

                                    q1 q2            (v1 · r)(v2 · r)
                              L1 =         v1 · v2 +                    .
                                     2r                     r2

Ennél tovább nem juthatunk. (v/c)3 rendben sugárzási visszahatási erők jelennek meg, ezért a
Lagrange-függvénynek tartalmaznia kell a tér szabadsági fokait.

2.6     Elektromágnesség anyagban
Ebben a részben áttekintjük az anyagban lévő elektromágneses terek alapvető klasszikus eredményeit.
Szigetelőkkel kezdjük, amelyeket ebben az összefüggésben elektromos terekben lévő dielektrikumoknak
nevezünk.

 • Kis, statikus elektromos térben az anyag minden atomja átlagosan elektromos dipólusmomentumot kap:
   p = αE. A tér dipólusmomentumokat indukálhat, vagy egyszerűen egy irányba rendezheti a meglévőket.

 • A linearitás megszűnésének megértéséhez jegyezzük meg, hogy a problémában szereplő egyetlen további
   elektromos terek magukban az atomokban és molekulákban lévő terek. Dimenzióérvek alapján lineáris
   eredményre számítunk mindaddig, amíg a külső tér jóval gyengébb a belső tereknél, vagyis amíg a külső
   tér messze nem elég erős az elektronok leszakításához.

 • Ennek eredményeként az anyag dipólusmomentum-sűrűsége P = np, ahol n az atomok számsűrűsége.
   Itt implicit módon durva felbontású átlagolást végzünk, hogy n(x) jól definiált legyen, p-t pedig atomos
   léptékeken átlagoljuk. Ezzel elkerüljük a P gyors mikroszkopikus változásait.

 • Bár a polarizált anyagok elektromosan semlegesek, kötött töltések felhalmozódhatnak, mert P nem
   feltétlenül egyenletes. Ennek belátásához vegyük észre, hogy
                                                  P(r′ ) · (r − r′ )
                                          Z
                                   ϕ(r) =     dr′
                                            V        |r − r′ |3
      ahol 4πϵ0 = 1-et választottunk és a dipóluspotenciált használtuk. Ezután
                                                                 P(r′ )              ′       ′
                                                       Z
                                                                                 ′ ∇ · P(r )
                       Z                                                    Z
                            ′    ′     ′      1
                ϕ(r) =    dr P(r ) · ∇                =    dS ·           −    dr
                        V                  |r − r′ |    ∂V      |r − r′ |    V      |r − r′ |
      ahol parciális integrálást végeztünk, amiből
                                     σbound = P · n̂,     ρbound = −∇ · P
      adódik a felületen, illetve a térfogatban. Ez utóbbi eredmény azt mutatja, hogy a P polarizáció
      −P/ϵ0 elektromos teret hoz létre.

 • Lineáris izotróp dielektrikumban
                                                  P = ϵ0 χe E
      ahol χe az elektromos szuszceptibilitás. Általában χe pozitív. Azokat az anyagokat, amelyeknek
      P ̸= 0 még külső elektromos tér hiányában is, ferroelektromosnak nevezzük. Erős terek esetén magasabb
      rendű tagokat is figyelembe kell venni, kristályos szilárd test dielektrikuma esetén pedig az anizotrópiát
      is, vagyis χe tenzorrá lép elő.

 • Az előző egyenletben E a dielektrikumban lévő teljes átlagos tér: tartalmazza mind a külső tereket,
   mind a dielektrikum által keltett tereket. Tekintsünk például síkkondenzátort, amelynek lemezei önmagukban
   Eext teret hoznak létre. Ekkor
                                       P = ϵ0 χe E,     E = Eext − P/ϵ0 .
      P-re megoldva és azt kiküszöbölve:
                                                         Eext
                                                  E=
                                                        1 + χe
      ezért a dielektromos állandót κ = 1 + χe alakban azonosíthatjuk. Mivel általában χe > 0, a teret
      töltésárnyékolás csökkenti.


 • Az elemzés általánosításához szabad töltésnek nevezünk minden töltést a kötött töltésen kívül:
                                            ρ = ρbound + ρfree .
    A Gauss-törvényben szereplő elektromos teret minden töltés forrása:
                                                          ρ
                                               ∇·E=          .
                                                          ϵ0
    Az elektromos eltolást úgy definiáljuk, hogy csak a szabad töltés legyen a forrása:
                                     D = ϵ0 E + P,       ∇ · D = ρfree .
    Ez azt jelenti, hogy a határokon D⊥ folytonos. Az „elektromos eltolás” elnevezés Maxwelltől
    származik, aki az éter szó szerinti eltolásaként gondolt rá.

 • Lineáris dielektrikumokra így
                                        D = ϵE,       ϵ = ϵ0 (1 + χe )
    ahol ϵ az anyag permittivitása. Egy dielektrikumban elhelyezett ponttöltés például ilyen elektromos
    teret eredményez:
                                                    q
                                              E=        r̂.
                                                  4πϵr2
    A κ = ϵ/ϵ0 dielektromos állandót relatív permittivitásnak, ϵr-nek is nevezik.

 • Heurisztikusan úgy gondolhatunk D-re, mint az önmagában vett „külső térre”, ϵ0 Eext-re. Az analógia
   azonban nem tökéletes, mert a fenti egyenlet nem határozza meg ∇ × D-t. Tudjuk, hogy elektrosztatikában
   ∇ × E = 0, de a D = ϵE kapcsolat miatt a határokon ∇ × D általában nemzérus.

 • Továbbá a határon
                                               σ
                         ∆E∥ = 0,     ∆E⊥ =       ,   ∆D∥ = ∆P∥ ,          ∆D⊥ = σf .
                                               ϵ0

Most a dielektrikumok energiájának zavarba ejtő kérdését tekintjük.

 • Szabad és kötött töltés jelenlétében a teljes energiának négy tagja van:
                               Utot = Ufree + Ufree/bound + Ubound + Uspring
    ahol az első három elektrosztatikus kölcsönhatásokat számol, Uspring pedig az egyes atomokat vagy
    molekulákat összetartó „rugókban” tárolt nemelektrosztatikus energia.

 • A szokásos ϵ0 E 2 /2 energiasűrűség csak az elektrosztatikus energiát számolja, ezért hiányzik belőle
   Uspring. Ha azonban a szabad töltések rögzített dielektrikumhoz való eljuttatásához szükséges munkát
   akarjuk kiszámítani, a teljes Utot energiára van szükség. Ha ezt fokozatosan végezzük:
                               Z               Z                   Z
                       dUtot = dr V dρf = dr V ∇ · (dD) = dr E · dD
    ahol parciális integrálást végeztünk és elhagytunk egy peremtagot. Ez azt jelenti, hogy
                                                Z
                                      dUspring = dr E · dP.


 • Lineáris dielektrikum esetén az integrálás
                                       Z                           Z
                                     1                         1
                              Utot =     dr E · D,   Uspring =         dr E · P.
                                     2                         2
    azt adja. Ez azt jelenti, hogy a szabad töltések a nagyobb ϵ értékű tartományok felé vonzódnak.

 • A dielektrikumok termodinamikájában nem egyértelmű, mit számítsunk az anyag „belső” energiájának.
   Szokás szerint kizárjuk az összes térenergiát, mert az messze az atomokon és molekulákon kívülre is
   kiterjed, ezért csak Uspring-et számítjuk. Pontdipólus esetén
                                            dUspring = E · dp.

 • Mechanikával foglalkozva viszont teljesen más mennyiségre lehet szükségünk. Tegyük fel, hogy egy
   rögzített háttérteret E0 hoznak létre mesterségesen helyben tartott töltések, így Ufree állandó. Ekkor
   a dielektrikum ebbe a térbe való bejuttatásához kapcsolódó energiát szeretnénk ismerni.

 • Ennek megértéséhez először egyetlen pontdipólus behelyezését vizsgáljuk. Az egyszerűség kedvéért
   lineáris polarizációt feltételezve a rugóenergia kvadratikus:
                                                          p2
                                              Uspring =      .
                                                          2α
    Tegyük fel, hogy a dipólusmomentum p-t mesterségesen rögzítjük, majd ezt a rögzített dipólust
    bevisszük a térbe. Az energiaváltozás
                                     Ufree/bound + Ubound = −p · E0 .
    Ez például azt jelenti, hogy rögzített dipólusmomentumú dipólus nyomatékot tapasztal, amely a
    külső térrel való egybeigazodásra törekszik. Ezt ezért „mechanikai” energiaként foghatjuk fel.

 • Ha már nem rögzítjük a dipólusmomentumot, akkor a dipólus teljes energiájának minimalizálása
                                                                       1
                         p = αE0 ,   Ufree/bound + Ubound + Uspring = − E0 · p.
                                                                       2
    adódik. Lineáris dielektrikumra az analóg kifejezés:
                                                                Z
                                                              1
                          Ufree/bound + Ubound + Uspring = −       dr E0 · P.
                                                              2
    Ez azt jelenti, hogy a dielektrikumok a nagyobb külső terű tartományok felé vonzódnak.

Megjegyzés. Szilárd testekben nincs egyértelmű különbség kötött és szabad töltés között. Tekintsük
például a NaCl ionrácsát. A kristályt elemi cellákra oszthatjuk, és mindegyiket molekulának tekinthetjük.
Ekkor az egyes elemi cellák „kötött töltésből” származó dipólusmomentuma attól függ, hogyan választjuk
meg a cellát. Hasonlóan a teljes elemi cellákba nem kerülő határatomok „szabad” töltése is függ a
cellaválasztástól. Természetesen e hozzájárulások összegének függetlennek kell lennie a cellától.
