---
id: komal-P5608
source: komal
language: hu
translated: false
problem: komal-P5608
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 A könnyebb hivatkozás kedvéért jelöljünk ki egy koordináta rendszert a következők szerint: az $x$ tengely legyen a talaj síkjában és mutasson a lövés irányába, az ugyancsak a talaj síkjában fekvő $y$ tengely legyen erre merőleges, a $z$ tengely pedig legyen függőleges. Origónak válasszuk a kilövés helyét! A kilövés pillanatában a lövedék sebesség-komponensei ($v_0$-lal jelölve a kezdősebesség nagyságát) 
 $v_x=\frac{v_0}{2}=60\,\mathrm{m/s},\qquad v_y=0,\qquad v_z=\frac{\sqrt{3}v_0}{2}=104\,\mathrm{m/s}.$ 
 A pálya tetőpontján a robbanáskor a darabok $x$ és $z$ irányú sebességének pillanatnyi értéke nem változik, de akkora $y$ irányú sebességre tesznek szert, hogy a repeszek összes impulzusának változatlansága mellett, a teljes kinetikus energia a robbanás energiájának a megadott hányadával nőjön: 
$$\begin{gather*}
 m_1v_{y{,}1}+m_2v_{y{,}2}=0,\\
 \frac{1}{2}m_1v_{y{,}1}^2+\frac{1}{2}m_2v_{y{,}2}^2=E.
\end{gather*}$$
 Itt $m_1=3\,\mathrm{kg}$ és $m_2=5\,\mathrm{kg}$ a két lövedékdarab tömege, $v_{y{,}1}$ és $v_{y{,}2}$ a két vízszintes, a felszálló pálya síkjára merőleges sebesség, $E$ pedig a robbanás energiájának 80%-a, azaz $9{,}6\,\mathrm{kJ}$. Ennek az egyenletrendszernek a megoldása 
 $v_{y{,}1}=\pm\sqrt{\frac{2Em_2}{m_1(m_1+m_2)}}\simeq\pm 63\,\mathrm{m/s},\qquad v_{y{,}2}=\mp\sqrt{\frac{2Em_1}{m_2(m_1+m_2)}}\simeq\mp 38\,\mathrm{m/s}.$ 
 (Itt az előjelek azt mutatják, hogy a két repesz a felszálló pálya síkjára nézve ellentétes irányban indul, de hogy melyik merre, az nyilván nincs meghatározva.) 
 Amíg a lövedék felfelé halad, a függőleges sebessége $v_z$-ről nullára változik, tehát az emelkedés ideje ($g=9{,}81\,\mathrm{m/s}^2$ értékkel számolva) 
 $t=\frac{v_z}{g}=10{,}6\,\mathrm{s},$ 
 és nyilván ugyanennyi idő telik el, amíg a darabok a pálya tetejéről a földre érnek. Mivel a lövedék illetve a repeszek $x$ irányú sebessége az egész mozgás során, a két darab $y$ irányú sebessége pedig a robbanás után a földetérésig változatlanul $v_x$, illetve $v_{y{,}1}$ és $v_{y{,}2}$, a két lövedékrész a kilövéstől 
 $s_1=\sqrt{(2tv_x )^2+(tv_{y{,}1})^2}=1440\,\mathrm{m}\qquad\textrm{és}\qquad s_2=\sqrt{(2tv_x )^2+(tv_{y{,}2})^2}=1330\,\mathrm{m}$ 
 távolságra csapódik a talajba. 
 A becsapódó részek sebessége komponensekkel megadva $(v_x\,,\,v_{y{,}1}\,,\,-v_z)$, illetve $(v_x\,,\,v_{y{,}2}\,,\,-v_z)$. Ezen vektorok abszolút értéke számszerűleg kifejezve $v_1=136\,\mathrm{m/s}$ és $v_2=126\,\mathrm{m/s}$.
