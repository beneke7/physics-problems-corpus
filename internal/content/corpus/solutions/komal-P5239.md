---
id: komal-P5239
source: komal
language: hu
translated: false
problem: komal-P5239
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 Jelöljük a rúd hosszát $2r$-rel, az ólomgolyók középpontjainak távolságát $2R$-rel, az ólomgolyók tömegét $m^*$-gal, a rúd végén lévő egy-egy kicsiny test tömegét $m$-mel, a torziós szál ún. direkciós nyomatékát (egységnyi szögkitéréshez tartozó visszatérítő forgatónyomatékot) pedig $D_0$-lal. Az inga lengésideje eredetileg $T_0$. 
 Adataink: $r=0{,}105~\rm m$, $R=0{,}35~\rm m$, $m^*=600$ kg, $T_0=600~$s. (Az $m$ tömeg nagyságát nem ismerjük, de mint látni fogjuk, arra nem is lesz szükségünk, mert kiesik a képletekből.) A torziós inga lengésideje 
 $(1)$ $T_0=2\pi\sqrt{\frac{2mr^2}{D_0}}. $ 
 Ha valamilyen ok miatt, pl. a gravitációs vonzóerők hatására a direkciós nyomaték megváltozik, akkor ennek megfelelően a lengésidő is más lesz. Feladatunk tehát a gravitációs erők $M(\varphi)$ forgatónyomatékának meghatározása az egyensúlyi helyzettől mért (nagyon kicsiny) $\varphi$ szögkitérésnél. Amennyiben 
 $M_\text{grav}(\varphi)\approx -D_\text{grav}\cdot \varphi,$ 
 vagyis a gravitáció hatása úgy jelentkezik, mintha egy $D_\text{grav}$ direkciós nyomatékú ,,torziós szál'' segítené (vagy rontaná) a rugalmas szál visszahúzó hatását, akkor a lengésidő 
 $(2)$ $T =2\pi\sqrt{\frac{2mr^2}{D_0+D_\text{grav}}} $ 
 értékre változna. 

 $a)$ Legyen kezdetben az ingarúd az ólomgolyók középpontjait összekötő vízszintes egyenesen, majd térítsük ki egy kicsiny $\varphi$ szöggel. A rúdra ható eredő forgatónyomaték (lásd a P. 5166. feladat megoldását a KöMaL 2020. évi 3. számának 180. oldalán, vagy a honlapon): 
 $(3)$ $M(\varphi)=-2\gamma m m^* rR\sin\varphi)\left[\left(R^2+r^2-2Rr\cos\varphi\right)^{-3/2}-\left(R^2+r^2+2Rr\cos\varphi\right)^{-3/2}\right].$ 
 (A kettes faktor a képlet elején a két ólomgolyót veszi figyelembe. A negatív előjelek azt fejezik ki, hogy a forgatónyomaték a kitérés szögével ellentétes irányú.) 
 Kis szögeknél $\sin\varphi\approx \varphi$ és $\cos\varphi\approx 1$, vagyis (3) így alakul: 
 $M(\varphi)=-2\gamma m m^* rR\left(\frac{1}{(R-r)^3}-\frac{1}{(R+r)^3}\right)\cdot \varphi.$ 
 Leolvashatjuk, hogy 
 $(4)$ $D_\text{grav}^{(a)}=2\gamma m m^* rR\left(\frac{1}{(R-r)^3}-\frac{1}{(R+r)^3}\right),$ 
 azaz (a megadott adatok behelyettesítése után) 
 $\frac{D_\text{grav }^{(a)}}{2mr^2}= \gamma m^*\frac{R}{r}\left(\frac{1}{(R-r)^3}-\frac{1}{(R+r)^3}\right)=7{,}65\cdot10^{-6}~\frac{1}{\rm s^2}.$ 
 Másrészt (1) szerint 
 $\frac{D_0}{2mr^2}=\left(\frac{2\pi}{T_0}\right)^2 =1{,}097\cdot10^{-4}~\frac{1}{\rm s^2},$ 
 tehát 
 $\left(\frac
{2\pi}{T^{(a)} }\right)^2
=\frac{D_0}{2mr^2}+\frac{D_\text{grav}^{(a)}}{2mr^2}=1{,}173\cdot10^{-4}~\frac{1}{\rm s^2},$ 
 ahonnan a torziós lengés periódusideje: 
 $T^{(a)}=580~\rm s.$ 
 (Látható, hogy $m$ nagyságára valóban nem volt szükségünk.) 

 $b)$ A merőleges helyzethez közeli helyzetekben a forgatőnyomatékot úgy kaphatjuk meg (3)-ból, hogy $\varphi$-t $90^\circ+x$ alakban írjuk fel, és kihasználjuk, hogy (ívmértékben mérve a szögeket) $x\ll 1$. 
 $M(\varphi)=2\gamma m m^* rR\cos\varphi\left[\left(R^2+r^2-2Rr\sin\varphi\right)^{-3/2}-\left(R^2+r^2+2Rr\sin\varphi\right)^{-3/2}\right],$ 
 amit $x$ elsőnél magasabb hatványainak elhagyásával így is felírhatunk: 
 $M(x)=2\gamma m m^* rR \left(
\frac{1}{\sqrt{\left(R^2+r^2-2Rrx\right)^3}}- \frac{1}{\sqrt{\left(R^2+r^2+2Rr x\right)^3}}
\right).$ 
 A fenti kifejezés nagy zárójelében két, egymástól csak nagyon kicsit különböző gyökös kifejezés különbsége áll, aminek közelítő kiszámítása számos algebrai átalakítást igényel. Hozzuk közös nevezőre a kifejezést: 
 $\frac{1}{\sqrt{\left(R^2+r^2-2Rrx\right)^3}}-\frac{1}{\sqrt{\left(R^2+r^2+2Rr x\right)^3}}=
