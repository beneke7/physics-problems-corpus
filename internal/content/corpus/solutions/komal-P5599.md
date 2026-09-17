---
id: komal-P5599
source: komal
language: hu
translated: false
problem: komal-P5599
figure_files: [komal-P5599-sol-fig1.gif]
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 A kis test $v_0=\sqrt{2gH}$ sebességgel hagyja el a csövet a $P$ pontnál. Legyen a $P$ pont távolsága a szimmetriatengelytől $r_0$, a lemeztől mért távolsága pedig $h_0$. Mivel a felület forgási paraboloid, fennáll, hogy 
 $(1)$ $h_0=kr_0^2,$ 
 ahol $k$ egy állandó. 
 Abban a helyzetben, ahol a test $h$ magassága maximális vagy minimális, a függőleges irányú sebességkomponens nulla, és így a szimmetriatengely felé mutató ,,radiális'' sebesség is nulla. A test sebessége tehát ebben a pontban ,,érintő irányú''. Ha a kérdéses pontban a tengelytől mért távolság $r$, akkor a test magassága 
 $(2)$ $h=kr^2.$ 
 A perdületmegmaradás törvénye szerint 
 $(3)$ $mr_0v_0=mrv,$ 
 az energiamegmaradás törvénye szerint pedig fennáll: 
 $(4)$ $\frac{1}{2}mv_0^2+mgh_0=\frac{1}{2}mv^2+mgh.$ 
 A (4) egyenlet 
 $\frac{1}{2}\left(v_0^2-v^2\right)=g\left(h-h_0\right)$ 
 alakját (1) (2) és (3)-ból kapható $v^2=v_0^2\frac{h_0}{h}$ összefüggés felhasználásával így is felírhatjuk: 
 $\frac{v_0^2}{2}\left(h-h_0\right)=\left(h-h_0\right)gh.$ 
 Mivel a triviális $h=h_0$ esettől különböző megoldást keresünk, egyszerűsíthetünk $(h-h_0)$-lal: 
 $\frac{v_0^2}{2}=gh,$ 
 vagyis 
 $h=\frac{v_0^2}{2g}=H.$ 
 A kis test távolsága tehát $H>h_0$ esetén $h_0\le h\le H$ értékek között változik, $H<h_0$ esetben pedig $H\le h\le h_0$. 

 Megjegyzés. Ha $H=h_0$, akkor a test körpályán, egyenletes körmozgással kering. Ezt a mozgásegyenletből is megkaphatjuk. A serleg által kifejtett $\boldsymbol{N}$ nyomóerő függőleges komponense 
 $N_2=mg,$ 
 hiszen a test függőleges irányban nem gyorsul. 

 Az ábrán látható hasonló derékszögű háromszögek oldalaránya megegyezik: 
 $\frac{N_1}{N_2}=\frac{2h_0}{r_0},$ 
 vagyis 
 $N_1=\frac{2h_0}{r_0}mg.$ 
 Ez az erő akkor tud létrehozni $r_0$ sugarú körpályán egyenletes, $v_0$ sebességű körmozgást, ha 
 $\frac{mv_0^2}{r_0}=mg\frac{2h_0}{r_0},$ 
 vagyis 
 $v_0^2=2gh_0=2gH,$ 
 azaz $H=h_0$.

![solution figure](../../raw_html/komal_figures/komal-P5599-sol-fig1.gif)
