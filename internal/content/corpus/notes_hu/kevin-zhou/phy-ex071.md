---
id: kevin-zhou-notes-phy-ex071
source: kevin-zhou-notes
native_id: "phy Example 071"
origin: "Kevin Zhou personal physics notes"
language: hu
translated: true
links_en: kevin-zhou-notes-phy-ex071
topic: [kvantumfizika]
subtopic: [szabad részecske propagátora, úttintegrálok, Gauss-integrálok]
math_tools: [kalkulus, differenciálegyenletek, Fourier-ötletek]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "8435-8787"
archive_layer: reference_notes
source_role: explanatory_example
---

Példa. A szabad részecske propagátora. Mivel a probléma időfüggetlen, t0 = 0-t választunk, és
elhagyjuk. Ekkor
                            K(x, x0 , t) = ⟨x| exp(−itp̂2 /2mℏ)|x0 ⟩
                                           Z
                                         = dp ⟨x| exp(−itp̂2 /2mℏ)|p⟩⟨p|x0 ⟩

                                                                           p2 t
                                           Z
                                               dp        i
                                         =         exp       p(x − x0 ) −
                                              2πℏ        ℏ                 2m
                                                                        2
                                           r
                                                m          i m(x − x0 )
                                         =          exp
                                              2πiℏt        ℏ     2t
ahol Gauss-integrált használtunk. A t → 0 határeset kissé szinguláris; azt várjuk, hogy delta-
függvény, a propagátor nagysága azonban minden x-re azonos. A feloldás az, hogy az x szerinti
fázisoszcillációk egyre gyorsabbak, így K(x, t) tesztfüggvénnyel integrálva delta-függvényként
viselkedik.
A bonyolultabb helyzetekben a propagátor kiszámítására úttintegrálos módszert használunk. A
H = T + V = p2 /2m + V (x) Hamilton-operátorral dolgozunk, mivel a p magasabb hatványait tartalmazó
általánosabb Hamilton-operátorokat nehezebb kezelni.
    • Kis ϵ időre az időfejlődés
                                     iϵ
                        U (ϵ) = 1 − (T + V ) + O(ϵ2 ) = e−iϵT /ℏ e−iϵV /ℏ + O(ϵ2 ).
                                     ℏ
      Ezért a t = N ϵ időre
                                                              N
                                             −iϵT /ℏ −iϵV /ℏ
                                  U (t) = e         e           + O(1/N ).

      Ez a Lie-szorzatformula speciális esete; a hiba N → ∞ esetén eltűnik.

  • Ezt a felbontást használva N − 1-szer beillesztjük az identitást:
                                    Z                      N
                                                           Y −1
              K(x, x0 , t) = lim        dx1 . . . dxN −1         ⟨xj+1 |e−iϵT /ℏ e−iϵV /ℏ |xj ⟩,   x = xN .
                             N →∞
                                                           j=0

    Minden tényezőben beillesztjük az impulzustérbeli identitásfelbontást:

                                                                              (xj+1 − xj )2
      Z                                                      r
                     −iϵp̂2 /2mℏ         −iϵV (x̂)/ℏ            m         i
         dp ⟨xj+1 |e             |p⟩⟨p|e             |xj ⟩ =         exp    m               − ϵV (xj )
                                                               2πiϵℏ      ℏ        2ϵ

    ahol a szabad részecske esetével majdnem azonos Gauss-integrált számítottunk ki. Ezután
                                                                                                 
                                                                N −1                 2
                           m  N/2 Z                          iϵ X       (xj+1 − xj )
      K(x, x0 , t) = lim              dx1 . . . dxN −1 exp           m                − V (xj ) 
                    N →∞ 2πiℏϵ                               ℏ              2ϵ2
                                                                             j=0

  • Riemann-összegként felismerve a fenti képletet
                                           Z             Z t
                                                         i
                           K(x, x0 , t) = C Dx(τ ) exp       L dτ
                                                         ℏ 0

    ahol C normálási állandó, Dx(τ ) pedig az „úttér” térfogateleme.

  • Minden √∆t időintervallumra a járulékhoz lényegesen hozzájáruló helyek tartománya
    ∆x ∼ ∆t, mivel a gyors oszcillációk ezen a tartományon kívül kioltják a járulékot. Ez azt jelenti,
    hogy a tipikus úttintegrálos utak folytonosak, de nem differenciálhatók. Ez problémát jelent a
    fenti tömör akcióintegrál-jelölés számára, mivel a Lagrange-formalizmus differenciálható utakat
    feltételez, de ezt most figyelmen kívül hagyjuk.

  • Ha nem végezzük el az impulzusszámlálást, akkor a fázistérbeli úttintegrált kapjuk:
                                       Z                   Z t
                                                          i
                       K(x, x0 , t) = C Dx(τ )Dp(τ ) exp       (pẋ − H) dτ
                                                          ℏ 0

    ahol x a végpontokon rögzített, p viszont nem. Ez a forma ritkább, de általánosabb, mivel akkor
    is alkalmazható, ha a kinetikus energia nem kvadratikus az impulzusban. Ilyen esetekben az
    impulzusintegrálok nem Gauss-integrálok, és nem végezhetők el. Szerencsére a szokásos úttintegrál
    minden fontos esetünkben működni fog.

  • A szokásos úttintegrál a p-ben lineáris tagokat is kezeli, mivel ezek eltolt Gauss-integrálok;
    például mágneses térrel való csatoláskor jelennek meg, p2 → (p − eA)2.

