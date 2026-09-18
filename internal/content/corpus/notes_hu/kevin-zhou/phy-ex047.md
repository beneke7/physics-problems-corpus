---
id: kevin-zhou-notes-phy-ex047
source: kevin-zhou-notes
native_id: "phy Example 047"
origin: "Kevin Zhou personal physics notes"
language: hu
translated: true
links_en: kevin-zhou-notes-phy-ex047
topic: [statisztikus-mechanika, folytonos-közegek-mechanikája]
subtopic: [Landau-diamágnesség, kinetikai-elmélet, folyadékok-nyugalmi-mechanikája]
math_tools: [Euler-összegzés, Boltzmann-egyenlet, BBGKY-hierarchia, fázistér]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "4584-5160"
archive_layer: reference_notes
source_role: explanatory_example
---
Példa. A Landau-féle diamágnesség explicit kiszámítása. Ha az elektronok az xy síkra vannak korlátozva, Landau-szinteket foglalnak el:

                                            1              eB
                                E = n+          ℏωc , ωc =
                                            2              m

a degeneráció pedig
                                          Φ                          2πℏc
                                    N=       ,    Φ = L2 B,   Φ0 =        .
                                          Φ0                           e
Ha az elektronok a harmadik dimenzióban is mozoghatnak, ehhez ℏ2 kz2 /2m energiájárulék adódik. Ekkor a nagykanonikus partíciós függvény
                                    ∞
                                      2L2 B                      βℏ2 kz2
                          Z
                     L              X
             log Z =          dkz                log 1 + z exp −         − βℏωc (n + 1/2)
                     2π                   Φ0                      2m
                                    n=0

ahol a spin szerinti összegzés miatt 2-es tényezőt adtunk hozzá, és a kz szerinti lendületösszeget integrállá alakítottuk. Most az Euler-összegzési formulát alkalmazzuk a következő választással:

                                                       βℏ2 kz2
                                 Z
                         h(x) = dkz log 1 + exp −              + βx .
                                                        2m

Ekkor nagykanonikus partíciós függvényünk:
                     ∞                                      Z ∞
               VB X                        VB                                       ℏωc dh
       log Z =      h(µ − ℏωc (n + 1/2)) =                        h(µ − ℏωc x) dx −        + ... .
               πΦ0                         πΦ0                0                      24 dµ
                    n=0

Az első tag független B-től, a második pedig ezt adja:

                                            1 ∂(log Z)    µ2
                                     M=                = − B g(Ef )B
                                            β ∂B           3

ahol szokás szerint µB = |e|ℏ/2mc. Mivel a paramágneses hatás háromszor nagyobb, azt várhatnánk, hogy minden szilárd test paramágneses. A finomság az, hogy a kristályrács figyelembevételekor a fenti m tömeg effektív tömeggé, m∗-tá válik. A paramágneses hatás azonban egyáltalán nem változik, mert csak az elektronok belső mágneses momentumától függ, amely független a mozgásuktól. Egy másik, ettől független tényező, hogy a héjelektronok továbbra is hozzájárulnak a Larmor-féle diamágnességhez, de paramágneses hatásuk nincs.

Megjegyzés. Tekintsük a hidrogénatomot, amelynek energiaszintjei En = −E0 /n2 . A partíciós függvény divergál, ezért formálisan minden állapot foglaltságának valószínűsége nulla! A helyzet még rosszabb, ha a nem kötött állapotokat is figyelembe vesszük.
   A megoldás az, hogy hiányzik egy térbeli levágás; az n szerinti összeg rendkívül nagy állapotokat is tartalmaz. Bármely ésszerű levágás ésszerű eredményt ad. Végtelen térfogatban a nulla foglaltsági valószínűség valóban helyes válasz, mert amikor az elektron az atomtól jelentős távolságra kerül, kicsi az esélye, hogy valaha visszatér: egy háromdimenziós véletlen bolyongás valószínűleg soha nem tér vissza a kiindulópontjához.


