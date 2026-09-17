---
id: komal-P5609
source: komal
language: hu
translated: false
problem: komal-P5609
figure_files: [komal-P5609-sol-fig1.gif]
provenance_note: "KöMaL official solution (Hungarian)"
---

**I. megoldás.**
 Amíg a tömegközéppont a vízszint felett van, addig a dobozba vizet öntve a tömegközéppont süllyedni fog, hiszen ekkor a dobozból és a már benne lévő vízből álló rendszerhez a tömegközéppontja alatt adunk hozzá egy újabb tömeget, amely a tömegközéppontot így lejjebb viszi. Ugyanígy, ha a tömegközéppont a vízszint alatt van, akkor további víz hozzáadása a rendszer tömegközéppontját emeli. A tömegközéppont tehát akkor lesz a legmélyebben, ha éppen a víz felszínén lesz. 
 A doboz és a víz tömegközéppontja is a magasságuk felénél helyezkedik el. Legyen a keresett vízszint magassága $h$, a víz tömege $m=\varrho Ah$ (ahol $A=\tfrac{d^2\pi}{4}$). Ekkor a rendszer tömegközéppontjának magassága a tömegközéppont definíciója szerint: 
 $h_\mathrm{tkp}=\frac{M\frac{H}{2}+m\frac{h}{2}}{M+m}=\frac{MH+mh}{2(M+m)}=\frac{MH+\varrho Ah^2}{2(M+\varrho Ah)}.$ 
 Felhasználva, hogy az előbbi gondolatmenet alapján a keresett helyzetben $h_\mathrm{tkp}=h$, adódik a 
 $h_\mathrm{tkp}=\frac{MH+\varrho Ah^2}{2(M+\varrho Ah)}=h,$ 
 egyenlet, amely rendezve $h$-ra másodfokú: 
 $\varrho Ah^2+2Mh-MH=0,$ 
 és pozitív megoldása a keresett vízmagasság: 
 $h=\frac{-M+\sqrt{M^2+MH\varrho A}}{\varrho A}=2{,}44\,\mathrm{cm}.$ 
 Gondolatmenetünk alapján a tömegközéppont magassága is ugyanekkora. 

**II. megoldás.**
 Az előző megoldás jelöléseivel a tömegközéppont magassága $h$ függvényében: 
 $h_\mathrm{tkp}=\frac{MH+\varrho Ah^2}{2(M+\varrho Ah)}.$ 
 Ennek szélsőértékét deriválással, a számtani és mértani közepek közötti egyenlőtlenséggel vagy grafikusan határozhatjuk meg. 

 II/1. megoldás: deriválással. 
 $\frac{\mathrm{d}h_\mathrm{tkp}}{\mathrm{d}h}=\frac{4\varrho Ah(M+\varrho Ah)-2\varrho A(MH+\varrho Ah^2)}{4(M+\varrho Ah)^2}=0,$ 
 amiből rendezéssel az I. megoldásban szereplővel azonos másodfokú egyenletet kapjuk: 
 $\varrho Ah^2+2Mh-MH=0,$ 
 melynek pozitív megoldása a keresett vízmagasság: 
 $h=\frac{-M+\sqrt{M^2+MH\varrho A}}{\varrho A}=2{,}44\,\mathrm{cm}.$ 
 Ezt behelyettesítve a tömegközéppont magasságának kifejezésébe: 
$$\begin{align*}
h_\mathrm{tkp}&=\frac{MH+\varrho Ah^2}{2(M+\varrho Ah)}=\\
&=\frac{MH+\varrho A\frac{M^2-2M\sqrt{M^2+MH\varrho A}+M^2+MH\varrho A}{(\varrho A)^2}}{2\left(M-M+\sqrt{M^2+MH\varrho A}\right)}=\\
&=\frac{MH\varrho A+M^2-2M\sqrt{M^2+MH\varrho A}+M^2+MH\varrho A}{2\varrho A\sqrt{M^2+MH\varrho A}}=\\
&=\frac{-M\sqrt{M^2+MH\varrho A}+M^2+MH\varrho A}{\varrho A\sqrt{M^2+MH\varrho A}}=\\
&=\frac{-M+\sqrt{M^2+MH\varrho A}}{\varrho A}=h=2{,}44\,\mathrm{cm}.
\end{align*}$$
 Megjegyzés. A behelyettesítést numerikus adatokkal is el lehet végezni, akkor egyszerűbb. 

 II/2. megoldás: egyenlőtlenséggel. Alakítsuk át $h_\mathrm{tkp}$ kifejezését és használjuk fel a számtani és mértani közepek egyenlőtlenségét. Ebből adódik a tömegközéppont magasságának minimális értéke: 
$$\begin{align*}
h_\mathrm{tkp}&=\frac{MH+\varrho Ah^2}{2(M+\varrho Ah)}=\\
&=\frac{1}{\varrho A}\frac{M^2+MH\varrho A+\left(\varrho Ah\right)^2-M^2}{2(\varrho Ah+M)}=\\
&=\frac{1}{\varrho A}\frac{(\varrho Ah+M)(\varrho Ah-M)+M^2+MH\varrho A}{2(\varrho Ah+M)}=\\
&=\frac{1}{\varrho A}\frac{\varrho Ah-M+\frac{M^2+MH\varrho A}{\varrho Ah+M}}{2}=\\
&=\frac{1}{\varrho A}\frac{-2M+\varrho Ah+M+\frac{M^2+MH\varrho A}{\varrho Ah+M}}{2}=\\
&=\frac{1}{\varrho A}\left(-M+\frac{(\varrho Ah+M)+\frac{M^2+MH\varrho A}{\varrho Ah+M}}{2}\right)\geq\\
&\geq\frac{-M+\sqrt{M^2+MH\varrho A}}{\varrho A}=2{,}44\,\mathrm{cm}.
\end{align*}$$
 A minimális értéket akkor veszi fel $h_\mathrm{tkp}$, ha 
 $\varrho Ah+M=\frac{M^2+MH\varrho A}{\varrho Ah+M},$ 
 amiből $h$ értéke ekkor: 
 $h=\frac{-M+\sqrt{M^2+MH\varrho A}}{\varrho A}=2{,}44\,\mathrm{cm}.$ 

 II/3. megoldás: grafikonnal. Helyettesítsük be a paramétereket a $h_\mathrm{tkp}(h)$ függvénybe (a hosszakat cm-ben, a tömeget g-ban, a sűrűséget $\mathrm{g/cm^3}$-ben). Ekkor $h_\mathrm{tkp}$ kifejezése cm-ben: 
 $h_\mathrm{tkp}=\frac{MH+\varrho Ah^2}{2(M+\varrho Ah)}=\frac{204{,}4+22{,}90h^2}{28+45{,}80h},$ 
 és ábrázoljuk a függvényt: 

 A grafikonról leolvasható a minimum helye és értéke is.

![solution figure](../../raw_html/komal_figures/komal-P5609-sol-fig1.gif)
