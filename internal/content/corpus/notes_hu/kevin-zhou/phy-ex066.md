---
id: kevin-zhou-notes-phy-ex066
source: kevin-zhou-notes
native_id: "phy Example 066"
origin: "Kevin Zhou personal physics notes"
language: hu
translated: true
links_en: kevin-zhou-notes-phy-ex066
topic: [kvantumfizika]
subtopic: [végtelen négyzetes potenciálgödör, adiabatikus tétel, Berry-fázis]
math_tools: [differenciálegyenletek, kalkulus, kisparaméter-közelítés]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "7239-7419"
archive_layer: reference_notes
source_role: explanatory_example
---

Példa. Tekintsük a végtelen négyzetes potenciálgödör stacionárius állapotait:
                                          (
                                            0 a ≤ x ≤ b,
                                  V (x) =
                                            ∞ egyébként.

A határokon ψ ′ szakadhat, bár a Schrödinger-egyenlet biztosítja, hogy ψ folytonos. Tegyük fel most,
hogy egy állapot energiájának szórását akarjuk kiszámítani. Ehhez az ⟨ψ|H 2 |ψ⟩ ∝ ⟨ψ|p4 |ψ⟩
mennyiséget kellene kiszámítani. Mivel azonban ψ ′ a határokon szakadhat, ψ ′′ delta-függvényeket
tartalmazhat a határokon, ezért ez a várható érték delta-függvények négyzeteit tartalmazhatja, és így
végtelen!
     A probléma javítására több lehetőség van. Először is megjegyezhetjük, hogy a deriválás ismétlése
csúnyábbá teszi a függvényeket, ezért H 2 helyes definíciójának nem kellene négyszeri deriválást
tartalmaznia. Mivel H maga tökéletesen jól viselkedik, használjuk a spektrális felbontást: H 2 saját-
vektorait egyszerűen H sajátvektoraival azonosnak definiáljuk, a sajátértékeket pedig négyzetre emelve,
és nem foglalkozunk H 2 „közvetlen” kiértékelésével. (Formálisabban: sok ismerős állapotot, például
az energiasajátállapotokat egyszerűen H 2 definíciós tartományán kívülinek nyilvánítunk.) Alternatíva-
ként regularizálhatjuk a problémát a gödör véges mélységűvé tételével. Ekkor ψ ′ mindig folytonos,
bár a gödrön kívül van egy kis exponenciális lecsengése, és ⟨ψ|H 2 |ψ⟩ tökéletesen értelmes. A várt
eredményeket akkor kapjuk vissza, amikor a gödör mélységét végtelenhez tartjuk. A fizikusok ilyen
regulátora rendkívül megbízható, mivel összhangban van azzal, ahogyan a természet ténylegesen működik,
de a gyakorlatban használni meglehetősen körülményes.

   Íme egy másik kérdés, amely a matematikusokat zavarni szokta, a fizikusokat azonban nem. A
matematikában gyakran „intrinzikus” nézőpontot szeretnénk felvenni. Jó lenne a problémát a [a, b]
intervallumon felállítani az egész valós egyenes használata nélkül. Ezen az intervallumon a potenciál
pontosan zérus. Az impulzusoperátor definiálása azonban finommá válik. A probléma lényege, hogy az
impulzusoperátornak eltolásokat kell létrehoznia, de véges intervallumon nincs nyilvánvaló eltolási
fogalom: ha az x = a pontból balra tolunk, hová jutunk?
   A problémát formálisabban a következőképpen fogalmazhatjuk meg. Az impulzusoperátor Hermitikussá-
gának ellenőrzéséhez meg kell mutatnunk, hogy

                                      (ψ, −iℏDϕ) = (−iℏDψ, ϕ)

ahol D a deriválásoperátor. Egyszerű számolással ez akkor teljesül, ha

                                        ψ ∗ (b)ϕ(b) = ψ ∗ (a)ϕ(a).

Ezért p és p† definíciós tartományát korlátoznunk kell, vagyis feltételeket kell szabnunk a megengedett
ϕ(x)-re, illetve ψ(x)-re. Nyilvánvaló lehetőség ϕ(a) = ϕ(b) = 0 megkövetelése, amit az eredeti
fizikai beállítás motivál, de ekkor ψ(x)-re egyáltalán nem marad feltétel, így p† definíciós tartománya
nagyobb lesz, mint p-é. Azt mondjuk, hogy p önadjungált, ha Hermitikus, és definíciós tartománya
megegyezik p† definíciós tartományával; e választás mellett p nem önadjungált. Ez számos kóros
következményhez vezet. Például a spektráltétel nem működik, mivel p-nek nincsenek valós sajátértékű
sajátfüggvényei.
   A probléma megoldásához p önadjungált kiterjesztését kell definiálnunk. Ez azt jelenti, hogy p
definíciós tartományát bővítjük, és ezzel p† definíciós tartományát addig szűkítjük, amíg a kettő meg
nem egyezik. A p-t önadjungálttá tevő legáltalánosabb választás

                                   ϕ(b) = eiθ ϕ(a),   ψ(b) = eiθ ψ(a).

A θ = 0 választás a jól ismert periodikus peremfeltételeknek felel meg. Fogalmilag most az történik,
hogy az x = a pontban végrehajtott eltolás úgy van definiálva, hogy egy fáziseltolással az x = b
pontba teleportál. Matematikailag minden rendben van, és p-nek most a várt módon teljes sajátfüggvény-
rendszere van. (Ez nem mindig lehetséges; ha a [0, ∞) intervallumon dolgoznánk, az impulzusoperátornak
nincs önadjungált kiterjesztése, mivel a nullából nincs hová „teleportálni”.)
    Természetesen egy valóságos véges négyzetes potenciálgödör esetén mindez csak irreleváns formális
játék, mert az intrinzikus nézőpont nem működik: egy valódi eltolás egyszerűen kivisz a gödörből. Más-
részt vannak mennyiségek, amelyek valóban csak véges intervallumokon értelmesek, például a [0, 2π]
intervallumon periodikus peremfeltételekkel definiált szögek. További alkalmazásként ugyanezt az
elemzést elvégezhetjük az 1/r2 potenciálra. Ebben az esetben az r ∈ [0, ∞) intervallum bizonyosan
értelmes, mivel r nem lehet negatív. Kiderül, hogy ekkor a Hamilton-operátornak önadjungált
kiterjesztései folytonos sokasága van, amelyek úgy értelmezhetők, mint a részecske r = 0-hoz érkezésekor
történő fizikai viselkedés. Az önadjungált kiterjesztés választása meghatározza az alapállapot energiáját,
akárcsak a regularizálás megválasztása.

5.3   Az adiabatikus tétel
Most áttekintjük az adiabatikus tételt, amely a Hamilton-operátor lassú megváltoztatásának eredményét
írja le.

  • Legyen H(xa , λi ) egy Hamilton-operátor, λi vezérlési paraméterekkel. Ha az energiák soha nem
    metszik egymást, akkor a sajátállapotokat λ függvényeként |n(λ)⟩-ként indexelhetjük. Ha a
    vezérlési paraméterek tere kontraktibilis, akkor a |n(λ)⟩ állapotok simának választhatók, bár látni
    fogjuk, hogy vannak esetek, amikor ez nem lehetséges.


 • Az adiabatikus tétel szerint, ha a λi paramétereket elég lassan változtatjuk, akkor egy kezdetben
   |n(λ(ti ))⟩ állapot a |n(λ(tf ))⟩ állapotba kerül, egy Berry-fázisnak nevezett járulékos fázistól
   eltekintve. Ennek lényegében az az oka, hogy az együtthatók gyors fázisoszcillációi megakadályozzák,
   hogy az átmeneti amplitúdók felhalmozódjanak, ahogy azt időfüggő perturbációszámításban láttuk.
 • Két energiaszint közötti fázisoszcillációk időskálája ℏ/∆E, ezért az adiabatikus tétel akkor
   teljesül, ha a Hamilton-operátor változásának időskálája ennél sokkal nagyobb; meghiúsul, ha az
   energiaszintek degenerálódnak a betöltött szinttel.
 • A kvantumos adiabatikus tétel szerint az n kvantumszámok megmaradnak, és a félklasszikus határesetben
                                      I
                                           p dq = nh

   ami a klasszikus adiabatikus tételt jelenti. Továbbá, mivel a kvantumállapotok betöltöttsége
   megmarad, az entrópia állandó marad, összekapcsolva ezt az adiabatikus folyamat termodinamikai
   fogalmával.
 • Az adiabatikus tétel hibájának paraméterezésére írhatjuk az időfüggést H = H(τ ), τ = ϵt mellett,
   és vehetjük a ϵ → 0, t → ∞ határát, τ-t rögzítve. Ezután az együtthatókat ϵ szerinti hatványsorban
   fejthetjük ki.

 • Ha ezt gondosan végezzük, akkor amíg az energiaszintek nem degeneráltak, az adiabatikus tétel ϵ
   minden rendjében teljesül. Ennek belátásához vegyük észre, hogy a hibatermek alakja
                                          Z τf
                                               dτ eiωτ /ϵ f (τ )
                                               τi

    Ha a szintek nem degeneráltak, az integrált nyeregpontközelítéssel kell kiszámítani, ami e−ωτ /ϵ
    alakú eredményt ad, és gyorsabban tűnik el, mint ϵ bármely hatványa.
 • Összehasonlításképpen egy állandó perturbáció esetén az időfüggő perturbációszámítás ϵ rendű
   átmeneti amplitúdót ad, nem pedig e−1/ϵ-et. Ez az eltérés abból ered, hogy az állandó perturbációt
   hirtelen kapcsoljuk be, nem pedig adiabatikusan; ha a Hamilton-operátor minden időderiváltja sima,
   akkor e−1/ϵ-et kapunk.

Most áttérünk a Berry-fázisra.

 • Feltesszük, hogy az adiabatikus tétel érvényes, és a
                                          |ψ(t)⟩ = eiγ(t) |n(λ(t))⟩
    próbafüggvényt behelyettesítjük a Schrödinger-egyenletbe:
                                          ∂|ψ⟩
                                           i     = H(λ(t))|ψ⟩
                                            ∂t
   ahol γ(t) a meghatározandó fázis. Az egyszerűség kedvéért minden más állapotot elhanyagolunk, és
   az aktuális állapot energiáját minden időpontban nullának választjuk, hogy a dinamikai fázist
   figyelmen kívül hagyjuk.
 • A próbafüggvény behelyettesítése és ⟨ψ|-vel való balról hatás után
                                               iγ̇ + ⟨n|ṅ⟩ = 0.
   A γ valós, mert
                                     d
                              0=        ⟨n|n⟩ = ⟨ṅ|n⟩ + ⟨n|ṅ⟩ = 2 Re⟨n|ṅ⟩.
                                     dt


 • A láncszabályt használva
                                       Z
                                                                              ∂
                              γ(t) =        Ai (λ) dλi ,   Ai (λ) = i⟨n|         |n⟩
                                                                             ∂λi
   ahol A-t Berry-kapcsolatnak nevezzük, és implicit módon n-től függ. Ez a fázis azonban csak a
   paramétertér zárt görbéire értelmes, mivel a Berry-kapcsolatnak mértékszabadsága van abból fakadóan,
   hogy az |n(λ)⟩ állapotokat fázistényezőkkel újradefiniálhatjuk.

 • Pontosabban az állapotokat a következő „mértéktranszformációval” definiálhatjuk újra:

                                             |n′ (λ)⟩ = eiω(λ) n(λ)

   amely esetben a Berry-kapcsolat így változik:

                                                A′i = Ai + ∂i ω.

   Ez ugyanúgy néz ki, mint egy elektromágneses mértéktranszformáció, azzal a különbséggel, hogy ott
   a λi paramétereket térkoordináták helyettesítik. Geometriailag Ai egy differenciálforma a paraméterek
   terén, ahogy Ai is differenciálforma a Minkowski-téren.

 • Ezért mértékinvariáns görbületet definiálhatunk:

                                            Fij (λ) = ∂i Aj − ∂j Ai

   ezt Berry-görbületnek nevezzük. A Stokes-tétellel a Berry-fázis így írható:
                                        Z           Z
                                    γ=     Ai dλi =    Fij dS ij
                                               C             S

   ahol S a C zárt görbét határoló felület.

 • Geometriailag ezt a helyzetet egy M paramétertér fölötti U (1)-nyalábbal írhatjuk le. A Berry-
   kapcsolat egyszerűen ezen a nyalábon értelmezett kapcsolat; a fáziskonvenció kiválasztása egy
   szelvény kiválasztásának felel meg.

 • Általánosabban, ha állapotunk n-szeresen degenerált, akkor egy U (n)-nyaláb nemabeli Berry-
   kapcsolatával van dolgunk. Az egyenletek több indexet kapnak:
                                                                  ∂
                                           (Ai )(λ)ba = i⟨na |       |nb ⟩
                                                                 ∂λi
   míg a |n′ (λ)⟩ = Ωab (λ)|nb (λ)⟩ mértéktranszformáció ezt eredményezi:
                                                              ∂Ω †
                                           A′i = ΩAi Ω† − i       Ω.
                                                              ∂λi

 • A térerősség

                           Fij = ∂i Aj − ∂j Ai − i[Ai , Aj ],         Fij′ = ΩFij Ω†

   és a Berry-fázis „Berry-holonomiának” nevezett általánosítása
                                                  I
                                                           i
                                     U = P exp i Ai dλ .
