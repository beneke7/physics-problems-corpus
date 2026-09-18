---
id: kevin-zhou-notes-phy-ex086
source: kevin-zhou-notes
native_id: "phy Example 086"
origin: "Kevin Zhou personal physics notes"
language: hu
translated: true
links_en: kevin-zhou-notes-phy-ex086
topic: [kvantumfizika]
subtopic: [spin–pálya-csatolás, időtükrözés, perturbációelmélet]
math_tools: [lineáris-algebra, csoportelmélet, perturbációelmélet]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "10477-11091"
archive_layer: reference_notes
source_role: explanatory_example
---
Példa. Spin–pálya-csatolás. Tekintsünk egy |nℓmℓ ⟩ térbeli állapotú részecskét, amely radiális és
szög szerinti részre válik szét, |nℓ⟩|ℓmℓ ⟩ alakban, valamint egy |sms ⟩ spinállapotot. A radiális
részt, amely leválik, elhagyva a teljes spinállapotokat vizsgáljuk:
                                        X
                             |ℓjmj ⟩ =       |ℓmℓ ⟩|sms ⟩⟨ℓsmℓ ms |jmj ⟩.
                                        mℓ ,ms

Egy ilyen állapot hullámfüggvénye egy szögkoordinátát vesz fel, és egy spinort ad vissza. A spin–pálya-
csatolás σ · x alakú. Mivel ez a tag rotációsan invariáns, megőrzi j-t és mj-t. A térbeli rész szempontjából
ez olyan, mint egy elektromos dipólusátmenet, ezért ∆ℓ = ±1. Így a kölcsönhatás egységenként képes
átadni a szögimpulzust a spin és a pálya között.

8.2     Időtükrözés
Ezután az időtükrözést vizsgáljuk, amely finomabb, mert egy antilineáris operátor valósítja meg.
Kezdjük a klasszikus esettel.

  • Newtoni mechanikában, ha x(t) érvényes pálya egy potenciálban (például külső elektromos térben)
    mozgó részecskére, akkor x(−t) is érvényes pálya. Mivel a sebesség előjelet vált, az impulzus is:
    p(t) → −p(−t).

  • Ez a gondolatmenet külső mágneses tér esetén nem működik. Ha azonban a teret a rendszerben lévő
    töltések hozzák létre, akkor az időtükrözés

                                    ρ → ρ, J → −J,       E → E, B → −B,

      ahol az időkoordinátákat elhagytuk. Ez egy további előjelet vált, amely helyreállítja a szimmetriát.

  • Vegyük észre, hogy ez a paritás esetének ellentéte. Itt J is előjelet vált, E viszont előjelet vált,
    B pedig nem.

  • A kvantummechanikában a Schrodinger-egyenlet

                                            ℏ2 2

                                  ∂ψ
                               iℏ     = −      ∇ + V (x) ψ(x, t).
                                  ∂t       2m

      Kézenfekvő lenne az időtükrözést a ψ(x, t) → ψ(x, −t) leképezéssel megvalósítani, de ez nem működik,
      mert csak a bal oldal vált előjelet. Ha azonban

                                              ψr (x, t) = ψ ∗ (x, −t)

      alakot választjuk, akkor valóban megoldást kapunk, mivel mindkét oldalt komplex konjugálhatjuk.
      Mivel a helyinformáció ψ nagyságában, az impulzusinformáció pedig a fázisában van, ez egyszerűen
      a klasszikus esetben már elvégzett p → −p megfordítás.

  • Külső mágneses tér esetén
                                         ∂ψ    1 h      q    i2
                                    iℏ      =     −iℏ∇ − A(x) ψ(x, t)
                                         ∂t   2m        c
      és ismét problémába ütközünk, mivel az A-val lineáris tagok képzetesek. A klasszikus esethez hasonlóan
      a megoldás a mágneses tér, A → −A megfordítása.

