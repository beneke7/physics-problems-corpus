---
id: komal-P5606
source: komal
language: hu
translated: false
problem: komal-P5606
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 A fordulási manőver közben egy tetszőleges pillanatban legyen az űrhajó és a benne lévő hajtóanyag össztömege $m$. Az űrhajó pillanatnyi sebességével mozgó inerciarendszerben azt látjuk, hogy mialatt kicsiny $|\Delta m|$ tömegű hajtóanyag $u$ sebességgel távozik a hajtóműből (és így eközben az űrhajó tömege $\Delta m<0$ értékkel megváltozik), addig az űrhajó $\Delta v_\perp$ sebességre tesz szert ellentétes irányban, melynek nagyságát az impulzusmegmaradásból számíthatjuk ki:
 $m\Delta v_\perp=u|\Delta m|=-u\Delta m.$
 Mivel $\Delta v_\perp$ merőleges az űrhajó állócsillagokhoz viszonyított pillanatnyi sebességvektorára, ezért utóbbinak csak az iránya változik, nagysága nem. Az irányváltozás szöge:
 $\Delta\varphi\approx\frac{\Delta v_\perp}{v}=-\frac{u\Delta m}{vm}.$
 A teljes $\pi/2$ irányváltozást a kicsiny szögelfordulások összegeként írhatjuk fel. Az összegzés a felosztás finomításával integrálba megy át:
 $\frac{\pi}{2}=\sum\Delta\varphi=\sum-\frac{u\Delta m}{vm}=\frac{u}{v}\int\limits_{m_0}^{m_\textrm{végső}}-\frac{\mathrm{d}m}{m}=\frac{u}{v}\ln\frac{m_0}{m_\textrm{végső}}.$
 Ebből az űrhajó végső tömege:
 $m_\textrm{végső}=m_0 \mathrm{e}^{-\frac{v}{u}\frac{\pi}{2}}.$
