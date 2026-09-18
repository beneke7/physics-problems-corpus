---
id: komal-P4969
source: komal
language: hu
translated: false
problem: komal-P4969
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 A Biot–Savart-törvény szerint számolható a nagyobb tekercs $B(x)$ mágneses indukciója a szimmetriatengely mentén. (Ez a képlet a ,,Négyjegyűben'' is megtalálható.)
 $B(x)=\frac{\mu_0}2
\frac{I_1N_1R^2}{\left(x^2+R^2\right)^{3/2}}.$
 A kis tekercs áramjárta meneteire ható eredő erő – a tengelyes szimmetria miatt – csakis a két tekercs közös szimmetriatengelyével párhuzamos lehet. Ilyen erőt a mágneses tér sugár irányú (a szimmetriatengelyre merőleges) $B_r$ indukcióvektor-komponense hoz létre:
 $F=B_r\cdot N_2I_2\cdot 2\pi r.$
 $B_r$ nagysága abból a feltételből határozható meg, hogy a mágneses indukciómező forrásmentes (hiszen mágneses töltések nincsenek). Ha elképzelünk egy $r$ sugarú, kicsiny $\Delta h$ magasságú hengert a kis tekercs helyén, abba az egyik alapkörén $r^2\pi B(h)$ számú erővonal lép be, a távolabbi alapkörén $r^2\pi B(h+\Delta h)$ számú erővonal lép ki, és a palástján további $2r\pi \Delta h\cdot B_r$ számú erővonal lép ki. A mágneses indukció forrásmentességének feltétele:
 $r^2\pi B(h)=r^2\pi B(h+\Delta h)+2r\pi \Delta h\cdot B_r,$
 vagyis
 $B_r=\frac{r}{2}\frac{B(h+\Delta h)-B(h)}{\Delta h}.$
 A fenti képletben szereplő tört az $(1+\varepsilon)^n\approx 1+n\varepsilon$ ($\varepsilon\ll 1$) közelítő formula segítségével, esetleg deriválással számolható:
 $\frac{B(h+\Delta h)-B(h)}{\Delta h}\approx B'(x)\vert _{(x=h)}=-\mu_0\frac32 \,
\frac{ I_1N_1R^2h}{ \left(h^2+R^2\right)^{5/2}}.$
 Így végül a keresett erő kifejezése:
 $F=\mu_0\frac{3\pi }2R^2r^2I_1I_2N_1N_2\frac{h}{(h^2+R^2)^{5/2}}.$
