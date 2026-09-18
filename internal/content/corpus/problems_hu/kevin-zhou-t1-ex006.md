---
id: "kevin-zhou-t1-ex006"
source: "kevin-zhou"
native_id: "KZ-T1-EX006"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "hu"
translated: true
links_en: "kevin-zhou-t1-ex006"
topic: [termodinamika és statisztikus fizika]
subtopic: [kinetikus gázelmélet, ekvipartíció tétele, kvantumenergiaszintek]
math_tools: [integrálás, valószínűségszámítás és statisztika]
format: "explanation"
kind: "example"
core_ideas: []
has_solution: false
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/T1.txt"
source_url: "sources/kevin_zhou/site/handouts/T1.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Hungarian translation of a candidate classified as Genuinely new in the Kevin Zhou overlap audit."
---

# KZ-T1-EX006

  6. példa

  Egy E = p2 /2m energiájú, egy dimenzióban két merev fal között pattogó szabad részecske
  energiaszintjei En = n2 E0, ahol n = 1, 2, . . ., amint azt az X1-ben megmutatjuk. Mutassuk meg,
  hogy nagy hőmérsékleten az átlagos energia összhangban van az ekvipartíció tételével.

  Megoldás
                                                                       2
  Az n-edik energiaszinten tartózkodás valószínűsége arányos e−n E0 /kB T -vel. Ezért a
  valószínűségi eloszlást normálva maga a valószínűség
                                                 2
                                           e−n E0 /kB T
                                    pn = P∞    −m2 E0 /kB T
                                                            .
                                          m=1 e




                                               11


   Kevin Zhou                                                                 Fizikaolimpiai feladatgyűjtemény



      Az energia átlagértéke tehát
                                      ∞                  P∞ 2       −n2 E0 /kB T
                                                          n=1 n E0 e
                                      X
                              ⟨E⟩ =         n2 E0 pn =    P∞ −n2 E /k T .
                                                            n=1 e
                                                                      0  B
                                      n=1

      Nagy hőmérsékleten ennek a kvantummechanikai eredménynek az ekvipartíció tételének
      klasszikus eredményére kell visszavezetnie. Vegyük észre, hogy ilyen hőmérsékleten n
      jellemző értékei nagyon nagyok lesznek. Ezért az n szerinti összegeket folytonos integrálokként
      kezelhetjük:
                                 R∞       2     −n2 E0 /kB T
                                                              R ∞ 2 −x2
                                  0 R dn n E0 e                    x e   dx
                          ⟨E⟩ ≈       ∞     −n 2 E /k T      = 0R ∞ −x2     kB T
                                     0 dn e                      0 e    dx
                                                  0  B


                                                            p
      ahol az x = n2 E0 /kB T dimenzió nélküli változóra tértünk át. Ezen integrálok bármelyikének
      kiszámítása trükkös, de parciális integrálással kapcsolatot teremthetünk közöttük:
                            Z ∞              Z ∞
                                                                  1 ∞ −x2
                                                                   Z
                                      2                2     x
                                x2 e−x dx =      (2xe−x dx) =           e    dx.
                             0                0              2    2 0

      Így az integrálok aránya 1/2, ezért az átlagos energia a vártnak megfelelően kB T /2.
