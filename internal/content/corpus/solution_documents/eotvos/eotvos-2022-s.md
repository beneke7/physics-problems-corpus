---
id: solution-document-eotvos-2022-s
source: eotvos
kind: official_solution_document
language: hu
solution_type: official
source_pdf: cache/phoxiv/eotvos/2022_S.pdf
extraction_method: pdftotext-layout
mapped_problems: [eotvos-2022-chain-cylinder, eotvos-2022-ion-diffusion, eotvos-2022-resistor-magnetic]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/eotvos/2022_S.pdf."
---

i                                                                                                                    i

        2023.2.4 – 16:39 – 105. oldal – 41. lap                                                 KöMaL, 2023. február
i                                                                                                                            i




                        Beszámoló a 2022. évi Eötvös-versenyről


                      Az Eötvös Loránd Fizikai Társulat 2022. évi Eötvös-versenye október 14-én
                délután 3 órai kezdettel tı́z magyarországi helyszı́nen1 került megrendezésre. Ezért
                külön köszönettel tartozunk mindazoknak, akik ebben szervezéssel, felügyelettel
                a segı́tségünkre voltak. A versenyen a három feladat megoldására 300 perc áll
                rendelkezésre, bármely ı́rott vagy nyomtatott segédeszköz használható, de (nem
                programozható) zsebszámológépen kı́vül minden elektronikus eszköz használata
                tilos. Az Eötvös-versenyen azok vehetnek részt, akik vagy középiskolai tanulók, vagy
                a verseny évében fejezték be középiskolai tanulmányaikat. Összesen 60 versenyző
                adott be dolgozatot, 21 egyetemista és 39 középiskolás.
                      Ismertetjük a feladatokat és azok megoldását.

                                                                 ?
                      1. feladat. Vı́zszintes tengelyű, rögzı́tett hengerre
                egy vékony, hajlékony, m tömegű láncot helyezünk az áb-
                rán látható módon, és nyugalomban tartjuk. A henger és
                a lánc közötti súrlódás elhanyagolható.
                     a) Mekkora gyorsulással indul el a lánc, ha szaba-
                don engedjük?
                     b) Mekkora a láncot feszı́tő erő legnagyobb értéke
                az elengedés utáni pillanatban?
                                                                                         (Gelencsér Jenő)

                     Megoldás. a) Számı́tsuk ki a lánc gyorsulását az indulás pillanatában. Ezt
                többféle módszerrel is megtehetjük.
                     I. módszer. Ha a lánc a gyorsulással indul, ak-
                kor egy nagyon rövid t időtartam alatt az elmozdulá-
                sa d = a2 t2 , a sebessége pedig v = at lesz. Alkalmazzuk
                a mechanikai energiamegmaradás törvényét erre a moz-
                gásra (1. ábra).
                     A lánc mozgási energiája (annak megváltozása)

                                               1       1
                              ΔEmozgási =       mv 2 = ma2 t2 .
                                               2       2
                                                                                            1. ábra
                A helyzeti energia változását legegyszerűbben úgy kaphatjuk meg, hogy gondo-
                latban levágunk a lánc felső végéről egy d hosszúságú darabot, és azt a lánc alsó

                  1
                      Részletek a verseny honlapján: http://eik.bme.hu/~vanko/fizika/eotvos.htm


                Középiskolai Matematikai és Fizikai Lapok, 2023/2                                     105


i                                                                                                                            i


    i                                                                                                                    i
    i                                                                                                                     i

        2023.2.4 – 16:39 – 106. oldal – 42. lap                                                  KöMaL, 2023. február
i                                                                                                                             i


                végéhez ragasztjuk”. Ennek a darabkának a tömege
                         ”
                                                           m
                                                  Δm = 1      d,
                                                         2
                                                           Rπ
                és mivel R távolsággal mélyebbre kerül,
                                                                   2mg     mg 2
                                     ΔEhelyzeti = −Δm gR = −           d=−   at .
                                                                    π      π
                Az energiamegmaradás tétele szerint
                                              ΔEmozgási + ΔEhelyzeti = 0,
                ahonnan                                      
                                                  1         2
                                                    mat2 a − g = 0.
                                                  2         π
                Mivel mat2 = 0, a keresett gyorsulás:
                                                             2
                                                         a=    g.
                                                             π
                                                 II. módszer. Ismert (vagy táblázatokban megtalál-
                                            ható), hogy az R sugarú, 2α nyı́lásszögű homogén körı́v
                                            P tömegközéppontja a kör O középponttól

                                                                           sin α
                                                                     s=          R
                                                                             α

                                            távolságra van (2. ábra). Esetünkben α = π/4, ı́gy
                         2. ábra
                                                         √
                                                           8
                                                    s=       R ≈ 0,9R.
                                                          π
                      Az éppen meginduló láncot tekinthetjük merev testnek, amelynek az O pontra
                vonatkoztatott tehetetlenségi nyomatéka Θ = mR2 . A láncra (merev testre) ható
                külső erők forgatónyomatéka csak a nehézségi erőből származik, nagysága
                                                                 √ √
                                                      π            8 2         2
                                        M = mgs sin = mgR                  = mgR.
                                                      4           π 2         π
                (A láncra hatnak még a henger által kifejtett, helyről helyre változó kényszererők
                is, ezen erők azonban – súrlódásmentes esetben – mindenhol sugárirányúak, tehát
                az O pontra vonatkoztatott forgatónyomatékuk nulla.)
                      A forgómozgás alaptörvénye szerint a test szöggyorsulása
                                                    M   2 mgR   2 g
                                               β=     =       =     ,
                                                    Θ   π mR2   π R
                a lánc kerületi” gyorsulása pedig
                       ”
                                                                  2
                                                       a = Rβ =     g.
                                                                  π


                106                                        Középiskolai Matematikai és Fizikai Lapok, 2023/2




