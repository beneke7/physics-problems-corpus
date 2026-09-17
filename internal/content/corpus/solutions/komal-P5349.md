---
id: komal-P5349
source: komal
language: hu
translated: false
problem: komal-P5349
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 Legyen a zsebtelep üresjárati feszültsége $U$, az ismeretlen ellenállást pedig jelöljük $x$-szel, és minden ellenállást számoljunk ohm egységekben. 
 A kapcsolás eredő ellenállása 
 $R_{\bf e}=1{,}5+\frac{40x}{40+x}=\frac{60+41{,}5x}{40+x},$ 
 a telep által leadott teljesítmény tehát 
 $P_0=\frac{U^2}{R_{\bf e}}=\frac{40+x}{60+41{,}5x}\,U^2.$ 
 A főág áramerőssége 
 $I=\frac{U}{R_{\bf e}},$ 
 a kapocsfeszültség tehát 
 $U'=U-IR_\text{belső}=\frac{40x}{60+41{,}5x}\,U,$ 
 és így az ismeretlen ellenállású fogyasztóra jutó teljesítmény 
 $P_x=\frac{U'^2}{x}=\left( \frac{40x}{60+41{,}5x}\,U \right)^2\cdot \frac{1}{x}=\frac{1600x}{(60+41{,}5x)^2}U^2.$ 
 A $P_x=0{,}6\,P_0$ feltétel akkor teljesül, ha fennáll, hogy 
 $1600 x=0{,}6\cdot (40+x)(60+41{,}5x).$ 
 Ennek a másodfokú egyenletnek a gyökei: $x_1=2{,}9$ és $x_2=19{,}9.$ 
 Az ismeretlen fogyasztó ellenállása tehát kb. $3~\Omega$ vagy $20~\Omega$.
