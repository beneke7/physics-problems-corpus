---
id: komal-P5648
source: komal
language: hu
translated: false
problem: komal-P5648
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 Válasszuk ki először egy tetszőleges $A$ és $B$ pontot. Ezek után kössük össze az $A$ és $B$ pontot közvetlenül egy ellenállással, ezt egyféleképpen tehetjük meg. Majd kössük össze őket két-két ellenállással úgy is, hogy a két-két ellenállás középső pontja minden esetben a maradék $N-2$ pont valamelyike legyen. Készítsük el mind az $N-2$ ilyen összekötést. Ekkor az $N-2$ pont mindegyike $U/2$ potenciálú lenne, ha az $AB$ pontokra $U$ feszültséget kapcsolnánk. Tehát ha ezek után feltöltjük a teljes gráfot (azaz összekötjük a maradék $N-2$ pontot páronként egymással), akkor az előzőek szerint mindig azonos potenciálú pontokat kötünk össze. Így ezek már nem változtatják meg az eredő ellenállást, hiszen feszültség rákapcsolása esetén nem folyik rajtuk áram, mintha ott sem lennének. 
 Végül is lesz $N-2$ darab $2R$ nagyságú ellenállás párhuzamosan, és ezekhez még egy $R$ ellenállás csatlakozik párhuzamosan, amiből az eredő ellenállás 
$$\begin{gather*}
\frac{1}{R_\mathrm{e}}=(N-2)\frac{1}{2R}+\frac{1}{R}=\left(\frac{N-2}{2}+1\right)\frac{1}{R}=\frac{N}{2}\frac{1}{R},\\
R_\mathrm{e}=\frac{2R}{N}.
\end{gather*}$$
