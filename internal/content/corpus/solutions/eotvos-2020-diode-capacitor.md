---
id: eotvos-2020-diode-capacitor
source: eotvos
language: hu
solution_language: hu
translated: false
problem: eotvos-2020-diode-capacitor
solution_type: official
source_document: solution-document-eotvos-2020-s
source_pdf: cache/phoxiv/eotvos/2020_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/eotvos/2020_S.pdf."
---

3. feladat. Egy ideális diódából, két R = 2 kΩ nagyságú ellenállásból, egy kezdetben töltetlen, C = 100 µF kapa itású
kondenzátorból és egy feszültséggenerátorból a 4. ábrán látható kap solást állítottuk össze. A feszültséggenerátoron
f = 5 kHz frekven iájú, +U0 és −U0 között változó szimmetrikus négyszögjelet állítunk be, ahol U0 = 3,6 V.
4. ábra
a) Mekkora maximális feszültségre tölt®dik fel a kondenzátor?
b) A kondenzátor töltetlen állapotától számítva körülbelül mennyi id® után éri el a kondenzátor feszültsége a maxi-
mális érték felét?
Megoldás. A kap solásban félperiódusonként felváltva +U0 és −U0 feszültséget kap solunk egy soros RC kap-
solásra, ahol a kondenzátor kapa itása mindvégig C, az ellenállás pedig az áramiránytól függ®en R1 =
R
2
, illetve
R2 = R. Jól ismert, hogy ha egy töltetlen, C kapa itású kondenzátorból és egy R ellenállásból álló soros RC kap so-
lásra U0 feszültséget kap solunk, akkor a kondenzátor feszültsége az
U(t) = U0

1 − e−
t
τ

függvény szerint változik, ahol az id®állandó τ = RC.
Vegyük észre, hogy a mi esetünkben az (egyik) id®állandó τ = RC = 0,2 s (a másik ennek fele), a négyszögjel
periódusideje pedig T =
1
f
= 0,2 ms, és így T ≪ τ. Emiatt egy fél periódusnyi id® alatt a tölt®d® kondenzátor
feszültsége nagyon jó közelítéssel lineárisan változik.
Legyen a kondenzátor feszültsége egy adott id®pillanatban UC(t), a kondenzátoron átfolyó áram pedig I(t). A négy-
szögjel els® fél periódusában (amikor a dióda nyitva van, és mindkét ellenálláson folyik áram)
U0 − UC = R1I1(t) =
R
2
I1(t), amib®l I1(t) =
2
R

U0 − UC(t)

.
Egy fél periódus alatt ez az áram I1(t)
T
2
töltést szállít a kondenzátorra, így a kondenzátor feszültségének megvál-
tozása
∆UC(t) =
1
C
I1(t)
T
2
=
T
RC

U0 − UC(t)

=
T
τ

U0 − UC(t)

.
A másik fél periódusban (amikor a dióda lezár, és sak az egyik ellenálláson folyhat áram)
−U0 − UC = R2I2(t) = RI2(t), amib®l I2(t) =
1
R

− U0 − UC(t)

,
és a fél periódus alatt a kondenzátor feszültségének megváltozása
∆UC(t) =
1
C
I2(t)
T
2
=
T
2RC

− U0 − UC(t)

=
T
2τ

− U0 − UC(t)

.
Egy teljes periódus alatt a feszültség teljes megváltozása a két fél periódus alatti változás összege:
∆UC(t) =
T
2τ

U0 − 3UC(t)

=
3T
2τ

U0
3
− UC(t)

.
A kondenzátor feszültsége akkor nem n® tovább, ha ∆UC(t) = 0, azaz ha UC(t) =
U0
3
, tehát a kondenzátor hosszú
id® után UC(∞) =
U0
3
= 1,2 V feszültségre tölt®dik fel.
Ezután áttérünk a b) kérdés megválaszolására. Mivel a periódusid® sokkal kisebb az id®állandónál, az egy periódus
alatti feszültségváltozás nagyon ki si, a kondenzátor sok perióduson át tölt®dik. Ezen az id®skálán a félperiódusok alatti
tölt®dések és kisülések kis ingadozása nem is látszik. Egy olyan folyamatot kapunk, ahol a kondenzátor feszültsége
lényegében folyamatosan n® a kezdeti UC(0) = 0 értékt®l az UC(∞) értékig.
Az utolsó egyenletünk alapján
d

