---
id: solution-document-eotvos-2024-s
source: eotvos
kind: official_solution_document
language: hu
solution_type: official
source_pdf: cache/phoxiv/eotvos/2024_S.pdf
extraction_method: pdftotext-layout
mapped_problems: [eotvos-2024-balloon-elastic, eotvos-2024-lens-system, eotvos-2024-rotating-tube]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/eotvos/2024_S.pdf."
---

Beszámoló a 2024. évi Eötvös-versenyről



    Az Eötvös Loránd Fizikai Társulat 2024. évi Eötvös-versenye október 11-én
délután 3 órai kezdettel tíz magyarországi helyszínen1 került megrendezésre. Ezért
külön köszönettel tartozunk mindazoknak, akik ebben szervezéssel, felügyelettel
a segítségünkre voltak. A versenyen a három feladat megoldására 300 perc áll
rendelkezésre, bármely írott vagy nyomtatott segédeszköz használható, de (nem
programozható) zsebszámológépen kívül minden elektronikus eszköz használata
tilos. Az Eötvös-versenyen azok vehetnek részt, akik vagy középiskolai tanulók, vagy
a verseny évében fejezték be középiskolai tanulmányaikat. Összesen 54 versenyző
adott be dolgozatot, 24 egyetemista és 30 középiskolás.
    Ismertetjük a feladatokat és azok megoldását.
                                              ❄

    1. Egy léggömb elasztikus viselkedése a fal rugalmas energiája segítségével jelle-
mezhető. Ha a jó közelítéssel mindvégig gömb alakú lufi mérete a feszítetlen méret
λ-szorosára változik, akkor a léggömb rugalmas energiája a 2λ2 + λ−4 − 3 kifejezés-
sel egyenes arányban növekszik egészen addig, míg végül λ ≈ 3 érték körül a lufi
kidurran.
   A kezdetben ernyedt állapotú léggömböt egy kompresszorhoz csatlakoztatott
T-alakú elosztó egyik kivezetésére kötjük, a másik kivezetésre pedig egy vékony
üvegcsőből készült vizes manométert rögzítünk az 1. ábrán látható módon. A víz
a cső 20 cm hosszú szakaszát foglalja el. A kompresszor elindítása után azt ta-
pasztaljuk, hogy a folyadékszintek az eredeti helyzetükhöz képest lassan 5 cm-rel
mozdulnak el, mialatt a léggömb átmérője 5%-kal növekszik. Mi fog történni ez-
után?



                                                     20 cm




                                           1. ábra
                                                                         (Vigh Máté)



   1 Részletek a verseny honlapján: http://eik.bme.hu/~vanko/fizika/eotvos.htm




Középiskolai Matematikai és Fizikai Lapok, 2025/1                                  41


    i                                                                                                                 i

        2025.1.4 – 21:12 – 42. oldal – 42. lap                                                  KöMaL, 2025. január
i                                                                                                                         i


                   Megoldás. A lufi rugalmas energiája egy alkalmas E0 konstans bevezetésével így
                írható:
                                            E = E0 2λ2 + λ−4 − 3 .
                Meggyőződhetünk róla, hogy nyújtatlan állapotban (azaz λ = 1 esetén) a rugalmas
                energia a várakozásnak megfelelően zérus, λ > 1 értékekre pedig E(λ) monoton nö-
                vekvő függvény. Vajon hogyan határozható meg ebből az összefüggésből a lufiban
                uralkodó p túlnyomás értéke? Alkalmazzuk a virtuális munka elvét: ha a léggömb
                térfogatát kis ∆V értékkel megnöveljük, a bezárt és a külső levegő együttes mun-
                kavégzése éppen egyenlő a rugalmas energia növekedésével:

                                                       p∆V = ∆E.

                A lufi pillanatnyi térfogata a kezdeti V0 térfogattal V = V0 λ3 módon fejezhető ki.
                Ennek kicsiny megváltozása a magasabb rendű tagok elhanyagolásával a követke-
                zőképpen közelíthető:
                                                  ∆V ≈ 3V0 λ2 ∆λ.
                Ehhez hasonlóan a rugalmas energia kifejezése is sorba fejthető:

                                          ∆E ≈ E0 4λ − 4λ−5 ∆λ.

                Az eddigiek felhasználásával a túlnyomás kiszámítható:

                                      ∆E     4E0 λ − λ−5 ∆λ          1   1
                                  p=      =                   = p0     −     ,
                                      ∆V          3V0 λ2 ∆λ          λ λ7

                ahol a rövidség kedvéért bevezettük a p0 = 4E
                                                            3V0 jelölést (ami nem azonos a külső
                                                               0


                légnyomással).
                   A feladat szövegéből tudjuk, hogy p(λ = 1,05) = 10 vízcm, hiszen ha a vízszintek
                5 cm-rel mozdulnak el, akkor a folyadékszintek különbsége 10 cm lesz. Ebből:
                                                    10 vízcm
                                         p0 =                    = 41,4 vízcm.
                                                 1,05−1 − 1,05−7

                Érdemes kiszámítani a nyomás értékét a következő két speciális esetben:
                    λ = 1 esetén (ernyedt állapotban) p valóban nulla, ahogy várjuk.
                    λ = 3 esetén (azaz a kidurranás határán) p = 13,8 vízcm.
                Ekkora túlnyomást a manométerben lévő 20 cm hosszú vízoszlop ki tud fejteni.
                Ebből azt a hibás következtetést vonhatjuk le, hogy a lufi felfújódása egészen addig
                folytatódik, míg a vízszintek elmozdulása 13,82 = 6,9 cm-re nő, majd ekkor a lufi
                kidurran.
                    Vajon hol a hiba ebben a gondolatmenetben? Ehhez vizsgáljuk meg részlete-
                sebben a p(λ) függvényt (2. ábra)! Numerikus értékek behelyettesítésével észre-
                vehetjük, hogy a nyomásnak λ = 1 és λ = 3 között maximuma van. (A jelenséget
                tapasztalatból is ismerjük: egy lufit kezdetben nehezebb, majd egy bizonyos méret
                felett könnyebb felfújni.)


                42                                         Középiskolai Matematikai és Fizikai Lapok, 2025/1




