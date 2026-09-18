---
id: ipho-book-2011-q2
problem: ipho-book-2011-q2
source: ipho
language: hu
solution_language: hu
solution_type: official
source_pdf: "kkk/Korábbi kunfalvi anyagok 2/IPhO_konyv.pdf"
figure_files: []
provenance_note: "kkk/Korábbi kunfalvi anyagok 2/IPhO_konyv.pdf; Mathpix OCR"
verification_status: pending
---

## Megoldás 2

2.1. A szappanbuborék belsejében a $p_{\mathrm{i}}$ nyomás a felületi feszültség miatt nagyobb, mint a külső (atmoszférikus) nyomás:
\[
p_{\mathrm{i}}=p_{\mathrm{a}}+\frac{4 \gamma}{R_{0}} .
\]
(Ezt az összefüggést pl. a képzeletben félbevágott buborék egyik felére felírt erőegyensúly feltételéből származtathatjuk.)

Az egyesített gáztörvény a levegő intenzív állapotjelzőire így írható fel:
\[
\frac{p}{\varrho T}=\text { állandó. }
\]
Ennek alapján a kérdéses arány:
\[
\frac{\rho_{\mathrm{i}} T_{\mathrm{i}}}{\rho_{\mathrm{a}} T_{\mathrm{a}}}=\frac{p_{\mathrm{i}}}{p_{\mathrm{a}}}=1+\frac{4 \gamma}{R_{0} p_{\mathrm{a}}} .
\]
2.2. A megadott számértékek felhasználásával:
\[
\frac{\rho_{\mathrm{i}} T_{\mathrm{i}}}{\rho_{\mathrm{a}} T_{\mathrm{a}}}-1=\frac{4 \gamma}{R_{0} p_{\mathrm{a}}} \approx 0,0001 .
\]
(Az eredmény azt mutatja, hogy a felületi feszültség hatására a nyomás igen csekély mértékben növekszik.)
2.3. A buborék lebegésének a feltétele az, hogy a buborékra ható felhajtóerő egyenlő nagyságú a buborékra ható nehézsgégi eróvel, ami a szappanhártya és a benne lévő levegő tömegéből ered:
\[
\frac{4 \pi}{3} R_{0}^{3} \varrho_{\mathrm{a}} g=\left(4 \pi R_{0}^{2} \varrho_{\mathrm{s}} t+\frac{4 \pi}{3} R_{0}^{3} \varrho_{\mathrm{i}}\right) g=4 \pi R_{0}^{2} \varrho_{\mathrm{s}} t g+\frac{4 \pi}{3} R_{0}^{3} \frac{\varrho_{\mathrm{a}} T_{\mathrm{a}}}{T_{\mathrm{i}}}\left(1+\frac{4 \gamma}{R_{0} p_{\mathrm{a}}}\right) g .
\]
Megfelelő átrendezés és a számszerú adatok behelyettesítése után a buborék lebegéséhez szükséges belső hőmérséklet:
\[
T_{\mathrm{i}}=\frac{R_{0} \varrho_{\mathrm{a}} T_{\mathrm{a}}}{R_{0} \varrho_{\mathrm{a}}-3 \varrho_{\mathrm{s}} t}\left(1+\frac{4 \gamma}{R_{0} p_{\mathrm{a}}}\right)=307,1 \mathrm{~K} .
\]
A lebegéshez a buborékban lévő levegőnek valamivel több, mint 7 °C-kal melegebbnek kell lennie a külső levegő hőmérsékleténél.
2.4.-2.5. Miközben a buborék belsejében a hőmérséklet a külső levegő hőmérsékletére csökken, a buborék sugara 0,8\%-kal lecsökken, és a szappanhártya vastagsága is megnő. Ezeket a változásokat azonban a feladat szövegében szerepló tanács szerint elhanyagoljuk. Nyugvó levegőben ilyenkor a buborék a talaj felé süllyed. Az $u$ sebességgel felfelé áramló levegő akkor akadályozza meg a buborék leesését, ha a Stokes-féle közegellenállási erő megegyezik vagy meghaladja a buborékra ható nehézségi erónek és a felhajtóerőnek a különbségét:
\[
\begin{aligned}
6 \pi \eta R_{0} u & \geq\left(4 \pi R_{0}^{2} \varrho_{\mathrm{s}} t+\frac{4 \pi}{3} R_{0}^{3} \varrho_{\mathrm{i}}\right) g-\frac{4 \pi}{3} R_{0}^{3} \varrho_{\mathrm{a}} g= \\
& =\left(4 \pi R_{0}^{2} \varrho_{\mathrm{s}} t+\frac{4 \pi}{3} R_{0}^{3} \varrho_{\mathrm{a}}\left[1+\frac{4 \gamma}{R_{0} p_{\mathrm{a}}}\right]\right) g-\frac{4 \pi}{3} R_{0}^{3} \varrho_{\mathrm{a}} g .
\end{aligned}
\]
Átrendezés után a felfelé áramló levegő sebességére a következő relációt kapjuk:
\[
u \geq \frac{2 R_{0} \varrho_{\mathrm{s}} t g}{3 \eta}+\frac{8 R_{0} \varrho_{\mathrm{a}} \gamma g}{9 p_{\mathrm{a}} \eta} .
\]
A számszerú adatok behelyettesítése után $u \geq 0,36 \mathrm{~m} / \mathrm{s}$ eredmény adódik.
A paraméteres kifejezés második tagja az első tagnál három nagyságrenddel kisebb, vagyis elhanyagolható. Ez is indokolja, hogy a továbbiakban a felületi feszültségből adódó tagokat elhanyagoljuk.
2.6. Elektromosan töltött szappanbuborékok esetén a felületi feszültség hatásához képest fordított nyomáskülönbség alakul ki a buborék belseje és a külső levegő között, mivel a buborék felületén lévó töltések taszítják egymást. Ezt a nyomáskülönbséget jelöljük $\Delta p_{\mathrm{el}}$-lel. Ezzel a jelöléssel $p_{\mathrm{a}}=p_{\mathrm{i}}+\Delta p_{\mathrm{el}}$; feladatunk az egyenlőség jobb oldalán lévő két tag meghatározása.

