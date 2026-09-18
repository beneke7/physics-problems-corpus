---
id: komal-P5505
source: komal
language: hu
translated: false
problem: komal-P5505
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 A két képet a nagyító két felületén visszaverődött fénysugarak hozzák létre. A lencse felső felülete domború tükörnek tekinthető, az általa létrehozott kép egyenes állású látszólagos kép a lencse alatt. A másik képet létrehozó sugarak először áthaladnak a lencsén, visszaverődnek a leképezés szempontjából homorú tükörnek tekintendő alsó felületen, majd újra átmennek a nagyító üvegén. Az így keletkező kép fordított állású valódi kép a lencse fölött. A fényképen nem látszik, hogy melyik kép hol helyezkedik el, de egy modell-számítással el tudjuk dönteni, melyik lehet a valódi, illetve a látszólagos kép. Legyen a felületek sugara $R$, a nagyító fókusztávolsága $f$, és tegyük fel, hogy a két leképezésben résztvevő sugarak kis szöget zárnak be a nagyító optikai tengelyével! Jelöljük a csillár távolságát a lencsétől $t$-vel, a két képtávolságot pedig $k_1$-gyel és $k_2$-vel! A lencse alatt keletkező virtuális kép esetében (igazodva a szokásos előjel konvencióhoz, és felhasználva, hogy a gömbtükrök fókusztávolsága $R/2$)
 $\frac{1}{t}-\frac{1}{\left\vert k_1\right\vert}=-\frac{2}{R}.
$
 A másik kép esetén használnunk kell, hogy a fény útjába eső leképező eszközök dioptriái (a fókusztávolságok reciprokai) összeadódnak, és hogy az üvegen kétszer is átmegy a fény.
 $\frac{1}{t}+\frac{1}{k_2}=\frac{2}{R}+\frac{2}{f}.
$
 A két egyenletet összeadva és átrendezve
 $\left\vert k_1\right\vert-k_2=\left(\left\vert k_1\right\vert k_2\right)\left(\frac{2}{f}-\frac{2}{t}\right).
$
 Mivel a csillár távolsága jóval nagyobb, mint a nagyító fókusztávolsága, azaz $t\gg f$, a jobb oldal biztos pozitív, így
 $\left\vert k_1\right\vert>k_2.
$
 Ugyanígy aránylik egymáshoz a megfelelő két kép nagysága is, azaz
 $K_1>K_2,
$
 és ez igaz akkor is, ha a leképezésben részt vevő sugarak – mint az esetünkben – nagyobb szöget zárnak be a nagyító tengelyével. Tehát a lencse alatt keletkező egyenes állású, látszólagos kép a nagyobb, és ez mutatja helyesen, hogyan állnak a csillár karjai.
