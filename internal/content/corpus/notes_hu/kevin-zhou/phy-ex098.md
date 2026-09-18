---
id: kevin-zhou-notes-phy-ex098
source: kevin-zhou-notes
native_id: "phy Example 098"
origin: "Kevin Zhou personal physics notes"
language: hu
translated: true
links_en: kevin-zhou-notes-phy-ex098
topic: [kvantumfizika]
subtopic: [szórás, parciális-hullámok]
math_tools: [differenciálegyenletek, gömbi harmonikusok, Fourier-transzformáció]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "14065-14357"
archive_layer: reference_notes
source_role: explanatory_example
---
Példa. Egy nemtriviálisabb példa a lézertérben csapdázott ion. Az ionnak van egy optikai átmenete, amelyhez σ+ keltőoperátor
tartozik. A csapdában harmonikus potenciált érez, amelyet kvantálva fononokhoz jutunk, b annihilációs operátorral. Az
interakciós Hamilton-operátor
                                                                                      r
                  ℏΩ     i∆t −ikz(t)                        −iωm t   † iωm t              ℏ
        HI (t) =     σ− e e          + h.c., z(t) = zzp (be        +b e      ), zzp =        .
                   2                                                                    2mωm
Egy tipikus csapdában ωm ∼ MHz és zzp ∼ 10 nm az alacsonyan fekvő energiaszinteknél, ezért az exponenciálist a Lamb–Dicke-
paraméter, η = kzzp szerint kifejthetjük. Legalacsonyabb rendben

                                 ℏΩ
                      HI (t) =      σ− (ei∆t + ηbei(∆−ωm )t + ηb† ei(∆+ωm )t ) + h.c.
                                  2
és a fentivel azonos módszert alkalmazva a módosított AC Stark-eltolódást kapjuk:

                                    ℏΩ2        η 2 ∆2

                                                          †
                       Heff (t) = −      1+2 2        2
                                                        (b b + 1/2) σz .
                                    4∆       ∆ − ωm

Az új, O(η 2 ) rendű tag dominálhat, ha ∆ ≈ ωm .

12     Szórás
12.1    Bevezetés
Az előző szakaszban időfüggő nézőpontból vizsgáltuk a szórást. Ebben a szakaszban ehelyett az időfüggetlen Schrödinger-
egyenletet oldjuk meg.

 • Olyan V (x) potenciálon történő szórást vizsgálunk, amely egy r > rco levágási sugaron kívül nullához tart.
   Ezen a sugaron kívül az energiasajátállapotok a szabad Schrödinger-egyenletnek tesznek eleget.

 • Ahogy korábban érveltünk, ha beeső síkhullámot küldünk be, a hullámfüggvény hosszú idő után állandósult állapothoz
   közelít, állandó valószínűségi sűrűséggel és árammal; ezért energiasajátállapothoz közelít. Így a szórási rátákat
   közvetlenül energiasajátállapotokat vizsgálva is kiszámíthatjuk; ezek az állapotok mind nemnormálhatók.

 • Olyan ψ(x) energiasajátállapotokat keresünk, amelyek beeső síkhullámot tartalmaznak, azaz

                               ψ(x) = ψinc (x) + ψscat (x),     ψinc (x) = eik·x .

     Nagy r esetén a szórt hullámnak az eredeti hullámmal azonos energiájú, azaz azonos impulzusnagyságú gömbhullámnak
     kell lennie:
                                                        eikr
                                          ψscat (x) ∼        f (θ, ϕ).
                                                         r
     Az f (θ, ϕ) függvényt szórási amplitúdónak nevezzük.

 • Ha ψscat -ot egzakt sajátállapottá akarnánk tenni r > rco esetén, akkor f-nek állandónak kellene lennie, ami izotróp
   gömbhullámot eredményezne. Tetszőleges f esetén azonban a korrekciós tagok r-ben szubdominánsak, és csak a nagy r-es
   viselkedéssel törődünk. Hasonlóképpen a beeső eik·x síkhullám sem sajátállapot; a korrekciós tagok a ψinc (x)-be kerülnek,
   és r-ben szubdominánsak.

 • Ezután a szórási amplitúdót hatáskeresztmetszetté alakítjuk. A valószínűségi áram
                                                 ℏ
                                            J=     Im(ψ ∗ ∇ψ).
                                                 m
     A beeső hullámra Jinc = ℏk/m. A kimenő hullámra
                                                    ℏk |f (θ, ϕ)|2
                                          Jscat ∼                  r̂.
                                                    m      r2
     A ∆Ω térszögű kúp területe r sugarú gömbön r2 ∆Ω, ezért
                                       dσ   r2 Jscat (Ω)
                                          =              = |f (θ, ϕ)|2
                                       dΩ       Jinc
     adódik, ami rendkívül egyszerű eredmény.

 • Fent figyelmen kívül hagytunk egy finomságot: a beeső és a szórt hullám árama interferálna, mivel J bilineáris.
   Ezt azért hanyagoljuk el, mert a beeső hullám a valóságban véges területű, így az előre irány kivételével minden szögben
   nulla. Az előre irányban a beeső és a szórt hullám destruktívan interferál, ahogy azt a valószínűség megmaradása megköveteli.
   Ennek kvantitatív alkalmazása az optikai tételhez vezet.

 • Ha egy klasszikus erő soha nem cseng le pontosan nullára, akkor a teljes klasszikus hatáskeresztmetszet lényegében mindig
   divergál. Ez azért történik, mert a teljes hatáskeresztmetszet kissé patologikus mennyiség: minden tetszőlegesen kis szögben
   szóródó részecskét beleszámol. Egy fizikailag szemléletesebb nézet, amelyet ez a cikk képvisel, hogy az ilyen potenciálok
   mögött részecskék nélküli „árnyék” alakul ki, és az árnyék területe a szórótól távolodva tetszőlegesen nagyra nő.
 • Ezzel szemben a kvantummechanikában ezek a hatáskeresztmetszetek végessé válhatnak; például a Coulomb-potenciál
   hatáskeresztmetszete végtelen marad, a Yukawa-potenciálé viszont végessé válik. Ezt többféleképpen is elképzelhetjük.
   Matematikailag azért lehetséges, mert egy tetszőlegesen kicsi klasszikus lökés tetszőlegesen kis szórási amplitúdónak felel
   meg, miközben nagy amplitúdó tartozik ahhoz, hogy a részecske pontosan előre folytassa útját. Az „árnyék” képében ez azért
   történik, mert a hullámok be tudnak alagutazni, illetve diffrakcióval be tudnak jutni az árnyékba, így annak nem kell
   végtelenül nagyra nőnie.

