---
id: kevin-zhou-notes-phy-ex084
source: kevin-zhou-notes
native_id: "phy Example 084"
origin: "Kevin Zhou personal physics notes"
language: hu
translated: true
links_en: kevin-zhou-notes-phy-ex084
topic: [kvantumfizika]
subtopic: [diszkrét-szimmetriák, szögimpulzus]
math_tools: [szögimpulzus, csoportelmélet]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "10111-10471"
archive_layer: reference_notes
source_role: explanatory_example
---
Példa. A Landau–Yang-tétel szerint egy tömeggel rendelkező, spin 1-es részecske nem bomolhat két
fotonra. Ez korlátozza például a pozitronium és a charmonium egyes állapotainak, valamint a gyenge
mértékbozonoknak a bomlását. A bemutatáshoz dolgozzunk a bomló részecske nyugalmi rendszerében.
Az energia- és impulzusmegmaradás miatt egy bizonyos idő elteltével a rendszer állapota a még jelen
lévő részecske, valamint a különböző irányokban és polarizációkban, egymással ellentétes irányban kilépő
fotonokat tartalmazó |k, e1 , −k, e2 ⟩ tagok szuperpozíciója lesz.
   Válasszunk most egy tetszőleges z-tengelyt. Megmutatjuk, hogy a fotonok nem léphetnek ki egymással
ellentétesen ezen tengely mentén, vagyis a |kẑ, e1 , −kẑ, e2 ⟩ tagok nem jelenhetnek meg az állapotban.
Mivel ẑ tetszőleges, ez azt mutatja, hogy a bomlás egyáltalán nem történhet meg. Az ei vektorokat
körpolarizációkra bonthatjuk:

                               e1R = e2L = x̂ + iŷ,    e1L = e2R = x̂ − iŷ

ahol e két lehetőség Jz sajátértékei ±1. Mivel egy spin 1 részecskére |Jz | ≤ 1, a két foton Jz
sajátértékeinek ellentétesnek kell lenniük, ezért a megengedett polarizációkombinációk
|kẑ, e1R , −kẑ, e2R ⟩ és |kẑ, e1L , −kẑ, e2L ⟩, amelyekre Jz = 0. Vizsgáljuk meg most az
Ry (π) forgatás hatását. Mindkét állapot ennek a forgatásnak 1 sajátértékű sajátállapota. Egy spin 1
irrep Jz = 0 állapota azonban előjelet vált, amint az Y10 (θ, ϕ) transzformációjából látható, ezért
ez a tag tiltott. Hasonló érveléssel különféle más bomlások is korlátozhatók; további korlátozásokat
a paritás ad.
188 7. Szögimpulzus

Megjegyzés. Miért hagytuk figyelmen kívül a pályamenti szögimpulzust a fenti érvelésben? Valójában
nem hagytuk figyelmen kívül. A végállapotot a fotonimpulzus és a spin sajátvektoraiban bontottuk fel.
Ezek az állapotok hordoznak pályamenti szögimpulzust, pontosabban a pályamenti szögimpulzusuk nincs
definiálva: a |k, e1 , −k, e2 ⟩ nem az általános térbeli forgások sajátvektora. A pályamenti szögimpulzus
explicit megjelenítéséhez más bázisban, nevezetesen részleges hullámokban bontanánk fel az állapotot.
Ebben az esetben a lineáris impulzus nem lenne definiálva, abban az értelemben, hogy minden pályamenti
szögimpulzus-állapot határozatlan lineáris impulzussal rendelkezik. A végső következtetés ugyanaz lenne,
de sokkal nehezebb lenne eljutni hozzá. (Ezt jobban meg kell érteni.) A mi érvelésünk az előbbi bázist
használta, és az állapot forgások alatti tulajdonságait vizsgálta, amelyek automatikusan figyelembe
veszik mind a spin-, mind a pályamenti szögimpulzust.

