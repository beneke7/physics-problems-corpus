---
id: komal-P5634
source: komal
language: hu
translated: false
problem: komal-P5634
figure_files: [komal-P5634-sol-fig1.gif, komal-P5634-sol-fig2.gif, komal-P5634-sol-fig3.gif]
provenance_note: "KöMaL official solution (Hungarian)"
---

**I. megoldás.**
 A megcsúszás határán a nyomóerő és a súrlódási erő eredője a felület normálisával $\varepsilon$ szöget zár be, ez a megcsúszás határszöge. Mivel a súrlódási erő nagysága ekkor éppen a nyomóerő nagyságának $\mu$-szöröse, és a két erő merőleges egymásra, $\tan\varepsilon=\mu$. 

 a) A könyvre a nehézségi erő és a rajztábla felülete által kifejtett kényszererő hat ( 1. ábra ). A két erő csak akkor lehet egyensúlyban, ha irányuk (és nagyságuk) megegyezik. Ez alapján: 
 $\alpha=\varepsilon=\arctan\mu.$ 

 1. ábra 

 b) A könyvre most is csak a nehézségi erő és a kényszererő hat (amelynek a nagysága természetesen nem egyezik meg az a) részben szereplővel: akkorának kell lennie, hogy a lejtőre (rajztáblára) merőleges komponense kiegyenlítse a nehézségi erő lejtőre merőleges komponensét). Ezek eredőjének a felülettel párhuzamosnak kell lennie: ez az eredő erő hozza létre a könyv keresett lejtőirányú gyorsulását. A 2. ábrán berajzoltuk a könyvre ható erőket és ezek eredőjét is: ez utóbbi végpontját a kényszererő hatásvonala metszi ki a lejtővel párhuzamos egyenesből. Bejelöltünk szögeket, és megrajzoltunk néhány egyenest: látható, hogy az alul keletkező kis háromszög egyenlőszárú, és így a vízszintes szára is $ma$ hosszúságú. Ezután már az ábráról leolvashatjuk: 
 $ma=mg\tan\alpha\qquad\Rightarrow\qquad a=g\tan\alpha=\mu g.$ 

 2. ábra 

 c) A mozgást vizsgáljuk a lejtővel együtt gyorsuló vonatkoztatási rendszerben. Legyen a lejtő minimális gyorsulása $a_0$. Ekkor egy vízszintes, $ma_0$ nagyságú tehetetlenségi erő hatását is figyelembe kell venni (amely a lejtő gyorsulásával ellentétes irányba mutat). Az erőnek akkorának kell lennie, hogy kiegyenlítse a nehézségi erő és a kényszererő eredőjét. A legkisebb ilyen gyorsulást keressük, ezért a kényszererő most is az eddigi, ,,éppen nem csúszik meg lefele'' határhelyzetben van. A 3. ábrán láthatjuk, hogy a kényszererő hatásvonala kimetszi az $ma_0$ erő végpontját (és egyben meghatározza $K_3$ nagyságát is, de arra a feladat megoldásához nincs szükségünk). Az ábráról közvetlenül leolvasható a lejtő keresett legkisebb gyorsulása: 
 $ma_0=mg\tan\alpha\qquad\Rightarrow\qquad a_0=g\tan\alpha=\mu g.$ 

 3. ábra 

 Megjegyzés. A feladatnak csak akkor van értelme, ha $2\alpha<90^\circ$, és így $\mu<1$. 

**II. megoldás.**
 a) A könyvre az $mg$ nehézségi erő, a lejtőre merőleges $N$ nyomóerő és a lejtővel párhuzamos $S$ súrlódási erő hat. A könyvre ható erők lejtővel párhuzamos és lejtőre merőleges komponenseinek egyensúlya, valamint a súrlódási erő összefüggése a megcsúszás határesetében: 
$$\begin{gather*}
mg\cos\alpha=N,\\
mg\sin\alpha=S,\\
S=\mu N.
\end{gather*}$$
 $S$ kifejezését a harmadik egyenletből a másodikba behelyettesítve, majd az első két egyenletet egymással elosztva: 
 $\tan\alpha=\mu\qquad\Rightarrow\qquad\alpha=\arctan\mu.$ 

 b) A könyvre ismét három erő hat, ezek hatására a lejtővel párhuzamosan gyorsulni fog. Felírva a lejtőre merőleges komponensek egyensúlyát, a lejtővel párhuzamos mozgásegyenletet és a csúszási súrlódás összefüggését: 
$$\begin{gather*}
mg\cos 2\alpha=N,\\
ma=mg\sin 2\alpha-S,\\
S=\mu N.
\end{gather*}$$
 A harmadik egyenletből $S$, majd az első egyenletből $N$ kifejezését beírva a második egyenletbe, és rendezve: 
 $a=(\sin 2\alpha-\mu\cos 2\alpha)g.$ 
 A trigonometrikus kifejezések átalakítása, ahol felhasználjuk a $\tan\alpha=\mu$ összefüggést is: 
