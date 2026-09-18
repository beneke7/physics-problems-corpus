---
id: komal-P5427
source: komal
language: hu
translated: false
problem: komal-P5427
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 $a)$ A grafikonról leolvashatjuk, hogy 230 V feszültségnél az áramerősség 0,42 A, az izzó ellenállása tehát
 $R=\frac{230~\rm V}{0{,}42~\rm A}=548~\Omega.$

 $b)$ Nyitott kapcsolóállásnál az A és a B izzó feszültsége azonos, mivel azonos erősségű áram folyik rajtuk keresztül, így
 $U_{\rm A}^{\rm (ny)}=U_{\rm B}^{\rm (ny )}=115~V.$
 Az áramerősség tehát (lásd a grafikont)
 $I_{\rm A}^{\rm (ny)}=B_{\rm B}^{\rm (ny )}=0{,}285~\rm A,$
 így az ellenállásuk:
 $R_{\rm A}^{\rm (ny)}=R_{\rm B}^{\rm (ny)}=\frac{115~\rm V}{0{,}285~\rm A}\approx 404~\Omega.$

 $c)$ Ha zárt kapcsolóállásnál a B, illetve a C izzón $I$, az A izzón pedig $2I$ erősségű áram folyik, akkor a grafikusan megadott $U(I)$ karakterisztika szerint fennáll:
 $U(I)+U(2I)=230~\rm V.$
 Ezt az egyenletet próbálgatással, különböző $I$ értékek behelyettesítésével oldhatjuk meg. Azt kapjuk, hogy $I\approx
0{,}37~\rm A$, vagyis
 $I_{\rm A}^{\rm (z)} =2I=0{,}185~{\rm A}, \qquad
I_{\rm B}^{\text(z)}=I_{\rm C}^{\rm (z)}=I=0{,}185~{\rm A},$
 és az izzókra jutó feszültség:
 $U_{\rm A}^{\rm (z)}=U(2I)\approx 183~{\rm V}, \qquad
U_{\rm B}^{\rm (z)}=U_{\rm C}{\rm (z)}=U(I)\approx 47~\rm V.$
 Természetesen teljesül, hogy $U_{\rm A}^{\rm (z)}+U_{\rm B}^{\rm (z)}=230~\rm V.$

 $d)$ Az izzók teljesítménye a megfelelő feszültség és áramerősség szorzata.
 – Egyetlen, 230V-ra kapcsolt villanykörte teljesítménye:
 $P=(230~{\rm V})\cdot (0{,}42~{\rm A})\approx 97~\rm W,$
 ami egy kicsit kisebb a megadott ,,névleges'' teljesítménynél.
 – Hasonlóan kapjuk, hogy nyitott kapcsolóállásnál
 $P_{\rm A}^{\rm (ny)}=P_{\rm B}^{\rm (ny)}\approx 33~\rm W.$
 – Ha zárjuk a kapcsolót, az izzók teljesítménye:
 $P_{\rm A}^\text{(z)}=U_{\rm A}^{\rm (z)}\cdot I_{\rm A}^{\rm (z)}\approx 67~{\rm W}, \qquad P_{\rm B}^{\rm (z)}=P_{\rm C}^{\rm (z)}==U_{\rm B}^{\rm (z)}\cdot I_{\rm BA}^{\rm (z)}\approx9~\rm W.$
 Látható, hogy a kapcsoló zárásával az A izzó fényesebben világít, B teljesítménye pedig olyan erősen lecsökken, hogy gyakorlatilag nem is fog világítani. Ezek a változások ugyanolyan jellegűek, de lényegesen nagyobb mértékűek, mint a hőfokfüggetlen ellenállású fogyasztóknál (lásd a G. 792. gyakorlat megoldását). Az izzók feszültség-áram karakterisztikájának nemlinearitását az ellenállás hőfokfüggése okozza.
