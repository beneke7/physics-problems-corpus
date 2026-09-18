---
id: kevin-zhou-notes-phy-ex088
source: kevin-zhou-notes
native_id: "phy Example 088"
origin: "Kevin Zhou personal physics notes"
language: hu
translated: true
links_en: kevin-zhou-notes-phy-ex088
topic: [kvantumfizika]
subtopic: [variációs-módszer, atomfizika, sokrészecske-rendszerek]
math_tools: [variációs-módszer, perturbációelmélet, differenciálegyenletek]
format: explanation
kind: reference_example
has_solution: false
has_figure: true
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "12018-13166"
archive_layer: reference_notes
source_role: explanatory_example
---
Példa. Kvartikus potenciál. Kényelmes egységekben legyen

                                                       d2
                                              H=−         + x4 .
                                                      dx2
Az alapállapot energiája numerikusan E0 ≈ 1.06-nak adódik. Variációs becsléshez normált Gauss-függvényeket
próbálhatunk, mivel ezeknek nagyjából megfelelő az alakjuk és a szimmetriájuk:
                                                       α  1/4            2
                                       ψ(x, α) =                e−αx /2 .
                                                      π
Az energia várható értéke
                               r       Z
                                   α                                         2   α   3
                      E(α) =               dx (α − α2 x2 + x4 )e−αx =              + 2.
                                   π                                             2  4α
                                   √
A minimum α∗ = 3 3 helyen van, ekkor

                                               E(α∗ ) = 1.08

adódik, ami meglehetősen jó becslés. Az első gerjesztett állapot energiája E1 ≈ 3.80. Ezt páratlan
próbafüggvénnyel becsülhetjük, például
                                                            1/4
                                                     4α3

                                                                             2
                                   ψ(x, α) =                      xe−αx /2
                                                      π

amelyre a becslés E(α∗ ) = 3.85.

Megjegyzés. Kötött állapotok különböző dimenziókban. Kötött állapotok létezésének bizonyításához a
variációs elv szerint elegendő olyan állapotot felmutatni, amelyre ⟨H⟩ < 0.
   Egy dimenzióban minden, végtelenben lecsengő, összességében vonzó potenciálnak (azaz negatív átlagos
potenciálnak) van kötött állapota. Tekintsünk az origóban középre helyezett, λ szélességű Gauss-függvényt.
Nagy λ esetén a kinetikus energia 1/λ2, a potenciális energia pedig 1/λ szerint csökken, mivel ez a
lényeges potenciáltartományban lévő valószínűség hányada. Elég nagy λ-ra így az energia negatív.
   Ez az érv egynél több dimenzióban nem működik. A kijelentés valójában d = 2-ben továbbra is igaz,
amint azt az itt bemutatott kifinomultabb ansatz bizonyítja. d = 3-ban az állítás nem igaz; például egy
elég gyenge deltafüggvény-gödörnek nincs kötött állapota. Mellékesen: háromdimenziós centrális potenciálok
esetén, ha vannak kötött állapotok, az alapállapotnak s-hullámúnak kell lennie. Ugyanis bármely nem
s-hullámú kötött állapotból alacsonyabb ⟨H⟩-jú variációs hullámfüggvény kapható s-hullámúvá alakítással.

 Megjegyzés. Másodrendű, nem degenerált perturbációelméletben azt láttuk, hogy az energiaszintek általában
„taszítják” egymást, vagyis az alapállapot másodrendben lefelé tolódik. Ebből sejthetnénk, hogy az elsőrendű
eredmény mindig túlbecsüli az alapállapot energiáját. Ez pusztán perturbációelmélettel szigorúan nem
indokolható, de a variációs elvből szigorúan következik, mert az elsőrendű eredmény éppen a perturbálatlan
alapállapot |0⟩ energiavárható értéke.

10     Atomfizika
10.1    Azonos részecskék
Ebben a szakaszban végre több, egymással kölcsönható részecskéből álló kvantummechanikai rendszereket
vizsgálunk. Kezdésként az azonos részecskékre vonatkozó könyvelési szabályokat tárgyaljuk.

 • Először két azonos részecskét vizsgálunk vonzó centrális potenciálban,

                                           p21   p2
                                     H=        + 2 + V (|x2 − x1 |).
                                           2m 2m
     Ilyen rendszerek például a homonukleáris kétatomos molekulák, mint a H2, az N2 vagy a Cl2.
     Az alábbi állítások csak ezekre, nem pedig heteronukleáris molekulákra, például HCl-re vonatkoznak.

 • Felvethetnénk, hogy a kétatomos molekulák kettőnél több részecskét tartalmaznak; a H2 például két
   elektront és két protont. Itt valójában a Born–Oppenheimer-közelítést használjuk. A magok helyzetét
   követjük, és feltesszük, hogy az elektronokhoz képest lassan mozognak. Az elektronok csak a potenciált
   módosítják, vonzást létrehozva.

 • Ha az elektronállapot 1 Σ a kétatomos molekulák szokásos jelölésével, akkor az elektronok spinje és
   pályamenti szögimpulzusa elhanyagolható. A legtöbb kétatomos molekula alapállapota valóban 1 Σ, az O2
   azonban kivétel, alapállapota 3 Σ.

 • Az E12 cseréoperátor felcseréli a két részecske identitását. Ha mindkét részecske |α⟩ bázissal írható le,
   akkor

                                             E12 |αβ⟩ = |βα⟩.

     Hely- és spin-koordinátákkal rendelkező részecskékre például

                                     E12 |x1 x2 m1 m2 ⟩ = |x2 x1 m2 m1 ⟩.

 • A cseréoperátor unitér és négyzete az identitás, ezért Hermitikus. Továbbá
                                       †
                                      E12 HE12 = H,        [E12 , H] = 0

     ami azt jelenti, hogy a Hamilton-operátor cserére szimmetrikus.

 • Nem azonos részecskékre nincs ésszerű mód cseréoperátort definiálni; minden, amit mondani fogunk,
   csak azonos részecskékre értelmes.

 • A paritáshoz hasonlóan a Hilbert-tér a csere alatt páros és páratlan alterekre esik szét, amelyek nem
   keverednek időfejlődés során. A paritástól eltérően azonban kiderül, hogy fizikai rendszerekben csak
   az egyik altér létezik. Fél-egész spinű részecskéknél csak a páratlan altér figyelhető meg; egész spinű
   részecskéknél csak a páros altér.

 • Ez a szimmetrizálási posztulátum. Nemrelativisztikus kvantummechanikában ez egyszerűen kísérleti
   eredmény, amint alább látni fogjuk. Relativisztikus kvantumtérelméletben a spin–statisztika-tétel egyszerű
   fizikai feltevésekből következik.

 • A térelmélet másodkvantált formalizmusában egyáltalán nincs szükség szimmetrizálásra vagy antiszimmetrizálásra;
   a Fock-tér már csak a fizikai állapotokat tartalmazza. A szimmetrizálási posztulátum az elsőkvantált
   jelölés használatának következménye, ahol a részecskéknek nem fizikai címkéket adunk, amelyeket később
   el kell távolítanunk.

 • Ez azt is jelenti, hogy kerülnünk kell a „nem fizikai” operátorokat, amelyek nem invariánsak cserére.
   Például az x1 operátornak nincs fizikai jelentése, ahogy az S1 spinnek sem, bár S1 + S2-nek van.

