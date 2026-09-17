---
id: komal-P5723
source: komal
language: hu
translated: false
problem: komal-P5723
figure_files: [komal-P5723-sol-fig1.png, komal-P5723-sol-fig2.png]
provenance_note: "KöMaL official solution (Hungarian)"
---

**I. megoldás.**
 A feladat nagyon hasonlít ahhoz, amikor egy vízszintes talajon álló, súrlódásmentes rudat függőleges falhoz támasztunk, majd elengedjük. A különbség az, hogy a létra tetőpontjában nemcsak nyomóerő, hanem húzóerő is ébredhet, ezért a $C$ pont mindvégig függőlegesen mozog. A hasonlóság viszont az, hogy a tetőpontban mindig vízszintes az egyes létraszárakra ható erő, mert a szimmetria miatt a csuklóban nem lehet ferde a feszítőerő. Ugyancsak hasonlóság, hogy a létra legfelső pontja függőlegesen lefelé mozog, ezért ennek a pontnak a sebessége és a gyorsulása is függőleges, illetve a létra talajjal érintkező pontja mindvégig vízszintesen mozog, ezért a legalsó pontnak a sebessége és gyorsulása is mindvégig vízszintes. Az egyes létraszárak középpontja $\ell/2$ sugarú körökön mozog, melynek középpontja a $C$ pont talajra érkezési helye. 

 a) Elegendő az egyik rudat vizsgálni. A becsapódás pillanatában az $A$ és $B$ pontok megállnak, ezeket pillanatnyi forgástengelynek tekinthetjük, és így felírhatjuk a gravitációs helyzeti energia forgási energiává alakulását: 
 $mg\frac{\ell}{2}\cos\alpha=\frac{1}{2}\Theta\omega^2=\frac{1}{2}\left(\frac{1}{3}m\ell^2\right)\omega^2\qquad\rightarrow\qquad\omega=\sqrt{\frac{3g\cos\alpha}{\ell}}.$ 
 Ezzel megkaphatjuk a $C$ pont kérdéses leérkezési sebességét: $v_C=\sqrt{3g\ell\cos\alpha}$. 

 b) Vizsgáljuk csak a jobb oldali létraszárat. Az 1. ábra a rúdra ható erőket mutatja: az $F$ erő vízszintes, $mg$ és $K$ függőleges. 

 1. ábra 

 Írjuk fel a dinamikai egyenleteket a tömegközéppont $a_x$ és $a_y$ gyorsulására, valamint a rúd szöggyorsulására a tömegközéppont körül: 
$$\begin{gather*}
F=ma_x,\\
mg-K=ma_y,\\
K\frac{\ell}{2}\sin\alpha-F\frac{\ell}{2}\cos\alpha=\Theta\beta=\left(\frac{1}{12}m\ell^2\right)\beta.
\end{gather*}$$
 A kényszerfeltételek felírásakor azt használjuk ki, hogy az $A$ és $B$ pontok gyorsulása mindig vízszintes, míg a $C$ pont gyorsulása mindvégig függőleges, illetve azt is észrevehetjük, hogy a kezdőpillanatban a tömegközéppont gyorsulása az általa leírt kör érintőjébe mutat (később ehhez hozzáadódik a centripetális gyorsulás járuléka is): 
$$\begin{gather*}
a_y=\frac{\ell}{2}\beta\sin\alpha,\\
a_x=\frac{\ell}{2}\beta\cos\alpha,\\
\frac{a_y}{a_x}=\tg\alpha.
\end{gather*}$$
 Ezekből az egyenletekből megkaphatjuk a tömegközéppont gyorsulásának vízszintes és függőleges összetevőjét: 
$$\begin{gather*}
a_x=\frac{3}{4}g\sin\alpha\cos\alpha,\\
a_y=\frac{3}{4}g\sin^2\alpha,
\end{gather*}$$
 továbbá megkaphatjuk a kérdéses kezdőpillanatbeli gyorsulásokat is: 
