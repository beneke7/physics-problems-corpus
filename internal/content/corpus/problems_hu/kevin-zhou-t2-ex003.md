---
id: "kevin-zhou-t2-ex003"
source: "kevin-zhou"
native_id: "KZ-T2-EX003"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "hu"
translated: true
links_en: "kevin-zhou-t2-ex003"
topic: [termodinamika]
subtopic: [hőkapacitások, első főtétel, parciális deriváltak, ideális gáz]
math_tools: [analízis, parciális deriválás]
format: "explanation"
kind: "example"
core_ideas: []
has_solution: false
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/T2.txt"
source_url: "sources/kevin_zhou/site/handouts/T2.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Hungarian translation of a candidate classified as Genuinely new in the Kevin Zhou overlap audit."
---

# KZ-T2-EX003

   3. példa: Hőkapacitások

   Az állandó térfogaton, illetve állandó nyomáson vett hőkapacitás definíciója

                                           ∂Q                  ∂Q
                                   CV =         ,       CP =        .
                                           ∂T V                ∂T P

   Határozzunk meg egy CP − CV -re vonatkozó képletet P , V , T és a belső energia U segítségével.

   Megoldás
   A félreértések elkerülése érdekében ismét megjegyezzük, hogy a fenti parciális deriváltas jelölés nem jelenti azt,
   hogy Q állapotfüggvény. Csupán azt jelenti, hogy a hőátadás egy kis d̄Q növekménye




                                                    3
    Kevin Zhou                                                               Physics Olympiad Handouts



       összefüggésbe hozható P , V és T kis növekményeivel a következő módon:

                                               ∂Q                ∂Q
                               d̄Q = CV dT +        dV = CP dT +      dP.
                                               ∂V T              ∂P T

       Magának a feladatnak a megoldásához alkalmazzuk a 2. példában levezetett második azonosságot:

                                                       ∂Q ∂V
                                          CP = CV +              .
                                                       ∂V T ∂T P

       Ahhoz, hogy ezt U-val írjuk fel, felhasználjuk a termodinamika első főtételét,

                                             d̄Q = dU + P dV.

       A d̄Q-t és a dU-t a dV és dT differenciálok szerint kifejtve leolvashatjuk,

                                  ∂Q     ∂U               ∂Q     ∂U
                                       =      ,                =      + P.
                                  ∂T V   ∂T V             ∂V T   ∂V T

       Az első eredmény egyszerűen azt mondja ki, hogy CV ekvivalens módon a (∂U/∂T )|V mennyiséggel is definiálható.
       A második eredményt behelyettesítve azt kapjuk, hogy
                                                             
                                                    ∂U          ∂V
                                       CP − CV =         +P           .
                                                    ∂V T        ∂T P

       Ez valójában meglehetősen intuitív. Az állandó nyomáson betáplálandó többlethő, amikor megengedjük a térfogat
       változását, két forrásból származik. Először pótolnunk kell a P dV munka miatt elvesztett energiát. Másodszor meg
       kell adnunk a gáz kitágulásához természeténél fogva szükséges energiát, vagyis munkát kell végeznünk a gázmolekulák
       közötti vonzó erők ellenében. (Ez a második tag definíció szerint nulla ideális gáz esetén.) Ha azonban a parciális
       deriváltak rendező kerete nélkül próbálnánk megmutatni ezt az eredményt, könnyen hibázhatnánk.
