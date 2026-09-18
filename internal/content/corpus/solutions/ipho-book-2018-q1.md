---
id: ipho-book-2018-q1
problem: ipho-book-2018-q1
source: ipho
language: hu
solution_language: hu
solution_type: official
source_pdf: "kkk/Korábbi kunfalvi anyagok 2/IPhO_konyv.pdf"
figure_files: []
provenance_note: "kkk/Korábbi kunfalvi anyagok 2/IPhO_konyv.pdf; Mathpix OCR"
verification_status: pending
---

## Megoldás 1

1.A.1. A két sugárvektor egy egyenes mentén helyezkedik el; $\boldsymbol{r}_{2}=-M_{1} / M_{2} \boldsymbol{r}_{1}$. Az $M_{1}$ tömegú csillagra:
\[
M_{1} \frac{\mathrm{~d} \boldsymbol{r}_{1}}{\mathrm{~d} t}=G \frac{M_{1} M_{2}}{\left|\boldsymbol{r}_{2}-\boldsymbol{r}_{1}\right|^{2}} \frac{\boldsymbol{r}_{2}-\boldsymbol{r}_{1}}{\left|\boldsymbol{r}_{2}-\boldsymbol{r}_{1}\right|},
\]
amiben kiküszöbölve $\boldsymbol{r}_{2}$-t:
\[
\frac{\mathrm{d} \boldsymbol{r}_{1}}{\mathrm{~d} t}=-\frac{G M_{2}^{3}}{\left(M_{1}+M_{2}\right)^{2} r_{1}^{3}} \boldsymbol{r}_{1} .
\]
Összevetve a (18-2) egyenlettel, leolvasható a válasz:
\[
n=3, \quad \text { és } \quad \alpha=\frac{G M_{2}^{3}}{\left(M_{1}+M_{2}\right)^{2}} .
\]
1.A.2. A rendszer teljes energiája a két test mozgási energiájának és a gravitációs potenciális energiának az összege. Körmozgás esetén az egyes testek sebessége $v_{1}=\Omega r_{1}, v_{2}=\Omega r_{2}$. Ezzel a teljes energia:
\[
E=\frac{1}{2}\left(M_{1} r_{1}^{2}+M_{2} r_{2}^{2}\right) \Omega^{2}-\frac{G M_{1} M_{2}}{L} .
\]
Mivel (18-1) szerint $\left(M_{1} r_{1}-M_{2} r_{2}\right)^{2}=0$, ezért
\[
M_{1}^{2} r_{1}^{2}+M_{2}^{2} r_{2}^{2}=2 M_{1} M_{2} r_{1} r_{2}=M_{1} M_{2}\left[\left(r_{1}+r_{2}\right)^{2}-r_{1}^{2}-r_{2}^{2}\right] .
\]
Átrendezve:
\[
M_{1}\left(M_{1}+M_{2}\right) r_{1}^{2}+M_{2}\left(M_{1}+M_{2}\right) r_{2}^{2}=M_{1} M_{2} L^{2}
\]
ahonnan
\[
M_{1} r_{1}^{2}+M_{2} r_{2}^{2}=\mu L^{2}
\]
Ezt felhasználva a teljes energia kifejezésében:
\[
E=\frac{1}{2} \mu L^{2} \Omega^{2}-\frac{G M \mu}{L},
\]
vagyis
\[
A(\mu, \Omega, L)=\frac{1}{2} \mu L^{2} \Omega^{2}
\]
1.A.3. Az előzó részben kapott eredményre úgyis tekinthetünk, mint egy olyan $\mu$ tömegú test teljes energiájára, ami az $M$ tömegú test körül $L$ sugarú körpályán kering. A mozgásegyenlet:
\[
\mu \Omega^{2} L=\frac{G \mu M}{L^{2}} \rightarrow \Omega^{2} L^{2}=\frac{G M}{L} .
\]
Ezt behelyettesítve a teljes energia (18-6) kifejezésébe:
\[
E=-\frac{1}{2} \frac{G M \mu}{L},
\]
így a keresett szám $\beta=-1 / 2$.
1.B.1. Körmozgás esetén az egyes testek helyét megadhatjuk az
\[
\left(x_{1}, y_{1}\right)=\left(r_{1} \cos (\Omega t), r_{1} \sin (\Omega t)\right), \quad\left(x_{2}, y_{2}\right)=\left(-r_{2} \cos (\Omega t),-r_{2} \sin (\Omega t)\right)
\]
alakban. Ennek segítségével a $Q_{i j}$ mátrix
\[
\begin{aligned}
Q_{i j} & =\left(M_{1} r_{1}^{2}+M_{2} r_{2}^{2}\right) \times \\
& \times\left(\begin{array}{ccc}
\frac{1}{3}\left(2 \cos ^{2}(\Omega t)-\sin ^{2}(\Omega t)\right) & \sin (\Omega t) \cos (\Omega t) & 0 \\
\sin (\Omega t) \cos (\Omega t) & \frac{1}{3}\left(2 \sin ^{2}(\Omega t)-\cos ^{2}(\Omega t)\right) & 0 \\
0 & 0 & -\frac{1}{3}
\end{array}\right),
\end{aligned}
\]
átalakítva trigonometriai azonosságokkal
\[
Q_{i j}=\frac{\mu L^{2}}{2}\left(\begin{array}{ccc}
\frac{1}{3}+\cos (2 \Omega t) & \sin (2 \Omega t) & 0 \\
\sin (2 \Omega t) & \frac{1}{3}-\cos (2 \Omega t) & 0 \\
0 & 0 & -\frac{2}{3}
\end{array}\right) .
\]
Összevetve a feladatban megadott alakokkal:
\[
\begin{gathered}
a_{1}=a_{2}=\frac{1}{3}, \quad a_{3}=-\frac{2}{3}, \quad b_{1}=1, \quad b_{2}=-1, \quad b_{3}=0, \quad k=2 \Omega, \\
c_{12}=c_{21}=1, c_{i j} \text { a többi esetben nulla. }
\end{gathered}
\]
1.B.2. Deriváljuk a mátrixot (elemenként):
\[
\frac{\mathrm{d}^{3} Q_{i j}}{\mathrm{~d} t^{3}}=4 \Omega^{3} \mu L^{2}\left(\begin{array}{ccc}
\sin (2 \Omega t) & -\cos (2 \Omega t) & 0 \\
-\cos (2 \Omega t) & -\sin (2 \Omega t) & 0 \\
0 & 0 & 0
\end{array}\right) .
\]