i                                                                                                                         i


    i                                                                                                                 i


    i                                                                                                                i

        2025.1.4 – 21:12 – 43. oldal – 43. lap                                                 KöMaL, 2025. január
i                                                                                                                        i


                           p (vízcm)
                  30


                  20


                  10


                   0
                       1                  1,5                      2              2,5           3
                                                                  2. ábra


                   A maximum pontos helye deriválással határozható meg:
                                                      dp
                                                         = p0 −λ−2 + 7λ−8 .
                                                      dλ
                Ez a derivált zérus, ha
                                                  √
                                       λ = λ∗ =                    ahol p(λ∗ ) = 25,7 vízcm.
                                                  6
                                                      7 = 1,38,

                    Mi fog tehát történni? Ahogy az a 2. ábráról látszik, a lufi tovább növekszik
                egészen addig, amíg a túlnyomás eléri a 20 vízcm-es értéket, azaz a folyadékoszlop
                már ekkor teljes egészében a jobb oldali csőszár függőleges részébe kerül. Innentől
                a nyomás nem növekszik tovább, és így a lufi mérete is egy ideig állandó marad,
                a kompresszor pedig immár gyorsabban emeli a vízoszlopot a csőben (hiszen a
                lufiba már nem kell levegőt fújnia). Amikor a víz elkezd kifolyni a csőből, akkor
                a nyomás, és így a lufi mérete is csökkenni kezd. Innentől a kompresszorból és a
                leeresztő lufiból kiáramló levegő is az egyre kisebb tömegű vízoszlopot nyomja ki,
                amely így egyre gyorsulva „kilövell” a csőből. Amikor minden víz kifolyt a csőből,
                a lufi visszakerül a teljesen felfújatlan állapotba (a kompresszor pedig ekkortól a
                szabadba fújja a levegőt).
                    A lufi maximális méretéhez tartozó λ értéket a p(λ) = 20 vízcm egyenlet megol-
                dása adja, amelyet iterálással vagy grafikusan (2. ábrán zöld vonal) kaphatunk meg:
                λmax ≈ 1,145, azaz a lufi átmérője a folyamat során mindössze 14,5%-kal növekszik
                meg az eredeti méretéhez képest.

                    Megjegyzések. 1. A folyamatok időbeliségének kvantitatív vizsgálatához további nume-
                rikus adatok szükségesek. A 3. ábrán látható grafikonok a következő feltevésekkel készül-
                tek: a lufi kezdeti sugara 2,5 cm, a manométer csövének belső keresztmetszete 0,1 cm2 ,
                az alsó ívének hossza 4 cm, a kompresszor térfogatárama 0,54 cm3 , amivel a feladat-
                ban szereplő λ = 1,05 érték és s = 5 cm folyadékszál-elmozdulás épp 20 s alatt történik
                meg. A grafikonokon a folyadékszál s elmozdulása, a bezárt levegő p túlnyomása és a lufi
                méretét leíró λ paraméter látható az idő függvényében.
                    2. Ha a folyadékszál hossza nagyobb lenne, mint a maximális nyomáshoz tartozó
                25,65 cm, akkor a nyomás elérné a maximális értéket, majd csökkenni kezdene, de a
                lufi tovább fújódna, míg λ ≈ 3 értéknél kipukkadna.


                Középiskolai Matematikai és Fizikai Lapok, 2025/1                                      43


i                                                                                                                        i


    i                                                                                                                i


    i                                                                                                               i

        2025.1.4 – 21:12 – 44. oldal – 44. lap                                                KöMaL, 2025. január
