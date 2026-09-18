---
id: ipho-book-2019-q3
problem: ipho-book-2019-q3
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

3.A.1. Az $u(0, t)=u(L, t)=0$ határfeltétel miatt a legnagyobb lehetséges hullámhossz a cső hosszának kétszerese (pont egy fél hullám fér el a csőben): $\lambda_{\text {max }}=2 L$.
- 3. A.2. A gázelem térfogata adott időpontban
\[
\begin{aligned}
V(x, t) & =S[x+\Delta x+u(x+\Delta x, t)-(x+u(x, t))]= \\
& =S \Delta x\left(1+\frac{u(x+\Delta x, t)-u(x, t)}{\Delta x}\right) .
\end{aligned}
\]
$\Delta x \rightarrow 0$, így
\[
V(x, t)=V_{0}\left(1+\frac{\partial u(x, t)}{\partial x}\right)=V_{0}+V_{0} a k \cos (k x) \cos (\omega t),
\]
ahonnan leolvasható, hogy $V_{1}(x)=a k V_{0} \cos (k x)$.
- 3. A.3. A gázrétegre ható eró
\[
\sum F=S[p(x+u(x, t), t)-p(x+\Delta x+u(x+\Delta x, t), t)] .
\]
Sorfejtve a nyomásokat és az elsőrendú tagokat meghagyva
\[
\begin{aligned}
\sum F & =S\left[p(x, t)+\frac{\partial p(x, t)}{\partial x} u(x)-p(x+\Delta x, t)-\frac{\partial p(x+\Delta x, t)}{\partial x} u(x+\Delta x, t)\right] \approx \\
& \approx S \Delta x\left[-\frac{p(x+\Delta x, t)-p(x, t)}{\Delta x}\right]=\varrho_{0} S \Delta x \ddot{u}(x, t),
\end{aligned}
\]

tehát a mozgásegyenlet
\[
-\frac{\partial p(x, t)}{\partial x}=\varrho_{0} \ddot{u}(x, t) .
\]
Beírva $u(x, t)$ alakját
\[
\frac{\partial p(x, t)}{\partial x}=\varrho_{0} a \omega^{2} \sin (k x) \cos (\omega t),
\]
amiből
\[
p(x, t)=p_{0}-\frac{\varrho_{0} a \omega^{2}}{k} \cos (k x) \cos (\omega t),
\]
vagyis
\[
p_{1}(x)=\frac{\varrho_{0} a \omega^{2}}{k} \cos (k x) .
\]
3.A.4. Adiabatikus folyamatra
\[
p_{0} V_{0}^{\kappa}=p(x, t) V(x, t)^{\kappa} .
\]
Behelyettesítve a $p(x, t)=p_{0}-p_{1}(x) \cos (\omega t)$ és a $V(x, t)=V_{0}+V_{1}(x) \cos (\omega t)$ kifejezéseket, majd átrendezve
\[
1=\left(1-\frac{p_{1}(x) \cos (\omega t)}{p_{0}}\right)\left(1+\frac{V_{1}(x) \cos (\omega t)}{V_{0}}\right)^{\kappa} .
\]
Mivel a termodinamikai mennyiségek megváltozása kicsiny az egyensúlyi értékhez képest, ezért
\[
1=\left(1-\frac{p_{1}(x) \cos (\omega t)}{p_{0}}\right)\left(1+\kappa \frac{V_{1}(x) \cos (\omega t)}{V_{0}}\right),
\]
amiből a zárójel felbontása és a másodrendúen kicsiny tagok elhanyagolása után a
\[
\frac{p_{1}(x)}{p_{0}}=\kappa \frac{V_{1}(x)}{V_{0}}
\]
egyenletet kapjuk. Beírva $p_{1}(x)$ és $V_{1}(x)$ fenti alakjait
\[
\omega^{2}=\frac{\kappa p_{0}}{\varrho_{0}} \cdot k^{2},
\]
és mivel esetünkben $\omega=c \cdot k$, ezért a hanghullámok terjedési sebessége
\[
v=\sqrt{\frac{\kappa p_{0}}{\varrho_{0}}} .
\]
3.A.5. Az adiabatikus folyamatra vonatkozó egyenletet a hőmérséklettel felírva
\[
T V^{\kappa-1}=\text { állandó. }
\]

