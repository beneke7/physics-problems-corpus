---
id: komal-P5597
source: komal
language: hu
translated: false
problem: komal-P5597
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 Külső erő híján a rendszer tömegközéppontja, ami a szimmetria miatt egybeesik a három csillag alkotta egyenlő oldalú háromszög súlypontjával, nem gyorsul. Tekintsük ezt origónak! Egy tetszőleges pillanatban legyen a háromszög oldalának a hossza $L$, és nézzük meg az egyes testekre ható erőket! Egy testre csak a másik kettő vonzásának az eredője hat, ennek nagysága 
 $F=\frac{\gamma m^2\sqrt{3}}{L^2},$ 
 és a háromszög súlypontja felé mutat. Mivel a súlypont és a csúcsok távolsága (a körülírható kör sugara) $R=\tfrac{L}{\sqrt{3}}$, 
 $F=-\frac{\gamma mM_\textrm{eff}}{R^2},$ 
 ahol 
 $M_{\rm eff}=\frac{m}{\sqrt{3}},$ 
 és a $-$ előjel a vonzásra utal. Mindebből az következik, hogy a három csillag mindegyike a közös tömegközéppont körül olyan bolygómozgást végez, mintha ott egy rögzített $M_\textrm{eff}$ tömegű centrális égitest lenne, és csak annak a hatását érezné. (Ez természetesen csak akkor igaz, ha a testek megfelelően elhelyezkedő, azonos alakú pályákon szinkronban mozognak, de ezt – amellett, hogy a feladat meg is adja – a kezdeti feltételek szimmetriája biztosítja.) 
 A rendszer mozgásának a periódusideje azonos az egyes bolygók mozgásának keringési idejével, ami 
 $T=2\pi\sqrt{\frac{\left(\frac{R_\textrm{max}+R_\textrm{min}}{2}\right)^3}{\gamma M_\textrm{eff}}},$ 
 a feladat tehát az $R$ (vagy ami azzal egyenértékű, az $L$) két szélsőértékének a meghatározása. A szélső helyzetekben az égitest sebessége merőleges a vezérsugárra, tehát az egyik szélsőérték (bár nem tudjuk, melyik) az $R_0=\tfrac{L_0}{\sqrt{3}}$-mal adott. A másik meghatározására az energia és az impulzusmomentum megmaradása kínál lehetőséget. Kétféleképpen gondolkodhatunk, vagy a teljes rendszerre írjuk fel ezeket a törvényeket, vagy egy csillagnak az elképzelt központi test körüli keringésére, de a kettő nyilván ekvivalens egyenleteket kell, hogy adjon. Itt az utóbbi utat követjük. Az egyenletek rendre: 
 $-\frac{\gamma mM_\textrm{eff}}{R_0}+\frac{1}{2}mv_0^2=-\frac{\gamma mM_\textrm{eff}}{R}+\frac{1}{2}mv^2$ 
 és 
 $mR_0v_0=mRv.$ 
 Fontos, hogy a perdületre vonatkozó (a második) egyenlet ebben a formában csak a két szélső helyzetre igaz, így az egyenletrendszernek két $(R,v)$ gyökpárja van, az egyik az ismert $R_0$ és $v_0$, a másikat keressük. Az egyenletekből $v$-t kiküszöbölve a 
 $-\frac{\gamma M_\textrm{eff}}{R_0}\left(1-\frac{R_0}{R}\right)+\frac{1}{2}v_0^2\left(1-\left(\frac{R_0}{R}\right)^2\right)=0$ 
 összefüggést kapjuk, amit megoldva az 
 $R_1=R_0\qquad\textrm{és}\qquad R_2=\frac{R_0v_0^2}{2\gamma M_\textrm{eff}-R_0v_0^2}\,R_0$ 
 értékeket kapjuk. Látható, hogy a második gyök lehet negatív, de ez fizikailag nem értelmezhető. Ilyenkor a rendszer energiája pozitív, a csillagok nem maradnak együtt, idővel végtelenül eltávolodnak egymástól. A mozgás csak akkor lehet periodikus, ha az égitestek kötött állapotban vannak, tehát az energiájuk negatív, azaz $R_2$ is pozitív. Hogy az $R_1$ és $R_2$ közül melyik a minimum és melyik a maximum, a feladat szempontjából nem számít, a lényeg az, hogy 
 $R_\textrm{max}+R_\textrm{min}=R_1+R_2=\frac{2\gamma M_\textrm{eff}}{2\gamma M_\textrm{eff}-R_0v_0^2}\,R_0,$ 
 amit behelyettesítve 
 $T=2\pi\sqrt{\left(\frac{\gamma M_\textrm{eff}}{2\gamma M_\textrm{eff}-R_0v_0^2}\right)^3\frac{R_0^3}{\gamma M_\textrm{eff}}}=2\pi\sqrt{\left(\frac{\gamma m}{2\gamma m-L_0v_0^2}\right)^3\frac{L_0^3}{3\gamma m}}$ 
 adódik. 

 Megjegyzés. Feladatunkban, ahogy azt említettük, a szimmetria biztosítja, hogy a három égitest a közös tömegközéppont körül mozogva végig szabályos háromszöget alkot. Ez azonban, megfelelő kezdeti feltételek mellett, különböző tömegek esetén is teljesül. Ennek részletes bemutatása megtalálható lapunk egy korábbi cikkében: A gravitációs többtestprobléma két speciális esete , KöMaL 2015. december, 558–563. oldal, http://db.komal.hu/KomalHU/cikk.phtml?id=201736 .
