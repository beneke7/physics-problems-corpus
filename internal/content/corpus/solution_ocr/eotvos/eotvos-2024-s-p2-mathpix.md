---
id: solution-ocr-eotvos-2024-s-p2
source: eotvos
kind: official_solution_document
language: hu
solution_type: official
source_pdf: cache/phoxiv/eotvos/2024_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [eotvos-2024-rotating-tube]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
2. Ha a folyadékszál hossza nagyobb lenne, mint a maximális nyomáshoz tartozó 25,65 cm, akkor a nyomás elérné a maximális értéket, majd csökkenni kezdene, de a lufi tovább fújódna, míg $\lambda \approx 3$ értéknél kipukkadna.


![](../../../figures/solution-ocr/aee2a743808eabdfdb48a4b3.jpg)
2. A súlytalanság állapotában egy $R$ sugarú, $L \gg R$ hosszúságú és $d \ll R$ falvastagságú alumíniumcső a szimmetriatengelyére merőleges, homogén, $B$ indukciójú mágneses mezőben helyezkedik el. A csövet tengelye körül $\omega _ { 0 }$ szögsebességgel megforgatjuk, majd magára hagyjuk.
a) Vázoljuk fel a cső kiterített palástjáról készült rajzon a csőben kialakuló áramvonalakat!
b) Írjuk le a cső mozgását az idő függvényében!
(Vigh Máté)
Megoldás. a) Ha a cső a mágneses térre merőleges irányban mozogna (de nem forogna), akkor a Lorentz-erő a töltéseket szétválasztaná, és az így kialakuló elektrosztatikus tér kiegyenlítené a Lorentz-erőt, egyensúlyi állapot alakulna ki, és áram nem folyna (4. ábra).

Esetünkben viszont a cső palástjának két átellenes része ellenkező irányban mozog, így a Lorentz-erő is ellentétes irányú lesz, aminek következtében a cső végeinél záródhatnak az áramvonalak, és így nem lesz jelentős töltésfelhalmozódás, hanem az 5. ábrán látható módon zárt áramkör jöhet létre.


![](../../../figures/solution-ocr/8f82daf062286203b4c3d906.jpg)
5. ábra

Az $L \gg R$ feltétel miatt a cső végeitől eltekintve az elektrosztatikus tér elhanyagolható, és így a cső falában

$$
\begin{aligned}
& \boldsymbol { j } = \sigma ( \boldsymbol { \omega } \times \boldsymbol { r } ) \times \boldsymbol { B } , \\
& j ( \alpha ) = \sigma \omega B R \cos \alpha
\end{aligned}
$$

áramsűrűség alakul ki, ahol $\omega$ a cső pillanatnyi szögsebessége, $\sigma$ az alumínium fajlagos vezetőképessége (a fajlagos ellenállás reciproka), $0 \leqslant \alpha < 2 \pi$ pedig a tengelytől a palást adott pontjához mutató $\boldsymbol { r }$ sugár és a mágneses indukció $\boldsymbol { B }$ vektora által bezárt szög. A cső végein felhalmozódik valamennyi töltés: ezek „térítik el” a cső végén az áramvonalakat. A kialakuló áramvonalakat a 6. ábra mutatja.

![](../../../figures/solution-ocr/a18a72c32c3af34ce46a4d8e.jpg)
6. ábra

b) I. módszer. Az $L \gg R$ feltétel miatt a cső végével, mint "széleffektussal" nem foglalkozunk, csak a csőben a cső tengelyével párhuzamosan folyó áramokkal.


Ezekre a mágneses tér erőt fejt ki, egy $\mathrm { d } V$ kicsiny térfogatra ható erő:

$$
\mathrm { d } \boldsymbol { F } = \boldsymbol { j } \times \boldsymbol { B } \mathrm { d } V .
$$

Az erők és a tengelyre merőleges forgatónyomaték-komponensek vektori eredője a szimmetria miatt nulla, így a cső tömegközéppontja nem mozdul el, és tengelye nem fordul el. Ugyanakkor a tengellyel párhuzamos forgatónyomaték-komponensek eredője nem nulla, a cső forgása így lassulni fog. (Az áramok miatt hő disszipálódik, így a cső energiája biztosan csökkenni fog. Ezt mondja ki a Lenz-törvény is.) A cső kicsiny $d R \mathrm {~d} \alpha$ keresztmetszetű, $L$ hosszúságú, $\mathrm { d } V = L d R \mathrm {~d} \alpha$ térfogatú keskeny csíkjára ható tengellyel párhuzamos forgatónyomaték-komponens:

