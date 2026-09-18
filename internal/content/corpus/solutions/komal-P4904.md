---
id: komal-P4904
source: komal
language: hu
translated: false
problem: komal-P4904
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 A kapcsoló zárása után az ellenálláson (időben változó nagyságú) áram folyik keresztül, ennek az áramnak a hőhatására vagyunk kiváncsiak. A Joule-hő például az időben változó $P=I^2R$ teljesítmény integrálásával határozható meg, de elemi úton, az energiaviszonyok megvizsgálásával is kiszámítható.
 Tudjuk, hogy a $C$ kapacitású kondenzátor feszültségének nagysága $2U_0$, de a feszültség előjele nem derül ki a feladat szövegéből. Emiatt meg kell vizsgálnunk mindkét polaritás lehetőségét.
 $a)$ Legyen a $C$ kapacitású (a rajzon felső) kondenzátor jobb oldali lemeze kezdetben $+2CU_0$ töltésű, a bal oldali lemez töltése ennek $(-1)$-szerese. A másik (alsó) kondenzátor töltetlen. A kapcsoló zárása után a felső kondenzátor átad valamekkora $\Delta Q$ töltést az alsó kondenzátornak, így a töltésük $2CU_0-\Delta Q$, illetve $\Delta Q$ lesz. Kirchhoff II. törvénye szerint az áramkörben a körfeszültség nulla:
 $U_0+\frac{2CU_0-\Delta Q}{C}-\frac{\Delta Q}{2C}=0,$
 ahonnan kiszámítható az átadott töltés:
 $\Delta Q=2CU_0.$
 Ugyanekkora töltés kerül a felső kondenzátor bal oldali lemezére, ezt a telep adja le. Végeredményben a felső kondenzátor elveszíti az összes töltését, az alsó pedig $2CU_0$ töltéssel feltöltődik.
 A két kondenzátor elektrosztatikus összenergiája kezdetben
 ${\cal E}_1=\frac{1}{2}\frac{(2CU_0)^2}{C}+0=2CU_0^2$
 volt. A kapcsoló zárása után kialakult helyzetben a kondenzátorok összenergiája:
 ${\cal E}_2=0+\frac{1}{2}\frac{(2CU_0)^2}{2C}=CU_0^2.$
 Az elektrosztatikus energia megváltozása:
 $\Delta {\cal E}_\text{kondenzátor}={\cal E}_2-{\cal E}_1= -CU_0^2.$
 Ne feledkezzünk meg arról sem, hogy a két kondenzátor csak a teleppel együtt alkot zárt rendszert, és a folyamat során a telep energiája is megváltozik, hiszen lead $\Delta Q$ töltést:
 $\Delta {\cal E}_\text{telep}=-U_0\Delta Q=-2CU_0^2.$
 A rendszer teljes energiájának csökkenése az ellenálláson fejlődő $W$ hővel egyenlő:
 $W=-\Delta {\cal E}_\text{kondenzátor}-\Delta {\cal E}_\text{telep}=+3CU_0^2.$
 $b)$ Hasonló módon számolhatjuk ki a másik polaritással feltöltött kondenzátor esetét is. Ha a felső kondenzátor jobb oldali lemezén kezdetben $-2CU_0$ töltés van, a kapcsoló zárása után eltávozik róla $\Delta Q$ töltés, akkor a huroktörvény szerint
 $U_0+\frac{-2CU_0-\Delta Q}{C}-\frac{\Delta Q}{2C}=0.$
 Innen következik, hogy
 $\Delta Q=-\frac{2}{3}CU_0,$
 a felső kondenzátor jobb oldali lemezének töltése tehát $-\frac{4}{3}CU_0$-ra, az alsó kondenzátor töltése pedig $\pm \frac{2}{3}CU_0$-ra változik.
 Az energiaviszonyok változása most így alakul:
 $\Delta {\cal E}_\text{kondenzátor}={\cal E}_2-{\cal E}_1=
\frac12 \left(\frac{16}{9}+\frac{4}{9}\frac{1}{2}-4\right)CU_0^2=-CU_0^2,$
 vagyis ugyanannyi, mint az előző esetben, de a telep energiaváltozása
 $\Delta {\cal E}_\text{telep}=-U_0\Delta Q=\frac23CU_0^2.$
 (A telep most felvesz töltéseket, emiatt az energiája növekszik.)
 A fejlődő hő ebben az esetben
 $W=-\Delta {\cal E}_\text{kondenzátor}-\Delta {\cal E}_\text{telep}=+\frac13CU_0^2.$
 Megjegyzés. Belátható, hogy ha egy ellenálláson időben exponenciálisan csökkenő áram folyik keresztül (esetünkben éppen ez történik), akkor a kisülési folyamat során fejlődő teljes Joule-hő az ellenállásra eső kezdeti (maximális) feszültség és az ellenálláson átfolyó töltés szorzatának felével egyezik meg. A feladatban szereplő kapcsolásnál ez
 $\tfrac12 (3U_0)(2CU_0)=3CU_0^2,\qquad \text{illetve}\qquad \tfrac12 (-U_0)(-\tfrac23CU_0)=\tfrac13CU_0^2.$