i                                                                                                                             i


    i                                                                                                                     i
    i                                                                                                                      i

        2023.2.4 – 16:39 – 107. oldal – 43. lap                                                   KöMaL, 2023. február
i                                                                                                                              i


                      b) A láncot feszı́tő K erő a lánc végeinél nulla, közöt-
                tük pedig valahol maximuma van. Ezt a helyet, valamint
                a maximális feszı́tőerő nagyságát keressük. A lánc egy-
                egy kicsiny, ϕ szöggel jellemezhető helyen lévő darabká-
                jára ható nehézségi erő önmagában (éppen úgy, mint egy
                ϕ hajlásszögű lejtőn) g sin ϕ gyorsulást hozna létre, ami
                a lánc felső részén kisebb, az aljának közelében nagyobb,
                mint az egész lánc a gyorsulása (3. ábra).
                     Emiatt a felső részeken a láncszemekre ható feszı́tő-                3. ábra
                erők különbsége általában nullától különböző, hiszen egy Δm tömegű, kicsiny lánc-
                darabka mozgásegyenlete
                                                                                 2
                                     Kelőre − Khátra + Δm g sin ϕ = Δm a = Δm g ,
                                                                                 π
                vagyis                                                                
                                                                              2
                                          Kelőre = Khátra + Δm · g            − sin ϕ .
                                                                              π
                Látható, hogy a lánc felső végétől (ϕ = 0 helytől) elindulva mindaddig, amı́g

                                                      2
                                            sin ϕ <     ,   addig Kelőre > Khátra ,
                                                      π
                vagyis a K(ϕ) kényszererő (a láncot feszı́tő erő) ϕ növekvő függvénye. Ha viszont

                                                      2
                                            sin ϕ >     ,   akkor      Kelőre < Khátra ,
                                                      π
                tehát ebben a tartományban a K(ϕ) kényszererő ϕ csökkenő függvénye. Ezek
                szerint a kényszererő
                                                            2
                                            ϕ0 = arcsin       ≈ 0,69 radián ≈ 39,5◦
                                                            π
                szögnél a legnagyobb. Itt

                                     Kelőre = Khátra = Kmax .

                    Kérdés, hogy mekkora Kmax értéke. Ezt a lánc felső
                (ϕ ⩽ ϕ0 szögekkel jellemzett) darabjának forgási mozgás-
                egyenletéből kaphatjuk meg (4. ábra).
                     A kérdéses láncdarab tömege
                                                                                                4. ábra
                                                    m
                                            m0 = 1 ϕ0 ,
                                                 2
                                                   π

                a tehetetlenségi nyomatéka
                                                            Θ 0 = m0 R 2 ,


                Középiskolai Matematikai és Fizikai Lapok, 2023/2                                       107


i                                                                                                                              i


    i                                                                                                                      i
    i                                                                                                                          i

        2023.2.4 – 16:39 – 108. oldal – 44. lap                                                       KöMaL, 2023. február
i                                                                                                                                  i


                tömegközéppontjának az O ponttól mért távolsága

                                                              sin ( 12 ϕ0 )
                                                       s0 =       1
                                                                              R,
                                                                    ϕ
                                                                  2 0

                és a tömegközéppont távolsága az O ponton átmenő függőleges egyenestől
                                                                     
                                                                  1
                                                    0 = s0 sin     ϕ0 .
                                                                  2
                A forgómozgás alapegyenlete szerint
                                                                                   a
                                                  Kmax R + m0 g0 = Θ0               ,
                                                                                   R
                ahonnan a fentebb kiszámı́tott értékek behelyettesı́tése után kapjuk, hogy
                                                                    
                                                   4        4   2 ϕ0
                                 Kmax = mg            ϕ0 − sin           ≈ 0,13 mg.
                                                  π2       π       2

                    Ugyanezt az eredményt megkaphatjuk a munkatételből is, ha felı́rjuk, hogy
                egy nagyon rövid időtartam alatt a nehézségi erő munkájának és a K kényszererő
                munkájának összege a kezdetben álló láncdarab mozgási energiájával lesz egyenlő.
                     A láncot feszı́tő erőt a fentiek mintájára tetszőleges pontban (tetszőleges
                ϕ szögre) kiszámı́thatjuk:
                                                                          
                                                          4       4    2 ϕ
                                            K(ϕ) = mg        ϕ − sin          ,
                                                          π2      π      2

                és ábrázolhatjuk is (5. ábra).




                                                              5. ábra

                      2. feladat. Egy téglatest alakú gáztartályt egy kétrétegű, ﬁnom szövésű fémhá-
                ló oszt két részre; a két térrész térfogatának aránya 1 : 2. A fémháló két rétege
                a közöttük lévő, igen keskeny rés miatt nem ér össze. A tartályban egyszeresen
                pozitı́v töltésű ionokból álló gáz található. A hőmérsékletet mindkét térrészben ál-
                landó, 1200 K értéken tartjuk. Milyen polaritású és mekkora egyenfeszültséget kell


                108                                             Középiskolai Matematikai és Fizikai Lapok, 2023/2




