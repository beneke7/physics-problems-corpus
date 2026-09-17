---
id: kevin-zhou-notes-phy-ex045
source: kevin-zhou-notes
native_id: "phy Example 045"
origin: "Kevin Zhou personal physics notes"
language: hu
translated: true
links_en: kevin-zhou-notes-phy-ex045
topic: [statisztikus-mechanika]
subtopic: [fononok, Bose–Einstein- és Fermi–Dirac-statisztika, kondenzáció]
math_tools: [állapotsűrűség, Sommerfeld-kifejtés, klaszterkifejtés]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "4079-4514"
archive_layer: reference_notes
source_role: explanatory_example
---
Példa. Fononok. Pontosan ugyanez az érvelés alkalmazható egy szilárd test fononjaira is, azzal a különbséggel, hogy három polarizációs állapot van, és a fénysebességet, c-t a hangsebesség, cs helyettesíti. (Vagyis feltesszük, hogy a diszperziós reláció lineáris marad.) A rács egy ωD nagyfrekvenciás levágást is előír.
   Az ωD ésszerű értékének meghatározásához vegyük észre, hogy a normálmódusok száma megegyezik a szabadsági fokok számával, tehát               Z      ωD
                                                    dω g(ω) = 3N
                                           0
ahol N a rácsionok száma. A partíciós függvény nagyon hasonló a feketetest esetéhez. Alacsony hőmérsékleten az ωD levágás nem számít, ezért az integrál azonos, és

                                          E ∝ T4        C ∝ T 3.

Magas hőmérsékleten megmutatható, hogy a fenti ωD választással egyszerűen visszakapjuk a Dulong–Petit-törvényt. A Debye-modell egyetlen problémája, hogy a fononok diszperziós relációja valójában nem lineáris. Ez nagyon magas vagy nagyon alacsony hőmérsékleten nem számít, közepes hőmérsékleten azonban kisebb eltéréseket okoz.

Most formálisan bevezetjük a Bose–Einstein-eloszlást. Az egyszerűség kedvéért a nagykanonikus sokaságban dolgozunk.

  • Tekintsünk egy olyan részecskekonfigurációt, amelyben ni részecske van az i állapotban, és
                                                                                P
    i ni = N . A Maxwell–Boltzmann-eloszlásban a részecskéket megkülönböztethetőnek tekintjük, majd a végén elosztunk N !-lal, ezért ennek a konfigurációnak a valószínűsége arányos
                                                   
                                    1 N        N − n1          Y 1
                                                        ··· =          .
                                    N ! n1       n2               ni !
                                                                   i

    A Bose–Einstein-eloszlásban ehelyett minden konfigurációt a kvantummező egyetlen állapotának tekintünk, ezért minden állapot súlya 1.

  • Amíg minden ni nulla vagy egy (a klasszikus határátmenet), a két módszer megegyezik. Ha azonban diszkrét kvantumállapotokat vezetünk be, az N !-lal való egyszerű osztás többé nem „visz át minket a megkülönböztethető részecskéktől a megkülönböztethetetlenekhez”. Azok az állapotok, amelyekben egyes energiaszintek többszörösen foglaltak, nem kapnak elegendő súlyt.

  • Hasonlóképpen, a Fermi–Dirac-eloszlás is megegyezik a klasszikus eredménnyel, amíg ⟨ni ⟩ ≪ 1.
