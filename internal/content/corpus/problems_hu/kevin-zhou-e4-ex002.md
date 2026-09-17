---
id: "kevin-zhou-e4-ex002"
source: "kevin-zhou"
native_id: "KZ-E4-EX002"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "hu"
translated: true
links_en: "kevin-zhou-e4-ex002"
topic: [Elektromágnesség]
subtopic: [kapacitás, energiamegmaradás, elektromechanikai-energia]
math_tools: [differenciálszámítás]
format: "explanation"
kind: "example"
core_ideas: []
has_solution: false
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/E4.txt"
source_url: "sources/kevin_zhou/site/handouts/E4.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Hungarian translation of a candidate classified as Genuinely new in the Kevin Zhou overlap audit."
---

Példa 2

       Egy d lemeztávolságú és A területű síkkondenzátort V feszültségű telepre kapcsolunk. Az egyik lemez v
       állandó sebességgel a másik felé mozog. Ellenőrizzük, hogy az energia megmarad.

        Megoldás
       A kapacitás C = Aϵ0 /d. A telep által szolgáltatott teljesítmény

                                                           dQ     dC
                                        Pbatt = IV = V        =V2    .
                                                           dt     dt
        Másrészt a kondenzátorban tárolt energia változási sebessége
                                                        
                                             d 1       2    1 dC
                                     Pcap =        CV      = V2     .
                                            dt 2            2    dt

       Első pillantásra probléma merül fel. Ekkor azonban emlékezünk rá, hogy a lemezek között vonzó erő hat, ezért
       a lemezek munkát végeznek azon, ami közelebb mozgatja őket egymáshoz,
                                            QE    QV    1    v 1 dC
                            Pmech = F v =      v=    v = CV 2 = V 2    .
                                             2    2d    2    d 2    dt
       ahol E a kondenzátor belsejében lévő elektromos tér. Ezért a kívánt módon Pbatt = Pcap + Pmech.

       Technikailag a mágneses térben is van energia, de ez v 2 /c2 -szer kisebb az elektromos tér energiájánál, így
       elhanyagolható, kivéve ha a lemezeket olyan gyorsan mozgatjuk, hogy a relativitáselmélet hatásai fontossá válnak.
       Ebben a feladatsorban a legtöbb feladat figyelmen kívül hagyja az ilyen relativisztikus hatásokat.
