---
id: nbpho-2012-asteroid
source: nbpho
native_id: "2012 P1 ASTEROID"
year: 2012
language: hu
translated: true
topic: [mechanics]
subtopic: [gravitation, orbits, kepler]
math_tools: [calculus]
format: open-ended
points: 14
core_ideas: []
has_figure: false
figure_files: []
provenance_note: "NBPhO 2012 (Északi-Balti Fizika Olimpia), 1. feladat, "Asteroida"."
links_en: nbpho-2012-asteroid
verification_status: pending
---

Tekintsünk egy hipotétikus asteroidát, amelynek tömege $m_{a}$ és sugara $r_{a}$, amely az elliptikus pályán kering a Nap körül (amely tömege $M_{s}$ ) a Föld mozgásával azonos irányban. Tegyük fel, hogy a Föld pályája egy kör, amelynek sugara $R_{e}$ (az excentricitást elhanyagoljuk) és hogy a két pálya ugyanabban a síkban van. Az asteroida Naptól való legkisebb távolsága (a perihelionban) $R_{\text {min }}=\frac{1}{2} R_{e}$ és a legnagyobb távolsága (az aphelionban) $R_{\text {max }}=1.51 R_{e} \approx 1.5 R_{e}$ (az egyszerűsítéshez használhatjátok a közelítő értéket). A Föld keringési sebessége $v_{0}=30 \mathrm{~km} / \mathrm{s}$. Az alábbi numerikus értékeket is használhatjátok: a Föld sugara $r_{e}=6400 \mathrm{~km}$, a szabadesés gyorsulása a Föld felszínén $g=9.81 \mathrm{~m} / \mathrm{s}^{2}$, a Nap szögátmérője a Földről nézve $\alpha=0.5^{\circ}$, egy év hossza $T_{0}=365$ nap, a Nap felszínének hőmérséklete $T_{s}=$ 6000 K, a szabadesés gyorsulása a Nap felszínén $g_{s}=275 \mathrm{~m} / \mathrm{s}^{2}$, Stefan-Boltzmann állandó $\sigma=5.6704 \times 10^{-8} \mathrm{~kg} \cdot \mathrm{~s}^{-3} \cdot \mathrm{~K}^{-4}$, fény sebessége $c=3 \times 10^{8} \mathrm{~m} / \mathrm{s}$. Az asteroida gömb alakú, sugara $r_{a}=10 \mathrm{~m}$ és tömege $m_{a}=1 \times 10^{7} \mathrm{~kg}$; mind a Nap, mind az asteroida tökéletes feketetest.

A rész. Ütközés a Földdel (5 pont)

i. (2 pont) Tegyük fel, hogy az asteroida ütközni fog a Földdel és már nagyon közel van, $l \ll R_{e}$ távolságban a Föld felszínétől; mekkora az asteroida sebessége a Föld vonatkoztatási rendszerében, feltéve, hogy (a) $l \gg r_{e}$; (b) $l \ll r_{e}$.

ii. (2 pont) Az impact paraméter $b$ a Föld vonatkoztatási rendszerében a Föld és az asteroida pályájának egy olyan érintője közötti távolság, amely egy elég távoli pontnál van ($l, r_{e} \ll l \ll R_{e}$ ). Határozzátok meg az ütközés maximális impact paraméterét $b_{\text {max }}$ !

iii. (1 pont) A számítások szerint az asteroida központosan ütközni fog a Földdel $N=10$ keringési periódus után. Az ütközés elkerüléséhez az asteroida periódusát meg kell változtatni; hány másodperccel? (Tegyétek fel, hogy a pályák metszéspontja mozdulatlan marad.)

B rész. A Nap vonzásának megváltoztatása (9 pont)

Elméletileg lehetséges az asteroida periódusát megváltoztatni a napfény nyomásának felhasználásával. Tanulmányozzuk, mennyire reális az ilyen projekt. A Nap az asteroidát egy $F_{0}=G M_{s} m_{a} / R^{2}$ gravitációs erővel vonzza, ahol $G$ a gravitációs állandó és $R$ a Nap és az asteroida közötti távolság az adott időpillanatban. Jelöljük $G M_{s}=\gamma_{0}$ értéket, így

$$
F=\gamma_{0} m_{a} / R^{2} .
$$

Tegyük fel, hogy amikor az asteroida a perihelionban van, a $\gamma_{0}$ állandó pillanatosan csökken egy új $\gamma_{1}$ értékre, amely állandó marad a későbbi mozgás során.

i. (2 pont) Határozzátok meg az asteroida új aphelion távolságát $R_{\text {max }}^{\prime}$ ! Fejezzétek ki $\kappa=\left(\gamma_{0}-\gamma_{1}\right) / \gamma_{0}$ függvényében.

ii. (2 pont) Határozzátok meg az asteroida keringési periódusának változását, feltéve, hogy $\kappa \ll 1$ !

iii. (4 pont) Tegyük fel, hogy a perihelionban az asteroidát egy tökéletes retroreflektív festékkel vonják be (amely az összes bejövő fényt közvetlenül vissza irányítja a forráshoz). Ez a festés az asteroida Nap felé irányuló effektív vonzásának megváltoztatásához vezet; határozzátok meg az ennek megfelelő $\kappa$ értékét (adjatok numerikus becslést is)!

iv. (1 pont) Becsüljétek meg, reális-e az ütközés elkerülése ezzel az asteroidával a retroreflektív festék segítségével.