---
id: komal-P5394
source: komal
language: hu
translated: false
problem: komal-P5394
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 Helyezzük el az ellipszis alakú lemezt egy olyan koordináta-rendszerben, amelynek origója az ellipszis középpontja, $x$ tengelye a nagytengely, $y$ tengelye pedig az ellipszis kistengelye. Számítsuk ki a lemez tehetetlenségi nyomatékát a koordinátarendszer tengelyeire vonatkoztatva. A lemezt gondolatban nagyon kicsi, $\Delta
m_i$ tömegű, $\left(x_i, y_i, 0\right)$ koordinátájú darabkákra osztva a tehetetlenségi nyomatékok definíciója szerint 
 $\Theta_x=\sum \Delta m_i y_i^2,$ 
 $\Theta_y=\sum \Delta m_i x_i^2,$ 
 és 
 $\Theta_z=\sum \Delta m_i \left(x_i^2+y_i^2\right).$ 
 Ismert (táblázatban megtalálható adat), hogy egy $m$ tömegű, $R$ sugarú vékony, homogén körlemez tehetetlenségi nyomatéka a síkjára merőleges szimmetriatengelyre vonatkoztatva $\Theta_z=\frac{1}{2}mR^2.$ Egy ilyen lemeznél a szimmetriája miatt fennáll, hogy 
 $\Theta^\text{(kör)}_x=\Theta^\text{(kör)}_y=\frac{1}{2}\Theta^\text{(kör)}_z=\frac{1}{4}mR^2.$ 
 Nyújtsuk meg – gondolatban – a körlemezt az $y$ tengely mentén $b/R$ arányban, az $x$ tengely mentén pedig $a/R$ arányban, egyenletesen. Ekkor egy $a$ és $b$ féltengelyű ellipszislemezt kapunk. Mivel $\Theta_x$ kiszámításánál csak az $y_i$ koordináták kapnak szerepet, és azok $b/R$ arányban zsugorodtak össze, $\Theta_y$ képletében pedig csak az $x_i$ koordináták szerepelnek, azt kapjuk tehát, hogy 
 $\Theta^\text{(ellipszis)}_x=\left( \frac{b}{R} \right)^2\Theta^\text{(kör)}_x=\frac{1}{4}mb^2,$ 
 és hasonlóan 
 $\Theta^\text{(ellipszis)}_y=\left( \frac{a}{R} \right)^2\Theta^\text{(kör)}_y=\frac{1}{4}ma^2.$ 
 Ezek szerint az ellipszis alakú lemezre 
 $\Theta^\text{(ellipszis)}_z=\Theta^\text{(ellipszis)}_x+\Theta^\text{(ellipszis)}_y=\frac{1}{4}m\left(a^2+b^2\right).$ 
 A feladatban szereplő tengelyre vonatkozó tehetetlenségi nyomatékot a Steiner-tétel alkalmazásával kapjuk: 
 $\Theta=\Theta^\text{(ellipszis)}_z+ma^2=\frac{1}{4}m\left(5a^2+b^2\right).$