3.7     Kinetikai elmélet
Eddig csak termikus egyensúlyban lévő rendszereket vizsgáltunk. A kinetikai elmélet makroszkopikusan sok részecske mikroszkopikus dinamikáját tanulmányozza, és ennek segítségével fogjuk vizsgálni az egyensúly megközelítését. Heurisztikus bevezetésként kezdjük.

 • Szükségünk lesz arra a tényre, hogy egyensúlyban a gáz részecskéinek sebessége Maxwell–Boltzmann-eloszlást követ:
                                                  3/2
                                            m              2
                                f (v) =               e−mv /2kB T .
                                          2πkB T

 • Tegyük fel, hogy a gáz részecskéit d átmérőjű kemény gömbökként modellezzük. Ez ekvivalens azzal, hogy a részecskéket pontoknak tekintjük, és olyan kölcsönhatási potenciált adunk meg, amely d távolságban kapcsol be, így a kölcsönhatási hatáskeresztmetszet πd2 . Ezért a szabad úthossz
                                                           1
                                                    ℓ=         .
                                                          nπd2
      Feltesszük, hogy a gáz híg, tehát ℓ ≫ d.

 • Az ütközések közötti tipikus időt szórási vagy relaxációs időnek nevezzük:
                                                              ℓ
                                                    τ=              .
                                                          ⟨vrel ⟩
      A ⟨vrel ⟩ becsléséhez vegyük észre, hogy
                                                                                6kB T
                                   2
                                 ⟨vrel ⟩ = ⟨(v − v′ )2 ⟩ = ⟨v 2 ⟩ + ⟨v ′2 ⟩ =
                                                                                  m
      mivel a Maxwell–Boltzmann-eloszlás izotróp, és az utolsó lépésben az energia ekvipartícióját használtuk.

 • Nagyobb léptékben nagyjából úgy képzelhetjük, hogy minden gázmolekula ℓ lépéshosszúságú és τ időközű véletlen bolyongást végez. Az x = 0-ból induló, egydimenziós mozgásnál annak valószínűsége, hogy a részecske t = N τ idő elteltével az x = mℓ helyen van:
                                                r                   r
                                        N              2    2          2τ −x2 τ /2ℓ2 t
                   P (x, t) = 2−N                ≈       e−m /2N =        e
                                    (N − m)/2         πN               πt
      ahol Stirling-közelítést használtunk a kombináció kifejtéséhez, és m/N szerint első rendig fejtettünk. A valószínűségi eloszlás így olyan Gauss-eloszlás, amelynek varianciája

                                                              ℓ2
                                                    ⟨x2 ⟩ =      t.
                                                              τ
      Ez érthető, hiszen a t/τ lépés mindegyike független, ℓ2 varianciájú lépés.

 • Hasonlóan, három dimenzióban
                                                              ℓ2
                                                    ⟨r2 ⟩ =      t.
                                                              τ
      Ezt konkrétan egy köbös rácson végzett véletlen bolyongás vizsgálatával is kiszámíthatjuk.


 • A függetlenül diffundáló részecskék sűrűségét a diffúziós egyenlet írja le:
                                                 ∂n
                                                    = D∇2 n.
                                                 ∂t
    Mivel ez az egyenlet lineáris, elegendő megmutatni ezt az n(x, t = 0) = δ(x) kezdeti feltételre, amelynek egyeznie kell a fenti véletlen bolyongás eredményével. Egy dimenzióban a megoldás
                                                     r
                                                          1 −x2 /4Dt
                                           n(x, t) =          e
                                                        4πDt
    ebből D = ℓ2 /2τ következik. Hasonlóan, három dimenzióban is szétterülő Gauss-eloszlást kapunk, D = ℓ2 /6τ mellett.

