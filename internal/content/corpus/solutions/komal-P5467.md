---
id: komal-P5467
source: komal
language: hu
translated: false
problem: komal-P5467
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**I. megoldás.**
 A Newton-féle hővezetési törvény szerint (lásd pl. a Négyjegyű függvénytáblázatokban a Hőátadás alpontot) a rúd kicsiny, $\Delta x$ hosszúságú, $A$ keresztmetszetű darabján időegységenként
 $\Phi=\frac{Q}{t}=-\lambda A\frac{\Delta T}{\Delta x}$
 hő áramlik át, ahol $\Delta T$ a hőmérsékletkülönbség, $\lambda$ pedig az anyag hővezetési tényezője. Rézre $\lambda=395\ \dfrac{\rm W}{\rm m\,K}$.
 Esetünkben a $\Phi$ hőáram nem mindenhol ugyanakkora, hanem a rúd mentén változik. (Feltételezzük, hogy a rézrúdból a hő csak a víz felé távozhat.) Ha a rúd hossza $\ell$ és a fűtőszál teljesítménye $P$, akkor a rúd felső végétől $x$ távolságban
 $\Phi(x)=\dfrac{x}{\ell}P,$
 hiszen az $x$ hosszúságú szakaszon leadott teljesítmény a fűtőszál hosszával arányos.
 Látható, hogy a hőáram az $x$ távolság lineáris függvénye, tehát az átlagos értéke
 $\Phi_\text{átlag}=\dfrac{\Phi_\text{min}+\Phi_\text{max}}{2}=\dfrac{\Phi(0)+\Phi(\ell)}{2}=
\dfrac{P}{2}.$
 Ha a rúd felső végének (Celsius-fokban mért) hőmérséklete $T$, akkor felírhatjuk:
 $\Phi_\text{átlag}= -\lambda A\frac{\Delta T}{ \ell}=-\lambda A\frac{0-T}{ \ell}= \frac{ \lambda A T}{ \ell},$
 vagyis
 $T=\frac{P \ell}{2\lambda A}\approx 84\ ^\circ\rm C.$

**II. megoldás.**
 A hővezetés egyenlete szerint (az I. megoldás jelöléseivel)
 $\Phi(x) =-\lambda A\frac{\Delta T(x)}{\Delta x},$
 az energiaáramlás mérlegegyenlete pedig
 $\dfrac{\Delta\Phi}{\Delta x}=\dfrac{P}{\ell}.$
 Tudjuk, hogy $\Phi(0)=0$ (hiszen a rúd legtetején még nincs elvezetendő hő), továbbá (az olvadó jég miatt) $T(\ell)=0$.
 A fenti két egyenlet (ami a megváltozásokra vonatkozik, tehát tulajdonképpen differenciálegyenlet) sokkal ismerősebb lesz, ha az alábbi jelöléseket alkalmazzuk:
 $x\qquad\Longleftrightarrow\qquad t,$
 $T(x)\qquad\Longleftrightarrow\qquad s(t),$
 $-\dfrac{\Phi(x)}{\lambda A}\quad\Longleftrightarrow\quad v(t),$
 $\frac{P}{\ell\lambda A}\qquad\Longleftrightarrow\qquad g.$
 Ezekkel a megoldandó egyenletek:
 $v(t)=\frac{\Delta s}{\Delta t},\qquad\frac{\Delta v}{\Delta t}=-g = \text{állandó,}$
 továbbá $v(0)=0$ és $s(t=\ell)$=0. Keressük $s(0)$ értékét.
 Ráismerhetünk, hogy ezek a szabadesés egyenletei, a megoldásuk pedig
 $s(t)=s(0)-\frac{g}2t^2.$
 Kérdés: Milyen magasról ejtsünk le kezdősebesség nélkül egy testet, hogy $t=\ell$ ,,idő'' alatt érjen le a földre? A válasz ismert: $s(0)=\dfrac{g}{2}\ell^2$, vagyis a hővezetési probléma megoldása:
 $T(x=0)=\frac{P \ell}{2\lambda A}\approx 84\ ^\circ\rm C.$
