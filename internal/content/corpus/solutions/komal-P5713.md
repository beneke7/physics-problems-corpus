---
id: komal-P5713
source: komal
language: hu
translated: false
problem: komal-P5713
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 Legyen a vitorla területe $A$, vastagsága $d$, anyagának sűrűsége $\varrho$, a Naptól mért távolsága pedig $r$. Feltételezzük, hogy a vitorla merőleges a ráeső fény irányára. 
 Az alumíniumvitorla tömege $m=Ad\varrho$, az egész berendezés tömege ennél nyilván nagyobb, hiszen valamilyen merevítő szerkezettel is rendelkezik. A szerkezetre ható gravitációs erő 
 $F_1>\frac{\gamma Mm}{r^2}=\frac{\gamma MdA\varrho}{r^2},$ 
 ahol $M$ a Nap tömege, $\gamma$ pedig a Newton-féle gravitációs állandó. 
 A napvitorlának ütköző és arról visszaverődő fény impulzusa megváltozik, emiatt erőt fejt ki az alumíniumfóliára. A fényt $E=hf$ energiájú, $p=\frac{h}{\lambda}=\frac{E}{c}$ impulzusú fotonok együttesének tekintjük, minden egyes foton impulzusváltozása $\varDelta p={2E}/{c}$, és ugyanez az egyenlőség áll fenn a fóliára eső teljes fény kétszeres energiájára és az impulzusváltozására. 
 A Naptól $R=1\,\mathrm{CsE}=150\,\textrm{millió km}$ távol lévő, $A$ területű fóliára $\varDelta t$ idő alatt $E=LA\varDelta t$ energiájú fény érkezik, ahol $L=1360\,\mathrm{W/m^2}$ az ún. napállandó. Ha az alumíniumfólia a Naptól $r$ távolságban található, a rá eső energia $(R/r)^2$ arányban kisebb. A fény impulzusváltozása tehát 
 $\varDelta p=\frac{2E}{c}=\frac{2LA}{c}\left(\frac{R}{r}\right)^2\,\varDelta t,$ 
 és így az alumíniumfóliára ható (a fénynyomásból származó) erő 
 $F_2=\frac{\varDelta p}{\varDelta t}=\frac{2LA}{c}\left(\frac{R}{r}\right)^2.$ 
 Az űreszköz akkor maradhat a bolygóktól távoli helyen nyugalomban, ha $F_1=F_2$, vagyis 
 $\frac{\gamma MdA\varrho}{r^2}<\frac{2LA}{c}\left(\frac{R}{r}\right)^2.$ 
 azaz 
 $d<\frac{2LR^2}{\gamma M\varrho c.}$ 
 (Érdekes, hogy az eredmény független $A$ és $r$ nagyságától.) 
 A fenti képlet jobb oldalán ismert nagyságú mennyiségek szerepelnek, de azok behelyettesítése előtt érdemes még egy átalakítást elvégezni. Tudjuk, hogy a Föld a Naptól $R$ távolságban $T=1$ éves periódusidővel kering, tehát Newton törvénye szerint 
 $\frac{\gamma M}{R^2}=R\left(\frac{2\pi}{T}\right)^2,$ 
 azaz 
 $\gamma M=\frac{4\pi^2R^3}{T^2.}$ 
 Ezt a korábban kapott kifejezésbe helyettesítve kapjuk, hogy 
 $d<\frac{LT^2}{2\pi^2R\varrho c}\approx\frac{1360\cdot(365\cdot 24\cdot 3600)^2}{2\cdot 3{,}14^2\cdot 1{,}5\cdot 10^{11}\cdot 2700\cdot 3\cdot 10^8}\,\mathrm{m}\approx 0{,}5\,\mu\mathrm{m}.$ 
 Ilyen vékony alumíniumfóliával tehát a diák elképzelése elvben megvalósítható lenne, jóllehet a berendezés merevítése és a helyzetének stabilizálása nagyon komoly technikai nehézségeket jelentene.