Elektromos töltések nélkül (a felületi feszültség hatásának elhanyagolásával) a buborékban a nyomás $p_{\mathrm{a}}$, és a buborék térfogata a kezdeti sugár köbével, vagyis
$R_{0}^{3}$-bel arányos. Feltöltött buborék esetén a nyomás $p_{\mathrm{i}}$, a térfogat pedig a megnövekedett sugár köbével, vagyis $R_{1}^{3}$-bel arányos. Mivel a buborékban lévő levegő hőmérséklete nem változik, így alkalmazhatjuk rá a Boyle-Mariotte-törvényt, vagyis a nyomás és a térfogat fordított arányosságát:
\[
p_{\mathrm{i}}=\frac{R_{0}^{3}}{R_{1}^{3}} p_{\mathrm{a}} .
\]

A töltések következtében fellépő $\Delta p_{\mathrm{el}}$ nyomásjárulékot a buborék falánál fellépő átlagos elektromos térerősség $E_{\text {átlag }}$ és az egységnyi felületre jutó töltés (töltéssúrúség) szorzataként számíthatjuk ki, ${ }^{24}$ Az $R_{1}$ sugarú buborék belsejében a térerósség nulla, közvetlenül a buborék felületén kívül pedig $k q / R_{1}^{2}$, így
\[
E_{\text {átlag }}=\frac{1}{2}\left(\frac{k q}{R_{1}^{2}}+0\right)=\frac{1}{8 \pi \varepsilon_{0}} \frac{q}{R_{1}^{2}} .
\]
Másrészt a töltéssúrúség $q /\left(4 \pi R_{1}^{2}\right)$, így az elektromos eredetú nyomáskülönbség:
\[
\Delta p_{\mathrm{el}}=\frac{1}{32 \pi^{2} \varepsilon_{0}} \frac{q^{2}}{R_{1}^{4}} .
\]
Ugyanez a mennyiség a külső és a belső gáznyomás különbségeként is felírható, tehát
\[
\frac{1}{32 \pi^{2} \varepsilon_{0}} \frac{q^{2}}{R_{1}^{4}}=p_{\mathrm{a}}-p_{\mathrm{i}}=p_{\mathrm{a}}\left(1-\frac{R_{0}^{3}}{R_{1}^{3}}\right),
\]
ahonnan a keresett kifejezés pl. így adható meg:
\[
\left(\frac{R_{1}}{R_{0}}\right)^{4}-\left(\frac{R_{1}}{R_{0}}\right)=\frac{q^{2}}{32 \pi^{2} \varepsilon_{0} p_{\mathrm{a}} R_{0}^{4}} .
\]
2.7. Feltételezve, hogy a buborék sugarának $\Delta R=R_{1}-R_{0}$ megváltozása (az eredeti sugárhoz viszonyítva) kicsi, a fenti formulában az
\[
\left(\frac{R_{1}}{R_{0}}\right)^{4}=\left(1+\frac{\Delta R}{R_{0}}\right)^{4} \approx 1+4 \frac{\Delta R}{R_{0}}
\]
közelítés alkalmazható, és innen a sugár (kicsiny) növekedésére a
\[
\Delta R \approx \frac{q^{2}}{96 \pi^{2} \varepsilon_{0} p_{\mathrm{a}} R_{0}^{3}}
\]
kifejezés adódik.

