---
id: kevin-zhou-notes-phy-ex070
source: kevin-zhou-notes
native_id: "phy Example 070"
origin: "Kevin Zhou personal physics notes"
language: hu
translated: true
links_en: kevin-zhou-notes-phy-ex070
topic: [kvantumfizika, elektromágnesesség]
subtopic: [Dirac-kvantálás, harmonikus oszcillátor, WKB-közelítés, úttintegrálok]
math_tools: [kalkulus, differenciálegyenletek, lineáris algebra, Fourier-ötletek]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "7672-8434"
archive_layer: reference_notes
source_role: explanatory_example
---

Példa. A mágneses monopólusok Dirac-féle kvantálása. Egy mágneses monopólus mágneses tere
                                                     gr̂
                                              B=
                                                    4πr2
ahol a g mágneses töltés a teljes fluxusa. A Gauss-törvény megkerüléséhez (vagyis a B = ∇ × A
felírásához) szinguláris vektorpotenciált kell használnunk. Két lehetséges példa:
                                    g 1 − cos θ                  g 1 + cos θ
                            AN
                             ϕ =                ,   ASϕ = −                  .
                                   4πr sin θ                    4πr sin θ
Ezek a vektorpotenciálok rendre a θ = π és θ = 0 irányú egyenesek mentén szingulárisak; ezeket
Dirac-húroknak nevezzük. Fizikailag úgy gondolhatunk a mágneses monopólusra, mint egy végtelenbe
nyúló, érzékelhetetlenül vékony szolenoid egyik végére; ekkor a szolenoid a Dirac-húron fekszik.
Vegyük észre, hogy csak egy Dirac-húr van, nem kettő, de a helye attól függ, hogy AN
                                                                                    ϕ vagy ASϕ-t
használjuk.
    A Schrödinger-egyenlet megoldásához ebben a térben külön kell megoldanunk az északi félgömbön
(ahol AN    ϕ nem szinguláris) és a déli félgömbön; az eredmény legyen ψN , illetve ψS . Az egyenlítőn,
ahol átfedik egymást, mértéktranszformációval kell kapcsolódniuk
                                                                gϕ
                                      ψN = eiqα/ℏ ψS ,     α=      .
                                                                2π
Mivel a hullámfüggvénynek mindkét félgömbön egyértékűnek kell lennie, g a Φ0 többszöröse kell legyen,
így kapjuk a Dirac-féle kvantálási feltételt:

                                             qg = 2πℏn.

Az elektromos és mágneses töltést egyaránt hordozó dionokra ennek egy kissé módosított változata

                                         q1 g2 − q2 g1 = 2πℏn.
144 5. A kvantummechanika alapjai

Ez a Dirac–Zwanziger-féle kvantálási feltétel.
   Ha egyetlen mágneses monopólus létezik, akkor azt látjuk, hogy a töltés kvantált! Fordított irányban
gondolkodva a töltés kvantálásának kísérleti megfigyelése azt mondja, hogy az elektromágnesesség
mértékcsoportja U (1) kell legyen, nem pedig R, és mágneses monopólusok csak az előbbiben létezhetnek.
Így a töltés megfigyelt kvantálása arra utal, hogy monopólusok létezhetnek.
Megjegyzés. A Dirac-féle kvantálási feltétel alternatív levezetése. Tekintsünk egy részecskét, amely
egy monopólus terében mozog, olyan zárt pályán, amely Φ mágneses fluxust fog körül. Mint már tudjuk,
az ebből származó fáziseltolás ∆θ = qΦ/ℏ. Választhattunk volna azonban olyan felületet is, amely a
monopólus körül a másik irányban tekeredik, és amelyhez Φ − g fluxus és ∆θ′ = q(Φ − g)/ℏ fáziseltolás
tartozik.
   Mivel mindkét esetben ugyanazt a pályát tekintjük (és a fáziseltolás megfigyelhető, hiszen egy
egyáltalán nem mozgó állapottal interferáltathatnánk), a fáziseltolásoknak a konzisztencia kedvéért
2π egész számú többszörösével kell különbözniük. Ezzel visszakapjuk a Dirac-féle kvantálási feltételt.
   Pontosan ugyanez az érv érvényes az előző szakasz B-terében lévő absztrakt monopólusra is. Ez
kiemeli, hogy a mágneses töltés kvantálásának semmi köze a valódi térhez; alapvetően abból ered, hogy
a gömbön diszkréten sok különböző U (1)-nyaláb létezik, amint azt alább részletesebben megmutatjuk.
Megjegyzés. A Dirac-féle kvantálási feltétel heurisztikus levezetése. Megmutatható, hogy a rögzített
monopólus-töltés rendszer megmaradó perdülete
                                                    qg
                                     L = r × mv −      r̂.
                                                    4π
A második tag az elektromágneses terekben tárolt perdület. Ha felhasználjuk, hogy a perdület ℏ/2
egységekben kvantált, ugyanazt az eredményt kapjuk.
Megjegyzés. Formálisan a hullámfüggvény egy, az U (1) mértéknyalábhoz tartozó komplex vonalnyaláb
szelvénye. Nemtriviális nyaláb esetén a hullámfüggvény csak foltokon definiálható; globális definiálá-
sával naivan próbálkozva többértékű vagy szinguláris hullámfüggvényt kapunk. (Ezért mondják néha
figyelmetlenül, hogy a hullámfüggvények lehetnek többértékűek.) Egy M sokaság feletti komplex
vonalnyalábok ekvivalenciaosztályait a Picard-csoport H 2 (M, Z) osztályozza. Ez kapcsolódik a fenti
megbeszéléshez, még akkor is, ha R3 topológiailag triviális, mivel egy monopólus szingularitást ad egy
pontban, az R3 egy ponttal való eltávolítása pedig topológiailag ekvivalens az S 2 gömbbel, amely nem
triviális.
   A monopólusok jelenléte valójában az U (1) mértéknyaláb topológiájáról szól, ezért anyagra való
