---
id: kevin-zhou/MRev_hu
source: Kevin Zhou Physics Olympiad Handouts
kind: handout
language: hu
translated: true
bidirectional_links:
  en: corpus/notes/kevin-zhou/MRev.md
source_file: sources/kevin_zhou/text/handouts/MRev.txt
source_url: https://knzhou.github.io/handouts/MRev.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
verification_status: pending
includes_solution_pdf: false
provenance_note: Complete Hungarian translation of Kevin Zhou Physics Olympiad Handouts MRev; mathematical notation preserved; solution PDFs excluded from this corpus note.
---

# Mechanika áttekintése

Néhány érdekes mechanikai feladatért lásd [ezt az előadást](https://www.youtube.com/watch?v=jSx4BvJuHvU) és [ezt az előadást](https://www.youtube.com/watch?v=jSx4BvJuHvU). Összesen 89 pont.

## 1. Közelítések

**[2] 1. feladat.** Az életünk során előfordulhat, hogy drága terméket kell vásárolnunk $P$ árért, amelyet hitelből finanszírozunk. Ha a hitel havi kamatláb $r \ll 1$ (például $r = 1\%$ azt jelenti, hogy az adósság havonta 1%-kal nő), akkor kiderül, hogy az adósságot $N$ hónap alatt törleszthetjük le, ha havonta

$$C = \frac{r(1 + r)^N}{(1 + r)^N - 1} P$$

összeget fizetünk. Például, ha $r = 0$, akkor $C = P/N$.

**(a)** Keressünk közelítést $C$-re, amely érvényes kicsi $rN$ értékekre.

**(b)** Keressünk közelítést $C$-re, amely érvényes nagy $rN$ értékekre.

## 2. Statika és lineáris dinamika

**[3] 2. feladat** (FYKOS 34.1). Az ember fejét egy $R$ sugarú gömbként, a sapkát pedig egy $r_0$ sugarú, tömegmentes gumiszalagként modellezzük, amelynek rugóállandója $k$, ahol $r_0 < R$. A szalag és a fej közötti súrlódási együttható $\mu$. Lehetséges-e egy kézzel feltenni a sapkát?

Azaz, keressük meg azokat a feltételeket, amelyek mellett lehetséges a szalagot úgy megnyújtani, hogy az egyenlítőjén feküdjön a gömbön, miközben az erőt csak a szalag egy pontján alkalmazzuk, az ábrán látható módon. Egyszerűsítésként tegyük fel, hogy a szalag mindig síkbeli marad.

**[3] 3. feladat.** Az M2-ben számos ideális kötelet érintő feladatot vizsgáltunk. Ezeknek állandó a hosszuk, húzóerőt fejthetnek ki saját irányukban, hajlítónyomatékot azonban nem. A következő legegyszerűbb eset a rugalmas szalag, például egy hosszú, vékony műanyagdarab. A rugalmas szalag az ideális kötélhez hasonló, de hajlítónyomatékot (vagyis belső forgatónyomatékot) is kifejt. Ez a lokális $R$ görbületi sugárral $\tau=\kappa/R$ kapcsolatban áll, ahol $\kappa$ konstans.

Tegyük fel, hogy egy $L+\Delta x$ teljes hosszúságú rugalmas szalag végeit egy $L$ hosszúságú ideális kötél kapcsolja össze, ahol $\Delta x\ll L$, így a szalag a kötél közepénél meghajlik. Határozzuk meg a kötél $T$ feszítőerejét és a szalag, illetve a kötél közötti legnagyobb távolságot.

**[3] 4. feladat** (MPPP 19). Egy apró gyöngy mély vízben mozog, és Stokes törvénye szerint sebességével arányos viszkózus fékezőerő hat rá. Ha a gyöngyöt nyugalomból elengedjük a vízben, $v_1$ végsebességet ér el.

**(a)** Tegyük fel, hogy a gyöngyöt ehelyett vízszintesen, $v_2$ kezdeti sebességgel engedjük el. Határozzuk meg a gyöngy legkisebb sebességét a további mozgás során.

**(b)** Ha $v_2<v_1$, milyen szögtartományban engedhetjük el a gyöngyöt úgy, hogy sebessége monoton nőjön?

**[3] 5. feladat** (PPP 42). Egy $m$ tömegű, $\ell$ hosszúságú homogén rudat két ujj tart vízszintesen a végeinél. Amint az ujjak lassan közelednek egymáshoz, a rúd felváltva csúszik az egyik, majd a másik ujjon. A súrlódási együtthatók $\mu_k<\mu_s$.

**(a)** Magyarázzuk meg, miért a rúd tömegközéppontja alatt találkozik a két ujj. (Próbáljuk ki a valóságban is!)

**(b)** Keressük meg az ujjak által végzett összes munkát ebben a folyamatban.

**[3] 6. feladat.** Egy $\lambda$ lineáris tömegsűrűségű hosszú kötél kis meghajlással egy vízszintes asztalon nyugszik.

A meghajláshoz közeli kötélvéget $F$ erővel húzzuk.

**(a)** Tegyük fel, hogy a meghajlás nagyon kicsi, ezért az asztallal érintkező kötél teljesen laza, vagyis feszítőereje nulla. Mekkora $F$ szükséges ahhoz, hogy a kötél végét állandó $v$ sebességgel húzzuk?

**(b)** Most tegyük fel, hogy a meghajlás sima, így a kötél elemei fokozatosan gyorsulnak fel, miközben áthaladnak rajta. Mekkora $F$ erő szükséges a kötél végét állandó $v$ sebességgel húzni?

**(c)** Mindkét esetben mekkora $F(t)$ erő szükséges a kötél állandó $a$ gyorsulással való húzásához, ha a kötél $t=0$-ban sík, nyugalmi állapotból indul?

**[2] 7. feladat.** INPhO 2012, 1. feladat.

**[3] 8. feladat.** INPhO 2018, 4. feladat.

**[4] 9. feladat.** USA Theory Team Selection Test 2022, 2. feladat. Jó gyakorló feladatok gyűjteménye.

## 3. Rezgések

**[3] 10. feladat** (NBPhO 2007). Tekintsünk egy könnyű rugalmas rudat rögzített $\ell$ hosszúsággal. Ha a rúd egyik végét szilárdan rögzítjük, és az erő a másik végére merőlegesen hat (az alkalmazás pontjánál), akkor kimutatható, hogy a rúd egy körív alakját veszi fel, amelynek görbületi sugara $R = k/F$, ahol $k$ konstans. (Korábban az olyan objektumokat a 3. feladatban vizsgáltuk.)

A rudat az alsó végénél függőlegesen rögzítjük, a felső végéhez pedig egy $m$ tömegű testet kapcsolunk. A rúd kezdetben egyenesen áll.

**(a)** Keressük meg a kis rezgések periódusát, feltételezve, hogy $mg\ell \ll k$.

**(b)** Mekkora a konfigurációhoz szükséges maximális tömeg $m$?

**[3] 11. feladat.** INPhO 2019, 7. feladat. Szép adatelemzési feladat; vigyünk grafikonpapírt.

**[5] 12. feladat.** APhO 2011, 2. feladat. Érdekes feladat a „stick-slip” jelenségről, amely számos valós helyzetben megjelenik; működés közben itt látható egy hegedűhúron [itt](https://www.youtube.com/watch?v=6F3wICJlArI). (Hasonló stick-slip elrendezések további számításaiért lásd az USAPhO 2021 A1 feladatát.)

## 4. Forgómozgás

**[2] 13. feladat.** NBPhO 2015, 3. feladat.

**[3] 14. feladat.** USAPhO 2021, B1 feladat. Elegáns forgómozgás feladat.

**[3] 15. feladat** (Morin 8.24). Egy $R$ sugarú gömb kezdetben csúszva, forgás nélkül mozog egy súrlódó, vízszintes felületen. Kezdeti sebessége $v_0$, a középpontja körüli tehetetlenségi nyomatéka pedig $I=\beta mR^2$.

**(a)** Tegyük fel, hogy a nyomóerő mindig a gömb alján függőlegesen felfelé, a súrlódási erő pedig ugyanott vízszintesen hat (arról azonban semmit sem tételezünk fel, hogyan változik a súrlódási erő). Határozzuk meg a gömb sebességét abban a pillanatban, amikor csúszás nélkül kezd gördülni. Határozzuk meg a csúszás során elvesztett mozgási energiát is.

**(b)** Tekintsük most azt az esetet, amikor a súrlódási erő szokásos, állandó kinetikus súrlódás, $f=-\mu_kN$. Igazoljuk, hogy a súrlódás munkája megegyezik az (a) részben számított energiaveszteséggel.

**(c)** A valóságban a fenti következtetéseket módosítja a „gördülési ellenállás”. Minden valós anyag kissé deformálódik, amikor a gömb gördül rajta. Ezt durván úgy vehetjük figyelembe, hogy a nyomóerő nem a gömb alján, hanem a talajhoz képest kissé előrébb hat. E nyomóerő vízszintes komponense legyen $f_r=-\mu_rN_y$, ahol $N_y$ a függőleges nyomóerő és $\mu_r\ll1$. Emellett a (b) rész szerinti kinetikus súrlódás is jelen van. Ezekből kiindulva határozzuk meg a gömb sebességét abban a pillanatban, amikor a csúszás megszűnik. Több vagy kevesebb energia vész el, mint a (b) részben?

**Megjegyzés.** Az 1800-as évek elején sokan úgy vélték, hogy egy mozdony nem vontathat a saját tömegénél nehezebb szerelvényt. Érvelésük szerint a vonatot előre hajtó erő a mozdony kerekei és a sínek közötti súrlódás. Ha a mozdony tömege $M$, a maximális súrlódási erő $\mu Mg$. Ha a vonat többi részének tömege $M'$, akkor a megindításához $\mu M'g$ erő kellene, így a vonat nem mozoghatna, ha $M'>M$.

A 15. feladat megmagyarázza, miért hibás ez az érvelés. A mozdony kerekei által kifejthető maximális előrehajtó súrlódási erőt a tapadási súrlódás $\mu_s$ együtthatója határozza meg, míg a szerelvény többi részének megindításához szükséges erőt a gördülési súrlódás $\mu_r$ együtthatója. Ezért csak $\mu_sM>\mu_rM'$ szükséges, ami lehetséges, mert $\mu_r$ nagyon kicsi lehet. Acél kerekek és acélsínek esetén $\mu_s\sim0{,}5$, míg $\mu_r\lesssim10^{-3}$ lehet.

Másrészt a korai vonatok nehezen közlekedtek emelkedőn. Ez több innovatív megoldáshoz vezetett, például légköri nyomással hajtott vagy mechanikus lábakkal tolt vonatokhoz. A ma ismert mechanikai rendszerek, amelyek kialakítása első pillantásra magától értetődőnek tűnik, valójában sok köztes forma fokozatos fejlődésével alakultak ki. A legtöbben például azt hiszik, hogy értik, hogyan működik a kerékpár, pedig a működése nagyon bonyolult. Nem véletlen, hogy a modern kerékpár kialakulásához több mint egy évszázadra volt szükség.

**[4] 16. feladat** (IPhO 1998). Egy $M$ tömegű, $R$ oldalhosszúságú, hatszögletű ceruza legurul egy $\theta$ hajlásszögű lejtőn. Bizonyos $\theta$ értékeknél a ceruza állandó végsebességgel gördül le úgy, hogy nem veszti el a kapcsolatot a lejtővel. A bonyolult tehetetlenségi nyomaték-számítás elkerülése érdekében tegyük fel, hogy keresztmetszete hat, egyenlő távolságra elhelyezett, tömegmentes küllőből álló, perem nélküli kerék; az összes tömeg a tengelyen van.

**(a)** A ceruza nem gyorsul a végtelenségig, hanem egyensúlyi állapotot ér el. Magyarázzuk meg, miért, és számítsuk ki a tengely sebességét közvetlenül az egyes ütközések után, egyensúlyi állapotban.

**(b)** Határozzuk meg azt a legkisebb $\theta$ szöget, amelynél a gördülés külső lökés nélkül spontán megindul.

**(c)** Határozzuk meg azt a legkisebb $\theta$ szöget, amelynél a gördülés megindítása után a ceruza már nem áll meg.

**(d)** Határozzuk meg azt a legnagyobb $\theta$ szöget, amelynél a gördülő ceruza végig érintkezésben marad a lejtővel.

**[4] 17. feladat.** USAPhO 2017, B1 feladat. Nehéz forgómozgás feladat.

**[3] 18. feladat.** USAPhO 2021, B3 feladat. Szép és tanulságos beállítás.

A következő két kérdés a háromdimenziós forgómozgásra vonatkozik, amelyet az M8-ban fejezünk be.

**[3] 19. feladat** (BAUPC). Egy súrlódásmentes rögzített kúp a csúcsán áll.

**(a)** Egy részecske a kúp belső felületén csúszik, $h$ magasságban a csúcs fölött, az ábra bal oldalán látható módon. Határozzuk meg a körmozgás szögfrekvenciáját.

**(b)** Most tegyük fel, hogy a kúp súrlódásos, és egy elhanyagolható sugarú gyűrű csúszásmentesen gördül a felületen, ugyanebben a magasságban. Tegyük fel azt is, hogy a gyűrű síkja mindig merőleges az érintkezési pontot a kúp csúcsával összekötő egyenesre, az ábra jobb oldalán látható módon. Határozzuk meg a körmozgás szögfrekvenciáját.

**(c)** Mennyire általánosak az (b) rész feltevései? Konkrétan: létrejöhetett volna-e a leírt mozgás, ha a gyűrű síkja más szöget zár be? Lehetséges-e a vízszinteshez képest kissé kisebb vagy nagyobb szög? Létrejöhetett volna-e a mozgás, ha a gyűrű pontosan vízszintes?

**[3] 20. feladat.** Richard Feynman egy alkalommal az alábbi történetet mesélte, amelyet szó szerint idézünk.

> Az étkezőben voltam, és egy fickó játékosan tányért dobott a levegőbe. Amint a tányér felemelkedett, láttam, hogy rezeg, és észrevettem rajta a Cornell vörös érméjét körkörösen mozogni. Egyértelműnek tűnt, hogy az érme gyorsabban kering, mint ahogy a tányér rezeg.
>
>
> Nem volt dolgom, így elkezdtem kidolgozni a forgó tányér mozgásegyenleteit. Felfedeztem, hogy kis szögeknél az érme kétszer olyan gyorsan kering, mint amilyen gyorsan a tányér rezeg — az arány kettő az egyhez. Ez egy nagyon bonyolult egyenletből adódott!
>
> Folytattam az egyenletek kidolgozását. Aztán azon kezdtem gondolkodni, hogyan mozognak az elektronpályák a relativitáselméletben. Ott van a Dirac-egyenlet az elektrodinamikában, majd a kvantumelektrodinamika. És mielőtt észbe kaptam volna… az egész munka, amelyért Nobel-díjat kaptam, ebből a tányérral való játékból nőtt ki.

Feynmannek igaza volt a kvantumelektrodinamikával kapcsolatban, de igaza volt-e a tányérral kapcsolatban is?

## 5. Gravitáció

**[3] 21. feladat** (Morin 5.65). Legyen a Föld sugara $R$, átlagos sűrűsége $\rho$, forgásának szögfrekvenciája pedig $\omega$. Tekintsünk egy hosszú, egyenletes lineáris tömegsűrűségű kötelet, amely a Föld felszínétől sugárirányban egészen az $\eta R$ sugarú pontig terjed. Mutassuk meg, hogy ha a kötélnek mindig a Föld egyenlítőjének ugyanazon pontja fölött kell maradnia, akkor

$$\eta^2 + \eta = \frac{8\pi G \rho}{3\omega^2}.$$

Mekkora numerikusan $\eta$, és hol éri el a kötél feszítőereje a maximumát? Ez egy „űrlift” lenne, amely lehetővé tenné tárgyak olcsó szállítását az űrbe. Jelenleg azonban nem tudunk ilyen nagy feszültséget elviselő anyagot készíteni.

**[2] 22. feladat** (Morin 10.7). Egy korong kis $v$ sebességgel csúszik a súrlódásmentes jégen. A felület „sík” abban az értelemben, hogy minden pontjában merőleges a $g_{\text{eff}}$ vektorra, amely a centrifugális gyorsulást is tartalmazza. Mutassuk meg, hogy a korong a Földdel együtt forgó rendszerben körpályán mozog. Határozzuk meg a kör sugarát, szögfrekvenciáját és mozgásirányát a Föld $\omega_0$ szögsebessége és a korong $\phi$ földrajzi szélessége függvényében.

**[2] 23. feladat.** Egy keskeny csövet $R$ sugarú gyűrűvé hajlítunk. Kezdetben a gyűrű vízszintes és nyugalomban van a laboratóriumi rendszerben. Ezután gyorsan $180^\circ$-kal elforgatjuk a kelet–nyugati átmérője körül.

**(a)** Tegyük fel, hogy a cső vizet tartalmaz, és a Föld forgástengelyének $\omega$ szögsebességű forgása a laboratóriumi rendszer függőlegesével $\phi$ szöget zár be. Mekkora a víz sebessége az elforgatás után?

**(b)** Tegyük fel, hogy a cső vezető, öninduktivitása $L$, a Föld mágneses tere pedig $B$, és ez utóbbi a laboratóriumi rendszer függőlegesével $\phi$ szöget zár be. Mekkora áram folyik a csőben az elforgatás után?

**[3] 24. feladat.** Tekintsünk egy $V(r) = -a/r^n$ alakú potenciált.

**(a)** Milyen $n$ esetén keringhet egy részecske az origón átmenő körpályán?

**(b)** Milyen $n$ esetén csavarodhat egy részecske befelé úgy, hogy $r(\theta)\propto e^{-c\theta}$ valamely $c$ értékre?

**[3] 25. feladat.** Ebben a feladatban Kepler első törvényének egy újabb ügyes levezetését vizsgáljuk. Szokás szerint tegyük fel, hogy a pálya az $xy$ síkban fekszik. A levezetés alapja az $r(t)=r(t)\hat r(\theta)$ felírás, ahol $\hat r=\cos\theta\,\hat x+\sin\theta\,\hat y$, majd egy $v(\theta)$-ra vonatkozó differenciálegyenlet megoldása.

**(a)** Mutassuk meg, hogy $dv/d\theta$ arányos $\hat r$-rel, ahol az arányossági tényező konstansok és megmaradó mennyiségek szorzata.

**(b)** Integráljuk ezt az eredményt $v(\theta)$ meghatározásához. Milyen szép geometriai tulajdonsággal rendelkezik?

**(c)** Helyettesítsük ezt az eredményt az $L=r\times p$ kifejezésbe, és mutassuk meg, hogy $r(\theta)$ kúpszeletet ír le.

## 6. Folyadékok

**[2] 26. feladat** (BAUPC). Két azonos alakú hengeres tartály, A és B, azonos mennyiségű vizet tartalmaz. B-ben a vízen kívül egy, az aljára fonállal rögzített, vízbe merülő léggömb is van. Tekintsük a következő érvelést.

> Az A tartály alja által kifejtett teljes felfelé mutató erő megegyezik az A-ban lévő víz súlyával, és ugyanez igaz B-re is. Mivel az alapterületek és a víz súlyai azonosak, az alján lévő nyomás is azonos.

Helyes vagy helytelen ez az érvelés? Magyarázzuk meg a választ.

**[4] 27. feladat.** IPhO 1997, 3. feladat. Egyszerű és szép kérdés arról, hogyan működik a repülőgép.

**Megjegyzés.** Az előző feladatban láttuk, hogy a repülőgép szárnya úgy működik, hogy megfelelően megdöntve lefelé téríti el a mellette áramló levegőt; a lendületmegmaradás ekkor felfelé mutató erőt jelent a szárnyon. Ez az erő konkrétan azért jön létre, mert a szárny alatt nagyobb a nyomás. A Bernoulli-elv szerint ez azt jelenti, hogy a szárny fölött nagyobb a légsebesség.

Ez a mérnökök körében általánosan ismert. Néhány elavult vagy rossz minőségű fizikatankönyvben azonban még mindig előfordul egy hibás magyarázat. Eszerint a szárny felső oldala görbe, ezért a fölötte haladó levegőnek gyorsabban kell mozognia, hogy „utolérje” az alatta haladó levegőt. A Bernoulli-elv szerint ezután nagyobb nyomás lesz a szárny alatt, ami felhajtóerőt okoz.

Az érvelés második lépése helyes, az első azonban értelmetlen: nincs ok arra, hogy a levegő utolérje azt a levegőt, amellyel korábban szomszédos volt. A repülőgépek például fejjel lefelé is repülhetnek, ha a szárny megfelelő szögben áll. Ilyenkor továbbra is a szárny fölött áramló levegő mozog gyorsabban, noha most a szárny alsó oldala görbült.

A repülésről még sok mindent lehetne mondani; ez önálló tudományterület. További szép levezetésekért lásd *A belátás művészete* 4.6. fejezetét, vagy [ezt a tanulmányt](https://arxiv.org/abs/1001.0621) és [ezt a tanulmányt](https://arxiv.org/abs/1001.0621) ugyanattól a szerzőtől. Egy makacs aerodinamikus szemszögéből lásd [ezt az előadást](https://www.youtube.com/watch?v=yCsgoLSxHEE).

**[5] 28. feladat.** Physics Cup 2023, 1. feladat.

**[3] 29. feladat.** [A] A Navier–Stokes-egyenletek egy $\rho$ sűrűségű, $\mu$ dinamikai viszkozitású, összenyomhatatlan folyadék $v(\mathbf{x},t)$ sebességmezejét írják le:

$$\frac{\partial \mathbf{v}}{\partial t} + (\mathbf{v} \cdot \nabla)\mathbf{v} = -\frac{1}{\rho}\nabla P + \frac{\mu}{\rho}\nabla^2\mathbf{v}.$$

Tekintsünk egy adott, rögzített $\rho$ és $\mu$ paraméterű folyadékot, és vizsgáljuk meg, hogyan viselkednek az egyenlet lehetséges megoldásai szimmetriatranszformációk alatt.

**(a)** Egy adott $\mathbf v(\mathbf x,t)$ sebességmezőhöz definiáljuk az időfordított mezőt: $\mathbf v'(\mathbf x,t)=-\mathbf v(\mathbf x,-t)$. Ha az egyenletben $\mathbf v$ helyére $\mathbf v'$-t írunk, a $\partial\mathbf v/\partial t$ tag változatlan marad, mert a sebesség és az időderivált előjele is megfordul. Mutassuk meg, hogy a másik három tag közül kettő változatlan, egy pedig előjelet vált, majd értelmezzük az eredményt.

**(b)** A fenti transzformációt sematikusan úgy írhatjuk, hogy $t\to-t$ és $\mathbf v\to-\mathbf v$. Ezután vizsgáljuk az egyidejű $\mathbf x\to\lambda\mathbf x$ és $t\to\lambda^2t$ skálázást. Határozzuk meg, hogyan skálázódik e transzformáció során $\mathbf v$, $P$, valamint az idő- és térderivált.

**(c)** Mutassuk meg, hogy ebben a skálázásban a Navier–Stokes-egyenlet minden tagja $\lambda^{-n}$ szerint skálázódik valamely egész $n$-re. Ez azt mutatja, hogy a Navier–Stokes-egyenlet skálaszimmetrikus: ha valami megtörténhet egy folyadékban, akkor megtörténhet egy olyan körülmény között is, amely kétszer nagyobb léptékű és négyszer lassabban zajlik.

Figyelemre méltó módon a (c) rész megmagyarázza, miért nincs sok további tag a Navier–Stokes-egyenletben. Elvileg több idő- vagy térderiváltat tartalmazó tagoknak is kellene lenniük, mivel a folyadék mikroszkopikus dinamikája nagyon bonyolult. Megoldás felskálázásakor azonban mindezek a tagok a $\lambda^{-n}$-nél nagyobb mértékben elnyomódnának, vagyis nem lennének jelentősek makroszkopikus skálán. A Navier–Stokes-egyenlet pontosan azokat a tagokat tartalmazza, amelyek skálázáskor relevánsak maradnak.
