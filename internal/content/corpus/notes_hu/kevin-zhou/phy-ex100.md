---
id: kevin-zhou-notes-phy-ex100
source: kevin-zhou-notes
native_id: "phy Example 100"
origin: "Kevin Zhou personal physics notes"
language: hu
translated: true
links_en: kevin-zhou-notes-phy-ex100
topic: [kvantumfizika]
subtopic: [szórás, rezonanciák, Green-függvények]
math_tools: [komplex-analízis, WKB-közelítés, differenciálegyenletek]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "14439-14588"
archive_layer: reference_notes
source_role: explanatory_example
---
Példa. Rezonanciák. Intuitívan a rezonancia rövid életű gerjesztés, amely szórási folyamatban jön létre. Megértésükhöz a WKB-
közelítést alkalmazzuk egy olyan potenciálra,

                                                          ℓ(ℓ + 1)ℏ2
                                     Vtot (r) = V (r) +
                                                            2mr2
amelynek r = r0 és r = r1 fordulópontok között kútja van, r = r1 és r = r2 fordulópont között pedig klasszikusan tiltott
tartománya. Definiáljuk

                                               2 r1                 1 r2
                     p                           Z                    Z
             p(r) = 2m(E − Vtot (r)), Φ =             p(r) dr, κ =         |p(r)| dr.
                                               ℏ r0                 ℏ r1

Vegyük észre, hogy Φ a kútban végzett oszcilláció hatása, ezért a kötöttállapot-energiákra

                                          Φ(En ) = 2π(n + 1/2)

teljesül. Az r < r0 tartományban exponenciálisan lecsengő megoldásból kiindulva a kapcsolási formulák a következőt adják:
                                                                              Z r
                  1       K     Φ    i −K      Φ iS(r)/ℏ−iπ/4
        u(r) = p        2e cos + e         sin     e            + c.c., S(r) =      p(r) dr
                  p(r)          2    2         2                                 r2

az r > r2 tartományban, ahol kötött állapot esetén cos(Φ/2) = 0. Tegyük fel, hogy a tiltott tartomány nagy, tehát
eK ≫ 1. Kötött állapotoktól távol az e−K tag nem járul hozzá; ugyanazt a megoldást kapjuk, mint ha egyáltalán nem lenne
potenciálkút. Különösen, ha V (r) elhanyagolható r > r2 esetén, a részecske egyáltalán nem érzékeli a hatását, így δℓ = 0.
   Most tegyük fel, hogy egy kötött állapot közelében vagyunk, E = En + δE. Az akció–szög változók elmélete szerint
                                                                δE
                                     Φ(E) = 2π(n + 1/2) +
                                                                ℏωc
és δE-ben legalacsonyabb rendig kifejtve

                                          −δE + iΓ/2
                                e2iδℓ =              ,     Γ = ℏωc e−2K .
                                          −δE − iΓ/2

adódik. Vagyis egy rezonancián áthaladva a fáziseltolódás gyorsan π-vel változik. Ezután a hatáskeresztmetszetben Lorentz-
rezonanciát kapunk:
                                                  Γ2 /4
                                  sin2 δℓ =                    .
                                            (E − En )2 + Γ2 /4
Mivel K-t nagynak feltételeztük, Γ sokkal kisebb az ℏωc energiaszintek közötti távolságnál, így a hatáskeresztmetszetnek
éles csúcsai vannak E függvényében. Ilyen csúcsok gyakoriak neutron–atommag-szórásban. Fizikailag úgy képzeljük, hogy a
beeső részecske átjut a gáton, egy 1/Γ időskáláig „bennragad”, miközben oda-vissza pattog, majd kilép. Ez a kvantumtérelméleti
bomló részecskék keletkezésének fizikai modellje.