hivatkozás nélkül is leírható. A lényeg az, hogy jól definiált U (1) mértékkapcsolathoz AN − AS = dλ
kell, ahol eiqλ az S 1 egyenlítőn definiált egyértékű függvény. Ekkor
                        Z        Z          Z         Z                Z
                                        N         S         N     S
                            F =     dA +       dA =       (A − A ) =       dλ
                        S2       N             S       S1                S1

ami kvantált. Ezt a mennyiséget az U (1)-nyaláb első Chern-osztályának nevezzük. Hasonló érvek más
topológiájú sokaságokra is megfogalmazhatók. E fogalmakról sokkal többet találunk a Geometria című
jegyzetben.
                                                                                   √
Megjegyzés. A hullámfüggvény viselkedésének van egy szép analógiája a folyadékáramlással. Legyen
ψ = ρ eiθ. Ekkor a Schrödinger-egyenlet
                      ∂ρ                      ∂θ    mv 2        ℏ2 1 2 √
                         = −∇ · (ρv),     ℏ      =−      − qϕ +    √ ∇ ( ρ)
                      ∂t                      ∂t     2          2m ρ
145 5. A kvantummechanika alapjai

ahol a sebesség v = (ℏ∇θ − qA)/m. Az első egyenlet egyszerűen a kontinuitási egyenlet, a második
pedig ismerős a hidrodinamikából, ha ℏθ-t „sebességpotenciálnak” tekintjük, a jobb oldalt pedig az
energia negatívjaként azonosítjuk. Így az energiához egy további „kvantumos” járulék jelenik meg,
amely a folyadék összenyomásához szükséges energiaként értelmezhető.
   A második egyenlet valamivel szemléletesebbé válik, ha gradienst veszünk belőle:
                                                                      ℏ2
                                                                                   
             ∂v      q            ∂A                                          1 2√
                 =       −∇ϕ −         − v × (∇ × v) − (v · ∇)v + ∇         √    ∇  ρ   .
             ∂t     m             ∂t                                  2m       ρ
Vegyük észre, hogy a sebesség definíciója az örvényességet a mágneses térrel kapcsolja össze:
                                                       q
                                           ∇ × v = − B.
                                                      m
Ekkor a jobb oldal első két tagja egyszerűen a Lorentz-erő. A harmadik a parciális időderiváltat
konvektív deriválttá alakítja. Általában azonban ez a kép nem fizikai, mert a ψ hullámfüggvényre nem
gondolhatunk klasszikus mezőként, és a valószínűségi sűrűséget nem azonosíthatjuk a töltéssűrűséggel.
Amikor azonban ψ makroszkopikus hullámfüggvény, például szupravezetés esetén, ez a kép teljesen jól
használható.

5.5     Harmonikus oszcillátor és koherens állapotok
Most a harmonikus oszcillátor modellrendszerét vizsgáljuk.

  • A Hamilton-operátor
                                                   p̂2   mω 2 x̂2
                                              H=       +
                                                   2m       2
                                 p                                    √
      jellemző hossza ℏ/mω, jellemző impulzusa mℏω, jellemző energiája pedig ℏω. Ha mindezeket
      egyenlőnek választjuk eggyel, vagy ekvivalensen ω = ℏ = m = 1-et veszünk, akkor
                                             p̂2 x̂2
                                          H=    + , [x̂, p̂] = i.
                                              2    2
      Később dimenzióanalízissel minden mértékegységet visszaállíthatunk.
  • Mivel a potenciál a végtelenben végtelenhez tart, csak kötött állapotok vannak, ezért H spektruma
    diszkrét. Továbbá, mivel egy dimenzióban dolgozunk, H sajátfüggvényei nem degeneráltak.
  • Klasszikusan a Hamilton-operátor tényezőkre bontható:
                                         1 2          x + ip x − ip
                                           (x + p2 ) = √      √ .
                                         2               2      2
      Ez motiválja a következő definíciókat:
                                        1                     1
                                    a = √ (x̂ + ip̂),    a† = √ (x̂ − ip̂).
                                         2                     2
      Ez a két operátor azonban nemtriviális kommutációs relációt elégít ki:
                                                                 1    1
                                    [a, a† ] = 1,   H = a† a +     =N+ .
                                                                 2    2
      Az 1/2 hozzáadása ezért lényegében kvantumos hatás. Mellékesen egy kellemes heurisztika a fenti
      kommutációs reláció használatához, hogy [a, f (a, a† )] = ∂f /∂a†, ahol a jobb oldal formális
      derivált, amely az a-k és a†-k sorozatára hat.
