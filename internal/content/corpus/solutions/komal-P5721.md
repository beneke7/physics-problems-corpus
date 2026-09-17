---
id: komal-P5721
source: komal
language: hu
translated: false
problem: komal-P5721
figure_files: [komal-P5721-sol-fig1.gif, komal-P5721-sol-fig2.gif]
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 A feladatban megadott fénysugár az 1. ábrán látható. A beesési szöget $\alpha$-val, az eltérülés szögét $\delta$-val jelöltük. 

 1. ábra 

 a) Az eltérülés $\delta=30^\circ$, a törési szög $\beta=\alpha-30^\circ$. Ritkább közegből lép sűrűbbe a fény, ezért a $30^\circ$-os eltérülés a törési szög kifejezésében levonódik a beesési szögből. A Snellius–-Descartes-törvény szerint 
 $n\sin(\alpha-30^\circ)=\sin\alpha.$ 
 Bontsuk szét a két szög különbségének szinuszát: 
 $n(\sin\alpha\cos30^\circ-\cos\alpha\sin30^\circ)=\sin\alpha.$ 
 Az egyenletet $\cos\alpha$-val elosztva egyetlen ismeretlen marad: $\tg\alpha$. Írjuk be még a $\sin30^\circ=\tfrac{1}{2}$ és $\cos30^\circ=\tfrac{\sqrt{3}}{2}$ ismert értékeket, és a törésmutatót. 
 $1{,}5\cdot\left(\frac{\sqrt{3}}{2}\tg\alpha-\frac{1}{2}\right)=\tg\alpha$ 
 Ebből kifejezve először az ismeretlen $\tg\alpha$-t, majd pedig magát $\alpha$-t: 
 $\tg\alpha=\frac{3}{3\sqrt3-4}=2{,}508,$ 
 $\alpha=\arctg 2{,}508=68{,}3^\circ.$ 

 b) Tetszőleges beesési szög esetén a Snellius–Descartes törvény: 
 $n\sin(\alpha-\delta)=\sin\alpha$ 
 Kifejezve ebből az ismeretlen $\delta$-t: 
 $(1)$ $\delta=\alpha-\arcsin\left(\frac{1}{n}\sin\alpha\right).$ 
 Kérdés, hogy van-e $\delta$-nak maximuma az $0\le\alpha\le 90^\circ$ intervallumban. A megoldás végén megmutatjuk, hogy az (1) függvény szigorúan monoton nő az adott tartományban, ami szerint a maximum a tartomány szélén $90^\circ$-os beesési szögnél lenne. Viszont ahogy $\alpha$ közelít ehhez az értékhez, a megtört sugár intenzitása zérushoz tart, $\delta$-nak tehát itt nem maximuma, hanem $\delta_k$ felső korlátja van: 
 $\sin(90^\circ-\delta_k)=\cos\delta_k=\frac{1}{n}$ 
 $\delta_k=\arccos\frac{1}{n}=\arccos\frac{2}{3}=48{,}2^\circ.$ 
 Végül vizsgáljuk az említett monotonitást! 

 I. módszer. A törési törvény alapján: 
 $\sin\beta=\frac{1}{n}\sin\alpha=K\,\textrm{(állandó)}.$ 

 2. ábra 

 A 2. ábrán legyen egy görbe meredeksége (deriváltja) egy $P$ pontban $m(P)$. 
 Egyrészt tudjuk, hogy $m(A)>m(C)$, mert a szinusz függvény a $\left[0,90^\circ\right]$ tartományban alulról konkáv (felülről konvex). Másrészt $m(C)>m(B)$, mert a felső görbét az alsó $n$-szeres függőleges irányú nyújtásával kapjuk. Ezekből $m(A)>m(B)$. Így ha $K$-t ($\alpha$-t és $\beta$-t) növeljük, akkor $\alpha$ többet nő, mint $\beta$, azaz $\delta\equiv\alpha-\beta$ is monoton nő. 

 II. módszer. Az (1) függvény szigorúan monoton nő, mert a deriváltja pozitív: 
 $\frac{\mathrm{d}\delta}{\mathrm{d}\alpha}=1-\frac{\frac{1}{n}\cos\alpha}{\sqrt{1-\frac{1}{n^2}\sin^2\alpha}}=1-\sqrt{\frac{\cos^2\alpha}{n^2-1+\cos^2\alpha}}>0,$ 
 hiszen a gyök alatti tört értéke 1-nél kisebb.

![solution figure](../../raw_html/komal_figures/komal-P5721-sol-fig1.gif)

![solution figure](../../raw_html/komal_figures/komal-P5721-sol-fig2.gif)
