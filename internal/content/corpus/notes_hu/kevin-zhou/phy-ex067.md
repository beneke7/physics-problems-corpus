---
id: kevin-zhou-notes-phy-ex067
source: kevin-zhou-notes
native_id: "phy Example 067"
origin: "Kevin Zhou personal physics notes"
language: hu
translated: true
links_en: kevin-zhou-notes-phy-ex067
topic: [kvantumfizika]
subtopic: [Berry-fázis, Born–Oppenheimer-közelítés, elektromágneses terek]
math_tools: [differenciálegyenletek, kalkulus, geometria]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "7420-7571"
archive_layer: reference_notes
source_role: explanatory_example
---

Példa. Egy s spinű részecske rögzített nagyságú mágneses térben. A paramétertér S 2 a mágneses
tér terében van. Ebben a térben az állapotokat definiálhatjuk:

                                |θ, ϕ, m⟩ = eiϕm e−iϕSz e−iθSy |0, 0, m⟩.

Ez potenciálisan szinguláris θ = 0-nál és θ = π-nél, a járulékos fázistényező azonban biztosítja,
hogy θ = 0-nál ne legyen szingularitás. A Berry-kapcsolat

                                       A(m) = m(cos θ − 1) dϕ

közvetlen deriválással adódik, és térerőssége
                                                      Z
                                    (m)
                                   Fϕθ = m sin θ,              F = 4πm.
                                                          S2

Így a B-térben m-mel arányos erősségű mágneses monopólus van, az állapotok és az A(m) szingularitása
pedig a Dirac-húr következménye.
Most a Born–Oppenheimer-közelítést tekintjük, amelynek fontos alkalmazása.

 • A molekulák elméletében az alapvető Hamilton-operátor tartalmazza az atommagok és az elektronok
   kinetikus energiáját, valamint a közöttük fellépő Coulomb-kölcsönhatásokat. Van egy
   κ ∼ (m/M )1/4 kis paraméter, ahol m az elektron tömege, M pedig az atommagok tömege.

 • Pontos tárgyalásban κ rendjei szerint fejtenénk. Kétatomos molekulákra például közvetlenül
   megmutathatjuk, hogy az elektronikus gerjesztések energiája E0 = e2 /a0 nagyságrendű, ahol a0
   a Bohr-sugár; a rezgési módusok energiája κ2 E0, a forgási módusoké pedig κ4 E0 nagyságrendű.
   Ezek a tulajdonságok minden molekulára általánosíthatók.

 • Egyszerűbb közelítés, ha csak megjegyezzük, hogy ha az elektronoknak és az atommagoknak körülbelül
   azonos a kinetikus energiájuk, akkor az atommagok sokkal lassabban mozognak. Emellett a bizony-
   talansági elv gyengébb korlátozásokat ró a helyükre és impulzusukra. Ezért az atommagok R helyzetét
   klasszikusnak tekinthetnénk, és az elektronokra a következő Helec (r, p; R) Hamilton-operátort
   írhatnánk:
                                                                                
                                X p2        2
                                          e      X       1        X      Zα
                                    i
                        Helec =       +                          −               .
                                   2m 4πϵ0            |ri − rj |      |ri − Rα |
                                 i                 i̸=j                  iα

    A teljes Hamilton-operátor
                                                    X P2                e2 X Zα Zβ
                                                               α
                     H = Hnuc + Helec ,    Hnuc =                  +                   .
                                                     α
                                                          2Mα          4πϵ0 |Rα − Rβ |
                                                                              α̸=β

 • A Helec R-beli változásaira alkalmazva az adiabatikus tételt, az elektronokra külön sajátfüggvényeket
   és energiákat kapunk:

                                            ϕn (r; R),     En (R)

    Ezért a teljes rendszer hullámfüggvényét felírhatjuk:
                                                X
                                         |Ψ⟩ =     |Φn ⟩|ϕn ⟩
                                                     n

    ahol |Φn ⟩ atommag-hullámfüggvény. A Schrödinger-egyenlet

                                        (Hnuc + Helec )|Ψ⟩ = E|Ψ⟩.
