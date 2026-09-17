---
id: komal-P5716
source: komal
language: hu
translated: false
problem: komal-P5716
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**I. megoldás.**
 Legyen az egyensúlyi helyzetben az $m$ tömegű test sebessége $v_0$. A körmozgás dinamikai feltételei alapján: 
 $m\frac{v_0^2}{R}=Mg,$ 
 amiből: 
 $(1)$ $mv_0^2=MgR.$ 
 A meglökés után az $M$ tömegű test függőleges rezgőmozgásba kezd, kitérése legyen $y$ (felfelé pozitív). Ekkor az $m$ tömegű test a lyuktól $r=R+y$ távolságra van, tangenciális sebessége legyen $v_\mathrm{t}$. Erre a testre az eredő erő mindig a lyuk irányába hat (a meglökéskor is csak ilyen irányú erővel hatottunk rá), így a lyukra vonatkoztatva a perdülete állandó: 
 $mv_\mathrm{t}(R+y)= mv_0R,$ 
 amiből: 
 $(2)$ $v_\mathrm{t}=\frac{R}{R+y}v_0.$ 
 A két test között a $K$ kötélerő hat, így az $M$ tömegű test függőleges mozgásegyenlete és az $m$ tömegű test radiális mozgásegyenlete: 
$$\begin{gather*}
Ma=K-Mg,\\
m\left(a-\frac{v_\mathrm{t}^2}{R+y}\right)=-K,
\end{gather*}$$
 amiből: 
 $Ma+Mg=m\frac{v_\mathrm{t}^2}{R+y}-ma.$ 
 Ebből (1) és (2) felhasználásával: 
 $Mg+Ma=\frac{R^3}{(R+y)^3}Mg-ma,$ 
 majd rendezve: 
 $(M+m)a=Mg\left(\frac{1}{\left(1+\frac{y}{R}\right)^3}-1\right).$ 
 Felhasználva, hogy $y\ll R$, a zárójelben lévő kifejezés: 
 $\frac{1}{\left(1+\frac{y}{R}\right)^3}-1\approx 1-3\frac{y}{R}-1=-3\frac{y}{R},$ 
 és így 
 $a=-\frac{3Mg}{(M+m)R}\,y.$ 
 Láthatjuk, hogy (a kis kitéréses közelítésben) a gyorsulás iránya ellentétes a kitérés irányával, és nagysága arányos a kitéréssel. Eszerint a rezgés körfrekvenciája: 
 $\omega=\sqrt{\frac{3Mg}{(M+m)R}},$ 
 amiből a rezgés periódusideje: 
 $T=\frac{2\pi}{\omega}=2\pi\sqrt{\frac{(M+m)R}{3Mg}}.$ 

**II. megoldás.**
 Legyen a sugárirányú meglökés sebessége $\hat{v}$. Írjuk fel a mozgás energiamérlegét a meglökés utáni pillanat és a rezgőmozgás legnagyobb, $\hat{y}$ kitérésű helyzete között. (Felhasználjuk, hogy az utóbbi helyzetben az $M$ tömegű test sebessége és az $m$ tömegű test radiális sebessége is eltűnik.) 
 $\frac{1}{2}mv_0^2+\frac{1}{2}(M+m)\hat{v}^2=Mg\hat{y}+\frac{1}{2}mv_\mathrm{t}^2.$ 
 Az I. megoldás (1) és (2) kifejezését felhasználva és rendezve: 
$$\begin{gather*}
mv_0^2+(M+m)\hat{v}^2=2Mg\hat{y}+m\frac{R^2}{(R+\hat{y})^2}v_0^2,\\
(M+m)\hat{v}^2=MgR\left(\frac{2\hat{y}}{R}+\frac{R^2}{(R+\hat{y})^2}-1\right).
\end{gather*}$$
 A zárójelben lévő kifejezést rendezve, és a nem vezető tagokat (a számlálóban az $\hat{y}^3$-ös tagot, a nevezőben $R$-en kívül mindent) elhanyagolva: 
 $\frac{2\hat{y}}{R}+\frac{R^2}{(R+\hat{y})^2}-1=\frac{2\hat{y}(R+\hat{y})^2+R^3-R(R+\hat{y})^2}{R(R+\hat{y})^2}=\frac{3R\hat{y}^2+2\hat{y}^3}{R(R+\hat{y})^2}\approx\frac{3\hat{y}^2}{R^2}.$ 
 Ezt beírva és rendezve: 
 $\hat{v}^2=\frac{3Mg}{(M+m)R}\,\hat{y}^2,$ 
 amiből a rezgés körfrekvenciája: 
 $\omega=\frac{\hat{v}}{\hat{y}}=\sqrt{\frac{3Mg}{(M+m)R}},$ 
 az előző megoldással egyezően.
