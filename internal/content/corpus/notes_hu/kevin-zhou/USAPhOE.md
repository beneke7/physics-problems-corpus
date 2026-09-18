---
id: kevin-zhou/USAPhOE_hu
source: Kevin Zhou Physics Olympiad Handouts
kind: handout
language: hu
translated: true
bidirectional_links:
  en: corpus/notes/kevin-zhou/USAPhOE.md
source_file: sources/kevin_zhou/text/handouts/USAPhOE.txt
source_url: https://knzhou.github.io/handouts/USAPhOE.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
verification_status: pending
includes_solution_pdf: false
provenance_note: Complete Hungarian translation of Kevin Zhou Physics Olympiad Handouts USAPhOE; mathematical notation preserved; solution PDFs excluded from this corpus note.
---

# Gyakorló USAPhO E

## UTASÍTÁSOK

NE NYISSA KI EZT A FELADATSORT, AMÍG NEM KAP UTASÍTÁST A KEZDÉSRE

- Először az A rész feladatait oldja meg. Az összes feladat megoldására 90 perc áll rendelkezésére. Minden feladat azonos pontértékű; az A rész összesen 60 pontot ér. Ez idő alatt ne nézze meg a B rész feladatait.

- Az A rész feladatainak megoldása után pihenhet.

- Ezután a B rész feladatait oldja meg. A B rész megoldására 90 perc áll rendelkezésre. Minden feladat egyenlő pontértékű, a B rész összesen 60 pontot ér. A B rész megoldása közben ne nézze meg az A rész feladatait.

- Írja le a teljes megoldást. Indokolt megoldásra akkor is járhat részpont, ha az eredmény hibás. Ne írjon az oldal hátoldalára. Ne írjon a feladatlapra semmit, amit értékelni szeretne.

- Minden feladatot új lapon kezdjen. A lap jobb felső sarkába írja fel: az Ön AAPT azonosítóját, a felügyelő AAPT azonosítóját, a feladat számát, valamint a feladat oldalszámát (aktuális oldal/összesen ennyi oldal). Például:

  ```
  Diák AAPT-azonosító #
  Felügyelő AAPT-azonosító #
       A1 – 1/3
  ```

- Kézi számológép használható. A memóriájából törölni kell minden adatot és programot. Csak az egyszerű tudományos számológépeken megtalálható alapvető függvények használhatók. A számológépeket nem lehet megosztani. Mobiltelefon, PDA vagy fényképezőgép nem használható a vizsga alatt, illetve amíg a vizsgalapok az asztalon vannak. Táblázatok, könyvek vagy képletgyűjtemények nem használhatók.

- Az azonos pontértékű feladatok nem feltétlenül azonos nehézségűek.

- A vizsga biztonságának megőrzése érdekében ne osszon meg a verseny feladatairól (vagy azok megoldásairól) semmilyen információt.

## Lehetséges hasznos információk

Ezt az oldalt a vizsga mindkét részéhez használhatja.

---

## A rész

### A1. feladat

Ez a feladat egy valódi helyzetet ír le, amellyel az Egyesült Államok Szövetségi Légügyi Hatósága (FAA) mérnökei szembesültek. Floridában, ahol gyakoriak a viharok, az FAA sok kommunikációs berendezés meghibásodását észlelte. A mérnökök villámcsapásokra gyanakodtak, ezért egy teljesítményrögzítő készüléket telepítettek egy floridai helyszínen. A probléma alapos tanulmányozása után arra a következtetésre jutottak, hogy a meghibásodásokat az energia kommunikációs rendszerbe történő induktív csatolása okozta. Megállapították, hogy az acéltorony, a réz mikrohullámú hullámvezető, az acél berendezésszekrény és a föld egy körülbelül 2 méter × 6 méter méretű vezetőhurkot alkotott (lásd a vázlatot).

A villámáram felfutási idejének tipikus értékeiből megbecsülhető, hogy jelentős feszültség indukálódna ebben a hurokban még egy, a toronytól több kilométerre bekövetkező villámcsapás esetén is.

```
                    acél
                                     réz mikrohullám acél szekrény
                    torony
                                              hullámvezető

                                           vezetőhurok

                       2m

                                                     föld
                                              6m
```

Modelleznünk kell a folyamatot az alábbiak szerint.

1. Kezdjük egy egyenes, végtelen, állandó $I$ árammal átjárt vezető által létrehozott mágneses térrel. Használjuk a Biot–Savart-törvényt vagy az Ampère-törvényt az áramvezetőtől $r$ távolságra lévő mágneses tér kifejezésének meghatározásához.

