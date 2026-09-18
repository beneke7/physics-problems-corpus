---
id: ipho-book-2000-q2
problem: ipho-book-2000-q2
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

$a)$ Az elektron sebessége $V$ gyorsítófeszültség esetén $v=\sqrt{2 e V / m}$, ahol $e / m$ a kérdéses fajlagos töltés. (Felhasználtuk, hogy az elektron gyorsítása során szerzett $e V$ energia sokkal nagyobb, mint az elektron kezdeti mozgási energiája, de sokkal kisebb, mint az elektron nyugalmi energiája, így nincs szükség relativisztikus mozgástörvények használatára.)

Az elektronok a katód és az anód közötti $D$ távolságot $T=D /(v \cos \beta) \approx D / v$ idő alatt teszik meg, miközben a mágneses tér miatt a tengelyre merőleges síkban
$\omega=e B / m$ szögsebességgel (az ún. ciklotronfrekvenciával) körmozgást végeznek. A különböző irányban induló elektronok akkor fókuszálódnak az ernyőn (akkor csapódnak be közel azonos helyen), ha a $T$ repülési idő alatt a ciklotronfrekvenciájú körmozgásban éppen egész számú kört tesznek meg. A legkisebb fókuszáló mágneses mezóben egy kör megtételére van idő, vagyis $T=1 \cdot(2 \pi / \omega)$. Ennek feltétele:
\[
\frac{D}{\sqrt{2 e V / m}}=2 \pi \frac{m}{e B}, \quad \text { azaz } \quad \frac{e}{m}=\frac{8 \pi^{2} V}{B^{2} D^{2}} .
\]
b) Az elektronok akkor juthatnak csak ki az egymáshoz igen közeli lemezek közül (akkor nem ütköznek bele egyikbe sem), ha a lemezekre merőleges irányban ható eredő erő (az elektromos mezőből és a mágneses mezőből származó erők összege) éppen nulla.

Tekintsük azt az esetet, amikor $V>0$ és $B>0$. Ilyenkor a felső lemez pozitív, tehát a negatív töltésú elektronokra az elektromos mezó felfelé mutató erőt fejt ki. Az A tartományban (az óramutató járásával ellentétesen kanyarodó elektronoknál) a Lorentz-eró ugyancsak felfelé mutat, ezek az elektronok tehát a felső lemezbe ütköznek, nem érhetik el a filmet.

