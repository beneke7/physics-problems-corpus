---
id: komal-P4974
source: komal
language: hu
translated: false
problem: komal-P4974
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 A rugalmatlan ütközés után a targonca és a tartály megáll, de a dugattyú $v$ kezdősebességgel tovább mozog. A tartályokban lévő levegő adiabatikusan összenyomódik, illetve kitágul, és emiatt felmelegszik, illetve lehűl. 
 Jelöljük a dugattyú legnagyobb elmozdulásához tartozó térfogatváltozást $kV_0$-lal, vagyis legyen a gázrészek térfogata ekkor $V_0(1+k)$, illetve $V_0(1-k)$. Mindkét gázrészre felírhatók az ideális gáz állapotegyenletei: 
 $\frac{pV}{T}=\text{állandó}, \qquad pV^{1{,}4} =\text{állandó}, \qquad E=\frac{5}{2}pV,$ 
 ahol $E$ a gáz belső energiája. Kiszámíthatjuk, hogy a bal oldali gázrészre 
 $V_1=V_0(1+k ), \qquad p_1=p_0\left(\frac{V_0}{V_1}\right)^{1{,}4}=\frac{p_0}{\left(1+k\right)^{1{,}4}},\qquad
T_1= \frac{T_0}{\left(1+k\right)^{0{,}4}}, \qquad
E_1=\frac{5}{2}\frac{p_0V_0}{\left(1+k\right)^{0{,}4}},$ 
 a jobb oldali részben levő levegőre pedig 
 $V_2=V_0(1-k ), \qquad p_2=p_0\left(\frac{V_0}{V_2}\right)^{1{,}4}=\frac{p_0}{\left(1-k\right)^{1{,}4}},\qquad
T_2= \frac{T_0}{\left(1-k\right)^{0{,}4}}, \qquad
E_2=\frac{5}{2}\frac{p_0V_0}{\left(1-k\right)^{0{,}4}}.$ 
 A henger fala merev és hőszigetelő, tehát a benne lévő gázok és a dugattyú összenergiája nem változik: 
 $2\cdot \frac{5}{2}p_0V_0+\frac{1}{2}Mv^2=E_1+E_2,$ 
 vagyis 
 $\frac{1}{\left(1-k\right)^{0{,}4}}+\frac{1}{\left(1+k\right)^{0{,}4}}-2=\frac{Mv^2}{5p_0V_0}=0{,}08.$ 
 Ennek az egyenletnek (pl. a http://www.wolframalpha.com/ program felhasználásával megkapható) megoldása $k\approx 0{,}38$, és a kérdezett hőmérséklet: $T_2=359~{\rm K}=86\,^\circ\rm C$.
