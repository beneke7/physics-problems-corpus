---
id: ipho-book-2013-q2
problem: ipho-book-2013-q2
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

2.1. Az ezüst nanogolyócska térfogata és tömege:
\[
V=\frac{4 \pi}{3} R^{3}=4,19 \cdot 10^{-24} \mathrm{~m}^{3}, \quad M=\varrho_{\mathrm{Ag}} V=4,39 \cdot 10^{-20} \mathrm{~kg} .
\]
A nanogolyócskában található ezüstionok száma: $N=N_{\mathrm{A}} \frac{M}{M_{\mathrm{Ag}}}=2,45 \cdot 10^{5}$; töltéssúrúsége: $\varrho=e N / V=9,38 \cdot 10^{9} \mathrm{C} / \mathrm{m}^{3}$; a szabad elektronok koncentrációja: $n=N / V=5,85 \cdot 10^{28} 1 / \mathrm{m}^{3}$, összes töltése: $Q=-e N=-3,93 \cdot 10^{-14} \mathrm{C}$; a töltéshordozók összes tömege: $m_{0}=m_{\mathrm{e}} N=2,23 \cdot 10^{-25} \mathrm{~kg}$.
2.2. Egy $R$ sugarú, homogén töltéseloszlású, pozitív $\varrho$ töltéssúrúségú gömb középpontjától $|\boldsymbol{r}|<R$ távolságban lévő pontban az elektromos térerősség nagysága a Gauss-törvényből kapható meg:
\[
E_{+}(r) 4 \pi r^{2}=\frac{4 \pi}{3} r^{3} \frac{\varrho}{\varepsilon_{0}},
\]
a térerősség irányát is figyelembe véve:
\[
\boldsymbol{E}_{+}=\frac{\varrho}{3 \varepsilon_{0}} \boldsymbol{r} .
\]
Hasonlóan számolható az $R_{1}$ sugarú, - $\varrho$ töltéssúrúségú gömb tere a gömbön belül, annak középpontjától $\left|\boldsymbol{r}^{\prime}\right|=\left|\boldsymbol{r}-\boldsymbol{x}_{\mathrm{d}}\right|$ távolságban: $\boldsymbol{E}_{-}=-\frac{\varrho}{3 \varepsilon_{0}}\left(\boldsymbol{r}-\boldsymbol{x}_{\mathrm{d}}\right)$. Az $R_{1}$ sugarú gömbön belül az eredő elektromos térerósség tehát:
\[
\boldsymbol{E}=\boldsymbol{E}_{+}+\boldsymbol{E}_{-}=\frac{\varrho}{3 \varepsilon_{0}} \boldsymbol{x}_{\mathrm{d}},
\]
a keresett együttható értéke tehát $A=1 / 3$.
2.3. Az előző részfeladat eredménye szerint a töltéssemleges térrészben elhelyezkedő, közelítőleg $Q$ össztöltésú elektronfelhőre ható erő:
\[
\boldsymbol{F}=Q \boldsymbol{E}=-e N \frac{\varrho}{3 \varepsilon_{0}} \boldsymbol{x}_{\mathrm{p}}=-\frac{4 \pi}{9 \varepsilon_{0}} R^{3} e^{2} n^{2} \boldsymbol{x}_{\mathrm{p}} .
\]
Az elektronfelhő elmozdítása során ennek az erónek a (-1)-szeresét kell kifejtenünk. Mivel a szükséges eró nagysága az elmozdulással egyenesen arányos, ezért számolhatunk úgy, mintha végig a maximális eró felével történt volna a munkavégzés:
\[
W_{\mathrm{el}}=\frac{1}{2}\left|\boldsymbol{F}_{\max }\right| x_{\mathrm{p}}=\frac{2 \pi}{9 \varepsilon_{0}} R^{3} e^{2} n^{2} x_{\mathrm{p}}^{2} .
\]
2.4. Az ezüstgolyócska belsejében az eredő elektromos térnek zérusnak kell lennie, így az elmozdított töltések által a töltéssemleges térrészben keltett térerősség $-\boldsymbol{E}_{0}=E_{0} \boldsymbol{e}_{x}$. A 2.2. rész eredményét felhasználva kifejezhető az elektronfelhő $x_{\mathrm{p}}$ elmozdulása:
\[
x_{\mathrm{p}}=\frac{3 \varepsilon_{0}}{\varrho} E_{0}=\frac{3 \varepsilon_{0}}{e n} E_{0} .
\]