Most definiáljuk és vizsgáljuk az időtükrözési operátort.

  • A Θ időtükrözési operátort így definiáljuk:

                                              |ψr (t)⟩ = Θ|ψ(−t)⟩.

      t = 0 esetén az időtükrözési operátor a |ψ(0)⟩ kezdeti feltételt a megfordított mozgás
      |ψr (0)⟩ kezdeti feltételébe viszi.

  • Mivel a valószínűségeknek időtükrözés alatt meg kell maradniuk, feltesszük, hogy

                                                Θ† Θ = 1.

    A klasszikus mechanikával analóg módon megköveteljük, hogy

                                       ΘxΘ† = x,      ΘpΘ† = −p.

    Ekkor a pályamenti szögimpulzus is előjelet vált, ΘLΘ† = −L.

  • Feltesszük, hogy a spin szögimpulzusa is előjelet vált. Ez klasszikusan úgy érthető meg, ha a spint
    belső forgásnak tekintjük. Mivel µ ∝ S, a mágneses momentum is előjelet vált.

  • A fenti posztulátumokat egyetlen unitér operátor sem elégítheti ki, mert

                                    Θ[x, p]Θ† = iℏΘΘ† = iℏ = [x, p]

    miközben [x, −p]-t kellene kapnunk. Másként: tudjuk, hogy Θ megfordítja L előjelét, de ezt látszólag
    nem lehet összeegyeztetni az [L, L] = iL relációval.

  • Θ-t azonban megkonstruálhatjuk, ha antilineáris operátornak engedjük meg, vagyis olyan operátornak,
    amely mindent komplex konjugál a tőle jobbra álló kifejezésben. Ez a konjugálás a kommutátorokban
    szereplő i-k miatt további előjelet vált, és a fent látott módon konjugált hullámfüggvényhez vezet.

  • Egy másik módja annak, hogy belássuk Θ antiunitér voltát, a következő. A szimmetria definíciója miatt
    ΘHΘ† = H kell legyen, de ahhoz, hogy az időfejlődés valóban megforduljon, Θe−iHt Θ† = eiHt is szükséges.
    Ez csak akkor lehetséges, ha az i további előjelet vált.

  • Wigner tétele általánosabban kimondja, hogy minden valószínűségeket megőrző leképezés,

                                           |⟨ψ ′ |ϕ′ ⟩| = |⟨ψ|ϕ⟩|

    unitér vagy antiunitér. A folytonos szimmetriáknak unitérnek kell lenniük, mivel az identitáshoz
    kapcsolódnak, amely unitér; a szokásos diszkrét szimmetriák közül az időtükrözési szimmetria az
    egyetlen antiunitér.

Az antilineáris operátorokkal való munka kényes, mert a Dirac-jelölést lineáris operátorokra alkották.

  • Legyen A antilineáris, L pedig lineáris. Tetszőleges c skalárra

                                         Lc = cL,     Ac = c∗ A.

    Vegyük észre, hogy antilineáris operátorok szorzata lineáris.

  • Egy L lineáris operátorra a bra-k hatását a következő szabállyal definiáltuk:

                                        (⟨ϕ|L)|ψ⟩ ≡ (⟨ϕ|)(L|ψ⟩).

    Ha ezt naivan kiterjesztenénk antilineáris operátorokra, akkor ⟨ϕ|A antilineáris funkcionál lenne,
    a bra-knek viszont lineáris funkcionáloknak kell lenniük. Ezért komplex konjugálást adunk hozzá:

                                      (⟨ϕ|A)|ψ⟩ ≡ [(⟨ϕ|)(A|ψ⟩)]∗ .

    Fontos, melyik irányban hat az antilineáris operátor; a felcserélése komplex konjugálást eredményez.

  • Ezután definiáljuk a Hermitikus konjugáltat. Lineáris operátorok esetén

                                         ⟨ϕ|L† |ψ⟩ = [⟨ψ|L|ϕ⟩]∗ .

    Az antilineáris operátorokra való kiterjesztéshez meg kell találnunk, milyen irányban hat A és A†.
    A helyes szabály az irány megfordítása:

                                          ⟨ϕ|A† |ψ⟩ = [⟨ψ| (A|ϕ⟩)]∗ .

    Ellenőrizhető, hogy ez helyesen viselkedik, amikor |ψ⟩-t és |ϕ⟩-t skalárral szorozzuk. A szabályra
    egyszerűen úgy emlékezhetünk, hogy Hermitikus konjugáláskor mindent megfordítunk. Ekvivalensen
    megtartjuk a

                                            (A† |ψ⟩) = (⟨ψ|A)†

    szabályt, akárcsak lineáris operátoroknál.

  • Egy antiunitér operátor olyan antilineáris operátor, amelyre

                                            A† A = AA† = 1.

    Az antiunitér operátorok megőrzik a valószínűségeket, mert
                                                     h            i∗
                        ⟨ψ ′ |ϕ′ ⟩ = (⟨ψ|A† )(A|ϕ⟩) = ⟨ψ|(A† A|ϕ⟩) = ⟨ψ|ϕ⟩∗ .

  • Hasznos egy antilineáris operátort A = LK alakban tényezőkre bontani, ahol L lineáris, K pedig egy
    standard antilineáris operátor. Például egy teljes kommutáló operátorkészlet Q |n⟩ sajátbázisát adva
    definiálhatjuk KQ |n⟩ = |n⟩-t. Ekkor Kx a ψ(x) hullámfüggvényt ψ(x)∗-ra képezi.

