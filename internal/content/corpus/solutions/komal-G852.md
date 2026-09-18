---
id: komal-G852
source: komal
language: hu
translated: false
problem: komal-G852
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 Mivel az A izotóp felezési ideje 3 nap, a B izotópé pedig 6 nap, így érdemes az A izotóp ,,negyedelési idejét'' használni, ami szintén 6 nap. Az A mintában kezdetben legyen $16N$ radioaktív mag, míg a B mintában ugyanekkor $8N$ van. 6 nap múlva az A mintában és a B mintában is $4N$ radioaktív atom marad. Még 6 nap múlva az A mintában már csak $N$ radioaktív mag marad, a B mintában viszont $2N$. Láthatjuk tehát, hogy 12 nap után fordul a reciprokára az izotóparány.

 Megjegyzés. Egyenlet felírásával és megoldásával is eljuthatunk ugyanerre az eredményre (a felezési időket $T_A$-val és $T_B$-vel jelöljük):
 $2=\frac{N\cdot 2^{-t/T_B}}{2N\cdot 2^{-t/T_A}} \qquad \rightarrow \qquad 4=2^{t\left(\frac{1}{T_A}-\frac{1}{T_B}\right)},$
 amiből
 $t\left(\frac{1}{T_A}-\frac{1}{T_B}\right)=2\qquad\rightarrow\qquad t=\frac{2}{\frac{1}{T_A}-\frac{1}{T_B}}=\frac{2}{\frac{1}{3\,\mathrm{nap}}-\frac{1}{6\,\mathrm{nap}}}=12\,\mathrm{nap}.$
