---
id: "kevin-zhou-t2-p016"
source: "kevin-zhou"
native_id: "KZ-T2-P016"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "hu"
translated: true
links_en: "kevin-zhou-t2-p016"
topic: [termodinamika és statisztikus fizika, kvantumfizika]
subtopic: [feketetest-sugárzás, Planck-törvény, Wien-féle eltolódási törvény]
math_tools: [integrálás, dimenzióanalízis]
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

# KZ-T2-P016

[2] 16. feladat. Néhány alapvető átalakítás a Planck-törvénnyel.

     (a) Mutassuk meg az integrál dimenziótalanításával, a P1-ben ismertetett módon, hogy
         J ∝ T 4.

     (b) Bizonyítsuk be Wien eltolódási törvényét, amely szerint egy ideális feketetest I(f )
         függvényének maximuma T-vel arányos frekvencián következik be.

       7. példa

       Magas hőmérsékleten sok anyag fajlagos ellenállása közelítőleg lineárisan függ a
       hőmérséklettől. Tegyük fel, hogy egy izzó V váltakozó feszültségre kapcsolva P teljes
       sugárzási teljesítményt ad le. Hogyan függ P V-től?

       Megoldás

       Az ellenállásban disszipált teljesítmény V 2 /R-rel arányos, és R ∝ ρ ∝ T. Ennek a
       teljesítménynek meg kell egyeznie a kibocsátott feketetest-sugárzás teljesítményével, ezért
       a Stefan–Boltzmann-törvény alapján

                                                             V2
                                                P ∝ T4 ∝
                                                             T

       amiből T ∝ V 2/5, így P ∝ V 8/5.




                                                       14
Kevin Zhou                                                              Fizikaolimpiai feladatgyűjtemény


  8. példa

  Egy nemideális feketetest az f frekvenciájú beeső sugárzás a(f ) hányadát nyeli el. (Ideális
  feketetest esetén a(f ) = 1.) Mutassuk meg, hogy a második főtételből következik Kirchhoff
  törvénye, e(f ) = a(f ).

  Megoldás
  Először tekintsük azt az esetet, amikor a(f ) és e(f ) független f-től, vagyis állandó. Ha két
  T hőmérsékletű feketetestet közvetlenül egymás mellé helyezünk, akkor az első által a második
  felmelegítésének sebessége e1 a2-vel, míg a második által az elsőé e2 a1-gyel arányos. A
  második főtétel szerint ezeknek egyenlőknek kell lenniük, amiből e1 /a1 = e2 /a2 következik.
  Ezért ez az arány állandó. Tökéletes feketetest esetén azonban e = a, tehát a két mennyiség
  egyenlő.

  Általánosabban tegyünk a két feketetest közé olyan szűrőt, amely csak az f frekvenciájú fényt
  engedi át, minden mást pedig blokkol. Ugyanez a gondolatmenet ekkor
  e1 (f )/a1 (f ) = e2 (f )/a2 (f ) összefüggést ad, így e(f ) = a(f ). A termodinamika megköveteli,
  hogy a jó elnyelők jó sugárzók is legyenek. Ez mikroszkopikusan is levezethető az egyes atomok
  viselkedésének vizsgálatával; ebben a megközelítésben Kirchhoff törvénye az időtükrözési
  szimmetriából következik.

  Felmerülhet a kérdés, mi történne, ha olyan „egyirányú” szűrőt helyeznénk el, amely csak az
  egyik irányban engedi át a fényt. Egy ilyen szűrő Maxwell-féle démonként viselkedne a fotonok
  számára: ha egy fotonokkal teli szoba kettéosztására használnánk, bizonyos frekvenciájú fotonokat
  az egyik, másokat a másik oldalra irányítana, és csökkentené az entrópiát. A termodinamika ezért
  az egyirányú szűrők létezését is tiltja; mikroszkopikusan ez ismét az időtükrözési szimmetria
  következménye.

  9. példa

  Egy műhold magjában állandó TH hőmérsékletű atomreaktor található. Tegyük fel, hogy a
  műhold külső felületét valahogy állandó TC hőmérsékleten tartjuk, és a műhold ideális hőerőgépet
  működtet, amely a magot és a külső felületet meleg, illetve hideg tartályként használja.
  Tekintsük a külső felületet ideális feketetestnek, és hanyagoljuk el a világűr hőmérsékletét.
  Milyen TC mellett maximális a kinyert teljesítmény?

  Megoldás
  Azt gondolhatnánk, hogy TC-nek a lehető legkisebbnek kell lennie a ciklus hatásfokának
  növeléséhez. Az alacsonyabb TC azonban a hőkibocsátás Q̇out kisebb sebességét jelenti, mivel
  a feketetest-sugárzás kibocsátása korlátozza a folyamatot, és ez csökkenti a végzett munka Ẇ
  sebességét.

  A műhold által kibocsátott hő sebessége
                                        Q̇out = σATC4 ∝ TC4 .
  Ezért a végzett munka sebessége
                                                     
                                   TH               TC TH 4
                   Ẇ = η Q̇in = η    Q̇out ∝    1−      T = TH TC3 − TC4 .
                                   TC               TH TC C
  Ez TC = (3/4)TH esetén maximális; ekkor a hatásfok 1/4.


                                                  15
    Kevin Zhou                                                                      Fizikaolimpiai feladatgyűjtemény
