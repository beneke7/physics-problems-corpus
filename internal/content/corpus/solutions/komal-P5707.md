---
id: komal-P5707
source: komal
language: hu
translated: false
problem: komal-P5707
figure_files: [komal-P5707-sol-fig1.gif]
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 A bicikli sebességtartományában a – fékeken kívül – elsősorban a légellenállás fékezi a biciklist. (Sima úton, jól felfújt gumikkal a gördülési ellenállás emellett elhanyagolható.) A közegellenállásból eredő fékezőerő a sebesség négyzetével arányos: 
 $F_\mathrm{k}=kv^2,$ 
 ahol $k$ egy, a bicikli és a biciklis méreteitől és alakjától, valamint a levegő sűrűségétől függő állandó. A feladatban szereplő határsebesség alapján: 
 $(1)$ $mg\sin\alpha=kv_\mathrm{max}^2,$ 
 hiszen ezen a sebességen a légellenállás épp egyensúlyt tart a nehézségi erő lejtőirányú komponensével. 
 Ha Eduárd $v<v_\mathrm{max}$ állandó sebességgel akar gurulni, akkor a biciklit $F_\mathrm{f}$ erővel fékeznie kell. Ebben az esetben az erőegyensúly: 
 $mg\sin\alpha=kv^2+F_\mathrm{f},$ 
 amiből (1) felhasználásával: 
 $F_\mathrm{f}=mg\sin\alpha-kv^2=mg\sin\alpha\left(1-\left(\frac{v}{v_\mathrm{max}}\right)^2\right).$ 
 A féken disszipálódó teljesítmény: 
 $P_\mathrm{f}=F_\mathrm{f}\,v=mg\sin\alpha\left(1-\left(\frac{v}{v_\mathrm{max}}\right)^2\right)v=mg\sin\alpha\,v_\mathrm{max}\left(\frac{v}{v_\mathrm{max}}-\left(\frac{v}{v_\mathrm{max}}\right)^3\right).$ 
 A függvényt az ábrán látható $P_\mathrm{f}\,(v)$ grafikonon ábrázoltuk. 

 Megjegyzés. Látható, hogy a grafikonnak valahol a $0<v<v_\mathrm{max}$ tartományon maximuma van. Ez érthető, hiszen nagyon kis $v$ sebességnél ugyan nagy erővel kell fékezni, de a $P_\mathrm{f}=F_\mathrm{f}\,v$ miatt minimális a fékteljesítmény, a határsebességhez közeledve pedig az $F_\mathrm{f}$ fékerő csökken. A maximumhelyet és a maximum értékét le lehet olvasni a grafikonról, vagy deriválással lehet meghatározni: 
 $$\begin{gather*}
P_\mathrm{f}=mg\sin\alpha\,v_\mathrm{max}\left(\frac{v}{v_\mathrm{max}}-\left(\frac{v}{v_\mathrm{max}}\right)^3\right),\\
\frac{\mathrm{d}P_\mathrm{f}}{\mathrm{d}\left(\frac{v}{v_\mathrm{max}}\right)}=mg\sin\alpha\,v_\mathrm{max}\left(1-3\left(\frac{v}{v_\mathrm{max}}\right)^2\right)=0,\\
\left(\frac{v}{v_\mathrm{max}}\right)_\mathrm{max}=\frac{1}{\sqrt{3}}\approx 0{,}577,\\
P_\mathrm{f\,max}=mg\sin\alpha\,v_\mathrm{max}\left(\frac{1}{\sqrt{3}}-\frac{1}{3\sqrt{3}}\right)=\frac{2}{3\sqrt{3}}\,mg\sin\alpha\,v_\mathrm{max}\approx 0{,}385\cdot mg\sin\alpha\,v_\mathrm{max}.
\end{gather*}$$

![solution figure](../../raw_html/komal_figures/komal-P5707-sol-fig1.gif)
