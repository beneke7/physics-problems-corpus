---
id: komal-P4791
source: komal
language: hu
translated: false
problem: komal-P4791
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 A kazánban lévű víz nyomása nagyobb a légköri nyomásnál, emiatt a víz forráspontja $120\,^\circ$C-nál magasabb. 1,3 bar túlnyomáson (2,3 bar nyomáson) például a forráspont $125\,^\circ$C, célszerű tehát olyan hőmérőt alkalmazni, ami még ekkora (vagy ehhez közeli) hőmérsékleteket is mérni tud.
 A furcsa zúgó hangot a csővezetékben keletkező gőzbuborékok képződése, illetve ezek ,,összeroppanása'', tehát a víz kezdődő forrása okozhatja. A forrás $80\,^\circ$C-on ott indulhat meg, ahol – valamilyen ok miatt – a víz nyomása lecsökken az ezen hőmérséklethez tartozó telített gőz nyomására, ami táblázati adatok szerint 0,47 bar.
 A csövekben keringő víz nyomása ott csökkenhet le, ahol megnő az áramlás sebessége. A Bernoulli-törvény szerint egy vízszintes csődarabban érvényes, hogy
 $p_1+\varrho\frac{v_1^2}{2}=p_2+\varrho\frac{v_2^2}{2},$
 ahol $\varrho$ a víz sűrűsége, $p_{1,2}$ a nyomása, $v_{1,2}$ pedig az áramlás sebessége.
 Megjegyzés. A Bernoulli-törvény a tömegpontok mechanikából jól ismert munkatétel áramló folyadékokra történő alkalmazása. Ha egy csődarabba $A_1$ keresztmetszetű részen (időben állandóan) $v_1$ sebességgel áramlik be a $\varrho$ sűrűségű folyadék, $A_2$ keresztmetszetű részen pedig $v_2$ sebességgel áramlik ki onnan, akkor $\Delta t$ idő alatt $\varrho A_1v_1\Delta t$ tömegű anyag folyik be a csődarabba, illetve $\varrho A_2v_2\Delta t$ tömegű anyag folyik ki. Ezek természetesen megegyeznek, vagyis fennáll, hogy $A_1v_1=A_2v_2$. A folyadékra a csődarab végein $A_1p_1$, illetve $A_2p_2$ erő hat, a munkatétel tehát így írható fel:
 $A_1p_1\cdot v_1\Delta t-A_2p_2\cdot v_2\Delta t= \varrho A_2v_2\Delta t \frac{v_2^2}{2}- \varrho A_1v_1\Delta t \frac{v_1^2}{2}. $
 Ebből egyszerűsítés és átrendezés után a Bernoulli-törvény fentebb megadott alakja következik.
 A megadott és azokból kiszámítható adatok szerint $\Delta p\approx 1{,}7$ bar, tehát az áramlás sebessége a forrás megindulásának helyén
 $v_2=\sqrt{v_1^2+\frac{2\Delta p}{\varrho}}\approx 19~\frac{\rm m}{\rm s}.$
 Ez a cső többi részeiben keringő víz sebességének kb. 6,3-szorosa.
 A megnövekedett áramlási sebesség helyén a cső keresztmetszete a többi rész keresztmetszetének mintegy $\tfrac16$-a, az vízköves (vagy egyéb eredetű) lerakódás tehát a cső keresztmetszetének több, mint 80 százalékát zárta el.
