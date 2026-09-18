---
id: ipho-book-2014-q2
problem: ipho-book-2014-q2
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

2.A.1. A Van der Waals-gáz állapotegyenletében szereplő $b$ paraméter egy mólnyi részecske saját térfogatát jelenti, így ha a részecskéket $d$ átmérőjü gömböknek tekintjük, akkor
\[
b=N_{\mathrm{A}} \frac{4 \pi}{3}\left(\frac{d}{2}\right)^{3}=N_{\mathrm{A}} \frac{\pi}{6} d^{3}
\]
ahol $N_{\mathrm{A}}$ az Avogadro-szám. Csak becslésről van szó, hasonló nagyságrendú értéket kapunk, ha a részecskéket $d$ oldalú kockának vagy $d$ sugarú gömbnek tekintjük.
2.A.2. A $T_{\mathrm{k}}$ kritikus hőmérséklet fölött minden izoterma mentén a $p$ nyomás szigorúan monoton csökkenó függvénye a $V$ térfogatnak, $T<T_{\mathrm{k}}$ esetén pedig a $p(V)$ függvénynek van egy növekedó szakasza. A kritikus izotermának a $\left(V_{\mathrm{k}}, p_{\mathrm{k}}\right)$ kritikus pontban vízszintes inflexiós pontja van, tehát
\[
\left(\frac{\mathrm{d} p}{\mathrm{~d} V}\right)_{T=T_{\mathrm{k}}}=0, \quad\left(\frac{\mathrm{~d}^{2} p}{\mathrm{~d} V^{2}}\right)_{T=T_{\mathrm{k}}}=0 .
\]
A (14-1) állapotegyenlet alapján
\[
p(V)=\frac{R T_{\mathrm{k}}}{V-b}-\frac{a}{V^{2}},
\]
ahonnan deriválással a
\[
-\frac{R T_{\mathrm{k}}}{\left(V_{\mathrm{k}}-b\right)^{2}}+\frac{2 a}{V_{\mathrm{k}}^{3}}=0, \quad \frac{2 R T_{\mathrm{k}}}{\left(V_{\mathrm{k}}-b\right)^{3}}-\frac{6 a}{V_{\mathrm{k}}^{4}}=0
\]
egyenletrendszert kapjuk. Innen kifejezhetőek a kritikus állapotjelzők az $a$ és $b$ paraméterek függvényében:
\[
V_{\mathrm{k}}=3 b, \quad T_{\mathrm{k}}=\frac{8 a}{27 R b}, \quad p_{\mathrm{k}}=\frac{a}{27 b^{2}},
\]
majd megkaphatók a keresett összefüggések is:
\[
a=\frac{27 R^{2} T_{\mathrm{k}}^{2}}{64 p_{\mathrm{k}}}, \quad b=\frac{R T_{\mathrm{k}}}{8 p_{\mathrm{k}}} .
\]