A B tartományban az elektromos mező és a mágneses mező ellentétes irányú erót fejt ki, ezek tehát (megfelelő nagyságú sebességgel mozgó elektronoknál) kiejthetik egymást. A film tehát a B tartományban készült. Ugyanezt állíthatjuk akkor is, ha $B$ és $V$ előjele negatív, hiszen ilyenkor mind az elektromos, mind pedig a mágneses erő az előzőhöz képest ellentétes irányú.
c) Itt is az elektromos és a mágneses erók egyenlőségét kell megkövetelnünk. Az elektromos mező által kifejtett erő nagysága: $e V / t$, a mágneses mezőé pedig $e v B \sin \varphi$, ahol $v$ az elektron sebessége. Az eróegyensúly feltétele:
\[
v=\frac{V}{t B \sin \varphi} .
\]
Tehát a legnagyobb részecskesebesség a legkisebb megfigyelt szögnek, $\varphi_{\text {min }}=23^{\circ}$ - nak felel meg:
\[
v_{\max }=2,7 \cdot 10^{8} \mathrm{~m} / \mathrm{s}=0,9 c .
\]
Ez már a fénysebességgel összemérhető, a mozgási energiát tehát a
\[
W_{\text {mozgási }}=W_{\text {teljes }}-W_{\text {nyugalmi }}=\frac{m c^{2}}{\sqrt{1-v^{2} / c^{2}}}-m c^{2}
\]
relativisztikus formulából kell számítanunk. Numerikusan: $W_{\text {mozgási }}=641 \mathrm{keV}$.
d) A lemezek közötti térrészt elhagyva az elektronokra már csak a mágneses mezőtől származó $F=e v B \sin \varphi$ nagyságú, állandó nagyságú Lorentz-eró hat, azaz az elektronok spirálpályára kerülnek (a sebességvektor $\varphi$ szöget zár be a mágneses indukcióvektor irányával). Az elektron relativisztikus mozgásegyenlete
( $\boldsymbol{v}$ nagysága állandó)
\[
\boldsymbol{F}=\frac{\Delta \boldsymbol{p}}{\Delta t}=\frac{\Delta}{\Delta t}\left(\frac{m \boldsymbol{v}}{\sqrt{1-\frac{v^{2}}{c^{2}}}}\right)=\frac{m}{\sqrt{1-\frac{v^{2}}{c^{2}}}} \cdot \frac{\Delta \boldsymbol{v}}{\Delta t}=\frac{m \boldsymbol{a}}{\sqrt{1-\frac{v^{2}}{c^{2}}}} .
\]
A mágneses mezó irányára merőleges síkban a körpálya $r$ sugara ( $a=v^{2} / r$ relativisztikusan is érvényes, hiszen ez a sebességvektor elfordulásából ered):
\[
e v B \sin \varphi=\frac{m v^{2}}{r \sqrt{1-\frac{v^{2}}{c^{2}}}} \rightarrow r=\frac{m v}{e B \sin \varphi} \frac{1}{\sqrt{1-\frac{v^{2}}{c^{2}}}} .
\]
A filmre érkezés ideje $\Delta t=s / v$, ezalatt a körpályán történő elfordulás középponti szöge:
\[
\Delta \alpha=\frac{v \sin \varphi \Delta t}{r}=\frac{s}{r} \sin \varphi=\frac{e B s}{m v} \sqrt{1-\frac{v^{2}}{c^{2}}} \sin ^{2} \varphi,
\]
ami még $\varphi=90^{\circ}$ szög esetén is kicsi (kevesebb, mint 0,1 rad), azaz a repülés ideje alatt az elektronra ható Lorentz-eró gyakorlatilag függőleges marad. Tehát a filmre történő becsapódásig az $y$ irányú elmozdulás jó közelítéssel:
\[
\frac{y}{2}=\frac{a}{2} \Delta t^{2},
\]
ahol a gyorsulás a fentiek alapján
\[
a=\frac{e v B \sin \varphi}{m} \sqrt{1-\frac{v^{2}}{c^{2}}} .
\]
Felhasználva (00-1)-et, az $y(\varphi)$-re átalakítások után a következő adódik
\[
\left(\frac{y}{B s^{2} \sin \varphi}\right)^{2}=\left(\frac{e}{m}\right)^{2} \cdot \frac{B^{2} t^{2} \sin ^{2} \varphi}{V^{2}}-\left(\frac{e}{m}\right)^{2} \cdot \frac{1}{c^{2}} .
\]
Ezek után ha felhasználjuk a megadott táblázat adatait és ábrázoljuk a bal oldalon álló $\left(\frac{y}{B s^{2} \sin \varphi}\right)^{2}$ kifejezést $\left(\frac{B t \sin \varphi}{V}\right)^{2}$ függvényében, közelítőleg egyenest kell kapjunk, melynek meredeksége $(e / m)^{2}$, tengelymetszete pedig - $[e /(m c)]^{2}$. Mindkét mennyiség leolvasható a grafikonról, és a keresett fajlagos töltésre a meredekségbő̌l $e / m=1,70 \cdot 10^{11} \mathrm{C} / \mathrm{kg}$, a tengelymetszetből pedig $e / m=1,68 \cdot 10^{11} \mathrm{C} / \mathrm{kg}$ adódik. (Az elektron fajlagos töltését elsőként J.J.Thomson angol fizikus mérte meg 1897-ben, mai „hivatalosan elfogadott" értéke $e / m=1,76 \cdot 10^{11} \mathrm{C} / \mathrm{kg}$.)

Megjegyzés: Ha nem használjuk fel, hogy a Lorentz-eró nagyjából függőleges marad, akkor az $y$ irányú elmozdulást a körpálya adataiból adhatjuk meg:
\[
\frac{y}{2}=r(1-\cos \Delta \alpha) \approx r \frac{\Delta \alpha^{2}}{2},
\]
amiben felhasználtuk, hogy kicsiny szögekre $\cos \Delta \alpha \approx 1-\frac{\Delta \alpha^{2}}{2}$. Ebbe behelyettesítve $r$ és $\Delta \alpha$ korábban meghatározott értékeit, átalakítás után az alábbi összefüggést kapjuk:
\[
\left(\frac{y}{B s^{2} \sin ^{3} \varphi}\right)^{2}=\left(\frac{e}{m}\right)^{2} \cdot \frac{B^{2} t^{2} \sin ^{2} \varphi}{V^{2}}-\left(\frac{e}{m}\right)^{2} \cdot \frac{1}{c^{2}} .
\]
Ebben az esetben is egyenesillesztést követően a meredekség, illetve a tengelymetszet szolgáltatja $e / m$ értékét. Azonban ha ábrázoljuk a megadott táblázat felhasználásával a megfelelő pontpárokat, azokra egy negatív meredekségú egyenest lehet illeszteni. Ez ellentmond az egyenletnek, hiszen abban pozitív meredekségú egyenest látunk. Az ellentmondás oka a megadott adatokban rejlik. Ugyanis a táblázatban megadott értékek várhatóan a függőleges Lorentz-eró feltételezésével kapott egyenlet alapján készültek. Ha a körpályából megkapott egyenletből az $e / m$ irodalmi értékét felhasználva adott $\varphi$ szöghöz kiszámítjuk a megfelelő $y$ távolságot, a feladatban megadott értékekhez képest 2-3 mm-es eltérést kapunk, ami kisebb szögeknél jelentős relatív hibát eredményez, így fordulhat elő az, hogy az illesztendő egyenes meredeksége előjelet vált.
