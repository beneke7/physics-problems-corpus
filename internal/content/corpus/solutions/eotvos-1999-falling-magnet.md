---
id: eotvos-1999-falling-magnet
source: eotvos
language: hu
solution_language: hu
translated: false
problem: eotvos-1999-falling-magnet
solution_type: official
source_document: solution-document-eotvos-1999-s
source_pdf: cache/phoxiv/eotvos/1999_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/eotvos/1999_S.pdf."
---

3. Hosszú, keskeny, függ®leges üveg sövet egy vele azonos tengely¶, de sokkal szélesebb, r küls® sugarú másik
üveg s® vesz körül. E szélesebb sövön s¶r¶n, egymástól h távolságra elhelyezked®, R ellenállású körvezet®k vannak.
Ha a keskeny s®be egy m tömeg¶, d er®sség¶ (mágneses dipólnyomatékú) ki siny rúdmágnest ejtünk, az viszonylag
hamar elér egy állandó v0 sebességet, amellyel egyenletesen süllyed.(6. ábra.)
További kísérleteink során a fenti öt mennyiség (m, d, h, R, r) közül az egyiket mindig a kétszeresére növeljük,
miközben a másik négyet nem változtatjuk meg. Hányszorosára n® az egyes esetekben a ki siny rúdmágnes állandósult
végsebessége?
Az eredeti eset: m,d,h,R,r; ekkor v = v0.
a) (2m, d, h, R, r); va/v0 =?
b) (m, 2d, h, R, r); vb/v0 =?
c) (m, d, 2h, R, r); vc/v0 =?
d) (m, d, h, 2R, r); vd/v0 =?
e) (m, d, h, R, 2r); ve/v0 =?
A me hanikai súrlódástól és a közegellenállástól, továbbá a körvezet®k öninduk iójától és köl sönös induk iójától
eltekinthetünk.
(Gnädig Péter)
Megoldás
1
. Számítsuk ki, mennyi energia disszipálódik (mennyi Q h® fejl®dik) egyetlen körvezet®ben, miközben
a mágnes keresztülesik rajta. Kétféleképpen is következtethetünk erre a Q mennyiségre: egyrészt az energiaviszonyok
összevetéséb®l, másrészt dimenzionális megfontolásokból.
Ha az m tömeg¶ mágnes egyenletesen mozog függ®legesen lefelé a s®ben és L utat tesz meg, helyzeti energiája mgL
értékkel sökken. Eközben áthalad L/h darab körvezet®n, mindegyikben Q h®t fejleszt, és mivel a mágnes mozgási
energiája nem változik, fenn kell álljon, hogy
mgL = QL/h, azaz Q = mgh.
Milyen
zikai mennyiségekt®l és milyen módon függhet Q? Nyilván függ a h®fejl®dés a ki siny mágnes jellemz®it®l
(a d dipólnyomatéktól és a v sebességt®l), továbbá a körvezet® adataitól (az r sugártól és a vezet® R elektromos
ellenállásától):
Q = F(d, v, r, R),
ahol F valamilyen négyváltozós függvény, melynek pontos (vagy legalább arányossági tényez®k erejéig határozott)
alakja megadná a feladat valamennyi kérdésére a választ.
Ha dimenzionális megfontolásokkal akarjuk  kitalálni , hogyan függ F(d, v, r, R) az egyes változóitól, nem szabad
megfeledkeznünk arról, hogy Q a felsorolt mennyiségek mellett függhet még µ0-tól (a vákuum permeabilitásától), ami
1Terpai Tamás dolgozata alapján
ugyan nem változó, hanem egy meghatározott mértékegység¶ és nagyságú mennyiség, de a h®fejl®dés képletében (lévén
az mágnességgel kap solatos folyamatok eredménye) ez a
zikai állandó is felbukkanhat. A keresett összefüggés tehát
Q = G(d, v, r, R, µ0),
alakú, ahol G egy ötváltozós függvény, melyet azonban az SI itt el®forduló négy alapmértékegységének (kg, m, s, A)
vizsgálatából nem lehet meghatározni.
A feladat mégis megoldható a dimenzióanalízis módszerével, ugyanis a h®fejl®dés és az R ellenállás közötti össze-
függés (a többi adat rögzített értéke mellett) fordított arányosság kell legyen (azaz Q ∝ 1/R), hiszen az áram h®hatása
(adott módon változó indukált feszültség mellett) az ellenállás re iprokával arányos. Mondhatjuk tehát, hogy
Q ∝
1
R
f(d, v, r, µ0),
ahol f(d, v, r, µ0) már sak 4
zikai mennyiségt®l függ.
Írjuk fel az egyes
zikai mennyiségek mértékegységét:
[Q] =
kgm2
s2
, [1/R] =
s3
A2
kgm2
[v] =
m
s
, [d] = Am2
, [r] = m, [µ0] =
kgm
A2 s2
.
Ha a keresett f függvényt hatványfüggvény alakban próbáljuk felírni
2
:
h(d, v, r, µ0) ∝ dα
· vβ
· rγ
· µδ
0,
akkor a 4 független mértékegység hatványainak összehasonlításából a kitev®kre
α = 2, β = 1, γ = −3, δ = 2
adódik. Ezek szerint
Q = mgh ∝
(µ0d)2
v
Rr3
,
vagyis a mágnes esési sebességének és a többi paraméternek a kap solata:
v ∝
mhRr3
d2
.
Ez a formula a feladat valamennyi kérdésére megadja választ: akár a tömeget, akár a menettávolságot, vagy a
körvezet®k elektromos ellenállását növeljük az eredeti érték kétszeresére, a mágnes esési sebessége 2-szer nagyobb lesz.
Kétszer er®sebb mágnes az eredetinél 4-szer lassabban fog mozogni, végül pedig a körvezet®k sugarának kétszerezése
a sebességet az eredeti érték 8-szorosára növeli.
⋆
Az eredményhirdetésre és az ünnepélyes díjkiosztásra az ELTE új, lágymányosi épületének egyik nagyobb el®-
adótermében került sor 1999. november 19-én. Itt el®ször a Versenybizottság elnöke megemlékezett Sztrókay Pálról
(1899 1965) és Náray-Szabó Istvánról (1899 1972), akik éppen száz évvel ezel®tt születtek, s az 1917. évi tanulóver-
senyen az 1. és 2. díjat nyerték. Sztrókay Pál Kossuth-díjas mérnök lett, a Ganznál a villamos vontatás fejlesztésén
dolgozott, Kandó Kálmán utáni második emberként. Náray-Szabó István nemzetközi tekintély¶ vegyészprofesszor lett,
a
zika és a kémia határterületén alkotott: röntgendi rak ióval kutatta az anyag kémiai-
zikai szerkezetét.
A rövid megemlékezések után került sor idei feladatok megoldásának diszkussziójára. Az els® feladat megoldását
Radnai Gyula, a másodikat az egyik versenyz® (Tóth Bálint), a harmadikat Gnädig Péter mutatta be. A harmadik
feladathoz kap solódóan, azt modellezve kísérleteket is láthattak a megjelentek: más-más falvastagságú, más-más
fémb®l készült söveknél különböz® er®sség¶ rúdmágnesek esési idejét
gyelhették meg, s így összehasonlíthatták
különféle körülmények között kialakuló örvényáramok fékez® hatását.
Az ünnepélyes eredményhirdetésen Fehér István, az ELFT alelnöke adta át (a feladatok kit¶z®ib®l álló) Ver-
senybizottság által odaítélt díjakat. A Társulat által biztosított pénzjutalmak mellett a Nemzeti Tankönyvkiadótól
könyvutalványokat kaptak a díjazott versenyz®k, akiknek jelen lev® tanárai a M¶szaki Kiadó és a Tankönyvkiadó
ajándék-könyveib®l válogathattak. Sajnos nem mindenki tudott eljönni: az éppen a díjkiosztás napján kitört hóvihar
miatt maradt le az ünnepségr®l néhány régi Eötvös-verseny nyertes is.
2Belátható, hogy ezt az általánosság megszorítása nélkül megtehetjük.
7. ábra
Az 1999. évi Eötvös-verseny díjazottai (fentr®l lefelé, balról jobbra): Péterfalvi Csaba Géza, Terpai Tamás, Gáspár
Merse El®d, Buruzs Ádám, Katona Gergely, Csillag Kristóf, Heged¶s Ákos, Patay Gergely, Tóth Bálint, Pesti Gábor
és Czigler István.
A mostani verseny eredménye a következ®:
Els® díjat kapott: Terpai Tamás, az ELTE matematikus hallgatója, aki a Fazakas Mihály F®városi Gyakorló Gimná-
ziumban érettségizett mint Horváth Gábor tanítványa.
Második díjat kapott a verseny 2 6. helyezettje: Heged¶s Ákos, a pé si iszter i Nagy Lajos Gimnázium 12. osztályos
tanulója, Orovi a Márkné tanítványa; Katona Gergely, az ELTE
zikus hallgatója, aki a budapesti ELTE Trefort
Ágoston Gyakorlóiskolában érettségizett mint Szörényi Zoltán tanítványa; Pesti Gábor, a nagykanizsai Batthyány
Lajos Gimnázium 11. osztályos tanulója, Piriti János tanítványa; Péterfalvi Csaba Géza, az ELTE geo
zikus
hallgatója, aki a szekszárdi Garay János Gimnáziumban érettségizett mint Bayer József tanítványa; Tóth Bálint, az
ELTE
zikus hallgatója, aki a Fazakas Mihály F®városi Gyakorló Gimnáziumban érettségizett mint Horváth Gábor
tanítványa.
Harmadik díjat kapott a verseny 7 10. helyezettje: Béky Ben e, a Fazakas Mihály F®városi Gyakorló Gimnázium
10. osztályos tanulója, Horváth Gábor tanítványa; Csillag Kristóf, a püspökladányi Kara s Feren Gimnázium 12.
osztályos tanulója, Lajtosné Buzási Márta tanítványa; Gáspár Merse El®d, a Fazakas Mihály F®városi Gyakorló
Gimnázium 12. osztályos tanulója, Horváth Gábor tanítványa; Patay Gergely, a debre eni Tóth Árpád Gimnázium
12. osztályos tanulója, Ková s Miklós és Szegedi Ervin tanítványa.
Di séretben részesült a verseny 11 13. helyezettje: Buruzs Ádám, a szegedi Radnóti Miklós Gimnázium 12. osztályos
tanulója, Mike János tanítványa; Czigler István, a budapesti Lauder Javne Gimnázium 12. osztályos tanulója, Tóth
Eszter tanítványa; Kenyeres Péter, a POTE orvostanhallgatója, aki a zalaegerszegi Zrínyi Miklós Gimnáziumban
érettségizett mint Pálovi s Róbert tanítványa.
Az 1. díjas versenyz® 10 000 Ft pénzjutalmat és 5 000 Ft érték¶ könyvutalványt, a 2. díjasok 6 000 Ft pénzjutalmat
és 4 000 Ft érték¶ könyvutalványt, a 3. díjasok 4 000 Ft pénzjutalmat és 4 000 Ft érték¶ könyvutalványt, a di séretben
részesültek 3 000 Ft érték¶ könyvutalványt kaptak.
Gratulálunk a nyerteseknek és tanáraiknak!
Gnädig Péter, Radnai Gyula
r
v
0
d
m
R
h
D C B A
M
F E
D C B A
M
ϕ
M
F P R
ϕ
µ
ρ
1 k m
0,9 km
2 km
A B C D E F
G H
M
