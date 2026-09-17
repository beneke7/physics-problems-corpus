---
id: komal-P5180
source: komal
language: hu
translated: false
problem: komal-P5180
figure_files: [komal-P5180-sol-fig1.gif, komal-P5180-sol-fig2.gif]
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 Először határozzuk meg $\lambda$ értékét! Az 1. ábrán feltüntettük a legalacsonyabb és a legmagasabb hőmérséklethez tartozó izotermákat. Az állapotegyenlet szerint 
 $T=\frac{pV}{nR},$ 
 vagyis az izotermák a $pV=$állandó egyenletű hiperbolák. 

 1. ábra 
 A körfolyamatban a legalacsonyabb hőmérséklet az $A$ ponthoz tartozik: 
 $T_\text{min}=\frac{p_0V_0}{nR}.$ 
 A legmagasabb hőmérsékletű állapotot ott találjuk, ahol az izoterma érinti a $BC$ egyenest. Ez az ábra szimmetrikus volta miatt a $BC$ szakasz $F$ felezőpontjában teljesül, és ott 
 $T_\text{max}= \left(\frac{\lambda+1}{2}\right)^2\frac{p_0V_0}{nR}.$ 
 Látható, hogy a megadott $T_\text{max}=9T_\text{min}$ feltétel akkor áll fenn, ha $\lambda=5$. 
 A gáz által végzett ,,hasznos'' munka az$ABC$ háromszög területe: 
 $W=\frac{(4p_0\cdot 4V_0)}{2}= 8\,p_0V_0.$ 
 A hatásfok kiszámításához meg kell határoznunk a körfolyamat során felvett hőt. A $C\rightarrow A$ szakaszon (izobár összehúzódás) hőleadás történik. Az $A\rightarrow B$ szakaszon (izochor állapotváltozás) tágulási munka nincs, a hőfelvétel a belső energia növekedésével egyezik meg: 
 $Q_{AB}=E_B-E_A=\frac{3}{2}(\lambda-1)p_0V_0=6\,p_0V_0.$ 
 (Felhasználtuk, hogy az egyatomos ideális gáz belső energiája $E=\tfrac32 pV$.) 
 Bonyolultabb a helyzet a $B\rightarrow C$ szakaszon történő hőfelvétellel. A folyamat elején, a 2. ábrán bejelölt $D$ pontig hőfelvétel, $D$ és $C$ között pedig hőleadás történik. 

 2. ábra 
 A $D$ pontot az jellemzi, hogy a rajta átmenő adiabata érinti a $BC$ egyenest, vagyis a $D$ pont környékén egy kicsi $\Delta V$ térfogatváltozásnál nincs hőcsere, a belső energia csökkenése éppen fedezi a gáz által végzett tágulási munkát: 
 $\frac{3}{2}\left(p^*-\frac{p_0}{V_0}\Delta V\right)( V^*+\Delta V)-\frac{3}{2}p^* V_D+p_D\Delta V=0.
$ 
 (Felhasználtuk, hogy a $BC$ egyenes mentén $\Delta p=-(p_0/V_0)\Delta V.$) A fenti egyenletből a $(\Delta V)^2$-tel arányos (másodrendűen kicsiny) tagot elhagyva 
 $\frac{p^*}{V^*}=\frac{3}{5}\,\frac{p_0}{V_0}$ 
 következik. Másrészt tudjuk, hogy $D$ rajta fekszik a $BC$ egyenesen, vagyis 
 $\frac{p^*}{p_0}=6-\frac{V^*}{V_0}.$ 
 Ebből a két összefüggésből kifejezhetjük a hőfelvétel határának állapotjelzőit: 
 $V^*=\frac{15}{4}V_0 \qquad \text{és} \qquad p^*=\frac{9}{4}p_0.$ 
 Most már nincs akadálya annak, hogy megadjuk a $B\rightarrow D$ folyamat alatt felvett hő nagyságát: 
 $Q_{BD}=E_D-E_B+W'_{B\rightarrow D}=\frac32(p^*V^*-p_0V_0)+\frac{5p_0+p^*}{2}(V^*-V_0)=\frac{121}{8}p_0V_0\approx 15{,}1p_0V_0.
$ 
 A teljes hőfelvétel a körfolyamatban: 
 $Q^{\rm fel}_\text{összes}= Q_{AB}+Q_{BD}=\frac{169}{8}\approx 21{,}1p_0V_0, $ 
 és végül a körfolyamat termikus hatásfoka: 
 $\eta=\frac{W}{Q^{\rm fel}_\text{összes}}=\frac{64}{169}\approx 0{,}38=38\%.$

![solution figure](../../raw_html/komal_figures/komal-P5180-sol-fig1.gif)

![solution figure](../../raw_html/komal_figures/komal-P5180-sol-fig2.gif)
