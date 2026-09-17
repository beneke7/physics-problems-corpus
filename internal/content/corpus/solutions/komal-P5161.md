---
id: komal-P5161
source: komal
language: hu
translated: false
problem: komal-P5161
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 A forgó fémhengerben a $Q=-e<0$ töltésű elektronokra ($e$ az elemi töltés) a mágneses tér erőt fejt ki. Ennek iránya a forgástengely felé mutat, vagy azzal ellentétesen, nagysága a forgástengelytől $r$ távolságban 
 $F_\text{mágneses}= QB\omega\,r.$ 
 Az erő iránya a forgás szögsebességvektorának és a mágneses indukcióvektornak egymáshoz viszonyított állásától függ. Tekintsük pl. azt az esetet, amikor $\boldsymbol B$ és $\boldsymbol \omega$ azonos irányúak, és a sugár irányban ,,kifelé'' mutató vektorok sugár irányú komponensét tekintjük pozitívnak, a ,,befelé'' mutatókét pedig negatívnak. Ekkor a negatív töltésű elektronokra a mágneses tér $Q B\omega\,r=-eB\omega r$ nagyságú, tehát ,,befele'' mutató erővel hat. 
 A fémben az elektronok szabadon el tudnak mozdulni, a kristályrács nem fejt ki rájuk erőt. El is mozdulnak, és a megbomlott töltésegyensúly hatására kialakul egy sugár irányú elektromos mező, ami az elektronokra 
 $F_\text{elektromos}= QE(r)=-eE(r)
$ 
 erőt fejt ki. Állandósult (stacionárius) állapotban az $m$ tömegű elektronok körpályán, egyenletes forgómozgással mozognak, így rájuk az 
 $F_\text{mágneses}+F_\text{elektromos}=-mr\omega^2$ 
 mozgásegyenlet érvényes. Ebből leolvashatjuk, hogy az elektromos tér nagysága 
 $E(r)= \left(\frac{m}{e}\omega^2- B\omega\right)\cdot r\equiv K\cdot r.$ 
 Mivel elektronra az $m/e$ hányados SI-egységekben mérve nagyon kicsi szám ($10^{-12}$ nagyságrendű), a $K$ állandóban szereplő első tagot (extrém nagy, gyakorlatilag megvalósíthatatlan szögsebességeket leszámítva) nyugodtan elhanyagolhatjuk, vagyis a $K= -B\omega$ értékkel számolhatunk. 
 Tekintsük most a forgó fémhenger belsejében egy $r$ belső sugarú, $r+\Delta r$ külső sugarú, $\ell$ hosszúságú, vékony falú csövet ($\Delta r\ll r$). Ebből csőből a belső oldalán 
 $\vert E(r)\vert \,2\pi r \ell=2\pi \ell B\omega\,r^2$ 
 nagyságú elektromos fluxus (elektromos erővonal) lép ki, a külső oldalán pedig 
 $\vert E(r+\Delta r)\vert \,2\pi(r+\Delta r) \ell=2\pi \ell B\omega\,(r+\Delta r)^2
\approx 2\pi \ell B\omega\,r^2+ 4\pi \ell B\omega\,r\, \Delta r$ 
 nagyságú elektromos fluxus (elektromos erővonal) lép be a csőbe. 
 A Gauss-féle fluxustörvény szerint az elektromos mező eredő (előjeles összegzéssel kapható) fluxusa a csőben lévő töltéssel arányos: 
 $\frac{1}{\varepsilon_0}\,Q_\text{cső}=-\frac{4\pi}{\varepsilon_0}\,\ell B\omega\,r\, \Delta r.$ 
 Ha ezt a töltést (ami a szimmetria miatt egyenletesen oszlik el a csőben) elosztjuk a cső $2r\pi\ell\,\Delta r$ térfogatával, megkapjuk a töltéssűrűséget: 
 $\varrho=-2\varepsilon_0 B\omega<0.$ 
 Amint az várható volt, a negatív elektronokat a forgástengely irányába húzó mágneses Lorentz-erő a henger felületéről ,,szív el'' töltéseket, a henger belseje tehát negatív töltéssűrűségre töltődik fel (méghozzá egyenletesen), a henger felülete pedig pozitív töltésűvé válik. A felületi töltéssűrűséget a henger belsejének összes (de ellentétes előjellel vett) töltésének és a hengerpalást területének hányadosaként kapjuk meg: 
 $\sigma=-\frac{R^2\pi \ell \varrho}{2R\pi\ell}=\varepsilon_0 BR\omega.$ 
 A felületi töltéssűrűséget másképp is kiszámíthatjuk. Az egész henger semleges, így rajta kívül at elektromos térerősség nulla. A henger belsejében, közvetlenül a hengerpalást alatt $E=-B\omega R$, vagyis felületegységenként $B\omega R$ elővonal indul ki a hengerpalástból. A felületegységre jutó töltés (Gauss törvénye szerint): $\sigma=\vert \boldsymbol E\vert \varepsilon_0=\varepsilon_0 BR\omega$. 
 Ha a hengert ellenkező irányban forgatjuk (vagy $\boldsymbol B$ irányát változtatjuk meg), akkor a negatív elektronok kifelé mozognak, a felületi töltéssűrűség negatív, a henger belsejének térfogati töltéssűrűsége pedig pozitív lesz.