7.6     Tenzoroperátorok
Klasszikusan azért mondjuk a helyvektorról x, hogy vektor, mert így transzformálódik forgatások alatt.
A kvantummechanikában a megfigyelhető mennyiségek operátoroknak felelnek meg, ami arra indít bennünket,
hogy megvizsgáljuk az operátorok forgások alatti transzformációját.

  • Az állapotok így transzformálódnak: |ψ⟩ → |ψ ′ ⟩ = U (R)|ψ⟩. Forgatás alatt egy A operátor
    alakja

                                                A′ = U (R)AU (R)†

      lesz, így ⟨ψ ′ |A′ |ψ ′ ⟩ = ⟨ψ|A|ψ⟩.

  • Skalároperátor minden olyan K operátor, amely forgatások alatt invariáns, K ′ = K. Ezért K minden
    forgatással kommutál; infinitézimális forgatás esetén ez azt jelenti, hogy K J-vel kommutál.
    Fontos példa a centrális erőtérbeli probléma Hamilton-operátora.

  • Vektoroperátor egy olyan V operátorhármas, amelyre

                                             ⟨ψ ′ |V|ψ ′ ⟩ = R⟨ψ|V|ψ⟩.

      Vagyis V klasszikus vektormennyiségnek felel meg. Komponensekre bontva

                                             U (R)Vi U (R)† = Vj Rji .

      Mindkét oldalon infinitézimális forgatást véve a kommutációs relációk

                                                [Ji , Vj ] = iℏϵijk Vk

      adódnak, ami a vektoroperátor alternatív definíciójaként szolgál.

  • Hasonlóan megmutathatjuk, hogy vektoroperátorok skaláris szorzata skalároperátor, vektoriális
    szorzata vektoroperátor stb. Például p2 skalároperátor, L = r × p pedig vektoroperátor. Az adjungált
    formula megmutatja, hogy a szögimpulzus mindig vektoroperátor.

  • Hasonlóan, egy másodrendű tenzoroperátort úgy definiálunk, hogy

                                           U (R)Tij U (R)† = Tkl Rki Rlj .

      Például a vektoroperátorok Tij = Vi Wj külső szorzata tenzoroperátor. Másodrendű tenzoroperátor
      fizikai példája a kvadrupólusmomentum.
189 7. Szögimpulzus

Most egy látszólag független témára, az R3 gömbi bázisára térünk át.

 • Az x̂, ŷ, ẑ derékszögű bázisból kiindulva definiáljuk a gömbi bázisvektorokat:
                                      x̂ + iŷ                            x̂ − iŷ
                               ê1 = − √ ,          ê0 = ẑ,    ê−1 =      √ .
                                          2                                   2
    A vektorokat ebben a bázisban (pontosabban az ê∗q bázisban) fejthetjük ki:

                                        X = ê∗q Xq ,    Xq = êq · X

 • Alkalmazásként tekintsük a dipólusátmenet rátájának kiszámítását, amely arányos a
   ⟨n′ ℓ′ m′ |x|nℓm⟩ mátrixelemmel. Ez nehézkes, de egyszerűsödik, ha x-et a gömbi bázisban fejtjük ki,
   mivel
                                                                 r
                                                                 3
                                              rY1q (Ω) =           xq .
                                                                4π
   Ekkor a mátrixelem szög- és radiális részre esik szét:
                                 Z ∞                               r Z
                                                                     4π
           ⟨n′ ℓ′ m′ |xq |nℓm⟩ =     r2 dr Rn∗ ′ ℓ′ (r)rRnℓ (r) ×        dΩ Yℓ∗′ m′ (Ω)Y1q (Ω)Yℓm (Ω).
                                  0                                    3
    Ez jelentős javulás: n és n′ csak az első tényezőben jelenik meg, m és m′ pedig csak a másodikban.
    Továbbá az integrál automatikusan eltűnik, hacsak m′ = q + m nem teljesül, ami jelentősen csökkenti
    az elvégzendő munkát. Sőt, a szög szerinti rész minden forgásszimmetrikus rendszerben azonos; a radiális
    rész választja ki azt, ami a hidrogénre jellemző.

 • A „véletlen egybeesés” oka, hogy mind a gömbharmonikusok, mind a gömbi bázis az SU (2) reprezentáció-
   elméletéből származik. Az Ylm-ek a gömbfüggvények forgás alatti hatásának szokásos szögimpulzus-bázisai.
   Hasonlóan a gömbi bázis a térbeli forgások hatásának szokásos szögimpulzus-bázisa, amely a j = 1
   reprezentációt hordozza.

 • Általánosabban, a tenzormennyiségek klasszikusan az SO(3) reprezentációit hordozzák, ezért a
   tenzoroperátorok a kvantummechanikában az SU (2) reprezentációit hordozzák. Így természetes, hogy a
   foton, amelyet klasszikusan az A vektor ír le, spin 1-gyel rendelkezik.

 • A tenzoroperátorok irrepekre bonthatók. A skalár- és vektoroperátorok már eleve irrepek, de a
   Tij = Vi Wj tenzoroperátor tartalmazza a skalár- és vektorirrepet:

                                     tr T = V · W,        X = V × W.

    A fennmaradó szabadságfokok egy ötdimenziós irpet alkotnak, a Tij szimmetrikus, nyom nélküli részét.
    Ez összhangban van a Clebsch–Gordan-felbontással: 1 ⊗ 1 = 0 ⊕ 1 ⊕ 2. Ugyanez a felbontás linearitás
    miatt tetszőleges Tij-re érvényes.

 • A standard bázisban az irrepek ugyanazokkal a D-mátrixokkal transzformálódnak, amelyeket korábban
   bevezettünk. Például egy k-ad rendű irreducibilis tenzoroperátor 2k + 1 operátorból álló Tqk halmaz,
   amelyre

                                          U Tqk U † = Tqk′ Dqk′ q (U ).

    Egy k-ad rendű irreducibilis tenzoroperátor úgy transzformálódik, mint egy j spinű részecske. Új
    nyelvünkön x xq-k szerinti felírása éppen azt jelenti, hogy x-et elsőrendű irreducibilis
    tenzoroperátorként írjuk fel.