\frac{{\sqrt{\left(R^2+r^2+2Rr x\right)^3}}-{\sqrt{\left(R^2+r^2-2Rr x\right)^3}}}{\sqrt{\left((R^2+r^2)^2-(2Rr x)^2\right)^3}},$ 
 majd a nevezőben hanyagoljuk el az $x^2$-tel arányos tagot, és bővítsük a számlálót is és a nevezőt is a két négyzetgyökös kifejezés összegével: 
 $\Biggl(\cdots\Biggr)= \frac{1}{(R^2+r^2)^3}\,\frac{{\left(R^2+r^2+2Rr x\right)^3}-{\left(R^2+r^2-2Rr x\right)^3}}
{\sqrt{\left(R^2+r^2+2Rr x\right)^3} +{\sqrt{\left(R^2+r^2-2Rr x\right)^3}}}.
$ 
 A második tört számlálóját most már könnyen közelíthetjük; az $x^2$-tel és $x^3$-nel arányos tagokat elhagyva a $12\,Rr(R^2+r^2)^2$ eredményt kapjuk. A második tört nevezőjében két majdnem egyforma mennyiség összege szerepel, ezekben $x$-et is elhagyhatjuk, hiszen a számláló $x$-szel arányos, tehát egy kicsiny mennyiség, és ha a nevezőben $x$-szel arányos kifejezéseket is megtartanánk, az az egész tört $x^2$ nagyságrendű korrekcióját jelentené csupán. 
 Így végül a gravitációs erők forgatónyomatékára az 
 $M(x)=+12\gamma mm^* \frac{R^2r^2}{(R^2+r^2)^{5/2}}\cdot x$ 
 értéket, a direkciós nyomatékra pedig a 
 $(5)$ $D_\text{grav }^{(b)}=-12\gamma mm^* \frac{R^2r^2}{(R^2+r^2)^{5/2}}$ 
 és a 
 $\frac {D_\text{grav}^{(b)}}{2mr^2}=-6\gamma m^* R^2 {(R^2+r^2)^{-5/2}}=-4{.}5\cdot10^{-6}~\frac{1}{\rm s^2}$ 
 összefüggéseket kapjuk. Mivel $D_\text{grav }^{(b)}<0$, a gravitációs erők a kitéréssel megegyező irányban akarják forgatni a torziós ingát, a rúd merőleges állású helyzete tehát a rugalmas szál nélkül instabil lenne. 
 Az $a)$ részben leírtakhoz hasonlóan: 
 $\left(\frac{2\pi}{T^{(b)} }\right)^2=\frac{D_0}{2mr^2}+\frac{D_\text{grav}^{(b)}}{2mr^2}=1{,}052\cdot10^{-4}~\frac{1}{\rm s^2},$ 
 és így a kérdezett periódusidő: 
 $T^{(b)}=613~\rm s.$ 

 Megjegyzés. A direkciós nyomatékot úgy is megkaphatjuk, mint az $M(\varphi)$ függvény deriváltjának ($-1$)-szerese az $a)$ esetben $\varphi=0$, a $b)$ esetben pedig $\varphi=90^\circ$ szögnél. Felhasználva (3)-t, a negatív derivált: 
 $-M'(\varphi)=2\gamma m m^* rR\cos\varphi\left[\left(R^2+r^2-2Rr\cos\varphi\right)^{-3/2}-\left(R^2+r^2+2Rr\cos\varphi\right)^{-3/2}\right]-
$ 
 $-6\gamma m m^* r^2R^2\sin^2\varphi\left[\left(R^2+r^2-2Rr\cos\varphi\right)^{-5/2}+\left(R^2+r^2+2Rr\cos\varphi\right)^{-5/2}\right].$ 
 Ebből $\varphi=0$ esetén visszakapjuk a más módszerrel levezetett (4) esedményt, $\varphi=90^\circ$-nál pedig az (5) összefüggést.
