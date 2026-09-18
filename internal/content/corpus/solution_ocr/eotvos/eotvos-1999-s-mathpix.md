---
id: solution-ocr-eotvos-1999-s
source: eotvos
kind: official_solution_document
language: hu
solution_type: official
source_pdf: cache/phoxiv/eotvos/1999_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [eotvos-1999-evaporating-liquids, eotvos-1999-falling-magnet, eotvos-1999-fighter-plane-sound]
verification_status: pending
provenance_note: "Mathpix PDF API Markdown conversion; source transcription pending human verification."
---
1999. október 15-én rendezte meg az Eötvös Loránd Fizikai Társulat hagyományos őszi tanulóversenyét, az Eötvösversenyt, melyen 156 hazai, 3 szlovákiai és 1 romániai versenyző indult. Az első feladatot 15 versenyző tudta hibátlanul megoldani, a másodikat 40 , a harmadikra azonban csupán egy tökéletes megoldás érkezett. Részben jó megoldás elég sok volt.

Ismertetjük a feladatokat, azok helyes megoldását, végül a verseny végeredményét.

1. Egy szuperszonikus vadászgép 900 m magasan repül el felettünk, vízszintes irányban. 1 km messze van tőlünk, amikor először meghalljuk a hangját. Milyen irányból halljuk a repülőgép hangját akkor, amikor már 2 km messze van tőlünk a gép?
(Radnai Gyula)
Megoldás. Az 1. ábrán az $M$ megfigyelő fölött elhaladó repülőgépből egyenló időközönként kibocsátott hanghullámokat ábrázoltuk.

A szuperszonikus repülőgép sebessége nagyobb, mint a hang sebessége a levegőben. Jól látszik, hogy a repülőgép már elhaladt a megfigyelő felett, de a hangja még nem ért el a megfigyelőhöz. Az 1. ábrán a repülőgép éppen a $D$ pontban van, ez előtt $\tau$ idővel volt a $C$ pontban, $2 \tau$ idővel előtte a $B$ pontban, $3 \tau$ idővel előtte az $A$ pontban. $A B = B C = C D = v \tau$ ( $v$ a repülógép sebessége). Természetesen a közbülső pontokban is bocsát ki hangot a repülögép, az áttekinthetőség kedvéert ezeket nem tüntettük fel.

Akármekkora $\tau$ időközt választhatunk az ábrázolásra, most azonban éppen akkorát választottunk, hogy az 1. ábrán ábrázolt helyzethez képest pontosan $2 \tau$ idő múlva érjen el az $M$ megfigyelőhöz a repülőgép hangja; ezt mutatja a 2. ábra. Itt a repülógép már az $F$ pontban van, s a $C$ pontból indult hanghullám éppen $M$-be ért. (A többi pontból jövő hang még nem érte el $M$-et.)

Mivel $\overrightarrow { C M } \perp \overrightarrow { F M }$, a $C M F$ háromszög derékszögü. Ameddig a gép megtette a $C F$ utat, addig a hang a $C M$ távolságot futotta be. (Ábránkon ez az idő $3 \tau$.) Az összes pontból jövő hanghullán eredője az a kúp alakú „fejhullámfelület", amelynek egyik alkotója a 2. ábrán az $F M$ egyenes. E kúp fél nyílásszöge az ún. Mach-szög, amelyre

$$
\sin \varphi = \frac { c } { v }
$$

( $c$ a hangsebesség, $v \geq c$ ). Ennek az általánosan érvényes összefüggésnek a felhasználásával fogjuk megoldani a feladatot.

Tekintsük a 3. ábrát, melyen a balról jobbra haladó repülógép az $F$ pontban van, amikor először jut el a hangja az $M$ pontba. Az ábrából leolvasható, hogy a Mach-szögre (a megadott adatok felhasználásával)

