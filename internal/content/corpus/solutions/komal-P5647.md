---
id: komal-P5647
source: komal
language: hu
translated: false
problem: komal-P5647
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 Jelöljük a bojlerben lévő víz és a környezet hőmérsékletének különbségét $T$-vel. A víz termikus energiájának megváltozása arányos a hőmérséklet-változással: $\Delta E=C\,\Delta T$, az időegységenként leadott hő pedig arányos $T$-vel. Ebből a két összefüggésből kapjuk, hogy a használaton kívüli, kikapcsolt bojler vízhőmérsékletének változási sebessége (csökkenése) $T$-vel arányos:
 $(1)$ $\frac{\Delta T}{\Delta t}=-\lambda T(t),$
 ahol $\lambda$ egy (a bojler hőkapacitásától és a hőleadási tényezőtől függő) állandó.
 Az (1) egyenlet ugyanolyan alakú, mint a radioaktív bomlások törvénye, a megoldás is hasonló:
 $(2)$ $T(t)=T_0\,\mathrm{e}^{-\lambda t}.$
 Itt $T_0$ a kezdeti, $t=0$ időponthoz tartozó hőmérséklet-különbség, esetünkben $60-20=40\,^\circ\mathrm{C}$. A $\lambda$ ,,bomlási állandót'' a hőmérséklet-különbség feleződésének ismert idejéből számíthatjuk ki:
 $\frac{1}{2}T_0=T_0\,\mathrm{e}^{-\lambda\cdot\textrm{7 nap}},$
 innen
 $\lambda=\frac{\ln 2}{\textrm{7 nap}}\approx 0{,}1\,\frac{1}{\textrm{nap}}.$
 Az elektromos fogyasztás $F$ költsége a melegítésre fordított energiával, az pedig a hőmérséklet-változással arányos:
 $F=k\cdot\Delta T.$
 (Ez az összefüggés még akkor is igaz, ha a villanyszámla járulékos költségeket is tartalmaz, amennyiben azok is arányosak a ténylegesen ,,elfogyasztott'' elektromos energiával.)
 A bojler egyszeri felfűtésének költsége ezek szerint
 $(3)$ $F_1=k\,T_0.$
 (A víz felmelegítése közben leadott hő sokkal kisebb, mint a felfűtés során átadott hő, hiszen a felfűtés ideje csak néhány óra, a leadott hő pedig több nap alatt lesz számottevő.)
 A $T_0$ hőmérsékletű bojler lehűlésének pillanatnyi sebessége (1) szerint $\lambda T_0$. Ez időben állandónak tekinthető, hiszen a bojler ki-be kapcsolgató termosztátja nem engedi a hőmérsékletet számottevően $T_0$ alá csökkenni. Az elektromos fogyasztás a hőveszteséget pótolja, a költsége tehát $t^*$ idő alatt
 $(4)$ $F_2=k\,\lambda T_0\,t^*.$
 (3) és (4) összevetéséből kapjuk, hogy $F_1=F_2$ akkor teljesül, ha
 $t^*=\frac{1}{\lambda}\approx 10\,\textrm{nap}.$

 Megjegyzés. Tehát ha 10 napnál tovább nem használunk melegvizet, akkor jobban megéri kikapcsolni a bojlert, és szükség esetén visszakapcsolni.