$$\begin{gather*}
a_A=a_B=a_x+\frac{\ell}{2}\beta\cos\alpha=2a_x=\frac{3}{2}g\sin\alpha\cos\alpha,\\
a_C=a_y+\frac{\ell}{2}\beta\sin\alpha=2a_y=\frac{3}{2}g\sin^2\alpha.
\end{gather*}$$

 c) Amikor a $C$ csukló a talajra csapódik, akkor az $A$, illetve $B$ pontok sebessége nulla, de a gyorsulásuk nem nulla! Becsapódáskor a tömegközéppont sebessége (ahogy azt az a) pontban kiszámoltuk): 
 $v_\mathrm{tkp}=\frac{v_C}{2}=\sqrt{\frac{3}{4}g\ell\cos\alpha}.$ 
 Ebből megkaphatjuk a tömegközéppont centripetális gyorsulását (ami ebben az esetben vízszintes): 
 $a_\mathrm{cp}=\frac{v_\mathrm{tkp}^2}{\ell/2}=\frac{3}{2}g\cos\alpha.$ 
 Ebből az is következik, hogy a csuklóban a becsapódás pillanatában $F=\frac{3}{2}mg\cos\alpha$ nagyságú, vízszintes húzóerőnek kell fellépni. 
 A $C$ pont mindvégig függőlegesen mozog, ezért nincs vízszintes gyorsulása, a tömegközéppontnak viszont a talajra csapódás előtti pillanatban $a_\mathrm{cp}=\frac{3}{2}g\cos\alpha$ vízszintes gyorsulás összetevője van. Ez jelenti a rúd vízszintes gyorsulásának átlagát, amiből az következik, hogy a talajra csapódás pillanatában, amikor a rúd már vízszintes, az $A$ és $B$ pontok gyorsulása a fenti centripetális gyorsulás kétszerese: 
 $a_A'=a_B'=2a_\mathrm{cp}=3g\cos\alpha.$ 
 A $C$ pont becsapódási (függőleges irányú) gyorsulását leggyorsabban úgy kaphatjuk meg, ha a pillanatnyi forgástengelyre (az $A$ vagy a $B$ pontra) felírjuk a forgómozgás dinamikai egyenletét: 
 $mg\frac{\ell}{2}=\Theta\beta=\frac{1}{3}m\ell^2\beta\qquad\Rightarrow\qquad a_C'=\ell\beta=\frac{3}{2}g.$ 
 Ebből az is következik, hogy becsapódáskor a rúd tömegközéppontjának függőleges gyorsulás összetevője $\frac{3}{4}g$, illetve ekkor a talaj kényszerereje $K=\frac{mg}{4}$, és ezek az utóbbi eredmények függetlenek attól, hogy milyen szöghelyzetből indult a létra. 