78 3. Statisztikus mechanika


 • Másképpen fogalmazva a klasszikus esetben azt képzeljük, hogy minden részecskére festhetünk címkét; a végén N !-lal osztunk, mert a címkék önkényesek. Ez azonban tökéletlen közelítése a valódi megkülönböztethetetlenségnek, mert amikor két részecske ugyanabba az állapotba kerül, el kell veszítenünk a címkék nyomon követését!

 • Egyetlen egy-részecske kvantumállapot, |r⟩ esetén a Bose–Einstein-partíciós függvény:
                                       X                              1
                                Zr =        e−βnr (Er −µ) =                      .
                                       nr
                                                                1 − e−β(Er −µ)

    Vegyük észre, hogy klasszikus esetben még 1/nr !-lal is szoroztunk volna. E tényező nélkül az összeg esetleg nem konvergál, ezért azt is megköveteljük, hogy minden Er > µ legyen. Az alapállapot energiáját E0 = 0-nak választva µ < 0 szükséges.

  • A várható foglaltság meghatározható egy számtani-mértani sor összegzésével, vagy annak észrevételével, hogy
                                            1 ∂                1
                                  ⟨nr ⟩ =        log Zr = β(E −µ)    .
                                            β ∂µ         e   r    −1
    Ezt az eredményt Bose–Einstein-eloszlásnak nevezzük.

  • A szorzatot véve a nagykanonikus partíciós függvény:
                                                 Y          1
                                            Z=
                                                 r
                                                     1 − eβ(Er −µ)

    ahol a szorzat minden egy-részecskeállapotra kiterjed.

  • A Bose–Einstein-eloszlást használva kiszámíthatjuk a Bose-gáz tulajdonságait:
                              Z                        Z
                                        g(E)                   Eg(E)
                        N = dE −1 βE            , E = dE −1 βE
                                     z e −1                 z e −1
    ahol z = eβµ a fugacitás. A µ < 0 stabilitási feltétel azt jelenti, hogy z < 1.

  • A nyomás kiszámításához vegyük észre, hogy
                                                     Z
                                1          1
                            pV = log Z = −               dE g(E) log(1 − ze−βE ).
                                β          β

    A nemrelativisztikus esetben g(E) ∼ E 1/2 . Parciális integrálás után
                                                     2
                                                 pV = E
                                                     3
    adódik, ami megegyezik a klasszikus egyatomos gáz eredményével. Összehasonlításképpen fent láttuk, hogy az ultrarelativisztikus esetben 1/3 adódik.

  • Magas hőmérsékleten a z ≪ 1 szerinti kifejtéssel kiszámíthatjuk az ideális gáz törvényének korrekcióit:
                                  N    z         z
                                    = 3 1 + √ + ···
                                  V    λ        2 2
79 3. Statisztikus mechanika


    Annak belátásához, hogy z ≪ 1 magas hőmérsékleti kifejtést jelent, vegyük észre, hogy itt z ∼ λ3 ∼ T −3/2 . Ezután hasonlóan kifejtjük az energiát:
                                                           
                                   E     3z        z
                                      = 3      1 + √ + ··· .
                                   V    2λ β      4 2
    E két egyenletet összevetve az ideális gáz törvényének első korrekciója:
                                                      λ3 N
                                                                
                                pV = N kB T 1 − √           + ... .
                                                     4 2V
    A nyomás kisebb; ennek fizikai szemlélete az, hogy a bozonok „szeretnek összetömörülni”, mivel hiányoznak az 1/nr ! súlyok, amelyekkel a klasszikus gáz rendelkezik.

Megjegyzés. Kifejezettebb eredményekhez hasznos bevezetni a következő függvényeket:
                                                Z ∞
                                            1              xn−1
                                gn (z) =             dx −1 x      .
                                          Γ(n) 0        z e −1
Egyszerűsítésként a nevezőt mértani sorként fejtjük ki:
                         ∞                                   ∞            Z ∞                   ∞
                                                         1 X zm                                   zm
                             Z
                     1 X                                                                        X
         gn (z) =                dx xn−1 e−mx z m =                             du un−1 e−u =              .
                    Γ(n)                                Γ(n) mn           0                           mn
                       m=1                                  m=1                                 m=1

A gn (z) függvények z szerint monotonak, és
                                   N   g3/2 (z)         E   3 kB T
                                     =          ,         =        g (z)
                                   V     λ3             V  2 λ3 5/2
az ideális Bose-gázra. Végül fotongázok esetén, ahol µ = 0:
                                              gn (1) = ζ(n).

A zétafüggvény hasznos speciális értékei:
                                                 π2                π4
                                        ζ(2) =      ,     ζ(4) =      .
                                                 6                 90
Ezek levezethetők az alábbi kifejezés kiértékelésével:
                                         Z π
                                                    dx |f (x)|2
                                               −π
az f (x) = x, illetve f (x) = x2 függvényekre, közvetlen integrálással és Fourier-sorokkal.

Megjegyzés. A Bose–Einstein-eloszlást a mikrokanonikus sokaságból kiindulva is levezethetjük. Az energiaszinteket s-sel indexelve legyen Ns bozon egy Ms degenerációjú energiaszinten. Az állapotok száma
                                          Y (Ns + Ms − 1)!
                                     Ω=                     .
                                           s
                                              Ns !(Ms − 1)!