i                                                                                                                       i


                             40       s (cm)

                             30

                             20

                             10
                                                                                          t (s)
                              0
                                  0               20             40                60

                                      p (vízcm)
                             20


                             10


                                                                                          t (s)
                              0
                                  0               20             40                60

                           1,15

                           1,10

                           1,05
                                                                                         t (s)
                              1
                                  0               20             40                60
                                                       3. ábra


                   2. A súlytalanság állapotában egy R sugarú, L ≫ R hosszúságú és d ≪ R falvas-
                tagságú alumíniumcső a szimmetriatengelyére merőleges, homogén, B indukciójú
                mágneses mezőben helyezkedik el. A csövet tengelye körül ω0 szögsebességgel meg-
                forgatjuk, majd magára hagyjuk.
                   a) Vázoljuk fel a cső kiterített palástjáról készült rajzon a csőben kialakuló
                áramvonalakat!
                     b) Írjuk le a cső mozgását az idő függvényében!
                                                                                            (Vigh Máté)
                   Megoldás. a) Ha a cső a mágneses térre merőleges irányban mozogna (de nem
                forogna), akkor a Lorentz-erő a töltéseket szétválasztaná, és az így kialakuló elekt-
                rosztatikus tér kiegyenlítené a Lorentz-erőt, egyensúlyi állapot alakulna ki, és áram
                nem folyna (4. ábra).
                   Esetünkben viszont a cső palástjának két átellenes része ellenkező irányban
                mozog, így a Lorentz-erő is ellentétes irányú lesz, aminek következtében a cső
                végeinél záródhatnak az áramvonalak, és így nem lesz jelentős töltésfelhalmozódás,
                hanem az 5. ábrán látható módon zárt áramkör jöhet létre.


                44                                       Középiskolai Matematikai és Fizikai Lapok, 2025/1




i                                                                                                                       i


    i                                                                                                               i


    i                                                                                                                            i

        2025.1.4 – 21:12 – 45. oldal – 45. lap                                                             KöMaL, 2025. január
i                                                                                                                                    i


                                                                B


                                                           E        v       B        v

                                                                                                 R
                                                                                         r
                                                            L

                                                           4. ábra

                                                                        B


                                                                        (       r)   B

                                                                                                     R
                                                                                             r
                                                      (    r)   B           L

                                                           5. ábra


                   Az L ≫ R feltétel miatt a cső végeitől eltekintve az elektrosztatikus tér elha-
                nyagolható, és így a cső falában

                                                     j = σ(ω × r) × B,
                                                    j(α) = σωBR cos α

                áramsűrűség alakul ki, ahol ω a cső pillanatnyi szögsebessége, σ az alumínium fajla-
                gos vezetőképessége (a fajlagos ellenállás reciproka), 0 ⩽ α < 2π pedig a tengelytől
                a palást adott pontjához mutató r sugár és a mágneses indukció B vektora által
                bezárt szög. A cső végein felhalmozódik valamennyi töltés: ezek „térítik el” a cső
                végén az áramvonalakat. A kialakuló áramvonalakat a 6. ábra mutatja.
                                                                L
                              0




                                                                                                         2 R




                              2
                                                           6. ábra

                  b) I. módszer. Az L ≫ R feltétel miatt a cső végével, mint „széleffektussal”
                nem foglalkozunk, csak a csőben a cső tengelyével párhuzamosan folyó áramokkal.


                Középiskolai Matematikai és Fizikai Lapok, 2025/1                                                  45


i                                                                                                                                    i


    i                                                                                                                            i


    i                                                                                                                      i

        2025.1.4 – 21:12 – 46. oldal – 46. lap                                                       KöMaL, 2025. január
i                                                                                                                              i


                Ezekre a mágneses tér erőt fejt ki, egy dV kicsiny térfogatra ható erő:

                                                       dF = j × B dV.

                Az erők és a tengelyre merőleges forgatónyomaték-komponensek vektori eredője
                a szimmetria miatt nulla, így a cső tömegközéppontja nem mozdul el, és tengelye
                nem fordul el. Ugyanakkor a tengellyel párhuzamos forgatónyomaték-komponensek
                eredője nem nulla, a cső forgása így lassulni fog. (Az áramok miatt hő disszipálódik,
                így a cső energiája biztosan csökkenni fog. Ezt mondja ki a Lenz-törvény is.) A
                cső kicsiny dR dα keresztmetszetű, L hosszúságú, dV = LdR dα térfogatú keskeny
                csíkjára ható tengellyel párhuzamos forgatónyomaték-komponens:

                                        dM = r × dF = r × (j × B)LdR dα,
                                dM = −RjB cos α · LdR dα = −σωB 2 LdR3 cos2 α dα.

                (A negatív előjel azt fejezi ki, hogy a forgatónyomaték-komponens a szögsebesség-
                vektorral ellentétes irányú.) Ennek összegzése a teljes csőre

                                               Z2π
                                                 2      3
                                  M = −σωB LdR    cos2 α dα = −σωB 2 LdR3 π.
                                                            0

                (Ezt az eredményt a szinuszos jel effektív értéke alapján is ismerhetjük: az átlagos
                érték 21 és 21 · 2π = π, vagy a cos2 α = 12 (1 − cos 2α) átalakítás után szemléletesen is
                láthatjuk.) A vékony falú cső tehetetlenségi nyomatéka

                                                     Θ = mR2 = 2πϱLdR3 ,

                ahol ϱ az alumínium sűrűsége. A cső tengely körüli forgását leíró mozgásegyenlet:

                                       dω M      σωB 2 LdR3 π     σB 2
                                          =   =−              = −      ω.
                                       dt   Θ     2πϱLdR3          2ϱ
                A differenciálegyenlet ugyanolyan alakú, mint a jól ismert radioaktív bomlási tör-
                vény, így megoldása:
                                                              t
                                                 ω(t) = ω0 e− τ ,
                ahol a τ időállandó:
                                                          2ϱ
                                                            τ=.
                                                         σB 2
                A cső tehát exponenciálisan lassulva fog forogni.

                    Megjegyzés. Az időállandó nem függ a cső méreteitől (mindössze annyit használtunk
                fel, hogy d ≪ R ≪ L), csak a cső anyagának sűrűségétől és fajlagos vezetőképességétől,
                valamint a mágneses mező erősségétől. Alumínium esetében 1 mT mágneses indukció
                esetén az időállandóra két és fél percet kapunk.




                46                                              Középiskolai Matematikai és Fizikai Lapok, 2025/1




