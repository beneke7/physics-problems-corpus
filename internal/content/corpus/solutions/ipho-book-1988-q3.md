---
id: ipho-book-1988-q3
problem: ipho-book-1988-q3
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

3.1. Alapállapotban az elektron gömbszimmetrikusan helyezkedik el az atommag körül, így
\[
\Delta x^{2}=\Delta y^{2}=\Delta z^{2}=\frac{1}{3} r_{0}^{2}
\]
hasonlóan
\[
\Delta p_{x}^{2}=\Delta p_{y}^{2}=\Delta p_{z}^{2}=\frac{1}{3} p_{0}^{2} .
\]
A Heisenberg-féle határozatlansági összefüggés szerint
\[
\Delta p_{x} \cdot \Delta x \geqq \frac{\hbar}{2},
\]
ahonnan
\[
p_{0}^{2} \cdot r_{0}^{2} \geqq \frac{9 \hbar^{2}}{4}
\]
3.2. Az elektronbefogás-fotonkibocsátási folyamatban érvényes az energia- és az impulzusmegmaradás törvénye:
\[
\begin{gathered}
E_{\text {mozg. }}(\text { elektron })+E_{\text {mozg. }}\left(A^{(Z-1)+}\right)+E_{\text {kötési }}\left(A^{(Z-1)+}\right)= \\
E_{\text {mozg. }}\left(A^{(Z-2)+}\right)+E_{\text {kötési }}\left(A^{(Z-2)+}\right)+E(\text { foton }),
\end{gathered}
\]
illetve
\[
\boldsymbol{p}(\text { elektron })+\boldsymbol{p}\left(A^{(Z-1)+}\right)=\boldsymbol{p}\left(A^{(Z-2)+}\right)+\boldsymbol{p}(\text { foton }) .
\]
Mindkét egyenletet kicsit részletesebben felírva
\[
\frac{1}{2} m_{\mathrm{e}} v_{\mathrm{e}}^{2}+\frac{1}{2}\left(M+m_{\mathrm{e}}\right) v^{2}+E_{\text {kötési }}\left(A^{(Z-1)+}\right)=\frac{1}{2}\left(M+2 m_{\mathrm{e}}\right) u^{2}+E_{\text {kötési }}\left(A^{(Z-2)+}\right)+h f,
\]
valamint
\[
m_{\mathrm{e}} \boldsymbol{v}_{\mathrm{e}}+\left(M+m_{\mathrm{e}}\right) \boldsymbol{v}=\left(M+2 m_{\mathrm{e}}\right) \boldsymbol{u}+\frac{h f}{c} \cdot \boldsymbol{n},
\]
ahol $M$ az ion atommagjának tömegét, $m_{\mathrm{e}}$ az elektron tömegét, $\boldsymbol{v}_{\mathrm{e}}$ az elektron, $\boldsymbol{v}$ és $\boldsymbol{u}$ az ion kezdeti, illetve az elektronbefogás utáni sebességvektorát, $f$ a foton frekvenciáját, $\boldsymbol{n}$ pedig a foton terjedési irányába mutató egységvektort jelöli.
3.3. Az ion $E_{\text {kötési }}\left(A^{(Z-1)+}\right)$ energiáját az
\[
E=\left\langle\frac{p^{2}}{2 m_{\mathrm{e}}}\right\rangle-\frac{1}{4 \pi \varepsilon_{0}} Z e^{2}\left\langle\frac{1}{r}\right\rangle=\left\langle\frac{p^{2}}{2 m_{\mathrm{e}}}\right\rangle-Z q^{2}\left\langle\frac{1}{r}\right\rangle
\]
kifejezés adja meg, ahol a 〈〉 jel az átlagértékre utal. A javasolt közelítést alkalmazva
\[
E=\frac{\hbar^{2}}{2 m_{\mathrm{e}}} \cdot \frac{1}{r_{0}^{2}}-Z q^{2} \cdot \frac{1}{r_{0}} .
\]
Az alapállapot energiáját a fenti kifejezés minimuma adja meg; ezt vagy deriválással, vagy pedig teljes négyzetté alakítással számíthatjuk ki. Az eredmény:
\[
r_{0}=\frac{\hbar^{2}}{m_{\mathrm{e}} q^{2} Z}=\frac{r_{\mathrm{B}}}{Z},
\]
a megfelelő energia pedig
\[
E_{\text {kötési }}\left(A^{(Z-1)+}\right)=Z^{2}\left(\frac{\hbar^{2}}{2 m_{\mathrm{e}} r_{\mathrm{B}}^{2}}-\frac{q^{2}}{r_{\mathrm{B}}}\right)=Z^{2}\left(\frac{q^{2}}{2 r_{\mathrm{B}}}-\frac{q^{2}}{r_{\mathrm{B}}}\right)=-Z^{2} E_{\mathrm{R}} .
\]
3.4. A két elektront tartalmazó rendszer energiája
\[
E=\left\langle\frac{p_{1}^{2}}{2 m_{\mathrm{e}}}\right\rangle+\left\langle\frac{p_{2}^{2}}{2 m_{\mathrm{e}}}\right\rangle-Z q^{2}\left\langle\frac{1}{r_{1}}\right\rangle-Z q^{2}\left\langle\frac{1}{r_{2}}\right\rangle+q^{2}\left\langle\frac{1}{r_{1,2}}\right\rangle .
\]
Fejezzük ki az impulzusokat a határozatlansági összefüggés segítségével az átlagos távolságokkal, alkalmazzuk a javasolt közelítést, majd keressük meg $E$ minimumát!
\[
E=\frac{\hbar^{2}}{2 m_{e} r_{1}^{2}}+\frac{\hbar^{2}}{2 m_{e} r_{2}^{2}}-\frac{Z q^{2}}{r_{1}}-\frac{Z q^{2}}{r_{2}}+\frac{q^{2}}{r_{1}+r_{2}},
\]
majd $r_{1}=r_{2}=r$ helyettesítéssel
\[
E(r)=\frac{\hbar^{2}}{m_{e} r^{2}}-\left(Z-\frac{1}{4}\right) \frac{2 q^{2}}{r} .
\]
A minimum $\mathrm{d} E / \mathrm{d} r=0$ feltételéből $r=r_{\mathrm{B}} /(Z-1 / 4)$ adódik, amivel a minimális energia:
\[
E_{\text {kötési }}\left(A^{(Z-2)+}\right)=-2 E_{R}\left(Z-\frac{1}{4}\right)^{2} .
\]
3.5. A korábbi eredmények felhasználásával az energia- és az impulzusmegmaradást kifejező egyenletek:
\[
-E_{R} Z^{2}=\frac{1}{2}\left(M+2 m_{\mathrm{e}}\right) u^{2}-2 E_{R}\left(Z-\frac{1}{4}\right)^{2}+\hbar \omega_{0},
\]
illetve
\[
0=-\left(M+2 m_{\mathrm{e}}\right) u+\frac{\hbar \omega_{0}}{c} .
\]

