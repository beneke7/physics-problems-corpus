---
id: komal-P5260
source: komal
language: hu
translated: false
problem: komal-P5260
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 $a)$ Ha a testek tömegét megduplázzuk, akkor a helyzet olyan, mintha egymás mellett két azonos rendszer lenne, ha pedig háromszorosra növeljük a tömegeket, akkor három egymás melletti összeállításnak feleltethető meg a helyzet. Ebből az következik, hogy a testek gyorsulása ugyanakkora marad (2 m/s$^2$), nem függ a tömegek nagyságától, hanem csak azok arányától. 
 $b)$ Tovább folytatva a fenti gondolatmenetet, azt is megállapíthatjuk, hogy adott tömegarány esetén a fonáldarabokban ébredő erő, illetve a fonál és a henger közötti súrlódási erő aránya is állandó marad. Ezt a következő módon láthatjuk be: A fonál a rögzített hengerhez szorul, és emiatt súrlódik. A fonálban lévő feszítettség folytonosan változik, az egyes fonáldarabkák nem ugyanúgy szorulnak a csigához. Az egyes fonáldarabkákra ható súrlódási erő járulékok összeadódnak, és ezek eredményezik a teljes súrlódási erőt, ami a két oldalon megjelenő fonálerők különbsége (hiszen a fonál súlytalan). Ha az egyik oldalon valamiért megnő az erő, akkor a másik oldalon is meg kell növekednie. 
 Felmerül a kérdés, hogy mi a kapcsolat a kétoldali fonálerő között. Azt a gondolatot el kell vetnünk, hogy a két erő különbsége állandó, mivel nagyobb erők esetén a fonál jobban hozzászorul a rögzített hengerhez. Mivel a súrlódási erőt (súrlódási együttható szorozva a nyomóerővel) lineáris erőtörvény határozza meg, illetve a newtoni mechanikában érvényesül a szuperpozíció elve, ezért azt állapíthatjuk meg, hogy ahányszorosára növekszik az egyik oldalon a fonálerő, annyiszorosára nő a fonálerő a másik oldalon. Ezt úgy is kiokoskodhatjuk, hogy a nagyobb fonálerőt úgy képzeljük el, mintha egymás mellé fektetnénk – párhuzamosan – ugyanolyan fonalakat, ugyanakkora feszítettséggel. (Ilyen gondolattal találkozhatunk az egymással párhuzamosan kapcsolt rugók esetében is.) 
 Számítsuk ki a fonálerőket a kiinduló helyzetben (az egyszerűség kedvéért $g\approx 10~ \rm m/s^2$-tel számolva). 
 A bal oldalon 
 $K_\text{bal}-mg=ma, \qquad\rightarrow\qquad K_\text{bal}=m(g+a)=m(12~\rm m/s^2 ).$ 
 $3mg-K_\text{jobb} =3ma, \qquad\rightarrow\qquad K_\text{jobb}=3m(g-a)=m(24~\rm m/s^2 ).$ 
 A jobb oldali fonálerő tehát éppen a kétszerese a bal oldalinak (függetlenül attól, hogy mekkorák a tömegek). Megállapíthatjuk tehát, hogy a henger két oldalán a fonálerők aránya mindig 2, és azon az oldalon nagyobb az erő, ahol lefelé gyorsul a test. Mindezek alapján a következő két egyenletet írhatjuk fel, amikor $8m$ és $3m$ tömegeket rögzítettünk a két fonáldarabra. A bal oldalra: 
 $8mg-2K=\,8ma,$ 
 illetve a jobb oldalra: 
 $K-3mg=3\,ma.$ 
 Ha az első egyenlethez hozzáadjuk a második egyenlet kétszeresét, akkor a fonálerők kiesnek, és a következő eredményre juthatunk: 
 $2mg=14\,ma, \qquad\rightarrow\qquad a=\frac17 g=\frac{10}7~ \rm m/s^2 .$ 
 $c)$ Kihasználjuk, hogy a csúszási és a tapadási súrlódási együttható megegyezik. Ha a testek nem mozognak, akkor a fonálerők megegyeznek a testekre ható nehézségi erők nagyságával. Határesetben a két oldalon a fonálerők aránya vagy 2, vagy 1/2. Ennek megfelelően akkor marad nyugalomban a rendszer, ha a bal oldalra akasztott $m_\text{bal}$ tömegre a következő egyenlőtlenség teljesül: 
 $\frac32 m<m_\text{bal}<6m.$ 
 Egyenlőség esetén az egyensúly instabil, tehát a legkisebb zavar esetén megindulnak a testek, és a továbbiakban egyenletesen mozognak.
