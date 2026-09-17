---
id: komal-P5600
source: komal
language: hu
translated: false
problem: komal-P5600
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás:**
 Jelölje $F_1$ azt az erőt, amivel a talaj felfelé, és $F_2$ azt, amivel az ember lefelé nyomja az egyes létraszárakat. Ezek az erők függőlegesek. A létra szárai között vízszintes erő is hat, de azzal nem kell foglalkoznunk, mert a földetéréskor nincs a létraszárakra ható forgatónyomatéka, így még közvetve sem befolyásolja az ember gyorsulást ebben a pillanatban. A geometriából világos, hogy ha az ember, azaz a létra csúcsának a sebessége és a gyorsulása rendre $v$ és $a$, akkor a létraszárak tömegközéppontjainak a függőleges sebessége és gyorsulása $v/2$ és $a/2$, és a földetérés pillanatában az egyes ágak szögsebessége és szöggyorsulása $\omega=v/\ell$ ill. $\beta=a/\ell$. 
 A kérdéses sebességet legegyszerűbben az energia-egyenletből kaphatjuk meg: 
 $\frac{1}{2}Mv^2+2\cdot\frac{1}{2}m\left(\frac{v}{2}\right)^2+2\cdot\frac{1}{2}\cdot\frac{1}{12}m\ell^2\left(\frac{v}{\ell}\right)^2=(M+m)\ell g\sin\varphi_0.$ 
 Ebben az egyenletben a bal oldalon az első tag az ember, a második a létraszárak tömegközépponti mozgásának, a harmadik pedig a tömegközéppont körüli forgásának a kinetikus energiája, és felhasználtuk, hogy egy $m$ tömegű, $\ell$ hosszúságú homogén rúd tömegközéppontjára vonatkoztatott tehetetlenségi nyomatéka $(1/12)m\ell^2$. Ebből a sebesség 
 $v=v_0\sqrt{\frac{3\left(m+M\right)}{2m+3M}},$ 
 ahol 
 $v_0=\sqrt{2g\ell\sin\varphi_0}$ 
 a földetérés sebessége lenne a $h=\ell\sin{\varphi_0}$ magasságból történő szabadesés esetén. 
 A keresett gyorsulás meghatározásához írjuk fel az erő és a forgatónyomaték egyenleteket (ez utóbbit a létra ágak tömegközéppontjára) a földetérés pillanatában! 
$$\begin{align*}
 Ma&=Mg-2F_2,\\
 m\frac{a}{2}&=mg+F_2-F_1,\\
 \frac{1}{12}m\ell^2\left(\frac{a}{\ell}\right)&=\frac{\ell}{2}\left(F_2+F_1\right).
\end{align*}$$
 A három egyenletből a gyorsulásra 
 $a=g\frac{3\left(m+M\right)}{2m+3M}$ 
 adódik. 
 Az $M\to\infty$ határértékben $M$ mellett $m$ elhanyagolható, ilyenkor $v=v_0$ és $a=g$, mintha a létra ott sem lenne. Ha $M\to0$, akkor $v=\sqrt{3/2}v_0$ és $a=(3/2)g$. (Bár ilyenkor $v>v_0$ és $a>g$, ebben nincs ellentmondás: tulajdonképpen a létra ágak tömegközéppontja ,,esik", ennek a sebessége és a gyorsulása a földetéréskor $\sqrt{3/8}v_0<v_0$ és $(3/4)g<g$. Ugyanakkor, ha az ember nem kapaszkodik a létrába, akkor az esés közben valahol elválik, és szabadeséssel folytatja útját. A nagyobb sebességű és gyorsulású becsapódás csak kapaszkodás esetén jöhet létre, ha áll a létrán, akkor nem.) 
 Megjegyzés. A megoldásban a létraszárak mozgását felbontottuk a tömegközéppont transzlációjára és egy forgásra, de leírhattuk volna az egészet egyben, mint a földön lévő végpont (pillanatnyi forgástengely) körüli forgást. Ha így járunk el, a nehézségi erő és az $F_2$ forgatónyomatékával kell számolnunk, $F_1$ nem jelenik meg, és egyenesen az 
 $\frac{1}{3}m\ell^2\left(\frac{a}{\ell}\right)=mg \frac{\ell}{2}+F_2\ell$ 
 egyenletet kapjuk. (Akkor egyszerű a pillanatnyi forgástengelyhez rögzített koordináta rendszert használnunk, ha az inerciarendszer, vagy ha gyorsul ugyan, de az ebből adódó tehetetlenségi erőnek nincs forgatónyomatéka a pillanatnyi forgástengelyre. Esetünkben a becsapódás pillanatában ez utóbbi feltétel teljesül.)