Most néhány molekulapéldával szemléltetjük mindezt.

 • Először a 12 C2 homonukleáris kétatomos molekulát tekintjük, amelyben mindkét atommag spinje 0.
   Nem alkot gázt, mert kémiailag reakcióképes, de elkerüli a spinnel járó bonyodalmat.

 • Szokás szerint áttérhetünk a tömegközépponti és relatív koordinátákra:
                                          x1 + x2
                                     R=           ,   r = x2 − x1
                                             2
    amivel a Hamilton-operátor
                                             P2   p2
                                        H=      +    + V (r)
                                             2M   2µ
    alakú lesz, ahol M = 2m és µ = m/2 a redukált tömeg.

 • A két koordináta teljesen szétcsatolt, ezért az energiasajátállapotok Ψ(R, r) = Φ(R)ψ(r) alakúak
   választhatók. A tömegközépponti szabadságfoknak nincs potenciálja, ezért Φ(R) síkhullámnak választható:
                                       Φ(R) = exp(iP · R).
    A relatív rész ψ(r) egy centrális erőtérbeli probléma megoldása, ezért

                                       ψnℓm (r) = fnℓ (r)Yℓm (Ω).

    Az energia
                                                P2
                                           E=      + Enℓ .
                                                2M

 • Sok molekula kis energiájú szintjei közelítőleg

                                        ℓ(ℓ + 1)ℏ2

                                                           1
                                 Enℓ =             + n+        ℏω
                                            2I             2

    alakúak, ahol az első tag a forgási szintek merev rotorral végzett közelítéséből, a második a rezgési
    szintek harmonikus oszcillátorral végzett közelítéséből származik, I és ω pedig a molekulától függ.

 • A cseréoperátor megfordítja r előjelét, ami az állapotot (−1)ℓ tényezővel szorozza. Ez a paritáshoz
   hasonló, azzal a döntő különbséggel, hogy ezt a kiválasztási szabályt soha nem látjuk sérülni.
   A spektroszkópia szerint a 12 C2 összes páratlan ℓ-ű állapota hiányzik, amit termodinamikai mérések is
   megerősítenek.

 • Továbbá a szintek nem hiányoznak, ha az atommagok különböző izotópok, jóllehet az azonos részecskék
   fogalma nélkül a magok tömegének különbsége túl kicsi volna ahhoz, hogy bármit befolyásoljon. Az ilyen
   eredmények képezik a szimmetrizálási posztulátum kísérleti alapját.

 • Ezután a H2 hidrogénmolekulát vizsgáljuk, amelynek atommagjai, a protonok, 1/2 spinűek. Naivan a
   magspinek kölcsönhatása elhanyagolhatóan kis hatással volna az energiaszintekre. A spinek azonban a
   szimmetrizálási posztulátum miatt drámai hatással vannak.

 • A hullámfüggvényt a fentiekhez hasonlóan szétválaszthatjuk, most bevezetve a |m1 m2 ⟩ spin-szabadságfokokat.
   A teljes spin a 0 ⊕ 1 reprezentációban van; a szingulett 0 a spinek cseréje alatt páratlan, a triplett 1
   pedig páros.

 • A protonok fermionok, ezért a teljes hullámfüggvénynek cserére páratlannak kell lennie. Ha a magspinek
   szingulettállapotban vannak, akkor ℓ páros, ezt a rendszert parahidrogénnek nevezzük. Ha a magspinek
   triplettállapotban vannak, akkor ℓ páratlan, és a rendszer ortohidrogén. Általánosságban a „para” a
   szimmetrikus térbeli hullámfüggvényre utal.

 • Ezek a különbségek drámaian befolyásolják a H2 gáz termodinamikai tulajdonságait. Mivel minden ortohidrogén-
   állapot háromszorosan degenerált, magas hőmérsékleten (amikor sok ℓ-érték betöltődhet) a H2 gáz 25%-a
   parahidrogén és 75%-a ortohidrogén. Alacsony hőmérsékleten a H2 gáz 100%-ban parahidrogén.

 • A H2 rotációs spektrumának alacsony hőmérsékleten végzett mérései döntő szerepet játszottak a spin
   felfedezésében az 1920-as évek végén. Mivel azonban a magspinek egyensúlyba kerülése napokig tarthat,
   kezdetben kísérleti zavar támadt, mert a kísérletezők lehűtött H2-mintákat használtak, amelyek valójában
   75%-ban ortohidrogént tartalmaztak.

 • Vegyük észre, hogy a hullámfüggvényt spin- és térbeli rész szorzatának választottuk. Ez csak azért
   érvényes, mert elhanyagoltuk a spin-kölcsönhatásokat; formálisabban azért, mert a Hamilton-operátor
   kommutál mind a spinállapotok, mind önmagában a pályaállapotok cseréjével.

Megjegyzés. A szingulett cserére antiszimmetrikus, a triplett pedig szimmetrikus volta egy általános szabály
speciális esete. Tegyük fel, hogy két azonos j spin összege j ⊕ j. A 2j spinű irrep szimmetrikus, mert
felső komponense |m1 m2 ⟩ = |jj⟩, és L− alkalmazása megőrzi a szimmetriát.
   Vizsgáljuk most a teljes Sz = 2j − 1 altérét, amelyet a |j − 1, j⟩ és |j, j − 1⟩ feszít ki. Ebben
van egy szimmetrikus és egy antiszimmetrikus állapot; a szimmetrikus a 2j spinű irp része, ezért az
antiszimmetrikusnak a 2j − 1 spinű irp részének kell lennie, amely így teljesen antiszimmetrikus. A
következő altérben két szimmetrikus és egy antiszimmetrikus állapot van, ezért a 2j − 2 spinű irp szimmetrikus.
Ezt a logikát folytatva azt kapjuk, hogy az irrepek szimmetriája váltakozik.

Megjegyzés. Az ekvilibrációs idő gyors becslése SI-egységekben. A hidrogénmolekulák szórási
keresztmetszete σ ∼ a20, ezért standard hőmérsékleten és nyomáson az ütközési frekvencia

                                        f ∼ va20 n ∼ 108 Hz.

Az ütközés során a magok nem kerülnek körülbelül a0 távolságnál közelebb. A proton által tapasztalt
mágneses tér ezért
                                               µ0 qv
                                         B ∼ 2 ∼ 0.1 T.
                                                a0

Az ütközés τ ∼ a0 /v ideig tart. Az ebből származó klasszikus spinprecesszió

                                              µN B a0
                                       ∆θ ∼           ∼ 10−7
                                               ℏ v
és kvantumszinten ez azt jelenti, hogy az ellentétes spin-komponens ∆θ nagyságrendű amplitúdót vesz fel.
A spin f frekvenciával és ∆θ lépésnagysággal véletlen bolyongást végez, ezért jellemző idő alatt fordul át:
                                             1 1
                                      T ∼            ∼ 106 s
                                            f (∆θ)2
ami napok nagyságrendje.

10.2    Hélium
Most a héliumot és a héliumszerű atomokat vizsgáljuk.

 • Egy Z rendszámú atommagot és két elektront tartalmazó rendszereket tekintünk. Ide tartozik a Z = 2
   esetű hélium, de az olyan ionok is, mint a Li+ és a H−. Az alább megmutatandó egyik nemtriviális tény,
   hogy a H−-ionnak van kötött állapota.

 • Atomi egységekben dolgozunk, és az atommagot az origóba helyezzük. Az alap-Hamilton-operátor

                                           p21 p22   Z   Z   1
                                     H=       +    −   −   +
                                           2    2    r1 r2 r12

    ahol r12 = |x2 −x1 |. Ez elhanyagolja a finomszerkezetet, a Lamb- és a hiperfinom szerkezetet (a
    közönséges héliumnak nincs hiperfinom szerkezete, mivel az α-részecske spinje zérus). A finomszerkezet
    most további tagokat is tartalmaz, amelyek az egyes elektronok spinjének a másik elektron spinjével vagy
    pályamenti szögimpulzusával való kölcsönhatásának felelnek meg. Az elektronok közötti kölcsönhatásoknak
    a késleltetési hatásokat is figyelembe kell venniük.

 • Egy másik elhanyagolt hatás a „tömegpolarizáció”, amely abból ered, hogy az atommag visszalökődik,
   amikor az elektronok mozognak. Ha ehelyett a tömegközéppontot tesszük az origóba, és hagyjuk az
   atommagot mozogni, akkor kinetikus energiája P 2 /2M tagot ad, ahol P = −p1 − p2.

 • A p21 és p22-tel arányos tagok egyszerűen azt eredményezik, hogy az elektron tömegét az elektron–proton
   redukált tömege váltja fel, mint hidrogénben. Van azonban egy (p1 · p2 )/2M kereszttag is, amely az
   elektronok közötti új effektív kölcsönhatás. Ezt itt elhanyagoljuk, mert m/M egy hatványával elnyomott.

 • A fenti közelítések mellett a Hamilton-operátor egyáltalán nem függ az elektronok spinjétől; ezért az
   energiasajátállapotok választhatók úgy, hogy a pálya- és a spinállapotok önálló cseréje alatti szimmetriájuk
   is határozott legyen, amint azt H2 esetén láttuk.

 • Így a H2-höz hasonló érveléssel parahéliumot kapunk (szingulett spin, pályacsere alatt páros) és
   ortohéliumot (triplett spin, pályacsere alatt páratlan). A parahélium és az ortohélium annyira eltérően
   viselkedik, és olyan lassan alakulnak át egymásba, hogy egykor külön anyagfajtáknak gondolták őket.

 • A H2-höz képest az a fő különbség, hogy a térbeli hullámfüggvényt sokkal nehezebb megtalálni, mivel
   ez nem centrális erőtérbeli probléma: az elektronok mind az atommaggal, mind egymással kölcsönhatnak.
   Különösen, mivel az atommag felvehet impulzust, az elektron hullámfüggvényét nem választhatjuk szét
   relatív és tömegközépponti részre. Közvetlenül mind a hat változó, ψ(x1 , x2 ) függvényeként kell kezelni.

 • Definiáljuk a teljes pályamenti és spin szögimpulzust:

                                      L = L1 + L2 ,    S = S1 + S2 .

   Ekkor az energiasajátállapotokat az L2, Lz, S 2 és Sz egyidejű diagonalizálásával indexelhetjük:

                                H|N LML SMS ⟩ = EN LS |N LML SMS ⟩.

   Az EN LS szokásos spektroszkópiai jelölése N 2S+1 L, ahol L = S, P, D, F, . . .. Itt S = 0
   parahéliumra és S = 1 ortohéliumra, ez határozza meg a pályaállapot csere alatti szimmetriáját, és így
   befolyásolja az energiát.

 • Valójában látni fogjuk, hogy S nagyon erősen, magával a Coulomb-energiával azonos nagyságrendben
   befolyásolja az energiát. Ennek oka, hogy a pályamenti hullámfüggvény csere alatti szimmetriája erősen
   meghatározza, hogyan oszlanak el az elektronok a térben. Megfordítva ez azt jelenti, hogy a spinek között
   nagy effektív „cserekölcsönhatás” van, amely a szingulett vagy a triplett spinállapotot részesíti előnyben;
   ez más helyzetekben a ferromágnesességért felelős.

