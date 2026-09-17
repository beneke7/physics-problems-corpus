---
id: komal-P5588
source: komal
language: hu
translated: false
problem: komal-P5588
figure_files: [komal-P5588-sol-fig1.png, komal-P5588-sol-fig2.png, komal-P5588-sol-fig3.gif]
provenance_note: "KöMaL official solution (Hungarian)"
---

**I. megoldás.**
 Határozzuk meg, hogy milyen elektromos mezőt hoz létre önmagában a töltött szigetelő gyűrű a középpontjának kicsiny környezetében. Ha azt kapjuk, hogy a gyűrű átmérője mentén az elektromos térerősség (jó közelítéssel) arányos a középponttól mért távolsággal, akkor már könnyen megadhatjuk a pontszerű, töltött test periodikus mozgásának rezgésidejét. 
 Válasszunk egy olyan koordináta-rendszert, amelynek origója a gyűrű középpontja, $z$ tengelye pedig a gyűrű síkjára merőleges szimmetriatengely. Ezen a tengelyen az origótól $z_0\ll R$ távol lévő pontban a hengerszimmetria miatt az elektromos térerősség nyilván $z$ irányú, nagysága pedig jó közelítéssel 
 $E_z(z_0)=k\frac{Q}{R^3}\,z_0.$ 
 Ezt úgy láthatjuk be, hogy felosztjuk a gyűrűt sok kicsi, egyenként $\Delta Q$ töltésű darabkára (1. ábra) , és ezek elektromos térerősségvektorait összegezzük. 

 1. ábra 

 Az egyes darabok járuléka az elektromos mezőhöz $\vert{\Delta\boldsymbol E}\vert=k\frac{\Delta Q}{R^2+z_0^2}$ nagyságú, a térerősségvektor $z$ tengely irányú komponense pedig $\vert{\Delta\boldsymbol E}\vert$-nek $\sin\alpha=z_0/\sqrt{R^2+z_0^2}$-szerese: 
 $\Delta E_z(z_0)=k\frac{\Delta Q}{\left(R^2+z_0^2\right)^{3/2}}z_0\approx k\frac{\Delta Q}{R^3}z_0.$ 
 (A nevezőben $z_0^2$-t elhanyagoltuk $R^2$ mellett, hiszen $z_0\ll R$. A képlet végén szereplő $z_0$ mennyiséget természetesen nem hanyagolhatjuk el, mert nincs mellette egy másik távolság, amihez képest nagyon kicsi lenne.) 
 A teljes gyűrű ($z$ irányú) elektromos terének (előjeles) nagysága, vagyis a $z$ komponense: 
 $E_z(z_0)=\sum k\frac{\Delta Q}{R^3}z_0=k\frac{z_0}{R^3}\sum\Delta Q=k\frac{Q}{R^3}z_0.$ 
 Helyezzünk el – gondolatban – a gyűrű középpontjánál egy kicsiny hengert, amelynek alapköre $r_0$ sugarú, a magassága $2z_0$, és a szimmetriatengelye a $z$ tengely (2. ábra) . A hengerben nincsenek töltések, így – a Gauss-féle fluxustörvény szerint – a teljes felületén áthaladó $\Psi$ elektromos fluxus nulla . 

 2. ábra 

 A henger két körlapján összesen 
 $\Psi_1=2E_z(z_0)\cdot r_0^2\pi$ 
 fluxus távozik a hengerből. (Ez a megállapítás csak közelítőleg igaz, hiszen a körlapok mentén a térerősség $z$ komponensét ugyanakkorának veszi, mint amennyi az a szimmetriatengelyen, holott $E_z$ $z_0$-n kívül nyilván a tengelytől mért $r$ távolságtól is függhet. Ezt a függést azonban $r\le r_0\ll R$ miatt elhanyagolhatjuk, mert a fluxushoz csak $z_0$ vagy $r_0$ szorzatával (esetleg magasabb hatványaikkal) arányos, tehát nagyon kicsiny járulékot ad.) 
 A henger palástján keresztül kilépő fluxus 
 $\Psi_2=E_r(r_0)\cdot 2\pi r_0\cdot 2z_0.$ 
 (Ez az összefüggés is tartalmaz közelítést, mert elhanyagolja, hogy $E_r(r)$ nemcsak $r_0$-tól, hanem $z$-től is függhet. Ez a függés azonban $z_0\ll R$ miatt ugyancsak ,,másodrendűen kicsi'' korrekciót eredményez a fluxus kiszámításánál.) 
 A teljes elektromos fluxus $\Psi_1+\Psi_2=0$, vagyis 
 $2k\frac{Q}{R^3}z_0\cdot r_0^2\pi+E_r(r_0)\cdot 2\pi r_0\cdot 2z_0=0.$ 
 Innen leolvasható, hogy 
 $E_r(r_0)=-k\frac{Q}{2R^3}\,r_0.$ 
 Ennek megfelelően a horgászzsinóron csúszkáló, $q$ töltésű pontszerű testre ható erő az origótól $r$ távolságban 
 $F(r)=-k\frac{qQ}{2R^3}\,r\equiv -D\cdot r.$ 
 (A negatív előjel arra utal, hogy az erő az egyensúlyi helyzet felé mutató vektor, tehát $r=0$ stabil egyensúlyi helyzet.) 
 A fenti erőtörvény éppen olyan, mint egy $D$ direkciós erejű rugónál, a kialakuló mozgás periódusideje tehát 
 $T=2\pi\sqrt{\frac{m}{D}}=2\pi\sqrt{\frac{2mR^3}{kqQ}}.$ 

 Megjegyzés. Az alkalmazott közelítések alapja az, hogy az elrendezés a $z$ tengelyre nézve forgásszimmetrikus, a gyűrű síkjára nézve pedig tükörszimmetrikus. Tekintsük pl. a térerősséget egy a szimmetriasíktól $z$, a forgástengelytől $r$ távolságra levő pontban! A gyűrű síkjára való tükrözéskor a radiális komponens nem változhat, tehát $z$-nek csak páros hatványitól függhet, míg a síkra merőleges komponensnek előjelet kell váltania, tehát $z$ páratlan függvénye. Ennek megfelelően egy a $z$ tengellyel párhuzamos egyenes mentén a radiális komponensnek szélsőértéke (maximuma) van a gyűrű síkjában, és ettől távolodva az értéke csak $z$ négyzetével vagy annál lassabban változhat. Mivel bármely sík, ami a forgástengelyt tartalmazza, maga tükörsík, gondolatmenetünket egy ilyen síkra megismételve azt találjuk, hogy a térerősség $z$ irányú komponense a $z$ tengelytől mért $r$ távolság páros függvénye lehet csak, így a tengely közelében csak lassan, legfeljebb $r^2$-tel arányosan változhat. 
 Összefoglalva: Az elektromos térerősség hengerkoordináta-rendszerbeli komponensei az origó közelében így írhatók fel: 
 $E_r(r,z)=a_1r+a_2rz^2+\cdots\approx a_1r,$ 
 $E_z(r,z)=b_1z+b_2zr^2+\cdots\approx b_1z.$ 
 Látható, hogy abban a közelítésben, hogy $r$ és $z$ 1-nél magasabb kitevőjű hatványai elhanyagoljuk, $E_z$ nem függ $r$-től és arányos $z$-vel, $E_r$ pedig $z$-től független és $r$-rel arányos. 

