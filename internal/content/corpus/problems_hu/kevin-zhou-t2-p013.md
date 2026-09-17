---
id: "kevin-zhou-t2-p013"
source: "kevin-zhou"
native_id: "KZ-T2-P013"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "hu"
translated: true
links_en: "kevin-zhou-t2-p013"
topic: [termodinamika, kvantumfizika]
subtopic: [harmadik főtétel, statisztikus-fizika, entrópia, ozmotikus nyomás]
math_tools: [valószínűségszámítás és statisztika, analízis]
format: "open-ended"
kind: "problem"
core_ideas: []
has_solution: false
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/T2.txt"
source_url: "sources/kevin_zhou/site/handouts/T2.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Hungarian translation of a candidate classified as Genuinely new in the Kevin Zhou overlap audit."
---

# KZ-T2-P013

[2] 13. feladat. Mutassuk meg, hogy a harmadik főtétel megköveteli, hogy a C fajhő nullához tartson, amikor a hőmérséklet
    nullához tart. (Mivel ez nem igaz a klasszikus ideális gázra, az ideális gáz törvényének az alacsony hőmérsékleteken a
    kvantummechanikában érvényét kell veszítenie. Ezt a 9. feladatban kapott entrópiából is láthatjuk, amely alacsony
    hőmérsékleten divergál; nincs olyan konstans, amelyet hozzáadva nullára csökkenthetnénk nulla hőmérsékleten.)

         8. ötlet: Mikrokanonikus sokaság
         Ha egy nagy, elszigetelt, termodinamikai egyensúlyban lévő rendszer Ω kvantumállapot egyikében van, feltesszük,
         hogy az állapotok mind egyformán valószínűek, és az entrópia

                                                     S = kB log Ω.

         Ez az entrópia alapvető definíciója; valójában a dS = d̄Q/T egyenlet nem az entrópiát definiálja, hanem a
         hőmérsékletet! A harmadik főtétel ebből az eredményből következik, mert T = 0 hőmérsékleten minden rendszer az
         alapállapotába kerül, ezért Ω = 1 és S = 0.



                                                             8
Kevin Zhou                                                           Physics Olympiad Handouts



  Az entrópia azt írja le, hogy mennyi információ szükséges a rendszer valódi állapotának megadásához. A kB tényező
  történelmi konvencióból ered. A logaritmus azért ésszerű, mert ha két független rendszerünk van, amelyek rendre Ω1 ,
  illetve Ω2 különböző állapotban lehetnek, akkor azt szeretnénk, hogy az entrópiák összeadódjanak:
  log(Ω1 Ω2 ) = log(Ω1 ) + log(Ω2 ).

  Megjegyzés
  Az a feltevés, hogy minden állapot egyformán valószínű, kissé zavarba ejtő lehet, mert a T1-ben a Boltzmann-eloszlást
  használtuk, amely szerint a nagyobb energiájú állapotok kisebb valószínűséggel vannak betöltve. A különbség az, hogy a
  Boltzmann-eloszlásnál feltételeztük: a rendszer egy T hőmérsékletű környezetben van. Ebben a helyzetben valójában a
  rendszer és a környezet összes kvantumállapota egyformán valószínű marad, de a rendszer alacsonyabb energiájú állapotai
  több energiát jelentenek a környezetben, és ezért (általában) több lehetséges környezeti állapothoz tartoznak. Így a
  lehetséges környezeti állapotok számát figyelembe véve a rendszer alacsonyabb energiájú állapotai valószínűbbek. Mindezt
  pontosan a 14. feladatban fogjuk megfogalmazni, ahol ezt felhasználjuk a Boltzmann-eloszlás levezetésére.

  5. példa: Keveredési entrópia

  Ismételjük meg a 4. példát statisztikus mechanikával.

  Megoldás
  Statisztikus mechanikában az S entrópiát közvetlenül kiszámíthatjuk az S = kB log Ω segítségével. Egyetlen oxigén- vagy
  nitrogénmolekulára koncentrálva legyen Ωi a lehetséges állapotok kezdeti száma. Amikor eltávolítjuk az elválasztót, a
  részecske számára elérhető helytérfogat megkétszereződik, és mivel a kvantumállapotok mind ugyanakkora térfogatúak a
  fázistérben, a rendelkezésre álló állapotok száma is megkétszereződik. Ezért egy részecskére
                          ∆Spart = kB log(2Ωi ) − kB log Ωi = kB log 2.
  Mivel a 2N részecske független,

                                 ∆S = 2N ∆Spart = 2N kB log 2

  összhangban a termodinamikából kapott eredménnyel.

  6. példa: Ozmotikus nyomás

  Egy vízzel töltött csövet olyan membrán oszt ketté, amely csak vízmolekulákat enged át. Amikor a cső egyik felében egy
  anyagot oldunk fel, N iont létrehozva, az ábrán látható módon azt tapasztaljuk, hogy azon az oldalon megemelkedik a vízszint.




                                                9
