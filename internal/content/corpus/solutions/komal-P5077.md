---
id: komal-P5077
source: komal
language: hu
translated: false
problem: komal-P5077
figure_files: [komal-P5077-sol-fig1.gif, komal-P5077-sol-fig2.gif]
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 Jelöljük a bal oldali részben lévő levegő kezdeti nyomását $p_1$-gyel ( 1. ábra ), és számítsuk ki ennek nagyságát a dugattyú egyensúlyi feltételéből! Mivel (a megadott számadatok esetén) $h$ magas higany hidrosztatikai nyomása éppen $p_0/2$, a higany tetején a nyomás $p_0$, a legalján pedig $\tfrac 32 p_0$, így a higany átlagos nyomása $\tfrac 54 p_0$. A dugattyú mélysége (az ábra síkjára merőleges irányú kiterjedése) $\ell=V_0/(2h^2)$, de ez a mennyiség a továbbiakban érdektelen, minden képletből kiesik. A dugattyúra ható erők egyensúlyának feltétele: 
 $(1)$ $p_1\, 2h=p_0 \, h+\tfrac 54 p_0\cdot h,\qquad \text{azaz}\qquad p_1=\frac{9}{8}p_0.$ 

 1. ábra 

 A két térfélben a levegő hőmérséklete ugyanakkora, hiszen a dugattyú anyaga jó hővezető. Ez a feltétel meghatározza a két gázmennyiség mólszámának arányát (ami a továbbiakban nyilván nem változik): 
 $(2)$ $\frac {n_\text{bal}}{n_\text{jobb}}=\frac{2h^2\cdot p_1}{ h^2\cdot p_0}=\frac{9}{4}.$ 
 A fűtőszál bekapcsolása után a bal oldali térfélben is, és a jobb oldali részben is lassan felmelegszik a levegő (és vele együtt a higany is). Mindkét oldalon nő a levegő nyomása (ezek jelölése a 2. ábrán látható), és a dugattyú elmozdul valamekkora $xh$ távolsággal. A higany (jó közelítéssel) összenyomhatatlan, emiatt a szintje valamekkora $yh$ értékig megemelkedik, amint azt a 2. ábra mutatja. A higany átlagos nyomása (a teteje és az alja nyomásának számtani közepe): $p_3+(y/4)p_0.$ 

 2. ábra 

 Tekintsünk most valamekkora $x$ értékhez (elmozdulás-arányszámhoz) tartozó állapotot! A következő egyenleteket írhatjuk fel: 
 $2p_2h=p_3(2-y)h+(p_3+\frac{yp_0}{4})yh, $ 
 vagyis 
 $(3)$ $p_2=p_3+\frac{y^2}{8}p_0,$ 
 továbbá a higany térfogatának állandósága miatt 
 $(4)$ $y(1-x)=1,$ 
 és végül a gáztörvény szerint 
 $(5)$ $\frac{2p_2(1+x)}{p_3(2-y)(1-x)}=\frac {n_\text{bal}}{n_\text{jobb}}.$ 
 Az (1)-(5) egyenletekből kifejezhetjük a két levegőrész nyomását, illetve a higanyszint magasságát $x$ függvényében, és ezekből kiszámíthatjuk a rendszer energiájának megváltozását, ami a fűtőszál által leadott hővel egyenlő. 
 $p_2=\frac{9(1-2x)}{8(1-x)^2(1-26x)}p_0,$ 
 $p_3=\frac{1+x}{(1-x)^2(1-26x)}p_0.$ 
 Ha az $x$ arányszám 0-tól indulva lassan növekszik, a két levegőrész nyomása fokozatosan emelkedik, és $x\rightarrow \tfrac1{26}$ határesetben mindkettő végtelenhez tart, miközben a térfogatok és a higanyoszlop magassága véges nagyságú marad. Ez annyit jelent, hogy a rendszer energiájának akármilyen mértékű növelésével is legfeljebb $x_{\rm max}h=\tfrac1{26}h\approx 15~$mm-t mozdulhat el. 

 Megjegyzés. Reális körülmények között természetesen a határesetet megközelítő, vagy azt elérő elmozdulás ténylegesen nem következhet be, hiszen a korlátlanul növekvő nyomás és hőmérséklet hatására a tartály vagy szétrobban, vagy megolvad. Elég magas hőmérsékleten a higanygőz nyomása is számottevővé válik, a dugattyúra ható erők egyensúlyánál azt is figyelembe kell venni.

![solution figure](../../raw_html/komal_figures/komal-P5077-sol-fig1.gif)

![solution figure](../../raw_html/komal_figures/komal-P5077-sol-fig2.gif)