Ezzel az alappal tárgyalhatjuk a transzporttulajdonságokat.

 • Tekintsünk két lemezt a z = 0 és z = d helyen. Ha a felső lemezt állandó u sebességgel mozgatjuk x irányban, a folyadékban ux (z) sebességgradiens alakul ki. A felső lemezre ekkor ellenállási erő hat:
                                                dux        u
                                        F = ηA       ≈ ηA
                                                 dz        d
   ahol az utóbbi közelítés kis d esetén érvényes. Az η együtthatót dinamikai viszkozitásnak nevezzük.

 • Mikroszkopikusan a viszkozitás a px lendület folyadékon keresztüli szállításaként fogható fel. A lemezek „tapadósak”, ezért a molekulák átlagosan nem nulla px-et vesznek fel a felső lemezzel való ütközéskor, és elveszítik azt az alsó lemezzel való ütközéskor. Állandósult állapotban a folyadék belsejében a részecskék ütközései folyamatosan szállítják a px-et a felső lemeztől az alsóig.

 • Egyszerű közelítésként feltesszük, hogy a folyadék lokális sebességeloszlása csak az ux (z) értékkel eltolt Maxwell–Boltzmann-eloszlás, amelyről feltesszük, hogy kicsi.

 • Most kiszámítjuk az állandó z síkon átáramló lendületet. Az ezen egységnyi idő és egységnyi felület alatt áthaladó részecskék száma
                                             Z
                                            n dv vz f (v).

    Egy ∆z távolságról érkező részecske várható x-lendülete
                                                          dux
                                              ∆px = m         ∆z.
                                                           dz
    Ha a részecske θ szöget zár be a függőlegessel, akkor
                                                 ∆z = ℓ cos θ.
    Mindezt összerakva az egységnyi idő és egységnyi felület alatt átadott lendület
                      Z                               Z                      3/2
               F                               dux                   m                   2
                 =n       dv vz f (v)∆px = mnℓ            dv                       ve−mv /2kB T cos2 θ.
               A                                dz                 2πkB T


 • Az integrál lényegében a ⟨v⟩ mennyiséget számítja ki, a cos2 θ tényezőtől eltekintve. Gömbi koordinátákban az egyetlen különbség a θ-integrál lenne:
                            Z π                        Z π
                                                    2
                                dθ cos2 θ sin θ dθ = ,     dθ sin θ dθ = 2.
                             0                      3   0
    Ezért a cos2 θ tényező 1/3-dal járul hozzá, és
                                         F     dux         1
                                           =η      , η = mnℓ⟨v⟩.
                                         A      dz         3
    Mivel ℓ ∼ 1/n, a viszkozitás független a gáz sűrűségétől; a sűrűbb gázban több részecske van, de mindegyik kisebb px-et szállít. Ezt a meglepő következtetést először Maxwell találta meg, és kísérletileg is megerősítette.
 • Hasonló számítással meghatározhatjuk a kinetikus energia, vagyis a hővezetés szállítását. Kísérletileg azt találjuk, hogy a hőáram arányos a hőmérséklet-gradienssel:
                                              q = −κ∇T
    ahol κ a hővezetési tényező.
 • A fentihez hasonlóan feltesszük, hogy a lokális sebességeloszlás Maxwell–Boltzmann-eloszlás, z-től függő T -vel. Ekkor E(z) = (3/2)kB T (z), ezért
                                                 3 dT
                                          ∆E = kB       ∆z.
                                                 2   dz
    Az integrál alakja pontosan ugyanaz, így
                                          1              3
                                     κ = cv ℓ⟨v⟩, cV = nkB .
                                          3              2
    Ahogy korábban, a vezetőképesség nem függ a sűrűségtől.
Megjegyzés. A diffúziós egyenlet azért hasznos, mert bármely lokálisan megmaradó mennyiség szállítását leírja. Például az energia lokális megmaradása azt jelenti, hogy
                                         dE
                                            +∇·q=0
                                      dt
ahol E = cV T az energiasűrűség. Ezt a fentiekkel kombinálva kapjuk a hőegyenletet:
                                           dT     κ
                                              = − ∇2 T
                                           dt    cV
