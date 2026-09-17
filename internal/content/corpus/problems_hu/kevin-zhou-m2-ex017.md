---
id: "kevin-zhou-m2-ex017"
source: "kevin-zhou"
native_id: "KZ-M2-EX017"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "hu"
translated: true
links_en: "kevin-zhou-m2-ex017"
topic: [mechanika]
subtopic: [rugalmasság, kontaktmechanika, feszültség és alakváltozás]
math_tools: [dimenzióanalízis, algebra]
format: "explanation"
kind: "example"
core_ideas: []
has_solution: false
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/M2.txt"
source_url: "sources/kevin_zhou/site/handouts/M2.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Hungarian translation of a candidate classified as Genuinely new in the Kevin Zhou overlap audit."
---

különböző mértékben és különböző irányokban; itt alig van szimmetria.

  Ehelyett becsüljük meg nagyjából a golyó alja közelében fellépő feszültséget és alakváltozást. Az asztallal közvetlenül érintkező
  részre

                                       stress ∼ F/r2 ∼ ρgR3 /r2

  mivel a normálnyomásnak ki kell egyenlítenie a gravitációs erőt. Ez a nyomás pontosan a golyó alján; az r-nél sokkal nagyobb
  magasságokban a nyomás kisebb lesz, mert nagyobb vízszintes felületen oszolhat el. Mivel a feszültség arányos az alakváltozással,
  ez azt jelenti, hogy a golyó jelentősen alakváltozó részének jellemző magassága r. (Ez a Saint–Venant-elv egyik példája, amely
  szerint az alakváltozás általában arra a helyre korlátozódik, ahol a külső erőket kifejtik.) Így ebben a tartományban az alakváltozás
  értéke

                                          strain ∼ δ/r ∼ r/R

  ahol δ a függőleges deformáció. A Young-modulus definícióját felhasználva azt kapjuk, hogy
                                                           1/3
                                                      ρgR
                                           r∝R                     .
                                                       Y




                                                    24
   Kevin Zhou                                                             Physics Olympiad Handouts



      Ezt az eredményt erő és elmozdulás segítségével is megfogalmazhatjuk. δ ∼ r2 /R, továbbá a golyót az asztal felé nyomó teljes
      erő F ∼ ρgR3 , ezért

                                             F ∝ Y R1/2 δ 3/2 .

      A visszatérítő erő nem lineáris δ-ban, ezért nem tesz eleget Hooke törvényének.

      Ahogy fentebb említettük, a kontaktmechanika azt vizsgálja, hogyan viselkednek a normál- és egyéb erők reális, deformálódó szilárd
      testek esetén. Ebben a példában a „Hertz-féle érintkezést” vizsgáltuk. További részletekért lásd Johnson Contact Mechanics,
      valamint Popov Contact Mechanics and Friction című műveit.