i                                                                                                                              i


    i                                                                                                                      i


    i                                                                                                           i

        2025.1.4 – 21:12 – 47. oldal – 47. lap                                            KöMaL, 2025. január
i                                                                                                                   i


                   II. módszer. A cső egészében időegységenként
                                                              1 2
                                                        P=     j V
                                                              σ eff
                energia disszipálódik, ahol (a koszinuszos helyfüggés miatt)
                                                       1        1
                                               jeff = √ jmax = √ σωBR,
                                                        2        2
                és V = 2πLdR a cső térfogata. Ezt a disszipálódó energiát a cső mozgási energiá-
                jának csökkenése fedezi:
                                                           dEm
                                                    P =−         ,
                                                            dt
                ahol
                                                    1        1
                                             Em = Θω 2 = ϱV R2 ω 2 .
                                                    2        2
                Behelyettesítés és a deriválás elvégzése után:
                                                               2

                               1 2 2 2            1     2 d ω         1          dω
                                 σω B R V = − ϱV R ·               = − ϱV R2 · 2ω ,
                               2                  2         dt        2          dt
                egyszerűsítve és rendezve:
                                                       dω    σB 2
                                                          =−      ω,
                                                       dt     2ϱ
                az előző módszer eredményével összhangban.

                   3. Egy tubusban szimmetrikusan elhelyeztünk két f1 = 50 cm és két f2 = 10 cm
                fókusztávolságú gyűjtőlencsét a 7. ábrán látható módon. Sikerült a lencséket úgy
                beállítani, hogy az optikai rendszeren átnézve a tárgyakat éppen olyannak látjuk,
                mintha egy üres tubuson át néznénk azokat.




                                        7. ábra                                     8. ábra

                   a) Mekkorák a lencsék közötti d és s távolságok?
                    b) Ha az előző optikai rendszert tubus nélkül megépítjük, és a kezünket megfelelő
                helyen a lencsék közé helyezzük, akkor a 8. ábrán látható módon a kezünk egy részét
                el tudjuk „tüntetni”. Magyarázzuk meg a jelenséget!
                                                                                  (Széchenyi Gábor)




                Középiskolai Matematikai és Fizikai Lapok, 2025/1                                 47


i                                                                                                                   i


    i                                                                                                           i


    i                                                                                                                     i

        2025.1.4 – 21:12 – 48. oldal – 48. lap                                                      KöMaL, 2025. január
