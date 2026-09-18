---
id: "kevin-zhou-m1-ex008"
source: "kevin-zhou"
native_id: "KZ-M1-EX008"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "hu"
translated: true
links_en: "kevin-zhou-m1-ex008"
topic: [mechanika]
subtopic: [hajítás, energiamegmaradás, görbület]
math_tools: [differenciálszámítás, optimalizálás]
format: "explanation"
kind: "example"
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

Példa 8

         Egy bogár át szeretne ugrani a földön fekvő, R sugarú hengeres fatörzs fölött úgy, hogy
         elhaladásakor éppen vízszintesen súrolja a fatörzs tetejét. Mekkora a szükséges minimális
         kezdősebesség szükséges ehhez, ha a kezdősebességet v-vel jelöljük?

         Megoldás
         Legyen P a fatörzs legfelső pontja. Ahhoz, hogy a bogár P-ben vízszintesen mozogjon, a
         függőleges mozgásra alkalmazott energiamegmaradás szerint a kezdeti vy komponensre
         a következő összefüggésnek kell teljesülnie:
                                           1                         p
                                             mvy2 = 2mgR, vy = 2 gR.
                                           2
         Ezért meg kell határoznunk a mozgás megvalósulásához szükséges minimális vx értéket. Ha vx
         túl kicsi, a bogár feltételezett pályája a fatörzsön haladna keresztül. A legkisebb lehetséges
         vx esetén a bogár pályája nemcsak érinti a fatörzset a P pontban, hanem a görbületi sugara is
         azonos a fatörzsével (vagyis a pálya és a fatörzs alakjának első és második deriváltjai megegyeznek).

         r sugarú körpályán végzett egyenletes mozgásnál a gyorsulás a = v 2 /r. Megfordítva: ha egy
         test pályájának pillanatnyi görbületi sugara r, akkor a pályára merőleges gyorsuláskomponensnek
         a = v 2 /r értékűnek kell lennie. Ezt a bogárra P-ben alkalmazva azt kapjuk, hogy
                                                  v2         p
                                              g = x , vx = gR.
                                                  R


                                                        10


    Kevin Zhou                                                                Physics Olympiad Handouts



         Így a minimális kezdősebesség
                                                q           p
                                           v=    vx2 + vy2 = 5gR.

         A görbületi sugárnak ez a trükkje ritkán kerül elő, de érdekes, amikor mégis előkerül.