Stirling-közelítést használva az entrópia:
                                X
             S = kB log Ω = kB     (Ns + Ms ) log(Ns + Ms ) − Ns log Ns − Ms log Ms .
                                    s
80 3. Statisztikus mechanika


Másrészt tudjuk, hogy dS = dU/T − (µ/T )dN , ahol
                                   X                 X
                             dU =     Es dNs , dN =      dNs .
                                        s                          s

Ezt behelyettesítve, és a dNs együtthatóját nullává téve:
                              log(Ns + Ms ) − log Ns − βEs + βµ = 0.

Ugyanez a lépés úgy is megfogalmazható, hogy az entrópiát rögzített N és U mellett maximalizáljuk, az utolsó két tag pedig Lagrange-szorzókból származik. Átrendezve azonnal megkapjuk a Bose–Einstein-eloszlást, ahol ⟨ns ⟩ = Ns /Ms . Hasonló érvek érvényesek a Fermi–Dirac- és a Boltzmann-eloszlásra is.

Megjegyzés. Az a gondolat, hogy a termodinamikai mennyiségek Lagrange-szorzók, nagyon általános. Minden megmaradó mennyiséghez tartozik egy Lagrange-szorzó. A részecskeszámhoz a kémiai potenciált kapjuk. Elektromos töltés esetén például a hozzá tartozó Lagrange-szorzó az elektromos potenciál lenne. Ez lényegesen eltér e mennyiségek szokásos értelmezésétől, amely szerint ezek a megfelelő megmaradó mennyiség környezetből való eltávolításának energiaköltségét adják meg. A hőmérséklethez hasonlóan azonban ezt a képet is visszakaphatjuk, ha eredeti rendszerünket egyszerűen egy alrendszerre és egy „környezetre” osztjuk, majd az alrendszert elemezzük.

Most ezeket az eredményeket használjuk a Bose–Einstein-kondenzáció vizsgálatára.

  • Tekintsük az alacsony hőmérsékleteket, amelyek nagy z-nek felelnek meg, és rögzítsük N -et. Mivel

                                               N   g3/2 (z)
                                                 =
                                               V     λ3
    a g3/2 (z) mennyiségnek növekednie kell, ahogy λ3 nő. Tudjuk azonban, hogy g3/2 (z) maximális értéke g3/2 (1) = ζ(3/2), ezért ez a kritikus hőmérséklet alatt lehetetlen:
                                                                   2/3
                                               2πℏ2
                                                      
                                                            n
                                        Tc =
                                               kB m       ζ(3/2)

  • A probléma az, hogy korábban a kontinuumhatárátmenetet vettük, és az állapotok összegeit integrálásra cseréltük; ez jó közelítés, ha egyetlen állapot foglaltsága is kicsi. T < Tc esetén azonban az alapállapot foglaltsága makroszkopikusan nagy lesz!

  • Az alapállapot nem szerepel az integrálban, mert g(0) = 0, ezért kézzel hozzáadjuk:
                                  N   g3/2 (z)                             1
                                    =          + n0 ,       n0 =                .
                                  V     λ3                             z −1 − 1
    T < Tc esetén z nagyon közel kerül az egyhez (z ∼ 1 − 1/N ), és a második tag pótolja az elsőt. T → 0 esetén minden részecske az alapállapotban ül.

  • Azt mondjuk, hogy T < Tc esetén a rendszer Bose–Einstein-kondenzátumot (BEC) alkot. Mivel egy BEC-ben a nem kondenzált részecskék száma rögzített hőmérsékleten független a sűrűségtől, a BEC állapotegyenlete sem függ a sűrűségtől.
81 3. Statisztikus mechanika


  • A fázisátmenet viselkedésének explicit megfigyeléséhez vegyük észre, hogy z → 1 esetén megmutatható:
                                                        √
                                   g3/2 (z) ≈ ζ(3/2) + A 1 − z + . . . .

A Tc definícióját alkalmazva:
                                   3/2
                                     T          √     1 1
                                            −1∼A 1−z−       .
                                    Tc                N 1−z
Minden konstans elhagyásával, redukált hőmérsékletre áttérve, és x = 1 − z-t bevezetve:
                                                    √         1
                                             t∼         x−      .
                                                             Nx
