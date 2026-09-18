---
id: komal-P5627
source: komal
language: hu
translated: false
problem: komal-P5627
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 A lökés után a rendszer mozgása két komponensből tevődik össze: egyrészt (vízszintes külső erő hiányában) a tömegközéppont vízszintes irányban állandó sebességgel halad, másrészt az ingán lengő súly és a kiskocsi a tömegközépponthoz rögzített rendszerben egymással ellenütemben lengő illetve rezgő mozgást végez. Ez utóbbi periódus ideje egyszerű megfontolásokkal megadható. Az állandó sebességgel haladó tömegközépponti rendszerben a kiskocsi és az inga úgy mozognak, hogy az inga fonalát a felfüggesztéstől nézve $m:M$ arányban osztó pont vízszintesen nem mozdul el. Ennek megfelelően, ha az inga kicsiny (radiánban mért) szögkitérése $\phi$, az ingán lévő kis test elmozdulása
 $x=\ell\frac{M}{M+m}\phi.$
 Ugyanakkor a visszahúzó erő
 $F=mg\phi,$
 tehát a lengő test mozgásegyenlete a tömegközépponti rendszerben (a gyorsulást $a$-val jelölve)
 $ma=-mg\phi=-\frac{mg(M+m)}{\ell M}x,$
 amiből
 $T=2\pi\sqrt{\frac{\ell M}{g(M+m)}}.$
 A meglökést követően tehát ennyi időnként áll elő ugyanaz a helyzet, mint ami közvetlenül a meglökés után volt, nevezetesen ennyi idő múlva az $m$ pillanatnyi sebessége éppen nulla, a kiskocsié pedig a meglökés során kapott (maximális) érték.

 Megjegyzések. 1. A megoldás során a kiskocsi mozgásegyenletét nem is kellett felírnunk. Ez annak köszönhető, hogy a tömegközépponti rendszer most inerciarendszer, amiben az inga lengése egyszerűen leírható. (A tömegközépponti rendszer azért tekinthető inerciarendszernek, mert az inga kitérése kicsi, így első rendben nincs a tömegközéppontnak függőeleges elmozdulása, sebessége és gyorsulása.)
 2. $T$, illetve $\omega=\tfrac{2\pi}{T}$ ismeretében az egész mozgást könnyen leírhatjuk. $u_0$-lal jelölve a kiskocsi induló sebességét, mivel kezdetben $m$ éppen áll, a tömegközéppont sebessége
 $v_\mathrm{tkp}=u_0\frac{M}{M+m}.$
 Ehhez képest az $m$ és az $M$ kezdősebessége rendre
 $v_0=-u_0\frac{M}{M+m}\quad\textrm{és}\quad V_0=u_0\frac{m}{M+m},$
 így a sebességek a tömegközépponti rendszerben a lökés után $t$ idővel
 $v(t)=v_0\cos\omega t\quad\textrm{és}\quad V(t)=V_0\cos\omega t,$
 a lengő súly $s$ és a kiskocsi $S$ elmozdulása pedig
 $s=v_\mathrm{tkp}t+\frac{v_0}{\omega}\sin\omega t,\quad\textrm{illetve}\quad S=v_\mathrm{tkp}t+\frac{V_0}{\omega}\sin\omega t.$
