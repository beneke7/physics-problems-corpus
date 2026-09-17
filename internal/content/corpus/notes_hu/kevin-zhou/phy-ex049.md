---
id: kevin-zhou-notes-phy-ex049
source: kevin-zhou-notes
native_id: "phy Example 049"
origin: "Kevin Zhou personal physics notes"
language: hu
translated: true
links_en: kevin-zhou-notes-phy-ex049
topic: [folytonos-közegek-mechanikája]
subtopic: [felhajtóerő, felületi-feszültség, szilárd-testek nyugalmi mechanikája, alakváltozás]
math_tools: [tenzorszámítás, differenciálgeometria, Hooke-törvény]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "5178-5711"
archive_layer: reference_notes
source_role: explanatory_example
---
Példa. Felhajtóerő okozta stabilitás. Tekintsünk egy ρb sűrűségű testet g homogén gravitációs térben, ρf sűrűségű folyadékban. A gravitáció és a felhajtóerő nyomatéka:
                                Z                       I
                           MG =    x × ρb g dV, MB =      x × (−p dS).
                                   V                           S
97 4. Folytonos közegek mechanikája


Ha a testet folyadékkal helyettesítenénk, a folyadék egyensúlyban lenne. Ez azt jelenti, hogy MB ellentettje annak, ami MG lenne folyadék esetén:
                                               Z
                                      MB = −      x × ρf g dV.
                                                  V

Feltesszük, hogy a test mindig felhajtóerő-egyensúlyban van, vagyis a test saját súlyával azonos súlyú folyadékot szorít ki, ezért a felhajtóerő és a gravitációs erő kiegyenlíti egymást. A nyomatéki egyensúly szempontjából a gravitációs és a felhajtóerő tekinthető úgy, mintha rendre a tömegközéppontban (CM), illetve a felhajtóerő-középpontban (CB) hatna:
                                       Z                     Z
                                    1                     1
                              xG =        xρb dV, xB =          xρf dV.
                                    M V                   M V

A nyomatékok csak akkor egyenlíthetik ki egymást, ha a CM és a CB függőleges egyenesen fekszik. Teljesen bemerített test esetén a stabil egyensúly akkor áll fenn, ha a CM a CB alatt van. Részben vízbe merülő testeknél, például vitorlásoknál vagy kacsáknál, nyilvánvaló, hogy a CM rendszerint a CB fölött van; a CB a vízvonal alatti testrész súlypontja. Ennek ellenére az egyensúly stabil marad.
    Ennek megértéséhez az egyszerűség kedvéért tekintsünk egy hosszirányban szimmetrikus hajót, és vizsgáljunk egy x tengely körüli infinitezimális dθ elfordulást. Legyen A a vízvonal területe, vagyis a hajó és a z = 0 vízvonal metszete. A felhajtóerő-egyensúly fenntartásához a forgástengelynek A súlypontján kell áthaladnia, mert így a hajó bemerült térfogata dθ első rendjében változatlan marad. Ezt a pontot gördülési középpontnak nevezzük, és origónak választjuk. Az elfordulás után a tömegközéppont vízszintes elmozdulása

                                            dyG = −zG dθ.

A felhajtóerő-középpont vízszintes mozgásának azonban két összetevője van:
                                                        Z
                                              I
                            dyB = − zB +          dθ, I =     y 2 dA
                                             V             A

Az első tag a hajó kezdetben víz alatti részének közvetlen elfordulásából származik; a második azért jelenik meg, mert a bemerült rész alakja az elforduláskor megváltozik. Ezért a felhajtóerő-középpont vízszintes elmozdulása megegyezik azzal, mintha valójában egy képzeletbeli, magasabban fekvő pontban helyezkedne el; ezt metacentrumnak nevezzük:
                                                         I
                                            zM = zB +      .
                                                         V