190 7. Szögimpulzus

  • A forgatások a ketekre az U (R) szorzással hatnak, míg az operátorokra konjugálással; ez infinitézimális
    forgatásoknál kommutációvá alakul. Ezért a szögimpulzus-operátorok a Tqk irreducibilis tenzoroperátorra
    pontosan úgy hatnak, mint a |kq⟩ ketekre, csak kommutátorokkal:
                             [Jz , Tqk ] = ℏkTqk , [Ji , [Ji , Tqk ]] = ℏ2 k(k + 1)Tqk .
    Ezt külön nem is kell bizonyítanunk; egyszerűen átöröklődik a korábbi eredményeinkből.

  • Operátorok esetén nincs a többi esethez hasonló egyszerű „szögimpulzus-operátor”, mert annak
    szuperoperátornak, vagyis operátorokon ható lineáris leképezésnek kellene lennie.

Megjegyzés. A fenti gondolatok a magasabb gömbharmonikusok megértésére is használhatók. Az x, y és z
forgatások alatti irpet alkotnak, ezért a másodrendű homogén polinomok halmaza is reprezentáció. Az
1 ⊗ 1 = 0 ⊕ 1 ⊕ 2 felbontás ötdimenziós irpet ad, és ha ezeket r2-tel elosztjuk, megkapjuk az ℓ = 2
gömbharmonikusokat.
    Ez magyarázza a kémiai pályák elnevezését. A p-pályák a px , py és pz, amelyek az x/r, y/r és z/r
szögfüggő részeknek felelnek meg. Vegyük észre, hogy ez nem a szokásos szögimpulzus-bázis; ehelyett
valós és némileg szimmetrikus függvényeket választunk. A d-pályák neve hasonló, bár a dz 2 helyett
valójában d3z 2 −r2 lenne a helyes elnevezés. E pályák és a magasabbak szemléltetései itt találhatók.

Most kimondjuk a Wigner–Eckart-tételt, amely leegyszerűsíti az irreducibilis tenzoroperátorok mátrixelemeit.
Bizonyításával nem foglalkozunk, mert jelölései bonyolulttá válnak, de speciális esetekben viszonylag
könnyen megmutatható, és ezek megadják a mögöttes intuíciót.

  • Tekintsünk egy rotációs szimmetriájú rendszert, és dolgozzunk a |γjm⟩ bázisban. Egy skalároperátor
    K kommutál Jz-vel és J 2-tel, ezért megőrzi j-t és m-et. Továbbá J±-szel is kommutál, ezért
    mátrixelemei nem függenek m-től:

                                       ⟨γ ′ j ′ m′ |K|γjm⟩ = δj ′ j δm′ m Cγj ′ γ .

    Ez például azt jelenti, hogy a sajátértékek 2j + 1-szeres degenerációjú multiplettekben jelennek meg.
    Ezt az érvelést már láttuk a K = H speciális esetben, de az eredmény bármely skalároperátorra és
    bármely rotációs szimmetriájú rendszerre érvényes.

  • A Wigner–Eckart-tétel ezt tenzoroperátorokra általánosítja:

                               ⟨γ ′ j ′ m′ |Tqk |γjm⟩ = ⟨γ ′ j ′ ||T k ||γj⟩⟨j ′ m′ |jkmq⟩

    ahol az első tényezőt redukált mátrixelemnek, a másodikat Clebsch–Gordan-együtthatónak nevezzük.
    A redukált mátrixelem nem szó szerinti mátrixelem, csak olyan mennyiséget jelöl, amely kizárólag T k-tól,
    valamint a γ- és j-indexektől függ.

  • A Wigner–Eckart-tétel a mátrixelemet egy irrepektől függő részre bontja (így a rendszer részletes
    dinamikájától függ), illetve az irrepeken belüli állapotokat indexelő m-ektől függő részre (így ezt
    teljesen a rotációs szimmetria határozza meg). Ez leegyszerűsíti az átmeneti ráták kiszámítását,
    amint azt korábban láttuk. A γ- és j-indexeket rögzítve általában (2j + 1)(2j ′ + 1)(2k + 1)
    mátrixelemet kellene kiszámítani, de elegendő egyet kiszámítanunk a redukált mátrixelem meghatározásához.
