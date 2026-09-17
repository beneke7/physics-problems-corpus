---
id: komal-P4986
source: komal
language: hu
translated: false
problem: komal-P4986
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 Ha a középső töltés kicsiny $x$ távolsággal elmozdul a súlyvonal mentén, akkor a rá ható eredő elektromos erő: 
 $F(x)=kqQ\left(\frac{1}{(R+x)^2}-2\frac{(\frac12R)-x}{\left(R^2-Rx+x^2\right)^{3/2}} \right).$ 
 ($R=\tfrac12D$ a $q$ és az egyik $Q$ töltésű test távolsága, vagyis a körülírt kör sugara.) Ha az $x/R\ll 1$ mennyiség egynél magasabb hatványait 1 mellett elhanyagoljuk, továbbá alkalmazzuk az $\left(1+\frac{x}{R}\right)^n\approx 1+n \frac{x}{R}$ formulát, az erőre ezt a képletet kapjuk: 
 $F(x)=-12\frac{kqQ}{D^3}\, x.$ 
 Ez megegyezik egy 
 $D_\text{rugó}=12\frac{kqQ}{D^3}$ 
 rugóállandójú rugó által kifejtett rugalmas erővel, tehát a rezgés körfrekvenciája: 
 $\omega=\sqrt{\frac{D_\text{rugó}}{m}}=\sqrt{12\frac{kqQ}{D^3m}}.$ 

 Megjegyzések. 1. A mozgás csak akkor lesz stabil rezgés, ha – valamilyen módon – biztosítjuk, hogy a $q$ töltésű test csak a háromszög síkjában mozoghasson. A háromszög síkjára merőleges irányban (már a legkisebb ilyen irányú eltávolodás esetén) a testre taszítóerő hat, ami egyre gyorsuló ütemben eltávolítja a $q$ töltésű testet az (instabil) egyensúlyi helyzetétől. 
 2. Belátható, hogy a középső test nemcsak a súlyvonal mentén, hanem a súlyponton átmenő bármelyik (a háromszög síkjában fekvő) egyenes mentén ugyanakkora körfrekvenciájú rezgést végezhet.
