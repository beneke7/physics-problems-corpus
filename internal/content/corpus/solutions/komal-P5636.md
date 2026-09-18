---
id: komal-P5636
source: komal
language: hu
translated: false
problem: komal-P5636
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 Az űrszonda azután, hogy valamennyire eltávolodott a Földtől, Kepler I. törvénye szerint Nap körüli ellipszis pályára áll. Naphoz képesti sebessége
 $(1)$ $v_a=(1-n)v,$
 lesz, ami az $n<1$ feltétel miatt a Földével egyező irányú, de annál kisebb. Mivel a sebesség itt merőleges a Naphoz húzott vezérsugárra, ebben a pontban lesz a pálya aphéliuma, amit jelöljünk $A$-val. Az $A$-hoz húzott vezérsugár a Föld $R$ pályasugarával egyenlő: $r_a=R=1\,\mathrm{CSE}$. Keressük meg a $P$ perihéliumhoz tartozó $r_p$ távolságot. Ehhez írjuk fel az energia és a perdület megmaradását a két pontban:
$$\begin{gather*}
\frac{1}{2}mv_a^2-\gamma\frac{Mm}{r_a}=\frac{1}{2}mv_p^2-\gamma\frac{Mm}{r_p},\tag{2}\\
mr_av_a=mr_pv_p,\tag{3}
\end{gather*}$$
 ahol $M$ a Nap, $m$ a szonda tömege, és $\gamma$ a gravitációs állandó. Az egyenletrendszer két ismeretlenje $r_p$ és $v_p$. A (2) egyenlet a pálya bármely két pontjára igaz, a (3) viszont csak $A$-ban és $P$-ben (mert a perdület kifejezésében általában szerepel szorzóként a sebesség és a vezérsugár bezárt szögének szinusza). Egyszerűsítsük mindkét egyenletet $m$-mel, és az előbbiben rendezzük a hasonló tagokat egy oldalra:
$$\begin{gather*}
\frac{1}{2}(v_p^2-v_a^2)=\gamma M\left(\frac{1}{r_p}-\frac{1}{r_a}\right),\tag{4}\\
r_av_a=r_pv_p.\tag{5}
\end{gather*}$$
 (4)-be helyettesítsük be az (5)-ből kifejezett $r_p=r_a\tfrac{v_a}{v_p}$-t, valamint a Föld pályájából felírható $M\gamma=r_av^2$ összefüggést:
 $\frac{1}{2}(v_p^2-v_a^2)=r_av^2\left(\frac{v_p}{r_av_a}-\frac{1}{r_a}\right)=\frac{v^2}{v_a}(v_p-v_a).$
 Ez másodfokú egyenlet $v_p$-re, amelynek egyik, triviális gyöke a $v_p=v_a$. Mivel mi a másikat keressük, oszthatunk $(v_p-v_a)$-val:
 $v_p+v_a=\frac{2v^2}{v_a}.$
 A perihéliumbeli sebesség tehát:
 $v_p=\frac{2v^2}{v_a}-v_a=\frac{2-(1-n)^2}{1-n}v,$
 ahol behelyettesítettük $v_a$ (1)-gyel megadott értékét. Ezt és (1)-et visszahelyettesítve (5)-be megkapjuk a Nap perihéliumbeli távolságát:
 $(6)$ $r_p=\frac{r_av_a}{v_p}=\frac{(1-n)^2}{2-(1-n)^2}R.$
 a) (6) ismeretében már könnyen felírhatjuk a szonda pályájának nagytengelyét:
 $r_a+r_p=R+\frac{(1-n)^2}{2-(1-n)^2}R=\frac{2}{2-(1-n)^2}R=\frac{2}{2-(1-n)^2}\,\mathrm{CSE}$
 és pálya numerikus excentricitását:
 $e=\frac{r_a-r_p}{r_a+r_p}=\frac{1-\frac{(1-n)^2}{2-(1-n)^2}}{1+\frac{(1-n)^2}{2-(1-n)^2}}=n(2-n).$
 b) A szonda pályája akkor éri el a Nap felszínét, ha $r_p\le R_\mathrm{Nap}$. A legkisebb $n$-re, amivel el lehet érni a Nap felszínét, a (6) összefüggést felhasználva következő egyenletet írhatjuk fel:
 $\frac{(1-n)^2}{2-(1-n)^2}=\frac{r_p}{R}=\frac{6{,}96\cdot 10^5\,\mathrm{km}}{149{,}6\cdot 10^6\,\mathrm{km}}=0{,}00465.$
 Ennek megoldása:
 $1-n=\sqrt{\frac{2\cdot0{,}00465}{1+0{,}00465}}=0{,}0962,\qquad n=0{,}904.$
 Ennél az $n$ értéknél a szonda pályája érinti, a $0{,}904<n<1$ tartományban (feladat feltételei szerint $n<1$) pedig metszi a Nap felszínét.
