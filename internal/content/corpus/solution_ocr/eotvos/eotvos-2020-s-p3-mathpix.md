---
id: solution-ocr-eotvos-2020-s-p3
source: eotvos
kind: official_solution_document
language: hu
solution_type: official
source_pdf: cache/phoxiv/eotvos/2020_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [eotvos-2020-diode-capacitor]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
3. feladat. Egy ideális diódából, két $R = 2 k \Omega$ nagyságú ellenállásból, egy kezdetben töltetlen, $C = 100 \mu F$ kapacitású kondenzátorból és egy feszültséggenerátorból a 4. ábrán látható kapcsolást állítottuk össze. A feszültséggenerátoron $f = 5 \mathrm { kHz }$ frekvenciájú, $+ U _ { 0 }$ és $- U _ { 0 }$ között változó szimmetrikus négyszögjelet állítunk be, ahol $U _ { 0 } = 3,6 \mathrm {~V}$.

![](../../../figures/solution-ocr/bf6580e0bd065783c1315498.jpg)
4. ábra

a) Mekkora maximális feszültségre töltödik fel a kondenzátor?
b) A kondenzátor töltetlen állapotától számítva körülbelül mennyi idő után éri el a kondenzátor feszültsége a maximális érték felét?

Megoldás. A kapcsolásban félperiódusonként felváltva $+ U _ { 0 }$ és $- U _ { 0 }$ feszültséget kapcsolunk egy soros $R C$ kapcsolásra, ahol a kondenzátor kapacitása mindvégig $C$, az ellenállás pedig az áramiránytól függően $R _ { 1 } = \frac { R } { 2 }$, illetve $R _ { 2 } = R$. Jól ismert, hogy ha egy töltetlen, $C$ kapacitású kondenzátorból és egy $R$ ellenállásból álló soros $R C$ kapcsolásra $U _ { 0 }$ feszültséget kapcsolunk, akkor a kondenzátor feszültsége az

$$
U ( t ) = U _ { 0 } \left( 1 - e ^ { - \frac { t } { \tau } } \right)
$$

függvény szerint változik, ahol az időállandó $\tau = R C$.
Vegyük észre, hogy a mi esetünkben az (egyik) időállandó $\tau = R C = 0,2 \mathrm {~s}$ (a másik ennek fele), a négyszögjel periódusideje pedig $T = \frac { 1 } { f } = 0,2 \mathrm {~ms}$, és így $T \ll \tau$. Emiatt egy fél periódusnyi idő alatt a töltődő kondenzátor feszültsége nagyon jó közelítéssel lineárisan változik.

Legyen a kondenzátor feszültsége egy adott időpillanatban $U _ { \mathrm { C } } ( t )$, a kondenzátoron átfolyó áram pedig $I ( t )$. A négyszögjel első fél periódusában (amikor a dióda nyitva van, és mindkét ellenálláson folyik áram)

$$
U _ { 0 } - U _ { \mathrm { C } } = R _ { 1 } I _ { 1 } ( t ) = \frac { R } { 2 } I _ { 1 } ( t ) , \quad \text { amiből } \quad I _ { 1 } ( t ) = \frac { 2 } { R } \left[ U _ { 0 } - U _ { \mathrm { C } } ( t ) \right] .
$$

Egy fél periódus alatt ez az áram $I _ { 1 } ( t ) \frac { T } { 2 }$ töltést szállít a kondenzátorra, így a kondenzátor feszültségének megváltozása

$$
\Delta U _ { \mathrm { C } } ( t ) = \frac { 1 } { C } I _ { 1 } ( t ) \frac { T } { 2 } = \frac { T } { R C } \left[ U _ { 0 } - U _ { \mathrm { C } } ( t ) \right] = \frac { T } { \tau } \left[ U _ { 0 } - U _ { \mathrm { C } } ( t ) \right] .
$$

A másik fél periódusban (amikor a dióda lezár, és csak az egyik ellenálláson folyhat áram)

$$
- U _ { 0 } - U _ { \mathrm { C } } = R _ { 2 } I _ { 2 } ( t ) = R I _ { 2 } ( t ) , \quad \text { amiből } \quad I _ { 2 } ( t ) = \frac { 1 } { R } \left[ - U _ { 0 } - U _ { \mathrm { C } } ( t ) \right] ,
$$

és a fél periódus alatt a kondenzátor feszültségének megváltozása

$$
\Delta U _ { \mathrm { C } } ( t ) = \frac { 1 } { C } I _ { 2 } ( t ) \frac { T } { 2 } = \frac { T } { 2 R C } \left[ - U _ { 0 } - U _ { \mathrm { C } } ( t ) \right] = \frac { T } { 2 \tau } \left[ - U _ { 0 } - U _ { \mathrm { C } } ( t ) \right] .
$$

Egy teljes periódus alatt a feszültség teljes megváltozása a két fél periódus alatti változás összege:

$$
\Delta U _ { \mathrm { C } } ( t ) = \frac { T } { 2 \tau } \left[ U _ { 0 } - 3 U _ { \mathrm { C } } ( t ) \right] = \frac { 3 T } { 2 \tau } \left[ \frac { U _ { 0 } } { 3 } - U _ { \mathrm { C } } ( t ) \right] .
$$


