---
id: "kevin-zhou-m2-p005"
source: "kevin-zhou"
native_id: "KZ-M2-P005"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "hu"
translated: true
links_en: "kevin-zhou-m2-p005"
topic: [mechanika]
subtopic: [statika, nyomaték, tömegközéppont, nem-inerciarendszerek]
math_tools: [vektoralgebra, geometria]
format: "open-ended"
kind: "problem"
core_ideas: []
has_solution: false
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/M2.txt"
source_url: "sources/kevin_zhou/site/handouts/M2.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Hungarian translation of a candidate classified as Genuinely new in the Kevin Zhou overlap audit."
---

nyugalomban van, és három erő hat rá. Mutassuk meg, hogy két dimenzióban ezen erők hatásvonalai
    vagy párhuzamosak, vagy egy pontban metszik egymást. Ez későbbi feladatok megoldásában lesz hasznos.

        5. ötlet
        Az mi tömegű, ri helyvektorú tömegek M teljes tömegű rendszerének rcm tömegközéppontjára teljesül, hogy
                                                     X
                                            M rcm =      mi ri .
                                                               i

        Ha a rendszert nem érik külső erők, a tömegközéppontja állandó sebességgel mozog.

        6. ötlet
        Homogén gravitációs térben a gravitációs erő nem fejt ki nyomatékot a tömegközéppontra vonatkozóan. Ezért egy teljes testre
        vonatkozó nyomatéki egyensúly alkalmazásakor az M g gravitációs erőt úgy vehetjük, mintha teljes egészében a tömegközéppontban
        hatna. (Ez formális helyettesítés; a tényleges gravitációs erő természetesen továbbra is eloszlik a testben.)

        A nyomatéki egyensúly nem inerciarendszerekben is alkalmazható, feltéve, hogy a tehetetlenségi erők által kifejtett nyomatékokat is
        figyelembe vesszük. Gyorsuló vonatkoztatási rendszerben a −M a tehetetlenségi erő soha nem fejt ki nyomatékot a tömegközéppontra,
        ezért mindig úgy vehetjük, mintha a tömegközéppontban hatna.

        Egy egyenletesen forgó vonatkoztatási rendszerben a teljes centrifugális erő M ω 2 r⊥           ⊥
                                                                             cm , ahol rcm a
        forgástengelyre merőleges része. A tömegközéppont körül centrifugális nyomaték is felléphet, de egyszerű esetekben (például ha
        a test lapos, és az ω-ra merőleges síkban fekszik) ez eltűnik; ilyenkor a centrifugális erőt a tömegközéppontban hatónak vehetjük.
        A Coriolis-erővel és -nyomatékkal az M6-ban foglalkozunk.




                                                           3
