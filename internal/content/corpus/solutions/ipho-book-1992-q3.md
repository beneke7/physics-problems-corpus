---
id: ipho-book-1992-q3
problem: ipho-book-1992-q3
source: ipho
language: hu
solution_language: hu
solution_type: official
source_pdf: "kkk/Korábbi kunfalvi anyagok 2/IPhO_konyv.pdf"
figure_files: []
provenance_note: "kkk/Korábbi kunfalvi anyagok 2/IPhO_konyv.pdf; Mathpix OCR"
verification_status: pending
---

## Megoldás 3

a) A Napból kisugárzott teljestmény $P_{\text {Nap }}=4 R_{\text {Nap }}^{2} \pi \cdot \sigma T_{\text {Nap }}^{4}$. A Nap körül, attól $R$ távolságra lévő $4 R^{2} \pi$ felszínú gömbfelületen ez a kisugárzott
teljesítmény egyenletesen oszlik el, ezért az $r$ sugarú szondát éró sugárzás teljesítménye (a szonda főkörének területét használva)
\[
P_{\mathrm{elnyelt}}=\frac{r^{2} \pi}{4 R^{2} \pi} P_{\mathrm{Nap}}
\]
Másrészt a szonda teljes felülete által kisugárzott teljesítmény
\[
P_{\text {kisugárzott }}=4 r^{2} \pi \cdot \sigma T_{\text {szonda }}^{4} .
\]
Egyensúlyi állapotban az elnyelt és a kisugárzott teljesítmény megegyezik:
\[
P_{\text {elnyelt }}=P_{\text {kisugárzott }},
\]
amiből a fentiek felhasználásával a szonda hőmérséklete:
\[
T_{\text {szonda }}=T_{\text {Nap }} \cdot \sqrt{\frac{R_{\text {Nap }}}{2 R}} \approx 290 \mathrm{~K} .
\]
b) Ha a szonda felülete olyan, hogy csak egy bizonyos $f_{\text {max }}$ frekvencia alatt nyel el (és ugyanekkora frekvenciáig sugároz) elektromágneses hullámokat, akkor valamely $T$ hőmérsékleten az elnyelt (és a leadott) teljesítmény a feketetestéhez képest
\[
\frac{15}{\pi^{4}} \cdot \int_{0}^{\eta_{\max }} \frac{\eta^{3} d \eta}{e^{\eta}-1}
\]
faktorral változik meg, ahol $\eta_{\text {max }}=\left(h f_{\text {max }}\right) /(k T)$. Ez a kifejezés azt adja meg, hogy a Planck-féle sugárzási törvényben szereplő függvény nulla és bizonyos $f_{\text {max }}$ értékek közötti görbe alatti területe hányadrésze a teljes görbe alatti területnek.

A Nap $T=6000 \mathrm{~K}$-es hőmérsékleténél $\eta_{\mathrm{max}}=1200 \mathrm{~K} / 6000 \mathrm{~K}=0,2$ nagyságú, vagyis az elnyelt sugárzás kiszámításánál a Planck-görbének csak az origóhoz közeli kicsiny darabja kap szerepet. Az útmutatás alapján:
\[
\int_{0}^{\eta_{\max }} \frac{\eta^{3} d \eta}{e^{\eta}-1} \approx \int_{0}^{\eta_{\max }} \frac{\eta^{3} d \eta}{(1+\eta)-1}=\int_{0}^{\eta_{\max }} \eta^{2} d \eta=\frac{\eta_{\max }^{3}}{3} .
\]
A szonda tehát a festékréteg fényvisszaveró tulajdonságai miatt
\[
\frac{15}{\pi^{4}} \cdot \frac{0,2^{3}}{3} \approx 4,1 \cdot 10^{-4} \text {-szer kevesebb }
\]
energiát nyel el, mint ahhoz képest, ha feketetest lenne.
Ha egy pillanatra elfeledkezünk arról, hogy a kisugárzott teljesítmény is kisebb, mint egy abszolút fekete testé, akkor a hőmérsékletre a
\[
4,1 \cdot 10^{-4} r^{2} \pi \cdot \sigma T_{\mathrm{Nap}}^{4} \cdot \frac{R_{\mathrm{Nap}}^{2}}{R^{2}}=4 \pi r^{2} \cdot \sigma T_{\mathrm{szonda}}^{4}
\]
összefüggésből a
\[
T_{\text {Szonda }}=\sqrt[4]{4,1 \cdot 10^{-4}} \cdot T_{\text {Nap }} \sqrt{\frac{R_{\text {Nap }}}{2 R}} \approx 40 \mathrm{~K}
\]
értéket kapjuk. Vajon mekkora hibát követtünk el akkor, amikor a kisugárzott teljesítmény számításánál a teljes frekvenciatartományt figyelembe vettük, és nem csak az $f_{\text {max }}$ alatti értékeket? Mivel $T=40 \mathrm{~K}$-nél $\eta_{\max } \approx 1200 \mathrm{~K} / 40 \mathrm{~K}=30$, másrészt a Planck-görbe grafikonjáról leolvasható, hogy a kisugárzott teljesítmény gyakorlatilag teljes egészében az $\eta<10$ frekvenciatartományból származik, a közelítésünk jogossága utólag beigazolódott.
- c) Az $r=0,5 \mathrm{~m}$ sugarú úrszonda által elnyelt teljesítmény
\[
4,1 \cdot 10^{-4} r^{2} \pi \cdot \sigma T_{\mathrm{Nap}}^{4} \cdot \frac{R_{\mathrm{Nap}}^{2}}{R^{2}} \approx 0,5 \mathrm{~W} .
\]