$$\begin{gather*}
\sin 2\alpha=2\sin\alpha\cos\alpha=2\,\sqrt{\frac{\tan^2\alpha}{1+\tan^2\alpha}}\,\sqrt{\frac{1}{1+\tan^2\alpha}}=\frac{2\tan\alpha}{1+\tan^2\alpha}=\frac{2\mu}{1+\mu^2},\\
\cos 2\alpha=\cos^2\alpha-\sin^2\alpha=\frac{1}{1+\tan^2\alpha}-\frac{\tan^2\alpha}{1+\tan^2\alpha}=\frac{1-\tan^2\alpha}{1+\tan^2\alpha}=\frac{1-\mu^2}{1+\mu^2}.
\end{gather*}$$
 Ezeket behelyettesítve a keresett gyorsulás: 
 $a=\left(\frac{2\mu}{1+\mu^2}-\mu\frac{1-\mu^2}{1+\mu^2}\right)g=\mu g.$ 

 c) Vizsgáljuk a mozgást a lejtővel együtt gyorsuló koordináta-rendszerben. Legyen a lejtő gyorsulása $a_0$. Ekkor a könyvre az eddigi három erőn kívül egy vízszintes, $-ma_0$ nagyságú tehetetlenségi erő hatását is figyelembe kell venni. Az egyensúly feltétele az a) részhez hasonlóan: 
$$\begin{gather*}
mg\cos 2\alpha+ma_0\sin 2\alpha=N,\\
mg\sin 2\alpha=ma_0\cos 2\alpha+S,\\
S=\mu N.
\end{gather*}$$
 Az egyenletrendszerből $a_0$-t kifejezve, majd a b) részből $\sin 2\alpha$ és $\cos 2\alpha$ kifejezéseit felhasználva, és egyszerűsítve: 
 $a_0=\frac{\sin 2\alpha-\mu\cos 2\alpha}{\cos 2\alpha+\mu\sin 2\alpha}g=\mu g.$ 

 Megjegyzések. 1. A feladat megoldható inerciarendszerben is: ilyenkor a három erő a könyvet $a_0$ gyorsulással gyorsítja vízszintesen (hogy ne mozogjon a lejtőhöz képest). A mozgásegyenletek: 
 $$\begin{gather*}
mg=N\cos 2\alpha+S\sin 2\alpha,\\
ma_0=N\sin 2\alpha-S\cos 2\alpha,\\
S=\mu N,
\end{gather*}$$
 amelyből a minimális gyorsulásra ugyanazt az eredményt kapjuk. 

 2. A feladat a lejtő legkisebb gyorsulását keresi, de meghatározhatjuk a legnagyobb gyorsulást is, amely esetében a könyv nem csúszik meg. Ekkor a súrlódási erő nagysága szintén maximális, de iránya ellentétes (hiszen azt kell megakadályoznia, hogy a könyv felfelé megcsússzon). Ekkor az egyensúly feltétele (a lejtővel együtt gyorsuló vonatkoztatási rendszerben): 
 $$\begin{gather*}
mg\cos 2\alpha+ma_0'\sin 2\alpha=N,\\
mg\sin 2\alpha+S=ma_0'\cos 2\alpha,\\
S=\mu N,
\end{gather*}$$
 amiből 
 $a_0'=\frac{\sin 2\alpha+\mu\cos 2\alpha}{\cos 2\alpha-\mu\sin 2\alpha}g=\frac{\mu(3-\mu^2)}{1-3\mu^2}g.$ 
 A képlet $\mu>\tfrac{1}{\sqrt{3}}$ esetben negatív értéket ad, de ez hibás eredmény, mert a tapadó súrlódás nem tudja elindítani a könyvet – ilyenkor a súrlódási erő nagysága kisebb lesz a maximális értéknél. Ezt el lehetett volna kerülni, ha az egyenletrendszer harmadik egyenlete helyett egyenlőtlenséget írunk: $0\leq S\leq\mu N$. 
 Látható, ha $\mu\geq\tfrac{1}{\sqrt{3}}$ (azaz $\alpha\geq 30^\circ$, $2\alpha\geq 60^\circ$), akkor a gyorsulás végtelen nagy lehet, a könyv ,,befeszül'', ,,rátapad'' a lejtőre.

![solution figure](../../raw_html/komal_figures/komal-P5634-sol-fig1.gif)

![solution figure](../../raw_html/komal_figures/komal-P5634-sol-fig2.gif)

![solution figure](../../raw_html/komal_figures/komal-P5634-sol-fig3.gif)
