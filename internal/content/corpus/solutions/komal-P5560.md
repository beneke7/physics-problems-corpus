---
id: komal-P5560
source: komal
language: hu
translated: false
problem: komal-P5560
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 A megoldás során az alábbi jelölést használjuk: a bolygón élők vonatkoztatási rendszerében mért mennyiségeket $b$ indexszel látjuk el. A $v$ sebességgel haladó űrhajón lévő asztronauták vonatkoztatási rendszerében mért mennyiségeket pedig $a$ indexszel jelöljük.
 Tekintsünk egy $T_b$ periódusidejű elektromágneses hullámot, melynek periódusidejét az űrhajón $T_a$-nak mérik. Célunk kapcsolatot teremteni ezen két mennyiség között. Vizsgáljuk azt a két eseményt, amikor az űrhajón észlelik az elektromágneses hullám két egymás utáni amplitúdó maximumát. Ezen két esemény távolságkülönbsége nulla, időkülönbsége pedig $T_a$ az űrhajó vonatkoztatási rendszerében. Ugyanezen két esemény időkülönbsége $t_b$, a távolságkülönbsége pedig $vt_b$ a bolygó vonatkoztatási rendszerében.
 A relativitáselméletben két esemény közti $\Delta t$ időkülönbségből és $\Delta x$ távolságkülönbségből képzett $c^2(\Delta t)^2-(\Delta x)^2$ mennyiség invariáns, azaz értéke nem függ a vonatkoztatási rendszer választásától. Az invariánst felhasználva:
 $c^2T_a^2=c^2t_b^2-v^2t_b^2.$
 A bolygóról nézve az elektromágneses hullám $(c-v)$ relatív sebességgel halad az űrhajó irányába. A két szomszédos amplitúdómaximum közti távolság (azaz a hullámhossz) $cT_b$, melyet ezzel a relatív sebességgel $t_b=\frac{cT_b}{c-v}$ idő alatt tesz meg a hullám. Helyettesítsük be ezt a kifejezést az invariánsból kapott összefüggésbe:
 $T_a=\sqrt{\frac{c+v}{c-v}}T_b.$
 Az egyenlet reciprokát képezve a frekvenciák közti kapcsolatot tudjuk felírni:
 $f_a=\sqrt{\frac{c-v}{c+v}}f_b.$
 Ezzel levezettük az ún. relativisztikus Doppler-képletet, melyet nyomtatott vagy online forrásokban is könnyen megtalálhatunk (pl. Budó: Kísérleti fizika III. kötet, 310. old.). A kifejezésben $v$ az elektromágneses forrás és a megfigyelő relatív sebessége (ez független a koordináta-rendszer választásától). Ha a forrás és a megfigyelő távolodik egymástól, akkor $v$ pozitív, közeledés esetén pedig $v$ negatív értékű.
 Ugyanazt a relativisztikus Doppler-képletet használhatjuk a feladatban szereplő rádióhullám vivőfrekvenciájára illetve modulációs frekvenciájára is. Így az űrhajósoknak a rádió vevőjét $\sqrt{\frac{1-0{,}8}{1+0{,}8}}500\,\mathrm{kHz}=167 \,\mathrm{kHz}$-es frekvenciára kell állítaniuk. A búgást pedig $\sqrt{\frac{1-0{,}8}{1+0{,}8}}314\,\mathrm{Hz}=105 \,\mathrm{Hz}$ frekvenciájúnak hallják.