191 7. Szögimpulzus

 • A Clebsch–Gordan-együttható intuíciója az, hogy Tqk |jm⟩ forgatások alatt ugyanúgy transzformálódik,
   mint a |kq⟩|jm⟩ ket. A Clebsch–Gordan-tényező több kiválasztási szabályt is ad:

                                  m′ = m + q,          j ′ ∈ {|j − k|, . . . , j + k}

    éppen úgy, ahogy azt korábban a gömbi bázissal leírt dipólusátmeneteknél láttuk.

 • Ha csak egy irrep van, akkor minden k-ad rendű irreducibilis tenzoroperátor egymás skalárszorosa.
   Ennek közvetlen megmutatásához vegyük észre, hogy minden ilyen operátort az |m⟩⟨m′ | operátorok
   lineáris kombinációjából kell felépíteni. Ezek az operátorok így transzformálódnak:

                                           j ⊗ j = 0 ⊕ 1 ⊕ . . . ⊕ 2j.

   Ezért minden legfeljebb 2j spinhez egyetlen irreducibilis tenzoroperátor tartozik, és 2j fölött egy
   sem. Ez például megmutatja, hogy spinek esetén µ ∝ S.

 • Például az α-részecske olyan atommag, amelynek alapállapota spin 0. Ha Hilbert-terünket erre az irpre
   korlátozzuk, a kiválasztási szabályok szerint minden k > 0 rendű irreducibilis tenzoroperátornak zérusnak
   kell lennie. Ezért az α-részecskének nem lehet mágneses dipólusmomentuma.

 • J redukált mátrixelemeinek kiszámításához vegyük észre, hogy

                              ⟨γ ′ j ′ m′ |Jz |γjm⟩ = ⟨γ ′ j ′ ||J||γj⟩⟨j ′ m′ |j1m0⟩.

   A bal oldal könnyen kiértékelhető, így
                                                  δγ ′ γ δj ′ j ℏm
                            ⟨γ ′ j ′ ||J||γj⟩ =
                                                                                    p
                                                                   = δγ ′ γ δj ′ j ℏ ℓ(ℓ + 1)
                                                  ⟨jm|j1m0⟩
   ahol az utolsó lépésben a j ⊗ 1 esetre vonatkozó explicit Clebsch–Gordan-együtthatókat használtuk.

A Wigner–Eckart-tétel egyik hasznos következménye a projekciós tétel.

 • Először nyers erővel bizonyítjuk a tételt. Közvetlenül a definíciókból megmutatható, hogy bármely
   V vektoroperátorra

                           [J 2 , [J 2 , V]] = ℏ2 2(J 2 V + VJ 2 ) − 4(V · J)J
                                                                               

    teljesül.

  • Ezt az azonosságot most a ⟨γ ′ jm′ | és a |γjm⟩ közé illesztjük. Mivel mindkét oldalon ugyanaz a
    j érték szerepel, a bal oldal eltűnik, tehát

                          2⟨γ ′ jm′ |J 2 V + VJ 2 |γjm⟩ = 4⟨γ ′ jm′ |(V · J)J|γjm⟩.

    Kicsit átrendezve
                                                         1
                           ⟨γ ′ jm′ |V|γjm⟩ =                  ⟨γ ′ jm′ |(V · J)J|γjm⟩
                                                    j(j + 1)ℏ2
   adódik, amit projekciós tételnek nevezünk. Intuitívan a jobb oldal V „J irányú” vetülete, az eredmény
   pedig azt mondja, hogy ez megegyezik V-vel, ha egy rögzített j-jű altérre korlátozunk. Ez annak a
   korábbi gondolatnak az általánosítása, hogy rögzített γ és j esetén csak egyetlen vektoroperátor van.
