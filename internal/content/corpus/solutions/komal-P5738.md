---
id: komal-P5738
source: komal
language: hu
translated: false
problem: komal-P5738
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 A körvezető árama olyan mágneses teret hoz létre, amely a tengely mentén a középponttól távolodva folyamatosan csökkenve nullához tart, ezért a kis hurokban az elmozdítás közben egyre kiesebb lesz a fluxus. Ez a csökkenő fluxus a gyűrűben elektromotoros erőt indukál, amely pedig áramot hoz létre. A feladat a gyűrű egy adott keresztmetszetén ennek hatására áthaladó töltésmennyiség meghatározása. 
 Ha a gyűrű fluxusa a mozgatás során egy kicsiny $\Delta t$ idő alatt $\Delta\Phi$-vel változik, akkor a gyűrűben 
 $U_\mathrm{i}=-\frac{\Delta\Phi}{\Delta t}$ 
 elektromotoros erő indukálódik. Ennek hatására a gyűrűben 
 $I=\frac{U_\mathrm{i}}{R}$ 
 nagyságú áram fog folyni, amely a kicsiny $\Delta t$ idő alatt 
 $\Delta Q=I\Delta t=-\frac{1}{R}\Delta\Phi$ 
 töltés áthaladását jelenti a gyűrű egy adott keresztmetszetén. Azt látjuk tehát, hogy az áthaladó töltésmennyiség arányos a fluxus megváltozásával. Így a teljes töltésmennyiség a fluxus teljes megváltozásával lesz arányos: 
 $Q=-\frac{1}{R}(\Phi_\infty-\Phi_0).$ 
 A körvezető középpontjában 
 $B=\frac{\mu_0I}{2d}$ 
 a mágneses indukció, amely az $r\ll d$ sugarú kicsiny gyűrűben 
 $\Phi_0=Br^2\pi=\frac{\mu_0Ir^2\pi}{2d}$ 
 fluxust hoz létre. A körvezetőtől nagy távolságra a mágneses tér elhanyagolható, így $\Phi_\infty=0$. Ezek alapján a keresett töltésmennyiség: 
 $Q=\frac{\mu_0Ir^2\pi}{2dR}.$ 

 Megjegyzések. 1. Ugyanerre a megoldásra jutunk, ha az indukált elektromotoros erőt deriválással, majd a töltést integrálszámítással határozzuk meg. Az indukált elektromotoros erő: 
 $U_\mathrm{i}(t)=-\frac{\mathrm{d}\Phi(t)}{\mathrm{d}t}=-\dot\Phi(t),$ 
 ahol $\dot\Phi(t)$ a fluxus idő szerinti deriváltja. Az áramot a megoldáshoz hasonlóan az Ohm-törvénnyel kaphatjuk meg: 
 $I(t)=\frac{U_\mathrm{i}(t)}{R},$ 
 majd a töltést az áram idő szerinti integráljaként fejezhetjük ki: 
 $Q=\int\limits_{t_1}^{t_2}I(t)\mathrm{d}t=-\frac{1}{R}\int\limits_{t_1}^{t_2}\dot\Phi(t)\mathrm{d}t=-\frac{1}{R}\left((\Phi(t_2)-\Phi(t_1)\right).$ 
 Az utolsó lépésben a Newton–Leibniz-tételt alkalmaztuk. 

 2. Ha a gyűrűt a közös tengely mentén elforgatás nélkül távolítjuk, akkor a gyűrű fluxusa folyamatosan csökken és az áram iránya mindvégig ugyanolyan lesz. Az egy adott keresztmetszeten áthaladó előjelesen összegzett töltésmennyiség azonban ettől függetlenül a kiszámított értékkel egyezik meg, hiszen ez csak a gyűrűn áthaladó fluxus kezdeti és végállapotától függ.
