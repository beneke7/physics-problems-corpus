---
id: komal-P4922
source: komal
language: hu
translated: false
problem: komal-P4922
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 Jelöljük a telep belső ellenállását $r$-rel! A nyitott kapcsolóálláshoz tartozó Ohm-tövény (az SI mértékegységek elhagyásával): 
 $(R_x+r)\cdot 0{,}3=18,$ 
 vagyis 
 $(1)$ $R_x+r=60. $ 
 Zárt kapcsolóállás esetén az ismeretlen ellenálláson $0{,}2\,R_x$ feszültség esik, tehát a 8 ohmos ellenálláson $0{,}025\,R_x$ áram folyik. A teljes áramkörre felírható Ohm-törvény: 
 $(2)$ $\left(0{,}2+0{,}025\,R_x\right)r+0{,}2\,R_x=18.$ 
 Az (1) egyenletből kifejezhető $r$-et (2)-be helyettesítve az ismeretlen ellenállásra egy másodfokú egyenletet kapunk: 
 $R_x^2-60\,R_x+240=0,$ 
 amelynek gyökei: 
 $R_x=55{,}7~\Omega \qquad \text{vagy} \qquad R_x=4{,}3~\Omega.$ 
 A telep belső ellenállása (1) szerint $r=4{,}3~\Omega$ vagy $r=55{,}7~\Omega$. (A második érték irreálisan nagy, emiatt azt – jóllehet a megadott feltételeknek matematikailag megfelel – elvethetjük.) 

 Megjegyzés. A kapcsoló nyitásával a főág áramerőssége lecsökken (hiszen a két párhuzamosan kapcsolt ág eredő ellenállása megnő), az $R_x$ ellenálláson folyó áram nagysága azonban – érdekes módon – megnő.
