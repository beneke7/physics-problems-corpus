---
id: komal-P5618
source: komal
language: hu
translated: false
problem: komal-P5618
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 Az a pályapont, amikor a fonálnak a gyöngyhöz rögzített szakasza vízszintes, nem egyensúlyi helyzet, de kitünteti, hogy a fonálon lógó test ilyenkor van a legmélyebben, és a sebessége ebben a helyzetben mindig nulla.

 a) A szélső helyzetek pozícióit legegyszerűbben az energiamegmaradás törvényének segítségével számolhatjuk ki. A fentiek alapján a kiinduló helyzetben csak a gyöngy mozog, a kinetikus energiája pedig a feladatban megadott kezdősebességet behelyettesítve:
 $\frac{1}{2}mv_0^2=mgd.$
 Mérjük az elmozdulásokat a kiindulási helyzettől, ezek legyenek pozitívak, ha fölfelé mutatnak, és jelöljük a gyöngy és a lógó test magasságát a szélső helyzetben $h_1$ illetve $h_2$-vel. Az energiamérleg szerint
 $mgd=mgh_1+2mgh_2.$
 A két magasság között a kötél nyújthatatlanságát kifejező egyenlet ad összefüggést. Ha a gyöngy pozíciója $x_1$, a fonálon függő testé pedig $x_2$, a Pitagorasz tétel szerint
 $x_1^2+d^2=\left(d+x_2\right)^2,$
 a szélső helyzetben tehát
 $\sqrt{h_1^2+d^2}-d=h_2.$
 Egyszerűsítések és a $h_2$ kiküszöbölése a
 $3d=h_1+2\sqrt{h_1^2+d^2}$
 egyenletre vezet, amelyből átrendezéssel és négyzetre emeléssel a
 $3h_1^2+6dh_1-5d^2=0$
 másodfokú egyenlet kapható. Ennek a pozitív gyöke éppen $f$, a negatív gyöke pedig az $l$ mínusz egyszerese:
$$\begin{gather*}
f=\left(\sqrt{\frac{8}{3}}-1\right)d,\\
l=\left(\sqrt{\frac{8}{3}}+1\right)d,
\end{gather*}$$
 tehát
 $\frac{l}{f}=\frac{\sqrt{8}+\sqrt{3}}{\sqrt{8}-\sqrt{3}}=4{,}16.$

 b) A kötélerő meghatározásához a mozgásegyenleteket kell felírnunk! Jelöljük a gyöngy és a fonálon függő test gyorsulását $a_1$ és $a_2$-vel, legyen $K_1$ a fonalban ható erő, és $\varphi$ a gyöngyhöz csatlakozó fonaldarab vízszintessel bezárt szöge a szélső helyzetben ($\sin\varphi=f/\sqrt{f^2+d^2}$)! Ezekkel
$$\begin{gather*}
ma_1=-mg-K_1\sin\varphi,\\
2ma_2=-2mg+K_1.
\end{gather*}$$
 A szélső helyzet közelében az egyes testek pozíciói (hiszen itt a sebesség zérus)
 $x_1=f+\frac{1}{2}a_1(\Delta t)^2,$
 illetve
 $x_2=h_2+\frac{1}{2}a_2(\Delta t)^2$
 alakúak, (ahol a gyorsulások értéke negatív, és a $\Delta t$ az az idő, ami a szélső helyzet eléréséhez kell, vagy azóta eltelt). Ezeket az értékeket helyettesítve a kényszeregyenletbe, az összefüggést ad a két gyorsulás között:
 $\left(f+\frac{1}{2}a_1(\Delta t)^2\right)^2+d^2=\left(d+h_2+\frac{1}{2}a_2(\Delta t)^2\right)^2.$
 Ebből átrendezések után, a $\Delta t$-ben csak a vezető kvadratikus rendet megtartva az
 $f^2+d^2-\left(d+h_2\right)^2=\left((d+h_2)a_2-fa_1\right)(\Delta t)^2$
 egyenletet kapjuk. A baloldal $f$ és $h_2$ definíciója miatt nulla, tehát a jobb oldal is az, azaz
 $a_2=\frac{f}{d+h_2}a_1=a_1\sin\varphi.$
 A két mozgásegyenlettel együtt ez három ismeretlenre három egyenlet, aminek a megoldása a kötélerőre
 $K_1=\frac{2(1-\sin\varphi)}{1+2\sin^2\varphi}mg=0{,}592\,mg.$
 Abban a pillanatban, amikor a rendszer a kiinduló helyzeten áthalad, a kötél nem befolyásolja a gyöngy gyorsulását, mert a kötélerőnek nincs a drót irányába eső komponense. Ilyenkor tehát $a_1=-g$ és a gyöngy mozgása jó közelítéssel az
 $x_1=\pm v_0(\delta t)-\frac{1}{2}g(\delta t)^2$
 formában adható meg, ahol a sebesség előjele utal arra, hogy milyen irányban halad át a rendszer az adott pozíción, és $\delta t$ az ettől a pillanattól mért idő. A fonálon függő test a pályája legmélyebb pontja közelében van, mozgását az
 $x_2=\frac{1}{2}a_2(\delta t)^2$
 kifejezés adja meg. Itt, a kötélerőt $K_2$-vel jelölve,
 $2ma_2=-2mg+K_2.$
 Ilyen $x_1$ és $x_2$ mellett a kötél nyújthatatlanságát a
 $d^2+\left(\pm v_0(\delta t)-\frac{1}{2}g(\delta t)^2\right)^2=\left(d+\frac{1}{2}a_2(\delta t)^2\right)^2$
 egyenlet fejezi ki. Ebből a $(\delta t)$-ben köbös és negyedrendű tagokat elhanyagolva
 $a_2=\frac{v_0^2}{d}=2g$
 adódik, így
 $K_2=6mg.$

 Megjegyzés. Figyelemre méltó, hogy amíg a szélső helyzetben a kötél gyorsulása a gyöngy gyorsulásának a fonal irányába mutató komponense, amikor a gyöngy a kiinduló helyzeten áthalad, a gyorsulása nem, csak a sebessége befolyásolja a fonal gyorsulását. A megoldásban alkalmazott módszerrel nem nehéz belátnunk, hogy egy tetszőleges, $x_1$, $x_2$, $v_1$, $v_2$, és $a_1$, $a_2$ adatokkal jellemzett közbülső helyzetben
 $v_2=v_1\sin\phi,\qquad\textrm{és}\qquad a_2=a_1\sin\phi+\frac{\left(v_1\cos\phi\right)^2}{\sqrt{d^2+x_1^2}},$
 ahol $\phi$ a fonal gyöngyhöz csatlakozó részének a vízszintessel bezárt szöge ($\sin\phi=x_1/\sqrt{x_1^2+d^2}$).