Megjegyzés. Tipikus hosszskálák elektronoknál.
 • A hidrogénátmenetekből kibocsátott fény tipikus hullámhossza
                                    
                                        −7
                                    10 m
                                                          SI,
                                λ ∼ 1/α                    atomos
                                    
                                          2
                                      4π/α m ∼ (3 eV) −1   természetes.

 • A Bohr-sugár az atom méretét jellemzi, és
                                     
                                              −11 m
                                     5 × 10
                                                               SI,
                               a0 ∼ 1                           atomos,
                                     
                                       1/αm ∼ (4 keV)−1         természetes.
                                     

 • Az elektron Compton-hullámhossza az a skála, ahol párkeltés történhet, és
                                  
                                           −13 m
                            λc    4 × 10
                                                          SI,
                                ∼ α                        atomos,
                            2π   
                                    1/m ∼ (0.5 MeV)   −1   természetes.

 • A klasszikus elektronsugár annak az elektronnak a mérete, amelynél az elektrosztatikus potenciális energia megegyezik
   a tömeggel, vagyis az a skála, ahol a QED-renormálási hatások fontossá válnak. Ez
                                      
                                               −15 m
                                      3 × 10
                                                             SI,
                                re ∼ α    2                   atomos,
                                      
                                      
                                        α/m ∼ (60 MeV)    −1   természetes.
    Ez egyben a Thomson-szórás hosszskálája is.
Megjegyzés. Példák sugárzás szórására.
 • Az alacsony frekvenciájú rugalmas szórást Rayleigh-szórásnak nevezzük.
 • A nagyfrekvenciás rugalmas szórást, illetve a nemrelativisztikus szabad elektronon történő rugalmas szórást Thomson-
   szórásnak nevezzük. Ha a frekvencia elég nagy ahhoz, hogy relativisztikus korrekciókra legyen szükség, Compton-szórássá
   válik, amelyet a Klein–Nishina-formula ír le.
 • A Raman-szórás a fotonok anyagon történő rugalmatlan szórása, amely tipikusan molekulák rezgési gerjesztésének vagy
   legerjesztésének előidézésével kapcsolatos.

