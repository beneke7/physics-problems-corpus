---
id: solution-document-eotvos-2021-s
source: eotvos
kind: official_solution_document
language: hu
solution_type: official
source_pdf: cache/phoxiv/eotvos/2021_S.pdf
extraction_method: pdftotext-layout
mapped_problems: [eotvos-2021-beach-ball, eotvos-2021-compressed-gas, eotvos-2021-superconductor-ring]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/eotvos/2021_S.pdf."
---

i                                                                                                                     i

        2022.2.6 – 19:38 – 105. oldal – 41. lap                                                  KöMaL, 2022. február
i                                                                                                                             i




                         Beszámoló a 2021. évi Eötvös-versenyről


                      Az Eötvös Loránd Fizikai Társulat 2021. évi Eötvös-versenye október 15-én
                délután 3 órai kezdettel tı́z magyarországi helyszı́nen1 került megrendezésre. Ezért
                külön köszönettel tartozunk mindazoknak, akik ebben szervezéssel, felügyelettel
                a segı́tségünkre voltak. A versenyen a három feladat megoldására 300 perc áll
                rendelkezésre, bármely ı́rott vagy nyomtatott segédeszköz használható, de (nem
                programozható) zsebszámológépen kı́vül minden elektronikus eszköz használata
                tilos. Az Eötvös-versenyen azok vehetnek részt, akik vagy középiskolai tanulók, vagy
                a verseny évében fejezték be középiskolai tanulmányaikat. Összesen 69 versenyző
                adott be dolgozatot, 14 egyetemista és 55 középiskolás.
                      Ismertetjük a feladatokat és azok megoldását.
                                                                 ?
                      1. feladat. Egy hőszigetelt, hengeres tartályt egy jó hővezető, rögzı́tett fal oszt
                két egyforma henger alakú térrészre. Az egyik térfélben héliumgáz, a másikban azzal
                megegyező anyagmennyiségű oxigéngáz található, mindkét gáz kezdeti hőmérsékle-
                te T0 , kezdeti térfogata pedig V0 . A tartály egyik végét könnyen mozgó, hőszigetelő
                dugattyú zárja le, amellyel a héliummal töltött térrész térfogata változtatható. Ha-
                tározzuk meg a hengerben lévő gázok végső hőmérsékletét, miután a dugattyú lassú
                mozgatásával a héliumgáz térfogatát V0 /2-re csökkentettük!
                                                                                                (Vigh Máté)

                       Megoldás. Az 1. ábra a kezdeti állapotot és a végállapotot mutatja.




                                                              1. ábra
                   1
                       Részletek a verseny honlapján: http://eik.bme.hu/~vanko/fizika/eotvos.htm.


                Középiskolai Matematikai és Fizikai Lapok, 2022/2                                       105


i                                                                                                                             i


    i                                                                                                                     i
    i                                                                                                                           i

        2022.2.6 – 19:38 – 106. oldal – 42. lap                                                        KöMaL, 2022. február
i                                                                                                                                   i



                    Feladatunk a T1 hőmérséklet meghatározása. Ezt többféle módszerrel is meg-
                tehetjük.
                      I. megoldás. Legyen a héliumgáz lassan változó pillanatnyi hőmérséklete T ,
                térfogata V . Az elválasztó fal jó hővezetése miatt az oxigéngáz hőmérséklete is T .
                Ha a dugattyú elmozdulása miatt a hőmérséklet ΔT értékkel nő, a héliumgáz
                térfogata pedig ΔV értékkel változik meg (ΔV < 0), akkor az egész rendszer belső
                energiájának változása
                                                  3        5
                (1)                       ΔE =      nR ΔT + nR ΔT = 4nR ΔT.
                                                  2        2
                A héliumgáz nyomása:
                                                                T
                                                                  .
                                                              p = nR
                                                                V
                Az egész rendszerre alkalmazott első főtétel szerint
                                                         −pΔV = ΔE,
                vagyis
                                                        ΔV    ΔT
                (2)                                        +4    = 0.
                                                        V      T
                Szorozzuk meg (2)-t T 4 V -vel, és használjuk ki, hogy a megváltozások kicsik (ezért
                a négyzetüket és a magasabb hatványaikat elhanyagolhatjuk):
                                             T 4 ΔV + 4T 3 V ΔT = Δ(T 4 V ) = 0,
                tehát T 4 V a folyamat során állandó marad. A héliumgáz kezdeti és végállapotát
                összehasonlı́tva kapjuk, hogy
                                             V0                        √
                                                                       4
                                 T04 V0 = T14 ,       vagyis    T1 = 2 T0 ≈ 1,2 T0 .
                                             2
                Ugyanezt az eredményt az (1)-ben szereplő kicsiny változások összegzésével (integ-
                rálással) is megkaphatjuk:
                                     0 /2
                                     V                  T1
                                             1                1                    T1
                                               dV + 4           dT = − ln 2 + 4 ln    = 0,
                                             V                T                    T0
                                     V0                 T0

                vagyis                                              √
                                                                    4
                                                             T1 =       2 T0 .
                      II. megoldás. Az (1) egyenlet szerint a folyamat tekinthető egy f = 8 szabad-
                sági fokú gáz adiabatikus összenyomásának. Erre a folyamatra a fajhőhányados
                      f +2
                κ = f = 54 , tehát az adiabatikus állapotváltozás egyenlete:

                                                T V κ−1 = T V 1/4 = állandó,
                             √
                ahonnan T1 = 4 2 T0 .


                106                                              Középiskolai Matematikai és Fizikai Lapok, 2022/2