146 5. A kvantummechanika alapjai

  • Megjegyezzük, hogy az N operátor pozitív, mivel

                                            ⟨ϕ|N |ϕ⟩ = ∥a|ϕ⟩∥2 ≥ 0.

    Ezért N-nek csak nemnegatív sajátértékei vannak; a sajátvektorokat így jelöljük:

                                             N |ν⟩ = ν|ν⟩,    ν ≥ 0.

  • A kommutációs relációkat alkalmazva

                                  N a = a(N − 1),         N a† = a† (N + 1).

    Ebből következik, hogy a|ν⟩ az N olyan sajátketje, amelynek sajátértéke ν − 1, és hasonlóan
    a† |ν⟩ sajátértéke ν + 1. Így egyetlen sajátketből sajátállapotok létráját kaphatjuk.

  • A létra akkor ér véget, ha a|ν⟩ vagy a† |ν⟩ eltűnik. Vegyük észre azonban, hogy

                               ∥a|ν⟩∥2 = ⟨ν|a† a|ν⟩ = ν,       ∥a† |ν⟩∥ = ν + 1.

    Ezért a létra alul ν = 0-nál ér véget, felül viszont nem. Továbbá minden ν sajátérték egész
    szám kell legyen; ellenkező esetben addig csökkenthetnénk, amíg a sajátérték negatívvá nem válik,
    ami ellentmond N pozitív definitségének. Azt, hogy nincs több létramásolat, a hullámfüggvényekre
    áttérve és az egyértelműséget használva mutathatjuk meg, amint azt alább látni fogjuk.

  • Ezért a harmonikus oszcillátor sajátállapotait egész számokkal indexelhetjük:
                                                                     1
                                         H|n⟩ = En |n⟩,      En = n + .
                                                                     2

  • A fenti egyenletekből következik, hogy a |n⟩ állapotok normálásához
                                    √                     √
                            a|n⟩ = n|n − 1⟩, a† |n⟩ = n + 1|n + 1⟩.

    Elvileg fázistényező is megjelenhetne, de a sajátketek fázisszabadságát felhasználjuk arra, hogy
    nullára forgassuk. Ezt ismételve

                                                       (a† )n
                                                 |n⟩ = √ |0⟩.
                                                         n!
Megjegyzés. Explicit hullámfüggvények. Az alapállapot hullámfüggvénye kielégíti az a|0⟩ = 0 feltételt,
ezért
                            1                                         1          2
                            √ (x + ∂x )ψ0 (x) = 0,        ψ0 (x) =           e−x /2 .
                             2                                       π 1/4
Hasonlóan, a gerjesztett állapotokra
                                               1    1                 2
                                 ψn (x) =         √     (x − ∂x )n e−x /2
                                             π 1/4 n!2n
adódik. Az egyszerűsítéshez „átmozgatjuk a deriváltakat az exponenciálison”, felhasználva az
                                                   2           2
                                        (x − ∂x )ex /2 f = e−x /2 ∂x f
azonosságot.
147 5. A kvantummechanika alapjai

Ezért
                                           1 (−1)n x2 /2 n −x2
                                              √
                                       ψn (x) =     e   ∂x e .
                                         π 1/4 n!2n
Ez egyszerűen felírható Hermite-polinomokkal:
                                1          1             2                             2        2
                    ψn (x) =           √        Hn (x)e−x /2 ,     Hn (x) = (−1)n ex ∂xn e−x .
                               π 1/4       n!2n

Általában az n-edik állapot egy n-edfokú polinom és egy Gauss-függvény szorzata.

Megjegyzés. Hasonlóan meghatározhatjuk az impulzustérbeli ψen (p) hullámfüggvényt az a† impulzustér-
beli felírásával. Az eredmény fázistényezőktől és skálázástól eltekintve azonos; ennek oka, hogy a
harmonikus oszcillátor potenciáljában π/2 ideig tartó unitér időfejlődés Fourier-transzformálja a
hullámfüggvényt (amint alább látni fogjuk), és ez a fejlődés ψn (x)-et egy fázistényezőtől eltekintve
változatlanul hagyja.

Most a koherens állapotokra térünk át, amelyekkel a Heisenberg-képben a legegyszerűbb dolgozni.

  • A Hamilton-operátor továbbra is H = (x̂2 + p̂2 )/2, az operátorok azonban a klasszikus
    mozgásegyenleteknek megfelelő időfüggést kapnak:
                                                    dx̂          dp̂
                                                        = p̂,        = −x̂.
                                                    dt           dt
    Ennek megoldása egyszerűen az óramutató járásával megegyező körmozgás a fázistérben, akárcsak
    klasszikusan:
                                                           
                                     x̂(t)       cos t sin t    x̂0
                                            =                       .
                                     p̂(t)      − sin t cos t   p̂0

    A hely és az impulzus várható értékei ezért klasszikusan viselkednek.

  • Továbbá a π/2 ideig tartó időfejlődés a hely sajátállapotait impulzussajátállapotokká alakítja.
    Legyen U = e−iH(π/2) és x0 |x⟩ = x|x⟩. Ekkor

                                                  U x0 U −1 U |x⟩ = U x|x⟩

    amiből
                                                   p0 (U |x⟩) = x(U |x⟩)
    következik. Így U |x⟩ impulzussajátállapot (dimenziótlan impulzussal x). Ebből következik, hogy
    a π/2 ideig tartó időfejlődés a Schrödinger-képben Fourier-transzformációt alkalmaz a
    hullámfüggvényen. Általános idő esetén a fejlődés általános forgást valósít meg a fázistérben,
    vagyis a hullámfüggvény tört Fourier-transzformációt szenved.

  • Klasszikusan célszerű a komplex
                                           1                          1
                                       z = √ (x + ip),           z = √ (x − ip)
                                            2                          2
    változóval dolgozni. A Hamilton-operátort ezekkel az új szabadsági fokokkal kifejezve H = zz,
    ezért ż = −iz és ż = iz. Ennek következtében a z változó az óramutató járásával megegyezően
    forog a komplex síkon.

  • z és z kvantumos megfelelői az a és a†, amelyekre

                         ȧ = −ia,         ȧ† = ia† ,   a(t) = e−it a(0),    a† (t) = eit a† (0).