i                                                                                                                             i


                   Megoldás. a) I. módszer. A tárgyakat éppen olyannak látjuk, mintha „semmi”
                nem lenne ott, vagyis egy jobb oldalról érkező fénysugár a lencserendszeren át-
                haladva éppen a beérkező fénysugár meghosszabbításán fog továbbhaladni. Első
                lépésként tekintsünk egy olyan fénysugarat, melynek belépő és így kilépő része is
                párhuzamos az optikai tengellyel. Ekkor – ahogy azt a 9. ábrán is látjuk – a lencse-
                rendszer, valamint a sugármenet is tükörszimmetrikus. Ilyenkor a két belső lencse
                között haladó fénysugár is párhuzamos az optikai tengellyel. Egy, a végtelenből
                érkező párhuzamos nyalábot a két jobb oldali lencse párhuzamos nyalábbá képez,
                azaz ez a két lencse konfokális, fókuszpontjaik egybeesnek:

                                                           s = f1 + f2 .


                                   f1                             tükör
                                                      f2                     f2                f1




                                                                  d
                                              s                                      s
                                                             9. ábra

                    Ezután többféle módon megkaphatjuk a d távolság értékét, lássunk erre két
                különféle utat!
                    1. út. Vegyünk fel egy tetszőleges helyen egy tárgyat, és határozzuk meg sorban
                egymás után a négy lencse által alkotott képeit. A negyedik lencsén történő leké-
                pezés után egy azonos állású és nagyítású, virtuális képet kell kapnunk az eredeti
                tárgy helyén. A leképzési törvény szokásos alakját használva a képletekkel nehéz-
                kesebb a számolás, ezért inkább használjuk a Newton-féle alakot (amely az x tárgy
                és y képtávolságot a fókuszponttól méri, lásd a G. 855. gyakorlatot a KöMaL 2024.
                májusi számában). Eszerint xy = f 2 .
                    Helyezzük a tárgyunkat az első lencse fókuszpontjától x1 távolságra. A követke-
                zőkben jelölje xi (yi ) a jobb oldalról számított i. lencsén történő leképezéshez tarto-
                zó, jobb (bal) oldali fókuszponttól mért tárgytávolságot (képtávolságot). A 10. áb-
                rán piros ponttal a képek helyeit, fekete ponttal a fókuszpontokat jelöltük.
                    Az első lencsén történő leképezés:

                                                                                    f12
                                             x1 y1 = f12        ⇒            y1 =       .
                                                                                    x1
                Mivel s = f1 + f2 , a két lencse fókusza egybeesik, így

                                                           x2 = −y1 ,

                A második lencsén történő leképezés:

                                                                             f22    f2
                                        x2 y2 = f22        ⇒          y2 =       = − 22 x1 .
                                                                             x2     f1


                48                                             Középiskolai Matematikai és Fizikai Lapok, 2025/1




i                                                                                                                             i


    i                                                                                                                     i


    i                                                                                                                              i

        2025.1.4 – 21:12 – 49. oldal – 49. lap                                                               KöMaL, 2025. január
i                                                                                                                                      i

                                                              y 4 = 4f 1 + 2f 2 + d + x 1


                                              y3 =       x4                       y1 =       x2
                                                                     x3 y2                                   x1
                             f1             f1           f2     f2           f2   f2          f1        f1

                                          s = f 1+ f 2                 d               s = f 1+ f 2

                                                                     10. ábra

                A 10. ábra alapján:
                                                              x3 = d − 2f2 − y2 .
                Tovább folytatva a harmadik lencsén történő leképezéssel:
                                                                                            f22
                                          x3 y3 = f22            ⇒            y3 =                  ,
                                                                                       d − 2f2 − y2
                                                                  x4 = −y3 .
                Végül a negyedik lencsén történő leképezés:
                                                      f2     f2      f2
                            x4 y4 = f12    ⇒     y4 = 1 = − 1 = − 12 (d − 2f2 − y2 ) =
                                                       x4    y3      f2
                                         2
                                                      2
                                                                  2
                                       f            f           f
                                    = − 12 d − 2f2 + 22 x1 = − 12 (d − 2f2 ) − x1 .
                                       f2           f1          f2

                   Ismét a 10. ábra alapján, ahhoz hogy a negyedik kép az első tárgy helyén legyen
                a következő geometriai feltételnek kell teljesülnie:
                                                     −y4 = 4f1 + 2f2 + d + x1 .
                Ebből
                                            f12
                                                (d − 2f2 ) + x1 = 4f1 + 2f2 + d + x1 .
                                            f22
                Látható, hogy az egyenletből kiesik az x1 változó, azaz tetszőleges helyre helyezve
                a tárgyat, annak képe a négy lencsén történő leképezés után éppen a tárgy helyén
                lesz. Az egyenletet tovább alakítva:
                                           2
                                           f1                f12
                                               − 1   d = 2f2     + 4f1 + 2f2 ,
                                           f22               f22
                                              (f12 − f22 )d = 2f2 (f12 + 2f1 f2 + f22 ).
                A két középső lencse közötti távolságra az alábbi kifejezés adódik:
                                                              (f1 + f2 )2       f1 + f2
                                                 d = 2f2                  = 2f2         .
                                                               f12 − f22        f1 − f2

                   2. út. A lencserendszer középpontosan is szimmetrikus. Ha a beérkező fénysu-
                gár meghosszabbítása a középponton menne át, akkor a kimenő fénysugár meg-
                hosszabbítása is átmegy a középponton. Ilyenkor a fénysugárnak is középpontosan


                Középiskolai Matematikai és Fizikai Lapok, 2025/1                                                    49


i                                                                                                                                      i


    i                                                                                                                              i


    i                                                                                                                                          i

        2025.1.4 – 21:12 – 50. oldal – 50. lap                                                                           KöMaL, 2025. január
