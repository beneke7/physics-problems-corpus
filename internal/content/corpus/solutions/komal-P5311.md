---
id: komal-P5311
source: komal
language: hu
translated: false
problem: komal-P5311
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 Az $R$ sugarú Föld elektromos erőtere a földfelszín és a $h$ magasságú ionoszféra közötti $4R^2\pi
h$ térfogatú térrészben számottevő, és ott mindenhol $E_0$ nagyságúnak tekinthető. Az elektrosztatikus energia a légkörben 
 $W_\text{elektomos}=\frac{\epsilon_0}{2}\cdot4R^2\pi h\cdot E_0^2.$ 
 A mágneses mező energiasűrűsége $B^2/(2\mu_0)$, ami a föld középpontjától mért $r$ távolsággal $(R/r)^6$ arányban csökken. Az a térfogat, amelyből a (Föld felszíne feletti) mágneses energia származik, nagyságrendileg a Föld térfogatával egyezik meg, hiszen $B(r)$ gyors ütemben csökken. A mágneses energia nagyságrendi becslésénél tehát számolhatunk úgy, mintha $4R^3\pi/3$ térfogatban a földfelszíni $B_0$-lal megegyező nagyságú lenne az indukcióvektor nagysága, azon kívül pedig nulla: 
 $W_\text{mágneses}=\frac{1}{2\mu_0}\cdot\frac{4R^3\pi}{3}\cdot B_0^2 .$ 
 A kétféle energia aránya: 
 $\frac{W_\text{mágneses}}{W_\text{elektromos}}=\frac{1}{3\mu_0\varepsilon_0}\,\frac{R}{h}\,\left(
 \frac{B_0}{E_0} \right)^2= \frac{(3\cdot10^8)^2}{3}\,\frac{6400}{10}\,\left(\frac{10^{-5}}{100}\right)^2
 \approx 200\,000.$ 
 A földi mágneses tér (annak a felszín feletti része) tehát öt nagyságrenddel több energiát hordoz, mint a légköri elektromosság.
