---
id: kevin-zhou-notes-phy-ex094
source: kevin-zhou-notes
native_id: "phy Example 094"
origin: "Kevin Zhou personal physics notes"
language: hu
translated: true
links_en: kevin-zhou-notes-phy-ex094
topic: [kvantumfizika]
subtopic: [szórás, fotoelektromos-hatás, kvantumdinamika]
math_tools: [perturbációelmélet, Fourier-transzformáció, differenciálegyenletek]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "13653-13882"
archive_layer: reference_notes
source_role: explanatory_example
---
Példa. A Yukawa-potenciálon történő szórást vizsgáljuk:
                                          e−κr                  2A       1
                              U (r) = A        ,    U
                                                    e (q) =
                                           r                  (2π)1/2 κ2 + q 2
amely a magfizikában jelenik meg, mivel a Klein–Gordon-egyenlet Green-függvénye.
Szórási formulánkat alkalmazva q = k − ki , ezért q 2 = 4k 2 sin2 (θ/2), és így
                                 dσ   4A2 m2           1
                                    =                               .
                                 dΩ     ℏ4 (4k 2 sin2 (θ/2) + κ2 )2
Különösen Coulomb-szórás esetén κ → 0 és A = Z1 Z2 e2 , amiből
                                     dσ  Z 2 Z 2 e4 m2      1
                                        = 1 24 4          4      .
                                     dΩ     4ℏ k       sin (θ/2)
adódik. Ez a Rutherford-hatáskeresztmetszet, a klasszikus, nemrelativisztikus Coulomb-szórás egzakt eredménye.
Megkülönböztethető részecskék esetén a nemrelativisztikus kvantummechanikában is egzakt eredmény, jóllehet ezt
nem tudhattuk volna, hiszen csak egy perturbációs sor első tagját számítottuk ki.
    A Coulomb-potenciál szórási amplitúdója azonban fázistényezők miatt hibásnak bizonyul, mert a Coulomb-potenciál
nem cseng le elég gyorsan. Ez megkülönböztethető részecskéknél nem számít, azonos részecskék esetén viszont hibássá
teszi az eredményt, mivel a különböző szórási amplitúdókat a fázisokat érintetlenül hagyva kell összeadnunk. Két
elektron helyes eredményét Mott-hatáskeresztmetszetnek nevezik.

11.3    Atomok terekben
Kezdetként a fotoelektromos effektust vizsgáljuk részletes példaként.

  • Egyetlen elektronos, |g⟩ alapállapotú, Eg energiájú atomra ℏω0 energiájú és p0 = ℏk0 impulzusú fotonok
    esnek, és kiszámítjuk annak rátáját, amellyel az elektron a |k⟩ síkhullám-végállapotba kilökődik.
  • Energiamegmaradás miatt ℏω0 > |Eg | szükséges, és ezenfelül feltesszük, hogy
                                                   ℏω0 ≫ |Eg |.
    Erre azért van szükség, mert az atommag Coulomb-mezeje hosszú hatótávolságú; ezzel a feltevéssel elhanyagolhatjuk
    a mezőt, és a kilökött elektront közelítőleg szabadnak tekinthetjük.
  • Azt is megköveteljük, hogy az elektron nemrelativisztikus legyen, végső energiája pedig
                                            E = ℏω0 + Eg ≪ mc2 .
    Hidrogén esetén ezek a feltételek 100 eV ≲ ℏω0 ≲ 100 keV tartományt jelentenek, amely magában foglalja a távoli
    ultraibolya- és a röntgentartományt.
  • A fényhullámot klasszikusan modellezzük, a potenciálok
                                    ϕ = 0,     A(x, t) = A0 ϵei(k0 ·x−ωt) .
    választásával. Ez a síkhullámok nemrelativisztikus kezelésének szokásos módja. A transzverzalitási feltétel
    ϵ·k0 = 0 megmutatja, hogy a vektorpotenciál Coulomb-mértékben van, ∇·A = 0, ezért operátorként p · A = A · p.
    (A kvantumszinten k0 nem operátor, x és p viszont igen.)
