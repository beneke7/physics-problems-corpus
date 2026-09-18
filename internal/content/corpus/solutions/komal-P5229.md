---
id: komal-P5229
source: komal
language: hu
translated: false
problem: komal-P5229
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 $a)$ Az ellentétes előjelű töltések távolsága $\sqrt{L^2+R^2}$, a $q$ töltésre ható erők eredője:
 $F(R)=2k\frac{\vert qQ \vert}{ \left({L^2+R^2}\right)^{3/2}}R.$
 Az $R$ sugarú körpályán keringő, $m$ tömegű test mozgásegyenlete:
 $mR\omega^2=F(R),$
 vagyis a keringési idő:
 $T(R)=2\pi\sqrt{\frac{m\left({L^2+R^2}\right)^{3/2}}{2k\vert qQ \vert} }.$
 $b)$ Ha $R\ll L$, $F(R)\sim R$ miatt a keringési idő $R$-től függetlenné válik:
 $T(R)\approx 2\pi\sqrt{
\frac{mL^3 }{2k\vert qQ \vert}
}.$
 (A harmonikus rezgőmozgás felfogható egy körmozgás vetületeként, és jól ismert, hogy a távolsággal arányos erő esetén az egyenesvonalú mozgás rezgésideje független a maximális kitéréstől.)

 Amennyiben $R\gg L$, a keringési idő:
 $T(R)\approx 2\pi\sqrt{
\frac{mR^3 }{2k\vert qQ \vert}
}.$
 Ez nem meglepő, hiszen nagy távolságban a két rögzített töltés egyetlen $2Q$ nagyságú ponttöltéssel helyettesíthető, így az eredő vonzóerő a távolság négyzetével fordítottan arányos. Ez az erőtörvény éppen olyan alakú, mint a Nap és a bolygók közötti gravitációs vonzóerő, tehát (Kepler III. törvénye szerint) $T^2\sim R^3$.
 $c)$ Hasonlítsuk össze az $R$ sugaró körpályán történő keringés periódusidejét és az $R$ amplitúdójú rezgés periodusidejét! Mivel az $F(r)$ erőtörvény nem lineáris, a rezgőmozgás nem lesz harmonikus (nem ,,szinuszos''), így a periódusidejének kiszámítása meglehetősen nehéz matematikai feladat lenne. Ennek ellenére össze lehet hasonlítani a kétféle mozgást.
 A körmozgásnál is és a megfelelő rezgőmozgásnál is az erő legnagyobb értéke:
 $F_{\rm max}=2k\frac{\vert qQ \vert}{ \left({L^2+R^2}\right)^{3/2}}R.$
 Az egydimenziós mozgásnál az $r\le R$ távolsághoz tartozó erő:
 $F_1(r)=\left(\frac{R^2+L^2}{r^2+L^2}\right)^{3/2} \frac{r}{R}\,F_\text{max},$
 míg a körmozgást helyettesítő harmonikus rezgőmozgásnál
 $F_2(r)= \frac{r}{R} \,F_\text{max}.$
 Megmutatjuk, hogy (az indulási helyzetet leszámítva) a mozgás során mindenhol $F_1(r)>F_2(r)$, ezért bármilyen $r<R$ helyen az anharmonikus mozgást végző test sebessége nagyobb, mint a másik mozgás sebessége ugyanazon a helyen. Emiatt az anharmonikus rezgés $T_1$ periódusideje biztosan kisebb lesz, mint a harmonikus rezgőmozgásé (és a vele megegyező ciklusidejű körmozgás) $T_2$ periódusideje. Valóban:
 $\frac{F_1(r)}{F_2(r)}= \left(\frac{R^2+L^2}{r^2+L^2}\right)^{3/2}\ge1,\qquad \text{ha}\qquad r\le R. $
