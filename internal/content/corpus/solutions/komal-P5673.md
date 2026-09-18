---
id: komal-P5673
source: komal
language: hu
translated: false
problem: komal-P5673
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 A rögzítés feloldásakor a dugattyú rezgőmozgásba kezd. A jobb oldali rész nagyobb, de csökkenő nyomása balra gyorsítja a dugattyút, amelynek a sebessége akkor maximális amikor a nyomás a két oldalon éppen egyenlő, hisz ettől kezdve a mozgást fékező baloldali nyomás a nagyobb. A balra történő mozgás lefékeződése után a dugattyú visszafelé indul, ideális esetben eléri a kiinduló helyzetet, és a mozgás periodikusan ismétlődik, melynek során a gázok adiabatikus állapotváltozáson mennek keresztül. (Az elkerülhetetlen veszteségek, pl. a gáz belső súrlódása miatt a rezgés amplitúdója folyamatosan csökken, de ezt most nem kell figyelembe vennünk.)

 a) Jelöljük a folyamat során a bal oldali rész adatait 1-es, a jobb oldaliét 2-es indexszel, a kiinduló helyzetre pedig használjuk az ábrán szereplő jelöléseket ($p_\mathrm{A}$, $V_\mathrm{A}$, $p_\mathrm{B}$, $V_\mathrm{B}$). Az adiabatikus folyamatok során
 $p_1V_1^\kappa=p_\mathrm{A}V_\mathrm{A}^{\kappa}\qquad\textrm{és}\qquad p_2V_2^\kappa=p_\mathrm{B}V_\mathrm{B}^{\kappa},$
 ahol $\kappa=c_p/c_v$ a fajhőhányados, esetünkben $\kappa=7/5$. A folyamat során a $V_1+V_2$ összeg állandó, ezért használjuk a $V_1=V_\mathrm{A}-\Delta V$ és $V_2=V_\mathrm{B}+\Delta V$ helyettesítő kifejezéseket. Amikor $p_1=p_2$, akkor
 $\frac{p_\mathrm{A}V_\mathrm{A}^{\kappa}}{\left(V_\mathrm{A}-\Delta V\right)^{\kappa}}=\frac{p_\mathrm{B}V_\mathrm{B}^{\kappa}}{\left(V_\mathrm{B}+\Delta V\right)^{\kappa}},$
 amiből
 $\Delta V=\frac{\left(p_\mathrm{B}^{1/\kappa}- p_\mathrm{A}^{1/\kappa}\right)V_\mathrm{B}V_\mathrm{A}}{\left(V_\mathrm{B}p_\mathrm{B}^{1/\kappa}+V_\mathrm{A}p_\mathrm{A}^{1/\kappa}\right)}.$
 Ennek megfelelően
 $V_1=V_\mathrm{A}-\Delta V=V_\mathrm{A}p_\mathrm{A}^{1/\kappa}\frac{V_\mathrm{A}+V_\mathrm{B}}{V_\mathrm{A}p_\mathrm{A}^{1/\kappa}+V_\mathrm{B}p_\mathrm{B}^{1/\kappa}}$
 és
 $V_2=V_\mathrm{B}+\Delta V=V_\mathrm{B}p_\mathrm{B}^{1/\kappa}\frac{V_\mathrm{A}+V_\mathrm{B}}{V_\mathrm{A}p_\mathrm{A}^{1/\kappa}+V_\mathrm{B}p_\mathrm{B}^{1/\kappa}}.$
 Ezt visszahelyettesítve az első egyenleteink egyikébe
 $p_1=p_2=p=\frac{\left(V_\mathrm{A}p_\mathrm{A}^{1/\kappa}+V_\mathrm{B}p_\mathrm{B}^{1/\kappa}\right)^{\kappa}}{\left( V_\mathrm{A}+V_\mathrm{B}\right)^{\kappa}}$
 adódik. Adatainkkal
 $V_1=2{,}388\cdot 10^{-3}\,\mathrm{m^3},\qquad V_2=2{,}612\cdot 10^{-3}\,\mathrm{m^3},$
 és
 $p=137{,}6\,\mathrm{kPa}.$
 A folyamat ezen szakaszában az egyes oldalak által végzett (előjeles) munka
 $W_1=\frac{p_\mathrm{A}V_\mathrm{A}-pV_1}{\kappa-1}\qquad\textrm{és}\qquad W_2=\frac{p_\mathrm{B}V_\mathrm{B}-pV_2}{\kappa-1}.$
 A kettő összege adja a dugattyú kinetikus energiáját:
 $\frac{1}{2}mv^2=W_1+W_2,$
 ahol $m$ a dugattyú tömege és $v$ a sebessége. Ezt átrendezve, és kihasználva, hogy a két térfogat összege mindig akkora, mint $V_\mathrm{A}+V_\mathrm{B}$, a sebességre a
 $v=\sqrt{\frac{2\left(W_1+W_2\right)}{m}}=\sqrt{\frac{2\left((p_\mathrm{A}-p)V_\mathrm{A}+(p_\mathrm{B}-p)V_\mathrm{B}\right)}{m(\kappa-1)}}$
 kifejezést kapjuk, amiből a numerikus eredmény:
 $v=10{,}9\,\mathrm{m/s}.$

 b) A baloldali légoszlop hőmérséklete akkor a legnagyobb, amikor az a legjobban össze van nyomva. Ez az a szélső helyzet, amikor a dugattyú mozgása éppen irányt vált, azaz a sebessége nulla. Ilyenkor a két gázmennyiség által végzett teljes munka is zérus. Az erre az állapotra vonatkozó mennyiségeket vesszővel jelölve
 $W_1'+W_2'=\frac{p_\mathrm{A}V_\mathrm{A}-p_1'V_1'}{\kappa-1}+\frac{p_\mathrm{B}V_\mathrm{B}-p_2'V_2'}{\kappa-1}=0.$
 Továbbra is igaz, hogy
 $V_1'+V_2'=V_\mathrm{A}+V_\mathrm{B},$
 de az adiabatikus állapotegyenleteknek most célszerűbb a
 $\frac{T_1'}{T}\left(\frac{V_1'}{V_\mathrm{A}}\right)^{\kappa-1}=1\qquad\textrm{és}\qquad\frac{T_2'}{T}\left(\frac{V_2'}{V_\mathrm{B}}\right)^{\kappa-1}=1$
 alakját használnunk. (Itt $T$ a kezdeti közös hőmérséklet.) Az egyesített gáztörvény szerint
 $\frac{p_\mathrm{A}V_\mathrm{A}}{T}=\frac{p_1'V_1'}{T_1'},\qquad\textrm{és}\qquad\frac{p_\mathrm{B}V_\mathrm{B}}{T}=\frac{p_2'V_2'}{T_2'}.$
 Ennek segítségével az ismeretlen $p_1'$ és $p_2'$ nyomást a $T_1'$ és $T_2'$ hőmérsékletre cserélhetjük, és az adiabatikus egyenleteket felhasználva a $V_1'$ ill. $V_2'$ változót is eltüntethetjük:
 $p_\mathrm{A}V_\mathrm{A}\left(1-\frac{T_1'}{T}\right)+{p_\mathrm{B}V_\mathrm{B}}\left(1-\frac{T_2'}{T}\right)=0,$
 $V_\mathrm{A}\left(1-\left(\frac{T_1'}{T}\right)^{-1/(\kappa-1)}\right)+V_\mathrm{B}\left(1-\left(\frac{T_2'}{T}\right)^{-1/(\kappa-1)}\right)=0$
 E két egyenletből $T_2'$ már kiküszöbölhető, és az így kapott
 $\frac{V_\mathrm{A}}{V_\mathrm{B}}\left(1-\left(\frac{T_1'}{T}\right)^{-1/(\kappa-1)}\right)+\left(1-\left(\frac{p_\mathrm{A}V_\mathrm{A}}{p_\mathrm{B}V_\mathrm{B}}\left(1-\frac{T_1'}{T}\right)+1\right)^{-1/(\kappa-1)}\right)=0$
 egyenlet numerikusan megoldható. Két megoldás adódik, az egyik nyilván a kiinduló helyzetet adja vissza ($T_1'=T=300\,\mathrm{K}$), a másik a keresett hőmérséklet:
 $T_1'=1{,}230\,T=369\,\mathrm{K}.$

 Megjegyzés. A nemlineáris egyenletek megoldásakor gyakran hasznos a következő algoritmus. Az egyenletet az
 $x=f(x)$
 alakra hozzuk (ez általában többféleképpen is lehetséges), majd az
 $x_{n+1}=f(x_n)$
 szabály szerint egy sorozatot generálunk. Nem garantálható, de jó esetben (az $f(x)$ függvény megfelelő tulajdonságai mellett) az $x_1$ kezdőértékek egy tartományában a sorozat elemei egyre pontosabban megközelítenek egy (az $x_1$ konkrét értékétől független) $x=x_\infty$ értéket, ami az előállítás módja miatt nyilván megoldása a kiinduló egyenletünknek. Ennek az eljárásnak az az előnye, hogy akár egy zsebszámológéppel is könnyen végrehajtható. (A program nagyon hasonló a P. 5626. feladat numerikus megoldásakor használt, lapunk 2025. májusi számában bemutatotthoz.) Esetünkben a fenti egyenletekből az $x=T_1'/T$ változóra a bemenő adatok behelyettesítése után egyik lehetőségként az
 $x=\frac{4}{3}\left(1{,}75-\left(2{,}5-1{,}5x^{-2{,}5}\right)^{-0{,}4}\right)$
 egyenlet írható fel. Ennek az egyenletnek a segítségével a fenti módon pl. az $x_1=1{,}5$ vagy valamilyen hasonló nagyságrendű értékekkel generált sorozatok az $x=1{,}2303458$ megoldást adják. Egy másik lehetőség, ha az egyenletünket az
 $x=\left(\frac{2}{3}\left(1-(1{,}75-0{,}75x)^{-2{,}5}\right)+1\right)^{-0{,}4}$
 alakra rendezzük. Az ezzel generált sorozatok egy jelentős halmaza az indítás értékétől függetlenül az $x=1$ megoldáshoz vezet.
