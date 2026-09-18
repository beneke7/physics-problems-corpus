---
id: komal-P4837
source: komal
language: hu
translated: false
problem: komal-P4837
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 Ha $p^*$ ,,elegendően nagy'' (ennek pontos jelentését később tisztázzuk), akkor a ferde szakasz meredekségének abszolút értéke (vagyis $\frac{p^*-p_0}{0{,}3\,V_0}$) nagyobb, mint az adiabaták meredekségének abszolút értéke. Ilyenkor a gáz a ferde szakaszon biztosan nem vesz fel hőt. Ugyancsak nincs hőfelvétel az izobár összehúzódás során, tehát a gáz hőfelvétele teljes egészében az izochor melegítésnél történik. Ennek nagysága (ciklusonként)
 $Q_\text{fel}=\Delta E=\frac32 \left(p^*-p_0\right) V_0.$
 (Kihasználtuk, hogy az ideális nemesgázok belső energiája $E=\frac32 pV.$) Másrészt a ciklusonként végzett munka a $p-V$ diagramon látható háromszög területével egyenlő:
 $W=\frac12 \left(p^*-p_0\right)\cdot 0{,}3 V_0,$
 és így a gép hatásfoka a vizsgált körülmények között
 $\eta=\frac{W}{Q_\text{fel}}=\frac{0{,}15}{1{,}5}=10\%.$
 Érdekes, hogy ez a hatásfok független $p^*$-tól.
 Ha $p^*$ nem elég nagy, akkor a körfolyamat során a ferde szakasz bizonyos részén (vagy esetleg annak egészén) is történik hőfelvétel. Ekkor a termodinamikai hatásfok biztosan kisebb, mint $10\%$, hiszen a végzett munka
 $W=\frac12 \left(p^*-p_0\right)\cdot 0{,}3 V_0,$
 a felvett hő pedig
 $Q_\text{fel}> Q_\text{fel}^\text{(izochor)}=\frac32 \left(p^*-p_0\right) V_0,$
 és így a hatásfok
 $\eta=\frac{W}{Q_\text{fel}}<\frac{W}{Q_\text{fel}^\text{(izochor)}}=10\%.$
 Határozzuk meg, milyen nagynak kell lennie $p^*$-nak, hogy $V$ növekedtével az adiabaták kevésbé meredeken csökkenjenek, mint ahogy a derékszögű háromszög átfogója mentén csökken a $p(V)$ függvény. Az idézett cikk szerint az adiabata meredeksége (nemesgázokra):
 $\frac{\Delta p}{\Delta V}=-\frac53\frac{p}{V}.$
 Így annak feltétele, hogy a ferde szakaszon nincs hőfelvétel:
 $\frac53\frac{p}{V}<\frac{p^*-p_0}{0{,}3V_0}.$
 Ennek az egyenlőtlenségnek a háromszög felső csúcsában is fenn kell állnia:
 $\frac53\frac{p^*}{V_0}<\frac{p^*-p_0}{0{,}3V_0},$
 vagyis ha $p^*>2p_0$. Könnyű belátni, hogy ha ez teljesül, akkor a ferde szakasz semelyik részén nem történik hőfelvétel.
 Összefoglalva az eredményt: a körfolyamat hatásfoka legfeljebb 10 százalék lehet, és ezt az értéket el is éri minden olyan esetben, amikor $p^*\ge 2p_0$.