Most konkrét helyzetekre alkalmazzuk az időtükrözési szimmetriát.

  • Spin nélküli rendszer esetén ellenőrizhető, hogy Kx megfelelően hat x-re és p-re, tehát ez az
    időtükrözési operátor; amint láttuk, konjugálja a hullámfüggvényeket.

  • Tekintsünk most egy s spinű részecskét, a térbeli szabadságfokokat figyelmen kívül hagyva. Mivel
    ΘSΘ† = −S, ezért ΘSz Θ† = −Sz, vagyis Θ megfordítja m-et, Θ|sm⟩ = cm |s, −m⟩. Másrészt

                               ΘS+ Θ† = Θ(Sx + iSy )Θ† = −Sx + iSy = −S−

    amiből cm1 = −cm következik, tehát cm = η(−1)s−m. Egy tetszőleges fázist beolvaszthatunk η-ba.
    A szokásos választás
                                       Θ|sm⟩ = i2m |s, −m⟩.

  • Ezt az eredményt másképp is levezethetjük: válasszuk K = KSz-t, így K a standard szögimpulzus-
    bázisban végzett konjugálás, majd válasszuk L-t úgy, hogy helyreállítsa a kommutációs relációkat:

                                       Θ = e−iπSy /ℏ K = Ke−iπSy /ℏ

    ahol az exponenciális azért kommutál K-val, mert mátrixelemei valósak.

  • A térbeli szabadságfokokat visszaadva

                                               Θ = Kx,Sz e−iπSy /ℏ .

    Felmerülhet, miért Sy jelenik meg Sx helyett. Ez a Condon–Shortley-féle fáziskonvenciók választására
    vezethető vissza, amelyeknek itt nemtriviális hatásuk van, mivel Θ antilineáris.

  • Több spinező részecske esetén vagy az egyes Θ-kat szorozhatjuk össze, vagy a fenti Sy-t és Sz-t a
    teljes szögimpulzusokkal helyettesíthetjük. Ugyanazt az eredményt adják, mert a Clebsch–Gordan-
    együtthatók valósak.

  • Az időtükrözési invariancia minden H = p2 /2m + V (x) alakú Hamilton-operátorra fennáll. Külső
    mágneses tér megtöri, belső terek viszont nem. Például az L · S spin–pálya-csatolás időtükrözési
    invariáns, mert mindkét szögimpulzus előjelet vált.