ami egyszerűen az energia diffúziós egyenlete. Hasonlóképpen a lendület lokális megmaradása
                                     dP i ∂P ji
                                          +       =0
                                      dt     ∂xj
ahol P a lendületsűrűség. Korábban megmutattuk, hogy
                                                      dux
                                            Pzx = η       .
                                                       dz
Ezeket az egyenleteket kombinálva
                             dP x     d2 ux                 η 2 x
                                  = −η 2 = −η∇2 ux = −        ∇ P
                               dt      dz                  mn
adódik, ami a lendület diffúziós egyenlete. A diffúziót először a részecskesűrűségre vezettük be, de a diffúzió bármely megmaradó mennyiség inhomogenitásait kisimítja.


Most a kinetikai elmélet tulajdonképpeni tárgyalására térünk át a Boltzmann-egyenlet levezetésével.

 • Tekintsünk egy potenciálban lévő, páronként kölcsönható, azonos N pontszerű részecskét a
                                     1 X 2 X           X
                              H=        pi + V (ri ) +   U (ri − rj )
                                    2m
                                          i          i             i<j

Hamilton-operátorral. A fázistér 6N dimenziós, és a rendszer konfigurációját egy fázistérbeli f eloszlással írjuk le, amelyet így normálunk:
                               Z                              Y
                                 dV f (ri , pi , t) = 1, dV =   dri dpi .
                                                                         i

    Liouville tétele szerint df /dt = 0, ahol a deriváltat konvektív deriváltként kell értelmezni, a fázistérbeli áramlást követve.

 • A Poisson-zárójelet a szokásos módon definiáljuk:
                                               X ∂A           ∂B   ∂A ∂B
                                   {A, B} =               ·      −   ·    .
                                                    ∂ri       ∂pi ∂pi ∂ri
                                                i
   Ekkor bármely A(ri , pi , t) függvényre
                                              dA   ∂A
                                                 =    + {A, H}
                                              dt   ∂t
   ahol a bal oldali derivált ismét konvektív derivált.

 • Liouville tételét alkalmazva a Liouville-egyenlet:
                                                ∂f
                                                   = {H, f }.
                                                ∂t
    Egyensúlyi eloszlás esetén ∂f /∂t = 0, vagy ekvivalensen {H, f } = 0. Ez akkor teljesül, ha f H függvénye, mint a Boltzmann-eloszlásban f ∼ e−βH , de f általánosabb is lehet. Függhet például bármely megmaradó mennyiség értékétől.

 • Az A(ri , pi ) várható értékét így definiáljuk:
                                        Z
                                 ⟨A⟩ = dV A(ri , pi )f (ri , pi , t).
   Mindkét oldalt deriválva:
                           Z           Z             Z
                   d⟨A⟩            ∂f
                        = dV A        = dV A{H, f } = dV {A, H}f = ⟨{A, H}⟩
                    dt             ∂t
   ahol a harmadik lépésben parciálisan integráltunk. Ez látszólag hasonló a fenti eredményhez, de nem ugyanaz; például a bal oldali derivált közönséges derivált, nem konvektív derivált.

