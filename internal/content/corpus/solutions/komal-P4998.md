---
id: komal-P4998
source: komal
language: hu
translated: false
problem: komal-P4998
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 Ha a vízsugár beesési szöge $\alpha$, törési szöge $\beta$, akkor fennáll: $\sin\beta=\tfrac34 \sin\alpha$. A fénysugár irányváltozása (az óramutató járásával megegyező irányban) az első törésnél $\alpha-\beta$, mindegyik belső visszaverődésnél $180^\circ-2\beta$, és a vízcseppből való kilépésnél ismét $\alpha-\beta$. A megadott feltétel szerint a fénysugár egyszer ,,körbefordul'', tehát
 $(\alpha-\beta)+3(180^\circ-2\beta)+(\alpha-\beta)=360^\circ,$
 vagyis
 $4\beta=\alpha+90^\circ,$
 így
 $\cos(4\beta)=\cos(\alpha+90^\circ)=-\sin\alpha=-\frac43\sin\beta.$
 (Az utolsó lépésnél felhasználtuk a törési törvényt.)
 A $\cos(4\beta)+ \tfrac43\sin\beta=0$ trigonometrikus egyenletet akár egy zsebszámológéppel, próbálgatással is megoldhatjuk. (Figyelembe kell vegyük, hogy $\sin\beta\le \frac{1}{n}=\frac{3}{4}$, vagyis $\beta$ legfeljebb $48{,}6^\circ$ lehet.) Az eredmény: $\beta=34{,}9^\circ$, és ennek megfelelően a fénysugár belépési szöge: $\alpha=49{,}8^\circ$.

 Megjegyzés. Ha a háromszor visszaverődő és kétszer megtörő fénysugár irányváltozására nem $360^\circ$-ot, hanem valamekkora más $\varphi$ szöget írunk elő, akkor bizonyos $\varphi$ szögekre a feladatnak nincs megoldása. A határeset $\varphi_0=41{,}4^\circ$, ez a harmadrendű szivárvány látószöge felének felel meg.
