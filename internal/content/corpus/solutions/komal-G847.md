---
id: komal-G847
source: komal
language: hu
translated: false
problem: komal-G847
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 $a)$ Közismert, hogy ha $n$ egyforma, $R$ értékű ellenállást párhuzamosan kapcsolunk, akkor az eredő ellenállás $\frac{R}{n}$ lesz. Ennek megfelelően, ha azt akarjuk, hogy az eredeti $R$ ellenállás felét, harmadát, negyedét, $\frac{1}{n}$-ed részét kapjuk, akkor mindig újabb és újabb ugyanakkora, $R_1=1\,\mathrm{M}\Omega$ értékű ellenállást kell párhuzamosan hozzákapcsolnunk a többihez.

 $b)$ Ha az első $R_1$ ellenálláshoz egy ugyanakkorát kapcsolunk párhuzamosan, akkor az eredő ellenállás a fele lesz, vagyis $R_1/2$. Ehhez a kettőhöz viszont egy $R_1/2$ értékű ellenállást kell kötnünk, hogy a három eredője $R_1/4$ legyen. Ezt folytatva a harmadik hozzákapcsolt ellenállásnak $R_1/4$ értékűnek kell lennie ahhoz, hogy az immár négy tagból álló kapcsolásnak $R_1/8$ legyen az eredője. A meglévőkhöz párhuzamosan hozzákapcsolt ellenállások sorozata tehát ez:
 $R_2=R_1,\,R_3=R_1/2,\,R_4=R_1/4,\,R_5=R_1/8,\,R_6=R_1/16,\,\ldots,\,R_n=R_1/2^{(n-2)}.$
 $c)$ Keressük azt az $R_n$ ellenállást, amit az előzőkhöz kapcsolva teljes eredőként $\frac{R_1}{n!}$ értéket kapunk. A feladat szerint az előzők eredője $\frac{R_1}{(n-1)!}$. A párhuzamos kapcsolás formulája szerint a következő összefüggést írhatjuk fel:
 $\frac{1}{\frac{R_1}{(n-1)!}}+\frac{1}{R_n}=\frac{1}{\frac{R_1}{n!}},$
 amiből
 $R_n=\frac{1}{\frac{1}{\frac{R_1}{n!}}-\frac{1}{\frac{R_1}{(n-1)!}}}=\frac{R_1}{n!-(n-1)!}=\frac{R_1}{(n-1)[(n-1)!]}.$
 Tehát a kérdéses sorozat a következő:
 $R_2=R_1,\,R_3=R_1/4,\,R_4=R_1/18,\,R_5=R_1/96,\,\ldots,\,R_n=\frac{R_1}{(n-1)[(n-1)!]}.$
 Behelyettesítéssel tudjuk ellenőrizni, hogy az általános képlet jól működik a sorozat első néhány tagja esetében.