**II. megoldás.**
 A feladatot az energiamegmaradás törvényének felhasználásával is meg lehet oldani. Az elrendezés tükrözési szimmetriája miatt elegendő, ha csak az egyik (mondjuk a jobb oldali) rúd mozgását vizsgáljuk. A $C$ pont mindig függőlegesen mozog (lefelé), a $B$ pont pedig vízszintesen (jobbra). 
 b) Tételezzük fel, hogy a $C$ pont $a_C$ gyorsulással indul el lefelé, tehát egy kicsiny $\Delta t$ idő alatt (amíg a gyorsulást állandónak tekinthetjük) $\frac{1}{2}a_C(\Delta t)^2$ távolsággal mélyebbre kerül, a sebessége pedig $v_C=a_C\Delta t$ lesz. A rúd pillanatnyi elfordulásának középpontja (a mozgás ún. momentán centruma) a középpontjától $\ell/2$ távolságban, a 2. ábrán látható $O$ pontban, a $C$ ponttól $\ell\sin\alpha$ távol lesz. Erre a pontra vonatkozó tehetetlenségi nyomatéka (a Steiner-tétel szerint) 
 $\Theta=\frac{1}{12}m\ell^2+m\left(\frac{\ell}2\right)^2=\frac{1}{3}m\ell^2.$ 

 2. ábra 

 A rúd szögsebessége (mint a $CO$ szakasz elfordulásából látszik) 
 $\omega=\frac{a_C\Delta t}{\ell\sin\alpha},$ 
 a rúd $\Delta t$ idő elteltével 
 $E_\text{mozgási}=\frac{1}{2}\Theta\omega^2=\frac{m}{6}\left(\frac{a_C\Delta t}{\sin\alpha}\right)^2$ 
 mozgási (forgási) energiára tesz szert. Eközben a rúd (tömeg)középpontja függőleges irányban $\tfrac{1}{2}\tfrac{a_C}{2}(\Delta t)^2$ távolságnyit mozdul el, tehát a rúd helyzeti energiájának csökkenése 
 $\Delta E_\text{helyzeti}=\frac{1}{4}mga_C(\Delta t)^2.$ 
 Súrlódásmentes körülmények között a mechanikai energia állandó marad, tehát 
 $E_\text{mozgási}=\Delta E_\text{helyzeti},$ 
 ahonnan a keresett gyorsulás függőlegesen lefelé: 
 $a_C=\frac{3}{2}g\sin^2\alpha.$ 
 Számítsuk ki most a $B$ pont vízszintes (jobbra mutató) $a_B$ gyorsulását az indítást követő pillanatban. A rúd alsó pontja $\Delta t$ idő elteltével $a_B\Delta t$ sebességgel mozog jobbra, a rúd teteje pedig $a_C\Delta t$ sebességgel mozog függőlegesen lefelé. Ezen sebességeknek a rúd irányú vetülete ugyanakkora kell, hogy legyen, hiszen a rúd hossza állandó. 
 $a_B\Delta t\cdot\sin\alpha=a_C\Delta t\cdot\cos\alpha.$ 
 Innen ($a_C$ fentebb kiszámított értékét behelyettesítve) kapjuk, hogy 
 $a_B=\frac{3}{2}g\sin\alpha\,\cos\alpha.$ 
 Az $A$ pont – nyilván – ugyanekkora gyorsulással indul el balra . 

 a) A rúd földet érését megelőző pillanatban a $B$ pont sebessége nulla, a $C$ pont pedig valamekkora (függőleges irányú) $v_C$ sebességgel rendelkezik. A rúd $B$ körüli forgásának szögsebessége ekkor $\omega=v_C/\ell$, mozgási energiája tehát 
 $E=\frac{1}{2}\frac{m\ell^2}{3}\omega^2=\frac{1}{6}mv_C^2.$ 
 Ez az energia megegyezik a helyzeti energia $mg\tfrac{\ell\cos\alpha}{2}$ csökkenésével, innen kapjuk, hogy 
 $v_C=\sqrt{3g\ell\cos\alpha}.$ 

 c) Hátravan még, hogy meghatározzuk a rúd végpontjainak gyorsulását a becsapódást megelőző pillanatban. (Ezeket, hogy megkülönböztessük az induláskori gyorsulásoktól, jelöljük $a'_C$-vel és $a'_B$-vel.) 
 A $C$ pont sebessége a becsapódáskor a fentebb kiszámított $v_C$, a becsapódást kicsiny $\Delta t$ idővel megelőző pillanatban pedig $v_C-a_C\Delta t$. A rúd középpontja $v_C/2$ sebességgel süllyed, a helyzeti energia tehát $\Delta t$ idő alatt $\tfrac{1}{2}mgv_C\Delta t$ értékkel csökken. Ez a csökkenés a rúd mozgási energiájának növekedésével egyezik meg. Mivel a $B$ végpontja körül forgó rúd szögsebessége $\tfrac{v_C-a_C\Delta t}{\ell}$-ről $\tfrac{v_C }{\ell}$-re nőtt, az energiamérleg: 
 $\frac{1}{2}\,\frac{m\ell^2}{3}\left(\frac{v_C^2}{\ell^2}-\frac{(v_C-a_C\Delta t)^2}{\ell^2}\right)=\frac{1}{2}mgv_C\Delta t.$ 
 Innen – a $(\Delta t)^2$-tel arányos, ún. másodrendűen kicsiny tag elhanyagolásával – kapjuk, hogy a becsapódást megelőző pillanatokban a $C$ pont 
 $a_C'=\frac{3}{2}g$ 
 nagyságú, függőlegesen lefelé irányuló gyorsulással mozog. Érdekes, hogy ez a gyorsulás nem függ az indulás $\alpha$ szögétől, tehát a $C$ pont becsapódásának sebességétől is független. 
 Utolsó feladatunk az $a_B'$ gyorsulás meghatározása. Mivel a $B$ pont mindvégig vízszintesen mozgott, a gyorsulása is vízszintes kell, hogy legyen. A rúd $v_C/\ell$ szögsebességgel forog a $B$ pont körül, így (ha a jobbra mutató irányt tekintjük pozitívnak) a $C$ pont gyorsulása vízszintes irányban 
 $a'_C=a_B'+\ell\frac{v_c^2}{\ell^2}.$ 
 No de $C$ nem gyorsul vízszintes irányban, vagyis 
 $a'_B=-3g\cos\alpha.$ 
 Ezek szerint a becsapódáskor a $B$ pont balra gyorsul, ami nem meglepő, hiszen a jobbra mutató sebességének nagysága nullára csökken .

![solution figure](../../raw_html/komal_figures/komal-P5723-sol-fig1.png)

![solution figure](../../raw_html/komal_figures/komal-P5723-sol-fig2.png)
