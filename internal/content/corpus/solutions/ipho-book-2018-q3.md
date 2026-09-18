---
id: ipho-book-2018-q3
problem: ipho-book-2018-q3
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

3.A.1. A szimmetrikus elrendezés miatt az $(i+1)$-edik érbeli hozam az $i$. érbeli hozam fele. A nyomáskülönbségek rendre:
\[
\begin{gathered}
P_{0}-P_{1}=R_{0} Q_{0} \\
P_{1}-P_{2}=R_{1} Q_{1}=R_{1} \frac{Q_{0}}{2} \\
P_{2}-P_{3}=R_{2} Q_{2}=R_{2} \frac{Q_{1}}{2}=R_{2} \frac{Q_{0}}{2^{2}}, \\
P_{3}-P_{4}=R_{3} Q_{3}=R_{3} \frac{Q_{2}}{2}=R_{3} \frac{Q_{0}}{2^{3}}, \\
\ldots \\
P_{N-1}-P_{\text {kap. }}=R_{N-1} \frac{Q_{0}}{2^{N-1}} .
\end{gathered}
\]
Összeadva az egyenleteket:
\[
\Delta P=P_{0}-P_{\text {kap. }}=Q_{0} \sum_{i=0}^{N-1} \frac{R_{i}}{2^{i}},
\]
majd behelyettesítve, hogy $R_{i}=\frac{8 \eta}{\pi} \cdot \frac{\ell_{i}}{r_{i}^{4}}$, és felhasználva, hogy $r_{i}=r_{0} /\left(2^{1 / 3}\right)^{i}$ és $\ell_{i}=\ell_{0} /\left(2^{1 / 3}\right)^{i}$
\[
\Delta P=\frac{8 \eta \ell_{0}}{\pi r_{0}^{4}} Q_{0} \sum_{i=0}^{N-1} \underbrace{\frac{\left(2^{i / 3}\right)^{4}}{2^{i} \cdot 2^{i / 3}}}_{=1}=\frac{8 \eta \ell_{0}}{\pi r_{0}^{4}} Q_{0} N .
\]

Ezzel:
\[
Q_{i}=\frac{Q_{0}}{2^{i}}=\frac{\pi r_{0}^{4}}{2^{i+3} \eta \ell_{0} N} \Delta P .
\]
3.A.2. Az előzó részben megkaptuk, hogy
\[
Q_{0}=\frac{\pi r_{0}^{4}}{8 \eta \ell_{0} N} \Delta P,
\]
amibe a megadott értékeket beírva, $Q_{0} \approx 4,0 \cdot 10^{-10} \mathrm{~m}^{3} / \mathrm{s}=1,44 \mathrm{ml} /$ óra adódik.
3.A.3. Soros RLC-kör effektív árama
\[
I=\frac{U_{\mathrm{eff}}}{Z}=\frac{U_{\mathrm{eff}}}{\sqrt{R^{2}+\left(\omega L-\frac{1}{\omega C}\right)^{2}}},
\]
ahol $U_{\text {eff }}$ a feszültségforrás effektív feszültsége. A kondenzátoron esó feszültség effektív értéke:
\[
U_{C}=\frac{I}{\omega C}=\frac{U_{\mathrm{eff}}}{\sqrt{\omega^{2} R^{2} C^{2}+\left(\omega^{2} L C-1\right)^{2}}} .
\]
Az amplitúdó arányos az effektív értékkel ( $\sqrt{2}$-es szorzó), valamint a feszültséget a nyomásnak megfeleltetve:
\[
P_{\mathrm{ki}}=\frac{P_{\mathrm{be}}}{\sqrt{\omega^{2} R^{2} C^{2}+\left(\omega^{2} L C-1\right)^{2}}} .
\]