Ezt a mátrixot önmagával megszorozva a
\[
16 \Omega^{6} \mu^{2} L^{4}\left(\begin{array}{lll}
1 & 0 & 0 \\
0 & 1 & 0 \\
0 & 0 & 0
\end{array}\right)
\]
mátrixot kapjuk, amely elemeinek összege $32 \Omega^{6} \mu^{2} L^{4}$. Így a gravitációs hullámok formájában kibocsátott teljesítmény:
\[
\mathcal{P}=\frac{G}{5 c^{5}} \cdot 32 \Omega^{6} \mu^{2} L^{4},
\]
ahonnan leolvasható, hogy $\xi=32 / 5=6,4$.
1.B.3. Feltesszük, hogy az energiacsökkenés során a test egymást követő Kepler-pályákra tér, miközben a pályasugár csökken. Ez az energiaveszteség megegyezik a keletkező gravitációs hullámok által elvitt energiával.

Deriváljuk idő szerint a (18-7) egyenletet
\[
\frac{\mathrm{d} E}{\mathrm{~d} t}=\frac{G M \mu}{L^{2}} \frac{\mathrm{~d} L}{\mathrm{~d} t} .
\]
Mivel $\mathrm{d} L / \mathrm{d} t<0$, ezért
\[
-\frac{G M \mu}{2 L^{2}} \frac{\mathrm{~d} L}{\mathrm{~d} t}=\frac{32}{5} \frac{G}{c^{5}} \mu^{2} L^{4} \Omega^{6} .
\]
Azonban $L$ változásával $\Omega$ is változik, hiszen a perdület megmarad. Az 1.A.3. részben láttuk, hogy $\Omega^{2} L^{3}=G M$. Ezt az egyenletet deriválva az idő szerint:
\[
2 \Omega \frac{\mathrm{~d} \Omega}{\mathrm{~d} t} L^{3}+\Omega^{2} \cdot 3 L^{2} \frac{\mathrm{~d} L}{\mathrm{~d} t}=0 \rightarrow \frac{\mathrm{~d} L}{\mathrm{~d} t}=-\frac{2}{3} \frac{L}{\Omega} \frac{\mathrm{~d} \Omega}{\mathrm{~d} t} .
\]
Ezt felhasználva a (18-8) egyenletben és $L$-et $\Omega$-val kifejezve a perdületmegmaradásból:
\[
\frac{\mathrm{d} \Omega}{\mathrm{~d} t}=\frac{96}{5} \frac{\mu L^{5} \Omega^{7}}{M c^{5}}=\frac{96}{5} \frac{\mu \Omega^{11 / 3} G^{5 / 3}}{M^{2 / 3} c^{5}} .
\]
Harmadik hatványra emelve:
\[
\left(\frac{\mathrm{d} \Omega}{\mathrm{~d} t}\right)^{3}=\left(\frac{96}{5}\right)^{3} \frac{\Omega^{11}}{c^{15}} G^{5} \mu^{3} M^{2} .
\]
A (18-4) egyenlettel összehasonlítva:
\[
M_{\mathrm{c}}=\left(\mu^{3} M^{2}\right)^{1 / 5} .
\]
Másrészt láthatjuk, hogy a korábban megkapott $\xi=32 / 5$ adódik.
1.B.4. A feladat szövege szerint
\[
f_{\mathrm{GW}}=2 \cdot \frac{\Omega}{2 \pi} .
\]