Kevin Zhou                                                            Physics Olympiad Handouts




  Magyarázzuk meg a jelenséget, és számítsuk ki a magasságkülönbséget, elhanyagolva a különböző ionok, valamint az ionok
  és a víz közötti kölcsönhatásokat.

  Megoldás
  Az ozmotikus nyomás entrópikus erő példája. Tegyük fel, hogy a cső egyik oldalán megemelkedik a vízszint. A víz egyébként
  változatlan, hiszen csak a cső mentén tolódott el, ezért az entrópiája nem változott. Az energiája azonban nagyobb, ennek
  az energiának pedig hőátadással kellett származnia a környezetből. Ezért a környezet entrópiája csökkent.

  Ha nem lennének oldott ionok, ez megmutatná, miért nem emelkedik meg spontán a vízszint: ezt a második főtétel tiltja.
  Itt azonban az ionokat tartalmazó szakaszban a víz mennyiségének növelése növeli az ionok entrópiáját, mivel több helyen
  lehetnek. Mivel az elérhető kvantumállapotok száma arányos az elérhető térfogattal, ezért

                                       Sion = N kB log V

  egy additív konstans erejéig, amiből
                                                  N kB
                                        dSion =        dV.
                                                   V
  Egyensúlyban legyen P ozmotikus nyomáskülönbség a membrán két oldala között. Ekkor dV térfogatú víz membránon való
  átmozgatása P dV energiába kerül, így
                                                d̄Q    P
                                    dSenv = −       = − dV.
                                                 T     T
  Termodinamikai egyensúlyban a teljes entrópia maximális, ezért

                                       dSion + dSenv = 0.

  Az ozmotikus nyomásra megoldva

                                           P V = N kB T.

  A magasságkülönbség egyszerűen a hidrosztatikai nyomás segítségével adódik,
                                             P    N kB T
                                       h=       =        .
                                             ρg    ρV g


                                                10
    Kevin Zhou                                                               Physics Olympiad Handouts



       Az entrópia csökkentésének lehetőségére válaszul itt megjelenő nyomást általában „entrópikus erőnek” nevezik. Ezt
       az eredményt valószínűleg már kémiaórán is láttuk, csak egészen más jelöléssel. A kémiai tankönyvekben jellemzően

                                                  Π = iM RT

       ahol Π az ozmotikus nyomás, M az oldott anyag molaritása, a van ’t Hoff-faktor i pedig az oldott anyag egy mólja
       után keletkező ionok móljainak száma. Ez teljesen ekvivalens az általunk kapott eredménnyel.

       Megjegyzés
       Miért hasonlít gyanúsan az ozmotikus nyomás kifejezése az ideális gáz törvényére? Azért, mert az oldott anyag és az
       oldószer közötti kölcsönhatásokat teljesen elhanyagolva az oldott ionokat az entrópia szempontjából lényegében ideális
       gázként kezeltük. Ez további járulékot ad a nyomáshoz, amely az ideális gáz nyomásához hasonlóan levezethető a T1-ben.
       (Ezt az érvelést visszafelé alkalmazva arra juthatunk, hogy az ideális gáz nyomása is leírható entrópikus erőként,
       a fentihez hasonló gondolatmenettel.)

       Azért nem hangsúlyozzák ezt a kinetikus gázelméleti kapcsolatot az ideális gáz törvényével a kémiaórákon, mert az
       oldott részecskék egyáltalán nem viselkednek ideális gázként. Egy folyadék részei, ezért folyamatosan ütköznek az
       oldószer részecskéivel. A fenti termodinamikai érvelés általánosabb, mert csak azt követeli meg, hogy az oldószer és
       az oldott anyag közötti kölcsönhatás ne változtassa meg jelentősen az oldott anyag entrópiáját.

       Az entrópikus erők rejtélyesnek tűnhetnek, de egyszerű közönséges erők, amelyek értékét az entrópia eszközével tudjuk
       a legkönnyebben kiszámítani. Végső soron itt sem hatnak más erők, csak azok a közönséges erők, amelyeket ismerünk.
       Itt a konkrét erő a membrán és az ionok közötti kölcsönhatás. Mivel a membrán visszaveri az ionokat ahelyett, hogy
       átengedné őket, taszító erőt fejt ki rájuk, amely átadódik a víznek.
