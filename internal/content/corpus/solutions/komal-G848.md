---
id: komal-G848
source: komal
language: hu
translated: false
problem: komal-G848
figure_files: [komal-G848-sol-fig1.gif]
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 A vékony fénysugár törése és visszaverődése abban a síkban történik, ami tartalmazza az egyenes henger szimmetriatengelyét (ami egyben a henger alaplapján a beesési merőleges is). Az ábra ezt a helyzetet mutatja, a téglalap alsó oldala a henger alaplapjának egyik átmérője, míg a két függőleges oldal a henger két szemközti alkotójának felel meg. Akkor nem történik teljes visszaverődés a henger palástján, vagyis akkor lép ki a fénysugár, ha az ottani beesési szög ($90^{\circ}-\beta$) elegendően kicsi, vagyis $\sin{(90^{\circ}-\beta)}\leq 1/n$, ahol $n$ a henger anyagának levegőre vonatkoztatott törésmutatója. 

 A palásthoz tartozó $90^{\circ}-\beta$ beesési szög akkor kicsi, ha az alaplapon a $\beta$ törési szög nagy. A legnagyobb $\beta$ törési szöghöz az alaplapon $90^{\circ}$-os beesési szög tartozik (ez valójában csak elvi határ, mert $90^{\circ}$-os beesési szög esetén a megtört nyaláb intenzitása nulla). Határesetben tehát $\beta$ maximumára ezt írhatjuk fel: $\sin{\beta_\mathrm{max}}=1/n$. 
 Vonjuk össze a fenti két feltételt: 
 $\sin{(90^{\circ}-\beta_\mathrm{max})}=\cos{\beta_\mathrm{max}}\leq 1/n=\sin{\beta_\mathrm{max}}.$ 
 Ebből az következik, hogy $\tg{\beta_\mathrm{max}}\geq 1$, vagyis a $\beta_\mathrm{max}$ szögnek nagyobbnak vagy egyenlőnek kell lenni $45^{\circ}$-nál. Egyenlőség esetén $n=\sqrt{2}$, egyébként a henger anyagának a levegőre vonatkoztatott törésmutatójának ennél kisebbnek kell lenni: 
 $\beta_\mathrm{max}\geq 45^\circ\quad\rightarrow\quad 1/n=\sin\beta_\mathrm{max}\geq\frac{\sqrt{2}}{2}\quad\rightarrow\quad n\leq\sqrt{2}\approx 1{,}41.$ 
 Megállapíthatjuk tehát, hogy amennyiben a henger anyagának a törésmutatója $\sqrt{2}$-nél nagyobb, akkor a henger alaplapján belépő fénysugár semmilyen esetben sem léphet ki a henger palástján, hanem teljes visszaverődés történik. Érdekességként megemlítjük, hogy akármilyen fajta üvegből is készül a henger, a fénysugár nem lép ki a palástján, mert nincs olyan üveg, amelynek $\sqrt{2}$-nél kisebb lenne a törésmutatója (a legtöbb üveg törésmutatója $1{,}5$ és $1{,}6$ közötti érték).

![solution figure](../../raw_html/komal_figures/komal-G848-sol-fig1.gif)