$$
\begin{gathered}
\sin \varphi = \frac { 0,9 \mathrm {~km} } { 1 \mathrm {~km} } = 0,9 , \\
\varphi = 64,16 ^ { \circ } .
\end{gathered}
$$

Abban a pillanatban, amikor a repülőgép az $M$ megfigyelőtől 2 km távol lévő $R$ pontban van, a megfigyelő azt a hangot hallja, amit a gép egy korábbi időpontban adott ki. Ahol ekkor volt a repülőgép, azt a pontot jelöljük $P$-vel. Feladatunk tehát az $M P$ irány meghatározása. Kérdezhetjük például azt, hogy ez az irány mekkora szöggel marad le az $M R$ iránytól, vagyis hány fokkal hátrábbról halljuk a hangot, mint ahol látjuk a gépet. Ezt a szöget (melyet a 3. ábrán $\mu$-vel jelöltünk) az $M P R \triangle$-ből a szinusztétel segítségével határozhatjuk meg:

$$
\frac { \sin \varrho } { \sin \mu } = \frac { P M } { P R } .
$$

Mivel $\sin \varrho = \frac { 0,9 \mathrm {~km} } { 2 \mathrm {~km} } = 0,45$ (ahonnan $\varrho = 26,74 ^ { \circ }$ ), valamint

$$
\frac { P M } { P R } = \frac { c t } { v t } = \frac { c } { v } = \sin \varphi = 0,9 ,
$$

ezért

$$
\sin \mu = \frac { 0,45 } { 0,9 } = \frac { 1 } { 2 } , \quad \text { azaz } \quad \mu _ { 1 } = 30 ^ { \circ } , \quad \text { illetve } \quad \mu _ { 2 } = 150 ^ { \circ } .
$$

Meglepőnek túnhet, hogy a $\mu$ szögre két érték is adódott, pedig csak egy hegyesszögre számítottunk. Vajon a tompaszög is megoldása az eredeti fizikai problémának? Bizony az! Már a 2. ábrából is látszik, hogy ha a repülőgép túlhaladt az $F$ ponton, akkor nemcsak a $C$ pont utáni helyekről (pl. $D$-ből és $E$-ből) induló hullámok érik el fokozatosan az $M$ pontot, hanem egyidejüleg azok a hullámok is odaérnek, amelyeket még a $C$ pontba érkezése előtt bocsátott ki a gép (pl. $B$-ből, $A$-ból). Egy ilyen helyzetet mutat a 4. ábra, ahol éppen a $B$ és a $D$ pontok közeléből indult hullámok érik el egyszerre $M$-et. (A $C$-ból indult hullám már túlhaladt $M$-en). Az első „hangrobbanás" után tehát mindig két irányból halljuk a repülőgép hangját, igaz, általában az „elölről” jövőt halljuk erősebben.

Megjegyzés. A megoldók a hallott hang $M P$ irányának meghatározásakor általában a vízszintes vagy függőleges iránnyal bezárt szögeket adták meg. A helyes eredmények a vízszintessel bezárt szögekre: $\mu _ { 1 } + \varrho = 56,74 ^ { \circ }$, illetve $180 ^ { \circ } - \left( \mu _ { 2 } + \varrho \right) = 3,26 ^ { \circ }$; a függőlegessel bezárt szögek pedig: $90 ^ { \circ } - \left( \mu _ { 1 } + \varrho \right) = 33,26 ^ { \circ }$ és $\mu _ { 2 } + \varrho - 90 ^ { \circ } = 86,74 ^ { \circ }$.


2. Két egyébként egyforma lombik közül az egyiknek a nyaka egyenes, a másiké lefele görbül, az 5. ábra szerint. A két lombikba azonos mennyiségú
A) vizet,
$B$ ) étert

töltünk, és gondoskodunk róla, hogy mindkét lombikban a folyadék hőmérséklete

az $A$ ) esetben $100 ^ { \circ } \mathrm { C }$,
a $B$ ) esetben 34,6 °C