Ahhoz, hogy a felhajtóerő visszatérítő nyomatékot adjon, |dyB | > |dyG | szükséges, vagyis a hajó akkor stabil, ha a CM a metacentrum alatt van. (A metacentrum magassága a forgástengelytől függ. Mivel bármely tengely körüli elfordulással szembeni stabilitást szeretnénk, a metacentrumot ahhoz a tengelyhez definiáljuk, amelyre I a legkisebb. Mivel a hajók hosszúak és keskenyek, ez tipikusan a hosszirányú tengely.)

Megjegyzés. Általános szögek esetén a stabilitást a „visszatérítő karral” jellemezzük, amely egyszerűen |yG (θ)−yB (θ)|. A fenti elemzés csak kis szögekre érvényes, amikor a visszatérítő kar θ-val lineáris. Amikor a visszatérítő kar nullához tart, a hajó instabillá válik és felborul.

Kisebb folyadékrészek esetén a felületi feszültség fontos.
98 4. Folytonos közegek mechanikája


 • A felületi feszültség két anyag közötti határfelület létrehozásának energiaköltségéből származik:

                                                dU = α dA.

   Ha egy felületet egy görbe két részre oszt, akkor a felület két része közötti differenciális erő
                                          dF = α ds × n̂
   ahol n̂ a felület normálvektora.

 • Az α mennyiség függ a szomszédos részecskék egymással, illetve a két anyag részecskéivel való kölcsönhatási energiájától. Mivel a határfelület mikroszkopikus vastagságú, makroszkopikus görbülete nem befolyásolja α-t. Egyszerű anyagok esetén nem függ attól, hogy a felületet mennyire nyújtottuk már meg, bár a szappanhártyák figyelemre méltó kivételt jelentenek.

 • Folyadék–gáz határfelületre általában α > 0, mert a folyadék részecskéi vonzzák egymást (különben nem maradna folyadék), a gáz azonban túl ritka ahhoz, hogy számottevő kölcsönhatást okozzon. Folyadék–folyadék határfelületre α pozitív vagy negatív lehet; ha negatív, a folyadékok gyorsan összekeverednek. Folyadék–szilárd határfelületre α ismét lehet pozitív vagy negatív, és ez határozza meg a folyadék felületnedvesítési hajlamát.

 • Fent azt mondtuk, hogy az erő „a felület két része között” hat, de ez pontatlan. Folyadék–gáz és folyadék–szilárd határfelületeknél az erő valójában a felületen lévő folyadék két része között hat, mivel a gáz ritka, a szilárd test pedig nem mozoghat. (javítandó)

 • Egy ρ sűrűségű, g gravitációs térben lévő folyadék esetén a felületi feszültség a kapilláris hossznál kisebb léptékeken dominál:
                                                    r
                                                    α
                                             L=
                                                    ρg
   dimenzióanalízis alapján. Szobahőmérsékletű víz esetén ez néhány milliméter. Két folyadék közötti határfelületnél általánosabban a nevezőben a két sűrűség különbségének kell szerepelnie, mivel ez határozza meg a gravitációs potenciális energia változását.

 • Az origó közelében egy általános, n̂ = ẑ normálvektorú felület paraméterezhető:
                                            1     1
                                         z = ax2 + by 2 + cxy.
                                            2     2

   Polárkoordinátákban a görbületi sugár ϕ̂ irányban:

         1    ∂2z                                             a+b a−b
             = 2     = a cos2 ϕ + b sin2 ϕ + 2c sin ϕ cos ϕ =    +    cos 2ϕ + c sin 2ϕ.
        R(ϕ)  ∂r r=0                                           2   2

   R(ϕ) minimum- és maximumértékeit két egymásra merőleges ϕ̂ irányban veszi fel; ezeket fő görbületi sugaraknak, R1 -nek és R2 -nek nevezzük. Például c = 0 esetén ezek egyszerűen a és b.

 • Egy kis téglalapra ható erők egyensúlyát vizsgálva megmutatható, hogy a nyomás ugrása egy felületen át:
                                                            
                                                  1     1
                                       ∆p = α        +       .
                                                  R1 R2
   A zárójelben szereplő mennyiséget a kétszeres közepes görbületnek is nevezik.
99 4. Folytonos közegek mechanikája


