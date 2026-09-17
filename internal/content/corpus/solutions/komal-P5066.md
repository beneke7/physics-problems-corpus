---
id: komal-P5066
source: komal
language: hu
translated: false
problem: komal-P5066
figure_files: [komal-P5066-sol-fig1.gif]
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 Osszuk fel a közeget a $z$-tengelyre merőleges, egymáshoz igen közeli, vékony sávokra, és egy-egy sávon belül tekintsük a törésmutatót állandó nagyságúnak. Ez a közelítés annál jobban hasonlít a valóságos (folytonosan változó $n(z)$-nek megfelelő) esethez, minél keskenyebbek a szóban forgó sávok. 

 A vékony sávok határfelületénél felírhatjuk a Snellius–Descartes-féle törési törvényt: 
 $\frac{n_1}{n_2}=\frac{\sin\alpha_1}{\sin\alpha_2}; \qquad \frac{n_2}{n_3}=\frac{\sin\alpha_2}{\sin\alpha_3}; \qquad \frac{n_3}{n_4}=\frac{\sin\alpha_3}{\sin\alpha_4} \ldots$ 
 vagyis 
 $\frac{n_1}{\sin\alpha_1}=\frac{n_2}{\sin\alpha_2}=\frac{n_3}{\sin\alpha_3}=\ldots=\frac{n_k}{\sin\alpha_k}=\text{állandó}.$ 
 Itt $n_i$ az $i$-edik réteghez tartozó törésmutató, $\alpha_i$ pedig a fénysugár beesési szöge az $i$-edig réteg határán. Ezek szerint 
 $n(z)=\text{állandó}\cdot \sin\alpha(z),$ 
 és mivel az $x$ tengelynél $n(0)=n_0$ és $\alpha(0)=90^\circ$, felírhatjuk, hogy 
 $n(z)=n_0\sin\alpha(z).$ 
 A feladat szövege szerint a fénysugár pályája parabolaív, amelynek egyenlete 
 $z(x)=kx^2$ 
 alakban adható meg, ahol $k$ egy (most még ismeretlen) állandó. A parabola ismert tulajdonsága, hogy az érintőjének meredeksége kétszer nagyobb, mint az adott pont és a parabola csúcspontja közötti szelő meredeksége. Ezt differenciálszámítással láthatjuk be, vagy egy ismert mechanikai analógiát felhasználva (az egyenletesen gyorsuló mozgás pillanatnyi sebességének és átlagsebességének összehasonlításából) kaphatjuk meg. 
 A fenti egyenlettel megadott parabola meredeksége tehát 
 $\tan(90^\circ-\alpha)=\cot\alpha=\frac{kx^2}{2x}=2kx=2\sqrt{kz}.$ 
 Másrészt 
 $\sin\alpha=\frac{1}{1+\cot^2\alpha},$ 
 tehát 
 $n(z)\cdot \frac{1}{1+\cot^2\alpha}=n_0, \qquad n(z)=n_0 \sqrt{1+4kz}.$ 
 Ha $z=h$, akkor $n=\sqrt{2}n_0,$ ahonnan 
 $n_0 \sqrt{1+4kh}=\sqrt{2}n_0,\qquad 1+4kh=2,\qquad k=\frac{1}{4h}.$ 
 A keresett összefüggés tehát 
 $n(z)=n_0\sqrt{1+\frac{z}{h}}.$

![solution figure](../../raw_html/komal_figures/komal-P5066-sol-fig1.gif)
