---
id: komal-P5697
source: komal
language: hu
translated: false
problem: komal-P5697
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 Határozzuk meg a vízszinteshez képest $\alpha$ szögben $v_0$ kezdősebességgel kilőtt lövedék pályájának tetőpontját, annak a kilövés helyétől vízszintes irányban mért $x$, illetve függőleges irányban mért $y$ nagyságú koordinátáit.
 A mozgás függőleges irányban egyenletesen lassuló, vízszintes irányban egyenletes. A függőleges mozgás $v_0\sin\alpha$ kezdősebessége $t=\frac{v_0\sin\alpha}{g}$ idő alatt csökken nullára, az emelkedés magassága tehát
 $y=v_0t\sin\alpha-\frac{g}{2}t^2=\frac{v_0^2\sin^2\alpha}{2g}.$
 A lövedék vízszintes irányú elmozdulása $t$ idő alatt
 $x=v_0t\cos\alpha=\frac{v_0^2}{g}\sin\alpha\,\cos\alpha.$
 Ha a $v_0^2/(2g)$ távolságot (ami éppen a függőlegesen kilőtt lövedék emelkedési magassága) $H$-val jelöljük, akkor a különböző $\alpha$ szögekhez tartozó, de azonos függőleges síkban található pályák tetőpontjainak koordinátái így írhatók fel:
 $x=H\sin2\alpha \qquad \text{és}\qquad y=\frac{H}{2}(1-\cos2\alpha).$
 Innen $\alpha$ kiküszöbölése után kapjuk, hogy
 $\frac{x^2}{H^2}+\frac{(y-H/2)^2}{(H/2)^2}=1.$
 Ez egy olyan ellipszis egyenlete, amelynek (vízszintes) nagytengelye $2H$, (függőleges) kistengelye $H$, és a középpontja $H/2$ magasan van a kilövés helye fölött.
 Amennyiben a lövedékek pályájának függőleges síkja bármilyen helyzetű lehet, a felvillanási pontok egy forgási ellipszoid felületén helyezkednek el, amely a fentebb megadott ellipszisnek az $y$ tengely körüli megforgatásából kapható.