legyen. Melyik lombikból fogy el hamarabb a folyadék az egyik, illetve a másik esetben?
(Károlyházy Frigyes)
Megoldás. A megadott $100 ^ { \circ } \mathrm { C }$ a víz, $34,6 ^ { \circ } \mathrm { C }$ pedig az éter normál nyomás melletti forráspontja. A víz móltömege 18 g/mol, az éter $\left[ \left( \mathrm { C } _ { 2 } \mathrm { H } _ { 5 } \right) _ { 2 } \mathrm { O } \right]$ móltömege 74 g/mol. Igaz, a forráspont környékén egyetlen reális gáz sem viselkedik ideális gázként, az mégis joggal feltételezhető, hogy a vízgő́z súrúsége kisebb, az étergőz súrúsége pedig nagyobb marad a levegő súrúségénél. (A vízgőz „könnyebb”, az étergőz „nehezebb” a levegőnél.)

Tekintsük először az $A$ ) esetet, amikor mindkét lombikba vizet töltöttünk. Ekkor az egyenes nyakú lombikban képződő vízgőz előbb-utóbb betölti a lombik nyakát, azonban nem maradhat stabilan a nála „nehezebb” levegő alatt, hanem felszáll, helyet adva a levegőnek, valamint az újabb és újabb vízgőzképződésnek; így a víz hamarosan elforr.

A görbe nyakú lombik nyakát is betölti a vízgőz, innen azonban csak „lefelé” tudna kiszabadulni, miközben a sürübb levegőnek kellene felfelé, a vízgőz helyére áramlania. Ez nem történik meg olyan hevességgel, mint az egyenes nyakú lombiknál, mert most csak diffúzióval tud eltávozni a vízgőz, ami viszont lassú folyamat. Az $A$ ) esetben tehát a vízgőz az egyenes nyakú csőből szabadul ki gyorsabban, vagyis ebből a lombikból forr el hamarabb a víz.

Nyilvánvaló, hogy a $B$ ) esetben, amikor a forráspontján tartott éter van a lombikokban, a helyzet éppen fordított. Az egyenes nyakú lombik nyakában megül az étergőz, nem fog felszállni a nála kisebb sűrúségú levegőbe. A nyak felsó végénél diffundálnak az étermolekulák a levegőbe, ezért csak hosszú idő alatt forr el és távozik az éter a lombikból.

A lefelé görbülő nyakú lombik nyakából viszont „kifolyik” a nehéz étergőz a levegőbe, helyére nemcsak levegő, hanem a lombikból újabb étergőz áramlik, gyorsítva ezzel az éter elforrását.
3. Hosszú, keskeny, függőleges üvegcsövet egy vele azonos tengelyü, de sokkal szélesebb, $r$ külső sugarú másik üvegcső vesz körül. E szélesebb csövön sürün, egymástól $h$ távolságra elhelyezkedő, $R$ ellenállású körvezetők vannak.

Ha a keskeny csőbe egy $m$ tömegú, $d$ erősségú (mágneses dipólnyomatékú) kicsiny rúdmágnest ejtünk, az viszonylag hamar elér egy állandó $v _ { 0 }$ sebességet, amellyel egyenletesen süllyed.(6. ábra.)

További kísérleteink során a fenti öt mennyiség $( m , d , h , R , r )$ közül az egyiket mindig a kétszeresére növeljük, miközben a másik négyet nem változtatjuk meg. Hányszorosára nő az egyes esetekben a kicsiny rúdmágnes állandósult végsebessége?

Az eredeti eset: $m , d , h , R , r$; ekkor $v = v _ { 0 }$.

a) $( 2 m , d , h , R , r ) ; v _ { a } / v _ { 0 } =$ ?
b) $( m , 2 d , h , R , r ) ; v _ { b } / v _ { 0 } =$ ?
c) ( $m , d , 2 h , R , r$ ); $v _ { c } / v _ { 0 } =$ ?
d) $( m , d , h , 2 R , r ) ; v _ { d } / v _ { 0 } =$ ?
e) $( m , d , h , R , 2 r ) ; v _ { e } / v _ { 0 } =$ ?