Megjegyzés. A pontszerű részecske viszonylag egyszerű esetében az úttintegrál divergáló normálási
állandójába abszorbeáljuk a végteleneket. Kvantumtér-elméletben erre az állandóra általában ei∆S-ként
gondolunk, ahol ∆S az akció „ellen-tag” járuléka. Tipikusan Λ energiakorlátot választunk az
úttintegrál érvényességére, és megmutatjuk, hogy ∆S-t úgy lehet Λ-val változtatni, hogy jól definiált
Λ → ∞ határérték adódjon. Ezt renormálásnak nevezzük. Az alábbi úttintegrál-számításokat is így
kezelhetnénk, mivel a kvantummechanikai úttintegrál olyan kvantumtér-elmélet, amelyben az operátoroknak
nincs térfüggésük, vagyis egydimenziós kvantumtér-elmélet. Ezt a nézőpontot a Kvantumtér-elmélet
című jegyzet fejti ki részletesebben.

6.2     Gauss-integrálok
Az úttintegrál egyik erőssége, hogy szem előtt tartja a klasszikus utakat; ezért jól alkalmazható
félklasszikus közelítésekhez. Először áttekintjük a Gauss-integrálás néhány tényét.

  • A Gauss-integrálás alapvető eredménye
                                 Z               r
                                       −ax2 /2     2π
                                   dx e        =       ,          Re a > 0.
                                                    a
      Az integrálási határok hallgatólagosan −∞-től ∞-ig értendők. Ezt deriválva
                                         Z                  r
                                                 −ax2 /2 2    2π
                                             dx e       x =      .
                                                              a3

  • Négyzetté kiegészítéssel és eltolással
                                     Z                       r
                                            −ax2 /2+bx           2π b2 /2a
                                         dx e            =          e      .
                                                                  a
      Ez komplex b-re is érvényes, mert az integrálási kontúrt a komplex síkban eltolhatjuk; ez
      megengedett, mivel nincs elkerülendő szingularitás.

  • A Gauss-integrál komplex argumentumokra való általánosításához az alapvető eredmény
                                  Z
                                                    π
                                     d(z, z) e−zwz = , Re w > 0.
                                                    w
                       R                                           R
    Itt a d(z, z) jelölés formális: dx dy-t jelöl, ahol z = x + iy és z = x − iy; a gyakorlatban mindig
    úgy számoljuk ezeket az integrálokat, hogy z-t valós és képzetes részre bontjuk, és külön elvégezzük
    a dx és dy integrálokat. (Differenciálformák nyelvén dzdz = dxdy egy konstansszorzótól eltekintve.)

  • Hasonlóan, a valós és képzetes részek figyelembevételével
                             Z
                                                      π
                                d(z, z) e−zwz+uz+zv = euv/w ,            Re w > 0.
                                                      w

  • A valós Gauss-integrál többdimenziós általánosítása
                                                       r
                                                         (2π)N
                                     Z
                                            −vT Av/2
                                       dv e          =
                                                         det A
      ahol A valós és pozitív definit. Ekkor A szimmetrikus és diagonalizálható, így az integrál N
      standard Gauss-integrálra esik szét; a pozitív definitás biztosítja, hogy ezek konvergáljanak.

  • Hasonlóan, v-ben lineáris tag esetén
                                                r
                                                  (2π)N
                       Z
                                   1 T      T                 1 T −1
                           dv exp − v Av + j v =        exp     j A j .
                                   2              det A       2

      Ez a v → v + A−1 j eltolással mutatható meg.

 • Ezután az előző azonosságot j szerint, j = 0-ban deriválhatjuk. Mivel azonban
                                             T   −1 j/2                    T   −1 j/2
                                      ∂jm ej A            = (A−1 j)m ej A

   egyetlen deriválás esetén a j = 0-ban kiértékelt eredmény eltűnik. Két deriválásnál viszont az
   A−1 j tag deriválásával nem zérus eredményt kapunk:
                                                          r
                                                            (2π)N −1
                                 Z
                                         −vT Av/2
                                    dv e          vm vn =         A .
                                                            det A mn
    A Gauss-eloszlást valószínűségi eloszlásként értelmezve ez

                                                  ⟨vm vn ⟩ = A−1
                                                              mn .

    Hasonlóan, tetszőleges páros számú deriválás esetén az összes párosítás összege adódik:
                                                  X
                              ⟨vi1 · · · vi2n ⟩ =   A−1           −1
                                                     ik ik . . . Aik ik .
                                                                  1   2            2n−1   2n
                                                   párosítások

   Ezt Wick-tételnek nevezzük.

 • Komplex esetben
                                                                           πN
                                         Z
                                                              †
                                             d(v† , v) e−v Av =
                                                                          det A
   ahol A-nak pozitív definitnek kell lennie. (A következtetés akkor is érvényes, ha csak a Hermitikus
   része pozitív definit.) Lineáris tag esetén

                                                         π N w† A−1 w′
                         Z
                                          †    †   † ′
                             d(v† , v) e−v Av+w v+v w =       e        .
                                                        det A
    Hasonlóan deriválhatunk is; nem zérus eredményhez a v szerinti deriváltakat v szerinti deriváltakkal
    kell párosítanunk. Ekkor Wick tétele
                                                                X
                             ⟨v i1 · · · v in vj1 · · · vjn ⟩ =   A−1            −1
                                                                   j 1 iP · · · Aj n i P
                                                                               1               n
                                                              permutációk

   ahol az összeg N egész szám permutációira vonatkozik.

 • A kontinuumhatárban a fenti vektorok és mátrixok függvényekké és operátorokká válnak, az integrál
   pedig úttintegrál lesz:
                   Z                 Z                           Z
                                   1          ′         ′    ′
                     Dv(x) exp −        dx dx v(x)A(x, x )v(x ) + dx j(x)v(x)
                                   2
                                                  Z
                                      1          1         ′     −1   ′    ′
                                ∝√          exp     dx dx j(x)A (x, x )j(x ) .
                                     det A       2

    Itt A−1 az A Green-függvénye, amelyre
                                Z
                                   dx′ A(x, x′ )A−1 (x′ , x′′ ) = δ(x − x′′ )

    teljesül, és elhagytunk néhány normálási tényezőt, amelyek az átlagokból kiesnek. Wick tétele
    erre az esetre közvetlenül általánosítható.