i                                                                                                                                   i


    i                                                                                                                           i
    i                                                                                                                           i

        2022.2.6 – 19:38 – 107. oldal – 43. lap                                                        KöMaL, 2022. február
i                                                                                                                                   i


                     III. megoldás. Kézikönyvekben2 és képletgyűjteményekben megtalálható, hogy
                n mol anyagmennyiségű, f szabadsági fokú molekulákból álló, T hőmérsékletű és
                V térfogatú ideális gáz entrópiája
                                                           f       T         V
                                              S(T, V ) =     nR ln    + nR ln .
                                                           2       T0        V0
                Az entrópia nullpontja önkényesen választható, a fenti képletben például

                                                           S(T0 , V0 ) = 0

                (ahol T0 és V0 lehet a feladatban szereplő kezdeti hőmérséklet és térfogat).
                     A vizsgált folyamatban nincs hőcsere a rendszer és a környezete között, to-
                vábbá (a dugattyú lassú mozgatása esetén) a folyamat reverzibilis, ı́gy a rendszer
                entrópiája változatlan marad:
                                                                                        
                            fHe         T1         V0 /2      fO2        T1            V0
                                 nR ln     + nR ln        +        nR ln    + nR ln           = 0,
                             2          T0          V0          2        T0            V0

                vagyis (tudva, hogy fHe = 3 és fO2 = 5)

                                                             T1     1
                                                      4 ln      + ln = 0,
                                                             T0     2
                            √
                azaz a T1 = 4 2 T0 eredmény adódik.
                       Megjegyzés. Ha a héliumgáz térfogatát olyan gyorsan csökkentjük a felére, hogy az oxi-
                géngáz nem tud azonnal felmelegedni, akkor a folyamat irreverzibilissé válik, vagyis az ent-
                rópia nőni fog. Mivel adott térfogat esetén a magasabb hőmérséklethez tartozik nagyobb
                entrópia, a dugattyú hirtelen elmozdı́tása után a két gáz végül (a hőmérséklet kiegyenlı́-
                tődése után) jobban felmelegszik, mint a feladatban szereplő lassú összenyomásnál.

                      2. feladat. Egy henger alakú,  hosszúságú és R   sugarú, légmagos szolenoid
                meneteinek száma N . A tekercs belsejébe egy r  R sugarú, a szolenoid szimmetria-
                tengelyére merőleges sı́kú, L induktivitású szupravezető gyűrűt helyezünk (a gyűrű
                és a szolenoid középpontja egybeesik).
                     a) Növekszik vagy csökken a szolenoid induktivitása a gyűrű behelyezése követ-
                keztében?
                     b) Határozzuk meg az induktivitás megváltozásának nagyságát!
                                                                                              (Széchenyi Gábor )

                     Megoldás. a) A szupravezető fázisban lévő anyagoknak az az egyik különleges
                tulajdonságuk, hogy az elektromos ellenállásuk nulla. Ha egy szupravezető gyűrű-
                ben feszültség indukálódna, akkor az Ohm-törvény alapján végtelen nagy áramnak
                kellene benne folynia. Ennek a ﬁzikai képtelenségnek a feloldása az, hogy a szup-
                ravezető gyűrűben nem indukálódhat feszültség, azaz a gyűrűn áthaladó mágneses
                ﬂuxus értéke nem változhat meg.
                   2
                       Lásd pl. a 333+ Furfangos Feladat Fizikából 194. feladatának megoldását.


                Középiskolai Matematikai és Fizikai Lapok, 2022/2                                            107


