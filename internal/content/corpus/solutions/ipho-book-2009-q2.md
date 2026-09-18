---
id: ipho-book-2009-q2
problem: ipho-book-2009-q2
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

Ennek a feladatnak a megoldásában kulcsszerepet játszik a relativisztikus, longitudinális Doppler-effektus. Ha az $\omega$ körfrekvenciájú fényt kibocsátó fényforrás a megfigyelőhöz képest $v$ relatív sebességgel mozog, akkor a megfigyelő által észlelt $\omega^{\prime}$ körfrekvencia
\[
\omega^{\prime}=\omega \sqrt{\frac{1 \pm \frac{v}{c}}{1 \mp \frac{v}{c}}} \approx \omega\left(1 \pm \frac{v}{c}\right),
\]
ahol $c$ a fénysebesség, és a közelító egyenlőség akkor igaz, ha $\frac{v}{c} \ll 1$. A felső előjelezés akkor érvényes, ha a fényforrás és a megfigyelő közelednek egymáshoz, az alsó pedig akkor, ha távolodnak. (A közelítés az $\varepsilon \ll 1$ esetén érvényes $(1+\varepsilon)^{a} \approx$ $\approx 1+a \varepsilon$ formula többszöri alkalmazásával kapható meg.)

Jelölje $\omega_{\mathrm{L}}$ a lézer laboratóriumban mért körfrekvenciáját, legyen $\hbar \omega_{0}$ az atom két állapota közötti energiakülönbség. Ekkor a $-x$ tengely irányába haladó foton energiája $\hbar \omega_{\mathrm{L}}$, impulzusa $-\frac{\hbar \omega_{\mathrm{L}}}{c}=-\hbar q$, ahol $q$ a hullámszám.

