---
id: komal-P5399
source: komal
language: hu
translated: false
problem: komal-P5399
figure_files: [komal-P5399-sol-fig1.gif, komal-P5399-sol-fig2.gif, komal-P5399-sol-fig3.gif]
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 Az áramsűrűség olyan vektor, amely a töltések mozgásának irányába mutat, nagysága pedig a töltések mozgásirányára merőleges, egységnyi nagyságú felületen egységnyi idő alatt áthaladó töltések nagyságával egyezik meg. 
 Az egész elrendezés szimmetrikus az $ABC$ síkra való tükrözésre, emiatt a $C$ pontbeli áramsűrűség-vektor biztosan $AC$ irányú. Ez annyit jelent, hogy az $AC$ egyenesen keresztül sehol nem folyik áram, tehát a kúppalástot felvághatjuk az $AC$ alkotója mentén, ettől nem változik meg az árameloszlás. 
 Terítsük ki síkba a felvágott fémlemezt! Mivel az $AB$ távolság háromszor nagyobb, mint a $CBC$ kör sugara, a kiterített fémlemez a teljes síknak egyharmada, $120^\circ$-os szöget bezáró félegyenesek által határolt része lesz ( 1. ábra ). Az ábrán a $C$ pont két helyen is látható, a keresett áramsűrűség ezen két ponthoz tartozó áramsűrűségek összege. 

 1. ábra 

 Ha egy teljes (,,végtelen nagy'') sík $A$ pontjába $I$ erősségű áramot vezetünk, az szimmetrikusan fut szét, és az áramsűrűség nagysága az áram bevezetési pontjától $r$ távolságban lévő $P$ pontban 
 $j_A(P)=\frac{I}{2\pi\delta}\,\frac{1}{r},$ 
 iránya pedig $AP$-vel párhuzamos. Amennyiben a végtelen sík egy másik, $B$ pontjánál $I$ erősségű áramot vezetünk ki a fémből, az áramsűrűség nagysága a $P$ pontban 
 $j_B(P)=-\frac{I}{2\pi\delta}\,\frac{1}{r'},$ 
 ahol $r'=BP$, iránya pedig $BP$-vel párhuzamos. Az eredő árameloszlás áramsűrűség-vektora $\boldsymbol j_A$ és $\boldsymbol j_B$ összege, szuperpoziciója. 
 A felvágott és kiterített kúppalást esetében a szuperpozició még nem adja meg a helyes árameloszlást, hiszen nem teljesíti azt a feltételt, hogy az $AC$ félegyenes áramvonal legyen. Egy kis kiegészítéssel azonban mégis célhoz érhetünk, ha alkalmazzuk (az elektrosztatikai tükörtöltésekre emlékeztető) ,,tüköráram-módszerét''. Helyezzünk el – gondolatban – a ténylegesen létező fémsíkdarab mellé két másik $120^\circ$-os csúcsszögű síkharmadot, és ezek mindegyikének csúcspontjánál vezessünk be $I$ erősségű áramot (összesen tehát $3I$-t), a $B'$ és $B''$ pontoknál pedig ugyanekkora erősségű áramot vezessünk el a síkból ( 2. ábra ). Az ábrán a három tartomány között – az áttekinthetőség kedvéért – egy kicsiny távolságot hagytunk, de ezt a számolás során nulla szélességűnek kell tekintenünk. 

 2. ábra 

 A síkharmad árameloszlását szuperponálva azt kapjuk, hogy a ténylegesen létező fémlemezben folyó árameloszlás olyan, mintha a végtelen sík $A$ pontjába $3I$ erősségű áramot vezetnénk be, a $B$, $B'$ és $B''$ pontoknál pedig $I$-t ki. Az elrendezés szimmetriája miatt a síkharmadokat határoló félegyenesek mindegyike áramvonal, tehát az eredeti fémlemezre vonatkozó határfeltétel valóban teljesül. 
 A $C$ pontban az eredő áramsűrűség a 3. ábra szerint 
 $\boldsymbol j(C)=\boldsymbol j_A(C)+\boldsymbol j_B(C)+\boldsymbol j_{B'}(C)+\boldsymbol j_{B''}(C),$ 
 ahol a vektorok nagysága: 
 $j_A(C)=\frac{3I}{2\pi\delta}\,\frac{1}{3R},\qquad j_{B}(C)=j_{B''}(C)=\frac{I}{2\pi\delta}\,\frac{1}{3R}
 \qquad\text{és}\qquad
j_{B'}(C)=\frac{I}{2\pi\delta}\,\frac{1}{6R}.$ 

 3. ábra 

 Az eredő áramsűrűség nagysága (az egyes összetevők irányát is figyelembe véve): 
 $j(C)=j_A(C)-\frac{1}{2}j_{B}(C)-\frac{1}{2}j_{B''}(C)-j_{B'}(C)=\frac{I}{4\pi\delta R},$ 
 iránya pedig $A$-ból $C$ felé mutat.

![solution figure](../../raw_html/komal_figures/komal-P5399-sol-fig1.gif)

![solution figure](../../raw_html/komal_figures/komal-P5399-sol-fig2.gif)

![solution figure](../../raw_html/komal_figures/komal-P5399-sol-fig3.gif)
