---
id: komal-P4977
source: komal
language: hu
translated: false
problem: komal-P4977
figure_files: [komal-P4977-sol-fig1.gif]
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 Jelöljük a kondenzátorok feszültségét $U_1(t)$ és $U_2(t)=U_0-U_1(t)$ módon, az ellenállásokon folyó áramok pedig legyenek $I_1$ és $I_2$. (A feszültségeket és az áramokat jobbról balra tekintjük pozitívnak.) 
 A kapcsoló bekapcsolásának pillanatát követően a kondenzátorok nagyon rövid (elhanyagolható) idő alatt feltöltődnek, hiszen a vezetékek és a telep (belső) ellenállásasa elhanyagolható. Mivel a két kondenzátor közös pontjából csak az ellenállásokon keresztül folyhat el áram, a kezdeti pillanatban ott az össztöltés még nulla, vagyis a kondenzátorok feszültsége a kapacitásuk reciprokának arányában osztja meg a teljes telepfeszültséget. 
 $U_1(0)=\frac{C_2}{C_1+C_2}U_0=25~{\rm V} \qquad \text{és}\qquad U_2(0)=\frac{C_1}{C_1+C_2}U_0=75~{\rm V}.$ 
 Elegendően hosszú idő múlva – amikor az ellenállásokon már állandó (és egymással megegyező) nagyságú áram folyik, az ellenállásokon azok nagyságával arányos feszültség alakul ki, és ugyanekkora lesz a hozzájuk kapcsolt kondenzátorok feszültsége is: 
 $U_1^*=\frac{R_1}{R_1+R_2}U_0=80~{\rm V} \qquad \text{és}\qquad U_2^*=\frac{R_2}{R_1+R_2}U_0=20~{\rm V}.$ 
 A kondenzátorok feszültsége időben változó függvényekkel írható le, és vázlatosan az ábrán látható módon alakul. Belátható (de ez nem szerepelt a feladat kérdései között), hogy a feszültségváltozás az idő exponenciális függvénye, és az ábrán bejelölt 1,6 s a kapcsolás ,,időállandójának'' felel meg. 

 Megjegyzés. Belátjuk, hogy a feszültségek változása exponenciális függvénnyel adható meg, amelynek időállandóját mind a kondenzátorok, mind pedig az ellenállások párhuzamos kapcsolásának megfelelő képletből számíthatjuk ki: 
 $T_0=R_\text{eredő}C_\text{eredő}=\frac{R_1R_2}{R_1+R_2}\,\left(C_1+C_2\right)=1{,}6~\rm s.$ 
 A folyamat során a kondenzátorok (időben változó) töltése: $Q_1(t)=C_1U_1(t)$ és $Q_2(t)=C_2\left(U_0-U_1(t)\right)$, tehát a rajtuk ,,átfolyó'' áram (a jobb oldali lemezekre ráfolyó és a bal oldali lemezekről elfolyó áram) erőssége: 
 $I_1'=\frac{\Delta Q_1(t)}{\Delta t}=C_1\frac{\Delta U_1(t)}{\Delta t} \qquad \text{és}\qquad
I_2'=\frac{\Delta Q_2(t)}{\Delta t}=-C_2\frac{\Delta U_1(t)}{\Delta t}.
$ 
 Ugyanekkor az ellenállások árama: 
 $I_1(t)=\frac{U_1(t)}{R_1} \qquad \text{és}\qquad I_2(t)=\frac{U_0-U_1(t)}{R_2}.$ 
 A csomóponti törvény szerint $I_1+I_1'=I_2+I_2'$, vagyis 
 $\left(C_1+C_2\right)\frac{\Delta U_1(t)}{\Delta t}+\left(\frac{1}{R_1}+\frac{1}{R_2} \right)U_1(t)=\frac{U_0 }{R_2}.$ 
 Az ellenállások és a kondenzátorok párhuzamos eredője 
 $R_\text{eredő}=\left(\frac{1}{R_1}+\frac{1}{R_2} \right)^{-1}=8~\rm k\Omega,\qquad C_\text{eredő}=C_1+C_2=200~\mu\rm F.$ 
 Bevezetve a 
 $\lambda=\frac{1}{R_\text{eredő}C_\text{eredő}}=\frac{1}{1{,}6~\rm s}$ 
 jelölést, a bal oldali kondenzátor feszültségváltozásának egyenlete: 
 $\frac{\Delta U_1(t)}{\Delta t}=-\lambda U_1(t)+\text{állandó}.$ 
 Ennek az egyenletnek a kezdeti feltételt is figyelembe vevő megoldása (lásd. pl. a radioaktív bomlások hasonló egyenletét) SI egységekben: 
 $U_1(t)=80-55\, e^{-\frac{t}{1{,}6}},$ 
 és hasonló módon 
 $U_2(t)=20+55\, e^{-\frac{t}{1{,}6}}.$

![solution figure](../../raw_html/komal_figures/komal-P4977-sol-fig1.gif)