$$
\begin{gathered}
\mathrm { d } \boldsymbol { M } = \boldsymbol { r } \times \mathrm { d } \boldsymbol { F } = \boldsymbol { r } \times ( \boldsymbol { j } \times \boldsymbol { B } ) L d R \mathrm {~d} \alpha , \\
\mathrm {~d} M = - R j B \cos \alpha \cdot L d R \mathrm {~d} \alpha = - \sigma \omega B ^ { 2 } L d R ^ { 3 } \cos ^ { 2 } \alpha \mathrm {~d} \alpha .
\end{gathered}
$$

(A negatív előjel azt fejezi ki, hogy a forgatónyomaték-komponens a szögsebességvektorral ellentétes irányú.) Ennek összegzése a teljes csőre

$$
M = - \sigma \omega B ^ { 2 } L d R ^ { 3 } \int _ { 0 } ^ { 2 \pi } \cos ^ { 2 } \alpha \mathrm {~d} \alpha = - \sigma \omega B ^ { 2 } L d R ^ { 3 } \pi
$$

(Ezt az eredményt a szinuszos jel effektív értéke alapján is ismerhetjük: az átlagos érték $\frac { 1 } { 2 }$ és $\frac { 1 } { 2 } \cdot 2 \pi = \pi$, vagy a $\cos ^ { 2 } \alpha = \frac { 1 } { 2 } ( 1 - \cos 2 \alpha )$ átalakítás után szemléletesen is láthatjuk.) A vékony falú cső tehetetlenségi nyomatéka

$$
\Theta = m R ^ { 2 } = 2 \pi \varrho L d R ^ { 3 } ,
$$

ahol $\varrho$ az alumínium sűrűsége. A cső tengely körüli forgását leíró mozgásegyenlet:

$$
\frac { \mathrm { d } \omega } { \mathrm {~d} t } = \frac { M } { \Theta } = - \frac { \sigma \omega B ^ { 2 } L d R ^ { 3 } \pi } { 2 \pi \varrho L d R ^ { 3 } } = - \frac { \sigma B ^ { 2 } } { 2 \varrho } \omega .
$$

A differenciálegyenlet ugyanolyan alakú, mint a jól ismert radioaktív bomlási törvény, így megoldása:

$$
\omega ( t ) = \omega _ { 0 } \mathrm { e } ^ { - \frac { t } { \tau } } ,
$$

ahol a $\tau$ időállandó:

$$
\tau = \frac { 2 \varrho } { \sigma B ^ { 2 } } .
$$

A cső tehát exponenciálisan lassulva fog forogni.
Megjegyzés. Az időállandó nem függ a cső méreteitől (mindössze annyit használtunk fel, hogy $d \ll R \ll L$ ), csak a cső anyagának sűrűségétől és fajlagos vezetőképességétől, valamint a mágneses mező erősségétől. Alumínium esetében 1 mT mágneses indukció esetén az időállandóra két és fél percet kapunk.


II. módszer. A cső egészében időegységenként

$$
P = \frac { 1 } { \sigma } j _ { \mathrm { eff } } ^ { 2 } V
$$

energia disszipálódik, ahol (a koszinuszos helyfüggés miatt)

$$
j _ { \mathrm { eff } } = \frac { 1 } { \sqrt { 2 } } j _ { \max } = \frac { 1 } { \sqrt { 2 } } \sigma \omega B R ,
$$

és $V = 2 \pi L d R$ a cső térfogata. Ezt a disszipálódó energiát a cső mozgási energiájának csökkenése fedezi:

$$
P = - \frac { \mathrm { d } E _ { \mathrm { m } } } { \mathrm {~d} t } ,
$$

ahol

$$
E _ { \mathrm { m } } = \frac { 1 } { 2 } \Theta \omega ^ { 2 } = \frac { 1 } { 2 } \varrho V R ^ { 2 } \omega ^ { 2 } .
$$

Behelyettesítés és a deriválás elvégzése után:

$$
\frac { 1 } { 2 } \sigma \omega ^ { 2 } B ^ { 2 } R ^ { 2 } V = - \frac { 1 } { 2 } \varrho V R ^ { 2 } \cdot \frac { \mathrm {~d} \left( \omega ^ { 2 } \right) } { \mathrm { d } t } = - \frac { 1 } { 2 } \varrho V R ^ { 2 } \cdot 2 \omega \frac { \mathrm {~d} \omega } { \mathrm {~d} t } ,
$$

egyszerűsítve és rendezve:

$$
\frac { \mathrm { d } \omega } { \mathrm {~d} t } = - \frac { \sigma B ^ { 2 } } { 2 \varrho } \omega ,
$$

az előző módszer eredményével összhangban.
