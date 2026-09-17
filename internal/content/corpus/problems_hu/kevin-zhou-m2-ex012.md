---
id: "kevin-zhou-m2-ex012"
source: "kevin-zhou"
native_id: "KZ-M2-EX012"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "hu"
translated: true
links_en: "kevin-zhou-m2-ex012"
topic: [mechanika]
subtopic: [statika, forgatónyomaték, virtuális munka]
math_tools: [geometria és trigonometria, differenciálás]
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

18
Kevin Zhou                                                               Physics Olympiad Handouts



   Hasonlóképpen, a második megjelölt csúcsot vizsgálva azt kapjuk, hogy F⊥,2 = T sin θ2 .

   T kiküszöbölésével és a szinusztétel alkalmazásával kapjuk

                                          r1 F⊥,1 = r2 F⊥,2 .

   Ez természetesen éppen a forgáspont körüli nyomatéki egyensúly állítása. Ha ezt a gondolatmenetet folytatjuk, és az erőket
   tetszőlegesnek engedjük meg, akkor ebből a Newton-féle II. törvény forgómozgásra vonatkozó alakját, τ = Iα, is levezethetjük
   erre a rendszerre.

   Megjegyzés
   Miért van tehát szükség a forgatónyomatékra? A forgatónyomaték nem nélkülözhetetlen eszköz egyetlen pontszerű részecske vagy
   nagyon egyszerű merev test esetén. Egy általános merev testben azonban a merevséget fenntartó belső erők igen bonyolultak, és a
   forgatónyomaték segítségével elkerülhetjük, hogy ezekkel az erőkkel foglalkoznunk kelljen.

   Például tekintsünk a végein alátámasztott merev rudat. A rúd közepe a rá ható gravitációs erő ellenére sem roskad össze, mert
   a rúd belső, felfelé irányuló nyíróerőket tartalmaz, amelyek a végein fellépő normálerőket a rúd többi részén keresztül továbbítják.
   Az ilyen rendszerek nyomaték használata nélküli elemzéséhez azonban figyelembe kellene vennünk ezeket a rúd végtelen sok darabjára
   ható mikroszkopikus erőket. A nyomaték segítségével különösebb erőfeszítés nélkül meghatározhatunk hasznos mennyiségeket, például
   az egyes alátámasztásoknál fellépő normálerőket.

Mivel azonban a belső erők ilyen bonyolultak lehetnek, felmerülhet bennünk a kérdés, hogy általában miért működik a nyomatéki egyensúly.
A legegyszerűbb magyarázat a virtuális munka elve.

   12. ötlet: A virtuális munka elve

   Annak eldöntéséhez, hogy egy rendszer statikus egyensúlyban van-e, megvizsgáljuk a rendszer minden lehetséges elmozdulását.
   Mindegyik esetben azt vizsgáljuk, mekkora munkát végeznének, ha a rendszer kissé elmozdulna az adott módon. (Ez az elmozdulás csak
   képzeletbeli, ezért virtuális elmozdulásnak nevezzük, a hozzá tartozó munkát pedig virtuális munkának.) A rendszer akkor van
   statikus egyensúlyban, ha a virtuális munka minden lehetséges virtuális elmozdulásra nulla.

   Ha a virtuális munka elvét transzlációs mozgásra alkalmazzuk, erőegyensúlyt kapunk, mivel dW = F dx. Ha egy forgáspont körüli
   forgómozgásra alkalmazzuk, nyomatéki egyensúlyt kapunk, mivel dW = τ dθ. Amint azonban alább és az M4-ben látni fogjuk, a
   virtuális munka elve egzotikusabb elmozdulásokra is alkalmazható. Különösen hasznos sok részből és sok kényszerfeltételből álló
   rendszerek esetén, amelyek emiatt csak néhány módon mozoghatnak. A virtuális munka elvének megfordítása is hasznos lehet: ha
   tudjuk, hogy egy rendszer statikus egyensúlyban van, akkor egy ismeretlen erőre következtethetünk belőle.

   13. példa: Roberval-mérleg

   Tekintsük az alábbi, merev rudakból álló mérleget. A csuklók biztosítják, hogy a középen található négyszög mindig paralelogramma
   maradjon, bal és jobb oldala pedig függőleges legyen.



                                                  19
    Kevin Zhou                                                              Physics Olympiad Handouts




        Ha az ábrán látható módon azonos súlyokat helyezünk mindkét vízszintes karra, maradhat-e a rendszer nyugalomban?

        Megoldás
        A rendszer csak egyféleképpen mozoghat: a téglalap paralelogrammává deformálódhat úgy, hogy a bal oldali vízszintes kar felfelé,
        a jobb oldali pedig ugyanekkora mértékben lefelé mozdul. Ekkor a súlyok által a mérlegen végzett teljes virtuális munka nulla,
        így a rendszer a súlyok karokon elfoglalt helyétől függetlenül egyensúlyban lehet.