148 5. A kvantummechanika alapjai

  • Koherens állapotnak nevezzük az olyat, amelyre
                                                       1
                                             ∆x = ∆p = √
                                                         2
    teljesül, vagyis telíti a bizonytalansági relációt. Ezek az állapotok „a lehető legklasszikusabbak”,
    abban az értelemben, hogy helyük és impulzusuk a lehető legpontosabban meghatározott. Félklasszikus
    szempontból, amikor egy kvantumállapotra fázistérbeli eloszlásként gondolunk, a koherens állapot
    minimális h területű kör a fázistérben. Léteznek továbbá „nyújtott állapotok”, amelyek szintén
    telítik a bizonytalansági relációt, de a fázistérben ellipszisek. Ezen állapotok alkalmazásait az
    Optika című jegyzetben tárgyaljuk.

  • Nem minden „közel klasszikus” állapot koherens állapot, de az sem igaz, hogy minden nagy betöltési
    számú állapot közel klasszikusnak látszik. Például a nagy n-ű |n⟩ nem klasszikus, mivel teljesen
    delokalizált.

  • A |0⟩ állapot koherens, és továbbiakat a hely- és impulzustranszlációs operátorok alkalmazásával
    állíthatunk elő:

                                       T (a) = e−iap̂ ,    S(b) = eibx̂

  • Taylor-sorba fejtéssel vagy a Hadamard-lemmát alkalmazva

                           (T (a)ψ)(x) = ψ(x − a),        (T (a)ϕ)(p) = e−iap ϕ(p)

    és
                            (S(b)ψ)(x) = eibx ψ(x),       (S(b)ϕ)(p) = ϕ(p − b).
    Ezért a transzlációs operátorok eltolják a várható értékeket, a szórásokat pedig változatlanul
    hagyják. Továbbá nem kommutálnak; a fenti relációk alapján

                                        S(b)T (a) = eiab T (a)S(b)

    így fázistényezőt kapunk, hacsak ab nem nh.

  • A nemkommutativitás miatt a hely- és impulzustranszlációk sorrendje számít. Hogy egyenrangúvá
    tegyük őket, definiáljuk az eltolásoperátort:

                                           W (a, b) = ei(bx̂−ap̂) .

    Glauber tételével

                              W (a, b) = eiab/2 T (a)S(b) = e−iab/2 S(b)T (a),

    tehát ez a definíció egyszerűen átlagolja a két sorrend közötti fázist.

  • A koherens állapotokat így definiáljuk:
                                           |a, b⟩ = W (a, b)|0⟩.
    Ezt az állapotot úgy képzeljük el, mint az (x, p) = (a, b) középpontú kört a fázistérben; a hely-
    és impulzustérbeli hullámfüggvények Gauss-függvények.

Ezzel a felállással könnyű megmutatni a koherens állapotok néhány fontos tulajdonságát.
149 5. A kvantummechanika alapjai

 • Heisenberg-képbeli eredményeinkből tudjuk, hogy az |a, b⟩ várható értékei klasszikusan fejlődnek.
   A szórások időbeli állandóságának megmutatásához célszerű az emelő- és süllyesztőoperátorokra
   áttérni. A z komplex változót a korábbiak szerint definiálva
                         W (x, p) = exp (i(px̂ − xp̂)) = exp(za† − za) ≡ D(z)
   Glauber tételének alkalmazása azt adja, hogy
                                                     2
                                   D(z) = e−|z| /2 exp(za† ) exp(−za).

 • Így a |z⟩ = D(z)|0⟩ koherens állapot
                                                                             ∞
                                     −|z|2 /2            †       −|z|2 /2
                                                                            X   zn
                           |z⟩ = e              exp(za )|0⟩ = e                 √ |n⟩.
                                                                            n=0  n!
   Ekkor |z⟩ a z sajátértékű süllyesztőoperátor sajátállapota.
 • Ez megkönnyíti a koherens állapotok tulajdonságainak kiszámítását; például
                                  ⟨z|n̂|z⟩ = ⟨z|a† a|z⟩ = z ∗ z⟨z|z⟩ = |z|2
   valamint
                         ⟨z|n̂2 |z⟩ = ⟨z|a† aa† a|z⟩ = |z|2 ⟨z|aa† |z⟩ = |z|4 + |z|2 .
   Különösen var(n̂) = |z|2. Mindez összhangban van azzal, hogy a részecskeszám-eloszlás |z|2
   várható értékű Poisson-eloszlás.
 • A koherens állapot időfejlődése
                                            U (t)|z⟩ = e−it/2 |e−it z⟩
   összhangban van a korábban látott klasszikus z(t) fejlődéssel. Ez azt jelenti, hogy a koherens
   állapot koherens marad. Ugyanezt az eredményt az a és a† Heisenberg-féle időfejlődéséből is
   láthatjuk.
 • A z/z változókban a bizonytalansági reláció ∆n∆φ ≳ 1, ahol φ a z fázisának bizonytalansága.
   Fizikailag, ha a kvantumos elektromágneses teret tekintjük, ez a reláció korlátozza a fotonok számának
   és a hozzá tartozó klasszikus hullám fázisának bizonytalanságát.
 • Mivel a nem Hermitikus, sajátvektorai nem alkotnak teljes rendszert, sőt nem is ortogonálisak.
   Glauber tételét ismét használva az átfedés
                                                         ∗   2          2
                                        ⟨w|z⟩ = ew z e−|z| /2 e−|w| /2
   négyzetre emelve szemléletesebb:
                                                                    2
                                                |⟨w|z⟩|2 = e−|w−z| .

 • A koherens állapotok mégis „túlkomplett” rendszert alkotnak abban az értelemben, hogy
                                        Z
                                          dxdp
                                               |z⟩⟨z| = 1.
                                           2π
   Ennek belátásához balról ⟨m|-mel, jobbról |n⟩-nel hatunk, és az átfedést használjuk:
                        1
                          Z               n ∗ m    Z              Z
                                                                    dφ z n (z ∗ )m
                                   −|z|2 z (z )           2 −|z|2
                             dxdp e       √      = d|z| e               √          .
                       2π                   n!m!                    2π n!m!
   A fázisintegrál nulla, hacsak n = m nem teljesül. Ha n = m, a fázisintegrál 1, és a d|z|2 integrál
   szintén 1-et ad, ezzel megmutattuk az eredményt.
