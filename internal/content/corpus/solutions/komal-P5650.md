---
id: komal-P5650
source: komal
language: hu
translated: false
problem: komal-P5650
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 A megadott állapotban 1 mol ideális gáz $0{,}02479\,\mathrm{m^3}$ térfogatot foglal el. A részecskék száma a teljes térfogatban $N$, melyek normál állapotban 
 $V=N\cdot\frac{0{,}02479\,\mathrm{m^3}}{6{,}022\cdot 10^{23}}=N\cdot 41{,}17\,\mathrm{nm^3}$ 
 térfogatot töltenek be. A $v=1\,\mathrm{nm^3}$ térfogatú térrészben a részecskék száma változhat, ennek a számnak az $n$ várható értéke azonban a teljes részecskeszám $\tfrac{v}{V}$-szerese kell legyen, mert, ha felosztjuk a teljes térfogatot $\tfrac{V}{v}$ darab egyforma tartományra, ez a várható érték mindegyik térrészben egyforma, összegüknek pedig ki kell adni a teljes részecskeszámot. Esetünkben 
 $n=N\cdot\frac{1\,\mathrm{nm^3}}{N\cdot 41{,}17\,\mathrm{nm^3}}\approx 0{,}02429.$ 
 A standardállapotú héliumot ideális gáznak tekinthetjük, melyben a részecskék egymástól függetlenül szabadon bolyonganak a rendelkezésre álló $V$ térfogatban. Egy kiválasztott atom előfordulásának valószínűsége a $v$ térrészben: 
 $\frac{v}{V}=\frac{n}{N},$ 
 így annak a valószínűsége, hogy nincs ott $1-\tfrac{n}{N}$. Annak pedig, hogy az N részecske közül egy sincs ott: 
 $\left(1-\frac{n}{N}\right)^N=\left(\left(1-\frac{n}{N}\right)^{\frac{N}{n}}\right)^{n}\to\mathrm{e}^{-n}.$ 
 Az utolsó lépésben elvégeztük az $N\to\infty$ határátmenetet, melynek során felhasználtuk a 
 $\left(1-\frac{1}{a}\right)^a\to\mathrm{e}^{-1},\quad\textrm{ha}\quad a\to\infty$ 
 összefüggést. 
 Annak a valószínűsége, hogy egy kiválasztott atom a $v$ térrészben legyen, a többi pedig nem: 
 $\frac{n}{N}\left(1-\frac{n}{N}\right)^{N-1}.$ 
 Annak pedig, hogy az $N$ atom közül az egyik ott legyen, a többi pedig nem: 
 $N\frac{n}{N}\left(1-\frac{n}{N}\right)^{N-1}\to n\mathrm{e}^{-n}.$ 
 Általában annak a valószínűsége, hogy $N$ atom közül $k$ a $v$ térrészben legyen, a többi pedig nem: 
$$\begin{gather*}
\binom{N}{k}\left(\frac{n}{N}\right)^k\left(1-\frac{n}{N}\right)^{N-k}=\frac{N(N-1)\cdots(N-k+1)}{k!}\left(\frac{n}{N}\right)^k\left(1-\frac{n}{N}\right)^{N-k}=\\
=\frac{1}{k!}n^k\left(1-\frac{n}{N}\right)^{N}\left(1-\frac{1}{N}\right)\cdots\left(1-\frac{k-1}{N}\right)\left(1-\frac{n}{N}\right)^{-k}\to\frac{1}{k!}n^k\mathrm{e}^{-n},
\end{gather*}$$
 mert az első kivételével az összes zárójeles kifejezés 1-hez tart, ha $N\to\infty$. 
 A feladatban kérdezett 0, 1, illetve 2 atom előfordulásának valószínűsége tehát: 
 $\mathrm{e}^{-n}\approx 0{,}9760,\quad n\mathrm{e}^{-n}\approx 0{,}0237,\quad\frac{1}{2}n^2\mathrm{e}^{-n}\approx 0{,}0003.$ 

 Megjegyzések. 1. Mivel esetünkben $n\ll 1$, annak a valószínűsége, hogy a $v$ térfogatú térészben egy atom van, jó közelítéssel $n$, annak pedig, hogy egy se $1-n$. Ekkor a két érték kiszámításánál nem törődtünk azzal, hogy egyszerre több részecske is lehet a térfogatrészben. Ebben a közelítésben annak a valószínűsége, hogy két részecske is ott van $\tfrac{1}{2}n^2$, amit úgy kapunk meg, hogy az egy részecske valószínűségét a négyzetre emeljük, és osztjuk 2-vel, mert a részecskék megkülönböztethetetlenek (a sorrendjük nem számít). Az így kiszámított valószínűségek 4 tizedesre: 
 $1-n\approx 0{,}9757,\quad n\approx 0{,}0243,\quad \frac{1}{2}n^2\approx 0{,}0003,$ 
 amelyek legfeljebb a 4. tizedesben térnek el az egzakt megoldástól (viszont az összegük kicsit több, mint 1). 

 2. Elhanyagoltuk a He atomok méretét (atom-sugaruk $0{,}031\,\mathrm{nm}$), mert az első atom csak $0{,}00012\,\mathrm{nm^3}$-rel csökkenti a második számára rendelkezésre álló helyet.