255 11. Időfüggő perturbációelmélet

 • A szokásos p → p + eA/c helyettesítést használjuk, amiből a perturbáló Hamilton-operátor
                                                       e
                                               H1 =       p · A
                                                       mc
   adódik. Mivel elsőrendben dolgozunk, az A2 tagot elhanyagoljuk.

 • Ez konkrétan szinuszos alakú, ahol
                                                   eA0
                                           K=          (ϵ · p)eik0 ·x .
                                                   mc
   Ezért az átmeneti ráta Fermi aranyszabálya szerint
                      dw     2π X                                         E − ℏω0 − Eg
                         ∆Ω = 2   |⟨k|K|g⟩|2 ∆t (ω),                 ω=                ,
                      dΩ     ℏ                                                 ℏ
                                     k∈cone

   ahol a végállapotok összegét a ∆Ω térszögű kúpon belül vesszük.

 • Ezután a dw/dΩ mennyiségről a dσ/dΩ hatáskeresztmetszetre térünk át a
                                                  dw         dσ
                                                     = ni vi    
                                                  dΩ         dΩ
   összefüggéssel. A sebesség egyszerűen vi = c, a részecskesűrűség pedig úgy kapható meg, ha kétféleképpen
   számítjuk ki az energiát:

                                                          E2 + B2  ω 2 A2
                                   u = ni ℏω0 ,     u=            = 0 20
                                                            8π      2πc
   amiből
                                                          k0 A20
                                                   ni =          .
                                                          2πℏc
 • Ezután kiszámítjuk a mátrixelemet. Azt kapjuk, hogy

                                 ⟨k|(ϵ · p)eik0 ·x |g⟩ = ℏ(ϵ · k)⟨k|eik0 ·x |g⟩.

   A fennmaradó tényező ψeg (q)-val arányos, ahol q = k − k0 , a korábban látott logika szerint. Megjegyezzük, hogy
   tipikus optikai alkalmazásokban, ahol k0 a látható tartományba esik, ezért eik0 ·x lassan változik, inkább az
   exponenciálist fejtjük sorba, ami multipólus-kifejtéshez vezet. Ezt részletesebben az Optika jegyzeteiben írjuk le.

 • Mindent összevetve, ∆t (ω) → δ(ω) határátmenetet véve és egyszerűsítve

                                   dσ        e2 kf
                                      = (2π)2 2 (ϵ · kf )2 |ψeg (q)|2
                                   dΩ        mc k0
   adódik, ahol a végső impulzus kf nagyságát az energiamegmaradás rögzíti. Ezután |g⟩ explicit alakjával tovább
   haladhatunk; ekkor látnánk, hogy a keményebb, nagyobb energiájú röntgensugarak mélyebbre hatolnak, és a nagyobb
   atomok hatékonyabban állítják meg őket.

 • Miért nem marad meg itt az impulzus, ha az energia megmarad? Az impulzust az atommag nyeli el; a potenciált statikusnak
   véve hallgatólagosan végtelenül nehéznek tételeztük fel. Az atommag megfelelő kezelése lehetővé tenné a visszalökődés
   kiszámítását.
256 11. Időfüggő perturbációelmélet

 • Atommag jelenléte nélkül a γ + e → e reakció tiltott lenne. Ugyanez a hatás figyelhető meg a fékezési sugárzásnál,
   e → e + γ, amely csak akkor mehet végbe, ha a közelben anyag van az impulzus elnyelésére. (Megjegyzés: elszigetelt
   atommagok gamma-bomlása megengedett, ahogyan az elszigetelt atomok fotonkibocsátása is. Ennek oka, hogy a kezdeti
   és végső atommagoknak, illetve atomoknak különböző nyugalmi tömegük van.)

 • Figyeljük meg, hogy ebben a levezetésben az elektromágneses teret teljesen klasszikusan kezeltük. A szokásos tanítással
   ellentétben a fotoelektromos effektus nem közvetlen bizonyíték a fotonokra: az anyag önmagában vett kvantálása elegendő
   ahhoz, hogy a mezővel való energiacsere diszkrétté váljon, még akkor is, ha a mezőt klasszikusan kezeljük! A fotoelektromos
   effektusnak ettől függetlenül fontos történelmi szerepe volt a kvantummechanika kialakulásában.

 • Természetesen ezt teljes egészében a kvantummechanikán belül is kezelhettük volna. Kvantáljuk az elektromágneses teret,
   és koherens állapotba helyezzük. Az atom és a tér csatolása továbbra is H1 ∝ p · A, de ez a perturbáció most időfüggetlen.
   Az érvelés még mindig ugyanaz, így az időfüggő perturbációelmélet eredményei alkalmazhatók, és ugyanazt az eredményt adják.
   Általában a perturbációk időfüggése csak a „rendszeren kívüli” objektumoktól származik, amelyek dinamikáját nem modellezzük
   kvantummechanikailag.