i                                                                                                                                                  i


                szimmetrikusnak kell lennie, azaz annak fizikailag is át kell haladnia a rendszer
                középpontján (lásd a 11. ábrát). Ennek következményeként egy, a középpontban
                elhelyezett tárgyat a két bal oldali lencse a középpontba képez le mint virtuális
                képet.
                                     f1                                                                    f1
                                                    f2                     f2



                                                         középpont

                                                          11. ábra

                   Szerkesszük meg a középpontba helyezett h magasságú tárgy képét! Tekintsünk
                egy, az optikai tengellyel párhuzamos, illetve egy, az f2 fókusztávolságú lencse
                fókuszán áthaladó sugármenetet, ezeket zölddel, illetve kékkel rajzoltuk meg a 12.
                ábrán.
                                                                  f2           d
                                                         2f1
                                                                               2

                                                    f1                                             d
                                                                                   f2              2
                                                                                                                 G
                                f2        A         B                              D           F                O h
                            d
                                     h
                                  f2                                                                              f1
                            2                       C                              E                                 h
                                                                                                                  f2

                                                                                                                 H
                                                          12. ábra

                     A két lencse konfokális, így a zöld sugármenetet követve a kép méretére
                                                                  f1
                                                         OH =        h
                                                                  f2
                adódik. Az F GO és F ED háromszögek hasonlóak, valamint
                                                                               d
                                              DF = f2     és F O =               − f2 ,
                                                                               2
                ahonnan
                                                                       f2
                                                 DE = BC = d                h.
                                                                     2 − f2
                Az ABC és AOH háromszögek is hasonlóak, amiből következik, hogy
                                                                 f2                     f1
                                                                       h
                                          BC   OH                                       f2 h
                                                               d
                                                               2 −f2
                                             =       ⇒                     =                           .
                                          AB   AO               f1              2f1 + f2 + d2

                Az egyenletet d-re megoldva a korábban megkapott végeredményre jutunk.


                50                                          Középiskolai Matematikai és Fizikai Lapok, 2025/1




i                                                                                                                                                  i


    i                                                                                                                                          i


    i                                                                                                                    i

        2025.1.4 – 21:12 – 51. oldal – 51. lap                                                     KöMaL, 2025. január
i                                                                                                                            i


                      A megadott fókusztávolságok behelyettesítése után:
                                                                          f1 + f2
                                  s = f1 + f2 = 60 cm       és d = 2f2            = 30 cm.
                                                                          f1 − f2

                   II. módszer. Vegyük fel a koordinátatengelyt az optikai tengelyen, középpontját
                helyezzük az elrendezés közepére! A tárgy legyen a tengely x pontjában, amit a
                jobb szélső lencse a z pontba képez le, ezt az első képet pedig a második lencse
                az y pontba. A lencsék helyére is bevezetünk két új paramétert: az origótól mért
                távolságukat (hogy rövidebbek legyenek a képletek, 13. ábra):
                                                      1                1
                                                  d2 = d,          d1 = d + s.
                                                      2                2




                            d1               d2       0       d2                 d1 y          x


                                                            13. ábra

                    A harmadik és negyedik lencse az első kettőnek a tükörképe, ezért számukra az
                x és y pont a −x, −y párnak felel meg. A fényút megfordíthatóságát is kihasználva
                arra jutunk, hogy a bal oldali két lencse a második képet akkor képezi pontosan
                vissza az x pontba, ha az y = L(x) páratlan függvény.
                    Írjuk fel az első két lencsére a leképezési törvényt a (k − f )(t − f ) = f 2 Newton-
                féle alakot használva:

                                             (x − d1 − f1 )(d1 − z − f1 ) = f12 ,
                                             (z − d2 − f2 )(d2 − y − f2 ) = f22 .

                Ejtsük ki a z ismeretlent úgy, hogy mindkét egyenletet elosztjuk a bal oldal z-t
                nem tartalmazó tényezőjével, majd összeadjuk ezeket:

                                                                f12         f22
                                     d1 − d2 − f1 − f2 =               +            .
                                                            x − d1 − f1 d2 − y − f2
                A nevezőkkel beszorozva:

                 (d1 − d2 − f1 − f2 )(x − d1 − f1 )(d2 − y − f2 ) = f12 (d2 − y − f2 ) + f22 (x − d1 − f1 ).

                Mielőtt elvégeznénk az összes szorzást, nézzük meg, melyik tagokra van szükségünk.
                A fenti egyenlet egy
                                              Axy + Bx + Cy + D = 0
                implicit alakra vezet, ahol

                (1)       A = d1 − d2 − f1 − f2 ,


                Középiskolai Matematikai és Fizikai Lapok, 2025/1                                          51


i                                                                                                                            i


    i                                                                                                                    i


    i                                                                                                                        i

        2025.1.4 – 21:12 – 52. oldal – 52. lap                                                         KöMaL, 2025. január