UC(∞) − UC(t)

dt
≈
∆

UC(∞) − UC(t)

T
= −
3
2τ

UC(∞) − UC(t)

.
Ez pedig egy ugyanolyan di eren iálegyenlet, mint amely leírja egy kondenzátor feltölt®dését (és amely jól ismert
a radioaktív bomlástörvényb®l is), megoldása:

UC(∞) − UC(t)

=

UC(∞) − UC(0)

e−
3t
2τ ,
amib®l látható, hogy a kondenzátor akkor tölt®dik fel a maximális érték felére, ha
e−
3t
2τ =
1
2
, azaz t =
2
3
τ ln2 = 0,0924 s.
∗
Az ünnepélyes eredményhirdetés és díjkiosztás a járványhelyzet miatt elmaradt. Helyette az eredetileg meghirdetett
id®pontban, 2020. november 20-án délután 3 órakor a verseny honlapjára került fel mindaz, ami az eredményhirdetésen
elhangzott volna. Ismertetésre kerültek az 50 és 25 évvel ezel®tti Eötvös-verseny feladatai, és az akkori díjazottak egy
részének visszaemlékezései: az 50 évvel ezel®ttiek közül Horváth Péter és Ti hy-Rá s Ádám, a 25 évvel ezel®ttiek közül
Lovas Rezs®, Tóth Gábor Zsolt és Varga Dezs® küldött üzenetet.
Ezt követte a 2020. évi verseny feladatainak és megoldásainak bemutatása (az 1. feladat megoldását Ti hy Géza,
a 2. feladatét Vigh Máté, a 3. feladatét Vankó Péter írta le), majd az eredmények közlése:
Egyetlen versenyz® sem oldotta meg mindhárom feladatot, így a versenybizottság nem adott ki els® díjat.
Az els® feladat helyes és a harmadik feladat lényegében helyes megoldásáért, valamint a második feladatban elért
részeredményekért második díjat nyert Bonifert Balázs, a budapesti Baár-Madas Református Gimnázium 12. osztá-
lyos tanulója, Horváth Norbert tanítványa és Pá sonyi Péter, a BME me hatronikai mérnök alapszakos hallgatója,
aki a Zalaegerszegi Zrínyi Miklós Gimnáziumban érettségizett Pálovi s Róbert tanítványaként.
A második és a harmadik feladat ki sit hiányos megoldásáért harmadik díjat nyert Molnár Szabol s, a BME

zika BS szakos hallgatója, aki a Ke skeméti Katona József Gimnáziumban érettségizett Sáróné Jéga-Szabó Irén
tanítványaként.
Az els® feladat hibátlan megoldásáért di séretet kapott Fekete Dezs® Domonkos, a BME
zika BS szakos hall-
gatója, aki a Ke skeméti Katona József Gimnáziumban érettségizett Sáróné Jéga-Szabó Irén tanítványaként, Selmi
Bálint, a Pé si Le®wey Klára Gimnázium 12. osztályos tanulója, Simon Péter, Kotek László és Pálfalvi László tanít-
ványa, valamit Sepsi Csombor Márton, a Zalaegerszegi Zrínyi Miklós Gimnázium 12. osztályos tanulója, Ková s
Tibor tanítványa.
A második díjjal Zimányi Gergely adományából 75 ezer, a harmadik díjjal 55 ezer, a di sérettel 35 ezer forint
pénzjutalom jár. A díjazottak tanárai az Eötvös Loránd emlékalbumot kapják. Az Eötvös Loránd Fizikai Társulatot
a Nanorobot Vagyonkezel® Kft. és az Andersen Adótaná sadó Zrt. támogatja. Köszönjük az adományozók önzetlen
támogatását!
Ti hy Géza, Vankó Péter, Vigh Máté