i                                                                                                                                   i


    i                                                                                                                           i
    i                                                                                                                        i

        2022.2.6 – 19:38 – 108. oldal – 44. lap                                                     KöMaL, 2022. február
i                                                                                                                                i


                       Az egyszerűség kedvéért tételezzük fel, hogy kezdetben, amikor a szolenoidban
                nulla az áramerősség, akkor a szupravezető gyűrűben sem folyik áram, ı́gy a rajta
                áthaladó mágneses ﬂuxus értéke nulla. Ez az érték akkor sem változhat meg, ha
                a tekercsben áram folyik. Hogyan lehetséges ez, hiszen a szolenoid mágneses tere
                miatt meg kellene jelennie egy véges ﬂuxusnak a gyűrűben. Úgy, hogy a gyűrűben
                olyan áram indukálódik, mely azonos nagyságú, de ellentétes előjelű ﬂuxust hoz
                létre a gyűrűn. Ennek az áramnak a hatására a tekercsen áthaladó mágneses ﬂuxus
                értéke és ı́gy a tekercs induktivitása is kisebb lesz, mint a szupravezető gyűrű nélküli
                esetben.
                     b) Vizsgáljuk az előbb leı́rt jelenséget kvantitatı́van. Legyen a szolenoid ára-
                ma I. A szolenoid közepén elhelyezett szupravezető gyűrűn áthaladó mágneses ﬂu-
                xus értéke
                                                 Φgyűrű = L · i + M · I,
                ahol L a gyűrű öninduktivitása, i a gyűrű árama, M a szolenoid és a gyűrű kölcsönös
                indukciós együtthatója, ami megadja, hogy az egyikben folyó egységnyi erősségű
                áram hatására mekkora mágneses ﬂuxus jön létre a másikban. (Belátható, hogy
                M nagysága a szereplők felcserélésekor nem változik, tehát mindegy, hogy a gyűrű
                árama által a szolenoidban keltett mágneses ﬂuxust számı́tjuk ki, vagy a szoleno-
                id árama által a gyűrűben keltett ﬂuxust vizsgáljuk. Ez utóbbi nyilván könnyebb
                feladat.) M értékét a feladatban megadott geometriára könnyen kiszámolhatjuk.
                Az I erősségű árammal átjárt szolenoidban a homogén mágneses tér indukcióvek-
                                      μ NI
                torának nagysága 0 . Mivel a gyűrű sı́kja merőleges a mágneses tér irányára,
                                                           μ0 N I 2
                a gyűrűn áthaladó mágneses ﬂuxus        
                                                                 r π. Innen kiolvashatjuk a kölcsönös in-
                dukciós együttható értékét:
                                                              μ0 N 2
                                                       M=         r π.
                                                               
                      A gyűrű ﬂuxusa nem változik meg, ha a szolenoid áramát nulláról I-re növel-
                jük, ı́gy Φgyűrű = 0, ahonnan a gyűrűben folyó áram értéke
                                                                 MI
                                                          i=−       .
                                                                 L
                A szolenoidon áthaladó mágneses ﬂuxus értéke:

                                                 Φszolenoid = L0 · I + M · i,

                ahol L0 a szolenoid öninduktivitása. Behelyettesı́tve a gyűrű áramát, a következőt
                kapjuk:                                              
                                                                 M2
                                            Φszolenoid = L0 −           I.
                                                                  L
                Láthatjuk, hogy a szolenoidon áthaladó mágneses ﬂuxus arányos a szolenoid ára-
                mával. Az arányossági tényező a szupravezető gyűrűt tartalmazó szolenoid induk-
                tivitása, mely
                                                          M2      μ2 N 2 r 4 π 2
                                               ΔL0 ≡           = 0 2
                                                            L         L
                értékkel kisebb, mint a gyűrű nélküli szolenoid öninduktivitása.


                108                                           Középiskolai Matematikai és Fizikai Lapok, 2022/2




i                                                                                                                                i


    i                                                                                                                        i
    i                                                                                                                     i

        2022.2.6 – 19:38 – 109. oldal – 45. lap                                                  KöMaL, 2022. február
