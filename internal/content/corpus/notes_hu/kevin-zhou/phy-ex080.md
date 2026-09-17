---
id: kevin-zhou-notes-phy-ex080
source: kevin-zhou-notes
native_id: "phy Example 080"
origin: "Kevin Zhou personal physics notes"
language: hu
translated: true
links_en: kevin-zhou-notes-phy-ex080
topic: [kvantumfizika]
subtopic: [szögimpulzus, gömbharmonikusok, centrális erőtér]
math_tools: [lineáris-algebra, csoportelmélet, gömbi-koordináták]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "9256-9659"
archive_layer: reference_notes
source_role: explanatory_example
---
Példa. A j = 1 esetben
                                                                   √       
                                 1                                        2 √
                        J3 = ℏ                   ,      J+ = ℏ            2 .
                                            −1

Az e−2πiJ3 /ℏ kifejezést kiértékelve azt kapjuk, hogy a 2π-vel való elforgatás identitás. Általában,
egész j esetén az SO(3) szokásos reprezentációját kapjuk, nem projektív reprezentációt.
Megjegyzés. Forgatási mátrixok táblázatának olvasása. Az U (n̂, θ) operátor mátrixelemei
                                        j               ′
                                       Dm ′ m (U ) = ⟨jm |U |jm⟩.

Vegyük észre, hogy U-nak diagonálisnak kell lennie a j-térben, ezért itt nem hagyunk ki információt.
A Dm ′ m j mennyiségekre j indexű mátrixok családjaként gondolunk. Egy forgatást az előzőekhez
hasonlóan Euler-szögekkel paraméterezve:

                          j                      −iαJz /ℏ −iβJy /ℏ −iγJz /ℏ
                         Dmm ′ (α, β, γ) = ⟨jm|e         e        e         |jm′ ⟩.
Mivel Jz diagonális, ez egyszerűen kibontható:
                j                  −iαm−iγm j ′
               Dmm ′ (α, β, γ) = e         dmm′ (β),             djmm′ (β) = ⟨jm|e−iβJy /ℏ |jm⟩.

Itt djmm′ (β) a redukált forgatási mátrix. A djmm′ értékeinek táblázatait használva tetszőleges spinhez
konstruálhatunk forgatási mátrixokat.
   A Dj mátrixoknak számos, a számítást segítő tulajdonságuk van. Az U operátorok reprezentációjaként
tekinthetünk rájuk; a különbség az, hogy míg az U operátorok fizikai Hilbert-téren hatnak, a Dj
mátrixok csupán számok, amelyek számokból álló vektorokra hatnak. Mivel U unitér, és az |jm⟩
ortonormált bázist használjuk, a Dj-k is unitér mátrixok. E két tulajdonság együtt azt jelenti, hogy
                                        j       −1      j∗
                                       Dmm ′ (U    ) = Dm ′ m (U ).

Ez a D mátrixok egyik szimmetriája.
Megjegyzés. Ugyanazon irrep több példánya. Ha egy irrepnek csak egy példánya van, ortonormált
bázist konstruálunk hozzá úgy, hogy az m = j esethez tartozó |jm⟩-ből indulunk, és alkalmazzuk a
J− operátort. Ha több példány van, választhatunk ortonormált bázist az m = j altérben, a vektorokat
γ-val indexelve, majd J− segítségével lefelé léptethetjük őket. Az így kapott bázisvektorokat |γjm⟩
alakban írjuk, és minden, korábban definiált mátrixelem azonos, kivéve a δγ ′ γ faktort. Különösen a
                                                                                         j
Dmm ′ mátrixok továbbra is elegendők minden szükséges számítás elvégzéséhez.
Megjegyzés. Az adjungált formula itt a következő alakot ölti:
                                             U JU † = R−1 J.
Itt J = Jˆi ei operátorvektor; U a Jˆi operátorokra, R pedig az ei vektorokra hat. A formula
infinitézimális forgatások vizsgálatával és ezek egymás utáni felépítésével bizonyítható; egy
θ ≪ 1 szögű, U (n̂, θ) infinitézimális forgatás esetén a bal oldal
                                                      iθ
                                             J−          [n̂ · J, J].
                                                      ℏ
A kommutátor értéke
                               [ni Ji , Jj eˆj ] = iℏϵijk ni eˆj Jk = −iℏn̂ × J.