12.2    Parciális hullámok
Most a centrális erőpotenciál esetére összpontosítunk.

  • A Schrödinger-egyenlet megoldásai szeparálódnak:

                                           ψkℓm (x) = Rkℓ (r)Yℓm (θ, ϕ).

    A k kvantumszám az E = ℏ2 k 2 /2m összefüggésen keresztül paraméterezi az energiát. A potenciáltól távol a beeső és
    szórt hullámok hullámszáma, vagyis Rkl (r) ∝ eikr .

  • Az ukℓ (r) = rRkℓ (r) definícióval a radiális Schrödinger-egyenlet

             1 d       2 dRkℓ
                     r          + k 2 Rkℓ (r) = W (r)Rkℓ (r), u′′kℓ (r) + k 2 ukℓ (r) = W (r)ukℓ (r)
            r2 dr         dr

    ahol
                                                     ℓ(ℓ + 1) 2m
                                          W (r) =            + 2 V (r).
                                                        r2    ℏ
  • Ezért az E energiájú általános megoldás
                                            X
                                    ψ(x) =     Aℓm Rkℓ (r)Yℓm (θ, ϕ).
                                                   ℓm

    Következő feladatunk az Aℓm kifejtési együtthatók meghatározása, hogy szórási megoldást kapjunk.

  • Szabad részecske esetén az Rkℓ radiális hullámfüggvény megoldásai a jℓ (kr) és yℓ (kr) gömbi Bessel-függvények,
    ahol
                                      1                              1
                           jℓ (ρ) ≈     sin (ρ − ℓπ/2) ,   yℓ (ρ) ≈ − cos(ρ − ℓπ/2)
                                      ρ                              ρ
    ρ ≫ ℓ esetén, az y-típusú Bessel-függvények pedig szingulárisak ρ = 0-nál.

  • Mivel az eik·x beeső hullám szabad részecskét ír le, fel kell írhatónak lennie j-típusú Bessel-függvényekkel. Megmutatható,
                                             X
                                                            ∗
                                  eik·x = 4π    iℓ jℓ (kr)Yℓm (k̂)Yℓm (r̂).
                                                   ℓm

    Ezután a gömbi harmonikusok összeadási tételét használva,
                                                       4π X ∗
                                      Pℓ (cos γ) =           Y (k̂)Yℓm (r̂)
                                                     2ℓ + 1 m ℓm

    ahol γ a k és r közötti szög, azt kapjuk, hogy
                                        X
                                eik·x =    iℓ (2ℓ + 1)jℓ (kr)Pℓ (cos γ).
                                               ℓ

  • Ezután meghatározzuk az Rkℓ (r) radiális hullámfüggvény aszimptotikus viselkedését nagy r-re. Ha a V (r) potenciál
    véges r0 sugárnál levágódik, akkor a megoldások j- és y-típusú Bessel-függvények kombinációi, mivel az r < r0 tartomány
    nem érdekel bennünket; így ukℓ (r) ∼ e±ikr .

 • Ha nincs éles levágás, a hibát az ukℓ (r) = eg(r)±ikr alakban paraméterezzük, ekkor

                                           g ′′ + g ′2 ± 2ikg ′ = W (r).

    Már tudjuk, hogy önmagában a centrifugális tag Bessel-függvényeket ad, ezért azt az esetet vizsgáljuk, amikor nagy
    távolságokon a potenciál dominál, V (r) ∼ 1/rp , ahol 0 < p < 2. Mindkét oldalon a vezető tagot véve g(r) ∼ 1/rp−1
    adódik, így a g korrekciós tényező csak akkor tart nullához nagy r-re, ha p > 1. Különösen a Coulomb-potenciál esik ki,
    mert logaritmikus fáziseltolódást ad: ei log(kr) . Ez az elsőrendű WKB-közelítéssel is megmutatható.

 • Feltéve, hogy V (r) valóban gyorsabban cseng le, mint 1/r, nagy r-re írhatjuk
                                                     sin(kr − lπ/2 + δℓ )
                                          Rkℓ ∼
                                                             kr
    A δℓ fáziseltolódás értelmezéséhez jegyezzük meg, hogy szabad részecskénél a jℓ (kr) kifejtése miatt δℓ = 0 lenne.
    Így a fáziseltolódás azt mutatja meg, hogyan módosítja a potenciál aszimptotikusan a radiális fázisokat.