i                                                                                                                                  i


    i                                                                                                                          i
    i                                                                                                                            i

        2023.2.4 – 16:39 – 109. oldal – 45. lap                                                         KöMaL, 2023. február
i                                                                                                                                    i


                kapcsolni a fémháló rétegei közé ahhoz, hogy hosszú idő után a két térrészben talál-
                ható ionok száma megegyezzen? (A gáz elég ritka ahhoz, hogy a részecskék közötti
                kölcsönhatás elhanyagolható legyen, az átlagos szabad úthossz pedig jóval nagyobb
                a fémháló rétegeinek távolságánál. Az ionok töltése állandó.)
                                                                                                       (Vigh Máté)

                      I. megoldás. Ez a gondolatmenet a kinetikus gázelméleten alapul. Elöljáróban
                összefoglalunk néhány fontosabb tudnivalót, amit a megoldás során fel fogunk
                használni2 .
                      Ismert, hogy adott T hőmérsékletű gázban a részecskék sebességének egy adott (pél-
                dául x) irányba eső vetülete nem mutat egyenletes eloszlást: kisebb sebességértékek előfor-
                dulása gyakoribb, mı́g a nagy értékek kevésbé valószı́nűek. Ezt az előfordulási gyakoriságot
                az f (vx ) Maxwell–Boltzmann-féle eloszlásfüggvénnyel lehet jellemezni, amely megadja,
                hogy a részecskék mekkora hányada rendelkezik egy adott (vx , vx + dvx ) intervallumba
                eső sebességkomponenssel:

                           a (vx , vx + dvx ) tartománynak megfelelő részecskék száma
                                                                                           = f (vx )dvx .
                                                összes részecske száma

                Ebből a meghatározásból következik, hogy
                az f (vx ) függvény görbe alatti területe tet-
                szőleges (tehát nem csak inﬁnitezimálisan ki-
                csiny) sebességintervallumon megadja az ab-
                ba a tartományba eső részecskék számának
                arányát a teljes részecskeszámhoz viszonyı́tva
                (lásd a 6. ábrát). Ennek értelmében az f (vx ) el-
                oszlásfüggvény teljes görbe alatti területe szük-
                ségszerűen 1 (más szóval a függvény normált).
                       Az f (vx ) függvény alakját egy C normálá-                      6. ábra
                si tényező erejéig az x irányú mozgáshoz tarto-
                zó mvx2 /2 energia határozza meg a Boltzmann-faktor alapján:
                                                                            2
                                                                          mvx
                                                          f (vx ) = Ce− 2kT ,

                amelyet normáleloszlásnak vagy Gauss-eloszlásnak neveznek.

                       Ezután térjünk rá a konkrét feladat megoldására. A koordináta-rendszerünk
                x tengelyét válasszuk a fémháló sı́kjára merőlegesen, a kisebb térrész felől a nagyobb
                felé mutató irányban. A kisebb térrészre vonatkozó ﬁzikai mennyiségeket jelöljük
                1-es indexszel, mı́g a nagyobb térrészhez tartozó mennyiségeket 2-es indexszel.
                       Ha a fémháló két rétege közé nem kapcsolunk feszültséget, a gáz egyenletesen
                tölti ki az egész tartályt, azaz a két térrészben a részecskeszám-sűrűség (n) megegye-
                zik, az ionok számának aránya pedig a térfogatok arányával egyezik meg. A kı́vánt
                végállapotban azonban a két térrész részecskeszáma egyenlő, ı́gy a részecskeszám-
                sűrűségek viszonya:
                                                              n1 = 2n2 .
                   2
                       Az Eötvös-versenyen bármely nyomtatott szakirodalom szabadon használható.


                Középiskolai Matematikai és Fizikai Lapok, 2023/2                                             109


i                                                                                                                                    i


    i                                                                                                                            i
    i                                                                                                                          i

        2023.2.4 – 16:39 – 110. oldal – 46. lap                                                       KöMaL, 2023. február