Ezért a bal oldal J − θn̂ × J, ami éppen az R−1 infinitézimális térbeli forgatása.
173 7. Szögimpulzus

Megjegyzés. Magasabb spin esetén akkor mondhatjuk, hogy egy spinállapot az n̂ irányba „mutat”, ha
a J · n̂ operátor legnagyobb sajátértékéhez tartozó sajátket. A spin 1/2 esetéhez hasonlóan, ha
Rn̂ = n̂′, akkor az adjungált formula szerint U (R) az n̂ irányba mutató spinállapotot az n̂′ irányba
mutató spinállapotba viszi.
    A különbség azonban az, hogy nagyobb spin esetén a legtöbb állapot egyáltalán nem „mutat” egyik
irányba sem. Például egy spin 1 részecske (0, 1, 0) állapotára ⟨J⟩ = 0. Mivel az (1, 0, 0) állapot
„felfelé” mutat, ez azt jelenti, hogy nincs olyan U (R) forgatás, amely az (1, 0, 0) állapotot az
(0, 1, 0) állapotba vinné. Ez általános a 1/2-nél nagyobb spinnél: az U (R) hatása a spinállapotokon
nem tranzitív, mivel az SU (2) dimenziója kisebb az állapottér (valós) dimenziójánál. (Ez összeegyeztethető
azzal, hogy a spinreprezentációk irrepek, hiszen ehhez csak az szükséges, hogy az egyes vektorok teljes
orbitjának kifeszítése az egész reprezentáció legyen.)

7.3     Spin és pályamenti szögimpulzus
Most a szögimpulzus kvantummechanikai fizikai megvalósításaira térünk át. Először a mágneses térben
lévő spinek esetét vizsgáljuk.

  • Egy µ mágneses momentum B mágneses térben lévő Hamilton-operátora klasszikusan és
    kvantummechanikailag is H = −µ · B(x). A mágneses momentumokra

                                   F = −∇U = ∇(µ · B),          τ = µ × B.

  • Kísérletileg azt találjuk, hogy atommagok és elemi részecskék esetén µ ∝ J, a releváns állapottér
    pedig a su(2) egyetlen irrepjének egyetlen példánya.

  • Egy m teljes tömegű és q töltésű klasszikus áramhurokra megmutatható, hogy
                                                        q
                                                 µ=        L.
                                                       2mc
      Az együtthatót giromágneses hányadosnak γ nevezzük. Általános elrendezésekben µ és L nem
      feltétlenül arányos, mivel az előbbi csak az árameloszlástól, az utóbbi pedig csak a tömegeloszlástól
      függ. A kapcsolat azonban a kvantummechanikai pályamenti szögimpulzusra fennáll, ahogy később
      meg fogjuk indokolni.

  • Spin esetén a fenti kapcsolat módosított giromágneses hányadossal áll fenn:
                                                        q
                                                µ=g        S.
                                                       2mc
      Elektronok esetén µB = e/2mc a Bohr-magneton neve, és g ≈ 2.

  • Atommagoknál a mágneses momentumot kísérletileg kell meghatározni. Mivel sok atommag semleges,
    mégis van mágneses momentumuk, célszerű a g-faktorokat a magmagneton segítségével definiálni:
                                                           q
                                     µ = gµN S, µN =
                                                         2mp c
      ahol q az elemi töltés, mp pedig a proton tömege. A protonra és a neutronra

                                          gp ≈ 5.56,    gn ≈ −3.83.

      Figyeljük meg a 2-es tényezőket. Ha a nagyságokat vesszük, µN 1/2-t, S 1/2-t, és csak elektronok
      esetén g 2-t ad.
174 7. Szögimpulzus

  • A proton mágneses momentuma a kvarkok és gluonok spin- és pályamozgásának keverékéből származik.
    Hasonlóan, a deutérium (egy proton és egy neutron) mágneses momentuma a proton és a neutron
    mágneses momentumainak, valamint a proton pályamozgásának kombinációja. A spin 0 részecskéknek,
    például az α-részecskének, S = 0, ezért µ = 0.