Megjegyzés. A levegőben lévő folyadék esete (tiszta kohézió) viszonylag egyszerű, de bonyolultabbá válik a levegő, folyadék és szilárd test határfelületeinek jelenlétében. Sok bevezető tankönyv hibás levezetést ad olyan alapvető eredményekre, mint a Jurin-törvény és a Young-törvény. A szőnyeg alá söpört finomságokra példa a Derivation of Jurin’s law revisited című tanulmány.

4.2     Szilárd testek nyugalmi mechanikája
Ezután a szilárd testek nyugalmi mechanikáját vizsgáljuk, ami valamivel több matematikát igényel.

 • Nyírófeszültség hatására a folyadékok folynak, a szilárd testek pedig deformálódnak, ezért a szilárd testek nyugalmi egyensúlyban is képesek nyírófeszültséget hordozni. A két szilárd test határán fellépő nyírófeszültség ismert példája a tapadási súrlódás, de nyírófeszültség a szilárd test belsejében is fellép.

 • Ezért általános feszültségtenzorral dolgozunk, amely egy infinitezimális felületelemre így hat:
                                                   dF = σ · dS.

      Egy kis zárt térfogatra ható erők vizsgálatával a teljes erő:
                              Z          I           Z
                          F=      f dV +    σ · dS =    f ∗ dV, f ∗ = f + ∇ · σT
                                  V            S          V

      ahol f a külső erősűrűség, f ∗ a teljes erősűrűség, az utolsó tag pedig ∇j σij .

 • σ diagonális elemei az egyes irányok nyomásának ellentettjei, míg a nem diagonális elemek nyírófeszültségeket jelentenek. Általában ezért nincs egyértelmű mód „a” nyomás definiálására, de jó lehetőség a „mechanikai nyomás”:
                                                         1
                                                    p = − σii
                                                         3
      amely skalár, és izotróp feszültségtenzor esetén visszaadja a nyomást. Úgy értelmezhető, mint a feszültség normális komponensének negatívja, minden lehetséges felületirányra átlagolva; ez abból következik, hogy ⟨ni nj ⟩ = δij /3 a n̂ normálvektorokra.

 • A húzott szilárd test a folyáshatár felett képlékenyen deformálódni kezd, és teljesen tönkremegy, amikor a feszültség eléri a szakítószilárdságot. Tipikus fémek esetén a szakítószilárdság néhány száz MPa, a modern kompozit szénszálaké néhány GPa, a szénnanocsöveké pedig körülbelül 50 GPa.

 • Mechanikai egyensúlyban f ∗ = 0, ezt Cauchy egyensúlyi egyenletének nevezzük. Ez csatolt parciális differenciálegyenletek rendszere, amelyet az anyag feszültségét más tulajdonságaival kapcsolatba hozó konstitutív relációkkal kell kiegészíteni.

 • A testre ható teljes nyomaték:
                   Z              I                Z            Z
                                                          ∗
               M=     x × f dV +    x × (σ · dS) =   x × f dV −   ϵijk êi σjk dV
                           V               S                  V                V

      amint az indexjelölésben a legkényelmesebben látható. Mivel egyensúlyban f ∗ eltűnik, ezt a számítást rendszerint úgy értelmezik, hogy a feszültségtenzor szimmetrikus, σT = σ.
