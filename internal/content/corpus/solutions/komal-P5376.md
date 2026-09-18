---
id: komal-P5376
source: komal
language: hu
translated: false
problem: komal-P5376
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**I. megoldás.**
 Jelöljük az egész tartály térfogatát $2V_0$-lal, a dugattyú keresztmetszetét pedig $A$-val ($V_0=LA$).
 Számítsuk ki, mekkora a nyomás a bal oldali, illetve a jobb oldali térfélben, amikor a bal oldali rész térfogata $V$. A bal oldali részben lévő gáz izotermikusan nyomódik össze, így
 $p^\text{(bal)}(V)=p_0V_0\frac{1}{V}.$
 $a)$ A dugattyú $x=\frac{V_0-V}{A}$ elmozdulásakor a két rugó összesen $2Dx$ erőt fejt ki. A dugattyú egyensúlyának feltétele:
 $Ap^\text{(bal)}+2Dx-Ap^\text{(jobb)}=0,$
 vagyis
 $p^\text{(jobb)}(V)=p_0V_0\frac{1}{V}+\frac{2D}{A^2}\left(V_0-V\right),$
 azaz
 $p^\text{(jobb)}(x)=p_0\frac{1}{1-\frac xL}+\frac{2D}{A}\cdot x.$
 $b)$ Írjuk fel a hőtan I. főtételét a jobb oldali térfélben lévő gázra:
 $Q=\Delta E_{\rm b}+W^\text{(gáz)}.$
 A kezdeti állapotban a gáz nyomása $p_0$, térfogata $V_0$, a folyamat végén pedig $p_1=2p_0+\frac{2D}{A^2}\frac{V_0}{2},$ a térfogata pedig $V_1=\frac{3}{2}V_0.$ A belső energia megváltozása ezek szerint
 $\Delta E_{\rm
b}=\frac{5}{2}\left(p_1V_1-p_0V_0\right)=\frac{5}{2}\left(2p_0+\frac{2D}{A^2}\frac{V_0}{2}\right)\,\frac{3}{2}V_0-\frac{5}{2}p_0V_0
=5p_0V_0+\frac{15}{4}DL^2.$
 A gáz által végzett munka a teljes folyamat során:
 $W^\text{(gáz)}=\sum_{V=V_0}^{V_0/2}p^\text{(jobb)}\cdot \Delta V=
 \sum_{V=V_0/2}^{V_0 }p_0V_0 \frac{\Delta V}{V}+\sum_{V=V_0/2}^{V_0 }\frac{2D}{A^2}\left(V_0-V\right)\Delta V. $
 Az első összeg éppen az izotermikus tágulásnak megfelelő $p_0V_0\ln2$ (lásd pl. a Függvénytáblázatot, vagy az integrálszámítás $\int (1/x){\rm d}x=\ln x+\text{állandó}$ képletét). A második összegben $V$ lineárisan változó kifejezése szerepel, ami $V=V_0/2$-nél $DV_0/A^2,$ és $V=V_0$-nál nulla, így az átlagos értéke $DV_0/(2A^2).$ Ezt megszorozva a térfogat teljes változásával, vagyis $V_0/2$-vel, az eredmény $DV_0^2/(4A^2)=DL^2/4.$ A gáz által végzett munka ezek szerint
 $W^\text{(gáz)}=\ln2\cdot p_0V_0+\frac{1}{4}DL^2,$
 a felvett hő pedig
 $Q= \left(5+\ln2\right)p_0V_0+4DL^2,$
 amit így is írhatunk:
 $Q=(5+\ln 2)\,nRT_0+4DL^2.$

**II. megoldás.**
 Írjuk fel az I. főtételt a teljes rendszerre (ami a tartály két részéből és a rugókból áll). A jobb oldali térfélben lévő gáz felvesz valamekkora $Q$ hőt, a bal oldali részben lévő gáz viszont lead $Q^\text{(le)}$ hőt a hőtartálynak. Az I. főtétel szerint
 $Q-Q^\text{(le)}=\Delta E_{\rm b}^{\text(\rm bal)}+\Delta E_{\rm b}^\text{(jobb)}+\Delta E^\text{(rugalmas)}.$
 A bal oldalon lévő gáz hőmérséklete nem változik, emiatt $\Delta E_{\rm b}^\text{(bal)}=0$. A jobb oldali gázra (az I. megoldás jelöléseit és megfontolásait követve) felírhatjuk:
 $\Delta E_{\rm b}^\text{(jobb)}=5p_0V_0+\frac{15}{4}DL^2.$
 Az összenyomott és kinyújtott rugók rugalmas energiája:
 $E^\text{(rugalmas)}=\frac{1}{2}D\left(\frac{L}{2}\right)^2+\frac{1}{2}D\left(\frac{L}{2}\right)^2=\frac14 DL^2.$
 A bal oldali térfélben lévő gázon a dugattyú az izotermikus összenyomás során $\ln2\cdot p_0V_0$ munkát végez. A gáz belső energiája nem változik, tehát a leadott hő is ugyanakkora, mint a munka:
 $Q^\text{(le)}=\ln2\cdot p_0V_0.$
 Így az I. főtétel szerint
 $Q=Q^\text{(le)}+\Delta E_{\rm b}^\text{(jobb)}+\Delta E^\text{(rugalmas)} =(5+\ln 2)\,nRT_0+4DL^2.$
