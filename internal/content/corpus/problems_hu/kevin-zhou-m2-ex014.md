---
id: "kevin-zhou-m2-ex014"
source: "kevin-zhou"
native_id: "KZ-M2-EX014"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "hu"
translated: true
links_en: "kevin-zhou-m2-ex014"
topic: [mechanika]
subtopic: [folyadékok nyugalma, felületi feszültség, Young–Laplace-egyenlet]
math_tools: [geometria]
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

a görbült felületre ható erőnek ki kell egyensúlyoznia a sík felületre ható erőt, amely πR2 P . Ugyanezen gondolatmenetnek
  a gömbre is érvényesnek kell lennie, mivel a görbült felületre ható erők azonosak, így a válasz πR2 P .

  Ez a trükk több későbbi feladatban is hasznos lesz. Tetszőleges alakú felületekre is általánosítható, ahogyan azt az E1-ben
  tárgyaljuk. Konkrétan tegyük fel, hogy egy S felület határa C, és tekintsünk egy másik, ugyanilyen határú S ′ felületet. Ekkor
  ugyanezen gondolatmenet szerint az S és S ′ által együtt alkotott zárt felületre ható nyomáserő eredője nulla, tehát az S-re és
  S ′-re ható nyomáserők nagysága azonos.

  13. ötlet
  A folyadék felületén γ felületi feszültség ébred. Ha elképzeljük, hogy a felületet két részre osztjuk, akkor γ az egyik rész által
  a másikra kifejtett feszítőerő a vágás egységnyi hosszára vonatkoztatva. Pontosabban, a vágás mentén fekvő ds hosszúságú kis
  szakasz esetén, ha a felület normálvektora n̂, a felületi feszültségből származó erő
                                            dF = γ ds × n̂
  ami azt jelenti, hogy az erő a felület mentén, a vágásra merőlegesen hat.

  15. példa

  Egy R sugarú, γ felületi feszültségű gömb alakú szappanbuborék P nyomású levegőben van, és belsejében P + ∆P nyomású levegőt
  tartalmaz. Határozzuk meg ∆P értékét.

  Megoldás
  Az előző feladat eredményéből következik, hogy az egyik félgömb másikra kifejtett ereje πR2 ∆P . Ezt a felületi feszültségből
  származó erőnek kell kiegyensúlyoznia. Ha elképzeljük, hogy a buborék felületét félbevágjuk, akkor a felületi feszültségből
  származó erő γL, ahol L a félgömböket összekötő felület teljes hossza.

  Ekkor L = 2πR írható fel, amiből
                                                      2γ
                                            ∆P =         .
                                                      R
  Ezt Young–Laplace-egyenletnek nevezzük. Ebben a konkrét esetben azonban ez nem a helyes válasz. Ennek az az oka, hogy valójában
  L = 4πR értéket kell vennünk, mivel a felületi feszültség a buborékfal belső és külső felületén egyaránt fellép, így a válasz
                                                      4γ
                                            ∆P =         .
                                                      R
  A belső nagyobb nyomás kiegyenlíti a buborékot összehúzni igyekvő felületi feszültséget.

  Ha nem világos, miért L = 4πR, energiával is gondolkodhatunk. A felületi feszültség abból ered, hogy energia szükséges a szappanos
  víz felületként való kifeszítéséhez, mivel ez felbontja az intermolekuláris vonzó kötések egy részét. A Young–Laplace-egyenlet egy
  szappanos vízből álló gömbre adná a helyes eredményt. Egy szappanos vízből álló buborék esetén azonban kétszer akkora szappanos


                                                 21
    Kevin Zhou                                                               Physics Olympiad Handouts



       víz/levegő felület jön létre. Ezért az energiaköltség és az erő is kétszeres.
