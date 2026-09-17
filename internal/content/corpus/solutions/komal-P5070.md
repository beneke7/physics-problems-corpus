---
id: komal-P5070
source: komal
language: hu
translated: false
problem: komal-P5070
figure_files: [komal-P5070-sol-fig1.gif]
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 Tekintsük a megfeszített, de egyébként még terheletlen rugó egy olyan $P$ pontját, amely a mennyezettől $\ell_1$, a talajtól pedig $\ell_2$ távolságban van (lásd az ábrát ). Nyilván $\ell_1+\ell_2=\ell$. Számítsuk ki, hogy mekkora $x$ távolsággal süllyed le a rugó ezen pontja, ha ott $F$ nagyságú, függőlegesen lefelé ható erőt fejtünk ki a rugóra. 

 A rugó $P$ feletti részének nyújtatlan hossza $d_1$, az alsó rugódarabé pedig $d_2$. Nyilván fennáll, hogy $d_1+d_2=d$, és mivel az egyes rugórészekre és a teljes rugóra is ugyanakkora erő hat denevér nélkül: 
 $\frac{d}{d_1}=\frac{\ell}{\ell_1},\qquad \frac{d}{d_2}=\frac{\ell}{\ell_2}.$ 
 A felső rugó megnyúlása 
 $\ell_1+x-d_1=d_1\left(\frac\ell{d}-1\right)+x,$ 
 a benne ébredő erő tehát 
 $F_1=D\frac{d}{d_1}d_1\left(\frac\ell{d}-1\right)+D\frac{d}{d_1}x=D(\ell-d)+D\frac{\ell}{\ell_1}x.$ 
 Felhasználtuk, hogy a rugó felső részének megfelelő rugódarab rugóállandója a hosszával fordítottan arányos, esetünkben tehát $D_1=Dd/d_1=D\ell/\ell_1$, és hasonlóan az alsó rész rugóállandója $D_2=D\ell/\ell_2$. Ennek megfelelően az alsó rugódarab által (függőlegesen lefelé) kifejtett erő: 
 $F_2=D(\ell-d)-D\frac{\ell}{\ell_2}x,$ 
 vagyis a teljes külső erő és a $P$ pont elmozdulása közötti kapcsolat: 
 $F(x)=F_1-F_2=D\left(\frac{\ell}{\ell_1}+\frac{\ell}{\ell_2}\right) x.$ 

 Megjegyzés: A megfeszített rugó éppen úgy viselkedik, mint egy $D$ rugóállandójú, $\ell$ hosszúságú, kezdetben feszítetlen rugó. Ez utóbbi azonban húzó-nyomó rugó kell hogy legyen, hiszen az alsó rugó függőlegesen lefelé ható erő esetén megrövidül, benne nyomófeszültségek alakulnak ki. Az előfeszítés azt eredményezi, hogy a könnyebben megvalósítható ,,húzó'' rugóval is létrehozható (nem túl nagy deformációk esetén) úgy a felfelé, mind pedig a lefelé ható eredő erő. 

 A továbbiakban vizsgáljuk meg, mekkora $x$ távolsággal süllyed le a rugó felezőpontja felett $y$ távolságban elhelyezett $mg$ súlyú test (a denevér) az egyensúlyi állapotában. Ilyenkor 
 $\ell_1=\frac{\ell}{2}-y,\qquad \ell_2=\frac{\ell}{2}+y,$ 
 az egyensúly feltétele tehát 
 $D\ell\left(\frac{1}{\frac{\ell}{2}-y }+\frac{1}{\frac{\ell}{2}+y }\right) x=mg,$ 
 vagyis 
 $\ell x=\frac{mg}{D\ell}\left(\frac{\ell^2}{4}-y^2\right).$ 
 Célszerű bevezetni a dimenziótlan 
 $(1)$ $\lambda \equiv\frac{mg}{D\ell}$ 
 jelölést, ezzel az $y$ és $x$ közötti kapcsolat: 
 $(2)$ $x=\lambda\frac{\ell}{4}-\lambda\frac{y^2}{\ell}.$ 
 $a)$ Ha $\ell/2$ magasan lévő pontba repül a denevér, ami az $y=0$ esetnek felel meg, akkor az egyensúly beállta után (1) és (2) szerint 
 $(3)$ $x=\frac{\lambda}{4}\ell=\frac{mg}{4D}$ 
 távolsággal kerül lejjebb. 

 Megjegyzés. Feltételeztük, hogy $x<(\ell-d)/2$ (vagyis a rugó előfeszítettsége elegendően nagy, és így a denevér alatt lévő rugódarab még az egyensúlyi állapotban is feszes marad). 

 $b)$ Ha a denevér nagyon lassan, óvatosan felmászik a rugónak egy olyan $P$ pontjába, amely – ha a deformáltság a rugó mentén mindenhol ugyanakkora lenne – $y$ távolsággal lenne magasabban a felezőpontnál, és onnan éppen $x=y$ távolsággal süllyed le, akkor a talajtól mért távolsága továbbra is $\ell/2$ maradna. A (2) egyenlet számunkra érdekes $y>0$ megoldása $x=y$ esetén: 
 $(4)$ $y=\frac{\ell}{2\lambda}\left(\sqrt{1+\lambda^2}-1\right)=\frac{D\ell^2}{2mg}\left(\sqrt{1+\frac{m^2g^2}{D^2\ell^2}}-1\right).$ 

 Megjegyzés: Ha a rugó a denevér súlyához képest viszonylag erős, vagyis $D\ell \gg mg,$ akkor $y\ll \ell$ és $D_1\approx D_2\approx 2D$, a denevér által okozott rugómegnyúlás $y\approx mg/(4D)$, ami éppen az $a)$ alkérdésben szereplő $x$-szel egyenlő. 

 A denevér mászása közben az egész rendszer energiájának megváltozása (a denevér gravitációs helyzeti energiájának változása és a rugók rugalmas energiájának változása) így adható meg: 
 $\Delta E=mgx+\frac{1}{2}\left(D_1+D_2\right)\,y^2-\frac{1}{2}\left(2D\right)\,2x^2=
