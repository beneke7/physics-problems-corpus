---
id: "kevin-zhou-t3-ex001"
source: "kevin-zhou"
native_id: "KZ-T3-EX001"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "hu"
translated: true
links_en: "kevin-zhou-t3-ex001"
topic: [folyadékmechanika, termodinamika]
subtopic: [felületi feszültség, érintkezési szög, nedvesítés, young-egyenlet]
math_tools: [energiamódszerek, geometria]
format: "explanation"
kind: "example"
core_ideas: []
has_solution: false
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/T3.txt"
source_url: "sources/kevin_zhou/site/handouts/T3.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Hungarian translation of a candidate classified as Genuinely new in the Kevin Zhou overlap audit."
---

# KZ-T3-EX001

       1. példa

       Egy vízcsepp felülete az ábrán látható módon θ érintkezési szöget zár be egy szilárd testtel.




       Ha θ hegyesszög, a felületet hidrofilnek nevezzük. Ha θ tompaszög, hidrofób. Fejezzük ki θ-t a megfelelő
       felületi feszültségekkel.




                                                       2


Kevin Zhou                                                              Physics Olympiad Handouts


  Megoldás
  Ha a folyadékcsepp δx-szel kifelé terjed, a különböző felületek területe az ábrán látható módon változik.




  Az energia változása
                                 dU ∝ γsl δx + γl cos θ δx − γs δx
  és ennek egyensúlyban nullával kell egyenlőnek lennie. Ezért
                                              γs − γsl   Usl
                                    cos θ =            =     − 1.
                                                 γl      γl
  Ez Young-egyenlet. A folyadék γl felületi feszültségének pozitívnak kell lennie; ellenkező esetben a folyadék egyáltalán
  nem létezhetne stabilan, hanem gázzá oszlana szét. Így a felület hidrofil, ha Usl > γl , és hidrofób, ha Usl < γl .

  Szélsőséges esetként jegyezzük meg, hogy Usl > 2γl esetén nincs megoldás θ-ra. Ebben a határesetben a felület annyira
  hidrofil, hogy a folyadék szétterül és bevonja az egész szilárd testet; ezt tökéletes nedvesítésnek nevezzük. Usl < 0
  esetén sincs megoldás, ekkor a folyadék sok apró, közel gömb alakú cseppre oszlik, amelyek mindegyikének nagyon kicsi a
  szilárd testtel érintkező felülete.

  Ezt a levezetést energiákkal végeztük, ami felületi feszültség esetén általában egyszerűbb. Ugyanez az eredmény erőkkel
  is levezethető, de ez finomabb, mint amilyennek látszik; a tankönyvek szokásos levezetése hibás. Világos levezetést Wang
  és Ricardo 9.3. szakaszában találunk.