Kevin Zhou                                                            Physics Olympiad Handouts


  2. példa

  Mutassuk meg, hogy egy teljesen hajlékony, nyugalomban lévő kötélben – akár van tömege, akár tömegtelen – a feszítőerő mindenütt
  a kötél irányába mutat.

  Megoldás
  Tekintsünk egy dℓ hosszúságú, nagyon kis kötéldarabot. Mivel a kötél nyugalomban van, a két végén ható feszítőerők egyensúlyt
  tartanak, ezért ellentétes irányúak. Legyen mindkettő a kötél irányával θ szöget bezáró irányú. Ekkor a kötéldarabra ható eredő
  nyomaték (T dℓ) sin θ. Ennek statikus egyensúly esetén nullának kell lennie, tehát θ = 0, és így a feszítőerő a kötél irányába mutat.
  Másképpen fogalmazva: a hajlékony kötelek erőt, de nyomatékot nem tudnak továbbítani.


                                                dℓ       θ T
                                     T

  Fontos megjegyezni, hogy a fenti érvelés merev rúdra nem működik, mert egy merev test belső erői a fenti ábrán látható módon is
  elrendeződhetnek. Más szóval a rúd szomszédos darabjai között további nyíróerők léphetnek fel, amelyek biztosítják a kiegyenlítő nyomatékot.
  Ha egy kötélben próbálnánk ilyen erőket létrehozni, a kötél ehelyett meghajlana.

  Általában egy tömegtelen merev rúdon belül az erők eloszlása meglehetősen bonyolult lehet, de nagyobb léptékben a rudat egyetlen
  feszítőerővel helyettesíthetjük, amely nem feltétlenül a rúd irányába mutat. Ez erőt és nyomatékot is továbbít a rúdon keresztül,
  abban az értelemben, hogy a rúd végét rögzítő szerkezet végül nyomatékot fejt ki. Ha azonban a rúd alátámasztásai szabadon foroghatnak,
  nem tudnak nyomatékot felvenni, ezért a rúd úgy viselkedik, mint egy kötél, és a feszítőerő mindig a rúd irányába mutat.

  Megjegyzés
  A feladatok szerzői néha szándékosan nem vezetnek be olyan változókat, amelyek a válasz szempontjából lényegtelenek. Ez kétféleképpen
  fordulhat elő. Először is, a változók kieshetnek, ahogy azt gyakran dimenzióanalízissel is láthatjuk. Másodszor, a változók konkrét értékei
  nem számítanak abban a határértékben, amelyben nagyon nagyok vagy nagyon kicsik. Ha például egy feladat csak annyit mond, hogy egy tömeg
  „nagyon nagy”, de nem jelöli m-mel vagy más névvel, akkor a választ az m → ∞ határértékben kell megadni.

  7. ötlet
  Olyan feladatokban, amelyekben egy test éppen felborulni készül, vegyük észre, hogy ebben a pillanatban az egész normálerő gyakran
  egyetlen pontra koncentrálódik. (Ha például valaki előre készül esni, teljes testsúlya a lábujjaira nehezedik.) Ez gyakran azt jelenti,
  hogy célszerű erre a pontra vonatkozóan felírni a nyomatékok egyenletét.




                                                4
    Kevin Zhou                                                                  Physics Olympiad Handouts


       3. példa: Povey 5.6

       A 2. feladatban az autót pontszerű részecskének tekintettük, a valóságban azonban fel is borulhat. Tegyük fel, hogy sík talajon
       egy autó bal és jobb, egyaránt vékony gumiabroncsai között d távolság van, tömegközéppontja pedig h magasan helyezkedik el a talaj
       felett. Most tegyük fel, hogy az autó a 2. feladatban leírt módon egy függőleges falon kanyarodik (θ = 90◦ ) v sebességgel.
       Mekkora v esetén lehetséges ez?

       Megoldás
       Ismét az autóhoz rögzített nem inerciarendszerben dolgozva az erőegyensúlyból

                                                                         mv 2
                                              ffric = mg,       N=
                                                                          R
       ahol ffric és N a négy gumiabroncsra ható teljes súrlódási, illetve normálerő. Mivel ffric /N ≤ µ,
                                                     p
                                                 v ≥ gR/µ

       ami megegyezik a 2. feladat általános megoldásával. Abban a feladatban azonban csak az erőegyensúlyt vizsgáltuk. Ebben a
       szélsőséges helyzetben a nyomatéki egyensúlyt is figyelembe kell vennünk, vagyis azt, hogy az autó felborulhat. Amikor az autó
       éppen felborulás előtt áll, az összes normál- és súrlódási erő az alsó gumiabroncsokra hat. Erre a pontra vonatkozóan csak a
       gravitációs és a centrifugális erő nyomatékával kell számolnunk, így

                                                                mv 2 d
                                                  mgh =
                                                                 R 2
                                     p
       amiből v =       2gRh/d adódik. Minél nagyobb v, annál kevésbé valószínű a felborulás, ezért a válasz
                                             p            √ p
                                          v ≥ gR max(1/ µ, 2h/d).

       És íme egy rejtvény. A motorkerékpárnak csak egy pár kereke van, ezért olyan, mint egy d → 0 esetű autó. A motorosok azonban a
       Halálgömbben felborulás nélkül is végre tudják hajtani az itt leírt mozgást. Sőt, ez pontosan d = 0 esetén is lehetséges. Hogyan?