i                                                                                                                                  i


                Ez az inhomogén elrendeződés olyan polaritású elektromos térrel tartható fenn,
                amelyben a térerősség akadályozza a pozitı́v töltésű ionok áramlását a kisebb
                térrészből a nagyobb térrész irányába. A sı́kkondenzátornak tekinthető fémhálónak
                tehát a kisebb térrész felőli oldala lesz negatı́v töltésű, a nagyobb térrész felé eső
                oldala pedig pozitı́v polaritású.
                       A feladat szövege szerint a részecskék átlagos szabad úthossza jóval nagyobb
                a fémháló rétegeinek távolságánál, ezért a kondenzátor” belsejében az ionok egy-
                                                                    ”
                mással nem (pontosabban elhanyagolhatóan kis eséllyel) ütköznek, kizárólag az itt
                uralkodó elektromos mező hatása alatt állnak. A nagyobb térrészből a fémháló ré-
                tegei közé belépő ionok az elektromos tér hatására felgyorsulnak, majd a kisebb
                térrészbe érve az ott lévő részecskékkel ütközve termalizálódnak. Ebben az irány-
                ban tehát az ionok akadály nélkül áthaladnak a hálón. A kisebb térrész felől belépő
                ionok azonban csak akkor tudnak áthaladni a fémhálón, ha az x irányú sebes-
                ségkomponensük nagyobb egy bizonyos v ∗ értéknél, ellenkező esetben az elektro-
                mos tér visszafordı́tja őket. Az ilyen irányú áthaladáshoz szükséges határsebességet
                a munkatételből kaphatjuk meg:

                                                                                 
                                                 1                                   2eU
                                        −eU = 0 − mv ∗2            −→       ∗
                                                                           v =           ,
                                                 2                                    m

                ahol e az elemi töltés, U pedig a fémhálóra kapcsolt feszültség. Itt is igaz, hogy
                a vx > v ∗ feltételt teljesı́tő ionok a nagyobb térrészbe érve termalizálódnak. Hogy
                pontosan mekkora az a v ∗ sebesség (és mekkora az ehhez tartozó U feszültség),
                amelynél a két térfélben a részecskék száma azonos marad, azt vizsgáljuk meg
                részletesebben!
                     Tekintsük a kisebb térrészben lévő részecskék közül azokat, melyeknek x irányú
                sebességkomponense a rács felé mutat és a (vx , vx + dvx ) tartományba esik. Ezek
                az ionok az eloszlásfüggvény deﬁnı́ciója alapján n1 f (vx ) dvx térfogati sűrűségben
                helyezkednek el a kisebb térrészben. Kicsiny Δt időtartam alatt a részecskék ezen
                csoportjából csak azok az ionok érnek el a fémhálóig, melyek legfeljebb vx Δt tá-
                volságra vannak attól. A fémháló teljes A területére tehát Δt idő alatt a megadott
                sebességtartományban

                                                    n1 f (vx )dvx · Avx Δt

                                                       számú ion érkezik be a kisebbik térrész fe-
                                                       lől. A fémhálóra kapcsolt feszültség miatt csak
                                                       a vx > v ∗ feltételt teljesı́tő részecskék jutnak át
                                                       a nagyobb térrészbe (7. ábra), ezért az átjutó io-
                                                       nok számát a sebesség szerinti integrálként a kö-
                                                       vetkezőképp fejezhetjük ki:
                             7. ábra

                                                       ∞
                                              ΔN1 =         n1 f (vx ) · Avx Δt dvx .
                                                      v∗


                110                                             Középiskolai Matematikai és Fizikai Lapok, 2023/2




i                                                                                                                                  i


    i                                                                                                                          i
    i                                                                                                                          i

        2023.2.4 – 16:39 – 111. oldal – 47. lap                                                       KöMaL, 2023. február
i                                                                                                                                  i


                Ha ezt a mennyiséget elosztjuk az A területtel és a Δt időtartammal, akkor meg-
                kapjuk a kisebb térrészből a nagyobb térrészbe belépő részecskeáram-sűrűséget:
                                                                          ∞
                                                        ΔN1
                                                   j1 =     = n1               f (vx )vx dvx .
                                                        AΔt
                                                                         v∗

                Teljesen hasonlóan számolhatjuk ki a nagyobb térrészből a kisebbe átlépő részecs-
                kék áramsűrűségét, azzal a különbséggel, hogy ilyen irányban minden olyan részecs-
                ke átjut a fémhálón, amelynek x irányú sebességkomponense negatı́v:

                                                                    0
                                                          j2 = n2        f (vx )vx dvx .
                                                                 −∞

                Látható, hogy j2 negatı́v, hiszen a negatı́v x tengely irányába történő részecske-
                áramlást ı́r le. Állandósult állapotban (lásd a 8. ábrát) a nagyobb térrészbe belépő
                és onnan kilépő részecskék áramsűrűségének előjeles összege zérus:

                                                                j1 + j2 = 0.




                                                                    8. ábra

                     Felhasználva f (vx ) korábban felı́rt alakját:

                                         ∞          mv 2
                                                                           0          2
                                                                                     mvx
                                                   − 2kTx
                                    n1        Ce            vx dvx + n2         Ce− 2kT vx dvx = 0.
                                         v∗                               −∞


                Az integrálok kiszámı́tásához érdemes áttérni a w = mvx2 /(2kT ) változóra. Ennek
                segı́tségével
                                                              m
                                                      dw =        vx dvx ,
                                                              kT
                ı́gy a fenti egyenlet egyszerűsı́tések és az integrálási határok megváltoztatása után
                ı́gy ı́rható:
                                                ∞                 0
                                            n1     e dw + n2 e−w dw = 0.
                                                     −w

                                                     eU                    ∞
                                                     kT




                Középiskolai Matematikai és Fizikai Lapok, 2023/2                                           111


