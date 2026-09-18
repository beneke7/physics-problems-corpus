---
id: "kevin-zhou-m1-p029"
source: "kevin-zhou"
native_id: "KZ-M1-P029"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "hu"
translated: true
links_en: "kevin-zhou-m1-p029"
topic: [mechanika]
subtopic: [harmonikus rezgők, forgó vonatkoztatási rendszerek, Coriolis-erő]
math_tools: [differenciálegyenletek, komplex számok]
format: "open-ended"
kind: "problem"
core_ideas: []
has_solution: false
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/M1.txt"
source_url: "sources/kevin_zhou/site/handouts/M1.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Hungarian translation of a candidate classified as Genuinely new in the Kevin Zhou overlap audit."
---

[4] 29. feladat. Tekintsünk egy asztalon lévő, az origóban rögzített rugóhoz kapcsolt m tömegű testet. A rugó nyugalmi hossza nulla,
    és a testre az alábbi erőt fejti ki:
                                           F = −kr
    Két különböző módon fogjuk meghatározni az r(t) = (x(t), y(t)) általános megoldását.
      (a) Írjuk fel közvetlenül a választ, felhasználva, hogy az x és y koordináták függetlenek.
     (b) Vázoljunk fel néhány jellemző megoldást. Milyen görbét ír le a pálya?
        (c) ⋆ Íme egy szokatlanabb módja ugyanennek az eredménynek a levezetésére. Térjünk át egy, az origó körül ω0 szögsebességgel
            forgó, nem inerciarendszerre, amelyben a centrifugális erő kioltja a rugóerőt. Ebben a rendszerben az egyetlen releváns
            erő a −2mω0 × v Coriolis-erő. Határozzuk meg az általános megoldást ebben a rendszerben, majd transzformáljunk vissza
            az eredeti rendszerbe, és mutassuk meg, hogy ugyanazt a választ kapjuk, mint az (a) részben. (Ez kissé körülményes lehet;
            a legegyszerűbb, ha a síkot komplex síkként kezeljük, azaz az r = x + iy változóval dolgozunk.)


    4      Optimális hajítás
    Végül olyan, optimalizálást igénylő hajítási feladatokat vizsgálunk, amelyek az Egyesült Államok fizikaolimpiáján, az USAPhO-n
    ritkán fordulnak elő, de meglehetősen szórakoztatóak, és időnként nagyon elegáns megoldásuk van.

         8. példa

         Egy bogár át szeretne ugrani egy földön fekvő, R sugarú hengeres fatörzs fölött úgy, hogy elhaladásakor vízszintesen
         éppen súrolja a fatörzs tetejét. Mekkora minimális kezdősebesség v szükséges ehhez?

         Megoldás
         Legyen P a fatörzs tetején lévő pont. Ahhoz, hogy a bogár P-ben vízszintesen mozogjon, a függőleges mozgásra alkalmazott
         energiamegmaradás szerint a kezdeti vy sebességkomponensre az alábbi összefüggésnek kell teljesülnie:
                                           1                         p
                                             mvy2 = 2mgR, vy = 2 gR.
                                           2
         Ezért meg kell határoznunk a mozgás megvalósíthatóságához szükséges minimális vx értéket. Ha vx túl kicsi, a bogár
         feltételezett pályája ehelyett áthaladna a fatörzsön. A lehető legkisebb vx esetén a bogár pályája nemcsak érinti a fatörzset
         a P pontban, hanem a görbületi sugara is ugyanakkora (vagyis a pálya és a fatörzs alakjának első és második deriváltja is azonos).

         Egy r sugarú körön végzett egyenletes mozgásnál a gyorsulás a = v 2 /r. Megfordítva, ha egy test pillanatnyi görbületi sugara
         r, akkor a pályára merőleges gyorsuláskomponensnek a = v 2 /r-nek kell lennie. Ezt a bogárra P-ben alkalmazva kapjuk:
                                                  v2         p
                                              g = x , vx = gR.
                                                  R


                                                        10


    Kevin Zhou                                                                Physics Olympiad Handouts



         Így a minimális kezdeti sebesség
                                                q           p
                                           v=    vx2 + vy2 = 5gR.

         Ez a görbületi sugárra épülő trükk ritkán fordul elő, de amikor igen, nagyon érdekes.
