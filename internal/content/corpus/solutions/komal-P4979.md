---
id: komal-P4979
source: komal
language: hu
translated: false
problem: komal-P4979
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 Az elektromos tér megosztást hoz létre a higanycseppben, annak felületére töltések ülnek ki. A külső tér a felületi töltésekre ,,kifelé'' mutató erőket fejt ki, és ezek az erők addig deformálják a cseppet, amíg a felületi feszültségből származó erők egyensúlyba nem kerülnek az elektromos erőkkel. 
 A fentebb vázolt kvalitatív képet próbáljuk meg számszerűsíthető becsléssé finomítani. Első tájékozódáshoz már az egyszerű dimenzionális megfontolások is elegendőek. A csepp megnyúlása (jelöljük ezt $2\Delta R$-rel) az elektromos térerősségtől, a felületi feszültségtől és a csepp sugarától függhet, és a képletében megjelenhet még a vákuum dielektromos állandója: 
 $2\Delta R=f(E_0, \alpha, R,\varepsilon_0).$ 
 A megnyúlás $E_0$-nak páros függvénye (hiszen az elektromos tér irányától nem függ), ezért csak $E_0^2$-től függ. Mivel erőtérmentes esetben a megnyúlás nulla, és a külső tér gyenge, feltételezhetjük, hogy $\Delta R\sim E_0^2.$ 
 Keressük a megnyúlást 
 $f=\text{állandó}\cdot \left(E_0^2\right) \cdot \alpha^x\left(\varepsilon_0\right)^y \cdot R^z$ 
 alakban, ahol az állandó, valamint az $x,y $ és $z$ kitevők dimenziótlan számok. Figyelembe véve a fellépő mennyiségek dimenzióját, felírhatjuk, hogy 
 ${\rm m}= \frac{\rm N^2}{\rm C^2} \cdot \left(\frac{\rm N}{\rm m}\right)^x\cdot \left( \frac{\rm C^2}{\rm N\,m^2}\right)^y \cdot {\rm m}^z.$ 
 A neweton, a coulomb és a méter dimenziókat összeszámolva kapjuk, hogy $x=-1$, $y=1$ és $z=2$, tehát a csepp megnyúlása: 
 $2\Delta R=\text{állandó}\cdot \frac{\varepsilon_0E_0^2}{\alpha}R^2.$ 
 A fenti képletben szereplő állandó számszerű értékének pontosításához részletesebb (az erők egyensúlyát vizsgáló) megfontolásokra van szükség. Közelíthetjük például a cseppet egy $a=R+\Delta R$ nagytengelyű (forgástengelyű), $b=R-\tfrac12 \Delta R$ kistengelyű forgási ellipszoiddal. Feltehetjük (hiszen a külső tér gyenge), hogy a csepp csak kicsit tér el a gömbtől, vagyis a $\lambda=\frac{\Delta R}{R}$ mennyiség sokkal kisebb 1-nél. Ennek az ellipszoidnak a térfogata 
 $V=\frac{4\pi}{3}ab^2=\frac{4R^3\pi}{3}(1+\lambda)(1-\tfrac{1}{2}\lambda)^2\approx \frac{4R^3\pi}3,$ 
 összhangban azzal, hogy a higany jó közelítéssel összenyomhatatlan folyadék. 
 A deformált higanycsepp görbületi nyomása a nagytengely végpontjaiban 
 $p_1=2\alpha\frac{ a}{b^2}=\frac{2\alpha}{R} \frac{1+\lambda}{(1-\tfrac12 \lambda)^2}\approx \frac{2\alpha}{R}\left(1+2\lambda\right).$ 
 Hasonló módon a görbületi nyomás a kistengely végpontjaiban 
 $p_2= \alpha\left(\frac{b}{a^2}+\frac{1}{b}\right)\approx \frac{2\alpha}{R} (1-\lambda).$ 
 A két nyomás közötti különbség: 
 $p_1-p_2=6\lambda\frac{\alpha}{R}.$ 
 Másrészt kiszámíthatjuk, hogy a homogén elektromos térbe helyezett gömb felülete mentén az elektromos térerősség nulla és $E=3E_0$ között változik. (A gömbön kívül olyan az elektromos mező, mintha a homogén térhez egy alkalmasan választott erősségű dipólus terét adnánk hozzá.) Az elektromos mező által létrehozott felületi töltéssűrűség $\varepsilon_0E$, az ebből származó húzófeszültség (negatív nyomás) pedig $\tfrac12\varepsilon_0E^2$. Ez a cseppnek a külső tér irányába eső tengelyének végpontjaiban $\tfrac92\varepsilon_0E_0^2$, az erre merőleges tengelyek végpontjaiban pedig nulla. 
 A nyomáskülönbségeket a görbületi nyomások különbségével egyenlővé téve a 
 $6\lambda\frac{\alpha}{R}=\frac92\varepsilon_0E_0^2
$ 
 összefüggés adódik, ahonnan a csepp megnyúlására a 
 $2\Delta R=2\lambda R=\frac{3}{2}\cdot\frac{\varepsilon_0E_0^2}{\alpha}R^2 $ 
 eredmény adódik. 
 Belátható, hogy a csepp alakja kis deformáció esetén ($\lambda$ magasabb hatványainak elhanyagolásával) valóban forgási ellipszoid, és ha a megnyúlás a fentebb megadott érték, akkor az erők egyensúlya nemcsak az ellipszoid tengelyeinek végpontjánál, hanem a felület minden pontjánál teljesül.