Ez utóbbiból kiszámíthatjuk a visszalökődött ion sebességét:
\[
u=\frac{\hbar \omega_{0}}{\left(M+2 m_{e}\right) c}
\]
amelyet az energiaképletbe helyettesítve
\[
E_{R}\left[2\left(Z-\frac{1}{4}\right)^{2}-Z^{2}\right]=\hbar \omega_{0}\left[1+\frac{\hbar \omega_{0}}{2\left(M+2 m_{e}\right) c^{2}}\right]
\]
adódik. Ez a képlet a Bohr-féle
\[
\Delta E_{\text {kötési }}=h \cdot f=\hbar \omega
\]
frekvenciafeltétel módosított alakja; a jobb oldal második tagja a visszalökődésből származó mozgási energiát veszi figyelembe. Mivel a számszerú adatok közül hiányzik az ion atommagjának $M$ tömege, a numerikus kiértékelés csak úgy folytatható, ha valamilyen becslést alkalmazunk. Nyilván $M \geq Z \cdot m_{\mathrm{p}}$, és már egyetlen proton $m_{\mathrm{p}} c^{2}$ „nyugalmi” energiája (~940 MeV) is 7 nagyságrenddel (!) nagyobb, mint a foton energiája (~170 eV), a viszszalökődési energia teljes mértékben elhanyagolható. (Megjegyezzük, hogy az egész eddigi számításunk - az alkalmazott közelítések miatt - legfeljebb 20-30\% pontosságig vehető csak komolyan.)

A feladatban szereplő frekvenciával számolva az atommag $Z$ rendszámára jó közelítéssel a
\[
Z^{2}-Z-12=0
\]
másodfokú egyenlet adódik, amelynek (pozitív) gyöke: $Z=4$. A szóban forgó $A^{(Z-2)+}$ ion tehát feltehetően a berillium, $\mathrm{Be}^{2+}$.

\title{
