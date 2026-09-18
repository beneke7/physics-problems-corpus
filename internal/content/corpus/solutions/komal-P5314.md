---
id: komal-P5314
source: komal
language: hu
translated: false
problem: komal-P5314
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 A folyadék kiáramlási sebessége a lyuk feletti folyadékoszlop magasságától függ. Mivel a lyuk mérete kellően kicsi a henger alapterületéhez képest, kezdetben ez a kiáramlási sebesség:
 $v_0=\sqrt{2gh_0}.$
 A feladat szövege szerint úgy szeretnénk üzemeltetni a fűtőszálat, hogy ez a kiáramlási sebesség állandó értékű maradjon. Ez csak úgy lehetséges, ha a folyamat során nem változik a folyadékszint magassága a hengerben, vagyis a dugattyú annyival emeli meg a folyadékszintet, mint amennyivel az a kiáramlás miatt lesüllyedne. Ezt kihasználva fel lehet írni az elzárt levegő térfogat–idő függvényét. Egy rövid $\Delta t$ idő alatt a kiáramló folyadék mennyisége:
 $\Delta V=A_1v_0\Delta t=A_1\sqrt{2gh_0}\Delta t.$
 Ha a folyadékszint magassága nem változik, akkor az elzárt levegőnek éppen ezzel az értékkel nő a térfogata. Mivel a térfogatváltozás állandó ütemű, így felírható a hengerben lévő levegő pillanatnyi térfogatának időbeli változása is:
 $V(t)=2h_0A_0+A_1\sqrt{2gh_0}t=A_0h_0\left(2+\frac{A_1}{A_0}\sqrt{\frac{2g}{h_0}}\,t\right).$
 Célszerű bevezetni a
 $V_0=A_0h_0\qquad \text{és} \qquad \frac{1}{t_0}=\frac{A_1}{A_0}\sqrt{\frac{2g}{h_0}}$
 jelöléseket. Ezekkel kifejezve a levegő térfogatának időbeli változását:
 $(1)$ $V(t)=V_0\left(2+\frac{t}{t_0}\right).$
 Ezek szemléletes jelentése:
 $V_0$ a kifolyónyílás feletti folyadékrész térfogata, $t_0$ az az idő, amennyi alatt az emelkedő dugattyú egyenletes mozgással elérné a kifolyónyílás szintjét.
 A következő meghatározandó állapotjelző a levegő nyomása, annak időbeli változása. Mivel a dugattyú tömege elhanyagolható, így az egyensúlyának feltétele az, hogy a bezárt levegő nyomásából származó erő a felette elhelyezkedő folyadék hidrosztatikai nyomásával tartson egyensúlyt:
 $p(t)=p_0+\varrho g h(t),$
 ahol $h(t)$ a folyadékoszlop pillanatnyi magassága. Ez a magasság a gáz térfogatának ismeretében így számolható:
 $h(t)=4h_0- \frac{{V(t)}}{A_0}.$
 A nyomás tehát
 $(2)
$ $p(t)=p_0\left(3-\frac{t}{t_0}\right).$

 Megjegyzés. Ezt az eredményt úgy is megkaphatjuk, hogy meggondoljuk: kezdetben a gáz nyomása a külső légnyomás ($p_0$) és a $2h_0$ magas folyadékoszlop $2p_0$ hidrosztatikai nyomásának összege, tehát $3p_0$, továbbá az időben egyenletesen változó hidrosztatikai nyomás $t_0$ idő alatt csökkenne $p_0$-lal.

 $a)$ Kicsiny $\Delta t$ idő alatt a levegővel (melyre $f=5$) közlendő hő a hőtan első főtétele szerint:
 $\Delta Q=\frac{f}{2}\Delta (pV)+p\Delta V=\frac{7}{2}p\Delta V+\frac{5}{2}V\Delta p.$
 Az (1) és (2) összefüggések felhasználásával $\Delta V=(V_0/t_0)\Delta t$, illetve $\Delta
p=-(p_0/t_0)\Delta t$. Ezek szerint a fűtőszál teljesítménye
 $P(t)=\frac{\Delta Q}{\Delta t}=\frac{p_0V_0}{2t_0}\left(11-12\frac{t}{t_0}\right).$
 Látjuk, hogy a fűtőszál teljesítményét időben egyenletesen csökkentenünk kell, ha az állandó kiáramlási sebességet fenn akarjuk tartani.
 $b)$ Azt is látjuk, hogy $t^*=\frac{11}{12}t_0$ idő elteltével a teljesítmény már nullára csökken. A továbbiakban hűteni kellene a gázt, erre a fűtőszál nyilván nem képes, tehát a folyamat ,,megszalad''.

 Megjegyzés. A továbbiakban a gáz állapotát a $p-V$ diagramon szemléltető pont letér a lineáris szakaszról, és az adiabata mentén halad tovább. Anélkül, hogy hőt közölnénk a rendszerrel, a levegő térfogata nő, a nyomása és a hőmérséklete csökken. A nyomás csökkenése azonban nem olyan ütemű, mint amennyi a folyadékszint változatlan magasságban tartásához elegendő lenne, tehát a hengerben a folyadékszint ugrásszerűen emelkedni fog, a rendszer gejzírszerű viselkedésbe kezd.

 Ellenőriznünk kell még, hogy $t=t^*$ időpontig (vagy még előtte) nem éri-e el a dugattyú a kifolyónyílást. Mivel $t^*<t_0$,
 $V(t^*)=\left(2+\frac{11}{12}\right)V_0\approx 2{,}92\,V_0<3\,V_0,$
 a dugattyú még éppen a kifolyónyílás alatt maradt. Érdekes, hogy a $p(t)\cdot V(t)$-vel arányos hőmérséklet a melegítés során a $t=\tfrac12 t_0$ időpillanatban éri el a maximális értékét, ettől kezdve a levegő – jóllehet a fűtőszállal fűtjük – hűl!
