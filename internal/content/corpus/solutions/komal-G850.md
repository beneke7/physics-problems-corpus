---
id: komal-G850
source: komal
language: hu
translated: false
problem: komal-G850
figure_files: [komal-G850-sol-fig1.gif, komal-G850-sol-fig2.gif, komal-G850-sol-fig3.gif, komal-G850-sol-fig4.gif, komal-G850-sol-fig5.gif]
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 Jelöljük meg a csomópontokat ( 1. ábra ). Azokat a csomópontokat amelyeket (elhanyagolható ellenállású) vezeték köt össze, azonos betűvel jelöljük, hiszen ezek lényegében ugyanazok. 

 1. ábra 

 Következő lépésben ( 2. ábra ) összevonjuk az azonos jelű csomópontokat, és a sorosan kötött ellenállásokat: Az $A$ és $B$ pont közötti felső ág ellenállása $R_{AB\textrm{felső}}=10\,\Omega+10\,\Omega=20\,\Omega$, Az $A$ és $C$ pontok között a jobb szélen pedig $R_{AC\textrm{jobb}}=23\,\Omega+40\,\Omega+37\,\Omega=100\,\Omega$. 

 2. ábra 

 Ezután kiszámítjuk a párhuzamosan kapcsolt ellenállások eredőjét, és ezekkel helyettesítjük a párhuzamosan kapcsolt elemeket. Itt az egyszerűbb írásmód miatt használni fogjuk (a villamosmérnöki gyakorlat alapján) a $\times$ jelet a ,,replusz'' (reciprokok összegének reciproka) műveletre: 
 $R_1\times R_2=\left(\frac{1}{R_1}+\frac{1}{R_2}\right)^{-1}.$ 
 $R_{AB}=20\,\Omega\times 20\,\Omega=10\,\Omega$, $R_{CD}=10\,\Omega\times 40\,\Omega=8\,\Omega$, $R_{DE}=24\,\Omega\times 24\,\Omega=12\,\Omega$. Ezután a $B$ és $E$ csomópont meg is szűnik ( 3. ábra ). 

 3. ábra 

 A következő lépés ismét a sorosan kapcsolt ellenállások összevonás. Az $A$ és $C$ pontok közötti (bal felső sarokban lévő) két ellenállás eredője $R_{AC\textrm{balfelső}}=10\,\Omega+15\,\Omega=25\,\Omega$, $R_{DF}=12\,\Omega+16\,\Omega=28\,\Omega$. Ezzel együtt érdemes az $A$ és $C$ pontok közti $100\,\Omega$-os ágat ,,áthajtani'' a bal oldalra ( 4. ábra ). 

 4. ábra 

 Egyre kevesebb ellenállásunk van, a folyamat felgyorsul: $R_{AC}=100\,\Omega\times 25\,\Omega=20\,\Omega$ ( 5. ábra a) rész ), így a $C$ csomópont megszűnik és $R_{AD\textrm{bal}}=20\,\Omega+8\,\Omega=28\,\Omega$ ( 5. ábra b) rész ), $R_{AD}=28\,\Omega\times 4\,\Omega=3{,}5\,\Omega$ ( 5. ábra c) rész ), végül $R_{AF}=3{,}5\,\Omega+28\,\Omega=31{,}5\,\Omega$ ( 5. ábra d) rész ). 

 5. ábra 

 Az eredő ellenállás tehát $31{,}5\,\Omega$. 

 Megjegyzés. Láthatjuk, hogy a végeredményt a $4\,\Omega$-os ellenállás, valamint a $D$ és $F$ pontok közötti három ellenállás (ezek eredője az $R_{DF}=28\,\Omega$) határozza meg, a többi ellenállásnak (amelyek eredője aztán párhuzamosan van kapcsolva a $4\,\Omega$-ossal) alig van szerepe.

![solution figure](../../raw_html/komal_figures/komal-G850-sol-fig1.gif)

![solution figure](../../raw_html/komal_figures/komal-G850-sol-fig2.gif)

![solution figure](../../raw_html/komal_figures/komal-G850-sol-fig3.gif)

![solution figure](../../raw_html/komal_figures/komal-G850-sol-fig4.gif)

![solution figure](../../raw_html/komal_figures/komal-G850-sol-fig5.gif)