i                                                                                                                                  i


    i                                                                                                                          i
    i                                                                                                                                 i

        2023.2.4 – 16:39 – 112. oldal – 48. lap                                                              KöMaL, 2023. február
i                                                                                                                                         i


                Az integrálokat most már elvégezhetjük:
                                                             ∞                     0
                                               n1 [−e−w ] eU + n2 [−e−w ]∞ = 0.
                                                             kT


                A primitı́v függvényeket a határokon kiértékelve kapjuk:
                                                                  eU
                                                       n1 e− kT − n2 = 0,

                ahonnan a keresett U feszültség:
                                                                 
                                                 kT          n1            kT
                                           U=       ln                 =      ln 2 ≈ 72 mV.
                                                  e          n2             e

                       Megjegyzés. Voltak versenyzők, akik a ﬁzikai jelenséget részletesen átlátták, az áram-
                sűrűségekre felı́rt integrálokat azonban nem számolták ki, ehelyett észszerű becsléseket
                végeztek. A Versenybizottság ezeket a közelı́téseket is értékelte.

                      II. megoldás. Az állandósult állapot kialakulása után a kisebb térrészben két-
                szer akkora lesz a nyomás, mint a nagyobb térrészben, hiszen a hőmérséklet és
                részecskeszám ugyanakkora, a térfogatok aránya viszont 1 : 2:

                                                              p1 = 2p2 .

                Végezzük el a következő gondolatkı́sérletet. A kisebb térrészben vegyünk körbe ΔN
                számú iont egy könnyű ballonnal, ahol ΔN sokkal kisebb a teljes gázmennyiség
                                                    részecskeszámánál. Jelölje a ballon kezdeti térfo-
                                                    gatát ΔV1 . Vigyük át gondolatban ezt a ballont
                                                    a másik térrészbe, majd engedjük ott izotermi-
                                                    kusan kitágulni akkora ΔV2 térfogatig, ameddig
                                                    a bezárt gáz nyomása p1 értékről p2 -re csökken
                                                    (9. ábra). Számı́tsuk ki, mekkora munkát kell vé-
                             9. ábra               geznünk a folyamat közben!
                       Amikor a ΔV1 térfogatú ballont a kisebb térrészből eltávolı́tjuk, a térrészben
                lévő p1 nyomású gáz igyekszik a ballont kilökni” onnan. Ennek megakadályozására
                                                            ”
                nekünk negatı́v,
                                                      W1 = −p1 ΔV1
                munkát kell végeznünk. Ezután a fémháló elektromos mezőjén a térerősséggel el-
                lentétes irányban kell elmozdı́tani az eΔN össztöltésű gázmennyiséget, ez további

                                                         W2 = eΔN · U

                munkát igényel. Amikor a ballont izotermikusan kitágı́tjuk a végső ΔV2 térfogatra,
                az általunk végzett munka negatı́v, értéke

                                                                                ΔV2
                                                    W3 = −ΔN kT ln                  .
                                                                                ΔV1

                112                                                    Középiskolai Matematikai és Fizikai Lapok, 2023/2




i                                                                                                                                         i


    i                                                                                                                                 i
    i                                                                                                                    i

        2023.2.4 – 16:39 – 113. oldal – 49. lap                                                 KöMaL, 2023. február
i                                                                                                                            i


                Nem szabad megfeledkeznünk arról sem, hogy a nagyobb térrészben ΔV2 térfogatú
                helyet kell szorı́tani az oda átvitt gázmennyiségnek, ehhez

                                                          W4 = p2 ΔV2

                munka szükséges. A képzeletbeli folyamat során tehát összesen

                                                                                 ΔV2
                                Wteljes = −p1 ΔV1 + eΔN · U − ΔN kT ln               + p2 ΔV2
                                                                                 ΔV1

                munkát végeztünk. Vegyük észre, hogy az első és az utolsó tag kiejti egymást, hiszen
                az ideális gázok állapotegyenlete szerint

                                          p1 ΔV1 = ΔN kT,              p2 ΔV2 = ΔN kT.

                Szintén ebből következik, hogy a ballon végső és kezdeti térfogatának aránya kife-
                jezhető a nyomások arányával:
                                                      ΔV2      p1
                                                           = .
                                                      ΔV1      p2
                A teljes munkavégzés tehát ı́gy ı́rható:
                                                                                 p1
                                             Wteljes = eΔN · U − ΔN kT ln           .
                                                                                 p2

                Ha ez a munka negatı́v lenne, akkor a folyamat magától végbemenne, azaz a kis
                gázmennyiség átjutna a kisebb térrészből a nagyobb térrészbe. Ellenkező esetben,
                ha a munka előjele pozitı́v lenne, a folyamat az ellentétes irányban menne végbe
                spontán módon. Mivel stacionárius állapotban egyik sem történik meg, Wteljes
                szükségképpen zérus:
                                                                    p1
                                            eΔN · U − ΔN kT ln         = 0.
                                                                    p2
                A mozgatott gázmennyiség ΔN részecskeszámával leoszthatunk, majd közvetlenül
                megkapjuk az                           
                                              kT       p1      kT
                                           U=      ln       =       ln 2
                                               e       p2       e
                eredményt, amely megegyezik az I. megoldás eredményével.

                     III. megoldás. Vegyük észre, hogy a megoldás, amit kaptunk, átrendezhető
                a következő alakba:
                                            n2      p2      eU     ΔE
                                                 =     = e− kT = e− kT ,
                                            n1      p1
                ahol ΔE a két térrész közötti (elektrosztatikus) potenciális energia különbsége.
                Ugyanerre az eredményre jutunk, ha átrendezzük a jól ismert barometrikus ma-
                                                                                    ”
                gasságformula” képletét:
                                                     gΔh  mgΔh
                                             p2    −               ΔE
                                                = e p1 = e− kT = e− kT ,
                                             p1

                Középiskolai Matematikai és Fizikai Lapok, 2023/2                                     113


