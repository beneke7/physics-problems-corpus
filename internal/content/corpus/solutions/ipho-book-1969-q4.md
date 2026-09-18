---
id: ipho-book-1969-q4
problem: ipho-book-1969-q4
source: ipho
language: hu
solution_language: hu
solution_type: official
source_pdf: "kkk/Korábbi kunfalvi anyagok 2/IPhO_konyv.pdf"
figure_files: []
provenance_note: "kkk/Korábbi kunfalvi anyagok 2/IPhO_konyv.pdf; Mathpix OCR"
verification_status: pending
---

## Megoldás 4

A $d$ vastagságú levegőrétegben a fény útja oda és vissza $2 d$ hosszúságú. Figyelembe véve, hogy az üvegrétegen való visszaverődéskor 180°-os fázikésés következik be, az adott $\lambda_{1}$ hullámú fény számára az erősítés feltétele:
\[
2 d=k_{1} \lambda_{1}+\frac{\lambda_{1}}{2}, \quad \text { ahol } k_{1}=0,1,2,3, \ldots
\]
Ugyanígy a másik erősítést adó hullámhossz esetében:
\[
2 d=k_{1} \lambda_{2}+\frac{\lambda_{2}}{2}, \quad \text { ahol } k_{2}=0,1,2,3, \ldots
\]
A két feltétel összehasonlításából következik, hogy
\[
\frac{2 k_{1}+1}{2 k_{2}+1}=\frac{\lambda_{2}}{\lambda_{1}} .
\]
Tekintettel a megadott hullámhossz-tartományra, $\lambda_{2} / \lambda_{1}=1150 / 400=2,875$ lehet a két hullámhossz arányának legnagyobb értéke. Ugyanakkor az arány legkisebb értéke 1. Így adódik az első feltétel:
\[
1<\frac{2 k_{1}+1}{2 k_{2}+1}<2,875 .
\]

Fel kell használnunk a feladat azon kikötését, hogy csak két hullámnál teljesül a megadott intervallumban a maximum feltétele. A (69-6) egyenlőtlenség bal oldala mutatja, hogy $k_{1}>k_{2}$. A feladat szerint csak egyetlen $k_{1}$ és $k_{2}$ van megengedve. Ha tehát $k_{1}$ megfelel, akkor $k_{2}=k_{1}-1$-nek is meg kell felelni, de $k_{2}=k_{1}-2$-nek már nem szabad megfelelni. Ha ugyanis megfelelne például $k_{2}=k_{1}-3$ is, akkor szükségképp megfelelne $k_{1}-1, k_{1}-2$ is, mert ezek is egész számok. De ez nem lehet.

Felírjuk a (69-6) egyenlőtlenség jobb oldalával, hogy $k_{2}=k_{1}-1$ megfelel, de $k_{2}=k_{1}-2$ nem felel meg:
\[
\begin{aligned}
& A_{1}=\frac{2 k_{1}+1}{2\left(k_{1}-1\right)+1}<2,875, \\
& A_{2}=\frac{2 k_{1}+1}{2\left(k_{1}-2\right)+1}>2,875 .
\end{aligned}
\]
Kipróbáljuk $A_{1}$ és $A_{2}$ értékeit $k_{1}$ néhány egész számú értékénél:
\[
\begin{array}{lllllll}
k_{1} & 0 & 1 & 2 & 3 & 4 & \ldots \\
A_{1} & -1 & 3 & 1,67 & 1,4 & 1,28 & \ldots \\
A_{2} & -0,33 & -3 & 5 & 2,33 & 1,8 & \ldots
\end{array}
\]

Látható, hogy (69-7)-nek megfelel minden $k_{1} \geqq 2$, de (69-8)-nak csak $k_{1}=2$ felel meg. Tehát a $\lambda_{1}$ hullámhosszú fény interferenciájának rendje $k_{1}=2$, a $\lambda_{2}$-es fényé $k_{2}=1$.

Kiinduló egyenletünkből most könnyen következik, hogy $2 d=2 \cdot 400+200=$ $=1000 \mathrm{~nm}$ és a levegőréteg keresett vastagsága $d=500 \mathrm{~nm}$. A másik hullámhossz $2 \cdot 500 \mathrm{~nm}=1 \cdot \lambda_{2}+\frac{\lambda_{2}}{2}$ alapján $\lambda_{2}=667 \mathrm{~nm}$.

Hátravan még a szükséges hőmérséklet-növekedés ahhoz, hogy az üvegkocka alulról hozzáérjen az üveglemezhez.
\[
\Delta t=\frac{d}{\alpha h} \approx 3{ }^{\circ} \mathrm{C},
\]
ahol $\alpha=8 \cdot 10^{-6} 1 /{ }^{\circ} \mathrm{C}$ és $h=2 \mathrm{~cm}$. Ez arra figyelmeztet, hogy „kényes” optikai kísérleteknél fontos a hőmérséklet állandósága.

\title{
