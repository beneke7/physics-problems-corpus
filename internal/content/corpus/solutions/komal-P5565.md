---
id: komal-P5565
source: komal
language: hu
translated: false
problem: komal-P5565
figure_files: [komal-P5565-sol-fig1.png]
provenance_note: "KöMaL official solution (Hungarian)"
---

**I. megoldás.**
 Legyen a lánc tömege $m$, a hossza $\ell$. Tekintsük azt a helyzetet, amelynél a lánc szabad vége $x$ távolságra került a rögzített láncvégtől. A lánc mozgásban lévő része ekkor $\frac{\ell-x}{2}$, az álló része pedig $\frac{\ell+x}{2}$ hosszúságú. A mozgásban lévő rész szabadon esik, benne nem ébred feszítőerő. 
 A szabadon eső láncdarab elmozdulása $t$ idő alatt 
 $(1)$ $x(t)=\frac{g}{2}t^2,$ 
 sebessége pedig 
 $(2)$ $v(t)=gt=\sqrt{2gx(t)}.$ 

 A láncot feszítő erő a jobb oldali részben nulla, a bal oldali (már megfeszült) láncdarabban pedig a felfüggesztési ponttól mért távolsággal arányosan csökken. (Ez az álló láncdarabra felírható erőegyensúly egyenletéből következik.) A feszítőerő tehát a bal oldali láncdarab felső végénél a legnagyobb. Jelöljük ezt az erőt (amelyet a mennyezet fejt ki a láncra) $K$-val. Amennyiben a mozgás teljes ideje alatt $K\le 2mg$, akkor a lánc nem fog elszakadni. 
 Számítsuk ki, hogy mekkora a lánc $I$ impulzusa $t$ idővel az elengedés után. Ennek a mennyiségnek időegységenkénti megváltozása, vagyis az $I'(t)$ derivált a láncra ható külső erők eredőjével ($K$ és az $mg$ nehézségi erő előjeles összegével) egyezik meg. 
 Mivel a láncdarab tömege a hosszával arányos, a mozgásban lévő rész impulzusa 
 $I(t)=\frac{m}{\ell}\cdot \frac{\ell-x(t)}{2}\cdot v(t),$ 
 vagyis (1) és (2) behelyettesítésével 
 $I(t)=\frac{mg}{2}t-\frac{mg^2}{4\ell}t^3.$ 
 A Newton-féle mozgásegyenlet szerint 
 $mg-K(t)=I'(t)=\frac{mg}{2}-\frac{3mg^2}{4\ell}t^2,$ 
 vagyis 
 $K(t)=\frac{mg}{2}+\frac{3mg^2}{4\ell}t^2.$ 
 A láncot feszítő erő a rögzített végpontjánál indulásakor $K(0)=\frac{mg}{2}$, az idő múltával $K(t)$ egyre nagyobb lesz, és a maximális értékét a lánc teljes kiegyenesedésekor, $T=\sqrt{\frac{2\ell}{g}}$ időpillanatban éri el. 
 Mivel 
 $K(T)=\frac{mg}{2}+\frac{3mg^2}{4\ell}\,\frac{2\ell}{g}=2mg$ 
 kevesebb, mint a lánc teherbírása, a lánc biztosan nem szakad el. 

**II. megoldás.**
 Kövessük az I. megoldás jelöléseit! Mialatt az $x$ távolság egy kicsiny $\Delta x$ értékkel megnő, a mozgásban lévő láncdarab tömege $\Delta m=\frac{\Delta x}{2\ell}m$ értékkel változik (csökken). Ekkora tömegű láncdarab sebessége $v=\sqrt{2gx}$-ről (rugalmatlan ütközések miatt) nullára csökken, tehát az impulzusváltozása (amit lefelé tekintünk pozitívnak) 
 $\Delta I=\Delta m\,v=\frac{mv}{2\ell}\,\Delta x$ 
 értékkel csökken. Ezt a változást a lánc másik fele által kifejtett 
 $K^*=\frac{\Delta I}{\Delta t}$ 
 nagyságú, felfelé irányuló erő hozza létre. ($\Delta t=(\Delta x)/v$ a kicsiny láncdarab lefékeződésének ideje.) Így tehát 
 $K^*=\frac{mv}{2\ell}\,\frac{\Delta x}{\Delta t}=\frac{mv^2}{2\ell}=mg\,\frac{x}{\ell}.$ 
 Ennek az erőnek a bal oldali láncdarabra ható ellenereje ugyanekkora nagyságú, de lefelé irányuló erő. 
 A bal oldali láncdarabra ható erők eredője nulla: 
 $K-mg\,\frac{\ell+x}{2\ell}-K^*=0,$ 
 vagyis 
 $K(x)=mg\,\frac{\ell+x}{2\ell}+\frac{x}{\ell}\,mg=\frac{mg}{2}\left(1+3\,\frac{x}{\ell}\right).$ 
 Mivel 
 $x\le\ell, \qquad K\le K_\text{max}=2mg,$ 
 a lánc a mozgása során nem szakad el. 
 Megjegyzés. Egy láncot kétféleképpen is modellezhetünk. Ha a felső végei kicsit távolabb vannak egymástól, és a lánc nagyon hajlékony, a láncban végig húzófeszültség lesz, és így a leeső rész gyorsulása $g$-nél nagyobb lehet. Ilyenkor a rendszer konzervatív. Ha a láncot közelítjük az egydimenziós esethez, elromlik a konzervativitás, a kanyarulatnál lévő láncszemek rugalmatlanul ütköznek, egy-egy láncszem impulzusa hirtelen nullává válik, és ez rántja meg a már nem mozgó részt. A feladat megoldása ezt a második értelmezést követi: az energia disszipálódik, a leeső láncdarab feszültségmentes, és így szabadon esik. (G. P.)

![solution figure](../../raw_html/komal_figures/komal-P5565-sol-fig1.png)