Úgy is megoldhatjuk a feladatot, hogy a (14-1) állapotegyenletet átírjuk:
\[
p V^{3}-(p b+R T) V^{2}+a V-a b=0 .
\]
A kritikus pontban az egyenlet három megoldása egyetlen, háromszoros valós megoldás lesz, azaz az egyenlet felírható a
\[
p_{\mathrm{k}}\left(V-V_{\mathrm{k}}\right)^{3}=0
\]
alakban. $V$ megfelelő hatványainak együtthatója azonos kell legyen:
\[
\begin{gathered}
p_{\mathrm{k}} b+R T_{\mathrm{k}}=3 p_{\mathrm{k}} V_{\mathrm{k}}, \\
a=3 p_{\mathrm{k}} V_{\mathrm{k}}^{2}, \\
a b=p_{\mathrm{k}} V_{\mathrm{k}}^{3} .
\end{gathered}
\]
Ebből az egyenletrendszerből $V_{\mathrm{k}}$ kiküszöbölésével a (14-2) eredménnyel azonos kifejezéseket kapunk az $a$ és $b$ paraméterekre.
2.A.3. A (14-2) egyenletekbe a megadott $T_{\mathrm{k}}$ és $p_{\mathrm{k}}$ értékeket behelyettesítve adódik az eredmény víz esetén:
\[
a_{\text {víz }}=0,56 \frac{\mathrm{~Pa} \cdot \mathrm{~m}^{6}}{\mathrm{~mol}^{2}}, \quad b_{\text {víz }}=3,1 \cdot 10^{-5} \frac{\mathrm{~m}^{3}}{\mathrm{~mol}} .
\]
2.A.4. A 2.A.1. részfeladat eredménye alapján
\[
d_{\text {víz }}=\sqrt[3]{\frac{6 b_{\text {víz }}}{\pi N_{\mathrm{A}}}}=4,6 \cdot 10^{-10} \mathrm{~m} .
\]
2.B.1. A $b \ll V_{\mathrm{G}}$ feltevés mellett a Van der Waals-gáz (14-1) állapotegyenlete egy $V$-ben másodfokú egyenletre egyszerúsödik:
\[
\left(p+\frac{a}{V_{\mathrm{G}}^{2}}\right) V_{\mathrm{G}}=R T \quad \Longrightarrow \quad p V_{\mathrm{G}}^{2}-R T V_{\mathrm{G}}+a=0 .
\]
Az adott $T=100^{\circ} \mathrm{C}$ hőmérsékleten és $p_{0}=1,0 \cdot 10^{5} \mathrm{~Pa}$ nyomáson a másodfokú egyenlet nagyobbik gyöke adja meg a gőz móltérfogatát, tehát
\[
V_{\mathrm{G}}=\frac{R T}{2 p_{0}}\left(1+\sqrt{1-\frac{4 a p_{0}}{R^{2} T^{2}}}\right) \approx \frac{R T}{p_{0}}-\frac{a}{R T}=3,1 \cdot 10^{-2} \frac{\mathrm{~m}^{3}}{\mathrm{~mol}} .
\]

A numerikus érték kiszámításához felhasználtuk a (14-3) eredményt (a későbbiekben is ezt tesszük), továbbá azt a közelítést, hogy $(1+\varepsilon)^{\alpha} \approx 1+\alpha \varepsilon$, ha $|\varepsilon| \ll 1$. Esetünkben $|\varepsilon|=\frac{4 a p_{0}}{R^{2} T^{2}}=0,023 \ll 1$, így a közelítés hibája (mely $\varepsilon^{2}$-tel arányos) kisebb, mint $1 \%$. Látható, hogy $\frac{V_{\mathrm{G}}}{b}=10^{3}$, így valóban teljesül a kiindulásnál használt $b \ll V_{\mathrm{G}}$ feltétel.

Megjegyzés: A fenti másodfokú egyenlet kisebbik gyöke közelítőleg $a / R T$. Ha $a \rightarrow 0$, akkor az ideális gáz állapotegyenletét kell visszakapni, ami a csak a nagyobbik gyök esetén teljesül.
2.B.2. Az ideális gáz állapotegyenletéből a $V_{\mathrm{G} 0}=\frac{R T}{p_{0}}$ kifejezés adódik a móltérfogatra, így a relatív eltérés
\[
\frac{\Delta V_{\mathrm{G}}}{V_{\mathrm{G} 0}}=\frac{V_{\mathrm{G} 0}-V_{\mathrm{G}}}{V_{\mathrm{G} 0}}=\frac{1}{2}\left(1-\sqrt{1-\frac{4 a p_{0}}{R^{2} T^{2}}}\right) \approx \frac{a p_{0}}{R^{2} T^{2}}=0,58 \% .
\]
2.B.3. A belsó stabilitást leíró $\left(\frac{\mathrm{d} p}{\mathrm{~d} V}\right)_{T=\text { áll. }}<0$ feltétel egyszerúen megérthető; ha ez nem teljesülne, akkor térfogatcsökkenéshez nyomáscsökkenés tartozna, ami újabb térfogatcsökkenést eredményezne, tehát a gáz „összeesne”, megindulna a kondenzáció.

A gőzállapotban teljesülő $b \ll V$ feltétel mellett a Van der Waals gáz nyomása $p(V)=\frac{R T}{V}-\frac{a}{V^{2}}$, így a maximális túlhütéshez tartozó $V_{\mathrm{G}, \text { min }}$ minimális móltérfogat a
\[
\left(\frac{\mathrm{d} P\left(V_{\mathrm{G}, \min }\right)}{\mathrm{d} V}\right)_{T}=\frac{-R T}{V_{\mathrm{G}, \min }^{2}}+\frac{2 a}{V_{\mathrm{G}, \min }^{3}}=0 \quad \text { egyenletből } \quad V_{\mathrm{G}, \min }=\frac{2 a}{R T} .
\]