\footnotetext{
${ }^{24}$ Ezt legegyszerúbben úgy mutathatjuk meg, ha feltételezzük, hogy a vékony (de véges vastagságú) töltésrétegben a töltések eloszlása homogén. A Gauss-tétel alkalmazásával láthatjuk, hogy ekkor a belső nulla tér lineárisan növekedve éri el a külső felületen felvett értékét, tehát a töltésrétegben átlagosan a külső érték fele lép fel. Megmutatható azonban az is, hogy a vékony töltésrétegben tetszőleges töltéseloszlás esetén is a külső térerősség fele adja az átlagértéket.

2.8. A lebegés feltétele most is a felhajtóerő és a nehézségi eró egyensúlya:
\[
\frac{4 \pi}{3} R_{1}^{3} \varrho_{\mathrm{a}} g=\left(4 \pi R_{0}^{2} \varrho_{\mathrm{s}} t+\frac{4 \pi}{3} R_{0}^{3} \varrho_{\mathrm{i}}\right) g .
\]
Ha a felületi feszültség hatását elhanyagoljuk, akkor a töltetlen buborék belsejében a kezdeti súrúség megegyezik a külső levegő sűrúségével $\left(\varrho_{\mathrm{i}}=\varrho_{\mathrm{a}}\right)$, hiszen a hőmérséklet is és a nyomás is (jó közelítéssel) ugyanakkora kívül és belül. A feltöltött buborék $R_{1}$ sugarát fejezzük ki $\Delta R$ segítségével:
\[
\frac{4 \pi}{3} R_{0}^{3}\left(1+\frac{\Delta R}{R_{0}}\right)^{3} \varrho_{\mathrm{a}} g=\left(4 \pi R_{0}^{2} \varrho_{\mathrm{s}} t+\frac{4 \pi}{3} R_{0}^{3} \varrho_{\mathrm{i}}\right) g .
\]
Közelítés és némi egyszerúsítés után kapjuk, hogy
\[
\frac{4 \pi}{3} R_{0}^{2}(3 \Delta R) \varrho_{\mathrm{a}}=4 \pi R_{0}^{2} \varrho_{\mathrm{s}} t .
\]
Helyettesítsük be $\Delta R$ helyére az előző alkérdés eredményét, és fejezzük ki a töltést:
\[
q=\sqrt{\frac{96 \pi^{2} \varepsilon_{0} p_{\mathrm{a}} R_{0}^{3} \varrho_{\mathrm{s}} t}{\varrho_{\mathrm{a}}}} \approx 256 \mathrm{nC} .
\]