A kicsiny $x_{\mathrm{p}}$ elmozdulás közben a golyócska közepén átmenő $(y, z)$ síkon közelítőleg egy $\pi R^{2} x_{\mathrm{p}}$ térfogatú hengerben található elektronok haladnak át. Ezek (negatív) össztöltése: $-\Delta Q=-\pi R^{2} x_{\mathrm{p}} \varrho=-\pi R^{2} e n x_{\mathrm{p}}$.
2.5.1. Feleltessük meg a töltések széthúzásakor végzett $W_{\mathrm{el}}$ munkát a kondenzátor energiájának, a szétválasztott $\Delta Q$ töltést pedig a kondenzátor töltésének. A $W_{\text {el }}=\Delta Q^{2} /(2 C)$ összefüggést használva a nanogolyócskát helyettesítő kondenzátor kapacitása:
\[
C=\frac{\Delta Q^{2}}{2 W_{\mathrm{el}}}=\frac{9 \pi}{4} \varepsilon_{0} R=6,26 \cdot 10^{-19} \mathrm{~F} .
\]
2.5.2. A kondenzátorra vonatkozó $V_{0}=\Delta Q / C$ összefüggést és az eddigi eredményeket felhasználva:
\[
V_{0}=\frac{\Delta Q}{C}=\frac{\pi R^{2} e n x_{\mathrm{p}}}{\frac{9 \pi}{4} \varepsilon_{0} R}=\frac{4}{3} R\left(\frac{e n x_{\mathrm{p}}}{3 \varepsilon_{0}}\right)=\frac{4}{3} R E_{0} .
\]
2.6.1. Az elektronfelhőben található $N$ darab elektron összes mozgási energiája:
\[
W_{\mathrm{kin}}=\frac{1}{2} m_{\mathrm{e}} v^{2} N=\frac{2 \pi}{3} R^{3} n m_{\mathrm{e}} v^{2} .
\]
Az $I$ áramerősség nagysága megkapható, ha elosztjuk a $\pi R^{2}$ alapterületú, $v \Delta t$ magasságú hengerben található elektronok össztöltését a $\Delta t$ időtartammal:
\[
I=\pi R^{2} e n v .
\]
2.6.2. A mozgó elektronok $W_{\text {kin }}$ kinetikus energiája megfeleltethetó egy $L$ induktivitású, $I$ árammal átjárt vezető $L I^{2} / 2$ energiájával, ebből:
\[
L=\frac{2 W_{\mathrm{kin}}}{I^{2}}=\frac{4 m_{\mathrm{e}}}{3 \pi R n e^{2}}=2,57 \cdot 10^{-14} \mathrm{H} .
\]
2.7.1.-2.7.2. A helyettesítő áramkör $C$ kapacitásából és $L$ induktivitásából a rezonanciafrekvencia kiszámítható:
\[
\omega_{\mathrm{p}}=\frac{1}{\sqrt{L C}}=\sqrt{\frac{n e^{2}}{3 m_{e} \varepsilon_{0}}} .
\]
Behelyettesítve $\omega_{\mathrm{p}}=7,88 \cdot 10^{15} \mathrm{rad} / \mathrm{s}$, a hullámhossz pedig $\lambda_{\mathrm{p}}=2 \pi c / \omega_{\mathrm{p}}=$ 239 nm.
2.8.1. Egyetlen elektron időátlagolt kinetikus energiája $\frac{1}{2} m_{\mathrm{e}}\left\langle v^{2}\right\rangle$. Mivel az ütközések egy-egy elektronnál $\tau$ időnként történnek, és összesen $N$ darab elektronunk van, az energiadisszipáció teljesítménye:
\[
P_{\text {hö }}=\frac{1}{2 \tau} N m_{\mathrm{e}}\left\langle v^{2}\right\rangle=\frac{2 \pi}{3 \tau} R^{3} n m_{\mathrm{e}}\left\langle v^{2}\right\rangle .
\]