A (14-5) eredmény felhasználásával a keresett hányados:
\[
\frac{V_{\mathrm{G}}}{V_{\mathrm{G}, \min }} \approx \frac{R^{2} T^{2}}{2 a p_{0}}-\frac{1}{2} \approx \frac{R^{2} T^{2}}{2 a p_{0}} \approx 86 .
\]
2.B.4. Folyadék-halmazállapotban a móltérfogat kicsi, $p \ll \frac{a}{V_{\mathrm{F}}^{2}}$, így a Van der Waals gáz (14-1) állapotegyenlete most is egy másodfokú egyenletre egyszerúsödik:
\[
\frac{a}{V_{\mathrm{F}}^{2}}\left(V_{\mathrm{F}}-b\right)=R T \quad \Longrightarrow \quad R T V_{\mathrm{F}}^{2}-a V_{\mathrm{F}}+a b=0,
\]
aminek a kisebbik gyöke adja meg a folyadék fajlagos térfogatát:
\[
V_{\mathrm{F}}=\frac{a}{2 R T}\left(1-\sqrt{1-\frac{4 R T b}{a}}\right)=4,0 \cdot 10^{-5} \frac{\mathrm{~m}^{3}}{\mathrm{~mol}} .
\]

A kapott értékkel számolva $\frac{a}{p_{0} V_{\mathrm{F}}^{2}}=3,5 \cdot 10^{3}$, tehát valóban teljesül a kiindulásnál használt $p \ll \frac{a}{V_{\mathrm{F}}^{2}}$ feltétel.

Megjegyzés: Ha $T \rightarrow 0$, akkor $V_{\mathrm{F}}=b$ kell teljesüljön. Ez csak a kisebbik gyök esetén valósul meg (lásd alább).
2.B.5. A víz súrúsége:
\[
\rho_{\mathrm{F}}=\frac{\mu}{V_{\mathrm{F}}}=\frac{1,8 \cdot 10^{-2} \frac{\mathrm{~kg}}{\mathrm{~mol}}}{4,0 \cdot 10^{-5} \frac{\mathrm{~m}^{3}}{\mathrm{~mol}}}=4,5 \cdot 10^{2} \frac{\mathrm{~kg}}{\mathrm{~m}^{3}} .
\]
Látható, hogy a kapott érték csak nagyságrendi becslés.
2.B.6. Célszerú a (14-6) kifejezést $T$-ben hatványsorba fejteni. Felhasználva, hogy $\sqrt{1-\varepsilon} \approx 1-\frac{1}{2} \varepsilon-\frac{1}{8} \varepsilon^{2}$, ha $|\varepsilon|<1, \varepsilon=\frac{4 R T b}{a}=0,69$ helyettesítéssel azt kapjuk, hogy
\[
V_{\mathrm{F}} \approx \frac{a}{2 R T}\left(\frac{2 R T b}{a}+\frac{2 R^{2} T^{2} b^{2}}{a^{2}}\right)=b+\frac{R T b^{2}}{a} \approx b .
\]

A folyadék móltérfogata első közelítésben a $b$ paraméterrel egyezik meg, ami a részecskék saját térfogata. $\mathrm{Az} \varepsilon=0,69$ érték egynél kisebb, de nem jóval kisebb, ezért a közelítés nem igazán pontos; a (14-6) egyenletben kapott érték mintegy 25\%-kal eltér a (14-3) egyenletben szereplő $b$ értéktől.

A térfogati hőtágulási együttható számolásához a $V_{\mathrm{F}}$ másodrendú közelítését kell használni:
\[
\alpha=\frac{1}{V_{\mathrm{F}}} \frac{\Delta V_{\mathrm{F}}}{\Delta T}=\frac{R b^{2}}{V_{\mathrm{F}} a} \approx \frac{R b}{a}=4,6 \cdot 10^{-4} \frac{1}{\mathrm{~K}} .
\]
2.B.7. A forráshó meghatározásához szükségünk van a Van der Waals gáz másik, úgynevezett kalorikus állapotegyenletére, mely az $U$ moláris belső energiát adja meg a hőmérséklet és móltérfogat függvényében:
\[
U=C_{V} T-\frac{a}{V},
\]
ahol a $C_{V}$ konstans a gáz állandó térfogaton mért mólhője. A víz (tömegegységre vonatkoztatott) forráshője a termodinamika I. főtételét felhasználva
\[
L=\frac{Q}{\mu}=\frac{\Delta U-W}{\mu}
\]
alakban írható, ahol $Q$, illetve $W$ egy mól víz elforralásához szükséges hő, illetve munka. Minthogy a forralás során a nyomás és a hőmérséklet állandó,
\[
\Delta U=U_{\mathrm{G}}-U_{\mathrm{F}}=-\frac{a}{V_{\mathrm{G}}}+\frac{a}{V_{\mathrm{F}}}, \quad-W=\int_{V_{\mathrm{F}}}^{V_{\mathrm{G}}} p_{0} \mathrm{~d} V=p_{0}\left(V_{\mathrm{G}}-V_{\mathrm{F}}\right) .
\]

