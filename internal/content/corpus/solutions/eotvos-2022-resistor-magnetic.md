---
id: eotvos-2022-resistor-magnetic
source: eotvos
language: hu
solution_language: hu
translated: false
problem: eotvos-2022-resistor-magnetic
solution_type: official
source_document: solution-document-eotvos-2022-s
source_pdf: cache/phoxiv/eotvos/2022_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/eotvos/2022_S.pdf."
---

3. feladat. Egyenletes vastagságú ellenállás-
huzalból r és 2r sugarú karikákat készı́tünk, és
azokat egy sı́kban, koncentrikusan helyezzük el.
A karikákat két helyen, ugyanabból az ellenál-
láshuzalból készült, sugárirányú
”
küllőkkel” köt-
jük össze, az ábrán látható módon. Az elrende-
zés A pontjánál (sugárirányban) I erősségű ára-
mot vezetünk be, a B pontjából pedig (szintén
sugárirányban) elvezetjük azt. Mekkora a mág-
neses indukcióvektor nagysága a karikák O kö-
zéppontjában?
(Cserti József )
I. megoldás. A feladat megoldása során először a Kirchhoﬀ-törvények segı́t-
ségével meghatározzuk az egyes vezetékekben folyó áramokat, majd kiszámoljuk
az ezek által keltett mágneses teret a karikák közös O középpontjában.
Jelölje R az r hosszúságú vezetékdarab ellenállását! Így az egyes körı́vek, illetve
a küllők ellenállása, az ábrán megadott jelöléseket használva, az alábbiak szerint
adódik: R1 = πR, R2 = R4 = R, R3 = R6 = π
2
R, R5 = πR, R7 = 3πR.
Az A pontban bevezetünk, a B pontban kivezetünk I áramot. Az egyes veze-
tékdarabokon folyó áramokat a 10. ábra alapján vesszük fel, ahol már kielégı́tettük
a Kirchhoﬀ-féle csomóponti törvényeket, azaz bármely csomópontra a bemenő és
kimenő áramok összege megegyezik. Láthatjuk, hogy összesen három ismeretlen
paraméterünk van: I1, I2 és I3, melyeket a huroktörvényekből határozhatunk meg.
Írjuk fel a huroktörvényeket a külső karikára, a belső karikára, valamint a jobb alsó
114 Középiskolai Matematikai és Fizikai Lapok, 2023/2
i
i
2023.2.4 – 16:39 – 115. oldal – 51. lap KöMaL, 2023. február
i
i
i
i
i
i
10. ábra
negyed körgyűrű határára:
R1I1 − R7(I − I1 − I2) = 0 → πR

I1 − 3(I − I1 − I2)

= 0, (1)
R3I3 + R5(I − I2 + I3) − R6(I2 − I3) = 0,
amiből
(2)
πR
2

I3 + 2(I − I2 + I3) − (I2 − I3)

= 0,
adódik, és végül
(3) R2I2 + R3I3 − R4(I − I2) − R1I1 = R

I2 +
π
2
I3 − (I − I2) − πI1

= 0.
Az ismeretlen paraméterek (I1, I2 és I3) egy háromismeretlenes, lineáris egyenlet-
rendszer megoldásaként adódnak. Tényleg szükség van ezek kiszámolására? Pró-
báljuk megoldani a feladatot enélkül!
A sugárirányú bevezetések, kivezetések és küllők a Biot–Savart törvény értel-
mében nem adnak járulékot a középpontban mért mágneses tér értékéhez. A mág-
neses indukció nagysága egy r sugarú, I áramjárta körvezető középpontjában
B =
μ0
2
I
r
. Ha csak egy α középponti szöggel leı́rható körı́v járulékát tekintjük
a középpontban, az B = μ0α
4π
I
r alakban adódik. Ezek alapján már kiszámı́thatjuk
a külső, majd a belső karika által keltett mágneses teret. A külső karika esetén:
B =
μ0
8
I1
2r
−
3μ0
8
I − I1 − I2
2r
=
μ0
16r

I1 − 3(I − I1 − I2)

