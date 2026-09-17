---
id: komal-P5601
source: komal
language: hu
translated: false
problem: komal-P5601
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 Szorítkozzunk arra az esetre, hogy a homokszemcsék csak a membránnal ütköznek! (Nagyon valószínűtlen, hogy a különböző méretű szemcsék úgy ütközzenek egymás között, hogy valamelyik számottevően több energiára tegyen szert, mint amennyit a membrán közvetíthet neki.) Az egyes homokszemek a membránnal való ütközéskor felveszik annak a sebességét, és a membrán pillanatnyi sebességének és a gyorsulásának az irányától függ, hogy hogyan mozognak tovább. Alapvetően két eset lehetséges: 

 A homokszem az ütközés után fölfelé indul el, ez olyankor van amikor az ütközéskor a membrán lassulva ($-g$-nél kisebb gyorsulással) mozog fölfelé: 
 $v=A\omega\cos\omega t>0,\qquad a=-A\omega^2\sin\omega t<-g<0\quad\textrm{azaz}\quad x=A\sin\omega t>\frac{g}{\omega^2}>0.$ 
 (Itt a rezgőmozgás kitérését, sebességét és gyorsulását valamint az amplitúdót és körfrekvenciát a szokásos módon rendre $x$-szel, $v$-vel, $a$-val, $A$-val illetve $\omega$-val jelöltük.) 
 Minden más esetben a homokszem egy vagy több ütközés után a membránnal együtt mozog, és akkor repül el róla, amikor az fölfelé már áthaladt az egyensúlyi helyzeten, és a gyorsulás kisebbé válik $-g$-nél. Ez a fent kijelölt $x$, $v$, és $a$ tartomány szélének felel meg. 

 Az adott homokszem az energia tétel szerint $h=x+\frac{v^2}{2g}=A\sin\omega t+\frac{A^2\omega^2}{2g}\cos^2\omega t$ 
 magasra képes felrepülni. A feladat szerint a $h$ magasság maximuma adott, tehát az a kérdés, az egyenlet jobb oldalán álló kifejezés maximuma mekkora amplitúdó mellett lesz a megadott érték. A jobb oldal a $\sin\omega t$ négyzetes kifejezése: 
 $A\sin\omega t+\frac{A^2\omega^2}{2g}\cos^2\omega t=-\frac{A^2\omega^2}{2g}\sin^2\omega t+A\sin\omega t+\frac{A^2\omega^2}{2g},$ 
 aminek a maximuma ott van, ahol 
 $\sin\omega t=\frac{g}{A\omega^2}.$ 
 (Ezt abból közvetlenül is megkaphatjuk, hogy a homokszem ott válik el a membrántól, ahol az ,,kigyorsul'' alóla, azaz $a=-A\omega^2\sin\omega t=-g$.) A maximum értéke ebből 
 $h_{\mathrm max}=\frac{g}{2\omega^2}+\frac{A^2\omega^2}{2g},$ 
 ahonnan 
 $A=\sqrt{\frac{2gh_{\mathrm max}}{\omega^2}-\frac{g^2}{\omega^4}}.$ 
 Ebből behelyettesítéssel $A=7,8\cdot 10^{-2}\,\mathrm{mm}$ adódik.