Most bevezetjük a BBGKY-hierarchiát.


 • Az egy részecskére vonatkozó eloszlásfüggvényt úgy definiáljuk, hogy minden más részecskére integrálunk:
                                               Z                                  N
                                                                                  Y
                        f1 (r1 , p1 , t) = N       dV1 f (ri , pi , t),   dV =           dri dpi .
                                                                                 i=k+1

   Ez nem teszi különlegessé az első részecskét, mivel a részecskék azonosak, ezért f szimmetrikusnak vehető. Az egy-részecskeeloszlásfüggvény segítségével a legtöbb érdekes mennyiség kiszámítható, például a sűrűség és az átlagsebesség:
                                  Z                             Z
                                                                       p
                        n(r, t) = dp f1 (r, p, t), u(r, t) = dp f1 (r, p, t).
                                                                      m

 • Annak vizsgálatához, hogyan fejlődik f1 időben, vegyük észre, hogy
                                        Z         Z
                               ∂f1          ∂f
                                   = N dV1     = N dV1 {H, f }.
                               ∂t           ∂t
    A Hamilton-operátor explicit alakját használva:
                                                                                  
           ∂f1
                    Z           X pj ∂f       X ∂V ∂f       X X ∂U (rk − rl ) ∂f
               = N dV1 −             ·    +            · +                  ·     .
           ∂t                       m ∂rj         ∂rj ∂pj           ∂rj        ∂pj
                                   j                     j                  j    k<l

 • Most a d⟨A⟩/dt kiszámításakor használt érveléssel a j ̸= 1 esetekben parciálisan integrálhatunk, elhagyva a peremtagokat, és nullát kapunk. Így csak j = 1-re kell figyelnünk. Az (r1 , p1 ) változókat (r, p) változókra átnevezve:
                                                                N
                                                                                !
                                                   ∂V (r) ∂f X ∂U (r − rk ) ∂f
                           Z
                 ∂f1                    p ∂f
                     = N dV1 − ·                +        ·    +            ·      .
                  ∂t                    m ∂r        ∂r     ∂p      ∂r        ∂p
                                                                           k=2

 • Az első két tag egyszerűen a szabad „sodródó” részecskék dinamikáját írja le, míg az utolsó tag az ütközéseket tartalmazza. Ezért ezt így írhatjuk:
                                                               p2

                          ∂f1                  ∂f1
                              = {H1 , f1 } +           , H1 =     + V (r).
                           ∂t                  ∂t coll         2m
   A második tagot ütközési integrálnak nevezzük.

 • Az ütközési integrál nem írható fel csak f1 segítségével, ami nem meglepő, hiszen két részecske ütközéseit írja le. Bevezetjük az n-részecske-eloszlásfüggvényeket:
                                                                         Z
                                                                       N
                         fn (r1 , . . . , rn , p1 , . . . , pn , t) =      dVn f (ri , pi , t).
                                                                       n
   Ezután vegyük észre, hogy az ütközési integrál mind az N − 1 tagja azonos, ezért
                               Z
                                        ∂U (r − r2 ) ∂f                ∂U (r − r2 ) ∂f2
                                                            Z
                ∂f1          N
                         =          dV1              ·    = dr2 dp2                ·    .
                ∂t coll      2              ∂r         ∂p                   ∂r       ∂p


 • Ugyanez az érvelés rekurzívan ismételhető fn időfejlődésének meghatározásához. Azt kapjuk, hogy
                                                 n
                                                                           ∂U (ri − rn+1 ) ∂fn+1
                                                         Z
                         ∂fn                X
                             = {Hn , fn } +                  drn+1 dpn+1                  ·
                          ∂t                                                     ∂ri        ∂pi
                                                i=1
ahol az n-részecskés Hamilton-operátor
                                         n   2
                                         X  p        i
                                                                         X
                                  Hn =                   + V (ri ) +            U (ri − rj ).
                                                2m
                                          i=1                           i<j≤n

Vagyis az n-részecskés eloszlás az n részecske közötti kölcsönhatásokat önmagukban figyelembe véve fejlődik, valamint egy külső részecskével való ütközéseket leíró korrekciós tagot tartalmaz. Ez a BBGKY-hierarchia: Hamilton-egyenleteket alakít át N csatolt parciális differenciálegyenletté.