192 7. Szögimpulzus

 • A projekciós tétel levezethető a Wigner–Eckart-tételben szereplő redukált mátrixelem explicit
   kiértékelésével is. Mivel a jobb oldalon skalár- és vektoroperátor szorzata szerepel, először az ilyen
   szorzatokat egyszerűsítjük.

 • Legyen A vektoroperátor, f pedig skalároperátor. A Wigner–Eckart-tétel szerint

                               ⟨γ ′ j ′ m′ |Aq |γjm⟩ = ⟨γ ′ j ′ ||A||γj⟩⟨j ′ m′ |j1mq⟩

   és
                             ⟨γ ′ j ′ m′ |f Aq |γjm⟩ = ⟨γ ′ j ′ ||f A||γj⟩⟨j ′ m′ |j1mq⟩.
   Továbbá, mivel f skalár,

                                  ⟨γ ′ j ′ m′ |f |γjm⟩ = δm′ m δj ′ j ⟨γ ′ j||f ||γj⟩.

   Ezeket kombinálva az f A redukált mátrixelemeire felbontást kapunk:
                                                 X
                           ⟨γ ′ j ′ ||f A||γj⟩ =   ⟨γ ′ j ′ ||f ||Γj ′ ⟩⟨Γj ′ ||A||γj⟩
                                                      Γ

   ami érthető: A és f is mozgathat az irrepek között, de csak A változtathatja meg j-t.

 • Hasonló érveléssel vektoroperátorok skaláris szorzatára
                                                   X
                           ⟨γ ′ j ′ ||A · B||γj⟩ =  ⟨γ ′ j||A||Γj ′ ⟩⟨Γj ′ ||B||γj⟩
                                                      Γj ′

   adódik, ahol az A · B =       q Aq Bq összefüggést és a Wigner–Eckart-tételt kétszer használtuk.
                              P       †

 • Most közvetlenül megmutathatjuk a projekciós tételt. Azt kapjuk, hogy

           ⟨γ ′ j ′ m′ |(A · J)Jq |γjm⟩ = δj ′ j ℏ j(j + 1)⟨jm′ |j1mq⟩⟨γ ′ j||A · J||γj⟩
                                                  p

                                        = δj ′ j ℏ j(j + 1)⟨jm′ |j1mq⟩⟨γ ′ j||A||γj⟩⟨γj||J||γj⟩
                                                  p

                                         = δj ′ j ℏ2 j(j + 1)⟨jm′ |j1mq⟩⟨γ ′ j||A||γj⟩
                                         = δj ′ j ℏ2 j(j + 1)⟨γ ′ jm′ |Aq |γjm⟩

   ahol a fenti felbontásokat és J redukált mátrixelemeit használtuk.
193 8. Diszkrét szimmetriák

8      Diszkrét szimmetriák
8.1     Paritás
Az előző szakaszban a valódi forgásokat vizsgáltuk. Most hozzáadjuk a paritást, egy nem valódi forgást,
és megvizsgáljuk a reprezentációit. A diszkrét szimmetriákat a relativisztikus kvantummechanikával
kapcsolatban a Standard Modellről szóló jegyzetek is tárgyalják.

    • A klasszikus mechanikában a P paritásoperátor minden térbeli komponenst megfordít. Mátrixa −I,
      teljesíti a P 2 = I relációt, és kommutál minden valódi forgatással, P RP −1 = R.

    • A kvantummechanikában olyan π = U (P ) paritásoperátort keresünk, amelyre
                                  π † π = 1,   π 2 = 1,   πU (R)π † = U (R).
      Matematikailag ez az O(3) unitér reprezentációinak keresését jelenti. Az első két posztulátum együtt
      megmutatja, hogy π Hermitikus, ezért a paritás megfigyelhető. A harmadik posztulátum ekvivalens
      a [π, J] = 0 relációval, vagyis π skalároperátor.

    • A fenti posztulátumok kizárják a projektív reprezentációkat. Ezek elvben megengedettek, de egyik
      alkalmazásunkhoz sem lesz rájuk szükség.

    • Spin nélküli részecskére korábban definiáltuk az U (R)|x⟩ = |Rx⟩ relációt. Hasonlóan definiálhatjuk
      a π|x⟩ = −|x⟩ relációt, amely az összes fenti posztulátumot kielégíti. Közvetlenül kiszámíthatjuk azt is,
                                  πxπ † = −x,     πpπ † = −p,     πLπ † = L
      ahol L a pályamenti szögimpulzus, r × p. Az |lm⟩ állapot paritása (−1)l.

    • Egy másik példa egy térbeli hullámfüggvény nélküli, s spinű részecske. Az állapotok |sm⟩, ahol
      m = −s, . . . , s. Mivel π skalároperátor, szükségképpen
                                                π|sm⟩ = η|sm⟩
      valamely η = ±1 konstansra. A nemrelativisztikus kvantummechanikában az előjelnek nincs fizikai
      következménye, ezért η = 1-et választunk, vagyis a paritás nem hat a spinállapotra. A térbeli
      szabadságfokokat visszaadva π|x, m⟩ = |−x, m⟩.

    • Relativisztikus kvantummechanikában η előjele fizikailag számít, mert a részecskeszám változhat,
      de a teljes paritásnak meg kell maradnia; ez kiválasztási szabályokat ad. Például az, hogy a foton
      paritása negatív, összefügg azzal, hogy egy elektromos dipólusátmenet során az atom paritása megfordul,
      és az átmenetben egy foton vesz részt.

    • Legyen V vektoroperátor. Ha
                                                 πVπ † = ±V
      akkor V valódi/poláris vektor, ha az előjel −1, illetve pszeudovektor/axiális vektor, ha az előjel +1.
      Például x és p poláris vektorok, L pedig axiális vektor.

    • Hasonlóan, egy K skalároperátorra, ha
                                                 πKπ † = ±K
      akkor K valódi skalár, ha az előjel +1, és pszeudoskalár, ha az előjel −1. Például p · S
      pszeudoskalár.
