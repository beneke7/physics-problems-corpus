---
id: komal-P4880
source: komal
language: hu
translated: false
problem: komal-P4880
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 A tekercsben folyó, időben változó nagyságú áram által létrehozott mágneses fluxus: 
 $\Phi(t)=\mu_0\frac{N I(t)}{\ell}\cdot \frac{d^2\pi}{4},$ 
 így a körvezető gyűrűben indukált feszültség nagysága 
 $U=\frac{\Delta\Phi}{\Delta t}=\mu_0\frac{N d^2\pi}{4\ell}\cdot \frac{\Delta I(t)}{\Delta t},
$ 
 aminek hatására abban 
 $I'=\frac{U}{R}=\mu_0\frac{N d^2\pi}{4\ell R}\cdot \frac{\Delta I(t)}{\Delta t}$ 
 áram indul meg. Az $I(t)$ áram változási sebességének nagysága: 
 $\left\vert\frac{\Delta I(t)}{\Delta t}\right\vert=100~\frac{\rm A}{\rm s}.$ 
 Mivel $I(t)$ időben egyenletesen változik, $U$ és $I'$ is időben állandó, tehát a körvezetőnél önindukciós jelenséggel nem kell számolnunk. 
 $a)$ Abban a pillanatban, amikor $I(t)=0$, a tekercs saját mágneses tere is nulla, a körvezetőben folyó áram viszont a gyűrű középpontjában 
 $B'=\mu_0\frac{I'}{2r}=\mu_0^2\frac{N d^2\pi}{8\ell rR}\cdot \frac{\Delta I(t)}{\Delta t}=
\frac{(12{,}6\cdot10^{-7})^2\cdot 10^3\cdot 0{,}044^2\,\pi\cdot 10^2}{8\cdot 0{,}025\cdot 10^{-5}}~{\rm T}=0{,}05
 ~{\rm mT}
$ 
 nagyságú mágneses indukciót hoz létre. 
 $b)$ A tekercsben folyó áram erőssége a kérdéses pillanatokban 
 $I_1=\pm 100~\frac{\rm A}{\rm s}\cdot \Delta t=\pm 0{,}1~\rm A.$ 
 Ekkora áram a tekercs középpontjában 
 $B= \mu_0\frac{N I_1}{\ell}=\pm 0{,}13~{\rm mT}
$ 
 mágneses indukciót eredményez. (A tekercs által keltett mágneses indukció a tekercs tengelyével párhuzamos, iránya az áram irányától és a tekercselés irányától függ, de a két esetben biztosan ellentétes.) 
 Az eredő mágneses indukció a tekercs és a körvezető áramának együttes hatására jön létre. A tekercs időben csökkenő mágneses indukciója a körvezetőben olyan feszültséget indukál, amelynek hatására meginduló áram a változást mérsékeli (Lenz-törvény), tehát $B'$ a tekercs $B$ indukcióját növeli. Az eredő mágneses indukció nagysága ezek szerint az $a)$ alkérdésben szereplő időpont előtt $\Delta t$ idővel 
 $\vert B_1\vert =\vert B(-\Delta t)+B'\vert =\vert 0{,}13~{\rm mT}+0{,}05~{\rm mT}\vert =0{,}18~{\rm mT},
$ 
 utána pedig 
 $\vert B_2\vert =\vert B(+\Delta t)+B'\vert =\vert -0{,}13~{\rm mT}+0{,}05~{\rm mT}\vert =0{,}08~{\rm mT}.
$