Az áramerősség négyzetének időátlagát a 2.6.1 részben kapott eredményből származtathatjuk:
\[
\left\langle I^{2}\right\rangle=\left(\pi R^{2} e n\right)^{2}\left\langle v^{2}\right\rangle .
\]
2.8.2. A Joule-hóre vonatkozó $P_{\text {hô }}=R_{\text {hô }}\left\langle I^{2}\right\rangle$ összefüggést használva:
\[
R_{\text {hö }}=\frac{2 m_{\mathrm{e}}}{3 \pi n e^{2} R \tau}=2,46 \Omega .
\]
2.9. Az előző részhez hasonlóan induljunk ki a $P_{\text {szórt }}=R_{\text {szórt }}\left\langle I^{2}\right\rangle$ összefüggésből.
\[
R_{\mathrm{szórt}}=\frac{P_{\mathrm{szórt}}}{\left\langle I^{2}\right\rangle}=\frac{Q^{2} x_{0}^{2} \omega_{\mathrm{p}}^{4}}{12 \pi \varepsilon_{0} c^{3}\left(\pi R^{2} e n\right)^{2}\left\langle v^{2}\right\rangle} .
\]
Mivel $v(t)=-x_{0} \omega_{\mathrm{p}} \sin \left(\omega_{\mathrm{p}} t\right)$, így $\left\langle v^{2}\right\rangle=x_{0}^{2} \omega_{\mathrm{p}}^{2} / 2$, valamint, $Q=\frac{4 \pi}{3} R^{3}$ en, ezeket behelyettesítve, egyszerúsítés után kapjuk:
\[
R_{\mathrm{szórt}}=\frac{8}{27} \frac{R^{2} \omega_{\mathrm{p}}^{2}}{\pi \varepsilon_{0} c^{3}}=2,45 \Omega \text {. }
\]
2.10.1.-2.10.2. A nanogolyócskát gerjesztő fény frekvenciája éppen megegyezik a rezgő elektronfelhő rezonanciafrekvenciájával, ezért a helyettesítő áramkör eredő impedanciája tisztán ohmikus, $R_{\text {hő }}+R_{\text {szórt }}$ értékú. A helyettesítő feszültségforrás feszültségének amplitúdója 2.5.2 alapján $V_{0}=4 R E_{0} / 3$, effektív értéke pedig a szinuszos változás miatt $V_{0} / \sqrt{2}$. A két fogyasztó között az ellenállások arányában oszlik meg a feszültség, így az időátlagolt teljesítmények a következőképp számolhatók:
\[
\begin{aligned}
P_{\text {hö }} & =\frac{\left(\frac{R_{\text {hö }}}{R_{\text {hǒo }}+R_{\text {szórt }}} \frac{V_{0}}{\sqrt{2}}\right)^{2}}{R_{\text {hő }}}=\frac{8 R_{\text {hö }} R^{2}}{9\left(R_{\text {hö }}+R_{\text {szórt }}\right)^{2}} E_{0}^{2}, \\
P_{\text {szórt }} & =\frac{R_{\text {szórt }}}{R_{\text {hö }}} P_{\text {hôo }}=\frac{8 R_{\text {szórt }} R^{2}}{9\left(R_{\text {hố }}+R_{\text {szórt }}\right)^{2}} E_{0}^{2} .
\end{aligned}
\]
A beeső fény amplitúdóját a Poynting-vektor nagyságából kaphatjuk meg:
\[
E_{0}=\sqrt{\frac{2 S}{\varepsilon_{0} c}} .
\]
A megadott adatokat a kifejezésekbe helyettesítve a $P_{\text {hő }}=6,82 \mathrm{nW}, P_{\text {szórt }}=$ 6,81 nW és $E_{0}=27,4 \mathrm{kV} / \mathrm{m}$ eredményeket kapjuk.
2.11.1. A tartályban lévő nanogolyócskák száma $N_{\mathrm{ng}}=a h^{2} n_{\mathrm{ng}}=7,3 \cdot 10^{11}$, a teljes fejlődő Joule-hő tehát $P_{\mathrm{góz}}=N_{\mathrm{ng}} P_{\mathrm{ho}}=4,98 \mathrm{~kW}$. Ez a teljesítmény a víz felmelegítésére, elforralására és a góz felmelegítésére fordítódik:
\[
P_{\mathrm{göz}}=m_{\mathrm{göz}}\left[c_{\text {víz }}\left(T_{100}-T_{\text {hố }}\right)+L_{\text {víz }}+c_{\text {gốz }}\left(T_{\text {gőz }}-T_{100}\right)\right],
\]
ebből az időegység alatt képződő vízgőz tömege:
\[
m_{\text {gőz }}=\frac{P_{\text {gőz }}}{c_{\text {víz }}\left(T_{100}-T_{\text {hố }}\right)+L_{\text {víz }}+c_{\text {góz }}\left(T_{\text {gőz }}-T_{100}\right)}=1,90 \cdot 10^{-3} \mathrm{~kg} / \mathrm{s} .
\]
2.11.2. A beeső fény teljes teljesítménye $h^{2} S=10,0 \mathrm{~kW}$, ebből csak a gőzképződésre fordítódó $P_{\text {gő }}=4,98 \mathrm{~kW}$ a hasznos teljesítmény, így a gőzfejlesztő készülék hatásfoka $\eta=4,98 \mathrm{~kW} / 10,0 \mathrm{~kW}=0,498$.
