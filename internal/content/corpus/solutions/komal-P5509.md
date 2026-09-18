---
id: komal-P5509
source: komal
language: hu
translated: false
problem: komal-P5509
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**

 $a)$ A $v_0$ kezdősebességgel $\alpha$ szögben kilőtt lövedék emelkedési magassága
 $y_0=\frac{v_0^2}{2g}\sin^2\alpha,$
 a lőtávolság pedig
 $x_0=\frac{2v_0^2}{g}\sin\alpha\,\cos\alpha.$
 Ez a két távolság akkor egyezik meg, ha
 $\tan\alpha=4, \qquad \text{vagyis} \qquad \alpha\approx76^\circ.$

 $b)$ Ha $v_0=10$ m/s, akkor
 $x_0=y_0=\frac{8}{17} \frac{v_0^2}{g}\approx 4{,}8\ \rm m.$

 $c)$ A pálya legmagasabb pontjánál a lövedék sebessége a kilövési sebességvektor vízszintes komponensének nagyságával egyezik meg, vagyis
 $v_1=v_0\cos\alpha=\frac{v_0}{\sqrt{17}}\approx 2{,}43\ \frac{\rm m}{\rm s}.$
 Ha a lövedék (parabola alakú) pályáját egy kicsiny darabon $R_1$ sugarú körrel (az ún. simulókörrel ) közelítjük, akkor a lövedék (centripetális) gyorsulása $v_1^2/R_1$ nagyságú és függőlegesen lefelé irányuló. Ez a gyorsulás a nehézségi gyorsulással egyezik meg, hiszen a lövedék szabadon mozog, csak az $mg$ nehézségi erő hat rá. Ezek szerint
 $\frac{v_0^2\cos^2\alpha}{R_1}=g,$
 vagyis
 $R_1=\frac{v_0^2}{17g}\approx 60\ \rm cm.$
 Ekkora a pálya görbületi sugara a pálya legmagasabb pontjánál.
 A kilövés helyénél a sebesség $v_0$, és ha a simulókör sugara $R_2$, akkor a mozgás irányára merőleges ,,centripetális gyorsulás'' a nehézségi gyorsulásnak az érintőre merőleges vetületével egyezik meg:
 $\frac{v_0^2}{R_2}=g\cos\alpha=\frac{g}{\sqrt{17}}.$
 Ennek megfelelően a görbületi sugár
 $R_2=\sqrt{17}\frac{v_0^2}{g}\approx 42\ \rm m.$

 Megjegyzés. A görbületi sugarakat differenciálszámítás felhasználásával ,,mechanikusan'' (fizikai megfontolások nélkül) is meghatározhatjuk.
 A lövedék pályájának egyenlete
 $y=x\tan\alpha-\frac{g}{2v_0^2\cos^2\alpha}x^2,$
 vagyis $\alpha$ ismert értéke mellett
 $y=4x-\frac{17}{2}\frac{g}{v_0^2}x^2.$
 A pálya tetőpontjához $x_1=\frac{4}{17}\frac{v_0^2}{g}$, a kilövés helyéhez pedig $x_2=0$ koordináta tartozik.
 Matematika könyvekben vagy az interneten keresgélve megtalálhatjuk, hogy egy $y(x)$ függvénnyel megadott síkgörbe tetszőleges pontjához tartozó görbületi sugár így számítható ki:
 $R=\frac{\left(1+y'^2\right)^{3/2}}{\left\vert y''\right\vert},$
 ahol $y'$ a függvény első, $y''$ pedig a második deriválat jelöli. Esetünkben
 $y'(x)=4-17\frac{g}{v_0^2}x, \qquad \text{illetve}\qquad y''(x)\equiv -17\frac{g}{v_0^2},$
 vagyis
 $y'(x_1)=0; \qquad y'(x_2)=4; \qquad y''(x_1)=y''(x_2)=-17\frac{g}{v_0^2}.$
 Ennek megfelelően az $x_1$ pontban a görbületi sugár
 $R_1=\frac{v_0^2}{17 g},$
 a kilövési pontban pedig
 $R_2=\frac{v_0^2}{17 g}\cdot (1+16)^{3/2}=\sqrt{17}\frac{v_0^2}{g}.$