194 8. Diszkrét szimmetriák

  • Vegyük észre, hogy E poláris vektor, B pedig axiális vektor. Különösen külső mágneses tér hozzáadása
    nem töri meg a paritásszimmetriát.
Most a Hamilton-operátor paritásszimmetriájának következményeit vizsgáljuk.
  • A paritás megmarad, ha [π, H] = 0. Ez teljesül a centrális erőtér Hamilton-operátorára, és általánosabban
    minden olyan részecskerendszerre, amelyben a páronkénti erők V (|ri − rj |) alakúak.
  • A paritás relativisztikus hatások figyelembevételekor is megmarad. Ilyen hatások például L · S
    spin–pálya csatolást eredményeznek, ez a tag azonban valódi skalár. A paritás látszólag sérülhet
    fotonok kibocsátásakor (vagy általában, ha a rendszert külső térbe helyezzük), de megmarad, ha az
    elektromágneses tér paritását is figyelembe vesszük.
  • A paritás az erős kölcsönhatásban is megmarad, a gyenge kölcsönhatásban viszont nem. A gyenge
    kölcsönhatás atomi energialéptéken rendkívül gyenge, ezért a paritásszimmetria az atomfizikában
    rendkívül pontos.
  • A rotációs szimmetriával ellentétben a paritásszimmetria önmagában nem jár degenerációval, mert
    irrepei mind egydimenziósak; például a harmonikus oszcillátor paritásszimmetrikus, még sincs degenerációja.
    Magasabb dimenziós irrepekhez nemabeli szimmetriacsoport szükséges. Tekintsük például az egydimenziós
    szabad részecskét. Transzlációs és paritásszimmetriája is van, amelyek kétdimenziós irrepeket adnak,
    a sin(kx) és cos(kx) kombinációknak megfelelően.
  • Nemtriviálisabb példa a paritásszimmetrikus kristályrácsban ellentétes kristályimpulzusú állapotok
    degenerációja, ahogy azt a szilárdtestekről szóló jegyzetek ismertetik. Ezt a paritásszimmetria és a
    diszkrét transzlációs szimmetria együttese okozza.
  • A rotációs szimmetriához hasonlóan a paritásszimmetria is hasznos lehet, mert csökkenti a vizsgálandó
    Hilbert-tér dimenzióját. A Hilbert-teret +1 és −1 paritású reprezentációkra bonthatjuk, és a H-t
    ezeken belül külön diagonalizálhatjuk, ami hatékonyabb.
  • Rotációs szimmetria esetén minden rotációs irrepnek határozott paritása van, mivel π skalároperátor.
    Különösen, ha az irrepek nem degeneráltak, akkor minden energiasajátállapot automatikusan paritás-
    sajátállapot. (A hidrogénben azonban a 2s és 2p irrepek degeneráltak, így ezen állapotok lineáris
    kombinációja határozatlan paritású energiasajátállapotot ad.)
