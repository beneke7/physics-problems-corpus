---
id: komal-P5406
source: komal
language: hu
translated: false
problem: komal-P5406
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 Mindkét $C$ kapacitású kondenzátort (külön-külön) feltölthetjük $U_1=U$ feszültségre, ekkor a lemezeikre $\pm CU_1$ töltés kerül. Ha most az egyik kondenzátort azonos polaritással sorba kapcsoljuk a teleppel, és velük párhuzamosan kapcsoljuk (ugyancsak azonos polaritással) a másik kondenzátort, akkor ez utóbbi valamekkora $U_2$ feszültségre töltődik, a másik kondenzátor feszültsége pedig $U_2-U$ lesz. A töltésmegmaradás törvénye szerint 
 $CU_1+CU_1=CU_2+C\left(U_2-U\right),$ 
 ahonnan 
 $U_2=\frac{3}{2}U,$ 
 a másik kondenzátor feszültsége pedig $\tfrac12U$ lesz. 
 Válasszuk le a kisebb töltésű kondenzátort az áramkörről, majd töltsük fel a telep segítségével $U$ feszültségre és kapcsoljuk vissza az áramkörbe. A másik kondenzátor feszültsége valamekkora $U_3$ értékre változik, amelyre ezt az egyenletet írhatjuk fel: 
 $CU_3+C(U_3-U)=CU_2+CU,$ 
 ahonnan 
 $U_3=\frac12U_2+U=\frac74U$ 
 adódik. 
 Ezeket a lépéseket sokszor egymás után megismételjük. Ha az $n$-edik lépésben a jobban feltöltött kondenzátor feszültsége $U_n$, akkor a következőben 
 $U_{n+1}=\frac{U_n}{2}+U.$ 
 Ebből a rekurziós formulából kiszámíthatjuk, hogy 
 $U_4=\frac{15}{8}U,\qquad U_5=\frac{31}{16}U, \qquad U_6=\frac{63}{32}U,\qquad \cdots.$ 
 Ezek alapján sejthető, hogy a jobban feltöltött kondenzátor feszültsége egyre közelebb kerül $2U$-hoz, jóllehet azt sohasem éri el. Valóban, ha $U_n$ és $2U$ eltérését $\Delta U_n$-nel jelöljük, akkor a rekurziós formula így írható fel: 
 $\Delta U_{n+1}=\frac{1}{2}\Delta U_n.$ 
 Vagyis $\Delta U_1=U$ figyelembe vételével ezt kapjuk: 
 $\Delta U_{n+1}=\frac{1}{2^n}U \rightarrow 0. $ 
 A leírtak szerint az elérhető legnagyobb potenciálkülönbség majdnem $4U$, amit a csaknem $2U$ feszültségre feltöltött kondenzátor, az $U$ feszültségű másik kondenzátor és a telep soros kapcsolásával hozhatunk létre.
