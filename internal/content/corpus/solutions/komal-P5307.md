---
id: komal-P5307
source: komal
language: hu
translated: false
problem: komal-P5307
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**I. megoldás.**
 A szivattyú szívássebességét értelmezhetjük úgy, hogy a 3000 cm$^3$ térfogatú gázt (egy szelepekkel ellátott dugattyú segítségével) minden másodpercben 3150 cm$^3$-re tágítjuk, vagyis a nyomását izotermikusan
 $p'=\frac{3000}{3150},p_0=0{,}952\,p_0$
 értékre csökkentjük. Ezt $N$-szer megismételve a nyomás akkor csökken az eredeti érték ezred részére, ha
 $0{,}952^N=10^{-3},$
 vagyis
 $N=\frac{\log 10^{-3}}{\log 0{,}952}\approx 142.$
 A kívánt nyomáscsökkenés tehát kb. 142 s, vagyis 2,4 perc alatt valósítható meg.
 A nyomás csökkentése kisebb lépésekben is megoldható. Ha például 0,1 másodpercenként 15 cm$^3$ levegőt szivattyúztunk ki a lombikból, akkor egy-egy lépés során a nyomás
 $\frac{p'}{p_0}=\frac{3000}{3015}=0{,}995$
 arányban csökken, akkor a lépések száma:
 $N=\frac{\log 10^{-3}}{\log 0{,}995}\approx 1385,$
 tehát a szivattyúzás ideje 138,5 másodperc, azaz kb. 2,3 perc lesz.

**II. megoldás.**
 Ha másodpercenként 150 cm$^3$-t szivattyúzunk ki állandó hőmérséklet mellett a 3000 cm$^3$-es lombikból, akkor másodpercenként 150/3000 = 1/20-ával csökken a nyomás. Tehát a nyomás egy kicsiny $\Delta t$ időre vonatkoztatott csökkenése:
 $\frac{\Delta p }{\Delta t}
 = - p(t) \cdot \frac{1}{20~\rm s},$
 vagyis (folytonos működésű szivattyúnál) a nyomás csökkenését meghatározó differenciálegyenlet:
 $p'(t)=-\lambda\,p(t),$
 ahol $\lambda=\frac{1}{20~\rm s}$. A nyomás csökkenésének egyenlete ugyanolyan alakú, mint a radioaktív bomlások $m'(t)=-\lambda\,m(t)$ egyenlete, tehát a megoldása is ahhoz hasonló:
 $p(t)=p_0\, {\rm e}^{-\lambda t}.$
 Esetünkben a szivattyúzás $T$ idejére fennáll
 $10^{-3}p_0=p_0\, {\rm e}^{-\lambda T},$
 ahonnan
 $T=\frac{\ln 10^{-3}}{\lambda}=138{,}2~{\rm s}\approx2{,}3~{\rm perc}.$