Mivel x soha nem nulla, a t(x) (és így az x(t)) függvény tökéletesen analitikus, ezért nincs fázisátmenet. A termodinamikai határátmenetben azonban
                                                    (
                                                     t2 t > 0
                                         lim x(t) =
                                        N →∞         0 t<0
nemanalitikus, mivel a második deriváltja szakadást mutat.

  • Az energiát deriválva a hőkapacitás:
                                         dE   g5/2 (z)   1 dg5/2 dz
                                  CV =      ∼     3
                                                       + 3          .
                                         dT     λ       λ dz dT
    Ekkor a hőkapacitás deriváltja d2 z/dT 2 -től függ, és t = 0-nál szakad.

  • A BEC-átmenet másik jellemzése szerint akkor következik be, amikor a kémiai potenciál eléri az alapállapot energiáját, és formálisan divergáló részecskeszámot hoz létre benne.

Megjegyzés. Olyan gázban, amelyben a részecskeszám N nem megmaradó mennyiség, a részecskék az entrópia maximalizálása érdekében szabadon keletkeznek és semmisülnek meg, ezért a kémiai potenciál µ = 0. Ilyen gázban Bose–Einstein-kondenzáció nem alakulhat ki. A hőmérséklet csökkentésével ehelyett N nullához tart.
   Ha N közelítőleg megmarad, és N a hőmérsékletegyensúlyba kerülés idejénél sokkal hosszabb T időskálán változik, akkor T-nél jóval rövidebb időkre nem nulla µ-jú kváziegyensúlyt figyelhetünk meg. A µ = 0 beállítása azt is formálisan eredményezi, hogy N divergál, ha nulla energiájú állapotok vannak. Ez az infravörös divergencia valóban helyes; például minden egyes szórási eseményben formálisan végtelen számú foton jön létre. Ez fizikailag elfogadható, mivel ezek a fotonok nem detektálhatók.

Megjegyzés. A Bose–Einstein-kondenzációt először 1925-ben jósolták meg. 1938-ban fedezték fel a 4 He szuperfolyékonyságát. A szuperfolyadékok azonban messze vannak az ideális BEC-ktől, mivel kölcsönhatások nélkül nem érthetők meg. Az első valódi BEC-ket 1995-ben állították elő híg atomgázokból mágneses csapdában, Tc ∼ 100 nK mellett. Ezt a hőmérsékletet Doppler-féle lézeres és párologtatásos hűtéssel érték el. További részletek az Optika jegyzeteiben találhatók.

Megjegyzés. Hogyan kondenzálódhatnak a bozonikus atomok ugyanabba az állapotba, ha fermionokból (elektronokból és nukleonokból) állnak, amelyek nem lehetnek ugyanabban az állapotban? Tegyük fel konkrétan, hogy az összes 1s állapotú hidrogénatom a K = 0 módusba kondenzál. A spint az egyszerűség kedvéért elhanyagolva, az ebben a módusban lévő hidrogénatom V térfogatú dobozban vett keltőoperátora:
                                           1 X
                                      c† ∼      φ(k) a†k b†−k
                                           V
                                                k
82 3. Statisztikus mechanika


ahol φ(k) az 1s állapot impulzustérbeli hullámfüggvénye, az a†k és b†k operátorok pedig egy k impulzusú protont és elektront keltenek. A kizárási elv miatt a†k és b†k négyzete egyaránt nulla, de c† négyzete nem az. Egy atomnak az állapothoz való hozzáadása után:
                                                              |φ(0)|2  a3
                                    ⟨a†k ak ⟩ ∼ ⟨b†k bk ⟩ ∼           ∼ 0
                                                                V       V
ahol a0 a Bohr-sugár. Ezért legfeljebb ∼ V /a30 atomot adhatunk ehhez az állapothoz, mielőtt a Pauli-kizárási elv számítani kezdene. Ezt néha lazán, de félrevezetően úgy fogalmazzák, hogy „az atomok ugyanabban az állapotban vannak, de a hullámfüggvényeik nem fedik át egymást”.
   Az általánosabb tanulság az, hogy a kondenzáció soha nem teszi lehetővé a Pauli-kizárási elv megkerülését. A szupravezetés mikroszkopikus elméletében például közvetlenül dolgozhatunk a b†k,± elektronoperátorokkal; ekkor b†k,± négyzete továbbra is nulla. Definiálhatunk azonban a c-hez hasonló szupravezető rendparaméter-mezőt, amelynek módusai nagy foglaltságúak lehetnek.

3.6     Fermi–Dirac-statisztika
Most a fermionokra térünk át, amelyek Fermi–Dirac-statisztikát követnek.

  • Minden egy-részecske kvantumállapotot, |r⟩, egy vagy két részecske foglalhat el, ezért
                                                                               1
                                Zr = 1 + e−β(Er −µ)           ⟨nr ⟩ =                   .
                                                                        eβ(Er −µ) + 1
      Az nr -re kapott kifejezést Fermi–Dirac-eloszlásnak nevezzük; csak egy előjelben tér el a Bose–Einstein-eloszlástól. Mivel itt nincsenek konvergenciaproblémák, µ pozitív is lehet.
83 3. Statisztikus mechanika


  • Az N , E és pV kifejezése szinte azonos a Bose-gáz esetével, ismét csak néhány előjelben tér el. A korábbiakhoz hasonlóan pV = (2/3)E. A további mínuszjelek magas hőmérsékleten a klasszikus gáz nyomásához képest elsőrendű nyomásnövekedést okoznak.

  • Alacsony hőmérsékleten a Fermi–Dirac-eloszlás:
                                               n(E) = θ(µ − E).
      Az EF Fermi-energiáig minden állapot betöltött; ebben az esetben EF egyszerűen a kémiai potenciállal egyenlő. Ezek a betöltött állapotok alkotják a „Fermi-tengert” vagy „Fermi-gömböt”, határuk pedig a Fermi-felület. Az EF igen nagy lehet; a hozzá tartozó TF = EF /kB hőmérséklet fémekben körülbelül 104 K, fehér törpékben pedig 107 K.

  • A teljes energia                      Z Ef
                                                              3
                                       E=           dE Eg(E) = N EF
                                               0              5
      a nyomás pedig
                               Z                                         Z Ef
                1        1                             −β(E−µ)                                     2
            pV = log Z =           dE g(E) log(1 + e               )=              dE (µ − E)g(E) = N EF .
                β        β                                                 0                       5

      Ezt a zérus hőmérsékleti nyomást degenerációs nyomásnak nevezzük.
84 3. Statisztikus mechanika


  • Ezután vizsgáljuk a részecskeszám- és energiasűrűséget nulla hőmérséklet közelében:
                              Z ∞                       Z ∞
                                        g(E)                       Eg(E)
                        N=        dE −1 βE      , E=        dE −1 βE
                                0    z e +1              0    z e +1

    ahol g(E) az állapotsűrűség. Azt vizsgáljuk, hogyan függ E és µ T -től, N rögzítése mellett.

  • Először azt állítjuk, hogy dµ/dT = 0 T = 0-nál. Ha µ rögzített, akkor ∆N ∼ T 2 , mivel a Fermi–Dirac-eloszlás szimmetrikusan kiszélesedik az E = EF körül. Ha azonban dµ/dT ̸= 0, akkor ∆N ∼ T , mivel a Fermi-felület kifelé tolódik, így nem lehet ∆N = 0.

  • Nagyobb hőmérsékleten µ-nek csökkennie kell, hiszen tudjuk, hogy az ideális gázhoz közeledve negatívvá válik. d = 2 esetén µ exponenciálisan, nem pedig négyzetesen nyomódik el, mivel az állapotsűrűség állandó.

  • Ezután az energiaváltozást vizsgáljuk. Mivel dN/dT = 0, az egyetlen hatás az, hogy a részecskék kB T /EF hányada kB T nagyságrendű energiával gerjesztődik. Így ∆E ∼ T 2 , tehát CV ∼ T .

  • Ezért egy fém alacsony hőmérsékletű fajhője:
                                              CV = γT + αT 3
    ahol a második tag a fononoktól származik. Ezt úgy tesztelhetjük, hogy a CV /T mennyiséget T 2 függvényében ábrázoljuk. A lineáris járulék csak nagyon alacsony hőmérsékleten látható.

Megjegyzés. A klasszikus határ. Formálisan mind a Fermi–Dirac-, mind a Bose–Einstein-eloszlás a Maxwell–Boltzmann-eloszláshoz tart, ha a foglaltsági számok kicsik,
                                               E−µ
                                                   ≪ 1.
                                                T
 Mivel ez ekvivalens a T ≫ E − µ feltétellel, néha alacsony hőmérsékleti határnak nevezik, ez azonban félrevezető; helyesebb lenne „nagy energiájú határnak” nevezni. Pontosabban, egy Bose- vagy Fermi-gáz nagy energiájú farka mindig klasszikusan viselkedik. Alacsony hőmérsékleten viszont a Bose- és Fermi-gázok egészükben „kvantumosabbnak” látszanak.

Megjegyzés. A kémiai potenciál diszkrét energiaszintek esetén kissé bonyolultabb, mivel nem definiálható deriváltként; ehelyett N rögzítésével definiáljuk. Megmutatható, hogy nulla hőmérsékleten a kémiai potenciál a legmagasabb betöltött és a legalacsonyabb üres állapot energiájának átlaga. Ez biztosítja, hogy kis T bekapcsolásakor N rögzített maradjon. Különösen akkor is igaz, ha ennek a két állapotnak különböző degenerációja van, mert ennek a hatásnak a µ megfelelő módosításával való kiegyenlítése exponenciálisan kicsi.

Megjegyzés. A fenti eredményeket a Sommerfeld-kifejtéssel mennyiségileg is megalapozhatjuk. Definiáljuk
                                             Z ∞
                                          1             xn−1
                               fn (z) =           dx −1 x
                                        Γ(n) 0       z e +1

ami a gn függvények fermionos megfelelője. Ekkor
                                N  gs               E   3 gs
                                  = 3 f3/2 (z),       =      kB T f5/2 (z)
                                V  λ                V   2 λ3
85 3. Statisztikus mechanika


ahol g(E) alakját behelyettesítettük, gs pedig a spinállapotok száma. Az fn (z) függvényt nagy z esetén szeretnénk kifejteni. Végtelen z-nél az integrandusok egyszerűen xn−1 θ(βµ − x) alakúak, ezért az integrál (βµ)n /n.
    Nagy z esetén az integrandusok még mindig közelítőleg lépcsőfüggvényt tartalmaznak. Ekkor célszerű a lépcsőfüggvénytől való eltérést két részre bontással leválasztani:
                                 Z βµ                         Z ∞
                                                                             xn−1
                                              
                                          n−1           1
                   Γ(n)fn (z) =       dx x      1−              +     dx              .
                                  0                 1 + ze−x       βµ     z −1 ex + 1

Az első tag egyszerűen visszaadja a végtelen hőmérsékletű eredményt. A βµ feletti és alatti eltérések, amint azt korábban dN/dT esetén láttuk, hajlamosak kioltani egymást. Ezért érdemes egymás ellen kivonni őket; az η = βµ − x, illetve η = x − βµ változókat bevezetve:
                                            Z ∞
                                 (log z)n          (βµ + η)n−1 − (βµ − η)n−1
                    Γ(n)fn (z) =          +     dη
                                    n        0               1 + eη

ahol az integrálási határt βµ-tól ∞-ig terjesztettük ki, ezzel exponenciálisan kicsi O(z −1 ) hibát okozva. A Taylor-sort βµ legalacsonyabb rendjéig tartva:
                                                                Z ∞
                                  (log z)n                               η
                    Γ(n)fn (z) =           + 2(n − 1)(log z)n−2     dη η   .
                                     n                           0    e +1

Ez az integrál az e−η nevező mértani sorként való kifejtésével számítható ki. A tagonkénti integrálás a (−1)m+1 /m2 = (1/2) 1/m2 = π 2 /12 sort adja, így a végső eredmény
                            P                     P

                                     (log z)n     π 2 n(n − 1)
                                                                   
                            fn (z) =           1+              + ··· .
                                     Γ(n + 1)     6 (log z)2

A Taylor-kifejtés további tagjait megtartva szisztematikus kifejtést kapunk 1/ log z = 1/βµ szerint.
  A kifejtést az N/V kifejezésére alkalmazva azonnal azt kapjuk, hogy
                                                             2
                                                       kB T
                                          ∆N ∼
                                                        µ
ami azt mutatja, hogy N állandó értéken tartásához
                                                             2
                                                       kB T
                                           ∆µ ∼
                                                        EF
szükséges, ahogy korábban vártuk. Hasonlóképpen ∆E első tagja T 2 szerint változik, ezért a hőkapacitás lineáris.
