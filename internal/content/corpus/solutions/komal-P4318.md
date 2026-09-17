---
id: komal-P4318
source: komal
language: hu
translated: false
problem: komal-P4318
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 A golyók mozgásegyenlete (a sebességben négyzetes közegellenállási erőt feltételezve): 
 $m\frac{\Delta v}{\Delta t}=mg-\frac{1}{2}kA\varrho_{\text{levegő}} v^2.$ 
 A tömeget és a homlokfelületet a golyók sugarával és sűrűséggel kifejezve a sebesség időbeli változását leíró egyenlethez jutunk: 
 $\frac{\Delta v}{\Delta t}=g-\left( \frac{3}{8} \frac{\varrho_{\text{levegő}}}{\varrho_{\text{golyó}}} \frac{k}{R}\right)v^2,$ 
 ahol $k=0,\!43$. A mozgást kicsiny időtartamokra felosztva az egyes mozgásszakaszokon a sebesség megváltozása és a megtett út kiszámítható. Ez a feladat egy rövid számítógépes ciklussal könnyen elvégezhető. A $\varrho_{\text{levegő}}=1,\!2 ~\textrm{kg/m}^3$, $\varrho_{\text{fa}}=500 ~\textrm{kg/m}^3$, $\varrho_{\text{vas}}=7800 ~\textrm{kg/m}^3$, $g=9,\!81$ $\textrm{m/s}^2$ és $R=0,\!1$ m adatok felhasználásával a fa- és a vasgolyók esési idejére $3,\!306$ s, illetve $3,\!200$ s értéket kapunk (a vákuumban eső golyók esési ideje $3,\!193$ s lenne). A fagolyó tehát kb. egy tizedmásodperccel később ér le, mint a vasgolyó.