\frac{(mg)^2}{8D}+\frac{D\ell^2}{4}\left(\sqrt{1+\frac{m^2g^2}{D^2\ell^2}}-1\right).$ 
 Erős rugó határesetben $\Delta E={m^2g^2}/(4D).$ 

 Megjegyzés: A mechanikai energiaváltozást az egyszerűbb 
 $\Delta E=\frac{mg}{2}(x+y)$ 
 képlet alapján is ki lehet számítani, ahol $x$-et és $y$-t természetesen ki kell fejezni (3).nak és (4)-nek megfelelően $D$, $mg$ és $\ell$ segítségével. A képlet szemléletes jelentése a következő. A denevér és a rugórendszer kezdeti energiája az $\ell/2$ magasságból $x$ távolságnyit lassan (gyorsulásmentesen) lesüllyesztett testen végzett munkával egyenlő. (A rugalmas energiát a terheletlen, de megfelelően előfeszített állapotban választjuk nullának, a helyzeti energia nullpontját pedig a rugó felezőpontjához igazítjuk.) A végzett munka az átlagos $mg/2$ erő és az $x$ elmozdulás előjeles szorzata: $-mgx/2.$ A felmászás utáni állapot rugalmas energiája azzal a munkával egyenlő, amennyivel a rugó megfelelő $P$ pontját lassan $y$ távolsággal lejjebb tudjuk húzni. Ez ismét az átlagos húzóerőből számítható: $mgy/2$. A két energia különbsége a denevér által előidézett mechanikai energiaváltozás. 
 A denevér által végzett munka legalább akkora, mint a mechanikai energia növekedése. Ennél azonban nagyobb is lehet, ha a denevér gyorsan, vagy ugrásszerűen mozog, hiszen ekkor a rugóban rugalmas hullámok keletkezhetnek, amelyek lecsillapodása során hő fejlődik.

![solution figure](../../raw_html/komal_figures/komal-P5070-sol-fig1.gif)