i                                                                                                                                i


                (2)        B = f22 + A(f2 − d2 ),
                (3)        C = −f12 − A(d1 + f1 ),
                                                                                          BC + f12 f22
                (4)       D = f12 (d2 − f2 ) − f22 (d1 + f1 ) + A(d1 + f1 )(d2 − f2 ) =                .
                                                                                             A
                A keresett L függvény:
                                                      Bx + D
                                                        y=−  .
                                                      Ax + C
                Ez akkor páratlan, ha α) A = D = 0, vagy β) B = C = 0.
                      Az α) esetben az (1) egyenletből A = 0 feltétellel:
                (5)                                 s = d1 − d2 = f1 + f2 .
                Ez a távolság ugyanakkora, mint a Kepler-féle távcsőben, vagyis eszközünk nem
                más, mint két kifelé fordított Kepler-távcső. A d középső távolság meghatározá-
                sához nézzük a D együtthatóra vonatkozó egyenletet. A (4) egyenletből D = 0
                feltétellel:
                (6)                            f12 (d2 − f2 ) − f22 (d1 + f1 ) = 0.
                Helyettesítsük be (5)-ből d1 = d2 + f1 + f2 -t, és oldjuk meg d2 -re:
                                            f12 (d2 − f2 ) − f22 (d2 + 2f1 + f2 ) = 0
                                   f 2 + 2f1 f2 + f22      f1 + f2                              f1 + f2
                            d2 = f2 1 2        2      = f2                 ⇒          d = 2f2           .
                                        f1 − f2            f1 − f2                              f1 − f2
                Az eredményen látszik, hogy a megoldhatósághoz teljesülnie kell az f1 > f2 egyen-
                lőtlenségnek. A második kép helye végül:
                                                            2
                                                   B      f2
                (7)                          y=− x=            x.
                                                   C      f1

                    A β) megoldásról megmutatjuk, hogy fordított képet ad, ezért nem felel meg a
                feladat leírásának. A kép annyiszor fordul meg az eszközben, ahány valódi, ernyőn
                felfogható kép létrejön. Az α) megoldásban például a párhuzamos fénynyaláb (vég-
                telen távoli tárgy) a középső tartományban szintén párhuzamos, a két szélsőben a
                lencsék közös fókuszpontjában valódi kép jön létre, így a kétszer megfordított kép
                egyenes állású lesz. A β) megoldásnál a második kép az
                                                            D
                                                           y=−
                                                            Ax
                helyre kerül, a végtelen távol levő tárgy második képe tehát az origóban lesz. Mivel
                a sugármenet szimmetrikus, ez mindenképpen páratlan számú képfordítást jelent,
                a végső kép így fordított állású lesz.
                      A feladat a) kérdésére tehát a válasz (a korábbi eredményekkel összhangban):
                                                                           f1 + f2
                                   s = f1 + f2 = 60 cm      és d = 2f2             = 30 cm.
                                                                           f1 − f2



                52                                             Középiskolai Matematikai és Fizikai Lapok, 2025/1




i                                                                                                                                i


    i                                                                                                                        i


    i                                                                                                                                i

        2025.1.4 – 21:12 – 53. oldal – 53. lap                                                                 KöMaL, 2025. január
i                                                                                                                                        i


                    Megjegyzések. 1. A kép és a tárgy összetett optikai eszközöknél is felcserélhető – ez a
                fénysugár megfordíthatóságából következik. Ha a kettő ugyanott van, akkor a felcserélhe-
                tőség az eszköz nagyítására az
                                                                K   T   1
                                                         N∗ =     =   = ∗
                                                                T   K  N
                feltételt adja, amiből
                                                        N ∗2 = 1     és   N ∗ = ±1,
                vagyis a kép ugyanakkora, de lehet egyenes vagy fordított állású.
                    Ellenőrizzük, hogy a nagyítás az α) megoldásban minden tárgytávolságra +1. Egy
                lencse nagyítása (amit fordított állású kép esetén negatívnak tekintünk):
                                                         K   k    f    f −k
                                                  N=       =− =      =      .
                                                         T   t  f −t     f
                A teljes nagyítás a négy lencse nagyításának szorzata. Az első és harmadik kép helyét nem
                számoltuk ki, de az egyes lencsék nagyításának felírásánál szerencsére két-két lehetőségünk
                van:
                                            f1        f2 − d2 + y       f2        f 1 + d1 + x
                                 N∗ =               ·             ·             ·              .
                                       f 1 + d1 − x       f2        f2 − d2 − y        f1
                A szorzások elvégzésekor vegyük észre, hogy a számláló és a nevező egyforma tagokat
                tartalmaz, csak némelyiket eltérő előjellel:
                                         [(f1 + d1 )(f2 − d2 ) + xy] + [x(f2 − d2 ) + y(f1 + d1 )]
                (8)              N∗ =                                                              .
                                         [(f1 + d1 )(f2 − d2 ) + xy] − [x(f2 − d2 ) + y(f1 + d1 )]
                A számláló és nevező eltérő előjelű részéről megmutatjuk, hogy zérus:
                                                                   x 2
                                 x(f2 − d2 ) + y(f1 + d1 ) =           [f1 (f2 − d2 ) + f22 (f1 + d1 )] = 0.
                                                                   f12

                (Ehhez használtuk a (7) eredményt, a szögletes zárójelben levő rész pedig (6) alapján
                zérus.) Tehát N ∗ = 1, bárhol is van a tárgy.
                      2. A β) megoldás a következő:
                                         p                                 √
                                                                      f1 − 2f1 f2
                                    s=       2f1 f2 ,    d = 2f2             √      ,        f1 > 2f2 .
                                                                   f1 + f2 − 2f1 f2
                A nagyítás (8) kifejezésében most az azonos előjelű rész, a számláló és nevező első tagja
                tűnik el:
                                                       D                         f 2f 2
                                (f1 + d1 )(f2 − d2 ) −   = (f1 + d1 )(f2 − d2 ) − 1 22 = 0,
                                                       A                          A
                ahol előbb behelyettesítettük (4) egyenletből D-t, majd pedig az

                                                 f12                        f22
                                                     = −(d1 + f1 ),             = d2 − f 2
                                                 A                          A
                értékeket, amik a B = C = 0 feltétellel a (2) és (3) egyenletből adódnak. A nagyítás tehát
                ebben az esetben N ∗ = −1, bárhol van a tárgy.

                   b) Ha megnézzük a 9. ábrán a párhuzamos nyalábot, láthatjuk, hogy a két belső
                lencse között ff12 arányban, esetünkben 15 -öd részére szűkül össze. Ha a kezünket
                úgy rakjuk be a két belső lencse közé, hogy ez a szűk nyaláb a széttartott ujjaink


                Középiskolai Matematikai és Fizikai Lapok, 2025/1                                                      53