Az előző részben látott eljárást erre az egyenletre használva (formálisan a $p \rightarrow T$ és a $\kappa \rightarrow(\kappa-1)$ helyettesítéssel), a relatív megváltozásra hasonló eredményt kapunk:
\[
\frac{T_{1}(x)}{T_{0}}=(\kappa-1) \frac{V_{1}(x)}{V_{0}} \rightarrow T_{1}(x)=a k(\kappa-1) T_{0} \cos (k x) .
\]
3.A.6. ${ }^{29}$ A csőben a gázrészek mozgása során hőcsere történik a a gáz-cső határfelületen keresztül. Feltesszük, hogy a cső kezdeti hőmérséklete a gáz egyensúlyi hőmérsékletével egyezik meg. Egy kis gázelem az adott $x$ helyen $u(x, t)$-vel mozdul el, melynek során hőmérséklete $T_{1}(x) \cos (\omega t)$-vel változik meg $T_{0}$-hoz képest. Ha a hőmérséklete lecsökken, akkor hő áramlik a gázba a cső felületéről, ha megnövekszik, akkor a cső irányába jön létre hőáram. Mivel a gázrészek és a hőmérséklet is oszcillálnak időben, ezért a hőáram is fluktuál. A cső fala és a gázrész közötti hóáram arányos az $\dot{u}(x, t) T_{1}(x) \cos (\omega t)$ szorzattal (hőmérséklet-különbség és a gázrész sebességének szorzata), vagyis a $\sin (k x) \cos (k x) \sin (\omega t) \cos (\omega t)$-vel. Ez a hőáram időtlagban nulla lesz $x$-től függetlenül. Viszont az átadott hőmennyiség vizsgálatához figyelembe kell venni, hogy a súrúsödő/ritkuló gáz hókapacitása megváltozik az egyensúlyi helyzethez képest. Ha a gáz ritkább lesz az adott helyen, akkor a hőkapacitása csökken. A széleket tekintve itt a legnagyobb a súrúsödés/ritkulás. Súrúsödéskor a gáz hómérséklete megnövekszik, hót ad át a csőnek, ritkuláskor pedig hốt vesz fel a csőtől, azonban ugyanakkora hőmérsékletváltozáshoz ritkuláskor kisebb hőmennyiség cserélődik ki, hiszen a ritkább gáz hőkapacitása kisebb. Tehát egy periódus alatt a végeken ( $A$ és $C$ pontok) összeségében a gáz ad át hőt a csőnek, azaz itt a cső felmelegszik. Mivel a cső közepén ( $B$ pont) a gáz állapota lényegében nem változik meg, itt a cső hőmérséklete változatlan marad.
3.B.1. A lemez hốmérséklete:
\[
T_{\text {lemez }}\left(x_{0}+u\left(x_{0}, t\right)\right)=T_{0}-\frac{u\left(x_{0}, t\right)}{\ell} \tau=T_{\text {env }}(t),
\]
vagyis
\[
T_{\mathrm{st}}=\frac{a \tau}{\ell} \sin \left(k x_{0}\right),
\]
felhasználva, hogy a legnagyobb hullámhosszra $k=\pi / L$, valamint, hogy $x_{0}=$ $=L / 4$ :
\[
T_{\mathrm{st}}=\frac{\sqrt{2}}{2} \frac{a \tau}{\ell} .
\]
3.B.2. Ha a gázréteg melegebb, mint a környezete és a hideg hőtartály felé mozog $\left(u\left(x_{0}, t\right)>0\right)$, akkor hót szállít a meleg hótartálytól. Ennek feltétele
\[
T\left(x_{0}, t\right)>T_{\mathrm{env}}(t),
\]