100 4. Folytonos közegek mechanikája


  • Ez azonban túlzott egyszerűsítés, mert figyelmen kívül hagytuk a külső nyomatékok lehetőségét. Tekintsünk például egy elektromosan polarizált anyagot. Ha az anyagot homogén elektromos térbe helyezzük, nincs erősűrűség, de van nyomatéksűrűség.

  • A továbbiak attól függnek, hogy a szilárd test képes-e aszimmetrikus feszültséget hordozni. Ha nem, arra jutottunk, hogy addig nem lehet egyensúlyban, amíg a polarizáció be nem áll a külső tér irányába; ha igen, akkor egy belső aszimmetrikus feszültség jelenik meg a nyomaték kiegyenlítésére. Ez folyadékkristályokban történik, mivel azoknak nagy hatótávolságú orientációs rendezettségük van. Az egyszerűség kedvéért azonban ettől a ponttól szimmetrikusnak tekintjük a feszültségtenzort, mert ez a legtöbb anyagra igaz.

  • A szimmetrikus feszültségtenzorok diagonalizálhatók: a test minden pontjában létezik olyan főbázis, amelyben a feszültségtenzor diagonális.

  • Két test közötti felületen az erők egyensúlyát felírva:
                                    σ · n̂ folytonos a felületeken.
    Például vízszintes felület esetén σxz , σyz és σzz folytonos. Vegyük észre, hogy a mechanikai nyomás szakadásszerűen változhat; a nyomás folyadékok nyugalmi mechanikájában tapasztalt folytonossága (a felületi feszültség elhanyagolásával) csak azért állt fenn, mert a nyomás izotróp volt.

Megjegyzés. A feszültségtenzor definíciójában kisebb finomság rejlik. A folyadékmechanikához kapcsolódó alapvető definíció a fenti, vagyis a felületelemekre ható erőkkel adható meg. Mivel azonban az erő a lendület változási sebessége, σij definiálható a Pi lendület egységnyi j-területen átáramló sebességeként is. Tipikus folyadékoknál e két definíció egybeesik, de általában eltérnek, és a második alapvetőbb.
    Tekintsünk például egy tükröző dobozban lévő fotongázt. Itt a feszültségtenzor első definíciója kétértelművé válik: a fotonok klasszikusan nem kölcsönhatnak egymással, ezért egyáltalán nem tapasztalnak erőt. Feszültségtenzort továbbra is definiálhatunk úgy, hogy megvizsgáljuk, mekkora erőt tapasztalna egy fizikai, kicsi, sík test, ha a fotongáz belsejébe helyeznénk, de ez megváltoztatja az elrendezést. A definíció többé nem magának a folyadéknak a belső tulajdonsága, sőt a belsejébe helyezett test fajtájától is függ; például egy tükröző elemre kapott eredmény kétszerese egy elnyelő elemre kapott eredménynek. A második definíció ezzel szemben tökéletesen működik, ezért relativisztikus összefüggésekben szinte egyetemesen ezt használják.
    A definíció megválasztása a levezetett elméletet is befolyásolja. Tekintsük például azt az állítást, hogy külső erők és nyomatékok nélküli folyadékban a feszültségtenzor szimmetrikus. Ezt fent, a nyugalmi mechanika esetében bizonyítottuk, de közönséges folyadékoknál, ahol a feszültségtenzort az első módon definiáljuk, a folyadékdinamikára is érvényes egyszerű bizonyítás adható. A feszültségtenzor antiszimmetrikus része egy ∆L méretű infinitezimális folyadékelemre (∆L)3 szerint skálázódó nyomatékot ad. Az elem tehetetlenségi nyomatéka (∆L)5 szerint skálázódik, ami ∆L → 0 esetén fizikailag értelmetlenül végtelen szöggyorsulást jelent; ezért a feszültségtenzornak szimmetrikusnak kell lennie.
    Relativisztikus összefüggésben, ahol a második definíciót használjuk, a feszültség-(energia)tenzort Noether-tétellel definiálhatjuk, ahogy azt a Kvantumtérelmélet jegyzeteiben tárgyaljuk. Kiderül, hogy még izolált rendszerben is lehet a feszültségtenzor antiszimmetrikus! Az antiszimmetrikus rész fizikai értelmezése az, hogy pályamenti perdületet visz át spinbe, ami megkerüli a fenti érvet, mert egy térfogatelem által hordozható spin mennyisége (∆L)3 szerint skálázódik. (Ez a finomság közönséges folyadékoknál nem jelentkezik, mert azok nem spinpolarizáltak.) A feszültség-energiatenzor azonban átdefiniálható úgy, hogy a spin által hordozott kötött lendületet is tartalmazza; ekkor ismét szimmetrikus lesz.
101 4. Folytonos közegek mechanikája