Most néhány kísérleti adatot vizsgálunk.

 • Egy atom ionizációs potenciálja az az energia, amely egy alapállapotban lévő elektron atomról a végtelenbe
   távolításához szükséges. Definiálható második ionizációs potenciál is, a második elektron eltávolításához
   szükséges energia, és így tovább. Ezek a mennyiségek hasznosak, mert közvetlenül mérhetők.

 • Héliumra az ionizációs potenciálok atomi egységekben 0.904 és 2. (Összehasonlításként hidrogénszerű
   atomokra Z 2 /2, tehát hidrogénre 1/2.) A héliumé a semleges atomok közül a legnagyobb első ionizációs
   potenciál.

 • Az első ionizációs potenciál szerint a kontinuumállapotok az alapállapot fölött 0.904 energiánál kezdődnek,
   így kötött állapotok csak e tartományban létezhetnek; az első ionizációs potenciál fölötti feltételezett
   kötött állapotok keverednének a kontinuumállapotokkal, és delokalizálódnának.

 • H−-re az ionizációs potenciálok 0.028 és 0.5. Az első kicsi relatív nagysága azt az intuíciót kelti,
   hogy H− csak egy hidrogénatomhoz gyengén kötött elektron. Csak egyetlen kötött állapot van, az 11 S.

 • A parahélium és az ortohélium kötött állapotai az alábbiakban láthatók.


    Ezeket az értékeket egyszerűsített Hamilton-operátorunk numerikus megoldásával kaptuk, és nem tartalmazzák
    a finomszerkezetet vagy más hatásokat. Elvben L értéke nullától végtelenig terjedhet, minden L-hez pedig
    N értékei végtelenig futhatnak. Minden N kezdőértékét konvenció rögzíti, így a hasonló N-ű energiaszintek
    egy vonalba esnek; ezért nincs 13 S állapot. Közelebbről látható, hogy rögzített N mellett az energia
    nő L-lel („lépcsőhatás”), és az energiaszintek ortohéliumra alacsonyabbak.

Most perturbatívan vizsgáljuk a spektrumot.

 • A pályamenti részre összpontosítunk, és a perturbációt 1/r12-nek választjuk. Ez azt jelenti, hogy a
   perturbációs paraméter 1/Z, ami héliumra nem túl jó, H−-re pedig különösen rossz. Az eredmények azonban
   nagyjából helyesek lesznek, a javított elemzés pedig lényegesen nehezebb.

 • A két elektron mindegyike nℓm-mel jelölt hidrogénszerű állapotot, úgynevezett pályát foglal el. A
   perturbálatlan Hamilton-operátor kétrészecske-sajátfüggvényei ezért

                                                                                Z2 1

                                         (0)                          (0)              1
              H0 |n1 ℓ1 m1 n2 ℓ2 m2 ⟩ = En1 n2 |n1 ℓ1 m1 n2 ℓ2 m2 ⟩, En1 n2 = −      +
                                                                                2 n21 n22

    ha az azonos részecske hatását elhanyagoljuk. Vegyük észre, hogy kisbetűkkel az egyes elektronokra,
    nagybetűkkel az atom egészére utalunk.

 • Az azonos részecskék hatásának figyelembevételéhez egyszerűen szimmetrizáljuk vagy antiszimmetrizáljuk
   a pályákat:
                              1
                             √ (|n1 ℓ1 m1 n2 ℓ2 m2 ⟩ ± |n2 ℓ2 m2 n1 ℓ1 m1 ⟩) .
                               2
    Ez nem befolyásolja az energiaszinteket, kivéve, hogy a |nℓmnℓm⟩ alakú állapotok antiszimmetrizálása
    zérust ad, ezért ortohéliumban nem jelennek meg.

 • Az energiaszintek alacsonyabbak a valódiaknál, mert az elektronok taszítják egymást. Azt is megjegyezzük,
   hogy a „kettősen gerjesztett” állapotok, amelyekre n1, n2 ̸= 1, a kontinuumban vannak. A perturbáció
   bekapcsolásakor keverednek a kontinuumállapotokkal, így többé nem kötött állapotok.

 • A kettősen gerjesztett állapotok azonban rezonanciaként értelmezhetők. A rezonancia olyan állapot, amely
   közelítőleg energiasajátállapot, de amplitúdója idővel „elszivárog” a kontinuumállapotokba. Például amikor
   alapállapotú He-t fotonokkal bombázunk, az elnyelésben rezonanciáknak megfelelő energiákon csúcs jelenik meg.

 • Félklasszikus gondolkodással némi intuíciót nyerhetünk. Elképzeljük, hogy egy foton mindkét elektront
   magasabb pályára gerjeszti. Ezután energetikailag lehetséges, hogy az egyik elektron eltalálja a másikat,
   és közben kilökje, miközben az n = 1 állapotba esik. A kvantumszámoktól függően ez sokáig tarthat. Ezért
   a rezonanciánál elnyelési csúcs jelenik meg, mert rövid időskálán az állapot éppen úgy viselkedik, mint
   egy kötött állapot.

 • Hasonló klasszikus helyzet fordul elő a Naprendszerben. A Jupiter energetikailag képes volna az összes
   többi bolygót kilökni, annak árán, hogy kissé közelebb kerül a Naphoz. A káoszelmélet megfontolásai szerint
   ez elég hosszú idő alatt szinte bizonyosan megtörténik. Ez az idő azonban elég hosszú ahhoz, hogy ezt a
   folyamatot figyelmen kívül hagyjuk, és a Naprendszert kötött objektumnak tekintsük.

 • További példa az Auger-spektroszkópia: egy nagy sebességű elektronnal való ütközéssel eltávolítunk egy
   belső elektront az atomból. Amikor egy külső héjelektron a megüresedett állapotba esik, foton bocsátható ki.
   Másik lehetőség, hogy egy másik külső elektron egyidejűleg kilökődik; ez az Auger-folyamat.

 • Most a valódi kötött állapotokra összpontosítunk, amelyek legfeljebb egyszeresen gerjesztettek. Ezeket
   egyetlen n szám jellemzi,
                                                Z2

                                        (0)               1
                                      E1n = −        1+ 2
                                                 2       n
    és felírhatók
                                          1
                               |N LM ±⟩ = √ (|100nℓm⟩ ± |nℓm100⟩)
                                           2
    alakban, ahol N = n, L = ℓ és M = m. Látjuk, hogy ortohéliumra nincs N = 1 állapot.

 • A perturbálatlan energiaszintek meglehetősen messze vannak a valódiaktól. Héliumra a perturbálatlan
   alapállapot energiája −4, míg a valódi eredmény körülbelül −2.9. H−-re −1-et kapunk, míg a valódi
   érték körülbelül −0.53.