\footnotetext{
${ }^{29}$ A https://www.walter-fendt.de/html5/phen/standinglongitudinalwaves_en.htm oldalon érdemes megfigyelni a gáz mozgását. Ehhez a (legnagyobb hullámhosszúságú) módushoz tartozó hőmérséklet-profil hasonló a nyomásprofilhoz, csak az $x$ tengelyre tükrözni kell.

amibe behelyettesítve a megfelelő formulákat
\[
k(\kappa-1) T_{0} \cos \left(k x_{0}\right)<\frac{\tau}{\ell} \sin \left(k x_{0}\right) .
\]
Mivel $\sin \left(k x_{0}\right)=\cos \left(k x_{0}\right)$, így
\[
\tau>k \ell(\kappa-1) T_{0} .
\]

A hőáram iránya akkor is ugyanerre mutat, ha a környezeténél hidegebb gázréteg a meleg hótartály felé mozog $\left(u\left(x_{0}, t\right)<0\right)$. Ennek a feltétele
\[
T\left(x_{0}, t\right)<T_{\mathrm{env}}(t),
\]
amiből
\[
k(\kappa-1) T_{0} \cos \left(k x_{0}\right)>\frac{\tau}{\ell} \sin \left(k x_{0}\right) .
\]
Ugyanakkor most $\sin \left(k x_{0}\right)=-\cos \left(k x_{0}\right)$, ezért ugyanazt az egyenlőtlenséget kapjuk
\[
\tau>k \ell(\kappa-1) T_{0} .
\]
Tehát a kritikus hőmérséklet-különbség
\[
\tau_{\mathrm{c}}=k \ell(\kappa-1) T_{0} .
\]
3.B.3. A hőtan elsó fótétele elemi folyamatra
\[
\frac{\mathrm{d} Q}{\mathrm{~d} t}=\frac{\mathrm{d} E}{\mathrm{~d} t}+p \frac{\mathrm{~d} V}{\mathrm{~d} t} .
\]
A belső energia $E=C_{V} n T=\frac{1}{\kappa-1} p V$, így
\[
\frac{\mathrm{d} Q}{\mathrm{~d} t}=\frac{1}{\kappa-1}\left(\frac{\mathrm{~d} p}{\mathrm{~d} t} V+p \frac{\mathrm{~d} V}{\mathrm{~d} t}\right)+p \frac{\mathrm{~d} V}{\mathrm{~d} t} \approx \frac{1}{\kappa-1} V_{0} \frac{\mathrm{~d} p}{\mathrm{~d} t}+\frac{\kappa}{\kappa-1} p_{0} \frac{\mathrm{~d} V}{\mathrm{~d} t} .
\]
3.B.4. Helyettesítsük be az előző rész eredményébe a megadott hőáram kifejezését:
\[
\frac{1}{\kappa-1} V_{0} \frac{\mathrm{~d} p}{\mathrm{~d} t}+\frac{\kappa}{\kappa-1} p_{0} \frac{\mathrm{~d} V}{\mathrm{~d} t}=-\beta V_{0}\left(T_{\mathrm{st}}-T_{1}\right) \cos (\omega t),
\]
ezt követően pedig a megadott $p$ és $V$ formulákat. Mivel az egyenlet bármelyik időpillanatban érvényes, ezért külön a $\sin (\omega t)$ és a $\cos (\omega t)$ tagok együtthatói nullával egyenlőek:
\[
\begin{gathered}
\frac{1}{\kappa-1} p_{b} V_{0} \omega-\frac{\kappa}{\kappa-1} p_{0} V_{b} \omega=0, \\
\frac{1}{\kappa-1} p_{a} V_{0} \omega+\frac{\kappa}{\kappa-1} p_{0} V_{a} \omega=-\beta V_{0}\left(T_{\mathrm{st}}-T_{1}\right) .
\end{gathered}
\]

Az első egyenletből
\[
V_{b}=\frac{1}{\kappa} \frac{p_{b}}{p_{0}} V_{0},
\]
a másodikból pedig
\[
V_{a}=-\frac{1}{\kappa} \frac{p_{a}}{p_{0}} V_{0}-\frac{\beta(\kappa-1)}{\kappa \omega} \frac{T_{\mathrm{st}}-T_{1}}{p_{0}} V_{0} .
\]
Felhasználva, hogy
\[
T_{\mathrm{st}}-T_{1}=\frac{\sqrt{2}}{2}\left(\frac{a \tau}{\ell}-a k(\kappa-1) T_{0}\right)=\frac{\sqrt{2}}{2} \frac{a}{\ell}\left(\tau-\tau_{\mathrm{c}}\right),
\]
így az eredmény
\[
V_{a}=\left[-\frac{p_{a}}{\kappa}-\frac{\kappa-1}{\kappa} \frac{\beta}{\omega} \frac{\sqrt{2}}{2} \frac{a}{\ell}\left(\tau-\tau_{\mathrm{c}}\right)\right] \frac{V_{0}}{p_{0}} .
\]
3.B.5. A gázréteg által végzett elemi munka a megadott $p$ és $V$ kifejezésekkel:
\[
p \mathrm{~d} V=p \frac{\partial V}{\partial t} \mathrm{~d} t=\left[p_{0}+p_{a} \sin (\omega t)-p_{b} \cos (\omega t)\right]\left[\omega V_{a} \cos (\omega t)-\omega V_{b} \sin (\omega t)\right] \mathrm{d} t .
\]
Egy ciklust tekintve, felhasználva, hogy egy periódusra integrálva csak a $\sin ^{2}(\omega t)$ és a $\cos ^{2}(\omega t)$ ad nem eltúnő $(\pi / \omega)$ tagot, a gázréteg által végzett munka időátlagban
\[
w=-\pi\left(p_{a} V_{b}+p_{b} V_{a}\right) .
\]
A teljes $S \ell$ térfogatban $S \ell / V_{0}$ darab gázréteg van, és mivel mindegyik gázréteg időátlagban $w$ munkát végez, a teljes akusztikus munka időátlagban
\[
W_{\mathrm{tot}}=\frac{S \ell}{V_{0}} w .
\]
Behelyettesítve a 3.B.4. rész $V_{a}$ és $V_{b}$ eredményeit:
\[
W_{\mathrm{tot}}=\frac{\pi}{\omega} \frac{\kappa-1}{\kappa} S \beta \frac{\sqrt{2}}{2} a\left(\tau-\tau_{\mathrm{c}}\right) \frac{p_{b}}{p_{0}} .
\]
Vezető rendben közelíthetjük $p_{b}-\mathrm{t} p_{1}\left(x_{0}\right)$-lal, azaz a 3.A.3. feladat eredményével. Felhasználva a (19-6) diszperziós relációt
\[
p_{b} \approx p_{1}\left(x_{0}\right)=\frac{\varrho_{0} a \omega^{2}}{k} \cos \left(\omega x_{0}\right)=\frac{\sqrt{2}}{2} a k \kappa p_{0},
\]
amivel a teljes munka
\[
W_{\mathrm{tot}}=\frac{\pi}{2 \omega}(\kappa-1) \beta\left(\tau-\tau_{\mathrm{c}}\right) a^{2} k S .
\]
3.B.6. A teljes átáramlott hő egy ciklusra az útmutatást felhasználva
\[
Q_{\mathrm{tot}}=\int j \mathrm{~d} S \mathrm{~d} t=\int q \frac{\mathrm{~d} u}{\mathrm{~d} t} \mathrm{~d} t \int \mathrm{~d} S .
\]
A 3.B.4. feladat szerint
\[
\frac{\mathrm{d} q}{\mathrm{~d} t}=\frac{1}{V_{0}} \frac{\mathrm{~d} Q}{\mathrm{~d} t}=-\beta\left(T_{\mathrm{st}}-T_{1}\right) \cos (\omega t) \rightarrow q=-\frac{\beta}{\omega}\left(T_{\mathrm{st}}-T_{1}\right) \sin (\omega t) .
\]
A gázréteg kitérésére
\[
\frac{\mathrm{d} u}{\mathrm{~d} t}=-\frac{a \omega \sqrt{2}}{2} \sin (\omega t),
\]
ahol felhsználtuk, hogy a lemezköteg helyén a kitérés $u\left(x_{0}, t\right)$. Ezzel
\[
Q_{\mathrm{tot}}=\frac{a \beta \sqrt{2}}{2}\left(T_{\mathrm{st}}-T_{1}\right) S \int \sin ^{2}(\omega t) \mathrm{d} t=\frac{\pi}{\omega} \beta a\left(T_{\mathrm{st}}-T_{1}\right) \frac{\sqrt{2}}{2} S .
\]
A (19-7) segítségével az eredmény
\[
Q_{\mathrm{tot}}=\frac{\pi}{2 \omega} \beta\left(\tau-\tau_{\mathrm{c}}\right) \frac{a^{2} S}{\ell} .
\]
3.B.7. A hatásfokot az előző két rész eredményeibő̌l adhatuk meg:
\[
\eta=\frac{W_{\mathrm{tot}}}{Q_{\mathrm{tot}}}=(\kappa-1) k \ell .
\]
A $\tau_{\mathrm{c}}=(\kappa-1) k \ell T_{0}$ felhasználásával
\[
\eta=\frac{\tau_{\mathrm{c}}}{T_{0}} .
\]
A Carnot-gép hatásfoka
\[
\eta_{\mathrm{C}}=1-\frac{T_{\mathrm{C}}}{T_{\mathrm{H}}}=1-\frac{T_{0}-\frac{\tau}{2}}{T_{0}+\frac{\tau}{2}}=\frac{\tau}{T_{0}+\frac{\tau}{2}} \approx \frac{\tau}{T_{0}} .
\]
Tehát a termoakuszikus gép hatásfoka
\[
\eta=\frac{\tau_{\mathrm{c}}}{\tau} \eta_{\mathrm{C}} .
\]

\title{
