---
id: "kevin-zhou-t2-p015"
source: "kevin-zhou"
native_id: "KZ-T2-P015"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "hu"
translated: true
links_en: "kevin-zhou-t2-p015"
topic: [termodinamika, statisztikus-fizika]
subtopic: [entrópia, helmholtz-szabadenergia, entrópikus erő, polimerek]
math_tools: [kombinatorika, valószínűségszámítás, szélsőérték-keresés]
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

# KZ-T2-P015

[5] 15. feladat. Ez a hosszú feladat a szabad energia néhány fontos tulajdonságát szemlélteti. Egy gumimolekulát egydimenziós lánccal modellezhetünk, amely N = N+ + N− ≫ 1 darab, egyenként a hosszúságú láncszemből áll; ezek közül N+ a +z irányba, N− pedig a −z irányba mutat. A láncszemek orientációi egymástól függetlenek, és egy láncszem elforgatása nem jár energiaköltséggel. Ezért minden konfiguráció azonos valószínűségű bármely hőmérsékleten. Definiáljuk az L = (N− − N+ )a mennyiséget a lánc teljes lefelé irányuló megnyúlásaként.

     (a) A 14. feladatban említett közelítést használva és L ≪ N a feltételezéssel mutassuk meg, hogy

                                                           L2
                                                                
                                       S = N kB log 2 −
                                                         2N 2 a2
         majd mutassuk meg, hogy az entrópia csökken, ahogy L nő. Ez a modell nagyon egyszerű; például semmit sem mond a lánc feszítőerejéről, de az előjel helyes. (Tipp: vegyük észre, hogy az entrópiaváltozások L2 /N rendűek, ezért nagyon kicsik. Közelítéseink során óvatosnak kell lennünk, nehogy egy fontos járulékot elhagyjunk.)

     (b) Vegyük észre, hogy az entrópia nem függ a hőmérséklettől, mivel minden konfiguráció energiája azonos. Egy realisztikusabb modellben a molekula teljes entrópiája a fent kiszámított entrópia és a további hőmozgások, például a láncszemek rezgései miatt fellépő entrópia összege lenne. Ebből kiindulva, ha egy gumiszalagot gyorsan megnyújtunk, melegnek vagy hidegnek érezzük? (Kísérletileg ellenőrizhetjük a választ!)

     (c) Most tegyük fel, hogy a lánc alsó végére egy m tömegű testet függesztünk. Határozzuk meg a lánc átlagos hosszát T hőmérsékleten a Boltzmann-eloszlás segítségével. Ne tételezzük fel, hogy L ≪ N a. (Az ezt a tömeget felemelő erő az entrópikus erő egy másik példája.)

     (d) Kiderül, hogy ugyanerre az eredményre a teljes univerzum Suniv entrópiájának maximalizálásával is eljuthatunk. Általánosan érveljünk amellett, hogy Suniv akkor maximális, amikor a Helmholtz-féle szabadenergia

                                                   F = U − TS

         minimális, ahol U a gumiszalag és a test teljes energiája, T pedig a rendszer és környezete hőmérséklete. (Tipp: használjuk dSuniv kifejezését az energiamegmaradással együtt.)

     (e) Mutassuk meg, hogy L ≪ N a határértékben F valóban az egyensúlyi hossznál minimális.

       Megjegyzés: Hő és munka
       Mi a különbség a munka és a hő között? Ha egy gázt dugattyúval ellátott hengerben tartunk, a dugattyú mozgatása munkának számít. Nyilvánvalóan továbbra is munkáról beszélnénk, ha a dugattyút két félre osztanánk, és ezeket egymástól függetlenül mozgatnánk. A dugattyút azonban addig oszthatjuk, amíg végül a dugattyú egyes atomjainál kötünk ki. Ezek energiát adhatnak át a gáz részecskéinek, amikor beléjük ütköznek, miközben a gázrészecskék lepattannak róluk, ahogyan az ütő eltalálja a


                                                     12