Megjegyzés. Most áttekintjük a nyeregpontközelítést. Tekintsük a
                                       Z
                                          dx eiφ(x)/κ

integrált kis κ esetén. Ekkor az integrandus vadul oszcillál, kivéve a stacionárius fázisú x pontokat.
Az exponenciálist ott másodfokúval közelítve Gauss-integrált kapunk:
           Z                s                         s
                              2πiκ                        2πκ iφ(x)/κ
              dx eiφ(x)/κ ≈    ′′
                                    eiφ(x)/κ = eiνπ/4             e   , ν = sign(φ′′ (x))
                              φ (x)                     |φ′′ (x)|

Ha több stacionárius fázisú pont van, mindegyikre összegezni kell. Hasonlóan vizsgálhatjuk a
többdimenziós integrált:
                                            Z
                                              dx eiφ(x)/κ

kis κ esetén. Ekkor a stacionárius pontok ott vannak, ahol ∇φ = 0. E pontok körül kifejtve és a
többdimenziós Gauss-képletet alkalmazva

                                                          ∂ 2 φ(x) −1/2 iφ(x)/κ
             Z                                                                            X
                 dx eiφ(x)/κ = eiνπ/4 (2πκ)n/2 det                     e        ,    ν=          sign(λi ).
                                                          ∂xk ∂xl
                                                                                           i

A teljes eredményhez az összes stacionárius pontra összegezni kell.