i                                                                                                                            i


    i                                                                                                                    i
    i                                                                                                                         i

        2023.2.4 – 16:39 – 114. oldal – 50. lap                                                      KöMaL, 2023. február
i                                                                                                                                 i


                ahol a gáz sűrűsége, g a nehézségi gyorsulás, Δh a magasságkülönbség, m a ré-
                szecskék tömege, és ΔE itt is a két helyzet közötti (gravitációs) potenciális energia
                különbsége.
                      Ha nem a nagy szabad úthossz” közelı́tését vizsgálnánk, a két fémháló között
                                 ”
                a nyomás ugyanúgy változna, mint a barometrikus magasságformula” izotermikus
                                                         ”
                légoszlopában. Az mg nehézségi erő helyére az eE elektromos erő kerülne.
                                                              ΔE
                       Mindkét esetben megjelenik az e− kT Boltzmann-tényező. Ennek magyarázata
                az, hogy a gázrészecskéket energetikai szempontból jellemző (vx , vy , vz ) sebesség-
                komponensek mellett a feladatbeli rendszerben megjelenik még egy szabadsági fok”
                                                                                            ”
                is: az, hogy a részecske melyik térfélben helyezkedik el. A nagyobb (2-es számú)
                térrészben az ionok potenciális energiája ΔE = eU értékkel magasabb, mint a ki-
                sebb (1-es számú) térrészben, ezért az ionok megtalálási valószı́nűség-sűrűségének
                                                                                eU
                (vagy az azzal arányos részecskesűrűségek) aránya e− kT .

                   Ezzel a gondolatmenettel a megoldás – megfelelő indoklással – egyetlen sorban
                megkapható.

                                                               3. feladat. Egyenletes vastagságú ellenállás-
                                                         huzalból r és 2r sugarú karikákat készı́tünk, és
                                                         azokat egy sı́kban, koncentrikusan helyezzük el.
                                                         A karikákat két helyen, ugyanabból az ellenál-
                                                         láshuzalból készült, sugárirányú küllőkkel” köt-
                                                                                                ”
                                                         jük össze, az ábrán látható módon. Az elrende-
                                                         zés A pontjánál (sugárirányban) I erősségű ára-
                                                         mot vezetünk be, a B pontjából pedig (szintén
                                                         sugárirányban) elvezetjük azt. Mekkora a mág-
                                                         neses indukcióvektor nagysága a karikák O kö-
                                                         zéppontjában?
                                                                                                (Cserti József )



                      I. megoldás. A feladat megoldása során először a Kirchhoﬀ-törvények segı́t-
                ségével meghatározzuk az egyes vezetékekben folyó áramokat, majd kiszámoljuk
                az ezek által keltett mágneses teret a karikák közös O középpontjában.
                      Jelölje R az r hosszúságú vezetékdarab ellenállását! Így az egyes körı́vek, illetve
                a küllők ellenállása, az ábrán megadott jelöléseket használva, az alábbiak szerint
                adódik: R1 = πR, R2 = R4 = R, R3 = R6 = π2 R, R5 = πR, R7 = 3πR.
                      Az A pontban bevezetünk, a B pontban kivezetünk I áramot. Az egyes veze-
                tékdarabokon folyó áramokat a 10. ábra alapján vesszük fel, ahol már kielégı́tettük
                a Kirchhoﬀ-féle csomóponti törvényeket, azaz bármely csomópontra a bemenő és
                kimenő áramok összege megegyezik. Láthatjuk, hogy összesen három ismeretlen
                paraméterünk van: I1 , I2 és I3 , melyeket a huroktörvényekből határozhatunk meg.
                Írjuk fel a huroktörvényeket a külső karikára, a belső karikára, valamint a jobb alsó


                114                                            Középiskolai Matematikai és Fizikai Lapok, 2023/2




i                                                                                                                                 i


    i                                                                                                                         i
    i                                                                                                                    i

        2023.2.4 – 16:39 – 115. oldal – 51. lap                                                 KöMaL, 2023. február