A BBGKY-hierarchia haszna, hogy az alacsonyabb rendű fn -ekben elkülöníti a fizikailag legfontosabb információt, így közelítéseket alkalmazhatunk.

 • A Boltzmann-egyenlet egy közelítő egyenlet, amely f1 saját magával való időfejlődését írja le, vagyis elhanyagolja a két részecske korrelációit. Levezetéséhez feltesszük, hogy az ütközések közötti idő, τ , amelyet szórási vagy relaxációs időnek is nevezünk, sokkal nagyobb, mint az ütközés végbemeneteléhez szükséges τcoll idő, az úgynevezett ütközési idő.

 • Azt is feltesszük, hogy az ütközések lokálisan, egy pontban mennek végbe. Ha ekkor egy r pontban p és p2 lendületű két részecske van, akkor a p′1 és p′2 lendületű állapotba való szóródás sebessége

                                     ω(p, p2 |p′1 , p′2 )f2 (r, r, p, p2 ) dp2 dp′1 dp′2

ahol ω az ütközés dinamikáját írja le, és a kölcsönhatási potenciáltól függ.

 • Ennek eredményeként az ütközési integrál:
                   Z
       ∂f1
                 = dp2 dp′1 dp′2 ω(p′1 , p′2 |p, p2 )f2 (r, r, p′1 , p′2 ) − ω(p, p2 |p′1 , p′2 )f2 (r, r, p, p2 )

        ∂t coll
ahol a két tag a p lendületbe való, illetve az onnan kifelé irányuló szóródást veszi figyelembe. A Boltzmann-egyenlet megfelelő levezetésében ide úgy jutnánk, hogy a BBGKY-hierarchiára explicit módon közelítéseket alkalmazunk.

 • A szimmetriák több megszorítást is adnak az ω függvényre.

     – Hallgatólagosan feltettük, hogy a szórás minden pontban azonos, ezért ω nem függ r-től.
     – Ha a külső potenciál csak makroszkopikus távolságléptékeken változik számottevően, akkor az ütközésekben az energia és a lendület megmarad:
                                       p + p2 = p′1 + p′2 ,           p2 + p22 = p′2   ′2
                                                                                  1 + p2 .

     – Az időtükrözési szimmetria szerint
                                      ω(p, p2 |p′1 , p′2 ) = ω(−p′1 , −p′2 | − p, −p2 ).



     – A paritásszimmetria a bejövő és kimenő lendületek felcserélése nélkül fordítja meg a lendületeket:
                                     ω(p, p2 |p′1 , p′2 ) = ω(−p, −p2 | − p′1 , −p′2 ).

     – E kettő kombinációjával megkapjuk a bejövő és kimenő lendületek szimmetriáját:
                                          ω(p, p2 |p′1 , p′2 ) = ω(p′1 , p′2 |p, p2 ).

 • Az utolsó tulajdonság alkalmazása az ütközési integrált erre egyszerűsíti:
                          Z
             ∂f1
                        = dp2 dp′1 dp′2 ω(p′1 , p′2 |p, p2 ) f2 (r, r, p′1 , p′2 ) − f2 (r, r, p, p2 ) .

              ∂t coll

    Ekkor a molekuláris káosz feltevését használjuk:
                                        f2 (r, r, p, p2 ) = f1 (r, p)f1 (r, p2 )
    amely szerint a lendületek korrelálatlanok. Ez szemléletes, mivel az ütközések ritkák, és egy molekula minden egymást követő ütközése teljesen másik molekulával történik.

 • A molekuláris káosz feltevése a kulcsfeltevés, amely a BBGKY-hierarchiát zárt rendszerré alakítja. Időnyilat vezet be. Mivel az ütközés után a lendületek korreláltak, mikroszkopikusan időfordítható dinamika esetén valójában már az ütközés előtt is korreláltnak kellett lenniük. Ezek a kezdeti korrelációk azonban általában rendkívül finomak, és minden durvaszemcsézés megsemmisíti őket.

 • A molekuláris káosz feltevése adja a Boltzmann-egyenletet:
                         Z
       ∂f1
           = {H1 , f1 } + dp2 dp′1 dp′2 ω(p′1 , p′2 |p, p2 ) f1 (r, p′1 )f1 (r, p′2 ) − f1 (r, p)f1 (r, p2 ) .

       ∂t
    Ezt nehéz megoldani, mivel nemlineáris integráldifferenciálegyenlet.

