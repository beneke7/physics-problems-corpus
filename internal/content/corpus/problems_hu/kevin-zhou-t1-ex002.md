---
id: "kevin-zhou-t1-ex002"
source: "kevin-zhou"
native_id: "KZ-T1-EX002"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "hu"
translated: true
links_en: "kevin-zhou-t1-ex002"
topic: [termodinamika]
subtopic: [ideális gáz, hővezetés, kvázisztatikus folyamatok, munka és belső energia]
math_tools: [analízis, logaritmusok]
format: "explanation"
kind: "example"
core_ideas: []
has_solution: false
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/T1.txt"
source_url: "sources/kevin_zhou/site/handouts/T1.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Hungarian translation of a candidate classified as Genuinely new in the Kevin Zhou overlap audit."
---

# KZ-T1-EX002

       2. példa

       Egy hőszigetelt hengert egy hővezető dugattyú két rekeszre oszt. Kezdetben a dugattyú a hengert két, A és B,
       egyaránt V /2 térfogatú és T0 hőmérsékletű rekeszre osztja. Mindkét rekeszben egy-egy mól egyatomos gáz van. Egy


                                                     2
   Kevin Zhou                                                               Physics Olympiad Handouts



      külső ágens lassan oldalra mozgatja a dugattyút, amíg a térfogatok V /3 és 2V /3 nem lesznek. A folyamat során a
      hőmérséklet egyenletes marad. Mekkora a végső hőmérséklet?

      Megoldás
      A feladat nehézsége az, hogy a két rekesz nyomása nem egyenlő; ez azért lehetséges, mert a külső ágens tartja a
      dugattyút. A hővezetés ehelyett a hőmérsékleteket teszi egyenlővé. Az ágens által végzett munka
                                                                            
                                                                  dVA dVB
                            dW = −pA dVA − pB dVB = −RT                +       .
                                                                  VA      VB

      Másfelől ez megegyezik az energia növekedésével is,
                                               3
                                      dW = dU = nR dT = 3R dT.
                                               2
      A két összefüggést kombinálva differenciálegyenletet kapunk,
                                      Z          Z        Z
                                         dT         dVA     dVB
                                    3        =−         −
                                         T           VA     VB
      amiből a végső Tf hőmérsékletre

                                   Tf        2     4     9               32/3
                           3 log      = − log − log = log ,      Tf =         T0 .
                                   T0        3     3     8                2
