---
id: kevin-zhou-notes-phy-ex079
source: kevin-zhou-notes
native_id: "phy Example 079"
origin: "Kevin Zhou personal physics notes"
language: hu
translated: true
links_en: kevin-zhou-notes-phy-ex079
topic: [kvantumfizika]
subtopic: [szögimpulzus]
math_tools: [lineáris-algebra, csoportelmélet]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "9172-9255"
archive_layer: reference_notes
source_role: explanatory_example
---
Példa. A |+⟩ ket a +ẑ irányba mutat, mivel ⟨+|σ|+⟩ = ẑ és σz |+⟩ = |+⟩.
Hasonlóan definiálhatjuk a tetszőleges irányba mutató keteket:
                                             |n̂, +⟩ = U |+⟩.
Az n̂ gömbi koordinátáit felírva és az Euler-szögek szerinti felbontást alkalmazva:
                                                            −iα/2         
                                                            e       cos β/2
                         U = U (ẑ, α)U (ŷ, β), |n̂, +⟩ =                   .
                                                             eiα/2 sin β/2
Az adjungált formulát alkalmazva azt kapjuk, hogy
                              n̂ · σ|n̂, +⟩ = |n̂, +⟩,   ⟨n̂, +|σ|n̂, +⟩ = n̂.
Ezután az n̂-re merőleges bármely irányú spin várható értéke zérus.
Most a su(2) általános reprezentációit vizsgáljuk egy Hilbert-téren. Vagyis olyan operátorhármasokat
keresünk, amelyek kielégítik a szögimpulzus kommutációs relációit. Ha ezek az operátorok adottak,
exponenciálással visszakaphatjuk a forgási operátorokat; megfordítva, a szögimpulzus-operátorokhoz
a θ = 0 helyen végzett deriválással juthatunk vissza.

  • Először konstruáljuk meg az
                                             J 2 = J12 + J22 + J32 .
    operátort, amely kommutál J-vel; az ilyen operátort Casimir-operátornak nevezzük. Következésképpen
    J 2 J bármely függvényével, így a forgási operátorokkal is kommutál.
  • A fenti struktúra mellett J 2 és J3 egyidejű sajátketjeit, |am⟩-ket vizsgáljuk, amelyek sajátértékei
    ℏ2 a, illetve ℏm. Mivel J 2 és J3 Hermitikus, a és m valós, továbbá mivel J 2 nemnegatív definit,
    a ≥ 0. Az egyszerűség kedvéért feltesszük, hogy irreducibilis reprezentációval (irrep) dolgozunk;
    fizikailag ezt azzal biztosíthatjuk, hogy feltesszük, J 2 és J3 egy CSCO-t alkot.
  • Bevezetjük a létraoperátorokat:
                  J± = J1 ± iJ2 ,    [J3 , J± ] = ±ℏJ± ,    [J+ , J− ] = 2ℏJ3 ,   [J 2 , J± ] = 0.
    Ezek a következő relációkat elégítik ki:
              1
         J 2 = (J+ J− + J− J+ ) + J32 ,     J− J+ = J 2 − J3 (J3 + ℏ),       J+ J− = J 2 − J3 (J3 − ℏ).
              2
    Ebben a beállításban a J± formális szerepe nagyon hasonló a QHO a és a† operátoraiéhoz.
171 7. Szögimpulzus


  • Ezután, a QHO-hoz hasonlóan, a normákat vizsgáljuk. Ekkor

                                ⟨am|J− J+ |am⟩ = ℏ2 (a − m(m + 1)) ≥ 0

    és hasonlóan
                                         ℏ2 (a − m(m − 1)) ≥ 0.
    Ezért a ≥ max(m(m + 1), m(m − 1)) szükséges. Ha |m| maximális értéke j, akkor a hozzá tartozó
    a értéke j(j + 1). A kényelem kedvéért az állapotokat ezután j és m értékekkel jelöljük.

  • Az első fenti egyenlet ekkor

                              ⟨jm|J− J+ |jm⟩ = ℏ2 (j − m)(j + m + 1) ≥ 0

    alakú, és egyenlőség akkor áll fenn, ha j = m. (A másik esetet a második egyenlet kizárja.) A
    második egyenlet hasonló vizsgálatával arra jutunk, hogy

                            J+ |jm⟩ = 0 iff m = j,      J− |jm⟩ = 0 iff m = −j.

  • Végül a kommutációs relációk alapján azt látjuk, hogy a J± alkalmazása nem változtatja meg a j
    értékét, viszont 1-gyel növeli vagy csökkenti m-et. Ebből következik, hogy m − j egész szám;
    ellenkező esetben a felhúzó operátort addig alkalmazhatnánk, amíg a fenti egyenlőtlenségeket meg
    nem sértjük. Hasonlóan m − (−j) is egész szám. Ezért 2j egész szám, és m = −j, . . . , +j.
    Ezek a su(2) összes irrepjei.

Most, hogy megtaláltuk az összes irrepet, áttérünk a számításokra és az alkalmazásokra.

  • A fenti normaszámításból azt kapjuk, hogy
                 p                                                  p
      J+ |jm⟩ = ℏ (j − m)(j + m + 1)|j, m + 1⟩,          J− |jm⟩ = ℏ (j + m)(j − m + 1)|j, m − 1⟩.

    A |jm⟩ fázisszabadságát felhasználtuk arra, hogy minden lehetséges fázistényezőt nullára állítsunk.
    Ezután
                                     s                j−m
                                          (j + m)!     J−
                              |jm⟩ =                             |jj⟩.
                                        (2j)!(j − m)! ℏ

  • A fentiek alapján ismerjük a J± mátrixelemeit, valamint J3 mátrixelemeit is:

                                      ⟨j ′ m′ |J3 |jm⟩ = ℏδj ′ j δm′ m m.

    Ezután egyszerűen felírhatjuk az összes J mátrixelemeit, és így J bármely függvényének mátrixát,
    a forgási operátorokat is beleértve.

Megjegyzés. A megjelenő j értékeket minden fizikai helyzetben külön kell meghatározni. Ha egy
részecske centrális erőtérbeli mozgását vizsgáljuk, kiderül, hogy csak az egész j értékek számítanak.
P-hullámú szórás esetén j = 1 jelenik meg. Egy foton spinállapotát (nagyjából) j = 1 írja le, két
elektron spinállapotát viszont j = 0, 1.
172 7. Szögimpulzus
