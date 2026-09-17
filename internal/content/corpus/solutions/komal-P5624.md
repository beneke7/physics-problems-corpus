---
id: komal-P5624
source: komal
language: hu
translated: false
problem: komal-P5624
figure_files: [komal-P5624-sol-fig1.png, komal-P5624-sol-fig2.png, komal-P5624-sol-fig3.png]
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 Legyen az egyes rudak tömege $m$, hossza $\ell$ és a mozgásban lévő rúd szabad végének sebessége $v$. A mozgás során a rudak mindvégig a kezdeti sebesség és a rudak kezdeti helyzete által meghatározott síkban maradnak. A két rúdból álló zárt rendszer mozgási energiája is és a perdülete is a mozgás során állandó marad. 
 Kezdetben az egyik (az 1. ábrán a jobb oldali) rúd tömegközéppontja $v/2$ sebességgel mozog (felfelé) és $v/\ell$ szögsebességgel forog, a másik rúd áll. Az egész rendszer impulzusa $I=mv/2$, a rendszer tömegközéppontjának sebessége tehát $v_\textrm{tkp}=I/(2m)=v/4$. 

 1. ábra 

 Térjünk át a két rúd tömegközéppontjához rögzített koordináta-rendszerre. Ebben a rendszerben a bal oldali rúd mindkét vége $v/4$ sebességgel mozog lefelé és a szögsebessége nulla. A jobb oldali rúd egyik vége $3v/4$ sebességgel mozog felfelé, a másik vége $v/4$ sebességgel lefelé, a szögsebessége tehát $v/\ell$ (lásd a 2. ábrát ). 

 2. ábra 

 A rendszer mozgási energiája a tömegközépponti rendszerben 
 $(1)$ $E=2\cdot\frac{1}{2}m\left(\frac{v}{4}\right)^2+\frac{1}{2}\,\frac{1}{12}m\ell^2\left(\frac{v}{\ell}\right)^2=\frac{5}{48}mv^2.$ 
 A rendszer perdülete (ugyancsak a tömegközépponti rendszerben)az egyes rudak saját tömegközéppontjuk körüli forgómozgásából származó ,,sajátperdületének'' és a tömegközéppontjuk mozgásából eredő ,,pályaperdületének" összege: 
 $(2)$ $N=0+\frac{1}{4}mv\cdot\frac{\ell}{2}+\frac{1}{12}m\ell^2\cdot\frac{v}{\ell}+\frac{1}{4}mv\cdot\frac{\ell}{2}=\frac{1}{3}mv\ell.$ 
 A további mozgás során a rudak általában különböző szögsebességgel mozognak, és emiatt a közrezárt szögük időben változik. Abban a pillanatban, amikor a rudak által bezárt $2\varphi$ szög eléri a legkisebb értékét (feltételezve, hogy ilyen minimum valóban létrejön), a rudak relatív szögsebességének pillanatnyi értéke nulla kell, hogy legyen, vagyis mindkét rúd ugyanakkora $\omega$ szögsebességgel fog forogni a rendszer tömegközéppontja körül ( 3. ábra ). Azt is mondhatjuk, hogy a két rúd ebben a pillanatban merev testként viselkedik. 

 3. ábra 

 Legyen a két rúdból álló rendszer tehetetlenségi nyomatéka a legkisebb közrezárt szögnél a rendszer $T$ tömegközéppontjára vonatkoztatva $\varTheta$. Ekkor az összenergia 
 $E=\frac{1}{2}\varTheta\omega^2,$ 
 az összperdület pedig 
 $N=\varTheta\,\omega$ 
 módon számítható. Látszik, hogy az $N^2/(2E)$ mennyiségből kiesik a szögsebesség: 
 $(3)$ $\frac{N^2}{2E}=\varTheta.$ 
 (3) bal oldala (1) és (2)-ből adódóan 
 $\frac{N^2}{2E}=\frac{8}{15}m\ell^2,$ 
 a jobb oldala pedig a Steiner-tétel felhasználásával 
 $\varTheta=2\cdot\left[\frac{1}{12}m\ell^2+m\left(\frac{\ell}{2}\sin\varphi\right)^2\right]=\left(\frac{1}{6}+\frac {\sin^2\varphi}2\right)m\ell^2.$ 
 A fenti két kifejezés egyenlőségéből 
 $\frac{8}{15}=\frac{1}{6}+\frac{\sin^2\varphi}2,$ 
 vagyis 
 $\sin\varphi=\sqrt{\frac{11}{15}}$ 
 következik, vagyis a rudak által bezárt legkisebb szög 
 $2\varphi=2\arcsin\sqrt{\frac{11}{15}}\approx 118^\circ.$

![solution figure](../../raw_html/komal_figures/komal-P5624-sol-fig1.png)

![solution figure](../../raw_html/komal_figures/komal-P5624-sol-fig2.png)

![solution figure](../../raw_html/komal_figures/komal-P5624-sol-fig3.png)
