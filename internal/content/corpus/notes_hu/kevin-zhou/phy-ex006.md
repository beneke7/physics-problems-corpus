---
id: kevin-zhou-notes-phy-ex006
source: kevin-zhou-notes
native_id: "phy Example 006"
origin: "Kevin Zhou personal physics notes"
language: hu
translated: true
links_en: kevin-zhou-notes-phy-ex006
topic: [klasszikus mechanika, merevtest-mozgás]
subtopic: [forgásmátrixok, tehetetlenségi tenzor]
math_tools: [lineáris algebra, vektoranalízis]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "581-679"
archive_layer: reference_notes
source_role: explanatory_example
---

Példa. R(t) explicit képletének meghatározásához vegyük észre, hogy Ṙ = ωR. A naiv megoldás az
exponenciális lenne, de mivel ω különböző időpontokban nem kommutál önmagával, az út szerint
rendezett exponenciálist kell használnunk:                         Z                   t
                                      R(t) = P exp                   ω(t′ )dt′ .
                                                             0
Például ennek másodrendű tagja
                                  Z t′′  Z t
                                                        ′′   ′′
                                                     ω(t ) dt            ω(t′ ) dt′
                                        0       t′
ahol a ω-k későbbitől a korábbi felé vannak rendezve. Amikor t szerint deriválunk,
csak a dt′′ integrált érinti, amelyből a kívánt módon ω emelkedik ki balról. Ez az exponenciális
művelet az SO(3)-beli R forgásokat a so(3)-beli infinitezimális ω forgásokkal kapcsolja össze.


Most a kinematikáról áttérünk a dinamikára.

 • A v = ω × r összefüggést használva a kinetikus energia
                        1X         1X                 1X
                           mi v2 =    mi ∥ω × ri ∥2 =    mi ω 2 ri2 − (ri · ω)2 .

                  T =
                        2          2                  2
    ebből következik, hogy
                                                   1
                                                T = ωa Iab ωb
                                                   2
    ahol Iab a szimmetrikus tenzor
                                            X
                                                mi ri2 δab − (ri )a (ri )b

                                    Iab =
                                            i

    amelyet tehetetlenségi tenzornak nevezünk. Mivel ω komponensei a testhez kötött rendszerben vannak, ezért az itt szereplő I és ri komponensei is
    ebben a rendszerben értendők; így az Iab állandó.

 • Expliciten, egy ρ(r) tömegsűrűségű folytonos merev test esetén
                                            2
                                             y + z2
                                                                      
                                 Z                     −xy      −xz
                            I = d3 r ρ(r)  −xy      x2 + z 2   −yz  .
                                              −xz      −yz     x + y2
                                                                2


 • Mivel I szimmetrikus, a testkoordináta-rendszert elforgathatjuk, hogy diagonalizáljuk. A sajátvektorokat
   főtengelyeknek, az Ia sajátértékeket pedig fő tehetetlenségi nyomatékoknak nevezzük. Mivel T
   nemnegatív, I pozitív szemidefinit, ezért Ia ≥ 0.

 • A párhuzamos tengelyek tétele szerint, ha I0 a tömegközéppont körüli tehetetlenségi tenzor, akkor a
   c pont körüli tehetetlenségi tenzor

                                   (Ic )ab = (I0 )ab + M (c2 δab − ca cb ).

    A bizonyítás hasonló a kétdimenziós párhuzamos tengelyek tételéhez; a
       P
    mi ri-vel arányos tagok eltűnnek. Ez az a többlethozzájárulás, amelyet a tehetetlenségi tenzorhoz akkor kapnánk, ha a test
    tömege teljes egészében a tömegközéppontban lenne.

 • Hasonlóan, egy szabadon forgó test haladó és forgó mozgása „faktorizálódik”. Ha a
   tömegközéppont helye R(t), akkor
                                           1       1
                                        T = M Ṙ2 + ωa Iab ωb .
                                           2       2
    Ez azt jelenti, hogy a dinamikában valóban figyelmen kívül hagyhatjuk a tömegközéppont mozgását.

 • A perdület
                  X                  X                     X
               L=     m i r i × vi =   mi ri × (ω × ri ) =   mi (ri2 ω − (ω · ri )ri ).

   Ez alapján felismerjük
                                                    1
                                               T = ω · L.
                                         L = I ω,
                                                    2
    Általános I esetén a perdület és a szögsebesség nem párhuzamos.


  • A mozgásegyenlet meghatározásához a tömegközépponti rendszerben használjuk a dL/dt kifejezést:

                                      dLa         dea   dLa
                                0=        ea + La     =     ea + La ω × ea .
                                       dt          dt    dt

    Mindkét oldalt eb-vel skalárisan szorozva 0 = L̇a + ϵaij ωI Lj adódik. Főtengelyek esetén (L1 = I1 ω1 ),

                                           I1 ω̇1 + ω2 ω3 (I3 − I2 ) = 0

    valamint a ciklikus permutációk. Ezek az Euler-egyenletek. Forgatónyomaték esetén
    a forgatónyomaték komponensei (a főtengelyrendszerben) a jobb oldalon jelennek meg.

Most a szabad pörgettyűk mozgását elemezzük. Az L, ω és
e3 vektorok időfejlődését vizsgáljuk. A testhez kötött rendszerben e3 állandó és felfelé mutat; a térbeli rendszerben L állandó, és az egyszerűség kedvéért
szintén felfelé mutatónak választjuk. Általában tudjuk, hogy L és 2T = ω · L állandó.
