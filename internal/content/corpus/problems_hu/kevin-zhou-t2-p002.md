---
id: "kevin-zhou-t2-p002"
source: "kevin-zhou"
native_id: "KZ-T2-P002"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "hu"
translated: true
links_en: "kevin-zhou-t2-p002"
topic: [Hőtan]
subtopic: [hőkapacitások, valós gázok, Maxwell-relációk]
math_tools: [parciális deriválás, differenciálszámítás]
format: "open-ended"
kind: "problem"
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

# KZ-T2-P002

[3] 2. feladat. [A] Szemléltessük az előző példa néhány következményét.

     (a) Egyatomos ideális gázra U = (3/2)nRT és az állapotegyenlet P V = nRT. A fenti eredmények felhasználásával
         határozzuk meg CV -t és CP -t.
     (b) Valós gázban rövid hatótávolságú vonzó molekulaközi erők hatnak. Ha ezek viszonylag gyengék, akkor az energiához
         egy kis negatív járulékot adnak, mégpedig a
                                                   3      an2
                                                U = nRT −     .
                                                   2       V
         alakban. Minőségileg magyarázzuk meg, miért arányos az energiaváltozás n2 /V -vel.
     (c) A 4. feladatban megmutatjuk, hogy ez az állapotegyenletet a következőre módosítja:
                                                 an2

                                             P + 2 V = nRT.
                                                 V
         Ezeket az eredményeket használva mutassuk meg, hogy az a paraméter első rendjében
                                         3                             2an2
                                     CV = nR,       CP − CV ≈ nR +          .
                                         2                              TV

                                                      4


    Kevin Zhou                                                                 Physics Olympiad Handouts


           Minőségileg magyarázzuk meg, miért pozitív előjelű az új tag.

         4. gondolat: Vegyes parciális deriváltak egyenlősége

         Ha egy f állapotfüggvény két különböző parciális deriváltját vesszük, a sorrend nem számít,

                                             ∂ ∂f       ∂ ∂f
                                                      =          .
                                             ∂x y ∂y x ∂y x ∂x y

         Ha ez az azonosság nem teljesül, akkor f valójában nem állapotfüggvény. Ezt a követelményt az x és y független
         változók különböző megválasztásaira alkalmazva számos nemtriviális azonosságot kapunk, amelyeket összefoglalóan
         Maxwell-relációknak nevezünk.
