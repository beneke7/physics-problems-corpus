---
id: komal-P4816
source: komal
language: hu
translated: false
problem: komal-P4816
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 Egyenes vezető változó erősségű árama változó indukciójú mágneses mezőt hoz létre maga körül, amelyek indukcióvonalai a vezetékkel koncentrikus körök, és merőlegesen metszik az $ab$ területű, téglalap alakú vezetőhurok síkját. Ebben a hurokban az általa körülvett, időben változó mágneses fluxus áramot indít, melynek $I_1$ nagysága a fluxus $\Delta t$ ideig tartó egyenletes változása miatt időben állandó. (Az áram kikapcsolásának igen rövid ideje alatt a rézkeret nem tud számottevően elmozdulni, emiatt a mágneses fluxust számíthatjuk a keret eredeti helyén.)
 A vezetőhurok oldalaira ható erők időben egyenletesen változnak, így az általuk $t$ idő alatt létrehozott erőlökés számolható a kezdeti $F$ erő felének megfelelő $Ft/2$ átlagértékkel. Az egyenes vezetékhez közelebbi $b$ hosszúságú oldal mentén kialakuló mágneses indukció:
 $B(r_0)=\frac{\mu_0}{2\pi} \frac{I}{r_0},$
 a távolabbi $b$ oldal mentén pedig
 $B(r_0+a)=\frac{\mu_0}{2\pi} \frac{I}{r_0+a}.$
 (Az egyenes vezetékre merőleges $a$ hosszúságú oldalakra ható Lorentz-erők eredője az ellentétes irányú áramok és a szimmetria miatt zérus.)
 A vezetőhurokra ható összes erő, ha a hurokban $I_1$ erősségű egyenáram folyik:
 $F=\frac{\mu_0}{2\pi}\,\frac{II_1 ab}{r_0(r_0+a)}.$
 A vezetőhurokban keletkező áram erőssége:
 $I_1=\frac{\cal E}{R}=\frac{1}{R}\frac{\Delta\Phi}{\Delta t}, $
 ahol $R=(2a+2b)\varrho^\text{(elekt.)}/A$ az $A$ keresztmetszetű vezetékből készült, $\varrho^\text{(elekt.)}$ fajlagos ellenállású rézhuzal teljes ellenállása, $\Phi$ pedig a keret által körülölelt mágneses fluxus. Ez utóbbi – mivel nem homogén a vezetőhurok által körülvett mágneses mező – elemi fluxusok összegezésével számítható ki:
 $\Phi=\sum \Delta \Phi=\sum B(r)\cdot b\Delta r=\frac{\mu_0}{2\pi}Ib\sum\limits_{r_0}^{r_0+a} \frac{\Delta r}{r}.$
 Az itt szereplő összeg vagy numerikusan, vagy integrálszámítással határozható meg, de megkapható a gázok izotermikus tágulásánál végzett munka hasonló kifejezésének ismeretében is:
 $\sum\limits_{r_0}^{r_0+a} \frac{\Delta r}{r}=\ln \left(1+\frac{a}{r_0}\right).$
 A fluxusváltozás üteme tehát:
 $\frac{\Delta\Phi}{\Delta t}=\frac{\mu_0}{2\pi}\,\frac{Ib}{\Delta t} \ln \left(1+\frac{a}{r_0}\right),$
 és így – a fentebbi képleteket is felhasználva – a drótkeretre ható erő az áram csökkenésének kezdetekor:
 $F=\left(\frac{\mu_0}{2\pi}\right)^2\,\frac{I^2}{\Delta t}\,\frac{b^2a}{r_0(r_0+a)}\,
\frac{A}{2(a+b)\varrho^\text{(elekt.)}} \ln \left(1+\frac{a}{r_0}\right).$
 Az átlagosan $F/2$ nagyságú erő $\Delta t$ idő alatt a $\varrho^\text{(mech.)}$ tömegsűrűségű, $m=2(a+b)A\varrho^\text{(elekt.)}$ tömegű drótkeretet
 $v=\frac{F\Delta t}{2m}=
\left(\frac{\mu_0}{2\pi}\right)^2\,\frac{I^2}{8 r_0\varrho^\text{(elekt.)} \varrho^\text{(mech.)}}\,
\frac{1}{ (1+\frac{r_0}{a})(\frac{a}{b}+1)^2} \ln \left(1+\frac{a}{r_0}\right)\approx 0{,}0014~\frac{{\rm mm}}{\rm s}
$
 sebességre gyorsítaná fel, ha nem lenne súrlódás a síklapon. (Felhasználtuk a réz – táblázatban megtalálható fajlagos ellenállás és tömegsűrűség – adatait is.) Látható, hogy a vezeték $A$ keresztmetszete és az áram kikapcsolásának ideje kiesett a végképletből.
