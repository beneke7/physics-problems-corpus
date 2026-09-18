---
id: "kevin-zhou-m2-ex001"
source: "kevin-zhou"
native_id: "KZ-M2-EX001"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "hu"
translated: true
links_en: "kevin-zhou-m2-ex001"
topic: [mechanika]
subtopic: [Newton-törvények, súrlódás, kötélerő, testek-rendszere]
math_tools: [algebra]
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

1. példa

    Hat testet merev rudakkal vízszintes sorba kötünk, majd egy µ súrlódási együtthatójú asztalra helyezünk. A testek tömege m,
    és a bal szélső testet F erővel húzzuk, ezért a testek balra csúsznak. Határozzuk meg a középen lévő rúdban ébredő húzóerőt.

    Megoldás
    Itt hat test és öt rúd van, mindegyikben eltérő húzóerővel, ezért a közvetlen elemzéshez hat egyenletből álló rendszert kellene
    megoldani. Ehelyett először tekintsük mind a hat testet egyetlen testnek; ezt megtehetjük, mert a merev rudak arra kényszerítik
    őket, hogy együtt mozogjanak. Az össztömeg 6m, és a Newton második törvényét alkalmazva
                                                           F
                                  F − 6mgµ = 6ma,         a=  − µg.
                                                          6m
    Ezután a jobb szélső három testet tekintsük egyetlen testnek. Össztömegük 3m, gyorsulásuk ugyanaz az a, amelyet az előbb
    kiszámítottunk. Erre a rendszerre két vízszintes erő hat: a húzóerő és a súrlódási erő. Newton második törvénye szerint
                                           T − 3mgµ = 3ma
    amiből T-re megoldva
                                                        F
                                                T =       .
                                                        2


                                                    1


    Kevin Zhou                                                             Physics Olympiad Handouts



       Ez szemléletes, mert bármely két szomszédos húzóerő különbsége ugyanakkora; ez az az erő, amelyet az egyes testek
       gyorsítására kell fordítani. Így a középső rúdnak csak a testek felét kell gyorsítania, ezért húzóereje feleakkora.

       Azért hagyhattuk figyelmen kívül a másik négy rúdban ébredő húzóerőt, mert ezek egyetlen feladata, hogy biztosítsák a testek
       azonos gyorsulással való mozgását. Miután ezt feltételezzük, a húzóerők konkrét értékei nem számítanak; egyszerűen nagyobb
       léptékben tekinthetünk a rendszerre, és megfeledkezhetünk róluk. Ez ahhoz hasonló, hogy az egyes testeken belül is vannak
       belső húzóerők, amelyek egyben tartják őket, de ezek részleteivel ritkán kell foglalkoznunk.

       3. ötlet
       Ha egy olyan feladatot oldunk meg, amelyben egy test éppen megcsúszni készül egy másikon, állítsuk a súrlódási erőt a
       maximális µN értékre, és tételezzük fel, hogy a csúszás még nem kezdődött meg, ezért a két test együtt mozog. Ugyanez az
       ötlet alkalmazható azokra a feladatokra is, amelyek azt kérdezik, mekkora a test mozgásba hozásához szükséges minimális erő,
       illetve a mozdulatlanul tartásához szükséges minimális erő.