i                                                                                                                             i


                      Ugyanezt az eredményt kaptuk volna, ha a számolás során nem tételezzük
                fel, hogy kezdetben a szupravezető gyűrűben nulla áram folyik. A leı́rt levezetés
                kis módosı́tással használható a szupravezető tetszőleges előélete esetén is. Ekkor i,
                Φgyűrű és Φszolenoid azt adja meg, hogy mennyivel változott meg a gyűrű árama,
                valamint a gyűrűn és a szolenoidon áthaladó mágneses ﬂuxus értéke, miközben
                a tekercs áramát nulláról I-re növeltük.

                      3. feladat. Egy felfújható strandlabda könnyű, vékony, igen hajlékony, de nem
                nyújtható műanyagból készült. Felfújt állapotában a labda majdnem pontosan gömb
                alakú, sugara 20 cm. Egy kı́sérletben a labdát űrtartalmának feléig felfújjuk levegő-
                vel, majd egy vı́zszintesen tartott, nagy kiterjedésű sı́klap segı́tségével fokozatosan
                vı́z alá nyomjuk, mı́g az teljesen el nem merül a vı́zben. Vázoljuk fel, milyen ala-
                kot vesz fel a vı́z alá nyomott labda! Ha tudjuk, határozzuk meg az alak releváns
                méreteinek számszerű értékeit is!
                                                                                               (Vigh Máté)

                      Megoldás. A feladat szövege szerint a labda anyaga igen hajlékony, de nem
                                                                                ”
                nyújtható”. Ezért az egyetlen lehetséges módszer a labda térfogatának csökkenté-
                sére, ha a labdát behorpasztjuk” (első rajz a 2. ábrán), ekkor a felület két (ugyan-
                                     ”
                olyan r sugarú) gömbfelületdarabból áll. A behorpadt gömbfelületen azonban újabb
                horpadás is lehetséges – ezúttal kifele –, ahogy az ábra második rajzán látszik. Ezt
                tetszőleges számban megismételhetjük, ı́gy akár közel sı́klapot is kialakı́thatunk,
                amely azonban a valóságban egy kicsit ráncos”, vékony, ki-behajló gömbfelszı́nda-
                                                            ”
                rabokból áll (középső rajz ).
                     Látni fogjuk, hogy ﬁzikai feltételek miatt a labda alsó és felső része is ı́gy
                fog deformálódni (negyedik rajz ). A ráncokat” (amelyek elvileg tetszőlegesen ﬁno-
                                                       ”
                mak lehetnek, de egy valódi kı́sérletben azért látszanak) már nem ábrázolva egy
                gömbövet kapunk (utolsó rajz a 2. ábrán).




                                                              2. ábra

                      Eddig csak a geometria által lehetséges deformációkról beszéltünk. Ezután
                meg kell vizsgálnunk, hogy az adott kı́sérletben a ﬁzikai feltételek következtében
                milyen alak jön létre. A labda tetejét a sı́klap nyomja le a vı́z alá, ı́gy ott a labda
                rásimul a felületre. Érdekesebb kérdés a labda aljának alakja: mivel a labda igen
                                                                                                       ”
                hajlékony”, a gyűrt felületen olyan alakot vesz fel, hogy a belső és a külső nyomás
                mindenhol azonos legyen. A labdán belül mindenhol azonos a légnyomás (a levegő
                csekély aerosztatikus nyomását elhanyagoljuk), a vı́z nyomása viszont a mélységgel
                változik (p = p0 + gh), ı́gy a labda aljának is vı́zszintes sı́klapnak kell lennie
                (3. ábra).
                      A labda alakja tehát egy vı́zszintes sı́klapokkal határolt gömböv.


                Középiskolai Matematikai és Fizikai Lapok, 2022/2                                      109


i                                                                                                                             i


    i                                                                                                                     i
    i                                                                                                                       i

        2022.2.6 – 19:38 – 110. oldal – 46. lap                                                    KöMaL, 2022. február
