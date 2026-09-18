---
id: komal-P5071
source: komal
language: hu
translated: false
problem: komal-P5071
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**I. megoldás.**
 Jelöljük a teher súlyát $G$-vel, a rugalmas fonál rugóállandóját pedig $D$-vel. Amikor a lefelé húzó erőt lassan növeljük, a test folyamatosan (majdnem pontosan) egyensúlyban van, így a fonalat feszítő erő az elszakadást közvetlenül megelőző pillanatban
 $K_0=G+F_1.$
 Ennyi tehát a fonál szakítószilárdsága.
 A második esetben a fonál kezdeti megnyúlása (amikor még csak a teher $G$ súlya húzta)
 $x_1=\frac{G}{D}.$
 Ha ezek után állandó $F_2$ erőt fejtünk ki, a test eleinte lefelé gyorsul, majd egy maximális sebesség elérése után lassul, és végül megáll. Ha a legnagyobb megnyúlása $x_2$, és ebben a helyzetben szakad el a fonál, akkor
 $Dx_2=K_0.$
 A legnagyobb megnyúlást a munkatételből határozhatjuk meg:
 $(F_2+G)(x_2-x_1)=\frac{1}{2}Dx_2^2-\frac{1}{2}Dx_1^2,$
 vagyis
 $G+F_2=\frac{D}{2}(x_2+x_1),$
 amelybe behelyettesítve a megnyúlások korábban kiszámított értékét:
 $G+F_2=\frac{D}{2}\left(\frac{G+F_1}{D}+\frac{G}{D}\right).$
 Ebből leolvasható, hogy
 $F_2=\frac{1}{2}F_1.$
 Érdekes, hogy ez az eredmény független a $G$ súlytól, a $D$ rugóállandótól és a rugalmas szál hosszától.
 Az eredmény megerősíti azt a tapasztalatot, hogy egy fonalat könnyebb egy hirtelen rántással elszakítani, mint folyamatos húzással.

**II. megoldás.**
 A rugalmas szál $K_0=G+F_1$ feszítőerőnél szakad el.
 Amíg nem hat külső erő, a fonál $\Delta x=\frac{G}{D}$ megnyúlás mellett van egyensúlyban. Állandó $F_2$ erő ,,bekapcsolása'' után az egyensúlyi helyzet $A=\frac{F_2}{D}$-vel lejjebb tolódik, és az $m$ tömegű test $A$ amplitúdójú harmonikus rezgőmozgást fog végezni. Induláskor a gyorsulása $F_2/m$ lefelé, és a pálya legmélyebb pontjában ugyanekkora gyorsulással fog mozogni felfelé. A fonál legnagyobb megnyúlása $\Delta x+2A$, és a fonálban ébredő legnagyobb erő (amelynél éppen elszakad):
 $D(\Delta x+2A)=D\left(\frac{G}{D}+2\frac{F_2}{D}\right)=K_0=G+F_1,$
 ahonnan látható, hogy
 $F_2=\frac{1}{2}F_1.$
