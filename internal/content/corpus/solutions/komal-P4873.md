---
id: komal-P4873
source: komal
language: hu
translated: false
problem: komal-P4873
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 A kerékpár generátora az $f$ fordulatszámmal arányos $U$ váltófeszültséget hoz létre. A generátor tekercsének induktív ellenállása ugyancsak $f$-fel arányos, a vele sorbakapcsolt állandó ohmos ellenállással együtt a teljes áramkör impedanciája $Z=\sqrt{c_1 f^2+c_2}$ alakban írható fel, ahol $c_1$ és $c_2$ állandók. Az áramkör áramerőssége $I=U/Z$, az ohmos ellenálláson leadott teljesítmény $I^2$-tel arányos, tehát 
 $P=\frac{f^2}{k_1 f^2+k_2}$ 
 alakú, ahol $k_1$ és $k_2$ állandók. Másrészt a leadott teljesítmény az $f$ fordulatszám és a forgatáshoz szükséges $M$ forgatónyomaték szorzataként is felírható ($P=fM$), ahonnan 
 $M=\frac{f}{k_1 f^2+k_2}.$ 
 Írjuk fel ezt az összefüggést a feladatban szereplő $f=n$, $f=2n$ és $f=3n$ fordulatszámokra: 
 $(1)$ $M_1=\frac{n}{k_1 n^2+k_2},$ 
 $(2)$ $M_2=1{,}8M_1=\frac{2n}{4k_1 n^2+k_2},$ 
 valamint 
 $(3)$ $M_3=\frac{3n}{9k_1 n^2+k_2}.$ 
 Az (1) és (2) összefüggésből $k_2=26k_1n^2$, a (3) és (1) hányadosából pedig 
 $M_3=\frac{81}{35}M_1\approx 2{,}3\,M_1$ 
 adódik. 

 Megjegyzések. 1. A fordulatszám növelésével a szükséges forgatónyomaték egy ideig növekszik, majd csökken. Általában $N\cdot n$ fordulatszám $M_N$ nyomatékára fennáll, hogy 
 $\frac{M_N}{M_1}=\frac{27\,N}{N^2+26},$ 
 és ez a kifejezés $N=\sqrt{26}$ esetén, az egész $N$-ek között pedig $N=5$-nél a legnagyobb. 
 2. A kerékpárok generátorának hasznos tulajdonsága, hogy a leadott teljesítmény nagy sebesség (nagy fordulatszám) mellett sem növekszik korlátlanul, hanem (a tekercs induktivitásának növekedése miatt) véges értékű marad. Ha ez nem lenne így, a lámpa izzója könnyen kiéghetne.