= 0,
Középiskolai Matematikai és Fizikai Lapok, 2023/2 115
i
i
2023.2.4 – 16:39 – 116. oldal – 52. lap KöMaL, 2023. február
i
i
i
i
i
i
azaz a mágneses indukció értéke nulla a középpontban. A levezetés utolsó lépésében
felhasználtuk az (1) egyenletet. A belső karika esetében:
B =
μ0
8
I3
r
+
2μ0
8
I − I2 + I3
r
−
μ0
8
I2 − I3
r
=
μ0
8r

I3 +2(I −I2 +I3)−(I2 −I3)

= 0,
itt is nullának adódik a mágneses indukció nagysága. Az utolsó lépésben a (2)
egyenletet használtuk fel. Összegezve, a teljes rendszer esetében is nulla a mágneses
indukcióvektor a középpontban. Mi a mélyebb ﬁzikai oka ennek az eredménynek?
Nézzük át a probléma általánosı́tott megoldását!
11. ábra
II. (általános) megoldás. A felrajzolt 11. áb-
ra csak sugárirányú küllőkből és koncentrikus ka-
rikákból áll. A sugárirányú szakaszok által keltett
mágneses tér a középpontban nulla. Tekintsünk egy
r̃ sugarú karikát, melyet a befutó sugárirányú veze-
tékek körı́vekre bontanak. Az i. körı́v középponti
szöge legyen αi, hossza i, rajta átfolyó áram Ii, el-
lenállása Ri, ezen ellenálláson eső feszültség Ui.
Az i. körı́v által keltett mágneses tér a közép-
pontban
Bi =
μ0αi
4π
Ii
r̃
=
μ0
4π
iIi
r̃2
=
μ0
4π
rRiIi
Rr̃2
=
μ0
4π
rUi
Rr̃2
,
ami arányos a körı́ven eső feszültséggel. Összegezve az összes körı́v járulékát:
B =

i
Bi =
μ0
4π
r
Rr̃2

