---
id: komal-P5116
source: komal
language: hu
translated: false
problem: komal-P5116
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**I. megoldás.**
 Jelöljük a gömbhéjak belső sugarát $R_1$-gyel és $R_2$-vel, kezdeti töltésüket $Q_1$-gyel és $Q_2$-vel. (Esetünkben $R_1=R$, $R_2=3R$, $Q_1=2Q$, $Q_2=Q$, de a megoldást általános esetre is megadjuk.) 
 A két (egymástól távol lévő) gömbhéjon belül és azon kívül is az elektromos mező ugyanolyan, mint egy-egy ponttöltés (vagy kicsiny, gömbszimmetrikusan eloszló töltés) Coulomb-féle elektrosztatikus erőtere. A különbség ,,mindössze'' annyi, hogy a vezető gömbhéj elektromos megosztása miatt annak $d$ vastagságú ,,belsejében'' az elektromos térerősség nulla. A $Q_1$ töltés körül például ilyen az elektromos mező: 
 $E(r) =\begin{cases} \frac{1}{4\pi\varepsilon_0}\,\frac{Q_1}{r^2},
 & \text{ha $\displaystyle 0<r<R_1$}; \\
 0, & \text{ha $R_1<r<R_1+d;$}\\
 \frac{1}{4\pi\varepsilon_0}\,\frac{Q_1}{r^2},&\text{ha $r>R_1+d;$}
 \end{cases}$ 
 ahol $r$ a $Q_1$ töltéstől mért távolság. 
 Hasonló elektromos mező alakul ki a másik töltés körül is, csak ott $Q_1$ helyébe $Q_2$ kerül, a gömbhéj sugara $R_2$, és $r$ a $Q_2$ töltéstől mért távolság. Ha a két gömbhéj elegendően messze van egymástól, a két erőtér ,,nem zavarja'' egymást, az eredő tér a kettő szuperpozíciója lesz. 
 Számítsuk ki az egész elrendezés elektrosztatikus energiáját az eredeti, majd a töltések felcserélése utáni esetben. A töltéscsere során végzett munka legalább annyi kell legyen, amennyi az elektrosztatikus energia megváltozása (növekedése). 
 Jelöljük a két töltés elektrosztatikus energiáját $W_0$-lal abban az esetben, amikor nincsenek ott a vezető gömbhéjak. (Pontszerű töltésekre ez az energia végtelen nagy lenne, azonban tetszőlegesen kicsi, de véges $r_0$ sugarú gömbbe zárt töltésekre már véges mennyiség.) Az elektrosztatikus mező energiasűrűsége (egységnyi térfogatra jutó energiája) $\tfrac12\varepsilon_0 E^2$, így a két töltésből és a két gömbhéjból álló rendszer energiája a ,,hiányzó'' részek levonásával így kapható meg. A hiányzó részben az elektromos térerősség pontosan olyan, mint egy megfelelő töltésű és méretű gömbkondenzátorban, az elektrosztatikus energia is ennek megfelelően számolható: 
 $W_\text{kezdeti}=W_0-\frac{d}{8\pi\varepsilon_0}\left(\frac{Q_1^2}{R_1(R_1+d)}+\frac{Q_2^2}{R_2(R_2+d)}\right).$ 
 Hasonló módon a töltések felcserélése utáni elrendezés elektrosztatikus energiája: 
 $W_\text{végső}=W_0-\frac{d}{8\pi\varepsilon_0}\left(\frac{Q_2^2}{R_1(R_1+d)}+\frac{Q_1^2}{R_2(R_2+d) }\right),$ 
 a szükséges munkavégzés pedig (legalább) 
 $W=W_\text{végső}-W_\text{kezdeti}=\frac{d}{8\pi\varepsilon_0}\left(Q_1^2-Q_2^2\right)\left(\frac{1}{R_1(R_1+d)}-\frac{1}{R_2(R_2+d)}\right).$ 
 (Vegyük észre, hogy $W$ képletéből $W_0$ kiesett, így annak tetszőlegesen nagy értéke mellett a szükséges munkavégzés véges marad, és nem függ a töltések $r_0$ sugarától.) 
 A töltések és gömbhéjsugarak megadott értéke mellett $d\ll R$ esetén: 
 $W\approx\frac{d}{3\pi\varepsilon_0}\,\frac{Q^2}{R^2}.$ 

