---
id: komal-G920
source: komal
language: hu
translated: false
problem: komal-G920
figure_files: [komal-G920-sol-fig1.gif]
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 Belátjuk, hogy a megoldás nem függ attól, hogy mennyi víz van kezdetben a tartályban. Ha például kezdetben a tartályban lévő víz mennyisége 1 liter, ami $60\,^\circ\mathrm{C}$-os, akkor ehhez fél liter $0\,^\circ\mathrm{C}$-os vizet kell kevernünk, hogy a keverék $40\,^\circ\mathrm{C}$-os legyen. Ebben az esetben a csap vízhozama 5 percenként fél liter. Ha megduplázzuk, vagy megháromszorozzuk a tartályban lévő kezdeti vízmennyiséget, akkor meg kell duplázni, illetve megháromszorozni a csap vízhozamát is, hogy ugyanannyi idő után ugyanakkora legyen a keverék hőmérséklete. Könnyebb konkrét számokkal dolgoznunk, ezért a megoldásban ezt az utat követjük. Az egyszerűség kedvéért legyen kezdetben a tartályban 2 liter $60\,^\circ\mathrm{C}$-os víz. Ehhez 1 liter $0\,^\circ\mathrm{C}$-os vizet kell kevernünk, hogy $40\,^\circ\mathrm{C}$-os langyos vizet kapjunk. Tehát a csap vízhozama 5 percenként 1 liter. Feltesszük, hogy jó nagy a tartály. 

 a) Ha újabb 5 perc múlva további 1 liter $0\,^\circ\mathrm{C}$-os víz jut a $40\,^\circ\mathrm{C}$-os, 3 liter térfogatú keverékbe, akkor $30\,^\circ\mathrm{C}$-os vizet kapunk (egyszerű fejszámolás alapján). 

 b) Legyen az energia alappontja a $0\,^\circ\mathrm{C}$-hoz rögzítve. A kezdeti 2 liter és $60\,^\circ\mathrm{C}$ miatt a tartályban lévő víz kiindulási energiája legyen 120 egység. Mivel $0\,^\circ\mathrm{C}$-os vizet használunk, ez nem növeli az energiát. Ez azt jelenti, hogy 5 percenként a 120 egységet 3-mal, 4-gyel, 5-tel kell osztanunk, és így tovább. Tehát az első 5 perc után $120/3=40\,^\circ\mathrm{C}$ lesz a hőmérséklet, a második 5 perc után $120/4=30\,^\circ\mathrm{C}$, a harmadik 5 perc után $120/5=24\,^\circ\mathrm{C}$, a negyedik 5 perc után $120/6=20\,^\circ\mathrm{C}$. 
 Nagyot ugorva a tizedik 5 perc után $120/12=10\,^\circ\mathrm{C}$ lesz a víz hőmérséklete a tartályban. A vége felé már alig változik a hőmérséklet, a tartály előbb-utóbb megtelik, és a víz lassacskán közeledik a $0\,^\circ\mathrm{C}$-hoz. 
 A hőmérséklet-idő kapcsolat a fordított arányossághoz hasonló, grafikonon ábrázolva hiperbolát kapunk, ahogy ezt az ábra mutatja. A függvény képlete: 
 $T=\frac{120}{2+\tfrac{t}{5}},$ 
 ahol $t$ értékét percben kell beírnunk, és az eredményt Celsius-fokban kapjuk.

![solution figure](../../raw_html/komal_figures/komal-G920-sol-fig1.gif)
