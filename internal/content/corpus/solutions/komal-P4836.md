---
id: komal-P4836
source: komal
language: hu
translated: false
problem: komal-P4836
figure_files: [komal-P4836-sol-fig1.gif, komal-P4836-sol-fig2.gif]
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 Jelöljük a rudak tömegét $m$-mel, sugarukat $R$-rel. (A két sugarat egyforma nagynak tekintjük, a hajszálnyi különbség csak amiatt fontos, hogy a felső rúd ne tudjon az alsón ,,átbillenni''.) 
 1. ábra 
 A rudak – súrlódás hiányában – nem jönnek forgásba, pillanatnyi helyzetüket egyértelműen meghatározza az 1. ábrán látható $\varphi$ szög: 
 $x=R(1+2\sin\varphi), \qquad y=R(1+2\cos\varphi).$ 
 Ha $\omega$ jelöli a $\varphi$ szög növekedési ütemét (szögsebességét), $\beta$ pedig a szögsebesség időegységre eső megváltozását (a szöggyorsulást), akkor az $x(t)$-hez és $y(t)$-hez tartozó sebességek és gyorsulások így fejezhetők ki velük ( 2. ábra ): 
 $v_x=2R\omega \cos\varphi, \qquad v_y=-2R\omega \sin\varphi,$ 
 illetve 
 $a_x=2R(\beta \cos\varphi-\omega^2 \sin\varphi), \qquad a_y=-2R (\beta\sin\varphi+\omega^2\cos\varphi).$ 
 2. ábra 
 A megfeleltetés alapja a rögzített tengely körüli forgómozgással való hasonlóság. Ha az $O$ pontot rögzítettnek gondoljuk, akkor a körülötte $\omega$ szögsebességgel és $\beta$ szöggyorsulással forgó $P$ pont érintőleges (tangenciális) sebessége $v_{\rm t}=2R\omega$, centripetális gyorsulása $a_{\rm cp}=2R\omega^2$, tangenciális gyorsulása pedig $a_{\rm t}=2R\beta$. Ezekből a $P$ pont vízszintes irányú sebességére és gyorsulására éppen a fentebb megadott $v_x$ éa $a_x$ adódik. Igaz ugyan, hogy az $O$ pont nem rögzített, hanem függőleges irányban mozog, tehát függőleges sebessége és gyorsulása van, ez azonban nem befolyásolja a $P$ pont vízszintes irányú mozgásának jellemzőit. Hasonlóan járhatunk el az $O$ pont függőleges irányú mozgásának leírásánál is, az a rögzítettnek képzelt $P$ pont körüli forgás képleteiből kapható meg. 
 Megjegyzés: Természetesen $v_x$ és $a_x$ az $x[\varphi(t)]$ közvetett függvény $t$ szerinti deriválásával is meghatározható, és hasonlóan $v_y$ és $a_y$ is megkapható az $y[\varphi(t)]$ függvényt deriválva. 
 A $\varphi$ szög növekedtével a rudak között ható erő fokozatosan csökken, és lesz egy olyan pillanat, amikor ez az erő nullává válik. Ekkor a két rúd elválik egymástól, és a továbbiakban az alsó rúd egyenletes mozgással, a felső pedig szabadseséssel mozog tovább. (Belátható, hogy a felső rúd nem esik vissza az alsóra.) Az elválás pillanatára az jellemző, hogy az alsó rúd gyorsulása nullára csökken, a felső rúd gyorsulása pedig $-g$ lesz. 
 Az elválás pillanatához tartozó szöget $\varphi^*$-gal jelölve felírhatjuk tehát a következő egyenleteket: 
 $(1)$ $\beta\,\cos\varphi^*-\omega^2\sin\varphi^*=0,$ 
 $(2)$ $\beta\,\sin\varphi^*+\omega^2\cos\varphi^*= \frac{g}{2R}.$ 
 Ha ezekhez hozzávesszük még az energia megmaradását kifejező 
 $mg\,2R(1-\cos\varphi^*)=\frac12 mv_x^2+\frac12 mv_y^2=2R^2\omega^2,$ 
 vagyis az 
 $(3)$ $\omega^2=\frac{g}R $ 
 egyenletet, az (1)-(3) egyenletrendszerből $\cos\varphi^*=\frac23$, vagyis $\varphi^*\approx 48{,}2^\circ$ adódik. 
 Az elválás pillanatában az alsó rúd vízszintes irányú sebessége (ami a továbbiakban már nem növekszik): 
 $v_x^{\rm (max)}=2R\omega\,\cos\varphi^*=\sqrt{\frac{16}{27}gR}.$ 
 A másik (felső) rúd sebessége egészen a földetérés pillanatáig növekszik, legnagyobb értéke az energiamegmaradás törvényéből számolható: 
 $mg\,2R=\frac{1}{2}mv_x^{\rm (max)}+\frac{1}{2}mv_y^{\rm (max)},$ 
 ahonnan 
 $v_y^{\rm (max)}=\sqrt{\frac{92}{27}gR}.$ 
 A keresett arányszám ezek szerint: 
 $\frac{v_x^{\rm (max)}}{v_y^{\rm (max)}}={\frac2{\sqrt{23}}}\approx 0{,}42.
$

![solution figure](../../raw_html/komal_figures/komal-P4836-sol-fig1.gif)

![solution figure](../../raw_html/komal_figures/komal-P4836-sol-fig2.gif)
