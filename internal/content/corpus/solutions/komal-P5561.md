---
id: komal-P5561
source: komal
language: hu
translated: false
problem: komal-P5561
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 $a)$ A húron állóhullámok alakulnak ki, melyek lehetséges $\lambda_n$ hullámhosszait a rögzített végek miatt a következő feltétel határozza meg:
 $n\frac{\lambda_n}{2}=2L,$
 ebből $\lambda_n=4L/n$, ahol $n=1,2,\ldots$ az alap- és felharmonikusoknak megfelelő pozitív egész számok. A megfelelő frekvenciák a fázissebesség segítségével így írhatók:
 $f_n=\frac{c}{\lambda_n}=\frac{n}{4}\frac{c}{L}.$

 $b)$ Mivel most is sajátrezgéseket keresünk (azaz olyan mozgásformát, melyben a húr minden pontja és az $M$ tömegű test is azonos frekvenciával, azonos vagy ellentétes fázisban mozog), a húr két felén egyforma hullámhosszú állóhullám fog kialakulni. Két lehetőség van: a húr két fele vagy azonos fázisban rezeg (ez a középpontra nézve páros függvénnyel írható le) vagy ellentétes fázisban (páratlan függvény). Utóbbi esetben a húr közepének (és így az $M$ tömegű testnek) a kitérése nulla, ezért ekkor a hullámhosszt meghatározó egyenlet:
 $n\frac{\lambda_n}{2}=L,\qquad\textrm{ahonnan}\qquad f_n=\frac{n}{2}\frac{c}{L}.$
 Itt továbbra is $n=1,2,\ldots$ egész számok.
 A tengelyesen szimmetrikus (páros) megoldásokhoz tartozó sajátfrekvenciák meghatározása egy kicsit nehezebb, melynek oka, hogy a húr közepén a peremfeltétel nem olyan egyszerű, mint rögzített vagy szabad végpont esetében. Válasszunk olyan koordináta-rendszert, melynek origója a húr bal oldali rögzített végpontjában helyezkedik el ($x=0$), a pontszerű test vízszintes koordinátája pedig $x=L$. A húr bal felén kialakuló transzverzális állóhullám
 $y(x,t)=A\sin(kx)\cos(\omega t)$
 alakban írható fel, hiszen az $x=0$ helyen rögzített végpont kitérése minden időpillanatban szükségszerűen nulla. Ebben az egyenletben $k=2\pi/\lambda$ a hullámszám és $\omega=2\pi f$ a körfrekvencia. A húr gyorsulása az $x=L$ helyen megegyezik az $M$ tömegű test $a$ gyorsulásával:
 $a=\left.\frac{\partial^2y}{\partial t^2}\right\vert_{x=L}=-A\omega^2\sin(kL)\cos(\omega t).$
 A pontszerű test rezgőmozgásának dinamikai feltételét a húrt feszítő $F$ erő függőleges komponenséből származó eredő erő biztosítja:
 $-2F\sin\alpha=Ma,$
 ahol $\sin\alpha$ kis kitérések esetén közelíthető a húr érintőjének meredekségével az $x=L$ helyen:
 $\sin \alpha\approx\tan \alpha =\left.\frac{\partial y}{\partial x}\right\vert_{x=L}=Ak\cos(kL)\cos(\omega t).$
 Az utóbbi három összefüggés felhasználásával a következőt kapjuk:
 $2FAk\cos(kL)=MA\omega^2\sin(kL).$
 Használjuk fel a húrt feszítő erő és a fázissebesség között fennálló $c=\sqrt{F/\mu}$ összefüggést, valamint a feladatban megadott $M=2\mu L$ tömegértéket! Egyszerűsítés és rendezés után kapjuk a
 $c^2k=L\omega^2\tan(kL)$
 egyenletet, ami az $\omega=ck$ formula segítségével elegáns alakba írható:
 $kL\tan(kL)=1.$
 Ennek a transzcendens egyenletnek a gyökei határozzák meg a lehetséges $k$ hullámszámokat és az annak megfelelő sajátfrekvenciákat. A gyökök numerikusan (pl. zsebszámológéppel) vagy számítógéppel kereshetők meg, az első három pozitív megoldás:
 $kL=0{,}860\quad 3{,}426\quad 6{,}437\quad\ldots$
 A megfelelő frekvenciák a hullámszám lehetséges értékeinek ismeretében így számolhatók:
 $f=\frac{\omega}{2\pi}=\frac{ck}{2\pi}.$
 A tengelyesen szimmetrikus hullámformákhoz tartozó sajátfrekvenciák tehát:
 $f=0{,}136\frac{c}{L},\quad 0{,}545 \frac{c}{L},\quad 1{,}024\frac{c}{L}\,\quad\ldots$
 A feladat a három legalacsonyabb frekvenciát kérdezte, ezek közül kettő a páros megoldásokhoz, egy pedig a páratlanhoz tartozik:
 $f=0{,}136\frac{c}{L},\quad 0{,}500\frac{c}{L},\quad 0{,}545\frac{c}{L}.$