Ezeket beírva a forráshő kifejezésébe, majd figyelembe véve, hogy $V_{\mathrm{F}} \ll V_{\mathrm{G}}$ :
\[
L=\frac{a}{\mu}\left(\frac{1}{V_{\mathrm{F}}}-\frac{1}{V_{\mathrm{G}}}\right)+\frac{p_{0}}{\mu}\left(V_{\mathrm{G}}-V_{\mathrm{F}}\right) \approx \underbrace{\frac{a}{\mu V_{\mathrm{F}}}}_{7,8 \cdot 10^{5} \frac{\mathrm{~J}}{\mathrm{~kg}}}+\underbrace{\frac{p_{0} V_{\mathrm{G}}}{\mu}}_{1,7 \cdot 10^{5} \frac{\mathrm{~J}}{\mathrm{~kg}}}=9,5 \cdot 10^{5} \frac{\mathrm{~J}}{\mathrm{~kg}} .
\]
Az eredménynek most is csak a nagyságrendje helyes; a víz forráshője $2,26 \cdot 10^{6} \frac{\mathrm{~J}}{\mathrm{~kg}}$.
A fenti gondolatmenethez szükséges a (14-8) egyenlet ismerete, ami nem volt megadva a feladatban, azonban (mélyebb termodinamikai összefüggések felhasználásával) következik a (14-1) állapotegyenletből, és abból a feltételből, hogy ritka gáz határesetben a Van der Waals gáz viselkedése az ideális gázéhoz közelít.

Igen elnagyoltan a következóképpen is eljuthatunk a forráshő becsléséhez. A forraláshoz szükséges hő egyrészt a tágulási munkát fedezi, másrészt az egymással vonzó kölcsönhatásban lévő részecskék eltávolításához szükséges. A tágulási munka éppen a (14-9) egyenlet második tagja. A vonzó kölcsönhatást a (14-1) állapotegyenletben a nyomást korrigáló $\frac{a}{V^{2}}$ tag írja le, tehát ezen nyomás ellen végzett térfogati munka adja meg a részecskék kölcsönhatási energiájának megváltozását. Ez a (14-9) egyenlet első́ tagját adja, hiszen
\[
\int_{V_{\mathrm{F}}}^{V_{\mathrm{G}}} \frac{a}{V^{2}} \mathrm{~d} V=\left[\frac{-a}{V}\right]_{V_{\mathrm{F}}}^{V_{\mathrm{G}}}=\frac{a}{V_{\mathrm{F}}}-\frac{a}{V_{\mathrm{G}}} .
\]
A számértékekből látszik, hogy ez a tag adja a forráshő nagyobb részét. A tágulási munkát elhanyagolva, a $V_{\mathrm{F}} \approx b$ közelítéssel
\[
L \approx \frac{a}{\mu b} \approx 10^{6} \frac{\mathrm{~J}}{\mathrm{~kg}}
\]
adódik.
2.B.8. Képzeljük el, hogy $m$ tömegú vizet elforralunk, illetve „kilapítunk” egyetlen molekula, azaz $d_{\text {víz }}$ vastagságú réteggé. Első esetben $m L$ hốt kell közölnünk. Második esetben a folyadék felszíne $A$ lesz (a téglatestnek elképzelt vízréteg tetejének és aljának a felszíne), tehát
\[
\sigma A=\sigma \frac{2 V_{\mathrm{F}}}{d_{\text {víz }}}=\frac{2 m \sigma}{\rho_{\mathrm{F}} d_{\text {víz }}}
\]
munkát kell végeznünk (a kezdeti felületet elhanyagolható). A két energia jó közelítéssel megegyezik, hiszen mindkettó lényegében a részecskék közötti kötések felszakításához szükséges. A 14-10, 14-7 egyenletekkel és a $V_{\mathrm{F}} \approx b$ közelítéssel:
\[
L m \approx \frac{2 m \sigma}{\rho_{\mathrm{F}} d_{\text {víz }}} \quad \Longrightarrow \quad \sigma \approx \frac{1}{2} L \rho_{\mathrm{F}} d_{\text {víz }} \approx \frac{a d_{\text {víz }}}{2 b^{2}}=0,1 \frac{\mathrm{~N}}{\mathrm{~m}} .
\]
2.C.1. A kapilláriscsőben lévő vízfelszínre írjuk föl a nyomások egyensúlyát. A víz $h$ mélységben mérhető $\rho_{\mathrm{F}} g h$ hidrosztatikai nyomásával tart egyensúlyt a csőben lévő gőz $\rho_{\mathrm{G}} g h$ hidrosztatikai nyomása és a felületi feszültségbő̌l származó $\frac{2 \sigma}{r}$ nyomás, tehát
\[
p_{0}+\rho_{\mathrm{F}} g h=p_{0}+\rho_{\mathrm{G}} g h+\frac{2 \sigma}{r} \Longrightarrow h=\frac{2 \sigma}{\left(\rho_{\mathrm{F}}-\rho_{\mathrm{G}}\right) g r} \approx \frac{2 \sigma}{\rho_{\mathrm{F}} g r} .
\]