150 5. A kvantummechanika alapjai

A koherens állapotok további tulajdonságait az Optika című jegyzet tárgyalja.

Megjegyzés. A koherens állapotok mindenütt jelen vannak a természetben, mivel tipikusan egy
harmonikus oszcillátor klasszikus gerjesztésével jönnek létre. f (t) erőhatásnak kitett harmonikus
oszcillátorra Green-függvényekkel
                                           Z
                            x(t) = x0 (t) + dt′ sin(t − t′ )θ(t − t′ )f (t′ )
kapjuk, ahol x0 (t) homogén megoldás. Heisenberg-képben ekkor

                           âe−it + â† eit               iθ(t − t′ )f (t′ ) −i(t−t′ )
                                                Z
                                                                                                ′
                   x̂(t) =       √          +       dt′                     (e         − e−i(t−t ) )
                                   2                            2

ahol az â és â† operátorokat t = 0 időpontbeli Heisenberg-operátoroknak választjuk. Most azokra
az időpontokra összpontosítunk, amelyek a gerjesztés befejezése után következnek. A lépcsőfüggvény
egyszerűen 1, ezért a Fourier-transzformációt hullámvonalas jelöléssel megadva
                                                                      
                               1          i                      i
                      x̂(t) = √     â + √ f˜(1) e−it + â† − √ f˜(−1) eit
                                2          2                      2
ahol a kifejezések kissé furcsán néznek ki, mert ω = 1-et választottunk. Minden időpontra azonban
                                                          â(t) + â† (t)
                                            x̂(t) =             √
                                                                 2
teljesül, ezért â(t) és â† (t) végső kifejezései a fenti zárójelekben lévő tényezők kell legyenek.
Az alapállapot olyan állapotba fejlődik, amelyet â(t) megsemmisít, ez pedig pontosan egy koherens
állapot. A többi állapot ebbe az állapotba fejlődik, â† (t) hatványaival felgerjesztve.
   Ez az eredmény közvetlenül az állapotok szintjén is levezethető. Ismét ℏ = ω = 1-et választva
legyen a Hamilton-operátor
                                      H = a† a + f ∗ (t)a + f (t)a†
ahol a gerjesztő tagot a lehető legáltalánosabb, Hermitikus és x-ben, p-ben lineáris alakra
általánosítottuk. Kölcsönhatási képben

                                       HI = e−it f ∗ (t)a + eit f (t)a† .

A Schrödinger-egyenlet megoldása ezután olyan időfejlődési operátort ad, amely az a és a† lineáris
kombinációjának exponenciálisa. Ez éppen a fent definiált D(z) operátorok alakja, ezért a vákuumot
koherens állapottá alakítja.

Megjegyzés. A lézer klasszikus elektromágneses tere valójában a kvantumos elektromágneses tér
koherens állapota; általában a klasszikus terek sok kvantum egymásra helyezéséből jönnek létre. Egy
egzotikusabb példa a szuperfolyadékoké, ahol a gerjesztések bozonok, amelyek koherens térállapotot
alkotnak, ψ̂(x)|ψ⟩ = ψ(x)|ψ⟩. Nagy betöltöttségek határesetében az állapotot klasszikus ψ(x) mezőként
kezelhetjük, amelyet gyakran „makroszkopikus hullámfüggvénynek” neveznek.

Megjegyzés. Amint láttuk, a koherens állapotok korlátlan ideig egyszerűen oszcillálnak, és a
hullámfüggvényeik soha nem terülnek szét. Ez a harmonikus oszcillátorra különleges, és annak
következménye, hogy frekvenciái egész számú távolságra vannak egymástól, így minden frekvenciakülönbség
ℏω egész számú többszöröse. Általános potenciálokban, például a Coulomb-potenciálban koherens állapotok
analógjainak megalkotása sokkal nehezebb.
151 5. A kvantummechanika alapjai

5.6     A WKB-közelítés
Ebben a szakaszban bevezetjük a WKB-közelítést, és összekapcsoljuk a klasszikus mechanikával.

 • A szokásos „kinetikus energia plusz potenciál” Hamilton-operátort tekintjük, és megpróbáljuk
   megoldani az időfüggetlen Schrödinger-egyenletet. Állandó potenciál esetén a megoldások síkhullámok:

                                     ψ(x) = AeiS(x)/ℏ ,   S(x) = p · x.

      A hosszskála itt a de Broglie-hullámhossz, λ = h/p.

 • Tekintsünk most egy olyan potenciált, amely L ≫ λ hosszskálán változik. Ekkor

                                            ψ(x) = A(x)eiS(x)/ℏ

      ahol azt várjuk, hogy A(x) lassan, L skálán, S(x) viszont továbbra is gyorsan, λ skálán változik.
      A megoldás lokálisan p(x) impulzusú síkhullámnak látszik:

                                               p(x) = ∇S(x).

      Ezért S(x) Hamilton főfüggvényének analógja.

 • A közelítés ℏ szerinti kifejtésként is felfogható, mivel L ≫ λ ekvivalens a pL ≫ ℏ feltétellel.
   A WKB-közelítés azonban alapvetően egymástól távoli hosszskálákról szól; a klasszikus mechanikában
   is hasznos.

 • Kvantitatívabbá tételéhez a hullámfüggvény logaritmusát ℏ szerinti sorba írjuk:
                                  
                           i
              ψ(x) = exp     W (x) , W (x) = W0 (x) + ℏW1 (x) + ℏ2 W2 (x) + . . . .
                           ℏ

      Ezt a korábbi próbafüggvénnyel összevetve W0-t S-sel, W1-et pedig −i log A-val azonosítjuk,
      bár a valódi S és A magasabb rendű korrekciókat is kap.

 • Ezt a Schrödinger-egyenletbe behelyettesítve
                                      1          iℏ 2
                                        (∇W )2 −    ∇ W + V = E.
                                     2m          2m
      ℏ legalacsonyabb rendjében ez az időfüggetlen Hamilton–Jacobi-egyenletet adja:
                                            1
                                              (∇S)2 + V (x) = E
                                           2m
      amely E energiájú részecskéket ír le.

 • A következő rendben
                       1              i 2                                1
                         ∇W0 · ∇W1 −    ∇ W0 = 0,          ∇S · ∇ log A + ∇2 S = 0
                       m             2m                                  2
      ami ekvivalens a következővel:
                                               ∇ · (A2 ∇S) = 0.
      Ezt amplitúdótranszport-egyenletnek nevezzük.