Kevin Zhou                                                             Physics Olympiad Handouts



  labdát. De ahogy a T1-ben említettük, pontosan így ad át energiát egy forró fal a gáznak! Mikor váltottunk át munkavégzésről hőközlésre?

  Lényegében nincs éles különbség. Csak energiaátadás létezik; a munka az energiaátadások azon része, amelyet részletesen nyomon követünk, a hő pedig az, amelyet nem. Az entrópia a rendszer pontos állapotával kapcsolatos tudatlanságunkat számszerűsíti. Ezért változtatja meg a hőközlés az entrópiát, a munkavégzés pedig nem.

  Megjegyzés: Szubjektív-e az entrópia?

  Definíciónkban az entrópia a rendszer által „elfoglalható” állapotok számától függött, de természetesen a rendszer a valóságban csak egyetlen állapotban van. Valójában azon állapotok számát értjük, amelyekben a rendszer az általunk ismert információ alapján lehetne. Például egy ideális gáz esetén általában ismerjük a hőmérsékletet, a nyomást és a térfogatot.

  Ez zavarónak tűnhet, mert azt sugallja, hogy az entrópia szubjektív, és attól függ, hogy ki mit tud. Az entrópia azonban olyan mennyiségeket határoz meg, mint F, és ezáltal a rendszerből kinyerhető munka mennyiségét is, tehát hogyan lehetne különböző?

  Valójában e két állítás között nincs ellentmondás. Tegyük fel például, hogy a szokásos tulajdonságokon kívül egy ideális gáz részecskéi kissé nagyobbak vagy kisebbek is lehetnek. Ha valahogy tudjuk, hogy az összes nagy részecske egy doboz bal oldalán, az összes kis részecske pedig a jobb oldalán van, akkor a dobozhoz rendelt entrópia kisebb, mint annál, aki erről nem tud; ennek megfelelően több munkát nyerhetünk ki a dobozból. Például középre helyezhetünk egy szűrőt, amely csak a kis részecskéket engedi át, majd energiát gyűjthetünk, miközben a kis részecskék jobbról balra mozognak.

  Másfelől, ha fejbe ütnek bennünket, és elfelejtjük, hogy a részecskék méret szerint rendeződnek, akkor a gázhoz rendelt entrópiánk megnő. Ennek megfelelően most kevesebb munkát nyerhetünk ki, mert nem tudnánk, hogy egyáltalán érdemes ilyen szűrőt elhelyezni!

  Bár ez a példa erőltetettnek tűnhet, valójában pontosan ugyanaz, mint a korábbi keveredési entrópiapéldánk! Ha nincs olyan eszközünk, amely meg tudja különböztetni az oxigén- és a nitrogénmolekulákat, akkor a „keveretlen” állapotnak már eleve ugyanakkora az entrópiája, mint a kevert állapotnak. Ebben az esetben az entrópia egyáltalán nem változik, amikor lehetővé tesszük a gázok keveredését.

  Ez a példa azt mutatja, hogy a termodinamika használatához nem kell mindent tudnunk egy rendszerről. Még ha tévedünk is a rendszer mikroszkopikus viselkedésével kapcsolatban, ismereteink alapján továbbra is használhatjuk az elméletet annak leírására, hogy mit tehetünk a rendszerrel. Ez a termodinamika hosszú életének alapvető oka. Ahogy egy újabb tanulmány megfogalmazta:
       Ha a fizikai elméletek emberek lennének, a termodinamika a falusi boszorkány volna. Három évszázadon át csendesen mosolygott, miközben más elméletek felemelkedtek és elhervadtak, és túlélte a fizika nagy forradalmait, például az általános relativitáselmélet és a kvantummechanika megjelenését. A többi elmélet kissé különösnek, valahogy a többiektől természetében eltérőnek tartja, mégis mindenki hozzá fordul tanácsért, és senki sem meri


                                                13
   Kevin Zhou                                                                 Physics Olympiad Handouts



             ellentmondani neki.

       Erről a nézőpontról bővebben lásd E. T. Jaynes The Gibbs Paradox and Information Theory and Statistical Mechanics című tanulságos cikkeit. (De ne olvassunk túl sokat későbbi munkáiból, mert az életkor előrehaladtával meglehetősen zsémbessé vált.)


   4    Feketetest-sugárzás
       Ötlet 9: Planck-törvénye
       Ahogy az X1-ben megmutatjuk, egy T hőmérsékletű test egységnyi felületéről f frekvencián,
       egységnyi frekvenciasávban kisugárzott teljesítményt a Planck-törvény adja meg:

                                                2πhf 3         1
                                      I(f ) =      2     hf /k   T −1
                                                                      e(f )
                                                  c    e       B


       ahol e(f )-et emisszivitásnak nevezzük. Ideális feketetest esetén e(f ) = 1. Minden frekvenciára integrálva azt kapjuk, hogy egy ideális feketetest egységnyi felületéről kisugárzott teljes teljesítmény
                                        Z ∞
                                                                   2π 5 kB
                                                                         4
                                   J=        I(f ) df = σT 4 , σ =         .
                                          0                        15c2 h3

       Ez a Stefan–Boltzmann-törvény, amely dimenzióanalízissel is levezethető. Tömör és hasznos eredmény, ezért meglehetősen gyakran szerepel olimpiákon.