**II. megoldás.**
 Az $E_r(r)$ térerősséget, kicsit több munka árán, direkt módon is kiszámíthatjuk. Osszuk fel a gyűrűt $R\Delta\varphi$ hosszúságú kicsiny ívekre, és számoljuk ki ezen darabok járulékát a gyűrű síkjában fekvő, a forgástengelytől $r$ távolságra levő $P$ pontban! (A jelöléseket a 3. ábra mutatja.) 

 3. ábra 

 A bejelölt $R\Delta\varphi$ hosszúságú szakasz $\Delta Q=\Delta\varphi(Q/2\pi)$ töltése által létrehozott térerősség $OP$ irányú komponensének a nagysága a $P$ pontban 
 $\Delta E_r=\Delta E\cos\vartheta=-k\frac{\Delta Q}{d^2}\cos\vartheta.$ 
 (A járulék erre merőleges komponensével nem kell számolnunk, mert az az összegzés során a szimmetria miatt kiesik.) A koszinusztétel segítségével 
 $d=\sqrt{R^2+r^2-2Rr\cos\varphi}\qquad\textrm{és}\qquad\cos\vartheta=\frac{R\cos\varphi-r}{d}=\frac{R\cos\varphi-r}{\sqrt{R^2+r^2-2Rr\cos\varphi}},$ 
 így 
 $\Delta E_r=-k\Delta Q\frac{R\cos\varphi-r}{\left(\sqrt{R^2+r^2-2Rr\cos\varphi}\right)^3},$ 
 ami $R$ kiemelése után 
 $\Delta E_r=-\frac{k\Delta Q}{R^2}\frac{\cos\varphi-(r/R)}{\left(\sqrt{1+(r/R)^2-2(r/R)\cos\varphi}\right)^3}.$ 
 alakú. Feltételezésünk szerint $r\ll R$, így alkalmazhatjuk az $\vert x\vert\ll 1$ értékekre érvényes $(1+x)^{-n/m}\approx (1-nx/m)$ közelítést, és az $(r/R)^2$-tel arányos tagokat az egy nagyságrendű tagok mellett elhanyagolhatjuk. Így a 
 $\Delta E_r=-\frac{k\Delta Q}{R^2}\left(\cos\varphi+\frac{r}{R}\left(3\cos^2\varphi-1\right)\right)=-\frac{k\Delta Q}{R^2}\left(\cos\varphi+\frac{r}{R}\left(\frac{1}{2}+\frac{3}{2}\cos(2\varphi)\right)\right)$ 
 kifejezésre jutunk. Ezt és $\Delta Q$ értékét felhasználva 
 $E_r(r)=-\frac{kQ}{R^2}\frac{1}{2\pi}\sum\left(\cos\varphi+\frac{r}{R}\left(\frac{1}{2}+\frac{3}{2}\cos(2\varphi)\right)\right)\Delta\varphi.$ 
 Mivel a teljes $0\le\varphi\le2\pi$ tartományra nézve mind $\sum\cos\varphi\Delta\varphi$, mind pedig $\sum\cos(2\varphi)\Delta\varphi$ nulla, viszont $\sum\Delta\varphi=2\pi$, 
 $E_r(r)=-\frac{kQ}{2R^3}r.$ 
 A horgászzsinóron csúszkáló pontszerű testre ható erő az origótól $r$ távolságban 
 $F(r)=-k\frac{qQ}{2R^3}\,r\equiv -D\cdot r.$ 
 A kialakuló mozgás harmonikus rezgőmozgás, amelynek rezgésideje 
 $T=2\pi\sqrt{\frac{m}{D}}=2\pi\sqrt{\frac{2mR^3}{kqQ}}.$

![solution figure](../../raw_html/komal_figures/komal-P5588-sol-fig1.png)

![solution figure](../../raw_html/komal_figures/komal-P5588-sol-fig2.png)

![solution figure](../../raw_html/komal_figures/komal-P5588-sol-fig3.gif)