A feladatmegoldás során végig feltételezzük, hogy $\frac{v}{c} \ll 1$, valamint
\[
\frac{\hbar q}{m v}=\frac{\hbar \omega_{\mathrm{L}}}{m v c} \ll 1,
\]
és ezen kis mennyiségekben első rendig számolunk.
2.1.1. A (09-7) egyenlet alapján a fényforráshoz $v$ sebességgel közeledő atom által észlelt frekvencia $\omega_{\mathrm{L}}\left(1+\frac{v}{c}\right)$, tehát a rezonanciafeltétel $\omega_{0}=\omega_{\mathrm{L}}\left(1+\frac{v}{c}\right)$.
2.1.2. A foton elnyelése után az atom impulzusa a foton impulzusával csökken, így
\[
p_{\mathrm{a}}=m v-\frac{\hbar \omega_{\mathrm{L}}}{c} .
\]
2.1.3. Az atom teljes energiája a mozgási energiájának és a gerjesztési energiának az összege, azaz
\[
\varepsilon_{\mathrm{a}}=\frac{p_{\mathrm{a}}^{2}}{2 m}+\hbar \omega_{0} \approx \frac{m v^{2}}{2}+\hbar \omega_{\mathrm{L}} .
\]
2.2.1.-2.2.4. A $v^{\prime}=v-\frac{\hbar \omega_{\mathrm{L}}}{m c}$ sebességgel mozgó atom saját rendszerében $\omega_{0}$ frekvenciájú fotont bocsát ki, ami azt jelenti, hogy a labor rendszeréből a foton frekvenciája
\[
\omega_{0}\left(1-\frac{v^{\prime}}{c}\right)=\omega_{0}\left(1-\frac{v}{c}+\frac{\hbar \omega_{\mathrm{L}}}{m v c} \frac{v}{c}\right) \approx \omega_{0}\left(1-\frac{v}{c}\right) \approx \omega_{\mathrm{L}} .
\]
Innen a foton energiája és impulzusa egyszerúen kiszámolható:
\[
p_{\mathrm{f}}^{-} \approx-\frac{\hbar \omega_{\mathrm{L}}}{c}, \quad \varepsilon_{\mathrm{f}}^{-} \approx \hbar \omega_{\mathrm{L}} .
\]
A foton kibocsátása után az atom impulzusa ezzel az értékkel nő, így
\[
p_{\mathrm{a}}^{-} \approx m v, \quad \varepsilon_{\mathrm{a}}^{-}=\frac{\left(p_{\mathrm{a}}^{-}\right)^{2}}{2 m} \approx \frac{m v^{2}}{2} .
\]
Végeredményben az abszorpciós-emissziós folyamat után a két részecske állapota olyan, mintha a foton nem is lépett volna kölcsönhatásba az atommal.
2.3.1.-2.3.4. Ha az atom $+x$ irányban bocsátja ki a fotont, akkor a labor rendszerében nagyobbnak észleljük a foton frekvenciáját. Az előző levezetéshez hasonlóan kell számolnunk, azonban $v^{\prime}$ előjele módosul:
\[
\omega_{0}\left(1+\frac{v^{\prime}}{c}\right) \approx \omega_{0}\left(1+\frac{v}{c}\right)=\omega_{\mathrm{L}} \cdot \frac{1+\frac{v}{c}}{1-\frac{v}{c}} \approx \omega_{\mathrm{L}}\left(1+\frac{2 v}{c}\right) .
\]
Ebből a foton impulzusát és energiáját, majd az impulzus- és energiamegmaradásból az atom impulzusát és energiáját kapjuk meg:
\[
\begin{array}{ll}
p_{\mathrm{f}}^{+} \approx \frac{\hbar \omega_{\mathrm{L}}}{c}\left(1+\frac{2 v}{c}\right), & \varepsilon_{\mathrm{f}}^{+} \approx \hbar \omega_{\mathrm{L}}\left(1+\frac{2 v}{c}\right), \\
p_{\mathrm{a}}^{+} \approx m v-\frac{2 \hbar \omega_{\mathrm{L}}}{c}, & \varepsilon_{\mathrm{a}}^{+} \approx \frac{m v^{2}}{2}\left(1-\frac{4 \hbar \omega_{\mathrm{L}}}{m v c}\right) .
\end{array}
\]
2.4.1.-2.4.4. Minthogy a spontán emisszió egyforma valószínúséggel mehet végbe $+x$ és $-x$ irányban, a keresett átlagértékek az előzőekben meghatározott, megfelelő + és - jelölésú mennyiségek számtani közepeiként kaphatók meg:
\[
\begin{array}{ll}
\bar{p}_{\mathrm{f}} \approx \frac{\hbar \omega_{\mathrm{L}} v}{c^{2}} \approx 0, & \bar{\varepsilon}_{\mathrm{f}} \approx \hbar \omega_{\mathrm{L}}\left(1+\frac{v}{c}\right), \\
\bar{p}_{\mathrm{a}} \approx m v-\frac{\hbar \omega_{\mathrm{L}}}{c}, & \bar{\varepsilon}_{\mathrm{a}} \approx \frac{m v^{2}}{2}\left(1-\frac{2 \hbar \omega_{\mathrm{L}}}{m v c}\right) .
\end{array}
\]
2.5.1.-2.5.2. $\mathrm{A}-x$ irányban haladó foton által az atomnak átlagosan átadott impulzus és energia a kölcsönhatás utáni átlagértékek és a kezdeti értékek különbségeként kapható meg:
\[
\Delta p^{-}=\bar{p}_{\mathrm{a}}-m v \approx-\frac{\hbar \omega_{\mathrm{L}}}{c}, \quad \Delta \varepsilon^{-}=\bar{\varepsilon}_{\mathrm{a}}-\frac{m v^{2}}{2} \approx-\frac{\hbar \omega_{\mathrm{L}} v}{c} .
\]
2.6.1.-2.6.2. Ha a foton nem szemből, hanem az atommal azonos irányból érkezik, teljesen hasonló módon számolhatunk, csak ellentétes előjelú eredményeket kapunk az átlagos energia- és impulzusátadásra:
\[
\Delta p^{+} \approx \frac{\hbar \omega_{\mathrm{L}}^{\prime}}{c}, \quad \Delta \varepsilon^{+} \approx \frac{\hbar \omega_{\mathrm{L}}^{\prime} v}{c} .
\]
2.7.1. A feladat közlése szerint a laboratóriumban nyugalomban levő atomok
\[
P_{\mathrm{g}}\left(\omega_{\mathrm{L}}\right)=\frac{N_{\mathrm{g}}}{N}=\frac{\Omega_{\mathrm{R}}^{2}}{\left(\omega_{0}-\omega_{\mathrm{L}}\right)^{2}+\frac{\Gamma^{2}}{4}+2 \Omega_{\mathrm{R}}^{2}}
\]
valószínúséggel találhatók gerjesztett állapotban az $\omega_{\mathrm{L}}$ frekvenciájú fotonokkal való kölcsönhatás eredményeként. Látható, hogy ez a valószínúség $\omega_{\mathrm{L}}=\omega_{0}$ esetén maximális, nem haladja meg az $\frac{1}{2}$ értéket, és $\left|\omega_{\mathrm{L}}-\omega_{0}\right| \gg \Gamma, \Omega_{\mathrm{R}}$ esetén gyorsan csökken.