Most megmutatjuk, miért érthetők a fenti kísérleti tények.

 • Rotációs invariancia esetén [H, J] = 0, a Hamilton-operátor spektruma irrepekre bomlik, amelyek
   mindegyike 2j + 1 degenerált állapotot tartalmaz. Mivel a véletlen degenerációk nagyon valószínűtlenek,
   az irrepek nem lesznek egymással degeneráltak; ehelyett a magfizikai energialéptéknek megfelelő
   energiák választják el őket. Ez az energialépték sokkal nagyobb, mint a külső tér által egy irrepen
   belül létrehozott felhasadás; ezért ha az atommag alapállapotban indul, elegendő a legalacsonyabb
   energiájú irpet figyelembe venni. (További szimmetriák okozhatnak további degenerációkat, de ezek
   nem általánosak.)

 • A fenti érv megmagyarázza az atommagok helyzetét. Elemi részecskék esetén a különböző j-k degenerációja
   azért nem jelenik meg, mert a szuperszimmetrián kívül nincs olyan szimmetria, amely különböző j-jű
   részecskéket kapcsolna össze. Ez a Coleman–Mandula-tétel, amelynek bizonyításához relativisztikus
   kvantumtérelmélet szükséges.

 • Ha egyetlen irrep a releváns, alább megmutatjuk, hogy minden vektoroperátor (vagyis vektorként
   transzformálódó operátorhármas) J egy skalárszorosa. Mivel µ vektor, µ ∝ J.

 • Atomok esetén az irrepek sokkal közelebb vannak egymáshoz, mivel az atomi energialépték jóval kisebb
   a magfizikai energialéptéknél. Ilyenkor elég erős terekben valóban látjuk az irrepek keveredését, például
   az erős terű Zeeman-effektusban. Minden irpnek saját g-faktora van, ezért a teljes µ már nem arányos
   a teljes szögimpulzussal; ezzel visszakapjuk a klasszikus viselkedést.

Most egy háromdimenziós térben mozgó, spin nélküli részecske példáját vizsgáljuk. Ismét rotációs
szimmetriát tételezünk fel, ami ebben az esetben V = V (r)-t jelent.

 • Definiálhatnánk a szögimpulzust x×p-ként, de ehelyett a forgások generátoraként definiáljuk, ami
   alapvetőbb. Legyen
                                      U (R)|x⟩ = |Rx⟩.
    Ekkor közvetlenül ellenőrizhető, hogy az U (R) az SO(3) unitér reprezentációja.

 • A hullámfüggvények transzformációja

                                ψ ′ (x) = ψ(R−1 x) ahol |ψ ′ ⟩ = U (R)|ψ⟩.

    E szabály megjegyzésének egyik módja, hogy ha a forgatás x-et x′-be viszi, akkor ψ ′ (x′) = ψ(x)
    kell legyen. Ez a szabály az aktív nézőpontban szükséges, amelyet ezekben a jegyzetekben végig
    használunk.

 • Az L operátorok alakjának meghatározásához infinitézimális forgatásokat helyettesítünk be:
                                                                      i
                             R(n̂, θ) = 1 + θn̂ · J,   U (n̂, θ) = 1 − θn̂ · L
                                                                      ℏ
