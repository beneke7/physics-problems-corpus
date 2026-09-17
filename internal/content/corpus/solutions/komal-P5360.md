---
id: komal-P5360
source: komal
language: hu
translated: false
problem: komal-P5360
figure_files: [komal-P5360-sol-fig1.gif, komal-P5360-sol-fig2.gif]
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 $a)$ Tekintsünk egy távoli csillagról érkező párhuzamos sugárnyalábot, ami az optikai tengellyel $\alpha$ szöget zár be ( 1. ábra ). (Az ábra az áttekinthetőség kedvéért erősen torzított, a valóságban $\alpha\ll1$ radián.) A nyaláb az objektívtől $f_1$ távol lévő fókuszsík $F$ pontjában fókuszálódik, az optikai tengelytől $f_1\alpha$ távolságban. (Kis szögekre $\tg\alpha\approx \alpha$.) 

 1. ábra 

 Egy csillag akkor esik bele a távcső látómezejébe, ha az objektív által megtört fénysugarak legalább egy része eléri a szemlencsét. Minél kevesebb ilyen fénysugár van, annál halványabb a csillag képe. A határesetnek az a helyzet felel meg, amikor az objektív tetejénél elhaladó $(m)$ jelű fénysugár éppen eléri a szemlencse tetejét ( 1. ábra ). Az $(m)$ egyenes meredekségét kétféle módon is kiszámíthatjuk, és ezek nyilván egyenlőek: 
 $\frac{D/2-f_1\alpha}{f_1}=\frac{(D/2)-(d/2)}{f_1+f_2},$ 
 ahonnan a távcső látómezejének nagysága (szögtávolságként kifejezve): 
 $2\alpha=\frac{1}{N+1}\left(\frac{d}{f_2}+\frac{D}{f_1}\right),$ 
 amit ilyen alakban is felírhatunk: 
 $2\alpha=\frac{(d+D/N)}{f_1+f_2}.$ 
 ($N=f_1/f_2$ a távcső szögnagyítása.) 
 A látómező széle felé közeledve a szemlencsén egyre kevesebb fény jut át, a csillagok egyre halványabbnak látszanak, a távcső tehát fényerő tekintetében torzít . 
 $b)$ Akkor nem lép fel fényerőtorzítás, ha az objektíven áthaladó összes fény bejut a szemlencsébe. Ez akkor valósul meg, ha a csillag iránya és az optikai tengely szöge nem nagyobb, mint a 2. ábrán látható $\beta$ szög. A határesetnek az felel meg, amikor az objektív legaljánál elhaladó $(n)$ jelű fénysugár éppen eléri a szemlencse tetejét. 

 2. ábra 
 Az $(n)$ egyenes meredekségét kétféle módon is kiszámíthatjuk, és ezek is nyilván egyenlőek: 
 $\frac{D/2+f_1\beta}{f_1}=\frac{(D/2)+(d/2)}{f_1+f_2},$ 
 ahonnan a távcső torzításmentes látómezejének nagysága (szögtávolságként kifejezve): 
 $2\beta=\frac{1}{N+1}\left(\frac{d}{f_2}-\frac{D}{f_1}\right),$ 
 amit ilyen alakban is felírhatunk: 
 $2\beta=\frac{(d-D/N)}{f_1+f_2}.$ 
 Ha egy blendével csak a fényerőbeli torzítástól mentes fénysugarakat akarjuk átengedni, akkor ennek a fényrekesznek az átmérőjét 
 $b=2f_1\beta=\frac{Nd-D}{N+1}\approx d-\frac{D}{N}$ 
 nagyságúra kell választanunk. 

 Megjegyzés. A feladatban $D/N<d$ (tehát a fenti $b$ és $\beta$ pozitív), de elvben elképzelhető, hogy $D/N>d$. Ekkor egy az objektíven áthaladó, eredetileg párhuzamos sugárnyaláb szélessége az okulár síkjában már nagyobb lesz, mint a szemlencse átmérője. Ebben az esetben a fényerő szerinti torzításmentesség feltétele az, hogy a szemlencse teljes terjedelmében essen bele az objektíven átjövő sugárnyalábba. A fentihez hasonló számolás alapján ez akkor teljesül a blende által megengedett minden irányra, ha 
 $b=\frac{D-Nd}{N+1}\approx\frac{D}{N}-d,$ 
 és továbbra is $\beta=\frac{b}{2f_1}$. Ilyen távcsövet azonban nem érdemes építeni, mert az objektív által felfogott fény egy része mindenképpen elvész, tehát a lehetségesnél kisebb lesz a kép fényessége.

![solution figure](../../raw_html/komal_figures/komal-P5360-sol-fig1.gif)

![solution figure](../../raw_html/komal_figures/komal-P5360-sol-fig2.gif)