A nyomásnövekedés a $h$ magasságú gőzoszlop hidrosztatikai nyomásával egyezik meg, tehát
\[
\Delta p_{\mathrm{T}}=\rho_{\mathrm{G}} g h=\frac{2 \sigma}{r} \frac{\rho_{\mathrm{G}}}{\rho_{\mathrm{F}}-\rho_{\mathrm{G}}} \approx \frac{2 \sigma \rho_{\mathrm{G}}}{r \rho_{\mathrm{F}}} .
\]
2.C.2. A megadott egyenletek alapján a telített vízgőz nyomásának hőmérsékletfüggése:
\[
p_{\mathrm{FG}}(T)=\mathrm{e}^{A} \cdot \mathrm{e}^{\frac{B}{T}}=\frac{a}{b^{2}} \mathrm{e}^{-\frac{a}{b R T}-1},
\]
ahonnan differenciálással azt kapjuk, hogy $\left(p_{\mathrm{FG}}\left(T_{0}\right)=p_{0}\right)$
\[
p_{\mathrm{FG}}\left(T_{0}-\Delta T\right) \approx p_{0}-\left(\frac{\mathrm{d} p_{\mathrm{FG}}}{\mathrm{~d} T}\right)_{T_{0}} \cdot \Delta T=p_{0}\left(1-\frac{a \Delta T}{b R T_{0}^{2}}\right),
\]
tehát $\Delta T=5^{\circ} \mathrm{C}$ hőmérséklet-csökkenés esetén a telített gőz nyomása $\Delta p_{\mathrm{FG}}=$ $=p_{0} \frac{a \Delta T}{b R T_{0}^{2}}$ értékkel csökken. Ugyanakkor a kicsiny $r$ görbületi sugár a (14-11) egyenlet értelmében megnöveli a telített gőz nyomását. A két egyenlet összevetéséből adódik a cseppképződéshez szükséges minimális görbületi sugár:
\[
\Delta p_{\mathrm{T}}=\Delta p_{\mathrm{FG}} \quad \Longrightarrow \quad \frac{2 \sigma \rho_{\mathrm{G}}}{r \rho_{\mathrm{F}}}=p_{0} \frac{a \Delta T}{b R T_{0}^{2}} \quad \Longrightarrow \quad r=\frac{2 \sigma \rho_{\mathrm{G}} b R T_{0}^{2}}{a p_{0} \rho_{\mathrm{F}} \Delta T} .
\]
Ha a telített gőzt ideális gáznak tekintjük, akkor súrúsége $\rho_{\mathrm{G}}=\frac{\mu p_{0}}{R T_{0}}$, a folyadék víz súrúsége pedig korábbi a (14-7) eredmény alapján $\rho_{\mathrm{F}} \approx \frac{\mu}{b}$. Ezeket felhasználva a következő eredményt kapjuk:
\[
r=\frac{2 \sigma b^{2}}{a} \frac{T_{0}}{\Delta T}=1,5 \cdot 10^{-8} \mathrm{~m} .
\]