A $P_{\mathrm{ki}}<P_{\text {be }}$ feltétel teljesül, ha
\[
\omega^{2} R^{2} C^{2}+\left(\omega^{2} L C-1\right)^{2}>1 \rightarrow \omega^{2}\left(R^{2} C^{2}-2 L C\right)+\omega^{4} L^{2} C^{2}>0 .
\]
Kis frekvenciára $(\omega \rightarrow 0)$ ez az egyenlőtelnség akkor teljesül, ha $R^{2} C^{2}-2 L C>0$. Behelyettesítve $L, C$ és $R$ megadott alakjait:
\[
\frac{64 \ell^{2} \eta^{2}}{3 E h r^{3} \varrho}>1 .
\]
3.A.4. Átalakítva az előző rész eredményét:
\[
h<\frac{64 \ell^{2} \eta^{2}}{3 E r^{3} \varrho},
\]
és felhasználva ezt az érhálózatra:
\[
h<\frac{64 \ell_{0}^{2} \eta^{2}}{3 E r_{0}^{3} \varrho} \cdot 2^{i / 3} \approx 77 \mu \mathrm{~m} \cdot 2^{i / 3} .
\]
Becslésként használjuk az $i=0$ esetet, amivel az ér vastagsága nagyjából $80 \mu \mathrm{~m}$.
3.B.1. A normál szövet és a daganat tömege:
\[
\begin{gathered}
M_{\mathrm{N}}=\varrho_{0} V=\varrho_{0}\left(1+\frac{p}{K_{\mathrm{N}}}\right)\left(V-V_{\mathrm{T}}\right)=\text { áll., } \\
M_{\mathrm{T}}=\varrho_{\mathrm{T}} V_{\mathrm{T}}=\varrho_{0}\left(1+\frac{p}{K_{\mathrm{T}}}\right) V_{\mathrm{T}} .
\end{gathered}
\]
A nyomást kifejezve a második egyenletből
\[
p=K_{\mathrm{T}}\left(\frac{M_{\mathrm{T}}}{\varrho_{0} V_{\mathrm{T}}}-1\right),
\]
és beírva az elsőbe
\[
M_{\mathrm{N}}=\frac{M_{\mathrm{N}}}{V}\left(V-V_{\mathrm{T}}\right)\left(1-\frac{K_{\mathrm{T}}}{K_{\mathrm{N}}}+\frac{K_{\mathrm{T}}}{K_{\mathrm{N}}} \frac{M_{\mathrm{T}}}{M_{\mathrm{N}}} \frac{V}{V_{\mathrm{T}}}\right),
\]
amibe beírva a bevezetett jelöléseket:
\[
1=(1-v)\left(1-\frac{1}{\kappa}+\frac{\mu}{\kappa v}\right),
\]
amit átrendezve egy másodfokú egyenletet kapunk
\[
(1-\kappa) v^{2}-(\mu+1) v+\mu=0 .
\]
A megoldása
\[
v=\frac{\mu+1 \pm \sqrt{(\mu+1)^{2}-4 \mu(1-\kappa)}}{2(1-\kappa)} .
\]
Mivel $\mu=0$ esetén $v=0$, ezért az egyetlen helyes megoldás, ha a negatív előjelet vesszük:
\[
v=\frac{\mu+1-\sqrt{(\mu+1)^{2}-4 \mu(1-\kappa)}}{2(1-\kappa)} .
\]
3.B.2. Mivel a hómérséklet-eloszlás állandósult, egy adott felületen keresztül érkezó és távozó hómennyiség megegyezik. Egy $r<R_{\mathrm{T}}$ sugarú felületre
\[
\mathcal{P} \cdot \frac{4}{3} r^{3} \pi=-k \cdot 4 r^{2} \pi \frac{\mathrm{~d} T}{\mathrm{~d} r}
\]
(a hóvezetésből származó hőáram a hőmérséklet-gradienssel ellentétes irányú; ezért szükséges a negatív előjel). Ahonnan
\[
\mathrm{d} T=-\frac{\mathcal{P}}{3 k} r \mathrm{~d} r .
\]
A daganat középpontjában lévő $T_{0}$ hőmérséklethez képest:
\[
T(r)=T_{0}-\frac{\mathcal{P}}{6 k} r^{2} .
\]