2. Bár az 1. rész eredménye szigorúan csak állandó áram esetén érvényes, használjuk fel a villámcsapás által létrehozott időfüggő mágneses tér becslésére. Modellezzük a villámcsapást egy egyenes, függőleges, végtelen áramvezetőként, amely lineárisan nulla értékről $1 \times 10^6\ \mathrm{A}$ értékre nő $5 \times 10^{-5}\ \mathrm{s}$ alatt. A villámcsapás a toronytól egy kilométerre következik be. Határozzuk meg a vezetőhurokban indukálódó elektromotoros erőt az áram növekedése közben. Írjuk le, milyen további közelítéseket alkalmazunk az eddig említetteken kívül.

3. Tegyük fel, hogy a fent leírt vezetőhurok ellenállása 50 Ohm. A szekrényen belül található egy szilárdtest-eszköz, amely maximum 0,25 A áramot képes elviselni. Megsérülhetne ez az eszköz a 2. rész által leírt villámcsapás során?

### A2. feladat

Egy nagy edény összenyomhatatlan, elektromosan szigetelő folyadékkal van megtöltve. A folyadék tömegsűrűsége $\rho_m$, egyenletes töltéssűrűsége pedig $\rho_e$, amely olyan kicsi, hogy a folyadék által létrehozott elektromos tereket elhanyagolhatjuk. Legyen $z = 0$ a folyadék kezdeti felszínének szintje. Egy $-q$ ponttöltést $H$ magasságba emelünk, és a folyadék felszínén egy dudor keletkezik.

1. Határozzuk meg a csúcs maximális magasságát.

2. Ha a töltést lassan lejjebb engedjük, milyen $H^*$ magasságban kezd a folyadék felé áramolni?

### A3. feladat

Egy $m$ tömegű és $L$ hosszú fémrúd (a lenti ábrán vastag vonal) súrlódásmentesen csúszhat; végei két merőleges vezetékhez kapcsolódnak (az ábrák vékony vonalai). Az egész elrendezés vízszintes síkban helyezkedik el. Egy $B$ nagyságú állandó mágneses tér merőleges erre a síkra, és lefelé irányul. A vezetékek ellenállása a rúd $R$ ellenállásához képest elhanyagolható. A rúd kezdetben az egyik vezetéken helyezkedik el úgy, hogy egyik vége a két vezeték csatlakozásánál van (lásd az (a) ábrát).

```
[Ábra: a rúd különböző pozíciókban]
```

A rudat olyan kezdeti $\Omega$ szögsebességgel indítjuk, hogy két vége mindig érintkezésben maradjon a két vezetékkel (lásd a (b) ábrát), és végül a másik vezetékkel egy vonalba eső helyzetben álljon meg (lásd a (c) ábrát). Határozzuk meg $\Omega$ értékét. Hanyagoljuk el a rendszer önindukcióját.

### A4. feladat

Egy $\rho$ fajlagos ellenállású vezető folyadék $v$ sebességgel áramlik át egy négyzet keresztmetszetű fémcsövön, amely egyenletes elektromos $E$ és mágneses $B \gg E/c$ térben helyezkedik el. A sebesség, az elektromos tér és a mágneses tér páronként merőlegesek egymásra.

```
[Ábra: magnetohidrodinamikus hajtás berendezése]
```

Ez egy "magnetohidrodinamikus hajtás", amely elektromos energiát használ a folyadék előreviteléhez.

1. Határozzuk meg a folyadékra, a cső irányában, egységnyi térfogatra ható erőt. Hanyagoljuk el az áram által létrehozott tereket.

2. Határozzuk meg azt a $v$ áramlási sebességet, amely maximalizálja a folyadéknak átadott, egységnyi térfogatra jutó teljesítményt. Mekkora ebben a sebességben a szivattyú hatásfoka?

---

## B rész

### B1. feladat

A mechanikai és elektromos folyamatok néha erősen összekapcsolódnak. Erre fontos példák a piezoelektromos anyagokat tartalmazó rendszerek, például a kvarcrezonátorok. Itt egy valamivel egyszerűbb helyzetet vizsgálunk.

```
[Ábra: két fémlemez rugókkal]
```

Két, egyenként $S$ területű és $m$ tömegű fémlemez van egymás fölött. A lemezeket rugók kötik össze; a rugók együttes rugóállandója $k$, és szigetelő anyagból készülnek. Az alsó lemez merev alapra van rögzítve. A lemezek egyensúlyi távolsága $X_0$.

