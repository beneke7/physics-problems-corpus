---
id: komal-P5183
source: komal
language: hu
translated: false
problem: komal-P5183
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 Jelöljük a rúd pillanatnyi elmozdulását $x(t)$-vel, az áramerősséget $I(t)$-vel, és a tekercs végpontjai közötti feszültséget $U(t)$-vel! A gravitációs helyzeti energia csökkenése megegyezik a rúd mozgási energiájának és a tekercs mágneses energiájának növekedtével:
 $(1)$ $mgx(t)=\frac{L}{2}I(t)^2+\frac{m}{2}v(t)^2.$
 Igaz továbbá, hogy a rúdban indukálódó $U(t)=B\ell v(t)$ feszültség a tekercs végpontjai közötti feszültség ugyanakkora:
 $B\ell v(t)=L\frac{\Delta I(t)}{\Delta t},$
 amit $v(t)=\frac{\Delta x(t)}{\Delta t}$ miatt így is felírhatunk:
 $\frac{\Delta (LI -B\ell x)}{\Delta t}= 0, \qquad \text{azaz} \qquad LI(t)-B\ell x(t)=\text{állandó}.$
 Az állandó értéke nulla, hiszen a rúd elengedésekor $I(0)=v(0)=0.$ Látjuk tehát, hogy az áramkör áramerőssége arányos a rúd elmozdulásával (süllyedésével):
 $(2)$ $I(t)=\frac{B\ell}{L}\, x(t).$
 Ezt visszaírva (1)-be a
 $(3)$ $v^2=2gx-\frac{B^2\ell^2}{mL}\,x^2$
 kvadratikus kifejezést kapjuk. Ebből leolvasható, hogy a rúd legnagyobb elmozdulása (ahol a sebesség ismét nullává válik):
 $x_\text{max}=\frac{2mgL}{B^2\ell^2}.$
 Az áramerősség legnagyobb értékét a legnagyobb elmozdulásból (2) alapján számíthatjuk ki:
 $I_\text{max}=\frac{2mg}{B\ell}.$
 A rúd legnagyobb sebessége a (3) kvadratikus kifejezés maximális értéke:
 $v_\text{max}=\frac{g}{B \ell }\sqrt{mL}.$
 (Ezt $v(x)$ teljes négyzetté alakításával vagy szélsőérték-számítással, esetleg a parabola tulajdonságainak kihasználásával láthatjuk be.) A legnagyobb indukált feszültség értéke:
 $U_\text{max}=B\ell v_\text{max}=g\sqrt{mL}.$

 Megjegyzés. Nem tartozott a feladat kérdései közé, hogy megadjuk a rúd elmozdulásának, az indukálódó feszültségnek és az áramerősségnek időbeli változását. Ezt – elemi eszközökkel – úgy tehetjük meg, hogy felismerjük a feladatban szereplő folyamatok és a (kezdetben nyújtatlan) rugóra akasztott test harmonikus rezgőmozgása közötti hasonlóságot. Így beláthatjuk, hogy
 $x(t)=\frac{mgL}{B^2\ell^2} (1-\cos \omega t),\qquad v(t)=
\frac{g\sqrt{mL}}{B \ell}\,\sin\omega t,$
 továbbá
 $U(t)= {g\sqrt{mL}} \,\sin\omega t \qquad \text{és} \qquad I(t)=\frac{mg}{B\ell}(1-\cos \omega t); $
 ahol $\omega=\frac{B\ell}{\sqrt{mL}}$.