A mechanikai súrlódástól és a közegellenállástól, továbbá a körvezetók önindukciójától és kölcsönös indukciójától eltekinthetünk.
(Gnädig Péter)
Megoldás ${ } ^ { 1 }$. Számítsuk ki, mennyi energia disszipálódik (mennyi $Q$ hő fejlődik) egyetlen körvezetőben, miközben a mágnes keresztülesik rajta. Kétféleképpen is következtethetünk erre a $Q$ mennyiségre: egyrészt az energiaviszonyok összevetéséből, másrészt dimenzionális megfontolásokból.

Ha az $m$ tömegü mágnes egyenletesen mozog függőlegesen lefelé a csőben és $L$ utat tesz meg, helyzeti energiája $m g L$ értékkel csökken. Eközben áthalad $L / h$ darab körvezetőn, mindegyikben $Q$ hốt fejleszt, és mivel a mágnes mozgási energiája nem változik, fenn kell álljon, hogy

$$
m g L = Q L / h , \quad \text { azaz } \quad Q = m g h .
$$

Milyen fizikai mennyiségektől és milyen módon függhet $Q$ ? Nyilván függ a hőfejlődés a kicsiny mágnes jellemzőitől (a $d$ dipólnyomatéktól és a $v$ sebességtől), továbbá a körvezető adataitól (az $r$ sugártól és a vezető $R$ elektromos ellenállásától):

$$
Q = F ( d , v , r , R ) ,
$$

ahol $F$ valamilyen négyváltozós függvény, melynek pontos (vagy legalább arányossági tényezők erejéig határozott) alakja megadná a feladat valamennyi kérdésére a választ.

Ha dimenzionális megfontolásokkal akarjuk „kitalálni”, hogyan függ $F ( d , v , r , R )$ az egyes változóitól, nem szabad megfeledkeznünk arról, hogy $Q$ a felsorolt mennyiségek mellett függhet még $\mu _ { 0 }$-tól (a vákuum permeabilitásától), ami

[^0]
ugyan nem változó, hanem egy meghatározott mértékegységú és nagyságú mennyiség, de a hőfejlődés képletében (lévén az mágnességgel kapcsolatos folyamatok eredménye) ez a fizikai állandó is felbukkanhat. A keresett összefüggés tehát

$$
Q = G \left( d , v , r , R , \mu _ { 0 } \right) ,
$$

alakú, ahol $G$ egy ötváltozós függvény, melyet azonban az SI itt előforduló négy alapmértékegységének $( \mathrm { kg } , \mathrm { m } , \mathrm { s } , \mathrm { A } )$ vizsgálatából nem lehet meghatározni.

A feladat mégis megoldható a dimenzióanalízis módszerével, ugyanis a hőfejlődés és az $R$ ellenállás közötti összefüggés (a többi adat rögzített értéke mellett) fordított arányosság kell legyen (azaz $Q \propto 1 / R$ ), hiszen az áram hőhatása (adott módon változó indukált feszültség mellett) az ellenállás reciprokával arányos. Mondhatjuk tehát, hogy

$$
Q \propto \frac { 1 } { R } f \left( d , v , r , \mu _ { 0 } \right) ,
$$

ahol $f \left( d , v , r , \mu _ { 0 } \right)$ már csak 4 fizikai mennyiségtől függ.
Írjuk fel az egyes fizikai mennyiségek mértékegységét:

$$
[ Q ] = \frac { \mathrm { kg } \mathrm {~m} ^ { 2 } } { \mathrm {~s} ^ { 2 } } , \quad [ 1 / R ] = \frac { \mathrm { s } ^ { 3 } \mathrm {~A} ^ { 2 } } { \mathrm {~kg} \mathrm {~m} ^ { 2 } } \quad [ v ] = \frac { \mathrm { m } } { \mathrm {~s} } , \quad [ d ] = \mathrm { Am } ^ { 2 } , \quad [ r ] = \mathrm { m } , \quad \left[ \mu _ { 0 } \right] = \frac { \mathrm { kg } \mathrm {~m} } { \mathrm {~A} ^ { 2 } \mathrm {~s} ^ { 2 } }
$$

Ha a keresett $f$ függvényt hatványfüggvény alakban próbáljuk felírn. ${ } ^ { 2 }$ :

$$
h \left( d , v , r , \mu _ { 0 } \right) \propto d ^ { \alpha } \cdot v ^ { \beta } \cdot r ^ { \gamma } \cdot \mu _ { 0 } ^ { \delta }
$$

akkor a 4 független mértékegység hatványainak összehasonlításából a kitevőkre

$$
\alpha = 2 , \quad \beta = 1 , \quad \gamma = - 3 , \quad \delta = 2
$$

adódik. Ezek szerint

$$
Q = m g h \propto \frac { \left( \mu _ { 0 } d \right) ^ { 2 } v } { R r ^ { 3 } } ,
$$

vagyis a mágnes esési sebességének és a többi paraméternek a kapcsolata:

$$
v \propto \frac { m h R r ^ { 3 } } { d ^ { 2 } } .
$$

Ez a formula a feladat valamennyi kérdésére megadja választ: akár a tömeget, akár a menettávolságot, vagy a körvezetők elektromos ellenállását növeljük az eredeti érték kétszeresére, a mágnes esési sebessége 2-szer nagyobb lesz. Kétszer erősebb mágnes az eredetinél 4-szer lassabban fog mozogni, végül pedig a körvezetők sugarának kétszerezése a sebességet az eredeti érték 8-szorosára növeli.

Az eredményhirdetésre és az ünnepélyes díjkiosztásra az ELTE új, lágymányosi épületének egyik nagyobb előadótermében került sor 1999. november 19-én. Itt először a Versenybizottság elnöke megemlékezett Sztrókay Pálról (1899-1965) és Náray-Szabó Istvánról (1899-1972), akik éppen száz évvel ezelőtt születtek, s az 1917. évi tanulóversenyen az 1. és 2. díjat nyerték. Sztrókay Pál Kossuth-díjas mérnök lett, a Ganznál a villamos vontatás fejlesztésén dolgozott, Kandó Kálmán utáni második emberként. Náray-Szabó István nemzetközi tekintélyú vegyészprofesszor lett, a fizika és a kémia határterületén alkotott: röntgendiffrakcióval kutatta az anyag kémiai-fizikai szerkezetét.

A rövid megemlékezések után került sor idei feladatok megoldásának diszkussziójára. Az elsó feladat megoldását Radnai Gyula, a másodikat az egyik versenyző (Tóth Bálint), a harmadikat Gnädig Péter mutatta be. A harmadik feladathoz kapcsolódóan, azt modellezve kísérleteket is láthattak a megjelentek: más-más falvastagságú, más-más fémből készült csöveknél különböző erősségü rúdmágnesek esési idejét figyelhették meg, s így összehasonlíthatták különféle körülmények között kialakuló örvényáramok fékező hatását.

Az ünnepélyes eredményhirdetésen Fehér István, az ELFT alelnöke adta át (a feladatok kitúzőiből álló) Versenybizottság által odaítélt díjakat. A Társulat által biztosított pénzjutalmak mellett a Nemzeti Tankönyvkiadótól könyvutalványokat kaptak a díjazott versenyzők, akiknek jelen levő tanárai a Műszaki Kiadó és a Tankönyvkiadó ajándék-könyveibő̌l válogathattak. Sajnos nem mindenki tudott eljönni: az éppen a díjkiosztás napján kitört hóvihar miatt maradt le az ünnepségről néhány régi Eötvös-verseny nyertes is.

