---
id: "kevin-zhou-m3-ex006"
source: "kevin-zhou"
native_id: "KZ-M3-EX006"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "hu"
translated: true
links_en: "kevin-zhou-m3-ex006"
topic: [mechanika]
subtopic: [ütközések, lendületmegmaradás, tömegközéppont]
math_tools: [algebra]
format: "explanation"
kind: "example"
core_ideas: []
has_solution: false
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/M3.txt"
source_url: "sources/kevin_zhou/site/handouts/M3.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Hungarian translation of a candidate classified as Genuinely new in the Kevin Zhou overlap audit."
---

az R2-ben tárgyalt relativisztikus ütközéseket.)

    A rendszer tömegközéppontjának sebessége
                                                m 1 v1 + m 2 v2
                                        vCM =                   .
                                                  m1 + m2
    Továbbá a lendületmegmaradás miatt a tömegközéppont soha nem gyorsul. Most áttérünk a tömegközépponttal együtt
    mozgó vonatkoztatási rendszerbe. Mivel ebben a rendszerben a teljes lendület definíció szerint
    nulla, a részecskék lendületei kioltják egymást. Ez csak akkor maradhat így az ütközés után, ha a sebességeiket
    ugyanazzal a számmal szorozzuk meg. Az energia csak akkor marad meg, ha ez a szám ±1; ezek közül a második az
    ütközés teljes hiányának felel meg.




                                                  10
Kevin Zhou                                                                          Fizikaolimpiai feladatgyűjtemény



  Ezért rugalmas ütközés során a tömegközépponti rendszerben a sebességek egyszerűen megfordulnak.
  (A 17. század közepén Huygens ebből az ésszerű feltevésből indult ki, és ennek segítségével vezette le
  a lendület- és energiamegmaradást!) Ebben a vonatkoztatási rendszerben a kezdeti sebességek számszerűen

                                 v1,CM = v1 − vCM ,          v2,CM = v2 − vCM .

  A végsebességek ebben a vonatkoztatási rendszerben
                             ′                                ′
                            v1,CM = −v1 + vCM ,              v2,CM = −v2 + vCM .

  Végül az eredeti vonatkoztatási rendszerbe visszatérve a végsebességek

                                 v1′ = −v1 + 2vCM ,          v2′ = −v2 + 2vCM .

  Sok különleges esetet ellenőrizhetünk. Például ha m1 = m2 , akkor a két tömeg egyszerűen kicseréli a sebességét,
  mintha áthaladtak volna egymáson. Egy másik ellenőrzésként tekintsük azt az esetet, amikor a második tömeg kezdetben
  nyugalomban van, azaz v2 = 0. Ekkor
                                            m1 − m2                      2m1
                                 v1′ = v1           ,        v2′ = v1           .
                                            m1 + m2                     m1 + m2
  Ha m1 = m2 , akkor az első tömeg teljes sebességét átadja a másodiknak. Ha m2 nagy, akkor az első tömeg
  −v1 sebességgel visszapattan. Ha m1 nagy, akkor az első tömeg továbbhalad, a második pedig 2v1 sebességet kap.
  Végül, ha m1 = m2 /3, akkor a végsebességek v1′ = −v1 /2 és v2′ = v1 /2; ezt a szép eredményt érdemes
  megjegyezni.

  6. gondolat
  Az mi tömegű testek M össztömegű rendszerének mozgási energiája a következőképpen bontható fel:
                           X1               1        X1
                                    mi vi2 = M vCM
                                                2
                                                   +    mi (vi − vCM )2
                                  2         2         2
                             i                                 i

  Az első tag a „tömegközépponti” járulék, a második pedig a tömegközépponti rendszerben mért mozgási energia.
  (Ez az állítás többdimenziós ütközésekre is érvényes, ha a négyzeteket a vektorok hosszának négyzetével helyettesítjük.)
  Az első tag átírható P 2 /2M alakban, ahol P a tömegek teljes lendülete. Ezért egy rögzített teljes lendületű
  tömegrendszer mozgási energiája akkor minimális, amikor a második tag nulla, vagyis amikor minden tömeg azonos
  sebességgel mozog. Ebből például következik, hogy a teljesen rugalmatlan ütközés a lehető legtöbb mozgási energiát
  disszipálja.

  7. példa

  Három, egyenként M tömegű labda kezdetben nyugalomban van. Ezután robbanás történik, amely a rendszernek rögzített
  teljes mozgási energiát ad. Legfeljebb mekkora hányadát hordozhatja ennek az energiának egyetlen labda?




                                                        11
    Kevin Zhou                                                                    Fizikaolimpiai feladatgyűjtemény


       Megoldás
       Tegyük fel, hogy az első labda energiáját akarjuk maximalizálni, és legyen p0 a végső lendületének nagysága. Mivel
       a teljes lendület nulla, a másik két labda összlendületének nagysága szintén p0 . A fenti gondolat szerint e két
       labda energiája akkor minimális, ha azonos sebességgel mozognak. Ezért az optimális esetben az első labda v0
       sebességgel távozik, a másik két labda pedig az ellenkező irányba, egyenként v0 /2 sebességgel. Ekkor az első
       labda a teljes energia 2/3-át hordozza.

       Ez a lehető legegyszerűbb „optimális ütközési” feladat; az R2-ben továbbiakkal is találkozunk. Sok ilyen feladat
       megoldható azzal az alapgondolattal, hogy a kirepülő tömegek közül néhánynak azonos sebességgel kell mozognia.