Végül ezeket az összetevőket kombináljuk a kívánt beeső plusz szórt állapotok előállításához.

 • Az általános megoldást felírjuk:
                                                     X
                                      ψ(x) = 4π           iℓ Aℓm Rkℓ (r)Yℓm (r̂).
                                                     ℓm

    A síkhullámot kivonva
                                       X h                              i
                                                                  ∗
                        ψscat (x) = 4π  iℓ Aℓm Rkℓ (r) − jℓ (kr)Yℓm (k̂) Yℓm (r̂).
                                         ℓm

 • Nagy r esetén a szögletes zárójelben álló mennyiség a bejövő és kimenő e−ikr /r, illetve eikr /r hullámok összegeként
   fejthető ki, és csak a kimenő komponenst akarjuk megtartani; ez
                                                             ∗
                                                Aℓm = eiδℓ Yℓm (k̂).
    adja. Ezt behelyettesítve és egyszerűsítve

                           eikr X iδℓ        ∗                eikr X
          ψscat (x) ∼ 4π         e sin(δℓ )Yℓm (k̂)Yℓm (r̂) =       (2ℓ + 1)eiδℓ sin(δℓ )Pℓ (cos θ)
                            kr                                 kr
                               ℓm                                           ℓ

    ahol a gömbi harmonikusok összeadási tételét használtuk, és k̂ = ẑ-t választottuk.

 • A fenti eredményt parciális-hullám-kifejtésnek nevezzük. A szórási amplitúdó
                                              1X
                                 f (θ, ϕ) =     (2ℓ + 1)eiδℓ sin(δℓ )Pℓ (cos θ).
                                              k
                                                 ℓ

    nem függ ϕ-től, ezért nincs z-irányú szögimpulzus, mivel a feladat szimmetrikus a ẑ tengely körüli forgatásokra.
    Ehelyett a szórt hullámokat a teljes ℓ szögimpulzus paraméterezi. Az egyes tagok m = 0 gömbi harmonikusok, és s-hullámnak,
    p-hullámnak és így tovább nevezzük őket. Mindegyik hozzájárulás jelen van a kezdeti síkhullámban, és egymástól függetlenül
    szóródik, mivel L2 megmarad.

 • A differenciális hatáskeresztmetszetben vannak interferenciatagok, a teljes hatáskeresztmetszetben azonban a Legendre-
   polinomok ortogonalitása miatt nincsenek:
                                             4π X
                                       σ=         (2ℓ + 1) sin2 δℓ .
                                             k2
                                                  ℓ

    Ez a teljes hatáskeresztmetszet parciális-hullám-kifejtése.

 • Bármely a hosszskálájú lokalizált potenciál esetén, ha ka ≲ 1, az s-hullámú szórás (ℓ = 0) dominál, és a szórt részecskék
   gömbszimmetrikusak. Ennek belátásához vegyük észre, hogy a centrifugális potenciál akkor egyenlő az energiával, amikor

                                         ℓ(ℓ + 1)ℏ2       ℏ2 k 2
                                                    = E =
                                           2ma2            2m
    aminek megoldása ℓ ≈ ka. Ha ka ≲ 1, a részecske klasszikusan egyáltalán nem érheti el a potenciált, ezért ugyanaz a
    fázisa, mint a szabad részecskének, és nincs fáziseltolódás.

 • A valóságban a fáziseltolódás ka > 1 esetén a kvantum-alagutazás miatt kicsi, de nem nulla, és exponenciálisan nullához
   csökken. Hatványfüggvény alakú, hosszú hatótávolságú potenciál esetén a fáziseltolódások ehelyett hatvány szerint csökkennek.

 • Sok kísérleti helyzetben az s-hullámú szórás dominál (például reaktorokban az atommagokon történő neutronszórás). Ilyenkor
   a V (r) potenciált bármely, ugyanazzal a δ0 értékkel rendelkező potenciállal helyettesíthetjük. Gyakori és kényelmes
   választás a deltafüggvény-potenciál.

 • Fourier-transzformációkról szerzett ismereteinkből heurisztikus eredményeket is átvehetünk, jóllehet itt a parciális-hullám-
   kifejtés Legendre-polinomokban történik. Ha a szórási amplitúdót az ℓcutoff -ig terjedő tagok dominálják, akkor egy jellegzetes
   struktúra maximális szögmérete körülbelül 1/ℓcutoff . Ha továbbá a fáziseltolódások exponenciálisan csengenek le, a szórási
   amplitúdó analitikus lesz. Egyébként általában szingularitásokat kapunk az előre irányban.

 • Minden σℓ szórási tagra érvényes a (4π/k 2 )(2ℓ + 1) korlát. Ezt unitaritási korlátnak nevezzük; egyszerűen azt fejezi ki,
   hogy nem szórhatunk ki több részecskét, mint amennyit betettünk.
