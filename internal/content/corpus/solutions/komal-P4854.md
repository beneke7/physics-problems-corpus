---
id: komal-P4854
source: komal
language: hu
translated: false
problem: komal-P4854
figure_files: [komal-P4854-sol-fig1.gif]
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 Foglalkozzunk először az ellenállásokkal! Ha az $A$ és $B$ pontokra feszültséget kapcsolunk, akkor az $A$ és $B$ pontokat nem tartalmazó átló (a továbbiakban egyszerűen átló) összes csomópontja ekvipotenciális pont lesz, a közöttük lévő ellenállásokat tehát kiiktathatjuk a kapcsolásból (hiszen úgysem folyik át rajtuk áram). Az átló szimmetrikusan elhelyezkedő (ekvipotenciális) pontjait rövidre is zárhatjuk (úgysem fog áram folyni közöttük). Ilymódon a kapcsolás az alábbival egyenértékű: 

 Így az $R^*$ eredő ellenállásra a következő rekurziós összefüggést írhatjuk fel: 
 $\frac{1}{R^*}=\frac{1}{R}+\frac{1}{2R+R^*},$ 
 amelynek (fizikailag értelmezhető, pozitív) megoldása: 
 ${R^*}=(\sqrt{3}-1)R\approx 0{,}73\,R.$ 
 A kondenzátorokat tartalmazó kapcsolás eredője hasonló módon kapható meg, de közvetlenül is adódik az előző eredményből. Ha a hálózatot $\omega$ körfrekvenciájú váltófeszültségre kapcsoljuk, a kondenzátorok $R=\frac{1}{\omega C}$ nagyságú ,,ellenállásokkal'' helyettesíthetők. (A fázistolással nem kell foglalkoznunk, mert az mindegyik áramköri elemnél ugyanakkora, így az eredményt nem befolyásolja.) Ha az egész kapcsolás eredő kapacitása $C^*$, akkor az $R^*=\frac{1}{\omega C^*}$ ellenállással helyettesíthető. A korábbi eredmény felhasználásával 
 $\frac{R^*}{R}=\sqrt{3}-1=\frac{C}{C^*},$ 
 ahonnan 
 $C^*=\frac{C}{\sqrt{3}-1} \approx 1{,}37\,C.$

![solution figure](../../raw_html/komal_figures/komal-P4854-sol-fig1.gif)
