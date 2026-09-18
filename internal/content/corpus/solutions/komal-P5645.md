---
id: komal-P5645
source: komal
language: hu
translated: false
problem: komal-P5645
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 a) és b) A kerekekre ható tapadási súrlódási erők eredőjének sugárirányú (radiális) összetevője szolgáltatja a centripetális gyorsulást:
 $ma_\mathrm{cp}=\frac{mv^2}{r}=S_\mathrm{r}.$
 A súrlódási erő érintőirányú (tangenciális) összetevője biztosítja a pályamenti gyorsulást:
 $S_\mathrm{t}=ma_\mathrm{t}\qquad\Rightarrow\qquad a_\mathrm{t}=\frac{S_\mathrm{t}}{m},$
 ami állandó. A sebesség az idő függvényében így írható fel:
 $v=v_0+a_\mathrm{t}t,$
 továbbá azt is kihasználhatjuk, hogy a megadott súrlódási együttható kapcsolatban van a motoros maximális sebességével:
 $\frac{mv_\mathrm{max}^2}{r}=S_\mathrm{r\max},\qquad\mathrm{illetve}\qquad S_\mathrm{t}^2+S_\mathrm{r\max}^2=(\mu mg)^2.$
 A félkör hossza $\pi r$, amivel kifejezhetjük a pályamenti gyorsulást:
 $a_\mathrm{t}=\frac{S_\mathrm{t}}{m}=\frac{v_\mathrm{max}^2-v_0^2}{2\pi r}\qquad\Rightarrow\qquad S_\mathrm{t}=m\frac{v_\mathrm{max}^2-v_0^2}{2\pi r}.$
 Az előző három egyenlet alapján:
 $S^2_\mathrm{t}+S_\mathrm{r\max}^2=(\mu mg)^2\qquad\Rightarrow\qquad\left(\frac{v_\mathrm{max}^2-v_0^2}{2\pi r}\right)^2+\left(\frac{v_\mathrm{max}^2}{r}\right)^2=\mu^2g^2,$
 tehát $v_\mathrm{max}^2$-re nézve másodfokú egyenletre jutottunk, amit megoldva $v_\mathrm{max}\approx 15\,\mathrm{m/s}$. Az a) kérdés a motoros érintőirányú gyorsulására kérdezett, ami
 $a_\mathrm{t}=\frac{v_\mathrm{max}^2-v_0^2}{2\pi r}\approx 0{,}5\,\mathrm{\frac{m}{s^2}}.$

 c) Jó közelítéssel feltételezhetjük, hogy a motoros bedőlése egyensúlyi állapotokon keresztül történik. Így a motor kerekének talajjal érintkező pontjára (a motorral együtt mozgó rendszerben) a nehézségi erő forgatónyomatéka egyensúlyt tart a centrifugális erő nyomatékával. Ennek a két erőnek az eredője átmegy a talajjal érintkező ponton, amiből már következik, hogy
 ${\varphi}=\arctan\left(\frac{a_\mathrm{cf}}{g}\right)=\arctan\left(\frac{\frac{v^2}{r}}{g}\right)=\arctan\left(\frac{(v_0+a_\mathrm{t}t)^2}{rg}\right).$
 Behelyettesítéssel kapjuk, hogy a motoros kezdeti bedőlése $14^\circ$-os, míg a félkör végén a maximális bedőlése $30^\circ$-os. (Kiszámíthatjuk azt is, hogy a motoros a félkört 10 s alatt teszi meg, illetve észrevehetjük, hogy a bedőlés szöge nem függ attól, hogy milyen magasan van a motor-motoros rendszer tömegközéppontja, továbbá a számításaink során nem volt szükségünk a rendszer tömegének ismeretére.)
