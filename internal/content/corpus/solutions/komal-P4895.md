---
id: komal-P4895
source: komal
language: hu
translated: false
problem: komal-P4895
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 Számítsuk ki először a felső (az ábrán vízszintes helyzetű) rúd által az $m$ tömegű testre kifejtett $F_1$ erőt. Mivel a rúd mérete és a testek távolsága összemérhető, az erő nem számolható a pontszerű testek között ható Newton-féle gravitációs vonzóerő képlete alapján. Az sem igaz, hogy a rúd által kifejtett erő akkora lenne, mintha a rúd teljes tömege a rúd tömegközéppontjában helyezkedne el. (Ez csak gömbszimmetrikus tömegeloszlások esetében lenne igaz.) A vonzóerőt a rúd kicsiny darabkákra osztásával és az erők összegzésével (integrálásával) nyilván ki lehet számítani, de van egyszerűbb, elemi módszer is.
 Tudjuk, hogy két pontszerű test közötti gravitációs potenciális energia
 $E=-\gamma\frac{m_1m_2}{r},$
 ahol $m_1$ és $m_2$ a testek tömege, $r$ pedig a távolságuk. Távolítsuk el – gondolatban – a $2M$ tömegű rudat az $m$ tömegű testtől egy kicsiny ($2L$-nél sokkal kisebb) $\Delta x$ távolsággal. Ha a rúd és a pontszerű test között ható erő $F_1$, akkor az eltávolítás során
 $W=F_1\Delta x$
 munkát kell végezzünk, ami a gravitációs helyzeti energia megváltozásával egyenlő. Az energiaváltozás szempontjából csak annyi történt, mintha a rúd egy kicsiny $\Delta x$ hosszúságú, tehát $\Delta m=(M/\ell)\Delta x$ tömegű darabkáját a rúd egyik végétől a másik végére helyeztük volna át, tehát
 $F_1\Delta x=\gamma m\frac{M}{\ell}\Delta x \left(-\frac{1}{3\ell}+\frac{1}{\ell}\right),$
 vagyis
 $F_1=\gamma\frac{mM}{\ell^2}\cdot \frac{2}{3}.
$
 Hasonló megfontolásokkal adódik, hogy a másik rúd által kifejtett erő
 $F_2=\gamma\frac{mM}{\ell^2}\cdot \frac16.$
 Ezek szerint az eredő gravitációs erő iránya a hosszabb rúd felé mutató egyenessel
 $\alpha=\arctan\frac14\approx 14^\circ-\text{os} $
 szöget zár be, és az eredő erő nagysága
 $F=\sqrt{F_1^2+F_2^2}=\gamma\frac{\sqrt{17}mM}{6\ell^2}.$