Most néhány megjegyzést teszünk az elektromágneses tér kezeléséről.

 • Az atomfizika tanulmányozásakor teljesen elhanyagoltuk az elektromágneses tér dinamikáját, és egyszerűen pillanatnyi
   Coulomb-vonzást tételeztünk fel a töltések között. Ez azonban még klasszikusan sem helyes: figyelembe kell venni a
   mágneses tereket, a késleltetést és a sugárzást.

 • Kis sebességek és elhanyagolható késleltetési hatások esetén a mágneses terek a Lagrange-függvényhez adott sebességfüggő
   tagokkal vehetők figyelembe; ez vezet a Darwin-féle Lagrange-függvényhez. Ezt itt nem vezetjük le, de a spin–pálya-csatolás
   nagyon is ebben a szellemben jelent meg.

 • A késleltetés és a sugárzás figyelembevételéhez magának a térnek a dinamikáját is vizsgálnunk kell. Többelektronos atomokban
   a késleltetési hatások a finomszerkezettel azonos rendűek. A sugárzás szintén fontos, mivel szerepet játszik minden olyan
   esetben, amikor egy atom foton spontán kibocsátásával bomlik, ezt azonban eddig implicit módon kezeltük.

 • Tegyük fel most, hogy a tér teljes dinamikáját is figyelembe vesszük. Klasszikusan az elektromágneses feladatoknak két
   „könnyű” típusa van: amikor a mező adott, illetve amikor a töltések és áramok adottak. Azok az esetek, amelyekben mindkettőt
   meg kell oldani, mert kölcsönösen hatnak egymásra, nagyon nehezek.

 • A sugárzás félklasszikus elméletében a töltéseket kvantummechanikailag kezeljük, a teret viszont rögzített, klasszikus
   háttérnek tekintjük, és elhanyagoljuk a töltések visszahatását. Ahogy fent láttuk, ezzel a módszerrel kiszámítható a
   sugárzás abszorpciójának rátája.

 • A spontán emisszió rátájának kiszámítása nehezebb, mivel a klasszikus háttér ebben az esetben egyszerűen nulla, de
   közvetve, termodinamikával és az Einstein-együtthatók segítségével elvégezhető. (Kvantumtérelméletben a spontán
   emisszió rátája közvetlenül kiszámítható, vagy heurisztikusan „vákuumfluktuációk” okozta stimulált emisszióként írható le,
   azaz a mező alapállapotbeli maradék diszperziójaként.)
257 11. Időfüggő perturbációelmélet

 • A visszahatás bármilyen beépítési kísérlete, miközben a mezőt klasszikusan tartjuk meg, végső soron ellentmondásos.
   Például egy klasszikus mező tökéletesen megmérhető lenne, ami sértené a bizonytalansági relációt.

 • A félklasszikus elmélet az energiamegmaradás megsértéséhez is vezet. Ha például egy atom 50% valószínűséggel ℏω-val
   csökkenti az energiáját, akkor a klasszikus mező energiájának ℏω/2-nek kell lennie az energia várható értékének
   megőrzéséhez. A lényeg azonban az, hogy az energia csak ℏω egész számú többszöröseinek formájában kerül át a mezőbe.
   A mező energiájának bármely választása sérti az energiamegmaradást; a probléma alapvető oka, hogy a kvantumrendszereknek
   lehet határozatlan energiájuk, a klasszikus rendszereknek viszont nem.

 • Ugyanezek a problémák jelentkeznek a gravitáció félklasszikus elméleteiben is. Ehelyett a helyes leírásnak magának az
   elektromágneses térnek a kvantálását kell tartalmaznia, ahogyan az a Kvantumtérelmélet jegyzeteiben történik. Néhány olyan
   példáért, ahol atomfizikai környezetben szükség van erre a leírásra, lásd A foton fogalma — újragondolva című anyagot.
   Az atomok és a kvantált fény kölcsönhatásának részletesebb tárgyalását az Optika jegyzetei adják.