Végül az időtükrözést dinamikára alkalmazzuk.

  • Először ellenőrizzük, hogy az időtükrözött állapot kielégíti-e a Schrodinger-egyenletet. ℏ = 1-et
    választva

                              i∂t |ψr (t)⟩ = i∂t Θ|ψ(−t)⟩ = Θ [−i∂t |ψ(−t)⟩] .

    A τ = −t jelölést bevezetve

                      i∂t |ψr (t)⟩ = Θ [i∂τ |ψ(τ )⟩] = ΘH|ψ(τ )⟩ = (ΘHΘ† )|ψr (t)⟩.

    Ezért az időtükrözött állapot a Schrodinger-egyenletet az időtükrözött Hamilton-operátor mellett
    elégíti ki. Maga a Hamilton-operátor akkor invariáns időtükrözésre, ha [Θ, H] = 0.

 • Ha a Hamilton-operátor időtükrözésre invariáns, és |ψ⟩ nem degenerált energiasajátállapot, akkor
   Θ|ψ⟩ = eiθ |ψ⟩ kell legyen, ahol a sajátérték fázis, mert Θ megőrzi a normákat. Ekkor az
   eiθ/2 |ψ⟩ állapot Θ-sajátértéke 1. Térbeli szabadságfokok esetén ez azt jelenti, hogy a nem degenerált
   állapotok hullámfüggvényei valósnak választhatók.

 • Általánosabban Θ degenerált energiasajátállapot-párokat kapcsolhat össze. Megmutatható, hogy ebben
   az altérben mindig választhatunk olyan bázist, amelyben mindkettő Θ-sajátértéke 1. Például a szabad
   részecskénél az e±ikx állapotokat sin(kx)-szé és cos(kx)-szá kombinálhatjuk. Hasonlóan a kémiai
   atomi pályákat hagyományosan az Yℓ,±m-ek valós hullámfüggvényű lineáris kombinációiként választják.

 • Általában
                                                                            (
                       2       −iπSy /ℏ    −iπSy /ℏ       −i(2π)Sy /ℏ        1    bosons
                     Θ = Ke               Ke          =e                =                    .
                                                                             −1   fermions
    Ez nem függ a fáziskonvencióktól, mivel bármely fázismódosítás önmagát kioltja.

 • Ha páratlan számú fermion van, Θ2 = −1. Ekkor az energiaszinteknek kétszeresen degeneráltnak kell
   lenniük, mert ha nem lennének azok, akkor Θ2 |ψ⟩ = Θeiθ |ψ⟩ = |ψ⟩ adódna, ami ellentmond Θ2 = −1-nek.
   Ezt az eredményt Kramers-degenerációnak nevezzük.

 • Például rotációs szimmetria esetén a Kramers-degeneráció triviálisan fennáll, mert |l, m⟩ párja
   |l, −m⟩, ahol fél-egész l esetén m ̸= 0. A nemtriviális állítás az, hogy ez akkor is igaz, ha például
   külső elektromos teret kapcsolunk be, amely megtöri a rotációs szimmetriát. Tiltakozhatnánk, hogy
   ekkor egy elektromos dipólusmomentummal rendelkező részecskénél nem marad degeneráció – de amint
   most látni fogjuk, az időtükrözés tiltja az ilyen dipólusmomentumokat.

Általában a kvantumobjektumok, például az atomok és atommagok, multipólusmomentumokkal rendelkezhetnek.
Ez a paritás, az időtükrözés és a Wigner–Eckart-tétel hasznos alkalmazását adja.

  • Emlékeztetőül egy klasszikus töltéseloszlás multipólus-kifejtése így kezdődik:
                              q d · r 1 X Qij Tij
                     ϕ(r) =     + 3 +             + ...,       Tij = 3xi xj − r2 δij
                              r   r   6    r5
                                            ij
   ahol a töltés, az elektromos dipólusmomentum és az elektromos kvadrupólusmomentum rendre
                           Z               Z                    Z
                       q = dr ρ(r), d = dr ρ(r)r, Qij = dr ρ(r)Tij .

  • A vektorpotenciálra hasonló kifejtés adható, de a monopólustag eltűnik, és most nem vizsgálunk olyan
    helyzetet, ahol a kvadrupólustag számít; így a dipólustag marad:
                                        µ× r
                                                        Z
                                                      1
                               A(r) =        , µ=          dr r × J(r).
                                          r3          2

  • A multipólus-kifejtés tagjait kényelmi okokból „2k-pólusoknak” nevezzük. Formálisan a multipólus-
    kifejtés pusztán reprezentációelmélet: egy 2k-pólus a k spinű irrepben transzformálódik, és ezért
    2k + 1 szám írja le. Ennek megfelelően kvantumszinten a 2k-pólusok irreducibilis tenzoroperátorokká
    válnak.

  • Most korlátozzuk figyelmünket az egyetlen irrep által leírt rendszerekre, például az atommagokra.
    Ebben az esetben sok multipólust a szimmetria tilt. Tekintsünk például egy d elektromos dipólusmomentumot.
    Klasszikusan azt várjuk, hogy d paritás alatt előjelet vált, időtükrözés alatt pedig változatlan marad.
    A Wigner–Eckart-tétel szerint azonban d ∝ S, amely paritás alatt változatlan, időtükrözés alatt viszont
    előjelet vált. Ezért egy atommag állandó elektromos dipólusmomentuma sértené a P és T szimmetriát.

  • Ez az érv valójában túl gyors, mert semmi sem garantálja, hogy egy kvantumrendszer elektromos
    dipólusmomentuma úgy viselkedik, ahogy klasszikus intuícióink alapján várnánk. Jobb érv annak
    megmutatása, hogy a klasszikus objektumokra ismert P és T definíciók nem terjeszthetők ki úgy ezekre
    a kvantumobjektumokra, hogy közben az elmélet szimmetriái maradjanak.

  • Ehhez vegyük észre, hogy a gyors érv szerint d-nek úgy kell transzformálódnia, mint S-nek. d hatását
    azonban olyan kölcsönhatási tagokon keresztül mérjük, mint d · E, és tudjuk, hogy E paritás alatt
    előjelet vált, időtükrözés alatt pedig változatlan marad. Ezért a d · E tag mind P, mind T alatt páratlan,
    így a Hamilton-operátor nem szimmetrikus.

  • Természetesen módosíthatnánk E transzformációját, hogy a Hamilton-operátor szimmetrikus legyen,
    de ezt a szimmetriát, még ha hasznos volna is, ésszerűen nem nevezhetnénk „paritásnak” vagy
    „időtükrözésnek”. A szóban forgó E klasszikus elektromos tér, amelynek transzformációját már ismernünk
    kellene.

  • Az elektromos dipólusmomentumokról általában úgy beszélnek, mint amelyek sértik T-t, nem pedig P-t,
    noha mindkettőt sértik. Ennek oka, hogy az előbbi érdekesebb. A CPT-tétel szerint a T-sértés ekvivalens
    a CP-sértéssel. Míg a Standard Modellben sok ismert P-sértés van, CP-sértésből nagyon kevés, ezért
    az utóbbi érzékenyebb próba az új fizikára.

  • Vegyük észre, hogy ez az érv csak egyetlen irp által leírt részecskékre vonatkozik. Például neutronokra
    érvényes, mert feltesszük, hogy az atommagok irrepei messze vannak egymástól; nincs olyan szimmetria,
    amely a legalacsonyabb irpet degenerálttá tenné. Egy tipikus molekulának azonban laboratóriumi
    körülmények között elegendő energiája van sok irp eléréséhez, mivel a forgási energiaszintek közel
    helyezkednek el egymáshoz; ezért mondjuk például, hogy a vízmolekuláknak állandó elektromos
    dipólusmomentumuk van.

  • Hasonló érvek szerint a páratlan k-jú elektromos multipólusok és a páros k-jú mágneses multipólusok
    mind P, mind T alatt tiltottak. (A mágneses monopólusokat azonban más ok tiltja.) Így a legkisebb
    megengedett multipólusok az elektromos monopólus és a mágneses dipólus.

  • További szabály, hogy egy j spinű irpben multipólus csak akkor létezhet, ha k ≤ 2j. Ez abból
    következik, hogy egy j spinű irpben nincsenek k > 2j rendű irreducibilis tenzoroperátorok. Például
    egy proton j = 1/2 spinű, ezért nem lehet kvadrupólusmomentuma vagy ennél magasabb rendű momentumai.
    Korábban azt is láttuk, hogy egy α-részecskének j = 0, ezért az elektromos monopóluson kívül nem
    lehet más multipólusa.

Megjegyzés. Ahogy a Standard Modellről szóló jegyzetek részletesen elmagyarázzák, relativisztikus
kvantumtérelméletben a paritás és az időtükrözés is definiálható; kis energián ezek visszaadják a fenti
definíciókat. Gyakran bevezethető egy „töltéskonjugációnak” nevezett művelet is, amely az anyagot
antianyaggá képezi, de ennek nincs értelmes nemrelativisztikus határértéke. A töltéskonjugációnak például
az egyes elektronállapotokat egyes pozitronállapotokba kellene vinnie, de ez utóbbiakat általában egyáltalán
nem vesszük fel a Hilbert-térbe; megjelenésüket csak a relativisztikus QFT szerkezete kényszeríti ki.
    Ezért nem definiáltuk a töltéskonjugációt sehol korábban, és nem beszéltünk arról, hogyan hat. A
nemrelativisztikus elméletben csak azt vizsgálhatjuk, hogy egy kölcsönhatás sérti-e C-t, ha ellenőrizzük,
hogy sérti-e a PT-t, és a relativisztikus QFT CPT-tételére hivatkozunk – de közvetlenül nem hivatkozhatunk
a CPT-tételre, mert C-t definiálni sem tudjuk.

9      Időfüggetlen perturbációelmélet
9.1     Formalizmus
Ebben a szakaszban kötöttállapot-perturbációelmélettel foglalkozunk.

    • A kötöttállapot-perturbációelmélet egy perturbált Hamilton-operátor spektrumának diszkrét részét,
      valamint a hozzá tartozó sajátállapotokat meghatározó módszer. Időfüggetlen perturbációelméletnek
      is nevezik. A Hamilton-operátornak lehet folytonos spektruma is, de a kontinuumbeli állapotok
      vizsgálatához más technikák, például időfüggő perturbációelmélet szükségesek.

    • A kötöttállapot-perturbációelmélet leggyakoribb megfogalmazása a Rayleigh–Schrodinger-féle
      perturbációelmélet. Ebben a szakaszban a Brillouin–Wigner-féle perturbációelméletet használjuk,
      amely tisztább, de az eredményeket csak implicit módon adja meg.

    • Tekintsünk egy H0 perturbálatlan Hamilton-operátort ϵk sajátértékekkel és sajátállapotokkal:

                                               H0 |kα⟩ = ϵk |kα⟩

      ahol α a degenerációk feloldására szolgáló index. A Hilbert-tér a Hk sajátterekre esik szét.

    • Egy ϵn energiaszintre összpontosítunk. Legyen a teljes Hamilton-operátor H = H0 + λH1, ahol
      λ ∈ [0, 1]. Ennek a paraméternek a bevezetése lehetővé teszi, hogy a perturbációt fokozatosan
      kapcsoljuk be, és egyben kicsiny kifejtési paramétert is ad.

    • Legyen |ψ⟩ egy E energiájú egzakt sajátállapot, amely λ növelésével „kinő” a Hn sajátaltérből:
                                             H|ψ⟩ = E|ψ⟩.
      E és |ψ⟩ egyaránt implicit módon λ-tól függ.

    • Hasznos definiálni a Hn-re és ortogonális alterére vett projekciókat:
                                             X
                                        P =     |nα⟩⟨nα|, Q = 1 − P.
                                           α
      Mindkettő kommutál H0-lal.

    • Ha a perturbáció kicsi, akkor azt várjuk, hogy |ψ⟩ nagyrészt Hn-ben fekszik. A P |ψ⟩ kiszámítása
      „könnyű”, míg a Q|ψ⟩ rész meghatározása az összes többi Hk-ban „nehéz”.

    • Q|ψ⟩-re hatványsoros kifejezést írunk. Először vegyük észre, hogy

                                         (E − H0 )|ψ⟩ = λH1 |ψ⟩.

      Formális megoldást kaphatnánk |ψ⟩-re, ha (E − H0 )−1-gyel szoroznánk; erre

                                           1      X |kα⟩⟨kα|
                                                =            .
                                         E − H0      E − ϵk
                                                      kα

      teljesül. A nevező azonban k = n esetén felrobban, amikor a perturbációt kikapcsoljuk.

 • Ehelyett egy korlátozott változatot definiálunk:
                                                         X |kα⟩⟨kα|
                                                R=                            .
                                                                 E − ϵk
                                                        k̸=n,α

   A nevező akkor is felrobbanhat, ha E egy k ̸= n-hez tartozó ϵk-val esik egybe. Ezt az esetet később
   részletesebben vizsgáljuk.

 • Az R operátor a Hn ortogonális komplementerére korlátozott, ezért P megsemmisíti, Q pedig nem változtatja,
   és
                                    R(E − H0 ) = (E − H0 )R = Q.

 • Ha most mindkét oldalt R-rel szorozzuk, azt kapjuk, hogy

                                                 Q|ψ⟩ = λRH1 |ψ⟩.

    Ezután mindkét oldalhoz P |ψ⟩-t adva

                                               |ψ⟩ = P |ψ⟩ + λRH1 |ψ⟩.

   Ezt az egyenletet önmagába behelyettesítve iterálhatjuk, és sort kapunk:
                                           X
                                     |ψ⟩ =     λs (RH1 )s P |ψ⟩.
                                                       s≥0

Nem degenerált perturbációelméletet tekintünk példaként.

 • Ebben az esetben Hn-ben csak egyetlen |n⟩ állapot van. |ψ⟩-t úgy normáljuk, hogy P |ψ⟩ = |n⟩,
   amiből ⟨n|ψ⟩ = 1 következik. A sor ekkor
                                                X
                                          |ψ⟩ =      λs (RH1 )s |n⟩.
                                                        s≥0

 • A definíciókat behelyettesítve másodrendig
                         X           ⟨kα|H1 |n⟩      X             X                ⟨kα|H1 |k ′ α′ ⟩⟨k ′ α′ |H1 |n⟩
        |ψ⟩ = |n⟩ + λ        |kα⟩               + λ2                         |kα⟩                                   + ....
                                       E − ϵk                                          (E − ϵk )(E − ϵk′ )
                        k̸=n,α                            k̸=n,α k′ ̸=n,α′

   Látható, hogy a többi állapot hozzájárulását a vártnak megfelelően elnyomják az energiakülönbségek.

 • Az E energia meghatározásához vegyük észre, hogy

                                 0 = ⟨n|E − H0 − λH1 |ψ⟩ = E − ϵn − λ⟨n|H1 |ψ⟩.

   Az utolsó tag a fenti sor segítségével kiszámítható:

                 E = ϵn + λ⟨n|H1 |n⟩ + λ2 ⟨n|H1 RH1 |n⟩ + λ3 ⟨n|H1 RH1 RH1 |n⟩ + . . .

   ami explicit módon
                                      X ⟨n|H1 |kα⟩⟨kα|H1 |n⟩
      E = ϵn + λ⟨n|H1 |n⟩ + λ2
                                                      E − ϵk
                                     k̸=n,α
                                                      X         X ⟨n|H1 |kα⟩⟨kα|H1 |k ′ α′ ⟩⟨k ′ α′ |H1 |n⟩
                                              + λ3                                                          + ....
                                                              ′  ′
                                                                          (E − ϵk )(E − ϵk′ )
                                                     k̸=n,α k ̸=n,α

 • Ez még implicit kifejezés, mert E mindkét oldalon megjelenik. Felhasználhatjuk azonban E explicit
   sorának kinyerésére. Elsőrendben például

                                      E = ϵn + λ⟨n|H1 |n⟩ + O(λ2 ).

   Másodrendhez elegendő az E sorának első három tagját venni, és a nulladrendű E-kifejezést behelyettesíteni
   az O(λ2) tagba:
                                                    X ⟨n|H1 |kα⟩⟨kα|H1 |n⟩
                     E = ϵn + λ⟨n|H1 |n⟩ + λ2                                      + O(λ3 )
                                                                  ϵn − ϵk
                                                   k̸=n,α

   ami a legtöbb tankönyvben szerepel. Magasabb rendekben azonban ez az explicit Rayleigh–Schrodinger-
   kifejtés egyre bonyolultabbá válik.

 • Ezt visszahelyettesíthetjük a |ψ⟩ kifejtésébe. Elsőrendben például
                                                 X           ⟨kα|H1 |n⟩
                                |ψ⟩ = |n⟩ + λ        |kα⟩               + O(λ2 )
                                                               ϵn − ϵk
                                                k̸=n,α
   ami szintén szokásos tankönyvi eredmény.

Most a degenerált esetet vizsgáljuk.

 • Ekkor P |ψ⟩-t így kell kifejtenünk:
                                                         X
                                           P |ψ⟩ =           |nα⟩cα
                                                         α
   ahol a cα együtthatók ismeretlenek.

 • Az energiára használt fenti egyenlet ekkor

                        0 = ⟨nα|E − H0 − λH1 |ψ⟩ = (E − ϵn )cα − λ⟨nα|H1 |ψ⟩.

    A |ψ⟩ soros megoldását behelyettesítve
                                                                                 
                           X                      X ⟨nα|H1 |kγ⟩⟨kγ|H1 |nβ⟩
            (E − ϵn )cα =      λ⟨nα|H1 |nβ⟩ + λ2                          + . . . cβ .
                                                            E − ϵk
                            β                            k̸=n,γ

    A zárójelben álló mennyiséget g × g mátrixnak tekintve, ahol g = dim Hn a degeneráció, azt látjuk,
    hogy az E energiákat e mátrix sajátértékei határozzák meg, az állapotok pedig (a cα együtthatók egy
    készletével meghatározva) a sajátvektoroknak felelnek meg. A további nehézség az, hogy E maga is
    megjelenik a mátrixelemekben.

 • Gyakran csak az elsőrendű hatás érdekel bennünket. Ekkor a sajátvektorok egyszerűen a Hn-re korlátozott
   H1 sajátvektorai, az energiaeltolódások pedig H1 megfelelő sajátértékei.

 • Néha az állapotok egy része vagy mindegyike továbbra is degenerált marad. Ez a degeneráció valamely
   magasabb rendben felbomolhat. Ha soha, semmilyen rendben nem bomlik fel, akkor szinte minden esetben
   azonosíthatjuk a teljes Hamilton-operátor egy szimmetriáját, amely ezért felelős.

  • Másodrendben a kvadratikus tag nevezőjében E-t ϵn-nel helyettesíthetjük, így szokásos sajátérték-
    egyenletet kapunk. Alternatívaként a λ⟨nα|H1 |nβ⟩ tagot a perturbálatlan Hamilton-operátor részének
    tekinthetjük, mivel ezt feltehetően már diagonalizáltuk az elsőrendű eredmény meghatározásakor, és a
    kvadratikus tagot egy új, kisebb dimenziójú probléma perturbációjaként kezelhetjük.

  • Ha E-t és a cα-kat valamely rendig ismerjük, akkor P |ψ⟩ ismert, és ezt egyszerűen behelyettesíthetjük
    a |ψ⟩ sorába, hogy a teljes állapotot ugyanaddig a rendig megkapjuk.

  • Néha „közel degenerált” perturbációelméletre van szükség, amikor néhány energiaszint nagyon közel van
    egymáshoz a perturbálatlan Hamilton-operátorban. Ekkor már egy gyenge perturbáció is azt okozhatja,
    hogy a perturbált E energia keresztez egy másik perturbálatlan energiaszintet, és R divergál.

  • Ennek javítására egy kis tagot áttehetünk H0-ból H1-be úgy, hogy ezek a problémás perturbálatlan
    energiaszintek pontosan degeneráltak legyenek, majd a közönséges degenerált perturbációelméletet
    használhatjuk. (Természetesen ezt tesszük implicit módon minden alkalommal, amikor degenerált
    perturbációelméletet használunk, hiszen a gyakorlatban mindig vannak a degenerációkat felbontó további
    hatások.)

  • Teljesen ekvivalens megoldás, ha R-ből kizárjuk Hn-et és az összes közel degenerált sajátteret; a
    kapott sor ugyanaz.

Megjegyzés. Miért kell egy kontinuumban lévő állapotot időfüggő perturbációelmélettel kezelni? Az ok,
hogy az állapot általában „elveszik” a kontinuumban, vagyis a valódi energiasajátállapotok átfedése az
eredeti perturbálatlan állapottal zérus. Például ha egy atomot gerjesztett állapotban készítünk elő, de
engedjük, hogy a vákuumba sugározzon (ezzel az elektromágneses tér állapotainak kontinuumát vezetve be),
akkor az atom előkészítésének módjától függetlenül az állapot hosszú távú betöltési valószínűsége zérus.
Ez tetszőlegesen gyenge perturbációra is igaz, ezért az időfüggetlen perturbációelmélet használhatatlan.

9.2     Stark-effektus
Első példaként a hidrogén és az alkáliatomok vegyértékelektronjának Stark-effektusát vizsgáljuk, a
korábban leírt közelítést használva. Elhanyagolunk minden más, energiaszint-felhasadást okozó hatást,
amelyeket később részletesen vizsgálunk.

  • Hidrogénben a potenciál V0 (r) = −e2 /r, az energiaszintek pedig

                                                        1 e2
                                              En = −
                                                       2n2 a0
      alakúak, míg alkáliatomokban az energiaszintek En,ℓ alakúak, és az energia ℓ növekedésével nő.

  • Az elektromos teret F = F ẑ alakúnak választjuk (hogy ne keverjük össze az energiával), ezért a
    perturbáció

                                              V1 = qΦ = eF z

      ahol az elektron töltése q = −e.

  • Ésszerű ezt az atommag közelében kis perturbációnak tekinteni, mivel a laboratóriumban létrehozott
    elektromos terek tipikusan sokkal gyengébbek az atomon belülieknél. V1 azonban nagy r esetén nő,
    V0 pedig csökken, ezért a perturbációs elemzés elegendően nagy n-ű állapotokra nem működik.

 • Szigorúan véve egyáltalán nincsenek kötött állapotok, bármilyen kicsi is F, mivel a potenciál z → −∞
   esetén nagyon negatívvá válik. Így minden állapot át tud alagútazni egy gáton, és megszökhet a végtelenbe.
   Ezt figyelmen kívül hagyjuk, mert kis n esetén a gát szélessége 1/F szerint nő, ezért az alagútráta F
   csökkenésével nagyon gyorsan esik. Pontosabban WKB-közelítéssel számítható.

Most néhány alapvető példát tekintünk.

 • A hidrogén alapállapota |100⟩, egy alkáliatomé pedig |n00⟩. Ebben az esetben nincs lineáris (azaz
   elsőrendű) Stark-effektus, mivel

                                      ∆Eg(1) = ⟨n00|eF z|n00⟩ = 0

   paritás miatt: az állapotok határozott paritásúak, z pedig paritás alatt páratlan. Hasonló következtetésre
   jutottunk korábban az elektromos dipólusátmenetek tárgyalásakor.

 • Lineáris Stark-effektus csak akkor léphet fel, ha a megfelelő sajátállapotnak d állandó dipólusmomentuma
   van. Klasszikusan azt várjuk, hogy ∆E = −d · F. Kvantummechanikailag a dipólusmomentum-operátor és
   a lineáris energiaeltolódás

                                 d = qx = −ex,      ∆E (1) = −⟨d⟩ · F.

   Egy nem degenerált energiasajátállapotban azonban ⟨d⟩-nek zérusnak kell lennie, egyszerűen azért, mert
   a paritás változatlanul hagyja az energiát, de megfordítja d-t. Lineáris Stark-effektushoz tehát degenerált
   állapotokra van szükség.

 • Egy általános alkáliatomban csak azonos n és ℓ értékű állapotok degeneráltak. Amint korábban érveltünk,
   a z operátornak ℓ-t ±1-gyel kell változtatnia, ezért ismét nincs lineáris Stark-effektus. Általánosabban
   olyan, ellentétes paritású, degenerált SU (2)-multiplettekkel rendelkező rendszerekre van szükség.

 • Most a hidrogén gerjesztett állapotait vizsgáljuk. Az n főkvantumszámú állapotokra összpontosítunk,
   amelyek n2-szeresen degeneráltak. A lineáris Stark-effektus a következő mátrixelemektől függ:

                                           ⟨nℓm|eF z|nℓ′ m′ ⟩.

   Amint korábban láttuk, ∆ℓ = ±1 kell legyen, és m = m′, mivel z invariáns a z-tengely körüli
   forgatásokra. Például n = 2 esetén csak a |200⟩ és |210⟩ állapot kapcsolható össze a perturbációval.

 • A hidrogén explicit hullámfüggvényeit használva

                                 ⟨200|eF z|210⟩ = −W,     W = 3eF a0 .

   A W energia nagyságrendje megegyezik azzal az energiával, amely az elektron egyik oldalról a másikra
   tolásához szükséges. Ennek oka, hogy a |210⟩ állapotnak két szimmetrikus lebenye van, pozitív és
   negatív z-vel. A |200⟩ hozzáadásával az egyik lebeny megnő, a másik pedig összehúzódik, a fázistól függően.

 • Erre a két állapotra korlátozva a perturbációs mátrix

                                               0    −W
                                              −W     0

                                           (1)
    tehát az elsőrendű energiaeltolódások ∆E2 = ±W. Az n = 2 energiaszint három részre hasad, az új
    sajátállapotok pedig
                                                1
                                        |±W ⟩ = √ (|200⟩ ∓ |210⟩)
                                                 2
    alakúak, míg a |211⟩ és |21, −1⟩ állapotok ebben a rendben degeneráltak maradnak.
 • Ez a degeneráció minden rendben megmarad, és szimmetriákkal magyarázható. Valójában kiderül, hogy
   a hidrogénatom SO(4)-szimmetriájának megmaradó részhalmaza is magyarázza. Egyszerűbben azonban
   megjegyezhetjük, hogy Lz és az időtükrözés Θ kommutál H-val.
 • Lz alapján tudjuk, hogy az energiasajátállapotok |γm⟩ alakban indexelhetők, ahol γ további index.
   Azt is tudjuk, hogy Θ megfordítja m előjelét. Ezért minden m ̸= 0 állapot legalább kétszeresen degenerált.
 • Ezt az eredményt nem szabad összetéveszteni a Kramers-degenerációval, amely rotációs szimmetria nélküli,
   páratlan számú fermiont tartalmazó rendszerekre vonatkozik. Mivel az elektron spinjét elhanyagoltuk,
   fermionjellege itt nem játszott szerepet.