Most kiszámítjuk a perturbáció hatását.

 • Az alapállapot energiaeltolódása

                                                                    |ψ100 (x1 )|2 |ψ100 (x2 )|2
                                                   Z
                    ∆E = ⟨100100|H1 |100100⟩ =          dx1 dx2
                                                                               r12
    és megegyezik két 1s-elektron elektrosztatikus taszításából származó várható energiával.

 • Az alapállapot hidrogénszerű pályája
                                                             1/2
                                                       Z3

                                      ψ100 (x) =                   e−Zr .
                                                       π

    Az 1/r12 tényező kifejthető:

                                                             X rℓ       ∞
                                           1        1           <
                                              =            =      P (cos γ)
                                                               ℓ+1 ℓ
                                          r12   |x1 − x2 |    r>        ℓ=0

    ahol r< r1 és r2 közül a kisebb, r> a nagyobb, γ pedig az x1 és x2 közötti szög. A Legendre-polinomot
    a gömbharmonikusok addíciós tételével fejtjük ki:
                                                              4π X              ∗
                                      Pℓ (cos γ) =                   Yℓm (Ω1 )Yℓm (Ω2 ).
                                                            2ℓ + 1 m

 • Mindent behelyettesítve és gömbi koordinátákban dolgozva
                                                                                  ∞
          Z6                                                                        rℓ
                 Z              Z         Z             Z
                                                                  −2Z(r1 +r2 )
                                                                                  X
                                                                                        <    4π  X
                                                                                                                 ∗
      ∆E = 2          r12 dr1       dΩ1       r22 dr2       dΩ2 e                      ℓ+1 2ℓ + 1
          π                                                                          r
                                                                                  ℓ=0 >           m
                                                                                        Yℓm (Ω1 )Yℓm (Ω2 ).

   Ennek előnye, hogy a szögintegrálok a gömbharmonikusok ortonormalitásával elvégezhetők. Mivel
                        Z               √ Z                  ∗
                                                                    √
                           dΩ Yℓm (Ω) = 4π dΩ Yℓm (Ω)Y00       (Ω) = 4π δℓ0 δm0 ,
   csak a radiális integrálok maradnak:
                                                Z ∞               Z ∞
                                                                                  e−2Z(r1 +r2 )  5
                                ∆E = 16Z 6              r12 dr1         r22 dr2                 = Z
                                                  0                 0                 r>         8
   némi fáradságos algebra után. Ez egy Z tényezővel kisebb a perturbálatlan −Z 2 eredménynél, így a
   sor valóban Z szerint rendeződik.

 • A H− és He alapállapot-energiáinak negatívjai tehát

                     zeroth order : 1, 4,          first order : 0.375, 2.75,          exact : 0.528, 2.904

   ami jelentős javulás, bár az elsőrendű korrekció túlbecsül. Ahogy korábban említettük, az elsőrendű
   eredmény a variációs elv miatt mindig túlbecsüli az alapállapot energiáját, ezért felső korlátot ad.
   Alsó korlátot nehezebb adni, de legalább a nulladrendű eredmény egy ilyen korlátként szolgál, mivel
   elhagy egy taszító kölcsönhatást.

 • A H− kötött állapotának megmutatásához azt kell belátni, hogy az alapállapot energiája a −0.5
   kontinuumküszöb alatt van. Sajnos a −0.375-ös eredmény ehhez nem elég erős.

Most kiszámítjuk a gerjesztett állapotok elsőrendű energiaeltolódását.

  • Amint korábban mondtuk, csak az egyszeresen gerjesztett állapotokat, vagyis a fenti, N > 1 esetén
    definiált |N LM ±⟩ állapotokat kell vizsgálnunk. Az energiaeltolódás

                                              ∆EN L± = ⟨N LM ±|H1 |N LM ±⟩

    ahol M-től nincs függés, mert H1 skalároperátor.

 • A |N LM ±⟩ definícióját kifejtve négy tagot kapunk:
                 1
      ∆EN L± =     ⟨100 nℓm|H1 |100 nℓm⟩ + ⟨nℓm 100|H1 |nℓm 100⟩
                 2
                                         ± (⟨100 nℓm|H1 |nℓm 100⟩ + |nℓm 100⟩H1 |100 nℓm⟩) .
    Az első két tag egyenlő, ahogy az utolsó kettő is, ezért
                                                     1                                  1
       ∆EN L± = Jnℓ ± Knℓ ,     Jnℓ = ⟨100 nℓm|         |100 nℓm⟩,   Knℓ = ⟨100 nℓm|       |nℓm 100⟩.
                                                    r12                                r12
    A két megfelelő integrált direkt-, illetve csereintegrálnak nevezzük.

 • A direkt integrálnak egyszerű értelmezése van: a két elektronfelhő kölcsönös elektrosztatikus energiája,
                                               |ψ100 (x1 )|2 |ψnℓm (x2 )|2
                                      Z
                                 Jnℓ = dx1 dx2                             .
                                                       |x1 − x2 |
   Nyilvánvalóan valós és pozitív.

 • A csereintegrál
                                Z              ∗ (x )ψ ∗
                                              ψ100 1 nℓm (x2 )ψnℓm (x1 )ψ100 (x2 )
                         Knℓ =       dx1 dx2                                        .
                                                         |x1 − x2 |
   Valós, mert az integrálási változók felcserélése komplex konjugálja, de változatlanul is hagyja. Némi
   munkával megmutatható, hogy a csereintegrálok pozitívak; ez intuitív, mivel a nevező x1 ≈ x2 esetén
   zérushoz tart, és ilyen tartományokban a számláló pozitív (azaz fázisa kicsi).

 • Knℓ pozitivitása azt jelenti, hogy az ortoállapotok energiája alacsonyabb a paraállapotokénál. Intuitívan
   azért, mert az ortohullámfüggvények eltűnnek x1 = x2 esetén, míg a parahullámfüggvényeknek x1 = x2-nél
   maximumaik vagy csomópontjaik vannak. Ezért az ortoállapotokban kisebb az elektrosztatikus taszítás.

 • Egy másik fontos kvalitatív tulajdonság, hogy a Jnℓ direktintegrálok ℓ növekedésével nőnek, ami a korábban
   említett „lépcsőhatáshoz” vezet. Az alkáliatomokhoz hasonlóan ennek intuitív oka, hogy az egyik elektron
   szögimpulzusának növelésével messzebbre kerülhet az atommagtól, és a magtöltést a másik elektron(ok)
   hatékonyabban árnyékolják.

