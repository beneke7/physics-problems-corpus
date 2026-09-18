---
id: komal-P5045
source: komal
language: hu
translated: false
problem: komal-P5045
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**I. megoldás.**
 A Holdon a nehézségi gyorsulás a földi érték egyhatoda: $g'\approx 1{,}6~\rm m/s^2$. Jelöljük a teljes esési magasságot $h$-val, az esés teljes idejét $T$-vel, és az utolsó másodperc hosszát (általánosan) $t_0$-lal.
 A következő egyenleteket írhatjuk fel:
 $h=\frac{g'}{2}T^2,$
 $h-\frac{h}{n}=\frac{g'}{2}(T-t_0)^2.$
 A két egyenlet hányadosából
 $\frac{1}{n}T^2-2Tt_0+t_0^2=0$
 következik, amelynek formális megoldása
 $T=\left(n\pm\sqrt{n^2-n}\right)t_0.$
 Ha a gyökjel előtti előjelet negatívnak választanánk, $T<t_0$ értéket kapnánk, ami ellentmond a feladat szövegének. A helyes megoldás tehát az esés idejére
 $T=\left(n+\sqrt{n^2-n}\right)~ \text{másodperc},$
 az esési magasságra pedig
 $h=\frac{g't_0^2}{2}\left( n+\sqrt{n^2-n} \right)^2\approx 0{,}8\cdot \left( n+\sqrt{n^2-n} \right)^2~ \text{méter}.$

**II. megoldás.**
 Használjuk az I. megoldás jelöléseit!
 A test sebessége az utolsó másodperc kezdetekor
 $v_1=\sqrt{ {2g'h}\left(1-\frac{1}{n}\right) },$
 az utolsó másodperc végén (a talajra érkezéskor) pedig
 $v_2=\sqrt{ {2g'h} }.$
 Fennáll, hogy
 $v_2-v_1=g't_0,$
 ahonnan a
 $h=\frac{g't_0^2}{2}\left( n+\sqrt{n^2-n} \right)^2\approx 0{,}8\cdot \left( n+\sqrt{n^2-n} \right)^2~ \text{méter} $
 eredményt kapjuk. Innen az esés ideje is könnyen kiszámítható (lásd az I. megoldás megfelelő képletét).

 Megjegyzés. A kapott összefüggések mértékegységre nézve csak akkor helyesek, ha a métert, illetve a másodpercet is tartalmazzák. Ezek nélkül a megoldás hiányos.
