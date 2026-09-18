---
id: komal-P5222
source: komal
language: hu
translated: false
problem: komal-P5222
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 A labdák $v_0=\sqrt{2gh}$ nagyságú sebességgel érik el a talajt, majd az alsó labda sebességirányt vált. Legyen a felfelé mutató irány pozitív. A két labda tökéletesen rugalmas ütközése alatt (az összenyomódási szakasz végén) a labdák elérnek egy közös $c=\frac{M-m}{M+m} v_0$ sebességet, majd úgy lökődnek szét, hogy a szétlökődés során a $\Delta v$ sebességváltozásuk ugyanakkora, mint az összenyomódás közben. Az alsó labda sebességváltozása $\Delta v_\text{alsó}=c-v_0$, a felső labdáé $\Delta v_\text{felső}=c-(-v_0 )=c+v_0.$ Az ütközés utáni sebességek tehát így adódnak:
 $v_\text{alsó}=c+(c-v_0 )=2c-v_0=\frac{M-3m}{M+m}\, v_0$
 és
 $v_\text{felső} =c+(c+v_0 )=2c+v_0=\frac{3M-m}{M+m}\, v_0 .$
 $a)$ A két labda kezdeti helyzeti energiája akkor alakul át teljesen a felső labda energiájává, ha az alsó labda megáll. A fenti képletek alapján ez $\frac{m}{M}= \frac{1}{3} $ tömegarány esetén valósul meg. Ezt könnyen ellenőrizhetjük, hiszen a kezdeti helyzeti energia $(m+M)gh=4mgh$, míg a felső labda ütközés utáni mozgási energiája ilyen tömegarány esetén:
 $\frac12mv_\text{felső}^2=\frac12 m \left(\frac{3M-m} {M+m}\, v_0 \right)^2=\frac12 m\left(\frac{2m}{m}\,v_0 \right)^2=2mv_0^2=4mgh.
 $
 Ebben az esetben a felső labda $2v_0$ sebességgel pattan fel, és így $4h$ magasságra jut.
 $b)$ A felső labda ütközés utáni sebességét a $k = m/M$ tömegaránnyal is kifejezhetjük:
 $v_\text{felső}=\frac{ 3M-m}{M+m} v_0=\frac{3-k}{1+k}\, v_0 .$
 Beláthatjuk, hogy a fenti kifejezésben lévő tört (a fizikailag reális $k>0$ értékeknél) akkor maximális, ha $k\approx 0$, tehát akkor repül a legmagasabbra a felső labda, ha tömege elhanyagolhatóan kicsi az alsó labda tömegéhez képest. Ebben az esetben a felső labda végsebessége $3v_0$, tehát a maximálisan elérhető magasság $9h$.

 Megjegyzés. Sok sportban történik ütő-labda ütközés. Ha az ütő tömegéhez képest elhanyagolható a labda tömege, akkor az ütő sebességváltozása elhanyagolható, míg merőleges ütés esetén a labdának az ütőhöz viszonyított sebessége előjelet vált. Ha az álló labdát találja el a $v$ sebességű ütő, akkor az ütőhöz képest $-v$ sebességű labda sebessége vált előjelet, és a labda a talajhoz képest $2v$ sebességgel pattan el. Ha a $v$ sebességű ütőhöz képest $-v$ sebességgel közeledik a labda, akkor az ütőhöz képest $-2v$ sebességű labda sebessége változik az ellentettjére, tehát a talajhoz képest a labda sebessége $3v$ lesz.
 $c)$ Szigorúan véve csak akkor alkalmazhatjuk a feladat szövegében leírt ütközési modellt, ha a két labda csak egyszer ütközik. Írjuk fel a labdák ütközés utáni sebességeit:
 $v_\text{alsó}= \frac{M-3m}{M+m}\, v_0= \frac{1-3k}{1+k} \, v_0,$
 $v_\text{felső}= \frac{3M-m}{M+m}\, v_0=\frac{3-k}{1+k}\, v_0 .$
 Abban az esetben, ha $k<\tfrac13$ , akkor az ütközés után mindkét labda felfelé repül, a felső gyorsabban, mint az alsó. Ha $k=\tfrac13$, akkor (ahogy ezt már láttuk fentebb) az alsó labda megáll, a felső viszont felrepül. Ha $k$ egy kissé nagyobb$\tfrac13$-nál, akkor az alsó labda visszapattan, újra ütközik a talajjal, de utána nem éri utol a felső labdát.
 Akkor következik be a két labda között a második ütközés is, ha a talajról visszapattanó alsó labda utoléri a felsőt. Ennek a feltétele ez:
 $-\frac{1-3k}{1+k} v_0>\frac{3-k}{1+k}\,v_0,$
 amiből következik, hogy $k>1$. Ha $k$ éppen 1, vagyis a két labda tömege megegyezik, akkor az ütközéskor sebességet cserélnek, majd az alsó labda visszapattan a talajról, és a továbbiakban együtt szállnak a magasba, de már nem érintkeznek többet. Tehát a két labda akkor ütközik egyszer, ha $k\le1$.
 Tegyük fel, hogy az ütközési modell még akkor is jó, ha a labdák kétszer is ütköznek, de háromszor már nem. Ilyenkor $k>1$. Nincs mit tenni, a második ütközés utáni sebességeket is ki kell számolni, mert csak így deríthetjük ki a harmadik ütközés feltételét. Hosszabb számolás után erre juthatunk:
 $v_\text{alsó,2}=\frac{10k-5k^2-1}{(1+k)^2}\, v_0,$
 $v_\text{felső,2}=\frac{10k-k^2-5}{(1+k)^2} \, v_0 .$
 Eredményünket ellenőrizhetjük például a $k = m/M = 3$ tömegarány esetében. Ilyenkor az első ütközés után a felső labda megáll, az alsó pedig $2v_0$ sebességgel pattan vissza róla, majd a talajról történő visszapattanás után az álló labdát $2v_0$ sebességgel találja el. A rugalmas ütközéskor a köztes közös sebesség $v_0/2$ lesz, tehát a második ütközés után a felső labda $v_0$ sebességgel indul el felfelé, míg az alsó szintén $v_0$ sebességgel, de lefelé indul. Lényegében ugyanaz történik, mint a $k = \tfrac13$ esetben, hiszen ilyenkor is végül a két labda azonos $v_0$ sebességgel fog felfelé mozogni. Ha behelyettesítünk a fenti képletekbe, akkor megnyugtató módon ugyanezekre a számértékekre jutunk:
 $v_\text{alsó,2}(k=3))= \frac{10k-5k^2-1}{(1+k)^2}\, v_0=-v_0,$
 $v_\text{felső,2}(k=3))= \frac{10k-k^2-5}{(1+k)^2} \, v_0=v_0.$
 Ezek szerint arra jutottunk, hogy akkor következik be a két labda között harmadik ütközés is, ha $k>3.$
 Összefoglalva tehát arra jutottunk, hogy $k\le 1$ esetén a két labda csak egyszer ütközik, $1<k\le3$ esetében kétszer ütköznek a labdák, míg $k>3$ esetén kettőnél többször. Minél többszörös az ütközés, annál kevésbé realisztikus a feladat szövegében leírt ütközési sorozat, mert a labdák középpontjának mozgásiránya el fog térni a függőlegestől.