i                                                                                                                            i




                                                             10. ábra


                negyed körgyűrű határára:
                                                                                             
                (1)         R1 I1 − R7 (I − I1 − I2 ) = 0       →      πR I1 − 3(I − I1 − I2 ) = 0,
                                        R3 I3 + R5 (I − I2 + I3 ) − R6 (I2 − I3 ) = 0,

                amiből

                                         πR                                   
                (2)                           I3 + 2(I − I2 + I3 ) − (I2 − I3 ) = 0,
                                          2

                adódik, és végül
                                                                      π                    
                (3)       R2 I2 + R3 I3 − R4 (I − I2 ) − R1 I1 = R I2 + I3 − (I − I2 ) − πI1 = 0.
                                                                       2

                Az ismeretlen paraméterek (I1 , I2 és I3 ) egy háromismeretlenes, lineáris egyenlet-
                rendszer megoldásaként adódnak. Tényleg szükség van ezek kiszámolására? Pró-
                báljuk megoldani a feladatot enélkül!
                     A sugárirányú bevezetések, kivezetések és küllők a Biot–Savart törvény értel-
                mében nem adnak járulékot a középpontban mért mágneses tér értékéhez. A mág-
                neses indukció nagysága egy r sugarú, I áramjárta körvezető középpontjában
                      μ
                B = 20 Ir . Ha csak egy α középponti szöggel leı́rható körı́v járulékát tekintjük
                a középpontban, az B = μ4π  0α I
                                                  r alakban adódik. Ezek alapján már kiszámı́thatjuk
                a külső, majd a belső karika által keltett mágneses teret. A külső karika esetén:

                                  μ0 I 1   3μ0 I − I1 − I2   μ0                      
                             B=          −                 =      I1 − 3(I − I1 − I2 ) = 0,
                                  8 2r      8      2r        16r



                Középiskolai Matematikai és Fizikai Lapok, 2023/2                                     115


i                                                                                                                            i


    i                                                                                                                    i
    i                                                                                                                        i

        2023.2.4 – 16:39 – 116. oldal – 52. lap                                                     KöMaL, 2023. február
i                                                                                                                                i


                azaz a mágneses indukció értéke nulla a középpontban. A levezetés utolsó lépésében
                felhasználtuk az (1) egyenletet. A belső karika esetében:
                      μ0 I3 2μ0 I − I2 + I3 μ0 I2 − I3            μ0                                    
                B=           +                   −             =        I3 + 2(I − I2 + I3 ) − (I2 − I3 ) = 0,
                       8 r      8       r           8      r       8r
                itt is nullának adódik a mágneses indukció nagysága. Az utolsó lépésben a (2)
                egyenletet használtuk fel. Összegezve, a teljes rendszer esetében is nulla a mágneses
                indukcióvektor a középpontban. Mi a mélyebb ﬁzikai oka ennek az eredménynek?
                Nézzük át a probléma általánosı́tott megoldását!

                                                          II. (általános) megoldás. A felrajzolt 11. áb-
                                                    ra csak sugárirányú küllőkből és koncentrikus ka-
                                                    rikákból áll. A sugárirányú szakaszok által keltett
                                                    mágneses tér a középpontban nulla. Tekintsünk egy
                                                    r̃ sugarú karikát, melyet a befutó sugárirányú veze-
                                                    tékek körı́vekre bontanak. Az i. körı́v középponti
                                                    szöge legyen αi , hossza i , rajta átfolyó áram Ii , el-
                                                    lenállása Ri , ezen ellenálláson eső feszültség Ui .
                                                          Az i. körı́v által keltett mágneses tér a közép-
                                                    pontban
                           11. ábra
                                                             μ0 αi I i   μ 0 i I i   μ0 rRi Ii   μ0 rUi
                                                      Bi =             =        2
                                                                                    =        2
                                                                                                =         ,
                                                              4π r̃      4π r̃        4π Rr̃      4π Rr̃2

                ami arányos a körı́ven eső feszültséggel. Összegezve az összes körı́v járulékát:
                                                            μ0 r 
                                           B=         Bi =               Ui = 0.
                                                   i
                                                             4π Rr̃2 i

                A huroktörvény alapján a feszültségesések összege a zárt karikára nulla, ı́gy a karika
                által keltett mágneses tér is nulla a középpontban. Az általános megoldás alapján
                akárhány koncentrikus kör és sugárirányú vezetékből összeállı́tott elrendezés esetén
                nulla a mágneses tér a középpontban.
                                                               ?
                      Az ünnepélyes eredményhirdetésre és dı́jkiosztásra 2022. november 25-én dél-
                után került sor az ELTE TTK Konferenciatermében. Meghı́vást kaptak az 50 és
                25 évvel ezelőtti Eötvös-verseny nyertesei is. A 25 évvel ezelőtti dı́jazottak közül
                Egri Győző, Koncz Imre és Várkonyi Péter jöttek el – ők pár mondatban beszéltek
                a pályafutásukról.
                      Ezután következett a 2022. évi verseny feladatainak és megoldásainak bemu-
                tatása. Az 1. feladat megoldását Gnädig Péter, a 2. feladatét Vankó Péter, a 3. fel-
                adatét Széchenyi Gábor ismertette.
                      Az esemény végén került sor az eredményhirdetésre. A dı́jakat Ormos Pál,
                az Eötvös Loránd Fizikai Társulat elnöke adta át.
                      Mindhárom feladat helyes megoldásáért első dı́jat nyert Kovács Balázs Csaba,
                az ELTE ﬁzika BSc szakos hallgatója, aki a Hatvani Bajza József Gimnáziumban
                érettségizett Maruzsiné Sevella Judit tanı́tványaként.


                116                                           Középiskolai Matematikai és Fizikai Lapok, 2023/2