A feladatban megadott formulát kaptuk az 1.B.3. részben:
\[
\frac{\mathrm{d} \Omega}{\mathrm{~d} t}=\chi \Omega^{11 / 3}, \quad \text { ahol } \quad \chi=\frac{96}{5} \frac{\left(G M_{\mathrm{c}}\right)^{5 / 3}}{c^{5}} .
\]
Az útmutatás szerint:
\[
\Omega(t)^{-8 / 3}=\frac{8}{3} \chi\left(t_{0}-t\right),
\]
ezért
\[
f_{\mathrm{GW}}^{-8 / 3}=8 \pi^{8 / 3} \xi\left(\frac{G M_{\mathrm{c}}}{c^{3}}\right)^{5 / 3}\left(t_{0}-t\right) .
\]
Összevetve a feladatban megadott egyenlettel: $p=1$.
1.B.5. Az ábra alapján jó közelítéssel a két időintervallumban egy-egy fél periódust látunk. Azaz a $t_{A B}=0,0045 \mathrm{~s}$-ra $f_{\mathrm{GW}}\left(t_{A B}\right)=1 /(2 \cdot 0,009 \mathrm{~s}) \approx 55,6 \mathrm{~Hz}$, míg a $t_{C D}=0,037$ s-ra $f_{\mathrm{GW}}\left(t_{C D}\right)=1 /(2 \cdot 0,006 \mathrm{~s}) \approx 83,3 \mathrm{~Hz}$.

A (18-10) egyenletbe a két idő- és frekvenciaértéket behelyettesítve $M_{\mathrm{c}}$-t és $t_{0}$-t meg tudjuk határozni. Behelyettesítés után elosztva a két egyenletet egymással
\[
t_{0}=\frac{\left(\frac{f_{\mathrm{GW}}\left(t_{A B}\right)}{f_{\mathrm{GW}}\left(t_{C D}\right)}\right)^{-8 / 3} t_{C D}-t_{A B}}{\left(\frac{f_{\mathrm{GW}}\left(t_{A B}\right)}{f_{\mathrm{GW}}\left(t_{C D}\right)}\right)^{-8 / 3}-1} \approx 0,054 \mathrm{~s}
\]
adódik. Ezt az eredményt visszaírva pl. az első egyenletbe:
\[
M_{\mathrm{c}}=\left(\frac{1}{8 \pi^{8 / 3} \xi} \frac{f_{\mathrm{GW}}\left(t_{A B}\right)^{-8 / 3}}{t_{0}-t_{A B}}\right)^{3 / 5} \frac{c^{3}}{G} \approx 6,1 \cdot 10^{31} \mathrm{~kg} \approx 30 M_{\odot} .
\]
Felhasználva a (18-9) összefüggést és feltételezve, hogy a két fekete lyuk azonos tömegú, ezért $\mu=M / 4$, a teljes tömeg:
\[
M=4^{3 / 5} M_{\mathrm{c}} \approx 69 M_{\odot} .
\]
Annak ellenére, hogy az alkalmazott modell nem érvényes az ütközés közelében és a két tömeg nem teljesen azonos, ez az eredmény nagyon közel van az általános relativitáselméletből származtatott, legjöbb közelítést felhasználó modell eredményéhez.
1.B.6. A 405. ábra $C$ és $D$ pontpárja a két fekete lyuk egyesülése előtti ciklusnak felel meg. A $t_{C D}$ időpontban a keringés szögsebessége
\[
\Omega\left(t_{C D}\right)=\pi \cdot f_{\mathrm{GW}}\left(t_{C D}\right) \approx 260 \frac{1}{\mathrm{~s}} .
\]
A perdületmegmaradásból:
\[
L=\left(\frac{G M}{\Omega\left(t_{\overline{\mathrm{CD}}}\right)^{2}}\right)^{1 / 3} \approx 510 \mathrm{~km} .
\]

Ezért az objektumok sugara legfeljebb $R_{\text {max }} \approx 250 \mathrm{~km}$, azaz
\[
\frac{R_{\odot}}{R_{\max }} \approx 3000,
\]
vagyis a feket lyukak sugara a Nap sugáranál 3000-szer kisebb (tömegük pedig 30-szor nagyobb). A keringési sebességük pedig
\[
v_{\mathrm{col}}=\Omega\left(t_{C D}\right) \frac{L}{2} \approx 7 \cdot 10^{4} \frac{\mathrm{~km}}{\mathrm{~s}} \approx 0,2 c,
\]
vagyis a fénysebesség 20\%-ával mozognak.
