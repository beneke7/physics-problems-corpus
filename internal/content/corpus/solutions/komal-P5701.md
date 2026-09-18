---
id: komal-P5701
source: komal
language: hu
translated: false
problem: komal-P5701
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 A termodinamika első főtétele:
 $\Delta E=Q+W,$
 ahol $E$ a belső energia, $Q$ a gázzal közölt hő, $W$ pedig a környezet által a gázon végzett munka. Felírhatjuk még, hogy valamely folyamatban a gázzal közölt hő és a hőmérséklet-változás kapcsolata
 $Q=mc\Delta T,$
 ahol $m$ a gáz tömege, $c$ pedig a kérdéses folyamatra jellemző fajhő.
 I. Az első (izochor) folyamatban $W_1=0$, továbbá
 $Q_1=\Delta E_1=mc_V\Delta T_1=mc_V\cdot 80\,\mathrm{K}.$

 II. A második (adiabatikus) folyamatban $Q_2=0,$ továbbá $W_2=Q_1,$ és így
 $\Delta E_2=Q_2+W_2,$
 vagyis
 $mc_V\Delta T_2=Q_1=mc_V\cdot 80\,\mathrm{K}.$
 Ezek szerint $\Delta T_2=80\,\mathrm{K}$.

 III. A harmadik (izobár) folyamatban $-W_3=Q_1=mc_V\Delta T_1$, $Q_3=mc_p\Delta T_3$ és $\Delta E_3=mc_V\Delta T_3.$
 Az első főtételt alkalmazva:
 $\Delta E_3=Q_3+W_3,$
 vagyis
 $mc_V\Delta T_3=mc_p\Delta T_3-mc_V\Delta T_1.$
 Innen kapjuk, hogy
 $\Delta T_3=\frac{\Delta T_1}{\frac{c_p}{c_V}-1}=\frac{80\,\mathrm{K}}{1{,}4-1}=200\,\mathrm{K}.$
 (Felhasználtuk, hogy a kétatomos molekulákból álló nitrogéngáz fajhőhányadosa: $c_p/c_V=7/5.$)
 A gáz hőmérsékletének teljes megváltozása a három folyamat során
 $\Delta T_\textrm{ összes}=80\,\mathrm{K}+80\,\mathrm{K}+200\,\mathrm{K}=360\,\mathrm{K}.$