Ezután a szilárd testek deformációját alakváltozással írjuk le.

 • A deformációk nehézsége, hogy azok nem következtethetők ki magából a szilárd test aktuális állapotából; azt is tudnunk kell, hogyan kapcsolódik az eredeti állapothoz. Tegyük fel, hogy a test úgy deformálódik, hogy az X helyen lévő anyagi részecske x-be kerül. Az elmozdulásmező:
                                                 u = x − X.

    Euler-reprezentációban mindent x függvényének tekintünk, Lagrange-reprezentációban pedig X függvényének. Az Euler-reprezentációt fogjuk használni, ezért minden derivált x szerinti lesz.

 • Itt nincs analógia az aktív/passzív transzformáció megkülönböztetésére, mert egy általános deformáció passzív megjelenítésének nincs természetes módja.

 • Nagy elmozdulások esetén differenciálgeometriai eszközökre van szükségünk, ezért többnyire a kis elmozdulások esetére szorítkozunk; ekkor nincs alapvető különbség az Euler- és a Lagrange-reprezentáció között.

 • Az elmozdulások tartalmazhatják a szilárd test merev transzformációit, például eltolásokat és forgatásokat is, amelyek nem számítanak deformációnak. Ezért célszerű kivonni u azon részét, amely csak a deformációra vonatkozik.

 • Tekintsünk egy infinitezimális „tűt”, amely eredetileg X-ből X + a0 -ba mutatott, most pedig x-ből x + a-ba mutat. Az a meghatározásához vegyük észre, hogy
                            a0 = X(x + a) − X(x) = a − u(x + a) − u(x).
    Ezért a első rendű kifejtésével
                                 δa = a − a0 = (a · ∇)u(x) = a · (∇u).
    A (∇u)ij = ∇i uj tenzor tartalmazza az úgynevezett elmozdulásgradienseket.

 • Az elmozdulásmező lassan változik, ha az elmozdulásgradiensek kicsik, ami azt jelenti, hogy a hosszúságok relatív változása kicsi. Szinte kizárólag ebben a határban dolgozunk.

 • Hasonlóképpen megváltoznak az ugyanazon pontból kiinduló két tű skaláris szorzatai:
                                                       X
                          δ(a · b) = a · b − a0 · b0 =   (∇i uj + ∇j ui )ai bj .
                                                         ij
    Ezt a Cauchy-féle (infinitezimális) alakváltozási tenzorral írhatjuk fel:
                                                      1
                        δ(a · b) = 2a · u · b,   uij = (∇i uj + ∇j ui ) = ∇(i uj) .
                                                      2
    Indexmentes jelöléssel:
                                             1
                                          u = (∇u + (∇u)T )
                                             2
    ahol a vonal a jelölési félreértés elkerülésére szolgál.