175 7. Szögimpulzus

   a fenti relációba, ahol J a so(3) fundamentális reprezentációjának korábban definiált generátorait
   tartalmazza. A θ elsőrendű tagjait összehasonlítva
                                            
                                     i
                                   − θn̂ · L ψ(x) = −θ(n̂ × x) · ∇ψ
                                     ℏ
   ahol felhasználtuk az (a · J)u = a × u tulajdonságot. Egyszerűsítve:

                                (n̂ · L)ψ = (n̂ × x) · pψ = n̂ · (x × p)

   amiből a várt L = x × p következik.

 • Vegyük észre, hogy ebben a kontextusban x és p sorrendjével nincs probléma. Például

                                 x × p = −p × x,         x · L = p · L = 0.

   Ennek oka, hogy csak az xi és az impulzus pi azonos komponensei között vannak nemzérus
   kommutátorok, a vektoriális szorzatok pedig megakadályozzák, hogy az összetartozó komponensek
   találkozzanak.

 • Most megkeressük a szokásos szögimpulzus-bázist |lm⟩ a helybázisban. Olyan ψlm (x) hullámfüggvényeket
   keresünk, amelyekre

                             L2 ψlm = ℏ2 l(l + 1)ψlm ,       Lz ψlm = ℏmψlm .

   A kezdés legegyszerűbb módja a kifeszített m = l állapot, amelyre

                                      Lz ψll = lℏψll ,     L+ ψll = 0.

 • Ismerjük az Li-ket derékszögű koordinátákban; gömbi koordinátákra áttérve azt kapjuk, hogy

                            Lz = −iℏ∂ϕ ,        L± = −iℏe±iϕ (±i∂θ − cot θ∂ϕ )

   és                                                                       
                                2      2         1                     1    2
                              L = −ℏ                 ∂θ (sin θ∂θ ) +       ∂ .
                                               sin θ                 sin2 θ ϕ
   Vagyis L2 egy konstans tényezőtől eltekintve éppen a gömbi Laplace-operátor.

 • Észrevesszük, hogy ∂r sehol nem jelenik meg fent, ami érthető, mivel a szögimpulzus olyan forgásokat
   generál, amelyek r-t állandónak tartják. Ezért elegendő a hullámfüggvényeket az egységgömbön,
   f (θ, ϕ) = f (r̂) alakban megkeresni. Belső szorzatukat így definiáljuk:
                                      Z
                             ⟨f |g⟩ = dΩ f (θ, ϕ)∗ g(θ, ϕ), dΩ = sin θ dθdϕ.

   Például az |r⟩ állapot szögfüggő hullámfüggvénye δ(θ − θ0 )δ(ϕ − ϕ0 )/ sin θ, ahol a szinusz
   kiesik a dΩ Jacobi-tényezőjével.

 • A gömbön a ψlm megoldások a gömbharmonikusok, az Ylm-ek. Lz definícióját használva Ylm ∝ eimϕ .
   Az Yll meghatározása után az alsó létraoperátort alkalmazva
                                     s                                   l−m
                               (−1)l 2l + 1 (l + m)! eimϕ
                                                               
                                                                    d
                   Ylm (θ, ϕ) = l                                              sin2l θ.
                                2 l!     4π (l − m)! sinm θ d(cos θ)

   A (−1)l fázistényező választása konvencionális, és Yl0-t valós, pozitív függvénnyé teszi az északi
   pólusban. Az (l + m)!/(l − m)! normálási tényező az L− alkalmazásából származik.
176 7. Szögimpulzus

 • A θ-függést a Legendre-polinomokkal is felírhatjuk; ezek a Rodriguez-formulával adhatók meg:
                                            (−1)l dl
                                   Pl (x) = l         (1 − x2 )l ,
                                             2 l! dxl
   és a kapcsolódó Legendre-függvényekkel:

                                                               dm Pl (x)
                                    Plm (x) = (1 − x2 )m/2               .
                                                                dxm
   Ebből                            s
                                              2l + 1 (l + m)! imϕ
                     Ylm (θ, ϕ) = (−1)m                      e Plm (cos θ),   m≥0
                                                4π (l − m)!
   ahol az m < 0 gömbharmonikusok kapcsolata
                                                          ∗
                                          Yl,−m = (−1)m Ylm .

 • A fenti elemzésben azt találtuk, hogy minden egész irpből pontosan egy példány jelenik meg, mivel
   az L+ ψll = 0 megoldása minden l-re egyértelmű. Egy háromdimenziós térben lévő részecske esetén
   az Ylm-eket egy u(r) függvénnyel kell megszorozni. Ekkor az egyes irrepek több példánya is megjelenhet,
   attól függően, hány megoldás van u(r)-re, és az állapotokat egy harmadik kvantumszámmal kell indexelni
   (például a hidrogénatom esetén n-nel).

 • A gömbharmonikusok ezután a szokásos szögimpulzus-bázis |lm⟩-jei. Identitást kaphatunk, ha két
   különböző módon számítjuk ki a ⟨r̂|U (R)|lm⟩ mátrixelemet. Jobbról hatva Ylm (R−1 r̂)-et kapunk.
   Alternatívaként beilleszthetjük az identitást:
                           X                               X
                                ⟨r̂|lm′ ⟩⟨lm′ |U (R)|lm⟩ =             l
                                                             Ylm′ (r̂)Dm ′ m (R).

                            m′                            m′

   Itt csak azonos l-hez tartozó állapotokat kellett beillesztenünk, mivel ezek egy irpet alkotnak. Így
                                               X
                                Ylm (R−1 r̂) =              l
                                                  Ylm′ (r̂)Dm ′ m (R).

                                                     m′

 • A fenti eredmény egyik hasznos speciális esete, ha r̂ = ẑ-t választunk, és R helyett R−1-et írunk,
                                              X
                                                          l         −1
                                   Ylm (r̂) =   Ylm′ (ẑ)Dm  ′ m (R    )
                                                m′

   ahol R az a forgatás, amely ẑ-t r̂-ba viszi, vagyis az Euler-szögei α = ϕ és β = θ. Továbbá az
   egyetlen, ẑ-ban nemzérus gömbharmonikus az m = 0-hoz tartozik (a centrifugális erő miatt), és ezt
   behelyettesítve
                                                r
                                                2l + 1 l∗
                                 Ylm (θ, ϕ) =          Dm0 (ϕ, θ, 0)
                                                  4π
   adódik, ahol felhasználtuk a D mátrixok unitérségét.

 • Többrészecske-rendszer esetén, amelynek állapottere |x1 , . . . , xn ⟩, a szögimpulzus-operátor
          P
   L =    xi × pi . A szögimpulzus-bázis megkonstruálásához a később tárgyalt szögimpulzus-összeadási
   módszereket használjuk.