**II. megoldás.**
 A $Q_1$ és $Q_2$ töltések felcserélése helyett úgy is elérhetjük a végállapotot, ha az egyik gömbhéj közepénél lévő $Q_1$ töltésből $\Delta Q=Q_1-Q_2$ nagyságú töltést átvezetünk a másik gömbhéj közepéhez. Az átvezetést úgy oldhatjuk meg, hogy a gömbhéjakon lévő kis lyukakon keresztül egy szigetelt vezetéket és egy áramgenerátort kapcsolunk a töltéseket ,,tároló'' és ugyancsak vezetőnek gondolt, $r_0$ sugarú gömbökhöz. (A vezeték ugyan eltorzítja a gömbhéj töltéseloszlását, és ezt a torzító hatást elég nehéz lenne figyelembe venni, de ugyanilyen zavart okoz minden más módon történő töltéscsere.) A generátor által végzett munka $U\cdot \Delta Q$, ahol $U$ a töltéstároló gömbök közötti feszültség, vagy ha ez feszültség a töltésáramlás közben változna, akkor a feszültség átlagos értéke. 
 Egyetlen töltés helyén az elektromos potenciál (a végtelen távoli ponthoz viszonyítva) a nagyon távoli pont és a gömbhéj külső felülete közötti feszültség, valamint a gömbhéj belső felülete és a töltés helye közötti potenciálkülönbség összege. A kezdeti állapotban a $Q_1$ töltés helyén a potenciál 
 $\Phi_1=\frac{Q_1}{4\pi\varepsilon_0}\left(\frac{1}{R_1+d}+\frac{1}{r_0}-\frac{1}{R_1}\right)
\approx \frac{Q_1}{4\pi\varepsilon_0}\left(\frac{1}{r_0}-\frac{d}{R_1^2}\right),$ 
 a másik töltésnél jó közelítéssel 
 $\Phi_2= \frac{Q_2}{4\pi\varepsilon_0}\left(\frac{1}{r_0}-\frac{d}{R_2^2}\right),$ 
 a feszültség tehát kezdetben 
 $U_\text{kezdeti} =\Phi_2-\Phi_1=\frac{1}{4\pi\varepsilon_0}\frac{Q_2-Q_1}{r_0} -\frac{d}{4\pi\varepsilon_0}\left(\frac{Q_2}{R_2^2}-\frac{Q_1}{R_1^2}\right).
$ 
 A töltéscsere utáni állapotban a feszültség 
 $U_\text{végső} =\frac{1}{4\pi\varepsilon_0}\frac{Q_1-Q_2}{r_0} -\frac{d}{4\pi\varepsilon_0}\left(\frac{Q_1}{R_2^2}-\frac{Q_2}{R_1^2}\right).
$ 
 Látjuk, hogy a feszültség a töltésátrendeződés közben nem marad állandó, de mivel a változás a töltés változásával arányos (lineáris), az átlagos feszültség a kezdeti és a végső feszültség számtani közepe: 
 $U_\text{átlag}=\frac{U_\text{kezdeti}+U_\text{végső}}{2}=
\frac{d}{8\pi\varepsilon_0}\left(Q_1+Q_2\right)\,\left(\frac{1}{R_1^2}-\frac{1}{R_2^2}\right).$ 
 (Vegyük észre, hogy az $1/r_0$-lal arányos, pontszerű töltéseknél végtelenhez tartó tag kiesik az átlagfeszültségből.) 
 A szükséges (minimális) munka: 
 $W=\Delta Q\cdot U_\text{átlag}=\frac{d}{8\pi\varepsilon_0}\left(Q_1^2-Q_2^2\right)\left(\frac{1}{R_1^2}-\frac{1}{R_2^2}\right)
=\frac{d}{3\pi\varepsilon_0}\,\frac{Q^2}{R^2}.$