Mivel ez az érték sokkal kisebb, mint a belső hótermelés $P_{0}=1 \mathrm{~kW}$-os teljesítménye, elegendó az utóbbival számolnunk. A $P_{0}$-hoz tartozó „feketetest-hőmérséklet”
\[
T_{\text {fekete szonda }}=\sqrt[4]{\frac{P_{0}}{4 \pi r^{2} \sigma}} \approx 270 \mathrm{~K},
\]
ekkora lenne a szonda hőmérséklete, ha minden frekvencián képes lenne sugározni. Mivel azonban ekkora hómérsékleten $\eta_{\text {max }}=4,4$ és a Planck-görbe ezen $\eta_{\text {max }}$ alatti tartományának területe kb. az egész terület 70\%-a, a tényleges hőmérsékletnek magasabbnak kell lennie, mint a feketetest-hőmérséklet.

A pontos egyenlet, amelyből az egyensúlyi hőmérséklet megkapható:
\[
P_{0}=4 \pi r^{2} \cdot \sigma T_{\text {szonda }}^{4} \cdot \frac{15}{\pi^{4}} \cdot \int_{0}^{\frac{1200 \mathrm{~K}}{T_{\text {szonda }}}} \frac{\eta^{3} d \eta}{e^{\eta}-1} .
\]
Iterációs eljárással, azaz az előző hőmérséklet-értékkel kiszámítva az integrált (görbe alatti terület becslése a 150, ábra alapján), majd az egyenletet kifejezve $T_{\text {szonda }}$-ra kapunk egy, a kiinduló értéktől eltérő numerikus értéket. Ezzel az új értékkel kiszámítva ismét az integrált, majd meghatározva az új hőmérsékletet, az eljárást addig folytatjuk, amíg az új hőmérséklet már nem változik lényegesen. Ez a konvergens érték $T_{\text {szonda }} \approx 320 \mathrm{~K}$, azaz kb. 50 °C-os a szonda.
d) A hőtan II. főtétele szerint nem létezhet olyan festék, amely egy bizonyos frekvenciatartományban nem nyel el sugárzást, de ugyanakkor feketetestként sugároz ebben a frekvenciatartományban. Ha ugyanis létezne ilyen anyag, akkor tudnánk készíteni egy olyan zárt rendszert, melynek részei kezdetben azonos hőmérsékletúek, majd a sugárzási energiaátadás következtében a rendszer egyik része lehúlne, a másik pedig felmelegedne.

Megjegyzés: Azt, hogy termodinamikai egyensúlyban adott hőmérsékleten a test $\varepsilon$ emisszivitásának (a test által egységnyi idő alatt, egységnyi felületen kisugárzott energia)
és a test ugyanezen a hómérsékleten vett $a$ abszorpciós együtthatójának (az egységnyi idő alatt egységnyi felületre beérkező energia hányad részét nyeli el) a hányadosa anyagtól független állandó (hőmérséklettől függ), a hőmérsékleti sugárzás Kirchhoff-törvényének nevezik. Ennek nemcsak adott hőmérsékleten, hanem minden frekvencián is érvényesnek kell lennie (a hányados ekkor a hőmérséklettől és a frekvenciától is függ), amit részletes egyensúly elvének nevezünk. Mivel a feketetest minden sugárzást elnyel, $a_{\text {fekete }}=1$, ezért egy nem feketetest emisszivitására fennáll, hogy
\[
\varepsilon(f, T)=a(f, T) \varepsilon_{\text {fekete }}(f, T),
\]
ahol $a(f, T)$ a nem feketetest abszorpciós együtthatója, $\varepsilon_{\text {fekete }}(f, T)$ egy feketetest emiszszivitása (amit a Planck-törvény ad meg). Látható, hogy ha adott frekvencián az abszorpciós együttható nulla, akkor az emisszivitás sem lehet 0-tól különböző. Mivel a feketetest emisszivitása lehet nulla pl. magas frekvencián (lásd a [150, ábrát, magasabb hőmérséklet hatására a görbe csúcsosabb lesz és a csúcs a nagyobb frekvenciák felé tolódik el - Wien-féle eltolódási törvény), így ilyen frekvencián a test emisszivitása is lehet nulla, de az abszorpciós együtthatója lehet akár 1 körül is, azaz az, hogy adott frekvencián és hőmérsékleten a test elnyel sugárzást, de nem bocsát ki, lehetséges.
$e$ ) Olyan borítás, amely a földi légkörhöz hasonlóan a magasabb frekvenciájú sugárzást átengedi, az alacsonyabb frekvenciájúakat viszont visszaveri, „üvegházhatást" hoz létre és a feketetest-hőmérséklet fölé emeli a szonda hőmérsékletét. Ha például a korábban említett 1200 K-nek megfeleló frekvencia a küszöbérték, de a festék áteresztőképessége éppen a fordítottja a $b$ ) alpontbelinek, akkor egy 290 K-es szonda gyakorlatilag ugyanannyi energiát nyel el, mintha feketetest lenne $(6000 / 290 \approx 20)$, viszont $\eta_{\text {min }}=1200 \mathrm{~K} / 290 \mathrm{~K} \approx 4$ miatt sugározni csak kb. feleannyira tud, mint egy feketetest. A szonda tehát felmelegszik, egészen addig, amíg az elnyelt és a kisugárzott teljesítmény egyenlő nem lesz egymással.

\title{