i                                                                                                                               i




                                                           3. ábra

                                                             A feladat második részében meg kell hatá-
                                                        roznunk a gömböv méreteit. A jelölések a 4. áb-
                                                        rán láthatók.
                                                             Vizsgáljuk először a geometriai feltételt:
                                                        a gömböv térfogata a gömb térfogatának fele.
                                                        (A gömböv térfogata képletgyűjteményekből ki-
                                                        kereshető, vagy integrálással könnyen kiszámı́t-
                                                        ható.)

                             4. ábra                                             π 3           2π 3
                                                              πr2 (h1 + h2 ) −     (h + h32 ) =    r .
                                                                                  3 1            3

                A numerikus megoldáshoz érdemes bevezetni az x1 = hr1 és x2 = hr2 dimenziótlan
                változókat, ı́gy áttekinthetőbbé válik az egyenlet.
                (3)                          x31 + x32 − 3(x1 + x2 ) + 2 = 0.
                Ez egy kétismeretlenes (harmadfokú) egyenlet. A másik egyenletet a ﬁzikai feltétel
                matematikai megfogalmazásával kapjuk meg. Erre két lehetséges utat mutatunk
                meg.
                     I. megoldás. Az erőegyensúly alapján: a lapra kifejtett nyomóerő megegyezik
                a labdára ható felhajtóerővel.
                                                                  2r3 π
                                                  (p − p0 )r12 π =      g,
                                                                    3
                ahol p a labdában lévő nyomás, p0 a külső légnyomás, r1 a gömböv felső lapjának
                sugara,  pedig a vı́z sűrűsége.
                    Ahogy a 3. ábrán is látható, a labda belsejében a levegő nyomása a külső lég-
                nyomás és a h magasságú vı́zoszlop hidrosztatikai nyomásának összegével egyenlő:
                                           p = p0 + gh = p0 + g(h1 + h2 ).
                Ezt beı́rva az előző egyenletbe, és kihasználva, hogy r12 = r2 − h21 , megkapjuk a ﬁ-
                zikai feltételt:
                                                                     2r3 π
                                           g(h1 + h2 ) r2 − h21 π =         g,
                                                                         3

                110                                          Középiskolai Matematikai és Fizikai Lapok, 2022/2




i                                                                                                                               i


    i                                                                                                                       i
    i                                                                                                                     i

        2022.2.6 – 19:38 – 111. oldal – 47. lap                                                  KöMaL, 2022. február
i                                                                                                                             i


                amelyet a korábban bevezetett dimenziótlan változókkal ismét áttekinthetőbb alak-
                ra hozhatunk:

                                                                      2
                (4)                                 (x1 + x2 ) 1 − x21 = .
                                                                        3

                Ezután a kétismeretlenes (3)–(4) egyenletrendszert kell megoldanunk.
                      Az egyenletrendszert legegyszerűbb numerikusan, próbálgatással” megoldani.
                                                                                 ”
                x1 és x2 értéke 0 és 1 között lehet, értéküket durván megbecsülve behelyettesı́thet-
                jük az egyenletekbe, majd az értékeket úgy ﬁnomı́tjuk, hogy az egyenletek minél
                inkább teljesüljenek. Az egyenletrendszer megoldása (itt 3 értékes jegyre, de termé-
                szetesen a versenyen kevésbé pontos megoldás is elég lett volna) és az összenyomott
                labda 4. ábrán látható geometriai paraméterei:

                                                  x1 = 0,235,      x2 = 0,470,

                                                 h1 = 4,7 cm,      h2 = 9,4 cm,

                                                    h = h1 + h2 = 14,1 cm,

                                                r1 = 19,4 cm,      r2 = 17,6 cm.

                    II. megoldás. Energetikai megfontolás alapján: a kiszorı́tott vı́z tömegközép-
                pontja a lehető legmagasabban legyen.
                    A gömböv tömegközéppontjának távolsága a laptól (a gömböv tömegközép-
                pontjának helye képletgyűjteményekből kikereshető, vagy integrálással könnyen
                meghatározható):
                                                                        
                                               3 h22 − h21     3 h42 − h41
                                          d=                 −               ,
                                                    4r             8r3
                a korábbi módon dimenziótlanı́tva
                                                                          
                                              d  3 x22 − x21     3 x42 − x41
                                            δ= =               −               .
                                              r        4               8

                      Ezután δ minimumát keressük, ﬁgyelembe véve a korábban felı́rt

                                                x31 + x32 − 3(x1 + x2 ) + 2 = 0

                geometriai feltételt is.
                      Legegyszerűbben ismét próbálgatással” oldhatjuk meg a feladatot. Eszerint
                                             ”

                                    δmin = 0,343,      ha x1 = 0,235      és x2 = 0,470,

                az előző megoldással összhangban.


                Középiskolai Matematikai és Fizikai Lapok, 2022/2                                       111


