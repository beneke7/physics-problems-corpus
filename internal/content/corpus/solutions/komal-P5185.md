---
id: komal-P5185
source: komal
language: hu
translated: false
problem: komal-P5185
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 Jelöljük az első kísérletben szereplő korong tömegét $m$-mel, a fékezőerő képletében szereplő arányossági tényezőt pedig $\gamma$-val. A korong mozgásegyenlete:
 $m\frac{\Delta v}{\Delta t}= -\gamma v=-\gamma \frac{\Delta x}{\Delta t}$
 (ahol $v$ a pillanatnyi sebességet, $x$ pedig a pillanatnyi elmozdulást jelöli). Ezek szerint
 $\frac{m\Delta (v)}{\Delta t}+\frac{\gamma \Delta x }{\Delta t}\equiv\frac{\Delta (mv+\gamma x)}{\Delta t}=0,$
 vagyis az $mv+\gamma x$ kifejezés időben állandó. Az induláskor $v=v_0$ és $x=0$, a megálláskor $v=0$ és $x=s=50~\rm cm$, tehát
 $mv_0=\gamma s,\qquad \text{vagyis}\qquad \gamma=\frac{mv_0}{s}.$
 Tekintsük most azt az esetet, amikor az $m$ tömegű, $v_0/2$ sebességű test rugalmasan ütközik az $M$ tömegű, álló testtel. Az energia- és a lendületmegmaradás törvényéből következik, hogy a korongok ütközés utáni sebessége (mindegyiket $v_0/2$ irányában tekintjük pozitívnak):
 $u_m=\frac{m-M}{m+M}\cdot \frac{v_0}{2}, \qquad \text{illetve}\qquad u_M= \frac{2m}{m+M}\cdot \frac{v_0}{2}.$
 Ezeket a ,,kezdősebességeket'' a korongok tömegével súlyozva megkapjuk a megállásukig megtett útjukat:
 $s_m=\frac{m u_m}{\gamma}=\frac{m-M}{m+M}\,\frac{s}{2},$
 valamint
 $s_M=\frac{M u_M}{\gamma}=\frac{2M }{m+M}\,\frac{s}{2}.$
 $a)$ A két korong akkor áll meg éppen egymás mellett, ha $s_m=s_M$, ez pedig $m=3M$ esetén teljesül.
 $b)$ Ha $m=3M$, akkor
 $s_m=s_M=\frac{s}{4}=12{,}5~\rm cm.$

 Megjegyzések. Belátható, hogy mindkét korong sebessége az idő exponenciális függvénye szerint tart nullához, tehát (ha valóban csak a feladatban szereplő fékezőerő hat rájuk) véges idő alatt sohasem állhatnak meg.