Ha $r>R_{\mathrm{T}}$, akkor is állandósult hőmérséklet-eloszlás van
\[
\mathcal{P} \cdot \frac{4}{3} R_{\mathrm{T}}^{3} \pi=-k \cdot 4 r^{2} \pi \frac{\mathrm{~d} T}{\mathrm{~d} r}
\]
átrendezve
\[
\mathrm{d} T=-\frac{\mathcal{P} R_{\mathrm{T}}^{3}}{3 k} \frac{\mathrm{~d} r}{r^{2}} .
\]
A hőmérséklet innen:
\[
T(r)=T\left(R_{\mathrm{T}}\right)-\frac{\mathcal{P} R_{\mathrm{T}}^{3}}{3 k}\left(\frac{1}{R_{\mathrm{T}}}-\frac{1}{r}\right),
\]
ahol $T\left(R_{\mathrm{T}}\right)$ a hőmérséklet a daganat-normál szövet határán. Mivel a daganattól távol a hőmérséklet $T_{1}=37^{\circ} \mathrm{C}$, így a határon:
\[
T\left(R_{\mathrm{T}}\right)=T_{1}+\frac{\mathcal{P} R_{\mathrm{T}}^{2}}{3 k} .
\]
Ugyanekkora hőmérsékletet kell kapni ugyanitt a (18-12) kifejezés szerint is:
\[
T\left(R_{\mathrm{T}}\right)=T_{0}-\frac{\mathcal{P} R_{\mathrm{T}}^{2}}{6 k},
\]
ezért a daganat középpontjában a hőmérséklet:
\[
T_{0}=T_{1}+\frac{\mathcal{P} R_{\mathrm{T}}^{2}}{2 k}
\]
3.B.3. A legkisebb teljesítmény esetén a határfelületen már $T\left(R_{\mathrm{T}}\right)=T_{2}=$ 43 °C-nak kell lennie, azaz (18-13) alapján
\[
\mathcal{P}=\frac{3 k\left(T_{2}-T_{1}\right)}{R_{\mathrm{T}}^{2}} \approx 4,3 \frac{\mathrm{~kW}}{\mathrm{~m}^{3}} .
\]
3.B.4. Mivel $Q_{N-1}=Q_{0} / 2^{N-1}$, ezért
\[
\frac{\delta Q_{N-1}}{Q_{N_{1}}}=\frac{\delta Q_{0}}{Q_{0}},
\]
vagyis $Q_{0}$ relatív csökkenését kell meghatároznunk. A nyomáskülönbség az érhálózatban (csak az $(N-1)$-edik szint sugara változik meg) a 3.A.1. rész szerint
\[
\Delta P=\left(Q_{0}+\delta Q_{0}\right)\left(\sum_{i=0}^{N-2} \frac{8 \ell_{i} \eta}{2^{i} \pi r_{i}^{4}}+\frac{8 \ell_{N-1} \eta}{2^{N-1} \pi r_{N-1}^{4}}\right),
\]
amibe behelyettesítve, hogy $\ell_{i}=\ell_{0} / 2^{i / 3}$ és $r_{i}=r_{0} / 2^{i / 3}$, valamint $\ell_{N-1}=$ $\ell_{0} / 2^{(N-1) / 3}$ és $r_{N-1}=r_{0} / 2^{(N-1) / 3}-\delta r$ :
\[
\Delta P=\left(Q_{0}+\delta Q_{0}\right) \frac{8 \ell_{0} \eta}{\pi r_{0}^{4}}\left[N-1+\frac{1}{\left(1-2^{(N-1) / 3} \frac{\delta r}{r_{0}}\right)^{4}}\right] .
\]

Mivel $\delta r$ kicsiny, ezért
\[
\begin{aligned}
\Delta P \approx\left(Q_{0}+\delta Q_{0}\right) & \frac{8 \ell_{0} \eta}{\pi r_{0}^{4}}\left(N-1+1+4 \frac{\delta r}{r_{0} / 2^{(N-1) / 3}}\right) \approx \\
& \approx\left(Q_{0}+\delta Q_{0}\right) \frac{8 \ell_{0} \eta}{\pi r_{0}^{4}}\left(N+4 \frac{\delta r}{r_{N-1}}\right) .
\end{aligned}
\]
A nyomáskülönbség sem változik nagyon, így jó közelítéssel alkalmazhatjuk a (18-11) formulát: $\frac{8 \ell_{0} \eta}{\pi r_{0}^{4}}=\frac{\Delta P}{N Q_{0}}$. Ezután kapjuk, hogy
\[
1+\frac{\delta Q_{0}}{Q_{0}}=\frac{1}{1+\frac{4 \delta r}{N r_{N-1}}} \approx 1-\frac{4 \delta r}{N r_{N-1}} \rightarrow \frac{\delta Q_{0}}{Q_{0}}=-\frac{4 \delta r}{N r_{N-1}} .
\]
Hátravan még $\delta r$ meghatározása a feladatban megadott formulából lineáris rendig elmenve:
\[
p-P_{\text {kap. }}=\left(p_{\mathrm{c}}-P_{\text {kap. }}\right)\left[2 \frac{\delta r}{\delta r_{\mathrm{c}}}-\left(\frac{\delta r}{\delta r_{\mathrm{c}}}\right)^{2}\right] \approx 2\left(p_{\mathrm{c}}-P_{\text {kap. }}\right) \frac{\delta r}{\delta r_{\mathrm{c}}},
\]
ahonnan
\[
\delta r=\delta r_{\mathrm{c}} \frac{p-P_{\text {kap. }}}{2\left(p_{\mathrm{c}}-P_{\text {kap. }} .\right.} .
\]
A $p$ nyomást a súrúségbő̌l kaphatjuk meg:
\[
\varrho_{\mathrm{N}}=\varrho_{0}\left(1+\frac{p}{K_{\mathrm{N}}}\right)=\frac{\varrho_{0} V}{V-V_{\mathrm{T}}}=\varrho_{0} \frac{1}{1-v} \rightarrow p=\frac{v}{1-v} K_{\mathrm{N}} .
\]
Ezután már megadhatjuk a végeredményt:
\[
\frac{\delta Q_{N-1}}{Q_{N-1}}=-\frac{2}{N} \frac{\delta r_{\mathrm{c}}}{r_{N-1}} \frac{\frac{v}{1-v} K_{\mathrm{N}}-P_{\text {kap. }}}{p_{\mathrm{c}}-P_{\text {kap. }}} .
\]

\title{