177 7. Szögimpulzus

Megjegyzés. Néhány példa gömbharmonikusokra.
                                 r                               r                       r
                 1                    3                             3                         3
         Y00 = √ , Y11 = −               sin θ eiϕ , Y10 =              cos θ, Y1,−1 =          sin θ e−iϕ ,
                 4π                 8π                             4π                        8π
               r                                 r                                  r
                   15     2   2iϕ                   15                 iϕ              5
         Y22 =         sin θ e , Y21 = −                  sin θ cos θ e , Y20 =           (3 cos2 θ − 1),
                  32π                               8π                                16π
                              r                                          r
                                  15                −iϕ                     15
                      Y2,−1 =          sin θ cos θ e , Y2,−2 =                 sin2 θ e−2iϕ .
                                  8π                                       32π
Néha hasznos a gömbharmonikusokat derékszögű koordinátákban felírni. Az Ylm explicit kifejezéséből
az következik, hogy
                                                          r
                                                 (−1)   l    (2l + 1)!
                                rl Yll (θ, ϕ) = l                       (x + iy)l .
                                                   2 l!          4π
A jobb oldal l-ed fokú homogén polinom. A többi gömbharmonikus az operátor alkalmazásával kapható
meg; ez derékszögű koordinátákban

                           L− = Lx − iLy = −iℏ ((y∂z − z∂y ) − i(z∂x − x∂z ))

amiből következik, hogy rl Ylm l-ed fokú homogén polinom. Ebben a reprezentációban az is könnyen
látható, hogy Ylm paritása (−1)l.

7.4     Centrális erőtérbeli mozgás
Most az előző szakasz eredményeit alkalmazzuk centrális erőtérbeli mozgásra.

  • Tekintsünk egy centrális potenciálban mozgó, spin nélküli részecskét. Mivel L2 és Lz kommutál H-val,
    a sajátállapotok alakja

                                         ψ(r, θ, ϕ) = R(r)Ylm (θ, ϕ).

      Ezt a Schrodinger-egyenletbe helyettesítve, és figyelembe véve, hogy L2 a Laplace-operátor szög
      szerinti részének −ℏ2 /r2-szerese, azt kapjuk, hogy

                           ℏ2 1                                                l(l + 1)ℏ2
                       −         ∂r (r2 ∂r R) + U R = ER,    U (r) = V (r) +
                           2m r2                                                  2mr2
      ahol az effektív potenciál járulékos tagja L2 /2mr2. A klasszikus esethez hasonlóan ez a mozgási
      energia szög szerinti része.

  • Ezután f (r) = rR(r)-t vezetjük be. Ez ésszerű, mert ekkor |f |2 a radiális valószínűségi sűrűséget
    adja, ezért várhatóan egyszerűsíti a radiális kinetikusenergia-tagot. Valóban,
                                                             Z ∞
                          ℏ2 d2 f (r)
                        −             + U (r)f (r) = Ef (r),       dr |f (r)|2 = 1.
                          2m dr2                               0

      A kapott egyenlet éppen a szokásos egydimenziós Schrodinger-egyenletre hasonlít, de a (0, ∞)
      intervallumon.