102 4. Folytonos közegek mechanikája


 • A ∇u antiszimmetrikus része infinitezimális forgatásokat tartalmaz, amelyek nem járulnak hozzá u-hoz. Mivel u szimmetrikus, minden pontban diagonalizálható; a sajátvektorok a fő alakváltozási tengelyek.

 • Ez egybeesik a differenciálgeometriából származó általánosabb eredménnyel. Az u tenzor az x és X koordináták metrikái közötti különbséget méri, ahogy az u vektormező mentén X-ből x-be haladunk. Ezért u-nak a metrika u szerinti Lie-deriváltjának kell lennie, és valóban az.

 • Az uij diagonális elemei a megfelelő tengely irányú hossz relatív változását írják le, a nem diagonális elemek pedig a kezdetben merőleges koordinátatengelyek közötti szög változását. Pontosabban, ha a és b kezdetben merőleges, akkor
                                                                        δ|a|
                                  δϕ = −2uab ≡ −2â · u · b̂,                = uaa .
                                                                        |a|
    Továbbá
                                             1
                                       δa = (∇ × u) × a + u · a
                                             2
    ami elválasztja az infinitezimális forgatások és deformációk hatását.

 • Egyszerű deriválással a Cauchy-féle alakváltozási tenzor kielégíti
                                ∇i ∇j ukl + ∇k ∇l uij = ∇i ∇l ukj + ∇k ∇j uil .
    Megfordítva megmutatható, hogy minden ezt teljesítő szimmetrikus tenzor valamely elmozdulásmezőhöz tartozó alakváltozási tenzor. Ez a Poincaré-lemma szimmetrikus változata.

 • A vektoranalízishez ki kell számítanunk az infinitezimális vonal-, felület- és térfogatelemek változását. A vonalelemeket már első példánkként kezeltük; vegyük észre, hogy egy F vektormező F · ds vonalintegráljában a vektormezőt, a vonalelemet és a végpontokat is át kell transzformálni.

 • A térfogatelemek kezeléséhez vegyük észre, hogy három infinitezimális vektorból felépíthetők:
                                                 dV = ϵijk ai bj ck .
    Az infinitezimális változásokat indexjelölésben kifejtve:
                    δ(dV ) = ϵijk ((∇l ui )(al bj ck ) + (∇l uj )(ai bl ck ) + (∇l uk )(ai bj cl )).
    Másrészt
                                               (∇l u[l )(ai bj ck] ) = 0
    mivel négy térbeli index antiszimmetrizálása nullát ad. Mivel az ϵijk már antiszimmetrizál i, j és k szerint, ez az azonosság a fenti három tagot egy negyedikkel kapcsolja össze, és
                                  δ(dV ) = ϵijk (∇l ul )(ai bj ck ) = (∇ · u) dV
    adódik, ami szemléletes. Alkalmazásként a térfogatok transzformációja:
                                                  δρ = −ρ ∇ · u.
103 4. Folytonos közegek mechanikája


  • Egy felületelemre dS = a × b és dV = c · dS írható. A fenti eredményt használva:
                       c · δ(dS) = δ(dV ) − δc · dS = (∇ · u)(c · dS) − c · ∇u · dS.
    Mivel c tetszőleges, következik, hogy
                                    δ(dS) = (∇ · u) dS − (∇u) · dS.

  • Tegyük fel például, hogy egy külső erő munkát végez a testen, és lassan deformálja. A test belső erői ellenében végzett munka:
                                               Z
                                      δW = −       f ∗ · δu dV.
                                                     V
    Az egyszerűség kedvéért feltesszük, hogy a test felülete nem mozog. Ekkor
                                        Z               Z
                               δW = −       f · δu dV +   σ : (∇δu) dV
                                           V                 V
    ahol parciálisan integráltunk, és A : B = Aij Bji .

  • Az első tag a távolsági erők ellenében végzett munkát jelenti, például tartalmazza a gravitációs potenciális energia változását. A második tag a test deformálásával a belső erők ellenében végzett munkát jelenti. Szimmetrikus feszültségtenzor esetén:
                                                  Z
                                       δWdeform =    σ : δu dV.
                                                         V
    Ennek egyszerű ellenőrzéseként vegyük észre, hogy izotróp feszültségtenzorra σij = −pδij :
                                           Z                     Z
                           δWdeform = −       p ∇ · (δu) dV = −      p δ(dV )
                                               V                   V
    ahogy vártuk.

Megjegyzés. Nagy deformációk esetén vektoranalízis helyett célszerűbb differenciálgeometriai fogalmakat használni. Az anyagi részecskék helyzete koordinátarendszert határoz meg, amelynek metrikája δij , amikor az anyag nincs deformálva. Az x → X leképezést diffeomorfizmusként tekintve ezt a metrikát előretoljuk:
                                                  ∂Xk ∂Xk
                                        gij (x) =         .
                                                  ∂xi ∂xj
Az alakváltozási tenzor általános definíciója a metrika változásával:
                                           gij = δij − 2uij .
Végül az X = x − u behelyettesítésével megkapjuk az úgynevezett Euler–Almansi-féle feszültségtenzort:
                                                                 
                                        1 ∂uj      ∂ui    ∂uk ∂uk
                              uij (x) =         +      −
                                        2 ∂xi      ∂xj    ∂xi ∂xj