[^1]
![](../../../figures/solution-ocr/1805f9786e0ad22977536e2d.jpg)
7. ábra

Az 1999. évi Eötvös-verseny díjazottai (fentról lefelé, balról jobbra): Péterfalvi Csaba Géza, Terpai Tamás, Gáspár Merse Előd, Buruzs Ádám, Katona Gergely, Csillag Kristóf, Hegedús Ákos, Patay Gergely, Tóth Bálint, Pesti Gábor és Czigler István.

A mostani verseny eredménye a következő:
Elsó́ díjat kapott: Terpai Tamás, az ELTE matematikus hallgatója, aki a Fazakas Mihály Fővárosi Gyakorló Gimnáziumban érettségizett mint Horváth Gábor tanítványa.
Második díjat kapott a verseny 2-6. helyezettje: Hegedũs Åkos, a pécsi ciszterci Nagy Lajos Gimnázium 12. osztályos tanulója, Orovica Márkné tanítványa; Katona Gergely, az ELTE fizikus hallgatója, aki a budapesti ELTE Trefort Ágoston Gyakorlóiskolában érettségizett mint Szörényi Zoltán tanítványa; Pesti Gábor, a nagykanizsai Batthyány Lajos Gimnázium 11. osztályos tanulója, Piriti János tanítványa; Péterfalvi Csaba Géza, az ELTE geofizikus hallgatója, aki a szekszárdi Garay János Gimnáziumban érettségizett mint Bayer József tanítványa; Tóth Bálint, az ELTE fizikus hallgatója, aki a Fazakas Mihály Fővárosi Gyakorló Gimnáziumban érettségizett mint Horváth Gábor tanítványa.
Harmadik díjat kapott a verseny 7-10. helyezettje: Béky Bence, a Fazakas Mihály Fővárosi Gyakorló Gimnázium 10. osztályos tanulója, Horváth Gábor tanítványa; Csillag Kristóf, a püspökladányi Karacs Ferenc Gimnázium 12. osztályos tanulója, Lajtosné Buzási Márta tanítványa; Gáspár Merse Elöd, a Fazakas Mihály Fốvárosi Gyakorló Gimnázium 12. osztályos tanulója, Horváth Gábor tanítványa; Patay Gergely, a debreceni Tóth Árpád Gimnázium 12. osztályos tanulója, Kovács Miklós és Szegedi Ervin tanítványa.
Dicséretben részesült a verseny 11-13. helyezettje: Buruzs Ådám, a szegedi Radnóti Miklós Gimnázium 12. osztályos tanulója, Mike János tanítványa; Czigler István, a budapesti Lauder Javne Gimnázium 12. osztályos tanulója, Tóth Eszter tanítványa; Kenyeres Péter, a POTE orvostanhallgatója, aki a zalaegerszegi Zrínyi Miklós Gimnáziumban érettségizett mint Pálovics Róbert tanítványa.

Az 1. díjas versenyző 10000 Ft pénzjutalmat és 5000 Ft értékú könyvutalványt, a 2. díjasok 6000 Ft pénzjutalmat és 4000 Ft értékú könyvutalványt, a 3. díjasok 4000 Ft pénzjutalmat és 4000 Ft értékú könyvutalványt, a dicséretben részesültek 3000 Ft értékú könyvutalványt kaptak.

Gratulálunk a nyerteseknek és tanáraiknak!
Gnädig Péter, Radnai Gyula
![](../../../figures/solution-ocr/de63aee544a699dbbf451816.jpg)
![](../../../figures/solution-ocr/7bb18e954eeba52f48b9fdf5.jpg)


![](../../../figures/solution-ocr/ca8f63f6a6be053569d374c7.jpg)


[^0]:    ${ } ^ { 1 }$ Terpai Tamás dolgozata alapján

[^1]:    ${ } ^ { 2 }$ Belátható, hogy ezt az általánosság megszorítása nélkül megtehetjük.