6.3     Félklasszikus közelítés
Ezzel a felállással most a nyeregpontközelítést alkalmazzuk az úttintegrálra.

  • Ebben az esetben a kis paraméter κ = ℏ, a függvény pedig a diszkretizált Lagrange-függvény:
                                                        N −1
                                                                 m (xj+1 − xj )2
                                                        X
                           φ(x1 , . . . , xN −1 ) = ϵ                            − V (x j )  .
                                                                 2      ϵ2
                                                        j=0

      Deriválva

                      ∂φ      m
                                                        ′
                                                                                  ∂2φ     m
                          = ϵ 2 (2xk − xk+1 − xk−1 ) − V (xk ) ,                         = Qkℓ
                      ∂xk     ϵ                                                  ∂xk ∂xℓ  ϵ
      ahol a Qkℓ mátrix tridiagonális:
                                                             
                              2 − c1    −1     0     0 ...
                             −1      2 − c2   −1    0 . . .                           ϵ2 ′′
                     Qkℓ =  0                                  ,                ck =     V (xk ).
                                                             
                                       −1   2 − c3 −1 . . .                          m
                                 ..      ..     ..   .. . .
                                  .       .      .    .     .

  • Az N → ∞ határban a stacionárius pontok egyszerűen a klasszikus x(τ ) utak, ezért

                                               lim φ(x) = S(x, x0 , t).
                                              N →∞

      Több stacionárius út esetén ágindexet vezetünk be.

 • Ezután ki kell számítanunk a det Q-t. Ennek az úttintegrál ϵ−N/2-tel arányos előtényezőjével
   együtt véges eredményt kell adnia, ezért det Q ∝ 1/ϵ várható. Ennek közvetlen módja Q
   diagonalizálása, vagyis az akció második variációjának sajátfüggvényeinek megkeresése lenne.
   Az egész számítást azonban egyetlen ügyes módszerrel elvégezhetjük.
 • Ha Dk a bal felső k × k blokk determinánsa, akkor
                                      Dk+1 = (2 − ck+1 )Dk − Dk−1 .
    Ez átrendezhető differenciaegyenletté, amely a kontinuumhatárban
                                 d2 F (τ )
                               m           = −V ′′ (x(τ ))F (τ ), Fk = ϵDk
                                   dτ 2
    alakot ölti. Egy ϵ tényezőt emeltünk ki, hogy F (τ ) reguláris legyen; a kezdeti feltételek
                        F (0) = lim ϵD0 = lim ϵ = 0,         F ′ (0) = lim (D1 − D0 ) = 1.
                               ϵ→0           ϵ→0                     ϵ→0

 • F mozgásegyenlete a klasszikus pálya körüli kis eltérés mozgásegyenlete, x(τ ) = x(τ ) + F (τ ),
   mivel a jobb oldal az erő linearizált változása. Így F (t) a t = 0-beli sebesség egységnyi
   megváltoztatására adott t időpontbeli helyváltozás, tehát
                                                                   2  −1
                                                 ∂pi −1

                                      ∂x                            ∂ S
                             F (t) =       =m             = −m                .
                                      ∂vi        ∂x                ∂x0 ∂x
    Ez a várakozásnak megfelelően reguláris; D(t)-hez úgy térünk vissza, hogy ϵ-val osztunk. Intuitívan
    ez a tényező azt mutatja meg, hogy az eredeti klasszikus pálya körüli hány út járul hozzá. Ha
    V ′′ (τ ) < 0, a közeli utak gyorsan széttartanak, míg V ′′ (τ ) < 0 esetén egy visszatérítő erő
    visszalöki őket, növelve a járulékot.
 • Végül szükségünk van a negatív sajátértékek számára, amelyet µ-val jelölünk. Kiderül, hogy µ-nek
   határozott határértéke van N → ∞ esetén. E határban ez a klasszikus pálya olyan perturbációinak
   száma, amelyek tovább csökkentik az akciót; ez tipikusan kicsi.
 • Mindent összerakva és az ágindexet visszaállítva kapjuk a Van Vleck-képletet:
                                   X e−iµb π/2 ∂ 2 Sb 1/2
                                                                i

                    K(x, x0 , t) ≈    √                   exp     Sb (x, x0 , t) .
                                       b
                                        2πiℏ ∂x∂x0              ℏ

    A Van Vleck-képlet az akciót a stacionárius utak körül másodrendig fejti ki. Pontos, ha a
    potenciális energia legfeljebb másodfokú, vagyis szabad részecskére, homogén elektromos vagy
    gravitációs térben lévő részecskére, illetve harmonikus oszcillátorra. Mágneses térben lévő
    részecskére is pontos, mivel a Lagrange-függvény legfeljebb a sebesség másodfokú függvénye.
Megjegyzés. A Van Vleck-képletnek egyszerű szemléletes értelmezése van. Lényegében azt állítja, hogy
                                                           ∂2S
                                           P (x, x0 ) ∝         .
                                                          ∂x∂x0
A változók megváltoztatásával
                                                             ∂p0   1 ∂p0
                                P (x, x0 ) = P̃ (x0 , p0 )       =
                                                             ∂x    h ∂x
adódik, mert a kezdeti fázistérbeli P̃ (x0 , p0 ) eloszlásnak mindig ki kell töltenie egy Planck-cellát.
Ez a két kifejezés összhangban van, mivel p0 = −∂S/∂x0.