140 5. A kvantummechanika alapjai


 • Ennek az atommagokra vonatkozó effektív Schrödinger-egyenletté alakításához balról ⟨ϕm |-vel
   hatunk, így
                             X
                                ⟨ϕm |Hnuc |ϕn Φn ⟩ + Em (R)|ϕm ⟩ = E|ϕm ⟩.
                                 n

      Naivan Hnuc diagonális az elektron-térben, így az atommagok effektív Schrödinger-egyenlete
      egyszerűen a közönséges Schrödinger-egyenlet Em (R) járulékos energiával. Ez mennyiségileg
      megmutatja, hogyan vonzzák egymást az atommagok az elektronikus energiaszintek változásán
      keresztül egy kémiai kötésben.

 • Pontosabban Hnuc tartalmazza a ∇2α operátort, amely az elektronikus hullámfüggvényekre is hat.
   A szorzási szabály alkalmazásával és az identitás beillesztésével
                                 X
             ⟨ϕm |∇2α |ϕn Φn ⟩ =   (δmk ∇α + ⟨ϕm |∇α |ϕk ⟩) (δkn ∇α + ⟨ϕk |∇α |ϕn ⟩) |Φn ⟩.
                                     k

      A nem diagonális elemeket az elektronikus energiák különbségei elnyomják, amelyekről feltesszük,
      hogy nagyok. Az elektronikus hullámfüggvény deriválása azonban a közönséges deriváltakat
      kovariáns deriváltakká alakítja, így
                               X ℏ2                  e 2 X Zα Zβ
                       eff
                      Hnuc =         (∇α − iAα )2 +                  + En (R).
                               α
                                 2Mα                4πϵ0  |Rα − Rβ |
                                                             α̸=β

      Az elektronok mozgása effektív mágneses teret biztosít az atommagok számára.

5.4     Részecskék elektromágneses térben
Most egy elektromágneses térben lévő részecske kvantummechanikáját állítjuk fel.

 • Egy elektromágneses térben lévő részecske Hamilton-operátora

                                                  (p − qA)2
                                             H=             + qϕ
                                                     2m
      ugyanaz, mint a klasszikus mechanikában. Itt p a kanonikus impulzus, ezért −iℏ∇-nek felel meg.

 • Rendezési kétértelműség lép fel, mivel kvantumszinten A és p nem kommutál. Az A-val lineáris tagot
   p · A + A · p alakúnak választjuk, mivel ez az egyetlen olyan kombináció, amelytől H Hermitikus
   lesz; ez ⟨ψ|H|ψ⟩ valós voltának megkövetelésével ellenőrizhető. Másik lehetőség, hogy egyszerűen
   Coulomb-mértéket választunk, ∇ · A = 0-val, mert ebben az esetben p · A = A · p.

 • A kinetikus impulzus π = p − qA, a sebességoperátor pedig v = π/m. A valószínűség kontinuitási
   egyenletében ennek a sebességoperátornak kell szerepelnie, mivel ez felel meg a klasszikus
   sebességnek.

 • Egy α tetszőleges függvény által megadott mértéktranszformáció alatt, ahol α-t mértékskalárnak
   nevezzük,

                                         ϕ → ϕ − ∂t α,   A → A + ∇α.

      Ennek következtében a Hamilton-operátor nem mértékinvariáns.
141 5. A kvantummechanika alapjai


  • Ahhoz, hogy a Schrödinger-egyenlet mértékinvariáns legyen, a hullámfüggvényt is transzformálnunk
    kell:
                                           ψ → eiqα/ℏ ψ.
    Ha a Schrödinger-egyenlet a régi potenciálra és hullámfüggvényre teljesül, akkor a mértéktransz-
    formált potenciálra és hullámfüggvényre is teljesül. Durván szólva az extra eiqα/ℏ tényező
    „áthúzható” az idő- és térderiváltakon, miközben extra ∂µ α tagokat hagy maga után, amelyek
    pontosan kioltják a mértéktranszformáció további tagjait.

  • Mértékelméletekben a gondolatmenet fordított irányú. Abból, hogy a ψ → eiqα/ℏ ψ transzformációt
    a rendszer szimmetriájává akarjuk tenni, arra következtetünk, hogy a deriváltat (itt p-t)
    kovariáns deriválttá (itt π-vé) kell alakítani.

  • A hullámfüggvény fázisának nincs közvetlen fizikai jelentése, mivel nem mértékinvariáns. Hasonlóan
    a kanonikus impulzus sem mértékinvariáns, de a kinetikus impulzus π igen. A részecske Heisenberg-
    képben teljesíti a Lorentz-erőtörvényt, ha π-val dolgozunk.

  • Az, hogy a v sebességkomponensei nem kommutálnak, közvetlenül megérthető a Poisson-zárójelekről
    alkotott intuíciónkból: ẑ-val párhuzamos mágneses térben az x̂ irányban mozgó részecske ŷ
    irányba térül el.

Megjegyzés. Ahogy fent említettük, a qA-ra „potenciális impulzusként” gondolhatunk. Tegyük fel
például, hogy egy részecske egy szolenoid közelében van, amelyet nagyon gyorsan bekapcsolunk. A
Schrödinger-egyenlet szerint p nem változik eközben, ha a folyamat elég gyors. A részecske ezzel
szemben véges impulzuslökést kap, mivel
                                                     ∂A
                                              E=−        .
                                                      ∂t
Ez ellentétes irányban változtatja meg a kinetikus és a potenciális impulzust, miközben a kanonikus
impulzus változatlan marad. Ez a kép a töltések és monopólusok kölcsönhatásában is működik, mivel
transzlációs invariancia áll fenn, és jelentős betekintést ad a mozgásegyenletekbe.

Az elektromágneses terek érdekes topológiai jelenségekhez vezetnek.
