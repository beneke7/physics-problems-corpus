---
id: solution-ocr-eotvos-2022-s-p3
source: eotvos
kind: official_solution_document
language: hu
solution_type: official
source_pdf: cache/phoxiv/eotvos/2022_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [eotvos-2022-resistor-magnetic]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
3. feladat. Egyenletes vastagságú ellenálláshuzalból $r$ és $2 r$ sugarú karikákat készítünk, és azokat egy síkban, koncentrikusan helyezzük el. A karikákat két helyen, ugyanabból az ellenálláshuzalból készült, sugárirányú „küllőkkel” kötjük össze, az ábrán látható módon. Az elrendezés $A$ pontjánál (sugárirányban) I erősségű áramot vezetünk be, a $B$ pontjából pedig (szintén sugárirányban) elvezetjük azt. Mekkora a mágneses indukcióvektor nagysága a karikák $O$ középpontjában?
(Cserti József)
I. megoldás. A feladat megoldása során először a Kirchhoff-törvények segítségével meghatározzuk az egyes vezetékekben folyó áramokat, majd kiszámoljuk az ezek által keltett mágneses teret a karikák közös $O$ középpontjában.

Jelölje $R$ az $r$ hosszúságú vezetékdarab ellenállását! Így az egyes körívek, illetve a küllők ellenállása, az ábrán megadott jelöléseket használva, az alábbiak szerint adódik: $R _ { 1 } = \pi R , R _ { 2 } = R _ { 4 } = R , R _ { 3 } = R _ { 6 } = \frac { \pi } { 2 } R , R _ { 5 } = \pi R , R _ { 7 } = 3 \pi R$.
$\mathrm { Az } A$ pontban bevezetünk, a $B$ pontban kivezetünk $I$ áramot. Az egyes vezetékdarabokon folyó áramokat a 10. ábra alapján vesszük fel, ahol már kielégítettük a Kirchhoff-féle csomóponti törvényeket, azaz bármely csomópontra a bemenő és kimenő áramok összege megegyezik. Láthatjuk, hogy összesen három ismeretlen paraméterünk van: $I _ { 1 } , I _ { 2 }$ és $I _ { 3 }$, melyeket a huroktörvényekből határozhatunk meg. Írjuk fel a huroktörvényeket a külső karikára, a belső karikára, valamint a jobb alsó


![](../../../figures/solution-ocr/ca9bf7ca76bf3d32e4576e91.jpg)
10. ábra

negyed körgyürü határára:

$$
\begin{gather*}
R _ { 1 } I _ { 1 } - R _ { 7 } \left( I - I _ { 1 } - I _ { 2 } \right) = 0 \quad \rightarrow \quad \pi R \left[ I _ { 1 } - 3 \left( I - I _ { 1 } - I _ { 2 } \right) \right] = 0 ,  \tag{1}\\
R _ { 3 } I _ { 3 } + R _ { 5 } \left( I - I _ { 2 } + I _ { 3 } \right) - R _ { 6 } \left( I _ { 2 } - I _ { 3 } \right) = 0 ,
\end{gather*}
$$

amiből

$$
\begin{equation*}
\frac { \pi R } { 2 } \left[ I _ { 3 } + 2 \left( I - I _ { 2 } + I _ { 3 } \right) - \left( I _ { 2 } - I _ { 3 } \right) \right] = 0 , \tag{2}
\end{equation*}
$$

adódik, és végül

$$
\begin{equation*}
R _ { 2 } I _ { 2 } + R _ { 3 } I _ { 3 } - R _ { 4 } \left( I - I _ { 2 } \right) - R _ { 1 } I _ { 1 } = R \left[ I _ { 2 } + \frac { \pi } { 2 } I _ { 3 } - \left( I - I _ { 2 } \right) - \pi I _ { 1 } \right] = 0 . \tag{3}
\end{equation*}
$$

Az ismeretlen paraméterek ( $I _ { 1 } , I _ { 2 }$ és $I _ { 3 }$ ) egy háromismeretlenes, lineáris egyenletrendszer megoldásaként adódnak. Tényleg szükség van ezek kiszámolására? Próbáljuk megoldani a feladatot enélkül!

A sugárirányú bevezetések, kivezetések és küllők a Biot-Savart törvény értelmében nem adnak járulékot a középpontban mért mágneses tér értékéhez. A mágneses indukció nagysága egy $r$ sugarú, $I$ áramjárta körvezető középpontjában $B = \frac { \mu _ { 0 } } { 2 } \frac { I } { r }$. Ha csak egy $\alpha$ középponti szöggel leírható körív járulékát tekintjük a középpontban, az $B = \frac { \mu _ { 0 } \alpha } { 4 \pi } \frac { I } { r }$ alakban adódik. Ezek alapján már kiszámíthatjuk a külső, majd a belső karika által keltett mágneses teret. A külső karika esetén:

$$
B = \frac { \mu _ { 0 } } { 8 } \frac { I _ { 1 } } { 2 r } - \frac { 3 \mu _ { 0 } } { 8 } \frac { I - I _ { 1 } - I _ { 2 } } { 2 r } = \frac { \mu _ { 0 } } { 16 r } \left[ I _ { 1 } - 3 \left( I - I _ { 1 } - I _ { 2 } \right) \right] = 0 ,
$$


azaz a mágneses indukció értéke nulla a középpontban. A levezetés utolsó lépésében felhasználtuk az (1) egyenletet. A belső karika esetében:

$$
B = \frac { \mu _ { 0 } } { 8 } \frac { I _ { 3 } } { r } + \frac { 2 \mu _ { 0 } } { 8 } \frac { I - I _ { 2 } + I _ { 3 } } { r } - \frac { \mu _ { 0 } } { 8 } \frac { I _ { 2 } - I _ { 3 } } { r } = \frac { \mu _ { 0 } } { 8 r } \left[ I _ { 3 } + 2 \left( I - I _ { 2 } + I _ { 3 } \right) - \left( I _ { 2 } - I _ { 3 } \right) \right] = 0 ,
$$

itt is nullának adódik a mágneses indukció nagysága. Az utolsó lépésben a (2) egyenletet használtuk fel. Összegezve, a teljes rendszer esetében is nulla a mágneses indukcióvektor a középpontban. Mi a mélyebb fizikai oka ennek az eredménynek? Nézzük át a probléma általánosított megoldását!

![](../../../figures/solution-ocr/49d72e2ac45e83beee71f010.jpg)
11. ábra

II. (általános) megoldás. A felrajzolt 11. ábra csak sugárirányú küllőkből és koncentrikus karikákból áll. A sugárirányú szakaszok által keltett mágneses tér a középpontban nulla. Tekintsünk egy $\tilde { r }$ sugarú karikát, melyet a befutó sugárirányú vezetékek körívekre bontanak. Az $i$. körív középponti szöge legyen $\alpha _ { i }$, hossza $\ell _ { i }$, rajta átfolyó áram $I _ { i }$, ellenállása $R _ { i }$, ezen ellenálláson eső feszültség $U _ { i }$.

Az $i$. körív által keltett mágneses tér a középpontban

$$
B _ { i } = \frac { \mu _ { 0 } \alpha _ { i } } { 4 \pi } \frac { I _ { i } } { \tilde { r } } = \frac { \mu _ { 0 } } { 4 \pi } \frac { \ell _ { i } I _ { i } } { \tilde { r } ^ { 2 } } = \frac { \mu _ { 0 } } { 4 \pi } \frac { r R _ { i } I _ { i } } { R \tilde { r } ^ { 2 } } = \frac { \mu _ { 0 } } { 4 \pi } \frac { r U _ { i } } { R \tilde { r } ^ { 2 } } ,
$$

ami arányos a köríven eső feszültséggel. Összegezve az összes körív járulékát:

$$
B = \sum _ { i } B _ { i } = \frac { \mu _ { 0 } } { 4 \pi } \frac { r } { R \tilde { r } ^ { 2 } } \sum _ { i } U _ { i } = 0 .
$$

A huroktörvény alapján a feszültségesések összege a zárt karikára nulla, így a karika által keltett mágneses tér is nulla a középpontban. Az általános megoldás alapján akárhány koncentrikus kör és sugárirányú vezetékből összeállított elrendezés esetén nulla a mágneses tér a középpontban.

Az ünnepélyes eredményhirdetésre és díjkiosztásra 2022. november 25-én délután került sor az ELTE TTK Konferenciatermében. Meghívást kaptak az 50 és 25 évvel ezelőtti Eötvös-verseny nyertesei is. A 25 évvel ezelőtti díjazottak közül Egri Győző, Koncz Imre és Várkonyi Péter jöttek el - ők pár mondatban beszéltek a pályafutásukról.

Ezután következett a 2022. évi verseny feladatainak és megoldásainak bemutatása. Az 1. feladat megoldását Gnädig Péter, a 2. feladatét Vankó Péter, a 3. feladatét Széchenyi Gábor ismertette.

Az esemény végén került sor az eredményhirdetésre. A díjakat Ormos Pál, az Eötvös Loránd Fizikai Társulat elnöke adta át.