Ezután a Boltzmann-egyenlet egyensúlyi eloszlásait vizsgáljuk.

 • Az ütközési integrál nyilvánvalóan eltűnik, ha teljesítjük a részletes egyensúly feltételét:
                                      f1 (r, p′1 )f1 (r, p′2 ) = f1 (r, p)f1 (r, p2 )
    úgy, hogy minden pontban a p-be való szóródást azonnal kiegyenlíti a p-ből való kiszóródás.

 • Mindkét oldal logaritmusát véve ekvivalens azt mondani, hogy a log f1 (r, pi ) összege megmarad egy ütközés során. Mivel tudjuk, hogy egy ütközésben az energia és a lendület megmarad, a részletes egyensúly elérhető, ha
                                       log f1 (r, p) = β(µ − E(p) + u · p)
    ahol µ a lokális részecskesűrűséget rögzíti. Mindkét oldalt exponenciálva azt látjuk, hogy f1 egyszerűen a 1/β hőmérsékletű, u sodródási sebességű Maxwell–Boltzmann-eloszlás.

 • Vegyük észre, hogy β, µ és u mind lehetnek helyfüggők. Az ilyen megoldást lokális egyensúlynak nevezzük; az előző szakasz heurisztikus számításaiban is ezt használtuk.



 • Az egyszerűség kedvéért tegyük V (r) = 0-ra. Ekkor a sodródási tag is eltűnik, ha β, µ és u mind konstans. Ha u nulla, szokásos egyensúlyi gázunk van; a nem nulla u lehetősége a lendületmegmaradás következménye. Hasonlóképpen a sodródási tag akkor is eltűnik, ha u ∝ r × p, a perdületmegmaradás miatt; ez forgó egyensúlyi megoldást ad.

 • A kvantumstatisztikát könnyen figyelembe vehetjük, ha az ütközési rátát erre cseréljük:
                 ω(p, p2 |p′1 , p′2 )f2 (r, r, p, p2 )(1 ± f1 (r, p′1 ))(1 ± f1 (r, p′2 )) dp2 dp′1 dp′2
   ahol bozonokra a plusz, fermionokra a mínusz előjelet kell venni. Fermionok esetén a további tényezők egyszerűen kikényszerítik a Pauli-kizárást; bozonok esetén az együtt lévő n bozon amplitúdójának √
   n növekedését írják le.

 • Az érvelés többi része ugyanúgy végigvihető, és a részletes egyensúly feltétele:
                                  X            f1 (p)
                                       log              conserved in collisions.
                                             1 ± f1 (p)
   Ha ezt β(µ−E +u·p)-vel azonosítjuk, visszakapjuk a Bose–Einstein- és Fermi–Dirac-eloszlást µ kémiai potenciállal, 1/β hőmérséklettel és u sodródási sebességgel.