A kondenzátor feszültsége akkor nem nő tovább, ha $\Delta U _ { \mathrm { C } } ( t ) = 0$, azaz ha $U _ { \mathrm { C } } ( t ) = \frac { U _ { 0 } } { 3 }$, tehát a kondenzátor hosszú idő után $U _ { \mathrm { C } } ( \infty ) = \frac { U _ { 0 } } { 3 } = 1,2 \mathrm {~V}$ feszültségre töltődik fel.

Ezután áttérünk a $b$ ) kérdés megválaszolására. Mivel a periódusidő sokkal kisebb az időállandónál, az egy periódus alatti feszültségváltozás nagyon kicsi, a kondenzátor sok perióduson át töltődik. Ezen az időskálán a félperiódusok alatti töltődések és kisülések kis ingadozása nem is látszik. Egy olyan folyamatot kapunk, ahol a kondenzátor feszültsége lényegében folyamatosan nő a kezdeti $U _ { \mathrm { C } } ( 0 ) = 0$ értéktő̌l az $U _ { \mathrm { C } } ( \infty )$ értékig.

Az utolsó egyenletünk alapján

$$
\frac { \mathrm { d } \left[ U _ { \mathrm { C } } ( \infty ) - U _ { \mathrm { C } } ( t ) \right] } { \mathrm { d } t } \approx \frac { \Delta \left[ U _ { \mathrm { C } } ( \infty ) - U _ { \mathrm { C } } ( t ) \right] } { T } = - \frac { 3 } { 2 \tau } \left[ U _ { \mathrm { C } } ( \infty ) - U _ { \mathrm { C } } ( t ) \right] .
$$

Ez pedig egy ugyanolyan differenciálegyenlet, mint amely leírja egy kondenzátor feltöltődését (és amely jól ismert a radioaktív bomlástörvényből is), megoldása:

$$
\left[ U _ { \mathrm { C } } ( \infty ) - U _ { \mathrm { C } } ( t ) \right] = \left[ U _ { \mathrm { C } } ( \infty ) - U _ { \mathrm { C } } ( 0 ) \right] e ^ { - \frac { 3 t } { 2 \tau } } ,
$$

amiből látható, hogy a kondenzátor akkor töltődik fel a maximális érték felére, ha

$$
e ^ { - \frac { 3 t } { 2 \tau } } = \frac { 1 } { 2 } , \quad \text { azaz } \quad t = \frac { 2 } { 3 } \tau \ln 2 = 0,0924 \mathrm {~s} .
$$

*

Az ünnepélyes eredményhirdetés és díjkiosztás a járványhelyzet miatt elmaradt. Helyette az eredetileg meghirdetett időpontban, 2020. november 20-án délután 3 órakor a verseny honlapjára került fel mindaz, ami az eredményhirdetésen elhangzott volna. Ismertetésre kerültek az 50 és 25 évvel ezelőtti Eötvös-verseny feladatai, és az akkori díjazottak egy részének visszaemlékezései: az 50 évvel ezelőttiek közül Horváth Péter és Tichy-Rács Ádám, a 25 évvel ezelőttiek közül Lovas Rezsó́, Tóth Gábor Zsolt és Varga Dezső̌ küldött üzenetet.

Ezt követte a 2020. évi verseny feladatainak és megoldásainak bemutatása (az 1. feladat megoldását Tichy Géza, a 2. feladatét Vigh Máté, a 3. feladatét Vankó Péter írta le), majd az eredmények közlése:

Egyetlen versenyző sem oldotta meg mindhárom feladatot, így a versenybizottság nem adott ki első díjat.
Az elsó feladat helyes és a harmadik feladat lényegében helyes megoldásáért, valamint a második feladatban elért részeredményekért második díjat nyert Bonifert Balázs, a budapesti Baár-Madas Református Gimnázium 12. osztályos tanulója, Horváth Norbert tanítványa és Pácsonyi Péter, a BME mechatronikai mérnök alapszakos hallgatója, aki a Zalaegerszegi Zrínyi Miklós Gimnáziumban érettségizett Pálovics Róbert tanítványaként.

A második és a harmadik feladat kicsit hiányos megoldásáért harmadik díjat nyert Molnár Szabolcs, a BME fizika BSc szakos hallgatója, aki a Kecskeméti Katona József Gimnáziumban érettségizett Sáróné Jéga-Szabó Irén tanítványaként.

Az elsó feladat hibátlan megoldásáért dicséretet kapott Fekete Dezsõ Domonkos, a BME fizika BSc szakos hallgatója, aki a Kecskeméti Katona József Gimnáziumban érettségizett Sáróné Jéga-Szabó Irén tanítványaként, Selmi Bálint, a Pécsi Leốwey Klára Gimnázium 12. osztályos tanulója, Simon Péter, Kotek László és Pálfalvi László tanítványa, valamit Sepsi Csombor Márton, a Zalaegerszegi Zrínyi Miklós Gimnázium 12. osztályos tanulója, Kovács Tibor tanítványa.

A második díjjal Zimányi Gergely adományából 75 ezer, a harmadik díjjal 55 ezer, a dicsérettel 35 ezer forint pénzjutalom jár. A díjazottak tanárai az Eötvös Loránd emlékalbumot kapják. Az Eötvös Loránd Fizikai Társulatot a Nanorobot Vagyonkezelő Kft. és az Andersen Adótanácsadó Zrt. támogatja. Köszönjük az adományozók önzetlen támogatását!

Tichy Géza, Vankó Péter, Vigh Máté


[^0]:    ${ } ^ { 1 }$ Részletek a verseny honlapján: http://eik.bme.hu/~vanko/fizika/eotvos.htm.