amely egy kvadratikus taggal különbözik az infinitezimális kifejezéstől. Például az x = κX homogén skálázásra
                                              1
                                       uij = (1 − κ−1/2 )δij
                                              2
adódik, ami minden κ-ra értelmes, míg az infinitezimális kifejezés csak κ ≈ 1 esetén volt értelmes.
104 4. Folytonos közegek mechanikája


Megjegyzés. A Lagrange-reprezentáció. Ebben az esetben az X változóval dolgozunk. A Lagrange-féle elmozdulásmezőt úgy definiáljuk, hogy
                                         U(X) = u(x(X)).
Más szavakkal u(x) azt adja meg, hogy mennyivel mozdult el az x helyen most lévő anyagi részecske, U(X) pedig azt, hogy mennyivel mozdult el az az anyagi részecske, amely eredetileg X-ben volt. A környező euklideszi metrikából kiindulva az x-ből X-be való visszahúzással definiáljuk a metrikát:
                                                     ∂xk ∂xk
                                         Gij (X) =
                                                     ∂Xi ∂Xj
ahol Gij a Lagrange-féle deformációs tenzor. A Lagrange–Green-féle feszültségtenzort így definiáljuk:

                                             Gij = δij + 2Uij

ami azt jelenti, hogy
                                     1       ∂Uj   ∂Ui   ∂Uk ∂Uk
                               Uij =             +     +               .
                                     2       ∂Xi ∂Xj     ∂Xi ∂Xj
Infinitezimális deformációkra ez egybeesik a többi feszültségtenzorunkkal.
Megjegyzés. Numerikus számításokhoz az Euler- vagy a Lagrange-reprezentációt is diszkretizálhatjuk. Amint fent említettük, kis elmozdulások esetén a kettő lényegében ekvivalens. Általánosabban a Lagrange-reprezentációt valamivel könnyebb elképzelni, ezért a hagyományos egydimenziós hidrodinamikai kódok szinte mind Lagrange-félék. Egynél több dimenzióban a turbulencia hajlamos „összegubancolni” a Lagrange-reprezentáció számítási rácsát, ezért az Euler-reprezentáció a jobb választás, mivel az Euler-rács térben rögzített. Másrészt emiatt az anyag elhagyhatja a számítási tartományt.

Végül a feszültséget és az alakváltozást Hooke törvényével kapcsoljuk össze.

 • Elég kis deformációkra sok anyagban lineáris kapcsolat van a feszültség és az alakváltozás között. Izotróp anyagra a Young-modulust így definiáljuk:
                                                       σxx
                                                  E=       .
                                                       uxx
    Ezért egy L hosszúságú és A keresztmetszetű rúd rugóállandója
                                               F    σxx A   EA
                                         k=       =       =    .
                                               ∆x   uxx L    L
    A Young-modulusz nyomás dimenziójú, és fémeknél tipikus értéke körülbelül 100 GPa. Mivel az alakváltozásnak kicsinek kell lennie, Hooke törvénye csak E-nél sokkal kisebb feszültségekre érvényes. A folyáshatár például nagyjából ezerszer kisebb. Hooke törvénye a proporcionalitási határnál romlik el, amely rendszerint jóval a folyáshatár alatt van. A linearitástól való eltéréseket a „hiperrugalmasság” kezeli, amely hasznos a gumi leírására.

 • A közönséges anyagok nyújtáskor keresztirányban is összehúzódnak. Ha erőt alkalmazunk x irányban, akkor uxx és uyy is arányos lesz vele, ezért hányadosuk független tőle. A Poisson-számot definiáljuk:
                                                        uyy
                                                 ν=−        .
                                                        uxx