4      Folytonos közegek mechanikája
4.1     Folyadékok nyugalmi mechanikája
A folytonos közegek mechanikája a kinetikai elmélet kontinuumhatárátmenete.

    • Szilárd testekben és sűrű folyadékokban az atomok közötti távolságok egy nanométer törtrészei, míg légköri nyomású gázokban körülbelül ennek tízszerese. A kontinuummechanikában sokkal nagyobb távolságléptékekkel foglalkozunk, és teljesen elhanyagoljuk az atomok diszkrét voltát.

    • Ebben a határban az atomok és kölcsönhatásaik részletei határozzák meg például a transzportegyütthatókat. Ezeket a mennyiségeket adottnak vesszük, és nem próbáljuk kiszámítani őket.

    • A kontinuumleírás csak elég nagy távolságléptékeken működik. Ha például az atomtávolság ℓ, és legalább L nagyságú távolságléptékeken dolgozunk, akkor a sűrűség ingadozása
                                     √    a
      ilyen léptékeken ∆ρ/ρ ∼ 1/ N ∼ (L/ℓ)3/2 . Ezért ha azt akarjuk, hogy ρ meghatározása ϵ relatív pontosságú legyen, L ≳ ℓ/ϵ2/3 szükséges.

    • Másik példaként tegyük fel, hogy a molekulák tipikus sebessége vmol . Ekkor N molekula tömegközéppont-sebességének tipikus ingadozása vmol / N . Ha egy v átlagsebességű makroszkopikus áramlást tekintünk, és azt akarjuk, hogy v meghatározása ϵ relatív pontosságú legyen, akkor
                                                     v  2/3
                                                      mol
                                            L≳ℓ
                                                      ϵv
      ami valamivel szigorúbb feltétel.

    • A v jól definiáltságának egy másik, kifejezetten gázokra vonatkozó feltétele:
                                                     L≫λ
      ahol λ a szabad úthossz. Levegőben λ ≲ 100 nm.

    • Általánosabban megköveteljük, hogy folytonos anyagunk mindig lokális termikus egyensúlyban legyen. Ha például globális termikus egyensúlyban teljesül a P = P (ρ, T ) állapotegyenlet, akkor feltesszük, hogy p(x) = p(ρ(x), T (x)).

    • Általában L ≫ ℓ szükséges a kontinuummechanika alkalmazásához. A folytonos anyag különböző típusai közötti határfelületek ℓ hosszléptékűek, ezért ezeket szakadásokként kezeljük.

    • Az alábbiakban „anyagi részecskén” olyan anyagcsomagot értünk, amely rögzített atomkészletet tartalmaz. Ezek a csomagok az elrendezésünk méreteihez képest sokkal kisebbek, ezért infinitezimálisnak tekinthetők, de nagyobbak L-nél, ezért folytonos anyagként kezelhetők.

A folyadékok nyugalmi mechanikájának alapjaival kezdünk.

    • A folytonos anyag belsejében ható erőket a σij feszültségtenzor paraméterezi, vagyis egy infinitezimális dS felületelemen ható dF erő:

                                                 dFi = σij dSj

      ahol összegzési konvenciót használunk. Az alábbiakban többnyire indexmentes jelölést alkalmazunk, így a fenti egyenlet dF = σ · dS alakban írható.


 • Nyugalomban lévő folyadékban nincsenek nyírófeszültségek, ezért σij diagonális. Továbbá σij -nek minden vonatkoztatási rendszerben diagonálisnak kell lennie, ami csak akkor lehetséges, ha az egységmátrixszal arányos. Ezért nyugalomban lévő folyadékokban egyszerűen izotrop nyomás van:
                                               dF = −p dS.

    Egy anyagi részecskére ható teljes nyomási erő különösen:
                                              dF = −∇p dV.

 • Például hidrosztatikai egyensúlyban ∇p = ρg. Ha feltesszük, hogy a folyadék barotrop állapotegyenletet követ, azaz p = p(ρ), akkor definiálhatjuk a nyomáspotenciált:
                                                  Z
                                                     dp
                                           w(p) =
                                                    ρ(p)
    ekkor Φ∗ = Φ + w(p) állandó, ahol Φ a gravitációs potenciál.

 • Barotrop folyadékra definiáljuk a térfogati moduluszt:
                                                          dp
                                                   K=ρ
                                                          dρ
    amely az összenyomhatatlanságot jellemzi. Ha p a hőmérséklettől is függne, parciális deriváltat kellene használnunk. Az izoterm térfogati modulusz, KT , állandó T melletti derivált, az izentrópikus térfogati modulusz pedig állandó S melletti derivált.

 • Hidrosztatikai egyensúlyban ∇p = −ρ∇Φ, ami azt jelenti, hogy a gravitációs ekvipotenciális felületeknek és az izobároknak egybe kell esniük. Mindkét oldal rotációját véve (∇ρ) × (∇Φ) = 0 adódik, ami azt mondja, hogy a gravitációs ekvipotenciális felületek és az állandó sűrűségű felületek is egybeesnek.