i
Ui = 0.
A huroktörvény alapján a feszültségesések összege a zárt karikára nulla, ı́gy a karika
által keltett mágneses tér is nulla a középpontban. Az általános megoldás alapján
akárhány koncentrikus kör és sugárirányú vezetékből összeállı́tott elrendezés esetén
nulla a mágneses tér a középpontban.
?
Az ünnepélyes eredményhirdetésre és dı́jkiosztásra 2022. november 25-én dél-
után került sor az ELTE TTK Konferenciatermében. Meghı́vást kaptak az 50 és
25 évvel ezelőtti Eötvös-verseny nyertesei is. A 25 évvel ezelőtti dı́jazottak közül
Egri Győző, Koncz Imre és Várkonyi Péter jöttek el – ők pár mondatban beszéltek
a pályafutásukról.
Ezután következett a 2022. évi verseny feladatainak és megoldásainak bemu-
tatása. Az 1. feladat megoldását Gnädig Péter, a 2. feladatét Vankó Péter, a 3. fel-
adatét Széchenyi Gábor ismertette.
Az esemény végén került sor az eredményhirdetésre. A dı́jakat Ormos Pál,
az Eötvös Loránd Fizikai Társulat elnöke adta át.
Mindhárom feladat helyes megoldásáért első dı́jat nyert Kovács Balázs Csaba,
az ELTE ﬁzika BSc szakos hallgatója, aki a Hatvani Bajza József Gimnáziumban
érettségizett Maruzsiné Sevella Judit tanı́tványaként.
116 Középiskolai Matematikai és Fizikai Lapok, 2023/2
i
i
2023.2.4 – 16:39 – 117. oldal – 53. lap KöMaL, 2023. február
i
i
i
i
i
i
Az első feladat helyes, valamint a második és harmadik feladat lényegében
helyes megoldásáért második dı́jat nyert Kincses Ábel, a BME ﬁzika BSc szakos
hallgatója, aki a Deák téri Evangélikus Gimnáziumban érettségizett Horváth Gab-
riella és Szőkéné Mezősi Tı́mea tanı́tványaként.
Az első és a harmadik feladat helyes megoldásáért harmadik dı́jat nyert Gurzó
József, az ELTE ﬁzika BSc szakos hallgatója, aki a Budapesti Fazekas Mihály
Gyakorló Általános Iskola és Gimnáziumban érettségizett Nagy Piroska Mária
tanı́tványaként.
A harmadik feladat helyes, valamint az első vagy a második feladat lényegében
helyes megoldásáért kiemelt dicséretet kapott Bognár András Károly, a Budapes-
ti Fazekas Mihály Gyakorló Általános Iskola és Gimnázium 12. osztályos tanulója,
Nagy Piroska Mária tanı́tványa; Csonka Illés, a Ciszteri Rend Nagy Lajos Gimná-
ziuma 11. osztályos tanulója, Jéhn János és Pálfalvi László tanı́tványa; valamint
Hajós Balázs, az ELTE Apáczai Csere János Gyakorló Gimnázium és Kollégium
12. osztályos tanulója, Gyertyán Attila tanı́tványa.
Az első vagy a harmadik feladat helyes, vagy a második feladat lényegében
helyes megoldásáért dicséretet kapott Bencz Benedek, a Baár-Madas Református
Gimnázium, Általános Iskola és Diákotthon 10. osztályos tanulója, Horváth Norbert
tanı́tványa; Blázsik Árpád, az ELTE ﬁzika BSc szakos hallgatója, aki a Békásme-
gyeri Veres Péter Gimnáziumban érettségizett Rakovszki Andorás és Székely György
tanı́tványaként; Gábriel Tamás, a Budapesti Fazekas Mihály Gyakorló Általános
Iskola és Gimnázium 12. osztályos tanulója, Nagy Piroska Mária tanı́tványa; Ha-
lász Henrik Kristóf, a Szegedi Radnóti Miklós Kı́sérleti Gimnázium 12. osztályos
tanulója, Gutai Árpád és Csányi Sándor tanı́tványa; Horváth Ákos Zsolt, a BME
ﬁzika BSc szakos hallgatója, aki a Kempelen Farkas Gimnáziumban érettségizett
Bakosné Novák Andrea és Horváth Eszter tanı́tványaként; Kohut Márk Balázs,
a Kecskeméti Katona József Gimnázium 12. osztályos tanulója, Sáróné Jéga-
Szabó Irén tanı́tványa, Köpenczei Csanád, a Bonyhádi Petőﬁ Sándor Evangélikus
Gimnázium és Kollégium 12. osztályos tanulója, Wiandt Péter tanı́tványa; Molnár
Barnabás, a Budapesti Fazekas Mihály Gyakorló Általános Iskola és Gimnázium
12. osztályos tanulója, Nagy Piroska Mária tanı́tványa; Molnár-Szabó Vilmos,
a Budapesti Fazekas Mihály Gyakorló Általános Iskola és Gimnázium 12. osztályos
tanulója, Nagy Piroska Mária tanı́tványa; Schäﬀer Donát, a Pécsi Janus Pannonius
Gimnázium 11. osztályos tanulója, Lehőcz Mária és Lányi Veronika tanı́tványa;
valamint Toronyi András, az ELTE ﬁzika BSc szakos hallgatója, aki a Baár-Madas
Református Gimnázium, Általános Iskola és Diákotthonban érettségizett Horváth
Norbert tanı́tványaként.
Az első dı́jjal a verseny plakettjén kı́vül az Andersen Adótanácsadó Zrt. és
a Nanorobot Vagyonkezelő Kft. adományából 80 ezer forint, a második dı́jjal 65 ezer,
a harmadik dı́jjal 50 ezer, a kiemelt dicsérettel 30 ezer, a dicsérettel 15 ezer forint
pénzjutalom járt. A dı́jazottak tanárai könyveket kaptak az Eötvös Loránd Fizikai
Társulat ajándékaként. Köszönjük az adományozók önzetlen támogatását!
Gnädig Péter, Széchenyi Gábor, Vankó Péter, Vigh Máté
Középiskolai Matematikai és Fizikai Lapok, 2023/2 117