152 5. A kvantummechanika alapjai

  • Eredményünk jelentésének megértéséhez definiáljunk sebességteret és sűrűséget:
                                          ∂H   p(x)
                                 v(x) =      =      ,       ρ(x) = A(x)2 .
                                          ∂p    m
    Ekkor az amplitúdótranszport-egyenlet

                                      ∇ · J = 0,    J(x) = ρ(x)v(x)

    vagyis egyszerűen a valószínűség megmaradása statikus helyzetben.

  • Félklasszikusan egy stacionárius állapotra úgy gondolhatunk, mint klasszikus részecskék együttesére,
    amelynek p(x) impulzusmezeje van, ahol ∇ × p = 0, a részecskesűrűség pedig időben állandó. Ez a
    kép O(ℏ2 ) korrekciók erejéig helyes.

  • Ugyanez az érvelés alkalmazható az időfüggő Schrödinger-egyenletre időfüggő Hamilton-operátorral:
                                      1                    ∂S
                                        (∇S)2 + V (x, t) +    = 0.
                                     2m                    ∂t
    Ez egyszerűen az időfüggő Hamilton–Jacobi-egyenlet.

Megjegyzés. Általánosságban definiálhatunk kvantumos sebességoperátort:
                                                   ∂H   ∂ω
                                          v(x) =      =    .
                                                   ∂p   ∂k
Ez a hullámmechanikában a csoportsebességnek felel meg, vagyis egy keskeny hullámcsomag klasszikus
határesetében klasszikus sebességgé alakul. Ez érthető, hiszen azt is tudjuk, hogy a sebességoperátor
megjelenik a valószínűségi fluxusban. Alkalmazásként vegyük észre, hogy egy szabad, nemrelativisztikus
részecskére v = p/m. Ez a klasszikus határeset helyes sebessége, szemben a fázissebességgel, amely
p/2m lenne. Általánosabban szabad relativisztikus részecskére E 2 = p2 c2 + m2 c4, amiből
                                                    pc2
                                              v=        .
                                                     E
Mivel az impulzusoperátor mindig térbeli derivált, a de Broglie-hullámhossz mindig λ = h/p. Ez azt
jelenti, hogy tömeggel rendelkező relativisztikus részecskéknél 1/γ arányban „hosszkontrakciót szenved”.
Most egydimenziós problémákra specializálódunk.

  • Egydimenziós esetben legalacsonyabb rendben
                                             2                                           
                              iS(x)/ℏ    1    dS                         d           2 dS
                 ψ(x) = A(x)e         ,             + V (x) = E,                 A              = 0.
                                        2m dx                           dx            dx
    A megoldások
                           dS           p                               const
                              = p(x) = ± 2m(E − V (x)),          A(x) = p      .
                           dx                                             p(x)

    Mivel S a p(x) integrálja, egyszerűen a klasszikus részecske pályája által bejárt fázistérterület.