11.4   Kvantumdinamika
Ebben a szakaszban az időfejlődés néhány hasznos példáját tekintjük át, amelyek az atom-, molekula- és optikai fizikában
jelennek meg. További példák az Optika jegyzeteiben találhatók.

 • Általában bármely unitér operátorral definiálhatunk alternatív képet:

                          |ψS (t)⟩ = UT (t)|ψT (t)⟩,   AT (t) = UT† (t)AS (t)UT (t).

    Ha kizárólag az időfejlődésre összpontosítunk, akkor |ψT (t)⟩ a Schrödinger-egyenlet szerint fejlődik, a Hamilton-operátor
    pedig
                            HT (t) = UT† (t)H(t)UT (t) − iℏUT† (t)(∂t UT (t)).
    Ez korábbi képeinket speciális esetekként tartalmazza. Ha például UT (t)-t egzakt időfejlődési operátornak választjuk,
    akkor HT (t) = 0, és visszakapjuk a Heisenberg-képet. Ha pedig H(t) = H0 + V (t) alakú, akkor UT (t) = e−iH0 t/ℏ az
    interakciós képet adja vissza.

 • Példaként tekintsük a gerjesztett harmonikus oszcillátort:

                                        p2  1
                                  H=       + mω02 x2 + 2Fω cos(ωd t)x.
                                        2m 2
    Ez egyszerűen felírható keltő- és annihilációs operátorokkal:
                                                                           r
                             †                †    iωd t   −iωd t              ℏ
                   H = ℏω0 a a + xzp Fω (a + a )(e       +e       ), xzp =        .
                                                                             2mω0

 • Tegyük fel most, hogy a gerjesztés közel rezonáns, |ωd − ω0 | ≪ ω0 . Ekkor tudjuk, hogy az interakciós képben a négy
   gerjesztési tag közül kettő lassan fejlődik, a másik kettő pedig gyorsan oszcillál. A forgóhullám-közelítéssel elhagyjuk
   az utóbbiakat, és

                                H = ℏω0 a† a + xzp Fω (eiωd t a + e−iωd t a† )

258 11. Időfüggő perturbációelmélet

  • Ha interakciós képre térnénk, csak lassan változó tagokat tartalmazó Hamilton-operátort kapnánk. Gyakran azonban
    kényelmesebb egyáltalán időfüggést nem tartalmazó Hamilton-operátorral dolgozni. Ezt úgy érhetjük el, hogy a „gerjesztés
    vonatkoztatási rendszerébe” lépünk, és UT (t) = e−iωd a† t-t választjuk. Ez még elég egyszerű ahhoz, hogy könnyedén
    visszatérhessünk a Schrödinger-képbeli állapotokhoz, viszont ekkor

                                  HT = ℏ(ω0 − ωd )a† a + xzp Fω (a† + a).

    Ebben az alakban világos, hogy az egyetlen rezonáns frekvencia ωd = ω0 . Ha a perturbáció messze van a rezonanciától,
    akkor |n⟩ állapotból indulva csak annyi történik, hogy a |n ± 1⟩ állapotok kis együtthatókat kapnak, amelyek gyorsan
    oszcillálnak, amplitúdójuk xzp Fω /ℏ(ω0 − ωd ).

  • Másik példaként tekintsünk parametrikusan gerjesztett harmonikus oszcillátort:

                                p2  1
                           H=      + mω02 (1 + ϵ(t))x2 ,      ϵ(t) = ϵ0 cos(2ωd t).
                                2m 2
    Ha ωd ≈ ω0 , és ismét a forgóhullám-közelítést alkalmazzuk, akkor
                                                    ϵ0 2iωd t 2             2
                               H = ℏω0 a† a + ℏω0     (e     a + e−2iωd t a† ).
                                                    8
    Ez az előző példával azonos transzformációval időfüggetlenné tehető:
                                                               ϵ0 2     2
                                 HT = ℏ(ω0 − ωd )a† a + ℏω0      (a + a† ).
                                                               8