178 7. Szögimpulzus

  • Erre szétválasztásos módszerrel is eljuthattunk volna. Általában ez a technika akkor működik, ha
    folytonos szimmetria áll fenn. Ekkor a szimmetriát generáló (differenciál-)operátor kommutál a
    Hamilton-operátorral, és a sajátfüggvényeket ennek az operátornak is sajátfüggvényeivé választhatjuk.
    Megfelelő koordinátarendszerben (vagyis amikor néhány koordináta rögzítése a szimmetria pályáját
    adja) ez automatikusan szétválasztást eredményez; például Lz olyan forgásokat generál, amelyek csak
    ϕ-t változtatják, ezért Lz diagonalizálása leválasztja a ϕ koordinátát.

  • Másik példaként a szabad részecske a lineáris impulzus megmaradása miatt derékszögű koordinátákban
    választható szét. A hidrogénatom rejtett SO(4)-szimmetriával rendelkezik, ezért gömbi koordináták
    mellett konfokális parabola-koordinátákban is szétválasztható.

  • Egy adott l-hez tartozó radiális megoldásokat n-nel indexeljük:

                                      ψnlm (r, θ, ϕ) = Rnl (l)Ylm (θ, ϕ).

   Ezek a kötött állapotokat adják; lehetnek folytonos spektrumú, nem kötött állapotok is. Csak a kötött
   állapotokra összpontosítva az irrepeket n és l indexeli, és mindegyik 2l + 1 állapotot tartalmaz.

  • Általában nincs l szerinti degeneráció további szimmetria nélkül; ez a hidrogénatomnál (a rejtett
    SO(4)-szimmetria, amelyet L és a Laplace–Runge–Lenz-vektor A generál) és a háromdimenziós
    harmonikus oszcillátornál (SU (3)-szimmetria, ahol a nyolc generátor a†i aj , az i a†i ai nyoma
    pedig nem szerepel, mert maga a Hamilton-operátor) fordul elő.
            P

  • A hidrogénatom energiaszintjei ms szerint is degeneráltak. Ennek egyszerű oka, hogy a Hamilton-
    operátorban semmi sem függ a spintől, szimmetriák szempontjából pedig az, hogy két független SU (2)
    rotációs szimmetria van, amelyek külön-külön a pálya-, illetve a spinrészre hatnak.

  • Ezután az n szerinti degenerációt vizsgáljuk, vagyis ugyanazon effektív potenciál azonos energiájú,
    degenerált f (r) sajátfüggvényeit. Ezek a sajátfüggvények ugyanazt a Schrodinger-egyenletet elégítik
    ki (ugyanazzal az E energiával és U (r) effektív potenciállal), ezért legfeljebb kettő lehet belőlük,
    mivel a Schrodinger-egyenlet másodrendű. Amint azonban alább megmutatjuk, f (0) = 0-nek kell
    teljesülnie, ami gyakorlatilag eltávolít egy szabadságfokot: a sajátfüggvényeket kizárólag f ′ (0)
    határozza meg. Ezért minden energiához, kötött és nem kötött esetben egyaránt, csak egy független
    megoldás tartozik, tehát különböző n értékek nem degeneráltak. (Kötött esetben arra is hivatkozhatunk,
    hogy f a végtelenben eltűnik.) Ezért az irrepek általában nem degeneráltak.

  • Most R(r) kis r melletti viselkedését vizsgáljuk. Ha kis r esetén R(r) ∼ ark, akkor a redukált
    (egydimenziós) Schrodinger-egyenlet tagjai a következőképpen skálázódnak:

     – Radiális kinetikus energia: −a(ℏ2 /2m)k(k + 1)rk−2 .
     – Centrifugális potenciál: a(ℏ2 /2m)l(l + 1)rk−2 .
     – Potenciális energia: aV (r)rk .
     – Jobb oldal: aErk .

   Ha feltesszük, hogy a potenciál az origóban reguláris, és legfeljebb 1/r-nél gyorsabban divergál,
   akkor az utolsó két tag elhanyagolható. Ahhoz, hogy az egyenlet fennmaradjon, az első két tagnak
   ki kell oltania egymást, tehát
                             k(k + 1) = l(l + 1), k = l or k = −l − 1.
179 7. Szögimpulzus

    A második megoldás l ≥ 1 esetén nem normálható, ezért elhagyjuk. l = 0 esetén R(r) ∝ 1/r-t ad,
    ami a deltafüggvény-potenciál megoldása; ezt regularitási okokból kizártuk. (Az ilyen megoldás
    azonban nagyon rövid hatótávolságú potenciálokkal kapcsolatos feladatokban releváns lehet.) Ezért
    az első megoldás a fizikai:

                                           R(r) ∼ rl kis r esetén,

    és így általában f (0) = 0.

Most a centrális erőtérbeli mozgás néhány fontos példáját vizsgáljuk.
