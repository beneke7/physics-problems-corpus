---
id: komal-P5216
source: komal
language: hu
translated: false
problem: komal-P5216
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**I. megoldás.**
 Legyen a dugattyú súlya $G$, keresztmetszete $A$, az elzárt levegő térfogata kezdetben $V_0$, a végállapotban pedig (a dugattyú mozgásának megállása után) a hőmérséklet $T$, a gáztérfogat pedig $V$.
 Mivel a falak és a dugattyú jó hőszigetelő, a rendszer nem tud leadni hőt, és így az általunk végzett $W$ munka a rendszer energiáját növeli. Ez az energianövekedés egyrészt a gáz belső energiájának
 $\Delta E_\text{belső}=\frac{f}{2}nR \Delta T=\frac52 nR\left(T-T_0\right)$
 növekedését fedezi, másrészt a $\Delta x=\frac{V-V_0}{A}$ magasságnyit megemelkedett dugattyú helyzeti energiájának
 $\Delta E_\text{helyzeti}=G\frac{V-V_0}{A}$
 növekedését biztosítja:
 $W=\Delta E_\text{belső}+\Delta E_\text{helyzeti}.$
 Igaz továbbá, hogy a kezdeti állapotban is, és a végállapotban is a gáz nyomása: $p=G/A$ (hiszen a dugattyú mechanikai egyensúlyban van). A gáztörvény alapján
 $pV_0=nRT_0, \qquad pV =nRT,$
 ahonnan
 $\Delta E_\text{helyzeti}= nR\left(T-T_0\right)$
 következik.
 Ezek szerint az energia mérlegegyenlete így írható fel:
 $W=\frac52 nR\left(T-T_0\right)+ nR\left(T-T_0\right)=\frac72 nR\left(T-T_0\right),$
 és a levegő keresett hőmérséklete az új egyensúlyi helyzetben
 $T=T_0+\frac{2W}{7nR}.$
 Ez az eredmény független attól, hogy a $W$ munkát a dugattyú lassú emelésével, vagy pedig lassú lenyomásával végeztük.

**II. megoldás.**
 A rendszeren végzett munka a teljes energia megváltozásával egyenlő, és nem függ attól, hogy milyen módon hajtottuk végre az energiaváltoztatást. Ha nem fejtünk ki erőt a dugattyúra, tehát semennyi munkát nem végzünk, ellenben $Q=W$ hőt közlünk lassan a rendszerrel, az energiaviszonyok ugyanolyan mértékben változnak meg. A dugattyú állandó súlya miatt ez a folyamat izobár állapotváltozás, tehát
 $Q=W=nc^{\rm mol}_p\left(T-T_0\right),$
 ahonnan
 $W= \frac72 nR(T-T_0), \qquad \text{tehát}\qquad T=T_0+\frac{2W}{7nR}.$
 Kihasználtuk, hogy a levegő (kétatomos gáz) állandó nyomáshoz tartozó mólhője $c^{\rm mol}_p=\frac{f+2}{2}R=\frac{7}{2}R.$