i                                                                                                                                i


    i                                                                                                                        i
    i                                                                                                                  i

        2023.2.4 – 16:39 – 117. oldal – 53. lap                                               KöMaL, 2023. február
i                                                                                                                          i


                     Az első feladat helyes, valamint a második és harmadik feladat lényegében
                helyes megoldásáért második dı́jat nyert Kincses Ábel, a BME ﬁzika BSc szakos
                hallgatója, aki a Deák téri Evangélikus Gimnáziumban érettségizett Horváth Gab-
                riella és Szőkéné Mezősi Tı́mea tanı́tványaként.
                      Az első és a harmadik feladat helyes megoldásáért harmadik dı́jat nyert Gurzó
                József, az ELTE ﬁzika BSc szakos hallgatója, aki a Budapesti Fazekas Mihály
                Gyakorló Általános Iskola és Gimnáziumban érettségizett Nagy Piroska Mária
                tanı́tványaként.
                     A harmadik feladat helyes, valamint az első vagy a második feladat lényegében
                helyes megoldásáért kiemelt dicséretet kapott Bognár András Károly, a Budapes-
                ti Fazekas Mihály Gyakorló Általános Iskola és Gimnázium 12. osztályos tanulója,
                Nagy Piroska Mária tanı́tványa; Csonka Illés, a Ciszteri Rend Nagy Lajos Gimná-
                ziuma 11. osztályos tanulója, Jéhn János és Pálfalvi László tanı́tványa; valamint
                Hajós Balázs, az ELTE Apáczai Csere János Gyakorló Gimnázium és Kollégium
                12. osztályos tanulója, Gyertyán Attila tanı́tványa.
                      Az első vagy a harmadik feladat helyes, vagy a második feladat lényegében
                helyes megoldásáért dicséretet kapott Bencz Benedek, a Baár-Madas Református
                Gimnázium, Általános Iskola és Diákotthon 10. osztályos tanulója, Horváth Norbert
                tanı́tványa; Blázsik Árpád, az ELTE ﬁzika BSc szakos hallgatója, aki a Békásme-
                gyeri Veres Péter Gimnáziumban érettségizett Rakovszki Andorás és Székely György
                tanı́tványaként; Gábriel Tamás, a Budapesti Fazekas Mihály Gyakorló Általános
                Iskola és Gimnázium 12. osztályos tanulója, Nagy Piroska Mária tanı́tványa; Ha-
                lász Henrik Kristóf, a Szegedi Radnóti Miklós Kı́sérleti Gimnázium 12. osztályos
                tanulója, Gutai Árpád és Csányi Sándor tanı́tványa; Horváth Ákos Zsolt, a BME
                ﬁzika BSc szakos hallgatója, aki a Kempelen Farkas Gimnáziumban érettségizett
                Bakosné Novák Andrea és Horváth Eszter tanı́tványaként; Kohut Márk Balázs,
                a Kecskeméti Katona József Gimnázium 12. osztályos tanulója, Sáróné Jéga-
                Szabó Irén tanı́tványa, Köpenczei Csanád, a Bonyhádi Petőﬁ Sándor Evangélikus
                Gimnázium és Kollégium 12. osztályos tanulója, Wiandt Péter tanı́tványa; Molnár
                Barnabás, a Budapesti Fazekas Mihály Gyakorló Általános Iskola és Gimnázium
                12. osztályos tanulója, Nagy Piroska Mária tanı́tványa; Molnár-Szabó Vilmos,
                a Budapesti Fazekas Mihály Gyakorló Általános Iskola és Gimnázium 12. osztályos
                tanulója, Nagy Piroska Mária tanı́tványa; Schäﬀer Donát, a Pécsi Janus Pannonius
                Gimnázium 11. osztályos tanulója, Lehőcz Mária és Lányi Veronika tanı́tványa;
                valamint Toronyi András, az ELTE ﬁzika BSc szakos hallgatója, aki a Baár-Madas
                Református Gimnázium, Általános Iskola és Diákotthonban érettségizett Horváth
                Norbert tanı́tványaként.
                     Az első dı́jjal a verseny plakettjén kı́vül az Andersen Adótanácsadó Zrt. és
                a Nanorobot Vagyonkezelő Kft. adományából 80 ezer forint, a második dı́jjal 65 ezer,
                a harmadik dı́jjal 50 ezer, a kiemelt dicsérettel 30 ezer, a dicsérettel 15 ezer forint
                pénzjutalom járt. A dı́jazottak tanárai könyveket kaptak az Eötvös Loránd Fizikai
                Társulat ajándékaként. Köszönjük az adományozók önzetlen támogatását!

                                             Gnädig Péter, Széchenyi Gábor, Vankó Péter, Vigh Máté


                Középiskolai Matematikai és Fizikai Lapok, 2023/2                                   117


i                                                                                                                          i


    i                                                                                                                  i
