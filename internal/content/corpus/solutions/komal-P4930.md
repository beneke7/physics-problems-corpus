---
id: komal-P4930
source: komal
language: hu
translated: false
problem: komal-P4930
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 Jelöljük a fonál hosszát $\ell$-lel, a háromszög átfogóját pedig $L$-lel. Amikor a fonál $\varphi$ szöget zár be a vízszintessel, az inga nehezékének sebessége az energiamegmaradás
 $\frac{1}{2}mv^2=mg\ell\sin\varphi$
 tétele szerint
 $v= \sqrt{2g\ell\sin\varphi}.$
 A fonalat feszítő $K$ erő a fonál irányú mozgásegyenletből számítható ki:
 $K-mg\sin\varphi=m\frac{v^2}{\ell},\qquad \text{ahonnan} \qquad K=3mg\sin\varphi.$
 Ez a fonálerő, amely
 $K_1=K\cos\varphi= 3mg\sin\varphi\cos\varphi$
 nagyságú vízszintes és
 $K_2=K\sin\varphi= 3mg\sin^2\varphi$
 nagyságú függőleges komponensre bontható, forgatónyomatékot fejt ki a hasáb alsó (bal oldali) oldaléle körül. Ugyancsak van forgatónyomatéka ezen él körül a hasábra ható $Mg$ nagyságú nehézségi erőnek is. Az eredő forgatónyomaték:
 $f(\varphi)=K_1\cdot L\sin\alpha-K_2\cdot L\cos\alpha- Mg\cdot \frac{2L}{3}\cos\alpha=$
 $(1)$ $=3mgL \left(\sin\varphi\cos\varphi\sin\alpha-\sin^2\varphi\cos\alpha -\frac{2M}{9m}\cos\alpha\right).$
 $a)$ Kezdetben (az inga elindulásakor) a fenti forgatónyomaték negatív (az óramutató járásával megegyező irányú), majd fokozatosan csökken a nagysága és a megadott $\varphi=20^\circ$-nál nullává válik, majd előjelet vált. Ennél a fonálhelyzetnél billen meg a hasáb. A fenti zárójeles kifejezés eltűnéséből a kérdéses tömegarányra az
 $\frac{M}{m}=\frac{9}{2\cos 60^\circ}\left(\sin 20^\circ \cos 20^\circ \sin 60^\circ-\sin^2 20^\circ\cos60^\circ\right)\approx 2{,}0
$
 eredményt kapjuk.
 $b)$ A hasáb megbillenésének feltétele az (1) egyenlet zárójeles kifejezésének eltűnése:
 $\frac{2M}{9m}\cos\alpha=\sin\varphi\cos\varphi\cdot \sin\alpha-\sin^2\varphi\cdot \cos\alpha=
\frac{\sin(2\varphi)}{2}\sin\alpha-\frac{1-\cos(2\varphi)}{2}\cos\alpha,$
 amit ilyen alakban is írhatunk:
 $(2)
$ $\cos(2\varphi-\alpha)=\left(\frac{4M}{9m}+1\right)\cos\alpha.$
 Ha
 $\frac Mm >\frac94\left(\frac{1}{\cos\alpha}-1\right)=2{,}25,$
 akkor (2) jobb oldala 1-nél nagyobb, az egyenlet nem teljesülhet, tehát a hasáb nem billenhet meg. Az $M=2{,}25\,m$ határesetben a forgatónyomaték $\varphi=\tfrac12\alpha=30^\circ$-nál ugyan nullává válik, de nem vált előjelet, tehát a hasáb ilyen tömegarány esetén sem billen fel.