Mindhárom feladat helyes megoldásáért első díjat nyert Kovács Balázs Csaba, az ELTE fizika BSc szakos hallgatója, aki a Hatvani Bajza József Gimnáziumban érettségizett Maruzsiné Sevella Judit tanítványaként.


Az első feladat helyes, valamint a második és harmadik feladat lényegében helyes megoldásáért második díjat nyert Kincses Ábel, a BME fizika BSc szakos hallgatója, aki a Deák téri Evangélikus Gimnáziumban érettségizett Horváth Gabriella és Szőkéné Mezősi Tímea tanítványaként.

Az első és a harmadik feladat helyes megoldásáért harmadik díjat nyert Gurzó József, az ELTE fizika BSc szakos hallgatója, aki a Budapesti Fazekas Mihály Gyakorló Általános Iskola és Gimnáziumban érettségizett Nagy Piroska Mária tanítványaként.

A harmadik feladat helyes, valamint az első vagy a második feladat lényegében helyes megoldásáért kiemelt dicséretet kapott Bognár András Károly, a Budapesti Fazekas Mihály Gyakorló Általános Iskola és Gimnázium 12. osztályos tanulója, Nagy Piroska Mária tanítványa; Csonka Illés, a Ciszteri Rend Nagy Lajos Gimnáziuma 11. osztályos tanulója, Jéhn János és Pálfalvi László tanítványa; valamint Hajós Balázs, az ELTE Apáczai Csere János Gyakorló Gimnázium és Kollégium 12. osztályos tanulója, Gyertyán Attila tanítványa.

Az első vagy a harmadik feladat helyes, vagy a második feladat lényegében helyes megoldásáért dicséretet kapott Bencz Benedek, a Baár-Madas Református Gimnázium, Általános Iskola és Diákotthon 10. osztályos tanulója, Horváth Norbert tanítványa; Blázsik Árpád, az ELTE fizika BSc szakos hallgatója, aki a Békásmegyeri Veres Péter Gimnáziumban érettségizett Rakovszki Andorás és Székely György tanítványaként; Gábriel Tamás, a Budapesti Fazekas Mihály Gyakorló Altalános Iskola és Gimnázium 12. osztályos tanulója, Nagy Piroska Mária tanítványa; Halász Henrik Kristóf, a Szegedi Radnóti Miklós Kísérleti Gimnázium 12. osztályos tanulója, Gutai Árpád és Csányi Sándor tanítványa; Horváth Ákos Zsolt, a BME fizika BSc szakos hallgatója, aki a Kempelen Farkas Gimnáziumban érettségizett Bakosné Novák Andrea és Horváth Eszter tanítványaként; Kohut Márk Balázs, a Kecskeméti Katona József Gimnázium 12. osztályos tanulója, Sáróné Jéga-Szabó Irén tanítványa, Köpenczei Csanád, a Bonyhádi Petőfi Sándor Evangélikus Gimnázium és Kollégium 12. osztályos tanulója, Wiandt Péter tanítványa; Molnár Barnabás, a Budapesti Fazekas Mihály Gyakorló Általános Iskola és Gimnázium 12. osztályos tanulója, Nagy Piroska Mária tanítványa; Molnár-Szabó Vilmos, a Budapesti Fazekas Mihály Gyakorló Általános Iskola és Gimnázium 12. osztályos tanulója, Nagy Piroska Mária tanítványa; Schäffer Donát, a Pécsi Janus Pannonius Gimnázium 11. osztályos tanulója, Lehőcz Mária és Lányi Veronika tanítványa; valamint Toronyi András, az ELTE fizika BSc szakos hallgatója, aki a Baár-Madas Református Gimnázium, Általános Iskola és Diákotthonban érettségizett Horváth Norbert tanítványaként.

Az első díjjal a verseny plakettjén kívül az Andersen Adótanácsadó Zrt. és a Nanorobot Vagyonkezelő Kft. adományából 80 ezer forint, a második díjjal 65 ezer, a harmadik díjjal 50 ezer, a kiemelt dicsérettel 30 ezer, a dicsérettel 15 ezer forint pénzjutalom járt. A díjazottak tanárai könyveket kaptak az Eötvös Loránd Fizikai Társulat ajándékaként. Köszönjük az adományozók önzetlen támogatását!

Gnädig Péter, Széchenyi Gábor, Vankó Péter, Vigh Máté


[^0]:    ${ } ^ { 1 }$ Részletek a verseny honlapján: http://eik.bme.hu/~vanko/fizika/eotvos.htm

[^1]:    ${ } ^ { 2 }$ Az Eötvös-versenyen bármely nyomtatott szakirodalom szabadon használható.