i                                                                                                                             i


    i                                                                                                                     i
    i                                                                                                                        i

        2022.2.6 – 19:38 – 112. oldal – 48. lap                                                     KöMaL, 2022. február
i                                                                                                                                i


                                                 A tömegközéppont minimális távolsága a laptól
                                             dmin = rδmin = 6,9 cm.
                                                    Megjegyzés. Több versenyző is észrevette, hogy a feladat
                                             ekvivalens azzal, hogy a labdát félig megtöltjük vı́zzel, és egy
                                             sima, vı́zszintes felületre helyezzük. Ilyenkor értelemszerűen
                                             a vı́z tömegközéppontjának a lehető legalacsonyabban kell len-
                                             nie.
                                                                              ?
                        5. ábra
                      Az ünnepélyes eredményhirdetésre és dı́jkiosztásra 2021. november 26-án dél-
                után került sor az ELTE TTK Eötvös-termében. Meghı́vást kaptak az 50 és 25 évvel
                ezelőtti Eötvös-verseny nyertesei is. A 25 évvel ezelőtti dı́jazottak közül Tóth Gábor
                Zsolt jött el – ő pár mondatban beszélt a pályafutásáról.
                      Ezután következett a 2021. évi verseny feladatainak és megoldásainak bemu-
                tatása. Az 1. feladat megoldását Gnädig Péter, a 2. feladatét Széchenyi Gábor,
                a 3. feladatét Vankó Péter ismertette.
                    Az esemény végén került sor az eredményhirdetésre. A dı́jakat Ormos Pál,
                az Eötvös Loránd Fizikai Társulat elnöke adta át.
                     Egyetlen versenyző sem oldotta meg mindhárom feladatot, ı́gy a versenybi-
                zottság nem adott ki első dı́jat.
                     Az első feladat helyes megoldásáért, valamint a második és harmadik feladat-
                ban elért lényeges eredményekért második dı́jat nyert Tóth Ábel, az ELTE ﬁzika
                BSc szakos hallgatója, aki a Budapesti Fazekas Mihály Gyakorló Általános Iskola
                és Gimnáziumban érettségizett Schramek Anikó tanı́tványaként.
                     Az első feladat helyes, vagy lényegében helyes megoldásáért, valamint a máso-
                dik vagy a harmadik feladatban elért lényeges eredményekért harmadik dı́jat nyert
                Kertész Balázs Zoltán, a Debreceni Református Kollégium Dóczy Gimnáziumának
                12. osztályos tanulója, Tófalusi Péter tanı́tványa; Szépvölgyi Gergely, a Békásme-
                gyeri Veres Péter Gimnázium 12. osztályos tanulója, Székely György és Rakovszky
                Andorás tanı́tványa, valamint Takács Bendegúz, a Budapesti Fazekas Mihály Gya-
                korló Általános Iskola és Gimnázium 12. osztályos tanulója, Nagy Piroska Mária
                és Csefkó Zoltán tanı́tványa.
                     Az első feladat helyes, vagy lényegében helyes megoldásáért, valamint a máso-
                dik feladatban elért részeredményekért dicséretet kapott Bonifert Balázs, az ELTE
                ﬁzika BSc szakos hallgatója, aki a Baár-Madas Református Gimnázium, Általános
                Iskola és Diákotthonban érettségizett Horváth Norbert tanı́tványaként; Csordás
                Kevin, a Bajai III. Béla Gimnázium 12. osztályos tanulója, Lakner Attila és Pálfal-
                vi László tanı́tványa; Dékány Csaba, a győri Révai Miklós Gimnázium és Kollégium
                12. osztályos tanulója, Juhász Zoltán tanı́tványa; Fonyi Máté Sándor, a BME ﬁzika
                BSc szakos hallgatója, aki a szolnoki Verseghy Ferenc Gimnáziumban érettségizett
                Veres Dénes tanı́tványaként; Gurzó József, a Budapesti Fazekas Mihály Gyakorló
                Általános Iskola és Gimnázium 12. osztályos tanulója, Nagy Piroska Mária tanı́t-
                ványa, valamint Toronyi András, a Baár-Madas Református Gimnázium, Általános
                Iskola és Diákotthon 12. osztályos tanulója, Horváth Norbert tanı́tványa.


                112                                           Középiskolai Matematikai és Fizikai Lapok, 2022/2




i                                                                                                                                i


    i                                                                                                                        i
