---
id: komal-G868
source: komal
language: hu
translated: false
problem: komal-G868
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 Ha az 1-3 pontokra kapcsoljuk az $U$ feszültséget, akkor az $xR$ ellenálláson nem folyik áram, az eredő ellenállás pedig $R$ lesz, vagyis a hőteljesítmény $x$-től függetlenül
 $P_{1-3}=\frac{U^2}{R}.$
 Ha a 2-4 pontokra kötjük a tápfeszültséget, akkor az olyan, mintha az $xR$ ellenállással egyetlen $R$ ellenállást kapcsolnánk párhuzamosan. Ezek eredője
 $\frac{x}{1+x}R,$
 tehát a teljes hőteljesítmény
 $P_{2-4}=\frac{U^2(1+x)}{xR}.$
 Ha bármely más csúcspárra kötjük az $U$ feszültséget, akkor az elrendezés szimmetriája miatt mindig ugyanakkora hőteljesítményt kapunk. Vizsgáljuk mondjuk az 1-2 csúcspárt. Ezekben az esetekben $2R$ ellenállás van párhuzamos kötve az $xR$ ellenállással, ami eredőben
 $\frac{2x}{2+x}R$
 ellenállást ad, amihez még egy $R$ ellenállás jön sorosan:
 $\frac{2x}{2+x}R+R=\frac{3x+2}{2+x}R.$
 Végül ehhez még egy ellenállás van kapcsolva párhuzamosan:
 $\frac{\frac{3x+2}{2+x}}{\frac{3x+2}{2+x}+1}R=\frac{3x+2}{4x+4}R,$
 tehát a teljes hőteljesítmény:
 $P_{1-2}=\frac{(4x+4)U^2}{(3x+2)R}.$

 Megjegyzés. Ha $x\rightarrow\infty$, akkor $P_{2-4}\rightarrow P_{1-3}=\frac{U^2}{R}$, ami $x$-től független, míg $P_{1-2}\rightarrow\frac{4U^2}{3R}$.
 Ha $x\rightarrow 0$, akkor $P_{2-4}\rightarrow\infty$, míg $P_{1-2}\rightarrow\frac{2U^2}{R}$.
