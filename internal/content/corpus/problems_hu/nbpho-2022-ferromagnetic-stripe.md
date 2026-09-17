---
id: nbpho-2022-ferromagnetic-stripe
source: nbpho
native_id: "2022 P5 FERROMAGNETIC STRIPE"
year: 2022
language: hu
translated: true
links_en: nbpho-2022-ferromagnetic-stripe
topic: [experimental-skills, electromagnetism]
subtopic: [magnetostatics, ferromagnetism, saturation-magnetisation, measurement]
math_tools: [calculus, vector-calculus]
format: experimental
points: 12
core_ideas: []
has_figure: false
figure_files: []
provenance_note: "NBPhO 2022 (Északi-Balti Fizika Olimpia), 5. feladat (mérési), szerzők Jaan Kalda és Eero Uustalu. Mathpix OCR born-digital PDF-ből (cache/phoxiv/nbpho/2022.pdf)."
verification_status: pending
---

**5. FERROMÁGNESES SZALAG (12 pont)** — *Jaan Kalda, Eero Uustalu.*

**Eszközök:** tolómérő, vonalzó, milliméterpapír, elemtartóban lévő elemekhez
csatlakoztatott rezisztív mágnesestér-érzékelő, két vezetékes multiméter, egy mágnes,
egy 0,25 mm vastag, lágy ferromágneses anyagból készült szalag — ne hajlítsd meg
túlzottan, hogy ne sérüljön.

**i)** *(0,5 pont)* Csatlakoztasd a vezetékek banándugós végeit a multiméter COM
portjához és a V$\Omega$mA portjához. Kapcsold a multimétert 20 voltos (DC)
tartományba, és érintsd meg az elemtartó két fémkivezetését (amelyek a piros és fekete
vezetékek kilépési pontjai mellett vannak) a vezetékek krokodilcsipeszes végeivel.
Jegyezd fel az elemtartó kivezetésein mért $\mathcal{E}$ feszültséget! Ha a feszültség
3,0 V alatt van, kérhetsz csereelemeket.

Minden mágnesestér-mérésnél tartsd szem előtt, hogy ha az elem feszültsége pontosan
3 V lenne, akkor a leolvasott érték minden millivoltja 10 mikrotesla mágneses
térerősségnek felelne meg. A millivoltban leolvasott érték azonban mind a mágneses
térrel, mind az elem feszültségével arányos.

Csatlakoztasd a krokodilcsipeszeket a mágneses érzékelő sárga és piros vezetékeihez!
Vedd figyelembe, hogy (a) az érzékelőnek nullától eltérő eltolása (offset) lehet: még
ha nincs is mágneses tér, a multiméter $V_0$ leolvasott értéke nem feltétlenül nulla;
(b) mindig jelen van a Föld mágneses tere. A továbbiakban kerüld az 500 mV-nál nagyobb
feszültségnek megfelelő mágneses terek mérését — az ilyen erős terek megváltoztathatják
a $V_0$ eltolási értéket. Ha véletlenül ilyen térnek teszed ki az érzékelőt, határozd
meg és használd az új $V_0$ értéket!

A mágneses érzékelő egyik élén egy kis fehér pont van megjelölve. Ez annak a mágneses
tér-komponensnek az irányát mutatja, amelyet mérünk.

**ii)** *(1,5 pont)* Határozd meg a $V_0$ eltolási feszültséget, a Föld mágneses
terének $B_E \equiv |\vec{B}_E|$ nagyságát, valamint a függőleges irány és a $\vec{B}_E$
iránya közötti szöget!

Most rögzítsd a mágnest a ferromágneses szalaghoz úgy, hogy a kör alakú lapja a szalag
felületét érintse annak egyik vége közelében. Használjunk derékszögű
koordináta-rendszert, ahol az $x$–$y$-sík a szalag síkja, a szalag leghosszabb
szimmetriatengelye az $x$-tengely, és $x = 0$ a mágnes középpontjának helyén van.

A teljes mágneses tér a $\vec{B}_m$ állandó mágnes terének, a felmágnesezett
ferromágneses szalag $\vec{B}$ terének és a Föld $\vec{B}_E$ mágneses terének
szuperpozíciója. A továbbiakban csak $\vec{B}$ érdekel minket. Tételezd fel, hogy
$\vec{B}_m$ csak a mágnestől mért távolságtól függ, és változatlan marad, amikor a
mágnest leválasztjuk a szalagról.

**iii)** *(2,5 pont)* Mérd meg a szalag és a mágnes által keltett $B_z = B_z(L/2, y)$
függőleges teret az $y$ függvényében, $-w/2 \leq y \leq w/2$ tartományban, $x = L/2$-nél,
ahol $w$ a szalag szélessége, $L$ pedig a hossza. Határozd meg a
$\kappa = \langle B_z \rangle$ és $B_z(L/2, 0)$ arányát, ahol az átlagos mágneses tér
$$
\langle B_z \rangle \equiv \int_{-w/2}^{w/2} B_z(L/2, y)\,\mathrm{d}y .
$$
Tételezd fel, hogy $\kappa$ végig állandó a szalag mentén!

**iv)** *(3,5 pont)* Mérd meg a $B_z(x, 0)$ teret a szalag felülete közelében az $x$
függvényében, és ábrázold a mérési eredményeket!

**v)** *(2,5 pont)* Jelölje $J_s$ a szalag anyagának telítési mágnesezettségét; becsüld
meg a $J_s \mu_0$ értékét (ez nagyjából a legerősebb mágneses B-tér, amelyet a
ferromágnes hordozni képes)!

**vi)** *(1,5 pont)* Bizonyítsd be kísérletileg, hogy kis $x$ értékeknél a szalag
belsejében a mágnesezettség elérte a telítést!