12.3    Green-függvények
Ebben a szakaszban néhány formális definíciót adunk, amelyeket a következő szakaszban használunk. Elektromágnesességből vett
heurisztikus példával kezdünk.
269 12. Szórás

 • Sematikusan Maxwell-egyenleteink □A = J alakúak. A hozzájuk tartozó homogén egyenlet □Ah = 0, a nemhomogén egyenlet
   általános megoldása pedig
                                   Z
                   A(x) = Ah (x) + dx′ G(x, x′ )J(x′ ), □G(x, x′ ) = δ(x − x′ )
    ahol □ az x koordinátára hat.

 • Általában azt látjuk, hogy a nemhomogén egyenletek megoldásai egy homogén megoldás hozzáadásáig nem egyértelműek.
   Különösen a Green-függvényt is nemhomogén egyenlet definiálja, ezért az sem egyértelmű; gyakran határfeltételekkel
   pontosítjuk.

 • Most azt az esetet tekintjük, amikor a forrást maga A határozza meg, J = σA. Ekkor Maxwell-egyenleteink
                                   □A = σA, (□ − σ)A = 0.
    Homogén egyenlethez jutottunk, de A-t most önkonzisztensen kell meghatározni; általában egy beeső és egy szórt tag összege
    lesz, amelyek mindketten áramot keltenek.

 • Konkrét példaként tekintsük egy beeső hullám visszaverődését egy tükörről, amely nagy σ-jú tartomány. A szokásos eljárás
   olyan □A = 0 megoldás keresése, amely beeső hullámot tartalmaz, és teljesíti a tükörnél előírt határfeltételt. A fentiek
   szerint azonban önkonzisztensen is megoldhatjuk a feladatot, A = Ainc + Ascat felbontással, ahol □A = σA. Ekkor azt kapnánk,
   hogy Ascat a tükör belsejében kioltja Ainc -et, és visszavert hullámot is tartalmaz.

 • Hasonlóképpen, H0 = p2 /2m definícióval a potenciálszórás időfüggetlen Schrödinger-egyenlete
                             (H0 + V )ψ = Eψ, (E − E0 )ψ = V ψ.
    A második egyenlet formálisan olyan, mint a □A = σA egyenlet. Úgy képzelhetjük, hogy ψ = ψinc + ψscat megoldást keresünk,
    ahol a két tag együtt hozza létre a V (x)ψ(x) „forrástagot”.

 • Ha ismerjük ψ Green-függvényét, ψ-re nem kapunk zárt alakú megoldást. Ehelyett ψ önmagával kifejezett önkonzisztens
   egyenletét kapjuk, amelyet sorba fejthetünk sorfejtett megoldás előállításához.

Most bevezetjük a Schrödinger-egyenlet időfüggő Green-függvényeit.

 • A nemhomogén, időfüggő Schrödinger-egyenlet
                                          
                                  ∂
                                iℏ − H(t) ψ(x, t) = S(x, t).
                                  ∂t

    A Green-függvényt úgy definiáljuk, hogy teljesítse ezt az egyenletet az iℏδ(t − t′ )δ 3 (x − x′ ) forrásra, ahol az iℏ
    pusztán konvenció. A forrásokat mindig vesszős koordinátákkal jelöljük.

 • Korábban a propagátort így definiáltuk:

                                       K(x, t, x′ , t′ ) = ⟨x|U (t, t′ )|x⟩.

    Ez nem Green-függvény, mivel a homogén Schrödinger-egyenletet elégíti ki; ehelyett a hatásokat terjeszti előre és hátra
    az időben.
270 12. Szórás

  • A kimenő (vagy retardált) időfüggő Green-függvény

                                    K+ (x, t, x′ , t′ ) = Θ(t − t′ )K(x, t, x′ , t′ ).

    A hozzáadott lépcsőfüggvény deriváláskor a kívánt deltafüggvényt adja. Ez a Green-függvény minden t < t′ esetén nulla.
    Vízhullámos hasonlattal egy korábban nyugodt tó felszínét írja le, amelyet az (x′ , t′ ) pontban megérintünk.

  • A kimenő Green-függvényt használva a megoldás
                                            Z ∞      Z
                                                   ′
                      ψ(x, t) = ψh (x, t) +     dt     dx′ K+ (x, t, x′ , t′ )S(x′ , t′ )
                                                    −∞

    alakú. Ha kauzális megoldást akarunk, ψh (x, t)-nek is nullának kell lennie a gerjesztés kezdete előtt, ez azonban azt
    jelenti, hogy minden időpontban nullának kell lennie. Ezért
                                        Z t      Z
                                               ′
                             ψ(x, t) =      dt     dx′ K(x, t, x′ , t′ )S(x′ , t′ )
                                              −∞

    az egyetlen kauzális megoldás.

  • Hasonlóan definiáljuk a bejövő (vagy advanszált) Green-függvényt:

                                   K− (x, t, x′ , t′ ) = −Θ(t′ − t)K(x, t, x′ , t′ ).

    t → 0− esetén −δ 3 (x − x′ )-hez tart. Vízhullámokkal ez olyan hullámokat ír le, amelyek t < t′ esetén kialakulnak egy
    tóban, majd t = t′-kor egy tüskévé állnak össze, amelyet az ujjunk elnyel. Gyakorlati feladatokhoz ezért a kimenő Green-
    függvényt részesítjük előnyben.

  • A K̂± Green-operátorokat úgy definiáljuk, hogy

                                        K± (x, t, x′ , t′ ) = ⟨x|K̂± (t, t′ )|x′ ⟩

    és teljesítsék

                  K± (t, t′ ) = ±Θ(±(t − t′ ))U (t, t′ ),     (iℏ − H(t)) K̂± (t, t′ ) = iℏδ(t − t′ ).

    Ez az alak gyakran hasznosabb, mert nem részesíti előnyben a helybázist. Green-operátorok sokkal szélesebb Hilbert-terű
    rendszerekre is definiálhatók, például spinrendszerekre vagy térelméletekre.
