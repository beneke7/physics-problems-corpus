---
id: "kevin-zhou-t2-ex012"
source: "kevin-zhou"
native_id: "KZ-T2-EX012"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "hu"
translated: true
links_en: "kevin-zhou-t2-ex012"
topic: [termodinamika és statisztikus fizika]
subtopic: [hőátadás, hővezetés, kontinuitási egyenlet]
math_tools: [integrálás, differenciálegyenletek]
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

# KZ-T2-EX012

    12. példa

    Határozzuk meg az A területű és d vastagságú téglalap alakú lemezen átfolyó állandósult
    hőáramot, ha bal és jobb végét T, illetve T + ∆T hőmérsékleten tartjuk.

    Megoldás
    A fenti ötletben ismertetett gondolatmenet szerint állandósult állapotban a lemez
    energiasűrűsége állandó, ezért ∂ 2 T /∂x2 = 0, a hőmérséklet-gradienst pedig állandónak
    tekinthetjük. Ebben az állapotban a hő egyszerűen egyenletesen áramlik át a lemezen, sehol
    sem halmozódik fel benne, éppen úgy, ahogy az áram egy ellenálláson egyenletesen folyik.
    (Mivel ez a „belső” állandósult állapot gyakran gyorsan kialakul, sok feladatban külön kimondás
    nélkül feltételezzük.)

    A lemezben tehát mindenütt ∆T /d a hőmérséklet-gradiens, így

                                                       κA∆T
                                         P = JA =           .
                                                         d
    Ez a hővezetési feladatok kulcsegyenlete.

    Megjegyzés: Folytonossági egyenletek

    A fenti eredményeket három dimenzióra is általánosíthatjuk. Ekkor a hőáramot egy vektor írja
    le:
                                          J = −κ ∇T.
    Az energiamegmaradás egyenlete
                                       ∂u
                                          = −∇ · J = κ ∇2 T.
                                       ∂t
    Az első egyenlőséget folytonossági egyenletnek nevezzük; ez adja meg általánosan, hogyan


                                                  19
    Kevin Zhou                                                                Fizikaolimpiai feladatgyűjtemény



       kapcsolódik egy megmaradó mennyiség sűrűsége az áramlásához. Például a folyadékok
       folytonossági egyenlete, amelyet az M7-ben egydimenziós alakban láttunk, három dimenzióban
       így írható:
                                                  ∂ρ
                                                     = −∇ · (ρv)
                                                  ∂t
       és a tömeg megmaradását fejezi ki. A töltés folytonossági egyenlete, amellyel az E4-ben
       találkozunk, nagyon hasonló:
                                               ∂ρ
                                                  = −∇ · J
                                               ∂t
       ahol ρ a töltéssűrűség, J pedig az áramsűrűség.
