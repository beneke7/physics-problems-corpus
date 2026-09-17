---
id: komal-P5196
source: komal
language: hu
translated: false
problem: komal-P5196
figure_files: [komal-P5196-sol-fig1.gif]
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 $a)$ A lendületmegmaradás törvénye szerint 
 $(M-\Delta M)(v+\Delta v)+(v-u)\Delta M=Mv,$ 
 ahonnan (a másodrendűen kicsi $\Delta M\cdot \Delta v$ kifejezés elhanyagolása után) 
 $(1)$ $u\frac{\Delta M}{M}=\Delta v. $ 
 $b)$ Az (1) összefüggéseket összegezve a rakéta pillanatnyi ($M$ tömeghez tartozó) sebességére a 
 $(2)$ $v(M)=u\sum \frac{\Delta M}{M}\approx \int_{M}^{M_0} \frac{1}{M}\,{\rm d}M=u\ln\frac{M_0}{M} $ 
 összefüggés adódik. Ezt az egyenletet, amely az idealizált (gravitáció és légellenállás nélküli) rakétamozgás alapképlete, Ciolkovszkij-egyenletnek nevezik. 
 $c)$ A rakétából és a kiáramló gázokból álló rendszer összes mozgási energiájának megváltozása az indulási (földi) vonatkoztatási rendszerben ugyanakkora, mint bármelyik másik (a Földhöz képest $v_0$ sebességgel mozgó) rendszerben: 
 $\Delta \left(\sum_i \frac{1}{2}m_i(v_i-v_0)^2\right)=\Delta \left(\sum_i \frac{1}{2}m_iv_i^2\right) -v_0\cdot \Delta\left(\sum_i m_iv_i\right)+
 \frac{1}{2}v_0^2\cdot \Delta \left(\sum_im_i\right).
$ 
 A jobb oldal második összege a lendületmegmaradás, a harmadik pedig a tömegmegmaradás törvénye szerint állandó (vagyis a megváltozásuk nulla), így valóban fennáll, hogy 
 $\Delta \left(\sum_i \frac{1}{2}m_i(v_i-v_0)^2\right)=\Delta \left(\sum_i \frac{1}{2}m_iv_i^2\right).$ 
 A teljes (zárt) rendszer egyes részeinek energiaváltozása függ a vonatkoztatási rendszer megválasztásától. Ha például a rakéta pillanatnyi nyugalmi rendszerében számoljuk ki a mozgási energia kicsiny megváltozását, ez a rakétára nézve $\Delta v^2$-tel arányos, tehát első (lineáris) közelítésben nulla. A kiáramló gázok mozgási energiájának megváltozása ebben a rendszerben 
 $\Delta E^\text{(gázok)}=\Delta M\cdot \frac{u^2}{2},$ 
 az összes mozgási energia változása tehát 
 $(3)$ $\Delta E^\text{(összes)}=\sum\Delta E^\text{(gázok)}=\frac{1}{2}\left(M_0-M\right)u^2.$ 
 $d)$ A rakétahajtás mechanikai hatásfoka (az indulástól a $v(M)$ sebességet elérő állapotig) a (2) és (3) összefüggések felhasználásával: 
 $\eta=\frac{E^\text{(rakéta)}}{E^\text{(összes)}}=\frac{\frac{1}{2}Mv^2(M)}{\frac{1}{2}(M_0-M)u^2}=\frac{\ln^2(M_0/M)}{M_0/M-1}.$ 
 Látható, hogy $\eta$ csak a $k=M/M_0$ tömegaránytól függ. Induláskor ($k\approx 1$ esetben, amikor a rakétának még nagy a tömege, de kicsi a sebessége) a hatásfok nagyon kicsi: $\eta\approx k-1$. Ugyancsak kicsi (nullához tart) a hatásfok akkor, amikor a rakéta tömege már sokkal kisebb, mint az induló tömeg, jóllehet a rakéta sebessége ilyenkor már nagy. Az $\eta(k)$ függvénynek $k\approx 0{,}203$-nál van maximuma, és a maximum értéke 0,647. 

 A rakétahajtás mechanikai hatásfoka tehát nem lehet nagyobb, mint kb. 65 százalék.

![solution figure](../../raw_html/komal_figures/komal-P5196-sol-fig1.gif)