1. Tegyük fel, hogy a felső lemez egyensúlyi helyzetéből kis függőleges $x$ elmozdulást szenved. Határozzuk meg az $x$ elmozdulás $\ddot{x}$ gyorsulását a rendszer paramétereinek függvényében. Mekkora a felső lemez kis függőleges rezgéseinek $\omega_0$ szögfrekvenciája?

2. A lemezeket most állandó nagyfeszültségű forrásra kapcsoljuk, így kondenzátort alkotnak. Az elektrosztatikus vonzóerő a felső lemez további elmozdulását okozza. A lemezek egyensúlyi távolsága most $X_1$. Vezessük le az elektromos vonzóerőre $F_e$ és a lemezekre kapcsolt $U$ feszültségre vonatkozó kifejezést az $X_0$, $X_1$, $S$, $m$ és $k$ függvényében.

3. A rendszert ismét rezgésre állítjuk, miközben az $U$ feszültséget állandó értéken tartjuk. Legyen $x$ az egyensúlyi helyzetből való kis eltolódás. Vezessünk le kifejezést az $\ddot{x}$ gyorsulásra az $X_0$, $X_1$, $S$, $m$, $k$ és az eltolódás $x$ függvényében. Mekkora a felső lemez kis vertikális rezgésének $\omega_0'$ szögfrekvenciája?

4. Az előző kérdés helyzetét módosítva kössünk sorba a kondenzátorral és a feszültségforrással egy $L$ induktivitású tekercset. Egyensúlyban a lemezek távolsága $X_1$, a kondenzátor töltése pedig $Q$. Most vegyük figyelembe mindkét mennyiség kis változását, így a távolság és a töltés $X_1 + x$, illetve $Q + q$ lesz. Vezessük le az $\ddot{x}$ és $\ddot{q}$ gyorsulások kifejezését az $X_1$, $Q$, $S$, $L$, $m$, $k$, $x$ és $q$ függvényében.

5. Keressük meg a rendszer harmonikus rezgésének lehetséges szögfrekvenciáit az $X_0$, $X_1$, $\omega_0$ és $\omega_1 = \sqrt{X_1 / \epsilon_0 SL}$ függvényében.

6. Mekkora az $X_0 / X_1$ maximális értéke, amely mellett a rendszer stabil?

### B2. feladat

Ampère mágneses jelenségekre vonatkozó értelmezésének első sikerei közé tartozott az áramjárta vezetékek által létrehozott $B$ mágneses tér kiszámítása, a Biot és Savart által korábban tett feltevésekkel összehasonlítva. Különösen érdekes eset egy nagyon hosszú, állandó $i$ áramot vezető huzal, amely két egyenes szakaszból áll, és „V” alakú; a V félnyílásszöge $\alpha$.

```
[Ábra: V alakú vezeték elrendezése]
```

Ampère számításai szerint a csúcstól $d$ távolságra lévő $P$ pontban a mágneses tér $B$ nagysága arányos a $\tan(\alpha/2)$ értékkel. Ampère munkája később beépült Maxwell elektromágneses elméletébe, és ezt az eredményt ma általánosan elfogadják.

1. Határozzuk meg a $B$ tér irányát a $P$ pontban.

2. Ha a tér nagysága a $P$ pontban $B = k \tan(\alpha/2)$, határozzuk meg a $k$ állandót.

3. Legyen $P^*$ a $P$ pontnak a V csúcsára vonatkozó tükörképe. Számítsuk ki a $B$ mágneses teret a $P^*$ pontban.

4. A mágneses tér mérésére a $P$ pontba helyezünk egy kis mágnestűt, amelynek tehetetlenségi nyomatéka $I$, mágneses dipólusmomentuma pedig $\mu$. A tű egy rögzített pont körül, a $B$ irányát tartalmazó síkban rezeg. Számítsuk ki a tű kis rezgéseinek periódusát a $B$ függvényében.

5. Ugyanezen körülmények között Biot és Savart azt feltételezték volna, hogy a mágneses tér a $P$ pontban $B = \mu_0 i \alpha / \pi^2 d$ lehet. A két kifejezés közötti választást kísérlettel próbálták eldönteni, a mágnestű rezgési periódusát az $\alpha$ függvényében mérve. Ahhoz, hogy a két előrejelzést kísérletileg megkülönböztessük, a periódusoknak jelentősen különbözniük kell. Körülbelül melyik $\alpha$-tartományban nagyobb Ampère jóslata legalább 10%-kal Biot és Savart jóslatánál?

Hasznos lehet a félszög tangensének azonossága:

$$\tan\left(\frac{\alpha}{2}\right) = \frac{\sin \alpha}{1 + \cos \alpha}$$