153 5. A kvantummechanika alapjai

 • Vegyük észre, hogy klasszikusan tiltott tartományokban S képzetessé válik, és az oszcillációt
   exponenciális lecsengéssé alakítja. Klasszikusan megengedett tartományokban S két előjelét úgy
   értelmezzük, hogy a részecske balra, illetve jobbra mozog. Konkrétan válasszuk
                                      (p
                                           2m(E − V (x)) E > V (x),
                               p(x) = p
                                        i 2m(V (x) − E) E < V (x).
                     √
 • Az A ∝ 1/ p eredménynek egyszerű klasszikus értelmezése van. Tekintsünk egy potenciálgödörben
   oszcilláló klasszikus részecskét. Az egy pontban töltött idő fordítottan arányos az ottani sebességgel,
   és valóban A2 ∝ 1/p ∝ 1/v. Ezért a stacionárius állapotot modellező félklasszikus részecskerajnak
   időben egyenletesen kell eloszlania.

 • Ez a félklasszikus kép időfüggetlen szórási állapotokra is alkalmazható, amelyek félklasszikus,
   végtelenből érkező és oda eltűnő részecskeáramként értelmezhetők.

 • Vegyük észre, hogy a WKB-közelítés klasszikus fordulópontoknál (ahol V (x) = E) felmondja a
   szolgálatot, mivel a de Broglie-hullámhossz divergál.

Most levezetjük azokat a kapcsolati képleteket, amelyek a fordulópontokat kezelik.

 • Tegyük fel, hogy a klasszikusan megengedett tartomány x < xr. Ezen a tartományon definiáljuk
                                                Z x
                                        S(x) =       p(x′ ) dx′ .
                                                      xr

    Ekkor az x < xr tartomány WKB-megoldása
                                      1  iS(x)/ℏ+iπ/4                     
                           ψI (x) = p     cr e         + cℓ e−iS(x)/ℏ−iπ/4
                                     p(x)
    ahol cr és cℓ a jobbra, illetve balra haladó hullámokat jelöli.

 • A klasszikusan tiltott tartományra definiáljuk
                                                 Z x
                                         K(x) =      |p(x′ )| dx′
                                                      xr

    hogy csak valós mennyiségekkel dolgozzunk. Ekkor az általános WKB-megoldás
                                           1                               
                              ψII (x) = p          cg eK(x)/ℏ + cd e−K(x)/ℏ
                                          |p(x)|
    ahol a megoldások jobbra haladva rendre exponenciálisan nőnek és csökkennek.

 • A kapcsolati képletek cr-t és cℓ-t cg-vel és cd-vel kapcsolják össze. A fordulópont közelében
   Taylor-sorba fejtve a Schrödinger-egyenlet
                                        ℏ2 d2 ψ
                                    −           + V ′ (xr )(x − xr )ψ = 0.
                                        2m dx2
    Dimenziótlanításhoz az z eltolással és skálázással definiált változóra térünk át:
                                                        1/3
                                                 ℏ2            d2 ψ
                                          
                       x = xr + az, a =                      ,      − zψ = 0.
                                            2mV ′ (xr )        dz 2
    Ezt a differenciálegyenletet Airy-egyenletnek nevezzük.
154 5. A kvantummechanika alapjai

 • Az Airy-egyenlet két független megoldása Ai(x) és Bi(x). Ezek egy homogén térben, például
   gravitációs vagy elektromos térben mozgó részecske Schrödinger-egyenletének egzakt megoldásai.
   Mindkettő oszcillál z ≪ 0 esetén, és exponenciálisan csökken, illetve nő z ≫ 0 esetén:
                                                             
                                 cos α(z)                         sin α(z)
                               √             z≪0                √            z≪0
                            
                                                             
                                        1/4
                                                               π(−z)1/4
                                                             
                             π(−z)
                            
                                                             
                    Ai(x) =                          Bi(x) =
                            
                            
                               e −β(z)                       
                                                              
                                                                 eβ(z)
                            
                               √            z ≫ 0,            √            z ≫ 0,
                               2 πz 1/4                            πz 1/4
                                                             

   ahol
                                       2         π      2
                             α(z) = − (−z)3/2 + , β(z) = z 3/2
                                       3         4      3
   amint nyeregpontközelítéssel megmutatható.
 • Legyen a fordulópont közelében a megoldás
                                      ψtp (x) = ca Ai(z) + cb Bi(z).
   Először a bal oldali megoldással illesztjük össze. A megoldást komplex exponenciálisokkal írva
                               1
                  ψtp (z) = √     1/4
                                      ((ca − icb )eiα(z) + (ca + icb )e−iα(z) ),    z ≪ 0.
                           2 π(−z)
   Másrészt a fázistényezőket úgy választottuk, hogy lineáris közelítésben a WKB-megoldás
                                           1
                               ψI (x) = p      (cr eiα(z) + cℓ e−iα(z) ).
                                          p(x)
   Így azonnal leolvasható:
                                           r                    r
                                ca − icb      a       ca + icb a
                                   √     =      cr ,      √         cℓ .
                                  2 π         ℏ         2 π       ℏ
 • A klasszikusan tiltott tartományban hasonló érveléssel
                                            r                r
                                     ca        a       cb       a
                                     √ =         cd , √ =         cg .
                                    2 π        ℏ        π       ℏ
   Ezeket összekapcsolva a kapcsolati képletek
                                                   
                                       cg      i −i      cr
                                           = 1 1            .
                                       cd      2   2     cℓ

 • A bal oldali klasszikusan tiltott tartomány elemzése nagyon hasonló. Bal oldalon
                                                                          Z x
                              1                              
               ψIII (x) = p           cg eK(x)/ℏ + cd e−K(x)/ℏ , K(x) =        |p(x′ )| dx′
                             |p(x)|                                         xℓ

   jobb oldalon pedig
                                                                                  Z x
                           1  iS(x)−iπ/4                  
               ψIV (x) = p     cr e       + cℓ e−iS(x)−iπ/4 ,            S(x) =         p(x′ ) dx′
                          p(x)                                                     xℓ

   ahol a fázistényezőket ismét kényelmi okokból választottuk. Ekkor
                                         1 1  
                                       cg                cr
                                           = 2 2             .
                                       cd       −i i     cℓ
155 5. A kvantummechanika alapjai

Most néhány egyszerű problémára alkalmazzuk a kapcsolati képleteket.

 • Először tekintsünk egy áthatolhatatlan, x > xr tartománybeli klasszikusan tiltott tartományt.
   Ekkor ezen a tartományon cg = 0 kell legyen, tehát cr = cℓ, és a bal oldali hullámfüggvény
                                        1
                             ψI (x) = p     (eiS(x)+iπ/4 + e−iS(x)−iπ/4 ).
                                       p(x)
   Ezt másképpen a fordulópontbeli fázisok illesztésével írhatjuk:
                                       1
                            ψI (x) = p     (eiS(x) + re−iS(x) ),   r = −i.
                                      p(x)

   Az értelmezéshez képzeljük el, hogy a hullám mozgása közben dθ = p dx/ℏ fázist gyűjt. A vissza-
   verési együttható a fordulópont miatt felhalmozódó „extra” fázist, −π/2-t adja meg.

 • Ezután tekintsünk egy xℓ és xr fordulópontokkal rendelkező oszcillátort. A probléma mindkét oldalon
   exponenciális lecsengés megkövetelésével oldható meg. Intuitívan a részecske egy oszcilláció alatt
   a következő fázist gyűjti:
                                             I
                                           1
                                               p dx − π
                                           ℏ
    ezért a hullámfüggvény egyértékűségének megkövetelése ezt adja:
                                   I
                              2πI = p dx = (n + 1/2)h, n = 0, 1, 2, . . .

   ez a Bohr–Sommerfeld-féle kvantálási szabály. Az I mennyiség arányos a pálya fázistérbeli területével,
   és a klasszikus mechanikában akciónak nevezzük. Az állapot energiájának félklasszikus becslése az
   I akciójú klasszikus megoldás energiája.

 • Egyszerű harmonikus oszcillátor esetén
                                             √
                                 I                  r
                                                       2E    2πE
                                   p dx = π 2mE            =
                                                      mω 2    ω
   amiből
                                          En = (n + 1/2)ℏω
   adódik. Ezek egzakt energiasajátértékek, az energiasajátállapotok azonban nem egzaktak.

 • Tekinthetjük a kemény falról, vagyis végtelen potenciálról való visszaverődést is. Ekkor a jobbra
   és balra haladó hullámoknak pontosan ki kell oltaniuk egymást a falnál, cℓ = −icr, amiből az
   következik, hogy a visszavert hullám −π fázist kap.

 • Például a dobozban lévő részecske kvantálási feltétele
                                I
                                  p dx = (n + 1)h, n = 0, 1, 2, . . .

    és ha a doboz hossza L, akkor
                                                (n + 1)2 ℏ2 π 2
                                         En =
                                                   2mL2
   ami az egzakt eredmény.
156 5. A kvantummechanika alapjai

  • Végül periodikus peremfeltételeket is választhatunk, például amikor egy részecske gyűrűn mozog.
    Ekkor egyáltalán nincs fáziseltolás, és a kvantálási feltétel egyszerűen p dx = nh.

  • Általában egy n-dimenziós konfigurációs térrel rendelkező rendszer minden stacionárius állapota
    hn fázistérfogatot foglal el. Ez gyors módot ad az állapotsűrűség kiszámítására.

Megjegyzés. Klasszikus és kvantumos frekvenciák. A klasszikus ωc frekvencia a klasszikus oszcilláció
frekvenciája, és ωc = dE/dI teljesül rá. A kvantumos ωq frekvencia a kvantumos fázis változási
sebessége. Ezek különböznek; harmonikus oszcillátor esetén ωc nem függ n-től, ωq viszont igen.
   Ha egy kvantumoszcillátor a kvantumos frekvenciák között ∆ωq különbségű állapotok között megy át,
∆ωq frekvenciájú sugárzást bocsát ki. Másrészt tudjuk, hogy az ωc frekvenciával oszcilláló klasszikus
részecske ωc frekvenciájú sugárzást bocsát ki. Összekapcsolásukhoz tegyük fel, hogy egy kvantumoszcil-
látornak n ≫ 1 és ∆n = −1 átmenete van. Ekkor
                                          ∆E   ∆E   dE
                                  ∆ωq =      ≈    ≈    = ωc
                                           ℏ   ∆I   dI
visszakapjuk a klasszikus várakozást. Nagyobb ∆n esetén a sugárzás ωc többszöröseinél szabadul fel.
Ez is illeszkedik a klasszikus várakozáshoz, ahol ezek a felharmonikusok a mozgás magasabb Fourier-
komponenseiből származnak.

Megjegyzés. Az igazi Bohr-modell. A Bohr-modellt rendszerint azzal a körpályákra tett posztulátummal
vezetik be, hogy L = nℏ, ez azonban egyszerűsítés; Bohrnak valójában jobb indoklása volt. A fent
felvázolt megfeleltetési elv szerint ∆ωq = ωc, Planck pedig korábban ∆E = ℏ∆ωq-val motiválta az
anyagi oszcillátorokat. Ha r és r − ∆r sugarú körpályákat tételezünk fel, ezek a
                       √
relációk ∆r = 2 a0 r-t adnak, amiből n ≫ 1 esetén r ∝ n2 következik. Ez ekvivalens az L = nℏ
feltétellel. Bohr radikális lépése ezután az volt, hogy feltételezte: ezek az eredmények minden n-re
érvényesek.
157 6. Útintegrálok

6      Útintegrálok
6.1     Formalizmus
    • A propagátort az időfejlődési operátor helytérbeli mátrixelemeiként definiáljuk:
                                         K(x, t; x0 , t0 ) = ⟨x|U (t, t0 )|x0 ⟩.
      Ekkor automatikusan K(x, t0 ; x0 , t0 ) = δ(x − x0 ). Az időfejlődést
                                           Z
                                ψ(x, t) = dx0 K(x, t; x0 , t0 )ψ(x0 , t0 )
      segítségével számítjuk.

    • Mivel gyakran a helybázisban dolgozunk, megkülönböztetjük a ketekre ható Hamilton-operátort,
      |H⟩-t, a hullámfüggvényekre ható differenciáloperátortól, H-tól. Kapcsolatuk
                                                ⟨x|Ĥ|ψ⟩ = H⟨x|ψ⟩.

    • A fentiek alapján a propagátor időfejlődése
                                       ∂K(x, t; x0 , t0 )
                                    iℏ                    = H(t)K(x, t; x0 , t0 )
                                             ∂t
      így K(x, t) egyszerűen a Schrödinger-egyenlet egy megoldása a ψ(x, t0 ) = δ(x − x0 ) kezdeti
      feltétellel. Maga K(x, t) azonban nem valódi hullámfüggvény, mivel nem normálható. Vegyük észre,
      hogy mivel egy delta-függvény minden impulzust tartalmaz, K(x, t) tipikusan minden x-re nem zérus,
      bármely t > t0 esetén.