Ezzel a spektrum összes kvalitatív tulajdonságát megmagyaráztuk, bár a perturbációelmélet mennyiségileg
nem teljesít túl jól. A variációs elvvel kissé jobb eredményt kaphatunk.

 • Emlékezzünk, hogy a perturbálatlan alapállapot két 1s-elektronból áll, jelölése 1s2, hullámfüggvénye
                                                     Z 3 −Z(r1 +r2 )
                                      Ψ1s2 (x1 , x2 ) = e            .
                                                      π
    Tudjuk azonban, hogy mindegyik elektron részben leárnyékolja a magot a másik elől, ezért az elektronok
    egy Ze effektív magtöltést látnak Z − 1 és Z között. Ez motiválja a próbafüggvényt:
                                                   Z3
                                      Ψ(x1 , x2 ) = e e−Ze (r1 +r2 )
                                                    π
    ahol Ze variációs paraméter.

 • H várható értékének kiszámításához így írjuk fel:
                          2           2
                          p1 Ze         p 2 Ze                  1   1      1
                   H=        −      +      −       + (Ze − Z)     +     +     .
                          2    r1        2    r2                r1 r2     r12
   Ennek előnye, hogy az első két tag egyaránt nyilvánvalóan −Ze2 /2.

 • A harmadik tag
                                                   Ze3 e−Ze r
                                          Z
                              2(Ze − Z)       dx              = 2(Ze − Z)Ze
                                                   π r
   alakú. Az utolsó tag az imént kiszámított, csak Z helyett Ze-t tartalmazó tag, ezért (5/8)Ze.

 • A tagokat összeadva a variációs energia
                                                           5
                                      E(Ze ) = Ze2 − 2ZZe + Ze
                                                           8
   amelyet
                                                       5
                                              Ze = Z −
                                                      16
   esetén minimalizálunk. Vagyis mindkét elektron a magtöltés 5/16 részét árnyékolja le a másik elől.

 • Az alapállapot variációs becslése tehát
                                                        (
                                           5      25       −0.473 H−
                             E var = −Z 2 + Z −       =
                                           8      256      −2.848 He.
   Ez közelebb van az elsőrendű perturbációelmélet eredményénél. Mivel azonban a H−-re kapott becslés még
   mindig nem kisebb −0.5-nél, nem elegendő a kötött állapot létezésének bizonyítására. Ehhez kifinomultabb
   ansatz szükséges; a miénk nagyon durva volt, még azt sem vette figyelembe, hogy az elektronok előnyösen
   az atommag két ellentétes oldalán helyezkednek el.

10.3   Thomas–Fermi-modell
Ebben a szakaszban a több elektront tartalmazó atomok durva modelljét, a Thomas–Fermi-modellt vezetjük be.

 • A modell ötlete az, hogy az atommagot körülvevő elektronfelhőt zérus hőmérsékletű, töltött, degenerált
   Fermi–Dirac-folyadékként ábrázoljuk, amely a degenerációs nyomás és az elektrosztatikus erők között
   hidrosztatikai egyensúlyban van.

 • A statisztikus mechanikából szükséges eredmények szerint egy V térfogatú derékszögű dobozban lévő,
   n részecskesűrűségű, zérus hőmérsékletű elektronokra a Fermi-hullámszám

                                              kF = (3π 2 n)1/3

    és a teljes energia
                                         ℏ2 V kF5   ℏ2 (3π 2 N )5/3 −2/3
                                  E=              =                V     .
                                         10mπ 2         10mπ 2
    adódik. A levezetés közvetlen, ha nem felejtjük el az elektronspin miatt bevezetendő 2-es tényezőt.

 • Szokás szerint a nyomás az energia deriváltja:

                                           dE     ℏ2
                                    P =−      =        (3π 2 n)5/3 .
                                           dV   15mπ 2
   Vegyük észre, hogy P csak konstansoktól és n-től függ. A Thomas–Fermi-modell kulcsa, hogy n térben
   változhat, és az elektronokat P (n(x)) nyomású folyadékként kezeljük. Ez természetesen csak a
   termodinamikai határértékben pontos.

 • Ha Φ az elektrosztatikus potenciál, akkor hidrosztatikai egyensúlyban

                                             ∇P = en∇Φ

   ahol e > 0. Továbbá Φ kielégíti a Poisson-egyenletet:

                                  ∇2 Φ = −4πρ = 4πne − 4πZeδ(x)

   Gauss-egységekben, ahol az atommag töltéssűrűségét explicit módon beírtuk. Ezt a tagot alább elhagyjuk,
   és az r = 0-beli határfeltételekbe építjük be.

 • P, n és Φ csak r-től függ. Ekkor

                                              ℏ2
                                      ∇P =       (3π 2 )2/3 n2/3 ∇n
                                              3m
   és ezt a hidrosztatikai egyensúly egyenletébe helyettesítve

                                     ℏ2
                                        (3π 2 )2/3 n−1/3 ∇n = e∇Φ.
   Integrálva mindkét oldalt

                                   ℏ2
                                      (3π 2 n)2/3 = e(Φ − Φ0 ) ≡ eΨ.
                                   2m

 • Az egyenlet intuíciójához átírhatjuk:

                                          p2F
                                              − eΦ = −eΦ0 .
                                          2m
   A bal oldal az elektron helyi Fermi-tengerének tetején lévő energiája, ezért ez az eredmény azt mondja,
   hogy állandó, a gáz kémiai potenciálja. Ez érthető, hiszen egyensúlyban az elektronoknak nem lehet
   energetikai preferenciájuk egyik hely iránt sem a másikkal szemben.

 • Tudjuk, hogy a potenciálnak
                                                (
                                                 Ze/r    r → 0,
                                       Φ(r) ∼
                                                 0       r → ∞.
   alakúnak kell lennie. Intuitívan világos, hogy kifelé haladva a potenciális energia monoton nő, a
   kinetikus energia pedig csökken.

 • A potenciál viselkedése az elektronok N számától függ.

     – Ha N > Z, negatív iont kapunk. Ilyen atomok nem írhatók le a Thomas–Fermi-modellel, mert ∇P mindig
       kifelé mutat, egy bizonyos sugáron túl pedig az elektrosztatikus erő is kifelé kezd mutatni, így a
       hidrosztatikai egyensúlyi egyenletet lehetetlen kielégíteni. Ebben a modellben a többlet negatív töltés
       egyszerűen lehullik.
     – Ha N = Z, semleges atomunk van. Ekkor Φ gyorsabban cseng le, mint 1/r. Ezt a Φ0 = 0 eset írja le.
     – Ha N < Z, pozitív iont kapunk, így Φ(r) mint (Z − N )e/r cseng le. Ezt a Φ0 > 0 eset írja le.
       Egy r0 sugárnál a kinetikus energia, és így n is, zérusra csökken. A negatív értékeknek nincs
       jelentésük, ezért minden r > r0-re a sűrűség egyszerűen zérus.
     – A Φ0 < 0 esetnek is van fizikai jelentése; külső nyomás alatt álló semleges atomnak felel meg.

Most explicit módon megoldjuk a modellt.

 • A Ψ változóval

                                  ℏ2
                                     (3π 2 n)2/3 = eΨ,     ∇2 Ψ = 4πne.
                                  2m
   n kiküszöbölésével oldjuk meg Ψ-re. Mivel azonban azt is tudjuk, hogy kis r esetén Ψ ∼ Ze/r, hasznos
   bevezetni a dimenziótlan változót:
                                                 rΨ(r)
                                       f (r) =         ,   f (0) = 1.
                                                  Ze

 • Némi algebra után a Thomas–Fermi-egyenlet

                               d2 f   f 3/2                     (3π)2/3 a0
                                    =       ,    r = bx,   b=
                               dx2    x1/2                        27/3 Z 1/3
   adódik, ahol x dimenziótlan radiális változó.

 • Mivel f (0) már rögzített, az egyenlet megoldásait f ′ (0) paraméterezi. Néhány numerikus megoldás az
   alábbiakban látható.



    Az f ′ (0) = −1.588 eset semleges atomnak felel meg. A sűrűség csak aszimptotikusan közelít a zérushoz.
    Ez univerzális függvény, amely ebben a modellben minden semleges atomra azonos, skálázástól eltekintve.

 • Ha a kezdeti meredekség negatívabbá válik, a sűrűség véges sugárnál éri el a zérust; ez meghatározott
   sugarú pozitív ionnak felel meg.

 • Ha a kezdeti meredekség kevésbé negatív, a sűrűség soha nem esik zérusra. Ehelyett kézzel levághatjuk
   egy sugárnál, és kijelenthetjük, hogy ezen kívül a sűrűség zérus; fizikailag ez külső nyomás alkalmazását
   jelenti. Ez csak semleges atomok modellezésére hasznos (a semlegesség meghatározza a levágási sugarat),
   mert töltött ionokból nem lehet tömbi mintát felhalmozni.

 • A Thomas–Fermi-modellnek nyilvánvaló korlátai vannak. Például az elektronokat folytonos folyadékként
   kezelve elveszítjük a héjszerkezetet. Általában a modell csak a közepes sugaraknál ésszerű az elektronsűrűség
   leírására; az atommag közelében és tőle távol egyaránt felbomlik.

 • Átlagos tulajdonságok, például a töltéssűrűség átlagos kötési energiája kiszámítható vele, ezért kísérleti
   fizikában is hasznos, például az anyagon áthaladó részecskék lefékeződésének számítására.

10.4   Hartree–Fock-módszer
A Hartree–Fock-módszer variációs módszer atomok, molekulák, szilárd anyagok és még atommagok sokrészecske-
problémáinak közelítő megoldására. Az egyszerűbb Hartree-módszerrel kezdjük.

 • Tekintsünk N elektront és Z töltésű atommagot tartalmazó atomot, az alap-Hamilton-operátorral:
                                    N   2
                                    X  p   i   Z            X 1
                               H=            −          +               ≡ H1 + H2 .
                                           2   ri                 rij
                                    i=1                     i<j
    Ez elhanyagolja a véges magtömeget, a finom- és hiperfinom szerkezetet, a késleltetést, a sugárzási
    korrekciókat és így tovább. A finomszerkezet különösen nehéz atomoknál fontosabb, mivel (Zα)2 szerint
    skálázódik; ezekben az esetekben jobb a Dirac-egyenletből kiindulni. Vegyük észre azt is, hogy az
    elektron spinje nem játszik szerepet a Hamilton-operátorban.

 • A Hamilton-operátor kommutál a teljes L pályamenti szögimpulzussal és az egyes Si spinoperátorokkal.
   Kommutál továbbá a π paritással és minden Eij cseréoperátorral.

 • Ez az első, kettőnél több azonos részecskét tartalmazó helyzetünk, ezért megjegyezzük, hogy a cserék
   minden permutációt generálnak. Minden P ∈ SN permutációhoz unitér U (P ) permutációs operátor tartozik,
   amely kommutál a Hamilton-operátorral; ezt ezután egyszerűen P-vel jelöljük. P előjelét (−1)P jelöli.

 • Általában a szimmetrizálási posztulátum szerint a megengedett állapotokra
                                          (
                                            |Ψ⟩         bozonok,
                                  P |Ψ⟩ =        P
                                            (−1) |Ψ⟩ fermionok.
    Minden fizikailag értelmes operátornak kommutálnia kell az U (P )-vel. Ha olyan formális Hilbert-térből
    indulunk, amely nem tartalmazza a szimmetrizálási posztulátumot, akkor a fermionikus altérre a
                                                1 X
                                         A=         (−1)P P.
                                               N!
                                                        P
    projekcióval vetíthetünk. Az ilyen projektorokat a csoportelméletről szóló jegyzetekben részletesebben
    vizsgáljuk.

Most leírjuk Hartree próbafüggvényét.

 • Hartree alap-ansatzában egyszerűen figyelmen kívül hagyjuk a szimmetrizálási posztulátumot. A próbafüggvény
   alakja
                                     |ΦH ⟩ = |1⟩(1) . . . |N ⟩(N )
   ahol az egyes tényezők egyetlen elektron állapotát leíró egyrészecske-pályák. A jelölés kissé kétértelmű:
   a zárójeles latin indexek az elektronokat, a ketekben szereplő görög indexek a pályákat jelölik.

 • A pályákról feltesszük, hogy normáltak, és térbeli, valamint spinrész szorzatai:

                                                 |λ⟩ = |uλ ⟩|msλ ⟩

   ahol |msλ ⟩ az Sz msλ = ±1/2 sajátértékű sajátállapota. Ez nem jelent általánosságvesztést, mivel a
   Hamilton-operátor nem függ a spintől.

 • A variációs paraméterek elvben a pályák teljes térbeli hullámfüggvényei, uλ (r). H1 várható értéke
   közvetlenül kiszámítható:
                                                N
                                                X                                    p2i   Z
                            ⟨ΦH |H1 |ΦH ⟩ =          ⟨λ|(i) hi |λ⟩(i) ,    hi =          −
                                                                                     2     ri
                                                λ=i=1
   ahol a többi bra és ket a normálás miatt kiesik. Explicit alakban
                                                  Z             2
                                     X                         p      Z
                     ⟨ΦH |H1 |ΦH ⟩ =     Iλ , Iλ = dr u∗λ (r)      −       uλ (r).
                                                                2     r
                                           λ

 • H2 várható értéke párok összege:
                                           X                   1
                         ⟨ΦH |H2 |ΦH ⟩ =         ⟨λ|(i) ⟨µ|(j) |λ⟩(i) |µ⟩(j) .
                                                              rij
                                                λ=i<µ=j
   Expliciten ez direktintegrálok összege:
                                                        Z
                                  X                                                       1
                ⟨ΦH |H2 |ΦH ⟩ =         Jλµ ,   Jλµ =       dri drj u∗λ (ri )u∗µ (rj )       uλ (ri )uµ (rj ).
                                                                                         rij
                                  λ<µ
   Csereintegrálok nem jelentek meg, mert nem antiszimmetrizáltunk. A λ = µ önkölcsönhatási tagot
   elhagyjuk, mivel az eredeti Hamilton-operátorban az i = j tagot is elhagytuk. Ezt klasszikusan a
   ponttöltések végtelen önenergiájának elkerülése miatt hagytuk el, bár ebben a kvantummechanikai esetben
   Jλλ nem feltétlenül divergál.

 • A direktintegrálok szimmetriáját használva az energiális funkcionál
                                                     X       1X
                           E[ΦH ] = ⟨ΦH |H|ΦH ⟩ =       Iλ +       Jλµ .
                                                             2
                                                                  λ           λ̸=µ
   Ezt azonban nem minimalizálhatjuk közvetlenül; szokás szerint Lagrange-szorzóval kell kikényszerítenünk
   a normálást, ezért ehelyett
                                                     X
                                 F [ΦH ] = E[ΦH ] −      ϵλ (⟨λ|λ⟩ − 1)
                                                              λ
   minimalizáljuk.

 • A funkcionális derivált δF/δuλ (r) eltűnéséből a Hartree-egyenletek

                                                                              |uµ (r)|2
                2                                                     XZ
                p     Z
                   −      uλ (r) + Vλ (r)uλ (r) = ϵλ uλ (r), Vλ (r) =     dr′            .
                    2    r                                                        |r − r′ |

   adódnak. Ezek egyszerű értelmezése: minden elektron ϵλ energiájú Schrodinger-egyenletet elégít ki,
   és a többi töltés átlagos tere által létrehozott potenciált érzi; az egyenletek így középtér-elméletet
   alkotnak.

 • Ez N csatolt, nemlineáris, integrál-differenciálegyenletből álló rendszer. Önszabályozó térnek is
   nevezik, mivel a tér meghatározza a pályákat, és viszont.

 • A Hartree-egyenleteket a gyakorlatban iterációval oldjuk meg. Kezdetben például kiszámíthatjuk a
   Thomas–Fermi-potenciált, majd a pályák első becsléseként e potenciál sajátfüggvényeit választhatjuk.
   Ezután kiszámítjuk az új potenciálokat, megoldjuk a kapott Schrodinger-egyenletet, és így tovább,
   konvergenciáig.

 • A számításigényes rész a háromdimenziós Schrodinger-egyenletek megoldása. Hartree azt javasolta,
   hogy a potenciált tovább helyettesítsük centrális potenciállal:
                                                   Z
                                                 1
                                      V̂λ (r) =      dΩ Vλ (r).
                                                4π
    Ekkor a Schrodinger-egyenlet radiális egyenletre redukálódik, amelyet sokkal könnyebb megoldani.
    Ez ésszerű lépés, ha az atom összességében közel gömbszimmetrikus.

 • Mivel a Hartree-pályák különböző Schrodinger-egyenletek sajátfüggvényei, nem kell ortogonálisnak lenniük.

 • Csábító ϵλ-t „az egyes elektronok energiájának” tekinteni, de ez félrevezető, mert minden elektron
   Hartree-egyenlete minden más elektronnal való kölcsönhatást számba vesz. Ha egyszerűen összeadnánk az
   összes ϵλ-t, nem kapnánk meg a teljes energiát, mert a kölcsönhatást kétszer számolnánk.

 • Pontosabban, ha a Hartree-egyenletet u∗λ (r)-rel megszorozzuk és integráljuk,
                                               X
                                          Iλ +    Jλµ = ϵλ
                                                 µ̸=λ
   adódik, összegezve pedig
                                                 X          1X
                                      E[ΦH ] =       ϵλ −      Jλµ .
                                                            2
                                                 λ           λ̸=µ

Ezután Fock Hartree-féle hullámfüggvényhez adott finomítását vizsgáljuk.

 • Fock próbafüggvénye Hartree teljesen antiszimmetrizált változata:

                                                |1⟩(1) |2⟩(1) . . . |N ⟩(1)
                            √              1    |1⟩(2) |2⟩(2) . . . |N ⟩(2)
                       |Φ⟩ = N ! A|ΦH ⟩ = √       ..      ..   ..       ..    .
                                            N!     .       .       .     .
                                               |1⟩(N ) |2⟩(N ) . . . |N ⟩(N )

   A hullámfüggvény felírásának ezt a második módját Slater-determinánsnak nevezzük; kifejtése a szokásos
   determinánshoz hasonló, csak a skaláris szorzást tenzorszorzás váltja fel. A gondolat többi része ugyanaz:
   egyszerűen variációsan minimalizáljuk az energiát.

 • A Slater-determináns zérus, ha az N pálya lineárisan függő. Ha lineárisan függetlenek, akkor az
   egyrészecske-Hilbert-tér N dimenziós alterét feszítik ki, és egy skaláris tényezőtől eltekintve a Slater-
   determináns csak ettől az altértől függ. Ezért Hartree hullámfüggvényétől eltérően a pályákat mindig
   ortonormáltnak választhatjuk, általánosságvesztés nélkül; ekkor |Φ⟩ automatikusan normált.

 • A nyelvhasználatra figyelni kell. Gyakran úgy beszélünk, hogy egy részecske egy |λ⟩ egyrészecske-
   állapotban van (például a Pauli-kizárási elv „két részecske nem lehet ugyanabban az állapotban” állítása).
   Az antiszimmetrizálás miatt valójában azt értjük ezen, hogy a közös állapot egy |λ⟩-t tartalmazó altér
   fölötti Slater-determináns.

 • A Slater-determinánsok nagyon hasznosak, de nem a legáltalánosabb érvényes állapotok. Két ilyen állapot
   szuperpozíciója például általában nem Slater-determináns. Ezért a Hartree–Fock-próbafüggvény általában
   nem adja meg a pontos eredményt. Ilyen esetekben egyetlen részecskéről sem helyes azt mondani, hogy
   „egy” állapotban van. Még az is, hogy „az elektronok betöltik az 1s és 2s pályákat”, implicit módon
   Slater-determinánst feltételez, és általában nem érvényes, de a Hartree–Fock-elméleten való túllépés
   nagy nehézsége miatt mégis használjuk ezt a nyelvet.

 • Az energiális funkcionál kiértékeléséhez vegyük észre, hogy A kommutál H-val, mivel utóbbi fizikai
   operátor, ezért
                                                                        X
   ⟨Φ|H|Φ⟩ = N !⟨ΦH |A† HA|ΦH ⟩ = N !⟨ΦH |HA2 |ΦH ⟩ = N !⟨ΦH |HA|ΦH ⟩ =  (−1)P ⟨ΦH |HP |ΦH ⟩.
                                                                                          P
   Ugyanez az érvelés külön-külön H1-re és H2-re is érvényes.

 • Vizsgáljuk H1 = i hi várható értékét. Minden hi várható értéke ortogonalitás miatt eltűnik, hacsak
                                              P
   P nem rögzít minden j ̸= i indexet. Ez azt jelenti, hogy csak az identikus permutáció járul hozzá.
   A permutációk szerinti összegzés tehát nem változtat semmin, és az eredmény ugyanaz, mint Hartree-elméletben.

 • Ezután H2 = i<j 1/rij várható értékét tekintsük. Ugyanezen okból az 1/rij tag csak olyan permutációk
                                              P
   esetén nem zérus, amelyek i-n és j-n kívül mindent rögzítenek; ezek csak az identikus permutáció és
   az Eij csere.

 • Az utóbbi csereintegrált ad, ezért

                                                                              u∗λ (r)u∗µ (r′ )uλ (r′ )uµ (r)
                        X                                         Z
          ⟨Φ|H2 |Φ⟩ =         Jλµ − Kλµ ,   Kλµ = δ(msλ , msµ )       drdr′
                                                                                         |r − r′ |
                        λ<µ

   ahogy héliumnál láttuk. A direktintegrálokkal ellentétben a csereintegrálok függnek a spintől.
   Héliumhoz hasonlóan megmutatható, hogy a csereintegrálok pozitívak. Mivel negatív előjellel járulnak
   hozzá, csökkentik az energiális funkcionált, megerősítve, hogy a Hartree–Fock-elmélet jobb becslést ad
   az alapállapot energiájára, mint a Hartree-elmélet.

 • Ismét a héliumhoz hasonlóan ez a csökkentés csak azonos irányú spineknél hat, mivel ez a térbeli
   hullámfüggvény antiszimmetriájának felel meg. Ez Hund első szabályához vezet: az elektronok igyekeznek
   spinjeiket rendezni. A félig betöltött elektronhéjak különösen stabilak, mivel minden elektron azonos
   irányú, ami például a nitrogén nagy ionizációs energiáját eredményezi. Ez azt is megmagyarázza, miért
   3d5 4s a króm konfigurációja a aufbau-elv által jósolt 3d4 4s2 helyett.

 • A Hartree–Fock-elmélet további előnye, hogy az önenergia, ha belevesszük, végül kiesik, mert
   Jλλ = Kλλ. Ezért felvehetjük:
                                                         1X
                                        ⟨Φ|H2 |Φ⟩ =         Jλµ − Kλµ .
                                                         2
                                                            λµ

   Amint látni fogjuk, az önenergia bevétele a végső egyenleteket is szebbé teszi.

Végül minimalizáljuk a Hartree–Fock-energiát.

 • A minimalizálandó funkcionál
                               X      1X               X
                       F [Φ] =   Iλ +   (Jλµ − Kλµ ) −   ϵλ (⟨λ|λ⟩ − 1).
                                      2
                                    λ             λµ                      λ
   Vegyük észre, hogy Lagrange-szorzókkal csak a normálást kényszerítjük ki; alább látni fogjuk, hogy az
   ortogonalitást automatikusan megkapjuk.

 • A funkcionális derivált elvégzésével a Hartree–Fock-egyenletek
                   2                                Z
                   p     Z
                      −      uλ (r) + Vd (r)uλ (r) − dr′ Vex (r, r′ )uλ (r′ ) = ϵλ uλ (r)
                    2    r
   adódnak, ahol a direkt- és cserepotenciálok
                        XZ       |uµ (r′ )|2                   X                uµ (r)u∗µ (r′ )
               Vd (r) =      dr′             , Vex (r, r ′ ) =   δ(m sλ , msµ )                 .
                        µ
                                  |r − r′ |                    µ
                                                                                  |r − r′ |

   Mivel az önenergia-járulékokat is bevettük, minden elektron ugyanazt a direktpotenciált érzi.

 • A cserepotenciál értelmezése kissé nehezebb, mert nemlokális operátor. Vegyük észre azonban, hogy csak
   két különböző cserepotenciál van, mivel ms csak két értéket vehet fel:

                                   ±
                                                  X                    uµ (r)u∗µ (r′ )
                                 Vex (r, r′ ) =        δ(msµ , ±1/2)                   .
                                                  µ
                                                                         |r − r′ |

                                                          +, illetve V − cserepotenciált érzik.
    Így minden spin-up és spin-down pálya rendre a Vex      ex

 • A Hartree–Fock-egyenletek így két csatolt, Schrodinger-szerű egyenletként foghatók fel, egyet-egyet
   mindkét spinre. A megoldások automatikusan ortogonálisak, mert a különböző spinű pályák ortogonálisak,
   az azonos spinűek pedig ugyanazon Hamilton-operátor sajátfüggvényei. Ez szemlélteti, hogy a Hartree–
   Fock-elmélet elegánsabb a Hartree-elméletnél.

 • A Hartree–Fock-elmélet fő hátránya a nemlokális potenciál numerikus kezelése; sok okos eljárás létezik
   ennek egyszerűsítésére.

 • A Hartree–Fock-egyenletet uλ (r)∗-gal megszorozva és integrálva
                                        X
                                   Iλ +     (Jλµ − Kλµ ) = ϵλ .
                                                     µ
   adódik. Mint korábban, az ϵλ energiák kétszer számolják a kölcsönhatást:
                                   X             1X
                                       ϵλ = E +       (Jλµ − Kλµ ).
                                                 2
                                          λ                    λµ

 • Másrészt, ha eltávolítjuk a legnagyobb hozzá tartozó ϵλ-jú elektront, amelyet ϵN-nek választunk, akkor
   a megmaradó elektronok energiája
                                              N −1             N −1
                                      ′
                                              X            1   X
                                    E =              Iλ′ +              ′
                                                                      (Jλµ    − Kλµ ).
                                                           2
                                              λ=1              λ,µ=1
   alakban írható. Ha feltesszük, hogy az önkonzisztens terek nem változtak jelentősen, vagyis I ′ = I,
   J ′ = J és K ′ = K, akkor az ionizációs potenciálra

                                                     E − E ′ = ϵN

   adódik. Ez Koopman tétele.

 • A számítások egyszerűsítéséhez a Hartree-elmélethez hasonlóan átlagolhatjuk a potenciálokat a szögekre.
   A nemlokális potenciál esetén ezt kissé nehezebb explicit módon felírni, de annak felel meg, hogy
   Vex± (r, r′ ) helyett az U (R)V ± U (R)† megfelelő súlyozott átlagát vesszük R ∈ SO(3)-ra,
                                                                                ex
   ahol U (R) a teret, de nem a spint forgatja. Az így kapott átlagolt potenciál két vektor rotációs
   invariánsaitól, nevezetesen |r|2-től, |r′ |2-től és r · r′-től függhet.

 • További közelítésként spinátlagot vehetünk, és a két Vex± cserepotenciált az átlagukkal helyettesíthetjük.
   Ekkor a problémát közönséges centrális erőtérbeli problémára redukáltuk, igaz, önkonzisztens potenciállal,
   és a pályákat |nℓmℓ ms ⟩-sel jelölhetjük. Ezt értik például azon, amikor azt mondják, hogy a nátrium
   alapállapota 1s2 2s2 2p6 3s. Ez a közelítés azonban eltünteti például a vegyértékelektronok spinrendezési
   hajlamát, amelyet kézzel kell visszaadni.

10.5   Atomszerkezet
Most a Hartree–Fock-elméletet atomszerkezetre alkalmazzuk, végig szögátlagolást feltételezve.

 • A Hartree–Fock-módszer variációs ansatzot ad az alap-Hamilton-operátor alapállapotára:
                                       X   p2 Z   X 1
                                               i
                                  H=             −      +          .
                                              2    ri          rij
                                                 i                       i<j
    A Slater-determinánsban szereplő állapotok a Schrodinger-szerű
                                                                       p2 Z
                           huλ (r) = ϵλ uλ (r),          h(r, p) =       − + V d − V ex
                                                                       2  r
    egyenlet megoldásai. Numerikusan egy Hartree–Fock-megoldást teljesen meghatároz az Rnℓ (r) és ϵnℓ,
    mivel ezekből a potenciálok kikövetkeztethetők.

 • A Hartree–Fock-elmélet pontos alapállapotot ad a Hamilton-operátor úgynevezett centrális térközelítésére:
                        X
                                         H0 =     h(ri , pi ).
                                                      i
   Ezt a perturbálatlan Hamilton-operátornak, a hibát pedig perturbációnak tekinthetjük:
                                              X 1      X
                        H = H0 + H1 , H1 =           −     V d,i − V ex,i .
                                                 rij
                                                      i<j            i
   A H1 tagot maradék Coulomb-potenciálnak nevezzük. A Hartree–Fock-elmélet előnye, hogy H1 sokkal kisebb
   lehet, mint pusztán az i<j 1/rij összeg.
                                                  P

 • A perturbálatlan H0 Hamilton-operátor erősen szimmetrikus; például kommutál az elektronok egyedi
   Li és Si operátoraival. (Itt és alább H0 potenciáljait rögzítettnek tekintjük; mindig megegyeznek a
   Hartree–Fock-alapállapotban kapott értékekkel.) Ezért a hasznos kvantumszámok a legfontosabb perturbációktól
   függenek.

 • Ha H1 a domináns perturbáció, akkor visszakapjuk az alap-Hamilton-operátort, amelyre L és S jó
   kvantumszámok; a nagybetűk szokás szerint az atom egészének tulajdonságait jelölik. Ezt LS- vagy
   Russell–Saunders-csatolásnak nevezzük.

 • A finomszerkezet további perturbációt ad:
                                                X
                                           H2 ∼     Li · Si
                                                          i
   amely ehelyett az úgynevezett jj-csatolást részesíti előnyben. A finomszerkezet nehezebb atomoknál
   fontosabb, ezért az egyszerűség kedvéért csak könnyebb atomokat és így csak LS-csatolást vizsgálunk.

 • Most H0 degenerációit tekintjük. Az energia csak a betöltött állapotok nℓ értékétől függ. Általában egy
   állapot teljesen betöltött pályák halmazával, valamint részben betöltött pályák listájával adható meg,
   a pályákon betöltött állapotok (mℓ, ms) értékeivel együtt. Ezt az adatot m-halmaznak vagy elektronkonfigurációnak
   nevezzük.

 • A legkönnyebb atomok alapállapotában legfeljebb egy pálya részben betöltött. Ha ezen n elektron van,
   akkor a degeneráció

                                             2(2ℓ + 1)
                                                        .
                                                 n
   Több részben betöltött pálya esetén ilyen tényezők szorzatát kapnánk.

 • A H-val kommutáló releváns operátorok L2, Lz, S 2, Sz és π. Ezért LS-csatolásban az állapotokat
   |γLSML MS ⟩ alakban írhatjuk, ahol γ a degenerált multiplettek indexe; ezek Z = 23-nál kezdenek
   megjelenni. Az energia csak L és S értékétől függ.

 • A Slater-determinánsok ezen operátorok némelyikének sajátállapotai:
                                                                                           Y
           Lz |m-set⟩ = ML |m-set⟩,    Sz |m-set⟩ = MS |m-set⟩,               π|m-set⟩ =    (−1)ℓi |m-set⟩
                                                                                            i
   ahol                                     X                       X
                                      ML =        mℓi ,       MS =           msi .
                                              i                          i

    Az összegek minden elektronra kiterjednek, de csak a be nem töltött pályákra kell kiterjeszteni őket,
    mivel a betöltött pályák nem járulnak hozzá.

 • A Slater-determinánsok azonban nem L2- és S 2-sajátállapotok. A |m-set⟩ és |LSML MS ⟩ bázisokat
   összekapcsoló együtthatók kiszámítása kissé bonyolult, ezért részleteibe nem megyünk bele. (Ez több,
   mint Clebsch–Gordan-együtthatók használata, mert az m-halmazban kettőnél több elektron lehet, és a
   pálya- és spin-szögimpulzust, valamint az antiszimmetrizálást is nyomon kell követnünk.) Ehelyett
   egyszerűen meghatározzuk, hogy egy adott elektronkonfigurációban milyen L és S értékek jelennek meg.
   A paritás itt nem játszik szerepet, mivel adott elektronkonfiguráció minden állapotának azonos a paritása.

 • Héliumhoz hasonlóan ezeket a multipletteket 2S+1 L jelöléssel látjuk el. A spin–pálya-csatolás a
   multipletteket J sajátértékük szerint hasítja fel, ezért figyelembevételekor 2S+1 LJ-t írunk. A
   világosság kedvéért azt is feltüntethetjük, melyik elektronkonfigurációból származik egy adott multiplet:
   2S+1 L... .

 • Végül, ha a spin–pálya-csatolást is figyelembe vesszük, a Zeeman-effektust is kezelhetjük, feltéve,
   hogy gyengébb még a spin–pálya-csatolásnál is. Ekkor az eljárás pontosan olyan, mint egy finomszerkezetű
   hidrogénatomnál, és a projekciós tétel alkalmazása után Lande-féle g-faktorok jelennek meg.

Most néhány példát adunk, az egyszerűség kedvéért H0 alapállapotaira összpontosítva.
