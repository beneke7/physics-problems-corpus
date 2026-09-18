---
id: solution-ocr-eotvos-1995-s-p2
source: eotvos
kind: official_solution_document
language: hu
solution_type: official
source_pdf: cache/phoxiv/eotvos/1995_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [eotvos-1995-superconductor-rings]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
2. feladat. Két vékony, koncentrikus, szupravezetó gyürú a síkjukra meróleges, homogén mágneses térben helyezkedik el. A mágneses indukció vektorának nagysága $B _ { 0 }$, iránya az ábrán a papír síkjába befelé mutat. A belső gyürú sugara sokkal kisebb a külső́nél $\left( R _ { 1 } \ll R _ { 2 } \right)$. Az egyes gyűrúk induktivitása $L _ { 1 }$ illetve $L _ { 2 }$, és a kölcsönös indukció sem hanyagolható el.

Mekkora és milyen irányú áramok indukálódnak az egyes gyűrúkben, ha a külső mágneses teret megszüntetjük?
Varga István
Megoldás. A megoldás alapgondolata az, hogy a szupravezető gyürúkben nem indukálódhat eredő feszültség, mert az végtelen nagy áramot eredményezne. Ez azt jelenti, hogy a külső mágneses tér leépülésével egyidejüleg olyan áramoknak kell indukálódniuk, hogy az áramváltozás miatti önindukciós és külcsönös indukciós feszültségek éppen


kioltsák a külső mágneses tér változása miatt indukálódó körfeszültséget. Másképp fogalmazva: a szuravezető gyürü által körülölelt mágneses fluxus nem változhat meg. Ha megszünik a külső tér fluxusa, fellép helyette az indukált áramok fluxusa.

Felírhatjuk tehát az alábbi egyenlőśégeket:

$$
B _ { 0 } R _ { 1 } ^ { 2 } \pi = L _ { 1 } I _ { 1 } + M I _ { 2 } \quad \text { és } \quad B _ { 0 } R _ { 2 } ^ { 2 } \pi = L _ { 2 } I _ { 2 } + M I _ { 1 } ,
$$

ahol $M$ a két gyúrú közti kölcsönös indukciós együttható. A fenti két egyenletből $I _ { 1 }$ és $I _ { 2 }$ kifejezhető:

$$
I _ { 1 } = \frac { B _ { 0 } \left( R _ { 1 } ^ { 2 } \pi L _ { 2 } - R _ { 2 } ^ { 2 } \pi M \right) } { L _ { 1 } L _ { 2 } - M ^ { 2 } } , \quad \text { illetve } \quad I _ { 2 } = \frac { B _ { 0 } \left( R _ { 2 } ^ { 2 } \pi L _ { 1 } - R _ { 1 } ^ { 2 } \pi M \right) } { L _ { 1 } L _ { 2 } - M ^ { 2 } } .
$$

Ezekben a kifejezésekben $B _ { 0 } , R _ { 1 } , R _ { 2 } , L _ { 1 }$ és $L _ { 2 }$ megadott értékek, $M$-et azonban meg kell még határoznunk.
Hogyan számíthatjuk ki a két gyűrú közötti kölcsönös indukciót? Használjuk ki, hogy $R _ { 1 } \ll R _ { 2 }$ ! Feltételezhetjük, hogy az $R _ { 1 }$ sugarú, kicsi belső gyürú belsejében az $I _ { 2 }$ áram által átjárt nagy, külső gyürüből származó mágneses mező jó közelítéssel homogénnek tekinthető. Így a külső gyürütől származó fluxus

$$
M I _ { 2 } = B \cdot R _ { 1 } ^ { 2 } \pi
$$

ahol $B$-t a nagy gyürúben folyó áram hozza létre a gyürú közepén, nagysága a Biot-Savart-törvény alapján:

$$
B = \mu _ { 0 } \frac { I _ { 2 } } { 2 R _ { 2 } } .
$$

Behelyettesítés után $M$-re a következőt kapjuk:

$$
M = \mu _ { 0 } \frac { \pi } { 2 } R _ { 1 } \frac { R _ { 1 } } { R _ { 2 } } .
$$

Hasonló megfontolással kaphatunk nagyságrendi becslést az $L _ { 1 }$ és $L _ { 2 }$ önindukciós együtthatókra is. Egy $R$ sugarú körvezetőben folyó áram által létrehozoztt $B _ { \text {átlag } }$ nagyságrendileg közelíthető a középpontban mérhető $B$ értékkel. Ennek megfelelően a fluxus $B R ^ { 2 } \pi$, s ezt az árammal osztva az önindukciós együtthatóra $L \approx \mu _ { 0 } R \pi / 2$ adódik.

Megjegyzés. Nem tartozik a megoldáshoz, de az érdekesség kedvéért megemlítjük, hogy a körgyürú induktivitására jó közelítéssel igaz az alábbi formula:

$$
L \approx \mu _ { 0 } R \ln \frac { R } { r } ,
$$

ahol $R$ a körgyürú sugara, $r$ pedig a kör keresztmetszetünek képzelt drót vastagságának a fele. Mivel a logaritmus lassan változó függvény, a gyürú önindukciós együtthatóját durva közelítésben $\mu _ { 0 } R$-rel arányosnak vehetjük.
$R _ { 1 } \ll R _ { 2 }$ miatt $M \ll L _ { 1 } \ll L _ { 2 }$, ezért az áramokra kapott kifejezéseket tovább egyszerúsíthetjük. A nevezőben $M ^ { 2 }$ elhanyagolható $L _ { 1 } L _ { 2 }$-höz képest, de elhanyagolható az $I _ { 2 }$ számlálójában szereplő második tag is az elsőhöz képest. Így kapjuk:

$$
I _ { 2 } = \frac { B _ { 0 } R _ { 2 } ^ { 2 } \pi } { L _ { 2 } } , \quad \text { illetve } \quad I _ { 1 } = \frac { B _ { 0 } R _ { 1 } ^ { 2 } \pi } { L _ { 1 } } \left( 1 - \mu _ { 0 } \frac { \pi } { 2 } \frac { R _ { 2 } } { L _ { 2 } } \right) .
$$

Hátra van még az áramok irányának meghatározása. $I _ { 2 }$ nyilván a 4. ábrán látható elrendezésben az óramutató járásával megegyező irányban folyik, hogy a papír síkjába befelé mutató indukcióvektort hozzon létre. $I _ { 1 }$ iránya nem ennyire magától értetődő, azt a zárójelben álló kifejezés előjele dönti el. Ennek megállapítására - Tóth Gábor Zsolt ötlete nyomán - használjuk fel, hogy egy körvezetőben folyó áram mágneses tere a kör síkjában fekvő belső pontokat vizsgálva a kör középpontjában a leggyengébb. Felírhatjuk tehát a következő egyenlőtlenséget:

$$
\Phi _ { 2 } = L _ { 2 } I _ { 2 } > \mu _ { 0 } \frac { I _ { 2 } } { 2 R _ { 2 } } R _ { 2 } ^ { 2 } \pi = \mu _ { 0 } \frac { \pi } { 2 } I _ { 2 } R _ { 2 } .
$$

Ebből következik, hogy $1 > \mu _ { 0 } \frac { \pi } { 2 } \frac { R _ { 2 } } { L _ { 2 } }$, vagyis az $I _ { 1 }$ áram is az óramutató járásával megegyező irányban folyik.
