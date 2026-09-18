---
id: komal-P5081
source: komal
language: hu
translated: false
problem: komal-P5081
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 Jobbról balra haladva egymás után kiszámíthatjuk az $n$ ,,függőleges'' és hozzá kapcsolódó $2n$ ,,vízszintes'' ellenállás $R_n$ eredőjét a vízszintes szárak két végpontja között ($R$ egységekben):
 $R_1=3{,}000, \qquad R_{n+1}= \frac{R_n}{R_n+1}+2;$
 $R_2 =\tfrac{11}{4}=2{,}750;$
 $R_3=\tfrac{41}{15}=2{,}733;$
 $R_4=\tfrac{153}{56}=2{,}732;$
 $R_5=\tfrac{571}{209}=2{,}732=R_{CD}.$
 A ,,végtelen hosszú'' lánc ellenállása a
 $\frac{R_\infty}{R_\infty+1}+2=R_\infty$
 rekurziós formulából
 $R_\infty=1+\sqrt{3}=2{,}732.$
 Látható, hogy a létrakapcsolás eredő ellenállása nagyon gyorsan közelít a ,,végtelen hosszú'' létra eredőjéhez, már a háromfokú létrát jól közelíti az aszimptotikus képlet.
 Hasonló módon kapjuk, hogy az $A$ és $B$ közötti ellenállás kiiktatása után:
 $R_1=3{,}000;$
 $R_2 =\tfrac{11}{4}=2{,}750;$
 $R_3=\tfrac{19}{4}=4{,}75;$
 $R_4 =\tfrac{65}{23}=2{,}826;$
 $R_5 =\tfrac{241}{88}=2{,}738=R_{CD};$
 (tehát kb. 0,24%-kal növekedett meg a $C$ és $D$ pontok közötti ellenállás)
 $\cdots$
 $R_\infty=1+\sqrt{3}=2{,}732.$
 Itt az figyelhető meg, hogy a létra egyik ágának megváltoztatása ,,megzavarja'' ugyan a határértékhez közelítést, de a fokok számának növekedtével a sorozat hamar ,,elfelejti'' ezt a zavart, és néhány ,,lépés'' után már jól közelíti az aszimptotikus értéket.