i                                                                                                                                        i


    i                                                                                                                                i


    i                                                                                                                i

        2025.1.4 – 21:12 – 54. oldal – 54. lap                                                 KöMaL, 2025. január
i                                                                                                                        i


                között át tud menni, akkor nem fog kitakarni semmit, és a teljes lencserendszeren
                át a hátteret látjuk. A 14. ábrán nemcsak a párhuzamos, hanem kis szögben érkező
                nyalábokat is tekintettünk, és szürkével rajzoltuk be azokat a tartományokat, ahová
                helyezett tárgyak nem fognak semmit kitakarni.
                                 f1                                                   f1
                                                   f2              f2




                                                        14. ábra

                                                           ❄
                   Az ünnepélyes eredményhirdetésre és díjkiosztásra 2024. november 22-én dél-
                után került sor az ELTE TTK Eötvös termében. Megemlékeztünk az 50 és 25 évvel
                ezelőtti Eötvös-versenyről, ismertettük az akkori feladatokat és a győztesek nevét.
                Az 50 évvel ezelőtt díjazottak közül Vladár Károly – aki az idei évtől a versenybi-
                zottság tagja – volt jelen, a 25 évvel ezelőttiek közül Hegedűs Ákos, Gáspár Merse
                Előd és Terpai Tamás – ők pár mondatban beszéltek a versennyel kapcsolatos em-
                lékeikről és a pályafutásukról. A 75 évvel ezelőtti győztes Holics László és az 50
                évvel ezelőtti II. díjas Szép Jenő néhány soros üdvözletet küldött. Ezután követke-
                zett a 2024. évi verseny feladatainak és megoldásainak bemutatása. Az 1. feladat
                megoldását Vigh Máté, a 2. feladatét Vankó Péter, a 3. feladatét Széchenyi Gábor
                ismertette.
                   Az esemény végén került sor az eredményhirdetésre. A díjakat Ormos Pál, az
                Eötvös Loránd Fizikai Társulat elnöke adta át.
                     I. díjat a versenybizottság nem adott ki.
                   Az első feladat helyes, a második feladat lényegében helyes megoldásáért és a
                harmadik feladatban elért részeredményért második díjat nyert Bencz Benedek, a
                Baár–Madas Református Gimnázium, Általános Iskola és Kollégium 12. osztályos
                tanulója, Horváth Norbert tanítványa.
                   A második feladat helyes megoldásáért és a másik két feladatban elért részered-
                ményekért harmadik díjat nyert Téti Miklós, a Budapesti Fazekas Mihály Gyakorló
                Általános Iskola és Gimnázium 11. osztályos tanulója, Schramek Anikó tanítványa.
                   Egy feladat lényegében helyes megoldásáért és kisebb részeredményekért di-
                cséretet kapott Iliás Gergely, az ELTE fizika BSc szakos hallgatója, aki a Jedlik
                Ányos Gimnáziumban érettségizett Radnai Tamás tanítványaként, Masa Barna-
                bás, a Szegedi Radnóti Miklós Kísérleti Gimnázium 12. osztályos tanulója, Csányi
                Sándor tanítványa, valamint Tóth Kolos Barnabás, a Budapest V. Kerületi Eötvös
                József Gimnázium 11. osztályos tanulója, Varga Balázs tanítványa.
                   A második díjjal az Andersen Adótanácsadó Zrt. és a Nanorobot Vagyonkeze-
                lő Kft. adományából 90 ezer forint, a harmadik díjjal 60 ezer, a dicsérettel 40 ezer


                54                                        Középiskolai Matematikai és Fizikai Lapok, 2025/1




i                                                                                                                        i


    i                                                                                                                i