Ez az összefüggés a nyugalomban levő atomokra vonatkozik, tehát csak úgy használhatjuk, ha áttérünk az atomokkal együtt $v$ sebességgel mozgó vonatkoztatási rendszerbe. Ekkor azonban a Doppler-eltolódás miatt a $-x$ irányban haladó fotonok frekvenciáját $\omega^{-}=\omega_{\mathrm{L}}\left(1+\frac{v}{c}\right)$-nek, míg a $+x$ irányban haladókét $\omega^{+}=\omega_{\mathrm{L}}\left(1-\frac{v}{c}\right)$-nek észleljük. Mindkét fotonnyaláb egymástól függetlenül gerjeszti az atomok $N_{\mathrm{g}}=N P_{\mathrm{g}}$ részét, így időegységenként $\Gamma N_{\mathrm{g}}$ elnyelési-kibocsátási folyamat megy végbe a balra, illetve jobbra haladó fotonokkal. A (09-8) és (09-9) eredményeket felhasználva a keresett erő:
\[
\begin{aligned}
F & =\Gamma N\left(P_{\mathrm{g}}\left(\omega^{-}\right) \Delta p^{-}+P_{\mathrm{g}}\left(\omega^{+}\right) \Delta p^{+}\right)= \\
& =\frac{\Omega_{\mathrm{R}}^{2} N \Gamma \hbar \frac{\omega_{\mathrm{L}}}{c}}{\left(\omega_{0}-\omega_{\mathrm{L}}\left(1-\frac{v}{c}\right)\right)^{2}+\frac{\Gamma^{2}}{4}+2 \Omega_{\mathrm{R}}^{2}}-\frac{\Omega_{\mathrm{R}}^{2} N \Gamma \hbar \frac{\omega_{\mathrm{L}}}{c}}{\left(\omega_{0}-\omega_{\mathrm{L}}\left(1+\frac{v}{c}\right)\right)^{2}+\frac{\Gamma^{2}}{4}+2 \Omega_{\mathrm{R}}^{2}}
\end{aligned}
\]
2.8.1.-2.8.5. Használjuk a következó jelöléseket:
\[
A=\Omega_{\mathrm{R}}^{2} N \Gamma \hbar \frac{\omega_{\mathrm{L}}}{c}, \quad B=\frac{\Gamma^{2}}{4}+2 \Omega_{\mathrm{R}}^{2}+\left(\omega_{0}-\omega_{\mathrm{L}}\right)^{2} \quad C=\frac{2 \omega_{\mathrm{L}}\left(\omega_{0}-\omega_{\mathrm{L}}\right)}{c} .
\]
Ezekkel az erőre kapott formula kis sebességekre
\[
F=\frac{A}{B+C \cdot v}-\frac{A}{B-C \cdot v} \approx \frac{A}{B}\left(1-\frac{C}{B} v-\left(1+\frac{C}{B} v\right)\right)=-\frac{2 A C}{B^{2}} v
\]
alakú. A jelöléseket visszaírva azt kapjuk, hogy
\[
F \approx-\frac{4 \Omega_{R}^{2} N \Gamma \hbar\left(\frac{\omega_{L}}{c}\right)^{2}}{\left(\left(\omega_{0}-\omega_{L}\right)^{2}+\frac{\Gamma^{2}}{4}+2 \Omega_{R}^{2}\right)^{2}}\left(\omega_{0}-\omega_{L}\right) v .
\]
Látható, hogy az erő pozitív (gyorsító), ha $\omega_{\mathrm{L}}>\omega_{0}$, zérus, ha $\omega_{\mathrm{L}}=\omega_{0}$, és negatív (lassító), ha $\omega_{\mathrm{L}}<\omega_{0}$. Természetesen a jelenség független az $x$ tengely irányításától, tehát ha a lézer frekvenciáját kicsit az átmenet „alá hangoljuk”, akkor mindig az atom mozgásával ellentétes irányú a fotonok által kifejtett erő.
2.9.1.-2.9.2. Ha az atomokra sebességükkel arányos fékezőerő hat, akkor mozgásegyenletük
\[
F=-\beta v=m \dot{v},
\]
ahol a $\beta>0$ konstans a (09-10) egyenletből kiolvasható. Figyelembevéve a $v(0)=$ $=v_{0}$ kezdeti feltételt, az atomok sebessége a
\[
v(\tau)=v_{0} e^{-\frac{\beta}{m} \tau}
\]
függvény szerint csökken. Az ekvipartíció-tétel értelmében $T \sim v^{2}$, tehát a hőmérséklet $T(\tau)=T_{0} e^{-\frac{2 \beta}{m} \tau}$ időfüggést mutat.