105 4. Folytonos közegek mechanikája


 • A feszültség és alakváltozás közötti legáltalánosabb lineáris kapcsolat:
                                              σij = Eijkl ukl
   ahol Eijkl a rugalmassági tenzor. Izotróp anyag esetén a legáltalánosabb lehetőség:
                                  Eijkl = λδij δkl + µ(δik δjl + δjk δil )
   ahol λ és µ a rugalmassági moduluszok, illetve Lamé-együtthatók, µ-t pedig nyírási modulusznak vagy merevségi modulusznak nevezzük. Explicit módon:
                                         σij = 2µuij + λδij ukk
   ezért csak µ járul hozzá a nyírófeszültségekhez.

 • Ezt a két paramétert E és ν meghatározza, és fordítva. Konkrétan az x irányú nyújtásnál a feszültség és alakváltozás egyetlen nem nulla komponense:
                                                  P                          νP
                              σxx = P,    uxx =     ,       uyy = uzz = −       .
                                                  E                          E
   Ezt a rugalmas moduluszok definíciójával összevetve:
                                         3λ + 2µ                    λ
                                   E=            µ,         ν=
                                          λ+µ                    2(λ + µ)
   vagy megfordítva:
                                       Eν                   E
                                λ=                , µ=            .
                                 (1 − 2ν)(1 + ν)         2(1 + ν)
   A Young-modulusz és a Poisson-szám közvetlenül mérhető, ezért táblázatokban megtalálhatók.

 • Vegyük észre, hogy a mechanikai nyomás:
                                                      
                                         1           2
                                   ∆p = − σii = − λ + µ uii .
                                         3           3
   Másrészt uii = −∆ρ/ρ, ezért a térfogati modulusz:
                                           2       E
                                      K =λ+ µ=           .
                                           3   3(1 − 2ν)
   Általában K, E, λ és µ azonos nagyságrendű.

 • Az alakváltozást a feszültség függvényében is megoldhatjuk:
                                              1+ν      ν
                                      uij =       σij − δij σkk .
                                               E       E
 • Általános esetben egy test deformálásához szükséges munka:
                                                Z
                                     δWdeform =    σij δuij dV.
                                                        V
   Mivel azonban σ u-tól függ, ez az integrál útfüggő lehet. Útfüggetlen, ha a keresztderiváltak egyenlők:
                                           ∂σij    ∂σkl
                                                 =
                                           ∂ukl    ∂uij
   ami annak a feltételnek tenzori megfelelője, hogy egy vektormező rotációja eltűnik.
106 4. Folytonos közegek mechanikája


  • Ha a feszültség lineárisan függ az alakváltozástól, akkor
                                               Eijkl = Eklij .
    Továbbá a rugalmassági tenzor első két és második két indexében szimmetrikus, mivel a feszültség- és alakváltozási tenzor szimmetrikus. Így e két indexpár mindegyikének 6 szabadsági foka van, és a két pár felcserélésére fennálló szimmetria összesen 21 szabadsági fokot ad. Ezek közül 3 redundáns, mert csak az anyag orientációját írják le.

  • Az anyag leírásához szükséges szabadsági fokok száma az anyag szimmetriafokától függ: köbös kristályokhoz 3, triklín kristályokhoz pedig mind a 18 szükséges.

  • Ha ez a szimmetriafeltétel teljesül, elképzelhetjük az u lineáris felépítését:
                                         1         1
                                      ε = σij uij = Eijkl uij ukl .
                                         2         2
    Ennek pozitív definitnek kell lennie ahhoz, hogy a szilárd test stabil legyen, ami pozitivitási feltételekhez vezet a rugalmassági tenzorra. Ezzel az is megmutatható, hogy az f ∗ = 0 egyensúlyi egyenlet megoldásai egyértelműek.

  • Izotróp anyagokra speciálisan
                                                       1
                                        ε = µ uij uij + λ(uii )2 .
                                                       2
    Megmutatható, hogy a pozitív definitás feltétele:
                                           µ > 0,   3λ + 2µ > 0.
    Ezek a nyírás, illetve az összenyomás elleni stabilitást biztosítják. Ezzel ekvivalens:
                                   K > 0,     E > 0,     −1 < ν < 1/2.
    A legtöbb anyagnál ν > 0, de egzotikus „auxetikus” anyagoknál ν negatív lehet.
