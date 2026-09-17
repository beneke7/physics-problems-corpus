---
id: "kevin-zhou-m2-ex002"
source: "kevin-zhou"
native_id: "KZ-M2-EX002"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "hu"
translated: true
links_en: "kevin-zhou-m2-ex002"
topic: [mechanika]
subtopic: [statika, kötélerő, neminerciarendszerek]
math_tools: [algebra]
format: "explanation"
kind: "example"
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

a kötélben mindenütt.

  Megoldás
  Tekintsük a kötél egy dℓ hosszúságú, parányi darabját. Mivel a kötél nyugalomban van, a két végén ható húzóerők kiegyenlítik
  egymást, tehát ellentétes irányúak. Tegyük fel, hogy mindkét erő θ szöget zár be a kötél irányával. Ekkor a szakaszra ható
  eredő forgatónyomaték (T dℓ) sin θ. Ennek a statikus egyensúly miatt zérusnak kell lennie, ezért θ = 0, és így a húzóerő a kötél
  irányába mutat. Más szóval, a hajlékony kötelek erőt tudnak közvetíteni, de forgatónyomatékot nem.


                                                dℓ       θ T
                                     T

  Fontos megjegyezni, hogy a fenti érv merev rúdra nem alkalmazható, mert egy merev test belső erői a fenti ábrán látható módon
  is elrendeződhetnek. Más szóval, a rúd szomszédos részei további nyíróerőket fejthetnek ki, amelyek biztosítják a kompenzáló
  forgatónyomatékot. Ha valaki ilyen erőket próbálna létrehozni egy kötélben, a kötél inkább meghajlana.

  Általában a tömeg nélküli merev rúdon belüli erőeloszlás meglehetősen bonyolult lehet, de ha nagyobb léptékben tekintünk a
  rendszerre, akkor egyetlen, a rúd mentén nem feltétlenül mutató húzóerővel helyettesíthetjük. Ez erőt és forgatónyomatékot is
  közvetít a rúdon keresztül, abban az értelemben, hogy a forgatónyomatékot végül a rúd végét helyén tartó támasz fejti ki.
  Ha azonban a rúd támaszai szabadon elfordulhatnak, akkor nem tudnak forgatónyomatékot felvenni, így a rúd éppen úgy viselkedik,
  mint egy kötél, amelyben a húzóerő mindig a rúd irányába mutat.

  Megjegyzés
  A feladatok szerzői néha szándékosan nem vezetnek be olyan változókat, amelyek nem relevánsak a válasz szempontjából. Ez kétféle
  módon fordulhat elő. Először is, a változók egyszerűen kieshetnek, amint azt gyakran dimenzióanalízissel is láthatjuk. Másodszor,
  a változók konkrét értékei nem számítanak abban a határesetben, amikor nagyon nagyok vagy nagyon kicsik. Ha például egy feladat
  csak azt mondja, hogy egy tömeg „nagyon nagy”, de nem ad neki olyan nevet, mint az m, akkor a választ az m → ∞ határesetben kell
  megadni.

  7. ötlet
  Egy olyan feladat megoldásánál, amelyben egy test éppen felborulni készül, vegyük észre, hogy ebben a pillanatban a teljes
  normálerő gyakran egyetlen pontra összpontosul. (Például amikor előre készülünk elesni, teljes testsúlyunk a lábujjainkra kerül.)
  Ez gyakran azt jelenti, hogy célszerű a forgatónyomatékokat e pontra vonatkoztatva felírni.




                                                4
    Kevin Zhou                                                                  Physics Olympiad Handouts


       3. példa: Povey 5.6

       A 2. feladatban az autót pontszerű részecskének tekintettük, valójában azonban fel is borulhat. Tegyük fel, hogy sík talajon
       egy autónál a bal és jobb oldali, egyaránt vékony gumiabroncsok távolsága d, tömegközéppontja pedig h magasan van a talaj fölött.
       Most tegyük fel, hogy az autó a 2. feladatban leírtak szerint egy függőleges falon kanyarodik (θ = 90◦ ), v sebességgel.
       Milyen v esetén lehetséges ez?

       Megoldás
       Ismét az autó nem inerciarendszerében dolgozva az erőegyensúlyból

                                                                         mv 2
                                              ffric = mg,       N=
                                                                          R
       adódik, ahol ffric és N a négy gumiabroncsra ható összes súrlódási, illetve normálerő. Mivel ffric /N ≤ µ,
                                                     p
                                                 v ≥ gR/µ

       ami egyezik a 2. feladat általános megoldásával. Abban a feladatban azonban csak az erőegyensúlyt vizsgáltuk. Ebben a
       szélsőséges helyzetben a forgatónyomatékok egyensúlyát is figyelembe kell vennünk, vagyis azt a lehetőséget, hogy az autó
       felborul. Amikor az autó éppen felborulni készül, az összes normál- és súrlódási erő az alsó kerekekre hat. E pontra
       vonatkoztatva csak a gravitációs és a centrifugális erőből származó forgatónyomatékok maradnak, így

                                                                mv 2 d
                                                  mgh =
                                                                 R 2
                                     p
       és v-re megoldva v =       2gRh/d adódik. Minél nagyobb v, annál kisebb a felborulás valószínűsége, ezért a válasz
                                             p            √ p
                                          v ≥ gR max(1/ µ, 2h/d).

       Most egy rejtvény következik. Egy motorkerékpár kerekei egyetlen nyomvonalon helyezkednek el, ezért olyan, mint egy d → 0 esetű autó.
       A motorosok mégis végre tudják hajtani az itt leírt mozgást a Globe of Deathben, felborulás nélkül. Sőt, ezt pontosan d = 0
       esetén is megtehetik. Hogyan?
